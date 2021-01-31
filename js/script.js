var App = angular.module('footballApp', ['tc.chartjs']);

App.controller('positionController', function($scope, $http) {

  //JSON data for position and players

/*********************** PASTE AFTER HERE ************************/

$scope.currentDate = {"currentDate": "Sunday, 31 January 2021 07:56 AM (central time)"};
$scope.week = {"nflWeek": "Super Bowl"};
$scope.playoffLogo = {"src": "https://upload.wikimedia.org/wikipedia/en/6/69/Super_Bowl_LV.png"}

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
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2330.png",
    "name": "Tom Brady",
    "depthchart": "Starter: QB-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 26.9,
    "opponent": "Kansas City Chiefs",
    "home_away": "",
    "opp_rank_Neu": 14,
    "team_rank_Pos": 3,
    "avg_fp2": 21.84,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 20.34,
    "fanduelSalary": "$15000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#D50A0A",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(213, 10, 10, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#D50A0A",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Tom Brady has an adjusted completion rate of 68.6 percent over his three 2021 postseason games.\u00a0\n",
    "report": "",
    "analysis": "That marks a 6.5-point drop from his regular season adjusted completion rate, which accounts for throw aways, drops,\u00a0spiked balls, batted passes, and passes where the quarterback\u00a0was hit while he\u00a0threw the ball, per Pro Football Focus. Only Russell Wilson -- who only played one playoff game -- has a lower adjusted completion rate this postseason. Brady and the Bucs made it out of Green Bay with a Super Bowl berth despite his three interceptions to go along with three touchdown tosses against one of the league's top secondaries. Brady hasn't gotten much help from his pass catchers, who have recorded a dozen drops in three postseason contests (the adjusted completion rate accounts for drops). The 43 year old's accuracy issues could pose problems for the Bucs offense in the Super Bowl against a Kansas City secondary that allowed the league's fourth lowest completion rate in 2020.\u00a0\n",
    "timestamp": "2021-01-25 04:32 PM",
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
    "week18": 23.04,
    "week19": 22.16,
    "week20": 20.1,
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20', 'Week 21'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [22.46, 9.68, 23.88, 33.46, 14.12, 14.64, 36.86, 19.06, 5.36, 31.84, 14.24, 23.7, 'BYE', 15.64, 23.4, 29.92, 31.26, 23.04, 22.16, 20.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [23.4, 22.6, 19.6, 16.0, 17.2, 19.7, 19.5, 21.4, 20.7, 15.5, 19.2, 20.1, 'BYE', 19.7, 24.7, 24.2, 20.1, 16.8, 22.4, 22.1, 26.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [10.5, 12.7, 12.4, 10.2, 10.4, 11.6, 14.5, 13.9, 11.5, 11.2, 10.4, 10.2, 'BYE', 10.4, 12.8, 10.8, 12.4, 9.4, 11.5, 12.0, 11.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(213, 10, 10, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [25.9, 27.3, 27.2, 24.0, 25.8, 27.6, 28.8, 27.6, 26.2, 26.3, 25.6, 25.3, 'BYE', 26.9, 26.7, 25.7, 28.3, 26.1, 25.7, 25.4, 26.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3139477.png",
    "name": "Patrick Mahomes",
    "depthchart": "Starter: QB-1",
    "team": "Kansas City Chiefs",
    "projected": 25.2,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "at ",
    "opp_rank_Neu": 21,
    "team_rank_Pos": 1,
    "avg_fp2": 25.32,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 19.21,
    "fanduelSalary": "$18000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Quarterbacks facing this Bucs this season completed 67.88 percent of their passes.\u00a0\n",
    "report": "",
    "analysis": "A mere six teams gave up a higher completion rate in the 2020 regular season. QBs facing Tampa in the postseason have completed 61.9 percent of their passes. A pass funnel defense -- 75.5 percent of yards gained against Tampa came through the air -- the Bucs consistently gave up efficient passing performances. They now face Patrick Mahomes in the Super Bowl -- the same guy who roasted the Bucs in Week 12\u00a0for 462 yards and three touchdowns while completing 75.5 percent of his throws. The Bucs are going to have to pour on the points if they're going to keep pace with Mahomes and the KC offense.\u00a0\n",
    "timestamp": "2021-01-26 04:08 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 20.44,
    "week02": 27.48,
    "week03": 40.0,
    "week04": 20.24,
    "week05": 30.7,
    "week06": 20.6,
    "week07": 12.0,
    "week08": 36.64,
    "week09": 30.88,
    "week10": "BYE",
    "week11": 22.52,
    "week12": 31.28,
    "week13": 19.32,
    "week14": 21.62,
    "week15": 25.86,
    "week16": 20.22,
    "week17": "DNP",
    "week18": "DNP",
    "week19": 21.6,
    "week20": 25.5,
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20', 'Week 21'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [20.44, 27.48, 40.0, 20.24, 30.7, 20.6, 12.0, 36.64, 30.88, 'BYE', 22.52, 31.28, 19.32, 21.62, 25.86, 20.22, 'DNP', 'DNP', 21.6, 25.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [26.8, 20.8, 17.8, 31.6, 30.6, 22.4, 19.3, 25.4, 23.8, 'BYE', 21.6, 28.4, 31.3, 23.5, 25.1, 27.5, 'DNP', 'DNP', 26.1, 29.4, 25.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [16.8, 17.6, 17.0, 15.9, 16.1, 17.6, 17.4, 19.2, 17.0, 'BYE', 16.0, 18.2, 16.3, 16.5, 18.0, 16.0, 'DNP', 'DNP', 16.6, 17.0, 19.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [30.3, 32.6, 32.2, 30.8, 32.3, 34.1, 32.6, 33.1, 32.3, 'BYE', 31.3, 32.4, 30.7, 29.9, 33.0, 32.3, 'DNP', 'DNP', 31.8, 32.1, 32.5]
                    }
                    
                    ]
               }
            }];




