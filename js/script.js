var App = angular.module('footballApp', ['tc.chartjs']);

App.controller('positionController', function($scope, $http) {

  //JSON data for position and players

/*********************** PASTE AFTER HERE ************************/

$scope.currentDate = {"currentDate": "Sunday, 10 January 2021 03:49 AM (central time)"};
$scope.week = {"nflWeek": "Wild Card Round"};
$scope.playoffLogo = {"src": "https://seeklogo.com/images/N/nfl-afc-wild-card-logo-83F96E9A31-seeklogo.com.png"}

$scope.qbStartSit = {"one": "---", "two": "---", "three": "---", "four": "---", "five": "---", "six": "---", "seven": "---", "eight": "---", "nine": "---", "ten": "---"};
$scope.rbStartSit = {"one": "---", "two": "---", "three": "---", "four": "---", "five": "---", "six": "---", "seven": "---", "eight": "---", "nine": "---", "ten": "---"};
$scope.wrStartSit = {"one": "---", "two": "---", "three": "---", "four": "---", "five": "---", "six": "---", "seven": "---", "eight": "---", "nine": "---", "ten": "---"};
$scope.teStartSit = {"one": "---", "two": "---", "three": "---", "four": "---", "five": "---", "six": "---", "seven": "---", "eight": "---", "nine": "---", "ten": "---"};
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
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3916387.png",
    "name": "Lamar Jackson",
    "depthchart": "Starter: QB-1",
    "team": "Baltimore Ravens",
    "projected": 25.7,
    "opponent": "Tennessee Titans",
    "home_away": "at ",
    "opp_rank_Pos": 29,
    "team_rank_Neg": 32,
    "avg_fp2": 22.85,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 22.14,
    "fanduelSalary": "$9300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9E7C0C",
    "tmColorDark": "#241773",
    "tmColorLite_rgba": "rgba(158, 124, 12, 0.2)",
    "tmColorDark_rgba": "rgba(36, 23, 115, 0.2)",
    "tmTextLite": "#9E7C0C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png",
    "headlineNews": "Lamar Jackson completed 10-of-18 passes for 113 yards and three touchdowns in the Ravens 38-3 Week 17 win over the Bengals, adding 11 rushes for 97 yards.\u00a0\n",
    "report": "",
    "analysis": "Jackson's passing day would've been better if not for a breathtaking dropped pass from Marquise Brown on a first quarter deep ball. Jackson did anything he wanted against the toothless Cincy defense, taking most read-options himself and piling up rushing yardage throughout his three quarters of action. He was rested in the fourth quarter. He finishes the regular season with over 1,000 rushing yards despite missing a game. Jackson and the Baltimore offense have progressed dramatically over the past month. Jackson will enter the NFL playoffs looking to avenge stunning defeats in his past two postseason appearances.\u00a0\n",
    "timestamp": "2021-01-03 08:58 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 27.5,
    "week02": 17.56,
    "week03": 14.18,
    "week04": 26.02,
    "week05": 14.5,
    "week06": 28.24,
    "week07": "BYE",
    "week08": 16.82,
    "week09": 18.6,
    "week10": 22.46,
    "week11": 17.54,
    "week12": "DNP",
    "week13": 27.7,
    "week14": 34.92,
    "week15": 30.22,
    "week16": 21.32,
    "week17": 25.22,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [27.5, 17.56, 14.18, 26.02, 14.5, 28.24, 'BYE', 16.82, 18.6, 22.46, 17.54, 'DNP', 27.7, 34.92, 30.22, 21.32, 25.22]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [28.5, 28.8, 27.5, 29.5, 23.5, 22.1, 'BYE', 17.7, 19.9, 23.1, 27.5, 'DNP', 26.8, 19.5, 19.0, 23.9, 25.5, 25.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [18.1, 16.9, 23.4, 20.7, 15.4, 14.3, 'BYE', 18.0, 12.9, 13.9, 16.0, 'DNP', 15.9, 23.0, 19.3, 17.7, 18.4, 19.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [35.5, 27.6, 39.2, 34.6, 26.8, 29.6, 'BYE', 34.7, 27.5, 28.9, 30.8, 'DNP', 35.0, 30.3, 38.9, 35.7, 33.0, 32.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2580.png",
    "name": "Drew Brees",
    "depthchart": "Starter: QB-1",
    "team": "New Orleans Saints",
    "projected": 24.1,
    "opponent": "Chicago Bears",
    "home_away": "",
    "opp_rank_Neu": 12,
    "team_rank_Neu": 19,
    "avg_fp2": 17.96,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 18.02,
    "fanduelSalary": "$7800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9b845c",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(155, 132, 92, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#9b845c",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
    "headlineNews": "Drew Brees completed 22-of-32 passes for 201 yards and three touchdowns in the Saints' 33-7 Week 17\u00a0win over the Panthers.\n",
    "report": "",
    "analysis": "This was a \"flawless victory\" type performance from the Saints' offense, even without Michael Thomas and Alvin Kamara, against a miserable Panthers' defensive unit. Plenty of questions have been asked of the Saints offense throughout the 2020 season, but Brees might have played his best game of the last month just before the team takes on the Bears in Wild Card Weekend.\n",
    "timestamp": "2021-01-04 03:26 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 14.4,
    "week02": 15.48,
    "week03": 23.52,
    "week04": 16.54,
    "week05": 22.1,
    "week06": "BYE",
    "week07": 23.68,
    "week08": 19.6,
    "week09": 22.68,
    "week10": 6.94,
    "week11": "DNP",
    "week12": "DNP",
    "week13": "DNP",
    "week14": "DNP",
    "week15": 20.36,
    "week16": 10.14,
    "week17": 20.04,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
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
                         data: [14.4, 15.48, 23.52, 16.54, 22.1, 'BYE', 23.68, 19.6, 22.68, 6.94, 'DNP', 'DNP', 'DNP', 'DNP', 20.36, 10.14, 20.04]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [21.8, 22.8, 18.5, 21.3, 19.1, 'BYE', 19.7, 13.3, 22.3, 21.2, 'DNP', 'DNP', 'DNP', 'DNP', 24.9, 19.5, 18.0, 24.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [9.4, 14.7, 9.6, 11.3, 10.4, 'BYE', 11.8, 10.8, 11.7, 10.4, 'DNP', 'DNP', 'DNP', 'DNP', 11.1, 10.6, 8.5, 11.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(155, 132, 92, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [26.8, 30.5, 27.9, 28.4, 25.9, 'BYE', 26.6, 26.9, 26.9, 27.8, 'DNP', 'DNP', 'DNP', 'DNP', 27.1, 27.6, 26.4, 27.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14881.png",
    "name": "Russell Wilson",
    "depthchart": "Starter: QB-1",
    "team": "Seattle Seahawks",
    "projected": 22.8,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank_Neg": 1,
    "team_rank_Neu": 16,
    "avg_fp2": 23.3,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 14.37,
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
    "headlineNews": "Russell Wilson completed 11-of-27 passes for 174 yards, two touchdowns and an interception in the Seahawks' 30-20, Wild Card loss to the Rams, adding four carries for 50 additional yards.\u00a0\n",
    "report": "",
    "analysis": "Russ did not cook as the Seahawks lost at home in the postseason\u00a0for the first time since the 2004 Wild Card Round, snapping a 10-game winning streak. The stunningly dismal performance was a fitting capper to the Seahawks' second half of the season offensive collapse. Wilson entered the final five minutes with just eight completions. His first score, a 51-yard strike to DK Metcalf, came against a broken coverage. His second, to Metcalf in what was effectively garbage time. The beneficiary of good protection most of the season, Wilson was absolutely under siege, taking a whopping five sacks for 32 yards. Aaron Donald tormented the Hawks' line but missed most of the second half with a rib injury. On a no-doubt MVP pace the first month of the year, Wilson had a mid-season interception binge that seemed to shake his confidence, but more importantly, coach Pete Carroll's confidence. He was reverted to game manager status down the stretch and finished with only 12 scores over his final eight starts compared to\u00a028\u00a0in the first eight. The Seahawks' offense appeared fundamentally broken, while Wilson finished with a career-worst 13 interceptions. Recently-extended\u00a0Carroll needs to order the code red and fire OC Brian Schottenheimer. Whatever kind of offense the 'Hawks install in 2021, Wilson will remain a top-eight fantasy quarterback, and probably still top five.\u00a0\n",
    "timestamp": "2021-01-10 03:11 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 31.78,
    "week02": 34.42,
    "week03": 36.8,
    "week04": 21.9,
    "week05": 25.48,
    "week06": "BYE",
    "week07": 32.92,
    "week08": 28.74,
    "week09": 24.1,
    "week10": 11.92,
    "week11": 20.08,
    "week12": 14.4,
    "week13": 16.02,
    "week14": 23.14,
    "week15": 13.04,
    "week16": 19.9,
    "week17": 18.14,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
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
                         data: [31.78, 34.42, 36.8, 21.9, 25.48, 'BYE', 32.92, 28.74, 24.1, 11.92, 20.08, 14.4, 16.02, 23.14, 13.04, 19.9, 18.14]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.3, 20.0, 29.1, 24.5, 21.6, 'BYE', 19.8, 21.5, 20.4, 17.2, 26.9, 24.3, 24.9, 23.5, 23.1, 19.7, 20.4, 22.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [12.1, 11.8, 12.4, 11.3, 11.7, 'BYE', 11.3, 11.3, 12.7, 13.4, 11.5, 11.4, 12.3, 12.1, 11.3, 12.0, 12.4, 12.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [26.9, 26.8, 26.1, 26.2, 26.9, 'BYE', 27.5, 29.7, 28.2, 28.8, 27.6, 29.0, 28.0, 28.2, 29.2, 27.0, 27.7, 27.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3918298.png",
    "name": "Josh Allen",
    "depthchart": "Starter: QB-1",
    "team": "Buffalo Bills",
    "projected": 21.2,
    "opponent": "Indianapolis Colts",
    "home_away": "",
    "opp_rank_Neu": 20,
    "team_rank_Pos": 2,
    "avg_fp2": 25.35,
    "opp_rank_allowed_fp2_Neu": 9,
    "opp_avg_allowed_fp2": 17.89,
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
    "headlineNews": "Josh Allen completed 26-of-35 passes for 324 yards and two touchdowns in the Bills' 27-24 Wild Card Weekend in against the Colts, adding 11 rushes for 54 yards and a touchdown.\u00a0\n",
    "report": "",
    "analysis": "Allen started slow but picked apart the Colts' secondary through much of the second half. He had a handful of designed runs -- including a beautifully executed read-option touchdown run at the goal line --\u00a0in Buffalo's first postseason victory since the first Clinton administration. Allen demonstrated his arm strength and willingness to take chances on several first half throws, proving unstoppable with Stefon Diggs once again wrecking an opposing secondary. Allen will look to continue gunslinging his way toward a Super Bowl next week in the Divisional Round.\u00a0\n",
    "timestamp": "2021-01-09 09:52 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 28.18,
    "week02": 34.48,
    "week03": 32.24,
    "week04": 25.42,
    "week05": 18.32,
    "week06": 16.08,
    "week07": 16.38,
    "week08": 13.46,
    "week09": 36.0,
    "week10": 28.86,
    "week11": "BYE",
    "week12": 16.48,
    "week13": 30.1,
    "week14": 19.32,
    "week15": 37.66,
    "week16": 32.3,
    "week17": 20.26,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
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
                         data: [28.18, 34.48, 32.24, 25.42, 18.32, 16.08, 16.38, 13.46, 36.0, 28.86, 'BYE', 16.48, 30.1, 19.32, 37.66, 32.3, 20.26]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [19.9, 30.8, 18.3, 21.1, 23.8, 19.8, 18.7, 17.2, 20.8, 21.6, 'BYE', 24.5, 21.1, 26.2, 24.0, 19.8, 22.7, 21.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.3, 13.0, 10.2, 14.7, 10.7, 9.3, 8.5, 11.2, 13.1, 8.8, 'BYE', 10.3, 10.8, 9.6, 12.9, 10.6, 11.3, 11.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.6, 27.6, 26.8, 32.7, 30.1, 25.0, 24.9, 28.2, 29.9, 28.6, 'BYE', 29.0, 30.2, 29.0, 28.7, 30.7, 31.8, 30.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/5536.png",
    "name": "Ben Roethlisberger",
    "depthchart": "Starter: QB-1",
    "team": "Pittsburgh Steelers",
    "projected": 21.0,
    "opponent": "Cleveland Browns",
    "home_away": "",
    "opp_rank_Neu": 22,
    "team_rank_Neu": 15,
    "avg_fp2": 18.48,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 20.6,
    "fanduelSalary": "$7500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/pit.png",
    "headlineNews": "Steelers head coach Mike Tomlin said the team has \"openly talk about what Josh (Dobbs) brings\" to the offense ahead of this weekend's game against the Browns.\u00a0\n",
    "report": "",
    "analysis": "Tomlin said Dobbs might be active Sunday instead of Mason Rudolph. Dobbs got some Week 17 playing time in a meaningless game against the Browns, completing 4-of-5\u00a0passes for two yards and rushing twice for 20 yards. Tomlin said afterward it was a \"possibility\" Dobbs could see some snaps going forward.\u00a0Pittsburgh coaches are intrigued by what Dobbs can bring to the team's offense, which was largely stagnant in the season's final month. Dobbs might be given a package of plays on short yardage or goal line situations this week against Cleveland. That would be less than great for Ben Roethlisberger's DFS upside.\u00a0\n",
    "timestamp": "2021-01-05 06:09 PM",
    "source": "Aditi Kinkhabwala",
    "game_day_logo": "",
    "week01": 22.06,
    "week02": 19.24,
    "week03": 19.18,
    "week04": "BYE",
    "week05": 21.36,
    "week06": 10.98,
    "week07": 15.62,
    "week08": 15.28,
    "week09": 25.04,
    "week10": 29.32,
    "week11": 17.68,
    "week12": 13.54,
    "week13": 19.2,
    "week14": 15.48,
    "week15": 7.7,
    "week16": 25.48,
    "week17": "DNP",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [22.06, 19.24, 19.18, 'BYE', 21.36, 10.98, 15.62, 15.28, 25.04, 29.32, 17.68, 13.54, 19.2, 15.48, 7.7, 25.48, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.4, 23.0, 24.3, 'BYE', 19.3, 15.4, 17.9, 14.3, 11.1, 23.3, 22.9, 15.8, 17.3, 21.5, 14.7, 19.1, 'DNP', 21.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [8.8, 12.1, 10.4, 'BYE', 9.6, 10.5, 9.9, 12.2, 10.2, 9.9, 9.9, 10.4, 9.2, 9.5, 10.4, 10.1, 'DNP', 10.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [24.3, 25.8, 23.7, 'BYE', 24.5, 24.7, 28.3, 26.4, 24.0, 24.8, 24.8, 24.1, 25.4, 24.7, 24.5, 24.2, 'DNP', 23.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/5529.png",
    "name": "Philip Rivers",
    "depthchart": "Starter: QB-1",
    "team": "Indianapolis Colts",
    "projected": 18.0,
    "opponent": "Buffalo Bills",
    "home_away": "at ",
    "opp_rank_Neu": 13,
    "team_rank_Neu": 11,
    "avg_fp2": 15.69,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 19.27,
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
    "headlineNews": "Philip Rivers said he's undecided about playing in 2021 after the Colts' Wild Card Weekend 27-24 loss to Buffalo.\u00a0\n",
    "report": "",
    "analysis": "Rivers, an unrestricted free agent in 2021, was emotion in a postgame presser following the Colts' three-point loss to the Bills, and wouldn't commit to returning to Indianapolis next season. Rivers led the Colts to an 11-5 record this season with 4,168 yards, 24 touchdowns, and 7.7 yards per attempt in a primarily game managing role. Against Buffalo on Saturday, Rivers threw for 309 yards and two touchdowns thanks to three quarters of negative game script. The Colts will need to know Rivers' retirement plans sooner rather than later. His decision could affect how aggressive the team is in acquiring a new QB in free agency and the draft -- or both.\u00a0\n",
    "timestamp": "2021-01-09 10:44 PM",
    "source": "George Bremer on Twitter ",
    "game_day_logo": "",
    "week01": 16.82,
    "week02": 11.86,
    "week03": 12.68,
    "week04": 11.2,
    "week05": 7.62,
    "week06": 25.74,
    "week07": "BYE",
    "week08": 22.28,
    "week09": 8.08,
    "week10": 16.32,
    "week11": 22.42,
    "week12": 18.8,
    "week13": 19.2,
    "week14": 17.76,
    "week15": 17.02,
    "week16": 11.8,
    "week17": 11.36,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [16.82, 11.86, 12.68, 11.2, 7.62, 25.74, 'BYE', 22.28, 8.08, 16.32, 22.42, 18.8, 19.2, 17.76, 17.02, 11.8, 11.36]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [19.6, 26.8, 17.5, 13.6, 20.3, 15.9, 'BYE', 16.3, 12.6, 19.5, 21.6, 19.6, 19.7, 20.7, 21.2, 15.2, 21.3, 18.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [9.8, 11.4, 10.1, 9.6, 10.9, 10.0, 'BYE', 11.1, 10.3, 10.3, 8.9, 10.0, 9.9, 10.7, 10.3, 9.1, 9.7, 9.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [22.2, 22.4, 23.1, 22.2, 24.5, 23.6, 'BYE', 23.0, 22.4, 23.6, 22.9, 23.0, 23.5, 23.5, 24.0, 24.0, 22.6, 23.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2330.png",
    "name": "Tom Brady",
    "depthchart": "Starter: QB-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 16.8,
    "opponent": "Washington Football Team",
    "home_away": "at ",
    "opp_rank_Neg": 2,
    "team_rank_Pos": 3,
    "avg_fp2": 21.84,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 16.74,
    "fanduelSalary": "$8000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#D50A0A",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(213, 10, 10, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#D50A0A",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Tom Brady completed 22-of-40 passes for 381 yards and two touchdowns in the Bucs' Wild Card win over Washington.\n",
    "report": "",
    "analysis": "As normal, Brady was a constant chain mover and avoided mistakes for all four quarters. He was under pressure in the second half after losing his starting right guard, but the Bucs offense looked fine overall despite Washington's front four and Ronald Jones' unexpected absence. Brady will be asked to pass a lot in the Divisional Round regardless of opponent. Right now, the Bucs are expected to head to New Orleans.\n",
    "timestamp": "2021-01-10 05:13 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 22.46,
    "week02": 9.68,
    "week03": 23.88,
    "week04": 33.46,
    "week05": 14.12,
    "week06": 14.64,
    "week07": 36.86,
    "week08": 19.06,
    "week09": 5.36,
    "week10": 31.84,
    "week11": 14.24,
    "week12": 23.7,
    "week13": "BYE",
    "week14": 15.64,
    "week15": 23.4,
    "week16": 29.92,
    "week17": 31.26,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [22.46, 9.68, 23.88, 33.46, 14.12, 14.64, 36.86, 19.06, 5.36, 31.84, 14.24, 23.7, 'BYE', 15.64, 23.4, 29.92, 31.26]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [23.4, 22.6, 19.6, 16.0, 17.2, 19.7, 19.5, 21.4, 20.7, 15.5, 19.2, 20.1, 'BYE', 19.7, 24.7, 24.2, 20.1, 16.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [10.5, 12.7, 12.4, 10.2, 10.4, 11.6, 14.5, 13.9, 11.5, 11.2, 10.4, 10.2, 'BYE', 10.4, 12.8, 10.8, 12.4, 9.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(213, 10, 10, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [25.9, 27.3, 27.2, 24.0, 25.8, 27.6, 28.8, 27.6, 26.2, 26.3, 25.6, 25.3, 'BYE', 26.9, 26.7, 25.7, 28.3, 26.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3039707.png",
    "name": "Mitchell Trubisky",
    "depthchart": "Starter: QB-1",
    "team": "Chicago Bears",
    "projected": 15.1,
    "opponent": "New Orleans Saints",
    "home_away": "at ",
    "opp_rank_Neg": 5,
    "team_rank_Neu": 22,
    "avg_fp2": 16.18,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 18.13,
    "fanduelSalary": "$6900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#c36835",
    "tmColorDark": "#0B162A",
    "tmColorLite_rgba": "rgba(195, 104, 53, 0.2)",
    "tmColorDark_rgba": "rgba(11, 22, 42, 0.2)",
    "tmTextLite": "#c36835",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png",
    "headlineNews": "Mitchell\u00a0Trubisky completed 33-of-42 passes for 252 yards and an interception in the Bears' 35-16 Week 17 loss to the Packers, adding four rushes for 22 yards.\u00a0\n",
    "report": "",
    "analysis": "The Bears' game plan seemed to be keeping the football away from Aaron Rodgers, not necessarily score more points than the Packers. It worked as well as you'd imagine, with Trubisky checking down time and again in Chicago's conservative offensive approach. The Bears sneaked\u00a0into the postseason despite Sunday's ugly loss to the Packers. Their reward will be an away game against a tough Saints defense. Chicago will be a heavy underdog against New Orleans.\u00a0\n",
    "timestamp": "2021-01-04 02:26 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 24.28,
    "week02": 15.2,
    "week03": 12.62,
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": "DNP",
    "week08": 0.3,
    "week09": "DNP",
    "week10": "DNP",
    "week11": "BYE",
    "week12": 20.78,
    "week13": 13.28,
    "week14": 24.98,
    "week15": 14.48,
    "week16": 24.6,
    "week17": 11.28,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [24.28, 15.2, 12.62, 'DNP', 'DNP', 'DNP', 'DNP', 0.3, 'DNP', 'DNP', 'BYE', 20.78, 13.28, 24.98, 14.48, 24.6, 11.28]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.9, 19.2, 25.5, 'DNP', 'DNP', 'DNP', 'DNP', 4.4, 'DNP', 'DNP', 'BYE', 11.9, 22.8, 20.7, 14.3, 19.0, 18.2, 15.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.0, 5.8, 7.1, 'DNP', 'DNP', 'DNP', 'DNP', 8.1, 'DNP', 'DNP', 'BYE', 6.5, 10.9, 5.9, 7.9, 7.6, 8.4, 8.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  "rgba(195, 104, 53, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [24.1, 21.6, 23.2, 'DNP', 'DNP', 'DNP', 'DNP', 24.8, 'DNP', 'DNP', 'BYE', 24.0, 25.9, 25.2, 22.9, 26.2, 25.2, 23.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3124092.png",
    "name": "John Wolford",
    "depthchart": "Starter: QB-1",
    "team": "Los Angeles Rams",
    "projected": 14.1,
    "opponent": "Seattle Seahawks",
    "home_away": "at ",
    "opp_rank_Pos": 31,
    "team_rank_Neu": 13,
    "avg_fp2": 13.84,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 20.61,
    "fanduelSalary": "$6200",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Neck",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Rams coach Sean McVay said John Wolford had a stinger in the Wild Card win over the Seahawks.\n",
    "report": "",
    "analysis": "Wolford was hit in the head while scrambling early in the game and needed to be examined at a local hospital. The results were positive, and he was able to celebrate the road victory in the locker room with his teammates. McVay said Wolford is \"trending in a positive direction\", so it's possible that he'll return during the Rams' playoff run. With that said, Jared Goff will be starting as long as he's healthy. Goff escaped the Wild Card game without a visible setback.\n",
    "timestamp": "2021-01-10 01:36 AM",
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
    "week10": "DNP",
    "week11": "DNP",
    "week12": "DNP",
    "week13": "DNP",
    "week14": "DNP",
    "week15": "DNP",
    "week16": "DNP",
    "week17": 13.84,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 13.84]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 20.1, 14.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 7.1, 9.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 21.3, 24.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14876.png",
    "name": "Ryan Tannehill",
    "depthchart": "Starter: QB-1",
    "team": "Tennessee Titans",
    "projected": 13.7,
    "opponent": "Baltimore Ravens",
    "home_away": "",
    "opp_rank_Neg": 6,
    "team_rank_Neu": 23,
    "avg_fp2": 21.92,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 17.57,
    "fanduelSalary": "$8200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#4495D1",
    "tmColorDark": "#002A5C",
    "tmColorLite_rgba": "rgba(68, 149, 209, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 92, 0.2)",
    "tmTextLite": "#4495D1",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png",
    "headlineNews": "Ryan Tannehill completed 18-of-27 passes for 216 yards and a touchdown in the Titans' 41-38, Week 17 win over the Texans, adding seven carries for 38 yards and two additional scores.\u00a0\n",
    "report": "",
    "analysis": "With the nail-biting win \u2014 fill-in K Sam Sloman banked in the 37-yard game winner with no time remaining \u2014 the Titans clinched the No. 4 seed and a home game. It will be a 2019-20 Divisional Round rematch with the piping-hot Ravens. Tannehill enters the playoffs with a host of new career highs, including his most passing scores (32) and fewest interceptions (seven) for a 16-game season. 2020 was also the first time since 2015 Tannehill started all 16 contests. Next week is going to be a slugfest, and on paper profiles as one of the most exciting matchups of the entire postseason.\u00a0\n",
    "timestamp": "2021-01-04 01:17 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 19.36,
    "week02": 26.76,
    "week03": 13.24,
    "week04": "BYE",
    "week05": 30.0,
    "week06": 29.56,
    "week07": 17.3,
    "week08": 18.32,
    "week09": 14.62,
    "week10": 10.78,
    "week11": 22.86,
    "week12": 19.14,
    "week13": 28.56,
    "week14": 16.48,
    "week15": 37.02,
    "week16": 18.34,
    "week17": 28.44,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
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
                         data: [19.36, 26.76, 13.24, 'BYE', 30.0, 29.56, 17.3, 18.32, 14.62, 10.78, 22.86, 19.14, 28.56, 16.48, 37.02, 18.34, 28.44]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.0, 17.5, 14.7, 'BYE', 17.0, 18.7, 16.5, 22.5, 14.8, 14.7, 19.8, 12.1, 20.3, 19.8, 22.0, 14.4, 17.9, 13.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [9.4, 9.1, 9.1, 'BYE', 10.0, 10.1, 8.8, 9.0, 9.9, 9.5, 9.5, 11.7, 11.1, 12.7, 10.2, 14.3, 13.0, 13.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [22.2, 22.3, 22.4, 'BYE', 23.8, 23.4, 23.5, 23.4, 23.7, 23.1, 22.9, 22.8, 26.3, 24.9, 24.1, 28.6, 26.4, 25.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3052587.png",
    "name": "Baker Mayfield",
    "depthchart": "Starter: QB-1",
    "team": "Cleveland Browns",
    "projected": 13.1,
    "opponent": "Pittsburgh Steelers",
    "home_away": "at ",
    "opp_rank_Neg": 3,
    "team_rank_Neg": 24,
    "avg_fp2": 16.01,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 15.3,
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
    "headlineNews": "Bakery Mayfield was the most accurate deep ball passer in the NFL this season.\u00a0\n",
    "report": "",
    "analysis": "Mayfield's adjusted completion rate on throws more than 20 yards downfield was 51.9 percent, according to Pro Football Focus. He attempted 54 deep shots on the season, the 16th most in the league. Deshaun Watson had the second best adjusted completion rate on downfield passes. Mayfield's success on deep passes brought a much-needed element to the Cleveland offense, which began the season as a conservative, run-heavy unit seemingly uninterested in big plays. Nearly 13 percent of Mayfield's throws beyond 20 yards over the season's final six weeks compared to a 10 percent deep throw rate in the season's first six weeks. Mayfield will have to remain aggressive if the Browns are going to upset Pittsburgh in the Wild Card round.\u00a0\n",
    "timestamp": "2021-01-04 01:54 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 10.86,
    "week02": 16.26,
    "week03": 14.34,
    "week04": 15.2,
    "week05": 17.58,
    "week06": 7.26,
    "week07": 30.78,
    "week08": 7.78,
    "week09": "BYE",
    "week10": 5.38,
    "week11": 7.06,
    "week12": 18.42,
    "week13": 28.96,
    "week14": 31.02,
    "week15": 20.98,
    "week16": 8.0,
    "week17": 16.24,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.86, 16.26, 14.34, 15.2, 17.58, 7.26, 30.78, 7.78, 'BYE', 5.38, 7.06, 18.42, 28.96, 31.02, 20.98, 8.0, 16.24]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [22.1, 19.9, 21.1, 15.8, 13.9, 14.6, 18.4, 25.9, 'BYE', 17.0, 14.6, 15.1, 25.1, 13.3, 15.7, 22.9, 15.8, 13.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [10.5, 10.3, 10.0, 13.0, 10.1, 11.8, 11.7, 12.8, 'BYE', 11.8, 9.6, 11.7, 9.6, 10.2, 12.3, 11.3, 5.5, 9.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [22.0, 22.1, 20.2, 22.0, 21.4, 21.0, 19.1, 23.3, 'BYE', 21.7, 23.4, 24.2, 22.0, 23.1, 25.0, 25.1, 20.2, 23.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2565969.png",
    "name": "Taylor Heinicke",
    "depthchart": "Starter: QB-1",
    "team": "Washington Football Team",
    "projected": 8.2,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "",
    "opp_rank_Neu": 21,
    "team_rank_Neg": 25,
    "avg_fp2": 3.38,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 19.21,
    "fanduelSalary": "$5000",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Shoulder - AC Joint",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#773141",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(119, 49, 65, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png",
    "headlineNews": "Taylor Heinicke completed 26-of-44 passes for 304 yards, one touchdown, and one interception in Washington's Wild Card loss to the Buccaneers.\n",
    "report": "",
    "analysis": "Heinicke was a flashy quarterback in 2014 at Old Dominion but was an afterthought in the NFL a couple of\u00a0years ago. A few plus games in the XFL earned himself one last chance in the big leagues, and he ran with it in prime time against Tom Brady. Heinicke was poised inside the pocket, delivered accurate passes to all depths of the field, and picked up yards with his legs. A 13-yard rushing touchdown was the cherry on top. Overall, it was the best singular performance by a Washington quarterback all season. The 27-year-old free agent earned himself a good chunk of dough this offseason. Washington should have interest in retaining him.\n",
    "timestamp": "2021-01-10 04:46 AM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": "DNP",
    "week08": "BYE",
    "week09": "DNP",
    "week10": "DNP",
    "week11": "DNP",
    "week12": "DNP",
    "week13": "DNP",
    "week14": "DNP",
    "week15": "DNP",
    "week16": "DNP",
    "week17": "DNP",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 8.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 1.0]
                    }
                    
                    ]
               }
            }];




$scope.positionRB = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4360294.png",
    "name": "Antonio Gibson",
    "depthchart": "Starter: RB-1",
    "team": "Washington Football Team",
    "projected": 19.8,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "",
    "opp_rank_Neg": 1,
    "team_rank_Neg": 26,
    "avg_fp2": 13.16,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 16.26,
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
    "headlineNews": "Antonio Gibson rushed 14 times for 31 yards in Washington's Wild Card loss to the Buccaneers.\n",
    "report": "",
    "analysis": "In the regular season, Gibson rushed for 795 yards and 11 touchdowns on 170 carries (4.7 YPC) while adding 36-247-0 on 44 targets as a receiver. It took a few weeks to get the early-down work to himself, but once he did, Gibson was a weekly\u00a0upside RB2. Despite being a gadget player in college, Gibson is on a bellcow trajectory in the NFL. He should take big leaps with more in-game reps next season and possibly could supplant J.D. McKissic as Washington's\u00a0third-down back. If that happens, Gibson could flirt with RB1 numbers next season, particularly if Washington can find stability at quarterback. He has prime David Johnson-level upside.\n",
    "timestamp": "2021-01-10 05:31 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 5.4,
    "week02": 11.7,
    "week03": 11.5,
    "week04": 20.8,
    "week05": 7.6,
    "week06": 7.5,
    "week07": 18.8,
    "week08": "BYE",
    "week09": 11.0,
    "week10": 20.5,
    "week11": 16.9,
    "week12": 34.1,
    "week13": 1.4,
    "week14": "DNP",
    "week15": "DNP",
    "week16": 8.4,
    "week17": 8.6,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.4, 11.7, 11.5, 20.8, 7.6, 7.5, 18.8, 'BYE', 11.0, 20.5, 16.9, 34.1, 1.4, 'DNP', 'DNP', 8.4, 8.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.3, 6.1, 8.1, 7.6, 12.2, 11.6, 11.9, 'BYE', 10.7, 19.3, 11.4, 11.1, 13.4, 'DNP', 'DNP', 13.8, 13.2, 19.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.6, 0.7, 6.7, 3.0, 6.6, 8.5, 9.2, 'BYE', 8.1, 8.9, 8.3, 7.2, 3.5, 'DNP', 'DNP', 2.1, 5.5, 8.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.3, 10.0, 14.8, 19.2, 20.3, 17.5, 11.3, 'BYE', 19.1, 17.2, 16.5, 18.6, 15.0, 'DNP', 'DNP', 23.1, 22.1, 13.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3054850.png",
    "name": "Alvin Kamara",
    "depthchart": "Starter: RB-1",
    "team": "New Orleans Saints",
    "projected": 19.2,
    "opponent": "Chicago Bears",
    "home_away": "",
    "opp_rank_Neu": 15,
    "team_rank_Pos": 6,
    "avg_fp2": 22.42,
    "opp_rank_allowed_fp2_Neu": 9,
    "opp_avg_allowed_fp2": 18.43,
    "fanduelSalary": "$9000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9b845c",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(155, 132, 92, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#9b845c",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
    "headlineNews": "Saints activated RB\u00a0Alvin Kamara from the reserve/COVID-19 list.\u00a0\n",
    "report": "",
    "analysis": "Kamara's COVID absence ended up with its best-case scenario outcome. Kamara misses only one game and won't have to take a private plane to join the team on Sunday since the game is in New Orleans. He just has to test negative one more time and he will be ready to rock vs. a defense he went 9/96 against as a receiver earlier this season. The Bears were near the bottom of the table in terms of running back fantasy points permitted, but Kamara is still the second best play on Sunday's three-game DFS slate.\u00a0\n",
    "timestamp": "2021-01-09 09:53 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 21.2,
    "week02": 33.9,
    "week03": 38.2,
    "week04": 19.4,
    "week05": 15.9,
    "week06": "BYE",
    "week07": 18.8,
    "week08": 20.8,
    "week09": 13.4,
    "week10": 31.3,
    "week11": 10.5,
    "week12": 5.7,
    "week13": 16.7,
    "week14": 18.9,
    "week15": 16.9,
    "week16": 54.7,
    "week17": "DNP",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
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
                         data: [21.2, 33.9, 38.2, 19.4, 15.9, 'BYE', 18.8, 20.8, 13.4, 31.3, 10.5, 5.7, 16.7, 18.9, 16.9, 54.7, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [20.0, 19.4, 22.1, 18.6, 21.2, 'BYE', 21.9, 15.5, 19.1, 21.5, 17.6, 17.2, 17.0, 24.2, 18.3, 25.0, 'DNP', 19.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [9.1, 6.6, 6.4, 10.0, 11.4, 'BYE', 10.5, 11.2, 8.6, 9.2, 9.6, 9.7, 9.7, 8.8, 11.1, 10.1, 'DNP', 9.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(155, 132, 92, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [25.6, 24.0, 25.1, 27.6, 27.9, 'BYE', 28.5, 29.9, 24.6, 24.7, 26.4, 24.8, 25.1, 24.4, 27.5, 26.4, 'DNP', 26.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3043078.png",
    "name": "Derrick Henry",
    "depthchart": "Starter: RB-1",
    "team": "Tennessee Titans",
    "projected": 17.4,
    "opponent": "Baltimore Ravens",
    "home_away": "",
    "opp_rank_Neu": 8,
    "team_rank_Pos": 2,
    "avg_fp2": 20.23,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 19.04,
    "fanduelSalary": "$10200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#4495D1",
    "tmColorDark": "#002A5C",
    "tmColorLite_rgba": "rgba(68, 149, 209, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 92, 0.2)",
    "tmTextLite": "#4495D1",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png",
    "headlineNews": "Derrick Henry rushed 34 times for 250 yards and two touchdowns in the Titans' Week 17 win over the Texans.\u00a0\n",
    "report": "",
    "analysis": "With the monster effort \u2014 Henry's 250 yards tied for the 13th most in a single game \u2014 Henry became just the eighth player in NFL history to reach 2,000 yards rushing on the season. His 2,027 are the fifth most ever, slotting him in between 1998 Terrell Davis and 1997 Barry Sanders. Today was Henry's third straight game against the Texans where he cleared 200 yards. Bill O'Brien's full-time replacement might want to work on the game plan. Henry heads into next Saturday's Wild Card showdown\u00a0with the Ravens \u2014 a team he dismantled in the Divisional Round last year \u2014 averaging 5.36 yards per carry, and with 17 touchdowns in 16 games.\u00a0\n",
    "timestamp": "2021-01-04 12:45 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 14.6,
    "week02": 8.4,
    "week03": 26.0,
    "week04": "BYE",
    "week05": 18.8,
    "week06": 39.4,
    "week07": 14.2,
    "week08": 17.2,
    "week09": 6.8,
    "week10": 11.4,
    "week11": 19.7,
    "week12": 37.5,
    "week13": 5.4,
    "week14": 35.2,
    "week15": 24.2,
    "week16": 9.8,
    "week17": 35.0,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
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
                         data: [14.6, 8.4, 26.0, 'BYE', 18.8, 39.4, 14.2, 17.2, 6.8, 11.4, 19.7, 37.5, 5.4, 35.2, 24.2, 9.8, 35.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.5, 22.9, 15.0, 'BYE', 16.3, 14.9, 20.2, 14.3, 15.3, 17.1, 21.1, 14.9, 17.5, 16.9, 17.9, 17.1, 23.1, 17.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.8, 3.9, 1.6, 'BYE', 5.1, 5.3, 3.8, 3.9, 8.8, 5.7, 8.6, 3.2, 6.1, 5.3, 7.9, 3.7, 10.5, 6.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [23.0, 24.1, 21.1, 'BYE', 21.4, 22.3, 21.7, 23.5, 25.6, 23.3, 23.6, 23.9, 25.6, 20.1, 25.0, 23.7, 29.4, 24.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2572861.png",
    "name": "J.D. McKissic",
    "depthchart": "Backup: RB-2",
    "team": "Washington Football Team",
    "projected": 16.3,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "",
    "opp_rank_Neg": 1,
    "team_rank_Neg": 26,
    "avg_fp2": 9.46,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 16.26,
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
    "headlineNews": "J.D. McKissic rushed twice for five yards and one touchdown in Washington's Wild Card loss to the Buccaneers.\n",
    "report": "",
    "analysis": "McKissic was Washington's third-down back for the entire 2020 season. He converted an absurd 110 targets into a 80-589-2 receiving line while adding 365 yards and one touchdown on 85 carries as a rusher. McKissic's ceiling is capped by his one-dimensional skill set, especially with Antonio Gibson looking ready for a bellcow role next year. McKissic is signed through the 2021 season and should be viewed as a\u00a0RB5\u00a0in PPR formats this summer. It'd be a surprise if McKissic comes within 30 receptions of his 2020 totals next year. Washington will be adding more pass-catching talent this offseason.\n",
    "timestamp": "2021-01-10 05:38 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 0.4,
    "week02": 5.3,
    "week03": 6.7,
    "week04": 6.1,
    "week05": 7.9,
    "week06": 11.4,
    "week07": 6.1,
    "week08": "BYE",
    "week09": 12.7,
    "week10": 14.4,
    "week11": 8.4,
    "week12": 3.7,
    "week13": 12.8,
    "week14": 9.6,
    "week15": 21.2,
    "week16": 19.2,
    "week17": 5.5,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.4, 5.3, 6.7, 6.1, 7.9, 11.4, 6.1, 'BYE', 12.7, 14.4, 8.4, 3.7, 12.8, 9.6, 21.2, 19.2, 5.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.7, 4.3, 3.8, 2.8, 5.2, 4.9, 6.7, 'BYE', 6.0, 12.0, 8.4, 7.6, 5.8, 5.4, 8.1, 7.9, 9.9, 16.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.4, 3.4, 0.0, 0.0, 2.3, 'BYE', 2.0, 3.0, 3.4, 3.9, 2.6, 5.9, 3.4, 5.3, 12.2, 4.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [5.9, 8.1, 8.2, 7.2, 12.0, 11.5, 12.3, 'BYE', 9.9, 9.3, 10.0, 13.1, 12.5, 13.0, 12.2, 10.9, 20.9, 16.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3919596.png",
    "name": "Chris Carson",
    "depthchart": "Starter: RB-1",
    "team": "Seattle Seahawks",
    "projected": 13.8,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank_Neg": 3,
    "team_rank_Neu": 12,
    "avg_fp2": 14.11,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 17.1,
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
    "headlineNews": "Chris Carson rushed 16 times for 77 yards in the Seahawks' Wild Card loss to the Rams, adding a five-yard reception.\u00a0\n",
    "report": "",
    "analysis": "It caps a weird year for Carson, who was limited to 12 games by a foot injury. Despite a much greater run-game commitment\u00a0from the Seahawks in the second half of the season, Carson never reached 20 carries or 100 yards on the ground, often ceding a non-trivial amount of work to Carlos Hyde. He did average a healthy 4.8 yards per carry behind a solid run-blocking line. Headed into his age-27 campaign, Carson will be a free agent after playing out his rookie contract. Yet to have a 16-game season thanks in part to his battering ram running style, it's possible Carson and the Seahawks can't find the right price, though run-obsessed coach Pete Carroll will be more inclined than most to bring Carson back.\u00a0\n",
    "timestamp": "2021-01-10 03:07 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 21.6,
    "week02": 18.3,
    "week03": 9.1,
    "week04": "DNP",
    "week05": 16.9,
    "week06": "BYE",
    "week07": 4.6,
    "week08": "DNP",
    "week09": "DNP",
    "week10": "DNP",
    "week11": "DNP",
    "week12": 12.9,
    "week13": 18.5,
    "week14": 17.3,
    "week15": 7.9,
    "week16": 9.4,
    "week17": 9.3,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
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
                         data: [21.6, 18.3, 9.1, 'DNP', 16.9, 'BYE', 4.6, 'DNP', 'DNP', 'DNP', 'DNP', 12.9, 18.5, 17.3, 7.9, 9.4, 9.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.2, 12.5, 16.4, 'DNP', 16.7, 'BYE', 12.0, 'DNP', 'DNP', 'DNP', 'DNP', 10.8, 15.0, 10.2, 14.0, 15.4, 9.6, 13.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.2, 5.1, 7.1, 'DNP', 10.4, 'BYE', 9.1, 'DNP', 'DNP', 'DNP', 'DNP', 5.6, 6.0, 7.3, 8.3, 8.3, 6.8, 9.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.0, 17.4, 20.3, 'DNP', 22.5, 'BYE', 20.8, 'DNP', 'DNP', 'DNP', 'DNP', 17.3, 16.3, 20.8, 19.2, 19.9, 19.3, 20.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4241985.png",
    "name": "J.K. Dobbins",
    "depthchart": "Starter: RB-1",
    "team": "Baltimore Ravens",
    "projected": 13.5,
    "opponent": "Tennessee Titans",
    "home_away": "at ",
    "opp_rank_Neu": 20,
    "team_rank_Pos": 1,
    "avg_fp2": 10.63,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 23.13,
    "fanduelSalary": "$6800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9E7C0C",
    "tmColorDark": "#241773",
    "tmColorLite_rgba": "rgba(158, 124, 12, 0.2)",
    "tmColorDark_rgba": "rgba(36, 23, 115, 0.2)",
    "tmTextLite": "#9E7C0C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png",
    "headlineNews": "J.K. Dobbins has 13 rushes for 160 yards and two touchdowns in the Ravens' Week 17 win over the Bengals.\u00a0\n",
    "report": "",
    "analysis": "Dobbins went off against a Bengals defense that didn't look all that interested in tackling in Week 17. He blew by defenders on a 72-yard touchdown in the fourth quarter, after Lamar Jackson had been pulled in\u00a0the blowout victory. Dobbins, who had one more carry than Gus Edwards against the Bengals, remains the No. 1 running back in the Baltimore backfield, and clearly the most explosive. The rookie will be heavily involved in the Ravens offense if they can manage to keep game script on their side.\u00a0\n",
    "timestamp": "2021-01-03 09:15 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 14.2,
    "week02": 6.6,
    "week03": 6.4,
    "week04": 2.2,
    "week05": 7.0,
    "week06": 3.9,
    "week07": "BYE",
    "week08": 12.6,
    "week09": 4.5,
    "week10": 1.9,
    "week11": 17.5,
    "week12": "DNP",
    "week13": 13.1,
    "week14": 13.3,
    "week15": 14.6,
    "week16": 13.7,
    "week17": 28.0,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.2, 6.6, 6.4, 2.2, 7.0, 3.9, 'BYE', 12.6, 4.5, 1.9, 17.5, 'DNP', 13.1, 13.3, 14.6, 13.7, 28.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.5, 11.2, 7.1, 7.9, 6.1, 2.4, 'BYE', 4.3, 7.1, 7.5, 6.5, 'DNP', 11.2, 10.4, 14.1, 11.9, 14.5, 13.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.4, 7.2, 4.5, 0.0, 2.8, 0.0, 'BYE', 2.7, 3.5, 2.1, 10.9, 'DNP', 2.9, 2.3, 6.3, 3.0, 6.1, 4.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [7.6, 21.7, 9.8, 15.0, 9.7, 11.1, 'BYE', 12.0, 7.4, 9.0, 14.7, 'DNP', 8.8, 10.3, 14.7, 13.6, 14.4, 19.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3128720.png",
    "name": "Nick Chubb",
    "depthchart": "Starter: RB-1",
    "team": "Cleveland Browns",
    "projected": 13.4,
    "opponent": "Pittsburgh Steelers",
    "home_away": "at ",
    "opp_rank_Neu": 11,
    "team_rank_Pos": 3,
    "avg_fp2": 16.64,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 17.17,
    "fanduelSalary": "$7700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FF3C00",
    "tmColorDark": "#311D00",
    "tmColorLite_rgba": "rgba(255, 60, 0, 0.2)",
    "tmColorDark_rgba": "rgba(49, 29, 0, 0.2)",
    "tmTextLite": "#FF3C00",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
    "headlineNews": "Nick Chubb rushed 14 times for 108 yards and a touchdown in the Browns' Week 17 win over the Steelers.\u00a0\n",
    "report": "",
    "analysis": "Chubb's sixth 100-yard rushing performance of the season gives him his second straight 1,000-yard campaign, this one in only 12 games. Today's touchdown was a 47-yarder where Chubb looked shot out of a cannon before breaking one tackle and slipping a few others. Chubb scored in 10-of-12 appearances this season, a preposterous achievement. Leaned on strangely little over the past two weeks, Chubb will have to be a point of emphasis if the Browns are to have any shot at springing a Wild Card upset in their road rematch with the Steelers.\u00a0\n",
    "timestamp": "2021-01-03 11:08 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 5.1,
    "week02": 25.8,
    "week03": 23.5,
    "week04": 4.3,
    "week05": "DNP",
    "week06": "DNP",
    "week07": "DNP",
    "week08": "DNP",
    "week09": "BYE",
    "week10": 18.6,
    "week11": 11.4,
    "week12": 25.1,
    "week13": 17.1,
    "week14": 23.3,
    "week15": 13.6,
    "week16": 15.1,
    "week17": 16.8,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.1, 25.8, 23.5, 4.3, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 18.6, 11.4, 25.1, 17.1, 23.3, 13.6, 15.1, 16.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.9, 13.3, 10.9, 10.2, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 15.8, 11.4, 16.6, 11.2, 12.1, 14.5, 9.7, 14.7, 13.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.7, 3.5, 2.6, 7.5, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 4.1, 3.5, 4.8, 6.2, 4.8, 5.0, 4.1, 3.7, 4.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.4, 20.8, 18.1, 23.9, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 22.7, 18.9, 21.0, 24.5, 23.8, 21.6, 22.5, 24.3, 23.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4040761.png",
    "name": "Devin Singletary",
    "depthchart": "Starter: RB-1",
    "team": "Buffalo Bills",
    "projected": 13.2,
    "opponent": "Indianapolis Colts",
    "home_away": "",
    "opp_rank_Neg": 2,
    "team_rank_Neu": 20,
    "avg_fp2": 7.78,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 18.89,
    "fanduelSalary": "$5300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#005596",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 85, 150, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
    "headlineNews": "Zack Moss (ankle) could miss the remainder of the postseason.\u00a0\n",
    "report": "",
    "analysis": "Moss was carted off after suffering the ankle injury Saturday against the Colts. NFL Network's Mike Garafolo said there's some hope the rookie could return to the lineup if Buffalo makes a deep postseason run, but for now, Devin Singletary will be the Bills' primary ball carrier. Singletary still doesn't have much upside in the Bills' pass-first offense.\u00a0\n",
    "timestamp": "2021-01-10 12:04 AM",
    "source": "Mike Garafolo on Twitter",
    "game_day_logo": "",
    "week01": 7.8,
    "week02": 8.6,
    "week03": 14.1,
    "week04": 16.1,
    "week05": 3.8,
    "week06": 5.0,
    "week07": 5.7,
    "week08": 9.7,
    "week09": 4.9,
    "week10": 1.5,
    "week11": "BYE",
    "week12": 9.7,
    "week13": 9.8,
    "week14": 3.9,
    "week15": 15.9,
    "week16": 6.2,
    "week17": 1.8,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
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
                         data: [7.8, 8.6, 14.1, 16.1, 3.8, 5.0, 5.7, 9.7, 4.9, 1.5, 'BYE', 9.7, 9.8, 3.9, 15.9, 6.2, 1.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.0, 12.2, 15.4, 13.9, 14.2, 19.5, 12.0, 11.0, 8.5, 7.6, 'BYE', 12.3, 8.1, 10.7, 10.4, 13.6, 8.3, 13.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.0, 5.7, 6.6, 8.2, 6.1, 7.9, 5.1, 3.7, 5.4, 5.5, 'BYE', 4.2, 5.4, 6.9, 4.3, 5.0, 5.6, 4.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.0, 12.5, 15.1, 17.8, 16.1, 16.9, 14.9, 14.4, 15.4, 14.9, 'BYE', 15.8, 16.6, 14.6, 13.2, 15.5, 14.0, 15.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3045147.png",
    "name": "James Conner",
    "depthchart": "Starter: RB-1",
    "team": "Pittsburgh Steelers",
    "projected": 13.0,
    "opponent": "Cleveland Browns",
    "home_away": "",
    "opp_rank_Neu": 9,
    "team_rank_Neg": 32,
    "avg_fp2": 11.31,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 18.05,
    "fanduelSalary": "$6200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/pit.png",
    "headlineNews": "James Conner rushed nine times for 37 yards in the Steelers' Week 17 loss to the Browns, adding five receptions for 25 additional yards.\u00a0\n",
    "report": "",
    "analysis": "The Steelers rested a few key starters, but Conner's 14 touches were his most since before Thanksgiving. The Steelers seemed to want to get their nominal \"lead back\" going headed into the postseason after an extremely disappointing regular campaign. Rematching with the Browns' pass-funnel defense in the Wild Card Round, Conner won't be a high-upside DFS option with Ben Roethlisberger back under center.\u00a0\n",
    "timestamp": "2021-01-03 10:20 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 2.7,
    "week02": 19.1,
    "week03": 22.9,
    "week04": "BYE",
    "week05": 13.8,
    "week06": 16.7,
    "week07": 12.6,
    "week08": 13.5,
    "week09": 3.0,
    "week10": 5.8,
    "week11": 11.4,
    "week12": "DNP",
    "week13": "DNP",
    "week14": 1.8,
    "week15": "DNP",
    "week16": 15.0,
    "week17": 8.7,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.7, 19.1, 22.9, 'BYE', 13.8, 16.7, 12.6, 13.5, 3.0, 5.8, 11.4, 'DNP', 'DNP', 1.8, 'DNP', 15.0, 8.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.0, 10.1, 17.3, 'BYE', 17.7, 13.3, 13.9, 12.0, 15.0, 15.8, 10.1, 'DNP', 'DNP', 11.5, 'DNP', 10.6, 11.5, 13.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.2, 0.1, 6.5, 'BYE', 0.0, 5.4, 4.5, 1.5, 7.3, 4.1, 2.6, 'DNP', 'DNP', 1.3, 'DNP', 6.1, 2.7, 1.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.1, 17.2, 24.3, 'BYE', 23.4, 24.6, 26.5, 22.2, 23.3, 22.3, 17.9, 'DNP', 'DNP', 17.0, 'DNP', 19.3, 19.3, 17.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4035538.png",
    "name": "David Montgomery",
    "depthchart": "Starter: RB-1",
    "team": "Chicago Bears",
    "projected": 12.6,
    "opponent": "New Orleans Saints",
    "home_away": "at ",
    "opp_rank_Neg": 4,
    "team_rank_Neg": 25,
    "avg_fp2": 15.85,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 14.47,
    "fanduelSalary": "$8400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#c36835",
    "tmColorDark": "#0B162A",
    "tmColorLite_rgba": "rgba(195, 104, 53, 0.2)",
    "tmColorDark_rgba": "rgba(11, 22, 42, 0.2)",
    "tmTextLite": "#c36835",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png",
    "headlineNews": "David Montgomery ran the second most pass routes among running backs in the 2020 regular season.\u00a0\n",
    "report": "",
    "analysis": "It marks a dramatic shift in Montgomery's pass game usage, and it likely wouldn't have happened without Tarik Cohen's season-ending knee injury in Week 3. Montgomery, who was 23rd in running back pass routes in 2019, was only behind J.D. McKissic in running back routes this season. Cohen ran the eighth most running back pass routes in 2019. The pass game role made Montgomery a RB1 for much of the season's second half. Cohen is signed with the Bears through the 2023 season, so Montgomery could lose his heavy passing down usage next season.\u00a0\n",
    "timestamp": "2021-01-05 02:07 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 7.9,
    "week02": 20.2,
    "week03": 6.4,
    "week04": 9.2,
    "week05": 15.4,
    "week06": 11.7,
    "week07": 9.4,
    "week08": 11.5,
    "week09": 3.7,
    "week10": "DNP",
    "week11": "BYE",
    "week12": 22.8,
    "week13": 25.1,
    "week14": 23.0,
    "week15": 28.7,
    "week16": 19.1,
    "week17": 23.7,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.9, 20.2, 6.4, 9.2, 15.4, 11.7, 9.4, 11.5, 3.7, 'DNP', 'BYE', 22.8, 25.1, 23.0, 28.7, 19.1, 23.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.2, 11.2, 15.5, 16.0, 5.9, 13.2, 17.5, 11.3, 13.4, 'DNP', 'BYE', 11.7, 18.2, 21.9, 13.8, 18.4, 21.5, 12.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.6, 1.5, 3.7, 3.8, 2.7, 3.1, 8.5, 4.5, 4.5, 'DNP', 'BYE', 5.4, 4.2, 4.7, 3.1, 6.8, 4.8, 7.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  "rgba(195, 104, 53, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.5, 13.5, 16.2, 14.2, 15.5, 13.9, 20.0, 17.0, 10.7, 'DNP', 'BYE', 17.7, 15.2, 18.5, 15.4, 21.7, 16.6, 23.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4242335.png",
    "name": "Jonathan Taylor",
    "depthchart": "Starter: RB-1",
    "team": "Indianapolis Colts",
    "projected": 10.2,
    "opponent": "Buffalo Bills",
    "home_away": "at ",
    "opp_rank_Neu": 17,
    "team_rank_Neu": 11,
    "avg_fp2": 15.65,
    "opp_rank_allowed_fp2_Neu": 14,
    "opp_avg_allowed_fp2": 19.54,
    "fanduelSalary": "$8800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#014683",
    "tmColorDark": "#002C5F",
    "tmColorLite_rgba": "rgba(1, 70, 131, 0.2)",
    "tmColorDark_rgba": "rgba(0, 44, 95, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png",
    "headlineNews": "Jonathan Taylor had 21 rushes for 78 yards and a touchdown in the Colts' Wild Card Weekend loss to the Bills, adding two catches for six yards.\u00a0\n",
    "report": "",
    "analysis": "Taylor uncharacteristically dropped two passes against Buffalo, but once again dominated the backfield workload. The rookie emerged as the unquestioned workhorse back after the team's bye week, finishing his season with\u00a01,169 yards and 11 touchdowns. He capped his hot end-of-season run by decimating\u00a0the Jaguars in Week 17 with 253 rushing yards and two scores on the ground. Taylor should be the centerpiece of the Colts' offense in 2021 and will likely be drafted in the late first and early second round of fantasy drafts.\u00a0\n",
    "timestamp": "2021-01-09 11:22 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 11.9,
    "week02": 18.0,
    "week03": 12.7,
    "week04": 8.4,
    "week05": 14.4,
    "week06": 13.5,
    "week07": "BYE",
    "week08": 4.1,
    "week09": 8.4,
    "week10": 4.7,
    "week11": 13.4,
    "week12": "DNP",
    "week13": 21.0,
    "week14": 29.5,
    "week15": 17.5,
    "week16": 19.4,
    "week17": 37.9,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.9, 18.0, 12.7, 8.4, 14.4, 13.5, 'BYE', 4.1, 8.4, 4.7, 13.4, 'DNP', 21.0, 29.5, 17.5, 19.4, 37.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.9, 14.1, 12.7, 15.9, 12.4, 12.9, 'BYE', 18.8, 6.6, 12.3, 10.7, 'DNP', 14.0, 8.8, 20.4, 10.5, 13.1, 10.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 8.5, 14.4, 11.5, 6.8, 9.6, 'BYE', 12.0, 5.5, 6.0, 7.0, 'DNP', 9.1, 5.3, 8.4, 8.0, 6.8, 6.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.4, 21.4, 19.4, 17.2, 18.0, 20.2, 'BYE', 14.8, 16.4, 13.3, 15.7, 'DNP', 14.8, 17.5, 18.7, 22.6, 20.6, 25.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4240021.png",
    "name": "Cam Akers",
    "depthchart": "Starter: RB-1",
    "team": "Los Angeles Rams",
    "projected": 10.1,
    "opponent": "Seattle Seahawks",
    "home_away": "at ",
    "opp_rank_Neg": 5,
    "team_rank_Neu": 10,
    "avg_fp2": 7.41,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 20.32,
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
    "headlineNews": "Cam Akers rushed 28 times for 131 yards and a touchdown in the Rams' Wild Card win over the Seahawks, adding two receptions for 45 additional\u00a0yards.\u00a0\n",
    "report": "",
    "analysis": "Akers supposedly suffered a high-ankle sprain in Week 15, but he was surprisingly left off the final injury report on Thursday, suggesting 100 percent health\u00a0for the playoffs. That indeed appeared to be the case, as Akers was the best offensive player in an ugly slugfest where both passing games were completely inept. Running with Peterson-ian power, Akers' ankle was not hindering him going side to side. With Jared Goff (thumb) still nowhere close to 100 percent healthy, Akers \u2014 who has cleared 170 yards from scrimmage twice in his past four games \u2014 will undoubtedly remain the Rams' offensive engine for the Divisional Round.\u00a0\u00a0\n",
    "timestamp": "2021-01-10 01:35 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 4.8,
    "week02": 1.3,
    "week03": "DNP",
    "week04": "DNP",
    "week05": 6.1,
    "week06": 0.0,
    "week07": 0.0,
    "week08": 5.9,
    "week09": "BYE",
    "week10": 3.8,
    "week11": 8.4,
    "week12": 14.4,
    "week13": 15.9,
    "week14": 20.4,
    "week15": 6.7,
    "week16": "DNP",
    "week17": 8.6,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.8, 1.3, 'DNP', 'DNP', 6.1, 0.0, 0.0, 5.9, 'BYE', 3.8, 8.4, 14.4, 15.9, 20.4, 6.7, 'DNP', 8.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.7, 6.0, 'DNP', 'DNP', 4.2, 2.3, 3.3, 3.3, 'BYE', 2.3, 0.7, 2.4, 5.9, 12.0, 14.4, 'DNP', 12.7, 10.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 1.1, 'DNP', 'DNP', 0.0, 0.0, 0.0, 0.0, 'BYE', 0.1, 0.3, 0.1, 0.2, 1.6, 4.9, 'DNP', 0.9, 1.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.9, 7.5, 'DNP', 'DNP', 8.2, 10.1, 9.8, 11.3, 'BYE', 5.5, 5.2, 5.1, 10.5, 10.6, 16.4, 'DNP', 11.8, 13.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3059915.png",
    "name": "Kareem Hunt",
    "depthchart": "Backup: RB-2",
    "team": "Cleveland Browns",
    "projected": 8.8,
    "opponent": "Pittsburgh Steelers",
    "home_away": "at ",
    "opp_rank_Neu": 11,
    "team_rank_Pos": 3,
    "avg_fp2": 12.47,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 17.17,
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
    "headlineNews": "Kareem Hunt rushed 10 times for 37 yards in the Browns' Week 17 win over the Steelers, adding a four-yard reception.\u00a0\n",
    "report": "",
    "analysis": "With the 41-yard day, Hunt \u2014 who appeared in all 16 games for the first time since 2017\u00a0\u2014 finishes with 1,145 yards from scrimmage as the Browns' 1B back. Oddly uninvolved over the past three weeks, the Browns will need to find more creative ways to get Hunt the ball as they try to spring a Wild Card upset in next week's rematch with the Steelers.\u00a0\n",
    "timestamp": "2021-01-03 10:38 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 10.1,
    "week02": 23.1,
    "week03": 13.4,
    "week04": 19.1,
    "week05": 16.8,
    "week06": 6.7,
    "week07": 17.7,
    "week08": 8.3,
    "week09": "BYE",
    "week10": 14.7,
    "week11": 8.6,
    "week12": 6.2,
    "week13": 7.2,
    "week14": 26.0,
    "week15": 4.3,
    "week16": 12.7,
    "week17": 4.6,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.1, 23.1, 13.4, 19.1, 16.8, 6.7, 17.7, 8.3, 'BYE', 14.7, 8.6, 6.2, 7.2, 26.0, 4.3, 12.7, 4.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.4, 7.2, 8.8, 8.7, 14.7, 16.5, 16.6, 16.0, 'BYE', 12.2, 8.5, 12.9, 7.8, 6.7, 8.0, 5.1, 9.0, 8.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.0, 5.2, 7.2, 10.1, 8.3, 6.4, 6.5, 6.7, 'BYE', 7.2, 10.4, 5.6, 7.3, 7.0, 7.3, 5.8, 6.3, 5.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [20.0, 19.5, 27.5, 20.0, 22.7, 24.1, 24.5, 23.7, 'BYE', 24.6, 23.3, 23.8, 24.0, 23.1, 24.0, 22.3, 25.4, 24.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16777.png",
    "name": "Carlos Hyde",
    "depthchart": "Backup: RB-2",
    "team": "Seattle Seahawks",
    "projected": 8.2,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank_Neg": 3,
    "team_rank_Neu": 12,
    "avg_fp2": 7.69,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 17.1,
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
    "headlineNews": "Carlos Hyde rushed four times for five yards in the Seahawks' Wild Card loss to the Rams.\u00a0\n",
    "report": "",
    "analysis": "Hyde had No. 2 duties to himself after\u00a0Rashaad Penny was scratched with a knee injury, but the Seahawks could neither cook in the passing game nor establish the run. With touch totals all over the map as the Seahawks dealt with backfield injuries and shifting offensive philosophies, Hyde finished with 81 carries for 356 yards (4.4 YPC) and four scores across 10 games. He made only one start, a number that would have been higher had he not been injured at the same time as Chris Carson. Going on 30 and headed back to free agency, Hyde will once again hunt for reserve work on the open market. There will probably still be interest in what he brings between the tackles.\u00a0\n",
    "timestamp": "2021-01-10 02:37 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 8.3,
    "week02": 4.7,
    "week03": 2.8,
    "week04": "DNP",
    "week05": "DNP",
    "week06": "BYE",
    "week07": 15.1,
    "week08": "DNP",
    "week09": "DNP",
    "week10": "DNP",
    "week11": 16.5,
    "week12": 3.9,
    "week13": 2.6,
    "week14": 6.6,
    "week15": 13.3,
    "week16": 3.1,
    "week17": "DNP",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
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
                         data: [8.3, 4.7, 2.8, 'DNP', 'DNP', 'BYE', 15.1, 'DNP', 'DNP', 'DNP', 16.5, 3.9, 2.6, 6.6, 13.3, 3.1, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.0, 4.8, 6.2, 'DNP', 'DNP', 'BYE', 4.6, 'DNP', 'DNP', 'DNP', 10.6, 6.5, 6.3, 4.5, 6.2, 6.9, 'DNP', 8.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.6, 0.0, 3.8, 'DNP', 'DNP', 'BYE', 1.9, 'DNP', 'DNP', 'DNP', 3.5, 5.1, 2.5, 1.9, 1.8, 2.3, 'DNP', 2.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.3, 11.7, 17.4, 'DNP', 'DNP', 'BYE', 15.7, 'DNP', 'DNP', 'DNP', 17.2, 16.5, 15.6, 15.3, 14.0, 14.7, 'DNP', 16.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3916430.png",
    "name": "Nyheim Hines",
    "depthchart": "Backup: RB-2",
    "team": "Indianapolis Colts",
    "projected": 8.1,
    "opponent": "Buffalo Bills",
    "home_away": "at ",
    "opp_rank_Neu": 17,
    "team_rank_Neu": 11,
    "avg_fp2": 10.14,
    "opp_rank_allowed_fp2_Neu": 14,
    "opp_avg_allowed_fp2": 19.54,
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
    "headlineNews": "Nyheim Hines had six rushes for 75 yards in the Colts' Wild Card Weekend loss to the Bills, adding one catch for eight yards.\u00a0\n",
    "report": "",
    "analysis": "Hines seeing a meager three targets as the Colts chased points for the entire second half is a bit of a surprise, though he rarely dominated the passing down backfield role with Jonathan Taylor healthy. Hines, the third most targeted running back in the NFL this season, only played 36 percent of the Colts' offensive snaps in 2020, making him a fringe fantasy option for much of the year. Hines is signed through next season with Indy.\u00a0\n",
    "timestamp": "2021-01-09 10:36 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 23.3,
    "week02": 0.9,
    "week03": 8.1,
    "week04": 4.7,
    "week05": 4.0,
    "week06": 5.2,
    "week07": "BYE",
    "week08": 19.7,
    "week09": 4.8,
    "week10": 26.0,
    "week11": 6.8,
    "week12": 13.5,
    "week13": 10.7,
    "week14": 9.5,
    "week15": 6.4,
    "week16": 8.9,
    "week17": 9.7,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [23.3, 0.9, 8.1, 4.7, 4.0, 5.2, 'BYE', 19.7, 4.8, 26.0, 6.8, 13.5, 10.7, 9.5, 6.4, 8.9, 9.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.4, 12.4, 6.1, 9.5, 8.6, 7.3, 'BYE', 11.0, 4.1, 8.2, 7.4, 11.4, 9.3, 9.0, 11.5, 7.9, 9.8, 8.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.5, 3.0, 4.1, 3.6, 2.7, 1.8, 'BYE', 3.0, 2.5, 2.3, 1.6, 2.9, 2.6, 2.7, 3.0, 2.5, 2.8, 8.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.2, 9.5, 10.4, 11.5, 10.9, 10.9, 'BYE', 13.3, 9.2, 12.6, 13.4, 14.1, 13.4, 13.6, 11.9, 12.6, 13.5, 17.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4035676.png",
    "name": "Zack Moss",
    "depthchart": "Backup: RB-2",
    "team": "Buffalo Bills",
    "projected": 7.6,
    "opponent": "Indianapolis Colts",
    "home_away": "",
    "opp_rank_Neg": 2,
    "team_rank_Neu": 20,
    "avg_fp2": 7.28,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 18.89,
    "fanduelSalary": "$5500",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Ankle",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#005596",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 85, 150, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
    "headlineNews": "Zack Moss (ankle) could miss the remainder of the postseason.\u00a0\n",
    "report": "",
    "analysis": "Moss was carted off after suffering the ankle injury Saturday against the Colts. NFL Network's Mike Garafolo said there's some hope the rookie could return to the lineup if Buffalo makes a deep postseason run, but for now, Devin Singletary will be the Bills' primary ball carrier. Singletary still doesn't have much upside in the Bills' pass-first offense.\u00a0\n",
    "timestamp": "2021-01-10 12:04 AM",
    "source": "Mike Garafolo on Twitter",
    "game_day_logo": "",
    "week01": 10.2,
    "week02": 3.7,
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": 1.0,
    "week07": 8.7,
    "week08": 20.1,
    "week09": 11.8,
    "week10": 2.2,
    "week11": "BYE",
    "week12": 7.8,
    "week13": 1.9,
    "week14": 4.3,
    "week15": 8.1,
    "week16": 12.2,
    "week17": 2.6,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
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
                         data: [10.2, 3.7, 'DNP', 'DNP', 'DNP', 1.0, 8.7, 20.1, 11.8, 2.2, 'BYE', 7.8, 1.9, 4.3, 8.1, 12.2, 2.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.0, 3.9, 'DNP', 'DNP', 'DNP', 7.8, 7.5, 4.5, 8.4, 12.0, 'BYE', 17.5, 11.2, 4.9, 13.3, 4.1, 5.5, 7.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 4.4, 'DNP', 'DNP', 'DNP', 2.4, 0.0, 1.7, 7.7, 6.0, 'BYE', 2.0, 1.7, 1.8, 1.3, 1.3, 2.6, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.2, 13.4, 'DNP', 'DNP', 'DNP', 11.4, 12.0, 9.4, 14.0, 11.9, 'BYE', 11.0, 15.4, 9.3, 9.5, 6.2, 14.4, 12.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15920.png",
    "name": "Latavius Murray",
    "depthchart": "Backup: RB-2",
    "team": "New Orleans Saints",
    "projected": 7.5,
    "opponent": "Chicago Bears",
    "home_away": "",
    "opp_rank_Neu": 15,
    "team_rank_Pos": 6,
    "avg_fp2": 8.31,
    "opp_rank_allowed_fp2_Neu": 9,
    "opp_avg_allowed_fp2": 18.43,
    "fanduelSalary": "$5400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9b845c",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(155, 132, 92, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#9b845c",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
    "headlineNews": "Ty Montgomery played 69 percent of the Saints' offensive snaps and saw 60 percent of the team's rushing attempts in Week 17 against the Panthers.\u00a0\n",
    "report": "",
    "analysis": "It was workhorse-like usage for Montgomery with Alvin Kamara and Latavius Murray on the reserve/COVID-19 list. Kamara and Murray could return to the lineup for Sunday's Wild Card game against the Bears. If they can't, expect another heavy workload for Montgomery, who also saw two targets in the Saints' Week 17 blowout win over Carolina.\u00a0\n",
    "timestamp": "2021-01-04 02:49 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 4.8,
    "week02": 4.3,
    "week03": 7.0,
    "week04": 20.8,
    "week05": 6.7,
    "week06": "BYE",
    "week07": 6.1,
    "week08": 4.6,
    "week09": 5.2,
    "week10": 5.7,
    "week11": 9.5,
    "week12": 25.1,
    "week13": 2.7,
    "week14": 1.2,
    "week15": 9.9,
    "week16": 11.1,
    "week17": "DNP",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
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
                         data: [4.8, 4.3, 7.0, 20.8, 6.7, 'BYE', 6.1, 4.6, 5.2, 5.7, 9.5, 25.1, 2.7, 1.2, 9.9, 11.1, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.1, 5.2, 5.4, 4.2, 7.7, 'BYE', 7.4, 6.5, 6.0, 8.1, 4.6, 7.3, 5.6, 8.3, 7.2, 8.9, 'DNP', 7.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.7, 1.4, 1.8, 1.7, 1.8, 'BYE', 1.0, 0.0, 1.8, 0.5, 8.2, 1.5, 8.4, 1.6, 1.4, 0.5, 'DNP', 1.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(155, 132, 92, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.1, 16.6, 16.9, 16.0, 16.3, 'BYE', 13.5, 17.3, 16.0, 13.0, 19.0, 15.1, 21.2, 16.9, 16.2, 14.0, 'DNP', 16.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3051902.png",
    "name": "Peyton Barber",
    "depthchart": "Reserve: RB-3",
    "team": "Washington Football Team",
    "projected": 6.9,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "",
    "opp_rank_Neg": 1,
    "team_rank_Neg": 26,
    "avg_fp2": 3.31,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 16.26,
    "fanduelSalary": "$4700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#773141",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(119, 49, 65, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png",
    "headlineNews": "Peyton Barber didn't receive a carry in Washington's Wild Card loss to the Buccaneers.\n",
    "report": "",
    "analysis": "Barber was phased out of the offense after a brutal 17-carry, 29-yard game in Week 1. Antonio Gibson is Washington's running back of the future, making Barber a potential cut candidate this offseason. Barber's 2.7 yards per carry average on 94 carries from 2020 could end his run in the NFL. He's been held to\u00a0under 4.0 yards per carry\u00a0in each season since 2016.\n",
    "timestamp": "2021-01-10 05:49 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 14.9,
    "week02": 0.1,
    "week03": 0.6,
    "week04": 0.5,
    "week05": 0.0,
    "week06": 1.5,
    "week07": 3.4,
    "week08": "BYE",
    "week09": 0.0,
    "week10": 1.9,
    "week11": 2.8,
    "week12": 5.7,
    "week13": 8.3,
    "week14": 4.8,
    "week15": 6.5,
    "week16": 1.0,
    "week17": 1.0,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.9, 0.1, 0.6, 0.5, 0.0, 1.5, 3.4, 'BYE', 0.0, 1.9, 2.8, 5.7, 8.3, 4.8, 6.5, 1.0, 1.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.8, 12.9, 3.9, 1.5, 1.6, 2.0, 3.3, 'BYE', 3.3, 5.4, 2.6, 3.3, 2.1, 4.6, 7.1, 2.6, 2.4, 6.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.6, 3.5, 0.6, 0.2, 2.8, 0.0, 4.3, 'BYE', 1.0, 0.2, 0.3, 0.3, 0.3, 0.9, 0.1, 0.0, 0.3, 0.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.9, 15.0, 10.3, 11.9, 13.7, 9.9, 12.7, 'BYE', 10.6, 11.1, 11.3, 9.6, 9.7, 9.8, 10.4, 10.8, 9.8, 11.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3051926.png",
    "name": "Gus Edwards",
    "depthchart": "Backup: RB-2",
    "team": "Baltimore Ravens",
    "projected": 6.8,
    "opponent": "Tennessee Titans",
    "home_away": "at ",
    "opp_rank_Neu": 20,
    "team_rank_Pos": 1,
    "avg_fp2": 7.73,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 23.13,
    "fanduelSalary": "$5700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9E7C0C",
    "tmColorDark": "#241773",
    "tmColorLite_rgba": "rgba(158, 124, 12, 0.2)",
    "tmColorDark_rgba": "rgba(36, 23, 115, 0.2)",
    "tmTextLite": "#9E7C0C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png",
    "headlineNews": "Gus Edwards had 12 rushes for 60 yards in the Ravens' Week 17 win against the Bengals, adding one catch for ten yards.\u00a0\n",
    "report": "",
    "analysis": "Edwards' 12 carries were just one fewer than J.K. Dobbins, though it was the rookie that ripped the Bengals defense for 160 yards and two scores. Edwards continues to get a solid snap share and sometimes threatens Dobbins as the team's primary goal line option, but he's clearly the No. 2 back headed into the postseason.\u00a0\n",
    "timestamp": "2021-01-03 10:04 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 1.7,
    "week02": 7.3,
    "week03": 3.9,
    "week04": 3.8,
    "week05": 2.5,
    "week06": 8.6,
    "week07": "BYE",
    "week08": 14.7,
    "week09": 8.4,
    "week10": 7.8,
    "week11": 0.6,
    "week12": 7.0,
    "week13": 10.1,
    "week14": 17.8,
    "week15": 8.8,
    "week16": 13.2,
    "week17": 7.5,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.7, 7.3, 3.9, 3.8, 2.5, 8.6, 'BYE', 14.7, 8.4, 7.8, 0.6, 7.0, 10.1, 17.8, 8.8, 13.2, 7.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.3, 1.4, 5.8, 4.0, 5.0, 2.9, 'BYE', 7.3, 4.3, 4.7, 5.5, 6.8, 3.6, 4.0, 7.8, 5.7, 7.2, 6.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.8, 7.2, 2.5, 2.1, 0.8, 4.3, 'BYE', 5.9, 2.5, 1.9, 2.7, 1.7, 2.0, 1.8, 1.8, 1.3, 2.3, 2.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.7, 15.3, 8.5, 11.5, 12.4, 11.0, 'BYE', 12.1, 11.3, 10.9, 11.3, 9.9, 12.0, 9.7, 10.8, 10.7, 11.8, 10.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3046409.png",
    "name": "Alex Collins",
    "depthchart": "Reserve: RB-3",
    "team": "Seattle Seahawks",
    "projected": 6.7,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank_Neg": 3,
    "team_rank_Neu": 12,
    "avg_fp2": 10.05,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 17.1,
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
    "headlineNews": "Carlos Hyde, DeeJay Dallas, and Bo Scarbrough will be the Seahawks' active running backs on Thursday night against the Cardinals.\u00a0\n",
    "report": "",
    "analysis": "Hyde, recovered from his hamstring injury, should serve as the lead back against Arizona. He should be treated as a mid-range RB2, with Dallas only viable in deep PPR formats. Dallas played 33 percent of Seattle's Week 10 snaps and saw three targets. The team did not call up Alex Collins from the practice squad.\u00a0\n",
    "timestamp": "2020-11-19 10:14 PM",
    "source": "Joe Fann on Twitter ",
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "BYE",
    "week07": "DNP",
    "week08": "DNP",
    "week09": "DNP",
    "week10": 11.2,
    "week11": "DNP",
    "week12": "DNP",
    "week13": "DNP",
    "week14": "DNP",
    "week15": "DNP",
    "week16": "DNP",
    "week17": 8.9,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
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
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 11.2, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 8.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 5.3, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 3.4, 6.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 3.1, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 3.4, 3.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 15.9, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 12.8, 15.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3912550.png",
    "name": "Ronald Jones",
    "depthchart": "Starter: RB-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 6.7,
    "opponent": "Washington Football Team",
    "home_away": "at ",
    "opp_rank_Neu": 13,
    "team_rank_Neg": 28,
    "avg_fp2": 12.31,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 16.0,
    "fanduelSalary": "$6700",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Quadriceps",
    "tmColorLite": "#D50A0A",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(213, 10, 10, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#D50A0A",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Ronald Jones (quad) is questionable to return to the Bucs' Wild Card game against Washington.\n",
    "report": "",
    "analysis": "Jones wasn't on the Bucs' final injury report\u00a0and\u00a0is\u00a0active for the game, but he hasn't played a snap through the first quarter. The only explanation is that Jones suffered an injury in pre-game warmups. It's a mystery to us and all those who rostered Jones in playoff formats. The Bucs will continue to utilize Leonard Fournette in a bellcow role with Ke'Shawn Vaughn occasionally mixing in. LeSean McCoy is out.\n",
    "timestamp": "2021-01-10 01:52 AM",
    "source": "Scott Smith on Twitter",
    "game_day_logo": "",
    "week01": 9.2,
    "week02": 9.7,
    "week03": 8.3,
    "week04": 15.8,
    "week05": 14.0,
    "week06": 25.1,
    "week07": 10.1,
    "week08": 4.6,
    "week09": 3.3,
    "week10": 24.3,
    "week11": 2.4,
    "week12": 16.8,
    "week13": "BYE",
    "week14": 14.9,
    "week15": "DNP",
    "week16": "DNP",
    "week17": 13.8,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.2, 9.7, 8.3, 15.8, 14.0, 25.1, 10.1, 4.6, 3.3, 24.3, 2.4, 16.8, 'BYE', 14.9, 'DNP', 'DNP', 13.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.4, 15.3, 15.0, 12.1, 8.6, 16.6, 13.4, 14.6, 11.7, 16.3, 14.2, 12.9, 'BYE', 14.7, 'DNP', 'DNP', 12.2, 6.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.2, 2.0, 2.0, 2.9, 1.6, 3.0, 2.5, 3.5, 3.6, 3.1, 0.5, 0.4, 'BYE', 6.3, 'DNP', 'DNP', 4.2, 1.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(213, 10, 10, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.9, 9.1, 13.6, 11.4, 10.9, 12.6, 12.9, 15.7, 16.0, 16.3, 10.8, 9.7, 'BYE', 18.6, 'DNP', 'DNP', 15.9, 11.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3115364.png",
    "name": "Leonard Fournette",
    "depthchart": "Backup: RB-2",
    "team": "Tampa Bay Buccaneers",
    "projected": 5.3,
    "opponent": "Washington Football Team",
    "home_away": "at ",
    "opp_rank_Neu": 13,
    "team_rank_Neg": 28,
    "avg_fp2": 8.77,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 16.0,
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
    "headlineNews": "Leonard Fournette rushed 19 times for 93 yards and one touchdown in the Bucs' Wild Card win over Washington.\n",
    "report": "",
    "analysis": "Fournette wasn't expected to start, but Ronald Jones suffered a setback during pre-game warmups. Fournette ended up\u00a0playing\u00a0most of the game, which led to a goal-line plunge and 39 receiving yards on four targets. It's unclear if Jones' setback was severe or if he'll return next weekend. When Jones has been healthy, Fournette has mostly been utilized as a third-down back. It's possible that today's performance earned him more looks even when Jones returns.\n",
    "timestamp": "2021-01-10 04:52 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 2.4,
    "week02": 25.6,
    "week03": 3.2,
    "week04": "DNP",
    "week05": 0.0,
    "week06": "DNP",
    "week07": 12.7,
    "week08": 8.6,
    "week09": 7.1,
    "week10": 4.0,
    "week11": 9.1,
    "week12": 3.5,
    "week13": "BYE",
    "week14": "DNP",
    "week15": 20.0,
    "week16": 14.1,
    "week17": 3.7,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.4, 25.6, 3.2, 'DNP', 0.0, 'DNP', 12.7, 8.6, 7.1, 4.0, 9.1, 3.5, 'BYE', 'DNP', 20.0, 14.1, 3.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.7, 6.9, 11.8, 'DNP', 6.7, 'DNP', 6.2, 6.9, 9.2, 12.4, 7.9, 9.9, 'BYE', 'DNP', 12.6, 12.0, 9.4, 5.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [9.2, 7.8, 7.1, 'DNP', 6.3, 'DNP', 5.7, 6.5, 6.0, 6.6, 6.3, 5.0, 'BYE', 'DNP', 5.3, 4.4, 5.4, 6.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(213, 10, 10, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.2, 19.9, 23.2, 'DNP', 19.4, 'DNP', 20.5, 19.7, 19.8, 20.5, 22.4, 21.0, 'BYE', 'DNP', 19.5, 21.0, 22.6, 23.5]
                    }
                    
                    ]
               }
            }];




$scope.positionWR = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2976212.png",
    "name": "Stefon Diggs",
    "depthchart": "Starter: WR-1",
    "team": "Buffalo Bills",
    "projected": 16.1,
    "opponent": "Indianapolis Colts",
    "home_away": "",
    "opp_rank_Neu": 20,
    "team_rank_Pos": 2,
    "avg_fp2": 16.57,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 31.36,
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
    "headlineNews": "Stefon Diggs caught 6-of-9 targets for 128 yards and a touchdown in the Bills' Wild Card Weekend win over the Colts.\u00a0\n",
    "report": "",
    "analysis": "Quiet in the first half, Diggs went off in the second half against a suspect Indianapolis secondary that had given up splash plays to Gabriel Davis early in the game. Diggs, who led the Bills in targets, receiving yards, and catches,\u00a0capped his day with a 36-yard touchdown grab. If Josh Allen posts a big stat line -- he threw for 324 yards and two touchdowns in this one -- Diggs will almost certainly have a day. Buffalo's elite passing attack will continue to run through Diggs in the Divisional Round.\u00a0\n",
    "timestamp": "2021-01-09 10:03 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 12.6,
    "week02": 25.3,
    "week03": 12.9,
    "week04": 14.5,
    "week05": 15.6,
    "week06": 13.6,
    "week07": 7.8,
    "week08": 12.2,
    "week09": 16.3,
    "week10": 20.3,
    "week11": "BYE",
    "week12": 7.4,
    "week13": 14.2,
    "week14": 24.1,
    "week15": 20.2,
    "week16": 37.0,
    "week17": 11.1,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
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
                         data: [12.6, 25.3, 12.9, 14.5, 15.6, 13.6, 7.8, 12.2, 16.3, 20.3, 'BYE', 7.4, 14.2, 24.1, 20.2, 37.0, 11.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.0, 12.8, 13.1, 19.6, 14.5, 11.4, 12.2, 11.2, 18.1, 14.1, 'BYE', 14.9, 9.7, 13.9, 12.9, 11.8, 19.9, 16.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.5, 5.0, 3.9, 5.1, 3.9, 3.6, 5.6, 5.6, 4.6, 4.6, 'BYE', 4.6, 5.0, 5.0, 7.7, 5.8, 7.2, 5.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.1, 20.6, 19.2, 22.0, 19.6, 20.2, 19.2, 17.9, 18.6, 19.0, 'BYE', 19.9, 18.9, 19.2, 20.8, 20.5, 22.6, 20.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4241372.png",
    "name": "Marquise Brown",
    "depthchart": "Starter: WR-1",
    "team": "Baltimore Ravens",
    "projected": 15.4,
    "opponent": "Tennessee Titans",
    "home_away": "at ",
    "opp_rank_Pos": 29,
    "team_rank_Neg": 32,
    "avg_fp2": 9.62,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 35.62,
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
    "headlineNews": "Marquise Brown caught 5-of-8\u00a0targets for 41 yards and two touchdowns in the Ravens' Week 17 win against the Bengals.\u00a0\n",
    "report": "",
    "analysis": "Brown's day could've been even better had he not dropped a deep shot from Lamar Jackson in the first quarter. Brown has had a late-season resurgence that happens to coincide with Willie Snead being out of the Ravens' lineup. Snead was out again against the Bengals and Brown thrived as the team's top receiving option. \"Hollywood\" will look to continue his hot streak in the first round of the playoffs.\u00a0\n",
    "timestamp": "2021-01-03 09:00 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 12.6,
    "week02": 6.7,
    "week03": 2.3,
    "week04": 10.6,
    "week05": 16.8,
    "week06": 7.7,
    "week07": "BYE",
    "week08": 6.8,
    "week09": 5.3,
    "week10": 2.4,
    "week11": 0.0,
    "week12": 16.5,
    "week13": 12.4,
    "week14": 12.0,
    "week15": 12.8,
    "week16": 10.5,
    "week17": 18.6,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.6, 6.7, 2.3, 10.6, 16.8, 7.7, 'BYE', 6.8, 5.3, 2.4, 0.0, 16.5, 12.4, 12.0, 12.8, 10.5, 18.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.1, 15.7, 11.8, 7.1, 7.0, 11.1, 'BYE', 8.7, 10.7, 10.8, 12.9, 6.8, 7.0, 15.5, 8.6, 11.6, 12.7, 15.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.7, 2.6, 10.0, 1.8, 4.0, 8.9, 'BYE', 0.2, 4.0, 1.1, 2.8, 1.0, 4.1, 3.4, 7.2, 7.1, 3.0, 1.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.8, 18.3, 20.8, 18.2, 14.7, 20.2, 'BYE', 15.2, 17.9, 15.5, 16.9, 12.9, 18.1, 14.5, 16.9, 17.4, 13.3, 14.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4047646.png",
    "name": "A.J. Brown",
    "depthchart": "Starter: WR-1",
    "team": "Tennessee Titans",
    "projected": 13.2,
    "opponent": "Baltimore Ravens",
    "home_away": "",
    "opp_rank_Neg": 6,
    "team_rank_Neu": 23,
    "avg_fp2": 15.16,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 26.53,
    "fanduelSalary": "$8400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#4495D1",
    "tmColorDark": "#002A5C",
    "tmColorLite_rgba": "rgba(68, 149, 209, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 92, 0.2)",
    "tmTextLite": "#4495D1",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png",
    "headlineNews": "A.J. Brown (ankle) will play in the Wild Card game against the Ravens.\n",
    "report": "",
    "analysis": "Brown wasn't available for Thursday's and Friday's practices but will still enter Sunday without an injury designation on the final injury report. He himself was adamant he'd play as long as he \"has breath in my body.\" Fantasy players should move forward with their initial approach to postseason lineups given Brown's non-existent status.\n",
    "timestamp": "2021-01-08 09:17 PM",
    "source": "Turron Davenport on Twitter",
    "game_day_logo": "",
    "week01": 6.4,
    "week02": "DNP",
    "week03": "DNP",
    "week04": "BYE",
    "week05": 17.7,
    "week06": 20.1,
    "week07": 24.3,
    "week08": 10.4,
    "week09": 18.1,
    "week10": 2.6,
    "week11": 14.2,
    "week12": 23.8,
    "week13": 8.7,
    "week14": 20.7,
    "week15": 12.9,
    "week16": 6.3,
    "week17": 26.1,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
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
                         data: [6.4, 'DNP', 'DNP', 'BYE', 17.7, 20.1, 24.3, 10.4, 18.1, 2.6, 14.2, 23.8, 8.7, 20.7, 12.9, 6.3, 26.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.6, 'DNP', 'DNP', 'BYE', 13.1, 15.0, 17.7, 18.5, 12.4, 13.7, 14.8, 13.5, 13.4, 19.9, 14.7, 15.9, 19.8, 13.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 'DNP', 'DNP', 'BYE', 2.1, 2.2, 6.7, 4.9, 4.0, 2.6, 2.7, 1.9, 7.5, 4.8, 4.5, 4.7, 6.5, 5.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.7, 'DNP', 'DNP', 'BYE', 15.2, 21.0, 22.1, 22.0, 22.3, 21.9, 21.8, 20.3, 23.3, 20.9, 21.4, 20.2, 21.4, 21.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4047650.png",
    "name": "D.K. Metcalf",
    "depthchart": "Starter: WR-1",
    "team": "Seattle Seahawks",
    "projected": 13.1,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank_Neg": 1,
    "team_rank_Neu": 16,
    "avg_fp2": 14.36,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 22.14,
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
    "headlineNews": "DK Metcalf caught 5-of-11 targets for 96 yards and two touchdowns in the Seahawks' Wild Card loss to the Rams.\u00a0\n",
    "report": "",
    "analysis": "Metcalf was the only Seahawk to clear 50 yards receiving in a breathtakingly\u00a0awful offensive effort. He was also the intended target on a screen that ended up a 42-yard Darious Williams pick six. Metcalf's first score was a 51-yarder on a broken play. He was not in Jalen Ramsey's coverage. The second was a 12-yarder where Metcalf was quicker than Ramsey near the goal line. As was the case with the Seahawks' entire offense, Metcalf's production plummeted in the second half of the season. He went 68/788/8 in games 1-8 compared to 40/515/2 for 9-16. The latter is still a strong pace, of course, but not compared to Metcalf's All-Pro first half. As it is, his 1,303 yards were seventh in the league. His 10 scores, tied for eighth with teammate Tyler Lockett. Uncontainable down the sideline, 6-foot-4 Metcalf is improving in the other areas of the field, too. He will deserve a top-five, and arguably top-three, receiver rank for 2021.\u00a0\n",
    "timestamp": "2021-01-10 01:49 AM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": 17.2,
    "week03": 17.0,
    "week04": 12.6,
    "week05": 24.3,
    "week06": "BYE",
    "week07": 3.3,
    "week08": 34.1,
    "week09": 20.3,
    "week10": 3.8,
    "week11": 12.1,
    "week12": 22.7,
    "week13": 10.5,
    "week14": 15.1,
    "week15": 6.8,
    "week16": 8.9,
    "week17": 3.6,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
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
                         data: ['DNP', 17.2, 17.0, 12.6, 24.3, 'BYE', 3.3, 34.1, 20.3, 3.8, 12.1, 22.7, 10.5, 15.1, 6.8, 8.9, 3.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 13.8, 12.5, 8.9, 12.2, 'BYE', 16.0, 11.5, 12.1, 12.9, 15.6, 15.9, 16.6, 18.1, 10.4, 11.6, 14.2, 13.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 3.9, 4.9, 1.7, 4.7, 'BYE', 8.2, 5.0, 7.9, 5.2, 5.1, 5.3, 4.8, 3.8, 5.1, 7.1, 4.1, 3.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 19.8, 15.8, 17.5, 16.8, 'BYE', 19.2, 17.8, 18.7, 23.5, 18.1, 22.2, 20.8, 17.0, 20.8, 21.9, 19.0, 18.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3932905.png",
    "name": "Diontae Johnson",
    "depthchart": "Starter: WR-1",
    "team": "Pittsburgh Steelers",
    "projected": 12.7,
    "opponent": "Cleveland Browns",
    "home_away": "",
    "opp_rank_Neu": 22,
    "team_rank_Neu": 15,
    "avg_fp2": 11.86,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 31.62,
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
    "headlineNews": "Diontae Johnson caught 3-of-4 receptions for 96 yards in the Steelers' Week 17 loss to the Browns.\u00a0\n",
    "report": "",
    "analysis": "With Mason Rudolph at the controls, one of Johnson's targets was a season-long 47-yard reception. He closes the book on the regular campaign with a sterling 88/923/7 line. It's surprising that Johnson emerged as one of the league's top compilers this season, though he enters the postseason as Pittsburgh's clear-cut No. 1 wideout. Also amongst the league's drop leaders, Johnson will need a clean performance for Pittsburgh's Browns rematch in the Wild Card Round.\u00a0\n",
    "timestamp": "2021-01-03 09:27 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 6.7,
    "week02": 19.2,
    "week03": 0.9,
    "week04": "BYE",
    "week05": 0.3,
    "week06": "DNP",
    "week07": 24.5,
    "week08": 1.1,
    "week09": 11.1,
    "week10": 20.6,
    "week11": 17.1,
    "week12": 8.6,
    "week13": 17.1,
    "week14": 6.0,
    "week15": 15.9,
    "week16": 17.7,
    "week17": 11.1,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.7, 19.2, 0.9, 'BYE', 0.3, 'DNP', 24.5, 1.1, 11.1, 20.6, 17.1, 8.6, 17.1, 6.0, 15.9, 17.7, 11.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.5, 10.5, 12.0, 'BYE', 10.8, 'DNP', 10.3, 10.8, 14.2, 9.0, 23.1, 11.6, 15.1, 14.0, 9.5, 11.9, 10.9, 12.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.0, 1.6, 6.7, 'BYE', 1.3, 'DNP', 0.6, 0.3, 1.0, 1.4, 1.8, 1.5, 2.4, 1.2, 2.2, 3.2, 2.4, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.1, 12.4, 19.5, 'BYE', 13.3, 'DNP', 11.8, 15.5, 16.1, 16.0, 18.0, 16.8, 17.3, 13.9, 16.6, 17.7, 17.4, 17.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2976316.png",
    "name": "Michael Thomas",
    "depthchart": "Starter: WR-1",
    "team": "New Orleans Saints",
    "projected": 12.5,
    "opponent": "Chicago Bears",
    "home_away": "",
    "opp_rank_Neu": 12,
    "team_rank_Neu": 19,
    "avg_fp2": 9.13,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 26.51,
    "fanduelSalary": "$6800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9b845c",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(155, 132, 92, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#9b845c",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
    "headlineNews": "Saints activated WR\u00a0Michael Thomas (ankle) from injured reserve.\u00a0\n",
    "report": "",
    "analysis": "Thomas returns after missing the minimum three games. Whether he is anywhere close to 100 percent healthy is another matter. Thomas enters the postseason having made just seven appearances in 2020, only 2.5 of which came with Drew Brees under center. Thomas will still be a premium DFS play for Sunday's three-game slate, but with so many variables, both his floor and ceiling are much lower than usual.\u00a0\n",
    "timestamp": "2021-01-09 09:47 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 3.2,
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "BYE",
    "week07": "DNP",
    "week08": "DNP",
    "week09": 7.6,
    "week10": 3.7,
    "week11": 14.9,
    "week12": 7.1,
    "week13": 15.0,
    "week14": 12.4,
    "week15": "DNP",
    "week16": "DNP",
    "week17": "DNP",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
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
                         data: [3.2, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 7.6, 3.7, 14.9, 7.1, 15.0, 12.4, 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.8, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 13.7, 18.1, 20.5, 11.0, 11.7, 11.1, 'DNP', 'DNP', 'DNP', 12.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [8.8, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 7.8, 7.7, 6.6, 7.6, 6.8, 8.1, 'DNP', 'DNP', 'DNP', 6.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(155, 132, 92, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [23.6, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 22.5, 23.1, 23.2, 22.8, 21.4, 22.5, 'DNP', 'DNP', 'DNP', 21.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4046692.png",
    "name": "Chase Claypool",
    "depthchart": "Backup: WR-2",
    "team": "Pittsburgh Steelers",
    "projected": 11.0,
    "opponent": "Cleveland Browns",
    "home_away": "",
    "opp_rank_Neu": 22,
    "team_rank_Neu": 15,
    "avg_fp2": 11.47,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 31.62,
    "fanduelSalary": "$6100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/pit.png",
    "headlineNews": "Chase Claypool caught 5-of-11 targets for 101 yards and a touchdown in the Steelers' Week 17 loss to the Browns.\u00a0\n",
    "report": "",
    "analysis": "There was a scary moment where Claypool tweaked his foot, but he was never announced with an injury. It will be something to monitor ahead of the playoffs. With the 5/101/1 performance \u2014 with Mason Rudolph at the controls \u2014 Claypool sets a new Steelers rookie record with 62 receptions. He also tied Pittsburgh's rookie touchdowns mark with nine. Those are quite the accomplishments considering the wideouts who have come through Pittsburgh this century. Snap counted for much of the stretch run, Claypool was re-unveiled over the past two weeks and had two encouraging efforts to show for it. He will be a real problem for the Browns in the sides' Wild Card rematch next weekend.\u00a0\n",
    "timestamp": "2021-01-03 09:59 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 5.7,
    "week02": 16.3,
    "week03": 2.9,
    "week04": "BYE",
    "week05": 39.1,
    "week06": 16.1,
    "week07": 0.0,
    "week08": 10.7,
    "week09": 11.3,
    "week10": 19.3,
    "week11": 13.9,
    "week12": 8.2,
    "week13": 4.8,
    "week14": 3.0,
    "week15": 6.3,
    "week16": 7.4,
    "week17": 18.6,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.7, 16.3, 2.9, 'BYE', 39.1, 16.1, 0.0, 10.7, 11.3, 19.3, 13.9, 8.2, 4.8, 3.0, 6.3, 7.4, 18.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [0.1, 4.2, 4.9, 'BYE', 4.3, 10.8, 13.0, 10.2, 9.3, 5.6, 15.0, 10.1, 10.2, 13.0, 8.7, 11.3, 6.9, 11.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.1, 'BYE', 0.8, 3.2, 6.2, 0.0, 2.6, 0.0, 8.9, 2.5, 9.3, 3.1, 1.3, 5.4, 1.7, 3.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [6.5, 8.3, 7.1, 'BYE', 6.1, 14.1, 16.6, 13.4, 30.9, 27.1, 17.6, 16.6, 19.7, 24.2, 24.3, 18.0, 14.0, 15.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3120348.png",
    "name": "JuJu Smith-Schuster",
    "depthchart": "Reserve: WR-3",
    "team": "Pittsburgh Steelers",
    "projected": 11.0,
    "opponent": "Cleveland Browns",
    "home_away": "",
    "opp_rank_Neu": 22,
    "team_rank_Neu": 15,
    "avg_fp2": 11.6,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 31.62,
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
    "headlineNews": "JuJu\u00a0Smith-Schuster (knee) did not practice Thursday.\u00a0\n",
    "report": "",
    "analysis": "Smith-Schuster needs to get in a limited practice on Friday to have a reasonable shot to suit up for Sunday's playoff game against Cleveland. We'd expect him to be ready for the postseason tilt. If he were to be sidelined, Diontae Johnson and Chase Claypool could see a target bump. James Washington would likely play a bigger role in the Steelers' wideout rotation.\u00a0\n",
    "timestamp": "2021-01-07 08:25 PM",
    "source": "Adam Caplan on Twitter ",
    "game_day_logo": "",
    "week01": 21.9,
    "week02": 8.3,
    "week03": 14.3,
    "week04": "BYE",
    "week05": 4.8,
    "week06": 1.6,
    "week07": 13.0,
    "week08": 10.2,
    "week09": 18.3,
    "week10": 18.2,
    "week11": 3.9,
    "week12": 13.7,
    "week13": 6.3,
    "week14": 14.5,
    "week15": 1.0,
    "week16": 20.1,
    "week17": 15.5,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [21.9, 8.3, 14.3, 'BYE', 4.8, 1.6, 13.0, 10.2, 18.3, 18.2, 3.9, 13.7, 6.3, 14.5, 1.0, 20.1, 15.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.2, 17.5, 16.4, 'BYE', 15.1, 7.2, 9.6, 9.0, 10.5, 5.6, 11.5, 7.9, 9.6, 10.0, 6.8, 9.6, 8.4, 11.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.5, 3.5, 14.0, 'BYE', 4.9, 2.5, 2.1, 5.4, 4.3, 3.6, 5.7, 3.0, 4.6, 4.7, 4.8, 4.7, 4.7, 4.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.9, 20.7, 25.8, 'BYE', 19.7, 20.3, 19.2, 20.7, 18.8, 20.3, 20.2, 18.5, 19.9, 19.8, 18.7, 19.6, 17.5, 16.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16737.png",
    "name": "Mike Evans",
    "depthchart": "Starter: WR-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 10.8,
    "opponent": "Washington Football Team",
    "home_away": "at ",
    "opp_rank_Neg": 2,
    "team_rank_Pos": 3,
    "avg_fp2": 13.35,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 25.93,
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
    "headlineNews": "Mike Evans caught 6-of-10 targets for 119 yards in the Bucs' Wild Card win over Washington.\n",
    "report": "",
    "analysis": "Evans' Week 17 knee scare doesn't look to be overly serious. He avoided a setback in the Wild Card Round while leading the Bucs in receiving. Evans should be fully ready for next weekend. Right now, the Bucs are most likely to play the Saints in New Orleans. Expect Evans to do battle with CB Marshon Lattimore then. Historically, Lattimore has played extremely well against Evans.\n",
    "timestamp": "2021-01-10 05:12 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 6.7,
    "week02": 19.9,
    "week03": 13.2,
    "week04": 21.7,
    "week05": 12.6,
    "week06": 1.5,
    "week07": 4.7,
    "week08": 14.0,
    "week09": 8.4,
    "week10": 16.7,
    "week11": 13.4,
    "week12": 18.5,
    "week13": "BYE",
    "week14": 7.1,
    "week15": 14.0,
    "week16": 35.1,
    "week17": 6.1,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.7, 19.9, 13.2, 21.7, 12.6, 1.5, 4.7, 14.0, 8.4, 16.7, 13.4, 18.5, 'BYE', 7.1, 14.0, 35.1, 6.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.7, 18.0, 11.1, 7.8, 9.4, 13.0, 13.6, 15.2, 17.5, 8.7, 9.3, 14.6, 'BYE', 15.4, 9.8, 11.3, 13.8, 10.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.4, 5.4, 6.3, 7.0, 6.6, 5.6, 4.2, 5.9, 5.3, 4.5, 5.5, 5.1, 'BYE', 5.9, 5.6, 5.6, 6.5, 5.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(213, 10, 10, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.8, 22.8, 22.8, 22.3, 22.3, 22.3, 21.9, 21.9, 22.1, 21.5, 22.2, 21.1, 'BYE', 21.7, 21.3, 22.2, 21.3, 22.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14924.png",
    "name": "T.Y. Hilton",
    "depthchart": "Starter: WR-1",
    "team": "Indianapolis Colts",
    "projected": 10.3,
    "opponent": "Buffalo Bills",
    "home_away": "at ",
    "opp_rank_Neu": 13,
    "team_rank_Neu": 11,
    "avg_fp2": 9.08,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 26.61,
    "fanduelSalary": "$6200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#014683",
    "tmColorDark": "#002C5F",
    "tmColorLite_rgba": "rgba(1, 70, 131, 0.2)",
    "tmColorDark_rgba": "rgba(0, 44, 95, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png",
    "headlineNews": "T.Y. Hilton caught 2-of-5\u00a0targets for 32 yards in the Colts' Wild Card Weekend loss to the Bills.\u00a0\n",
    "report": "",
    "analysis": "Hilton was involved early before Philip Rivers attacked Buffalo's defense via the tight end. Hilton's five targets were tied for third most among Colts pass catchers. The veteran led the team with a 19 percent target share this season despite a slow start that made him nearly unplayable in all fantasy formats. He finished on an upswing of sorts, corralling 24 catches over this final five games. Hilton, no longer the downfield burner he was in his prime, is an unrestricted free agent next season. The 31-year-old could be a solid second or third receiver in an offense with younger, more explosive wideouts.\u00a0\n",
    "timestamp": "2021-01-09 10:57 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 7.3,
    "week02": 4.3,
    "week03": 6.7,
    "week04": 4.4,
    "week05": 9.9,
    "week06": 1.6,
    "week07": "BYE",
    "week08": 1.9,
    "week09": "DNP",
    "week10": 6.0,
    "week11": 5.1,
    "week12": 16.1,
    "week13": 21.0,
    "week14": 23.1,
    "week15": 9.1,
    "week16": 7.5,
    "week17": 12.2,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.3, 4.3, 6.7, 4.4, 9.9, 1.6, 'BYE', 1.9, 'DNP', 6.0, 5.1, 16.1, 21.0, 23.1, 9.1, 7.5, 12.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.0, 23.8, 9.5, 11.1, 16.1, 12.9, 'BYE', 10.6, 'DNP', 15.8, 13.2, 8.4, 9.2, 12.7, 18.3, 11.9, 15.3, 10.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.2, 5.1, 5.1, 5.1, 4.0, 2.9, 'BYE', 2.9, 'DNP', 2.3, 3.0, 3.6, 0.9, 4.8, 3.9, 3.8, 3.9, 3.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.4, 22.3, 19.2, 21.7, 19.7, 19.1, 'BYE', 20.4, 'DNP', 20.1, 20.4, 19.9, 23.2, 22.4, 21.0, 22.2, 19.4, 19.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16804.png",
    "name": "John Brown",
    "depthchart": "Backup: WR-2",
    "team": "Buffalo Bills",
    "projected": 10.3,
    "opponent": "Indianapolis Colts",
    "home_away": "",
    "opp_rank_Neu": 20,
    "team_rank_Pos": 2,
    "avg_fp2": 8.92,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 31.36,
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
    "headlineNews": "John Brown caught all four targets for 72 yards and a touchdown\u00a0in Buffalo's Week 17 win over the Dolphins\n",
    "report": "",
    "analysis": "Brown missed stretches of the season with an ankle injury, giving us nightmares of his time in Arizona where he consistently showed promise but faced untimely injury after untimely injury. His return is extremely timely with Cole Beasley suffering a knee injury in Week 16. While that timeline is uncertain, the Bills can still do plenty of damage with Stefon Diggs, Brown, Gabriel Davis and Isaiah McKenzie catching Josh Allen lasers. After operating as the team's lead receiver in 2019, Brown contributed 33 catches for 458 yards and three touchdowns in the 2020 regular season.\n",
    "timestamp": "2021-01-03 10:41 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 16.0,
    "week02": 16.2,
    "week03": 0.0,
    "week04": 6.2,
    "week05": "DNP",
    "week06": 0.0,
    "week07": "DNP",
    "week08": 2.6,
    "week09": 13.9,
    "week10": 10.2,
    "week11": "BYE",
    "week12": "DNP",
    "week13": "DNP",
    "week14": "DNP",
    "week15": "DNP",
    "week16": "DNP",
    "week17": 15.2,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
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
                         data: [16.0, 16.2, 0.0, 6.2, 'DNP', 0.0, 'DNP', 2.6, 13.9, 10.2, 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 15.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.7, 9.7, 7.2, 10.8, 'DNP', 6.1, 'DNP', 6.9, 10.1, 8.6, 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 10.7, 10.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.0, 3.6, 3.6, 3.6, 'DNP', 3.2, 'DNP', 3.4, 2.7, 1.1, 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 3.2, 1.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.3, 14.7, 15.2, 17.6, 'DNP', 15.9, 'DNP', 15.5, 14.5, 14.5, 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 14.6, 14.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3121422.png",
    "name": "Terry McLaurin",
    "depthchart": "Starter: WR-1",
    "team": "Washington Football Team",
    "projected": 10.2,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "",
    "opp_rank_Neu": 21,
    "team_rank_Neg": 25,
    "avg_fp2": 12.02,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 31.11,
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
    "headlineNews": "Terry McLaurin caught 6-of-10 targets for 75 yards in Washington's Wild Card loss to the Buccaneers.\n",
    "report": "",
    "analysis": "McLaurin turned 134 targets into an 87-1,118-4 receiving line in the 2020 regular season. He's exceeded all pre-draft expectations through two NFL seasons and profiles as Washington's alpha No. 1 receiver for the future. McLaurin was held back by awful quarterback play for the second-straight year, and Washington still doesn't have an answer heading into his third season. Because he's such a well-rounded talent, McLaurin's floor is stable as a fantasy WR2/3 even with uncertainty at quarterback. If Washington can bring in a capable signal caller this offseason, McLaurin has WR1 upside. The Football Team has the fifth-most cap space heading into free agency. Expect a quarterback and No. 2 receiver to be at the top of their wish list.\n",
    "timestamp": "2021-01-10 06:07 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 8.6,
    "week02": 22.0,
    "week03": 10.6,
    "week04": 16.8,
    "week05": 4.1,
    "week06": 10.9,
    "week07": 18.5,
    "week08": "BYE",
    "week09": 21.0,
    "week10": 13.7,
    "week11": 10.9,
    "week12": 12.7,
    "week13": 2.4,
    "week14": 3.4,
    "week15": 11.2,
    "week16": "DNP",
    "week17": 13.5,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.6, 22.0, 10.6, 16.8, 4.1, 10.9, 18.5, 'BYE', 21.0, 13.7, 10.9, 12.7, 2.4, 3.4, 11.2, 'DNP', 13.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.3, 9.4, 10.1, 8.9, 10.7, 9.7, 17.1, 'BYE', 11.1, 12.2, 14.0, 15.3, 13.5, 10.6, 13.7, 'DNP', 11.1, 10.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.0, 5.7, 11.3, 4.7, 3.5, 4.8, 5.4, 'BYE', 8.2, 4.8, 5.9, 5.1, 6.0, 4.2, 4.3, 'DNP', 4.2, 6.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.6, 19.7, 23.9, 17.9, 17.7, 17.9, 18.7, 'BYE', 18.1, 17.2, 20.0, 16.8, 19.1, 16.1, 16.2, 'DNP', 16.6, 19.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2577327.png",
    "name": "Tyler Lockett",
    "depthchart": "Backup: WR-2",
    "team": "Seattle Seahawks",
    "projected": 9.9,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank_Neg": 1,
    "team_rank_Neu": 16,
    "avg_fp2": 13.46,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 22.14,
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
    "headlineNews": "Tyler Lockett caught 2-of-4 targets for 43 yards in the Seahawks' Wild Card loss to the Rams.\u00a0\n",
    "report": "",
    "analysis": "The sub 50-yard effort was Lockett's third in four games to end the season. He averaged 51 yards in 10 contests after his 200-yard outburst against the Cardinals in Week 7, never once reaching 100. Usurped as the Seahawks' No. 1 wideout by DK Metcalf, it's also never quite clear if Lockett is 100 percent healthy. He doesn't miss games, but he always seems to be gutting through something. Headed into his age-29 campaign in 2021, Lockett has settled in as a WR2 with frustratingly few spiked weeks. 2021 is the final year of Lockett's contract, so perhaps an extension will be in order. He's due $9.8 million in a year where the coronavirus-affected 2020 campaign is expected to create salary cap headaches for teams.\u00a0\n",
    "timestamp": "2021-01-10 03:09 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 13.2,
    "week02": 16.2,
    "week03": 32.5,
    "week04": 4.9,
    "week05": 6.4,
    "week06": "BYE",
    "week07": 45.5,
    "week08": 5.3,
    "week09": 6.0,
    "week10": 9.1,
    "week11": 17.2,
    "week12": 3.8,
    "week13": 9.3,
    "week14": 7.7,
    "week15": 5.4,
    "week16": 5.9,
    "week17": 27.0,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
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
                         data: [13.2, 16.2, 32.5, 4.9, 6.4, 'BYE', 45.5, 5.3, 6.0, 9.1, 17.2, 3.8, 9.3, 7.7, 5.4, 5.9, 27.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.6, 7.5, 11.9, 11.0, 13.0, 'BYE', 8.5, 7.5, 9.2, 7.4, 10.6, 11.1, 9.8, 11.4, 7.2, 8.1, 9.8, 9.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.0, 1.5, 2.0, 4.7, 4.6, 'BYE', 1.2, 3.1, 2.0, 6.4, 6.0, 6.6, 2.7, 2.4, 2.4, 1.3, 1.7, 2.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.9, 15.7, 14.3, 18.6, 19.7, 'BYE', 14.7, 21.2, 15.1, 23.3, 23.0, 22.9, 16.1, 15.5, 17.6, 17.5, 17.0, 17.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16799.png",
    "name": "Allen Robinson",
    "depthchart": "Starter: WR-1",
    "team": "Chicago Bears",
    "projected": 9.7,
    "opponent": "New Orleans Saints",
    "home_away": "at ",
    "opp_rank_Neg": 5,
    "team_rank_Neu": 22,
    "avg_fp2": 13.24,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 30.31,
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
    "headlineNews": "Allen Robinson (hamstring) was held out of Thursday's practice.\u00a0\n",
    "report": "",
    "analysis": "This has been Robinson's recent routine. He will be out there against the Saints' tough defense, one he got for 6/87/1 in early November. The Saints were middle of the road in terms of wide receiver fantasy points surrendered during the regular season.\u00a0\n",
    "timestamp": "2021-01-07 09:17 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 9.8,
    "week02": 4.8,
    "week03": 23.3,
    "week04": 19.6,
    "week05": 14.0,
    "week06": 7.8,
    "week07": 9.0,
    "week08": 17.7,
    "week09": 11.6,
    "week10": 7.3,
    "week11": "BYE",
    "week12": 23.4,
    "week13": 10.5,
    "week14": 22.8,
    "week15": 10.3,
    "week16": 15.3,
    "week17": 4.7,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.8, 4.8, 23.3, 19.6, 14.0, 7.8, 9.0, 17.7, 11.6, 7.3, 'BYE', 23.4, 10.5, 22.8, 10.3, 15.3, 4.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.0, 14.7, 11.3, 15.5, 12.8, 11.0, 10.7, 11.3, 15.4, 14.3, 'BYE', 10.3, 13.3, 14.4, 14.9, 12.7, 11.1, 9.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.5, 3.8, 2.3, 5.9, 3.5, 5.1, 2.3, 5.0, 3.9, 4.7, 'BYE', 4.2, 6.0, 4.8, 5.7, 5.3, 4.8, 5.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  "rgba(195, 104, 53, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.4, 19.0, 15.3, 20.3, 20.5, 18.5, 17.4, 18.7, 19.3, 19.1, 'BYE', 19.1, 20.8, 17.7, 21.0, 19.0, 19.6, 19.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15349.png",
    "name": "Cole Beasley",
    "depthchart": "Reserve: WR-3",
    "team": "Buffalo Bills",
    "projected": 9.4,
    "opponent": "Indianapolis Colts",
    "home_away": "",
    "opp_rank_Neu": 20,
    "team_rank_Pos": 2,
    "avg_fp2": 11.1,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 31.36,
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
    "headlineNews": "Cole\u00a0Beasley caught 7-of-7 targets for 57 yards in the Bills' Wild Card Weekend win against the Colts.\u00a0\n",
    "report": "",
    "analysis": "Beasley, who missed Week 17 with a knee issue, came into the game with a questionable tag. He played a full complement of snaps, sometimes hobbling after a catch while serving as Josh Allen's primary underneath option. From a fantasy standpoint, Beasley is a safe PPR floor option in Buffalo's high-volume passing attack.\u00a0\n",
    "timestamp": "2021-01-09 10:22 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 7.8,
    "week02": 9.5,
    "week03": 13.0,
    "week04": 10.7,
    "week05": 8.3,
    "week06": 12.5,
    "week07": 16.7,
    "week08": 3.4,
    "week09": 5.4,
    "week10": 22.4,
    "week11": "BYE",
    "week12": 8.3,
    "week13": 23.5,
    "week14": 6.6,
    "week15": 15.2,
    "week16": 3.2,
    "week17": "DNP",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
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
                         data: [7.8, 9.5, 13.0, 10.7, 8.3, 12.5, 16.7, 3.4, 5.4, 22.4, 'BYE', 8.3, 23.5, 6.6, 15.2, 3.2, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.8, 5.1, 4.2, 7.1, 5.6, 2.9, 4.4, 5.5, 7.6, 5.4, 'BYE', 6.6, 4.5, 6.5, 6.6, 6.1, 'DNP', 9.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.0, 1.4, 0.5, 1.8, 1.1, 0.9, 1.2, 3.3, 1.4, 0.9, 'BYE', 2.7, 1.9, 1.6, 1.6, 1.7, 'DNP', 1.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.2, 11.7, 11.2, 11.3, 12.7, 12.1, 12.3, 14.6, 12.7, 12.1, 'BYE', 12.7, 11.8, 14.1, 12.8, 14.4, 'DNP', 13.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15880.png",
    "name": "Robert Woods",
    "depthchart": "Starter: WR-1",
    "team": "Los Angeles Rams",
    "projected": 9.3,
    "opponent": "Seattle Seahawks",
    "home_away": "at ",
    "opp_rank_Pos": 31,
    "team_rank_Neu": 13,
    "avg_fp2": 12.5,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 34.38,
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
    "headlineNews": "Robert Woods caught 4-of-8 targets for 48 yards and a touchdown in the Rams' Wild Card win over the Seahawks.\u00a0\n",
    "report": "",
    "analysis": "Woods was left uncovered on his dagger 15-yard score with 4:46 remaining. The Rams' passing attack, which was just 12-of-25 this afternoon, is going to be needed for much more in the Divisional Round, likely vs. Jaire Alexander's Packers. Woods could also be in for a massive target spike if Cooper Kupp (knee) can't go. As of Saturday evening, it seems like Kupp will play.\u00a0\n",
    "timestamp": "2021-01-10 02:58 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 14.9,
    "week02": 10.3,
    "week03": 18.9,
    "week04": 6.7,
    "week05": 15.1,
    "week06": 12.0,
    "week07": 4.0,
    "week08": 24.9,
    "week09": "BYE",
    "week10": 6.1,
    "week11": 24.6,
    "week12": 12.3,
    "week13": 13.5,
    "week14": 5.6,
    "week15": 18.6,
    "week16": 6.9,
    "week17": 5.6,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.9, 10.3, 18.9, 6.7, 15.1, 12.0, 4.0, 24.9, 'BYE', 6.1, 24.6, 12.3, 13.5, 5.6, 18.6, 6.9, 5.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.7, 14.7, 8.8, 11.2, 10.6, 11.7, 10.7, 8.2, 'BYE', 13.3, 9.9, 12.1, 12.5, 7.6, 14.4, 10.9, 9.1, 9.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.6, 5.8, 2.3, 3.0, 6.4, 3.4, 3.7, 3.5, 'BYE', 5.1, 3.1, 4.2, 3.4, 3.0, 3.6, 3.2, 7.1, 10.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.4, 15.5, 19.2, 17.5, 18.4, 16.9, 15.6, 15.6, 'BYE', 18.3, 16.4, 16.3, 16.9, 16.4, 17.1, 17.2, 18.7, 20.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13934.png",
    "name": "Antonio Brown",
    "depthchart": "Backup: WR-2",
    "team": "Tampa Bay Buccaneers",
    "projected": 8.1,
    "opponent": "Washington Football Team",
    "home_away": "at ",
    "opp_rank_Neg": 2,
    "team_rank_Pos": 3,
    "avg_fp2": 11.82,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 25.93,
    "fanduelSalary": "$6500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#D50A0A",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(213, 10, 10, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#D50A0A",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Antonio Brown caught 2-of-3 targets for 49 yards and one touchdown in the Bucs' Wild Card win over Washington.\n",
    "report": "",
    "analysis": "Brown broke free for a 36-yard touchdown in the first quarter and turned the corner on a target in the flats for his two receptions. He seems to be getting more comfortable as the weeks stack up, although he's still being utilized as a distant third receiver behind Chris Godwin (12 targets) and Mike Evans (10 targets). Brown will be parked inside three-receiver sets next weekend, possibly in New Orleans.\n",
    "timestamp": "2021-01-10 05:11 AM",
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
    "week09": 4.6,
    "week10": 10.1,
    "week11": 9.8,
    "week12": 2.1,
    "week13": "BYE",
    "week14": 7.4,
    "week15": 17.8,
    "week16": 11.5,
    "week17": 31.3,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 4.6, 10.1, 9.8, 2.1, 'BYE', 7.4, 17.8, 11.5, 31.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 16.4, 5.6, 7.1, 10.7, 'BYE', 9.6, 5.5, 7.4, 10.2, 8.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 4.7, 0.0, 5.2, 3.2, 'BYE', 4.1, 0.0, 0.3, 7.9, 5.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(213, 10, 10, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 17.9, 13.6, 17.1, 16.7, 'BYE', 20.4, 14.6, 24.6, 18.7, 19.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2977187.png",
    "name": "Cooper Kupp",
    "depthchart": "Reserve: WR-3",
    "team": "Los Angeles Rams",
    "projected": 7.8,
    "opponent": "Seattle Seahawks",
    "home_away": "at ",
    "opp_rank_Pos": 31,
    "team_rank_Neu": 13,
    "avg_fp2": 10.85,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 34.38,
    "fanduelSalary": "$6400",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Knee",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "NFL Network's Mike Garafolo reports \"all indications are nothing major\" for Cooper Kupp's knee injury.\u00a0\n",
    "report": "",
    "analysis": "Kupp suffered a non-contact injury late, and was spotted getting his ACL stability tested on the sideline. He then walked to the locker room under his own power. A Sunday MRI is all but\u00a0guaranteed, but it appears the Rams have dodged a bullet. Kupp missed the team's 2018-19 Super Bowl run with a torn left ACL. His status will be updated no later than Wednesday, though the Rams' first injury report could come on Tuesday depending on their\u00a0Divisional Round opponent.\u00a0\n",
    "timestamp": "2021-01-10 03:11 AM",
    "source": "Mike Garafolo on Twitter",
    "game_day_logo": "",
    "week01": 6.0,
    "week02": 10.5,
    "week03": 21.2,
    "week04": 15.2,
    "week05": 9.1,
    "week06": 2.6,
    "week07": 8.9,
    "week08": 16.5,
    "week09": "BYE",
    "week10": 7.5,
    "week11": 20.0,
    "week12": 5.1,
    "week13": 11.3,
    "week14": 11.8,
    "week15": 6.4,
    "week16": 10.6,
    "week17": "DNP",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.0, 10.5, 21.2, 15.2, 9.1, 2.6, 8.9, 16.5, 'BYE', 7.5, 20.0, 5.1, 11.3, 11.8, 6.4, 10.6, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.4, 9.3, 7.2, 7.0, 8.3, 11.7, 9.3, 7.7, 'BYE', 10.0, 6.0, 10.8, 10.1, 5.4, 10.7, 9.0, 'DNP', 7.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.4, 3.2, 5.0, 5.7, 6.6, 6.4, 3.5, 5.9, 'BYE', 6.4, 4.5, 5.0, 5.2, 6.1, 5.5, 3.2, 'DNP', 3.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.4, 20.9, 19.3, 20.1, 21.4, 20.2, 20.5, 19.0, 'BYE', 21.4, 19.2, 20.2, 21.7, 17.7, 19.9, 21.2, 'DNP', 17.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4243537.png",
    "name": "Gabriel Davis",
    "depthchart": "Reserve: WR-4",
    "team": "Buffalo Bills",
    "projected": 7.4,
    "opponent": "Indianapolis Colts",
    "home_away": "",
    "opp_rank_Neu": 20,
    "team_rank_Pos": 2,
    "avg_fp2": 7.46,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 31.36,
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
    "headlineNews": "Gabriel Davis caught all four of his targets for 85 yards in the Bills' Wild Card Weekend win against the Colts.\u00a0\n",
    "report": "",
    "analysis": "Davis had a couple impressive toe-tappers against the Colts, finding soft spots in Indy's zone defense on those two downfield grabs. Davis continues to be out-targeted by Cole Beasley but he's the next best big play option behind Stefon Diggs. Davis will likely be a key to Buffalo's offense if the Bills make a deep postseason run.\u00a0\n",
    "timestamp": "2021-01-09 09:55 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 2.6,
    "week02": 7.1,
    "week03": 10.1,
    "week04": 9.1,
    "week05": 8.3,
    "week06": 1.2,
    "week07": 1.6,
    "week08": 0.0,
    "week09": 15.0,
    "week10": 0.0,
    "week11": "BYE",
    "week12": 15.4,
    "week13": 14.3,
    "week14": 9.4,
    "week15": 2.8,
    "week16": 4.8,
    "week17": 17.7,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
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
                         data: [2.6, 7.1, 10.1, 9.1, 8.3, 1.2, 1.6, 0.0, 15.0, 0.0, 'BYE', 15.4, 14.3, 9.4, 2.8, 4.8, 17.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.3, 1.5, 1.9, 3.8, 6.2, 2.8, 7.4, 4.6, 4.1, 5.3, 'BYE', 9.1, 6.8, 8.7, 10.2, 3.5, 7.0, 7.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.0, 0.0, 0.0, 0.7, 2.1, 3.7, 4.9, 0.8, 'BYE', 0.0, 0.0, 1.9, 2.9, 0.9, 2.7, 1.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.1, 5.9, 3.4, 9.4, 9.8, 5.7, 8.2, 10.1, 9.7, 8.7, 'BYE', 10.3, 10.0, 11.8, 12.3, 11.1, 12.7, 12.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4035687.png",
    "name": "Michael Pittman",
    "depthchart": "Backup: WR-2",
    "team": "Indianapolis Colts",
    "projected": 7.3,
    "opponent": "Buffalo Bills",
    "home_away": "at ",
    "opp_rank_Neu": 13,
    "team_rank_Neu": 11,
    "avg_fp2": 6.07,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 26.61,
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
    "headlineNews": "Michael Pittman caught 5-of-11 targets for 91 yards in the Colts' Wild Card Weekend loss to Buffalo, adding one rush for 11 yards.\u00a0\n",
    "report": "",
    "analysis": "Pittman was second among Colts wideouts with a 14 percent target share this season. He was the team's primary offensive weapon for much of the first half against Buffalo, narrowly missing a diving touchdown grab in the first quarter. For a while in the season's first couple months, Pittman looked like Indy's top wideout. T.Y. Hilton slowly emerged as the No. 1 receiver, however, relegating Pittman to WR3/4 status in fantasy. At 6'4\" and 223 pounds with 4.52 speed, Pittman will look to take a second-year leap in 2021, possibly with unrestricted free agent Hilton gone. Pittman could shape up as a value pick in best ball leagues this spring and summer.\u00a0\n",
    "timestamp": "2021-01-09 11:59 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 2.0,
    "week02": 5.7,
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": "BYE",
    "week08": 1.1,
    "week09": 7.6,
    "week10": 15.7,
    "week11": 14.1,
    "week12": 3.8,
    "week13": 7.1,
    "week14": 5.5,
    "week15": 2.9,
    "week16": 5.3,
    "week17": 4.0,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.0, 5.7, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 1.1, 7.6, 15.7, 14.1, 3.8, 7.1, 5.5, 2.9, 5.3, 4.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.2, 5.0, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 2.8, 2.7, 3.8, 9.5, 12.6, 11.5, 9.4, 9.6, 5.5, 10.3, 7.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 0.0, 0.0, 0.0, 1.9, 3.5, 0.5, 2.3, 2.6, 3.1, 2.7, 2.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.3, 4.9, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 6.6, 6.8, 8.6, 6.6, 15.0, 10.3, 11.0, 7.3, 13.4, 11.8, 6.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3115306.png",
    "name": "Josh Reynolds",
    "depthchart": "Backup: WR-2",
    "team": "Los Angeles Rams",
    "projected": 7.2,
    "opponent": "Seattle Seahawks",
    "home_away": "at ",
    "opp_rank_Pos": 31,
    "team_rank_Neu": 13,
    "avg_fp2": 6.14,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 34.38,
    "fanduelSalary": "$4800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Josh Reynolds caught 4-of-6 targets for 29 yards in the Rams' Week 17 win over the Cardinals.\n",
    "report": "",
    "analysis": "Even with Cooper Kupp (COVID) out, it was Van Jefferson who benefitted most, seeing a team-high eight targets and producing a 4-50 line. Reynolds routinely plays about 75-80% of the Rams' snaps, but he fights with Gerald Everett and Tyler Higbee for targets behind Robert Woods. Reynolds will be a dart-throw WR4/5 against Seattle in the Wild Card round.\n",
    "timestamp": "2021-01-04 06:20 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 2.2,
    "week02": 4.3,
    "week03": 6.0,
    "week04": 4.0,
    "week05": 5.6,
    "week06": 11.5,
    "week07": 13.2,
    "week08": 6.4,
    "week09": "BYE",
    "week10": 13.4,
    "week11": 4.7,
    "week12": 6.5,
    "week13": 2.6,
    "week14": 1.1,
    "week15": 1.9,
    "week16": 10.0,
    "week17": 4.9,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.2, 4.3, 6.0, 4.0, 5.6, 11.5, 13.2, 6.4, 'BYE', 13.4, 4.7, 6.5, 2.6, 1.1, 1.9, 10.0, 4.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.1, -0.1, 1.5, 1.3, 1.7, 4.9, 4.1, 3.3, 'BYE', 5.6, 4.2, 6.2, 5.6, 3.8, 7.2, 6.6, 4.0, 7.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.0, 0.0, 0.0, 0.8, 0.0, 0.1, 'BYE', 0.4, 0.9, 0.4, 0.0, 0.0, 0.1, 0.4, 0.0, 0.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.5, 7.8, 8.2, 10.4, 9.5, 9.2, 10.2, 7.8, 'BYE', 10.1, 11.7, 9.4, 9.7, 9.5, 10.4, 9.9, 10.0, 10.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13295.png",
    "name": "Emmanuel Sanders",
    "depthchart": "Backup: WR-2",
    "team": "New Orleans Saints",
    "projected": 6.7,
    "opponent": "Chicago Bears",
    "home_away": "",
    "opp_rank_Neu": 12,
    "team_rank_Neu": 19,
    "avg_fp2": 9.59,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 26.51,
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
    "headlineNews": "Emmanuel Sanders caught 9-of-13 targets for 63 yards and a touchdown in the Saints' Week 17\u00a0win over the Panthers.\n",
    "report": "",
    "analysis": "Sanders saw eight more targets than any other Saints' skill position player, and hit the 60 reception mark on the season to earn an extra $500,000 incentive in his contract - which Sanders promptly celebrated at midfield. Alvin Kamara and Michael Thomas will always be priorities over Sanders when the roster is at full strength, but in his game Sanders was a key player. The free agent signing is the best second receiver on the Saints' roster in years, and ends the regular season with 61 receptions for 726 yards and five touchdowns.\n",
    "timestamp": "2021-01-04 03:44 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 9.0,
    "week02": 2.3,
    "week03": 13.6,
    "week04": 12.3,
    "week05": 18.2,
    "week06": "BYE",
    "week07": "DNP",
    "week08": "DNP",
    "week09": 11.8,
    "week10": 1.0,
    "week11": 8.6,
    "week12": 0.9,
    "week13": 6.4,
    "week14": 12.3,
    "week15": 9.6,
    "week16": 11.5,
    "week17": 16.8,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
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
                         data: [9.0, 2.3, 13.6, 12.3, 18.2, 'BYE', 'DNP', 'DNP', 11.8, 1.0, 8.6, 0.9, 6.4, 12.3, 9.6, 11.5, 16.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.5, 13.0, 5.2, 7.7, 7.1, 'BYE', 'DNP', 'DNP', 5.1, 7.0, 11.6, 5.8, 7.3, 3.2, 11.3, 11.1, 10.8, 6.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [12.9, 2.8, 2.2, 2.6, 2.9, 'BYE', 'DNP', 'DNP', 1.1, 4.4, 1.6, 2.0, 1.3, 1.5, 1.5, 3.3, 0.6, 3.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(155, 132, 92, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.9, 18.0, 15.4, 14.5, 13.3, 'BYE', 'DNP', 'DNP', 14.5, 14.3, 12.7, 14.6, 15.7, 14.8, 17.4, 16.3, 14.5, 15.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/17258.png",
    "name": "Willie Snead",
    "depthchart": "Reserve: WR-3",
    "team": "Baltimore Ravens",
    "projected": 6.7,
    "opponent": "Tennessee Titans",
    "home_away": "at ",
    "opp_rank_Pos": 29,
    "team_rank_Neg": 32,
    "avg_fp2": 5.98,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 35.62,
    "fanduelSalary": "$5000",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Ankle",
    "tmColorLite": "#9E7C0C",
    "tmColorDark": "#241773",
    "tmColorLite_rgba": "rgba(158, 124, 12, 0.2)",
    "tmColorDark_rgba": "rgba(36, 23, 115, 0.2)",
    "tmTextLite": "#9E7C0C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png",
    "headlineNews": "Willie Snead (ankle) was limited during Thursday's practice.\u00a0\n",
    "report": "",
    "analysis": "It's an upgrade for Snead, who did not practice Wednesday. He missed Week 17's game against the Bengals with the lingering ankle injury. Snead's absence has coincided with a Marquise Brown resurgence of late. Baltimore receivers will go against one of the worst secondaries in the NFL this weekend in their playoff clash with the Titans.\u00a0\n",
    "timestamp": "2021-01-07 09:31 PM",
    "source": "BaltimoreRavens.com ",
    "game_day_logo": "",
    "week01": 14.4,
    "week02": 3.9,
    "week03": 1.4,
    "week04": 3.0,
    "week05": 0.0,
    "week06": 3.7,
    "week07": "BYE",
    "week08": 13.1,
    "week09": 5.7,
    "week10": 20.9,
    "week11": 3.8,
    "week12": "DNP",
    "week13": "DNP",
    "week14": 4.4,
    "week15": 0.0,
    "week16": 3.4,
    "week17": "DNP",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.4, 3.9, 1.4, 3.0, 0.0, 3.7, 'BYE', 13.1, 5.7, 20.9, 3.8, 'DNP', 'DNP', 4.4, 0.0, 3.4, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.6, 7.8, 5.7, 0.6, 4.4, 6.9, 'BYE', 2.9, 5.1, 4.3, 6.9, 'DNP', 'DNP', 10.0, 8.4, 7.6, 'DNP', 6.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.1, 0.4, 0.0, 3.6, 0.9, 3.0, 'BYE', 0.6, 1.6, 0.7, 1.5, 'DNP', 'DNP', 1.8, 0.7, 1.1, 'DNP', 1.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.0, 10.0, 9.2, 11.5, 12.0, 10.6, 'BYE', 9.8, 10.4, 9.6, 9.7, 'DNP', 'DNP', 11.5, 12.6, 13.1, 'DNP', 11.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3042778.png",
    "name": "Corey Davis",
    "depthchart": "Backup: WR-2",
    "team": "Tennessee Titans",
    "projected": 6.6,
    "opponent": "Baltimore Ravens",
    "home_away": "",
    "opp_rank_Neg": 6,
    "team_rank_Neu": 23,
    "avg_fp2": 11.35,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 26.53,
    "fanduelSalary": "$6400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#4495D1",
    "tmColorDark": "#002A5C",
    "tmColorLite_rgba": "rgba(68, 149, 209, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 92, 0.2)",
    "tmTextLite": "#4495D1",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png",
    "headlineNews": "Corey Davis caught 5-of-11 targets for 39 yards in the Titans' Week 17 win over the Texans.\u00a0\n",
    "report": "",
    "analysis": "It was a highly disappointing effort for Davis, who ends up falling 16 yards shy of his first 1,000-yard season. He would have gotten there if not for a few drops. Davis will have to clear his head in a hurry for a tough Wild Card matchup with the Ravens. He got Baltimore for a 5/113/0 line in November.\u00a0\n",
    "timestamp": "2021-01-04 01:21 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 13.6,
    "week02": 11.1,
    "week03": 9.4,
    "week04": "BYE",
    "week05": "DNP",
    "week06": "DNP",
    "week07": 12.5,
    "week08": 22.8,
    "week09": 0.0,
    "week10": 9.2,
    "week11": 13.8,
    "week12": 8.5,
    "week13": 29.7,
    "week14": 2.9,
    "week15": 19.0,
    "week16": 0.0,
    "week17": 6.4,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
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
                         data: [13.6, 11.1, 9.4, 'BYE', 'DNP', 'DNP', 12.5, 22.8, 0.0, 9.2, 13.8, 8.5, 29.7, 2.9, 19.0, 0.0, 6.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.3, 6.4, 7.5, 'BYE', 'DNP', 'DNP', 7.9, 11.7, 7.8, 5.5, 7.3, 4.2, 6.9, 12.5, 8.4, 8.0, 12.1, 6.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.3, 1.6, 0.7, 'BYE', 'DNP', 'DNP', 0.0, 1.5, 2.8, 1.9, 1.9, 7.3, 0.8, 3.3, 1.4, 3.7, 1.3, 1.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.9, 12.7, 12.1, 'BYE', 'DNP', 'DNP', 13.4, 15.5, 15.1, 12.5, 14.4, 15.0, 14.1, 17.5, 15.5, 17.1, 14.6, 13.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116165.png",
    "name": "Chris Godwin",
    "depthchart": "Reserve: WR-3",
    "team": "Tampa Bay Buccaneers",
    "projected": 6.6,
    "opponent": "Washington Football Team",
    "home_away": "at ",
    "opp_rank_Neg": 2,
    "team_rank_Pos": 3,
    "avg_fp2": 13.21,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 25.93,
    "fanduelSalary": "$7800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#D50A0A",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(213, 10, 10, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#D50A0A",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Chris Godwin caught 5-of-12 targets for 79 yards and one touchdown in the Bucs' Wild Card win over Washington.\n",
    "report": "",
    "analysis": "Godwin had a very up-and-down game. He uncharacteristically had multiple drops -- possibly up to five -- but also found the end zone and made some plays in traffic. It would be a surprise if Godwin's drops carried over as he's been sure-handed for his entire NFL career. With Mike Evans avoiding a setback, the Bucs should be ready for a high-scoring affair next weekend. The Bucs are most likely playing the Saints in New Orleans.\n",
    "timestamp": "2021-01-10 05:12 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 10.9,
    "week02": "DNP",
    "week03": 14.9,
    "week04": "DNP",
    "week05": "DNP",
    "week06": 7.3,
    "week07": 19.3,
    "week08": "DNP",
    "week09": 5.6,
    "week10": 12.2,
    "week11": 14.8,
    "week12": 13.7,
    "week13": "BYE",
    "week14": 3.5,
    "week15": 11.6,
    "week16": 16.9,
    "week17": 27.8,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.9, 'DNP', 14.9, 'DNP', 'DNP', 7.3, 19.3, 'DNP', 5.6, 12.2, 14.8, 13.7, 'BYE', 3.5, 11.6, 16.9, 27.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.7, 'DNP', 5.0, 'DNP', 'DNP', 8.9, 8.7, 'DNP', 11.6, 2.8, 5.9, 8.2, 'BYE', 7.0, 4.9, 6.1, 8.7, 6.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.3, 'DNP', 2.6, 'DNP', 'DNP', 8.3, 1.4, 'DNP', 6.3, 0.5, 2.1, 3.7, 'BYE', 4.6, 2.6, 4.6, 3.0, 4.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(213, 10, 10, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.6, 'DNP', 20.4, 'DNP', 'DNP', 26.1, 20.3, 'DNP', 22.8, 20.4, 20.1, 18.4, 'BYE', 19.1, 19.9, 17.3, 14.8, 20.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3932423.png",
    "name": "Miles Boykin",
    "depthchart": "Backup: WR-2",
    "team": "Baltimore Ravens",
    "projected": 6.5,
    "opponent": "Tennessee Titans",
    "home_away": "at ",
    "opp_rank_Pos": 29,
    "team_rank_Neg": 32,
    "avg_fp2": 3.76,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 35.62,
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
    "headlineNews": "Miles Boykin caught 1-of-2 targets for 43 yards and a touchdown in the Ravens' Week 17 win over the Bengals.\u00a0\n",
    "report": "",
    "analysis": "Boykin caught the long touchdown wide open down the seam for one of Lamar Jackson's three passing scores. He had three touchdowns this season on 18 catches. Boykin remains on the periphery of the team's low-volume passing attack as Baltimore heads into the postseason.\u00a0\n",
    "timestamp": "2021-01-03 10:42 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 5.2,
    "week02": 5.8,
    "week03": 1.3,
    "week04": 3.8,
    "week05": 0.0,
    "week06": 1.6,
    "week07": "BYE",
    "week08": 9.0,
    "week09": 1.6,
    "week10": 0.0,
    "week11": 0.0,
    "week12": 0.0,
    "week13": 10.3,
    "week14": 2.0,
    "week15": 6.9,
    "week16": 1.8,
    "week17": 10.8,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.2, 5.8, 1.3, 3.8, 0.0, 1.6, 'BYE', 9.0, 1.6, 0.0, 0.0, 0.0, 10.3, 2.0, 6.9, 1.8, 10.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.4, 7.1, 4.3, 2.0, 0.3, 3.2, 'BYE', 1.9, 4.9, 4.3, 1.5, 0.3, 1.7, 2.6, 0.9, 3.9, 5.6, 6.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.1, 0.3, 0.7, 1.3, 3.1, 3.9, 'BYE', 1.6, 0.0, 1.0, 0.0, 0.8, 0.0, 0.0, 0.2, 1.3, 0.4, 0.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [6.5, 6.9, 5.8, 8.0, 8.3, 8.5, 'BYE', 7.8, 7.1, 6.8, 5.5, 7.7, 7.7, 6.3, 7.2, 8.1, 6.6, 8.0]
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
    "opponent": "New Orleans Saints",
    "home_away": "at ",
    "opp_rank_Neg": 5,
    "team_rank_Neu": 22,
    "avg_fp2": 5.26,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 30.31,
    "fanduelSalary": "$4700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#c36835",
    "tmColorDark": "#0B162A",
    "tmColorLite_rgba": "rgba(195, 104, 53, 0.2)",
    "tmColorDark_rgba": "rgba(11, 22, 42, 0.2)",
    "tmTextLite": "#c36835",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png",
    "headlineNews": "Anthony Miller caught both of his targets for 13 yards in the Bears' Week 17 loss to the Packers.\u00a0\n",
    "report": "",
    "analysis": "Long ago passed by Darnell Mooney as the team's No. 2 receiver, Miller was again hardly involved in the Bears' passing game. Miller ends the regular season with a 13 percent target share.\u00a0\n",
    "timestamp": "2021-01-04 03:06 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 15.6,
    "week02": 0.0,
    "week03": 12.0,
    "week04": 3.1,
    "week05": 4.8,
    "week06": 2.3,
    "week07": 3.5,
    "week08": 11.3,
    "week09": 6.4,
    "week10": 3.8,
    "week11": "BYE",
    "week12": 4.3,
    "week13": 8.4,
    "week14": 2.6,
    "week15": 1.8,
    "week16": 2.0,
    "week17": 2.3,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [15.6, 0.0, 12.0, 3.1, 4.8, 2.3, 3.5, 11.3, 6.4, 3.8, 'BYE', 4.3, 8.4, 2.6, 1.8, 2.0, 2.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.2, 9.5, 4.9, 6.3, 2.8, 3.1, 4.8, 5.3, 5.8, 3.6, 'BYE', 4.5, 4.6, 5.4, 6.9, 3.3, 3.4, 6.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.2, 0.8, 1.2, 0.5, 1.2, 1.4, 1.0, 0.9, 1.0, 1.2, 'BYE', 0.8, 0.7, 0.9, 1.1, 1.0, 2.2, 2.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  "rgba(195, 104, 53, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.7, 12.7, 13.6, 13.5, 12.5, 12.6, 11.5, 11.9, 13.3, 14.2, 'BYE', 11.7, 12.0, 13.2, 11.6, 10.3, 12.5, 13.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13215.png",
    "name": "Dez Bryant",
    "depthchart": "Reserve: WR-4",
    "team": "Baltimore Ravens",
    "projected": 6.2,
    "opponent": "Tennessee Titans",
    "home_away": "at ",
    "opp_rank_Pos": 29,
    "team_rank_Neg": 32,
    "avg_fp2": 3.94,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 35.62,
    "fanduelSalary": "$4900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9E7C0C",
    "tmColorDark": "#241773",
    "tmColorLite_rgba": "rgba(158, 124, 12, 0.2)",
    "tmColorDark_rgba": "rgba(36, 23, 115, 0.2)",
    "tmTextLite": "#9E7C0C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png",
    "headlineNews": "Dez Bryant caught his only target for an eight yard touchdown in the Ravens' Week 16 win against the Giants.\u00a0\n",
    "report": "",
    "analysis": "Bryant now has two touchdowns on four targets over the past couple games. Perhaps it's his reward for not retiring after being placed on the reserve/COVID-19 list. For now, his only consistent usage is in the red zone, where he clearly has Lamar Jackson's attention. Bryant won't be a viable fantasy option in Week 17.\u00a0\n",
    "timestamp": "2020-12-27 09:26 PM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": "BYE",
    "week08": "DNP",
    "week09": "DNP",
    "week10": "DNP",
    "week11": "DNP",
    "week12": 0.0,
    "week13": "DNP",
    "week14": "DNP",
    "week15": 7.6,
    "week16": 7.3,
    "week17": 0.0,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 0.0, 'DNP', 'DNP', 7.6, 7.3, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 6.9, 'DNP', 'DNP', 6.5, 5.1, 7.5, 6.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 4.6, 'DNP', 'DNP', 5.3, 4.4, 4.5, 3.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 21.2, 'DNP', 'DNP', 22.1, 20.1, 20.4, 20.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2978109.png",
    "name": "Zach Pascal",
    "depthchart": "Reserve: WR-3",
    "team": "Indianapolis Colts",
    "projected": 5.7,
    "opponent": "Buffalo Bills",
    "home_away": "at ",
    "opp_rank_Neu": 13,
    "team_rank_Neu": 11,
    "avg_fp2": 7.18,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 26.61,
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
    "headlineNews": "Zach Pascal caught 3-of-5 targets for 37 yards and a touchdown in the Colts' Wild Card Weekend loss to the Bills.\u00a0\n",
    "report": "",
    "analysis": "Pascal got away with what would have been a game-ending fumble. The refs somehow botched the call and ruled Pascal down -- one of the most perplexing officiating calls of the season. Pascal, 26, ended the regular season with a 13 percent target share, third among Indy wide receivers. He was second in receptions and receiving yardage. He'll be a restricted free agent in 2021.\u00a0\n",
    "timestamp": "2021-01-09 11:48 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 2.8,
    "week02": 9.4,
    "week03": 4.4,
    "week04": 7.3,
    "week05": 2.5,
    "week06": 13.4,
    "week07": "BYE",
    "week08": 5.9,
    "week09": 8.0,
    "week10": 5.3,
    "week11": 6.9,
    "week12": 2.8,
    "week13": 1.6,
    "week14": 3.2,
    "week15": 22.4,
    "week16": 13.9,
    "week17": 5.1,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.8, 9.4, 4.4, 7.3, 2.5, 13.4, 'BYE', 5.9, 8.0, 5.3, 6.9, 2.8, 1.6, 3.2, 22.4, 13.9, 5.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [0.6, 7.5, 3.2, 4.3, 9.7, 4.1, 'BYE', 4.9, 6.9, 8.1, 4.9, 4.4, 4.8, 5.8, 7.3, 4.7, 5.6, 5.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 1.0, 0.0, 0.0, 0.3, 'BYE', 0.2, 0.0, 0.4, 2.8, 0.0, 0.0, 0.0, 0.0, 0.3, 0.6, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.1, 12.8, 6.8, 12.5, 9.5, 12.7, 'BYE', 13.9, 7.8, 9.8, 11.0, 13.4, 8.9, 10.6, 11.4, 13.1, 13.0, 11.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16790.png",
    "name": "Jarvis Landry",
    "depthchart": "Reserve: WR-3",
    "team": "Cleveland Browns",
    "projected": 5.2,
    "opponent": "Pittsburgh Steelers",
    "home_away": "at ",
    "opp_rank_Neg": 3,
    "team_rank_Neg": 24,
    "avg_fp2": 10.13,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 27.73,
    "fanduelSalary": "$6600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FF3C00",
    "tmColorDark": "#311D00",
    "tmColorLite_rgba": "rgba(255, 60, 0, 0.2)",
    "tmColorDark_rgba": "rgba(49, 29, 0, 0.2)",
    "tmTextLite": "#FF3C00",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
    "headlineNews": "Jarvis Landry caught 5-of-6 targets for 51 yards in the Browns' Week 17 win over the Steelers, adding a three-yard rushing score.\u00a0\n",
    "report": "",
    "analysis": "That puts a bow on a disappointing regular season where Landry spent months getting back to 100 percent health following offseason hip surgery, though the only game he missed was Week 16 due to COVID protocols. Landry's 840 yards receiving were his fewest since his rookie year in 2014, while his four scores were his fewest since 2016. Even with Odell Beckham missing most of the season, this just isn't an offense where Landry can post big numbers, especially if he's not all the way healthy. A Steelers rematch is on tap for the Wild Card Round.\u00a0\n",
    "timestamp": "2021-01-03 10:28 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 8.6,
    "week02": 6.1,
    "week03": 5.6,
    "week04": 12.78,
    "week05": 10.8,
    "week06": 5.5,
    "week07": 8.46,
    "week08": 7.2,
    "week09": "BYE",
    "week10": 4.4,
    "week11": 3.6,
    "week12": 24.3,
    "week13": 16.44,
    "week14": 8.68,
    "week15": 15.6,
    "week16": "DNP",
    "week17": 13.9,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.6, 6.1, 5.6, 12.78, 10.8, 5.5, 8.46, 7.2, 'BYE', 4.4, 3.6, 24.3, 16.44, 8.68, 15.6, 'DNP', 13.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.8, 6.2, 8.8, 11.6, 12.2, 8.1, 9.7, 10.7, 'BYE', 2.8, 5.9, 3.7, 10.1, 5.2, 5.6, 'DNP', 5.7, 5.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.6, 6.6, 5.5, 6.2, 4.9, 6.4, 4.9, 5.3, 'BYE', 5.9, 2.7, 4.7, 7.2, 5.6, 5.0, 'DNP', 5.6, 5.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.1, 19.1, 17.7, 18.2, 17.7, 18.1, 16.9, 16.5, 'BYE', 16.2, 18.5, 16.1, 18.1, 17.1, 16.4, 'DNP', 17.6, 17.7]
                    }
                    
                    ]
               }
            }];



$scope.positionTE = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116365.png",
    "name": "Mark Andrews",
    "depthchart": "Starter: TE-1",
    "team": "Baltimore Ravens",
    "projected": 14.9,
    "opponent": "Tennessee Titans",
    "home_away": "at ",
    "opp_rank_Pos": 29,
    "team_rank_Neg": 32,
    "avg_fp2": 10.08,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 10.46,
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
    "headlineNews": "Mark Andrews caught 4-of-7 targets for 27 yards in the Ravens' Week 17 win against the Bengals.\u00a0\n",
    "report": "",
    "analysis": "Andrews was second on the team in targets on a day that saw Lamar Jackson throw the ball just 18 times in an easy win. Most Baltimore starters, including Andrews, were rested in the fourth quarter. The athletic tight end enjoyed a 24 percent target share this season, and heads into the postseason as Jackson's most dependable target.\u00a0\n",
    "timestamp": "2021-01-03 09:07 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 20.3,
    "week02": 3.4,
    "week03": 3.7,
    "week04": 19.2,
    "week05": 14.6,
    "week06": 3.1,
    "week07": "BYE",
    "week08": 4.7,
    "week09": 3.7,
    "week10": 9.6,
    "week11": 18.1,
    "week12": "DNP",
    "week13": "DNP",
    "week14": 10.3,
    "week15": 15.1,
    "week16": 10.6,
    "week17": 4.7,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [20.3, 3.4, 3.7, 19.2, 14.6, 3.1, 'BYE', 4.7, 3.7, 9.6, 18.1, 'DNP', 'DNP', 10.3, 15.1, 10.6, 4.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.4, 13.8, 15.2, 10.4, 9.7, 15.1, 'BYE', 12.6, 8.2, 7.4, 12.0, 'DNP', 'DNP', 13.2, 7.2, 13.8, 13.5, 14.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.9, 1.0, 2.5, 3.0, 5.1, 4.2, 'BYE', 4.7, 0.8, 0.0, 1.8, 'DNP', 'DNP', 2.4, 2.6, 8.0, 3.8, 3.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.8, 12.6, 16.2, 15.3, 17.2, 11.9, 'BYE', 14.1, 13.1, 14.5, 12.8, 'DNP', 'DNP', 15.3, 14.9, 18.3, 16.4, 15.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16813.png",
    "name": "Logan Thomas",
    "depthchart": "Starter: TE-1",
    "team": "Washington Football Team",
    "projected": 11.2,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "",
    "opp_rank_Neu": 21,
    "team_rank_Neg": 25,
    "avg_fp2": 8.79,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 11.2,
    "fanduelSalary": "$6400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#773141",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(119, 49, 65, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png",
    "headlineNews": "Logan Thomas caught 5-of-9 targets for 74 yards in Washington's Wild Card loss to the Buccaneers.\n",
    "report": "",
    "analysis": "Thomas was an unexpected breakout player in 2020. After taking multiple years to develop into a tight end, Thomas compiled a 72-670-6 receiving line on 110 targets with Washington. If he had better quarterback play, the 29-year-old could've settled in as a weekly TE1 in fantasy. Instead, Thomas was an inconsistent producer despite showing above-average athleticism on tape. Washington has Thomas under contract for another year and could improve their quarterback situation with their top-five cap space. Thomas belongs on the TE1/2 border for early 2021 fantasy drafts while we wait to see who Washington brings in at quarterback.\n",
    "timestamp": "2021-01-10 06:16 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 11.7,
    "week02": 4.6,
    "week03": 5.1,
    "week04": 1.3,
    "week05": 0.9,
    "week06": 11.7,
    "week07": 14.0,
    "week08": "BYE",
    "week09": 4.3,
    "week10": 8.6,
    "week11": 1.8,
    "week12": 11.42,
    "week13": 20.3,
    "week14": 7.3,
    "week15": 16.6,
    "week16": 9.8,
    "week17": 11.2,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.7, 4.6, 5.1, 1.3, 0.9, 11.7, 14.0, 'BYE', 4.3, 8.6, 1.8, 11.42, 20.3, 7.3, 16.6, 9.8, 11.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.5, 9.6, 12.7, 4.8, 2.4, 6.2, 7.0, 'BYE', 7.2, 9.3, 9.5, 8.4, 6.2, 5.8, 5.7, 8.1, 6.9, 11.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.6, 2.4, 0.1, 0.0, 0.1, 0.1, 'BYE', 0.0, 0.9, 0.3, 0.5, 0.0, 0.0, 0.0, 2.0, 1.5, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [3.6, 7.8, 7.7, 6.4, 4.5, 5.9, 5.7, 'BYE', 6.7, 5.9, 7.8, 7.5, 6.3, 6.7, 6.9, 11.0, 8.5, 9.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16732.png",
    "name": "Eric Ebron",
    "depthchart": "Starter: TE-1",
    "team": "Pittsburgh Steelers",
    "projected": 11.0,
    "opponent": "Cleveland Browns",
    "home_away": "",
    "opp_rank_Neu": 22,
    "team_rank_Neu": 15,
    "avg_fp2": 7.59,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 11.76,
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
    "headlineNews": "Steelers activated Eric Ebron from the reserve/COVID list.\n",
    "report": "",
    "analysis": "Ebron will only end up missing Pittsburgh's meaningless regular season finale against Cleveland. He only totaled 13 targets in his three appearances\u00a0prior to Week 17 but did see five second-half targets against the Colts while Ben Roethlisberger took it upon himself to call his own plays. Ebron at least offers a high-floor for any postseason fantasy tournaments.\n",
    "timestamp": "2021-01-07 05:35 PM",
    "source": "Dale Lolley on Twitter",
    "game_day_logo": "",
    "week01": 2.3,
    "week02": 5.8,
    "week03": 13.7,
    "week04": "BYE",
    "week05": 4.8,
    "week06": 1.9,
    "week07": 8.0,
    "week08": 12.8,
    "week09": 9.7,
    "week10": 4.8,
    "week11": 11.6,
    "week12": 8.9,
    "week13": 10.3,
    "week14": 6.0,
    "week15": 0.0,
    "week16": 13.2,
    "week17": "DNP",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.3, 5.8, 13.7, 'BYE', 4.8, 1.9, 8.0, 12.8, 9.7, 4.8, 11.6, 8.9, 10.3, 6.0, 0.0, 13.2, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.8, 8.9, 7.2, 'BYE', 13.4, 7.7, 9.6, 7.9, 3.9, 13.0, 7.4, 9.5, 7.8, 9.3, 11.0, 7.6, 'DNP', 11.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 2.4, 3.3, 'BYE', 2.1, 3.8, 2.7, 2.2, 2.5, 2.5, 2.8, 2.5, 2.0, 2.4, 1.8, 1.5, 'DNP', 2.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.5, 13.7, 13.9, 'BYE', 12.7, 13.8, 12.3, 12.8, 12.5, 13.0, 13.3, 13.1, 12.4, 12.3, 13.3, 11.4, 'DNP', 11.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3043275.png",
    "name": "Austin Hooper",
    "depthchart": "Starter: TE-1",
    "team": "Cleveland Browns",
    "projected": 10.7,
    "opponent": "Pittsburgh Steelers",
    "home_away": "at ",
    "opp_rank_Neg": 3,
    "team_rank_Neg": 24,
    "avg_fp2": 6.96,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 7.01,
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
    "headlineNews": "Austin Hooper caught 4-of-5 targets for 37 yards and a touchdown in the Browns' Week 17 win over the Steelers.\u00a0\n",
    "report": "",
    "analysis": "Medical issues cost Hooper four games, but the $42 million\u00a0free agent was a first-year bust in the Browns' run-heavy offense, snagging just 46 balls for 435 yards (9.4 YPC). Especially with Odell Beckham missing most of the season, the Browns needed more. Hooper had been getting more involved before an October appendectomy halted his momentum. Hooper and the Browns will rematch with the Steelers in the Wild Card Round.\u00a0\n",
    "timestamp": "2021-01-03 11:07 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 2.5,
    "week02": 3.2,
    "week03": 4.0,
    "week04": 11.9,
    "week05": 8.2,
    "week06": 7.7,
    "week07": "DNP",
    "week08": "DNP",
    "week09": "BYE",
    "week10": 1.6,
    "week11": 4.8,
    "week12": 8.3,
    "week13": 3.4,
    "week14": "DNP",
    "week15": 12.6,
    "week16": 10.6,
    "week17": 11.7,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.5, 3.2, 4.0, 11.9, 8.2, 7.7, 'DNP', 'DNP', 'BYE', 1.6, 4.8, 8.3, 3.4, 'DNP', 12.6, 10.6, 11.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.9, 8.9, 6.4, 5.3, 3.3, 3.6, 'DNP', 'DNP', 'BYE', 4.9, 6.2, 12.8, 11.9, 'DNP', 11.4, 10.4, 6.3, 10.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.9, 1.4, 1.1, 3.8, 0.9, 1.5, 'DNP', 'DNP', 'BYE', 4.5, 1.1, 1.9, 0.7, 'DNP', 1.5, 2.2, 1.5, 2.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.1, 11.6, 11.9, 13.6, 11.5, 11.3, 'DNP', 'DNP', 'BYE', 11.4, 11.9, 13.0, 13.6, 'DNP', 11.6, 12.5, 12.9, 12.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/12537.png",
    "name": "Jared Cook",
    "depthchart": "Starter: TE-1",
    "team": "New Orleans Saints",
    "projected": 10.6,
    "opponent": "Chicago Bears",
    "home_away": "",
    "opp_rank_Neu": 12,
    "team_rank_Neu": 19,
    "avg_fp2": 7.26,
    "opp_rank_allowed_fp2_Pos": 30,
    "opp_avg_allowed_fp2": 12.57,
    "fanduelSalary": "$5900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9b845c",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(155, 132, 92, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#9b845c",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
    "headlineNews": "Jared Cook caught 4-of-5\u00a0passes for 43 yards and a touchdown in the Saints' Week 17\u00a0win over the Panthers.\n",
    "report": "",
    "analysis": "Cook's 17-yard touchdown was a perfectly placed ball by Brees in the middle of a triangle of Panthers' defenders, allowing Cook to climb the ladder for the score. Cook ends the regular season with 504 receiving yards and seven touchdowns, a very respectable output for this year's tight end group.\n",
    "timestamp": "2021-01-04 04:16 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 10.5,
    "week02": 8.3,
    "week03": 3.1,
    "week04": "DNP",
    "week05": 12.2,
    "week06": "BYE",
    "week07": 10.7,
    "week08": 13.6,
    "week09": 2.0,
    "week10": 0.0,
    "week11": 1.1,
    "week12": 0.0,
    "week13": 10.3,
    "week14": 11.2,
    "week15": 3.9,
    "week16": 9.7,
    "week17": 12.3,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
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
                         data: [10.5, 8.3, 3.1, 'DNP', 12.2, 'BYE', 10.7, 13.6, 2.0, 0.0, 1.1, 0.0, 10.3, 11.2, 3.9, 9.7, 12.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.3, 9.5, 9.1, 'DNP', 10.4, 'BYE', 13.2, 5.8, 7.4, 5.5, 5.1, 6.6, 4.1, 10.8, 10.9, 5.9, 7.8, 10.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.0, 1.2, 1.4, 'DNP', 1.3, 'BYE', 1.6, 1.6, 1.7, 1.0, 0.6, 1.0, 0.0, 1.3, 3.4, 1.2, 1.1, 1.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(155, 132, 92, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.9, 13.3, 13.3, 'DNP', 14.5, 'BYE', 13.4, 12.4, 13.5, 13.0, 14.9, 12.4, 11.5, 14.0, 13.2, 12.5, 12.9, 12.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13229.png",
    "name": "Rob Gronkowski",
    "depthchart": "Starter: TE-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 9.8,
    "opponent": "Washington Football Team",
    "home_away": "at ",
    "opp_rank_Neg": 2,
    "team_rank_Pos": 3,
    "avg_fp2": 7.93,
    "opp_rank_allowed_fp2_Neu": 9,
    "opp_avg_allowed_fp2": 8.96,
    "fanduelSalary": "$6000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#D50A0A",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(213, 10, 10, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#D50A0A",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Rob Gronkowski failed to catch his lone target in the Bucs' Wild Card win over Washington.\n",
    "report": "",
    "analysis": "The last time Gronkowski went catchless in a game was back in Week 2. The veteran has been looking spry since turning into a full-time player in the second half of the season. It's likely a one-game outlier, although he did seem to stay in for pass protection more than normal on Saturday. Expect Gronkowski to be a threat in the red zone next weekend. Tampa Bay is most likely headed for New Orleans.\n",
    "timestamp": "2021-01-10 05:11 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 2.1,
    "week02": 0.0,
    "week03": 7.8,
    "week04": 3.4,
    "week05": 6.7,
    "week06": 16.3,
    "week07": 14.7,
    "week08": 12.1,
    "week09": 0.7,
    "week10": 12.1,
    "week11": 3.5,
    "week12": 13.6,
    "week13": "BYE",
    "week14": 6.7,
    "week15": 4.4,
    "week16": 18.8,
    "week17": 3.9,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.1, 0.0, 7.8, 3.4, 6.7, 16.3, 14.7, 12.1, 0.7, 12.1, 3.5, 13.6, 'BYE', 6.7, 4.4, 18.8, 3.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.7, 10.4, 12.7, 9.4, 10.3, 16.0, 18.5, 17.6, 13.9, 17.8, 15.9, 13.6, 'BYE', 15.5, 15.0, 14.3, 13.8, 9.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.7, 4.3, 3.9, 3.6, 4.7, 3.3, 4.1, 4.1, 2.3, 3.6, 3.7, 4.4, 'BYE', 4.5, 4.1, 3.9, 3.2, 3.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(213, 10, 10, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [22.6, 20.7, 20.9, 20.8, 18.0, 20.5, 21.1, 20.2, 17.1, 21.4, 19.5, 21.1, 'BYE', 21.7, 23.3, 21.9, 21.7, 22.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3054212.png",
    "name": "Jonnu Smith",
    "depthchart": "Starter: TE-1",
    "team": "Tennessee Titans",
    "projected": 7.7,
    "opponent": "Baltimore Ravens",
    "home_away": "",
    "opp_rank_Neg": 6,
    "team_rank_Neu": 23,
    "avg_fp2": 7.98,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 9.36,
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
    "headlineNews": "Jonnu Smith caught 1-of-2 targets for eight yards in the Titans' Week 17 win over the Texans.\u00a0\n",
    "report": "",
    "analysis": "Smith heads into the postseason coming off his least productive effort since October. Smith appeared primed to be an every-week TE1 the first month of the season, but his production fell off a cliff following a few (supposedly) minor injuries. He will be a touchdown-or-bust option for playoff\u00a0DFS after finding the end zone eight times in 15 regular season contests.\u00a0\n",
    "timestamp": "2021-01-04 01:24 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 11.6,
    "week02": 22.4,
    "week03": 8.6,
    "week04": "BYE",
    "week05": 18.5,
    "week06": 1.8,
    "week07": 1.4,
    "week08": 3.9,
    "week09": 10.2,
    "week10": 8.5,
    "week11": 10.0,
    "week12": 0.0,
    "week13": "DNP",
    "week14": 3.3,
    "week15": 7.7,
    "week16": 10.5,
    "week17": 1.3,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
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
                         data: [11.6, 22.4, 8.6, 'BYE', 18.5, 1.8, 1.4, 3.9, 10.2, 8.5, 10.0, 0.0, 'DNP', 3.3, 7.7, 10.5, 1.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.7, 10.0, 9.9, 'BYE', 10.3, 11.0, 9.0, 12.0, 8.7, 6.7, 7.3, 9.0, 'DNP', 3.7, 8.4, 4.1, 13.3, 7.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.9, 1.2, 'BYE', 0.0, 2.9, 1.7, 0.0, 0.0, 1.1, 1.3, 1.1, 'DNP', 5.5, 0.8, 0.0, 0.0, 0.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [7.9, 9.5, 11.9, 'BYE', 7.5, 13.6, 12.5, 9.7, 9.2, 11.6, 10.6, 12.2, 'DNP', 12.8, 11.6, 10.9, 10.9, 11.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13232.png",
    "name": "Jimmy Graham",
    "depthchart": "Backup: TE-2",
    "team": "Chicago Bears",
    "projected": 6.4,
    "opponent": "New Orleans Saints",
    "home_away": "at ",
    "opp_rank_Neg": 5,
    "team_rank_Neu": 22,
    "avg_fp2": 7.41,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 10.42,
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
    "headlineNews": "Jimmy Graham caught both of his targets for five yards in the Bears' Week 17 loss to the Packers.\u00a0\n",
    "report": "",
    "analysis": "Cole Kmet, meanwhile, saw eight targets against the Packers. Graham has saved his fantasy day in recent weeks with timely touchdowns while running fewer pass routes and seeing fewer snaps than Kmet. Graham won't be fantasy relevant in DFS next week against his former team, the Saints.\u00a0\n",
    "timestamp": "2021-01-04 03:10 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 10.0,
    "week02": 2.3,
    "week03": 21.0,
    "week04": 5.3,
    "week05": 10.8,
    "week06": 5.9,
    "week07": 5.6,
    "week08": 2.3,
    "week09": 14.5,
    "week10": 0.0,
    "week11": "BYE",
    "week12": 4.7,
    "week13": 0.0,
    "week14": 10.3,
    "week15": 3.5,
    "week16": 20.9,
    "week17": 1.5,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.0, 2.3, 21.0, 5.3, 10.8, 5.9, 5.6, 2.3, 14.5, 0.0, 'BYE', 4.7, 0.0, 10.3, 3.5, 20.9, 1.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.2, 13.4, 16.8, 7.7, 9.1, 5.5, 9.8, 10.7, 15.5, 15.3, 'BYE', 6.9, 11.0, 5.9, 4.0, 6.7, 5.5, 6.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.2, 3.5, 1.3, 2.6, 1.8, 2.4, 1.3, 3.4, 3.1, 3.6, 'BYE', 2.6, 1.5, 1.1, 2.5, 1.9, 1.7, 1.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  "rgba(195, 104, 53, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.2, 17.5, 14.7, 15.0, 13.8, 14.6, 13.5, 16.8, 17.2, 14.4, 'BYE', 14.5, 12.9, 13.9, 16.8, 14.9, 15.5, 13.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3125404.png",
    "name": "Jacob Hollister",
    "depthchart": "Starter: TE-1",
    "team": "Seattle Seahawks",
    "projected": 6.2,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank_Neg": 1,
    "team_rank_Neu": 16,
    "avg_fp2": 3.34,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 9.38,
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
    "headlineNews": "Jacob Hollister caught 0-of-5 targets in the Seahawks' Wild Card loss to the Rams.\u00a0\n",
    "report": "",
    "analysis": "A seeming obsession for both\u00a0coach Pete Carroll and OC Brian Schottenheimer, Hollister turned 25 2020 receptions into only 209 yards. Even for a tight end, an 8.4 YPC isn't going to cut it, especially in this offense, and especially especially after that number was only 8.5 in 2019. Amazingly, 10 of Hollister's 40 targets came in the red zone. We would say the Seahawks need a better plan. Hollister played 2020 under a restricted free agent tender and is headed to the open market as a 27-year-old.\u00a0\n",
    "timestamp": "2021-01-10 03:06 AM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": 0.0,
    "week03": "DNP",
    "week04": 0.0,
    "week05": 0.0,
    "week06": "BYE",
    "week07": 3.7,
    "week08": 1.1,
    "week09": 8.5,
    "week10": 1.1,
    "week11": 2.4,
    "week12": 2.1,
    "week13": 3.5,
    "week14": 2.5,
    "week15": 8.7,
    "week16": 8.7,
    "week17": 1.1,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
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
                         data: ['DNP', 0.0, 'DNP', 0.0, 0.0, 'BYE', 3.7, 1.1, 8.5, 1.1, 2.4, 2.1, 3.5, 2.5, 8.7, 8.7, 1.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 0.6, 'DNP', 1.6, 2.0, 'BYE', -0.2, 0.4, 2.0, 2.1, 1.4, 3.1, 6.6, 7.6, 3.6, 3.5, 5.7, 6.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 1.8, 'DNP', 0.4, 0.0, 'BYE', 0.0, 0.0, 0.5, 0.0, 0.0, 0.5, 0.0, 0.0, 0.5, 0.0, 1.6, 3.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 8.0, 'DNP', 4.9, 9.1, 'BYE', 8.5, 7.1, 9.2, 6.7, 5.0, 7.2, 4.5, 9.8, 5.4, 7.1, 7.1, 8.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16504.png",
    "name": "Jack Doyle",
    "depthchart": "Starter: TE-1",
    "team": "Indianapolis Colts",
    "projected": 5.9,
    "opponent": "Buffalo Bills",
    "home_away": "at ",
    "opp_rank_Neu": 13,
    "team_rank_Neu": 11,
    "avg_fp2": 3.76,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 11.74,
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
    "headlineNews": "Jack Doyle caught 7-of-9 targets for 70 yards and a touchdown in the Colts' Wild Card Weekend loss to the Bills.\u00a0\n",
    "report": "",
    "analysis": "He also caught a two-point conversion. Doyle emerged in the season's final weeks as the primary pass-catching tight end in the Colts' three-man tight end rotation. Philip Rivers ripped Buffalo's defense via the tight end on Saturday, completing 14 passes to Doyle, Mo Alie-Cox, and Trey Burton. Doyle, the ultimate dad runner, led all Indy tight ends in offensive snaps this season but was out-targeted by Trey Burton, 38 to 33. Colts tight ends were mostly unusable in fantasy this season. Doyle, 30, is signed with the Colts through 2022.\u00a0\n",
    "timestamp": "2021-01-09 11:15 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 6.4,
    "week02": "DNP",
    "week03": 0.0,
    "week04": 1.7,
    "week05": 0.0,
    "week06": 8.4,
    "week07": "BYE",
    "week08": 8.8,
    "week09": 0.0,
    "week10": "DNP",
    "week11": 7.1,
    "week12": 0.0,
    "week13": 1.7,
    "week14": 5.9,
    "week15": 2.4,
    "week16": 7.0,
    "week17": 3.2,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.4, 'DNP', 0.0, 1.7, 0.0, 8.4, 'BYE', 8.8, 0.0, 'DNP', 7.1, 0.0, 1.7, 5.9, 2.4, 7.0, 3.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.4, 'DNP', 7.7, 4.4, 9.5, 1.2, 'BYE', 1.2, 1.7, 'DNP', 6.2, 5.9, 2.9, -1.6, 1.6, 5.2, 9.3, 5.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.4, 'DNP', 0.8, 0.6, 0.0, 5.0, 'BYE', 1.4, 0.7, 'DNP', 0.0, 0.0, 1.5, 2.0, 0.4, 0.2, 0.5, 0.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.0, 'DNP', 9.6, 11.4, 10.4, 14.1, 'BYE', 10.1, 10.6, 'DNP', 11.6, 9.8, 10.6, 10.2, 10.1, 10.5, 9.9, 10.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4258595.png",
    "name": "Cole Kmet",
    "depthchart": "Starter: TE-1",
    "team": "Chicago Bears",
    "projected": 5.7,
    "opponent": "New Orleans Saints",
    "home_away": "at ",
    "opp_rank_Neg": 5,
    "team_rank_Neu": 22,
    "avg_fp2": 3.0,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 10.42,
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
    "headlineNews": "Cole Kmet caught 7-of-8\u00a0targets for 41 yards in the Bears' Week 17 loss to the Packers.\u00a0\n",
    "report": "",
    "analysis": "Kmet was third in targets against Green Bay, catching seven of Mitch Trubisky's checkdown tosses. Kmet has run ahead of Jimmy Graham for the past month but it's been Graham cashing in touchdowns for the Bears. Not today, as Graham caught two balls for give yards. Kmet will be the team's clear No. 1 tight end headed into next week's playoff clash with the Saints.\u00a0\n",
    "timestamp": "2021-01-04 02:59 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 0.0,
    "week02": 1.7,
    "week03": 0.0,
    "week04": 0.0,
    "week05": 0.0,
    "week06": 9.0,
    "week07": 5.5,
    "week08": 0.7,
    "week09": 0.0,
    "week10": 1.2,
    "week11": "BYE",
    "week12": 1.3,
    "week13": 12.2,
    "week14": 6.1,
    "week15": 2.2,
    "week16": 2.5,
    "week17": 5.6,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 1.7, 0.0, 0.0, 0.0, 9.0, 5.5, 0.7, 0.0, 1.2, 'BYE', 1.3, 12.2, 6.1, 2.2, 2.5, 5.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.2, -0.2, 6.2, -1.7, -2.1, -2.3, 1.2, 1.4, 2.6, 1.2, 'BYE', -0.4, 2.5, 5.6, 3.5, 8.0, 3.6, 5.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 'BYE', 0.0, 0.0, 0.0, 0.0, 3.9, 0.0, 0.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  "rgba(195, 104, 53, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.3, 7.0, 4.6, 4.7, 6.5, 4.4, 0.0, 3.2, 7.0, 2.7, 'BYE', 5.7, 3.5, 7.4, 5.8, 7.6, 7.3, 4.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3911853.png",
    "name": "Adam Trautman",
    "depthchart": "Backup: TE-2",
    "team": "New Orleans Saints",
    "projected": 3.4,
    "opponent": "Chicago Bears",
    "home_away": "",
    "opp_rank_Neu": 12,
    "team_rank_Neu": 19,
    "avg_fp2": 2.04,
    "opp_rank_allowed_fp2_Pos": 30,
    "opp_avg_allowed_fp2": 12.57,
    "fanduelSalary": "$4300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9b845c",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(155, 132, 92, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#9b845c",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
    "headlineNews": "Saints TE Adam Trautman is expected to start in Week 4 against the Lions.\n",
    "report": "",
    "analysis": "With Jared Cook (groin) out, Trautman is stepping into an expanded role along with Josh Hill. He should see a few\u00a0targets in an offense that\u2019s also missing Michael Thomas (ankle) and hasn\u2019t gotten much from Emmanuel Sanders and Tre\u2019Quan Smith. Trautman is a back-end\u00a0streaming option and DFS punt.\n",
    "timestamp": "2020-10-08 08:35 PM",
    "source": "USA Today",
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": 0.0,
    "week05": "DNP",
    "week06": "BYE",
    "week07": "DNP",
    "week08": 0.0,
    "week09": 11.4,
    "week10": 0.0,
    "week11": 2.4,
    "week12": 1.3,
    "week13": 2.4,
    "week14": 1.7,
    "week15": 0.0,
    "week16": 5.5,
    "week17": 1.0,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
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
                         data: ['DNP', 'DNP', 'DNP', 0.0, 'DNP', 'BYE', 'DNP', 0.0, 11.4, 0.0, 2.4, 1.3, 2.4, 1.7, 0.0, 5.5, 1.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 1.3, 'DNP', 'BYE', 'DNP', -1.4, -1.1, 0.8, -0.3, -0.3, 2.0, 0.9, 2.5, 0.8, 2.5, 3.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 0.0, 'DNP', 'BYE', 'DNP', 0.0, 0.1, 0.0, 0.0, 0.3, 0.0, 0.0, 0.1, 1.8, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(155, 132, 92, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 5.6, 'DNP', 'BYE', 'DNP', 6.2, 0.7, 1.8, 7.4, 2.7, 6.4, 3.9, 2.1, 3.4, 5.8, 3.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3930086.png",
    "name": "Dawson Knox",
    "depthchart": "Starter: TE-1",
    "team": "Buffalo Bills",
    "projected": 3.3,
    "opponent": "Indianapolis Colts",
    "home_away": "",
    "opp_rank_Neu": 20,
    "team_rank_Pos": 2,
    "avg_fp2": 4.58,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 8.26,
    "fanduelSalary": "$4900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#005596",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 85, 150, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
    "headlineNews": "Dawson Knox caught 2-of-3 targets for five yards and a touchdown in the Bills' Wild Card Weekend win over the Colts.\u00a0\n",
    "report": "",
    "analysis": "Knox was on the receiving end of an improvised first quarter push pass from Josh Allen as the quarterback abandoned a designed run and spotted Knox in the back of the end zone. Knox was uninvolved from there. He's a touchdown-dependent fantasy option as long as Cole Beasley is in the Buffalo lineup.\u00a0\n",
    "timestamp": "2021-01-09 10:27 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 3.6,
    "week02": 2.3,
    "week03": "DNP",
    "week04": 2.6,
    "week05": 2.0,
    "week06": "DNP",
    "week07": "DNP",
    "week08": "DNP",
    "week09": 0.0,
    "week10": 2.6,
    "week11": "BYE",
    "week12": 6.7,
    "week13": 10.7,
    "week14": 3.4,
    "week15": 10.6,
    "week16": 6.6,
    "week17": 3.9,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
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
                         data: [3.6, 2.3, 'DNP', 2.6, 2.0, 'DNP', 'DNP', 'DNP', 0.0, 2.6, 'BYE', 6.7, 10.7, 3.4, 10.6, 6.6, 3.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.3, 5.7, 'DNP', 5.1, 5.4, 'DNP', 'DNP', 'DNP', 10.3, 3.1, 'BYE', 4.7, 3.7, 8.3, 3.8, 3.7, 9.8, 3.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.1, 3.9, 'DNP', 2.6, 1.2, 'DNP', 'DNP', 'DNP', 0.7, 1.3, 'BYE', 1.6, 0.8, 0.8, 1.6, 0.3, 0.0, 1.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [7.6, 11.2, 'DNP', 7.2, 9.3, 'DNP', 'DNP', 'DNP', 6.0, 4.8, 'BYE', 6.7, 7.7, 5.7, 7.4, 7.3, 9.3, 6.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3049698.png",
    "name": "Anthony Firkser",
    "depthchart": "Backup: TE-2",
    "team": "Tennessee Titans",
    "projected": 3.2,
    "opponent": "Baltimore Ravens",
    "home_away": "",
    "opp_rank_Neg": 6,
    "team_rank_Neu": 23,
    "avg_fp2": 1.98,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 9.36,
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
    "headlineNews": "Anthony Firkser caught one pass for five yards in the Titans' Week 14 win over the Jaguars.\u00a0\n",
    "report": "",
    "analysis": "Firkser's second quarter grab was his lone reception. He was out-targeted by both Geoff Swaim and Jonnu Smith. Firkser will occasionally break out for 5-6 grabs, but it will be impossible to see coming in this three-man weave for tight end targets in Tennessee.\u00a0\n",
    "timestamp": "2020-12-13 10:58 PM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "BYE",
    "week05": "DNP",
    "week06": "DNP",
    "week07": "DNP",
    "week08": "DNP",
    "week09": "DNP",
    "week10": "DNP",
    "week11": "DNP",
    "week12": "DNP",
    "week13": "DNP",
    "week14": 1.0,
    "week15": 2.5,
    "week16": 1.6,
    "week17": "DNP",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
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
                         data: ['DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 1.0, 2.5, 1.6, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', -0.4, 4.1, -0.4, 'DNP', 3.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 1.3, 0.7, 0.5, 'DNP', 0.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 6.8, 6.9, 6.9, 'DNP', 7.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3123076.png",
    "name": "David Njoku",
    "depthchart": "Backup: TE-2",
    "team": "Cleveland Browns",
    "projected": 3.0,
    "opponent": "Pittsburgh Steelers",
    "home_away": "at ",
    "opp_rank_Neg": 3,
    "team_rank_Neg": 24,
    "avg_fp2": 3.29,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 7.01,
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
    "headlineNews": "David Njoku (knee) is active for Week 15 against the Giants.\n",
    "report": "",
    "analysis": "As is Austin Hooper. Njoku has been sprinkling in with Hooper and Harrison Bryant in the Browns' two-tight end sets. It's a committee that's worth avoiding in standard-sized leagues.\n",
    "timestamp": "2020-12-21 12:03 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 12.5,
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": 1.1,
    "week06": 1.2,
    "week07": 9.0,
    "week08": 2.4,
    "week09": "BYE",
    "week10": 0.0,
    "week11": 0.0,
    "week12": 0.0,
    "week13": 1.0,
    "week14": 6.0,
    "week15": 2.7,
    "week16": 4.6,
    "week17": 2.3,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.5, 'DNP', 'DNP', 'DNP', 1.1, 1.2, 9.0, 2.4, 'BYE', 0.0, 0.0, 0.0, 1.0, 6.0, 2.7, 4.6, 2.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.3, 'DNP', 'DNP', 'DNP', 1.7, 1.5, 11.5, 6.5, 'BYE', 3.0, 1.6, 4.3, 5.9, 2.2, 5.1, 6.2, 3.3, 3.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.0, 'DNP', 'DNP', 'DNP', 1.3, 2.0, 1.1, 0.7, 'BYE', 1.7, 1.1, 0.0, 0.5, 0.0, 1.7, 0.0, 5.3, 0.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.7, 'DNP', 'DNP', 'DNP', 11.7, 12.5, 10.2, 11.0, 'BYE', 11.6, 10.1, 9.0, 8.0, 7.6, 10.5, 9.0, 11.0, 9.7]
                    }
                    
                    ]
               }
            }];



$scope.positionDST = [{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/TB.png",
    "name": "Tampa Bay Buccaneers",
    "depthchart": "",
    "team": "Tampa Bay Buccaneers",
    "projected": 9.6,
    "opponent": "Washington Football Team",
    "opp_rank_pts": 25,
    "opp_avg_pts": 20.94,
    "home_away": "at ",
    "team_rank_allowed_pts": 8,
    "team_avg_allowed_pts": 22.19,
    "team_ranked_takeaways": 15,
    "team_avg_takeaways": 1.31,
    "opp_ranked_giveaways": 31,
    "opp_avg_giveaways": 1.69,
    "fanduelSalary": "$4300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#D50A0A",
    "tmColorDark": "#000000",
    "tmTextLite": "#D50A0A",
    "tmColorLite_rgba": "rgba(213, 10, 10, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Carlton Davis (groin) is active for the Wild Card Round against the Washington Football Team.\n",
    "report": "",
    "analysis": "Davis missed Weeks 16 and 17. With Terry McLaurin at less than 100 percent health as he battles an ankle injury with journeyman\u00a0Taylor Heinicke under center, Davis might not have to do much in his return to the lineup.\u00a0\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 7.31,
    "week01": 0.0,
    "week02": 14.0,
    "week03": 16.0,
    "week04": 6.0,
    "week05": 6.0,
    "week06": 19.0,
    "week07": 6.0,
    "week08": 7.0,
    "week09": 1.0,
    "week10": 5.0,
    "week11": 4.0,
    "week12": 4.0,
    "week13": "BYE",
    "week14": 9.0,
    "week15": 3.0,
    "week16": 12.0,
    "week17": 5.0,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 14.0, 16.0, 6.0, 6.0, 19.0, 6.0, 7.0, 1.0, 5.0, 4.0, 4.0, 'BYE', 9.0, 3.0, 12.0, 5.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.1, 7.2, 6.7, 8.3, 7.8, 5.2, 6.5, 9.1, 5.3, 7.6, 8.0, 6.7, 'BYE', 6.5, 6.2, 6.4, 7.1, 9.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.4, 1.2, 1.0, 1.9, 1.5, 1.2, 0.7, 2.3, 1.8, 1.0, 1.0, 1.2, 'BYE', 1.0, 1.4, 0.1, 0.8, 0.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(213, 10, 10, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.0, 15.0, 14.4, 15.6, 15.0, 14.8, 14.7, 15.6, 15.8, 14.5, 15.2, 14.7, 'BYE', 14.9, 14.5, 15.4, 14.1, 14.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/PIT.png",
    "name": "Pittsburgh Steelers",
    "depthchart": "",
    "team": "Pittsburgh Steelers",
    "projected": 7.3,
    "opponent": "Cleveland Browns",
    "opp_rank_pts": 14,
    "opp_avg_pts": 25.38,
    "home_away": "",
    "team_rank_allowed_pts": 3,
    "team_avg_allowed_pts": 19.62,
    "team_ranked_takeaways": 19,
    "team_avg_takeaways": 1.25,
    "opp_ranked_giveaways": 10,
    "opp_avg_giveaways": 1.19,
    "fanduelSalary": "$4800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#000000",
    "tmTextLite": "#FFB612",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/pit.png",
    "headlineNews": "Steelers placed CB Joe Haden on the reserve/COVID-19 list.\n",
    "report": "",
    "analysis": "Haden tested positive and won't play in Sunday's regular season finale. He'll be away from the team for a minimum of 10 days, meaning he's unlikely to be available for the first round of the playoffs. The Steelers should run more three-safety looks with Haden out.\u00a0Second-year CB Justin Layne has played the most snaps behind Haden.\u00a0\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 8.5,
    "week01": 8.0,
    "week02": 13.0,
    "week03": 7.0,
    "week04": "BYE",
    "week05": 8.0,
    "week06": 18.0,
    "week07": 2.0,
    "week08": 12.0,
    "week09": 7.0,
    "week10": 12.0,
    "week11": 17.0,
    "week12": 8.0,
    "week13": 3.0,
    "week14": 6.0,
    "week15": 2.0,
    "week16": 9.0,
    "week17": 4.0,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.0, 13.0, 7.0, 'BYE', 8.0, 18.0, 2.0, 12.0, 7.0, 12.0, 17.0, 8.0, 3.0, 6.0, 2.0, 9.0, 4.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.9, 7.8, 8.4, 'BYE', 8.0, 7.8, 4.6, 6.1, 7.4, 7.0, 8.1, 5.4, 8.8, 5.8, 8.7, 6.9, 8.9, 7.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.9, 1.7, 2.1, 'BYE', 2.8, 1.1, 1.9, 1.9, 1.9, 2.1, 2.3, 3.3, 2.7, 2.3, 3.3, 1.7, 2.0, 2.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.7, 14.9, 14.7, 'BYE', 14.8, 14.9, 13.7, 15.0, 14.8, 14.7, 14.3, 14.6, 14.8, 14.4, 15.1, 15.1, 14.2, 14.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/WAS.png",
    "name": "Washington Football Team",
    "depthchart": "",
    "team": "Washington Football Team",
    "projected": 7.2,
    "opponent": "Tampa Bay Buccaneers",
    "opp_rank_pts": 3,
    "opp_avg_pts": 30.75,
    "home_away": "",
    "team_rank_allowed_pts": 4,
    "team_avg_allowed_pts": 20.56,
    "team_ranked_takeaways": 7,
    "team_avg_takeaways": 1.44,
    "opp_ranked_giveaways": 16,
    "opp_avg_giveaways": 1.25,
    "fanduelSalary": "$3700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#773141",
    "tmTextLite": "#FFB612",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(119, 49, 65, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png",
    "headlineNews": "Washington Football Team LB\u00a0Thomas Davis has announced Sunday will be his final regular season game.\u00a0\n",
    "report": "",
    "analysis": "37-year-old Davis originally\u00a0planned to retire following the 2019 season, but he changed his mind. Injuries have helped limit Davis to only 137 snaps in 2020, his 16th season. A 2015 first-team All-Pro, Davis' career has been one of a few huge years, injury comebacks and occasionally questionable hits. Davis\u00a0lacks a Hall-of-Fame\u00a0r\u00e9sum\u00e9, but his longevity will probably\u00a0at least make it a conversation.\u00a0\n",
    "timestamp": "",
    "source": "Tom Pelissero on Twitter ",
    "game_day_logo": "",
    "avg_fp2": 6.81,
    "week01": 13.0,
    "week02": 4.0,
    "week03": 1.0,
    "week04": 4.0,
    "week05": 2.0,
    "week06": 6.0,
    "week07": 17.0,
    "week08": "BYE",
    "week09": 5.0,
    "week10": 0.0,
    "week11": 12.0,
    "week12": 9.0,
    "week13": 3.0,
    "week14": 11.0,
    "week15": 3.0,
    "week16": 9.0,
    "week17": 10.0,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [13.0, 4.0, 1.0, 4.0, 2.0, 6.0, 17.0, 'BYE', 5.0, 0.0, 12.0, 9.0, 3.0, 11.0, 3.0, 9.0, 10.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.8, 5.8, 6.7, 5.3, 6.5, 5.4, 5.5, 'BYE', 6.0, 5.1, 7.1, 4.9, 5.6, 5.1, 5.9, 6.3, 6.6, 7.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.2, 1.1, 0.9, 0.4, 0.0, 1.2, 2.4, 'BYE', 1.4, 0.8, 1.3, 1.2, 1.7, 1.3, 0.9, 1.2, 0.7, 1.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.6, 11.7, 11.7, 11.2, 12.6, 11.4, 11.7, 'BYE', 11.5, 10.8, 11.1, 11.4, 11.9, 11.0, 11.4, 11.3, 11.7, 11.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/SEA.png",
    "name": "Seattle Seahawks",
    "depthchart": "",
    "team": "Seattle Seahawks",
    "projected": 7.0,
    "opponent": "Los Angeles Rams",
    "opp_rank_pts": 22,
    "opp_avg_pts": 23.25,
    "home_away": "",
    "team_rank_allowed_pts": 15,
    "team_avg_allowed_pts": 23.31,
    "team_ranked_takeaways": 15,
    "team_avg_takeaways": 1.31,
    "opp_ranked_giveaways": 22,
    "opp_avg_giveaways": 1.5,
    "fanduelSalary": "$3600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#69BE28",
    "tmColorDark": "#002244",
    "tmTextLite": "#69BE28",
    "tmColorLite_rgba": "rgba(105, 190, 40, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
    "headlineNews": "Seahawks S Jamal Adams said he needs offseason surgery on his shoulder and fingers.\n",
    "report": "",
    "analysis": "Adams has a torn labrum and broken fingers. He played through his injuries for the Seahawks' playoff push, but Adams wasn't as effective in 2020 as he typically is due to his shoulder. He'll need to get healthy and return to playing elite ball in 2021 for the Seahawks to overcome some of the talent that's walking out the door this offseason. Seattle essentially sold their future to acquire Adams.\n",
    "timestamp": "",
    "source": "John Boyle on Twitter",
    "game_day_logo": "",
    "avg_fp2": 6.31,
    "week01": 4.0,
    "week02": 3.0,
    "week03": 11.0,
    "week04": 5.0,
    "week05": 7.0,
    "week06": "BYE",
    "week07": 0.0,
    "week08": 7.0,
    "week09": 3.0,
    "week10": 5.0,
    "week11": 5.0,
    "week12": 9.0,
    "week13": 7.0,
    "week14": 12.0,
    "week15": 9.0,
    "week16": 9.0,
    "week17": 5.0,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
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
                         data: [4.0, 3.0, 11.0, 5.0, 7.0, 'BYE', 0.0, 7.0, 3.0, 5.0, 5.0, 9.0, 7.0, 12.0, 9.0, 9.0, 5.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.7, 6.5, 6.8, 5.6, 6.4, 'BYE', 5.0, 7.0, 6.4, 6.0, 7.7, 6.3, 7.3, 8.3, 6.7, 6.5, 7.0, 7.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.1, 1.7, 2.2, 1.2, 1.2, 'BYE', 0.6, 0.7, 0.0, 2.2, 0.0, 1.2, 1.5, 1.6, 2.2, 1.1, 1.5, 1.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.4, 15.6, 15.8, 14.2, 13.9, 'BYE', 13.4, 14.3, 12.4, 13.7, 15.0, 14.6, 15.6, 14.9, 14.3, 13.8, 14.4, 14.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/IND.png",
    "name": "Indianapolis Colts",
    "depthchart": "",
    "team": "Indianapolis Colts",
    "projected": 6.5,
    "opponent": "Buffalo Bills",
    "opp_rank_pts": 2,
    "opp_avg_pts": 31.31,
    "home_away": "at ",
    "team_rank_allowed_pts": 11,
    "team_avg_allowed_pts": 22.5,
    "team_ranked_takeaways": 15,
    "team_avg_takeaways": 1.31,
    "opp_ranked_giveaways": 28,
    "opp_avg_giveaways": 1.62,
    "fanduelSalary": "$3900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#014683",
    "tmColorDark": "#002C5F",
    "tmTextLite": "#FFFFFF",
    "tmColorLite_rgba": "rgba(1, 70, 131, 0.2)",
    "tmColorDark_rgba": "rgba(0, 44, 95, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png",
    "headlineNews": "Colts DT DeForest Buckner (ankle) is active for Saturday's Wild Card game against Buffalo.\n",
    "report": "",
    "analysis": "Buckner will continue to play through an ankle injury that\u00a0limited him down the stretch. The Colts' inactives are QB Jacob Eason, OT Will Holden, WR Dezmon Paton, TE Noah Togiai, DE Ben Banogu, and CB Rock Ya-Sin.\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 7.38,
    "week01": 4.0,
    "week02": 19.0,
    "week03": 14.0,
    "week04": 7.0,
    "week05": 11.0,
    "week06": 6.0,
    "week07": "BYE",
    "week08": 9.0,
    "week09": 4.0,
    "week10": 2.0,
    "week11": 8.0,
    "week12": -3.0,
    "week13": 12.0,
    "week14": 6.0,
    "week15": 10.0,
    "week16": 0.0,
    "week17": 9.0,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.0, 19.0, 14.0, 7.0, 11.0, 6.0, 'BYE', 9.0, 4.0, 2.0, 8.0, -3.0, 12.0, 6.0, 10.0, 0.0, 9.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.8, 6.8, 8.6, 5.9, 6.5, 8.2, 'BYE', 6.8, 6.9, 4.4, 6.3, 6.9, 6.1, 5.6, 7.8, 6.0, 8.2, 6.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.4, 1.2, 0.2, 2.7, 0.1, 1.5, 'BYE', 1.0, 1.3, 1.3, 1.1, 1.4, 1.1, 0.4, 1.4, 1.3, 1.9, 0.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.9, 12.2, 12.3, 14.1, 13.2, 12.9, 'BYE', 13.9, 12.7, 11.9, 12.3, 13.1, 12.7, 12.3, 12.5, 13.1, 14.0, 11.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/NO.png",
    "name": "New Orleans Saints",
    "depthchart": "",
    "team": "New Orleans Saints",
    "projected": 6.4,
    "opponent": "Chicago Bears",
    "opp_rank_pts": 22,
    "opp_avg_pts": 23.25,
    "home_away": "",
    "team_rank_allowed_pts": 5,
    "team_avg_allowed_pts": 21.06,
    "team_ranked_takeaways": 27,
    "team_avg_takeaways": 1.0,
    "opp_ranked_giveaways": 5,
    "opp_avg_giveaways": 1.06,
    "fanduelSalary": "$4600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#9b845c",
    "tmColorDark": "#101820",
    "tmTextLite": "#9b845c",
    "tmColorLite_rgba": "rgba(155, 132, 92, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
    "headlineNews": "Saints activated CB\u00a0Patrick Robinson (hamstring) from injured reserve.\u00a0\n",
    "report": "",
    "analysis": "The nickel man was limited to seven 2020 appearances as he battled continual hamstring woes. With the Saints' secondary finally at full strength, Robinson figures to mix in for 25-30 snaps against the Bears.\u00a0\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 7.5,
    "week01": 11.0,
    "week02": 4.0,
    "week03": -3.0,
    "week04": 4.0,
    "week05": 3.0,
    "week06": "BYE",
    "week07": 1.0,
    "week08": 7.0,
    "week09": 16.0,
    "week10": 14.0,
    "week11": 16.0,
    "week12": 14.0,
    "week13": 6.0,
    "week14": 2.0,
    "week15": 7.0,
    "week16": 1.0,
    "week17": 17.0,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
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
                         data: [11.0, 4.0, -3.0, 4.0, 3.0, 'BYE', 1.0, 7.0, 16.0, 14.0, 16.0, 14.0, 6.0, 2.0, 7.0, 1.0, 17.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.3, 4.7, 4.5, 5.3, 6.4, 'BYE', 4.9, 7.2, 5.4, 5.7, 6.1, 6.0, 6.1, 6.2, 6.2, 4.9, 7.5, 6.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.5, 0.4, 1.0, 0.6, 0.4, 'BYE', 1.1, 0.4, 1.0, 0.2, 0.4, 2.7, 5.8, 0.5, 2.3, 0.0, 0.4, 0.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(155, 132, 92, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.5, 11.4, 12.6, 12.8, 10.9, 'BYE', 12.1, 12.7, 13.2, 12.1, 12.1, 14.8, 16.5, 12.6, 13.3, 14.4, 12.0, 12.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/LA.png",
    "name": "Los Angeles Rams",
    "depthchart": "",
    "team": "Los Angeles Rams",
    "projected": 5.9,
    "opponent": "Seattle Seahawks",
    "opp_rank_pts": 8,
    "opp_avg_pts": 28.56,
    "home_away": "at ",
    "team_rank_allowed_pts": 1,
    "team_avg_allowed_pts": 18.5,
    "team_ranked_takeaways": 7,
    "team_avg_takeaways": 1.44,
    "opp_ranked_giveaways": 10,
    "opp_avg_giveaways": 1.19,
    "fanduelSalary": "$4900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmTextLite": "#866D4B",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Rams DT\u00a0Aaron Donald was forced from Los Angeles' Wild Card game against the Seahawks with a rib injury.\n",
    "report": "",
    "analysis": "Deemed \"questionable,\" Donald seemed close to returning several times but never did check back in. He was almost single-handedly wrecking the Seahawks' offense before getting injured in the third quarter. He will probably be out there with added mid-section protection for the Divisional Round, but how effective he might be is anyone's guess.\u00a0\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 7.56,
    "week01": 4.0,
    "week02": 5.0,
    "week03": 4.0,
    "week04": 11.0,
    "week05": 12.0,
    "week06": 0.0,
    "week07": 12.0,
    "week08": 4.0,
    "week09": "BYE",
    "week10": 13.0,
    "week11": 5.0,
    "week12": 9.0,
    "week13": 5.0,
    "week14": 15.0,
    "week15": 2.0,
    "week16": 6.0,
    "week17": 14.0,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.0, 5.0, 4.0, 11.0, 12.0, 0.0, 12.0, 4.0, 'BYE', 13.0, 5.0, 9.0, 5.0, 15.0, 2.0, 6.0, 14.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.5, 6.5, 6.4, 7.8, 8.4, 6.9, 6.4, 5.2, 'BYE', 6.4, 6.3, 7.5, 7.4, 6.7, 10.2, 5.6, 7.6, 5.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.4, 0.4, 0.8, 1.7, 0.2, 0.6, 0.3, 0.9, 'BYE', 1.1, 1.5, 1.1, 1.5, 0.0, 0.6, 0.0, 0.6, 0.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.2, 13.3, 14.8, 15.4, 14.4, 14.8, 14.0, 14.2, 'BYE', 13.7, 14.7, 14.6, 14.0, 15.4, 12.9, 13.9, 13.4, 14.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/CLE.png",
    "name": "Cleveland Browns",
    "depthchart": "",
    "team": "Cleveland Browns",
    "projected": 5.8,
    "opponent": "Pittsburgh Steelers",
    "opp_rank_pts": 12,
    "opp_avg_pts": 25.88,
    "home_away": "at ",
    "team_rank_allowed_pts": 19,
    "team_avg_allowed_pts": 25.81,
    "team_ranked_takeaways": 22,
    "team_avg_takeaways": 1.12,
    "opp_ranked_giveaways": 24,
    "opp_avg_giveaways": 1.56,
    "fanduelSalary": "$4000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#FF3C00",
    "tmColorDark": "#311D00",
    "tmTextLite": "#FF3C00",
    "tmColorLite_rgba": "rgba(255, 60, 0, 0.2)",
    "tmColorDark_rgba": "rgba(49, 29, 0, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
    "headlineNews": "Browns placed S Ronnie Harrison on the reserve/COVID-19 list.\u00a0\n",
    "report": "",
    "analysis": "This could explain why the team canceled practice Thursday. Harrison returned for the team's Week 17 win over the Steelers after an extended absence after spraining his shoulder, making six tackles in the victory. Already without key players like\u00a0LG Joel\u00a0Bitonio and OL Nick Harris, the Browns will be without Harrison for their playoff game against the Steelers. Things could get ugly for the Browns on Sunday.\u00a0\n",
    "timestamp": "",
    "source": "Mary Kay Cabot on Twitter ",
    "game_day_logo": "",
    "avg_fp2": 5.19,
    "week01": -2.0,
    "week02": 4.0,
    "week03": 14.0,
    "week04": 5.0,
    "week05": 7.0,
    "week06": 1.0,
    "week07": 7.0,
    "week08": 3.0,
    "week09": "BYE",
    "week10": 6.0,
    "week11": 14.0,
    "week12": 0.0,
    "week13": 5.0,
    "week14": 2.0,
    "week15": 8.0,
    "week16": 6.0,
    "week17": 3.0,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [-2.0, 4.0, 14.0, 5.0, 7.0, 1.0, 7.0, 3.0, 'BYE', 6.0, 14.0, 0.0, 5.0, 2.0, 8.0, 6.0, 3.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.6, 6.5, 7.5, 4.4, 6.0, 5.1, 5.6, 7.5, 'BYE', 6.1, 7.3, 6.2, 3.2, 5.9, 5.8, 6.4, 7.1, 5.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.3, 1.0, 1.1, 1.6, 1.4, 0.0, 0.9, 0.0, 'BYE', 0.9, 1.1, 1.4, 0.7, 0.7, 1.2, 1.1, 1.0, 1.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.5, 11.8, 11.8, 12.7, 11.3, 13.6, 11.2, 10.3, 'BYE', 11.9, 10.4, 11.7, 11.0, 11.1, 11.6, 11.7, 11.7, 11.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/BUF.png",
    "name": "Buffalo Bills",
    "depthchart": "",
    "team": "Buffalo Bills",
    "projected": 5.6,
    "opponent": "Indianapolis Colts",
    "opp_rank_pts": 9,
    "opp_avg_pts": 27.81,
    "home_away": "",
    "team_rank_allowed_pts": 16,
    "team_avg_allowed_pts": 23.44,
    "team_ranked_takeaways": 13,
    "team_avg_takeaways": 1.38,
    "opp_ranked_giveaways": 10,
    "opp_avg_giveaways": 1.19,
    "fanduelSalary": "$4100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#005596",
    "tmTextLite": "#FFFFFF",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 85, 150, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
    "headlineNews": "Bills activated\u00a0LB Matt Milano (chest) from injured reserve.\n",
    "report": "",
    "analysis": "He'll\u00a0be eligible to play immediately on Monday night against the Niners. Coach Sean McDermott mentioned earlier in the week that LB A.J. Klein has been filling in with aplomb for\u00a0Milano since Week 9, perhaps leaving the door open to run the latter for minimal snaps as he works his way back from injury. Monday would\u00a0be Milano's sixth appearance this season.\n",
    "timestamp": "",
    "source": "Chris Brown on Twitter",
    "game_day_logo": "",
    "avg_fp2": 6.0,
    "week01": 6.0,
    "week02": 2.0,
    "week03": 5.0,
    "week04": 6.0,
    "week05": -4.0,
    "week06": 1.0,
    "week07": 14.0,
    "week08": 4.0,
    "week09": 12.0,
    "week10": 6.0,
    "week11": "BYE",
    "week12": 6.0,
    "week13": 4.0,
    "week14": 6.0,
    "week15": 6.0,
    "week16": 7.0,
    "week17": 15.0,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
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
                         data: [6.0, 2.0, 5.0, 6.0, -4.0, 1.0, 14.0, 4.0, 12.0, 6.0, 'BYE', 6.0, 4.0, 6.0, 6.0, 7.0, 15.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.4, 8.7, 7.4, 6.3, 4.9, 4.8, 6.5, 6.4, 5.8, 4.8, 'BYE', 3.8, 4.9, 5.3, 8.3, 4.9, 6.5, 5.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.1, 1.2, 1.4, 0.0, 1.1, 0.7, 1.0, 0.0, 0.4, 0.0, 'BYE', 0.6, 0.7, 0.6, 1.0, 0.8, 0.5, 0.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.5, 14.4, 15.2, 12.2, 13.8, 13.8, 14.1, 14.3, 13.2, 13.1, 'BYE', 13.5, 13.4, 13.7, 14.4, 13.3, 13.8, 13.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/BAL.png",
    "name": "Baltimore Ravens",
    "depthchart": "",
    "team": "Baltimore Ravens",
    "projected": 5.1,
    "opponent": "Tennessee Titans",
    "opp_rank_pts": 4,
    "opp_avg_pts": 30.69,
    "home_away": "at ",
    "team_rank_allowed_pts": 2,
    "team_avg_allowed_pts": 18.94,
    "team_ranked_takeaways": 7,
    "team_avg_takeaways": 1.44,
    "opp_ranked_giveaways": 16,
    "opp_avg_giveaways": 1.25,
    "fanduelSalary": "$4200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#9E7C0C",
    "tmColorDark": "#241773",
    "tmTextLite": "#9E7C0C",
    "tmColorLite_rgba": "rgba(158, 124, 12, 0.2)",
    "tmColorDark_rgba": "rgba(36, 23, 115, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png",
    "headlineNews": "The Athletic's Jeff Zrebiec reports the\u00a0Ravens are interested in signing DE Derek Wolfe to an extension.\n",
    "report": "",
    "analysis": "Signed to a one-year, $3 million deal this offseason,\u00a0Wolfe has 49 tackles, a\u00a0sack, and six TFLs on a 58% snap share. It's a step back from Wolfe's 2019, but\u00a0the Ravens may look to re-sign him on another team-friendly deal.\u00a0Wolfe has said\u00a0he'd \"love to stay\" in Baltimore.\n",
    "timestamp": "",
    "source": "The Athletic",
    "game_day_logo": "",
    "avg_fp2": 7.12,
    "week01": 11.0,
    "week02": 7.0,
    "week03": 7.0,
    "week04": 6.0,
    "week05": 20.0,
    "week06": 5.0,
    "week07": "BYE",
    "week08": 4.0,
    "week09": 8.0,
    "week10": 1.0,
    "week11": 3.0,
    "week12": 8.0,
    "week13": 3.0,
    "week14": 0.0,
    "week15": 10.0,
    "week16": 10.0,
    "week17": 11.0,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.0, 7.0, 7.0, 6.0, 20.0, 5.0, 'BYE', 4.0, 8.0, 1.0, 3.0, 8.0, 3.0, 0.0, 10.0, 10.0, 11.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.3, 7.0, 7.7, 7.8, 10.0, 7.1, 'BYE', 8.2, 6.3, 6.6, 7.8, 5.0, 9.3, 6.9, 8.3, 8.8, 7.4, 5.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.2, 2.7, 1.9, 3.9, 2.2, 1.3, 'BYE', 4.4, 0.8, 0.6, 0.0, 0.9, 1.7, 2.2, 3.4, 3.3, 1.9, 1.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.1, 16.7, 15.3, 16.4, 16.0, 14.0, 'BYE', 19.1, 14.2, 15.0, 13.9, 16.4, 12.9, 14.1, 16.6, 16.6, 14.2, 15.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/CHI.png",
    "name": "Chicago Bears",
    "depthchart": "",
    "team": "Chicago Bears",
    "projected": 5.0,
    "opponent": "New Orleans Saints",
    "opp_rank_pts": 5,
    "opp_avg_pts": 30.12,
    "home_away": "at ",
    "team_rank_allowed_pts": 14,
    "team_avg_allowed_pts": 23.12,
    "team_ranked_takeaways": 7,
    "team_avg_takeaways": 1.44,
    "opp_ranked_giveaways": 31,
    "opp_avg_giveaways": 1.69,
    "fanduelSalary": "$3700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#c36835",
    "tmColorDark": "#0B162A",
    "tmTextLite": "#c36835",
    "tmColorLite_rgba": "rgba(195, 104, 53, 0.2)",
    "tmColorDark_rgba": "rgba(11, 22, 42, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png",
    "headlineNews": "Bears CBs Jaylon Johnson (shoulder) is questionable for the Wild Card game against New Orleans.\n",
    "report": "",
    "analysis": "As is Roquan Smith despite neither player being able to practice throughout the week. Slot CB Buster Skrine meanwhile has already been ruled out. The Bears, universally listed as 10.5-point road dogs for Sunday, are expected to be extremely shorthanded on defense in the worst imaginable spot against Alvin Kamara and Michael Thomas, both who are expected to be back at full strength.\n",
    "timestamp": "",
    "source": "Chicago Bears PR on Twitter",
    "game_day_logo": "",
    "avg_fp2": 5.69,
    "week01": 3.0,
    "week02": 14.0,
    "week03": 4.0,
    "week04": 2.0,
    "week05": 6.0,
    "week06": 9.0,
    "week07": 11.0,
    "week08": 1.0,
    "week09": 3.0,
    "week10": 12.0,
    "week11": "BYE",
    "week12": -4.0,
    "week13": 3.0,
    "week14": 17.0,
    "week15": 5.0,
    "week16": 6.0,
    "week17": -1.0,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.0, 14.0, 4.0, 2.0, 6.0, 9.0, 11.0, 1.0, 3.0, 12.0, 'BYE', -4.0, 3.0, 17.0, 5.0, 6.0, -1.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.1, 7.3, 6.1, 6.1, 7.9, 6.8, 5.3, 6.4, 4.1, 7.2, 'BYE', 4.9, 8.2, 6.5, 6.7, 8.6, 5.2, 5.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.5, 3.8, 1.6, 1.7, 1.4, 2.4, 1.2, 0.6, 0.5, 0.6, 'BYE', 0.0, 0.3, 1.2, 1.3, 2.4, 1.9, 1.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  "rgba(195, 104, 53, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.1, 14.4, 15.6, 14.5, 14.5, 14.4, 12.9, 12.8, 15.2, 12.1, 'BYE', 16.5, 12.1, 14.3, 14.5, 14.5, 14.9, 15.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/TEN.png",
    "name": "Tennessee Titans",
    "depthchart": "",
    "team": "Tennessee Titans",
    "projected": 4.7,
    "opponent": "Baltimore Ravens",
    "opp_rank_pts": 7,
    "opp_avg_pts": 28.88,
    "home_away": "",
    "team_rank_allowed_pts": 24,
    "team_avg_allowed_pts": 27.44,
    "team_ranked_takeaways": 28,
    "team_avg_takeaways": 0.94,
    "opp_ranked_giveaways": 5,
    "opp_avg_giveaways": 1.06,
    "fanduelSalary": "$3400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#4495D1",
    "tmColorDark": "#002A5C",
    "tmTextLite": "#4495D1",
    "tmColorLite_rgba": "rgba(68, 149, 209, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 92, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png",
    "headlineNews": "Titans CB Adoree' Jackson (knee) is questionable for Week 15 against the Lions.\n",
    "report": "",
    "analysis": "Jackson hasn't played all year and only got in limited practices this week. He's likely to be ruled out on Sunday, but he does seem closer to making his 2020 debut. The speedy corner needs his knee at near 100% to be effective.\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 4.0,
    "week01": 3.0,
    "week02": 5.0,
    "week03": 7.0,
    "week04": "BYE",
    "week05": 8.0,
    "week06": 2.0,
    "week07": 6.0,
    "week08": -1.0,
    "week09": 8.0,
    "week10": 0.0,
    "week11": 3.0,
    "week12": 10.0,
    "week13": -2.0,
    "week14": 8.0,
    "week15": 6.0,
    "week16": -1.0,
    "week17": 2.0,
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
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
                         data: [3.0, 5.0, 7.0, 'BYE', 8.0, 2.0, 6.0, -1.0, 8.0, 0.0, 3.0, 10.0, -2.0, 8.0, 6.0, -1.0, 2.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.9, 7.2, 5.7, 'BYE', 6.1, 6.1, 5.7, 6.4, 6.4, 4.5, 5.3, 4.4, 4.8, 6.8, 5.9, 4.1, 5.2, 4.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.9, 0.6, 1.3, 'BYE', 0.0, 1.6, 0.5, 0.3, 0.9, 0.2, 0.0, 0.0, 0.0, 2.1, 0.8, 0.6, 0.7, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.2, 12.9, 13.5, 'BYE', 13.7, 12.6, 13.3, 13.1, 13.6, 12.5, 13.3, 10.6, 13.3, 14.2, 13.8, 13.9, 13.8, 11.6]
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