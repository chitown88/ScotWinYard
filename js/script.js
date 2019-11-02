var App = angular.module('footballApp', ['tc.chartjs']);

App.controller('positionController', function($scope, $http) {

  //JSON data for position and players

/*********************** PASTE AFTER HERE ************************/

$scope.currentDate = {"currentDate": "Saturday, 02 November 2019 05:00 AM (central time)"};
$scope.week = {"nflWeek": 9};

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
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14881.png",
    "name": "Russell Wilson",
    "depthchart": "Starter: QB-1",
    "team": "Seattle Seahawks",
    "projected": 23.8,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "",
    "opp_rank": 31,
    "team_rank": 13,
    "avg_fp2": 23.29,
    "opp_rank_allowed_fp2": 25,
    "opp_avg_allowed_fp2": 21.69,
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
    "headlineNews": "Bounces back to defeat Falcons",
    "report": "Wilson completed 14 of 20 passes for 182 yards and two touchdowns in Sunday's 27-20 win over the Falcons.",
    "analysis": "Wilson and the Seahawks got pushed around by the Ravens in Week 7, but they rebounded well. Their offense was buzzing in the first half, as it scored on all but one drive to take a 24-0 lead into halftime. Wilson was responsible for two of those touchdowns, as he found D.K. Metcalf in the end zone twice for scores of four and two yards. Things died down for the Seahawks in the second half, but they afforded themselves enough of a cushion to hold on. Wilson got back on track with elite efficiency, posting a 70.0 completion percentage and 9.1 YPA. He'll look to keep it up against the Buccaneers' weak secondary in Week 9.",
    "timestamp": "2019-10-27 01:26 PM",
    "week01": 16.64,
    "week02": 24.2,
    "week03": 41.34,
    "week04": 14.3,
    "week05": 29.92,
    "week06": 28.9,
    "week07": 15.34,
    "week08": 15.68,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [16.64, 24.2, 41.34, 14.3, 29.92, 28.9, 15.34, 15.68]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [19.5, 20.1, 18.7, 25.8, 12.5, 20.9, 17.3, 27.5, 23.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2969939.png",
    "name": "Jameis Winston",
    "depthchart": "Starter: QB-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 23.5,
    "opponent": "Seattle Seahawks",
    "home_away": "at ",
    "opp_rank": 27,
    "team_rank": 9,
    "avg_fp2": 20.0,
    "opp_rank_allowed_fp2": 24,
    "opp_avg_allowed_fp2": 20.14,
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
    "headlineNews": "Scuffles again in Week 8 loss",
    "report": "Winston completed 21 of 43 passes for 301 yards with two touchdowns and two interceptions in the Buccaneers' 27-23 loss to the Titans on Sunday. He also rushed eight times for 53 yards and had three fumbles, losing two and recovering one.",
    "analysis": "The final line is a mixed bag from a fantasy perspective, but Winston was downright bad at times Sunday in a real-world football sense and was guilty of an inexcusable four turnovers. The mistake-prone quarterback did have the connection with Mike Evans in top form, as he hit his trusted wideout for 11 completions, 198 yards and a pair of touchdowns from nine and two yards out, respectively. Winston's second pick was particularly ill-timed, as it came at the Titans' 25-yard line with 26 seconds remaining, effectively sealing the Buccaneers' fate. Coach Bruce Arians had emphasized heading into the bye week that he hadn't considered benching Winston, but a second straight multi-interception effort and third consecutive game with sub-55.0-percent passing might lead to a reevaluation of that statement. Winston's next opportunity to right the ship comes Week 9 against the Seahawks.",
    "timestamp": "2019-10-27 02:33 PM",
    "week01": 10.06,
    "week02": 13.22,
    "week03": 26.5,
    "week04": 30.3,
    "week05": 17.46,
    "week06": 19.1,
    "week07": "BYE",
    "week08": 23.34,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.06, 13.22, 26.5, 30.3, 17.46, 19.1, 'BYE', 23.34]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [20.1, 18.6, 19.1, 12.8, 17.9, 18.9, 'BYE', 17.3, 23.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3916387.png",
    "name": "Lamar Jackson",
    "depthchart": "Starter: QB-1",
    "team": "Baltimore Ravens",
    "projected": 21.8,
    "opponent": "New England Patriots",
    "home_away": "",
    "opp_rank": 2,
    "team_rank": 18,
    "avg_fp2": 25.8,
    "opp_rank_allowed_fp2": 1,
    "opp_avg_allowed_fp2": 7.1,
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
    "headlineNews": "Delivers another big rushing effort",
    "report": "Jackson completed nine of 20 pass attempts for 143 yards while carrying 14 times for 116 rushing yards and a touchdown during Sunday's 30-14 win over the Seahawks.",
    "analysis": "Jackson completed just 45 percent of his attempts as he finished with a new career low in passing yardage. He was devastating as a runner, however, exceeding 100 rushing yards for the third time this season while averaging 8.3 yards per carry. Jackson broke a tie with an eight-yard rushing score in the third quarter and helped his team salt the game away on the ground. He'll face a difficult matchup against the Patriots next Sunday night, but his outstanding contributions with his legs still make him a viable fantasy play.",
    "timestamp": "2019-10-20 04:39 PM",
    "week01": 33.56,
    "week02": 30.88,
    "week03": 21.28,
    "week04": 26.48,
    "week05": 14.44,
    "week06": 30.64,
    "week07": 23.32,
    "week08": "BYE",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [33.56, 30.88, 21.28, 26.48, 14.44, 30.64, 23.32, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.3, 24.6, 18.1, 23.7, 25.3, 21.9, 17.6, 'BYE', 21.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16757.png",
    "name": "Derek Carr",
    "depthchart": "Starter: QB-1",
    "team": "Oakland Raiders",
    "projected": 21.8,
    "opponent": "Detroit Lions",
    "home_away": "",
    "opp_rank": 32,
    "team_rank": 15,
    "avg_fp2": 14.93,
    "opp_rank_allowed_fp2": 26,
    "opp_avg_allowed_fp2": 21.84,
    "fanduelSalary": "$7300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A5ACAF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/oak.png",
    "headlineNews": "Throws three TD passes",
    "report": "Carr completed 18 of 30 pass attempts for 285 yards and three touchdowns during Sunday's 27-24 loss to the Texans.",
    "analysis": "Although Carr completed just 60 percent of his attempts, he averaged a healthy 9.5 yards per completion with the help of some big plays. He got his team on the board with a 65-yard touchdown pass to Hunter Renfrow in the first quarter and later added a 46-yard strike to Tyrell Williams, with an eight-yard score from Darren Waller sandwiched in between. Carr has been quite productive in two games since the bye week, totaling 578 passing yards with five touchdowns and one interception. He'll look to keep it rolling in another favorable matchup against the Lions at home next Sunday.",
    "timestamp": "2019-10-27 07:40 PM",
    "week01": 14.56,
    "week02": 11.72,
    "week03": 16.68,
    "week04": 13.46,
    "week05": 7.96,
    "week06": "BYE",
    "week07": 16.72,
    "week08": 23.4,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.56, 11.72, 16.68, 13.46, 7.96, 'BYE', 16.72, 23.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.8, 12.6, 6.7, 17.9, 11.8, 'BYE', 12.0, 11.4, 21.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4038524.png",
    "name": "Gardner Minshew",
    "depthchart": "Starter: QB-1",
    "team": "Jacksonville Jaguars",
    "projected": 21.7,
    "opponent": "Houston Texans",
    "home_away": "",
    "opp_rank": 28,
    "team_rank": 14,
    "avg_fp2": 17.89,
    "opp_rank_allowed_fp2": 27,
    "opp_avg_allowed_fp2": 21.85,
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
    "headlineNews": "Carves up Jets for three scores",
    "report": "Minshew completed 22 of 34 passes for 279 yards and three touchdowns in Sunday's 29-15 win over the Jets. He added eight carries for 28 yards and lost a fumble.",
    "analysis": "Minshew tossed a pair of touchdowns in the first quarter, finding Keelan Cole from six yards out and later connecting with Chris Conley on a 70-yarder. He added a fourth-quarter dagger to D.J. Chark, converting on third-and-goal from the eight-yard line to give his team a two-touchdown lead with 4:13 remaining. Minshew's first career three-touchdown performance gives him an impressive 13:2 touchdown to interception ratio heading into a Week 9 meeting with the Texans.",
    "timestamp": "2019-10-27 03:04 PM",
    "week01": 18.6,
    "week02": 16.12,
    "week03": 17.96,
    "week04": 16.72,
    "week05": 21.16,
    "week06": 5.62,
    "week07": 23.0,
    "week08": 23.96,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [18.6, 16.12, 17.96, 16.72, 21.16, 5.62, 23.0, 23.96]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.6, 15.4, 15.4, 9.3, 13.3, 19.5, 22.7, 13.5, 21.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3122840.png",
    "name": "Deshaun Watson",
    "depthchart": "Starter: QB-1",
    "team": "Houston Texans",
    "projected": 20.6,
    "opponent": "Jacksonville Jaguars",
    "home_away": "at ",
    "opp_rank": 14,
    "team_rank": 10,
    "avg_fp2": 25.3,
    "opp_rank_allowed_fp2": 18,
    "opp_avg_allowed_fp2": 18.07,
    "fanduelSalary": "$8400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#03202F",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(3, 32, 47, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/hou.png",
    "headlineNews": "Practices fully despite swollen eye",
    "report": "Watson (eye) practiced fully Wednesday.",
    "analysis": "Per Ian Rapoport of NFL Network the quarterback has a swollen left eye, which led to Watson choosing not to partake in Wednesday's Game 7 World Series festivities in Houston. However, the eye issue won't impact his availability for Sunday's game against the Jaguars.",
    "timestamp": "2019-10-30 03:29 PM",
    "week01": 31.72,
    "week02": 12.86,
    "week03": 25.84,
    "week04": 11.6,
    "week05": 41.74,
    "week06": 33.4,
    "week07": 17.52,
    "week08": 27.76,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [31.72, 12.86, 25.84, 11.6, 41.74, 33.4, 17.52, 27.76]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.7, 18.4, 19.8, 19.5, 20.2, 19.6, 21.1, 27.6, 20.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/12483.png",
    "name": "Matthew Stafford",
    "depthchart": "Starter: QB-1",
    "team": "Detroit Lions",
    "projected": 20.3,
    "opponent": "Oakland Raiders",
    "home_away": "at ",
    "opp_rank": 30,
    "team_rank": 5,
    "avg_fp2": 20.82,
    "opp_rank_allowed_fp2": 31,
    "opp_avg_allowed_fp2": 24.14,
    "fanduelSalary": "$7900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0076B6",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(0, 118, 182, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#0076B6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/det.png",
    "headlineNews": "Torches Giants in victory",
    "report": "Stafford completed 25 of 32 pass attempts for 342 yards, three touchdown and one interception in Sunday's 31-26 win over the Giants.",
    "analysis": "Stafford completed an exceptional 78 percent of his passes while averaging 10.7 yards per attempt. He made a splash with some big plays on the day, including a 49-yard touchdown pass to Marvin Hall and a 41-yard strike to Kenny Golladay. Stafford has been prolific over the last two weeks, completing 71 percent of his attempts for seven touchdowns compared to two interceptions. He'll look to continue his recent success in another favorable matchup against the Raiders on the road next Sunday.",
    "timestamp": "2019-10-27 06:59 PM",
    "week01": 27.6,
    "week02": 17.1,
    "week03": 12.14,
    "week04": 23.44,
    "week05": "BYE",
    "week06": 11.5,
    "week07": 29.56,
    "week08": 24.38,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [27.6, 17.1, 12.14, 23.44, 'BYE', 11.5, 29.56, 24.38]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.8, 20.8, 19.6, 17.5, 'BYE', 17.6, 11.0, 21.9, 20.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3052587.png",
    "name": "Baker Mayfield",
    "depthchart": "Starter: QB-1",
    "team": "Cleveland Browns",
    "projected": 18.7,
    "opponent": "Denver Broncos",
    "home_away": "at ",
    "opp_rank": 4,
    "team_rank": 20,
    "avg_fp2": 13.27,
    "opp_rank_allowed_fp2": 3,
    "opp_avg_allowed_fp2": 10.99,
    "fanduelSalary": "$7200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FF3C00",
    "tmColorDark": "#311D00",
    "tmColorLite_rgba": "rgba(255, 60, 0, 0.2)",
    "tmColorDark_rgba": "rgba(49, 29, 0, 0.2)",
    "tmTextLite": "#FF3C00",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
    "headlineNews": "Stifled by Patriots",
    "report": "Mayfield completed 20 of 31 passes for 194 yards and a touchdown with one interception in Sunday's 27-13 loss to the Patriots.",
    "analysis": "While he did better than Sam Darnold did the week before, Mayfield still had little luck solving New England's league-leading defense, and the game was basically over when the Pats grabbed a 17-0 lead in the first quarter. The second-year QB, who has yet to throw multiple TD passes in any game this season while getting picked off at least once in each, gets another tough assignment next week when he leads the Browns into Denver.",
    "timestamp": "2019-10-27 07:08 PM",
    "week01": 12.4,
    "week02": 16.0,
    "week03": 10.7,
    "week04": 16.78,
    "week05": 0.0,
    "week06": 24.46,
    "week07": "BYE",
    "week08": 12.56,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.4, 16.0, 10.7, 16.78, 0.0, 24.46, 'BYE', 12.56]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [20.1, 12.7, 18.3, 16.1, 12.2, 15.6, 'BYE', 12.9, 18.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3917792.png",
    "name": "Daniel Jones",
    "depthchart": "Starter: QB-1",
    "team": "New York Giants",
    "projected": 18.5,
    "opponent": "Dallas Cowboys",
    "home_away": "",
    "opp_rank": 8,
    "team_rank": 17,
    "avg_fp2": 15.58,
    "opp_rank_allowed_fp2": 4,
    "opp_avg_allowed_fp2": 12.6,
    "fanduelSalary": "$7300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#0B2265",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(11, 34, 101, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png",
    "headlineNews": "Throws four touchdown passes",
    "report": "Jones completed 28 of 41 pass attempts for 322 yards and four touchdowns Sunday against the Lions. He also carried four times for 13 yards and lost a fumble in the 31-26 loss.",
    "analysis": "Jones completed an impressive 68.3 percent of his attempts as he topped the 300-yard mark for the second time in his young career. He also set a new career high with four touchdown passes, including two to Darius Slayton, one to Evan Engram, and one to Sqauon Barkley. Jones had four touchdowns compared to nine turnovers in his previous four games, so this outstanding effort was a pleasant surprise to fantasy owners who were brave enough to start him this time around. He'll now turn his focus to next Monday's home matchup against the Cowboys.",
    "timestamp": "2019-10-27 07:49 PM",
    "week01": -0.82,
    "week02": "DNP",
    "week03": 36.24,
    "week04": 14.3,
    "week05": 11.48,
    "week06": 8.24,
    "week07": 11.42,
    "week08": 28.18,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [-0.82, 'DNP', 36.24, 14.3, 11.48, 8.24, 11.42, 28.18]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.2, 'DNP', 12.9, 18.3, 17.4, 13.5, 13.1, 10.0, 18.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2577417.png",
    "name": "Dak Prescott",
    "depthchart": "Starter: QB-1",
    "team": "Dallas Cowboys",
    "projected": 18.1,
    "opponent": "New York Giants",
    "home_away": "at ",
    "opp_rank": 25,
    "team_rank": 4,
    "avg_fp2": 22.88,
    "opp_rank_allowed_fp2": 23,
    "opp_avg_allowed_fp2": 20.13,
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
    "headlineNews": "Efficient in easy win",
    "report": "Prescott completed 21 of 27 pass attempts for 239 yards, a touchdown and an interception in Sunday's 37-10 win over the Eagles. He added 30 yards and another score on five rush attempts.",
    "analysis": "Prescott picked apart a vulnerable Philadelphia pass defense (ranked 29th heading into Week 7) and added his third rushing touchdown of the season to put the cherry on top of a solid fantasy outing. The 26-year-old has a 3:1 TD:INT ratio against defenses ranked in the bottom half of the league (four games), compared to a 0.75:1 TD:INT ratio against those who grade in the top half (three games). Prescott will get to rest on the team's upcoming bye, but he will face a Giants passing D that has been worse than the Eagles' to date, making the signal-caller a strong play come Week 9.",
    "timestamp": "2019-10-20 11:52 PM",
    "week01": 33.4,
    "week02": 28.66,
    "week03": 23.54,
    "week04": 8.62,
    "week05": 26.22,
    "week06": 18.18,
    "week07": 21.56,
    "week08": "BYE",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [33.4, 28.66, 23.54, 8.62, 26.22, 18.18, 21.56, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.3, 17.9, 24.1, 18.8, 17.5, 15.3, 19.1, 'BYE', 18.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3912547.png",
    "name": "Sam Darnold",
    "depthchart": "Starter: QB-1",
    "team": "New York Jets",
    "projected": 18.1,
    "opponent": "Miami Dolphins",
    "home_away": "at ",
    "opp_rank": 20,
    "team_rank": 32,
    "avg_fp2": 12.65,
    "opp_rank_allowed_fp2": 29,
    "opp_avg_allowed_fp2": 23.34,
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
    "headlineNews": "Cleared to play",
    "report": "Darnold (thumb) doesn't have an injury designation for Sunday's game in Miami, Rich Cimini of ESPN.com reports.",
    "analysis": "Darnold was a full practice participant from Wednesday through Friday, paving the way for him to play in an optimal matchup this weekend against the winless Dolphins. Coach Adam Gase mentioned that this thumb injury could bother Darnold for the rest of the year, but a sprain on his non-throwing hand won't keep the quarterback out of action.",
    "timestamp": "2019-11-01 03:39 PM",
    "week01": 15.0,
    "week02": "DNP",
    "week03": "DNP",
    "week04": "BYE",
    "week05": "DNP",
    "week06": 20.62,
    "week07": -2.66,
    "week08": 17.62,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [15.0, 'DNP', 'DNP', 'BYE', 'DNP', 20.62, -2.66, 17.62]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.4, 'DNP', 'DNP', 'BYE', 'DNP', 12.3, 10.8, 12.6, 18.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3918298.png",
    "name": "Josh Allen",
    "depthchart": "Starter: QB-1",
    "team": "Buffalo Bills",
    "projected": 16.2,
    "opponent": "Washington Redskins",
    "home_away": "",
    "opp_rank": 17,
    "team_rank": 23,
    "avg_fp2": 18.6,
    "opp_rank_allowed_fp2": 17,
    "opp_avg_allowed_fp2": 17.89,
    "fanduelSalary": "$7700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#005596",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 85, 150, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
    "headlineNews": "Continues sack streak",
    "report": "Allen had two sacks and a forced fumble in Sunday's win against the Jets.",
    "analysis": "Allen continues to have an outsized presence on the Jaguars defense despite playing a rotational role and now has a sack in four straight contests. The rookie first-round pick has 23 tackles (16 solo) seven sacks and two forced fumbles through his first eight games.",
    "timestamp": "2019-10-28 04:32 PM",
    "week01": 17.96,
    "week02": 22.22,
    "week03": 21.32,
    "week04": 11.72,
    "week05": 18.46,
    "week06": "BYE",
    "week07": 21.28,
    "week08": 17.26,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [17.96, 22.22, 21.32, 11.72, 18.46, 'BYE', 21.28, 17.26]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.3, 23.5, 21.4, 21.9, 7.0, 'BYE', 19.1, 14.4, 16.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16760.png",
    "name": "Jimmy Garoppolo",
    "depthchart": "Starter: QB-1",
    "team": "San Francisco 49ers",
    "projected": 16.2,
    "opponent": "Arizona Cardinals",
    "home_away": "at ",
    "opp_rank": 29,
    "team_rank": 24,
    "avg_fp2": 13.94,
    "opp_rank_allowed_fp2": 32,
    "opp_avg_allowed_fp2": 24.75,
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
    "headlineNews": "Sets career milestone in win",
    "report": "Garoppolo completed 28 of 37 passes for 317 yards with four touchdowns and no interceptions in the 49ers' 28-25 win over the Cardinals on Thursday. He also rushed three times for two yards.",
    "analysis": "Garoppolo was masterful through the first three quarters in particular, setting a career high in touchdown throws by hitting four different pass catchers for scores. He started with a 30-yard touchdown pass to George Kittle in the closing seconds of the first quarter and followed up with scoring tosses of seven, one and 21 yards to Kendrick Bourne, Emmanuel Sanders and Dante Pettis, respectively. Although he had a relatively quiet fourth quarter in comparison, Garoppolo was able to lead a key 11-play drive to kill the remaining 4:35 of clock after the Cardinals had closed to 28-25, firing an 11-yard pass to Ross Dwelley at the two-minute warning on 3rd-and-9 to seal the victory. The performance was Garoppolo's first completely turnover-free effort of the season, and he'll look to follow it up in another NFC West showdown against the Seahawks in Week 10.",
    "timestamp": "2019-10-31 08:52 PM",
    "week01": 13.44,
    "week02": 23.68,
    "week03": 11.38,
    "week04": "BYE",
    "week05": 14.94,
    "week06": 13.12,
    "week07": 7.04,
    "week08": 14.0,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [13.44, 23.68, 11.38, 'BYE', 14.94, 13.12, 7.04, 14.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.3, 11.1, 19.6, 'BYE', 15.6, 11.0, 13.3, 15.0, 16.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2578570.png",
    "name": "Jacoby Brissett",
    "depthchart": "Starter: QB-1",
    "team": "Indianapolis Colts",
    "projected": 16.0,
    "opponent": "Pittsburgh Steelers",
    "home_away": "at ",
    "opp_rank": 13,
    "team_rank": 22,
    "avg_fp2": 18.17,
    "opp_rank_allowed_fp2": 10,
    "opp_avg_allowed_fp2": 15.77,
    "fanduelSalary": "$7300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#014683",
    "tmColorDark": "#002C5F",
    "tmColorLite_rgba": "rgba(1, 70, 131, 0.2)",
    "tmColorDark_rgba": "rgba(0, 44, 95, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png",
    "headlineNews": "Slings clutch throw in win",
    "report": "Brissett completed 15 of 25 passes for 202 yards during Sunday's 15-13 win over Denver. He added 34 yards on six carries and lost a fumble during the contest.",
    "analysis": "Back on his own 10-yard line with less than two minutes to get into field-goal range, Brissett slipped out of a would-be Von Miller sack and rolled out to complete a dart to T.Y. Hilton for a gain of 35 yards to kickstart the winning drive. Brissett had probably his worst statistical game of the season Sunday against a very tough Denver pass defense, but he still found a way to make it work. Brissett has scored multiple times in five of seven games and has done well protecting the ball.  Indianapolis still typically leans heaviest on its running game and defense, but Brissett has developed as an impressive maestro when needed. Next up for the emerging quarterback is an improving Steelers defense in Week 9.",
    "timestamp": "2019-10-27 01:41 PM",
    "week01": 16.5,
    "week02": 17.34,
    "week03": 20.8,
    "week04": 23.5,
    "week05": 11.94,
    "week06": "BYE",
    "week07": 27.64,
    "week08": 9.48,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [16.5, 17.34, 20.8, 23.5, 11.94, 'BYE', 27.64, 9.48]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.1, 13.1, 21.8, 15.1, 12.6, 'BYE', 16.8, 11.5, 16.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/8439.png",
    "name": "Aaron Rodgers",
    "depthchart": "Starter: QB-1",
    "team": "Green Bay Packers",
    "projected": 16.0,
    "opponent": "Los Angeles Chargers",
    "home_away": "at ",
    "opp_rank": 6,
    "team_rank": 8,
    "avg_fp2": 20.83,
    "opp_rank_allowed_fp2": 7,
    "opp_avg_allowed_fp2": 14.5,
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
    "headlineNews": "Practices in full Thursday",
    "report": "Rodgers (knee) was a full practice participant Thursday, Matt Schneidman of The Athletic reports.",
    "analysis": "Kicking off Week 9 prep with some limitations at Wednesday's walkthrough, Rodgers took on every rep Thursday in what was considered a true practice. He'll now turn his entire attention to Sunday's matchup against a Chargers defense that has given up 8.4 yards per attempt and 12 touchdowns versus seven interceptions to quarterbacks in eight games this season.",
    "timestamp": "2019-10-31 03:27 PM",
    "week01": 12.92,
    "week02": 14.36,
    "week03": 13.3,
    "week04": 26.48,
    "week05": 9.42,
    "week06": 19.32,
    "week07": 43.76,
    "week08": 27.1,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.92, 14.36, 13.3, 26.48, 9.42, 19.32, 43.76, 27.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [21.7, 21.8, 15.1, 18.7, 19.0, 21.3, 24.7, 19.0, 16.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/5529.png",
    "name": "Philip Rivers",
    "depthchart": "Starter: QB-1",
    "team": "Los Angeles Chargers",
    "projected": 15.5,
    "opponent": "Green Bay Packers",
    "home_away": "",
    "opp_rank": 19,
    "team_rank": 6,
    "avg_fp2": 16.5,
    "opp_rank_allowed_fp2": 9,
    "opp_avg_allowed_fp2": 15.59,
    "fanduelSalary": "$7200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0080C6",
    "tmColorDark": "#002A5E",
    "tmColorLite_rgba": "rgba(0, 128, 198, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 94, 0.2)",
    "tmTextLite": "#0080C6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lac.png",
    "headlineNews": "Barely throws for over 200 yards",
    "report": "Rivers completed 19 of his 29 pass attempts for 201 yards, one touchdown and an interception in the 17-16 win Sunday over the Bears.",
    "analysis": "Rivers probably should have had a better fantasy day, as the veteran quarterback had two deep touchdown passes dropped by Mike Williams and Keenan Allen, respectively, in the second half. As a result, both drives ended in field-goal attempts. Still, the entire offense predictably struggled to generate any sort of consistent yardage against a stout Bears' defense, particularly the running game, which was held to just three yards per carry on 12 attempts. Turnovers continue to be an issue for Rivers, who has coughed up the ball nine times through eight games. However, considering he'll likely be near the top of the NFL in  pass attempts by the conclusion of Week 8, the sheer amount of opportunities he sees makes him a serviceable fantasy option most weeks.",
    "timestamp": "2019-10-27 01:26 PM",
    "week01": 24.92,
    "week02": 11.92,
    "week03": 19.62,
    "week04": 20.4,
    "week05": 6.14,
    "week06": 16.8,
    "week07": 21.16,
    "week08": 11.04,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [24.92, 11.92, 19.62, 20.4, 6.14, 16.8, 21.16, 11.04]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [19.0, 17.3, 19.7, 24.5, 18.2, 13.9, 13.9, 16.3, 15.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116407.png",
    "name": "Mason Rudolph",
    "depthchart": "Starter: QB-1",
    "team": "Pittsburgh Steelers",
    "projected": 15.4,
    "opponent": "Indianapolis Colts",
    "home_away": "",
    "opp_rank": 15,
    "team_rank": 26,
    "avg_fp2": 14.16,
    "opp_rank_allowed_fp2": 15,
    "opp_avg_allowed_fp2": 17.02,
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
    "headlineNews": "Rebounds after shaky start",
    "report": "Rudolph completed 20 of 36 passes for 251 yards, two touchdowns, and one interception in Monday's 27-14 win over the Dolphins.",
    "analysis": "Looking rusty after returning from a concussion suffered in Pittsburgh's Week 4 overtime loss to Baltimore, Rudolph's first pass of the game was intercepted by Xavien Howard. Rudolph continued to struggle and had a second interception reversed and ruled incomplete on the next offensive series. Trailing 14-0 after one quarter, Pittsburgh got things going on offense, including a 45-yard touchdown pass to Diontae Johnson and a 26-yard touchdown pass to JuJu Smith-Schuster. The Steelers have now earned victories in three of their last four games after starting the season 0-3, but this coming Sunday they'll face a tough Indianapolis team that heads into Week 9 on a three-game winning streak.",
    "timestamp": "2019-10-28 09:21 PM",
    "week01": "DNP",
    "week02": 12.18,
    "week03": 15.46,
    "week04": 16.86,
    "week05": 9.24,
    "week06": "DNP",
    "week07": "BYE",
    "week08": 17.04,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 12.18, 15.46, 16.86, 9.24, 'DNP', 'BYE', 17.04]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 6.9, 12.8, 21.5, 18.9, 'DNP', 'BYE', 15.8, 15.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3115293.png",
    "name": "Kyle Allen",
    "depthchart": "Starter: QB-1",
    "team": "Carolina Panthers",
    "projected": 14.8,
    "opponent": "Tennessee Titans",
    "home_away": "",
    "opp_rank": 16,
    "team_rank": 25,
    "avg_fp2": 11.99,
    "opp_rank_allowed_fp2": 14,
    "opp_avg_allowed_fp2": 16.54,
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
    "headlineNews": "Getting another start",
    "report": "Coach Ron Rivera said Allen will be the Panthers' starting quarterback Sunday against the Titans, Joe Person of The Athletic reports.",
    "analysis": "Cam Newton remains embedded in his rehab program, with no end in sight to his recovery from a Lisfranc injury in his left foot. As such, Allen will get his sixth consecutive start Week 9, though his output has wavered from week to week. Overall, he's completed 62 percent of his passes, averaged 211.8 passing yards per game and posted a 7:3 TD:INT. He'll aim for a bounce-back effort Sunday versus Tennessee's 15th-ranked pass defense (239.1 yards per game).",
    "timestamp": "2019-10-28 11:57 AM",
    "week01": "DNP",
    "week02": "DNP",
    "week03": 24.34,
    "week04": 3.28,
    "week05": 11.64,
    "week06": 17.38,
    "week07": "BYE",
    "week08": 3.32,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 24.34, 3.28, 11.64, 17.38, 'BYE', 3.32]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 23.2, 14.9, 14.1, 17.7, 'BYE', 6.8, 14.8]
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
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank": 11,
    "team_rank": 16,
    "avg_fp2": 16.84,
    "opp_rank_allowed_fp2": 22,
    "opp_avg_allowed_fp2": 20.12,
    "fanduelSalary": "$7800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e0aa19",
    "tmColorDark": "#300e5a",
    "tmColorLite_rgba": "rgba(224, 170, 25, 0.2)",
    "tmColorDark_rgba": "rgba(48, 14, 90, 0.2)",
    "tmTextLite": "#e0aa19",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/min.png",
    "headlineNews": "Near-perfect effort in Week 8 win",
    "report": "Cousins completed 23 of 26 passes for 285 yards with no touchdowns or interceptions in the Vikings' 19-9 win over the Redskins on Thursday. He also rushed twice for two yards.",
    "analysis": "Playing without Adam Thielen (hamstring), Cousins turned in his highest completion percentage (88.5) of the season and averaged an impressive 11.0 yards per attempt. Unsurprisingly, Cousins relied heavily on his two most talented healthy players, Stefon Diggs and Dalvin Cook, connecting with the duo for 12 of his 23 completions. Cousins fell just short of the 300-yard mark for the first time in four games, but he's now thrown just a single interception since Week 2. He'll look to keep up his strong play against the Chiefs in a Week 9 matchup a week from Sunday.",
    "timestamp": "2019-10-24 08:56 PM",
    "week01": 14.32,
    "week02": 10.9,
    "week03": 12.56,
    "week04": 7.32,
    "week05": 20.54,
    "week06": 28.32,
    "week07": 29.18,
    "week08": 11.6,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.32, 10.9, 12.56, 7.32, 20.54, 28.32, 29.18, 11.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [20.0, 16.9, 18.4, 13.1, 12.0, 12.2, 17.6, 18.2, 14.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2330.png",
    "name": "Tom Brady",
    "depthchart": "Starter: QB-1",
    "team": "New England Patriots",
    "projected": 14.6,
    "opponent": "Baltimore Ravens",
    "home_away": "at ",
    "opp_rank": 26,
    "team_rank": 7,
    "avg_fp2": 19.29,
    "opp_rank_allowed_fp2": 13,
    "opp_avg_allowed_fp2": 16.08,
    "fanduelSalary": "$7900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#C60C30",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png",
    "headlineNews": "Good to go this week",
    "report": "Brady (right shoulder) has been removed from the Patriots' Week 9 injury report after practicing fully Thursday, Mike Reiss of ESPN.com reports.",
    "analysis": "Brady was listed as a limited practice participant Wednesday, but any sliver of doubt regarding his status for Sunday night's game against the Ravens can now be discarded. The Patriots have reeled off eight straight wins to start the season, but a tough test awaits this weekend on the road against a 5-2 Ravens team that has won three straight and is fresh off its bye week.",
    "timestamp": "2019-10-31 01:31 PM",
    "week01": 25.64,
    "week02": 24.66,
    "week03": 20.14,
    "week04": 4.7,
    "week05": 24.92,
    "week06": 22.96,
    "week07": 12.96,
    "week08": 18.36,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [25.64, 24.66, 20.14, 4.7, 24.92, 22.96, 12.96, 18.36]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.1, 28.2, 20.8, 16.9, 18.5, 18.4, 17.7, 20.8, 14.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2573079.png",
    "name": "Carson Wentz",
    "depthchart": "Starter: QB-1",
    "team": "Philadelphia Eagles",
    "projected": 14.6,
    "opponent": "Chicago Bears",
    "home_away": "",
    "opp_rank": 10,
    "team_rank": 21,
    "avg_fp2": 17.97,
    "opp_rank_allowed_fp2": 6,
    "opp_avg_allowed_fp2": 14.49,
    "fanduelSalary": "$7400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#386168",
    "tmColorDark": "#004C54",
    "tmColorLite_rgba": "rgba(56, 97, 104, 0.2)",
    "tmColorDark_rgba": "rgba(0, 76, 84, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    "headlineNews": "Falls short of 200-yard mark again",
    "report": "Wentz completed 17 of 24 passes for 172 yards and a touchdown in Sunday's 31-13 win over Buffalo. He added 35 yards on eight rushing attempts.",
    "analysis": "Wentz guided his team back into the win column, but he failed to make fantasy owners happy by falling short of 200 passing yards for the fourth time in the past five games. He finally broke through against Buffalo's stout secondary with a five-yard touchdown pass to Dallas Goedert less than a minute before halftime, then watched the running game take over in the second half, with three different Eagles running backs finding paydirt. Given Wentz's uninspiring recent numbers, his owners should consider looking elsewhere when the Bears come to town in Week 9.",
    "timestamp": "2019-10-27 02:10 PM",
    "week01": 25.02,
    "week02": 21.54,
    "week03": 21.66,
    "week04": 19.7,
    "week05": 12.06,
    "week06": 21.54,
    "week07": 7.84,
    "week08": 14.38,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [25.02, 21.54, 21.66, 19.7, 12.06, 21.54, 7.84, 14.38]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.3, 18.8, 15.9, 10.7, 18.6, 10.2, 15.9, 13.8, 14.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/8664.png",
    "name": "Ryan Fitzpatrick",
    "depthchart": "Starter: QB-1",
    "team": "Miami Dolphins",
    "projected": 14.2,
    "opponent": "New York Jets",
    "home_away": "",
    "opp_rank": 24,
    "team_rank": 30,
    "avg_fp2": 9.7,
    "opp_rank_allowed_fp2": 16,
    "opp_avg_allowed_fp2": 17.2,
    "fanduelSalary": "$7000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#008E97",
    "tmColorDark": "#005778",
    "tmColorLite_rgba": "rgba(0, 142, 151, 0.2)",
    "tmColorDark_rgba": "rgba(0, 87, 120, 0.2)",
    "tmTextLite": "#f5821f",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/mia.png",
    "headlineNews": "Retains starting gig",
    "report": "Fitzpatrick will remain the Dolphins' starting quarterback Week 9 against the Jets, Joe Schad of The Palm Beach Post reports.",
    "analysis": "Fitzpatrick struggled to move the offense after the first quarter of Monday's loss to the Steelers, but he'll nonetheless hold on to the reigns for at least one more contest. Over his last two starts, Fitzpatrick has compiled a meager 3:3 TD:INT and has fumbled four times, losing one of them. The veteran is set for a favorable matchup in Week 9, putting him under consideration in leagues that start two quarterbacks or utilize a QB flex spot. Even if Fitzpatrick shows improved form in his outings to come, it wouldn't be a surprise if the winless Dolphins eventually turn back to second-year signal-caller Josh Rosen later in the season.",
    "timestamp": "2019-10-30 09:16 AM",
    "week01": 11.2,
    "week02": 1.16,
    "week03": 1.16,
    "week04": "DNP",
    "week05": "BYE",
    "week06": 9.78,
    "week07": 21.58,
    "week08": 13.3,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.2, 1.16, 1.16, 'DNP', 'BYE', 9.78, 21.58, 13.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.9, 12.3, 3.7, 'DNP', 'BYE', 4.5, 12.7, 12.3, 14.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3039707.png",
    "name": "Mitchell Trubisky",
    "depthchart": "Starter: QB-1",
    "team": "Chicago Bears",
    "projected": 13.1,
    "opponent": "Philadelphia Eagles",
    "home_away": "at ",
    "opp_rank": 21,
    "team_rank": 29,
    "avg_fp2": 10.63,
    "opp_rank_allowed_fp2": 19,
    "opp_avg_allowed_fp2": 19.48,
    "fanduelSalary": "$6500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#c36835",
    "tmColorDark": "#0B162A",
    "tmColorLite_rgba": "rgba(195, 104, 53, 0.2)",
    "tmColorDark_rgba": "rgba(11, 22, 42, 0.2)",
    "tmTextLite": "#c36835",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png",
    "headlineNews": "Gets shaky vote of confidence",
    "report": "The Bears will continue starting Trubisky, though the team expects to see improvement soon,  Patrick FInley of the Chicago Sun TImes reports.",
    "analysis": "Coach Matt Nagy explained that Trubisky has time to turn things around this season, and he noted that his quaterback is still learning the offense, though if the mistakes continue, the staff will be forced to make some tough decisions. Obviously, Trubisky hasn't been a solid fantasy option this year, as he's thrown touchdown passes in just two games while his rushing yardage has mostly evaporated from what he produced in 2018. Should he eventually lose the starting job, Chase Daniel would be a slight upgrade for fantasy owners. For now, Trubisky's downside makes him a risky player to trust in fantasy lineups.",
    "timestamp": "2019-10-28 05:05 PM",
    "week01": 9.22,
    "week02": 5.6,
    "week03": 20.44,
    "week04": -1.64,
    "week05": "DNP",
    "week06": "BYE",
    "week07": 22.04,
    "week08": 8.12,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.22, 5.6, 20.44, -1.64, 'DNP', 'BYE', 22.04, 8.12]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.8, 11.3, 13.8, 14.3, 'DNP', 'BYE', 9.1, 15.4, 13.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3917315.png",
    "name": "Kyler Murray",
    "depthchart": "Starter: QB-1",
    "team": "Arizona Cardinals",
    "projected": 12.7,
    "opponent": "San Francisco 49ers",
    "home_away": "",
    "opp_rank": 1,
    "team_rank": 19,
    "avg_fp2": 18.79,
    "opp_rank_allowed_fp2": 2,
    "opp_avg_allowed_fp2": 7.53,
    "fanduelSalary": "$7200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#97233F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(151, 35, 63, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#97233F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
    "headlineNews": "Pair of scores in defeat",
    "report": "Murray completed 17 of 24 passes for 241 yards with two touchdowns and no interceptions in the Cardinals' 28-25 loss to the 49ers on Thursday. He also rushed five times for 34 yards and threw a two-point conversion pass.",
    "analysis": "Murray unsurprisingly struggled against the suffocating 49ers defense for the majority of the contest, but one fourth-quarter play turned both the dynamic of the game and his individual stat line around. Murray hit fellow rookie Andy Isabella  for an 88-yard touchdown with 4:53 remaining and also connected with Kenyan Drake on the ensuing two-point conversion attempt, bringing the Cardinals to within three points. Although Murray never got another shot with the ball, fantasy managers had to be glad to see him bounce back from a five-game stretch during which he failed to throw a touchdown pass in four contests. Murray will look to build on Thursday's effort versus the Buccaneers in a Week 10 matchup.",
    "timestamp": "2019-10-31 09:00 PM",
    "week01": 24.62,
    "week02": 18.36,
    "week03": 19.82,
    "week04": 17.34,
    "week05": 24.32,
    "week06": 28.8,
    "week07": 6.96,
    "week08": 10.1,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [24.62, 18.36, 19.82, 17.34, 24.32, 28.8, 6.96, 10.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.6, 14.4, 14.2, 19.5, 17.1, 21.9, 16.1, 19.5, 12.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14876.png",
    "name": "Ryan Tannehill",
    "depthchart": "Starter: QB-1",
    "team": "Tennessee Titans",
    "projected": 11.6,
    "opponent": "Carolina Panthers",
    "home_away": "at ",
    "opp_rank": 5,
    "team_rank": 28,
    "avg_fp2": 11.19,
    "opp_rank_allowed_fp2": 8,
    "opp_avg_allowed_fp2": 15.58,
    "fanduelSalary": "$7100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#4495D1",
    "tmColorDark": "#002A5C",
    "tmColorLite_rgba": "rgba(68, 149, 209, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 92, 0.2)",
    "tmTextLite": "#4495D1",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png",
    "headlineNews": "Wins second consecutive start",
    "report": "Tannehill completed 21 of 33 pass attempts for 193 yards and three touchdowns during Sunday's 27-23 win against the Buccaneers.",
    "analysis": "The 31-year-old signal-caller has offered a welcome change of pace at the quarterback position for Tennessee, completing better than 70 percent of his passes and boasting a 5:1 TD:INT ratio in two games as the team's starter. Week 9 presents a challenging matchup with Carolina's top-10 pass defense awaiting on the slate, but Tannehill has proven capable of producing against challenging opponents before, lighting up the Chargers' talented secondary for 312 passing yards and two touchdowns in Week 7.",
    "timestamp": "2019-10-27 03:03 PM",
    "week01": -0.2,
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": 5.36,
    "week07": 20.18,
    "week08": 19.42,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [-0.2, 'DNP', 'DNP', 'DNP', 'DNP', 5.36, 20.18, 19.42]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.8, 'DNP', 'DNP', 'DNP', 'DNP', 0.1, 12.2, 18.8, 11.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2574511.png",
    "name": "Brandon Allen",
    "depthchart": "Starter: QB-1",
    "team": "Denver Broncos",
    "projected": 8.0,
    "opponent": "Cleveland Browns",
    "home_away": "",
    "opp_rank": 7,
    "team_rank": 27,
    "avg_fp2": 0.0,
    "opp_rank_allowed_fp2": 21,
    "opp_avg_allowed_fp2": 19.57,
    "fanduelSalary": "$6000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e17757",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(225, 119, 87, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#e17757",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/den.png",
    "headlineNews": "May be in line for multiple starts",
    "report": "Allen, who was named the starting quarterback for Sunday's game against the Browns, could be in store for an extended run atop the depth chart with Joe Flacco expected to miss six weeks due to a bulging disc in his neck, Mike Klis of 9News Denver reports.",
    "analysis": "While the two medical opinions Flacco has received leave him optimistic that he'll avoid surgery, the Broncos are likely leaning toward placing him on season-ending injured reserve, per Tom Pelissero of NFL Network. Flacco's absence presents Allen, a 2016 sixth-round pick, to see his first NFL action, though the 27-year-old won't necessarily be guaranteed any starts beyond this weekend. Drew Lock (thumb) is targeting a return from IR following the Broncos' bye in Week 10, and Denver is presumably incentivized to give the rookie second-round pick a look under center at some point.",
    "timestamp": "2019-10-31 11:06 AM",
    "week01": 0.0,
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": "DNP",
    "week08": "DNP",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.7, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 8.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/11128.png",
    "name": "Matt Moore",
    "depthchart": "Starter: QB-1",
    "team": "Kansas City Chiefs",
    "projected": 2.6,
    "opponent": "Minnesota Vikings",
    "home_away": "",
    "opp_rank": 8,
    "team_rank": 2,
    "avg_fp2": 9.15,
    "opp_rank_allowed_fp2": 11,
    "opp_avg_allowed_fp2": 16.03,
    "fanduelSalary": "$6500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Uncertain for another start",
    "report": "Moore's role for Week 9 against Minnesota is up in the air, with fellow quarterback Patrick Mahomes (knee) listed as questionable on the injury report and considered a game-time decision, Adam Teicher of ESPN.com reports.",
    "analysis": "A 1 p.m. ET Sunday kickoff is good news for fantasy managers, as the Chiefs likely will place Mahomes on the inactive list 90 minutes before kickoff if they don't think he's ready to start. Moore filled in capably last week against Green Bay, completing 24 of 36 passes for 267 yards and a pair of touchdowns. He'll face another solid defense if he gets the start this weekend.",
    "timestamp": "2019-11-01 02:03 PM",
    "week01": -0.1,
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": "DNP",
    "week08": 18.98,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [-0.1, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 18.98]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.7, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 18.0, 2.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4040616.png",
    "name": "Dwayne Haskins",
    "depthchart": "Starter: QB-1",
    "team": "Washington Redskins",
    "projected": 1.8,
    "opponent": "Buffalo Bills",
    "home_away": "at ",
    "opp_rank": 3,
    "team_rank": 31,
    "avg_fp2": 1.95,
    "opp_rank_allowed_fp2": 5,
    "opp_avg_allowed_fp2": 13.22,
    "fanduelSalary": "$6100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#773141",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(119, 49, 65, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png",
    "headlineNews": "Tabbed for first NFL start",
    "report": "Haskins will start Sunday's game in Buffalo, JP Finlay of NBC Sports Washington reports.",
    "analysis": "With Case Keenum in the concussion protocol, Colt McCoy will serve as the backup quarterback. Haskins gets his first NFL start in a difficult spot, facing a Bills defense that ranks third in both yards per pass attempt (6.0) and passing yards per game (194.4) while allowing five touchdowns and six interceptions. The rookie has played twice this season as a mid-game replacement, throwing four interceptions on 22 passes. Per Finlay, interim coach Bill Callahan declined to comment on which quarterback might serve as the starter beyond Week 9.",
    "timestamp": "2019-11-01 10:56 AM",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": 3.58,
    "week05": "DNP",
    "week06": "DNP",
    "week07": "DNP",
    "week08": 0.32,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 3.58, 'DNP', 'DNP', 'DNP', 0.32]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 7.0, 'DNP', 'DNP', 'DNP', 1.9, 1.8]
                    }
                    
                    ]
               }
            }];




$scope.positionRB = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3051392.png",
    "name": "Ezekiel Elliott",
    "depthchart": "Starter: RB-1",
    "team": "Dallas Cowboys",
    "projected": 19.9,
    "opponent": "New York Giants",
    "home_away": "at ",
    "opp_rank": 22,
    "team_rank": 4,
    "avg_fp2": 17.67,
    "opp_rank_allowed_fp2": 20,
    "opp_avg_allowed_fp2": 22.21,
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
    "headlineNews": "Scores, reaches century mark in win",
    "report": "Elliott ran the ball 22 times for 111 yards and a touchdown, adding 36 more yards on six receptions (seven targets) in Sunday's 37-10 win over the Eagles.",
    "analysis": "The Cowboys were in desperate need of a win after dropping three consecutive contests, so coach Jason Garrett turned to his star back early and often in a blowout victory. Elliott had plenty of lanes to plow through (5.0 yards per carry) with the healthy return of starting tackles Tyron Smith and La'el Collins. The 24-year-old has been putting up RB1 numbers through six games (602 yards and six touchdowns), but we could see an uptick in production after the team's Week 8 bye now that Dallas' offensive line is the healthiest it has been all year.",
    "timestamp": "2019-10-20 09:35 PM",
    "week01": 12.8,
    "week02": 19.0,
    "week03": 14.9,
    "week04": 13.5,
    "week05": 16.1,
    "week06": 23.7,
    "week07": 23.7,
    "week08": "BYE",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.8, 19.0, 14.9, 13.5, 16.1, 23.7, 23.7, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [19.3, 16.8, 18.6, 11.0, 18.6, 15.2, 15.9, 'BYE', 19.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116593.png",
    "name": "Dalvin Cook",
    "depthchart": "Starter: RB-1",
    "team": "Minnesota Vikings",
    "projected": 19.6,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank": 30,
    "team_rank": 3,
    "avg_fp2": 22.26,
    "opp_rank_allowed_fp2": 31,
    "opp_avg_allowed_fp2": 27.21,
    "fanduelSalary": "$9000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e0aa19",
    "tmColorDark": "#300e5a",
    "tmColorLite_rgba": "rgba(224, 170, 25, 0.2)",
    "tmColorDark_rgba": "rgba(48, 14, 90, 0.2)",
    "tmTextLite": "#e0aa19",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/min.png",
    "headlineNews": "Compiles 171 total yards in win",
    "report": "Cook rushed 23 times for 98 yards and a touchdown and brought in five of six targets for 73 yards in the Vikings' 19-9 win over the Redskins on Thursday.",
    "analysis": "Cook made almost as much noise through the air as he did on the ground, checking in second only to Stefon Diggs in receptions, receiving yardage and targets. Cook's exploits in the passing game helped make up for the absence of Adam Thielen (hamstring) and led to his second-best receiving yardage total of the campaign. Cook fell just short of his sixth 100-yard game of the season, but he'll be an elite option in all formats heading into a Week 9 battle against the Chiefs a week from Sunday.",
    "timestamp": "2019-10-24 08:43 PM",
    "week01": 25.0,
    "week02": 26.6,
    "week03": 22.3,
    "week04": 16.0,
    "week05": 22.8,
    "week06": 12.4,
    "week07": 27.4,
    "week08": 25.6,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [25.0, 26.6, 22.3, 16.0, 22.8, 12.4, 27.4, 25.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.4, 11.6, 11.5, 10.0, 13.0, 11.0, 11.0, 14.0, 19.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15825.png",
    "name": "Le'Veon Bell",
    "depthchart": "Starter: RB-1",
    "team": "New York Jets",
    "projected": 19.0,
    "opponent": "Miami Dolphins",
    "home_away": "at ",
    "opp_rank": 31,
    "team_rank": 31,
    "avg_fp2": 11.66,
    "opp_rank_allowed_fp2": 29,
    "opp_avg_allowed_fp2": 26.5,
    "fanduelSalary": "$7000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#125740",
    "tmColorDark": "#003f2d",
    "tmColorLite_rgba": "rgba(18, 87, 64, 0.2)",
    "tmColorDark_rgba": "rgba(0, 63, 45, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png",
    "headlineNews": "Primed for more touches",
    "report": "Coach Adam Gase blames himself for Bell getting only 12 touches in Sunday's 29-15 loss to the Jaguars, Rich Cimini of ESPN.com reports. \"We have to make sure [Bell] has touches,\" Gase said. \"Last week was bad. That was on me.\"",
    "analysis": "Overall team strength tends to be a major factor for running back workloads, though less so for prolific pass catchers like Bell, who  averaged 6.3 and 5.7 receptions per game his final two seasons in Pittsburgh. He's down to 4.6 through seven appearances in 2019, but with just 5.8 yards per catch as well as career-low marks for carries per game (15.6), rushing yards per game (49.9) and yards per carry (3.2). Bell ranks second among all backs with 91 percent snap share, and a Week 9 matchup with the Dolphins should at least provide temporary relief. Miami has given up the fourth-most fantasy points to running backs under standard scoring, yielding 4.9 yards per carry and 7.7 yards per target to the position, along with nine touchdowns in seven games.",
    "timestamp": "2019-10-30 08:59 AM",
    "week01": 20.2,
    "week02": 15.9,
    "week03": 8.3,
    "week04": "BYE",
    "week05": 12.3,
    "week06": 11.8,
    "week07": 8.1,
    "week08": 5.0,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [20.2, 15.9, 8.3, 'BYE', 12.3, 11.8, 8.1, 5.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [20.5, 22.8, 12.7, 'BYE', 16.6, 21.0, 15.9, 13.7, 19.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4047365.png",
    "name": "Josh Jacobs",
    "depthchart": "Starter: RB-1",
    "team": "Oakland Raiders",
    "projected": 17.0,
    "opponent": "Detroit Lions",
    "home_away": "",
    "opp_rank": 26,
    "team_rank": 7,
    "avg_fp2": 14.53,
    "opp_rank_allowed_fp2": 30,
    "opp_avg_allowed_fp2": 27.0,
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
    "headlineNews": "Good to go in Week 9",
    "report": "Jacobs (shoulder) does not carry an injury designation for Sunday's game against the Lions.",
    "analysis": "Jacobs was limited at practice all week as he managed a shoulder issue, but it's something he played through in Week 8's loss to the Texans, en route leading the Oakland backfield with 15 carries for 66 yards and two catches for 15 yards. He'll look to up his production Sunday against a Lions defense that is allowing an average of 130.7 rushing yards per game, which ranks 26th in the NFL.",
    "timestamp": "2019-11-01 02:34 PM",
    "week01": 23.8,
    "week02": 9.9,
    "week03": 4.4,
    "week04": 11.8,
    "week05": 27.8,
    "week06": "BYE",
    "week07": 14.9,
    "week08": 9.1,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [23.8, 9.9, 4.4, 11.8, 27.8, 'BYE', 14.9, 9.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.0, 15.5, 11.9, 12.0, 10.1, 'BYE', 10.2, 8.9, 17.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3929630.png",
    "name": "Saquon Barkley",
    "depthchart": "Starter: RB-1",
    "team": "New York Giants",
    "projected": 16.4,
    "opponent": "Dallas Cowboys",
    "home_away": "",
    "opp_rank": 15,
    "team_rank": 17,
    "avg_fp2": 16.48,
    "opp_rank_allowed_fp2": 21,
    "opp_avg_allowed_fp2": 21.8,
    "fanduelSalary": "$8500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#0B2265",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(11, 34, 101, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png",
    "headlineNews": "Scores receiving touchdown",
    "report": "Barkley carried 19 times for 64 yards while catching eight of 10 targets for 79 yards and another score during Sunday's 31-26 loss to the Lions.",
    "analysis": "Barkley struggled to run the ball for the second straight game, averaging just 3.4 yards per carry against a respectable Lions front. He made up for it by nearly doubling his receiving yardage total for the season and adding a four-yard touchdown catch in the fourth quarter. Although Barkley's ankle injury disrupted his start to the campaign, he has exceeded 130 scrimmage yards three times in five appearances while adding three total touchdowns. His next opportunity to contribute will come in a Week 9 Monday night matchup at home against the Cowboys.",
    "timestamp": "2019-10-27 05:34 PM",
    "week01": 15.9,
    "week02": 21.0,
    "week03": 5.7,
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": 15.5,
    "week08": 24.3,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [15.9, 21.0, 5.7, 'DNP', 'DNP', 'DNP', 15.5, 24.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [20.5, 18.0, 12.4, 'DNP', 'DNP', 'DNP', 13.5, 17.3, 16.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3128720.png",
    "name": "Nick Chubb",
    "depthchart": "Starter: RB-1",
    "team": "Cleveland Browns",
    "projected": 16.0,
    "opponent": "Denver Broncos",
    "home_away": "at ",
    "opp_rank": 19,
    "team_rank": 12,
    "avg_fp2": 18.26,
    "opp_rank_allowed_fp2": 16,
    "opp_avg_allowed_fp2": 20.62,
    "fanduelSalary": "$8100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FF3C00",
    "tmColorDark": "#311D00",
    "tmColorLite_rgba": "rgba(255, 60, 0, 0.2)",
    "tmColorDark_rgba": "rgba(49, 29, 0, 0.2)",
    "tmTextLite": "#FF3C00",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
    "headlineNews": "Rebounds from rough start",
    "report": "Chubb carried the ball 20 times for 131 yards and caught his only target for seven yards in Sunday's 27-13 loss to the Patriots.",
    "analysis": "His final numbers were good, but Chubb fumbled the ball twice in the first quarter, helping to dig a 17-0 hole the Browns couldn't climb out of. The second-year back has topped 100 rushing yards in three of the last four games, giving him plenty of momentum heading into next week's game in Denver.",
    "timestamp": "2019-10-27 07:02 PM",
    "week01": 10.0,
    "week02": 17.8,
    "week03": 15.1,
    "week04": 37.8,
    "week05": 10.4,
    "week06": 26.4,
    "week07": "BYE",
    "week08": 10.3,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.0, 17.8, 15.1, 37.8, 10.4, 26.4, 'BYE', 10.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.6, 20.2, 11.2, 16.0, 11.8, 13.6, 'BYE', 11.2, 16.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3042519.png",
    "name": "Aaron Jones",
    "depthchart": "Starter: RB-1",
    "team": "Green Bay Packers",
    "projected": 15.6,
    "opponent": "Los Angeles Chargers",
    "home_away": "at ",
    "opp_rank": 23,
    "team_rank": 18,
    "avg_fp2": 20.39,
    "opp_rank_allowed_fp2": 26,
    "opp_avg_allowed_fp2": 23.81,
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
    "headlineNews": "Good to go in Week 9",
    "report": "Jones (shoulder) put in a full practice Friday and doesn't carry an injury designation into Sunday's game against the Chargers, Olivia Reiner of the Milwaukee Journal Sentinel reports.",
    "analysis": "Jones was a limited participant in the Packers' first two practices of Week 9, but there never seemed to be much overwhelming concern about his availability to play Sunday. Expect Jones to serve in his usual capacity as the Packers' lead running back, though he could see his involvement in the passing game scaled back a little bit if top wideout Davante Adams (toe) -- who is being viewed as a game-time decision -- is cleared to play after a four-week absence.",
    "timestamp": "2019-11-01 12:43 PM",
    "week01": 4.4,
    "week02": 23.0,
    "week03": 14.8,
    "week04": 14.8,
    "week05": 45.7,
    "week06": 6.0,
    "week07": 16.3,
    "week08": 38.1,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.4, 23.0, 14.8, 14.8, 45.7, 6.0, 16.3, 38.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.7, 11.5, 11.4, 9.3, 13.3, 19.0, 12.9, 14.0, 15.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2979477.png",
    "name": "Tevin Coleman",
    "depthchart": "Starter: RB-1",
    "team": "San Francisco 49ers",
    "projected": 15.3,
    "opponent": "Arizona Cardinals",
    "home_away": "at ",
    "opp_rank": 25,
    "team_rank": 2,
    "avg_fp2": 15.86,
    "opp_rank_allowed_fp2": 18,
    "opp_avg_allowed_fp2": 21.45,
    "fanduelSalary": "$7200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "Big downturn in Week 9 win",
    "report": "Coleman rushed 12 times for 23 yards and secured two of four targets for 13 yards in the 49ers' 28-25 win over the Cardinals on Thursday.",
    "analysis": "Four days after racking up four total touchdowns at the expense of the Panthers, Coleman came crashing back to earth in an underwhelming performance. Backfield mate Matt Breida took control of the backfield Thursday by turning 15 carries into 78 yards, but the timeshare between the two backs should continue in a fairly even split on the majority of weeks. Coleman tied his lowest rushing total of the season with Thursday's tally, so he'll look to bounce back against the Seahawks in a Week 10 divisional matchup a week from Monday.",
    "timestamp": "2019-10-31 09:49 PM",
    "week01": 6.6,
    "week02": "DNP",
    "week03": "DNP",
    "week04": "BYE",
    "week05": 15.7,
    "week06": 13.1,
    "week07": 7.1,
    "week08": 36.8,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.6, 'DNP', 'DNP', 'BYE', 15.7, 13.1, 7.1, 36.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.2, 'DNP', 'DNP', 'BYE', 3.0, 8.3, 8.8, 12.2, 15.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3117251.png",
    "name": "Christian McCaffrey",
    "depthchart": "Starter: RB-1",
    "team": "Carolina Panthers",
    "projected": 14.6,
    "opponent": "Tennessee Titans",
    "home_away": "",
    "opp_rank": 12,
    "team_rank": 10,
    "avg_fp2": 27.04,
    "opp_rank_allowed_fp2": 11,
    "opp_avg_allowed_fp2": 19.21,
    "fanduelSalary": "$9700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0085CA",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 133, 202, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#0085CA",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/car.png",
    "headlineNews": "Elevates to full participant",
    "report": "McCaffrey (knee) practiced in full Thursday, Jourdan Rodrigue of The Athletic reports.",
    "analysis": "After McCaffrey was a limited participant at Wednesday's session, coach Ron Rivera told Rodrigue that he had \"no concern\" about McCaffrey's health. With his elevation to FP on Thursday, McCaffrey is good to go as the Panthers' workhorse back.",
    "timestamp": "2019-10-31 11:53 AM",
    "week01": 37.9,
    "week02": 6.3,
    "week03": 26.3,
    "week04": 28.9,
    "week05": 44.7,
    "week06": 19.7,
    "week07": "BYE",
    "week08": 25.5,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [37.9, 6.3, 26.3, 28.9, 44.7, 19.7, 'BYE', 25.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.8, 20.0, 16.6, 17.6, 18.0, 14.2, 'BYE', 17.2, 14.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4035538.png",
    "name": "David Montgomery",
    "depthchart": "Starter: RB-1",
    "team": "Chicago Bears",
    "projected": 14.2,
    "opponent": "Philadelphia Eagles",
    "home_away": "at ",
    "opp_rank": 8,
    "team_rank": 26,
    "avg_fp2": 9.97,
    "opp_rank_allowed_fp2": 6,
    "opp_avg_allowed_fp2": 16.73,
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
    "headlineNews": "Breaks century mark",
    "report": "Montgomery carried 27 times for 135 yards and a touchdown while catching four passes for 12 yards in the Bears' 17-16 loss to the Chargers on Sunday.",
    "analysis": "Montgomery had a season-high 27 rushing attempts, and he took full advantage of a Los Angeles defense that was without both starting defensive tackles. In the first half, he had three carries from inside the five-yard line but was stopped on each attempt. However, on his first red-zone attempt of the second half, he ran up the middle for a four-yard score. This was the first time all season that he had more than 67 rushing yards, and although this performance gives fantasy owners hope, he may need another strong performance to become a trusted fantasy option.",
    "timestamp": "2019-10-27 02:37 PM",
    "week01": 5.0,
    "week02": 13.3,
    "week03": 9.6,
    "week04": 8.2,
    "week05": 10.1,
    "week06": "BYE",
    "week07": 0.9,
    "week08": 22.7,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.0, 13.3, 9.6, 8.2, 10.1, 'BYE', 0.9, 22.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.0, 2.4, 7.7, 10.0, 7.8, 'BYE', 9.7, 9.5, 14.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3919596.png",
    "name": "Chris Carson",
    "depthchart": "Starter: RB-1",
    "team": "Seattle Seahawks",
    "projected": 14.2,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "",
    "opp_rank": 1,
    "team_rank": 9,
    "avg_fp2": 14.5,
    "opp_rank_allowed_fp2": 4,
    "opp_avg_allowed_fp2": 13.93,
    "fanduelSalary": "$8200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#69BE28",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(105, 190, 40, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#69BE28",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
    "headlineNews": "Finds paydirt in win",
    "report": "Carson rushed 20 times for 90 yards and a touchdown in Sunday's 27-20 win over the Falcons.",
    "analysis": "In a fifth straight game with 20 or more carries, Carson produced well with 4.5 YPC, although he failed to haul in his only target. It's a positive sign that he still managed to be a workhorse despite Rashaad Penny finally coming to life by turning eight carries into 55 yards (6.9 YPC). Now that Penny's healthy, Carson will need to stay on top of his game to avoid losing touches, but his fantasy value should be safe as long as he's producing like this. Carson will look to keep it going in Week 9 against the Buccaneers.",
    "timestamp": "2019-10-27 01:51 PM",
    "week01": 21.1,
    "week02": 8.2,
    "week03": 3.6,
    "week04": 16.5,
    "week05": 18.8,
    "week06": 23.9,
    "week07": 8.9,
    "week08": 15.0,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [21.1, 8.2, 3.6, 16.5, 18.8, 23.9, 8.9, 15.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.2, 16.0, 17.3, 8.9, 11.2, 14.7, 10.4, 11.5, 14.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3043078.png",
    "name": "Derrick Henry",
    "depthchart": "Starter: RB-1",
    "team": "Tennessee Titans",
    "projected": 14.1,
    "opponent": "Carolina Panthers",
    "home_away": "at ",
    "opp_rank": 27,
    "team_rank": 20,
    "avg_fp2": 13.6,
    "opp_rank_allowed_fp2": 27,
    "opp_avg_allowed_fp2": 23.91,
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
    "headlineNews": "Runs angry following fumble",
    "report": "Henry ran for 75 yards and fumbled once on 16 carries, while hauling in his only target for eight yards during Sunday's 27-23 win against the Buccaneers.",
    "analysis": "Just two of Henry's six first-half runs yielded positive yardage, but following his lost fumble on Tennessee's opening drive of the second half, he peeled off an 18-yard run on his very next carry, and later in the contest, he added a 15-yard scamper on Tennessee's go-ahead drive. His pass-catching upside remains low with zero touchdowns and 53 total receiving yards since Week 1, but his 18.9 carries-per-game average and six total touchdowns keep him a viable running back option. In Week 9, Henry and the Titans' ground attack will be going up against a Panthers defense that only allowed one rusher to exceed 70 yards against them between Weeks 4 and 7.",
    "timestamp": "2019-10-27 01:57 PM",
    "week01": 28.4,
    "week02": 16.3,
    "week03": 11.1,
    "week04": 11.3,
    "week05": 13.8,
    "week06": 3.8,
    "week07": 17.3,
    "week08": 6.8,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [28.4, 16.3, 11.1, 11.3, 13.8, 3.8, 17.3, 6.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.1, 18.7, 12.9, 11.5, 13.6, 8.3, 18.7, 9.1, 14.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3052117.png",
    "name": "Phillip Lindsay",
    "depthchart": "Starter: RB-1",
    "team": "Denver Broncos",
    "projected": 13.2,
    "opponent": "Cleveland Browns",
    "home_away": "",
    "opp_rank": 29,
    "team_rank": 16,
    "avg_fp2": 12.71,
    "opp_rank_allowed_fp2": 22,
    "opp_avg_allowed_fp2": 23.04,
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
    "headlineNews": "Logs full practice",
    "report": "Lindsay (wrist) returned to a full practice Thursday, Jeff Legwold of ESPN.com reports.",
    "analysis": "Lindsay was limited at practice Wednesday and the fact that a wrist issue was listed as the reason why was worth noting, given that the running back had offseason wrist surgery. His full participation Thursday should ease concerns of any sort of notable setback, and Lindsay is on track to continue to work in a backfield time-share with Royce Freeman on Sunday against the Browns.",
    "timestamp": "2019-10-31 03:24 PM",
    "week01": 8.6,
    "week02": 8.6,
    "week03": 27.0,
    "week04": 6.5,
    "week05": 22.7,
    "week06": 14.5,
    "week07": 3.7,
    "week08": 10.1,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.6, 8.6, 27.0, 6.5, 22.7, 14.5, 3.7, 10.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.9, 14.1, 9.5, 14.3, 14.7, 15.0, 15.1, 14.3, 13.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3115364.png",
    "name": "Leonard Fournette",
    "depthchart": "Starter: RB-1",
    "team": "Jacksonville Jaguars",
    "projected": 12.0,
    "opponent": "Houston Texans",
    "home_away": "",
    "opp_rank": 5,
    "team_rank": 5,
    "avg_fp2": 15.86,
    "opp_rank_allowed_fp2": 12,
    "opp_avg_allowed_fp2": 19.75,
    "fanduelSalary": "$7700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#006778",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 103, 120, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#006778",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/jax.png",
    "headlineNews": "Piles up yards but no TD again",
    "report": "Fournette rushed 19 times for 76 yards and caught all seven of his targets for another 60 in Sunday's 29-15 win over the Jets.",
    "analysis": "Fournette ripped off a 66-yard run on his first carry, but he was bottled up the rest of the way. What was even more frustrating for fantasy owners is that Fournette's inability to convert from in close continued, highlighted by a pair of failed attempts from the 1-yard line in the fourth quarter, the second of which lost seven yards. The 24-year-old running back has 1,054 scrimmage yards but just one touchdown heading into a Week 9 clash against the AFC South rival Texans.",
    "timestamp": "2019-10-27 01:45 PM",
    "week01": 9.4,
    "week02": 10.7,
    "week03": 12.2,
    "week04": 25.5,
    "week05": 21.7,
    "week06": 14.8,
    "week07": 15.5,
    "week08": 17.1,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.4, 10.7, 12.2, 25.5, 21.7, 14.8, 15.5, 17.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.8, 20.3, 9.3, 11.8, 13.6, 9.1, 15.3, 16.4, 12.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3060022.png",
    "name": "Jordan Howard",
    "depthchart": "Starter: RB-1",
    "team": "Philadelphia Eagles",
    "projected": 11.3,
    "opponent": "Chicago Bears",
    "home_away": "",
    "opp_rank": 6,
    "team_rank": 13,
    "avg_fp2": 11.45,
    "opp_rank_allowed_fp2": 21,
    "opp_avg_allowed_fp2": 22.63,
    "fanduelSalary": "$6300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#386168",
    "tmColorDark": "#004C54",
    "tmColorLite_rgba": "rgba(56, 97, 104, 0.2)",
    "tmColorDark_rgba": "rgba(0, 76, 84, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    "headlineNews": "Workhorse in Week 8 win",
    "report": "Howard rushed 23 times for 96 yards and a touchdown in Sunday's 31-13 win over the Bills. He also caught one of two targets for 15 yards.",
    "analysis": "Building on an ongoing trend, Howard dominated the volume on the ground while Miles Sanders was more effective as a receiver out of the backfield. Sanders actually had a 65-yard touchdown run himself but left in the third quarter due to a shoulder injury. Howard also watched third-stringer Boston Scott vulture a four-yard score in the third, but the lead back then found the end zone from three yards out himself in the fourth. The former Bears workhorse has five rushing touchdowns in his last six games, and Howard could be in for a larger workload against his former Bears teammates in Week 9 if Sanders is forced to miss additional time.",
    "timestamp": "2019-10-27 01:18 PM",
    "week01": 6.5,
    "week02": 3.1,
    "week03": 9.7,
    "week04": 31.0,
    "week05": 12.2,
    "week06": 4.9,
    "week07": 6.6,
    "week08": 17.6,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.5, 3.1, 9.7, 31.0, 12.2, 4.9, 6.6, 17.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.5, 7.5, 5.2, 7.6, 11.2, 9.7, 14.8, 9.7, 11.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/10452.png",
    "name": "Adrian Peterson",
    "depthchart": "Starter: RB-1",
    "team": "Washington Redskins",
    "projected": 11.1,
    "opponent": "Buffalo Bills",
    "home_away": "at ",
    "opp_rank": 18,
    "team_rank": 25,
    "avg_fp2": 7.24,
    "opp_rank_allowed_fp2": 25,
    "opp_avg_allowed_fp2": 23.66,
    "fanduelSalary": "$5700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#773141",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(119, 49, 65, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png",
    "headlineNews": "Cleared to play",
    "report": "Peterson (ankle) doesn't have an injury designation for Sunday's game in Buffalo, Chris Brown of the Bills' official site reports.",
    "analysis": "Peterson was held out of practice Wednesday and Thursday to rest the same ankle injury he played through without any problem in last week's 19-9 loss to the Vikings. His return to practice Friday locks him in as the lead back, while Chris Thompson (toe) will miss at least one more game. The gameplan should call for a heavy dose of Peterson in the first NFL start for quarterback Dwayne Haskins, but the plan will fall apart if the Bills establish a large lead.",
    "timestamp": "2019-11-01 11:37 AM",
    "week01": "DNP",
    "week02": 10.2,
    "week03": 3.9,
    "week04": 2.8,
    "week05": 1.8,
    "week06": 14.6,
    "week07": 6.1,
    "week08": 11.3,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 10.2, 3.9, 2.8, 1.8, 14.6, 6.1, 11.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 12.0, 8.3, 9.3, 9.2, 11.1, 8.8, 7.2, 11.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2979843.png",
    "name": "Kenyan Drake",
    "depthchart": "Starter: RB-1",
    "team": "Arizona Cardinals",
    "projected": 10.4,
    "opponent": "San Francisco 49ers",
    "home_away": "",
    "opp_rank": 11,
    "team_rank": 14,
    "avg_fp2": 7.3,
    "opp_rank_allowed_fp2": 3,
    "opp_avg_allowed_fp2": 12.39,
    "fanduelSalary": "$5500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#97233F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(151, 35, 63, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#97233F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
    "headlineNews": "Excels in team debut",
    "report": "Drake rushed 15 times for 110 yards and a touchdown and also secured all four targets for 52 yards in the Cardinals' 28-25 loss to the 49ers on Thursday. He also caught a two-point conversion pass.",
    "analysis": "The odds were stacked against a successful Drake debut coming in. There was naturally the matchup against the elite 49ers defense, as well as the fact it would be difficult to find an offense more incompatible to a three-day cram session (the running back was traded to Arizona on Monday) than coach Kliff Kingsbury's air raid attack. However, Drake's fresh legs and apparently buoyant mindset after being dealt out of Miami combined to produce a spectacular performance, one in which the fourth-year back posted his best rushing total since Week 14 of the 2017 season. Drake also put his impressive receiving skills on display in the fast-paced scheme, and for at least one game, provided solace to Cardinals coaches and fans alike that he can keep the team's ground attack afloat in the event of any further absences on the part of David Johnson (ankle) and Chase Edmonds (hamstring). Drake will look to build on Thursday's effort against the Buccaneers in Week 10, although the status of both Johnson and Edmonds will help determine who large Drake's workload might be in that contest.",
    "timestamp": "2019-10-31 09:12 PM",
    "week01": 3.7,
    "week02": 7.3,
    "week03": 6.7,
    "week04": 8.8,
    "week05": "DNP",
    "week06": 10.0,
    "week07": 7.3,
    "week08": "DNP",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.7, 7.3, 6.7, 8.8, 'DNP', 10.0, 7.3, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.2, 7.2, 8.9, 11.4, 'DNP', 9.4, 11.3, 'DNP', 10.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/8479.png",
    "name": "Frank Gore",
    "depthchart": "Starter: RB-1",
    "team": "Buffalo Bills",
    "projected": 10.0,
    "opponent": "Washington Redskins",
    "home_away": "",
    "opp_rank": 28,
    "team_rank": 8,
    "avg_fp2": 8.93,
    "opp_rank_allowed_fp2": 28,
    "opp_avg_allowed_fp2": 24.45,
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
    "headlineNews": "Quiet in Week 8 loss",
    "report": "Gore rushed nine times for 34 yards and wasn't targeted in the passing game in Sunday's 31-13 loss to the Eagles.",
    "analysis": "Gore got nine rushing attempts to Devin Singletary's three, but Singletary scored a receiving touchdown and both players were out-rushed by quarterback Josh Allen, who carried the ball eight times for 45 yards. Allen's always a threat to vulture a short touchdown and Singletary is the more explosive Bills running back, so volume is the only thing keeping Gore relevant, and that goes out the window in games like this one when the Bills fall behind.",
    "timestamp": "2019-10-27 02:58 PM",
    "week01": 2.0,
    "week02": 15.3,
    "week03": 15.9,
    "week04": 10.9,
    "week05": 7.9,
    "week06": "BYE",
    "week07": 7.1,
    "week08": 3.4,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.0, 15.3, 15.9, 10.9, 7.9, 'BYE', 7.1, 3.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.4, 3.9, 11.7, 7.2, 6.5, 'BYE', 8.6, 11.3, 10.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3139605.png",
    "name": "Marlon Mack",
    "depthchart": "Starter: RB-1",
    "team": "Indianapolis Colts",
    "projected": 10.0,
    "opponent": "Pittsburgh Steelers",
    "home_away": "at ",
    "opp_rank": 15,
    "team_rank": 11,
    "avg_fp2": 13.04,
    "opp_rank_allowed_fp2": 7,
    "opp_avg_allowed_fp2": 17.64,
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
    "headlineNews": "Scores Colts' lone touchdown",
    "report": "Mack ran for 76 yards and a touchdown on 19 carries and added a 14-yard catch during Sunday's 15-13 win over Denver.",
    "analysis": "Mack broke through late in the third quarter of Sunday's slugfest with a 10-yard score, just his second touchdown of the season. Mack hasn't wanted for opportunities this season, with at least 18 touches in six of seven games, but fantasy managers have been right to be frustrated by a lack of scores. He'll be challenged to keep his momentum going in Week 9 against a Steelers defense that's surrendered just four rushing touchdowns this season heading into the Week 8 Monday night matchup against Dolphins, tied for seventh best in the league.",
    "timestamp": "2019-10-27 01:49 PM",
    "week01": 25.4,
    "week02": 7.3,
    "week03": 15.8,
    "week04": 3.9,
    "week05": 16.3,
    "week06": "BYE",
    "week07": 7.1,
    "week08": 15.5,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [25.4, 7.3, 15.8, 3.9, 16.3, 'BYE', 7.1, 15.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.3, 9.8, 13.0, 14.2, 15.0, 'BYE', 12.3, 7.9, 10.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13981.png",
    "name": "Mark Ingram",
    "depthchart": "Starter: RB-1",
    "team": "Baltimore Ravens",
    "projected": 9.9,
    "opponent": "New England Patriots",
    "home_away": "",
    "opp_rank": 4,
    "team_rank": 1,
    "avg_fp2": 14.94,
    "opp_rank_allowed_fp2": 1,
    "opp_avg_allowed_fp2": 11.16,
    "fanduelSalary": "$7300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9E7C0C",
    "tmColorDark": "#241773",
    "tmColorLite_rgba": "rgba(158, 124, 12, 0.2)",
    "tmColorDark_rgba": "rgba(36, 23, 115, 0.2)",
    "tmTextLite": "#9E7C0C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png",
    "headlineNews": "Held in check by Seahawks",
    "report": "Ingram carried 12 times for 46 yards and caught his only target for seven additional yards during Sunday's 30-16 win over the Seahawks.",
    "analysis": "Ingram never really got it going in this one, averaging just 3.8 yards per carry as his long gain went for just eight yards. The team still racked up 199 rushing yards to the tune of 5.7 yards per carry, but that was mostly due to a big effort on the ground from Lamar Jackson and a helpful performance from Gus Edwards. Ingram's efficiency has waned in recent weeks, as he's averaging 47.3 rushing yards on 14.7 carries over the last three games. He'll face another tough matchup next Sunday night against the Patriots.",
    "timestamp": "2019-10-20 04:45 PM",
    "week01": 22.7,
    "week02": 8.7,
    "week03": 33.5,
    "week04": 7.6,
    "week05": 11.9,
    "week06": 14.4,
    "week07": 5.8,
    "week08": "BYE",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [22.7, 8.7, 33.5, 7.6, 11.9, 14.4, 5.8, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.6, 10.6, 7.4, 10.7, 11.7, 17.1, 12.0, 'BYE', 9.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2576434.png",
    "name": "Melvin Gordon",
    "depthchart": "Starter: RB-1",
    "team": "Los Angeles Chargers",
    "projected": 9.7,
    "opponent": "Green Bay Packers",
    "home_away": "",
    "opp_rank": 24,
    "team_rank": 28,
    "avg_fp2": 7.6,
    "opp_rank_allowed_fp2": 24,
    "opp_avg_allowed_fp2": 23.39,
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
    "headlineNews": "Scores another touchdown",
    "report": "Gordon carried the ball eight times for 31 yards and a touchdown, also catching two of his three targets for three yards in the 17-16 win Sunday over the Bears.",
    "analysis": "For a second consecutive week, Gordon hit paydirt, but he's registered a paltry 112 rushing yards on 44 carries since returning from his holdout in Week 5. Still, this was arguably the 26-year-old's best game since the aforementioned return, as he showed off his trademark elusiveness on a 19-yard touchdown scamper in which he changed direction on a nifty backdoor cut to find space. With the Chargers' offensive line in shambles, it's hard to have any sort of confidence in Gordon returning to last year's form, one that saw him average 5.1 yards per carry. However, he's a capable red-zone threat in an offense that has been able to move the ball despite difficult matchups such as Sunday's.",
    "timestamp": "2019-10-27 01:35 PM",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": 5.8,
    "week06": 6.3,
    "week07": 7.9,
    "week08": 10.4,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 5.8, 6.3, 7.9, 10.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 11.4, 10.9, 9.8, 11.4, 9.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/17359.png",
    "name": "Damien Williams",
    "depthchart": "Starter: RB-1",
    "team": "Kansas City Chiefs",
    "projected": 9.7,
    "opponent": "Minnesota Vikings",
    "home_away": "",
    "opp_rank": 7,
    "team_rank": 27,
    "avg_fp2": 6.13,
    "opp_rank_allowed_fp2": 5,
    "opp_avg_allowed_fp2": 16.54,
    "fanduelSalary": "$5400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Scores in losing effort",
    "report": "Williams rushed seven times for 30 yards and a touchdown in Sunday's 31-24 loss to Green Bay.",
    "analysis": "Williams was not targeted for the first time this season, but his three-yard touchdown scamper made him the leading fantasy scorer in Kansas City's backfield. LeSean McCoy touched the ball 13 times, and the veteran continues to see a slight advantage in usage in timeshare. Neither back should be considered a plus play against a stout Minnesota front seven (sixth-ranked rushing defense), especially if Patrick Mahomes (knee) remains sidelined come Week 9.",
    "timestamp": "2019-10-27 11:18 PM",
    "week01": 15.5,
    "week02": 7.1,
    "week03": "DNP",
    "week04": "DNP",
    "week05": 5.3,
    "week06": 6.3,
    "week07": 1.6,
    "week08": 1.0,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [15.5, 7.1, 'DNP', 'DNP', 5.3, 6.3, 1.6, 1.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.1, 8.5, 'DNP', 'DNP', 12.3, 11.5, 6.6, 9.9, 9.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4045163.png",
    "name": "Miles Sanders",
    "depthchart": "Backup: RB-2",
    "team": "Philadelphia Eagles",
    "projected": 9.6,
    "opponent": "Chicago Bears",
    "home_away": "",
    "opp_rank": 6,
    "team_rank": 13,
    "avg_fp2": 9.79,
    "opp_rank_allowed_fp2": 21,
    "opp_avg_allowed_fp2": 22.63,
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
    "headlineNews": "Puts in full practice Thursday",
    "report": "Sanders (shoulder) was listed as a full participant on Thursday's injury report.",
    "analysis": "The 2019 second-round pick has brushed off the shoulder injury that kept him sidelined Wednesday. With his health not in question, he can continue to serve as an able complement to top running back Jordan Howard.",
    "timestamp": "2019-10-31 01:28 PM",
    "week01": 3.2,
    "week02": 5.2,
    "week03": 11.6,
    "week04": 7.2,
    "week05": 8.4,
    "week06": 16.7,
    "week07": 4.7,
    "week08": 21.3,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.2, 5.2, 11.6, 7.2, 8.4, 16.7, 4.7, 21.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.8, 8.2, 7.3, 10.4, 7.2, 4.0, 8.8, 6.4, 9.6]
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
    "opponent": "Los Angeles Chargers",
    "home_away": "at ",
    "opp_rank": 23,
    "team_rank": 18,
    "avg_fp2": 10.57,
    "opp_rank_allowed_fp2": 26,
    "opp_avg_allowed_fp2": 23.81,
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
    "headlineNews": "Scores twice in primetime win",
    "report": "Williams ran the ball seven times for 22 yards and a touchdown, adding 14 yards and another score on three receptions in Sunday's 31-24 win over Kansas City.",
    "analysis": "Fellow back Adam Jones stole the show (over 200 total yards and two scores), but Williams was able to hit paydirt twice as well, albeit with fewer touches and total yardage. The 24-year-old's fantasy value is touchdown-dependent, as he only sees 7-to-12 touches per game on the smaller side of a backfield duo with Jones. Week 9's opponent, San Diego, is giving up 117.1 rushing yards per game, so there could be a large enough piece of the pie for Williams to carve out flex value in deeper formats, especially if star wideout Davante Adams (toe) is forced to miss another contest.",
    "timestamp": "2019-10-27 10:13 PM",
    "week01": 2.5,
    "week02": 11.6,
    "week03": 9.6,
    "week04": 0.5,
    "week05": "DNP",
    "week06": 21.6,
    "week07": 11.1,
    "week08": 17.1,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.5, 11.6, 9.6, 0.5, 'DNP', 21.6, 11.1, 17.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.3, 3.9, 4.6, 3.9, 'DNP', 9.0, 5.7, 8.9, 8.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3051902.png",
    "name": "Peyton Barber",
    "depthchart": "Starter: RB-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 8.9,
    "opponent": "Seattle Seahawks",
    "home_away": "at ",
    "opp_rank": 16,
    "team_rank": 19,
    "avg_fp2": 7.29,
    "opp_rank_allowed_fp2": 13,
    "opp_avg_allowed_fp2": 19.93,
    "fanduelSalary": "$5100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#D50A0A",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(213, 10, 10, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#D50A0A",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Can't find running room in loss",
    "report": "Barber rushed 10 times for 20 yards and brought in one of three targets for eight yards in the Buccaneers' 27-23 loss to the Titans on Sunday.",
    "analysis": "Barber's final line underscores how poorly the team's running game performed overall in the Week 8 loss. The Buccaneers' co-lead back saw only one fewer carry than backfield mate Ronald Jones, so the team's timeshare remains in place, much to the chagrin of each player's fantasy managers. Barber will look for better production against the Seahawks in a Week 9 battle.",
    "timestamp": "2019-10-29 09:12 AM",
    "week01": 5.5,
    "week02": 15.4,
    "week03": 6.5,
    "week04": 7.9,
    "week05": 9.6,
    "week06": 2.8,
    "week07": "BYE",
    "week08": 3.3,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.5, 15.4, 6.5, 7.9, 9.6, 2.8, 'BYE', 3.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.2, 8.4, 8.0, 10.6, 7.9, 8.1, 'BYE', 8.2, 8.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/12514.png",
    "name": "LeSean McCoy",
    "depthchart": "Backup: RB-2",
    "team": "Kansas City Chiefs",
    "projected": 8.4,
    "opponent": "Minnesota Vikings",
    "home_away": "",
    "opp_rank": 7,
    "team_rank": 27,
    "avg_fp2": 8.97,
    "opp_rank_allowed_fp2": 5,
    "opp_avg_allowed_fp2": 16.54,
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
    "headlineNews": "Held in check",
    "report": "McCoy was limited to just 40 yards on nine carries and caught all four of his targets for 23 yards Sunday against the Packers.",
    "analysis": "McCoy saw one fewer snap in Week 8 than fellow back Damien Williams, but the veteran did more with his share in terms of yardage. Unfortunately, he didn't find paydirt, while Williams did, and the committee approach being used in Kansas City will likely force a RB to do just that to reach fantasy relevance in most leagues on a given week. McCoy also fumbled late in the game, an act that may have cost him some fourth-quarter carries in the contest.",
    "timestamp": "2019-10-28 07:29 PM",
    "week01": "DNP",
    "week02": 3.8,
    "week03": 21.5,
    "week04": 15.9,
    "week05": 1.3,
    "week06": 5.4,
    "week07": 8.6,
    "week08": 6.3,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 3.8, 21.5, 15.9, 1.3, 5.4, 8.6, 6.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 5.7, 6.8, 7.1, 7.2, 7.8, 4.0, 5.3, 8.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3915411.png",
    "name": "Ty Johnson",
    "depthchart": "Starter: RB-1",
    "team": "Detroit Lions",
    "projected": 8.3,
    "opponent": "Oakland Raiders",
    "home_away": "at ",
    "opp_rank": 9,
    "team_rank": 22,
    "avg_fp2": 2.87,
    "opp_rank_allowed_fp2": 15,
    "opp_avg_allowed_fp2": 20.41,
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
    "headlineNews": "Records 38 scrimmage yards",
    "report": "Johnson carried seven times for 25 yards and caught one pass for an additional 13 yards during Sunday's 31-26 win over the Giants.",
    "analysis": "Johnson appeared to be in line to lead the team in carries with Kerryon Johnson (knee) out, but he watched on as Tra Carson paced the backfield with 12. His seven rushes were still his second most of the season, but he averaged just 3.6 yards per tote despite a seemingly favorable matchup against the Giants' front. Johnson appears to be just one piece of a committee that also includes J.D. McKissic and Paul Perkins at the moment, making him a risky fantasy play in next Sunday's road matchup against the Raiders.",
    "timestamp": "2019-10-27 08:15 PM",
    "week01": 0.6,
    "week02": 4.6,
    "week03": 1.0,
    "week04": 1.9,
    "week05": "BYE",
    "week06": 0.0,
    "week07": 7.7,
    "week08": 4.3,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.6, 4.6, 1.0, 1.9, 'BYE', 0.0, 7.7, 4.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.4, 6.3, 4.5, 3.8, 'BYE', 2.9, 2.4, 10.7, 8.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4040761.png",
    "name": "Devin Singletary",
    "depthchart": "Backup: RB-2",
    "team": "Buffalo Bills",
    "projected": 8.3,
    "opponent": "Washington Redskins",
    "home_away": "",
    "opp_rank": 28,
    "team_rank": 8,
    "avg_fp2": 9.88,
    "opp_rank_allowed_fp2": 28,
    "opp_avg_allowed_fp2": 24.45,
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
    "headlineNews": "Outplays Gore in loss",
    "report": "Singletary rushed three times for 19 yards and caught four of six targets for 30 yards and a touchdown in Sunday's 31-13 loss to the Eagles.",
    "analysis": "Singletary's biggest play was a 28-yard touchdown reception in the third quarter. He thoroughly outplayed Frank Gore, but Gore still got nine carries to Singletary's three, turning that workload into 34 yards. It appears Singletary's touches will continue to be limited by Gore's presence, even though the rookie third-rounder out of Florida Atlantic is clearly the most talented running back in Buffalo.",
    "timestamp": "2019-10-27 02:44 PM",
    "week01": 12.3,
    "week02": 11.7,
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "BYE",
    "week07": 2.6,
    "week08": 12.9,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.3, 11.7, 'DNP', 'DNP', 'DNP', 'BYE', 2.6, 12.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.8, 11.0, 'DNP', 'DNP', 'DNP', 'BYE', 5.5, 5.6, 8.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3049916.png",
    "name": "Matt Breida",
    "depthchart": "Backup: RB-2",
    "team": "San Francisco 49ers",
    "projected": 7.8,
    "opponent": "Arizona Cardinals",
    "home_away": "at ",
    "opp_rank": 25,
    "team_rank": 2,
    "avg_fp2": 10.21,
    "opp_rank_allowed_fp2": 18,
    "opp_avg_allowed_fp2": 21.45,
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
    "headlineNews": "Leads backfield in win",
    "report": "Breida (ankle) rushed 15 times for 78 yards and secured both targets for 14 yards in the 49ers' 28-25 win over the Cardinals on Thursday.",
    "analysis": "Breida helmed the 49ers' backfield after overcoming his ankle injury during the short week, out-touching backfield mate Tevin Coleman on the ground by three carries. Breida corroborated the fitness of his ankle with a game-high 31-yard run, and his rushing total was his highest since Week 4 against the Browns. The timeshare between Breida and Coleman will likely continue to be difficult to predict week to week, so both players will remain fantasy considerations against the Seahawks in a Week 10 divisional matchup a week from Monday.",
    "timestamp": "2019-10-31 09:23 PM",
    "week01": 3.7,
    "week02": 13.7,
    "week03": 9.8,
    "week04": "BYE",
    "week05": 26.4,
    "week06": 8.3,
    "week07": 4.1,
    "week08": 5.5,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.7, 13.7, 9.8, 'BYE', 26.4, 8.3, 4.1, 5.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.9, 7.9, 8.7, 'BYE', 5.7, 13.7, 10.0, 5.4, 7.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3068267.png",
    "name": "Austin Ekeler",
    "depthchart": "Backup: RB-2",
    "team": "Los Angeles Chargers",
    "projected": 7.6,
    "opponent": "Green Bay Packers",
    "home_away": "",
    "opp_rank": 24,
    "team_rank": 28,
    "avg_fp2": 18.16,
    "opp_rank_allowed_fp2": 24,
    "opp_avg_allowed_fp2": 23.39,
    "fanduelSalary": "$6500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0080C6",
    "tmColorDark": "#002A5E",
    "tmColorLite_rgba": "rgba(0, 128, 198, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 94, 0.2)",
    "tmTextLite": "#0080C6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lac.png",
    "headlineNews": "Scores game-winning touchdown",
    "report": "Ekeler tallied three carries for three yards but also caught two of his three targets for 19 yards and a touchdown in the 17-16 win Sunday over the Bears.",
    "analysis": "Ekeler ultimately posted the game-winning score, catching an easy dump-off and jettisoning 11 yards into the end zone early in the fourth quarter. However he was relatively shut down otherwise, with the Bears' defense keying in on the majority of the underneath patterns throughout the contest. Ekeler continues to see a fairly substantial difference in touches compared to Melvin Gordon, with the diminutive threat posting just five compared to Gordon's 10 on Sunday. However, much of that had to do with game script, as the Chargers kept the game tight throughout.",
    "timestamp": "2019-10-27 01:42 PM",
    "week01": 36.4,
    "week02": 20.3,
    "week03": 11.6,
    "week04": 26.7,
    "week05": 14.8,
    "week06": 4.3,
    "week07": 22.0,
    "week08": 9.2,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [36.4, 20.3, 11.6, 26.7, 14.8, 4.3, 22.0, 9.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.4, 14.5, 18.1, 15.8, 21.3, 9.5, 9.7, 8.9, 7.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3066158.png",
    "name": "Tarik Cohen",
    "depthchart": "Backup: RB-2",
    "team": "Chicago Bears",
    "projected": 7.6,
    "opponent": "Philadelphia Eagles",
    "home_away": "at ",
    "opp_rank": 8,
    "team_rank": 26,
    "avg_fp2": 6.54,
    "opp_rank_allowed_fp2": 6,
    "opp_avg_allowed_fp2": 16.73,
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
    "headlineNews": "Targeted six times",
    "report": "Cohen rushed four times for nine yards and caught three passes for 37 yards in Chicago's 17-16 loss to the Chargers on Sunday.",
    "analysis": "With this game being close throughout, the Bears were able to commit to David Montgomery as the primary running back, which kept Cohen from seeing more than three targets. He did most of his damage when lined up as a slot receiver, catching a 31-yard pass down the seam to move the offense into scoring position. He's yet to rush for 20 yards in a game this season and has reached 40 receiving yards just once, and aside from averaging six receptions per contest, he's been a low-upside fantasy option in 2019.",
    "timestamp": "2019-10-27 02:49 PM",
    "week01": 8.7,
    "week02": 3.5,
    "week03": 3.4,
    "week04": 8.8,
    "week05": 7.9,
    "week06": "BYE",
    "week07": 7.4,
    "week08": 6.1,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.7, 3.5, 3.4, 8.8, 7.9, 'BYE', 7.4, 6.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.7, 7.5, 6.5, 6.4, 5.2, 'BYE', 5.7, 6.4, 7.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116721.png",
    "name": "Jaylen Samuels",
    "depthchart": "Starter: RB-1",
    "team": "Pittsburgh Steelers",
    "projected": 7.5,
    "opponent": "Indianapolis Colts",
    "home_away": "",
    "opp_rank": 20,
    "team_rank": 24,
    "avg_fp2": 5.24,
    "opp_rank_allowed_fp2": 8,
    "opp_avg_allowed_fp2": 18.37,
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
    "headlineNews": "Positioned for Week 9 start",
    "report": "Samuels took all the Steelers' first-team reps during Friday's practice and appears on track to start at running back Sunday against the Colts with James Conner (shoulder) listed as doubtful for the contest, Brooke Pryor of ESPN.com reports.",
    "analysis": "Samuels will enter the contest without a designation after practicing fully Wednesday through Friday following a three-week absence due to a knee scope. While Pittsburgh probably would have preferred to ease Samuels back into the mix in a change-of-pace role, injuries to Conner and third-stringer Benny Snell (knee) -- who is listed as out -- should put the North Carolina State product on tap for a significant snap share in Week 9. Samuels demonstrated a high floor over his three starts in place of an injured Conner in 2018, averaging 14 carries for 74.3 yards and four receptions for 35 yards in those contests.",
    "timestamp": "2019-11-01 11:17 AM",
    "week01": 1.1,
    "week02": 3.6,
    "week03": 0.0,
    "week04": 19.54,
    "week05": 1.96,
    "week06": "DNP",
    "week07": "BYE",
    "week08": "DNP",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.1, 3.6, 0.0, 19.54, 1.96, 'DNP', 'BYE', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.1, 5.4, 3.8, 5.8, 13.2, 'DNP', 'BYE', 'DNP', 7.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16777.png",
    "name": "Carlos Hyde",
    "depthchart": "Starter: RB-1",
    "team": "Houston Texans",
    "projected": 7.3,
    "opponent": "Jacksonville Jaguars",
    "home_away": "at ",
    "opp_rank": 17,
    "team_rank": 6,
    "avg_fp2": 9.51,
    "opp_rank_allowed_fp2": 9,
    "opp_avg_allowed_fp2": 18.51,
    "fanduelSalary": "$6100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#03202F",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(3, 32, 47, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/hou.png",
    "headlineNews": "Gains 83 rushing yards",
    "report": "Hyde carried 19 times for 83 yards during Sunday's 27-24 win over the Raiders.",
    "analysis": "Hyde averaged a respectable 4.4 yards per carry against a tough Raiders front, with his long gain going for 20 yards. He received one target in the passing game but was unable to haul it in. Hyde also received a couple of carries in the red zone, but he was unable to convert in what amounted to a middling performance from a fantasy perspective. He'll look to make a larger impact next Sunday against the Jaguars in London.",
    "timestamp": "2019-10-27 08:52 PM",
    "week01": "DNP",
    "week02": 9.0,
    "week03": 7.9,
    "week04": 8.4,
    "week05": 12.0,
    "week06": 17.5,
    "week07": 3.5,
    "week08": 8.3,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 9.0, 7.9, 8.4, 12.0, 17.5, 3.5, 8.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 7.0, 9.8, 4.9, 9.1, 10.0, 11.6, 13.9, 7.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3912550.png",
    "name": "Ronald Jones",
    "depthchart": "Backup: RB-2",
    "team": "Tampa Bay Buccaneers",
    "projected": 7.0,
    "opponent": "Seattle Seahawks",
    "home_away": "at ",
    "opp_rank": 16,
    "team_rank": 19,
    "avg_fp2": 8.19,
    "opp_rank_allowed_fp2": 13,
    "opp_avg_allowed_fp2": 19.93,
    "fanduelSalary": "$5600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#D50A0A",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(213, 10, 10, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#D50A0A",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Garners 52 total yards in loss",
    "report": "Jones rushed 11 times for 35 yards and secured one of four targets for 17 yards in the Buccaneers' 27-23 loss to the Titans on Sunday.",
    "analysis": "Jones outpaced backfield mate Peyton Barber in carries by one and also made good use of his one reception. However, the Buccaneers' backfield picture remains as muddled as ever, as coach Bruce Arians appears set to keep both backs in a timeshare for the time being. As a result, Jones remains a speculative play heading into a Week 9 matchup against a tough Seattle run defense.",
    "timestamp": "2019-10-27 02:56 PM",
    "week01": 9.8,
    "week02": 0.9,
    "week03": 12.6,
    "week04": 14.7,
    "week05": 6.6,
    "week06": 7.0,
    "week07": "BYE",
    "week08": 5.7,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.8, 0.9, 12.6, 14.7, 6.6, 7.0, 'BYE', 5.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.9, 7.3, 7.2, 6.0, 7.8, 15.1, 'BYE', 7.5, 7.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/8544.png",
    "name": "Darren Sproles",
    "depthchart": "Reserve: RB-3",
    "team": "Philadelphia Eagles",
    "projected": 6.5,
    "opponent": "Chicago Bears",
    "home_away": "",
    "opp_rank": 6,
    "team_rank": 13,
    "avg_fp2": 2.5,
    "opp_rank_allowed_fp2": 21,
    "opp_avg_allowed_fp2": 22.63,
    "fanduelSalary": "$4600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#386168",
    "tmColorDark": "#004C54",
    "tmColorLite_rgba": "rgba(56, 97, 104, 0.2)",
    "tmColorDark_rgba": "rgba(0, 76, 84, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    "headlineNews": "No designation for Week 9",
    "report": "Sproles (quadriceps) practiced fully Friday and doesn't carry an injury designation into Sunday's game against the Bears.",
    "analysis": "Sproles' ability to practice without restriction was enough for the Eagles to sign off on his return to action following a three-game absence due to the quad injury. With Sproles back in the fold, Boston Scott will presumably drop to fourth on the depth chart and may be limited to a special-teams role Sunday, if he's even active.",
    "timestamp": "2019-11-01 12:55 PM",
    "week01": 9.8,
    "week02": 1.5,
    "week03": 0.4,
    "week04": 0.4,
    "week05": 0.4,
    "week06": "DNP",
    "week07": "DNP",
    "week08": "DNP",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.8, 1.5, 0.4, 0.4, 0.4, 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.7, 6.2, 6.9, 4.8, 5.1, 'DNP', 'DNP', 'DNP', 6.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2577134.png",
    "name": "Ty Montgomery",
    "depthchart": "Backup: RB-2",
    "team": "New York Jets",
    "projected": 6.4,
    "opponent": "Miami Dolphins",
    "home_away": "at ",
    "opp_rank": 31,
    "team_rank": 31,
    "avg_fp2": 1.46,
    "opp_rank_allowed_fp2": 29,
    "opp_avg_allowed_fp2": 26.5,
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
    "headlineNews": "Limited to special teams in Week 8",
    "report": "Montgomery didn't touch the ball on offense in Sunday's 29-15 loss to Jacksonville, but he returned two kickoffs for 31 yards.",
    "analysis": "Montgomery watched Bilal Powell serve as the backup to Le'Veon Bell, as Powell received four carries. Nonetheless, Montgomery's versatility still makes him the Jets running back to target should an injury befall Bell.",
    "timestamp": "2019-10-28 10:08 AM",
    "week01": 0.4,
    "week02": 5.5,
    "week03": 0.1,
    "week04": "BYE",
    "week05": 0.1,
    "week06": 3.2,
    "week07": 0.9,
    "week08": 0.0,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.4, 5.5, 0.1, 'BYE', 0.1, 3.2, 0.9, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.0, 8.3, 2.1, 'BYE', 3.2, 7.1, 4.1, 5.1, 6.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4048244.png",
    "name": "Alexander Mattison",
    "depthchart": "Backup: RB-2",
    "team": "Minnesota Vikings",
    "projected": 6.2,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank": 30,
    "team_rank": 3,
    "avg_fp2": 4.96,
    "opp_rank_allowed_fp2": 31,
    "opp_avg_allowed_fp2": 27.21,
    "fanduelSalary": "$5400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e0aa19",
    "tmColorDark": "#300e5a",
    "tmColorLite_rgba": "rgba(224, 170, 25, 0.2)",
    "tmColorDark_rgba": "rgba(48, 14, 90, 0.2)",
    "tmTextLite": "#e0aa19",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/min.png",
    "headlineNews": "Productive in complementary role",
    "report": "Mattison rushed 13 times for 61 yards and brought in both of his targets for three yards in the Vikings' 19-9 win over the Redskins on Thursday.",
    "analysis": "With the Vikings largely in control of the contest and focusing on the run game in the second half, Mattison saw his second-largest workload of the season on the ground. The rookie has eclipsed 60 rushing yards in two of his last three games, and although his week-to-week opportunities are far from consistent, Mattison has a good chance of seeing a solid amount of carries in any game where Minnesota has a secure second-half lead, given head coach Mike Zimmer's preference for the ground attack. Mattison will look to put together another strong effort in a Week 9 matchup against the Chiefs a week from Sunday.",
    "timestamp": "2019-10-24 09:38 PM",
    "week01": 4.9,
    "week02": 2.5,
    "week03": 11.8,
    "week04": 1.8,
    "week05": 5.2,
    "week06": 4.3,
    "week07": 1.8,
    "week08": 7.4,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.9, 2.5, 11.8, 1.8, 5.2, 4.3, 1.8, 7.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.9, 4.4, 3.6, 4.6, 3.8, 3.5, 4.2, 4.8, 6.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3916430.png",
    "name": "Nyheim Hines",
    "depthchart": "Backup: RB-2",
    "team": "Indianapolis Colts",
    "projected": 6.2,
    "opponent": "Pittsburgh Steelers",
    "home_away": "at ",
    "opp_rank": 15,
    "team_rank": 11,
    "avg_fp2": 4.6,
    "opp_rank_allowed_fp2": 7,
    "opp_avg_allowed_fp2": 17.64,
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
    "headlineNews": "Seven touches in Sunday's win",
    "report": "Hines had four carries for 12 yards and three receptions for 34 yards on three targets in Sunday's win over Denver.",
    "analysis": "Hines played on 18 of the offense's 64 snaps and got more usage than Jordan Wilkins (six snaps). He remains the top passing-down option at running back but isn't getting much playing time behind Marlon Mack.",
    "timestamp": "2019-10-28 01:58 PM",
    "week01": 3.7,
    "week02": 1.9,
    "week03": 4.4,
    "week04": 7.5,
    "week05": 6.5,
    "week06": "BYE",
    "week07": 2.1,
    "week08": 6.1,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.7, 1.9, 4.4, 7.5, 6.5, 'BYE', 2.1, 6.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.8, 6.8, 5.8, 8.7, 7.9, 'BYE', 6.4, 2.3, 6.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3128721.png",
    "name": "Sony Michel",
    "depthchart": "Starter: RB-1",
    "team": "New England Patriots",
    "projected": 6.0,
    "opponent": "Baltimore Ravens",
    "home_away": "at ",
    "opp_rank": 3,
    "team_rank": 23,
    "avg_fp2": 11.09,
    "opp_rank_allowed_fp2": 9,
    "opp_avg_allowed_fp2": 19.19,
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
    "headlineNews": "Modest numbers in win",
    "report": "Michel carried the ball 21 times for 74 yards in Sunday's 27-13 win over the Browns.",
    "analysis": "While he led the team in rushing, James White topped Michel in total scrimmage yards, and neither RB was able to find the end zone. Michel heads into the second half with six TDs in eight games, but his 3.3 YPC has the second-year back on pace to fall short of 1,000 rushing yards despite a fairly significant workload.",
    "timestamp": "2019-10-27 07:36 PM",
    "week01": 1.4,
    "week02": 12.5,
    "week03": 7.1,
    "week04": 6.3,
    "week05": 19.8,
    "week06": 12.3,
    "week07": 21.9,
    "week08": 7.4,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.4, 12.5, 7.1, 6.3, 19.8, 12.3, 21.9, 7.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.9, 15.8, 11.6, 5.5, 8.2, 11.1, 7.9, 10.8, 6.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3917846.png",
    "name": "Mark Walton",
    "depthchart": "Starter: RB-1",
    "team": "Miami Dolphins",
    "projected": 5.8,
    "opponent": "New York Jets",
    "home_away": "",
    "opp_rank": 10,
    "team_rank": 30,
    "avg_fp2": 4.82,
    "opp_rank_allowed_fp2": 23,
    "opp_avg_allowed_fp2": 23.39,
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
    "headlineNews": "Leads backfield in loss",
    "report": "Walton carried the ball 11 times for 35 yards and fumbled once during Monday's 27-14 loss to the Steelers. He also caught three of six targets for 19 yards.",
    "analysis": "Meanwhile, Kalen Ballage logged three carries for eight yards and caught one pass for 11 yards. Following the trade of Kenyan Drake to the Cardinals, Walton profiles as the No. 1 option in Miami's backfield. However, game flow didn't work out in the second-year pro's favor versus Pittsburgh, as the Dolphins spent the second half of the contest playing catch-up. That's a pattern that could continue to play out for Walton (and the winless Miami offense) this season, but he at least has a solid matchup against the Jets' porous defense coming up in Week 9.",
    "timestamp": "2019-10-28 09:08 PM",
    "week01": 0.1,
    "week02": 3.2,
    "week03": "DNP",
    "week04": 4.4,
    "week05": "BYE",
    "week06": 10.0,
    "week07": 6.3,
    "week08": 4.9,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.1, 3.2, 'DNP', 4.4, 'BYE', 10.0, 6.3, 4.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [-0.5, 0.1, 'DNP', 0.3, 'BYE', 3.7, 3.9, 7.4, 5.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3122672.png",
    "name": "Royce Freeman",
    "depthchart": "Backup: RB-2",
    "team": "Denver Broncos",
    "projected": 5.7,
    "opponent": "Cleveland Browns",
    "home_away": "",
    "opp_rank": 29,
    "team_rank": 16,
    "avg_fp2": 9.89,
    "opp_rank_allowed_fp2": 22,
    "opp_avg_allowed_fp2": 23.04,
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
    "headlineNews": "Bursts through for only touchdown",
    "report": "Freeman ran for 40 yards and a touchdown on 12 carries and added a five-yard catch during Sunday' 15-13 loss in Indianapolis.",
    "analysis": "Freeman capped off Denver's opening drive of the second half with a quick cut and waltzed into the end zone almost untouched for the four-yard touchdown, the team's only touchdown of the game. Freeman, after going scoreless for the first six weeks of the season, has now scored Denver's only two touchdowns of the past two games. He looks to be getting more carries down near the goal line and, though Sunday didn't show it, should be more involved in the passing game down the stretch with Emmanuel Sanders in San Francisco and few established targets on the team.",
    "timestamp": "2019-10-27 03:07 PM",
    "week01": 6.6,
    "week02": 12.7,
    "week03": 9.3,
    "week04": 7.0,
    "week05": 7.7,
    "week06": 10.1,
    "week07": 14.7,
    "week08": 11.0,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.6, 12.7, 9.3, 7.0, 7.7, 10.1, 14.7, 11.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.6, 4.0, 4.1, 5.0, 8.3, 5.5, 6.0, 5.8, 5.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2972091.png",
    "name": "Jalen Richard",
    "depthchart": "Backup: RB-2",
    "team": "Oakland Raiders",
    "projected": 5.6,
    "opponent": "Detroit Lions",
    "home_away": "",
    "opp_rank": 26,
    "team_rank": 7,
    "avg_fp2": 2.51,
    "opp_rank_allowed_fp2": 30,
    "opp_avg_allowed_fp2": 27.0,
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
    "headlineNews": "Notches 24 receiving yards in loss",
    "report": "Richard rushed for three yards on one carry and caught two of three targets for 24 yards in Sunday's 27-24 loss to the Texans.",
    "analysis": "Richard posted a season high in receiving yards after being limited earlier in the week with a minor ankle issue, but fellow backup DeAndre Washington handled three more touches than Richard despite logging only nine offensive snaps. Regardless of Washington's involvement, Richard's upside in a change-of-pace role out of Oakland's backfield will be capped for as long as rookie Josh Jacobs remains at full strength.",
    "timestamp": "2019-10-29 08:12 PM",
    "week01": 0.3,
    "week02": 1.5,
    "week03": 4.4,
    "week04": 2.3,
    "week05": 4.2,
    "week06": "BYE",
    "week07": 1.2,
    "week08": 3.7,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.3, 1.5, 4.4, 2.3, 4.2, 'BYE', 1.2, 3.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.4, 4.0, 6.3, 4.4, 6.6, 'BYE', 4.3, 4.0, 5.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3115375.png",
    "name": "Darrel Williams",
    "depthchart": "Reserve: RB-3",
    "team": "Kansas City Chiefs",
    "projected": 5.5,
    "opponent": "Minnesota Vikings",
    "home_away": "",
    "opp_rank": 7,
    "team_rank": 27,
    "avg_fp2": 7.76,
    "opp_rank_allowed_fp2": 5,
    "opp_avg_allowed_fp2": 16.54,
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
    "headlineNews": "Single-digit snaps in Week 8",
    "report": "Williams logged only nine offensive snaps in Week 8 versus the Packers, racking up just two carries for 10 yards.",
    "analysis": "Williams has seemingly fallen well beyond the other two backs at this point in the snaps race, seeing his lowest offensive snap percentage (15) since he played just seven percent of them in Week 2 versus Oakland. He doesn't exactly hold handcuff stash value in many leagues, either, as it would likely take absences from both Damien Williams and LeSean McCoy for Williams to see a dramatic rise in usage.",
    "timestamp": "2019-10-28 08:02 PM",
    "week01": "DNP",
    "week02": "DNP",
    "week03": 13.4,
    "week04": 17.1,
    "week05": "DNP",
    "week06": 5.7,
    "week07": 1.6,
    "week08": 1.0,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 13.4, 17.1, 'DNP', 5.7, 1.6, 1.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 2.4, 4.4, 'DNP', 8.5, 3.3, 3.7, 5.5]
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
    "opponent": "Carolina Panthers",
    "home_away": "at ",
    "opp_rank": 27,
    "team_rank": 20,
    "avg_fp2": 2.44,
    "opp_rank_allowed_fp2": 27,
    "opp_avg_allowed_fp2": 23.91,
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
    "headlineNews": "Continues descent",
    "report": "Lewis caught his lone target for a two-yard gain during Sunday's 27-23 win over Tampa Bay.",
    "analysis": "Lewis has now amassed just four total yards over the past two weeks and has yet to score or tally more than 30 yards in a game this season. It's not as if Lewis is being replaced as the Titans' No. 2 RB, it's just that Derrick Henry has hogged touches this season. With Marcus Mariota now on the bench and Ryan Tannehill under center, the Titans seem to have opted to throw it more, but even then Lewis has been tasked with picking up blitzes rather than running routes. Sunday's opponents, the Panthers, have been gashed on the ground this season to the tune of 5.0 yards per carry, but it's hard to see Lewis getting enough touches to take advantage.",
    "timestamp": "2019-10-29 04:17 PM",
    "week01": 2.8,
    "week02": 1.9,
    "week03": 2.5,
    "week04": 4.0,
    "week05": 4.0,
    "week06": 3.4,
    "week07": 0.2,
    "week08": 0.7,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.8, 1.9, 2.5, 4.0, 4.0, 3.4, 0.2, 0.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.9, 10.1, 7.3, 5.8, 6.7, 3.9, 6.4, 4.4, 5.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2972283.png",
    "name": "Tra Carson",
    "depthchart": "Backup: RB-2",
    "team": "Detroit Lions",
    "projected": 5.2,
    "opponent": "Oakland Raiders",
    "home_away": "at ",
    "opp_rank": 9,
    "team_rank": 22,
    "avg_fp2": 2.6,
    "opp_rank_allowed_fp2": 15,
    "opp_avg_allowed_fp2": 20.41,
    "fanduelSalary": "$5700",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Hamstring",
    "tmColorLite": "#0076B6",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(0, 118, 182, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#0076B6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/det.png",
    "headlineNews": "Questionable with hamstring injury",
    "report": "Carson (hamstring) is listed as questionable for Sunday's game in Oakland, Michael Rothstein of ESPN.com reports.",
    "analysis": "Carson was added to the injury report Thursday as a limited participant and logged another limited session Friday. He got a surprise start in last week's 31-26 win over the Giants, taking 12 carries for 34 yards while playing 31 percent of snaps on offense. A Week 9 absence would leave more work for Ty Johnson and J.D. McKissic, while Paul Perkins was re-signed to the practice squad Friday, perhaps implying some level of concern with Carson's health. Final word on Carson's status may not come until the Lions release their inactive list approximately 90 minutes before Sunday's 4:05 p.m. ET kickoff.",
    "timestamp": "2019-11-01 01:08 PM",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "BYE",
    "week06": 0.0,
    "week07": "DNP",
    "week08": "DNP",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'BYE', 0.0, 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'BYE', 6.7, 'DNP', 'DNP', 5.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3139925.png",
    "name": "Rashaad Penny",
    "depthchart": "Backup: RB-2",
    "team": "Seattle Seahawks",
    "projected": 5.1,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "",
    "opp_rank": 1,
    "team_rank": 9,
    "avg_fp2": 5.24,
    "opp_rank_allowed_fp2": 4,
    "opp_avg_allowed_fp2": 13.93,
    "fanduelSalary": "$5400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#69BE28",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(105, 190, 40, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#69BE28",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
    "headlineNews": "Manages 55 rushing yards",
    "report": "Penny rushed eight times for 55 yards in Sunday's 27-20 win over the Falcons.",
    "analysis": "The Seahawks' coaching staff made a concerted effort to get Penny involved in the offense, as he took a carry on the first drive of the game. Penny was plugged in again two drives later and ripped off gains of nine and 17 to bring the offense into Falcons territory. The second-year pro looked explosive to register 6.9 YPC compared to Chris Carson's 4.5 on 20 rushes. This performance may keep Penny in the rotation going forward, although Carson hasn't shown much weakness as the Seahawks' bell cow. Penny should be owned in fantasy formats as a handcuff to Carson and could be worth a stream in deeper leagues should his volume pick up.",
    "timestamp": "2019-10-27 02:23 PM",
    "week01": 1.8,
    "week02": 13.0,
    "week03": "DNP",
    "week04": "DNP",
    "week05": 5.9,
    "week06": "DNP",
    "week07": 0.0,
    "week08": 5.5,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.8, 13.0, 'DNP', 'DNP', 5.9, 'DNP', 0.0, 5.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.0, 5.5, 'DNP', 'DNP', 5.5, 'DNP', 3.8, 2.5, 5.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2576414.png",
    "name": "Raheem Mostert",
    "depthchart": "Reserve: RB-3",
    "team": "San Francisco 49ers",
    "projected": 5.1,
    "opponent": "Arizona Cardinals",
    "home_away": "at ",
    "opp_rank": 25,
    "team_rank": 2,
    "avg_fp2": 7.1,
    "opp_rank_allowed_fp2": 18,
    "opp_avg_allowed_fp2": 21.45,
    "fanduelSalary": "$5000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "Suits up, receives just one carry",
    "report": "Mostert (knee) took his lone carry for a loss of two yards in Thursday's 28-25 win over the Cardinals.",
    "analysis": "Mostert carried a questionable tag due to a knee injury up until game day. The speedy back was able to suit up, but the drop in usage may be related to his health. We will see if his carries increase against the Seahawks next Monday, but it is clear that Mostert is firmly behind the starting duo of Tevin Coleman and Matt Breida.",
    "timestamp": "2019-11-01 03:11 PM",
    "week01": 4.5,
    "week02": 22.6,
    "week03": 5.9,
    "week04": "BYE",
    "week05": 3.4,
    "week06": 1.3,
    "week07": 0.0,
    "week08": 12.0,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.5, 22.6, 5.9, 'BYE', 3.4, 1.3, 0.0, 12.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.7, 2.1, 6.4, 'BYE', 4.9, 4.1, 4.6, 2.9, 5.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3051926.png",
    "name": "Gus Edwards",
    "depthchart": "Backup: RB-2",
    "team": "Baltimore Ravens",
    "projected": 5.0,
    "opponent": "New England Patriots",
    "home_away": "",
    "opp_rank": 4,
    "team_rank": 1,
    "avg_fp2": 4.04,
    "opp_rank_allowed_fp2": 1,
    "opp_avg_allowed_fp2": 11.16,
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
    "headlineNews": "Churns out 35 yards",
    "report": "Edwards had eight carries for 35 yards in Sunday's win over the Seahawks.",
    "analysis": "The second-year runner saw his highest carry count since Week 1 and responded with a strong outing. Edwards averaged 4.4 yards per carry and cracked the 30-yard mark for the second week in a row. Still, Mark Ingram is still the No.1 running back in Baltimore and Lamar Jackson's increased usage in the run game of late limits the amount of available carries for Edwards. The Ravens are on a bye in Week 8 before returning to action Week 9 against the Patriots.",
    "timestamp": "2019-10-22 07:21 AM",
    "week01": 5.6,
    "week02": 1.1,
    "week03": 7.8,
    "week04": 4.1,
    "week05": 2.8,
    "week06": 3.4,
    "week07": 3.5,
    "week08": "BYE",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.6, 1.1, 7.8, 4.1, 2.8, 3.4, 3.5, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.3, 5.3, 5.6, 4.8, 6.5, 10.6, 6.4, 'BYE', 5.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2969962.png",
    "name": "Duke Johnson",
    "depthchart": "Backup: RB-2",
    "team": "Houston Texans",
    "projected": 5.0,
    "opponent": "Jacksonville Jaguars",
    "home_away": "at ",
    "opp_rank": 17,
    "team_rank": 6,
    "avg_fp2": 7.99,
    "opp_rank_allowed_fp2": 9,
    "opp_avg_allowed_fp2": 18.51,
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
    "headlineNews": "Scores receiving touchdown",
    "report": "Johnson carried three times for one yard and caught four of five targets for 33 yards and a touchdown during Sunday's 27-24 win over the Raiders.",
    "analysis": "Johnson finished third on the team in receptions and tied for third in targets while getting his team on board with a 12-yard touchdown reception in the first quarter. He did next to nothing on the ground, but his productivity as a pass-catcher lifted him to a respectable effort from a fantasy perspective. Johnson's role remains that of a change-of-pace back, making him a risky fantasy play for next Sunday's matchup with the Jaguars in London.",
    "timestamp": "2019-10-27 09:01 PM",
    "week01": 11.0,
    "week02": 3.1,
    "week03": 3.4,
    "week04": 8.8,
    "week05": 7.2,
    "week06": 12.4,
    "week07": 6.6,
    "week08": 11.4,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.0, 3.1, 3.4, 8.8, 7.2, 12.4, 6.6, 11.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.8, 13.8, 7.4, 5.3, 6.9, 7.6, 6.5, 8.6, 5.0]
                    }
                    
                    ]
               }
            }];




$scope.positionWR = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2976499.png",
    "name": "Amari Cooper",
    "depthchart": "Starter: WR-1",
    "team": "Dallas Cowboys",
    "projected": 21.6,
    "opponent": "New York Giants",
    "home_away": "at ",
    "opp_rank": 25,
    "team_rank": 4,
    "avg_fp2": 15.87,
    "opp_rank_allowed_fp2": 30,
    "opp_avg_allowed_fp2": 35.1,
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
    "headlineNews": "Suits up, leads team in receiving",
    "report": "Cooper (quadriceps/ankle) caught all five of his targets for 106 yards in Sunday's 37-10 win over the Eagles.",
    "analysis": "Cooper was held out of team activities until late in the week while nursing two separate lower-body injuries, but he was able to heal up in time for an important primetime matchup against a divisional foe. Dallas was in control of the contest from start to finish, so the 25-year-old had to make due with just five targets (tied for the lowest mark in a full game this season). Cooper maximized those targets, reaching the century mark for the third time this season. The star wideout's fantasy owners were not only rewarded with an unlikely start and strong stat line, but the Cowboys' upcoming bye week will give the receiver plenty of time to fully heal up before a soft matchup against the Giants on Monday Night Football in Week 9.",
    "timestamp": "2019-10-20 10:00 PM",
    "week01": 19.6,
    "week02": 12.4,
    "week03": 23.8,
    "week04": 7.3,
    "week05": 34.1,
    "week06": 0.8,
    "week07": 13.1,
    "week08": "BYE",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [19.6, 12.4, 23.8, 7.3, 34.1, 0.8, 13.1, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.8, 12.8, 10.9, 11.4, 11.7, 10.3, 17.9, 'BYE', 21.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16737.png",
    "name": "Mike Evans",
    "depthchart": "Starter: WR-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 18.2,
    "opponent": "Seattle Seahawks",
    "home_away": "at ",
    "opp_rank": 27,
    "team_rank": 9,
    "avg_fp2": 17.6,
    "opp_rank_allowed_fp2": 12,
    "opp_avg_allowed_fp2": 27.06,
    "fanduelSalary": "$8100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#D50A0A",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(213, 10, 10, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#D50A0A",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Tramples Titans secondary in loss",
    "report": "Evans secured 11 of 12 targets for 198 yards and two touchdowns in the Buccaneers' 27-23 loss to the Titans on Sunday.",
    "analysis": "Evans easily led both teams with his reception, receiving yardage and target totals, as the Titans secondary consistently proved to be no match for him all afternoon. He made catches short and long throughout the contest, including a spectacular leaping 46-yard grab down the right sideline. Evans' two scores came from nine and two yards out, and he now has two multi-touchdown games on the campaign. He'll look to stay hot against the Seahawks in a Week 9 matchup.",
    "timestamp": "2019-10-27 02:43 PM",
    "week01": 3.8,
    "week02": 8.1,
    "week03": 41.0,
    "week04": 16.9,
    "week05": 0.0,
    "week06": 16.1,
    "week07": "BYE",
    "week08": 37.3,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.8, 8.1, 41.0, 16.9, 0.0, 16.1, 'BYE', 37.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.9, 11.2, 17.1, 12.0, 14.9, 10.8, 'BYE', 8.3, 18.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2577327.png",
    "name": "Tyler Lockett",
    "depthchart": "Starter: WR-1",
    "team": "Seattle Seahawks",
    "projected": 17.2,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "",
    "opp_rank": 31,
    "team_rank": 13,
    "avg_fp2": 13.46,
    "opp_rank_allowed_fp2": 28,
    "opp_avg_allowed_fp2": 34.69,
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
    "headlineNews": "Piles up 100 yards",
    "report": "Lockett caught all six targets for 100 yards in Sunday's 27-20 win over the Falcons.",
    "analysis": "This was Lockett's second 100-yard receiving game of the year. Every catch Lockett made went for 12 or more yards, but it was DK Metcalf who was rewarded with two trips to the end zone. Lockett's traditionally thought of as a boom-or-bust receiver that can stretch the field, but he sports a solid fantasy floor this year with at least four catches for 51 yards in each of the last seven games. Lockett's primed for another boom against the Buccaneers' struggling secondary in Week 9.",
    "timestamp": "2019-10-27 02:12 PM",
    "week01": 10.9,
    "week02": 12.9,
    "week03": 26.9,
    "week04": 7.1,
    "week05": 12.3,
    "week06": 10.3,
    "week07": 14.3,
    "week08": 13.0,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.9, 12.9, 26.9, 7.1, 12.3, 10.3, 14.3, 13.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.2, 11.6, 8.8, 15.3, 11.0, 8.7, 12.6, 10.6, 17.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4036348.png",
    "name": "Michael Gallup",
    "depthchart": "Backup: WR-2",
    "team": "Dallas Cowboys",
    "projected": 16.6,
    "opponent": "New York Giants",
    "home_away": "at ",
    "opp_rank": 25,
    "team_rank": 4,
    "avg_fp2": 12.32,
    "opp_rank_allowed_fp2": 30,
    "opp_avg_allowed_fp2": 35.1,
    "fanduelSalary": "$6600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#7F9695",
    "tmColorDark": "#041E42",
    "tmColorLite_rgba": "rgba(127, 150, 149, 0.2)",
    "tmColorDark_rgba": "rgba(4, 30, 66, 0.2)",
    "tmTextLite": "#7F9695",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
    "headlineNews": "Quiet in big win",
    "report": "Gallup caught three of four targets for 34 yards in Sunday's win over the Eagles.",
    "analysis": "Amari Cooper was the preferred big-play threat for Dak Prescott in this one, and Gallup's longest catch went for only 14 yards. The second-year receiver has shown he can be explosive this season with two 100-yard performances in five games, and he'll be in a good spot for another one against the Giants in Week 9 following the Cowboys' bye.",
    "timestamp": "2019-10-21 06:46 AM",
    "week01": 19.3,
    "week02": 9.8,
    "week03": "DNP",
    "week04": "DNP",
    "week05": 20.8,
    "week06": 6.8,
    "week07": 4.9,
    "week08": "BYE",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [19.3, 9.8, 'DNP', 'DNP', 20.8, 6.8, 4.9, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.3, 6.8, 'DNP', 'DNP', 5.3, 6.4, 13.7, 'BYE', 16.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3050661.png",
    "name": "Chris Godwin",
    "depthchart": "Backup: WR-2",
    "team": "Tampa Bay Buccaneers",
    "projected": 14.8,
    "opponent": "Seattle Seahawks",
    "home_away": "at ",
    "opp_rank": 27,
    "team_rank": 9,
    "avg_fp2": 18.86,
    "opp_rank_allowed_fp2": 12,
    "opp_avg_allowed_fp2": 27.06,
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
    "headlineNews": "Modest output in loss",
    "report": "Godwin hauled in four of eight targets for 43 yards in the Buccaneers' 27-23 loss to the Titans on Sunday.",
    "analysis": "Godwin took a back seat to position mate Mike Evans on the afternoon, with the latter generating an eye-popping 11-198-2 line. Godwin did check in second to Evans in receptions, receiving yards and targets, but his three-game streak of 100-yard efforts was snapped. Despite the downturn Sunday, Godwin's fantasy stock naturally remains sky high heading into a favorable Week 9 matchup against the Seahawks secondary.",
    "timestamp": "2019-10-27 02:49 PM",
    "week01": 12.8,
    "week02": 22.1,
    "week03": 5.5,
    "week04": 35.2,
    "week05": 28.0,
    "week06": 20.1,
    "week07": "BYE",
    "week08": 8.3,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.8, 22.1, 5.5, 35.2, 28.0, 20.1, 'BYE', 8.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.4, 6.8, 13.7, 7.9, 8.1, 8.6, 'BYE', 10.4, 14.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15795.png",
    "name": "DeAndre Hopkins",
    "depthchart": "Starter: WR-1",
    "team": "Houston Texans",
    "projected": 14.6,
    "opponent": "Jacksonville Jaguars",
    "home_away": "at ",
    "opp_rank": 14,
    "team_rank": 10,
    "avg_fp2": 13.84,
    "opp_rank_allowed_fp2": 13,
    "opp_avg_allowed_fp2": 28.27,
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
    "headlineNews": "Returns to full practice",
    "report": "Hopkins (thumb) practiced fully Thursday.",
    "analysis": "Hopkins was listed as a limited participant at Wednesday's practice, but his return to a full session puts the Texans' top wideout on track to play Sunday against the Jaguars. Eight games into the 2019 season, Hopkins is fourth in the NFL with 81 targets, which has yielded a PPR-friendly 60 catches (second in the league) for 617 yards and three TDs.",
    "timestamp": "2019-10-31 03:48 PM",
    "week01": 27.1,
    "week02": 6.5,
    "week03": 9.7,
    "week04": 5.6,
    "week05": 12.3,
    "week06": 12.0,
    "week07": 21.1,
    "week08": 16.4,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [27.1, 6.5, 9.7, 5.6, 12.3, 12.0, 21.1, 16.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.0, 12.3, 12.2, 13.9, 17.9, 13.3, 15.8, 15.3, 14.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2587819.png",
    "name": "Tyrell Williams",
    "depthchart": "Starter: WR-1",
    "team": "Oakland Raiders",
    "projected": 14.6,
    "opponent": "Detroit Lions",
    "home_away": "",
    "opp_rank": 32,
    "team_rank": 15,
    "avg_fp2": 14.14,
    "opp_rank_allowed_fp2": 23,
    "opp_avg_allowed_fp2": 30.69,
    "fanduelSalary": "$6300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A5ACAF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/oak.png",
    "headlineNews": "Turns in full practice",
    "report": "Williams (foot) was a full participant in Thursday's practice, Paul Gutierrez of ESPN.com reports.",
    "analysis": "Williams was limited in Wednesday's session, but that was likely just for maintenance purposes after he returned from a three-game absence last weekend versus the Texans and played 89 percent of the Raiders' offensive snaps. He immediately re-established himself as the team's top wideout in that contest, nabbing three of six targets for 91 yards and a score. Look for Williams to see steady involvement in the passing game again Sunday versus the Lions.",
    "timestamp": "2019-10-31 02:20 PM",
    "week01": 19.5,
    "week02": 13.1,
    "week03": 10.4,
    "week04": 11.1,
    "week05": "DNP",
    "week06": "BYE",
    "week07": "DNP",
    "week08": 16.6,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [19.5, 13.1, 10.4, 11.1, 'DNP', 'BYE', 'DNP', 16.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.9, 14.7, 6.7, 11.6, 'DNP', 'BYE', 'DNP', 13.9, 14.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14053.png",
    "name": "Randall Cobb",
    "depthchart": "Reserve: WR-3",
    "team": "Dallas Cowboys",
    "projected": 14.3,
    "opponent": "New York Giants",
    "home_away": "at ",
    "opp_rank": 25,
    "team_rank": 4,
    "avg_fp2": 6.75,
    "opp_rank_allowed_fp2": 30,
    "opp_avg_allowed_fp2": 35.1,
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
    "headlineNews": "Two grabs in return",
    "report": "Cobb caught two of three targets for 29 yards in Sunday's win over the Eagles.",
    "analysis": "After missing last week's loss to the Jets with a sore back, Cobb returned to action but saw his smallest target volume of the year. The veteran receiver has yet to break 70 yards in a game for the Cowboys, and his role in the passing game behind Amari Cooper and Michael Gallup has provided Cobb with little fantasy upside so far.",
    "timestamp": "2019-10-21 06:49 AM",
    "week01": 14.9,
    "week02": 6.0,
    "week03": 3.3,
    "week04": 5.6,
    "week05": 6.8,
    "week06": "DNP",
    "week07": 3.9,
    "week08": "BYE",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.9, 6.0, 3.3, 5.6, 6.8, 'DNP', 3.9, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.0, 5.8, 7.6, 4.5, 5.9, 'DNP', 10.0, 'BYE', 14.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13295.png",
    "name": "Emmanuel Sanders",
    "depthchart": "Starter: WR-1",
    "team": "San Francisco 49ers",
    "projected": 14.0,
    "opponent": "Arizona Cardinals",
    "home_away": "at ",
    "opp_rank": 29,
    "team_rank": 24,
    "avg_fp2": 9.53,
    "opp_rank_allowed_fp2": 18,
    "opp_avg_allowed_fp2": 29.41,
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
    "headlineNews": "Continues ascent in Week 9 win",
    "report": "Sanders secured seven of nine targets for 112 yards and a touchdown in the 49ers' 28-25 win over the Cardinals on Thursday.",
    "analysis": "Sanders paced the 49ers in receptions, receiving yardage and targets, also securing his second touchdown reception in as many games as a member of his new team. The 32-year-old appears to have quickly developed a rapport with Jimmy Garoppolo after seeing his production suffer while in the Broncos' lackluster attack earlier in the campaign. He'll now have some extra time to immerse himself in the Niners' playbook before a Week 10 matchup against the Seahawks a week from Monday.",
    "timestamp": "2019-10-31 09:31 PM",
    "week01": 17.1,
    "week02": 23.3,
    "week03": 2.0,
    "week04": "BYE",
    "week05": 1.4,
    "week06": 0.5,
    "week07": 8.5,
    "week08": 10.5,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [17.1, 23.3, 2.0, 'BYE', 1.4, 0.5, 8.5, 10.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.3, 10.0, 11.1, 'BYE', 10.8, 7.0, 6.9, 8.1, 14.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13216.png",
    "name": "Demaryius Thomas",
    "depthchart": "Backup: WR-2",
    "team": "New York Jets",
    "projected": 13.5,
    "opponent": "Miami Dolphins",
    "home_away": "at ",
    "opp_rank": 20,
    "team_rank": 32,
    "avg_fp2": 7.35,
    "opp_rank_allowed_fp2": 26,
    "opp_avg_allowed_fp2": 32.9,
    "fanduelSalary": "$4800",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Hamstring",
    "tmColorLite": "#125740",
    "tmColorDark": "#003f2d",
    "tmColorLite_rgba": "rgba(18, 87, 64, 0.2)",
    "tmColorDark_rgba": "rgba(0, 63, 45, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png",
    "headlineNews": "Officially questionable in Week 9",
    "report": "Thomas (hamstring/ankle) is listed as questionable for Sunday's game against the Dolphins.",
    "analysis": "Thomas' activity was limited in practice Wednesday through Friday, prompting the Jets to affix an injury designation to his name ahead of the team's Week 9 matchup. The hamstring issue has been something Thomas has managed dating back to Week 1, but the ankle injury appears to be a new concern for the wideout. His status for the game will gain clarity when the Jets release their inactive list approximately 90 minutes prior to the 1 p.m. ET kickoff.",
    "timestamp": "2019-11-01 02:06 PM",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "BYE",
    "week05": 6.7,
    "week06": 8.2,
    "week07": 5.7,
    "week08": 8.8,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'BYE', 6.7, 8.2, 5.7, 8.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'BYE', 8.1, 6.4, 7.1, 9.1, 13.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2574808.png",
    "name": "Robby Anderson",
    "depthchart": "Starter: WR-1",
    "team": "New York Jets",
    "projected": 13.3,
    "opponent": "Miami Dolphins",
    "home_away": "at ",
    "opp_rank": 20,
    "team_rank": 32,
    "avg_fp2": 6.77,
    "opp_rank_allowed_fp2": 26,
    "opp_avg_allowed_fp2": 32.9,
    "fanduelSalary": "$6200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#125740",
    "tmColorDark": "#003f2d",
    "tmColorLite_rgba": "rgba(18, 87, 64, 0.2)",
    "tmColorDark_rgba": "rgba(0, 63, 45, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png",
    "headlineNews": "Four catches in Week 8",
    "report": "Anderson caught four of six targets for 43 yards in Sunday's 29-15 loss to Jacksonville.",
    "analysis": "With trade rumors swirling around him, Anderson delivered a mediocre performance in what could end up being his final game as a Jet. With New York now 1-6, don't be surprised to see the speedy wide receiver dealt to a more fantasy-friendly situation before Tuesday's trade deadline, as New York would rather get something for the pending free agent rather than let him walk for free at season's end. If Anderson remains with the Jets, he'd get a juicy Week 9 matchup against Miami.",
    "timestamp": "2019-10-27 03:41 PM",
    "week01": 3.8,
    "week02": 10.1,
    "week03": 2.6,
    "week04": "BYE",
    "week05": 2.1,
    "week06": 21.0,
    "week07": 1.5,
    "week08": 6.3,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.8, 10.1, 2.6, 'BYE', 2.1, 21.0, 1.5, 6.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.6, 7.5, 9.5, 'BYE', 10.6, 6.9, 9.4, 9.7, 13.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3120348.png",
    "name": "JuJu Smith-Schuster",
    "depthchart": "Starter: WR-1",
    "team": "Pittsburgh Steelers",
    "projected": 12.8,
    "opponent": "Indianapolis Colts",
    "home_away": "",
    "opp_rank": 15,
    "team_rank": 26,
    "avg_fp2": 10.76,
    "opp_rank_allowed_fp2": 15,
    "opp_avg_allowed_fp2": 28.56,
    "fanduelSalary": "$7300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/pit.png",
    "headlineNews": "Breaks the century mark",
    "report": "Smith-Schuster caught five passes for 103 yards and a touchdown in Monday's 27-14 win over the Dolphins.",
    "analysis": "No Pittsburgh receiver was happier to have Mason Rudolph back under center than Smith-Schuster, who saw a season-high nine targets and had his first 100-yard game in 2019. His touchdown came on an impressive catch of an underthrown pass off the top of the defensive back's helmet to give Pittsburgh its first lead of the game. Smith-Schuster entered the contest averaging less than 57 yards per game but has now scored twice in his last three games. He faces a difficult challenge in Week 9 against an Indianapolis defense that has not allowed opposing wide receivers to catch more than one touchdown in a game this season.",
    "timestamp": "2019-10-28 09:47 PM",
    "week01": 10.8,
    "week02": 10.9,
    "week03": 15.6,
    "week04": 3.0,
    "week05": 15.0,
    "week06": 1.2,
    "week07": "BYE",
    "week08": 18.8,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.8, 10.9, 15.6, 3.0, 15.0, 1.2, 'BYE', 18.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.4, 14.0, 11.7, 15.9, 19.7, 10.9, 'BYE', 14.1, 12.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3115394.png",
    "name": "D.J. Chark",
    "depthchart": "Starter: WR-1",
    "team": "Jacksonville Jaguars",
    "projected": 12.6,
    "opponent": "Houston Texans",
    "home_away": "",
    "opp_rank": 28,
    "team_rank": 14,
    "avg_fp2": 15.44,
    "opp_rank_allowed_fp2": 32,
    "opp_avg_allowed_fp2": 36.11,
    "fanduelSalary": "$6400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#006778",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 103, 120, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#006778",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/jax.png",
    "headlineNews": "Good to go",
    "report": "Chark (quad) doesn't have a designation on the final injury report for Sunday's game against the Texans in London.",
    "analysis": "The Jaguars limited Chark's practice reps throughout the week, though he never seemed to be in any danger of missing the game. He caught seven of nine targets for 55 yards and a touchdown Week 2 in Houston, and he's gone over 40 yards in each week of his breakout season.",
    "timestamp": "2019-11-01 02:13 PM",
    "week01": 22.6,
    "week02": 15.0,
    "week03": 15.6,
    "week04": 6.4,
    "week05": 32.4,
    "week06": 5.8,
    "week07": 8.8,
    "week08": 16.9,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [22.6, 15.0, 15.6, 6.4, 32.4, 5.8, 8.8, 16.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [0.5, 6.1, 5.0, 6.9, 7.3, 10.3, 10.2, 11.6, 12.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116406.png",
    "name": "Tyreek Hill",
    "depthchart": "Starter: WR-1",
    "team": "Kansas City Chiefs",
    "projected": 12.0,
    "opponent": "Minnesota Vikings",
    "home_away": "",
    "opp_rank": 8,
    "team_rank": 2,
    "avg_fp2": 12.9,
    "opp_rank_allowed_fp2": 20,
    "opp_avg_allowed_fp2": 29.69,
    "fanduelSalary": "$7700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Leads team in receiving",
    "report": "Hill had six catches (on nine targets) for 76 yards and rushed for five more yards on his lone carry in Sunday's 31-24 loss to the Packers.",
    "analysis": "Hill actually turned in a respectable stat line considering the Chiefs were starting backup quarterback Matt Moore in place of the dynamic Patrick Mahomes (knee). The speedy wideout posted similar stat lines in his first two games back from injury, but he was also rewarded with three touchdowns from his primary QB. Looking ahead, there is at least a chance that Hill gets his deep-threat partner back for a stiff test against Minnesota's defense next weekend, but a Week 10 return may represent a more plausible outcome for Mahomes.",
    "timestamp": "2019-10-27 09:42 PM",
    "week01": 3.1,
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": 22.5,
    "week07": 14.9,
    "week08": 11.1,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.1, 'DNP', 'DNP', 'DNP', 'DNP', 22.5, 14.9, 11.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.8, 'DNP', 'DNP', 'DNP', 'DNP', 12.2, 12.0, 17.4, 12.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/12649.png",
    "name": "Julian Edelman",
    "depthchart": "Starter: WR-1",
    "team": "New England Patriots",
    "projected": 11.8,
    "opponent": "Baltimore Ravens",
    "home_away": "at ",
    "opp_rank": 26,
    "team_rank": 7,
    "avg_fp2": 13.97,
    "opp_rank_allowed_fp2": 20,
    "opp_avg_allowed_fp2": 30.23,
    "fanduelSalary": "$7100",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Chest",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#C60C30",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png",
    "headlineNews": "Questionable for Sunday night",
    "report": "Edelman (chest/shoulder) is listed as questionable for Sunday's game against the Ravens after practicing in a limited fashion all week.",
    "analysis": "Normally, an 8:20 p.m. ET kickoff Sunday would be dicey with a player listed as questionable, but Edelman is expected to suit up this weekend. Assuming that's the case, he'll continue to serve as a high-volume target for quarterback Tom Brady. Eight games into the 2019 season, Edelman is sixth in the league with 79 targets and is on pace for 106 catches, 1,148 yards and eight touchdowns.",
    "timestamp": "2019-11-01 02:58 PM",
    "week01": 13.38,
    "week02": 7.2,
    "week03": 15.7,
    "week04": 5.0,
    "week05": 21.0,
    "week06": 15.8,
    "week07": 10.2,
    "week08": 23.5,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [13.38, 7.2, 15.7, 5.0, 21.0, 15.8, 10.2, 23.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.4, 15.2, 9.5, 12.5, 11.8, 16.0, 15.0, 13.0, 11.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15818.png",
    "name": "Keenan Allen",
    "depthchart": "Starter: WR-1",
    "team": "Los Angeles Chargers",
    "projected": 11.7,
    "opponent": "Green Bay Packers",
    "home_away": "",
    "opp_rank": 19,
    "team_rank": 6,
    "avg_fp2": 13.19,
    "opp_rank_allowed_fp2": 9,
    "opp_avg_allowed_fp2": 25.35,
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
    "headlineNews": "Returns to full practice",
    "report": "Allen (hamstring) practiced fully Thursday.",
    "analysis": "It appears as though Allen's limitations at practice Wednesday were maintenance-related, which sets the stage for the Chargers' top pass catcher to head into the weekend minus an injury designation. Allen was viewed as a game-time decision for this past Sunday's 17-16 win over the Bears, but was able to suit up and see action on 31 of the team's 45 snaps on offense, en route to hauling in seven of his 10 targets (which equals his season average) for 53 yards. Heading into Week 9, he's on pace to match his career-high mark of 102 catches.",
    "timestamp": "2019-10-31 02:34 PM",
    "week01": 22.3,
    "week02": 13.8,
    "week03": 37.1,
    "week04": 7.3,
    "week05": 3.8,
    "week06": 4.3,
    "week07": 8.1,
    "week08": 8.8,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [22.3, 13.8, 37.1, 7.3, 3.8, 4.3, 8.1, 8.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.3, 15.5, 14.8, 12.7, 12.3, 11.7, 10.4, 10.8, 11.7]
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
    "opponent": "San Francisco 49ers",
    "home_away": "",
    "opp_rank": 1,
    "team_rank": 19,
    "avg_fp2": 10.76,
    "opp_rank_allowed_fp2": 3,
    "opp_avg_allowed_fp2": 20.69,
    "fanduelSalary": "$5800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#97233F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(151, 35, 63, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#97233F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
    "headlineNews": "Busy in return to action",
    "report": "Kirk (ankle) secured eight of 11 targets for 79 yards and rushed once for 19 yards in the Cardinals' 31-9 loss to the Saints on Sunday.",
    "analysis": "Kirk was Kyler Murray's favorite receiver in the wideout's return from a three-game absence, as he paced the Cardinals in both receptions and targets. Kirk now has double-digit looks in three of his first five games of the season, and Sunday's yardage tally was his second highest of the campaign, although it's certainly worth noting he's yet to find the end zone. Kirk will look to keep the momentum going against the 49ers in a Week 9 Thursday night battle.",
    "timestamp": "2019-10-27 02:17 PM",
    "week01": 8.4,
    "week02": 14.4,
    "week03": 10.9,
    "week04": 6.3,
    "week05": "DNP",
    "week06": "DNP",
    "week07": "DNP",
    "week08": 13.8,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.4, 14.4, 10.9, 6.3, 'DNP', 'DNP', 'DNP', 13.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.5, 11.3, 8.7, 7.4, 'DNP', 'DNP', 'DNP', 9.6, 11.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16460.png",
    "name": "Adam Thielen",
    "depthchart": "Starter: WR-1",
    "team": "Minnesota Vikings",
    "projected": 11.2,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank": 11,
    "team_rank": 16,
    "avg_fp2": 13.57,
    "opp_rank_allowed_fp2": 7,
    "opp_avg_allowed_fp2": 23.75,
    "fanduelSalary": "$7100",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Hamstring",
    "tmColorLite": "#e0aa19",
    "tmColorDark": "#300e5a",
    "tmColorLite_rgba": "rgba(224, 170, 25, 0.2)",
    "tmColorDark_rgba": "rgba(48, 14, 90, 0.2)",
    "tmTextLite": "#e0aa19",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/min.png",
    "headlineNews": "Optimistic he can play",
    "report": "Thielen (hamstring) is optimistic about his odds of playing in Sunday's game against the Chiefs, Ben Goessling of the Minneapolis Star Tribune reports.",
    "analysis": "A limited participant in each practice this week, Thielen is listed as questionable for Sunday's game, with coach Mike Zimmer saying the Vikings likely will put the wide receiver through a pregame workout before a decision on his status is made, per Courtney Cronin of ESPN.com. Cold weather in Kansas City may make it a bit more difficult for Thielen to get his hamstring loose, but he's nonetheless bullish about his chances. A final word on Thielen's status may not come until the Vikings release their inactive list approximately 90 minutes before Sunday's 1 p.m. ET kickoff.",
    "timestamp": "2019-11-01 02:22 PM",
    "week01": 11.8,
    "week02": 10.28,
    "week03": 19.1,
    "week04": 1.6,
    "week05": 28.5,
    "week06": 14.7,
    "week07": 9.0,
    "week08": "DNP",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.8, 10.28, 19.1, 1.6, 28.5, 14.7, 9.0, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.0, 9.7, 13.1, 10.6, 5.1, 9.5, 11.0, 'DNP', 11.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16800.png",
    "name": "Davante Adams",
    "depthchart": "Starter: WR-1",
    "team": "Green Bay Packers",
    "projected": 11.2,
    "opponent": "Los Angeles Chargers",
    "home_away": "at ",
    "opp_rank": 6,
    "team_rank": 8,
    "avg_fp2": 7.19,
    "opp_rank_allowed_fp2": 10,
    "opp_avg_allowed_fp2": 26.02,
    "fanduelSalary": "$8000",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Toe",
    "tmColorLite": "#d7a017",
    "tmColorDark": "#203731",
    "tmColorLite_rgba": "rgba(215, 160, 23, 0.2)",
    "tmColorDark_rgba": "rgba(32, 55, 49, 0.2)",
    "tmTextLite": "#d7a017",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png",
    "headlineNews": "Deemed game-time decision",
    "report": "Adams (toe) is listed as questionable for Sunday's game against the Chargers, with coach Matt LaFleur saying the Packers will wait until 90 minutes before kickoff to announce their decision on the wide receiver, Tom Silverstein of the Milwaukee Journal Sentinel reports.",
    "analysis": "The 4:25 p.m. ET kickoff thus becomes a source of frustration for fantasy managers, though Adams at least appears to be trending in the right direction after three consecutive limited practices this week. Rob Demovsky of ESPN.com notes that the wide receiver looked good at Friday's session, leap-frogging a staff member during a warmup drill. Of course, a single explosive movement isn't the same thing as doing it snap after snap for three hours, so the Packers presumably will put Adams through a more vigorous workout before they make a decision. The team will release its inactive list around 2:55 p.m. ET on Sunday.",
    "timestamp": "2019-11-01 10:39 AM",
    "week01": 5.6,
    "week02": 14.1,
    "week03": 7.6,
    "week04": 23.0,
    "week05": 0.0,
    "week06": 0.0,
    "week07": "DNP",
    "week08": 0.0,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.6, 14.1, 7.6, 23.0, 0.0, 0.0, 'DNP', 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.7, 12.6, 11.3, 9.1, 7.4, 13.2, 'DNP', 5.7, 11.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2974858.png",
    "name": "Kenny Golladay",
    "depthchart": "Starter: WR-1",
    "team": "Detroit Lions",
    "projected": 11.2,
    "opponent": "Oakland Raiders",
    "home_away": "at ",
    "opp_rank": 30,
    "team_rank": 5,
    "avg_fp2": 14.33,
    "opp_rank_allowed_fp2": 27,
    "opp_avg_allowed_fp2": 33.24,
    "fanduelSalary": "$7600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0076B6",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(0, 118, 182, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#0076B6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/det.png",
    "headlineNews": "Scores two TDs vs. Giants",
    "report": "Golladay caught six of eight targets for 123 yards and two touchdowns during Sunday's 31-26 win over the Giants.",
    "analysis": "Golladay led the team in receiving yards while tying for the top spot in targets. He scored a nine-yard touchdown in the third quarter and added a 41-yard score -- which proved decisive on the scoreboard -- with just over two minutes left in the fourth. Although Golladay was held to just one catch a week ago, he's averaged 83 receiving yards per game over the last four while scoring four touchdowns in that span. He'll look to keep it up in a favorable road matchup against the Raiders next Sunday.",
    "timestamp": "2019-10-27 06:03 PM",
    "week01": 12.2,
    "week02": 21.7,
    "week03": 2.7,
    "week04": 21.2,
    "week05": "BYE",
    "week06": 14.6,
    "week07": 2.6,
    "week08": 25.3,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.2, 21.7, 2.7, 21.2, 'BYE', 14.6, 2.6, 25.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.7, 9.7, 15.0, 11.4, 'BYE', 10.7, 9.0, 11.0, 11.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14912.png",
    "name": "Alshon Jeffery",
    "depthchart": "Starter: WR-1",
    "team": "Philadelphia Eagles",
    "projected": 11.1,
    "opponent": "Chicago Bears",
    "home_away": "",
    "opp_rank": 10,
    "team_rank": 21,
    "avg_fp2": 10.13,
    "opp_rank_allowed_fp2": 6,
    "opp_avg_allowed_fp2": 22.73,
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
    "headlineNews": "Leading receiver in Week 8 win",
    "report": "Jeffery caught four of six targets for 64 yards in Sunday's 31-13 win over the Bills.",
    "analysis": "Jeffery led the team in targets and receiving yards, but the entire Eagles passing game remained stuck in low gear as quarterback Carson Wentz came up short of 200 passing yards for the fourth time in five games. The big-bodied wide receiver has become touchdown-dependent, as Jeffery's yardage output has finished in a narrow band between 38 and 76 yards in each of his six healthy games. Up next for Jeffery is a date with the team that drafted him in the second round back in 2012, as the Bears will come to town Week 9.",
    "timestamp": "2019-10-27 02:18 PM",
    "week01": 19.6,
    "week02": 0.0,
    "week03": "DNP",
    "week04": 11.3,
    "week05": 8.2,
    "week06": 18.6,
    "week07": 4.8,
    "week08": 8.4,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [19.6, 0.0, 'DNP', 11.3, 8.2, 18.6, 4.8, 8.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.4, 8.2, 'DNP', 9.6, 11.8, 7.1, 13.1, 9.8, 11.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16799.png",
    "name": "Allen Robinson",
    "depthchart": "Starter: WR-1",
    "team": "Chicago Bears",
    "projected": 11.1,
    "opponent": "Philadelphia Eagles",
    "home_away": "at ",
    "opp_rank": 21,
    "team_rank": 29,
    "avg_fp2": 13.37,
    "opp_rank_allowed_fp2": 31,
    "opp_avg_allowed_fp2": 35.91,
    "fanduelSalary": "$7200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#c36835",
    "tmColorDark": "#0B162A",
    "tmColorLite_rgba": "rgba(195, 104, 53, 0.2)",
    "tmColorDark_rgba": "rgba(11, 22, 42, 0.2)",
    "tmTextLite": "#c36835",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png",
    "headlineNews": "Leads team in targets",
    "report": "Robinson caught five passes for 62 yards in Chicago's 17-16 loss to the Chargers on Sunday.",
    "analysis": "Robinson could've had a pair of touchdowns, but the first didn't work out because the pass was thrown behind him, and on the second opportunity, he was dragged down by a defender for defensive pass interference in the end zone. Although he spent most of the day shadowed by Casey Hayward, he caught five of seven targets while posting at least 60 yards for the sixth time in seventh games, making him a rock-solid weekly lineup option.",
    "timestamp": "2019-10-27 02:42 PM",
    "week01": 13.7,
    "week02": 6.1,
    "week03": 9.0,
    "week04": 11.2,
    "week05": 25.2,
    "week06": "BYE",
    "week07": 19.7,
    "week08": 8.7,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [13.7, 6.1, 9.0, 11.2, 25.2, 'BYE', 19.7, 8.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.1, 15.0, 10.9, 9.7, 11.8, 'BYE', 7.1, 11.0, 11.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4212909.png",
    "name": "David Moore",
    "depthchart": "Reserve: WR-3",
    "team": "Seattle Seahawks",
    "projected": 10.6,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "",
    "opp_rank": 31,
    "team_rank": 13,
    "avg_fp2": 3.72,
    "opp_rank_allowed_fp2": 28,
    "opp_avg_allowed_fp2": 34.69,
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
    "headlineNews": "Hauls in 23-yard pass",
    "report": "Moore caught one of four targets for 23 yards in Sunday's 27-20 win over the Falcons.",
    "analysis": "Moore played 30 of 61 offensive snaps in the victory, clearly out-snapping Jaron Brown (17) and Malik Turner (seven). It has essentially been a rotation between Moore and Brown as the Seahawks' No. 3 wideout, although the majority of the meaningful reps have gone to Tyler Lockett and DK Metcalf this year. Moore has yet to surpass 36 yards in a game this season.",
    "timestamp": "2019-10-28 06:46 AM",
    "week01": "DNP",
    "week02": "DNP",
    "week03": 3.4,
    "week04": 1.4,
    "week05": 7.5,
    "week06": 5.1,
    "week07": 1.9,
    "week08": 3.0,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 3.4, 1.4, 7.5, 5.1, 1.9, 3.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 5.0, 6.7, 2.5, 3.8, 5.2, 4.5, 10.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3915416.png",
    "name": "D.J. Moore",
    "depthchart": "Starter: WR-1",
    "team": "Carolina Panthers",
    "projected": 10.5,
    "opponent": "Tennessee Titans",
    "home_away": "",
    "opp_rank": 16,
    "team_rank": 25,
    "avg_fp2": 10.26,
    "opp_rank_allowed_fp2": 8,
    "opp_avg_allowed_fp2": 24.96,
    "fanduelSalary": "$5400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0085CA",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 133, 202, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#0085CA",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/car.png",
    "headlineNews": "Held in check by stingy 49ers",
    "report": "Moore corralled five of nine targets for 38 receiving yards during Sunday's 51-13 loss to the 49ers.",
    "analysis": "Unlike fellow Panthers wideout Curtis Samuel, Moore had proven to be a high-floor option through the first seven weeks of the regular season by compiling six-plus catches and more than 70 receiving yards in four of his first six outings to kick off the year. Against a San Francisco defense that entered the contest ranked No. 1 in the NFL with 133.5 passing yards allowed per game, however, the second-year receiver struggled to get much going, as the Panthers were held under 30 points for just the second time in the team's past five outings. Upcoming in Week 9 is a matchup against a Titans defense that allowed Mike Evans to rack up 11 catches for 198 yards and two touchdowns, but otherwise did not permit a Buccaneers player to score or exceed 45 receiving yards Sunday.",
    "timestamp": "2019-10-27 05:27 PM",
    "week01": 9.1,
    "week02": 13.4,
    "week03": 12.9,
    "week04": 5.9,
    "week05": 12.1,
    "week06": 12.1,
    "week07": "BYE",
    "week08": 6.3,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.1, 13.4, 12.9, 5.9, 12.1, 12.1, 'BYE', 6.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.8, 11.0, 13.5, 13.1, 9.7, 16.9, 'BYE', 7.3, 10.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3892889.png",
    "name": "Dede Westbrook",
    "depthchart": "Backup: WR-2",
    "team": "Jacksonville Jaguars",
    "projected": 10.2,
    "opponent": "Houston Texans",
    "home_away": "",
    "opp_rank": 28,
    "team_rank": 14,
    "avg_fp2": 7.79,
    "opp_rank_allowed_fp2": 32,
    "opp_avg_allowed_fp2": 36.11,
    "fanduelSalary": "$5400",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Neck",
    "tmColorLite": "#006778",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 103, 120, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#006778",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/jax.png",
    "headlineNews": "Questionable for London game",
    "report": "Westbrook (neck/shoulder) is questionable for Sunday's game against the Texans, Hays Carlyon of 1010 AM WJXL reports.",
    "analysis": "It's not yet clear how much work Westbrook got in at Friday's practice, but he presumably got in at least a limited session for the third day in a row, so he could avoid missing any further action after leaving last week's game early because of his injuries. Those hoping to include Westbrook in their Week 9 lineups will want to check on his status early Sunday morning, as the Jaguars and Texans will kick off at 9:30 ET in London.",
    "timestamp": "2019-11-01 07:47 AM",
    "week01": 11.7,
    "week02": 0.8,
    "week03": 7.5,
    "week04": 9.1,
    "week05": 11.74,
    "week06": 6.8,
    "week07": 14.7,
    "week08": 0.0,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.7, 0.8, 7.5, 9.1, 11.74, 6.8, 14.7, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.5, 13.7, 7.6, 8.7, 10.2, 6.8, 8.9, 12.6, 10.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16733.png",
    "name": "Odell Beckham Jr.",
    "depthchart": "Starter: WR-1",
    "team": "Cleveland Browns",
    "projected": 10.0,
    "opponent": "Denver Broncos",
    "home_away": "at ",
    "opp_rank": 4,
    "team_rank": 20,
    "avg_fp2": 10.3,
    "opp_rank_allowed_fp2": 2,
    "opp_avg_allowed_fp2": 19.88,
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
    "headlineNews": "Cleared for Week 9",
    "report": "Beckham (groin) doesn't have an injury designation for Sunday's game against the Broncos, Mary Kay Cabot of The Cleveland Plain Dealer reports.",
    "analysis": "As was the case Wednesday and Thursday, Beckham remained a limited participant in practice Friday while nursing the groin injury, but the Browns apparently were satisfied enough with his health to clear him to play this weekend. He'll look to put an end to a five-game streak without a touchdown while he takes aim at the Broncos' fourth-ranked pass defense.",
    "timestamp": "2019-11-01 12:15 PM",
    "week01": 10.6,
    "week02": 25.1,
    "week03": 8.6,
    "week04": 3.0,
    "week05": 4.0,
    "week06": 13.1,
    "week07": "BYE",
    "week08": 7.7,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.6, 25.1, 8.6, 3.0, 4.0, 13.1, 'BYE', 7.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.4, 20.6, 14.5, 19.3, 15.5, 11.6, 'BYE', 14.1, 10.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2576623.png",
    "name": "DeVante Parker",
    "depthchart": "Starter: WR-1",
    "team": "Miami Dolphins",
    "projected": 9.7,
    "opponent": "New York Jets",
    "home_away": "",
    "opp_rank": 24,
    "team_rank": 30,
    "avg_fp2": 9.19,
    "opp_rank_allowed_fp2": 25,
    "opp_avg_allowed_fp2": 31.54,
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
    "headlineNews": "Solid target count in loss",
    "report": "Parker caught six of eight targets for 59 yards during Monday's 27-14 loss to the Steelers.",
    "analysis": "Parker has now either eclipsed 50 receiving yards or scored a touchdown in seven of eight contests this season. The 2015 first-round pick has also led the team in targets for two consecutive weeks. He and Preston Williams are operating as the clear top options in Miami's aerial attack, and Parker's consistency makes him worth legitimate fantasy consideration in deeper formats.",
    "timestamp": "2019-10-28 09:12 PM",
    "week01": 9.0,
    "week02": 0.0,
    "week03": 7.1,
    "week04": 15.0,
    "week05": "BYE",
    "week06": 10.3,
    "week07": 14.0,
    "week08": 8.9,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.0, 0.0, 7.1, 15.0, 'BYE', 10.3, 14.0, 8.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.3, 7.3, 6.6, 5.1, 'BYE', 7.6, 5.2, 9.0, 9.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13217.png",
    "name": "Golden Tate",
    "depthchart": "Starter: WR-1",
    "team": "New York Giants",
    "projected": 9.7,
    "opponent": "Dallas Cowboys",
    "home_away": "",
    "opp_rank": 8,
    "team_rank": 17,
    "avg_fp2": 11.38,
    "opp_rank_allowed_fp2": 4,
    "opp_avg_allowed_fp2": 21.94,
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
    "headlineNews": "Leads team in receiving yards",
    "report": "Tate caught eight of 10 targets for 85 yards during Sunday's 31-26 loss to the Lions.",
    "analysis": "Tate, who led the team in receiving yardage, was the only wide receiver with more than five targets. His long gain went for just 18 yards, but through sheer volume, he finished with a respectable day from a fantasy perspective. Tate has now been targeted a whopping 30 times over the last three weeks, coming away with at least 80 receiving yards in each contest. He'll look to continue his recent form in next Monday's home showdown with the Cowboys.",
    "timestamp": "2019-10-27 07:30 PM",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": 2.8,
    "week06": 19.2,
    "week07": 11.0,
    "week08": 12.5,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 2.8, 19.2, 11.0, 12.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 7.2, 9.0, 11.5, 12.4, 9.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3128429.png",
    "name": "Courtland Sutton",
    "depthchart": "Starter: WR-1",
    "team": "Denver Broncos",
    "projected": 9.6,
    "opponent": "Cleveland Browns",
    "home_away": "",
    "opp_rank": 7,
    "team_rank": 27,
    "avg_fp2": 12.64,
    "opp_rank_allowed_fp2": 16,
    "opp_avg_allowed_fp2": 28.83,
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
    "headlineNews": "Snags three passes in loss",
    "report": "Sutton caught three of six targets for 72 yards during Sunday's 15-13 loss in Indianapolis.",
    "analysis": "Sutton came up big midway through the second quarter, catching a pass over the middle and stiff-arming his way for a 33-yard gain to set up a Denver field goal. Sutton looked comfortable in the undisputed WR1 role and Joe Flacco lamented after the game that the Broncos didn't give their sophomore target enough opportunities down the stretch. Denver's offense has been putrid this season, but Sutton has been a bright spot while averaging 16.3 yards per reception and recording a team-high three scores. Next up is a struggling Browns defense team that has been so-so in keeping opposing receivers in front of them this season.",
    "timestamp": "2019-10-27 02:46 PM",
    "week01": 15.5,
    "week02": 6.0,
    "week03": 11.2,
    "week04": 21.2,
    "week05": 17.2,
    "week06": 9.6,
    "week07": 11.7,
    "week08": 8.7,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [15.5, 6.0, 11.2, 21.2, 17.2, 9.6, 11.7, 8.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.9, 6.1, 7.3, 6.9, 6.2, 10.0, 12.2, 14.9, 9.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3135321.png",
    "name": "Hunter Renfrow",
    "depthchart": "Backup: WR-2",
    "team": "Oakland Raiders",
    "projected": 9.4,
    "opponent": "Detroit Lions",
    "home_away": "",
    "opp_rank": 32,
    "team_rank": 15,
    "avg_fp2": 5.04,
    "opp_rank_allowed_fp2": 23,
    "opp_avg_allowed_fp2": 30.69,
    "fanduelSalary": "$5400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A5ACAF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/oak.png",
    "headlineNews": "Secures long TD catch",
    "report": "Renfrow caught all four of his targets for 88 yards and a touchdown during Sunday's 27-24 loss to the Texans.",
    "analysis": "Renfrow got his team on the board in the first quarter when he made a short catch and broke a pair of tackles before sprinting in for a 65-yard touchdown. It was the first big play of Renfrow's young career, which hadn't seen him exceed 30 receiving yards in any game this season. While he should continue to see a handful of targets each time out, he's far from a bankable fantasy option even in next week's inviting home matchup against the Lions.",
    "timestamp": "2019-10-27 08:07 PM",
    "week01": 2.3,
    "week02": 5.0,
    "week03": 4.3,
    "week04": 2.8,
    "week05": 1.7,
    "week06": "BYE",
    "week07": 2.4,
    "week08": 16.8,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.3, 5.0, 4.3, 2.8, 1.7, 'BYE', 2.4, 16.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.6, 7.9, 2.5, 4.8, 2.8, 'BYE', 3.3, 5.2, 9.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3121427.png",
    "name": "Curtis Samuel",
    "depthchart": "Backup: WR-2",
    "team": "Carolina Panthers",
    "projected": 9.0,
    "opponent": "Tennessee Titans",
    "home_away": "",
    "opp_rank": 16,
    "team_rank": 25,
    "avg_fp2": 9.91,
    "opp_rank_allowed_fp2": 8,
    "opp_avg_allowed_fp2": 24.96,
    "fanduelSalary": "$5600",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Shoulder",
    "tmColorLite": "#0085CA",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 133, 202, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#0085CA",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/car.png",
    "headlineNews": "Listed as questionable",
    "report": "Samuel (shoulder) is listed as questionable for Sunday's game against the Titans, David Newton of ESPN.com reports.",
    "analysis": "Samuel didn't practice Wednesday or Friday, but he was a full participant Thursday. While the unusual sequence might lead to some concern, Jourdan Rodrigue of The Athletic relays that Samuel is expected to play in Sunday's game. A 1 p.m. ET kickoff is good news for fantasy managers, allowing for plenty of alternatives if Samuel unexpectedly ends up on the inactive list.",
    "timestamp": "2019-11-01 10:19 AM",
    "week01": 4.7,
    "week02": 11.8,
    "week03": 13.8,
    "week04": 4.8,
    "week05": 5.9,
    "week06": 21.8,
    "week07": "BYE",
    "week08": 6.6,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.7, 11.8, 13.8, 4.8, 5.9, 21.8, 'BYE', 6.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.3, 7.1, 11.0, 11.2, 9.5, 11.1, 'BYE', 6.4, 9.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4047646.png",
    "name": "A.J. Brown",
    "depthchart": "Starter: WR-1",
    "team": "Tennessee Titans",
    "projected": 9.0,
    "opponent": "Carolina Panthers",
    "home_away": "at ",
    "opp_rank": 5,
    "team_rank": 28,
    "avg_fp2": 7.95,
    "opp_rank_allowed_fp2": 24,
    "opp_avg_allowed_fp2": 30.81,
    "fanduelSalary": "$5500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#4495D1",
    "tmColorDark": "#002A5C",
    "tmColorLite_rgba": "rgba(68, 149, 209, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 92, 0.2)",
    "tmTextLite": "#4495D1",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png",
    "headlineNews": "Finds end zone",
    "report": "Brown caught two of his three targets for 11 yards and a touchdown in Week 8 against the Buccaneers.",
    "analysis": "Brown took on a surprisingly small role in the Titans' passing attack, finishing tied for fifth on the team in targets. He also didn't work down the field with those targets, as his longest reception went for just eight yards. However, he did manage to salvage his day by collecting the game-winning touchdown with just under seven minutes remaining in the fourth quarter. Despite Ryan Tannehill giving the offense some new life, it is clear that the team is wiling to rely on its defense and running game to try and produce wins. That makes Brown and the Titans' other receivers volatile fantasy options.",
    "timestamp": "2019-10-28 05:37 AM",
    "week01": 11.5,
    "week02": 4.0,
    "week03": 0.9,
    "week04": 22.9,
    "week05": 3.7,
    "week06": 3.3,
    "week07": 9.2,
    "week08": 8.1,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.5, 4.0, 0.9, 22.9, 3.7, 3.3, 9.2, 8.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.2, 7.8, 4.8, 7.8, 7.8, 8.4, 5.7, 9.5, 9.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16804.png",
    "name": "John Brown",
    "depthchart": "Starter: WR-1",
    "team": "Buffalo Bills",
    "projected": 8.9,
    "opponent": "Washington Redskins",
    "home_away": "",
    "opp_rank": 17,
    "team_rank": 23,
    "avg_fp2": 12.01,
    "opp_rank_allowed_fp2": 21,
    "opp_avg_allowed_fp2": 30.15,
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
    "headlineNews": "Over 50 yards in every game",
    "report": "Brown caught five of eight targets for 54 yards in Sunday's 31-13 loss to the Eagles.",
    "analysis": "Brown led the team in targets, catches and receiving yards, but owners had to have been hoping for more against an Eagles defense that was the worst in the league at defending wide receivers coming in. The 29-year-old receiver should be commended for establishing a high floor despite having the inaccurate Josh Allen throwing him the ball, as Brown has managed to top 50 yards in every game this season. He shouldn't have a problem keeping that streak going against the Redskins in Week 9.",
    "timestamp": "2019-10-27 02:39 PM",
    "week01": 21.8,
    "week02": 10.7,
    "week03": 7.5,
    "week04": 9.4,
    "week05": 10.0,
    "week06": "BYE",
    "week07": 16.8,
    "week08": 7.9,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [21.8, 10.7, 7.5, 9.4, 10.0, 'BYE', 16.8, 7.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.9, 13.9, 12.6, 10.2, 9.6, 'BYE', 11.3, 7.9, 8.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3915399.png",
    "name": "Preston Williams",
    "depthchart": "Backup: WR-2",
    "team": "Miami Dolphins",
    "projected": 8.8,
    "opponent": "New York Jets",
    "home_away": "",
    "opp_rank": 24,
    "team_rank": 30,
    "avg_fp2": 7.59,
    "opp_rank_allowed_fp2": 25,
    "opp_avg_allowed_fp2": 31.54,
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
    "headlineNews": "Targeted seven times in loss",
    "report": "Williams caught four of seven targets for 42 yards during Monday's 27-14 loss to Pittsburgh.",
    "analysis": "After a pair of first-quarter touchdowns, the Steelers did well to stifle Williams and the Dolphins down the stretch. The rookie undrafted free agent has been a bright spot in what has otherwise been a dismal season for Miami, coming out of nowhere to record at least five targets in each game this season. The Dolphins don't have a lot of talent around Williams in the offense to make those opportunities count, however, and he has not been targeted inside the 10-yard line since Week 1 -- a pass that resulted in his only touchdown of the year. Next up is a favorable matchup against the reeling Jets.",
    "timestamp": "2019-10-29 04:02 PM",
    "week01": 9.9,
    "week02": 8.3,
    "week03": 8.8,
    "week04": 6.6,
    "week05": "BYE",
    "week06": 4.1,
    "week07": 9.2,
    "week08": 6.2,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.9, 8.3, 8.8, 6.6, 'BYE', 4.1, 9.2, 6.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.9, 4.2, 5.3, 9.3, 'BYE', 7.2, 8.2, 8.8, 8.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3121422.png",
    "name": "Terry McLaurin",
    "depthchart": "Starter: WR-1",
    "team": "Washington Redskins",
    "projected": 8.7,
    "opponent": "Buffalo Bills",
    "home_away": "at ",
    "opp_rank": 3,
    "team_rank": 31,
    "avg_fp2": 12.83,
    "opp_rank_allowed_fp2": 5,
    "opp_avg_allowed_fp2": 22.14,
    "fanduelSalary": "$5700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#773141",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(119, 49, 65, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png",
    "headlineNews": "Modest production with change at QB",
    "report": "McLaurin secured four of six targets for 39 yards in the Redskins' 19-9 loss to the Vikings on Thursday.",
    "analysis": "McLaurin's modest totals nevertheless served as team bests across the board, as the entire air attack was significantly hamstrung in the second half with Dwayne Haskins taking over for Case Keenum (concussion). McLaurin now has back-to-back quiet games, but the weather (Week 7) and the gameplan (Week 8) have had a significant part to play in the downturn. McLaurin will look to bounce back in another game that could have less-than-ideal circumstances, a Week 9 road matchup versus the Bills a week from Sunday.",
    "timestamp": "2019-10-24 09:12 PM",
    "week01": 21.0,
    "week02": 14.7,
    "week03": 16.0,
    "week04": "DNP",
    "week05": 6.6,
    "week06": 24.0,
    "week07": 1.6,
    "week08": 5.9,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [21.0, 14.7, 16.0, 'DNP', 6.6, 24.0, 1.6, 5.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.5, 13.0, 11.2, 'DNP', 12.2, 13.7, 11.4, 8.7, 8.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2976212.png",
    "name": "Stefon Diggs",
    "depthchart": "Backup: WR-2",
    "team": "Minnesota Vikings",
    "projected": 8.3,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank": 11,
    "team_rank": 16,
    "avg_fp2": 13.6,
    "opp_rank_allowed_fp2": 7,
    "opp_avg_allowed_fp2": 23.75,
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
    "headlineNews": "Another stellar effort",
    "report": "Diggs secured all seven targets for 143 yards in the Vikings' 19-9 win over the Redskins on Thursday. He also lost a fumble.",
    "analysis": "Diggs led both clubs in receptions and receiving yardage on the night and turned in three receptions of more than 30 yards in the process. After a brief bump in the road that even led to trade rumors earlier in the season, Diggs has roared back to put together three consecutive 100-yard efforts that have all consisted of seven-catch tallies. The 25-year-old will look to extend his hot streak in a Week 9 battle against the Chiefs a week from Sunday.",
    "timestamp": "2019-10-24 08:49 PM",
    "week01": 4.7,
    "week02": 9.4,
    "week03": 3.0,
    "week04": 12.3,
    "week05": 5.9,
    "week06": 40.0,
    "week07": 17.7,
    "week08": 15.8,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.7, 9.4, 3.0, 12.3, 5.9, 40.0, 17.7, 15.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.5, 5.4, 10.7, 7.0, 8.8, 6.1, 9.7, 10.6, 8.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/11283.png",
    "name": "DeSean Jackson",
    "depthchart": "Backup: WR-2",
    "team": "Philadelphia Eagles",
    "projected": 7.9,
    "opponent": "Chicago Bears",
    "home_away": "",
    "opp_rank": 10,
    "team_rank": 21,
    "avg_fp2": 15.7,
    "opp_rank_allowed_fp2": 6,
    "opp_avg_allowed_fp2": 22.73,
    "fanduelSalary": "$6100",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Abdomen",
    "tmColorLite": "#386168",
    "tmColorDark": "#004C54",
    "tmColorLite_rgba": "rgba(56, 97, 104, 0.2)",
    "tmColorDark_rgba": "rgba(0, 76, 84, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    "headlineNews": "Officially questionable for Week 9",
    "report": "Jackson (abdomen) is listed as questionable for Sunday's game against the Bears.",
    "analysis": "Jackson has missed the Eagles' last six games, but he took a notable step forward this week by practicing on a limited basis Wednesday through Friday. While the questionable tag implies that Jackson has a 50-50 shot of suiting up Sunday, coach Doug Pederson noted earlier Friday that he's \"optimistic\" the receiver will be ready to go this weekend, per Dave Zangaro of NBC Sports Philadelphia. If active this weekend, Jackson could face a restricted snap count in his first game back from the injury, but he would at least provide the Eagles with a much-needed deep threat.",
    "timestamp": "2019-11-01 12:51 PM",
    "week01": 31.4,
    "week02": 0.0,
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": "DNP",
    "week08": "DNP",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [31.4, 0.0, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.2, 6.8, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 7.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16725.png",
    "name": "Sammy Watkins",
    "depthchart": "Backup: WR-2",
    "team": "Kansas City Chiefs",
    "projected": 7.8,
    "opponent": "Minnesota Vikings",
    "home_away": "",
    "opp_rank": 8,
    "team_rank": 2,
    "avg_fp2": 11.83,
    "opp_rank_allowed_fp2": 20,
    "opp_avg_allowed_fp2": 29.69,
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
    "headlineNews": "Nice target count in return",
    "report": "Watkins reeled in five of his eight targets for 45 yards during Sunday's game against the Packers.",
    "analysis": "Watkins' stay on the sideline lasted the better part of three games, but the Chiefs' receiving corps is now firing on all cylinders. All that awaits them is the return of quarterback Patrick Mahomes, which could come as soon as next Sunday versus the Vikings. Watkins has turned in mediocre outings across the board since his Week 1 explosion, but perhaps having all of the team's offensive weapons back will benefit him. Watkins logged 86 percent of the offensive snaps Sunday, compared to 92-plus percent in each of the first four games, so he may see additional run in his second game back from injury next week.",
    "timestamp": "2019-10-28 07:35 PM",
    "week01": 42.3,
    "week02": 7.9,
    "week03": 8.9,
    "week04": 4.9,
    "week05": 0.0,
    "week06": "DNP",
    "week07": "DNP",
    "week08": 7.0,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [42.3, 7.9, 8.9, 4.9, 0.0, 'DNP', 'DNP', 7.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.1, 12.6, 12.3, 15.8, 10.2, 'DNP', 'DNP', 10.4, 7.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15072.png",
    "name": "Marvin Jones",
    "depthchart": "Backup: WR-2",
    "team": "Detroit Lions",
    "projected": 7.6,
    "opponent": "Oakland Raiders",
    "home_away": "at ",
    "opp_rank": 30,
    "team_rank": 5,
    "avg_fp2": 12.61,
    "opp_rank_allowed_fp2": 27,
    "opp_avg_allowed_fp2": 33.24,
    "fanduelSalary": "$5700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0076B6",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(0, 118, 182, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#0076B6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/det.png",
    "headlineNews": "Held in check vs. Giants",
    "report": "Jones caught four of six targets for 22 yards during Sunday's 31-26 win over the Giants.",
    "analysis": "Jones finished third on the team in targets and receptions, but his long gain went for just six yards in an underwhelming effort. This dud performance was especially notable considering Jones recorded four touchdown catches a week ago, giving him two games with fewer than 25 receiving yards in his last three. The mercurial wideout will look to bounce back in next week's favorable away matchup with the Raiders.",
    "timestamp": "2019-10-27 08:22 PM",
    "week01": 8.0,
    "week02": 6.8,
    "week03": 19.1,
    "week04": 9.2,
    "week05": "BYE",
    "week06": 2.7,
    "week07": 38.3,
    "week08": 4.2,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.0, 6.8, 19.1, 9.2, 'BYE', 2.7, 38.3, 4.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.1, 7.1, 11.6, 6.6, 'BYE', 8.0, 7.2, 7.4, 7.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2576716.png",
    "name": "Jamison Crowder",
    "depthchart": "Reserve: WR-3",
    "team": "New York Jets",
    "projected": 7.5,
    "opponent": "Miami Dolphins",
    "home_away": "at ",
    "opp_rank": 20,
    "team_rank": 32,
    "avg_fp2": 7.16,
    "opp_rank_allowed_fp2": 26,
    "opp_avg_allowed_fp2": 32.9,
    "fanduelSalary": "$5800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#125740",
    "tmColorDark": "#003f2d",
    "tmColorLite_rgba": "rgba(18, 87, 64, 0.2)",
    "tmColorDark_rgba": "rgba(0, 63, 45, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png",
    "headlineNews": "Quiet in Jacksonville",
    "report": "Crowder caught three of five targets for 24 yards in Sunday's 29-15 loss to Jacksonville.",
    "analysis": "Crowder made a great first impression with a 14-catch Jets debut, and he topped 90 yards in both the season opener and New York's Week 6 win over Dallas. The slot receiver has been a non-factor outside of those games, however, failing to top 40 yards in any other contest and still searching for his first touchdown in Green and White. If you're thinking of cutting bait on Crowder, it could be wise to give him one more chance, as he'll face the Dolphins in Week 9.",
    "timestamp": "2019-10-27 03:51 PM",
    "week01": 17.3,
    "week02": 6.0,
    "week03": 3.5,
    "week04": "BYE",
    "week05": 2.0,
    "week06": 12.8,
    "week07": 4.6,
    "week08": 3.9,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [17.3, 6.0, 3.5, 'BYE', 2.0, 12.8, 4.6, 3.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.9, 7.9, 6.6, 'BYE', 5.9, 4.5, 5.1, 7.2, 7.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3932905.png",
    "name": "Diontae Johnson",
    "depthchart": "Backup: WR-2",
    "team": "Pittsburgh Steelers",
    "projected": 7.5,
    "opponent": "Indianapolis Colts",
    "home_away": "",
    "opp_rank": 15,
    "team_rank": 26,
    "avg_fp2": 8.45,
    "opp_rank_allowed_fp2": 15,
    "opp_avg_allowed_fp2": 28.56,
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
    "headlineNews": "Season-high 84 yards in win",
    "report": "Johnson caught five of seven targets for 84 yards and a touchdown in Monday's 27-14 win over the Dolphins.",
    "analysis": "The return of quarterback Mason Rudolph resulted in the 2019 third-rounder having his most productive game this season.  Johnson converted a third-and-20 for a 45-yard touchdown and now has three scores in his last five contests. In Week 9, he'll face an Indianapolis defense that has allowed just two passing touchdowns in its last three games, but Johnson still warrants a degree of fantasy consideration, given that he's emerged as the Steelers' No. 2 wide receiver behind top option JuJu Smith-Schuster.",
    "timestamp": "2019-10-28 10:04 PM",
    "week01": 4.0,
    "week02": 2.2,
    "week03": 13.3,
    "week04": 14.7,
    "week05": 5.68,
    "week06": 2.4,
    "week07": "BYE",
    "week08": 16.9,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.0, 2.2, 13.3, 14.7, 5.68, 2.4, 'BYE', 16.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.8, 3.9, 4.1, 4.5, 5.6, 2.4, 'BYE', 8.3, 7.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16016.png",
    "name": "Kenny Stills",
    "depthchart": "Backup: WR-2",
    "team": "Houston Texans",
    "projected": 7.3,
    "opponent": "Jacksonville Jaguars",
    "home_away": "at ",
    "opp_rank": 14,
    "team_rank": 10,
    "avg_fp2": 7.06,
    "opp_rank_allowed_fp2": 13,
    "opp_avg_allowed_fp2": 28.27,
    "fanduelSalary": "$5500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#03202F",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(3, 32, 47, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/hou.png",
    "headlineNews": "Underwhelms in win over Raiders",
    "report": "Stills caught three of five targets for 22 yards during Sunday's 27-24 win over the Raiders.",
    "analysis": "Stills seemed poised for a productive outing in the absence of Will Fuller (hamstring), but he instead did little of note. He tied for third on the team in targets, with his long gain of 13 yards representing his only significant contribution of the game. Stills is seemingly still reliant on big plays for fantasy production despite an elevated role in the passing game, and this should remain the case next Sunday against the Jaguars in London.",
    "timestamp": "2019-10-27 08:44 PM",
    "week01": "DNP",
    "week02": 4.8,
    "week03": 10.9,
    "week04": 3.4,
    "week05": "DNP",
    "week06": "DNP",
    "week07": 12.5,
    "week08": 3.7,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 4.8, 10.9, 3.4, 'DNP', 'DNP', 12.5, 3.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 2.5, 3.1, 3.0, 'DNP', 'DNP', 5.4, 8.6, 7.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/17437.png",
    "name": "Taylor Gabriel",
    "depthchart": "Backup: WR-2",
    "team": "Chicago Bears",
    "projected": 7.2,
    "opponent": "Philadelphia Eagles",
    "home_away": "at ",
    "opp_rank": 21,
    "team_rank": 29,
    "avg_fp2": 8.8,
    "opp_rank_allowed_fp2": 31,
    "opp_avg_allowed_fp2": 35.91,
    "fanduelSalary": "$4900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#c36835",
    "tmColorDark": "#0B162A",
    "tmColorLite_rgba": "rgba(195, 104, 53, 0.2)",
    "tmColorDark_rgba": "rgba(11, 22, 42, 0.2)",
    "tmTextLite": "#c36835",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png",
    "headlineNews": "Targeted six times",
    "report": "Gabriel caught four passes for 53 yards in Chicago's 17-16 loss to the Chargers on Sunday.",
    "analysis": "Gabriel was second on the team with six targets, and he had a chance for a big play when he was wide open deep down field, but the ball was significantly overthrown. Although he's posted at least 53 yards in two of his last three games, he also has a pair of games with fewer than 12 yards over the last four weeks, making him a difficult player to trust in fantasy lineups.",
    "timestamp": "2019-10-27 02:54 PM",
    "week01": 3.4,
    "week02": 3.0,
    "week03": 29.2,
    "week04": "DNP",
    "week05": "DNP",
    "week06": "BYE",
    "week07": 1.1,
    "week08": 7.3,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.4, 3.0, 29.2, 'DNP', 'DNP', 'BYE', 1.1, 7.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.7, 7.3, 6.8, 'DNP', 'DNP', 'BYE', 3.7, 4.2, 7.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15349.png",
    "name": "Cole Beasley",
    "depthchart": "Backup: WR-2",
    "team": "Buffalo Bills",
    "projected": 6.9,
    "opponent": "Washington Redskins",
    "home_away": "",
    "opp_rank": 17,
    "team_rank": 23,
    "avg_fp2": 8.99,
    "opp_rank_allowed_fp2": 21,
    "opp_avg_allowed_fp2": 30.15,
    "fanduelSalary": "$5600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#005596",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 85, 150, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
    "headlineNews": "Touchdown in two straight",
    "report": "Beasley caught three of seven targets for 41 yards and a touchdown in Sunday's 31-13 loss to Philadelphia.",
    "analysis": "Beasley hauled in a 14-yard touchdown in the second quarter. He's found the end zone in consecutive games but has exactly three receptions in each of his last three games after totaling 24 catches in his first four games with the Bills. The slot receiver will be looking to stretch his touchdown streak to three games in Week 9 against a Redskins defense that's surrendering 24.4 points per game.",
    "timestamp": "2019-10-27 02:51 PM",
    "week01": 6.5,
    "week02": 10.3,
    "week03": 10.8,
    "week04": 11.0,
    "week05": 3.6,
    "week06": "BYE",
    "week07": 9.1,
    "week08": 11.6,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.5, 10.3, 10.8, 11.0, 3.6, 'BYE', 9.1, 11.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.6, 10.5, 8.2, 5.5, 6.2, 'BYE', 6.2, 4.4, 6.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2976592.png",
    "name": "Sterling Shepard",
    "depthchart": "Backup: WR-2",
    "team": "New York Giants",
    "projected": 6.7,
    "opponent": "Dallas Cowboys",
    "home_away": "",
    "opp_rank": 8,
    "team_rank": 17,
    "avg_fp2": 10.28,
    "opp_rank_allowed_fp2": 4,
    "opp_avg_allowed_fp2": 21.94,
    "fanduelSalary": "$6500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#0B2265",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(11, 34, 101, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png",
    "headlineNews": "Clears protocol",
    "report": "Shepard cleared the NFL's concussion protocol Friday and will play Monday against the Cowboys, Jordan Raanan of ESPN.com reports.",
    "analysis": "After suffering his second concussion of the season in the Giants' Week 5 loss to the Vikings, Shepard hadn't managed anything more than limited activity in practices the past three weeks before putting in a full session Thursday. The wideout passed the final step of the concussion protocol Friday, when an independent neurologist granted him full clearance for game action. With Shepard back in the fold following a three-game absence, rookie signal-caller Daniel Jones will have all of his key weapons in the passing game at his disposal for the first time in his seven starts.",
    "timestamp": "2019-11-01 12:37 PM",
    "week01": 7.2,
    "week02": 0.0,
    "week03": 23.6,
    "week04": 13.4,
    "week05": 7.2,
    "week06": "DNP",
    "week07": "DNP",
    "week08": "DNP",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.2, 0.0, 23.6, 13.4, 7.2, 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.5, 11.6, 8.2, 14.4, 10.1, 'DNP', 'DNP', 'DNP', 6.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4035004.png",
    "name": "Mecole Hardman",
    "depthchart": "Reserve: WR-3",
    "team": "Kansas City Chiefs",
    "projected": 6.7,
    "opponent": "Minnesota Vikings",
    "home_away": "",
    "opp_rank": 8,
    "team_rank": 2,
    "avg_fp2": 8.69,
    "opp_rank_allowed_fp2": 20,
    "opp_avg_allowed_fp2": 29.69,
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
    "headlineNews": "Hits paydirt again",
    "report": "Hardman caught both of his targets for 55 yards and a touchdown in Sunday's 31-24 loss to Green Bay.",
    "analysis": "Hardman has seen his targets decrease by one in each game since Tyreek Hill returned from injury, but the speedy wideout has been able to find the end zone in consecutive contests. The speedy rookie will need to bust out big plays in order maintain fantasy value with the rest of the Chiefs' receiving corps back at full strength. Hardman would have a higher chance of breaking off a huge gain if Patrick Mahomes (knee) is able to return for Week 9's matchup with Minnesota.",
    "timestamp": "2019-10-27 10:30 PM",
    "week01": 0.0,
    "week02": 14.1,
    "week03": 17.4,
    "week04": -0.1,
    "week05": 9.3,
    "week06": 6.5,
    "week07": 9.8,
    "week08": 12.5,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 14.1, 17.4, -0.1, 9.3, 6.5, 9.8, 12.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.1, 7.1, 7.8, 8.6, 3.3, 6.4, 4.2, 5.2, 6.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3126486.png",
    "name": "Deebo Samuel",
    "depthchart": "Backup: WR-2",
    "team": "San Francisco 49ers",
    "projected": 6.6,
    "opponent": "Arizona Cardinals",
    "home_away": "at ",
    "opp_rank": 29,
    "team_rank": 24,
    "avg_fp2": 7.25,
    "opp_rank_allowed_fp2": 18,
    "opp_avg_allowed_fp2": 29.41,
    "fanduelSalary": "$5300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "Posts 40 yards on TNF",
    "report": "Samuel had four catches (seven targets) for 40 yards in Thursday's 28-25 win over Arizona.",
    "analysis": "Marquise Goodwin (coach's decision) was a surprising healthy scratch following the acquisition of Emmanuel Sanders at the NFL trade deadline. It was Samuel who entered the starting lineup in Goodwin's place, leapfrogging Dante Pettis on the depth chart as well. Samuel still finished third in terms of targets and receiving yards, a trend that could repeat itself on a weekly basis with established options like Sanders and George Kittle getting the first looks from Jimmy Garoppolo. The promotion to the starting lineup does give Samuel deeper-league appeal heading into another primetime matchup against the Seahawks in Week 10.",
    "timestamp": "2019-11-01 12:02 PM",
    "week01": 3.2,
    "week02": 17.9,
    "week03": 5.9,
    "week04": "BYE",
    "week05": 0.8,
    "week06": 3.4,
    "week07": "DNP",
    "week08": 12.3,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.2, 17.9, 5.9, 'BYE', 0.8, 3.4, 'DNP', 12.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.5, 3.4, 11.9, 'BYE', 5.3, 6.8, 'DNP', 6.1, 6.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3127306.png",
    "name": "Dante Pettis",
    "depthchart": "Reserve: WR-3",
    "team": "San Francisco 49ers",
    "projected": 6.5,
    "opponent": "Arizona Cardinals",
    "home_away": "at ",
    "opp_rank": 29,
    "team_rank": 24,
    "avg_fp2": 2.92,
    "opp_rank_allowed_fp2": 18,
    "opp_avg_allowed_fp2": 29.41,
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
    "headlineNews": "Sticks in backup role",
    "report": "Pettis caught his lone target for 21 yards in Thursday's 28-25 win over the Cardinals.",
    "analysis": "Pettis was removed from his starting role last week against the Panthers, and he retained the decreased role (30 percent of offensive snaps Thursday) behind rookie Deebo Samuel against Arizona. The second-year receiver has really seen his stock plummet after posting WR1 numbers over the final quarter of the 2018 season. With the trade deadline passed, Pettis will continue to serve a backup role (eliminating nearly all of his fantasy value) heading into another divisional matchup against the Seahawks next Monday.",
    "timestamp": "2019-11-01 02:53 PM",
    "week01": 1.2,
    "week02": 0.64,
    "week03": 10.0,
    "week04": "BYE",
    "week05": 1.6,
    "week06": 6.0,
    "week07": 0.0,
    "week08": 1.0,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.2, 0.64, 10.0, 'BYE', 1.6, 6.0, 0.0, 1.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.8, 5.3, 5.9, 'BYE', 9.4, 6.3, 6.4, 2.6, 6.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3921958.png",
    "name": "Chris Conley",
    "depthchart": "Reserve: WR-3",
    "team": "Jacksonville Jaguars",
    "projected": 6.5,
    "opponent": "Houston Texans",
    "home_away": "",
    "opp_rank": 28,
    "team_rank": 14,
    "avg_fp2": 8.43,
    "opp_rank_allowed_fp2": 32,
    "opp_avg_allowed_fp2": 36.11,
    "fanduelSalary": "$5800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#006778",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 103, 120, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#006778",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/jax.png",
    "headlineNews": "Burns Jets for 70-yard score",
    "report": "Cnley caught four of seven targets for 103 yards and a touchdown in Sunday's 29-15 win over the Jets.",
    "analysis": "Conley ripped off a 70-yard touchdown in the first quarter for his first trip to the end zone since Week 1. The big-play receiver has heated back up after a slump, topping 80 yards in consecutive games following a four-week stretch in which he totaled just 73 yards. Conley will look to keep rolling in Week 9 against the Texans.",
    "timestamp": "2019-10-27 03:08 PM",
    "week01": 18.7,
    "week02": 9.3,
    "week03": 4.0,
    "week04": 2.2,
    "week05": 3.1,
    "week06": 0.0,
    "week07": 11.8,
    "week08": 18.3,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [18.7, 9.3, 4.0, 2.2, 3.1, 0.0, 11.8, 18.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.7, 7.9, 2.7, 2.0, 3.1, 3.1, 3.6, 6.6, 6.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4241372.png",
    "name": "Marquise Brown",
    "depthchart": "Starter: WR-1",
    "team": "Baltimore Ravens",
    "projected": 6.3,
    "opponent": "New England Patriots",
    "home_away": "",
    "opp_rank": 2,
    "team_rank": 18,
    "avg_fp2": 12.22,
    "opp_rank_allowed_fp2": 1,
    "opp_avg_allowed_fp2": 19.2,
    "fanduelSalary": "$5300",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Ankle",
    "tmColorLite": "#9E7C0C",
    "tmColorDark": "#241773",
    "tmColorLite_rgba": "rgba(158, 124, 12, 0.2)",
    "tmColorDark_rgba": "rgba(36, 23, 115, 0.2)",
    "tmTextLite": "#9E7C0C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png",
    "headlineNews": "Draws questionable tag",
    "report": "Brown (ankle/thigh) is listed as questionable for Sunday's game against the Patriots.",
    "analysis": "Coach John Harbaugh expects Brown to play, but Jamison Hensley of ESPN.com cautions that the wide receiver may not handle his usual workload. Brown missed the final two games before Baltimore's Week 8 bye, then returned to practice Wednesday and Thursday as a limited participant. The team then held him out from Friday's practice, with Harbaugh suggesting it was a matter of caution rather than any type of setback. Even so, an 8:20 p.m. ET kickoff is tricky for fantasy managers, limiting the alternatives if Brown is declared inactive.",
    "timestamp": "2019-11-01 01:44 PM",
    "week01": 28.7,
    "week02": 12.6,
    "week03": 5.9,
    "week04": 4.2,
    "week05": 9.7,
    "week06": "DNP",
    "week07": "DNP",
    "week08": "BYE",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [28.7, 12.6, 5.9, 4.2, 9.7, 'DNP', 'DNP', 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.6, 14.5, 10.2, 15.1, 9.6, 'DNP', 'DNP', 'BYE', 6.3]
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
    "opponent": "Green Bay Packers",
    "home_away": "",
    "opp_rank": 19,
    "team_rank": 6,
    "avg_fp2": 7.84,
    "opp_rank_allowed_fp2": 9,
    "opp_avg_allowed_fp2": 25.35,
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
    "headlineNews": "Drops deep touchdown pass",
    "report": "Williams caught three of his six targets for 69 yards in the 17-16 win Sunday over the Bears.",
    "analysis": "Williams led the team in receiving yards, but a badly dropped touchdown on a deep pass in the first half likely ruined what could have been a breakout game for the 25-year-old. Quarterback Philip Rivers' lone interception came on what would probably count as a misplay by Williams, as the third-year receiver didn't come back to an errant pass far enough, resulting in cornerback Kyle Fuller jumping in front of the misguided pass attempt. Still, it seems as if Williams is knocking on the door of a fantasy outburst each week, and he should have more opportunities next week against a Packers secondary that has struggled to stop the pass in recent weeks.",
    "timestamp": "2019-10-27 02:09 PM",
    "week01": 3.9,
    "week02": 9.8,
    "week03": 6.0,
    "week04": "DNP",
    "week05": 10.4,
    "week06": 9.7,
    "week07": 6.7,
    "week08": 8.4,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.9, 9.8, 6.0, 'DNP', 10.4, 9.7, 6.7, 8.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.2, 9.4, 8.1, 'DNP', 5.5, 6.8, 6.1, 5.9, 6.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/17258.png",
    "name": "Willie Snead",
    "depthchart": "Backup: WR-2",
    "team": "Baltimore Ravens",
    "projected": 6.1,
    "opponent": "New England Patriots",
    "home_away": "",
    "opp_rank": 2,
    "team_rank": 18,
    "avg_fp2": 6.0,
    "opp_rank_allowed_fp2": 1,
    "opp_avg_allowed_fp2": 19.2,
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
    "headlineNews": "Receives one-year extension",
    "report": "Snead agreed to a one-year, $6 million extension Monday, Adam Schefter of ESPN reports.",
    "analysis": "The deal is fully guaranteed and locks Snead into the 2020 campaign with the Ravens. He's proved to be a solid fit with Lamar Jackson, reeling in 15 of 22 targets for 223 yards and two touchdowns in seven games this season. Those numbers aren't eye-popping, but they are decent enough in a run-based offense, and behind more explosive options like tight end Mark Andrews and rookie wide receiver Marquise Brown (ankle).",
    "timestamp": "2019-10-28 04:02 PM",
    "week01": 11.1,
    "week02": 1.0,
    "week03": 6.2,
    "week04": 13.1,
    "week05": 7.1,
    "week06": 3.3,
    "week07": 0.2,
    "week08": "BYE",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.1, 1.0, 6.2, 13.1, 7.1, 3.3, 0.2, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.9, 11.8, 6.4, 8.5, 6.1, 7.7, 9.6, 'BYE', 6.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2579604.png",
    "name": "Phillip Dorsett",
    "depthchart": "Backup: WR-2",
    "team": "New England Patriots",
    "projected": 6.0,
    "opponent": "Baltimore Ravens",
    "home_away": "at ",
    "opp_rank": 26,
    "team_rank": 7,
    "avg_fp2": 9.31,
    "opp_rank_allowed_fp2": 20,
    "opp_avg_allowed_fp2": 30.23,
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
    "headlineNews": "Catches three passes Sunday",
    "report": "Dorsett was on the field for 64 of a possible 69 snaps on offense in Sunday's 27-13 win over the Browns, en route to catching three of his six targets for 43 yards.",
    "analysis": "Meanwhile, Julian Edelman logged 66 snaps, while newcomer Mohamed Sanu was on the field for 37 snaps. Once Sanu becomes more acclimated with the team's offense, his workload figures to expand, probably at Dorsett's expense. There's still some deep-league fantasy value to be found from whoever serves as the Patriots' No. 3 wide receiver, but as long as Edelman and Sanu remain healthy, Dorsett's target share figures to be inconsistent.",
    "timestamp": "2019-10-28 09:19 AM",
    "week01": 23.5,
    "week02": 5.4,
    "week03": 15.5,
    "week04": 2.9,
    "week05": 0.0,
    "week06": "DNP",
    "week07": 12.1,
    "week08": 5.8,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [23.5, 5.4, 15.5, 2.9, 0.0, 'DNP', 12.1, 5.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [0.7, 3.8, 5.4, 3.5, 3.3, 'DNP', 5.4, 7.1, 6.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2978109.png",
    "name": "Zach Pascal",
    "depthchart": "Starter: WR-1",
    "team": "Indianapolis Colts",
    "projected": 5.8,
    "opponent": "Pittsburgh Steelers",
    "home_away": "at ",
    "opp_rank": 13,
    "team_rank": 22,
    "avg_fp2": 7.24,
    "opp_rank_allowed_fp2": 17,
    "opp_avg_allowed_fp2": 29.04,
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
    "headlineNews": "Should help fill in for Hilton",
    "report": "Pascal is expected to step in as the Colts' No. 1 wideout Sunday in Pittsburgh after coach Frank Reich said T.Y. Hilton (calf) could be sidelined for three weeks, Zak Keefer of The Athletic reports.",
    "analysis": "Over the six games he's played this season, Hilton averaged 5.3 receptions, 60 yards and 7.6 targets while scoring five times. Pascal shouldn't be expected to match that volume or efficiency, but he'll nonetheless be in store for more consistent involvement in the passing game as the Colts look to replace their top option. Rather than counting on Pascal to act as a one-for-one replacement for Hilton, the Colts likely will turn to multiple pass catchers to step up their production in the next few weeks. Along with Pascal, young receivers Deon Cain and Parris Campbell are expected to benefit from mild bumps in playing time and targets while Hilton is sidelined.",
    "timestamp": "2019-11-01 10:51 AM",
    "week01": 0.0,
    "week02": 0.0,
    "week03": 12.3,
    "week04": 9.2,
    "week05": 2.5,
    "week06": "BYE",
    "week07": 25.6,
    "week08": 1.1,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 0.0, 12.3, 9.2, 2.5, 'BYE', 25.6, 1.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [-1.2, 1.5, 1.8, 1.5, 0.8, 'BYE', 5.4, 6.8, 5.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/5528.png",
    "name": "Larry Fitzgerald",
    "depthchart": "Backup: WR-2",
    "team": "Arizona Cardinals",
    "projected": 5.7,
    "opponent": "San Francisco 49ers",
    "home_away": "",
    "opp_rank": 1,
    "team_rank": 19,
    "avg_fp2": 9.46,
    "opp_rank_allowed_fp2": 3,
    "opp_avg_allowed_fp2": 20.69,
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
    "headlineNews": "Makes four grabs in loss",
    "report": "Fitzgerald secured all four targets for 38 yards in the Cardinals' 28-25 loss to the 49ers on Thursday.",
    "analysis": "Fitzgerald did all his damage within close proximity of the line of scrimmage, and he turned in his third straight sub-40-yard effort in the process. The future Hall of Famer hasn't found the end zone since Week 3, either, and his upside remains capped in an offense that emphasizes the short pass more often than not. Fitzgerald will look to improve his overall numbers against the Buccaneers' vulnerable secondary in a Week 10 matchup a week from Sunday.",
    "timestamp": "2019-10-31 10:02 PM",
    "week01": 21.3,
    "week02": 12.9,
    "week03": 12.1,
    "week04": 7.2,
    "week05": 8.8,
    "week06": 9.9,
    "week07": 1.7,
    "week08": 1.8,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [21.3, 12.9, 12.1, 7.2, 8.8, 9.9, 1.7, 1.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.1, 14.5, 13.4, 9.2, 10.3, 18.3, 14.2, 12.6, 5.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2972460.png",
    "name": "Breshad Perriman",
    "depthchart": "Reserve: WR-3",
    "team": "Tampa Bay Buccaneers",
    "projected": 5.7,
    "opponent": "Seattle Seahawks",
    "home_away": "at ",
    "opp_rank": 27,
    "team_rank": 9,
    "avg_fp2": 0.88,
    "opp_rank_allowed_fp2": 12,
    "opp_avg_allowed_fp2": 27.06,
    "fanduelSalary": "$4600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#D50A0A",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(213, 10, 10, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#D50A0A",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Catchless on four targets",
    "report": "Perriman was unable to haul in any of his four targets during Sunday' 27-23 loss to the Titans.",
    "analysis": "Though he had yet to link up with Jameis Winston to that point, Winston looked Perriman's way deep in the final moments of Sunday's loss with the Buccaneers attempting a comeback. However, Titans defensive back Logan Ryan seemed to run Perriman's route ahead of him and picked the pass off. After the game, head coach Bruce Arians blamed Winstons' two INTs on the receivers, including Perriman. The fourth-year player has been incredibly inefficient this season with just three catches for 16 yards on 16 targets. Sunday brings a Seahawks team that has surrendered plenty of passing yards this season, but expect them to be accumulated by the likes of Chris Godwin and Mike Evans instead.",
    "timestamp": "2019-10-29 04:25 PM",
    "week01": 2.0,
    "week02": 0.0,
    "week03": 2.4,
    "week04": 0.0,
    "week05": "DNP",
    "week06": "DNP",
    "week07": "BYE",
    "week08": 0.0,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.0, 0.0, 2.4, 0.0, 'DNP', 'DNP', 'BYE', 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.4, 4.6, 7.8, 1.9, 'DNP', 'DNP', 'BYE', 2.9, 5.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3916945.png",
    "name": "Darius Slayton",
    "depthchart": "Reserve: WR-3",
    "team": "New York Giants",
    "projected": 5.6,
    "opponent": "Dallas Cowboys",
    "home_away": "",
    "opp_rank": 8,
    "team_rank": 17,
    "avg_fp2": 8.78,
    "opp_rank_allowed_fp2": 4,
    "opp_avg_allowed_fp2": 21.94,
    "fanduelSalary": "$5400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#0B2265",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(11, 34, 101, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png",
    "headlineNews": "Catches two TD passes",
    "report": "Slayton caught two of five targets for 50 yards and two touchdowns during Sunday's 31-26 loss to the Lions.",
    "analysis": "Slayton made the most of his two grabs, which capped off back-to-back touchdown drives in the second quarter. He had totaled five catches for 60 yards over the previous two games, so this efficient effort was likely a pleasant surprise to fantasy owners who rolled the dice on him this week. Despite Slayton's performance in this one, the Giants have several other options ahead of him on offense, which far from guarantees him similar results in next Monday's home matchup against the Cowboys.",
    "timestamp": "2019-10-27 08:32 PM",
    "week01": "DNP",
    "week02": "DNP",
    "week03": 9.7,
    "week04": 2.3,
    "week05": 14.2,
    "week06": 4.7,
    "week07": 3.8,
    "week08": 18.0,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 9.7, 2.3, 14.2, 4.7, 3.8, 18.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 1.6, 8.3, 6.0, 7.3, 9.9, 9.6, 5.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3042778.png",
    "name": "Corey Davis",
    "depthchart": "Backup: WR-2",
    "team": "Tennessee Titans",
    "projected": 5.4,
    "opponent": "Carolina Panthers",
    "home_away": "at ",
    "opp_rank": 5,
    "team_rank": 28,
    "avg_fp2": 7.08,
    "opp_rank_allowed_fp2": 24,
    "opp_avg_allowed_fp2": 30.81,
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
    "headlineNews": "Alarmingly inefficient Week 8",
    "report": "Davis caught two of six targets for nine receiving yards during Sunday's 27-23 win against the Buccaneers.",
    "analysis": "The 24-year-old wideout was dealing with an illness leading into a Week 8 matchup against Tampa Bay's 32nd-ranked pass defense, perhaps explaining why he was unable to make any sort of substantial impact  despite facing a somewhat lenient opponent. Davis' first start alongside Ryan Tannehill in Week 7 was extremely encouraging, as he racked up six catches for 80 yards and a touchdown, but in Week 8 he was contained to fewer than 40 receiving yards for the third time in his past four outings. Upcoming next is a matchup against a Panthers team that entered the weekend as one of the NFL's eight best pass defenses with just 225 yards allowed per game through the air.",
    "timestamp": "2019-10-27 02:17 PM",
    "week01": 0.0,
    "week02": 5.3,
    "week03": 5.9,
    "week04": 17.6,
    "week05": 3.8,
    "week06": 5.1,
    "week07": 17.0,
    "week08": 1.9,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 5.3, 5.9, 17.6, 3.8, 5.1, 17.0, 1.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.0, 5.8, 3.1, 9.5, 7.3, 9.4, 6.0, 12.3, 5.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/17051.png",
    "name": "Albert Wilson",
    "depthchart": "Reserve: WR-3",
    "team": "Miami Dolphins",
    "projected": 5.4,
    "opponent": "New York Jets",
    "home_away": "",
    "opp_rank": 24,
    "team_rank": 30,
    "avg_fp2": 4.03,
    "opp_rank_allowed_fp2": 25,
    "opp_avg_allowed_fp2": 31.54,
    "fanduelSalary": "$4500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#008E97",
    "tmColorDark": "#005778",
    "tmColorLite_rgba": "rgba(0, 142, 151, 0.2)",
    "tmColorDark_rgba": "rgba(0, 87, 120, 0.2)",
    "tmTextLite": "#f5821f",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/mia.png",
    "headlineNews": "Practices fully",
    "report": "Wilson (ankle/hip) was a full participant in practice Friday.",
    "analysis": "After upgrading from limited activity in practice Wednesday and Thursday, Wilson will enter Sunday's matchup with the Jets minus an injury designation. Since returning from a three-game absence in Week 6, Wilson has played fewer than 40 percent of the Dolphins' offensive snaps in each of the three contests that followed, totaling seven catches for 42 yards and a touchdown across 10 targets.",
    "timestamp": "2019-11-01 01:44 PM",
    "week01": 2.4,
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "BYE",
    "week06": 4.0,
    "week07": 2.7,
    "week08": 7.0,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.4, 'DNP', 'DNP', 'DNP', 'BYE', 4.0, 2.7, 7.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.9, 'DNP', 'DNP', 'DNP', 'BYE', 4.3, 3.0, 2.5, 5.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16790.png",
    "name": "Jarvis Landry",
    "depthchart": "Backup: WR-2",
    "team": "Cleveland Browns",
    "projected": 5.2,
    "opponent": "Denver Broncos",
    "home_away": "at ",
    "opp_rank": 4,
    "team_rank": 20,
    "avg_fp2": 9.49,
    "opp_rank_allowed_fp2": 2,
    "opp_avg_allowed_fp2": 19.88,
    "fanduelSalary": "$6200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FF3C00",
    "tmColorDark": "#311D00",
    "tmColorLite_rgba": "rgba(255, 60, 0, 0.2)",
    "tmColorDark_rgba": "rgba(49, 29, 0, 0.2)",
    "tmTextLite": "#FF3C00",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
    "headlineNews": "Good to go for Week 9",
    "report": "Landry (shoulder) doesn't have an injury designation for Sunday's game against the Broncos, Mary Kay Cabot of The Cleveland Plain Dealer reports.",
    "analysis": "Just like fellow wideout Odell Beckham (groin), Landry received clearance to play Sunday despite being limited in practice all week by an injury. Landry isn't expected to face any restrictions as a result of the injury, though the matchup with the Broncos' fourth-ranked pass defense (194.8 passing yards allowed per game) isn't all that ideal for the slot wideout. That being said, Landry may benefit from not facing shadow coverage from the Broncos' top cornerback, Chris Harris, who said Wednesday that he preferred to trail Beckham in Week 9, per Nicki Jhabvala of The Athletic.",
    "timestamp": "2019-11-01 12:21 PM",
    "week01": 9.7,
    "week02": 4.7,
    "week03": 7.7,
    "week04": 20.7,
    "week05": 9.5,
    "week06": 5.1,
    "week07": "BYE",
    "week08": 9.0,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.7, 4.7, 7.7, 20.7, 9.5, 5.1, 'BYE', 9.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.0, 11.8, 6.6, 11.2, 7.8, 6.8, 'BYE', 8.5, 5.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3050487.png",
    "name": "Anthony Miller",
    "depthchart": "Reserve: WR-3",
    "team": "Chicago Bears",
    "projected": 5.1,
    "opponent": "Philadelphia Eagles",
    "home_away": "at ",
    "opp_rank": 21,
    "team_rank": 29,
    "avg_fp2": 3.86,
    "opp_rank_allowed_fp2": 31,
    "opp_avg_allowed_fp2": 35.91,
    "fanduelSalary": "$5100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#c36835",
    "tmColorDark": "#0B162A",
    "tmColorLite_rgba": "rgba(195, 104, 53, 0.2)",
    "tmColorDark_rgba": "rgba(11, 22, 42, 0.2)",
    "tmTextLite": "#c36835",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png",
    "headlineNews": "Leads team in receiving",
    "report": "Miller caught three passes for 67 yards in the Bears' 17-16 loss to the Chargers on Sunday.",
    "analysis": "The good news was that Miller led the Bears in receiving yardage, but unfortunately, he logged just three targets. When counted upon, he came up with a big reception on a fourth down to move the chains while also adding a 35-yard grab to help boost his yardage total. With at least 52 yards in each of his last three games, he's now a player who can be considered as a weekly fantasy option, though in a low-volume passing attack, he has clear downside as well.",
    "timestamp": "2019-10-27 02:56 PM",
    "week01": 0.0,
    "week02": 0.7,
    "week03": 2.0,
    "week04": 2.1,
    "week05": 7.2,
    "week06": "BYE",
    "week07": 6.8,
    "week08": 8.2,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 0.7, 2.0, 2.1, 7.2, 'BYE', 6.8, 8.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.0, 5.5, 5.1, 4.1, 3.3, 'BYE', 2.2, 6.9, 5.1]
                    }
                    
                    ]
               }
            }];



$scope.positionTE = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3051876.png",
    "name": "Evan Engram",
    "depthchart": "Starter: TE-1",
    "team": "New York Giants",
    "projected": 15.4,
    "opponent": "Dallas Cowboys",
    "home_away": "",
    "opp_rank": 8,
    "team_rank": 17,
    "avg_fp2": 11.34,
    "opp_rank_allowed_fp2": 27,
    "opp_avg_allowed_fp2": 11.76,
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
    "headlineNews": "Finds end zone versus Lions",
    "report": "Engram caught four of seven targets for 40 yards and a touchdown during Sunday's 31-26 loss to the Lions.",
    "analysis": "Engram finished third on the team in targets, and although he averaged just 10.0 yards per catch, he salvaged his day from a fantasy perspective with a two-yard touchdown grab in the third quarter. He recorded just one catch last week in a favorable matchup against Arizona, so although he was held under 55 receiving yards for the fourth straight game, this was a much more useful effort from the tight end. Engram could be utilized often next Monday against a Cowboys team he torched in the opening game of the season.",
    "timestamp": "2019-10-27 06:34 PM",
    "week01": 23.1,
    "week02": 7.8,
    "week03": 20.3,
    "week04": 7.4,
    "week05": 7.7,
    "week06": "DNP",
    "week07": 1.1,
    "week08": 12.0,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [23.1, 7.8, 20.3, 7.4, 7.7, 'DNP', 1.1, 12.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.3, 9.6, 16.1, 11.5, 16.2, 'DNP', 15.7, 13.2, 15.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2576925.png",
    "name": "Darren Waller",
    "depthchart": "Starter: TE-1",
    "team": "Oakland Raiders",
    "projected": 14.9,
    "opponent": "Detroit Lions",
    "home_away": "",
    "opp_rank": 32,
    "team_rank": 15,
    "avg_fp2": 13.04,
    "opp_rank_allowed_fp2": 18,
    "opp_avg_allowed_fp2": 9.49,
    "fanduelSalary": "$6800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A5ACAF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/oak.png",
    "headlineNews": "Salvages day with touchdown grab",
    "report": "Waller caught two of eight targets for 11 yards and a touchdown during Sunday's 31-26 win over the Raiders.",
    "analysis": "Waller received lots of attention from the Houston defense on the day, as he hauled in just a quarter of the passes sent his way. Luckily, one of his two grabs produced an eight-yard touchdown, which salvaged his day from a fantasy perspective. Although Waller hadn't reached the end zone prior to last week, he's scored three times in his last two games to add another dimension to his fantasy utility. He'll look to continue his breakout campaign next Sunday at home against the Lions.",
    "timestamp": "2019-10-27 06:50 PM",
    "week01": 10.5,
    "week02": 9.3,
    "week03": 20.6,
    "week04": 8.8,
    "week05": 5.9,
    "week06": "BYE",
    "week07": 28.1,
    "week08": 8.1,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.5, 9.3, 20.6, 8.8, 5.9, 'BYE', 28.1, 8.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.0, 7.6, 6.4, 14.1, 10.7, 'BYE', 9.6, 10.2, 14.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3046439.png",
    "name": "Hunter Henry",
    "depthchart": "Starter: TE-1",
    "team": "Los Angeles Chargers",
    "projected": 14.0,
    "opponent": "Green Bay Packers",
    "home_away": "",
    "opp_rank": 19,
    "team_rank": 6,
    "avg_fp2": 13.35,
    "opp_rank_allowed_fp2": 27,
    "opp_avg_allowed_fp2": 11.64,
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
    "headlineNews": "Kept in check",
    "report": "Henry caught four of his six targets for 47 yards in the 17-16 win Sunday over the Bears.",
    "analysis": "This was always going to be a difficult matchup for Henry and the rest of the Chargers, so it seemed likely the third-year tight end would have trouble replicating his previous two weeks figures. In a game in which quarterback Philip Rivers completed just 19 passes, it's a positive sign that Henry netted over a fifth of the looks, and it seems likely the 24-year-old will continue to be an elite option at the fantasy tight end position, especially with a handful of easier matchups to come.",
    "timestamp": "2019-10-27 02:23 PM",
    "week01": 8.0,
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": 26.0,
    "week07": 12.7,
    "week08": 6.7,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.0, 'DNP', 'DNP', 'DNP', 'DNP', 26.0, 12.7, 6.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.2, 'DNP', 'DNP', 'DNP', 'DNP', 10.5, 14.9, 14.6, 14.0]
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
    "opponent": "Arizona Cardinals",
    "home_away": "at ",
    "opp_rank": 29,
    "team_rank": 24,
    "avg_fp2": 10.57,
    "opp_rank_allowed_fp2": 32,
    "opp_avg_allowed_fp2": 17.7,
    "fanduelSalary": "$7200",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Knee",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "Gets good news from MRI",
    "report": "Kittle (knee) said Friday he avoided a serious injury, Ian Rapoport of NFL Network reports.",
    "analysis": "Kittle apparently got good news from the MRI he required after playing through a knee injury for the entirety of Thursday's 28-25 win over the Cardinals. He hurt his knee on the 49ers' first offensive snap, yet finished with six catches for 79 yards and a touchdown on eight targets. Kittle saw his snap share drop to 69 percent, so the injury wasn't a total non-factor. He'll have some extra time to recover before the 49ers face the Seahawks in Week 10 on Monday Night Football.",
    "timestamp": "2019-11-01 12:22 PM",
    "week01": 9.4,
    "week02": 6.9,
    "week03": 8.7,
    "week04": "BYE",
    "week05": 17.8,
    "week06": 14.3,
    "week07": 5.3,
    "week08": 11.6,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.4, 6.9, 8.7, 'BYE', 17.8, 14.3, 5.3, 11.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.8, 8.1, 13.3, 'BYE', 11.8, 10.0, 8.9, 9.5, 11.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116365.png",
    "name": "Mark Andrews",
    "depthchart": "Starter: TE-1",
    "team": "Baltimore Ravens",
    "projected": 8.7,
    "opponent": "New England Patriots",
    "home_away": "",
    "opp_rank": 2,
    "team_rank": 18,
    "avg_fp2": 11.27,
    "opp_rank_allowed_fp2": 2,
    "opp_avg_allowed_fp2": 4.62,
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
    "headlineNews": "Catches two of eight targets",
    "report": "Andrews caught two of his eight targets for 39 yards during Sunday's 30-14 win over the Seahawks.",
    "analysis": "On a day when the Ravens threw the ball just 20 times, Andrews dominated with a 40 percent target share. He failed to haul in just a quarter of the balls thrown his way, however, and made no real impact outside of a 33-yard catch-and-run. While this is obviously a disappointing showing for Andrews' fantasy owners, it should be noted that he still has 99 receiving yards or a touchdown in four of seven games this season. He'll face another tough matchup next Sunday night against the Patriots.",
    "timestamp": "2019-10-20 04:50 PM",
    "week01": 20.8,
    "week02": 21.2,
    "week03": 3.0,
    "week04": 11.1,
    "week05": 7.0,
    "week06": 10.9,
    "week07": 4.9,
    "week08": "BYE",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [20.8, 21.2, 3.0, 11.1, 7.0, 10.9, 4.9, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.9, 7.6, 10.9, 11.5, 11.8, 10.6, 11.8, 'BYE', 8.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/10475.png",
    "name": "Greg Olsen",
    "depthchart": "Starter: TE-1",
    "team": "Carolina Panthers",
    "projected": 8.4,
    "opponent": "Tennessee Titans",
    "home_away": "",
    "opp_rank": 16,
    "team_rank": 25,
    "avg_fp2": 7.59,
    "opp_rank_allowed_fp2": 23,
    "opp_avg_allowed_fp2": 10.41,
    "fanduelSalary": "$5300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0085CA",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 133, 202, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#0085CA",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/car.png",
    "headlineNews": "Shut down during Week 8 drubbing",
    "report": "Olsen caught both of his targets for 13 receiving yards during Sunday's 51-13 loss to the 49ers.",
    "analysis": "The veteran tight end's production has taken a substantial dip since a red-hot start, as he has been held scoreless while averaging two catches for 17.5 yards per game over his past four appearances, after putting up 16 catches for 221 yards and two touchdowns between Weeks 1 and 3. Olsen was dealing with a back injury through the latter stages of September, but he appears recovered as the Panthers prepare for an upcoming matchup against a Titans defense that's tied for the third-most receiving touchdowns allowed to opposing tight ends.",
    "timestamp": "2019-10-27 07:38 PM",
    "week01": 5.6,
    "week02": 14.0,
    "week03": 22.5,
    "week04": 1.5,
    "week05": 0.0,
    "week06": 7.2,
    "week07": "BYE",
    "week08": 2.3,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.6, 14.0, 22.5, 1.5, 0.0, 7.2, 'BYE', 2.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.3, 12.3, 16.4, 10.0, 8.2, 16.2, 'BYE', 7.2, 8.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15835.png",
    "name": "Zach Ertz",
    "depthchart": "Starter: TE-1",
    "team": "Philadelphia Eagles",
    "projected": 8.2,
    "opponent": "Chicago Bears",
    "home_away": "",
    "opp_rank": 10,
    "team_rank": 21,
    "avg_fp2": 8.36,
    "opp_rank_allowed_fp2": 22,
    "opp_avg_allowed_fp2": 10.16,
    "fanduelSalary": "$6000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#386168",
    "tmColorDark": "#004C54",
    "tmColorLite_rgba": "rgba(56, 97, 104, 0.2)",
    "tmColorDark_rgba": "rgba(0, 76, 84, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    "headlineNews": "Slump continues",
    "report": "Ertz caught two of four targets for 20 yards in Sunday's 31-13 win over the Bills.",
    "analysis": "Ertz set a season low in yardage for a second straight week while also watching fellow tight end Dallas Goedert score a touchdown for the second game in a row. It's too early to press the panic button on the star tight end, but a Week 9 dud from Ertz against the Bears would certainly set off alarm bells for his owners, especially if Goedert continues to outplay him.",
    "timestamp": "2019-10-27 02:01 PM",
    "week01": 7.9,
    "week02": 13.2,
    "week03": 8.4,
    "week04": 10.0,
    "week05": 14.2,
    "week06": 5.4,
    "week07": 4.8,
    "week08": 3.0,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.9, 13.2, 8.4, 10.0, 14.2, 5.4, 4.8, 3.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.1, 7.5, 11.6, 9.1, 12.4, 4.3, 9.2, 5.0, 8.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15847.png",
    "name": "Travis Kelce",
    "depthchart": "Starter: TE-1",
    "team": "Kansas City Chiefs",
    "projected": 7.8,
    "opponent": "Minnesota Vikings",
    "home_away": "",
    "opp_rank": 8,
    "team_rank": 2,
    "avg_fp2": 11.79,
    "opp_rank_allowed_fp2": 15,
    "opp_avg_allowed_fp2": 8.68,
    "fanduelSalary": "$6700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Finds end zone in loss",
    "report": "Kelce caught four passes (on eight targets) for 63 yards and a touchdown in Sunday's 31-24 loss to Green Bay.",
    "analysis": "Kelce was able to post his second-best fantasy line of the season despite having backup quarterback Matt Moore under center. It was just the 30-year-old's second touchdown through eight games, and the lack of scores is really the only criticism that can be made of the star tight end through the first half of the season, in which he's logged 42 receptions for 604 yards to go along with the two TDs. There's a chance that Patrick Mahomes (knee) could return for Week 9's matchup with the Vikings, a team that has been average against tight ends this year, ranking 14th for fantasy points allowed to opponents at the position.",
    "timestamp": "2019-10-27 09:57 PM",
    "week01": 10.3,
    "week02": 20.2,
    "week03": 12.4,
    "week04": 12.92,
    "week05": 9.0,
    "week06": 7.8,
    "week07": 7.4,
    "week08": 14.3,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.3, 20.2, 12.4, 12.92, 9.0, 7.8, 7.4, 14.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.6, 13.9, 10.7, 12.0, 15.7, 14.5, 12.8, 8.1, 7.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13232.png",
    "name": "Jimmy Graham",
    "depthchart": "Starter: TE-1",
    "team": "Green Bay Packers",
    "projected": 7.2,
    "opponent": "Los Angeles Chargers",
    "home_away": "at ",
    "opp_rank": 6,
    "team_rank": 8,
    "avg_fp2": 6.49,
    "opp_rank_allowed_fp2": 10,
    "opp_avg_allowed_fp2": 7.95,
    "fanduelSalary": "$6000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#d7a017",
    "tmColorDark": "#203731",
    "tmColorLite_rgba": "rgba(215, 160, 23, 0.2)",
    "tmColorDark_rgba": "rgba(32, 55, 49, 0.2)",
    "tmTextLite": "#d7a017",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png",
    "headlineNews": "Available to play Week 9",
    "report": "Graham (ankle) doesn't carry an injury designation into Sunday's game against the Chargers, Ryan Wood of the Green Bay Press-Gazette reports.",
    "analysis": "Graham's participation in practice was limited all week due to the ankle issue, but that was probably for maintenance purposes more than anything else. Given his lack of an injury designation, Graham can be expected to play the majority of the tight-end snaps in Week 9, as has been the case in all but one of the Packers' eight games this season.",
    "timestamp": "2019-11-01 01:09 PM",
    "week01": 10.5,
    "week02": 0.0,
    "week03": 0.0,
    "week04": 15.1,
    "week05": 5.6,
    "week06": 2.7,
    "week07": 14.5,
    "week08": 3.5,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.5, 0.0, 0.0, 15.1, 5.6, 2.7, 14.5, 3.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.7, 7.9, 6.6, 5.8, 15.2, 10.7, 7.8, 9.4, 7.2]
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
    "opponent": "Pittsburgh Steelers",
    "home_away": "at ",
    "opp_rank": 13,
    "team_rank": 22,
    "avg_fp2": 5.36,
    "opp_rank_allowed_fp2": 25,
    "opp_avg_allowed_fp2": 10.96,
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
    "headlineNews": "Role on offense could grow",
    "report": "Doyle could see an enhanced role in the Colts' passing game Sunday against the Steelers with T.Y. Hilton (calf) ruled out for the contest and at risk of missing multiple weeks, Mike Wells of ESPN.com reports.",
    "analysis": "Doyle paced the Colts with 61 receiving yards in the Week 8 win over Denver, but his fantasy upside has generally been capped throughout the season while he's split work at tight end with Eric Ebron. There could be room for both tight ends to see the field more frequently together beginning in Week 9, as the athletic Ebron's ability to slot out wide could help the Colts compensate for a receiver room otherwise lacking in high-impact talent beyond Hilton. Along with the likes of Ebron and Doyle, Wells predicts that Zach Pascal will step in as the new WR1 sans Hilton, while the Marlon Mack-led running game may also take on more prominence.",
    "timestamp": "2019-11-01 02:52 PM",
    "week01": 2.5,
    "week02": 3.1,
    "week03": 6.6,
    "week04": 10.2,
    "week05": 3.4,
    "week06": "BYE",
    "week07": 3.6,
    "week08": 8.1,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.5, 3.1, 6.6, 10.2, 3.4, 'BYE', 3.6, 8.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.6, 7.1, 5.2, 2.4, 5.8, 'BYE', 5.0, 4.9, 7.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/17453.png",
    "name": "Cameron Brate",
    "depthchart": "Starter: TE-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 6.7,
    "opponent": "Seattle Seahawks",
    "home_away": "at ",
    "opp_rank": 27,
    "team_rank": 9,
    "avg_fp2": 4.94,
    "opp_rank_allowed_fp2": 30,
    "opp_avg_allowed_fp2": 13.22,
    "fanduelSalary": "$5100",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Ribs",
    "tmColorLite": "#D50A0A",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(213, 10, 10, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#D50A0A",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Questionable despite full practice",
    "report": "Brate (ribs) was a full practice participant Friday and is listed as questionable for Sunday's game in Seattle, John Boyle of the Seahawks' official site reports.",
    "analysis": "After opening the week as a non-participant in practice, Brate upgraded to limited participation Thursday and then full participation Friday. Despite the questionable designation, Brate seems to be on track to play Sunday, while fellow tight end O.J. Howard (hamstring) has been ruled out for another week. Brate caught three passes for 32 yards in last week's 27-23 loss to the Titans, with season highs for both targets (six) and snap share (67 percent). An unexpected absence Sunday would free up playing time for Antony Auclair and Tanner Hudson.",
    "timestamp": "2019-11-01 01:17 PM",
    "week01": 1.8,
    "week02": 2.0,
    "week03": 1.7,
    "week04": 11.1,
    "week05": 1.6,
    "week06": 11.7,
    "week07": "BYE",
    "week08": 4.7,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.8, 2.0, 1.7, 11.1, 1.6, 11.7, 'BYE', 4.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.1, 1.2, 4.8, 1.4, 3.4, 6.3, 'BYE', 6.7, 6.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16121.png",
    "name": "Luke Willson",
    "depthchart": "Starter: TE-1",
    "team": "Seattle Seahawks",
    "projected": 6.6,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "",
    "opp_rank": 31,
    "team_rank": 13,
    "avg_fp2": 1.32,
    "opp_rank_allowed_fp2": 31,
    "opp_avg_allowed_fp2": 15.0,
    "fanduelSalary": "$4300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#69BE28",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(105, 190, 40, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#69BE28",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
    "headlineNews": "Snags one pass in win",
    "report": "Willson caught his only target for seven yards in Sunday's 27-20 win over the Falcons.",
    "analysis": "Willson is clearly the Seahawks' top tight end with Will Dissly (Achilles) out of the picture, as he garnered 43 of 61 offensive snaps (70 percent). However, neither Willson or Jacob Hollister (two catches for 18 yards) have made a real impact as a receiving option yet.",
    "timestamp": "2019-10-28 06:53 AM",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": 1.5,
    "week06": 2.6,
    "week07": 0.0,
    "week08": 1.2,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 1.5, 2.6, 0.0, 1.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 0.9, 0.8, 1.0, 2.8, 6.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3051806.png",
    "name": "Ricky Seals-Jones",
    "depthchart": "Starter: TE-1",
    "team": "Cleveland Browns",
    "projected": 6.3,
    "opponent": "Denver Broncos",
    "home_away": "at ",
    "opp_rank": 4,
    "team_rank": 20,
    "avg_fp2": 5.96,
    "opp_rank_allowed_fp2": 12,
    "opp_avg_allowed_fp2": 8.1,
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
    "headlineNews": "Position leader in snaps",
    "report": "Seals-Jones was untargeted over 31 snaps in Sunday's 27-13 loss to the Patriots in Week 8.",
    "analysis": "Seals-Jones was the position leader in snaps for the second straight week, followed by Pharaoh Brown (29) and Demetrius Harris (13). He's blipped on the radar a couple of times this season, most recently catching three passes on six targets with a 31-yard touchdown in Week 6. He also had an 82-yard game with a score in Week 4's romp over the Ravens. The Browns don't have a tight end in the top 50 in receptions, but a Cleveland tight end has accounted for five of quarterback Baker Mayfield's six touchdowns. At some point, David Njoku (wrist) could return to dominate the position, but that won't happen until Week 12 at the earliest.",
    "timestamp": "2019-10-28 07:30 PM",
    "week01": "DNP",
    "week02": "DNP",
    "week03": 1.9,
    "week04": 15.7,
    "week05": 0.0,
    "week06": 12.2,
    "week07": "BYE",
    "week08": 0.0,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 1.9, 15.7, 0.0, 12.2, 'BYE', 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 2.3, 2.2, 0.9, 5.1, 'BYE', 3.2, 6.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4527.png",
    "name": "Jason Witten",
    "depthchart": "Starter: TE-1",
    "team": "Dallas Cowboys",
    "projected": 5.8,
    "opponent": "New York Giants",
    "home_away": "at ",
    "opp_rank": 25,
    "team_rank": 4,
    "avg_fp2": 7.04,
    "opp_rank_allowed_fp2": 4,
    "opp_avg_allowed_fp2": 6.22,
    "fanduelSalary": "$5000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#7F9695",
    "tmColorDark": "#041E42",
    "tmColorLite_rgba": "rgba(127, 150, 149, 0.2)",
    "tmColorDark_rgba": "rgba(4, 30, 66, 0.2)",
    "tmTextLite": "#7F9695",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
    "headlineNews": "Four catches in win",
    "report": "Witten caught all four of his targets for 33 yards in Sunday's 37-10 win over the Eagles.",
    "analysis": "Witten wasn't needed much in the passing game as the Cowboys led this contest wire to wire. The veteran tight end remained involved though, helping his tackles maul the Philly defensive front to open holes for Ezekiel Elliott. The un-retired legend continues to be a high-floor, low-ceiling PPR option, averaging 3.7 receptions and 37.6 receiving yards while rarely straying far from those averages. A few more red-zone looks would help boost his fantasy value -- he hasn't hit pay dirt since Week 2 -- heading into a matchup against the Giants in Week 9 following the team's bye.",
    "timestamp": "2019-10-21 12:28 AM",
    "week01": 9.0,
    "week02": 10.5,
    "week03": 6.9,
    "week04": 5.0,
    "week05": 4.4,
    "week06": 8.2,
    "week07": 5.3,
    "week08": "BYE",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.0, 10.5, 6.9, 5.0, 4.4, 8.2, 5.3, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.7, 7.8, 9.1, 11.8, 7.7, 9.2, 8.0, 'BYE', 5.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15773.png",
    "name": "Darren Fells",
    "depthchart": "Starter: TE-1",
    "team": "Houston Texans",
    "projected": 5.4,
    "opponent": "Jacksonville Jaguars",
    "home_away": "at ",
    "opp_rank": 14,
    "team_rank": 10,
    "avg_fp2": 8.24,
    "opp_rank_allowed_fp2": 19,
    "opp_avg_allowed_fp2": 9.66,
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
    "headlineNews": "Surprise TD leader",
    "report": "Fells caught six of six targets for 58 yards and two touchdowns in Sunday's 27-24 win over the Raiders in Week 8.",
    "analysis": "Fells was the safety valve on a pair of plays extended by quarterback Dehsaun Watson's legs. It was the second multi-touchdown effort of the season, giving him a career-high five over eight games, tops on the Texans. The 33-year-old tight end has caught all seven of his red-zone targets for 75 yards and five scores.",
    "timestamp": "2019-10-27 08:02 PM",
    "week01": 0.0,
    "week02": 1.4,
    "week03": 13.4,
    "week04": 1.7,
    "week05": 15.0,
    "week06": 9.9,
    "week07": 3.7,
    "week08": 20.8,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 1.4, 13.4, 1.7, 15.0, 9.9, 3.7, 20.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [-0.7, 1.7, 1.1, 3.0, 2.7, 4.5, 2.3, 5.5, 5.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14054.png",
    "name": "Kyle Rudolph",
    "depthchart": "Starter: TE-1",
    "team": "Minnesota Vikings",
    "projected": 5.3,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank": 11,
    "team_rank": 16,
    "avg_fp2": 3.65,
    "opp_rank_allowed_fp2": 20,
    "opp_avg_allowed_fp2": 9.78,
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
    "headlineNews": "Just three receptions Thursday",
    "report": "Rudolph had three receptions for 17 yards on three targets in Thursday's win over Washington.",
    "analysis": "Rudolph didn't repeat his season-high performance in Week 7 (five receptions and a touchdown) even with Adam Thielen sidelined with a hamstring injury. Although he could see an increase in targets if Thielen doesn't return next week, Rudolph remains largely an afterthought in Minnesota's passing game. For fantasy purposes, Rudolph only carries weekly value as a red-zone longshot.",
    "timestamp": "2019-10-25 10:57 AM",
    "week01": 0.0,
    "week02": 2.4,
    "week03": 1.6,
    "week04": 1.7,
    "week05": 0.9,
    "week06": 5.1,
    "week07": 14.3,
    "week08": 3.2,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 2.4, 1.6, 1.7, 0.9, 5.1, 14.3, 3.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.6, 3.6, 9.0, 5.5, 4.1, 5.2, 7.8, 5.0, 5.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15853.png",
    "name": "Vance McDonald",
    "depthchart": "Starter: TE-1",
    "team": "Pittsburgh Steelers",
    "projected": 4.4,
    "opponent": "Indianapolis Colts",
    "home_away": "",
    "opp_rank": 15,
    "team_rank": 26,
    "avg_fp2": 5.85,
    "opp_rank_allowed_fp2": 26,
    "opp_avg_allowed_fp2": 11.5,
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
    "headlineNews": "Another disappointing effort",
    "report": "McDonald caught 3 of 4 targets for 19 yards in Monday's 27-14 win over the Dolphins.",
    "analysis": "The tight end has become an afterthought in the Pittsburgh offense, with McDonald averaging 24.3 yards on less than three receptions per game. Outside of his seven-catch, two-touchdown game against Seattle in Week 2, he has done little to merit lineup consideration this season. Fantasy owners shouldn't expect that to change in Week 9 against the Colts, as they've allowed opposing tight ends to score just one touchdown in their last four games.",
    "timestamp": "2019-10-28 09:55 PM",
    "week01": 5.0,
    "week02": 19.3,
    "week03": 1.5,
    "week04": "DNP",
    "week05": 4.9,
    "week06": 1.0,
    "week07": "BYE",
    "week08": 3.4,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.0, 19.3, 1.5, 'DNP', 4.9, 1.0, 'BYE', 3.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.5, 4.3, 6.4, 'DNP', 4.9, 3.0, 'BYE', 5.1, 4.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15887.png",
    "name": "Ryan Griffin",
    "depthchart": "Starter: TE-1",
    "team": "New York Jets",
    "projected": 3.7,
    "opponent": "Miami Dolphins",
    "home_away": "at ",
    "opp_rank": 20,
    "team_rank": 32,
    "avg_fp2": 5.39,
    "opp_rank_allowed_fp2": 13,
    "opp_avg_allowed_fp2": 8.23,
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
    "headlineNews": "Two-TD game out of nowhere",
    "report": "Griffin caught all four of his targets for 66 yards and two touchdowns while also hauling in a two-point conversion in Sunday's 29-15 loss to Jacksonville.",
    "analysis": "Griffin posted his best game of the season, highlighted by a 24-yard touchdown in the first quarter and a three-yard score in the third to bring his season touchdown total to three. He followed up the latter score with a two-point conversion. This was a nice performance, but Griffin still figures to be relegated to a backup role once Chris Herndon returns from his hamstring injury, which could be as soon as Week 9 in Miami.",
    "timestamp": "2019-10-27 03:21 PM",
    "week01": 2.5,
    "week02": 0.0,
    "week03": 1.0,
    "week04": "BYE",
    "week05": 0.7,
    "week06": 10.3,
    "week07": 0.6,
    "week08": 22.6,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.5, 0.0, 1.0, 'BYE', 0.7, 10.3, 0.6, 22.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.8, 7.2, 1.5, 'BYE', 4.5, 6.7, 4.2, 2.9, 3.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4036133.png",
    "name": "T.J. Hockenson",
    "depthchart": "Starter: TE-1",
    "team": "Detroit Lions",
    "projected": 3.6,
    "opponent": "Oakland Raiders",
    "home_away": "at ",
    "opp_rank": 30,
    "team_rank": 5,
    "avg_fp2": 6.5,
    "opp_rank_allowed_fp2": 29,
    "opp_avg_allowed_fp2": 12.46,
    "fanduelSalary": "$5000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0076B6",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(0, 118, 182, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#0076B6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/det.png",
    "headlineNews": "One catch against Giants",
    "report": "Hockenson caught his only target for 21 yards during Sunday's 31-26 victory over the Giants.",
    "analysis": "Despite a soft matchup, Hockenson didn't see many passes come his way. Instead, he watched Danny Amendola serve as Matthew Stafford's favorite short-range weapon. Playing time isn't the issue with Hockenson -- he saw almost double the offensive snaps of the next-busiest tight end in Jesse James -- but rather it's Stafford's propensity to spread the ball around. As long as Amendola, Kenny Golladay and Marvin Jones stay healthy, it will continue to be difficult to trust Hockenson as anything more than a low-floor, somewhat-high-upside fantasy play.",
    "timestamp": "2019-10-28 09:58 AM",
    "week01": 22.1,
    "week02": 1.2,
    "week03": 0.6,
    "week04": 10.2,
    "week05": "BYE",
    "week06": 4.1,
    "week07": 4.7,
    "week08": 2.6,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [22.1, 1.2, 0.6, 10.2, 'BYE', 4.1, 4.7, 2.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.4, 7.3, 5.2, 1.2, 'BYE', 3.4, 4.9, 5.5, 3.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3921690.png",
    "name": "Josh Oliver",
    "depthchart": "Starter: TE-1",
    "team": "Jacksonville Jaguars",
    "projected": 3.0,
    "opponent": "Houston Texans",
    "home_away": "",
    "opp_rank": 28,
    "team_rank": 14,
    "avg_fp2": 1.1,
    "opp_rank_allowed_fp2": 7,
    "opp_avg_allowed_fp2": 7.6,
    "fanduelSalary": "$4000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#006778",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 103, 120, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#006778",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/jax.png",
    "headlineNews": "Makes first career catch",
    "report": "Oliver caught one of two targets for six yards in Sunday's win over the Jets.",
    "analysis": "Offensive coordinator John DeFilippo indicated the rookie third-round pick would be more involved in Week 8, but he ended up seeing only a slight uptick in snaps and again worked behind starter Seth DeValve as the team's second tight end. No. 3 tight end Ben Koyack actually only played one fewer snap, though he wasn't targeted. Oliver and DeValve have combined for three catches and 17 yards in the last two games, keeping them both out of fantasy consideration until they become more involved.",
    "timestamp": "2019-10-28 12:18 PM",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": "DNP",
    "week08": 1.1,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 1.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 2.9, 3.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14145.png",
    "name": "Charles Clay",
    "depthchart": "Starter: TE-1",
    "team": "Arizona Cardinals",
    "projected": 2.9,
    "opponent": "San Francisco 49ers",
    "home_away": "",
    "opp_rank": 1,
    "team_rank": 19,
    "avg_fp2": 2.66,
    "opp_rank_allowed_fp2": 1,
    "opp_avg_allowed_fp2": 4.31,
    "fanduelSalary": "$4800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#97233F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(151, 35, 63, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#97233F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
    "headlineNews": "Good to go Week 9",
    "report": "Clay (back) doesn't have an injury designation for Thursday's game versus the 49ers.",
    "analysis": "Clay opened the week with back-to-back listings of limited participation on the Cardinals' practice report, only to put in a full showing Wednesday. With his status not in question for Thursday, he'll continue to split the tight end reps with fellow veteran Maxx Williams.",
    "timestamp": "2019-10-30 02:34 PM",
    "week01": 1.0,
    "week02": 1.1,
    "week03": 1.4,
    "week04": 0.8,
    "week05": 3.2,
    "week06": 1.8,
    "week07": 1.7,
    "week08": 10.3,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.0, 1.1, 1.4, 0.8, 3.2, 1.8, 1.7, 10.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.9, 1.1, 9.1, 3.6, 4.1, 4.5, 1.7, 0.8, 2.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2582410.png",
    "name": "Tyler Kroft",
    "depthchart": "Starter: TE-1",
    "team": "Buffalo Bills",
    "projected": 2.6,
    "opponent": "Washington Redskins",
    "home_away": "",
    "opp_rank": 17,
    "team_rank": 23,
    "avg_fp2": 1.4,
    "opp_rank_allowed_fp2": 16,
    "opp_avg_allowed_fp2": 8.89,
    "fanduelSalary": "$4500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#005596",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 85, 150, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
    "headlineNews": "First catches of season",
    "report": "Kroft caught two balls on four targets for 32 yards during Sunday's loss to the Eagles.",
    "analysis": "Both of Kroft's catches went for first downs on a nasty, windy day that made it tough for even the strong-armed Josh Allen and Carson Wentz to throw the ball. Kroft was on the field for 58 percent of the offensive plays, while rookie Dawson Knox saw 45 percent, blocker Lee Smith 32 percent, and Tommy Sweeney was inactive. Kroft didn't get a single target in his first game of the season last week, so the modest Week 8 production represents improved involvement in the offense. Still, this isn't an effective passing team and Kroft has to share looks with too many others to offer consistent value.",
    "timestamp": "2019-10-28 07:33 AM",
    "week01": "DNP",
    "week02": 0.0,
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "BYE",
    "week07": 0.0,
    "week08": 4.2,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 0.0, 'DNP', 'DNP', 'DNP', 'BYE', 0.0, 4.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 2.2, 'DNP', 'DNP', 'DNP', 'BYE', 0.6, 2.6, 2.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3054212.png",
    "name": "Jonnu Smith",
    "depthchart": "Starter: TE-1",
    "team": "Tennessee Titans",
    "projected": 2.0,
    "opponent": "Carolina Panthers",
    "home_away": "at ",
    "opp_rank": 5,
    "team_rank": 28,
    "avg_fp2": 4.8,
    "opp_rank_allowed_fp2": 11,
    "opp_avg_allowed_fp2": 7.97,
    "fanduelSalary": "$5500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#4495D1",
    "tmColorDark": "#002A5C",
    "tmColorLite_rgba": "rgba(68, 149, 209, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 92, 0.2)",
    "tmTextLite": "#4495D1",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png",
    "headlineNews": "Getting another start",
    "report": "Smith is poised for another start Week 9 against the Panthers after teammate Delanie Walker (ankle) was ruled out for the contest, Turron Davenport of ESPN.com reports.",
    "analysis": "Smith took full advantage of Walker's injury during last week's 27-23 win over Tampa Bay, catching six of seven targets for 78 yards and a touchdown. He'll face a much tougher pass defense this time around, but his rapport with Ryan Tannehill should lead to a fair share of targets. Of course, Tannehill also seems to have taken a liking to Anthony Firkser, who caught three of five targets for 43 yards last week, logging 56 percent of snaps on offense (compared to 73 percent for Smith).",
    "timestamp": "2019-11-01 02:09 PM",
    "week01": 2.2,
    "week02": 0.0,
    "week03": 3.0,
    "week04": 1.0,
    "week05": 6.2,
    "week06": 1.3,
    "week07": 7.9,
    "week08": 16.8,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.2, 0.0, 3.0, 1.0, 6.2, 1.3, 7.9, 16.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.4, 2.8, 0.5, 1.4, 0.5, -0.4, 1.3, 6.7, 2.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4036131.png",
    "name": "Noah Fant",
    "depthchart": "Starter: TE-1",
    "team": "Denver Broncos",
    "projected": 1.6,
    "opponent": "Cleveland Browns",
    "home_away": "",
    "opp_rank": 7,
    "team_rank": 27,
    "avg_fp2": 4.0,
    "opp_rank_allowed_fp2": 17,
    "opp_avg_allowed_fp2": 9.47,
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
    "headlineNews": "Targeted season-high eight times",
    "report": "Fant caught five of eight targets for 26 yards during Sunday's 15-13 loss in Indianapolis.",
    "analysis": "A question heading into Sunday was which Bronco would benefit from Emmanuel Sanders' trade to San Francisco. The early indications are positive for Fant, who set season highs in catches and targets, albeit with measly yardage. Despite his unique size-speed combination, Fant is only averaging 9.8 yards per reception and has been a relative non-factor in the red zone with his only touchdown of the season coming on a 25-yard screen play in Week 4. The results may not improve much, but expect Fant to get WR2-level targets down the stretch on a Denver team without many options at receiver.",
    "timestamp": "2019-10-27 03:00 PM",
    "week01": 3.4,
    "week02": 5.3,
    "week03": 3.2,
    "week04": 10.1,
    "week05": 1.1,
    "week06": 2.6,
    "week07": 1.2,
    "week08": 5.1,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.4, 5.3, 3.2, 10.1, 1.1, 2.6, 1.2, 5.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.5, 5.6, 0.5, 4.1, 2.9, 4.6, 8.9, 4.6, 1.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116164.png",
    "name": "Mike Gesicki",
    "depthchart": "Starter: TE-1",
    "team": "Miami Dolphins",
    "projected": 1.3,
    "opponent": "New York Jets",
    "home_away": "",
    "opp_rank": 24,
    "team_rank": 30,
    "avg_fp2": 3.26,
    "opp_rank_allowed_fp2": 6,
    "opp_avg_allowed_fp2": 6.67,
    "fanduelSalary": "$4800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#008E97",
    "tmColorDark": "#005778",
    "tmColorLite_rgba": "rgba(0, 142, 151, 0.2)",
    "tmColorDark_rgba": "rgba(0, 87, 120, 0.2)",
    "tmTextLite": "#f5821f",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/mia.png",
    "headlineNews": "Grabs two passes in loss",
    "report": "Gesicki caught two of three targets for 10 yards during Monday's 27-14 loss to the Steelers.",
    "analysis": "Monday's outing marked the third time in Gesicki's last five games that he was held to 15 or fewer yards. He has just one 50-yard game this season and has yet to score a touchdown. For all the accolades the former Penn State product earned as an athletic specimen ahead of the 2018 draft, he's struggled to establish himself on a team that isn't exactly full of top-notch weapons. Though Gesicki's a good red-zone target in theory, just two of his 25 targets this season have come inside the 20. Don't expect much of a change Sunday, even against a struggling Jets squad.",
    "timestamp": "2019-10-29 03:55 PM",
    "week01": 4.1,
    "week02": 1.6,
    "week03": 2.4,
    "week04": 0.0,
    "week05": "BYE",
    "week06": 6.6,
    "week07": 6.1,
    "week08": 2.0,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.1, 1.6, 2.4, 0.0, 'BYE', 6.6, 6.1, 2.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.4, 3.0, 1.7, 7.2, 'BYE', 4.1, 0.4, 8.1, 1.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2980073.png",
    "name": "Jeremy Sprinkle",
    "depthchart": "Starter: TE-1",
    "team": "Washington Redskins",
    "projected": 0.5,
    "opponent": "Buffalo Bills",
    "home_away": "at ",
    "opp_rank": 3,
    "team_rank": 31,
    "avg_fp2": 2.36,
    "opp_rank_allowed_fp2": 3,
    "opp_avg_allowed_fp2": 5.77,
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
    "headlineNews": "Picks up 12 yards in loss",
    "report": "Sprinkle caught both of his targets for 12 yards during Thursday's 19-9 loss to the Vikings.",
    "analysis": "Though Sprinkle continues to serve as Washington's No. 1 tight end with Vernon Davis (concussion) sidelined, he has yet to put together a game this season in which he has topped two catches or 25 yards. While some low-usage tight ends still carry value by stealing the occasional touchdown, Sprinkle has not seen a red-zone target in four consecutive games and has been targeted there just twice this season. With the way this Washington offense is rolling, he seems to offer little value in Week 9 against a typically stingy Buffalo defense.",
    "timestamp": "2019-10-29 07:25 PM",
    "week01": 1.3,
    "week02": 1.6,
    "week03": 2.9,
    "week04": 2.5,
    "week05": 2.7,
    "week06": 3.4,
    "week07": 2.3,
    "week08": 2.2,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.3, 1.6, 2.9, 2.5, 2.7, 3.4, 2.3, 2.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [-0.4, 2.7, 2.0, 1.6, 3.6, 1.8, 2.7, 1.8, 0.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16974.png",
    "name": "Trey Burton",
    "depthchart": "Starter: TE-1",
    "team": "Chicago Bears",
    "projected": 0.1,
    "opponent": "Philadelphia Eagles",
    "home_away": "at ",
    "opp_rank": 21,
    "team_rank": 29,
    "avg_fp2": 2.57,
    "opp_rank_allowed_fp2": 14,
    "opp_avg_allowed_fp2": 8.56,
    "fanduelSalary": "$4800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#c36835",
    "tmColorDark": "#0B162A",
    "tmColorLite_rgba": "rgba(195, 104, 53, 0.2)",
    "tmColorDark_rgba": "rgba(11, 22, 42, 0.2)",
    "tmTextLite": "#c36835",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png",
    "headlineNews": "Another disappointing performance",
    "report": "Burton caught one pass for 16 yards in the Bears' 17-16 loss to the Chargers on Sunday.",
    "analysis": "Aside from his only reception, Burton was targeted in the corner of the end zone, but the pass was uncatchable. He's yet to surpass 20 yards in a game this season, and his lack of upside makes him an uninspiring fantasy option.",
    "timestamp": "2019-10-27 02:53 PM",
    "week01": "DNP",
    "week02": 1.5,
    "week03": 4.0,
    "week04": 2.6,
    "week05": 3.1,
    "week06": "BYE",
    "week07": 2.1,
    "week08": 2.1,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 1.5, 4.0, 2.6, 3.1, 'BYE', 2.1, 2.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 5.0, 4.7, 5.3, 1.3, 'BYE', 4.7, 1.7, 0.1]
                    }
                    
                    ]
               }
            }];



$scope.positionDST = [{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/BUF.png",
    "name": "Buffalo Bills",
    "depthchart": "",
    "team": "Buffalo Bills",
    "projected": 8.1,
    "opponent": "Washington Redskins",
    "opp_rank_pts": 30,
    "opp_avg_pts": 12.38,
    "home_away": "",
    "team_rank_allowed_pts": 3,
    "team_avg_allowed_pts": 16.71,
    "team_ranked_takeaways": 5,
    "team_avg_takeaways": 1.86,
    "opp_ranked_giveaways": 20,
    "opp_avg_giveaways": 1.62,
    "fanduelSalary": "$5000",
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
    "avg_fp2": 7.71,
    "week01": 10.0,
    "week02": 6.0,
    "week03": 13.0,
    "week04": 3.0,
    "week05": 11.0,
    "week06": "BYE",
    "week07": 7.0,
    "week08": 4.0,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.0, 6.0, 13.0, 3.0, 11.0, 'BYE', 7.0, 4.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.4, 7.8, 6.6, 5.1, 7.8, 'BYE', 7.6, 8.5, 8.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/DEN.png",
    "name": "Denver Broncos",
    "depthchart": "",
    "team": "Denver Broncos",
    "projected": 7.9,
    "opponent": "Cleveland Browns",
    "opp_rank_pts": 24,
    "opp_avg_pts": 19.0,
    "home_away": "",
    "team_rank_allowed_pts": 8,
    "team_avg_allowed_pts": 18.12,
    "team_ranked_takeaways": 28,
    "team_avg_takeaways": 0.88,
    "opp_ranked_giveaways": 15,
    "opp_avg_giveaways": 1.29,
    "fanduelSalary": "$4300",
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
    "avg_fp2": 5.75,
    "week01": 0.0,
    "week02": 1.0,
    "week03": 0.0,
    "week04": 5.0,
    "week05": 10.0,
    "week06": 23.0,
    "week07": 0.0,
    "week08": 7.0,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 1.0, 0.0, 5.0, 10.0, 23.0, 0.0, 7.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.8, 8.7, 5.7, 6.6, 5.6, 7.1, 4.9, 5.7, 7.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/SF.png",
    "name": "San Francisco 49ers",
    "depthchart": "",
    "team": "San Francisco 49ers",
    "projected": 7.8,
    "opponent": "Arizona Cardinals",
    "opp_rank_pts": 20,
    "opp_avg_pts": 21.25,
    "home_away": "at ",
    "team_rank_allowed_pts": 2,
    "team_avg_allowed_pts": 11.0,
    "team_ranked_takeaways": 5,
    "team_avg_takeaways": 1.86,
    "opp_ranked_giveaways": 1,
    "opp_avg_giveaways": 0.25,
    "fanduelSalary": "$5000",
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
    "avg_fp2": 12.86,
    "week01": 15.0,
    "week02": 7.0,
    "week03": 7.0,
    "week04": "BYE",
    "week05": 19.0,
    "week06": 10.0,
    "week07": 15.0,
    "week08": 17.0,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [15.0, 7.0, 7.0, 'BYE', 19.0, 10.0, 15.0, 17.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.8, 6.4, 7.2, 'BYE', 6.8, 7.5, 8.1, 7.9, 7.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/PHI.png",
    "name": "Philadelphia Eagles",
    "depthchart": "",
    "team": "Philadelphia Eagles",
    "projected": 7.8,
    "opponent": "Chicago Bears",
    "opp_rank_pts": 27,
    "opp_avg_pts": 17.43,
    "home_away": "",
    "team_rank_allowed_pts": 20,
    "team_avg_allowed_pts": 24.12,
    "team_ranked_takeaways": 22,
    "team_avg_takeaways": 1.12,
    "opp_ranked_giveaways": 10,
    "opp_avg_giveaways": 1.14,
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
    "avg_fp2": 6.75,
    "week01": 1.0,
    "week02": 7.0,
    "week03": 4.0,
    "week04": 5.0,
    "week05": 23.0,
    "week06": 1.0,
    "week07": 1.0,
    "week08": 12.0,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.0, 7.0, 4.0, 5.0, 23.0, 1.0, 1.0, 12.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.8, 6.4, 7.2, 6.0, 8.6, 7.5, 5.5, 6.5, 7.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/CHI.png",
    "name": "Chicago Bears",
    "depthchart": "",
    "team": "Chicago Bears",
    "projected": 7.7,
    "opponent": "Philadelphia Eagles",
    "opp_rank_pts": 13,
    "opp_avg_pts": 25.25,
    "home_away": "at ",
    "team_rank_allowed_pts": 6,
    "team_avg_allowed_pts": 17.14,
    "team_ranked_takeaways": 12,
    "team_avg_takeaways": 1.57,
    "opp_ranked_giveaways": 28,
    "opp_avg_giveaways": 2.12,
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
    "avg_fp2": 8.86,
    "week01": 9.0,
    "week02": 5.0,
    "week03": 17.0,
    "week04": 17.0,
    "week05": 4.0,
    "week06": "BYE",
    "week07": 6.0,
    "week08": 4.0,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.0, 5.0, 17.0, 17.0, 4.0, 'BYE', 6.0, 4.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.8, 8.0, 7.0, 9.0, 8.9, 'BYE', 7.3, 7.7, 7.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/GB.png",
    "name": "Green Bay Packers",
    "depthchart": "",
    "team": "Green Bay Packers",
    "projected": 7.2,
    "opponent": "Los Angeles Chargers",
    "opp_rank_pts": 25,
    "opp_avg_pts": 18.88,
    "home_away": "at ",
    "team_rank_allowed_pts": 11,
    "team_avg_allowed_pts": 20.38,
    "team_ranked_takeaways": 26,
    "team_avg_takeaways": 1.0,
    "opp_ranked_giveaways": 20,
    "opp_avg_giveaways": 1.62,
    "fanduelSalary": "$4200",
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
    "avg_fp2": 7.0,
    "week01": 14.0,
    "week02": 12.0,
    "week03": 13.0,
    "week04": -1.0,
    "week05": 9.0,
    "week06": 3.0,
    "week07": 2.0,
    "week08": 4.0,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.0, 12.0, 13.0, -1.0, 9.0, 3.0, 2.0, 4.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.8, 9.6, 6.9, 8.0, 5.5, 7.8, 7.3, 6.0, 7.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/PIT.png",
    "name": "Pittsburgh Steelers",
    "depthchart": "",
    "team": "Pittsburgh Steelers",
    "projected": 7.0,
    "opponent": "Indianapolis Colts",
    "opp_rank_pts": 16,
    "opp_avg_pts": 22.29,
    "home_away": "",
    "team_rank_allowed_pts": 13,
    "team_avg_allowed_pts": 20.71,
    "team_ranked_takeaways": 4,
    "team_avg_takeaways": 2.14,
    "opp_ranked_giveaways": 10,
    "opp_avg_giveaways": 1.14,
    "fanduelSalary": "$3900",
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
    "avg_fp2": 9.86,
    "week01": 0.0,
    "week02": 7.0,
    "week03": 11.0,
    "week04": 19.0,
    "week05": 11.0,
    "week06": 8.0,
    "week07": "BYE",
    "week08": 13.0,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 7.0, 11.0, 19.0, 11.0, 8.0, 'BYE', 13.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.4, 8.3, 6.3, 8.1, 5.8, 7.0, 'BYE', 9.6, 7.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/NYG.png",
    "name": "New York Giants",
    "depthchart": "",
    "team": "New York Giants",
    "projected": 6.9,
    "opponent": "Dallas Cowboys",
    "opp_rank_pts": 6,
    "opp_avg_pts": 27.14,
    "home_away": "",
    "team_rank_allowed_pts": 27,
    "team_avg_allowed_pts": 27.0,
    "team_ranked_takeaways": 13,
    "team_avg_takeaways": 1.5,
    "opp_ranked_giveaways": 4,
    "opp_avg_giveaways": 0.71,
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
    "avg_fp2": 5.0,
    "week01": -4.0,
    "week02": 2.0,
    "week03": 7.0,
    "week04": 18.0,
    "week05": 5.0,
    "week06": 3.0,
    "week07": 2.0,
    "week08": 7.0,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [-4.0, 2.0, 7.0, 18.0, 5.0, 3.0, 2.0, 7.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.9, 8.0, 6.4, 7.0, 6.9, 4.1, 6.8, 6.4, 6.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/KC.png",
    "name": "Kansas City Chiefs",
    "depthchart": "",
    "team": "Kansas City Chiefs",
    "projected": 6.8,
    "opponent": "Minnesota Vikings",
    "opp_rank_pts": 9,
    "opp_avg_pts": 26.12,
    "home_away": "",
    "team_rank_allowed_pts": 16,
    "team_avg_allowed_pts": 21.75,
    "team_ranked_takeaways": 31,
    "team_avg_takeaways": 0.75,
    "opp_ranked_giveaways": 27,
    "opp_avg_giveaways": 1.88,
    "fanduelSalary": "$3700",
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
    "avg_fp2": 6.88,
    "week01": 5.0,
    "week02": 11.0,
    "week03": 2.0,
    "week04": 6.0,
    "week05": 3.0,
    "week06": 5.0,
    "week07": 18.0,
    "week08": 5.0,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.0, 11.0, 2.0, 6.0, 3.0, 5.0, 18.0, 5.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.8, 6.1, 5.3, 5.9, 5.9, 6.7, 5.4, 5.6, 6.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/LAC.png",
    "name": "Los Angeles Chargers",
    "depthchart": "",
    "team": "Los Angeles Chargers",
    "projected": 6.8,
    "opponent": "Green Bay Packers",
    "opp_rank_pts": 10,
    "opp_avg_pts": 26.0,
    "home_away": "",
    "team_rank_allowed_pts": 10,
    "team_avg_allowed_pts": 19.62,
    "team_ranked_takeaways": 20,
    "team_avg_takeaways": 1.25,
    "opp_ranked_giveaways": 20,
    "opp_avg_giveaways": 1.62,
    "fanduelSalary": "$3400",
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
    "avg_fp2": 6.75,
    "week01": 2.0,
    "week02": 8.0,
    "week03": 4.0,
    "week04": 11.0,
    "week05": 14.0,
    "week06": 2.0,
    "week07": 4.0,
    "week08": 9.0,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.0, 8.0, 4.0, 11.0, 14.0, 2.0, 4.0, 9.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.2, 6.6, 6.8, 6.9, 6.8, 7.2, 6.8, 7.2, 6.8]
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
    "opp_rank_pts": 32,
    "opp_avg_pts": 10.0,
    "home_away": "",
    "team_rank_allowed_pts": 32,
    "team_avg_allowed_pts": 34.0,
    "team_ranked_takeaways": 5,
    "team_avg_takeaways": 1.86,
    "opp_ranked_giveaways": 17,
    "opp_avg_giveaways": 1.43,
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
    "avg_fp2": 1.14,
    "week01": -3.0,
    "week02": 3.0,
    "week03": 2.0,
    "week04": 0.0,
    "week05": "BYE",
    "week06": 1.0,
    "week07": 1.0,
    "week08": 4.0,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [-3.0, 3.0, 2.0, 0.0, 'BYE', 1.0, 1.0, 4.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.5, 4.8, 5.2, 5.6, 'BYE', 6.5, 6.1, 6.1, 6.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/BAL.png",
    "name": "Baltimore Ravens",
    "depthchart": "",
    "team": "Baltimore Ravens",
    "projected": 6.5,
    "opponent": "New England Patriots",
    "opp_rank_pts": 1,
    "opp_avg_pts": 31.0,
    "home_away": "",
    "team_rank_allowed_pts": 13,
    "team_avg_allowed_pts": 21.43,
    "team_ranked_takeaways": 21,
    "team_avg_takeaways": 1.14,
    "opp_ranked_giveaways": 32,
    "opp_avg_giveaways": 2.75,
    "fanduelSalary": "$3200",
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
    "avg_fp2": 4.57,
    "week01": 13.0,
    "week02": 4.0,
    "week03": 0.0,
    "week04": -1.0,
    "week05": 5.0,
    "week06": 5.0,
    "week07": 6.0,
    "week08": "BYE",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [13.0, 4.0, 0.0, -1.0, 5.0, 5.0, 6.0, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.4, 10.6, 6.5, 8.9, 7.8, 8.6, 6.3, 'BYE', 6.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/NE.png",
    "name": "New England Patriots",
    "depthchart": "",
    "team": "New England Patriots",
    "projected": 6.5,
    "opponent": "Baltimore Ravens",
    "opp_rank_pts": 2,
    "opp_avg_pts": 29.57,
    "home_away": "at ",
    "team_rank_allowed_pts": 1,
    "team_avg_allowed_pts": 6.88,
    "team_ranked_takeaways": 17,
    "team_avg_takeaways": 1.38,
    "opp_ranked_giveaways": 9,
    "opp_avg_giveaways": 1.14,
    "fanduelSalary": "$5000",
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
    "avg_fp2": 16.25,
    "week01": 10.0,
    "week02": 25.0,
    "week03": 14.0,
    "week04": 17.0,
    "week05": 14.0,
    "week06": 10.0,
    "week07": 25.0,
    "week08": 15.0,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.0, 25.0, 14.0, 17.0, 14.0, 10.0, 25.0, 15.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.6, 9.0, 10.1, 6.7, 8.8, 7.1, 9.3, 9.5, 6.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/SEA.png",
    "name": "Seattle Seahawks",
    "depthchart": "",
    "team": "Seattle Seahawks",
    "projected": 6.4,
    "opponent": "Tampa Bay Buccaneers",
    "opp_rank_pts": 5,
    "opp_avg_pts": 28.14,
    "home_away": "",
    "team_rank_allowed_pts": 18,
    "team_avg_allowed_pts": 22.88,
    "team_ranked_takeaways": 22,
    "team_avg_takeaways": 1.12,
    "opp_ranked_giveaways": 17,
    "opp_avg_giveaways": 1.43,
    "fanduelSalary": "$4900",
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
    "week01": 12.0,
    "week02": 3.0,
    "week03": 1.0,
    "week04": 10.0,
    "week05": 3.0,
    "week06": 7.0,
    "week07": 1.0,
    "week08": 9.0,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.0, 3.0, 1.0, 10.0, 3.0, 7.0, 1.0, 9.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.4, 7.6, 6.6, 6.2, 8.4, 7.4, 5.9, 5.9, 6.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/ARI.png",
    "name": "Arizona Cardinals",
    "depthchart": "",
    "team": "Arizona Cardinals",
    "projected": 6.4,
    "opponent": "San Francisco 49ers",
    "opp_rank_pts": 2,
    "opp_avg_pts": 29.57,
    "home_away": "",
    "team_rank_allowed_pts": 29,
    "team_avg_allowed_pts": 27.88,
    "team_ranked_takeaways": 22,
    "team_avg_takeaways": 1.12,
    "opp_ranked_giveaways": 30,
    "opp_avg_giveaways": 2.14,
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
    "avg_fp2": 3.5,
    "week01": 5.0,
    "week02": 2.0,
    "week03": 0.0,
    "week04": 4.0,
    "week05": 1.0,
    "week06": 1.0,
    "week07": 14.0,
    "week08": 1.0,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.0, 2.0, 0.0, 4.0, 1.0, 1.0, 14.0, 1.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.0, 6.8, 8.1, 6.1, 7.0, 6.9, 6.8, 5.6, 6.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/WAS.png",
    "name": "Washington Redskins",
    "depthchart": "",
    "team": "Washington Redskins",
    "projected": 6.3,
    "opponent": "Buffalo Bills",
    "opp_rank_pts": 23,
    "opp_avg_pts": 19.43,
    "home_away": "at ",
    "team_rank_allowed_pts": 21,
    "team_avg_allowed_pts": 24.38,
    "team_ranked_takeaways": 13,
    "team_avg_takeaways": 1.5,
    "opp_ranked_giveaways": 17,
    "opp_avg_giveaways": 1.43,
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
    "avg_fp2": 5.62,
    "week01": 0.0,
    "week02": 2.0,
    "week03": 5.0,
    "week04": 9.0,
    "week05": 5.0,
    "week06": 10.0,
    "week07": 8.0,
    "week08": 6.0,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 2.0, 5.0, 9.0, 5.0, 10.0, 8.0, 6.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.1, 5.7, 5.9, 4.9, 5.3, 6.3, 6.8, 4.7, 6.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/HOU.png",
    "name": "Houston Texans",
    "depthchart": "",
    "team": "Houston Texans",
    "projected": 6.3,
    "opponent": "Jacksonville Jaguars",
    "opp_rank_pts": 17,
    "opp_avg_pts": 21.62,
    "home_away": "at ",
    "team_rank_allowed_pts": 19,
    "team_avg_allowed_pts": 23.25,
    "team_ranked_takeaways": 10,
    "team_avg_takeaways": 1.62,
    "opp_ranked_giveaways": 20,
    "opp_avg_giveaways": 1.62,
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
    "avg_fp2": 4.62,
    "week01": 2.0,
    "week02": 10.0,
    "week03": 5.0,
    "week04": 10.0,
    "week05": 3.0,
    "week06": 5.0,
    "week07": 2.0,
    "week08": 0.0,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.0, 10.0, 5.0, 10.0, 3.0, 5.0, 2.0, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.6, 7.5, 4.5, 6.9, 7.4, 5.0, 4.1, 7.5, 6.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/TEN.png",
    "name": "Tennessee Titans",
    "depthchart": "",
    "team": "Tennessee Titans",
    "projected": 6.2,
    "opponent": "Carolina Panthers",
    "opp_rank_pts": 12,
    "opp_avg_pts": 25.29,
    "home_away": "at ",
    "team_rank_allowed_pts": 5,
    "team_avg_allowed_pts": 16.88,
    "team_ranked_takeaways": 22,
    "team_avg_takeaways": 1.12,
    "opp_ranked_giveaways": 31,
    "opp_avg_giveaways": 2.57,
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
    "avg_fp2": 7.88,
    "week01": 17.0,
    "week02": 8.0,
    "week03": 1.0,
    "week04": 11.0,
    "week05": 7.0,
    "week06": 4.0,
    "week07": 4.0,
    "week08": 11.0,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [17.0, 8.0, 1.0, 11.0, 7.0, 4.0, 4.0, 11.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.0, 6.4, 7.0, 5.4, 8.5, 6.0, 7.0, 7.2, 6.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/CLE.png",
    "name": "Cleveland Browns",
    "depthchart": "",
    "team": "Cleveland Browns",
    "projected": 6.2,
    "opponent": "Denver Broncos",
    "opp_rank_pts": 28,
    "opp_avg_pts": 15.62,
    "home_away": "at ",
    "team_rank_allowed_pts": 22,
    "team_avg_allowed_pts": 25.86,
    "team_ranked_takeaways": 2,
    "team_avg_takeaways": 2.29,
    "opp_ranked_giveaways": 8,
    "opp_avg_giveaways": 1.12,
    "fanduelSalary": "$4300",
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
    "avg_fp2": 6.57,
    "week01": 0.0,
    "week02": 13.0,
    "week03": 9.0,
    "week04": 10.0,
    "week05": 5.0,
    "week06": 4.0,
    "week07": "BYE",
    "week08": 5.0,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 13.0, 9.0, 10.0, 5.0, 4.0, 'BYE', 5.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.9, 7.9, 7.1, 4.8, 5.8, 5.8, 'BYE', 4.8, 6.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/CAR.png",
    "name": "Carolina Panthers",
    "depthchart": "",
    "team": "Carolina Panthers",
    "projected": 6.1,
    "opponent": "Tennessee Titans",
    "opp_rank_pts": 26,
    "opp_avg_pts": 18.5,
    "home_away": "",
    "team_rank_allowed_pts": 25,
    "team_avg_allowed_pts": 26.57,
    "team_ranked_takeaways": 16,
    "team_avg_takeaways": 1.43,
    "opp_ranked_giveaways": 14,
    "opp_avg_giveaways": 1.25,
    "fanduelSalary": "$4000",
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
    "avg_fp2": 9.14,
    "week01": 2.0,
    "week02": 5.0,
    "week03": 13.0,
    "week04": 14.0,
    "week05": 8.0,
    "week06": 19.0,
    "week07": "BYE",
    "week08": 3.0,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.0, 5.0, 13.0, 14.0, 8.0, 19.0, 'BYE', 3.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.8, 8.1, 6.6, 7.2, 7.5, 5.5, 'BYE', 7.9, 6.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/NYJ.png",
    "name": "New York Jets",
    "depthchart": "",
    "team": "New York Jets",
    "projected": 6.0,
    "opponent": "Miami Dolphins",
    "opp_rank_pts": 31,
    "opp_avg_pts": 11.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 24,
    "team_avg_allowed_pts": 26.43,
    "team_ranked_takeaways": 2,
    "team_avg_takeaways": 2.29,
    "opp_ranked_giveaways": 5,
    "opp_avg_giveaways": 1.0,
    "fanduelSalary": "$4600",
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
    "avg_fp2": 3.86,
    "week01": 12.0,
    "week02": 5.0,
    "week03": 2.0,
    "week04": "BYE",
    "week05": 3.0,
    "week06": 1.0,
    "week07": 1.0,
    "week08": 3.0,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.0, 5.0, 2.0, 'BYE', 3.0, 1.0, 1.0, 3.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.8, 7.8, 4.2, 'BYE', 5.5, 6.4, 4.8, 7.9, 6.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/JAX.png",
    "name": "Jacksonville Jaguars",
    "depthchart": "",
    "team": "Jacksonville Jaguars",
    "projected": 5.9,
    "opponent": "Houston Texans",
    "opp_rank_pts": 7,
    "opp_avg_pts": 26.88,
    "home_away": "",
    "team_rank_allowed_pts": 11,
    "team_avg_allowed_pts": 20.38,
    "team_ranked_takeaways": 32,
    "team_avg_takeaways": 0.5,
    "opp_ranked_giveaways": 4,
    "opp_avg_giveaways": 0.88,
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
    "avg_fp2": 7.0,
    "week01": -4.0,
    "week02": 8.0,
    "week03": 13.0,
    "week04": 2.0,
    "week05": 4.0,
    "week06": 7.0,
    "week07": 11.0,
    "week08": 15.0,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [-4.0, 8.0, 13.0, 2.0, 4.0, 7.0, 11.0, 15.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.3, 6.4, 6.2, 5.3, 6.1, 7.0, 6.5, 9.6, 5.9]
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
    "opponent": "New York Giants",
    "opp_rank_pts": 22,
    "opp_avg_pts": 20.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 6,
    "team_avg_allowed_pts": 17.71,
    "team_ranked_takeaways": 7,
    "team_avg_takeaways": 1.86,
    "opp_ranked_giveaways": 28,
    "opp_avg_giveaways": 2.12,
    "fanduelSalary": "$4500",
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
    "avg_fp2": 7.0,
    "week01": 6.0,
    "week02": 1.0,
    "week03": 11.0,
    "week04": 11.0,
    "week05": 1.0,
    "week06": 4.0,
    "week07": 15.0,
    "week08": "BYE",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.0, 1.0, 11.0, 11.0, 1.0, 4.0, 15.0, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.9, 5.8, 8.4, 4.9, 6.9, 7.1, 5.5, 'BYE', 5.9]
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
    "opponent": "Pittsburgh Steelers",
    "opp_rank_pts": 19,
    "opp_avg_pts": 21.43,
    "home_away": "at ",
    "team_rank_allowed_pts": 17,
    "team_avg_allowed_pts": 21.86,
    "team_ranked_takeaways": 29,
    "team_avg_takeaways": 0.86,
    "opp_ranked_giveaways": 26,
    "opp_avg_giveaways": 1.86,
    "fanduelSalary": "$4800",
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
    "avg_fp2": 5.71,
    "week01": 5.0,
    "week02": 5.0,
    "week03": 2.0,
    "week04": 3.0,
    "week05": 10.0,
    "week06": "BYE",
    "week07": 9.0,
    "week08": 6.0,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.0, 5.0, 2.0, 3.0, 10.0, 'BYE', 9.0, 6.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.1, 5.9, 8.1, 7.3, 5.3, 'BYE', 6.5, 6.9, 5.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/OAK.png",
    "name": "Oakland Raiders",
    "depthchart": "",
    "team": "Oakland Raiders",
    "projected": 5.6,
    "opponent": "Detroit Lions",
    "opp_rank_pts": 14,
    "opp_avg_pts": 24.86,
    "home_away": "",
    "team_rank_allowed_pts": 28,
    "team_avg_allowed_pts": 27.43,
    "team_ranked_takeaways": 29,
    "team_avg_takeaways": 0.86,
    "opp_ranked_giveaways": 10,
    "opp_avg_giveaways": 1.14,
    "fanduelSalary": "$3500",
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
    "avg_fp2": 2.57,
    "week01": 4.0,
    "week02": 3.0,
    "week03": -1.0,
    "week04": 4.0,
    "week05": 8.0,
    "week06": "BYE",
    "week07": -3.0,
    "week08": 3.0,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.0, 3.0, -1.0, 4.0, 8.0, 'BYE', -3.0, 3.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.1, 5.5, 6.4, 4.1, 7.9, 'BYE', 4.8, 5.5, 5.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/MIN.png",
    "name": "Minnesota Vikings",
    "depthchart": "",
    "team": "Minnesota Vikings",
    "projected": 5.3,
    "opponent": "Kansas City Chiefs",
    "opp_rank_pts": 4,
    "opp_avg_pts": 28.25,
    "home_away": "at ",
    "team_rank_allowed_pts": 4,
    "team_avg_allowed_pts": 16.75,
    "team_ranked_takeaways": 26,
    "team_avg_takeaways": 1.0,
    "opp_ranked_giveaways": 20,
    "opp_avg_giveaways": 1.62,
    "fanduelSalary": "$4500",
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
    "avg_fp2": 8.5,
    "week01": 14.0,
    "week02": 6.0,
    "week03": 7.0,
    "week04": 5.0,
    "week05": 12.0,
    "week06": 9.0,
    "week07": 3.0,
    "week08": 12.0,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.0, 6.0, 7.0, 5.0, 12.0, 9.0, 3.0, 12.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.9, 7.2, 8.3, 7.3, 6.8, 8.2, 6.4, 7.3, 5.3]
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
    "opponent": "Seattle Seahawks",
    "opp_rank_pts": 10,
    "opp_avg_pts": 26.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 30,
    "team_avg_allowed_pts": 30.0,
    "team_ranked_takeaways": 1,
    "team_avg_takeaways": 2.71,
    "opp_ranked_giveaways": 25,
    "opp_avg_giveaways": 1.75,
    "fanduelSalary": "$3100",
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
    "avg_fp2": 5.43,
    "week01": 6.0,
    "week02": 9.0,
    "week03": 8.0,
    "week04": 9.0,
    "week05": 1.0,
    "week06": 0.0,
    "week07": "BYE",
    "week08": 5.0,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.0, 9.0, 8.0, 9.0, 1.0, 0.0, 'BYE', 5.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.3, 8.2, 7.1, 7.5, 6.3, 6.3, 'BYE', 6.1, 5.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/DET.png",
    "name": "Detroit Lions",
    "depthchart": "",
    "team": "Detroit Lions",
    "projected": 5.2,
    "opponent": "Oakland Raiders",
    "opp_rank_pts": 18,
    "opp_avg_pts": 21.57,
    "home_away": "at ",
    "team_rank_allowed_pts": 25,
    "team_avg_allowed_pts": 26.57,
    "team_ranked_takeaways": 5,
    "team_avg_takeaways": 1.86,
    "opp_ranked_giveaways": 5,
    "opp_avg_giveaways": 1.0,
    "fanduelSalary": "$4300",
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
    "avg_fp2": 6.0,
    "week01": 7.0,
    "week02": 9.0,
    "week03": 13.0,
    "week04": 5.0,
    "week05": "BYE",
    "week06": 7.0,
    "week07": -4.0,
    "week08": 5.0,
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.0, 9.0, 13.0, 5.0, 'BYE', 7.0, -4.0, 5.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.6, 6.7, 5.6, 6.1, 'BYE', 6.1, 6.2, 7.4, 5.2]
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