var App = angular.module('footballApp', ['tc.chartjs']);

App.controller('positionController', function($scope, $http) {

  //JSON data for position and players

/*********************** PASTE AFTER HERE ************************/

$scope.currentDate = {"currentDate": "Wednesday, 20 October 2021 10:07 AM (central time)"};
$scope.week = {"nflWeek": "7"};
$scope.playoffLogo = {"src": ""}

$scope.qbStartSit = {"one": "Aaron Rodgers", "two": "Patrick Mahomes", "three": "Ryan Tannehill", "four": "Matt Ryan", "five": "Sam Darnold", "six": "Davis Mills", "seven": "Baker Mayfield", "eight": "Mac Jones", "nine": "Geno Smith", "ten": "Derek Carr"};
$scope.rbStartSit = {"one": "Alvin Kamara", "two": "Darrell Henderson", "three": "Derrick Henry", "four": "Josh Jacobs", "five": "James Conner", "six": "D'Ernest Johnson", "seven": "Khalil Herbert", "eight": "Melvin Gordon", "nine": "Alex Collins", "ten": "Devontae Booker"};
$scope.wrStartSit = {"one": "Davante Adams", "two": "Tyreek Hill", "three": "Calvin Ridley", "four": "Deebo Samuel", "five": "Marquez Callaway", "six": "Kenny Golladay", "seven": "DeVonta Smith", "eight": "Henry Ruggs", "nine": "Jakobi Meyers", "ten": "Terry McLaurin"};
$scope.teStartSit = {"one": "C.J. Uzomah", "two": "Kyle Pitts", "three": "Anthony Firkser", "four": "Zach Ertz", "five": "Cole Kmet", "six": "Jordan Akins", "seven": "Austin Hooper", "eight": "Mo Alie-Cox", "nine": "Ricky Seals-Jones", "ten": "Evan Engram"};
$scope.kStartSit = {"one": "Nick Folk", "two": "Matt Gay", "three": "Mason Crosby", "four": "Younghoe Koo", "five": "Cody Parkey", "six": "Jordan Akins", "seven": "Austin Hooper", "eight": "Mo Alie-Cox", "nine": "Ricky Seals-Jones", "ten": "Evan Engram"};
$scope.dstStartSit = {"one": "Arizona Cardinals", "two": "Indianapolis Colts", "three": "Tennessee Titans", "four": "New England Patriots", "five": "Green Bay Packers", "six": "San Francisco 49ers", "seven": "Philadelphia Eagles", "eight": "Washington Football Team", "nine": "Las Vegas Raiders", "ten": "Cleveland Browns"};

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
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3917315.png",
    "name": "Kyler Murray",
    "depthchart": "Starter: QB-1",
    "team": "Arizona Cardinals",
    "projected": 24.7,
    "opponent": "Houston Texans",
    "home_away": "",
    "opp_rank_Neu": 18,
    "team_rank_Neu": 9,
    "avg_fp2": 25.21,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 20.63,
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
    "headlineNews": "Kyler Murray completed 20-of-30 passes for 229 yards and four touchdowns in the Cardinals' 37-14, Week 6 win over the Browns.\n",
    "report": "",
    "analysis": "Murray picked the Browns apart through the air to the extent that he got to spend the final minutes of the game on the bench. His biggest issue was not the Cleveland defense but the loss of center Rodney Hudson. Max Garcia started in place of Hudson and the two were not on the same page throughout the game. Garcia fired a shotgun snap into Murray's shoulder when the third-year passer wasn't ready, resulting in a 14-yard loss in the red zone. Murray fumbled the exchange on another snap later in the game. Beyond those issues, Murray was impeccable. Interestingly, he only registered six rushing yards. He has failed to top 30 yards on the ground in every game this year after surpassing that mark in all but five games in 2020. Murray is playing lights out as a passer so his lack of rushing production has been negligible from a fantasy perspective. However, it lowers both his floor and his ceiling for the Cardinals' Week 7 date with the Texans.\u00a0\n",
    "timestamp": "2021-10-18 12:02 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 34.56,
    "week02": 35.1,
    "week03": 19.54,
    "week04": 22.62,
    "week05": 13.66,
    "week06": 25.76,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [34.56, 35.1, 19.54, 22.62, 13.66, 25.76]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [19.3, 20.6, 27.2, 22.9, 25.3, 17.8, 24.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [11.7, 14.5, 25.9, 21.2, 21.9, 18.4, 17.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [28.7, 31.0, 33.3, 29.1, 29.3, 27.2, 33.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3139477.png",
    "name": "Patrick Mahomes",
    "depthchart": "Starter: QB-1",
    "team": "Kansas City Chiefs",
    "projected": 24.1,
    "opponent": "Tennessee Titans",
    "home_away": "at ",
    "opp_rank_Pos": 24,
    "team_rank_Pos": 2,
    "avg_fp2": 26.98,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 22.79,
    "fanduelSalary": "$8800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Patrick Mahomes completed 32-of-47 passes for 397 yards, two touchdowns, and two interceptions in the Chiefs' Week 6 win against Washington.\u00a0\n",
    "report": "",
    "analysis": "Mahomes' final stat line is deceiving, as he and the Kansas City offense struggled mightily in the first half against a Football Team defense that's offered little resistance this season. After throwing two first half picks -- neither of them his fault -- Mahomes turned it up in the second half, methodically picking apart Washington's marshmallow soft secondary even as Tyreek Hill (quad) and Travis Kelce (arm) came in and out of the KC lineup. Mahomes and the KC offense continue to flounder but for fantasy purposes, the Big Three are as reliable as ever. Mahomes gets another burnable secondary next week when the Chiefs take on the Titans.\u00a0\n",
    "timestamp": "2021-10-17 08:15 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 33.28,
    "week02": 25.02,
    "week03": 24.9,
    "week04": 32.72,
    "week05": 20.98,
    "week06": 24.98,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [33.28, 25.02, 24.9, 32.72, 20.98, 24.98]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [19.4, 21.3, 19.6, 20.0, 18.2, 25.2, 24.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [16.6, 18.7, 14.4, 18.6, 20.3, 27.1, 22.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [32.3, 33.7, 24.9, 24.4, 29.4, 32.5, 31.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/12483.png",
    "name": "Matthew Stafford",
    "depthchart": "Starter: QB-1",
    "team": "Los Angeles Rams",
    "projected": 23.2,
    "opponent": "Detroit Lions",
    "home_away": "",
    "opp_rank_Neu": 19,
    "team_rank_Pos": 4,
    "avg_fp2": 22.69,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 19.4,
    "fanduelSalary": "$8100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Matthew Stafford has 17 pass attempts inside the 10 yard line, the fourth most this season.\u00a0\n",
    "report": "",
    "analysis": "Only Tom Brady, Josh Allen, and Patrick Mahomes have more. Six of Stafford's 16 touchdown tosses this year have come inside the 10, as head coach Sean McVay continues running a pass-heavy offense near the goal line. That kind of opportunity near the end zone should serve Stafford and his pass catchers well as the season wears on. No quarterback has more passing yardage of touchdowns in the red zone than Stafford. Brady and Stafford could be the last pure pocket passers to profile as top-flight fantasy options.\u00a0\n",
    "timestamp": "2021-10-18 01:35 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 24.34,
    "week02": 18.22,
    "week03": 29.52,
    "week04": 20.3,
    "week05": 17.5,
    "week06": 26.24,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [24.34, 18.22, 29.52, 20.3, 17.5, 26.24]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.4, 19.6, 26.3, 22.1, 25.0, 21.1, 23.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [10.0, 12.8, 17.5, 12.4, 15.7, 14.2, 18.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [25.5, 23.2, 27.4, 22.6, 23.5, 24.7, 28.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3916387.png",
    "name": "Lamar Jackson",
    "depthchart": "Starter: QB-1",
    "team": "Baltimore Ravens",
    "projected": 22.4,
    "opponent": "Cincinnati Bengals",
    "home_away": "",
    "opp_rank_Neu": 13,
    "team_rank_Neu": 11,
    "avg_fp2": 24.61,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 16.37,
    "fanduelSalary": "$8400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9E7C0C",
    "tmColorDark": "#241773",
    "tmColorLite_rgba": "rgba(158, 124, 12, 0.2)",
    "tmColorDark_rgba": "rgba(36, 23, 115, 0.2)",
    "tmTextLite": "#9E7C0C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png",
    "headlineNews": "Lamar Jackson completed 19-of-27 passes for 167 yards, one touchdown and two interceptions in the Ravens' 34-6, Week 6 win over the Chargers, adding eight carries for 51 additional yards.\u00a0\n",
    "report": "",
    "analysis": "Jackson was electrifying on the short week coming off Monday night's stirring victory over the Colts, but it was his trio of elderly running backs in Latavius Murray, Le'Veon Bell and Devonta Freeman who got the fantasy glory. With Ty'Son Williams healthy scratched, each of the Ravens' \"Old Three\" found the end zone. The Chargers have a soft run defense by design, and Lamar's dual-threat opens up massive holes. Jackson's score was a nine-yard strike to Mark Andrews. His first interception was a truly awful throw where he didn't see the linebacker dropping back over the middle of the field. His second was Rashod Bateman's fault, with the rookie letting a perfect pass bounce up into the air for a pick. Running as hot as anyone in the league right now, Jackson gets a divisional test in Week 7 vs. the Bengals.\u00a0\n",
    "timestamp": "2021-10-17 08:01 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 18.0,
    "week02": 34.26,
    "week03": 20.28,
    "week04": 19.44,
    "week05": 41.88,
    "week06": 13.78,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [18.0, 34.26, 20.28, 19.44, 41.88, 13.78]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.5, 21.5, 27.9, 17.4, 23.0, 22.9, 22.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.5, 17.6, 29.3, 17.1, 16.4, 20.2, 25.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [24.5, 32.3, 38.8, 26.2, 24.1, 28.2, 29.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2330.png",
    "name": "Tom Brady",
    "depthchart": "Starter: QB-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 22.3,
    "opponent": "Chicago Bears",
    "home_away": "",
    "opp_rank_Neu": 8,
    "team_rank_Pos": 1,
    "avg_fp2": 25.88,
    "opp_rank_allowed_fp2_Neu": 9,
    "opp_avg_allowed_fp2": 17.24,
    "fanduelSalary": "$8000",
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
    "game_day_logo": "",
    "week01": 29.16,
    "week02": 29.64,
    "week03": 28.68,
    "week04": 11.06,
    "week05": 37.74,
    "week06": 18.98,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(163, 29, 47, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [29.16, 29.64, 28.68, 11.06, 37.74, 18.98]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [19.4, 23.1, 19.5, 19.0, 21.0, 21.1, 22.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [10.5, 9.6, 12.1, 10.4, 13.4, 16.6, 17.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(163, 29, 47, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [27.8, 27.5, 19.8, 19.2, 20.7, 26.4, 24.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4040715.png",
    "name": "Jalen Hurts",
    "depthchart": "Starter: QB-1",
    "team": "Philadelphia Eagles",
    "projected": 21.0,
    "opponent": "Las Vegas Raiders",
    "home_away": "at ",
    "opp_rank_Neu": 10,
    "team_rank_Neu": 23,
    "avg_fp2": 25.2,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 17.47,
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
    "game_day_logo": "",
    "week01": 28.76,
    "week02": 21.8,
    "week03": 22.54,
    "week04": 28.18,
    "week05": 23.92,
    "week06": 26.0,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [28.76, 21.8, 22.54, 28.18, 23.92, 26.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.3, 22.6, 25.0, 23.7, 20.4, 24.4, 21.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.9, 5.2, 17.8, 27.3, 18.8, 22.1, 26.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.8, 30.2, 31.7, 31.2, 27.6, 25.0, 31.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16757.png",
    "name": "Derek Carr",
    "depthchart": "Starter: QB-1",
    "team": "Las Vegas Raiders",
    "projected": 19.8,
    "opponent": "Philadelphia Eagles",
    "home_away": "",
    "opp_rank_Neg": 5,
    "team_rank_Pos": 3,
    "avg_fp2": 19.44,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 17.97,
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
    "headlineNews": "Derek Carr completed 18-of-27 passes for 341 yards and two touchdowns in Las Vegas' 34-24 Week 6 blowout over the Broncos.\n",
    "report": "",
    "analysis": "Carr made the Broncos pay for leaning on man coverage against him, completing five passes of 30-plus yards including completions of 51, 49, 40, 33, and 31 yards throughout play. He cerebrally\u00a0opened the game with a 48-yard touchdown strike to\u00a0Henry Ruggs\u00a0and, later, hit Ruggs for a 40-yard gain to set up Josh Jacobs' rumbling three-yard\u00a0score. It was easily Carr's most efficient performance through the air this year and best since he passed for 386 yards in Las Vegas' Week 3 win over Miami. Carr can be trusted as a high-end streaming option yet again in Week 8 against the Eagles.\n",
    "timestamp": "2021-10-18 12:28 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 25.0,
    "week02": 24.18,
    "week03": 22.24,
    "week04": 15.44,
    "week05": 8.24,
    "week06": 21.54,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [25.0, 24.18, 22.24, 15.44, 8.24, 21.54]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.1, 21.2, 23.3, 21.6, 22.5, 16.5, 19.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [8.4, 8.4, 16.2, 13.3, 12.7, 14.8, 13.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [23.6, 23.2, 23.6, 21.1, 20.3, 21.2, 20.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3915511.png",
    "name": "Joe Burrow",
    "depthchart": "Starter: QB-1",
    "team": "Cincinnati Bengals",
    "projected": 19.8,
    "opponent": "Baltimore Ravens",
    "home_away": "at ",
    "opp_rank_Pos": 25,
    "team_rank_Neu": 18,
    "avg_fp2": 19.5,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 18.15,
    "fanduelSalary": "$7200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#ea7330",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(234, 115, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#ea7330",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png",
    "headlineNews": "Joe Burrow completed 19-of-29 passes for 271 yards, three touchdowns, and one interception in the Bengals' 34-11, Week 6 win over the Lions, adding five carries for 20 additional yards.\n",
    "report": "",
    "analysis": "Burrow's day ended with over 8:30 left in the 4th quarter, as the Bengals absolutely demolished the Lions. His day was actually stronger than his numbers suggest. Burrow was at his best connecting deep with Ja'Marr Chase, who he hit deep twice, including for a 53 yarder. Burrow's interception bounced off of Chase's hands. It wasn't a perfect throw, but the interception wasn't on Burrow. The second year quarterback is hitting his stride and looks like a low end QB1 against the Ravens in Week 7.\n",
    "timestamp": "2021-10-17 09:27 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 18.64,
    "week02": 13.28,
    "week03": 18.58,
    "week04": 22.32,
    "week05": 20.34,
    "week06": 23.84,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [18.64, 13.28, 18.58, 22.32, 20.34, 23.84]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.5, 18.0, 16.4, 19.4, 20.8, 18.3, 19.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.6, 9.8, 14.7, 13.2, 13.0, 11.7, 19.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.0, 27.3, 15.2, 22.6, 21.7, 17.3, 26.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14876.png",
    "name": "Ryan Tannehill",
    "depthchart": "Starter: QB-1",
    "team": "Tennessee Titans",
    "projected": 19.5,
    "opponent": "Kansas City Chiefs",
    "home_away": "",
    "opp_rank_Pos": 25,
    "team_rank_Neg": 27,
    "avg_fp2": 16.66,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 25.62,
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
    "headlineNews": "Ryan Tannehill completed 18-of-29 passes for 216 scoreless yards and one interception in the Titans' 34-31, Week 6 win over the Bills, adding a four-yard rushing touchdown.\n",
    "report": "",
    "analysis": "Tannehill's interception was a pass thrown way too late to A.J. Brown in the first half. With both Brown and Julio Jones banged up and in and out of the lineup all season, Tannehill's numbers leave a lot to be desired. It's been all Derrick Henry for the Titans the last five weeks, with five straight 100-yard games and three three-touchdown rushing outings. Tannehill simply isn't needed with Henry running it so well. Tannehill, however, did chip in with a four-yard rushing score of his own on an RPO. He's likely going to need to do more with his arm next week against the Chiefs.\n",
    "timestamp": "2021-10-19 04:11 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 15.18,
    "week02": 14.58,
    "week03": 23.48,
    "week04": 18.82,
    "week05": 13.98,
    "week06": 13.94,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [15.18, 14.58, 23.48, 18.82, 13.98, 13.94]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.8, 12.3, 18.6, 16.1, 18.0, 15.2, 19.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [8.5, 12.0, 11.5, 11.9, 16.7, 12.5, 13.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [23.0, 21.4, 22.0, 20.6, 23.4, 18.6, 19.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3912547.png",
    "name": "Sam Darnold",
    "depthchart": "Starter: QB-1",
    "team": "Carolina Panthers",
    "projected": 18.8,
    "opponent": "New York Giants",
    "home_away": "at ",
    "opp_rank_Neu": 22,
    "team_rank_Neu": 15,
    "avg_fp2": 20.47,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 22.46,
    "fanduelSalary": "$7700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0085CA",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 133, 202, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#0085CA",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/car.png",
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "source": "",
    "game_day_logo": "",
    "week01": 18.96,
    "week02": 19.9,
    "week03": 25.26,
    "week04": 33.54,
    "week05": 9.08,
    "week06": 16.08,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [18.96, 19.9, 25.26, 33.54, 9.08, 16.08]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.1, 16.0, 20.0, 22.0, 20.6, 19.0, 18.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [8.1, 2.6, 9.5, 4.1, 16.2, 12.7, 9.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 133, 202, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [22.6, 19.9, 13.6, 14.6, 21.8, 20.7, 14.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16760.png",
    "name": "Jimmy Garoppolo",
    "depthchart": "Starter: QB-1",
    "team": "San Francisco 49ers",
    "projected": 18.7,
    "opponent": "Indianapolis Colts",
    "home_away": "",
    "opp_rank_Neu": 20,
    "team_rank_Neu": 18,
    "avg_fp2": 14.9,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 22.27,
    "fanduelSalary": "$7200",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Calf",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "Jimmy Garoppolo (calf) returned to practice Monday.\n",
    "report": "",
    "analysis": "Garoppolo was sidelined for the 49ers' Week 5 outing with the Cardinals and then rested up during San Francisco's Week 6 bye. Barring any setbacks, it appears he'll be able to play versus the Colts this week. Trey Lance is dealing with a knee sprain and was not spotted at practice. If he is unable to back up Garoppolo, Nate Sudfeld will serve as the 49ers' QB2 for a second time this year. The return of Garoppolo will give the passing game a boost and keep Deebo Samuel, who is averaging 109.6 receiving yards per game this year, in the WR1 conversation.\n",
    "timestamp": "2021-10-18 06:38 PM",
    "source": "Cam Inman on Twitter",
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "week01": 14.76,
    "week02": 19.56,
    "week03": 15.68,
    "week04": 9.6,
    "week05": "DNP",
    "week06": "BYE",
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.76, 19.56, 15.68, 9.6, 'DNP', 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.3, 15.8, 21.7, 19.4, 'DNP', 'BYE', 18.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [13.1, 4.6, 17.6, 13.4, 'DNP', 'BYE', 20.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [24.0, 18.5, 24.5, 18.9, 'DNP', 'BYE', 23.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/11237.png",
    "name": "Matt Ryan",
    "depthchart": "Starter: QB-1",
    "team": "Atlanta Falcons",
    "projected": 18.7,
    "opponent": "Miami Dolphins",
    "home_away": "at ",
    "opp_rank_Pos": 29,
    "team_rank_Neu": 14,
    "avg_fp2": 18.58,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 21.33,
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
    "headlineNews": "Matt Ryan completed 33-of-45 passes for 342 yards and two touchdowns in the Falcons' Week 5 win over the Jets.\n",
    "report": "",
    "analysis": "Ryan threw both of his touchdowns in the first half, a pair of red-zone throws to Kyle Pitts and Hayden Hurst. The Jets' pass rush struggled to generate any pressure, making it an easy day for Ryan and the offense.\u00a0Ryan has rebounded from a slow start, averaging 289 yards with an 8:0 TD/INT ratio over the last three games. The Falcons (2-3) travel to Miami after their Week 6 bye.\u00a0\n",
    "timestamp": "2021-10-10 04:57 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 7.36,
    "week02": 19.3,
    "week03": 15.62,
    "week04": 29.02,
    "week05": 21.58,
    "week06": "BYE",
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.36, 19.3, 15.62, 29.02, 21.58, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [19.6, 16.3, 14.0, 20.1, 15.1, 'BYE', 18.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [10.5, 9.5, 10.7, 15.2, 13.9, 'BYE', 16.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [23.6, 27.3, 19.2, 21.9, 23.6, 'BYE', 26.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3917792.png",
    "name": "Daniel Jones",
    "depthchart": "Starter: QB-1",
    "team": "New York Giants",
    "projected": 18.3,
    "opponent": "Carolina Panthers",
    "home_away": "",
    "opp_rank_Neg": 2,
    "team_rank_Neu": 10,
    "avg_fp2": 17.84,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 20.24,
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
    "headlineNews": "Daniel Jones completed 29-of-51 passes for 242 yards and three interceptions in the Giants' 38-11, Week 6 loss to the Rams.\n",
    "report": "",
    "analysis": "Jones also lost a fumble after getting stripped in the pocket in the first half. He added just four yards on the ground. It was a horrible outing for Jones in a number of ways. His play was poor and the Rams had a read on his throws all day. He also lost his left tackle Andrew Thomas to an ankle injury early in the game and took four sacks. On top of that, Kadarius Toney and C.J. Board, who was going to play meaningful reps, both left the game with injuries. The bulk of Jones' fantasy production came on two throwaway drives at the end of the game. The Giants ran the ball twice on their final pair of drives, generating 20 Jones pass attempts. Jones gets a difficult matchup with the Panthers next week. Carolina entered Week 6 allowing the fewest passing yards per game. Jones will be a middling QB2 option against their stout secondary.\u00a0\n",
    "timestamp": "2021-10-17 08:55 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 21.38,
    "week02": 29.46,
    "week03": 16.54,
    "week04": 27.78,
    "week05": 4.82,
    "week06": 7.08,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [21.38, 29.46, 16.54, 27.78, 4.82, 7.08]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.1, 15.9, 23.8, 16.2, 23.7, 19.9, 18.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.9, 7.5, 8.6, 6.7, 13.8, 8.5, 8.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.7, 24.6, 22.0, 18.3, 24.6, 24.3, 19.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16728.png",
    "name": "Teddy Bridgewater",
    "depthchart": "Starter: QB-1",
    "team": "Denver Broncos",
    "projected": 18.2,
    "opponent": "Cleveland Browns",
    "home_away": "at ",
    "opp_rank_Neu": 9,
    "team_rank_Neu": 13,
    "avg_fp2": 16.86,
    "opp_rank_allowed_fp2_Pos": 30,
    "opp_avg_allowed_fp2": 23.35,
    "fanduelSalary": "$7200",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Foot",
    "tmColorLite": "#e17757",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(225, 119, 87, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#e17757",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/den.png",
    "headlineNews": "Broncos coach Vic Fangio said he \"expects\" Teddy Bridgewater to start in Week 7 against the Browns.\n",
    "report": "",
    "analysis": "Bridgewater, banged up after taking nine sacks against Las Vegas' front-seven, sounds healthy enough to turn around for Thursday. Even so, Denver's ongoing three-game losing streak could leave him as the scapegoat if the team can't put together drives against Cleveland's injury-riddled defense. It's not a matchup to target in fantasy whether it's Drew Lock or Bridgewater under center.\n",
    "timestamp": "2021-10-20 04:37 AM",
    "source": "Kyle Newman on Twitter",
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/uqzgq9urghrlu89ckqsm",
    "week01": 20.46,
    "week02": 21.22,
    "week03": 11.8,
    "week04": 6.8,
    "week05": 19.62,
    "week06": 21.26,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [20.46, 21.22, 11.8, 6.8, 19.62, 21.26]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.5, 20.0, 18.0, 20.4, 17.9, 16.9, 18.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.6, 7.0, 17.9, 12.0, 10.0, 13.7, 9.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(225, 119, 87, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.4, 17.1, 22.1, 16.7, 19.0, 19.1, 14.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4241479.png",
    "name": "Tua Tagovailoa",
    "depthchart": "Starter: QB-1",
    "team": "Miami Dolphins",
    "projected": 18.0,
    "opponent": "Atlanta Falcons",
    "home_away": "",
    "opp_rank_Neu": 14,
    "team_rank_Neg": 28,
    "avg_fp2": 13.35,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 22.3,
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
    "headlineNews": "Tua Tagovailoa completed 33-of-47 passes for 329 yards with two touchdowns and an interception in Miami's Week 6 loss to the Jaguars.\n",
    "report": "",
    "analysis": "Making his first start since Week 2, Tua wasn't limited by his fractured ribs, firing off a season-high in pass attempts. His 22 rushing yards were also the most he's had this year. Both of Tua's touchdowns went to Jaylen Waddle, who he targeted a team-high 13 times with Preston Williams, DeVante Parker, and Will Fuller all sidelined. Miami's pass offense looked better with Tua this week, but that was to be expected against a bad Jaguars secondary. A matchup with the Falcons in Week 7\u00a0is another great spot for Tua, who should get at least one of Williams or Parker back.\n",
    "timestamp": "2021-10-17 06:48 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 17.18,
    "week02": 0.52,
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": 22.36,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [17.18, 0.52, 'DNP', 'DNP', 'DNP', 22.36]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.8, 13.2, 'DNP', 'DNP', 'DNP', 16.3, 18.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [9.1, 7.9, 'DNP', 'DNP', 'DNP', 9.2, 1.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 142, 151, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [23.9, 21.7, 'DNP', 'DNP', 'DNP', 10.5, 4.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/8439.png",
    "name": "Aaron Rodgers",
    "depthchart": "Starter: QB-1",
    "team": "Green Bay Packers",
    "projected": 17.9,
    "opponent": "Washington Football Team",
    "home_away": "",
    "opp_rank_Pos": 32,
    "team_rank_Neu": 21,
    "avg_fp2": 19.54,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 27.61,
    "fanduelSalary": "$7900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#d7a017",
    "tmColorDark": "#203731",
    "tmColorLite_rgba": "rgba(215, 160, 23, 0.2)",
    "tmColorDark_rgba": "rgba(32, 55, 49, 0.2)",
    "tmTextLite": "#d7a017",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png",
    "headlineNews": "Aaron Rodgers has completed 37.2 percent of his pass attempts while under pressure this season, the fourth lowest rate in the league.\u00a0\n",
    "report": "",
    "analysis": "Rodgers' struggles while facing pressure have continued into the 2021 season -- only rookies Zach Wilson, Justin Fields, and Trey Lance have been more inaccurate when under pressure through six weeks. Last season, Rodgers completed 45.3 percent of his under-pressure passes, the 12th lowest rate among NFL starters. Thankfully for Rodgers drafters, he's seen pressure on a mere 28.3 percent of his 2021 drop backs and the Packers play a Washington defense that hasn't made life difficult for opposing quarterbacks in 2021.\u00a0\n",
    "timestamp": "2021-10-18 02:40 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 3.32,
    "week02": 26.8,
    "week03": 18.54,
    "week04": 24.12,
    "week05": 20.76,
    "week06": 23.7,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.32, 26.8, 18.54, 24.12, 20.76, 23.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.5, 15.5, 16.0, 14.5, 16.6, 14.5, 17.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [11.6, 15.5, 22.0, 24.3, 17.3, 16.4, 26.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [29.3, 28.3, 29.2, 28.6, 22.2, 25.8, 31.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2573079.png",
    "name": "Carson Wentz",
    "depthchart": "Starter: QB-1",
    "team": "Indianapolis Colts",
    "projected": 17.3,
    "opponent": "San Francisco 49ers",
    "home_away": "at ",
    "opp_rank_Neu": 9,
    "team_rank_Neu": 16,
    "avg_fp2": 17.03,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 21.3,
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
    "headlineNews": "Carson Wentz completed 11-of-20 passes for 223 yards and two touchdowns in Indianapolis' 31-3 Week 6 victory over the Texans.\u00a0\n",
    "report": "",
    "analysis": "103 of the 223 yards came on two deep balls: a 51-yard strike to Parris Campbell for a touchdown, and a 52-yard catch by T.Y. Hilton to set up a field goal. Wentz looked comfortable attacking the Cover-2 seams and busted coverages, but continued to look sluggish under pressure. He will be hard sell QB2 as the Colts take on San Francisco in Week 7.\u00a0\n",
    "timestamp": "2021-10-17 09:59 PM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "week01": 18.34,
    "week02": 18.58,
    "week03": 7.76,
    "week04": 17.92,
    "week05": 22.58,
    "week06": 17.02,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [18.34, 18.58, 7.76, 17.92, 22.58, 17.02]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [19.0, 17.9, 21.5, 16.4, 16.6, 20.1, 17.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [10.4, 11.2, 12.4, 12.2, 11.9, 12.6, 19.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [23.2, 24.5, 16.4, 18.8, 18.8, 20.8, 25.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3052587.png",
    "name": "Baker Mayfield",
    "depthchart": "Starter: QB-1",
    "team": "Cleveland Browns",
    "projected": 15.1,
    "opponent": "Denver Broncos",
    "home_away": "",
    "opp_rank_Neu": 11,
    "team_rank_Neg": 26,
    "avg_fp2": 15.76,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 15.3,
    "fanduelSalary": "$6700",
    "hasStatus": "Status",
    "healthDou": "Doubtful",
    "injury": "Shoulder - Labrum",
    "tmColorLite": "#FF3C00",
    "tmColorDark": "#311D00",
    "tmColorLite_rgba": "rgba(255, 60, 0, 0.2)",
    "tmColorDark_rgba": "rgba(49, 29, 0, 0.2)",
    "tmTextLite": "#FF3C00",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
    "headlineNews": "Browns ruled out QB Baker Mayfield for Thursday night's game against the Broncos.\n",
    "report": "",
    "analysis": "Mayfield had expressed optimism that he would play against Denver, but the quarterback is dealing with a torn labrum in his left shoulder and was unable to get where he needed to on a short week. Mayfield will have an additional 10 days to prepare for the Steelers in Week 8.\u00a0Case Keenum will start on Thursday. With Nick Chubb and Kareem Hunt out and with Odell Beckham banged up, the Browns have the decked stacked against them in Week 7.\n",
    "timestamp": "2021-10-20 02:52 PM",
    "source": "Adam Schefter on Twitter",
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/uqzgq9urghrlu89ckqsm",
    "week01": 13.64,
    "week02": 18.52,
    "week03": 16.94,
    "week04": 9.3,
    "week05": 23.0,
    "week06": 13.16,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [13.64, 18.52, 16.94, 9.3, 23.0, 13.16]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.2, 16.8, 16.3, 19.5, 14.6, 12.8, 15.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [10.4, 9.4, 16.2, 17.9, 13.2, 14.6, 14.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [22.0, 24.9, 20.7, 23.1, 21.2, 20.8, 20.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4362887.png",
    "name": "Justin Fields",
    "depthchart": "Starter: QB-1",
    "team": "Chicago Bears",
    "projected": 14.9,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "at ",
    "opp_rank_Pos": 27,
    "team_rank_Neg": 32,
    "avg_fp2": 7.75,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 22.86,
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
    "headlineNews": "Justin Fields completed 16-of-27 passes for 174 yards, one touchdown, and one interception in the Bears' 24-14, Week 6 loss to the Packers.\n",
    "report": "",
    "analysis": "He rushed six times for 43 yards, which is actually his best rushing output of the season. The upside just hasn't been there for Fields. He's averaging just 140.5 passing yards per game as a starter with a 2:2 TD:INT mark and 3.75-17-0 as a runner per week. His touchdown in this one was a short hookup with Darnell Mooney. Fields had an open Allen Robinson deep earlier in the game for a would-be touchdown but was under intense pressure and couldn't make the throw. Fields is well off the fantasy radar ahead of a Week 7 date with the Bucs in Tampa Bay.\n",
    "timestamp": "2021-10-17 08:38 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 6.7,
    "week02": 4.5,
    "week03": 3.92,
    "week04": 8.26,
    "week05": 8.84,
    "week06": 14.26,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.7, 4.5, 3.92, 8.26, 8.84, 14.26]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.9, 3.6, 15.0, 13.4, 11.6, 10.7, 14.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 8.2, 6.8, 6.4, 7.7, 5.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  "rgba(195, 104, 53, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [6.6, 9.8, 22.9, 18.4, 17.4, 20.1, 13.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3046779.png",
    "name": "Jared Goff",
    "depthchart": "Starter: QB-1",
    "team": "Detroit Lions",
    "projected": 14.7,
    "opponent": "Los Angeles Rams",
    "home_away": "at ",
    "opp_rank_Neu": 21,
    "team_rank_Neg": 25,
    "avg_fp2": 15.25,
    "opp_rank_allowed_fp2_Neu": 14,
    "opp_avg_allowed_fp2": 18.44,
    "fanduelSalary": "$6700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0076B6",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(0, 118, 182, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#0076B6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/det.png",
    "headlineNews": "Lions head coach Dan Campbell said Jared Goff \"needs to step up more than he has\" after the team's blowout Week 6 loss to the Bengals.\u00a0\n",
    "report": "",
    "analysis": "Goff's performance against the Bengals was catastrophic from start to finish, tallying a meager 202 yards on 42 attempts. He missed an open T.J. Hockensen for an easy touchdown and didn't see a wide open D'Andre Swift on a fourth down in the second half. Goff has been as bad as advertised through six weeks. Campbell was insistent after Detroit's Week 6 loss that he never considered benching Goff for David Blough, but he'll eventually have little choice in the matter unless Goff improves in the coming weeks. With an abysmal adjusted yards per attempt of 3.74 -- about half of his career mark -- Goff is a ten-ton anchor around the neck of the entire Lions offense. Detroit has not played a single snap with the lead through six games.\u00a0\n",
    "timestamp": "2021-10-18 02:19 PM",
    "source": "MLive.com ",
    "game_day_logo": "",
    "week01": 29.92,
    "week02": 19.44,
    "week03": 9.08,
    "week04": 16.76,
    "week05": 7.12,
    "week06": 9.18,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [29.92, 19.44, 9.08, 16.76, 7.12, 9.18]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.0, 21.2, 27.4, 15.9, 17.2, 17.5, 14.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [9.1, 9.6, 13.5, 16.3, 13.3, 7.4, 8.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 118, 182, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [25.0, 24.0, 20.2, 21.4, 17.9, 15.3, 17.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2969939.png",
    "name": "Jameis Winston",
    "depthchart": "Starter: QB-1",
    "team": "New Orleans Saints",
    "projected": 14.6,
    "opponent": "Seattle Seahawks",
    "home_away": "at ",
    "opp_rank_Pos": 28,
    "team_rank_Neg": 31,
    "avg_fp2": 18.66,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 19.4,
    "fanduelSalary": "$7500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9b845c",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(155, 132, 92, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#9b845c",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
    "headlineNews": "Jameis Winston completed 15-of-30 passes for 279 yards and four touchdowns in the Saints' Week 5 win against Washington.\u00a0\n",
    "report": "",
    "analysis": "Winston added 26 yards on six rushes against a Washington defense that lacked effort throughout the game. When he wasn't being scolded by head coach Sean Payton on the sideline, Winston was hitting big downfield plays, including a 72-yard TD to Deonte Harris and a Hail Mary completion as time expired in the first half. He averaged 18.6 yards per completion against a Football Team secondary that seemed confused in basic coverage situations. Winston hasn't been a reliable fantasy option this year, but getting Michael Thomas back from IR in the coming weeks should be a boon for the volatile passer.\u00a0\n",
    "timestamp": "2021-10-10 08:56 PM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mpx0s6jwjrjbhfw9rfol",
    "week01": 29.62,
    "week02": 10.34,
    "week03": 13.52,
    "week04": 13.04,
    "week05": 26.76,
    "week06": "BYE",
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [29.62, 10.34, 13.52, 13.04, 26.76, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.3, 18.1, 11.6, 18.7, 18.7, 'BYE', 14.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.8, 9.0, 11.7, 14.3, 18.2, 'BYE', 13.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(155, 132, 92, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [25.7, 24.9, 16.1, 19.3, 22.9, 'BYE', 17.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4241464.png",
    "name": "Mac Jones",
    "depthchart": "Starter: QB-1",
    "team": "New England Patriots",
    "projected": 14.3,
    "opponent": "New York Jets",
    "home_away": "",
    "opp_rank_Neu": 15,
    "team_rank_Neu": 19,
    "avg_fp2": 13.91,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 15.72,
    "fanduelSalary": "$6800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#C60C30",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png",
    "headlineNews": "Mac Jones completed 15-of-21 passes for 229 yards, two touchdowns and an interception in the Patriots' 35-29, Week 6 overtime loss to the Cowboys.\u00a0\n",
    "report": "",
    "analysis": "Although the yards were Jones' fewest since Week 2, the two-touchdown effort was just his second. 75/1 of Jones' production came on a stunning 75-yard touchdown strike to Kendrick Bourne with 2:11 remaining. Bourne used a double move to get by Trevon Diggs, and Jones did not miss as the safety arrived too late. The score came mere seconds after Diggs victimized Jones for what could have been a game-sealing pick six. Jones was too high to Bourne over the middle of the field, and Diggs made him pay. Jones has shown more good than bad as he game manages for a rebuilding team, but it is not translating to streamer value in fantasy. That being said, the Jets are a mouthwatering superflex matchup for Week 7.\u00a0\n",
    "timestamp": "2021-10-18 12:09 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 15.24,
    "week02": 7.44,
    "week03": 14.6,
    "week04": 17.9,
    "week05": 12.54,
    "week06": 15.76,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [15.24, 7.44, 14.6, 17.9, 12.54, 15.76]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.8, 15.1, 11.0, 18.5, 15.8, 16.8, 14.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 8.8, 5.6, 8.8, 10.2, 8.5, 13.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.3, 22.2, 16.5, 20.8, 22.3, 21.5, 17.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4242546.png",
    "name": "Davis Mills",
    "depthchart": "Starter: QB-1",
    "team": "Houston Texans",
    "projected": 12.8,
    "opponent": "Arizona Cardinals",
    "home_away": "at ",
    "opp_rank_Neg": 6,
    "team_rank_Neg": 29,
    "avg_fp2": 10.06,
    "opp_rank_allowed_fp2_Neu": 7,
    "opp_avg_allowed_fp2": 16.53,
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
    "headlineNews": "Davis Mills completed 29-of-43 passes for 243 yards and two interceptions in Houston's 31-3 Week 6 loss to Indianapolis.\u00a0\n",
    "report": "",
    "analysis": "Mills' first pick was a backbreaker for the Texans, handing the ball to the Colts in Houston territory already down by seven. Indianapolis quickly capitalized and put the Texans in the crockpot on low for the rest of the second half. The stats don't look half-bad, but Mills shriveled up in Indianapolis territory and was quickly pressured on a key fourth-and-short late in the third quarter. He'll be for the QB-desperate at best against the Cardinals in Week 7.\u00a0\n",
    "timestamp": "2021-10-17 09:28 PM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": 6.98,
    "week03": 10.72,
    "week04": -0.32,
    "week05": 24.68,
    "week06": 8.22,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 6.98, 10.72, -0.32, 24.68, 8.22]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 6.6, 16.5, 9.1, 11.2, 17.1, 12.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 0.0, 9.7, 8.1, 4.6, 10.8, 7.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 9.7, 22.5, 19.6, 16.4, 24.6, 19.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2565969.png",
    "name": "Taylor Heinicke",
    "depthchart": "Starter: QB-1",
    "team": "Washington Football Team",
    "projected": 12.2,
    "opponent": "Green Bay Packers",
    "home_away": "at ",
    "opp_rank_Neg": 4,
    "team_rank_Neg": 24,
    "avg_fp2": 17.43,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 19.32,
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
    "headlineNews": "Taylor Heinicke completed 24-of-39 attempts for 182 yards, a touchdown, and an interception in Washington's Week 6 loss to the Chiefs.\u00a0\n",
    "report": "",
    "analysis": "Heinicke managed to do the (seemingly) impossible: Underperform against a Chiefs defense that had allowed a 67.7 percent completion rate and 8.9 yards per pass attempt -- the league's third highest rate headed into Week 6. Heinicke didn't log a single rushing attempt after racking up 22 rushes in his first four starts this year. He extended plays against a feisty Kansas City pass rush but couldn't connect with Terry McLaurin on a couple deep shots that would have saved his fantasy day. Without a solid outing next week against the Packers, Heinicke could be well on his way to losing the starting gig to Ryan Fitzpatrick (hip), who could be cleared to return as soon as Week 7.\u00a0\n",
    "timestamp": "2021-10-17 09:14 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 10.58,
    "week02": 21.04,
    "week03": 22.88,
    "week04": 27.9,
    "week05": 11.92,
    "week06": 10.28,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.58, 21.04, 22.88, 27.9, 11.92, 10.28]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.4, 14.6, 11.7, 20.0, 18.0, 20.7, 12.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 16.4, 15.0, 0.0, 14.4, 25.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.8, 12.5, 23.5, 22.6, 2.3, 14.7, 25.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4361259.png",
    "name": "Zach Wilson",
    "depthchart": "Starter: QB-1",
    "team": "New York Jets",
    "projected": 11.5,
    "opponent": "New England Patriots",
    "home_away": "at ",
    "opp_rank_Neu": 16,
    "team_rank_Neg": 29,
    "avg_fp2": 11.58,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 18.36,
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
    "headlineNews": "Zach Wilson completed 19-of-32 passes for 192 yards with an interception in the Jets' Week 5 loss to the Falcons.\n",
    "report": "",
    "analysis": "Wilson took a step back after throwing for 297 yards and two touchdowns in a win over the Titans. It's the second time in three weeks he's thrown for under 200 yards and he's been held touchdownless in all but two games.\u00a0Wilson's supporting cast and offensive line are among the worst in the league. There's not much to be bullish on with Wilson right now but the Jets remain confident in his long-term outlook. Wilson and the Jets take on the Patriots when they return from a Week 6 bye. \u00a0\n",
    "timestamp": "2021-10-10 10:36 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 19.32,
    "week02": 6.3,
    "week03": 4.6,
    "week04": 18.68,
    "week05": 8.98,
    "week06": "BYE",
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [19.32, 6.3, 4.6, 18.68, 8.98, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.3, 15.5, 10.1, 15.4, 17.7, 'BYE', 11.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.4, 9.5, 6.2, 8.8, 10.0, 'BYE', 6.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  "rgba(18, 87, 64, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.0, 23.1, 17.6, 20.0, 20.7, 'BYE', 19.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15864.png",
    "name": "Geno Smith",
    "depthchart": "Starter: QB-1",
    "team": "Seattle Seahawks",
    "projected": 11.4,
    "opponent": "New Orleans Saints",
    "home_away": "",
    "opp_rank_Pos": 24,
    "team_rank_Neu": 22,
    "avg_fp2": 6.93,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 15.65,
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
    "headlineNews": "Seahawks head coach Pete Carroll said the team has reached out to Cam Newton.\u00a0\n",
    "report": "",
    "analysis": "\"We\u2019re talking to everybody that could help us,\u201d Carroll said when asked if the team had contacted Newton following Russell Wilson's Week 5 finger injury. Wilson is expected to miss the next month or so, at which points the Seahawks' 2021 season could effectively be over. Geno Smith, who threw for 209 yards and a touchdown in Week 6 against the Steelers, is probably a superior option to late-career Newton. Cam starting for Seattle would represent a marked downgrade for Tyler Lockett and D.K. Metcalf.\u00a0\n",
    "timestamp": "2021-10-18 05:04 PM",
    "source": "ProFootballTalk.com ",
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mpx0s6jwjrjbhfw9rfol",
    "week01": 0.0,
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": 10.54,
    "week06": 10.26,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 'DNP', 'DNP', 'DNP', 10.54, 10.26]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.5, 'DNP', 'DNP', 'DNP', 4.0, 16.4, 11.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 'DNP', 'DNP', 'DNP', 0.0, 8.6, 9.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [7.1, 'DNP', 'DNP', 'DNP', 1.5, 12.2, 12.7]
                    }
                    
                    ]
               }
            }];




$scope.positionRB = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3043078.png",
    "name": "Derrick Henry",
    "depthchart": "Starter: RB-1",
    "team": "Tennessee Titans",
    "projected": 22.4,
    "opponent": "Kansas City Chiefs",
    "home_away": "",
    "opp_rank_Pos": 27,
    "team_rank_Pos": 3,
    "avg_fp2": 27.02,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 23.08,
    "fanduelSalary": "$11000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#4495D1",
    "tmColorDark": "#002A5C",
    "tmColorLite_rgba": "rgba(68, 149, 209, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 92, 0.2)",
    "tmTextLite": "#4495D1",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png",
    "headlineNews": "Derrick Henry rushed 20 times for 143 yards and three touchdowns in the Titans' Week 6 win over the Bills Monday night.\n",
    "report": "",
    "analysis": "He added two catches for 13 yards, handling all 22 backfield touches after third-down back Jeremy McNichols aggravated his ankle injury on the opening drive and never returned. Henry was getting stuffed on his first handful of carries in this one but exploded up the middle, as the seas parted for him on a 76-yard second-quarter touchdown run. He reached a top speed of 21.8 MPH on the scamper. He looked like a freight train. Henry wasn't done there, adding a three-yard touchdown in the third frame before again scoring from 13 yards out in the fourth quarter to put the Titans up 34-31 with 3:05 left. It proved to be the game-winning score after the Bills stumbled late. Henry is in a class of his own at running back. He has five straight 100-yard games and three three-touchdown games in that span. He's the NFL's leading rusher by 260 yards. Henry gets the Chiefs' leaky defense in Week 7.\n",
    "timestamp": "2021-10-19 03:14 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 9.2,
    "week02": 44.7,
    "week03": 17.9,
    "week04": 24.7,
    "week05": 31.0,
    "week06": 34.6,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.2, 44.7, 17.9, 24.7, 31.0, 34.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.6, 13.6, 21.3, 21.5, 17.4, 18.4, 22.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.1, 0.0, 15.4, 23.7, 18.9, 9.2, 25.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [22.8, 15.8, 27.1, 30.6, 24.2, 21.6, 30.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3054850.png",
    "name": "Alvin Kamara",
    "depthchart": "Starter: RB-1",
    "team": "New Orleans Saints",
    "projected": 19.3,
    "opponent": "Seattle Seahawks",
    "home_away": "at ",
    "opp_rank_Pos": 30,
    "team_rank_Neu": 10,
    "avg_fp2": 15.92,
    "opp_rank_allowed_fp2_Pos": 30,
    "opp_avg_allowed_fp2": 27.07,
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
    "headlineNews": "Alvin Kamara had 16 rushes for 71 yards and a touchdown in the Saints' Week 5 win against Washington, adding five receptions for 51 yards and a touchdown.\u00a0\n",
    "report": "",
    "analysis": "Kamara calmed any and all fears stemming from his zero-target stat line in Week 4, returning to his shifty ways on designed screens from Jameis Winston. Kamara, who was tied for the team lead with eight targets on the day, often found himself wide open against a Football Team defense that seemed uninterested in covering anyone on Sunday. His red zone work was notable after Taysom Hill was carted to the New Orleans locker room with a concussion. A lengthy Hill absence could mark a massive shift in Kamara's fantasy fortunes going forward. The Saints head into their bye at 3-2, with a matchup against a Russell Wilson-less Seahawks team in Week 7.\u00a0\n",
    "timestamp": "2021-10-10 08:25 PM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mpx0s6jwjrjbhfw9rfol",
    "week01": 16.6,
    "week02": 5.0,
    "week03": 19.3,
    "week04": 12.0,
    "week05": 26.7,
    "week06": "BYE",
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [16.6, 5.0, 19.3, 12.0, 26.7, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.0, 12.7, 10.3, 15.3, 11.8, 'BYE', 19.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [11.4, 9.0, 1.9, 13.3, 10.6, 'BYE', 14.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(155, 132, 92, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [27.5, 31.1, 17.9, 20.3, 23.3, 'BYE', 24.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4039359.png",
    "name": "Darrell Henderson",
    "depthchart": "Starter: RB-1",
    "team": "Los Angeles Rams",
    "projected": 18.3,
    "opponent": "Detroit Lions",
    "home_away": "",
    "opp_rank_Pos": 26,
    "team_rank_Neu": 21,
    "avg_fp2": 17.02,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 29.62,
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
    "headlineNews": "Darrell Henderson rushed 21 times for 78 yards and a touchdown in the Rams' Week 6 win over the Giants, adding two receptions for 29 yards and a touchdown.\u00a0\n",
    "report": "",
    "analysis": "Henderson picked up his second touchdown of the day on a 25-yard floater from Matthew Stafford. He now has five scores in as many games. Henderson also has at least 16 touches in every game this year. Sony Michel earned nine carries and was not targeted. Henderson has cemented himself as a workhorse runner when healthy and gets the benefit of playing on a high-scoring offense. He should continue to post RB1 numbers in a dream fantasy matchup versus the Lions next week.\n",
    "timestamp": "2021-10-17 08:25 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 15.2,
    "week02": 15.7,
    "week03": "DNP",
    "week04": 14.1,
    "week05": 16.4,
    "week06": 23.7,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [15.2, 15.7, 'DNP', 14.1, 16.4, 23.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.6, 13.3, 'DNP', 15.2, 17.2, 14.7, 18.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 'DNP', 5.7, 3.1, 7.7, 7.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.0, 12.8, 'DNP', 15.3, 13.8, 18.2, 13.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4047365.png",
    "name": "Josh Jacobs",
    "depthchart": "Starter: RB-1",
    "team": "Las Vegas Raiders",
    "projected": 15.6,
    "opponent": "Philadelphia Eagles",
    "home_away": "",
    "opp_rank_Pos": 28,
    "team_rank_Neg": 30,
    "avg_fp2": 13.53,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 24.08,
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
    "headlineNews": "Josh Jacobs rushed 16 times for 53 yards and one score in Las Vegas' Week 6 win over the Raiders.\n",
    "report": "",
    "analysis": "He also hauled in his lone target for 29 yards. A new era under interim coach Rich Bisaccia began with Peyton Barber getting healthy-scratched pre-game, allowing Jacobs to handle 17-of-25 backfield touches including 16-of-21 running back carries over Kenyan Drake, who sat up like the Undertaker for six touches and two scores as Las Vegas' primary receiving back. A touchdown-or-bust option suddenly handling the lion's share of touches in his last three games, Jacobs can continue to be dispersed as a low-end RB2 to mask for byes in Week 7 against the Eagles.\n",
    "timestamp": "2021-10-18 02:05 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 16.5,
    "week02": "DNP",
    "week03": "DNP",
    "week04": 8.2,
    "week05": 14.7,
    "week06": 14.7,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [16.5, 'DNP', 'DNP', 8.2, 14.7, 14.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.5, 'DNP', 'DNP', 13.9, 12.5, 11.4, 15.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.7, 'DNP', 'DNP', 13.8, 18.8, 19.5, 17.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [20.3, 'DNP', 'DNP', 17.1, 23.7, 23.2, 19.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4259545.png",
    "name": "D'Andre Swift",
    "depthchart": "Starter: RB-1",
    "team": "Detroit Lions",
    "projected": 15.3,
    "opponent": "Los Angeles Rams",
    "home_away": "at ",
    "opp_rank_Neu": 9,
    "team_rank_Neu": 23,
    "avg_fp2": 15.32,
    "opp_rank_allowed_fp2_Neu": 15,
    "opp_avg_allowed_fp2": 20.65,
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
    "headlineNews": "D'Andre Swift rushed 13 times for 24 yards and a touchdown, adding five receptions for 43 yards on seven targets in the Lions' Week 6 loss to the Bengals.\n",
    "report": "",
    "analysis": "Swift's garbage time TD bailed out his fantasy managers, but it was also the thesis of the play. Swift continues to hold low end RB1 value despite playing for a cratering Lions offense. He will need to rack up receptions again in Week 7, facing a Rams team likely to make easy work of the Lions.\n",
    "timestamp": "2021-10-17 10:06 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 20.4,
    "week02": 9.8,
    "week03": 20.2,
    "week04": 6.9,
    "week05": 19.4,
    "week06": 15.2,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [20.4, 9.8, 20.2, 6.9, 19.4, 15.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.9, 17.6, 16.7, 15.1, 13.7, 17.7, 15.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.5, 6.7, 17.7, 5.0, 17.7, 11.6, 14.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 118, 182, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.0, 20.7, 19.6, 12.4, 21.5, 13.8, 23.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4242335.png",
    "name": "Jonathan Taylor",
    "depthchart": "Starter: RB-1",
    "team": "Indianapolis Colts",
    "projected": 15.0,
    "opponent": "San Francisco 49ers",
    "home_away": "at ",
    "opp_rank_Neu": 17,
    "team_rank_Neu": 11,
    "avg_fp2": 17.62,
    "opp_rank_allowed_fp2_Neu": 14,
    "opp_avg_allowed_fp2": 21.24,
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
    "headlineNews": "Jonathan Taylor leads all NFL running backs with ten rushing attempts inside the five yard line.\u00a0\n",
    "report": "",
    "analysis": "Taylor has converted just two of those attempts into touchdowns -- a frustrating stat for Taylor drafters, but one that should also be encouraging. Taylor is the team's unquestioned goal line back -- he's seen 91 percent of the Colts' rushes inside the five -- and should get his share of easy scores as the season wears on. The second-year back has been red hot over the past two weeks, totaling 327 yards and four touchdowns as the centerpiece of the Indy offense. Taylor is the most efficient back in the game and should be treated as a weekly RB1.\u00a0\n",
    "timestamp": "2021-10-18 02:21 PM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "week01": 14.6,
    "week02": 5.8,
    "week03": 7.7,
    "week04": 18.9,
    "week05": 30.4,
    "week06": 28.3,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.6, 5.8, 7.7, 18.9, 30.4, 28.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.6, 18.0, 12.1, 10.6, 11.4, 16.4, 15.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.6, 27.3, 15.4, 1.9, 3.2, 5.8, 6.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.8, 35.2, 31.9, 11.2, 13.1, 23.6, 13.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4241555.png",
    "name": "Elijah Mitchell",
    "depthchart": "Starter: RB-1",
    "team": "San Francisco 49ers",
    "projected": 14.7,
    "opponent": "Indianapolis Colts",
    "home_away": "",
    "opp_rank_Neu": 14,
    "team_rank_Neu": 11,
    "avg_fp2": 9.97,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 15.67,
    "fanduelSalary": "N/A",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "Elijah Mitchell rushed nine times for 43 yards in the 49ers' Week 5 loss to the Cardinals, adding two catches for 19 additional yards.\u00a0\n",
    "report": "",
    "analysis": "Active for the first time since Week 2,\u00a0Mitchell dominated snaps and touches in the 49ers' running back group but was a distant second to Trey Lance in terms of carries and production.\u00a0Mitchell did look highly explosive on his 11 handles, showing off his extra gear on a number of touches to the edge. Trey Sermon got the ball exactly one time. This remains a fluid situation, as the Niners could go back to Jimmy Garoppolo against the Colts following their Week 6 bye. Lance did not appear ready for prime time in the desert. If that's the case,\u00a0Mitchell's touch floor will go up as his overall ceiling maybe comes down a bit. Speaking 14 days out, he will be a FLEX.\u00a0\n",
    "timestamp": "2021-10-10 11:47 PM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "week01": "DNP",
    "week02": 6.3,
    "week03": "DNP",
    "week04": "DNP",
    "week05": 7.2,
    "week06": "BYE",
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 6.3, 'DNP', 'DNP', 7.2, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 12.0, 'DNP', 'DNP', 7.3, 'BYE', 14.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 6.1, 'DNP', 'DNP', 1.4, 'BYE', 5.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 22.1, 'DNP', 'DNP', 10.6, 'BYE', 15.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3042519.png",
    "name": "Aaron Jones",
    "depthchart": "Starter: RB-1",
    "team": "Green Bay Packers",
    "projected": 14.1,
    "opponent": "Washington Football Team",
    "home_away": "",
    "opp_rank_Neu": 19,
    "team_rank_Neu": 17,
    "avg_fp2": 16.6,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 23.57,
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
    "headlineNews": "Aaron Jones rushed 13 times for 76 yards in the Packers' Week 6 win over the Bears, adding four catches for 34 yards and one touchdown on four targets.\n",
    "report": "",
    "analysis": "Jones had 42 scoreless yards on nine touches at halftime but caught a 12-yard touchdown from Aaron Rodgers in the third quarter and also ripped off a 28-yard run. The Packers still aren't fully opening Jones up for big workloads, giving him 14 carries per game over the last three weeks, but he's caught 11 balls in that same span while AJ Dillon has seen his carries increase. Dillon handled 11 carries for 59 yards in this one and was the one getting the clock-killing work late. Jones remains an elite RB1 thanks to his massive touchdown upside. He gets a home date with Washington in Week 7.\n",
    "timestamp": "2021-10-17 08:27 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 3.2,
    "week02": 38.5,
    "week03": 16.6,
    "week04": 9.4,
    "week05": 12.9,
    "week06": 19.0,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.2, 38.5, 16.6, 9.4, 12.9, 19.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.4, 7.8, 14.9, 13.4, 12.9, 11.9, 14.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.4, 5.6, 13.2, 5.6, 8.0, 9.0, 9.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [23.6, 26.6, 27.1, 21.9, 23.0, 21.2, 20.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3925347.png",
    "name": "Damien Harris",
    "depthchart": "Starter: RB-1",
    "team": "New England Patriots",
    "projected": 14.0,
    "opponent": "New York Jets",
    "home_away": "",
    "opp_rank_Neu": 21,
    "team_rank_Neg": 27,
    "avg_fp2": 9.43,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 28.74,
    "fanduelSalary": "$6800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#C60C30",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png",
    "headlineNews": "Damien Harris rushed 18 times for 101 yards and a touchdown in the Patriots' Week 6 overtime loss to the Cowboys, adding a seven-yard reception.\u00a0\n",
    "report": "",
    "analysis": "The 100-yard effort was Harris' first since Week 1, though the score was his second in as many weeks. The big day came even as Rhamondre Stevenson mixed in for 62 yards and a touchdown of his own on eight touches. Harris' play of the day was a 21-yard run early in the fourth quarter where he dragged seemingly the Cowboys' entire defense for precious extra yardage. He did limp off soon after, opening the door for Stevenson to notch his TD. Thankfully, Harris returned to finish the contest. Dependent on opponent and game script for RB2 returns, Harris has a favorable setup on both fronts for Week 7 against the Jets.\u00a0\n",
    "timestamp": "2021-10-18 12:15 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 10.7,
    "week02": 12.9,
    "week03": 2.1,
    "week04": 3.8,
    "week05": 9.8,
    "week06": 17.3,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.7, 12.9, 2.1, 3.8, 9.8, 17.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.3, 13.8, 12.6, 9.5, 10.6, 9.6, 14.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.7, 5.5, 5.6, 1.8, 4.7, 2.1, 1.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.9, 13.0, 8.8, 11.0, 13.7, 8.6, 7.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3115364.png",
    "name": "Leonard Fournette",
    "depthchart": "Starter: RB-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 14.0,
    "opponent": "Chicago Bears",
    "home_away": "",
    "opp_rank_Neu": 16,
    "team_rank_Neg": 28,
    "avg_fp2": 14.15,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 19.35,
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
    "headlineNews": "Leonard Fournette rushed 22 times for 81 yards and two touchdowns in the Bucs' Week 6 win over the Eagles, adding six receptions for 46 additional yards.\u00a0\n",
    "report": "",
    "analysis": "Both the carries and receptions were new season highs, while the two-score effort was his first of 2021. The totes were his most ever as a Buc, with the catches tying last year's high-water mark. Fournette both served as a battering ram and open-field tackle breaker. He hasn't made many mistakes in recent weeks as he has seized control of the Bucs' backfield away from Ronald Jones on early downs and made it difficult for Giovani Bernard to emerge in passing situations. He is a high-end RB2 who could flirt with RB1 value if this usage keeps up. This is the running back performance the Bucs so desperately wanted in 2020. The Bears are on deck for Week 7.\u00a0\n",
    "timestamp": "2021-10-15 05:08 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 8.4,
    "week02": 9.6,
    "week03": 4.9,
    "week04": 15.3,
    "week05": 19.0,
    "week06": 27.7,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(163, 29, 47, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.4, 9.6, 4.9, 15.3, 19.0, 27.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.8, 9.3, 10.6, 9.3, 12.3, 12.5, 14.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.5, 7.0, 8.8, 7.7, 7.4, 8.3, 12.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(163, 29, 47, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [22.4, 22.7, 15.8, 17.3, 13.0, 15.4, 20.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3045147.png",
    "name": "James Conner",
    "depthchart": "Starter: RB-1",
    "team": "Arizona Cardinals",
    "projected": 13.9,
    "opponent": "Houston Texans",
    "home_away": "",
    "opp_rank_Pos": 31,
    "team_rank_Pos": 5,
    "avg_fp2": 10.52,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 23.88,
    "fanduelSalary": "$6500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#97233F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(151, 35, 63, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#97233F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
    "headlineNews": "James Conner rushed 16 times for 71 yards in the Cardinals' Week 6 win over the Browns.\n",
    "report": "",
    "analysis": "The Cardinals' were playing with a lead for most of this game which made establishing Conner an easy task. He could have picked up a few more carries but Arizona rested their starter in the final minutes so third-string back Jonathan Ward rushed four times. Still, if Conner doesn't find the end zone he's destined for a weak fantasy performance. He has five catches on the year after netting one reception today. Conner is a touchdown-or-bust RB3 going forward.\n",
    "timestamp": "2021-10-18 02:31 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 5.3,
    "week02": 2.6,
    "week03": 17.8,
    "week04": 19.6,
    "week05": 10.2,
    "week06": 7.6,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.3, 2.6, 17.8, 19.6, 10.2, 7.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.8, 12.7, 5.9, 9.1, 8.9, 6.3, 13.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.5, 0.9, 2.0, 11.3, 10.2, 8.6, 10.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.9, 19.9, 11.6, 18.0, 16.8, 17.2, 17.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4045163.png",
    "name": "Miles Sanders",
    "depthchart": "Starter: RB-1",
    "team": "Philadelphia Eagles",
    "projected": 13.4,
    "opponent": "Las Vegas Raiders",
    "home_away": "at ",
    "opp_rank_Pos": 25,
    "team_rank_Neu": 15,
    "avg_fp2": 8.35,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 21.63,
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
    "headlineNews": "Kenneth Gainwell played 23 percent of the Eagles' offensive snaps Thursday night against the Bucs.\u00a0\n",
    "report": "",
    "analysis": "Gainwell's takeover of the Philadelphia backfield has been put on hold, maybe permanently, as Miles Sanders played 83 percent of the team's snaps against Tampa. Over the past two weeks, Gainwell hasn't even been deployed as a pass-catching back when the Eagles are trailing. His usage has gone from unpredictable to nonexistent. Seemingly his only path to consistent touches would be a Sanders injury. Gainwell is a hold in leagues with deeper benches.\u00a0\n",
    "timestamp": "2021-10-15 12:46 PM",
    "source": "Jeff McLane on Twitter ",
    "game_day_logo": "",
    "week01": 15.3,
    "week02": 6.4,
    "week03": 7.0,
    "week04": 6.2,
    "week05": 7.6,
    "week06": 7.6,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [15.3, 6.4, 7.0, 6.2, 7.6, 7.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.2, 16.5, 11.1, 16.7, 7.8, 9.9, 13.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.1, 6.2, 5.3, 9.1, 3.5, 3.3, 6.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.0, 21.1, 10.8, 14.0, 11.1, 7.8, 10.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4241416.png",
    "name": "Chuba Hubbard",
    "depthchart": "Starter: RB-1",
    "team": "Carolina Panthers",
    "projected": 13.0,
    "opponent": "New York Giants",
    "home_away": "at ",
    "opp_rank_Pos": 29,
    "team_rank_Neu": 17,
    "avg_fp2": 8.13,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 26.3,
    "fanduelSalary": "$7300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0085CA",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 133, 202, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#0085CA",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/car.png",
    "headlineNews": "Panthers head coach Matt Rhule said he wants to \"redefine who we are\" on offense, including a commitment to establishing the run.\u00a0\n",
    "report": "",
    "analysis": "Rhule seems done with the idea of a Sam Darnold-centric offense following a horrific three-week stretch in which Darnold has thrown four touchdowns and six interceptions. He completed a disastrous 41.7 percent of his attempts in Carolina's Week 6 loss to the Vikings, averaging a miserable five yards per attempt. The desire to establish the run is usually easier than the execution, as many teams are rarely in position to bleed the clock with a three-yards-and-a-cloud-of-dust offensive approach. Expect Chuba Hubbard to get every shot to run the rock for as long as Christian McCaffrey (hamstring) is out, and look for Carolina's passing production to wane if the team is able to create neutral and positive game script. Hubbard has 61 touches in three starts this season. He could be the most valuable waiver add of 2021.\u00a0\n",
    "timestamp": "2021-10-18 04:22 PM",
    "source": "Darin Gantt on Twitter ",
    "game_day_logo": "",
    "week01": 1.4,
    "week02": 1.0,
    "week03": 9.4,
    "week04": 8.1,
    "week05": 15.9,
    "week06": 13.0,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.4, 1.0, 9.4, 8.1, 15.9, 13.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.0, 2.5, 4.4, 7.5, 12.4, 14.3, 13.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.1, 4.1, 4.9, 4.8, 8.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 133, 202, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.0, 6.7, 8.5, 14.4, 19.0, 19.5, 14.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3025433.png",
    "name": "Mike Davis",
    "depthchart": "Starter: RB-1",
    "team": "Atlanta Falcons",
    "projected": 12.4,
    "opponent": "Miami Dolphins",
    "home_away": "at ",
    "opp_rank_Neu": 22,
    "team_rank_Neg": 25,
    "avg_fp2": 9.64,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 26.52,
    "fanduelSalary": "$6300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/atl.png",
    "headlineNews": "Mike Davis rushed 13 times for 53 yards and a touchdown in Week 5 against the Jets.\n",
    "report": "",
    "analysis": "Davis was outplayed by Cordarrelle Patterson, who led the backfield with 21 touches, but salvaged his day with a fourth-quarter goal-line TD. The yards were a season-high for Davis, who had been held under 50 yards in every game.\u00a0Davis has been losing valuable snaps to Patterson and could continue to see his role decline going forward. He'll be a touchdown-dependent RB3 when the Falcons return from their Week 6 bye.\n",
    "timestamp": "2021-10-10 05:23 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 8.7,
    "week02": 9.8,
    "week03": 9.0,
    "week04": 9.6,
    "week05": 11.1,
    "week06": "BYE",
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.7, 9.8, 9.0, 9.6, 11.1, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.7, 10.2, 12.7, 11.8, 14.3, 'BYE', 12.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.1, 0.0, 2.5, 4.6, 4.8, 'BYE', 8.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.3, 11.4, 6.7, 11.0, 8.9, 'BYE', 13.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116385.png",
    "name": "Joe Mixon",
    "depthchart": "Starter: RB-1",
    "team": "Cincinnati Bengals",
    "projected": 12.1,
    "opponent": "Baltimore Ravens",
    "home_away": "at ",
    "opp_rank_Neg": 3,
    "team_rank_Neu": 20,
    "avg_fp2": 14.58,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 23.28,
    "fanduelSalary": "$7200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#ea7330",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(234, 115, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#ea7330",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png",
    "headlineNews": "Joe Mixon rushed 18 times for 94 yards, adding five receptions for 59 yards and a touchdown on six targets in the Bengals' Week 6 win over the Lions.\n",
    "report": "",
    "analysis": "Mixon looked healthy and had a full workload in this game. His day could have been even bigger if the Lions' offense came to play on Sunday. Mixon was key to the Bengals' easy win, as they leaned on him to bleed the clock. He looked spry on a TD reception and had nice run down to the goal line in 2nd half. Mixon fumbled in this game, but recovered it himself, and it did not affect his playing time. Mixon looks like a solid RB1 play in Week 7 against the Ravens.\n",
    "timestamp": "2021-10-17 09:31 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 23.0,
    "week02": 7.6,
    "week03": 9.9,
    "week04": 13.2,
    "week05": 10.0,
    "week06": 23.8,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [23.0, 7.6, 9.9, 13.2, 10.0, 23.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.5, 17.4, 9.7, 13.1, 12.1, 14.0, 12.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.4, 6.2, 2.3, 4.5, 8.3, 16.3, 8.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [20.1, 22.5, 15.0, 13.6, 18.9, 24.3, 18.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3115375.png",
    "name": "Darrel Williams",
    "depthchart": "Starter: RB-1",
    "team": "Kansas City Chiefs",
    "projected": 11.8,
    "opponent": "Tennessee Titans",
    "home_away": "at ",
    "opp_rank_Neu": 9,
    "team_rank_Neu": 10,
    "avg_fp2": 8.72,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 19.15,
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
    "headlineNews": "Jerick\u00a0McKinnon had three rushes for ten yards in the Chiefs' Week 6 win against Washington, adding one reception for five yards.\u00a0\n",
    "report": "",
    "analysis": "McKinnon played behind Darrel Williams in the first game of Clyde Edwards-Helaire's (knee) absence, mostly spelling Williams when he needed a breather. It's clear McKinnon would be the next running back up if Williams were to miss time. He should be rostered in deeper 12-team formats and all 14-team leagues.\u00a0\n",
    "timestamp": "2021-10-17 10:04 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 0.4,
    "week02": 5.8,
    "week03": 4.9,
    "week04": 12.8,
    "week05": 6.0,
    "week06": 22.4,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.4, 5.8, 4.9, 12.8, 6.0, 22.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.7, 3.7, 5.4, 5.0, 4.5, 9.2, 11.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.3, 2.4, 5.0, 7.2, 3.4, 4.2, 10.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.5, 8.8, 7.4, 8.7, 5.8, 7.3, 17.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4360294.png",
    "name": "Antonio Gibson",
    "depthchart": "Starter: RB-1",
    "team": "Washington Football Team",
    "projected": 11.6,
    "opponent": "Green Bay Packers",
    "home_away": "at ",
    "opp_rank_Neu": 13,
    "team_rank_Neu": 19,
    "avg_fp2": 12.27,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 21.17,
    "fanduelSalary": "$6600",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Calf",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#773141",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(119, 49, 65, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png",
    "headlineNews": "Washington head coach Ron Rivera said Antonio Gibson underwent an MRI on his injured shin.\u00a0\n",
    "report": "",
    "analysis": "Gibson was sidelined during the fourth quarter of the Football Team's Week 6 loss to the Chiefs. He spent much of the game cycling in and out of the lineup, riding the stationary bike and getting treatment for his injured shin. Gibson drafters should emotionally prepare themselves for an absence. How long that absence will be is anyone's guess in a seemingly lost season for Washington. Jaret Patterson, who would likely handle most early-down touches in Gibson's absence, should be a top waiver add this week.\u00a0\n",
    "timestamp": "2021-10-19 03:15 PM",
    "source": "Nicki Jhabvala on Twitter",
    "game_day_logo": "",
    "week01": 10.3,
    "week02": 8.3,
    "week03": 16.9,
    "week04": 14.5,
    "week05": 20.2,
    "week06": 3.4,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.3, 8.3, 16.9, 14.5, 20.2, 3.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.7, 16.3, 8.7, 11.1, 11.6, 16.6, 11.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.1, 5.5, 2.8, 5.1, 6.1, 6.7, 10.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.6, 20.6, 13.2, 18.1, 19.0, 20.5, 20.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3046409.png",
    "name": "Alex Collins",
    "depthchart": "Starter: RB-1",
    "team": "Seattle Seahawks",
    "projected": 11.6,
    "opponent": "New Orleans Saints",
    "home_away": "",
    "opp_rank_Neg": 4,
    "team_rank_Neu": 16,
    "avg_fp2": 8.52,
    "opp_rank_allowed_fp2_Neu": 9,
    "opp_avg_allowed_fp2": 18.06,
    "fanduelSalary": "$6500",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Hip",
    "tmColorLite": "#69BE28",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(105, 190, 40, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#69BE28",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
    "headlineNews": "Seahawks head coach Pete Carroll said Alex Collins (hip, glute) has a chance to play in Week 7 against the Saints.\u00a0\n",
    "report": "",
    "analysis": "Collins was again the team's workhorse back in Week 6 with Chris Carson (neck) sidelined, handling 20 touches for 101 yards against Pittsburgh. He left late in the game with the hip/glute issue, which will certainly limit him in practice throughout the week and could sideline him against New Orleans. In other Seattle backfield injury news, Carroll said Rashaad Penny (calf) will return from injured reserve this week. Penny could function as the team's lead back this week if Carson and Collins are out. He should be rostered in most 12-team formats.\u00a0\n",
    "timestamp": "2021-10-18 04:55 PM",
    "source": "Bob Condotta on Twitter ",
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mpx0s6jwjrjbhfw9rfol",
    "week01": "DNP",
    "week02": "DNP",
    "week03": 0.8,
    "week04": 14.8,
    "week05": 8.2,
    "week06": 16.3,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 0.8, 14.8, 8.2, 16.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 3.0, 4.0, 8.4, 6.7, 11.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 4.7, 4.6, 9.3, 7.7, 13.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 6.4, 6.9, 13.0, 12.0, 16.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3886818.png",
    "name": "Myles Gaskin",
    "depthchart": "Starter: RB-1",
    "team": "Miami Dolphins",
    "projected": 11.5,
    "opponent": "Atlanta Falcons",
    "home_away": "",
    "opp_rank_Neu": 13,
    "team_rank_Neg": 32,
    "avg_fp2": 9.2,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 23.54,
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
    "headlineNews": "Myles Gaskin rushed five times for nine yards in Week 6 against Jacksonville.\n",
    "report": "",
    "analysis": "Gaskin started and played 36% of snaps. Malcolm Brown (36%) outrushed Gaskin, while\u00a0Salvon Ahmed (27%) led the backfield with seven carries. The Dolphins never established the run despite a first-half lead and dialed up 47 pass plays for\u00a0Tua Tagovailoa in his first game back.\u00a0Gaskin wasn't involved as a receiver a week after going off for 10 catches, 74 yards, and two touchdowns in a loss to the Colts. Even with a plus matchup, none of Miami's running backs can be started with confidence against the Falcons\u00a0in Week 7.\n",
    "timestamp": "2021-10-17 05:55 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 10.1,
    "week02": 6.6,
    "week03": 8.9,
    "week04": 0.3,
    "week05": 26.9,
    "week06": 2.4,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.1, 6.6, 8.9, 0.3, 26.9, 2.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.4, 10.0, 12.7, 11.1, 6.1, 12.4, 11.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.8, 2.1, 8.7, 8.6, 2.7, 1.9, 8.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 142, 151, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.7, 9.7, 9.7, 9.6, 4.9, 12.9, 11.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15807.png",
    "name": "Cordarrelle Patterson",
    "depthchart": "Backup: RB-2",
    "team": "Atlanta Falcons",
    "projected": 10.8,
    "opponent": "Miami Dolphins",
    "home_away": "at ",
    "opp_rank_Neu": 22,
    "team_rank_Neg": 25,
    "avg_fp2": 20.4,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 26.52,
    "fanduelSalary": "N/A",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/atl.png",
    "headlineNews": "Cordarrelle Patterson rushed 14 times for 54 yards and caught 7-of-9 targets for 60 yards in Week 5 against the Jets.\n",
    "report": "",
    "analysis": "Patterson led the Falcons' backfield in carries for the first time this season. He also continued to be heavily involved in the pass game, with his nine targets behind only Kyle Pitts (10). The centerpiece of Atlanta's offense, Patterson is showing no signs of slowing down, posting over 100 total yards or a touchdown in every game since Week 1.\u00a0Patterson's role will keep him in the RB2 mix for a matchup with Miami after Atlanta's Week 6 bye.\n",
    "timestamp": "2021-10-10 05:55 PM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": 13.2,
    "week04": 32.1,
    "week05": 14.9,
    "week06": "BYE",
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 13.2, 32.1, 14.9, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 11.0, 10.1, 11.8, 'BYE', 10.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 5.9, 3.2, 5.1, 'BYE', 6.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 21.1, 14.5, 19.6, 'BYE', 20.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15920.png",
    "name": "Latavius Murray",
    "depthchart": "Starter: RB-1",
    "team": "Baltimore Ravens",
    "projected": 10.2,
    "opponent": "Cincinnati Bengals",
    "home_away": "",
    "opp_rank_Neu": 8,
    "team_rank_Pos": 4,
    "avg_fp2": 8.18,
    "opp_rank_allowed_fp2_Neu": 14,
    "opp_avg_allowed_fp2": 20.48,
    "fanduelSalary": "$5800",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Ankle",
    "tmColorLite": "#9E7C0C",
    "tmColorDark": "#241773",
    "tmColorLite_rgba": "rgba(158, 124, 12, 0.2)",
    "tmColorDark_rgba": "rgba(36, 23, 115, 0.2)",
    "tmTextLite": "#9E7C0C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png",
    "headlineNews": "Latavius Murray rushed nine times for 44 yards and a touchdown in the Ravens' Week 6 win over the Chargers, adding two receptions for 12 additional yards.\u00a0\n",
    "report": "",
    "analysis": "Murray got the start, handling the Ravens' first play from scrimmage and capping off the opening drive with a 14-yard score where he made a nice \"plant-and-go\" cutback. Then the Ravens introduced a three-back rotation, with Murray splitting work with Le'Veon Bell and Devonta Freeman as Ty'Son Williams spent the game on the sideline as a healthy scratch. Freeman actually won the ground yardage battle, with Murray ever so slightly taking the yards from scrimmage crown. It was yet another game that made it impossible to discern just what the Ravens' going-forward plans might be in this backfield. Despite today's score and seeming first shot at \"hot hand\" status, Murray will be a low-upside FLEX for Week 7 against the Bengals.\u00a0\n",
    "timestamp": "2021-10-17 10:06 PM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": 9.6,
    "week03": 2.8,
    "week04": 11.9,
    "week05": 4.0,
    "week06": 12.6,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 9.6, 2.8, 11.9, 4.0, 12.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 8.8, 6.6, 4.4, 10.6, 11.6, 10.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 1.3, 3.3, 0.9, 7.8, 10.6, 10.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 19.1, 8.9, 6.4, 14.1, 19.0, 16.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4240657.png",
    "name": "Michael Carter",
    "depthchart": "Starter: RB-1",
    "team": "New York Jets",
    "projected": 10.0,
    "opponent": "New England Patriots",
    "home_away": "at ",
    "opp_rank_Neu": 17,
    "team_rank_Neg": 30,
    "avg_fp2": 9.03,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 19.38,
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
    "headlineNews": "Michael Carter rushed 10 times for 38 yards in Week 5 against the Falcons.\n",
    "report": "",
    "analysis": "Carter was the Jets' lead back, getting 10-of-17 designed runs. He was removed at the goal-line for Ty Johnson, who vultured a one-yard score, but was more involved in the pass game this week, catching all three of his targets for 20 yards. Tevin Coleman was a distant third behind Carter and Johnson, seeing just three touches in a matchup with his former team. Carter should continue to see the most carries going forward, but the Jets' backfield is a situation to avoid.\n",
    "timestamp": "2021-10-10 05:54 PM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": 3.9,
    "week04": 9.9,
    "week05": 13.3,
    "week06": "BYE",
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 3.9, 9.9, 13.3, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 5.0, 9.1, 9.7, 'BYE', 10.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 2.7, 4.6, 4.2, 'BYE', 4.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  "rgba(18, 87, 64, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 11.4, 14.7, 17.1, 'BYE', 15.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3119195.png",
    "name": "Chase Edmonds",
    "depthchart": "Backup: RB-2",
    "team": "Arizona Cardinals",
    "projected": 9.3,
    "opponent": "Houston Texans",
    "home_away": "",
    "opp_rank_Pos": 31,
    "team_rank_Pos": 5,
    "avg_fp2": 9.82,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 23.88,
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
    "headlineNews": "Chase Edmonds rushed four times for 46 yards in the Cardinals' Week 6 win over the Browns, adding three receptions for four yards.\n",
    "report": "",
    "analysis": "The Cardinals gained a lead after seven minutes and never looked back. James Conner worked the clock with 16 carries, leaving little room for Edmonds. Conner has a clear edge over Edmonds in carries and goal line work making both options highly susceptible to Arizona's game script. Edmonds has at least three catches in every game but also has three weeks with fewer than 10 carries. He'll straddle the RB2/3 border versus the Texans next week.\n",
    "timestamp": "2021-10-18 02:42 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 12.6,
    "week02": 10.0,
    "week03": 11.0,
    "week04": 15.9,
    "week05": 2.9,
    "week06": 6.5,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.6, 10.0, 11.0, 15.9, 2.9, 6.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.5, 8.9, 11.9, 9.3, 16.3, 15.8, 9.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 6.4, 12.5, 7.9, 3.2, 15.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.7, 10.2, 13.6, 15.7, 13.9, 7.4, 17.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2576434.png",
    "name": "Melvin Gordon",
    "depthchart": "Starter: RB-1",
    "team": "Denver Broncos",
    "projected": 8.5,
    "opponent": "Cleveland Browns",
    "home_away": "at ",
    "opp_rank_Neg": 6,
    "team_rank_Neu": 14,
    "avg_fp2": 10.6,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 15.12,
    "fanduelSalary": "$5900",
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
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/uqzgq9urghrlu89ckqsm",
    "week01": 19.3,
    "week02": 7.9,
    "week03": 14.6,
    "week04": 7.7,
    "week05": 5.3,
    "week06": 8.8,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [19.3, 7.9, 14.6, 7.7, 5.3, 8.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.8, 12.9, 13.5, 13.1, 10.3, 12.6, 8.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.1, 6.8, 12.9, 9.7, 17.0, 12.2, 9.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(225, 119, 87, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [22.5, 22.5, 15.9, 13.3, 21.5, 18.2, 14.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3122866.png",
    "name": "Devontae Booker",
    "depthchart": "Starter: RB-1",
    "team": "New York Giants",
    "projected": 7.5,
    "opponent": "Carolina Panthers",
    "home_away": "",
    "opp_rank_Neu": 15,
    "team_rank_Neg": 25,
    "avg_fp2": 6.66,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 13.73,
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
    "headlineNews": "Devontae Booker rushed 12 times for 41 yards in the Giants' Week 6 loss to the Rams, adding four catches for 28 yards.\n",
    "report": "",
    "analysis": "Booker saw 12 of the Giants' 15 running back carries and 4-of-6 targets that went to running backs. However, Elijah Penny punched in a goal line carry near the end of the game for New York's only score. Missing out on the scoring opportunity is frustrating for fantasy managers who looked to Booker this week but his large share of the touches points to better days going forward. He should be treated as a low-end RB2 until Saquon Barkley returns from his ankle injury.\u00a0\n",
    "timestamp": "2021-10-17 09:21 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 1.8,
    "week02": 1.6,
    "week03": "DNP",
    "week04": "DNP",
    "week05": 19.3,
    "week06": 8.9,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.8, 1.6, 'DNP', 'DNP', 19.3, 8.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.8, 4.4, 'DNP', 'DNP', 3.8, 8.1, 7.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 6.2, 'DNP', 'DNP', 2.7, 4.6, 3.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.1, 24.1, 'DNP', 'DNP', 5.5, 6.9, 7.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13981.png",
    "name": "Mark Ingram",
    "depthchart": "Starter: RB-1",
    "team": "Houston Texans",
    "projected": 7.5,
    "opponent": "Arizona Cardinals",
    "home_away": "at ",
    "opp_rank_Neu": 23,
    "team_rank_Neg": 26,
    "avg_fp2": 6.18,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 16.73,
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
    "headlineNews": "Mark Ingram rushed 18 times for 73 yards in Houston's Week 6 loss to the Colts, adding two catches for eight yards.\u00a0\n",
    "report": "",
    "analysis": "That's about as good as it will get for Ingram in fantasy without a touchdown, as he remains a high-touch bruiser. He busted out a 24-yard run in the second quarter through an entirely empty gap to give those playing him a small boost. Ingram will again be on the RB3/FLEX line against the Cardinals in Week 7.\u00a0\n",
    "timestamp": "2021-10-17 09:31 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 14.5,
    "week02": 4.5,
    "week03": 2.5,
    "week04": 2.4,
    "week05": 4.1,
    "week06": 9.1,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.5, 4.5, 2.5, 2.4, 4.1, 9.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.8, 13.3, 8.3, 9.0, 7.7, 6.8, 7.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.7, 4.3, 3.9, 9.3, 4.2, 1.3, 6.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.7, 27.1, 7.8, 13.8, 8.9, 6.9, 12.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2572861.png",
    "name": "J.D. McKissic",
    "depthchart": "Backup: RB-2",
    "team": "Washington Football Team",
    "projected": 7.0,
    "opponent": "Green Bay Packers",
    "home_away": "at ",
    "opp_rank_Neu": 13,
    "team_rank_Neu": 19,
    "avg_fp2": 9.0,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 21.17,
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
    "headlineNews": "J.D.\u00a0McKissic had eight rushes for 45 yards in Washington's Week 6 loss to the Chiefs, adding eight catches for 65 yards.\u00a0\n",
    "report": "",
    "analysis": "Antonio Gibson coming in and out of the game with his lingering shin injury set up McKissic for his 16 touches, most of them in the second half. Gibson missing time -- a distinct possibility after he finished Washington's Week 6 game on the sideline -- would make McKissic a more reliable fantasy option, though Jaret Patterson would figure to take on most of the early-down workload. McKissic only has PPR upside when Washington faces negative, pass-heavy game script. Good luck predicting when that might be.\u00a0\n",
    "timestamp": "2021-10-17 09:06 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 0.8,
    "week02": 17.8,
    "week03": 4.8,
    "week04": 14.4,
    "week05": 1.2,
    "week06": 15.0,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.8, 17.8, 4.8, 14.4, 1.2, 15.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.5, 4.5, 4.2, 4.9, 5.6, 8.9, 7.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.3, 0.1, 0.7, 2.7, 3.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.2, 7.4, 8.2, 8.9, 9.6, 15.7, 14.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3127586.png",
    "name": "Jeremy McNichols",
    "depthchart": "Backup: RB-2",
    "team": "Tennessee Titans",
    "projected": 7.0,
    "opponent": "Kansas City Chiefs",
    "home_away": "",
    "opp_rank_Pos": 27,
    "team_rank_Pos": 3,
    "avg_fp2": 5.72,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 23.08,
    "fanduelSalary": "$5500",
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
    "game_day_logo": "",
    "week01": 4.8,
    "week02": 4.4,
    "week03": 8.1,
    "week04": 12.5,
    "week05": 4.5,
    "week06": 0.0,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.8, 4.4, 8.1, 12.5, 4.5, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.2, 4.8, 6.8, 6.9, 8.5, 5.6, 7.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.0, 3.0, 6.1, 1.4, 2.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [4.6, 5.0, 3.4, 6.1, 7.9, 4.8, 3.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2980453.png",
    "name": "Jamaal Williams",
    "depthchart": "Backup: RB-2",
    "team": "Detroit Lions",
    "projected": 7.0,
    "opponent": "Los Angeles Rams",
    "home_away": "at ",
    "opp_rank_Neu": 9,
    "team_rank_Neu": 23,
    "avg_fp2": 9.23,
    "opp_rank_allowed_fp2_Neu": 15,
    "opp_avg_allowed_fp2": 20.65,
    "fanduelSalary": "$5300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0076B6",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(0, 118, 182, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#0076B6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/det.png",
    "headlineNews": "Jamaal Williams rushed four times for 11 yards, \"adding\" one reception for -2 yards on two targets in the Lions' Week 6 loss to the Bengals.\n",
    "report": "",
    "analysis": "Williams was doomed as the Lions play from ahead running back in a game where they got blown out. Williams faces another extremely difficult setup in Week 7 against the Rams. He will be a desperation RB2 in that tilt.\n",
    "timestamp": "2021-10-17 10:04 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 21.0,
    "week02": 5.2,
    "week03": 13.7,
    "week04": 6.6,
    "week05": 7.5,
    "week06": 1.4,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [21.0, 5.2, 13.7, 6.6, 7.5, 1.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.4, 12.3, 10.3, 8.0, 7.6, 6.8, 7.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.6, 1.0, 8.1, 7.3, 3.9, 6.1, 2.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 118, 182, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.8, 14.2, 12.3, 13.6, 6.4, 10.0, 9.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4569173.png",
    "name": "Rhamondre Stevenson",
    "depthchart": "Backup: RB-2",
    "team": "New England Patriots",
    "projected": 7.0,
    "opponent": "New York Jets",
    "home_away": "",
    "opp_rank_Neu": 21,
    "team_rank_Neg": 27,
    "avg_fp2": 5.2,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 28.74,
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
    "headlineNews": "Rhamondre Stevenson rushed five times for 23 yards and a touchdown in the Patriots' Week 6 overtime loss to the Cowboys, adding three receptions for 39 additional yards.\u00a0\n",
    "report": "",
    "analysis": "The eight touches were actually three fewer than Stevenson handled in Week 5, though the 62 yards from scrimmage nearly doubled his previous season total. The two big plays were a 22-yard reception in the first quarter and one-yard touchdown in the fourth. For the reception, Stevenson ran a receiver's route and got free down the seam. The score only came after Damien Harris had to limp off the field in the midst of a heater, but Stevenson cashed it in all the same. The receptions are very good to see, since that is simply not a part of Harris' game. With James White done for the season with a hip injury, catching the ball will be Stevenson's ticket to consistent fantasy value behind Harris. The Jets are a plus Week 7 matchup.\u00a0\n",
    "timestamp": "2021-10-18 12:24 AM",
    "source": null,
    "game_day_logo": "",
    "week01": -0.4,
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": 2.3,
    "week06": 13.7,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [-0.4, 'DNP', 'DNP', 'DNP', 2.3, 13.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.0, 'DNP', 'DNP', 'DNP', 1.5, 2.8, 7.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 'DNP', 'DNP', 'DNP', 0.0, 0.0, 1.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [7.4, 'DNP', 'DNP', 'DNP', 6.2, 4.6, 13.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3139602.png",
    "name": "D'Ernest Johnson",
    "depthchart": "Starter: RB-1",
    "team": "Cleveland Browns",
    "projected": 6.9,
    "opponent": "Denver Broncos",
    "home_away": "",
    "opp_rank_Neg": 4,
    "team_rank_Pos": 1,
    "avg_fp2": 0.38,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 15.78,
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
    "headlineNews": "NFL Network's Ian Rapoport reports\u00a0Kareem Hunt (calf) is expected to miss \"several weeks\" and could land on injured reserve.\u00a0\n",
    "report": "",
    "analysis": "Rapoport added that Hunt -- who hurt his calf near the end of the Browns' Week 6 loss to Arizona -- could be sidelined for up to six weeks, putting his return sometime around Thanksgiving. The loss of Hunt in a season circling the drain is a outsized loss for the Browns, who were without Nick Chubb (calf) in their Week 6 blowout loss. Chubb, when fully healthy, could see an uptick in snaps and touches with Hunt sidelined. In Week 7 against Denver, D'Ernest Johnson and Demetric Felton could lead the Cleveland backfield. Felton is only viable in PPR formats.\u00a0\n",
    "timestamp": "2021-10-18 10:04 PM",
    "source": "Ian Rapoport on Twitter",
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/uqzgq9urghrlu89ckqsm",
    "week01": "DNP",
    "week02": 0.0,
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": 1.4,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 0.0, 'DNP', 'DNP', 'DNP', 1.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 3.3, 'DNP', 'DNP', 'DNP', 2.9, 6.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 0.0, 'DNP', 'DNP', 'DNP', 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 5.1, 'DNP', 'DNP', 'DNP', 2.9, 1.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2979843.png",
    "name": "Kenyan Drake",
    "depthchart": "Backup: RB-2",
    "team": "Las Vegas Raiders",
    "projected": 6.8,
    "opponent": "Philadelphia Eagles",
    "home_away": "",
    "opp_rank_Pos": 28,
    "team_rank_Neg": 30,
    "avg_fp2": 7.72,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 24.08,
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
    "headlineNews": "Kenyan Drake rushed four times for 34 yards and one score, hauling in both of his targets for 39 yards and a receiving touchdown in Las Vegas' Week 6 bludgeoning of the Broncos.\n",
    "report": "",
    "analysis": "Totaling three touches under Jon Gruden in Las Vegas' last two games, interim coach Rich Bisaccia dusted off Drake in both the backfield and as a receiver, getting him four carries and six total touches behind Josh Jacobs' 17-touch load. Drake even lined up next to Derek Carr from shotgun at one point, beating his linebacker on a route from the backfield for a 31-yard receiving score. Jacobs remains Las Vegas' goal-line bruiser but Drake's (surprising) usage with Peyton Barber healthy-scratched could suddenly make the league's highest-paid backup viable in 12-team PPR leagues. He should be stashed ahead of the team's Week 7 matchup against the Eagles.\n",
    "timestamp": "2021-10-18 12:48 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 9.5,
    "week02": 8.0,
    "week03": 7.2,
    "week04": 0.2,
    "week05": 1.1,
    "week06": 20.3,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.5, 8.0, 7.2, 0.2, 1.1, 20.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.4, 10.1, 14.2, 10.8, 8.2, 5.3, 6.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.6, 0.0, 19.1, 14.8, 7.7, 5.7, 12.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [20.5, 22.8, 24.2, 19.9, 13.3, 9.1, 19.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4371733.png",
    "name": "Kenneth Gainwell",
    "depthchart": "Backup: RB-2",
    "team": "Philadelphia Eagles",
    "projected": 6.1,
    "opponent": "Las Vegas Raiders",
    "home_away": "at ",
    "opp_rank_Pos": 25,
    "team_rank_Neu": 15,
    "avg_fp2": 7.3,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 21.63,
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
    "headlineNews": "Kenneth Gainwell played 23 percent of the Eagles' offensive snaps Thursday night against the Bucs.\u00a0\n",
    "report": "",
    "analysis": "Gainwell's takeover of the Philadelphia backfield has been put on hold, maybe permanently, as Miles Sanders played 83 percent of the team's snaps against Tampa. Over the past two weeks, Gainwell hasn't even been deployed as a pass-catching back when the Eagles are trailing. His usage has gone from unpredictable to nonexistent. Seemingly his only path to consistent touches would be a Sanders injury. Gainwell is a hold in leagues with deeper benches.\u00a0\n",
    "timestamp": "2021-10-15 12:46 PM",
    "source": "Jeff McLane on Twitter ",
    "game_day_logo": "",
    "week01": 11.3,
    "week02": 6.2,
    "week03": 4.9,
    "week04": 17.9,
    "week05": 2.9,
    "week06": 0.6,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.3, 6.2, 4.9, 17.9, 2.9, 0.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.9, 9.8, 6.5, 8.5, 6.1, 7.3, 6.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 2.3, 2.1, 2.6, 1.1, 4.2, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [7.7, 15.6, 10.7, 14.9, 9.4, 16.0, 13.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4239934.png",
    "name": "A.J. Dillon",
    "depthchart": "Backup: RB-2",
    "team": "Green Bay Packers",
    "projected": 6.1,
    "opponent": "Washington Football Team",
    "home_away": "",
    "opp_rank_Neu": 19,
    "team_rank_Neu": 17,
    "avg_fp2": 6.97,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 23.57,
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
    "headlineNews": "AJ Dillon rushed 11 times for 59 yards in the Packers' Week 6 win over the Bears.\n",
    "report": "",
    "analysis": "He wasn't targeted in the passing game. Dillon was out-carried 13-11 by Aaron Jones, who posted 76 yards on his totes and also caught all four of his targets for 34 yards and one touchdown. Dillon is seeing more work the last three weeks, averaging 13 touches per game in that span, but Jones remains the better bet for touchdowns and money touches in the scoring area. Dillon should still be rostered in all fantasy leagues as a standalone RB3 who would be an RB1 if something ever happens to Jones.\n",
    "timestamp": "2021-10-17 08:43 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 3.1,
    "week02": 3.1,
    "week03": 3.6,
    "week04": 10.2,
    "week05": 15.9,
    "week06": 5.9,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.1, 3.1, 3.6, 10.2, 15.9, 5.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.9, 4.4, 6.2, 4.9, 3.9, 5.4, 6.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.8, 0.0, 22.1, 0.3, 3.7, 7.5, 14.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [5.0, 2.6, 28.0, 5.4, 8.1, 13.4, 30.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4361579.png",
    "name": "Javonte Williams",
    "depthchart": "Backup: RB-2",
    "team": "Denver Broncos",
    "projected": 5.8,
    "opponent": "Cleveland Browns",
    "home_away": "at ",
    "opp_rank_Neg": 6,
    "team_rank_Neu": 14,
    "avg_fp2": 8.33,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 15.12,
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
    "headlineNews": "Javonte Williams rushed 11 times for 53 yards, hauling in all three of his targets for 15 yards in Denver's Week 6 loss to Las Vegas.\n",
    "report": "",
    "analysis": "Williams merely out-touched Melvin Gordon 14-13, turning heads when he hurdled Raiders CB Tre\u2019von Moehrig in the third quarter during a 30-yard run. Denver mustered a meaningless field goal to cap that drive, cutting Las Vegas\u2019 lead to two scores (24-10). Good for one 'wow' play per game, Williams remains tied to a timeshare with Gordon for the foreseeable future. He can still be started as a RB3/4 to help alleviate fantasy bye weeks in Week 7 against Cleveland.\n",
    "timestamp": "2021-10-18 03:12 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/uqzgq9urghrlu89ckqsm",
    "week01": 4.6,
    "week02": 7.9,
    "week03": 11.7,
    "week04": 7.4,
    "week05": 10.1,
    "week06": 8.3,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.6, 7.9, 11.7, 7.4, 10.1, 8.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.7, 5.7, 7.0, 7.2, 5.5, 7.5, 5.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 1.0, 2.9, 1.5, 1.1, 7.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(225, 119, 87, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.7, 10.0, 12.8, 15.1, 11.0, 10.5, 10.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/17359.png",
    "name": "Damien Williams",
    "depthchart": "Backup: RB-2",
    "team": "Chicago Bears",
    "projected": 5.7,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "at ",
    "opp_rank_Neg": 1,
    "team_rank_Neu": 7,
    "avg_fp2": 7.36,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 16.88,
    "fanduelSalary": "$6100",
    "hasStatus": "Status",
    "healthOut": "Reserve-covid-19",
    "injury": "Illness",
    "tmColorLite": "#c36835",
    "tmColorDark": "#0B162A",
    "tmColorLite_rgba": "rgba(195, 104, 53, 0.2)",
    "tmColorDark_rgba": "rgba(11, 22, 42, 0.2)",
    "tmTextLite": "#c36835",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png",
    "headlineNews": "ESPN's Adam Schefter reports\u00a0Damien Williams is COVID positive and will be sidelined for Week 6 against the Packers.\u00a0\n",
    "report": "",
    "analysis": "Had he not been positive, Williams could have been active after returning two negative tests. Since he has the coronavirus himself, Williams cannot clear the protocol in time for Sunday's game. It leaves rookie Khalil Herbert as the Bears' unquestioned lead back, with only end-of-bench pass catcher Ryan Nall offering any alternative in the backfield. With the Bears wanting to go run heavy as they try to hide rookie QB Justin Fields, Herbert has serious RB2 appeal even with the Bears running as big-time home underdogs.\u00a0\n",
    "timestamp": "2021-10-15 08:11 PM",
    "source": "Adam Schefter on Twitter ",
    "game_day_logo": "",
    "week01": 6.0,
    "week02": 1.4,
    "week03": 0.0,
    "week04": 14.0,
    "week05": 15.4,
    "week06": "DNP",
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.0, 1.4, 0.0, 14.0, 15.4, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.0, 7.5, 5.7, 5.0, 10.5, 'DNP', 5.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.2, 0.0, 2.8, 2.5, 7.9, 'DNP', 3.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  "rgba(195, 104, 53, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.5, 11.8, 6.0, 5.0, 11.2, 'DNP', 10.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4035826.png",
    "name": "Demetric Felton",
    "depthchart": "Backup: RB-2",
    "team": "Cleveland Browns",
    "projected": 5.6,
    "opponent": "Denver Broncos",
    "home_away": "",
    "opp_rank_Neg": 4,
    "team_rank_Pos": 1,
    "avg_fp2": 3.8,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 15.78,
    "fanduelSalary": "$5300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FF3C00",
    "tmColorDark": "#311D00",
    "tmColorLite_rgba": "rgba(255, 60, 0, 0.2)",
    "tmColorDark_rgba": "rgba(49, 29, 0, 0.2)",
    "tmTextLite": "#FF3C00",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
    "headlineNews": "NFL Network's Ian Rapoport reports\u00a0Kareem Hunt (calf) is expected to miss \"several weeks\" and could land on injured reserve.\u00a0\n",
    "report": "",
    "analysis": "Rapoport added that Hunt -- who hurt his calf near the end of the Browns' Week 6 loss to Arizona -- could be sidelined for up to six weeks, putting his return sometime around Thanksgiving. The loss of Hunt in a season circling the drain is a outsized loss for the Browns, who were without Nick Chubb (calf) in their Week 6 blowout loss. Chubb, when fully healthy, could see an uptick in snaps and touches with Hunt sidelined. In Week 7 against Denver, D'Ernest Johnson and Demetric Felton could lead the Cleveland backfield. Felton is only viable in PPR formats.\u00a0\n",
    "timestamp": "2021-10-18 10:04 PM",
    "source": "Ian Rapoport on Twitter",
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/uqzgq9urghrlu89ckqsm",
    "week01": "DNP",
    "week02": "DNP",
    "week03": 2.3,
    "week04": 2.2,
    "week05": 0.0,
    "week06": 2.4,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 2.3, 2.2, 0.0, 2.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 4.7, 4.6, 3.4, 5.9, 5.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 1.9, 0.9, 0.0, 0.5, 0.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 8.8, 10.8, 6.5, 7.8, 7.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3916430.png",
    "name": "Nyheim Hines",
    "depthchart": "Backup: RB-2",
    "team": "Indianapolis Colts",
    "projected": 5.6,
    "opponent": "San Francisco 49ers",
    "home_away": "at ",
    "opp_rank_Neu": 17,
    "team_rank_Neu": 11,
    "avg_fp2": 5.82,
    "opp_rank_allowed_fp2_Neu": 14,
    "opp_avg_allowed_fp2": 21.24,
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
    "headlineNews": "Nyheim Hines rushed four times for 13 yards in Indianapolis' Week 6 win over the Texans, adding one catch for nine yards on two targets.\n",
    "report": "",
    "analysis": "Since the Colts started trying to establish Marlon Mack's trade value, Hines has been the one suffering: He has just 13 touches since Week 4. Hines still has plenty of talent, but beyond holding him for an expanded role in the event of a Jonathan Taylor injury, it's hard to actually play him if he's on your roster while he's getting this lost in the shuffle. He'll be off all but deep league radars against the 49ers in Week 7.\u00a0\n",
    "timestamp": "2021-10-17 10:08 PM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "week01": 11.2,
    "week02": 2.7,
    "week03": 16.4,
    "week04": 0.1,
    "week05": 1.8,
    "week06": 2.7,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.2, 2.7, 16.4, 0.1, 1.8, 2.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.7, 10.2, 6.7, 8.9, 6.8, 6.9, 5.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.2, 2.7, 4.7, 14.0, 6.2, 7.2, 4.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.4, 13.3, 13.2, 16.7, 11.6, 11.5, 9.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3128721.png",
    "name": "Sony Michel",
    "depthchart": "Backup: RB-2",
    "team": "Los Angeles Rams",
    "projected": 5.5,
    "opponent": "Detroit Lions",
    "home_away": "",
    "opp_rank_Pos": 26,
    "team_rank_Neu": 21,
    "avg_fp2": 4.75,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 29.62,
    "fanduelSalary": "$5300",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Shoulder",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Sony Michel rushed nine times for 42 yards in the Rams' Week 6 win over the Giants.\n",
    "report": "",
    "analysis": "Five of his carries came on consecutive plays near the end of the game. The Rams had a 27-point lead and were resting some of their starters already. Michel is strictly a backup to Darrell Henderson and doesn't project for more than a handful of carries versus the Lions next week. The backup did pick up a shoulder injury in this game that could force him to miss some practice time.\u00a0\n",
    "timestamp": "2021-10-19 01:08 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 0.2,
    "week02": 4.6,
    "week03": 9.4,
    "week04": -0.9,
    "week05": 11.0,
    "week06": 4.2,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.2, 4.6, 9.4, -0.9, 11.0, 4.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.7, 3.6, 5.1, 4.7, 5.8, 6.9, 5.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.7, 2.9, 3.8, 4.5, 7.1, 10.8, 7.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.0, 16.8, 9.4, 7.7, 11.5, 14.6, 11.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4035886.png",
    "name": "Khalil Herbert",
    "depthchart": "Starter: RB-1",
    "team": "Chicago Bears",
    "projected": 5.3,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "at ",
    "opp_rank_Neg": 1,
    "team_rank_Neu": 7,
    "avg_fp2": 4.4,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 16.88,
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
    "headlineNews": "Khalil Herbert rushed 19 times for 97 yards and one touchdown in the Bears' Week 6 loss to the Packers.\n",
    "report": "",
    "analysis": "With David Montgomery (knee) on I.R. and Damien Williams out after a positive COVID test, Herbert got the start and handled all 19 backfield carries and saw the only three RB targets, catching two of them for 15 yards. Herbert got the scoring started with a one-yard touchdown plunge in the first quarter following a Marquise Goodwin pass-interference call that set up the score. Herbert has looked good the last two weeks, turning his 37 carries into 172 yards and a touchdown. He should stay involved for as long as Montgomery is out, which is expected to be another couple weeks. Herbert's Week 7 draw, however, is very tough on the road in Tampa Bay.\n",
    "timestamp": "2021-10-17 08:17 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 0.0,
    "week02": 0.0,
    "week03": 0.0,
    "week04": 0.7,
    "week05": 7.5,
    "week06": 18.2,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 0.0, 0.0, 0.7, 7.5, 18.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.9, 1.6, 0.7, 1.0, 2.2, 8.1, 5.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  "rgba(195, 104, 53, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [6.9, 3.8, 3.4, 3.6, 4.6, 7.4, 15.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3122672.png",
    "name": "Royce Freeman",
    "depthchart": "Backup: RB-2",
    "team": "Carolina Panthers",
    "projected": 5.2,
    "opponent": "New York Giants",
    "home_away": "at ",
    "opp_rank_Pos": 29,
    "team_rank_Neu": 17,
    "avg_fp2": 1.45,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 26.3,
    "fanduelSalary": "$4900",
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
    "week06": 0.3,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 3.0, 1.2, 1.3, 0.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 2.9, 4.3, 6.3, 5.7, 5.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 1.4, 3.8, 3.6, 3.4, 1.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 133, 202, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 3.4, 6.2, 5.0, 5.6, 4.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2508176.png",
    "name": "David Johnson",
    "depthchart": "Backup: RB-2",
    "team": "Houston Texans",
    "projected": 5.1,
    "opponent": "Arizona Cardinals",
    "home_away": "at ",
    "opp_rank_Neu": 23,
    "team_rank_Neg": 26,
    "avg_fp2": 5.27,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 16.73,
    "fanduelSalary": "$5000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#03202F",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(3, 32, 47, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/hou.png",
    "headlineNews": "David Johnson rushed two times for seven yards and a fumble in Houston's Week 6 loss to Indianapolis, adding one catch for 14 yards.\u00a0\n",
    "report": "",
    "analysis": "With Nico Collins healthy and Brandin Cooks not swarmed by Patriots, the Texans diverted catches away from Johnson. Johnson finished with two targets. He didn't help matters by nearly fumbling on his incompletion. Without a path to more volume, Johnson is in trouble from a fantasy perspective and is probably barely on the FLEX radar heading into Week 7's game against Arizona.\u00a0\n",
    "timestamp": "2021-10-17 09:37 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 10.3,
    "week02": 5.7,
    "week03": 1.1,
    "week04": 6.3,
    "week05": 7.6,
    "week06": 0.6,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.3, 5.7, 1.1, 6.3, 7.6, 0.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.5, 4.3, 4.4, 4.5, 5.4, 5.9, 5.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [9.0, 5.2, 1.0, 6.5, 8.7, 12.5, 10.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.0, 22.7, 11.3, 16.7, 12.4, 15.0, 18.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15825.png",
    "name": "Le'Veon Bell",
    "depthchart": "Backup: RB-2",
    "team": "Baltimore Ravens",
    "projected": 5.0,
    "opponent": "Cincinnati Bengals",
    "home_away": "",
    "opp_rank_Neu": 8,
    "team_rank_Pos": 4,
    "avg_fp2": 4.45,
    "opp_rank_allowed_fp2_Neu": 14,
    "opp_avg_allowed_fp2": 20.48,
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
    "headlineNews": "Le'Veon Bell rushed eight times for 18 yards and a touchdown in the Ravens' Week 6 win over the Chargers.\u00a0\n",
    "report": "",
    "analysis": "Bell was not targeted in the passing attack. He was the third back into the game after Latavius Murray and Devonta Freeman, both of whom churned up more yards on their nine carries. Murray and Freeman both also scored. The Ravens are having fun with their \"old man\" trio in the backfield, healthy scratching Ty'Son Williams again this afternoon, but there has been zero indication Bell is about to develop FLEX value. Baltimore hosts the Bengals in Week 7.\u00a0\n",
    "timestamp": "2021-10-17 10:57 PM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": 1.1,
    "week05": "DNP",
    "week06": 7.8,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 1.1, 'DNP', 7.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 2.9, 'DNP', 4.6, 5.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 5.5, 'DNP', 5.8, 3.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 11.8, 'DNP', 8.7, 9.4]
                    }
                    
                    ]
               }
            }];




$scope.positionWR = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116406.png",
    "name": "Tyreek Hill",
    "depthchart": "Starter: WR-1",
    "team": "Kansas City Chiefs",
    "projected": 23.4,
    "opponent": "Tennessee Titans",
    "home_away": "at ",
    "opp_rank_Pos": 24,
    "team_rank_Pos": 2,
    "avg_fp2": 19.12,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 42.32,
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
    "headlineNews": "Tyreek Hill caught 8-of-11 targets for 76 yards and a touchdown in the Chiefs' Week 6 win against Washington.\u00a0\n",
    "report": "",
    "analysis": "Hill was held out of KC's final drive of the first half and first drive of the second half after aggravating the quad injury that limited his Week 6 practice participation. In obvious discomfort for much of the game, Hill toughed it out and led the Chiefs in targets, mostly of the quick-hitting variety. His usual world-class explosiveness clearly effected by the quad issue, Hill still roasted Washington defenders throughout the game, managing a touchdown before KC pulled away in the fourth quarter. Don't expect Hill to get much practice time in this week ahead of his mouth watering Week 7 matchup against Tennessee.\u00a0\n",
    "timestamp": "2021-10-17 10:18 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 31.6,
    "week02": 4.4,
    "week03": 7.2,
    "week04": 42.1,
    "week05": 11.3,
    "week06": 18.1,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [31.6, 4.4, 7.2, 42.1, 11.3, 18.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.7, 18.1, 12.2, 9.5, 14.1, 23.5, 23.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.7, 5.3, 0.6, 8.5, 11.9, 7.2, 14.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [24.3, 24.3, 15.9, 19.2, 19.7, 14.7, 24.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16800.png",
    "name": "Davante Adams",
    "depthchart": "Starter: WR-1",
    "team": "Green Bay Packers",
    "projected": 21.6,
    "opponent": "Washington Football Team",
    "home_away": "",
    "opp_rank_Pos": 32,
    "team_rank_Neu": 21,
    "avg_fp2": 16.97,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 38.0,
    "fanduelSalary": "$9000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#d7a017",
    "tmColorDark": "#203731",
    "tmColorLite_rgba": "rgba(215, 160, 23, 0.2)",
    "tmColorDark_rgba": "rgba(32, 55, 49, 0.2)",
    "tmTextLite": "#d7a017",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png",
    "headlineNews": "Davante Adams caught 4-of-5 targets for 89 yards in the Packers' Week 6 win over the Bears.\n",
    "report": "",
    "analysis": "Adams' five targets and four catches were new season-lows for Adams, but he actually tied Allen Lazard for the team lead in targets on a day Aaron Rodgers threw just 23 passes. Unfortunately for Adams, he watched Lazard score a one-yard touchdown on a shovel pass and Aaron Jones a 12-yarder in the third quarter. Adams was inches away from a long touchdown of his own but tip-toed out of bounds while trying to tightrope the sideline in the second half on a 41-yard catch-and-run. Adams should light up the Football Team at home in Week 7.\n",
    "timestamp": "2021-10-17 08:31 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 8.1,
    "week02": 16.1,
    "week03": 25.2,
    "week04": 9.4,
    "week05": 32.1,
    "week06": 10.9,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.1, 16.1, 25.2, 9.4, 32.1, 10.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.7, 12.4, 7.0, 10.3, 9.1, 12.9, 21.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [10.5, 10.7, 12.2, 15.1, 14.7, 18.2, 19.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [25.2, 30.0, 17.6, 21.5, 20.9, 25.2, 24.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3126486.png",
    "name": "Deebo Samuel",
    "depthchart": "Starter: WR-1",
    "team": "San Francisco 49ers",
    "projected": 19.7,
    "opponent": "Indianapolis Colts",
    "home_away": "",
    "opp_rank_Neu": 20,
    "team_rank_Neu": 18,
    "avg_fp2": 18.9,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 33.4,
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
    "headlineNews": "Deebo Samuel caught 3-of-9 targets for 58 yards in the 49ers' Week 5 loss to the Cardinals, adding a 13-yard touchdown run.\u00a0\n",
    "report": "",
    "analysis": "With dual-threat Trey Lance spelling Jimmy Garoppolo under center, Samuel had one of his quietest games of the season, but he managed to save his fantasy day by following his blocks on his third quarter touchdown scamper. He also had a fourth catch called back by penalty. Lance's presence was an expected drain on Samuel's efficiency, but the volume was not bad. His average depth of target also did not collapse as feared. We don't know who will be under center against the Colts when the 49ers return from bye in Week 7, but it will probably be Jimmy G. Lance did not appear ready in Arizona.\u00a0\u00a0\n",
    "timestamp": "2021-10-11 12:13 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "week01": 27.4,
    "week02": 13.1,
    "week03": 7.7,
    "week04": 31.7,
    "week05": 14.6,
    "week06": "BYE",
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [27.4, 13.1, 7.7, 31.7, 14.6, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.6, 14.5, 12.9, 9.5, 19.4, 'BYE', 19.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.3, 4.3, 2.4, 9.5, 11.1, 'BYE', 7.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.0, 18.0, 8.7, 15.9, 17.1, 'BYE', 13.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3121422.png",
    "name": "Terry McLaurin",
    "depthchart": "Starter: WR-1",
    "team": "Washington Football Team",
    "projected": 17.8,
    "opponent": "Green Bay Packers",
    "home_away": "at ",
    "opp_rank_Neg": 4,
    "team_rank_Neg": 24,
    "avg_fp2": 12.88,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 29.7,
    "fanduelSalary": "$7200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#773141",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(119, 49, 65, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png",
    "headlineNews": "Terry McLaurin has 14 targets of more than 20 yards, the third most in the NFL.\u00a0\n",
    "report": "",
    "analysis": "Ja'Marr Chase and Courtland Sutton are the only wideouts with more deep targets than McLaurin through Week 6. No other Football Team pass catchers has more than five downfield looks. McLaurin has connected on just five of those 12 downfield shots from Taylor Heinicke, who missed his top wideout on two deep throws against Kansas City's awful secondary in Week 6. The good news: McLaurin's route tree wasn't limited against the Chiefs after tweaking his hamstring in Friday's practice. His downfield usage has been encouraging in the early going; hopefully McLaurin -- fantasy's WR18 this season -- and Heinicke can find some chemistry on those high-value targets. Washington takes on Green Bay in Week 7.\u00a0\n",
    "timestamp": "2021-10-19 12:05 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 8.2,
    "week02": 22.2,
    "week03": 8.2,
    "week04": 27.3,
    "week05": 6.6,
    "week06": 4.8,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.2, 22.2, 8.2, 27.3, 6.6, 4.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.2, 14.5, 7.8, 10.2, 16.2, 11.7, 17.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.3, 5.3, 5.7, 14.2, 12.8, 12.2, 1.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.2, 18.5, 10.4, 17.5, 16.7, 20.2, 11.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3925357.png",
    "name": "Calvin Ridley",
    "depthchart": "Starter: WR-1",
    "team": "Atlanta Falcons",
    "projected": 17.2,
    "opponent": "Miami Dolphins",
    "home_away": "at ",
    "opp_rank_Pos": 29,
    "team_rank_Neu": 14,
    "avg_fp2": 11.25,
    "opp_rank_allowed_fp2_Pos": 30,
    "opp_avg_allowed_fp2": 36.62,
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
    "headlineNews": "Calvin Ridley returned to the Falcons after missing Week 5 due to a personal matter.\u00a0\n",
    "report": "",
    "analysis": "Coming off a bye, Ridley will play this week against the Dolphins on two weeks' rest. Ridley hasn't seen the downfield opportunities that made him so valuable in fantasy last season, but he was still dominating Atlanta's target share (27 percent) and air yards share (47 percent) before missing the team's Week 5 win against the Jets. Ridley should be considered a high-end WR2 this week against Miami.\u00a0\n",
    "timestamp": "2021-10-18 05:00 PM",
    "source": "AtlantaFalcons.com ",
    "game_day_logo": "",
    "week01": 7.6,
    "week02": 15.8,
    "week03": 10.1,
    "week04": 11.5,
    "week05": "DNP",
    "week06": "BYE",
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.6, 15.8, 10.1, 11.5, 'DNP', 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.9, 9.6, 8.9, 14.3, 'DNP', 'BYE', 17.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.0, 4.9, 12.3, 14.6, 'DNP', 'BYE', 13.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.2, 22.2, 22.0, 19.1, 'DNP', 'BYE', 17.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4241478.png",
    "name": "DeVonta Smith",
    "depthchart": "Starter: WR-1",
    "team": "Philadelphia Eagles",
    "projected": 16.2,
    "opponent": "Las Vegas Raiders",
    "home_away": "at ",
    "opp_rank_Neu": 10,
    "team_rank_Neu": 23,
    "avg_fp2": 9.0,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 25.02,
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
    "headlineNews": "DeVonta Smith caught 2-of-4 targets for 31 yards in the Eagles' Week 6 loss to the Bucs.\u00a0\n",
    "report": "",
    "analysis": "Coming off a two-game stretch where he caught 14 passes for 199 yards, Smith disappeared for his quietest game since Week 2 even as the Bucs' injury-ruined secondary lost desperation starter Richard Sherman to an early hamstring injury. There just wasn't much for Smith to do as Jalen Hurts completed 12 total passes and struggled to sustain drives outside of jump ball DPI penalties. Smith has cleared 71 yards in 3-of-6 appearances, confirming his upside. The downside is just all too apparent in this limited attack. Smith will remain a boom/bust WR3 for Week 7 vs. the Raiders.\u00a0\n",
    "timestamp": "2021-10-15 05:11 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 16.1,
    "week02": 2.6,
    "week03": 4.3,
    "week04": 15.7,
    "week05": 11.2,
    "week06": 4.1,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [16.1, 2.6, 4.3, 15.7, 11.2, 4.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.7, 15.0, 12.4, 9.0, 11.2, 9.7, 16.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.3, 5.8, 4.1, 2.4, 4.6, 6.0, 4.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.6, 23.8, 19.5, 15.3, 19.2, 22.2, 13.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2977187.png",
    "name": "Cooper Kupp",
    "depthchart": "Starter: WR-1",
    "team": "Los Angeles Rams",
    "projected": 15.4,
    "opponent": "Detroit Lions",
    "home_away": "",
    "opp_rank_Neu": 19,
    "team_rank_Pos": 4,
    "avg_fp2": 21.63,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 27.3,
    "fanduelSalary": "$8800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Cooper Kupp caught 9-of-12 targets for 130 yards and two touchdowns in the Rams' Week 6 win over the Giants.\n",
    "report": "",
    "analysis": "Kupp now has seven touchdowns on the year and three games with multiple scores. Through six weeks, he has out-targeted Robert Woods 68-44. As has been the case all season, Kupp was also involved in the red zone, scoring one of his touchdowns from just three yards out. With a dominant target lead over Woods and plenty of scoring opportunities, Kupp is a locked-in WR1 going forward. He gets a fantasy matchup with the lowly Lions next week and has to be ranked as a top-five option at his position.\u00a0\n",
    "timestamp": "2021-10-17 08:38 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 20.3,
    "week02": 32.3,
    "week03": 26.1,
    "week04": 8.9,
    "week05": 12.7,
    "week06": 29.5,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [20.3, 32.3, 26.1, 8.9, 12.7, 29.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.5, 16.1, 19.1, 18.9, 21.5, 13.6, 15.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.3, 4.1, 13.4, 3.0, 7.2, 13.9, 24.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.1, 17.6, 21.6, 12.8, 16.4, 19.3, 29.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16731.png",
    "name": "Brandin Cooks",
    "depthchart": "Starter: WR-1",
    "team": "Houston Texans",
    "projected": 14.0,
    "opponent": "Arizona Cardinals",
    "home_away": "at ",
    "opp_rank_Neg": 6,
    "team_rank_Neg": 29,
    "avg_fp2": 12.43,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 33.37,
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
    "headlineNews": "Brandin Cooks caught 9-of-13 targets for 89 yards in Houston's Week 6 loss to Indianapolis.\u00a0\n",
    "report": "",
    "analysis": "It's impossible to say that Davis Mills doesn't lock on to Cooks, and even without the two connecting on a real deep pass, Cooks still managed a ton of targets.\u00a0Cooks was targeted once in the end zone but the ball drifted harmlessly away. He was also the target near the goal line of Mills' second interception.\u00a0He will remain a volume-based WR2/WR3 going forward, including against Arizona in Week 7.\u00a0\n",
    "timestamp": "2021-10-18 03:41 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 15.7,
    "week02": 18.3,
    "week03": 16.2,
    "week04": 7.2,
    "week05": 3.8,
    "week06": 13.4,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [15.7, 18.3, 16.2, 7.2, 3.8, 13.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.1, 12.4, 13.2, 8.2, 11.6, 15.5, 14.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.6, 4.1, 11.9, 10.4, 7.5, 4.4, 4.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.3, 19.3, 19.2, 22.1, 13.9, 10.7, 15.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16737.png",
    "name": "Mike Evans",
    "depthchart": "Starter: WR-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 13.1,
    "opponent": "Chicago Bears",
    "home_away": "",
    "opp_rank_Neu": 8,
    "team_rank_Pos": 1,
    "avg_fp2": 13.58,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 31.78,
    "fanduelSalary": "$7100",
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
    "game_day_logo": "",
    "week01": 3.9,
    "week02": 22.0,
    "week03": 14.6,
    "week04": 11.0,
    "week05": 26.3,
    "week06": 3.7,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(163, 29, 47, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.9, 22.0, 14.6, 11.0, 26.3, 3.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.3, 9.9, 10.2, 17.8, 10.8, 11.2, 13.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.2, 6.2, 5.9, 8.7, 9.2, 6.8, 6.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(163, 29, 47, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [22.0, 21.9, 15.5, 19.3, 20.8, 14.1, 22.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3128429.png",
    "name": "Courtland Sutton",
    "depthchart": "Starter: WR-1",
    "team": "Denver Broncos",
    "projected": 13.0,
    "opponent": "Cleveland Browns",
    "home_away": "at ",
    "opp_rank_Neu": 9,
    "team_rank_Neu": 13,
    "avg_fp2": 12.6,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 34.3,
    "fanduelSalary": "$6700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e17757",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(225, 119, 87, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#e17757",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/den.png",
    "headlineNews": "Courtland Sutton caught 8-of-14 targets for 94 yards and one score in Denver's Week 6 loss to Las Vegas.\n",
    "report": "",
    "analysis": "Denver was dog-walked by Las Vegas' front-seven but Sutton still managed to get there with a 12-yard touchdown in garbage time. His day could have been salvaged further had Teddy Bridgewater not missed him streaking wide open downfield for a would-be 50-plus yard score in the first half. Sunday's leader in air yards at any position, Sutton's prowess as the team's only deep threat keeps him locked-in as a high-floor, high-ceiling WR2 even when Jerry Jeudy (ankle) is activated from injured reserve. Sutton should be treated as such on Thursday against Cleveland.\n",
    "timestamp": "2021-10-18 02:55 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/uqzgq9urghrlu89ckqsm",
    "week01": 1.9,
    "week02": 20.4,
    "week03": 6.2,
    "week04": 6.2,
    "week05": 21.5,
    "week06": 19.4,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.9, 20.4, 6.2, 6.2, 21.5, 19.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.4, 7.2, 9.9, 6.4, 8.3, 8.9, 13.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.8, 4.2, 6.1, 6.0, 4.4, 4.9, 4.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(225, 119, 87, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.3, 13.1, 11.1, 9.9, 10.2, 11.7, 12.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2974858.png",
    "name": "Kenny Golladay",
    "depthchart": "Starter: WR-1",
    "team": "New York Giants",
    "projected": 12.4,
    "opponent": "Carolina Panthers",
    "home_away": "",
    "opp_rank_Neg": 2,
    "team_rank_Neu": 10,
    "avg_fp2": 7.34,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 28.8,
    "fanduelSalary": "$5700",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Knee",
    "tmColorLite": "#A71930",
    "tmColorDark": "#0B2265",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(11, 34, 101, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png",
    "headlineNews": "Kenny Golladay (hyperextended knee) remained sidelined for Thursday's practice.\n",
    "report": "",
    "analysis": "With back-to-back 'DNPs' ahead of Week 6, Golladay will undoubtedly be ruled out on Friday's injury report. In other news, Sterling Shepard (hamstring) and Darius Slayton (hamstring) are expected to return after participating in every session mid-week. Daniel Jones' pending status in the league's concussion protocol will ultimately tell whether New York's offense offers any pushback against Los Angeles'.\n",
    "timestamp": "2021-10-14 04:31 PM",
    "source": "Dan Duggan on Twitter",
    "game_day_logo": "",
    "week01": 8.4,
    "week02": 5.3,
    "week03": 8.4,
    "week04": 14.6,
    "week05": 0.0,
    "week06": "DNP",
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.4, 5.3, 8.4, 14.6, 0.0, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.6, 13.6, 10.1, 9.1, 19.7, 'DNP', 12.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.7, 4.0, 6.6, 5.1, 2.3, 'DNP', 2.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.5, 16.4, 9.1, 8.6, 12.9, 'DNP', 12.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3042778.png",
    "name": "Corey Davis",
    "depthchart": "Starter: WR-1",
    "team": "New York Jets",
    "projected": 12.2,
    "opponent": "New England Patriots",
    "home_away": "at ",
    "opp_rank_Neu": 16,
    "team_rank_Neg": 29,
    "avg_fp2": 11.64,
    "opp_rank_allowed_fp2_Neu": 15,
    "opp_avg_allowed_fp2": 30.47,
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
    "headlineNews": "Corey Davis caught 4-of-7 targets for 45 yards in Week 5 against the Falcons.\n",
    "report": "",
    "analysis": "The seven targets were a team high. Davis got 28 of his yards and two of his catches on the Jets' final drive of the game. The volume has been there for Davis, who has 24 targets over the last three weeks, but the Jets offense has been highly inefficient with pass heavy game scripts. Davis will take a 20/302/3 line into the Jets' Week 6 bye.\n",
    "timestamp": "2021-10-10 06:26 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 24.2,
    "week02": 1.8,
    "week03": 6.6,
    "week04": 19.1,
    "week05": 6.5,
    "week06": "BYE",
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [24.2, 1.8, 6.6, 19.1, 6.5, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.8, 17.0, 3.8, 12.2, 13.7, 'BYE', 12.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.0, 1.2, 11.1, 16.6, 4.9, 'BYE', 3.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  "rgba(18, 87, 64, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.6, 15.1, 23.0, 25.9, 13.8, 'BYE', 10.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4035004.png",
    "name": "Mecole Hardman",
    "depthchart": "Backup: WR-2",
    "team": "Kansas City Chiefs",
    "projected": 11.5,
    "opponent": "Tennessee Titans",
    "home_away": "at ",
    "opp_rank_Pos": 24,
    "team_rank_Pos": 2,
    "avg_fp2": 7.77,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 42.32,
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
    "headlineNews": "Mecole Hardman caught 4-of-5 targets for 62 yards in the Chiefs' Week 6 win against Washington, adding one rush for six yards.\u00a0\n",
    "report": "",
    "analysis": "Hardman coughed up a fumble on his lone rushing attempt, another addition to his seemingly never-ending pile of mistakes. The highlight of Hardman's day was a 49-yard catch down the sideline in the first half -- a play that could have resulted in a 70-yard touchdown if Hardman would have turned to the middle of the field instead of stepping out of bounds. Hardman's usage continues to be solid: After running the second most pass routes among KC receivers last week, Hardman was second in receiving yardage among Chiefs receivers in Week 6. He'll be an OK bye week flex option next week against a bad Titans secondary.\u00a0\n",
    "timestamp": "2021-10-17 09:01 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 3.4,
    "week02": 8.2,
    "week03": 11.0,
    "week04": 5.1,
    "week05": 12.1,
    "week06": 6.8,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.4, 8.2, 11.0, 5.1, 12.1, 6.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.6, 6.3, 5.3, 4.7, 7.6, 13.7, 11.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.3, 0.2, 2.8, 4.0, 6.2, 5.1, 5.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.9, 10.9, 9.3, 10.5, 12.7, 10.5, 9.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3915416.png",
    "name": "D.J. Moore",
    "depthchart": "Starter: WR-1",
    "team": "Carolina Panthers",
    "projected": 11.4,
    "opponent": "New York Giants",
    "home_away": "at ",
    "opp_rank_Neu": 22,
    "team_rank_Neu": 15,
    "avg_fp2": 11.9,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 31.71,
    "fanduelSalary": "$7700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0085CA",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 133, 202, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#0085CA",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/car.png",
    "headlineNews": "D.J. Moore caught 5-of-13 targets for 73 yards in Carolina's Week 6 overtime loss to the Vikings.\n",
    "report": "",
    "analysis": "Moore again led the team in targets, averaging 10.6 in his last three games without either Christian McCaffrey (hamstring, IR) or Dan Arnold. The poor production was partly his fault as he registered a drop in the final quarter that would have helped move the chains. Although the 24-year-old hasn't scored in back-to-back weeks, his 25.3% target share in that stint keeps him locked in as a confident low-end WR1 in Week 7 against the Giants' secondary.\n",
    "timestamp": "2021-10-18 03:31 AM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 11.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 10.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 133, 202, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 13.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4241372.png",
    "name": "Marquise Brown",
    "depthchart": "Starter: WR-1",
    "team": "Baltimore Ravens",
    "projected": 10.9,
    "opponent": "Cincinnati Bengals",
    "home_away": "",
    "opp_rank_Neu": 13,
    "team_rank_Neu": 11,
    "avg_fp2": 15.85,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 29.04,
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
    "headlineNews": "Marquise Brown caught 4-of-5 targets for 35 yards in the Ravens' Week 6 win over the Chargers.\u00a0\n",
    "report": "",
    "analysis": "One of Brown's missed connections was ... you guessed it, a dropped touchdown. Brown seemed to mis-time his jump on a target near the goal line, and let a perfect pass go off his fingertips. These things happen. Unfortunately, Brown's statline was identical to a debuting Rashod Bateman, though one of Bateman's missed connections was a perfectly-thrown ball he turned into a Lamar Jackson \"interception.\" Bateman's arrival by no means spells doom for Brown, especially since Sammy Watkins is sidelined. Bateman will command defensive attention away from Brown. Hollywood will remain in the WR1 mix for Week 7 against the Bengals.\u00a0\n",
    "timestamp": "2021-10-17 10:54 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 16.4,
    "week02": 20.3,
    "week03": 6.8,
    "week04": 17.1,
    "week05": 29.0,
    "week06": 5.5,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [16.4, 20.3, 6.8, 17.1, 29.0, 5.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.9, 8.9, 16.9, 5.8, 12.0, 7.1, 10.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.3, 2.6, 2.6, 4.7, 4.2, 4.2, 7.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.9, 16.3, 8.2, 9.4, 8.2, 6.2, 12.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3051738.png",
    "name": "Marquez Valdes-Scantling",
    "depthchart": "Backup: WR-2",
    "team": "Green Bay Packers",
    "projected": 10.9,
    "opponent": "Washington Football Team",
    "home_away": "",
    "opp_rank_Pos": 32,
    "team_rank_Neu": 21,
    "avg_fp2": 5.53,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 38.0,
    "fanduelSalary": "$5300",
    "hasStatus": "Status",
    "healthOut": "Ir",
    "injury": "Hamstring",
    "tmColorLite": "#d7a017",
    "tmColorDark": "#203731",
    "tmColorLite_rgba": "rgba(215, 160, 23, 0.2)",
    "tmColorDark_rgba": "rgba(32, 55, 49, 0.2)",
    "tmTextLite": "#d7a017",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png",
    "headlineNews": "Packers placed\u00a0Marquez Valdes-Scantling (hamstring) on injured reserve.\n",
    "report": "",
    "analysis": "The team is reportedly concerned Valdes-Scantling, a burner on the outside, could re-aggravate his hamstring if he returns to the field too soon. He'll instead go on injured reserve through Week 6 and become eligible to return during the allotted 21-day window upon being activated. Allen Lazard is a viable addition in deeper fantasy leagues since he has the potential to soak up Valdes-Scantling's downfield role.\n",
    "timestamp": "2021-10-02 08:56 PM",
    "source": "Green Bay Packers on Twitter",
    "game_day_logo": "",
    "week01": 3.2,
    "week02": 0.0,
    "week03": 13.4,
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.2, 0.0, 13.4, 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.7, 9.8, 3.3, 'DNP', 'DNP', 'DNP', 10.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.1, 0.6, 10.3, 'DNP', 'DNP', 'DNP', 4.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.5, 13.8, 12.8, 'DNP', 'DNP', 'DNP', 7.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4035170.png",
    "name": "Marquez Callaway",
    "depthchart": "Starter: WR-1",
    "team": "New Orleans Saints",
    "projected": 10.4,
    "opponent": "Seattle Seahawks",
    "home_away": "at ",
    "opp_rank_Pos": 28,
    "team_rank_Neg": 31,
    "avg_fp2": 9.34,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 33.37,
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
    "headlineNews": "Marquez Callaway caught 4-of-8 targets for 85 yards and two touchdowns in the Saints' Week 5 win against Washington.\u00a0\n",
    "report": "",
    "analysis": "Forty-nine of those yards -- and one touchdown -- came on a Hail Mary from Jameis Winston as time expired in the first half. Callaway, who became the Saints' only real receiver option after Deonte Harris exited the game in the first half with a hamstring injury, caught his second touchdown on a blown coverage -- one of many for Washington -- in the fourth quarter. While Callaway will never be a locked-in fantasy option, Harris' possible absence could create more opportunity for him in Week 7 against Seattle.\u00a0\n",
    "timestamp": "2021-10-10 09:35 PM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mpx0s6jwjrjbhfw9rfol",
    "week01": 1.9,
    "week02": 1.8,
    "week03": 12.1,
    "week04": 8.4,
    "week05": 22.5,
    "week06": "BYE",
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.9, 1.8, 12.1, 8.4, 22.5, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.8, 9.2, 5.0, 5.6, 9.1, 'BYE', 10.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 10.8, 5.0, 8.7, 'BYE', 6.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(155, 132, 92, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [7.2, 4.1, 11.2, 5.9, 9.8, 'BYE', 17.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2976592.png",
    "name": "Sterling Shepard",
    "depthchart": "Backup: WR-2",
    "team": "New York Giants",
    "projected": 10.3,
    "opponent": "Carolina Panthers",
    "home_away": "",
    "opp_rank_Neg": 2,
    "team_rank_Neu": 10,
    "avg_fp2": 12.25,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 28.8,
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
    "headlineNews": "The New York Daily News' Pat Leonard reports\u00a0Kadarius Toney's ankle injury could be \"more serious than a simple sprain.\"\n",
    "report": "",
    "analysis": "Toney was in obvious pain on the sideline last week after aggravating the right ankle injury he picked up in Week 5 against Dallas. He left the Giants' Week 6 loss in the first quarter and did not return. Leonard said Toney would likely be out for Week 7 against Carolina, along with Kenny Golladay (knee). Sterling Shepard last week resumed his duties as a target vacuum with Toney sidelined, catching 10 of 14 targets for 76 yards against the Rams. He would be a weekly candidate for double digit targets for as long as Toney is out. Fantasy managers should roster Toney -- who had established himself as the team's alpha receiver -- for as long as possible.\u00a0\u00a0\n",
    "timestamp": "2021-10-19 03:56 PM",
    "source": "NYDailyNews.com ",
    "game_day_logo": "",
    "week01": 20.8,
    "week02": 13.0,
    "week03": 2.6,
    "week04": "DNP",
    "week05": "DNP",
    "week06": 12.6,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [20.8, 13.0, 2.6, 'DNP', 'DNP', 12.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.5, 8.9, 8.4, 'DNP', 'DNP', 8.4, 10.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.1, 4.2, 10.1, 'DNP', 'DNP', 6.8, 7.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.3, 16.9, 13.5, 'DNP', 'DNP', 10.4, 10.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2576623.png",
    "name": "DeVante Parker",
    "depthchart": "Starter: WR-1",
    "team": "Miami Dolphins",
    "projected": 10.2,
    "opponent": "Atlanta Falcons",
    "home_away": "",
    "opp_rank_Neu": 14,
    "team_rank_Neg": 28,
    "avg_fp2": 9.68,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 32.74,
    "fanduelSalary": "$5600",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Shoulder",
    "tmColorLite": "#008E97",
    "tmColorDark": "#005778",
    "tmColorLite_rgba": "rgba(0, 142, 151, 0.2)",
    "tmColorDark_rgba": "rgba(0, 87, 120, 0.2)",
    "tmTextLite": "#f5821f",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/mia.png",
    "headlineNews": "DeVante Parker (shoulder, hamstring) won't play in Week 6 against the Jaguars.\n",
    "report": "",
    "analysis": "Preston Williams is also questionable with a groin injury. Although Tua Tagovailoa is expected to return, it's possible he's forced to lean on rookie Jaylen Waddle and Mike Gesicki in an otherwise plus matchup in London.\n",
    "timestamp": "2021-10-15 07:08 PM",
    "source": "Joe Schad on Twitter",
    "game_day_logo": "",
    "week01": 10.1,
    "week02": 6.7,
    "week03": 6.2,
    "week04": 15.7,
    "week05": "DNP",
    "week06": "DNP",
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.1, 6.7, 6.2, 15.7, 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.9, 12.1, 12.4, 8.9, 'DNP', 'DNP', 10.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.9, 2.4, 10.5, 6.5, 'DNP', 'DNP', 11.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 142, 151, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.8, 15.3, 14.9, 8.8, 'DNP', 'DNP', 13.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4241802.png",
    "name": "Jalen Reagor",
    "depthchart": "Backup: WR-2",
    "team": "Philadelphia Eagles",
    "projected": 10.1,
    "opponent": "Las Vegas Raiders",
    "home_away": "at ",
    "opp_rank_Neu": 10,
    "team_rank_Neu": 23,
    "avg_fp2": 4.95,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 25.02,
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
    "headlineNews": "Jalen Reagor was held catchless on three targets in the Eagles' Week 6 loss to the Bucs.\u00a0\n",
    "report": "",
    "analysis": "Although he posted a doughnut in the box score, Reagor actually had the Eagles' two biggest plays of the night, drawing 45- and 50-yard DPI penalties to set the Eagles up at the Bucs' five and 25, respectively. He was also blatantly interfered with on what would have been a short completion. Reagor helped his team this evening but has done extremely little for fantasy managers, averaging 3/23. The Raiders are on tap for Week 7.\u00a0\n",
    "timestamp": "2021-10-15 04:56 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 13.9,
    "week02": 1.5,
    "week03": 7.8,
    "week04": 2.6,
    "week05": 3.9,
    "week06": 0.0,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [13.9, 1.5, 7.8, 2.6, 3.9, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.2, 10.8, 7.2, 6.5, 4.6, 4.3, 10.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.8, 5.0, 2.7, 3.7, 3.4, 3.7, 4.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.1, 12.2, 8.6, 9.8, 9.3, 8.8, 10.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13934.png",
    "name": "Antonio Brown",
    "depthchart": "Backup: WR-2",
    "team": "Tampa Bay Buccaneers",
    "projected": 9.8,
    "opponent": "Chicago Bears",
    "home_away": "",
    "opp_rank_Neu": 8,
    "team_rank_Pos": 1,
    "avg_fp2": 16.18,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 31.78,
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
    "headlineNews": "Antonio Brown caught 9-of-13 targets for 93 yards and a touchdown in the Bucs' Week 6 win over the Eagles.\u00a0\n",
    "report": "",
    "analysis": "Brown led the Bucs' loaded receiver corps in catches and yards for the second time in five days. Brown's biggest grab was a 23-yard touchdown in the second quarter where he got loose near the goal line as Tom Brady bought time his legs. Brown also helped ice the game with a 27-yard grab late in the fourth quarter where he adjusted to an ever-so-slightly off-target pass. Looking ridiculously springy for a 33-year-old wideout who didn't log full seasons in either 2019-20, Brown has solidified himself as a top-24 receiver in this lethal offense and has left very little separation between himself and Mike Evans/Chris Godwin. The Bears are on tap for Week 7.\u00a0\n",
    "timestamp": "2021-10-15 03:52 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 21.2,
    "week02": 2.2,
    "week03": "DNP",
    "week04": 9.8,
    "week05": 27.9,
    "week06": 19.8,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(163, 29, 47, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [21.2, 2.2, 'DNP', 9.8, 27.9, 19.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.5, 9.4, 'DNP', 11.8, 5.7, 7.8, 9.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [16.8, 9.1, 'DNP', 12.4, 10.9, 6.4, 19.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(163, 29, 47, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [30.7, 23.3, 'DNP', 17.4, 15.7, 15.7, 28.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3115378.png",
    "name": "Russell Gage",
    "depthchart": "Backup: WR-2",
    "team": "Atlanta Falcons",
    "projected": 9.5,
    "opponent": "Miami Dolphins",
    "home_away": "at ",
    "opp_rank_Pos": 29,
    "team_rank_Neu": 14,
    "avg_fp2": 2.65,
    "opp_rank_allowed_fp2_Pos": 30,
    "opp_avg_allowed_fp2": 36.62,
    "fanduelSalary": "$5200",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Ankle",
    "tmColorLite": "#A71930",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/atl.png",
    "headlineNews": "Russell Gage (ankle) returned to practice Monday.\n",
    "report": "",
    "analysis": "Monday practices are typically pretty light so his status will still need monitoring throughout the week. Still, it's a good sign that he has a shot to suit up versus the Dolphins this week. Gage has been sidelined since Week 2. He was held without a catch in Atlanta's opener but \"rebounded\" with a 5-28 line the next week. Gage remains off the fantasy radar for now as the Falcons' offense has turned out to be considerably less exciting than expected, save for a slew of Cordarrelle Patterson touchdowns.\u00a0\n",
    "timestamp": "2021-10-18 06:00 PM",
    "source": "D. Orlando Ledbetter on Twitter",
    "game_day_logo": "",
    "week01": 0.0,
    "week02": 5.3,
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "BYE",
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 5.3, 'DNP', 'DNP', 'DNP', 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.1, 5.1, 'DNP', 'DNP', 'DNP', 'BYE', 9.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.5, 0.0, 'DNP', 'DNP', 'DNP', 'BYE', 8.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.8, 10.2, 'DNP', 'DNP', 'DNP', 'BYE', 11.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3916433.png",
    "name": "Jakobi Meyers",
    "depthchart": "Starter: WR-1",
    "team": "New England Patriots",
    "projected": 9.3,
    "opponent": "New York Jets",
    "home_away": "",
    "opp_rank_Neu": 15,
    "team_rank_Neu": 19,
    "avg_fp2": 9.4,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 21.0,
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
    "headlineNews": "Jakobi Meyers caught 5-of-6 targets for 44 yards in the Patriots' Week 6 overtime loss to the Cowboys.\u00a0\n",
    "report": "",
    "analysis": "The Man Who Has Never Scored A Touchdown finally appeared to have the first of his career in the second quarter, but Meyers' 25-yard score was undone by holding. The closest he would come the rest of the evening was a fourth quarter two-point conversion. Meyers is averaging nine weekly looks, but they are not producing more than empty calorie WR3 value in PPR leagues. He will have the upside for more in a delectable Week 7 matchup with the Jets.\u00a0\n",
    "timestamp": "2021-10-18 12:56 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 7.4,
    "week02": 5.8,
    "week03": 13.9,
    "week04": 12.8,
    "week05": 7.6,
    "week06": 8.9,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.4, 5.8, 13.9, 12.8, 7.6, 8.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.6, 10.0, 6.5, 11.0, 11.6, 15.1, 9.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.5, 3.1, 4.2, 7.2, 10.9, 9.0, 6.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.0, 13.4, 10.0, 10.4, 14.7, 14.1, 9.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4035687.png",
    "name": "Michael Pittman",
    "depthchart": "Starter: WR-1",
    "team": "Indianapolis Colts",
    "projected": 9.3,
    "opponent": "San Francisco 49ers",
    "home_away": "at ",
    "opp_rank_Neu": 9,
    "team_rank_Neu": 16,
    "avg_fp2": 10.43,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 33.36,
    "fanduelSalary": "$6400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#014683",
    "tmColorDark": "#002C5F",
    "tmColorLite_rgba": "rgba(1, 70, 131, 0.2)",
    "tmColorDark_rgba": "rgba(0, 44, 95, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png",
    "headlineNews": "Michael Pittman caught 2-of-3 targets for 35 yards in Indianapolis' Week 6 win over the Texans.\n",
    "report": "",
    "analysis": "It's a disappointing target total for the second-year receiver, as T.Y. Hilton's return to the lineup jostled things up and the Colts were able to sit on the ball with a big lead for most of the second half. Pittman's fantasy status is up-in-the-air enough that he may only be a WR3/FLEX option headed into Week 7's game against the 49ers.\n",
    "timestamp": "2021-10-17 10:23 PM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "week01": 4.4,
    "week02": 16.3,
    "week03": 10.3,
    "week04": 8.9,
    "week05": 17.9,
    "week06": 4.8,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.4, 16.3, 10.3, 8.9, 17.9, 4.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.1, 9.1, 13.5, 14.5, 6.6, 13.5, 9.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.0, 0.6, 6.9, 7.2, 7.3, 4.4, 7.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.7, 4.2, 14.0, 12.7, 10.8, 14.6, 12.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2971618.png",
    "name": "Nelson Agholor",
    "depthchart": "Backup: WR-2",
    "team": "New England Patriots",
    "projected": 8.7,
    "opponent": "New York Jets",
    "home_away": "",
    "opp_rank_Neu": 15,
    "team_rank_Neu": 19,
    "avg_fp2": 6.23,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 21.0,
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
    "headlineNews": "Nelson Agholor caught 1-of-3 targets for 27 yards in the Patriots' Week 6 overtime loss to the Cowboys.\u00a0\n",
    "report": "",
    "analysis": "Today was the fourth time in six appearances as a Pat that Agholor failed to clear 32 yards. A reprise of last year's Raiders campaign simply isn't happening. Even for plus matchups like next week's date with the Jets, Agholor cannot be trusted as a DFS \"salary fitter.\"\u00a0\n",
    "timestamp": "2021-10-18 01:07 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 15.7,
    "week02": 3.6,
    "week03": 2.7,
    "week04": 7.4,
    "week05": 4.7,
    "week06": 3.3,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [15.7, 3.6, 2.7, 7.4, 4.7, 3.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.9, 13.5, 4.8, 7.6, 5.8, 9.9, 8.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.9, 1.2, 1.1, 0.0, 7.5, 1.1, 1.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.5, 12.3, 5.2, 4.4, 12.3, 6.5, 4.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2576581.png",
    "name": "Chris Moore",
    "depthchart": "Backup: WR-2",
    "team": "Houston Texans",
    "projected": 8.7,
    "opponent": "Arizona Cardinals",
    "home_away": "at ",
    "opp_rank_Neg": 6,
    "team_rank_Neg": 29,
    "avg_fp2": 7.6,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 33.37,
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
    "headlineNews": "Chris Moore caught 4-of-5 targets for 14 yards in Houston's Week 6 loss to Indianapolis.\n",
    "report": "",
    "analysis": "The good news? Five targets points to some involvement going forward. The bad news? These aren't valuable targets. The Texans have not done well on wideout screens all year and Moore was not a primary read on many plays. Moore will remain on the fantasy periphery barring more injuries in front of him, and it will be hard to recommend him against the Cardinals in Week 7.\n",
    "timestamp": "2021-10-17 09:56 PM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": 0.0,
    "week04": "DNP",
    "week05": 19.4,
    "week06": 3.4,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 0.0, 'DNP', 19.4, 3.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', -0.7, 'DNP', 0.6, 3.5, 8.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 1.2, 'DNP', 3.4, 6.8, 0.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 2.8, 'DNP', 4.9, 7.6, 6.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3134353.png",
    "name": "Tim Patrick",
    "depthchart": "Backup: WR-2",
    "team": "Denver Broncos",
    "projected": 8.6,
    "opponent": "Cleveland Browns",
    "home_away": "at ",
    "opp_rank_Neu": 9,
    "team_rank_Neu": 13,
    "avg_fp2": 10.82,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 34.3,
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
    "headlineNews": "Tim Patrick caught 3-of-6 targets for 42 yards and a touchdown in Denver's Week 6 loss to Las Vegas.\n",
    "report": "",
    "analysis": "Patrick recorded two receptions for 30 yards and a touchdown on Denver's opening drive and finished with one catch for 12 yards over the next 3.5 quarters. It was another floor performance for the 27-year-old, who has eclipsed 85 yards in 2-of-6 games this year. Patrick can still be trusted to help mask for bye weeks as a high-floor WR4 on Thursday night against Cleveland.\n",
    "timestamp": "2021-10-18 02:59 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/uqzgq9urghrlu89ckqsm",
    "week01": 11.9,
    "week02": 11.2,
    "week03": 12.3,
    "week04": 5.4,
    "week05": 12.4,
    "week06": 11.7,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.9, 11.2, 12.3, 5.4, 12.4, 11.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.4, 4.9, 8.0, 6.4, 6.9, 5.7, 8.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 1.6, 6.8, 4.6, 2.5, 3.1, 5.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(225, 119, 87, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.0, 12.7, 11.0, 9.2, 6.1, 4.8, 8.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2973405.png",
    "name": "Kalif Raymond",
    "depthchart": "Starter: WR-1",
    "team": "Detroit Lions",
    "projected": 8.5,
    "opponent": "Los Angeles Rams",
    "home_away": "at ",
    "opp_rank_Neu": 21,
    "team_rank_Neg": 25,
    "avg_fp2": 7.47,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 32.22,
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
    "headlineNews": "Kalif Raymond caught 6-of-7 targets for 37 yards in the Lions' Week 6 has loss to the Bengals.\u00a0\n",
    "report": "",
    "analysis": "Only T.J. Hockensen saw more targets than Raymond, who has -- quite horrifyingly -- become the Lions No. 2 wideout behind\u00a0Amon-Ra St. Brown. Raymond, with 15 targets over the past three games, has been a beneficiary of garbage time, with 58.6 percent of his production coming in the fourth quarter, according to Rich Hribar of Sharp Football Analysis. Raymond remains no more than a last-ditch PPR option in 14-team leagues ahead of Detroit's Week 7 game against the Rams.\u00a0\n",
    "timestamp": "2021-10-18 03:46 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 7.4,
    "week02": 2.8,
    "week03": 9.8,
    "week04": 18.1,
    "week05": 0.0,
    "week06": 6.7,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.4, 2.8, 9.8, 18.1, 0.0, 6.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.7, 8.4, 7.0, 6.7, 5.6, 8.3, 8.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 3.5, 0.4, 0.0, 0.8, 3.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 118, 182, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [5.7, 5.8, 5.9, 6.2, 6.3, 1.6, 7.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3917914.png",
    "name": "Olamide Zaccheaus",
    "depthchart": "Reserve: WR-3",
    "team": "Atlanta Falcons",
    "projected": 8.1,
    "opponent": "Miami Dolphins",
    "home_away": "at ",
    "opp_rank_Pos": 29,
    "team_rank_Neu": 14,
    "avg_fp2": 3.78,
    "opp_rank_allowed_fp2_Pos": 30,
    "opp_avg_allowed_fp2": 36.62,
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
    "headlineNews": "Olamide Zaccheaus caught 2-of-4 targets for 20 yards in Week 5 against the Jets.\n",
    "report": "",
    "analysis": "Calvin Ridley's targets went to Kyle Pitts and Cordarrelle Patterson, with Hayden Hurst (4/40/1) also getting a bump over\u00a0Zaccheaus. With Ridley and\u00a0Russell Gage potentially returning after Atlanta's Week 6 bye,\u00a0Zaccheaus can be dropped in most leagues.\n",
    "timestamp": "2021-10-10 06:17 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 0.0,
    "week02": 3.2,
    "week03": 10.7,
    "week04": 2.0,
    "week05": 3.0,
    "week06": "BYE",
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 3.2, 10.7, 2.0, 3.0, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.0, 1.9, 3.3, 9.9, 7.1, 'BYE', 8.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.3, 4.7, 12.6, 0.8, 12.4, 'BYE', 11.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [6.0, 12.7, 13.7, 1.9, 14.6, 'BYE', 11.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4241475.png",
    "name": "Henry Ruggs",
    "depthchart": "Starter: WR-1",
    "team": "Las Vegas Raiders",
    "projected": 8.1,
    "opponent": "Philadelphia Eagles",
    "home_away": "",
    "opp_rank_Neg": 5,
    "team_rank_Pos": 3,
    "avg_fp2": 11.23,
    "opp_rank_allowed_fp2_Neu": 7,
    "opp_avg_allowed_fp2": 25.88,
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
    "headlineNews": "Henry Ruggs caught 3-of-4 targets for 97 yards and one score in Las Vegas' Week 6 win over the Broncos.\n",
    "report": "",
    "analysis": "Ruggs ran himself open (as if we were at Alabama all over again) for a 48-yard touchdown on the Raiders' opening possession and, later on, setup Josh Jacobs' three-yard score with a 40-yard grab at the point of catch in man-to-man coverage. A big play waiting to happen in his sophomore year, Ruggs has encouragingly finished with at least 50 receiving yards as Las Vegas' downfield threat in every performance since Week 1. He'll be asked to do so again as a WR3/4 (with six teams on bye) in Week 7 against the Eagles.\n",
    "timestamp": "2021-10-18 12:39 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 5.6,
    "week02": 20.0,
    "week03": 10.5,
    "week04": 7.5,
    "week05": 6.6,
    "week06": 17.2,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.6, 20.0, 10.5, 7.5, 6.6, 17.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.1, 6.5, 12.8, 8.2, 14.1, 10.3, 8.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.2, 0.0, 0.0, 0.0, 2.3, 4.6, 1.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.1, 11.1, 10.0, 7.7, 7.9, 6.4, 9.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16733.png",
    "name": "Odell Beckham Jr.",
    "depthchart": "Starter: WR-1",
    "team": "Cleveland Browns",
    "projected": 7.9,
    "opponent": "Denver Broncos",
    "home_away": "",
    "opp_rank_Neu": 11,
    "team_rank_Neg": 26,
    "avg_fp2": 7.17,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 31.12,
    "fanduelSalary": "$6100",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Shoulder - AC Joint",
    "tmColorLite": "#FF3C00",
    "tmColorDark": "#311D00",
    "tmColorLite_rgba": "rgba(255, 60, 0, 0.2)",
    "tmColorDark_rgba": "rgba(49, 29, 0, 0.2)",
    "tmTextLite": "#FF3C00",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
    "headlineNews": "Odell Beckham (shoulder) remained sidelined for Tuesday's practice.\n",
    "report": "",
    "analysis": "It's the second straight 'DNP' for Beckham, who suffered a shoulder injury on Sunday against the Cardinals.\u00a0Donovan Peoples-Jones, who ran a route on a team-high 77.5% of\u00a0Baker Mayfield's dropbacks on Sunday, would be glued to the field as an every-down player if Beckham can't go on Thursday against Denver. His participation in Wednesday's practice is crucial.\n",
    "timestamp": "2021-10-19 09:04 PM",
    "source": "Troy Renck on Twitter",
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/uqzgq9urghrlu89ckqsm",
    "week01": "DNP",
    "week02": "DNP",
    "week03": 11.2,
    "week04": 4.1,
    "week05": 3.0,
    "week06": 10.4,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 11.2, 4.1, 3.0, 10.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 11.3, 9.7, 7.1, 7.4, 7.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 6.2, 10.7, 11.6, 9.0, 9.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 14.6, 14.1, 15.7, 13.8, 15.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4047646.png",
    "name": "A.J. Brown",
    "depthchart": "Starter: WR-1",
    "team": "Tennessee Titans",
    "projected": 7.9,
    "opponent": "Kansas City Chiefs",
    "home_away": "",
    "opp_rank_Pos": 25,
    "team_rank_Neg": 27,
    "avg_fp2": 7.38,
    "opp_rank_allowed_fp2_Neu": 9,
    "opp_avg_allowed_fp2": 28.41,
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
    "headlineNews": "A.J. Brown caught 7-of-9 targets for 91 yards in the Titans' Week 6 win over the Bills Monday night.\n",
    "report": "",
    "analysis": "The nine targets matched Brown's season high while the catches and yards were new high-water marks for him after injuries had limited him the previous three weeks. Brown's biggest hurdle in this one was the food poisoning bout he battled the last 23-48 hours that was still hampering him in a catch-less first half. He did all of his damage in the final 30 minutes of game action. Brown looked like his normal after-catch self with the ball in his hands. Brown needs to take care of his body on a short week ahead of a mouthwatering Week 7 date with the Chiefs.\n",
    "timestamp": "2021-10-19 03:15 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 12.9,
    "week02": 5.8,
    "week03": 0.3,
    "week04": "DNP",
    "week05": 5.3,
    "week06": 12.6,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.9, 5.8, 0.3, 'DNP', 5.3, 12.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.8, 8.2, 9.9, 'DNP', 10.8, 7.7, 7.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.5, 0.0, 20.6, 'DNP', 8.2, 0.0, 3.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [20.7, 21.9, 29.1, 'DNP', 19.4, 9.4, 14.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/combiner/i?img=/i/headshots/nophoto.png",
    "name": "Amon-Ra St. Brown",
    "depthchart": "Backup: WR-2",
    "team": "Detroit Lions",
    "projected": 7.6,
    "opponent": "Los Angeles Rams",
    "home_away": "at ",
    "opp_rank_Neu": 21,
    "team_rank_Neg": 25,
    "avg_fp2": 5.73,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 32.22,
    "fanduelSalary": "$5400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0076B6",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(0, 118, 182, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#0076B6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/det.png",
    "headlineNews": "Kalif Raymond caught 6-of-7 targets for 37 yards in the Lions' Week 6 has loss to the Bengals.\u00a0\n",
    "report": "",
    "analysis": "Only T.J. Hockensen saw more targets than Raymond, who has -- quite horrifyingly -- become the Lions No. 2 wideout behind\u00a0Amon-Ra St. Brown. Raymond, with 15 targets over the past three games, has been a beneficiary of garbage time, with 58.6 percent of his production coming in the fourth quarter, according to Rich Hribar of Sharp Football Analysis. Raymond remains no more than a last-ditch PPR option in 14-team leagues ahead of Detroit's Week 7 game against the Rams.\u00a0\n",
    "timestamp": "2021-10-18 03:46 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 3.3,
    "week02": 3.3,
    "week03": 0.7,
    "week04": 10.0,
    "week05": 10.0,
    "week06": 7.1,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.3, 3.3, 0.7, 10.0, 10.0, 7.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.6, 4.7, 6.6, 4.4, 3.4, 4.3, 7.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 1.9, 0.6, 0.9, 1.6, 3.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 118, 182, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [5.5, 9.6, 11.3, 9.5, 10.4, 11.6, 10.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3043116.png",
    "name": "Demarcus Robinson",
    "depthchart": "Reserve: WR-3",
    "team": "Kansas City Chiefs",
    "projected": 7.5,
    "opponent": "Tennessee Titans",
    "home_away": "at ",
    "opp_rank_Pos": 24,
    "team_rank_Pos": 2,
    "avg_fp2": 4.93,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 42.32,
    "fanduelSalary": "$5300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Chiefs head coach Andy Reid said the team would \"keep bringing [Josh Gordon] along\" after Gordon did not see a target in Week 6 against Washington.\u00a0\n",
    "report": "",
    "analysis": "Gordon played just 11 snaps agains the Football Team after his nine-snap, one-target Week 5 debut against Buffalo. Byron Pringle and Demarcus Robinson each had solid outings against Washington, and both players should remain ahead of Gordon in the short term. Fantasy managers' desire for a third fantasy-relevant pass catcher in the KC offense may never come to fruition. Gordon should remain on the waiver wire this week.\u00a0\n",
    "timestamp": "2021-10-19 01:33 PM",
    "source": "Arrowheadpride.com ",
    "game_day_logo": "",
    "week01": 1.4,
    "week02": 12.1,
    "week03": 2.7,
    "week04": 0.0,
    "week05": 1.3,
    "week06": 12.1,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.4, 12.1, 2.7, 0.0, 1.3, 12.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.5, 3.5, 3.1, 2.3, 5.0, 7.4, 7.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 1.9, 7.9, 1.2, 0.2, 0.2, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.1, 8.5, 9.8, 7.8, 8.5, 9.3, 9.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3128390.png",
    "name": "Allen Lazard",
    "depthchart": "Reserve: WR-3",
    "team": "Green Bay Packers",
    "projected": 7.4,
    "opponent": "Washington Football Team",
    "home_away": "",
    "opp_rank_Pos": 32,
    "team_rank_Neu": 21,
    "avg_fp2": 3.9,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 38.0,
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
    "headlineNews": "Allen Lazard caught 3-of-5 targets for 27 yards and one touchdown in the Packers' Week 6 win over the Bears.\n",
    "report": "",
    "analysis": "His five targets tied Davante Adams for the team lead, and Lazard snagged Aaron Rodgers' first touchdown of the day on a one-yard shovel pass. It was Lazard's first score of the season after he entered this one with seven catches for 97 yards on the year. Lazard isn't a fantasy option for Week 7 against Washington.\n",
    "timestamp": "2021-10-17 08:51 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 2.6,
    "week02": 0.0,
    "week03": 4.7,
    "week04": 4.3,
    "week05": 1.6,
    "week06": 10.2,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.6, 0.0, 4.7, 4.3, 1.6, 10.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [0.7, 6.2, 2.0, 4.9, 2.7, 5.8, 7.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.4, 1.2, 5.0, 12.1, 2.2, 0.1, 0.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.1, 14.4, 14.9, 15.6, 4.9, 6.0, 8.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116165.png",
    "name": "Chris Godwin",
    "depthchart": "Reserve: WR-3",
    "team": "Tampa Bay Buccaneers",
    "projected": 7.2,
    "opponent": "Chicago Bears",
    "home_away": "",
    "opp_rank_Neu": 8,
    "team_rank_Pos": 1,
    "avg_fp2": 12.35,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 31.78,
    "fanduelSalary": "$6700",
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
    "game_day_logo": "",
    "week01": 19.0,
    "week02": 14.2,
    "week03": 16.6,
    "week04": 7.0,
    "week05": 10.5,
    "week06": 6.8,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(163, 29, 47, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [19.0, 14.2, 16.6, 7.0, 10.5, 6.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.9, 7.7, 10.7, 9.0, 5.4, 5.4, 7.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.9, 4.3, 12.2, 12.1, 9.3, 7.9, 6.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(163, 29, 47, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.5, 18.5, 16.7, 15.1, 17.5, 16.2, 13.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3916945.png",
    "name": "Darius Slayton",
    "depthchart": "Reserve: WR-3",
    "team": "New York Giants",
    "projected": 7.2,
    "opponent": "Carolina Panthers",
    "home_away": "",
    "opp_rank_Neg": 2,
    "team_rank_Neu": 10,
    "avg_fp2": 7.4,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 28.8,
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
    "headlineNews": "Darius Slayton (hamstring) practiced on Wednesday.\n",
    "report": "",
    "analysis": "Slayton appeared to have a shot of playing in Week 6 but was ultimately ruled out. With Kadarius Toney and Kenny Golladay both very unlikely to play in Week\u00a0 against the Panthers, Slayton's return would be a much needed boost to the offense. Slayton has played well this season with 2.02 yards per route run and would step into available targets if he's able to return in Week 7.\n",
    "timestamp": "2021-10-20 03:26 PM",
    "source": "Ralph Vacchiano on Twitter",
    "game_day_logo": "",
    "week01": 8.0,
    "week02": 12.9,
    "week03": 1.3,
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.0, 12.9, 1.3, 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.1, 10.4, 8.2, 'DNP', 'DNP', 'DNP', 7.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.1, 1.0, 0.0, 'DNP', 'DNP', 'DNP', 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.2, 18.2, 11.4, 'DNP', 'DNP', 'DNP', 11.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2574808.png",
    "name": "Robby Anderson",
    "depthchart": "Backup: WR-2",
    "team": "Carolina Panthers",
    "projected": 7.1,
    "opponent": "New York Giants",
    "home_away": "at ",
    "opp_rank_Neu": 22,
    "team_rank_Neu": 15,
    "avg_fp2": 6.47,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 31.71,
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
    "headlineNews": "Robby Anderson caught 3-of-11 targets for 11 yards and a touchdown in Carolina's Week 6 loss to the Vikings.\n",
    "report": "",
    "analysis": "The good news is Anderson registered a 26.8% target share from Sam Darnold, salvaging his afternoon with a seven-yard touchdown with 1:27 remaining to tie the game at 28 all. The bad news is that he registered as many drops (3) as receptions, constantly mishandling throws from Darnold that would have otherwise moved the chains. The duo's disconnect has been evident all year, but Anderson has still fortunately averaged 9.6 targets in Carolina's last three games without Christian McCaffrey (hamstring, IR) and Dan Arnold. Admittedly hard to trust, Anderson's involvement behind D.J. Moore the past three weeks will still keep him locked in as an opportunity-based WR3/4 in Week 7 against the Giants.\n",
    "timestamp": "2021-10-18 03:20 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 12.2,
    "week02": 5.3,
    "week03": 1.3,
    "week04": 7.4,
    "week05": 4.0,
    "week06": 8.6,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.2, 5.3, 1.3, 7.4, 4.0, 8.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.9, 4.9, 5.4, 7.6, 4.7, 6.0, 7.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.4, 2.8, 12.3, 2.1, 13.1, 4.0, 5.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 133, 202, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.4, 16.9, 15.4, 8.5, 16.6, 7.5, 9.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15795.png",
    "name": "DeAndre Hopkins",
    "depthchart": "Starter: WR-1",
    "team": "Arizona Cardinals",
    "projected": 7.0,
    "opponent": "Houston Texans",
    "home_away": "",
    "opp_rank_Neu": 18,
    "team_rank_Neu": 9,
    "avg_fp2": 14.28,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 25.02,
    "fanduelSalary": "$8000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#97233F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(151, 35, 63, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#97233F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
    "headlineNews": "DeAndre Hopkins caught 3-of-4 targets for 55 yards and two touchdowns in the Cardinals' Week 6 win over the Browns.\n",
    "report": "",
    "analysis": "With six receiving touchdowns on the year, Hopkins has now matched his scoring total from 2020. He's also one score away from tying his 2019 total. The touchdowns are doing a lot of legwork for his fantasy production because he still hasn't hit 100 yards or caught more than six passes in a game. He fell behind Christian Kirk and A.J. Green in targets this week. Those two saw eight and six looks respectively. Both players caught a touchdown as well. Hopkins' target share now sits at 19 percent. Since 2015, his lowest target share is 26 percent. Hopkins remains in the WR1 conversation but his volume leaves a lot to be desired. He'll need to keep up his gaudy touchdown numbers to avoid being bumped into WR2 territory.\n",
    "timestamp": "2021-10-18 04:17 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 23.3,
    "week02": 13.4,
    "week03": 3.6,
    "week04": 8.7,
    "week05": 17.7,
    "week06": 19.0,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [23.3, 13.4, 3.6, 8.7, 17.7, 19.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.3, 16.9, 19.7, 14.4, 11.1, 7.2, 7.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.5, 7.0, 11.7, 6.1, 8.0, 9.0, 7.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.6, 21.7, 19.8, 11.1, 15.4, 14.8, 13.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3121427.png",
    "name": "Curtis Samuel",
    "depthchart": "Backup: WR-2",
    "team": "Washington Football Team",
    "projected": 6.9,
    "opponent": "Green Bay Packers",
    "home_away": "at ",
    "opp_rank_Neg": 4,
    "team_rank_Neg": 24,
    "avg_fp2": 2.35,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 29.7,
    "fanduelSalary": "$5000",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Groin",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#773141",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(119, 49, 65, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png",
    "headlineNews": "Washington declared Curtis Samuel (groin) out for Week 6 against the Chiefs.\n",
    "report": "",
    "analysis": "Samuel is week to week with a groin injury that he suffered in Week 5, so it's no surprise that he has been ruled out against the Chiefs. His absence, along with Cam Sims missing Week 6, could open up opportunity for Dyami Brown in what could be a high volume passing game. Brown has struggled to connect with Taylor Heinicke however, so Samuel's absence is likely to cement Terry McLaurin as the engine of the passing offense--assuming McLaurin isn't sidelined by his hamstring injury.\u00a0\n",
    "timestamp": "2021-10-15 09:20 PM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": 3.9,
    "week05": 0.8,
    "week06": "DNP",
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 3.9, 0.8, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 4.4, 9.6, 'DNP', 6.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 6.8, 0.7, 'DNP', 8.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 9.2, 2.7, 'DNP', 11.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16799.png",
    "name": "Allen Robinson",
    "depthchart": "Starter: WR-1",
    "team": "Chicago Bears",
    "projected": 6.8,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "at ",
    "opp_rank_Pos": 27,
    "team_rank_Neg": 32,
    "avg_fp2": 6.65,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 33.77,
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
    "headlineNews": "Allen Robinson caught 4-of-7 targets for 53 yards in the Bears' Week 6 loss to the Packers.\n",
    "report": "",
    "analysis": "The targets, yards, and catches were all Robinson's second-most of the season, pointing to how bad of a year it's been for him through six weeks. Robinson has just one touchdown. Justin Fields had him wide open on a long would-be touchdown in this one but was under pressure and couldn't make the throw. Robinson will be a WR3 next week on the road against the Bucs where the Bears will likely be playing catch-up all afternoon.\n",
    "timestamp": "2021-10-17 08:47 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 6.5,
    "week02": 9.4,
    "week03": 3.7,
    "week04": 7.8,
    "week05": 5.2,
    "week06": 7.3,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.5, 9.4, 3.7, 7.8, 5.2, 7.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.8, 8.8, 3.8, 9.8, 7.3, 5.5, 6.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.5, 5.2, 7.1, 6.7, 5.9, 6.0, 4.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  "rgba(195, 104, 53, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [20.5, 19.4, 17.8, 14.3, 13.5, 14.5, 12.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3045523.png",
    "name": "Kendrick Bourne",
    "depthchart": "Reserve: WR-3",
    "team": "New England Patriots",
    "projected": 6.4,
    "opponent": "New York Jets",
    "home_away": "",
    "opp_rank_Neu": 15,
    "team_rank_Neu": 19,
    "avg_fp2": 8.67,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 21.0,
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
    "headlineNews": "Kendrick Bourne scored a 75-yard touchdown in the Patriots' Week 6 overtime loss to the Cowboys.\u00a0\n",
    "report": "",
    "analysis": "Bourne's score with 2:11 remaining was one of just two looks on the afternoon. He put a double move on Trevon Diggs and the safety was late arriving as Mac Jones made a perfect throw. The touchdown was his second in a Patriots uniform. Bourne's other target was a too-high Jones pass moments earlier that resulted in a Diggs pick six. Despite drawing only five targets over the past two weeks, Bourne is now averaging 64 yards over his past four games. The Jets are a plus Week 7 matchup.\u00a0\n",
    "timestamp": "2021-10-18 01:00 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 2.2,
    "week02": 3.6,
    "week03": 18.6,
    "week04": 8.3,
    "week05": 5.3,
    "week06": 14.0,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.2, 3.6, 18.6, 8.3, 5.3, 14.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.7, 4.7, 3.5, 5.6, 3.5, 4.8, 6.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.5, 1.2, 0.2, 1.5, 5.4, 4.5, 5.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.5, 9.3, 3.2, 5.1, 7.3, 7.4, 9.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4047650.png",
    "name": "D.K. Metcalf",
    "depthchart": "Starter: WR-1",
    "team": "Seattle Seahawks",
    "projected": 6.0,
    "opponent": "New Orleans Saints",
    "home_away": "",
    "opp_rank_Pos": 24,
    "team_rank_Neu": 22,
    "avg_fp2": 14.93,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 32.66,
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
    "headlineNews": "DK Metcalf caught 6-of-7 targets for 58 yards in the Seahawks' Week 6 loss to the Steelers.\n",
    "report": "",
    "analysis": "Metcalf was Geno Smith's most productive option, but that's not saying much on a night when the veteran quarterback had just 209 yards. His most notable play came at the end of regulation when he decided not to step out of bounds as the Seahawks tried to get in field goal range and ended up fumbling. Freddie Swain fortunately recovered and ran the ball back to the middle of the field, allowing Jason Myers to tie the game as the clock hit triple zeroes. Metcalf should be bumped down into WR2 territory until Russell Wilson returns from his finger injury. Still, the third-year pro's talent as well as Seattle's highly concentrated passing attack keeps Metcalf as a starting-caliber option for fantasy purposes despite the suboptimal quarterback play.\n",
    "timestamp": "2021-10-18 04:54 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mpx0s6jwjrjbhfw9rfol",
    "week01": 14.0,
    "week02": 8.3,
    "week03": 19.7,
    "week04": 14.5,
    "week05": 24.3,
    "week06": 8.8,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.0, 8.3, 19.7, 14.5, 24.3, 8.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.7, 15.3, 10.1, 8.5, 12.7, 16.8, 6.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.4, 4.9, 7.6, 2.5, 9.7, 5.9, 3.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [20.7, 20.5, 14.0, 13.4, 14.1, 18.1, 12.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4362628.png",
    "name": "Ja'Marr Chase",
    "depthchart": "Starter: WR-1",
    "team": "Cincinnati Bengals",
    "projected": 6.0,
    "opponent": "Baltimore Ravens",
    "home_away": "at ",
    "opp_rank_Pos": 25,
    "team_rank_Neu": 18,
    "avg_fp2": 16.43,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 25.05,
    "fanduelSalary": "$7500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#ea7330",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(234, 115, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#ea7330",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png",
    "headlineNews": "Ja'Marr Chase caught 4-of-6 targets for 97 yards in the Bengals' Week 6 win over the Lions.\n",
    "report": "",
    "analysis": "Chase had a ball bounce off his hands for an interception but made up for it with several big receptions, including a 53 yard connection. Chase continues to provide a reliable deep element to the Bengals' passing game and has been the team's best skill player this season. The rookie can be relied on as a WR2 in the Bengals' Week 7 divisional matchup with the Ravens.\n",
    "timestamp": "2021-10-17 09:35 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 18.4,
    "week02": 12.4,
    "week03": 20.5,
    "week04": 10.7,
    "week05": 24.9,
    "week06": 11.7,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [18.4, 12.4, 20.5, 10.7, 24.9, 11.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.2, 12.6, 14.6, 9.1, 8.3, 12.3, 6.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 7.0, 4.3, 4.3, 4.5, 3.8, 11.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.0, 22.5, 19.4, 17.2, 19.8, 17.9, 22.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4038818.png",
    "name": "Bryan Edwards",
    "depthchart": "Backup: WR-2",
    "team": "Las Vegas Raiders",
    "projected": 5.9,
    "opponent": "Philadelphia Eagles",
    "home_away": "",
    "opp_rank_Neg": 5,
    "team_rank_Pos": 3,
    "avg_fp2": 6.3,
    "opp_rank_allowed_fp2_Neu": 7,
    "opp_avg_allowed_fp2": 25.88,
    "fanduelSalary": "$5200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A5ACAF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lv.png",
    "headlineNews": "Bryan Edwards caught 2-of-4 passes for 67 yards in Las Vegas' Week 6 win over the Broncos.\n",
    "report": "",
    "analysis": "As always, a majority of Edwards' production occurred in the fourth quarter when he ran himself open for a 51-yard gain in garbage time. Even so, the 22-year-old has yet to achieve 90 receiving yards or a touchdown in any game this year. He can stay stashed in dynasty leagues for use (perhaps) down the road.\n",
    "timestamp": "2021-10-18 02:42 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 10.1,
    "week02": 5.5,
    "week03": 10.4,
    "week04": 0.9,
    "week05": 3.2,
    "week06": 7.7,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.1, 5.5, 10.4, 0.9, 3.2, 7.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.5, 9.9, 6.8, 5.4, 8.7, 6.2, 5.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.0, 5.3, 6.0, 1.2, 4.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [7.7, 6.1, 3.5, 10.5, 7.6, 8.3, 10.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2576716.png",
    "name": "Jamison Crowder",
    "depthchart": "Reserve: WR-3",
    "team": "New York Jets",
    "projected": 5.9,
    "opponent": "New England Patriots",
    "home_away": "at ",
    "opp_rank_Neu": 16,
    "team_rank_Neg": 29,
    "avg_fp2": 11.0,
    "opp_rank_allowed_fp2_Neu": 15,
    "opp_avg_allowed_fp2": 30.47,
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
    "headlineNews": "Jamison Crowder caught 4-of-6 targets for 24 yards in Week 5 against the Falcons.\n",
    "report": "",
    "analysis": "Crowder's targets were behind only\u00a0Corey Davis, who he tied for the team lead with four catches. Even a negative game script couldn't help Crowder, with the Jets offense running just 52 plays.\u00a0Crowder has 11 catches for 85 yards and a touchdown on 15 targets in two games since returning in Week 4. He'll get a matchup with the Patriots after the Jets' bye.\n",
    "timestamp": "2021-10-10 10:33 PM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": 15.6,
    "week05": 6.4,
    "week06": "BYE",
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 15.6, 6.4, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 10.1, 7.1, 'BYE', 5.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 5.2, 8.0, 'BYE', 4.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  "rgba(18, 87, 64, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 10.6, 14.4, 'BYE', 8.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4372016.png",
    "name": "Jaylen Waddle",
    "depthchart": "Backup: WR-2",
    "team": "Miami Dolphins",
    "projected": 5.9,
    "opponent": "Atlanta Falcons",
    "home_away": "",
    "opp_rank_Neu": 14,
    "team_rank_Neg": 28,
    "avg_fp2": 10.8,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 32.74,
    "fanduelSalary": "$5900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#008E97",
    "tmColorDark": "#005778",
    "tmColorLite_rgba": "rgba(0, 142, 151, 0.2)",
    "tmColorDark_rgba": "rgba(0, 87, 120, 0.2)",
    "tmTextLite": "#f5821f",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/mia.png",
    "headlineNews": "Jaylen Waddle caught 10-of-13 targets for 70 yards and two touchdowns in Week 6 against Jacksonville.\u00a0\n",
    "report": "",
    "analysis": "Waddle was peppered with targets with Preston Williams and DeVante Parker sidelined, and Will Fuller on IR. It's the second time he's been in double-digits this season, with Waddle also racking up 13 targets back in Week 3. Waddle scored both of his touchdowns in the red-zone \u2014 his longest play went for 14 yards \u2014 and continues to be featured mostly in the short passing game. The Dolphins seem likely to get one of Williams or Parker back next week, but Waddle will be in the flex mix for a matchup against the Falcons.\n",
    "timestamp": "2021-10-17 06:07 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 14.1,
    "week02": 5.8,
    "week03": 11.8,
    "week04": 4.8,
    "week05": 4.3,
    "week06": 24.0,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.1, 5.8, 11.8, 4.8, 4.3, 24.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.5, 9.0, 6.3, 8.0, 9.8, 9.9, 5.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.2, 3.1, 1.8, 1.5, 4.4, 4.4, 3.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 142, 151, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.6, 15.9, 11.7, 12.4, 16.6, 15.9, 18.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15880.png",
    "name": "Robert Woods",
    "depthchart": "Backup: WR-2",
    "team": "Los Angeles Rams",
    "projected": 5.8,
    "opponent": "Detroit Lions",
    "home_away": "",
    "opp_rank_Neu": 19,
    "team_rank_Pos": 4,
    "avg_fp2": 11.6,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 27.3,
    "fanduelSalary": "$6800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Robert Woods caught 2-of-5 targets for 31 yards and a touchdown in the Rams' Week 6 win over the Giants.\n",
    "report": "",
    "analysis": "After Woods finally got one over on Cooper Kupp last week, things returned to their new normal for the Rams with Kupp out-targeting Woods 12-5 this week. Kupp has 68 targets to Woods' 44 on the year. After six games, it's painfully clear that Kupp is the preferred target of Matthew Stafford. Woods and the Rams get a phenomenal matchup with the Lions next week which will mask any volume concerns surrounding Woods. He remains a low-end WR2 versus Detroit.\n",
    "timestamp": "2021-10-17 10:05 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 10.9,
    "week02": 9.5,
    "week03": 5.3,
    "week04": 12.8,
    "week05": 21.0,
    "week06": 10.1,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.9, 9.5, 5.3, 12.8, 21.0, 10.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.7, 9.9, 9.4, 8.2, 9.2, 7.8, 5.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.8, 7.0, 8.7, 7.0, 6.4, 11.6, 5.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.4, 18.4, 16.3, 14.9, 13.0, 20.8, 13.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4040655.png",
    "name": "Darnell Mooney",
    "depthchart": "Backup: WR-2",
    "team": "Chicago Bears",
    "projected": 5.6,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "at ",
    "opp_rank_Pos": 27,
    "team_rank_Neg": 32,
    "avg_fp2": 8.35,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 33.77,
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
    "headlineNews": "Darnell Mooney caught 5-of-8 targets for 45 yards and one touchdown in the Bears' Week 6 loss to the Packers.\n",
    "report": "",
    "analysis": "Mooney's five-yard touchdown grab in the fourth quarter was his first end-zone trip of the season, and his eight targets were one more than Allen Robinson for the team lead. Mooney has seen target counts of 4, 7, 5, and 8 in four games with Justin Fields under center. Mooney will be a passable WR3 next week against the Bucs' soft defense where the Bears will be playing catch-up all afternoon.\n",
    "timestamp": "2021-10-17 08:54 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 5.1,
    "week02": 9.6,
    "week03": 1.4,
    "week04": 16.0,
    "week05": 5.0,
    "week06": 13.0,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.1, 9.6, 1.4, 16.0, 5.0, 13.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.8, 4.2, 4.2, 8.0, 6.1, 3.7, 5.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.4, 3.1, 5.3, 6.5, 10.9, 9.4, 6.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  "rgba(195, 104, 53, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.1, 10.9, 6.1, 10.7, 15.8, 12.6, 11.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4239993.png",
    "name": "Tee Higgins",
    "depthchart": "Backup: WR-2",
    "team": "Cincinnati Bengals",
    "projected": 5.5,
    "opponent": "Baltimore Ravens",
    "home_away": "at ",
    "opp_rank_Pos": 25,
    "team_rank_Neu": 18,
    "avg_fp2": 10.1,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 25.05,
    "fanduelSalary": "$6100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#ea7330",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(234, 115, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#ea7330",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png",
    "headlineNews": "Tee Higgins caught 3-of-6 targets for 44 yards in the Bengals' Week 6 win over the Lions.\n",
    "report": "",
    "analysis": "Higgins had a fairly quiet day, but this was a game where Brandon Allen played over half a quarter. Higgins tied Ja'Marr Chase in targets, although Chase clearly has a stronger connection with Burrow downfield, which helped the rookie deliver 43 more yards than the sophomore. Higgins will be a WR3 against the Ravens in Week 7. It's not a perfect matchup but at least the Ravens offense will push the Bengals to play the entire game.\n",
    "timestamp": "2021-10-17 09:41 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 13.8,
    "week02": 13.0,
    "week03": "DNP",
    "week04": "DNP",
    "week05": 7.7,
    "week06": 5.9,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [13.8, 13.0, 'DNP', 'DNP', 7.7, 5.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.5, 8.9, 'DNP', 'DNP', 6.9, 8.7, 5.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.2, 6.8, 'DNP', 'DNP', 14.5, 10.7, 5.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.0, 16.1, 'DNP', 'DNP', 20.8, 14.5, 10.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14924.png",
    "name": "T.Y. Hilton",
    "depthchart": "Backup: WR-2",
    "team": "Indianapolis Colts",
    "projected": 5.3,
    "opponent": "San Francisco 49ers",
    "home_away": "at ",
    "opp_rank_Neu": 9,
    "team_rank_Neu": 16,
    "avg_fp2": 10.0,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 33.36,
    "fanduelSalary": "$6200",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Quadriceps",
    "tmColorLite": "#014683",
    "tmColorDark": "#002C5F",
    "tmColorLite_rgba": "rgba(1, 70, 131, 0.2)",
    "tmColorDark_rgba": "rgba(0, 44, 95, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png",
    "headlineNews": "Speaking Tuesday, Colts coach Frank Reich said T.Y. Hilton (quad) was \"doing fine,\" but he declined to guarantee he will be ready for Sunday's game against the 49ers.\u00a0\n",
    "report": "",
    "analysis": "\u201cWith these soft tissue things, we\u2019re going to need to let it settle for 48 hours to really start to begin to make a determination,\u201d Reich said. \u201cI\u2019m not sure we\u2019re going to be able to make a determination even by Wednesday or Thursday, so we\u2019ll just kind of keep it day by day with T.Y. \u2013 be hopeful. We know he heals faster than most people. He\u2019s unique in that way, but we\u2019ll be smart as well.\u201d Any time a coach offers something other than injury sunshine, it's worth noting. We would consider Hilton genuinely questionable for Sunday Night Football. It's bad news after Hilton made his season debut last Sunday, a victory in which Parris Campbell suffered a potentially season-ending injury. Even if Hilton does eventually suit up, he can't be trusted as more than a zero-floor WR4.\u00a0\n",
    "timestamp": "2021-10-20 02:02 AM",
    "source": "Kokomo Tribune ",
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": 10.0,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 10.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 4.6, 5.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 5.1, 8.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 14.4, 19.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4258173.png",
    "name": "Nico Collins",
    "depthchart": "Reserve: WR-3",
    "team": "Houston Texans",
    "projected": 5.2,
    "opponent": "Arizona Cardinals",
    "home_away": "at ",
    "opp_rank_Neg": 6,
    "team_rank_Neg": 29,
    "avg_fp2": 3.77,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 33.37,
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
    "headlineNews": "Nico Collins caught 4-of-6 passes for 44 yards in Houston's Week 6 loss to Indianapolis.\u00a0\n",
    "report": "",
    "analysis": "Collins tied for second on the team in targets behind Brandin Cooks and looked good in his return, picking up a few first downs. It should be noted that Chris Conley (neck) missed some time in this game and that the Texans will not throw this often unless they are getting destroyed. Still, Collins all of the sudden has a little WR4/5 appeal as a bye week dart throw. Week 7 brings Houston to Arizona against some beatable cornerbacks.\u00a0\n",
    "timestamp": "2021-10-17 09:46 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 1.2,
    "week02": 3.7,
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": 6.4,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.2, 3.7, 'DNP', 'DNP', 'DNP', 6.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.8, 0.5, 'DNP', 'DNP', 'DNP', 1.8, 5.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 'DNP', 'DNP', 'DNP', 0.0, 0.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [4.5, 3.5, 'DNP', 'DNP', 'DNP', 4.2, 9.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3071572.png",
    "name": "Keelan Cole",
    "depthchart": "Backup: WR-2",
    "team": "New York Jets",
    "projected": 5.1,
    "opponent": "New England Patriots",
    "home_away": "at ",
    "opp_rank_Neu": 16,
    "team_rank_Neg": 29,
    "avg_fp2": 4.88,
    "opp_rank_allowed_fp2_Neu": 15,
    "opp_avg_allowed_fp2": 30.47,
    "fanduelSalary": "$5100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#125740",
    "tmColorDark": "#003f2d",
    "tmColorLite_rgba": "rgba(18, 87, 64, 0.2)",
    "tmColorDark_rgba": "rgba(0, 63, 45, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png",
    "headlineNews": "Jets WR Elijah Moore (concussion) returned to practice Wednesday.\u00a0\n",
    "report": "",
    "analysis": "Moore has cleared the concussion protocol and is likely to play Sunday against the Falcons, after missing Zach Wilson's mini-breakout against the Titans. In Week 5, the Jets face a Falcons defense that has been slightly less efficient against the pass than the Titans, so Wilson is in good position to continue his success. Moore is likely to play on the outside ahead of Keelan Cole, and steal some slot snaps from Jamison Crowder. He may not be a true full time player in his return, and will be difficult to trust, even in a good matchup.\n",
    "timestamp": "2021-10-06 04:37 PM",
    "source": "Ralph Vacchiano on Twitter",
    "game_day_logo": "",
    "week01": "DNP",
    "week02": 0.0,
    "week03": 4.0,
    "week04": 10.7,
    "week05": 4.8,
    "week06": "BYE",
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 0.0, 4.0, 10.7, 4.8, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 9.7, -1.0, 4.4, 2.4, 'BYE', 5.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 0.6, 3.4, 4.8, 0.0, 'BYE', 3.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  "rgba(18, 87, 64, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 12.1, 6.5, 10.3, 8.5, 'BYE', 6.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3700815.png",
    "name": "Kendall Hinton",
    "depthchart": "Reserve: WR-3",
    "team": "Denver Broncos",
    "projected": 5.0,
    "opponent": "Cleveland Browns",
    "home_away": "at ",
    "opp_rank_Neu": 9,
    "team_rank_Neu": 13,
    "avg_fp2": 7.85,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 34.3,
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
    "headlineNews": "Kendall Hinton caught 2-of-3 targets for 25 yards and a touchdown in the Broncos' Week 5 loss to the Steelers.\n",
    "report": "",
    "analysis": "Hinton was left wide open on a play action roll out from the two yard line. He also caught a 23 yard reception. Hinton will remain off the fantasy radar when the Broncos face the Raiders in Week 6.\n",
    "timestamp": "2021-10-10 10:19 PM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/uqzgq9urghrlu89ckqsm",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": 6.2,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 6.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 3.5, 5.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 0.9, 2.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(225, 119, 87, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 10.7, 5.4]
                    }
                    
                    ]
               }
            }];



$scope.positionTE = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2576925.png",
    "name": "Darren Waller",
    "depthchart": "Starter: TE-1",
    "team": "Las Vegas Raiders",
    "projected": 12.4,
    "opponent": "Philadelphia Eagles",
    "home_away": "",
    "opp_rank_Neg": 5,
    "team_rank_Pos": 3,
    "avg_fp2": 11.05,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 13.7,
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
    "headlineNews": "Darren Waller caught all five of his targets for 59 yards in Las Vegas' Week 6 win over the Broncos.\n",
    "report": "",
    "analysis": "Waller's five targets (18.5% share) were the fewest he's accumulated in any game this year as Derek Carr chose to pepper Denver's man-to-man scheme with downfield coin-tosses, completing five passes of 30-plus yards throughout play. Having registered at least seven targets in every game prior to this one, it's an all-too-obvious time to low-ball your league mates for Waller in hopes they assume his lack of involvement will stick. He'll continue to rank as a top-three option at his position in Week 7 against the Eagles.\n",
    "timestamp": "2021-10-18 01:38 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 21.5,
    "week02": 9.0,
    "week03": 7.9,
    "week04": 13.0,
    "week05": 6.5,
    "week06": 8.4,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [21.5, 9.0, 7.9, 13.0, 6.5, 8.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.0, 15.8, 17.8, 8.8, 7.8, 5.4, 12.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.6, 2.6, 8.3, 9.3, 4.2, 3.1, 10.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.3, 18.6, 17.0, 17.0, 12.0, 11.6, 16.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15835.png",
    "name": "Zach Ertz",
    "depthchart": "Starter: TE-1",
    "team": "Arizona Cardinals",
    "projected": 11.6,
    "opponent": "Houston Texans",
    "home_away": "",
    "opp_rank_Neu": 18,
    "team_rank_Neu": 9,
    "avg_fp2": 6.65,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 15.73,
    "fanduelSalary": "$5300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#97233F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(151, 35, 63, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#97233F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
    "headlineNews": "Cardinals declared\u00a0TE Zach Ertz, QB Chris Streveler, WR Andy Isabella, RB Eno Benjamin, and LB Tanner Vallejo inactive for Week 6 against the Browns.\n",
    "report": "",
    "analysis": "Ertz played on Thursday in his final game for the Eagles. He was ineligible to play for the Cardinals this week. He will make his debut versus the Texans next week.\n",
    "timestamp": "2021-10-17 06:38 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 4.4,
    "week02": 1.1,
    "week03": 13.3,
    "week04": 9.0,
    "week05": 1.2,
    "week06": 10.9,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.4, 1.1, 13.3, 9.0, 1.2, 10.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.1, 5.4, 4.4, 3.0, 2.3, 7.5, 11.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.5, 3.6, 4.1, 4.1, 5.8, 5.3, 8.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.1, 17.3, 10.7, 7.8, 11.2, 12.2, 11.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4036131.png",
    "name": "Noah Fant",
    "depthchart": "Starter: TE-1",
    "team": "Denver Broncos",
    "projected": 11.0,
    "opponent": "Cleveland Browns",
    "home_away": "at ",
    "opp_rank_Neu": 9,
    "team_rank_Neu": 13,
    "avg_fp2": 10.05,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 7.75,
    "fanduelSalary": "$6000",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Foot",
    "tmColorLite": "#e17757",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(225, 119, 87, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#e17757",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/den.png",
    "headlineNews": "Noah Fant (foot) remained limited for Tuesday's practice.\n",
    "report": "",
    "analysis": "The Broncos are presumably taking it easy on Fant given their short turnaround for Thursday. Without Albert Okwuegbunam the past two weeks, Fant's snap rate has quietly increased to 93%, running a route on a season-high 93% of Teddy Bridgewater's dropbacks. He's a confident TE1 against Cleveland if active.\n",
    "timestamp": "2021-10-19 09:31 PM",
    "source": "Brandon Krisztal on Twitter",
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/uqzgq9urghrlu89ckqsm",
    "week01": 9.2,
    "week02": 11.3,
    "week03": 2.5,
    "week04": 13.6,
    "week05": 3.5,
    "week06": 20.2,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.2, 11.3, 2.5, 13.6, 3.5, 20.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.3, 7.9, 6.3, 7.4, 6.5, 11.1, 11.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.8, 1.6, 4.8, 5.7, 6.9, 2.5, 4.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(225, 119, 87, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.6, 10.4, 6.8, 12.0, 9.9, 5.9, 9.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3049698.png",
    "name": "Anthony Firkser",
    "depthchart": "Starter: TE-1",
    "team": "Tennessee Titans",
    "projected": 10.4,
    "opponent": "Kansas City Chiefs",
    "home_away": "",
    "opp_rank_Pos": 25,
    "team_rank_Neg": 27,
    "avg_fp2": 3.4,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 14.85,
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
    "headlineNews": "Anthony Firkser caught his only target for 11 yards in the Titans' Week 6 win over the Bills.\n",
    "report": "",
    "analysis": "Firkser has 10 catches through four games this season and is averaging 22 yards per contest with no touchdowns. He's way off the fantasy radar ahead of a Week 7 date with the Chiefs.\n",
    "timestamp": "2021-10-19 04:08 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 3.4,
    "week02": "DNP",
    "week03": "DNP",
    "week04": 3.8,
    "week05": 4.8,
    "week06": 1.6,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.4, 'DNP', 'DNP', 3.8, 4.8, 1.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.1, 'DNP', 'DNP', 6.4, 9.3, 9.0, 10.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 'DNP', 'DNP', 2.9, 3.8, 0.2, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [6.3, 'DNP', 'DNP', 4.6, 4.8, 6.9, 7.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15847.png",
    "name": "Travis Kelce",
    "depthchart": "Starter: TE-1",
    "team": "Kansas City Chiefs",
    "projected": 10.4,
    "opponent": "Tennessee Titans",
    "home_away": "at ",
    "opp_rank_Pos": 24,
    "team_rank_Pos": 2,
    "avg_fp2": 14.97,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 5.73,
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
    "headlineNews": "Travis Kelce caught 8-of-11 targets for 99 yards in the Chiefs' Week 6 win against Washington.\u00a0\n",
    "report": "",
    "analysis": "Kelce led KC in receiving while fighting through some kind of arm or wrist injury that kept him sidelined for a few plays in the second half. He seemed to be OK, playing in the team's final couple drives. Only Tyreek Hill saw more targets than Kelce on the day. Kelce hasn't had a blow-up game in a while but his role as Patrick Mahomes' most reliable pass catcher makes him the game's most dangerous tight end every single week. He gets the Titans in Week 7.\u00a0\n",
    "timestamp": "2021-10-17 08:49 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 22.6,
    "week02": 20.4,
    "week03": 13.9,
    "week04": 4.3,
    "week05": 14.7,
    "week06": 13.9,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [22.6, 20.4, 13.9, 4.3, 14.7, 13.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.6, 12.5, 11.4, 12.5, 7.3, 10.3, 10.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.1, 6.4, 12.1, 14.1, 7.8, 11.4, 8.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [20.3, 21.0, 17.5, 24.5, 12.3, 16.3, 14.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3046439.png",
    "name": "Hunter Henry",
    "depthchart": "Starter: TE-1",
    "team": "New England Patriots",
    "projected": 10.2,
    "opponent": "New York Jets",
    "home_away": "",
    "opp_rank_Neu": 15,
    "team_rank_Neu": 19,
    "avg_fp2": 8.85,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 12.78,
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
    "headlineNews": "Hunter Henry caught 2-of-2 targets for 25 yards and a touchdown in the Patriots' Week 6 overtime loss to the Cowboys.\u00a0\n",
    "report": "",
    "analysis": "The two targets were Henry's fewest of the season, but he has now scored in three-straight games. His touchdown was a 20-yard strike up the seam where he split the defenders on a play-action attempt from Mac Jones. Henry needs more volume to get in the TE1 mix, but he had finally been providing it over his past few contests before today's speed bump. The Jets are a high-end fantasy matchup for Week 7.\u00a0\n",
    "timestamp": "2021-10-18 01:29 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 4.6,
    "week02": 5.2,
    "week03": 6.1,
    "week04": 11.2,
    "week05": 16.5,
    "week06": 9.5,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.6, 5.2, 6.1, 11.2, 16.5, 9.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.8, 1.7, 3.3, 7.2, 7.0, 9.0, 10.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.3, 3.8, 4.4, 7.8, 9.0, 19.1, 3.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.0, 13.7, 8.4, 11.3, 11.1, 21.7, 6.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116365.png",
    "name": "Mark Andrews",
    "depthchart": "Starter: TE-1",
    "team": "Baltimore Ravens",
    "projected": 9.4,
    "opponent": "Cincinnati Bengals",
    "home_away": "",
    "opp_rank_Neu": 13,
    "team_rank_Neu": 11,
    "avg_fp2": 14.3,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 6.78,
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
    "headlineNews": "Mark Andrews caught 5-of-6 targets for 68 yards and a touchdown in the Ravens' Week 6 win over the Chargers.\u00a0\n",
    "report": "",
    "analysis": "Andrews' nine-yard score in the third quarter was his third in six days, continuing his regression to the touchdown mean after going 0-fer the first four games. Going at least 5/57 every game since Week 1, Andrews is staking a claim to No. 2 overall tight end status with George Kittle hurt and Darren Waller coming back down to earth. Perhaps Kyle Pitts will end up pushing Andrews. The Bengals are on deck for Week 7.\u00a0\n",
    "timestamp": "2021-10-17 10:28 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 3.5,
    "week02": 8.2,
    "week03": 13.4,
    "week04": 9.2,
    "week05": 36.2,
    "week06": 15.3,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.5, 8.2, 13.4, 9.2, 36.2, 15.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.1, 7.0, 10.0, 2.9, 8.1, 13.6, 9.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.2, 2.4, 6.6, 1.6, 8.9, 5.3, 4.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.9, 14.2, 13.6, 5.1, 13.7, 9.0, 12.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4036133.png",
    "name": "T.J. Hockenson",
    "depthchart": "Starter: TE-1",
    "team": "Detroit Lions",
    "projected": 9.0,
    "opponent": "Los Angeles Rams",
    "home_away": "at ",
    "opp_rank_Neu": 21,
    "team_rank_Neg": 25,
    "avg_fp2": 10.18,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 10.48,
    "fanduelSalary": "$6200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0076B6",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(0, 118, 182, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#0076B6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/det.png",
    "headlineNews": "T.J. Hockenson caught 8-of-11 targets for 74 yards\u00a0in the Lions' Week 6 loss to the Bengals.\n",
    "report": "",
    "analysis": "Hockenson's 74 yards qualify as a bright spot in a brutal Lions loss. The tight end saw a 26% target share the Lions were clearly intent on getting him more involved again this week. He accounted for 37% of the Lions passing yards, so that was a success in a game where the Lions had very little go right for them. Against the Rams in Week 7, Hockenson will be a highly volatile and risky option, also known as a low end TE1.\n",
    "timestamp": "2021-10-17 10:13 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 21.7,
    "week02": 16.6,
    "week03": 2.0,
    "week04": 6.2,
    "week05": 3.2,
    "week06": 11.4,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [21.7, 16.6, 2.0, 6.2, 3.2, 11.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.9, 14.1, 15.3, 8.6, 6.7, 5.3, 9.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.7, 1.9, 4.2, 2.9, 3.3, 2.3, 2.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 118, 182, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.1, 12.2, 14.7, 11.8, 11.0, 11.5, 9.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4360248.png",
    "name": "Kyle Pitts",
    "depthchart": "Starter: TE-1",
    "team": "Atlanta Falcons",
    "projected": 8.6,
    "opponent": "Miami Dolphins",
    "home_away": "at ",
    "opp_rank_Pos": 29,
    "team_rank_Neu": 14,
    "avg_fp2": 9.76,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 10.7,
    "fanduelSalary": "$6100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/atl.png",
    "headlineNews": "Kyle Pitts caught 9-of-10 targets for 119 yards and a touchdown in the Falcons' Week 5 win over the Jets.\n",
    "report": "",
    "analysis": "This was the best game of the season for Pitts, who led the Falcons in receiving and targets with Calvin Ridley out.\u00a0Pitts scored the first touchdown of his career on a goal-line play where he beat the coverage to the outside. The Falcons' usage of Pitts has been up, with 19 of his 36 targets coming in the last two weeks, an encouraging sign for his ROS outlook.\u00a0Pitts will get a tougher test for a matchup with the Dolphins secondary after Atlanta's Week 6 bye.\n",
    "timestamp": "2021-10-10 06:42 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 5.1,
    "week02": 9.8,
    "week03": 4.5,
    "week04": 7.0,
    "week05": 22.4,
    "week06": "BYE",
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.1, 9.8, 4.5, 7.0, 22.4, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.1, 8.3, 8.2, 4.3, 7.2, 'BYE', 8.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.3, 2.7, 4.1, 2.5, 3.6, 'BYE', 4.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.6, 14.1, 17.6, 13.6, 12.1, 'BYE', 16.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2573401.png",
    "name": "Tyler Higbee",
    "depthchart": "Starter: TE-1",
    "team": "Los Angeles Rams",
    "projected": 8.1,
    "opponent": "Detroit Lions",
    "home_away": "",
    "opp_rank_Neu": 19,
    "team_rank_Pos": 4,
    "avg_fp2": 7.2,
    "opp_rank_allowed_fp2_Neu": 14,
    "opp_avg_allowed_fp2": 8.43,
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
    "headlineNews": "Rams head coach Sean McVay said TE Johnny Mundt's knee injury \"doesn't look good.\"\u00a0\n",
    "report": "",
    "analysis": "Mundt will likely miss significant time with the injury suffered in the Rams' Week 6 win over the Giants. Mundt's absence led to an uptick in playing time and pass routes for Tyler Higbee against New York. Higbee ran a pass route on 85.7 percent of Matthew Stafford's drop backs in Week 6, catching all five of his targets for 36 yards. Headed into Week 6, Higbee had run a route on 78 percent of LA's drop backs. Higbee, who narrowly missed a touchdown against the Giants, should be able to get by on playing time alone in a high-scoring Rams offense.\u00a0\n",
    "timestamp": "2021-10-18 03:37 PM",
    "source": "USA Today ",
    "game_day_logo": "",
    "week01": 9.3,
    "week02": 1.3,
    "week03": 12.5,
    "week04": 5.6,
    "week05": 8.4,
    "week06": 6.1,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.3, 1.3, 12.5, 5.6, 8.4, 6.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.4, 7.4, 9.3, 4.1, 3.8, 7.0, 8.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.4, 1.9, 3.9, 6.5, 7.6, 5.5, 1.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.5, 10.5, 7.3, 10.7, 11.8, 6.8, 11.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3051876.png",
    "name": "Evan Engram",
    "depthchart": "Starter: TE-1",
    "team": "New York Giants",
    "projected": 8.0,
    "opponent": "Carolina Panthers",
    "home_away": "",
    "opp_rank_Neg": 2,
    "team_rank_Neu": 10,
    "avg_fp2": 4.35,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 9.87,
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
    "headlineNews": "Evan Engram caught 3-of-5 targets for 24 yards in the Giants' Week 6 loss to the Rams.\n",
    "report": "",
    "analysis": "The Giants were without a slew of pass-catchers including Darius Slayton, Kadarius Toney, and Kenny Golladay among others. Still, Engram was targeted on just five of Daniel Jones' 51 attempts. Dante Pettis managed to draw 11 targets. After Engram's flop this week, it will be hard to trust him once the Giants get some of their other receiving weapons back in the fold. He's nothing more than a TE2 for his Week 7 game against the Panthers.\n",
    "timestamp": "2021-10-18 02:18 AM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": 1.1,
    "week04": 4.9,
    "week05": 7.5,
    "week06": 3.9,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 1.1, 4.9, 7.5, 3.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 14.0, 3.8, 7.5, 7.1, 8.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 4.4, 11.0, 12.9, 5.1, 5.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 9.6, 15.4, 18.7, 10.9, 11.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3121023.png",
    "name": "Dallas Goedert",
    "depthchart": "Starter: TE-1",
    "team": "Philadelphia Eagles",
    "projected": 7.7,
    "opponent": "Las Vegas Raiders",
    "home_away": "at ",
    "opp_rank_Neu": 10,
    "team_rank_Neu": 23,
    "avg_fp2": 8.22,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 14.2,
    "fanduelSalary": "$5900",
    "hasStatus": "Status",
    "healthOut": "Reserve-covid-19",
    "injury": "Illness",
    "tmColorLite": "#386168",
    "tmColorDark": "#004C54",
    "tmColorLite_rgba": "rgba(56, 97, 104, 0.2)",
    "tmColorDark_rgba": "rgba(0, 76, 84, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    "headlineNews": "Cardinals acquired TE Zach Ertz from the Eagles in exchange for CB Tay Gowan and a 2022 fifth-round pick.\n",
    "report": "",
    "analysis": "ESPN's Adam Schefter said the Cardinals acquired the veteran tight end \"with the idea of making him a regular featured part of its offense and Ertz has told others in the past the Arizona appealed to him.\" This ends an excruciatingly awkward months-long dalliance between the Eagles and several teams interested in Ertz, 30. The move should be a boon for fantasy managers who drafted Dallas Goedert and those who have since rostered Ertz, who had a touchdown on four receptions Thursday night against Tampa with Goedert (COVID-19) sidelined. The Kliff Kingsbury-era Cardinals haven't typically used the tight end in its passing game, though Maxx Williams drew 16 targets from Kyler Murray between Week 2 and Week 4 this season. Williams suffered a season-ending knee injury last week against the 49ers -- an injury that likely led to Arizona's acquisition of Ertz. Ertz's first game as a Cardinal will likely be Week 7 against the Texans, one of the best tight end matchups in the NFL this year. Goedert, meanwhile, will probably see an increase in pass routes and targets in an Eagles offense continually forced into pass-heavy game scripts. In five games with Ertz sidelined over the past three years, Goedert has averaged 6.6 targets, 4.2 catches, 53 yards, and 0.4 touchdowns. He'll be less touchdown dependent with Ertz out of the picture.\u00a0\n",
    "timestamp": "2021-10-15 04:28 PM",
    "source": "Adam Schefter on Twitter ",
    "game_day_logo": "",
    "week01": 12.2,
    "week02": 3.4,
    "week03": 7.6,
    "week04": 14.1,
    "week05": 3.8,
    "week06": "DNP",
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.2, 3.4, 7.6, 14.1, 3.8, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.6, 11.8, 12.4, 9.5, 6.7, 'DNP', 7.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.9, 2.1, 4.0, 5.1, 6.0, 'DNP', 13.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.4, 13.4, 9.7, 8.5, 12.4, 'DNP', 16.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13229.png",
    "name": "Rob Gronkowski",
    "depthchart": "Starter: TE-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 6.9,
    "opponent": "Chicago Bears",
    "home_away": "",
    "opp_rank_Neu": 8,
    "team_rank_Pos": 1,
    "avg_fp2": 16.8,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 6.32,
    "fanduelSalary": "$6500",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Ribs",
    "tmColorLite": "#A31D2F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(163, 29, 47, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A31D2F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Rob Gronkowski (ribs) is out for Week 6 against the Eagles.\n",
    "report": "",
    "analysis": "As expected. Gronkowski will miss his third straight game. In his absence, Antonio Brown has taken on more of a role as the clear third option in the passing game. Cameron Brate and O.J. Howard haven't made impacts in the box score.\n",
    "timestamp": "2021-10-13 08:52 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 25.0,
    "week02": 17.9,
    "week03": 7.5,
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(163, 29, 47, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [25.0, 17.9, 7.5, 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.5, 12.7, 14.9, 'DNP', 'DNP', 'DNP', 6.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.0, 0.0, 5.5, 'DNP', 'DNP', 'DNP', 9.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(163, 29, 47, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [20.9, 19.4, 15.6, 'DNP', 'DNP', 'DNP', 19.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2574576.png",
    "name": "C.J. Uzomah",
    "depthchart": "Starter: TE-1",
    "team": "Cincinnati Bengals",
    "projected": 5.9,
    "opponent": "Baltimore Ravens",
    "home_away": "at ",
    "opp_rank_Pos": 25,
    "team_rank_Neu": 18,
    "avg_fp2": 6.92,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 14.88,
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
    "headlineNews": "C.J.Uzomah caught 3-of-3 targets for 15 yards and a touchdown in the Bengals' Week 6 win over the Lions.\n",
    "report": "",
    "analysis": "Uzomah's 4th quarter TD iced the game for the Bengals and was the team's last score with Joe Burrow in the game.\u00a0Brandon Allen played over half of the 4th quarter of Cincinnati's blowout win, and the Bengals were slow and run heavy for much of the game. Uzomah will be a tight end flier in Week 7 against the Ravens.\n",
    "timestamp": "2021-10-17 09:51 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 4.5,
    "week02": 1.4,
    "week03": 0.0,
    "week04": 24.0,
    "week05": 2.6,
    "week06": 9.0,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.5, 1.4, 0.0, 24.0, 2.6, 9.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.7, 7.5, 9.2, 4.3, 13.0, 3.5, 5.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.7, 1.1, 2.1, 1.4, 2.8, 2.3, 2.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.5, 7.7, 5.2, 4.2, 4.2, 7.4, 8.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4258595.png",
    "name": "Cole Kmet",
    "depthchart": "Starter: TE-1",
    "team": "Chicago Bears",
    "projected": 5.5,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "at ",
    "opp_rank_Pos": 27,
    "team_rank_Neg": 32,
    "avg_fp2": 3.33,
    "opp_rank_allowed_fp2_Pos": 24,
    "opp_avg_allowed_fp2": 13.15,
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
    "headlineNews": "Cole Kmet caught 4-of-5 targets for 49 yards in the Bears' Week 6 loss to the Packers.\n",
    "report": "",
    "analysis": "The 49 yards mark a new season-high for Kmet, who now has a total of eight catches for 88 scoreless yards in Justin Fields' four starts. Kmet won't be a strong fantasy option for Week 7 against the Bucs.\n",
    "timestamp": "2021-10-17 09:01 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 6.7,
    "week02": 0.5,
    "week03": 1.6,
    "week04": 1.1,
    "week05": 3.2,
    "week06": 6.9,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.7, 0.5, 1.6, 1.1, 3.2, 6.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.5, 5.9, 5.9, 5.7, 10.1, 2.7, 5.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.7, 0.0, 0.2, 0.1, 9.9, 2.5, 0.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  "rgba(195, 104, 53, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [5.9, 6.4, 2.9, 2.2, 10.4, 4.5, 4.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4045305.png",
    "name": "Ian Thomas",
    "depthchart": "Starter: TE-1",
    "team": "Carolina Panthers",
    "projected": 4.8,
    "opponent": "New York Giants",
    "home_away": "at ",
    "opp_rank_Neu": 22,
    "team_rank_Neu": 15,
    "avg_fp2": 2.83,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 12.07,
    "fanduelSalary": "$4500",
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
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.2, 1.2, 0.0, 3.0, 6.0, 4.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.8, 4.6, 4.8, 4.9, 4.4, 3.6, 4.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 1.4, 0.9, 4.9, 2.2, 1.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 133, 202, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [6.3, 7.5, 7.0, 6.5, 9.8, 3.5, 3.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3054212.png",
    "name": "Jonnu Smith",
    "depthchart": "Backup: TE-2",
    "team": "New England Patriots",
    "projected": 4.8,
    "opponent": "New York Jets",
    "home_away": "",
    "opp_rank_Neu": 15,
    "team_rank_Neu": 19,
    "avg_fp2": 4.58,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 12.78,
    "fanduelSalary": "$4900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#C60C30",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png",
    "headlineNews": "Jonnu Smith caught 1-of-2 targets for nine yards in the Patriots' Week 6 overtime loss to the Cowboys.\n",
    "report": "",
    "analysis": "Smith is a \"big name\" providing small returns in an up-for-grabs offense. He has 135 yards all season. Smith is to the point where he can be placed on waiver wires until he provides some indication he is going to get going. That seems miles from happening since Hunter Henry has been the one upping his production following a mistake-filled few weeks from Smith.\u00a0\n",
    "timestamp": "2021-10-18 01:29 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 7.3,
    "week02": 4.8,
    "week03": 0.9,
    "week04": 8.9,
    "week05": 4.2,
    "week06": 1.4,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.3, 4.8, 0.9, 8.9, 4.2, 1.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.4, 5.4, 4.7, 5.1, 5.1, 4.0, 4.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.9, 0.0, 0.8, 7.2, 3.6, 8.4, 0.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.1, 8.6, 5.2, 13.6, 6.8, 13.5, 4.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2975674.png",
    "name": "Robert Tonyan",
    "depthchart": "Starter: TE-1",
    "team": "Green Bay Packers",
    "projected": 4.6,
    "opponent": "Washington Football Team",
    "home_away": "",
    "opp_rank_Pos": 32,
    "team_rank_Neu": 21,
    "avg_fp2": 3.45,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 10.67,
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
    "headlineNews": "Robert Tonyan caught 2-of-3 targets for 10 yards in the Packers' Week 6 win over the Bears.\n",
    "report": "",
    "analysis": "The 10 yards were his second-most of the season. That's all we need to know. Tonyan is well off the fantasy radar in this low-volume passing offense where Davante Adams, Aaron Jones, and now even AJ Dillon are commanding the vast majority of the touches. Tonyan gets a Week 7 date with Washington.\n",
    "timestamp": "2021-10-17 08:57 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 1.8,
    "week02": 12.7,
    "week03": 1.1,
    "week04": 1.8,
    "week05": 1.3,
    "week06": 2.0,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.8, 12.7, 1.1, 1.8, 1.3, 2.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.7, 4.2, 5.8, 4.1, 6.0, 0.6, 4.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.7, 0.5, 2.7, 0.6, 1.2, 0.2, 1.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.8, 9.2, 13.6, 9.8, 8.5, 8.4, 1.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116164.png",
    "name": "Mike Gesicki",
    "depthchart": "Starter: TE-1",
    "team": "Miami Dolphins",
    "projected": 4.3,
    "opponent": "Atlanta Falcons",
    "home_away": "",
    "opp_rank_Neu": 14,
    "team_rank_Neg": 28,
    "avg_fp2": 9.2,
    "opp_rank_allowed_fp2_Neu": 15,
    "opp_avg_allowed_fp2": 8.94,
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
    "headlineNews": "Mike Gesicki caught 8-of-9 targets for 115 yards in Week 6 against Jacksonville.\n",
    "report": "",
    "analysis": "With the Dolphins missing three of their top four wideouts, Gesicki led the team in receiving and finished behind only Jaylen Waddle (13) in targets. Miami ran more tight-end heavy sets this week, allowing Gesicki to stay on the field for 70% of snaps.\u00a0Gesicki has yet to score this season but has at least 40 yards in every game since Week 1. He'll remain a low-end TE1 for a Week 6 matchup with the Falcons.\n",
    "timestamp": "2021-10-17 06:15 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 0.0,
    "week02": 5.6,
    "week03": 13.6,
    "week04": 14.2,
    "week05": 6.3,
    "week06": 15.5,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 5.6, 13.6, 14.2, 6.3, 15.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.4, 2.8, 4.6, 3.2, 10.7, 8.7, 4.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.9, 0.0, 9.8, 11.1, 4.7, 8.9, 4.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 142, 151, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.8, 12.9, 12.2, 17.3, 10.9, 15.3, 6.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4240472.png",
    "name": "Noah Gray",
    "depthchart": "Backup: TE-2",
    "team": "Kansas City Chiefs",
    "projected": 4.2,
    "opponent": "Tennessee Titans",
    "home_away": "at ",
    "opp_rank_Pos": 24,
    "team_rank_Pos": 2,
    "avg_fp2": 0.2,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 5.73,
    "fanduelSalary": "$4100",
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
    "week01": 0.0,
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": 0.0,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 'DNP', 'DNP', 'DNP', 'DNP', 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.4, 'DNP', 'DNP', 'DNP', 'DNP', 0.6, 4.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 'DNP', 'DNP', 'DNP', 'DNP', 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [5.9, 'DNP', 'DNP', 'DNP', 'DNP', 5.0, 3.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2975863.png",
    "name": "Eric Saubert",
    "depthchart": "Backup: TE-2",
    "team": "Denver Broncos",
    "projected": 3.9,
    "opponent": "Cleveland Browns",
    "home_away": "at ",
    "opp_rank_Neu": 9,
    "team_rank_Neu": 13,
    "avg_fp2": 1.03,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 7.75,
    "fanduelSalary": "$4200",
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
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/uqzgq9urghrlu89ckqsm",
    "week01": 1.2,
    "week02": 1.2,
    "week03": 0.0,
    "week04": 0.0,
    "week05": 0.0,
    "week06": 3.8,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.2, 1.2, 0.0, 0.0, 0.0, 3.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.8, 2.1, -0.3, 2.0, 1.1, 4.4, 3.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.1, 0.4, 0.7, 0.5, 1.3, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(225, 119, 87, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [0.9, 1.5, 0.8, 1.0, 1.0, 1.9, 0.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3911853.png",
    "name": "Adam Trautman",
    "depthchart": "Starter: TE-1",
    "team": "New Orleans Saints",
    "projected": 3.9,
    "opponent": "Seattle Seahawks",
    "home_away": "at ",
    "opp_rank_Pos": 28,
    "team_rank_Neg": 31,
    "avg_fp2": 1.88,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 11.7,
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
    "headlineNews": "Adam Trautman caught both of his targets for 43 yards in the Saints' Week 5 win against the Football Team.\u00a0\n",
    "report": "",
    "analysis": "Trautman was mostly deployed as a blocker, as he has been for most of the regular season. He caught a 32-yard pass in the fourth quarter on one of several coverage breakdowns by Washington's secondary. Neither Trautman nor Juwan Johnson are playable in fantasy.\u00a0\n",
    "timestamp": "2021-10-10 09:15 PM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mpx0s6jwjrjbhfw9rfol",
    "week01": 3.3,
    "week02": 0.0,
    "week03": 0.0,
    "week04": 0.8,
    "week05": 5.3,
    "week06": "BYE",
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.3, 0.0, 0.0, 0.8, 5.3, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.3, 7.2, 2.0, 6.3, 3.9, 'BYE', 3.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.8, 3.9, 3.8, 0.4, 'BYE', 0.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(155, 132, 92, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [6.2, 6.3, 7.6, 7.8, 4.5, 'BYE', 6.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3924365.png",
    "name": "Hayden Hurst",
    "depthchart": "Backup: TE-2",
    "team": "Atlanta Falcons",
    "projected": 3.7,
    "opponent": "Miami Dolphins",
    "home_away": "at ",
    "opp_rank_Pos": 29,
    "team_rank_Neu": 14,
    "avg_fp2": 4.16,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 10.7,
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
    "headlineNews": "Hayden Hurst caught all four of his targets for 29 yards in the Falcons' Week 4 loss to the Football Team.\u00a0\n",
    "report": "",
    "analysis": "Hurst was one reception short of Kyle Pitts' total against Washington. He has nine catches on the year. Theoretically, Hurst should see a good number of weekly snaps in an Arthur Smith offense that runs a lot of two tight end sets. But Hurst won't be a legit fantasy option unless Pitts misses time this season.\u00a0\n",
    "timestamp": "2021-10-03 10:40 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 4.8,
    "week02": 1.1,
    "week03": 0.0,
    "week04": 4.9,
    "week05": 10.0,
    "week06": "BYE",
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.8, 1.1, 0.0, 4.9, 10.0, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.0, 4.1, 3.2, 1.1, 2.1, 'BYE', 3.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.4, 0.8, 4.1, 0.0, 2.1, 'BYE', 1.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.7, 9.9, 8.1, 5.0, 5.2, 'BYE', 6.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3123076.png",
    "name": "David Njoku",
    "depthchart": "Backup: TE-2",
    "team": "Cleveland Browns",
    "projected": 3.6,
    "opponent": "Denver Broncos",
    "home_away": "",
    "opp_rank_Neu": 11,
    "team_rank_Neg": 26,
    "avg_fp2": 6.68,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 5.62,
    "fanduelSalary": "$5000",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Knee",
    "tmColorLite": "#FF3C00",
    "tmColorDark": "#311D00",
    "tmColorLite_rgba": "rgba(255, 60, 0, 0.2)",
    "tmColorDark_rgba": "rgba(49, 29, 0, 0.2)",
    "tmTextLite": "#FF3C00",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
    "headlineNews": "David Njoku caught 1-of-2 targets for six yards in the Browns' Week 6 loss to the Cardinals.\n",
    "report": "",
    "analysis": "Hot off a seven-catch, 149-yard outing in Week 5, Njoku completely disappeared in this game. Cleveland's passing attack was mostly bottled up but Njoku's lack of targets is notable. Austin Hooper saw one more target than him this week but did just as little with the looks. No tight end on the Browns is playable but Njoku is worth stashing in deeper leagues.\n",
    "timestamp": "2021-10-18 03:16 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/uqzgq9urghrlu89ckqsm",
    "week01": 9.1,
    "week02": 2.8,
    "week03": 0.0,
    "week04": 2.7,
    "week05": 24.4,
    "week06": 1.1,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.1, 2.8, 0.0, 2.7, 24.4, 1.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.5, 4.4, 0.3, 2.8, 3.7, 2.5, 3.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.0, 1.6, 5.2, 4.3, 6.8, 6.3, 0.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.9, 11.5, 7.7, 6.5, 12.1, 14.4, 6.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2582410.png",
    "name": "Tyler Kroft",
    "depthchart": "Starter: TE-1",
    "team": "New York Jets",
    "projected": 3.2,
    "opponent": "New England Patriots",
    "home_away": "at ",
    "opp_rank_Neu": 16,
    "team_rank_Neg": 29,
    "avg_fp2": 1.9,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 6.52,
    "fanduelSalary": "$4400",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Back",
    "tmColorLite": "#125740",
    "tmColorDark": "#003f2d",
    "tmColorLite_rgba": "rgba(18, 87, 64, 0.2)",
    "tmColorDark_rgba": "rgba(0, 63, 45, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png",
    "headlineNews": "Jets declared WR Jeff Smith, RB La\u2019Mical Perine, TE Tyler Kroft, S Marcus Maye, DL Jonathan Marshall, S Adrian Colbert and CB Isaiah Dunn inactive for Week 5 against the Falcons.\n",
    "report": "",
    "analysis": "Ryan Griffin will start at tight end this week. Tight end is a thin position for fantasy purposes but it isn't that thin. Corey Davis remains the only trustworthy option on the Jets.\u00a0\n",
    "timestamp": "2021-10-10 12:13 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 4.1,
    "week02": 1.3,
    "week03": 2.2,
    "week04": 0.0,
    "week05": "DNP",
    "week06": "BYE",
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.1, 1.3, 2.2, 0.0, 'DNP', 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.9, 5.0, 1.4, 1.6, 'DNP', 'BYE', 3.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 5.5, 2.3, 'DNP', 'BYE', 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  "rgba(18, 87, 64, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.8, 10.4, 13.1, 5.4, 'DNP', 'BYE', 4.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3843945.png",
    "name": "Foster Moreau",
    "depthchart": "Backup: TE-2",
    "team": "Las Vegas Raiders",
    "projected": 3.2,
    "opponent": "Philadelphia Eagles",
    "home_away": "",
    "opp_rank_Neg": 5,
    "team_rank_Pos": 3,
    "avg_fp2": 2.22,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 13.7,
    "fanduelSalary": "$4400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A5ACAF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lv.png",
    "headlineNews": "Foster Moreau caught 2-of-3 targets for 34 yards and a touchdown in the Raiders' Week 2 win over the Steelers.\u00a0\n",
    "report": "",
    "analysis": "Moreau did most of his damage on a 25-yard touchdown grab from Derek Carr in the first half. Moreau, who sports a superb athletic profile, would be a priority waiver pick up if Darren Waller were to miss any time this season. For now, he should remain on the wire.\u00a0\n",
    "timestamp": "2021-09-19 09:46 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 0.0,
    "week02": 10.4,
    "week03": 1.3,
    "week04": 0.0,
    "week05": 0.0,
    "week06": 1.6,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 10.4, 1.3, 0.0, 0.0, 1.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.6, 1.9, 3.5, 2.7, 1.2, 0.9, 3.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.8, 0.8, 1.2, 1.4, 5.9, 0.3, 2.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.3, 9.1, 5.0, 4.4, 9.7, 4.5, 6.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3043275.png",
    "name": "Austin Hooper",
    "depthchart": "Starter: TE-1",
    "team": "Cleveland Browns",
    "projected": 3.1,
    "opponent": "Denver Broncos",
    "home_away": "",
    "opp_rank_Neu": 11,
    "team_rank_Neg": 26,
    "avg_fp2": 4.02,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 5.62,
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
    "headlineNews": "Austin Hooper caught 1-of-3 targets for four yards in the Browns' Week 6 loss to the Cardinals.\n",
    "report": "",
    "analysis": "Hooper has four catches over his last four games. He has two games with more than two catches and both of those contests came at the beginning of the year. Hooper can be cut in all fantasy formats.\u00a0\n",
    "timestamp": "2021-10-18 03:11 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/uqzgq9urghrlu89ckqsm",
    "week01": 4.2,
    "week02": 6.5,
    "week03": 8.9,
    "week04": 1.6,
    "week05": 2.0,
    "week06": 0.9,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.2, 6.5, 8.9, 1.6, 2.0, 0.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.0, 5.1, 1.9, 3.6, 8.8, 1.2, 3.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.9, 3.2, 6.1, 5.2, 8.1, 1.3, 2.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.6, 12.6, 9.7, 8.3, 13.2, 5.9, 5.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4034862.png",
    "name": "Jack Stoll",
    "depthchart": "Backup: TE-2",
    "team": "Philadelphia Eagles",
    "projected": 3.0,
    "opponent": "Las Vegas Raiders",
    "home_away": "at ",
    "opp_rank_Neu": 10,
    "team_rank_Neu": 23,
    "avg_fp2": 0.0,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 14.2,
    "fanduelSalary": "$4000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#386168",
    "tmColorDark": "#004C54",
    "tmColorLite_rgba": "rgba(56, 97, 104, 0.2)",
    "tmColorDark_rgba": "rgba(0, 76, 84, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    "headlineNews": "Eagles rookie TE Jack Stoll has a \"pretty strong shot\" at a roster spot.\n",
    "report": "",
    "analysis": "The Eagles signed Richard Rodgers this offseason, but don't have much else behind Dallas Goedert. Stoll, an undrafted free agent from Nebraska, could open the year as the No. 3 tight end if\u00a0the Eagles trade Zach Ertz.\u00a0Tyree Jackson, Hakeem Butler, Jason Croom, and Caleb Wilson are also competing for roster spots.\n",
    "timestamp": "2021-06-19 03:13 PM",
    "source": "NJ.com",
    "game_day_logo": "",
    "week01": 0.0,
    "week02": 0.0,
    "week03": 0.0,
    "week04": 0.0,
    "week05": 0.0,
    "week06": 0.0,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.1, 3.3, 2.5, 1.2, 0.0, 2.1, 3.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [5.5, 5.5, 5.2, 4.9, 4.7, 5.9, 4.8]
                    }
                    
                    ]
               }
            }];



$scope.positionK = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/10621.png",
    "name": "Nick Folk",
    "depthchart": "Starter: K-1",
    "team": "New England Patriots",
    "projected": 12.5,
    "opponent": "New York Jets",
    "home_away": "",
    "opp_rank_Pos": 32,
    "team_rank_Pos": 1,
    "avg_fp2": 9.83,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 13.5,
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
    "headlineNews": "Patriots signed K\u00a0Nick Folk.\n",
    "report": "",
    "analysis": "Folk has kicked for the Patriots over the past two weeks with Quinn Nordin on IR due to an abdominal injury. This signing indicates he will retain his duties as New England's starting kicker in Week 3. Folk has made 33 consecutive field goals dating back to last season.\n",
    "timestamp": "2021-09-21 10:06 PM",
    "source": "Tom Pelissero on Twitter",
    "game_day_logo": "",
    "week01": 11.0,
    "week02": 15.0,
    "week03": 8.0,
    "week04": 5.0,
    "week05": 17.0,
    "week06": 3.0,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.0, 15.0, 8.0, 5.0, 17.0, 3.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.1, 9.8, 9.8, 11.1, 9.3, 9.0, 12.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.2, 4.2, 6.4, 5.9, 7.7, 6.3, 4.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.9, 12.1, 10.4, 8.8, 13.9, 9.1, 9.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4249087.png",
    "name": "Matt Gay",
    "depthchart": "Starter: K-1",
    "team": "Los Angeles Rams",
    "projected": 11.5,
    "opponent": "Detroit Lions",
    "home_away": "",
    "opp_rank_Pos": 29,
    "team_rank_Neu": 11,
    "avg_fp2": 9.67,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 11.67,
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
    "week06": 8.0,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.0, 9.0, 11.0, 9.0, 9.0, 8.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.4, 9.1, 10.3, 8.2, 11.0, 9.2, 11.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.0, 5.4, 7.2, 7.4, 10.5, 8.9, 9.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.9, 12.5, 10.0, 10.0, 13.9, 11.3, 11.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/10636.png",
    "name": "Mason Crosby",
    "depthchart": "Starter: K-1",
    "team": "Green Bay Packers",
    "projected": 10.8,
    "opponent": "Washington Football Team",
    "home_away": "",
    "opp_rank_Pos": 25,
    "team_rank_Neu": 11,
    "avg_fp2": 9.17,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 10.33,
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
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.0, 5.0, 16.0, 9.0, 16.0, 6.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.3, 8.0, 5.0, 11.3, 7.1, 9.0, 10.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.5, 4.6, 6.2, 10.8, 6.1, 8.2, 7.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.9, 13.8, 10.4, 13.4, 10.3, 12.3, 11.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/11122.png",
    "name": "Matt Prater",
    "depthchart": "Starter: K-1",
    "team": "Arizona Cardinals",
    "projected": 10.5,
    "opponent": "Houston Texans",
    "home_away": "",
    "opp_rank_Neu": 22,
    "team_rank_Neu": 11,
    "avg_fp2": 10.33,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 9.5,
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
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.0, 12.0, 7.0, 15.0, 5.0, 15.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.7, 10.1, 10.8, 7.5, 9.1, 6.6, 10.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.8, 5.0, 10.4, 6.8, 7.1, 6.9, 8.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.1, 12.8, 13.3, 10.8, 11.7, 10.7, 15.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15091.png",
    "name": "Randy Bullock",
    "depthchart": "Starter: K-1",
    "team": "Tennessee Titans",
    "projected": 9.2,
    "opponent": "Kansas City Chiefs",
    "home_away": "",
    "opp_rank_Neu": 13,
    "team_rank_Neu": 11,
    "avg_fp2": 10.0,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 7.33,
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
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 15.0, 5.0, 12.0, 7.0, 11.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 7.8, 8.0, 12.8, 10.2, 7.3, 9.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 4.3, 3.3, 8.3, 9.2, 6.9, 3.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 11.7, 7.3, 10.4, 12.7, 10.9, 7.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/17082.png",
    "name": "Cody Parkey",
    "depthchart": "Starter: K-1",
    "team": "New Orleans Saints",
    "projected": 8.8,
    "opponent": "Seattle Seahawks",
    "home_away": "at ",
    "opp_rank_Pos": 29,
    "team_rank_Neg": 31,
    "avg_fp2": 3.0,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 10.8,
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
    "headlineNews": "Saints placed Cody Parkey (groin) on injured reserve.\u00a0\n",
    "report": "",
    "analysis": "Parkey hurt his groin in pregame warmups before the Saints' Week 5 win against Washington. He played through the injury and missed two of his five extra point attempts in his only game with New Orleans. The team hopes to get Wil Lutz (groin) back from IR after their Week 6 bye. Lutz wouldn't be a priority add in fantasy leagues. The Saints have attempted four field goals in five games.\u00a0\n",
    "timestamp": "2021-10-12 04:21 PM",
    "source": "Ian Rapoport on Twitter",
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mpx0s6jwjrjbhfw9rfol",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "BYE",
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 8.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 7.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(155, 132, 92, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 10.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3049899.png",
    "name": "Younghoe Koo",
    "depthchart": "Starter: K-1",
    "team": "Atlanta Falcons",
    "projected": 8.5,
    "opponent": "Miami Dolphins",
    "home_away": "at ",
    "opp_rank_Pos": 25,
    "team_rank_Neu": 18,
    "avg_fp2": 6.8,
    "opp_rank_allowed_fp2_Pos": 30,
    "opp_avg_allowed_fp2": 10.83,
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
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.0, 5.0, 6.0, 6.0, 11.0, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.9, 7.4, 10.1, 11.8, 9.8, 'BYE', 8.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.4, 4.5, 2.0, 7.1, 3.9, 'BYE', 3.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.2, 14.7, 3.5, 10.8, 7.7, 'BYE', 7.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2473037.png",
    "name": "Jason Myers",
    "depthchart": "Starter: K-1",
    "team": "Seattle Seahawks",
    "projected": 8.5,
    "opponent": "New Orleans Saints",
    "home_away": "",
    "opp_rank_Pos": 25,
    "team_rank_Neg": 29,
    "avg_fp2": 6.0,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 7.8,
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
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mpx0s6jwjrjbhfw9rfol",
    "week01": 4.0,
    "week02": 6.0,
    "week03": 7.0,
    "week04": 4.0,
    "week05": 5.0,
    "week06": 10.0,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.0, 6.0, 7.0, 4.0, 5.0, 10.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.7, 8.7, 8.9, 7.2, 7.8, 7.8, 8.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.7, 5.3, 9.9, 8.8, 8.0, 7.4, 9.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.5, 13.6, 11.9, 10.8, 10.5, 9.6, 12.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15683.png",
    "name": "Justin Tucker",
    "depthchart": "Starter: K-1",
    "team": "Baltimore Ravens",
    "projected": 8.4,
    "opponent": "Cincinnati Bengals",
    "home_away": "",
    "opp_rank_Neu": 16,
    "team_rank_Pos": 3,
    "avg_fp2": 10.5,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 7.0,
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
    "week06": 12.0,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.0, 7.0, 17.0, 13.0, 3.0, 12.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.6, 9.1, 8.6, 6.0, 8.6, 9.5, 8.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.4, 6.2, 9.0, 2.3, 5.0, 6.9, 7.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.7, 14.2, 14.9, 7.1, 12.4, 9.9, 11.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3051909.png",
    "name": "Daniel Carlson",
    "depthchart": "Starter: K-1",
    "team": "Las Vegas Raiders",
    "projected": 8.4,
    "opponent": "Philadelphia Eagles",
    "home_away": "",
    "opp_rank_Neg": 4,
    "team_rank_Pos": 5,
    "avg_fp2": 9.67,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 6.83,
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
    "week06": 12.0,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.0, 17.0, 13.0, 2.0, 3.0, 12.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.8, 10.2, 10.6, 11.7, 11.1, 7.4, 8.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.6, 4.7, 11.7, 9.4, 10.2, 6.0, 9.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.3, 10.8, 13.2, 12.6, 12.6, 8.5, 12.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3043234.png",
    "name": "Zane Gonzalez",
    "depthchart": "Starter: K-1",
    "team": "Carolina Panthers",
    "projected": 8.3,
    "opponent": "New York Giants",
    "home_away": "at ",
    "opp_rank_Neu": 19,
    "team_rank_Neu": 16,
    "avg_fp2": 8.4,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 9.0,
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
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 9.0, 6.0, 4.0, 14.0, 9.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 8.8, 6.7, 7.6, 7.4, 8.8, 8.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 3.4, 3.7, 6.5, 4.0, 9.8, 6.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 133, 202, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 11.6, 7.9, 10.8, 8.0, 13.6, 9.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/12731.png",
    "name": "Ryan Succop",
    "depthchart": "Starter: K-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 8.1,
    "opponent": "Chicago Bears",
    "home_away": "",
    "opp_rank_Neu": 16,
    "team_rank_Neu": 20,
    "avg_fp2": 8.0,
    "opp_rank_allowed_fp2_Pos": 24,
    "opp_avg_allowed_fp2": 9.4,
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
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(163, 29, 47, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.0, 6.0, 6.0, 15.0, 10.0, 4.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.1, 8.6, 6.5, 6.7, 10.1, 8.8, 8.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.0, 3.9, 3.8, 7.9, 5.4, 6.5, 6.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(163, 29, 47, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.0, 12.1, 7.5, 11.0, 8.7, 9.8, 9.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3050478.png",
    "name": "Jake Elliott",
    "depthchart": "Starter: K-1",
    "team": "Philadelphia Eagles",
    "projected": 8.0,
    "opponent": "Las Vegas Raiders",
    "home_away": "at ",
    "opp_rank_Neu": 13,
    "team_rank_Neu": 20,
    "avg_fp2": 6.17,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 8.17,
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
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.0, 4.0, 3.0, 12.0, 9.0, 2.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.2, 9.5, 7.5, 5.7, 6.2, 8.4, 8.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.6, 3.9, 4.8, 7.6, 6.6, 4.5, 5.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.1, 10.6, 6.2, 10.2, 8.8, 6.8, 9.5]
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
    "opponent": "Tennessee Titans",
    "home_away": "at ",
    "opp_rank_Neu": 19,
    "team_rank_Neg": 26,
    "avg_fp2": 7.67,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 8.0,
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
    "week06": 9.0,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.0, 5.0, 6.0, 6.0, 10.0, 9.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.3, 9.0, 10.0, 7.1, 5.6, 8.7, 7.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.2, 6.1, 7.9, 3.9, 9.4, 10.2, 6.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.9, 14.0, 10.8, 9.1, 11.3, 11.9, 8.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3123052.png",
    "name": "Michael Badgley",
    "depthchart": "Starter: K-1",
    "team": "Indianapolis Colts",
    "projected": 7.8,
    "opponent": "San Francisco 49ers",
    "home_away": "at ",
    "opp_rank_Neu": 9,
    "team_rank_Pos": 5,
    "avg_fp2": 8.07,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 7.0,
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
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "source": "",
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 7.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 6.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 9.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/12460.png",
    "name": "Graham Gano",
    "depthchart": "Starter: K-1",
    "team": "New York Giants",
    "projected": 7.7,
    "opponent": "Carolina Panthers",
    "home_away": "",
    "opp_rank_Neu": 7,
    "team_rank_Pos": 5,
    "avg_fp2": 8.67,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 5.17,
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
    "week06": 3.0,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.0, 22.0, 6.0, 8.0, 12.0, 3.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.0, 6.2, 8.8, 8.3, 7.4, 9.2, 7.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.2, 4.8, 3.2, 4.6, 5.9, 5.6, 4.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.7, 12.7, 10.9, 9.4, 9.9, 10.7, 10.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3150744.png",
    "name": "Chase McLaughlin",
    "depthchart": "Starter: K-1",
    "team": "Cleveland Browns",
    "projected": 7.7,
    "opponent": "Denver Broncos",
    "home_away": "",
    "opp_rank_Neu": 7,
    "team_rank_Neu": 17,
    "avg_fp2": 8.33,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 6.33,
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
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/uqzgq9urghrlu89ckqsm",
    "week01": 3.0,
    "week02": 7.0,
    "week03": 19.0,
    "week04": 9.0,
    "week05": 10.0,
    "week06": 2.0,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.0, 7.0, 19.0, 9.0, 10.0, 2.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.7, 9.0, 8.1, 9.2, 8.5, 8.3, 7.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.8, 5.1, 5.6, 5.2, 4.4, 7.9, 6.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.0, 11.9, 11.5, 11.2, 9.6, 8.9, 12.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3821683.png",
    "name": "Austin Seibert",
    "depthchart": "Starter: K-1",
    "team": "Detroit Lions",
    "projected": 7.3,
    "opponent": "Los Angeles Rams",
    "home_away": "at ",
    "opp_rank_Neu": 16,
    "team_rank_Neu": 20,
    "avg_fp2": 6.75,
    "opp_rank_allowed_fp2_Neu": 15,
    "opp_avg_allowed_fp2": 7.17,
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
    "week06": 3.0,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.0, 6.0, 'DNP', 'DNP', 'DNP', 3.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.6, 8.0, 'DNP', 'DNP', 'DNP', 8.1, 7.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.8, 3.1, 'DNP', 'DNP', 'DNP', 4.4, 0.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 118, 182, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.7, 11.1, 'DNP', 'DNP', 'DNP', 10.6, 5.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/combiner/i?img=/i/headshots/nophoto.png",
    "name": "Matt Ammendola",
    "depthchart": "Starter: K-1",
    "team": "New York Jets",
    "projected": 6.9,
    "opponent": "New England Patriots",
    "home_away": "at ",
    "opp_rank_Neu": 22,
    "team_rank_Neu": 22,
    "avg_fp2": 4.4,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 8.0,
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
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 6.0, 0.0, 9.0, 7.0, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.2, 6.7, 2.6, 6.6, 4.9, 'BYE', 6.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.6, 0.0, 1.1, 1.8, 2.7, 'BYE', 3.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  "rgba(18, 87, 64, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.5, 4.0, 6.6, 5.9, 8.6, 'BYE', 10.8]
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
    "opponent": "Cleveland Browns",
    "home_away": "at ",
    "opp_rank_Neu": 7,
    "team_rank_Pos": 5,
    "avg_fp2": 8.67,
    "opp_rank_allowed_fp2_Neu": 9,
    "opp_avg_allowed_fp2": 6.5,
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
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/uqzgq9urghrlu89ckqsm",
    "week01": 9.0,
    "week02": 13.0,
    "week03": 16.0,
    "week04": 1.0,
    "week05": 7.0,
    "week06": 6.0,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.0, 13.0, 16.0, 1.0, 7.0, 6.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.7, 9.4, 13.4, 9.8, 10.4, 9.7, 6.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.4, 4.4, 7.8, 9.4, 7.2, 4.4, 4.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(225, 119, 87, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.4, 12.3, 9.1, 11.3, 10.7, 7.1, 8.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/17427.png",
    "name": "Cairo Santos",
    "depthchart": "Starter: K-1",
    "team": "Chicago Bears",
    "projected": 6.2,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "at ",
    "opp_rank_Neu": 13,
    "team_rank_Neu": 20,
    "avg_fp2": 5.83,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 6.67,
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
    "week06": 2.0,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.0, 8.0, 7.0, 6.0, 10.0, 2.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.0, 7.0, 5.5, 7.3, 7.1, 5.9, 6.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.3, 2.7, 3.8, 13.2, 6.3, 8.1, 3.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  "rgba(195, 104, 53, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.5, 14.7, 6.3, 16.4, 10.1, 11.6, 8.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4360234.png",
    "name": "Evan McPherson",
    "depthchart": "Starter: K-1",
    "team": "Cincinnati Bengals",
    "projected": 5.9,
    "opponent": "Baltimore Ravens",
    "home_away": "at ",
    "opp_rank_Neg": 2,
    "team_rank_Neu": 20,
    "avg_fp2": 7.33,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 5.0,
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
    "week06": 11.0,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.0, 7.0, 7.0, 6.0, 2.0, 11.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.6, 8.7, 11.3, 10.6, 7.2, 9.8, 5.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.6, 5.0, 6.3, 5.8, 3.8, 5.7, 3.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.6, 12.8, 13.3, 11.9, 9.9, 12.4, 9.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3124084.png",
    "name": "Joey Slye",
    "depthchart": "Starter: K-1",
    "team": "San Francisco 49ers",
    "projected": 5.7,
    "opponent": "Indianapolis Colts",
    "home_away": "",
    "opp_rank_Neg": 4,
    "team_rank_Neg": 29,
    "avg_fp2": 6.75,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 4.83,
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
    "headlineNews": "49ers signed K Joey Slye.\n",
    "report": "",
    "analysis": "Slye will become San Francisco's starting kicker in the short-term as Robbie Gould is expected to go on injured reserve and miss three games with a groin injury. Slye, 25, was 4-for-5 in field goal tries with the Texans this year, moving to 58-for-73 (80%) in his career and 10-of-18 from 50-plus yards out.\n",
    "timestamp": "2021-10-05 08:59 PM",
    "source": "Tom Pelissero on Twitter",
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "week01": 14.0,
    "week02": 3.0,
    "week03": 5.0,
    "week04": "DNP",
    "week05": "DNP",
    "week06": "BYE",
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.0, 3.0, 5.0, 'DNP', 'DNP', 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.7, 10.6, 5.3, 'DNP', 'DNP', 'BYE', 5.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.0, 5.3, 7.2, 'DNP', 'DNP', 'BYE', 4.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.9, 12.3, 10.7, 'DNP', 'DNP', 'BYE', 9.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2971573.png",
    "name": "Ka'imi Fairbairn",
    "depthchart": "Starter: K-1",
    "team": "Houston Texans",
    "projected": 5.6,
    "opponent": "Arizona Cardinals",
    "home_away": "at ",
    "opp_rank_Neg": 2,
    "team_rank_Neg": 26,
    "avg_fp2": 2.33,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 5.17,
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
    "week06": 3.0,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 0.0, 4.0, 3.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 5.8, 7.5, 5.8, 5.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 4.9, 11.8, 8.0, 2.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 6.9, 15.3, 11.2, 7.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3124679.png",
    "name": "Jason Sanders",
    "depthchart": "Starter: K-1",
    "team": "Miami Dolphins",
    "projected": 5.6,
    "opponent": "Atlanta Falcons",
    "home_away": "",
    "opp_rank_Neu": 9,
    "team_rank_Neu": 20,
    "avg_fp2": 5.83,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 6.0,
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
    "week06": 8.0,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.0, 0.0, 11.0, 5.0, 5.0, 8.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.6, 8.1, 6.3, 5.1, 7.5, 7.0, 5.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.5, 3.8, 4.5, 4.6, 6.3, 5.7, 8.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 142, 151, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.4, 12.5, 8.9, 6.3, 8.9, 8.3, 10.0]
                    }
                    
                    ]
               }
            }];



$scope.positionDST = [{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/ARI.png",
    "name": "Arizona Cardinals",
    "depthchart": "",
    "team": "Arizona Cardinals",
    "projected": 9.8,
    "opponent": "Houston Texans",
    "opp_rank_pts": 31,
    "opp_avg_pts": 0.0,
    "home_away": "",
    "team_rank_allowed_pts": 2,
    "team_avg_allowed_pts": 16.5,
    "team_ranked_takeaways": 3,
    "team_avg_takeaways": 2.17,
    "opp_ranked_giveaways": 29,
    "opp_avg_giveaways": 1.83,
    "fanduelSalary": "$5000",
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
    "avg_fp2": 9.5,
    "week01": 16.0,
    "week02": 1.0,
    "week03": 15.0,
    "week04": 5.0,
    "week05": 8.0,
    "week06": 12.0,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [16.0, 1.0, 15.0, 5.0, 8.0, 12.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.0, 6.4, 9.9, 4.8, 8.7, 5.2, 9.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.9, 1.0, 7.0, 2.8, 6.0, 5.1, 5.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.2, 13.8, 11.9, 12.1, 14.5, 12.0, 14.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/NE.png",
    "name": "New England Patriots",
    "depthchart": "",
    "team": "New England Patriots",
    "projected": 8.5,
    "opponent": "New York Jets",
    "opp_rank_pts": 32,
    "opp_avg_pts": 0.0,
    "home_away": "",
    "team_rank_allowed_pts": 6,
    "team_avg_allowed_pts": 19.5,
    "team_ranked_takeaways": 10,
    "team_avg_takeaways": 1.33,
    "opp_ranked_giveaways": 29,
    "opp_avg_giveaways": 1.8,
    "fanduelSalary": "$4800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#002244",
    "tmTextLite": "#C60C30",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png",
    "headlineNews": "Patriots placed LB Chase Winovich on injured reserve with a hamstring injury.\n",
    "report": "",
    "analysis": "Winovich suffered a hamstring injury during the Patriots' Week 6 loss to the Cowboys. He will miss at least the next three games while recovering from that ailment. In a corresponding move, New England signed DB Myles Bryant to the active roster. Bryant appeared in Week 4 and Week 5 for the Patriots and is now an active member of the 53-player roster.\n",
    "timestamp": "",
    "source": "ProFootballTalk",
    "game_day_logo": "",
    "avg_fp2": 6.17,
    "week01": 5.0,
    "week02": 19.0,
    "week03": 3.0,
    "week04": 2.0,
    "week05": 5.0,
    "week06": 3.0,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.0, 19.0, 3.0, 2.0, 5.0, 3.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.7, 5.1, 6.8, 4.0, 6.3, 2.8, 8.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.9, 3.1, 6.2, 8.2, 2.9, 0.0, 4.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.4, 14.5, 17.5, 14.0, 14.6, 6.4, 12.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/GB.png",
    "name": "Green Bay Packers",
    "depthchart": "",
    "team": "Green Bay Packers",
    "projected": 6.7,
    "opponent": "Washington Football Team",
    "opp_rank_pts": 21,
    "opp_avg_pts": 0.0,
    "home_away": "",
    "team_rank_allowed_pts": 14,
    "team_avg_allowed_pts": 22.5,
    "team_ranked_takeaways": 7,
    "team_avg_takeaways": 1.5,
    "opp_ranked_giveaways": 24,
    "opp_avg_giveaways": 1.5,
    "fanduelSalary": "$4100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#d7a017",
    "tmColorDark": "#203731",
    "tmTextLite": "#d7a017",
    "tmColorLite_rgba": "rgba(215, 160, 23, 0.2)",
    "tmColorDark_rgba": "rgba(32, 55, 49, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png",
    "headlineNews": "Packers declared CB Kevin King,\u00a0S Vernon Scott, LB Isaiah McDuffie, OT Dennis Kelly, and DL Jack Heflin inactive for Week 6 against the Bears.\n",
    "report": "",
    "analysis": "King is out with a shoulder injury. He's missed three games already to start the year to various injuries.\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 5.0,
    "week01": -4.0,
    "week02": 6.0,
    "week03": 7.0,
    "week04": 7.0,
    "week05": 7.0,
    "week06": 7.0,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [-4.0, 6.0, 7.0, 7.0, 7.0, 7.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.9, 6.0, 2.7, 4.7, 3.8, 5.7, 6.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.8, 1.9, 1.3, 6.1, 3.7, 6.4, 2.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.4, 10.6, 6.9, 12.7, 9.5, 12.5, 10.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/LA.png",
    "name": "Los Angeles Rams",
    "depthchart": "",
    "team": "Los Angeles Rams",
    "projected": 6.6,
    "opponent": "Detroit Lions",
    "opp_rank_pts": 28,
    "opp_avg_pts": 0.0,
    "home_away": "",
    "team_rank_allowed_pts": 7,
    "team_avg_allowed_pts": 19.67,
    "team_ranked_takeaways": 6,
    "team_avg_takeaways": 1.67,
    "opp_ranked_giveaways": 18,
    "opp_avg_giveaways": 1.33,
    "fanduelSalary": "$4900",
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
    "avg_fp2": 6.83,
    "week01": 8.0,
    "week02": 8.0,
    "week03": 3.0,
    "week04": -1.0,
    "week05": 7.0,
    "week06": 16.0,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.0, 8.0, 3.0, -1.0, 7.0, 16.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.4, 5.1, 7.3, 4.6, 0.2, 4.2, 6.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.0, 0.0, 7.6, 6.9, 0.0, 0.9, 3.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.4, 14.3, 13.5, 12.9, 3.3, 7.7, 11.0]
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
    "opponent": "Cincinnati Bengals",
    "opp_rank_pts": 11,
    "opp_avg_pts": 0.0,
    "home_away": "",
    "team_rank_allowed_pts": 8,
    "team_avg_allowed_pts": 20.0,
    "team_ranked_takeaways": 18,
    "team_avg_takeaways": 1.0,
    "opp_ranked_giveaways": 18,
    "opp_avg_giveaways": 1.33,
    "fanduelSalary": "$4300",
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
    "avg_fp2": 6.33,
    "week01": 4.0,
    "week02": 3.0,
    "week03": 3.0,
    "week04": 11.0,
    "week05": 6.0,
    "week06": 11.0,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.0, 3.0, 3.0, 11.0, 6.0, 11.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.3, 4.8, 3.4, 1.8, 4.6, 4.6, 6.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.6, 1.9, 0.0, 1.5, 4.6, 1.7, 1.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.1, 15.5, 7.4, 10.2, 12.3, 8.2, 9.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/CLE.png",
    "name": "Cleveland Browns",
    "depthchart": "",
    "team": "Cleveland Browns",
    "projected": 6.1,
    "opponent": "Denver Broncos",
    "opp_rank_pts": 22,
    "opp_avg_pts": 0.0,
    "home_away": "",
    "team_rank_allowed_pts": 23,
    "team_avg_allowed_pts": 25.67,
    "team_ranked_takeaways": 29,
    "team_avg_takeaways": 0.67,
    "opp_ranked_giveaways": 18,
    "opp_avg_giveaways": 1.33,
    "fanduelSalary": "$3500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#FF3C00",
    "tmColorDark": "#311D00",
    "tmTextLite": "#FF3C00",
    "tmColorLite_rgba": "rgba(255, 60, 0, 0.2)",
    "tmColorDark_rgba": "rgba(49, 29, 0, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
    "headlineNews": "Browns placed LB\u00a0Jeremiah Owusu-Koramoah (ankle) on injured reserve.\u00a0\n",
    "report": "",
    "analysis": "The team's 2021 second round draft pick will miss at least three weeks following a high ankle injury in Week 6 against Arizona.\u00a0Owusu-Koramoah, Pro Football Focus' highest graded Browns linebacker this season, is a significant loss for a struggling Cleveland defense. Head coach Kevin Stefanski hinted that\u00a0Owusu-Koramoah could miss up to six weeks with the ankle issue.\u00a0\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/uqzgq9urghrlu89ckqsm",
    "avg_fp2": 4.67,
    "week01": 1.0,
    "week02": 5.0,
    "week03": 16.0,
    "week04": 8.0,
    "week05": 0.0,
    "week06": -2.0,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.0, 5.0, 16.0, 8.0, 0.0, -2.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.0, 4.1, 6.5, 1.6, 4.5, 4.8, 6.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.5, 1.1, 2.5, 2.5, 2.0, 0.0, 2.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.5, 12.3, 7.0, 5.7, 7.4, 6.2, 8.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/IND.png",
    "name": "Indianapolis Colts",
    "depthchart": "",
    "team": "Indianapolis Colts",
    "projected": 5.3,
    "opponent": "San Francisco 49ers",
    "opp_rank_pts": 15,
    "opp_avg_pts": 0.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 12,
    "team_avg_allowed_pts": 21.67,
    "team_ranked_takeaways": 4,
    "team_avg_takeaways": 2.0,
    "opp_ranked_giveaways": 21,
    "opp_avg_giveaways": 1.4,
    "fanduelSalary": "$4500",
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
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "avg_fp2": 7.0,
    "week01": 4.0,
    "week02": 5.0,
    "week03": 7.0,
    "week04": 8.0,
    "week05": 3.0,
    "week06": 15.0,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.0, 5.0, 7.0, 8.0, 3.0, 15.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.9, 4.4, 1.9, 5.3, 1.2, 5.8, 5.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.6, 1.6, 3.8, 4.9, 2.5, 3.1, 2.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.5, 13.5, 9.4, 10.4, 8.1, 8.9, 10.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/TB.png",
    "name": "Tampa Bay Buccaneers",
    "depthchart": "",
    "team": "Tampa Bay Buccaneers",
    "projected": 5.2,
    "opponent": "Chicago Bears",
    "opp_rank_pts": 30,
    "opp_avg_pts": 0.0,
    "home_away": "",
    "team_rank_allowed_pts": 18,
    "team_avg_allowed_pts": 23.83,
    "team_ranked_takeaways": 7,
    "team_avg_takeaways": 1.5,
    "opp_ranked_giveaways": 3,
    "opp_avg_giveaways": 0.83,
    "fanduelSalary": "$4400",
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
    "game_day_logo": "",
    "avg_fp2": 5.0,
    "week01": 2.0,
    "week02": 7.0,
    "week03": 0.0,
    "week04": 9.0,
    "week05": 8.0,
    "week06": 4.0,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(163, 29, 47, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.0, 7.0, 0.0, 9.0, 8.0, 4.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.0, 6.9, 4.1, 3.3, 9.2, 4.8, 5.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.2, 0.0, 0.3, 2.5, 3.6, 3.4, 2.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(163, 29, 47, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.7, 11.6, 5.8, 5.5, 8.8, 8.2, 9.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/CAR.png",
    "name": "Carolina Panthers",
    "depthchart": "",
    "team": "Carolina Panthers",
    "projected": 4.5,
    "opponent": "New York Giants",
    "opp_rank_pts": 27,
    "opp_avg_pts": 0.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 10,
    "team_avg_allowed_pts": 21.0,
    "team_ranked_takeaways": 18,
    "team_avg_takeaways": 1.0,
    "opp_ranked_giveaways": 24,
    "opp_avg_giveaways": 1.5,
    "fanduelSalary": "$4500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#0085CA",
    "tmColorDark": "#101820",
    "tmTextLite": "#0085CA",
    "tmColorLite_rgba": "rgba(0, 133, 202, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/car.png",
    "headlineNews": "Panthers coach Matt Rhule said he is optimistic that CB Stephon Gilmore will play in Week 7 against the Giants.\n",
    "report": "",
    "analysis": "Rhule added, \"that's been the plan all along.\" Carolina spend a sixth-round pick to bring in Gilmore from New England after it was reported that he would be released. Gilmore is currently on the PUP list because of a quad injury but it's expected that his practice window will be opened and he'll return to the field this week. If he does, it will be a major upgrade for an already stout Carolina secondary. The Panthers are second in the NFL in passing yards per game allowed and Gilmore is less than two years removed from winning Defensive Player of the Year. Daniel Jones has to be viewed as a risky QB2 option in a brutal matchup this week.\n",
    "timestamp": "",
    "source": "David Newton on Twitter",
    "game_day_logo": "",
    "avg_fp2": 5.67,
    "week01": 9.0,
    "week02": 12.0,
    "week03": 8.0,
    "week04": -4.0,
    "week05": 8.0,
    "week06": 1.0,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.0, 12.0, 8.0, -4.0, 8.0, 1.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.7, 6.5, 4.2, 4.0, 7.2, 6.7, 4.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.7, 1.0, 0.8, 2.0, 1.7, 2.4, 3.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 133, 202, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.6, 14.1, 8.0, 8.2, 8.4, 9.7, 9.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/CIN.png",
    "name": "Cincinnati Bengals",
    "depthchart": "",
    "team": "Cincinnati Bengals",
    "projected": 4.4,
    "opponent": "Baltimore Ravens",
    "opp_rank_pts": 7,
    "opp_avg_pts": 0.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 3,
    "team_avg_allowed_pts": 17.33,
    "team_ranked_takeaways": 18,
    "team_avg_takeaways": 1.0,
    "opp_ranked_giveaways": 18,
    "opp_avg_giveaways": 1.33,
    "fanduelSalary": "$3500",
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
    "avg_fp2": 6.33,
    "week01": 5.0,
    "week02": 9.0,
    "week03": 12.0,
    "week04": 1.0,
    "week05": 4.0,
    "week06": 7.0,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.0, 9.0, 12.0, 1.0, 4.0, 7.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.9, 5.3, 4.2, 7.9, 7.2, 5.4, 4.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.8, 1.4, 3.2, 5.6, 2.6, 2.8, 1.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.1, 13.3, 10.9, 11.8, 10.4, 9.7, 7.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/ATL.png",
    "name": "Atlanta Falcons",
    "depthchart": "",
    "team": "Atlanta Falcons",
    "projected": 4.2,
    "opponent": "Miami Dolphins",
    "opp_rank_pts": 29,
    "opp_avg_pts": 0.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 24,
    "team_avg_allowed_pts": 26.0,
    "team_ranked_takeaways": 28,
    "team_avg_takeaways": 0.6,
    "opp_ranked_giveaways": 24,
    "opp_avg_giveaways": 1.5,
    "fanduelSalary": "$3900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#A71930",
    "tmColorDark": "#000000",
    "tmTextLite": "#A71930",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/atl.png",
    "headlineNews": "A.J. Terrell (concussion) was upgraded to full during Thursday's practice.\n",
    "report": "",
    "analysis": "It's a good sign for Terrell finally getting back on the field after missing Week 3's game with the concussion. Even against the Football Team, it's a hard sell to get the Atlanta Falcons D/ST going in your starting lineup, but Terrell should help.\u00a0\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 2.2,
    "week01": 0.0,
    "week02": 1.0,
    "week03": 5.0,
    "week04": 0.0,
    "week05": 5.0,
    "week06": "BYE",
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 1.0, 5.0, 0.0, 5.0, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.9, 5.1, 2.4, 4.2, 7.0, 'BYE', 4.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.5, 0.0, 0.2, 0.8, 6.5, 'BYE', 1.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.4, 14.9, 4.1, 6.9, 12.2, 'BYE', 8.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/MIA.png",
    "name": "Miami Dolphins",
    "depthchart": "",
    "team": "Miami Dolphins",
    "projected": 4.0,
    "opponent": "Atlanta Falcons",
    "opp_rank_pts": 22,
    "opp_avg_pts": 0.0,
    "home_away": "",
    "team_rank_allowed_pts": 31,
    "team_avg_allowed_pts": 29.33,
    "team_ranked_takeaways": 13,
    "team_avg_takeaways": 1.17,
    "opp_ranked_giveaways": 18,
    "opp_avg_giveaways": 1.2,
    "fanduelSalary": "$4000",
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
    "avg_fp2": 2.83,
    "week01": 6.0,
    "week02": 1.0,
    "week03": 4.0,
    "week04": 4.0,
    "week05": -2.0,
    "week06": 4.0,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.0, 1.0, 4.0, 4.0, -2.0, 4.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.8, 7.6, 1.5, 5.4, 3.2, 5.4, 4.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.2, 0.9, 1.2, 1.5, 3.8, 1.9, 1.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 142, 151, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.7, 14.0, 6.4, 9.1, 8.8, 8.9, 6.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/SEA.png",
    "name": "Seattle Seahawks",
    "depthchart": "",
    "team": "Seattle Seahawks",
    "projected": 4.0,
    "opponent": "New Orleans Saints",
    "opp_rank_pts": 11,
    "opp_avg_pts": 0.0,
    "home_away": "",
    "team_rank_allowed_pts": 22,
    "team_avg_allowed_pts": 25.17,
    "team_ranked_takeaways": 18,
    "team_avg_takeaways": 1.0,
    "opp_ranked_giveaways": 9,
    "opp_avg_giveaways": 1.0,
    "fanduelSalary": "$3600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#69BE28",
    "tmColorDark": "#002244",
    "tmTextLite": "#69BE28",
    "tmColorLite_rgba": "rgba(105, 190, 40, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
    "headlineNews": "Seahawks activated CB Tre Brown (knee) from injured reserve.\n",
    "report": "",
    "analysis": "Brown has been out since late in training camp with a knee injury. The rookie fourth-rounder will be making his NFL debut when he takes the field in Week 6. Seattle also activated OL Ethan Pocic from IR.\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mpx0s6jwjrjbhfw9rfol",
    "avg_fp2": 3.67,
    "week01": 6.0,
    "week02": 4.0,
    "week03": 0.0,
    "week04": 6.0,
    "week05": 3.0,
    "week06": 3.0,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.0, 4.0, 0.0, 6.0, 3.0, 3.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.9, 7.8, 2.0, 4.1, 2.7, 5.2, 4.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.9, 4.6, 2.9, 4.8, 5.3, 4.3, 2.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.8, 12.4, 5.9, 9.6, 8.4, 7.7, 6.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/NO.png",
    "name": "New Orleans Saints",
    "depthchart": "",
    "team": "New Orleans Saints",
    "projected": 4.0,
    "opponent": "Seattle Seahawks",
    "opp_rank_pts": 18,
    "opp_avg_pts": 0.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 6,
    "team_avg_allowed_pts": 18.6,
    "team_ranked_takeaways": 3,
    "team_avg_takeaways": 2.0,
    "opp_ranked_giveaways": 1,
    "opp_avg_giveaways": 0.67,
    "fanduelSalary": "$4700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#9b845c",
    "tmColorDark": "#101820",
    "tmTextLite": "#9b845c",
    "tmColorLite_rgba": "rgba(155, 132, 92, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
    "headlineNews": "Saints LB Kwon Alexander was designated to return from injured reserve.\n",
    "report": "",
    "analysis": "Alexander played 60% of the defensive snaps in Week 1 against the Packers but has been on New Orleans' injured reserve since. It's possible he's activated ahead of Monday night against the Seahawks.\n",
    "timestamp": "",
    "source": "Pro Football Talk on Twitter",
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mpx0s6jwjrjbhfw9rfol",
    "avg_fp2": 8.2,
    "week01": 15.0,
    "week02": 6.0,
    "week03": 12.0,
    "week04": 2.0,
    "week05": 6.0,
    "week06": "BYE",
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [15.0, 6.0, 12.0, 2.0, 6.0, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.6, 6.4, 4.4, 6.9, 5.3, 'BYE', 4.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.2, 2.5, 5.2, 4.0, 5.8, 'BYE', 3.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(155, 132, 92, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.8, 14.1, 13.0, 13.0, 12.3, 'BYE', 9.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/DEN.png",
    "name": "Denver Broncos",
    "depthchart": "",
    "team": "Denver Broncos",
    "projected": 3.9,
    "opponent": "Cleveland Browns",
    "opp_rank_pts": 9,
    "opp_avg_pts": 0.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 4,
    "team_avg_allowed_pts": 17.5,
    "team_ranked_takeaways": 18,
    "team_avg_takeaways": 1.0,
    "opp_ranked_giveaways": 13,
    "opp_avg_giveaways": 1.17,
    "fanduelSalary": "$4500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#e17757",
    "tmColorDark": "#002244",
    "tmTextLite": "#e17757",
    "tmColorLite_rgba": "rgba(225, 119, 87, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/den.png",
    "headlineNews": "Broncos ILB Alexander Johnson will miss the remainder of the season with a torn pectoral muscle.\u00a0\n",
    "report": "",
    "analysis": "The Broncos have now lost both of their starting interior linebackers to torn pec muscles. Jose Jewell went down with the same injury in Week 2 and is also done for the year. Pro Football Focus had Johnson graded as their top linebacker at stopping the run this year. He ends the year with 32 combined tackles and a pair of TFLs. His loss will make Denver an easier opponent to run the ball against but they still project as an elite defense overall.\u00a0\n",
    "timestamp": "",
    "source": "Mike Klis on Twitter",
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/uqzgq9urghrlu89ckqsm",
    "avg_fp2": 7.17,
    "week01": 8.0,
    "week02": 9.0,
    "week03": 19.0,
    "week04": 3.0,
    "week05": 3.0,
    "week06": 1.0,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.0, 9.0, 19.0, 3.0, 3.0, 1.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.3, 5.9, 13.3, 6.4, 7.0, 5.5, 3.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.3, 1.0, 6.7, 8.0, 4.1, 2.8, 1.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(225, 119, 87, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.1, 9.6, 13.7, 13.3, 11.1, 9.9, 7.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/NYG.png",
    "name": "New York Giants",
    "depthchart": "",
    "team": "New York Giants",
    "projected": 3.7,
    "opponent": "Carolina Panthers",
    "opp_rank_pts": 16,
    "opp_avg_pts": 0.0,
    "home_away": "",
    "team_rank_allowed_pts": 29,
    "team_avg_allowed_pts": 28.33,
    "team_ranked_takeaways": 10,
    "team_avg_takeaways": 1.33,
    "opp_ranked_giveaways": 27,
    "opp_avg_giveaways": 1.67,
    "fanduelSalary": "$3600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#A71930",
    "tmColorDark": "#0B2265",
    "tmTextLite": "#A71930",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(11, 34, 101, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png",
    "headlineNews": "NFL Network's Ian Rapoport reports the Giants are signing LB\u00a0Benardrick McKinney.\n",
    "report": "",
    "analysis": "McKinney was traded from Houston to Miami in the offseason but was unable to make the Dolphins' roster. He started 77 games for the Texans from 2015-2020 but was limited to just four games because of a shoulder injury in his final campaign with the team. Rapsheet noted that he'll be signing with the practice squad but the plan is for him to get promoted to the active roster once he is up to speed. McKinney offers New York some depth at interior linebacker, where the Giants previously lost Blake Martinez to a torn ACL.\n",
    "timestamp": "",
    "source": "Ian Rapoport on Twitter",
    "game_day_logo": "",
    "avg_fp2": 3.0,
    "week01": 4.0,
    "week02": 2.0,
    "week03": 6.0,
    "week04": 2.0,
    "week05": 2.0,
    "week06": 2.0,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.0, 2.0, 6.0, 2.0, 2.0, 2.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.4, 3.9, 5.7, 2.7, -0.1, 1.9, 3.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.2, 0.2, 1.7, 1.3, 0.0, 0.1, 0.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.1, 13.0, 7.6, 7.2, 6.2, 4.7, 5.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/TEN.png",
    "name": "Tennessee Titans",
    "depthchart": "",
    "team": "Tennessee Titans",
    "projected": 3.7,
    "opponent": "Kansas City Chiefs",
    "opp_rank_pts": 5,
    "opp_avg_pts": 0.0,
    "home_away": "",
    "team_rank_allowed_pts": 26,
    "team_avg_allowed_pts": 27.17,
    "team_ranked_takeaways": 26,
    "team_avg_takeaways": 0.83,
    "opp_ranked_giveaways": 32,
    "opp_avg_giveaways": 2.33,
    "fanduelSalary": "$3200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#4495D1",
    "tmColorDark": "#002A5C",
    "tmTextLite": "#4495D1",
    "tmColorLite_rgba": "rgba(68, 149, 209, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 92, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png",
    "headlineNews": "Titans signed CB\u00a0Greg Mabin.\n",
    "report": "",
    "analysis": "Tennessee placed rookie CB Caleb Farley on IR on Tuesday, so they were in dire need of help for a secondary unit that has already been torched through the air this season. Mabin figures to add depth to the back half of the Titans' defense. He made four starts and five appearances for the Jaguars in 2020.\n",
    "timestamp": "",
    "source": "Field Yates on Twitter",
    "game_day_logo": "",
    "avg_fp2": 3.17,
    "week01": 0.0,
    "week02": 2.0,
    "week03": 3.0,
    "week04": 3.0,
    "week05": 7.0,
    "week06": 4.0,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 2.0, 3.0, 3.0, 7.0, 4.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.1, 3.8, 2.3, 6.5, 7.7, 3.0, 3.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.0, 0.8, 3.0, 6.4, 4.2, 0.0, 0.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.1, 13.3, 8.0, 14.9, 9.4, 4.6, 7.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/NYJ.png",
    "name": "New York Jets",
    "depthchart": "",
    "team": "New York Jets",
    "projected": 3.1,
    "opponent": "New England Patriots",
    "opp_rank_pts": 24,
    "opp_avg_pts": 0.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 20,
    "team_avg_allowed_pts": 24.4,
    "team_ranked_takeaways": 22,
    "team_avg_takeaways": 0.8,
    "opp_ranked_giveaways": 29,
    "opp_avg_giveaways": 1.83,
    "fanduelSalary": "$3300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#125740",
    "tmColorDark": "#003f2d",
    "tmTextLite": "#FFFFFF",
    "tmColorLite_rgba": "rgba(18, 87, 64, 0.2)",
    "tmColorDark_rgba": "rgba(0, 63, 45, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png",
    "headlineNews": "Jets signed DE\u00a0John Franklin-Myers to a contract extension.\n",
    "report": "",
    "analysis": "The terms are unknown. The 2018 fourth-round pick of the Rams was headed into the final year of his rookie contract. The Jets claimed him off waivers in September 2019. 25-year-old Franklin-Myers' development was slow going, but he has been an every-week starter this season and notched three sacks in four games. He is playing heavy snaps and earning excellent grades from Pro Football Focus. Perhaps he is breaking out under new defensive-minded head coach Robert Saleh.\u00a0\n",
    "timestamp": "",
    "source": "Rich Cimini on Twitter ",
    "game_day_logo": "",
    "avg_fp2": 4.4,
    "week01": 4.0,
    "week02": 3.0,
    "week03": 4.0,
    "week04": 7.0,
    "week05": 4.0,
    "week06": "BYE",
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.0, 3.0, 4.0, 7.0, 4.0, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.4, 6.5, 2.9, 3.9, 2.6, 'BYE', 3.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.5, 0.9, 0.1, 1.4, 2.8, 'BYE', 3.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  "rgba(18, 87, 64, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.6, 12.8, 6.6, 7.2, 9.7, 'BYE', 8.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/SF.png",
    "name": "San Francisco 49ers",
    "depthchart": "",
    "team": "San Francisco 49ers",
    "projected": 2.9,
    "opponent": "Indianapolis Colts",
    "opp_rank_pts": 19,
    "opp_avg_pts": 0.0,
    "home_away": "",
    "team_rank_allowed_pts": 16,
    "team_avg_allowed_pts": 23.2,
    "team_ranked_takeaways": 31,
    "team_avg_takeaways": 0.4,
    "opp_ranked_giveaways": 3,
    "opp_avg_giveaways": 0.83,
    "fanduelSalary": "$4000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmTextLite": "#B3995D",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "49ers signed LB\u00a0Mychal Kendricks.\u00a0\n",
    "report": "",
    "analysis": "Kendricks, who was with the Niners during training camp and was released after suffering an injury, could see fill-in duty while LB Dre Greenlaw is sidelined. The ten-year veteran hasn't played regularly since 2019 when he was with Seattle.\u00a0\n",
    "timestamp": "",
    "source": "Ian Rapoport on Twitter",
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "avg_fp2": 3.8,
    "week01": 4.0,
    "week02": 8.0,
    "week03": 0.0,
    "week04": 2.0,
    "week05": 5.0,
    "week06": "BYE",
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.0, 8.0, 0.0, 2.0, 5.0, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.8, 3.2, 4.6, 2.2, 0.8, 'BYE', 2.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.6, 0.7, 3.1, 0.0, 0.0, 'BYE', 1.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.4, 11.1, 7.1, 3.7, 4.0, 'BYE', 7.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/CHI.png",
    "name": "Chicago Bears",
    "depthchart": "",
    "team": "Chicago Bears",
    "projected": 2.2,
    "opponent": "Tampa Bay Buccaneers",
    "opp_rank_pts": 3,
    "opp_avg_pts": 0.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 9,
    "team_avg_allowed_pts": 20.83,
    "team_ranked_takeaways": 13,
    "team_avg_takeaways": 1.17,
    "opp_ranked_giveaways": 10,
    "opp_avg_giveaways": 1.0,
    "fanduelSalary": "$3700",
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
    "avg_fp2": 6.5,
    "week01": 0.0,
    "week02": 13.0,
    "week03": 5.0,
    "week04": 9.0,
    "week05": 9.0,
    "week06": 3.0,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 13.0, 5.0, 9.0, 9.0, 3.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.0, 5.7, 4.5, 4.3, 0.9, 4.5, 2.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.2, 3.1, 4.3, 0.0, 2.2, 1.7, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  "rgba(195, 104, 53, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.9, 14.0, 10.2, 7.2, 7.1, 7.5, 4.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/DET.png",
    "name": "Detroit Lions",
    "depthchart": "",
    "team": "Detroit Lions",
    "projected": 2.2,
    "opponent": "Los Angeles Rams",
    "opp_rank_pts": 6,
    "opp_avg_pts": 0.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 28,
    "team_avg_allowed_pts": 27.5,
    "team_ranked_takeaways": 13,
    "team_avg_takeaways": 1.17,
    "opp_ranked_giveaways": 13,
    "opp_avg_giveaways": 1.17,
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
    "avg_fp2": 3.83,
    "week01": 4.0,
    "week02": -1.0,
    "week03": 7.0,
    "week04": 3.0,
    "week05": 7.0,
    "week06": 3.0,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.0, -1.0, 7.0, 3.0, 7.0, 3.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.5, 5.3, 1.4, 4.5, 2.8, 3.4, 2.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.6, 1.2, 1.4, 2.2, 1.9, 0.0, 0.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 118, 182, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.0, 12.7, 8.7, 8.3, 5.7, 5.5, 6.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/LV.png",
    "name": "Las Vegas Raiders",
    "depthchart": "",
    "team": "Las Vegas Raiders",
    "projected": 2.2,
    "opponent": "Philadelphia Eagles",
    "opp_rank_pts": 20,
    "opp_avg_pts": 0.0,
    "home_away": "",
    "team_rank_allowed_pts": 15,
    "team_avg_allowed_pts": 22.67,
    "team_ranked_takeaways": 13,
    "team_avg_takeaways": 1.17,
    "opp_ranked_giveaways": 3,
    "opp_avg_giveaways": 0.83,
    "fanduelSalary": "$4200",
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
    "game_day_logo": "",
    "avg_fp2": 5.5,
    "week01": 7.0,
    "week02": 5.0,
    "week03": 4.0,
    "week04": 1.0,
    "week05": 3.0,
    "week06": 13.0,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.0, 5.0, 4.0, 1.0, 3.0, 13.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.3, 3.9, 8.0, 5.9, 5.2, 4.1, 2.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.6, 5.1, 2.8, 1.4, 2.5, 0.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.6, 11.1, 11.4, 6.6, 7.6, 7.2, 6.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/KC.png",
    "name": "Kansas City Chiefs",
    "depthchart": "",
    "team": "Kansas City Chiefs",
    "projected": 2.1,
    "opponent": "Tennessee Titans",
    "opp_rank_pts": 8,
    "opp_avg_pts": 0.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 27,
    "team_avg_allowed_pts": 27.33,
    "team_ranked_takeaways": 18,
    "team_avg_takeaways": 1.0,
    "opp_ranked_giveaways": 18,
    "opp_avg_giveaways": 1.33,
    "fanduelSalary": "$3400",
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
    "avg_fp2": 2.5,
    "week01": 5.0,
    "week02": 1.0,
    "week03": 0.0,
    "week04": 2.0,
    "week05": -1.0,
    "week06": 8.0,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.0, 1.0, 0.0, 2.0, -1.0, 8.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.5, 3.3, 6.5, 2.5, 1.7, 4.2, 2.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.3, 3.0, 4.4, 1.3, 0.0, 1.6, 0.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.4, 14.5, 9.9, 8.8, 7.4, 11.2, 7.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/HOU.png",
    "name": "Houston Texans",
    "depthchart": "",
    "team": "Houston Texans",
    "projected": 1.1,
    "opponent": "Arizona Cardinals",
    "opp_rank_pts": 4,
    "opp_avg_pts": 0.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 30,
    "team_avg_allowed_pts": 28.83,
    "team_ranked_takeaways": 10,
    "team_avg_takeaways": 1.33,
    "opp_ranked_giveaways": 3,
    "opp_avg_giveaways": 0.83,
    "fanduelSalary": "$3000",
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
    "avg_fp2": 3.33,
    "week01": 7.0,
    "week02": 5.0,
    "week03": 3.0,
    "week04": -1.0,
    "week05": 5.0,
    "week06": 1.0,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.0, 5.0, 3.0, -1.0, 5.0, 1.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.0, 4.8, 3.0, 2.7, 6.3, 3.5, 1.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.1, 0.0, 0.0, 0.2, 2.5, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.8, 9.0, 4.8, 5.5, 8.5, 5.9, 6.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/WAS.png",
    "name": "Washington Football Team",
    "depthchart": "",
    "team": "Washington Football Team",
    "projected": 0.9,
    "opponent": "Green Bay Packers",
    "opp_rank_pts": 15,
    "opp_avg_pts": 0.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 32,
    "team_avg_allowed_pts": 31.67,
    "team_ranked_takeaways": 18,
    "team_avg_takeaways": 1.0,
    "opp_ranked_giveaways": 3,
    "opp_avg_giveaways": 0.83,
    "fanduelSalary": "$3800",
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
    "avg_fp2": 3.83,
    "week01": 5.0,
    "week02": 3.0,
    "week03": -4.0,
    "week04": 6.0,
    "week05": 5.0,
    "week06": 8.0,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.0, 3.0, -4.0, 6.0, 5.0, 8.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.1, 4.7, 1.9, 3.5, 4.0, 3.8, 0.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.0, 2.0, 0.5, 1.0, 0.4, 0.8, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.6, 12.0, 5.0, 7.3, 4.3, 7.2, 5.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/PHI.png",
    "name": "Philadelphia Eagles",
    "depthchart": "",
    "team": "Philadelphia Eagles",
    "projected": 0.5,
    "opponent": "Las Vegas Raiders",
    "opp_rank_pts": 13,
    "opp_avg_pts": 0.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 19,
    "team_avg_allowed_pts": 24.0,
    "team_ranked_takeaways": 18,
    "team_avg_takeaways": 1.0,
    "opp_ranked_giveaways": 1,
    "opp_avg_giveaways": 0.67,
    "fanduelSalary": "$3500",
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
    "game_day_logo": "",
    "avg_fp2": 4.33,
    "week01": 10.0,
    "week02": 1.0,
    "week03": 5.0,
    "week04": -1.0,
    "week05": 10.0,
    "week06": 1.0,
    "week07": "",
    "week08": "",
    "week09": "",
    "week10": "",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.0, 1.0, 5.0, -1.0, 10.0, 1.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.3, 5.5, 4.6, 3.8, 2.5, 2.7, 0.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.7, 2.1, 3.1, 4.1, 2.9, 1.6, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.5, 14.0, 7.7, 10.2, 8.9, 7.0, 6.9]
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