$scope.positionRB = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4242214.png",
    "name": "Clyde Edwards-Helaire",
    "depthchart": "Starter: RB-1",
    "team": "Kansas City Chiefs",
    "projected": 13.8,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "at ",
    "opp_rank_Neg": 1,
    "team_rank_Neu": 16,
    "avg_fp2": 12.15,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 16.26,
    "fanduelSalary": "$10500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Clyde Edwards-Helaire (ankle, hip) practiced fully Thursday.\u00a0\n",
    "report": "",
    "analysis": "A full session is an upgrade for the rookie, who was limited during Wednesday's practice. He returned to the field last week against the Bills, handling seven touches and scoring a touchdown in the Chiefs' AFC title game victory. With Le'Veon Bell (knee) sidelined last week, Edwards-Helaire played 49 percent of KC's offensive snaps while Darrel Williams played 46 percent. Bell is expected back for the Super Bowl, though CEH -- fully recovered from his hip and ankle injuries --\u00a0is the favorite to lead the backfield in touches against Tampa.\u00a0\n",
    "timestamp": "2021-01-28 09:02 PM",
    "source": "Kansas City Chiefs on Twitter ",
    "game_day_logo": "",
    "week01": 19.8,
    "week02": 10.0,
    "week03": 15.9,
    "week04": 10.6,
    "week05": 9.5,
    "week06": 18.9,
    "week07": 12.8,
    "week08": 4.6,
    "week09": 10.9,
    "week10": "BYE",
    "week11": 20.2,
    "week12": 4.4,
    "week13": "DNP",
    "week14": 11.6,
    "week15": 8.8,
    "week16": "DNP",
    "week17": "DNP",
    "week18": "DNP",
    "week19": "DNP",
    "week20": 7.2,
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20', 'Week 21'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [19.8, 10.0, 15.9, 10.6, 9.5, 18.9, 12.8, 4.6, 10.9, 'BYE', 20.2, 4.4, 'DNP', 11.6, 8.8, 'DNP', 'DNP', 'DNP', 'DNP', 7.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.2, 14.3, 11.1, 15.7, 13.2, 15.9, 17.0, 12.6, 8.0, 'BYE', 8.4, 10.2, 'DNP', 7.8, 8.6, 'DNP', 'DNP', 'DNP', 'DNP', 10.8, 13.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.1, 11.9, 11.3, 13.2, 10.8, 7.9, 9.5, 8.4, 11.1, 'BYE', 6.9, 10.9, 'DNP', 10.3, 5.8, 'DNP', 'DNP', 'DNP', 'DNP', 6.9, 8.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.1, 20.9, 16.8, 20.3, 20.8, 22.6, 21.0, 16.5, 19.2, 'BYE', 15.2, 18.9, 'DNP', 18.4, 12.4, 'DNP', 'DNP', 'DNP', 'DNP', 18.8, 14.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3115364.png",
    "name": "Leonard Fournette",
    "depthchart": "Starter: RB-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 12.7,
    "opponent": "Kansas City Chiefs",
    "home_away": "",
    "opp_rank_Neu": 21,
    "team_rank_Neg": 28,
    "avg_fp2": 8.77,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 21.59,
    "fanduelSalary": "$11700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#D50A0A",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(213, 10, 10, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#D50A0A",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Leonard Fournette rushed 12 times for 55 yards and a touchdown in the Bucs' NFC Championship Game win over the Packers, adding five receptions for 19 additional yards.\u00a0\n",
    "report": "",
    "analysis": "Aside from his spinning, tackle-breaking 20-yard touchdown run in the second quarter, it was a day to forget for Fournette, who had a pair of drops in an awful receiving performance. Part of the problem on the ground was Fournette being called on in far too obvious of rushing situations. He is not the kind of back who is going to turn those nothings into something. The Bucs' \"hot hand\" the entire postseason, Fournette will be the lead back for Super Bowl LV, at least to begin the game.\u00a0\n",
    "timestamp": "2021-01-25 12:20 AM",
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
    "week18": 21.2,
    "week19": 19.2,
    "week20": 15.9,
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20', 'Week 21'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.4, 25.6, 3.2, 'DNP', 0.0, 'DNP', 12.7, 8.6, 7.1, 4.0, 9.1, 3.5, 'BYE', 'DNP', 20.0, 14.1, 3.7, 21.2, 19.2, 15.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.7, 6.9, 11.8, 'DNP', 6.7, 'DNP', 6.2, 6.9, 9.2, 12.4, 7.9, 9.9, 'BYE', 'DNP', 12.6, 12.0, 9.4, 5.3, 8.9, 13.0, 12.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [9.2, 7.8, 7.1, 'DNP', 6.3, 'DNP', 5.7, 6.5, 6.0, 6.6, 6.3, 5.0, 'BYE', 'DNP', 5.3, 4.4, 5.4, 6.8, 4.4, 5.5, 7.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(213, 10, 10, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.2, 19.9, 23.2, 'DNP', 19.4, 'DNP', 20.5, 19.7, 19.8, 20.5, 22.4, 21.0, 'BYE', 'DNP', 19.5, 21.0, 22.6, 23.5, 18.2, 20.5, 21.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15825.png",
    "name": "Le'Veon Bell",
    "depthchart": "Reserve: RB-3",
    "team": "Kansas City Chiefs",
    "projected": 9.0,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "at ",
    "opp_rank_Neg": 1,
    "team_rank_Neu": 16,
    "avg_fp2": 6.05,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 16.26,
    "fanduelSalary": "$1200",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Knee",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Clyde Edwards-Helaire (ankle, hip) practiced fully Thursday.\u00a0\n",
    "report": "",
    "analysis": "A full session is an upgrade for the rookie, who was limited during Wednesday's practice. He returned to the field last week against the Bills, handling seven touches and scoring a touchdown in the Chiefs' AFC title game victory. With Le'Veon Bell (knee) sidelined last week, Edwards-Helaire played 49 percent of KC's offensive snaps while Darrel Williams played 46 percent. Bell is expected back for the Super Bowl, though CEH -- fully recovered from his hip and ankle injuries --\u00a0is the favorite to lead the backfield in touches against Tampa.\u00a0\n",
    "timestamp": "2021-01-28 09:02 PM",
    "source": "Kansas City Chiefs on Twitter ",
    "game_day_logo": "",
    "week01": 5.6,
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": 7.2,
    "week06": "DNP",
    "week07": 3.9,
    "week08": 5.3,
    "week09": 0.8,
    "week10": "BYE",
    "week11": 10.1,
    "week12": 4.2,
    "week13": 6.5,
    "week14": 4.5,
    "week15": 14.1,
    "week16": 4.4,
    "week17": "DNP",
    "week18": "DNP",
    "week19": 0.6,
    "week20": "DNP",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20', 'Week 21'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.6, 'DNP', 'DNP', 'DNP', 7.2, 'DNP', 3.9, 5.3, 0.8, 'BYE', 10.1, 4.2, 6.5, 4.5, 14.1, 4.4, 'DNP', 'DNP', 0.6, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.5, 'DNP', 'DNP', 'DNP', 18.3, 'DNP', 9.3, 7.6, 4.6, 'BYE', 5.9, 6.8, 8.9, 5.6, 5.4, 13.2, 'DNP', 'DNP', 13.8, 'DNP', 9.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [8.0, 'DNP', 'DNP', 'DNP', 10.3, 'DNP', 9.1, 8.9, 6.9, 'BYE', 7.6, 0.7, 7.5, 7.4, 3.1, 4.4, 'DNP', 'DNP', 3.7, 'DNP', 4.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.1, 'DNP', 'DNP', 'DNP', 27.1, 'DNP', 26.3, 27.1, 26.2, 'BYE', 24.8, 19.8, 24.9, 24.2, 12.6, 23.1, 'DNP', 'DNP', 18.5, 'DNP', 20.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3115375.png",
    "name": "Darrel Williams",
    "depthchart": "Backup: RB-2",
    "team": "Kansas City Chiefs",
    "projected": 8.7,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "at ",
    "opp_rank_Neg": 1,
    "team_rank_Neu": 16,
    "avg_fp2": 2.84,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 16.26,
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
    "headlineNews": "Clyde Edwards-Helaire (ankle, hip) practiced fully Thursday.\u00a0\n",
    "report": "",
    "analysis": "A full session is an upgrade for the rookie, who was limited during Wednesday's practice. He returned to the field last week against the Bills, handling seven touches and scoring a touchdown in the Chiefs' AFC title game victory. With Le'Veon Bell (knee) sidelined last week, Edwards-Helaire played 49 percent of KC's offensive snaps while Darrel Williams played 46 percent. Bell is expected back for the Super Bowl, though CEH -- fully recovered from his hip and ankle injuries --\u00a0is the favorite to lead the backfield in touches against Tampa.\u00a0\n",
    "timestamp": "2021-01-28 09:02 PM",
    "source": "Kansas City Chiefs on Twitter ",
    "game_day_logo": "",
    "week01": 4.0,
    "week02": 1.7,
    "week03": 1.7,
    "week04": 0.2,
    "week05": 4.4,
    "week06": 10.6,
    "week07": 0.0,
    "week08": 3.1,
    "week09": 0.8,
    "week10": "BYE",
    "week11": 3.7,
    "week12": 0.0,
    "week13": 4.8,
    "week14": 0.0,
    "week15": 0.5,
    "week16": 9.3,
    "week17": 0.7,
    "week18": "DNP",
    "week19": 11.4,
    "week20": 12.6,
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20', 'Week 21'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.0, 1.7, 1.7, 0.2, 4.4, 10.6, 0.0, 3.1, 0.8, 'BYE', 3.7, 0.0, 4.8, 0.0, 0.5, 9.3, 0.7, 'DNP', 11.4, 12.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.8, 4.1, 4.8, 5.5, 3.3, 7.1, 5.6, 2.7, 2.1, 'BYE', 3.8, 3.4, 4.9, 3.0, 2.7, 4.4, 7.2, 'DNP', 5.8, 5.9, 8.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.7, 0.8, 3.1, 0.0, 0.0, 0.5, 1.7, 0.3, 0.0, 'BYE', 0.7, 3.2, 0.0, 0.0, 0.3, 1.2, 0.0, 'DNP', 1.4, 0.0, 0.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.4, 10.5, 12.2, 8.9, 8.7, 11.0, 9.2, 10.3, 8.4, 'BYE', 10.5, 11.4, 9.2, 7.9, 9.3, 9.3, 8.4, 'DNP', 9.9, 5.8, 9.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3912550.png",
    "name": "Ronald Jones",
    "depthchart": "Backup: RB-2",
    "team": "Tampa Bay Buccaneers",
    "projected": 7.6,
    "opponent": "Kansas City Chiefs",
    "home_away": "",
    "opp_rank_Neu": 21,
    "team_rank_Neg": 28,
    "avg_fp2": 12.31,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 21.59,
    "fanduelSalary": "$3300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#D50A0A",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(213, 10, 10, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#D50A0A",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Ronald Jones rushed 10 times for 16 yards in the Bucs' NFC Championship Game win over the Packers.\n",
    "report": "",
    "analysis": "Jones was not targeted in the passing game. Thanks in large part to unimaginative play-calling, the\u00a0Bucs' running game was going nowhere all afternoon. Leonard Fournette made the only big play on the ground with a winding 20-yard touchdown run. Jones is typically the bigger play threat, but Fournette has emerged as \"the guy\" during the playoffs. Both will be involved in Super Bowl LV, but Fournette will get the first crack at establishing the \"hot hand.\"\u00a0\u00a0\n",
    "timestamp": "2021-01-25 12:23 AM",
    "source": null,
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
    "week18": "DNP",
    "week19": 6.2,
    "week20": 1.6,
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20', 'Week 21'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.2, 9.7, 8.3, 15.8, 14.0, 25.1, 10.1, 4.6, 3.3, 24.3, 2.4, 16.8, 'BYE', 14.9, 'DNP', 'DNP', 13.8, 'DNP', 6.2, 1.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.4, 15.3, 15.0, 12.1, 8.6, 16.6, 13.4, 14.6, 11.7, 16.3, 14.2, 12.9, 'BYE', 14.7, 'DNP', 'DNP', 12.2, 'DNP', 5.1, 6.3, 7.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.2, 2.0, 2.0, 2.9, 1.6, 3.0, 2.5, 3.5, 3.6, 3.1, 0.5, 0.4, 'BYE', 6.3, 'DNP', 'DNP', 4.2, 'DNP', 2.3, 4.1, 4.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(213, 10, 10, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.9, 9.1, 13.6, 11.4, 10.9, 12.6, 12.9, 15.7, 16.0, 16.3, 10.8, 9.7, 'BYE', 18.6, 'DNP', 'DNP', 15.9, 'DNP', 13.7, 16.3, 15.2]
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
    "opponent": "Kansas City Chiefs",
    "home_away": "",
    "opp_rank_Neu": 14,
    "team_rank_Pos": 3,
    "avg_fp2": 13.35,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 25.16,
    "fanduelSalary": "$12600",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Knee",
    "tmColorLite": "#D50A0A",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(213, 10, 10, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#D50A0A",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Mike Evans caught 3-of-8 targets for 51 yards and a touchdown in the Bucs' NFC Championship Game win over the Packers.\u00a0\n",
    "report": "",
    "analysis": "It was a mixed day for Evans, who reaved Kevin King's soul \u2014 including on his 15-yard where first quarter touchdown where King mis-timed his jump \u2014 but also committed a few drops. He was the target on all three of Tom Brady's interceptions, including a too-high pass that hit off Evans' hands into Jaire Alexander's. This connection will have to be cleaned up for the Bucs to bring home the second Lombardi in franchise history against either the Chiefs or Bills.\u00a0\n",
    "timestamp": "2021-01-25 12:17 AM",
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
    "week18": 14.9,
    "week19": 6.8,
    "week20": 12.6,
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20', 'Week 21'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.7, 19.9, 13.2, 21.7, 12.6, 1.5, 4.7, 14.0, 8.4, 16.7, 13.4, 18.5, 'BYE', 7.1, 14.0, 35.1, 6.1, 14.9, 6.8, 12.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.7, 18.0, 11.1, 7.8, 9.4, 13.0, 13.6, 15.2, 17.5, 8.7, 9.3, 14.6, 'BYE', 15.4, 9.8, 11.3, 13.8, 10.8, 10.4, 15.5, 18.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.4, 5.4, 6.3, 7.0, 6.6, 5.6, 4.2, 5.9, 5.3, 4.5, 5.5, 5.1, 'BYE', 5.9, 5.6, 5.6, 6.5, 5.5, 5.1, 6.1, 5.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(213, 10, 10, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.8, 22.8, 22.8, 22.3, 22.3, 22.3, 21.9, 21.9, 22.1, 21.5, 22.2, 21.1, 'BYE', 21.7, 21.3, 22.2, 21.3, 22.7, 21.4, 21.7, 21.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116406.png",
    "name": "Tyreek Hill",
    "depthchart": "Starter: WR-1",
    "team": "Kansas City Chiefs",
    "projected": 15.4,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "at ",
    "opp_rank_Neu": 21,
    "team_rank_Pos": 1,
    "avg_fp2": 19.03,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 31.11,
    "fanduelSalary": "$15600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Tyreek Hill caught 9-of-11 targets for 172 yards in the Chiefs' AFC Championship win over the Bills.\n",
    "report": "",
    "analysis": "His longest gain went for 71 yards when Hill caught one close to the line of scrimmage in the second half and started weaving in and out of the Buffalo secondary down inside the 10-yard line before Travis Kelce capped it off with one of his two touchdowns. The only thing missing for Hill was a score. He and Kelce combined for 26 targets on 38 Patrick Mahomes passes. Hill gets a date with the Bucs in the Super Bowl. Hill went 13-269-3 against Tampa Bay in Week 12, going over 200 yards in the opening quarter.\n",
    "timestamp": "2021-01-25 03:25 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 13.1,
    "week02": 19.3,
    "week03": 18.7,
    "week04": 14.4,
    "week05": 16.8,
    "week06": 4.0,
    "week07": 14.5,
    "week08": 23.8,
    "week09": 28.6,
    "week10": "BYE",
    "week11": 21.5,
    "week12": 51.4,
    "week13": 11.8,
    "week14": 24.6,
    "week15": 14.4,
    "week16": 8.5,
    "week17": "DNP",
    "week18": "DNP",
    "week19": 15.9,
    "week20": 21.7,
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20', 'Week 21'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [13.1, 19.3, 18.7, 14.4, 16.8, 4.0, 14.5, 23.8, 28.6, 'BYE', 21.5, 51.4, 11.8, 24.6, 14.4, 8.5, 'DNP', 'DNP', 15.9, 21.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [20.0, 12.7, 13.6, 20.1, 13.0, 13.3, 10.4, 13.8, 12.2, 'BYE', 14.4, 20.8, 16.6, 16.5, 17.0, 18.0, 'DNP', 'DNP', 15.1, 15.2, 15.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.1, 5.0, 5.3, 8.4, 4.3, 5.1, 6.6, 6.7, 4.5, 'BYE', 4.4, 6.0, 5.9, 6.6, 6.1, 5.1, 'DNP', 'DNP', 7.3, 6.0, 6.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.5, 20.8, 24.3, 24.8, 23.3, 21.3, 23.5, 23.3, 21.3, 'BYE', 21.5, 23.9, 24.2, 24.1, 26.2, 23.7, 'DNP', 'DNP', 24.5, 21.5, 22.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13934.png",
    "name": "Antonio Brown",
    "depthchart": "Backup: WR-2",
    "team": "Tampa Bay Buccaneers",
    "projected": 14.7,
    "opponent": "Kansas City Chiefs",
    "home_away": "",
    "opp_rank_Neu": 14,
    "team_rank_Pos": 3,
    "avg_fp2": 11.82,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 25.16,
    "fanduelSalary": "$9300",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Knee",
    "tmColorLite": "#D50A0A",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(213, 10, 10, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#D50A0A",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Antonio Brown (knee) is\u00a0doubtful for Super Bowl LV.\n",
    "report": "",
    "analysis": "For what it's worth, designations from the first\u00a0injury report before players return for media week can change ahead of the Super Bowl. In short, it's still possible Brown is listed as 'questionable' or perhaps cleared altogether with a full nine days to go until kick-off. There's still a chance he's able to practice before the big game.\n",
    "timestamp": "2021-01-30 04:24 PM",
    "source": "Rick Stroud on Twitter",
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
    "week18": 14.1,
    "week19": 1.5,
    "week20": "DNP",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20', 'Week 21'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 4.6, 10.1, 9.8, 2.1, 'BYE', 7.4, 17.8, 11.5, 31.3, 14.1, 1.5, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 16.4, 5.6, 7.1, 10.7, 'BYE', 9.6, 5.5, 7.4, 10.2, 8.1, 8.0, 'DNP', 14.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 4.7, 0.0, 5.2, 3.2, 'BYE', 4.1, 0.0, 0.3, 7.9, 5.2, 16.2, 'DNP', 3.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(213, 10, 10, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 17.9, 13.6, 17.1, 16.7, 'BYE', 20.4, 14.6, 24.6, 18.7, 19.4, 27.6, 'DNP', 18.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116165.png",
    "name": "Chris Godwin",
    "depthchart": "Reserve: WR-3",
    "team": "Tampa Bay Buccaneers",
    "projected": 9.7,
    "opponent": "Kansas City Chiefs",
    "home_away": "",
    "opp_rank_Neu": 14,
    "team_rank_Pos": 3,
    "avg_fp2": 13.21,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 25.16,
    "fanduelSalary": "$13200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#D50A0A",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(213, 10, 10, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#D50A0A",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Ravens general manager Eric DeCosta said he was happy with how the team's wideouts played in 2020.\u00a0\n",
    "report": "",
    "analysis": "In a wide-ranging interview with reporters Monday morning, DeCosta said he's not singularly focused on bolstering the receiver position this offseason. \u201cWe have a running attack that\u2019s the best in football and probably the best in the history of football,\" DeCosta said when asked about adding pieces to a Baltimore passing offense that struggled throughout 2020. DeCosta said he was \"very happy\" with rookie wideouts Devin Duvernay and James Proche, and called Marquise Brown a \"legitimate playmaker.\" \"Everybody is going to talk about WRs a lot this offseason, but it doesn't sound like [DeCosta]\u00a0envisions some silver bullet 'fix'\u00a0there,\" Ryan Mink, the team's editorial director, said on Twitter. The Ravens would figure to be in the running to sign free agent wideouts like Kenny Golladay, Chris Godwin, and Allen Robinson, but it sounds like DeCosta isn't committed to pouring resources into the team's passing attack. Any free agent receiver addition would be an iffy bet for fantasy purposes in the Ravens' low-volume passing offense.\u00a0\n",
    "timestamp": "2021-01-25 04:27 PM",
    "source": "Ryan Mink on Twitter ",
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
    "week18": 16.4,
    "week19": 5.4,
    "week20": 14.1,
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20', 'Week 21'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.9, 'DNP', 14.9, 'DNP', 'DNP', 7.3, 19.3, 'DNP', 5.6, 12.2, 14.8, 13.7, 'BYE', 3.5, 11.6, 16.9, 27.8, 16.4, 5.4, 14.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.7, 'DNP', 5.0, 'DNP', 'DNP', 8.9, 8.7, 'DNP', 11.6, 2.8, 5.9, 8.2, 'BYE', 7.0, 4.9, 6.1, 8.7, 6.6, 6.5, 10.4, 9.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.3, 'DNP', 2.6, 'DNP', 'DNP', 8.3, 1.4, 'DNP', 6.3, 0.5, 2.1, 3.7, 'BYE', 4.6, 2.6, 4.6, 3.0, 4.1, 2.9, 2.3, 5.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(213, 10, 10, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.6, 'DNP', 20.4, 'DNP', 'DNP', 26.1, 20.3, 'DNP', 22.8, 20.4, 20.1, 18.4, 'BYE', 19.1, 19.9, 17.3, 14.8, 20.1, 19.6, 18.5, 20.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16725.png",
    "name": "Sammy Watkins",
    "depthchart": "Backup: WR-2",
    "team": "Kansas City Chiefs",
    "projected": 8.1,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "at ",
    "opp_rank_Neu": 21,
    "team_rank_Pos": 1,
    "avg_fp2": 6.99,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 31.11,
    "fanduelSalary": "$6300",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Calf",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Sammy Watkins (calf) is expected to play in the Super Bowl against the Bucs.\u00a0\n",
    "report": "",
    "analysis": "Watkins at full strength would remove almost all fantasy relevance from Byron Pringle and Demarcus Robinson, who have seen expanded snaps in Watkins' absence. Pringle commanded seven targets on 49 pass routes over the Chiefs' two postseason games, while Robinson saw two targets on 60 routes. Mecole Hardman's opportunity hasn't fluctuated all that much with Watkins in the KC lineup; the speedster will be a volatile fantasy option in the Super Bowl whether or not Watkins suits up.\u00a0\n",
    "timestamp": "2021-01-26 05:40 PM",
    "source": "ESPN.com ",
    "game_day_logo": "",
    "week01": 18.0,
    "week02": 1.6,
    "week03": 9.7,
    "week04": 4.3,
    "week05": 9.4,
    "week06": "DNP",
    "week07": "DNP",
    "week08": "DNP",
    "week09": "DNP",
    "week10": "BYE",
    "week11": "DNP",
    "week12": 5.8,
    "week13": 5.5,
    "week14": 6.2,
    "week15": 8.0,
    "week16": 1.4,
    "week17": "DNP",
    "week18": "DNP",
    "week19": "DNP",
    "week20": "DNP",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20', 'Week 21'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [18.0, 1.6, 9.7, 4.3, 9.4, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 5.8, 5.5, 6.2, 8.0, 1.4, 'DNP', 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.9, 7.6, 7.8, 9.6, 6.4, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 12.3, 9.6, 10.4, 6.1, 7.6, 'DNP', 'DNP', 'DNP', 'DNP', 8.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.5, 4.1, 4.6, 3.8, 2.7, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 2.4, 3.5, 2.6, 4.0, 1.5, 'DNP', 'DNP', 'DNP', 'DNP', 1.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.2, 21.1, 20.1, 18.8, 19.6, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 17.9, 19.7, 17.5, 20.8, 18.4, 'DNP', 'DNP', 'DNP', 'DNP', 17.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4035004.png",
    "name": "Mecole Hardman",
    "depthchart": "Reserve: WR-3",
    "team": "Kansas City Chiefs",
    "projected": 5.4,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "at ",
    "opp_rank_Neu": 21,
    "team_rank_Pos": 1,
    "avg_fp2": 6.73,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 31.11,
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
    "headlineNews": "Sammy Watkins (calf) is expected to play in the Super Bowl against the Bucs.\u00a0\n",
    "report": "",
    "analysis": "Watkins at full strength would remove almost all fantasy relevance from Byron Pringle and Demarcus Robinson, who have seen expanded snaps in Watkins' absence. Pringle commanded seven targets on 49 pass routes over the Chiefs' two postseason games, while Robinson saw two targets on 60 routes. Mecole Hardman's opportunity hasn't fluctuated all that much with Watkins in the KC lineup; the speedster will be a volatile fantasy option in the Super Bowl whether or not Watkins suits up.\u00a0\n",
    "timestamp": "2021-01-26 05:40 PM",
    "source": "ESPN.com ",
    "game_day_logo": "",
    "week01": 1.1,
    "week02": 6.3,
    "week03": 16.1,
    "week04": 10.7,
    "week05": 6.0,
    "week06": 0.0,
    "week07": 8.0,
    "week08": 19.1,
    "week09": 6.3,
    "week10": "BYE",
    "week11": 2.1,
    "week12": 3.8,
    "week13": 2.0,
    "week14": 9.5,
    "week15": 9.2,
    "week16": 5.9,
    "week17": 1.5,
    "week18": "DNP",
    "week19": 8.2,
    "week20": 10.4,
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20', 'Week 21'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.1, 6.3, 16.1, 10.7, 6.0, 0.0, 8.0, 19.1, 6.3, 'BYE', 2.1, 3.8, 2.0, 9.5, 9.2, 5.9, 1.5, 'DNP', 8.2, 10.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.7, -2.5, 3.6, 4.6, 5.5, 6.4, 2.9, 8.6, 7.7, 'BYE', 5.6, 5.7, 4.1, 3.3, 2.7, 1.8, 6.3, 'DNP', 6.7, 5.1, 5.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 6.2, 0.0, 0.0, 1.6, 2.4, 1.7, 0.0, 1.7, 'BYE', 0.9, 0.0, 1.9, 0.0, 0.7, 1.1, 1.6, 'DNP', 0.0, 2.3, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.5, 14.9, 11.4, 8.9, 12.8, 10.4, 12.6, 9.7, 12.3, 'BYE', 10.7, 10.1, 9.9, 12.6, 11.6, 11.5, 11.6, 'DNP', 10.5, 13.6, 10.4]
                    }
                    
                    ]
               }
            }];



