var App = angular.module('footballApp', ['tc.chartjs']);

App.controller('positionController', function($scope, $http) {

  //JSON data for position and players

/*********************** PASTE AFTER HERE ************************/

$scope.currentDate = {"currentDate": "Thursday, 08 October 2020 06:59 AM (central time)"};
$scope.week = {"nflWeek": "5"};

$scope.qbStartSit = {"one": "Teddy Bridgewater", "two": "Kirk Cousins", "three": "Russell Wilson", "four": "Philip Rivers", "five": "Jimmy Garoppolo", "six": "Baker Mayfield", "seven": "Derek Carr", "eight": "Matt Ryan", "nine": "Ryan Fitzpatrick", "ten": "Tom Brady"};
$scope.rbStartSit = {"one": "James Robinson", "two": "Clyde Edwards-Helaire", "three": "Devin Singletary", "four": "Raheem Mostert", "five": "Todd Gurley", "six": "Miles Sanders", "seven": "Kareem Hunt", "eight": "Myles Gaskin", "nine": "Joshua Kelley", "ten": "David Montgomery"};
$scope.wrStartSit = {"one": "Adam Thielen", "two": "Tyler Lockett", "three": "T.Y. Hilton", "four": "Brandon Aiyuk", "five": "D.J. Moore", "six": "Henry Ruggs", "seven": "DeVante Parker", "eight": "Breshad Perriman", "nine": "Robert Woods", "ten": "Mike Evans"};
$scope.teStartSit = {"one": "Jonnu Smith", "two": "Ian Thomas", "three": "Jack Doyle", "four": "Jared Cook", "five": "Evan Engram", "six": "Austin Hooper", "seven": "Mike Gesicki", "eight": "Jake Butt", "nine": "Dalton Schultz", "ten": "Tyler Eifert"};
$scope.dstStartSit = {"one": "Dallas Cowboys", "two": "Arizona Cardinals", "three": "Los Angeles Rams", "four": "New England Patriots", "five": "New Orleans Saints", "six": "Minnesota Vikings", "seven": "Indianapolis Colts", "eight": "Los Angeles Chargers", "nine": "New York Giants", "ten": "Tennessee Titans"};

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
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3122840.png",
    "name": "Deshaun Watson",
    "depthchart": "Starter: QB-1",
    "team": "Houston Texans",
    "projected": 30.0,
    "opponent": "Jacksonville Jaguars",
    "home_away": "",
    "opp_rank_Pos": 24,
    "team_rank_Neu": 15,
    "avg_fp2": 19.12,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 21.09,
    "fanduelSalary": "$7900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#03202F",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(3, 32, 47, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/hou.png",
    "headlineNews": "Texans' Deshaun Watson: Posts 300 yards, drops to 0-4",
    "report": "Watson completed 20 of 33 attempts for 300 passing yards and two touchdowns, adding nine rushing yards on five carries during Sunday's 31-23 loss to the Vikings.The two-time Pro Bowl quarterback blew past his previous season high in passing yardage while also throwing multiple TDs for a second consecutive outing, but Watson's rushing floor has remained low since he accumulated 27 yards and a TD on the ground Week 1. Watson averaged 482 rushing yards and six rushing TDs between 2018 and 2019, but so far this season, that component has been largely absent from his game. Watson has just 31 rushing yards the past three weeks, and he hasn't logged a performance of three passing TDs since Dec. 1 of last year. Week 5 offers a chance for Watson to get back on track as he faces a Jaguars defense that surrendered 505 offensive yards and 33 points to Cincinnati on Sunday.",
    "analysis": "",
    "timestamp": "",
    "week01": 21.82,
    "week02": 15.7,
    "week03": 18.06,
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
    "week21": ""
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
                         data: [21.82, 15.7, 18.06, 20.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [24.8, 14.6, 24.3, 25.6, 30.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [13.2, 10.0, 17.4, 13.7, 11.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [31.0, 28.5, 33.5, 30.7, 31.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3139477.png",
    "name": "Patrick Mahomes",
    "depthchart": "Starter: QB-1",
    "team": "Kansas City Chiefs",
    "projected": 29.0,
    "opponent": "Las Vegas Raiders",
    "home_away": "",
    "opp_rank_Neu": 20,
    "team_rank_Pos": 6,
    "avg_fp2": 27.04,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 18.32,
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
    "headlineNews": "Chiefs' Patrick Mahomes: Tosses two touchdowns in win",
    "report": "Mahomes completed 19 of 29 passes for 236 yards and two touchdowns in Monday night's 26-10 win over the Patriots. He also rushed eight times for 28 yards.Mahomes didn't light up the box score like usual, but he still managed a couple scores against the well-coached New England defense. However, neither of the quarterback's touchdown tosses actually traveled past the line of scrimmage, as both were six-yard, shovel-style scores in the second half. To his credit, though, Mahomes also made an impact on the ground, boosting his production overall. While it wasn't a vintage performance from Mahomes, he'll still be pleased by maintaining his team's unbeaten record and his turnover-free start. Next up is a divisional clash with the Raiders in Week 5.",
    "analysis": "",
    "timestamp": "",
    "week01": 20.44,
    "week02": 27.48,
    "week03": 40.0,
    "week04": 20.24,
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
    "week21": ""
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
                         data: [20.44, 27.48, 40.0, 20.24]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [26.8, 20.8, 17.8, 31.6, 29.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [16.8, 17.6, 17.0, 15.9, 16.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [30.3, 32.6, 32.2, 30.8, 32.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3916387.png",
    "name": "Lamar Jackson",
    "depthchart": "Starter: QB-1",
    "team": "Baltimore Ravens",
    "projected": 24.0,
    "opponent": "Cincinnati Bengals",
    "home_away": "",
    "opp_rank_Neu": 16,
    "team_rank_Neg": 31,
    "avg_fp2": 21.32,
    "opp_rank_allowed_fp2_Neu": 9,
    "opp_avg_allowed_fp2": 17.88,
    "fanduelSalary": "$8900",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Knee",
    "tmColorLite": "#9E7C0C",
    "tmColorDark": "#241773",
    "tmColorLite_rgba": "rgba(158, 124, 12, 0.2)",
    "tmColorDark_rgba": "rgba(36, 23, 115, 0.2)",
    "tmTextLite": "#9E7C0C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png",
    "headlineNews": "Ravens' Lamar Jackson: Dealing with minor knee issue",
    "report": "Jackson sat out practice Wednesday with a knee issue that isn't considered serious, Adam Schefter of ESPN reports.The report notes that Jackson was held out of practice for \"precautionary reasons,\" which led to Robert Griffin handling first-team reps at quarterback. Jackson's status will be revisited when the Ravens practice again Thursday, but so far, there's no reason to think that his availability for Sunday's game against the Bengals is in any danger.",
    "analysis": "",
    "timestamp": "",
    "week01": 27.5,
    "week02": 17.56,
    "week03": 14.18,
    "week04": 26.02,
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
    "week21": ""
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
                         data: [27.5, 17.56, 14.18, 26.02]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [28.5, 28.8, 27.5, 29.5, 24.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [18.1, 16.9, 23.4, 20.7, 15.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [35.5, 27.6, 39.2, 34.6, 26.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2577417.png",
    "name": "Dak Prescott",
    "depthchart": "Starter: QB-1",
    "team": "Dallas Cowboys",
    "projected": 23.9,
    "opponent": "New York Giants",
    "home_away": "",
    "opp_rank_Neg": 6,
    "team_rank_Pos": 1,
    "avg_fp2": 31.3,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 16.67,
    "fanduelSalary": "$8700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#7F9695",
    "tmColorDark": "#041E42",
    "tmColorLite_rgba": "rgba(127, 150, 149, 0.2)",
    "tmColorDark_rgba": "rgba(4, 30, 66, 0.2)",
    "tmTextLite": "#7F9695",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
    "headlineNews": "Cowboys' Dak Prescott: Tops 500-yard mark vs. Browns",
    "report": "Prescott completed 41 of 58 pass attempts for 502 yards, four touchdowns and one interception Sunday against the Browns. He also carried two times for 12 yards in the 49-38 loss to the Browns, and was involved in three two-point conversions -- two passing, and one he ran in himself.Prescott set a new career best in passing yardage as he attempted to help his team battle back from yet another deficit. He connected for two touchdowns with CeeDee Lamb while adding scores to Amari Cooper and Dalton Schultz as well. Unfortunately, Prescott's lone interception on the day came in the final minutes as Dallas looked to draw near after closing a significant gap, sealing another disappointing outcome. Prescott's tendency to play from behind has been a huge boon to his fantasy value thus far, as he's on pace for an unsustainable 6,760 yards and 36 touchdowns through a quarter of a season. Next Sunday's game script against the Giants could be slightly different, but Prescott should still be considered a top fantasy option for that contest.",
    "analysis": "",
    "timestamp": "",
    "week01": 17.64,
    "week02": 39.8,
    "week03": 29.48,
    "week04": 38.28,
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
    "week21": ""
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
                         data: [17.64, 39.8, 29.48, 38.28]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.4, 20.9, 28.9, 22.8, 23.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [10.2, 11.0, 11.2, 13.0, 15.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  "rgba(127, 150, 149, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [25.1, 27.4, 27.1, 27.1, 38.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/5529.png",
    "name": "Philip Rivers",
    "depthchart": "Starter: QB-1",
    "team": "Indianapolis Colts",
    "projected": 23.3,
    "opponent": "Cleveland Browns",
    "home_away": "at ",
    "opp_rank_Pos": 30,
    "team_rank_Neu": 18,
    "avg_fp2": 13.14,
    "opp_rank_allowed_fp2_Pos": 30,
    "opp_avg_allowed_fp2": 25.68,
    "fanduelSalary": "$6900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#014683",
    "tmColorDark": "#002C5F",
    "tmColorLite_rgba": "rgba(1, 70, 131, 0.2)",
    "tmColorDark_rgba": "rgba(0, 44, 95, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png",
    "headlineNews": "Colts' Philip Rivers: Uninspiring in win",
    "report": "Rivers completed 16 of 29 passes for 190 yards, one touchdown and no interceptions in Week 4 against Chicago.The Colts played from ahead for the majority of the contest, meaning Rivers and the passing attack didn't need to be aggressive. Rivers' touchdown came on the team's first offensive possession, when he connected with Mo Alie-Cox for a 13-yard score. From there, Rivers orchestrated four drives that ended with field goals and no more trips to the end zone.  One positive is that Rivers has taken care of the ball, throwing zero interceptions in the past two weeks. He should be in for a positive matchup in Week 5 when the Colts take on the Browns.",
    "analysis": "",
    "timestamp": "",
    "week01": 16.82,
    "week02": 11.86,
    "week03": 12.68,
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
    "week21": ""
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
                         data: [16.82, 11.86, 12.68, 11.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [19.6, 26.8, 17.5, 13.6, 23.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [9.8, 11.4, 10.1, 9.6, 10.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [22.2, 22.4, 23.1, 22.2, 24.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4038941.png",
    "name": "Justin Herbert",
    "depthchart": "Starter: QB-1",
    "team": "Los Angeles Chargers",
    "projected": 23.0,
    "opponent": "New Orleans Saints",
    "home_away": "at ",
    "opp_rank_Neu": 13,
    "team_rank_Neu": 7,
    "avg_fp2": 20.98,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 22.98,
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
    "headlineNews": "Chargers' Justin Herbert: Another strong showing in loss",
    "report": "Herbert completed 20 of 25 passes for 291 yards with three touchdowns and one interception in the Chargers' 38-31 loss to the Buccaneers on Sunday. He also rushed five times for 14 yards.The rookie nearly eclipsed the 300-yard mark for the third time in as many starts to open his career, with a pretty 72-yard touchdown pass to Jalen Guyton in the fourth quarter helping him come tantalizingly close. While he ultimately fell short, Herbert once again looked very comfortable against a solid defense, and he was able to thrive most of the afternoon despite being without key deep threat Mike Williams (hamstring). Herbert's one interception was especially ill-timed, however, as it came with 2:34 remaining at the Buccaneers' 48-yard line and the Chargers down only seven points. It's uncertain whether Tyrod Taylor (ribs/lung) will be ready for a Monday night road battle against the Saints, but Herbert will be difficult to unseat from the top job considering how well he's played.",
    "analysis": "",
    "timestamp": "",
    "week01": "DNP",
    "week02": 23.24,
    "week03": 15.7,
    "week04": 24.0,
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
    "week21": ""
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
                         data: ['DNP', 23.24, 15.7, 24.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 0.9, 16.9, 10.9, 23.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 0.0, 11.4, 8.4, 13.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 128, 198, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 12.0, 25.3, 24.3, 27.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3918298.png",
    "name": "Josh Allen",
    "depthchart": "Starter: QB-1",
    "team": "Buffalo Bills",
    "projected": 22.5,
    "opponent": "Tennessee Titans",
    "home_away": "at ",
    "opp_rank_Neu": 23,
    "team_rank_Pos": 2,
    "avg_fp2": 30.08,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 20.01,
    "fanduelSalary": "$8400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#005596",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 85, 150, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
    "headlineNews": "Bills' Josh Allen: Full participant",
    "report": "Allen (left shoulder) was able to practice fully Wednesday.This is the final confirmation that Allen didn't significantly injure his non-throwing shoulder during Sunday's win over Las Vegas, bad as it initially looked. He'll resume his starting role Sunday in Tennessee, though the status of the game itself remains up in the air while the Titans work through COVID-19 issues.",
    "analysis": "",
    "timestamp": "",
    "week01": 28.18,
    "week02": 34.48,
    "week03": 32.24,
    "week04": 25.42,
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
    "week21": ""
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
                         data: [28.18, 34.48, 32.24, 25.42]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [19.9, 30.8, 18.3, 21.1, 22.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.3, 13.0, 10.2, 14.7, 10.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.6, 27.6, 26.8, 32.7, 30.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3917792.png",
    "name": "Daniel Jones",
    "depthchart": "Starter: QB-1",
    "team": "New York Giants",
    "projected": 22.1,
    "opponent": "Dallas Cowboys",
    "home_away": "at ",
    "opp_rank_Neu": 23,
    "team_rank_Neg": 29,
    "avg_fp2": 12.06,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 23.0,
    "fanduelSalary": "$7000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#0B2265",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(11, 34, 101, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png",
    "headlineNews": "Giants' Daniel Jones: Stifled by Rams",
    "report": "Jones completed 23 of 36 passes for 190 yards and an interception in Sunday's 17-9 loss to the Rams. He also gained 45 yards on six carries.On a day when the Giants' defense played well, Jones and the offense weren't able to take advantage. The second-year QB was sacked five times, and he was able to complete only one pass over 20 yards as he got little time in the pocket to let routes develop. Jones now has a miserable 2:5 TD:INT through four games, but his numbers could get healthier in Week 5 against a Cowboys defense that just surrendered 49 points to the Browns.",
    "analysis": "",
    "timestamp": "",
    "week01": 19.36,
    "week02": 8.74,
    "week03": 9.06,
    "week04": 11.1,
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
    "week21": ""
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
                         data: [19.36, 8.74, 9.06, 11.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.4, 20.0, 16.4, 16.3, 22.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [8.1, 5.0, 4.9, 7.5, 8.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [27.5, 25.3, 15.3, 27.9, 25.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14881.png",
    "name": "Russell Wilson",
    "depthchart": "Starter: QB-1",
    "team": "Seattle Seahawks",
    "projected": 21.5,
    "opponent": "Minnesota Vikings",
    "home_away": "",
    "opp_rank_Pos": 29,
    "team_rank_Pos": 3,
    "avg_fp2": 31.23,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 19.14,
    "fanduelSalary": "$8600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#69BE28",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(105, 190, 40, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#69BE28",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
    "headlineNews": "Seahawks' Russell Wilson: Ties NFL record in win",
    "report": "Wilson completed 24 of 34 passes for 360 yards, two touchdowns and an interception in Sunday's 31-23 road win over the Dolphins. He also rushed four times for five yards.Wilson seemed a bit off at times Sunday, and he tossed a rare interception in the end zone. Still, he was quite effective overall, recording a season-high 10.6 yards per attempt while throwing a pair of touchdowns to Travis Homer and David Moore. With 16 touchdowns on the season, Wilson ties Peyton Manning for the most passing scores thrown through the first four games of a season. The MVP campaign is alive and well for the 31-year-old signal caller, and he'll look to pick apart a brutal Vikings defense that has allowed 13 passing scores in Week 5.",
    "analysis": "",
    "timestamp": "",
    "week01": 31.78,
    "week02": 34.42,
    "week03": 36.8,
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
    "week21": ""
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
                         data: [31.78, 34.42, 36.8, 21.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.3, 20.0, 29.1, 24.5, 21.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [12.1, 11.8, 12.4, 11.3, 11.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [26.9, 26.8, 26.1, 26.2, 26.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14880.png",
    "name": "Kirk Cousins",
    "depthchart": "Starter: QB-1",
    "team": "Minnesota Vikings",
    "projected": 21.1,
    "opponent": "Seattle Seahawks",
    "home_away": "at ",
    "opp_rank_Pos": 32,
    "team_rank_Neg": 28,
    "avg_fp2": 15.15,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 28.32,
    "fanduelSalary": "$6800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e0aa19",
    "tmColorDark": "#300e5a",
    "tmColorLite_rgba": "rgba(224, 170, 25, 0.2)",
    "tmColorDark_rgba": "rgba(48, 14, 90, 0.2)",
    "tmTextLite": "#e0aa19",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/min.png",
    "headlineNews": "Vikings' Kirk Cousins: Leads team to first win of season",
    "report": "Cousins went 16-for-22 passing with 260 yards and one touchdown during Sunday's 31-23 win against the Texans. He added five rushing yards on four attempts.The 32-year-old QB avoided committing a turnover in a game for the first time this season, after he threw an average of two interceptions per game Weeks 1 through 3. Cousins still hasn't eclipsed the 260-yard passing mark in 2020, but at least he has multiple passing TDs in two of his four outings to this point. Next, Cousins will face a Seahawks defense that surrendered 362 combined passing and rushing yards to Miami's Ryan Fitzpatrick in Week 4.",
    "analysis": "",
    "timestamp": "",
    "week01": 22.76,
    "week02": 1.52,
    "week03": 21.44,
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
    "week21": ""
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
                         data: [22.76, 1.52, 21.44, 14.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.6, 19.7, 17.5, 18.2, 21.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [9.2, 8.8, 6.9, 9.7, 8.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  "rgba(224, 170, 25, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [23.3, 24.5, 22.6, 25.5, 23.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3917315.png",
    "name": "Kyler Murray",
    "depthchart": "Starter: QB-1",
    "team": "Arizona Cardinals",
    "projected": 20.0,
    "opponent": "New York Jets",
    "home_away": "at ",
    "opp_rank_Neu": 15,
    "team_rank_Neu": 23,
    "avg_fp2": 27.07,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 17.82,
    "fanduelSalary": "$8300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#97233F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(151, 35, 63, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#97233F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
    "headlineNews": "Cardinals' Kyler Murray: Three touchdown passes",
    "report": "Murray completed 24 of 31 pass attempts for 133 yards and three touchdowns in Week 4 against Carolina. He added 78 rushing yards.Murray didn't deliver a gaudy yardage total, averaging only 4.3 yards per attempt. However, he did salvage his performance by recording at least three passing touchdowns for the first time this season -- each which came within three yards of the end zone. Positively, Murray remained dangerous with his legs, as he broke off a 48-yard run to highlight his third performance this season with over 50 rushing yards. Murray should be in line to bounce back through the air in Week 5, as the Cardinals will take on the Jets.",
    "analysis": "",
    "timestamp": "",
    "week01": 27.3,
    "week02": 33.14,
    "week03": 24.7,
    "week04": 23.12,
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
    "week21": ""
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
                         data: [27.3, 33.14, 24.7, 23.12]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.8, 22.3, 22.3, 20.8, 20.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [10.9, 13.9, 11.4, 17.0, 15.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.5, 26.1, 24.0, 30.4, 28.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/12477.png",
    "name": "Brian Hoyer",
    "depthchart": "Starter: QB-1",
    "team": "New England Patriots",
    "projected": 19.6,
    "opponent": "Denver Broncos",
    "home_away": "",
    "opp_rank_Neu": 21,
    "team_rank_Neg": 24,
    "avg_fp2": 3.0,
    "opp_rank_allowed_fp2_Pos": 24,
    "opp_avg_allowed_fp2": 21.68,
    "fanduelSalary": "$6700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#C60C30",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png",
    "headlineNews": "Patriots' Brian Hoyer: Lackluster showing in loss",
    "report": "Hoyer completed 15 of 24 passes for 130 yards with no touchdowns and one interception in the Patriots' 26-10 loss to the Chiefs on Monday night. He also gained eight yards on his sole rush and lost a fumble before being replaced by Jarrett Stidham late in the third quarter.The veteran quarterback drew the start for Cam Newton (illness), but even Hoyer's extensive experience in coordinator Josh McDaniels' offense couldn't help him to a competent performance against an aggressive KC defense. A miscue ultimately proved his undoing, as Hoyer fumbled at the Chiefs' eight-yard line to short-circuit New England's best drive of the night in the latter portion of the third quarter. That eventually led to Stidham mopping up after that point, and although the second-year signal-caller was guilty of a pick-six on a deflected ball off the hands of Julian Edelman, he may be in line for a Week 5 start against the Broncos over Hoyer if Newton is still sidelined for that contest.",
    "analysis": "",
    "timestamp": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
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
    "week21": ""
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
                         data: ['DNP', 'DNP', 'DNP', 3.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 2.2, 19.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 2.9, 5.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 16.6, 18.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2580.png",
    "name": "Drew Brees",
    "depthchart": "Starter: QB-1",
    "team": "New Orleans Saints",
    "projected": 19.2,
    "opponent": "Los Angeles Chargers",
    "home_away": "",
    "opp_rank_Pos": 25,
    "team_rank_Neu": 17,
    "avg_fp2": 17.48,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 23.21,
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
    "headlineNews": "Saints' Drew Brees: No Thomas, no problem",
    "report": "Brees completed 19 of 25 passes for 246 yards, two touchdowns and an interception in Sunday's 35-29 win over the Lions. He also recorded three rushing attempts for minus-3 yards.Brees was picked off on New Orleans' first offensive play, and the Saints found themselves down 14-0 by the next time they got the ball. It was all New Orleans from there, though, as Brees threw touchdowns of two and 20 yards to Tre'Quan Smith to put his team up 28-14 at the half. Those two passing scores coupled with a trio of rushing touchdowns provided just enough offense for New Orleans to avoid a third consecutive loss. Brees will hope to have No. 1 receiver Michael Thomas (ankle) back for the first time since the season opener for a Week 5 home matchup against the Chargers.",
    "analysis": "",
    "timestamp": "",
    "week01": 14.4,
    "week02": 15.48,
    "week03": 23.52,
    "week04": 16.54,
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
    "week21": ""
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
                         data: [14.4, 15.48, 23.52, 16.54]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [21.8, 22.8, 18.5, 21.3, 19.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [9.4, 14.7, 9.6, 11.3, 10.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(155, 132, 92, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [26.8, 30.5, 27.9, 28.4, 25.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3915511.png",
    "name": "Joe Burrow",
    "depthchart": "Starter: QB-1",
    "team": "Cincinnati Bengals",
    "projected": 18.6,
    "opponent": "Baltimore Ravens",
    "home_away": "at ",
    "opp_rank_Pos": 26,
    "team_rank_Neu": 16,
    "avg_fp2": 19.59,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 21.36,
    "fanduelSalary": "$7300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#ea7330",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(234, 115, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#ea7330",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png",
    "headlineNews": "Bengals' Joe Burrow: Throws for 300 in first win",
    "report": "Burrow completed 25 of 36 passes for 300 yards, one touchdown and one interception in Sunday's 33-25 win over the Jaguars. He added four carries for 11 yards.Burrow threw for 300 yards for a third consecutive week en route to his first NFL win. He had a would-be 16-yard touchdown to Tyler Boyd wiped out by a holding penalty in the first quarter, and the Bengals ended up settling for a field goal for the game's first points. Burrow was intercepted on 3rd-and-goal from the 1-yard line on the next possession, though it's tough to put that one on the quarterback, as Jaguars linebacker Myles Jack wrestled the ball away from tight end Drew Sample in the back of the end zone. The rookie quarterback finally got his team into the end zone with a nine-yard touchdown pass to Joe Mixon in the final minute of the first half, and Mixon took over in the second half with a pair of rushing touchdowns. Cincinnati's offense was able to dictate the game against the subpar Jaguars defense, but a repeat performance will be hard to come by against the Ravens on the road in Week 5.",
    "analysis": "",
    "timestamp": "",
    "week01": 17.32,
    "week02": 24.54,
    "week03": 20.38,
    "week04": 16.1,
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
    "week21": ""
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
                         data: [17.32, 24.54, 20.38, 16.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.6, 14.6, 22.0, 27.0, 18.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.6, 11.6, 12.0, 11.2, 12.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.7, 25.2, 25.8, 25.7, 25.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16760.png",
    "name": "Jimmy Garoppolo",
    "depthchart": "Starter: QB-1",
    "team": "San Francisco 49ers",
    "projected": 18.3,
    "opponent": "Miami Dolphins",
    "home_away": "",
    "opp_rank_Pos": 28,
    "team_rank_Neu": 12,
    "avg_fp2": 16.25,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 23.07,
    "fanduelSalary": "$6700",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Ankle",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "49ers' Jimmy Garoppolo: Limited in return to practice",
    "report": "Garoppolo (ankle) was a limited practice participant Wednesday, Nick Wagoner of ESPN.com reports.As expected, Garoppolo's reps were capped in his first on-field work since suffering a high right ankle sprain Week 2. He'll have two more chances to prove the health of his ankle before the 49ers make a decision on their starting quarterback for Sunday's game against the Dolphins. Another absence from Garoppolo will result in one of Nick Mullens or C.J. Beathard starting at quarterback.",
    "analysis": "",
    "timestamp": "",
    "week01": 19.26,
    "week02": 13.24,
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
    "week21": ""
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
                         data: [19.26, 13.24, 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.6, 18.1, 'DNP', 'DNP', 18.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.9, 6.9, 'DNP', 'DNP', 5.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.6, 22.1, 'DNP', 'DNP', 16.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/5536.png",
    "name": "Ben Roethlisberger",
    "depthchart": "Starter: QB-1",
    "team": "Pittsburgh Steelers",
    "projected": 18.3,
    "opponent": "Philadelphia Eagles",
    "home_away": "",
    "opp_rank_Neu": 17,
    "team_rank_Neu": 17,
    "avg_fp2": 20.16,
    "opp_rank_allowed_fp2_Neu": 7,
    "opp_avg_allowed_fp2": 17.67,
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
    "headlineNews": "Steelers' Ben Roethlisberger: Week 4 game called off",
    "report": "Roethlisberger and the Steelers will not take the field Week 4 against the Titans following additional positive COVID-19 tests within the Tennessee organization, Tom Pelissero of NFL Network reports.The initial plan was to move the game from Sunday to either Monday or Tuesday, but with reports of additional positive tests from another Titans player and personnel member surfacing, the league ultimately decided it would be best to postpone the contest. The Steelers were originally in line for a Week 8 bye, but it remains to be seen if that will stay intact with a new Week 4 bye now on the calendar.",
    "analysis": "",
    "timestamp": "",
    "week01": 22.06,
    "week02": 19.24,
    "week03": 19.18,
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
    "week21": ""
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
                         data: [22.06, 19.24, 19.18, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.4, 23.0, 24.3, 'DNP', 18.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [8.8, 12.1, 10.4, 'DNP', 9.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [24.3, 25.8, 23.7, 'DNP', 24.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/11237.png",
    "name": "Matt Ryan",
    "depthchart": "Starter: QB-1",
    "team": "Atlanta Falcons",
    "projected": 18.3,
    "opponent": "Carolina Panthers",
    "home_away": "",
    "opp_rank_Neu": 7,
    "team_rank_Pos": 5,
    "avg_fp2": 19.56,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 15.52,
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
    "headlineNews": "Falcons' Matt Ryan: Held without TD during MNF defeat",
    "report": "Ryan completed 28 of 39 attempts for 285 passing yards, with no touchdowns and no interceptions during Monday's 30-16 loss to the Packers. He also registered 10 rushing yards on two carries.The four-time Pro Bowl quarterback has been contained on the stat sheet over his past two outings after strong Weeks 1 and 2 in which he threw for 723 combined yards and a 6:1 TD INT. Ryan composed just one total passing touchdown against the Bears and Packers over Weeks 3 and 4, with Monday marking his fourth no-TD outing in 19 appearances since the start of last season. With his 0-4 Falcons desperate for a win, Ryan faces a Carolina defense Week 5 that has surrendered just 1.5 passing TDs per game this season, while ranking third-best in the NFL with 6.3 yards allowed per attempt.",
    "analysis": "",
    "timestamp": "",
    "week01": 24.9,
    "week02": 28.52,
    "week03": 12.42,
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
    "week21": ""
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
                         data: [24.9, 28.52, 12.42, 12.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [20.4, 15.8, 20.9, 19.9, 18.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [11.2, 13.1, 11.0, 14.8, 11.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [24.9, 25.8, 24.1, 27.2, 24.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4038524.png",
    "name": "Gardner Minshew",
    "depthchart": "Starter: QB-1",
    "team": "Jacksonville Jaguars",
    "projected": 18.2,
    "opponent": "Houston Texans",
    "home_away": "at ",
    "opp_rank_Neg": 5,
    "team_rank_Neu": 10,
    "avg_fp2": 19.61,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 18.02,
    "fanduelSalary": "$7200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#006778",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 103, 120, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#006778",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/jax.png",
    "headlineNews": "Jaguars' Gardner Minshew: Tops 350 yards in loss",
    "report": "Minshew completed 27 of 40 passes for 351 yards, two touchdowns and an interception in Sunday's 33-25 loss to the Bengals. He added two carries for nine yards.After throwing an interception on the opening drive, Minshew made amends with an 11-yard touchdown to DJ Chark to grab a 7-3 lead late in the first quarter. Unfortunately for the Jaguars, they didn't get back into the end zone again until Minshew's two-yard score to Chark with 6:14 left in the game. The second-year quarterback has thrown for 1,138 yards and an 8:4 TD:INT heading into his team's Week 5 trip to Houston.",
    "analysis": "",
    "timestamp": "",
    "week01": 20.82,
    "week02": 25.46,
    "week03": 10.2,
    "week04": 21.94,
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
    "week21": ""
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
                         data: [20.82, 25.46, 10.2, 21.94]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [24.0, 16.5, 26.4, 20.0, 18.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [12.6, 10.7, 12.6, 10.8, 13.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 103, 120, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [23.5, 21.9, 22.7, 23.4, 23.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/11252.png",
    "name": "Joe Flacco",
    "depthchart": "Starter: QB-1",
    "team": "New York Jets",
    "projected": 17.5,
    "opponent": "Arizona Cardinals",
    "home_away": "",
    "opp_rank_Neu": 14,
    "team_rank_Neg": 32,
    "avg_fp2": 0.64,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 19.18,
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
    "headlineNews": "Jets' Joe Flacco: Set to start in Week 5",
    "report": "Jets head coach Adam Gase said Wednesday that Flacco will start at quarterback in Sunday's game against the Cardinals, Rich Cimini of ESPN.com reports.According to Cimini, Sam Darnold (shoulder) won't be available Sunday and is being viewed as week-to-week, so Flacco could log more that one start while the Jets' top signal-caller recovers from an injury. Leading an 0-4 team with a banged-up wideout corps isn't an optimal context from a fantasy perspective, but Flacco is at least an experienced veteran option whose presence should allow the Jets to proceed cautiously with Darnold.",
    "analysis": "",
    "timestamp": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": 0.64,
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
    "week21": ""
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
                         data: ['DNP', 'DNP', 'DNP', 0.64]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 6.1, 17.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 8.6, 9.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  "rgba(18, 87, 64, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 20.3, 21.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3052587.png",
    "name": "Baker Mayfield",
    "depthchart": "Starter: QB-1",
    "team": "Cleveland Browns",
    "projected": 17.0,
    "opponent": "Indianapolis Colts",
    "home_away": "",
    "opp_rank_Neg": 1,
    "team_rank_Neg": 30,
    "avg_fp2": 14.16,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 11.23,
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
    "headlineNews": "Browns' Baker Mayfield: Tosses two scores against Cowboys",
    "report": "Mayfield completed 19 of 30 passes for 165 yards and two touchdowns in Sunday's 49-38 win over the Cowboys.Mayfield wasn't very effective with just 5.5 yards per attempt, but he didn't need to be, as Nick Chubb (knee) and Kareem Hunt were effective out of the backfield while Jarvis Landry performed some trickery on a touchdown pass to Odell Beckham, who also rushed for a touchdown. It's fair to discount this performance as going up against a putrid Cowboys defense, and a Week 5 matchup against the Colts will be a better test, especially with Chubb sidelined. The Colts rank first in the league with just 159 passing yards allowed per game.",
    "analysis": "",
    "timestamp": "",
    "week01": 10.86,
    "week02": 16.26,
    "week03": 14.34,
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
    "week21": ""
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
                         data: [10.86, 16.26, 14.34, 15.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [22.1, 19.9, 21.1, 15.8, 17.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [10.5, 10.3, 10.0, 13.0, 10.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [22.0, 22.1, 20.2, 22.0, 21.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3046779.png",
    "name": "Jared Goff",
    "depthchart": "Starter: QB-1",
    "team": "Los Angeles Rams",
    "projected": 16.6,
    "opponent": "Washington Football Team",
    "home_away": "at ",
    "opp_rank_Neg": 4,
    "team_rank_Neu": 14,
    "avg_fp2": 18.86,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 21.95,
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
    "headlineNews": "Rams' Jared Goff: Modest numbers in win",
    "report": "Goff completed 25 of 32 passes for 200 yards and a touchdown in Sunday's 17-9 win over the Giants.The Rams' offense couldn't get much going in this one, but Aaron Donald and the Rams' defense made sure they didn't need to. Goff now has a 6:2 TD:INT and has completed better than 70 percent of his passes in three straight games heading into a Week 5 clash with a Washington defense that's allowed multiple passing TDs in three of four games so far this season.",
    "analysis": "",
    "timestamp": "",
    "week01": 11.5,
    "week02": 23.98,
    "week03": 28.24,
    "week04": 11.7,
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
    "week21": ""
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
                         data: [11.5, 23.98, 28.24, 11.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [20.2, 15.9, 16.5, 21.4, 16.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.3, 12.7, 8.1, 15.3, 9.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [23.0, 26.2, 24.5, 26.9, 23.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2573079.png",
    "name": "Carson Wentz",
    "depthchart": "Starter: QB-1",
    "team": "Philadelphia Eagles",
    "projected": 15.5,
    "opponent": "Pittsburgh Steelers",
    "home_away": "at ",
    "opp_rank_Neu": 12,
    "team_rank_Neg": 27,
    "avg_fp2": 18.83,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 18.65,
    "fanduelSalary": "$7200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#386168",
    "tmColorDark": "#004C54",
    "tmColorLite_rgba": "rgba(56, 97, 104, 0.2)",
    "tmColorDark_rgba": "rgba(0, 76, 84, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    "headlineNews": "Eagles' Carson Wentz: Leads team to first win",
    "report": "Wentz completed 18 of 28 pass attempts for 193 yards, a touchdown and an interception while rushing seven times for 37 yards and another touchdown in Sunday's 25-20 win over San Francisco.It wasn't pretty -- Wentz was consistently under duress behind a shoddy offensive line -- but he was able to will his team to its first victory of the season. The 27-year-old has an ugly 4:7 TD:INT ratio through four games, but he has salvaged some fantasy value with 111 rushing yards and three rushing touchdowns. Wentz's struggles can't be solely placed on him, as he has had little help in terms of talent on the outside and a banged-up offensive line, but excuses don't result in more fantasy points. Expect the signal caller to continue scrambling and improvising against a tough Steelers defense in Week 5, especially if right tackle Lane Johnson (ankle) is unable to suit up.",
    "analysis": "",
    "timestamp": "",
    "week01": 15.0,
    "week02": 14.38,
    "week03": 23.5,
    "week04": 22.42,
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
    "week21": ""
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
                         data: [15.0, 14.38, 23.5, 22.42]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.9, 12.8, 18.6, 15.2, 15.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [11.6, 11.6, 11.0, 9.9, 9.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [24.6, 22.7, 23.7, 23.3, 23.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16757.png",
    "name": "Derek Carr",
    "depthchart": "Starter: QB-1",
    "team": "Las Vegas Raiders",
    "projected": 15.3,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Neg": 3,
    "team_rank_Neu": 13,
    "avg_fp2": 17.75,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 16.73,
    "fanduelSalary": "$6900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A5ACAF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lv.png",
    "headlineNews": "Raiders' Derek Carr: Good showing against Bills",
    "report": "Carr completed 32 of 44 passes for 311 yards and two touchdowns in Sunday's 30-23 loss to the Bills. He also gained 20 yards on four carries.It took a lot of volume to get there, but Carr put together another strong performance as he attempted to keep pace with Josh Allen, posting a season high in passing yards while completing better than 72 percent of his passes for a fourth straight game. Carr could be headed for another shootout in Week 5 as the Raiders head to Kansas City to take on Patrick Mahomes and the defending champs.",
    "analysis": "",
    "timestamp": "",
    "week01": 13.56,
    "week02": 21.58,
    "week03": 15.44,
    "week04": 20.44,
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
    "week21": ""
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
                         data: [13.56, 21.58, 15.44, 20.44]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.5, 16.0, 10.2, 21.2, 15.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [9.0, 9.1, 8.7, 7.7, 7.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [22.9, 24.0, 22.9, 22.6, 22.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2330.png",
    "name": "Tom Brady",
    "depthchart": "Starter: QB-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 14.7,
    "opponent": "Chicago Bears",
    "home_away": "at ",
    "opp_rank_Neu": 9,
    "team_rank_Neu": 9,
    "avg_fp2": 22.37,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 12.39,
    "fanduelSalary": "$7500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#D50A0A",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(213, 10, 10, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#D50A0A",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Buccaneers' Tom Brady: Excels in comeback win",
    "report": "Brady completed 30 of 46 passes for 369 yards with five touchdowns and one interception in the Buccaneers' 38-31 win over the Chargers on Sunday. He also netted minus-3 yards on three rushes.Everything about the interconference battle seemed to go opposite what was expected, with Brady's final line a byproduct of the unpredictable nature of the contest. The future Hall of Famer ended up having to put the game on his shoulders despite being down Chris Godwin (hamstring), as the Chargers owned a surprising 24-14 lead at halftime. Brady was especially stellar in the second half, leading four scoring drives and capping three of them with touchdown passes to O.J. Howard (Achilles), Scotty Miller and Ke'Shawn Vaughn. Those scoring tosses were preceded by a pair to Cameron Brate and Mike Evans in the first half, making it Brady's second straight multi-touchdown game and third in his first four overall as a Buccaneer. Brady is getting increasingly comfortable in coach Bruce Arians' offense after having thrown for 666 yards and eight touchdowns over the last two games, and he'll look to follow up his season-best effort in a Thursday night road showdown against the Bears.",
    "analysis": "",
    "timestamp": "",
    "week01": 22.46,
    "week02": 9.68,
    "week03": 23.88,
    "week04": 33.46,
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
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [22.46, 9.68, 23.88, 33.46]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [23.4, 22.6, 19.6, 16.0, 14.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [10.5, 12.7, 12.4, 10.2, 10.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(213, 10, 10, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [25.9, 27.3, 27.2, 24.0, 25.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14877.png",
    "name": "Nick Foles",
    "depthchart": "Starter: QB-1",
    "team": "Chicago Bears",
    "projected": 14.4,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "",
    "opp_rank_Neu": 19,
    "team_rank_Neu": 21,
    "avg_fp2": 15.54,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 16.59,
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
    "headlineNews": "Bears' Nick Foles: Underwhelming in loss",
    "report": "Foles completed 26 of 42 passes for 249 yards with a touchdown and an interception in Chicago's 19-11 loss to the Colts on Sunday.Foles was having a terrible fantasy performance until the last drive of the game, when he consistently hooked up with Allen Robinson for a number of chunk plays that earned him a respectable yardage total along with his only touchdown of the day. Otherwise, he was erratic for most of the contest until the Colts were winning big in the fourth quarter and went to a prevent defense that allowed many short completions. Fantasy managers should expect him to function as a top-24 quarterback option who'll likely be best used in favorable matchups.",
    "analysis": "",
    "timestamp": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": 18.22,
    "week04": 12.86,
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
    "week21": ""
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
                         data: ['DNP', 'DNP', 18.22, 12.86]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 12.5, 15.2, 14.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 3.7, 10.8, 4.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  "rgba(195, 104, 53, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 22.7, 29.2, 25.5]
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
    "opponent": "Buffalo Bills",
    "home_away": "",
    "opp_rank_Pos": 27,
    "team_rank_Neu": 11,
    "avg_fp2": 19.79,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 21.3,
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
    "headlineNews": "Titans' Ryan Tannehill: Game won't be played Week 4",
    "report": "Tannehill and the Titans will not be taking on the Steelers in Week 4 after additional personnel within the organization have tested positive for COVID-19, Tom Pelissero of NFL Network reports.The initial plan was simply to reschedule the Oct. 4 matchup for Monday or Tuesday, but it now appears both teams will receive a Week 4 bye and the game will be rescheduled at a yet-to-be-determined date. Practice facilities will be closed in Tennessee until further notice after an additional player and personnel member returned positive tests, with a re-open unlikely until the outbreak has been contained.",
    "analysis": "",
    "timestamp": "",
    "week01": 19.36,
    "week02": 26.76,
    "week03": 13.24,
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
    "week21": ""
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
                         data: [19.36, 26.76, 13.24, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.0, 17.5, 14.7, 'DNP', 14.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [9.4, 9.1, 9.1, 'DNP', 10.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [22.2, 22.3, 22.4, 'DNP', 23.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/8664.png",
    "name": "Ryan Fitzpatrick",
    "depthchart": "Starter: QB-1",
    "team": "Miami Dolphins",
    "projected": 13.9,
    "opponent": "San Francisco 49ers",
    "home_away": "at ",
    "opp_rank_Neg": 2,
    "team_rank_Neu": 20,
    "avg_fp2": 20.19,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 18.18,
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
    "headlineNews": "Dolphins' Ryan Fitzpatrick: Sticking as starter for Week 5",
    "report": "Fitzpatrick will remain the Dolphins' starting quarterback Sunday at San Francisco, Cameron Wolfe of ESPN.com reports.On Monday, coach Brian Flores induced rumblings about a QB change when he wouldn't commit to Fitzpatrick as the starter for Week 5. One day later, though, the Dolphins have decided to stick with the veteran for the time being. While he's completed a career-best 69 percent of his passes, he's averaging 248.5 passing yards per game and has four touchdowns versus five interceptions, leading the team to a 1-3 record. Fitzpatrick seems to be a placeholder at the position until Flores believes 2020 first-round pick Tua Tagovailoa is ready to take the reigns of Miami's offense.",
    "analysis": "",
    "timestamp": "",
    "week01": 8.44,
    "week02": 24.32,
    "week03": 24.7,
    "week04": 23.3,
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
    "week21": ""
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
                         data: [8.44, 24.32, 24.7, 23.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.7, 17.7, 18.5, 25.8, 13.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [11.9, 6.8, 7.3, 6.9, 8.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 142, 151, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [25.3, 23.3, 24.3, 23.1, 23.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3722362.png",
    "name": "Brett Rypien",
    "depthchart": "Starter: QB-1",
    "team": "Denver Broncos",
    "projected": 13.7,
    "opponent": "New England Patriots",
    "home_away": "at ",
    "opp_rank_Neu": 10,
    "team_rank_Neg": 25,
    "avg_fp2": 7.65,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 19.64,
    "fanduelSalary": "$6500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e17757",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(225, 119, 87, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#e17757",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/den.png",
    "headlineNews": "Broncos' Brett Rypien: Overcomes three-interception night",
    "report": "Rypien completed 19 of 31 passes for 242 yards with two touchdowns and three interceptions in the Broncos' 37-28 win over the Jets on Thursday. He also rushed for minus-5 yards on five carries.Rypien had quite the rollercoaster of a first NFL start, providing a fair share of highlights and regrettable moments during the surprisingly high-scoring win. The Boise State product almost derailed the game with a pair of second-half interceptions over a span of four attempts, with one of the picks being returned for a touchdown by Pierre Desir to bring the Jets to within 27-25 with 10:45 remaining. However, to his credit, Rypien righted the ship by subsequently leading a pivotal nine-play, 40-yard drive highlighted by a 31-yard completion to Tim Patrick that put the ball in field-goal range. Rypien also connected with rookie Jerry Jeudy earlier in the game on a 48-yard score, and outside of the miscues, he performed serviceably for a first-time starter that traveled a pair of time zones to play on a short week. He'll now have extra time to prepare for what could be a Week 5 start on the road against the Patriots on Sunday, Oct. 11 unless Drew Lock (shoulder) is deemed ready to return for that contest.",
    "analysis": "",
    "timestamp": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": 1.12,
    "week04": 14.18,
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
    "week21": ""
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
                         data: ['DNP', 'DNP', 1.12, 14.18]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 3.3, 10.5, 13.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 0.0, 4.9, 6.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(225, 119, 87, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 9.9, 17.7, 19.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16728.png",
    "name": "Teddy Bridgewater",
    "depthchart": "Starter: QB-1",
    "team": "Carolina Panthers",
    "projected": 11.4,
    "opponent": "Atlanta Falcons",
    "home_away": "at ",
    "opp_rank_Pos": 31,
    "team_rank_Neu": 8,
    "avg_fp2": 17.98,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 32.97,
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
    "headlineNews": "Panthers' Teddy Bridgewater: Leads Panthers to second straight W",
    "report": "Bridgewater went 26-for-37 with 276 yards, two touchdowns and one interception, adding six carries for 32 yards and a rushing touchdown during Sunday's 31-21 win against Arizona.The 27-year-old signal-caller has composed winning starts in consecutive outings, handing Carolina its first back-to-back wins since Weeks 5 and 6 of 2019. Bridgewater has provided ample production in the yardage department through four appearances, throwing for more than 285 passing yards per game, but he had just two total touchdowns entering Sunday's contest. The scoring breakout from Bridgewater comes as Carolina prepares for a favorable QB matchup against Atlanta's bottom-three pass defense.",
    "analysis": "",
    "timestamp": "",
    "week01": 19.4,
    "week02": 10.68,
    "week03": 14.6,
    "week04": 27.24,
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
    "week21": ""
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
                         data: [19.4, 10.68, 14.6, 27.24]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.7, 15.9, 18.5, 19.1, 11.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [8.8, 2.9, 5.1, 4.0, 3.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 133, 202, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [25.0, 17.4, 17.1, 17.4, 19.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3115293.png",
    "name": "Kyle Allen",
    "depthchart": "Starter: QB-1",
    "team": "Washington Football Team",
    "projected": 3.4,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank_Neu": 8,
    "team_rank_Neg": 26,
    "avg_fp2": 14.88,
    "opp_rank_allowed_fp2_Neu": 15,
    "opp_avg_allowed_fp2": 18.84,
    "fanduelSalary": "$6000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#773141",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(119, 49, 65, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png",
    "headlineNews": "Football Team's Kyle Allen: Receiving Week 5 start",
    "report": "Washington will name Allen its new starting quarterback ahead of Sunday's game against the Rams, Ian Rapoport of NFL Network reports.The Football Team's No. 2 quarterback for the first quarter of the season, Allen will ascend to the top spot on the depth chart after Dwayne Haskins (61.0 percent completion rate, 6.4 yards per attempt, 4:3 TD:INT) was benched after generally struggling to move the offense through Washington's first four games. Allen's existing familiarity with first-year head coach Ron Rivera from their time together in Carolina the past two seasons may have accelerated the change at quarterback, but expectations for the 24-year-old should be tempered as he steps in as Washington's new signal-caller. Allen was unable to keep turnovers in check while seeing extended action for the Panthers in 2019, throwing 16 interceptions and fumbling 13 times (losing seven) in 13 games. Allen will need to clean up the mistakes with Washington if he hopes to maintain his starting role throughout the season and hold off veteran Alex Smith, who will elevate to the backup role Week 5 while Haskins falls to third on the depth chart, per Tom Pelissero of NFL Network.",
    "analysis": "",
    "timestamp": "",
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
    "week21": ""
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
                         data: ['DNP', 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 3.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 7.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 21.8]
                    }
                    
                    ]
               }
            }];




$scope.positionRB = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2508176.png",
    "name": "David Johnson",
    "depthchart": "Starter: RB-1",
    "team": "Houston Texans",
    "projected": 23.4,
    "opponent": "Jacksonville Jaguars",
    "home_away": "",
    "opp_rank_Pos": 26,
    "team_rank_Neg": 32,
    "avg_fp2": 11.55,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 27.95,
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
    "headlineNews": "Texans' David Johnson: Held in check by Vikings",
    "report": "Johnson registered 63 rushing yards on 16 carries, also corralling two of three targets for 29 receiving yards during Sunday's 31-23 loss to Minnesota.Following a promising Texans debut in which he racked up 109 scrimmage yards, including a 19-yard touchdown run, Johnson has been largely contained by opposing defenses the past three weeks. In his most recent outings against the Ravens, Steelers and Vikings, the 2016 All-Pro has averaged a meager 3.0 yards per rushing attempt with one total touchdown and two catches per game. The slate does get significantly easier for Johnson in Week 5, as he faces a Jaguars defense that just surrendered 151 rushing yards and three total TDs to Cincinnati back Joe Mixon.",
    "analysis": "",
    "timestamp": "",
    "week01": 18.4,
    "week02": 6.0,
    "week03": 11.6,
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
    "week21": ""
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
                         data: [18.4, 6.0, 11.6, 10.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.9, 5.3, 11.8, 18.8, 23.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.7, 12.4, 6.5, 7.3, 6.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [23.0, 29.3, 22.2, 25.0, 21.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3054850.png",
    "name": "Alvin Kamara",
    "depthchart": "Starter: RB-1",
    "team": "New Orleans Saints",
    "projected": 20.6,
    "opponent": "Los Angeles Chargers",
    "home_away": "",
    "opp_rank_Neu": 14,
    "team_rank_Neu": 13,
    "avg_fp2": 28.18,
    "opp_rank_allowed_fp2_Neu": 7,
    "opp_avg_allowed_fp2": 17.85,
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
    "headlineNews": "Saints' Alvin Kamara: Scores seventh TD in win",
    "report": "Kamara rushed 19 times for 83 yards and a touchdown and caught three of four targets for 36 yards in Sunday's 35-29 win over the Lions.Kamara tied the game at 14 apiece with a one-yard touchdown in the second quarter, but he took a back seat to Latavius Murray (two rushing touchdowns) and Tre'Quan Smith (two receiving touchdowns). Murray finished with 14 carries to Kamara's 19 as the Saints continued to employ a run-heavy approach in Michael Thomas' (ankle) absence. With seven touchdowns through four games, Kamara should remain locked in as an RB1 at home against the Chargers in Week 5, regardless of Thomas' status.",
    "analysis": "",
    "timestamp": "",
    "week01": 21.2,
    "week02": 33.9,
    "week03": 38.2,
    "week04": 19.4,
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
    "week21": ""
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
                         data: [21.2, 33.9, 38.2, 19.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [20.0, 19.4, 22.1, 18.6, 20.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [9.1, 6.6, 6.4, 10.0, 11.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(155, 132, 92, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [25.6, 24.0, 25.1, 27.6, 27.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3043078.png",
    "name": "Derrick Henry",
    "depthchart": "Starter: RB-1",
    "team": "Tennessee Titans",
    "projected": 19.9,
    "opponent": "Buffalo Bills",
    "home_away": "",
    "opp_rank_Neu": 8,
    "team_rank_Neu": 13,
    "avg_fp2": 16.33,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 18.18,
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
    "headlineNews": "Titans' Derrick Henry: Week 4 matchup postponed",
    "report": "Henry and the Titans will not be taking on the Steelers in Week 4 after additional personnel within the organization have tested positive for COVID-19, Tom Pelissero of NFL Network reports.The initial plan was simply to reschedule the Oct. 4 matchup for Monday or Tuesday, but it now appears both teams will receive a Week 4 bye and the game will be rescheduled at a yet-to-be-determined date. Practice facilities will be closed in Tennessee until further notice after an additional player and personnel member returned positive tests, with a re-open unlikely until the outbreak has been contained.",
    "analysis": "",
    "timestamp": "",
    "week01": 14.6,
    "week02": 8.4,
    "week03": 26.0,
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
    "week21": ""
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
                         data: [14.6, 8.4, 26.0, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.5, 22.9, 15.0, 'DNP', 19.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.8, 3.9, 1.6, 'DNP', 5.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [23.0, 24.1, 21.1, 'DNP', 21.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4040761.png",
    "name": "Devin Singletary",
    "depthchart": "Starter: RB-1",
    "team": "Buffalo Bills",
    "projected": 18.4,
    "opponent": "Tennessee Titans",
    "home_away": "at ",
    "opp_rank_Pos": 29,
    "team_rank_Neg": 28,
    "avg_fp2": 11.65,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 25.7,
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
    "headlineNews": "Bills' Devin Singletary: Scores TD vs. Raiders",
    "report": "Singletary carried 18 times for 55 yards and a touchdown while catching five of six targets for another 21 yards during Sunday's 30-23 win over the Raiders.Singletary managed just 3.1 yards per carry and received a season-high 18 totes with rookie Zack Moss (toe) out of action. He totaled just 76 yards on 23 total touches but salvaged his day from a fantasy perspective with a two-yard touchdown plunge in the fourth quarter. Singletary seems to have earned a starring role in the Buffalo backfield for the time being, but the team would surely like to see him do more with his looks next Sunday against the Titans.",
    "analysis": "",
    "timestamp": "",
    "week01": 7.8,
    "week02": 8.6,
    "week03": 14.1,
    "week04": 16.1,
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
    "week21": ""
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
                         data: [7.8, 8.6, 14.1, 16.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.0, 12.2, 15.4, 13.9, 18.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.0, 5.7, 6.6, 8.2, 6.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.0, 12.5, 15.1, 17.8, 16.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3051392.png",
    "name": "Ezekiel Elliott",
    "depthchart": "Starter: RB-1",
    "team": "Dallas Cowboys",
    "projected": 17.7,
    "opponent": "New York Giants",
    "home_away": "",
    "opp_rank_Neu": 10,
    "team_rank_Neu": 23,
    "avg_fp2": 19.18,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 22.3,
    "fanduelSalary": "$9000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#7F9695",
    "tmColorDark": "#041E42",
    "tmColorLite_rgba": "rgba(127, 150, 149, 0.2)",
    "tmColorDark_rgba": "rgba(4, 30, 66, 0.2)",
    "tmTextLite": "#7F9695",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
    "headlineNews": "Cowboys' Ezekiel Elliott: Piles up 125 scrimmage yards",
    "report": "Elliott carried 12 times for 54 yards and caught all eight of his targets for 71 additional yards during Sunday's 49-38 loss to the Browns. He also lost a fumble and caught a two-point conversion.Elliott managed a respectable 4.5 yards per carry, but he saw his attempts limited as his team yet again played from behind for most of the game. He was quite active as a pass catcher, however, and made his largest contribution in that regard since Week 15 of the 2018 season. Elliott lost a fumble in the first half that directly led to a Cleveland score and has now put the ball on the ground three times through four games, losing two of those fumbles. He also failed to score a TD for the first time this season, but he should have a chance to get back on track next Sunday against the Giants.",
    "analysis": "",
    "timestamp": "",
    "week01": 26.2,
    "week02": 19.2,
    "week03": 14.8,
    "week04": 16.5,
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
    "week21": ""
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
                         data: [26.2, 19.2, 14.8, 16.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.1, 24.8, 19.0, 23.2, 17.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [11.3, 11.4, 12.9, 11.6, 11.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  "rgba(127, 150, 149, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [26.4, 25.1, 28.2, 25.0, 25.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15825.png",
    "name": "Le'Veon Bell",
    "depthchart": "Starter: RB-1",
    "team": "New York Jets",
    "projected": 17.3,
    "opponent": "Arizona Cardinals",
    "home_away": "",
    "opp_rank_Neu": 19,
    "team_rank_Neg": 26,
    "avg_fp2": 5.6,
    "opp_rank_allowed_fp2_Pos": 24,
    "opp_avg_allowed_fp2": 25.9,
    "fanduelSalary": "$6000",
    "hasStatus": "Status",
    "healthOut": "Ir-r",
    "injury": "Hamstring",
    "tmColorLite": "#125740",
    "tmColorDark": "#003f2d",
    "tmColorLite_rgba": "rgba(18, 87, 64, 0.2)",
    "tmColorDark_rgba": "rgba(0, 63, 45, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png",
    "headlineNews": "Jets' Le'Veon Bell: Could be activated Week 5",
    "report": "Bell (hamstring) will participate in the Jets' practice Wednesday, Ralph Vacchiano of SportsNet New York reports.Per Vacchiano, the Jets are tentatively planning to activate Bell from injured reserve ahead of Sunday's game against the Cardinals, assuming his hamstring holds up during practice this week. If that's the case, Bell would presumably reclaim his position as the Jets' top back, with Frank Gore moving into a complementary/short-yardage role and La'Mical Perine also in the mix. That said, the 0-4 Jets could be cautious with their usage of Bell in his expected return to action Sunday, though such a scenario could provide a needed boost to an offense that will be helmed by Joe Flacco, who will start at quarterback in place of the injured Sam Darnold (shoulder).",
    "analysis": "",
    "timestamp": "",
    "week01": 5.6,
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
    "week21": ""
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
                         data: [5.6, 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.5, 'DNP', 'DNP', 'DNP', 17.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [8.0, 'DNP', 'DNP', 'DNP', 10.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  "rgba(18, 87, 64, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.1, 'DNP', 'DNP', 'DNP', 27.1]
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
    "opponent": "Houston Texans",
    "home_away": "at ",
    "opp_rank_Pos": 32,
    "team_rank_Neu": 22,
    "avg_fp2": 17.4,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 29.35,
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
    "headlineNews": "Jaguars' James Robinson: Over 100 scrimmage yards in loss",
    "report": "Robinson rushed 17 times for 75 yards and caught all four of his targets for 32 yards in Sunday's 33-25 loss to the Bengals.Robinson topped 100 scrimmage yards for a third consecutive week, but it was a bit disappointing that he failed to do more against a Bengals defense that came in allowing 181.7 yards per game on the ground. Only the Texans entered Week 4 allowing more rushing yards per game, so Robinson will benefit from another favorable matchup when his team travels to Houston in Week 5.",
    "analysis": "",
    "timestamp": "",
    "week01": 9.5,
    "week02": 19.5,
    "week03": 27.9,
    "week04": 12.7,
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
    "week21": ""
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
                         data: [9.5, 19.5, 27.9, 12.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.0, 9.2, 15.4, 12.1, 17.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.4, 7.9, 10.0, 15.8, 10.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 103, 120, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.2, 13.6, 19.6, 20.8, 25.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3919596.png",
    "name": "Chris Carson",
    "depthchart": "Starter: RB-1",
    "team": "Seattle Seahawks",
    "projected": 16.9,
    "opponent": "Minnesota Vikings",
    "home_away": "",
    "opp_rank_Pos": 24,
    "team_rank_Neu": 17,
    "avg_fp2": 18.12,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 23.27,
    "fanduelSalary": "$7800",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Knee",
    "tmColorLite": "#69BE28",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(105, 190, 40, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#69BE28",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
    "headlineNews": "Seahawks' Chris Carson: Logs limited practice",
    "report": "Carson (knee) was limited in practice Wednesday, Michael-Shawn Dugar of The Athletic reports.Carson sustained a sprained knee during the Seahawks' Week 3 win against the Cowboys, leaving his upcoming availability in question. After putting in limited practices last week, he was termed a game-time decision and eventually suited up this past Sunday in Miami. During that contest, he was evaluated for a concussion but was able to return, finishing with 19 touches for 100 yards from scrimmage and two TDs. With no signs of a head injury in the wake of the game, Carson seems to be in a similar spot, health-wise, this week.",
    "analysis": "",
    "timestamp": "",
    "week01": 21.6,
    "week02": 18.3,
    "week03": 9.1,
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
    "week21": ""
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
                         data: [21.6, 18.3, 9.1, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.2, 12.5, 16.4, 'DNP', 16.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.2, 5.1, 7.1, 'DNP', 10.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.0, 17.4, 20.3, 'DNP', 22.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116385.png",
    "name": "Joe Mixon",
    "depthchart": "Starter: RB-1",
    "team": "Cincinnati Bengals",
    "projected": 16.8,
    "opponent": "Baltimore Ravens",
    "home_away": "at ",
    "opp_rank_Neg": 6,
    "team_rank_Neu": 19,
    "avg_fp2": 15.7,
    "opp_rank_allowed_fp2_Neu": 9,
    "opp_avg_allowed_fp2": 18.2,
    "fanduelSalary": "$6900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#ea7330",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(234, 115, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#ea7330",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png",
    "headlineNews": "Bengals' Joe Mixon: Breaks out with three TDs",
    "report": "Mixon rushed 25 times for 151 yards and two touchdowns while catching all six of his targets for 30 yards and a touchdown in Sunday's 33-25 win over the Jaguars.So much for any concerns about the chest injury that had Mixon listed as questionable coming into this one. Mixon scored his first touchdown of the season on a nine-yard reception in the two-minute drill late in the first half, then capped Cincinnati's first possession of the second half with a 34-yard rushing score before adding a 23-yard rushing touchdown later in the third quarter. His 31 touches marked a season high, as game script finally allowed the Bengals to feed their workhorse running back. Repeating that positive game script won't be easy in Baltimore in Week 5, but this performance proved that Mixon still belongs in the conversation with the league's best running backs.",
    "analysis": "",
    "timestamp": "",
    "week01": 5.6,
    "week02": 10.6,
    "week03": 7.5,
    "week04": 39.1,
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
    "week21": ""
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
                         data: [5.6, 10.6, 7.5, 39.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.1, 19.4, 10.2, 11.6, 16.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.7, 4.0, 4.0, 6.6, 4.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.6, 19.6, 20.0, 20.9, 19.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3045147.png",
    "name": "James Conner",
    "depthchart": "Starter: RB-1",
    "team": "Pittsburgh Steelers",
    "projected": 15.6,
    "opponent": "Philadelphia Eagles",
    "home_away": "",
    "opp_rank_Neu": 12,
    "team_rank_Neu": 10,
    "avg_fp2": 14.9,
    "opp_rank_allowed_fp2_Neu": 15,
    "opp_avg_allowed_fp2": 20.48,
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
    "headlineNews": "Steelers' James Conner: Won't see Titans in Week 4",
    "report": "Conner and the Steelers will not take the field Week 4 against the Titans following additional positive COVID-19 tests within the Tennessee organization, Tom Pelissero of NFL Network reports.The initial plan was to move the game from Sunday to either Monday or Tuesday, but with reports of additional positive tests from another Titans player and personnel member surfacing, the league ultimately decided it would be best to postpone the contest. The Steelers were originally in line for a Week 8 bye, but it remains to be seen if that will stay intact with a new Week 4 bye now on the calendar.",
    "analysis": "",
    "timestamp": "",
    "week01": 2.7,
    "week02": 19.1,
    "week03": 22.9,
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
    "week21": ""
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
                         data: [2.7, 19.1, 22.9, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.0, 10.1, 17.3, 'DNP', 15.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.2, 0.1, 6.5, 'DNP', 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.1, 17.2, 24.3, 'DNP', 23.4]
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
    "opponent": "Seattle Seahawks",
    "home_away": "at ",
    "opp_rank_Neg": 3,
    "team_rank_Pos": 5,
    "avg_fp2": 22.48,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 14.0,
    "fanduelSalary": "$9200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e0aa19",
    "tmColorDark": "#300e5a",
    "tmColorLite_rgba": "rgba(224, 170, 25, 0.2)",
    "tmColorDark_rgba": "rgba(48, 14, 90, 0.2)",
    "tmTextLite": "#e0aa19",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/min.png",
    "headlineNews": "Vikings' Dalvin Cook: Monster ground game against Texans",
    "report": "Cook ran for 130 yards and two touchdowns on 27 carries, also corralling both of his targets for 16 receiving yards during Sunday's 31-23 win against Houston. Cook briefly exited the game with an undisclosed injury near the start of the fourth quarter, but he was able to return.The reigning Pro Bowl back has been magnificent the past two weeks, combining for 345 scrimmage yards and three touchdowns against AFC South foes Tennessee and Houston. Cook was still a top-shelf fantasy producer Weeks 1 and 2, though his value was much more touchdown-dependent during that span, as he combined for just 121 scrimmage yards in those two games with three total TDs. Up next is a challenging matchup for Cook, as he faces a Seattle defense that entered Sunday allowing the second-lowest total of RB rushing yardage on the season (126) before stifling Dolphins backs for just 51  rushing yards during Week 4.",
    "analysis": "",
    "timestamp": "",
    "week01": 21.3,
    "week02": 16.1,
    "week03": 24.9,
    "week04": 27.6,
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
    "week21": ""
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
                         data: [21.3, 16.1, 24.9, 27.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.1, 12.3, 15.3, 14.0, 14.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [12.8, 5.0, 10.1, 7.0, 11.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  "rgba(224, 170, 25, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [25.8, 23.2, 26.8, 22.0, 22.6]
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
    "opponent": "New York Jets",
    "home_away": "at ",
    "opp_rank_Neu": 22,
    "team_rank_Pos": 6,
    "avg_fp2": 8.97,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 26.88,
    "fanduelSalary": "$6200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#97233F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(151, 35, 63, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#97233F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
    "headlineNews": "Cardinals' Kenyan Drake: Cleared of injury concerns",
    "report": "Drake (chest) worked out without limitations Monday, indicating that he's cleared after an injury scare during Sunday's loss to the Panthers, Adam Schefter of ESPN reports.The Cardinals believe Drake merely got the wind knocked out of him, so it appears he was held out as a precaution with the injury occurring in the fourth quarter. Drake is expected to be ready to play in Week 5's clash against the Jets. His performance through four weeks is a larger concern, as he's averaged 3.8 yards per carry and been targeted just five times.",
    "analysis": "",
    "timestamp": "",
    "week01": 13.5,
    "week02": 10.5,
    "week03": 8.4,
    "week04": 3.5,
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
    "week21": ""
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
                         data: [13.5, 10.5, 8.4, 3.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.6, 10.1, 16.8, 13.1, 14.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.3, 5.1, 12.4, 14.0, 2.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.5, 20.4, 24.5, 26.9, 17.1]
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
    "home_away": "at ",
    "opp_rank_Pos": 28,
    "team_rank_Neu": 15,
    "avg_fp2": 15.62,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 19.27,
    "fanduelSalary": "$8200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A5ACAF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lv.png",
    "headlineNews": "Raiders' Josh Jacobs: Held in check by Bills",
    "report": "Jacobs carried the ball 15 times for 48 yards and caught three of four targets for 25 yards in Sunday's 30-23 loss to the Bills.Buffalo's front seven didn't give Jacobs much room to roam, and his 3.2 yards per carry was his worst single-game average so far this season. The second-year back should be more productive in Week 5 against a Chiefs defense that's given up 5.3 YPC through its first three games.",
    "analysis": "",
    "timestamp": "",
    "week01": 33.9,
    "week02": 12.0,
    "week03": 7.8,
    "week04": 8.8,
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
    "week21": ""
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
                         data: [33.9, 12.0, 7.8, 8.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [19.1, 14.3, 17.7, 15.0, 14.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.4, 6.7, 8.4, 5.4, 6.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [20.8, 25.0, 25.7, 22.4, 23.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13981.png",
    "name": "Mark Ingram",
    "depthchart": "Starter: RB-1",
    "team": "Baltimore Ravens",
    "projected": 14.5,
    "opponent": "Cincinnati Bengals",
    "home_away": "",
    "opp_rank_Pos": 27,
    "team_rank_Pos": 3,
    "avg_fp2": 7.7,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 24.43,
    "fanduelSalary": "$6100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9E7C0C",
    "tmColorDark": "#241773",
    "tmColorLite_rgba": "rgba(158, 124, 12, 0.2)",
    "tmColorDark_rgba": "rgba(36, 23, 115, 0.2)",
    "tmTextLite": "#9E7C0C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png",
    "headlineNews": "Ravens' Mark Ingram: Finds end zone",
    "report": "Ingram recorded eight rushes for 34 yards and a touchdown in Week 4 against Washington. He added one reception for three yards.Ingram recorded a one-yard rushing touchdown late in the first quarter to tally the first score of the game. Despite that positive start, he earned single-digit rushing attempts for the third consecutive games and has not surpassed 10 attempts in a contest this season. Though he still leads the rotation of three backs that includes J.K. Dobbins and Gus Edwards, Ingram remains touchdown-reliant, as he lacks both rushing volume and targets in the passing game. Week 5 should be another positive matchup for Ingram, however, as the Ravens will square off against the Bengals.",
    "analysis": "",
    "timestamp": "",
    "week01": 2.9,
    "week02": 14.7,
    "week03": 3.0,
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
    "week21": ""
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
                         data: [2.9, 14.7, 3.0, 10.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.4, 5.0, 14.1, 9.6, 14.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.7, 5.0, 8.3, 7.6, 3.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.3, 19.1, 19.6, 20.9, 23.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2977644.png",
    "name": "Todd Gurley",
    "depthchart": "Starter: RB-1",
    "team": "Atlanta Falcons",
    "projected": 13.2,
    "opponent": "Carolina Panthers",
    "home_away": "",
    "opp_rank_Neu": 21,
    "team_rank_Neu": 23,
    "avg_fp2": 13.07,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 32.12,
    "fanduelSalary": "$6700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/atl.png",
    "headlineNews": "Falcons' Todd Gurley: Scampers for two scores on MNF",
    "report": "Gurley registered 57 rushing yards and two touchdowns on 16 carries, also catching his lone target for a six-yard gain during Monday's 30-16 loss to the PackersBrian Griese was marveling on the Monday Night Football broadcast about the fact that the Falcons handed Brian Hill back-to-back red-zone carries on a crucial early-fourth-quarter drive. Lo and behold, Gurley retook the field the subsequent play and steered a carry around the left edge of Atlanta's offensive line for a three-yard score, his second goal-line TD in as many drives. The two-time All-Pro has contributed practically zilch in the pass-catching department -- four catches for nine yards on the year -- but the fact that Gurley has four touchdowns in four outings boosts his value substantially. He faces Carolina in Week 5 and a Panthers defense that has been a fantasy goldmine for running backs in allowing a league-high seven rushing TDs to the position.",
    "analysis": "",
    "timestamp": "",
    "week01": 12.7,
    "week02": 6.1,
    "week03": 14.7,
    "week04": 18.8,
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
    "week21": ""
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
                         data: [12.7, 6.1, 14.7, 18.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [19.3, 16.3, 18.7, 17.7, 13.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [8.5, 8.3, 6.3, 5.7, 9.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [25.6, 23.7, 24.3, 23.4, 25.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16944.png",
    "name": "Devonta Freeman",
    "depthchart": "Starter: RB-1",
    "team": "New York Giants",
    "projected": 13.2,
    "opponent": "Dallas Cowboys",
    "home_away": "at ",
    "opp_rank_Pos": 31,
    "team_rank_Neg": 31,
    "avg_fp2": 8.8,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 22.7,
    "fanduelSalary": "$5500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#0B2265",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(11, 34, 101, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png",
    "headlineNews": "Giants' Devonta Freeman: Modest numbers in loss",
    "report": "Freeman carried the ball 11 times for 33 yards and caught all four of his targets for 35 yards in Sunday's 17-9 loss to the Rams.He led the Giants in carries in his second game for the team, but he wasn't able to produce much yardage on the ground. Freeman has had a sluggish start to his Giants tenure, but he gets the most favorable matchup possible in Week 5 against a Cowboys defense that just got torn apart for 307 rushing yards and three TDs by a Browns ground game that was without Nick Chubb (knee) for most of the afternoon.",
    "analysis": "",
    "timestamp": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": 8.8,
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
    "week21": ""
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
                         data: ['DNP', 'DNP', 'DNP', 8.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 15.0, 13.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 3.2, 13.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 19.3, 28.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3059915.png",
    "name": "Kareem Hunt",
    "depthchart": "Starter: RB-1",
    "team": "Cleveland Browns",
    "projected": 12.7,
    "opponent": "Indianapolis Colts",
    "home_away": "",
    "opp_rank_Neg": 4,
    "team_rank_Pos": 1,
    "avg_fp2": 16.43,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 14.05,
    "fanduelSalary": "$7000",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Groin",
    "tmColorLite": "#FF3C00",
    "tmColorDark": "#311D00",
    "tmColorLite_rgba": "rgba(255, 60, 0, 0.2)",
    "tmColorDark_rgba": "rgba(49, 29, 0, 0.2)",
    "tmTextLite": "#FF3C00",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
    "headlineNews": "Browns' Kareem Hunt: Limited at practice Wednesday",
    "report": "Hunt (groin) was limited at practice Wednesday, Scott Petrak of the Elyria Chronicle-Telegram reports.Andrew Gribble of the Browns' official site previously relayed that coach Kevin Stefanski indicated that Hunt came out of this past Sunday's win over the Cowboys \"pretty good\" after having dealt with a groin injury leading up to Week 4 action. With that in mind, we suspect that Hunt's listed limitations Wednesday were maintenance-related, as he prepares for an expanded role in Cleveland's ground game with Nick Chubb (knee) on IR and expected to miss about six weeks.",
    "analysis": "",
    "timestamp": "",
    "week01": 10.1,
    "week02": 23.1,
    "week03": 13.4,
    "week04": 19.1,
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
    "week21": ""
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
                         data: [10.1, 23.1, 13.4, 19.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.4, 7.2, 8.8, 8.7, 12.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.0, 5.2, 7.2, 10.1, 8.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [20.0, 19.5, 27.5, 20.0, 22.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4242335.png",
    "name": "Jonathan Taylor",
    "depthchart": "Starter: RB-1",
    "team": "Indianapolis Colts",
    "projected": 12.0,
    "opponent": "Cleveland Browns",
    "home_away": "at ",
    "opp_rank_Neg": 5,
    "team_rank_Neu": 15,
    "avg_fp2": 12.75,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 19.85,
    "fanduelSalary": "$7100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#014683",
    "tmColorDark": "#002C5F",
    "tmColorLite_rgba": "rgba(1, 70, 131, 0.2)",
    "tmColorDark_rgba": "rgba(0, 44, 95, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png",
    "headlineNews": "Colts' Jonathan Taylor: Earns 17 carries",
    "report": "Taylor rushed the ball 17 times for 68 yards in Week 4 against Chicago. He added one reception for 11 yards.Taylor was once again the lead back for the Colts, working ahead of both Nyheim Hines and Jordan Wilkins. While his longest rush of the game was 16 yards, he managed additional chunk gains of 11 and 12 yards. He was unable to put together a huge performance due to the Colts' inability to reach the end zone but has now racked up at least 14 touches in each game since Week 2 in Marlon Mack's (Achilles) absence. He'll face a tough defensive front in Week 5 in a matchup against the Browns.",
    "analysis": "",
    "timestamp": "",
    "week01": 11.9,
    "week02": 18.0,
    "week03": 12.7,
    "week04": 8.4,
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
    "week21": ""
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
                         data: [11.9, 18.0, 12.7, 8.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.9, 14.1, 12.7, 15.9, 12.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 8.5, 14.4, 11.5, 6.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.4, 21.4, 19.4, 17.2, 18.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4242214.png",
    "name": "Clyde Edwards-Helaire",
    "depthchart": "Starter: RB-1",
    "team": "Kansas City Chiefs",
    "projected": 11.2,
    "opponent": "Las Vegas Raiders",
    "home_away": "",
    "opp_rank_Pos": 25,
    "team_rank_Neu": 9,
    "avg_fp2": 14.07,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 33.83,
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
    "headlineNews": "Chiefs' Clyde Edwards-Helaire: Nearly 20 touches",
    "report": "Edwards-Helaire rushed 16 times for 64 yards and caught all three of his targets for 27 yards in Monday night's 26-10 win over the Patriots.Edwards-Helaire again made a few splash plays while commanding nearly 20 touches. The rookie hasn't really busted free on the ground since his 138-yard debut, which was also the last time he found the end zone, but Edwards-Helaire has still averaged nearly 100 all-purpose yards while hauling in at least three passes in three straight outings. With great versatility in an explosive offense, Edwards-Helaire is a consistent producer who's bound to repay fantasy managers with even bigger outings down the road, giving him excellent value ahead of the Week 5 game against the Raiders.",
    "analysis": "",
    "timestamp": "",
    "week01": 19.8,
    "week02": 10.0,
    "week03": 15.9,
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
    "week21": ""
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
                         data: [19.8, 10.0, 15.9, 10.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.2, 14.3, 11.1, 15.7, 11.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.1, 11.9, 11.3, 13.2, 10.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.1, 20.9, 16.8, 20.3, 20.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2570986.png",
    "name": "Malcolm Brown",
    "depthchart": "Starter: RB-1",
    "team": "Los Angeles Rams",
    "projected": 10.9,
    "opponent": "Washington Football Team",
    "home_away": "at ",
    "opp_rank_Neu": 23,
    "team_rank_Neu": 7,
    "avg_fp2": 9.8,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 19.45,
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
    "headlineNews": "Rams' Malcolm Brown: Takes lead in backfield Sunday",
    "report": "Brown carried the ball nine times for 27 yards and caught five of six targets for 19 yards in Sunday's 17-9 win over the Giants.While the numbers weren't impressive. Brown out-touched and out-gained Darrell Henderson both on the ground and through the air in what turned out to be a defensive battle. The Rams' backfield remains volatile even before factoring in the potential return of Cam Akers (ribs), but there could be enough production to go around in Week 5 against a Washington defense that's given up multiple rushing TDs in three straight games.",
    "analysis": "",
    "timestamp": "",
    "week01": 24.5,
    "week02": 4.7,
    "week03": 1.9,
    "week04": 8.1,
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
    "week21": ""
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
                         data: [24.5, 4.7, 1.9, 8.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.2, 12.0, 10.4, 6.1, 10.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 12.1, 15.7, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [6.2, 19.5, 22.5, 9.3, 6.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4045163.png",
    "name": "Miles Sanders",
    "depthchart": "Starter: RB-1",
    "team": "Philadelphia Eagles",
    "projected": 10.8,
    "opponent": "Pittsburgh Steelers",
    "home_away": "at ",
    "opp_rank_Neg": 1,
    "team_rank_Neu": 18,
    "avg_fp2": 13.3,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 13.93,
    "fanduelSalary": "$7500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#386168",
    "tmColorDark": "#004C54",
    "tmColorLite_rgba": "rgba(56, 97, 104, 0.2)",
    "tmColorDark_rgba": "rgba(0, 76, 84, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    "headlineNews": "Eagles' Miles Sanders: Held in check Sunday",
    "report": "Sanders rushed 13 times for 46 yards and caught two passes (four targets) for 30 yards in Sunday's 25-20 win over the 49ers.Sanders failed to reach 100 combined yards for the first time in his three starts this season. The 49ers' defense has been ravaged by injuries early on, but they remain stout against the run due to defensive line depth and talented linebackers. The positive news for Sanders' fantasy owners is that he continued to dominate the running back touches, with no other back receiving more than two carries or one reception. Another rough matchup looms in the form of the Steelers' vaunted defense Sunday, but Sanders' volume of touches should provide a high floor in terms of fantasy production.",
    "analysis": "",
    "timestamp": "",
    "week01": "DNP",
    "week02": 18.6,
    "week03": 12.7,
    "week04": 8.6,
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
    "week21": ""
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
                         data: ['DNP', 18.6, 12.7, 8.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 22.6, 22.9, 15.7, 10.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 3.8, 4.6, 6.6, 4.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 14.3, 21.4, 21.7, 19.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2969962.png",
    "name": "Duke Johnson",
    "depthchart": "Backup: RB-2",
    "team": "Houston Texans",
    "projected": 10.7,
    "opponent": "Jacksonville Jaguars",
    "home_away": "",
    "opp_rank_Pos": 26,
    "team_rank_Neg": 32,
    "avg_fp2": 3.7,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 27.95,
    "fanduelSalary": "$4600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#03202F",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(3, 32, 47, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/hou.png",
    "headlineNews": "Texans' Duke Johnson: Quiet in return",
    "report": "Johnson rushed five times for 24 yards and caught three of four targets for 21 yards in Sunday's 31-23 loss to the VIkings.Johnson returned to the lineup after missing two games due to an ankle injury. The four targets tied for third among Houston's ball-catchers, an area considered a strength for Johnson. The Texans' offense has been inconsistent as quarterback Deshaun Watson tries to incorporate new weapons while dealing with a largely non-existent running attack.",
    "analysis": "",
    "timestamp": "",
    "week01": 1.4,
    "week02": "DNP",
    "week03": "DNP",
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
    "week21": ""
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
                         data: [1.4, 'DNP', 'DNP', 6.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.0, 'DNP', 'DNP', 7.4, 10.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.8, 'DNP', 'DNP', 5.2, 3.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.0, 'DNP', 'DNP', 15.9, 12.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2576434.png",
    "name": "Melvin Gordon",
    "depthchart": "Starter: RB-1",
    "team": "Denver Broncos",
    "projected": 10.5,
    "opponent": "New England Patriots",
    "home_away": "at ",
    "opp_rank_Neu": 17,
    "team_rank_Neg": 29,
    "avg_fp2": 15.03,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 17.48,
    "fanduelSalary": "$6500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e17757",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(225, 119, 87, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#e17757",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/den.png",
    "headlineNews": "Broncos' Melvin Gordon: Has game-clinching TD run",
    "report": "Gordon rushed 23 times for 107 yards and two touchdowns and secured two of three targets for 11 yards in the Broncos' 37-28 win over the Jets on Thursday night.Gordon had a good amount of experience repeatedly running into loaded fronts during his time with the Chargers, so the veteran running back was undeterred Thursday depite being consistently bottled up for the majority of the contest. Gordon then broke through at just the right time, exploding for a 43-yard scamper down the left sideline and crossing the goal line with 1:48 remaining to snuff out any threat of a Jets comeback. The 27-year-old also had scored on a one-yard run late in the first half to cap off a nine-play, 75-yard drive. The performance marked Gordon's first 100-yard and multi-touchdown game in a Broncos uniform, and he'll look to follow it up with another strong effort in a Week 5 matchup against the Patriots on Sunday, Oct. 11, although backfield mate Phillip Lindsay (toe) will likely be back for that contest.",
    "analysis": "",
    "timestamp": "",
    "week01": 14.1,
    "week02": 15.4,
    "week03": 5.8,
    "week04": 24.8,
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
    "week21": ""
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
                         data: [14.1, 15.4, 5.8, 24.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.8, 7.6, 14.7, 8.8, 10.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.3, 8.2, 7.1, 8.0, 10.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(225, 119, 87, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [23.5, 20.6, 22.8, 22.8, 22.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4360294.png",
    "name": "Antonio Gibson",
    "depthchart": "Starter: RB-1",
    "team": "Washington Football Team",
    "projected": 10.4,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank_Neu": 18,
    "team_rank_Neg": 30,
    "avg_fp2": 12.35,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 21.7,
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
    "headlineNews": "Football Team's Antonio Gibson: Powers Washington offense",
    "report": "Gibson carried the ball 13 times for 46 yards and a touchdown in Week 4 against Baltimore. He added four receptions on five targets for 82 yards.After Gibson showed glimpses of promise in Week 3, he provided a breakout performance one week later against the Ravens. He commanded 13 of the team's 22 rushing attempts, including a goal-line carry that he converted for a two-yard score. Gibson also showed explosiveness in the passing game, taking a screen pass for 40 yards halfway through the second quarter. He appears to have taken over as the clear lead back in Washington's backfield heading into a Week 5 matchup against the Rams.",
    "analysis": "",
    "timestamp": "",
    "week01": 5.4,
    "week02": 11.7,
    "week03": 11.5,
    "week04": 20.8,
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
    "week21": ""
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
                         data: [5.4, 11.7, 11.5, 20.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.3, 6.1, 8.1, 7.6, 10.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.6, 0.7, 6.7, 3.0, 6.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.3, 10.0, 14.8, 19.2, 20.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16782.png",
    "name": "Jerick McKinnon",
    "depthchart": "Starter: RB-1",
    "team": "San Francisco 49ers",
    "projected": 10.4,
    "opponent": "Miami Dolphins",
    "home_away": "",
    "opp_rank_Neu": 19,
    "team_rank_Neu": 11,
    "avg_fp2": 15.0,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 27.62,
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
    "headlineNews": "49ers' Jerick McKinnon: Solid line in defeat",
    "report": "McKinnon (ribs) rushed 14 times for 54 yards and a touchdown, adding 43 yards on seven receptions (eight targets) in Sunday's 25-20 loss to the Eagles.McKinnon was dealing with a rib contusion stemming from last week's win over the Giants, but it clearly did not limit the tailback. The 28-year-old dominated the backfield touches, receiving 14 of 17 rushing attempts and eight of nine targets. It is unclear whether Raheem Mostert (knee) will be able to return against the Dolphins on Sunday, but if he remains sidelined, McKinnon will be a strong fantasy play as the starter in a soft matchup.",
    "analysis": "",
    "timestamp": "",
    "week01": 11.9,
    "week02": 13.7,
    "week03": 15.2,
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
    "week21": ""
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
                         data: [11.9, 13.7, 15.2, 19.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.4, 3.3, 10.3, 6.2, 10.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.2, 4.1, 2.4, 0.0, 1.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.7, 17.0, 14.8, 15.2, 15.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3910544.png",
    "name": "Joshua Kelley",
    "depthchart": "Starter: RB-1",
    "team": "Los Angeles Chargers",
    "projected": 10.2,
    "opponent": "New Orleans Saints",
    "home_away": "at ",
    "opp_rank_Neg": 6,
    "team_rank_Neu": 12,
    "avg_fp2": 7.83,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 19.62,
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
    "headlineNews": "Chargers' Joshua Kelley: Could see playing-time bump",
    "report": "Kelley could see more opportunities with top running back Austin Ekeler  (hamstring) expected to miss the next 4-to-6 weeks, Adam Schefter of ESPN reports.Kelley wasn't particularly impressive in relief of an injured Ekeler in Sunday's loss to the Buccaneers, as he carried the ball nine times for seven yards while also committing an egregious fumble near the end of the first half, which allowed Tampa Bay to gain momentum in its eventual come-from-behind win. The fumble was the rookie's second in as many weeks, but coach Anthony Lynn didn't seem to lose much confidence in Kelley, who still played a season-high 57 percent of the offensive snaps. While Ekeler is sidelined, the Chargers may not view Kelley as a true bell cow but instead as more of an Option 1A ahead of Justin Jackson, who should factor in much in the same way Ekeler did when Melvin Gordon served as the team's lead tailback in past seasons. Both Jackson and Kelley have proven to be useful pass catchers out of the backfield, so whomever gets the majority of the work may boil down to the hotter hand between the two each week. With three straight matchups on tap against bottom-tier run defenses in the Saints, Jets and Dolphins, both Kelley and Jackson might be relevant fantasy options even in shallower leagues.",
    "analysis": "",
    "timestamp": "",
    "week01": 12.0,
    "week02": 12.3,
    "week03": 4.2,
    "week04": 2.8,
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
    "week21": ""
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
                         data: [12.0, 12.3, 4.2, 2.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.7, 1.4, 12.7, 4.8, 10.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.9, 1.2, 0.2, 0.0, 5.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 128, 198, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.1, 12.2, 14.9, 14.7, 15.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3025433.png",
    "name": "Mike Davis",
    "depthchart": "Starter: RB-1",
    "team": "Carolina Panthers",
    "projected": 10.0,
    "opponent": "Atlanta Falcons",
    "home_away": "at ",
    "opp_rank_Neu": 10,
    "team_rank_Neu": 14,
    "avg_fp2": 12.55,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 24.88,
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
    "headlineNews": "Panthers' Mike Davis: Production robust during Week 4",
    "report": "Davis registered 84 rushing yards and one touchdown on 16 carries, also hauling in five of six targets for 27 receiving yards during Sunday's 31-21 win against the Cardinals.Davis has so far proven to be a worthwhile waiver wire pickup, or a wise RB stash for those Christian McCaffrey-invested GMs who were prudent enough to add the 27-year-old back during the late stages of fantasy drafts. Relieving the injured McCaffrey in Week 2, Davis collected all eight of his targets for 74 yards against the Buccaneers. In his two starts since, Davis has logged 129 rushing yards and a TD on 29 total attempts while also posting 13 receptions for 72 yards and an additional TD. Week 5 brings a matchup against a Falcons defense that entered Sunday ranking as a top-10 unit with just 3.6 yards per carry allowed to opposing backs.",
    "analysis": "",
    "timestamp": "",
    "week01": 0.0,
    "week02": 11.5,
    "week03": 19.1,
    "week04": 19.6,
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
    "week21": ""
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
                         data: [0.0, 11.5, 19.1, 19.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.0, 0.0, 5.9, 9.8, 10.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.0, 0.0, 0.0, 0.4, 0.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 133, 202, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.1, 8.8, 10.9, 10.6, 13.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3119195.png",
    "name": "Chase Edmonds",
    "depthchart": "Backup: RB-2",
    "team": "Arizona Cardinals",
    "projected": 9.9,
    "opponent": "New York Jets",
    "home_away": "at ",
    "opp_rank_Neu": 22,
    "team_rank_Pos": 6,
    "avg_fp2": 7.93,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 26.88,
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
    "headlineNews": "Cardinals' Chase Edmonds: Nine touches, one TD in Week 4",
    "report": "Edmonds notched four carries for 16 yards and gathered in five of six targets for 24 yards and a touchdown during Sunday's 31-21 loss at Carolina.Edmonds' snap share (37 percent) wasn't out of the ordinary, but he matched his season high in touches and reached the end zone for the second time this season. Meanwhile, starting running back Kenyan Drake had an injury scare late in Sunday's contest, but on Monday it was revealed he merely had the wind knocked out of him. In the end, Edmonds should maintain his usual workload moving forward, barring something happening to Drake.",
    "analysis": "",
    "timestamp": "",
    "week01": 12.0,
    "week02": 2.8,
    "week03": 4.4,
    "week04": 12.5,
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
    "week21": ""
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
                         data: [12.0, 2.8, 4.4, 12.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.2, 2.8, 7.9, 6.0, 9.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.0, 0.0, 0.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [3.2, 15.9, 16.5, 10.2, 7.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3912550.png",
    "name": "Ronald Jones",
    "depthchart": "Starter: RB-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 9.6,
    "opponent": "Chicago Bears",
    "home_away": "at ",
    "opp_rank_Neu": 16,
    "team_rank_Neg": 27,
    "avg_fp2": 10.75,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 21.6,
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
    "headlineNews": "Buccaneers' Ronald Jones: Goes over 100-yard mark in win",
    "report": "Jones rushed 20 times for 111 yards and brought in six of nine targets for 17 yards in the Buccaneers' 38-31 win over the Chargers on Sunday.The third-year back took on clear lead-back duties with Leonard Fournette (ankle) out of action Sunday and LeSean McCoy ultimately exiting early with an ankle issue of his own. The extra responsibility ultimately equated to a productive fantasy day for Jones, who logged a career-high number of targets in the short passing game. The USC product could have a similar level of usage on the ground in a Thursday night matchup against the Bears, as Jenna Laine of ESPN.com reports that Fournette \"has a chance\" but may not necessarily be ready to go on the short week, and McCoy could potentially be forced to sit out as well.",
    "analysis": "",
    "timestamp": "",
    "week01": 9.2,
    "week02": 9.7,
    "week03": 8.3,
    "week04": 15.8,
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
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.2, 9.7, 8.3, 15.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.4, 15.3, 15.0, 12.1, 9.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.2, 2.0, 2.0, 2.9, 1.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(213, 10, 10, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.9, 9.1, 13.6, 11.4, 10.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/8479.png",
    "name": "Frank Gore",
    "depthchart": "Backup: RB-2",
    "team": "New York Jets",
    "projected": 8.3,
    "opponent": "Arizona Cardinals",
    "home_away": "",
    "opp_rank_Neu": 19,
    "team_rank_Neg": 26,
    "avg_fp2": 4.88,
    "opp_rank_allowed_fp2_Pos": 24,
    "opp_avg_allowed_fp2": 25.9,
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
    "headlineNews": "Jets' Frank Gore: Role to shrink if Bell's ready",
    "report": "Gore is expected to return to a backup role for Sunday's game against the Cardinals, as Le'Veon Bell (hamstring) was designated to return from injured reserve Wednesday and looks on track to be activated later this week, Ethan Greenberg of the Jets' official site reports.Gore averaged 17 touches per game over the past three weeks while serving as the Jets' lead option at running back, but the former will likely see his carries and targets take a big hit with Bell expected to rejoin the mix. Even with the uptick in volume, Gore wasn't able to take advantage, as he failed to score a touchdown in any of the three games Bell missed while averaging just 3.1 yards per carry.",
    "analysis": "",
    "timestamp": "",
    "week01": 2.4,
    "week02": 6.3,
    "week03": 6.7,
    "week04": 4.1,
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
    "week21": ""
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
                         data: [2.4, 6.3, 6.7, 4.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.9, 7.8, 4.9, 6.3, 8.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.9, 4.2, 4.4, 3.0, 2.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  "rgba(18, 87, 64, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.8, 17.7, 17.4, 16.1, 14.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3916430.png",
    "name": "Nyheim Hines",
    "depthchart": "Backup: RB-2",
    "team": "Indianapolis Colts",
    "projected": 8.3,
    "opponent": "Cleveland Browns",
    "home_away": "at ",
    "opp_rank_Neg": 5,
    "team_rank_Neu": 15,
    "avg_fp2": 9.25,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 19.85,
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
    "headlineNews": "Colts' Nyheim Hines: Totals 32 yards",
    "report": "Hines carried the ball nine times for 24 yards in Week 4 against the Bears. He added three receptions for eight yards.Hines wasn't heavily utilized in the offense, as Jordan Wilkins matched his nine carries. He did provide a spark to the offense on a drive late in the first quarter, recording a rush and reception of 12 and 15 yards, respectively. The Colts have shown a willingness to employ a run-heavy approach early this season as they've often led games. While that's led to three victories, it is not conducive to Hines' success, which comes primarily as a receiver with the chance to work in the open field.",
    "analysis": "",
    "timestamp": "",
    "week01": 23.3,
    "week02": 0.9,
    "week03": 8.1,
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
    "week21": ""
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
                         data: [23.3, 0.9, 8.1, 4.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.4, 12.4, 6.1, 9.5, 8.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.5, 3.0, 4.1, 3.6, 2.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.2, 9.5, 10.4, 11.5, 10.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15920.png",
    "name": "Latavius Murray",
    "depthchart": "Backup: RB-2",
    "team": "New Orleans Saints",
    "projected": 7.7,
    "opponent": "Los Angeles Chargers",
    "home_away": "",
    "opp_rank_Neu": 14,
    "team_rank_Neu": 13,
    "avg_fp2": 9.22,
    "opp_rank_allowed_fp2_Neu": 7,
    "opp_avg_allowed_fp2": 17.85,
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
    "headlineNews": "Saints' Latavius Murray: Scores twice in Week 4 win",
    "report": "Murray rushed 14 times for 64 yards and two touchdowns while catching one of two targets for 19 yards in Sunday's 35-29 win over Detroit.Murray plowed in for a three-yard touchdown on third down to cut the Saints' deficit to 14-7 in the first quarter, and his six-yard rushing score in the third quarter made it 35-14 New Orleans. Alvin Kamara led the team with 19 carries and also found the end zone on the ground, but this game corroborated there's plenty of room for Murray to produce value as the powerful between-the-tackles complement to Kamara's speed and elusiveness. Look for New Orleans to maintain its run-first approach in Week 5 against the Chargers, especially if top wide receiver Michael Thomas (ankle) still isn't ready to return from the injury he suffered Week 1.",
    "analysis": "",
    "timestamp": "",
    "week01": 4.8,
    "week02": 4.3,
    "week03": 7.0,
    "week04": 20.8,
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
    "week21": ""
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
                         data: [4.8, 4.3, 7.0, 20.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.1, 5.2, 5.4, 4.2, 7.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.7, 1.4, 1.8, 1.7, 1.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(155, 132, 92, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.1, 16.6, 16.9, 16.0, 16.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4035676.png",
    "name": "Zack Moss",
    "depthchart": "Backup: RB-2",
    "team": "Buffalo Bills",
    "projected": 7.4,
    "opponent": "Tennessee Titans",
    "home_away": "at ",
    "opp_rank_Pos": 29,
    "team_rank_Neg": 28,
    "avg_fp2": 6.95,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 25.7,
    "fanduelSalary": "$5000",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Toe",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#005596",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 85, 150, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
    "headlineNews": "Bills' Zack Moss: Limited again to start week",
    "report": "Moss (toe) practiced on a limited basis Wednesday, Chris Brown of the Bills' official site reports.Moss was limited in practice all of last week but ultimately missed a second consecutive game, allowing Devin Singletary to hold a monopoly on running back touches against the Raiders. Given Moss's absence last week, we'd like to see the rookie progress to a full practice to help assure his status for Sunday's game in Tennessee.",
    "analysis": "",
    "timestamp": "",
    "week01": 10.2,
    "week02": 3.7,
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
    "week21": ""
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
                         data: [10.2, 3.7, 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.0, 3.9, 'DNP', 'DNP', 7.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 4.4, 'DNP', 'DNP', 2.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.2, 13.4, 'DNP', 'DNP', 11.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15966.png",
    "name": "Chris Thompson",
    "depthchart": "Backup: RB-2",
    "team": "Jacksonville Jaguars",
    "projected": 7.4,
    "opponent": "Houston Texans",
    "home_away": "at ",
    "opp_rank_Pos": 32,
    "team_rank_Neu": 22,
    "avg_fp2": 4.53,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 29.35,
    "fanduelSalary": "$4700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#006778",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 103, 120, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#006778",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/jax.png",
    "headlineNews": "Jaguars' Chris Thompson: Diminishing offensive role",
    "report": "Thompson did not receive a carry and wasn't targeted in Sunday's 33-25 loss at Cincinnati.The 29-year-old played 40-plus percent of offensive snaps the previous two weeks with the Jaguars in a negative game script, but he played only 16 of 68 snaps Sunday despite a similar game flow. James Robinson previously was mostly limited to early down work, but he dominated the backfield reps during Week 4. Thompson has four carries for 10 yards and 10 receptions for 61 yards and one touchdown through four games, but he may have an even smaller offensive role going forward.",
    "analysis": "",
    "timestamp": "",
    "week01": 1.6,
    "week02": 10.2,
    "week03": 6.3,
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
    "week21": ""
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
                         data: [1.6, 10.2, 6.3, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.2, 5.0, 7.0, 5.3, 7.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.6, 1.4, 2.3, 1.8, 7.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 103, 120, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.2, 13.0, 14.3, 11.5, 17.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2980148.png",
    "name": "C.J. Prosise",
    "depthchart": "Reserve: RB-3",
    "team": "Houston Texans",
    "projected": 7.2,
    "opponent": "Jacksonville Jaguars",
    "home_away": "",
    "opp_rank_Pos": 26,
    "team_rank_Neg": 32,
    "avg_fp2": 0.03,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 27.95,
    "fanduelSalary": "$4500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#03202F",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(3, 32, 47, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/hou.png",
    "headlineNews": "Texans' C.J. Prosise: Promoted to active roster",
    "report": "Prosise has been promoted to the active roster for Week 4 against Minnesota, Aaron Wilson of the Houston Chronicle reports.With Duke Johnson (ankle) sidelined, Prosise has been the primary backup to David Johnson. He had one carry in Sunday's loss to the Steelers.",
    "analysis": "",
    "timestamp": "",
    "week01": "DNP",
    "week02": "DNP",
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
    "week21": ""
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
                         data: ['DNP', 'DNP', 'DNP', 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 3.7, 7.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 0.6, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 6.3, 7.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4035538.png",
    "name": "David Montgomery",
    "depthchart": "Starter: RB-1",
    "team": "Chicago Bears",
    "projected": 7.2,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "",
    "opp_rank_Neg": 2,
    "team_rank_Neu": 20,
    "avg_fp2": 10.93,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 19.85,
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
    "headlineNews": "Bears' David Montgomery: Receives 13 touches",
    "report": "Montgomery rushed 10 times for 27 yards and caught three passes for 30 yards in the Bears' 19-11 loss to the Colts on Sunday.Facing a swarming Indianapolis run defense, Montgomery rarely had any room to operate on the ground, and he failed to gain more than six yards on any of his rushing attempts. With the Bears trailing throughout, they were unable to run a balanced offense, keeping Montgomery from seeing a bigger workload. With at least 57 combined yards in each game this season, he'll continue to be a top-24 running back with a solid weekly floor.",
    "analysis": "",
    "timestamp": "",
    "week01": 7.9,
    "week02": 20.2,
    "week03": 6.4,
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
    "week21": ""
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
                         data: [7.9, 20.2, 6.4, 9.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.2, 11.2, 15.5, 16.0, 7.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.6, 1.5, 3.7, 3.8, 2.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  "rgba(195, 104, 53, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.5, 13.5, 16.2, 14.2, 15.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3125403.png",
    "name": "Brian Hill",
    "depthchart": "Backup: RB-2",
    "team": "Atlanta Falcons",
    "projected": 7.0,
    "opponent": "Carolina Panthers",
    "home_away": "",
    "opp_rank_Neu": 21,
    "team_rank_Neu": 23,
    "avg_fp2": 6.08,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 32.12,
    "fanduelSalary": "$4800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/atl.png",
    "headlineNews": "Falcons' Brian Hill: Six touches against Packers",
    "report": "Hill registered 10 yards on four rush attempts, also hauling in both of his targets for 13 receiving yards during Monday's 30-16 loss to Green Bay.The 24-year-old back broke through with 80 yards from scrimmage and a touchdown last Sunday in a loss to the Bears, but his contributions were minor during an ugly Monday night defeat. HIll was offered high-upside attempts, at least, as three of his offensive touches came within the red zone during Week 4. He'll again serve as Atlanta's No. 2 back when the team faces Carolina on Sunday and a Panthers defense that has surrendered an NFL-worst 37 receptions to opposing RBs.",
    "analysis": "",
    "timestamp": "",
    "week01": 3.0,
    "week02": 3.5,
    "week03": 14.5,
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
    "week21": ""
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
                         data: [3.0, 3.5, 14.5, 3.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.3, 6.4, 6.8, 9.0, 7.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 1.1, 1.0, 0.7, 1.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.0, 7.6, 9.3, 7.8, 8.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4039359.png",
    "name": "Darrell Henderson",
    "depthchart": "Backup: RB-2",
    "team": "Los Angeles Rams",
    "projected": 6.8,
    "opponent": "Washington Football Team",
    "home_away": "at ",
    "opp_rank_Neu": 23,
    "team_rank_Neu": 7,
    "avg_fp2": 10.62,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 19.45,
    "fanduelSalary": "$6000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Rams' Darrell Henderson: Vanishing act in Week 4",
    "report": "Henderson carried the ball eight times for 22 yards and caught his only target for 16 yards in Sunday's 17-9 win over the Giants.There was no indication after the game that Henderson had suffered any kind of injury, but despite piling up 241 scrimmage yards and two TDs over the last two weeks, the second-year RB suddenly took a back seat to Malcolm Brown. The Rams' backfield remains volatile even before factoring in the potential return of Cam Akers (ribs), but there could be enough production to go around in Week 5 against a Washington defense that's given up multiple rushing TDs in three straight games.",
    "analysis": "",
    "timestamp": "",
    "week01": 0.6,
    "week02": 19.1,
    "week03": 18.5,
    "week04": 4.3,
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
    "week21": ""
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
                         data: [0.6, 19.1, 18.5, 4.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.7, 2.3, 6.9, 14.7, 6.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.0, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [2.8, 5.3, 4.4, 9.8, 9.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14198.png",
    "name": "Dion Lewis",
    "depthchart": "Backup: RB-2",
    "team": "New York Giants",
    "projected": 6.6,
    "opponent": "Dallas Cowboys",
    "home_away": "at ",
    "opp_rank_Pos": 31,
    "team_rank_Neg": 31,
    "avg_fp2": 4.5,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 22.7,
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
    "headlineNews": "Giants' Dion Lewis: Small role in loss",
    "report": "Lewis had only one carry for 10 yards and two catches on three targets for eight yards against the Rams on Sunday.Lewis saw 21 total offensive snaps, but ceded most of the touches to Wayne Gallman and Devonta Freeman. Lewis will stay in the mix, but his ceiling is limited.",
    "analysis": "",
    "timestamp": "",
    "week01": 0.1,
    "week02": 13.6,
    "week03": 1.5,
    "week04": 2.8,
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
    "week21": ""
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
                         data: [0.1, 13.6, 1.5, 2.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.8, 4.5, 8.4, 6.4, 6.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.1, 0.0, 1.3, 2.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.3, 8.7, 11.3, 11.6, 11.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3052117.png",
    "name": "Phillip Lindsay",
    "depthchart": "Backup: RB-2",
    "team": "Denver Broncos",
    "projected": 6.5,
    "opponent": "New England Patriots",
    "home_away": "at ",
    "opp_rank_Neu": 17,
    "team_rank_Neg": 29,
    "avg_fp2": 4.0,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 17.48,
    "fanduelSalary": "$4700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e17757",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(225, 119, 87, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#e17757",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/den.png",
    "headlineNews": "Broncos' Phillip Lindsay: Will return to action Sunday",
    "report": "Lindsay (toe) practiced fully Wednesday and is slated to play Sunday versus the Patriots, Aric DiLalla of the Broncos' official site reports.While Lindsay was sidelined for three games, Melvin Gordon played well, recording 240 yards from scrimmage and three total touchdowns. According to Zac Stevens of TheDNVR.com, the Broncos plan to use both backs Sunday, including plays where both Gordon and Lindsay are on the field at the same time. That may mean Lindsay will line up in the slot or out wide, as the Broncos are lacking wideout depth with both Courtland Sutton (torn ACL) and KJ Hamler (hamstring) sidelined. Regardless of how it plays out, it's encouraging that coach Vic Fangio has a game plan to utilize both weapons Sunday.",
    "analysis": "",
    "timestamp": "",
    "week01": 4.0,
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
    "week21": ""
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
                         data: [4.0, 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.6, 'DNP', 'DNP', 'DNP', 6.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.9, 'DNP', 'DNP', 'DNP', 5.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(225, 119, 87, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.7, 'DNP', 'DNP', 'DNP', 19.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15826.png",
    "name": "Giovani Bernard",
    "depthchart": "Backup: RB-2",
    "team": "Cincinnati Bengals",
    "projected": 6.3,
    "opponent": "Baltimore Ravens",
    "home_away": "at ",
    "opp_rank_Neg": 6,
    "team_rank_Neu": 19,
    "avg_fp2": 4.67,
    "opp_rank_allowed_fp2_Neu": 9,
    "opp_avg_allowed_fp2": 18.2,
    "fanduelSalary": "$4600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#ea7330",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(234, 115, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#ea7330",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png",
    "headlineNews": "Bengals' Giovani Bernard: Takes backseat to Mixon",
    "report": "Bernard had two carries for 19 yards and zero targets in the passing game in the Bengals' win over Jacksonville on Sunday.Bernard was only on the field for 13 offensive snaps (17 percent) on a day when Joe Mixon finally got untracked. What's noteworthy is that Mixon had six catches on six targets, which is where Bernard frequently is used. Then again, the Bengals led for most of the second half, lessening the need for Bernard to be on the field.",
    "analysis": "",
    "timestamp": "",
    "week01": 4.8,
    "week02": 5.0,
    "week03": 7.0,
    "week04": 1.9,
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
    "week21": ""
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
                         data: [4.8, 5.0, 7.0, 1.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.2, 10.0, 4.7, 6.3, 6.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.6, 8.2, 1.0, 0.9, 0.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.5, 17.8, 14.0, 11.3, 16.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4241985.png",
    "name": "J.K. Dobbins",
    "depthchart": "Backup: RB-2",
    "team": "Baltimore Ravens",
    "projected": 6.3,
    "opponent": "Cincinnati Bengals",
    "home_away": "",
    "opp_rank_Pos": 27,
    "team_rank_Pos": 3,
    "avg_fp2": 7.35,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 24.43,
    "fanduelSalary": "$5200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9E7C0C",
    "tmColorDark": "#241773",
    "tmColorLite_rgba": "rgba(158, 124, 12, 0.2)",
    "tmColorDark_rgba": "rgba(36, 23, 115, 0.2)",
    "tmTextLite": "#9E7C0C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png",
    "headlineNews": "Ravens' J.K. Dobbins: Minimal impact Sunday",
    "report": "Dobbins had five carries for 16 yards and one catch for two yards Sunday against the Football Team.The rookie was more involved than he had been in recent weeks, seeing more than two carries for the first time since the season opener. Still, it was just five carries for Dobbins on 21 snaps while Lamar Jackson, Mark Ingram and Gus Edwards all saw at least seven attempts. Edwards' rushes seem to be coming at Dobbins' expense as he has out-carried Dobbins in three straight weeks. It's no longer just that Baltimore's deep running back rotation puts a cap on Dobbins' carry ceiling, it's also that Dobbins may be at the bottom of the pecking order for carries right now. The Ravens host the Bengals in Week 5.",
    "analysis": "",
    "timestamp": "",
    "week01": 14.2,
    "week02": 6.6,
    "week03": 6.4,
    "week04": 2.2,
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
    "week21": ""
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
                         data: [14.2, 6.6, 6.4, 2.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.5, 11.2, 7.1, 7.9, 6.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.4, 7.2, 4.5, 0.0, 2.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [7.6, 21.7, 9.8, 15.0, 9.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116136.png",
    "name": "Justin Jackson",
    "depthchart": "Backup: RB-2",
    "team": "Los Angeles Chargers",
    "projected": 6.0,
    "opponent": "New Orleans Saints",
    "home_away": "at ",
    "opp_rank_Neg": 6,
    "team_rank_Neu": 12,
    "avg_fp2": 1.75,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 19.62,
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
    "headlineNews": "Chargers' Justin Jackson: Returns with minimal action",
    "report": "Jackson rushed eight times for 13 yards and brought in two targets for 12 yards in Sunday's 38-31 loss to the Buccaneers.It was a rough return for Jackson, who missed the previous two games due to a quad injury. It's unclear whether he struggled because of the difficult matchup or simply as a byproduct of working back into game shape, but the third-year pro will have to become a factor with Austin Ekeler (hamstring) shelved for the next four-to-six weeks according to Adam Schefter of ESPN. Joshua Kelley, who totaled 33 yards on 12 touches, figures to be the first man up, but considering the Chargers heavily feature a running-back tandem, it's clear Jackson will play a critical role. Fantasy managers should monitor the status of injured offensive linemen Bryan Bulaga (back) and Trai Turner (groin), but with a number of enticing fantasy matchups ahead and some guaranteed playing time, Jackson could be an intriguing fantasy option.",
    "analysis": "",
    "timestamp": "",
    "week01": 0.4,
    "week02": "DNP",
    "week03": "DNP",
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
    "week21": ""
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
                         data: [0.4, 'DNP', 'DNP', 3.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.3, 'DNP', 'DNP', 2.1, 6.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.4, 'DNP', 'DNP', 4.6, 0.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 128, 198, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [5.6, 'DNP', 'DNP', 10.9, 4.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2972091.png",
    "name": "Jalen Richard",
    "depthchart": "Backup: RB-2",
    "team": "Las Vegas Raiders",
    "projected": 5.9,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Pos": 28,
    "team_rank_Neu": 15,
    "avg_fp2": 4.23,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 19.27,
    "fanduelSalary": "$4500",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Ankle",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A5ACAF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lv.png",
    "headlineNews": "Raiders' Jalen Richard: Limited showing Wednesday",
    "report": "Richard (ankle) was a limited participant during Wednesday's practice, Paul Gutierrez of ESPN.com reports.Richard appeared to tweak his ankle during Sunday's loss to Buffalo, and as evidence by this news, the issue appears to still be bothering him. Expect his practice status throughout the week shed more light on his chances to suit up in Week 5. If he's unable to go, Devontae Booker would stand for an uptick in snaps.",
    "analysis": "",
    "timestamp": "",
    "week01": 2.0,
    "week02": 8.6,
    "week03": 3.7,
    "week04": 2.6,
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
    "week21": ""
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
                         data: [2.0, 8.6, 3.7, 2.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.4, 1.7, 4.7, 5.7, 5.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.0, 0.0, 0.2, 1.5, 0.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.1, 10.3, 10.9, 9.8, 9.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15971.png",
    "name": "Rex Burkhead",
    "depthchart": "Backup: RB-2",
    "team": "New England Patriots",
    "projected": 5.8,
    "opponent": "Denver Broncos",
    "home_away": "",
    "opp_rank_Neu": 13,
    "team_rank_Pos": 2,
    "avg_fp2": 11.72,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 14.2,
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
    "headlineNews": "Patriots' Rex Burkhead: Second-leading rusher in loss",
    "report": "Burkhead rushed 11 times for 45 yards and brought in his only target for five yards in the Patriots' 26-10 loss to the Chiefs on Monday night.With Sony Michel (quadriceps) on injured reserve, Burkhead was bound to see a boost in opportunity, and accordingly he recorded a season-high number of carries. However, second-year man Damien Harris stood out by gaining 100 yards on 17 rushes, potentially earning the right to helm the backfield again in a Week 5 matchup against the Broncos. Burkhead was solid in his own right, and given coach Bill Belichick's sometimes mercurial deployment of his running backs. it's possible the veteran rises to the forefront at some point during Michel's absence.",
    "analysis": "",
    "timestamp": "",
    "week01": 3.2,
    "week02": 6.9,
    "week03": 31.3,
    "week04": 5.5,
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
    "week21": ""
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
                         data: [3.2, 6.9, 31.3, 5.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.7, 1.9, 5.4, 8.1, 5.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.6, 0.0, 2.7, 0.0, 1.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.5, 13.1, 12.2, 12.9, 8.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16777.png",
    "name": "Carlos Hyde",
    "depthchart": "Backup: RB-2",
    "team": "Seattle Seahawks",
    "projected": 5.7,
    "opponent": "Minnesota Vikings",
    "home_away": "",
    "opp_rank_Pos": 24,
    "team_rank_Neu": 17,
    "avg_fp2": 5.27,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 23.27,
    "fanduelSalary": "$5100",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Shoulder",
    "tmColorLite": "#69BE28",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(105, 190, 40, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#69BE28",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
    "headlineNews": "Seahawks' Carlos Hyde: Officially limited in practice",
    "report": "Hyde (shoulder) was a limited participant in Wednesday's practice, Michael-Shawn Dugar of The Athletic reports.Coach Pete Carroll has already stated that Hyde won't take contact during the practice week, so this designation is no surprise. However, Carroll is optimistic about Hyde's status for Sunday's game versus the Vikings. It's fair to take Carroll's words with a grain of salt, especially with a Week 6 bye where the 30-year-old running back could enjoy some additional rest. If he does suit up, he'll remain the distant No. 2 behind Chris Carson.",
    "analysis": "",
    "timestamp": "",
    "week01": 8.3,
    "week02": 4.7,
    "week03": 2.8,
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
    "week21": ""
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
                         data: [8.3, 4.7, 2.8, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.0, 4.8, 6.2, 'DNP', 5.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.6, 0.0, 3.8, 'DNP', 1.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.3, 11.7, 17.4, 'DNP', 12.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4035072.png",
    "name": "Benny Snell",
    "depthchart": "Backup: RB-2",
    "team": "Pittsburgh Steelers",
    "projected": 5.7,
    "opponent": "Philadelphia Eagles",
    "home_away": "",
    "opp_rank_Neu": 12,
    "team_rank_Neu": 10,
    "avg_fp2": 3.67,
    "opp_rank_allowed_fp2_Neu": 15,
    "opp_avg_allowed_fp2": 20.48,
    "fanduelSalary": "$4700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/pit.png",
    "headlineNews": "Steelers' Benny Snell: Struggles in win",
    "report": "Snell totaled 11 yards on seven carries in the Steelers' 28-21 Week 3 win over the Texans Sunday.Snell and rookie Anthony McFarland split carries in a backup role to James Conner, but Snell was unable to get anything going on the ground. His longest run was four yards and he was stuffed on a 1st-and-goal from the one-yard line. Despite an attractive Week 4 matchup against the Titans -- which have allowed 598 rushing yards and three touchdown runs in three games this season -- Snell's fantasy value continues to drop.",
    "analysis": "",
    "timestamp": "",
    "week01": 11.3,
    "week02": -1.4,
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
    "week21": ""
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
                         data: [11.3, -1.4, 1.1, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.6, 9.6, 11.9, 'DNP', 5.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.0, 'DNP', 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.5, 8.6, 9.5, 'DNP', 9.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3051926.png",
    "name": "Gus Edwards",
    "depthchart": "Reserve: RB-3",
    "team": "Baltimore Ravens",
    "projected": 5.6,
    "opponent": "Cincinnati Bengals",
    "home_away": "",
    "opp_rank_Pos": 27,
    "team_rank_Pos": 3,
    "avg_fp2": 4.17,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 24.43,
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
    "headlineNews": "Ravens' Gus Edwards: Leads way with nine carries",
    "report": "Edwards recorded nine carries for 38 yards in Week 4 against Washington.Edwards led the Baltimore backfield with nine carries, though Mark Ingram tallied just one fewer. While he was on the field to close out a comfortable win, Edwards was also involved early on, earning two carries on the team's first offensive possession. Despite maintaining a substantial role in the Ravens' offense, Edwards has not recorded more than 10 rushes in a game this season and has yet to be targeted in the passing game. That lack of volume makes it difficult to rely on him as a regular producer.",
    "analysis": "",
    "timestamp": "",
    "week01": 1.7,
    "week02": 7.3,
    "week03": 3.9,
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
    "week21": ""
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
                         data: [1.7, 7.3, 3.9, 3.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.3, 1.4, 5.8, 4.0, 5.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.8, 7.2, 2.5, 2.1, 0.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.7, 15.3, 8.5, 11.5, 12.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4034952.png",
    "name": "La'Mical Perine",
    "depthchart": "Reserve: RB-3",
    "team": "New York Jets",
    "projected": 5.6,
    "opponent": "Arizona Cardinals",
    "home_away": "",
    "opp_rank_Neu": 19,
    "team_rank_Neg": 26,
    "avg_fp2": 2.17,
    "opp_rank_allowed_fp2_Pos": 24,
    "opp_avg_allowed_fp2": 25.9,
    "fanduelSalary": "$4600",
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
    "week01": "DNP",
    "week02": 1.7,
    "week03": 3.3,
    "week04": 1.5,
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
    "week21": ""
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
                         data: ['DNP', 1.7, 3.3, 1.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 5.8, 1.5, 3.2, 5.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 0.0, 0.0, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  "rgba(18, 87, 64, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 9.9, 7.6, 10.2, 6.6]
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
    "opponent": "New York Giants",
    "home_away": "",
    "opp_rank_Neu": 10,
    "team_rank_Neu": 23,
    "avg_fp2": 3.8,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 22.3,
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
    "headlineNews": "Cowboys' Tony Pollard: Finds end zone in loss",
    "report": "Pollard carried the ball three times for 16 yards and a touchdown and caught one of two targets for 16 yards in Sunday's loss to the Browns.The 32 scrimmage yards tied his season high, while the TD was his first of 2020. Ezekiel Elliott continues to see the bulk of the work in the Dallas backfield, but his recent difficulty holding onto the ball -- both in terms of dropped passes and fumbles -- could open the door for Pollard to get more touches going forward.",
    "analysis": "",
    "timestamp": "",
    "week01": 4.2,
    "week02": 1.4,
    "week03": -0.1,
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
    "week21": ""
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
                         data: [4.2, 1.4, -0.1, 9.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.6, 7.2, 4.0, 4.3, 5.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.0, 0.0, 0.0, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  "rgba(127, 150, 149, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.8, 9.0, 10.2, 11.4, 14.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4039274.png",
    "name": "Jonathan Ward",
    "depthchart": "Reserve: RB-3",
    "team": "Arizona Cardinals",
    "projected": 5.0,
    "opponent": "New York Jets",
    "home_away": "at ",
    "opp_rank_Neu": 22,
    "team_rank_Pos": 6,
    "avg_fp2": 6.0,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 26.88,
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
    "headlineNews": "Cardinals' Jonathan Ward: Jumps to active roster",
    "report": "The Cardinals signed Ward off their practice squad Tuesday, Darren Urban of the team's official site reports.Ward was elevated from the practice squad to the active roster both of the Cardinals' last two games, only for him to revert back to the practice squad afterward. Teams can only exercise this right two times with players, so Arizona is bringing Ward up to the active roster to serve as a regular on special teams. When it comes to offense, Ward likely needs an injury to one of Kenyan Drake or Chase Edmonds to get on the field otherwise.",
    "analysis": "",
    "timestamp": "",
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
    "week21": ""
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
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 5.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 12.1]
                    }
                    
                    ]
               }
            }];




$scope.positionWR = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16733.png",
    "name": "Odell Beckham Jr.",
    "depthchart": "Starter: WR-1",
    "team": "Cleveland Browns",
    "projected": 20.1,
    "opponent": "Indianapolis Colts",
    "home_away": "",
    "opp_rank_Neg": 1,
    "team_rank_Neg": 30,
    "avg_fp2": 15.72,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 29.57,
    "fanduelSalary": "$6800",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Toe",
    "tmColorLite": "#FF3C00",
    "tmColorDark": "#311D00",
    "tmColorLite_rgba": "rgba(255, 60, 0, 0.2)",
    "tmColorDark_rgba": "rgba(49, 29, 0, 0.2)",
    "tmTextLite": "#FF3C00",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
    "headlineNews": "Browns' Odell Beckham: Logs limited practice",
    "report": "Beckham was limited at practice Wednesday due to a toe injury, Scott Petrak of the Elyria Chronicle-Telegram reports.Beckham may have picked up the injury in the process of during in his best game of the season in the Browns' 49-38 win over the Cowboys in Week 4. He played 58 of the team's 75 offensive snaps, catching five of his eight targets for 81 yards and two scores while also rushing two times for 73 yards and another touchdown. The fact that Beckham was on the field in some capacity Wednesday is a good sign that the injury won't prevent him from playing Sunday against the Colts.",
    "analysis": "",
    "timestamp": "",
    "week01": 3.7,
    "week02": 15.4,
    "week03": 7.9,
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
    "week21": ""
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
                         data: [3.7, 15.4, 7.9, 35.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.3, 12.1, 15.1, 19.4, 20.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [8.3, 7.5, 7.4, 7.3, 3.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [25.1, 19.1, 24.0, 22.5, 17.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2976316.png",
    "name": "Michael Thomas",
    "depthchart": "Starter: WR-1",
    "team": "New Orleans Saints",
    "projected": 16.8,
    "opponent": "Los Angeles Chargers",
    "home_away": "",
    "opp_rank_Pos": 25,
    "team_rank_Neu": 17,
    "avg_fp2": 3.2,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 29.23,
    "fanduelSalary": "$8800",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Ankle",
    "tmColorLite": "#9b845c",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(155, 132, 92, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#9b845c",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
    "headlineNews": "Saints' Michael Thomas: Won't return this week",
    "report": "Thomas (ankle) has been ruled out for Sunday's game in Detroit, Tim Twentyman of the Lions' official site reports.Thomas was a limited practice participant Wednesday through Friday, potentially setting him up for a return Week 5 against the Chargers on Monday Night Football. His Saints will first take on a major challenge, as TE Jared Cook (groin) and four other starters also have been ruled out for Sunday in Detroit. The Saints have been using Tre'Quan Smith, Emmanuel Sanders and Deonte Harris as their main grouping for three-wide formations, with Bennie Fowler also chipping in the occasional snap. Alvin Kamara figures to have another busy Sunday, while rookie tight end Adam Trautman could take on the majority of Cook's vacated snaps.",
    "analysis": "",
    "timestamp": "",
    "week01": 3.2,
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
    "week21": ""
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
                         data: [3.2, 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.8, 'DNP', 'DNP', 'DNP', 16.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [8.8, 'DNP', 'DNP', 'DNP', 7.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(155, 132, 92, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [23.6, 'DNP', 'DNP', 'DNP', 24.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3916945.png",
    "name": "Darius Slayton",
    "depthchart": "Starter: WR-1",
    "team": "New York Giants",
    "projected": 16.7,
    "opponent": "Dallas Cowboys",
    "home_away": "at ",
    "opp_rank_Neu": 23,
    "team_rank_Neg": 29,
    "avg_fp2": 10.28,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 43.07,
    "fanduelSalary": "$5800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#0B2265",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(11, 34, 101, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png",
    "headlineNews": "Giants' Darius Slayton: Leading receiver against Rams",
    "report": "Slayton caught three of seven targets for 48 yards in Sunday's 17-9 loss to the Rams.Despite the modest numbers, Slayton was the Giants' leading receiver on the afternoon, and only tight end Evan Engram saw more targets from Daniel Jones. Slayton has produced nearly identical numbers the last three games after his huge performance in the opener, but he could be in line for a rebound in Week 5 against a Cowboys defense that just surrendered 49 points to the Browns.",
    "analysis": "",
    "timestamp": "",
    "week01": 25.2,
    "week02": 4.8,
    "week03": 4.8,
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
    "week21": ""
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
                         data: [25.2, 4.8, 4.8, 6.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.5, 10.9, 11.5, 9.9, 16.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.0, 1.8, 3.4, 2.2, 0.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [22.4, 22.1, 22.8, 14.9, 19.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14924.png",
    "name": "T.Y. Hilton",
    "depthchart": "Starter: WR-1",
    "team": "Indianapolis Colts",
    "projected": 16.6,
    "opponent": "Cleveland Browns",
    "home_away": "at ",
    "opp_rank_Pos": 30,
    "team_rank_Neu": 18,
    "avg_fp2": 5.68,
    "opp_rank_allowed_fp2_Pos": 30,
    "opp_avg_allowed_fp2": 39.08,
    "fanduelSalary": "$5700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#014683",
    "tmColorDark": "#002C5F",
    "tmColorLite_rgba": "rgba(1, 70, 131, 0.2)",
    "tmColorDark_rgba": "rgba(0, 44, 95, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png",
    "headlineNews": "Colts' T.Y. Hilton: Quiet in Week 4",
    "report": "Hilton recorded three receptions on five targets for 29 yards in Week 4 against the Bears.Hilton was overshadowed by Zach Pascal, who both out-targeted and out-gained him on the day. He recorded two receptions of 13 yards but failed to break free for any big chunk gains as in past seasons. Hilton's volume has also been lacking -- he has only 22 targets in four games -- as the Colts have often worked with a lead this season and have been content to employ a run-heavy offensive philosophy. With a matchup against the similar-minded Browns in Week 5, Hilton may be stuck in another-slow paced contest.",
    "analysis": "",
    "timestamp": "",
    "week01": 7.3,
    "week02": 4.3,
    "week03": 6.7,
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
    "week21": ""
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
                         data: [7.3, 4.3, 6.7, 4.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.0, 23.8, 9.5, 11.1, 16.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.2, 5.1, 5.1, 5.1, 3.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.4, 22.3, 19.2, 21.7, 19.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15818.png",
    "name": "Keenan Allen",
    "depthchart": "Starter: WR-1",
    "team": "Los Angeles Chargers",
    "projected": 15.7,
    "opponent": "New Orleans Saints",
    "home_away": "at ",
    "opp_rank_Neu": 13,
    "team_rank_Neu": 7,
    "avg_fp2": 13.18,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 24.38,
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
    "headlineNews": "Chargers' Keenan Allen: Heavy workload in loss",
    "report": "Allen brought in eight of 12 targets for 62 yards in the Chargers' 38-31 loss to the Buccaneers on Sunday.The veteran wideout was due for a busy day with Mike Williams (hamstring) out of action, and he unsurprisingly ended up pacing the team in receptions and targets. Allen has now brought in 28 of 41 targets for 290 yards and a touchdown in three games with Justin Herbert under center after securing four of eight targets for 37 yards in his one game with Tyrod Taylor (ribs/lung) as his quarterback Week 1. Allen will look to keep up his strong connection with Herbert if the latter helms the offense once again in a Week 5 road matchup versus the Saints.",
    "analysis": "",
    "timestamp": "",
    "week01": 5.7,
    "week02": 13.1,
    "week03": 23.7,
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
    "week21": ""
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
                         data: [5.7, 13.1, 23.7, 10.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.1, 13.1, 11.6, 10.6, 15.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.6, 8.5, 8.5, 5.4, 5.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 128, 198, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.3, 24.9, 23.4, 20.8, 21.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15795.png",
    "name": "DeAndre Hopkins",
    "depthchart": "Starter: WR-1",
    "team": "Arizona Cardinals",
    "projected": 15.6,
    "opponent": "New York Jets",
    "home_away": "at ",
    "opp_rank_Neu": 15,
    "team_rank_Neu": 23,
    "avg_fp2": 16.3,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 21.43,
    "fanduelSalary": "$8700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#97233F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(151, 35, 63, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#97233F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
    "headlineNews": "Cardinals' DeAndre Hopkins: Inefficient Week 4 performance",
    "report": "Hopkins recorded seven receptions on nine targets for 41 yards in a Week 4 loss to the Panthers.Hopkins continued to command plenty of targets, as he drew 29 percent of Kyler Murray's attempts. Despite hauling in a high percentage of those looks, Hopkins was unable to work deep down the field, with his longest reception going for only 13 yards. While he was able to suit up, Hopkins was held out of practice all week leading up to this contest, which may have hindered his ability to play at his usual explosive level. He'll look to return to form in Week 5 in a matchup against the Jets.",
    "analysis": "",
    "timestamp": "",
    "week01": 22.1,
    "week02": 16.8,
    "week03": 18.7,
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
    "week21": ""
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
                         data: [22.1, 16.8, 18.7, 7.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.9, 17.1, 17.5, 16.6, 15.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.7, 5.9, 5.1, 7.7, 14.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [20.4, 21.6, 22.4, 21.3, 24.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2976499.png",
    "name": "Amari Cooper",
    "depthchart": "Starter: WR-1",
    "team": "Dallas Cowboys",
    "projected": 15.4,
    "opponent": "New York Giants",
    "home_away": "",
    "opp_rank_Neg": 6,
    "team_rank_Pos": 1,
    "avg_fp2": 16.65,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 31.07,
    "fanduelSalary": "$7800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#7F9695",
    "tmColorDark": "#041E42",
    "tmColorLite_rgba": "rgba(127, 150, 149, 0.2)",
    "tmColorDark_rgba": "rgba(4, 30, 66, 0.2)",
    "tmTextLite": "#7F9695",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
    "headlineNews": "Cowboys' Amari Cooper: Explodes for 134 yards",
    "report": "Cooper caught 12 of 16 targets for 134 yards and a touchdown during Sunday's 49-38 loss to the Browns. He also caught a two-point conversion.Cooper was thrown to early and often as his team tried to dig itself out of a hole yet again, managing his highest yardage total since Week 10 of last season. He made a beautiful 20-yard touchdown grab on fourth down in the second quarter for his first score of the season, with the sparse touchdown tally about the only complaint his fantasy managers could really have at this point. Cooper is on pace for over 1,600 yards on the season and could thrive again in next Sunday's favorable matchup with the Giants.",
    "analysis": "",
    "timestamp": "",
    "week01": 13.1,
    "week02": 13.0,
    "week03": 13.1,
    "week04": 27.4,
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
    "week21": ""
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
                         data: [13.1, 13.0, 13.1, 27.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.4, 17.1, 17.0, 12.5, 15.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.2, 2.3, 2.4, 2.8, 2.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  "rgba(127, 150, 149, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.4, 19.5, 21.4, 20.9, 22.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/12649.png",
    "name": "Julian Edelman",
    "depthchart": "Starter: WR-1",
    "team": "New England Patriots",
    "projected": 14.6,
    "opponent": "Denver Broncos",
    "home_away": "",
    "opp_rank_Neu": 21,
    "team_rank_Neg": 24,
    "avg_fp2": 10.15,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 35.73,
    "fanduelSalary": "$6200",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Knee",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#C60C30",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png",
    "headlineNews": "Patriots' Julian Edelman: Listed as limited on practice estimate",
    "report": "Edelman (knee) was listed as limited on Wednesday's practice estimation, Andrew Callahan of The Boston Herald reports.The Patriots elected not hold a practice Wednesday due to Stephon Gilmore's recent positive COVID-19 test, but Edelman being listed as a limited practice participant has been a routine occurrence, as the team has been managing his reps. At this stage, however, Edelman's availability for Sunday's game against the Broncos does not appear in danger.",
    "analysis": "",
    "timestamp": "",
    "week01": 10.5,
    "week02": 21.9,
    "week03": 3.2,
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
    "week21": ""
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
                         data: [10.5, 21.9, 3.2, 5.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.9, 15.9, 12.3, 15.6, 14.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.4, 3.1, 6.6, 10.2, 1.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.5, 17.2, 16.6, 20.5, 12.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3925357.png",
    "name": "Calvin Ridley",
    "depthchart": "Backup: WR-2",
    "team": "Atlanta Falcons",
    "projected": 14.4,
    "opponent": "Carolina Panthers",
    "home_away": "",
    "opp_rank_Neu": 7,
    "team_rank_Pos": 5,
    "avg_fp2": 17.5,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 25.05,
    "fanduelSalary": "$8300",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Thigh",
    "tmColorLite": "#A71930",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/atl.png",
    "headlineNews": "Falcons' Calvin Ridley: Limited to begin Week 5 prep",
    "report": "Ridley (thigh/knee) was a limited participant at Thursday's practice, Will McFadden of the Falcons' official site reports.Ridley has battled a number of lower-body injuries of late, with thigh and knee issues this week joining ankle and calf concerns from last week. After reeling off at least 100 receiving yards in each of the first three games of the season, he was blanked by the Packers this past Monday. On a positive note, Ridley managed to get in some reps Wednesday, while Julio Jones (hamstring) didn't practice at all. After Jones and Ridley, Russell Gage and Olamide Zaccheaus are the next wide receivers up for the Falcons.",
    "analysis": "",
    "timestamp": "",
    "week01": 29.4,
    "week02": 26.4,
    "week03": 14.2,
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
    "week21": ""
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
                         data: [29.4, 26.4, 14.2, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.1, 12.9, 11.5, 13.7, 14.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.4, 5.0, 4.1, 6.6, 6.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.5, 18.0, 24.1, 24.4, 21.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13982.png",
    "name": "Julio Jones",
    "depthchart": "Starter: WR-1",
    "team": "Atlanta Falcons",
    "projected": 13.8,
    "opponent": "Carolina Panthers",
    "home_away": "",
    "opp_rank_Neu": 7,
    "team_rank_Pos": 5,
    "avg_fp2": 9.6,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 25.05,
    "fanduelSalary": "$8100",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Hamstring",
    "tmColorLite": "#A71930",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/atl.png",
    "headlineNews": "Falcons' Julio Jones: Doesn't practice Wednesday",
    "report": "Jones (hamstring) was held out of practice Wednesday, Will McFadden of the Falcons' official site reports.Jones has tended to a hamstring injury for most of the season, with the injury forcing him to sit out Week 3 and to miss the second half of the Falcons' Week 4 loss at Green Bay. His running mate at wide receiver, Calvin Ridley (thigh/knee), was limited at Wednesday's session, leaving Atlanta in a precarious spot at the position heading into Sunday's game against the Panthers. They'll have two more chances to elevated to full participants this week, but Russell Gage and Olamide Zaccheaus are the next wideouts up for the Falcons if Jones and/or Ridley require time away from the field.",
    "analysis": "",
    "timestamp": "",
    "week01": 20.2,
    "week02": 3.4,
    "week03": "DNP",
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
    "week21": ""
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
                         data: [20.2, 3.4, 'DNP', 5.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.1, 15.7, 'DNP', 16.2, 13.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.0, 8.3, 'DNP', 5.8, 6.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [25.3, 25.9, 'DNP', 25.6, 24.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3120348.png",
    "name": "JuJu Smith-Schuster",
    "depthchart": "Starter: WR-1",
    "team": "Pittsburgh Steelers",
    "projected": 13.6,
    "opponent": "Philadelphia Eagles",
    "home_away": "",
    "opp_rank_Neu": 17,
    "team_rank_Neu": 17,
    "avg_fp2": 14.83,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 29.77,
    "fanduelSalary": "$7300",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Knee",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/pit.png",
    "headlineNews": "Steelers' JuJu Smith-Schuster: Doesn't practice Wednesday",
    "report": "Smith-Schuster (knee) didn't practice Wednesday, Brooke Pryor of ESPN.com reports.The same applies to fellow starting wideout Diontae Johnson (toe), but Pryor suggests that the duo's listed injuries are \"minor things and haven't kept them out of games so far.\" For some perspective, Smith-Schuster -- who didn't play last week due to the postponement of the scheduled Titans/Steelers contest -- sat out back-to-back practices Wednesday and Thursday before returning to a full session on Friday and approaching the team's game against the Texans in Week 3 minus an injury designation. A similar pattern could be on tap in advance of Sunday's game against the Eagles.",
    "analysis": "",
    "timestamp": "",
    "week01": 21.9,
    "week02": 8.3,
    "week03": 14.3,
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
    "week21": ""
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
                         data: [21.9, 8.3, 14.3, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.2, 17.5, 16.4, 'DNP', 13.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.5, 3.5, 14.0, 'DNP', 6.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.9, 20.7, 25.8, 'DNP', 22.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116406.png",
    "name": "Tyreek Hill",
    "depthchart": "Starter: WR-1",
    "team": "Kansas City Chiefs",
    "projected": 13.5,
    "opponent": "Las Vegas Raiders",
    "home_away": "",
    "opp_rank_Neu": 20,
    "team_rank_Pos": 6,
    "avg_fp2": 16.38,
    "opp_rank_allowed_fp2_Neu": 14,
    "opp_avg_allowed_fp2": 28.5,
    "fanduelSalary": "$8200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Chiefs' Tyreek Hill: Continues TD streak",
    "report": "Hill caught four of six targets for 64 yards and a touchdown in Monday night's 26-10 win over the Patriots.Hill scored Kansas City's first touchdown of the game by taking a misdirection shovel pass six yards into the end zone to close the third quarter. That play not only gave the Chiefs a needed lift following an uncharacteristically slow start, but also prolonged Hill's four-game touchdown streak to start this season. The speedster will aim to keep his strong stretch going Week 5 versus the Raiders.",
    "analysis": "",
    "timestamp": "",
    "week01": 13.1,
    "week02": 19.3,
    "week03": 18.7,
    "week04": 14.4,
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
    "week21": ""
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
                         data: [13.1, 19.3, 18.7, 14.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [20.0, 12.7, 13.6, 20.1, 13.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.1, 5.0, 5.3, 8.4, 4.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.5, 20.8, 24.3, 24.8, 28.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13983.png",
    "name": "A.J. Green",
    "depthchart": "Starter: WR-1",
    "team": "Cincinnati Bengals",
    "projected": 13.3,
    "opponent": "Baltimore Ravens",
    "home_away": "at ",
    "opp_rank_Pos": 26,
    "team_rank_Neu": 16,
    "avg_fp2": 4.73,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 28.07,
    "fanduelSalary": "$5400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#ea7330",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(234, 115, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#ea7330",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png",
    "headlineNews": "Bengals' A.J. Green: Just one catch in win",
    "report": "Green caught just one of five targets for three yards in Sunday's 33-25 loss to the Bengals.Green was quiet once again, even as quarterback Joe Burrow reached 300 passing yards for a third consecutive week. The veteran wide receiver spent some time on the sidelines in the second half, but there was no injury reported, so the team was simply sticking with a different preferred personnel grouping while implementing a run-heavy approach with the lead. Green has just 14 catches for 119 yards through four weeks, and it won't be easy to get things going in Baltimore in Week 5.",
    "analysis": "",
    "timestamp": "",
    "week01": 7.6,
    "week02": 4.4,
    "week03": 6.1,
    "week04": 0.8,
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
    "week21": ""
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
                         data: [7.6, 4.4, 6.1, 0.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.5, 13.4, 13.4, 15.2, 13.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.1, 7.3, 7.3, 6.1, 7.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.6, 21.4, 22.2, 21.7, 22.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4241475.png",
    "name": "Henry Ruggs",
    "depthchart": "Starter: WR-1",
    "team": "Las Vegas Raiders",
    "projected": 12.5,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Neg": 3,
    "team_rank_Neu": 13,
    "avg_fp2": 4.5,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 21.8,
    "fanduelSalary": "$5300",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Hamstring",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A5ACAF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lv.png",
    "headlineNews": "Raiders' Henry Ruggs: Returns to limited practice",
    "report": "Ruggs (hamstring/knee) was limited at Wednesday's practice, Vic Tafur of The Athletic reports.Meanwhile, fellow rookie wideout Bryan Edwards (foot/ankle) wasn't able to return to practice. Ruggs' presence on the field Wednesday -- albeit as a limited participant -- has him trending in the right direction as Sunday's game against the Chiefs approaches.",
    "analysis": "",
    "timestamp": "",
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
    "week21": ""
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
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 12.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 0.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 16.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16460.png",
    "name": "Adam Thielen",
    "depthchart": "Starter: WR-1",
    "team": "Minnesota Vikings",
    "projected": 12.2,
    "opponent": "Seattle Seahawks",
    "home_away": "at ",
    "opp_rank_Pos": 32,
    "team_rank_Neg": 28,
    "avg_fp2": 16.4,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 53.38,
    "fanduelSalary": "$7300",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Shoulder",
    "tmColorLite": "#e0aa19",
    "tmColorDark": "#300e5a",
    "tmColorLite_rgba": "rgba(224, 170, 25, 0.2)",
    "tmColorDark_rgba": "rgba(48, 14, 90, 0.2)",
    "tmTextLite": "#e0aa19",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/min.png",
    "headlineNews": "Vikings' Adam Thielen: Limited Wednesday",
    "report": "Thielen (shoulder) was listed as a limited participant on Wednesday's injury report.A shoulder injury is to blame for Thielen's lack of reps, but being listed with LP next to his name generally is a positive sign for his upcoming availability. On the season, he has two 100-yard efforts to his name and has scored four TDs in four games, proving his standing as the Vikings' top wide receiver.",
    "analysis": "",
    "timestamp": "",
    "week01": 28.0,
    "week02": 4.6,
    "week03": 10.8,
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
    "week21": ""
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
                         data: [28.0, 4.6, 10.8, 22.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.0, 14.8, 16.5, 15.2, 12.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.0, 11.6, 3.0, 1.3, 2.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  "rgba(224, 170, 25, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.9, 24.0, 18.6, 18.0, 17.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16799.png",
    "name": "Allen Robinson",
    "depthchart": "Starter: WR-1",
    "team": "Chicago Bears",
    "projected": 12.1,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "",
    "opp_rank_Neu": 19,
    "team_rank_Neu": 21,
    "avg_fp2": 14.38,
    "opp_rank_allowed_fp2_Neu": 9,
    "opp_avg_allowed_fp2": 24.93,
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
    "headlineNews": "Bears' Allen Robinson: Passes century mark in receiving",
    "report": "Robinson caught seven passes for 101 yards and a touchdown in Chicago's 19-11 loss to the Colts on Sunday.Aside from a leaping 27-yard catch in the first half, Robinson was very quiet until the last drive of the game, when Nick Foles kept firing the ball to his star receiver, not only padding his yardage total but getting him his only score of the afternoon. With at least 100 yards and a touchdown in each of his last two games, Robinson is producing as the top-12 receiver that fantasy managers have come to expect, and he should continue to have one of the safest weekly floors based on his excellent target volume.",
    "analysis": "",
    "timestamp": "",
    "week01": 9.8,
    "week02": 4.8,
    "week03": 23.3,
    "week04": 19.6,
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
    "week21": ""
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
                         data: [9.8, 4.8, 23.3, 19.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.0, 14.7, 11.3, 15.5, 12.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.5, 3.8, 2.3, 5.9, 5.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  "rgba(195, 104, 53, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.4, 19.0, 15.3, 20.3, 19.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2577327.png",
    "name": "Tyler Lockett",
    "depthchart": "Starter: WR-1",
    "team": "Seattle Seahawks",
    "projected": 12.1,
    "opponent": "Minnesota Vikings",
    "home_away": "",
    "opp_rank_Pos": 29,
    "team_rank_Pos": 3,
    "avg_fp2": 16.7,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 37.85,
    "fanduelSalary": "$7400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#69BE28",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(105, 190, 40, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#69BE28",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
    "headlineNews": "Seahawks' Tyler Lockett: Invisible until fourth quarter",
    "report": "Lockett caught two of four targets for 39 yards in Sunday's 31-23 win over the Dolphins.Lockett was bound to fall back to earth after his three-touchdown performance against the Cowboys in Week 3, but he crashed harder than fantasy managers would've liked. He failed to haul in either of his two targets through the first three quarters, including a costly drop in Dolphins territory. Russell Wilson connected with him twice in the fourth quarter to somewhat salvage Lockett's fantasy day. The 28-year-old wideout will look to quickly shake off this dud with an appealing Week 5 matchup on the horizon, as the Vikings have allowed 294.3 passing yards per game and 13 total passing touchdowns this season.",
    "analysis": "",
    "timestamp": "",
    "week01": 13.2,
    "week02": 16.2,
    "week03": 32.5,
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
    "week21": ""
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
                         data: [13.2, 16.2, 32.5, 4.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.6, 7.5, 11.9, 11.0, 12.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.0, 1.5, 2.0, 4.7, 6.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.9, 15.7, 14.3, 18.6, 20.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2976212.png",
    "name": "Stefon Diggs",
    "depthchart": "Starter: WR-1",
    "team": "Buffalo Bills",
    "projected": 12.1,
    "opponent": "Tennessee Titans",
    "home_away": "at ",
    "opp_rank_Neu": 23,
    "team_rank_Pos": 2,
    "avg_fp2": 16.32,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 30.27,
    "fanduelSalary": "$7100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#005596",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 85, 150, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
    "headlineNews": "Bills' Stefon Diggs: Totals 115 yards",
    "report": "Diggs caught six of seven targets for 115 yards during Sunday's 30-23 win over the Raiders.Diggs led the team in targets, receptions and receiving yards while averaging a healthy 19.2 yards per reception. He came through with a season-high gain of 49 yards and continues to build an excellent rapport with ascending quarterback Josh Allen. Diggs is now on pace for over 1,600 yards through four games and will look to continue his excellent season in another favorable matchup next Sunday against the Titans.",
    "analysis": "",
    "timestamp": "",
    "week01": 12.6,
    "week02": 25.3,
    "week03": 12.9,
    "week04": 14.5,
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
    "week21": ""
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
                         data: [12.6, 25.3, 12.9, 14.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.0, 12.8, 13.1, 19.6, 12.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.5, 5.0, 3.9, 5.1, 4.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.1, 20.6, 19.2, 22.0, 20.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14912.png",
    "name": "Alshon Jeffery",
    "depthchart": "Starter: WR-1",
    "team": "Philadelphia Eagles",
    "projected": 11.5,
    "opponent": "Pittsburgh Steelers",
    "home_away": "at ",
    "opp_rank_Neu": 12,
    "team_rank_Neg": 27,
    "avg_fp2": 11.19,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 32.37,
    "fanduelSalary": "$5000",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Foot",
    "tmColorLite": "#386168",
    "tmColorDark": "#004C54",
    "tmColorLite_rgba": "rgba(56, 97, 104, 0.2)",
    "tmColorDark_rgba": "rgba(0, 76, 84, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    "headlineNews": "Eagles' Alshon Jeffery: Limited in practice Wednesday",
    "report": "Jeffery (foot) was limited at Wednesday's practice.Following word from coach Doug Pederson that Jeffery will practice this week as he's done in previous weeks, Jeffery did just that Wednesday. As a result, Jeffery's season debut may be imminent, as long as he avoids any setbacks and especially puts in a full session Thursday and/or Friday. His status could receive some clarification by week's end.",
    "analysis": "",
    "timestamp": "",
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
    "week21": ""
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
                         data: ['DNP', 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 11.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 5.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 19.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3052876.png",
    "name": "Will Fuller",
    "depthchart": "Starter: WR-1",
    "team": "Houston Texans",
    "projected": 11.4,
    "opponent": "Jacksonville Jaguars",
    "home_away": "",
    "opp_rank_Pos": 24,
    "team_rank_Neu": 15,
    "avg_fp2": 12.1,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 26.45,
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
    "headlineNews": "Texans' Will Fuller: Just misses last-minute TD",
    "report": "Fuller corralled six of seven targets for 108 yards and a touchdown during Sunday's 31-23 loss to the Vikings.Fuller came down with a 24-yard TD from Deshaun Watson at the 9:47 mark of the third quarter, and he nearly completed a miraculous catch in the back corner of the end zone on Houston's final offensive drive. It was initially ruled on the field that Fuller secured a fourth-down catch to put Houston within two points, but after review, the call was overturned. Despite the hit to Houston's postseason hopes, Fuller has touchdowns in consecutive games as the Texans prepare to face a Jacksonville defense that surrendered 300 passing yards to Cincinnati on Sunday.",
    "analysis": "",
    "timestamp": "",
    "week01": 15.2,
    "week02": 0.0,
    "week03": 13.4,
    "week04": 19.8,
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
    "week21": ""
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
                         data: [15.2, 0.0, 13.4, 19.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.3, 9.0, 7.4, 14.1, 11.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.2, 0.0, 0.7, 3.1, 6.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.5, 18.3, 15.2, 17.2, 20.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4047650.png",
    "name": "D.K. Metcalf",
    "depthchart": "Backup: WR-2",
    "team": "Seattle Seahawks",
    "projected": 11.2,
    "opponent": "Minnesota Vikings",
    "home_away": "",
    "opp_rank_Pos": 29,
    "team_rank_Pos": 3,
    "avg_fp2": 16.07,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 37.85,
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
    "headlineNews": "Seahawks' DK Metcalf: Second straight 100-yard effort",
    "report": "Metcalf caught four of six targets for 106 yards in Sunday's 31-23 win over the Dolphins.Metcalf has been the epitome of consistency this season. He's reeled in exactly four passes, recorded at least 90 receiving yards, and been targeted six or more times in each game this season. Unfortunately, this is Metcalf's first game without a touchdown, but it's been a fantastic start nonetheless with a total of 403 receiving yards through four contests. He's outpacing Tyler Lockett by a wide margin in the yardage department, too. Metcalf is a must-start fantasy receiver in 2020, especially in Week 5 against a Vikings team that has allowed a total of 13 passing scores this season.",
    "analysis": "",
    "timestamp": "",
    "week01": "DNP",
    "week02": 17.2,
    "week03": 17.0,
    "week04": 12.6,
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
    "week21": ""
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
                         data: ['DNP', 17.2, 17.0, 12.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 13.8, 12.5, 8.9, 11.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 3.9, 4.9, 1.7, 3.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 19.8, 15.8, 17.5, 18.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4239993.png",
    "name": "Tee Higgins",
    "depthchart": "Backup: WR-2",
    "team": "Cincinnati Bengals",
    "projected": 11.1,
    "opponent": "Baltimore Ravens",
    "home_away": "at ",
    "opp_rank_Pos": 26,
    "team_rank_Neu": 16,
    "avg_fp2": 8.62,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 28.07,
    "fanduelSalary": "$5400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#ea7330",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(234, 115, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#ea7330",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png",
    "headlineNews": "Bengals' Tee Higgins: Racks up 90 scrimmage yards",
    "report": "Higgins caught four of seven targets for 77 yards and added a 13-yard rush in Sunday's 33-25 win over the Jaguars.Higgins also had a ball clank off his hands on what would have been an easy chunk gain, but he still set a new career high in receiving yards for the third consecutive game. The rookie second-rounder posted a goose egg in his debut and had just 35 yards in Week 2, but he broke out with 40 yards and two touchdowns in Week 3 and finished just 13 yards shy of Tyler Boyd's team-leading total against Jacksonville. Higgins will look to keep progressing against the Ravens in Week 5.",
    "analysis": "",
    "timestamp": "",
    "week01": 0.0,
    "week02": "DNP",
    "week03": 18.5,
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
    "week21": ""
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
                         data: [0.0, 'DNP', 18.5, 11.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [0.6, 'DNP', 4.2, 7.9, 11.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 'DNP', 0.0, 3.4, 5.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [3.4, 'DNP', 9.5, 11.8, 13.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3115394.png",
    "name": "D.J. Chark",
    "depthchart": "Starter: WR-1",
    "team": "Jacksonville Jaguars",
    "projected": 11.0,
    "opponent": "Houston Texans",
    "home_away": "at ",
    "opp_rank_Neg": 5,
    "team_rank_Neu": 10,
    "avg_fp2": 15.3,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 28.3,
    "fanduelSalary": "$7000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#006778",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 103, 120, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#006778",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/jax.png",
    "headlineNews": "Jaguars' DJ Chark: Scores twice in Week 4",
    "report": "Chark caught eight of nine targets for 95 yards and two touchdowns in Sunday's 33-25 loss to the Bengals.Chark did well to get both feet down in the back of the end zone on his 11-yard touchdown catch late in the first quarter, then scored from two yards out on a quick slant early in the fourth. The chest and back injuries that sidelined Chark in Week 3 are now firmly in the rear view mirror, and Jacksonville's top receiving option should continue to play a major role in his team's Week 5 clash with the winless Texans.",
    "analysis": "",
    "timestamp": "",
    "week01": 10.0,
    "week02": 10.4,
    "week03": "DNP",
    "week04": 25.5,
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
    "week21": ""
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
                         data: [10.0, 10.4, 'DNP', 25.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.9, 11.1, 'DNP', 5.5, 11.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.0, 0.0, 'DNP', 5.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 103, 120, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.0, 15.1, 'DNP', 16.6, 18.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3915416.png",
    "name": "D.J. Moore",
    "depthchart": "Starter: WR-1",
    "team": "Carolina Panthers",
    "projected": 11.0,
    "opponent": "Atlanta Falcons",
    "home_away": "at ",
    "opp_rank_Pos": 31,
    "team_rank_Neu": 8,
    "avg_fp2": 9.45,
    "opp_rank_allowed_fp2_Pos": 24,
    "opp_avg_allowed_fp2": 32.88,
    "fanduelSalary": "$6600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0085CA",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 133, 202, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#0085CA",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/car.png",
    "headlineNews": "Panthers' D.J. Moore: Season low in receiving",
    "report": "Moore caught four of his six targets for 49 receiving yards during Sunday's 31-21 win against the Cardinals.The Maryland product enjoyed a lucrative Week 2 outing against Tampa Bay, racking up eight catches for 120 yards on his 13 targets. In Moore's other three appearances of 2020, however, the 23-year-old wideout has accumulated 3.3 catches and 56 receiving yards per contest -- certainly not pedestrian production in the fantasy realm, but averages that would land him well short from his 87-catch, 1,175-yard campaign of 2019. Moore's next matchup offers a \"get right\" opportunity, as he faces a banged-up Falcons defense that entered Week 4 allowing the second-highest total of WR receiving yards (736).",
    "analysis": "",
    "timestamp": "",
    "week01": 7.4,
    "week02": 16.0,
    "week03": 7.5,
    "week04": 6.9,
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
    "week21": ""
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
                         data: [7.4, 16.0, 7.5, 6.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.7, 8.1, 12.2, 10.1, 11.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.9, 5.2, 4.2, 3.0, 1.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 133, 202, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.6, 16.5, 15.7, 15.5, 14.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16790.png",
    "name": "Jarvis Landry",
    "depthchart": "Backup: WR-2",
    "team": "Cleveland Browns",
    "projected": 10.9,
    "opponent": "Indianapolis Colts",
    "home_away": "",
    "opp_rank_Neg": 1,
    "team_rank_Neg": 30,
    "avg_fp2": 8.27,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 29.57,
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
    "headlineNews": "Browns' Jarvis Landry: Throws TD pass",
    "report": "Landry caught five of six targets for 48 yards and threw a 37-yard touchdown pass during Sunday's 49-38 win over the Cowboys.Landry got the scoring started early in the first quarter when he launched a long touchdown pass to Odell Beckham Jr. He tied for the team lead in catches and finished second in receiving yardage, but he still failed to surpass 50 receiving yards for the third straight game. Landry has uncharacteristically drawn just 19 targets through four games this season and still hasn't scored a touchdown of his own. He'll hope for better results next Sunday against the Colts.",
    "analysis": "",
    "timestamp": "",
    "week01": 8.6,
    "week02": 6.1,
    "week03": 5.6,
    "week04": 12.78,
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
    "week21": ""
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
                         data: [8.6, 6.1, 5.6, 12.78]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.8, 6.2, 8.8, 11.6, 10.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.6, 6.6, 5.5, 6.2, 5.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.1, 19.1, 17.7, 18.2, 16.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13217.png",
    "name": "Golden Tate",
    "depthchart": "Backup: WR-2",
    "team": "New York Giants",
    "projected": 10.8,
    "opponent": "Dallas Cowboys",
    "home_away": "at ",
    "opp_rank_Neu": 23,
    "team_rank_Neg": 29,
    "avg_fp2": 5.77,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 43.07,
    "fanduelSalary": "$5500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#0B2265",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(11, 34, 101, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png",
    "headlineNews": "Giants' Golden Tate: Brawls after game",
    "report": "Tate caught four of six targets for 20 yards Sunday and got into a fight with Rams cornerback Jalen Ramsey after the game.Apparently, Tate and Ramsey have some off-field personal issues between them, and it spilled over into the game. No word yet whether the league will take disciplinary action, but if it does, the timing couldn't be worse heading into a matchup against the porous Cowboys defense Sunday.",
    "analysis": "",
    "timestamp": "",
    "week01": "DNP",
    "week02": 7.2,
    "week03": 6.1,
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
    "week21": ""
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
                         data: ['DNP', 7.2, 6.1, 4.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 9.4, 4.7, 5.3, 10.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 2.1, 2.7, 1.6, 3.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 15.3, 13.3, 18.5, 17.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3121422.png",
    "name": "Terry McLaurin",
    "depthchart": "Starter: WR-1",
    "team": "Washington Football Team",
    "projected": 10.5,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank_Neu": 8,
    "team_rank_Neg": 26,
    "avg_fp2": 14.5,
    "opp_rank_allowed_fp2_Neu": 7,
    "opp_avg_allowed_fp2": 24.3,
    "fanduelSalary": "$6300",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Thigh",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#773141",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(119, 49, 65, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png",
    "headlineNews": "Football Team's Terry McLaurin: Sits out practice with thigh injury",
    "report": "McLaurin (thigh) is not practicing Wednesday, Mike Garafolo of NFL Network reports.McLaurin also missed practice due to his thigh injury leading up to the Week 4 loss to Baltimore, but he played 90 percent of snaps during the contest and finished with an outstanding 10-118-0 receiving line on 14 targets. Garafolo notes that Washington is optimistic that McLaurin will be able to manage a similar feat and suit up versus the Rams on Sunday.",
    "analysis": "",
    "timestamp": "",
    "week01": 8.6,
    "week02": 22.0,
    "week03": 10.6,
    "week04": 16.8,
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
    "week21": ""
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
                         data: [8.6, 22.0, 10.6, 16.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.3, 9.4, 10.1, 8.9, 10.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.0, 5.7, 11.3, 4.7, 7.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.6, 19.7, 23.9, 17.9, 16.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2576623.png",
    "name": "DeVante Parker",
    "depthchart": "Starter: WR-1",
    "team": "Miami Dolphins",
    "projected": 10.1,
    "opponent": "San Francisco 49ers",
    "home_away": "at ",
    "opp_rank_Neg": 2,
    "team_rank_Neu": 20,
    "avg_fp2": 11.47,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 24.1,
    "fanduelSalary": "$6400",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Ankle",
    "tmColorLite": "#008E97",
    "tmColorDark": "#005778",
    "tmColorLite_rgba": "rgba(0, 142, 151, 0.2)",
    "tmColorDark_rgba": "rgba(0, 87, 120, 0.2)",
    "tmTextLite": "#f5821f",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/mia.png",
    "headlineNews": "Dolphins' DeVante Parker: Limited in practice Wednesday",
    "report": "Parker (ankle) was a limited participant in Wednesday's practice, Josh Tolentino of The Athletic reports.Parker briefly exited the Week 4 loss to the Seahawks in the first quarter due to an ankle injury, but he managed to return prior to halftime and play through the issue. The No. 1 receiver finished the game with 10 catches for 110 yards and played each of Miami's 38 offensive snaps in the second half, a hint that the injury didn't significantly impede him. Barring any setbacks, there's not yet any real reason to be worried about Parker's availability for Sunday's game in San Francisco.",
    "analysis": "",
    "timestamp": "",
    "week01": 6.7,
    "week02": 13.8,
    "week03": 9.4,
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
    "week21": ""
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
                         data: [6.7, 13.8, 9.4, 16.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.9, 11.6, 11.6, 17.9, 10.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [11.4, 3.6, 3.4, 1.8, 2.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 142, 151, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [20.8, 16.2, 17.0, 14.9, 15.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3128451.png",
    "name": "Tre'Quan Smith",
    "depthchart": "Backup: WR-2",
    "team": "New Orleans Saints",
    "projected": 10.1,
    "opponent": "Los Angeles Chargers",
    "home_away": "",
    "opp_rank_Pos": 25,
    "team_rank_Neu": 17,
    "avg_fp2": 9.4,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 29.23,
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
    "headlineNews": "Saints' Tre'Quan Smith: Scores twice as Thomas sits again",
    "report": "Smith hauled in all four of his targets for 54 yards and two touchdowns in Sunday's 35-29 win over the Lions.Smith caught touchdowns of two and 20 yards in the final 3:03 of the first half, as the Saints turned a 14-0 deficit into a 28-14 halftime lead. New Orleans' offense has gone more run-heavy with top wide receiver Michael Thomas (ankle) sidelined for the past three games, but Smith has emerged as quarterback Drew Brees' second-favorite target behind running back Alvin Kamara when the team turns to the air. If Thomas isn't ready to return in Week 5, Smith's prominent role will make him an appealing option against a Chargers defense that just surrendered five passing touchdowns to Tampa Bay.",
    "analysis": "",
    "timestamp": "",
    "week01": 0.9,
    "week02": 11.1,
    "week03": 6.2,
    "week04": 19.4,
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
    "week21": ""
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
                         data: [0.9, 11.1, 6.2, 19.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.7, 6.1, 2.8, 7.2, 10.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.0, 0.0, 0.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(155, 132, 92, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.8, 11.2, 12.2, 13.9, 10.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15880.png",
    "name": "Robert Woods",
    "depthchart": "Starter: WR-1",
    "team": "Los Angeles Rams",
    "projected": 10.0,
    "opponent": "Washington Football Team",
    "home_away": "at ",
    "opp_rank_Neg": 4,
    "team_rank_Neu": 14,
    "avg_fp2": 12.7,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 22.4,
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
    "headlineNews": "Rams' Robert Woods: Rare quiet showing",
    "report": "Woods caught six of seven targets for 35 yards and rushed once for two yards during Sunday's 17-9 win over the Giants.While this was the veteran's first fantasy dud of the season, it's actually his second poor receiving showing through four games. Woods was held to just two receptions for 14 yards in Week 2 against Philadelphia, but a rushing touchdown kept him productive for fantasy managers. Quarterback Jared Goff threw to nine different receivers Sunday, but Woods remained a go-to option. He tied with fellow wideout Cooper Kupp for tops on the team with seven targets Sunday. It's definitely discouraging that Woods didn't capitalize on a soft matchup against the basement-dwelling Giants, but the entire Rams offense was in a funk. Look for a bounce-back showing from the typically reliable Woods in Week 5 against Washington.",
    "analysis": "",
    "timestamp": "",
    "week01": 14.9,
    "week02": 10.3,
    "week03": 18.9,
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
    "week21": ""
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
                         data: [14.9, 10.3, 18.9, 6.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.7, 14.7, 8.8, 11.2, 10.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.6, 5.8, 2.3, 3.0, 3.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.4, 15.5, 19.2, 17.5, 15.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16731.png",
    "name": "Brandin Cooks",
    "depthchart": "Backup: WR-2",
    "team": "Houston Texans",
    "projected": 9.8,
    "opponent": "Jacksonville Jaguars",
    "home_away": "",
    "opp_rank_Pos": 24,
    "team_rank_Neu": 15,
    "avg_fp2": 4.7,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 26.45,
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
    "headlineNews": "Texans' Brandin Cooks: Shut out in loss",
    "report": "Cooks failed to catch any of his three targets and had a drop in Sunday's 31-23 loss to the Vikings.Week 4's shutout was the third time in four games Cooks has finished with 23 yards receiving or fewer. Houston's offense is hamstrung by an inconsistent running attack, and the integration of new weapons like Cooks has not gone as planned. Deshaun Watson told Aaron Wilson of the Houston Chronicle that the Vikings schemed to eliminate Cooks. \"I mean, it was the scheme of Minnesota,\" Watson said of Cooks' lack of involvement. \"They did their part. I did my job of whatever play call was called to execute the reads and find the open guy. Not saying he was open, but by the time I got back to him, either a defender was in his way or he was probably on the back side of the read.\"",
    "analysis": "",
    "timestamp": "",
    "week01": 3.0,
    "week02": 12.0,
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
    "week21": ""
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
                         data: [3.0, 12.0, 3.8, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.7, 4.8, 5.9, 11.0, 9.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.5, 5.1, 4.3, 5.0, 3.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.7, 19.6, 17.9, 19.0, 18.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4241389.png",
    "name": "CeeDee Lamb",
    "depthchart": "Reserve: WR-3",
    "team": "Dallas Cowboys",
    "projected": 9.6,
    "opponent": "New York Giants",
    "home_away": "",
    "opp_rank_Neg": 6,
    "team_rank_Pos": 1,
    "avg_fp2": 13.68,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 31.07,
    "fanduelSalary": "$5900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#7F9695",
    "tmColorDark": "#041E42",
    "tmColorLite_rgba": "rgba(127, 150, 149, 0.2)",
    "tmColorDark_rgba": "rgba(4, 30, 66, 0.2)",
    "tmTextLite": "#7F9695",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
    "headlineNews": "Cowboys' CeeDee Lamb: Scores first two TDs",
    "report": "Lamb caught five of seven targets for 79 yards and two touchdowns while adding one three-yard carry during Sunday's 49-38 loss to the Browns.Lamb was wide open for a 43-yard touchdown in the first quarter and capped off his team's scoring for the day with a five-yard strike in the fourth. He had yet to reach the end zone through his first three NFL games, so his ability to get behind the defense and his usage in the red zone Sunday were positive developments for his future fantasy value. Moreover, Lamb finished second on the team in receiving yards and is now on pace for over 1,200 yards in his rookie year, making him a viable fantsy option for next Sunday's matchup with the Giants.",
    "analysis": "",
    "timestamp": "",
    "week01": 8.4,
    "week02": 14.5,
    "week03": 9.1,
    "week04": 22.7,
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
    "week21": ""
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
                         data: [8.4, 14.5, 9.1, 22.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.1, 8.1, 11.1, 8.3, 9.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 2.0, 0.0, 2.7, 4.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  "rgba(127, 150, 149, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.4, 9.8, 14.5, 10.5, 11.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4047646.png",
    "name": "A.J. Brown",
    "depthchart": "Starter: WR-1",
    "team": "Tennessee Titans",
    "projected": 9.5,
    "opponent": "Buffalo Bills",
    "home_away": "",
    "opp_rank_Pos": 27,
    "team_rank_Neu": 11,
    "avg_fp2": 6.4,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 31.82,
    "fanduelSalary": "$6500",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Knee",
    "tmColorLite": "#4495D1",
    "tmColorDark": "#002A5C",
    "tmColorLite_rgba": "rgba(68, 149, 209, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 92, 0.2)",
    "tmTextLite": "#4495D1",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png",
    "headlineNews": "Titans' A.J. Brown: Limited on practice estimate",
    "report": "Brown (knee) was listed as limited on Wednesday's estimated practice report Jim Wyatt of the Titans' official site reports.With Corey Davis and Adam Humphries on the Titans' Reserve/COVID-19 list, Kalif Raymond and Nick Westbrook-Ikhine are the other wide receivers on the team's active roster in addition to Brown, who last suited up in Week 1. The Titans, whose Week 4 game against the Steelers was postponed, are currently scheduled to face the Bills on Sunday at 1:00 ET.",
    "analysis": "",
    "timestamp": "",
    "week01": 6.4,
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
    "week21": ""
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
                         data: [6.4, 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.6, 'DNP', 'DNP', 'DNP', 9.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 'DNP', 'DNP', 'DNP', 2.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.7, 'DNP', 'DNP', 'DNP', 17.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16737.png",
    "name": "Mike Evans",
    "depthchart": "Starter: WR-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 9.5,
    "opponent": "Chicago Bears",
    "home_away": "at ",
    "opp_rank_Neu": 9,
    "team_rank_Neu": 9,
    "avg_fp2": 15.38,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 21.62,
    "fanduelSalary": "$7500",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Ankle",
    "tmColorLite": "#D50A0A",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(213, 10, 10, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#D50A0A",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Buccaneers' Mike Evans: Status in question for Week 5",
    "report": "Evans (ankle) is listed as questionable for Thursday's contest at Chicago, Greg Auman of The Athletic reports.Evans was unable to practice this week, but he'll have a chance to suit up Thursday, unlike Chris Godwin (hamstring) and Justin Watson (chest). Assuming Evans is active, he'll be the primary pass-catching option for Tom Brady, while Scotty Miller (hip/groin) -- who also is questionable -- is the top option to fill in for Godwin in the slot.",
    "analysis": "",
    "timestamp": "",
    "week01": 6.7,
    "week02": 19.9,
    "week03": 13.2,
    "week04": 21.7,
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
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.7, 19.9, 13.2, 21.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.7, 18.0, 11.1, 7.8, 9.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.4, 5.4, 6.3, 7.0, 5.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(213, 10, 10, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.8, 22.8, 22.8, 22.3, 21.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3135321.png",
    "name": "Hunter Renfrow",
    "depthchart": "Reserve: WR-3",
    "team": "Las Vegas Raiders",
    "projected": 9.2,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Neg": 3,
    "team_rank_Neu": 13,
    "avg_fp2": 8.47,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 21.8,
    "fanduelSalary": "$5100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A5ACAF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lv.png",
    "headlineNews": "Raiders' Hunter Renfrow: Hauls in five passes",
    "report": "Renfrow caught five of eight targets for 57 yards in Sunday's 30-23 loss to the Bills.Aside from an acrobatic 37-yard reception down the sideline late in the contest, Renfrow was held in check despite the absences of fellow receivers Henry Ruggs (knee/hamstring) and Bryan Edwards (ankle). Nonetheless, quarterback Derek Carr has thrown a total of 17 passes at Renfrow throughout the Raiders' past two games, and the slot man could continue to see additional looks if the aforementioned rookie duo remains sidelined Week 5 at Kansas City.",
    "analysis": "",
    "timestamp": "",
    "week01": 3.1,
    "week02": 5.2,
    "week03": 17.4,
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
    "week21": ""
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
                         data: [3.1, 5.2, 17.4, 8.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.8, 3.9, 8.1, 12.6, 9.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.9, 2.1, 1.3, 2.2, 2.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.0, 13.9, 12.9, 14.2, 10.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3932905.png",
    "name": "Diontae Johnson",
    "depthchart": "Backup: WR-2",
    "team": "Pittsburgh Steelers",
    "projected": 9.0,
    "opponent": "Philadelphia Eagles",
    "home_away": "",
    "opp_rank_Neu": 17,
    "team_rank_Neu": 17,
    "avg_fp2": 8.93,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 29.77,
    "fanduelSalary": "$5800",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Toe",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/pit.png",
    "headlineNews": "Steelers' Diontae Johnson: Sits out Wednesday's practice",
    "report": "Johnson (toe) didn't practice Wednesday, Brooke Pryor of ESPN.com reports.Johnson has progressed out of the NFL's concussion protocol, but he continues to manages a toe issue that Pryor suggests is minor and one that hasn't kept the wideout out of any games. We'll circle back on Johnson's status Thursday, but it wouldn't surprise us to see him work fully as he did in advance of Week 3 action before approaching the Steelers' game against the Texans minus an injury designation. The team's scheduled Week 4 contest versus the Titans was postponed.",
    "analysis": "",
    "timestamp": "",
    "week01": 6.7,
    "week02": 19.2,
    "week03": 0.9,
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
    "week21": ""
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
                         data: [6.7, 19.2, 0.9, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.5, 10.5, 12.0, 'DNP', 9.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.0, 1.6, 6.7, 'DNP', 2.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.1, 12.4, 19.5, 'DNP', 14.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3895856.png",
    "name": "Christian Kirk",
    "depthchart": "Backup: WR-2",
    "team": "Arizona Cardinals",
    "projected": 8.8,
    "opponent": "New York Jets",
    "home_away": "at ",
    "opp_rank_Neu": 15,
    "team_rank_Neu": 23,
    "avg_fp2": 5.63,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 21.43,
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
    "headlineNews": "Cardinals' Christian Kirk: Three-yard touchdown",
    "report": "Kirk hauled in three passes on five targets for 19 yards and a touchdown in Week 4 against the Panthers.Kirk returned to the field after missing the team's Week 3 contest against Detroit. He managed to find the end zone for a three-yard score late in the third quarter. However, he was outgained by the likes of Dan Arnold and Chase Edmonds, though his performance was salvaged by the score. In three healthy games, Kirk has not surpassed five targets.",
    "analysis": "",
    "timestamp": "",
    "week01": 0.5,
    "week02": 7.0,
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
    "week21": ""
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
                         data: [0.5, 7.0, 'DNP', 9.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.7, 5.3, 'DNP', 8.9, 8.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.5, 3.1, 'DNP', 0.0, 2.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.1, 11.1, 'DNP', 18.9, 11.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2978109.png",
    "name": "Zach Pascal",
    "depthchart": "Backup: WR-2",
    "team": "Indianapolis Colts",
    "projected": 8.8,
    "opponent": "Cleveland Browns",
    "home_away": "at ",
    "opp_rank_Pos": 30,
    "team_rank_Neu": 18,
    "avg_fp2": 5.98,
    "opp_rank_allowed_fp2_Pos": 30,
    "opp_avg_allowed_fp2": 39.08,
    "fanduelSalary": "$5300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#014683",
    "tmColorDark": "#002C5F",
    "tmColorLite_rgba": "rgba(1, 70, 131, 0.2)",
    "tmColorDark_rgba": "rgba(0, 44, 95, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png",
    "headlineNews": "Colts' Zach Pascal: Leads team in receiving yards",
    "report": "Pascal recorded three receptions on eight targets for 58 yards in Week 4 against the Bears.Pascal worked as the Colts' deep threat -- he averaged 19.3 yards per reception -- but also led the team with eight targets. He accounted for Indy's longest gain of the day on a 36-yard reception during their first drive of the contest, helping set up a touchdown to cap the possession. With Parris Campbell (knee) and Michael Pittman (leg) both out, Pascal should continue to see plenty of targets as the team's number two receiver behind T.Y. Hilton. Pascal will have an exploitable matchup in Week 5 against a leaky Browns secondary.",
    "analysis": "",
    "timestamp": "",
    "week01": 2.8,
    "week02": 9.4,
    "week03": 4.4,
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
    "week21": ""
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
                         data: [2.8, 9.4, 4.4, 7.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [0.6, 7.5, 3.2, 4.3, 8.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 1.0, 0.0, 4.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.1, 12.8, 6.8, 12.5, 13.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2977187.png",
    "name": "Cooper Kupp",
    "depthchart": "Backup: WR-2",
    "team": "Los Angeles Rams",
    "projected": 8.7,
    "opponent": "Washington Football Team",
    "home_away": "at ",
    "opp_rank_Neg": 4,
    "team_rank_Neu": 14,
    "avg_fp2": 13.22,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 22.4,
    "fanduelSalary": "$7200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Rams' Cooper Kupp: Leading Rams receiver in win",
    "report": "Kupp caught five of seven targets for 69 yards and a touchdown in Sunday's 17-9 win over the Giants.Most of that production came on a 55-yard catch-and-run in the fourth quarter as Kupp split the Giants' secondary for the final score of the day, and Jared Goff's only completion of longer than 20 yards. Kupp has found the end zone in consecutive games, and he'll look to continue that streak in Week 5 against a Washington defense that just had trouble containing Marquise Brown.",
    "analysis": "",
    "timestamp": "",
    "week01": 6.0,
    "week02": 10.5,
    "week03": 21.2,
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
    "week21": ""
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
                         data: [6.0, 10.5, 21.2, 15.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.4, 9.3, 7.2, 7.0, 8.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.4, 3.2, 5.0, 5.7, 5.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.4, 20.9, 19.3, 20.1, 18.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4047839.png",
    "name": "N'Keal Harry",
    "depthchart": "Backup: WR-2",
    "team": "New England Patriots",
    "projected": 8.6,
    "opponent": "Denver Broncos",
    "home_away": "",
    "opp_rank_Neu": 21,
    "team_rank_Neg": 24,
    "avg_fp2": 7.45,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 35.73,
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
    "headlineNews": "Patriots' N'Keal Harry: Finds end zone in loss",
    "report": "Harry secured three of six targets for 21 yards and a touchdown in the Patriots' 26-10 loss to the Chiefs on Monday night.Harry tied fellow wideout Julian Edelman for third in receptions and targets on the night, but he had a better fantasy performance overall by virtue of his four-yard touchdown reception early in the fourth quarter on a connection with Jarrett Stidham. Harry now has back-to-back sub-40-yard tallies after a season-best 8-72 line in a Week 2 loss to the Seahawks, and he'll look to up his numbers across the board at the expense of the Broncos in a Week 5 home matchup.",
    "analysis": "",
    "timestamp": "",
    "week01": 4.4,
    "week02": 11.2,
    "week03": 4.6,
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
    "week21": ""
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
                         data: [4.4, 11.2, 4.6, 9.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.7, 8.3, 5.3, 8.3, 8.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.9, 1.7, 1.6, 3.0, 3.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.7, 6.0, 7.6, 7.3, 8.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3045144.png",
    "name": "Tyler Boyd",
    "depthchart": "Reserve: WR-3",
    "team": "Cincinnati Bengals",
    "projected": 8.3,
    "opponent": "Baltimore Ravens",
    "home_away": "at ",
    "opp_rank_Pos": 26,
    "team_rank_Neu": 16,
    "avg_fp2": 13.1,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 28.07,
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
    "headlineNews": "Bengals' Tyler Boyd: Leading receiver in win",
    "report": "Boyd caught seven of eight targets for 90 yards and added a four-yard rush in Sunday's 33-25 win over the Jaguars.Boyd had a would-be 16-yard touchdown nullified by a holding penalty in the first quarter, but he still delivered a nice performance, leading the team in targets, catches and receiving yards. After catching only four balls for 33 yards in Week 1, Boyd has exploded for 287 yards and a touchdown on 24 receptions over the past three games, coinciding with three consecutive 300-yard passing performances from rookie quarterback Joe Burrow. Boyd's the leading option in what has turned into a surprisingly high-octane passing attack heading into a Week 5 trip to Baltimore.",
    "analysis": "",
    "timestamp": "",
    "week01": 5.3,
    "week02": 16.7,
    "week03": 17.5,
    "week04": 12.9,
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
    "week21": ""
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
                         data: [5.3, 16.7, 17.5, 12.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.9, 5.1, 9.2, 7.3, 8.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.5, 2.6, 4.4, 3.9, 3.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.3, 16.9, 17.6, 19.1, 16.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4360438.png",
    "name": "Brandon Aiyuk",
    "depthchart": "Starter: WR-1",
    "team": "San Francisco 49ers",
    "projected": 7.9,
    "opponent": "Miami Dolphins",
    "home_away": "",
    "opp_rank_Pos": 28,
    "team_rank_Neu": 12,
    "avg_fp2": 11.43,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 34.05,
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
    "headlineNews": "49ers' Brandon Aiyuk: Flashes athleticism on TD run",
    "report": "Aiyuk had two receptions (five targets) for 18 yards, but did most of his damage on a 38-yard touchdown run in a loss to the Eagles on Sunday.Aiyuk remained in the starting lineup as Deebo Samuel (foot) was eased back into action. The dynamic rookie put his after-the-catch skills on display when he took a backwards pass behind the line of scrimmage and bounced off of two tackles before hurdling a diving defender and landing in the end zone. It was a highlight-reel play that flashed the potential Aiyuk has to rip off a big play at any moment. It is unclear if the Arizona State product will remain a starter against the Dolphins on Sunday now that the receiver he was replacing (Samuel) is back in the fold. Either way, Aiyuk proved that he doesn't need a ton of touches -- or receptions for that matter -- to make an impact on the scoreboard.",
    "analysis": "",
    "timestamp": "",
    "week01": "DNP",
    "week02": 3.1,
    "week03": 18.6,
    "week04": 12.6,
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
    "week21": ""
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
                         data: ['DNP', 3.1, 18.6, 12.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 8.2, 3.6, 8.6, 7.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 2.0, 0.0, 2.0, 5.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 9.4, 12.9, 15.6, 17.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14053.png",
    "name": "Randall Cobb",
    "depthchart": "Reserve: WR-3",
    "team": "Houston Texans",
    "projected": 7.9,
    "opponent": "Jacksonville Jaguars",
    "home_away": "",
    "opp_rank_Pos": 24,
    "team_rank_Neu": 15,
    "avg_fp2": 8.45,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 26.45,
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
    "headlineNews": "Texans' Randall Cobb: Five targets in loss",
    "report": "Cobb caught two of five targets for 36 yards in Sunday's 31-23 loss to the Vikings.Cobb finished second in targets behind Will Fuller in an offense that still hasn't found a groove in 2020. After a quiet opening week, Cobb is averaging five targets and 63 yards per game over the last three contests.",
    "analysis": "",
    "timestamp": "",
    "week01": 3.3,
    "week02": 8.4,
    "week03": 17.5,
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
    "week21": ""
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
                         data: [3.3, 8.4, 17.5, 4.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.2, 2.2, 5.2, 9.0, 7.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.1, 4.8, 3.6, 3.0, 4.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.5, 18.1, 17.3, 16.4, 17.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3057987.png",
    "name": "DaeSean Hamilton",
    "depthchart": "Backup: WR-2",
    "team": "Denver Broncos",
    "projected": 7.8,
    "opponent": "New England Patriots",
    "home_away": "at ",
    "opp_rank_Neu": 10,
    "team_rank_Neg": 25,
    "avg_fp2": 1.17,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 33.48,
    "fanduelSalary": "$4700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e17757",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(225, 119, 87, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#e17757",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/den.png",
    "headlineNews": "Broncos' DaeSean Hamilton: Shut out against Bucs",
    "report": "Hamilton did not garner a target during Sunday's 28-10 loss to Tampa Bay.Hamilton fielded 19 percent of the offensive snaps against the Buccaneers, but Diontae Spencer (one target) was the next-most involved receiver behind starters Jerry Jeudy, Tim Patrick and KJ Hamler. Even with Courtland Sutton (knee-ACL) unavailable for the rest of the season, it appears Hamilton may be no more than a peripheral contributor to the Broncos' passing game. He has six targets through the first three weeks of 2020, with Denver heading into a Thursday night matchup against the Jets.",
    "analysis": "",
    "timestamp": "",
    "week01": 2.3,
    "week02": 1.0,
    "week03": 0.0,
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
    "week21": ""
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
                         data: [2.3, 1.0, 0.0, 1.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.9, -1.2, 0.4, 0.4, 7.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.1, 1.2, 0.0, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(225, 119, 87, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.4, 10.3, 5.7, 6.5, 7.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4262921.png",
    "name": "Justin Jefferson",
    "depthchart": "Backup: WR-2",
    "team": "Minnesota Vikings",
    "projected": 7.8,
    "opponent": "Seattle Seahawks",
    "home_away": "at ",
    "opp_rank_Pos": 32,
    "team_rank_Neg": 28,
    "avg_fp2": 12.2,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 53.38,
    "fanduelSalary": "$5700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e0aa19",
    "tmColorDark": "#300e5a",
    "tmColorLite_rgba": "rgba(224, 170, 25, 0.2)",
    "tmColorDark_rgba": "rgba(48, 14, 90, 0.2)",
    "tmTextLite": "#e0aa19",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/min.png",
    "headlineNews": "Vikings' Justin Jefferson: Proves Week 3 is no fluke",
    "report": "Jefferson caught four of his five targets for 103 receiving yards during Sunday's 31-23 win against the Texans.After a quiet Weeks 1 and 2 in which he produced five combined receptions for 70 yards, Jefferson has exploded the past two weeks to the tune of 11 total receptions for 278 yards and a touchdown. Jefferson was dominant on contested catches during his final year at LSU (nation-leading 92.3 percent contested catch rate, according to Pro Football Focus), and so far this year he has remained very reliable in tighter NFL windows, corralling 16 of 20 balls thrown his way. Next up is a Sunday night showdown against a Seattle defense that has surrendered an astronomical 401.8 passing yards per game.",
    "analysis": "",
    "timestamp": "",
    "week01": 3.6,
    "week02": 5.9,
    "week03": 27.0,
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
    "week21": ""
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
                         data: [3.6, 5.9, 27.0, 12.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.8, 3.4, 7.7, 4.5, 7.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.2, 0.0, 0.2, 3.1, 2.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  "rgba(224, 170, 25, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.4, 13.5, 11.3, 13.4, 14.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2971718.png",
    "name": "Marcus Johnson",
    "depthchart": "Reserve: WR-3",
    "team": "Indianapolis Colts",
    "projected": 7.6,
    "opponent": "Cleveland Browns",
    "home_away": "at ",
    "opp_rank_Pos": 30,
    "team_rank_Neu": 18,
    "avg_fp2": 3.2,
    "opp_rank_allowed_fp2_Pos": 30,
    "opp_avg_allowed_fp2": 39.08,
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
    "headlineNews": "Marcus Johnson: Headed back to practice squad",
    "report": "Johnson reverted to the practice squad Monday, according to the NFL transaction log.Johnson had a sizeable role in the Colts' offensive gameplan in Week 4 against the Bears. He was on the field for 34 of the team's 72 snaps and also logged one catch for 27 yards. With both Parris Campbell (knee) and Michael Pittman (leg) both on injured reserve, Johnson could get another chance on the active roster if any more injuries occur among the Colts' receiving corps.",
    "analysis": "",
    "timestamp": "",
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
    "week21": ""
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
                         data: ['DNP', 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 7.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 0.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 11.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4243160.png",
    "name": "Laviska Shenault",
    "depthchart": "Reserve: WR-3",
    "team": "Jacksonville Jaguars",
    "projected": 7.5,
    "opponent": "Houston Texans",
    "home_away": "at ",
    "opp_rank_Neg": 5,
    "team_rank_Neu": 10,
    "avg_fp2": 9.6,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 28.3,
    "fanduelSalary": "$5300",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Hamstring",
    "tmColorLite": "#006778",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 103, 120, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#006778",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/jax.png",
    "headlineNews": "Jaguars' Laviska Shenault: Limited to begin week",
    "report": "Shenault (hamstring) was a limited participant in Wednesday's practice.Shenault appears to have picked up a hamstring injury during Week 4's loss to the Bengals, in which he notched a career-best 86 receiving yards while hauling in five of six targets.  Coach Doug Marrone said Wednesday that Shenault \"has a chance\" to suit up in Houston on Sunday, per Michael DiRocco of ESPN.com, so it looks as though a final decision on the rookie's availability could come down to what he's able to do in practice over the next two days.",
    "analysis": "",
    "timestamp": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": 11.6,
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
    "week21": ""
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
                         data: ['DNP', 'DNP', 'DNP', 11.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 5.0, 7.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 1.9, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 103, 120, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 9.5, 12.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4038818.png",
    "name": "Bryan Edwards",
    "depthchart": "Backup: WR-2",
    "team": "Las Vegas Raiders",
    "projected": 7.5,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Neg": 3,
    "team_rank_Neu": 13,
    "avg_fp2": 4.13,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 21.8,
    "fanduelSalary": "$4800",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Foot",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A5ACAF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lv.png",
    "headlineNews": "Raiders' Bryan Edwards: Unable to practice Wednesday",
    "report": "Edwards (foot/ankle) remained sidelined at Wednesday's practice, Vic Tafur of The Athletic reports.Edwards missed the Raiders' Week 4 loss to the Bills, and his absence from practice Wednesday doesn't bode especially well for his chances of suiting up Sunday against the Chiefs. On the plus side for the Raiders, fellow rookie wideout Henry Ruggs (knee/hamstring) practiced in a limited fashion Wednesday.",
    "analysis": "",
    "timestamp": "",
    "week01": 1.4,
    "week02": 5.2,
    "week03": 5.8,
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
    "week21": ""
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
                         data: [1.4, 5.2, 5.8, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.1, 5.0, 6.2, 'DNP', 7.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.9, 0.0, 0.0, 'DNP', 2.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.9, 10.1, 10.3, 'DNP', 8.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4241372.png",
    "name": "Marquise Brown",
    "depthchart": "Starter: WR-1",
    "team": "Baltimore Ravens",
    "projected": 7.4,
    "opponent": "Cincinnati Bengals",
    "home_away": "",
    "opp_rank_Neu": 16,
    "team_rank_Neg": 31,
    "avg_fp2": 8.05,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 29.43,
    "fanduelSalary": "$6100",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Knee",
    "tmColorLite": "#9E7C0C",
    "tmColorDark": "#241773",
    "tmColorLite_rgba": "rgba(158, 124, 12, 0.2)",
    "tmColorDark_rgba": "rgba(36, 23, 115, 0.2)",
    "tmTextLite": "#9E7C0C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png",
    "headlineNews": "Ravens' Marquise Brown: On injury report with knee",
    "report": "Brown (knee) was a limited participant in Wednesday's practice.This is the first we're hearing of a knee injury for the speedster, though you shouldn't panic yet, as it's possible this is just a routine day off. Brown showed no signs of injury in last week's win over Washington, hauling in four balls for 86 yards to bounce back from consecutive down weeks during which he combined for 55 yards on seven catches. The wide receiver's practice participation should be worth monitoring as his team prepares to host the Bengals on Sunday.",
    "analysis": "",
    "timestamp": "",
    "week01": 12.6,
    "week02": 6.7,
    "week03": 2.3,
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
    "week21": ""
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
                         data: [12.6, 6.7, 2.3, 10.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.1, 15.7, 11.8, 7.1, 7.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.7, 2.6, 10.0, 1.8, 4.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.8, 18.3, 20.8, 18.2, 19.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4241463.png",
    "name": "Jerry Jeudy",
    "depthchart": "Reserve: WR-3",
    "team": "Denver Broncos",
    "projected": 7.4,
    "opponent": "New England Patriots",
    "home_away": "at ",
    "opp_rank_Neu": 10,
    "team_rank_Neg": 25,
    "avg_fp2": 9.22,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 33.48,
    "fanduelSalary": "$5500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e17757",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(225, 119, 87, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#e17757",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/den.png",
    "headlineNews": "Broncos' Jerry Jeudy: Makes good use of opportunities",
    "report": "Jeudy secured two of four targets for 64 yards and a touchdown in the Broncos' 37-28 win over the Jets on Thursday.The rookie looked like he might be on his way to a big night early, as he recorded a 48-yard touchdown grab, the first of his NFL career, early in the second quarter. While Jeudy went on to finish with a modest line overall, the first-round pick demonstrated his elite physical skills by scaling over cornerback Pierre Desir to simultaneously prevent an interception, make a difficult catch, and walk into the end zone. Jeudy has arguably been held down some by shaky quarterback play thus far this season, but he'll head into a Week 5 road battle versus the Patriots with a decent 15-237-1 line over his first four games.",
    "analysis": "",
    "timestamp": "",
    "week01": 7.6,
    "week02": 8.2,
    "week03": 8.0,
    "week04": 13.1,
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
    "week21": ""
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
                         data: [7.6, 8.2, 8.0, 13.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.6, 7.4, 10.1, 11.4, 7.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.9, 3.8, 7.3, 5.4, 0.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(225, 119, 87, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.2, 12.3, 13.2, 16.3, 10.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16804.png",
    "name": "John Brown",
    "depthchart": "Backup: WR-2",
    "team": "Buffalo Bills",
    "projected": 7.4,
    "opponent": "Tennessee Titans",
    "home_away": "at ",
    "opp_rank_Neu": 23,
    "team_rank_Pos": 2,
    "avg_fp2": 9.6,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 30.27,
    "fanduelSalary": "$5800",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Calf",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#005596",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 85, 150, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
    "headlineNews": "Bills' John Brown: Calf injury still an issue",
    "report": "Brown missed Wednesday's practice session due to a calf issue, Maddy Glab of the Bills' official site reports.Brown was forced out of the Week 3 contest with a calf injury, but he upramped his practice last week and played the whole game against the Raiders, narrowly missing a score. While the complete absence isn't great news, it's possible coach Sean McDermott is just resting his veteran receiver as the coach is apt to do with certain experienced players each Wednesday. We'll check back in on Brown on Thursday.",
    "analysis": "",
    "timestamp": "",
    "week01": 16.0,
    "week02": 16.2,
    "week03": 0.0,
    "week04": 6.2,
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
    "week21": ""
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
                         data: [16.0, 16.2, 0.0, 6.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.7, 9.7, 7.2, 10.8, 7.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.0, 3.6, 3.6, 3.6, 3.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.3, 14.7, 15.2, 17.6, 15.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3045523.png",
    "name": "Kendrick Bourne",
    "depthchart": "Backup: WR-2",
    "team": "San Francisco 49ers",
    "projected": 7.2,
    "opponent": "Miami Dolphins",
    "home_away": "",
    "opp_rank_Pos": 28,
    "team_rank_Neu": 12,
    "avg_fp2": 6.55,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 34.05,
    "fanduelSalary": "$5200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "49ers' Kendrick Bourne: Posts 33 yards in loss",
    "report": "Bourne had three receptions (six targets) for 33 yards in Sunday's 25-20 loss to the Eagles.Bourne's six targets actually led all San Francisco wideouts, but  in true Kyle Shanahan style, a running back and tight end surpassed his target share. The veteran wideout has had a steady floor through four games, but the lack of touchdowns has hurt the potential for fantasy value. The return of Deebo Samuel (foot) and the emergence of rookie Brandon Aiyuk could end up cutting into Bourne's production going forward.",
    "analysis": "",
    "timestamp": "",
    "week01": 4.4,
    "week02": 8.7,
    "week03": 8.3,
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
    "week21": ""
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
                         data: [4.4, 8.7, 8.3, 4.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.7, 14.9, 8.0, 12.3, 7.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.4, 1.7, 1.5, 1.0, 0.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.3, 8.3, 8.9, 9.5, 9.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16725.png",
    "name": "Sammy Watkins",
    "depthchart": "Backup: WR-2",
    "team": "Kansas City Chiefs",
    "projected": 7.2,
    "opponent": "Las Vegas Raiders",
    "home_away": "",
    "opp_rank_Neu": 20,
    "team_rank_Pos": 6,
    "avg_fp2": 8.4,
    "opp_rank_allowed_fp2_Neu": 14,
    "opp_avg_allowed_fp2": 28.5,
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
    "headlineNews": "Chiefs' Sammy Watkins: Fumbles in win",
    "report": "Watkins caught four of seven targets for 43 yards but lost a fumble in Monday night's 26-10 win over the Patriots.Watkins led the Chiefs in targets and tied for tops in receptions, but his fumble from scoring position hurt Kansas City to start the second quarter. Although Watkins produced mild totals Monday, he's now garnered at least seven targets in three of four games, giving him solid usage in arguably the league's most explosive offense. That role sets a decent floor for him ahead of Week 5's game versus the Raiders, but Watkins will want to avoid coughing the ball up again.",
    "analysis": "",
    "timestamp": "",
    "week01": 18.0,
    "week02": 1.6,
    "week03": 9.7,
    "week04": 4.3,
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
    "week21": ""
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
                         data: [18.0, 1.6, 9.7, 4.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.9, 7.6, 7.8, 9.6, 7.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.5, 4.1, 4.6, 3.8, 3.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.2, 21.1, 20.1, 18.8, 18.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13295.png",
    "name": "Emmanuel Sanders",
    "depthchart": "Reserve: WR-3",
    "team": "New Orleans Saints",
    "projected": 7.1,
    "opponent": "Los Angeles Chargers",
    "home_away": "",
    "opp_rank_Pos": 25,
    "team_rank_Neu": 17,
    "avg_fp2": 9.3,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 29.23,
    "fanduelSalary": "$5800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9b845c",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(155, 132, 92, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#9b845c",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
    "headlineNews": "Saints' Emmanuel Sanders: Just shy of 100 yards in win",
    "report": "Sanders caught six of nine targets for 93 yards in Sunday's 35-29 win over the Lions.Sanders led the Saints in targets, catches and receiving yards, but Tre'Quan Smith scored both of the team's touchdowns through the air, while Latavius Murray and Alvin Kamara combined for three scores on the ground. The veteran wide receiver has seen his yardage total climb in each of his first four games with the Saints, but keeping that trend going won't be easy against the Chargers in Week 5, especially if Michael Thomas (ankle) returns and reclaims his spot atop New Orleans' receiving pecking order.",
    "analysis": "",
    "timestamp": "",
    "week01": 9.0,
    "week02": 2.3,
    "week03": 13.6,
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
    "week21": ""
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
                         data: [9.0, 2.3, 13.6, 12.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.5, 13.0, 5.2, 7.7, 7.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [12.9, 2.8, 2.2, 2.6, 1.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(155, 132, 92, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.9, 18.0, 15.4, 14.5, 15.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2576716.png",
    "name": "Jamison Crowder",
    "depthchart": "Reserve: WR-3",
    "team": "New York Jets",
    "projected": 6.8,
    "opponent": "Arizona Cardinals",
    "home_away": "",
    "opp_rank_Neu": 14,
    "team_rank_Neg": 32,
    "avg_fp2": 17.45,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 22.15,
    "fanduelSalary": "$6300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#125740",
    "tmColorDark": "#003f2d",
    "tmColorLite_rgba": "rgba(18, 87, 64, 0.2)",
    "tmColorDark_rgba": "rgba(0, 63, 45, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png",
    "headlineNews": "Jets' Jamison Crowder: Big game in return",
    "report": "Crowder (hamstring) secured seven of 10 targets for 104 yards in the Jets' 37-28 loss to the Broncos on Thursday.Crowder made an immediate impact upon his return to action from a two-game absence, co-leading the Jets in receptions while pacing the team in receiving yards and targets. The one blemish on the veteran's night was that he couldn't get into the end zone, but his chemistry with quarterback Sam Darnold was otherwise on full display. With Crowder seemingly back at full health, he and Darnold will look to connect even more frequently in a Week 5 home matchup against the Cardinals on Sunday, Oct. 11.",
    "analysis": "",
    "timestamp": "",
    "week01": 21.0,
    "week02": "DNP",
    "week03": "DNP",
    "week04": 13.9,
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
    "week21": ""
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
                         data: [21.0, 'DNP', 'DNP', 13.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.4, 'DNP', 'DNP', 10.0, 6.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.2, 'DNP', 'DNP', 2.4, 3.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  "rgba(18, 87, 64, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.5, 'DNP', 'DNP', 14.9, 15.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/11283.png",
    "name": "DeSean Jackson",
    "depthchart": "Backup: WR-2",
    "team": "Philadelphia Eagles",
    "projected": 6.7,
    "opponent": "Pittsburgh Steelers",
    "home_away": "at ",
    "opp_rank_Neu": 12,
    "team_rank_Neg": 27,
    "avg_fp2": 5.7,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 32.37,
    "fanduelSalary": "$5500",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Hamstring",
    "tmColorLite": "#386168",
    "tmColorDark": "#004C54",
    "tmColorLite_rgba": "rgba(56, 97, 104, 0.2)",
    "tmColorDark_rgba": "rgba(0, 76, 84, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    "headlineNews": "Eagles' DeSean Jackson: Returns with limited practice",
    "report": "Jackson (hamstring) practiced in a limited capacity Wednesday.Earlier Wednesday, coach Doug Pederson said Jackson was slated to take part in individual drills, which has come to pass. Pederson also noted Jackson is \"getting closer\" to a return from his hamstring injury, but the Eagles want him to be 100 percent before clearing him for game action, per EJ Smith of The Philadelphia Inquirer. Consequently, Jackson's status will be one to monitor as the week goes on.",
    "analysis": "",
    "timestamp": "",
    "week01": 5.6,
    "week02": 9.4,
    "week03": 2.1,
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
    "week21": ""
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
                         data: [5.6, 9.4, 2.1, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.7, 9.5, 9.6, 'DNP', 6.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.8, 5.0, 4.6, 'DNP', 3.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.7, 19.4, 18.5, 'DNP', 18.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3071572.png",
    "name": "Keelan Cole",
    "depthchart": "Backup: WR-2",
    "team": "Jacksonville Jaguars",
    "projected": 6.6,
    "opponent": "Houston Texans",
    "home_away": "at ",
    "opp_rank_Neg": 5,
    "team_rank_Neu": 10,
    "avg_fp2": 10.22,
    "opp_rank_allowed_fp2_Neu": 13,
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
    "headlineNews": "Jaguars' Keelan Cole: Moderate production continues",
    "report": "Cole caught four of five targets for 46 yards during Sunday's 33-25 loss to the Bengals.The 27-year-old has surprisingly been a model of consistency through four games, totaling at least four receptions and 40-plus yards in each contest. However, his season-high marks of six catches and 58 yards offers a fairly limited ceiling if he doesn't reach the end zone. Cole's snap share pegs him as Jacksonville's No. 2 wide receiver, but rookie Laviska Shenault has been the more explosive option in the offense behind top wideout DJ Chark.",
    "analysis": "",
    "timestamp": "",
    "week01": 13.2,
    "week02": 14.8,
    "week03": 6.3,
    "week04": 6.6,
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
    "week21": ""
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
                         data: [13.2, 14.8, 6.3, 6.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [-0.5, 5.9, 8.4, 5.7, 6.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 1.2, 3.8, 1.2, 0.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 103, 120, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.2, 11.6, 12.6, 11.2, 11.6]
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
    "opponent": "New York Giants",
    "home_away": "",
    "opp_rank_Neg": 6,
    "team_rank_Pos": 1,
    "avg_fp2": 10.0,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 31.07,
    "fanduelSalary": "$5700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#7F9695",
    "tmColorDark": "#041E42",
    "tmColorLite_rgba": "rgba(127, 150, 149, 0.2)",
    "tmColorDark_rgba": "rgba(4, 30, 66, 0.2)",
    "tmTextLite": "#7F9695",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
    "headlineNews": "Cowboys' Michael Gallup: Disappears in shootout loss",
    "report": "Gallup caught two of five targets for 29 yards in Sunday's 49-38 loss to the Browns.While it's not a surprise to see Amari Cooper (12-134-1 on 16 targets) or first-round pick CeeDee Lamb (5-79-2 on seven targets) get more looks from Dak Prescott in any particular game, Gallup even found himself with fewer targets than Cedrick Wilson and fewer catches than Noah Brown in another disappointing performance. As long as Prescott is forced to attempt 50-plus passes per game, however, there will be plenty of opportunities for Gallup to shake off his slow start to the season.",
    "analysis": "",
    "timestamp": "",
    "week01": 6.5,
    "week02": 6.8,
    "week03": 22.8,
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
    "week21": ""
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
                         data: [6.5, 6.8, 22.8, 3.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.6, 8.7, 10.1, 6.3, 6.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.5, 4.5, 1.6, 2.6, 4.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  "rgba(127, 150, 149, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.8, 12.9, 15.9, 11.8, 15.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/5528.png",
    "name": "Larry Fitzgerald",
    "depthchart": "Reserve: WR-3",
    "team": "Arizona Cardinals",
    "projected": 6.3,
    "opponent": "New York Jets",
    "home_away": "at ",
    "opp_rank_Neu": 15,
    "team_rank_Neu": 23,
    "avg_fp2": 3.95,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 21.43,
    "fanduelSalary": "$4900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#97233F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(151, 35, 63, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#97233F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
    "headlineNews": "Cardinals' Larry Fitzgerald: Held to four yards",
    "report": "Fitzgerald recorded two receptions on three targets for four yards in Week 4 against the Panthers.With both DeAndre Hopkins (ankle) and Christian Kirk (groin) healthy enough to go in Week 4, Fitzgerald faded in the Cardinals' offensive gameplan. After earning 12 targets in the the first two contests, Ftizgerald now has only three targets in each of the team's past two games. If Fitzgerald is going to bounce back at any point this season, he'll be in a good position to do so in Week 5 against the Jets.",
    "analysis": "",
    "timestamp": "",
    "week01": 5.4,
    "week02": 8.5,
    "week03": 0.5,
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
    "week21": ""
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
                         data: [5.4, 8.5, 0.5, 1.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.9, 5.1, 8.6, 4.9, 6.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.6, 3.8, 5.5, 2.8, 4.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.0, 18.1, 19.3, 14.8, 18.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3915399.png",
    "name": "Preston Williams",
    "depthchart": "Backup: WR-2",
    "team": "Miami Dolphins",
    "projected": 6.2,
    "opponent": "San Francisco 49ers",
    "home_away": "at ",
    "opp_rank_Neg": 2,
    "team_rank_Neu": 20,
    "avg_fp2": 5.47,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 24.1,
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
    "headlineNews": "Dolphins' Preston Williams: To be more involved in offense",
    "report": "Offensive coordinator Chan Gailey said Tuesday that the Dolphins are trying to get Williams more involved in the passing game, Hal Habib of The Palm Beach Post reports. \"We're hoping to continue to work with him to get him some catches. We know he can be a weapon, we know he should be a weapon ... we need him to,\" Gailey said.Williams has been an afterthought in the Dolphins offense through four weeks, ranking fifth on the team in target share behind even running back Myles Gaskin. He has not caught more than two passes in any game this season and his catch rate checks in at just 35 percent. The Dolphins will try to up his involvement in the offense, though part of that will depend on Williams creating separation and presenting a viable target for the quarterback.",
    "analysis": "",
    "timestamp": "",
    "week01": 5.1,
    "week02": 5.1,
    "week03": 7.7,
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
    "week21": ""
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
                         data: [5.1, 5.1, 7.7, 4.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.7, 11.3, 9.2, 13.6, 6.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.9, 4.8, 5.1, 4.7, 3.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 142, 151, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.9, 15.5, 15.0, 15.9, 13.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2574808.png",
    "name": "Robby Anderson",
    "depthchart": "Backup: WR-2",
    "team": "Carolina Panthers",
    "projected": 6.1,
    "opponent": "Atlanta Falcons",
    "home_away": "at ",
    "opp_rank_Pos": 31,
    "team_rank_Neu": 8,
    "avg_fp2": 14.45,
    "opp_rank_allowed_fp2_Pos": 24,
    "opp_avg_allowed_fp2": 32.88,
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
    "headlineNews": "Panthers' Robby Anderson: Team's top target against Cards",
    "report": "Anderson hauled in eight of 11 targets for 99 receiving yards during Sunday's 31-21 win against the Cardinals.Anderson continues to produce like a Pro Bowl receiver for his former college coach Matt Rhule, as the Temple product has already accumulated 28 receptions for 377 yards and a touchdown through the first quarter of Carolina's regular-season slate. The argument can be made that he is the top WR option (if not co-WR1) for the new-look Panthers, as Anderson has out-targeted D.J. Moore 34-32 through four weeks. It's all systems go for Anderson heading into Week 5, when he'll face a Falcons defense that is currently dealing with injuries to Keanu Neal (hamstring), Ricardo Allen (elbow) and Darqueze Dennard (hamstring).",
    "analysis": "",
    "timestamp": "",
    "week01": 22.5,
    "week02": 13.4,
    "week03": 8.0,
    "week04": 13.9,
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
    "week21": ""
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
                         data: [22.5, 13.4, 8.0, 13.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.6, 7.9, 8.1, 6.3, 6.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.3, 2.8, 1.6, 2.6, 4.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 133, 202, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.6, 16.3, 15.3, 22.2, 14.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3045138.png",
    "name": "Mike Williams",
    "depthchart": "Backup: WR-2",
    "team": "Los Angeles Chargers",
    "projected": 6.1,
    "opponent": "New Orleans Saints",
    "home_away": "at ",
    "opp_rank_Neu": 13,
    "team_rank_Neu": 7,
    "avg_fp2": 4.5,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 24.38,
    "fanduelSalary": "$5600",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Hamstring",
    "tmColorLite": "#0080C6",
    "tmColorDark": "#002A5E",
    "tmColorLite_rgba": "rgba(0, 128, 198, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 94, 0.2)",
    "tmTextLite": "#0080C6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lac.png",
    "headlineNews": "Chargers' Mike Williams: Won't play Week 4",
    "report": "Williams (hamstring) has been ruled out for Sunday's contest in Tampa Bay.Williams didn't play much during the second half of the Chargers' Week 3 loss to the Panthers. Late in the contest, he was deemed questionable to return due to a hamstring injury, an issue that kept him off the practice field this week. As such, it's no surprise Williams won't suit up Sunday. Look for Jalen Guyton to receive most of the reps at outside receiver as long as Williams is sidelined.",
    "analysis": "",
    "timestamp": "",
    "week01": 8.9,
    "week02": 2.4,
    "week03": 2.2,
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
    "week21": ""
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
                         data: [8.9, 2.4, 2.2, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.3, 6.9, 5.6, 'DNP', 6.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.0, 1.7, 0.6, 'DNP', 1.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 128, 198, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.7, 12.7, 11.1, 'DNP', 12.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/17258.png",
    "name": "Willie Snead",
    "depthchart": "Backup: WR-2",
    "team": "Baltimore Ravens",
    "projected": 6.0,
    "opponent": "Cincinnati Bengals",
    "home_away": "",
    "opp_rank_Neu": 16,
    "team_rank_Neg": 31,
    "avg_fp2": 5.67,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 29.43,
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
    "headlineNews": "Ravens' Willie Snead: Efficient on low target volume",
    "report": "Snead caught both of his targets for 20 yards against the Football Team.The veteran slot receiver has caught all 10 of his targets this season for 117 yards and a touchdown. While that's great efficiency, it also shows that Snead isn't drawing targets at a high rate (2.5 Tar/Game). He hasn't seen more than two targets in any game since the season opener, and he hasn't scored since then, either. Snead is a low-volume slot receiver in this offense. He will face the Bengals on Sunday.",
    "analysis": "",
    "timestamp": "",
    "week01": 14.4,
    "week02": 3.9,
    "week03": 1.4,
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
    "week21": ""
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
                         data: [14.4, 3.9, 1.4, 3.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.6, 7.8, 5.7, 0.6, 6.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.1, 0.4, 0.0, 3.6, 1.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.0, 10.0, 9.2, 11.5, 14.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3126486.png",
    "name": "Deebo Samuel",
    "depthchart": "Reserve: WR-3",
    "team": "San Francisco 49ers",
    "projected": 6.0,
    "opponent": "Miami Dolphins",
    "home_away": "",
    "opp_rank_Pos": 28,
    "team_rank_Neu": 12,
    "avg_fp2": 6.0,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 34.05,
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
    "headlineNews": "49ers' Deebo Samuel: Limited role in loss",
    "report": "Samuel (foot) caught all three of his targets for 35 yards and added 10 yards on one carry in Sunday's 25-20 loss to the Eagles.Samuel was activated off injured reserve prior to Sunday's contest after undergoing offseason surgery on his injured foot. The 24-year-old was eased back into action in a limited role, but still produced numbers similar to his pre-injury performance, at least on a per-snap basis. Expect Samuel's workload to increase next week against the Dolphins as the wideout inches toward being back to full strength.",
    "analysis": "",
    "timestamp": "",
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
    "week21": ""
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
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 6.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 3.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 15.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4035004.png",
    "name": "Mecole Hardman",
    "depthchart": "Reserve: WR-3",
    "team": "Kansas City Chiefs",
    "projected": 5.8,
    "opponent": "Las Vegas Raiders",
    "home_away": "",
    "opp_rank_Neu": 20,
    "team_rank_Pos": 6,
    "avg_fp2": 8.55,
    "opp_rank_allowed_fp2_Neu": 14,
    "opp_avg_allowed_fp2": 28.5,
    "fanduelSalary": "$5100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Chiefs' Mecole Hardman: Scores in second straight",
    "report": "Hardman caught all four of his targets for 27 yards and a touchdown in Monday night's 26-10 win over the Patriots.Hardman's key contribution came on a six-yard shovel pass that he took for a touchdown midway through the fourth quarter. That play not only extended Kansas City's lead at a critical juncture, but it also gave Hardman a touchdown in consecutive outings. Given all the mouths to feed in the Chiefs' high-flying offense, it's tough to project Hardman's weekly production, but the jet-heeled wideout can certainly make impact plays when called upon, as seen on Monday's short score.",
    "analysis": "",
    "timestamp": "",
    "week01": 1.1,
    "week02": 6.3,
    "week03": 16.1,
    "week04": 10.7,
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
    "week21": ""
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
                         data: [1.1, 6.3, 16.1, 10.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.7, -2.5, 3.6, 4.6, 5.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 6.2, 0.0, 0.0, 0.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.5, 14.9, 11.4, 8.9, 11.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14402.png",
    "name": "Chris Hogan",
    "depthchart": "Starter: WR-1",
    "team": "New York Jets",
    "projected": 5.7,
    "opponent": "Arizona Cardinals",
    "home_away": "",
    "opp_rank_Neu": 14,
    "team_rank_Neg": 32,
    "avg_fp2": 3.83,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 22.15,
    "fanduelSalary": "$5100",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Ribs",
    "tmColorLite": "#125740",
    "tmColorDark": "#003f2d",
    "tmColorLite_rgba": "rgba(18, 87, 64, 0.2)",
    "tmColorDark_rgba": "rgba(0, 63, 45, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png",
    "headlineNews": "Jets' Chris Hogan: On injury report as usual",
    "report": "Hogan (ribs/knee) was a limited participant in Wednesday's practice, Rich Cimini of ESPN.com reports.Hogan's name has been a staple on the injury report since he hurt his ribs in Week 2, but he hasn't had to miss any additional game action since then. The veteran wide receiver is more likely than not to suit up against the Cardinals come Sunday, but his already limited value is slated to take another hit with backup quarterback Joe Flacco under center rather than Sam Darnold (shoulder).",
    "analysis": "",
    "timestamp": "",
    "week01": 0.5,
    "week02": 10.5,
    "week03": 0.0,
    "week04": 4.3,
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
    "week21": ""
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
                         data: [0.5, 10.5, 0.0, 4.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.9, 2.6, 3.1, 8.3, 5.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.1, 0.0, 0.2, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  "rgba(18, 87, 64, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.5, 9.6, 13.1, 12.4, 12.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3914397.png",
    "name": "Scotty Miller",
    "depthchart": "Backup: WR-2",
    "team": "Tampa Bay Buccaneers",
    "projected": 5.7,
    "opponent": "Chicago Bears",
    "home_away": "at ",
    "opp_rank_Neu": 9,
    "team_rank_Neu": 9,
    "avg_fp2": 9.8,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 21.62,
    "fanduelSalary": "$5300",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Hip",
    "tmColorLite": "#D50A0A",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(213, 10, 10, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#D50A0A",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Buccaneers' Scotty Miller: Questionable for Thursday",
    "report": "Miller (hip/groin) is listed as questionable for Thursday's game at Chicago, Greg Auman of The Athletic reports.Among the Buccaneers' top four wide receivers, Miller was the only one not have DNPs next to his name on every injury report this week (he was LP on Wednesday's report). The team ruled out Chris Godwin (hamstring) and Justin Watson (chest), while Mike Evans (ankle) also is questionable, so Miller is poised for another significant workload Thursday, assuming he's active. Over the last two games, Miller combined for eight catches (on 12 targets) for 166 yards and one touchdown.",
    "analysis": "",
    "timestamp": "",
    "week01": 10.4,
    "week02": 2.2,
    "week03": 9.8,
    "week04": 16.8,
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
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.4, 2.2, 9.8, 16.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.5, 7.8, 1.6, 5.1, 5.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.3, 0.5, 0.5, 0.0, 1.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(213, 10, 10, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [7.8, 9.2, 9.7, 10.1, 11.7]
                    }
                    
                    ]
               }
            }];



$scope.positionTE = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3040151.png",
    "name": "George Kittle",
    "depthchart": "Starter: TE-1",
    "team": "San Francisco 49ers",
    "projected": 16.3,
    "opponent": "Miami Dolphins",
    "home_away": "",
    "opp_rank_Pos": 28,
    "team_rank_Neu": 12,
    "avg_fp2": 19.95,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 5.08,
    "fanduelSalary": "$7100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "49ers' George Kittle: Returns with monster performance",
    "report": "Kittle hauled in all 15 of his targets for 183 yards and a touchdown in Sunday's 25-20 loss to the Eagles.Kittle was sidelined for two weeks after spraining his knee in a season-opening loss to the Cardinals. The 49ers did not place any limitations on the star tight end in his first game back, allowing him to rack up career highs in receptions and yards. Kittle also chipped in eight yards on an end-around, his second rushing attempt in as many games this season. Any designed runs are just gravy on top of elite receiving production. The 26-year-old remained the focal point of the passing attack even after fellow Iowa product C.J. Beathard took over in the second half, so Kittle remains a strong play whether Jimmy Garoppolo (ankle), Nick Mullens or Beathard starts against the Dolphins on Sunday.",
    "analysis": "",
    "timestamp": "",
    "week01": 7.3,
    "week02": "DNP",
    "week03": "DNP",
    "week04": 32.6,
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
    "week21": ""
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
                         data: [7.3, 'DNP', 'DNP', 32.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.0, 'DNP', 'DNP', 15.1, 16.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.0, 'DNP', 'DNP', 3.1, 8.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.8, 'DNP', 'DNP', 18.1, 18.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15847.png",
    "name": "Travis Kelce",
    "depthchart": "Starter: TE-1",
    "team": "Kansas City Chiefs",
    "projected": 14.8,
    "opponent": "Las Vegas Raiders",
    "home_away": "",
    "opp_rank_Neu": 20,
    "team_rank_Pos": 6,
    "avg_fp2": 13.43,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 5.38,
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
    "headlineNews": "Chiefs' Travis Kelce: Tops team in receiving",
    "report": "Kelce caught three of six targets for 70 yards in Monday night's 26-10 win over the Patriots.Kelce again led Kansas City in receiving yards, with the bulk of his total coming on a 45-yard grab during the second half. That play was the Chiefs' longest of the game and helped compensate for Kelce posting a season low in catches. Nonetheless, with at least 70 yards and/or a touchdown in all four outings this season, Kelce is in fine form ahead of Week 5's game against the Raiders.",
    "analysis": "",
    "timestamp": "",
    "week01": 14.0,
    "week02": 19.5,
    "week03": 11.7,
    "week04": 8.5,
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
    "week21": ""
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
                         data: [14.0, 19.5, 11.7, 8.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.9, 10.8, 16.9, 11.5, 14.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.0, 5.3, 5.2, 6.5, 11.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.2, 18.9, 19.7, 20.3, 25.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3046439.png",
    "name": "Hunter Henry",
    "depthchart": "Starter: TE-1",
    "team": "Los Angeles Chargers",
    "projected": 13.7,
    "opponent": "New Orleans Saints",
    "home_away": "at ",
    "opp_rank_Neu": 13,
    "team_rank_Neu": 7,
    "avg_fp2": 8.38,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 20.2,
    "fanduelSalary": "$6000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0080C6",
    "tmColorDark": "#002A5E",
    "tmColorLite_rgba": "rgba(0, 128, 198, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 94, 0.2)",
    "tmTextLite": "#0080C6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lac.png",
    "headlineNews": "Chargers' Hunter Henry: Little action Week 4",
    "report": "Henry brought in two of three targets for 39 yards in the Chargers' 38-31 loss to the Buccaneers on Sunday.Henry struggled compared to last week against the Panthers, seeing just three targets compared to seven against Carolina, though he did accumulate the second most out of the team's receivers. Keenan Allen continued to siphon the majority of the team's targets, receiving 12 compared to Henry's three. Things could change next week against the Saints, who allowed the second most fantasy points to tight ends thus far. It's also possible Henry could see a bit more work in the red zone if Mike Williams (hamstring) is unable to play again.",
    "analysis": "",
    "timestamp": "",
    "week01": 9.8,
    "week02": 11.3,
    "week03": 7.5,
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
    "week21": ""
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
                         data: [9.8, 11.3, 7.5, 4.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.6, 15.6, 8.7, 10.1, 13.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.8, 5.7, 3.3, 3.7, 3.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 128, 198, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.7, 13.6, 14.6, 12.2, 13.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16732.png",
    "name": "Eric Ebron",
    "depthchart": "Starter: TE-1",
    "team": "Pittsburgh Steelers",
    "projected": 13.3,
    "opponent": "Philadelphia Eagles",
    "home_away": "",
    "opp_rank_Neu": 17,
    "team_rank_Neu": 17,
    "avg_fp2": 7.27,
    "opp_rank_allowed_fp2_Pos": 30,
    "opp_avg_allowed_fp2": 17.7,
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
    "headlineNews": "Steelers' Eric Ebron: Finds end zone",
    "report": "Ebron caught four of six targets for 38 yards and a touchdown during Sunday's 28-21 win over the Texans.Ebron finished second on the team in targets and provided one of the highlights of the day with a 10-yard touchdown catch over a defender in the second quarter. He received another look in the red zone and seemed to step up, especially after Diontae Johnson (concussion) left the game. Ebron reportedly connected well with Ben Roethlisberger during training camp and will now look to build on his best performance of the young season next Sunday against the Titans.",
    "analysis": "",
    "timestamp": "",
    "week01": 2.3,
    "week02": 5.8,
    "week03": 13.7,
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
    "week21": ""
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
                         data: [2.3, 5.8, 13.7, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.8, 8.9, 7.2, 'DNP', 13.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 2.4, 3.3, 'DNP', 2.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.5, 13.7, 13.9, 'DNP', 12.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3051876.png",
    "name": "Evan Engram",
    "depthchart": "Starter: TE-1",
    "team": "New York Giants",
    "projected": 13.2,
    "opponent": "Dallas Cowboys",
    "home_away": "at ",
    "opp_rank_Neu": 23,
    "team_rank_Neg": 29,
    "avg_fp2": 5.4,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 15.18,
    "fanduelSalary": "$5500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#0B2265",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(11, 34, 101, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png",
    "headlineNews": "Giants' Evan Engram: Does little with big volume",
    "report": "Engram caught six of 10 targets for 35 yards in Sunday's 17-9 loss to the Rams.He led the Giants in targets on the afternoon as Daniel Jones was forced to get rid of the ball quickly, but Engram wasn't able to do much with the volume. The fourth-year tight end has only 131 receiving yards through four games and has yet to find the end zone, but that could change in Week 5 against a reeling Cowboys defense that's allowed a touchdown to a TE in each of its last three contests.",
    "analysis": "",
    "timestamp": "",
    "week01": 1.9,
    "week02": 9.5,
    "week03": 3.7,
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
    "week21": ""
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
                         data: [1.9, 9.5, 3.7, 6.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.5, 12.7, 8.3, 15.6, 13.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.5, 2.8, 3.8, 3.4, 3.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.1, 15.3, 14.7, 14.4, 13.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13229.png",
    "name": "Rob Gronkowski",
    "depthchart": "Starter: TE-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 12.1,
    "opponent": "Chicago Bears",
    "home_away": "at ",
    "opp_rank_Neu": 9,
    "team_rank_Neu": 9,
    "avg_fp2": 3.33,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 10.43,
    "fanduelSalary": "$5200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#D50A0A",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(213, 10, 10, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#D50A0A",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Buccaneers' Rob Gronkowski: Ready for Thursday",
    "report": "Gronkowski (shoulder) doesn't have a designation for Thursday's game in Chicago.Gronkowski followed an LP/LP/FP practice regimen this week, clearing him to play Week 5. The Buccaneers' tight end group endured the loss of O.J. Howard to a ruptured Achilles, while the receiving corps will be without Chris Godwin (hamstring) and Justin Watson (chest), so added targets could be available for Gronkowski to contribute. On the season, Gronkowski has put up just a 9-88-0 line on 14 targets through four games.",
    "analysis": "",
    "timestamp": "",
    "week01": 2.1,
    "week02": 0.0,
    "week03": 7.8,
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
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.1, 0.0, 7.8, 3.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.7, 10.4, 12.7, 9.4, 12.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.7, 4.3, 3.9, 3.6, 4.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(213, 10, 10, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [22.6, 20.7, 20.9, 20.8, 18.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2576925.png",
    "name": "Darren Waller",
    "depthchart": "Starter: TE-1",
    "team": "Las Vegas Raiders",
    "projected": 12.0,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Neg": 3,
    "team_rank_Neu": 13,
    "avg_fp2": 10.75,
    "opp_rank_allowed_fp2_Neu": 14,
    "opp_avg_allowed_fp2": 8.95,
    "fanduelSalary": "$6800",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Knee",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A5ACAF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lv.png",
    "headlineNews": "Raiders' Darren Waller: Listed as limited at practice",
    "report": "Waller (knee) was limited at Wednesday's practiceVic Tafur of The Athletic reports.Waller logged 70 0f 74  snaps on offense in this past Sunday's 30-23 loss to the Bills, en route to hauling in nine of his 12 targets for 88 yards. With no reported setbacks in that contest, we'll operate under the assumption that Waller's limitations Wednesday were maintenance-related.",
    "analysis": "",
    "timestamp": "",
    "week01": 7.5,
    "week02": 22.3,
    "week03": 1.9,
    "week04": 11.3,
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
    "week21": ""
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
                         data: [7.5, 22.3, 1.9, 11.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.3, 10.4, 10.8, 10.6, 12.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.0, 5.4, 18.7, 2.8, 0.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.8, 12.2, 24.1, 15.6, 14.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15788.png",
    "name": "Tyler Eifert",
    "depthchart": "Starter: TE-1",
    "team": "Jacksonville Jaguars",
    "projected": 11.0,
    "opponent": "Houston Texans",
    "home_away": "at ",
    "opp_rank_Neg": 5,
    "team_rank_Neu": 10,
    "avg_fp2": 4.42,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 10.35,
    "fanduelSalary": "$4500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#006778",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 103, 120, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#006778",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/jax.png",
    "headlineNews": "Jaguars' Tyler Eifert: Healthy to begin Week 5",
    "report": "Eifert is not listed with an injury designation on Wednesday's practice report.Eifert was tested for a possible concussion during Sunday's game against the Bengals, but it looks as though he's escaped without any sort of injury. However, the veteran tight end is sitting out Wednesday's practice as a scheduled rest day.",
    "analysis": "",
    "timestamp": "",
    "week01": 1.3,
    "week02": 11.1,
    "week03": 2.1,
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
    "week21": ""
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
                         data: [1.3, 11.1, 2.1, 3.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.3, 8.9, 10.5, 6.5, 11.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.8, 0.5, 3.1, 0.6, 1.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 103, 120, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.9, 12.7, 16.5, 13.9, 11.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3117256.png",
    "name": "Dalton Schultz",
    "depthchart": "Starter: TE-1",
    "team": "Dallas Cowboys",
    "projected": 10.9,
    "opponent": "New York Giants",
    "home_away": "",
    "opp_rank_Neg": 6,
    "team_rank_Pos": 1,
    "avg_fp2": 10.22,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 6.9,
    "fanduelSalary": "$5300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#7F9695",
    "tmColorDark": "#041E42",
    "tmColorLite_rgba": "rgba(127, 150, 149, 0.2)",
    "tmColorDark_rgba": "rgba(4, 30, 66, 0.2)",
    "tmTextLite": "#7F9695",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
    "headlineNews": "Cowboys' Dalton Schultz: Clear of thigh issue",
    "report": "Schultz (thigh) wasn't listed on the Cowboys' injury report Wednesday.Near the conclusion of this past Sunday's loss to the Browns, Schultz took a helmet to his thigh, but the issue hasn't hurt his ability to take part in practice three days later. With Blake Jarwin (knee) on injured reserve, Schultz will be Dallas' No. 1 TE, which has translated to 18 receptions (on 28 targets) for 219 yards and two touchdowns.",
    "analysis": "",
    "timestamp": "",
    "week01": 1.6,
    "week02": 17.3,
    "week03": 6.8,
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
    "week21": ""
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
                         data: [1.6, 17.3, 6.8, 15.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.3, 7.8, 7.9, 8.4, 10.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.1, 0.0, 0.0, 6.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  "rgba(127, 150, 149, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [2.5, 1.6, 3.7, 10.9, 10.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13232.png",
    "name": "Jimmy Graham",
    "depthchart": "Starter: TE-1",
    "team": "Chicago Bears",
    "projected": 10.9,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "",
    "opp_rank_Neu": 19,
    "team_rank_Neu": 21,
    "avg_fp2": 9.65,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 8.3,
    "fanduelSalary": "$5400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#c36835",
    "tmColorDark": "#0B162A",
    "tmColorLite_rgba": "rgba(195, 104, 53, 0.2)",
    "tmColorDark_rgba": "rgba(11, 22, 42, 0.2)",
    "tmTextLite": "#c36835",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png",
    "headlineNews": "Bears' Jimmy Graham: Targeted five times in loss",
    "report": "Graham caught four passes for 33 yards in Chicago's 19-11 defeat to the Colts on Sunday.Graham was blanked in the first half, but after the Bears fell behind by double digits, they had to lean heavily upon the pass, and as a result, Graham ended up with a respectable five targets. He'll likely continue to be a factor when Chicago is in the red zone, but he's also averaging six targets per game, giving him a decent weekly floor for a tight end.",
    "analysis": "",
    "timestamp": "",
    "week01": 10.0,
    "week02": 2.3,
    "week03": 21.0,
    "week04": 5.3,
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
    "week21": ""
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
                         data: [10.0, 2.3, 21.0, 5.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.2, 13.4, 16.8, 7.7, 10.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.2, 3.5, 1.3, 2.6, 1.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  "rgba(195, 104, 53, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.2, 17.5, 14.7, 15.0, 13.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116365.png",
    "name": "Mark Andrews",
    "depthchart": "Starter: TE-1",
    "team": "Baltimore Ravens",
    "projected": 10.6,
    "opponent": "Cincinnati Bengals",
    "home_away": "",
    "opp_rank_Neu": 16,
    "team_rank_Neg": 31,
    "avg_fp2": 11.65,
    "opp_rank_allowed_fp2_Neu": 15,
    "opp_avg_allowed_fp2": 9.22,
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
    "headlineNews": "Ravens' Mark Andrews: Finds end zone twice",
    "report": "Andrews recorded three receptions for 57 yards and two touchdowns in Week 4 against Washington.Andrews bounced back from a tough Week 3 performance when he appeared out of sync with Lamar Jackson. He recorded a pair of touchdowns in a single game for the second time this season, hauling in scores of 25 and 22 yards. There was little else left for Andrews to do throughout the game, as the Ravens attempted only 23 passes in their lopsided victory. Andrews will have another favorable matchup in Week 5, as Baltimore will face off against the Bengals.",
    "analysis": "",
    "timestamp": "",
    "week01": 20.3,
    "week02": 3.4,
    "week03": 3.7,
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
    "week21": ""
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
                         data: [20.3, 3.4, 3.7, 19.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.4, 13.8, 15.2, 10.4, 10.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.9, 1.0, 2.5, 3.0, 5.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.8, 12.6, 16.2, 15.3, 17.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/12537.png",
    "name": "Jared Cook",
    "depthchart": "Starter: TE-1",
    "team": "New Orleans Saints",
    "projected": 10.5,
    "opponent": "Los Angeles Chargers",
    "home_away": "",
    "opp_rank_Pos": 25,
    "team_rank_Neu": 17,
    "avg_fp2": 7.3,
    "opp_rank_allowed_fp2_Pos": 24,
    "opp_avg_allowed_fp2": 12.82,
    "fanduelSalary": "$6200",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Groin",
    "tmColorLite": "#9b845c",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(155, 132, 92, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#9b845c",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
    "headlineNews": "Saints' Jared Cook: Ruled out for Week 4",
    "report": "Cook (groin) has been ruled out for Sunday's game against the Lions, Tim Twentyman of the Lions' official site reports.Cook wasn't able to practice in any capacity this week after exiting in the third quarter of a loss to the Packers on Sunday night. Rookie tight end Adam Trautman played each of the Saints' 12 offensive snaps in the fourth quarter of that game, finishing with two catches for 17 yards on two targets. Veteran tight end Josh Hill could also pick up some of the vacated snaps, but Trautman looks like the better bet to be involved in the passing game. The Saints also ruled out WR Michael Thomas (ankle), LG Andrus Peat (ankle) and three defensive starters, leaving them extremely shorthanded Sunday in Detroit. The only good news is that they'll have an extra day to recover before facing the Chargers on Monday Night Football in Week 5.",
    "analysis": "",
    "timestamp": "",
    "week01": 10.5,
    "week02": 8.3,
    "week03": 3.1,
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
    "week21": ""
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
                         data: [10.5, 8.3, 3.1, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.3, 9.5, 9.1, 'DNP', 10.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.0, 1.2, 1.4, 'DNP', 1.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(155, 132, 92, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.9, 13.3, 13.3, 'DNP', 14.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15835.png",
    "name": "Zach Ertz",
    "depthchart": "Starter: TE-1",
    "team": "Philadelphia Eagles",
    "projected": 9.7,
    "opponent": "Pittsburgh Steelers",
    "home_away": "at ",
    "opp_rank_Neu": 12,
    "team_rank_Neg": 27,
    "avg_fp2": 7.85,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 8.63,
    "fanduelSalary": "$6500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#386168",
    "tmColorDark": "#004C54",
    "tmColorLite_rgba": "rgba(56, 97, 104, 0.2)",
    "tmColorDark_rgba": "rgba(0, 76, 84, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    "headlineNews": "Eagles' Zach Ertz: Just nine yards in win",
    "report": "Ertz was held to four receptions (five targets) for nine yards in Sunday's 25-20 win over San Francisco.Ertz was unable to shake free against the 49ers' talented pass-coverage linebackers, resulting in one of the worst fantasy lines of his career. The four receptions salvaged what would have been a complete dud for those in PPR formats. The loss of fellow tight end Dallas Goedert (ankle) may end up hurting Ertz more than helping, as defenses can key in on the Eagles' top receiving threat with little to no help offered on the outside. Next week's opponent, the Pittsburgh Steelers, also boast an athletic middle linebacker in Devin Bush, so fantasy managers who roster Ertz are hoping he can break free more often than he did this Sunday.",
    "analysis": "",
    "timestamp": "",
    "week01": 9.3,
    "week02": 6.7,
    "week03": 10.5,
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
    "week21": ""
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
                         data: [9.3, 6.7, 10.5, 4.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.7, 10.4, 11.4, 13.5, 9.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.8, 5.1, 3.2, 4.7, 3.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.3, 16.7, 13.8, 17.3, 17.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3054212.png",
    "name": "Jonnu Smith",
    "depthchart": "Starter: TE-1",
    "team": "Tennessee Titans",
    "projected": 8.3,
    "opponent": "Buffalo Bills",
    "home_away": "",
    "opp_rank_Pos": 27,
    "team_rank_Neu": 11,
    "avg_fp2": 14.2,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 15.35,
    "fanduelSalary": "$5800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#4495D1",
    "tmColorDark": "#002A5C",
    "tmColorLite_rgba": "rgba(68, 149, 209, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 92, 0.2)",
    "tmTextLite": "#4495D1",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png",
    "headlineNews": "Titans' Jonnu Smith: Draws eight targets",
    "report": "Smith recorded five receptions on eight targets for 61 yards in Week 3 against the Vikings.Smith led the team with eight targets, continuing his target spike to begin the 2020 season. He delivered several big plays in the contest, including receptions of 21, 16 and 14 yards. Smith appears to be in the midst of a fourth-year breakout, as he's already accrued 20 targets -- nearly half of his previous season-best. The major caveat is his involvement once A.J. Brown (knee) is able to return, though Smith has shown good chemistry with quarterback Ryan Tannehill through three games.",
    "analysis": "",
    "timestamp": "",
    "week01": 11.6,
    "week02": 22.4,
    "week03": 8.6,
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
    "week21": ""
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
                         data: [11.6, 22.4, 8.6, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.7, 10.0, 9.9, 'DNP', 8.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.9, 1.2, 'DNP', 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [7.9, 9.5, 11.9, 'DNP', 7.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/10475.png",
    "name": "Greg Olsen",
    "depthchart": "Starter: TE-1",
    "team": "Seattle Seahawks",
    "projected": 8.2,
    "opponent": "Minnesota Vikings",
    "home_away": "",
    "opp_rank_Pos": 29,
    "team_rank_Pos": 3,
    "avg_fp2": 6.25,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 8.93,
    "fanduelSalary": "$5000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#69BE28",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(105, 190, 40, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#69BE28",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
    "headlineNews": "Seahawks' Greg Olsen: Leads team in targets Sunday",
    "report": "Olsen caught five of seven targets for 35 yards in Sunday's 31-23 win over the Dolphins.Olsen has garnered 13 targets over the past two weeks and turned them into 10 receptions for 96 yards but no touchdowns. The Seahawks have been creative with the veteran tight end, lining him up in the slot and even out wide at times, but he's still not getting many quality targets. Olsen has registered just 8.6 yards per reception and two red-zone targets through four games.",
    "analysis": "",
    "timestamp": "",
    "week01": 10.4,
    "week02": 0.0,
    "week03": 8.6,
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
    "week21": ""
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
                         data: [10.4, 0.0, 8.6, 6.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.4, 9.8, 13.6, 6.7, 8.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.0, 2.4, 1.6, 3.0, 3.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.6, 14.7, 15.7, 15.2, 15.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4045305.png",
    "name": "Ian Thomas",
    "depthchart": "Starter: TE-1",
    "team": "Carolina Panthers",
    "projected": 7.7,
    "opponent": "Atlanta Falcons",
    "home_away": "at ",
    "opp_rank_Pos": 31,
    "team_rank_Neu": 8,
    "avg_fp2": 2.88,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 22.52,
    "fanduelSalary": "$4700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0085CA",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 133, 202, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#0085CA",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/car.png",
    "headlineNews": "Panthers' Ian Thomas: Hauls in touchdown",
    "report": "Thomas caught two of five targets for five yards and a touchdown in Sunday's 31-21 win over the Cardinals.Thomas has now managed merely 30 receiving yards through four games, but his touchdown from two yards Sunday at least offered a glimmer of hope. He actually saw fewer snaps Sunday than fellow tight end Chris Manhertz, who finished with one catch for 17 yards. With neither option being particularly productive, Carolina's starting tight-end role hasn't meant much in fantasy terms thus far.",
    "analysis": "",
    "timestamp": "",
    "week01": 2.6,
    "week02": 0.0,
    "week03": 1.4,
    "week04": 7.5,
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
    "week21": ""
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
                         data: [2.6, 0.0, 1.4, 7.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.1, 8.4, 8.5, 7.7, 7.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 1.4, 0.0, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 133, 202, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.2, 11.4, 7.6, 6.9, 7.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4241977.png",
    "name": "Jack Doyle",
    "depthchart": "Starter: TE-1",
    "team": "Indianapolis Colts",
    "projected": 7.6,
    "opponent": "Cleveland Browns",
    "home_away": "at ",
    "opp_rank_Pos": 30,
    "team_rank_Neu": 18,
    "avg_fp2": 2.7,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 16.38,
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
    "headlineNews": "Colts' Jack Doyle: Just one reception Sunday",
    "report": "Doyle had one reception for 12 yards on his only target in Sunday's win over Chicago.With injuries at wide receiver (Parris Campbell and Michael Pittman on IR), the Colts utilized three tight ends in the passing game against the Bears. Mo Alie-Cox was a starter in a two-TE set with Doyle. Alie-Cox played 33 of the offense's 72 snaps with Doyle playing 45 snaps and Trey Burton playing 36 snaps. It was thought Doyle would have a large profile in the Indy offense, but he has just four receptions and five targets in three games.",
    "analysis": "",
    "timestamp": "",
    "week01": 6.4,
    "week02": "DNP",
    "week03": 0.0,
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
    "week21": ""
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
                         data: [6.4, 'DNP', 0.0, 1.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.4, 'DNP', 7.7, 4.4, 7.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.4, 'DNP', 0.8, 0.6, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.0, 'DNP', 9.6, 11.4, 10.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3924365.png",
    "name": "Hayden Hurst",
    "depthchart": "Starter: TE-1",
    "team": "Atlanta Falcons",
    "projected": 6.0,
    "opponent": "Carolina Panthers",
    "home_away": "",
    "opp_rank_Neu": 7,
    "team_rank_Pos": 5,
    "avg_fp2": 8.68,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 7.5,
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
    "headlineNews": "Falcons' Hayden Hurst: Eclipses 50 yards receiving on MNF",
    "report": "Hurst caught four of his six targets for 51 receiving yards during Monday's 30-16 loss to the Packers.The 2018 first-round draft choice got off to a slow start to his Falcons tenure with three catches and 38 receiving yards in a season-opening loss to Seattle. Between Weeks 2 and 3, Hurst rebounded with touchdown grabs in back-to-back outings, while Monday night he finished as Atlanta's second-leading receiver behind Olamide Zaccheaus. As Todd Gurley remains a non-factor in the passing game with nine total receiving yards through four games and Julio Jones deals with a recurring hamstring injury, Hurst may once again be one of Atlanta's go-to options during a Week 5 matchup against Carolina.",
    "analysis": "",
    "timestamp": "",
    "week01": 5.3,
    "week02": 15.7,
    "week03": 6.6,
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
    "week21": ""
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
                         data: [5.3, 15.7, 6.6, 7.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.7, 6.3, 8.3, 9.5, 6.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 8.8, 1.6, 0.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.1, 7.1, 15.5, 9.5, 9.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15773.png",
    "name": "Darren Fells",
    "depthchart": "Starter: TE-1",
    "team": "Houston Texans",
    "projected": 5.7,
    "opponent": "Jacksonville Jaguars",
    "home_away": "",
    "opp_rank_Pos": 24,
    "team_rank_Neu": 15,
    "avg_fp2": 3.83,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 11.8,
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
    "headlineNews": "Texans' Darren Fells: Atop depth chart with Akins injured",
    "report": "With Jordan Akins (concussion) unable to practice Wednesday, per Aaron Wilson of the Houston Chronicle, Fells becomes the lead tight end in preparations for Week 5 against the Jaguars.Akins is also dealing with an ankle injury as the Texans prepare for their home matchup against division rival Jacksonville. After Akins was removed from last week's loss to the Vikings, Fells stepped in as the lead tight end and caught two passes for 21 yards while playing a season-high 52 snaps (80 percent).",
    "analysis": "",
    "timestamp": "",
    "week01": 2.9,
    "week02": 9.3,
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
    "week21": ""
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
                         data: [2.9, 9.3, 0.0, 3.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.6, 1.2, 3.1, 3.0, 5.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.1, 0.3, 0.1, 0.5, 1.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.2, 9.8, 8.8, 9.6, 10.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3127292.png",
    "name": "Will Dissly",
    "depthchart": "Backup: TE-2",
    "team": "Seattle Seahawks",
    "projected": 5.6,
    "opponent": "Minnesota Vikings",
    "home_away": "",
    "opp_rank_Pos": 29,
    "team_rank_Pos": 3,
    "avg_fp2": 1.8,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 8.93,
    "fanduelSalary": "$4500",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Achilles",
    "tmColorLite": "#69BE28",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(105, 190, 40, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#69BE28",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
    "headlineNews": "Seahawks' Will Dissly: Puts in limited practice",
    "report": "Dissly (Achilles) was limited at Wednesday's practice, Michael-Shawn Dugar of The Athletic reports.Dissly has been a regular on Seahawks injury reports this season with an Achilles issue, likely a residual of his season-ending injury from October 2019. His production has been next to none this season, as he's managed no more than two catches or 15 yards in any given game. Expect Dissly to continue working behind Greg Olsen on game days.",
    "analysis": "",
    "timestamp": "",
    "week01": 1.8,
    "week02": 1.4,
    "week03": 1.5,
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
    "week21": ""
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
                         data: [1.8, 1.4, 1.5, 2.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.2, 2.8, 6.1, -0.9, 5.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 3.7, 2.7, 0.0, 2.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.1, 15.1, 16.7, 8.8, 16.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2573401.png",
    "name": "Tyler Higbee",
    "depthchart": "Starter: TE-1",
    "team": "Los Angeles Rams",
    "projected": 5.3,
    "opponent": "Washington Football Team",
    "home_away": "at ",
    "opp_rank_Neg": 4,
    "team_rank_Neu": 14,
    "avg_fp2": 10.5,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 16.1,
    "fanduelSalary": "$6000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Rams' Tyler Higbee: Held to just 21 receiving yards",
    "report": "Higbee caught three of four targets for 21 yards during Sunday's 17-9 win over the Giants.Outside of Higbee's huge Week 2 showing that included three touchdowns, the fifth-year tight end has been held to just eight receptions for 101 yards across his other three games. Those numbers aren't moving the needle, and after a strong five-week stretch (43 receptions for 522 yards and two touchdowns) to conclude the 2019 campaign, his inconsistency to start this year should have fantasy managers concerned about relying on Higbee week in, week out.",
    "analysis": "",
    "timestamp": "",
    "week01": 5.5,
    "week02": 25.9,
    "week03": 7.0,
    "week04": 3.6,
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
    "week21": ""
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
                         data: [5.5, 25.9, 7.0, 3.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.7, 6.5, 3.1, 8.1, 5.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.6, 9.8, 0.0, 0.8, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.5, 15.5, 10.1, 9.3, 13.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4044452.png",
    "name": "Kaden Smith",
    "depthchart": "Backup: TE-2",
    "team": "New York Giants",
    "projected": 5.2,
    "opponent": "Dallas Cowboys",
    "home_away": "at ",
    "opp_rank_Neu": 23,
    "team_rank_Neg": 29,
    "avg_fp2": 1.73,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 15.18,
    "fanduelSalary": "$4100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#0B2265",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(11, 34, 101, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png",
    "headlineNews": "Giants' Kaden Smith: Catches lone Week 4 target",
    "report": "Smith caught his only target for a 10-yard gain during Sunday's 17-9 loss to the Rams.Smith has seen an average of 25 offensive snaps and two targets per game through the first quarter of the Giants' regular-season slate, but he has yet to register more than 17 receiving yards in a contest and remains without a touchdown on the year. He's the No. 2 pass-catching tight end in an offense that has only mustered 47 points all season and a measly 18 points the past two weeks. New York's Week 5 opponent, Dallas, has struggled to stop anybody this season, including tight ends. The Cowboys rank among the NFL's 10 worst teams in both receptions (26) and receiving yards (257) allowed to the position.",
    "analysis": "",
    "timestamp": "",
    "week01": 2.7,
    "week02": 0.9,
    "week03": 1.8,
    "week04": 1.5,
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
    "week21": ""
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
                         data: [2.7, 0.9, 1.8, 1.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.4, 4.2, 3.5, 7.6, 5.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.0, 0.3, 1.6, 1.4, 1.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.6, 13.8, 11.2, 8.2, 11.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3123050.png",
    "name": "Chris Herndon",
    "depthchart": "Starter: TE-1",
    "team": "New York Jets",
    "projected": 5.2,
    "opponent": "Arizona Cardinals",
    "home_away": "",
    "opp_rank_Neu": 14,
    "team_rank_Neg": 32,
    "avg_fp2": 2.73,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 10.53,
    "fanduelSalary": "$4800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#125740",
    "tmColorDark": "#003f2d",
    "tmColorLite_rgba": "rgba(18, 87, 64, 0.2)",
    "tmColorDark_rgba": "rgba(0, 63, 45, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png",
    "headlineNews": "Jets' Chris Herndon: Struggles continue Week 4",
    "report": "Herndon brought in one of three targets for 11 yards in the Jets' 37-28 loss to the Broncos on Thursday.The athletic tight end once again came up considerably short for fantasy managers, extending what has been a disappointing start to the season to a fourth game. Herndon did have six receptions Week 1 against the Bills, but they went for just 37 yards, and he's now recorded a 5-37-0 line over the subsequent three games. For a player that averaged 12.9 yards per grab and  four touchdowns on 39 catches during his rookie 2018 campaign before missing all but one game last year, the current numbers represent a clear and disappointing drop in downfield usage. Herndon will look to bounce back in a Week 5 home matchup against the Cardinals on Sunday, Oct. 11.",
    "analysis": "",
    "timestamp": "",
    "week01": 4.7,
    "week02": 1.0,
    "week03": 3.6,
    "week04": 1.6,
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
    "week21": ""
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
                         data: [4.7, 1.0, 3.6, 1.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.8, 5.7, 4.4, 11.2, 5.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.6, 1.3, 3.3, 0.4, 0.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  "rgba(18, 87, 64, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.7, 9.7, 12.5, 6.2, 5.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116164.png",
    "name": "Mike Gesicki",
    "depthchart": "Starter: TE-1",
    "team": "Miami Dolphins",
    "projected": 4.8,
    "opponent": "San Francisco 49ers",
    "home_away": "at ",
    "opp_rank_Neg": 2,
    "team_rank_Neu": 20,
    "avg_fp2": 9.38,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 4.88,
    "fanduelSalary": "$5600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#008E97",
    "tmColorDark": "#005778",
    "tmColorLite_rgba": "rgba(0, 142, 151, 0.2)",
    "tmColorDark_rgba": "rgba(0, 87, 120, 0.2)",
    "tmTextLite": "#f5821f",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/mia.png",
    "headlineNews": "Dolphins' Mike Gesicki: Shut down by Seahawks",
    "report": "Gesicki caught one of three targets for 15 yards during Sunday's 31-23 loss to the Seahawks.Gesicki has now been limited to just one catch for 15 yards in back-to-back games,  having drawn three targets in both. He ran 36 routes Sunday, so a lack of playing time wasn't to blame for the disappointing statline, but rather that Seattle's defensive coverage encouraged Ryan Fitzpatrick to hone in on DeVante Parker (12 targets) and Isaiah Ford (10 targets) in the passing game. Gesicki faces tough odds of bouncing back Week 5 against a 49ers squad that recently shut down Evan Engram and Zach Ertz.",
    "analysis": "",
    "timestamp": "",
    "week01": 4.5,
    "week02": 23.0,
    "week03": 8.0,
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
    "week21": ""
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
                         data: [4.5, 23.0, 8.0, 2.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.1, 7.0, 11.1, 11.1, 4.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 3.7, 1.1, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 142, 151, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.1, 13.3, 12.4, 9.5, 12.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3930086.png",
    "name": "Dawson Knox",
    "depthchart": "Starter: TE-1",
    "team": "Buffalo Bills",
    "projected": 4.3,
    "opponent": "Tennessee Titans",
    "home_away": "at ",
    "opp_rank_Neu": 23,
    "team_rank_Pos": 2,
    "avg_fp2": 2.83,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 14.07,
    "fanduelSalary": "$4600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#005596",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 85, 150, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
    "headlineNews": "Bills' Dawson Knox: Low production in return",
    "report": "Knox caught two of three targets for 16 yards during Sunday's win in Las Vegas.Knox only played 48 percent of the offensive snaps after missing Week 3 with a concussion. Backup Tyler Kroft was on the field for 33 percent of those snaps and was also targeted three times, hauling in just one for 12 yards. Knox remains the starter and is the more talented player, but with Buffalo's wide receivers playing so well -- not to mention running back Devin Singletary's involvement in the passing game -- the tight end could be a hit-or-miss option for much of the season.",
    "analysis": "",
    "timestamp": "",
    "week01": 3.6,
    "week02": 2.3,
    "week03": "DNP",
    "week04": 2.6,
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
    "week21": ""
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
                         data: [3.6, 2.3, 'DNP', 2.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.3, 5.7, 'DNP', 5.1, 4.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.1, 3.9, 'DNP', 2.6, 1.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [7.6, 11.2, 'DNP', 7.2, 9.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14054.png",
    "name": "Kyle Rudolph",
    "depthchart": "Starter: TE-1",
    "team": "Minnesota Vikings",
    "projected": 4.2,
    "opponent": "Seattle Seahawks",
    "home_away": "at ",
    "opp_rank_Pos": 32,
    "team_rank_Neg": 28,
    "avg_fp2": 3.9,
    "opp_rank_allowed_fp2_Neu": 9,
    "opp_avg_allowed_fp2": 6.9,
    "fanduelSalary": "$4600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e0aa19",
    "tmColorDark": "#300e5a",
    "tmColorLite_rgba": "rgba(224, 170, 25, 0.2)",
    "tmColorDark_rgba": "rgba(48, 14, 90, 0.2)",
    "tmTextLite": "#e0aa19",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/min.png",
    "headlineNews": "Vikings' Kyle Rudolph: Just two receptions",
    "report": "Rudolph had two receptions on two targets for 27 yards in Sunday's win at Houston.Rudolph played on 48 of the offense's 66 snaps, but he went out for a pass just 11 times. Meanwhile Irv Smith played on 41 snaps that included 13 pass routes (but didn't have a reception). The tight ends are not an active part of the passing game in Minnesota's offense, making Rudolph's fantasy value dependent on an occasional end-zone target.",
    "analysis": "",
    "timestamp": "",
    "week01": 3.8,
    "week02": 0.0,
    "week03": 8.1,
    "week04": 3.7,
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
    "week21": ""
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
                         data: [3.8, 0.0, 8.1, 3.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.4, 4.0, 4.3, 10.7, 4.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.5, 2.7, 1.6, 1.4, 1.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  "rgba(224, 170, 25, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.8, 13.5, 12.4, 12.2, 13.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15853.png",
    "name": "Vance McDonald",
    "depthchart": "Backup: TE-2",
    "team": "Pittsburgh Steelers",
    "projected": 3.7,
    "opponent": "Philadelphia Eagles",
    "home_away": "",
    "opp_rank_Neu": 17,
    "team_rank_Neu": 17,
    "avg_fp2": 2.2,
    "opp_rank_allowed_fp2_Pos": 30,
    "opp_avg_allowed_fp2": 17.7,
    "fanduelSalary": "$4200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/pit.png",
    "headlineNews": "Steelers' Vance McDonald: Remains in Ebron's shadow",
    "report": "McDonald caught all three of his targets for 35 yards in the Steelers' 28-21 Week 3 win over the Texans Sunday.Eric Ebron led Pittsburgh in receiving yards -- and finished tied with receiver James Washington for the most receptions and targets -- further widening the gap with McDonald as the primary pass-catching tight end. Week 4 opponent Tennessee has limited opposing tight ends to just 54 yards per game, but the Titans have also yielded a touchdown in each contest to the position. This favors Ebron, making it difficult to insert McDonald in fantasy lineups.",
    "analysis": "",
    "timestamp": "",
    "week01": 0.8,
    "week02": 0.8,
    "week03": 5.0,
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
    "week21": ""
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
                         data: [0.8, 0.8, 5.0, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.9, 4.7, 2.8, 'DNP', 3.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.1, 0.0, 'DNP', 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.9, 10.0, 8.9, 'DNP', 8.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4212989.png",
    "name": "Dan Arnold",
    "depthchart": "Starter: TE-1",
    "team": "Arizona Cardinals",
    "projected": 3.7,
    "opponent": "New York Jets",
    "home_away": "at ",
    "opp_rank_Neu": 15,
    "team_rank_Neu": 23,
    "avg_fp2": 3.55,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 11.2,
    "fanduelSalary": "$4200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#97233F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(151, 35, 63, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#97233F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
    "headlineNews": "Cardinals' Dan Arnold: Makes four catches Sunday",
    "report": "Arnold hauled in all four targets for 39 yards during Sunday's 31-21 loss in Carolina.With a 25-yard catch in the third quarter, Arnold accounted for the Cardinals' second-longest play of the game. It also helped him put up his most-productive stat line of the young season, but the positive vibes around Arnold entering Week 1 have yet to yield fruit in Arizona's offense. In any case, he'll look to continue to improve as he and his teammates prepare to visit the Jets on Sunday.",
    "analysis": "",
    "timestamp": "",
    "week01": 3.1,
    "week02": 3.6,
    "week03": 1.6,
    "week04": 5.9,
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
    "week21": ""
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
                         data: [3.1, 3.6, 1.6, 5.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.4, 5.3, 4.4, 5.8, 3.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.2, 0.0, 1.6, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.9, 7.7, 10.8, 10.0, 7.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2514206.png",
    "name": "Blake Bell",
    "depthchart": "Backup: TE-2",
    "team": "Dallas Cowboys",
    "projected": 3.6,
    "opponent": "New York Giants",
    "home_away": "",
    "opp_rank_Neg": 6,
    "team_rank_Pos": 1,
    "avg_fp2": 1.95,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 6.9,
    "fanduelSalary": "$4200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#7F9695",
    "tmColorDark": "#041E42",
    "tmColorLite_rgba": "rgba(127, 150, 149, 0.2)",
    "tmColorDark_rgba": "rgba(4, 30, 66, 0.2)",
    "tmTextLite": "#7F9695",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
    "headlineNews": "Cowboys' Blake Bell: Two catches in Week 2",
    "report": "Bell caught two of three targets for 34 yards in Sunday's comeback win over the Falcons.With Blake Jarwin (knee) done for the year, Dalton Schultz stepped up and posted a 9-88-1 line on 10 targets as the Cowboys' new No. 1 tight end, but Bell got a little more involved in the passing game as well. There could be more opportunities for both players Week 3 against a Seahawks defense that just gave up 397 passing yards to Cam Newton, but Bell's fantasy ceiling remains limited.",
    "analysis": "",
    "timestamp": "",
    "week01": "DNP",
    "week02": 4.4,
    "week03": 0.0,
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
    "week21": ""
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
                         data: ['DNP', 4.4, 0.0, 3.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 1.7, 1.3, 0.8, 3.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 0.1, 0.7, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  "rgba(127, 150, 149, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 5.1, 4.0, 4.7, 4.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16974.png",
    "name": "Trey Burton",
    "depthchart": "Backup: TE-2",
    "team": "Indianapolis Colts",
    "projected": 3.6,
    "opponent": "Cleveland Browns",
    "home_away": "at ",
    "opp_rank_Pos": 30,
    "team_rank_Neu": 18,
    "avg_fp2": 0.0,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 16.38,
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
    "headlineNews": "Colts' Trey Burton: Five targets in season debut",
    "report": "Burton had two receptions for 16 yards on five targets in Sunday's win over Chicago.With injuries at wide receiver -- Parris Campbell and Michael Pittman are on IR -- the Colts utilized three tight ends in the passing game against the Bears. Mo Alie-Cox was a starter in a two-TE set with Jack Doyle. Alie-Cox played 33 of the offense's 72 snaps with Doyle playing 45 snaps and Burton playing 36 snaps. It was encouraging to see Burton lead the trio in targets in his first game back from a calf injury. However, the use of three tight ends in the offense likely limits his upside.",
    "analysis": "",
    "timestamp": "",
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
    "week21": ""
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
                         data: ['DNP', 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 3.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 0.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 11.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3918639.png",
    "name": "Gerald Everett",
    "depthchart": "Backup: TE-2",
    "team": "Los Angeles Rams",
    "projected": 3.6,
    "opponent": "Washington Football Team",
    "home_away": "at ",
    "opp_rank_Neg": 4,
    "team_rank_Neu": 14,
    "avg_fp2": 2.83,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 16.1,
    "fanduelSalary": "$4400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Rams' Gerald Everett: Rushes one in",
    "report": "Everett caught his only target for 10 yards and scored a two-yard rushing touchdown during Sunday's 17-9 win over the Giants.Plus athleticism has always been Everett's calling card, and it wouldn't be surprising to see creative head coach Sean McVay continue finding ways to incorporate him into the offensive attack. Additionally, with Everett in the final year of his rookie contract, the Rams might also want to utilize him more before deciding how to approach his pending free agency. After all, the organization did invest a second-round selection in the South Alabama product in the 2017 draft. For the time being, Everett's fantasy value is probably limited to settings with premium scoring for tight ends.",
    "analysis": "",
    "timestamp": "",
    "week01": 1.2,
    "week02": 0.0,
    "week03": 4.4,
    "week04": 5.7,
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
    "week21": ""
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
                         data: [1.2, 0.0, 4.4, 5.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.1, 4.0, -1.0, 4.7, 3.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.0, 0.5, 0.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [6.3, 8.9, 6.2, 6.2, 8.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16143.png",
    "name": "Josh Hill",
    "depthchart": "Backup: TE-2",
    "team": "New Orleans Saints",
    "projected": 3.4,
    "opponent": "Los Angeles Chargers",
    "home_away": "",
    "opp_rank_Pos": 25,
    "team_rank_Neu": 17,
    "avg_fp2": 0.82,
    "opp_rank_allowed_fp2_Pos": 24,
    "opp_avg_allowed_fp2": 12.82,
    "fanduelSalary": "$4200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9b845c",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(155, 132, 92, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#9b845c",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "week01": 0.0,
    "week02": 2.1,
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
    "week21": ""
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
                         data: [0.0, 2.1, 0.0, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.4, 0.8, 0.9, 'DNP', 3.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.0, 'DNP', 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(155, 132, 92, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [6.0, 5.9, 6.8, 'DNP', 6.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3127310.png",
    "name": "Drew Sample",
    "depthchart": "Starter: TE-1",
    "team": "Cincinnati Bengals",
    "projected": 3.3,
    "opponent": "Baltimore Ravens",
    "home_away": "at ",
    "opp_rank_Pos": 26,
    "team_rank_Neu": 16,
    "avg_fp2": 4.0,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 11.82,
    "fanduelSalary": "$4600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#ea7330",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(234, 115, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#ea7330",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png",
    "headlineNews": "Bengals' Drew Sample: Very active day",
    "report": "Sample had three catches for 47 yards on five targets in the Bengals' win over Jacksonville on Sunday. He also was the targeted receiver on Joe Burrow's lone interception, a play in the end zone where Jaguars linebacker Myles Jack outfought Sample for the ball after it initially ricocheted off of Sample's facemask.Sample was on the field for 64 offensive plays (85 percent), more than any of the other Bengals running backs, wide receivers or fellow tight end Cethan Carter. Despite the end-zone miscue, he's becoming more than just a blocking or check-down tight end for Burrow.",
    "analysis": "",
    "timestamp": "",
    "week01": 1.2,
    "week02": 8.0,
    "week03": 0.6,
    "week04": 6.2,
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
    "week21": ""
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
                         data: [1.2, 8.0, 0.6, 6.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.6, -0.1, 7.9, 7.2, 3.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.2, 4.9, 0.3, 0.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [5.8, 0.9, 8.8, 1.4, 4.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16786.png",
    "name": "Richard Rodgers",
    "depthchart": "Backup: TE-2",
    "team": "Philadelphia Eagles",
    "projected": 3.2,
    "opponent": "Pittsburgh Steelers",
    "home_away": "at ",
    "opp_rank_Neu": 12,
    "team_rank_Neg": 27,
    "avg_fp2": 3.75,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 8.63,
    "fanduelSalary": "$4300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#386168",
    "tmColorDark": "#004C54",
    "tmColorLite_rgba": "rgba(56, 97, 104, 0.2)",
    "tmColorDark_rgba": "rgba(0, 76, 84, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    "headlineNews": "Eagles' Richard Rodgers: Draws four targets in victory",
    "report": "Rodgers caught three of his four targets for 35 yards in Sunday's 25-20 win over the 49ers.Rodgers produced more than he did a week prior, when he replaced an injured Dallas Goedert (ankle). However, the California product saw just 22 snaps, or 35 percent of the offensive total. With Goedert set to miss at least two more weeks, Rodgers should continue to see similar playing time.",
    "analysis": "",
    "timestamp": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
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
    "week21": ""
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
                         data: ['DNP', 'DNP', 'DNP', 5.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 1.6, 3.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 0.1, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 9.5, 9.7]
                    }
                    
                    ]
               }
            }];



$scope.positionDST = [{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/BAL.png",
    "name": "Baltimore Ravens",
    "depthchart": "",
    "team": "Baltimore Ravens",
    "projected": 9.8,
    "opponent": "Cincinnati Bengals",
    "opp_rank_pts": 18,
    "opp_avg_pts": 24.75,
    "home_away": "",
    "team_rank_allowed_pts": 4,
    "team_avg_allowed_pts": 18.25,
    "team_ranked_takeaways": 6,
    "team_avg_takeaways": 1.75,
    "opp_ranked_giveaways": 19,
    "opp_avg_giveaways": 1.5,
    "fanduelSalary": "$4900",
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
    "avg_fp2": 7.75,
    "week01": 11.0,
    "week02": 7.0,
    "week03": 7.0,
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
    "week21": ""
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
                         data: [11.0, 7.0, 7.0, 6.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.3, 7.0, 7.7, 7.8, 9.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.2, 2.7, 1.9, 3.9, 2.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.1, 16.7, 15.3, 16.4, 16.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/LA.png",
    "name": "Los Angeles Rams",
    "depthchart": "",
    "team": "Los Angeles Rams",
    "projected": 9.2,
    "opponent": "Washington Football Team",
    "opp_rank_pts": 30,
    "opp_avg_pts": 19.75,
    "home_away": "at ",
    "team_rank_allowed_pts": 5,
    "team_avg_allowed_pts": 20.0,
    "team_ranked_takeaways": 17,
    "team_avg_takeaways": 1.0,
    "opp_ranked_giveaways": 32,
    "opp_avg_giveaways": 2.5,
    "fanduelSalary": "$5000",
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
    "avg_fp2": 6.0,
    "week01": 4.0,
    "week02": 5.0,
    "week03": 4.0,
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
    "week21": ""
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
                         data: [4.0, 5.0, 4.0, 11.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.5, 6.5, 6.4, 7.8, 9.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.4, 0.4, 0.8, 1.7, 0.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.2, 13.3, 14.8, 15.4, 14.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/NE.png",
    "name": "New England Patriots",
    "depthchart": "",
    "team": "New England Patriots",
    "projected": 8.2,
    "opponent": "Denver Broncos",
    "opp_rank_pts": 26,
    "opp_avg_pts": 21.0,
    "home_away": "",
    "team_rank_allowed_pts": 8,
    "team_avg_allowed_pts": 23.0,
    "team_ranked_takeaways": 1,
    "team_avg_takeaways": 2.25,
    "opp_ranked_giveaways": 5,
    "opp_avg_giveaways": 0.75,
    "fanduelSalary": "$4800",
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
    "avg_fp2": 6.0,
    "week01": 11.0,
    "week02": 0.0,
    "week03": 9.0,
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
    "week21": ""
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
                         data: [11.0, 0.0, 9.0, 4.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.2, 7.7, 6.5, 4.4, 8.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.5, 2.3, 1.4, 0.9, 3.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.9, 15.6, 11.5, 13.1, 15.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/KC.png",
    "name": "Kansas City Chiefs",
    "depthchart": "",
    "team": "Kansas City Chiefs",
    "projected": 8.0,
    "opponent": "Las Vegas Raiders",
    "opp_rank_pts": 10,
    "opp_avg_pts": 27.75,
    "home_away": "",
    "team_rank_allowed_pts": 2,
    "team_avg_allowed_pts": 16.0,
    "team_ranked_takeaways": 29,
    "team_avg_takeaways": 0.5,
    "opp_ranked_giveaways": 30,
    "opp_avg_giveaways": 2.0,
    "fanduelSalary": "$4300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmTextLite": "rgba(255, 184, 28, 0.2)",
    "tmColorLite_rgba": "rgba(201, 36, 63, 0.2)",
    "tmColorDark_rgba": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "avg_fp2": 8.25,
    "week01": 7.0,
    "week02": 5.0,
    "week03": 7.0,
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
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "#FFB81C, 1)", //dark team color 1
                         backgroundColor:  "rgba(201, 36, 63, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.0, 5.0, 7.0, 14.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "#FFB81C, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.0, 5.0, 5.9, 4.6, 8.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "#FFB81C, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.0, 1.4, 1.0, 0.3, 1.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "#FFB81C, 1)", //dark team color 1 
                        backgroundColor:  "rgba(201, 36, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.4, 13.8, 13.1, 13.9, 14.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/SF.png",
    "name": "San Francisco 49ers",
    "depthchart": "",
    "team": "San Francisco 49ers",
    "projected": 7.9,
    "opponent": "Miami Dolphins",
    "opp_rank_pts": 24,
    "opp_avg_pts": 23.25,
    "home_away": "",
    "team_rank_allowed_pts": 3,
    "team_avg_allowed_pts": 17.75,
    "team_ranked_takeaways": 14,
    "team_avg_takeaways": 1.25,
    "opp_ranked_giveaways": 1,
    "opp_avg_giveaways": 0.5,
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
    "avg_fp2": 6.75,
    "week01": 4.0,
    "week02": 5.0,
    "week03": 12.0,
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
    "week21": ""
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
                         data: [4.0, 5.0, 12.0, 6.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.7, 6.3, 6.4, 7.7, 7.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.9, 0.5, 1.2, 1.0, 0.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.8, 13.2, 13.4, 13.9, 13.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/CHI.png",
    "name": "Chicago Bears",
    "depthchart": "",
    "team": "Chicago Bears",
    "projected": 7.9,
    "opponent": "Tampa Bay Buccaneers",
    "opp_rank_pts": 7,
    "opp_avg_pts": 30.0,
    "home_away": "",
    "team_rank_allowed_pts": 7,
    "team_avg_allowed_pts": 20.25,
    "team_ranked_takeaways": 12,
    "team_avg_takeaways": 1.5,
    "opp_ranked_giveaways": 24,
    "opp_avg_giveaways": 1.75,
    "fanduelSalary": "$3700",
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
    "avg_fp2": 5.75,
    "week01": 3.0,
    "week02": 14.0,
    "week03": 4.0,
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
    "week21": ""
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
                         data: [3.0, 14.0, 4.0, 2.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.1, 7.3, 6.1, 6.1, 7.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.5, 3.8, 1.6, 1.7, 1.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  "rgba(195, 104, 53, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.1, 14.4, 15.6, 14.5, 14.5]
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
    "opponent": "Chicago Bears",
    "opp_rank_pts": 25,
    "opp_avg_pts": 21.25,
    "home_away": "at ",
    "team_rank_allowed_pts": 8,
    "team_avg_allowed_pts": 23.0,
    "team_ranked_takeaways": 6,
    "team_avg_takeaways": 1.75,
    "opp_ranked_giveaways": 5,
    "opp_avg_giveaways": 0.75,
    "fanduelSalary": "$4400",
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
    "avg_fp2": 9.0,
    "week01": 0.0,
    "week02": 14.0,
    "week03": 16.0,
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
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 14.0, 16.0, 6.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.1, 7.2, 6.7, 8.3, 7.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.4, 1.2, 1.0, 1.9, 1.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(213, 10, 10, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.0, 15.0, 14.4, 15.6, 15.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/PIT.png",
    "name": "Pittsburgh Steelers",
    "depthchart": "",
    "team": "Pittsburgh Steelers",
    "projected": 7.8,
    "opponent": "Philadelphia Eagles",
    "opp_rank_pts": 26,
    "opp_avg_pts": 21.0,
    "home_away": "",
    "team_rank_allowed_pts": 6,
    "team_avg_allowed_pts": 20.0,
    "team_ranked_takeaways": 27,
    "team_avg_takeaways": 0.67,
    "opp_ranked_giveaways": 9,
    "opp_avg_giveaways": 1.0,
    "fanduelSalary": "$4400",
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
    "avg_fp2": 9.33,
    "week01": 8.0,
    "week02": 13.0,
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
    "week21": ""
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
                         data: [8.0, 13.0, 7.0, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.9, 7.8, 8.4, 'DNP', 7.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.9, 1.7, 2.1, 'DNP', 2.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.7, 14.9, 14.7, 'DNP', 14.8]
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
    "opponent": "New York Jets",
    "opp_rank_pts": 31,
    "opp_avg_pts": 16.25,
    "home_away": "at ",
    "team_rank_allowed_pts": 8,
    "team_avg_allowed_pts": 23.0,
    "team_ranked_takeaways": 6,
    "team_avg_takeaways": 1.75,
    "opp_ranked_giveaways": 16,
    "opp_avg_giveaways": 1.25,
    "fanduelSalary": "$4200",
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
    "avg_fp2": 5.0,
    "week01": 4.0,
    "week02": 11.0,
    "week03": 4.0,
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
    "week21": ""
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
                         data: [4.0, 11.0, 4.0, 1.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.0, 6.4, 6.8, 5.0, 7.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.4, 1.7, 1.6, 1.1, 1.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.3, 14.0, 13.2, 14.7, 12.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/WAS.png",
    "name": "Washington Football Team",
    "depthchart": "",
    "team": "Washington Football Team",
    "projected": 7.1,
    "opponent": "Los Angeles Rams",
    "opp_rank_pts": 13,
    "opp_avg_pts": 26.5,
    "home_away": "",
    "team_rank_allowed_pts": 22,
    "team_avg_allowed_pts": 28.0,
    "team_ranked_takeaways": 17,
    "team_avg_takeaways": 1.0,
    "opp_ranked_giveaways": 24,
    "opp_avg_giveaways": 1.75,
    "fanduelSalary": "$3800",
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
    "avg_fp2": 5.5,
    "week01": 13.0,
    "week02": 4.0,
    "week03": 1.0,
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
    "week21": ""
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
                         data: [13.0, 4.0, 1.0, 4.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.8, 5.8, 6.7, 5.3, 7.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.2, 1.1, 0.9, 0.4, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.6, 11.7, 11.7, 11.2, 12.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/MIA.png",
    "name": "Miami Dolphins",
    "depthchart": "",
    "team": "Miami Dolphins",
    "projected": 6.9,
    "opponent": "San Francisco 49ers",
    "opp_rank_pts": 11,
    "opp_avg_pts": 26.75,
    "home_away": "at ",
    "team_rank_allowed_pts": 12,
    "team_avg_allowed_pts": 24.0,
    "team_ranked_takeaways": 3,
    "team_avg_takeaways": 2.0,
    "opp_ranked_giveaways": 9,
    "opp_avg_giveaways": 1.0,
    "fanduelSalary": "$3600",
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
    "avg_fp2": 5.25,
    "week01": 2.0,
    "week02": 4.0,
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
    "week21": ""
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
                         data: [2.0, 4.0, 12.0, 3.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.1, 7.4, 6.2, 4.1, 6.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.1, 0.0, 2.9, 0.0, 0.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 142, 151, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.8, 14.2, 10.5, 12.8, 13.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/SEA.png",
    "name": "Seattle Seahawks",
    "depthchart": "",
    "team": "Seattle Seahawks",
    "projected": 6.8,
    "opponent": "Minnesota Vikings",
    "opp_rank_pts": 13,
    "opp_avg_pts": 26.5,
    "home_away": "",
    "team_rank_allowed_pts": 21,
    "team_avg_allowed_pts": 27.75,
    "team_ranked_takeaways": 17,
    "team_avg_takeaways": 1.0,
    "opp_ranked_giveaways": 5,
    "opp_avg_giveaways": 0.75,
    "fanduelSalary": "$4000",
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
    "avg_fp2": 5.75,
    "week01": 4.0,
    "week02": 3.0,
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
    "week21": ""
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
                         data: [4.0, 3.0, 11.0, 5.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.7, 6.5, 6.8, 5.6, 6.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.1, 1.7, 2.2, 1.2, 1.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.4, 15.6, 15.8, 14.2, 13.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/IND.png",
    "name": "Indianapolis Colts",
    "depthchart": "",
    "team": "Indianapolis Colts",
    "projected": 6.4,
    "opponent": "Cleveland Browns",
    "opp_rank_pts": 4,
    "opp_avg_pts": 31.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 1,
    "team_avg_allowed_pts": 14.0,
    "team_ranked_takeaways": 25,
    "team_avg_takeaways": 0.75,
    "opp_ranked_giveaways": 19,
    "opp_avg_giveaways": 1.5,
    "fanduelSalary": "$4500",
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
    "avg_fp2": 11.0,
    "week01": 4.0,
    "week02": 19.0,
    "week03": 14.0,
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
    "week21": ""
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
                         data: [4.0, 19.0, 14.0, 7.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.8, 6.8, 8.6, 5.9, 6.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.4, 1.2, 0.2, 2.7, 0.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.9, 12.2, 12.3, 14.1, 13.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/NO.png",
    "name": "New Orleans Saints",
    "depthchart": "",
    "team": "New Orleans Saints",
    "projected": 6.3,
    "opponent": "Los Angeles Chargers",
    "opp_rank_pts": 28,
    "opp_avg_pts": 20.75,
    "home_away": "",
    "team_rank_allowed_pts": 25,
    "team_avg_allowed_pts": 30.75,
    "team_ranked_takeaways": 17,
    "team_avg_takeaways": 1.0,
    "opp_ranked_giveaways": 19,
    "opp_avg_giveaways": 1.5,
    "fanduelSalary": "$4300",
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
    "avg_fp2": 4.0,
    "week01": 11.0,
    "week02": 4.0,
    "week03": -3.0,
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
    "week21": ""
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
                         data: [11.0, 4.0, -3.0, 4.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.3, 4.7, 4.5, 5.3, 6.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.5, 0.4, 1.0, 0.6, 0.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(155, 132, 92, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.5, 11.4, 12.6, 12.8, 10.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/PHI.png",
    "name": "Philadelphia Eagles",
    "depthchart": "",
    "team": "Philadelphia Eagles",
    "projected": 6.2,
    "opponent": "Pittsburgh Steelers",
    "opp_rank_pts": 16,
    "opp_avg_pts": 26.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 20,
    "team_avg_allowed_pts": 26.75,
    "team_ranked_takeaways": 1,
    "team_avg_takeaways": 2.25,
    "opp_ranked_giveaways": 27,
    "opp_avg_giveaways": 2.0,
    "fanduelSalary": "$4000",
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
    "week01": 3.0,
    "week02": 1.0,
    "week03": 8.0,
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
    "week21": ""
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
                         data: [3.0, 1.0, 8.0, 12.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.0, 7.2, 7.1, 6.1, 6.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.9, 0.8, 3.4, 1.7, 2.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.3, 12.9, 15.0, 13.7, 14.6]
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
    "opponent": "New York Giants",
    "opp_rank_pts": 32,
    "opp_avg_pts": 11.75,
    "home_away": "",
    "team_rank_allowed_pts": 32,
    "team_avg_allowed_pts": 36.0,
    "team_ranked_takeaways": 17,
    "team_avg_takeaways": 1.0,
    "opp_ranked_giveaways": 16,
    "opp_avg_giveaways": 1.25,
    "fanduelSalary": "$3500",
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
    "avg_fp2": -0.25,
    "week01": 4.0,
    "week02": -3.0,
    "week03": 0.0,
    "week04": -2.0,
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
    "week21": ""
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
                         data: [4.0, -3.0, 0.0, -2.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.0, 5.8, 5.0, 5.8, 6.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 3.4, 1.2, 1.0, 1.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  "rgba(127, 150, 149, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.7, 14.2, 12.6, 12.1, 12.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/LV.png",
    "name": "Las Vegas Raiders",
    "depthchart": "",
    "team": "Las Vegas Raiders",
    "projected": 6.0,
    "opponent": "Kansas City Chiefs",
    "opp_rank_pts": 8,
    "opp_avg_pts": 29.25,
    "home_away": "at ",
    "team_rank_allowed_pts": 24,
    "team_avg_allowed_pts": 30.0,
    "team_ranked_takeaways": 32,
    "team_avg_takeaways": 0.0,
    "opp_ranked_giveaways": 24,
    "opp_avg_giveaways": 1.75,
    "fanduelSalary": "$3000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmTextLite": "#A5ACAF",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lv.png",
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "avg_fp2": 0.5,
    "week01": 0.0,
    "week02": 2.0,
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
    "week21": ""
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
                         data: [0.0, 2.0, 0.0, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.7, 5.0, 3.2, 5.3, 6.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 1.1, 0.9, 0.0, 0.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.9, 11.3, 12.3, 11.4, 11.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/HOU.png",
    "name": "Houston Texans",
    "depthchart": "",
    "team": "Houston Texans",
    "projected": 6.0,
    "opponent": "Jacksonville Jaguars",
    "opp_rank_pts": 23,
    "opp_avg_pts": 23.75,
    "home_away": "",
    "team_rank_allowed_pts": 27,
    "team_avg_allowed_pts": 31.5,
    "team_ranked_takeaways": 25,
    "team_avg_takeaways": 0.75,
    "opp_ranked_giveaways": 9,
    "opp_avg_giveaways": 1.0,
    "fanduelSalary": "$3700",
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
    "avg_fp2": 1.5,
    "week01": 0.0,
    "week02": 3.0,
    "week03": 1.0,
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
    "week21": ""
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
                         data: [0.0, 3.0, 1.0, 2.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.7, 6.4, 5.3, 6.3, 6.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.1, 0.0, 0.3, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.6, 13.3, 12.8, 13.3, 13.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/CLE.png",
    "name": "Cleveland Browns",
    "depthchart": "",
    "team": "Cleveland Browns",
    "projected": 6.0,
    "opponent": "Indianapolis Colts",
    "opp_rank_pts": 17,
    "opp_avg_pts": 25.75,
    "home_away": "",
    "team_rank_allowed_pts": 27,
    "team_avg_allowed_pts": 31.5,
    "team_ranked_takeaways": 3,
    "team_avg_takeaways": 2.0,
    "opp_ranked_giveaways": 24,
    "opp_avg_giveaways": 1.75,
    "fanduelSalary": "$3800",
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
    "avg_fp2": 5.25,
    "week01": -2.0,
    "week02": 4.0,
    "week03": 14.0,
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
    "week21": ""
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
                         data: [-2.0, 4.0, 14.0, 5.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.6, 6.5, 7.5, 4.4, 6.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.3, 1.0, 1.1, 1.6, 1.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.5, 11.8, 11.8, 12.7, 11.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/JAX.png",
    "name": "Jacksonville Jaguars",
    "depthchart": "",
    "team": "Jacksonville Jaguars",
    "projected": 6.0,
    "opponent": "Houston Texans",
    "opp_rank_pts": 29,
    "opp_avg_pts": 20.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 23,
    "team_avg_allowed_pts": 29.25,
    "team_ranked_takeaways": 17,
    "team_avg_takeaways": 1.0,
    "opp_ranked_giveaways": 1,
    "opp_avg_giveaways": 0.5,
    "fanduelSalary": "$3600",
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
    "avg_fp2": 2.0,
    "week01": 6.0,
    "week02": 0.0,
    "week03": 0.0,
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
    "week21": ""
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
                         data: [6.0, 0.0, 0.0, 2.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.8, 5.3, 7.0, 5.6, 6.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.9, 0.0, 0.6, 1.2, 1.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 103, 120, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.0, 12.8, 12.5, 12.3, 12.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/NYJ.png",
    "name": "New York Jets",
    "depthchart": "",
    "team": "New York Jets",
    "projected": 5.7,
    "opponent": "Arizona Cardinals",
    "opp_rank_pts": 21,
    "opp_avg_pts": 24.5,
    "home_away": "",
    "team_rank_allowed_pts": 30,
    "team_avg_allowed_pts": 32.75,
    "team_ranked_takeaways": 12,
    "team_avg_takeaways": 1.5,
    "opp_ranked_giveaways": 1,
    "opp_avg_giveaways": 0.5,
    "fanduelSalary": "$3400",
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
    "avg_fp2": 2.25,
    "week01": 3.0,
    "week02": 4.0,
    "week03": 0.0,
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
    "week21": ""
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
                         data: [3.0, 4.0, 0.0, 2.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.8, 5.1, 5.4, 6.3, 5.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.5, 1.2, 0.6, 1.1, 1.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  "rgba(18, 87, 64, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.6, 12.9, 11.9, 12.2, 12.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/TEN.png",
    "name": "Tennessee Titans",
    "depthchart": "",
    "team": "Tennessee Titans",
    "projected": 5.7,
    "opponent": "Buffalo Bills",
    "opp_rank_pts": 5,
    "opp_avg_pts": 30.75,
    "home_away": "",
    "team_rank_allowed_pts": 14,
    "team_avg_allowed_pts": 24.67,
    "team_ranked_takeaways": 17,
    "team_avg_takeaways": 1.0,
    "opp_ranked_giveaways": 19,
    "opp_avg_giveaways": 1.5,
    "fanduelSalary": "$3900",
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
    "avg_fp2": 5.0,
    "week01": 3.0,
    "week02": 5.0,
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
    "week21": ""
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
                         data: [3.0, 5.0, 7.0, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.9, 7.2, 5.7, 'DNP', 5.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.9, 0.6, 1.3, 'DNP', 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.2, 12.9, 13.5, 'DNP', 13.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/ATL.png",
    "name": "Atlanta Falcons",
    "depthchart": "",
    "team": "Atlanta Falcons",
    "projected": 5.6,
    "opponent": "Carolina Panthers",
    "opp_rank_pts": 18,
    "opp_avg_pts": 24.75,
    "home_away": "",
    "team_rank_allowed_pts": 31,
    "team_avg_allowed_pts": 34.5,
    "team_ranked_takeaways": 14,
    "team_avg_takeaways": 1.25,
    "opp_ranked_giveaways": 9,
    "opp_avg_giveaways": 1.0,
    "fanduelSalary": "$3300",
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
    "avg_fp2": 1.75,
    "week01": -1.0,
    "week02": 3.0,
    "week03": 5.0,
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
    "week21": ""
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
                         data: [-1.0, 3.0, 5.0, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.0, 5.3, 5.9, 4.2, 5.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.9, 0.0, 1.2, 1.3, 1.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.1, 11.1, 11.7, 12.3, 11.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/CIN.png",
    "name": "Cincinnati Bengals",
    "depthchart": "",
    "team": "Cincinnati Bengals",
    "projected": 5.5,
    "opponent": "Baltimore Ravens",
    "opp_rank_pts": 9,
    "opp_avg_pts": 29.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 16,
    "team_avg_allowed_pts": 24.75,
    "team_ranked_takeaways": 29,
    "team_avg_takeaways": 0.5,
    "opp_ranked_giveaways": 9,
    "opp_avg_giveaways": 1.0,
    "fanduelSalary": "$3100",
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
    "avg_fp2": 3.25,
    "week01": 3.0,
    "week02": -2.0,
    "week03": 7.0,
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
    "week21": ""
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
                         data: [3.0, -2.0, 7.0, 5.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.4, 7.1, 6.4, 6.4, 5.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.1, 2.4, 1.2, 0.0, 0.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.0, 10.4, 12.3, 14.3, 12.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/NYG.png",
    "name": "New York Giants",
    "depthchart": "",
    "team": "New York Giants",
    "projected": 5.4,
    "opponent": "Dallas Cowboys",
    "opp_rank_pts": 3,
    "opp_avg_pts": 32.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 12,
    "team_avg_allowed_pts": 24.0,
    "team_ranked_takeaways": 6,
    "team_avg_takeaways": 1.75,
    "opp_ranked_giveaways": 24,
    "opp_avg_giveaways": 1.75,
    "fanduelSalary": "$3200",
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
    "avg_fp2": 3.5,
    "week01": 2.0,
    "week02": 9.0,
    "week03": -2.0,
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
    "week21": ""
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
                         data: [2.0, 9.0, -2.0, 5.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.0, 4.7, 5.9, 5.4, 5.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.1, 0.4, 1.0, 1.3, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.1, 14.0, 13.6, 13.4, 16.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/CAR.png",
    "name": "Carolina Panthers",
    "depthchart": "",
    "team": "Carolina Panthers",
    "projected": 5.1,
    "opponent": "Atlanta Falcons",
    "opp_rank_pts": 13,
    "opp_avg_pts": 26.5,
    "home_away": "at ",
    "team_rank_allowed_pts": 19,
    "team_avg_allowed_pts": 25.5,
    "team_ranked_takeaways": 3,
    "team_avg_takeaways": 2.0,
    "opp_ranked_giveaways": 5,
    "opp_avg_giveaways": 0.75,
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
    "avg_fp2": 4.0,
    "week01": -1.0,
    "week02": 3.0,
    "week03": 11.0,
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
    "week21": ""
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
                         data: [-1.0, 3.0, 11.0, 3.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.8, 6.5, 5.4, 6.2, 5.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.6, 1.4, 1.2, 0.9, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 133, 202, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.2, 14.5, 13.7, 13.6, 16.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/LAC.png",
    "name": "Los Angeles Chargers",
    "depthchart": "",
    "team": "Los Angeles Chargers",
    "projected": 5.1,
    "opponent": "New Orleans Saints",
    "opp_rank_pts": 5,
    "opp_avg_pts": 30.75,
    "home_away": "at ",
    "team_rank_allowed_pts": 11,
    "team_avg_allowed_pts": 23.75,
    "team_ranked_takeaways": 17,
    "team_avg_takeaways": 1.0,
    "opp_ranked_giveaways": 9,
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
    "avg_fp2": 4.0,
    "week01": 9.0,
    "week02": 5.0,
    "week03": 4.0,
    "week04": -2.0,
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
    "week21": ""
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
                         data: [9.0, 5.0, 4.0, -2.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.3, 5.8, 6.1, 7.4, 5.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.5, 0.4, 1.6, 1.2, 0.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 128, 198, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.1, 11.8, 13.5, 13.0, 12.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/MIN.png",
    "name": "Minnesota Vikings",
    "depthchart": "",
    "team": "Minnesota Vikings",
    "projected": 5.0,
    "opponent": "Seattle Seahawks",
    "opp_rank_pts": 2,
    "opp_avg_pts": 35.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 26,
    "team_avg_allowed_pts": 31.25,
    "team_ranked_takeaways": 6,
    "team_avg_takeaways": 1.75,
    "opp_ranked_giveaways": 24,
    "opp_avg_giveaways": 1.75,
    "fanduelSalary": "$3200",
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
    "avg_fp2": 1.5,
    "week01": -4.0,
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
    "week21": ""
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
                         data: [-4.0, 3.0, 2.0, 5.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.6, 5.0, 6.0, 6.4, 5.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.4, 0.7, 0.4, 0.9, 1.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  "rgba(224, 170, 25, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.9, 13.8, 14.1, 12.7, 14.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/DEN.png",
    "name": "Denver Broncos",
    "depthchart": "",
    "team": "Denver Broncos",
    "projected": 4.9,
    "opponent": "New England Patriots",
    "opp_rank_pts": 22,
    "opp_avg_pts": 24.25,
    "home_away": "at ",
    "team_rank_allowed_pts": 12,
    "team_avg_allowed_pts": 24.0,
    "team_ranked_takeaways": 6,
    "team_avg_takeaways": 1.75,
    "opp_ranked_giveaways": 19,
    "opp_avg_giveaways": 1.5,
    "fanduelSalary": "$3900",
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
    "avg_fp2": 4.5,
    "week01": 4.0,
    "week02": 5.0,
    "week03": 3.0,
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
    "week21": ""
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
                         data: [4.0, 5.0, 3.0, 6.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.6, 5.2, 6.5, 6.9, 4.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.3, 1.5, 2.0, 1.4, 1.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(225, 119, 87, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.0, 13.4, 13.2, 13.3, 12.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/BUF.png",
    "name": "Buffalo Bills",
    "depthchart": "",
    "team": "Buffalo Bills",
    "projected": 4.6,
    "opponent": "Tennessee Titans",
    "opp_rank_pts": 15,
    "opp_avg_pts": 26.67,
    "home_away": "at ",
    "team_rank_allowed_pts": 17,
    "team_avg_allowed_pts": 25.0,
    "team_ranked_takeaways": 14,
    "team_avg_takeaways": 1.25,
    "opp_ranked_giveaways": 16,
    "opp_avg_giveaways": 1.33,
    "fanduelSalary": "$4100",
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
    "avg_fp2": 4.75,
    "week01": 6.0,
    "week02": 2.0,
    "week03": 5.0,
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
    "week21": ""
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
                         data: [6.0, 2.0, 5.0, 6.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.4, 8.7, 7.4, 6.3, 4.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.1, 1.2, 1.4, 0.0, 1.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.5, 14.4, 15.2, 12.2, 13.8]
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