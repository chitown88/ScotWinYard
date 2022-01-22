var App = angular.module('footballApp', ['tc.chartjs']);

App.controller('positionController', function($scope, $http) {

  //JSON data for position and players

/*********************** PASTE AFTER HERE ************************/

$scope.currentDate = {"currentDate": "Saturday, 22 January 2022 11:31 AM (central time)"};
$scope.week = {"nflWeek": "Divisional Round"};
$scope.playoffLogo = {"src": "https://iconape.com/wp-content/png_logo_vector/nfl-afc-divisional-logo.png"}

$scope.qbStartSit = {"one": "---", "two": "---", "three": "---", "four": "---", "five": "---", "six": "---", "seven": "---", "eight": "---", "nine": "---", "ten": "---"};
$scope.rbStartSit = {"one": "---", "two": "---", "three": "---", "four": "---", "five": "---", "six": "---", "seven": "---", "eight": "---", "nine": "---", "ten": "---"};
$scope.wrStartSit = {"one": "---", "two": "---", "three": "---", "four": "---", "five": "---", "six": "---", "seven": "---", "eight": "---", "nine": "---", "ten": "---"};
$scope.teStartSit = {"one": "---", "two": "---", "three": "---", "four": "---", "five": "---", "six": "---", "seven": "---", "eight": "---", "nine": "---", "ten": "---"};
$scope.kStartSit = {"one": "---", "two": "---", "three": "---", "four": "---", "five": "---", "six": "---", "seven": "---", "eight": "---", "nine": "---", "ten": "---"};
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
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3918298.png",
    "name": "Josh Allen",
    "depthchart": "Starter: QB-1",
    "team": "Buffalo Bills",
    "projected": 21.8,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Pos": 28,
    "team_rank_Neu": 10,
    "avg_fp2": 24.61,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 20.29,
    "fanduelSalary": "$8800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#005596",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 85, 150, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
    "headlineNews": "Josh Allen completed 21-of-25 passes for 308 yards and five touchdowns in the Bills' 47-17, Wild Card Round win over the Patriots, adding six carries for 66 additional yards.\u00a0\n",
    "report": "",
    "analysis": "Excluding the end-of-game kneeldowns, the Bills scored touchdowns on all seven of their possessions, running the Patriots out of the building as they prepare for a likely Divisional Round showdown with the Chiefs. It was one of the best offensive performances in postseason history, with Allen becoming the first-ever playoff quarterback to post 300-plus passing yards, five-plus aerial scores and 60-plus yards rushing. The Pats had zero answer for a quarterback bowling over defenders like Cam Newton on the ground and shooting lasers through the air. It was the kind of dual-threat masterpiece the Bills will need every round as they eye their first AFC championship since 1993.\u00a0\n",
    "timestamp": "2022-01-16 04:14 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 17.2,
    "week02": 17.66,
    "week03": 37.22,
    "week04": 21.02,
    "week05": 36.5,
    "week06": 29.72,
    "week07": "BYE",
    "week08": 29.46,
    "week09": 11.56,
    "week10": 21.94,
    "week11": 18.16,
    "week12": 28.7,
    "week13": 11.7,
    "week14": 36.22,
    "week15": 21.8,
    "week16": 30.96,
    "week17": 23.9,
    "week18": 23.86,
    "week19": 38.92,
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [17.2, 17.66, 37.22, 21.02, 36.5, 29.72, 'BYE', 29.46, 11.56, 21.94, 18.16, 28.7, 11.7, 36.22, 21.8, 30.96, 23.9, 23.86, 38.92]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [19.1, 16.4, 20.0, 19.4, 23.0, 24.1, 'BYE', 25.9, 25.6, 22.0, 24.4, 21.0, 18.7, 21.1, 18.9, 14.5, 22.9, 18.2, 21.2, 21.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [13.6, 11.4, 20.9, 24.1, 27.7, 22.1, 'BYE', 22.7, 28.0, 25.1, 17.8, 22.6, 12.9, 7.4, 14.5, 16.1, 17.9, 22.1, 15.2, 19.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [30.7, 30.3, 24.4, 33.3, 34.3, 28.8, 'BYE', 29.7, 35.2, 32.7, 29.4, 30.8, 25.0, 18.2, 21.9, 22.4, 28.3, 31.0, 24.9, 25.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/8439.png",
    "name": "Aaron Rodgers",
    "depthchart": "Starter: QB-1",
    "team": "Green Bay Packers",
    "projected": 19.7,
    "opponent": "San Francisco 49ers",
    "home_away": "",
    "opp_rank_Neg": 5,
    "team_rank_Neu": 9,
    "avg_fp2": 21.51,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 17.77,
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
    "headlineNews": "NFL Network's Ian Rapoport reports the Steelers are \"highly unlikely\" to trade for Aaron Rodgers or Russell Wilson this offseason.\n",
    "report": "",
    "analysis": "With\u00a0Ben Roethlisberger retiring, the Steelers are a potential landing spot for a veteran quarterback, but selling the future for one isn't expected to happen, according to Rapoport. Steelers GM\u00a0Kevin Colbert rarely trades first-round picks, though it's fair to question how much say\u00a0Colbert, who's expected to retire following April's draft, will have in the decision. With a draft position that could end up outside the top-20 picks and only Mason Rudolph and restricted free agent Dwayne Haskins behind\u00a0Roethlisberger, the Steelers are more likely to move up in the draft\u00a0or hope a quarterback like Pittsburgh's Kenny Pickett falls to them than trade for a veteran.\n",
    "timestamp": "2022-01-16 04:13 PM",
    "source": "NFL Network",
    "game_day_logo": "",
    "week01": 3.32,
    "week02": 26.8,
    "week03": 18.54,
    "week04": 24.12,
    "week05": 20.76,
    "week06": 23.7,
    "week07": 24.66,
    "week08": 15.66,
    "week09": "DNP",
    "week10": 11.48,
    "week11": 33.5,
    "week12": 26.28,
    "week13": "BYE",
    "week14": 29.64,
    "week15": 23.82,
    "week16": 19.98,
    "week17": 20.32,
    "week18": 14.22,
    "week19": "DNP",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.32, 26.8, 18.54, 24.12, 20.76, 23.7, 24.66, 15.66, 'DNP', 11.48, 33.5, 26.28, 'BYE', 29.64, 23.82, 19.98, 20.32, 14.22, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.5, 15.5, 16.0, 14.5, 16.6, 14.5, 17.9, 16.6, 'DNP', 18.4, 15.3, 16.6, 'BYE', 19.6, 18.3, 20.7, 20.2, 20.1, 'DNP', 19.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [11.6, 15.5, 22.0, 24.3, 17.3, 16.4, 26.2, 13.5, 'DNP', 19.1, 16.7, 17.8, 'BYE', 17.7, 16.5, 15.4, 17.5, 16.3, 'DNP', 13.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [29.3, 28.3, 29.2, 28.6, 22.2, 25.8, 31.5, 23.9, 'DNP', 26.2, 28.5, 25.9, 'BYE', 26.0, 28.9, 25.4, 28.1, 25.1, 'DNP', 27.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2330.png",
    "name": "Tom Brady",
    "depthchart": "Starter: QB-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 18.5,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank_Neu": 20,
    "team_rank_Pos": 1,
    "avg_fp2": 22.61,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 16.43,
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
    "headlineNews": "Tom Brady completed 29-of-37 passes for 271 yards and two touchdowns in Tampa's 31-15 Wild Card win over Philadelphia.\n",
    "report": "",
    "analysis": "Brady had 159 passing yards before halftime and piled on with a 36-yard touchdown to Mike Evans to go up 31-0. He did take four sacks with Tristan Wirfs (ankle) and Ryan Jensen dealing with injuries. Those injuries are slightly concerning for next week. The Bucs will have a second home game against either the Cowboys or the survivor of the NFC West MNF matchup.\n",
    "timestamp": "2022-01-16 10:03 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 29.16,
    "week02": 29.64,
    "week03": 28.68,
    "week04": 11.06,
    "week05": 37.74,
    "week06": 18.98,
    "week07": 24.44,
    "week08": 27.2,
    "week09": "BYE",
    "week10": 15.0,
    "week11": 20.28,
    "week12": 12.24,
    "week13": 29.62,
    "week14": 30.12,
    "week15": 5.76,
    "week16": 14.38,
    "week17": 27.4,
    "week18": 25.04,
    "week19": 18.84,
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(163, 29, 47, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [29.16, 29.64, 28.68, 11.06, 37.74, 18.98, 24.44, 27.2, 'BYE', 15.0, 20.28, 12.24, 29.62, 30.12, 5.76, 14.38, 27.4, 25.04, 18.84]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [19.4, 23.1, 19.5, 19.0, 21.0, 21.1, 22.3, 20.8, 'BYE', 24.8, 22.1, 21.3, 21.6, 18.7, 21.9, 17.1, 21.2, 18.5, 18.4, 18.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [10.5, 9.6, 12.1, 10.4, 13.4, 16.6, 17.8, 18.2, 'BYE', 19.2, 15.4, 18.9, 12.9, 9.8, 16.6, 8.7, 17.4, 11.2, 12.4, 11.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(163, 29, 47, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [27.8, 27.5, 19.8, 19.2, 20.7, 26.4, 24.8, 27.8, 'BYE', 27.7, 25.9, 29.5, 25.0, 18.7, 25.2, 18.6, 27.2, 21.9, 22.6, 22.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3915511.png",
    "name": "Joe Burrow",
    "depthchart": "Starter: QB-1",
    "team": "Cincinnati Bengals",
    "projected": 18.2,
    "opponent": "Tennessee Titans",
    "home_away": "at ",
    "opp_rank_Neu": 23,
    "team_rank_Neu": 7,
    "avg_fp2": 20.52,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 17.95,
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
    "headlineNews": "Joe Burrow completed 24-of-34 attempts for 244 yards and two touchdowns in the Bengals' Super Wild Card Weekend win against the Raiders.\n",
    "report": "",
    "analysis": "Burrow led a shaky, indecisive Cincinnati offense with head coach Zac Taylor making several questionable calls in the second half. Clearly terrified of losing, the Bengals eked it out against an inferior opponent. Burrow leading the franchise to their first postseason victory in 31 years is a tremendous achievement, however inevitable. He once and keyed on Ja'Marr Chase in this one, looking nowhere else for large swaths of the first half. Displaying his otherworldly pocket presence, Burrow -- one year removed from an ACL tear -- snuck out of a few would-be sacks and made a highlight touchdown throw to Tyler Boyd as he faded out of bounds. He also connected with C.J. Uzomah for a score. The Bengals will need to be far more aggressive on offense if they have any desire to advance beyond the Divisional Round.\u00a0\n",
    "timestamp": "2022-01-16 12:56 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 18.64,
    "week02": 13.28,
    "week03": 18.58,
    "week04": 22.32,
    "week05": 20.34,
    "week06": 23.84,
    "week07": 27.64,
    "week08": 21.26,
    "week09": 9.38,
    "week10": "BYE",
    "week11": 9.02,
    "week12": 17.4,
    "week13": 18.6,
    "week14": 22.22,
    "week15": 12.78,
    "week16": 38.1,
    "week17": 34.84,
    "week18": "DNP",
    "week19": 17.56,
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [18.64, 13.28, 18.58, 22.32, 20.34, 23.84, 27.64, 21.26, 9.38, 'BYE', 9.02, 17.4, 18.6, 22.22, 12.78, 38.1, 34.84, 'DNP', 17.56]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.5, 18.0, 16.4, 19.4, 20.8, 18.3, 19.8, 20.5, 21.5, 'BYE', 19.9, 18.2, 14.9, 18.4, 16.1, 19.6, 19.3, 'DNP', 19.2, 18.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.6, 9.8, 14.7, 13.2, 13.0, 11.7, 19.0, 11.5, 11.4, 'BYE', 10.0, 9.6, 11.0, 13.5, 8.8, 13.0, 12.1, 'DNP', 11.5, 15.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.0, 27.3, 15.2, 22.6, 21.7, 17.3, 26.9, 22.7, 21.4, 'BYE', 18.9, 16.8, 23.8, 23.0, 18.0, 22.2, 22.4, 'DNP', 26.0, 29.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/12483.png",
    "name": "Matthew Stafford",
    "depthchart": "Starter: QB-1",
    "team": "Los Angeles Rams",
    "projected": 17.6,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "at ",
    "opp_rank_Neu": 22,
    "team_rank_Pos": 5,
    "avg_fp2": 20.45,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 18.46,
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
    "headlineNews": "Matthew Stafford completed 13-of-17 passes for 202 yards and two touchdowns in the Rams' 34-11, Wild Card win over the Cardinals Monday night, adding 22 rushing yards and a third touchdown on six attempts.\n",
    "report": "",
    "analysis": "Stafford's 17 pass attempts were easily his fewest of the season, but the Rams jumped out to a quick 21-0 lead after Stafford his Odell Beckham for a five-yard touchdown on third down and then QB-sneaked one in from the one-yard line before the L.A. defense picked Kyler Murray off inside his own five-yard line for an easy pick-six. The Rams were able to coast the rest of the way, but Stafford wasn't quite done, finding Cooper Kupp for a seven-yard score on the opening drive of the second half to go up 28-0. Three of Stafford's four incompletions were bad drops by Cam Akers, Tyler Higbee, and Kupp. When Stafford plays like this, it's hard to stop the Rams. He was legitimately flawless. The Rams will head to Tampa Bay for the Divisional Round next Sunday afternoon. When these teams met way back in Week 3 in Los Angeles, Stafford picked apart the Bucs for 343 yards and four touchdowns in a 34-24 win.\n",
    "timestamp": "2022-01-18 04:34 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 24.34,
    "week02": 18.22,
    "week03": 29.52,
    "week04": 20.3,
    "week05": 17.5,
    "week06": 26.24,
    "week07": 27.16,
    "week08": 24.2,
    "week09": 15.06,
    "week10": 11.82,
    "week11": "BYE",
    "week12": 22.98,
    "week13": 24.0,
    "week14": 23.48,
    "week15": 16.46,
    "week16": 9.68,
    "week17": 16.26,
    "week18": 19.52,
    "week19": 24.28,
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [24.34, 18.22, 29.52, 20.3, 17.5, 26.24, 27.16, 24.2, 15.06, 11.82, 'BYE', 22.98, 24.0, 23.48, 16.46, 9.68, 16.26, 19.52, 24.28]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.4, 19.6, 26.3, 22.1, 25.0, 21.1, 23.2, 22.1, 23.9, 20.6, 'BYE', 16.9, 21.1, 17.8, 22.3, 20.0, 20.4, 19.5, 20.0, 17.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [10.0, 12.8, 17.5, 12.4, 15.7, 14.2, 18.8, 16.1, 16.8, 13.5, 'BYE', 20.4, 16.3, 14.0, 18.5, 19.3, 16.1, 13.1, 16.8, 14.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [25.5, 23.2, 27.4, 22.6, 23.5, 24.7, 28.1, 26.4, 25.4, 25.9, 'BYE', 28.4, 25.8, 22.0, 25.2, 28.8, 26.8, 23.0, 26.0, 24.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3139477.png",
    "name": "Patrick Mahomes",
    "depthchart": "Starter: QB-1",
    "team": "Kansas City Chiefs",
    "projected": 17.0,
    "opponent": "Buffalo Bills",
    "home_away": "",
    "opp_rank_Neg": 1,
    "team_rank_Pos": 2,
    "avg_fp2": 21.78,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 12.53,
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
    "headlineNews": "Patrick Mahomes completed 30-of-39 passes for 404 yards, five touchdowns, and one interception in Kansas City's 42-21 Wild Card bludgeoning of the Steelers.\n",
    "report": "",
    "analysis": "Totaling a lifeless 64 yards through the first quarter and trailing 7-0 after T.J. Watt recovered a fumble and scored with 10:41 remaining in the first half, Mahomes flipped the switch and responded with his most passing yards ever in a playoff quarter (200), connecting with Jerick McKinnon, Byron Pringle, and Travis Kelce for touchdowns to close the half. The Chiefs eventually rattled off six consecutive possessions with a score as Mahomes became the first quarterback in NFL history to have 400-plus passing yards and five passing touchdowns in a postseason win. Kansas City will have to fire on all cylinders across four quarters to come out on top in their long-awaited rematch against the Bills in the Divisional Round.\n",
    "timestamp": "2022-01-17 04:18 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 33.28,
    "week02": 25.02,
    "week03": 24.9,
    "week04": 32.72,
    "week05": 20.98,
    "week06": 24.98,
    "week07": 8.74,
    "week08": 15.0,
    "week09": 10.44,
    "week10": 36.24,
    "week11": 8.5,
    "week12": "BYE",
    "week13": 13.56,
    "week14": 20.32,
    "week15": 30.6,
    "week16": 22.32,
    "week17": 20.86,
    "week18": 26.2,
    "week19": 38.06,
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [33.28, 25.02, 24.9, 32.72, 20.98, 24.98, 8.74, 15.0, 10.44, 36.24, 8.5, 'BYE', 13.56, 20.32, 30.6, 22.32, 20.86, 26.2, 38.06]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [19.4, 21.3, 19.6, 20.0, 18.2, 25.2, 24.1, 22.6, 21.5, 19.6, 22.2, 'BYE', 18.6, 18.8, 19.3, 20.2, 20.4, 18.6, 19.5, 17.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [16.6, 18.7, 14.4, 18.6, 20.3, 27.1, 22.3, 16.4, 17.1, 23.0, 21.0, 'BYE', 13.9, 15.4, 22.3, 14.8, 18.0, 18.1, 18.1, 15.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [32.3, 33.7, 24.9, 24.4, 29.4, 32.5, 31.5, 30.4, 26.3, 29.6, 32.7, 'BYE', 28.4, 26.5, 32.3, 26.6, 27.5, 24.1, 27.5, 23.9]
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
    "opponent": "Green Bay Packers",
    "home_away": "at ",
    "opp_rank_Neu": 9,
    "team_rank_Neu": 12,
    "avg_fp2": 16.05,
    "opp_rank_allowed_fp2_Pos": 24,
    "opp_avg_allowed_fp2": 18.62,
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
    "headlineNews": "Jimmy\u00a0Garoppolo (thumb, shoulder) does not have an injury designation for Saturday's Divisional Round game against the Packers.\u00a0\n",
    "report": "",
    "analysis": "\"Threw the ball great,\" coach Kyle Shanahan said of Garoppolo's practice week. \"He looked as good as he did the week before.\" Shanny said Garoppolo's thumb remains a bigger issue than his shoulder. Garoppolo's thumb has not been as big of an issue since he started taking pain-killing injections, though his typically shaky accuracy has not exactly gotten better. Shanahan's primary objective for his quarterback on Saturday will be ensuring he does not give the game away with bad turnovers.\u00a0\n",
    "timestamp": "2022-01-20 11:00 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 14.76,
    "week02": 19.56,
    "week03": 15.68,
    "week04": 9.6,
    "week05": "DNP",
    "week06": "BYE",
    "week07": 7.24,
    "week08": 27.28,
    "week09": 20.34,
    "week10": 15.38,
    "week11": 15.64,
    "week12": 12.2,
    "week13": 17.96,
    "week14": 20.14,
    "week15": 13.8,
    "week16": 15.18,
    "week17": "DNP",
    "week18": 14.74,
    "week19": 5.98,
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.76, 19.56, 15.68, 9.6, 'DNP', 'BYE', 7.24, 27.28, 20.34, 15.38, 15.64, 12.2, 17.96, 20.14, 13.8, 15.18, 'DNP', 14.74, 5.98]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.3, 15.8, 21.7, 19.4, 'DNP', 'BYE', 18.7, 14.5, 14.9, 17.6, 16.2, 19.2, 17.7, 16.2, 19.3, 16.7, 'DNP', 15.3, 16.3, 16.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [13.1, 4.6, 17.6, 13.4, 'DNP', 'BYE', 20.1, 10.3, 10.6, 9.3, 10.5, 13.5, 13.1, 14.0, 10.8, 14.1, 'DNP', 10.5, 9.5, 9.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [24.0, 18.5, 24.5, 18.9, 'DNP', 'BYE', 23.6, 13.2, 14.9, 17.1, 18.2, 18.6, 17.7, 19.3, 19.3, 20.1, 'DNP', 16.8, 15.5, 16.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14876.png",
    "name": "Ryan Tannehill",
    "depthchart": "Starter: QB-1",
    "team": "Tennessee Titans",
    "projected": 15.0,
    "opponent": "Cincinnati Bengals",
    "home_away": "",
    "opp_rank_Pos": 27,
    "team_rank_Neg": 27,
    "avg_fp2": 15.97,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 18.01,
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
    "headlineNews": "Ryan Tannehill completed 23-of-32 passes for 287 yards and four touchdowns in the Titans' Week 18 win over the Texans.\n",
    "report": "",
    "analysis": "Tannehill was prolific in the first half, throwing three touchdowns and nearly 200 yards. He had a quieter second half as the Texans' defense stiffened and Tennessee leaned on the run in an effort to drain the clock, but it was enough to get the job done and secure the top seed in the AFC for Tannehill and the Titans. Derrick Henry should return for the divisional round of the playoffs, allowing Tennesee to return to their vicious ground-and-pound style.\n",
    "timestamp": "2022-01-09 09:17 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 15.18,
    "week02": 14.58,
    "week03": 23.48,
    "week04": 18.82,
    "week05": 13.98,
    "week06": 13.94,
    "week07": 20.4,
    "week08": 23.2,
    "week09": 15.02,
    "week10": 18.62,
    "week11": 13.62,
    "week12": 9.12,
    "week13": "BYE",
    "week14": 16.54,
    "week15": 10.92,
    "week16": 14.56,
    "week17": 13.5,
    "week18": 27.28,
    "week19": "DNP",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [15.18, 14.58, 23.48, 18.82, 13.98, 13.94, 20.4, 23.2, 15.02, 18.62, 13.62, 9.12, 'BYE', 16.54, 10.92, 14.56, 13.5, 27.28, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.8, 12.3, 18.6, 16.1, 18.0, 15.2, 19.5, 18.2, 16.9, 16.0, 18.3, 14.3, 'BYE', 16.3, 15.8, 15.7, 14.3, 15.6, 'DNP', 15.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [8.5, 12.0, 11.5, 11.9, 16.7, 12.5, 13.3, 15.2, 19.6, 12.6, 24.0, 11.2, 'BYE', 14.0, 14.1, 13.7, 13.2, 13.9, 'DNP', 12.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [23.0, 21.4, 22.0, 20.6, 23.4, 18.6, 19.6, 19.9, 26.7, 18.3, 33.3, 18.0, 'BYE', 22.5, 23.0, 19.4, 22.2, 20.8, 'DNP', 21.1]
                    }
                    
                    ]
               }
            }];




$scope.positionRB = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3043078.png",
    "name": "Derrick Henry",
    "depthchart": "Starter: RB-1",
    "team": "Tennessee Titans",
    "projected": 20.1,
    "opponent": "Cincinnati Bengals",
    "home_away": "",
    "opp_rank_Neg": 5,
    "team_rank_Pos": 3,
    "avg_fp2": 23.04,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 20.4,
    "fanduelSalary": "$9000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#4495D1",
    "tmColorDark": "#002A5C",
    "tmColorLite_rgba": "rgba(68, 149, 209, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 92, 0.2)",
    "tmTextLite": "#4495D1",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png",
    "headlineNews": "NFL Network's Ian Rapoport reports Derrick Henry (foot) \"won't be on a snap count\" in Saturday's Divisional round game against the Bengals.\n",
    "report": "",
    "analysis": "The Titans have talked up Henry's conditioning, who is in \"top physical form\" after missing the last 11 weeks.\u00a0Henry will be playing with a\u00a0steel plate and five screws in his injured foot, making it hard to believe he'll be close to 100 percent. D'Onta Foreman should mix in as the No. 2 back, but the Titans are going to give Henry as many carries as he can handle. Henry has averaged over 100 yards per game and has three touchdowns in his six career playoff appearances.\n",
    "timestamp": "2022-01-22 03:29 PM",
    "source": "NFL Network",
    "game_day_logo": "",
    "week01": 9.2,
    "week02": 44.7,
    "week03": 17.9,
    "week04": 24.7,
    "week05": 31.0,
    "week06": 34.6,
    "week07": 15.4,
    "week08": 6.8,
    "week09": "DNP",
    "week10": "DNP",
    "week11": "DNP",
    "week12": "DNP",
    "week13": "BYE",
    "week14": "DNP",
    "week15": "DNP",
    "week16": "DNP",
    "week17": "DNP",
    "week18": "DNP",
    "week19": "DNP",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.2, 44.7, 17.9, 24.7, 31.0, 34.6, 15.4, 6.8, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.6, 13.6, 21.3, 21.5, 17.4, 18.4, 22.4, 18.1, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 20.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.1, 0.0, 15.4, 23.7, 18.9, 9.2, 25.7, 12.7, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 9.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [22.8, 15.8, 27.1, 30.6, 24.2, 21.6, 30.9, 23.2, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 17.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4242214.png",
    "name": "Clyde Edwards-Helaire",
    "depthchart": "Starter: RB-1",
    "team": "Kansas City Chiefs",
    "projected": 14.4,
    "opponent": "Buffalo Bills",
    "home_away": "",
    "opp_rank_Neu": 19,
    "team_rank_Neu": 16,
    "avg_fp2": 10.81,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 20.23,
    "fanduelSalary": "$5700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Clyde Edwards-Helaire (shoulder) will play in the Divisional Round against the Bills.\n",
    "report": "",
    "analysis": "Edwards-Helaire was a full participant in practice throughout the week and will be available on Sunday night against Buffalo. With Jerick McKinnon recently emerging for 142 total yards (including 106 yards after the catch) against Pittsburgh, Edwards-Helaire's role in the passing game is truly up in the air. The likeliest outcome is that McKinnon's receiving role sticks while CEH is used more on early downs and at the goal line. Both are in play for two/four-game DFS slates.\n",
    "timestamp": "2022-01-21 09:07 PM",
    "source": "Adam Teicher on Twitter",
    "game_day_logo": "",
    "week01": 8.7,
    "week02": 2.6,
    "week03": 15.9,
    "week04": 18.4,
    "week05": 2.9,
    "week06": "DNP",
    "week07": "DNP",
    "week08": "DNP",
    "week09": "DNP",
    "week10": "DNP",
    "week11": 14.6,
    "week12": "BYE",
    "week13": 9.7,
    "week14": 17.7,
    "week15": 8.0,
    "week16": 9.6,
    "week17": "DNP",
    "week18": "DNP",
    "week19": "DNP",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.7, 2.6, 15.9, 18.4, 2.9, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 14.6, 'BYE', 9.7, 17.7, 8.0, 9.6, 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.7, 13.4, 11.3, 11.8, 11.7, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 6.7, 'BYE', 13.7, 14.6, 14.2, 17.3, 'DNP', 'DNP', 'DNP', 14.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.3, 6.3, 7.4, 8.3, 8.8, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 6.2, 'BYE', 8.1, 7.0, 11.2, 10.0, 'DNP', 'DNP', 'DNP', 6.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.7, 15.4, 11.6, 17.5, 14.3, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 12.3, 'BYE', 11.9, 16.3, 16.1, 18.4, 'DNP', 'DNP', 'DNP', 14.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4241555.png",
    "name": "Elijah Mitchell",
    "depthchart": "Starter: RB-1",
    "team": "San Francisco 49ers",
    "projected": 14.2,
    "opponent": "Green Bay Packers",
    "home_away": "at ",
    "opp_rank_Neu": 14,
    "team_rank_Neu": 7,
    "avg_fp2": 14.7,
    "opp_rank_allowed_fp2_Neu": 9,
    "opp_avg_allowed_fp2": 18.63,
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
    "headlineNews": "Elijah Mitchell (knee) was left off the 49ers' final injury report for the Divisional Round against Green Bay.\u00a0\n",
    "report": "",
    "analysis": "There was never any doubt Mitchell was going to play. Mitchell has handled 20-plus carries in each of his past six appearances going back to mid-November. He will be an offensive focal point against a Packers defense that is vulnerable on the ground.\u00a0\n",
    "timestamp": "2022-01-20 11:17 PM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": 6.3,
    "week03": "DNP",
    "week04": "DNP",
    "week05": 7.2,
    "week06": "BYE",
    "week07": 16.7,
    "week08": 19.7,
    "week09": 10.4,
    "week10": 9.1,
    "week11": "DNP",
    "week12": 25.3,
    "week13": 15.9,
    "week14": "DNP",
    "week15": "DNP",
    "week16": "DNP",
    "week17": 20.0,
    "week18": 8.5,
    "week19": 15.0,
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 6.3, 'DNP', 'DNP', 7.2, 'BYE', 16.7, 19.7, 10.4, 9.1, 'DNP', 25.3, 15.9, 'DNP', 'DNP', 'DNP', 20.0, 8.5, 15.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 12.0, 'DNP', 'DNP', 7.3, 'BYE', 14.7, 13.0, 14.5, 14.3, 'DNP', 15.4, 17.4, 'DNP', 'DNP', 'DNP', 17.9, 14.4, 13.3, 14.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 6.1, 'DNP', 'DNP', 1.4, 'BYE', 5.1, 4.9, 5.7, 8.3, 'DNP', 7.9, 9.6, 'DNP', 'DNP', 'DNP', 9.3, 9.1, 6.7, 7.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 22.1, 'DNP', 'DNP', 10.6, 'BYE', 15.9, 18.1, 17.9, 18.2, 'DNP', 17.7, 21.7, 'DNP', 'DNP', 'DNP', 18.2, 17.3, 19.4, 19.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3115364.png",
    "name": "Leonard Fournette",
    "depthchart": "Starter: RB-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 13.9,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank_Neg": 6,
    "team_rank_Neg": 27,
    "avg_fp2": 15.79,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 19.39,
    "fanduelSalary": "$7000",
    "hasStatus": "Status",
    "healthOut": "Ir-r",
    "injury": "Hamstring",
    "tmColorLite": "#A31D2F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(163, 29, 47, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A31D2F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "NFL Network's Ian Rapoport said barring a practice setbacks, he expects Leonard Fournette (hamstring) to play in the Divisional Round.\u00a0\n",
    "report": "",
    "analysis": "Rapoport said Bucs head coach Bruce Arians held Fournette out of last week's Wild Card game against the Eagles because the veteran couldn't \"open it up\" on the practice field a month after injuring his hamstring. If Fournette is able to get through Friday's practice without a setback, he should suit up Sunday against the Rams. Whether he'll see his usual every-down workload is another question entirely. Gio Bernard would likely spell Fournette on passing downs and perhaps two-minute drills. Lombardi Lenny could be more touchdown-dependent than usual against LA.\u00a0\n",
    "timestamp": "2022-01-21 08:51 PM",
    "source": "Ian Rapoport on Twitter",
    "game_day_logo": "",
    "week01": 8.4,
    "week02": 9.6,
    "week03": 4.9,
    "week04": 15.3,
    "week05": 19.0,
    "week06": 27.7,
    "week07": 16.0,
    "week08": 5.8,
    "week09": "BYE",
    "week10": 13.2,
    "week11": 10.4,
    "week12": 40.6,
    "week13": 18.7,
    "week14": 21.2,
    "week15": 10.2,
    "week16": "DNP",
    "week17": "DNP",
    "week18": "DNP",
    "week19": "DNP",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(163, 29, 47, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.4, 9.6, 4.9, 15.3, 19.0, 27.7, 16.0, 5.8, 'BYE', 13.2, 10.4, 40.6, 18.7, 21.2, 10.2, 'DNP', 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.8, 9.3, 10.6, 9.3, 12.3, 12.5, 14.0, 13.2, 'BYE', 13.4, 14.6, 11.6, 15.0, 16.2, 14.3, 'DNP', 'DNP', 'DNP', 'DNP', 13.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.5, 7.0, 8.8, 7.7, 7.4, 8.3, 12.0, 9.3, 'BYE', 8.5, 10.1, 4.1, 6.4, 4.6, 7.7, 'DNP', 'DNP', 'DNP', 'DNP', 10.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(163, 29, 47, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [22.4, 22.7, 15.8, 17.3, 13.0, 15.4, 20.8, 16.6, 'BYE', 19.5, 19.2, 14.3, 16.8, 24.0, 17.0, 'DNP', 'DNP', 'DNP', 'DNP', 17.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3042519.png",
    "name": "Aaron Jones",
    "depthchart": "Starter: RB-1",
    "team": "Green Bay Packers",
    "projected": 13.0,
    "opponent": "San Francisco 49ers",
    "home_away": "",
    "opp_rank_Neu": 9,
    "team_rank_Neu": 19,
    "avg_fp2": 13.53,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 19.1,
    "fanduelSalary": "$7500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#d7a017",
    "tmColorDark": "#203731",
    "tmColorLite_rgba": "rgba(215, 160, 23, 0.2)",
    "tmColorDark_rgba": "rgba(32, 55, 49, 0.2)",
    "tmTextLite": "#d7a017",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png",
    "headlineNews": "Aaron Jones (knee) was a full participant for Tuesday's practice.\n",
    "report": "",
    "analysis": "Jones was ruled out for Week 18 since there was no need to play him in a meaningless game. With three weeks to recover ahead of Saturday's Divisional matchup against the Niners, Jones will be at full strength and working alongside A.J. Dillon as co-RB1s at Lambeau.\n",
    "timestamp": "2022-01-19 09:43 PM",
    "source": "Wes Hodkiewicz on Twitter",
    "game_day_logo": "",
    "week01": 3.2,
    "week02": 38.5,
    "week03": 16.6,
    "week04": 9.4,
    "week05": 12.9,
    "week06": 19.0,
    "week07": 6.4,
    "week08": 20.5,
    "week09": 5.3,
    "week10": 10.6,
    "week11": "DNP",
    "week12": 2.3,
    "week13": "BYE",
    "week14": 20.0,
    "week15": 14.0,
    "week16": 11.2,
    "week17": 13.1,
    "week18": "DNP",
    "week19": "DNP",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.2, 38.5, 16.6, 9.4, 12.9, 19.0, 6.4, 20.5, 5.3, 10.6, 'DNP', 2.3, 'BYE', 20.0, 14.0, 11.2, 13.1, 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.4, 7.8, 14.9, 13.4, 12.9, 11.9, 14.1, 11.1, 15.8, 17.8, 'DNP', 13.9, 'BYE', 15.3, 12.4, 14.5, 16.5, 'DNP', 'DNP', 13.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.4, 5.6, 13.2, 5.6, 8.0, 9.0, 9.6, 0.4, 10.1, 11.0, 'DNP', 10.2, 'BYE', 4.9, 4.6, 8.4, 10.7, 'DNP', 'DNP', 1.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [23.6, 26.6, 27.1, 21.9, 23.0, 21.2, 20.5, 16.8, 17.9, 22.0, 'DNP', 22.5, 'BYE', 19.6, 17.4, 22.3, 25.0, 'DNP', 'DNP', 17.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4040761.png",
    "name": "Devin Singletary",
    "depthchart": "Starter: RB-1",
    "team": "Buffalo Bills",
    "projected": 12.2,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Neu": 17,
    "team_rank_Pos": 6,
    "avg_fp2": 9.6,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 20.3,
    "fanduelSalary": "$7200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#005596",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 85, 150, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
    "headlineNews": "Devin Singletary rushed 16 times for 81 yards and two touchdowns in the Bills' Wild Card Round win over the Patriots, adding three receptions for 13 additional yards.\u00a0\n",
    "report": "",
    "analysis": "With the Bills imposing their will in every phase of the game, Singletary was the engine on the ground as Buffalo posted a 29/174/2 team rushing line with temperatures hovering near zero degrees. As was the case down the stretch of the regular season, Singletary was a one-man band in what had previously been a backfield committee, though frustratingly for DFS players, he did cede a goal-line carry to Zack Moss. It was Moss' lone tote of the night. He did not convert. Singletary also stood by as offensive lineman Tommy Doyle went tackle eligible and housed a one-yard passing score. FB Reggie Gilliam also scored. Finally a reliable workhorse with weekly touchdown upside, Singletary will be a big part of Divisional Round DFS regardless of the Bills' opponent. It is likely to be the Chiefs.\u00a0\n",
    "timestamp": "2022-01-16 06:04 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 9.5,
    "week02": 16.1,
    "week03": 3.1,
    "week04": 9.1,
    "week05": 2.8,
    "week06": 6.8,
    "week07": "BYE",
    "week08": 3.4,
    "week09": 9.4,
    "week10": 11.4,
    "week11": 5.8,
    "week12": 5.3,
    "week13": 3.6,
    "week14": 11.9,
    "week15": 16.1,
    "week16": 16.3,
    "week17": 23.0,
    "week18": 24.2,
    "week19": 22.9,
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.5, 16.1, 3.1, 9.1, 2.8, 6.8, 'BYE', 3.4, 9.4, 11.4, 5.8, 5.3, 3.6, 11.9, 16.1, 16.3, 23.0, 24.2, 22.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.5, 11.1, 14.3, 9.9, 9.8, 7.8, 'BYE', 9.0, 8.8, 8.9, 6.5, 9.6, 10.9, 10.5, 11.6, 11.3, 13.9, 16.2, 12.9, 12.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.0, 3.6, 11.5, 7.4, 5.0, 9.7, 'BYE', 5.1, 7.5, 9.6, 5.8, 7.0, 9.3, 6.8, 9.4, 8.1, 6.5, 7.0, 5.6, 5.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.9, 12.9, 16.6, 13.7, 9.0, 15.7, 'BYE', 9.8, 11.7, 14.3, 9.8, 11.3, 14.0, 12.8, 13.7, 14.5, 11.2, 15.2, 13.2, 12.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116385.png",
    "name": "Joe Mixon",
    "depthchart": "Starter: RB-1",
    "team": "Cincinnati Bengals",
    "projected": 11.6,
    "opponent": "Tennessee Titans",
    "home_away": "at ",
    "opp_rank_Neg": 2,
    "team_rank_Neu": 22,
    "avg_fp2": 16.68,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 16.24,
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
    "headlineNews": "Joe Mixon had 17 rushes for 48 yards in the Bengals' Super Wild Card Weekend win against the Raiders, adding four catches for 28 yards.\u00a0\n",
    "report": "",
    "analysis": "Mixon didn't come through in a prime spot against a Raiders defense he torched in the Bengals' regular season win against Vegas. Outside of a 10-yard scamper in the first half, Mixon did next to nothing with his 17 rushing attempts. He was corralled by defenders on two screen passes that could have turned into big gains if Mixon could have slipped an initial tackle. Mixon's recent route running participation and target share gives him a reliable floor. His ceiling will hinge on finding the end zone in the Bengals' Divisional Round game.\u00a0\n",
    "timestamp": "2022-01-16 01:52 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 23.0,
    "week02": 7.6,
    "week03": 9.9,
    "week04": 13.2,
    "week05": 10.0,
    "week06": 23.8,
    "week07": 11.9,
    "week08": 23.1,
    "week09": 25.5,
    "week10": "BYE",
    "week11": 24.3,
    "week12": 30.3,
    "week13": 9.4,
    "week14": 7.8,
    "week15": 6.5,
    "week16": 28.5,
    "week17": 12.1,
    "week18": "DNP",
    "week19": 9.6,
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [23.0, 7.6, 9.9, 13.2, 10.0, 23.8, 11.9, 23.1, 25.5, 'BYE', 24.3, 30.3, 9.4, 7.8, 6.5, 28.5, 12.1, 'DNP', 9.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.5, 17.4, 9.7, 13.1, 12.1, 14.0, 12.1, 15.9, 12.4, 'BYE', 13.4, 15.4, 19.7, 14.9, 13.1, 13.8, 18.2, 'DNP', 16.5, 11.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.4, 6.2, 2.3, 4.5, 8.3, 16.3, 8.5, 17.4, 13.8, 'BYE', 18.0, 9.7, 17.4, 8.8, 10.2, 9.0, 7.1, 'DNP', 11.5, 10.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [20.1, 22.5, 15.0, 13.6, 18.9, 24.3, 18.6, 22.5, 15.8, 'BYE', 23.7, 15.9, 33.4, 15.9, 17.3, 14.9, 20.5, 'DNP', 27.3, 20.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4240021.png",
    "name": "Cam Akers",
    "depthchart": "Starter: RB-1",
    "team": "Los Angeles Rams",
    "projected": 7.9,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "at ",
    "opp_rank_Neg": 3,
    "team_rank_Neg": 24,
    "avg_fp2": 8.75,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 17.6,
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
    "headlineNews": "The Rams have a 52 percent pass rate since Week 15, the seventh lowest in the NFL over that span.\u00a0\n",
    "report": "",
    "analysis": "Head coach Sean McVay has made a concerted effort to establish the run and lean heavily on the team's backs when game script allows. Perhaps spooked by Matthew Stafford's disastrous late-season decision making, McVay's offense has become one of the run-heaviest in the league over the past month. That wasn't always the case: LA's season-long pass rate of 59 percent ranks 11th in the NFL, and their pass rate over expectation was among the league's highest during the season's first month. The new approach has translated to hefty volume for Sony Michel -- who had 13 carries on Monday night against Arizona -- and Cam Akers, who led the team with 17 rushes in LA's Wild Card win. Akers, recently returned from a preseason Achilles tear, totaled 55 yards on the ground but had several long runs called back on penalties. Look for the Rams to once again go run heavy in the Divisional Round against Tampa, hiding Stafford as well as they can.\u00a0\n",
    "timestamp": "2022-01-18 04:34 PM",
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
    "week09": "DNP",
    "week10": "DNP",
    "week11": "BYE",
    "week12": "DNP",
    "week13": "DNP",
    "week14": "DNP",
    "week15": "DNP",
    "week16": "DNP",
    "week17": "DNP",
    "week18": 2.8,
    "week19": 10.0,
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 2.8, 10.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 6.3, 5.7, 7.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 4.2, 4.6, 3.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 15.9, 12.4, 13.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4035676.png",
    "name": "Zack Moss",
    "depthchart": "Backup: RB-2",
    "team": "Buffalo Bills",
    "projected": 7.5,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Neu": 17,
    "team_rank_Pos": 6,
    "avg_fp2": 7.61,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 20.3,
    "fanduelSalary": "$4700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#005596",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 85, 150, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
    "headlineNews": "Bills declared RB Matt Breida, DE Efe Obada, WR Marquez Stevenson, TE Tommy Sweeney, OL Bobby Hart, DT Eli Ankou, and LB Joe Giles-Harris inactive for Super Wild Card Weekend against the Patriots.\u00a0\n",
    "report": "",
    "analysis": "Devin Singletary will again be the No. 1 back in a Bills offense that's far more balanced than it was last postseason. Zack Moss could see a handful of touches behind Singletary.\u00a0\n",
    "timestamp": "2022-01-15 11:53 PM",
    "source": "Buffalo Bills on Twitter ",
    "game_day_logo": "",
    "week01": "DNP",
    "week02": 14.4,
    "week03": 16.6,
    "week04": 12.1,
    "week05": 10.7,
    "week06": 4.9,
    "week07": "BYE",
    "week08": 8.8,
    "week09": 3.4,
    "week10": 8.7,
    "week11": 0.5,
    "week12": "DNP",
    "week13": "DNP",
    "week14": "DNP",
    "week15": "DNP",
    "week16": 3.0,
    "week17": 3.9,
    "week18": 2.4,
    "week19": 0.0,
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 14.4, 16.6, 12.1, 10.7, 4.9, 'BYE', 8.8, 3.4, 8.7, 0.5, 'DNP', 'DNP', 'DNP', 'DNP', 3.0, 3.9, 2.4, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 5.3, 7.3, 17.2, 15.7, 15.7, 'BYE', 15.2, 13.6, 16.4, 15.1, 'DNP', 'DNP', 'DNP', 'DNP', 7.4, 7.5, 9.8, 7.1, 7.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 2.0, 3.6, 8.7, 10.9, 8.4, 'BYE', 9.6, 7.5, 7.5, 2.8, 'DNP', 'DNP', 'DNP', 'DNP', 1.9, 5.0, 5.9, 1.8, 0.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 13.4, 4.9, 9.7, 21.8, 12.0, 'BYE', 12.7, 11.8, 14.5, 8.4, 'DNP', 'DNP', 'DNP', 'DNP', 9.6, 11.2, 13.1, 9.0, 8.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4239934.png",
    "name": "A.J. Dillon",
    "depthchart": "Backup: RB-2",
    "team": "Green Bay Packers",
    "projected": 7.5,
    "opponent": "San Francisco 49ers",
    "home_away": "",
    "opp_rank_Neu": 9,
    "team_rank_Neu": 19,
    "avg_fp2": 10.09,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 19.1,
    "fanduelSalary": "$6100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#d7a017",
    "tmColorDark": "#203731",
    "tmColorLite_rgba": "rgba(215, 160, 23, 0.2)",
    "tmColorDark_rgba": "rgba(32, 55, 49, 0.2)",
    "tmTextLite": "#d7a017",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png",
    "headlineNews": "A.J. Dillon rushed 14 times for 63 yards in Green Bay's Week 18 loss to the Lions.\n",
    "report": "",
    "analysis": "He also caught his only target for a four-yard gain. Active in place of Aaron Jones (knee, rest), Dillon merely played the first two quarters with Aaron Rodgers and Davante Adams then took a backseat with the rest of Green Bay's starters for the second half. He and the Packers will return in the Divisional Round with Jones back at full strength.\n",
    "timestamp": "2022-01-10 02:06 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 3.1,
    "week02": 3.1,
    "week03": 3.6,
    "week04": 10.2,
    "week05": 15.9,
    "week06": 5.9,
    "week07": -0.7,
    "week08": 7.8,
    "week09": 11.0,
    "week10": 25.8,
    "week11": 12.7,
    "week12": 17.5,
    "week13": "BYE",
    "week14": 7.1,
    "week15": 10.0,
    "week16": 7.1,
    "week17": 21.3,
    "week18": 7.2,
    "week19": "DNP",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.1, 3.1, 3.6, 10.2, 15.9, 5.9, -0.7, 7.8, 11.0, 25.8, 12.7, 17.5, 'BYE', 7.1, 10.0, 7.1, 21.3, 7.2, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.9, 4.4, 6.2, 4.9, 3.9, 5.4, 6.1, 4.5, 6.9, 6.7, 11.4, 7.0, 'BYE', 7.6, 5.8, 7.9, 7.5, 7.4, 'DNP', 7.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.8, 0.0, 22.1, 0.3, 3.7, 7.5, 14.9, 0.4, 1.9, 5.6, 11.3, 0.6, 'BYE', 15.7, 7.1, 2.5, 1.0, 7.5, 'DNP', 5.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [5.0, 2.6, 28.0, 5.4, 8.1, 13.4, 30.2, 5.5, 10.5, 9.7, 25.4, 11.9, 'BYE', 19.6, 14.5, 13.2, 11.9, 20.2, 'DNP', 8.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3125116.png",
    "name": "D'Onta Foreman",
    "depthchart": "Backup: RB-2",
    "team": "Tennessee Titans",
    "projected": 6.7,
    "opponent": "Cincinnati Bengals",
    "home_away": "",
    "opp_rank_Neg": 5,
    "team_rank_Pos": 3,
    "avg_fp2": 10.06,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 20.4,
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
    "headlineNews": "Speaking Thursday, Titans coach Mike Vrabel said a final decision on Derrick Henry's (foot) status for the Divisional Round will be made on Friday.\u00a0\n",
    "report": "",
    "analysis": "Vrabel did add that the Titans have been adding more to Henry's plate each day, and that he has been \"progressing well.\" Henry has definitely reached \"barring a setback\" territory for Saturday's showdown with the Bengals. We not only fully expect him to be out there, but to be out there for a full workload after initially returning to practice in Week 18. D'Onta Foreman and company will fight for scraps behind The Big Dog, with Foreman obviously the favorite for breather touches.\u00a0\u00a0\n",
    "timestamp": "2022-01-20 10:03 PM",
    "source": "Terry McCormick on Twitter",
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": "DNP",
    "week08": "DNP",
    "week09": "DNP",
    "week10": 8.8,
    "week11": 4.5,
    "week12": 9.7,
    "week13": "BYE",
    "week14": 13.2,
    "week15": 14.5,
    "week16": 7.7,
    "week17": 19.2,
    "week18": 8.9,
    "week19": "DNP",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 8.8, 4.5, 9.7, 'BYE', 13.2, 14.5, 7.7, 19.2, 8.9, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 1.3, 7.0, 8.6, 'BYE', 12.5, 13.4, 13.2, 12.7, 13.5, 'DNP', 6.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 5.2, 2.1, 0.0, 'BYE', 3.6, 6.3, 5.8, 2.1, 8.9, 'DNP', 6.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 9.4, 4.9, 1.8, 'BYE', 8.7, 10.4, 11.1, 6.8, 11.3, 'DNP', 10.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3128721.png",
    "name": "Sony Michel",
    "depthchart": "Backup: RB-2",
    "team": "Los Angeles Rams",
    "projected": 6.4,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "at ",
    "opp_rank_Neg": 3,
    "team_rank_Neg": 24,
    "avg_fp2": 8.15,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 17.6,
    "fanduelSalary": "$5300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "The Rams have a 52 percent pass rate since Week 15, the seventh lowest in the NFL over that span.\u00a0\n",
    "report": "",
    "analysis": "Head coach Sean McVay has made a concerted effort to establish the run and lean heavily on the team's backs when game script allows. Perhaps spooked by Matthew Stafford's disastrous late-season decision making, McVay's offense has become one of the run-heaviest in the league over the past month. That wasn't always the case: LA's season-long pass rate of 59 percent ranks 11th in the NFL, and their pass rate over expectation was among the league's highest during the season's first month. The new approach has translated to hefty volume for Sony Michel -- who had 13 carries on Monday night against Arizona -- and Cam Akers, who led the team with 17 rushes in LA's Wild Card win. Akers, recently returned from a preseason Achilles tear, totaled 55 yards on the ground but had several long runs called back on penalties. Look for the Rams to once again go run heavy in the Divisional Round against Tampa, hiding Stafford as well as they can.\u00a0\n",
    "timestamp": "2022-01-18 04:34 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 0.2,
    "week02": 4.6,
    "week03": 9.4,
    "week04": -0.9,
    "week05": 11.0,
    "week06": 4.2,
    "week07": 0.4,
    "week08": 6.6,
    "week09": 9.6,
    "week10": 4.1,
    "week11": "BYE",
    "week12": 3.0,
    "week13": 20.4,
    "week14": 7.9,
    "week15": 12.5,
    "week16": 20.0,
    "week17": 17.4,
    "week18": 5.4,
    "week19": 5.8,
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.2, 4.6, 9.4, -0.9, 11.0, 4.2, 0.4, 6.6, 9.6, 4.1, 'BYE', 3.0, 20.4, 7.9, 12.5, 20.0, 17.4, 5.4, 5.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.7, 3.6, 5.1, 4.7, 5.8, 6.9, 5.5, 5.8, 5.0, 6.7, 'BYE', 5.9, 9.2, 8.0, 6.4, 5.7, 8.9, 9.3, 9.4, 6.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.7, 2.9, 3.8, 4.5, 7.1, 10.8, 7.8, 3.7, 4.2, 1.4, 'BYE', 5.3, 3.2, 6.0, 6.8, 4.3, 3.0, 0.0, 3.5, 2.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.0, 16.8, 9.4, 7.7, 11.5, 14.6, 11.4, 12.8, 9.8, 13.9, 'BYE', 11.4, 9.0, 11.1, 11.6, 8.6, 11.7, 15.1, 8.8, 10.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3115375.png",
    "name": "Darrel Williams",
    "depthchart": "Reserve: RB-3",
    "team": "Kansas City Chiefs",
    "projected": 5.6,
    "opponent": "Buffalo Bills",
    "home_away": "",
    "opp_rank_Neu": 19,
    "team_rank_Neu": 16,
    "avg_fp2": 10.39,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 20.23,
    "fanduelSalary": "$5500",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Toe",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Darrel Williams (toe) is questionable for the Divisional Round against the Bills.\n",
    "report": "",
    "analysis": "Williams got in limited work to close the week but is still not expected to have an impactful role since Clyde Edwards-Helaire (knee) was removed from the injury report altogether. Jerick McKinnon and CEH will likely split backfield duties even if Williams turns around for Sunday night.\n",
    "timestamp": "2022-01-21 09:09 PM",
    "source": "Kansas City Chiefs on Twitter",
    "game_day_logo": "",
    "week01": 0.4,
    "week02": 5.8,
    "week03": 4.9,
    "week04": 12.8,
    "week05": 6.0,
    "week06": 22.4,
    "week07": 6.5,
    "week08": 14.0,
    "week09": 9.2,
    "week10": 24.9,
    "week11": 3.1,
    "week12": "BYE",
    "week13": 9.5,
    "week14": 11.4,
    "week15": 1.2,
    "week16": 10.0,
    "week17": 24.2,
    "week18": 6.2,
    "week19": 0.4,
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.4, 5.8, 4.9, 12.8, 6.0, 22.4, 6.5, 14.0, 9.2, 24.9, 3.1, 'BYE', 9.5, 11.4, 1.2, 10.0, 24.2, 6.2, 0.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.7, 3.7, 5.4, 5.0, 4.5, 9.2, 11.8, 12.1, 12.5, 11.4, 11.6, 'BYE', 7.7, 8.1, 7.7, 7.9, 12.5, 10.7, 8.4, 5.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.3, 2.4, 5.0, 7.2, 3.4, 4.2, 10.3, 1.0, 9.1, 0.7, 17.2, 'BYE', 0.0, 7.4, 2.0, 0.3, 1.2, 4.1, 2.8, 0.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.5, 8.8, 7.4, 8.7, 5.8, 7.3, 17.2, 8.5, 13.2, 6.0, 23.4, 'BYE', 8.3, 13.6, 8.8, 7.7, 7.7, 19.1, 5.8, 4.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15826.png",
    "name": "Giovani Bernard",
    "depthchart": "Backup: RB-2",
    "team": "Tampa Bay Buccaneers",
    "projected": 5.6,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank_Neg": 6,
    "team_rank_Neg": 27,
    "avg_fp2": 3.97,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 19.39,
    "fanduelSalary": "$5400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A31D2F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(163, 29, 47, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A31D2F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "NFL Network's Ian Rapoport said barring a practice setbacks, he expects Leonard Fournette (hamstring) to play in the Divisional Round.\u00a0\n",
    "report": "",
    "analysis": "Rapoport said Bucs head coach Bruce Arians held Fournette out of last week's Wild Card game against the Eagles because the veteran couldn't \"open it up\" on the practice field a month after injuring his hamstring. If Fournette is able to get through Friday's practice without a setback, he should suit up Sunday against the Rams. Whether he'll see his usual every-down workload is another question entirely. Gio Bernard would likely spell Fournette on passing downs and perhaps two-minute drills. Lombardi Lenny could be more touchdown-dependent than usual against LA.\u00a0\n",
    "timestamp": "2022-01-21 08:51 PM",
    "source": "Ian Rapoport on Twitter",
    "game_day_logo": "",
    "week01": 2.2,
    "week02": 2.6,
    "week03": 15.6,
    "week04": "DNP",
    "week05": 10.5,
    "week06": 1.4,
    "week07": 1.5,
    "week08": 10.2,
    "week09": "BYE",
    "week10": 1.3,
    "week11": 0.8,
    "week12": 0.0,
    "week13": 1.5,
    "week14": 0.0,
    "week15": "DNP",
    "week16": "DNP",
    "week17": "DNP",
    "week18": "DNP",
    "week19": 16.8,
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(163, 29, 47, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.2, 2.6, 15.6, 'DNP', 10.5, 1.4, 1.5, 10.2, 'BYE', 1.3, 0.8, 0.0, 1.5, 0.0, 'DNP', 'DNP', 'DNP', 'DNP', 16.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.4, 2.8, 2.4, 'DNP', 5.1, 6.6, 3.8, 3.4, 'BYE', 6.2, 6.1, 3.6, 3.8, 3.0, 'DNP', 'DNP', 'DNP', 'DNP', 2.2, 5.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.2, 3.5, 6.3, 'DNP', 12.4, 8.4, 5.4, 6.4, 'BYE', 7.3, 2.0, 6.3, 2.2, 2.3, 'DNP', 'DNP', 'DNP', 'DNP', 2.1, 1.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(163, 29, 47, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.0, 19.5, 10.6, 'DNP', 20.9, 15.9, 11.7, 10.6, 'BYE', 14.1, 11.2, 13.9, 8.1, 8.1, 'DNP', 'DNP', 'DNP', 'DNP', 8.3, 8.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3126246.png",
    "name": "Dontrell Hilliard",
    "depthchart": "Reserve: RB-3",
    "team": "Tennessee Titans",
    "projected": 5.1,
    "opponent": "Cincinnati Bengals",
    "home_away": "",
    "opp_rank_Neg": 5,
    "team_rank_Pos": 3,
    "avg_fp2": 9.48,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 20.4,
    "fanduelSalary": "$5100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#4495D1",
    "tmColorDark": "#002A5C",
    "tmColorLite_rgba": "rgba(68, 149, 209, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 92, 0.2)",
    "tmTextLite": "#4495D1",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png",
    "headlineNews": "Dontrell Hilliard rushed nine times for 57 yards, adding one catch for one yard in the Titans' Week 18 win over the Texans.\n",
    "report": "",
    "analysis": "D'Onta Foreman had 21 carries to Hilliard's nine, but the latter nearly matched the lead back in rushing yards (Foreman had 69 vs. 57 for Hilliard). Regardless, both backs are likely irrelevant for the playoffs if Derrick Henry can return as is expected for the divisional round. Still, Hilliard had a solid run as a member of the Titans' backfield committee.\n",
    "timestamp": "2022-01-09 09:22 PM",
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
    "week09": "DNP",
    "week10": "DNP",
    "week11": 12.2,
    "week12": 17.8,
    "week13": "BYE",
    "week14": 1.3,
    "week15": 7.9,
    "week16": 2.4,
    "week17": 15.3,
    "week18": 6.3,
    "week19": "DNP",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 12.2, 17.8, 'BYE', 1.3, 7.9, 2.4, 15.3, 6.3, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 3.1, 11.2, 'BYE', 11.5, 7.9, 7.9, 4.6, 7.8, 'DNP', 5.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 4.4, 4.7, 'BYE', 6.2, 0.0, 0.3, 0.1, 7.4, 'DNP', 2.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 5.7, 6.0, 'BYE', 12.4, 3.1, 4.2, 3.3, 11.4, 'DNP', 6.7]
                    }
                    
                    ]
               }
            }];




$scope.positionWR = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3126486.png",
    "name": "Deebo Samuel",
    "depthchart": "Starter: WR-1",
    "team": "San Francisco 49ers",
    "projected": 17.8,
    "opponent": "Green Bay Packers",
    "home_away": "at ",
    "opp_rank_Neu": 9,
    "team_rank_Neu": 12,
    "avg_fp2": 18.23,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 28.46,
    "fanduelSalary": "$8600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "Deebo Samuel caught 3-of-3 targets for 38 yards in the 49ers' Wild Card round win over the Cowboys, adding 10 rushes for 72 yards and a touchdown.\u00a0\n",
    "report": "",
    "analysis": "Samuel was such an integral piece of the 49ers rushing attack that it feels misleading to call him a wide receiver in this game. But, of course, when Samuel was playing wide receiver, he was playing it at a very high level. Samuel could have had an even bigger day but had a 10+ yard catch called back on the first play of the game and had a nice run called back due to holding. Simply one of the most dangerous players in the league with the ball in his hands, positional designations are irrelevant with Samuel. He is a lock to be a key piece of the 49ers' game plan to beat the Packers at home in the Divisional round.\n",
    "timestamp": "2022-01-17 05:01 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 27.4,
    "week02": 13.1,
    "week03": 7.7,
    "week04": 31.7,
    "week05": 14.6,
    "week06": "BYE",
    "week07": 17.5,
    "week08": 20.1,
    "week09": 8.8,
    "week10": 27.8,
    "week11": 15.9,
    "week12": 20.3,
    "week13": "DNP",
    "week14": 12.4,
    "week15": 16.9,
    "week16": 23.6,
    "week17": 15.7,
    "week18": 26.96,
    "week19": 18.5,
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [27.4, 13.1, 7.7, 31.7, 14.6, 'BYE', 17.5, 20.1, 8.8, 27.8, 15.9, 20.3, 'DNP', 12.4, 16.9, 23.6, 15.7, 26.96, 18.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.6, 14.5, 12.9, 9.5, 19.4, 'BYE', 19.7, 10.7, 14.4, 10.2, 18.4, 14.4, 'DNP', 15.0, 13.3, 17.1, 11.0, 11.0, 13.8, 17.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.3, 4.3, 2.4, 9.5, 11.1, 'BYE', 7.4, 8.4, 9.6, 8.1, 15.2, 11.3, 'DNP', 6.9, 7.0, 5.8, 6.0, 13.2, 13.8, 11.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.0, 18.0, 8.7, 15.9, 17.1, 'BYE', 13.2, 18.0, 19.5, 15.9, 24.9, 20.7, 'DNP', 19.4, 15.5, 21.4, 19.0, 19.3, 26.9, 25.8]
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
    "opponent": "Buffalo Bills",
    "home_away": "",
    "opp_rank_Neg": 1,
    "team_rank_Pos": 2,
    "avg_fp2": 15.02,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 19.26,
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
    "headlineNews": "Tyreek Hill caught all five of his targets for 57 yards and one score in Kansas City's Wild Card win over the Steelers.\n",
    "report": "",
    "analysis": "Hill\u2019s touchdown in the third quarter was his first on a go route since Week 1, pantsing CB Cameron Sutton over the top from the slot. Hill nearly scored again on a misdirection at the goal line but was called down at the one-yard line, allowing Patrick Mahomes to find OL Nick Alegretti for the former\u2019s fifth touchdown of the evening. Hill also encouragingly led the team in routes run after being limited with a heel injury in Week 18. Buffalo held him to 7/63 on 13 targets in their last matchup in Week 5, which will need to improve if the Chiefs stand to escape their rematch in the Divisional Round with a win.\n",
    "timestamp": "2022-01-17 04:23 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 31.6,
    "week02": 4.4,
    "week03": 7.2,
    "week04": 42.1,
    "week05": 11.3,
    "week06": 18.1,
    "week07": 9.7,
    "week08": 21.4,
    "week09": 5.3,
    "week10": 24.0,
    "week11": 15.5,
    "week12": "BYE",
    "week13": 3.2,
    "week14": 9.6,
    "week15": 26.8,
    "week16": 2.9,
    "week17": 7.2,
    "week18": 0.7,
    "week19": 14.2,
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [31.6, 4.4, 7.2, 42.1, 11.3, 18.1, 9.7, 21.4, 5.3, 24.0, 15.5, 'BYE', 3.2, 9.6, 26.8, 2.9, 7.2, 0.7, 14.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.7, 18.1, 12.2, 9.5, 14.1, 23.5, 23.4, 15.6, 16.1, 15.3, 19.3, 'BYE', 11.5, 18.3, 10.8, 13.8, 14.9, 15.3, 10.3, 15.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.7, 5.3, 0.6, 8.5, 11.9, 7.2, 14.5, 9.6, 10.6, 9.5, 16.9, 'BYE', 11.7, 6.4, 8.0, 6.1, 7.8, 7.8, 0.3, 7.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [24.3, 24.3, 15.9, 19.2, 19.7, 14.7, 24.4, 22.7, 18.6, 19.4, 21.2, 'BYE', 23.3, 21.8, 22.3, 14.9, 20.9, 17.2, 14.8, 15.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4362628.png",
    "name": "Ja'Marr Chase",
    "depthchart": "Starter: WR-1",
    "team": "Cincinnati Bengals",
    "projected": 14.5,
    "opponent": "Tennessee Titans",
    "home_away": "at ",
    "opp_rank_Neu": 23,
    "team_rank_Neu": 7,
    "avg_fp2": 16.28,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 32.66,
    "fanduelSalary": "$8200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#ea7330",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(234, 115, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#ea7330",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png",
    "headlineNews": "Ja'Marr Chase caught 9-of-12 targets for 116 yards in the Bengals' Super Wild Card Weekend win against the Raiders, adding three rushes for 23 yards.\u00a0\n",
    "report": "",
    "analysis": "Joe Burrow targeted Chase relentlessly in the first half and for portions of the final frame, before the Bengals got conservative on offense. Chase, as per usual, made it look all too easy as the Raiders refused to double team the rookie. Chase got a second half deep shot that was just barely broken up by Vegas defenders. The Bengals interestingly used Chase as a runner: He had three rushing attempts that didn't amount to much, though one converted a fourth and one attempt. Even a few weekly rushes would add to Chase's already-stratospheric fantasy ceiling.\u00a0\n",
    "timestamp": "2022-01-16 01:49 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 18.4,
    "week02": 12.4,
    "week03": 20.5,
    "week04": 10.7,
    "week05": 24.9,
    "week06": 11.7,
    "week07": 30.1,
    "week08": 11.6,
    "week09": 5.9,
    "week10": "BYE",
    "week11": 11.5,
    "week12": 5.4,
    "week13": 7.7,
    "week14": 22.8,
    "week15": 0.8,
    "week16": 16.0,
    "week17": 50.1,
    "week18": 3.6,
    "week19": 18.4,
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [18.4, 12.4, 20.5, 10.7, 24.9, 11.7, 30.1, 11.6, 5.9, 'BYE', 11.5, 5.4, 7.7, 22.8, 0.8, 16.0, 50.1, 3.6, 18.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.2, 12.6, 14.6, 9.1, 8.3, 12.3, 6.0, 14.3, 15.8, 'BYE', 19.3, 16.8, 10.3, 9.8, 9.1, 12.3, 10.1, 12.2, 12.3, 14.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 7.0, 4.3, 4.3, 4.5, 3.8, 11.1, 11.7, 12.4, 'BYE', 14.5, 8.9, 4.3, 4.6, 8.2, 4.7, 4.4, 3.4, 4.3, 4.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.0, 22.5, 19.4, 17.2, 19.8, 17.9, 22.7, 27.0, 26.8, 'BYE', 21.1, 16.0, 17.2, 18.4, 24.0, 22.0, 22.0, 29.5, 21.6, 21.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2976212.png",
    "name": "Stefon Diggs",
    "depthchart": "Starter: WR-1",
    "team": "Buffalo Bills",
    "projected": 14.1,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Pos": 28,
    "team_rank_Neu": 10,
    "avg_fp2": 13.46,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 29.45,
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
    "headlineNews": "Stefon Diggs caught 3-of-4 targets for 60 yards in the Bills' Wild Card win over the Patriots.\u00a0\n",
    "report": "",
    "analysis": "Diggs was one of the only Bills not to get in on the fun tonight as Buffalo dropped 47 points and 482 yards on the overmatched Pats. Josh Allen spread the ball around as he generated 308 yards on a modest 25 attempts, with six different pass catchers drawing at least three looks. Diggs did contribute Buffalo's longest pass play of the night with a 45-yard gain where he made an over-the-shoulder grab in\u00a0J.C. Jackson's coverage. Headed into a Divisional Round showdown with the Chiefs unless the Steelers shock the world on Sunday evening, Diggs will be rematching with a defense that held him to 2/69/0 in Buffalo's Week 5 romp.\u00a0\n",
    "timestamp": "2022-01-16 04:44 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 11.4,
    "week02": 14.0,
    "week03": 9.2,
    "week04": 14.9,
    "week05": 7.9,
    "week06": 19.4,
    "week07": "BYE",
    "week08": 12.5,
    "week09": 11.5,
    "week10": 26.2,
    "week11": 16.3,
    "week12": 16.9,
    "week13": 7.1,
    "week14": 10.9,
    "week15": 11.5,
    "week16": 18.0,
    "week17": 7.7,
    "week18": 18.6,
    "week19": 7.5,
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.4, 14.0, 9.2, 14.9, 7.9, 19.4, 'BYE', 12.5, 11.5, 26.2, 16.3, 16.9, 7.1, 10.9, 11.5, 18.0, 7.7, 18.6, 7.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.5, 12.4, 15.2, 10.8, 12.2, 13.8, 'BYE', 14.0, 20.5, 14.6, 14.7, 11.3, 12.0, 16.6, 8.5, 8.8, 12.8, 9.9, 13.9, 14.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.5, 6.4, 6.4, 10.2, 7.8, 15.0, 'BYE', 14.7, 13.7, 11.8, 9.5, 11.8, 12.0, 6.9, 9.4, 7.2, 9.4, 9.9, 9.3, 9.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.8, 20.2, 14.7, 18.3, 17.6, 18.7, 'BYE', 21.2, 23.2, 21.4, 14.9, 18.6, 18.0, 15.3, 15.8, 15.7, 15.8, 14.7, 16.5, 16.0]
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
    "opponent": "San Francisco 49ers",
    "home_away": "",
    "opp_rank_Neg": 5,
    "team_rank_Neu": 9,
    "avg_fp2": 18.29,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 29.65,
    "fanduelSalary": "$8700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#d7a017",
    "tmColorDark": "#203731",
    "tmColorLite_rgba": "rgba(215, 160, 23, 0.2)",
    "tmColorDark_rgba": "rgba(32, 55, 49, 0.2)",
    "tmTextLite": "#d7a017",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png",
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "source": "",
    "game_day_logo": "",
    "week01": 8.1,
    "week02": 16.1,
    "week03": 25.2,
    "week04": 9.4,
    "week05": 32.1,
    "week06": 10.9,
    "week07": 16.6,
    "week08": "DNP",
    "week09": 7.2,
    "week10": 11.3,
    "week11": 27.0,
    "week12": 14.4,
    "week13": "BYE",
    "week14": 29.1,
    "week15": 13.4,
    "week16": 28.4,
    "week17": 25.1,
    "week18": 8.5,
    "week19": "DNP",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.1, 16.1, 25.2, 9.4, 32.1, 10.9, 16.6, 'DNP', 7.2, 11.3, 27.0, 14.4, 'BYE', 29.1, 13.4, 28.4, 25.1, 8.5, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.7, 12.4, 7.0, 10.3, 9.1, 12.9, 21.6, 'DNP', 11.7, 11.3, 14.5, 15.3, 'BYE', 11.7, 14.2, 10.8, 13.0, 22.8, 'DNP', 14.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [10.5, 10.7, 12.2, 15.1, 14.7, 18.2, 19.5, 'DNP', 11.6, 14.4, 13.2, 11.9, 'BYE', 13.2, 12.2, 11.9, 14.9, 12.9, 'DNP', 13.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [25.2, 30.0, 17.6, 21.5, 20.9, 25.2, 24.5, 'DNP', 17.3, 22.9, 21.9, 19.0, 'BYE', 22.4, 20.5, 20.7, 21.9, 23.3, 'DNP', 20.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4239993.png",
    "name": "Tee Higgins",
    "depthchart": "Backup: WR-2",
    "team": "Cincinnati Bengals",
    "projected": 13.9,
    "opponent": "Tennessee Titans",
    "home_away": "at ",
    "opp_rank_Neu": 23,
    "team_rank_Neu": 7,
    "avg_fp2": 13.01,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 32.66,
    "fanduelSalary": "$6400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#ea7330",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(234, 115, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#ea7330",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png",
    "headlineNews": "Tee Higgins caught 1-of-4 targets for 10 yards in the Bengals' Super Wild Card Weekend game against the Raiders.\u00a0\n",
    "report": "",
    "analysis": "Higgins, dealing with a foot injury this week, was invisible while Ja'Marr Chase cruised to 116 yards on nine catches. He couldn't come down with his only high-value target -- one near the goal line in the first quarter. Higgins' up-and-down fantasy output has proven maddening of late. The second-year wideout had a quiet Week 18 after four blow-up performances in the previous five weeks. Chase is far and away Joe Burrow's first read on every drop back. That leaves Higgins as a big play dependent receiver who has to hope Burrow isn't constantly locked on to Chase.\u00a0\n",
    "timestamp": "2022-01-16 03:40 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 13.8,
    "week02": 13.0,
    "week03": "DNP",
    "week04": "DNP",
    "week05": 7.7,
    "week06": 5.9,
    "week07": 9.7,
    "week08": 11.7,
    "week09": 10.8,
    "week10": "BYE",
    "week11": 2.5,
    "week12": 20.4,
    "week13": 24.3,
    "week14": 13.9,
    "week15": 3.3,
    "week16": 37.4,
    "week17": 7.7,
    "week18": "DNP",
    "week19": 1.5,
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [13.8, 13.0, 'DNP', 'DNP', 7.7, 5.9, 9.7, 11.7, 10.8, 'BYE', 2.5, 20.4, 24.3, 13.9, 3.3, 37.4, 7.7, 'DNP', 1.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.5, 8.9, 'DNP', 'DNP', 6.9, 8.7, 5.5, 8.8, 7.5, 'BYE', 11.3, 13.8, 7.6, 6.3, 7.7, 8.4, 6.2, 'DNP', 7.9, 13.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.2, 6.8, 'DNP', 'DNP', 14.5, 10.7, 5.0, 2.7, 8.2, 'BYE', 4.6, 3.7, 5.2, 13.6, 6.5, 10.8, 7.3, 'DNP', 10.3, 12.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.0, 16.1, 'DNP', 'DNP', 20.8, 14.5, 10.5, 7.0, 17.4, 'BYE', 10.4, 8.4, 9.3, 21.5, 14.0, 14.1, 17.4, 'DNP', 18.9, 22.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16737.png",
    "name": "Mike Evans",
    "depthchart": "Starter: WR-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 12.9,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank_Neu": 20,
    "team_rank_Pos": 1,
    "avg_fp2": 13.44,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 27.65,
    "fanduelSalary": "$8300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A31D2F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(163, 29, 47, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A31D2F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Mike Evans caught 9-of-10 targets for 117 yards and a touchdown in Tampa's Wild Card win over Philadelphia.\u00a0\n",
    "report": "",
    "analysis": "He backflipped into the end zone on his final target, a 36-yard touchdown catch. Evans was the only Tampa receiver with more than 40 receiving yards, and Philadelphia mostly was content to let Tampa dink-and-dunk down the field. Evans will be in the running for WR1 in next week's Divisional Round slate, depending on the matchup.\u00a0\n",
    "timestamp": "2022-01-16 10:27 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 3.9,
    "week02": 22.0,
    "week03": 14.6,
    "week04": 11.0,
    "week05": 26.3,
    "week06": 3.7,
    "week07": 28.6,
    "week08": 11.8,
    "week09": "BYE",
    "week10": 13.2,
    "week11": 17.3,
    "week12": 3.1,
    "week13": 13.4,
    "week14": 18.1,
    "week15": 1.9,
    "week16": "DNP",
    "week17": 12.7,
    "week18": 23.9,
    "week19": 22.2,
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(163, 29, 47, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.9, 22.0, 14.6, 11.0, 26.3, 3.7, 28.6, 11.8, 'BYE', 13.2, 17.3, 3.1, 13.4, 18.1, 1.9, 'DNP', 12.7, 23.9, 22.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.3, 9.9, 10.2, 17.8, 10.8, 11.2, 13.1, 12.4, 'BYE', 14.8, 10.8, 13.7, 12.2, 10.2, 8.8, 'DNP', 9.3, 15.5, 13.4, 12.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.2, 6.2, 5.9, 8.7, 9.2, 6.8, 6.2, 7.4, 'BYE', 10.6, 9.6, 8.9, 6.3, 7.5, 9.6, 'DNP', 12.1, 8.3, 13.8, 10.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(163, 29, 47, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [22.0, 21.9, 15.5, 19.3, 20.8, 14.1, 22.6, 26.9, 'BYE', 22.6, 17.6, 17.2, 16.9, 13.8, 20.4, 'DNP', 27.9, 21.4, 23.8, 20.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4047646.png",
    "name": "A.J. Brown",
    "depthchart": "Starter: WR-1",
    "team": "Tennessee Titans",
    "projected": 12.2,
    "opponent": "Cincinnati Bengals",
    "home_away": "",
    "opp_rank_Pos": 27,
    "team_rank_Neg": 27,
    "avg_fp2": 11.22,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 28.38,
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
    "headlineNews": "A.J. Brown caught 4-of-6 targets for 68 yards and a touchdown in the Titans' Week 18 win over the Texans.\n",
    "report": "",
    "analysis": "Brown was out-targeted by Julio Jones (9-6) and out-gained by Nick Westbrook-Ikhine (78-68), but the Titans' alpha wideout still had a productive day in a pivotal must-win game for the Titans. Tennesee will revert back to their usual run-heavy attack in the playoffs with Derrick Henry presumably back, but Brown remains the clear WR1 and would be a pivotal part of a potential deep postseason run.\n",
    "timestamp": "2022-01-09 09:33 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 12.9,
    "week02": 5.8,
    "week03": 0.3,
    "week04": "DNP",
    "week05": 5.3,
    "week06": 12.6,
    "week07": 23.3,
    "week08": 26.5,
    "week09": 6.7,
    "week10": 2.8,
    "week11": 7.3,
    "week12": "DNP",
    "week13": "BYE",
    "week14": "DNP",
    "week15": "DNP",
    "week16": 26.0,
    "week17": 5.1,
    "week18": 14.8,
    "week19": "DNP",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.9, 5.8, 0.3, 'DNP', 5.3, 12.6, 23.3, 26.5, 6.7, 2.8, 7.3, 'DNP', 'BYE', 'DNP', 'DNP', 26.0, 5.1, 14.8, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.8, 8.2, 9.9, 'DNP', 10.8, 7.7, 7.9, 13.0, 11.9, 12.8, 13.7, 'DNP', 'BYE', 'DNP', 'DNP', 13.1, 9.3, 14.8, 'DNP', 12.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.5, 0.0, 20.6, 'DNP', 8.2, 0.0, 3.9, 9.3, 7.8, 7.1, 6.5, 'DNP', 'BYE', 'DNP', 'DNP', 6.6, 9.4, 7.1, 'DNP', 7.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [20.7, 21.9, 29.1, 'DNP', 19.4, 9.4, 14.0, 26.0, 17.9, 17.4, 15.0, 'DNP', 'BYE', 'DNP', 'DNP', 17.6, 20.9, 24.8, 'DNP', 18.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2977187.png",
    "name": "Cooper Kupp",
    "depthchart": "Starter: WR-1",
    "team": "Los Angeles Rams",
    "projected": 12.2,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "at ",
    "opp_rank_Neu": 22,
    "team_rank_Pos": 5,
    "avg_fp2": 21.49,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 28.13,
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
    "headlineNews": "Cooper Kupp caught 5-of-7 targets for 61 yards and one touchdown in the Rams' Wild Card win over the Cardinals.\n",
    "report": "",
    "analysis": "Kupp led the Rams in catches, yards, and targets on a night Matthew Stafford attempted a season-low 17 passes as the Rams cruised to victory. Kupp dropped one of his passes but later made a tough catch at the goal line on a low throw from Stafford to score a seven-yard touchdown, putting L.A. up 28-0 at the start of the third quarter. Kupp will do battle with a Bucs defense he shredded for 9-96-2 way back in Week 3 when the Rams go to Tampa Bay next Sunday for the Divisional Round.\n",
    "timestamp": "2022-01-18 04:38 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 20.3,
    "week02": 32.3,
    "week03": 26.1,
    "week04": 8.9,
    "week05": 12.7,
    "week06": 29.5,
    "week07": 32.6,
    "week08": 21.0,
    "week09": 15.0,
    "week10": 17.7,
    "week11": "BYE",
    "week12": 15.1,
    "week13": 22.9,
    "week14": 24.8,
    "week15": 30.2,
    "week16": 16.3,
    "week17": 18.5,
    "week18": 23.1,
    "week19": 14.6,
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [20.3, 32.3, 26.1, 8.9, 12.7, 29.5, 32.6, 21.0, 15.0, 17.7, 'BYE', 15.1, 22.9, 24.8, 30.2, 16.3, 18.5, 23.1, 14.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.5, 16.1, 19.1, 18.9, 21.5, 13.6, 15.4, 17.7, 21.1, 17.5, 'BYE', 18.7, 16.6, 16.7, 20.3, 14.9, 25.1, 18.8, 13.2, 12.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.3, 4.1, 13.4, 3.0, 7.2, 13.9, 24.2, 23.2, 16.5, 18.7, 'BYE', 10.8, 10.9, 7.1, 22.8, 13.3, 14.3, 14.4, 14.6, 14.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.1, 17.6, 21.6, 12.8, 16.4, 19.3, 29.6, 27.3, 21.2, 24.8, 'BYE', 18.8, 18.5, 16.4, 28.8, 21.4, 20.0, 17.5, 19.9, 19.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4360438.png",
    "name": "Brandon Aiyuk",
    "depthchart": "Backup: WR-2",
    "team": "San Francisco 49ers",
    "projected": 11.4,
    "opponent": "Green Bay Packers",
    "home_away": "at ",
    "opp_rank_Neu": 9,
    "team_rank_Neu": 12,
    "avg_fp2": 8.04,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 28.46,
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
    "headlineNews": "Brandon Aiyuk caught 5-of-6 targets for 66 yards in the 49ers' Wild Card round win over the Cowboys.\n",
    "report": "",
    "analysis": "Aiyuk led the 49ers in all receiving categories and could have had an even bigger day. The second-year wide receiver got wide open deep downfield on a 3rd-and-11, but Jimmy\u00a0Garoppolo badly overthrew him. Ultimately, Aiyuk did well to produce as much as he did in a 49ers offense that ran the ball 38 times while attempting just 25 passes. The 49ers are sure to attempt a similar slow-paced, run-heavy game plan against the Packers in the Divisional round. And it's possible that the Packers--who also play slowly--won't push the 49ers off script. Aiyuk sets up as a TD-dependent option.\n",
    "timestamp": "2022-01-17 06:11 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 0.0,
    "week02": 1.1,
    "week03": 12.5,
    "week04": 2.0,
    "week05": 4.2,
    "week06": "BYE",
    "week07": 1.4,
    "week08": 8.5,
    "week09": 15.7,
    "week10": 4.1,
    "week11": 18.0,
    "week12": 11.0,
    "week13": 7.0,
    "week14": 15.6,
    "week15": 4.1,
    "week16": 12.0,
    "week17": 11.4,
    "week18": 13.7,
    "week19": 9.1,
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 1.1, 12.5, 2.0, 4.2, 'BYE', 1.4, 8.5, 15.7, 4.1, 18.0, 11.0, 7.0, 15.6, 4.1, 12.0, 11.4, 13.7, 9.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.5, 1.6, 3.5, 4.0, 9.2, 'BYE', 3.2, 2.5, 2.9, 5.2, 6.7, 7.5, 8.0, 5.8, 8.6, 8.7, 8.1, 6.4, 9.7, 11.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [8.1, 6.9, 9.0, 12.6, 6.2, 'BYE', 1.8, 5.2, 8.2, 2.6, 1.4, 6.0, 6.5, 5.9, 7.6, 8.0, 4.7, 7.6, 8.1, 7.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.0, 19.4, 18.9, 14.4, 10.0, 'BYE', 7.9, 18.2, 19.0, 11.1, 9.5, 14.4, 16.1, 16.1, 16.9, 18.3, 13.7, 18.6, 17.6, 16.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3045144.png",
    "name": "Tyler Boyd",
    "depthchart": "Reserve: WR-3",
    "team": "Cincinnati Bengals",
    "projected": 8.8,
    "opponent": "Tennessee Titans",
    "home_away": "at ",
    "opp_rank_Neu": 23,
    "team_rank_Neu": 7,
    "avg_fp2": 9.4,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 32.66,
    "fanduelSalary": "$5800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#ea7330",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(234, 115, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#ea7330",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png",
    "headlineNews": "Tyler Boyd caught 4-of-5 targets for 26 yards and a touchdown in the Bengals' Super Wild Card Weekend win against the Raiders.\u00a0\n",
    "report": "",
    "analysis": "Boyd, who led all Bengals receivers in the team's regular season win over Vegas, caught a gorgeous throw from a scrambling Joe Burrow near the back of the end zone for a first half touchdown. Though Boyd out-targeted Tee Higgins, he remains the clearcut No. 3 wideout in the Bengals offense who's only usable in PPR formats.\u00a0\n",
    "timestamp": "2022-01-16 02:17 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 4.7,
    "week02": 10.8,
    "week03": 11.6,
    "week04": 16.3,
    "week05": 4.4,
    "week06": 1.2,
    "week07": 5.9,
    "week08": 17.24,
    "week09": 1.6,
    "week10": "BYE",
    "week11": 9.3,
    "week12": 2.3,
    "week13": 11.0,
    "week14": 8.3,
    "week15": 18.1,
    "week16": 16.0,
    "week17": 11.6,
    "week18": "DNP",
    "week19": 10.9,
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.7, 10.8, 11.6, 16.3, 4.4, 1.2, 5.9, 17.24, 1.6, 'BYE', 9.3, 2.3, 11.0, 8.3, 18.1, 16.0, 11.6, 'DNP', 10.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.4, 5.2, 11.2, 7.1, 6.0, 5.2, 4.0, 6.7, 4.8, 'BYE', 7.5, 7.6, 4.5, 5.1, 5.5, 6.8, 4.4, 'DNP', 6.3, 8.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.9, 0.8, 13.8, 7.7, 13.0, 11.7, 6.3, 10.2, 10.8, 'BYE', 3.7, 6.6, 6.5, 7.9, 4.6, 5.3, 5.6, 'DNP', 6.5, 12.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.3, 15.5, 16.3, 12.2, 22.2, 16.9, 8.4, 15.1, 13.4, 'BYE', 7.9, 12.4, 13.1, 13.5, 10.7, 10.7, 12.7, 'DNP', 14.1, 19.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16733.png",
    "name": "Odell Beckham Jr.",
    "depthchart": "Backup: WR-2",
    "team": "Los Angeles Rams",
    "projected": 8.3,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "at ",
    "opp_rank_Neu": 22,
    "team_rank_Pos": 5,
    "avg_fp2": 8.46,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 28.13,
    "fanduelSalary": "$6500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Odell Beckham caught all four of his targets for 54 yards and one touchdown in the Rams' Wild Card win over the Cardinals.\n",
    "report": "",
    "analysis": "He also completed a 40-yard pass to Cam Akers on a trick play in the third quarter, leading to an eventual Cooper Kupp touchdown to put the Rams up 28-0. OBJ got the scoring started with a jump-ball five-yard touchdown on third-and-goal, skying over the defender on the end-zone fade. His four targets tied Tyler Higbee for second on the team on a night Matthew Stafford attempted a season-low 17 passes. Beckham looks rejuvenated and poised to make a difference this postseason. He gets a date with the Bucs next Sunday in the Divisional Round.\n",
    "timestamp": "2022-01-18 05:03 AM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": 11.2,
    "week04": 4.1,
    "week05": 3.0,
    "week06": 10.4,
    "week07": 3.3,
    "week08": 1.1,
    "week09": "DNP",
    "week10": "DNP",
    "week11": "BYE",
    "week12": 16.6,
    "week13": 9.8,
    "week14": 16.7,
    "week15": 1.2,
    "week16": 11.7,
    "week17": 12.4,
    "week18": 2.8,
    "week19": 15.0,
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 11.2, 4.1, 3.0, 10.4, 3.3, 1.1, 'DNP', 'DNP', 'BYE', 16.6, 9.8, 16.7, 1.2, 11.7, 12.4, 2.8, 15.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 11.3, 9.7, 7.1, 7.4, 7.9, 6.0, 'DNP', 'DNP', 'BYE', 5.1, 4.0, 4.8, 6.8, 5.5, 15.2, 9.2, 9.5, 8.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 6.2, 10.7, 11.6, 9.0, 9.0, 6.5, 'DNP', 'DNP', 'BYE', 9.2, 12.6, 10.9, 8.9, 10.9, 8.2, 12.2, 9.3, 5.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 14.6, 14.1, 15.7, 13.8, 15.1, 13.4, 'DNP', 'DNP', 'BYE', 16.3, 20.6, 17.5, 15.5, 18.6, 15.5, 17.1, 17.4, 15.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4035004.png",
    "name": "Mecole Hardman",
    "depthchart": "Backup: WR-2",
    "team": "Kansas City Chiefs",
    "projected": 7.0,
    "opponent": "Buffalo Bills",
    "home_away": "",
    "opp_rank_Neg": 1,
    "team_rank_Pos": 2,
    "avg_fp2": 6.02,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 19.26,
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
    "headlineNews": "Mecole Hardman caught all four of his targets for 43 yards in Kansas City's Wild Card win over the Steelers.\n",
    "report": "",
    "analysis": "With Tyreek Hill back at full strength, Hardman ran the fourth-fewest routes (25) among the team's receivers. He also bobbled a handoff while lined up in the Wildcat formation that ultimately got Darrel Williams benched in the second quarter. Hardman offers little (if any). fantasy production as long as Hill is firing on all cylinders.\n",
    "timestamp": "2022-01-17 06:48 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 3.4,
    "week02": 8.2,
    "week03": 11.0,
    "week04": 5.1,
    "week05": 12.1,
    "week06": 6.8,
    "week07": 2.8,
    "week08": 8.8,
    "week09": 3.5,
    "week10": 4.0,
    "week11": 3.5,
    "week12": "BYE",
    "week13": 1.7,
    "week14": 6.9,
    "week15": 2.1,
    "week16": 10.6,
    "week17": 5.8,
    "week18": 15.3,
    "week19": 6.9,
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.4, 8.2, 11.0, 5.1, 12.1, 6.8, 2.8, 8.8, 3.5, 4.0, 3.5, 'BYE', 1.7, 6.9, 2.1, 10.6, 5.8, 15.3, 6.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.6, 6.3, 5.3, 4.7, 7.6, 13.7, 11.5, 6.6, 8.5, 4.7, 4.6, 'BYE', 3.3, 2.3, 1.4, 3.2, 3.3, 3.3, 3.4, 7.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.3, 0.2, 2.8, 4.0, 6.2, 5.1, 5.3, 5.5, 5.5, 4.3, 7.6, 'BYE', 5.2, 0.9, 1.5, 1.3, 1.7, 2.3, 3.0, 2.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.9, 10.9, 9.3, 10.5, 12.7, 10.5, 9.5, 9.1, 9.8, 8.3, 11.8, 'BYE', 9.2, 7.8, 8.1, 9.3, 8.9, 9.5, 13.4, 13.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2310331.png",
    "name": "Tyler Johnson",
    "depthchart": "Backup: WR-2",
    "team": "Tampa Bay Buccaneers",
    "projected": 6.5,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank_Neu": 20,
    "team_rank_Pos": 1,
    "avg_fp2": 3.08,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 27.65,
    "fanduelSalary": "$5000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A31D2F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(163, 29, 47, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A31D2F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Tyler Johnson caught 2-of-3 targets for 30 yards in Tampa's Wild Card win over Philadelphia.\u00a0\n",
    "report": "",
    "analysis": "The one ball he didn't catch led to a tongue-lashing from Brady, who expected him to run full speed on a crossing route. In our opinion it's not great for your prospects when you are out-targeted by a running back who just came off IR in your first playoff game. Johnson will be a risky DFS punt in the Divisional Round.\u00a0\n",
    "timestamp": "2022-01-16 10:39 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 0.0,
    "week02": 1.0,
    "week03": 7.8,
    "week04": 0.0,
    "week05": 5.7,
    "week06": 0.0,
    "week07": 2.6,
    "week08": 9.0,
    "week09": "BYE",
    "week10": 3.2,
    "week11": 1.3,
    "week12": 1.4,
    "week13": 1.0,
    "week14": 3.2,
    "week15": 6.1,
    "week16": 0.0,
    "week17": 7.0,
    "week18": 4.7,
    "week19": 4.0,
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(163, 29, 47, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 1.0, 7.8, 0.0, 5.7, 0.0, 2.6, 9.0, 'BYE', 3.2, 1.3, 1.4, 1.0, 3.2, 6.1, 0.0, 7.0, 4.7, 4.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [-0.4, 0.2, 4.9, 3.1, 1.6, 1.9, 5.0, 5.6, 'BYE', 5.4, 2.9, 5.5, 4.9, 1.0, 3.9, 4.1, 1.9, 4.4, 7.4, 6.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.6, 2.8, 1.0, 1.0, 0.3, 0.3, 'BYE', 2.7, 0.3, 0.6, 1.0, 0.0, 0.8, 0.6, 2.5, 0.0, 1.1, 1.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(163, 29, 47, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [5.2, 5.1, 2.3, 5.8, 2.8, 2.1, 4.5, 3.8, 'BYE', 6.0, 4.1, 5.1, 5.8, 2.2, 4.6, 5.7, 5.6, 3.9, 6.4, 6.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13982.png",
    "name": "Julio Jones",
    "depthchart": "Backup: WR-2",
    "team": "Tennessee Titans",
    "projected": 6.2,
    "opponent": "Cincinnati Bengals",
    "home_away": "",
    "opp_rank_Pos": 27,
    "team_rank_Neg": 27,
    "avg_fp2": 5.06,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 28.38,
    "fanduelSalary": "$5600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#4495D1",
    "tmColorDark": "#002A5C",
    "tmColorLite_rgba": "rgba(68, 149, 209, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 92, 0.2)",
    "tmTextLite": "#4495D1",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png",
    "headlineNews": "Julio Jones caught 5-of-9 targets for 58 yards and a touchdown in the Titans' Week 18 win over the Texans.\n",
    "report": "",
    "analysis": "Ryan Tannehill looked Jones' way early and often in Week 18, and he led the Titans in targets (nine) in a pivotal divisional showdown. Jones secured the game-winning touchdown \u2013 his first score of the season! \u2013 with seven minutes to go in the fourth quarter to put the Titans up 28-18 and thrust a dagger into the hearts of the upstart Texans. A.J. Brown is the alpha in this Tennessee offense, but Jones will need to play a big role if the Titans want to make a deep postseason run.\n",
    "timestamp": "2022-01-09 09:29 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 4.4,
    "week02": 15.8,
    "week03": 6.2,
    "week04": "DNP",
    "week05": "DNP",
    "week06": 7.4,
    "week07": 4.8,
    "week08": "DNP",
    "week09": 5.5,
    "week10": "DNP",
    "week11": "DNP",
    "week12": "DNP",
    "week13": "BYE",
    "week14": 5.3,
    "week15": 0.0,
    "week16": 1.2,
    "week17": "DNP",
    "week18": 14.3,
    "week19": "DNP",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.4, 15.8, 6.2, 'DNP', 'DNP', 7.4, 4.8, 'DNP', 5.5, 'DNP', 'DNP', 'DNP', 'BYE', 5.3, 0.0, 1.2, 'DNP', 14.3, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.0, 3.9, 8.0, 'DNP', 'DNP', 6.7, 4.8, 'DNP', 6.8, 'DNP', 'DNP', 'DNP', 'BYE', 12.0, 9.9, 5.2, 'DNP', 9.6, 'DNP', 6.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.5, 6.4, 9.9, 'DNP', 'DNP', 8.0, 11.8, 'DNP', 6.9, 'DNP', 'DNP', 'DNP', 'BYE', 7.6, 6.2, 2.4, 'DNP', 10.9, 'DNP', 4.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [30.9, 24.5, 21.8, 'DNP', 'DNP', 18.0, 18.2, 'DNP', 17.2, 'DNP', 'DNP', 'DNP', 'BYE', 18.5, 16.7, 12.4, 'DNP', 21.3, 'DNP', 15.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3886598.png",
    "name": "Jauan Jennings",
    "depthchart": "Reserve: WR-3",
    "team": "San Francisco 49ers",
    "projected": 5.8,
    "opponent": "Green Bay Packers",
    "home_away": "at ",
    "opp_rank_Neu": 9,
    "team_rank_Neu": 12,
    "avg_fp2": 3.05,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 28.46,
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
    "headlineNews": "Jauan Jennings caught 6-of-7 targets for 94 yards and two touchdowns in the 49ers' Week 18 win against the Rams.\u00a0\n",
    "report": "",
    "analysis": "Jennings, a Kyle Shanahan favorite for his blocking prowess, benefited from three quarters of negative game script that forced the 49ers out of their preferred run-heavy offense. Jennings tied for the team lead in targets and has an impressive 34-yard gain in the fourth quarter that set up a late touchdown for San Francisco. His extremely physical play is a perfect fit for the Niners offense. Jennings remains fourth or fifth in the team's pass catching pecking order though.\u00a0\n",
    "timestamp": "2022-01-10 03:08 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 0.0,
    "week02": 8.7,
    "week03": 0.0,
    "week04": 1.9,
    "week05": "DNP",
    "week06": "BYE",
    "week07": "DNP",
    "week08": 0.0,
    "week09": 0.0,
    "week10": 0.8,
    "week11": 0.9,
    "week12": 9.4,
    "week13": 1.3,
    "week14": 6.1,
    "week15": 10.3,
    "week16": 2.9,
    "week17": 3.5,
    "week18": 24.4,
    "week19": 4.4,
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 8.7, 0.0, 1.9, 'DNP', 'BYE', 'DNP', 0.0, 0.0, 0.8, 0.9, 9.4, 1.3, 6.1, 10.3, 2.9, 3.5, 24.4, 4.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.0, -0.2, 1.0, 1.4, 'DNP', 'BYE', 'DNP', -1.6, 0.1, 2.3, 2.6, 5.1, 2.7, 1.6, 5.2, 5.4, 5.4, 4.1, 5.5, 5.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.0, 0.0, 'DNP', 'BYE', 'DNP', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [5.6, 1.1, 5.3, 4.2, 'DNP', 'BYE', 'DNP', 3.9, 1.3, 1.1, 1.2, 1.0, 3.4, 4.2, 4.8, 5.7, 7.5, 5.9, 11.2, 11.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3930066.png",
    "name": "Van Jefferson",
    "depthchart": "Reserve: WR-3",
    "team": "Los Angeles Rams",
    "projected": 5.6,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "at ",
    "opp_rank_Neu": 22,
    "team_rank_Pos": 5,
    "avg_fp2": 8.69,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 28.13,
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
    "headlineNews": "Van Jefferson caught his only target for 41 yards in the Rams' Wild Card win over the Cardinals.\n",
    "report": "",
    "analysis": "Matthew Stafford attempted a season-low 17 passes, but Jefferson made the most of his one look, reeling in a deep shot for 41 yards. With Cooper Kupp and Odell Beckham solidifying themselves as the Rams' top two wideouts, Jefferson is a big-play specialist WR3. He'll face the Bucs' leaky secondary in the Divisional Round next Sunday.\n",
    "timestamp": "2022-01-18 05:38 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 15.0,
    "week02": 1.9,
    "week03": 6.2,
    "week04": 18.0,
    "week05": 2.1,
    "week06": 3.4,
    "week07": 12.3,
    "week08": 10.3,
    "week09": 5.6,
    "week10": 6.9,
    "week11": "BYE",
    "week12": 16.8,
    "week13": 13.1,
    "week14": 13.8,
    "week15": 4.3,
    "week16": 1.1,
    "week17": 8.3,
    "week18": 4.1,
    "week19": 4.6,
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [15.0, 1.9, 6.2, 18.0, 2.1, 3.4, 12.3, 10.3, 5.6, 6.9, 'BYE', 16.8, 13.1, 13.8, 4.3, 1.1, 8.3, 4.1, 4.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.6, 7.4, 5.5, 5.6, 5.9, 6.6, 2.8, 5.2, 8.1, 6.1, 'BYE', 9.7, 7.1, 7.0, 10.4, 7.9, 9.0, 6.9, 7.5, 5.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.0, 1.7, 1.7, 0.0, 0.4, 1.3, 6.1, 9.4, 'BYE', 2.6, 8.6, 14.2, 9.0, 6.8, 4.6, 8.3, 10.6, 8.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.4, 11.8, 4.0, 5.4, 3.9, 7.6, 6.0, 8.2, 11.6, 13.1, 'BYE', 9.0, 18.0, 17.5, 14.6, 9.2, 7.3, 13.0, 16.0, 14.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3128390.png",
    "name": "Allen Lazard",
    "depthchart": "Backup: WR-2",
    "team": "Green Bay Packers",
    "projected": 5.5,
    "opponent": "San Francisco 49ers",
    "home_away": "",
    "opp_rank_Neg": 5,
    "team_rank_Neu": 9,
    "avg_fp2": 7.18,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 29.65,
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
    "headlineNews": "Allen Lazard caught 5-of-6 targets for 75 yards and two touchdowns in Green Bay's Week 18 loss to Detroit.\n",
    "report": "",
    "analysis": "Lazard flourished with Marquez Valdes-Scantling (back) knocked out of the game early, hauling in a 29- and one-yard touchdown in the first half before riding the pine with Aaron Rodgers, Davante Adams, A.J. Dillon, and the rest of the team's starters after the intermission. MVS will have two weeks to heal before the Packers take the field again, but Lazard would be called upon for an increased role in the Divisional Round if the former is unable to return at full strength.\n",
    "timestamp": "2022-01-10 02:10 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 2.6,
    "week02": 0.0,
    "week03": 4.7,
    "week04": 4.3,
    "week05": 1.6,
    "week06": 10.2,
    "week07": 14.5,
    "week08": "DNP",
    "week09": 8.5,
    "week10": 1.1,
    "week11": "DNP",
    "week12": 2.3,
    "week13": "BYE",
    "week14": 17.9,
    "week15": 3.8,
    "week16": 12.8,
    "week17": 16.2,
    "week18": 22.0,
    "week19": "DNP",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.6, 0.0, 4.7, 4.3, 1.6, 10.2, 14.5, 'DNP', 8.5, 1.1, 'DNP', 2.3, 'BYE', 17.9, 3.8, 12.8, 16.2, 22.0, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [0.7, 6.2, 2.0, 4.9, 2.7, 5.8, 7.4, 'DNP', 3.3, 2.6, 'DNP', 2.9, 'BYE', 3.7, 7.0, 6.5, 5.2, 11.5, 'DNP', 5.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.4, 1.2, 5.0, 12.1, 2.2, 0.1, 0.5, 'DNP', 10.1, 4.1, 'DNP', 1.7, 'BYE', 1.4, 1.2, 4.2, 4.4, 3.4, 'DNP', 6.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.1, 14.4, 14.9, 15.6, 4.9, 6.0, 8.0, 'DNP', 17.7, 9.6, 'DNP', 6.9, 'BYE', 8.5, 9.6, 12.1, 9.7, 12.8, 'DNP', 13.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3929785.png",
    "name": "Nick Westbrook-Ikhine",
    "depthchart": "Reserve: WR-3",
    "team": "Tennessee Titans",
    "projected": 5.2,
    "opponent": "Cincinnati Bengals",
    "home_away": "",
    "opp_rank_Pos": 27,
    "team_rank_Neg": 27,
    "avg_fp2": 4.85,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 28.38,
    "fanduelSalary": "$5100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#4495D1",
    "tmColorDark": "#002A5C",
    "tmColorLite_rgba": "rgba(68, 149, 209, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 92, 0.2)",
    "tmTextLite": "#4495D1",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png",
    "headlineNews": "Nick Westbrook-Ikhine caught 4-of-5 targets for 78 yards and a touchdown in the Titans' Week 18 win over the Texans.\n",
    "report": "",
    "analysis": "Westbrook-Ikhine was a key piece in a victory that secured the top seed in the AFC for the Titans, and his biggest highlight came via a four-yard touchdown with merely 11 seconds to go in the first half. That put the Titans up 21-0, a deficit that proved too tough for Houston to overcome despite their best efforts. Still,\u00a0Westbrook-Ikhine is the clear WR3 behind A.J. Brown and Julio Jones, so don't expect much in the playoffs despite a strong performance in Week 18.\n",
    "timestamp": "2022-01-09 09:25 PM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": 1.1,
    "week03": 11.3,
    "week04": 4.4,
    "week05": "DNP",
    "week06": 4.2,
    "week07": 0.0,
    "week08": 8.6,
    "week09": 1.9,
    "week10": 1.5,
    "week11": 14.2,
    "week12": 9.5,
    "week13": "BYE",
    "week14": 4.6,
    "week15": 5.2,
    "week16": 4.8,
    "week17": 0.0,
    "week18": 15.8,
    "week19": "DNP",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 1.1, 11.3, 4.4, 'DNP', 4.2, 0.0, 8.6, 1.9, 1.5, 14.2, 9.5, 'BYE', 4.6, 5.2, 4.8, 0.0, 15.8, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', -0.7, 0.6, 5.4, 'DNP', 3.6, 2.5, 0.4, 2.0, 5.3, 4.7, 8.7, 'BYE', 9.7, 7.2, 5.0, 4.0, 5.6, 'DNP', 5.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 0.0, 0.0, 2.0, 'DNP', 0.0, 0.0, 0.2, 1.9, 1.4, 0.8, 0.8, 'BYE', 1.8, 0.5, 1.2, 1.6, 0.8, 'DNP', 2.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 4.4, 2.4, 13.2, 'DNP', 6.6, 6.5, 8.6, 9.8, 8.4, 8.4, 10.3, 'BYE', 9.2, 7.3, 8.5, 8.3, 7.6, 'DNP', 11.3]
                    }
                    
                    ]
               }
            }];



$scope.positionTE = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13229.png",
    "name": "Rob Gronkowski",
    "depthchart": "Starter: TE-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 12.8,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank_Neu": 20,
    "team_rank_Pos": 1,
    "avg_fp2": 11.5,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 9.83,
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
    "headlineNews": "Rob Gronkowski caught 5-of-6 targets for 31 yards and a touchdown in Tampa's Wild Card win over Philadelphia.\n",
    "report": "",
    "analysis": "Gronk was completely uncovered on his touchdown on a goal line play-action look. Three of Gronk's six targets came on the second drive of the game, and he caught two of them for 21 yards. It wasn't quite the dominant target outing some teams out there were hoping for, but Gronkowski looked good and continued to mash as a run blocker. He'll likely be one of the three most valuable tight ends left in the Divisional Round, though Tampa's offensive line injuries are a bit concerning.\u00a0\n",
    "timestamp": "2022-01-16 10:32 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 25.0,
    "week02": 17.9,
    "week03": 7.5,
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": "DNP",
    "week08": 0.0,
    "week09": "BYE",
    "week10": "DNP",
    "week11": 10.1,
    "week12": 15.8,
    "week13": 19.8,
    "week14": 8.7,
    "week15": 3.9,
    "week16": 2.8,
    "week17": 15.0,
    "week18": 17.2,
    "week19": 11.6,
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(163, 29, 47, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [25.0, 17.9, 7.5, 'DNP', 'DNP', 'DNP', 'DNP', 0.0, 'BYE', 'DNP', 10.1, 15.8, 19.8, 8.7, 3.9, 2.8, 15.0, 17.2, 11.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.5, 12.7, 14.9, 'DNP', 'DNP', 'DNP', 'DNP', 8.5, 'BYE', 'DNP', 6.6, 11.0, 5.4, 8.7, 5.4, 8.2, 9.7, 6.9, 16.5, 12.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.0, 0.0, 5.5, 'DNP', 'DNP', 'DNP', 'DNP', 6.2, 'BYE', 'DNP', 7.1, 8.4, 8.8, 6.3, 5.8, 8.6, 7.2, 6.2, 5.9, 6.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(163, 29, 47, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [20.9, 19.4, 15.6, 'DNP', 'DNP', 'DNP', 'DNP', 14.7, 'BYE', 'DNP', 16.2, 20.8, 19.5, 14.3, 16.3, 19.7, 19.6, 20.7, 20.9, 19.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3040151.png",
    "name": "George Kittle",
    "depthchart": "Starter: TE-1",
    "team": "San Francisco 49ers",
    "projected": 11.3,
    "opponent": "Green Bay Packers",
    "home_away": "at ",
    "opp_rank_Neu": 9,
    "team_rank_Neu": 12,
    "avg_fp2": 12.23,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 9.52,
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
    "headlineNews": "George Kittle caught 1-of-3 targets for 18 yards\u00a0in the 49ers' Wild Card round win over the Cowboys.\n",
    "report": "",
    "analysis": "Kittle was not needed as a receiver with the 49ers passing 25 times to 38 rushes against the Cowboys. Kittle's elite blocking ability was in high demand, and he saw only three targets, one of which was tipped at the line of scrimmage. Kittle could get going against the Packers if the 49ers aren't able to execute a similarly run-heavy game plan, but he has a low floor if the 49ers can limit passing volume once again. Despite Kittle's high-end talent as a receiver he is a boom/bust option in the Divisional round.\n",
    "timestamp": "2022-01-17 06:14 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 9.8,
    "week02": 3.7,
    "week03": 13.6,
    "week04": 6.0,
    "week05": "DNP",
    "week06": "BYE",
    "week07": "DNP",
    "week08": "DNP",
    "week09": 17.1,
    "week10": 13.5,
    "week11": 11.4,
    "week12": 1.8,
    "week13": 35.1,
    "week14": 27.6,
    "week15": 12.3,
    "week16": 3.1,
    "week17": 4.0,
    "week18": 3.5,
    "week19": 2.3,
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.8, 3.7, 13.6, 6.0, 'DNP', 'BYE', 'DNP', 'DNP', 17.1, 13.5, 11.4, 1.8, 35.1, 27.6, 12.3, 3.1, 4.0, 3.5, 2.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.4, 8.1, 8.2, 12.3, 'DNP', 'BYE', 'DNP', 'DNP', 4.6, 11.0, 4.0, 6.8, 5.6, 10.1, 4.9, 9.9, 11.0, 5.7, 11.7, 11.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.4, 3.3, 7.7, 10.4, 'DNP', 'BYE', 'DNP', 'DNP', 4.1, 16.4, 15.1, 5.7, 12.2, 7.2, 6.3, 2.9, 16.9, 6.1, 5.6, 5.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.7, 19.2, 17.5, 14.8, 'DNP', 'BYE', 'DNP', 'DNP', 11.6, 24.8, 20.9, 10.5, 26.3, 16.9, 14.1, 12.8, 24.0, 18.9, 14.0, 14.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15847.png",
    "name": "Travis Kelce",
    "depthchart": "Starter: TE-1",
    "team": "Kansas City Chiefs",
    "projected": 10.1,
    "opponent": "Buffalo Bills",
    "home_away": "",
    "opp_rank_Neg": 1,
    "team_rank_Pos": 2,
    "avg_fp2": 13.69,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 6.49,
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
    "headlineNews": "Travis Kelce caught 5-of-7 targets for 108 yards and a touchdown in Kansas City's Wild Card win over the Steelers.\n",
    "report": "",
    "analysis": "Kelce also threw a touchdown pass to Byron Pringle in the fourth quarter, shifting under center for Patrick Mahomes at the goal line and pretending as if he was going take off running up the middle for a score.\u00a0Kelce's 48-yard touchdown reception occurred with 0:13 remaining in the second half as he broke free along the sideline and gave the Chiefs a 21-7 lead headed into the intermission. It was notably his fourth consecutive game with a touchdown. The Chiefs are hoping he continues to rack them up in the Divisional Round against Buffalo.\n",
    "timestamp": "2022-01-17 06:33 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 22.6,
    "week02": 20.4,
    "week03": 13.9,
    "week04": 4.3,
    "week05": 14.7,
    "week06": 13.9,
    "week07": 10.0,
    "week08": 2.7,
    "week09": 15.3,
    "week10": 15.9,
    "week11": 16.3,
    "week12": "BYE",
    "week13": 4.2,
    "week14": 4.2,
    "week15": 36.1,
    "week16": "DNP",
    "week17": 10.9,
    "week18": 11.4,
    "week19": 23.38,
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [22.6, 20.4, 13.9, 4.3, 14.7, 13.9, 10.0, 2.7, 15.3, 15.9, 16.3, 'BYE', 4.2, 4.2, 36.1, 'DNP', 10.9, 11.4, 23.38]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.6, 12.5, 11.4, 12.5, 7.3, 10.3, 10.4, 12.0, 10.3, 14.7, 15.7, 'BYE', 6.3, 13.7, 11.5, 'DNP', 10.4, 7.2, 11.4, 10.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.1, 6.4, 12.1, 14.1, 7.8, 11.4, 8.4, 10.5, 4.7, 11.2, 10.7, 'BYE', 4.5, 10.1, 10.2, 'DNP', 8.4, 3.6, 4.2, 5.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [20.3, 21.0, 17.5, 24.5, 12.3, 16.3, 14.5, 18.6, 15.6, 18.8, 18.5, 'BYE', 13.3, 21.4, 20.0, 'DNP', 16.4, 11.4, 12.7, 13.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3046704.png",
    "name": "Geoff Swaim",
    "depthchart": "Starter: TE-1",
    "team": "Tennessee Titans",
    "projected": 6.4,
    "opponent": "Cincinnati Bengals",
    "home_away": "",
    "opp_rank_Pos": 27,
    "team_rank_Neg": 27,
    "avg_fp2": 3.59,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 12.56,
    "fanduelSalary": "$4600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#4495D1",
    "tmColorDark": "#002A5C",
    "tmColorLite_rgba": "rgba(68, 149, 209, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 92, 0.2)",
    "tmTextLite": "#4495D1",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png",
    "headlineNews": "Geoff Swaim caught 3-of-4 targets for 45 yards in the Titans' Week 14 win over the Jaguars.\n",
    "report": "",
    "analysis": "Swaim's 45 yards led the Titans. Anthony Firkser had four catches for 34 yards in his own right, but Titans coach Mike Vrabel referred to him as a special teamer last week, so Swaim's position as TE1 isn't in question. Despite that, he's off the fantasy radar in 1-TE leagues, especially with a matchup against a decent Steelers defense on tap in Week 15.\n",
    "timestamp": "2021-12-12 09:53 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 0.0,
    "week02": 2.0,
    "week03": 4.2,
    "week04": 0.0,
    "week05": 0.0,
    "week06": 1.3,
    "week07": 1.3,
    "week08": 10.3,
    "week09": 10.9,
    "week10": 4.6,
    "week11": "DNP",
    "week12": 1.3,
    "week13": "BYE",
    "week14": 6.0,
    "week15": 1.0,
    "week16": 2.5,
    "week17": 8.4,
    "week18": 0.7,
    "week19": "DNP",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 2.0, 4.2, 0.0, 0.0, 1.3, 1.3, 10.3, 10.9, 4.6, 'DNP', 1.3, 'BYE', 6.0, 1.0, 2.5, 8.4, 0.7, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.4, 2.5, 2.2, 2.2, 1.5, 1.6, 1.0, 2.0, 5.9, 3.2, 'DNP', 1.5, 'BYE', 4.5, 0.3, 2.4, 3.9, 4.6, 'DNP', 6.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.0, 5.3, 5.4, 0.4, 1.7, 1.2, 0.5, 0.6, 'DNP', 0.0, 'BYE', 0.5, 0.6, 0.1, 0.8, 2.0, 'DNP', 2.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [5.3, 5.2, 0.8, 8.7, 6.9, 3.2, 3.8, 2.7, 2.4, 5.3, 'DNP', 3.7, 'BYE', 4.5, 4.3, 3.8, 3.6, 6.7, 'DNP', 6.7]
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
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "at ",
    "opp_rank_Neu": 22,
    "team_rank_Pos": 5,
    "avg_fp2": 6.86,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 10.41,
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
    "headlineNews": "Tyler Higbee caught 3-of-4 targets for 46 yards in the Rams' Wild Card win over the Cardinals.\n",
    "report": "",
    "analysis": "Higbee's lone missed connection was a bad drop on third down. With Matthew Stafford attempting a season-low 17 passes in this one, Higbee's four targets tied Odell Beckham for second on the team behind Cooper Kupp's seven. Both OBJ and Kupp scored touchdowns, however. Higbee will be an every-down tight end next week against the Bucs. He went 5-40-1 on five targets against Tampa Bay way back in Week 3.\n",
    "timestamp": "2022-01-18 05:41 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 9.3,
    "week02": 1.3,
    "week03": 12.5,
    "week04": 5.6,
    "week05": 8.4,
    "week06": 6.1,
    "week07": 7.1,
    "week08": 4.0,
    "week09": 7.6,
    "week10": 9.5,
    "week11": "BYE",
    "week12": 0.8,
    "week13": 7.3,
    "week14": "DNP",
    "week15": "DNP",
    "week16": 6.6,
    "week17": 9.9,
    "week18": 20.5,
    "week19": 6.1,
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.3, 1.3, 12.5, 5.6, 8.4, 6.1, 7.1, 4.0, 7.6, 9.5, 'BYE', 0.8, 7.3, 'DNP', 'DNP', 6.6, 9.9, 20.5, 6.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.4, 7.4, 9.3, 4.1, 3.8, 7.0, 8.1, 17.4, 7.3, 4.1, 'BYE', 5.5, 4.2, 'DNP', 'DNP', 5.1, 7.7, 5.4, 3.7, 5.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.4, 1.9, 3.9, 6.5, 7.6, 5.5, 1.4, 4.0, 1.2, 2.5, 'BYE', 3.5, 5.0, 'DNP', 'DNP', 6.4, 5.0, 1.8, 9.0, 10.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.5, 10.5, 7.3, 10.7, 11.8, 6.8, 11.3, 7.5, 9.7, 10.8, 'BYE', 9.2, 8.8, 'DNP', 'DNP', 8.7, 9.4, 5.6, 14.0, 14.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3930086.png",
    "name": "Dawson Knox",
    "depthchart": "Starter: TE-1",
    "team": "Buffalo Bills",
    "projected": 5.2,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Pos": 28,
    "team_rank_Neu": 10,
    "avg_fp2": 9.49,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 10.35,
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
    "headlineNews": "Dawson Knox caught 5-of-5 targets for 89 yards and two touchdowns in the Bills' Wild Card win over the Patriots.\u00a0\n",
    "report": "",
    "analysis": "Knox had a quiet regular season against the Patriots but made up for it tonight, coming within inches of a three-score contest. His touchdowns went for eight and 11 yards, giving the Bills leads of 7-0 and 14-0 in the first quarter of what went on to become a 47-17 massacre. Seemingly always a contributor of touchdowns and big plays when the Bills get into shootouts, Knox can begin prepping for what will probably be a Divisional Round showdown with the Chiefs, and a high-flying one at that. He got Kansas City for a scorching 3/117/1 in the sides' first meeting in Week 5, though both teams have come a long way since then.\u00a0\n",
    "timestamp": "2022-01-16 04:25 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 6.1,
    "week02": 8.7,
    "week03": 12.9,
    "week04": 18.2,
    "week05": 19.2,
    "week06": 6.0,
    "week07": "BYE",
    "week08": "DNP",
    "week09": "DNP",
    "week10": 2.2,
    "week11": 11.0,
    "week12": 16.7,
    "week13": 2.4,
    "week14": 15.5,
    "week15": 5.8,
    "week16": 8.1,
    "week17": 0.0,
    "week18": 6.8,
    "week19": 23.4,
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.1, 8.7, 12.9, 18.2, 19.2, 6.0, 'BYE', 'DNP', 'DNP', 2.2, 11.0, 16.7, 2.4, 15.5, 5.8, 8.1, 0.0, 6.8, 23.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.7, 4.5, 7.2, 5.3, 10.6, 12.9, 'BYE', 'DNP', 'DNP', 9.1, 7.1, 3.1, 3.3, 10.4, 7.5, 4.1, 7.0, 9.1, 6.3, 5.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.1, 0.8, 4.2, 0.1, 11.7, 8.7, 'BYE', 'DNP', 'DNP', 5.4, 8.1, 4.9, 9.6, 0.0, 4.7, 5.8, 1.8, 6.6, 4.0, 4.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.8, 7.7, 5.5, 4.7, 18.1, 17.1, 'BYE', 'DNP', 'DNP', 9.8, 15.2, 8.9, 15.1, 5.6, 13.1, 12.7, 7.7, 14.3, 8.6, 9.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3049698.png",
    "name": "Anthony Firkser",
    "depthchart": "Backup: TE-2",
    "team": "Tennessee Titans",
    "projected": 4.7,
    "opponent": "Cincinnati Bengals",
    "home_away": "",
    "opp_rank_Pos": 27,
    "team_rank_Neg": 27,
    "avg_fp2": 3.04,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 12.56,
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
    "headlineNews": "Anthony Firkser caught all four of his targets for 56 yards and a touchdown in the Titans' Week 18 win over the Texans.\n",
    "report": "",
    "analysis": "Firkser was a beneficiary of Ryan Tannehill's scorching four-touchdown day, but he still only had four targets on 32 team passing attempts. The efficiency is good to see, but Firkser is a committee tight end on a run-heavy team, so don't get too excited about his productive Week 18. The Titans head into the playoffs with the top seed in the AFC and the first-round bye that comes with it.\n",
    "timestamp": "2022-01-09 09:35 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 3.4,
    "week02": "DNP",
    "week03": "DNP",
    "week04": 3.8,
    "week05": 4.8,
    "week06": 1.6,
    "week07": 1.4,
    "week08": 1.3,
    "week09": 1.2,
    "week10": 0.7,
    "week11": 5.1,
    "week12": 1.2,
    "week13": "BYE",
    "week14": 5.4,
    "week15": 0.9,
    "week16": 1.8,
    "week17": 9.9,
    "week18": 13.6,
    "week19": "DNP",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.4, 'DNP', 'DNP', 3.8, 4.8, 1.6, 1.4, 1.3, 1.2, 0.7, 5.1, 1.2, 'BYE', 5.4, 0.9, 1.8, 9.9, 13.6, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.1, 'DNP', 'DNP', 6.4, 9.3, 9.0, 10.4, 4.8, 1.8, 3.0, 4.4, 1.1, 'BYE', 1.7, -0.0, 0.5, 1.5, 1.0, 'DNP', 4.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 'DNP', 'DNP', 2.9, 3.8, 0.2, 0.0, 4.8, 6.1, 2.4, 4.0, 4.9, 'BYE', 3.3, 4.4, 1.5, 1.9, 3.4, 'DNP', 6.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [6.3, 'DNP', 'DNP', 4.6, 4.8, 6.9, 7.5, 6.7, 8.7, 4.3, 7.3, 7.1, 'BYE', 4.8, 7.1, 3.9, 3.8, 8.2, 'DNP', 8.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2574576.png",
    "name": "C.J. Uzomah",
    "depthchart": "Starter: TE-1",
    "team": "Cincinnati Bengals",
    "projected": 4.3,
    "opponent": "Tennessee Titans",
    "home_away": "at ",
    "opp_rank_Neu": 23,
    "team_rank_Neu": 7,
    "avg_fp2": 6.49,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 7.03,
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
    "headlineNews": "C.J. Uzomah caught 6-of-6 targets for 64 yards and a touchdown in the Bengals' Super Wild Card Weekend win against the Raiders.\u00a0\n",
    "report": "",
    "analysis": "Uzomah took full advantage of a Raiders team that has given up intermediate receptions to tight ends and slot receivers all year. An enormous red zone target for Joe Burrow, Uzomah often finds himself in single coverage as defenses focus on Tee Higgins, Ja'Marr Chase, and Tyler Boyd. He'll continue to be a sneaky DFS option in the pass-heavy Bengals offense.\u00a0\n",
    "timestamp": "2022-01-16 01:02 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 4.5,
    "week02": 1.4,
    "week03": 0.0,
    "week04": 24.0,
    "week05": 2.6,
    "week06": 9.0,
    "week07": 22.6,
    "week08": 5.3,
    "week09": 4.4,
    "week10": "BYE",
    "week11": 1.9,
    "week12": 2.4,
    "week13": 3.5,
    "week14": 7.6,
    "week15": 3.3,
    "week16": 6.1,
    "week17": 5.2,
    "week18": "DNP",
    "week19": 15.4,
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.5, 1.4, 0.0, 24.0, 2.6, 9.0, 22.6, 5.3, 4.4, 'BYE', 1.9, 2.4, 3.5, 7.6, 3.3, 6.1, 5.2, 'DNP', 15.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.7, 7.5, 9.2, 4.3, 13.0, 3.5, 5.9, 7.6, 13.5, 'BYE', 11.3, 5.0, 6.8, 2.3, 3.8, 6.7, 5.7, 'DNP', 7.0, 4.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.7, 1.1, 2.1, 1.4, 2.8, 2.3, 2.6, 10.8, 1.0, 'BYE', 1.1, 1.8, 4.1, 3.7, 4.4, 1.5, 3.8, 'DNP', 2.4, 0.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.5, 7.7, 5.2, 4.2, 4.2, 7.4, 8.0, 18.9, 7.7, 'BYE', 8.1, 4.4, 8.1, 6.9, 7.3, 7.7, 6.9, 'DNP', 9.0, 6.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4240472.png",
    "name": "Noah Gray",
    "depthchart": "Backup: TE-2",
    "team": "Kansas City Chiefs",
    "projected": 3.0,
    "opponent": "Buffalo Bills",
    "home_away": "",
    "opp_rank_Neg": 1,
    "team_rank_Pos": 2,
    "avg_fp2": 0.87,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 6.49,
    "fanduelSalary": "$4200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Noah Gray caught both of his targets for 12 yards in the Chiefs' Week 16 win against the Steelers.\u00a0\n",
    "report": "",
    "analysis": "Gray led the Chiefs in tight end targets with Travis Kelce (COVID-19) sidelined. He'll return to his role as KC's nominal TE2 when Kelce returns next week against the Bengals.\u00a0\n",
    "timestamp": "2021-12-27 01:49 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 0.0,
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": 0.0,
    "week07": 0.9,
    "week08": 0.0,
    "week09": 0.0,
    "week10": 6.6,
    "week11": 1.3,
    "week12": "BYE",
    "week13": 0.0,
    "week14": 0.0,
    "week15": 0.0,
    "week16": 2.2,
    "week17": 1.1,
    "week18": 0.0,
    "week19": 0.0,
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 'DNP', 'DNP', 'DNP', 'DNP', 0.0, 0.9, 0.0, 0.0, 6.6, 1.3, 'BYE', 0.0, 0.0, 0.0, 2.2, 1.1, 0.0, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.4, 'DNP', 'DNP', 'DNP', 'DNP', 0.6, 4.2, 2.3, 1.8, 3.4, 2.2, 'BYE', 2.7, 3.7, 2.4, 1.3, 3.1, -0.3, 1.0, 3.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 'DNP', 'DNP', 'DNP', 'DNP', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 'BYE', 0.0, 3.6, 4.0, 0.0, 0.0, 0.0, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [5.9, 'DNP', 'DNP', 'DNP', 'DNP', 5.0, 3.7, 0.9, 0.8, 0.5, 3.3, 'BYE', 1.0, 8.0, 7.9, 2.6, 3.1, 2.9, 2.7, 2.6]
                    }
                    
                    ]
               }
            }];



$scope.positionK = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/12731.png",
    "name": "Ryan Succop",
    "depthchart": "Starter: K-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 8.8,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank_Neu": 21,
    "team_rank_Neu": 22,
    "avg_fp2": 7.88,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 8.38,
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
    "week07": 8.0,
    "week08": 3.0,
    "week09": "BYE",
    "week10": 7.0,
    "week11": 13.0,
    "week12": 8.0,
    "week13": 6.0,
    "week14": 9.0,
    "week15": 0.0,
    "week16": 16.0,
    "week17": 8.0,
    "week18": 12.0,
    "week19": 7.0,
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(163, 29, 47, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.0, 6.0, 6.0, 15.0, 10.0, 4.0, 8.0, 3.0, 'BYE', 7.0, 13.0, 8.0, 6.0, 9.0, 0.0, 16.0, 8.0, 12.0, 7.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.1, 8.6, 6.5, 6.7, 10.1, 8.8, 8.1, 8.2, 'BYE', 7.8, 9.0, 6.5, 8.4, 6.1, 9.4, 7.7, 9.2, 9.2, 6.0, 8.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.0, 3.9, 3.8, 7.9, 5.4, 6.5, 6.2, 7.5, 'BYE', 6.5, 4.0, 4.8, 7.8, 5.3, 7.5, 9.3, 9.2, 6.0, 5.8, 5.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(163, 29, 47, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.0, 12.1, 7.5, 11.0, 8.7, 9.8, 9.9, 12.3, 'BYE', 10.5, 9.9, 8.3, 11.2, 9.6, 9.5, 14.3, 15.2, 9.0, 8.9, 10.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3055899.png",
    "name": "Harrison Butker",
    "depthchart": "Starter: K-1",
    "team": "Kansas City Chiefs",
    "projected": 8.5,
    "opponent": "Buffalo Bills",
    "home_away": "",
    "opp_rank_Neg": 5,
    "team_rank_Neu": 13,
    "avg_fp2": 8.67,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 6.33,
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
    "headlineNews": "Chiefs activated Harrison Butker from the reserve/COVID-19 list.\n",
    "report": "",
    "analysis": "The Chiefs also activated\u00a0CB Rashad Fenton, S Armani Watts, and P Tommy Townsend. Kansas City no longer has anyone on the COVID list. In a high-scoring affair with the Bengals, Butker is a plug-and-play fantasy option.\n",
    "timestamp": "2021-12-29 07:35 PM",
    "source": "Pete Sweeney on Twitter",
    "game_day_logo": "",
    "week01": 10.0,
    "week02": 5.0,
    "week03": 6.0,
    "week04": 6.0,
    "week05": 10.0,
    "week06": 9.0,
    "week07": 4.0,
    "week08": 8.0,
    "week09": 9.0,
    "week10": 12.0,
    "week11": 9.0,
    "week12": "BYE",
    "week13": 13.0,
    "week14": 14.0,
    "week15": 8.0,
    "week16": "DNP",
    "week17": 7.0,
    "week18": 10.0,
    "week19": 6.0,
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.0, 5.0, 6.0, 6.0, 10.0, 9.0, 4.0, 8.0, 9.0, 12.0, 9.0, 'BYE', 13.0, 14.0, 8.0, 'DNP', 7.0, 10.0, 6.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.3, 9.0, 10.0, 7.1, 5.6, 8.7, 7.9, 8.0, 6.1, 7.9, 7.2, 'BYE', 5.7, 8.5, 8.7, 'DNP', 8.2, 7.4, 8.7, 8.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.2, 6.1, 7.9, 3.9, 9.4, 10.2, 6.0, 6.9, 6.8, 8.1, 5.0, 'BYE', 7.7, 8.0, 8.1, 'DNP', 8.9, 8.1, 9.9, 6.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.9, 14.0, 10.8, 9.1, 11.3, 11.9, 8.4, 11.3, 8.8, 10.1, 8.9, 'BYE', 12.2, 12.6, 11.5, 'DNP', 12.6, 13.0, 14.7, 10.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15091.png",
    "name": "Randy Bullock",
    "depthchart": "Starter: K-1",
    "team": "Tennessee Titans",
    "projected": 8.0,
    "opponent": "Cincinnati Bengals",
    "home_away": "",
    "opp_rank_Neu": 11,
    "team_rank_Neu": 13,
    "avg_fp2": 8.4,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 7.19,
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
    "week07": 11.0,
    "week08": 12.0,
    "week09": 4.0,
    "week10": 11.0,
    "week11": 1.0,
    "week12": 1.0,
    "week13": "BYE",
    "week14": 9.0,
    "week15": 7.0,
    "week16": 9.0,
    "week17": 11.0,
    "week18": 4.0,
    "week19": "DNP",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 15.0, 5.0, 12.0, 7.0, 11.0, 11.0, 12.0, 4.0, 11.0, 1.0, 1.0, 'BYE', 9.0, 7.0, 9.0, 11.0, 4.0, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 7.8, 8.0, 12.8, 10.2, 7.3, 9.2, 7.6, 8.5, 8.2, 9.3, 7.6, 'BYE', 8.8, 7.9, 7.8, 8.3, 8.8, 'DNP', 8.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 4.3, 3.3, 8.3, 9.2, 6.9, 3.7, 4.1, 7.2, 4.8, 6.7, 5.8, 'BYE', 4.6, 7.8, 5.1, 6.2, 8.1, 'DNP', 7.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 11.7, 7.3, 10.4, 12.7, 10.9, 7.3, 8.3, 10.7, 10.0, 9.5, 9.9, 'BYE', 8.2, 12.7, 10.1, 10.4, 12.0, 'DNP', 13.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4249087.png",
    "name": "Matt Gay",
    "depthchart": "Starter: K-1",
    "team": "Los Angeles Rams",
    "projected": 7.9,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "at ",
    "opp_rank_Neu": 15,
    "team_rank_Pos": 6,
    "avg_fp2": 9.5,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 7.31,
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
    "week07": 9.0,
    "week08": 8.0,
    "week09": 12.0,
    "week10": 4.0,
    "week11": "BYE",
    "week12": 8.0,
    "week13": 15.0,
    "week14": 14.0,
    "week15": 10.0,
    "week16": 12.0,
    "week17": 2.0,
    "week18": 7.0,
    "week19": 11.0,
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.0, 9.0, 11.0, 9.0, 9.0, 8.0, 9.0, 8.0, 12.0, 4.0, 'BYE', 8.0, 15.0, 14.0, 10.0, 12.0, 2.0, 7.0, 11.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.4, 9.1, 10.3, 8.2, 11.0, 9.2, 11.5, 9.8, 9.2, 8.0, 'BYE', 5.3, 9.4, 8.2, 9.3, 10.3, 7.4, 8.5, 9.1, 7.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.0, 5.4, 7.2, 7.4, 10.5, 8.9, 9.3, 7.9, 9.1, 6.4, 'BYE', 5.6, 7.4, 6.0, 7.9, 7.1, 7.2, 6.9, 6.3, 7.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.9, 12.5, 10.0, 10.0, 13.9, 11.3, 11.5, 10.0, 11.7, 8.9, 'BYE', 8.5, 11.2, 9.6, 12.2, 10.7, 11.8, 11.3, 10.4, 11.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4360234.png",
    "name": "Evan McPherson",
    "depthchart": "Starter: K-1",
    "team": "Cincinnati Bengals",
    "projected": 7.8,
    "opponent": "Tennessee Titans",
    "home_away": "at ",
    "opp_rank_Pos": 24,
    "team_rank_Neu": 8,
    "avg_fp2": 9.62,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 8.12,
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
    "week07": 13.0,
    "week08": 7.0,
    "week09": 4.0,
    "week10": "BYE",
    "week11": 21.0,
    "week12": 13.0,
    "week13": 5.0,
    "week14": 12.0,
    "week15": 13.0,
    "week16": 11.0,
    "week17": 11.0,
    "week18": "DNP",
    "week19": 15.0,
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.0, 7.0, 7.0, 6.0, 2.0, 11.0, 13.0, 7.0, 4.0, 'BYE', 21.0, 13.0, 5.0, 12.0, 13.0, 11.0, 11.0, 'DNP', 15.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.6, 8.7, 11.3, 10.6, 7.2, 9.8, 5.9, 11.4, 8.0, 'BYE', 8.1, 8.6, 10.3, 7.1, 8.2, 7.8, 8.1, 'DNP', 9.1, 7.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.6, 5.0, 6.3, 5.8, 3.8, 5.7, 3.2, 4.2, 6.2, 'BYE', 5.8, 4.8, 3.5, 3.7, 5.9, 6.0, 5.8, 'DNP', 4.7, 7.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.6, 12.8, 13.3, 11.9, 9.9, 12.4, 9.8, 11.7, 11.5, 'BYE', 8.7, 15.3, 11.5, 9.9, 13.0, 13.5, 13.2, 'DNP', 14.6, 12.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3917232.png",
    "name": "Tyler Bass",
    "depthchart": "Starter: K-1",
    "team": "Buffalo Bills",
    "projected": 7.6,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Neg": 4,
    "team_rank_Neu": 13,
    "avg_fp2": 8.31,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 6.19,
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
    "week01": 11.0,
    "week02": 5.0,
    "week03": 14.0,
    "week04": 16.0,
    "week05": 8.0,
    "week06": 13.0,
    "week07": "BYE",
    "week08": 10.0,
    "week09": 7.0,
    "week10": 9.0,
    "week11": 1.0,
    "week12": 7.0,
    "week13": 4.0,
    "week14": 9.0,
    "week15": 7.0,
    "week16": 9.0,
    "week17": 3.0,
    "week18": 10.0,
    "week19": 5.0,
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.0, 5.0, 14.0, 16.0, 8.0, 13.0, 'BYE', 10.0, 7.0, 9.0, 1.0, 7.0, 4.0, 9.0, 7.0, 9.0, 3.0, 10.0, 5.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.4, 9.8, 12.5, 8.1, 8.9, 8.7, 'BYE', 10.9, 10.2, 11.8, 9.3, 9.3, 6.9, 6.8, 7.7, 8.5, 8.8, 11.5, 7.4, 7.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.7, 8.1, 9.0, 7.1, 3.5, 9.2, 'BYE', 9.4, 12.4, 7.2, 6.6, 11.8, 3.5, 7.0, 7.7, 4.4, 8.6, 7.1, 5.3, 8.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.8, 14.0, 11.0, 12.1, 13.6, 13.6, 'BYE', 15.1, 17.6, 11.9, 11.7, 13.3, 5.0, 8.9, 11.5, 8.1, 12.0, 12.4, 8.4, 11.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/10636.png",
    "name": "Mason Crosby",
    "depthchart": "Starter: K-1",
    "team": "Green Bay Packers",
    "projected": 7.0,
    "opponent": "San Francisco 49ers",
    "home_away": "",
    "opp_rank_Neg": 5,
    "team_rank_Neu": 21,
    "avg_fp2": 8.12,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 6.5,
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
    "week07": 6.0,
    "week08": 6.0,
    "week09": 1.0,
    "week10": 5.0,
    "week11": 9.0,
    "week12": 13.0,
    "week13": "BYE",
    "week14": 9.0,
    "week15": 7.0,
    "week16": 6.0,
    "week17": 13.0,
    "week18": 4.0,
    "week19": "DNP",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.0, 5.0, 16.0, 9.0, 16.0, 6.0, 6.0, 6.0, 1.0, 5.0, 9.0, 13.0, 'BYE', 9.0, 7.0, 6.0, 13.0, 4.0, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.3, 8.0, 5.0, 11.3, 7.1, 9.0, 10.8, 7.2, 8.0, 8.6, 9.2, 7.0, 'BYE', 10.0, 5.6, 8.3, 10.1, 9.7, 'DNP', 7.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.5, 4.6, 6.2, 10.8, 6.1, 8.2, 7.5, 5.6, 6.8, 7.9, 8.2, 6.6, 'BYE', 9.4, 6.9, 7.8, 8.8, 10.4, 'DNP', 5.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.9, 13.8, 10.4, 13.4, 10.3, 12.3, 11.6, 9.9, 9.7, 13.7, 13.4, 11.8, 'BYE', 13.6, 11.5, 12.1, 13.3, 14.8, 'DNP', 13.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/9354.png",
    "name": "Robbie Gould",
    "depthchart": "Starter: K-1",
    "team": "San Francisco 49ers",
    "projected": 5.7,
    "opponent": "Green Bay Packers",
    "home_away": "at ",
    "opp_rank_Neg": 1,
    "team_rank_Neu": 16,
    "avg_fp2": 8.5,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 5.94,
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
    "week01": 14.0,
    "week02": 6.0,
    "week03": 4.0,
    "week04": "DNP",
    "week05": "DNP",
    "week06": "BYE",
    "week07": "DNP",
    "week08": "DNP",
    "week09": 5.0,
    "week10": 9.0,
    "week11": 14.0,
    "week12": 11.0,
    "week13": 7.0,
    "week14": 8.0,
    "week15": 7.0,
    "week16": 6.0,
    "week17": 11.0,
    "week18": 10.0,
    "week19": 16.0,
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.0, 6.0, 4.0, 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 5.0, 9.0, 14.0, 11.0, 7.0, 8.0, 7.0, 6.0, 11.0, 10.0, 16.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.1, 11.0, 8.8, 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 6.2, 7.0, 8.5, 9.0, 9.1, 8.0, 8.5, 8.8, 9.1, 8.1, 8.8, 5.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.0, 5.0, 6.0, 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 5.6, 5.8, 7.2, 6.6, 7.9, 6.6, 8.5, 7.2, 6.7, 6.3, 7.8, 3.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.7, 12.7, 9.9, 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 10.1, 10.6, 11.9, 11.2, 12.3, 10.9, 13.3, 12.0, 11.9, 11.9, 12.3, 8.5]
                    }
                    
                    ]
               }
            }];



$scope.positionDST = [{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/KC.png",
    "name": "Kansas City Chiefs",
    "depthchart": "",
    "team": "Kansas City Chiefs",
    "projected": 5.8,
    "opponent": "Buffalo Bills",
    "opp_rank_pts": 3,
    "opp_avg_pts": 0.0,
    "home_away": "",
    "team_rank_allowed_pts": 10,
    "team_avg_allowed_pts": 20.62,
    "team_ranked_takeaways": 5,
    "team_avg_takeaways": 1.75,
    "opp_ranked_giveaways": 17,
    "opp_avg_giveaways": 1.38,
    "fanduelSalary": "$3700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmTextLite": "#FFB81C",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Chiefs signed CB\u00a0Damon Arnette to a reserve/future contract.\u00a0\n",
    "report": "",
    "analysis": "The 2020 mega-bust failed to land a futures deal with the Dolphins after joining the practice squad in December, but one of his former division rivals is giving him a second chance after the Raiders cut him in November. Arnette was waived for posting a disturbing video on social media, but his awful play on the field was why the Raiders were willing to cut ties instead of giving Arnette the second and third chances former first-rounders typically get. Slow (4.56) and extremely old (24) for a first-round corner at the time of his drafting, Arnette's selection was widely first guessed. It is difficult to see him cracking the Chiefs' 53-man roster this summer.\u00a0\u00a0\n",
    "timestamp": "",
    "source": "Field Yates on Twitter ",
    "game_day_logo": "",
    "avg_fp2": 6.22,
    "week01": 5.0,
    "week02": 1.0,
    "week03": 0.0,
    "week04": 2.0,
    "week05": -1.0,
    "week06": 8.0,
    "week07": 3.0,
    "week08": 6.0,
    "week09": 11.0,
    "week10": 7.0,
    "week11": 15.0,
    "week12": "BYE",
    "week13": 11.0,
    "week14": 18.0,
    "week15": 3.0,
    "week16": 12.0,
    "week17": 3.0,
    "week18": 3.0,
    "week19": 5.0,
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.0, 1.0, 0.0, 2.0, -1.0, 8.0, 3.0, 6.0, 11.0, 7.0, 15.0, 'BYE', 11.0, 18.0, 3.0, 12.0, 3.0, 3.0, 5.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.5, 3.3, 6.5, 2.5, 1.7, 4.2, 2.1, 2.3, 3.7, 2.8, 4.6, 'BYE', 8.0, 7.3, 2.9, 7.6, 4.1, 4.8, 6.1, 5.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.3, 3.0, 4.4, 1.3, 0.0, 1.6, 0.6, 0.7, 0.4, 0.0, 0.8, 'BYE', 0.8, 2.1, 0.5, 2.2, 0.3, 2.1, 2.6, 2.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.4, 14.5, 9.9, 8.8, 7.4, 11.2, 7.9, 8.9, 7.0, 7.2, 7.7, 'BYE', 11.5, 11.2, 8.2, 9.3, 7.7, 9.5, 9.7, 9.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/BUF.png",
    "name": "Buffalo Bills",
    "depthchart": "",
    "team": "Buffalo Bills",
    "projected": 5.4,
    "opponent": "Kansas City Chiefs",
    "opp_rank_pts": 4,
    "opp_avg_pts": 0.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 3,
    "team_avg_allowed_pts": 16.88,
    "team_ranked_takeaways": 3,
    "team_avg_takeaways": 1.88,
    "opp_ranked_giveaways": 25,
    "opp_avg_giveaways": 1.56,
    "fanduelSalary": "$3500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#005596",
    "tmTextLite": "#FFFFFF",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 85, 150, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
    "headlineNews": "Bills activated DT Star Lotulelei from the reserve/COVID-19 list.\n",
    "report": "",
    "analysis": "Spencer Brown, a catalyst on Buffalo's o-line this year, was also activated from the COVID list. With two star players presumably back for the team's divisional showdown against New England, Buffalo is getting healthy (sans All-Pro CB Tre'Davious White's absence) at the right time. The Bills square off against New England in two of their next four games.\n",
    "timestamp": "",
    "source": "Chris Brown on Twitter",
    "game_day_logo": "",
    "avg_fp2": 8.28,
    "week01": 3.0,
    "week02": 22.0,
    "week03": 7.0,
    "week04": 23.0,
    "week05": 11.0,
    "week06": 1.0,
    "week07": "BYE",
    "week08": 10.0,
    "week09": 8.0,
    "week10": 12.0,
    "week11": -4.0,
    "week12": 11.0,
    "week13": 3.0,
    "week14": 1.0,
    "week15": 7.0,
    "week16": 5.0,
    "week17": 8.0,
    "week18": 13.0,
    "week19": 8.0,
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.0, 22.0, 7.0, 23.0, 11.0, 1.0, 'BYE', 10.0, 8.0, 12.0, -4.0, 11.0, 3.0, 1.0, 7.0, 5.0, 8.0, 13.0, 8.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.1, 6.7, 6.3, 5.9, 4.2, 8.5, 'BYE', 9.6, 7.6, 9.9, 7.6, 6.5, 3.3, 5.6, 4.9, 4.8, 8.6, 9.0, 3.8, 5.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 1.2, 3.8, 3.1, 5.0, 5.5, 'BYE', 5.8, 3.4, 6.0, 2.2, 1.4, 4.1, 2.7, 5.7, 3.9, 5.7, 5.4, 3.9, 2.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.9, 13.2, 11.9, 10.4, 14.0, 12.8, 'BYE', 12.7, 11.1, 13.4, 9.7, 10.2, 11.8, 9.8, 13.4, 12.9, 14.3, 12.8, 13.1, 9.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/CIN.png",
    "name": "Cincinnati Bengals",
    "depthchart": "",
    "team": "Cincinnati Bengals",
    "projected": 5.2,
    "opponent": "Tennessee Titans",
    "opp_rank_pts": 15,
    "opp_avg_pts": 0.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 14,
    "team_avg_allowed_pts": 20.94,
    "team_ranked_takeaways": 18,
    "team_avg_takeaways": 1.19,
    "opp_ranked_giveaways": 25,
    "opp_avg_giveaways": 1.56,
    "fanduelSalary": "$3400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#ea7330",
    "tmColorDark": "#000000",
    "tmTextLite": "#ea7330",
    "tmColorLite_rgba": "rgba(234, 115, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png",
    "headlineNews": "Bengals DE Trey Hendrickson cleared the league's concussion protocol.\n",
    "report": "",
    "analysis": "Interior run-stuffer Josh Tupou is also \"trending in the right direction\" while\u00a0newly signed DT Zach Kerr could \"see some snaps\", all in an effort to stop Derrick Henry up the middle. Hendrickson, the team's leading pass rusher with 14 sacks this year, being available is a massive development.\n",
    "timestamp": "",
    "source": "Kelsey Conway on Twitter",
    "game_day_logo": "",
    "avg_fp2": 6.28,
    "week01": 5.0,
    "week02": 9.0,
    "week03": 12.0,
    "week04": 1.0,
    "week05": 4.0,
    "week06": 7.0,
    "week07": 6.0,
    "week08": 7.0,
    "week09": 1.0,
    "week10": "BYE",
    "week11": 10.0,
    "week12": 13.0,
    "week13": 9.0,
    "week14": 5.0,
    "week15": 9.0,
    "week16": 3.0,
    "week17": -1.0,
    "week18": 5.0,
    "week19": 8.0,
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.0, 9.0, 12.0, 1.0, 4.0, 7.0, 6.0, 7.0, 1.0, 'BYE', 10.0, 13.0, 9.0, 5.0, 9.0, 3.0, -1.0, 5.0, 8.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.9, 5.3, 4.2, 7.9, 7.2, 5.4, 4.4, 7.3, 4.3, 'BYE', 3.9, 6.0, 4.4, 5.4, 6.7, 5.9, 4.9, 4.8, 3.6, 5.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.8, 1.4, 3.2, 5.6, 2.6, 2.8, 1.4, 9.1, 4.8, 'BYE', 2.1, 2.3, 2.4, 2.0, 3.0, 3.7, 1.6, 0.0, 1.9, 1.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.1, 13.3, 10.9, 11.8, 10.4, 9.7, 7.9, 16.8, 10.8, 'BYE', 7.6, 10.1, 9.9, 9.6, 10.0, 11.1, 8.3, 7.4, 8.1, 7.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/TB.png",
    "name": "Tampa Bay Buccaneers",
    "depthchart": "",
    "team": "Tampa Bay Buccaneers",
    "projected": 5.1,
    "opponent": "Los Angeles Rams",
    "opp_rank_pts": 9,
    "opp_avg_pts": 0.0,
    "home_away": "",
    "team_rank_allowed_pts": 8,
    "team_avg_allowed_pts": 20.19,
    "team_ranked_takeaways": 6,
    "team_avg_takeaways": 1.69,
    "opp_ranked_giveaways": 15,
    "opp_avg_giveaways": 1.31,
    "fanduelSalary": "$4500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#A31D2F",
    "tmColorDark": "#000000",
    "tmTextLite": "#A31D2F",
    "tmColorLite_rgba": "rgba(163, 29, 47, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Bucs CB Carlton Davis (back) is active for Sunday's Wild Card game against the Eagles.\n",
    "report": "",
    "analysis": "Davis is active but the Bucs will be without CB\u00a0Sean Murphy-Bunting (hamstring), who didn't show enough to get cleared in pre-game warmups.\u00a0Kyle Trask,\u00a0RB Kenjon Barner,\u00a0RB Ronald Jones,\u00a0WR Cyril Grayson,\u00a0TE Codey McElroy, and OL\u00a0Nick Leverett are also inactive for the Bucs.\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 7.67,
    "week01": 2.0,
    "week02": 7.0,
    "week03": 0.0,
    "week04": 9.0,
    "week05": 8.0,
    "week06": 4.0,
    "week07": 21.0,
    "week08": 0.0,
    "week09": "BYE",
    "week10": 6.0,
    "week11": 12.0,
    "week12": 12.0,
    "week13": 11.0,
    "week14": 5.0,
    "week15": 6.0,
    "week16": 16.0,
    "week17": 3.0,
    "week18": 7.0,
    "week19": 9.0,
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(163, 29, 47, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.0, 7.0, 0.0, 9.0, 8.0, 4.0, 21.0, 0.0, 'BYE', 6.0, 12.0, 12.0, 11.0, 5.0, 6.0, 16.0, 3.0, 7.0, 9.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.0, 6.9, 4.1, 3.3, 9.2, 4.8, 5.2, 3.7, 'BYE', 5.3, 7.1, 4.9, 7.4, 4.5, 7.5, 8.2, 6.8, 7.4, 4.2, 5.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.2, 0.0, 0.3, 2.5, 3.6, 3.4, 2.7, 2.2, 'BYE', 3.7, 3.8, 1.9, 4.2, 0.0, 2.2, 2.4, 3.8, 4.1, 2.3, 1.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(163, 29, 47, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.7, 11.6, 5.8, 5.5, 8.8, 8.2, 9.0, 7.2, 'BYE', 11.5, 10.5, 9.2, 11.6, 6.8, 8.4, 8.1, 10.2, 12.9, 9.3, 6.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/TEN.png",
    "name": "Tennessee Titans",
    "depthchart": "",
    "team": "Tennessee Titans",
    "projected": 5.0,
    "opponent": "Cincinnati Bengals",
    "opp_rank_pts": 5,
    "opp_avg_pts": 0.0,
    "home_away": "",
    "team_rank_allowed_pts": 14,
    "team_avg_allowed_pts": 20.94,
    "team_ranked_takeaways": 12,
    "team_avg_takeaways": 1.38,
    "opp_ranked_giveaways": 15,
    "opp_avg_giveaways": 1.31,
    "fanduelSalary": "$4100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#4495D1",
    "tmColorDark": "#002A5C",
    "tmTextLite": "#4495D1",
    "tmColorLite_rgba": "rgba(68, 149, 209, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 92, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png",
    "headlineNews": "Titans declared\u00a0DL Teair Tart, DL Naquan Jones, LB Jayon Brown, OLB Derick Roberson, WR Dez Fitzpatrick, DB Greg Mabin, and OT Kendall Lamm inactive for Week 18 against the Texans.\n",
    "report": "",
    "analysis": "Brown has been an every-snap linebacker when active for the Titans this year, but he's not at full health heading into the final week of the regular season. Still, the Titans shouldn't need a fully healthy active to beat a hapless Texans offense and secure the top seed in the AFC in the process.\n",
    "timestamp": "",
    "source": "John Glennon on Twitter",
    "game_day_logo": "",
    "avg_fp2": 6.18,
    "week01": 0.0,
    "week02": 2.0,
    "week03": 3.0,
    "week04": 3.0,
    "week05": 7.0,
    "week06": 4.0,
    "week07": 17.0,
    "week08": 6.0,
    "week09": 10.0,
    "week10": 6.0,
    "week11": 0.0,
    "week12": -2.0,
    "week13": "BYE",
    "week14": 21.0,
    "week15": 4.0,
    "week16": 7.0,
    "week17": 15.0,
    "week18": 2.0,
    "week19": "DNP",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 2.0, 3.0, 3.0, 7.0, 4.0, 17.0, 6.0, 10.0, 6.0, 0.0, -2.0, 'BYE', 21.0, 4.0, 7.0, 15.0, 2.0, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.1, 3.8, 2.3, 6.5, 7.7, 3.0, 3.7, 2.9, 2.7, 5.0, 9.1, 4.0, 'BYE', 7.9, 5.3, 4.0, 8.4, 6.5, 'DNP', 5.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.0, 0.8, 3.0, 6.4, 4.2, 0.0, 0.7, 0.0, 0.1, 4.2, 5.1, 2.4, 'BYE', 4.3, 0.1, 0.6, 5.1, 4.4, 'DNP', 0.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.1, 13.3, 8.0, 14.9, 9.4, 4.6, 7.2, 6.5, 5.9, 9.7, 11.5, 9.9, 'BYE', 11.7, 6.0, 7.9, 13.4, 11.8, 'DNP', 7.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/GB.png",
    "name": "Green Bay Packers",
    "depthchart": "",
    "team": "Green Bay Packers",
    "projected": 4.9,
    "opponent": "San Francisco 49ers",
    "opp_rank_pts": 13,
    "opp_avg_pts": 0.0,
    "home_away": "",
    "team_rank_allowed_pts": 9,
    "team_avg_allowed_pts": 20.5,
    "team_ranked_takeaways": 7,
    "team_avg_takeaways": 1.62,
    "opp_ranked_giveaways": 17,
    "opp_avg_giveaways": 1.38,
    "fanduelSalary": "$4500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#d7a017",
    "tmColorDark": "#203731",
    "tmTextLite": "#d7a017",
    "tmColorLite_rgba": "rgba(215, 160, 23, 0.2)",
    "tmColorDark_rgba": "rgba(32, 55, 49, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png",
    "headlineNews": "Packers activated OLB\u00a0Whitney Mercilus from injured reserve.\u00a0\n",
    "report": "",
    "analysis": "Green Bay also got back fellow OLB\u00a0Za'Darius Smith from injured reserve on Friday. Released by the Texans early in the season,\u00a0Mercilus played four games for the Packers before going down with a torn biceps. He should serve as a rotational pass rusher in the playoffs.\u00a0\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": NaN,
    "week01": -4.0,
    "week02": 6.0,
    "week03": 7.0,
    "week04": 7.0,
    "week05": 7.0,
    "week06": 7.0,
    "week07": 14.0,
    "week08": 8.0,
    "week09": 5.0,
    "week10": 17.0,
    "week11": 1.0,
    "week12": 8.0,
    "week13": "BYE",
    "week14": 8.0,
    "week15": 0.0,
    "week16": 13.0,
    "week17": NaN,
    "week18": -3.0,
    "week19": "DNP",
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [-4.0, 6.0, 7.0, 7.0, 7.0, 7.0, 14.0, 8.0, 5.0, 17.0, 1.0, 8.0, 'BYE', 8.0, 0.0, 13.0, nan, -3.0, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.9, 6.0, 2.7, 4.7, 3.8, 5.7, 6.7, 2.2, 5.3, 6.0, 6.3, 6.7, 'BYE', 7.4, 5.3, 5.5, 6.0, 5.8, 'DNP', 4.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.8, 1.9, 1.3, 6.1, 3.7, 6.4, 2.7, 0.0, 2.6, 2.1, 3.1, 1.2, 'BYE', 6.2, 1.2, 5.5, 3.8, 2.8, 'DNP', 3.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.4, 10.6, 6.9, 12.7, 9.5, 12.5, 10.4, 4.8, 10.2, 9.1, 10.2, 7.3, 'BYE', 13.7, 8.7, 12.0, 9.8, 9.4, 'DNP', 12.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/LA.png",
    "name": "Los Angeles Rams",
    "depthchart": "",
    "team": "Los Angeles Rams",
    "projected": 3.8,
    "opponent": "Tampa Bay Buccaneers",
    "opp_rank_pts": 2,
    "opp_avg_pts": 0.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 5,
    "team_avg_allowed_pts": 19.25,
    "team_ranked_takeaways": 10,
    "team_avg_takeaways": 1.44,
    "opp_ranked_giveaways": 9,
    "opp_avg_giveaways": 1.19,
    "fanduelSalary": "$4300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmTextLite": "#866D4B",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Rams elevated S Eric Weddle to the active roster.\n",
    "report": "",
    "analysis": "Weddle was signed to their practice squad last week but the plan was always for him to be signed to the active roster before the Rams' playoff opener versus the Cardinals. He was signed after Jordan Fuller went down for the year because of an ankle injury in Week 18. Weddle hasn't played in two years but reportedly stayed in his playing form after retiring.\u00a0\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 7.28,
    "week01": 8.0,
    "week02": 8.0,
    "week03": 3.0,
    "week04": -1.0,
    "week05": 7.0,
    "week06": 16.0,
    "week07": 7.0,
    "week08": 7.0,
    "week09": 5.0,
    "week10": 1.0,
    "week11": "BYE",
    "week12": 2.0,
    "week13": 10.0,
    "week14": 8.0,
    "week15": 9.0,
    "week16": 11.0,
    "week17": 13.0,
    "week18": 7.0,
    "week19": 10.0,
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.0, 8.0, 3.0, -1.0, 7.0, 16.0, 7.0, 7.0, 5.0, 1.0, 'BYE', 2.0, 10.0, 8.0, 9.0, 11.0, 13.0, 7.0, 10.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.4, 5.1, 7.3, 4.6, 0.2, 4.2, 6.6, 6.6, 4.7, 6.9, 'BYE', 4.7, 7.1, 4.0, 3.7, 5.2, 5.7, 5.2, 4.2, 3.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.0, 0.0, 7.6, 6.9, 0.0, 0.9, 3.8, 4.4, 2.7, 1.9, 'BYE', 0.0, 5.6, 0.0, 3.0, 0.0, 2.2, 5.0, 1.0, 1.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.4, 14.3, 13.5, 12.9, 3.3, 7.7, 11.0, 13.6, 12.9, 10.0, 'BYE', 10.0, 12.6, 6.0, 9.2, 9.6, 10.9, 12.8, 9.9, 8.6]
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
    "opponent": "Green Bay Packers",
    "opp_rank_pts": 10,
    "opp_avg_pts": 0.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 11,
    "team_avg_allowed_pts": 20.81,
    "team_ranked_takeaways": 22,
    "team_avg_takeaways": 1.12,
    "opp_ranked_giveaways": 1,
    "opp_avg_giveaways": 0.62,
    "fanduelSalary": "$3700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmTextLite": "#B3995D",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "Nick Bosa cleared the league's concussion protocol.\n",
    "report": "",
    "analysis": "San Francisco has registered 27 quarterback hits over the last two weeks via its fearsome pass rush that should carry over into Saturday now that both Fred Warner and Bosa have been cleared to play. It's an encouraging development against Aaron Rodgers, who threw 20 touchdowns and zero picks across his last six starts.\n",
    "timestamp": "",
    "source": "Adam Schefter on Twitter",
    "game_day_logo": "",
    "avg_fp2": 6.39,
    "week01": 4.0,
    "week02": 8.0,
    "week03": 0.0,
    "week04": 2.0,
    "week05": 5.0,
    "week06": "BYE",
    "week07": 4.0,
    "week08": 6.0,
    "week09": 1.0,
    "week10": 10.0,
    "week11": 11.0,
    "week12": 6.0,
    "week13": 9.0,
    "week14": 9.0,
    "week15": 9.0,
    "week16": 5.0,
    "week17": 9.0,
    "week18": 9.0,
    "week19": 8.0,
    "week20": "",
    "week21": "",
    "week22": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17', 'Week 18', 'Week 19', 'Week 20'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.0, 8.0, 0.0, 2.0, 5.0, 'BYE', 4.0, 6.0, 1.0, 10.0, 11.0, 6.0, 9.0, 9.0, 9.0, 5.0, 9.0, 9.0, 8.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.8, 3.2, 4.6, 2.2, 0.8, 'BYE', 2.9, 4.7, 1.8, 2.0, 7.5, 3.2, 3.3, 4.4, 7.0, 5.4, 7.5, 4.7, 2.4, 2.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.6, 0.7, 3.1, 0.0, 0.0, 'BYE', 1.1, 4.5, 0.4, 0.0, 1.5, 1.6, 1.7, 1.8, 3.0, 2.0, 4.1, 3.8, 0.3, 0.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.4, 11.1, 7.1, 3.7, 4.0, 'BYE', 7.7, 10.3, 5.7, 5.6, 8.2, 7.4, 7.3, 7.5, 8.6, 8.8, 9.0, 9.9, 8.9, 7.4]
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