$scope.positionTE = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15847.png",
    "name": "Travis Kelce",
    "depthchart": "Starter: TE-1",
    "team": "Kansas City Chiefs",
    "projected": 21.8,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "at ",
    "opp_rank_Neu": 21,
    "team_rank_Pos": 1,
    "avg_fp2": 17.35,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 11.2,
    "fanduelSalary": "$16500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Travis Kelce caught 13-of-15 targets for 118 yards and two touchdowns in the Chiefs' AFC Championship win over the Bills.\n",
    "report": "",
    "analysis": "Kelce was targeted on 39.5% of Patrick Mahomes' 38 attempts in this one and caught the quarterback's second and third scores of the night, producing one- and five-yard touchdowns. The first was an underhand flip from Mahomes at the goal line and the second a wide-open lob to the tight end in the end zone. Kelce's 15 targets were his most in a game this season, and this was his eighth 100-yard game of the year. Kelce has now scored in six straight games and gets a date with the Bucs in the Super Bowl. When these teams met in Week 12, Kelce caught all eight of his targets for 82 scoreless yards.\n",
    "timestamp": "2021-01-25 03:52 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 14.0,
    "week02": 19.5,
    "week03": 11.7,
    "week04": 8.5,
    "week05": 20.8,
    "week06": 19.0,
    "week07": 4.6,
    "week08": 20.9,
    "week09": 20.9,
    "week10": "BYE",
    "week11": 22.86,
    "week12": 12.2,
    "week13": 23.6,
    "week14": 23.6,
    "week15": 18.8,
    "week16": 19.3,
    "week17": "DNP",
    "week18": "DNP",
    "week19": 20.9,
    "week20": 30.3,
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20', 'Week 21'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.0, 19.5, 11.7, 8.5, 20.8, 19.0, 4.6, 20.9, 20.9, 'BYE', 22.86, 12.2, 23.6, 23.6, 18.8, 19.3, 'DNP', 'DNP', 20.9, 30.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.9, 10.8, 16.9, 11.5, 16.5, 19.3, 14.7, 13.2, 16.5, 'BYE', 11.8, 12.5, 14.4, 15.4, 15.3, 21.5, 'DNP', 'DNP', 16.1, 15.3, 21.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.0, 5.3, 5.2, 6.5, 11.4, 4.8, 3.8, 5.3, 7.0, 'BYE', 5.2, 5.5, 6.6, 5.6, 6.4, 5.6, 'DNP', 'DNP', 10.1, 7.1, 4.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.2, 18.9, 19.7, 20.3, 25.4, 18.8, 19.4, 18.9, 20.5, 'BYE', 19.2, 19.3, 20.1, 19.6, 20.0, 19.3, 'DNP', 'DNP', 21.5, 18.9, 19.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13229.png",
    "name": "Rob Gronkowski",
    "depthchart": "Starter: TE-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 17.4,
    "opponent": "Kansas City Chiefs",
    "home_away": "",
    "opp_rank_Neu": 14,
    "team_rank_Pos": 3,
    "avg_fp2": 7.93,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 11.84,
    "fanduelSalary": "$4500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#D50A0A",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(213, 10, 10, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#D50A0A",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Rob Gronkowski caught a 29-yard pass in the Bucs' NFC Championship Game win over the Packers.\u00a0\n",
    "report": "",
    "analysis": "Gronkowski's 29-yard gain on a fourth quarter tight end screen was his lone target. Being asked to bang about as a blocker this postseason, Gronk has taken a pass-catching backseat to Cameron Brate. Gronk will be more name than game as a Super Bowl DFS play.\n",
    "timestamp": "2021-01-25 01:24 AM",
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
    "week18": 0.0,
    "week19": 1.9,
    "week20": 3.4,
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20', 'Week 21'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.1, 0.0, 7.8, 3.4, 6.7, 16.3, 14.7, 12.1, 0.7, 12.1, 3.5, 13.6, 'BYE', 6.7, 4.4, 18.8, 3.9, 0.0, 1.9, 3.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.7, 10.4, 12.7, 9.4, 10.3, 16.0, 18.5, 17.6, 13.9, 17.8, 15.9, 13.6, 'BYE', 15.5, 15.0, 14.3, 13.8, 9.8, 14.2, 10.4, 17.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.7, 4.3, 3.9, 3.6, 4.7, 3.3, 4.1, 4.1, 2.3, 3.6, 3.7, 4.4, 'BYE', 4.5, 4.1, 3.9, 3.2, 3.0, 3.6, 4.7, 4.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(213, 10, 10, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [22.6, 20.7, 20.9, 20.8, 18.0, 20.5, 21.1, 20.2, 17.1, 21.4, 19.5, 21.1, 'BYE', 21.7, 23.3, 21.9, 21.7, 22.0, 19.6, 22.2, 21.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/17453.png",
    "name": "Cameron Brate",
    "depthchart": "Backup: TE-2",
    "team": "Tampa Bay Buccaneers",
    "projected": 5.2,
    "opponent": "Kansas City Chiefs",
    "home_away": "",
    "opp_rank_Neu": 14,
    "team_rank_Pos": 3,
    "avg_fp2": 3.39,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 11.84,
    "fanduelSalary": "$7200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#D50A0A",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(213, 10, 10, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#D50A0A",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Cameron Brate caught 3-of-5 targets for 19 yards and a touchdown in the Bucs' NFC Championship Game victory over the Packers.\u00a0\n",
    "report": "",
    "analysis": "Brate has out-caught Rob Gronkowski 11-2 this postseason. He is the pass-catching option right now with Gronk cleaning up as a blocker. Brate will still be no higher than fourth on the targets totem pole for Super Bowl LV, and will probably be fifth or sixth.\u00a0\n",
    "timestamp": "2021-01-25 01:30 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 0.0,
    "week02": 0.0,
    "week03": "DNP",
    "week04": "DNP",
    "week05": 6.9,
    "week06": 0.8,
    "week07": 1.3,
    "week08": 4.5,
    "week09": 0.0,
    "week10": 10.6,
    "week11": 3.8,
    "week12": 5.4,
    "week13": "BYE",
    "week14": 1.4,
    "week15": 7.4,
    "week16": 3.7,
    "week17": 1.6,
    "week18": 10.0,
    "week19": 7.0,
    "week20": 9.4,
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20', 'Week 21'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 0.0, 'DNP', 'DNP', 6.9, 0.8, 1.3, 4.5, 0.0, 10.6, 3.8, 5.4, 'BYE', 1.4, 7.4, 3.7, 1.6, 10.0, 7.0, 9.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.0, -0.6, 'DNP', 'DNP', 0.7, 2.3, 3.2, 3.5, 3.6, 3.6, 4.9, 3.4, 'BYE', 2.5, 2.1, 1.6, 4.0, 1.1, 2.7, 2.0, 5.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.9, 0.9, 'DNP', 'DNP', 0.1, 0.8, 0.3, 0.7, 0.5, 0.6, 0.8, 0.1, 'BYE', 0.7, 0.9, 0.8, 0.7, 1.0, 0.0, 0.3, 0.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(213, 10, 10, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.0, 11.5, 'DNP', 'DNP', 10.8, 10.1, 10.5, 10.6, 10.8, 12.8, 11.8, 11.4, 'BYE', 10.8, 10.2, 10.9, 10.1, 11.5, 10.2, 10.6, 10.3]
                    }
                    
                    ]
               }
            }];



