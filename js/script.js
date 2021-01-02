var App = angular.module('footballApp', ['tc.chartjs']);

App.controller('positionController', function($scope, $http) {
  
  //JSON data for position and players

/*********************** PASTE AFTER HERE ************************/

$scope.currentDate = {"currentDate": "Saturday, 02 January 2021 03:52 AM (central time)"};
$scope.week = {"nflWeek": "17"};

$scope.qbStartSit = {"one": "Tom Brady", "two": "Deshaun Watson", "three": "Kirk Cousins", "four": "Cam Newton", "five": "Philip Rivers", "six": "Jalen Hurts", "seven": "Baker Mayfield", "eight": "Mitchell Trubisky", "nine": "Kyler Murray", "ten": "Sam Darnold"};
$scope.rbStartSit = {"one": "Derrick Henry", "two": "Jonathan Taylor", "three": "D'Andre Swift", "four": "Wayne Gallman", "five": "Alexander Mattison", "six": "Ito Smith", "seven": "Dare Ogunbowale", "eight": "Boston Scott", "nine": "Kenyan Drake", "ten": "Chris Carson"};
$scope.wrStartSit = {"one": "Mike Evans", "two": "Justin Jefferson", "three": "Kendrick Bourne", "four": "Brandin Cooks", "five": "A.J. Brown", "six": "Jalen Reagor", "seven": "DeAndre Hopkins", "eight": "Rashard Higgins", "nine": "Breshad Perriman", "ten": "DeVante Parker"};
$scope.teStartSit = {"one": "Rob Gronkowski", "two": "Dalton Keene", "three": "Mark Andrews", "four": "George Kittle", "five": "Jack Doyle", "six": "Jacob Hollister", "seven": "Austin Hooper", "eight": "Cole Kmet", "nine": "Chris Herndon", "ten": "Zach Ertz"};
$scope.dstStartSit = {"one": "New England Patriots", "two": "Dallas Cowboys", "three": "Indianapolis Colts", "four": "New York Jets", "five": "Philadelphia Eagles", "six": "Chicago Bears", "seven": "Houston Texans", "eight": "Los Angeles Chargers", "nine": "Atlanta Falcons", "ten": "Miami Dolphins"};

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
    "projected": 26.5,
    "opponent": "Tennessee Titans",
    "home_away": "",
    "opp_rank_Pos": 28,
    "team_rank_Pos": 4,
    "avg_fp2": 23.3,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 21.77,
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
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "source": "",
    "game_day_logo": "",
    "week01": 21.82,
    "week02": 15.7,
    "week03": 18.06,
    "week04": 20.9,
    "week05": 26.86,
    "week06": 32.0,
    "week07": 24.16,
    "week08": "BYE",
    "week09": 24.24,
    "week10": 14.12,
    "week11": 31.36,
    "week12": 33.12,
    "week13": 20.44,
    "week14": 16.56,
    "week15": 23.42,
    "week16": 26.76,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [21.82, 15.7, 18.06, 20.9, 26.86, 32.0, 24.16, 'BYE', 24.24, 14.12, 31.36, 33.12, 20.44, 16.56, 23.42, 26.76]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [24.8, 14.6, 24.3, 25.6, 31.0, 19.4, 24.8, 'BYE', 27.6, 21.0, 22.3, 28.1, 23.6, 23.7, 23.0, 24.9, 26.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [13.2, 10.0, 17.4, 13.7, 11.1, 15.0, 15.2, 'BYE', 13.2, 12.9, 12.7, 15.1, 13.6, 14.2, 13.7, 14.8, 14.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [31.0, 28.5, 33.5, 30.7, 31.8, 32.1, 30.9, 'BYE', 30.2, 32.0, 31.3, 32.9, 29.6, 32.2, 30.6, 31.0, 30.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14880.png",
    "name": "Kirk Cousins",
    "depthchart": "Starter: QB-1",
    "team": "Minnesota Vikings",
    "projected": 26.0,
    "opponent": "Detroit Lions",
    "home_away": "at ",
    "opp_rank_Pos": 29,
    "team_rank_Neu": 18,
    "avg_fp2": 18.99,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 23.5,
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
    "headlineNews": "Kirk Cousins completed 27-of-41 passes for 291 yards and three touchdowns in the Vikings' Week 16 loss to the Saints.\n",
    "report": "",
    "analysis": "Cousins was forced into a lot of pass attempts with the Saints running all over the Vikings' banged-up defense. Minnesota never felt in the game, but Cousins was solid throughout nonetheless. He was leaning on Justin Jefferson and Adam Thielen heavily heading into this game, but it was second-year TE Irv Smith who popped up for two touchdowns. The Vikings offense was a good unit in 2020. It doesn't necessarily mean Cousins is the long-term answer at quarterback, however. Cousins should be effective against the Lions to close out the season despite being knocked out of the playoffs.\n",
    "timestamp": "2020-12-26 12:56 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 22.76,
    "week02": 1.52,
    "week03": 21.44,
    "week04": 14.9,
    "week05": 15.16,
    "week06": 26.72,
    "week07": "BYE",
    "week08": 10.4,
    "week09": 20.8,
    "week10": 18.58,
    "week11": 22.96,
    "week12": 26.18,
    "week13": 22.4,
    "week14": 17.1,
    "week15": 20.34,
    "week16": 23.64,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [22.76, 1.52, 21.44, 14.9, 15.16, 26.72, 'BYE', 10.4, 20.8, 18.58, 22.96, 26.18, 22.4, 17.1, 20.34, 23.64]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.6, 19.7, 17.5, 18.2, 20.2, 24.2, 'BYE', 20.9, 20.4, 9.6, 19.3, 18.5, 20.7, 19.5, 17.3, 16.9, 26.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [9.2, 8.8, 6.9, 9.7, 8.7, 8.3, 'BYE', 11.1, 11.9, 8.2, 8.7, 10.5, 10.6, 9.7, 10.6, 9.0, 10.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  "rgba(224, 170, 25, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [23.3, 24.5, 22.6, 25.5, 23.5, 24.1, 'BYE', 27.5, 25.9, 23.7, 23.3, 24.8, 26.2, 24.6, 25.9, 24.9, 24.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13994.png",
    "name": "Cam Newton",
    "depthchart": "Starter: QB-1",
    "team": "New England Patriots",
    "projected": 24.9,
    "opponent": "New York Jets",
    "home_away": "",
    "opp_rank_Pos": 30,
    "team_rank_Neg": 30,
    "avg_fp2": 16.57,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 21.49,
    "fanduelSalary": "$7300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#C60C30",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png",
    "headlineNews": "Patriots coach Bill Belichick \"would imagine\" Cam Newton starts Week 17 against the Jets.\u00a0\n",
    "report": "",
    "analysis": "\"We're going through that right now,\" Belichick said Tuesday.\u00a0\"We'll see.\" Newton was benched in the third quarter of Monday evening's blowout loss to the Bills. When asked to assess Newton's poor performance, Belichick said \"I thought he did what we asked him to do.\" Newton's once prodigious\u00a0arm strength has appeared completely shot in the second half of the season. The problem, of course, is that Jarrett Stidham still appears to be an even worse option. Newton at least still keys the ground game. Belichick will probably let Newton start what will almost certainly be his final game in a Patriots uniform, one that is winnable against the 2-13 Jets.\u00a0\n",
    "timestamp": "2020-12-29 08:48 PM",
    "source": "Ryan Hannable on Twitter ",
    "game_day_logo": "",
    "week01": 25.7,
    "week02": 35.58,
    "week03": 12.18,
    "week04": "DNP",
    "week05": "DNP",
    "week06": 19.98,
    "week07": 2.82,
    "week08": 18.36,
    "week09": 24.56,
    "week10": 16.82,
    "week11": 19.2,
    "week12": 5.96,
    "week13": 23.56,
    "week14": 5.36,
    "week15": 12.16,
    "week16": 9.76,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [25.7, 35.58, 12.18, 'DNP', 'DNP', 19.98, 2.82, 18.36, 24.56, 16.82, 19.2, 5.96, 23.56, 5.36, 12.16, 9.76]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [21.5, 26.2, 23.9, 'DNP', 'DNP', 26.9, 19.6, 14.6, 23.0, 19.8, 18.7, 25.3, 17.6, 17.9, 24.4, 20.2, 24.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [13.3, 18.8, 14.2, 'DNP', 'DNP', 12.9, 12.7, 11.6, 13.2, 13.0, 12.8, 12.6, 14.5, 10.5, 12.6, 11.1, 13.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [29.0, 33.6, 30.2, 'DNP', 'DNP', 29.1, 29.1, 28.7, 29.9, 30.2, 28.4, 27.8, 29.5, 27.5, 29.0, 29.1, 30.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3916387.png",
    "name": "Lamar Jackson",
    "depthchart": "Starter: QB-1",
    "team": "Baltimore Ravens",
    "projected": 24.6,
    "opponent": "Cincinnati Bengals",
    "home_away": "at ",
    "opp_rank_Neu": 23,
    "team_rank_Neg": 31,
    "avg_fp2": 22.68,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 18.51,
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
    "headlineNews": "Lamar Jackson completed 17-of-26 passes for 186 yards and two touchdowns in the Ravens' 27-13 Week 16 win against the Giants, adding 12 rushes for 81 yards.\u00a0\n",
    "report": "",
    "analysis": "It was yet another double-digit rushing attempt performance from Jackson, who had a few potentially long runs stopped by shoestring tackles. Jackson again found Marquise Brown and Dez Bryant for touchdowns against a vulnerable Giants secondary. The Ravens moved the ball at will against the zone-heavy Giants, who refused to switch to man defense even as Baltimore had chunk play after chunk play. Jackson gets another favorable matchup in Week 17 against the Bengals.\u00a0\n",
    "timestamp": "2020-12-27 09:19 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 27.5,
    "week02": 17.56,
    "week03": 14.18,
    "week04": 26.02,
    "week05": 14.5,
    "week06": 28.24,
    "week07": "DNP",
    "week08": 16.82,
    "week09": 18.6,
    "week10": 22.46,
    "week11": 17.54,
    "week12": "DNP",
    "week13": 27.7,
    "week14": 34.92,
    "week15": 30.22,
    "week16": 21.32,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [27.5, 17.56, 14.18, 26.02, 14.5, 28.24, 'DNP', 16.82, 18.6, 22.46, 17.54, 'DNP', 27.7, 34.92, 30.22, 21.32]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [28.5, 28.8, 27.5, 29.5, 23.5, 22.1, 'DNP', 17.7, 19.9, 23.1, 27.5, 'DNP', 26.8, 19.5, 19.0, 23.9, 24.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [18.1, 16.9, 23.4, 20.7, 15.4, 14.3, 'DNP', 18.0, 12.9, 13.9, 16.0, 'DNP', 15.9, 23.0, 19.3, 17.7, 18.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [35.5, 27.6, 39.2, 34.6, 26.8, 29.6, 'DNP', 34.7, 27.5, 28.9, 30.8, 'DNP', 35.0, 30.3, 38.9, 35.7, 33.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/8439.png",
    "name": "Aaron Rodgers",
    "depthchart": "Starter: QB-1",
    "team": "Green Bay Packers",
    "projected": 21.8,
    "opponent": "Chicago Bears",
    "home_away": "at ",
    "opp_rank_Neu": 13,
    "team_rank_Neu": 9,
    "avg_fp2": 24.12,
    "opp_rank_allowed_fp2_Neu": 7,
    "opp_avg_allowed_fp2": 17.49,
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
    "headlineNews": "Aaron Rodgers completed 21-of-25 passes for 231 yards with four touchdowns and an interception in the Packers' Week 16 win over the Titans.\n",
    "report": "",
    "analysis": "This was a rebound game for Rodgers, who had 143 yards on 29 attempts last week. Rodgers got the Packers out to an early lead with a touchdown to Equanimeous St. Brown and a pair of scores to Davante Adams. He then added\u00a0another\u00a0TD\u00a0to Adams in the second half. The MVP frontrunner, Rodgers has at least three touchdowns in five of his last six games and a 44:5\u00a0TD/INT ratio on the season. Even without a win in Week 17, the Packers can clinch the No. 1 seed with a Seahawks or Saints loss.\n",
    "timestamp": "2020-12-28 06:27 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 30.76,
    "week02": 18.7,
    "week03": 24.52,
    "week04": 29.58,
    "week05": "BYE",
    "week06": 5.8,
    "week07": 27.32,
    "week08": 22.54,
    "week09": 28.9,
    "week10": 26.4,
    "week11": 22.74,
    "week12": 25.64,
    "week13": 23.5,
    "week14": 30.9,
    "week15": 18.32,
    "week16": 26.14,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [30.76, 18.7, 24.52, 29.58, 'BYE', 5.8, 27.32, 22.54, 28.9, 26.4, 22.74, 25.64, 23.5, 30.9, 18.32, 26.14]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [21.5, 24.8, 26.3, 27.1, 'BYE', 16.5, 21.8, 26.4, 21.1, 23.0, 18.3, 18.9, 24.5, 22.9, 29.6, 19.2, 21.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [11.9, 13.8, 9.5, 14.4, 'BYE', 12.6, 15.7, 14.1, 12.2, 15.2, 13.7, 11.5, 14.1, 13.9, 14.3, 18.4, 12.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [27.7, 30.7, 32.1, 29.9, 'BYE', 27.5, 28.6, 30.2, 28.0, 29.5, 26.4, 29.0, 30.8, 30.3, 30.9, 28.9, 28.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/5529.png",
    "name": "Philip Rivers",
    "depthchart": "Starter: QB-1",
    "team": "Indianapolis Colts",
    "projected": 21.6,
    "opponent": "Jacksonville Jaguars",
    "home_away": "",
    "opp_rank_Pos": 27,
    "team_rank_Neu": 8,
    "avg_fp2": 15.97,
    "opp_rank_allowed_fp2_Pos": 30,
    "opp_avg_allowed_fp2": 23.11,
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
    "headlineNews": "Philip Rivers completed 22-of-35 passes for 270 yards, one touchdown, and one pick in Indianapolis' 28-24 Week 16 loss to Pittsburgh.\n",
    "report": "",
    "analysis": "Any mistakes Rivers made can be chalked up to the veteran holding onto the ball for far too long with a third-string left tackle on his blindside. He drove the ball without hesitation in the first half, completing 9-of-12 passes for 153 yards and a 42-yard strike to Zach Pascal, but stayed under duress over the final two quarters as the Steelers responded with 21 unanswered points and 7.2 yards per play. With\u00a0this loss, the Colts need to beat the Jaguars and have any of\u00a0Baltimore, Miami, or Cleveland lose in Week 17 to sneak into the Wild Card round. It's a massive fall from grace for a team that had been clicking on all cylinders with three consecutive wins prior to Sunday.\n",
    "timestamp": "2020-12-28 01:42 AM",
    "source": null,
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [16.82, 11.86, 12.68, 11.2, 7.62, 25.74, 'BYE', 22.28, 8.08, 16.32, 22.42, 18.8, 19.2, 17.76, 17.02, 11.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [19.6, 26.8, 17.5, 13.6, 20.3, 15.9, 'BYE', 16.3, 12.6, 19.5, 21.6, 19.6, 19.7, 20.7, 21.2, 15.2, 21.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [9.8, 11.4, 10.1, 9.6, 10.9, 10.0, 'BYE', 11.1, 10.3, 10.3, 8.9, 10.0, 9.9, 10.7, 10.3, 9.1, 9.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [22.2, 22.4, 23.1, 22.2, 24.5, 23.6, 'BYE', 23.0, 22.4, 23.6, 22.9, 23.0, 23.5, 23.5, 24.0, 24.0, 22.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4038941.png",
    "name": "Justin Herbert",
    "depthchart": "Starter: QB-1",
    "team": "Los Angeles Chargers",
    "projected": 21.3,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Neu": 15,
    "team_rank_Pos": 6,
    "avg_fp2": 22.13,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 19.5,
    "fanduelSalary": "$7600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0080C6",
    "tmColorDark": "#002A5E",
    "tmColorLite_rgba": "rgba(0, 128, 198, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 94, 0.2)",
    "tmTextLite": "#0080C6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lac.png",
    "headlineNews": "Justin Herbert completed 21-of-33 passes for 253 yards and one touchdown in the Chargers' Week 16 win over the Broncos.\n",
    "report": "",
    "analysis": "Herbert was without Keenan Allen and Hunter Henry, yet still looked like the 2020 Offensive Rookie of the Year. His arm strength and poise in the pocket have been special by rookie standards all year despite getting little to nothing from his offensive line and coaching staff. Herbert only took two sacks and added 26 rushing yards on scrambles. The former No. 6 overall pick will look to lock up his OROY trophy in Week 17 against the Chiefs who may be benching some starters. Herbert needs two more touchdowns to get to 30. He's already over 4,000 yards.\n",
    "timestamp": "2020-12-28 12:10 AM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": 23.24,
    "week03": 15.7,
    "week04": 24.0,
    "week05": 27.36,
    "week06": "DNP",
    "week07": 38.48,
    "week08": 23.22,
    "week09": 23.44,
    "week10": 21.48,
    "week11": 27.74,
    "week12": 17.44,
    "week13": 6.36,
    "week14": 16.72,
    "week15": 27.96,
    "week16": 16.72,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 23.24, 15.7, 24.0, 27.36, 'DNP', 38.48, 23.22, 23.44, 21.48, 27.74, 17.44, 6.36, 16.72, 27.96, 16.72]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 0.9, 16.9, 10.9, 22.3, 'DNP', 21.4, 19.7, 22.1, 24.3, 25.0, 19.5, 15.8, 31.6, 29.3, 17.7, 21.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 0.0, 11.4, 8.4, 13.4, 'DNP', 16.1, 12.6, 22.0, 21.8, 19.7, 18.0, 18.7, 18.5, 16.2, 11.4, 16.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 128, 198, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 12.0, 25.3, 24.3, 27.0, 'DNP', 24.9, 26.4, 34.2, 34.1, 25.4, 32.5, 26.8, 24.5, 27.0, 29.1, 29.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3124092.png",
    "name": "John Wolford",
    "depthchart": "Starter: QB-1",
    "team": "Los Angeles Rams",
    "projected": 20.2,
    "opponent": "Arizona Cardinals",
    "home_away": "",
    "opp_rank_Neu": 10,
    "team_rank_Neu": 12,
    "avg_fp2": 13.0,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 19.71,
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
    "headlineNews": "John Wolford will start at quarterback for the Rams in Week 17 against the Cardinals.\n",
    "report": "",
    "analysis": "Jared Goff underwent\u00a0surgery on his broken and dislocated right (throwing) thumb Monday and is not expected to get cleared in time for Sunday's do-or-die game with a playoff spot on the line. Wolford, 25, has never attempted an NFL pass and has been with the Rams since April 2019 after signing following a successful stint with the AAF's Arizona Hotshots where he led the short-lived league in passing touchdowns. It's hard to see Wolford actually pulling out the win, but crazier things have happened in this league. The Rams are expected to sign Blake Bortles off the Broncos' practice squad to serve as Wolford's backup after Bortles spent 2019 as Goff's backup.\n",
    "timestamp": "2020-12-29 01:48 AM",
    "source": "Adam Schefter on Twitter",
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 20.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 7.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 21.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14881.png",
    "name": "Russell Wilson",
    "depthchart": "Starter: QB-1",
    "team": "Seattle Seahawks",
    "projected": 20.2,
    "opponent": "San Francisco 49ers",
    "home_away": "at ",
    "opp_rank_Neg": 4,
    "team_rank_Neu": 14,
    "avg_fp2": 23.64,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 17.4,
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
    "headlineNews": "Russell Wilson completed 20-of-32 passes for 225 yards and one touchdown in the Seahawks' 20-9, Week 16 win over the Rams, adding a rushing touchdown and nine yards on three attempts on the ground.\n",
    "report": "",
    "analysis": "Wilson's numbers have dipped severely in recent weeks, and today was no different, as the offense struggled to move the ball most of the day against the Rams' strong defense. Still, Wilson did enough for the Seahawks to clinch the NFC West. His first score was a four-yard keeper where Wilson couldn't find anyone open in the end zone. The passing score was a game-sealing 13-yarder to Jacob Hollister after he missed Hollister earlier in the day on a would-be touchdown. The Seahawks have a shot at improving their seeding for Week 17, so Wilson should be out there against the 49ers next Sunday.\n",
    "timestamp": "2020-12-28 12:44 AM",
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [31.78, 34.42, 36.8, 21.9, 25.48, 'BYE', 32.92, 28.74, 24.1, 11.92, 20.08, 14.4, 16.02, 23.14, 13.04, 19.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.3, 20.0, 29.1, 24.5, 21.6, 'BYE', 19.8, 21.5, 20.4, 17.2, 26.9, 24.3, 24.9, 23.5, 23.1, 19.7, 20.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [12.1, 11.8, 12.4, 11.3, 11.7, 'BYE', 11.3, 11.3, 12.7, 13.4, 11.5, 11.4, 12.3, 12.1, 11.3, 12.0, 12.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [26.9, 26.8, 26.1, 26.2, 26.9, 'BYE', 27.5, 29.7, 28.2, 28.8, 27.6, 29.0, 28.0, 28.2, 29.2, 27.0, 27.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2330.png",
    "name": "Tom Brady",
    "depthchart": "Starter: QB-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 18.9,
    "opponent": "Atlanta Falcons",
    "home_away": "",
    "opp_rank_Pos": 31,
    "team_rank_Pos": 3,
    "avg_fp2": 21.22,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 23.54,
    "fanduelSalary": "$8400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#D50A0A",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(213, 10, 10, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#D50A0A",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Tom Brady completed 22-of-27 passes for 348 yards with four touchdowns in Week 16 against the Lions.\n",
    "report": "",
    "analysis": "Brady was rested to open the second half with the Bucs blowing out Detroit.\u00a0Before he was pulled, he had a field day against the Lions' injury-depleted secondary, hitting on\u00a0deep shots to Mike Evans and Rob Gronkowski while adding a pair of red-zone scores. Brady has already set the Bucs' franchise record for touchdown passes,\u00a0and he's been on his best stretch of the season, with\u00a0668 yards and six\u00a0TDs in his last four\u00a0quarters. Tampa clinches\u00a0a playoff spot with their win over Detroit. Brady and the Bucs will close out the regular season against Atlanta in Week 17.\n",
    "timestamp": "2020-12-26 08:04 PM",
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [22.46, 9.68, 23.88, 33.46, 14.12, 14.64, 36.86, 19.06, 5.36, 31.84, 14.24, 23.7, 'BYE', 15.64, 23.4, 29.92]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [23.4, 22.6, 19.6, 16.0, 17.2, 19.7, 19.5, 21.4, 20.7, 15.5, 19.2, 20.1, 'BYE', 19.7, 24.7, 24.2, 18.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [10.5, 12.7, 12.4, 10.2, 10.4, 11.6, 14.5, 13.9, 11.5, 11.2, 10.4, 10.2, 'BYE', 10.4, 12.8, 10.8, 12.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(213, 10, 10, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [25.9, 27.3, 27.2, 24.0, 25.8, 27.6, 28.8, 27.6, 26.2, 26.3, 25.6, 25.3, 'BYE', 26.9, 26.7, 25.7, 28.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16757.png",
    "name": "Derek Carr",
    "depthchart": "Starter: QB-1",
    "team": "Las Vegas Raiders",
    "projected": 18.8,
    "opponent": "Denver Broncos",
    "home_away": "at ",
    "opp_rank_Neu": 12,
    "team_rank_Neu": 10,
    "avg_fp2": 17.21,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 20.2,
    "fanduelSalary": "$7200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A5ACAF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lv.png",
    "headlineNews": "Derek Carr completed 21-of-34 passes for 336 yards and a touchdown in the Raiders' Week 16 loss to the Dolphins.\n",
    "report": "",
    "analysis": "Carr is typically thought of as a check-down heavy passer but he flipped that script versus the Dolphins' stingy secondary. Five of his completions went for more than 15 yards including a beautifully thrown deep ball to Nelson Agholor that was turned into an 85-yard score with the help of some Agholor YAC. Carr also hit Darren Waller on multiple long passes in tight coverage. If it weren't for Ryan Fitzpatrick's heroics at the end of the game, the narrative coming out of Week 16 would likely be that Carr carried the Raiders to a victory and a shot at the playoffs. Carr remains a solid QB2 option against the Broncos next week.\u00a0\n",
    "timestamp": "2020-12-27 05:28 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 13.56,
    "week02": 21.58,
    "week03": 15.44,
    "week04": 20.44,
    "week05": 24.98,
    "week06": "BYE",
    "week07": 20.26,
    "week08": 12.58,
    "week09": 14.0,
    "week10": 7.16,
    "week11": 22.6,
    "week12": 1.6,
    "week13": 32.74,
    "week14": 25.84,
    "week15": 2.12,
    "week16": 23.24,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [13.56, 21.58, 15.44, 20.44, 24.98, 'BYE', 20.26, 12.58, 14.0, 7.16, 22.6, 1.6, 32.74, 25.84, 2.12, 23.24]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.5, 16.0, 10.2, 21.2, 17.8, 'BYE', 13.6, 22.7, 20.2, 20.5, 20.7, 20.5, 11.2, 15.7, 20.1, 18.1, 18.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [9.0, 9.1, 8.7, 7.7, 7.3, 'BYE', 8.5, 9.6, 8.2, 9.4, 8.4, 7.0, 7.8, 11.0, 8.6, 8.8, 8.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [22.9, 24.0, 22.9, 22.6, 22.2, 'BYE', 22.1, 22.7, 23.4, 22.7, 22.4, 22.5, 22.2, 24.9, 24.0, 22.5, 23.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2979520.png",
    "name": "C.J. Beathard",
    "depthchart": "Starter: QB-1",
    "team": "San Francisco 49ers",
    "projected": 18.0,
    "opponent": "Seattle Seahawks",
    "home_away": "",
    "opp_rank_Pos": 32,
    "team_rank_Neu": 12,
    "avg_fp2": 7.67,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 21.05,
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
    "headlineNews": "C.J.\u00a0Beathard completed 13 of 22 passes for 182 yards and three touchdowns in the 49ers' 20-12 Week 16 win over the Cardinals, adding three rushes for 18 yards.\u00a0\n",
    "report": "",
    "analysis": "Beathard was competent throughout the game, perfectly executing a conservative, run-based offensive approach against an Arizona defense unable to stop it. Beathard zeroed in on former college teammate George Kittle, who caught four balls for 92 yards in his return from a foot injury. The 49ers will try to deploy the same approach next week against the Seahawks with Beathard at the helm. He'll be a decent floor option in superflex formats.\u00a0\n",
    "timestamp": "2020-12-27 03:00 AM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": 5.52,
    "week05": 5.76,
    "week06": "DNP",
    "week07": "DNP",
    "week08": "DNP",
    "week09": "DNP",
    "week10": 0.0,
    "week11": "BYE",
    "week12": "DNP",
    "week13": "DNP",
    "week14": "DNP",
    "week15": 8.0,
    "week16": 19.08,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 5.52, 5.76, 'DNP', 'DNP', 'DNP', 'DNP', 0.0, 'BYE', 'DNP', 'DNP', 'DNP', 8.0, 19.08]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 6.2, 6.8, 'DNP', 'DNP', 'DNP', 'DNP', 4.0, 'BYE', 'DNP', 'DNP', 'DNP', 2.4, 15.1, 18.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 11.7, 8.0, 'DNP', 'DNP', 'DNP', 'DNP', 9.0, 'BYE', 'DNP', 'DNP', 'DNP', 6.1, 4.3, 5.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 21.4, 20.9, 'DNP', 'DNP', 'DNP', 'DNP', 20.5, 'BYE', 'DNP', 'DNP', 'DNP', 18.8, 16.9, 20.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16728.png",
    "name": "Teddy Bridgewater",
    "depthchart": "Starter: QB-1",
    "team": "Carolina Panthers",
    "projected": 17.9,
    "opponent": "New Orleans Saints",
    "home_away": "",
    "opp_rank_Neg": 5,
    "team_rank_Neu": 17,
    "avg_fp2": 17.61,
    "opp_rank_allowed_fp2_Neu": 15,
    "opp_avg_allowed_fp2": 18.79,
    "fanduelSalary": "$6900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0085CA",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 133, 202, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#0085CA",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/car.png",
    "headlineNews": "Teddy Bridgewater completed 19-of-28 passes for 197 yards, one touchdown, and one interception in Carolina's 20-13 Week 16 win over Washington.\n",
    "report": "",
    "analysis": "Bridgewater was under duress for a majority of his dropbacks since backup LT Trent Scott was injured and replaced by Michael Schofield, who allowed a strip-sack-fumble to rookie DE Chase Young, mid-game. Young was also responsible for hitting Bridgewater's arm and forcing the quarterback's lone interception. Bridgewater's 14-yard touchdown to Robby Anderson was still probably enough to get fans off his back for another week after he had gone scoreless through December to that point.\u00a0The Panthers\u00a0began the day holding the No. 5 pick and ended at No. 9, setting a precedent for coach Matt Rhule's ongoing rebuild ahead of the team's Week 17 regular season finale against the Saints.\n",
    "timestamp": "2020-12-28 11:24 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 19.4,
    "week02": 10.68,
    "week03": 14.6,
    "week04": 27.24,
    "week05": 20.82,
    "week06": 11.44,
    "week07": 19.16,
    "week08": 13.04,
    "week09": 28.3,
    "week10": 20.04,
    "week11": "DNP",
    "week12": 14.88,
    "week13": "BYE",
    "week14": 20.42,
    "week15": 16.92,
    "week16": 9.58,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [19.4, 10.68, 14.6, 27.24, 20.82, 11.44, 19.16, 13.04, 28.3, 20.04, 'DNP', 14.88, 'BYE', 20.42, 16.92, 9.58]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.7, 15.9, 18.5, 19.1, 11.4, 16.6, 19.9, 20.9, 14.0, 16.0, 'DNP', 13.8, 'BYE', 18.9, 18.8, 15.7, 17.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [8.8, 2.9, 5.1, 4.0, 3.8, 4.8, 7.3, 7.1, 9.1, 8.3, 'DNP', 5.9, 'BYE', 4.5, 7.7, 4.7, 3.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 133, 202, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [25.0, 17.4, 17.1, 17.4, 19.4, 22.4, 22.6, 20.2, 23.6, 23.7, 'DNP', 22.7, 'BYE', 20.7, 21.6, 21.2, 22.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3918298.png",
    "name": "Josh Allen",
    "depthchart": "Starter: QB-1",
    "team": "Buffalo Bills",
    "projected": 17.7,
    "opponent": "Miami Dolphins",
    "home_away": "",
    "opp_rank_Neu": 19,
    "team_rank_Pos": 2,
    "avg_fp2": 25.69,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 17.54,
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
    "headlineNews": "Josh Allen completed 27-of-36 passes for 320 yards and four touchdowns in the Bills' 38-9, Week 16 win over the Patriots, adding 35 rushing yards on four attempts.\n",
    "report": "",
    "analysis": "Allen was rested early in the fourth quarter of the blowout win after a near-perfect night. He should have had five touchdown passes, but both Taiwan Jones and Dawson Knox committed blatant drops in the end zone with nobody around on the same drive before Zack Moss capped it off with a short rushing score. Allen's first touchdown was a four-yarder to blocking TE Lee Smith before Allen and Stefon Diggs hooked up for three touchdowns from 50, 18, and eight yards away in the second half. Allen now holds the Bills' franchise record for completions and touchdown passes and is going to be in the MVP conversation. With the Bills and Steelers tied at 12-3 headed into Week 17 and fighting for the No. 2 seed in the AFC, Allen should be out there against the Dolphins before the playoffs.\n",
    "timestamp": "2020-12-29 04:10 AM",
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [28.18, 34.48, 32.24, 25.42, 18.32, 16.08, 16.38, 13.46, 36.0, 28.86, 'BYE', 16.48, 30.1, 19.32, 37.66, 32.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [19.9, 30.8, 18.3, 21.1, 23.8, 19.8, 18.7, 17.2, 20.8, 21.6, 'BYE', 24.5, 21.1, 26.2, 24.0, 19.8, 17.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.3, 13.0, 10.2, 14.7, 10.7, 9.3, 8.5, 11.2, 13.1, 8.8, 'BYE', 10.3, 10.8, 9.6, 12.9, 10.6, 11.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.6, 27.6, 26.8, 32.7, 30.1, 25.0, 24.9, 28.2, 29.9, 28.6, 'BYE', 29.0, 30.2, 29.0, 28.7, 30.7, 31.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3039707.png",
    "name": "Mitchell Trubisky",
    "depthchart": "Starter: QB-1",
    "team": "Chicago Bears",
    "projected": 17.6,
    "opponent": "Green Bay Packers",
    "home_away": "",
    "opp_rank_Neg": 6,
    "team_rank_Neu": 22,
    "avg_fp2": 16.72,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 17.13,
    "fanduelSalary": "$7300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#c36835",
    "tmColorDark": "#0B162A",
    "tmColorLite_rgba": "rgba(195, 104, 53, 0.2)",
    "tmColorDark_rgba": "rgba(11, 22, 42, 0.2)",
    "tmTextLite": "#c36835",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png",
    "headlineNews": "Mitchell Trubisky completed 24-of-35 passes for 265 yards, two touchdowns, and one interception in the Bears' 41-17, Week 16 win over the Jaguars, adding 10 rushing yards and a third touchdown on the ground.\n",
    "report": "",
    "analysis": "Trubisky has been a legitimate QB1 since reclaiming starting duties in Week 12, and the Bears have won three in a row to take claim of the final No. 7 seed in the NFC playoff picture ahead of a Week 17 date with the Packers. Trubisky has a 10:4 TD:INT mark with an 11th touchdown on the ground since taking back over under center. His interception in this one was as boneheaded as they come, tossing a wobbling duck into the end zone on first down where he should have just thrown the ball away. But Trubisky has certainly cut down on the mistakes over the last month. His touchdowns in this one were five- and 22-yard hookups to Jimmy Graham and a six-yard keeper on the ground. Trubisky gets Green Bay in Week 17 where he'll be a boom-bust back-end QB1.\n",
    "timestamp": "2020-12-27 09:13 PM",
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [24.28, 15.2, 12.62, 'DNP', 'DNP', 'DNP', 'DNP', 0.3, 'DNP', 'DNP', 'BYE', 20.78, 13.28, 24.98, 14.48, 24.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.9, 19.2, 25.5, 'DNP', 'DNP', 'DNP', 'DNP', 4.4, 'DNP', 'DNP', 'BYE', 11.9, 22.8, 20.7, 14.3, 19.0, 17.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.0, 5.8, 7.1, 'DNP', 'DNP', 'DNP', 'DNP', 8.1, 'DNP', 'DNP', 'BYE', 6.5, 10.9, 5.9, 7.9, 7.6, 8.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  "rgba(195, 104, 53, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [24.1, 21.6, 23.2, 'DNP', 'DNP', 'DNP', 'DNP', 24.8, 'DNP', 'DNP', 'BYE', 24.0, 25.9, 25.2, 22.9, 26.2, 25.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14876.png",
    "name": "Ryan Tannehill",
    "depthchart": "Starter: QB-1",
    "team": "Tennessee Titans",
    "projected": 17.5,
    "opponent": "Houston Texans",
    "home_away": "at ",
    "opp_rank_Pos": 26,
    "team_rank_Neu": 21,
    "avg_fp2": 21.49,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 19.83,
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
    "headlineNews": "Ryan Tannehill completed 11-of-24 passes for 121 yards with a touchdown and an interception and had\u00a0three carries for 55 yards and a rushing TD in the Titans' Week 16 loss to the Packers.\n",
    "report": "",
    "analysis": "This was a rough game for Tannehill, who averaged 5.0\u00a0YPA. Tannehill salvaged his fantasy night on a 42-yard TD run where he went untouched down the middle of the field on a third-and-1.\u00a0 The Titans offense got down early and trailed the\u00a0entire game, but snow conditions and a lopsided time of possession led to just 24\u00a0attempts for Tannehill. The Titans will now have to clinch the AFC South in a Week 17 matchup with the Texans. They can clinch a playoff spot with a Colts loss to the Jaguars.\n",
    "timestamp": "2020-12-28 04:43 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 19.36,
    "week02": 26.76,
    "week03": 13.24,
    "week04": "DNP",
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [19.36, 26.76, 13.24, 'DNP', 30.0, 29.56, 17.3, 18.32, 14.62, 10.78, 22.86, 19.14, 28.56, 16.48, 37.02, 18.34]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.0, 17.5, 14.7, 'DNP', 17.0, 18.7, 16.5, 22.5, 14.8, 14.7, 19.8, 12.1, 20.3, 19.8, 22.0, 14.4, 17.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [9.4, 9.1, 9.1, 'DNP', 10.0, 10.1, 8.8, 9.0, 9.9, 9.5, 9.5, 11.7, 11.1, 12.7, 10.2, 14.3, 13.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [22.2, 22.3, 22.4, 'DNP', 23.8, 23.4, 23.5, 23.4, 23.7, 23.1, 22.9, 22.8, 26.3, 24.9, 24.1, 28.6, 26.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3912547.png",
    "name": "Sam Darnold",
    "depthchart": "Starter: QB-1",
    "team": "New York Jets",
    "projected": 16.7,
    "opponent": "New England Patriots",
    "home_away": "at ",
    "opp_rank_Neu": 7,
    "team_rank_Neg": 32,
    "avg_fp2": 12.01,
    "opp_rank_allowed_fp2_Neu": 9,
    "opp_avg_allowed_fp2": 17.68,
    "fanduelSalary": "$6600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#125740",
    "tmColorDark": "#003f2d",
    "tmColorLite_rgba": "rgba(18, 87, 64, 0.2)",
    "tmColorDark_rgba": "rgba(0, 63, 45, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png",
    "headlineNews": "Sam Darnold completed 16-of-32 passes for 175 yards and two touchdowns in the Jets' Week 16 win over the Browns.\n",
    "report": "",
    "analysis": "With the Browns missing six key contributors on offense, the Jets pulled off their second-straight upset of 2020. New York handed Jacksonville the 2021 No. 1 overall pick with the win, but Darnold certainly doesn't care about that. In fact, this win increased his odds of staying as the Jets starter next season. The front office will now have to weigh Darnold with the non-Trevor Lawrence quarterbacks in the upcoming draft. Darnold has one more chance at showing why he deserves a shot with a new coaching staff.\n",
    "timestamp": "2020-12-27 09:34 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 12.2,
    "week02": 11.86,
    "week03": 9.72,
    "week04": 23.6,
    "week05": "DNP",
    "week06": "DNP",
    "week07": 2.8,
    "week08": 7.42,
    "week09": "DNP",
    "week10": "DNP",
    "week11": "DNP",
    "week12": 6.78,
    "week13": 21.04,
    "week14": 5.58,
    "week15": 14.08,
    "week16": 17.0,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.2, 11.86, 9.72, 23.6, 'DNP', 'DNP', 2.8, 7.42, 'DNP', 'DNP', 'DNP', 6.78, 21.04, 5.58, 14.08, 17.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.2, 20.2, 13.8, 21.7, 'DNP', 'DNP', 16.3, 15.8, 'DNP', 'DNP', 'DNP', 17.3, 14.4, 8.2, 10.0, 12.1, 16.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [9.0, 11.1, 8.9, 9.6, 'DNP', 'DNP', 6.7, 6.0, 'DNP', 'DNP', 'DNP', 4.7, 8.7, 7.1, 8.6, 9.8, 6.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  "rgba(18, 87, 64, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.7, 20.4, 22.1, 22.0, 'DNP', 'DNP', 21.0, 20.5, 'DNP', 'DNP', 'DNP', 18.3, 19.6, 20.0, 23.4, 22.0, 18.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3052587.png",
    "name": "Baker Mayfield",
    "depthchart": "Starter: QB-1",
    "team": "Cleveland Browns",
    "projected": 15.8,
    "opponent": "Pittsburgh Steelers",
    "home_away": "",
    "opp_rank_Neg": 2,
    "team_rank_Neg": 24,
    "avg_fp2": 15.99,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 15.23,
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
    "headlineNews": "Baker Mayifeld completed 28-of-53 passes for 283 yards in the Browns' Week 16 loss to the Jets.\n",
    "report": "",
    "analysis": "The Browns placed their top four receivers on the COVID-19 list less than 24 hours before kickoff, and they were without their two best offensive linemen in LT Jedrick Wills and RG Wyatt Teller. This game had disaster written all over it. Cleveland's defense was poor overall, and Mayfield was unable to take things over himself with the ground game struggling (18 carries for 45 yards). When he has a great offensive line and coaching staff, Mayfield can make the throws necessary. It's unclear how far he can lead the team when things aren't perfect around him. The Browns must win next week to have a chance at the playoffs.\n",
    "timestamp": "2020-12-27 09:28 PM",
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.86, 16.26, 14.34, 15.2, 17.58, 7.26, 30.78, 7.78, 'BYE', 5.38, 7.06, 18.42, 28.96, 31.02, 20.98, 8.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [22.1, 19.9, 21.1, 15.8, 13.9, 14.6, 18.4, 25.9, 'BYE', 17.0, 14.6, 15.1, 25.1, 13.3, 15.7, 22.9, 15.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [10.5, 10.3, 10.0, 13.0, 10.1, 11.8, 11.7, 12.8, 'BYE', 11.8, 9.6, 11.7, 9.6, 10.2, 12.3, 11.3, 5.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [22.0, 22.1, 20.2, 22.0, 21.4, 21.0, 19.1, 23.3, 'BYE', 21.7, 23.4, 24.2, 22.0, 23.1, 25.0, 25.1, 20.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3924327.png",
    "name": "Drew Lock",
    "depthchart": "Starter: QB-1",
    "team": "Denver Broncos",
    "projected": 15.7,
    "opponent": "Las Vegas Raiders",
    "home_away": "",
    "opp_rank_Pos": 25,
    "team_rank_Neg": 28,
    "avg_fp2": 14.32,
    "opp_rank_allowed_fp2_Pos": 24,
    "opp_avg_allowed_fp2": 20.43,
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
    "headlineNews": "Drew Lock is tied with Carson Wentz for the league lead with 15\u00a0interceptions.\u00a0\n",
    "report": "",
    "analysis": "That Wentz is still atop the INT leader board after riding the pine for three weeks is remarkable. Lock threw another two picks Sunday against the Chargers in the Broncos' 19-16 loss. Lock, who has the lowest completion rate in the NFL,\u00a0has a turnover in every game this year except the season opener. He's been a disaster throughout the 2020 season. His performance will force the Broncos to once again rethink their future at quarterback, though general manager John Elway seems intent on giving Lock every chance to fail.\u00a0\n",
    "timestamp": "2020-12-28 02:24 PM",
    "source": "Nick Kosmider on Twitter ",
    "game_day_logo": "",
    "week01": 13.14,
    "week02": -1.2,
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": 5.46,
    "week07": 14.96,
    "week08": 20.82,
    "week09": 30.22,
    "week10": 10.74,
    "week11": 12.1,
    "week12": "DNP",
    "week13": 12.94,
    "week14": 25.6,
    "week15": 10.98,
    "week16": 16.06,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [13.14, -1.2, 'DNP', 'DNP', 'DNP', 5.46, 14.96, 20.82, 30.22, 10.74, 12.1, 'DNP', 12.94, 25.6, 10.98, 16.06]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.6, 11.2, 'DNP', 'DNP', 'DNP', 10.9, 8.4, 14.6, 16.6, 14.2, 14.7, 'DNP', 16.7, 20.2, 15.2, 11.4, 15.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [10.3, 10.8, 'DNP', 'DNP', 'DNP', 1.4, 3.6, 6.7, 10.8, 14.2, 5.5, 'DNP', 10.1, 4.7, 8.1, 10.5, 6.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(225, 119, 87, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.8, 21.2, 'DNP', 'DNP', 'DNP', 19.9, 14.6, 20.0, 21.6, 27.9, 15.4, 'DNP', 25.5, 17.6, 23.4, 22.6, 23.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/12471.png",
    "name": "Chase Daniel",
    "depthchart": "Starter: QB-1",
    "team": "Detroit Lions",
    "projected": 15.4,
    "opponent": "Minnesota Vikings",
    "home_away": "",
    "opp_rank_Pos": 24,
    "team_rank_Neu": 11,
    "avg_fp2": 2.83,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 18.48,
    "fanduelSalary": "$6500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0076B6",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(0, 118, 182, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#0076B6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/det.png",
    "headlineNews": "The Lions aren't \"overly optimistic\" about Matthew Stafford's (ribs) chances to play this week against Tennessee.\u00a0\n",
    "report": "",
    "analysis": "Prepare for more tortured language describing Stafford's condition and status as the week rolls on. Stafford reportedly has a rib cartilage injury but the team is \"leaving open possibility\" he'll start in Week 15 \"since Stafford often toughs out injuries,\" according to ESPN's Jeremy Fowler.\u00a0Chase Daniel came off the bench for Stafford in the fourth quarter of Sunday's loss to Green Bay but hasn't started a game since October 2019. Daniel would be a last-ditch superflex option against a bad Titans secondary.\u00a0\n",
    "timestamp": "2020-12-15 06:08 PM",
    "source": "Jeremy Fowler on Twitter ",
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": 0.0,
    "week05": "BYE",
    "week06": "DNP",
    "week07": "DNP",
    "week08": "DNP",
    "week09": 7.26,
    "week10": "DNP",
    "week11": "DNP",
    "week12": "DNP",
    "week13": "DNP",
    "week14": 1.16,
    "week15": 2.3,
    "week16": 3.44,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 0.0, 'BYE', 'DNP', 'DNP', 'DNP', 7.26, 'DNP', 'DNP', 'DNP', 'DNP', 1.16, 2.3, 3.44]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 4.8, 'BYE', 'DNP', 'DNP', 'DNP', 3.7, 'DNP', 'DNP', 'DNP', 'DNP', 2.5, 1.6, 3.9, 15.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 0.0, 'BYE', 'DNP', 'DNP', 'DNP', 0.3, 'DNP', 'DNP', 'DNP', 'DNP', 0.0, 0.0, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 118, 182, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 9.2, 'BYE', 'DNP', 'DNP', 'DNP', 11.6, 'DNP', 'DNP', 'DNP', 'DNP', 5.4, 8.0, 4.4, 8.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3917315.png",
    "name": "Kyler Murray",
    "depthchart": "Starter: QB-1",
    "team": "Arizona Cardinals",
    "projected": 15.3,
    "opponent": "Los Angeles Rams",
    "home_away": "at ",
    "opp_rank_Neg": 1,
    "team_rank_Neu": 15,
    "avg_fp2": 25.8,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 14.51,
    "fanduelSalary": "$7800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#97233F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(151, 35, 63, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#97233F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
    "headlineNews": "Kyler Murray (leg) told reporters Wednesday that he's \"good\" and expects to make the Week 17 start against the Rams.\n",
    "report": "",
    "analysis": "Murray is practicing in full, putting him right on track for Sunday's duel with Rams backup QB John Wolford. The Cardinals should be viewed as overwhelming favorites against the shorthanded Rams with a playoff spot on the line. Murray finished the Weeks 1-16 fantasy season as the overall QB1.\n",
    "timestamp": "2021-01-01 12:21 AM",
    "source": "Darren Urban on Twitter",
    "game_day_logo": "",
    "week01": 27.3,
    "week02": 33.14,
    "week03": 24.7,
    "week04": 23.12,
    "week05": 27.3,
    "week06": 28.92,
    "week07": 38.1,
    "week08": "BYE",
    "week09": 37.92,
    "week10": 30.9,
    "week11": 20.26,
    "week12": 8.9,
    "week13": 17.42,
    "week14": 18.46,
    "week15": 34.14,
    "week16": 16.38,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [27.3, 33.14, 24.7, 23.12, 27.3, 28.92, 38.1, 'BYE', 37.92, 30.9, 20.26, 8.9, 17.42, 18.46, 34.14, 16.38]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.8, 22.3, 22.3, 20.8, 19.7, 16.0, 22.9, 'BYE', 22.0, 21.7, 22.5, 16.4, 17.0, 12.5, 27.7, 23.9, 15.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [10.9, 13.9, 11.4, 17.0, 15.5, 14.0, 12.9, 'BYE', 5.7, 14.1, 24.2, 17.6, 9.4, 16.4, 11.2, 12.6, 15.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.5, 26.1, 24.0, 30.4, 28.8, 27.4, 25.1, 'BYE', 25.1, 31.6, 35.0, 33.8, 23.0, 31.2, 28.1, 29.8, 28.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3917792.png",
    "name": "Daniel Jones",
    "depthchart": "Starter: QB-1",
    "team": "New York Giants",
    "projected": 15.1,
    "opponent": "Dallas Cowboys",
    "home_away": "",
    "opp_rank_Neu": 11,
    "team_rank_Neg": 29,
    "avg_fp2": 13.4,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 19.86,
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
    "headlineNews": "Daniel Jones completed 24-of-41 passes for 252 yards and a touchdown in the Giants' 27-13 Week 16 loss to the Ravens, adding one rush for three yards.\u00a0\n",
    "report": "",
    "analysis": "A completely immobile Jones faced nonstop pressure from Baltimore's front seven. He was sacked six times in pass-heavy game script. Clearly not over his ankle and hamstring issues, Jones couldn't scramble or even dodge oncoming defenders. The Giants offense did next to nothing until the fourth quarter, when the Ravens -- up multiple scores -- fell back into a softer defense. With his rushing production reduced to nothing, Jones will only be viable in superflex leagues next week against Dallas.\u00a0\n",
    "timestamp": "2020-12-27 10:04 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 19.36,
    "week02": 8.74,
    "week03": 9.06,
    "week04": 11.1,
    "week05": 8.18,
    "week06": 14.88,
    "week07": 21.68,
    "week08": 18.24,
    "week09": 12.88,
    "week10": 22.16,
    "week11": "BYE",
    "week12": 10.42,
    "week13": "DNP",
    "week14": 3.08,
    "week15": "DNP",
    "week16": 14.38,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [19.36, 8.74, 9.06, 11.1, 8.18, 14.88, 21.68, 18.24, 12.88, 22.16, 'BYE', 10.42, 'DNP', 3.08, 'DNP', 14.38]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.4, 20.0, 16.4, 16.3, 21.5, 17.4, 15.8, 14.1, 16.0, 14.7, 'BYE', 22.2, 'DNP', 17.6, 'DNP', 9.8, 15.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [8.1, 5.0, 4.9, 7.5, 8.7, 7.8, 7.0, 6.9, 5.2, 6.6, 'BYE', 11.6, 'DNP', 6.9, 'DNP', 7.3, 5.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [27.5, 25.3, 15.3, 27.9, 25.6, 26.4, 25.1, 24.0, 25.4, 22.6, 'BYE', 26.8, 'DNP', 25.5, 'DNP', 27.4, 24.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2580.png",
    "name": "Drew Brees",
    "depthchart": "Starter: QB-1",
    "team": "New Orleans Saints",
    "projected": 15.1,
    "opponent": "Carolina Panthers",
    "home_away": "at ",
    "opp_rank_Neu": 17,
    "team_rank_Neu": 19,
    "avg_fp2": 17.77,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 18.21,
    "fanduelSalary": "$7400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9b845c",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(155, 132, 92, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#9b845c",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
    "headlineNews": "Drew Brees completed 19-of-26 passes for 311 yards and two interceptions in the Saints' Week 16 win over the Vikings.\n",
    "report": "",
    "analysis": "Brees couldn't have looked better when handing the ball off to Alvin Kamara who carried his fantasy managers to a championship by scoring six times. As a passer, Brees was up-and-down. He was mostly accurate underneath and over the middle, but he made multiple crucial mistakes when putting balls into tight windows. Brees' massively underthrown target to Marquez Callaway down the seam adds to the narrative that the 41-year-old can't throw deep anymore. It's a legit concern for the Saints' Super Bowl chances, although the ground game and defense still make them one of the league's best all-around teams. Brees will be a forgettable QB2 in Week 17, assuming the Saints don't rest their starters.\n",
    "timestamp": "2020-12-26 01:03 AM",
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.4, 15.48, 23.52, 16.54, 22.1, 'BYE', 23.68, 19.6, 22.68, 6.94, 'DNP', 'DNP', 'DNP', 'DNP', 20.36, 10.14]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [21.8, 22.8, 18.5, 21.3, 19.1, 'BYE', 19.7, 13.3, 22.3, 21.2, 'DNP', 'DNP', 'DNP', 'DNP', 24.9, 19.5, 15.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [9.4, 14.7, 9.6, 11.3, 10.4, 'BYE', 11.8, 10.8, 11.7, 10.4, 'DNP', 'DNP', 'DNP', 'DNP', 11.1, 10.6, 8.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(155, 132, 92, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [26.8, 30.5, 27.9, 28.4, 25.9, 'BYE', 26.6, 26.9, 26.9, 27.8, 'DNP', 'DNP', 'DNP', 'DNP', 27.1, 27.6, 26.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/11237.png",
    "name": "Matt Ryan",
    "depthchart": "Starter: QB-1",
    "team": "Atlanta Falcons",
    "projected": 15.0,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "at ",
    "opp_rank_Neu": 22,
    "team_rank_Pos": 5,
    "avg_fp2": 18.05,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 18.98,
    "fanduelSalary": "$7500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/atl.png",
    "headlineNews": "Matt Ryan completed 27-of-35 passes for 300 yards and two touchdowns in the Falcons' 17-14, Week 16 loss to the Chiefs.\u00a0\n",
    "report": "",
    "analysis": "This was a Falcons loss if there ever was one, as CB A.J. Terrell dropped an end zone interception with 2:07 remaining and the Falcons winning 14-10. Patrick Mahomes then threw a 25-yard score the next play. On the ensuing drive, Younghoe Koo missed a game-tying, 39-yard field goal with 0:14 remaining. For his part, Ryan spent the afternoon under siege, absorbing \"just\" four sacks but coming close to countless more. He had trouble getting his connection with Calvin Ridley going, looking his only twice before halftime. He did correct that with seven second half looks. Playing out the string of yet another lost season, Ryan seems unlikely to have Julio Jones (hamstring) back for next week's finale against the Bucs. He will be a mid-range QB2 vs. the Bucs' tough defense.\u00a0\n",
    "timestamp": "2020-12-27 09:47 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 24.9,
    "week02": 28.52,
    "week03": 12.42,
    "week04": 12.4,
    "week05": 7.94,
    "week06": 31.64,
    "week07": 17.52,
    "week08": 18.94,
    "week09": 23.36,
    "week10": "BYE",
    "week11": 7.28,
    "week12": 14.9,
    "week13": 12.92,
    "week14": 10.26,
    "week15": 27.84,
    "week16": 19.9,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [24.9, 28.52, 12.42, 12.4, 7.94, 31.64, 17.52, 18.94, 23.36, 'BYE', 7.28, 14.9, 12.92, 10.26, 27.84, 19.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [20.4, 15.8, 20.9, 19.9, 18.1, 19.2, 20.2, 19.7, 20.7, 'BYE', 19.7, 15.7, 19.3, 22.1, 17.1, 18.7, 15.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [11.2, 13.1, 11.0, 14.8, 11.8, 12.6, 12.5, 11.4, 11.1, 'BYE', 11.1, 11.1, 10.9, 10.7, 10.8, 11.3, 11.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [24.9, 25.8, 24.1, 27.2, 24.9, 24.7, 25.8, 25.1, 24.2, 'BYE', 24.7, 24.3, 24.4, 23.8, 23.7, 24.6, 23.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2574511.png",
    "name": "Brandon Allen",
    "depthchart": "Starter: QB-1",
    "team": "Cincinnati Bengals",
    "projected": 14.8,
    "opponent": "Baltimore Ravens",
    "home_away": "",
    "opp_rank_Neu": 14,
    "team_rank_Neu": 23,
    "avg_fp2": 13.39,
    "opp_rank_allowed_fp2_Neu": 14,
    "opp_avg_allowed_fp2": 18.74,
    "fanduelSalary": "$6800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#ea7330",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(234, 115, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#ea7330",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png",
    "headlineNews": "Brandon Allen completed 29-of-37 passes for 371 yards and two touchdowns in the Bengals' Week 16 win over the Texans.\n",
    "report": "",
    "analysis": "The Bengals waited until late in the week to name Allen the starter. He responded with his best game as a pro, throwing for a career high in yards and hitting Tee Higgins and Drew Sample for a pair of touchdowns. The Texans' secondary gave up chunk plays all game, with Higgins, A.J. Green, and Alex Erickson all catching passes over 30 yards.\u00a0Allen struggled in his previous three starts, so this was a needed step forward. The Bengals will close out the regular season against the Ravens in Week 17.\n",
    "timestamp": "2020-12-27 09:24 PM",
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
    "week12": 7.14,
    "week13": 9.42,
    "week14": 13.88,
    "week15": "DNP",
    "week16": 23.14,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 7.14, 9.42, 13.88, 'DNP', 23.14]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 12.0, 9.0, 18.7, 'DNP', 10.4, 14.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 0.0, 6.2, 6.3, 'DNP', 7.9, 7.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 11.9, 20.1, 21.2, 'DNP', 15.9, 21.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15837.png",
    "name": "Mike Glennon",
    "depthchart": "Starter: QB-1",
    "team": "Jacksonville Jaguars",
    "projected": 13.5,
    "opponent": "Indianapolis Colts",
    "home_away": "at ",
    "opp_rank_Neu": 18,
    "team_rank_Neu": 20,
    "avg_fp2": 12.23,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 17.97,
    "fanduelSalary": "$6700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#006778",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 103, 120, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#006778",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/jax.png",
    "headlineNews": "Jaguars coach Doug Marrone said Mike Glennon will start Week 17 against the Colts.\n",
    "report": "",
    "analysis": "The Jaguars are sticking with journeyman Glennon for another game.\u00a0Glennon has lost all four of his starts this year with a 39.6 QBR and 5:5 TD/INT ratio. Jacksonville has already locked up the No. 1 overall pick.\u00a0They can knock the Colts out of the playoffs with a win in Week 17.\n",
    "timestamp": "2020-12-30 03:24 PM",
    "source": "NFL Network",
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
    "week11": "DNP",
    "week12": 18.0,
    "week13": 14.1,
    "week14": 2.4,
    "week15": "DNP",
    "week16": 14.44,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 18.0, 14.1, 2.4, 'DNP', 14.44]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 12.6, 16.4, 20.0, 'DNP', 15.2, 13.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 4.7, 8.1, 6.8, 'DNP', 4.3, 7.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 103, 120, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 15.8, 18.1, 17.5, 'DNP', 15.3, 18.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14012.png",
    "name": "Andy Dalton",
    "depthchart": "Starter: QB-1",
    "team": "Dallas Cowboys",
    "projected": 13.0,
    "opponent": "New York Giants",
    "home_away": "at ",
    "opp_rank_Neu": 16,
    "team_rank_Neu": 7,
    "avg_fp2": 13.18,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 17.14,
    "fanduelSalary": "$7100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#7F9695",
    "tmColorDark": "#041E42",
    "tmColorLite_rgba": "rgba(127, 150, 149, 0.2)",
    "tmColorDark_rgba": "rgba(4, 30, 66, 0.2)",
    "tmTextLite": "#7F9695",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
    "headlineNews": "Andy Dalton has targeted the Cowboys' top-three receivers almost evenly this season.\u00a0\n",
    "report": "",
    "analysis": "Amari Cooper has the slight target edge with Dalton under center, drawing 56 targets. Michael Gallup, meanwhile, has 53 targets, and CeeDee Lamb has 54. Dalton's adjusted yards per attempt when targeting Cooper and Gallup has been almost identical. Dalton has provided a major fantasy boost for Gallup, who was the odd man out when Dak Prescott was lighting the league aflame in the season's first six weeks. Gallup leads the team in targets over the past four weeks. He should be considered a high-end WR3 with upside in Week 17 against the Giants.\u00a0\n",
    "timestamp": "2020-12-28 05:36 PM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": 0.0,
    "week03": "DNP",
    "week04": "DNP",
    "week05": 2.44,
    "week06": 13.04,
    "week07": 3.6,
    "week08": "DNP",
    "week09": "DNP",
    "week10": "BYE",
    "week11": 19.82,
    "week12": 13.3,
    "week13": 19.6,
    "week14": 15.3,
    "week15": 17.16,
    "week16": 27.58,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 0.0, 'DNP', 'DNP', 2.44, 13.04, 3.6, 'DNP', 'DNP', 'BYE', 19.82, 13.3, 19.6, 15.3, 17.16, 27.58]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 5.1, 'DNP', 'DNP', 5.1, 15.6, 10.7, 'DNP', 'DNP', 'BYE', 13.7, 16.3, 9.3, 15.1, 16.6, 20.9, 13.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 7.8, 'DNP', 'DNP', 7.8, 7.3, 7.8, 'DNP', 'DNP', 'BYE', 9.0, 8.2, 9.0, 8.4, 7.5, 10.5, 9.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  "rgba(127, 150, 149, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 23.1, 'DNP', 'DNP', 21.1, 18.2, 19.6, 'DNP', 'DNP', 'BYE', 22.2, 21.9, 22.6, 24.1, 22.7, 23.8, 22.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/11291.png",
    "name": "Chad Henne",
    "depthchart": "Starter: QB-1",
    "team": "Kansas City Chiefs",
    "projected": 11.5,
    "opponent": "Los Angeles Chargers",
    "home_away": "",
    "opp_rank_Neu": 9,
    "team_rank_Pos": 1,
    "avg_fp2": 3.5,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 20.51,
    "fanduelSalary": "$6400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Coach Andy Reid announced Patrick Mahomes will rest Week 17 against the Chargers, and Chad Henne will make the start.\n",
    "report": "",
    "analysis": "Kansas City has already locked up the No. 1 seed in the AFC and a first-round bye. Mahomes will essentially get two weeks off and sets his eyes on what the team hopes is a second straight Super Bowl title. 35-year-old Henne will be making his first start since 2014. Expect the Chiefs to rest a majority of their other key starters.\n",
    "timestamp": "2020-12-30 08:00 PM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": 6.32,
    "week08": 0.68,
    "week09": "DNP",
    "week10": "BYE",
    "week11": "DNP",
    "week12": "DNP",
    "week13": "DNP",
    "week14": "DNP",
    "week15": "DNP",
    "week16": "DNP",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 6.32, 0.68, 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', -0.0, 2.0, 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 11.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 0.0, 0.0, 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 7.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 10.0, 6.8, 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 18.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/8416.png",
    "name": "Alex Smith",
    "depthchart": "Starter: QB-1",
    "team": "Washington Football Team",
    "projected": 10.8,
    "opponent": "Philadelphia Eagles",
    "home_away": "at ",
    "opp_rank_Neu": 20,
    "team_rank_Neg": 26,
    "avg_fp2": 9.59,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 19.74,
    "fanduelSalary": "$6700",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Calf",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#773141",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(119, 49, 65, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png",
    "headlineNews": "Alex Smith (calf) is questionable for Week 17 against the Eagles.\n",
    "report": "",
    "analysis": "Smith returned to practice on Thursday and was limited for the team's last two sessions of the regular season. In taking first-team reps ahead of Taylor Heinicke, we imagine Smith absolutely gets the nod Sunday night. It remains unclear if he'll have either Terry McLaurin (ankle, questionable) or Antonio Gibson (toe, questionable) to throw to. Still, Washington should have no issues scoring points since the Eagles' secondary had recently been scorched by\u00a0Taysom Hill, Kyler Murray, and Andy Dalton.\n",
    "timestamp": "2021-01-01 06:57 PM",
    "source": "Nicki Jhabvala on Twitter",
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": 1.58,
    "week06": "DNP",
    "week07": "DNP",
    "week08": "BYE",
    "week09": 14.0,
    "week10": 16.0,
    "week11": 9.34,
    "week12": 9.06,
    "week13": 15.84,
    "week14": 1.28,
    "week15": "DNP",
    "week16": "DNP",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 1.58, 'DNP', 'DNP', 'BYE', 14.0, 16.0, 9.34, 9.06, 15.84, 1.28, 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 2.8, 'DNP', 'DNP', 'BYE', 4.8, 14.5, 17.4, 19.3, 15.2, 12.7, 'DNP', 'DNP', 10.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 5.8, 'DNP', 'DNP', 'BYE', 3.4, 9.1, 5.5, 9.1, 8.9, 7.7, 'DNP', 'DNP', 9.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 19.2, 'DNP', 'DNP', 'BYE', 17.9, 22.1, 20.8, 21.4, 21.9, 22.0, 'DNP', 'DNP', 20.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116407.png",
    "name": "Mason Rudolph",
    "depthchart": "Starter: QB-1",
    "team": "Pittsburgh Steelers",
    "projected": 8.2,
    "opponent": "Cleveland Browns",
    "home_away": "at ",
    "opp_rank_Neu": 21,
    "team_rank_Neu": 16,
    "avg_fp2": -0.09,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 20.52,
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
    "headlineNews": "Ben\u00a0Roethlisberger is out for Week 17 against the Browns.\u00a0\n",
    "report": "",
    "analysis": "The team will rest their haggard starting QB in the regular season finale. Mason Rudolph will get the start against Cleveland, making all Steelers receivers and running backs terribly unappealing. Cleveland's defense is one of the week's best options with Rudolph starting.\u00a0\n",
    "timestamp": "2021-01-01 09:38 PM",
    "source": "Mary Kay Cabot on Twitter ",
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": -0.06,
    "week07": "DNP",
    "week08": "DNP",
    "week09": 0.12,
    "week10": 0.0,
    "week11": -0.4,
    "week12": "DNP",
    "week13": "DNP",
    "week14": "DNP",
    "week15": "DNP",
    "week16": "DNP",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', -0.06, 'DNP', 'DNP', 0.12, 0.0, -0.4, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 4.4, 'DNP', 'DNP', 2.7, 5.5, 2.9, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 8.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 9.8, 'DNP', 'DNP', 4.0, 0.6, 0.0, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 1.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 15.5, 'DNP', 'DNP', 13.7, 8.6, 6.2, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 15.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4241479.png",
    "name": "Tua Tagovailoa",
    "depthchart": "Starter: QB-1",
    "team": "Miami Dolphins",
    "projected": 7.2,
    "opponent": "Buffalo Bills",
    "home_away": "at ",
    "opp_rank_Neu": 8,
    "team_rank_Neg": 25,
    "avg_fp2": 13.58,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 19.33,
    "fanduelSalary": "$6800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#008E97",
    "tmColorDark": "#005778",
    "tmColorLite_rgba": "rgba(0, 142, 151, 0.2)",
    "tmColorDark_rgba": "rgba(0, 87, 120, 0.2)",
    "tmTextLite": "#f5821f",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/mia.png",
    "headlineNews": "Tua Tagovailoa was not deemed a \"close contact\" of COVID-positive Ryan Fitzpatrick.\u00a0\n",
    "report": "",
    "analysis": "It beggars belief that quarterbacks who must do everything together during the week are not \"close contacts,\" but the NFL says you're not as long as you follow all distancing and masking guidelines. The coronavirus tends to get around those precautions if you are indoors together long enough, but unlike the Broncos in Week 12, the Dolphins at least did what the league's rules asked of them. Tagovailoa will be backed up by Jake Rudock for Sunday's must-win game against the Bills, who probably will not be going full steam with only seeding to play for. With his supporting cast uncertain, Tagovailoa remains a low-floor QB2.\u00a0\n",
    "timestamp": "2020-12-31 06:50 PM",
    "source": "Tom Pelissero on Twitter ",
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": 0.36,
    "week07": "DNP",
    "week08": 5.72,
    "week09": 21.42,
    "week10": 14.66,
    "week11": 7.32,
    "week12": "DNP",
    "week13": 16.14,
    "week14": 28.04,
    "week15": 19.7,
    "week16": 8.86,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 0.36, 'DNP', 5.72, 21.42, 14.66, 7.32, 'DNP', 16.14, 28.04, 19.7, 8.86]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 8.3, 'DNP', 12.6, 14.0, 11.0, 12.0, 'DNP', 8.9, 15.2, 20.6, 18.1, 7.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 0.0, 'DNP', 6.0, 5.8, 6.8, 5.8, 'DNP', 6.3, 3.4, 4.8, 3.0, 6.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 142, 151, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 10.4, 'DNP', 19.7, 19.8, 20.9, 23.1, 'DNP', 19.8, 19.9, 24.9, 16.0, 15.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4040715.png",
    "name": "Jalen Hurts",
    "depthchart": "Starter: QB-1",
    "team": "Philadelphia Eagles",
    "projected": 6.0,
    "opponent": "Washington Football Team",
    "home_away": "",
    "opp_rank_Neg": 3,
    "team_rank_Neg": 27,
    "avg_fp2": 6.83,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 16.74,
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
    "headlineNews": "Eagles head coach Doug Pederson said Jalen Hurts will start in Week 17 against Washington.\u00a0\n",
    "report": "",
    "analysis": "It's only worth noting since the Eagles' season is over and the team could rest some starters in it's finale. Hurts remains a top fantasy option thanks to his rushing upside. He could see slightly depressed DFS usage after a relatively down Week 16 against Dallas.\u00a0\n",
    "timestamp": "2020-12-29 05:47 PM",
    "source": "Jeff McLane on Twitter ",
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "week01": "DNP",
    "week02": 0.0,
    "week03": 0.8,
    "week04": 1.8,
    "week05": 0.72,
    "week06": 3.1,
    "week07": 0.2,
    "week08": 0.36,
    "week09": "BYE",
    "week10": -0.1,
    "week11": 0.6,
    "week12": 0.24,
    "week13": 10.26,
    "week14": 19.28,
    "week15": 37.82,
    "week16": 20.58,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 0.0, 0.8, 1.8, 0.72, 3.1, 0.2, 0.36, 'BYE', -0.1, 0.6, 0.24, 10.26, 19.28, 37.82, 20.58]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 0.7, 1.2, 0.4, -1.2, 0.9, 4.2, 0.6, 'BYE', 2.1, -0.7, -0.5, -0.6, 8.9, 11.9, 18.3, 6.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.1, 'BYE', 0.0, 0.0, 0.8, 0.1, 0.0, 13.6, 16.2, 8.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 10.9, 8.4, 8.3, 9.3, 9.2, 8.7, 0.8, 'BYE', 1.7, 2.1, 1.5, 1.1, 6.5, 16.8, 17.6, 20.1]
                    }
                    
                    ]
               }
            }];




$scope.positionRB = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3043078.png",
    "name": "Derrick Henry",
    "depthchart": "Starter: RB-1",
    "team": "Tennessee Titans",
    "projected": 23.3,
    "opponent": "Houston Texans",
    "home_away": "at ",
    "opp_rank_Pos": 31,
    "team_rank_Pos": 2,
    "avg_fp2": 19.24,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 28.95,
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
    "headlineNews": "Derrick Henry rushed 23 times for 98 yards in Week 16 against the Packers.\u00a0\n",
    "report": "",
    "analysis": "He wasn't targeted in the passing game.\u00a0The Packers held Henry to just 35 yards rushing on 11 carries in the first half. The Titans tried to get him going after that, but it was too late with them chasing a\u00a0three score lead\u00a0in the fourth quarter. This was a down game for Henry\u2019s standards, as he\u2019s had at least 100 yards in five of the last six games. Henry and the Titans will look to clinch the AFC South in Week 17 against the Texans.\n",
    "timestamp": "2020-12-28 04:24 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 14.6,
    "week02": 8.4,
    "week03": 26.0,
    "week04": "DNP",
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.6, 8.4, 26.0, 'DNP', 18.8, 39.4, 14.2, 17.2, 6.8, 11.4, 19.7, 37.5, 5.4, 35.2, 24.2, 9.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.5, 22.9, 15.0, 'DNP', 16.3, 14.9, 20.2, 14.3, 15.3, 17.1, 21.1, 14.9, 17.5, 16.9, 17.9, 17.1, 23.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.8, 3.9, 1.6, 'DNP', 5.1, 5.3, 3.8, 3.9, 8.8, 5.7, 8.6, 3.2, 6.1, 5.3, 7.9, 3.7, 10.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [23.0, 24.1, 21.1, 'DNP', 21.4, 22.3, 21.7, 23.5, 25.6, 23.3, 23.6, 23.9, 25.6, 20.1, 25.0, 23.7, 29.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4035538.png",
    "name": "David Montgomery",
    "depthchart": "Starter: RB-1",
    "team": "Chicago Bears",
    "projected": 20.9,
    "opponent": "Green Bay Packers",
    "home_away": "",
    "opp_rank_Neu": 14,
    "team_rank_Neg": 24,
    "avg_fp2": 15.29,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 23.51,
    "fanduelSalary": "$8200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#c36835",
    "tmColorDark": "#0B162A",
    "tmColorLite_rgba": "rgba(195, 104, 53, 0.2)",
    "tmColorDark_rgba": "rgba(11, 22, 42, 0.2)",
    "tmTextLite": "#c36835",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png",
    "headlineNews": "David Montgomery rushed 23 times for 95 yards and one touchdown in the Bears' Week 16 win over the Jaguars.\n",
    "report": "",
    "analysis": "He added 26 yards on two catches in the passing game, totaling 100-plus yards with a touchdown for the fifth straight games since returning from his concussion. Montgomery has been a true league-winner throughout the fantasy playoffs, and the Bears now sit in the No. 7 seed for the playoffs at 8-7. Montgomery was garbage-timed\u00a0by Artavis Pierce late in this one when Pierce ran one in from three yards out to put the Bears ahead 41-10 in the fourth quarter. Montgomery scored his touchdown from six yards away in the third quarter. Montgomery gets a Week 17 date with the Packers. He amassed 143 yards and a touchdown against Green Bay in Week 12.\n",
    "timestamp": "2020-12-27 09:07 PM",
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.9, 20.2, 6.4, 9.2, 15.4, 11.7, 9.4, 11.5, 3.7, 'DNP', 'BYE', 22.8, 25.1, 23.0, 28.7, 19.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.2, 11.2, 15.5, 16.0, 5.9, 13.2, 17.5, 11.3, 13.4, 'DNP', 'BYE', 11.7, 18.2, 21.9, 13.8, 18.4, 20.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.6, 1.5, 3.7, 3.8, 2.7, 3.1, 8.5, 4.5, 4.5, 'DNP', 'BYE', 5.4, 4.2, 4.7, 3.1, 6.8, 4.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  "rgba(195, 104, 53, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.5, 13.5, 16.2, 14.2, 15.5, 13.9, 20.0, 17.0, 10.7, 'DNP', 'BYE', 17.7, 15.2, 18.5, 15.4, 21.7, 16.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3128720.png",
    "name": "Nick Chubb",
    "depthchart": "Starter: RB-1",
    "team": "Cleveland Browns",
    "projected": 15.8,
    "opponent": "Pittsburgh Steelers",
    "home_away": "",
    "opp_rank_Neu": 8,
    "team_rank_Pos": 4,
    "avg_fp2": 16.63,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 16.89,
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
    "headlineNews": "Nick Chubb ran more pass routes than Kareem Hunt in the Browns' Week 16\u00a0loss to the Jets.\u00a0\n",
    "report": "",
    "analysis": "Chubb only had 11 rushing attempts as the Browns chased points throughout the game. But he ran 25 pass routes to Hunt's 23 routes, drawing five targets along with Hunt. Hunt did not have an\u00a0expanded passing game role with the team's top four wideouts on the reserve/COVID-19 list. Chubb's pass game usage is an encouraging sign that his fantasy prospects aren't\u00a0game script sensitive.\u00a0\n",
    "timestamp": "2020-12-28 04:45 PM",
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.1, 25.8, 23.5, 4.3, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 18.6, 11.4, 25.1, 17.1, 23.3, 13.6, 15.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.9, 13.3, 10.9, 10.2, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 15.8, 11.4, 16.6, 11.2, 12.1, 14.5, 9.7, 15.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.7, 3.5, 2.6, 7.5, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 4.1, 3.5, 4.8, 6.2, 4.8, 5.0, 4.1, 3.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.4, 20.8, 18.1, 23.9, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 22.7, 18.9, 21.0, 24.5, 23.8, 21.6, 22.5, 24.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2576434.png",
    "name": "Melvin Gordon",
    "depthchart": "Starter: RB-1",
    "team": "Denver Broncos",
    "projected": 15.5,
    "opponent": "Las Vegas Raiders",
    "home_away": "",
    "opp_rank_Neu": 22,
    "team_rank_Neu": 14,
    "avg_fp2": 11.67,
    "opp_rank_allowed_fp2_Pos": 30,
    "opp_avg_allowed_fp2": 26.19,
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
    "headlineNews": "Royce Freeman rushed twice for 16 yards in the Broncos' Week 16 loss to the Chargers, adding two receptions for seven yards.\u00a0\n",
    "report": "",
    "analysis": "Incredibly, Freeman out-targeted Melvin Gordon, who didn't see a single target against LA. Even with Phillip Lindsay (hip) on injured reserve, Freeman was a non-factor in the Denver backfield. Unless Gordon sits in Week 17 against the Raiders, Freeman isn't playable.\u00a0\n",
    "timestamp": "2020-12-28 02:15 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 14.1,
    "week02": 15.4,
    "week03": 5.8,
    "week04": 24.8,
    "week05": "DNP",
    "week06": "DNP",
    "week07": 11.0,
    "week08": 7.7,
    "week09": 3.2,
    "week10": 4.6,
    "week11": 18.4,
    "week12": 3.1,
    "week13": 14.7,
    "week14": 10.6,
    "week15": 22.1,
    "week16": 7.9,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.1, 15.4, 5.8, 24.8, 'DNP', 'DNP', 11.0, 7.7, 3.2, 4.6, 18.4, 3.1, 14.7, 10.6, 22.1, 7.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.8, 7.6, 14.7, 8.8, 'DNP', 'DNP', 15.2, 14.8, 9.7, 14.9, 7.7, 12.2, 10.1, 9.8, 10.5, 12.7, 15.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.3, 8.2, 7.1, 8.0, 'DNP', 'DNP', 6.9, 6.9, 5.5, 8.8, 6.2, 6.3, 7.0, 6.1, 5.2, 7.1, 8.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(225, 119, 87, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [23.5, 20.6, 22.8, 22.8, 'DNP', 'DNP', 21.8, 22.7, 26.0, 24.5, 19.4, 23.5, 21.4, 21.9, 21.2, 23.1, 24.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4259545.png",
    "name": "D'Andre Swift",
    "depthchart": "Starter: RB-1",
    "team": "Detroit Lions",
    "projected": 15.5,
    "opponent": "Minnesota Vikings",
    "home_away": "",
    "opp_rank_Pos": 28,
    "team_rank_Neg": 30,
    "avg_fp2": 12.69,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 23.43,
    "fanduelSalary": "$7500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0076B6",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(0, 118, 182, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#0076B6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/det.png",
    "headlineNews": "D'Andre Swift rushed 10 times for 45 yards and caught 4-of-5 targets for 25 yards in Week 16 against the Bucs.\n",
    "report": "",
    "analysis": "Swift was one of the few bright spots for Detroit in a blowout. He lost a fumble for the second straight week, but Swift was effective on his limited touches.\u00a0Swift made some highlight jump cuts on one of his runs, showcasing why the Lions drafted him in the second round. This breaks a two-game scoring streak for Swift, who has looked great since returning down the stretch. Swift will try to close the season on a high note with a matchup against the Vikings in Week 17.\u00a0\n",
    "timestamp": "2020-12-26 09:08 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 9.8,
    "week02": 9.7,
    "week03": 2.4,
    "week04": 13.2,
    "week05": "BYE",
    "week06": 25.8,
    "week07": 12.8,
    "week08": 3.8,
    "week09": 11.2,
    "week10": 23.4,
    "week11": "DNP",
    "week12": "DNP",
    "week13": "DNP",
    "week14": 13.0,
    "week15": 20.2,
    "week16": 7.0,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.8, 9.7, 2.4, 13.2, 'BYE', 25.8, 12.8, 3.8, 11.2, 23.4, 'DNP', 'DNP', 'DNP', 13.0, 20.2, 7.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.7, 6.0, 9.3, 6.9, 'BYE', 7.0, 10.4, 10.6, 10.7, 10.4, 'DNP', 'DNP', 'DNP', 19.2, 13.5, 8.2, 15.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 2.9, 2.8, 2.2, 'BYE', 5.2, 4.9, 7.3, 5.6, 2.2, 'DNP', 'DNP', 'DNP', 4.1, 8.6, 3.7, 5.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 118, 182, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.1, 10.8, 13.3, 10.2, 'BYE', 11.4, 23.0, 24.5, 12.1, 19.4, 'DNP', 'DNP', 'DNP', 18.5, 18.6, 19.4, 19.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3886818.png",
    "name": "Myles Gaskin",
    "depthchart": "Starter: RB-1",
    "team": "Miami Dolphins",
    "projected": 15.1,
    "opponent": "Buffalo Bills",
    "home_away": "at ",
    "opp_rank_Neu": 20,
    "team_rank_Neu": 22,
    "avg_fp2": 14.22,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 18.97,
    "fanduelSalary": "$6700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#008E97",
    "tmColorDark": "#005778",
    "tmColorLite_rgba": "rgba(0, 142, 151, 0.2)",
    "tmColorDark_rgba": "rgba(0, 87, 120, 0.2)",
    "tmTextLite": "#f5821f",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/mia.png",
    "headlineNews": "Myles Gaskin rushed 14 times for 87 yards in the Dolphins' Week 16 win over the\u00a0Raiders, adding five receptions for 82 yards and two touchdowns.\n",
    "report": "",
    "analysis": "Gaskin's second receiving touchdown came on a play that saw him break an attempted arm-tackle and cut back upfield before sprinting down the sideline for a 59-yard score. He was targeted five times and brought down all five looks. Gaskin only gave up six carries and one target to backup Salvon Ahmed. There should be no doubt that he is the team's workhorse back heading into Week 17 and potentially the playoffs. His usage in all phases of the game makes him a high-end RB2 against the Bills next week.\n",
    "timestamp": "2020-12-27 04:26 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 8.6,
    "week02": 11.2,
    "week03": 12.0,
    "week04": 7.7,
    "week05": 17.6,
    "week06": 14.6,
    "week07": "DNP",
    "week08": 11.8,
    "week09": "DNP",
    "week10": "DNP",
    "week11": "DNP",
    "week12": "DNP",
    "week13": 13.1,
    "week14": "DNP",
    "week15": "DNP",
    "week16": 31.4,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.6, 11.2, 12.0, 7.7, 17.6, 14.6, 'DNP', 11.8, 'DNP', 'DNP', 'DNP', 'DNP', 13.1, 'DNP', 'DNP', 31.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.2, 12.2, 8.7, 9.2, 3.9, 14.4, 'DNP', 12.6, 'DNP', 'DNP', 'DNP', 'DNP', 15.4, 'DNP', 'DNP', 7.3, 15.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.1, 3.2, 6.9, 4.4, 3.5, 5.3, 'DNP', 8.2, 'DNP', 'DNP', 'DNP', 'DNP', 4.0, 'DNP', 'DNP', 8.0, 13.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 142, 151, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [1.8, 7.6, 13.7, 13.1, 9.9, 12.4, 'DNP', 14.2, 'DNP', 'DNP', 'DNP', 'DNP', 15.7, 'DNP', 'DNP', 13.7, 20.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2508176.png",
    "name": "David Johnson",
    "depthchart": "Starter: RB-1",
    "team": "Houston Texans",
    "projected": 15.0,
    "opponent": "Tennessee Titans",
    "home_away": "",
    "opp_rank_Neu": 19,
    "team_rank_Neg": 30,
    "avg_fp2": 10.25,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 23.37,
    "fanduelSalary": "$7300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#03202F",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(3, 32, 47, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/hou.png",
    "headlineNews": "David Johnson rushed 12 times for 128 yards and a touchdown in Week 16 against the Bengals.\n",
    "report": "",
    "analysis": "Johnson had just 19 yards on the first six drives. He got 100 yards on back-to-back drives in the third quarter. This was the first 100-yard rushing\u00a0game for Johnson, who's missed four\u00a0games to injury and struggled when healthy. Johnson will try to close out the regular season on a high note against the Titans in Week 17.\n",
    "timestamp": "2020-12-27 09:30 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 18.4,
    "week02": 6.0,
    "week03": 11.6,
    "week04": 10.2,
    "week05": 11.3,
    "week06": 13.4,
    "week07": 14.4,
    "week08": "BYE",
    "week09": 1.6,
    "week10": 0.0,
    "week11": "DNP",
    "week12": "DNP",
    "week13": 10.4,
    "week14": "DNP",
    "week15": 18.8,
    "week16": 27.4,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [18.4, 6.0, 11.6, 10.2, 11.3, 13.4, 14.4, 'BYE', 1.6, 0.0, 'DNP', 'DNP', 10.4, 'DNP', 18.8, 27.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.9, 5.3, 11.8, 18.8, 22.2, 14.4, 19.0, 'BYE', 14.9, 6.7, 'DNP', 'DNP', 9.9, 'DNP', 10.0, 15.1, 15.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.7, 12.4, 6.5, 7.3, 6.5, 7.8, 5.7, 'BYE', 7.1, 5.5, 'DNP', 'DNP', 6.1, 'DNP', 3.8, 3.3, 6.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [23.0, 29.3, 22.2, 25.0, 21.7, 27.5, 22.2, 'BYE', 23.7, 24.3, 'DNP', 'DNP', 21.6, 'DNP', 19.3, 24.3, 25.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15825.png",
    "name": "Le'Veon Bell",
    "depthchart": "Starter: RB-1",
    "team": "Kansas City Chiefs",
    "projected": 14.9,
    "opponent": "Los Angeles Chargers",
    "home_away": "",
    "opp_rank_Neu": 21,
    "team_rank_Neu": 15,
    "avg_fp2": 6.05,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 20.05,
    "fanduelSalary": "$5900",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Knee",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Le'Veon Bell (knee) is questionable for Week 17 against the Chargers.\n",
    "report": "",
    "analysis": "Bell was a limited participant at practice on Friday, at least giving him a shot to suit up for Kansas City's exhibition. Coach Andy Reid is already holding out \"key starters,\" sideling Patrick Mahomes, Tyreek Hill, and Sammy Watkins (among others), but it's truly up in the air if Bell even fits into that category given his atrocious play since joining the Chiefs. If Bell is ruled out, Darrel 'The Mentor' Williams would surge as a terrific Week 17 option opposite the Chargers' front-seven.\n",
    "timestamp": "2021-01-01 08:08 PM",
    "source": "Adam Teicher on Twitter",
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.6, 'DNP', 'DNP', 'DNP', 7.2, 'DNP', 3.9, 5.3, 0.8, 'BYE', 10.1, 4.2, 6.5, 4.5, 14.1, 4.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.5, 'DNP', 'DNP', 'DNP', 18.3, 'DNP', 9.3, 7.6, 4.6, 'BYE', 5.9, 6.8, 8.9, 5.6, 5.4, 13.2, 14.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [8.0, 'DNP', 'DNP', 'DNP', 10.3, 'DNP', 9.1, 8.9, 6.9, 'BYE', 7.6, 0.7, 7.5, 7.4, 3.1, 4.4, 6.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.1, 'DNP', 'DNP', 'DNP', 27.1, 'DNP', 26.3, 27.1, 26.2, 'BYE', 24.8, 19.8, 24.9, 24.2, 12.6, 23.1, 25.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3068267.png",
    "name": "Austin Ekeler",
    "depthchart": "Starter: RB-1",
    "team": "Los Angeles Chargers",
    "projected": 14.5,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Neu": 18,
    "team_rank_Neu": 18,
    "avg_fp2": 13.8,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 20.52,
    "fanduelSalary": "$7700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0080C6",
    "tmColorDark": "#002A5E",
    "tmColorLite_rgba": "rgba(0, 128, 198, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 94, 0.2)",
    "tmTextLite": "#0080C6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lac.png",
    "headlineNews": "Austin Ekeler rushed 10 times for 45 yards and caught 3-of-3 targets for 23 yards and one touchdown in the Chargers' Week 16 win over the Broncos.\n",
    "report": "",
    "analysis": "Ekeler simply isn't playing at 100-percent health yet, which isn't a surprise given the severity of his hamstring injury. There were times when a fully-healthy Ekeler would've turned the corner for more yards. Still, Ekeler scored a touchdown on a red zone target in the flats to save his stat line. The Chargers will close out the season in Kansas City. It's possible the Chiefs rest some starters in that one. Ekeler will be in the RB1 discussion.\n",
    "timestamp": "2020-12-28 12:14 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 9.2,
    "week02": 16.8,
    "week03": 25.8,
    "week04": 1.9,
    "week05": "DNP",
    "week06": "DNP",
    "week07": "DNP",
    "week08": "DNP",
    "week09": "DNP",
    "week10": "DNP",
    "week11": "DNP",
    "week12": 18.4,
    "week13": 8.8,
    "week14": 19.1,
    "week15": 9.9,
    "week16": 14.3,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.2, 16.8, 25.8, 1.9, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 18.4, 8.8, 19.1, 9.9, 14.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.3, 7.9, 17.6, 11.1, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 13.6, 13.4, 14.7, 17.2, 20.2, 14.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.8, 2.9, 2.1, 3.5, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 4.0, 1.7, 7.2, 3.1, 3.7, 3.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 128, 198, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.0, 22.0, 17.7, 22.3, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 19.2, 19.3, 19.5, 20.6, 19.3, 18.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4241985.png",
    "name": "J.K. Dobbins",
    "depthchart": "Starter: RB-1",
    "team": "Baltimore Ravens",
    "projected": 14.0,
    "opponent": "Cincinnati Bengals",
    "home_away": "at ",
    "opp_rank_Pos": 25,
    "team_rank_Pos": 1,
    "avg_fp2": 9.39,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 21.27,
    "fanduelSalary": "$6400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9E7C0C",
    "tmColorDark": "#241773",
    "tmColorLite_rgba": "rgba(158, 124, 12, 0.2)",
    "tmColorDark_rgba": "rgba(36, 23, 115, 0.2)",
    "tmTextLite": "#9E7C0C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png",
    "headlineNews": "Mark Ingram (illness) did not practice Thursday.\u00a0\n",
    "report": "",
    "analysis": "Ingram, a healthy scratch over the past two weeks, isn't likely to play this week against the Bengals barring a practice injury for Gus Edwards or J.K. Dobbins. Ingram should've been dropped in all fantasy leagues a month ago.\u00a0\n",
    "timestamp": "2020-12-31 07:01 PM",
    "source": "Jamison Hensley on Twitter ",
    "game_day_logo": "",
    "week01": 14.2,
    "week02": 6.6,
    "week03": 6.4,
    "week04": 2.2,
    "week05": 7.0,
    "week06": 3.9,
    "week07": "DNP",
    "week08": 12.6,
    "week09": 4.5,
    "week10": 1.9,
    "week11": 17.5,
    "week12": "DNP",
    "week13": 13.1,
    "week14": 13.3,
    "week15": 14.6,
    "week16": 13.7,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.2, 6.6, 6.4, 2.2, 7.0, 3.9, 'DNP', 12.6, 4.5, 1.9, 17.5, 'DNP', 13.1, 13.3, 14.6, 13.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.5, 11.2, 7.1, 7.9, 6.1, 2.4, 'DNP', 4.3, 7.1, 7.5, 6.5, 'DNP', 11.2, 10.4, 14.1, 11.9, 14.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.4, 7.2, 4.5, 0.0, 2.8, 0.0, 'DNP', 2.7, 3.5, 2.1, 10.9, 'DNP', 2.9, 2.3, 6.3, 3.0, 6.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [7.6, 21.7, 9.8, 15.0, 9.7, 11.1, 'DNP', 12.0, 7.4, 9.0, 14.7, 'DNP', 8.8, 10.3, 14.7, 13.6, 14.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4240021.png",
    "name": "Cam Akers",
    "depthchart": "Starter: RB-1",
    "team": "Los Angeles Rams",
    "projected": 13.0,
    "opponent": "Arizona Cardinals",
    "home_away": "",
    "opp_rank_Neu": 23,
    "team_rank_Neu": 10,
    "avg_fp2": 7.31,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 20.13,
    "fanduelSalary": "$6300",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Ankle",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Rams head coach Sean McVay said\u00a0Cam Akers (ankle) will be a game-time decision in Week 17.\u00a0\n",
    "report": "",
    "analysis": "McVay said he expected Akers -- who missed Week 16 with the ankle injury -- to practice in a limited capacity on Friday. The Rams are heading into Sunday's must-win contest against the Cardinals without Jared Goff (thumb), Darrell Henderson (ankle), and Cooper Kupp (COVID-19). Akers could see a hefty workload if he's active. Either way, Malcolm Brown should see a spike in snaps and touches against Arizona.\u00a0\n",
    "timestamp": "2021-01-01 08:31 PM",
    "source": "Eric D. Williams on Twitter ",
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.8, 1.3, 'DNP', 'DNP', 6.1, 0.0, 0.0, 5.9, 'BYE', 3.8, 8.4, 14.4, 15.9, 20.4, 6.7, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.7, 6.0, 'DNP', 'DNP', 4.2, 2.3, 3.3, 3.3, 'BYE', 2.3, 0.7, 2.4, 5.9, 12.0, 14.4, 'DNP', 13.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 1.1, 'DNP', 'DNP', 0.0, 0.0, 0.0, 0.0, 'BYE', 0.1, 0.3, 0.1, 0.2, 1.6, 4.9, 'DNP', 0.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.9, 7.5, 'DNP', 'DNP', 8.2, 10.1, 9.8, 11.3, 'BYE', 5.5, 5.2, 5.1, 10.5, 10.6, 16.4, 'DNP', 11.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3051392.png",
    "name": "Ezekiel Elliott",
    "depthchart": "Starter: RB-1",
    "team": "Dallas Cowboys",
    "projected": 13.0,
    "opponent": "New York Giants",
    "home_away": "at ",
    "opp_rank_Neu": 11,
    "team_rank_Neu": 17,
    "avg_fp2": 13.15,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 21.91,
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
    "headlineNews": "Ezekiel Elliott rushed 19 times for 105 yards in the Cowboys' Week 16 win over the Eagles, adding four receptions for 34 additional yards.\u00a0\n",
    "report": "",
    "analysis": "Elliott went from questionable to his biggest rushing effort of the season. His 31-yard scamper in fourth quarter clock killing mode was his longest of the season. That's embarrassing, but Elliott did look a good deal more spry against an Eagles defense that lost offensive line destroyer Fletcher Cox early in the proceedings. With the Cowboys still having a shot at the postseason, Elliott will undoubtedly receive an RB2 workload in Week 17 against the Giants, whom he got for 19/91/2 back in Week 5.\u00a0\n",
    "timestamp": "2020-12-28 01:11 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 26.2,
    "week02": 19.2,
    "week03": 14.8,
    "week04": 16.5,
    "week05": 23.0,
    "week06": 8.0,
    "week07": 5.6,
    "week08": 7.8,
    "week09": 7.9,
    "week10": "BYE",
    "week11": 18.4,
    "week12": 2.4,
    "week13": 11.5,
    "week14": 6.9,
    "week15": "DNP",
    "week16": 15.9,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [26.2, 19.2, 14.8, 16.5, 23.0, 8.0, 5.6, 7.8, 7.9, 'BYE', 18.4, 2.4, 11.5, 6.9, 'DNP', 15.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.1, 24.8, 19.0, 23.2, 19.1, 20.9, 16.3, 17.6, 14.8, 'BYE', 14.3, 14.4, 15.1, 17.5, 'DNP', 15.2, 13.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [11.3, 11.4, 12.9, 11.6, 11.4, 11.0, 13.0, 10.6, 9.6, 'BYE', 11.1, 10.1, 7.9, 9.5, 'DNP', 12.1, 8.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  "rgba(127, 150, 149, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [26.4, 25.1, 28.2, 25.0, 25.3, 25.4, 25.5, 26.7, 26.7, 'BYE', 25.1, 25.8, 21.6, 23.5, 'DNP', 22.9, 22.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2979843.png",
    "name": "Kenyan Drake",
    "depthchart": "Starter: RB-1",
    "team": "Arizona Cardinals",
    "projected": 12.7,
    "opponent": "Los Angeles Rams",
    "home_away": "at ",
    "opp_rank_Neg": 3,
    "team_rank_Pos": 3,
    "avg_fp2": 12.36,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 17.06,
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
    "headlineNews": "Cardinals head coach Kliff Kingsbury said Chase\u00a0Edmonds (hip) is a game-time decision for Week 17 against the Rams.\u00a0\n",
    "report": "",
    "analysis": "Edmonds entered Week 16 with ankle and knee injuries and exited the game with a hip issue. Kenyan Drake would likely see a few more touches if Edmonds is sidelined against LA, making Drake a more appealing play in PPR formats.\u00a0\n",
    "timestamp": "2021-01-01 07:35 PM",
    "source": "Darren Urban on Twitter ",
    "game_day_logo": "",
    "week01": 13.5,
    "week02": 10.5,
    "week03": 8.4,
    "week04": 3.5,
    "week05": 12.7,
    "week06": 28.4,
    "week07": 4.6,
    "week08": "BYE",
    "week09": "DNP",
    "week10": 9.4,
    "week11": 14.0,
    "week12": 22.8,
    "week13": 12.8,
    "week14": 15.5,
    "week15": 5.0,
    "week16": 12.0,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [13.5, 10.5, 8.4, 3.5, 12.7, 28.4, 4.6, 'BYE', 'DNP', 9.4, 14.0, 22.8, 12.8, 15.5, 5.0, 12.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.6, 10.1, 16.8, 13.1, 14.5, 9.6, 14.0, 'BYE', 'DNP', 14.4, 16.3, 13.2, 13.2, 15.2, 10.8, 13.7, 12.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.3, 5.1, 12.4, 14.0, 2.0, 0.9, 6.8, 'BYE', 'DNP', 0.0, 1.3, 3.4, 1.8, 1.3, 1.1, 3.2, 3.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.5, 20.4, 24.5, 26.9, 17.1, 16.0, 21.0, 'BYE', 'DNP', 22.6, 16.4, 14.5, 19.9, 18.2, 15.3, 18.3, 17.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4242335.png",
    "name": "Jonathan Taylor",
    "depthchart": "Starter: RB-1",
    "team": "Indianapolis Colts",
    "projected": 12.4,
    "opponent": "Jacksonville Jaguars",
    "home_away": "",
    "opp_rank_Pos": 30,
    "team_rank_Neu": 16,
    "avg_fp2": 14.06,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 25.53,
    "fanduelSalary": "$8400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#014683",
    "tmColorDark": "#002C5F",
    "tmColorLite_rgba": "rgba(1, 70, 131, 0.2)",
    "tmColorDark_rgba": "rgba(0, 44, 95, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png",
    "headlineNews": "Jonathan Taylor rushed 18 times for 74 yards and two touchdowns in Indianapolis' Week 16 loss to Pittsburgh.\n",
    "report": "",
    "analysis": "He didn't catch his lone target. Taylor scored both of his touchdowns in the first half, helping build Indianapolis' 21-7 lead at the intermission, but only got four second-half carries while Pittsburgh scored 21 unanswered points to complete its comeback. Coach Frank Reich said he actually called plays for Taylor in the last two quarters but all were checked to passes at the line of scrimmage. Taylor, who still out-carried Nyheim Hines 18-8, should still explode as a focal piece against Jacksonville in Week 17 since the Colts need a loss from Baltimore or Miami\u00a0to squeeze into the Wild Card round. Buckle up.\n",
    "timestamp": "2020-12-28 12:55 AM",
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.9, 18.0, 12.7, 8.4, 14.4, 13.5, 'BYE', 4.1, 8.4, 4.7, 13.4, 'DNP', 21.0, 29.5, 17.5, 19.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.9, 14.1, 12.7, 15.9, 12.4, 12.9, 'BYE', 18.8, 6.6, 12.3, 10.7, 'DNP', 14.0, 8.8, 20.4, 10.5, 12.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 8.5, 14.4, 11.5, 6.8, 9.6, 'BYE', 12.0, 5.5, 6.0, 7.0, 'DNP', 9.1, 5.3, 8.4, 8.0, 6.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.4, 21.4, 19.4, 17.2, 18.0, 20.2, 'BYE', 14.8, 16.4, 13.3, 15.7, 'DNP', 14.8, 17.5, 18.7, 22.6, 20.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3045127.png",
    "name": "Wayne Gallman",
    "depthchart": "Starter: RB-1",
    "team": "New York Giants",
    "projected": 12.3,
    "opponent": "Dallas Cowboys",
    "home_away": "",
    "opp_rank_Pos": 32,
    "team_rank_Neu": 19,
    "avg_fp2": 8.54,
    "opp_rank_allowed_fp2_Pos": 24,
    "opp_avg_allowed_fp2": 22.58,
    "fanduelSalary": "N/A",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#0B2265",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(11, 34, 101, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png",
    "headlineNews": "Wayne Gallman\u00a0rushed six times for 27 yards in the Giants' Week 16 loss to the Ravens, adding two receptions for 26 yards.\u00a0\n",
    "report": "",
    "analysis": "The Giants only ran the ball 12 times after the Ravens took a big lead. Gallman shared the workload with Alfred Morris for a third straight game. Gallman won't be a usable fantasy option in Week 17 against the Cowboys outside of the deepest leagues.\u00a0\n",
    "timestamp": "2020-12-27 10:26 PM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": 4.5,
    "week05": 3.4,
    "week06": 0.0,
    "week07": 13.9,
    "week08": 12.7,
    "week09": 14.2,
    "week10": 18.5,
    "week11": "BYE",
    "week12": 16.6,
    "week13": 13.5,
    "week14": 8.8,
    "week15": 2.9,
    "week16": 6.3,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 4.5, 3.4, 0.0, 13.9, 12.7, 14.2, 18.5, 'BYE', 16.6, 13.5, 8.8, 2.9, 6.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 3.5, 5.5, 4.1, 4.3, 6.4, 6.6, 7.7, 'BYE', 8.9, 9.7, 15.6, 16.9, 8.1, 12.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 0.0, 1.8, 0.0, 0.6, 0.0, 0.0, 0.4, 'BYE', 3.8, 9.7, 4.0, 0.8, 8.5, 0.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 9.7, 12.5, 12.1, 8.4, 10.3, 14.0, 10.4, 'BYE', 11.2, 18.4, 13.6, 10.9, 15.8, 11.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4360294.png",
    "name": "Antonio Gibson",
    "depthchart": "Starter: RB-1",
    "team": "Washington Football Team",
    "projected": 11.7,
    "opponent": "Philadelphia Eagles",
    "home_away": "at ",
    "opp_rank_Pos": 24,
    "team_rank_Neg": 26,
    "avg_fp2": 13.51,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 19.25,
    "fanduelSalary": "$6700",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Toe",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#773141",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(119, 49, 65, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png",
    "headlineNews": "Antonio Gibson (toe) is questionable for Week 17 against the Eagles.\n",
    "report": "",
    "analysis": "Washington head coach Ron Rivera seems optimistic that Gibson can suit up this week against Philadelphia in a must-win game for the Football Team. If he's active, Gibson should see something close to a starter's workload, while J.D. McKissic continues to vacuum up targets out of the backfield. Gibson would be a RB2 if he's able to play.\u00a0\n",
    "timestamp": "2021-01-01 06:59 PM",
    "source": "Sam Fortier on Twitter",
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.4, 11.7, 11.5, 20.8, 7.6, 7.5, 18.8, 'BYE', 11.0, 20.5, 16.9, 34.1, 1.4, 'DNP', 'DNP', 8.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.3, 6.1, 8.1, 7.6, 12.2, 11.6, 11.9, 'BYE', 10.7, 19.3, 11.4, 11.1, 13.4, 'DNP', 'DNP', 13.8, 11.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.6, 0.7, 6.7, 3.0, 6.6, 8.5, 9.2, 'BYE', 8.1, 8.9, 8.3, 7.2, 3.5, 'DNP', 'DNP', 2.1, 5.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.3, 10.0, 14.8, 19.2, 20.3, 17.5, 11.3, 'BYE', 19.1, 17.2, 16.5, 18.6, 15.0, 'DNP', 'DNP', 23.1, 22.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3045147.png",
    "name": "James Conner",
    "depthchart": "Starter: RB-1",
    "team": "Pittsburgh Steelers",
    "projected": 11.5,
    "opponent": "Cleveland Browns",
    "home_away": "at ",
    "opp_rank_Neu": 12,
    "team_rank_Neg": 32,
    "avg_fp2": 11.53,
    "opp_rank_allowed_fp2_Neu": 9,
    "opp_avg_allowed_fp2": 18.49,
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
    "headlineNews": "James Conner rushed five times for 20 yards and a touchdown in Pittsburgh's Week 16 win over the Colts.\n",
    "report": "",
    "analysis": "The Steelers unsurprisingly called 11 running back carries to Ben Roethlisberger's 49 pass attempts, allowing Benny Snell to inefficiently out-carry Conner 6-5. The latter reached the end zone following a fumble recovery inside the three-yard line. It's been common knowledge for a while now, but Sunday proved Pittsburgh\u00a0has\u00a0no interest nor the talent to effectively run the ball against any opponent. Conner, who garnered fantasy points with five catches on the afternoon, should be kept on benches in Week 17 since the Steelers will likely rest\u00a0its starters with the AFC North crown secured.\n",
    "timestamp": "2020-12-28 03:13 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 2.7,
    "week02": 19.1,
    "week03": 22.9,
    "week04": "DNP",
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.7, 19.1, 22.9, 'DNP', 13.8, 16.7, 12.6, 13.5, 3.0, 5.8, 11.4, 'DNP', 'DNP', 1.8, 'DNP', 15.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.0, 10.1, 17.3, 'DNP', 17.7, 13.3, 13.9, 12.0, 15.0, 15.8, 10.1, 'DNP', 'DNP', 11.5, 'DNP', 10.6, 11.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.2, 0.1, 6.5, 'DNP', 0.0, 5.4, 4.5, 1.5, 7.3, 4.1, 2.6, 'DNP', 'DNP', 1.3, 'DNP', 6.1, 2.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.1, 17.2, 24.3, 'DNP', 23.4, 24.6, 26.5, 22.2, 23.3, 22.3, 17.9, 'DNP', 'DNP', 17.0, 'DNP', 19.3, 19.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15920.png",
    "name": "Latavius Murray",
    "depthchart": "Starter: RB-1",
    "team": "New Orleans Saints",
    "projected": 11.4,
    "opponent": "Carolina Panthers",
    "home_away": "at ",
    "opp_rank_Neu": 16,
    "team_rank_Neu": 7,
    "avg_fp2": 8.31,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 22.73,
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
    "headlineNews": "Saints placed Alvin Kamara on the reserve/COVID-19 list.\u00a0\n",
    "report": "",
    "analysis": "With that, Kamara probably won't play in the Saints' first round playoff game. He certainly won't suit up Sunday against the Panthers. Latavius Murray will operate as the Saints' top running back in Week 17 and in the team's opening playoff game, if Kamara in fact misses the contest. Carolina has surrendered the ninth most rushing yardage and the second most running backs receptions this year. Murray will be a popular DFS option, to say the least.\u00a0\n",
    "timestamp": "2021-01-01 11:03 PM",
    "source": "Nick Underhill on Twitter ",
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.8, 4.3, 7.0, 20.8, 6.7, 'BYE', 6.1, 4.6, 5.2, 5.7, 9.5, 25.1, 2.7, 1.2, 9.9, 11.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.1, 5.2, 5.4, 4.2, 7.7, 'BYE', 7.4, 6.5, 6.0, 8.1, 4.6, 7.3, 5.6, 8.3, 7.2, 8.9, 11.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.7, 1.4, 1.8, 1.7, 1.8, 'BYE', 1.0, 0.0, 1.8, 0.5, 8.2, 1.5, 8.4, 1.6, 1.4, 0.5, 3.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(155, 132, 92, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.1, 16.6, 16.9, 16.0, 16.3, 'BYE', 13.5, 17.3, 16.0, 13.0, 19.0, 15.1, 21.2, 16.9, 16.2, 14.0, 15.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4047365.png",
    "name": "Josh Jacobs",
    "depthchart": "Starter: RB-1",
    "team": "Las Vegas Raiders",
    "projected": 11.2,
    "opponent": "Denver Broncos",
    "home_away": "at ",
    "opp_rank_Pos": 26,
    "team_rank_Neu": 12,
    "avg_fp2": 13.84,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 20.55,
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
    "headlineNews": "Josh Jacobs rushed 13 times for 69 yards in the Raiders' Week 16 loss to the Dolphins.\u00a0\n",
    "report": "",
    "analysis": "Jacobs could have found the end zone but stopped went down on purpose within the five-yard line multiple times in order to set the Raiders up for a last-second field goal. He ran the ball efficiently, averaging 5.3 yards per carry versus a solid Miami defense. However, Jacobs did not see a single target and that has been a common downfall for him from a fantasy perspective. If he doesn't score a touchdown, Jacobs doesn't have the pass-catching role to salvage a quiet rushing day. he remains a low-end RB1 versus the Broncos next week.\n",
    "timestamp": "2020-12-27 05:37 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 33.9,
    "week02": 12.0,
    "week03": 7.8,
    "week04": 8.8,
    "week05": 21.5,
    "week06": "BYE",
    "week07": 4.6,
    "week08": 12.8,
    "week09": 13.3,
    "week10": 27.6,
    "week11": 12.9,
    "week12": 3.9,
    "week13": "DNP",
    "week14": 8.9,
    "week15": 18.9,
    "week16": 6.9,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [33.9, 12.0, 7.8, 8.8, 21.5, 'BYE', 4.6, 12.8, 13.3, 27.6, 12.9, 3.9, 'DNP', 8.9, 18.9, 6.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [19.1, 14.3, 17.7, 15.0, 16.2, 'BYE', 11.3, 16.7, 15.3, 9.2, 14.6, 8.3, 'DNP', 11.4, 11.8, 13.6, 11.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.4, 6.7, 8.4, 5.4, 6.1, 'BYE', 6.7, 8.8, 7.4, 9.4, 8.6, 7.8, 'DNP', 7.1, 12.5, 5.6, 10.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [20.8, 25.0, 25.7, 22.4, 23.4, 'BYE', 24.4, 21.0, 24.9, 22.2, 22.2, 21.9, 'DNP', 24.4, 25.2, 18.3, 26.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4048244.png",
    "name": "Alexander Mattison",
    "depthchart": "Starter: RB-1",
    "team": "Minnesota Vikings",
    "projected": 11.1,
    "opponent": "Detroit Lions",
    "home_away": "at ",
    "opp_rank_Pos": 29,
    "team_rank_Pos": 6,
    "avg_fp2": 4.37,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 28.84,
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
    "headlineNews": "Alexander Mattison (concussion) is practicing Wednesday.\n",
    "report": "",
    "analysis": "Mattison has touched the ball just seven times since Week 9 thanks to an appendectomy, concussion, and Dalvin Cook's bell cow usage. But with Cook (personal) out for Week 17, it puts Mattison in the RB1/2 conversation for Week 17 fantasy players in a dream matchup against the Lions' broken defense. We doubt Mattison gets Cook's usage, but he should split time with Mike Boone and/or Ameer Abdullah and is a good bet for a touchdown.\n",
    "timestamp": "2020-12-30 08:10 PM",
    "source": "Chris Tomasson on Twitter",
    "game_day_logo": "",
    "week01": 10.0,
    "week02": 2.1,
    "week03": 2.7,
    "week04": 7.7,
    "week05": 15.1,
    "week06": 3.5,
    "week07": "BYE",
    "week08": 0.8,
    "week09": 6.9,
    "week10": 0.4,
    "week11": 0.6,
    "week12": 0.6,
    "week13": "DNP",
    "week14": "DNP",
    "week15": 2.0,
    "week16": "DNP",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.0, 2.1, 2.7, 7.7, 15.1, 3.5, 'BYE', 0.8, 6.9, 0.4, 0.6, 0.6, 'DNP', 'DNP', 2.0, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.9, 5.6, 5.5, 3.5, 4.5, 11.4, 'BYE', 6.6, 10.9, 3.7, 4.6, 4.8, 'DNP', 'DNP', 3.4, 'DNP', 11.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.7, 4.6, 1.6, 0.7, 1.5, 2.7, 'BYE', 1.0, 1.4, 0.0, 5.7, 1.5, 'DNP', 'DNP', 3.5, 'DNP', 0.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  "rgba(224, 170, 25, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.1, 10.8, 7.8, 4.7, 7.9, 10.1, 'BYE', 8.6, 6.7, 5.5, 9.6, 8.6, 'DNP', 'DNP', 8.9, 'DNP', 7.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3059915.png",
    "name": "Kareem Hunt",
    "depthchart": "Backup: RB-2",
    "team": "Cleveland Browns",
    "projected": 10.7,
    "opponent": "Pittsburgh Steelers",
    "home_away": "",
    "opp_rank_Neu": 8,
    "team_rank_Pos": 4,
    "avg_fp2": 12.99,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 16.89,
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
    "headlineNews": "Nick Chubb ran more pass routes than Kareem Hunt in the Browns' Week 16\u00a0loss to the Jets.\u00a0\n",
    "report": "",
    "analysis": "Chubb only had 11 rushing attempts as the Browns chased points throughout the game. But he ran 25 pass routes to Hunt's 23 routes, drawing five targets along with Hunt. Hunt did not have an\u00a0expanded passing game role with the team's top four wideouts on the reserve/COVID-19 list. Chubb's pass game usage is an encouraging sign that his fantasy prospects aren't\u00a0game script sensitive.\u00a0\n",
    "timestamp": "2020-12-28 04:45 PM",
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.1, 23.1, 13.4, 19.1, 16.8, 6.7, 17.7, 8.3, 'BYE', 14.7, 8.6, 6.2, 7.2, 26.0, 4.3, 12.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.4, 7.2, 8.8, 8.7, 14.7, 16.5, 16.6, 16.0, 'BYE', 12.2, 8.5, 12.9, 7.8, 6.7, 8.0, 5.1, 10.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.0, 5.2, 7.2, 10.1, 8.3, 6.4, 6.5, 6.7, 'BYE', 7.2, 10.4, 5.6, 7.3, 7.0, 7.3, 5.8, 6.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [20.0, 19.5, 27.5, 20.0, 22.7, 24.1, 24.5, 23.7, 'BYE', 24.6, 23.3, 23.8, 24.0, 23.1, 24.0, 22.3, 25.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3919596.png",
    "name": "Chris Carson",
    "depthchart": "Starter: RB-1",
    "team": "Seattle Seahawks",
    "projected": 10.5,
    "opponent": "San Francisco 49ers",
    "home_away": "at ",
    "opp_rank_Neg": 6,
    "team_rank_Neu": 11,
    "avg_fp2": 14.55,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 16.98,
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
    "headlineNews": "Carlos Hyde (illness) is questionable for Week 17 against the 49ers.\u00a0\n",
    "report": "",
    "analysis": "Hyde didn't practice this week with a non-COVID illness. He's no longer a fantasy relevant player with Chris Carson leading the Seahawks' backfield and Rashaad Penny getting involved in the team's offense. Hyde has seen seven touches over the past two weeks.\u00a0\n",
    "timestamp": "2021-01-01 09:22 PM",
    "source": "Michael-Shawn Duggar on Twitter ",
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [21.6, 18.3, 9.1, 'DNP', 16.9, 'BYE', 4.6, 'DNP', 'DNP', 'DNP', 'DNP', 12.9, 18.5, 17.3, 7.9, 9.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.2, 12.5, 16.4, 'DNP', 16.7, 'BYE', 12.0, 'DNP', 'DNP', 'DNP', 'DNP', 10.8, 15.0, 10.2, 14.0, 15.4, 10.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.2, 5.1, 7.1, 'DNP', 10.4, 'BYE', 9.1, 'DNP', 'DNP', 'DNP', 'DNP', 5.6, 6.0, 7.3, 8.3, 8.3, 6.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.0, 17.4, 20.3, 'DNP', 22.5, 'BYE', 20.8, 'DNP', 'DNP', 'DNP', 'DNP', 17.3, 16.3, 20.8, 19.2, 19.9, 19.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3042519.png",
    "name": "Aaron Jones",
    "depthchart": "Starter: RB-1",
    "team": "Green Bay Packers",
    "projected": 10.5,
    "opponent": "Chicago Bears",
    "home_away": "at ",
    "opp_rank_Neu": 15,
    "team_rank_Neu": 8,
    "avg_fp2": 16.84,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 18.37,
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
    "headlineNews": "Jamaal Williams (quad) practiced fully Friday and will play in Week 17 against the Bears.\u00a0\n",
    "report": "",
    "analysis": "Williams' return will probably throw some cold water on the AJ Dillon breakout. Dillon led the team in snaps and carries last week against the Titans as Aaron Jones struggled through a hip issue. Williams had seen decent run behind Jones before his quad injury kept him sidelined in Week 16. Jones remains the lead back, with Dillon and Williams probably splitting touches.\u00a0\n",
    "timestamp": "2021-01-01 09:03 PM",
    "source": "Rob Demovsky on Twitter ",
    "game_day_logo": "",
    "week01": 15.6,
    "week02": 43.6,
    "week03": 15.6,
    "week04": 19.6,
    "week05": "BYE",
    "week06": 11.6,
    "week07": "DNP",
    "week08": "DNP",
    "week09": 10.4,
    "week10": 12.0,
    "week11": 15.1,
    "week12": 9.5,
    "week13": 22.3,
    "week14": 8.5,
    "week15": 23.3,
    "week16": 11.8,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [15.6, 43.6, 15.6, 19.6, 'BYE', 11.6, 'DNP', 'DNP', 10.4, 12.0, 15.1, 9.5, 22.3, 8.5, 23.3, 11.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.4, 18.4, 17.3, 16.7, 'BYE', 13.6, 'DNP', 'DNP', 14.3, 17.3, 15.3, 12.5, 13.5, 20.2, 14.0, 15.0, 10.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.1, 3.4, 3.8, 8.9, 'BYE', 3.1, 'DNP', 'DNP', 4.6, 18.0, 1.2, 4.6, 4.4, 4.9, 6.2, 4.1, 3.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [24.8, 23.7, 24.1, 21.9, 'BYE', 27.7, 'DNP', 'DNP', 25.7, 32.5, 27.6, 25.4, 25.2, 26.3, 27.7, 23.7, 20.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3912550.png",
    "name": "Ronald Jones",
    "depthchart": "Starter: RB-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 10.4,
    "opponent": "Atlanta Falcons",
    "home_away": "",
    "opp_rank_Neu": 7,
    "team_rank_Neg": 28,
    "avg_fp2": 12.19,
    "opp_rank_allowed_fp2_Neu": 7,
    "opp_avg_allowed_fp2": 17.93,
    "fanduelSalary": "$6600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#D50A0A",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(213, 10, 10, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#D50A0A",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Ronald Jones (finger) was upgraded to \"full\" for Thursday's practice.\u00a0\n",
    "report": "",
    "analysis": "Leonard Fournette (abdomen) remained \"limited.\" Jones' wind will be a question mark after his bout with COVID-19, but he should immediately slide back in as the Bucs' lead back as they jockey for playoff positioning against the Falcons. He will be a low-end RB2 vs. a quietly solid run defense.\u00a0\n",
    "timestamp": "2020-12-31 09:31 PM",
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.2, 9.7, 8.3, 15.8, 14.0, 25.1, 10.1, 4.6, 3.3, 24.3, 2.4, 16.8, 'BYE', 14.9, 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.4, 15.3, 15.0, 12.1, 8.6, 16.6, 13.4, 14.6, 11.7, 16.3, 14.2, 12.9, 'BYE', 14.7, 'DNP', 'DNP', 10.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.2, 2.0, 2.0, 2.9, 1.6, 3.0, 2.5, 3.5, 3.6, 3.1, 0.5, 0.4, 'BYE', 6.3, 'DNP', 'DNP', 4.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(213, 10, 10, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.9, 9.1, 13.6, 11.4, 10.9, 12.6, 12.9, 15.7, 16.0, 16.3, 10.8, 9.7, 'BYE', 18.6, 'DNP', 'DNP', 15.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4040761.png",
    "name": "Devin Singletary",
    "depthchart": "Starter: RB-1",
    "team": "Buffalo Bills",
    "projected": 10.3,
    "opponent": "Miami Dolphins",
    "home_away": "",
    "opp_rank_Neu": 17,
    "team_rank_Neu": 19,
    "avg_fp2": 8.18,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 18.67,
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
    "headlineNews": "Devin Singletary rushed 10 times for 36 yards and caught both of his targets for 16 yards in the Bills' Week 16 win over the Patriots.\n",
    "report": "",
    "analysis": "Singletary made some nifty moves on one of his catches near the end zone. He was narrowly out-touched 13-12 by backfield mate Zack Moss, who turned his looks into 57 yards and a five-yard touchdown run. Singletary and Moss are both TD-dependent RB3's most weeks, and Moss and Josh Allen have the goal-line edge over Singletary.\n",
    "timestamp": "2020-12-29 04:27 AM",
    "source": null,
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.8, 8.6, 14.1, 16.1, 3.8, 5.0, 5.7, 9.7, 4.9, 1.5, 'BYE', 9.7, 9.8, 3.9, 15.9, 6.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.0, 12.2, 15.4, 13.9, 14.2, 19.5, 12.0, 11.0, 8.5, 7.6, 'BYE', 12.3, 8.1, 10.7, 10.4, 13.6, 10.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.0, 5.7, 6.6, 8.2, 6.1, 7.9, 5.1, 3.7, 5.4, 5.5, 'BYE', 4.2, 5.4, 6.9, 4.3, 5.0, 5.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.0, 12.5, 15.1, 17.8, 16.1, 16.9, 14.9, 14.4, 15.4, 14.9, 'BYE', 15.8, 16.6, 14.6, 13.2, 15.5, 14.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2969962.png",
    "name": "Duke Johnson",
    "depthchart": "Backup: RB-2",
    "team": "Houston Texans",
    "projected": 9.6,
    "opponent": "Tennessee Titans",
    "home_away": "",
    "opp_rank_Neu": 19,
    "team_rank_Neg": 30,
    "avg_fp2": 6.58,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 23.37,
    "fanduelSalary": "$4700",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Neck",
    "tmColorLite": "#A71930",
    "tmColorDark": "#03202F",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(3, 32, 47, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/hou.png",
    "headlineNews": "Duke Johnson (neck) was \"limited\" for Wednesday and Thursday's practices.\u00a0\n",
    "report": "",
    "analysis": "Johnson seems 50-50 to return. Even if he suits up for the finale against the Titans, Johnson was playing poorly before going down, while David Johnson has finally come on in Duke's absence the past two weeks. Duke will have zero DFS appeal for Week 17 if he plays. Due $4.65 million next season, Duke is a guaranteed cut with a contract that leaves behind no dead money and clears $5.15 million in space.\u00a0\n",
    "timestamp": "2020-12-31 10:04 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 1.4,
    "week02": "DNP",
    "week03": "DNP",
    "week04": 6.0,
    "week05": 2.4,
    "week06": 1.6,
    "week07": 6.7,
    "week08": "BYE",
    "week09": 15.3,
    "week10": 5.4,
    "week11": 5.0,
    "week12": 15.5,
    "week13": 6.2,
    "week14": 6.9,
    "week15": "DNP",
    "week16": "DNP",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.4, 'DNP', 'DNP', 6.0, 2.4, 1.6, 6.7, 'BYE', 15.3, 5.4, 5.0, 15.5, 6.2, 6.9, 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.0, 'DNP', 'DNP', 7.4, 10.8, 8.2, 8.3, 'BYE', 6.9, 11.6, 8.6, 9.5, 6.8, 8.6, 'DNP', 'DNP', 9.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.8, 'DNP', 'DNP', 5.2, 3.6, 3.7, 4.7, 'BYE', 3.5, 2.5, 3.5, 2.2, 2.8, 3.3, 'DNP', 'DNP', 2.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.0, 'DNP', 'DNP', 15.9, 12.5, 14.2, 15.4, 'BYE', 12.6, 12.9, 12.0, 14.1, 13.7, 13.0, 'DNP', 'DNP', 13.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3916430.png",
    "name": "Nyheim Hines",
    "depthchart": "Backup: RB-2",
    "team": "Indianapolis Colts",
    "projected": 9.1,
    "opponent": "Jacksonville Jaguars",
    "home_away": "",
    "opp_rank_Pos": 30,
    "team_rank_Neu": 16,
    "avg_fp2": 10.17,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 25.53,
    "fanduelSalary": "$6000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#014683",
    "tmColorDark": "#002C5F",
    "tmColorLite_rgba": "rgba(1, 70, 131, 0.2)",
    "tmColorDark_rgba": "rgba(0, 44, 95, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png",
    "headlineNews": "Nyheim Hines rushed eight times for 44 yards, tacking on five catches for 20 yards in Indianapolis' Week 16 loss to the Steelers.\n",
    "report": "",
    "analysis": "Jonathan Taylor was featured inside the 10-yard line in the first half, churning in for two touchdowns while Hines stayed riding the pine. Taylor also out-carried Hines 18-8 despite rushing just four times in the second half. The latter's 13 touches Sunday were his most since Week 12, but Hines should still be slid down as a FLEX option since the Colts have to beat the Jaguars (and get some help) in order to clinch a Wild Card berth. Hines remains a much better option for PPR leagues given his role.\n",
    "timestamp": "2020-12-28 02:02 AM",
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [23.3, 0.9, 8.1, 4.7, 4.0, 5.2, 'BYE', 19.7, 4.8, 26.0, 6.8, 13.5, 10.7, 9.5, 6.4, 8.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.4, 12.4, 6.1, 9.5, 8.6, 7.3, 'BYE', 11.0, 4.1, 8.2, 7.4, 11.4, 9.3, 9.0, 11.5, 7.9, 9.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.5, 3.0, 4.1, 3.6, 2.7, 1.8, 'BYE', 3.0, 2.5, 2.3, 1.6, 2.9, 2.6, 2.7, 3.0, 2.5, 2.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.2, 9.5, 10.4, 11.5, 10.9, 10.9, 'BYE', 13.3, 9.2, 12.6, 13.4, 14.1, 13.4, 13.6, 11.9, 12.6, 13.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15826.png",
    "name": "Giovani Bernard",
    "depthchart": "Starter: RB-1",
    "team": "Cincinnati Bengals",
    "projected": 9.1,
    "opponent": "Baltimore Ravens",
    "home_away": "",
    "opp_rank_Neu": 9,
    "team_rank_Neg": 25,
    "avg_fp2": 8.93,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 19.37,
    "fanduelSalary": "$6200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#ea7330",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(234, 115, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#ea7330",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png",
    "headlineNews": "Giovani Bernard rushed 16 times for 65 yards and caught 7-of-8 targets for 66 yards in Week 16 against the Texans.\n",
    "report": "",
    "analysis": "This was another high-volume game for Bernard, but he was outshined by Samaje Perine (146 total yards, 2 TDs).\u00a0Bernard's snaps were scaled back in the second half with\u00a0Perine running hot. The Texans defense is among the worst in the league, but\u00a0Bernard's role is secure as one of the featured players in an offense that's missing Joe Mixon and Tyler Boyd.\u00a0Bernard is a low-end\u00a0RB2 for Week 16 against the Ravens.\n",
    "timestamp": "2020-12-27 09:43 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 4.8,
    "week02": 5.0,
    "week03": 7.0,
    "week04": 1.9,
    "week05": 0.9,
    "week06": 10.3,
    "week07": 18.1,
    "week08": 21.3,
    "week09": "BYE",
    "week10": 6.7,
    "week11": 7.5,
    "week12": 5.9,
    "week13": 3.9,
    "week14": 1.8,
    "week15": 22.2,
    "week16": 16.6,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.8, 5.0, 7.0, 1.9, 0.9, 10.3, 18.1, 21.3, 'BYE', 6.7, 7.5, 5.9, 3.9, 1.8, 22.2, 16.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.2, 10.0, 4.7, 6.3, 5.5, 5.2, 14.0, 10.4, 'BYE', 9.9, 9.3, 12.1, 10.5, 15.4, 9.2, 9.3, 9.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.6, 8.2, 1.0, 0.9, 0.6, 0.0, 7.5, 2.6, 'BYE', 1.8, 3.2, 4.2, 0.7, 4.2, 2.2, 3.4, 2.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.5, 17.8, 14.0, 11.3, 16.7, 12.1, 18.9, 15.3, 'BYE', 12.6, 14.6, 15.4, 11.1, 13.5, 14.6, 16.4, 14.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2570986.png",
    "name": "Malcolm Brown",
    "depthchart": "Backup: RB-2",
    "team": "Los Angeles Rams",
    "projected": 8.6,
    "opponent": "Arizona Cardinals",
    "home_away": "",
    "opp_rank_Neu": 23,
    "team_rank_Neu": 10,
    "avg_fp2": 6.35,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 20.13,
    "fanduelSalary": "$5600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Rams head coach Sean McVay said\u00a0Cam Akers (ankle) will be a game-time decision in Week 17.\u00a0\n",
    "report": "",
    "analysis": "McVay said he expected Akers -- who missed Week 16 with the ankle injury -- to practice in a limited capacity on Friday. The Rams are heading into Sunday's must-win contest against the Cardinals without Jared Goff (thumb), Darrell Henderson (ankle), and Cooper Kupp (COVID-19). Akers could see a hefty workload if he's active. Either way, Malcolm Brown should see a spike in snaps and touches against Arizona.\u00a0\n",
    "timestamp": "2021-01-01 08:31 PM",
    "source": "Eric D. Williams on Twitter ",
    "game_day_logo": "",
    "week01": 24.5,
    "week02": 4.7,
    "week03": 1.9,
    "week04": 8.1,
    "week05": 2.9,
    "week06": 3.7,
    "week07": 11.7,
    "week08": 6.7,
    "week09": "BYE",
    "week10": 18.1,
    "week11": 3.3,
    "week12": 0.9,
    "week13": 3.2,
    "week14": 0.0,
    "week15": 1.5,
    "week16": 4.0,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [24.5, 4.7, 1.9, 8.1, 2.9, 3.7, 11.7, 6.7, 'BYE', 18.1, 3.3, 0.9, 3.2, 0.0, 1.5, 4.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.2, 12.0, 10.4, 6.1, 12.1, 2.9, 6.0, 5.3, 'BYE', 5.2, 3.5, 4.5, 6.4, 3.1, 2.2, 6.1, 8.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 12.1, 15.7, 0.0, 0.0, 0.0, 0.5, 0.8, 'BYE', 0.5, 1.2, 0.0, 0.0, 1.3, 0.0, 0.3, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [6.2, 19.5, 22.5, 9.3, 6.9, 11.5, 7.9, 7.0, 'BYE', 6.1, 8.4, 8.7, 8.8, 9.4, 6.5, 7.5, 10.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3115364.png",
    "name": "Leonard Fournette",
    "depthchart": "Backup: RB-2",
    "team": "Tampa Bay Buccaneers",
    "projected": 8.4,
    "opponent": "Atlanta Falcons",
    "home_away": "",
    "opp_rank_Neu": 7,
    "team_rank_Neg": 28,
    "avg_fp2": 9.19,
    "opp_rank_allowed_fp2_Neu": 7,
    "opp_avg_allowed_fp2": 17.93,
    "fanduelSalary": "$6600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#D50A0A",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(213, 10, 10, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#D50A0A",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Ronald Jones (finger) was upgraded to \"full\" for Thursday's practice.\u00a0\n",
    "report": "",
    "analysis": "Leonard Fournette (abdomen) remained \"limited.\" Jones' wind will be a question mark after his bout with COVID-19, but he should immediately slide back in as the Bucs' lead back as they jockey for playoff positioning against the Falcons. He will be a low-end RB2 vs. a quietly solid run defense.\u00a0\n",
    "timestamp": "2020-12-31 09:31 PM",
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.4, 25.6, 3.2, 'DNP', 0.0, 'DNP', 12.7, 8.6, 7.1, 4.0, 9.1, 3.5, 'BYE', 'DNP', 20.0, 14.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.7, 6.9, 11.8, 'DNP', 6.7, 'DNP', 6.2, 6.9, 9.2, 12.4, 7.9, 9.9, 'BYE', 'DNP', 12.6, 12.0, 8.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [9.2, 7.8, 7.1, 'DNP', 6.3, 'DNP', 5.7, 6.5, 6.0, 6.6, 6.3, 5.0, 'BYE', 'DNP', 5.3, 4.4, 5.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(213, 10, 10, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.2, 19.9, 23.2, 'DNP', 19.4, 'DNP', 20.5, 19.7, 19.8, 20.5, 22.4, 21.0, 'BYE', 'DNP', 19.5, 21.0, 22.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2572861.png",
    "name": "J.D. McKissic",
    "depthchart": "Backup: RB-2",
    "team": "Washington Football Team",
    "projected": 8.3,
    "opponent": "Philadelphia Eagles",
    "home_away": "at ",
    "opp_rank_Pos": 24,
    "team_rank_Neg": 26,
    "avg_fp2": 9.73,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 19.25,
    "fanduelSalary": "$5300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#773141",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(119, 49, 65, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png",
    "headlineNews": "Antonio Gibson (toe) is questionable for Week 17 against the Eagles.\n",
    "report": "",
    "analysis": "Washington head coach Ron Rivera seems optimistic that Gibson can suit up this week against Philadelphia in a must-win game for the Football Team. If he's active, Gibson should see something close to a starter's workload, while J.D. McKissic continues to vacuum up targets out of the backfield. Gibson would be a RB2 if he's able to play.\u00a0\n",
    "timestamp": "2021-01-01 06:59 PM",
    "source": "Sam Fortier on Twitter",
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.4, 5.3, 6.7, 6.1, 7.9, 11.4, 6.1, 'BYE', 12.7, 14.4, 8.4, 3.7, 12.8, 9.6, 21.2, 19.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.7, 4.3, 3.8, 2.8, 5.2, 4.9, 6.7, 'BYE', 6.0, 12.0, 8.4, 7.6, 5.8, 5.4, 8.1, 7.9, 8.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.4, 3.4, 0.0, 0.0, 2.3, 'BYE', 2.0, 3.0, 3.4, 3.9, 2.6, 5.9, 3.4, 5.3, 12.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [5.9, 8.1, 8.2, 7.2, 12.0, 11.5, 12.3, 'BYE', 9.9, 9.3, 10.0, 13.1, 12.5, 13.0, 12.2, 10.9, 20.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3127586.png",
    "name": "Jeremy McNichols",
    "depthchart": "Backup: RB-2",
    "team": "Tennessee Titans",
    "projected": 8.1,
    "opponent": "Houston Texans",
    "home_away": "at ",
    "opp_rank_Pos": 31,
    "team_rank_Pos": 2,
    "avg_fp2": 2.53,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 28.95,
    "fanduelSalary": "$4800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#4495D1",
    "tmColorDark": "#002A5C",
    "tmColorLite_rgba": "rgba(68, 149, 209, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 92, 0.2)",
    "tmTextLite": "#4495D1",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png",
    "headlineNews": "Jeremy\u00a0McNichols had two rushes for two yards and a touchdown in the Titans' Week 13 loss to the Browns, adding three catches for 15 yards.\u00a0\n",
    "report": "",
    "analysis": "McNichols functioned as the team's RB1 for most of the fourth quarter with Derrick Henry kept safely on the sideline in a blowout loss. He scored a short garbage time touchdown that would have been Henry's in more neutral game script. Darrynton Evans (hamstring) on injured reserve means McNichols is the clear running back insurance for Henry down the season's final stretch.\u00a0\n",
    "timestamp": "2020-12-06 11:16 PM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": 0.7,
    "week03": 1.0,
    "week04": "DNP",
    "week05": 3.6,
    "week06": 7.2,
    "week07": 0.2,
    "week08": 4.9,
    "week09": 1.0,
    "week10": 3.9,
    "week11": 0.7,
    "week12": 2.0,
    "week13": 9.2,
    "week14": 1.4,
    "week15": 1.0,
    "week16": 1.1,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 0.7, 1.0, 'DNP', 3.6, 7.2, 0.2, 4.9, 1.0, 3.9, 0.7, 2.0, 9.2, 1.4, 1.0, 1.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 7.3, 2.5, 'DNP', 1.2, 2.3, 3.5, 1.0, 3.0, 5.4, 5.5, 2.7, 2.4, 2.9, 1.8, 0.8, 8.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 0.0, 0.0, 'DNP', 0.0, 0.0, 0.0, 0.0, 0.1, 0.0, 0.0, 0.0, 1.8, 0.6, 0.0, 1.1, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 8.5, 9.0, 'DNP', 8.7, 4.1, 6.6, 5.6, 2.6, 3.3, 2.2, 4.3, 4.6, 6.9, 3.6, 5.1, 4.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2977644.png",
    "name": "Todd Gurley",
    "depthchart": "Backup: RB-2",
    "team": "Atlanta Falcons",
    "projected": 7.8,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "at ",
    "opp_rank_Neg": 1,
    "team_rank_Neg": 29,
    "avg_fp2": 10.48,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 15.93,
    "fanduelSalary": "$5400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/atl.png",
    "headlineNews": "Todd Gurley rushed four times for 16 yards in the Falcons' Week 16 loss to the Chiefs, adding three receptions for 34 additional yards.\u00a0\n",
    "report": "",
    "analysis": "Today was the fifth straight week Gurley failed to reach 10 touches. It's quite possible Week 17 against the Bucs is Gurley's final game in a Falcons uniform, which raises the question of whether he will even crack someone's 53-man roster in 2021. Gurley's knee is in a bad place.\u00a0\n",
    "timestamp": "2020-12-27 11:27 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 12.7,
    "week02": 6.1,
    "week03": 14.7,
    "week04": 18.8,
    "week05": 23.0,
    "week06": 8.2,
    "week07": 21.2,
    "week08": 10.6,
    "week09": 12.5,
    "week10": "BYE",
    "week11": 3.4,
    "week12": "DNP",
    "week13": 2.5,
    "week14": 4.1,
    "week15": 2.4,
    "week16": 6.5,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.7, 6.1, 14.7, 18.8, 23.0, 8.2, 21.2, 10.6, 12.5, 'BYE', 3.4, 'DNP', 2.5, 4.1, 2.4, 6.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [19.3, 16.3, 18.7, 17.7, 13.8, 13.2, 12.0, 20.1, 12.9, 'BYE', 9.7, 'DNP', 8.9, 11.4, 10.9, 8.9, 7.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [8.5, 8.3, 6.3, 5.7, 9.6, 7.4, 7.0, 9.0, 7.2, 'BYE', 7.3, 'DNP', 5.0, 9.2, 6.1, 2.5, 1.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [25.6, 23.7, 24.3, 23.4, 25.5, 27.4, 25.5, 22.7, 24.6, 'BYE', 24.2, 'DNP', 26.8, 27.0, 23.2, 21.9, 19.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3123969.png",
    "name": "Ito Smith",
    "depthchart": "Starter: RB-1",
    "team": "Atlanta Falcons",
    "projected": 7.5,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "at ",
    "opp_rank_Neg": 1,
    "team_rank_Neg": 29,
    "avg_fp2": 3.59,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 15.93,
    "fanduelSalary": "$5200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/atl.png",
    "headlineNews": "Ito Smith (rib) was limited in Wednesday's practice.\n",
    "report": "",
    "analysis": "Smith, Todd Gurley, and Brian Hill have all been seeing work in this unimpressive backfield. None of the three are anything more than last-resort RB3/FLEX plays for Week 17 against the Bucs.\n",
    "timestamp": "2020-12-31 01:56 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 2.1,
    "week02": 2.0,
    "week03": 0.0,
    "week04": 4.2,
    "week05": 0.6,
    "week06": 3.0,
    "week07": 0.0,
    "week08": "DNP",
    "week09": "DNP",
    "week10": "BYE",
    "week11": "DNP",
    "week12": 15.5,
    "week13": 3.9,
    "week14": 5.0,
    "week15": 4.3,
    "week16": 5.6,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.1, 2.0, 0.0, 4.2, 0.6, 3.0, 0.0, 'DNP', 'DNP', 'BYE', 'DNP', 15.5, 3.9, 5.0, 4.3, 5.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.3, 3.7, 9.6, 6.3, 4.1, 2.1, 1.4, 'DNP', 'DNP', 'BYE', 'DNP', 7.4, 0.9, 1.8, 3.4, 10.2, 7.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.6, 0.8, 2.9, 1.0, 1.6, 2.0, 0.7, 'DNP', 'DNP', 'BYE', 'DNP', 0.2, 1.4, 1.0, 0.3, 1.2, 1.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.3, 8.0, 10.4, 8.7, 9.0, 8.7, 9.0, 'DNP', 'DNP', 'BYE', 'DNP', 9.0, 12.0, 8.3, 9.4, 7.8, 9.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3051926.png",
    "name": "Gus Edwards",
    "depthchart": "Backup: RB-2",
    "team": "Baltimore Ravens",
    "projected": 7.4,
    "opponent": "Cincinnati Bengals",
    "home_away": "at ",
    "opp_rank_Pos": 25,
    "team_rank_Pos": 1,
    "avg_fp2": 7.75,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 21.27,
    "fanduelSalary": "$6100",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Back",
    "tmColorLite": "#9E7C0C",
    "tmColorDark": "#241773",
    "tmColorLite_rgba": "rgba(158, 124, 12, 0.2)",
    "tmColorDark_rgba": "rgba(36, 23, 115, 0.2)",
    "tmTextLite": "#9E7C0C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png",
    "headlineNews": "Gus Edwards (back) is questionable for Week 17 against the Bengals.\n",
    "report": "",
    "analysis": "Edwards was presumably injured in practice Friday since he wasn't listed on the injury report until that point. He's officially questionable for Sunday's must-win game, perhaps cementing J.K. Dobbins into an every-down\u00a0role for the first time all year. Note that Mark Ingram is also questionable for Sunday.\n",
    "timestamp": "2021-01-01 09:11 PM",
    "source": "Jonas Shaffer on Twitter",
    "game_day_logo": "",
    "week01": 1.7,
    "week02": 7.3,
    "week03": 3.9,
    "week04": 3.8,
    "week05": 2.5,
    "week06": 8.6,
    "week07": "DNP",
    "week08": 14.7,
    "week09": 8.4,
    "week10": 7.8,
    "week11": 0.6,
    "week12": 7.0,
    "week13": 10.1,
    "week14": 17.8,
    "week15": 8.8,
    "week16": 13.2,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.7, 7.3, 3.9, 3.8, 2.5, 8.6, 'DNP', 14.7, 8.4, 7.8, 0.6, 7.0, 10.1, 17.8, 8.8, 13.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.3, 1.4, 5.8, 4.0, 5.0, 2.9, 'DNP', 7.3, 4.3, 4.7, 5.5, 6.8, 3.6, 4.0, 7.8, 5.7, 7.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.8, 7.2, 2.5, 2.1, 0.8, 4.3, 'DNP', 5.9, 2.5, 1.9, 2.7, 1.7, 2.0, 1.8, 1.8, 1.3, 2.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.7, 15.3, 8.5, 11.5, 12.4, 11.0, 'DNP', 12.1, 11.3, 10.9, 11.3, 9.9, 12.0, 9.7, 10.8, 10.7, 11.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2983509.png",
    "name": "Dare Ogunbowale",
    "depthchart": "Starter: RB-1",
    "team": "Jacksonville Jaguars",
    "projected": 7.2,
    "opponent": "Indianapolis Colts",
    "home_away": "at ",
    "opp_rank_Neg": 2,
    "team_rank_Neg": 27,
    "avg_fp2": 1.96,
    "opp_rank_allowed_fp2_Neu": 14,
    "opp_avg_allowed_fp2": 19.54,
    "fanduelSalary": "$5600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#006778",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 103, 120, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#006778",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/jax.png",
    "headlineNews": "Dare Ogunbowale rushed 14 times for 71 yards in the Jaguars' Week 16 loss to the Bears.\n",
    "report": "",
    "analysis": "With James Robinson injured and inactive, Ogunbowale got the start and handled 17-of-21 touches in the Jaguars backfield, catching three passes for seven yards on five targets in the passing game. Devine Ozigbo and Craig Reynolds each carried the ball one time and caught one pass. It was all Ogunbowale, which is notable should Robinson miss Week 17 against the Colts. He'd be a last-resort RB3 for fantasy leaguers playing in Week 17.\n",
    "timestamp": "2020-12-27 09:21 PM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": 0.0,
    "week08": "DNP",
    "week09": 0.0,
    "week10": 1.0,
    "week11": 0.0,
    "week12": "DNP",
    "week13": "DNP",
    "week14": 1.7,
    "week15": 3.0,
    "week16": 9.3,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 0.0, 'DNP', 0.0, 1.0, 0.0, 'DNP', 'DNP', 1.7, 3.0, 9.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 2.0, 'DNP', 2.3, 0.8, 4.6, 'DNP', 'DNP', 2.6, 3.6, 3.4, 7.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 2.1, 'DNP', 1.0, 0.0, 0.0, 'DNP', 'DNP', 0.2, 0.2, 0.7, 0.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 103, 120, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 7.4, 'DNP', 6.5, 5.0, 5.3, 'DNP', 'DNP', 6.0, 5.4, 4.7, 3.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/10452.png",
    "name": "Adrian Peterson",
    "depthchart": "Backup: RB-2",
    "team": "Detroit Lions",
    "projected": 7.1,
    "opponent": "Minnesota Vikings",
    "home_away": "",
    "opp_rank_Pos": 28,
    "team_rank_Neg": 30,
    "avg_fp2": 7.08,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 23.43,
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
    "headlineNews": "Adrian Peterson rushed four times for 10 yards in Week 16 against the Bucs.\n",
    "report": "",
    "analysis": "Peterson fell out of the gameplan with Detroit trailing the entire game. His workload\u00a0has been cut back since D\u2019Andre Swift returned to the lineup. The Lions should continue to feature Swift in their regular season finale against the Vikings in Week 17.\n",
    "timestamp": "2020-12-26 09:11 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 12.9,
    "week02": 4.1,
    "week03": 9.0,
    "week04": 9.6,
    "week05": "BYE",
    "week06": 12.3,
    "week07": 3.5,
    "week08": 1.7,
    "week09": 5.8,
    "week10": 3.5,
    "week11": 1.8,
    "week12": 17.5,
    "week13": 17.7,
    "week14": 3.5,
    "week15": 2.3,
    "week16": 1.0,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.9, 4.1, 9.0, 9.6, 'BYE', 12.3, 3.5, 1.7, 5.8, 3.5, 1.8, 17.5, 17.7, 3.5, 2.3, 1.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.3, 16.0, 4.1, 15.6, 'BYE', 7.0, 4.8, 3.6, 5.1, 4.1, 13.0, 15.5, 4.3, 7.0, 4.1, 3.6, 7.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 4.0, 3.3, 2.5, 'BYE', 6.3, 2.1, 1.3, 0.0, 0.0, 0.2, 0.0, 0.0, 0.0, 0.0, 0.0, 0.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 118, 182, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.5, 19.8, 15.9, 16.2, 'BYE', 18.5, 18.2, 15.9, 14.6, 16.5, 12.3, 11.8, 12.9, 13.7, 14.1, 17.2, 13.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4036431.png",
    "name": "Darrynton Evans",
    "depthchart": "Reserve: RB-3",
    "team": "Tennessee Titans",
    "projected": 6.9,
    "opponent": "Houston Texans",
    "home_away": "at ",
    "opp_rank_Pos": 31,
    "team_rank_Pos": 2,
    "avg_fp2": 3.77,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 28.95,
    "fanduelSalary": "$4800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#4495D1",
    "tmColorDark": "#002A5C",
    "tmColorLite_rgba": "rgba(68, 149, 209, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 92, 0.2)",
    "tmTextLite": "#4495D1",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png",
    "headlineNews": "Darrynton Evans rushed eight times for 30 yards in the Titans' Week 15 win against the Titans, adding two receptions for 27 yards and a touchdown.\u00a0\n",
    "report": "",
    "analysis": "There was a lot of garbage time production to be had, and Evans took advantage. The rookie caught a late touchdown on a bobbled reception to cap off the Tennessee blowout win. On a day where D'Onta Foreman was a healthy scratch, it's clear Evans is the direct backup to Derrick Henry.\u00a0\n",
    "timestamp": "2020-12-21 01:32 PM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": 0.9,
    "week04": "DNP",
    "week05": 1.2,
    "week06": "DNP",
    "week07": "DNP",
    "week08": "DNP",
    "week09": "DNP",
    "week10": "DNP",
    "week11": "DNP",
    "week12": "DNP",
    "week13": "DNP",
    "week14": "DNP",
    "week15": 12.7,
    "week16": 0.3,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 0.9, 'DNP', 1.2, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 12.7, 0.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 3.3, 'DNP', 4.3, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 0.2, 5.9, 6.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 0.1, 'DNP', 0.0, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 0.0, 0.0, 0.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 6.1, 'DNP', 9.6, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 8.1, 14.1, 5.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3128721.png",
    "name": "Sony Michel",
    "depthchart": "Starter: RB-1",
    "team": "New England Patriots",
    "projected": 6.8,
    "opponent": "New York Jets",
    "home_away": "",
    "opp_rank_Neu": 10,
    "team_rank_Pos": 5,
    "avg_fp2": 6.34,
    "opp_rank_allowed_fp2_Neu": 15,
    "opp_avg_allowed_fp2": 19.99,
    "fanduelSalary": "$5800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#C60C30",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png",
    "headlineNews": "Sony Michel rushed 10 times for 69 yards in the Patriots' Week 16 loss to the Bills.\n",
    "report": "",
    "analysis": "Michel's first carry went for 29 yards, and he later ripped off a 21-yarder in the first half. That was about it for him, as Michel paced the Patriots' backfield with Damien Harris (ankle) inactive. Michel is averaging over 5.9 yards per carry on limited reps this season but won't be anything more than a TD-dependent RB3/4 for Week 17 against the Jets.\n",
    "timestamp": "2020-12-29 04:17 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 9.7,
    "week02": 1.9,
    "week03": 15.0,
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": "DNP",
    "week08": "DNP",
    "week09": "DNP",
    "week10": "DNP",
    "week11": "DNP",
    "week12": 0.0,
    "week13": 6.3,
    "week14": 2.2,
    "week15": 8.7,
    "week16": 6.9,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.7, 1.9, 15.0, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 0.0, 6.3, 2.2, 8.7, 6.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.7, 6.5, 10.0, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 5.6, 4.9, 3.8, 7.4, 3.5, 6.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.4, 3.9, 3.3, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 1.2, 6.3, 1.3, 0.0, 2.8, 6.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.2, 13.8, 18.3, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 15.2, 18.2, 13.0, 7.3, 15.3, 11.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3115375.png",
    "name": "Darrel Williams",
    "depthchart": "Backup: RB-2",
    "team": "Kansas City Chiefs",
    "projected": 6.8,
    "opponent": "Los Angeles Chargers",
    "home_away": "",
    "opp_rank_Neu": 21,
    "team_rank_Neu": 15,
    "avg_fp2": 2.99,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 20.05,
    "fanduelSalary": "$5800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Darrel Williams rushed 10 times for 46 yards in the Chiefs' Week 16 win over the Falcons, adding four receptions for 27 additional yards.\u00a0\n",
    "report": "",
    "analysis": "With the Chiefs adjusting to life without Clyde Edwards-Helaire, Williams was their lead back, out-touching Le'Veon Bell 14-8. He out-snapped his veteran teammate 47-20 and out-gained him 74-39. It wasn't a matter of the Chiefs saving Bell's bullets in a blowout, as the Chiefs spent nearly the entire afternoon tied or playing from behind. Williams has more experience in coach Andy Reid's offense, and he certainly seems to have more trust from his coach. With the Chiefs having clinched the AFC's No. 1 seed, it will be interesting to see how the Week 17 workload shakes out. It is possible, if not probable, that Williams' health will be prioritized ahead of Bell's, though both could get reps in an effort to get in postseason gear after light regular season usage. The Chiefs, who figure to rest Patrick Mahomes and company, will be hosting the Chargers.\u00a0\u00a0\u00a0\n",
    "timestamp": "2020-12-27 11:00 PM",
    "source": null,
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.0, 1.7, 1.7, 0.2, 4.4, 10.6, 0.0, 3.1, 0.8, 'BYE', 3.7, 0.0, 4.8, 0.0, 0.5, 9.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.8, 4.1, 4.8, 5.5, 3.3, 7.1, 5.6, 2.7, 2.1, 'BYE', 3.8, 3.4, 4.9, 3.0, 2.7, 4.4, 6.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.7, 0.8, 3.1, 0.0, 0.0, 0.5, 1.7, 0.3, 0.0, 'BYE', 0.7, 3.2, 0.0, 0.0, 0.3, 1.2, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.4, 10.5, 12.2, 8.9, 8.7, 11.0, 9.2, 10.3, 8.4, 'BYE', 10.5, 11.4, 9.2, 7.9, 9.3, 9.3, 8.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4243315.png",
    "name": "Salvon Ahmed",
    "depthchart": "Backup: RB-2",
    "team": "Miami Dolphins",
    "projected": 6.0,
    "opponent": "Buffalo Bills",
    "home_away": "at ",
    "opp_rank_Neu": 20,
    "team_rank_Neu": 22,
    "avg_fp2": 10.24,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 18.97,
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
    "headlineNews": "Salvon Ahmed rushed six times for two yards in the Dolphins' Week 16 win over the Raiders.\n",
    "report": "",
    "analysis": "Ahmed added just one reception on a single target. Myles Gaskin notched 14 carries and five receptions. Gaskin is clearly the team's workhorse back once again with Ahmed playing nothing more than a backup role. Ahmed holds no fantasy value for Week 17 against the Bills.\u00a0\n",
    "timestamp": "2020-12-27 05:22 AM",
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
    "week09": 3.8,
    "week10": "DNP",
    "week11": 9.9,
    "week12": "DNP",
    "week13": "DNP",
    "week14": "DNP",
    "week15": 21.2,
    "week16": 0.8,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 3.8, 'DNP', 9.9, 'DNP', 'DNP', 'DNP', 21.2, 0.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 4.5, 'DNP', 12.1, 'DNP', 'DNP', 'DNP', 11.6, 5.6, 6.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 0.0, 'DNP', 6.8, 'DNP', 'DNP', 'DNP', 8.9, 5.9, 3.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 142, 151, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 10.7, 'DNP', 16.2, 'DNP', 'DNP', 'DNP', 13.6, 22.4, 10.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4035676.png",
    "name": "Zack Moss",
    "depthchart": "Backup: RB-2",
    "team": "Buffalo Bills",
    "projected": 5.9,
    "opponent": "Miami Dolphins",
    "home_away": "",
    "opp_rank_Neu": 17,
    "team_rank_Neu": 19,
    "avg_fp2": 7.67,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 18.67,
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
    "headlineNews": "Zack Moss rushed 12 times for 57 yards and one touchdown in the Bills' Week 16 win over the Patriots.\n",
    "report": "",
    "analysis": "His lone catch went for no gain, as Moss narrowly out-touched backfield mate Devin Singletary 13-12 in this one and scored the lone touchdown between the two with a five-yard plunge in the second quarter following dropped passing touchdowns by Taiwan Jones and Dawson Knox. Moss has the edge for touchdowns between he and Singletary, but both are behind Josh Allen at the goal line most weeks. Moss is a TD-or-bust RB3 for Week 17 against the Dolphins.\n",
    "timestamp": "2020-12-29 04:22 AM",
    "source": null,
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.2, 3.7, 'DNP', 'DNP', 'DNP', 1.0, 8.7, 20.1, 11.8, 2.2, 'BYE', 7.8, 1.9, 4.3, 8.1, 12.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.0, 3.9, 'DNP', 'DNP', 'DNP', 7.8, 7.5, 4.5, 8.4, 12.0, 'BYE', 17.5, 11.2, 4.9, 13.3, 4.1, 5.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 4.4, 'DNP', 'DNP', 'DNP', 2.4, 0.0, 1.7, 7.7, 6.0, 'BYE', 2.0, 1.7, 1.8, 1.3, 1.3, 2.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.2, 13.4, 'DNP', 'DNP', 'DNP', 11.4, 12.0, 9.4, 14.0, 11.9, 'BYE', 11.0, 15.4, 9.3, 9.5, 6.2, 14.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16782.png",
    "name": "Jerick McKinnon",
    "depthchart": "Backup: RB-2",
    "team": "San Francisco 49ers",
    "projected": 5.6,
    "opponent": "Seattle Seahawks",
    "home_away": "",
    "opp_rank_Neg": 5,
    "team_rank_Neu": 13,
    "avg_fp2": 7.24,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 20.12,
    "fanduelSalary": "$5100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "Jerick McKinnon rushed once for four yards in the 49ers' Week 16 win against the Cardinals, adding three receptions for 28 yards.\u00a0\n",
    "report": "",
    "analysis": "McKinnon's four targets were the second most on the team on a night where they destroyed the Cardinals via the run game. It was Jeff Wilson's backfield, as McKinnon probably wouldn't have seen a rushing attempt if Wilson hadn't briefly exited the game in the second quarter. McKinnon should be left on the waiver wire in all formats in Week 17.\u00a0\n",
    "timestamp": "2020-12-27 02:14 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 11.9,
    "week02": 13.7,
    "week03": 15.2,
    "week04": 19.2,
    "week05": 1.5,
    "week06": 3.8,
    "week07": -0.1,
    "week08": 11.9,
    "week09": 14.3,
    "week10": 5.1,
    "week11": "BYE",
    "week12": 4.2,
    "week13": "DNP",
    "week14": "DNP",
    "week15": "DNP",
    "week16": 4.7,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.9, 13.7, 15.2, 19.2, 1.5, 3.8, -0.1, 11.9, 14.3, 5.1, 'BYE', 4.2, 'DNP', 'DNP', 'DNP', 4.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.4, 3.3, 10.3, 6.2, 10.5, 7.3, 8.7, 7.4, 9.5, 7.1, 'BYE', 5.5, 'DNP', 'DNP', 'DNP', 6.6, 5.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.2, 4.1, 2.4, 0.0, 1.5, 2.4, 1.9, 1.7, 1.7, 1.8, 'BYE', 1.6, 'DNP', 'DNP', 'DNP', 1.2, 2.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.7, 17.0, 14.8, 15.2, 15.9, 14.6, 15.7, 14.7, 15.5, 14.7, 'BYE', 14.2, 'DNP', 'DNP', 'DNP', 16.1, 15.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3119195.png",
    "name": "Chase Edmonds",
    "depthchart": "Backup: RB-2",
    "team": "Arizona Cardinals",
    "projected": 5.6,
    "opponent": "Los Angeles Rams",
    "home_away": "at ",
    "opp_rank_Neg": 3,
    "team_rank_Pos": 3,
    "avg_fp2": 9.2,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 17.06,
    "fanduelSalary": "$5500",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Hip",
    "tmColorLite": "#97233F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(151, 35, 63, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#97233F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
    "headlineNews": "Cardinals head coach Kliff Kingsbury said Chase\u00a0Edmonds (hip) is a game-time decision for Week 17 against the Rams.\u00a0\n",
    "report": "",
    "analysis": "Edmonds entered Week 16 with ankle and knee injuries and exited the game with a hip issue. Kenyan Drake would likely see a few more touches if Edmonds is sidelined against LA, making Drake a more appealing play in PPR formats.\u00a0\n",
    "timestamp": "2021-01-01 07:35 PM",
    "source": "Darren Urban on Twitter ",
    "game_day_logo": "",
    "week01": 12.0,
    "week02": 2.8,
    "week03": 4.4,
    "week04": 12.5,
    "week05": 17.7,
    "week06": 3.4,
    "week07": 18.0,
    "week08": "BYE",
    "week09": 10.3,
    "week10": 9.2,
    "week11": 12.9,
    "week12": 6.3,
    "week13": 5.3,
    "week14": 7.3,
    "week15": 14.1,
    "week16": 1.8,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.0, 2.8, 4.4, 12.5, 17.7, 3.4, 18.0, 'BYE', 10.3, 9.2, 12.9, 6.3, 5.3, 7.3, 14.1, 1.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.2, 2.8, 7.9, 6.0, 9.4, 5.9, 5.9, 'BYE', 9.9, 9.8, 9.6, 6.8, 5.8, 7.0, 5.5, 7.6, 5.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.0, 0.0, 0.9, 1.5, 0.1, 'BYE', 0.0, 0.0, 0.0, 0.3, 0.3, 0.0, 0.0, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [3.2, 15.9, 16.5, 10.2, 7.2, 12.1, 11.5, 'BYE', 13.2, 14.6, 15.9, 12.9, 10.9, 16.4, 13.3, 13.9, 10.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3916148.png",
    "name": "Tony Pollard",
    "depthchart": "Backup: RB-2",
    "team": "Dallas Cowboys",
    "projected": 5.4,
    "opponent": "New York Giants",
    "home_away": "at ",
    "opp_rank_Neu": 11,
    "team_rank_Neu": 17,
    "avg_fp2": 6.79,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 21.91,
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
    "headlineNews": "Tony Pollard rushed nine times for 12 yards in the Cowboys' Week 16 win over the Eagles, adding an eight-yard reception.\u00a0\n",
    "report": "",
    "analysis": "It was a back-breaking effort if you rolled the dice on Pollard as an RB2. Ezekiel Elliott's (calf) health was uncertain, but a pre-game report said he would be the lead back. It was accurate as Zeke turned in his biggest rushing effort of 2020, though he did out-touch Pollard \"just\" 23-10. Pollard could be more involved in what will be a tougher Week 17 offensive environment against the Giants, but he will not be a recommended DFS option.\u00a0\u00a0\n",
    "timestamp": "2020-12-28 01:18 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 4.2,
    "week02": 1.4,
    "week03": -0.1,
    "week04": 9.7,
    "week05": 4.2,
    "week06": 5.0,
    "week07": 2.7,
    "week08": 7.4,
    "week09": 6.3,
    "week10": "BYE",
    "week11": 12.0,
    "week12": 3.2,
    "week13": 3.3,
    "week14": 11.8,
    "week15": 28.2,
    "week16": 2.5,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.2, 1.4, -0.1, 9.7, 4.2, 5.0, 2.7, 7.4, 6.3, 'BYE', 12.0, 3.2, 3.3, 11.8, 28.2, 2.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.6, 7.2, 4.0, 4.3, 5.6, 6.0, 5.2, 3.7, 6.3, 'BYE', 4.9, 3.7, 3.7, 5.7, 6.9, 6.4, 5.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 'BYE', 0.0, 0.8, 0.0, 0.0, 0.0, 0.4, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  "rgba(127, 150, 149, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.8, 9.0, 10.2, 11.4, 14.9, 12.8, 13.5, 14.6, 10.8, 'BYE', 12.3, 10.5, 12.6, 10.2, 11.6, 14.7, 15.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3051439.png",
    "name": "Boston Scott",
    "depthchart": "Starter: RB-1",
    "team": "Philadelphia Eagles",
    "projected": 5.1,
    "opponent": "Washington Football Team",
    "home_away": "",
    "opp_rank_Neu": 13,
    "team_rank_Neu": 9,
    "avg_fp2": 4.95,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 16.32,
    "fanduelSalary": "$4900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#386168",
    "tmColorDark": "#004C54",
    "tmColorLite_rgba": "rgba(56, 97, 104, 0.2)",
    "tmColorDark_rgba": "rgba(0, 76, 84, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    "headlineNews": "Miles Sanders (knee) is out for Week 17 against Washington.\u00a0\n",
    "report": "",
    "analysis": "NFL Network's Ian Rapoport reported Thursday that Sanders was \"fine,\" but he'll miss the team's final game. That puts Boston Scott in position to see a starter's workload. Scott will be more appealing in PPR formats against Washington.\u00a0\n",
    "timestamp": "2021-01-01 08:39 PM",
    "source": "Jeremy Fowler on Twitter ",
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "week01": 6.4,
    "week02": 5.8,
    "week03": 0.5,
    "week04": 0.1,
    "week05": 0.3,
    "week06": 1.9,
    "week07": 16.7,
    "week08": 8.9,
    "week09": "BYE",
    "week10": 13.9,
    "week11": 6.5,
    "week12": 7.2,
    "week13": 0.9,
    "week14": 2.2,
    "week15": 1.2,
    "week16": 1.7,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.4, 5.8, 0.5, 0.1, 0.3, 1.9, 16.7, 8.9, 'BYE', 13.9, 6.5, 7.2, 0.9, 2.2, 1.2, 1.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.2, 7.9, 8.5, 5.7, 4.0, 2.9, 10.3, 13.1, 'BYE', 5.4, 7.8, 10.5, 5.8, 3.8, 7.2, 5.9, 5.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [29.7, 0.0, 3.0, 0.0, 0.0, 0.0, 0.0, 16.7, 'BYE', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [33.2, 19.4, 12.8, 16.9, 6.1, 7.0, 4.0, 28.1, 'BYE', 11.4, 7.8, 11.0, 17.6, 15.9, 7.4, 17.7, 10.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16777.png",
    "name": "Carlos Hyde",
    "depthchart": "Backup: RB-2",
    "team": "Seattle Seahawks",
    "projected": 5.0,
    "opponent": "San Francisco 49ers",
    "home_away": "at ",
    "opp_rank_Neg": 6,
    "team_rank_Neu": 11,
    "avg_fp2": 7.69,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 16.98,
    "fanduelSalary": "$5200",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Illness",
    "tmColorLite": "#69BE28",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(105, 190, 40, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#69BE28",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
    "headlineNews": "Carlos Hyde (illness) is questionable for Week 17 against the 49ers.\u00a0\n",
    "report": "",
    "analysis": "Hyde didn't practice this week with a non-COVID illness. He's no longer a fantasy relevant player with Chris Carson leading the Seahawks' backfield and Rashaad Penny getting involved in the team's offense. Hyde has seen seven touches over the past two weeks.\u00a0\n",
    "timestamp": "2021-01-01 09:22 PM",
    "source": "Michael-Shawn Duggar on Twitter ",
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.3, 4.7, 2.8, 'DNP', 'DNP', 'BYE', 15.1, 'DNP', 'DNP', 'DNP', 16.5, 3.9, 2.6, 6.6, 13.3, 3.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.0, 4.8, 6.2, 'DNP', 'DNP', 'BYE', 4.6, 'DNP', 'DNP', 'DNP', 10.6, 6.5, 6.3, 4.5, 6.2, 6.9, 5.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.6, 0.0, 3.8, 'DNP', 'DNP', 'BYE', 1.9, 'DNP', 'DNP', 'DNP', 3.5, 5.1, 2.5, 1.9, 1.8, 2.3, 2.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.3, 11.7, 17.4, 'DNP', 'DNP', 'BYE', 15.7, 'DNP', 'DNP', 'DNP', 17.2, 16.5, 15.6, 15.3, 14.0, 14.7, 15.2]
                    }
                    
                    ]
               }
            }];




$scope.positionWR = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4262921.png",
    "name": "Justin Jefferson",
    "depthchart": "Starter: WR-1",
    "team": "Minnesota Vikings",
    "projected": 24.4,
    "opponent": "Detroit Lions",
    "home_away": "at ",
    "opp_rank_Pos": 29,
    "team_rank_Neu": 18,
    "avg_fp2": 14.16,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 36.65,
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
    "headlineNews": "Justin Jefferson caught 6-of-10 targets for 85 yards in the Vikings' Week 16 loss to the Saints.\n",
    "report": "",
    "analysis": "The Saints opted to use No. 1 corner Marshon Lattimore on Jefferson, a sign the NFL has crowned the rookie as Minnesota's top receiver. Jefferson lived up to the challenge with multiple first downs, although he was held out of the touchdown column. The rookie nearly came down with a one-handed grab in the corner of the end zone. Jefferson belongs on the WR1/2 border against the Lions in Week 17. Detroit is missing their top two corners.\u00a0\n",
    "timestamp": "2020-12-26 01:53 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 3.6,
    "week02": 5.9,
    "week03": 27.0,
    "week04": 12.3,
    "week05": 3.8,
    "week06": 35.1,
    "week07": "BYE",
    "week08": 4.1,
    "week09": 7.9,
    "week10": 17.5,
    "week11": 16.1,
    "week12": 22.5,
    "week13": 22.8,
    "week14": 7.9,
    "week15": 14.4,
    "week16": 11.5,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.6, 5.9, 27.0, 12.3, 3.8, 35.1, 'BYE', 4.1, 7.9, 17.5, 16.1, 22.5, 22.8, 7.9, 14.4, 11.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.8, 3.4, 7.7, 4.5, 8.0, 8.8, 'BYE', 9.3, 13.9, 4.8, 14.7, 15.8, 8.2, 12.3, 12.5, 14.1, 24.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.2, 0.0, 0.2, 3.1, 5.1, 3.5, 'BYE', 6.4, 1.8, 1.9, 2.8, 1.5, 1.9, 1.8, 5.7, 5.2, 10.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  "rgba(224, 170, 25, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.4, 13.5, 11.3, 13.4, 11.2, 13.3, 'BYE', 34.6, 26.4, 19.3, 27.3, 25.5, 22.9, 23.5, 26.1, 19.7, 27.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4047646.png",
    "name": "A.J. Brown",
    "depthchart": "Starter: WR-1",
    "team": "Tennessee Titans",
    "projected": 20.2,
    "opponent": "Houston Texans",
    "home_away": "at ",
    "opp_rank_Pos": 26,
    "team_rank_Neu": 21,
    "avg_fp2": 14.32,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 33.24,
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
    "headlineNews": "A.J. Brown (ankle) returned to Titans practice on Thursday, getting in a \"full\" session.\n",
    "report": "",
    "analysis": "Brown is ready to go as a top-five WR1 for the regular season finale.\u00a0\n",
    "timestamp": "2020-12-31 09:37 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 6.4,
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.4, 'DNP', 'DNP', 'DNP', 17.7, 20.1, 24.3, 10.4, 18.1, 2.6, 14.2, 23.8, 8.7, 20.7, 12.9, 6.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.6, 'DNP', 'DNP', 'DNP', 13.1, 15.0, 17.7, 18.5, 12.4, 13.7, 14.8, 13.5, 13.4, 19.9, 14.7, 15.9, 20.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 'DNP', 'DNP', 'DNP', 2.1, 2.2, 6.7, 4.9, 4.0, 2.6, 2.7, 1.9, 7.5, 4.8, 4.5, 4.7, 6.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.7, 'DNP', 'DNP', 'DNP', 15.2, 21.0, 22.1, 22.0, 22.3, 21.9, 21.8, 20.3, 23.3, 20.9, 21.4, 20.2, 21.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16800.png",
    "name": "Davante Adams",
    "depthchart": "Starter: WR-1",
    "team": "Green Bay Packers",
    "projected": 18.5,
    "opponent": "Chicago Bears",
    "home_away": "at ",
    "opp_rank_Neu": 13,
    "team_rank_Neu": 9,
    "avg_fp2": 22.1,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 26.17,
    "fanduelSalary": "$9300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#d7a017",
    "tmColorDark": "#203731",
    "tmColorLite_rgba": "rgba(215, 160, 23, 0.2)",
    "tmColorDark_rgba": "rgba(32, 55, 49, 0.2)",
    "tmTextLite": "#d7a017",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png",
    "headlineNews": "Davante Adams caught 11-of-12 targets for 142 yards and three touchdowns in the Packers' Week 16 win over the Titans.\n",
    "report": "",
    "analysis": "The three touchdowns tied a career high Adams set in Week 8. Adams scored his first touchdown on a screen pass where he dove into end-zone on the Packers\u2019 opening drive. His second TD was a back-shoulder throw from Aaron Rodgers, and he added a short red-zone score in the third quarter. Adams is averaging 102.2\u00a0yards per game and has at least seven catches in four\u00a0straight weeks. He'll remain\u00a0a top-five\u00a0option for a Week 17 matchup with Chicago.\n",
    "timestamp": "2020-12-28 04:27 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 34.6,
    "week02": 5.1,
    "week03": "DNP",
    "week04": "DNP",
    "week05": "BYE",
    "week06": 9.1,
    "week07": 38.1,
    "week08": 26.8,
    "week09": 28.3,
    "week10": 14.6,
    "week11": 20.1,
    "week12": 15.1,
    "week13": 29.1,
    "week14": 21.0,
    "week15": 7.7,
    "week16": 37.7,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [34.6, 5.1, 'DNP', 'DNP', 'BYE', 9.1, 38.1, 26.8, 28.3, 14.6, 20.1, 15.1, 29.1, 21.0, 7.7, 37.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.8, 22.6, 'DNP', 'DNP', 'BYE', 13.4, 18.8, 16.8, 15.2, 20.9, 15.8, 15.2, 16.3, 25.5, 21.0, 18.3, 18.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.7, 10.5, 'DNP', 'DNP', 'BYE', 6.7, 6.1, 18.4, 6.8, 10.9, 12.1, 6.9, 10.9, 15.5, 7.2, 4.8, 6.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [20.0, 24.9, 'DNP', 'DNP', 'BYE', 20.0, 20.5, 31.4, 17.9, 25.8, 25.0, 21.5, 22.9, 27.9, 23.5, 20.7, 22.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2976212.png",
    "name": "Stefon Diggs",
    "depthchart": "Starter: WR-1",
    "team": "Buffalo Bills",
    "projected": 17.8,
    "opponent": "Miami Dolphins",
    "home_away": "",
    "opp_rank_Neu": 19,
    "team_rank_Pos": 2,
    "avg_fp2": 16.93,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 29.89,
    "fanduelSalary": "$8500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#005596",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 85, 150, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
    "headlineNews": "Stefon Diggs caught 9-of-11 targets for 145 yards and three touchdowns in the Bills' Week 16 win over the Patriots.\n",
    "report": "",
    "analysis": "Working against New England's Stephon Gilmore-less secondary, Diggs got off to a frustratingly slow start to this one but had a monster second half with 50-, 18-, and eight-yard touchdowns, catching Josh Allen's second, third, and fourth scores of the night. Diggs has already blown past his previous career highs in catches and yards and is now one off his previous best of nine touchdowns, catching his sixth, seventh, and eighth scores of 2020 on Monday night. Diggs' foot was obviously no issue. With the Bills fighting for the No. 2 seed in the AFC, Diggs should be out there next week against Miami.\n",
    "timestamp": "2020-12-29 04:14 AM",
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.6, 25.3, 12.9, 14.5, 15.6, 13.6, 7.8, 12.2, 16.3, 20.3, 'BYE', 7.4, 14.2, 24.1, 20.2, 37.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.0, 12.8, 13.1, 19.6, 14.5, 11.4, 12.2, 11.2, 18.1, 14.1, 'BYE', 14.9, 9.7, 13.9, 12.9, 11.8, 17.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.5, 5.0, 3.9, 5.1, 3.9, 3.6, 5.6, 5.6, 4.6, 4.6, 'BYE', 4.6, 5.0, 5.0, 7.7, 5.8, 7.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.1, 20.6, 19.2, 22.0, 19.6, 20.2, 19.2, 17.9, 18.6, 19.0, 'BYE', 19.9, 18.9, 19.2, 20.8, 20.5, 22.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16731.png",
    "name": "Brandin Cooks",
    "depthchart": "Starter: WR-1",
    "team": "Houston Texans",
    "projected": 17.7,
    "opponent": "Tennessee Titans",
    "home_away": "",
    "opp_rank_Pos": 28,
    "team_rank_Pos": 4,
    "avg_fp2": 11.24,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 34.58,
    "fanduelSalary": "$7300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#03202F",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(3, 32, 47, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/hou.png",
    "headlineNews": "Brandin Cooks caught 7-of-10 targets for 141 yards and a touchdown in Week 16 against the Bengals.\n",
    "report": "",
    "analysis": "Cooks had double the targets of Keke Coutee (5), who finished second on the Texans in targets. His touchdown came on a perfectly thrown cross-field pass\u00a0from Deshaun Watson. Cooks rebounded from last weeks 6/59/0 line in a matchup with one of the worst secondaries in the league. There's talk the Texans could rest Watson for a meaningless season finale.\u00a0Cooks would downgrade to a WR4 if Watson sits.\u00a0\n",
    "timestamp": "2020-12-27 09:48 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 3.0,
    "week02": 12.0,
    "week03": 3.8,
    "week04": 0.0,
    "week05": 26.1,
    "week06": 17.3,
    "week07": 9.5,
    "week08": "BYE",
    "week09": 15.8,
    "week10": 6.9,
    "week11": 10.5,
    "week12": 11.0,
    "week13": 9.0,
    "week14": "DNP",
    "week15": 8.9,
    "week16": 23.6,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.0, 12.0, 3.8, 0.0, 26.1, 17.3, 9.5, 'BYE', 15.8, 6.9, 10.5, 11.0, 9.0, 'DNP', 8.9, 23.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.7, 4.8, 5.9, 11.0, 9.5, 9.5, 12.0, 'BYE', 9.3, 7.0, 9.3, 7.5, 9.5, 'DNP', 9.5, 11.7, 17.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.5, 5.1, 4.3, 5.0, 5.7, 2.7, 5.2, 'BYE', 3.0, 3.8, 4.6, 4.3, 4.2, 'DNP', 4.3, 4.6, 3.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.7, 19.6, 17.9, 19.0, 19.1, 18.7, 18.8, 'BYE', 16.3, 18.3, 20.2, 17.4, 18.4, 'DNP', 18.2, 18.4, 18.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16460.png",
    "name": "Adam Thielen",
    "depthchart": "Backup: WR-2",
    "team": "Minnesota Vikings",
    "projected": 16.4,
    "opponent": "Detroit Lions",
    "home_away": "at ",
    "opp_rank_Pos": 29,
    "team_rank_Neu": 18,
    "avg_fp2": 14.95,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 36.65,
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
    "headlineNews": "Adam Thielen caught 8-of-9 targets for 97 yards and one touchdown in the Vikings' Week 16 loss to the Saints.\n",
    "report": "",
    "analysis": "Game script broke Thielen's way in the fantasy finals. Minnesota was trailing big for most of the game, setting up Thielen for easy grabs in catch-up mode. With CB Marshon Lattimore on Justin Jefferson, Thielen had the easiest individual matchup among the Vikings' pass catchers, too. That helped him rack up tons of yardage in the second half. With just two\u00a0minutes remaining, Thielen scored from one\u00a0yard\u00a0out. It was his league-high 13th red zone touchdown of the year. Incredible. Thielen will be an upside WR2 to close the season out against the injured Lions.\n",
    "timestamp": "2020-12-26 01:49 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 28.0,
    "week02": 4.6,
    "week03": 10.8,
    "week04": 22.2,
    "week05": 24.8,
    "week06": 12.6,
    "week07": "BYE",
    "week08": 4.2,
    "week09": 4.8,
    "week10": 18.3,
    "week11": 28.3,
    "week12": "DNP",
    "week13": 17.5,
    "week14": 5.4,
    "week15": 8.1,
    "week16": 19.7,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [28.0, 4.6, 10.8, 22.2, 24.8, 12.6, 'BYE', 4.2, 4.8, 18.3, 28.3, 'DNP', 17.5, 5.4, 8.1, 19.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.0, 14.8, 16.5, 15.2, 13.7, 13.4, 'BYE', 13.5, 16.6, 7.0, 15.6, 'DNP', 9.3, 18.5, 12.9, 9.0, 16.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.0, 11.6, 3.0, 1.3, 7.0, 0.9, 'BYE', 1.0, 2.3, 1.6, 2.0, 'DNP', 2.8, 0.1, 2.5, 1.6, 0.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  "rgba(224, 170, 25, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.9, 24.0, 18.6, 18.0, 18.8, 18.5, 'BYE', 17.5, 18.1, 17.0, 16.2, 'DNP', 18.6, 21.2, 18.1, 18.6, 20.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14924.png",
    "name": "T.Y. Hilton",
    "depthchart": "Starter: WR-1",
    "team": "Indianapolis Colts",
    "projected": 16.1,
    "opponent": "Jacksonville Jaguars",
    "home_away": "",
    "opp_rank_Pos": 27,
    "team_rank_Neu": 8,
    "avg_fp2": 8.86,
    "opp_rank_allowed_fp2_Pos": 24,
    "opp_avg_allowed_fp2": 31.77,
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
    "headlineNews": "T.Y. Hilton caught 3-of-7 targets for 60 yards in Indianapolis' Week 16 loss to Pittsburgh.\n",
    "report": "",
    "analysis": "Hilton still moved to third all-time in Colts' history in receiving yards behind Marvin Harrison and Reggie Wayne. A majority of his production occurred on the same drive as his 25- and 14-yard catch in the first half helped setup Jonathan Taylor's second rushing score on the afternoon. Although it's a terrific matchup, fantasy players should expect the Colts to ride Taylor in Week 17 against Jacksonville to ensure a win and (hopefully) sneak into the Wild Card round. Hilton should merely be considered a WR3 in that game.\n",
    "timestamp": "2020-12-28 02:25 AM",
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.3, 4.3, 6.7, 4.4, 9.9, 1.6, 'BYE', 1.9, 'DNP', 6.0, 5.1, 16.1, 21.0, 23.1, 9.1, 7.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.0, 23.8, 9.5, 11.1, 16.1, 12.9, 'BYE', 10.6, 'DNP', 15.8, 13.2, 8.4, 9.2, 12.7, 18.3, 11.9, 16.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.2, 5.1, 5.1, 5.1, 4.0, 2.9, 'BYE', 2.9, 'DNP', 2.3, 3.0, 3.6, 0.9, 4.8, 3.9, 3.8, 3.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.4, 22.3, 19.2, 21.7, 19.7, 19.1, 'BYE', 20.4, 'DNP', 20.1, 20.4, 19.9, 23.2, 22.4, 21.0, 22.2, 19.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4047650.png",
    "name": "D.K. Metcalf",
    "depthchart": "Starter: WR-1",
    "team": "Seattle Seahawks",
    "projected": 13.8,
    "opponent": "San Francisco 49ers",
    "home_away": "at ",
    "opp_rank_Neg": 4,
    "team_rank_Neu": 14,
    "avg_fp2": 15.08,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 28.94,
    "fanduelSalary": "$7600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#69BE28",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(105, 190, 40, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#69BE28",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
    "headlineNews": "DK Metcalf caught 6-of-8 targets for 59 yards in the Seahawks' Week 16 win over the Rams.\n",
    "report": "",
    "analysis": "Metcalf paced Seattle in targets, catches, and yards on a day Russell Wilson threw for just 225 yards. Metcalf has failed to reach 100 yards in four straight games and has just one touchdown in that span with the Seattle offense sputtering to close out the year. But he's a high-upside WR1/2 every time he takes the field ahead of a Week 17 date with the 49ers.\n",
    "timestamp": "2020-12-28 12:52 AM",
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 17.2, 17.0, 12.6, 24.3, 'BYE', 3.3, 34.1, 20.3, 3.8, 12.1, 22.7, 10.5, 15.1, 6.8, 8.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 13.8, 12.5, 8.9, 12.2, 'BYE', 16.0, 11.5, 12.1, 12.9, 15.6, 15.9, 16.6, 18.1, 10.4, 11.6, 13.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 3.9, 4.9, 1.7, 4.7, 'BYE', 8.2, 5.0, 7.9, 5.2, 5.1, 5.3, 4.8, 3.8, 5.1, 7.1, 4.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 19.8, 15.8, 17.5, 16.8, 'BYE', 19.2, 17.8, 18.7, 23.5, 18.1, 22.2, 20.8, 17.0, 20.8, 21.9, 19.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3925357.png",
    "name": "Calvin Ridley",
    "depthchart": "Starter: WR-1",
    "team": "Atlanta Falcons",
    "projected": 13.5,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "at ",
    "opp_rank_Neu": 22,
    "team_rank_Pos": 5,
    "avg_fp2": 16.42,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 31.19,
    "fanduelSalary": "$8700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/atl.png",
    "headlineNews": "Calvin Ridley caught 5-of-9 targets for 130 yards in the Falcons' Week 16 loss to the Chiefs.\u00a0\n",
    "report": "",
    "analysis": "Ridley caught just one pass on two first half targets, but it was a doozy. After an insane release off the line of scrimmage, Ridley secured\u00a0the ball in the middle of the field and cut on a dime, getting loose for a 54-yard catch that was nearly a 65-yard score. Matt Ryan was then able to more consistently find Ridley in the second half. With Julio Jones (hamstring) still ailing, Ridley heads into Week 17 against the Bucs having cleared 100 yards in four straight games. Tampa's Carlton Davis has been ailing with a groin injury. Ridley should continue going nuclear.\u00a0\u00a0\n",
    "timestamp": "2020-12-27 10:21 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 29.4,
    "week02": 26.4,
    "week03": 14.2,
    "week04": 0.0,
    "week05": 17.6,
    "week06": 15.9,
    "week07": 17.4,
    "week08": 5.7,
    "week09": "DNP",
    "week10": "BYE",
    "week11": 11.5,
    "week12": 14.0,
    "week13": 13.3,
    "week14": 22.4,
    "week15": 27.3,
    "week16": 14.8,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [29.4, 26.4, 14.2, 0.0, 17.6, 15.9, 17.4, 5.7, 'DNP', 'BYE', 11.5, 14.0, 13.3, 22.4, 27.3, 14.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.1, 12.9, 11.5, 13.7, 15.0, 8.3, 15.0, 15.4, 'DNP', 'BYE', 12.2, 14.2, 10.9, 15.4, 18.7, 13.3, 13.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.4, 5.0, 4.1, 6.6, 3.4, 3.1, 4.6, 5.6, 'DNP', 'BYE', 4.9, 4.8, 7.0, 2.8, 5.6, 5.0, 4.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.5, 18.0, 24.1, 24.4, 20.6, 21.3, 21.7, 20.7, 'DNP', 'BYE', 20.5, 21.1, 20.6, 14.5, 20.4, 22.8, 20.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3042778.png",
    "name": "Corey Davis",
    "depthchart": "Backup: WR-2",
    "team": "Tennessee Titans",
    "projected": 13.0,
    "opponent": "Houston Texans",
    "home_away": "at ",
    "opp_rank_Pos": 26,
    "team_rank_Neu": 21,
    "avg_fp2": 11.73,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 33.24,
    "fanduelSalary": "$7200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#4495D1",
    "tmColorDark": "#002A5C",
    "tmColorLite_rgba": "rgba(68, 149, 209, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 92, 0.2)",
    "tmTextLite": "#4495D1",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png",
    "headlineNews": "Corey Davis was held without a catch in Week 16 against the Packers.\n",
    "report": "",
    "analysis": "The two\u00a0targets were a season low for Davis. He got shut down by Packers CB Jaire Alexander, who covered Davis most of the night. This was a step back after Davis had over 100 yards in two of the last three games.\u00a0Davis is a high-upside WR3 for a matchup with a barely-there Texans\u00a0secondary\u00a0in Week 17.\n",
    "timestamp": "2020-12-28 04:41 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 13.6,
    "week02": 11.1,
    "week03": 9.4,
    "week04": "DNP",
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [13.6, 11.1, 9.4, 'DNP', 'DNP', 'DNP', 12.5, 22.8, 0.0, 9.2, 13.8, 8.5, 29.7, 2.9, 19.0, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.3, 6.4, 7.5, 'DNP', 'DNP', 'DNP', 7.9, 11.7, 7.8, 5.5, 7.3, 4.2, 6.9, 12.5, 8.4, 8.0, 13.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.3, 1.6, 0.7, 'DNP', 'DNP', 'DNP', 0.0, 1.5, 2.8, 1.9, 1.9, 7.3, 0.8, 3.3, 1.4, 3.7, 1.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.9, 12.7, 12.1, 'DNP', 'DNP', 'DNP', 13.4, 15.5, 15.1, 12.5, 14.4, 15.0, 14.1, 17.5, 15.5, 17.1, 14.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16737.png",
    "name": "Mike Evans",
    "depthchart": "Starter: WR-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 12.4,
    "opponent": "Atlanta Falcons",
    "home_away": "",
    "opp_rank_Pos": 31,
    "team_rank_Pos": 3,
    "avg_fp2": 13.83,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 35.51,
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
    "headlineNews": "Mike Evans caught 10-of-12 targets for 181 yards and two touchdowns in the Bucs' Week 16\u00a0win over the Lions.\n",
    "report": "",
    "analysis": "It's the second straight 100-yard game for\u00a0Evans, who previously hadn't gone over 100 yards since Week 4. Evans got behind the Lions secondary for a 27-yard touchdown in the first quarter, and later added another score with Blaine Gabbert in mop-up duty. His 12 targets were again a team high. Evans needs just 40 yards for his seventh consecutive 1,000-yard season. He's a top-five WR1 play for Week 17 against the Falcons.\n",
    "timestamp": "2020-12-27 05:53 AM",
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.7, 19.9, 13.2, 21.7, 12.6, 1.5, 4.7, 14.0, 8.4, 16.7, 13.4, 18.5, 'BYE', 7.1, 14.0, 35.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.7, 18.0, 11.1, 7.8, 9.4, 13.0, 13.6, 15.2, 17.5, 8.7, 9.3, 14.6, 'BYE', 15.4, 9.8, 11.3, 12.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.4, 5.4, 6.3, 7.0, 6.6, 5.6, 4.2, 5.9, 5.3, 4.5, 5.5, 5.1, 'BYE', 5.9, 5.6, 5.6, 6.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(213, 10, 10, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.8, 22.8, 22.8, 22.3, 22.3, 22.3, 21.9, 21.9, 22.1, 21.5, 22.2, 21.1, 'BYE', 21.7, 21.3, 22.2, 21.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2971618.png",
    "name": "Nelson Agholor",
    "depthchart": "Starter: WR-1",
    "team": "Las Vegas Raiders",
    "projected": 12.2,
    "opponent": "Denver Broncos",
    "home_away": "at ",
    "opp_rank_Neu": 12,
    "team_rank_Neu": 10,
    "avg_fp2": 10.36,
    "opp_rank_allowed_fp2_Neu": 14,
    "opp_avg_allowed_fp2": 29.24,
    "fanduelSalary": "$5800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A5ACAF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lv.png",
    "headlineNews": "Nelson Agholor caught 5-of-6 targets for 155 yards and a touchdown in the Raiders' Week 16 loss to the Dolphins.\n",
    "report": "",
    "analysis": "Agholor continues to be everything Henry Ruggs was supposed to be when the Raiders made him the first receiver selected in the 2020 NFL Draft. His score came on a deep bomb from Carr. After securing\u00a0the catch, Agholor shook one defender and then crossed up a safety on his way to the end zone. It was his eighth score of the year and his third game topping 100 receiving yards. Agholor and Darren Waller have been a surprisingly effective tandem for Derek Carr. Agholor's ceiling makes him a solid WR3 option for Week 17 against the Broncos.\n",
    "timestamp": "2020-12-27 04:44 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 8.8,
    "week02": 2.4,
    "week03": 4.2,
    "week04": 12.4,
    "week05": 13.7,
    "week06": "BYE",
    "week07": 19.2,
    "week08": 0.0,
    "week09": 12.5,
    "week10": 1.3,
    "week11": 17.8,
    "week12": 7.9,
    "week13": 5.8,
    "week14": 18.5,
    "week15": 6.9,
    "week16": 24.0,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.8, 2.4, 4.2, 12.4, 13.7, 'BYE', 19.2, 0.0, 12.5, 1.3, 17.8, 7.9, 5.8, 18.5, 6.9, 24.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [-1.2, 1.1, 2.3, 4.3, 6.6, 'BYE', 5.4, 4.2, 6.4, 6.2, 4.9, 10.3, 9.5, 4.9, 10.1, 9.6, 12.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.4, 2.6, 1.5, 1.0, 0.0, 'BYE', 1.5, 1.1, 2.3, 1.0, 2.5, 1.1, 4.0, 0.8, 1.2, 1.7, 4.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.7, 14.3, 13.5, 11.2, 13.8, 'BYE', 13.5, 13.2, 11.3, 12.7, 14.6, 13.6, 12.9, 13.5, 13.1, 12.5, 13.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15795.png",
    "name": "DeAndre Hopkins",
    "depthchart": "Starter: WR-1",
    "team": "Arizona Cardinals",
    "projected": 12.1,
    "opponent": "Los Angeles Rams",
    "home_away": "at ",
    "opp_rank_Neg": 1,
    "team_rank_Neu": 15,
    "avg_fp2": 14.99,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 22.67,
    "fanduelSalary": "$8200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#97233F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(151, 35, 63, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#97233F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
    "headlineNews": "DeAndre Hopkins (hip) returned to Cardinals practice Thursday, getting in a \"limited\" session.\u00a0\n",
    "report": "",
    "analysis": "Hopkins' practice reps have been all over the map this season. We haven't read anything that would lead us to\u00a0believe this is a bigger-than-normal issue as Hopkins prepares to do battle with the Rams' Jalen Ramsey.\u00a0\n",
    "timestamp": "2021-01-01 12:17 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 22.1,
    "week02": 16.8,
    "week03": 18.7,
    "week04": 7.6,
    "week05": 22.1,
    "week06": 8.3,
    "week07": 19.3,
    "week08": "BYE",
    "week09": 4.5,
    "week10": 22.2,
    "week11": 7.6,
    "week12": 8.0,
    "week13": 15.2,
    "week14": 18.1,
    "week15": 25.5,
    "week16": 8.8,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [22.1, 16.8, 18.7, 7.6, 22.1, 8.3, 19.3, 'BYE', 4.5, 22.2, 7.6, 8.0, 15.2, 18.1, 25.5, 8.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.9, 17.1, 17.5, 16.6, 15.9, 14.3, 16.4, 'BYE', 14.4, 13.7, 10.7, 14.4, 11.5, 10.9, 15.6, 11.9, 12.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.7, 5.9, 5.1, 7.7, 6.5, 6.6, 3.9, 'BYE', 6.4, 6.0, 7.3, 7.0, 6.3, 7.3, 11.4, 8.8, 6.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [20.4, 21.6, 22.4, 21.3, 20.6, 21.9, 23.1, 'BYE', 21.6, 20.0, 21.5, 21.1, 20.2, 21.4, 24.2, 22.1, 22.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3916433.png",
    "name": "Jakobi Meyers",
    "depthchart": "Starter: WR-1",
    "team": "New England Patriots",
    "projected": 11.7,
    "opponent": "New York Jets",
    "home_away": "",
    "opp_rank_Pos": 30,
    "team_rank_Neg": 30,
    "avg_fp2": 7.52,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 30.15,
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
    "headlineNews": "Jakobi Meyers caught 4-of-6 targets for 45 yards in the Patriots' Week 16 loss to the Bills.\n",
    "report": "",
    "analysis": "Meyers led the Patriots in catches, yards, and targets, but it didn't mean much when the team completed nine passes and threw no touchdowns. Meyers continues to operate as the No. 1 wideout, but this passing game is mostly broken. He'll be a low-floor WR4 for Week 17 against the Jets.\n",
    "timestamp": "2020-12-29 05:51 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 0.0,
    "week02": 1.2,
    "week03": 0.0,
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": "DNP",
    "week08": 10.8,
    "week09": 22.9,
    "week10": 13.36,
    "week11": 5.3,
    "week12": 7.7,
    "week13": 2.5,
    "week14": 6.7,
    "week15": 12.6,
    "week16": 6.5,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 1.2, 0.0, 'DNP', 'DNP', 'DNP', 'DNP', 10.8, 22.9, 13.36, 5.3, 7.7, 2.5, 6.7, 12.6, 6.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.2, 1.8, 1.2, 'DNP', 'DNP', 'DNP', 'DNP', 4.4, 7.8, 3.7, 7.2, 8.7, 9.6, 8.5, 10.5, 9.1, 11.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.4, 1.4, 0.8, 'DNP', 'DNP', 'DNP', 'DNP', 0.9, 0.0, 0.0, 1.6, 1.5, 1.6, 1.6, 1.3, 8.3, 0.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [5.7, 7.8, 5.9, 'DNP', 'DNP', 'DNP', 'DNP', 7.6, 7.2, 13.3, 12.3, 13.4, 10.3, 12.1, 11.3, 15.8, 6.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16799.png",
    "name": "Allen Robinson",
    "depthchart": "Starter: WR-1",
    "team": "Chicago Bears",
    "projected": 11.6,
    "opponent": "Green Bay Packers",
    "home_away": "",
    "opp_rank_Neg": 6,
    "team_rank_Neu": 22,
    "avg_fp2": 13.81,
    "opp_rank_allowed_fp2_Neu": 7,
    "opp_avg_allowed_fp2": 27.26,
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
    "headlineNews": "Allen\u00a0Robinson (hamstring) was limited at Friday's practice.\u00a0\n",
    "report": "",
    "analysis": "Good news for the team's No. 1 wideout ahead of Week 17's clash with Green Bay. Robinson missed Thursday's practice with the hamstring issue. WSCR Radio's Mark Grote said Robinson should be ready to go against the Packers. A-Rob should mostly avoid coverage from Jaire Alexander since Alexander lines up on the left side of the formation 74 percent of the time and Robinson lines up across the formation, including the slot.\u00a0\n",
    "timestamp": "2021-01-01 07:23 PM",
    "source": "Adam Caplan on Twitter ",
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.8, 4.8, 23.3, 19.6, 14.0, 7.8, 9.0, 17.7, 11.6, 7.3, 'BYE', 23.4, 10.5, 22.8, 10.3, 15.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.0, 14.7, 11.3, 15.5, 12.8, 11.0, 10.7, 11.3, 15.4, 14.3, 'BYE', 10.3, 13.3, 14.4, 14.9, 12.7, 11.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.5, 3.8, 2.3, 5.9, 3.5, 5.1, 2.3, 5.0, 3.9, 4.7, 'BYE', 4.2, 6.0, 4.8, 5.7, 5.3, 4.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  "rgba(195, 104, 53, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.4, 19.0, 15.3, 20.3, 20.5, 18.5, 17.4, 18.7, 19.3, 19.1, 'BYE', 19.1, 20.8, 17.7, 21.0, 19.0, 19.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15072.png",
    "name": "Marvin Jones",
    "depthchart": "Starter: WR-1",
    "team": "Detroit Lions",
    "projected": 11.6,
    "opponent": "Minnesota Vikings",
    "home_away": "",
    "opp_rank_Pos": 24,
    "team_rank_Neu": 11,
    "avg_fp2": 10.39,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 33.55,
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
    "headlineNews": "Marvin Jones caught three passes for 11 yards in Week 16 against the Bucs.\n",
    "report": "",
    "analysis": "He was only targeted three times in a game that saw the\u00a0Lions lose Matthew Stafford to an ankle injury in the first quarter.\u00a0Chase Daniel and David Blough both ended up seeing time at quarterback. This was a\u00a0floor game for Jones, who had a favorable matchup with Bucs CB Carlton Davis sidelined. Jones\u00a0may be forced to play without Stafford for a matchup with the Vikings in\u00a0Week 17.\n",
    "timestamp": "2020-12-27 05:52 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 7.5,
    "week02": 10.3,
    "week03": 6.6,
    "week04": 1.4,
    "week05": "BYE",
    "week06": 1.8,
    "week07": 10.5,
    "week08": 17.4,
    "week09": 11.8,
    "week10": 19.6,
    "week11": 7.1,
    "week12": 7.8,
    "week13": 21.6,
    "week14": 6.8,
    "week15": 22.2,
    "week16": 3.4,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.5, 10.3, 6.6, 1.4, 'BYE', 1.8, 10.5, 17.4, 11.8, 19.6, 7.1, 7.8, 21.6, 6.8, 22.2, 3.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.1, 9.9, 11.5, 8.9, 'BYE', 7.1, 14.2, 6.2, 20.9, 9.5, 13.9, 12.1, 9.8, 13.4, 10.5, 14.7, 11.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.4, 4.0, 3.3, 2.5, 'BYE', 1.0, 1.9, 3.3, 2.4, 3.1, 2.8, 3.1, 3.5, 3.8, 2.3, 2.6, 3.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 118, 182, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.8, 16.7, 18.0, 16.3, 'BYE', 15.2, 17.4, 15.9, 17.1, 17.6, 16.0, 17.9, 16.7, 17.8, 16.5, 18.4, 18.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4241372.png",
    "name": "Marquise Brown",
    "depthchart": "Starter: WR-1",
    "team": "Baltimore Ravens",
    "projected": 11.5,
    "opponent": "Cincinnati Bengals",
    "home_away": "at ",
    "opp_rank_Neu": 23,
    "team_rank_Neg": 31,
    "avg_fp2": 9.03,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 29.43,
    "fanduelSalary": "$6000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9E7C0C",
    "tmColorDark": "#241773",
    "tmColorLite_rgba": "rgba(158, 124, 12, 0.2)",
    "tmColorDark_rgba": "rgba(36, 23, 115, 0.2)",
    "tmTextLite": "#9E7C0C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png",
    "headlineNews": "Marquise Brown caught 4-of-4 targets for 25 yards and a touchdown in the Ravens' Week 16 win against the Giants.\u00a0\n",
    "report": "",
    "analysis": "Brown was involved early on, catching his touchdown in the first quarter. Baltimore mostly kept the ball on the ground in the second half, leaving little opportunity for Baltimore's pass catchers, including Brown. Brown, who has been serviceable for fantasy purposes in recent weeks, gets the Bengals in Week 17. He should be regarded as a high-end WR3.\u00a0\n",
    "timestamp": "2020-12-27 09:40 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 12.6,
    "week02": 6.7,
    "week03": 2.3,
    "week04": 10.6,
    "week05": 16.8,
    "week06": 7.7,
    "week07": "DNP",
    "week08": 6.8,
    "week09": 5.3,
    "week10": 2.4,
    "week11": 0.0,
    "week12": 16.5,
    "week13": 12.4,
    "week14": 12.0,
    "week15": 12.8,
    "week16": 10.5,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.6, 6.7, 2.3, 10.6, 16.8, 7.7, 'DNP', 6.8, 5.3, 2.4, 0.0, 16.5, 12.4, 12.0, 12.8, 10.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.1, 15.7, 11.8, 7.1, 7.0, 11.1, 'DNP', 8.7, 10.7, 10.8, 12.9, 6.8, 7.0, 15.5, 8.6, 11.6, 11.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.7, 2.6, 10.0, 1.8, 4.0, 8.9, 'DNP', 0.2, 4.0, 1.1, 2.8, 1.0, 4.1, 3.4, 7.2, 7.1, 3.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.8, 18.3, 20.8, 18.2, 14.7, 20.2, 'DNP', 15.2, 17.9, 15.5, 16.9, 12.9, 18.1, 14.5, 16.9, 17.4, 13.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3915823.png",
    "name": "Keke Coutee",
    "depthchart": "Backup: WR-2",
    "team": "Houston Texans",
    "projected": 11.1,
    "opponent": "Tennessee Titans",
    "home_away": "",
    "opp_rank_Pos": 28,
    "team_rank_Pos": 4,
    "avg_fp2": 8.36,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 34.58,
    "fanduelSalary": "$5700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#03202F",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(3, 32, 47, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/hou.png",
    "headlineNews": "Keke Coutee (foot) was limited in Wednesday's practice.\n",
    "report": "",
    "analysis": "Coutee was on the injury report with a foot issue last week but caught all five of his targets for 54 yards against the Bengals and should be fine as a WR3/4 for Week 17 against the Titans.\n",
    "timestamp": "2020-12-30 10:01 PM",
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
    "week11": 8.0,
    "week12": 4.7,
    "week13": 18.1,
    "week14": 7.9,
    "week15": 11.8,
    "week16": 7.9,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 8.0, 4.7, 18.1, 7.9, 11.8, 7.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 0.9, 4.8, 4.5, 8.0, 6.2, 7.1, 11.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 0.0, 1.2, 1.1, 1.1, 4.7, 2.8, 2.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 10.4, 14.9, 12.5, 11.1, 16.0, 11.5, 12.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3932905.png",
    "name": "Diontae Johnson",
    "depthchart": "Starter: WR-1",
    "team": "Pittsburgh Steelers",
    "projected": 11.0,
    "opponent": "Cleveland Browns",
    "home_away": "at ",
    "opp_rank_Neu": 21,
    "team_rank_Neu": 16,
    "avg_fp2": 11.91,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 30.66,
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
    "headlineNews": "Diontae Johnson caught 8-of-14 targets for 75 yards and one score in Pittsburgh's Week 16 win against the Colts.\n",
    "report": "",
    "analysis": "He unsurprisingly dropped his first two targets on\u00a0Pittsburgh's opening drive, forcing the team to go three-and-out from the gates. Coach Mike Tomlin\u00a0fortunately\u00a0kept Johnson on the field anyhow, allowing him to run free for a 39-yard touchdown \u2014 the first of Ben Roethlisberger's three scores in the second half \u2014 to upstart the Steelers' 21-0 run to complete its division-clinching comeback win. Johnson has now seen double-digit targets in back-to-back games (and in the\u00a0last seven games he wasn't benched for) but could be rested with nothing to play for in the team's\u00a0regular season finale against the Browns. That will be something to monitor as Cleveland enters in a win-and-in situation on the other side of the ball.\n",
    "timestamp": "2020-12-27 10:35 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 6.7,
    "week02": 19.2,
    "week03": 0.9,
    "week04": "DNP",
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.7, 19.2, 0.9, 'DNP', 0.3, 'DNP', 24.5, 1.1, 11.1, 20.6, 17.1, 8.6, 17.1, 6.0, 15.9, 17.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.5, 10.5, 12.0, 'DNP', 10.8, 'DNP', 10.3, 10.8, 14.2, 9.0, 23.1, 11.6, 15.1, 14.0, 9.5, 11.9, 11.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.0, 1.6, 6.7, 'DNP', 1.3, 'DNP', 0.6, 0.3, 1.0, 1.4, 1.8, 1.5, 2.4, 1.2, 2.2, 3.2, 2.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.1, 12.4, 19.5, 'DNP', 13.3, 'DNP', 11.8, 15.5, 16.1, 16.0, 18.0, 16.8, 17.3, 13.9, 16.6, 17.7, 17.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13295.png",
    "name": "Emmanuel Sanders",
    "depthchart": "Starter: WR-1",
    "team": "New Orleans Saints",
    "projected": 11.0,
    "opponent": "Carolina Panthers",
    "home_away": "at ",
    "opp_rank_Neu": 17,
    "team_rank_Neu": 19,
    "avg_fp2": 9.04,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 28.17,
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
    "headlineNews": "Emmanuel Sanders caught 4-of-5 targets for 83 yards in the Saints' Week 16 win over the Vikings.\n",
    "report": "",
    "analysis": "Drew Brees only attempted 26 pass attempts with Alvin Kamara rushing like a mad man, so Sanders' chances were limited. He made the most of them, including a 31-yard pickup down the sideline. With Michael Thomas out until the NFL playoffs, Sanders will get one more week as the alpha receiver. He will be a fantasy flex play assuming the Saints don't rest their starters.\n",
    "timestamp": "2020-12-26 01:17 AM",
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.0, 2.3, 13.6, 12.3, 18.2, 'BYE', 'DNP', 'DNP', 11.8, 1.0, 8.6, 0.9, 6.4, 12.3, 9.6, 11.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.5, 13.0, 5.2, 7.7, 7.1, 'BYE', 'DNP', 'DNP', 5.1, 7.0, 11.6, 5.8, 7.3, 3.2, 11.3, 11.1, 11.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [12.9, 2.8, 2.2, 2.6, 2.9, 'BYE', 'DNP', 'DNP', 1.1, 4.4, 1.6, 2.0, 1.3, 1.5, 1.5, 3.3, 0.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(155, 132, 92, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.9, 18.0, 15.4, 14.5, 13.3, 'BYE', 'DNP', 'DNP', 14.5, 14.3, 12.7, 14.6, 15.7, 14.8, 17.4, 16.3, 14.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4239993.png",
    "name": "Tee Higgins",
    "depthchart": "Starter: WR-1",
    "team": "Cincinnati Bengals",
    "projected": 10.8,
    "opponent": "Baltimore Ravens",
    "home_away": "",
    "opp_rank_Neu": 14,
    "team_rank_Neu": 23,
    "avg_fp2": 10.74,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 28.09,
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
    "headlineNews": "Tee Higgins (hamstring) will play in Week 17 against the Ravens.\n",
    "report": "",
    "analysis": "Both Tyler Boyd and Higgins practiced in full on Friday and were removed from the injury report altogether. Sunday's matchup against the Ravens is still a nightmarish one that fantasy players should look to avoid. Consider Higgins a better outright play than Boyd with Brandon Allen back under center.\n",
    "timestamp": "2021-01-01 08:49 PM",
    "source": "Geoff Hobson on Twitter",
    "game_day_logo": "",
    "week01": 0.0,
    "week02": "DNP",
    "week03": 18.5,
    "week04": 11.0,
    "week05": 8.2,
    "week06": 15.7,
    "week07": 16.3,
    "week08": 11.4,
    "week09": "BYE",
    "week10": 19.0,
    "week11": 4.1,
    "week12": 12.9,
    "week13": 8.1,
    "week14": 7.4,
    "week15": 4.6,
    "week16": 18.9,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 'DNP', 18.5, 11.0, 8.2, 15.7, 16.3, 11.4, 'BYE', 19.0, 4.1, 12.9, 8.1, 7.4, 4.6, 18.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [0.6, 'DNP', 4.2, 7.9, 8.6, 12.0, 13.7, 12.3, 'BYE', 8.0, 14.3, 11.4, 13.2, 11.7, 15.9, 8.0, 10.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 'DNP', 0.0, 3.4, 5.7, 9.4, 9.4, 2.9, 'BYE', 10.6, 8.3, 2.5, 4.6, 4.2, 6.9, 3.9, 5.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [3.4, 'DNP', 9.5, 11.8, 12.2, 11.9, 20.1, 16.2, 'BYE', 13.8, 19.7, 14.0, 17.0, 16.4, 16.3, 11.8, 16.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4035687.png",
    "name": "Michael Pittman",
    "depthchart": "Backup: WR-2",
    "team": "Indianapolis Colts",
    "projected": 10.7,
    "opponent": "Jacksonville Jaguars",
    "home_away": "",
    "opp_rank_Pos": 27,
    "team_rank_Neu": 8,
    "avg_fp2": 6.24,
    "opp_rank_allowed_fp2_Pos": 24,
    "opp_avg_allowed_fp2": 31.77,
    "fanduelSalary": "$5300",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Concussion",
    "tmColorLite": "#014683",
    "tmColorDark": "#002C5F",
    "tmColorLite_rgba": "rgba(1, 70, 131, 0.2)",
    "tmColorDark_rgba": "rgba(0, 44, 95, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png",
    "headlineNews": "Michael Pittman (concussion) was upgraded to \"full\" for Thursday's practice.\u00a0\n",
    "report": "",
    "analysis": "Pittman will be ready to go for Sunday's regular season finale against the Jaguars, but he seems to be operating as the No. 3 receiver right now behind T.Y. Hilton and Zach Pascal. Every Colt will offer upside vs. the collapsed Jags, but Pittman has a zero-point floor.\u00a0\n",
    "timestamp": "2020-12-31 10:29 PM",
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.0, 5.7, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 1.1, 7.6, 15.7, 14.1, 3.8, 7.1, 5.5, 2.9, 5.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.2, 5.0, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 2.8, 2.7, 3.8, 9.5, 12.6, 11.5, 9.4, 9.6, 5.5, 10.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 0.0, 0.0, 0.0, 1.9, 3.5, 0.5, 2.3, 2.6, 3.1, 2.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.3, 4.9, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 6.6, 6.8, 8.6, 6.6, 15.0, 10.3, 11.0, 7.3, 13.4, 11.8]
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
    "opponent": "Philadelphia Eagles",
    "home_away": "at ",
    "opp_rank_Neu": 20,
    "team_rank_Neg": 26,
    "avg_fp2": 11.91,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 32.66,
    "fanduelSalary": "$7400",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Ankle",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#773141",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(119, 49, 65, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png",
    "headlineNews": "Terry McLaurin (ankle) is questionable for Week 17 against the Eagles.\n",
    "report": "",
    "analysis": "McLaurin didn't practice at all throughout the week but coach Ron Rivera still sounded encouraged by the former's work on the sideline. There's no denying McLaurin will likely be limited if available Sunday night, but Washington will still try and get its best playmaker on the field at all costs. Washington is poised to take down the NFC East with a win over the Eagles, which will not have Miles Sanders or Dallas Goedert.\n",
    "timestamp": "2021-01-01 07:03 PM",
    "source": "Sam Fortier on Twitter",
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.6, 22.0, 10.6, 16.8, 4.1, 10.9, 18.5, 'BYE', 21.0, 13.7, 10.9, 12.7, 2.4, 3.4, 11.2, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.3, 9.4, 10.1, 8.9, 10.7, 9.7, 17.1, 'BYE', 11.1, 12.2, 14.0, 15.3, 13.5, 10.6, 13.7, 'DNP', 10.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.0, 5.7, 11.3, 4.7, 3.5, 4.8, 5.4, 'BYE', 8.2, 4.8, 5.9, 5.1, 6.0, 4.2, 4.3, 'DNP', 4.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.6, 19.7, 23.9, 17.9, 17.7, 17.9, 18.7, 'BYE', 18.1, 17.2, 20.0, 16.8, 19.1, 16.1, 16.2, 'DNP', 16.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3128390.png",
    "name": "Allen Lazard",
    "depthchart": "Backup: WR-2",
    "team": "Green Bay Packers",
    "projected": 10.5,
    "opponent": "Chicago Bears",
    "home_away": "at ",
    "opp_rank_Neu": 13,
    "team_rank_Neu": 9,
    "avg_fp2": 8.73,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 26.17,
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
    "headlineNews": "Allen Lazard caught both of his targets for 14 yards in Week 16 against the Titans.\n",
    "report": "",
    "analysis": "Lazard outsnapped Marquez Valdes-Scantling but didn\u2019t have much of a pass game role. He had the key block on AJ Dillon\u2019s 30-yard TD run. Lazard hasn\u2019t had more than 63 yards in any game outside of a 6/146/1 line in Week 3. He can\u00a0continue to be treated as a WR5\u00a0for a matchup with Chicago in Week 17.\n",
    "timestamp": "2020-12-28 04:32 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 16.2,
    "week02": 6.0,
    "week03": 23.4,
    "week04": "DNP",
    "week05": "BYE",
    "week06": "DNP",
    "week07": "DNP",
    "week08": "DNP",
    "week09": "DNP",
    "week10": "DNP",
    "week11": 2.8,
    "week12": 10.3,
    "week13": 6.5,
    "week14": 2.9,
    "week15": 8.1,
    "week16": 2.4,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [16.2, 6.0, 23.4, 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 2.8, 10.3, 6.5, 2.9, 8.1, 2.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.0, 12.0, 8.6, 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 8.6, 7.2, 10.6, 15.9, 12.7, 11.7, 10.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.8, 0.0, 6.4, 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 1.2, 2.7, 0.9, 2.7, 1.6, 2.8, 1.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.2, 11.7, 12.4, 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 11.9, 13.3, 13.0, 12.7, 11.2, 14.9, 10.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3135321.png",
    "name": "Hunter Renfrow",
    "depthchart": "Reserve: WR-3",
    "team": "Las Vegas Raiders",
    "projected": 10.2,
    "opponent": "Denver Broncos",
    "home_away": "at ",
    "opp_rank_Neu": 12,
    "team_rank_Neu": 10,
    "avg_fp2": 6.65,
    "opp_rank_allowed_fp2_Neu": 14,
    "opp_avg_allowed_fp2": 29.24,
    "fanduelSalary": "$5000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A5ACAF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lv.png",
    "headlineNews": "Hunter Renfrow caught all five of his targets for 34 yards in the Raiders' Week 16 loss to the Dolphins.\n",
    "report": "",
    "analysis": "Renfrow now has just one game over 50 yards in his previous seven contests. With Darren Waller and Nelson Agholor soaking up targets, Renfrow has neither the big-play upside nor the reception-floor to be worth considering in most fantasy leagues. He can remain off all fantasy rosters heading into Week 17.\n",
    "timestamp": "2020-12-27 05:40 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 3.1,
    "week02": 5.2,
    "week03": 17.4,
    "week04": 8.2,
    "week05": 4.7,
    "week06": "BYE",
    "week07": 6.2,
    "week08": 10.6,
    "week09": 7.0,
    "week10": 4.0,
    "week11": 4.7,
    "week12": 10.8,
    "week13": 6.7,
    "week14": 4.3,
    "week15": 0.9,
    "week16": 5.9,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.1, 5.2, 17.4, 8.2, 4.7, 'BYE', 6.2, 10.6, 7.0, 4.0, 4.7, 10.8, 6.7, 4.3, 0.9, 5.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.8, 3.9, 8.1, 12.6, 8.2, 'BYE', 5.8, 6.4, 8.2, 5.0, 5.2, 7.9, 6.7, 6.2, 6.7, 6.8, 10.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.9, 2.1, 1.3, 2.2, 1.5, 'BYE', 1.2, 2.1, 9.0, 2.3, 1.4, 2.7, 3.7, 2.8, 2.3, 1.4, 1.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.0, 13.9, 12.9, 14.2, 14.0, 'BYE', 14.0, 15.5, 18.1, 14.0, 12.9, 11.6, 8.2, 13.3, 11.5, 12.6, 12.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4035403.png",
    "name": "Denzel Mims",
    "depthchart": "Backup: WR-2",
    "team": "New York Jets",
    "projected": 10.1,
    "opponent": "New England Patriots",
    "home_away": "at ",
    "opp_rank_Neu": 7,
    "team_rank_Neg": 32,
    "avg_fp2": 5.9,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 27.17,
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
    "headlineNews": "Denzel Mims failed to catch his two targets in the Jets' Week 16 win over the Browns.\n",
    "report": "",
    "analysis": "Mims hasn't been on the redraft radar as a rookie with the Jets doing next to nothing offensively. The rookie has made a few highlight grabs near the sideline but clearly needs more work in the route running department before transitioning into a No. 1 or No. 2 receiver in the NFL. Mims will close the season in New England.\n",
    "timestamp": "2020-12-27 10:31 PM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": 6.2,
    "week08": 5.2,
    "week09": 8.2,
    "week10": "DNP",
    "week11": 8.6,
    "week12": 8.7,
    "week13": 7.0,
    "week14": "DNP",
    "week15": 3.3,
    "week16": 0.0,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 6.2, 5.2, 8.2, 'DNP', 8.6, 8.7, 7.0, 'DNP', 3.3, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 3.9, 8.0, 6.4, 'DNP', 6.7, 5.3, 7.3, 'DNP', 5.2, 6.4, 10.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 0.7, 5.0, 2.5, 'DNP', 3.2, 1.6, 2.4, 'DNP', 7.1, 5.8, 1.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  "rgba(18, 87, 64, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 7.2, 11.2, 15.2, 'DNP', 12.1, 14.1, 15.0, 'DNP', 9.1, 8.0, 8.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3916945.png",
    "name": "Darius Slayton",
    "depthchart": "Starter: WR-1",
    "team": "New York Giants",
    "projected": 10.0,
    "opponent": "Dallas Cowboys",
    "home_away": "",
    "opp_rank_Neu": 11,
    "team_rank_Neg": 29,
    "avg_fp2": 7.52,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 34.99,
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
    "headlineNews": "Darius Slayton caught 2-of-8 targets for 26 yards in the Giants' Week 16 loss to the Ravens.\u00a0\n",
    "report": "",
    "analysis": "It was a frustrating day for Slayton, who saw several downfield balls come his way. Slayton was unable to reel in any of those passes, leaving him with two grabs for 26 yards in a game that saw Daniel Jones throw 41 passes. Slayton continues to see an encouraging target share and air yards -- prayer yards, some would say -- making him a high-end WR3 play in Week 17 against the Cowboys. He had eight catches for 129 yards against Dallas in Week 5.\u00a0\n",
    "timestamp": "2020-12-27 10:42 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 25.2,
    "week02": 4.8,
    "week03": 4.8,
    "week04": 6.3,
    "week05": 16.9,
    "week06": 10.8,
    "week07": 3.3,
    "week08": 8.1,
    "week09": 1.3,
    "week10": 11.8,
    "week11": "BYE",
    "week12": 0.0,
    "week13": 1.9,
    "week14": 4.6,
    "week15": 9.4,
    "week16": 3.6,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [25.2, 4.8, 4.8, 6.3, 16.9, 10.8, 3.3, 8.1, 1.3, 11.8, 'BYE', 0.0, 1.9, 4.6, 9.4, 3.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.5, 10.9, 11.5, 9.9, 16.6, 12.0, 10.6, 13.3, 10.4, 13.3, 'BYE', 11.1, 10.4, 7.6, 9.3, 6.1, 10.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.0, 1.8, 3.4, 2.2, 0.6, 0.9, 2.1, 2.1, 1.2, 1.5, 'BYE', 2.6, 1.6, 0.0, 1.9, 2.8, 1.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [22.4, 22.1, 22.8, 14.9, 18.7, 19.6, 21.3, 19.8, 20.2, 17.6, 'BYE', 19.5, 18.9, 16.0, 19.6, 16.6, 13.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3915416.png",
    "name": "D.J. Moore",
    "depthchart": "Starter: WR-1",
    "team": "Carolina Panthers",
    "projected": 9.9,
    "opponent": "New Orleans Saints",
    "home_away": "",
    "opp_rank_Neg": 5,
    "team_rank_Neu": 17,
    "avg_fp2": 11.85,
    "opp_rank_allowed_fp2_Neu": 15,
    "opp_avg_allowed_fp2": 29.26,
    "fanduelSalary": "$6900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0085CA",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 133, 202, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#0085CA",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/car.png",
    "headlineNews": "D.J. Moore caught 5-of-10 targets for 37 yards in Carolina's Week 16 win against Washington.\n",
    "report": "",
    "analysis": "Teddy Bridgewater, who wasn't afforded much time behind third-string LT Michael Schofield,\u00a0also missed Moore running wide open for a touchdown at one point. It's still encouraging for Moore that he's seen at least eight targets in four consecutive games with a stint on the team's COVID list sandwiched in between.\u00a0He'll need 84 receiving yards against New Orleans in the regular season finale to set a new career-high in only his third year with the Panthers.\n",
    "timestamp": "2020-12-28 11:39 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 7.4,
    "week02": 16.0,
    "week03": 7.5,
    "week04": 6.9,
    "week05": 17.3,
    "week06": 11.8,
    "week07": 23.3,
    "week08": 6.5,
    "week09": 2.8,
    "week10": 17.6,
    "week11": 18.3,
    "week12": 8.1,
    "week13": "BYE",
    "week14": "DNP",
    "week15": 16.2,
    "week16": 6.2,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.4, 16.0, 7.5, 6.9, 17.3, 11.8, 23.3, 6.5, 2.8, 17.6, 18.3, 8.1, 'BYE', 'DNP', 16.2, 6.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.7, 8.1, 12.2, 10.1, 11.3, 14.5, 8.6, 16.2, 11.5, 11.5, 9.5, 10.0, 'BYE', 'DNP', 7.8, 9.3, 9.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.9, 5.2, 4.2, 3.0, 3.2, 3.8, 3.4, 3.8, 4.9, 5.8, 3.6, 6.5, 'BYE', 'DNP', 4.5, 4.4, 6.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 133, 202, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.6, 16.5, 15.7, 15.5, 16.1, 14.0, 14.6, 17.5, 17.4, 17.2, 14.9, 18.3, 'BYE', 'DNP', 16.3, 16.5, 19.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2972460.png",
    "name": "Breshad Perriman",
    "depthchart": "Starter: WR-1",
    "team": "New York Jets",
    "projected": 9.6,
    "opponent": "New England Patriots",
    "home_away": "at ",
    "opp_rank_Neu": 7,
    "team_rank_Neg": 32,
    "avg_fp2": 6.75,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 27.17,
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
    "headlineNews": "Breshad Perriman failed to catch his six targets in the Jets' Week 16 win over the Browns.\n",
    "report": "",
    "analysis": "Perriman's assignment was beating CB Denzel Ward on the outside as Sam Darnold's primary deep threat. That's not a good combination to work with as evidenced by his 0.000 batting average on Sunday. The Jets will face the Patriots in a meaningless Week 17 matchup to close the season. Perriman needs more around him to be on the fantasy radar.\n",
    "timestamp": "2020-12-27 10:28 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 3.2,
    "week02": 2.2,
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": 8.2,
    "week07": 3.7,
    "week08": "DNP",
    "week09": 24.6,
    "week10": "DNP",
    "week11": 12.4,
    "week12": 9.9,
    "week13": 2.7,
    "week14": 4.1,
    "week15": 2.6,
    "week16": 0.6,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.2, 2.2, 'DNP', 'DNP', 'DNP', 8.2, 3.7, 'DNP', 24.6, 'DNP', 12.4, 9.9, 2.7, 4.1, 2.6, 0.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.1, 8.0, 'DNP', 'DNP', 'DNP', 8.8, 5.6, 'DNP', 3.7, 'DNP', 9.3, 6.1, 8.1, 3.8, 5.5, 8.3, 9.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.6, 2.3, 'DNP', 'DNP', 'DNP', 0.0, 2.3, 'DNP', 2.2, 'DNP', 0.0, 0.7, 0.8, 0.0, 0.0, 0.8, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  "rgba(18, 87, 64, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.3, 11.2, 'DNP', 'DNP', 'DNP', 7.7, 10.9, 'DNP', 13.1, 'DNP', 11.6, 11.6, 11.7, 7.6, 13.0, 9.9, 12.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2577327.png",
    "name": "Tyler Lockett",
    "depthchart": "Backup: WR-2",
    "team": "Seattle Seahawks",
    "projected": 9.5,
    "opponent": "San Francisco 49ers",
    "home_away": "at ",
    "opp_rank_Neg": 4,
    "team_rank_Neu": 14,
    "avg_fp2": 12.56,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 28.94,
    "fanduelSalary": "$6500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#69BE28",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(105, 190, 40, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#69BE28",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
    "headlineNews": "Tyler Lockett caught 3-of-5 targets for 44 yards in the Seahawks' Week 16 win over the Rams.\n",
    "report": "",
    "analysis": "Lockett has just one touchdown and zero 100-yard games since Week 7. It's been a second half of the season to forget for the Seahawks' slot man in what has been an upsetting offense the last month-plus. Lockett has all the upside in the world and will be a boom-bust WR3 for Week 17 against the 49ers.\n",
    "timestamp": "2020-12-28 12:56 AM",
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [13.2, 16.2, 32.5, 4.9, 6.4, 'BYE', 45.5, 5.3, 6.0, 9.1, 17.2, 3.8, 9.3, 7.7, 5.4, 5.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.6, 7.5, 11.9, 11.0, 13.0, 'BYE', 8.5, 7.5, 9.2, 7.4, 10.6, 11.1, 9.8, 11.4, 7.2, 8.1, 9.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.0, 1.5, 2.0, 4.7, 4.6, 'BYE', 1.2, 3.1, 2.0, 6.4, 6.0, 6.6, 2.7, 2.4, 2.4, 1.3, 1.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.9, 15.7, 14.3, 18.6, 19.7, 'BYE', 14.7, 21.2, 15.1, 23.3, 23.0, 22.9, 16.1, 15.5, 17.6, 17.5, 17.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16804.png",
    "name": "John Brown",
    "depthchart": "Backup: WR-2",
    "team": "Buffalo Bills",
    "projected": 9.4,
    "opponent": "Miami Dolphins",
    "home_away": "",
    "opp_rank_Neu": 19,
    "team_rank_Pos": 2,
    "avg_fp2": 8.14,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 29.89,
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
    "headlineNews": "Bills activated WR\u00a0John Brown from the\u00a0reserve/COVID-19 list.\n",
    "report": "",
    "analysis": "Brown was cleared after being ruled a\u00a0close contact of T.J. Yeldon, who tested positive for COVID-19. Already activated from IR, this puts Brown on track to play in\u00a0Buffalo's Week 17 game against the Dolphins. Brown's return comes at a good time with Cole Beasley (knee) sidelined.\u00a0\n",
    "timestamp": "2021-01-01 03:21 PM",
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [16.0, 16.2, 0.0, 6.2, 'DNP', 0.0, 'DNP', 2.6, 13.9, 10.2, 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.7, 9.7, 7.2, 10.8, 'DNP', 6.1, 'DNP', 6.9, 10.1, 8.6, 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 9.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.0, 3.6, 3.6, 3.6, 'DNP', 3.2, 'DNP', 3.4, 2.7, 1.1, 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 3.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.3, 14.7, 15.2, 17.6, 'DNP', 15.9, 'DNP', 15.5, 14.5, 14.5, 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 14.6]
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
    "opponent": "Arizona Cardinals",
    "home_away": "",
    "opp_rank_Neu": 10,
    "team_rank_Neu": 12,
    "avg_fp2": 12.96,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 29.49,
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
    "headlineNews": "Robert Woods caught 4-of-9 targets for 48 yards in the Rams' Week 16 loss to the Seahawks.\n",
    "report": "",
    "analysis": "Woods has just one 100-yard game since Week 1. The targets have been there all season for Woods, but Jared Goff is playing the worst football of his Sean McVay-coached career, and both Woods and Cooper Kupp are struggling to put up numbers. Woods will be a WR3 with some upside for Week 17 against the Cardinals.\n",
    "timestamp": "2020-12-28 12:59 AM",
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.9, 10.3, 18.9, 6.7, 15.1, 12.0, 4.0, 24.9, 'BYE', 6.1, 24.6, 12.3, 13.5, 5.6, 18.6, 6.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.7, 14.7, 8.8, 11.2, 10.6, 11.7, 10.7, 8.2, 'BYE', 13.3, 9.9, 12.1, 12.5, 7.6, 14.4, 10.9, 9.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.6, 5.8, 2.3, 3.0, 6.4, 3.4, 3.7, 3.5, 'BYE', 5.1, 3.1, 4.2, 3.4, 3.0, 3.6, 3.2, 7.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.4, 15.5, 19.2, 17.5, 18.4, 16.9, 15.6, 15.6, 'BYE', 18.3, 16.4, 16.3, 16.9, 16.4, 17.1, 17.2, 18.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13934.png",
    "name": "Antonio Brown",
    "depthchart": "Backup: WR-2",
    "team": "Tampa Bay Buccaneers",
    "projected": 9.0,
    "opponent": "Atlanta Falcons",
    "home_away": "",
    "opp_rank_Pos": 31,
    "team_rank_Pos": 3,
    "avg_fp2": 9.04,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 35.51,
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
    "headlineNews": "Antonio Brown caught 4-of-6 targets for 35 yards and a touchdown in Week 16 against the Lions.\u00a0\n",
    "report": "",
    "analysis": "Brown finished behind Mike Evans (12) and Chris Godwin (9) in targets\u00a0but found the end-zone for the second straight game. He's turned Scotty Miller into an afterthought\u00a0with at least five targets the last three weeks.\u00a0Brown is a low-floor WR3 for a Week 17 matchup with a Falcons\u00a0secondary that's allowed the league's second most passing yards.\n",
    "timestamp": "2020-12-27 03:22 AM",
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 4.6, 10.1, 9.8, 2.1, 'BYE', 7.4, 17.8, 11.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 16.4, 5.6, 7.1, 10.7, 'BYE', 9.6, 5.5, 7.4, 9.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 4.7, 0.0, 5.2, 3.2, 'BYE', 4.1, 0.0, 0.3, 7.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(213, 10, 10, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 17.9, 13.6, 17.1, 16.7, 'BYE', 20.4, 14.6, 24.6, 18.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2576716.png",
    "name": "Jamison Crowder",
    "depthchart": "Reserve: WR-3",
    "team": "New York Jets",
    "projected": 9.0,
    "opponent": "New England Patriots",
    "home_away": "at ",
    "opp_rank_Neu": 7,
    "team_rank_Neg": 32,
    "avg_fp2": 12.49,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 27.17,
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
    "headlineNews": "Jamison Crowder caught 7-of-9 targets for 92 yards and one touchdown in the Jets' Week 16 win over the Browns.\n",
    "report": "",
    "analysis": "With CB Denzel Ward handling business on the outside, Crowder dominated from the slot with big plays down the field and chain-moving yards underneath. After dealing with soft-tissue injuries, Crowder has shown more of a ceiling over the last month. To round out his box score, Crowder had a 43-yard passing touchdown to Braxton Berrios on a reverse. Hopefully that was the difference in winning a fantasy championship. The Jets will close the season in New England next Sunday.\n",
    "timestamp": "2020-12-27 10:09 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 21.0,
    "week02": "DNP",
    "week03": "DNP",
    "week04": 13.9,
    "week05": 21.6,
    "week06": 8.3,
    "week07": "DNP",
    "week08": "DNP",
    "week09": 9.6,
    "week10": "DNP",
    "week11": 2.1,
    "week12": 4.6,
    "week13": 19.2,
    "week14": 1.7,
    "week15": 9.6,
    "week16": 25.82,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [21.0, 'DNP', 'DNP', 13.9, 21.6, 8.3, 'DNP', 'DNP', 9.6, 'DNP', 2.1, 4.6, 19.2, 1.7, 9.6, 25.82]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.4, 'DNP', 'DNP', 10.0, 6.7, 8.9, 'DNP', 'DNP', 6.0, 'DNP', 6.7, 5.3, 6.6, 1.3, 4.1, 6.4, 9.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.2, 'DNP', 'DNP', 2.4, 2.3, 2.8, 'DNP', 'DNP', 3.6, 'DNP', 3.0, 2.2, 2.9, 2.4, 2.0, 3.5, 2.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  "rgba(18, 87, 64, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.5, 'DNP', 'DNP', 14.9, 14.4, 15.7, 'DNP', 'DNP', 14.8, 'DNP', 15.7, 14.9, 14.2, 14.8, 14.1, 14.7, 15.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3045523.png",
    "name": "Kendrick Bourne",
    "depthchart": "Starter: WR-1",
    "team": "San Francisco 49ers",
    "projected": 8.6,
    "opponent": "Seattle Seahawks",
    "home_away": "",
    "opp_rank_Pos": 32,
    "team_rank_Neu": 12,
    "avg_fp2": 6.79,
    "opp_rank_allowed_fp2_Pos": 30,
    "opp_avg_allowed_fp2": 35.27,
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
    "headlineNews": "Kendrick Bourne caught his lone target for 16 yards in the 49ers' Week 16 win against the Cardinals.\u00a0\n",
    "report": "",
    "analysis": "The Niners only threw 22 passes against Arizona as they dominated on the ground throughout. Bourne's weekly prospects take a major hit with the return of George Kittle, who led the team in targets against the Cardinals. Bourne shouldn't be in fantasy lineups next week against the Seahawks.\u00a0\n",
    "timestamp": "2020-12-27 01:46 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 4.4,
    "week02": 8.7,
    "week03": 8.3,
    "week04": 4.8,
    "week05": 10.0,
    "week06": 5.4,
    "week07": 0.0,
    "week08": 12.1,
    "week09": "DNP",
    "week10": 4.6,
    "week11": "BYE",
    "week12": 4.9,
    "week13": 5.5,
    "week14": 7.7,
    "week15": 16.6,
    "week16": 2.1,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.4, 8.7, 8.3, 4.8, 10.0, 5.4, 0.0, 12.1, 'DNP', 4.6, 'BYE', 4.9, 5.5, 7.7, 16.6, 2.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.7, 14.9, 8.0, 12.3, 7.5, 6.0, 10.0, 8.3, 'DNP', 7.0, 'BYE', 7.4, 8.3, 5.3, 7.6, 7.4, 8.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.4, 1.7, 1.5, 1.0, 0.9, 1.2, 0.0, 1.3, 'DNP', 1.7, 'BYE', 0.1, 1.2, 0.5, 1.5, 1.3, 1.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.3, 8.3, 8.9, 9.5, 8.9, 9.0, 9.7, 9.2, 'DNP', 9.3, 'BYE', 8.9, 9.0, 8.6, 10.6, 9.3, 9.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3120348.png",
    "name": "JuJu Smith-Schuster",
    "depthchart": "Reserve: WR-3",
    "team": "Pittsburgh Steelers",
    "projected": 8.4,
    "opponent": "Cleveland Browns",
    "home_away": "at ",
    "opp_rank_Neu": 21,
    "team_rank_Neu": 16,
    "avg_fp2": 11.34,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 30.66,
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
    "headlineNews": "JuJu Smith-Schuster caught 9-of-13 targets for 96 yards and one score in Pittsburgh's Week 16 win over the Colts.\n",
    "report": "",
    "analysis": "Smith-Schuster's receiving yards were a new season-high mark. His nine catches also tied the\u00a0high number he's already accomplished twice this year. Smith-Schuster wasn't leaned on\u00a0much in the first half as Ben Roethlisberger tossed for 98 yards in that time, but the former's 25-yard touchdown over two defenders resulted in the game-winning score with 7:43 remaining in the final quarter. With the AFC North now clinched, fantasy players should expect Pittsburgh's starters (Smith-Schuster included) to hit the pine in Week 17 against the Browns. Smith-Schuster will return in the Wild Card round as a high-floor DFS option for three-game slates.\n",
    "timestamp": "2020-12-28 12:32 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 21.9,
    "week02": 8.3,
    "week03": 14.3,
    "week04": "DNP",
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [21.9, 8.3, 14.3, 'DNP', 4.8, 1.6, 13.0, 10.2, 18.3, 18.2, 3.9, 13.7, 6.3, 14.5, 1.0, 20.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.2, 17.5, 16.4, 'DNP', 15.1, 7.2, 9.6, 9.0, 10.5, 5.6, 11.5, 7.9, 9.6, 10.0, 6.8, 9.6, 8.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.5, 3.5, 14.0, 'DNP', 4.9, 2.5, 2.1, 5.4, 4.3, 3.6, 5.7, 3.0, 4.6, 4.7, 4.8, 4.7, 4.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.9, 20.7, 25.8, 'DNP', 19.7, 20.3, 19.2, 20.7, 18.8, 20.3, 20.2, 18.5, 19.9, 19.8, 18.7, 19.6, 17.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4241802.png",
    "name": "Jalen Reagor",
    "depthchart": "Starter: WR-1",
    "team": "Philadelphia Eagles",
    "projected": 8.4,
    "opponent": "Washington Football Team",
    "home_away": "",
    "opp_rank_Neg": 3,
    "team_rank_Neg": 27,
    "avg_fp2": 6.97,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 26.87,
    "fanduelSalary": "$5600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#386168",
    "tmColorDark": "#004C54",
    "tmColorLite_rgba": "rgba(56, 97, 104, 0.2)",
    "tmColorDark_rgba": "rgba(0, 76, 84, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    "headlineNews": "Jalen Reagor caught 3-of-6 targets for 30 yards in the Eagles' Week 16 loss to the Cowboys.\u00a0\n",
    "report": "",
    "analysis": "Reagor's most notable moment came on the final play of the first half. Set up with a caravan of blockers, Reagor somehow managed to get tackled for a modest 15-yard gain, drawing the bewilderment\u00a0of Jonathan Vilma in the FOX booth. It has been that kind of rookie year for Reagor, who has not always had the greatest field awareness. He will come with little Week 17 DFS floor against Washington.\u00a0\n",
    "timestamp": "2020-12-28 01:57 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "week01": 6.0,
    "week02": 6.1,
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": "DNP",
    "week08": 11.7,
    "week09": "BYE",
    "week10": 6.7,
    "week11": 7.2,
    "week12": 2.6,
    "week13": 11.0,
    "week14": 7.5,
    "week15": 6.4,
    "week16": 4.5,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.0, 6.1, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 11.7, 'BYE', 6.7, 7.2, 2.6, 11.0, 7.5, 6.4, 4.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.9, 2.0, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 1.5, 'BYE', 5.3, 6.5, 7.7, 6.7, 12.6, 10.1, 12.1, 8.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.3, 1.3, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 0.0, 'BYE', 0.9, 3.8, 7.3, 6.0, 4.5, 5.7, 7.3, 4.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.3, 7.0, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 5.2, 'BYE', 12.8, 11.5, 9.7, 7.0, 9.9, 9.2, 9.8, 9.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3066074.png",
    "name": "Chad Hansen",
    "depthchart": "Reserve: WR-3",
    "team": "Houston Texans",
    "projected": 8.3,
    "opponent": "Tennessee Titans",
    "home_away": "",
    "opp_rank_Pos": 28,
    "team_rank_Pos": 4,
    "avg_fp2": 8.88,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 34.58,
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
    "headlineNews": "Chad Hansen caught 2-of-3 targets for 55 yards and a touchdown in the Texans' Week 15 loss to the Colts.\u00a0\n",
    "report": "",
    "analysis": "Hansen's score was a 38-yarder in the second quarter where he was granted free release on a crossing route. There was almost no one on the left side of the field as Hansen burned his way to the end zone. Hansen is now sitting on 14/212/1 in three games since Will Fuller was lost for the season with his steroid suspension. Although he is just one month shy of his 26th birthday, Hansen is buying himself a legitimate chance at cracking someone's 53-man roster in 2021 after previously not appearing in a game since 2017. He will have some low-end WR4 appeal for Week 16 against the Bengals.\u00a0\n",
    "timestamp": "2020-12-20 11:02 PM",
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
    "week13": 12.6,
    "week14": 9.1,
    "week15": 12.5,
    "week16": 1.3,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 12.6, 9.1, 12.5, 1.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 2.2, 4.1, 6.9, 4.4, 8.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 1.0, 0.5, 9.1, 8.7, 7.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 3.8, 4.7, 12.7, 13.1, 12.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2574808.png",
    "name": "Robby Anderson",
    "depthchart": "Backup: WR-2",
    "team": "Carolina Panthers",
    "projected": 8.1,
    "opponent": "New Orleans Saints",
    "home_away": "",
    "opp_rank_Neg": 5,
    "team_rank_Neu": 17,
    "avg_fp2": 11.41,
    "opp_rank_allowed_fp2_Neu": 15,
    "opp_avg_allowed_fp2": 29.26,
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
    "headlineNews": "Robby Anderson (groin) returned to Panthers practice on Thursday, getting in a \"full\" session.\u00a0\n",
    "report": "",
    "analysis": "It turns out Wednesday was just a maintenance day. With D.J. Moore producing more of late and Curtis Samuel commanding greater workloads, Anderson has devolved into a WR3 option after spending most of the year in the top 20.\u00a0\u00a0\n",
    "timestamp": "2020-12-31 08:23 PM",
    "source": "Alaina Getzenberg on Twitter ",
    "game_day_logo": "",
    "week01": 22.5,
    "week02": 13.4,
    "week03": 8.0,
    "week04": 13.9,
    "week05": 15.5,
    "week06": 9.7,
    "week07": 10.4,
    "week08": 7.3,
    "week09": 10.8,
    "week10": 4.1,
    "week11": 8.1,
    "week12": 17.4,
    "week13": "BYE",
    "week14": 13.7,
    "week15": 3.0,
    "week16": 13.4,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [22.5, 13.4, 8.0, 13.9, 15.5, 9.7, 10.4, 7.3, 10.8, 4.1, 8.1, 17.4, 'BYE', 13.7, 3.0, 13.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.6, 7.9, 8.1, 6.3, 6.3, 12.8, 6.4, 14.0, 8.3, 11.4, 13.2, 6.1, 'BYE', 8.2, 9.1, 11.9, 8.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.3, 2.8, 1.6, 2.6, 2.5, 2.5, 3.7, 3.2, 1.1, 3.2, 2.3, 2.1, 'BYE', 3.5, 1.7, 2.6, 2.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 133, 202, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.6, 16.3, 15.3, 22.2, 17.4, 15.6, 17.1, 15.7, 14.9, 15.5, 15.0, 14.3, 'BYE', 15.9, 13.9, 14.7, 16.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2976592.png",
    "name": "Sterling Shepard",
    "depthchart": "Backup: WR-2",
    "team": "New York Giants",
    "projected": 8.1,
    "opponent": "Dallas Cowboys",
    "home_away": "",
    "opp_rank_Neu": 11,
    "team_rank_Neg": 29,
    "avg_fp2": 9.08,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 34.99,
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
    "headlineNews": "Golden Tate (calf) is out for Week 17 against the Cowboys.\u00a0\n",
    "report": "",
    "analysis": "Tate suffered the injury in practice last week and missed Week 16. Sterling Shepard, who caught 9-of-12 targets for 77 yards and a touchdown last week against Baltimore, should continue benefiting from Tate's absence. Shepard will be a low-end WR2 with some PPR upside against Dallas.\u00a0\n",
    "timestamp": "2021-01-01 08:16 PM",
    "source": "Zack Blatt on Twitter ",
    "game_day_logo": "",
    "week01": 7.7,
    "week02": 4.5,
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": 14.9,
    "week08": 11.4,
    "week09": 8.7,
    "week10": 7.7,
    "week11": "BYE",
    "week12": 10.3,
    "week13": 4.7,
    "week14": 5.0,
    "week15": 6.8,
    "week16": 18.2,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.7, 4.5, 'DNP', 'DNP', 'DNP', 'DNP', 14.9, 11.4, 8.7, 7.7, 'BYE', 10.3, 4.7, 5.0, 6.8, 18.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.8, 12.7, 'DNP', 'DNP', 'DNP', 'DNP', 5.4, 3.8, 6.6, 8.2, 'BYE', 8.3, 7.7, 4.3, 4.6, 5.2, 8.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.9, 4.1, 'DNP', 'DNP', 'DNP', 'DNP', 4.5, 4.4, 2.5, 5.0, 'BYE', 4.1, 5.6, 4.6, 3.9, 5.1, 3.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.3, 15.2, 'DNP', 'DNP', 'DNP', 'DNP', 18.0, 16.1, 16.0, 16.2, 'BYE', 15.4, 16.3, 16.0, 14.7, 15.4, 14.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116165.png",
    "name": "Chris Godwin",
    "depthchart": "Reserve: WR-3",
    "team": "Tampa Bay Buccaneers",
    "projected": 8.0,
    "opponent": "Atlanta Falcons",
    "home_away": "",
    "opp_rank_Pos": 31,
    "team_rank_Pos": 3,
    "avg_fp2": 11.88,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 35.51,
    "fanduelSalary": "$7400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#D50A0A",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(213, 10, 10, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#D50A0A",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Chris Godwin caught 5-of-9 passes for 84 yards and a touchdown in Week 16 against the Lions.\n",
    "report": "",
    "analysis": "Godwin got open against double coverage and made a one-handed catch on his touchdown.\u00a0His nine targets were behind only Mike Evans (12). Godwin has scored in two of the last three weeks and is up to five touchdowns on the season. He's\u00a0a high-upside WR3 with a favorable matchup against the Falcons in Week 17.\n",
    "timestamp": "2020-12-26 09:23 PM",
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.9, 'DNP', 14.9, 'DNP', 'DNP', 7.3, 19.3, 'DNP', 5.6, 12.2, 14.8, 13.7, 'BYE', 3.5, 11.6, 16.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.7, 'DNP', 5.0, 'DNP', 'DNP', 8.9, 8.7, 'DNP', 11.6, 2.8, 5.9, 8.2, 'BYE', 7.0, 4.9, 6.1, 8.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.3, 'DNP', 2.6, 'DNP', 'DNP', 8.3, 1.4, 'DNP', 6.3, 0.5, 2.1, 3.7, 'BYE', 4.6, 2.6, 4.6, 3.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(213, 10, 10, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.6, 'DNP', 20.4, 'DNP', 'DNP', 26.1, 20.3, 'DNP', 22.8, 20.4, 20.1, 18.4, 'BYE', 19.1, 19.9, 17.3, 14.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2576623.png",
    "name": "DeVante Parker",
    "depthchart": "Starter: WR-1",
    "team": "Miami Dolphins",
    "projected": 7.9,
    "opponent": "Buffalo Bills",
    "home_away": "at ",
    "opp_rank_Neu": 8,
    "team_rank_Neg": 25,
    "avg_fp2": 9.21,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 25.91,
    "fanduelSalary": "$6100",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Hamstring",
    "tmColorLite": "#008E97",
    "tmColorDark": "#005778",
    "tmColorLite_rgba": "rgba(0, 142, 151, 0.2)",
    "tmColorDark_rgba": "rgba(0, 87, 120, 0.2)",
    "tmTextLite": "#f5821f",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/mia.png",
    "headlineNews": "DeVante Parker (hamstring) is questionable for Week 17 against the Bills.\n",
    "report": "",
    "analysis": "As is Jakeem Grant. Both were limited on Friday and should play since the Dolphins are still vying for a Wild Card berth, but nothing's guaranteed after Parker failed to turn around for Saturday's win over the Raiders. With Myles Gaskin emerging ahead of Salvon Ahmed, it's possible Miami chooses to lean on the run to beat Buffalo's reserves, anyhow. Parker should only be considered a WR3 for the regular season finale.\n",
    "timestamp": "2021-01-01 06:09 PM",
    "source": "Cameron Wolfe on Twitter",
    "game_day_logo": "",
    "week01": 6.7,
    "week02": 13.8,
    "week03": 9.4,
    "week04": 16.0,
    "week05": 12.0,
    "week06": 5.0,
    "week07": "DNP",
    "week08": 6.8,
    "week09": 9.4,
    "week10": 4.1,
    "week11": 15.1,
    "week12": 15.9,
    "week13": 5.5,
    "week14": 0.0,
    "week15": "DNP",
    "week16": "DNP",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.7, 13.8, 9.4, 16.0, 12.0, 5.0, 'DNP', 6.8, 9.4, 4.1, 15.1, 15.9, 5.5, 0.0, 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.9, 11.6, 11.6, 17.9, 9.6, 10.2, 'DNP', 9.7, 9.9, 8.1, 9.0, 8.6, 12.6, 10.9, 'DNP', 'DNP', 7.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [11.4, 3.6, 3.4, 1.8, 6.6, 4.4, 'DNP', 7.2, 1.2, 3.1, 3.0, 2.9, 2.8, 3.0, 'DNP', 'DNP', 3.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 142, 151, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [20.8, 16.2, 17.0, 14.9, 18.1, 16.1, 'DNP', 17.0, 15.8, 15.3, 14.6, 14.6, 15.1, 15.9, 'DNP', 'DNP', 14.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3121427.png",
    "name": "Curtis Samuel",
    "depthchart": "Reserve: WR-3",
    "team": "Carolina Panthers",
    "projected": 7.9,
    "opponent": "New Orleans Saints",
    "home_away": "",
    "opp_rank_Neg": 5,
    "team_rank_Neu": 17,
    "avg_fp2": 11.29,
    "opp_rank_allowed_fp2_Neu": 15,
    "opp_avg_allowed_fp2": 29.26,
    "fanduelSalary": "$6100",
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
    "week01": 6.8,
    "week02": 4.9,
    "week03": 7.2,
    "week04": 6.3,
    "week05": 8.9,
    "week06": "DNP",
    "week07": 14.3,
    "week08": 19.4,
    "week09": 22.3,
    "week10": 2.7,
    "week11": 17.4,
    "week12": 10.2,
    "week13": "BYE",
    "week14": 12.5,
    "week15": 6.8,
    "week16": 18.3,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.8, 4.9, 7.2, 6.3, 8.9, 'DNP', 14.3, 19.4, 22.3, 2.7, 17.4, 10.2, 'BYE', 12.5, 6.8, 18.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.7, 5.5, 6.7, 5.3, 2.8, 'DNP', 5.1, 10.8, 7.5, 9.9, 8.9, 5.7, 'BYE', 7.2, 7.3, 6.7, 7.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.2, 3.4, 2.9, 1.2, 3.0, 'DNP', 2.8, 3.5, 2.9, 2.2, 3.4, 4.1, 'BYE', 3.2, 2.0, 3.1, 2.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 133, 202, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.1, 13.2, 13.5, 14.6, 12.3, 'DNP', 12.8, 14.5, 14.6, 12.8, 15.6, 13.9, 'BYE', 14.4, 13.6, 13.7, 12.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3115314.png",
    "name": "Cam Sims",
    "depthchart": "Backup: WR-2",
    "team": "Washington Football Team",
    "projected": 7.8,
    "opponent": "Philadelphia Eagles",
    "home_away": "at ",
    "opp_rank_Neu": 20,
    "team_rank_Neg": 26,
    "avg_fp2": 4.23,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 32.66,
    "fanduelSalary": "$4800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#773141",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(119, 49, 65, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png",
    "headlineNews": "Cam Sims caught 5-of-8 targets for 26 yards in Washington's Week 15 loss to the Seahawks.\u00a0\n",
    "report": "",
    "analysis": "Sims played nearly every snap alongside Terry McLaurin as the Football Team's WR2. Steve Sims and Isaiah Wright, meanwhile, were reduced to rotational players against Seattle. Sims could have some fantasy value in deep formats as long as his playing time remains steady.\u00a0\n",
    "timestamp": "2020-12-21 01:31 PM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "week01": "DNP",
    "week02": 0.0,
    "week03": 0.0,
    "week04": "DNP",
    "week05": 0.0,
    "week06": 8.7,
    "week07": 2.7,
    "week08": "BYE",
    "week09": 12.5,
    "week10": 7.4,
    "week11": 3.0,
    "week12": 0.0,
    "week13": 11.7,
    "week14": 1.8,
    "week15": 5.1,
    "week16": 7.8,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 0.0, 0.0, 'DNP', 0.0, 8.7, 2.7, 'BYE', 12.5, 7.4, 3.0, 0.0, 11.7, 1.8, 5.1, 7.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', -4.2, -1.3, 'DNP', -2.9, 0.1, 4.3, 'BYE', 0.2, 2.5, 5.4, 4.4, 2.8, 4.8, 7.4, 7.1, 7.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 0.0, 0.0, 'DNP', 0.0, 0.0, 0.4, 'BYE', 0.1, 0.3, 0.0, 0.0, 0.0, 1.9, 0.0, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 3.2, 7.0, 'DNP', 1.2, 0.0, 6.5, 'BYE', 2.2, 7.9, 4.6, 5.8, 9.0, 10.0, 7.2, 8.0, 8.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4241463.png",
    "name": "Jerry Jeudy",
    "depthchart": "Starter: WR-1",
    "team": "Denver Broncos",
    "projected": 7.8,
    "opponent": "Las Vegas Raiders",
    "home_away": "",
    "opp_rank_Pos": 25,
    "team_rank_Neg": 28,
    "avg_fp2": 7.14,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 31.35,
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
    "headlineNews": "Jerry Jeudy caught 6-of-15 targets for 61 yards in the Broncos' Week 16 loss to the Chargers.\n",
    "report": "",
    "analysis": "Jeudy hasn't had an issue separating at the line of scrimmage or making defenders miss after the catch as a rookie, but he's dropped too many passes while playing through contact at the catch point this season. That was magnified in Week 16. Jeudy dropped at least five passes including a few downfield shots that could've changed the outcome of the game. Drops are typically overanalyzed, but it's something to monitor because they are really stacking up. The Alabama product will close out his rookie season against the Raiders. KJ Hamler (concussion) could miss that one.\n",
    "timestamp": "2020-12-28 01:15 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 7.6,
    "week02": 8.2,
    "week03": 8.0,
    "week04": 13.1,
    "week05": "DNP",
    "week06": 4.2,
    "week07": 3.0,
    "week08": 9.3,
    "week09": 22.0,
    "week10": 8.8,
    "week11": 5.2,
    "week12": 0.0,
    "week13": 1.0,
    "week14": 5.2,
    "week15": 2.4,
    "week16": 9.1,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.6, 8.2, 8.0, 13.1, 'DNP', 4.2, 3.0, 9.3, 22.0, 8.8, 5.2, 0.0, 1.0, 5.2, 2.4, 9.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.6, 7.4, 10.1, 11.4, 'DNP', 6.4, 3.9, 10.1, 14.2, 11.4, 10.2, 11.0, 7.5, 6.6, 2.2, 2.5, 7.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.9, 3.8, 7.3, 5.4, 'DNP', 1.7, 7.0, 5.2, 5.5, 5.5, 4.3, 3.0, 0.7, 2.5, 3.3, 2.1, 0.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(225, 119, 87, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.2, 12.3, 13.2, 16.3, 'DNP', 9.7, 10.2, 11.6, 9.4, 17.3, 16.7, 11.0, 11.1, 14.7, 7.1, 13.5, 12.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2976499.png",
    "name": "Amari Cooper",
    "depthchart": "Starter: WR-1",
    "team": "Dallas Cowboys",
    "projected": 7.3,
    "opponent": "New York Giants",
    "home_away": "at ",
    "opp_rank_Neu": 16,
    "team_rank_Neu": 7,
    "avg_fp2": 12.25,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 28.13,
    "fanduelSalary": "$6700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#7F9695",
    "tmColorDark": "#041E42",
    "tmColorLite_rgba": "rgba(127, 150, 149, 0.2)",
    "tmColorDark_rgba": "rgba(4, 30, 66, 0.2)",
    "tmTextLite": "#7F9695",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "source": "",
    "game_day_logo": "",
    "week01": 13.1,
    "week02": 13.0,
    "week03": 13.1,
    "week04": 27.4,
    "week05": 3.1,
    "week06": 17.4,
    "week07": 12.0,
    "week08": 1.0,
    "week09": 10.0,
    "week10": "BYE",
    "week11": 11.1,
    "week12": 20.2,
    "week13": 13.8,
    "week14": 13.1,
    "week15": 1.3,
    "week16": 14.1,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [13.1, 13.0, 13.1, 27.4, 3.1, 17.4, 12.0, 1.0, 10.0, 'BYE', 11.1, 20.2, 13.8, 13.1, 1.3, 14.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.4, 17.1, 17.0, 12.5, 15.8, 12.5, 9.6, 13.6, 13.6, 'BYE', 15.7, 12.8, 8.8, 11.6, 13.4, 20.4, 7.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.2, 2.3, 2.4, 2.8, 2.5, 4.3, 1.7, 3.2, 2.0, 'BYE', 3.1, 3.4, 2.5, 2.7, 1.9, 2.9, 2.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  "rgba(127, 150, 149, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.4, 19.5, 21.4, 20.9, 21.8, 25.4, 22.4, 22.0, 20.0, 'BYE', 19.0, 21.3, 20.6, 19.8, 20.6, 20.5, 21.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4046692.png",
    "name": "Chase Claypool",
    "depthchart": "Backup: WR-2",
    "team": "Pittsburgh Steelers",
    "projected": 7.2,
    "opponent": "Cleveland Browns",
    "home_away": "at ",
    "opp_rank_Neu": 21,
    "team_rank_Neu": 16,
    "avg_fp2": 11.0,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 30.66,
    "fanduelSalary": "$6000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/pit.png",
    "headlineNews": "Speaking Thursday, Chase Claypool said his snaps had been scaled back in recent weeks in an effort to avoid the \"rookie wall.\"\u00a0\n",
    "report": "",
    "analysis": "\u201cCoach (Mike Tomlin)\u00a0has been in this game for a lot longer time than I have,\u201d Claypool said. \u201cWhether I believe (in the rookie wall)\u00a0or not, I think he knows what he\u2019s doing. I\u2019m feeling good now. What he did, whether it was necessary or not, I feel good heading into the playoffs.\u201d Claypool became the first rookie in NFL history to score 10 touchdowns across his first 10 games but has zero since, playing reduced snaps and posting disappointing target totals. His snaps did spike back to 79 percent in Week 16, suggesting the Steelers will once again unleash their young weapon in the postseason. Despite his slow finish, Claypool is an elite Dynasty hold in an elite rookie receiving class.\u00a0\n",
    "timestamp": "2020-12-31 10:19 PM",
    "source": "Profootballtalk on NBCSports.com",
    "game_day_logo": "",
    "week01": 5.7,
    "week02": 16.3,
    "week03": 2.9,
    "week04": "DNP",
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.7, 16.3, 2.9, 'DNP', 39.1, 16.1, 0.0, 10.7, 11.3, 19.3, 13.9, 8.2, 4.8, 3.0, 6.3, 7.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [0.1, 4.2, 4.9, 'DNP', 4.3, 10.8, 13.0, 10.2, 9.3, 5.6, 15.0, 10.1, 10.2, 13.0, 8.7, 11.3, 7.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.1, 'DNP', 0.8, 3.2, 6.2, 0.0, 2.6, 0.0, 8.9, 2.5, 9.3, 3.1, 1.3, 5.4, 1.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [6.5, 8.3, 7.1, 'DNP', 6.1, 14.1, 16.6, 13.4, 30.9, 27.1, 17.6, 16.6, 19.7, 24.2, 24.3, 18.0, 14.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4241389.png",
    "name": "CeeDee Lamb",
    "depthchart": "Reserve: WR-3",
    "team": "Dallas Cowboys",
    "projected": 7.2,
    "opponent": "New York Giants",
    "home_away": "at ",
    "opp_rank_Neu": 16,
    "team_rank_Neu": 7,
    "avg_fp2": 11.57,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 28.13,
    "fanduelSalary": "$6100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#7F9695",
    "tmColorDark": "#041E42",
    "tmColorLite_rgba": "rgba(127, 150, 149, 0.2)",
    "tmColorDark_rgba": "rgba(4, 30, 66, 0.2)",
    "tmTextLite": "#7F9695",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "source": "",
    "game_day_logo": "",
    "week01": 8.4,
    "week02": 14.5,
    "week03": 9.1,
    "week04": 22.7,
    "week05": 16.4,
    "week06": 9.9,
    "week07": 0.1,
    "week08": 6.6,
    "week09": 13.1,
    "week10": "BYE",
    "week11": 14.6,
    "week12": 4.6,
    "week13": 7.6,
    "week14": 7.1,
    "week15": 17.0,
    "week16": 21.9,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.4, 14.5, 9.1, 22.7, 16.4, 9.9, 0.1, 6.6, 13.1, 'BYE', 14.6, 4.6, 7.6, 7.1, 17.0, 21.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.1, 8.1, 11.1, 8.3, 9.3, 8.2, 5.5, 11.8, 7.0, 'BYE', 11.8, 9.5, 7.0, 7.8, 8.9, 14.9, 7.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 2.0, 0.0, 2.7, 0.0, 3.1, 9.6, 7.9, 3.7, 'BYE', 11.2, 4.3, 8.9, 6.3, 5.7, 5.2, 6.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  "rgba(127, 150, 149, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.4, 9.8, 14.5, 10.5, 15.9, 14.3, 20.2, 18.4, 13.7, 'BYE', 19.8, 17.9, 20.2, 12.0, 13.7, 13.0, 19.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13983.png",
    "name": "A.J. Green",
    "depthchart": "Backup: WR-2",
    "team": "Cincinnati Bengals",
    "projected": 7.1,
    "opponent": "Baltimore Ravens",
    "home_away": "",
    "opp_rank_Neu": 14,
    "team_rank_Neu": 23,
    "avg_fp2": 5.85,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 28.09,
    "fanduelSalary": "$5300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#ea7330",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(234, 115, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#ea7330",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png",
    "headlineNews": "A.J. Green caught 4-of-7 targets for 64 yards in Week 16 against the Texans.\n",
    "report": "",
    "analysis": "Green's seven targets were third on the team behind Tee Higgins (9) and Giovani Bernard (8). This was one of his better games, as Green has went over 60 yards just four times this season. An impending free agent, Green may be playing his last game with the Bengals in Week 17.\n",
    "timestamp": "2020-12-27 09:58 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 7.6,
    "week02": 4.4,
    "week03": 6.1,
    "week04": 0.8,
    "week05": 0.0,
    "week06": 13.6,
    "week07": 11.7,
    "week08": 2.9,
    "week09": "BYE",
    "week10": 0.0,
    "week11": 12.1,
    "week12": 0.0,
    "week13": 0.0,
    "week14": 15.2,
    "week15": 5.0,
    "week16": 8.4,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.6, 4.4, 6.1, 0.8, 0.0, 13.6, 11.7, 2.9, 'BYE', 0.0, 12.1, 0.0, 0.0, 15.2, 5.0, 8.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.5, 13.4, 13.4, 15.2, 11.7, 6.9, 8.3, 15.0, 'BYE', 9.0, 8.3, 7.9, 9.9, 6.7, 10.3, 4.1, 7.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.1, 7.3, 7.3, 6.1, 5.4, 5.6, 8.9, 5.9, 'BYE', 4.7, 4.8, 5.6, 3.4, 5.5, 4.5, 2.8, 6.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.6, 21.4, 22.2, 21.7, 21.1, 21.8, 24.1, 20.7, 'BYE', 20.8, 22.1, 21.6, 19.7, 22.1, 19.6, 17.1, 21.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3071572.png",
    "name": "Keelan Cole",
    "depthchart": "Starter: WR-1",
    "team": "Jacksonville Jaguars",
    "projected": 7.0,
    "opponent": "Indianapolis Colts",
    "home_away": "at ",
    "opp_rank_Neu": 18,
    "team_rank_Neu": 20,
    "avg_fp2": 8.27,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 30.61,
    "fanduelSalary": "$5100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#006778",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 103, 120, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#006778",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/jax.png",
    "headlineNews": "Keelan Cole caught 3-of-4 targets for 26 yards in the Jaguars' Week 16 loss to the Bears.\n",
    "report": "",
    "analysis": "Cole has 47 yards or fewer in all but three games this season. He's way off the fantasy radar when D.J. Chark and Laviska Shenault are healthy as the Nos. 1 and 2 playmaking wideouts.\n",
    "timestamp": "2020-12-27 09:56 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 13.2,
    "week02": 14.8,
    "week03": 6.3,
    "week04": 6.6,
    "week05": 9.7,
    "week06": 17.3,
    "week07": 1.7,
    "week08": "DNP",
    "week09": 1.1,
    "week10": 19.2,
    "week11": 3.6,
    "week12": 5.9,
    "week13": 1.2,
    "week14": 16.2,
    "week15": 3.2,
    "week16": 4.1,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [13.2, 14.8, 6.3, 6.6, 9.7, 17.3, 1.7, 'DNP', 1.1, 19.2, 3.6, 5.9, 1.2, 16.2, 3.2, 4.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [-0.5, 5.9, 8.4, 5.7, 6.3, 7.9, 6.7, 'DNP', 8.7, 6.7, 7.9, 8.4, 8.6, 6.2, 5.6, 5.9, 7.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 1.2, 3.8, 1.2, 1.0, 1.3, 0.0, 'DNP', 2.0, 4.6, 3.6, 0.0, 2.2, 0.2, 2.1, 0.2, 1.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 103, 120, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.2, 11.6, 12.6, 11.2, 10.4, 11.3, 10.9, 'DNP', 14.5, 16.0, 13.0, 13.2, 12.8, 10.6, 13.9, 13.5, 11.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4241475.png",
    "name": "Henry Ruggs",
    "depthchart": "Backup: WR-2",
    "team": "Las Vegas Raiders",
    "projected": 6.9,
    "opponent": "Denver Broncos",
    "home_away": "at ",
    "opp_rank_Neu": 12,
    "team_rank_Neu": 10,
    "avg_fp2": 5.65,
    "opp_rank_allowed_fp2_Neu": 14,
    "opp_avg_allowed_fp2": 29.24,
    "fanduelSalary": "$5000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A5ACAF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lv.png",
    "headlineNews": "Henry Ruggs did not catch either of his targets in the Raiders' Week 16 loss to the Dolphins.\n",
    "report": "",
    "analysis": "Ruggs now has six games under 20 receiving yards and just four above 50 receiving yards. Nelson Agholor filled the role of field-stretcher for the Las Vegas offense this year and as long as he continues producing, there's no reason to expect Ruggs to do much in the Raiders' 2020 closer versus the Broncos next week.\n",
    "timestamp": "2020-12-27 05:42 AM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": 18.8,
    "week06": "BYE",
    "week07": 5.5,
    "week08": 1.9,
    "week09": 1.0,
    "week10": 4.6,
    "week11": 2.2,
    "week12": 6.9,
    "week13": 13.9,
    "week14": 3.3,
    "week15": "DNP",
    "week16": 0.7,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 18.8, 'BYE', 5.5, 1.9, 1.0, 4.6, 2.2, 6.9, 13.9, 3.3, 'DNP', 0.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 12.1, 'BYE', 5.1, 8.5, 10.6, 10.0, 6.9, 8.9, 6.0, 5.1, 'DNP', 5.0, 6.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 1.1, 'BYE', 4.8, 4.1, 4.3, 1.6, 0.0, 0.7, 0.0, 2.2, 'DNP', 1.4, 0.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 16.5, 'BYE', 14.3, 16.7, 13.6, 14.5, 13.7, 4.5, 8.2, 9.7, 'DNP', 13.3, 9.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4243160.png",
    "name": "Laviska Shenault",
    "depthchart": "Backup: WR-2",
    "team": "Jacksonville Jaguars",
    "projected": 6.9,
    "opponent": "Indianapolis Colts",
    "home_away": "at ",
    "opp_rank_Neu": 18,
    "team_rank_Neu": 20,
    "avg_fp2": 8.19,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 30.61,
    "fanduelSalary": "$5500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#006778",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 103, 120, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#006778",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/jax.png",
    "headlineNews": "Laviska Shenault caught 5-of-7 targets for 48 yards and one touchdown in the Jaguars' Week 16 loss to the Bears.\n",
    "report": "",
    "analysis": "The rookie tied D.J. Chark for the team lead in targets but caught one more pass than Chark. Shenault's touchdown was a 34-yarder in straight garbage time with the Jaguars down 41-10 deep in the fourth quarter. It was his third receiving score of the year. He hasn't topped 49 yards in a game since Week 5. Shenault isn't a recommended fantasy play for Week 17 against the Colts.\n",
    "timestamp": "2020-12-27 09:52 PM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": 11.6,
    "week05": 11.4,
    "week06": 2.6,
    "week07": 5.9,
    "week08": "DNP",
    "week09": 0.4,
    "week10": "DNP",
    "week11": "DNP",
    "week12": 5.2,
    "week13": 14.3,
    "week14": 8.1,
    "week15": 6.9,
    "week16": 13.3,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 11.6, 11.4, 2.6, 5.9, 'DNP', 0.4, 'DNP', 'DNP', 5.2, 14.3, 8.1, 6.9, 13.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 5.0, 6.9, 9.3, 6.0, 'DNP', 9.0, 'DNP', 'DNP', 7.9, 8.8, 10.4, 4.5, 5.0, 6.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 1.9, 0.0, 1.1, 5.4, 'DNP', 3.5, 'DNP', 'DNP', 1.4, 1.8, 3.8, 7.5, 8.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 103, 120, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 9.5, 13.3, 12.5, 10.7, 'DNP', 9.6, 'DNP', 'DNP', 8.1, 10.0, 13.1, 15.3, 14.1, 4.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13215.png",
    "name": "Dez Bryant",
    "depthchart": "Reserve: WR-3",
    "team": "Baltimore Ravens",
    "projected": 6.8,
    "opponent": "Cincinnati Bengals",
    "home_away": "at ",
    "opp_rank_Neu": 23,
    "team_rank_Neg": 31,
    "avg_fp2": 4.92,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 29.43,
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
    "week07": "DNP",
    "week08": "DNP",
    "week09": "DNP",
    "week10": "DNP",
    "week11": "DNP",
    "week12": 0.0,
    "week13": "DNP",
    "week14": "DNP",
    "week15": 7.6,
    "week16": 7.3,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 0.0, 'DNP', 'DNP', 7.6, 7.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 6.9, 'DNP', 'DNP', 6.5, 5.1, 6.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 4.6, 'DNP', 'DNP', 5.3, 4.4, 4.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 21.2, 'DNP', 'DNP', 22.1, 20.1, 20.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3045144.png",
    "name": "Tyler Boyd",
    "depthchart": "Reserve: WR-3",
    "team": "Cincinnati Bengals",
    "projected": 6.8,
    "opponent": "Baltimore Ravens",
    "home_away": "",
    "opp_rank_Neu": 14,
    "team_rank_Neu": 23,
    "avg_fp2": 10.82,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 28.09,
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
    "headlineNews": "Tyler Boyd (concussion) will play in Week 17 against the Ravens.\n",
    "report": "",
    "analysis": "Both Tee Higgins and Boyd practiced in full on Friday and were removed from the injury report. Although the Bengals' receivers room is trending towards full health in the season finale, Sunday's matchup against the Ravens is still one that fantasy players should look to avoid. In a vacuum, Higgins ranks higher than Boyd with Brandon Allen back under center.\n",
    "timestamp": "2021-01-01 08:48 PM",
    "source": "Geoff Hobson on Twitter",
    "game_day_logo": "",
    "week01": 5.3,
    "week02": 16.7,
    "week03": 17.5,
    "week04": 12.9,
    "week05": 6.2,
    "week06": 10.4,
    "week07": 22.24,
    "week08": 16.6,
    "week09": "BYE",
    "week10": 7.1,
    "week11": 13.0,
    "week12": 3.0,
    "week13": 13.7,
    "week14": 6.8,
    "week15": 0.0,
    "week16": "DNP",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.3, 16.7, 17.5, 12.9, 6.2, 10.4, 22.24, 16.6, 'BYE', 7.1, 13.0, 3.0, 13.7, 6.8, 0.0, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.9, 5.1, 9.2, 7.3, 6.4, 5.7, 8.5, 9.9, 'BYE', 4.8, 6.2, 5.8, 7.1, 7.7, 8.8, 'DNP', 6.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.5, 2.6, 4.4, 3.9, 1.7, 2.9, 4.7, 3.2, 'BYE', 4.6, 2.7, 4.0, 2.9, 10.7, 2.7, 'DNP', 2.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.3, 16.9, 17.6, 19.1, 15.6, 15.0, 16.8, 16.0, 'BYE', 15.3, 17.3, 14.3, 17.0, 24.4, 15.2, 'DNP', 13.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3139456.png",
    "name": "Cameron Batson",
    "depthchart": "Reserve: WR-3",
    "team": "Tennessee Titans",
    "projected": 6.7,
    "opponent": "Houston Texans",
    "home_away": "at ",
    "opp_rank_Pos": 26,
    "team_rank_Neu": 21,
    "avg_fp2": 2.18,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 33.24,
    "fanduelSalary": "$4500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#4495D1",
    "tmColorDark": "#002A5C",
    "tmColorLite_rgba": "rgba(68, 149, 209, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 92, 0.2)",
    "tmTextLite": "#4495D1",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png",
    "headlineNews": "Cameron Batson caught 3-of-3 targets for 14 yards and a touchdown in the Titans' Week 13 loss to the Browns.\u00a0\n",
    "report": "",
    "analysis": "Batson caught a late, meaningless touchdown from Ryan Tannehill on a day that saw Tannehill throw 45 passes. Batson likely won't be reliable part of the Titans' receiver rotation going forward.\u00a0\n",
    "timestamp": "2020-12-06 11:26 PM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": 0.0,
    "week04": "DNP",
    "week05": "DNP",
    "week06": 1.8,
    "week07": "DNP",
    "week08": "DNP",
    "week09": 1.1,
    "week10": 1.8,
    "week11": 3.5,
    "week12": 0.5,
    "week13": 8.9,
    "week14": 0.0,
    "week15": 0.0,
    "week16": 1.7,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 0.0, 'DNP', 'DNP', 1.8, 'DNP', 'DNP', 1.1, 1.8, 3.5, 0.5, 8.9, 0.0, 0.0, 1.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 2.8, 'DNP', 'DNP', 2.0, 'DNP', 'DNP', 0.0, -1.4, 3.0, 0.8, 1.6, 6.1, 3.8, 3.0, 6.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 0.9, 'DNP', 'DNP', 0.0, 'DNP', 'DNP', 0.0, 0.5, 0.6, 0.2, 0.5, 0.0, 0.1, 0.6, 0.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 4.3, 'DNP', 'DNP', 1.8, 'DNP', 'DNP', 2.7, 2.4, 3.0, 3.3, 3.3, 2.5, 3.5, 3.3, 3.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3045138.png",
    "name": "Mike Williams",
    "depthchart": "Starter: WR-1",
    "team": "Los Angeles Chargers",
    "projected": 6.6,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Neu": 15,
    "team_rank_Pos": 6,
    "avg_fp2": 7.85,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 25.21,
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
    "headlineNews": "Keenan Allen (hamstring) did not practice Thursday.\u00a0\n",
    "report": "",
    "analysis": "It's no surprise, as Allen is not expected to suit up in Week 17 against KC. The veteran missed Week 16 after hobbling through some of the team's Week 15 game.\u00a0Mike Williams, Jalen Guyton, and Tyron Johnson are all very much in play this week against the Chiefs, who are expected to rest many of their\u00a0starters.\u00a0\n",
    "timestamp": "2020-12-31 08:26 PM",
    "source": "Daniel Popper on Twitter",
    "game_day_logo": "",
    "week01": 8.9,
    "week02": 2.4,
    "week03": 2.2,
    "week04": "DNP",
    "week05": 25.4,
    "week06": "DNP",
    "week07": 0.9,
    "week08": 18.5,
    "week09": 10.6,
    "week10": 4.8,
    "week11": 15.2,
    "week12": 4.1,
    "week13": 6.3,
    "week14": 0.0,
    "week15": 3.2,
    "week16": 7.4,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.9, 2.4, 2.2, 'DNP', 25.4, 'DNP', 0.9, 18.5, 10.6, 4.8, 15.2, 4.1, 6.3, 0.0, 3.2, 7.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.3, 6.9, 5.6, 'DNP', 6.3, 'DNP', 9.8, 6.7, 7.2, 12.4, 11.9, 12.6, 10.5, 13.3, 9.2, 12.9, 6.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.0, 1.7, 0.6, 'DNP', 0.0, 'DNP', 3.7, 2.0, 1.9, 4.1, 1.5, 4.3, 4.7, 4.6, 5.0, 2.8, 2.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 128, 198, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.7, 12.7, 11.1, 'DNP', 10.5, 'DNP', 13.8, 14.8, 15.3, 15.0, 12.4, 13.1, 14.2, 13.8, 15.5, 13.1, 13.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3134353.png",
    "name": "Tim Patrick",
    "depthchart": "Backup: WR-2",
    "team": "Denver Broncos",
    "projected": 6.4,
    "opponent": "Las Vegas Raiders",
    "home_away": "",
    "opp_rank_Pos": 25,
    "team_rank_Neg": 28,
    "avg_fp2": 8.57,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 31.35,
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
    "headlineNews": "Tim Patrick caught 3-of-4 targets for 39 yards in the Broncos' Week 16 loss to the Chargers.\n",
    "report": "",
    "analysis": "It's been a total rollercoaster of a season for Patrick. He's been on the good side of touchdown and downfield target variance but has lived and died by Drew Lock's inconsistent quarterback play. Patrick doesn't see enough volume to be a must-start in the Week 17 regular season finale even if KJ Hamler (concussion) doesn't suit up. Jerry Jeudy led the Broncos with 15 targets in Week 16.\n",
    "timestamp": "2020-12-28 01:25 AM",
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
    "week09": 10.9,
    "week10": 8.1,
    "week11": 14.4,
    "week12": 0.0,
    "week13": 18.4,
    "week14": 11.1,
    "week15": 2.9,
    "week16": 5.4,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 10.9, 8.1, 14.4, 0.0, 18.4, 11.1, 2.9, 5.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 8.1, 5.7, 5.4, 6.9, 6.0, 10.4, 5.7, 6.1, 6.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 1.5, 0.9, 5.6, 1.2, 0.1, 1.7, 5.5, 1.2, 0.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(225, 119, 87, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 8.8, 8.0, 10.4, 7.4, 8.8, 12.3, 13.5, 10.8, 10.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3895856.png",
    "name": "Christian Kirk",
    "depthchart": "Backup: WR-2",
    "team": "Arizona Cardinals",
    "projected": 6.2,
    "opponent": "Los Angeles Rams",
    "home_away": "at ",
    "opp_rank_Neg": 1,
    "team_rank_Neu": 15,
    "avg_fp2": 8.74,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 22.67,
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
    "headlineNews": "Christian Kirk caught 7-of-10 targets for 76 yards in the Cardinals' Week 16 loss to the 49ers.\u00a0\n",
    "report": "",
    "analysis": "Kirk reeled in a 38-yarder in the Cardinals' first possession of the game. It was one of two big plays for an otherwise stagnant Cardinals offense. Kirk's 10 targets were second among Arizona pass catchers, trailing only DeAndre Hopkins. Kirk remains well behind Hopkins in the Cards' pass catching pecking order, and should only be rostered in deeper leagues. He'll be a WR4/5 in Week 17 against the Rams.\u00a0\n",
    "timestamp": "2020-12-27 02:18 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 0.5,
    "week02": 7.0,
    "week03": "DNP",
    "week04": 9.4,
    "week05": 10.3,
    "week06": 21.6,
    "week07": 18.2,
    "week08": "BYE",
    "week09": 20.8,
    "week10": 4.7,
    "week11": 7.0,
    "week12": 3.4,
    "week13": 0.7,
    "week14": 2.9,
    "week15": 4.8,
    "week16": 11.1,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.5, 7.0, 'DNP', 9.4, 10.3, 21.6, 18.2, 'BYE', 20.8, 4.7, 7.0, 3.4, 0.7, 2.9, 4.8, 11.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.7, 5.3, 'DNP', 8.9, 8.6, 7.5, 10.1, 'BYE', 9.1, 6.9, 6.9, 9.7, 8.4, 6.6, 10.9, 7.6, 6.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.5, 3.1, 'DNP', 0.0, 11.6, 4.5, 16.0, 'BYE', 1.7, 5.6, 9.0, 0.0, 4.7, 0.0, 2.3, 3.3, 2.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.1, 11.1, 'DNP', 18.9, 23.0, 13.1, 37.7, 'BYE', 16.6, 19.1, 19.1, 17.1, 13.9, 12.7, 11.4, 14.7, 13.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4036348.png",
    "name": "Michael Gallup",
    "depthchart": "Backup: WR-2",
    "team": "Dallas Cowboys",
    "projected": 6.2,
    "opponent": "New York Giants",
    "home_away": "at ",
    "opp_rank_Neu": 16,
    "team_rank_Neu": 7,
    "avg_fp2": 9.13,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 28.13,
    "fanduelSalary": "$6200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#7F9695",
    "tmColorDark": "#041E42",
    "tmColorLite_rgba": "rgba(127, 150, 149, 0.2)",
    "tmColorDark_rgba": "rgba(4, 30, 66, 0.2)",
    "tmTextLite": "#7F9695",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "source": "",
    "game_day_logo": "",
    "week01": 6.5,
    "week02": 6.8,
    "week03": 22.8,
    "week04": 3.9,
    "week05": 9.3,
    "week06": 3.3,
    "week07": 0.0,
    "week08": 9.6,
    "week09": 5.1,
    "week10": "BYE",
    "week11": 3.9,
    "week12": 7.1,
    "week13": 18.1,
    "week14": 3.3,
    "week15": 10.1,
    "week16": 27.1,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.5, 6.8, 22.8, 3.9, 9.3, 3.3, 0.0, 9.6, 5.1, 'BYE', 3.9, 7.1, 18.1, 3.3, 10.1, 27.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.6, 8.7, 10.1, 6.3, 6.6, 6.1, 3.5, 6.5, 6.4, 'BYE', 7.7, 6.4, 4.9, 7.9, 5.5, 12.3, 6.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.5, 4.5, 1.6, 2.6, 5.6, 3.4, 5.4, 0.8, 2.3, 'BYE', 2.3, 1.3, 3.3, 1.3, 2.0, 1.9, 2.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  "rgba(127, 150, 149, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.8, 12.9, 15.9, 11.8, 19.1, 16.5, 16.5, 15.1, 12.5, 'BYE', 16.5, 15.1, 12.8, 14.6, 16.2, 15.9, 16.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4035004.png",
    "name": "Mecole Hardman",
    "depthchart": "Backup: WR-2",
    "team": "Kansas City Chiefs",
    "projected": 6.1,
    "opponent": "Los Angeles Chargers",
    "home_away": "",
    "opp_rank_Neu": 9,
    "team_rank_Pos": 1,
    "avg_fp2": 7.07,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 27.28,
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
    "headlineNews": "Sammy Watkins (calf) is out for Week 17 against the Chargers.\u00a0\n",
    "report": "",
    "analysis": "The Chiefs are resting most of their key players in the\u00a0final regular season game. Watkins was never likely to be a go against the Bolts. Watkins and Tyreek Hill being sidelined for KC could open up snaps for Demarcus Robinson and Mecole Hardman.\u00a0\n",
    "timestamp": "2021-01-01 08:08 PM",
    "source": "Adam Teicher on Twitter ",
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.1, 6.3, 16.1, 10.7, 6.0, 0.0, 8.0, 19.1, 6.3, 'BYE', 2.1, 3.8, 2.0, 9.5, 9.2, 5.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.7, -2.5, 3.6, 4.6, 5.5, 6.4, 2.9, 8.6, 7.7, 'BYE', 5.6, 5.7, 4.1, 3.3, 2.7, 1.8, 6.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 6.2, 0.0, 0.0, 1.6, 2.4, 1.7, 0.0, 1.7, 'BYE', 0.9, 0.0, 1.9, 0.0, 0.7, 1.1, 1.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.5, 14.9, 11.4, 8.9, 12.8, 10.4, 12.6, 9.7, 12.3, 'BYE', 10.7, 10.1, 9.9, 12.6, 11.6, 11.5, 11.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14912.png",
    "name": "Alshon Jeffery",
    "depthchart": "Backup: WR-2",
    "team": "Philadelphia Eagles",
    "projected": 6.1,
    "opponent": "Washington Football Team",
    "home_away": "",
    "opp_rank_Neg": 3,
    "team_rank_Neg": 27,
    "avg_fp2": 2.93,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 26.87,
    "fanduelSalary": "$4900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#386168",
    "tmColorDark": "#004C54",
    "tmColorLite_rgba": "rgba(56, 97, 104, 0.2)",
    "tmColorDark_rgba": "rgba(0, 76, 84, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    "headlineNews": "Alshon Jeffery caught 2-of-3 targets for 63 yards in Philadelphia's Week 15 loss to Arizona.\n",
    "report": "",
    "analysis": "He was actually targeted far more than the box score shows but ended up drawing around 50-yards worth of penalties downfield. Even in finishing with season-highs in catches and receiving yards, Jeffery isn't on the radar for re-draft leagues in 2020. He's a better one/two-game DFS option until he inevitably lands elsewhere next year.\n",
    "timestamp": "2020-12-21 03:08 AM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": "DNP",
    "week08": "DNP",
    "week09": "BYE",
    "week10": 0.0,
    "week11": 0.0,
    "week12": 2.5,
    "week13": 0.0,
    "week14": 8.0,
    "week15": 7.3,
    "week16": 2.7,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 0.0, 0.0, 2.5, 0.0, 8.0, 7.3, 2.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 4.6, 1.7, 2.7, 2.5, 2.8, 6.9, 9.4, 6.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 5.4, 5.0, 5.2, 1.8, 3.2, 2.8, 4.3, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 17.9, 20.1, 20.0, 12.5, 15.7, 17.5, 18.1, 16.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3043116.png",
    "name": "Demarcus Robinson",
    "depthchart": "Starter: WR-1",
    "team": "Kansas City Chiefs",
    "projected": 6.0,
    "opponent": "Los Angeles Chargers",
    "home_away": "",
    "opp_rank_Neu": 9,
    "team_rank_Pos": 1,
    "avg_fp2": 5.09,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 27.28,
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
    "headlineNews": "Sammy Watkins (calf) is out for Week 17 against the Chargers.\u00a0\n",
    "report": "",
    "analysis": "The Chiefs are resting most of their key players in the\u00a0final regular season game. Watkins was never likely to be a go against the Bolts. Watkins and Tyreek Hill being sidelined for KC could open up snaps for Demarcus Robinson and Mecole Hardman.\u00a0\n",
    "timestamp": "2021-01-01 08:08 PM",
    "source": "Adam Teicher on Twitter ",
    "game_day_logo": "",
    "week01": 3.5,
    "week02": 4.3,
    "week03": 0.0,
    "week04": 0.0,
    "week05": 1.2,
    "week06": 9.4,
    "week07": 0.9,
    "week08": 14.3,
    "week09": 8.9,
    "week10": "BYE",
    "week11": 7.4,
    "week12": 6.1,
    "week13": 4.9,
    "week14": 1.8,
    "week15": 3.7,
    "week16": 9.9,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.5, 4.3, 0.0, 0.0, 1.2, 9.4, 0.9, 14.3, 8.9, 'BYE', 7.4, 6.1, 4.9, 1.8, 3.7, 9.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.6, 0.2, 1.5, 1.8, 1.3, 2.9, 0.2, 3.5, 3.9, 'BYE', 1.6, 7.4, 4.2, 5.2, 2.8, 2.6, 6.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.5, 0.2, 0.0, 0.0, 0.0, 0.0, 1.4, 0.4, 0.0, 'BYE', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [7.1, 6.9, 11.7, 9.7, 6.9, 7.0, 9.2, 7.1, 6.7, 'BYE', 11.2, 10.8, 10.6, 9.6, 7.5, 7.2, 8.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4212909.png",
    "name": "David Moore",
    "depthchart": "Reserve: WR-3",
    "team": "Seattle Seahawks",
    "projected": 5.8,
    "opponent": "San Francisco 49ers",
    "home_away": "at ",
    "opp_rank_Neg": 4,
    "team_rank_Neu": 14,
    "avg_fp2": 6.69,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 28.94,
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
    "headlineNews": "David Moore caught 2-of-4 targets for 10 yards in Seattle's Week 15\u00a0win over Washington.\n",
    "report": "",
    "analysis": "Moore again out-targeted Freddie Swain 4-1 for Seattle's No. 3 receiving role but it only amounted to 10 yards since Russell Wilson was\u00a0asked to attempt 27 passes to the team's 26 carries\u00a0on the afternoon. With competition for his role and numerous mouths to feed around him, Moore continues to stand out as more of a thin one-game DFS play\u00a0than deep league re-draft option for the stretch run.\n",
    "timestamp": "2020-12-20 11:26 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 5.5,
    "week02": 12.3,
    "week03": 0.7,
    "week04": 17.0,
    "week05": 0.0,
    "week06": "BYE",
    "week07": 7.3,
    "week08": 12.1,
    "week09": 15.1,
    "week10": 2.8,
    "week11": 1.5,
    "week12": 7.0,
    "week13": 1.1,
    "week14": 10.4,
    "week15": 2.5,
    "week16": 5.0,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.5, 12.3, 0.7, 17.0, 0.0, 'BYE', 7.3, 12.1, 15.1, 2.8, 1.5, 7.0, 1.1, 10.4, 2.5, 5.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [0.6, 5.0, 7.1, 2.1, 4.8, 'BYE', 5.8, 3.9, 5.6, 3.4, 6.7, 6.9, 5.3, 5.8, 3.2, 4.6, 5.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.1, 0.1, 0.0, 'BYE', 0.0, 0.0, 1.8, 1.2, 0.8, 0.0, 0.0, 0.0, 0.2, 0.0, 0.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.7, 9.5, 9.8, 6.6, 9.3, 'BYE', 10.6, 11.6, 8.9, 14.0, 11.6, 11.6, 11.9, 8.8, 11.7, 11.2, 10.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3115378.png",
    "name": "Russell Gage",
    "depthchart": "Backup: WR-2",
    "team": "Atlanta Falcons",
    "projected": 5.7,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "at ",
    "opp_rank_Neu": 22,
    "team_rank_Pos": 5,
    "avg_fp2": 8.29,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 31.19,
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
    "headlineNews": "Russell Gage caught 4-of-5 targets for 23 yards in the Falcons' Week 16 loss to the Chiefs.\n",
    "report": "",
    "analysis": "Even with Julio Jones (hamstring) still on the shelf, Gage couldn't muster more than 6.3 points in PPR leagues. The yardage output was his lowest in six weeks. Gage will be rematching with the Bucs' in the Falcons' meaningless Week 17 finale. Gage caught 5-of-10 targets for 68 yards and a score against Tampa in Week 15.\u00a0\n",
    "timestamp": "2020-12-27 11:23 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 15.9,
    "week02": 13.6,
    "week03": 3.6,
    "week04": 3.0,
    "week05": 2.6,
    "week06": 8.5,
    "week07": 8.4,
    "week08": 3.5,
    "week09": 2.1,
    "week10": "BYE",
    "week11": 9.3,
    "week12": 4.9,
    "week13": 13.1,
    "week14": 16.26,
    "week15": 15.3,
    "week16": 4.3,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [15.9, 13.6, 3.6, 3.0, 2.6, 8.5, 8.4, 3.5, 2.1, 'BYE', 9.3, 4.9, 13.1, 16.26, 15.3, 4.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.9, 4.1, 3.3, 3.5, 4.8, 1.8, 7.0, 8.4, 4.2, 'BYE', 2.9, 8.3, 4.9, 8.6, 8.6, 6.2, 5.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 2.8, 0.6, 1.2, 0.0, 0.0, 0.0, 2.3, 0.2, 'BYE', 0.7, 0.5, 0.9, 0.0, 4.7, 0.5, 2.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [5.7, 12.1, 10.2, 9.2, 8.1, 10.9, 7.6, 10.8, 10.4, 'BYE', 6.2, 9.9, 9.9, 8.8, 12.9, 12.4, 10.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3042910.png",
    "name": "Rashard Higgins",
    "depthchart": "Starter: WR-1",
    "team": "Cleveland Browns",
    "projected": 5.6,
    "opponent": "Pittsburgh Steelers",
    "home_away": "",
    "opp_rank_Neg": 2,
    "team_rank_Neg": 24,
    "avg_fp2": 7.99,
    "opp_rank_allowed_fp2_Neu": 9,
    "opp_avg_allowed_fp2": 27.88,
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
    "headlineNews": "Browns activated WR\u00a0Rashard Higgins from the reserve/COVID-19 list.\u00a0\n",
    "report": "",
    "analysis": "Donovan Peoples-Jones and KhaDarel Hodge have also been activated. None of the three were\u00a0COVID positive, so they were\u00a0able to return after five days of negative tests. Higgins will immediately slide back in as the Browns' No. 2 receiver and a top-36 fantasy option for Sunday's must-win game against the Steelers' B-team defense.\u00a0\n",
    "timestamp": "2020-12-31 09:40 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 1.4,
    "week02": 0.0,
    "week03": "DNP",
    "week04": "DNP",
    "week05": 10.6,
    "week06": 7.8,
    "week07": 14.0,
    "week08": 1.9,
    "week09": "BYE",
    "week10": 6.3,
    "week11": 8.0,
    "week12": 2.0,
    "week13": 18.5,
    "week14": 15.8,
    "week15": 9.6,
    "week16": "DNP",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.4, 0.0, 'DNP', 'DNP', 10.6, 7.8, 14.0, 1.9, 'BYE', 6.3, 8.0, 2.0, 18.5, 15.8, 9.6, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.1, -0.4, 'DNP', 'DNP', 1.7, 4.0, 4.6, 6.4, 'BYE', 4.4, 6.8, 5.4, 7.9, 6.9, 8.6, 'DNP', 5.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 'DNP', 'DNP', 0.0, 0.0, 0.1, 3.4, 'BYE', 0.5, 4.3, 0.0, 0.0, 0.0, 3.5, 'DNP', 0.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.0, 8.3, 'DNP', 'DNP', 9.5, 9.0, 9.0, 11.5, 'BYE', 9.7, 10.8, 8.5, 9.1, 9.1, 12.8, 'DNP', 8.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3047968.png",
    "name": "Chad Beebe",
    "depthchart": "Reserve: WR-3",
    "team": "Minnesota Vikings",
    "projected": 5.6,
    "opponent": "Detroit Lions",
    "home_away": "at ",
    "opp_rank_Pos": 29,
    "team_rank_Neu": 18,
    "avg_fp2": 2.21,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 36.65,
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
    "headlineNews": "Chad Beebe caught 7-of-7 targets for 63 yards and one touchdown in the Vikings' Week 12 win over the Panthers.\n",
    "report": "",
    "analysis": "Beebe popped with Adam Thielen sidelined and Kirk Cousins attempting a season-high 45 passes. It was a fluky game that shouldn't be chased ahead of Week 13, even against the lowly Jaguars. Beebe and Bisi Johnson would split targets way behind Justin Jefferson is Thielen is out next week.\n",
    "timestamp": "2020-11-29 09:50 PM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": 0.0,
    "week05": 1.6,
    "week06": 2.3,
    "week07": "BYE",
    "week08": 2.1,
    "week09": 0.0,
    "week10": 2.6,
    "week11": 0.0,
    "week12": 13.8,
    "week13": 2.0,
    "week14": 0.0,
    "week15": 3.1,
    "week16": 0.0,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 0.0, 1.6, 2.3, 'BYE', 2.1, 0.0, 2.6, 0.0, 13.8, 2.0, 0.0, 3.1, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 1.1, 1.3, 2.0, 'BYE', 1.5, 4.5, -1.6, 1.6, 1.3, 1.7, 2.9, 3.1, 1.9, 5.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 0.2, 0.0, 0.2, 'BYE', 1.1, 0.7, 0.7, 0.4, 0.5, 0.0, 0.2, 0.0, 0.3, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  "rgba(224, 170, 25, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 4.8, 4.7, 2.5, 'BYE', 4.5, 2.9, 2.9, 3.3, 3.7, 3.9, 7.8, 7.3, 2.5, 2.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3057987.png",
    "name": "DaeSean Hamilton",
    "depthchart": "Reserve: WR-3",
    "team": "Denver Broncos",
    "projected": 5.5,
    "opponent": "Las Vegas Raiders",
    "home_away": "",
    "opp_rank_Pos": 25,
    "team_rank_Neg": 28,
    "avg_fp2": 3.33,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 31.35,
    "fanduelSalary": "$4500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e17757",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(225, 119, 87, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#e17757",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/den.png",
    "headlineNews": "DaeSean Hamilton caught 5-of-9 targets for 77 yards in the Broncos' Week 16 loss to the Chargers.\n",
    "report": "",
    "analysis": "Typically a backup, Hamilton got more run with the first-team offense after KJ Hamler left early with a concussion. He filled in as the slot receiver and ultimately led the position in receiving yards. With one meaningless game remaining, it's possible Hamler misses and Hamilton starts in Week 17.\n",
    "timestamp": "2020-12-28 01:30 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 2.3,
    "week02": 1.0,
    "week03": 0.0,
    "week04": 1.4,
    "week05": "DNP",
    "week06": 0.0,
    "week07": 3.6,
    "week08": 16.2,
    "week09": 2.2,
    "week10": 11.3,
    "week11": 0.0,
    "week12": 0.0,
    "week13": 0.0,
    "week14": 1.8,
    "week15": 0.0,
    "week16": 10.2,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.3, 1.0, 0.0, 1.4, 'DNP', 0.0, 3.6, 16.2, 2.2, 11.3, 0.0, 0.0, 0.0, 1.8, 0.0, 10.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.9, -1.2, 0.4, 0.4, 'DNP', 6.6, 0.6, 1.6, 2.6, 0.2, -0.1, 1.5, 1.9, 1.3, 0.3, -0.7, 5.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.1, 1.2, 0.0, 0.0, 'DNP', 0.2, 0.0, 2.3, 4.2, 1.7, 0.0, 0.0, 0.0, 3.4, 0.0, 3.2, 4.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(225, 119, 87, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.4, 10.3, 5.7, 6.5, 'DNP', 6.5, 8.5, 10.5, 11.3, 11.2, 9.9, 8.9, 8.2, 11.2, 6.9, 11.3, 12.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3894912.png",
    "name": "Tyron Johnson",
    "depthchart": "Reserve: WR-3",
    "team": "Los Angeles Chargers",
    "projected": 5.4,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Neu": 15,
    "team_rank_Pos": 6,
    "avg_fp2": 6.5,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 25.21,
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
    "headlineNews": "Keenan Allen (hamstring) did not practice Thursday.\u00a0\n",
    "report": "",
    "analysis": "It's no surprise, as Allen is not expected to suit up in Week 17 against KC. The veteran missed Week 16 after hobbling through some of the team's Week 15 game.\u00a0Mike Williams, Jalen Guyton, and Tyron Johnson are all very much in play this week against the Chiefs, who are expected to rest many of their\u00a0starters.\u00a0\n",
    "timestamp": "2020-12-31 08:26 PM",
    "source": "Daniel Popper on Twitter",
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": 0.7,
    "week06": "DNP",
    "week07": 1.0,
    "week08": "DNP",
    "week09": "DNP",
    "week10": "DNP",
    "week11": 5.9,
    "week12": 7.3,
    "week13": 0.6,
    "week14": 14.5,
    "week15": 13.6,
    "week16": 4.1,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 0.7, 'DNP', 1.0, 'DNP', 'DNP', 'DNP', 5.9, 7.3, 0.6, 14.5, 13.6, 4.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 0.5, 'DNP', 2.5, 'DNP', 'DNP', 'DNP', 2.3, 2.9, 4.2, 3.5, 3.8, 8.0, 5.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 0.9, 'DNP', 0.0, 'DNP', 'DNP', 'DNP', 0.0, 0.0, 2.4, 0.7, 0.8, 1.2, 3.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 128, 198, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 6.1, 'DNP', 5.8, 'DNP', 'DNP', 'DNP', 5.3, 9.8, 7.5, 4.8, 10.7, 9.5, 13.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16790.png",
    "name": "Jarvis Landry",
    "depthchart": "Reserve: WR-3",
    "team": "Cleveland Browns",
    "projected": 5.4,
    "opponent": "Pittsburgh Steelers",
    "home_away": "",
    "opp_rank_Neg": 2,
    "team_rank_Neg": 24,
    "avg_fp2": 9.86,
    "opp_rank_allowed_fp2_Neu": 9,
    "opp_avg_allowed_fp2": 27.88,
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
    "headlineNews": "Jarvis Landry was activated from the reserve/COVID list.\n",
    "report": "",
    "analysis": "Rashard Higgins, KhaDarel Hodge, and Donovan Peoples-Jones were removed as well, ensuring Cleveland enters its must-win game against the Steelers at full strength on offense. Baker Mayfield was stubbornly asked to throw 53 times with practically no one available in Week 16, but that won\u2019t be the case on Sunday. Nick Chubb and Kareem Hunt should find wide holes against a Steelers front-seven that\u2019s already punched its ticket into the Wild Card round.\n",
    "timestamp": "2020-12-31 04:36 PM",
    "source": "Tony Grossi on Twitter",
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.6, 6.1, 5.6, 12.78, 10.8, 5.5, 8.46, 7.2, 'BYE', 4.4, 3.6, 24.3, 16.44, 8.68, 15.6, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.8, 6.2, 8.8, 11.6, 12.2, 8.1, 9.7, 10.7, 'BYE', 2.8, 5.9, 3.7, 10.1, 5.2, 5.6, 'DNP', 5.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.6, 6.6, 5.5, 6.2, 4.9, 6.4, 4.9, 5.3, 'BYE', 5.9, 2.7, 4.7, 7.2, 5.6, 5.0, 'DNP', 5.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.1, 19.1, 17.7, 18.2, 17.7, 18.1, 16.9, 16.5, 'BYE', 16.2, 18.5, 16.1, 18.1, 17.1, 16.4, 'DNP', 17.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4040655.png",
    "name": "Darnell Mooney",
    "depthchart": "Backup: WR-2",
    "team": "Chicago Bears",
    "projected": 5.4,
    "opponent": "Green Bay Packers",
    "home_away": "",
    "opp_rank_Neg": 6,
    "team_rank_Neu": 22,
    "avg_fp2": 7.12,
    "opp_rank_allowed_fp2_Neu": 7,
    "opp_avg_allowed_fp2": 27.26,
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
    "headlineNews": "Darnell Mooney caught 4-of-7 targets for 39 yards in the Bears' Week 16 win over the Jaguars.\n",
    "report": "",
    "analysis": "After scoring in consecutive games Weeks 14-15, Mooney was back to his regular stat line. He's failed to top 69 yards all season and hasn't surpassed 49 yards in a game since Week 8. Mooney is a very weak WR5/6 ahead of a Week 17 date with the Packers. He went 3-34-0 on nine targets in Green Bay back in Week 12.\n",
    "timestamp": "2020-12-27 09:33 PM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": 11.1,
    "week03": 2.9,
    "week04": 7.4,
    "week05": 2.5,
    "week06": 5.1,
    "week07": 5.5,
    "week08": 15.4,
    "week09": 6.8,
    "week10": 1.3,
    "week11": "BYE",
    "week12": 6.9,
    "week13": 6.3,
    "week14": 9.7,
    "week15": 14.5,
    "week16": 6.1,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 11.1, 2.9, 7.4, 2.5, 5.1, 5.5, 15.4, 6.8, 1.3, 'BYE', 6.9, 6.3, 9.7, 14.5, 6.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 2.3, 6.7, 9.7, 3.7, 6.7, 6.3, 6.4, 9.7, 8.0, 'BYE', 5.4, 5.2, 8.4, 7.5, 5.3, 5.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 0.8, 5.0, 4.4, 0.0, 0.0, 4.0, 3.9, 2.4, 5.5, 'BYE', 2.4, 3.0, 3.3, 4.2, 2.0, 3.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  "rgba(195, 104, 53, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 2.8, 9.4, 9.3, 14.7, 12.8, 10.0, 7.3, 8.3, 12.7, 'BYE', 10.9, 6.6, 10.9, 8.2, 9.3, 9.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2978109.png",
    "name": "Zach Pascal",
    "depthchart": "Reserve: WR-3",
    "team": "Indianapolis Colts",
    "projected": 5.2,
    "opponent": "Jacksonville Jaguars",
    "home_away": "",
    "opp_rank_Pos": 27,
    "team_rank_Neu": 8,
    "avg_fp2": 7.32,
    "opp_rank_allowed_fp2_Pos": 24,
    "opp_avg_allowed_fp2": 31.77,
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
    "headlineNews": "Zach Pascal caught 3-of-6 targets for 64 yards and one score in Indianapolis' Week 16 loss to Pittsburgh.\n",
    "report": "",
    "analysis": "Pascal tied Jack Doyle for second on the team in targets but still led Indianapolis' skill players in receiving yards due in part to his 42-yard touchdown in the first half. Even so, Pascal continued\u00a0running fewer routes than both T.Y. Hilton and Michael Pittman\u00a0and remains on the outside looking in for fantasy leagues that are sick enough to run into Week 17. There's no need to buy into his usage unless the Colts are, for whatever reason, flexed into Sunday Night Football.\n",
    "timestamp": "2020-12-28 02:13 AM",
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.8, 9.4, 4.4, 7.3, 2.5, 13.4, 'BYE', 5.9, 8.0, 5.3, 6.9, 2.8, 1.6, 3.2, 22.4, 13.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [0.6, 7.5, 3.2, 4.3, 9.7, 4.1, 'BYE', 4.9, 6.9, 8.1, 4.9, 4.4, 4.8, 5.8, 7.3, 4.7, 5.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 1.0, 0.0, 0.0, 0.3, 'BYE', 0.2, 0.0, 0.4, 2.8, 0.0, 0.0, 0.0, 0.0, 0.3, 0.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.1, 12.8, 6.8, 12.5, 9.5, 12.7, 'BYE', 13.9, 7.8, 9.8, 11.0, 13.4, 8.9, 10.6, 11.4, 13.1, 13.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4258195.png",
    "name": "Donovan Peoples-Jones",
    "depthchart": "Backup: WR-2",
    "team": "Cleveland Browns",
    "projected": 5.0,
    "opponent": "Pittsburgh Steelers",
    "home_away": "",
    "opp_rank_Neg": 2,
    "team_rank_Neg": 24,
    "avg_fp2": 4.53,
    "opp_rank_allowed_fp2_Neu": 9,
    "opp_avg_allowed_fp2": 27.88,
    "fanduelSalary": "$5100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FF3C00",
    "tmColorDark": "#311D00",
    "tmColorLite_rgba": "rgba(255, 60, 0, 0.2)",
    "tmColorDark_rgba": "rgba(49, 29, 0, 0.2)",
    "tmTextLite": "#FF3C00",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
    "headlineNews": "Browns activated WR\u00a0Rashard Higgins from the reserve/COVID-19 list.\u00a0\n",
    "report": "",
    "analysis": "Donovan Peoples-Jones and KhaDarel Hodge have also been activated. None of the three were\u00a0COVID positive, so they were\u00a0able to return after five days of negative tests. Higgins will immediately slide back in as the Browns' No. 2 receiver and a top-36 fantasy option for Sunday's must-win game against the Steelers' B-team defense.\u00a0\n",
    "timestamp": "2020-12-31 09:40 PM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": 0.0,
    "week05": 0.0,
    "week06": 0.0,
    "week07": 13.1,
    "week08": 0.0,
    "week09": "BYE",
    "week10": 2.6,
    "week11": 0.0,
    "week12": 0.0,
    "week13": 16.2,
    "week14": 10.9,
    "week15": 7.0,
    "week16": "DNP",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 0.0, 0.0, 0.0, 13.1, 0.0, 'BYE', 2.6, 0.0, 0.0, 16.2, 10.9, 7.0, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 2.2, 3.3, 1.1, 0.4, 1.3, 'BYE', -1.4, 0.4, -1.6, 4.7, 3.9, 5.4, 'DNP', 5.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 0.0, 0.0, 0.0, 0.0, 0.0, 'BYE', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 'DNP', 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 7.5, 7.8, 6.4, 5.6, 8.8, 'BYE', 9.3, 9.0, 9.2, 8.1, 12.9, 12.9, 'DNP', 6.5]
                    }
                    
                    ]
               }
            }];



$scope.positionTE = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15847.png",
    "name": "Travis Kelce",
    "depthchart": "Starter: TE-1",
    "team": "Kansas City Chiefs",
    "projected": 18.7,
    "opponent": "Los Angeles Chargers",
    "home_away": "",
    "opp_rank_Neu": 9,
    "team_rank_Pos": 1,
    "avg_fp2": 17.35,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 11.49,
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
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "source": "",
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.0, 19.5, 11.7, 8.5, 20.8, 19.0, 4.6, 20.9, 20.9, 'BYE', 22.86, 12.2, 23.6, 23.6, 18.8, 19.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.9, 10.8, 16.9, 11.5, 16.5, 19.3, 14.7, 13.2, 16.5, 'BYE', 11.8, 12.5, 14.4, 15.4, 15.3, 21.5, 18.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.0, 5.3, 5.2, 6.5, 11.4, 4.8, 3.8, 5.3, 7.0, 'BYE', 5.2, 5.5, 6.6, 5.6, 6.4, 5.6, 5.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.2, 18.9, 19.7, 20.3, 25.4, 18.8, 19.4, 18.9, 20.5, 'BYE', 19.2, 19.3, 20.1, 19.6, 20.0, 19.3, 21.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13229.png",
    "name": "Rob Gronkowski",
    "depthchart": "Starter: TE-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 15.9,
    "opponent": "Atlanta Falcons",
    "home_away": "",
    "opp_rank_Pos": 31,
    "team_rank_Pos": 3,
    "avg_fp2": 8.19,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 13.04,
    "fanduelSalary": "$6100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#D50A0A",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(213, 10, 10, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#D50A0A",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Rob Gronkowski caught both of his targets for 58 yards and two touchdowns in the Bucs' Week 16 win over Detroit.\n",
    "report": "",
    "analysis": "Gronkowski scored the Bucs' first touchdown on\u00a0a back-shoulder\u00a0deep shot from Tom Brady. He added a second TD with the Blaine Gabbert mopping up in the third quarter. Both of Gronk's touchdowns came from 25-plus yards out.\u00a0Gronkowski will take a 43/594/7 line into a Week 17 matchup with Atlanta.\n",
    "timestamp": "2020-12-26 09:51 PM",
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.1, 0.0, 7.8, 3.4, 6.7, 16.3, 14.7, 12.1, 0.7, 12.1, 3.5, 13.6, 'BYE', 6.7, 4.4, 18.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.7, 10.4, 12.7, 9.4, 10.3, 16.0, 18.5, 17.6, 13.9, 17.8, 15.9, 13.6, 'BYE', 15.5, 15.0, 14.3, 15.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.7, 4.3, 3.9, 3.6, 4.7, 3.3, 4.1, 4.1, 2.3, 3.6, 3.7, 4.4, 'BYE', 4.5, 4.1, 3.9, 3.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(213, 10, 10, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [22.6, 20.7, 20.9, 20.8, 18.0, 20.5, 21.1, 20.2, 17.1, 21.4, 19.5, 21.1, 'BYE', 21.7, 23.3, 21.9, 21.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4036133.png",
    "name": "T.J. Hockenson",
    "depthchart": "Starter: TE-1",
    "team": "Detroit Lions",
    "projected": 14.3,
    "opponent": "Minnesota Vikings",
    "home_away": "",
    "opp_rank_Pos": 24,
    "team_rank_Neu": 11,
    "avg_fp2": 9.19,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 9.89,
    "fanduelSalary": "$5800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0076B6",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(0, 118, 182, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#0076B6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/det.png",
    "headlineNews": "T.J. Hockenson caught 4-of-6 targets for 23 yards in Week 16 against the Bucs.\n",
    "report": "",
    "analysis": "It's another down game for Hockenson, who was held to two catches last week. The Lions offense was held back by Chase Daniel and David Blough, who averaged 4.9 YPA in place of an injured Matthew Stafford.\u00a0Hockenson will be a back-end TE1 if Stafford doesn't start in Week 17.\n",
    "timestamp": "2020-12-26 09:45 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 14.1,
    "week02": 8.2,
    "week03": 7.3,
    "week04": 9.9,
    "week05": "BYE",
    "week06": 8.7,
    "week07": 14.4,
    "week08": 10.0,
    "week09": 12.4,
    "week10": 2.3,
    "week11": 8.8,
    "week12": 11.4,
    "week13": 11.9,
    "week14": 13.3,
    "week15": 0.8,
    "week16": 4.3,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.1, 8.2, 7.3, 9.9, 'BYE', 8.7, 14.4, 10.0, 12.4, 2.3, 8.8, 11.4, 11.9, 13.3, 0.8, 4.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.8, 6.6, 7.9, 11.9, 'BYE', 10.2, 10.7, 7.3, 8.6, 12.0, 9.5, 13.3, 12.2, 12.2, 9.2, 15.1, 14.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.6, 0.0, 1.8, 0.0, 'BYE', 6.9, 5.8, 0.0, 5.5, 3.4, 1.4, 3.6, 4.8, 0.5, 2.9, 2.3, 4.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 118, 182, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [5.8, 11.6, 10.1, 7.6, 'BYE', 16.5, 14.5, 10.4, 13.5, 11.6, 10.4, 12.1, 13.4, 10.3, 12.2, 14.0, 15.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3040151.png",
    "name": "George Kittle",
    "depthchart": "Starter: TE-1",
    "team": "San Francisco 49ers",
    "projected": 13.7,
    "opponent": "Seattle Seahawks",
    "home_away": "",
    "opp_rank_Pos": 32,
    "team_rank_Neu": 12,
    "avg_fp2": 12.97,
    "opp_rank_allowed_fp2_Neu": 15,
    "opp_avg_allowed_fp2": 9.79,
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
    "headlineNews": "George Kittle caught 4-of-5 targets for 92 yards in the 49ers' Week 16 win against the Cardinals.\u00a0\n",
    "report": "",
    "analysis": "Kittle was his usual unhinged self coming back from a foot injury. He sought contact every time he caught the ball and bowled over defenders on all four of his receptions. Leading the team in targets, Kittle showed fantasy managers that even on a snap count, he's a better option than all but a couple tight ends in the league. Kittle -- averaging 8.2 targets per game this year -- will look to finish the Niners' lost season on a positive note next week against the Seahawks.\u00a0\n",
    "timestamp": "2020-12-27 01:37 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 7.3,
    "week02": "DNP",
    "week03": "DNP",
    "week04": 32.6,
    "week05": 6.4,
    "week06": 20.4,
    "week07": 8.0,
    "week08": 4.9,
    "week09": "DNP",
    "week10": "DNP",
    "week11": "BYE",
    "week12": "DNP",
    "week13": "DNP",
    "week14": "DNP",
    "week15": "DNP",
    "week16": 11.2,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.3, 'DNP', 'DNP', 32.6, 6.4, 20.4, 8.0, 4.9, 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 11.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.0, 'DNP', 'DNP', 15.1, 17.1, 12.9, 12.0, 12.7, 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 11.9, 13.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.0, 'DNP', 'DNP', 3.1, 8.4, 3.1, 5.5, 4.7, 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 4.1, 4.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.8, 'DNP', 'DNP', 18.1, 18.7, 17.4, 18.7, 19.0, 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 16.7, 18.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116365.png",
    "name": "Mark Andrews",
    "depthchart": "Starter: TE-1",
    "team": "Baltimore Ravens",
    "projected": 12.3,
    "opponent": "Cincinnati Bengals",
    "home_away": "at ",
    "opp_rank_Neu": 23,
    "team_rank_Neg": 31,
    "avg_fp2": 10.49,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 12.05,
    "fanduelSalary": "$7200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9E7C0C",
    "tmColorDark": "#241773",
    "tmColorLite_rgba": "rgba(158, 124, 12, 0.2)",
    "tmColorDark_rgba": "rgba(36, 23, 115, 0.2)",
    "tmTextLite": "#9E7C0C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png",
    "headlineNews": "Mark Andrews caught 6-of-11 targets for 76 yards in the Ravens' Week 16 win against the Giants.\u00a0\n",
    "report": "",
    "analysis": "Andrews dropped a touchdown on a beautifully thrown ball by Lamar Jackson. It was still a solid outing for Andres, who paced the Ravens in targets, receptions, and receiving yardage. Andrews has been hot over the past couple weeks, totaling 11 catches, 142 yards, and two scores. He should continue to function as Baltimore's No. 1 pass catchers in Week 17 against a Bengals defense allowing 5.5 tight end receptions per game. Only two teams have given up more receiving yardage to tight ends this year.\u00a0\n",
    "timestamp": "2020-12-27 09:56 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 20.3,
    "week02": 3.4,
    "week03": 3.7,
    "week04": 19.2,
    "week05": 14.6,
    "week06": 3.1,
    "week07": "DNP",
    "week08": 4.7,
    "week09": 3.7,
    "week10": 9.6,
    "week11": 18.1,
    "week12": "DNP",
    "week13": "DNP",
    "week14": 10.3,
    "week15": 15.1,
    "week16": 10.6,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [20.3, 3.4, 3.7, 19.2, 14.6, 3.1, 'DNP', 4.7, 3.7, 9.6, 18.1, 'DNP', 'DNP', 10.3, 15.1, 10.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.4, 13.8, 15.2, 10.4, 9.7, 15.1, 'DNP', 12.6, 8.2, 7.4, 12.0, 'DNP', 'DNP', 13.2, 7.2, 13.8, 12.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.9, 1.0, 2.5, 3.0, 5.1, 4.2, 'DNP', 4.7, 0.8, 0.0, 1.8, 'DNP', 'DNP', 2.4, 2.6, 8.0, 3.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.8, 12.6, 16.2, 15.3, 17.2, 11.9, 'DNP', 14.1, 13.1, 14.5, 12.8, 'DNP', 'DNP', 15.3, 14.9, 18.3, 16.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3054212.png",
    "name": "Jonnu Smith",
    "depthchart": "Starter: TE-1",
    "team": "Tennessee Titans",
    "projected": 12.0,
    "opponent": "Houston Texans",
    "home_away": "at ",
    "opp_rank_Pos": 26,
    "team_rank_Neu": 21,
    "avg_fp2": 8.46,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 8.71,
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
    "headlineNews": "Jonnu Smith caught 3-of-7 targets for 30 yards and a touchdown in Week 16 against the Packers.\n",
    "report": "",
    "analysis": "Smith scored on Ryan Tannehill\u2019s only passing touchdown of the night. His seven\u00a0targets were behind just A.J. Brown (8). This was Smith\u2019s first TD since Week 11 as he\u2019s played through injuries the past few games. With the Titans playing for the AFC South title, Smith will be one of the top tight end plays for Week 17.\n",
    "timestamp": "2020-12-28 04:37 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 11.6,
    "week02": 22.4,
    "week03": 8.6,
    "week04": "DNP",
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.6, 22.4, 8.6, 'DNP', 18.5, 1.8, 1.4, 3.9, 10.2, 8.5, 10.0, 0.0, 'DNP', 3.3, 7.7, 10.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.7, 10.0, 9.9, 'DNP', 10.3, 11.0, 9.0, 12.0, 8.7, 6.7, 7.3, 9.0, 'DNP', 3.7, 8.4, 4.1, 12.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.9, 1.2, 'DNP', 0.0, 2.9, 1.7, 0.0, 0.0, 1.1, 1.3, 1.1, 'DNP', 5.5, 0.8, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [7.9, 9.5, 11.9, 'DNP', 7.5, 13.6, 12.5, 9.7, 9.2, 11.6, 10.6, 12.2, 'DNP', 12.8, 11.6, 10.9, 10.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3051876.png",
    "name": "Evan Engram",
    "depthchart": "Starter: TE-1",
    "team": "New York Giants",
    "projected": 10.9,
    "opponent": "Dallas Cowboys",
    "home_away": "",
    "opp_rank_Neu": 11,
    "team_rank_Neg": 29,
    "avg_fp2": 7.12,
    "opp_rank_allowed_fp2_Neu": 14,
    "opp_avg_allowed_fp2": 9.73,
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
    "headlineNews": "Evan Engram (ankle) returned to Giants practice on Thursday, getting in a \"limited\" session.\u00a0\n",
    "report": "",
    "analysis": "Barring a setback, Engram will be good to go for Sunday's must-win game against the Cowboys. With the Giants' entire offense seemingly banged up in some way, Engram will remain a volume-based TE1.\u00a0\n",
    "timestamp": "2020-12-31 07:42 PM",
    "source": "Zack Rosenblatt on Twitter ",
    "game_day_logo": "",
    "week01": 1.9,
    "week02": 9.5,
    "week03": 3.7,
    "week04": 6.5,
    "week05": 9.0,
    "week06": 4.0,
    "week07": 7.9,
    "week08": 9.5,
    "week09": 13.3,
    "week10": 2.5,
    "week11": "BYE",
    "week12": 13.9,
    "week13": 5.2,
    "week14": 2.8,
    "week15": 6.6,
    "week16": 10.5,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.9, 9.5, 3.7, 6.5, 9.0, 4.0, 7.9, 9.5, 13.3, 2.5, 'BYE', 13.9, 5.2, 2.8, 6.6, 10.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.5, 12.7, 8.3, 15.6, 13.6, 15.7, 12.6, 13.2, 7.6, 16.1, 'BYE', 11.3, 13.0, 12.8, 16.9, 11.7, 10.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.5, 2.8, 3.8, 3.4, 3.2, 1.9, 3.2, 3.9, 2.8, 4.5, 'BYE', 1.7, 3.2, 3.1, 3.2, 3.7, 1.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.1, 15.3, 14.7, 14.4, 13.1, 12.4, 13.3, 14.3, 15.4, 13.6, 'BYE', 9.4, 14.1, 15.0, 13.9, 17.2, 12.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2576925.png",
    "name": "Darren Waller",
    "depthchart": "Starter: TE-1",
    "team": "Las Vegas Raiders",
    "projected": 10.7,
    "opponent": "Denver Broncos",
    "home_away": "at ",
    "opp_rank_Neu": 12,
    "team_rank_Neu": 10,
    "avg_fp2": 13.52,
    "opp_rank_allowed_fp2_Neu": 9,
    "opp_avg_allowed_fp2": 9.02,
    "fanduelSalary": "$7800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A5ACAF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lv.png",
    "headlineNews": "Darren Waller caught 5-of-6 targets for 112 yards in the Raiders' Week 16 loss to the Dolphins.\u00a0\n",
    "report": "",
    "analysis": "Four of Wallers' five receptions went for at least 19 yards. Most of his long catches came on tight matchups with a single cornerback who Waller was simply able to beat at the point of the catch. That's now three games with over 100 yards in his previous four contests. Waller also blasted past 1,000 receiving yards on the season with his big day against the Dolphins. He is two catches away from 100 receptions on the year and should be able to hit that mark within a few minutes of his Week 17 matchup against Buffalo. He remains the TE2 for the final week of the regular season.\u00a0\n",
    "timestamp": "2020-12-27 04:54 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 7.5,
    "week02": 22.3,
    "week03": 1.9,
    "week04": 11.3,
    "week05": 13.3,
    "week06": "BYE",
    "week07": 14.0,
    "week08": 5.3,
    "week09": 10.7,
    "week10": 5.2,
    "week11": 18.3,
    "week12": 4.3,
    "week13": 38.5,
    "week14": 11.0,
    "week15": 25.5,
    "week16": 13.7,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.5, 22.3, 1.9, 11.3, 13.3, 'BYE', 14.0, 5.3, 10.7, 5.2, 18.3, 4.3, 38.5, 11.0, 25.5, 13.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.3, 10.4, 10.8, 10.6, 14.0, 'BYE', 15.0, 15.5, 11.4, 9.7, 10.9, 8.6, 13.5, 9.7, 13.5, 12.3, 10.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.0, 5.4, 18.7, 2.8, 0.7, 'BYE', 0.0, 2.4, 1.2, 9.6, 5.8, 12.1, 5.5, 0.1, 1.4, 2.3, 0.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.8, 12.2, 24.1, 15.6, 14.0, 'BYE', 15.7, 14.9, 11.1, 17.3, 27.1, 19.8, 13.3, 17.8, 14.1, 16.6, 17.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15835.png",
    "name": "Zach Ertz",
    "depthchart": "Starter: TE-1",
    "team": "Philadelphia Eagles",
    "projected": 9.3,
    "opponent": "Washington Football Team",
    "home_away": "",
    "opp_rank_Neg": 3,
    "team_rank_Neg": 27,
    "avg_fp2": 5.64,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 9.35,
    "fanduelSalary": "$5300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#386168",
    "tmColorDark": "#004C54",
    "tmColorLite_rgba": "rgba(56, 97, 104, 0.2)",
    "tmColorDark_rgba": "rgba(0, 76, 84, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    "headlineNews": "Dallas Goedert (calf) is out for Week 17 against Washington.\u00a0\n",
    "report": "",
    "analysis": "Goedert won't play in the Eagles' meaningless season finale. Zach Ertz, in what could be his final game in an Eagles uniform, should be the team's primary pass catching tight end with Goedert sidelined. Ertz is an intriguing DFS option this week.\u00a0\n",
    "timestamp": "2021-01-01 08:36 PM",
    "source": "Jeremy Fowler on Twitter ",
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "week01": 9.3,
    "week02": 6.7,
    "week03": 10.5,
    "week04": 4.9,
    "week05": 1.1,
    "week06": 5.3,
    "week07": "DNP",
    "week08": "DNP",
    "week09": "BYE",
    "week10": "DNP",
    "week11": "DNP",
    "week12": "DNP",
    "week13": 4.1,
    "week14": 1.8,
    "week15": 7.9,
    "week16": 4.8,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.3, 6.7, 10.5, 4.9, 1.1, 5.3, 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 4.1, 1.8, 7.9, 4.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.7, 10.4, 11.4, 13.5, 10.7, 7.5, 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 10.1, 5.1, 6.5, 9.1, 9.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.8, 5.1, 3.2, 4.7, 3.8, 3.8, 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 1.7, 2.3, 2.1, 3.0, 1.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.3, 16.7, 13.8, 17.3, 17.6, 16.5, 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 18.5, 16.5, 12.0, 13.5, 14.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2975674.png",
    "name": "Robert Tonyan",
    "depthchart": "Starter: TE-1",
    "team": "Green Bay Packers",
    "projected": 8.4,
    "opponent": "Chicago Bears",
    "home_away": "at ",
    "opp_rank_Neu": 13,
    "team_rank_Neu": 9,
    "avg_fp2": 9.45,
    "opp_rank_allowed_fp2_Pos": 30,
    "opp_avg_allowed_fp2": 12.21,
    "fanduelSalary": "$6300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#d7a017",
    "tmColorDark": "#203731",
    "tmColorLite_rgba": "rgba(215, 160, 23, 0.2)",
    "tmColorDark_rgba": "rgba(32, 55, 49, 0.2)",
    "tmTextLite": "#d7a017",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png",
    "headlineNews": "Robert Tonyan caught 1-of-2 targets for 17 yards in Week 16 against the Titans.\n",
    "report": "",
    "analysis": "Tonyan wasn\u2019t featured in the red-zone with Davante Adams scoring three touchdowns. He had an end-zone target that he couldn\u2019t come down with, but this was an otherwise quiet night. It snaps a five game scoring streak for Tonyan, who ranks behind only Travis Kelce with 10 touchdowns. Tonyan has a Week 17 matchup against a Chicago secondary that\u2019s allowed the second most points to opposing tight ends.\n",
    "timestamp": "2020-12-28 04:39 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 0.0,
    "week02": 9.5,
    "week03": 13.5,
    "week04": 30.8,
    "week05": "BYE",
    "week06": 4.0,
    "week07": 4.2,
    "week08": 10.4,
    "week09": 1.0,
    "week10": 4.8,
    "week11": 12.9,
    "week12": 15.2,
    "week13": 11.9,
    "week14": 12.1,
    "week15": 9.3,
    "week16": 2.2,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 9.5, 13.5, 30.8, 'BYE', 4.0, 4.2, 10.4, 1.0, 4.8, 12.9, 15.2, 11.9, 12.1, 9.3, 2.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.8, 5.3, 3.9, 11.7, 'BYE', 7.4, 9.0, 11.2, 9.6, 10.0, 5.9, 9.3, 8.3, 9.1, 13.1, 14.3, 8.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.7, 2.6, 'BYE', 4.7, 4.7, 2.2, 1.1, 0.1, 0.0, 2.9, 0.6, 2.2, 2.8, 2.2, 4.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.4, 9.5, 10.4, 11.7, 'BYE', 11.7, 11.0, 11.6, 8.6, 22.0, 18.2, 13.1, 16.6, 15.1, 19.4, 12.4, 13.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16504.png",
    "name": "Jack Doyle",
    "depthchart": "Starter: TE-1",
    "team": "Indianapolis Colts",
    "projected": 8.1,
    "opponent": "Jacksonville Jaguars",
    "home_away": "",
    "opp_rank_Pos": 27,
    "team_rank_Neu": 8,
    "avg_fp2": 3.8,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 11.98,
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
    "headlineNews": "Jack Doyle (quad) did not practice Thursday.\u00a0\n",
    "report": "",
    "analysis": "Fresh off a five catch, 50 yard performance against the Steelers, Doyle is looking iffy for Week 17's game against Jacksonville, though he missed last week's Thursday practice with the same quad issue. None of the Colts tight ends are reliable fantasy options unless one or two of them are injured.\u00a0\n",
    "timestamp": "2020-12-31 08:50 PM",
    "source": "Indianapolis Colts on Twitter ",
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.4, 'DNP', 0.0, 1.7, 0.0, 8.4, 'BYE', 8.8, 0.0, 'DNP', 7.1, 0.0, 1.7, 5.9, 2.4, 7.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.4, 'DNP', 7.7, 4.4, 9.5, 1.2, 'BYE', 1.2, 1.7, 'DNP', 6.2, 5.9, 2.9, -1.6, 1.6, 5.2, 8.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.4, 'DNP', 0.8, 0.6, 0.0, 5.0, 'BYE', 1.4, 0.7, 'DNP', 0.0, 0.0, 1.5, 2.0, 0.4, 0.2, 0.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.0, 'DNP', 9.6, 11.4, 10.4, 14.1, 'BYE', 10.1, 10.6, 'DNP', 11.6, 9.8, 10.6, 10.2, 10.1, 10.5, 9.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/12537.png",
    "name": "Jared Cook",
    "depthchart": "Starter: TE-1",
    "team": "New Orleans Saints",
    "projected": 7.9,
    "opponent": "Carolina Panthers",
    "home_away": "at ",
    "opp_rank_Neu": 17,
    "team_rank_Neu": 19,
    "avg_fp2": 6.9,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 11.31,
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
    "headlineNews": "Jared Cook caught 3-of-4 passes for 82 yards in the Saints' Week 16 win over the Vikings.\n",
    "report": "",
    "analysis": "Cook broke off three chunk gains to help set up Alvin Kamara for an absurd six-touchdown game. The Saints were locked in between the tackles, so Drew Brees only attempting 26 passes in a game New Orleans scored 52 points. Cook needs to find the end zone to be a worthwhile TE2 option. His odds are decent against the Panthers in Week 17 with Michael Thomas and Tre'Quan Smith sidelined.\n",
    "timestamp": "2020-12-26 01:29 AM",
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.5, 8.3, 3.1, 'DNP', 12.2, 'BYE', 10.7, 13.6, 2.0, 0.0, 1.1, 0.0, 10.3, 11.2, 3.9, 9.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.3, 9.5, 9.1, 'DNP', 10.4, 'BYE', 13.2, 5.8, 7.4, 5.5, 5.1, 6.6, 4.1, 10.8, 10.9, 5.9, 7.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.0, 1.2, 1.4, 'DNP', 1.3, 'BYE', 1.6, 1.6, 1.7, 1.0, 0.6, 1.0, 0.0, 1.3, 3.4, 1.2, 1.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(155, 132, 92, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.9, 13.3, 13.3, 'DNP', 14.5, 'BYE', 13.4, 12.4, 13.5, 13.0, 14.9, 12.4, 11.5, 14.0, 13.2, 12.5, 12.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3924365.png",
    "name": "Hayden Hurst",
    "depthchart": "Starter: TE-1",
    "team": "Atlanta Falcons",
    "projected": 7.6,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "at ",
    "opp_rank_Neu": 22,
    "team_rank_Pos": 5,
    "avg_fp2": 7.35,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 11.11,
    "fanduelSalary": "$5500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/atl.png",
    "headlineNews": "Hayden Hurst caught 5-of-5 targets for 47 yards and a touchdown in the Falcons' Week 16 loss to the Chiefs.\u00a0\n",
    "report": "",
    "analysis": "The catches were Hurst's most in six weeks, while the yards were his second most.\u00a0The score was his second in as many games. For Week 17, Hurst will be rematching with a Bucs defense he went 4/21/1 on in Week 15. Hurst's workload\u00a0will depend on Julio Jones' (hamstring) availability.\u00a0\n",
    "timestamp": "2020-12-27 11:46 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 5.3,
    "week02": 15.7,
    "week03": 6.6,
    "week04": 7.1,
    "week05": 1.8,
    "week06": 13.7,
    "week07": 9.8,
    "week08": 7.9,
    "week09": 9.7,
    "week10": "BYE",
    "week11": 0.0,
    "week12": 6.8,
    "week13": 1.4,
    "week14": 1.2,
    "week15": 10.1,
    "week16": 13.2,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.3, 15.7, 6.6, 7.1, 1.8, 13.7, 9.8, 7.9, 9.7, 'BYE', 0.0, 6.8, 1.4, 1.2, 10.1, 13.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.7, 6.3, 8.3, 9.5, 5.7, 5.1, 10.1, 14.9, 7.5, 'BYE', 6.8, 11.9, 7.2, 12.7, 6.1, 8.3, 7.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 8.8, 1.6, 0.2, 1.2, 0.4, 0.0, 1.5, 'BYE', 4.4, 0.0, 0.0, 1.4, 0.9, 0.6, 0.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.1, 7.1, 15.5, 9.5, 9.1, 7.0, 8.0, 9.7, 8.0, 'BYE', 10.6, 9.5, 9.3, 9.5, 9.7, 9.2, 9.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3123050.png",
    "name": "Chris Herndon",
    "depthchart": "Starter: TE-1",
    "team": "New York Jets",
    "projected": 7.5,
    "opponent": "New England Patriots",
    "home_away": "at ",
    "opp_rank_Neu": 7,
    "team_rank_Neg": 32,
    "avg_fp2": 2.83,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 7.71,
    "fanduelSalary": "$4700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#125740",
    "tmColorDark": "#003f2d",
    "tmColorLite_rgba": "rgba(18, 87, 64, 0.2)",
    "tmColorDark_rgba": "rgba(0, 63, 45, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png",
    "headlineNews": "Chris Herndon caught 4-of-4 targets for 34 yards and one touchdown in the Jets' Week 16 win over the Browns.\n",
    "report": "",
    "analysis": "This was his second touchdown of the season, one that was a massive disappointment relative to the training camp buzz he received in August. Herndon will close the season as a TE3 against the Patriots.\n",
    "timestamp": "2020-12-27 10:33 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 4.7,
    "week02": 1.0,
    "week03": 3.6,
    "week04": 1.6,
    "week05": 3.4,
    "week06": 0.0,
    "week07": 0.0,
    "week08": -1.2,
    "week09": 0.0,
    "week10": "DNP",
    "week11": 10.2,
    "week12": 0.0,
    "week13": 0.0,
    "week14": 1.4,
    "week15": 6.3,
    "week16": 11.4,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.7, 1.0, 3.6, 1.6, 3.4, 0.0, 0.0, -1.2, 0.0, 'DNP', 10.2, 0.0, 0.0, 1.4, 6.3, 11.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.8, 5.7, 4.4, 11.2, 5.5, 5.6, 6.7, 6.0, 4.4, 'DNP', 6.9, 4.7, 7.7, -0.7, 2.4, 5.9, 7.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.6, 1.3, 3.3, 0.4, 0.6, 12.1, 0.3, 0.3, 0.0, 'DNP', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  "rgba(18, 87, 64, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.7, 9.7, 12.5, 6.2, 5.0, 16.9, 8.1, 8.4, 10.5, 'DNP', 9.8, 8.6, 7.2, 9.5, 8.3, 8.8, 7.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4036131.png",
    "name": "Noah Fant",
    "depthchart": "Starter: TE-1",
    "team": "Denver Broncos",
    "projected": 7.5,
    "opponent": "Las Vegas Raiders",
    "home_away": "",
    "opp_rank_Pos": 25,
    "team_rank_Neg": 28,
    "avg_fp2": 7.96,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 9.58,
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
    "headlineNews": "Noah Fant caught 6-of-9 targets for 65 yards in the Broncos' Week 16 loss to the Chargers.\n",
    "report": "",
    "analysis": "Fant was a space eater over the middle against the Chargers' zone defense. His play-making ability is obvious in every game that he plays at full health, something he hasn't had for most of the 2020 season. Fant's box scores have looked much better recently as he's moved past his mid-year ankle sprain. Expect Fant to close the year strongly as a TE1 play against the Raiders in Week 17. There are reasons to believe a bigger season is coming in 2021.\n",
    "timestamp": "2020-12-28 01:19 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 16.6,
    "week02": 15.7,
    "week03": 7.1,
    "week04": 6.0,
    "week05": "DNP",
    "week06": "DNP",
    "week07": 5.3,
    "week08": 8.2,
    "week09": 6.0,
    "week10": 3.3,
    "week11": 7.5,
    "week12": 1.8,
    "week13": 7.7,
    "week14": 0.0,
    "week15": 16.8,
    "week16": 9.5,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [16.6, 15.7, 7.1, 6.0, 'DNP', 'DNP', 5.3, 8.2, 6.0, 3.3, 7.5, 1.8, 7.7, 0.0, 16.8, 9.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.8, 7.2, 13.3, 8.7, 'DNP', 'DNP', 5.6, 11.7, 10.9, 7.2, 11.7, 7.3, 6.7, 6.9, 4.2, 11.9, 7.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.9, 3.7, 1.6, 'DNP', 'DNP', 1.6, 2.0, 0.0, 1.1, 1.3, 2.6, 0.4, 1.6, 0.0, 0.2, 2.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(225, 119, 87, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.8, 12.0, 13.8, 14.9, 'DNP', 'DNP', 13.1, 12.0, 13.5, 12.6, 12.3, 10.5, 8.4, 10.5, 9.4, 13.0, 14.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16813.png",
    "name": "Logan Thomas",
    "depthchart": "Starter: TE-1",
    "team": "Washington Football Team",
    "projected": 7.1,
    "opponent": "Philadelphia Eagles",
    "home_away": "at ",
    "opp_rank_Neu": 20,
    "team_rank_Neg": 26,
    "avg_fp2": 8.63,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 10.99,
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
    "headlineNews": "Logan Thomas has the third most targets among tight ends in 2020.\u00a0\n",
    "report": "",
    "analysis": "Thomas, who has run more pass routes than any tight end in the league, has 101 targets, 29 behind Darren Waller and 38 behind Travis Kelce. Subpar quarterbacking has hindered Thomas' production for much of the season, as he's only averaging 1.1 yards per route run -- the 35th highest mark among tight ends. Thomas' 2020 campaign is most definitely a breakout season for the former college quarterback.\u00a0\n",
    "timestamp": "2020-12-28 03:15 PM",
    "source": null,
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.7, 4.6, 5.1, 1.3, 0.9, 11.7, 14.0, 'BYE', 4.3, 8.6, 1.8, 11.42, 20.3, 7.3, 16.6, 9.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.5, 9.6, 12.7, 4.8, 2.4, 6.2, 7.0, 'BYE', 7.2, 9.3, 9.5, 8.4, 6.2, 5.8, 5.7, 8.1, 7.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.6, 2.4, 0.1, 0.0, 0.1, 0.1, 'BYE', 0.0, 0.9, 0.3, 0.5, 0.0, 0.0, 0.0, 2.0, 1.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [3.6, 7.8, 7.7, 6.4, 4.5, 5.9, 5.7, 'BYE', 6.7, 5.9, 7.8, 7.5, 6.3, 6.7, 6.9, 11.0, 8.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15788.png",
    "name": "Tyler Eifert",
    "depthchart": "Starter: TE-1",
    "team": "Jacksonville Jaguars",
    "projected": 6.8,
    "opponent": "Indianapolis Colts",
    "home_away": "at ",
    "opp_rank_Neu": 18,
    "team_rank_Neu": 20,
    "avg_fp2": 4.53,
    "opp_rank_allowed_fp2_Neu": 7,
    "opp_avg_allowed_fp2": 8.51,
    "fanduelSalary": "$4300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#006778",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 103, 120, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#006778",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/jax.png",
    "headlineNews": "Tyler Eifert caught 2-of-5 targets for 17 yards in the Jaguars' Week 16 loss to the Bears.\n",
    "report": "",
    "analysis": "Eifert has just two touchdowns and one 50-plus yards game on the season.\n",
    "timestamp": "2020-12-27 09:58 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 1.3,
    "week02": 11.1,
    "week03": 2.1,
    "week04": 3.2,
    "week05": 3.1,
    "week06": 0.0,
    "week07": "DNP",
    "week08": "DNP",
    "week09": 6.8,
    "week10": 2.5,
    "week11": 4.2,
    "week12": 9.1,
    "week13": 7.5,
    "week14": 3.2,
    "week15": 6.6,
    "week16": 2.7,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.3, 11.1, 2.1, 3.2, 3.1, 0.0, 'DNP', 'DNP', 6.8, 2.5, 4.2, 9.1, 7.5, 3.2, 6.6, 2.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.3, 8.9, 10.5, 6.5, 11.4, 5.5, 'DNP', 'DNP', 7.2, 11.8, 11.6, 12.8, 9.0, 5.5, 5.8, 10.6, 6.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.8, 0.5, 3.1, 0.6, 1.6, 1.9, 'DNP', 'DNP', 0.0, 1.2, 1.1, 1.2, 1.6, 0.7, 0.0, 1.1, 0.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 103, 120, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.9, 12.7, 16.5, 13.9, 11.3, 13.0, 'DNP', 'DNP', 11.3, 16.8, 13.3, 13.8, 14.0, 12.7, 13.5, 12.1, 13.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3125404.png",
    "name": "Jacob Hollister",
    "depthchart": "Starter: TE-1",
    "team": "Seattle Seahawks",
    "projected": 6.5,
    "opponent": "San Francisco 49ers",
    "home_away": "at ",
    "opp_rank_Neg": 4,
    "team_rank_Neu": 14,
    "avg_fp2": 3.49,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 6.59,
    "fanduelSalary": "$4900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#69BE28",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(105, 190, 40, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#69BE28",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
    "headlineNews": "Jacob\u00a0Hollister caught both of his targets for 17 yards and a touchdown in the Seahawks' Week 15 win against the Football Team.\u00a0\n",
    "report": "",
    "analysis": "Hollister, who continues to lead Seattle tight ends in pass routes, caught Russell Wilson's lone touchdown pass in Seattle's depressingly scaled down passing attack. Will Dissly did not see a target against Washington. Greg Olsen (foot) returning from injured reserve in the next week or two would end Hollister's fantasy relevance for now. Even without Olsen, he's a borderline streaming option in 14-team formats.\u00a0\n",
    "timestamp": "2020-12-21 03:49 PM",
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 0.0, 'DNP', 0.0, 0.0, 'BYE', 3.7, 1.1, 8.5, 1.1, 2.4, 2.1, 3.5, 2.5, 8.7, 8.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 0.6, 'DNP', 1.6, 2.0, 'BYE', -0.2, 0.4, 2.0, 2.1, 1.4, 3.1, 6.6, 7.6, 3.6, 3.5, 6.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 1.8, 'DNP', 0.4, 0.0, 'BYE', 0.0, 0.0, 0.5, 0.0, 0.0, 0.5, 0.0, 0.0, 0.5, 0.0, 1.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 8.0, 'DNP', 4.9, 9.1, 'BYE', 8.5, 7.1, 9.2, 6.7, 5.0, 7.2, 4.5, 9.8, 5.4, 7.1, 7.1]
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
    "opponent": "Green Bay Packers",
    "home_away": "",
    "opp_rank_Neg": 6,
    "team_rank_Neu": 22,
    "avg_fp2": 7.81,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 8.25,
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
    "headlineNews": "Cole Kmet (shoulder) is considered questionable for Week 17 against the Packers.\u00a0\n",
    "report": "",
    "analysis": "Kmet suffered the shoulder injury during practice this week. He's now iffy to play in the Bears' final regular season game. If Kmet is sidelined, Jimmy Graham would become an interesting fantasy option. Even while running fewer pass routes and playing fewer snaps than Kmet over the past four weeks, Graham has outscored Kmet on the strength of three touchdowns over that stretch. Tight ends average six targets per game against the Packers.\u00a0\n",
    "timestamp": "2021-01-01 07:29 PM",
    "source": "Adam Caplan on Twitter ",
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.0, 2.3, 21.0, 5.3, 10.8, 5.9, 5.6, 2.3, 14.5, 0.0, 'BYE', 4.7, 0.0, 10.3, 3.5, 20.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.2, 13.4, 16.8, 7.7, 9.1, 5.5, 9.8, 10.7, 15.5, 15.3, 'BYE', 6.9, 11.0, 5.9, 4.0, 6.7, 6.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.2, 3.5, 1.3, 2.6, 1.8, 2.4, 1.3, 3.4, 3.1, 3.6, 'BYE', 2.6, 1.5, 1.1, 2.5, 1.9, 1.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  "rgba(195, 104, 53, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.2, 17.5, 14.7, 15.0, 13.8, 14.6, 13.5, 16.8, 17.2, 14.4, 'BYE', 14.5, 12.9, 13.9, 16.8, 14.9, 15.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16974.png",
    "name": "Trey Burton",
    "depthchart": "Backup: TE-2",
    "team": "Indianapolis Colts",
    "projected": 6.4,
    "opponent": "Jacksonville Jaguars",
    "home_away": "",
    "opp_rank_Pos": 27,
    "team_rank_Neu": 8,
    "avg_fp2": 5.56,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 11.98,
    "fanduelSalary": "$4900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#014683",
    "tmColorDark": "#002C5F",
    "tmColorLite_rgba": "rgba(1, 70, 131, 0.2)",
    "tmColorDark_rgba": "rgba(0, 44, 95, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png",
    "headlineNews": "Jack Doyle (quad) did not practice Thursday.\u00a0\n",
    "report": "",
    "analysis": "Fresh off a five catch, 50 yard performance against the Steelers, Doyle is looking iffy for Week 17's game against Jacksonville, though he missed last week's Thursday practice with the same quad issue. None of the Colts tight ends are reliable fantasy options unless one or two of them are injured.\u00a0\n",
    "timestamp": "2020-12-31 08:50 PM",
    "source": "Indianapolis Colts on Twitter ",
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": 5.8,
    "week06": 19.9,
    "week07": "BYE",
    "week08": 8.6,
    "week09": 1.1,
    "week10": 3.9,
    "week11": 9.5,
    "week12": 11.7,
    "week13": 1.6,
    "week14": 0.0,
    "week15": 1.3,
    "week16": 3.3,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 5.8, 19.9, 'BYE', 8.6, 1.1, 3.9, 9.5, 11.7, 1.6, 0.0, 1.3, 3.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 4.0, 5.5, 'BYE', 10.8, 5.3, 6.0, 5.3, 3.2, 7.8, 4.2, 8.0, 4.4, 6.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 0.9, 0.0, 'BYE', 0.0, 0.0, 0.0, 0.4, 0.7, 0.0, 0.0, 0.0, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 11.4, 7.4, 'BYE', 9.8, 11.2, 10.5, 11.4, 11.1, 9.6, 9.5, 9.0, 10.8, 8.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3117256.png",
    "name": "Dalton Schultz",
    "depthchart": "Starter: TE-1",
    "team": "Dallas Cowboys",
    "projected": 6.3,
    "opponent": "New York Giants",
    "home_away": "at ",
    "opp_rank_Neu": 16,
    "team_rank_Neu": 7,
    "avg_fp2": 6.97,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 9.43,
    "fanduelSalary": "$5100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#7F9695",
    "tmColorDark": "#041E42",
    "tmColorLite_rgba": "rgba(127, 150, 149, 0.2)",
    "tmColorDark_rgba": "rgba(4, 30, 66, 0.2)",
    "tmTextLite": "#7F9695",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
    "headlineNews": "Dalton Schultz caught 3-of-4 targets for 21 yards in the Cowboys' Week 16 win over the Eagles.\u00a0\n",
    "report": "",
    "analysis": "A typical day at the office for Schultz of late, though today's dud came with the receiver corps going wild. The only reason you would use Schultz in Week 17 DFS against the Giants\u00a0is if he made the salaries fit.\u00a0\n",
    "timestamp": "2020-12-28 01:42 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 1.6,
    "week02": 17.3,
    "week03": 6.8,
    "week04": 15.2,
    "week05": 1.1,
    "week06": 5.5,
    "week07": 3.2,
    "week08": 8.3,
    "week09": 6.8,
    "week10": "BYE",
    "week11": 10.5,
    "week12": 4.9,
    "week13": 6.4,
    "week14": 4.9,
    "week15": 8.4,
    "week16": 3.6,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.6, 17.3, 6.8, 15.2, 1.1, 5.5, 3.2, 8.3, 6.8, 'BYE', 10.5, 4.9, 6.4, 4.9, 8.4, 3.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.3, 7.8, 7.9, 8.4, 11.9, 11.7, 7.5, 2.8, 9.6, 'BYE', 2.9, 11.5, 8.9, 11.3, 5.0, 8.9, 6.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.1, 0.0, 0.0, 6.0, 0.0, 0.0, 0.0, 0.0, 0.0, 'BYE', 0.0, 0.0, 0.9, 2.8, 1.7, 1.8, 3.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  "rgba(127, 150, 149, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [2.5, 1.6, 3.7, 10.9, 10.5, 9.5, 4.8, 7.1, 9.2, 'BYE', 10.6, 8.3, 9.3, 10.0, 8.6, 8.4, 6.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16732.png",
    "name": "Eric Ebron",
    "depthchart": "Starter: TE-1",
    "team": "Pittsburgh Steelers",
    "projected": 6.2,
    "opponent": "Cleveland Browns",
    "home_away": "at ",
    "opp_rank_Neu": 21,
    "team_rank_Neu": 16,
    "avg_fp2": 7.59,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 12.16,
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
    "headlineNews": "Eric Ebron caught 5-of-7 passes for 47 yards and a touchdown in Pittsburgh's Week 16 win over the Colts.\n",
    "report": "",
    "analysis": "It was Ebron's first touchdown since Week 11 and a three-week high in targets. He hauled in Ben Roethlisberger's second touchdown pass following 45-yards worth of penalties on the team's third drive of the second half. With the AFC North crown suddenly clinched, odds are coach Mike Tomlin chooses to rest Ebron in Week 17 against Cleveland.\n",
    "timestamp": "2020-12-28 03:32 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 2.3,
    "week02": 5.8,
    "week03": 13.7,
    "week04": "DNP",
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.3, 5.8, 13.7, 'DNP', 4.8, 1.9, 8.0, 12.8, 9.7, 4.8, 11.6, 8.9, 10.3, 6.0, 0.0, 13.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.8, 8.9, 7.2, 'DNP', 13.4, 7.7, 9.6, 7.9, 3.9, 13.0, 7.4, 9.5, 7.8, 9.3, 11.0, 7.6, 6.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 2.4, 3.3, 'DNP', 2.1, 3.8, 2.7, 2.2, 2.5, 2.5, 2.8, 2.5, 2.0, 2.4, 1.8, 1.5, 2.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.5, 13.7, 13.9, 'DNP', 12.7, 13.8, 12.3, 12.8, 12.5, 13.0, 13.3, 13.1, 12.4, 12.3, 13.3, 11.4, 12.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2573401.png",
    "name": "Tyler Higbee",
    "depthchart": "Starter: TE-1",
    "team": "Los Angeles Rams",
    "projected": 6.1,
    "opponent": "Arizona Cardinals",
    "home_away": "",
    "opp_rank_Neu": 10,
    "team_rank_Neu": 12,
    "avg_fp2": 7.19,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 8.51,
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
    "headlineNews": "Tyler Higbee caught 4-of-5 targets for 67 yards and a touchdown in the Rams' Week 15 loss to the Jets.\u00a0\n",
    "report": "",
    "analysis": "Gifted a great matchup, Higbee responded with his best fantasy effort of the season. The fact that it was 4/67/1 tells you all you need to know about Higbee's 2020 following last year's monster finish. For Week 16, Higbee will be rematching with a Seahawks defense that coughed up his previous season high for yardage (60) in Week 10. He will flirt with top 20 status for the fantasy finals.\u00a0\n",
    "timestamp": "2020-12-21 01:08 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 5.5,
    "week02": 25.9,
    "week03": 7.0,
    "week04": 3.6,
    "week05": 2.2,
    "week06": 7.1,
    "week07": "DNP",
    "week08": 2.4,
    "week09": "BYE",
    "week10": 7.5,
    "week11": 4.0,
    "week12": 1.1,
    "week13": 10.4,
    "week14": 4.4,
    "week15": 14.7,
    "week16": 4.9,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.5, 25.9, 7.0, 3.6, 2.2, 7.1, 'DNP', 2.4, 'BYE', 7.5, 4.0, 1.1, 10.4, 4.4, 14.7, 4.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.7, 6.5, 3.1, 8.1, 5.3, 4.9, 'DNP', 3.1, 'BYE', 6.8, 9.8, 4.9, 4.5, 6.9, 6.8, 4.8, 6.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.6, 9.8, 0.0, 0.8, 0.0, 0.0, 'DNP', 5.9, 'BYE', 2.2, 0.3, 0.0, 0.0, 0.0, 0.6, 0.0, 7.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.5, 15.5, 10.1, 9.3, 13.5, 10.0, 'DNP', 14.9, 'BYE', 9.3, 9.1, 11.9, 9.9, 11.1, 9.0, 8.7, 16.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4040980.png",
    "name": "Irv Smith",
    "depthchart": "Starter: TE-1",
    "team": "Minnesota Vikings",
    "projected": 5.9,
    "opponent": "Detroit Lions",
    "home_away": "at ",
    "opp_rank_Pos": 29,
    "team_rank_Neu": 18,
    "avg_fp2": 6.62,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 9.97,
    "fanduelSalary": "$5600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e0aa19",
    "tmColorDark": "#300e5a",
    "tmColorLite_rgba": "rgba(224, 170, 25, 0.2)",
    "tmColorDark_rgba": "rgba(48, 14, 90, 0.2)",
    "tmTextLite": "#e0aa19",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/min.png",
    "headlineNews": "Irv Smith caught 6-of-9 targets for 53 yards and two touchdowns in the Vikings' Week 16 loss to the Saints.\n",
    "report": "",
    "analysis": "With Kyle Rudolph out, Smith became one of the best TE2 streaming options for the fantasy finals, and he more than lived up to the bill. His two touchdowns came on red zone targets. He also moved the chains between the 20s with Kirk Cousins in catch-up mode. Smith will close out the year as an upside TE2 as long as Rudolph misses again. The second-year pro could be an interesting late-round option in 2021 fantasy drafts depending on how the Vikings offseason shakes out.\n",
    "timestamp": "2020-12-26 12:50 AM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": 0.0,
    "week05": 8.4,
    "week06": 9.5,
    "week07": "BYE",
    "week08": 2.1,
    "week09": 14.0,
    "week10": "DNP",
    "week11": 3.3,
    "week12": "DNP",
    "week13": "DNP",
    "week14": 14.3,
    "week15": 5.2,
    "week16": 20.3,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 0.0, 8.4, 9.5, 'BYE', 2.1, 14.0, 'DNP', 3.3, 'DNP', 'DNP', 14.3, 5.2, 20.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 2.9, 1.4, 1.6, 'BYE', 9.7, 9.7, 'DNP', 3.0, 'DNP', 'DNP', 6.0, 9.2, 5.5, 5.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 1.1, 1.1, 2.0, 'BYE', 1.0, 0.3, 'DNP', 0.5, 'DNP', 'DNP', 1.1, 0.6, 0.0, 2.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  "rgba(224, 170, 25, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 6.2, 7.3, 8.3, 'BYE', 5.1, 5.4, 'DNP', 6.9, 'DNP', 'DNP', 6.7, 8.6, 9.2, 11.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3043275.png",
    "name": "Austin Hooper",
    "depthchart": "Starter: TE-1",
    "team": "Cleveland Browns",
    "projected": 5.7,
    "opponent": "Pittsburgh Steelers",
    "home_away": "",
    "opp_rank_Neg": 2,
    "team_rank_Neg": 24,
    "avg_fp2": 6.57,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 6.54,
    "fanduelSalary": "$5200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FF3C00",
    "tmColorDark": "#311D00",
    "tmColorLite_rgba": "rgba(255, 60, 0, 0.2)",
    "tmColorDark_rgba": "rgba(49, 29, 0, 0.2)",
    "tmTextLite": "#FF3C00",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
    "headlineNews": "Austin Hooper caught 7-of-15 targets for 71 yards in the Browns' Week 16 loss to the Jets.\n",
    "report": "",
    "analysis": "Hooper's workload had been ticking upwards in recent weeks after dealing with injuries and poor weather throughout October and November. His target share skyrocketed on Sunday after the Browns declared their top four receivers out as COVID-19 close contacts. Hooper essentially was Baker Mayfield's No. 1 receiver, and it came with mixed results. On the tight end scale, a 7-71-0 line is fantasy gold. He's unlikely to repeat in Week 17 against the Steelers, especially if Jarvis Landry and company return to the lineup as expected.\n",
    "timestamp": "2020-12-27 09:45 PM",
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.5, 3.2, 4.0, 11.9, 8.2, 7.7, 'DNP', 'DNP', 'BYE', 1.6, 4.8, 8.3, 3.4, 'DNP', 12.6, 10.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.9, 8.9, 6.4, 5.3, 3.3, 3.6, 'DNP', 'DNP', 'BYE', 4.9, 6.2, 12.8, 11.9, 'DNP', 11.4, 10.4, 5.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.9, 1.4, 1.1, 3.8, 0.9, 1.5, 'DNP', 'DNP', 'BYE', 4.5, 1.1, 1.9, 0.7, 'DNP', 1.5, 2.2, 1.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.1, 11.6, 11.9, 13.6, 11.5, 11.3, 'DNP', 'DNP', 'BYE', 11.4, 11.9, 13.0, 13.6, 'DNP', 11.6, 12.5, 12.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116164.png",
    "name": "Mike Gesicki",
    "depthchart": "Starter: TE-1",
    "team": "Miami Dolphins",
    "projected": 5.4,
    "opponent": "Buffalo Bills",
    "home_away": "at ",
    "opp_rank_Neu": 8,
    "team_rank_Neg": 25,
    "avg_fp2": 8.97,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 11.61,
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
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "source": "",
    "game_day_logo": "",
    "week01": 4.5,
    "week02": 23.0,
    "week03": 8.0,
    "week04": 2.0,
    "week05": 11.6,
    "week06": 0.0,
    "week07": "DNP",
    "week08": 1.3,
    "week09": 5.7,
    "week10": 5.0,
    "week11": 6.3,
    "week12": 10.5,
    "week13": 19.3,
    "week14": 21.0,
    "week15": "DNP",
    "week16": 7.4,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.5, 23.0, 8.0, 2.0, 11.6, 0.0, 'DNP', 1.3, 5.7, 5.0, 6.3, 10.5, 19.3, 21.0, 'DNP', 7.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.1, 7.0, 11.1, 11.1, 5.1, 7.4, 'DNP', 6.5, 8.1, 3.5, 4.4, 8.1, 7.4, 9.4, 'DNP', 6.5, 5.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 3.7, 1.1, 0.0, 0.0, 0.6, 'DNP', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.4, 'DNP', 0.0, 0.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 142, 151, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.1, 13.3, 12.4, 9.5, 12.3, 7.9, 'DNP', 9.6, 12.1, 9.0, 8.5, 11.0, 12.1, 12.6, 'DNP', 11.3, 12.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4045305.png",
    "name": "Ian Thomas",
    "depthchart": "Starter: TE-1",
    "team": "Carolina Panthers",
    "projected": 5.3,
    "opponent": "New Orleans Saints",
    "home_away": "",
    "opp_rank_Neg": 5,
    "team_rank_Neu": 17,
    "avg_fp2": 2.01,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 11.09,
    "fanduelSalary": "$4400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0085CA",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 133, 202, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#0085CA",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/car.png",
    "headlineNews": "Ian Thomas (knee) is considered questionable for Week 14 against the Broncos.\u00a0\n",
    "report": "",
    "analysis": "Thomas has run the ninth most pass routes among tight ends this season and has the 45th most tight end targets -- an incredible feat we may never witness again. At least he's getting his exercise with weekly wind sprints.\u00a0Chris Manhertz, who has played half the Panthers' offensive snaps, would likely serve as the team's primary pass catching tight end if Thomas is out. Neither are viable fantasy options against Denver.\u00a0\n",
    "timestamp": "2020-12-11 06:48 PM",
    "source": "Alaina Getzenberg on Twitter ",
    "game_day_logo": "",
    "week01": 2.6,
    "week02": 0.0,
    "week03": 1.4,
    "week04": 7.5,
    "week05": 0.0,
    "week06": 1.4,
    "week07": 1.6,
    "week08": 4.3,
    "week09": 1.3,
    "week10": 1.2,
    "week11": 0.0,
    "week12": 0.9,
    "week13": "BYE",
    "week14": 3.5,
    "week15": 4.4,
    "week16": 0.0,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.6, 0.0, 1.4, 7.5, 0.0, 1.4, 1.6, 4.3, 1.3, 1.2, 0.0, 0.9, 'BYE', 3.5, 4.4, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.1, 8.4, 8.5, 7.7, 8.0, 5.6, 4.8, 5.2, 4.7, 4.8, 6.1, 7.0, 'BYE', 5.7, 3.7, 2.0, 5.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 1.4, 0.0, 0.0, 0.0, 0.0, 0.2, 0.0, 3.6, 0.0, 0.0, 0.0, 'BYE', 0.0, 0.0, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 133, 202, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.2, 11.4, 7.6, 6.9, 7.4, 8.5, 9.4, 7.4, 9.8, 8.3, 8.6, 8.5, 'BYE', 9.0, 6.3, 7.9, 6.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4212989.png",
    "name": "Dan Arnold",
    "depthchart": "Starter: TE-1",
    "team": "Arizona Cardinals",
    "projected": 5.2,
    "opponent": "Los Angeles Rams",
    "home_away": "at ",
    "opp_rank_Neg": 1,
    "team_rank_Neu": 15,
    "avg_fp2": 5.01,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 9.6,
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
    "headlineNews": "Dan Arnold caught 3-of-5 targets for 25 yards in the Cardinals' Week 16 loss to the 49ers.\u00a0\n",
    "report": "",
    "analysis": "Arnold now has 15 targets over his past four games. He left this game for a bit while being evaluated for a concussion, but returned shortly thereafter. Arnold in Week 17 against the Rams will\u00a0only a streaming option in deeper formats.\u00a0\n",
    "timestamp": "2020-12-27 02:52 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 3.1,
    "week02": 3.6,
    "week03": 1.6,
    "week04": 5.9,
    "week05": 0.0,
    "week06": 0.0,
    "week07": 6.7,
    "week08": "BYE",
    "week09": 2.1,
    "week10": 5.4,
    "week11": 6.9,
    "week12": 2.2,
    "week13": 19.1,
    "week14": 9.7,
    "week15": 6.9,
    "week16": 2.0,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.1, 3.6, 1.6, 5.9, 0.0, 0.0, 6.7, 'BYE', 2.1, 5.4, 6.9, 2.2, 19.1, 9.7, 6.9, 2.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.4, 5.3, 4.4, 5.8, 2.9, 0.8, 2.8, 'BYE', 2.3, 1.1, 0.7, 2.5, 1.5, 4.4, 9.7, 6.4, 5.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.2, 0.0, 1.6, 0.0, 0.0, 1.2, 0.4, 'BYE', 3.0, 0.2, 3.0, 1.8, 0.0, 3.8, 0.0, 0.8, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.9, 7.7, 10.8, 10.0, 7.0, 9.7, 7.3, 'BYE', 4.8, 5.0, 7.3, 8.3, 6.9, 8.7, 5.1, 10.6, 9.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/17453.png",
    "name": "Cameron Brate",
    "depthchart": "Backup: TE-2",
    "team": "Tampa Bay Buccaneers",
    "projected": 4.9,
    "opponent": "Atlanta Falcons",
    "home_away": "",
    "opp_rank_Pos": 31,
    "team_rank_Pos": 3,
    "avg_fp2": 3.51,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 13.04,
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
    "headlineNews": "ESPN's Adam Schefter reports Buccaneers TE Cameron Brate (illness) is expected to play in Week 14 against the Vikings.\n",
    "report": "",
    "analysis": "Brate's illness was clearly non-COVID-19 related as he's suiting up after being added to the injury report on Saturday. He doesn't offer much fantasy value on his own but his presence does slightly dock the projection of Rob Gronkowski. Gronk still remains a TE1 this week.\n",
    "timestamp": "2020-12-13 03:40 PM",
    "source": "Adam Schefter on Twitter",
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 0.0, 'DNP', 'DNP', 6.9, 0.8, 1.3, 4.5, 0.0, 10.6, 3.8, 5.4, 'BYE', 1.4, 7.4, 3.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.0, -0.6, 'DNP', 'DNP', 0.7, 2.3, 3.2, 3.5, 3.6, 3.6, 4.9, 3.4, 'BYE', 2.5, 2.1, 1.6, 4.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.9, 0.9, 'DNP', 'DNP', 0.1, 0.8, 0.3, 0.7, 0.5, 0.6, 0.8, 0.1, 'BYE', 0.7, 0.9, 0.8, 0.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(213, 10, 10, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.0, 11.5, 'DNP', 'DNP', 10.8, 10.1, 10.5, 10.6, 10.8, 12.8, 11.8, 11.4, 'BYE', 10.8, 10.2, 10.9, 10.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3120303.png",
    "name": "Ross Dwelley",
    "depthchart": "Backup: TE-2",
    "team": "San Francisco 49ers",
    "projected": 4.8,
    "opponent": "Seattle Seahawks",
    "home_away": "",
    "opp_rank_Pos": 32,
    "team_rank_Neu": 12,
    "avg_fp2": 2.46,
    "opp_rank_allowed_fp2_Neu": 15,
    "opp_avg_allowed_fp2": 9.79,
    "fanduelSalary": "$4200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "Ross Dwelley caught 2-of-2 targets for 20 yards in the 49ers' Week 14 loss to Washington.\u00a0\n",
    "report": "",
    "analysis": "Dwelley continues to run well behind Jordan Reed as the Niners' TE1. He would be a fine waiver pickup if Reed misses time in the coming weeks. Otherwise, he shouldn't be on fantasy rosters.\u00a0\n",
    "timestamp": "2020-12-14 03:33 AM",
    "source": null,
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": 6.9,
    "week04": 0.0,
    "week05": 0.0,
    "week06": 0.0,
    "week07": 0.0,
    "week08": 8.1,
    "week09": 6.7,
    "week10": 2.7,
    "week11": "BYE",
    "week12": 0.8,
    "week13": 3.9,
    "week14": 3.0,
    "week15": 3.8,
    "week16": 0.0,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 6.9, 0.0, 0.0, 0.0, 0.0, 8.1, 6.7, 2.7, 'BYE', 0.8, 3.9, 3.0, 3.8, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 2.7, 4.9, 0.7, 0.9, -1.2, 3.0, 1.6, 2.6, 'BYE', 2.1, 1.5, 0.5, 1.1, 0.2, 4.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 'BYE', 1.1, 0.0, 0.0, 0.0, 0.1, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 2.8, 4.6, 9.7, 9.7, 4.5, 9.1, 4.9, 5.1, 'BYE', 6.5, 5.1, 8.9, 4.8, 5.3, 4.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4240861.png",
    "name": "Dalton Keene",
    "depthchart": "Starter: TE-1",
    "team": "New England Patriots",
    "projected": 4.7,
    "opponent": "New York Jets",
    "home_away": "",
    "opp_rank_Pos": 30,
    "team_rank_Neg": 30,
    "avg_fp2": 0.4,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 15.17,
    "fanduelSalary": "$4100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#C60C30",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png",
    "headlineNews": "Patriots placed TE\u00a0Dalton Keene (knee) on injured reserve.\n",
    "report": "",
    "analysis": "Keene has surpassed Devin Asiasi on the depth chart, but it has not translated to fantasy relevance. The third-round rookie has caught one pass all season. He must miss at least the next three games.\u00a0\n",
    "timestamp": "2020-11-10 10:11 PM",
    "source": "Mike Reiss on Twitter ",
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
    "week11": "DNP",
    "week12": "DNP",
    "week13": 0.0,
    "week14": 0.0,
    "week15": 0.7,
    "week16": 0.0,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 0.0, 0.0, 0.7, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 2.6, 2.0, 5.5, 1.4, 4.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 0.0, 0.0, 0.4, 0.3, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 4.8, 5.9, 6.3, 6.9, 9.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3127292.png",
    "name": "Will Dissly",
    "depthchart": "Backup: TE-2",
    "team": "Seattle Seahawks",
    "projected": 4.6,
    "opponent": "San Francisco 49ers",
    "home_away": "at ",
    "opp_rank_Neg": 4,
    "team_rank_Neu": 14,
    "avg_fp2": 3.11,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 6.59,
    "fanduelSalary": "$4400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#69BE28",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(105, 190, 40, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#69BE28",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
    "headlineNews": "Jacob\u00a0Hollister caught both of his targets for 17 yards and a touchdown in the Seahawks' Week 15 win against the Football Team.\u00a0\n",
    "report": "",
    "analysis": "Hollister, who continues to lead Seattle tight ends in pass routes, caught Russell Wilson's lone touchdown pass in Seattle's depressingly scaled down passing attack. Will Dissly did not see a target against Washington. Greg Olsen (foot) returning from injured reserve in the next week or two would end Hollister's fantasy relevance for now. Even without Olsen, he's a borderline streaming option in 14-team formats.\u00a0\n",
    "timestamp": "2020-12-21 03:49 PM",
    "source": null,
    "game_day_logo": "",
    "week01": 1.8,
    "week02": 1.4,
    "week03": 1.5,
    "week04": 2.5,
    "week05": 8.4,
    "week06": "BYE",
    "week07": 4.8,
    "week08": 2.2,
    "week09": 3.1,
    "week10": 2.1,
    "week11": 1.5,
    "week12": 0.0,
    "week13": 4.8,
    "week14": 9.3,
    "week15": 0.0,
    "week16": 3.2,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.8, 1.4, 1.5, 2.5, 8.4, 'BYE', 4.8, 2.2, 3.1, 2.1, 1.5, 0.0, 4.8, 9.3, 0.0, 3.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.2, 2.8, 6.1, -0.9, 5.6, 'BYE', 1.5, 2.2, 3.4, 1.1, 3.9, 4.8, 3.6, 5.4, 5.5, 2.5, 4.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 3.7, 2.7, 0.0, 2.0, 'BYE', 1.8, 0.9, 0.0, 0.3, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.1, 15.1, 16.7, 8.8, 16.0, 'BYE', 15.5, 15.5, 12.7, 14.2, 8.1, 8.8, 9.2, 10.4, 12.0, 5.7, 13.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15887.png",
    "name": "Ryan Griffin",
    "depthchart": "Backup: TE-2",
    "team": "New York Jets",
    "projected": 4.5,
    "opponent": "New England Patriots",
    "home_away": "at ",
    "opp_rank_Neu": 7,
    "team_rank_Neg": 32,
    "avg_fp2": 0.94,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 7.71,
    "fanduelSalary": "$4100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#125740",
    "tmColorDark": "#003f2d",
    "tmColorLite_rgba": "rgba(18, 87, 64, 0.2)",
    "tmColorDark_rgba": "rgba(0, 63, 45, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png",
    "headlineNews": "Jets activated TE Ryan Griffin (ankle) from the PUP list.\n",
    "report": "",
    "analysis": "Griffin had a career year with Chris Herndon suspended and injured last season. The Jets gave him an extension in November and picked\u00a0up his option this offseason despite needing ankle surgery. Griffin will be limited in training camp but this puts him on track for Week 1.\n",
    "timestamp": "2020-08-22 04:37 PM",
    "source": "ESPN",
    "game_day_logo": "",
    "week01": 0.0,
    "week02": 0.0,
    "week03": 0.0,
    "week04": 2.5,
    "week05": 0.0,
    "week06": 2.7,
    "week07": 0.0,
    "week08": 0.0,
    "week09": 3.8,
    "week10": "DNP",
    "week11": 0.0,
    "week12": "DNP",
    "week13": 4.1,
    "week14": "DNP",
    "week15": 0.0,
    "week16": "DNP",
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 0.0, 0.0, 2.5, 0.0, 2.7, 0.0, 0.0, 3.8, 'DNP', 0.0, 'DNP', 4.1, 'DNP', 0.0, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.5, 0.4, -0.5, 1.3, 0.7, 2.0, 1.3, 2.4, 1.0, 'DNP', 4.7, 'DNP', 1.5, 'DNP', 0.2, 'DNP', 4.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.8, 4.1, 0.0, 0.0, 0.0, 0.3, 0.0, 0.0, 0.0, 'DNP', 0.0, 'DNP', 0.0, 'DNP', 0.0, 'DNP', 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  "rgba(18, 87, 64, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.7, 11.7, 8.0, 8.6, 7.1, 7.9, 9.2, 8.1, 5.1, 'DNP', 8.0, 'DNP', 6.1, 'DNP', 6.5, 'DNP', 7.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3930086.png",
    "name": "Dawson Knox",
    "depthchart": "Starter: TE-1",
    "team": "Buffalo Bills",
    "projected": 4.2,
    "opponent": "Miami Dolphins",
    "home_away": "",
    "opp_rank_Neu": 19,
    "team_rank_Pos": 2,
    "avg_fp2": 4.65,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 8.49,
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
    "headlineNews": "Dawson Knox caught 3-of-4 targets for 51 yards in the Bills' Week 16 win over the Patriots.\n",
    "report": "",
    "analysis": "His lone missed connection was a bad drop in the end zone on a should-be touchdown. Knox's 51 yards were a distant second on the team behind Stefon Diggs' 9-145-3 explosion. Knox has been getting more involved in recent weeks as the clear No. 1 tight end and will be on the streaming map for Week 17 against the Dolphins.\n",
    "timestamp": "2020-12-29 04:37 AM",
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.6, 2.3, 'DNP', 2.6, 2.0, 'DNP', 'DNP', 'DNP', 0.0, 2.6, 'BYE', 6.7, 10.7, 3.4, 10.6, 6.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.3, 5.7, 'DNP', 5.1, 5.4, 'DNP', 'DNP', 'DNP', 10.3, 3.1, 'BYE', 4.7, 3.7, 8.3, 3.8, 3.7, 4.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.1, 3.9, 'DNP', 2.6, 1.2, 'DNP', 'DNP', 'DNP', 0.7, 1.3, 'BYE', 1.6, 0.8, 0.8, 1.6, 0.3, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [7.6, 11.2, 'DNP', 7.2, 9.3, 'DNP', 'DNP', 'DNP', 6.0, 4.8, 'BYE', 6.7, 7.7, 5.7, 7.4, 7.3, 9.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4258595.png",
    "name": "Cole Kmet",
    "depthchart": "Starter: TE-1",
    "team": "Chicago Bears",
    "projected": 4.0,
    "opponent": "Green Bay Packers",
    "home_away": "",
    "opp_rank_Neg": 6,
    "team_rank_Neu": 22,
    "avg_fp2": 2.83,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 8.25,
    "fanduelSalary": "$5000",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Shoulder",
    "tmColorLite": "#c36835",
    "tmColorDark": "#0B162A",
    "tmColorLite_rgba": "rgba(195, 104, 53, 0.2)",
    "tmColorDark_rgba": "rgba(11, 22, 42, 0.2)",
    "tmTextLite": "#c36835",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png",
    "headlineNews": "Cole Kmet (shoulder) is considered questionable for Week 17 against the Packers.\u00a0\n",
    "report": "",
    "analysis": "Kmet suffered the shoulder injury during practice this week. He's now iffy to play in the Bears' final regular season game. If Kmet is sidelined, Jimmy Graham would become an interesting fantasy option. Even while running fewer pass routes and playing fewer snaps than Kmet over the past four weeks, Graham has outscored Kmet on the strength of three touchdowns over that stretch. Tight ends average six targets per game against the Packers.\u00a0\n",
    "timestamp": "2021-01-01 07:29 PM",
    "source": "Adam Caplan on Twitter ",
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 1.7, 0.0, 0.0, 0.0, 9.0, 5.5, 0.7, 0.0, 1.2, 'BYE', 1.3, 12.2, 6.1, 2.2, 2.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.2, -0.2, 6.2, -1.7, -2.1, -2.3, 1.2, 1.4, 2.6, 1.2, 'BYE', -0.4, 2.5, 5.6, 3.5, 8.0, 4.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 'BYE', 0.0, 0.0, 0.0, 0.0, 3.9, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  "rgba(195, 104, 53, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.3, 7.0, 4.6, 4.7, 6.5, 4.4, 0.0, 3.2, 7.0, 2.7, 'BYE', 5.7, 3.5, 7.4, 5.8, 7.6, 7.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2979590.png",
    "name": "Jesse James",
    "depthchart": "Backup: TE-2",
    "team": "Detroit Lions",
    "projected": 3.6,
    "opponent": "Minnesota Vikings",
    "home_away": "",
    "opp_rank_Pos": 24,
    "team_rank_Neu": 11,
    "avg_fp2": 2.08,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 9.89,
    "fanduelSalary": "$4200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0076B6",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(0, 118, 182, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#0076B6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/det.png",
    "headlineNews": "Lions TE\u00a0T.J. Hockenson (toe) is questionable for Week 10 against Washington.\u00a0\n",
    "report": "",
    "analysis": "Added to Thursday's injury report, Hockensen was able to practice Friday -- a good sign for his Week 10 availability. The Lions can ill afford to lose their big tight end with Kenny Golladay (hip) sidelined. Jesse James, listed on the depth chart as the team's No. 2 tight end, would become a desperation streamer if Hockensen can't go.\u00a0\n",
    "timestamp": "2020-11-13 08:53 PM",
    "source": "Adam Schefter on Twitter ",
    "game_day_logo": "",
    "week01": 0.0,
    "week02": 0.0,
    "week03": 10.3,
    "week04": 3.6,
    "week05": "BYE",
    "week06": 0.8,
    "week07": 0.0,
    "week08": 2.8,
    "week09": 0.5,
    "week10": 1.9,
    "week11": 0.8,
    "week12": 1.5,
    "week13": 7.4,
    "week14": 0.0,
    "week15": 1.6,
    "week16": 0.0,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 0.0, 10.3, 3.6, 'BYE', 0.8, 0.0, 2.8, 0.5, 1.9, 0.8, 1.5, 7.4, 0.0, 1.6, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.0, -0.4, -0.9, 2.4, 'BYE', 0.6, 2.2, 0.1, 0.6, 1.5, 1.9, 3.4, 2.6, 0.6, 1.0, 0.8, 3.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.3, 0.8, 1.4, 'BYE', 0.8, 0.3, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 118, 182, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.6, 9.7, 8.3, 8.1, 'BYE', 10.0, 8.0, 7.4, 7.7, 8.1, 7.9, 8.4, 7.7, 8.6, 7.3, 7.2, 6.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3912092.png",
    "name": "Donald Parham",
    "depthchart": "Starter: TE-1",
    "team": "Los Angeles Chargers",
    "projected": 3.4,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Neu": 15,
    "team_rank_Pos": 6,
    "avg_fp2": 2.52,
    "opp_rank_allowed_fp2_Pos": 24,
    "opp_avg_allowed_fp2": 11.43,
    "fanduelSalary": "$4200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0080C6",
    "tmColorDark": "#002A5E",
    "tmColorLite_rgba": "rgba(0, 128, 198, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 94, 0.2)",
    "tmTextLite": "#0080C6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lac.png",
    "headlineNews": "Donald Parham caught 2-of-3 targets for 47 yards in the Chargers' Week 16 win over the Broncos.\u00a0\n",
    "report": "",
    "analysis": "With Hunter Henry (COVID-19) sidelined, The 6'8\" XFL legend played 81 percent of the Bolts' offensive snaps, getting 20 snaps in the slot or out wide. It was the perfect usage for those who streamed Parham, but didn't generate a whole lot of opportunity. Stephen Anderson, who caught four of six targets for 48 yards,\u00a0operated as the team's top pass catching tight end with Henry out. Anderson would seem to be the safer streaming option in Week 17 if Henry can't return from the reserve/COVID-19 list.\u00a0\n",
    "timestamp": "2020-12-28 02:03 PM",
    "source": "Adam Levitan on Twitter ",
    "game_day_logo": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": 0.0,
    "week06": "DNP",
    "week07": 8.7,
    "week08": 0.0,
    "week09": 0.0,
    "week10": 1.8,
    "week11": 0.0,
    "week12": 0.0,
    "week13": 3.1,
    "week14": "DNP",
    "week15": 0.0,
    "week16": 5.7,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 0.0, 'DNP', 8.7, 0.0, 0.0, 1.8, 0.0, 0.0, 3.1, 'DNP', 0.0, 5.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 2.4, 'DNP', 6.9, 3.2, -1.2, 3.0, 3.0, 1.6, 1.3, 'DNP', 1.0, 5.2, 3.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 0.0, 'DNP', 0.2, 0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 'DNP', 0.2, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 128, 198, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 7.0, 'DNP', 5.2, 5.6, 7.7, 6.6, 6.3, 6.0, 1.1, 'DNP', 7.6, 0.8, 5.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3911853.png",
    "name": "Adam Trautman",
    "depthchart": "Backup: TE-2",
    "team": "New Orleans Saints",
    "projected": 3.2,
    "opponent": "Carolina Panthers",
    "home_away": "at ",
    "opp_rank_Neu": 17,
    "team_rank_Neu": 19,
    "avg_fp2": 2.11,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 11.31,
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 0.0, 'DNP', 'BYE', 'DNP', 0.0, 11.4, 0.0, 2.4, 1.3, 2.4, 1.7, 0.0, 5.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 1.3, 'DNP', 'BYE', 'DNP', -1.4, -1.1, 0.8, -0.3, -0.3, 2.0, 0.9, 2.5, 0.8, 3.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 0.0, 'DNP', 'BYE', 'DNP', 0.0, 0.1, 0.0, 0.0, 0.3, 0.0, 0.0, 0.1, 1.8, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(155, 132, 92, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 5.6, 'DNP', 'BYE', 'DNP', 6.2, 0.7, 1.8, 7.4, 2.7, 6.4, 3.9, 2.1, 3.4, 5.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3918639.png",
    "name": "Gerald Everett",
    "depthchart": "Backup: TE-2",
    "team": "Los Angeles Rams",
    "projected": 3.0,
    "opponent": "Arizona Cardinals",
    "home_away": "",
    "opp_rank_Neu": 10,
    "team_rank_Neu": 12,
    "avg_fp2": 4.59,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 8.51,
    "fanduelSalary": "$4500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Gerald Everett caught 2-of-4 targets for 28 yards in the Rams' Week 15 loss to the Jets.\n",
    "report": "",
    "analysis": "Everett got out-shined by Tyler Higbee in this tight end-positive matchup. That was also the case for Week 10 against the Seahawks, whom the Rams will be rematching with in Week 16. Everett offers scant TE2 juice for the fantasy finals.\u00a0\n",
    "timestamp": "2020-12-21 01:11 AM",
    "source": null,
    "game_day_logo": "",
    "week01": 1.2,
    "week02": 0.0,
    "week03": 4.4,
    "week04": 5.7,
    "week05": 11.0,
    "week06": 4.2,
    "week07": 10.8,
    "week08": 5.7,
    "week09": "BYE",
    "week10": 3.7,
    "week11": 4.7,
    "week12": 2.6,
    "week13": 7.4,
    "week14": 1.4,
    "week15": 3.8,
    "week16": 2.3,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.2, 0.0, 4.4, 5.7, 11.0, 4.2, 10.8, 5.7, 'BYE', 3.7, 4.7, 2.6, 7.4, 1.4, 3.8, 2.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.1, 4.0, -1.0, 4.7, 2.4, 3.5, 4.3, 1.2, 'BYE', 4.9, 6.2, 5.0, 3.6, 4.8, 4.4, 4.0, 3.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.0, 0.5, 0.6, 0.0, 0.0, 0.0, 'BYE', 4.8, 0.0, 1.4, 0.5, 0.9, 0.0, 1.5, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [6.3, 8.9, 6.2, 6.2, 8.5, 8.2, 7.7, 7.7, 'BYE', 12.7, 8.5, 10.3, 8.9, 8.9, 7.6, 10.6, 9.4]
                    }
                    
                    ]
               }
            }];



$scope.positionDST = [{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/PIT.png",
    "name": "Pittsburgh Steelers",
    "depthchart": "",
    "team": "Pittsburgh Steelers",
    "projected": 9.0,
    "opponent": "Cleveland Browns",
    "opp_rank_pts": 14,
    "opp_avg_pts": 25.47,
    "home_away": "at ",
    "team_rank_allowed_pts": 3,
    "team_avg_allowed_pts": 19.33,
    "team_ranked_takeaways": 17,
    "team_avg_takeaways": 1.27,
    "opp_ranked_giveaways": 11,
    "opp_avg_giveaways": 1.2,
    "fanduelSalary": "$4500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#000000",
    "tmTextLite": "#FFB612",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/pit.png",
    "headlineNews": "The Pittsburgh Post Gazette reports Joe Haden (concussion) is likely to return in Week 15.\n",
    "report": "",
    "analysis": "Haden spent last week in the concussion protocol. He's expected to return to practice this week\u00a0and is on track for\u00a0Week 15's game with the Bengals. Playing on Monday night gives Haden an extra day to get cleared.\n",
    "timestamp": "",
    "source": "Pittsburgh Post-Gazette",
    "game_day_logo": "",
    "avg_fp2": 8.8,
    "week01": 8.0,
    "week02": 13.0,
    "week03": 7.0,
    "week04": "DNP",
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.0, 13.0, 7.0, 'DNP', 8.0, 18.0, 2.0, 12.0, 7.0, 12.0, 17.0, 8.0, 3.0, 6.0, 2.0, 9.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.9, 7.8, 8.4, 'DNP', 8.0, 7.8, 4.6, 6.1, 7.4, 7.0, 8.1, 5.4, 8.8, 5.8, 8.7, 6.9, 9.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.9, 1.7, 2.1, 'DNP', 2.8, 1.1, 1.9, 1.9, 1.9, 2.1, 2.3, 3.3, 2.7, 2.3, 3.3, 1.7, 2.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.7, 14.9, 14.7, 'DNP', 14.8, 14.9, 13.7, 15.0, 14.8, 14.7, 14.3, 14.6, 14.8, 14.4, 15.1, 15.1, 14.2]
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
    "opponent": "New York Jets",
    "opp_rank_pts": 32,
    "opp_avg_pts": 15.27,
    "home_away": "",
    "team_rank_allowed_pts": 11,
    "team_avg_allowed_pts": 22.6,
    "team_ranked_takeaways": 21,
    "team_avg_takeaways": 1.2,
    "opp_ranked_giveaways": 5,
    "opp_avg_giveaways": 1.0,
    "fanduelSalary": "$4800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#002244",
    "tmTextLite": "#C60C30",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png",
    "headlineNews": "Patriots placed LB\u00a0Josh Uche on injured reserve with a foot injury, ending his season.\u00a0\n",
    "report": "",
    "analysis": "It's really bad news, as the No. 60 overall pick of the draft missed Weeks 3-7 with a foot issue. Hopefully it is not a serious aggravation. Uche was making some big plays in the second half of the season as he averaged roughly 25-40 snaps.\u00a0\n",
    "timestamp": "",
    "source": "Mike Reiss on Twitter ",
    "game_day_logo": "",
    "avg_fp2": 5.47,
    "week01": 11.0,
    "week02": 0.0,
    "week03": 9.0,
    "week04": 4.0,
    "week05": "DNP",
    "week06": 9.0,
    "week07": 4.0,
    "week08": 3.0,
    "week09": 3.0,
    "week10": 5.0,
    "week11": 0.0,
    "week12": 5.0,
    "week13": 25.0,
    "week14": 4.0,
    "week15": 4.0,
    "week16": -4.0,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.0, 0.0, 9.0, 4.0, 'DNP', 9.0, 4.0, 3.0, 3.0, 5.0, 0.0, 5.0, 25.0, 4.0, 4.0, -4.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.2, 7.7, 6.5, 4.4, 'DNP', 8.3, 6.9, 7.1, 9.3, 6.2, 7.2, 6.4, 4.9, 7.8, 6.5, 6.4, 8.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.5, 2.3, 1.4, 0.9, 'DNP', 1.5, 2.7, 2.2, 2.7, 1.5, 1.8, 1.0, 1.6, 1.2, 2.6, 2.4, 2.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.9, 15.6, 11.5, 13.1, 'DNP', 14.5, 15.7, 14.8, 15.4, 13.4, 13.5, 13.2, 13.3, 13.8, 14.3, 15.4, 15.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/BAL.png",
    "name": "Baltimore Ravens",
    "depthchart": "",
    "team": "Baltimore Ravens",
    "projected": 8.0,
    "opponent": "Cincinnati Bengals",
    "opp_rank_pts": 27,
    "opp_avg_pts": 20.53,
    "home_away": "at ",
    "team_rank_allowed_pts": 4,
    "team_avg_allowed_pts": 20.0,
    "team_ranked_takeaways": 6,
    "team_avg_takeaways": 1.47,
    "opp_ranked_giveaways": 25,
    "opp_avg_giveaways": 1.53,
    "fanduelSalary": "$4900",
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
    "avg_fp2": 6.87,
    "week01": 11.0,
    "week02": 7.0,
    "week03": 7.0,
    "week04": 6.0,
    "week05": 20.0,
    "week06": 5.0,
    "week07": "DNP",
    "week08": 4.0,
    "week09": 8.0,
    "week10": 1.0,
    "week11": 3.0,
    "week12": 8.0,
    "week13": 3.0,
    "week14": 0.0,
    "week15": 10.0,
    "week16": 10.0,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.0, 7.0, 7.0, 6.0, 20.0, 5.0, 'DNP', 4.0, 8.0, 1.0, 3.0, 8.0, 3.0, 0.0, 10.0, 10.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.3, 7.0, 7.7, 7.8, 10.0, 7.1, 'DNP', 8.2, 6.3, 6.6, 7.8, 5.0, 9.3, 6.9, 8.3, 8.8, 8.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.2, 2.7, 1.9, 3.9, 2.2, 1.3, 'DNP', 4.4, 0.8, 0.6, 0.0, 0.9, 1.7, 2.2, 3.4, 3.3, 1.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.1, 16.7, 15.3, 16.4, 16.0, 14.0, 'DNP', 19.1, 14.2, 15.0, 13.9, 16.4, 12.9, 14.1, 16.6, 16.6, 14.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/PHI.png",
    "name": "Philadelphia Eagles",
    "depthchart": "",
    "team": "Philadelphia Eagles",
    "projected": 7.9,
    "opponent": "Washington Football Team",
    "opp_rank_pts": 26,
    "opp_avg_pts": 21.0,
    "home_away": "",
    "team_rank_allowed_pts": 22,
    "team_avg_allowed_pts": 26.53,
    "team_ranked_takeaways": 1,
    "team_avg_takeaways": 1.93,
    "opp_ranked_giveaways": 30,
    "opp_avg_giveaways": 1.67,
    "fanduelSalary": "$4300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#386168",
    "tmColorDark": "#004C54",
    "tmTextLite": "#FFFFFF",
    "tmColorLite_rgba": "rgba(56, 97, 104, 0.2)",
    "tmColorDark_rgba": "rgba(0, 76, 84, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    "headlineNews": "Eagles DT\u00a0Fletcher Cox (neck) won't play in Week 17 against Washington.\n",
    "report": "",
    "analysis": "Philadelphia will also sit\u00a0Derek Barnett, Shaun Bradley, and\u00a0Jordan Mailata on defense. With nothing to play for, the Eagles are clearly packing it in on the 2020 season. Miles Sanders, DeSean Jackson, and Dallas Goedert have also been ruled out.\n",
    "timestamp": "",
    "source": "Philadelphia Eagles on Twitter",
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "avg_fp2": 5.93,
    "week01": 3.0,
    "week02": 1.0,
    "week03": 8.0,
    "week04": 12.0,
    "week05": -1.0,
    "week06": 14.0,
    "week07": 9.0,
    "week08": 14.0,
    "week09": "BYE",
    "week10": 3.0,
    "week11": 8.0,
    "week12": 2.0,
    "week13": 1.0,
    "week14": 9.0,
    "week15": 6.0,
    "week16": 0.0,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.0, 1.0, 8.0, 12.0, -1.0, 14.0, 9.0, 14.0, 'BYE', 3.0, 8.0, 2.0, 1.0, 9.0, 6.0, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.0, 7.2, 7.1, 6.1, 6.1, 6.4, 7.2, 7.8, 'BYE', 6.1, 7.8, 4.6, 4.0, 5.6, 5.1, 5.5, 7.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.9, 0.8, 3.4, 1.7, 2.2, 1.5, 2.1, 1.4, 'BYE', 2.3, 2.1, 1.5, 1.8, 1.9, 1.5, 0.9, 2.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.3, 12.9, 15.0, 13.7, 14.6, 14.2, 14.4, 14.7, 'BYE', 14.6, 14.5, 14.2, 13.7, 14.0, 14.2, 13.4, 15.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/LA.png",
    "name": "Los Angeles Rams",
    "depthchart": "",
    "team": "Los Angeles Rams",
    "projected": 7.8,
    "opponent": "Arizona Cardinals",
    "opp_rank_pts": 10,
    "opp_avg_pts": 26.87,
    "home_away": "",
    "team_rank_allowed_pts": 2,
    "team_avg_allowed_pts": 19.27,
    "team_ranked_takeaways": 6,
    "team_avg_takeaways": 1.47,
    "opp_ranked_giveaways": 11,
    "opp_avg_giveaways": 1.2,
    "fanduelSalary": "$4700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmTextLite": "#866D4B",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Rams placed DL Michael\u00a0Brockers on the reserve/COVID-19 list.\u00a0\n",
    "report": "",
    "analysis": "It's not clear whether Brockers is considered a close contact or tested positive for COVID-19. Either way, the Rams will be without Brockers this week against the Cardinals. The team is missing a number of starters in a must-win game.\u00a0\n",
    "timestamp": "",
    "source": "Aaron Wilson on Twitter ",
    "game_day_logo": "",
    "avg_fp2": 7.13,
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.0, 5.0, 4.0, 11.0, 12.0, 0.0, 12.0, 4.0, 'BYE', 13.0, 5.0, 9.0, 5.0, 15.0, 2.0, 6.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.5, 6.5, 6.4, 7.8, 8.4, 6.9, 6.4, 5.2, 'BYE', 6.4, 6.3, 7.5, 7.4, 6.7, 10.2, 5.6, 7.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.4, 0.4, 0.8, 1.7, 0.2, 0.6, 0.3, 0.9, 'BYE', 1.1, 1.5, 1.1, 1.5, 0.0, 0.6, 0.0, 0.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.2, 13.3, 14.8, 15.4, 14.4, 14.8, 14.0, 14.2, 'BYE', 13.7, 14.7, 14.6, 14.0, 15.4, 12.9, 13.9, 13.4]
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
    "opponent": "Jacksonville Jaguars",
    "opp_rank_pts": 30,
    "opp_avg_pts": 19.47,
    "home_away": "",
    "team_rank_allowed_pts": 12,
    "team_avg_allowed_pts": 23.07,
    "team_ranked_takeaways": 17,
    "team_avg_takeaways": 1.27,
    "opp_ranked_giveaways": 15,
    "opp_avg_giveaways": 1.27,
    "fanduelSalary": "$5000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#014683",
    "tmColorDark": "#002C5F",
    "tmTextLite": "#FFFFFF",
    "tmColorLite_rgba": "rgba(1, 70, 131, 0.2)",
    "tmColorDark_rgba": "rgba(0, 44, 95, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png",
    "headlineNews": "Colts DT\u00a0DeForest Buckner (ankle) didn't practice Friday and is questionable for Week 15 against the Texans.\u00a0\n",
    "report": "",
    "analysis": "The usually stout Indianapolis front seven has been far less imposing when Buckner has missed games this season. Buckner injured his ankle during Thursday's practice and missed Friday's practice entirely -- a bad sign for his Week 15 availability. His absence would be a boon for Deshaun Watson and the Houston offense.\u00a0\n",
    "timestamp": "",
    "source": "Mike Chappell on Twitter ",
    "game_day_logo": "",
    "avg_fp2": 7.27,
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.0, 19.0, 14.0, 7.0, 11.0, 6.0, 'BYE', 9.0, 4.0, 2.0, 8.0, -3.0, 12.0, 6.0, 10.0, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.8, 6.8, 8.6, 5.9, 6.5, 8.2, 'BYE', 6.8, 6.9, 4.4, 6.3, 6.9, 6.1, 5.6, 7.8, 6.0, 7.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.4, 1.2, 0.2, 2.7, 0.1, 1.5, 'BYE', 1.0, 1.3, 1.3, 1.1, 1.4, 1.1, 0.4, 1.4, 1.3, 1.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.9, 12.2, 12.3, 14.1, 13.2, 12.9, 'BYE', 13.9, 12.7, 11.9, 12.3, 13.1, 12.7, 12.3, 12.5, 13.1, 14.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/KC.png",
    "name": "Kansas City Chiefs",
    "depthchart": "",
    "team": "Kansas City Chiefs",
    "projected": 7.3,
    "opponent": "Los Angeles Chargers",
    "opp_rank_pts": 21,
    "opp_avg_pts": 23.07,
    "home_away": "",
    "team_rank_allowed_pts": 6,
    "team_avg_allowed_pts": 21.2,
    "team_ranked_takeaways": 29,
    "team_avg_takeaways": 0.87,
    "opp_ranked_giveaways": 11,
    "opp_avg_giveaways": 1.2,
    "fanduelSalary": "$4200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmTextLite": "#FFB81C",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Chiefs placed LB\u00a0Anthony Hitchens on the reserve/COVID-19 list.\u00a0\n",
    "report": "",
    "analysis": "NFL Network reports Hitchens was a \"close contact,\" and is not yet COVID positive himself. If that remains the case for the next five days, he will be eligible to play against the Falcons on Sunday. An every-week starter, Hitchens has played roughly two thirds of the Chiefs' snaps this season.\u00a0\n",
    "timestamp": "",
    "source": "Field Yates on Twitter ",
    "game_day_logo": "",
    "avg_fp2": 7.0,
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.0, 5.0, 7.0, 14.0, -1.0, 5.0, 24.0, 9.0, 1.0, 'BYE', 1.0, 5.0, 5.0, 14.0, 2.0, 7.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.0, 5.0, 5.9, 4.6, 7.6, 4.1, 6.6, 8.1, 6.6, 'BYE', 6.0, 5.7, 6.7, 6.5, 5.1, 5.8, 7.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.0, 1.4, 1.0, 0.3, 1.5, 0.8, 0.0, 0.6, 1.4, 'BYE', 0.3, 0.2, 0.9, 0.9, 0.2, 0.6, 0.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.4, 13.8, 13.1, 13.9, 14.7, 13.2, 13.5, 14.1, 14.0, 'BYE', 13.1, 14.5, 14.0, 13.0, 13.0, 13.8, 13.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/NO.png",
    "name": "New Orleans Saints",
    "depthchart": "",
    "team": "New Orleans Saints",
    "projected": 7.2,
    "opponent": "Carolina Panthers",
    "opp_rank_pts": 23,
    "opp_avg_pts": 22.87,
    "home_away": "at ",
    "team_rank_allowed_pts": 8,
    "team_avg_allowed_pts": 22.0,
    "team_ranked_takeaways": 25,
    "team_avg_takeaways": 1.07,
    "opp_ranked_giveaways": 1,
    "opp_avg_giveaways": 0.8,
    "fanduelSalary": "$4600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#9b845c",
    "tmColorDark": "#101820",
    "tmTextLite": "#9b845c",
    "tmColorLite_rgba": "rgba(155, 132, 92, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
    "headlineNews": "Saints S Marcus Williams (ankle) is out for Week 17 against the Panthers.\n",
    "report": "",
    "analysis": "The Saints are dealing with a lot of injuries right now. Michael Thomas is on injured reserve, Alvin Kamara is on the COVID-19 list, Kwon Alexander is out for the season, and Williams is week to week. The Saints most likely will play on Wild Card Weekend. It's unclear if Williams suit up then.\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 6.87,
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.0, 4.0, -3.0, 4.0, 3.0, 'BYE', 1.0, 7.0, 16.0, 14.0, 16.0, 14.0, 6.0, 2.0, 7.0, 1.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.3, 4.7, 4.5, 5.3, 6.4, 'BYE', 4.9, 7.2, 5.4, 5.7, 6.1, 6.0, 6.1, 6.2, 6.2, 4.9, 7.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.5, 0.4, 1.0, 0.6, 0.4, 'BYE', 1.1, 0.4, 1.0, 0.2, 0.4, 2.7, 5.8, 0.5, 2.3, 0.0, 0.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(155, 132, 92, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.5, 11.4, 12.6, 12.8, 10.9, 'BYE', 12.1, 12.7, 13.2, 12.1, 12.1, 14.8, 16.5, 12.6, 13.3, 14.4, 12.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/BUF.png",
    "name": "Buffalo Bills",
    "depthchart": "",
    "team": "Buffalo Bills",
    "projected": 7.1,
    "opponent": "Miami Dolphins",
    "opp_rank_pts": 15,
    "opp_avg_pts": 25.2,
    "home_away": "",
    "team_rank_allowed_pts": 13,
    "team_avg_allowed_pts": 23.27,
    "team_ranked_takeaways": 17,
    "team_avg_takeaways": 1.27,
    "opp_ranked_giveaways": 21,
    "opp_avg_giveaways": 1.47,
    "fanduelSalary": "$4200",
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
    "avg_fp2": 5.4,
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.0, 2.0, 5.0, 6.0, -4.0, 1.0, 14.0, 4.0, 12.0, 6.0, 'BYE', 6.0, 4.0, 6.0, 6.0, 7.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.4, 8.7, 7.4, 6.3, 4.9, 4.8, 6.5, 6.4, 5.8, 4.8, 'BYE', 3.8, 4.9, 5.3, 8.3, 4.9, 7.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.1, 1.2, 1.4, 0.0, 1.1, 0.7, 1.0, 0.0, 0.4, 0.0, 'BYE', 0.6, 0.7, 0.6, 1.0, 0.8, 0.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.5, 14.4, 15.2, 12.2, 13.8, 13.8, 14.1, 14.3, 13.2, 13.1, 'BYE', 13.5, 13.4, 13.7, 14.4, 13.3, 13.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/NYG.png",
    "name": "New York Giants",
    "depthchart": "",
    "team": "New York Giants",
    "projected": 7.0,
    "opponent": "Dallas Cowboys",
    "opp_rank_pts": 15,
    "opp_avg_pts": 25.2,
    "home_away": "",
    "team_rank_allowed_pts": 10,
    "team_avg_allowed_pts": 22.53,
    "team_ranked_takeaways": 8,
    "team_avg_takeaways": 1.4,
    "opp_ranked_giveaways": 21,
    "opp_avg_giveaways": 1.47,
    "fanduelSalary": "$3700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#A71930",
    "tmColorDark": "#0B2265",
    "tmTextLite": "#A71930",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(11, 34, 101, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png",
    "headlineNews": "Giants signed DB Logan Ryan to a three-year, $31 million extension.\n",
    "report": "",
    "analysis": "The deal includes $20 million guaranteed. The $10 million APY\u00a0is what\u00a0Ryan asked\u00a0for but didn't get this offseason.\u00a0Ryan went unsigned until after training camp but was able to parlay a prove-it deal\u00a0into a multi-year\u00a0contract. The Giants view Ryan as a versatile playmaker and leader of their secondary.\u00a0Ryan's new deal keeps him in New York through 2023.\n",
    "timestamp": "",
    "source": "NFL Network",
    "game_day_logo": "",
    "avg_fp2": 5.4,
    "week01": 2.0,
    "week02": 9.0,
    "week03": -2.0,
    "week04": 5.0,
    "week05": 2.0,
    "week06": 12.0,
    "week07": 5.0,
    "week08": 4.0,
    "week09": 13.0,
    "week10": 4.0,
    "week11": "BYE",
    "week12": 9.0,
    "week13": 13.0,
    "week14": 1.0,
    "week15": 2.0,
    "week16": 2.0,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.0, 9.0, -2.0, 5.0, 2.0, 12.0, 5.0, 4.0, 13.0, 4.0, 'BYE', 9.0, 13.0, 1.0, 2.0, 2.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.0, 4.7, 5.9, 5.4, 5.9, 6.9, 5.1, 7.0, 7.6, 5.4, 'BYE', 6.5, 4.7, 6.5, 6.2, 5.4, 7.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.1, 0.4, 1.0, 1.3, 0.0, 1.3, 1.0, 0.7, 1.3, 0.8, 'BYE', 1.1, 0.8, 0.9, 0.9, 1.1, 0.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.1, 14.0, 13.6, 13.4, 16.2, 13.5, 13.8, 13.9, 14.0, 13.6, 'BYE', 13.9, 13.7, 14.0, 13.2, 13.8, 13.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/TB.png",
    "name": "Tampa Bay Buccaneers",
    "depthchart": "",
    "team": "Tampa Bay Buccaneers",
    "projected": 6.9,
    "opponent": "Atlanta Falcons",
    "opp_rank_pts": 17,
    "opp_avg_pts": 24.6,
    "home_away": "",
    "team_rank_allowed_pts": 7,
    "team_avg_allowed_pts": 21.87,
    "team_ranked_takeaways": 21,
    "team_avg_takeaways": 1.2,
    "opp_ranked_giveaways": 8,
    "opp_avg_giveaways": 1.07,
    "fanduelSalary": "$4400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#D50A0A",
    "tmColorDark": "#000000",
    "tmTextLite": "#D50A0A",
    "tmColorLite_rgba": "rgba(213, 10, 10, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Bucs CB Carlton Davis (groin) is doubtful for Week 17 against the Falcons.\n",
    "report": "",
    "analysis": "Davis left in Week 15 and has only\u00a0practiced once since. He's week to week. It's bad timing as the Bucs will be missing other starting defenders because of COVID-19 protocols. The Bucs need to get healthy on defense quickly to have a shot at making it to the Super Bowl.\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 7.47,
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 14.0, 16.0, 6.0, 6.0, 19.0, 6.0, 7.0, 1.0, 5.0, 4.0, 4.0, 'BYE', 9.0, 3.0, 12.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.1, 7.2, 6.7, 8.3, 7.8, 5.2, 6.5, 9.1, 5.3, 7.6, 8.0, 6.7, 'BYE', 6.5, 6.2, 6.4, 6.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.4, 1.2, 1.0, 1.9, 1.5, 1.2, 0.7, 2.3, 1.8, 1.0, 1.0, 1.2, 'BYE', 1.0, 1.4, 0.1, 0.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(213, 10, 10, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.0, 15.0, 14.4, 15.6, 15.0, 14.8, 14.7, 15.6, 15.8, 14.5, 15.2, 14.7, 'BYE', 14.9, 14.5, 15.4, 14.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/CLE.png",
    "name": "Cleveland Browns",
    "depthchart": "",
    "team": "Cleveland Browns",
    "projected": 6.8,
    "opponent": "Pittsburgh Steelers",
    "opp_rank_pts": 13,
    "opp_avg_pts": 26.13,
    "home_away": "",
    "team_rank_allowed_pts": 21,
    "team_avg_allowed_pts": 26.07,
    "team_ranked_takeaways": 21,
    "team_avg_takeaways": 1.2,
    "opp_ranked_giveaways": 30,
    "opp_avg_giveaways": 1.67,
    "fanduelSalary": "$4100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#FF3C00",
    "tmColorDark": "#311D00",
    "tmTextLite": "#FF3C00",
    "tmColorLite_rgba": "rgba(255, 60, 0, 0.2)",
    "tmColorDark_rgba": "rgba(49, 29, 0, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
    "headlineNews": "Browns placed CB\u00a0Denzel Ward on the reserve/COVID-19 list.\u00a0\n",
    "report": "",
    "analysis": "He will be joined there by\u00a0LB Malcolm Smith. The Browns' COVID-19 situation certainly does not appear under control. They closed the team facilities on Thursday morning, and they will not re-open until Friday at the earliest. Even if Ward is merely a \"close contact,\" he cannot get cleared in time for Sunday's finale against the Steelers, while his availability for a potential Wild Card game is now in question.\u00a0\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 5.33,
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [-2.0, 4.0, 14.0, 5.0, 7.0, 1.0, 7.0, 3.0, 'BYE', 6.0, 14.0, 0.0, 5.0, 2.0, 8.0, 6.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.6, 6.5, 7.5, 4.4, 6.0, 5.1, 5.6, 7.5, 'BYE', 6.1, 7.3, 6.2, 3.2, 5.9, 5.8, 6.4, 6.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.3, 1.0, 1.1, 1.6, 1.4, 0.0, 0.9, 0.0, 'BYE', 0.9, 1.1, 1.4, 0.7, 0.7, 1.2, 1.1, 1.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.5, 11.8, 11.8, 12.7, 11.3, 13.6, 11.2, 10.3, 'BYE', 11.9, 10.4, 11.7, 11.0, 11.1, 11.6, 11.7, 11.7]
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
    "opponent": "Chicago Bears",
    "opp_rank_pts": 18,
    "opp_avg_pts": 23.73,
    "home_away": "at ",
    "team_rank_allowed_pts": 16,
    "team_avg_allowed_pts": 23.53,
    "team_ranked_takeaways": 31,
    "team_avg_takeaways": 0.73,
    "opp_ranked_giveaways": 8,
    "opp_avg_giveaways": 1.07,
    "fanduelSalary": "$3900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#d7a017",
    "tmColorDark": "#203731",
    "tmTextLite": "#d7a017",
    "tmColorLite_rgba": "rgba(215, 160, 23, 0.2)",
    "tmColorDark_rgba": "rgba(32, 55, 49, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png",
    "headlineNews": "Packers CB Kevin King (achilles) is questionable for Week 12 against the Bears.\n",
    "report": "",
    "analysis": "The Packers troll us every week by listing dozens of players as limited in practice all week. King was one of those players on Thursday and Friday. It's unclear if he'll return after being ruled out late in the week ahead of the Packers' last game. With Mitchell Trubisky starting, the Packers likely could be fine without King if he's forced to miss another game.\u00a0\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 5.07,
    "week01": 5.0,
    "week02": 6.0,
    "week03": 3.0,
    "week04": 5.0,
    "week05": "BYE",
    "week06": -1.0,
    "week07": 6.0,
    "week08": 0.0,
    "week09": 6.0,
    "week10": 6.0,
    "week11": 4.0,
    "week12": 9.0,
    "week13": 10.0,
    "week14": 4.0,
    "week15": 6.0,
    "week16": 7.0,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.0, 6.0, 3.0, 5.0, 'BYE', -1.0, 6.0, 0.0, 6.0, 6.0, 4.0, 9.0, 10.0, 4.0, 6.0, 7.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.6, 7.0, 4.5, 6.2, 'BYE', 6.2, 5.0, 7.3, 4.5, 7.8, 6.6, 7.7, 6.6, 5.9, 6.4, 6.3, 6.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.0, 1.1, 1.9, 0.8, 'BYE', 0.9, 4.8, 1.2, 0.9, 0.7, 1.2, 3.1, 0.9, 1.2, 1.7, 0.8, 1.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.2, 14.0, 14.1, 13.7, 'BYE', 14.1, 17.7, 14.1, 14.0, 14.8, 14.0, 15.4, 14.6, 13.9, 14.3, 14.1, 13.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/SEA.png",
    "name": "Seattle Seahawks",
    "depthchart": "",
    "team": "Seattle Seahawks",
    "projected": 6.5,
    "opponent": "San Francisco 49ers",
    "opp_rank_pts": 20,
    "opp_avg_pts": 23.53,
    "home_away": "at ",
    "team_rank_allowed_pts": 15,
    "team_avg_allowed_pts": 23.33,
    "team_ranked_takeaways": 14,
    "team_avg_takeaways": 1.33,
    "opp_ranked_giveaways": 30,
    "opp_avg_giveaways": 1.67,
    "fanduelSalary": "$3900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#69BE28",
    "tmColorDark": "#002244",
    "tmTextLite": "#69BE28",
    "tmColorLite_rgba": "rgba(105, 190, 40, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
    "headlineNews": "Seahawks CB\u00a0Quinton Dunbar (injured reserve)\u00a0is recovering from knee surgery.\u00a0\n",
    "report": "",
    "analysis": "Dunbar, who has not played since Week 9, went under the knife this week. After his summer was rocked by armed robbery charges, trade acquisition\u00a0Dunbar ended up making just six Seahawks appearances. The 28-year-old is an impending free agent. Although he's getting older and is now coming off surgery, Dunbar has been a quality NFL starter when healthy.\u00a0\n",
    "timestamp": "",
    "source": "Michael-Shawn Dugar on Twitter ",
    "game_day_logo": "",
    "avg_fp2": 6.4,
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.0, 3.0, 11.0, 5.0, 7.0, 'BYE', 0.0, 7.0, 3.0, 5.0, 5.0, 9.0, 7.0, 12.0, 9.0, 9.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.7, 6.5, 6.8, 5.6, 6.4, 'BYE', 5.0, 7.0, 6.4, 6.0, 7.7, 6.3, 7.3, 8.3, 6.7, 6.5, 6.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.1, 1.7, 2.2, 1.2, 1.2, 'BYE', 0.6, 0.7, 0.0, 2.2, 0.0, 1.2, 1.5, 1.6, 2.2, 1.1, 1.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.4, 15.6, 15.8, 14.2, 13.9, 'BYE', 13.4, 14.3, 12.4, 13.7, 15.0, 14.6, 15.6, 14.9, 14.3, 13.8, 14.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/ARI.png",
    "name": "Arizona Cardinals",
    "depthchart": "",
    "team": "Arizona Cardinals",
    "projected": 6.5,
    "opponent": "Los Angeles Rams",
    "opp_rank_pts": 19,
    "opp_avg_pts": 23.6,
    "home_away": "at ",
    "team_rank_allowed_pts": 13,
    "team_avg_allowed_pts": 23.27,
    "team_ranked_takeaways": 8,
    "team_avg_takeaways": 1.4,
    "opp_ranked_giveaways": 21,
    "opp_avg_giveaways": 1.47,
    "fanduelSalary": "$3800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#97233F",
    "tmColorDark": "#000000",
    "tmTextLite": "#97233F",
    "tmColorLite_rgba": "rgba(151, 35, 63, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
    "headlineNews": "Cardinals placed S\u00a0Chris Banjo on the reserve/COVID-19 list.\u00a0\n",
    "report": "",
    "analysis": "Typically a linchpin special teamer, Banjo ended up playing 437\u00a0defensive snaps this season. He was decent in the process, but that probably won't happen again in 2021. The 30-year-old is headed back to free agency.\u00a0\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 6.27,
    "week01": 4.0,
    "week02": 11.0,
    "week03": 4.0,
    "week04": 1.0,
    "week05": 7.0,
    "week06": 11.0,
    "week07": 7.0,
    "week08": "BYE",
    "week09": 2.0,
    "week10": 3.0,
    "week11": 2.0,
    "week12": 8.0,
    "week13": 2.0,
    "week14": 18.0,
    "week15": 8.0,
    "week16": 6.0,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.0, 11.0, 4.0, 1.0, 7.0, 11.0, 7.0, 'BYE', 2.0, 3.0, 2.0, 8.0, 2.0, 18.0, 8.0, 6.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.0, 6.4, 6.8, 5.0, 7.1, 4.4, 4.6, 'BYE', 6.6, 6.3, 4.8, 3.9, 5.9, 5.3, 6.2, 5.9, 6.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.4, 1.7, 1.6, 1.1, 1.1, 1.0, 0.9, 'BYE', 0.6, 1.0, 1.5, 1.2, 0.4, 1.0, 0.6, 0.0, 0.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.3, 14.0, 13.2, 14.7, 12.8, 13.6, 13.3, 'BYE', 14.6, 13.5, 13.0, 14.3, 13.5, 13.5, 13.6, 14.2, 13.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/WAS.png",
    "name": "Washington Football Team",
    "depthchart": "",
    "team": "Washington Football Team",
    "projected": 6.4,
    "opponent": "Philadelphia Eagles",
    "opp_rank_pts": 25,
    "opp_avg_pts": 21.33,
    "home_away": "at ",
    "team_rank_allowed_pts": 5,
    "team_avg_allowed_pts": 21.0,
    "team_ranked_takeaways": 14,
    "team_avg_takeaways": 1.33,
    "opp_ranked_giveaways": 3,
    "opp_avg_giveaways": 0.93,
    "fanduelSalary": "$4400",
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
    "game_day_logo": "https://static.www.nfl.com/image/private/f_auto/league/mywogy71oluagu0qmgaz",
    "avg_fp2": 6.6,
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [13.0, 4.0, 1.0, 4.0, 2.0, 6.0, 17.0, 'BYE', 5.0, 0.0, 12.0, 9.0, 3.0, 11.0, 3.0, 9.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.8, 5.8, 6.7, 5.3, 6.5, 5.4, 5.5, 'BYE', 6.0, 5.1, 7.1, 4.9, 5.6, 5.1, 5.9, 6.3, 6.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.2, 1.1, 0.9, 0.4, 0.0, 1.2, 2.4, 'BYE', 1.4, 0.8, 1.3, 1.2, 1.7, 1.3, 0.9, 1.2, 0.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.6, 11.7, 11.7, 11.2, 12.6, 11.4, 11.7, 'BYE', 11.5, 10.8, 11.1, 11.4, 11.9, 11.0, 11.4, 11.3, 11.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/DAL.png",
    "name": "Dallas Cowboys",
    "depthchart": "",
    "team": "Dallas Cowboys",
    "projected": 6.3,
    "opponent": "New York Giants",
    "opp_rank_pts": 31,
    "opp_avg_pts": 17.13,
    "home_away": "at ",
    "team_rank_allowed_pts": 30,
    "team_avg_allowed_pts": 29.87,
    "team_ranked_takeaways": 5,
    "team_avg_takeaways": 1.6,
    "opp_ranked_giveaways": 18,
    "opp_avg_giveaways": 1.33,
    "fanduelSalary": "$4000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#7F9695",
    "tmColorDark": "#041E42",
    "tmTextLite": "#7F9695",
    "tmColorLite_rgba": "rgba(127, 150, 149, 0.2)",
    "tmColorDark_rgba": "rgba(4, 30, 66, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
    "headlineNews": "Cowboys LB Leighton Vander Esch (ankle) is out for Week 17 against the Giants.\n",
    "report": "",
    "analysis": "It's a must-win game for Dallas, so\u00a0Vander Esch's ankle injury must be significant. He didn't practice all week and should be viewed as week-to-week if the Cowboys backdoor into the playoffs. Partially due to injuries,\u00a0Vander Esch had a down 2020 season, particularly fitting the run.\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 4.27,
    "week01": 4.0,
    "week02": -3.0,
    "week03": 0.0,
    "week04": -2.0,
    "week05": 3.0,
    "week06": 1.0,
    "week07": 2.0,
    "week08": 12.0,
    "week09": 2.0,
    "week10": "BYE",
    "week11": 5.0,
    "week12": 1.0,
    "week13": 2.0,
    "week14": 12.0,
    "week15": 15.0,
    "week16": 10.0,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.0, -3.0, 0.0, -2.0, 3.0, 1.0, 2.0, 12.0, 2.0, 'BYE', 5.0, 1.0, 2.0, 12.0, 15.0, 10.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.0, 5.8, 5.0, 5.8, 5.9, 3.9, 6.4, 6.3, 4.2, 'BYE', 4.3, 5.9, 4.4, 5.2, 5.8, 5.3, 6.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 3.4, 1.2, 1.0, 1.1, 1.3, 1.5, 1.1, 1.8, 'BYE', 0.0, 1.0, 1.3, 3.0, 0.7, 0.0, 2.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  "rgba(127, 150, 149, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.7, 14.2, 12.6, 12.1, 12.0, 12.8, 12.5, 12.4, 12.3, 'BYE', 11.7, 12.1, 12.0, 12.6, 12.1, 12.6, 13.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/LV.png",
    "name": "Las Vegas Raiders",
    "depthchart": "",
    "team": "Las Vegas Raiders",
    "projected": 5.9,
    "opponent": "Denver Broncos",
    "opp_rank_pts": 29,
    "opp_avg_pts": 19.6,
    "home_away": "at ",
    "team_rank_allowed_pts": 29,
    "team_avg_allowed_pts": 29.8,
    "team_ranked_takeaways": 29,
    "team_avg_takeaways": 0.87,
    "opp_ranked_giveaways": 10,
    "opp_avg_giveaways": 1.13,
    "fanduelSalary": "$3400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmTextLite": "#A5ACAF",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lv.png",
    "headlineNews": "Raiders activated LB\u00a0Nicholas Morrow from the COVID-19 list.\n",
    "report": "",
    "analysis": "Morrow went on the list on five days ago, so he was only a close contact and tested negative all week. He'll be eligible for Week 17 as the Raiders' starting linebacker.\n",
    "timestamp": "",
    "source": "Paul Guiterrez on Twitter",
    "game_day_logo": "",
    "avg_fp2": 2.33,
    "week01": 0.0,
    "week02": 2.0,
    "week03": 0.0,
    "week04": 0.0,
    "week05": 4.0,
    "week06": "BYE",
    "week07": -4.0,
    "week08": 9.0,
    "week09": 4.0,
    "week10": 16.0,
    "week11": -2.0,
    "week12": -1.0,
    "week13": 8.0,
    "week14": -4.0,
    "week15": 0.0,
    "week16": 3.0,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 2.0, 0.0, 0.0, 4.0, 'BYE', -4.0, 9.0, 4.0, 16.0, -2.0, -1.0, 8.0, -4.0, 0.0, 3.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.7, 5.0, 3.2, 5.3, 5.2, 'BYE', 4.6, 5.7, 4.2, 5.0, 4.9, 4.0, 6.2, 3.1, 5.4, 5.0, 5.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 1.1, 0.9, 0.0, 0.2, 'BYE', 0.4, 0.0, 0.0, 0.0, 0.0, 0.0, 0.1, 0.0, 0.0, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.9, 11.3, 12.3, 11.4, 11.3, 'BYE', 10.3, 9.3, 10.8, 11.0, 11.2, 11.0, 11.1, 9.1, 11.0, 11.7, 11.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/MIN.png",
    "name": "Minnesota Vikings",
    "depthchart": "",
    "team": "Minnesota Vikings",
    "projected": 5.7,
    "opponent": "Detroit Lions",
    "opp_rank_pts": 24,
    "opp_avg_pts": 22.8,
    "home_away": "at ",
    "team_rank_allowed_pts": 28,
    "team_avg_allowed_pts": 29.33,
    "team_ranked_takeaways": 17,
    "team_avg_takeaways": 1.27,
    "opp_ranked_giveaways": 2,
    "opp_avg_giveaways": 0.87,
    "fanduelSalary": "$3700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#e0aa19",
    "tmColorDark": "#300e5a",
    "tmTextLite": "#e0aa19",
    "tmColorLite_rgba": "rgba(224, 170, 25, 0.2)",
    "tmColorDark_rgba": "rgba(48, 14, 90, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/min.png",
    "headlineNews": "Vikings LB\u00a0Eric Kendricks (calf) won't play in Week 17 against the Lions.\n",
    "report": "",
    "analysis": "Neither will DEs\u00a0Jalyn Holmes and\u00a0Ifeadi Odenigbo as well as CB\u00a0Cameron Dantzler. The Lions haven't put up a fight of late, ceding at least 30 points to opponents in five consecutive games, but Minnesota's lacking bodies on defense could be the potion Detroit's offense needs to close the year delivering\u00a0one last blow. As it stands, Matthew Stafford isn't practicing but could still start without any mid-week reps.\n",
    "timestamp": "",
    "source": "Chris Tomasson on Twitter",
    "game_day_logo": "",
    "avg_fp2": 3.93,
    "week01": -4.0,
    "week02": 3.0,
    "week03": 2.0,
    "week04": 5.0,
    "week05": 6.0,
    "week06": 2.0,
    "week07": "BYE",
    "week08": 3.0,
    "week09": 9.0,
    "week10": 10.0,
    "week11": 4.0,
    "week12": 4.0,
    "week13": 13.0,
    "week14": 0.0,
    "week15": 2.0,
    "week16": 0.0,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [-4.0, 3.0, 2.0, 5.0, 6.0, 2.0, 'BYE', 3.0, 9.0, 10.0, 4.0, 4.0, 13.0, 0.0, 2.0, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.6, 5.0, 6.0, 6.4, 4.7, 5.6, 'BYE', 3.8, 6.7, 6.0, 7.0, 6.7, 6.8, 5.6, 7.8, 3.4, 5.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.4, 0.7, 0.4, 0.9, 1.3, 0.3, 'BYE', 0.4, 0.9, 1.0, 0.7, 0.8, 0.9, 1.0, 0.6, 0.9, 1.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  "rgba(224, 170, 25, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.9, 13.8, 14.1, 12.7, 14.0, 13.2, 'BYE', 13.0, 13.9, 13.5, 13.6, 13.4, 13.2, 14.0, 13.0, 13.0, 12.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/TEN.png",
    "name": "Tennessee Titans",
    "depthchart": "",
    "team": "Tennessee Titans",
    "projected": 5.6,
    "opponent": "Houston Texans",
    "opp_rank_pts": 21,
    "opp_avg_pts": 23.07,
    "home_away": "at ",
    "team_rank_allowed_pts": 23,
    "team_avg_allowed_pts": 26.73,
    "team_ranked_takeaways": 27,
    "team_avg_takeaways": 1.0,
    "opp_ranked_giveaways": 3,
    "opp_avg_giveaways": 0.93,
    "fanduelSalary": "$3800",
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
    "avg_fp2": 4.13,
    "week01": 3.0,
    "week02": 5.0,
    "week03": 7.0,
    "week04": "DNP",
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.0, 5.0, 7.0, 'DNP', 8.0, 2.0, 6.0, -1.0, 8.0, 0.0, 3.0, 10.0, -2.0, 8.0, 6.0, -1.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.9, 7.2, 5.7, 'DNP', 6.1, 6.1, 5.7, 6.4, 6.4, 4.5, 5.3, 4.4, 4.8, 6.8, 5.9, 4.1, 5.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.9, 0.6, 1.3, 'DNP', 0.0, 1.6, 0.5, 0.3, 0.9, 0.2, 0.0, 0.0, 0.0, 2.1, 0.8, 0.6, 0.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.2, 12.9, 13.5, 'DNP', 13.7, 12.6, 13.3, 13.1, 13.6, 12.5, 13.3, 10.6, 13.3, 14.2, 13.8, 13.9, 13.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/DEN.png",
    "name": "Denver Broncos",
    "depthchart": "",
    "team": "Denver Broncos",
    "projected": 5.6,
    "opponent": "Las Vegas Raiders",
    "opp_rank_pts": 11,
    "opp_avg_pts": 26.8,
    "home_away": "",
    "team_rank_allowed_pts": 25,
    "team_avg_allowed_pts": 27.47,
    "team_ranked_takeaways": 2,
    "team_avg_takeaways": 1.8,
    "opp_ranked_giveaways": 27,
    "opp_avg_giveaways": 1.6,
    "fanduelSalary": "$3600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#e17757",
    "tmColorDark": "#002244",
    "tmTextLite": "#e17757",
    "tmColorLite_rgba": "rgba(225, 119, 87, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/den.png",
    "headlineNews": "Broncos declared DE\u00a0Bradley Chubb, WR Tyrie Cleveland, QB Jeff Driskel, T Demar Dotson, and DT Sylvester Williams as inactive for Week 16 against the Chargers.\n",
    "report": "",
    "analysis": "Chubb exited Week 15 with an ankle injury and could be done for the year with Denver not playing for anything in the 2020 finale. Chubb had a quality season all things considered. He stayed mostly healthy in his first season coming off an ACL tear, racking up eight sacks along the way. He's a foundational piece for the Broncos.\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 4.33,
    "week01": 4.0,
    "week02": 5.0,
    "week03": 3.0,
    "week04": 6.0,
    "week05": "DNP",
    "week06": 12.0,
    "week07": 2.0,
    "week08": 5.0,
    "week09": 3.0,
    "week10": -4.0,
    "week11": 12.0,
    "week12": 4.0,
    "week13": 1.0,
    "week14": 10.0,
    "week15": -1.0,
    "week16": 3.0,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.0, 5.0, 3.0, 6.0, 'DNP', 12.0, 2.0, 5.0, 3.0, -4.0, 12.0, 4.0, 1.0, 10.0, -1.0, 3.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.6, 5.2, 6.5, 6.9, 'DNP', 5.0, 5.7, 5.2, 4.6, 5.1, 6.9, 4.9, 4.4, 5.0, 7.2, 5.4, 5.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.3, 1.5, 2.0, 1.4, 'DNP', 1.3, 1.3, 1.4, 1.0, 1.4, 1.3, 0.3, 0.9, 1.1, 1.1, 0.6, 0.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(225, 119, 87, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.0, 13.4, 13.2, 13.3, 'DNP', 12.7, 13.7, 13.6, 12.9, 12.8, 13.4, 13.6, 12.3, 13.0, 13.0, 11.9, 13.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/CAR.png",
    "name": "Carolina Panthers",
    "depthchart": "",
    "team": "Carolina Panthers",
    "projected": 5.6,
    "opponent": "New Orleans Saints",
    "opp_rank_pts": 4,
    "opp_avg_pts": 29.93,
    "home_away": "",
    "team_rank_allowed_pts": 18,
    "team_avg_allowed_pts": 24.6,
    "team_ranked_takeaways": 3,
    "team_avg_takeaways": 1.73,
    "opp_ranked_giveaways": 21,
    "opp_avg_giveaways": 1.47,
    "fanduelSalary": "$3300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#0085CA",
    "tmColorDark": "#101820",
    "tmTextLite": "#0085CA",
    "tmColorLite_rgba": "rgba(0, 133, 202, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/car.png",
    "headlineNews": "Panthers CB Donte Jackson (toe) is doubtful for Week 12 against the Vikings.\n",
    "report": "",
    "analysis": "A starting outside corner for Carolina, Jackson has been battling through a lingering toe injury for much of the season. He was carted with it in Week 5, re-injured it in Week 8, and had another setback recently. The Panthers defense remains one of the youngest in the NFL. At least they'll dodge Adam Thielen (COVID-19) on Sunday.\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 5.4,
    "week01": -1.0,
    "week02": 3.0,
    "week03": 11.0,
    "week04": 3.0,
    "week05": 5.0,
    "week06": 4.0,
    "week07": 3.0,
    "week08": 4.0,
    "week09": 2.0,
    "week10": 1.0,
    "week11": 17.0,
    "week12": 7.0,
    "week13": "BYE",
    "week14": 2.0,
    "week15": 5.0,
    "week16": 15.0,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [-1.0, 3.0, 11.0, 3.0, 5.0, 4.0, 3.0, 4.0, 2.0, 1.0, 17.0, 7.0, 'BYE', 2.0, 5.0, 15.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.8, 6.5, 5.4, 6.2, 5.1, 7.5, 3.7, 5.5, 4.9, 8.1, 7.4, 5.9, 'BYE', 6.8, 4.1, 6.3, 5.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.6, 1.4, 1.2, 0.9, 0.0, 1.9, 0.0, 1.6, 0.0, 1.8, 1.3, 0.3, 'BYE', 1.7, 0.2, 1.7, 1.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 133, 202, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.2, 14.5, 13.7, 13.6, 16.3, 13.1, 13.5, 13.5, 12.2, 14.3, 13.8, 11.8, 'BYE', 14.3, 13.8, 14.3, 13.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/MIA.png",
    "name": "Miami Dolphins",
    "depthchart": "",
    "team": "Miami Dolphins",
    "projected": 5.4,
    "opponent": "Buffalo Bills",
    "opp_rank_pts": 6,
    "opp_avg_pts": 29.67,
    "home_away": "at ",
    "team_rank_allowed_pts": 1,
    "team_avg_allowed_pts": 18.8,
    "team_ranked_takeaways": 8,
    "team_avg_takeaways": 1.4,
    "opp_ranked_giveaways": 25,
    "opp_avg_giveaways": 1.53,
    "fanduelSalary": "$4300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#008E97",
    "tmColorDark": "#005778",
    "tmTextLite": "#f5821f",
    "tmColorLite_rgba": "rgba(0, 142, 151, 0.2)",
    "tmColorDark_rgba": "rgba(0, 87, 120, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/mia.png",
    "headlineNews": "Dolphins LB Elandon Roberts has a\u00a0\"significant\" knee injury and won't play in Week 17 against Buffalo.\n",
    "report": "",
    "analysis": "He is headed to injured reserve, which would make him ineligible to return before the AFC Championship Game. Losing\u00a0Roberts is a downgrade to Miami's run defense.\u00a0The Dolphins will turn to Sam Eguavoen and Kamu Grugier-Hill to replace Roberts.\n",
    "timestamp": "",
    "source": "ESPN",
    "game_day_logo": "",
    "avg_fp2": 8.53,
    "week01": 2.0,
    "week02": 4.0,
    "week03": 12.0,
    "week04": 3.0,
    "week05": 12.0,
    "week06": 15.0,
    "week07": "DNP",
    "week08": 17.0,
    "week09": 2.0,
    "week10": 4.0,
    "week11": 5.0,
    "week12": 14.0,
    "week13": 14.0,
    "week14": 10.0,
    "week15": 9.0,
    "week16": 5.0,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.0, 4.0, 12.0, 3.0, 12.0, 15.0, 'DNP', 17.0, 2.0, 4.0, 5.0, 14.0, 14.0, 10.0, 9.0, 5.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.1, 7.4, 6.2, 4.1, 6.2, 7.0, 'DNP', 5.8, 5.8, 5.2, 6.1, 6.6, 7.1, 6.1, 5.6, 5.2, 5.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.1, 0.0, 2.9, 0.0, 0.7, 0.7, 'DNP', 0.0, 0.4, 0.3, 0.0, 0.2, 1.2, 0.5, 0.5, 0.9, 0.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 142, 151, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.8, 14.2, 10.5, 12.8, 13.5, 13.1, 'DNP', 12.6, 13.0, 11.3, 12.9, 13.1, 14.9, 13.0, 14.0, 14.3, 13.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/DET.png",
    "name": "Detroit Lions",
    "depthchart": "",
    "team": "Detroit Lions",
    "projected": 5.4,
    "opponent": "Minnesota Vikings",
    "opp_rank_pts": 12,
    "opp_avg_pts": 26.2,
    "home_away": "",
    "team_rank_allowed_pts": 32,
    "team_avg_allowed_pts": 32.13,
    "team_ranked_takeaways": 24,
    "team_avg_takeaways": 1.13,
    "opp_ranked_giveaways": 27,
    "opp_avg_giveaways": 1.6,
    "fanduelSalary": "$3400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#0076B6",
    "tmColorDark": "#000000",
    "tmTextLite": "#0076B6",
    "tmColorLite_rgba": "rgba(0, 118, 182, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/det.png",
    "headlineNews": "Lions placed DE\u00a0Everson Griffen on the reserve/COVID-19 list.\u00a0\n",
    "report": "",
    "analysis": "Griffen has been playing in the neighborhood of 25-50 snaps since arriving from Dallas, notching three sacks in five games. His loss comes the same day the Lions placed CB Jeffrey Okudah on injured reserve with a groin injury. An already easy matchup for Aaron Rodgers has become downright comical. Reportedly COVID-19 positive and not just a \"close contact,\" Griffen will also miss Week 15.\u00a0\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 1.93,
    "week01": 1.0,
    "week02": -3.0,
    "week03": 7.0,
    "week04": 0.0,
    "week05": "BYE",
    "week06": 4.0,
    "week07": 4.0,
    "week08": -2.0,
    "week09": 0.0,
    "week10": 4.0,
    "week11": 6.0,
    "week12": 0.0,
    "week13": 5.0,
    "week14": -1.0,
    "week15": -1.0,
    "week16": 5.0,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.0, -3.0, 7.0, 0.0, 'BYE', 4.0, 4.0, -2.0, 0.0, 4.0, 6.0, 0.0, 5.0, -1.0, -1.0, 5.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.7, 4.8, 4.3, 4.7, 'BYE', 6.9, 3.9, 6.2, 5.1, 5.7, 4.7, 4.7, 4.6, 4.1, 3.3, 5.1, 5.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.1, 0.3, 0.1, 0.1, 'BYE', 0.1, 0.0, 0.6, 0.4, 0.2, 0.0, 0.4, 0.3, 0.3, 0.2, 0.0, 0.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 118, 182, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.1, 12.6, 12.7, 12.8, 'BYE', 12.0, 11.3, 12.4, 12.6, 13.1, 12.7, 11.9, 13.0, 12.5, 12.0, 11.0, 12.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/ATL.png",
    "name": "Atlanta Falcons",
    "depthchart": "",
    "team": "Atlanta Falcons",
    "projected": 5.3,
    "opponent": "Tampa Bay Buccaneers",
    "opp_rank_pts": 5,
    "opp_avg_pts": 29.87,
    "home_away": "at ",
    "team_rank_allowed_pts": 19,
    "team_avg_allowed_pts": 24.67,
    "team_ranked_takeaways": 14,
    "team_avg_takeaways": 1.33,
    "opp_ranked_giveaways": 18,
    "opp_avg_giveaways": 1.33,
    "fanduelSalary": "$3300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#A71930",
    "tmColorDark": "#000000",
    "tmTextLite": "#A71930",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/atl.png",
    "headlineNews": "Falcons CB\u00a0Darqueze Dennard (quad) is out for Week 15 against the Buccaneers.\n",
    "report": "",
    "analysis": "Dennard is the second outside corner for the Falcons, so he would've been defending Antonio Brown at times on Sunday. It's a slight upgrade for the Bucs all around, although they were already projecting really well. After not practicing at all, Dennard's season could be over. He's week to week.\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 4.6,
    "week01": -1.0,
    "week02": 3.0,
    "week03": 5.0,
    "week04": 0.0,
    "week05": 0.0,
    "week06": 9.0,
    "week07": 2.0,
    "week08": 6.0,
    "week09": 3.0,
    "week10": "BYE",
    "week11": 5.0,
    "week12": 22.0,
    "week13": 4.0,
    "week14": 4.0,
    "week15": 2.0,
    "week16": 5.0,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [-1.0, 3.0, 5.0, 0.0, 0.0, 9.0, 2.0, 6.0, 3.0, 'BYE', 5.0, 22.0, 4.0, 4.0, 2.0, 5.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.0, 5.3, 5.9, 4.2, 5.2, 5.0, 5.4, 5.9, 6.0, 'BYE', 3.9, 5.2, 5.6, 5.5, 5.6, 5.4, 5.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.9, 0.0, 1.2, 1.3, 1.3, 0.5, 0.7, 1.1, 1.2, 'BYE', 1.1, 0.0, 0.0, 0.3, 0.6, 1.1, 0.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.1, 11.1, 11.7, 12.3, 11.9, 11.2, 12.1, 11.8, 12.5, 'BYE', 14.4, 12.5, 12.1, 12.0, 11.5, 12.0, 11.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/CIN.png",
    "name": "Cincinnati Bengals",
    "depthchart": "",
    "team": "Cincinnati Bengals",
    "projected": 5.3,
    "opponent": "Baltimore Ravens",
    "opp_rank_pts": 8,
    "opp_avg_pts": 28.27,
    "home_away": "",
    "team_rank_allowed_pts": 20,
    "team_avg_allowed_pts": 25.73,
    "team_ranked_takeaways": 27,
    "team_avg_takeaways": 1.0,
    "opp_ranked_giveaways": 5,
    "opp_avg_giveaways": 1.0,
    "fanduelSalary": "$3000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#ea7330",
    "tmColorDark": "#000000",
    "tmTextLite": "#ea7330",
    "tmColorLite_rgba": "rgba(234, 115, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png",
    "headlineNews": "Bengals CB William Jackson (concussion) is out for Week 17 against the Ravens.\n",
    "report": "",
    "analysis": "This could end Jackson's time with the Bengals as his four-year contract and fifth-year team option are now up. He'll head into free agency as a 29-year-old and should land starting-caliber money. He's been a quality outside corner every season he's been healthy for.\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 2.93,
    "week01": 3.0,
    "week02": -2.0,
    "week03": 7.0,
    "week04": 5.0,
    "week05": 3.0,
    "week06": 2.0,
    "week07": -2.0,
    "week08": 4.0,
    "week09": "BYE",
    "week10": -4.0,
    "week11": 5.0,
    "week12": 9.0,
    "week13": 3.0,
    "week14": 1.0,
    "week15": 8.0,
    "week16": 2.0,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.0, -2.0, 7.0, 5.0, 3.0, 2.0, -2.0, 4.0, 'BYE', -4.0, 5.0, 9.0, 3.0, 1.0, 8.0, 2.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.4, 7.1, 6.4, 6.4, 6.3, 5.5, 5.7, 5.6, 'BYE', 5.9, 6.7, 5.9, 5.1, 5.1, 6.4, 5.8, 5.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.1, 2.4, 1.2, 0.0, 0.5, 0.3, 1.4, 0.3, 'BYE', 0.9, 1.2, 0.5, 0.8, 0.9, 0.6, 1.5, 0.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.0, 10.4, 12.3, 14.3, 12.5, 13.1, 13.1, 11.7, 'BYE', 12.7, 13.2, 12.7, 12.8, 12.5, 12.1, 13.6, 12.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/SF.png",
    "name": "San Francisco 49ers",
    "depthchart": "",
    "team": "San Francisco 49ers",
    "projected": 5.3,
    "opponent": "Seattle Seahawks",
    "opp_rank_pts": 7,
    "opp_avg_pts": 28.73,
    "home_away": "",
    "team_rank_allowed_pts": 17,
    "team_avg_allowed_pts": 24.27,
    "team_ranked_takeaways": 4,
    "team_avg_takeaways": 1.67,
    "opp_ranked_giveaways": 15,
    "opp_avg_giveaways": 1.27,
    "fanduelSalary": "$4000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmTextLite": "#B3995D",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "49ers CBs K'Waun Williams and Richard Sherman are out for Week 17 against the Seahawks.\n",
    "report": "",
    "analysis": "49ers CB Emmanuel Mosely is also questionable after a full week of limited practices. The 49ers are out of the playoff hunt, so this only matters for Seattle's playoff seeding. Both Williams and Sherman are free agents in 2021. San Francisco will have to address their secondary this offseason.\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 5.27,
    "week01": 4.0,
    "week02": 5.0,
    "week03": 12.0,
    "week04": 6.0,
    "week05": -2.0,
    "week06": 5.0,
    "week07": 17.0,
    "week08": -2.0,
    "week09": 0.0,
    "week10": 7.0,
    "week11": "BYE",
    "week12": 11.0,
    "week13": 2.0,
    "week14": 5.0,
    "week15": -2.0,
    "week16": 11.0,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.0, 5.0, 12.0, 6.0, -2.0, 5.0, 17.0, -2.0, 0.0, 7.0, 'BYE', 11.0, 2.0, 5.0, -2.0, 11.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.7, 6.3, 6.4, 7.7, 8.5, 6.6, 4.3, 5.0, 3.9, 3.9, 'BYE', 7.2, 6.7, 7.5, 5.5, 5.3, 5.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.9, 0.5, 1.2, 1.0, 0.8, 0.4, 0.0, 0.6, 0.1, 0.0, 'BYE', 0.2, 1.8, 0.8, 0.9, 0.4, 0.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.8, 13.2, 13.4, 13.9, 13.7, 12.3, 14.3, 13.3, 13.6, 11.2, 'BYE', 12.7, 13.6, 12.8, 11.8, 12.7, 12.6]
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
    "opponent": "Tennessee Titans",
    "opp_rank_pts": 3,
    "opp_avg_pts": 30.0,
    "home_away": "",
    "team_rank_allowed_pts": 26,
    "team_avg_allowed_pts": 28.2,
    "team_ranked_takeaways": 31,
    "team_avg_takeaways": 0.73,
    "opp_ranked_giveaways": 11,
    "opp_avg_giveaways": 1.2,
    "fanduelSalary": "$3200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#A71930",
    "tmColorDark": "#03202F",
    "tmTextLite": "#A71930",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(3, 32, 47, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/hou.png",
    "headlineNews": "J.J. Watt admits he's uncertain if he will be back with the Texans in 2021.\u00a0\n",
    "report": "",
    "analysis": "\u201cThere\u2019s a whole lot of unknowns, so we\u2019ll see what happens,\" Watt said Thursday. \"I don't have any guarantees left in my contract, so something\u2019s gotta happen one way or another.\u201d Watt has expressed frustration\u00a0with the only organization he's only known in recent days, and the sides going their separate ways would clear $17.5 million in cap space while leaving behind $0 in dead money. Three months shy of his 32nd birthday, Watt has only five sacks this season but has generated plenty of pressure. He would be in high demand as a pass rusher/locker room presence.\u00a0\n",
    "timestamp": "",
    "source": "Aaron Reiss on Twitter ",
    "game_day_logo": "",
    "avg_fp2": 2.27,
    "week01": 0.0,
    "week02": 3.0,
    "week03": 1.0,
    "week04": 2.0,
    "week05": 9.0,
    "week06": 2.0,
    "week07": -4.0,
    "week08": "BYE",
    "week09": 4.0,
    "week10": 5.0,
    "week11": 3.0,
    "week12": 10.0,
    "week13": 3.0,
    "week14": -1.0,
    "week15": 1.0,
    "week16": -4.0,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 3.0, 1.0, 2.0, 9.0, 2.0, -4.0, 'BYE', 4.0, 5.0, 3.0, 10.0, 3.0, -1.0, 1.0, -4.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.7, 6.4, 5.3, 6.3, 5.8, 4.5, 4.6, 'BYE', 6.6, 5.4, 5.2, 5.2, 5.0, 5.7, 5.2, 7.0, 5.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.1, 0.0, 0.3, 0.0, 0.2, 0.0, 'BYE', 0.2, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.2, 0.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.6, 13.3, 12.8, 13.3, 13.7, 12.8, 11.1, 'BYE', 13.1, 12.3, 12.9, 13.6, 12.8, 13.4, 13.0, 12.7, 12.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/CHI.png",
    "name": "Chicago Bears",
    "depthchart": "",
    "team": "Chicago Bears",
    "projected": 5.1,
    "opponent": "Green Bay Packers",
    "opp_rank_pts": 1,
    "opp_avg_pts": 31.6,
    "home_away": "",
    "team_rank_allowed_pts": 9,
    "team_avg_allowed_pts": 22.33,
    "team_ranked_takeaways": 8,
    "team_avg_takeaways": 1.4,
    "opp_ranked_giveaways": 5,
    "opp_avg_giveaways": 1.0,
    "fanduelSalary": "$4100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#c36835",
    "tmColorDark": "#0B162A",
    "tmTextLite": "#c36835",
    "tmColorLite_rgba": "rgba(195, 104, 53, 0.2)",
    "tmColorDark_rgba": "rgba(11, 22, 42, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png",
    "headlineNews": "Bears CBs Jaylon Johnson (shoulder) and Buster Skrine (concussion) are out for Week 17 against the Packers.\n",
    "report": "",
    "analysis": "Neither Johnson nor Skrine practiced this week. It's awful timing for the Bears as Sunday is a must-win game for their playoff hopes. Johnson would've defended Davante Adams at times. It wouldn't be a surprise for Adams to reach 100 yards with a touchdown or two in this suddenly good on-paper matchup.\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 6.13,
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
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.0, 14.0, 4.0, 2.0, 6.0, 9.0, 11.0, 1.0, 3.0, 12.0, 'BYE', -4.0, 3.0, 17.0, 5.0, 6.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.1, 7.3, 6.1, 6.1, 7.9, 6.8, 5.3, 6.4, 4.1, 7.2, 'BYE', 4.9, 8.2, 6.5, 6.7, 8.6, 5.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.5, 3.8, 1.6, 1.7, 1.4, 2.4, 1.2, 0.6, 0.5, 0.6, 'BYE', 0.0, 0.3, 1.2, 1.3, 2.4, 1.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  "rgba(195, 104, 53, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.1, 14.4, 15.6, 14.5, 14.5, 14.4, 12.9, 12.8, 15.2, 12.1, 'BYE', 16.5, 12.1, 14.3, 14.5, 14.5, 14.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/LAC.png",
    "name": "Los Angeles Chargers",
    "depthchart": "",
    "team": "Los Angeles Chargers",
    "projected": 5.0,
    "opponent": "Kansas City Chiefs",
    "opp_rank_pts": 2,
    "opp_avg_pts": 30.13,
    "home_away": "at ",
    "team_rank_allowed_pts": 24,
    "team_avg_allowed_pts": 27.0,
    "team_ranked_takeaways": 25,
    "team_avg_takeaways": 1.07,
    "opp_ranked_giveaways": 27,
    "opp_avg_giveaways": 1.6,
    "fanduelSalary": "$3500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#0080C6",
    "tmColorDark": "#002A5E",
    "tmTextLite": "#0080C6",
    "tmColorLite_rgba": "rgba(0, 128, 198, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 94, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lac.png",
    "headlineNews": "Joey Bosa (concussion, shin) won't play in Week 17 against the Chiefs.\n",
    "report": "",
    "analysis": "The Chargers also moved CB Casey Hayward (hamstring) to injured reserve and won't have S Rayshawn Jenkins (ankle) either. Week 17 is more of a reserves exhibition in Kansas City as the Chiefs will also be resting Patrick Mahomes, Tyreek Hill, and Sammy Watkins, among others.\n",
    "timestamp": "",
    "source": "Around The NFL on Twitter",
    "game_day_logo": "",
    "avg_fp2": 3.87,
    "week01": 9.0,
    "week02": 5.0,
    "week03": 4.0,
    "week04": -2.0,
    "week05": 3.0,
    "week06": "DNP",
    "week07": 6.0,
    "week08": 3.0,
    "week09": 2.0,
    "week10": 1.0,
    "week11": 2.0,
    "week12": 9.0,
    "week13": -3.0,
    "week14": 9.0,
    "week15": 3.0,
    "week16": 7.0,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.0, 5.0, 4.0, -2.0, 3.0, 'DNP', 6.0, 3.0, 2.0, 1.0, 2.0, 9.0, -3.0, 9.0, 3.0, 7.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.3, 5.8, 6.1, 7.4, 5.2, 'DNP', 6.9, 6.8, 6.2, 5.3, 7.6, 4.6, 5.2, 6.1, 5.4, 6.3, 5.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.5, 0.4, 1.6, 1.2, 0.4, 'DNP', 1.6, 1.2, 0.7, 0.4, 1.2, 0.0, 1.0, 0.3, 0.0, 0.5, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 128, 198, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.1, 11.8, 13.5, 13.0, 12.3, 'DNP', 12.5, 12.0, 12.3, 12.0, 12.8, 10.5, 13.2, 12.5, 10.2, 12.2, 11.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/NYJ.png",
    "name": "New York Jets",
    "depthchart": "",
    "team": "New York Jets",
    "projected": 4.7,
    "opponent": "New England Patriots",
    "opp_rank_pts": 28,
    "opp_avg_pts": 19.87,
    "home_away": "at ",
    "team_rank_allowed_pts": 27,
    "team_avg_allowed_pts": 28.6,
    "team_ranked_takeaways": 8,
    "team_avg_takeaways": 1.4,
    "opp_ranked_giveaways": 20,
    "opp_avg_giveaways": 1.4,
    "fanduelSalary": "$3500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#125740",
    "tmColorDark": "#003f2d",
    "tmTextLite": "#FFFFFF",
    "tmColorLite_rgba": "rgba(18, 87, 64, 0.2)",
    "tmColorDark_rgba": "rgba(0, 63, 45, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png",
    "headlineNews": "Jets placed DT Quinnen Williams (neck, concussion) on injured reserve.\n",
    "report": "",
    "analysis": "This ends his season with only two games left.\u00a0Williams took a step forward in his second year, posting seven sacks, 55 tackles, and 10 TFLs as the anchor of the Jets' defensive line. There were rumors the Jets were shopping\u00a0Williams at the trade deadline, but the 23-year-old will likely be playing for a new coaching staff\u00a0this offseason. Williams has a $9 million cap number in 2021.\n",
    "timestamp": "",
    "source": null,
    "game_day_logo": "",
    "avg_fp2": 3.4,
    "week01": 3.0,
    "week02": 4.0,
    "week03": 0.0,
    "week04": 2.0,
    "week05": 2.0,
    "week06": 6.0,
    "week07": 5.0,
    "week08": -4.0,
    "week09": -1.0,
    "week10": "DNP",
    "week11": 6.0,
    "week12": 9.0,
    "week13": 5.0,
    "week14": -1.0,
    "week15": 6.0,
    "week16": 9.0,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.0, 4.0, 0.0, 2.0, 2.0, 6.0, 5.0, -4.0, -1.0, 'DNP', 6.0, 9.0, 5.0, -1.0, 6.0, 9.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.8, 5.1, 5.4, 6.3, 6.1, 4.2, 6.6, 4.9, 6.1, 'DNP', 5.2, 5.9, 6.1, 4.6, 6.3, 5.2, 4.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.5, 1.2, 0.6, 1.1, 1.0, 0.0, 0.2, 0.0, 1.7, 'DNP', 0.0, 0.0, 0.0, 0.5, 0.0, 0.5, 3.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  "rgba(18, 87, 64, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.6, 12.9, 11.9, 12.2, 12.8, 10.4, 11.1, 11.6, 12.5, 'DNP', 12.7, 10.1, 11.4, 13.2, 11.1, 12.7, 13.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/JAX.png",
    "name": "Jacksonville Jaguars",
    "depthchart": "",
    "team": "Jacksonville Jaguars",
    "projected": 4.3,
    "opponent": "Indianapolis Colts",
    "opp_rank_pts": 9,
    "opp_avg_pts": 27.8,
    "home_away": "at ",
    "team_rank_allowed_pts": 31,
    "team_avg_allowed_pts": 30.93,
    "team_ranked_takeaways": 8,
    "team_avg_takeaways": 1.4,
    "opp_ranked_giveaways": 15,
    "opp_avg_giveaways": 1.27,
    "fanduelSalary": "$3100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#006778",
    "tmColorDark": "#101820",
    "tmTextLite": "#006778",
    "tmColorLite_rgba": "rgba(0, 103, 120, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/jax.png",
    "headlineNews": "Jaguars declared\u00a0QB Jake Luton, CB Sidney Jones IV, CB Luq Barcoo, LB Quincy Williams, and DT Daniel Ross inactive for Week 15 against the Ravens.\u00a0\n",
    "report": "",
    "analysis": "The Jaguars' secondary is one of the most beat up units in the league. With Greg Mabin and Josiah Scott expected to start in the secondary Sunday against Baltimore, Lamar Jackson's matchup could hardly be better.\u00a0\n",
    "timestamp": "",
    "source": "Jacksonville Jaguars on Twitter ",
    "game_day_logo": "",
    "avg_fp2": 2.73,
    "week01": 6.0,
    "week02": 0.0,
    "week03": 0.0,
    "week04": 2.0,
    "week05": 4.0,
    "week06": 3.0,
    "week07": -3.0,
    "week08": "DNP",
    "week09": 4.0,
    "week10": 11.0,
    "week11": 2.0,
    "week12": 4.0,
    "week13": 8.0,
    "week14": 2.0,
    "week15": -1.0,
    "week16": -1.0,
    "week17": "",
    "week18": "",
    "week19": "",
    "week20": "",
    "week21": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16', 'Week 17'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.0, 0.0, 0.0, 2.0, 4.0, 3.0, -3.0, 'DNP', 4.0, 11.0, 2.0, 4.0, 8.0, 2.0, -1.0, -1.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.8, 5.3, 7.0, 5.6, 6.1, 7.9, 3.6, 'DNP', 6.1, 4.1, 6.2, 5.5, 4.4, 3.6, 4.0, 5.9, 4.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.9, 0.0, 0.6, 1.2, 1.3, 0.4, 0.5, 'DNP', 0.3, 0.7, 1.2, 0.4, 0.5, 0.6, 0.2, 0.6, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 103, 120, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.0, 12.8, 12.5, 12.3, 12.0, 11.9, 12.7, 'DNP', 11.7, 12.2, 11.6, 12.0, 12.1, 11.2, 11.7, 10.4, 10.0]
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