$scope.positionDST = [{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/TB.png",
    "name": "Tampa Bay Buccaneers",
    "depthchart": "",
    "team": "Tampa Bay Buccaneers",
    "projected": 7.7,
    "opponent": "Kansas City Chiefs",
    "opp_rank_pts": 6,
    "opp_avg_pts": 29.56,
    "home_away": "",
    "team_rank_allowed_pts": 8,
    "team_avg_allowed_pts": 22.19,
    "team_ranked_takeaways": 15,
    "team_avg_takeaways": 1.31,
    "opp_ranked_giveaways": 24,
    "opp_avg_giveaways": 1.56,
    "fanduelSalary": "$4200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#D50A0A",
    "tmColorDark": "#000000",
    "tmTextLite": "#D50A0A",
    "tmColorLite_rgba": "rgba(213, 10, 10, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Buccaneers declared SS Antoine Winfield, QB Ryan Griffin, RB Ke'Shawn Vaughn, WR Antonio Brown, TE Anthony Auclair, DL Jeremiah Ledbetter, and DL Khalil David inactive for their Conference Championship game against the Packers.\n",
    "report": "",
    "analysis": "Winfield has been a playmaker for the Tampa Bay defense throughout his rookie season and the Bucs will certainly feel his absence versus a blistering Green Bay offense. He racked up 12 total tackles and a forced fumble in two playoffs games this year. Vaughn's absence means LeSean McCoy will be brought as the team's second pass-catching back. Expect to see a combination of Scott Miller and Tyler Johnson with Brown sidelined.\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 7.32,
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
    "week18": 4.0,
    "week19": 9.0,
    "week20": 9.0,
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20', 'Week 21'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 14.0, 16.0, 6.0, 6.0, 19.0, 6.0, 7.0, 1.0, 5.0, 4.0, 4.0, 'BYE', 9.0, 3.0, 12.0, 5.0, 4.0, 9.0, 9.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.1, 7.2, 6.7, 8.3, 7.8, 5.2, 6.5, 9.1, 5.3, 7.6, 8.0, 6.7, 'BYE', 6.5, 6.2, 6.4, 7.1, 9.6, 5.8, 4.6, 7.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.4, 1.2, 1.0, 1.9, 1.5, 1.2, 0.7, 2.3, 1.8, 1.0, 1.0, 1.2, 'BYE', 1.0, 1.4, 0.1, 0.8, 0.8, 0.0, 1.5, 0.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(213, 10, 10, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.0, 15.0, 14.4, 15.6, 15.0, 14.8, 14.7, 15.6, 15.8, 14.5, 15.2, 14.7, 'BYE', 14.9, 14.5, 15.4, 14.1, 14.6, 14.9, 14.2, 14.9]
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
    "opponent": "Tampa Bay Buccaneers",
    "opp_rank_pts": 3,
    "opp_avg_pts": 30.75,
    "home_away": "at ",
    "team_rank_allowed_pts": 9,
    "team_avg_allowed_pts": 22.25,
    "team_ranked_takeaways": 30,
    "team_avg_takeaways": 0.81,
    "opp_ranked_giveaways": 16,
    "opp_avg_giveaways": 1.25,
    "fanduelSalary": "$3900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmTextLite": "#FFB81C",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Chiefs CB\u00a0Bashaud Breeland was forced from Sunday's Divisional Round win over the Browns with a concussion.\u00a0\n",
    "report": "",
    "analysis": "Once again an every-down player this season, Breeland has one week to get cleared for the AFC Championship Game against the Bills. It's a position where the Chiefs actually have a little depth, but it would still be a big loss against an imposing Bills passing attack.\u00a0\n",
    "timestamp": "",
    "source": "Nate Taylor on Twitter ",
    "game_day_logo": "",
    "avg_fp2": 6.33,
    "week01": 7.0,
    "week02": 5.0,
    "week03": 7.0,
    "week04": 14.0,
    "week05": -1.0,
    "week06": 5.0,
    "week07": 24.0,
    "week08": 9.0,
    "week09": 1.0,
    "week10": "BYE",
    "week11": 1.0,
    "week12": 5.0,
    "week13": 5.0,
    "week14": 14.0,
    "week15": 2.0,
    "week16": 7.0,
    "week17": -1.0,
    "week18": "DNP",
    "week19": 4.0,
    "week20": 6.0,
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20', 'Week 21'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.0, 5.0, 7.0, 14.0, -1.0, 5.0, 24.0, 9.0, 1.0, 'BYE', 1.0, 5.0, 5.0, 14.0, 2.0, 7.0, -1.0, 'DNP', 4.0, 6.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.0, 5.0, 5.9, 4.6, 7.6, 4.1, 6.6, 8.1, 6.6, 'BYE', 6.0, 5.7, 6.7, 6.5, 5.1, 5.8, 7.0, 'DNP', 6.3, 6.1, 6.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.0, 1.4, 1.0, 0.3, 1.5, 0.8, 0.0, 0.6, 1.4, 'BYE', 0.3, 0.2, 0.9, 0.9, 0.2, 0.6, 0.6, 'DNP', 0.7, 0.9, 0.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.4, 13.8, 13.1, 13.9, 14.7, 13.2, 13.5, 14.1, 14.0, 'BYE', 13.1, 14.5, 14.0, 13.0, 13.0, 13.8, 13.8, 'DNP', 13.6, 13.0, 13.4]
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