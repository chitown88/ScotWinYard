var App = angular.module('footballApp', ['tc.chartjs']);

App.controller('positionController', function($scope, $http) {

  //JSON data for position and players

/*********************** PASTE AFTER HERE ************************/

$scope.currentDate = {"currentDate": "Saturday, 05 December 2020 02:18 PM (central time)"};
$scope.week = {"nflWeek": "13"};

$scope.qbStartSit = {"one": "Kirk Cousins", "two": "Derek Carr", "three": "Baker Mayfield", "four": "Taysom Hill", "five": "Mitchell Trubisky", "six": "Alex Smith", "seven": "Ben Roethlisberger", "eight": "Kyler Murray", "nine": "Deshaun Watson", "ten": "Matthew Stafford"};
$scope.rbStartSit = {"one": "Dalvin Cook", "two": "Jonathan Taylor", "three": "David Montgomery", "four": "Clyde Edwards-Helaire", "five": "Myles Gaskin", "six": "Todd Gurley", "seven": "Zack Moss", "eight": "Kenyan Drake", "nine": "Antonio Gibson", "ten": "Benny Snell"};
$scope.wrStartSit = {"one": "Darius Slayton", "two": "Adam Thielen", "three": "Allen Robinson", "four": "Michael Thomas", "five": "D.J. Chark", "six": "Diontae Johnson", "seven": "DeAndre Hopkins", "eight": "Marvin Jones", "nine": "Jakobi Meyers", "ten": "Stefon Diggs"};
$scope.teStartSit = {"one": "Darren Waller", "two": "Jared Cook", "three": "Austin Hooper", "four": "Kyle Rudolph", "five": "Mike Gesicki", "six": "Dawson Knox", "seven": "Logan Thomas", "eight": "Jordan Akins", "nine": "Maxx Williams", "ten": "Drew Sample"};
$scope.dstStartSit = {"one": "Las Vegas Raiders", "two": "Seattle Seahawks", "three": "Kansas City Chiefs", "four": "Detroit Lions", "five": "Miami Dolphins", "six": "Philadelphia Eagles", "seven": "Denver Broncos", "eight": "New York Giants", "nine": "Cleveland Browns", "ten": "Atlanta Falcons"};

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
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3139477.png",
    "name": "Patrick Mahomes",
    "depthchart": "Starter: QB-1",
    "team": "Kansas City Chiefs",
    "projected": 28.9,
    "opponent": "Denver Broncos",
    "home_away": "",
    "opp_rank_Neu": 7,
    "team_rank_Pos": 1,
    "avg_fp2": 26.62,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 18.99,
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
    "headlineNews": "Patrick Mahomes completed 37-of-49 passes for 462 yards and three touchdowns in the Chiefs' 27-24, Week 12 win over the Bucs.\n",
    "report": "",
    "analysis": "He added 28 rushing yards on four attempts. This was Mahomes' fifth 400-yard passing game in his career and second of the season. All three touchdowns went to Tyreek Hill from 75, 44, and 20 yards out, and Mahomes could've had an even bigger afternoon if he hadn't missed a wide-open Mecole Hardman for what should have been a walk-in 89-yard score. The throw was well behind Hardman who had nobody around him in the middle of the field. Mahomes is obviously the best player on the planet and gets a luscious Week 13 draw against the Broncos.\n",
    "timestamp": "2020-11-30 12:43 AM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [20.44, 27.48, 40.0, 20.24, 30.7, 20.6, 12.0, 36.64, 30.88, 'BYE', 22.52, 31.28]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [26.8, 20.8, 17.8, 31.6, 30.6, 22.4, 19.3, 25.4, 23.8, 'BYE', 21.6, 28.4, 28.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [16.8, 17.6, 17.0, 15.9, 16.1, 17.6, 17.4, 19.2, 17.0, 'BYE', 16.0, 18.2, 16.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [30.3, 32.6, 32.2, 30.8, 32.3, 34.1, 32.6, 33.1, 32.3, 'BYE', 31.3, 32.4, 30.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14881.png",
    "name": "Russell Wilson",
    "depthchart": "Starter: QB-1",
    "team": "Seattle Seahawks",
    "projected": 25.1,
    "opponent": "New York Giants",
    "home_away": "",
    "opp_rank_Neu": 19,
    "team_rank_Pos": 4,
    "avg_fp2": 25.69,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 16.39,
    "fanduelSalary": "$7700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#69BE28",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(105, 190, 40, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#69BE28",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
    "headlineNews": "The Seahawks have passed on just 56.3 percent of their offensive plays over the past three weeks.\u00a0\n",
    "report": "",
    "analysis": "That's down from their season-long rate of 60.8 percent. On Monday night against the Eagles, Seattle passed on 52.1 percent of their plays. That may have been dictated by game script and the Eagles' total inability to move the football. An improving Seattle defense -- the front seven, anyway -- and the return of Chris Carson from a foot injury could spell the end (for now) of the Let Russ Cook movement in Seattle. No quarterback dropped back to pass more than Russell Wilson over the season's first ten weeks, but head coach Pete Carroll seems ready to move on from Let Russ Cook hysteria that proved a godsend for fantasy players.\u00a0\"Early on [this season] when we didn't have to run the ball much because we were rolling throwing the football, those guys were out there and we almost took it for granted,\" Carroll\u00a0said. \"I'm disappointed about that because that's the element of our football that makes us this style of team that we are and it makes Russ' job different than it is when he has to throw the ball 40 times or 50 times. He certainly can do it and loves doing it and we don't mind doing it, but our football is better shaped when we're balanced and we're attacking you and we can play off of that.\" The hyper-efficient Wilson remains a high-end QB1.\u00a0\n",
    "timestamp": "2020-12-01 05:37 PM",
    "source": "ESPN",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [31.78, 34.42, 36.8, 21.9, 25.48, 'BYE', 32.92, 28.74, 24.1, 11.92, 20.08, 14.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.3, 20.0, 29.1, 24.5, 21.6, 'BYE', 19.8, 21.5, 20.4, 17.2, 26.9, 24.3, 25.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [12.1, 11.8, 12.4, 11.3, 11.7, 'BYE', 11.3, 11.3, 12.7, 13.4, 11.5, 11.4, 12.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [26.9, 26.8, 26.1, 26.2, 26.9, 'BYE', 27.5, 29.7, 28.2, 28.8, 27.6, 29.0, 28.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3122840.png",
    "name": "Deshaun Watson",
    "depthchart": "Starter: QB-1",
    "team": "Houston Texans",
    "projected": 24.3,
    "opponent": "Indianapolis Colts",
    "home_away": "",
    "opp_rank_Neg": 6,
    "team_rank_Pos": 3,
    "avg_fp2": 23.85,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 15.86,
    "fanduelSalary": "$7500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#03202F",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(3, 32, 47, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/hou.png",
    "headlineNews": "Deshaun Watson completed 17-of-25 passes for 318 yards and four touchdowns in Houston's 41-25 Week 12 blowout against the Lions.\n",
    "report": "",
    "analysis": "Watson also recorded the most touchdown passes (24) in the first 11 games of a season in franchise history. Although he left a handful of plays on the field including two (slightly) overthrown touchdowns to TE Jordan Akins and a missed deep shot to Keke Coutee on Houston's first play from scrimmage, Watson was flawless otherwise in finding Will Fuller for a 40-yard score in man coverage and again once more on a trick flea-flicker from Duke Johnson on back-to-back possessions\u00a0in the fourth quarter. With more control of the game-planning and play-calling since Bill O'Brien was relieved of his duties, Watson has unsurprisingly scorched the league for 15 touchdowns and zero turnovers over his last six games. Currently at 4-3 since O'Brien's release, it also wouldn't be shocking to see interim coach Romeo Crennel\u00a0get a fair shake at the head gig this offseason. Fantasy players should expect Watson to continue surging in Week 13 against the Colts.\n",
    "timestamp": "2020-11-26 09:22 PM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [21.82, 15.7, 18.06, 20.9, 26.86, 32.0, 24.16, 'BYE', 24.24, 14.12, 31.36, 33.12]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [24.8, 14.6, 24.3, 25.6, 31.0, 19.4, 24.8, 'BYE', 27.6, 21.0, 22.3, 28.1, 24.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [13.2, 10.0, 17.4, 13.7, 11.1, 15.0, 15.2, 'BYE', 13.2, 12.9, 12.7, 15.1, 13.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [31.0, 28.5, 33.5, 30.7, 31.8, 32.1, 30.9, 'BYE', 30.2, 32.0, 31.3, 32.9, 29.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3039707.png",
    "name": "Mitchell Trubisky",
    "depthchart": "Starter: QB-1",
    "team": "Chicago Bears",
    "projected": 23.7,
    "opponent": "Detroit Lions",
    "home_away": "",
    "opp_rank_Pos": 26,
    "team_rank_Neu": 23,
    "avg_fp2": 14.64,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 20.59,
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
    "headlineNews": "Nick Foles (hip) practiced in full Thursday.\u00a0\n",
    "report": "",
    "analysis": "Foles missed last week's game against the Packers with the injury. Head coach Matt Nagy gave an unenthusiastic endorsement to Mitchell Trubisky for Week 13's game against the Lions, so it appears Foles will be left holding the clipboard. Foles might be worth stashing in deeper superflex formats.\n",
    "timestamp": "2020-12-03 09:30 PM",
    "source": "Adam Caplan on Twitter ",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [24.28, 15.2, 12.62, 'DNP', 'DNP', 'DNP', 'DNP', 0.3, 'DNP', 'DNP', 'BYE', 20.78]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.9, 19.2, 25.5, 'DNP', 'DNP', 'DNP', 'DNP', 4.4, 'DNP', 'DNP', 'BYE', 11.9, 23.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.0, 5.8, 7.1, 'DNP', 'DNP', 'DNP', 'DNP', 8.1, 'DNP', 'DNP', 'BYE', 6.5, 10.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  "rgba(195, 104, 53, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [24.1, 21.6, 23.2, 'DNP', 'DNP', 'DNP', 'DNP', 24.8, 'DNP', 'DNP', 'BYE', 24.0, 25.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/8439.png",
    "name": "Aaron Rodgers",
    "depthchart": "Starter: QB-1",
    "team": "Green Bay Packers",
    "projected": 22.4,
    "opponent": "Philadelphia Eagles",
    "home_away": "",
    "opp_rank_Neu": 8,
    "team_rank_Pos": 5,
    "avg_fp2": 23.9,
    "opp_rank_allowed_fp2_Neu": 7,
    "opp_avg_allowed_fp2": 17.36,
    "fanduelSalary": "$6800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#d7a017",
    "tmColorDark": "#203731",
    "tmColorLite_rgba": "rgba(215, 160, 23, 0.2)",
    "tmColorDark_rgba": "rgba(32, 55, 49, 0.2)",
    "tmTextLite": "#d7a017",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png",
    "headlineNews": "Aaron Rodgers completed 21-of-29 passes for 211 yards with four touchdowns in the Packers' Week 12 win over Chicago.\n",
    "report": "",
    "analysis": "Rodgers didn't need to throw for many yards with Mitchell Trubisky setting up the Packers up with good field position on turnovers.\u00a0He threw three of his four touchdowns in the red-zone. This was one of the cleanest games of the season for Rodgers, who wasn't sacked and didn't have any interceptions.\u00a0Rodgers has been\u00a0averaging 288 yards with a 13:3 TD/INT\u00a0ratio over his last four games. He'll be a top-five option for a matchup with the spiraling Eagles in Week 13.\u00a0\n",
    "timestamp": "2020-12-01 10:04 PM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [30.76, 18.7, 24.52, 29.58, 'BYE', 5.8, 27.32, 22.54, 28.9, 26.4, 22.74, 25.64]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [21.5, 24.8, 26.3, 27.1, 'BYE', 16.5, 21.8, 26.4, 21.1, 23.0, 18.3, 18.9, 22.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [11.9, 13.8, 9.5, 14.4, 'BYE', 12.6, 15.7, 14.1, 12.2, 15.2, 13.7, 11.5, 14.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [27.7, 30.7, 32.1, 29.9, 'BYE', 27.5, 28.6, 30.2, 28.0, 29.5, 26.4, 29.0, 30.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3052587.png",
    "name": "Baker Mayfield",
    "depthchart": "Starter: QB-1",
    "team": "Cleveland Browns",
    "projected": 21.3,
    "opponent": "Tennessee Titans",
    "home_away": "at ",
    "opp_rank_Pos": 28,
    "team_rank_Neg": 30,
    "avg_fp2": 13.72,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 21.68,
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
    "headlineNews": "Baker Mayfield completed 19-of-29 passes for 258 yards and two touchdowns in the Browns' Week 12 win over the Jaguars.\n",
    "report": "",
    "analysis": "Mayfield picked apart a Jacksonville defense that was comfortable giving Jarvis Landry space to work with all game. It wasn't a perfect outing from Mayfield though. He missed a wide-open\u00a0Rashard Higgins on a busted coverage play in the red zone and also through an off-target pass to Landry in the end zone. Mayfield didn't make mistakes and made most of his easy throws. That should be the expectation from him going forward. He remains a QB2 versus the Titans next week.\n",
    "timestamp": "2020-11-29 10:41 PM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.86, 16.26, 14.34, 15.2, 17.58, 7.26, 30.78, 7.78, 'BYE', 5.38, 7.06, 18.42]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [22.1, 19.9, 21.1, 15.8, 13.9, 14.6, 18.4, 25.9, 'BYE', 17.0, 14.6, 15.1, 21.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [10.5, 10.3, 10.0, 13.0, 10.1, 11.8, 11.7, 12.8, 'BYE', 11.8, 9.6, 11.7, 9.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [22.0, 22.1, 20.2, 22.0, 21.4, 21.0, 19.1, 23.3, 'BYE', 21.7, 23.4, 24.2, 22.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14880.png",
    "name": "Kirk Cousins",
    "depthchart": "Starter: QB-1",
    "team": "Minnesota Vikings",
    "projected": 20.9,
    "opponent": "Jacksonville Jaguars",
    "home_away": "",
    "opp_rank_Pos": 29,
    "team_rank_Neu": 17,
    "avg_fp2": 18.31,
    "opp_rank_allowed_fp2_Pos": 30,
    "opp_avg_allowed_fp2": 22.67,
    "fanduelSalary": "$6400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e0aa19",
    "tmColorDark": "#300e5a",
    "tmColorLite_rgba": "rgba(224, 170, 25, 0.2)",
    "tmColorDark_rgba": "rgba(48, 14, 90, 0.2)",
    "tmTextLite": "#e0aa19",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/min.png",
    "headlineNews": "Kirk Cousins completed 34-of-45 passes for 307 yards and three touchdowns in the Vikings' Week 12 win over the Panthers.\n",
    "report": "",
    "analysis": "Forced into negative game script after two Carolina defensive touchdowns, Cousins attempted a season-high 45 pass attempts, six more than his previous season high. He was mostly affective despite missing Adam Thielen and Irv Smith. Cousins peppered targets to elite rookie Justin Jefferson who scored twice before hitting Chad Beebe for the game-winning touchdown with under two minutes remaining. Cousins has a QB1 ceiling only when the Vikings are trailing, but he pops up for a couple of games like this per season. Cousins will be a mid-range QB2 against the Jaguars in Week 13.\n",
    "timestamp": "2020-11-29 09:34 PM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [22.76, 1.52, 21.44, 14.9, 15.16, 26.72, 'BYE', 10.4, 20.8, 18.58, 22.96, 26.18]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.6, 19.7, 17.5, 18.2, 20.2, 24.2, 'BYE', 20.9, 20.4, 9.6, 19.3, 18.5, 20.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [9.2, 8.8, 6.9, 9.7, 8.7, 8.3, 'BYE', 11.1, 11.9, 8.2, 8.7, 10.5, 10.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  "rgba(224, 170, 25, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [23.3, 24.5, 22.6, 25.5, 23.5, 24.1, 'BYE', 27.5, 25.9, 23.7, 23.3, 24.8, 26.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3918298.png",
    "name": "Josh Allen",
    "depthchart": "Starter: QB-1",
    "team": "Buffalo Bills",
    "projected": 20.4,
    "opponent": "San Francisco 49ers",
    "home_away": "at ",
    "opp_rank_Neg": 4,
    "team_rank_Neu": 7,
    "avg_fp2": 24.17,
    "opp_rank_allowed_fp2_Neu": 9,
    "opp_avg_allowed_fp2": 17.75,
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
    "headlineNews": "Josh Allen is listed with knee and ankle issues on the Week 13 injury report but practicing in full ahead of Monday night's game against the 49ers.\u00a0\n",
    "report": "",
    "analysis": "Allen has been picking up some nicks and bruises, but the fact that it is not limiting him in practice is a great sign ahead of a tough matchup with a reviving 49ers defense. Despite San Francisco's improved recent play, Allen's dual-threat ability keeps him locked in as an elite QB1.\u00a0\n",
    "timestamp": "2020-12-04 01:08 AM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [28.18, 34.48, 32.24, 25.42, 18.32, 16.08, 16.38, 13.46, 36.0, 28.86, 'BYE', 16.48]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [19.9, 30.8, 18.3, 21.1, 23.8, 19.8, 18.7, 17.2, 20.8, 21.6, 'BYE', 24.5, 20.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.3, 13.0, 10.2, 14.7, 10.7, 9.3, 8.5, 11.2, 13.1, 8.8, 'BYE', 10.3, 10.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.6, 27.6, 26.8, 32.7, 30.1, 25.0, 24.9, 28.2, 29.9, 28.6, 'BYE', 29.0, 30.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/5529.png",
    "name": "Philip Rivers",
    "depthchart": "Starter: QB-1",
    "team": "Indianapolis Colts",
    "projected": 19.4,
    "opponent": "Houston Texans",
    "home_away": "at ",
    "opp_rank_Neu": 23,
    "team_rank_Neu": 10,
    "avg_fp2": 15.8,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 19.35,
    "fanduelSalary": "$5900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#014683",
    "tmColorDark": "#002C5F",
    "tmColorLite_rgba": "rgba(1, 70, 131, 0.2)",
    "tmColorDark_rgba": "rgba(0, 44, 95, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png",
    "headlineNews": "Philip Rivers completed 24-of-42 passes for 295 yards,\u00a0a touchdown, and an interception in the Colts' 26-45 Week 12 loss to the Titans.\u00a0\n",
    "report": "",
    "analysis": "Rivers moved the ball effectively against the Titans' generous secondary but the Colts defense couldn't stop Derrick Henry from the first snap of the contest. Rivers hit T.Y. Hilton for a 50-yarder and a short touchdown amid another game of dump offs to his running backs. With at least 288 yards in each of his past three games, Rivers should continue to be a floor option in Week 13 against a Browns defense that gave up 235 yards and two touchdowns to Mike Glennon in Week 12.\u00a0\n",
    "timestamp": "2020-11-29 10:54 PM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [16.82, 11.86, 12.68, 11.2, 7.62, 25.74, 'BYE', 22.28, 8.08, 16.32, 22.42, 18.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [19.6, 26.8, 17.5, 13.6, 20.3, 15.9, 'BYE', 16.3, 12.6, 19.5, 21.6, 19.6, 19.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [9.8, 11.4, 10.1, 9.6, 10.9, 10.0, 'BYE', 11.1, 10.3, 10.3, 8.9, 10.0, 9.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [22.2, 22.4, 23.1, 22.2, 24.5, 23.6, 'BYE', 23.0, 22.4, 23.6, 22.9, 23.0, 23.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/11237.png",
    "name": "Matt Ryan",
    "depthchart": "Starter: QB-1",
    "team": "Atlanta Falcons",
    "projected": 18.2,
    "opponent": "New Orleans Saints",
    "home_away": "",
    "opp_rank_Neg": 5,
    "team_rank_Pos": 5,
    "avg_fp2": 18.17,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 18.13,
    "fanduelSalary": "$5600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/atl.png",
    "headlineNews": "Matt Ryan completed 22-of-39 passes for 185 yards, two touchdowns, and one interception in the Falcons' 43-6, Week 12 win over the Raiders.\n",
    "report": "",
    "analysis": "Ryan certainly wasn't the reason the Falcons won this one, turning in a pitiful 4.7 yards per attempt while looking mostly lost without Julio Jones (hamstring) in the lineup. Calvin Ridley (6-50-1) was the leading receiver, catching his score from four yards out. Brandon Powell later caught Ryan's second score from four yards out as well. Ryan has truly been horrendous when Julio doesn't play and can't be recommended as a fantasy option outside of two-QB leagues next week when the Falcons host the Saints.\n",
    "timestamp": "2020-11-29 09:47 PM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [24.9, 28.52, 12.42, 12.4, 7.94, 31.64, 17.52, 18.94, 23.36, 'BYE', 7.28, 14.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [20.4, 15.8, 20.9, 19.9, 18.1, 19.2, 20.2, 19.7, 20.7, 'BYE', 19.7, 15.7, 18.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [11.2, 13.1, 11.0, 14.8, 11.8, 12.6, 12.5, 11.4, 11.1, 'BYE', 11.1, 11.1, 10.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [24.9, 25.8, 24.1, 27.2, 24.9, 24.7, 25.8, 25.1, 24.2, 'BYE', 24.7, 24.3, 24.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14876.png",
    "name": "Ryan Tannehill",
    "depthchart": "Starter: QB-1",
    "team": "Tennessee Titans",
    "projected": 18.0,
    "opponent": "Cleveland Browns",
    "home_away": "",
    "opp_rank_Neu": 20,
    "team_rank_Neu": 22,
    "avg_fp2": 20.18,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 19.78,
    "fanduelSalary": "$6200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#4495D1",
    "tmColorDark": "#002A5C",
    "tmColorLite_rgba": "rgba(68, 149, 209, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 92, 0.2)",
    "tmTextLite": "#4495D1",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png",
    "headlineNews": "Ryan Tannehill completed 13-of-22 passes for 221 yards and a touchdown in the Titans' 45-26 win against the Colts.\u00a0\n",
    "report": "",
    "analysis": "Tannehill, like Derrick Henry, did whatever he wanted against a toothless Colts defense. If the Titans hadn't been ahead by multiple scores in the second half, Tannehill would have easily gone over 300 yards. He had one touchdown pass turned into a rushing score for Henry after it was determined Tannehill's pass was in fact a lateral. His nicest play of the day was hitting A.J. Brown in stride for a 69-yard catch and run score. Tannehill has a sneaky great matchup next week against the Browns. He'll be a borderline QB1.\u00a0\n",
    "timestamp": "2020-11-29 09:39 PM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [19.36, 26.76, 13.24, 'BYE', 30.0, 29.56, 17.3, 18.32, 14.62, 10.78, 22.86, 19.14]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.0, 17.5, 14.7, 'BYE', 17.0, 18.7, 16.5, 22.5, 14.8, 14.7, 19.8, 12.1, 18.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [9.4, 9.1, 9.1, 'BYE', 10.0, 10.1, 8.8, 9.0, 9.9, 9.5, 9.5, 11.7, 11.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [22.2, 22.3, 22.4, 'BYE', 23.8, 23.4, 23.5, 23.4, 23.7, 23.1, 22.9, 22.8, 26.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2573079.png",
    "name": "Carson Wentz",
    "depthchart": "Starter: QB-1",
    "team": "Philadelphia Eagles",
    "projected": 17.8,
    "opponent": "Green Bay Packers",
    "home_away": "at ",
    "opp_rank_Neu": 15,
    "team_rank_Neg": 27,
    "avg_fp2": 18.95,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 17.36,
    "fanduelSalary": "$5400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#386168",
    "tmColorDark": "#004C54",
    "tmColorLite_rgba": "rgba(56, 97, 104, 0.2)",
    "tmColorDark_rgba": "rgba(0, 76, 84, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    "headlineNews": "Jalen Hurts played two snaps in Week 13 against the Seahawks, completing his only pass attempt for six yards.\u00a0\n",
    "report": "",
    "analysis": "So much for that. NFL Network's Ian Rapoport said Hurts was practicing as the team's QB without Carson Wentz on the field in preparation for Week 13 -- a change from how Hurts has been utilized this season. Wentz was on the field for one of Hurts' two snaps. Eagles head coach Doug Peterson pretends to be confused by questions about benching Wentz for Hurts -- he's either in denial about Wentz's regression or he's confident Hurts would be far worse as the team's quarterback.\u00a0\n",
    "timestamp": "2020-12-01 02:01 PM",
    "source": null,
    "week01": 15.0,
    "week02": 14.38,
    "week03": 23.5,
    "week04": 22.42,
    "week05": 19.42,
    "week06": 29.42,
    "week07": 28.76,
    "week08": 10.62,
    "week09": "BYE",
    "week10": 8.72,
    "week11": 16.4,
    "week12": 19.8,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [15.0, 14.38, 23.5, 22.42, 19.42, 29.42, 28.76, 10.62, 'BYE', 8.72, 16.4, 19.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.9, 12.8, 18.6, 15.2, 13.4, 13.5, 20.6, 22.6, 'BYE', 17.1, 17.7, 16.6, 17.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [11.6, 11.6, 11.0, 9.9, 9.7, 12.1, 11.2, 10.3, 'BYE', 12.4, 11.7, 10.0, 14.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [24.6, 22.7, 23.7, 23.3, 23.1, 25.7, 24.6, 24.8, 'BYE', 24.1, 23.2, 23.2, 25.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3924327.png",
    "name": "Drew Lock",
    "depthchart": "Starter: QB-1",
    "team": "Denver Broncos",
    "projected": 17.4,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Neu": 16,
    "team_rank_Neg": 26,
    "avg_fp2": 13.28,
    "opp_rank_allowed_fp2_Neu": 14,
    "opp_avg_allowed_fp2": 18.63,
    "fanduelSalary": "$5000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e17757",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(225, 119, 87, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#e17757",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/den.png",
    "headlineNews": "Drew Lock, Blake Bortles, and Brett Rypien tested negative for COVID-19 and have been cleared to return to the team.\u00a0\n",
    "report": "",
    "analysis": "All three signal callers missed Week 12 after contract tracing showed they were not wearing masks around QB Jeff Driskel, who tested positive for the virus. Denver was predictably walloped by the Saints Sunday with practice squad receiver Kendall Hinton under center. Lock will start this week against the Chiefs. He'll only be startable in superflex formats.\u00a0\n",
    "timestamp": "2020-12-01 02:37 PM",
    "source": "Mike Klis on Twitter ",
    "week01": 13.14,
    "week02": -1.2,
    "week03": "DNP",
    "week04": "DNP",
    "week05": "BYE",
    "week06": 5.46,
    "week07": 14.96,
    "week08": 20.82,
    "week09": 30.22,
    "week10": 10.74,
    "week11": 12.1,
    "week12": "DNP",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [13.14, -1.2, 'DNP', 'DNP', 'BYE', 5.46, 14.96, 20.82, 30.22, 10.74, 12.1, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.6, 11.2, 'DNP', 'DNP', 'BYE', 10.9, 8.4, 14.6, 16.6, 14.2, 14.7, 'DNP', 17.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [10.3, 10.8, 'DNP', 'DNP', 'BYE', 1.4, 3.6, 6.7, 10.8, 14.2, 5.5, 'DNP', 10.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(225, 119, 87, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.8, 21.2, 'DNP', 'DNP', 'BYE', 19.9, 14.6, 20.0, 21.6, 27.9, 15.4, 'DNP', 25.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3917315.png",
    "name": "Kyler Murray",
    "depthchart": "Starter: QB-1",
    "team": "Arizona Cardinals",
    "projected": 17.0,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank_Neg": 3,
    "team_rank_Neu": 15,
    "avg_fp2": 27.32,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 14.5,
    "fanduelSalary": "$7600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#97233F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(151, 35, 63, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#97233F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
    "headlineNews": "Kyler Murray (throwing shoulder) was upgraded to \"full\" for Thursday's practice.\u00a0\n",
    "report": "",
    "analysis": "Murray got in a \"limited\" session on Wednesday. Murray was noticeably limited by his shoulder in the Cardinals' Week 12 loss to the Patriots, but coach Kliff Kingsbury claimed it wasn't an issue. It is definitely a concern ahead of Sunday's daunting matchup with the Rams. Murray is a borderline top-five option after several weeks in the top three.\u00a0\n",
    "timestamp": "2020-12-04 12:52 AM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [27.3, 33.14, 24.7, 23.12, 27.3, 28.92, 38.1, 'BYE', 37.92, 30.9, 20.26, 8.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.8, 22.3, 22.3, 20.8, 19.7, 16.0, 22.9, 'BYE', 22.0, 21.7, 22.5, 16.4, 17.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [10.9, 13.9, 11.4, 17.0, 15.5, 14.0, 12.9, 'BYE', 5.7, 14.1, 24.2, 17.6, 9.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.5, 26.1, 24.0, 30.4, 28.8, 27.4, 25.1, 'BYE', 25.1, 31.6, 35.0, 33.8, 23.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13994.png",
    "name": "Cam Newton",
    "depthchart": "Starter: QB-1",
    "team": "New England Patriots",
    "projected": 16.9,
    "opponent": "Los Angeles Chargers",
    "home_away": "at ",
    "opp_rank_Neu": 10,
    "team_rank_Neg": 29,
    "avg_fp2": 18.12,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 20.24,
    "fanduelSalary": "$5800",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Abdomen",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#C60C30",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png",
    "headlineNews": "Cam Newton (abdomen) is questionable for Week 13 against the Chargers.\n",
    "report": "",
    "analysis": "Even so, Newton is\u00a0expected to play after noting that he himself isn't concerned about his status for Week 13. As usual, the Patriots also listed 11 others as questionable and limited throughout the week, most notably G Shaq Mason (calf).\n",
    "timestamp": "2020-12-04 09:28 PM",
    "source": "Los Angeles Chargers on Twitter",
    "week01": 25.7,
    "week02": 35.58,
    "week03": 12.18,
    "week04": "DNP",
    "week05": "BYE",
    "week06": 19.98,
    "week07": 2.82,
    "week08": 18.36,
    "week09": 24.56,
    "week10": 16.82,
    "week11": 19.2,
    "week12": 5.96,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [25.7, 35.58, 12.18, 'DNP', 'BYE', 19.98, 2.82, 18.36, 24.56, 16.82, 19.2, 5.96]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [21.5, 26.2, 23.9, 'DNP', 'BYE', 26.9, 19.6, 14.6, 23.0, 19.8, 18.7, 25.3, 16.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [13.3, 18.8, 14.2, 'DNP', 'BYE', 12.9, 12.7, 11.6, 13.2, 13.0, 12.8, 12.6, 14.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [29.0, 33.6, 30.2, 'DNP', 'BYE', 29.1, 29.1, 28.7, 29.9, 30.2, 28.4, 27.8, 29.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3059989.png",
    "name": "Nick Mullens",
    "depthchart": "Starter: QB-1",
    "team": "San Francisco 49ers",
    "projected": 16.8,
    "opponent": "Buffalo Bills",
    "home_away": "",
    "opp_rank_Neu": 18,
    "team_rank_Neu": 12,
    "avg_fp2": 11.23,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 20.85,
    "fanduelSalary": "$5400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "Nick Mullens completed 24-of-35 passes for 253 yards and one interception in San Francisco's 23-20 Week 12 upset over the Rams.\n",
    "report": "",
    "analysis": "This blurb is being written under Mullens' name, but he was far from league-average in the Niners' upset win over Los Angeles. It was instead Kyle Shanahan and DC Robert Saleh who yet again owned Sean McVay's scheme, sweeping the Rams for the second straight season behind Richard Sherman's\u00a0first-quarter interception, two forced\u00a0fumbles on defense, and rookie Javon Kinlaw's returned interception for a touchdown \u2014 Goff's second of three turnovers on Sunday. Mullen at least sucked it up and went\u00a05-for-5 for 45 yards on the drive that allowed the Niners to tie the game 20-20, and 4-for-5 for 43 yards during the ensuing possession that\u00a0put Robbie Gould in position to sink the game-winning 42-yard field goal. Despite the team's plethora of injuries and COVID stints this year, the 49ers are somehow just one game back of a Wild Card berth in the NFC. Its offense will have an easier task against the Bills on Monday night in Week 13.\n",
    "timestamp": "2020-11-30 01:22 AM",
    "source": null,
    "week01": "DNP",
    "week02": 1.44,
    "week03": 17.72,
    "week04": 8.0,
    "week05": "DNP",
    "week06": "DNP",
    "week07": "DNP",
    "week08": 17.52,
    "week09": 12.64,
    "week10": 12.18,
    "week11": "BYE",
    "week12": 9.08,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 1.44, 17.72, 8.0, 'DNP', 'DNP', 'DNP', 17.52, 12.64, 12.18, 'BYE', 9.08]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 3.7, 16.8, 21.6, 'DNP', 'DNP', 'DNP', 8.1, 22.3, 17.0, 'BYE', 13.3, 16.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 5.1, 2.1, 2.1, 'DNP', 'DNP', 'DNP', 5.3, 7.5, 7.8, 'BYE', 6.1, 8.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 20.0, 15.9, 12.3, 'DNP', 'DNP', 'DNP', 14.7, 20.5, 20.7, 'BYE', 18.9, 21.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/12483.png",
    "name": "Matthew Stafford",
    "depthchart": "Starter: QB-1",
    "team": "Detroit Lions",
    "projected": 16.4,
    "opponent": "Chicago Bears",
    "home_away": "at ",
    "opp_rank_Neu": 11,
    "team_rank_Neu": 13,
    "avg_fp2": 17.23,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 16.72,
    "fanduelSalary": "$5700",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Thumb",
    "tmColorLite": "#0076B6",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(0, 118, 182, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#0076B6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/det.png",
    "headlineNews": "Lions LT Taylor Decker said interim coach Darrell Bevell preached pace at Wednesday's practice, saying pace is a weapon to use against the opposing defense.\n",
    "report": "",
    "analysis": "Hallelujah. Detroit is 13th in offensive pace and 18th in plays per game. Bevell obviously has been running the show on offense all season as the team's offensive coordinator, but maybe since-fired coach Matt Patricia was shackling him and holding the offense back. We'll see. But if the Lions do pick things up with some tempo, it can only be good things for guys like Matthew Stafford, D'Andre Swift, Kenny Golladay, and T.J. Hockenson for fantasy.\n",
    "timestamp": "2020-12-02 07:56 PM",
    "source": "Michael Rothstein on Twitter",
    "week01": 17.18,
    "week02": 17.16,
    "week03": 18.5,
    "week04": 23.34,
    "week05": "BYE",
    "week06": 13.32,
    "week07": 18.4,
    "week08": 23.44,
    "week09": 10.44,
    "week10": 23.04,
    "week11": 7.62,
    "week12": 17.1,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [17.18, 17.16, 18.5, 23.34, 'BYE', 13.32, 18.4, 23.44, 10.44, 23.04, 7.62, 17.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.7, 17.2, 14.7, 19.3, 'BYE', 17.4, 21.1, 19.7, 17.6, 17.7, 18.5, 21.1, 16.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [10.3, 11.1, 10.7, 11.3, 'BYE', 11.1, 10.7, 11.8, 11.8, 10.4, 10.7, 12.0, 11.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 118, 182, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [23.9, 24.6, 26.0, 24.8, 'BYE', 25.3, 24.3, 25.7, 25.6, 24.5, 24.1, 26.0, 25.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15837.png",
    "name": "Mike Glennon",
    "depthchart": "Starter: QB-1",
    "team": "Jacksonville Jaguars",
    "projected": 16.3,
    "opponent": "Minnesota Vikings",
    "home_away": "at ",
    "opp_rank_Pos": 25,
    "team_rank_Neu": 21,
    "avg_fp2": 18.0,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 19.3,
    "fanduelSalary": "$4800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#006778",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 103, 120, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#006778",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/jax.png",
    "headlineNews": "Jaguars coach Doug Marrone said Mike Glennon will start Week 13 against the Vikings.\n",
    "report": "",
    "analysis": "Glennon will remain the starter after\u00a0averaging\u00a06.7 YPA and completing\u00a057 percent of his passes\u00a0in a loss to the Browns. Gardner Minshew (thumb) has been cleared to return, but the Jaguars are sticking with\u00a0journeyman Glennon for another game. Marrone said Jacksonville \"could end up with a\u00a0different starting quarterback each week depending on how things go.\"\u00a0The one-win Jaguars will turn back to\u00a0Jake Luton or Minshew if Glennon struggles.\n",
    "timestamp": "2020-12-02 02:41 PM",
    "source": "NFL Network",
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
    "week12": 18.0,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 18.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 12.6, 16.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 4.7, 8.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 103, 120, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 15.8, 18.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/5536.png",
    "name": "Ben Roethlisberger",
    "depthchart": "Starter: QB-1",
    "team": "Pittsburgh Steelers",
    "projected": 16.1,
    "opponent": "Washington Football Team",
    "home_away": "",
    "opp_rank_Neg": 2,
    "team_rank_Neu": 16,
    "avg_fp2": 19.03,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 17.8,
    "fanduelSalary": "$6500",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Knee",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/pit.png",
    "headlineNews": "Ben\u00a0Roethlisberger completed 36-of-51 passes for 266 yards, one touchdown, and an interception in the Steelers' 19-14 Week 12\u00a0win over the Ravens.\n",
    "report": "",
    "analysis": "Somehow Roethlisberger managed to turn 51 passing attempts into a snooze fest. He turned four red zone trips into a single touchdown, a quick out by JuJu Smith-Schuster, and threw a disgusting fade away interception to Tyus Bowser in the endzone. Even the game-sealing lofted pass to James Washington momentarily dropped the hearts of all Steeler fans. The Ravens defense should be applauded for their fight, considering the team's offense was decimated by injuries and players on the COVID-19 list. Still, the Steelers accomplished their goal of reaching an 11-0 record, and it is notable the team elected to attempt 51 passes compared to just 20 runs despite carrying positive gamescript throughout.\n",
    "timestamp": "2020-12-03 05:40 AM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [22.06, 19.24, 19.18, 'BYE', 21.36, 10.98, 15.62, 15.28, 25.04, 29.32, 17.68, 13.54]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.4, 23.0, 24.3, 'BYE', 19.3, 15.4, 17.9, 14.3, 11.1, 23.3, 22.9, 15.8, 16.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [8.8, 12.1, 10.4, 'BYE', 9.6, 10.5, 9.9, 12.2, 10.2, 9.9, 9.9, 10.4, 9.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [24.3, 25.8, 23.7, 'BYE', 24.5, 24.7, 28.3, 26.4, 24.0, 24.8, 24.8, 24.1, 25.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13199.png",
    "name": "Colt McCoy",
    "depthchart": "Starter: QB-1",
    "team": "New York Giants",
    "projected": 15.6,
    "opponent": "Seattle Seahawks",
    "home_away": "at ",
    "opp_rank_Pos": 32,
    "team_rank_Neg": 28,
    "avg_fp2": 1.94,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 24.87,
    "fanduelSalary": "$4800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#0B2265",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(11, 34, 101, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png",
    "headlineNews": "Daniel Jones (hamstring) was listed as doubtful to play Week 13 against Seattle.\u00a0\n",
    "report": "",
    "analysis": "Giants head coach Joe Judge can finally stop pretending Jones might play in Week 13. Jones'\u00a0best case scenario, per Giants beat writers, is a Week 14 return after tweaking his hamstring in Week 12 against the Bengals. The resurgent Seattle defense becomes a top option against a Colt McCoy-led Giants offense. Evan Engram and the rest of New York's pass catchers should be downgraded with Jones sidelined.\u00a0\n",
    "timestamp": "2020-12-04 06:57 PM",
    "source": "Adam Schefter on Twitter ",
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
    "week12": 1.94,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 1.94]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 4.4, 15.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 2.4, 5.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 13.0, 18.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4038941.png",
    "name": "Justin Herbert",
    "depthchart": "Starter: QB-1",
    "team": "Los Angeles Chargers",
    "projected": 14.6,
    "opponent": "New England Patriots",
    "home_away": "",
    "opp_rank_Neu": 14,
    "team_rank_Pos": 2,
    "avg_fp2": 24.21,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 17.38,
    "fanduelSalary": "$6900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0080C6",
    "tmColorDark": "#002A5E",
    "tmColorLite_rgba": "rgba(0, 128, 198, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 94, 0.2)",
    "tmTextLite": "#0080C6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lac.png",
    "headlineNews": "Justin Herbert completed 31-of-52 passes for 316 yards, one touchdown, and one interception in Los Angeles' 27-17 Week 12 loss to Buffalo.\n",
    "report": "",
    "analysis": "It was an historic play-calling performance from Anthony Lynn, who showed complete incompetence with multiple wasted timeouts in both halves, a handful of elementary (and of course, failed) runs up the gut on 4th-and-short situations, and worst of all, a running back carry from inside the five-yard line with zero timeouts and only :20 seconds remaining while trailing by 10 at the end of regulation. Lynn kept fantasy players happy by keeping Austin Ekeler on the field for 25-of-34 backfield touches and a team-high 30.7% target share in the latter's first game back from injury, but inserted Josh Kelley (7/35/1) at inopportune times and ultimately lost this one with his\u00a0own poor\u00a0decision-making during\u00a0early downs and, quite frankly, every minute of the game. Herbert will keep afloat\u00a0in fantasy on a weekly basis due to his own elite skillset, but managers should expect these\u00a0blips on the radar as long as Lynn is at the helm. Expect the Chargers to get vehemently out-coached in Week 13 against the Patriots.\n",
    "timestamp": "2020-11-29 09:38 PM",
    "source": null,
    "week01": "DNP",
    "week02": 23.24,
    "week03": 15.7,
    "week04": 24.0,
    "week05": 27.36,
    "week06": "BYE",
    "week07": 38.48,
    "week08": 23.22,
    "week09": 23.44,
    "week10": 21.48,
    "week11": 27.74,
    "week12": 17.44,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 23.24, 15.7, 24.0, 27.36, 'BYE', 38.48, 23.22, 23.44, 21.48, 27.74, 17.44]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 0.9, 16.9, 10.9, 22.3, 'BYE', 21.4, 19.7, 22.1, 24.3, 25.0, 19.5, 14.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 0.0, 11.4, 8.4, 13.4, 'BYE', 16.1, 12.6, 22.0, 21.8, 19.7, 18.0, 18.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 128, 198, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 12.0, 25.3, 24.3, 27.0, 'BYE', 24.9, 26.4, 34.2, 34.1, 25.4, 32.5, 26.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3046779.png",
    "name": "Jared Goff",
    "depthchart": "Starter: QB-1",
    "team": "Los Angeles Rams",
    "projected": 14.5,
    "opponent": "Arizona Cardinals",
    "home_away": "at ",
    "opp_rank_Neu": 13,
    "team_rank_Neu": 11,
    "avg_fp2": 16.94,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 19.35,
    "fanduelSalary": "$5800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Jared Goff completed 19-of-31 passes for 198 yards and two picks in Los Angeles' 23-20 Week 12 loss to San Francisco.\n",
    "report": "",
    "analysis": "Aaron Donald did his best to offset another poor night from Goff with a forced fumble-six and pass deflection that resulted in an interception, but it wasn't enough to get Los Angeles over the hump on offense. Goff's first interception, which was inevitably intercepted\u00a0by Richard Sherman,\u00a0was so far off target that it would have been more challenging to walk over and hand it to Sherman. The 49ers tried to help the\u00a0Rams build\u00a0a lead, coughing up two fumbles and an interception mid-game, but Goff never stood a chance in tying Carson Wentz for the most interceptions under pressure (6) this year and failing to get Cooper Kupp involved until the second half. Perhaps Goff\u00a0and Los Angeles' offense will actually be prepared to clap back in what projects as an up-tempo matchup in Week 13 against the Cardinals.\n",
    "timestamp": "2020-11-30 05:23 AM",
    "source": null,
    "week01": 11.5,
    "week02": 23.98,
    "week03": 28.24,
    "week04": 11.7,
    "week05": 25.36,
    "week06": 15.92,
    "week07": 16.86,
    "week08": 12.2,
    "week09": "BYE",
    "week10": 10.48,
    "week11": 25.04,
    "week12": 5.02,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.5, 23.98, 28.24, 11.7, 25.36, 15.92, 16.86, 12.2, 'BYE', 10.48, 25.04, 5.02]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [20.2, 15.9, 16.5, 21.4, 16.7, 19.4, 11.9, 22.5, 'BYE', 18.6, 15.7, 14.4, 14.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.3, 12.7, 8.1, 15.3, 9.3, 12.3, 8.9, 9.0, 'BYE', 12.9, 8.6, 9.0, 9.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [23.0, 26.2, 24.5, 26.9, 23.3, 25.2, 17.9, 25.8, 'BYE', 26.3, 22.7, 25.0, 24.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3912547.png",
    "name": "Sam Darnold",
    "depthchart": "Starter: QB-1",
    "team": "New York Jets",
    "projected": 13.8,
    "opponent": "Las Vegas Raiders",
    "home_away": "",
    "opp_rank_Pos": 27,
    "team_rank_Neg": 32,
    "avg_fp2": 10.63,
    "opp_rank_allowed_fp2_Pos": 24,
    "opp_avg_allowed_fp2": 19.98,
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
    "headlineNews": "Sam Darnold has the second lowest adjusted completion rate this season, according to Pro Football Focus.\u00a0\n",
    "report": "",
    "analysis": "Drew Lock is the only quarterback with a lower adjusted completion rate through 11 weeks. The adjusted rate accounts for dropped passes, throw aways, spiked balls, batted passes, and passes where the quarterback is hit while throwing. Darnold completed a measly 16-of-27 passes for 197 yards with two interceptions on Sunday against Miami. His 69.7 percent adjusted completion rate is about five percent lower than it was in 2019. Darnold's adjusted yards per attempt has taken a big hit too, dropping from 6.9 A/YA in 2018 and 2019 to 5.7 this season. The Jets might be better off with Joe Flacco under center for the remainder of another lost season. Darnold\u00a0will be a reclamation project\u00a0for whoever coaches the Jets in 2021.\u00a0\n",
    "timestamp": "2020-11-30 04:46 PM",
    "source": null,
    "week01": 12.2,
    "week02": 11.86,
    "week03": 9.72,
    "week04": 23.6,
    "week05": "DNP",
    "week06": "DNP",
    "week07": 2.8,
    "week08": 7.42,
    "week09": "DNP",
    "week10": "BYE",
    "week11": "DNP",
    "week12": 6.78,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.2, 11.86, 9.72, 23.6, 'DNP', 'DNP', 2.8, 7.42, 'DNP', 'BYE', 'DNP', 6.78]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.2, 20.2, 13.8, 21.7, 'DNP', 'DNP', 16.3, 15.8, 'DNP', 'BYE', 'DNP', 17.3, 13.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [9.0, 11.1, 8.9, 9.6, 'DNP', 'DNP', 6.7, 6.0, 'DNP', 'BYE', 'DNP', 4.7, 8.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  "rgba(18, 87, 64, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.7, 20.4, 22.1, 22.0, 'DNP', 'DNP', 21.0, 20.5, 'DNP', 'BYE', 'DNP', 18.3, 19.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/8416.png",
    "name": "Alex Smith",
    "depthchart": "Starter: QB-1",
    "team": "Washington Football Team",
    "projected": 13.8,
    "opponent": "Pittsburgh Steelers",
    "home_away": "at ",
    "opp_rank_Neg": 1,
    "team_rank_Neg": 24,
    "avg_fp2": 10.0,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 14.84,
    "fanduelSalary": "$5100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#773141",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(119, 49, 65, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png",
    "headlineNews": "Alex Smith completed 19-of-26 passes for 149 yards, one touchdown, and one interception in Washington's Week 12 win over the Cowboys.\n",
    "report": "",
    "analysis": "Smith wasn't a difference maker by any means, but he was functional and limited his mistakes to just a handful. Rookie running back Antonio Gibson rushed for three touchdowns, and Washington's front seven ate up an injured Cowboys offensive line. The result was a blow out 41-16 win in Dallas, which makes the Football Team your current NFC East leader. That's a low bar but one worth celebrating for Smith, who is two years removed from an awful leg infection. Smith and Terry McLaurin have coach Ron Rivera sitting pretty in year one, though\u00a0Washington will have their hands full with Pittsburgh in Week 13.\n",
    "timestamp": "2020-11-27 01:06 AM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 1.58, 'DNP', 'DNP', 'BYE', 14.0, 16.0, 9.34, 9.06]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 2.8, 'DNP', 'DNP', 'BYE', 4.8, 14.5, 17.4, 19.3, 13.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 5.8, 'DNP', 'DNP', 'BYE', 3.4, 9.1, 5.5, 9.1, 8.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 19.2, 'DNP', 'DNP', 'BYE', 17.9, 22.1, 20.8, 21.4, 21.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/8664.png",
    "name": "Ryan Fitzpatrick",
    "depthchart": "Starter: QB-1",
    "team": "Miami Dolphins",
    "projected": 13.0,
    "opponent": "Cincinnati Bengals",
    "home_away": "",
    "opp_rank_Neu": 22,
    "team_rank_Neg": 25,
    "avg_fp2": 18.75,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 19.25,
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
    "headlineNews": "Tua (left thumb) is questionable to play Week 13 against the Bengals.\u00a0\n",
    "report": "",
    "analysis": "He was limited during Friday's practice. Dolphins head coach Brian Flores said he would determine whether the rookie can start Week 13 after evaluating practice film. Tua was seen this week wearing a dark wrap on his injured throwing thumb. Ryan Fitzpatrick could draw another start in an excellent matchup. Fitz would be a mid-range QB if Tua is inactive.\u00a0\n",
    "timestamp": "2020-12-04 08:34 PM",
    "source": "Tom Pelissero on Twitter ",
    "week01": 8.44,
    "week02": 24.32,
    "week03": 24.7,
    "week04": 23.3,
    "week05": 27.6,
    "week06": 18.04,
    "week07": "BYE",
    "week08": "DNP",
    "week09": "DNP",
    "week10": "DNP",
    "week11": 4.28,
    "week12": 19.28,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.44, 24.32, 24.7, 23.3, 27.6, 18.04, 'BYE', 'DNP', 'DNP', 'DNP', 4.28, 19.28]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.7, 17.7, 18.5, 25.8, 13.7, 21.4, 'BYE', 'DNP', 'DNP', 'DNP', 4.7, 15.5, 13.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [11.9, 6.8, 7.3, 6.9, 8.4, 8.0, 'BYE', 'DNP', 'DNP', 'DNP', 7.1, 7.0, 7.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 142, 151, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [25.3, 23.3, 24.3, 23.1, 23.7, 23.7, 'BYE', 'DNP', 'DNP', 'DNP', 22.6, 23.0, 22.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16757.png",
    "name": "Derek Carr",
    "depthchart": "Starter: QB-1",
    "team": "Las Vegas Raiders",
    "projected": 12.0,
    "opponent": "New York Jets",
    "home_away": "at ",
    "opp_rank_Pos": 30,
    "team_rank_Neu": 19,
    "avg_fp2": 15.84,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 22.03,
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
    "headlineNews": "Derek Carr completed 22-of-34 passes for 215 scoreless yards and one interception before being pulled in the fourth quarter of the Raiders' Week 12 loss to the Falcons.\n",
    "report": "",
    "analysis": "In total, Carr turned the ball over four times, losing three fumbles in addition to his interception. Carr was yanked from the game in the fourth quarter with over 10 minutes to play and the Raiders getting annihilated 40-6 on the scoreboard. It's an embarrassing performance from Carr after he lit the Chiefs up for 275 yards and three touchdowns last Sunday night in what was probably his best game of the season. This was easily his worst, as the Raiders lose a critical game and drop to 6-5. Carr will try to rebound next week at the Jets.\n",
    "timestamp": "2020-11-29 09:19 PM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [13.56, 21.58, 15.44, 20.44, 24.98, 'BYE', 20.26, 12.58, 14.0, 7.16, 22.6, 1.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.5, 16.0, 10.2, 21.2, 17.8, 'BYE', 13.6, 22.7, 20.2, 20.5, 20.7, 20.5, 12.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [9.0, 9.1, 8.7, 7.7, 7.3, 'BYE', 8.5, 9.6, 8.2, 9.4, 8.4, 7.0, 7.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [22.9, 24.0, 22.9, 22.6, 22.2, 'BYE', 22.1, 22.7, 23.4, 22.7, 22.4, 22.5, 22.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2468609.png",
    "name": "Taysom Hill",
    "depthchart": "Starter: QB-1",
    "team": "New Orleans Saints",
    "projected": 10.8,
    "opponent": "Atlanta Falcons",
    "home_away": "at ",
    "opp_rank_Pos": 31,
    "team_rank_Neu": 20,
    "avg_fp2": 7.58,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 24.47,
    "fanduelSalary": "$6300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9b845c",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(155, 132, 92, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#9b845c",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
    "headlineNews": "Taysom Hill completed 9-of-16 passes for 78 yards in the Saints' 31-3 Week 12 win over the Broncos, adding 44 rushing yards and two touchdowns.\u00a0\n",
    "report": "",
    "analysis": "Taysom went Full Tebow against Denver, operating as the Saints' primary goal line ball carrier. He rushed ten times for the second consecutive week behind heavy formations. Hill under center for the Saints has torpedoed Alvin Kamara's fantasy value while lowering the floors of every pass catcher in the New Orleans offense. Hill's rushing upside makes him a plug-and-play option week in and week out in 12-team leagues. He'll be a high-end QB2 in Week 13 against an Atlanta team he dominated in Week 11.\u00a0\n",
    "timestamp": "2020-11-30 12:17 AM",
    "source": null,
    "week01": 4.72,
    "week02": 0.8,
    "week03": -0.8,
    "week04": 1.9,
    "week05": 7.3,
    "week06": "BYE",
    "week07": 0.6,
    "week08": 13.5,
    "week09": 9.92,
    "week10": 2.5,
    "week11": 24.42,
    "week12": 18.52,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.72, 0.8, -0.8, 1.9, 7.3, 'BYE', 0.6, 13.5, 9.92, 2.5, 24.42, 18.52]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.4, 2.4, 2.7, 1.3, 3.0, 'BYE', 4.1, -0.9, 4.5, 4.6, 14.6, 15.0, 10.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.3, 0.0, 0.0, 0.0, 'BYE', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 13.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(155, 132, 92, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.6, 10.4, 8.2, 8.8, 10.3, 'BYE', 9.5, 9.3, 10.1, 7.9, 9.9, 8.1, 23.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2574511.png",
    "name": "Brandon Allen",
    "depthchart": "Starter: QB-1",
    "team": "Cincinnati Bengals",
    "projected": 9.1,
    "opponent": "Miami Dolphins",
    "home_away": "at ",
    "opp_rank_Neu": 17,
    "team_rank_Neu": 18,
    "avg_fp2": 7.14,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 17.82,
    "fanduelSalary": "$4800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#ea7330",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(234, 115, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#ea7330",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png",
    "headlineNews": "Brandon Allen completed 17-of-29 passes for 136 yards, one touchdown and one interception in the Bengals' 19-17, Week 12 loss to the Giants, also losing a fumble.\n",
    "report": "",
    "analysis": "Next. Allen's favorite activity was throwing into a crowd. He was lucky to escape with only one interception. At one point in the second half, he literally targeted too many Giants, causing the G-Men to miss out on the pick. Allen did find Tee Higgins for a nice one-yard score in the end zone where the quarterback bought time for the wideout to cut back across the field. Otherwise, it was a dismal, dismal day for a signal caller who did the same thing for the Broncos last season. The Bengals may eventually turn back to Ryan Finley as they play out the string of their Joe Burrow-less season. The Dolphins are a hilariously bad Week 13 matchup for whomever ends up under for Cincinnati. Don't get cute in DFS or super FLEX.\u00a0\n",
    "timestamp": "2020-11-29 10:30 PM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 7.14]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 12.0, 9.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 0.0, 6.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 11.9, 20.1]
                    }
                    
                    ]
               }
            }];




$scope.positionRB = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116593.png",
    "name": "Dalvin Cook",
    "depthchart": "Starter: RB-1",
    "team": "Minnesota Vikings",
    "projected": 23.2,
    "opponent": "Jacksonville Jaguars",
    "home_away": "",
    "opp_rank_Pos": 29,
    "team_rank_Pos": 6,
    "avg_fp2": 23.7,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 24.52,
    "fanduelSalary": "$9500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e0aa19",
    "tmColorDark": "#300e5a",
    "tmColorLite_rgba": "rgba(224, 170, 25, 0.2)",
    "tmColorDark_rgba": "rgba(48, 14, 90, 0.2)",
    "tmTextLite": "#e0aa19",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/min.png",
    "headlineNews": "Dalvin Cook (ankle) will play in Week 13 against the Jaguars.\n",
    "report": "",
    "analysis": "The issue isn't Cook's status for Sunday, but coach Mike Zimmer's recent remarks that he'd like to \"be smart\" with Dalvin's touches moving forward. Sunday presents an opportunity to do so since the Vikings are favored by -10.5 points at home and implied to score the second-highest total\u00a0(31) of any team on Sunday. Alexander Mattison still has sketchy standalone value since he would likely only be used if this game gets drastically out of hand. Fantasy players should still consider Cook an RB1 despite Zimmer's comments.\n",
    "timestamp": "2020-12-04 07:40 PM",
    "source": "Chris Tomasson on Twitter",
    "week01": 21.3,
    "week02": 16.1,
    "week03": 24.9,
    "week04": 27.6,
    "week05": 17.4,
    "week06": "DNP",
    "week07": "BYE",
    "week08": 47.6,
    "week09": 38.2,
    "week10": 13.2,
    "week11": 22.5,
    "week12": 8.2,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [21.3, 16.1, 24.9, 27.6, 17.4, 'DNP', 'BYE', 47.6, 38.2, 13.2, 22.5, 8.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.1, 12.3, 15.3, 14.0, 15.6, 'DNP', 'BYE', 11.2, 20.2, 10.5, 15.5, 20.2, 23.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [12.8, 5.0, 10.1, 7.0, 11.0, 'DNP', 'BYE', 7.3, 14.4, 12.2, 19.2, 10.4, 9.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  "rgba(224, 170, 25, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [25.8, 23.2, 26.8, 22.0, 22.6, 'DNP', 'BYE', 21.8, 31.9, 25.6, 32.6, 27.9, 26.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3043078.png",
    "name": "Derrick Henry",
    "depthchart": "Starter: RB-1",
    "team": "Tennessee Titans",
    "projected": 20.0,
    "opponent": "Cleveland Browns",
    "home_away": "",
    "opp_rank_Neu": 9,
    "team_rank_Pos": 2,
    "avg_fp2": 19.45,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 18.92,
    "fanduelSalary": "$9200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#4495D1",
    "tmColorDark": "#002A5C",
    "tmColorLite_rgba": "rgba(68, 149, 209, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 92, 0.2)",
    "tmTextLite": "#4495D1",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png",
    "headlineNews": "Titans coach Mike Vrabel said the team has to \"be able to throw the ball\" to Derrick Henry more.\n",
    "report": "",
    "analysis": "\"We have to be able to throw the ball to him,\" Vrabel said. \"We would like to continue to work on the screen game with him, but teams have defended it well.\u00a0Maybe [Titans] haven't run them well. He has a unique skill set, but we need to do a better job than just handing it off to him.\" Henry's 26 targets this year are actually a new career-high, but 2.4 per game is still an egregious amount considering his skillset to flip the field on\u00a0a head of steam\u00a0with\u00a0one catch. Henry has still averaged 29 touches in Tennessee's last two wins as the focal part of the offense, and the fourth-most fantasy points per game (20.1) among running backs this year. Any additional opportunity from Ryan Tannehill would simply be the cherry on top of his outstanding season.\n",
    "timestamp": "2020-12-03 03:10 PM",
    "source": "John Glennon on Twitter",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.6, 8.4, 26.0, 'BYE', 18.8, 39.4, 14.2, 17.2, 6.8, 11.4, 19.7, 37.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.5, 22.9, 15.0, 'BYE', 16.3, 14.9, 20.2, 14.3, 15.3, 17.1, 21.1, 14.9, 20.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.8, 3.9, 1.6, 'BYE', 5.1, 5.3, 3.8, 3.9, 8.8, 5.7, 8.6, 3.2, 6.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [23.0, 24.1, 21.1, 'BYE', 21.4, 22.3, 21.7, 23.5, 25.6, 23.3, 23.6, 23.9, 25.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4035538.png",
    "name": "David Montgomery",
    "depthchart": "Starter: RB-1",
    "team": "Chicago Bears",
    "projected": 18.4,
    "opponent": "Detroit Lions",
    "home_away": "",
    "opp_rank_Pos": 28,
    "team_rank_Neg": 32,
    "avg_fp2": 11.82,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 30.44,
    "fanduelSalary": "$5500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#c36835",
    "tmColorDark": "#0B162A",
    "tmColorLite_rgba": "rgba(195, 104, 53, 0.2)",
    "tmColorDark_rgba": "rgba(11, 22, 42, 0.2)",
    "tmTextLite": "#c36835",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png",
    "headlineNews": "David Montgomery rushed 11 times for 103 yards and caught 5-of-6 targets for 40 yards and a touchdown in Week 12 against the Packers.\n",
    "report": "",
    "analysis": "This was Montgomery\u2019s first game in two weeks after spending Week 10 in the concussion protocol. He set up Chicago\u2019s first touchdown on a 13-yard catch but was tackled inside the five-yard line. He later found the end-zone on a goal-line screen deep in the fourth quarter. Montgomery got most of his rushing on a 57-yard run but this was one of his best games given the negative gamescript.\u00a0 Montgomery had been struggling before the injury, averaging 3.6 YPC. He's an\u00a0RB3 play for a matchup with the Lions in Week 13.\n",
    "timestamp": "2020-11-30 04:52 AM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.9, 20.2, 6.4, 9.2, 15.4, 11.7, 9.4, 11.5, 3.7, 'DNP', 'BYE', 22.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.2, 11.2, 15.5, 16.0, 5.9, 13.2, 17.5, 11.3, 13.4, 'DNP', 'BYE', 11.7, 18.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.6, 1.5, 3.7, 3.8, 2.7, 3.1, 8.5, 4.5, 4.5, 'DNP', 'BYE', 5.4, 4.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  "rgba(195, 104, 53, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.5, 13.5, 16.2, 14.2, 15.5, 13.9, 20.0, 17.0, 10.7, 'DNP', 'BYE', 17.7, 15.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3054850.png",
    "name": "Alvin Kamara",
    "depthchart": "Starter: RB-1",
    "team": "New Orleans Saints",
    "projected": 17.0,
    "opponent": "Atlanta Falcons",
    "home_away": "at ",
    "opp_rank_Neg": 6,
    "team_rank_Neu": 7,
    "avg_fp2": 20.83,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 16.86,
    "fanduelSalary": "$7000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9b845c",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(155, 132, 92, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#9b845c",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
    "headlineNews": "Alvin Kamara rushed 11 times for 54 yards in the Saints' Week 12 win against the Broncos, adding one catch for -2 yards.\u00a0\n",
    "report": "",
    "analysis": "Taysom Hill has proven to be disastrous for Kamara's fantasy value. Through two weeks with Hill under center, Kamara has finished as RB25 and (so far) RB29 thanks to a massive dip in pass game volume. The pass-catching dynamo has exactly one reception in two games with Hill as the New Orleans starter. Latavius Murray, meanwhile, has asserted himself as the primary early down ball carrier for the Saints, getting 19 totes against Denver. It's the worth of all worlds for Kamara, who as of three weeks ago was the surest thing in all of fantasy football. Perhaps Kamara will be utilized more if Week 13 gives the Saints a more competitive game. He should be regarded as an OK RB2 for as long as Hill is the team's starter.\u00a0\n",
    "timestamp": "2020-11-30 12:52 AM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [21.2, 33.9, 38.2, 19.4, 15.9, 'BYE', 18.8, 20.8, 13.4, 31.3, 10.5, 5.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [20.0, 19.4, 22.1, 18.6, 21.2, 'BYE', 21.9, 15.5, 19.1, 21.5, 17.6, 17.2, 17.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [9.1, 6.6, 6.4, 10.0, 11.4, 'BYE', 10.5, 11.2, 8.6, 9.2, 9.6, 9.7, 9.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(155, 132, 92, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [25.6, 24.0, 25.1, 27.6, 27.9, 'BYE', 28.5, 29.9, 24.6, 24.7, 26.4, 24.8, 25.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3886818.png",
    "name": "Myles Gaskin",
    "depthchart": "Starter: RB-1",
    "team": "Miami Dolphins",
    "projected": 15.4,
    "opponent": "Cincinnati Bengals",
    "home_away": "",
    "opp_rank_Pos": 30,
    "team_rank_Neg": 30,
    "avg_fp2": 11.93,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 20.66,
    "fanduelSalary": "$5900",
    "hasStatus": "Status",
    "healthOut": "Ir-r",
    "injury": "Knee - MCL",
    "tmColorLite": "#008E97",
    "tmColorDark": "#005778",
    "tmColorLite_rgba": "rgba(0, 142, 151, 0.2)",
    "tmColorDark_rgba": "rgba(0, 87, 120, 0.2)",
    "tmTextLite": "#f5821f",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/mia.png",
    "headlineNews": "Myles Gaskin (knee, IR) is \"trending toward\" playing in Week 13 against the Bengals.\u00a0\n",
    "report": "",
    "analysis": "ESPN's Cameron Wolfe said Gaskin, who has missed four games with a sprained knee, has a good chance to return against the Bengals. Gaskin has practiced for the past two weeks and would have to be activated to the 53-man roster by Saturday afternoon. The rest of Miami's backfield wiped out by injuries means Gaskin could step into a big workload against the Bengals. He would be a high-end RB2 based on volume alone if he suits up.\u00a0\n",
    "timestamp": "2020-12-04 10:42 PM",
    "source": "Cameron Wolfe on Twitter",
    "week01": 8.6,
    "week02": 11.2,
    "week03": 12.0,
    "week04": 7.7,
    "week05": 17.6,
    "week06": 14.6,
    "week07": "BYE",
    "week08": 11.8,
    "week09": "DNP",
    "week10": "DNP",
    "week11": "DNP",
    "week12": "DNP",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.6, 11.2, 12.0, 7.7, 17.6, 14.6, 'BYE', 11.8, 'DNP', 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.2, 12.2, 8.7, 9.2, 3.9, 14.4, 'BYE', 12.6, 'DNP', 'DNP', 'DNP', 'DNP', 15.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.1, 3.2, 6.9, 4.4, 3.5, 5.3, 'BYE', 8.2, 'DNP', 'DNP', 'DNP', 'DNP', 4.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 142, 151, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [1.8, 7.6, 13.7, 13.1, 9.9, 12.4, 'BYE', 14.2, 'DNP', 'DNP', 'DNP', 'DNP', 15.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2576414.png",
    "name": "Raheem Mostert",
    "depthchart": "Starter: RB-1",
    "team": "San Francisco 49ers",
    "projected": 14.8,
    "opponent": "Buffalo Bills",
    "home_away": "",
    "opp_rank_Pos": 25,
    "team_rank_Neu": 16,
    "avg_fp2": 14.42,
    "opp_rank_allowed_fp2_Neu": 15,
    "opp_avg_allowed_fp2": 20.15,
    "fanduelSalary": "$6200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "Raheem Mostert rushed 16 times for 43 yards and one score, hauling in both of his targets in San Francisco's Week 12 win over the Rams.\n",
    "report": "",
    "analysis": "Mostert was in on just 40% of San Francisco's offensive snaps but handled a backfield-high 18 touches, only one of which came on third down. Jerick McKinnon meanwhile was on the field for every passing-down situation. Mostert still had his ups and downs in his first game action since Week 6, putting the 49ers ahead with an eight-yard touchdown scamper in the first quarter and giving the ball back to the Rams with a third-quarter fumble. His touch count and usage was still encouraging since he essentially returned as the team's workhorse ahead of Jeff Wilson (12/43). Mostert will remain a confident RB2 in Week 13 against the Bills.\n",
    "timestamp": "2020-11-30 01:37 PM",
    "source": null,
    "week01": 23.1,
    "week02": 17.7,
    "week03": "DNP",
    "week04": "DNP",
    "week05": 13.4,
    "week06": 8.6,
    "week07": "DNP",
    "week08": "DNP",
    "week09": "DNP",
    "week10": "DNP",
    "week11": "BYE",
    "week12": 9.3,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [23.1, 17.7, 'DNP', 'DNP', 13.4, 8.6, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 9.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.6, 13.6, 'DNP', 'DNP', 18.5, 13.6, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 12.2, 14.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 'DNP', 'DNP', 2.3, 0.0, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 0.0, 0.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.6, 18.1, 'DNP', 'DNP', 16.5, 14.2, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 15.2, 15.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4045163.png",
    "name": "Miles Sanders",
    "depthchart": "Starter: RB-1",
    "team": "Philadelphia Eagles",
    "projected": 14.8,
    "opponent": "Green Bay Packers",
    "home_away": "at ",
    "opp_rank_Neu": 14,
    "team_rank_Neu": 13,
    "avg_fp2": 12.47,
    "opp_rank_allowed_fp2_Pos": 30,
    "opp_avg_allowed_fp2": 27.65,
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
    "headlineNews": "Miles Sanders' share of the Eagles' rushing attempts has dropped over the past three weeks.\u00a0\n",
    "report": "",
    "analysis": "He bottomed out on Monday night against Seattle with 50 percent of the team's rushes, gaining 15 yards on six carries. Coming back from injury three weeks ago, Sanders looked to have the backfield on lock down, getting 77 percent of the team's rushing attempts, then 70 percent the following weeks. Meanwhile, Boston Scott's rushing share has ticked up. He saw 43.7 percent of the team's carries against the Seahawks. Sanders, who hasn't scored a touchdown since mid-October, has a frightening fantasy floor as the lead back in an abysmal Philadelphia offense. Maybe a date with a porous Packers run defense will offer some sort of bump for Sanders in Week 13.\u00a0\n",
    "timestamp": "2020-12-01 02:09 PM",
    "source": "John Daigle on Twitter ",
    "week01": "DNP",
    "week02": 18.6,
    "week03": 12.7,
    "week04": 8.6,
    "week05": 22.9,
    "week06": 11.7,
    "week07": "DNP",
    "week08": "DNP",
    "week09": "BYE",
    "week10": 12.5,
    "week11": 7.6,
    "week12": 5.2,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 18.6, 12.7, 8.6, 22.9, 11.7, 'DNP', 'DNP', 'BYE', 12.5, 7.6, 5.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 22.6, 22.9, 15.7, 13.1, 9.2, 'DNP', 'DNP', 'BYE', 15.0, 14.1, 14.2, 14.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 3.8, 4.6, 6.6, 4.8, 8.3, 'DNP', 'DNP', 'BYE', 6.4, 5.7, 6.4, 6.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 14.3, 21.4, 21.7, 19.6, 20.5, 'DNP', 'DNP', 'BYE', 22.3, 20.1, 18.7, 18.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3919596.png",
    "name": "Chris Carson",
    "depthchart": "Starter: RB-1",
    "team": "Seattle Seahawks",
    "projected": 14.7,
    "opponent": "New York Giants",
    "home_away": "",
    "opp_rank_Neg": 5,
    "team_rank_Neu": 11,
    "avg_fp2": 15.27,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 21.4,
    "fanduelSalary": "$6300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#69BE28",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(105, 190, 40, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#69BE28",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
    "headlineNews": "Seahawks head coach Pete Carroll said Chris Carson (foot) and Carlos Hyde (toe) will play in Week 13 against the Giants.\u00a0\n",
    "report": "",
    "analysis": "There were serious questions about Hyde's availability since he was downgraded to a DNP on Thursday. He'll suit up this week, according to Carroll, taking some of the shine off Carson. Hyde out-snapped and out-touched Carson in Week 12, though the team may have wanted to ease Carson back into the lineup after an extended layoff. Carroll said he expects Carson to get more run in Week 13. He's a must-play for fantasy managers.\u00a0\n",
    "timestamp": "2020-12-05 03:52 PM",
    "source": "Bob Condotta on Twitter ",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [21.6, 18.3, 9.1, 'DNP', 16.9, 'BYE', 4.6, 'DNP', 'DNP', 'DNP', 'DNP', 12.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.2, 12.5, 16.4, 'DNP', 16.7, 'BYE', 12.0, 'DNP', 'DNP', 'DNP', 'DNP', 10.8, 14.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.2, 5.1, 7.1, 'DNP', 10.4, 'BYE', 9.1, 'DNP', 'DNP', 'DNP', 'DNP', 5.6, 6.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.0, 17.4, 20.3, 'DNP', 22.5, 'BYE', 20.8, 'DNP', 'DNP', 'DNP', 'DNP', 17.3, 16.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4242335.png",
    "name": "Jonathan Taylor",
    "depthchart": "Starter: RB-1",
    "team": "Indianapolis Colts",
    "projected": 14.7,
    "opponent": "Houston Texans",
    "home_away": "at ",
    "opp_rank_Pos": 31,
    "team_rank_Neu": 21,
    "avg_fp2": 10.95,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 28.0,
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
    "headlineNews": "Colts activated RB Jonathan Taylor from the reserve/COVID-19 list.\n",
    "report": "",
    "analysis": "Taylor missed Week 12 after he was ruled a high-risk close contact. Getting activated means he should play in Sunday's game with the Texans.\u00a0Taylor had a breakout Week 11 before missing last week. Houston's bottom-two run defense is a favorable matchup for Taylor in his return.\n",
    "timestamp": "2020-12-02 05:41 PM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.9, 18.0, 12.7, 8.4, 14.4, 13.5, 'BYE', 4.1, 8.4, 4.7, 13.4, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.9, 14.1, 12.7, 15.9, 12.4, 12.9, 'BYE', 18.8, 6.6, 12.3, 10.7, 'DNP', 14.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 8.5, 14.4, 11.5, 6.8, 9.6, 'BYE', 12.0, 5.5, 6.0, 7.0, 'DNP', 9.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.4, 21.4, 19.4, 17.2, 18.0, 20.2, 'BYE', 14.8, 16.4, 13.3, 15.7, 'DNP', 14.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3068267.png",
    "name": "Austin Ekeler",
    "depthchart": "Starter: RB-1",
    "team": "Los Angeles Chargers",
    "projected": 13.9,
    "opponent": "New England Patriots",
    "home_away": "",
    "opp_rank_Neu": 21,
    "team_rank_Neu": 11,
    "avg_fp2": 14.42,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 19.49,
    "fanduelSalary": "$7100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0080C6",
    "tmColorDark": "#002A5E",
    "tmColorLite_rgba": "rgba(0, 128, 198, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 94, 0.2)",
    "tmTextLite": "#0080C6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lac.png",
    "headlineNews": "Kalen Ballage (ankle) is listed as questionable for Week 13 against the Patriots.\u00a0\n",
    "report": "",
    "analysis": "Ballage practiced fully Friday following a limited session on Thursday. He looks to be on the right side of questionable, though it probably doesn't matter much with Austin Ekeler back as the Chargers' lead RB. Ballage won't be a fantasy option as long as Ekeler is healthy and active.\u00a0\n",
    "timestamp": "2020-12-04 09:25 PM",
    "source": "LA Chargers on Twitter ",
    "week01": 9.2,
    "week02": 16.8,
    "week03": 25.8,
    "week04": 1.9,
    "week05": "DNP",
    "week06": "BYE",
    "week07": "DNP",
    "week08": "DNP",
    "week09": "DNP",
    "week10": "DNP",
    "week11": "DNP",
    "week12": 18.4,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.2, 16.8, 25.8, 1.9, 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 18.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.3, 7.9, 17.6, 11.1, 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 13.6, 13.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.8, 2.9, 2.1, 3.5, 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 4.0, 1.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 128, 198, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.0, 22.0, 17.7, 22.3, 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 19.2, 19.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3042519.png",
    "name": "Aaron Jones",
    "depthchart": "Starter: RB-1",
    "team": "Green Bay Packers",
    "projected": 13.5,
    "opponent": "Philadelphia Eagles",
    "home_away": "",
    "opp_rank_Neu": 23,
    "team_rank_Neu": 10,
    "avg_fp2": 17.0,
    "opp_rank_allowed_fp2_Neu": 9,
    "opp_avg_allowed_fp2": 18.57,
    "fanduelSalary": "$7200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#d7a017",
    "tmColorDark": "#203731",
    "tmColorLite_rgba": "rgba(215, 160, 23, 0.2)",
    "tmColorDark_rgba": "rgba(32, 55, 49, 0.2)",
    "tmTextLite": "#d7a017",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png",
    "headlineNews": "Aaron Jones rushed 17 times for 90 yards in Week 12 against Chicago.\n",
    "report": "",
    "analysis": "Jones didn't have any scoring chances\u00a0with Aaron Rodgers throwing four\u00a0touchdowns. He got vultured in the red-zone by Jamaal Williams, who ran for a 17-yard TD, and didn\u2019t have a role in the pass game, catching just one\u00a0of his two\u00a0targets. Jones had been held under 60 yards in four straight games going into Sunday night, so this was a mini-breakout.\u00a0Jones has a favorable matchup with an Eagles defense that\u2019s allowing 133 rushing yards per game in Week 13.\n",
    "timestamp": "2020-11-30 05:11 AM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [15.6, 43.6, 15.6, 19.6, 'BYE', 11.6, 'DNP', 'DNP', 10.4, 12.0, 15.1, 9.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.4, 18.4, 17.3, 16.7, 'BYE', 13.6, 'DNP', 'DNP', 14.3, 17.3, 15.3, 12.5, 13.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.1, 3.4, 3.8, 8.9, 'BYE', 3.1, 'DNP', 'DNP', 4.6, 18.0, 1.2, 4.6, 4.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [24.8, 23.7, 24.1, 21.9, 'BYE', 27.7, 'DNP', 'DNP', 25.7, 32.5, 27.6, 25.4, 25.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4360294.png",
    "name": "Antonio Gibson",
    "depthchart": "Starter: RB-1",
    "team": "Washington Football Team",
    "projected": 13.3,
    "opponent": "Pittsburgh Steelers",
    "home_away": "at ",
    "opp_rank_Neu": 8,
    "team_rank_Neu": 19,
    "avg_fp2": 15.07,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 15.45,
    "fanduelSalary": "$6800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#773141",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(119, 49, 65, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png",
    "headlineNews": "Antonio Gibson rushed 20\u00a0times for 115 yards and three touchdowns in Washington's\u00a0Week 12 win over the Cowboys.\n",
    "report": "",
    "analysis": "The game fantasy managers had been waiting for, Gibson matched his season highs in carries and catches while scoring touchdowns number\u00a0nine, 10 and 11 on the ground. Gibson's scores came from five, 23 and 37 yards out, showing off his big-play ability, albeit against an awful defense. Perhaps most eye-brow raising of all, Gibson out-targeted J.D. McKissic 7-2, a trend that has been slowly developing since McKissic's ludicrous first half against the Giants in Week 9.\u00a0Already locked in as an RB1 due to his early-down dominance, Gibson will push for elite RB1 value if he begins to consistently catch 4-5 passes. The Steelers are a tough Week 13 matchup.\u00a0\n",
    "timestamp": "2020-11-27 03:31 PM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.4, 11.7, 11.5, 20.8, 7.6, 7.5, 18.8, 'BYE', 11.0, 20.5, 16.9, 34.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.3, 6.1, 8.1, 7.6, 12.2, 11.6, 11.9, 'BYE', 10.7, 19.3, 11.4, 11.1, 13.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.6, 0.7, 6.7, 3.0, 6.6, 8.5, 9.2, 'BYE', 8.1, 8.9, 8.3, 7.2, 3.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.3, 10.0, 14.8, 19.2, 20.3, 17.5, 11.3, 'BYE', 19.1, 17.2, 16.5, 18.6, 15.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4052042.png",
    "name": "James Robinson",
    "depthchart": "Starter: RB-1",
    "team": "Jacksonville Jaguars",
    "projected": 13.2,
    "opponent": "Minnesota Vikings",
    "home_away": "at ",
    "opp_rank_Neu": 19,
    "team_rank_Neg": 24,
    "avg_fp2": 16.64,
    "opp_rank_allowed_fp2_Neu": 14,
    "opp_avg_allowed_fp2": 19.63,
    "fanduelSalary": "$7300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#006778",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 103, 120, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#006778",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/jax.png",
    "headlineNews": "James Robinson rushed 22 times for 128 yards and a touchdown in the Jaguars' Week 12 loss to the Browns, adding five catches for 31 yards.\n",
    "report": "",
    "analysis": "Robinson continued his historic season with 159 yards from scrimmage this week. He currently sits at 1,170 yards from scrimmage. He is currently pacing for the most yards from scrimmage by a UDFA rookie in the Super Bowl era. He really just needs to stay healthy to get the record of 1,278 set by Phillip Lindsay in 2018. No other running back saw a target or carry once again. Robinson is operating as the league's premier three-down back and should be viewed as one of the safest RB1s every week.\n",
    "timestamp": "2020-11-29 09:44 PM",
    "source": null,
    "week01": 9.5,
    "week02": 19.5,
    "week03": 27.9,
    "week04": 12.7,
    "week05": 7.5,
    "week06": 13.3,
    "week07": 29.7,
    "week08": "BYE",
    "week09": 15.9,
    "week10": 12.2,
    "week11": 10.4,
    "week12": 24.4,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.5, 19.5, 27.9, 12.7, 7.5, 13.3, 29.7, 'BYE', 15.9, 12.2, 10.4, 24.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.0, 9.2, 15.4, 12.1, 19.6, 9.9, 11.6, 'BYE', 20.3, 12.4, 18.7, 13.6, 13.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.4, 7.9, 10.0, 15.8, 10.6, 13.3, 7.1, 'BYE', 16.0, 9.4, 7.2, 10.8, 9.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 103, 120, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.2, 13.6, 19.6, 20.8, 25.7, 19.5, 22.9, 'BYE', 29.2, 26.9, 22.8, 21.8, 24.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4035072.png",
    "name": "Benny Snell",
    "depthchart": "Starter: RB-1",
    "team": "Pittsburgh Steelers",
    "projected": 12.2,
    "opponent": "Washington Football Team",
    "home_away": "",
    "opp_rank_Neu": 16,
    "team_rank_Neg": 25,
    "avg_fp2": 4.3,
    "opp_rank_allowed_fp2_Neu": 7,
    "opp_avg_allowed_fp2": 17.37,
    "fanduelSalary": "$5400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/pit.png",
    "headlineNews": "Benny Snell rushed 16 times for 60 yards in the Steelers' Week 12\u00a0win over the Ravens.\n",
    "report": "",
    "analysis": "Snell contributing 33 receiving yards by catching 3-of-4 targets is the cherry on top of the cake for Wednesday evening football weirdness, since Snell entered the day with 23 total receiving yards in his career. With James Conner testing positive for COVID-19, Snell might be the clear lead ball carrier for the next two weeks against Washington and the Bills.\n",
    "timestamp": "2020-12-03 01:43 AM",
    "source": null,
    "week01": 11.3,
    "week02": -1.4,
    "week03": 1.1,
    "week04": "BYE",
    "week05": 1.9,
    "week06": 8.6,
    "week07": 6.2,
    "week08": 0.0,
    "week09": "DNP",
    "week10": 1.2,
    "week11": 7.5,
    "week12": 10.8,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.3, -1.4, 1.1, 'BYE', 1.9, 8.6, 6.2, 0.0, 'DNP', 1.2, 7.5, 10.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.6, 9.6, 11.9, 'BYE', 7.8, 4.5, 8.0, 6.1, 'DNP', 1.7, 6.0, 6.5, 12.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.0, 'BYE', 0.0, 0.1, 0.0, 0.6, 'DNP', 0.0, 0.4, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.5, 8.6, 9.5, 'BYE', 9.6, 9.3, 10.7, 12.1, 'DNP', 11.0, 11.4, 8.3, 7.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2979843.png",
    "name": "Kenyan Drake",
    "depthchart": "Starter: RB-1",
    "team": "Arizona Cardinals",
    "projected": 11.9,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank_Neg": 4,
    "team_rank_Pos": 4,
    "avg_fp2": 12.78,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 16.99,
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
    "headlineNews": "Kenyan Drake rushed 22 times for 78 yards and two touchdowns in the Cardinals' Week 12 loss to the Patriots, adding three receptions for 15 additional yards.\u00a0\n",
    "report": "",
    "analysis": "The two-score game was Drake's second of the season, giving him three touchdowns over his past two appearances. Both came from the one-yard line.\u00a0Drake's\u00a022 carries were a new season high. Drake's role has not changed at all since he returned from an ankle injury in Week 10. Volume and goal-line opportunities are keeping him alive in the low-end RB2 range, though the Rams are a rough Week 13 matchup.\u00a0\n",
    "timestamp": "2020-11-30 01:00 AM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [13.5, 10.5, 8.4, 3.5, 12.7, 28.4, 4.6, 'BYE', 'DNP', 9.4, 14.0, 22.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.6, 10.1, 16.8, 13.1, 14.5, 9.6, 14.0, 'BYE', 'DNP', 14.4, 16.3, 13.2, 11.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.3, 5.1, 12.4, 14.0, 2.0, 0.9, 6.8, 'BYE', 'DNP', 0.0, 1.3, 3.4, 1.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.5, 20.4, 24.5, 26.9, 17.1, 16.0, 21.0, 'BYE', 'DNP', 22.6, 16.4, 14.5, 19.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/8479.png",
    "name": "Frank Gore",
    "depthchart": "Starter: RB-1",
    "team": "New York Jets",
    "projected": 11.0,
    "opponent": "Las Vegas Raiders",
    "home_away": "",
    "opp_rank_Neu": 13,
    "team_rank_Neg": 26,
    "avg_fp2": 6.51,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 25.13,
    "fanduelSalary": "$4400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#125740",
    "tmColorDark": "#003f2d",
    "tmColorLite_rgba": "rgba(18, 87, 64, 0.2)",
    "tmColorDark_rgba": "rgba(0, 63, 45, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png",
    "headlineNews": "Jets coach Adam Gase said he \"feels good\" about Frank Gore's workload moving forward.\n",
    "report": "",
    "analysis": "\u201cWe\u2019re going to just keep trying to rotate those guys as well as we can,\" Gase said lying through his teeth.\u00a0\"The flow of the game really doesn\u2019t always go as smooth as you want. I think, with the amount of games we\u2019ve got left, I feel good about Gore's workload. I mean, watching him practice, you can\u2019t tell.\u00a0He still looks pretty good in practice.\u201d Rather than allowing either Ty Johnson or Josh Adams, currently in their second\u00a0and third years in the league, to soak up rookie La'Mical Perine's (injured reserve) role Sunday, Gase leaned on 37-year-old Gore for his second-highest touch count (21) and snaps\u00a0(32, 58%) of the year in New York's three-score blowout loss. As long as Gase is still calling plays and at the head of the table, Gore will clearly continue receiving empty touches while the offense fails to score points weekly.\n",
    "timestamp": "2020-12-04 06:36 PM",
    "source": "NY Post",
    "week01": 2.4,
    "week02": 6.3,
    "week03": 6.7,
    "week04": 4.1,
    "week05": 3.0,
    "week06": 9.0,
    "week07": 6.0,
    "week08": 3.0,
    "week09": 6.9,
    "week10": "BYE",
    "week11": 14.1,
    "week12": 10.1,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.4, 6.3, 6.7, 4.1, 3.0, 9.0, 6.0, 3.0, 6.9, 'BYE', 14.1, 10.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.9, 7.8, 4.9, 6.3, 9.5, 7.0, 5.9, 4.3, 4.4, 'BYE', 7.1, 8.5, 11.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.9, 4.2, 4.4, 3.0, 2.2, 5.4, 3.0, 3.4, 2.7, 'BYE', 4.2, 2.6, 3.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  "rgba(18, 87, 64, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.8, 17.7, 17.4, 16.1, 14.7, 17.9, 15.6, 16.7, 16.0, 'BYE', 17.8, 15.4, 16.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3128720.png",
    "name": "Nick Chubb",
    "depthchart": "Starter: RB-1",
    "team": "Cleveland Browns",
    "projected": 10.8,
    "opponent": "Tennessee Titans",
    "home_away": "at ",
    "opp_rank_Neu": 17,
    "team_rank_Pos": 1,
    "avg_fp2": 16.26,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 22.6,
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
    "headlineNews": "Nick Chubb rushed 19 times for 144 yards and a touchdown in the Browns Week 12 win over the Jaguars.\n",
    "report": "",
    "analysis": "Chubb now has three straight 100-yard games after returning from a knee injury that sent him to injured reserve for a number of weeks. He has also carried the ball at least 19 times in every game since getting back on the field. Chubb added three receptions for 32 yards. It was his first game of the year with more than one reception. As long as the Browns are facing an opponent that doesn't project to put up points in droves, 100 yards and a score could become an every-week thing for Chubb. No team wants to run the ball more than Cleveland and they do it well enough to build an offense around it. Chubb is an unquestioned RB1 going forward.\u00a0\n",
    "timestamp": "2020-11-29 09:24 PM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.1, 25.8, 23.5, 4.3, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 18.6, 11.4, 25.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.9, 13.3, 10.9, 10.2, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 15.8, 11.4, 16.6, 10.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.7, 3.5, 2.6, 7.5, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 4.1, 3.5, 4.8, 6.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.4, 20.8, 18.1, 23.9, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 22.7, 18.9, 21.0, 24.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15826.png",
    "name": "Giovani Bernard",
    "depthchart": "Starter: RB-1",
    "team": "Cincinnati Bengals",
    "projected": 10.4,
    "opponent": "Miami Dolphins",
    "home_away": "at ",
    "opp_rank_Pos": 26,
    "team_rank_Neg": 29,
    "avg_fp2": 8.13,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 20.95,
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
    "headlineNews": "Giovani Bernard rushed eight times for 32 yards in the Bengals' Week 12 loss to the Giants, adding two receptions for 17 additional yards.\u00a0\n",
    "report": "",
    "analysis": "Bernard had seven more carries than any other Bengals back, but with the passing game completely incapable of sustaining drives, there wasn't much work to go around. Bernard has now been held below 10 totes in three straight games. Joe Mixon must miss at least one more game on injured reserve, but with bye weeks functionally over and the player pool flush, Bernard is struggling to provide RB2 relevance in a dead-letter offense. The Dolphins are a shy-away Week 13 matchup.\u00a0\n",
    "timestamp": "2020-11-30 01:05 AM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.8, 5.0, 7.0, 1.9, 0.9, 10.3, 18.1, 21.3, 'BYE', 6.7, 7.5, 5.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.2, 10.0, 4.7, 6.3, 5.5, 5.2, 14.0, 10.4, 'BYE', 9.9, 9.3, 12.1, 10.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.6, 8.2, 1.0, 0.9, 0.6, 0.0, 7.5, 2.6, 'BYE', 1.8, 3.2, 4.2, 0.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.5, 17.8, 14.0, 11.3, 16.7, 12.1, 18.9, 15.3, 'BYE', 12.6, 14.6, 15.4, 11.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4242214.png",
    "name": "Clyde Edwards-Helaire",
    "depthchart": "Starter: RB-1",
    "team": "Kansas City Chiefs",
    "projected": 10.2,
    "opponent": "Denver Broncos",
    "home_away": "",
    "opp_rank_Pos": 27,
    "team_rank_Neu": 18,
    "avg_fp2": 12.51,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 21.01,
    "fanduelSalary": "$6100",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Illness",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Clyde-Edwards Helaire (illness) didn't practice Friday.\u00a0\n",
    "report": "",
    "analysis": "Apparently it's a stomach virus keeping Edwards-Helaire out of practice. Head coach Andy Reid said he thinks the rookie will be able to suit up Sunday night against Denver despite missing the week's final two practices with the stomach illness. Probably neither Le'Veon Bell nor Darrel\u00a0Williams would dominate KC's backfield if CEH is held out. Williams would seem to have an edge on the pass catching role if CEH is out. Bell would likely take early downs and be the favorite for short yardage and goal line work.\u00a0\n",
    "timestamp": "2020-12-04 07:16 PM",
    "source": "Adam Teicher on Twitter ",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [19.8, 10.0, 15.9, 10.6, 9.5, 18.9, 12.8, 4.6, 10.9, 'BYE', 20.2, 4.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.2, 14.3, 11.1, 15.7, 13.2, 15.9, 17.0, 12.6, 8.0, 'BYE', 8.4, 10.2, 10.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.1, 11.9, 11.3, 13.2, 10.8, 7.9, 9.5, 8.4, 11.1, 'BYE', 6.9, 10.9, 9.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.1, 20.9, 16.8, 20.3, 20.8, 22.6, 21.0, 16.5, 19.2, 'BYE', 15.2, 18.9, 17.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4035676.png",
    "name": "Zack Moss",
    "depthchart": "Starter: RB-1",
    "team": "Buffalo Bills",
    "projected": 10.2,
    "opponent": "San Francisco 49ers",
    "home_away": "at ",
    "opp_rank_Neu": 10,
    "team_rank_Neu": 22,
    "avg_fp2": 8.19,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 16.86,
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
    "headlineNews": "Zack Moss rushed nine times for 59 yards, chipping in another nine yards on two targets in Buffalo's Week 12 win over the Chargers.\n",
    "report": "",
    "analysis": "A majority of Moss' production came during his 32-yard dash up the middle in the second half. It was also the first time in Buffalo's last three games that Devin Singletary (11/82) out-touched Moss (14-11) altogether. Having said that, neither are trustworthy for re-draft leagues given OC Brian Daboll's\u00a0recent propensity to put the game on Josh Allen's shoulders both through the air and on the ground. Moss should only be considered an option for deeper leagues in Week 13.\n",
    "timestamp": "2020-11-30 03:28 PM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.2, 3.7, 'DNP', 'DNP', 'DNP', 1.0, 8.7, 20.1, 11.8, 2.2, 'BYE', 7.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.0, 3.9, 'DNP', 'DNP', 'DNP', 7.8, 7.5, 4.5, 8.4, 12.0, 'BYE', 17.5, 10.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 4.4, 'DNP', 'DNP', 'DNP', 2.4, 0.0, 1.7, 7.7, 6.0, 'BYE', 2.0, 1.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.2, 13.4, 'DNP', 'DNP', 'DNP', 11.4, 12.0, 9.4, 14.0, 11.9, 'BYE', 11.0, 15.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3916430.png",
    "name": "Nyheim Hines",
    "depthchart": "Backup: RB-2",
    "team": "Indianapolis Colts",
    "projected": 10.1,
    "opponent": "Houston Texans",
    "home_away": "at ",
    "opp_rank_Pos": 31,
    "team_rank_Neu": 21,
    "avg_fp2": 10.64,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 28.0,
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
    "headlineNews": "Jordan Wilkins had six rushes for 22 yards in the Colts' Week 12 loss to the Titans, adding three receptions for 35 yards.\u00a0\n",
    "report": "",
    "analysis": "Wilkins and Nyheim Hines combined for nine grabs against the Titans, but it was Hines who was the clear RB1 with Jonathan Taylor (COVID-19) sidelined. Wilkins missed a couple offensive series with a rib injury but seemed fine upon his return. Wilkins is no more than a RB4 with Jacoby Brissett dominating goal line work for the Colts.\u00a0\n",
    "timestamp": "2020-11-29 10:20 PM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [23.3, 0.9, 8.1, 4.7, 4.0, 5.2, 'BYE', 19.7, 4.8, 26.0, 6.8, 13.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.4, 12.4, 6.1, 9.5, 8.6, 7.3, 'BYE', 11.0, 4.1, 8.2, 7.4, 11.4, 10.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.5, 3.0, 4.1, 3.6, 2.7, 1.8, 'BYE', 3.0, 2.5, 2.3, 1.6, 2.9, 2.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.2, 9.5, 10.4, 11.5, 10.9, 10.9, 'BYE', 13.3, 9.2, 12.6, 13.4, 14.1, 13.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4259545.png",
    "name": "D'Andre Swift",
    "depthchart": "Starter: RB-1",
    "team": "Detroit Lions",
    "projected": 10.0,
    "opponent": "Chicago Bears",
    "home_away": "at ",
    "opp_rank_Neu": 20,
    "team_rank_Neg": 27,
    "avg_fp2": 12.46,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 18.66,
    "fanduelSalary": "$6500",
    "hasStatus": "Status",
    "healthDou": "Doubtful",
    "injury": "Illness",
    "tmColorLite": "#0076B6",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(0, 118, 182, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#0076B6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/det.png",
    "headlineNews": "D'Andre Swift (illness) has been downgraded to doubtful for Week 13 against the Bears.\n",
    "report": "",
    "analysis": "Swift isn't going to play, missing his third straight game. In his absence, look for Adrian Peterson to grind the clock for the Lions and handle the money touches at the goal line as a TD-or-bust fantasy proposition. Kerryon Johnson will likely lead the backfield in playing time as a safer-floor but lower-upside RB3/4.\n",
    "timestamp": "2020-12-05 07:44 PM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.8, 9.7, 2.4, 13.2, 'BYE', 25.8, 12.8, 3.8, 11.2, 23.4, 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.7, 6.0, 9.3, 6.9, 'BYE', 7.0, 10.4, 10.6, 10.7, 10.4, 'DNP', 'DNP', 10.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 2.9, 2.8, 2.2, 'BYE', 5.2, 4.9, 7.3, 5.6, 2.2, 'DNP', 'DNP', 4.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 118, 182, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.1, 10.8, 13.3, 10.2, 'BYE', 11.4, 23.0, 24.5, 12.1, 19.4, 'DNP', 'DNP', 21.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3045127.png",
    "name": "Wayne Gallman",
    "depthchart": "Starter: RB-1",
    "team": "New York Giants",
    "projected": 9.6,
    "opponent": "Seattle Seahawks",
    "home_away": "at ",
    "opp_rank_Neg": 3,
    "team_rank_Neu": 15,
    "avg_fp2": 8.81,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 20.44,
    "fanduelSalary": "$5600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#0B2265",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(11, 34, 101, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png",
    "headlineNews": "Wayne Gallman rushed 24 times for 94 yards and a touchdown in the Giants' Week 12 win over the Bengals, \"adding\" three receptions for -3 yards.\u00a0\n",
    "report": "",
    "analysis": "What can volume do for you? Gallman's 24 totes were a new season high by six, as well as 20 more than any other Giants back. Devonta Freeman (ankle, injured reserve) is eligible to return for Week 13 against the Seahawks, but it's a solid bet that Gallman has established himself as the lead dog on early downs. Daniel Jones (hamstring) missing Week 13 would curb some of Gallman's appeal vs. Seattle, but he will be a top-30 option.\u00a0\u00a0\n",
    "timestamp": "2020-11-29 11:47 PM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 4.5, 3.4, 0.0, 13.9, 12.7, 14.2, 18.5, 'BYE', 16.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 3.5, 5.5, 4.1, 4.3, 6.4, 6.6, 7.7, 'BYE', 8.9, 9.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 0.0, 1.8, 0.0, 0.6, 0.0, 0.0, 0.4, 'BYE', 3.8, 9.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 9.7, 12.5, 12.1, 8.4, 10.3, 14.0, 10.4, 'BYE', 11.2, 18.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2508176.png",
    "name": "David Johnson",
    "depthchart": "Starter: RB-1",
    "team": "Houston Texans",
    "projected": 9.4,
    "opponent": "Indianapolis Colts",
    "home_away": "",
    "opp_rank_Neu": 7,
    "team_rank_Neg": 31,
    "avg_fp2": 7.9,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 20.19,
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
    "headlineNews": "Texans activated RB\u00a0David Johnson (concussion) from injured reserve.\n",
    "report": "",
    "analysis": "This was expected after Johnson returned to practice this week.\u00a0Johnson hasn't played since Week 9 but projects for a full workload in his first game back. The Texans\u00a0figure to go more run heavy without Will Fuller after ranking near the bottom of the league in rushing.\u00a0Johnson is an RB3 for a matchup with the Colts.\n",
    "timestamp": "2020-12-05 05:27 PM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [18.4, 6.0, 11.6, 10.2, 11.3, 13.4, 14.4, 'BYE', 1.6, 0.0, 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.9, 5.3, 11.8, 18.8, 22.2, 14.4, 19.0, 'BYE', 14.9, 6.7, 'DNP', 'DNP', 9.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.7, 12.4, 6.5, 7.3, 6.5, 7.8, 5.7, 'BYE', 7.1, 5.5, 'DNP', 'DNP', 6.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [23.0, 29.3, 22.2, 25.0, 21.7, 27.5, 22.2, 'BYE', 23.7, 24.3, 'DNP', 'DNP', 21.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3925347.png",
    "name": "Damien Harris",
    "depthchart": "Starter: RB-1",
    "team": "New England Patriots",
    "projected": 9.3,
    "opponent": "Los Angeles Chargers",
    "home_away": "at ",
    "opp_rank_Neu": 18,
    "team_rank_Pos": 5,
    "avg_fp2": 9.57,
    "opp_rank_allowed_fp2_Pos": 24,
    "opp_avg_allowed_fp2": 21.61,
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
    "headlineNews": "Damien Harris rushed 14 times for 47 yards in the Patriots' Week 12 win over the Cardinals.\u00a0\n",
    "report": "",
    "analysis": "Harris was not targeted in the passing game. Harris had two carries from inside the Cardinals' five-yard line, including one from the one, but got stood up on both. He could only watch as James White turned a pair of pitches into scores inside the seven. Sony Michel (quad) was active today but notched zero touches. Early downs are now Harris' in New England, but he doesn't catch passes and competes with Cam Newton for handles near the goal line. That makes Harris a low-ceiling FLEX, one who gets the Chargers for Week 13.\u00a0\u00a0\n",
    "timestamp": "2020-11-30 12:55 AM",
    "source": null,
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "BYE",
    "week06": "DNP",
    "week07": "DNP",
    "week08": "DNP",
    "week09": "DNP",
    "week10": 12.1,
    "week11": 11.9,
    "week12": 4.7,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 12.1, 11.9, 4.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 8.8, 13.1, 9.2, 9.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 0.0, 11.2, 9.2, 9.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 18.0, 16.6, 14.5, 13.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2977644.png",
    "name": "Todd Gurley",
    "depthchart": "Starter: RB-1",
    "team": "Atlanta Falcons",
    "projected": 9.3,
    "opponent": "New Orleans Saints",
    "home_away": "",
    "opp_rank_Neg": 2,
    "team_rank_Neu": 23,
    "avg_fp2": 13.12,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 13.35,
    "fanduelSalary": "$5300",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Knee",
    "tmColorLite": "#A71930",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/atl.png",
    "headlineNews": "Todd Gurley (knee) is questionable for Week 13 against the Saints.\u00a0\n",
    "report": "",
    "analysis": "Ito Smith was the team's primary ball carrier in Week 12 with Gurley out. Smith and Brian Hill will revert to bench status and Gurley should be treated as a low-end RB2 who's far more touchdown dependent than fantasy managers would like. Only 26.9 percent of yardage gained against New Orleans this year has come on the ground, the fourth lowest rate in the league.\u00a0\n",
    "timestamp": "2020-12-05 02:29 PM",
    "source": "James Palmer on Twitter ",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.7, 6.1, 14.7, 18.8, 23.0, 8.2, 21.2, 10.6, 12.5, 'BYE', 3.4, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [19.3, 16.3, 18.7, 17.7, 13.8, 13.2, 12.0, 20.1, 12.9, 'BYE', 9.7, 'DNP', 9.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [8.5, 8.3, 6.3, 5.7, 9.6, 7.4, 7.0, 9.0, 7.2, 'BYE', 7.3, 'DNP', 5.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [25.6, 23.7, 24.3, 23.4, 25.5, 27.4, 25.5, 22.7, 24.6, 'BYE', 24.2, 'DNP', 26.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2576434.png",
    "name": "Melvin Gordon",
    "depthchart": "Starter: RB-1",
    "team": "Denver Broncos",
    "projected": 8.6,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Neu": 23,
    "team_rank_Neu": 14,
    "avg_fp2": 10.81,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 20.15,
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
    "headlineNews": "Phillip\u00a0Lindsay (knee) will be limited during Thursday's practice.\u00a0\n",
    "report": "",
    "analysis": "It's an upgrade from Wednesday's missed practice. He's now on track to play this week against KC, making Lindsay and backfield mate Melvin Gordon undesirable fantasy options. A late-week setback for Lindsay would position Gordon as a decent low-end RB2 option.\u00a0\n",
    "timestamp": "2020-12-03 06:51 PM",
    "source": "Jeff Legwold on Twitter ",
    "week01": 14.1,
    "week02": 15.4,
    "week03": 5.8,
    "week04": 24.8,
    "week05": "BYE",
    "week06": "DNP",
    "week07": 11.0,
    "week08": 7.7,
    "week09": 3.2,
    "week10": 4.6,
    "week11": 18.4,
    "week12": 3.1,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.1, 15.4, 5.8, 24.8, 'BYE', 'DNP', 11.0, 7.7, 3.2, 4.6, 18.4, 3.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.8, 7.6, 14.7, 8.8, 'BYE', 'DNP', 15.2, 14.8, 9.7, 14.9, 7.7, 12.2, 8.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.3, 8.2, 7.1, 8.0, 'BYE', 'DNP', 6.9, 6.9, 5.5, 8.8, 6.2, 6.3, 7.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(225, 119, 87, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [23.5, 20.6, 22.8, 22.8, 'BYE', 'DNP', 21.8, 22.7, 26.0, 24.5, 19.4, 23.5, 21.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2979477.png",
    "name": "Tevin Coleman",
    "depthchart": "Backup: RB-2",
    "team": "San Francisco 49ers",
    "projected": 7.9,
    "opponent": "Buffalo Bills",
    "home_away": "",
    "opp_rank_Pos": 25,
    "team_rank_Neu": 16,
    "avg_fp2": 3.3,
    "opp_rank_allowed_fp2_Neu": 15,
    "opp_avg_allowed_fp2": 20.15,
    "fanduelSalary": "$4400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "Tevin Coleman (knee) is absent from the 49ers' Week 13 injury report.\u00a0\n",
    "report": "",
    "analysis": "This is Coleman \u2014\u00a0so there could always be a setback \u2014 but it means he will be active for the first time since Week 8 and only the second time since Week 2. The much bigger question is his potential role in a backfield dominated by Raheem Mostert in Week 12. Coleman could siphon some of Jerick McKinnon's receiving work and Jeff Wilson's early-down banging, but probably not enough to carve out actual FLEX value vs. the Bills on Monday Night Football. Time and again, Coleman has proven to be fool's gold in fantasy. It is best to have zero expectations for the playoffs.\u00a0\n",
    "timestamp": "2020-12-03 11:29 PM",
    "source": "Matt Barrows on Twitter ",
    "week01": 2.9,
    "week02": 5.0,
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": "DNP",
    "week08": 2.0,
    "week09": "DNP",
    "week10": "DNP",
    "week11": "BYE",
    "week12": "DNP",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.9, 5.0, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 2.0, 'DNP', 'DNP', 'BYE', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.1, 5.5, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 9.7, 'DNP', 'DNP', 'BYE', 'DNP', 7.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.5, 1.3, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 2.4, 'DNP', 'DNP', 'BYE', 'DNP', 2.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.0, 16.4, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 16.1, 'DNP', 'DNP', 'BYE', 'DNP', 16.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4040761.png",
    "name": "Devin Singletary",
    "depthchart": "Backup: RB-2",
    "team": "Buffalo Bills",
    "projected": 7.8,
    "opponent": "San Francisco 49ers",
    "home_away": "at ",
    "opp_rank_Neu": 10,
    "team_rank_Neu": 22,
    "avg_fp2": 7.9,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 16.86,
    "fanduelSalary": "$4400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#005596",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 85, 150, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
    "headlineNews": "Devin Singletary rushed 11 times for 82 yards, catching all three of his targets for 20 yards in Buffalo's Week 12 win against the Chargers.\n",
    "report": "",
    "analysis": "It was an encouraging performance from Singletary, who had been out-touched 19-10 by teammate Zack Moss (9/59) in Buffalo's two games prior. Even so, he followed up an 11-yard dash in the second half with a costly fumble on the ensuing play. With Moss still being the preferred option inside the 10-yard line for Buffalo, Singletary remains a player managers can drop altogether ahead of the fantasy playoffs in re-draft leagues.\n",
    "timestamp": "2020-11-30 03:23 PM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.8, 8.6, 14.1, 16.1, 3.8, 5.0, 5.7, 9.7, 4.9, 1.5, 'BYE', 9.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.0, 12.2, 15.4, 13.9, 14.2, 19.5, 12.0, 11.0, 8.5, 7.6, 'BYE', 12.3, 7.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.0, 5.7, 6.6, 8.2, 6.1, 7.9, 5.1, 3.7, 5.4, 5.5, 'BYE', 4.2, 5.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.0, 12.5, 15.1, 17.8, 16.1, 16.9, 14.9, 14.4, 15.4, 14.9, 'BYE', 15.8, 16.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3059915.png",
    "name": "Kareem Hunt",
    "depthchart": "Backup: RB-2",
    "team": "Cleveland Browns",
    "projected": 7.7,
    "opponent": "Tennessee Titans",
    "home_away": "at ",
    "opp_rank_Neu": 17,
    "team_rank_Pos": 1,
    "avg_fp2": 13.15,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 22.6,
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
    "headlineNews": "Kareem Hunt (thigh) was limited in Wednesday's practice.\n",
    "report": "",
    "analysis": "Hunt went 10-62 on the ground in a disappointing effort against the Jaguars in Week 12, as Nick Chubb did all of the heavy lifting and box-score damage in the win. Hunt will be an RB2/3 for Week 13 against Tennessee.\n",
    "timestamp": "2020-12-02 10:30 PM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.1, 23.1, 13.4, 19.1, 16.8, 6.7, 17.7, 8.3, 'BYE', 14.7, 8.6, 6.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.4, 7.2, 8.8, 8.7, 14.7, 16.5, 16.6, 16.0, 'BYE', 12.2, 8.5, 12.9, 7.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.0, 5.2, 7.2, 10.1, 8.3, 6.4, 6.5, 6.7, 'BYE', 7.2, 10.4, 5.6, 7.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [20.0, 19.5, 27.5, 20.0, 22.7, 24.1, 24.5, 23.7, 'BYE', 24.6, 23.3, 23.8, 24.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4039359.png",
    "name": "Darrell Henderson",
    "depthchart": "Starter: RB-1",
    "team": "Los Angeles Rams",
    "projected": 7.5,
    "opponent": "Arizona Cardinals",
    "home_away": "at ",
    "opp_rank_Neu": 22,
    "team_rank_Neu": 9,
    "avg_fp2": 9.15,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 19.14,
    "fanduelSalary": "$4300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Darrell Henderson rushed 10 times for 19 yards in the Rams' Week 12 loss to the 49ers.\n",
    "report": "",
    "analysis": "Jared Goff missed Henderson wide open for a 25-yard touchdown in the second half, but the real takeaway is that the latter has merely averaged 2.08 yards per carry since returning from injury the past three games. With Cam Akers exploding for a 61-yard run and being the better overall back on Sunday, it's truly a question mark whether Henderson lost his starting role moving forward in one fell swoop. Expect the rookie to cut into Henderson's early-down load\u00a0ahead of the fantasy playoffs.\n",
    "timestamp": "2020-11-30 03:47 PM",
    "source": null,
    "week01": 0.6,
    "week02": 19.1,
    "week03": 18.5,
    "week04": 4.3,
    "week05": 20.3,
    "week06": 9.2,
    "week07": 8.7,
    "week08": 6.3,
    "week09": "BYE",
    "week10": 9.8,
    "week11": 1.9,
    "week12": 1.9,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.6, 19.1, 18.5, 4.3, 20.3, 9.2, 8.7, 6.3, 'BYE', 9.8, 1.9, 1.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.7, 2.3, 6.9, 14.7, 7.3, 9.5, 9.4, 12.1, 'BYE', 11.4, 6.6, 11.2, 7.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.0, 0.0, 0.0, 0.2, 0.0, 0.0, 'BYE', 0.1, 1.0, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [2.8, 5.3, 4.4, 9.8, 9.2, 14.2, 12.4, 12.2, 'BYE', 13.5, 13.1, 16.1, 12.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15825.png",
    "name": "Le'Veon Bell",
    "depthchart": "Backup: RB-2",
    "team": "Kansas City Chiefs",
    "projected": 7.4,
    "opponent": "Denver Broncos",
    "home_away": "",
    "opp_rank_Pos": 27,
    "team_rank_Neu": 18,
    "avg_fp2": 5.3,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 21.01,
    "fanduelSalary": "$4400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Clyde-Edwards Helaire (illness) didn't practice Friday.\u00a0\n",
    "report": "",
    "analysis": "Apparently it's a stomach virus keeping Edwards-Helaire out of practice. Head coach Andy Reid said he thinks the rookie will be able to suit up Sunday night against Denver despite missing the week's final two practices with the stomach illness. Probably neither Le'Veon Bell nor Darrel\u00a0Williams would dominate KC's backfield if CEH is held out. Williams would seem to have an edge on the pass catching role if CEH is out. Bell would likely take early downs and be the favorite for short yardage and goal line work.\u00a0\n",
    "timestamp": "2020-12-04 07:16 PM",
    "source": "Adam Teicher on Twitter ",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.6, 'DNP', 'DNP', 'DNP', 7.2, 'DNP', 3.9, 5.3, 0.8, 'BYE', 10.1, 4.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.5, 'DNP', 'DNP', 'DNP', 18.3, 'DNP', 9.3, 7.6, 4.6, 'BYE', 5.9, 6.8, 7.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [8.0, 'DNP', 'DNP', 'DNP', 10.3, 'DNP', 9.1, 8.9, 6.9, 'BYE', 7.6, 0.7, 7.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.1, 'DNP', 'DNP', 'DNP', 27.1, 'DNP', 26.3, 27.1, 26.2, 'BYE', 24.8, 19.8, 24.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2980453.png",
    "name": "Jamaal Williams",
    "depthchart": "Backup: RB-2",
    "team": "Green Bay Packers",
    "projected": 7.3,
    "opponent": "Philadelphia Eagles",
    "home_away": "",
    "opp_rank_Neu": 23,
    "team_rank_Neu": 10,
    "avg_fp2": 9.76,
    "opp_rank_allowed_fp2_Neu": 9,
    "opp_avg_allowed_fp2": 18.57,
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
    "headlineNews": "Jamaal Williams rushed 17 times for 73 yards and a touchdown in Week 12 against Chicago.\n",
    "report": "",
    "analysis": "It\u2019s the second rushing touchdown of the year for Williams. The 17\u00a0carries were his most since Week 7. Green Bay was able to get Williams involved in a game they led throughout, but his weekly ceiling is capped as a short yardage change-up to Aaron Jones. Williams is a TD-dependent flex for a Week 13 matchup with the Eagles.\n",
    "timestamp": "2020-11-30 04:48 AM",
    "source": null,
    "week01": 6.2,
    "week02": 8.3,
    "week03": 2.2,
    "week04": 14.5,
    "week05": "BYE",
    "week06": 3.4,
    "week07": 19.4,
    "week08": 15.2,
    "week09": "DNP",
    "week10": 7.0,
    "week11": 8.1,
    "week12": 13.3,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.2, 8.3, 2.2, 14.5, 'BYE', 3.4, 19.4, 15.2, 'DNP', 7.0, 8.1, 13.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.7, 8.0, 5.9, 4.8, 'BYE', 6.5, 9.8, 10.4, 'DNP', 9.0, 9.2, 7.2, 7.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.9, 1.1, 0.1, 4.5, 'BYE', 0.0, 1.5, 0.0, 'DNP', 2.1, 0.9, 0.4, 2.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.6, 13.1, 12.4, 12.3, 'BYE', 14.6, 15.2, 15.4, 'DNP', 16.0, 14.0, 15.5, 11.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3916925.png",
    "name": "Kerryon Johnson",
    "depthchart": "Backup: RB-2",
    "team": "Detroit Lions",
    "projected": 6.8,
    "opponent": "Chicago Bears",
    "home_away": "at ",
    "opp_rank_Neu": 20,
    "team_rank_Neg": 27,
    "avg_fp2": 4.52,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 18.66,
    "fanduelSalary": "$4400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0076B6",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(0, 118, 182, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#0076B6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/det.png",
    "headlineNews": "Adrian Peterson said D'Andre Swift hasn't had \"the same energy level\" since suffering a concussion.\u00a0\n",
    "report": "",
    "analysis": "Peterson told reporters \"it's been hard to watch\" Swift struggle with the effects of his brain injury, which he suffered in Week 10.\u00a0Lions interim coach Darrell Bevell said he's optimistic Swift can play this week against Chicago despite the rookie remaining in the league's concussion protocol. Perhaps the team will protect Swift for another week. If he's out against the Bears, Peterson will get most of the early down workload -- including goal line touches -- while Kerryon Johnson operates as the primary pass catching back.\u00a0\n",
    "timestamp": "2020-12-03 08:17 PM",
    "source": "Kyle Meinke on Twitter ",
    "week01": 1.4,
    "week02": 9.2,
    "week03": 3.5,
    "week04": 1.7,
    "week05": "BYE",
    "week06": 2.5,
    "week07": 0.0,
    "week08": 8.5,
    "week09": 8.0,
    "week10": 0.3,
    "week11": 4.8,
    "week12": 9.8,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.4, 9.2, 3.5, 1.7, 'BYE', 2.5, 0.0, 8.5, 8.0, 0.3, 4.8, 9.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.0, 6.7, 8.8, 8.8, 'BYE', 3.2, 2.0, 0.9, 2.5, 3.3, 6.8, 6.8, 6.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.2, 5.6, 4.5, 6.8, 'BYE', 0.1, 2.2, 4.1, 1.7, 3.6, 2.1, 5.5, 3.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 118, 182, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.9, 16.1, 16.7, 15.8, 'BYE', 11.3, 13.4, 14.3, 12.6, 13.6, 10.5, 14.3, 15.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2572861.png",
    "name": "J.D. McKissic",
    "depthchart": "Backup: RB-2",
    "team": "Washington Football Team",
    "projected": 6.8,
    "opponent": "Pittsburgh Steelers",
    "home_away": "at ",
    "opp_rank_Neu": 8,
    "team_rank_Neu": 19,
    "avg_fp2": 7.55,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 15.45,
    "fanduelSalary": "$4400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#773141",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(119, 49, 65, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png",
    "headlineNews": "J.D. McKissic caught 2-of-2 targets for 21 yards in Washington's Week 12 win over the Cowboys.\n",
    "report": "",
    "analysis": "McKissic only handled one carry and didn't get those cheap check-down targets with Washington leading in the second half. Perhaps a sign that McKissic's RB2/3 value is a thing of the past, Antonio Gibson received 27 opportunities, including seven targets. Gibson frankly deserves more reps on passing downs, which comes at the expensive of our PPR cheat code. Washington will be big dogs in Pittsburgh next week, but McKissic's\u00a0script-based floor has been pulled out from under him. He's a boom-bust\u00a0RB2/3 play in PPR formats.\n",
    "timestamp": "2020-11-27 01:50 AM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.4, 5.3, 6.7, 6.1, 7.9, 11.4, 6.1, 'BYE', 12.7, 14.4, 8.4, 3.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.7, 4.3, 3.8, 2.8, 5.2, 4.9, 6.7, 'BYE', 6.0, 12.0, 8.4, 7.6, 6.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.4, 3.4, 0.0, 0.0, 2.3, 'BYE', 2.0, 3.0, 3.4, 3.9, 2.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [5.9, 8.1, 8.2, 7.2, 12.0, 11.5, 12.3, 'BYE', 9.9, 9.3, 10.0, 13.1, 12.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2570986.png",
    "name": "Malcolm Brown",
    "depthchart": "Backup: RB-2",
    "team": "Los Angeles Rams",
    "projected": 6.5,
    "opponent": "Arizona Cardinals",
    "home_away": "at ",
    "opp_rank_Neu": 22,
    "team_rank_Neu": 9,
    "avg_fp2": 7.86,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 19.14,
    "fanduelSalary": "$4000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Malcolm Brown rushed three times for four yards, hauling in two catches for another 15 yards in Los Angeles' Week 12 loss to San Francisco.\n",
    "report": "",
    "analysis": "Fantasy players are never starting Brown for his rushing production, but it speaks volumes that he was essentially unusable despite having a role in the passing-game, too. Cam Akers was admittedly the best back among the three (Darrell Henderson included), averaging 9.3 yards per carry on nine rushing attempts. As always, Brown won't be playable as long as this backfield stays a three-man committee.\n",
    "timestamp": "2020-11-30 03:49 PM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [24.5, 4.7, 1.9, 8.1, 2.9, 3.7, 11.7, 6.7, 'BYE', 18.1, 3.3, 0.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.2, 12.0, 10.4, 6.1, 12.1, 2.9, 6.0, 5.3, 'BYE', 5.2, 3.5, 4.5, 6.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 12.1, 15.7, 0.0, 0.0, 0.0, 0.5, 0.8, 'BYE', 0.5, 1.2, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [6.2, 19.5, 22.5, 9.3, 6.9, 11.5, 7.9, 7.0, 'BYE', 6.1, 8.4, 8.7, 8.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2969962.png",
    "name": "Duke Johnson",
    "depthchart": "Backup: RB-2",
    "team": "Houston Texans",
    "projected": 6.5,
    "opponent": "Indianapolis Colts",
    "home_away": "",
    "opp_rank_Neu": 7,
    "team_rank_Neg": 31,
    "avg_fp2": 6.59,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 20.19,
    "fanduelSalary": "$5800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#03202F",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(3, 32, 47, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/hou.png",
    "headlineNews": "Duke Johnson rushed nine times for 37 yards, hauling in 3-of-4 targets for 43 yards and one touchdown reception in Houston's Week 12 win against the Lions.\n",
    "report": "",
    "analysis": "Johnson hauled in a 33-yard touchdown to salvage his fantasy day, but the real takeaway is that he has yet to surpass\u00a054 rushing yards in three starts for David Johnson (concussion, IR) and merely out-touched C.J. Prosise 12-6 against Detroit. The latter was also used over Duke inside the 10-yard line Thursday, scoring Houston's first touchdown \u2014 a receiving score \u2014 of the game. Suddenly lacking a stranglehold of both the carries and targets among this backfield, Johnson has dipped to fringe-RB2 status for the rest of the year. It's also possible David Johnson returns in Week 13 against the Colts.\n",
    "timestamp": "2020-11-26 09:45 PM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.4, 'DNP', 'DNP', 6.0, 2.4, 1.6, 6.7, 'BYE', 15.3, 5.4, 5.0, 15.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.0, 'DNP', 'DNP', 7.4, 10.8, 8.2, 8.3, 'BYE', 6.9, 11.6, 8.6, 9.5, 6.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.8, 'DNP', 'DNP', 5.2, 3.6, 3.7, 4.7, 'BYE', 3.5, 2.5, 3.5, 2.2, 2.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.0, 'DNP', 'DNP', 15.9, 12.5, 14.2, 15.4, 'BYE', 12.6, 12.9, 12.0, 14.1, 13.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16913.png",
    "name": "James White",
    "depthchart": "Backup: RB-2",
    "team": "New England Patriots",
    "projected": 6.3,
    "opponent": "Los Angeles Chargers",
    "home_away": "at ",
    "opp_rank_Neu": 18,
    "team_rank_Pos": 5,
    "avg_fp2": 7.16,
    "opp_rank_allowed_fp2_Pos": 24,
    "opp_avg_allowed_fp2": 21.61,
    "fanduelSalary": "$5000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#C60C30",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png",
    "headlineNews": "James White rushed five times for 18 yards in the Patriots' Week 12 win over the Cardinals, \"adding\" one reception for -1 yards.\u00a0\n",
    "report": "",
    "analysis": "White turned a pair of pitches into scores, one from seven yards out, the other from one. He was out-touched 14-6 by Damien Harris, though the Pats' current 1-2 ceded zero handles to an active Sony Michel. White entered this afternoon with at least four catches in two of his past three games. 4-5 will be a safe weekly receptions projection for White down the stretch. White will have FLEX viability for Week 13 against the Chargers.\u00a0\n",
    "timestamp": "2020-11-30 12:23 AM",
    "source": null,
    "week01": 6.7,
    "week02": "DNP",
    "week03": "DNP",
    "week04": 9.4,
    "week05": "BYE",
    "week06": 11.3,
    "week07": 0.8,
    "week08": 4.5,
    "week09": 4.4,
    "week10": 1.8,
    "week11": 11.3,
    "week12": 14.2,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.7, 'DNP', 'DNP', 9.4, 'BYE', 11.3, 0.8, 4.5, 4.4, 1.8, 11.3, 14.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.8, 'DNP', 'DNP', 3.3, 'BYE', 3.8, 4.8, 6.6, 3.1, 4.7, 5.6, 6.9, 6.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.9, 'DNP', 'DNP', 3.8, 'BYE', 3.7, 4.8, 3.7, 2.7, 3.0, 2.7, 1.3, 4.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.9, 'DNP', 'DNP', 15.6, 'BYE', 18.6, 17.2, 16.3, 17.0, 17.2, 16.1, 17.8, 17.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3052117.png",
    "name": "Phillip Lindsay",
    "depthchart": "Backup: RB-2",
    "team": "Denver Broncos",
    "projected": 6.0,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Neu": 23,
    "team_rank_Neu": 14,
    "avg_fp2": 6.22,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 20.15,
    "fanduelSalary": "$4200",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Knee",
    "tmColorLite": "#e17757",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(225, 119, 87, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#e17757",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/den.png",
    "headlineNews": "Phillip Lindsay (knee) is questionable for Week 13 against the Chiefs.\n",
    "report": "",
    "analysis": "The Broncos have typically treated their 'questionable' players as probable ones, keeping Melvin Gordon and Lindsay as low-end RB2 options since they're still expected to play together in negative game script against Kansas City. Both are undesirable options for Sunday.\u00a0\n",
    "timestamp": "2020-12-04 09:15 PM",
    "source": "Denver Broncos on Twitter",
    "week01": 4.0,
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "BYE",
    "week06": 10.1,
    "week07": 7.9,
    "week08": 15.1,
    "week09": 2.3,
    "week10": 0.2,
    "week11": 8.2,
    "week12": 2.0,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.0, 'DNP', 'DNP', 'DNP', 'BYE', 10.1, 7.9, 15.1, 2.3, 0.2, 8.2, 2.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.6, 'DNP', 'DNP', 'DNP', 'BYE', 9.0, 9.4, 8.3, 7.8, 9.6, 5.7, 6.6, 6.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.9, 'DNP', 'DNP', 'DNP', 'BYE', 2.9, 4.9, 9.3, 6.0, 4.7, 4.1, 4.5, 4.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(225, 119, 87, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.7, 'DNP', 'DNP', 'DNP', 'BYE', 19.0, 17.9, 21.5, 19.4, 20.0, 17.9, 16.2, 19.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4241941.png",
    "name": "Anthony McFarland",
    "depthchart": "Backup: RB-2",
    "team": "Pittsburgh Steelers",
    "projected": 5.8,
    "opponent": "Washington Football Team",
    "home_away": "",
    "opp_rank_Neu": 16,
    "team_rank_Neg": 25,
    "avg_fp2": 1.82,
    "opp_rank_allowed_fp2_Neu": 7,
    "opp_avg_allowed_fp2": 17.37,
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
    "headlineNews": "Anthony McFarland rushed three times for nine\u00a0yards in Pittsburgh's Week 12\u00a0win over the Ravens.\n",
    "report": "",
    "analysis": "With James Conner on the COVID-19 list, McFarland handled just four backfield touches compared to 19 touches for Benny Snell. That is telling, as Conner could miss the next two games of the season. And in a game without Conner, the Steelers elected to throw the ball 51 times compared to 20 runs despite constant positive gamescript.\n",
    "timestamp": "2020-12-03 01:50 AM",
    "source": null,
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "BYE",
    "week05": 0.6,
    "week06": 1.3,
    "week07": 0.6,
    "week08": 0.1,
    "week09": 3.2,
    "week10": "DNP",
    "week11": 0.3,
    "week12": 3.1,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'BYE', 0.6, 1.3, 0.6, 0.1, 3.2, 'DNP', 0.3, 3.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'BYE', 5.7, 0.5, 3.5, 3.9, 3.5, 'DNP', 3.4, 2.7, 5.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'BYE', 0.0, 0.5, 0.0, 0.0, 0.0, 'DNP', 0.0, 0.5, 1.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'BYE', 10.0, 5.2, 6.9, 8.7, 10.1, 'DNP', 3.7, 3.5, 4.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16777.png",
    "name": "Carlos Hyde",
    "depthchart": "Backup: RB-2",
    "team": "Seattle Seahawks",
    "projected": 5.8,
    "opponent": "New York Giants",
    "home_away": "",
    "opp_rank_Neg": 5,
    "team_rank_Neu": 11,
    "avg_fp2": 8.55,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 21.4,
    "fanduelSalary": "$5300",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Toe",
    "tmColorLite": "#69BE28",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(105, 190, 40, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#69BE28",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
    "headlineNews": "Seahawks head coach Pete Carroll said Chris Carson (foot) and Carlos Hyde (toe) will play in Week 13 against the Giants.\u00a0\n",
    "report": "",
    "analysis": "There were serious questions about Hyde's availability since he was downgraded to a DNP on Thursday. He'll suit up this week, according to Carroll, taking some of the shine off Carson. Hyde out-snapped and out-touched Carson in Week 12, though the team may have wanted to ease Carson back into the lineup after an extended layoff. Carroll said he expects Carson to get more run in Week 13. He's a must-play for fantasy managers.\u00a0\n",
    "timestamp": "2020-12-05 03:52 PM",
    "source": "Bob Condotta on Twitter ",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.3, 4.7, 2.8, 'DNP', 'DNP', 'BYE', 15.1, 'DNP', 'DNP', 'DNP', 16.5, 3.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.0, 4.8, 6.2, 'DNP', 'DNP', 'BYE', 4.6, 'DNP', 'DNP', 'DNP', 10.6, 6.5, 5.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.6, 0.0, 3.8, 'DNP', 'DNP', 'BYE', 1.9, 'DNP', 'DNP', 'DNP', 3.5, 5.1, 2.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.3, 11.7, 17.4, 'DNP', 'DNP', 'BYE', 15.7, 'DNP', 'DNP', 'DNP', 17.2, 16.5, 15.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4240021.png",
    "name": "Cam Akers",
    "depthchart": "Reserve: RB-3",
    "team": "Los Angeles Rams",
    "projected": 5.7,
    "opponent": "Arizona Cardinals",
    "home_away": "at ",
    "opp_rank_Neu": 22,
    "team_rank_Neu": 9,
    "avg_fp2": 4.97,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 19.14,
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
    "headlineNews": "Cam Akers rushed nine times for 84 yards and a touchdown in Los Angeles' Week 12 loss to San Francisco.\n",
    "report": "",
    "analysis": "Akers had three carries for six yards until the end of the third quarter when he exploded for a 61-yard run and engineered a three-play scoring drive that only he touched the ball during (touchdown run inside the five-yard line included). Darrell Henderson led the team in carries (10) but admittedly hasn't looked as spry since returning from his quad injury after the team's bye. This performance likely earned Akers more touches down the stretch, making him an immediate stash ahead of the fantasy playoffs. He's an intriguing FLEX option for next week's matchup against the Cardinals.\n",
    "timestamp": "2020-11-30 02:16 AM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.8, 1.3, 'DNP', 'DNP', 6.1, 0.0, 0.0, 5.9, 'BYE', 3.8, 8.4, 14.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.7, 6.0, 'DNP', 'DNP', 4.2, 2.3, 3.3, 3.3, 'BYE', 2.3, 0.7, 2.4, 5.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 1.1, 'DNP', 'DNP', 0.0, 0.0, 0.0, 0.0, 'BYE', 0.1, 0.3, 0.1, 0.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.9, 7.5, 'DNP', 'DNP', 8.2, 10.1, 9.8, 11.3, 'BYE', 5.5, 5.2, 5.1, 10.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3119195.png",
    "name": "Chase Edmonds",
    "depthchart": "Backup: RB-2",
    "team": "Arizona Cardinals",
    "projected": 5.5,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank_Neg": 4,
    "team_rank_Pos": 4,
    "avg_fp2": 9.95,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 16.99,
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
    "headlineNews": "Chase Edmonds rushed six times for 29 yards in the Cardinals' Week 12 loss to the Patriots, adding four receptions for 14 additional\u00a0yards.\u00a0\n",
    "report": "",
    "analysis": "Edmonds has returned to pure COP duties since Kenyan Drake's return three games ago, totaling 27 touches for 169 yards. That's excellent efficiency for a No. 2 back, but it isn't making Edmonds much of a FLEX with bye weeks essentially over, save for two teams in Week 13. The Cardinals have a date with the Rams' tough defense, making Edmonds more of an RB4 than RB3.\u00a0\n",
    "timestamp": "2020-11-30 12:38 AM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.0, 2.8, 4.4, 12.5, 17.7, 3.4, 18.0, 'BYE', 10.3, 9.2, 12.9, 6.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.2, 2.8, 7.9, 6.0, 9.4, 5.9, 5.9, 'BYE', 9.9, 9.8, 9.6, 6.8, 5.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.0, 0.0, 0.9, 1.5, 0.1, 'BYE', 0.0, 0.0, 0.0, 0.3, 0.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [3.2, 15.9, 16.5, 10.2, 7.2, 12.1, 11.5, 'BYE', 13.2, 14.6, 15.9, 12.9, 10.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3042429.png",
    "name": "Wendell Smallwood",
    "depthchart": "Reserve: RB-3",
    "team": "Pittsburgh Steelers",
    "projected": 5.3,
    "opponent": "Washington Football Team",
    "home_away": "",
    "opp_rank_Neu": 16,
    "team_rank_Neg": 25,
    "avg_fp2": 1.73,
    "opp_rank_allowed_fp2_Neu": 7,
    "opp_avg_allowed_fp2": 17.37,
    "fanduelSalary": "N/A",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/pit.png",
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "source": "",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 5.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 2.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 11.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15920.png",
    "name": "Latavius Murray",
    "depthchart": "Backup: RB-2",
    "team": "New Orleans Saints",
    "projected": 5.0,
    "opponent": "Atlanta Falcons",
    "home_away": "at ",
    "opp_rank_Neg": 6,
    "team_rank_Neu": 7,
    "avg_fp2": 9.07,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 16.86,
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
    "headlineNews": "Latavius Murray rushed 19 times for 123 yards and two touchdowns in the Saints' Week 12 win against the Broncos, adding one reception for one yard.\u00a0\n",
    "report": "",
    "analysis": "Murray had\u00a0eight more rushing attempts than Alvin Kamara. Most importantly, he got carries inside the 10 yard line, converting the opportunity into two touchdowns. Murray has racked up 31 carries over Taysom Hill's two starts at the expense of Kamara. There's an argument to be made that Hill and Murray are the only reliable fantasy options for as long as Hill is the team's starter. The Saints will continue to be a massively run heavy offense in Week 13 against Atlanta, making Murray a reasonable low-end RB2 play.\u00a0\n",
    "timestamp": "2020-11-30 01:01 AM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.8, 4.3, 7.0, 20.8, 6.7, 'BYE', 6.1, 4.6, 5.2, 5.7, 9.5, 25.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.1, 5.2, 5.4, 4.2, 7.7, 'BYE', 7.4, 6.5, 6.0, 8.1, 4.6, 7.3, 5.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.7, 1.4, 1.8, 1.7, 1.8, 'BYE', 1.0, 0.0, 1.8, 0.5, 8.2, 1.5, 8.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(155, 132, 92, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.1, 16.6, 16.9, 16.0, 16.3, 'BYE', 13.5, 17.3, 16.0, 13.0, 19.0, 15.1, 21.2]
                    }
                    
                    ]
               }
            }];




$scope.positionWR = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16800.png",
    "name": "Davante Adams",
    "depthchart": "Starter: WR-1",
    "team": "Green Bay Packers",
    "projected": 16.8,
    "opponent": "Philadelphia Eagles",
    "home_away": "",
    "opp_rank_Neu": 8,
    "team_rank_Pos": 5,
    "avg_fp2": 21.31,
    "opp_rank_allowed_fp2_Neu": 9,
    "opp_avg_allowed_fp2": 28.16,
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
    "headlineNews": "Davante Adams caught 6-of-9 targets for\u00a061 yards in the Packers' Week 12 win over Chicago.\n",
    "report": "",
    "analysis": "Adams\u00a0got the Packers started early with the first touchdown of the game. He wasn\u2019t need in the second half with Green Bay protecting a lead. The 61\u00a0yards were the fewest for Adams since Week 8. The Packers have spread the ball more since Allen Lazard\u2019s return to the lineup, but it hasn\u2019t had much of an impact on Adams. Adams will remain a top-three WR1 for Week 13 against the Eagles.\n",
    "timestamp": "2020-11-30 04:59 AM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [34.6, 5.1, 'DNP', 'DNP', 'BYE', 9.1, 38.1, 26.8, 28.3, 14.6, 20.1, 15.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.8, 22.6, 'DNP', 'DNP', 'BYE', 13.4, 18.8, 16.8, 15.2, 20.9, 15.8, 15.2, 16.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.7, 10.5, 'DNP', 'DNP', 'BYE', 6.7, 6.1, 18.4, 6.8, 10.9, 12.1, 6.9, 10.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [20.0, 24.9, 'DNP', 'DNP', 'BYE', 20.0, 20.5, 31.4, 17.9, 25.8, 25.0, 21.5, 22.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4047650.png",
    "name": "D.K. Metcalf",
    "depthchart": "Starter: WR-1",
    "team": "Seattle Seahawks",
    "projected": 16.8,
    "opponent": "New York Giants",
    "home_away": "",
    "opp_rank_Neu": 19,
    "team_rank_Pos": 4,
    "avg_fp2": 16.81,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 29.11,
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
    "headlineNews": "DK Metcalf caught 10-of-13 targets for 177 yards in the Seahawks' Week 12 win over the Eagles Monday night.\n",
    "report": "",
    "analysis": "It was Metcalf's second double-digit catches game of the season, and the 177 yards marked a new career best. And most of the damage came against stud No. 1 CB Darius Slay. Metcalf's night could have been even bigger, but he dropped what should have been a 22-yard touchdown in the end zone when Slay fell down late on the play. Metcalf was also tackled at the one-yard line earlier in the night on a 52-yard deep bomb down the middle. Metcalf has five 100-yard games on the year and nine scores as an every-week WR1. He gets a Week 13 date with James Bradberry and the Giants.\n",
    "timestamp": "2020-12-01 04:34 AM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 17.2, 17.0, 12.6, 24.3, 'BYE', 3.3, 34.1, 20.3, 3.8, 12.1, 22.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 13.8, 12.5, 8.9, 12.2, 'BYE', 16.0, 11.5, 12.1, 12.9, 15.6, 15.9, 16.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 3.9, 4.9, 1.7, 4.7, 'BYE', 8.2, 5.0, 7.9, 5.2, 5.1, 5.3, 4.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 19.8, 15.8, 17.5, 16.8, 'BYE', 19.2, 17.8, 18.7, 23.5, 18.1, 22.2, 20.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4360438.png",
    "name": "Brandon Aiyuk",
    "depthchart": "Starter: WR-1",
    "team": "San Francisco 49ers",
    "projected": 15.2,
    "opponent": "Buffalo Bills",
    "home_away": "",
    "opp_rank_Neu": 18,
    "team_rank_Neu": 12,
    "avg_fp2": 12.28,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 27.82,
    "fanduelSalary": "$5400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "Brandon Aiyuk (COVID-19) is practicing in full for Week 13 against the Bills.\u00a0\n",
    "report": "",
    "analysis": "Aiyuk ended up missing only one game since the 49ers were on bye in Week 11. Deebo Samuel blew up for 11 receptions on 13 targets in Aiyuk's Week 12 absence, but this receiver corps could prove big enough for the both of 'em. With George Kittle (foot) still sidelined, coach Kyle Shanahan lacks compelling alternatives for target funnels. Samuel gets the Week 13 rankings edge following his impressive return, but Aiyuk is absolutely in the WR3 mix.\u00a0\n",
    "timestamp": "2020-12-03 11:24 PM",
    "source": "Matt Barrows on Twitter ",
    "week01": "DNP",
    "week02": 3.1,
    "week03": 18.6,
    "week04": 12.6,
    "week05": 5.9,
    "week06": 8.2,
    "week07": 14.5,
    "week08": 19.1,
    "week09": "DNP",
    "week10": 16.2,
    "week11": "BYE",
    "week12": "DNP",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 3.1, 18.6, 12.6, 5.9, 8.2, 14.5, 19.1, 'DNP', 16.2, 'BYE', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 8.2, 3.6, 8.6, 8.2, 11.1, 11.4, 12.8, 'DNP', 15.2, 'BYE', 'DNP', 15.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 2.0, 0.0, 2.0, 3.6, 9.1, 1.2, 3.3, 'DNP', 7.2, 'BYE', 'DNP', 7.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 9.4, 12.9, 15.6, 19.5, 11.8, 18.7, 17.1, 'DNP', 19.9, 'BYE', 'DNP', 17.6]
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
    "opponent": "Denver Broncos",
    "home_away": "",
    "opp_rank_Neu": 7,
    "team_rank_Pos": 1,
    "avg_fp2": 20.55,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 28.53,
    "fanduelSalary": "$9100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Tyreek Hill has commanded 35 percent of the Chiefs' targets over the team's past three games.\u00a0\n",
    "report": "",
    "analysis": "Hill's target domination culminated Sunday against the Bucs with 13 catches, 269 yards, and three touchdowns. Travis Kelce is a distant second with 22 percent of the team's targets over that three-game stretch. Patrick Mahomes has taken to force feeding Hill over the past month, supercharging his fantasy floor and ceiling. Hill will look to continue his tear in Week 13 against the Broncos.\u00a0\n",
    "timestamp": "2020-11-30 02:00 PM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [13.1, 19.3, 18.7, 14.4, 16.8, 4.0, 14.5, 23.8, 28.6, 'BYE', 21.5, 51.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [20.0, 12.7, 13.6, 20.1, 13.0, 13.3, 10.4, 13.8, 12.2, 'BYE', 14.4, 20.8, 15.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.1, 5.0, 5.3, 8.4, 4.3, 5.1, 6.6, 6.7, 4.5, 'BYE', 4.4, 6.0, 5.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.5, 20.8, 24.3, 24.8, 23.3, 21.3, 23.5, 23.3, 21.3, 'BYE', 21.5, 23.9, 24.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3932905.png",
    "name": "Diontae Johnson",
    "depthchart": "Starter: WR-1",
    "team": "Pittsburgh Steelers",
    "projected": 14.0,
    "opponent": "Washington Football Team",
    "home_away": "",
    "opp_rank_Neg": 2,
    "team_rank_Neu": 16,
    "avg_fp2": 11.01,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 23.99,
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
    "headlineNews": "Diontae Johnson caught 8-of-13\u00a0targets for 46 yards in the Steelers' Week 12\u00a0win over the Ravens.\n",
    "report": "",
    "analysis": "Those 13 targets led the team. On the heels of back-to-back 110-plus yard performances, Johnson pieced together a befuddling game against Baltimore with arguably three or four drops that left multiple chunk gains on the field. Johnson is a great player with an extremely promising career ahead of him, but these inconsistencies pop up a bit too often and limit the total efficiency of the offense. Still, you live with the miscues because Johnson is capable of the spectacular - just not on Wednesday afternoon football. He is an easy start against Washington in Week 13.\n",
    "timestamp": "2020-12-03 12:25 AM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.7, 19.2, 0.9, 'BYE', 0.3, 'DNP', 24.5, 1.1, 11.1, 20.6, 17.1, 8.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.5, 10.5, 12.0, 'BYE', 10.8, 'DNP', 10.3, 10.8, 14.2, 9.0, 23.1, 11.6, 14.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.0, 1.6, 6.7, 'BYE', 1.3, 'DNP', 0.6, 0.3, 1.0, 1.4, 1.8, 1.5, 2.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.1, 12.4, 19.5, 'BYE', 13.3, 'DNP', 11.8, 15.5, 16.1, 16.0, 18.0, 16.8, 17.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4239993.png",
    "name": "Tee Higgins",
    "depthchart": "Starter: WR-1",
    "team": "Cincinnati Bengals",
    "projected": 13.8,
    "opponent": "Miami Dolphins",
    "home_away": "at ",
    "opp_rank_Neu": 17,
    "team_rank_Neu": 18,
    "avg_fp2": 11.1,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 30.12,
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
    "headlineNews": "Tee Higgins caught 5-of-5 targets for 44 yards and a touchdown in the Bengals' Week 12 loss to the Giants.\u00a0\n",
    "report": "",
    "analysis": "A lost day \u2014 something that is going to be a theme without Joe Burrow under center \u2014 was salvaged by a one-yard score in the dying moments of the fourth quarter. Brandon Allen bought time for Higgins to cut back across the end zone. Allen then found him for the score on one of his only impressive passes of the day. If there is good news for Higgins' fantasy managers, it's that he led the Bengals' offense in receiving production, but there is just no hope here with either Allen or Ryan Finley under center. The Dolphins are a stay-away Week 13 matchup, rendering Higgins a WR4.\u00a0\n",
    "timestamp": "2020-11-29 10:33 PM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 'DNP', 18.5, 11.0, 8.2, 15.7, 16.3, 11.4, 'BYE', 19.0, 4.1, 12.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [0.6, 'DNP', 4.2, 7.9, 8.6, 12.0, 13.7, 12.3, 'BYE', 8.0, 14.3, 11.4, 13.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 'DNP', 0.0, 3.4, 5.7, 9.4, 9.4, 2.9, 'BYE', 10.6, 8.3, 2.5, 4.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [3.4, 'DNP', 9.5, 11.8, 12.2, 11.9, 20.1, 16.2, 'BYE', 13.8, 19.7, 14.0, 17.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13982.png",
    "name": "Julio Jones",
    "depthchart": "Starter: WR-1",
    "team": "Atlanta Falcons",
    "projected": 12.8,
    "opponent": "New Orleans Saints",
    "home_away": "",
    "opp_rank_Neg": 5,
    "team_rank_Pos": 5,
    "avg_fp2": 13.53,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 28.28,
    "fanduelSalary": "$6600",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Hamstring",
    "tmColorLite": "#A71930",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/atl.png",
    "headlineNews": "Julio Jones (hamstring) is listed as questionable to play Week 13 against the Saints.\u00a0\n",
    "report": "",
    "analysis": "Julio said Friday he \"feels pretty good\" after running pass routes during practice. He should be back in fantasy lineups, and Matt Ryan should be considered a borderline QB1 with Julio back in action.\u00a0\n",
    "timestamp": "2020-12-04 08:43 PM",
    "source": "James Palmer on Twitter ",
    "week01": 20.2,
    "week02": 3.4,
    "week03": "DNP",
    "week04": 5.2,
    "week05": "DNP",
    "week06": 29.7,
    "week07": 13.7,
    "week08": 17.2,
    "week09": 13.9,
    "week10": "BYE",
    "week11": 4.9,
    "week12": "DNP",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [20.2, 3.4, 'DNP', 5.2, 'DNP', 29.7, 13.7, 17.2, 13.9, 'BYE', 4.9, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.1, 15.7, 'DNP', 16.2, 'DNP', 9.3, 17.2, 17.7, 13.2, 'BYE', 16.1, 'DNP', 12.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.0, 8.3, 'DNP', 5.8, 'DNP', 6.7, 6.6, 6.8, 7.3, 'BYE', 7.6, 'DNP', 5.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [25.3, 25.9, 'DNP', 25.6, 'DNP', 24.4, 24.5, 24.8, 24.4, 'BYE', 22.5, 'DNP', 24.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4047646.png",
    "name": "A.J. Brown",
    "depthchart": "Starter: WR-1",
    "team": "Tennessee Titans",
    "projected": 12.7,
    "opponent": "Cleveland Browns",
    "home_away": "",
    "opp_rank_Neu": 20,
    "team_rank_Neu": 22,
    "avg_fp2": 15.29,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 30.4,
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
    "headlineNews": "A.J. Brown (hip) will play in Week 13 against the Browns.\u00a0\n",
    "report": "",
    "analysis": "Brown missed Thursday's practice with the hip issue but returned Friday. The team leader in target share could be in for a big day against the pass-funnel Browns defense. He's a low-end WR1 this week, though his range of outcomes is probably wider than most WR1 options.\u00a0\n",
    "timestamp": "2020-12-04 09:11 PM",
    "source": "Adam Caplan on Twitter ",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.4, 'DNP', 'DNP', 'BYE', 17.7, 20.1, 24.3, 10.4, 18.1, 2.6, 14.2, 23.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.6, 'DNP', 'DNP', 'BYE', 13.1, 15.0, 17.7, 18.5, 12.4, 13.7, 14.8, 13.5, 12.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 'DNP', 'DNP', 'BYE', 2.1, 2.2, 6.7, 4.9, 4.0, 2.6, 2.7, 1.9, 7.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.7, 'DNP', 'DNP', 'BYE', 15.2, 21.0, 22.1, 22.0, 22.3, 21.9, 21.8, 20.3, 23.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16799.png",
    "name": "Allen Robinson",
    "depthchart": "Starter: WR-1",
    "team": "Chicago Bears",
    "projected": 12.7,
    "opponent": "Detroit Lions",
    "home_away": "",
    "opp_rank_Pos": 26,
    "team_rank_Neu": 23,
    "avg_fp2": 13.48,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 33.29,
    "fanduelSalary": "$6700",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Knee",
    "tmColorLite": "#c36835",
    "tmColorDark": "#0B162A",
    "tmColorLite_rgba": "rgba(195, 104, 53, 0.2)",
    "tmColorDark_rgba": "rgba(11, 22, 42, 0.2)",
    "tmTextLite": "#c36835",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png",
    "headlineNews": "Allen Robinson (knee) is questionable for Week 13 against the Lions.\n",
    "report": "",
    "analysis": "Robinson reportedly injured his knee in practice and was removed for precautionary reasons. Assuming he suits up, Sunday makes for a terrific matchup against a banged up Lions secondary that has permitted the fifth-most receiving yards to opposing wideouts this year. Darnell Mooney (knee) is also questionable for Sunday.\n",
    "timestamp": "2020-12-04 07:46 PM",
    "source": "Kevin Fishbain on Twitter",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.8, 4.8, 23.3, 19.6, 14.0, 7.8, 9.0, 17.7, 11.6, 7.3, 'BYE', 23.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.0, 14.7, 11.3, 15.5, 12.8, 11.0, 10.7, 11.3, 15.4, 14.3, 'BYE', 10.3, 12.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.5, 3.8, 2.3, 5.9, 3.5, 5.1, 2.3, 5.0, 3.9, 4.7, 'BYE', 4.2, 6.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  "rgba(195, 104, 53, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.4, 19.0, 15.3, 20.3, 20.5, 18.5, 17.4, 18.7, 19.3, 19.1, 'BYE', 19.1, 20.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3121422.png",
    "name": "Terry McLaurin",
    "depthchart": "Starter: WR-1",
    "team": "Washington Football Team",
    "projected": 12.6,
    "opponent": "Pittsburgh Steelers",
    "home_away": "at ",
    "opp_rank_Neg": 1,
    "team_rank_Neg": 24,
    "avg_fp2": 13.62,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 29.14,
    "fanduelSalary": "$6800",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Ankle",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#773141",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(119, 49, 65, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png",
    "headlineNews": "Terry McLaurin (ankle) is listed as questionable for Week 13 against the Steelers.\u00a0\n",
    "report": "",
    "analysis": "McLaurin previously wasn't listed on this week's injury report, though he was \"questionable\" for Washington's Thanksgiving game against Dallas with the same ankle issue. He should be good to go this week against Pittsburgh.\u00a0\n",
    "timestamp": "2020-12-04 10:42 PM",
    "source": "John Keim on Twitter ",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.6, 22.0, 10.6, 16.8, 4.1, 10.9, 18.5, 'BYE', 21.0, 13.7, 10.9, 12.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.3, 9.4, 10.1, 8.9, 10.7, 9.7, 17.1, 'BYE', 11.1, 12.2, 14.0, 15.3, 12.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.0, 5.7, 11.3, 4.7, 3.5, 4.8, 5.4, 'BYE', 8.2, 4.8, 5.9, 5.1, 6.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.6, 19.7, 23.9, 17.9, 17.7, 17.9, 18.7, 'BYE', 18.1, 17.2, 20.0, 16.8, 19.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2976316.png",
    "name": "Michael Thomas",
    "depthchart": "Starter: WR-1",
    "team": "New Orleans Saints",
    "projected": 12.6,
    "opponent": "Atlanta Falcons",
    "home_away": "at ",
    "opp_rank_Pos": 31,
    "team_rank_Neu": 20,
    "avg_fp2": 7.3,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 35.7,
    "fanduelSalary": "$7000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9b845c",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(155, 132, 92, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#9b845c",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
    "headlineNews": "Michael Thomas (ankle) remained \"limited\" for Thursday's practice.\n",
    "report": "",
    "analysis": "Thomas' ankle is no longer a concern. Taysom Hill is, though even in Hill's nine-completion Week 12, four of them managed to go to Thomas. The duo is rematching with a Falcons defense Thomas got for 9/104 in Week 11. Thomas can be pinned to the WR1/2 borderline.\u00a0\n",
    "timestamp": "2020-12-04 01:03 AM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.2, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 7.6, 3.7, 14.9, 7.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.8, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 13.7, 18.1, 20.5, 11.0, 12.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [8.8, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 7.8, 7.7, 6.6, 7.6, 6.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(155, 132, 92, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [23.6, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 22.5, 23.1, 23.2, 22.8, 21.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15880.png",
    "name": "Robert Woods",
    "depthchart": "Starter: WR-1",
    "team": "Los Angeles Rams",
    "projected": 12.2,
    "opponent": "Arizona Cardinals",
    "home_away": "at ",
    "opp_rank_Neu": 13,
    "team_rank_Neu": 11,
    "avg_fp2": 13.62,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 31.62,
    "fanduelSalary": "$5900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Robert Woods caught 7-of-12 targets for 80 yards in Los Angeles' Week 12 loss to the 49ers.\n",
    "report": "",
    "analysis": "Woods was open for more than seven catches but could only watch as Jared Goff fed Richard Sherman and the sidelines for a handful of miserable off-target throws. Woods still led the team with a 38.7% target share and has now seen double-digit targets in back-to-back games. He'll\u00a0be a fringe WR1 (along with Cooper Kupp) in a salivating matchup against the Cardinals in Week 13.\n",
    "timestamp": "2020-11-30 03:57 PM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.9, 10.3, 18.9, 6.7, 15.1, 12.0, 4.0, 24.9, 'BYE', 6.1, 24.6, 12.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.7, 14.7, 8.8, 11.2, 10.6, 11.7, 10.7, 8.2, 'BYE', 13.3, 9.9, 12.1, 12.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.6, 5.8, 2.3, 3.0, 6.4, 3.4, 3.7, 3.5, 'BYE', 5.1, 3.1, 4.2, 3.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.4, 15.5, 19.2, 17.5, 18.4, 16.9, 15.6, 15.6, 'BYE', 18.3, 16.4, 16.3, 16.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4035687.png",
    "name": "Michael Pittman",
    "depthchart": "Starter: WR-1",
    "team": "Indianapolis Colts",
    "projected": 12.2,
    "opponent": "Houston Texans",
    "home_away": "at ",
    "opp_rank_Neu": 23,
    "team_rank_Neu": 10,
    "avg_fp2": 6.76,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 32.44,
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
    "headlineNews": "Michael\u00a0Pittman caught 2-of-9 targets for 28 yards in the Colts' Week 12 loss to the Titans.\u00a0\n",
    "report": "",
    "analysis": "It was a disappointing outing for Pittman, who had looked to establish himself as the Colts No. 1 wideout in recent weeks. Instead, T.Y. Hilton led the team in receiving while Pittman led all Colts pass catchers in targets. That Pittman and Rivers struggled to connect against Tennessee shouldn't stop fantasy managers from starting Pittman as a low-end WR2 in Week 13 against the Texans.\u00a0\n",
    "timestamp": "2020-11-29 11:35 PM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.0, 5.7, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 1.1, 7.6, 15.7, 14.1, 3.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.2, 5.0, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 2.8, 2.7, 3.8, 9.5, 12.6, 12.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 0.0, 0.0, 0.0, 1.9, 3.5, 0.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.3, 4.9, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 6.6, 6.8, 8.6, 6.6, 15.0, 10.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2576623.png",
    "name": "DeVante Parker",
    "depthchart": "Starter: WR-1",
    "team": "Miami Dolphins",
    "projected": 11.9,
    "opponent": "Cincinnati Bengals",
    "home_away": "",
    "opp_rank_Neu": 22,
    "team_rank_Neg": 25,
    "avg_fp2": 10.38,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 31.73,
    "fanduelSalary": "$6400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#008E97",
    "tmColorDark": "#005778",
    "tmColorLite_rgba": "rgba(0, 142, 151, 0.2)",
    "tmColorDark_rgba": "rgba(0, 87, 120, 0.2)",
    "tmTextLite": "#f5821f",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/mia.png",
    "headlineNews": "ESPN's Cameron Wolfe said there's \"no guarantee\" Preston Williams (foot) plays again this season.\u00a0\n",
    "report": "",
    "analysis": "Williams was placed on injured reserve in early November after being carted off the field in Week 9 against the Cardinals. Wolfe reiterated that Williams' injury \"wasn't minor,\" adding that \"maybe there's hope\" for a late December return for the wideout. DeVante Parker, just as he did in 2019, has become a target hog with Williams sidelined, commanding a 30 percent target share and dominating air yards for the Dolphins. Parker could shape up as a league winner in the season's final weeks if Ryan Fitzpatrick remains under center for the Dolphins.\u00a0Tua Tagovailoa's return would be a massive downgrade for Parker and the rest of the Miami offense.\u00a0\n",
    "timestamp": "2020-12-04 10:55 PM",
    "source": "Cameron Wolfe on Twitter",
    "week01": 6.7,
    "week02": 13.8,
    "week03": 9.4,
    "week04": 16.0,
    "week05": 12.0,
    "week06": 5.0,
    "week07": "BYE",
    "week08": 6.8,
    "week09": 9.4,
    "week10": 4.1,
    "week11": 15.1,
    "week12": 15.9,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.7, 13.8, 9.4, 16.0, 12.0, 5.0, 'BYE', 6.8, 9.4, 4.1, 15.1, 15.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.9, 11.6, 11.6, 17.9, 9.6, 10.2, 'BYE', 9.7, 9.9, 8.1, 9.0, 8.6, 11.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [11.4, 3.6, 3.4, 1.8, 6.6, 4.4, 'BYE', 7.2, 1.2, 3.1, 3.0, 2.9, 2.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 142, 151, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [20.8, 16.2, 17.0, 14.9, 18.1, 16.1, 'BYE', 17.0, 15.8, 15.3, 14.6, 14.6, 15.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15795.png",
    "name": "DeAndre Hopkins",
    "depthchart": "Starter: WR-1",
    "team": "Arizona Cardinals",
    "projected": 11.9,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank_Neg": 3,
    "team_rank_Neu": 15,
    "avg_fp2": 14.29,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 23.65,
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
    "headlineNews": "DeAndre Hopkins caught 5-of-7 targets for 55 yards in the Cardinals' Week 12 loss to the Patriots.\u00a0\n",
    "report": "",
    "analysis": "Given a heavy dose of Stephon Gilmore, Hopkins was held below 60 yards for the third time in four games. Kyler Murray's shoulder injury probably didn't help matters, as the quarterback was much less aggressive than usual, too often back pedaling vs. the rush. Things are not going to get any easier for the Cardinals' slumping WR1 in Week 13, where Jalen Ramsey and the Rams will pay a visit to the desert. The sides have yet to square off this season.\u00a0\u00a0\n",
    "timestamp": "2020-11-30 12:10 AM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [22.1, 16.8, 18.7, 7.6, 22.1, 8.3, 19.3, 'BYE', 4.5, 22.2, 7.6, 8.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.9, 17.1, 17.5, 16.6, 15.9, 14.3, 16.4, 'BYE', 14.4, 13.7, 10.7, 14.4, 11.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.7, 5.9, 5.1, 7.7, 6.5, 6.6, 3.9, 'BYE', 6.4, 6.0, 7.3, 7.0, 6.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [20.4, 21.6, 22.4, 21.3, 20.6, 21.9, 23.1, 'BYE', 21.6, 20.0, 21.5, 21.1, 20.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3925357.png",
    "name": "Calvin Ridley",
    "depthchart": "Backup: WR-2",
    "team": "Atlanta Falcons",
    "projected": 11.7,
    "opponent": "New Orleans Saints",
    "home_away": "",
    "opp_rank_Neg": 5,
    "team_rank_Pos": 5,
    "avg_fp2": 15.21,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 28.28,
    "fanduelSalary": "$7200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/atl.png",
    "headlineNews": "Julio Jones (hamstring) moved well in Friday's practice and \"feels pretty good\" headed into Week 13 against the Saints.\u00a0\n",
    "report": "",
    "analysis": "NFL Network's James Palmer said Jones ran routes throughout Friday's practice session and \"didn\u2019t feel like anything was holding him back.\" It remains to be seen whether Jones got in a full session. Either way, it would seem he'll be on the right side of questionable for Week 13. Fantasy players will have to risk an in-game hamstring aggravation if they plan on deploying Julio against New Orleans. Calvin Ridley would likely see a target boost if Julio sits.\u00a0\n",
    "timestamp": "2020-12-04 06:27 PM",
    "source": "James Palmer on Twitter ",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [29.4, 26.4, 14.2, 0.0, 17.6, 15.9, 17.4, 5.7, 'DNP', 'BYE', 11.5, 14.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.1, 12.9, 11.5, 13.7, 15.0, 8.3, 15.0, 15.4, 'DNP', 'BYE', 12.2, 14.2, 11.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.4, 5.0, 4.1, 6.6, 3.4, 3.1, 4.6, 5.6, 'DNP', 'BYE', 4.9, 4.8, 7.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.5, 18.0, 24.1, 24.4, 20.6, 21.3, 21.7, 20.7, 'DNP', 'BYE', 20.5, 21.1, 20.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3115394.png",
    "name": "D.J. Chark",
    "depthchart": "Starter: WR-1",
    "team": "Jacksonville Jaguars",
    "projected": 11.6,
    "opponent": "Minnesota Vikings",
    "home_away": "at ",
    "opp_rank_Pos": 25,
    "team_rank_Neu": 21,
    "avg_fp2": 10.88,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 36.06,
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
    "headlineNews": "D.J. Chark (ribs) was removed from the Week 13 injury report.\n",
    "report": "",
    "analysis": "Chark was held out last week but will return after a one game absence. Getting him back gives Jacksonville a\u00a0big-play threat, though the figure to stay run heavy with Mike Glennon starting. With\u00a0Chark and Chris Conley (questionable, hip)\u00a0potentially returning,\u00a0Collin Johnson will be pushed back into the No. 4 role.\n",
    "timestamp": "2020-12-04 06:16 PM",
    "source": "ESPN",
    "week01": 10.0,
    "week02": 10.4,
    "week03": "DNP",
    "week04": 25.5,
    "week05": 3.1,
    "week06": 8.0,
    "week07": 3.1,
    "week08": "BYE",
    "week09": 24.1,
    "week10": 7.6,
    "week11": 6.1,
    "week12": "DNP",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.0, 10.4, 'DNP', 25.5, 3.1, 8.0, 3.1, 'BYE', 24.1, 7.6, 6.1, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.9, 11.1, 'DNP', 5.5, 10.3, 13.5, 8.9, 'BYE', 10.6, 16.0, 8.0, 'DNP', 11.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.0, 0.0, 'DNP', 5.0, 0.7, 0.0, 0.0, 'BYE', 0.5, 1.7, 0.1, 'DNP', 0.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 103, 120, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.0, 15.1, 'DNP', 16.6, 17.6, 12.1, 19.2, 'BYE', 17.3, 15.1, 15.0, 'DNP', 16.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3126486.png",
    "name": "Deebo Samuel",
    "depthchart": "Reserve: WR-3",
    "team": "San Francisco 49ers",
    "projected": 11.5,
    "opponent": "Buffalo Bills",
    "home_away": "",
    "opp_rank_Neu": 18,
    "team_rank_Neu": 12,
    "avg_fp2": 10.54,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 27.82,
    "fanduelSalary": "$6300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "49ers coach Kyle Shanahan said Deebo Samuel (hamstring) \"isn't\u00a0injured\"\u00a0and is \"going to be good\" for Week 13 against Buffalo.\n",
    "report": "",
    "analysis": "Samuel's missed Thursday\u00a0practice was a rest day. The 49ers don't want to risk a setback\u00a0to Samuel, who's the centerpiece of the offense with\u00a0George Kittle sidelined. Fantasy managers should plan on having\u00a0Samuel for\u00a0a Monday night matchup with Buffalo.\n",
    "timestamp": "2020-12-04 05:30 PM",
    "source": "KNBR",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": 3.2,
    "week06": 15.0,
    "week07": 9.7,
    "week08": "DNP",
    "week09": "DNP",
    "week10": "DNP",
    "week11": "BYE",
    "week12": 18.8,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 3.2, 15.0, 9.7, 'DNP', 'DNP', 'DNP', 'BYE', 18.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 5.9, 6.6, 10.4, 'DNP', 'DNP', 'DNP', 'BYE', 8.3, 11.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 4.4, 3.4, 4.1, 'DNP', 'DNP', 'DNP', 'BYE', 3.5, 4.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 16.2, 16.2, 13.8, 'DNP', 'DNP', 'DNP', 'BYE', 14.3, 13.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3045138.png",
    "name": "Mike Williams",
    "depthchart": "Starter: WR-1",
    "team": "Los Angeles Chargers",
    "projected": 11.4,
    "opponent": "New England Patriots",
    "home_away": "",
    "opp_rank_Neu": 14,
    "team_rank_Pos": 2,
    "avg_fp2": 9.3,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 28.18,
    "fanduelSalary": "$4800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0080C6",
    "tmColorDark": "#002A5E",
    "tmColorLite_rgba": "rgba(0, 128, 198, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 94, 0.2)",
    "tmTextLite": "#0080C6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lac.png",
    "headlineNews": "Mike Williams caught 3-of-5 targets for 26 yards in Los Angeles' Week 12 loss to Buffalo.\n",
    "report": "",
    "analysis": "Williams has always been a volatile player given the types of targets he's been asked to haul in throughout his career and that hasn't changed with Justin Herbert under center. Big Mike has now recorded fewer than 40 yards (without a touchdown, too) in five of his nine starts with the outstanding rookie since Week 2. Williams will remain a boom-or-bust WR3/4 in Week 13 against the Patriots (and, quite frankly, for as long as he plays the game).\n",
    "timestamp": "2020-11-30 03:43 PM",
    "source": null,
    "week01": 8.9,
    "week02": 2.4,
    "week03": 2.2,
    "week04": "DNP",
    "week05": 25.4,
    "week06": "BYE",
    "week07": 0.9,
    "week08": 18.5,
    "week09": 10.6,
    "week10": 4.8,
    "week11": 15.2,
    "week12": 4.1,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.9, 2.4, 2.2, 'DNP', 25.4, 'BYE', 0.9, 18.5, 10.6, 4.8, 15.2, 4.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.3, 6.9, 5.6, 'DNP', 6.3, 'BYE', 9.8, 6.7, 7.2, 12.4, 11.9, 12.6, 11.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.0, 1.7, 0.6, 'DNP', 0.0, 'BYE', 3.7, 2.0, 1.9, 4.1, 1.5, 4.3, 4.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 128, 198, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.7, 12.7, 11.1, 'DNP', 10.5, 'BYE', 13.8, 14.8, 15.3, 15.0, 12.4, 13.1, 14.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15818.png",
    "name": "Keenan Allen",
    "depthchart": "Reserve: WR-3",
    "team": "Los Angeles Chargers",
    "projected": 11.4,
    "opponent": "New England Patriots",
    "home_away": "",
    "opp_rank_Neu": 14,
    "team_rank_Pos": 2,
    "avg_fp2": 15.45,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 28.18,
    "fanduelSalary": "$8100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0080C6",
    "tmColorDark": "#002A5E",
    "tmColorLite_rgba": "rgba(0, 128, 198, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 94, 0.2)",
    "tmTextLite": "#0080C6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lac.png",
    "headlineNews": "Keenan Allen caught 4-of-10 targets for 40 yards and one score in Los Angeles' Week 12 loss to Buffalo.\n",
    "report": "",
    "analysis": "Allen's touchdown catch was a well-designed play that put him in motion pre-snap and aligned him across from LB Tremaine Edmunds in zone coverage. Sunday was also Allen's eighth performance with double-digit targets from Justin Herbert as he's now recorded as many looks in 8-of-9 full games with the standout rookie this year. Allen has proven to be matchup-proof despite coach Anthony Lynn's horrendous play-calling and should continue to be treated as such in Week 13 against the Patriots.\n",
    "timestamp": "2020-11-29 11:07 PM",
    "source": null,
    "week01": 5.7,
    "week02": 13.1,
    "week03": 23.7,
    "week04": 10.2,
    "week05": 9.9,
    "week06": "BYE",
    "week07": 17.5,
    "week08": 17.2,
    "week09": 20.8,
    "week10": 11.4,
    "week11": 26.5,
    "week12": 14.0,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.7, 13.1, 23.7, 10.2, 9.9, 'BYE', 17.5, 17.2, 20.8, 11.4, 26.5, 14.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.1, 13.1, 11.6, 10.6, 16.0, 'BYE', 18.4, 16.6, 4.8, 10.8, 9.0, 9.2, 11.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.6, 8.5, 8.5, 5.4, 5.3, 'BYE', 5.7, 4.4, 6.7, 6.9, 5.7, 6.3, 6.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 128, 198, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.3, 24.9, 23.4, 20.8, 21.2, 'BYE', 21.1, 20.3, 21.3, 23.4, 20.4, 21.4, 21.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3128390.png",
    "name": "Allen Lazard",
    "depthchart": "Backup: WR-2",
    "team": "Green Bay Packers",
    "projected": 11.2,
    "opponent": "Philadelphia Eagles",
    "home_away": "",
    "opp_rank_Neu": 8,
    "team_rank_Pos": 5,
    "avg_fp2": 11.74,
    "opp_rank_allowed_fp2_Neu": 9,
    "opp_avg_allowed_fp2": 28.16,
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
    "headlineNews": "Allen Lazard (core) was limited in Wednesday's practice.\n",
    "report": "",
    "analysis": "Lazard went 4-23-1 on six targets against the Bears in Week 12, his second game back from core-muscle surgery. He played just 46% of the snaps, well behind Davante Adams and Marquez Valdes-Scantling. Lazard's ceiling isn't as high as the Packers' No. 3 wideout, but he's a passable WR4/FLEX.\n",
    "timestamp": "2020-12-02 10:11 PM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [16.2, 6.0, 23.4, 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 2.8, 10.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.0, 12.0, 8.6, 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 8.6, 7.2, 11.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.8, 0.0, 6.4, 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 1.2, 2.7, 0.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.2, 11.7, 12.4, 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 11.9, 13.3, 13.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3916945.png",
    "name": "Darius Slayton",
    "depthchart": "Starter: WR-1",
    "team": "New York Giants",
    "projected": 10.9,
    "opponent": "Seattle Seahawks",
    "home_away": "at ",
    "opp_rank_Pos": 32,
    "team_rank_Neg": 28,
    "avg_fp2": 8.48,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 41.09,
    "fanduelSalary": "$4600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#0B2265",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(11, 34, 101, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png",
    "headlineNews": "Darius Slayton (shoulder, foot) was limited in Wednesday's practice.\n",
    "report": "",
    "analysis": "Battling through minor nicks and bruises seemingly all season, it all came to a head last week when Slayton goose-egged on two targets against the lowly Bengals. He's behind both Sterling Shepard and Evan Engram on the target totem pole and is merely a big-play threat racking up empty air yards.\n",
    "timestamp": "2020-12-02 08:15 PM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [25.2, 4.8, 4.8, 6.3, 16.9, 10.8, 3.3, 8.1, 1.3, 11.8, 'BYE', 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.5, 10.9, 11.5, 9.9, 16.6, 12.0, 10.6, 13.3, 10.4, 13.3, 'BYE', 11.1, 10.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.0, 1.8, 3.4, 2.2, 0.6, 0.9, 2.1, 2.1, 1.2, 1.5, 'BYE', 2.6, 1.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [22.4, 22.1, 22.8, 14.9, 18.7, 19.6, 21.3, 19.8, 20.2, 17.6, 'BYE', 19.5, 18.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13983.png",
    "name": "A.J. Green",
    "depthchart": "Backup: WR-2",
    "team": "Cincinnati Bengals",
    "projected": 10.4,
    "opponent": "Miami Dolphins",
    "home_away": "at ",
    "opp_rank_Neu": 17,
    "team_rank_Neu": 18,
    "avg_fp2": 5.38,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 30.12,
    "fanduelSalary": "$3100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#ea7330",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(234, 115, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#ea7330",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png",
    "headlineNews": "A.J. Green was held catchless on three targets in the Bengals' Week 12 loss to the Giants.\n",
    "report": "",
    "analysis": "Brandon Allen or Ryan Finley are not about to revive A.J. Green's WR4 value. The faded veteran has six catches for 60 yards over his past four contests. Hopefully Green can salvage his game on a one-year deal for a contender in 2021.\u00a0\n",
    "timestamp": "2020-11-30 01:07 AM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.6, 4.4, 6.1, 0.8, 0.0, 13.6, 11.7, 2.9, 'BYE', 0.0, 12.1, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.5, 13.4, 13.4, 15.2, 11.7, 6.9, 8.3, 15.0, 'BYE', 9.0, 8.3, 7.9, 10.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.1, 7.3, 7.3, 6.1, 5.4, 5.6, 8.9, 5.9, 'BYE', 4.7, 4.8, 5.6, 3.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.6, 21.4, 22.2, 21.7, 21.1, 21.8, 24.1, 20.7, 'BYE', 20.8, 22.1, 21.6, 19.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2977187.png",
    "name": "Cooper Kupp",
    "depthchart": "Reserve: WR-3",
    "team": "Los Angeles Rams",
    "projected": 10.0,
    "opponent": "Arizona Cardinals",
    "home_away": "at ",
    "opp_rank_Neu": 13,
    "team_rank_Neu": 11,
    "avg_fp2": 11.15,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 31.62,
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
    "headlineNews": "Cooper Kupp caught 2-of-5 targets for 41 yards in Los Angeles' Week 12 loss to the 49ers.\n",
    "report": "",
    "analysis": "Kupp didn't record his first catch until the third quarter and was only targeted once in the first half. It was a miserable afternoon for Jared Goff, who either looked to Robert Woods (7-80) with his first read or missed a wide open receiver altogether. Kupp still averaged 13.3 targets in\u00a0Los Angeles' three games prior to this one and will remain a fringe WR1 in the team's upcoming divisional matchup against the Cardinals.\n",
    "timestamp": "2020-11-30 03:53 PM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.0, 10.5, 21.2, 15.2, 9.1, 2.6, 8.9, 16.5, 'BYE', 7.5, 20.0, 5.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.4, 9.3, 7.2, 7.0, 8.3, 11.7, 9.3, 7.7, 'BYE', 10.0, 6.0, 10.8, 10.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.4, 3.2, 5.0, 5.7, 6.6, 6.4, 3.5, 5.9, 'BYE', 6.4, 4.5, 5.0, 5.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.4, 20.9, 19.3, 20.1, 21.4, 20.2, 20.5, 19.0, 'BYE', 21.4, 19.2, 20.2, 21.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2577327.png",
    "name": "Tyler Lockett",
    "depthchart": "Backup: WR-2",
    "team": "Seattle Seahawks",
    "projected": 10.0,
    "opponent": "New York Giants",
    "home_away": "",
    "opp_rank_Neu": 19,
    "team_rank_Pos": 4,
    "avg_fp2": 14.55,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 29.11,
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
    "headlineNews": "Tyler Lockett caught 3-of-4 targets for 23 yards in the Seahawks' Week 12 win over the Eagles.\n",
    "report": "",
    "analysis": "He was the Seahawks' second-leading receiver, but it was a distant second to DK Metcalf's explosive 10-177 night on 13 targets. Lockett now has five sub-50 yards scoreless games to his name this season. Much like last year, Lockett's boom games are huge, but he trades them with extreme lows. Lockett will look to rebound next week against the Giants as a WR2.\n",
    "timestamp": "2020-12-01 06:31 AM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [13.2, 16.2, 32.5, 4.9, 6.4, 'BYE', 45.5, 5.3, 6.0, 9.1, 17.2, 3.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.6, 7.5, 11.9, 11.0, 13.0, 'BYE', 8.5, 7.5, 9.2, 7.4, 10.6, 11.1, 10.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.0, 1.5, 2.0, 4.7, 4.6, 'BYE', 1.2, 3.1, 2.0, 6.4, 6.0, 6.6, 2.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.9, 15.7, 14.3, 18.6, 19.7, 'BYE', 14.7, 21.2, 15.1, 23.3, 23.0, 22.9, 16.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4046692.png",
    "name": "Chase Claypool",
    "depthchart": "Backup: WR-2",
    "team": "Pittsburgh Steelers",
    "projected": 9.9,
    "opponent": "Washington Football Team",
    "home_away": "",
    "opp_rank_Neg": 2,
    "team_rank_Neu": 16,
    "avg_fp2": 13.05,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 23.99,
    "fanduelSalary": "$6300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/pit.png",
    "headlineNews": "Chase Claypool caught 6-of-9 targets for 52 yards in the Steelers' Week 12\u00a0win over the Ravens.\n",
    "report": "",
    "analysis": "Claypool, and the rest of the Steelers' pass catching group, left numerous plays on the field. Meanwhile, Baltimore's defensive backs continued to play at a high level and\u00a0knocked two or three passes out of Claypool's hands, preventing the rookie's near-weekly big play from happening in this odd Wednesday evening affair. Claypool did draw a 36-yard pass interference play early in the second half. Despite the win, this was one of the worst overall performances for the Steelers' offense, but Claypool remains a strong start in Week 13 against Washington.\n",
    "timestamp": "2020-12-03 12:37 AM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.7, 16.3, 2.9, 'BYE', 39.1, 16.1, 0.0, 10.7, 11.3, 19.3, 13.9, 8.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [0.1, 4.2, 4.9, 'BYE', 4.3, 10.8, 13.0, 10.2, 9.3, 5.6, 15.0, 10.1, 9.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.1, 'BYE', 0.8, 3.2, 6.2, 0.0, 2.6, 0.0, 8.9, 2.5, 9.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [6.5, 8.3, 7.1, 'BYE', 6.1, 14.1, 16.6, 13.4, 30.9, 27.1, 17.6, 16.6, 19.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16790.png",
    "name": "Jarvis Landry",
    "depthchart": "Backup: WR-2",
    "team": "Cleveland Browns",
    "projected": 9.8,
    "opponent": "Tennessee Titans",
    "home_away": "at ",
    "opp_rank_Pos": 28,
    "team_rank_Neg": 30,
    "avg_fp2": 8.85,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 32.43,
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
    "headlineNews": "Jarvis Landry caught 8-of-11 targets for 143 yards and a touchdown in the Browns Week 12 win over the Jaguars.\n",
    "report": "",
    "analysis": "Coming into Week 12, Landry hadn't topped 90 yards in a single game since Week 12 of 2019. The Jacksonville defense left gave Landry loads of separation and the Browns punished them throughout the game for it. He also reeled in a few difficult receptions from off throws by Baker Mayfield. Landry's biggest issue going forward will be his team's passing volume. They ran the ball with their running backs as many times as they passed this week. The Browns travel to face the Titans next week and may actually be forced into passing more as Tennessee is a far more difficult opponent than Jacksonville. Landry is a low-end WR2 in the solid matchup.\n",
    "timestamp": "2020-11-29 09:31 PM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.6, 6.1, 5.6, 12.78, 10.8, 5.5, 8.46, 7.2, 'BYE', 4.4, 3.6, 24.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.8, 6.2, 8.8, 11.6, 12.2, 8.1, 9.7, 10.7, 'BYE', 2.8, 5.9, 3.7, 9.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.6, 6.6, 5.5, 6.2, 4.9, 6.4, 4.9, 5.3, 'BYE', 5.9, 2.7, 4.7, 7.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.1, 19.1, 17.7, 18.2, 17.7, 18.1, 16.9, 16.5, 'BYE', 16.2, 18.5, 16.1, 18.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16460.png",
    "name": "Adam Thielen",
    "depthchart": "Starter: WR-1",
    "team": "Minnesota Vikings",
    "projected": 9.7,
    "opponent": "Jacksonville Jaguars",
    "home_away": "",
    "opp_rank_Pos": 29,
    "team_rank_Neu": 17,
    "avg_fp2": 15.86,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 32.73,
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
    "headlineNews": "Vikings coach Mike Zimmer expects Adam Thielen (reserve/COVID-19) to play in Week 13 against the Jaguars.\n",
    "report": "",
    "analysis": "The Vikings held out Thielen despite a\u00a0false positive test last week. He'll come off the COVID list and should\u00a0return after missing only one game.\u00a0Olabisi Johnson had seven catches for 74 yards filling in for Thielen last week.\u00a0Thielen's presence will push Johnson back into four-wide sets.\n",
    "timestamp": "2020-12-02 04:53 PM",
    "source": "Pioneer Press",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [28.0, 4.6, 10.8, 22.2, 24.8, 12.6, 'BYE', 4.2, 4.8, 18.3, 28.3, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.0, 14.8, 16.5, 15.2, 13.7, 13.4, 'BYE', 13.5, 16.6, 7.0, 15.6, 'DNP', 9.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.0, 11.6, 3.0, 1.3, 7.0, 0.9, 'BYE', 1.0, 2.3, 1.6, 2.0, 'DNP', 2.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  "rgba(224, 170, 25, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.9, 24.0, 18.6, 18.0, 18.8, 18.5, 'BYE', 17.5, 18.1, 17.0, 16.2, 'DNP', 18.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16731.png",
    "name": "Brandin Cooks",
    "depthchart": "Starter: WR-1",
    "team": "Houston Texans",
    "projected": 9.7,
    "opponent": "Indianapolis Colts",
    "home_away": "",
    "opp_rank_Neg": 6,
    "team_rank_Pos": 3,
    "avg_fp2": 10.54,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 28.25,
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
    "headlineNews": "Will Fuller announced via Instagram that he's been suspended six games for\u00a0violating the NFL\u2019s performance-enhancing substances policy.\n",
    "report": "",
    "analysis": "Currently set to become an unrestricted free agent in March, Fuller will miss the rest of the 2020 season and sit out Week 1 for whichever franchise he ends up with for\u00a0the new league year. Fuller wraps up his fifth and potentially\u00a0final campaign\u00a0with the Texans with career-highs\u00a0in receiving yards (879) and touchdowns (8) from Deshaun Watson. With Kenny Stills\u00a0on waivers and Randall Cobb still on injured reserve, Houston will move forward with Brandin Cooks, Keke Coutee, and rookie Isaiah Coulter in three-wide sets in the interim. Fuller turns 27 in April.\n",
    "timestamp": "2020-11-30 10:55 PM",
    "source": "Aaron Reiss on Twitter",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.0, 12.0, 3.8, 0.0, 26.1, 17.3, 9.5, 'BYE', 15.8, 6.9, 10.5, 11.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.7, 4.8, 5.9, 11.0, 9.5, 9.5, 12.0, 'BYE', 9.3, 7.0, 9.3, 7.5, 9.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.5, 5.1, 4.3, 5.0, 5.7, 2.7, 5.2, 'BYE', 3.0, 3.8, 4.6, 4.3, 4.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.7, 19.6, 17.9, 19.0, 19.1, 18.7, 18.8, 'BYE', 16.3, 18.3, 20.2, 17.4, 18.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2976212.png",
    "name": "Stefon Diggs",
    "depthchart": "Starter: WR-1",
    "team": "Buffalo Bills",
    "projected": 9.7,
    "opponent": "San Francisco 49ers",
    "home_away": "at ",
    "opp_rank_Neg": 4,
    "team_rank_Neu": 7,
    "avg_fp2": 14.41,
    "opp_rank_allowed_fp2_Neu": 7,
    "opp_avg_allowed_fp2": 27.42,
    "fanduelSalary": "$7500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#005596",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 85, 150, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
    "headlineNews": "Stefon Diggs caught 7-of-9 targets for 39 yards in Buffalo's Week 12 win over the Chargers.\n",
    "report": "",
    "analysis": "Diggs' two targets in the first half were both negated for penalties (downfield DPI, offensive holding), technically listing\u00a0him with his first target (and catch) in the third quarter. His usage over\u00a0the last 30 minutes was strictly underneath or at the line of scrimmage\u00a0as Josh Allen continued to run for his life from Joey Bosa (career-high three sacks) and get rid of the ball as quickly as possible. Diggs still finished with a team-high nine targets and is now averaging 12.6 in the three games John Brown (calf) has missed this year. Diggs will again rank as a volume-based WR1 with a salivating ceiling in Week 13 against the 49ers.\n",
    "timestamp": "2020-11-30 12:13 AM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.6, 25.3, 12.9, 14.5, 15.6, 13.6, 7.8, 12.2, 16.3, 20.3, 'BYE', 7.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.0, 12.8, 13.1, 19.6, 14.5, 11.4, 12.2, 11.2, 18.1, 14.1, 'BYE', 14.9, 9.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.5, 5.0, 3.9, 5.1, 3.9, 3.6, 5.6, 5.6, 4.6, 4.6, 'BYE', 4.6, 5.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.1, 20.6, 19.2, 22.0, 19.6, 20.2, 19.2, 17.9, 18.6, 19.0, 'BYE', 19.9, 18.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2971618.png",
    "name": "Nelson Agholor",
    "depthchart": "Starter: WR-1",
    "team": "Las Vegas Raiders",
    "projected": 9.7,
    "opponent": "New York Jets",
    "home_away": "at ",
    "opp_rank_Pos": 30,
    "team_rank_Neu": 19,
    "avg_fp2": 9.11,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 31.24,
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
    "headlineNews": "Nelson\u00a0Agholor (ankle) didn't practice Thursday.\u00a0\n",
    "report": "",
    "analysis": "Agholor was sidelined on Wednesday too. If Agoholor -- the team leader in air yards through 12 weeks -- misses this week's tasty matchup against the Jets, look for Henry Ruggs to get extra snaps and targets in Week 13. Ruggs has a team-high 18.5 air yards per target this season. He would be a WR4 option if Agholor is inactive.\u00a0\n",
    "timestamp": "2020-12-03 10:11 PM",
    "source": "Paul Gutierrez on Twitter ",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.8, 2.4, 4.2, 12.4, 13.7, 'BYE', 19.2, 0.0, 12.5, 1.3, 17.8, 7.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [-1.2, 1.1, 2.3, 4.3, 6.6, 'BYE', 5.4, 4.2, 6.4, 6.2, 4.9, 10.3, 9.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.4, 2.6, 1.5, 1.0, 0.0, 'BYE', 1.5, 1.1, 2.3, 1.0, 2.5, 1.1, 4.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.7, 14.3, 13.5, 11.2, 13.8, 'BYE', 13.5, 13.2, 11.3, 12.7, 14.6, 13.6, 12.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14924.png",
    "name": "T.Y. Hilton",
    "depthchart": "Backup: WR-2",
    "team": "Indianapolis Colts",
    "projected": 9.7,
    "opponent": "Houston Texans",
    "home_away": "at ",
    "opp_rank_Neu": 23,
    "team_rank_Neu": 10,
    "avg_fp2": 6.33,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 32.44,
    "fanduelSalary": "$4300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#014683",
    "tmColorDark": "#002C5F",
    "tmColorLite_rgba": "rgba(1, 70, 131, 0.2)",
    "tmColorDark_rgba": "rgba(0, 44, 95, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png",
    "headlineNews": "Michael\u00a0Pittman caught 2-of-9 targets for 28 yards in the Colts' Week 12 loss to the Titans.\u00a0\n",
    "report": "",
    "analysis": "It was a disappointing outing for Pittman, who had looked to establish himself as the Colts No. 1 wideout in recent weeks. Instead, T.Y. Hilton led the team in receiving while Pittman led all Colts pass catchers in targets. That Pittman and Rivers struggled to connect against Tennessee shouldn't stop fantasy managers from starting Pittman as a low-end WR2 in Week 13 against the Texans.\u00a0\n",
    "timestamp": "2020-11-29 11:35 PM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.3, 4.3, 6.7, 4.4, 9.9, 1.6, 'BYE', 1.9, 'DNP', 6.0, 5.1, 16.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.0, 23.8, 9.5, 11.1, 16.1, 12.9, 'BYE', 10.6, 'DNP', 15.8, 13.2, 8.4, 9.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.2, 5.1, 5.1, 5.1, 4.0, 2.9, 'BYE', 2.9, 'DNP', 2.3, 3.0, 3.6, 0.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.4, 22.3, 19.2, 21.7, 19.7, 19.1, 'BYE', 20.4, 'DNP', 20.1, 20.4, 19.9, 23.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15072.png",
    "name": "Marvin Jones",
    "depthchart": "Starter: WR-1",
    "team": "Detroit Lions",
    "projected": 9.7,
    "opponent": "Chicago Bears",
    "home_away": "at ",
    "opp_rank_Neu": 11,
    "team_rank_Neu": 13,
    "avg_fp2": 9.25,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 23.47,
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
    "headlineNews": "Kenny Golladay (hip) did not practice Thursday.\u00a0\n",
    "report": "",
    "analysis": "It's a wonder the team hasn't placed Golladay on injured reserve. He's unlikely to return from his lingering hip injury this week against the Bears, meaning Marvin Jones will continue working as the team's WR1. Jones leads the Lions in targets and air yards over the past four games.\u00a0\n",
    "timestamp": "2020-12-03 09:26 PM",
    "source": "Tim Twentyman on Twitter",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.5, 10.3, 6.6, 1.4, 'BYE', 1.8, 10.5, 17.4, 11.8, 19.6, 7.1, 7.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.1, 9.9, 11.5, 8.9, 'BYE', 7.1, 14.2, 6.2, 20.9, 9.5, 13.9, 12.1, 9.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.4, 4.0, 3.3, 2.5, 'BYE', 1.0, 1.9, 3.3, 2.4, 3.1, 2.8, 3.1, 3.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 118, 182, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.8, 16.7, 18.0, 16.3, 'BYE', 15.2, 17.4, 15.9, 17.1, 17.6, 16.0, 17.9, 16.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3916433.png",
    "name": "Jakobi Meyers",
    "depthchart": "Starter: WR-1",
    "team": "New England Patriots",
    "projected": 9.4,
    "opponent": "Los Angeles Chargers",
    "home_away": "at ",
    "opp_rank_Neu": 10,
    "team_rank_Neg": 29,
    "avg_fp2": 7.72,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 26.8,
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
    "headlineNews": "Jakobi Meyers caught 5-of-6 targets for 52 yards in the Patriots' Week 12 win over the Cardinals.\u00a0\n",
    "report": "",
    "analysis": "It was a modest PPR rebound for Meyers after last week's 3/38 disappearance. Meyers led the Pats in receiving on an afternoon where Cam Newton could not get anything going either down the field or over the middle. Despite Meyers' 12/169 outburst four weeks ago, he's done little to suggest he will rise above low-end WR3 status in PPR leagues. The Pats do get the Chargers' struggling pass defense for Week 13.\u00a0\u00a0\n",
    "timestamp": "2020-11-30 12:59 AM",
    "source": null,
    "week01": 0.0,
    "week02": 1.2,
    "week03": 0.0,
    "week04": "DNP",
    "week05": "BYE",
    "week06": "DNP",
    "week07": "DNP",
    "week08": 10.8,
    "week09": 22.9,
    "week10": 13.36,
    "week11": 5.3,
    "week12": 7.7,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 1.2, 0.0, 'DNP', 'BYE', 'DNP', 'DNP', 10.8, 22.9, 13.36, 5.3, 7.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.2, 1.8, 1.2, 'DNP', 'BYE', 'DNP', 'DNP', 4.4, 7.8, 3.7, 7.2, 8.7, 9.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.4, 1.4, 0.8, 'DNP', 'BYE', 'DNP', 'DNP', 0.9, 0.0, 0.0, 1.6, 1.5, 1.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [5.7, 7.8, 5.9, 'DNP', 'BYE', 'DNP', 'DNP', 7.6, 7.2, 13.3, 12.3, 13.4, 10.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3120348.png",
    "name": "JuJu Smith-Schuster",
    "depthchart": "Reserve: WR-3",
    "team": "Pittsburgh Steelers",
    "projected": 9.2,
    "opponent": "Washington Football Team",
    "home_away": "",
    "opp_rank_Neg": 2,
    "team_rank_Neu": 16,
    "avg_fp2": 11.65,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 23.99,
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
    "headlineNews": "JuJu Smith-Schuster caught 8-of-9\u00a0targets for 37 yards in the Steelers' Week 12\u00a0win over the Ravens.\n",
    "report": "",
    "analysis": "Eight catches for 37 yards highlights how limited this Steelers offense can look at time if receivers cannot win after the catch. Ravens' defensive backs did an outstanding job of tackling, but Smith-Schuster was able to score the lone touchdown for his team's offense on a simple outside breaking route inside the five-yard line. Despite his exceedingly lower average depth of target over the last two weeks, JuJu should be considered a WR2 against Washington in Week 13.\n",
    "timestamp": "2020-12-03 12:04 AM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [21.9, 8.3, 14.3, 'BYE', 4.8, 1.6, 13.0, 10.2, 18.3, 18.2, 3.9, 13.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.2, 17.5, 16.4, 'BYE', 15.1, 7.2, 9.6, 9.0, 10.5, 5.6, 11.5, 7.9, 9.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.5, 3.5, 14.0, 'BYE', 4.9, 2.5, 2.1, 5.4, 4.3, 3.6, 5.7, 3.0, 4.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.9, 20.7, 25.8, 'BYE', 19.7, 20.3, 19.2, 20.7, 18.8, 20.3, 20.2, 18.5, 19.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3045523.png",
    "name": "Kendrick Bourne",
    "depthchart": "Backup: WR-2",
    "team": "San Francisco 49ers",
    "projected": 8.8,
    "opponent": "Buffalo Bills",
    "home_away": "",
    "opp_rank_Neu": 18,
    "team_rank_Neu": 12,
    "avg_fp2": 6.32,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 27.82,
    "fanduelSalary": "$3900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "Kendrick Bourne caught 4-of-4 targets for 26 yards in the 49ers' Week 10 loss to the Saints.\u00a0\n",
    "report": "",
    "analysis": "Bourne is a distant WR2 to Brandon Aiyuk with George Kittle and Deebo Samuel out of the Niners' lineup. He should be a viable option next week against the Rams in deep PPR leagues with multiple flex spots. Otherwise, he can safely be dropped.\u00a0\n",
    "timestamp": "2020-11-16 01:46 AM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.4, 8.7, 8.3, 4.8, 10.0, 5.4, 0.0, 12.1, 'DNP', 4.6, 'BYE', 4.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.7, 14.9, 8.0, 12.3, 7.5, 6.0, 10.0, 8.3, 'DNP', 7.0, 'BYE', 7.4, 8.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.4, 1.7, 1.5, 1.0, 0.9, 1.2, 0.0, 1.3, 'DNP', 1.7, 'BYE', 0.1, 1.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.3, 8.3, 8.9, 9.5, 8.9, 9.0, 9.7, 9.2, 'DNP', 9.3, 'BYE', 8.9, 9.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3071572.png",
    "name": "Keelan Cole",
    "depthchart": "Backup: WR-2",
    "team": "Jacksonville Jaguars",
    "projected": 8.8,
    "opponent": "Minnesota Vikings",
    "home_away": "at ",
    "opp_rank_Pos": 25,
    "team_rank_Neu": 21,
    "avg_fp2": 9.04,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 36.06,
    "fanduelSalary": "$3800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#006778",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 103, 120, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#006778",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/jax.png",
    "headlineNews": "Keelan Cole caught 3-of-6 targets for 44 yards in the Jaguars Week 12 loss to the Browns.\n",
    "report": "",
    "analysis": "The Jaguars were without D.J. Chark and Chris Conley this week. Cole was out-targeted by Collin Johnson 6-8 and both receivers were competing for looks from Mike Glennon. Once Jacksonville's primary receivers get healthy, Cole's role will diminish. He's a deep FLEX option if the Jaguars are forced to run out the same group of receivers that they did today.\u00a0\n",
    "timestamp": "2020-11-29 10:15 PM",
    "source": null,
    "week01": 13.2,
    "week02": 14.8,
    "week03": 6.3,
    "week04": 6.6,
    "week05": 9.7,
    "week06": 17.3,
    "week07": 1.7,
    "week08": "BYE",
    "week09": 1.1,
    "week10": 19.2,
    "week11": 3.6,
    "week12": 5.9,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [13.2, 14.8, 6.3, 6.6, 9.7, 17.3, 1.7, 'BYE', 1.1, 19.2, 3.6, 5.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [-0.5, 5.9, 8.4, 5.7, 6.3, 7.9, 6.7, 'BYE', 8.7, 6.7, 7.9, 8.4, 8.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 1.2, 3.8, 1.2, 1.0, 1.3, 0.0, 'BYE', 2.0, 4.6, 3.6, 0.0, 2.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 103, 120, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.2, 11.6, 12.6, 11.2, 10.4, 11.3, 10.9, 'BYE', 14.5, 16.0, 13.0, 13.2, 12.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16725.png",
    "name": "Sammy Watkins",
    "depthchart": "Backup: WR-2",
    "team": "Kansas City Chiefs",
    "projected": 8.8,
    "opponent": "Denver Broncos",
    "home_away": "",
    "opp_rank_Neu": 7,
    "team_rank_Pos": 1,
    "avg_fp2": 8.13,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 28.53,
    "fanduelSalary": "$4800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Sammy Watkins caught 4-of-7 targets for 38 yards in the Chiefs' Week 12 win over the Bucs.\n",
    "report": "",
    "analysis": "Watkins' seven targets were third on the team behind Tyreek Hill (15) and Travis Kelce (8) in his first action since Week 5 after battling leg injuries. Watkins is the third option in this passing game, but he's a distant one and will be a WR3/4 next week against the Broncos.\n",
    "timestamp": "2020-11-30 01:24 AM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [18.0, 1.6, 9.7, 4.3, 9.4, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 5.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.9, 7.6, 7.8, 9.6, 6.4, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 12.3, 8.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.5, 4.1, 4.6, 3.8, 2.7, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 2.4, 3.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.2, 21.1, 20.1, 18.8, 19.6, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 17.9, 19.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4243160.png",
    "name": "Laviska Shenault",
    "depthchart": "Reserve: WR-3",
    "team": "Jacksonville Jaguars",
    "projected": 8.6,
    "opponent": "Minnesota Vikings",
    "home_away": "at ",
    "opp_rank_Pos": 25,
    "team_rank_Neu": 21,
    "avg_fp2": 7.1,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 36.06,
    "fanduelSalary": "$3600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#006778",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 103, 120, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#006778",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/jax.png",
    "headlineNews": "Laviska Shenault caught 3-of-4 targets for 31 yards in the Jaguars' Week 12 loss to the Browns.\u00a0\n",
    "report": "",
    "analysis": "Shenault also logged a carry for six yards. The Jaguars were without Chris Conley and D.J. Chark in this game and Shenault still couldn't get much going. Collin Johnson saw four more targets than him and Keelan Cole saw two more targets. Fantasy managers can part ways with Shenault in all but the deepest leagues.\n",
    "timestamp": "2020-11-29 10:02 PM",
    "source": null,
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": 11.6,
    "week05": 11.4,
    "week06": 2.6,
    "week07": 5.9,
    "week08": "BYE",
    "week09": 0.4,
    "week10": "DNP",
    "week11": "DNP",
    "week12": 5.2,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 11.6, 11.4, 2.6, 5.9, 'BYE', 0.4, 'DNP', 'DNP', 5.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 5.0, 6.9, 9.3, 6.0, 'BYE', 9.0, 'DNP', 'DNP', 7.9, 8.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 1.9, 0.0, 1.1, 5.4, 'BYE', 3.5, 'DNP', 'DNP', 1.4, 1.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 103, 120, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 9.5, 13.3, 12.5, 10.7, 'BYE', 9.6, 'DNP', 'DNP', 8.1, 10.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3042910.png",
    "name": "Rashard Higgins",
    "depthchart": "Starter: WR-1",
    "team": "Cleveland Browns",
    "projected": 8.5,
    "opponent": "Tennessee Titans",
    "home_away": "at ",
    "opp_rank_Pos": 28,
    "team_rank_Neg": 30,
    "avg_fp2": 5.78,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 32.43,
    "fanduelSalary": "$4000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FF3C00",
    "tmColorDark": "#311D00",
    "tmColorLite_rgba": "rgba(255, 60, 0, 0.2)",
    "tmColorDark_rgba": "rgba(49, 29, 0, 0.2)",
    "tmTextLite": "#FF3C00",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
    "headlineNews": "KhaDarel Hodge (hamstring) is out for Week 13 against the Titans.\u00a0\n",
    "report": "",
    "analysis": "Hodge played 43 percent of the team's offensive snaps last week and drew three targets. His absence could be a slight snap and target bump for Rashard Higgins, though Higgins is only a WR4 play this week against Tennessee.\u00a0Donovan Peoples-Jones could see more playing time this week with Hodge sidelined.\u00a0\n",
    "timestamp": "2020-12-04 07:07 PM",
    "source": "Jake Trotter on Twitter ",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.4, 0.0, 'DNP', 'DNP', 10.6, 7.8, 14.0, 1.9, 'BYE', 6.3, 8.0, 2.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.1, -0.4, 'DNP', 'DNP', 1.7, 4.0, 4.6, 6.4, 'BYE', 4.4, 6.8, 5.4, 8.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 'DNP', 'DNP', 0.0, 0.0, 0.1, 3.4, 'BYE', 0.5, 4.3, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.0, 8.3, 'DNP', 'DNP', 9.5, 9.0, 9.0, 11.5, 'BYE', 9.7, 10.8, 8.5, 9.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3895856.png",
    "name": "Christian Kirk",
    "depthchart": "Backup: WR-2",
    "team": "Arizona Cardinals",
    "projected": 8.4,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank_Neg": 3,
    "team_rank_Neu": 15,
    "avg_fp2": 10.29,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 23.65,
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
    "headlineNews": "Christian Kirk caught 3-of-6 targets for 19 yards in the Cardinals' Week 12 loss to the Patriots.\n",
    "report": "",
    "analysis": "Kirk also \"added\" a zero-yard rush. Kirk's day could have been better, but he committed an egregious drop on what would have been an eight-yard score. After seeming to heat up mid-season, Kirk has now been held to 11/96/0 over his past three games. The Rams are not an ideal slump-busting matchup for Week 13. Kirk will be a WR4 for that one.\u00a0\n",
    "timestamp": "2020-11-30 12:41 AM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.5, 7.0, 'DNP', 9.4, 10.3, 21.6, 18.2, 'BYE', 20.8, 4.7, 7.0, 3.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.7, 5.3, 'DNP', 8.9, 8.6, 7.5, 10.1, 'BYE', 9.1, 6.9, 6.9, 9.7, 8.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.5, 3.1, 'DNP', 0.0, 11.6, 4.5, 16.0, 'BYE', 1.7, 5.6, 9.0, 0.0, 4.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.1, 11.1, 'DNP', 18.9, 23.0, 13.1, 37.7, 'BYE', 16.6, 19.1, 19.1, 17.1, 13.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2972460.png",
    "name": "Breshad Perriman",
    "depthchart": "Starter: WR-1",
    "team": "New York Jets",
    "projected": 8.3,
    "opponent": "Las Vegas Raiders",
    "home_away": "",
    "opp_rank_Pos": 27,
    "team_rank_Neg": 32,
    "avg_fp2": 9.17,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 31.74,
    "fanduelSalary": "$3900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#125740",
    "tmColorDark": "#003f2d",
    "tmColorLite_rgba": "rgba(18, 87, 64, 0.2)",
    "tmColorDark_rgba": "rgba(0, 63, 45, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png",
    "headlineNews": "Breshad Perriman (shoulder) was limited in Wednesday's practice.\n",
    "report": "",
    "analysis": "It's nothing new for Perriman, who has been playing through some shoulder pain. He led the Jets with 79 yards in the Week 12 loss to the Dolphins. Perriman will be a low-floor WR4 with some upside in a good matchup but in a bad offense this week against the Raiders.\n",
    "timestamp": "2020-12-02 10:43 PM",
    "source": null,
    "week01": 3.2,
    "week02": 2.2,
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": 8.2,
    "week07": 3.7,
    "week08": "DNP",
    "week09": 24.6,
    "week10": "BYE",
    "week11": 12.4,
    "week12": 9.9,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.2, 2.2, 'DNP', 'DNP', 'DNP', 8.2, 3.7, 'DNP', 24.6, 'BYE', 12.4, 9.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.1, 8.0, 'DNP', 'DNP', 'DNP', 8.8, 5.6, 'DNP', 3.7, 'BYE', 9.3, 6.1, 8.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.6, 2.3, 'DNP', 'DNP', 'DNP', 0.0, 2.3, 'DNP', 2.2, 'BYE', 0.0, 0.7, 0.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  "rgba(18, 87, 64, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.3, 11.2, 'DNP', 'DNP', 'DNP', 7.7, 10.9, 'DNP', 13.1, 'BYE', 11.6, 11.6, 11.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4262921.png",
    "name": "Justin Jefferson",
    "depthchart": "Backup: WR-2",
    "team": "Minnesota Vikings",
    "projected": 8.3,
    "opponent": "Jacksonville Jaguars",
    "home_away": "",
    "opp_rank_Pos": 29,
    "team_rank_Neu": 17,
    "avg_fp2": 14.16,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 32.73,
    "fanduelSalary": "$6900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e0aa19",
    "tmColorDark": "#300e5a",
    "tmColorLite_rgba": "rgba(224, 170, 25, 0.2)",
    "tmColorDark_rgba": "rgba(48, 14, 90, 0.2)",
    "tmTextLite": "#e0aa19",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/min.png",
    "headlineNews": "Justin Jefferson caught 7-of-13 targets for 70 yards and two touchdowns in the Vikings' Week 12 win over the Panthers.\n",
    "report": "",
    "analysis": "Everything was working in Jefferson's favor on Sunday. Adam Thielen and Irv Smith were out,\u00a0Dalvin Cook was banged up in the second half,\u00a0and the Vikings were trailing for the entire game. That led to a season-high 13 targets and another huge day for the Offensive Rookie of the Year contender. Jefferson was able to hit the Griddy twice after scores and had other red zone chances, too. Jefferson is up to 918 receiving yards and six scores in one of the NFL's most run-heavy offenses. He's as good as it gets among rookie receivers.\n",
    "timestamp": "2020-11-29 09:29 PM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.6, 5.9, 27.0, 12.3, 3.8, 35.1, 'BYE', 4.1, 7.9, 17.5, 16.1, 22.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.8, 3.4, 7.7, 4.5, 8.0, 8.8, 'BYE', 9.3, 13.9, 4.8, 14.7, 15.8, 8.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.2, 0.0, 0.2, 3.1, 5.1, 3.5, 'BYE', 6.4, 1.8, 1.9, 2.8, 1.5, 1.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  "rgba(224, 170, 25, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.4, 13.5, 11.3, 13.4, 11.2, 13.3, 'BYE', 34.6, 26.4, 19.3, 27.3, 25.5, 22.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4035403.png",
    "name": "Denzel Mims",
    "depthchart": "Backup: WR-2",
    "team": "New York Jets",
    "projected": 7.7,
    "opponent": "Las Vegas Raiders",
    "home_away": "",
    "opp_rank_Pos": 27,
    "team_rank_Neg": 32,
    "avg_fp2": 7.38,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 31.74,
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
    "headlineNews": "Denzel Mims caught 4-of-8 targets for 67 yards in Week 12 against Miami.\n",
    "report": "",
    "analysis": "Mims tied for the team led in targets with Breshad Perriman. He missed a few plays with an injury but returned to the game.\u00a0Mims has been one of the bright spots for the winless Jets, with at least 40 yards in five straight weeks. Mims is a low-ceiling WR3 for a Week 13 matchup with the Raiders.\n",
    "timestamp": "2020-11-29 10:18 PM",
    "source": null,
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": 6.2,
    "week08": 5.2,
    "week09": 8.2,
    "week10": "BYE",
    "week11": 8.6,
    "week12": 8.7,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 6.2, 5.2, 8.2, 'BYE', 8.6, 8.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 3.9, 8.0, 6.4, 'BYE', 6.7, 5.3, 7.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 0.7, 5.0, 2.5, 'BYE', 3.2, 1.6, 2.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  "rgba(18, 87, 64, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 7.2, 11.2, 15.2, 'BYE', 12.1, 14.1, 15.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4241802.png",
    "name": "Jalen Reagor",
    "depthchart": "Backup: WR-2",
    "team": "Philadelphia Eagles",
    "projected": 7.2,
    "opponent": "Green Bay Packers",
    "home_away": "at ",
    "opp_rank_Neu": 15,
    "team_rank_Neg": 27,
    "avg_fp2": 6.72,
    "opp_rank_allowed_fp2_Neu": 15,
    "opp_avg_allowed_fp2": 28.75,
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
    "headlineNews": "Jalen Reagor caught 3-of-7 targets for 11 yards in the Eagles' Week 12 loss to the Seahawks.\n",
    "report": "",
    "analysis": "Yikes. Reagor has mostly had a rookie season to forget in the Eagles' broken offense. He has one touchdown on the year and has yet to top 55 yards in a game. Reagor is well off the fantasy radar ahead of a Week 13 date with the Packers at Lambeau.\n",
    "timestamp": "2020-12-01 06:33 AM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.0, 6.1, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 11.7, 'BYE', 6.7, 7.2, 2.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.9, 2.0, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 1.5, 'BYE', 5.3, 6.5, 7.7, 7.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.3, 1.3, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 0.0, 'BYE', 0.9, 3.8, 7.3, 6.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.3, 7.0, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 5.2, 'BYE', 12.8, 11.5, 9.7, 7.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4243537.png",
    "name": "Gabriel Davis",
    "depthchart": "Backup: WR-2",
    "team": "Buffalo Bills",
    "projected": 7.1,
    "opponent": "San Francisco 49ers",
    "home_away": "at ",
    "opp_rank_Neg": 4,
    "team_rank_Neu": 7,
    "avg_fp2": 6.4,
    "opp_rank_allowed_fp2_Neu": 7,
    "opp_avg_allowed_fp2": 27.42,
    "fanduelSalary": "$4300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#005596",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 85, 150, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
    "headlineNews": "Gabriel Davis caught 3-of-4 targets for 79\u00a0yards and one score in Buffalo's Week 12 win over the Chargers.\n",
    "report": "",
    "analysis": "Davis' touchdown reception actually came from Cole Beasley, who went into motion behind Josh Allen, caught a screen pass behind the line of scrimmage, and found Davis wide open in the end zone for a 20-yard score. The 6'2/216 rookie also out-leaped his coverage for a 44-yard grab in the fourth quarter. Davis has averaged three more targets per game (2.3 to 5.3) without John Brown (calf) this year but remains light years behind Stefon Diggs (12) and Cole Beasley (7.3) in terms of volume in those starts. Davis is still an intriguing FLEX option if Brown remains sidelined for\u00a0what should be an uptempo matchup against the 49ers on Monday night.\n",
    "timestamp": "2020-11-30 02:12 PM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.6, 7.1, 10.1, 9.1, 8.3, 1.2, 1.6, 0.0, 15.0, 0.0, 'BYE', 15.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.3, 1.5, 1.9, 3.8, 6.2, 2.8, 7.4, 4.6, 4.1, 5.3, 'BYE', 9.1, 7.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.0, 0.0, 0.0, 0.7, 2.1, 3.7, 4.9, 0.8, 'BYE', 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.1, 5.9, 3.4, 9.4, 9.8, 5.7, 8.2, 10.1, 9.7, 8.7, 'BYE', 10.3, 10.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3932430.png",
    "name": "Jalen Guyton",
    "depthchart": "Backup: WR-2",
    "team": "Los Angeles Chargers",
    "projected": 7.0,
    "opponent": "New England Patriots",
    "home_away": "",
    "opp_rank_Neu": 14,
    "team_rank_Pos": 2,
    "avg_fp2": 5.43,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 28.18,
    "fanduelSalary": "$3100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0080C6",
    "tmColorDark": "#002A5E",
    "tmColorLite_rgba": "rgba(0, 128, 198, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 94, 0.2)",
    "tmTextLite": "#0080C6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lac.png",
    "headlineNews": "Jalen Guyton caught 2-of-3 targets for 84 yards and a touchdown in the Chargers' Week 7 win over the Jaguars.\n",
    "report": "",
    "analysis": "Guyton essentially has one job: to win downfield. He's a burner on the outside that can occasionally come down with a long score because Justin Herbert's deep-ball placement has been money. Guyton's 1-3 targets per game just don't cut it in 12-team leagues.\n",
    "timestamp": "2020-10-26 12:14 AM",
    "source": null,
    "week01": 2.1,
    "week02": 7.9,
    "week03": 3.3,
    "week04": 13.7,
    "week05": 5.0,
    "week06": "BYE",
    "week07": 15.4,
    "week08": 0.8,
    "week09": 1.4,
    "week10": 4.4,
    "week11": 0.9,
    "week12": 4.8,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.1, 7.9, 3.3, 13.7, 5.0, 'BYE', 15.4, 0.8, 1.4, 4.4, 0.9, 4.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.8, 2.2, 1.8, 1.7, 4.0, 'BYE', 7.2, 3.1, 6.2, 8.8, 8.9, 6.0, 7.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 1.8, 0.0, 0.0, 0.0, 'BYE', 3.5, 3.1, 3.4, 0.0, 0.0, 0.9, 2.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 128, 198, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [6.7, 4.2, 11.4, 7.8, 12.6, 'BYE', 11.5, 16.0, 13.9, 10.4, 12.0, 3.9, 9.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3045144.png",
    "name": "Tyler Boyd",
    "depthchart": "Reserve: WR-3",
    "team": "Cincinnati Bengals",
    "projected": 7.0,
    "opponent": "Miami Dolphins",
    "home_away": "at ",
    "opp_rank_Neu": 17,
    "team_rank_Neu": 18,
    "avg_fp2": 11.9,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 30.12,
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
    "headlineNews": "Tyler Boyd caught 3-of-6 passes for 15 yards in the Bengals' Week 12 loss to the Giants.\u00a0\n",
    "report": "",
    "analysis": "We were hoping No. 2 (No. 3?) QB Brandon Allen would funnel easy looks and checkdowns Boyd's way, but there was simply no production of any kind for the Bengals' post-Joe Burrow offense. Both the catches and yards were new season lows for the Bengals' slot man. Previously locked into the WR18-24 range, Boyd is now a low-upside WR3 with either Allen or Ryan Finley under center. The Dolphins are going to rock Allen or Finley's world in Week 13.\u00a0\n",
    "timestamp": "2020-11-29 11:27 PM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.3, 16.7, 17.5, 12.9, 6.2, 10.4, 22.24, 16.6, 'BYE', 7.1, 13.0, 3.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.9, 5.1, 9.2, 7.3, 6.4, 5.7, 8.5, 9.9, 'BYE', 4.8, 6.2, 5.8, 7.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.5, 2.6, 4.4, 3.9, 1.7, 2.9, 4.7, 3.2, 'BYE', 4.6, 2.7, 4.0, 2.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.3, 16.9, 17.6, 19.1, 15.6, 15.0, 16.8, 16.0, 'BYE', 15.3, 17.3, 14.3, 17.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2576716.png",
    "name": "Jamison Crowder",
    "depthchart": "Reserve: WR-3",
    "team": "New York Jets",
    "projected": 7.0,
    "opponent": "Las Vegas Raiders",
    "home_away": "",
    "opp_rank_Pos": 27,
    "team_rank_Neg": 32,
    "avg_fp2": 11.59,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 31.74,
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
    "headlineNews": "Jamison Crowder caught 3-of-4 targets for 31 yards in Week 12 against Miami.\n",
    "report": "",
    "analysis": "Even with Sam Darnold starting, Crowder continued to see fewer targets than Denzel Mims and Breshad Perriman. The yards were his most since Week 5, but there weren't many plays for the Jets' slot man.\u00a0Crowder should remain on fantasy benches for a Week 13 matchup with the Raiders.\n",
    "timestamp": "2020-11-29 10:07 PM",
    "source": null,
    "week01": 21.0,
    "week02": "DNP",
    "week03": "DNP",
    "week04": 13.9,
    "week05": 21.6,
    "week06": 8.3,
    "week07": "DNP",
    "week08": "DNP",
    "week09": 9.6,
    "week10": "BYE",
    "week11": 2.1,
    "week12": 4.6,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [21.0, 'DNP', 'DNP', 13.9, 21.6, 8.3, 'DNP', 'DNP', 9.6, 'BYE', 2.1, 4.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.4, 'DNP', 'DNP', 10.0, 6.7, 8.9, 'DNP', 'DNP', 6.0, 'BYE', 6.7, 5.3, 7.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.2, 'DNP', 'DNP', 2.4, 2.3, 2.8, 'DNP', 'DNP', 3.6, 'BYE', 3.0, 2.2, 2.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  "rgba(18, 87, 64, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.5, 'DNP', 'DNP', 14.9, 14.4, 15.7, 'DNP', 'DNP', 14.8, 'BYE', 15.7, 14.9, 14.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2976592.png",
    "name": "Sterling Shepard",
    "depthchart": "Reserve: WR-3",
    "team": "New York Giants",
    "projected": 7.0,
    "opponent": "Seattle Seahawks",
    "home_away": "at ",
    "opp_rank_Pos": 32,
    "team_rank_Neg": 28,
    "avg_fp2": 9.31,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 41.09,
    "fanduelSalary": "$5300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#0B2265",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(11, 34, 101, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png",
    "headlineNews": "Sterling Shepard (toe, shoulder) was limited in Wednesday's practice.\n",
    "report": "",
    "analysis": "Limited is Shepard's normal. He's coming off a seven-catch game against the Bengals in Week 12 and leads all Giants wideouts in targets since he returned from I.R. over a month ago. He and Evan Engram are the lone fantasy-viable pass-catchers in this offense, even with Colt McCoy taking over under center for Week 13.\n",
    "timestamp": "2020-12-02 08:17 PM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.7, 4.5, 'DNP', 'DNP', 'DNP', 'DNP', 14.9, 11.4, 8.7, 7.7, 'BYE', 10.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.8, 12.7, 'DNP', 'DNP', 'DNP', 'DNP', 5.4, 3.8, 6.6, 8.2, 'BYE', 8.3, 7.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.9, 4.1, 'DNP', 'DNP', 'DNP', 'DNP', 4.5, 4.4, 2.5, 5.0, 'BYE', 4.1, 5.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.3, 15.2, 'DNP', 'DNP', 'DNP', 'DNP', 18.0, 16.1, 16.0, 16.2, 'BYE', 15.4, 16.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13295.png",
    "name": "Emmanuel Sanders",
    "depthchart": "Reserve: WR-3",
    "team": "New Orleans Saints",
    "projected": 6.8,
    "opponent": "Atlanta Falcons",
    "home_away": "at ",
    "opp_rank_Pos": 31,
    "team_rank_Neu": 20,
    "avg_fp2": 8.63,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 35.7,
    "fanduelSalary": "$4700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9b845c",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(155, 132, 92, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#9b845c",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
    "headlineNews": "Emmanuel Sanders caught his only target for four yards in the Saints' Week 12 win against Denver.\u00a0\n",
    "report": "",
    "analysis": "New Orleans continues to run an ultra run heavy offense with Taysom Hill starting at QB, leaving Sanders and other secondary parts of the team's passing game in the cold. Sanders last week caught four balls for 66 yards -- and had a long touchdown negated by penalty -- against Atlanta, the Saints' Week 13 opponent. Sanders should only be under consideration in the deepest fantasy formats for as long as Hill is the starter.\u00a0\n",
    "timestamp": "2020-11-30 01:48 AM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.0, 2.3, 13.6, 12.3, 18.2, 'BYE', 'DNP', 'DNP', 11.8, 1.0, 8.6, 0.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.5, 13.0, 5.2, 7.7, 7.1, 'BYE', 'DNP', 'DNP', 5.1, 7.0, 11.6, 5.8, 6.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [12.9, 2.8, 2.2, 2.6, 2.9, 'BYE', 'DNP', 'DNP', 1.1, 4.4, 1.6, 2.0, 1.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(155, 132, 92, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [21.9, 18.0, 15.4, 14.5, 13.3, 'BYE', 'DNP', 'DNP', 14.5, 14.3, 12.7, 14.6, 15.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4241475.png",
    "name": "Henry Ruggs",
    "depthchart": "Backup: WR-2",
    "team": "Las Vegas Raiders",
    "projected": 6.5,
    "opponent": "New York Jets",
    "home_away": "at ",
    "opp_rank_Pos": 30,
    "team_rank_Neu": 19,
    "avg_fp2": 5.54,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 31.24,
    "fanduelSalary": "$4500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A5ACAF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lv.png",
    "headlineNews": "Nelson\u00a0Agholor (ankle) didn't practice Thursday.\u00a0\n",
    "report": "",
    "analysis": "Agholor was sidelined on Wednesday too. If Agoholor -- the team leader in air yards through 12 weeks -- misses this week's tasty matchup against the Jets, look for Henry Ruggs to get extra snaps and targets in Week 13. Ruggs has a team-high 18.5 air yards per target this season. He would be a WR4 option if Agholor is inactive.\u00a0\n",
    "timestamp": "2020-12-03 10:11 PM",
    "source": "Paul Gutierrez on Twitter ",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 18.8, 'BYE', 5.5, 1.9, 1.0, 4.6, 2.2, 6.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 12.1, 'BYE', 5.1, 8.5, 10.6, 10.0, 6.9, 8.9, 6.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 1.1, 'BYE', 4.8, 4.1, 4.3, 1.6, 0.0, 0.7, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 16.5, 'BYE', 14.3, 16.7, 13.6, 14.5, 13.7, 4.5, 8.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3135321.png",
    "name": "Hunter Renfrow",
    "depthchart": "Reserve: WR-3",
    "team": "Las Vegas Raiders",
    "projected": 6.4,
    "opponent": "New York Jets",
    "home_away": "at ",
    "opp_rank_Pos": 30,
    "team_rank_Neu": 19,
    "avg_fp2": 7.45,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 31.24,
    "fanduelSalary": "$4300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A5ACAF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lv.png",
    "headlineNews": "Hunter Renfrow caught 7-of-9 targets for 73 yards in the Raiders' Week 12 loss to the Falcons.\n",
    "report": "",
    "analysis": "Renfrow paced the Raiders in targets, catches, and yards on a day Vegas didn't find the end zone. His 73 yards were Renfrow's second most of the season, and he has just two touchdowns. He's not on the fantasy radar outside of deeper PPR formats.\n",
    "timestamp": "2020-11-29 10:49 PM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.1, 5.2, 17.4, 8.2, 4.7, 'BYE', 6.2, 10.6, 7.0, 4.0, 4.7, 10.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.8, 3.9, 8.1, 12.6, 8.2, 'BYE', 5.8, 6.4, 8.2, 5.0, 5.2, 7.9, 6.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.9, 2.1, 1.3, 2.2, 1.5, 'BYE', 1.2, 2.1, 9.0, 2.3, 1.4, 2.7, 3.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.0, 13.9, 12.9, 14.2, 14.0, 'BYE', 14.0, 15.5, 18.1, 14.0, 12.9, 11.6, 8.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3042778.png",
    "name": "Corey Davis",
    "depthchart": "Backup: WR-2",
    "team": "Tennessee Titans",
    "projected": 6.3,
    "opponent": "Cleveland Browns",
    "home_away": "",
    "opp_rank_Neu": 20,
    "team_rank_Neu": 22,
    "avg_fp2": 11.21,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 30.4,
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
    "headlineNews": "A.J. Brown (hip) did not practice Thursday.\u00a0\n",
    "report": "",
    "analysis": "This doesn't appear to be Brown's usual rest day. The hip injury is new for Brown, who\u00a0last week burned the Colts for 95 yards and a touchdown on four receptions. A DNP on Friday would put Brown in doubt to suit up this week against the Browns. If he's out, Corey Davis would get a target bump in a sneaky good matchup against a generous Cleveland secondary.\u00a0\n",
    "timestamp": "2020-12-03 09:10 PM",
    "source": "Scott Petrak on Twitter ",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [13.6, 11.1, 9.4, 'BYE', 'DNP', 'DNP', 12.5, 22.8, 0.0, 9.2, 13.8, 8.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.3, 6.4, 7.5, 'BYE', 'DNP', 'DNP', 7.9, 11.7, 7.8, 5.5, 7.3, 4.2, 6.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.3, 1.6, 0.7, 'BYE', 'DNP', 'DNP', 0.0, 1.5, 2.8, 1.9, 1.9, 7.3, 0.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.9, 12.7, 12.1, 'BYE', 'DNP', 'DNP', 13.4, 15.5, 15.1, 12.5, 14.4, 15.0, 14.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3115306.png",
    "name": "Josh Reynolds",
    "depthchart": "Backup: WR-2",
    "team": "Los Angeles Rams",
    "projected": 6.2,
    "opponent": "Arizona Cardinals",
    "home_away": "at ",
    "opp_rank_Neu": 13,
    "team_rank_Neu": 11,
    "avg_fp2": 7.07,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 31.62,
    "fanduelSalary": "$4200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Josh Reynolds caught 5-of-6 targets for 40 yards in Los Angeles' Week 12 loss to San Francisco.\n",
    "report": "",
    "analysis": "Reynolds has now seen six targets in back-to-back games, has yet to eclipse the century mark in any performance this year,\u00a0and hasn't scored since Week 7 \u2014 a problem considering he remains the low man on the totem pole from Jared Goff and behind Cooper Kupp and Robert Woods weekly. Simply put, Reynolds goes as Goff goes, and neither went anywhere Sunday. Consider Reynolds a FLEX for 12-team leagues in Week 13 against the Cardinals.\n",
    "timestamp": "2020-11-30 04:06 PM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.2, 4.3, 6.0, 4.0, 5.6, 11.5, 13.2, 6.4, 'BYE', 13.4, 4.7, 6.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.1, -0.1, 1.5, 1.3, 1.7, 4.9, 4.1, 3.3, 'BYE', 5.6, 4.2, 6.2, 6.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.0, 0.0, 0.0, 0.8, 0.0, 0.1, 'BYE', 0.4, 0.9, 0.4, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.5, 7.8, 8.2, 10.4, 9.5, 9.2, 10.2, 7.8, 'BYE', 10.1, 11.7, 9.4, 9.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4040655.png",
    "name": "Darnell Mooney",
    "depthchart": "Backup: WR-2",
    "team": "Chicago Bears",
    "projected": 6.0,
    "opponent": "Detroit Lions",
    "home_away": "",
    "opp_rank_Pos": 26,
    "team_rank_Neu": 23,
    "avg_fp2": 6.38,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 33.29,
    "fanduelSalary": "$3400",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Knee",
    "tmColorLite": "#c36835",
    "tmColorDark": "#0B162A",
    "tmColorLite_rgba": "rgba(195, 104, 53, 0.2)",
    "tmColorDark_rgba": "rgba(11, 22, 42, 0.2)",
    "tmTextLite": "#c36835",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png",
    "headlineNews": "Darnell Mooney (ankle) is questionable for Week 13 against the Lions.\n",
    "report": "",
    "analysis": "Mooney went from off the injury report to DNP on Friday, which typically is a very worrisome development. Bears coach Matt Nagy said the team was being \"precautious\" with Mooney and still expects him to play. It's unclear how truthful Nagy is being, so the Bears' inactive list on Sunday is worth tracking. If Mooney is out, Anthony Miller becomes more tolerable as a dart throw in a cupcake matchup.\n",
    "timestamp": "2020-12-05 12:39 AM",
    "source": "JJ Stankevitz on Twitter",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 11.1, 2.9, 7.4, 2.5, 5.1, 5.5, 15.4, 6.8, 1.3, 'BYE', 6.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 2.3, 6.7, 9.7, 3.7, 6.7, 6.3, 6.4, 9.7, 8.0, 'BYE', 5.4, 6.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 0.8, 5.0, 4.4, 0.0, 0.0, 4.0, 3.9, 2.4, 5.5, 'BYE', 2.4, 3.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  "rgba(195, 104, 53, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 2.8, 9.4, 9.3, 14.7, 12.8, 10.0, 7.3, 8.3, 12.7, 'BYE', 10.9, 6.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2991662.png",
    "name": "Mack Hollins",
    "depthchart": "Backup: WR-2",
    "team": "Miami Dolphins",
    "projected": 6.0,
    "opponent": "Cincinnati Bengals",
    "home_away": "",
    "opp_rank_Neu": 22,
    "team_rank_Neg": 25,
    "avg_fp2": 1.14,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 31.73,
    "fanduelSalary": "$3000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#008E97",
    "tmColorDark": "#005778",
    "tmColorLite_rgba": "rgba(0, 142, 151, 0.2)",
    "tmColorDark_rgba": "rgba(0, 87, 120, 0.2)",
    "tmTextLite": "#f5821f",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/mia.png",
    "headlineNews": "Dolphins claimed WR Mack Hollins off waivers from the Eagles.\n",
    "report": "",
    "analysis": "Miami recently saw Hollins play six offensive snaps on Sunday, ultimately failing to make any kind of impact before getting waived. He's the fourth player to sign with the Dolphins in the last 36 hours, joining OL Evan Brown, WR Trevor Davis and RB Zach Zenner. Hollins totaled 10/125 over 11 performances with the Eagles this year (and 26 catches since 2017) and strictly remains a project with little consequence for the rebuilding Fins. Corner Ken Crawley and OG Chris Reed were waived in corresponding moves.\n",
    "timestamp": "2019-12-05 08:03 AM",
    "source": "Cameron Wolfe on Twitter",
    "week01": 0.0,
    "week02": 0.0,
    "week03": "DNP",
    "week04": 0.0,
    "week05": 0.0,
    "week06": 0.0,
    "week07": "BYE",
    "week08": 0.0,
    "week09": 7.6,
    "week10": 0.6,
    "week11": 1.4,
    "week12": 2.9,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 0.0, 'DNP', 0.0, 0.0, 0.0, 'BYE', 0.0, 7.6, 0.6, 1.4, 2.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [-3.4, -2.1, 'DNP', 2.5, -1.8, -1.0, 'BYE', -0.7, 0.1, 0.6, 1.8, 0.4, 6.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 'DNP', 0.0, 0.0, 0.0, 'BYE', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 142, 151, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [5.7, 7.2, 'DNP', 3.4, 2.9, 4.3, 'BYE', 3.6, 3.7, 6.7, 4.2, 3.3, 2.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3139522.png",
    "name": "Travis Fulgham",
    "depthchart": "Starter: WR-1",
    "team": "Philadelphia Eagles",
    "projected": 5.9,
    "opponent": "Green Bay Packers",
    "home_away": "at ",
    "opp_rank_Neu": 15,
    "team_rank_Neg": 27,
    "avg_fp2": 10.9,
    "opp_rank_allowed_fp2_Neu": 15,
    "opp_avg_allowed_fp2": 28.75,
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
    "headlineNews": "Travis Fulgham caught both of his targets for 16 yards in the Eagles' Week 12 loss to the Seahawks.\n",
    "report": "",
    "analysis": "It was actually a production improvement for Fulgham over his last two games where he had identical 1-8-0 receiving lines. But after seeing a combined 12 targets Weeks 10-11, Fulgham took a big step back in the volume department in this one. He was eighth on the Eagles in targets. Fulgham can probably be dropped now with everyone healthy in Philly.\n",
    "timestamp": "2020-12-01 06:25 AM",
    "source": null,
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": 26.2,
    "week06": 16.5,
    "week07": 9.8,
    "week08": 16.8,
    "week09": "BYE",
    "week10": 1.3,
    "week11": 1.3,
    "week12": 2.6,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 26.2, 16.5, 9.8, 16.8, 'BYE', 1.3, 1.3, 2.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 7.7, 7.5, 11.5, 13.2, 'BYE', 14.2, 8.2, 8.9, 5.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 3.6, 0.0, 13.0, 6.3, 'BYE', 1.5, 0.0, 3.2, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 17.5, 9.1, 16.4, 15.4, 'BYE', 15.1, 18.0, 16.6, 18.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4241463.png",
    "name": "Jerry Jeudy",
    "depthchart": "Starter: WR-1",
    "team": "Denver Broncos",
    "projected": 5.8,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Neu": 16,
    "team_rank_Neg": 26,
    "avg_fp2": 8.13,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 26.37,
    "fanduelSalary": "$4600",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Ankle",
    "tmColorLite": "#e17757",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(225, 119, 87, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#e17757",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/den.png",
    "headlineNews": "Jerry Jeudy (ankle) is questionable for Week 13 against the Chiefs.\n",
    "report": "",
    "analysis": "It's the same ankle injury Jeudy has battled the past two\u00a0weeks while hauling in three catches for 37 yards on a decreasing number of snaps. Jeudy is fully expected to play again, but his actual production when the smoke clears is up for debate. Consider him a WR3/4 for Sunday.\n",
    "timestamp": "2020-12-04 09:17 PM",
    "source": "Denver Broncos on Twitter",
    "week01": 7.6,
    "week02": 8.2,
    "week03": 8.0,
    "week04": 13.1,
    "week05": "BYE",
    "week06": 4.2,
    "week07": 3.0,
    "week08": 9.3,
    "week09": 22.0,
    "week10": 8.8,
    "week11": 5.2,
    "week12": 0.0,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.6, 8.2, 8.0, 13.1, 'BYE', 4.2, 3.0, 9.3, 22.0, 8.8, 5.2, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.6, 7.4, 10.1, 11.4, 'BYE', 6.4, 3.9, 10.1, 14.2, 11.4, 10.2, 11.0, 5.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.9, 3.8, 7.3, 5.4, 'BYE', 1.7, 7.0, 5.2, 5.5, 5.5, 4.3, 3.0, 0.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(225, 119, 87, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.2, 12.3, 13.2, 16.3, 'BYE', 9.7, 10.2, 11.6, 9.4, 17.3, 16.7, 11.0, 11.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2577667.png",
    "name": "Damiere Byrd",
    "depthchart": "Backup: WR-2",
    "team": "New England Patriots",
    "projected": 5.7,
    "opponent": "Los Angeles Chargers",
    "home_away": "at ",
    "opp_rank_Neu": 10,
    "team_rank_Neg": 29,
    "avg_fp2": 6.8,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 26.8,
    "fanduelSalary": "$3900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#C60C30",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png",
    "headlineNews": "Damiere Byrd caught 3-of-7 targets for 33 yards in the Patriots' Week 12 win over the Cardinals.\u00a0\n",
    "report": "",
    "analysis": "Byrd predictably came back down to earth after last week's 6/132 outburst vs. the Texans' awful defense. Byrd has shown some WR4 signs of life over the past month, but his floor remains too low to be trusted as a weekly option in fantasy. The Chargers are a decent matchup for Week 13.\u00a0\n",
    "timestamp": "2020-11-30 12:48 AM",
    "source": null,
    "week01": 0.0,
    "week02": 10.2,
    "week03": 4.2,
    "week04": 10.5,
    "week05": "BYE",
    "week06": 5.3,
    "week07": 2.1,
    "week08": 5.4,
    "week09": 9.0,
    "week10": 0.0,
    "week11": 23.3,
    "week12": 4.8,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 10.2, 4.2, 10.5, 'BYE', 5.3, 2.1, 5.4, 9.0, 0.0, 23.3, 4.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.9, 3.5, 2.0, 1.8, 'BYE', 4.9, 7.7, 4.6, 9.6, 3.8, 1.1, 4.8, 5.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.0, 0.0, 'BYE', 0.0, 4.1, 2.0, 0.0, 0.0, 0.2, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.8, 6.7, 8.6, 6.7, 'BYE', 6.7, 9.5, 9.9, 7.7, 6.9, 8.1, 8.6, 10.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4212909.png",
    "name": "David Moore",
    "depthchart": "Reserve: WR-3",
    "team": "Seattle Seahawks",
    "projected": 5.6,
    "opponent": "New York Giants",
    "home_away": "",
    "opp_rank_Neu": 19,
    "team_rank_Pos": 4,
    "avg_fp2": 7.39,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 29.11,
    "fanduelSalary": "$3400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#69BE28",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(105, 190, 40, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#69BE28",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
    "headlineNews": "David Moore caught all three of his targets for -6 yards and one touchdown in the Seahawks' Week 12 win over the Eagles.\n",
    "report": "",
    "analysis": "Hard to accomplish that stat line. Moore's first catch was blown up for a five-yard loss on a fourth-down call at the goal line. His second was a one-yard touchdown on an end-zone fade. And Moore's final grab went for a two-yard loss. He's a big-play third wideout who splits snaps with other ancillary parts in Seattle's offense.\n",
    "timestamp": "2020-12-01 06:36 AM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.5, 12.3, 0.7, 17.0, 0.0, 'BYE', 7.3, 12.1, 15.1, 2.8, 1.5, 7.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [0.6, 5.0, 7.1, 2.1, 4.8, 'BYE', 5.8, 3.9, 5.6, 3.4, 6.7, 6.9, 5.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.1, 0.1, 0.0, 'BYE', 0.0, 0.0, 1.8, 1.2, 0.8, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.7, 9.5, 9.8, 6.6, 9.3, 'BYE', 10.6, 11.6, 8.9, 14.0, 11.6, 11.6, 11.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3051738.png",
    "name": "Marquez Valdes-Scantling",
    "depthchart": "Reserve: WR-3",
    "team": "Green Bay Packers",
    "projected": 5.6,
    "opponent": "Philadelphia Eagles",
    "home_away": "",
    "opp_rank_Neu": 8,
    "team_rank_Pos": 5,
    "avg_fp2": 7.96,
    "opp_rank_allowed_fp2_Neu": 9,
    "opp_avg_allowed_fp2": 28.16,
    "fanduelSalary": "$4400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#d7a017",
    "tmColorDark": "#203731",
    "tmColorLite_rgba": "rgba(215, 160, 23, 0.2)",
    "tmColorDark_rgba": "rgba(32, 55, 49, 0.2)",
    "tmTextLite": "#d7a017",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png",
    "headlineNews": "Marquez Valdes-Scantling wasn't targeted in Week 12 against Chicago.\u00a0\n",
    "report": "",
    "analysis": "Valdes-Scantling was playing through a questionable tag but looked healthy. He\u00a0had a few nice blocks that led to touchdowns, but this was a step back after he had at least 50 yards or a touchdown in three straight games. Valdes-Scantling will try to rebound for a Week 13 matchup with the Eagles.\n",
    "timestamp": "2020-11-30 05:01 AM",
    "source": null,
    "week01": 17.6,
    "week02": 7.9,
    "week03": 1.0,
    "week04": 6.5,
    "week05": "BYE",
    "week06": 4.7,
    "week07": 0.9,
    "week08": 2.8,
    "week09": 18.3,
    "week10": 22.9,
    "week11": 5.0,
    "week12": 0.0,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [17.6, 7.9, 1.0, 6.5, 'BYE', 4.7, 0.9, 2.8, 18.3, 22.9, 5.0, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.1, 4.6, 4.0, 1.9, 'BYE', 4.1, 7.7, 6.6, 5.5, 7.9, 5.8, 6.5, 5.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.9, 0.0, 0.0, 'BYE', 0.0, 0.0, 0.0, 0.0, 1.4, 0.0, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.6, 14.5, 11.0, 11.2, 'BYE', 11.4, 11.4, 10.1, 9.7, 12.4, 12.2, 10.8, 11.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3040035.png",
    "name": "Greg Ward",
    "depthchart": "Reserve: WR-3",
    "team": "Philadelphia Eagles",
    "projected": 5.3,
    "opponent": "Green Bay Packers",
    "home_away": "at ",
    "opp_rank_Neu": 15,
    "team_rank_Neg": 27,
    "avg_fp2": 6.32,
    "opp_rank_allowed_fp2_Neu": 15,
    "opp_avg_allowed_fp2": 28.75,
    "fanduelSalary": "$3400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#386168",
    "tmColorDark": "#004C54",
    "tmColorLite_rgba": "rgba(56, 97, 104, 0.2)",
    "tmColorDark_rgba": "rgba(0, 76, 84, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    "headlineNews": "Greg Ward caught 5-of-6 targets for 39 yards in the Eagles' Week 10 loss to the Giants.\n",
    "report": "",
    "analysis": "Ward remains the slot man in three-receiver sets for the Eagles even with Alshon Jeffery being active. It's not a role destined for fantasy production with Carson Wentz struggling. Ward can be dropped in 12-team leagues even during bye weeks.\n",
    "timestamp": "2020-11-15 09:49 PM",
    "source": null,
    "week01": 5.6,
    "week02": 1.0,
    "week03": 16.6,
    "week04": 5.8,
    "week05": 10.6,
    "week06": 4.9,
    "week07": 12.7,
    "week08": 2.7,
    "week09": "BYE",
    "week10": 6.4,
    "week11": 2.4,
    "week12": 0.8,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.6, 1.0, 16.6, 5.8, 10.6, 4.9, 12.7, 2.7, 'BYE', 6.4, 2.4, 0.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [0.5, 4.9, 1.7, 3.8, 3.7, 3.8, 8.8, 6.4, 'BYE', 5.3, 3.6, 7.0, 5.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.7, 3.4, 9.7, 2.2, 0.7, 4.0, 3.4, 4.1, 'BYE', 1.4, 3.6, 0.0, 3.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.4, 12.5, 15.1, 7.1, 10.0, 13.6, 8.6, 12.9, 'BYE', 10.6, 12.9, 10.1, 12.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4258195.png",
    "name": "Donovan Peoples-Jones",
    "depthchart": "Reserve: WR-3",
    "team": "Cleveland Browns",
    "projected": 5.3,
    "opponent": "Tennessee Titans",
    "home_away": "at ",
    "opp_rank_Pos": 28,
    "team_rank_Neg": 30,
    "avg_fp2": 1.96,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 32.43,
    "fanduelSalary": "$3000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FF3C00",
    "tmColorDark": "#311D00",
    "tmColorLite_rgba": "rgba(255, 60, 0, 0.2)",
    "tmColorDark_rgba": "rgba(49, 29, 0, 0.2)",
    "tmTextLite": "#FF3C00",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
    "headlineNews": "KhaDarel Hodge (hamstring) is out for Week 13 against the Titans.\u00a0\n",
    "report": "",
    "analysis": "Hodge played 43 percent of the team's offensive snaps last week and drew three targets. His absence could be a slight snap and target bump for Rashard Higgins, though Higgins is only a WR4 play this week against Tennessee.\u00a0Donovan Peoples-Jones could see more playing time this week with Hodge sidelined.\u00a0\n",
    "timestamp": "2020-12-04 07:07 PM",
    "source": "Jake Trotter on Twitter ",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 0.0, 0.0, 0.0, 13.1, 0.0, 'BYE', 2.6, 0.0, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 2.2, 3.3, 1.1, 0.4, 1.3, 'BYE', -1.4, 0.4, -1.6, 5.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 0.0, 0.0, 0.0, 0.0, 0.0, 'BYE', 0.0, 0.0, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 7.5, 7.8, 6.4, 5.6, 8.8, 'BYE', 9.3, 9.0, 9.2, 8.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3134353.png",
    "name": "Tim Patrick",
    "depthchart": "Backup: WR-2",
    "team": "Denver Broncos",
    "projected": 5.1,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Neu": 16,
    "team_rank_Neg": 26,
    "avg_fp2": 7.86,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 26.37,
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
    "headlineNews": "Tim Patrick caught neither of his targets in the Broncos' Week 12 loss to the Saints.\u00a0\n",
    "report": "",
    "analysis": "Noah Fant was the only Denver play to catch a pass Sunday with practice squad WR Kendall Hinton playing quarterback. Patrick led the team's wideouts in targets against the Saints, for whatever that's worth. Since Week 5, Patrick is second on the team in target share (19 percent) and second in air yards. He'll be a volatile WR3/4 in Week 13 against KC.\u00a0\n",
    "timestamp": "2020-12-01 04:58 PM",
    "source": null,
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "BYE",
    "week06": "DNP",
    "week07": "DNP",
    "week08": "DNP",
    "week09": 10.9,
    "week10": 8.1,
    "week11": 14.4,
    "week12": 0.0,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 10.9, 8.1, 14.4, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 8.1, 5.7, 5.4, 6.9, 5.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 1.5, 0.9, 5.6, 1.2, 0.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(225, 119, 87, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 8.8, 8.0, 10.4, 7.4, 8.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/11674.png",
    "name": "Danny Amendola",
    "depthchart": "Backup: WR-2",
    "team": "Detroit Lions",
    "projected": 5.1,
    "opponent": "Chicago Bears",
    "home_away": "at ",
    "opp_rank_Neu": 11,
    "team_rank_Neu": 13,
    "avg_fp2": 6.14,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 23.47,
    "fanduelSalary": "$3700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0076B6",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(0, 118, 182, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#0076B6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/det.png",
    "headlineNews": "Danny Amendola (hip) practiced in full Thursday.\u00a0\n",
    "report": "",
    "analysis": "It's an upgrade over his limited practice on Wednesday. Out the past two games, it looks like Amendola -- who had a 14 percent target share between Week 7-10 -- will be available for Week 13 against the Bears. He's a viable option in larger PPR leagues with multiple flex spots.\u00a0\n",
    "timestamp": "2020-12-03 09:22 PM",
    "source": "Tim Twentyman on Twitter",
    "week01": 10.6,
    "week02": 3.1,
    "week03": 2.3,
    "week04": 6.7,
    "week05": "BYE",
    "week06": 4.1,
    "week07": 7.7,
    "week08": 6.9,
    "week09": 11.4,
    "week10": 2.5,
    "week11": "DNP",
    "week12": "DNP",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.6, 3.1, 2.3, 6.7, 'BYE', 4.1, 7.7, 6.9, 11.4, 2.5, 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.9, 5.5, 5.1, 3.8, 'BYE', 3.6, 8.2, 3.3, 9.0, 1.8, 'DNP', 'DNP', 5.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.6, 0.6, 0.4, 'BYE', 1.4, 1.7, 0.0, 0.8, 0.7, 'DNP', 'DNP', 2.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 118, 182, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.9, 11.7, 11.2, 10.9, 'BYE', 13.4, 13.0, 14.5, 12.6, 11.2, 'DNP', 'DNP', 12.9]
                    }
                    
                    ]
               }
            }];



$scope.positionTE = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15847.png",
    "name": "Travis Kelce",
    "depthchart": "Starter: TE-1",
    "team": "Kansas City Chiefs",
    "projected": 14.3,
    "opponent": "Denver Broncos",
    "home_away": "",
    "opp_rank_Neu": 7,
    "team_rank_Pos": 1,
    "avg_fp2": 15.91,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 7.55,
    "fanduelSalary": "$7300",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.0, 19.5, 11.7, 8.5, 20.8, 19.0, 4.6, 20.9, 20.9, 'BYE', 22.86, 12.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.9, 10.8, 16.9, 11.5, 16.5, 19.3, 14.7, 13.2, 16.5, 'BYE', 11.8, 12.5, 14.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.0, 5.3, 5.2, 6.5, 11.4, 4.8, 3.8, 5.3, 7.0, 'BYE', 5.2, 5.5, 6.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.2, 18.9, 19.7, 20.3, 25.4, 18.8, 19.4, 18.9, 20.5, 'BYE', 19.2, 19.3, 20.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2576925.png",
    "name": "Darren Waller",
    "depthchart": "Starter: TE-1",
    "team": "Las Vegas Raiders",
    "projected": 13.4,
    "opponent": "New York Jets",
    "home_away": "at ",
    "opp_rank_Pos": 30,
    "team_rank_Neu": 19,
    "avg_fp2": 10.37,
    "opp_rank_allowed_fp2_Pos": 30,
    "opp_avg_allowed_fp2": 12.35,
    "fanduelSalary": "$6100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A5ACAF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lv.png",
    "headlineNews": "Darren Waller leads all NFL tight ends this season with 19 red zone targets.\u00a0\n",
    "report": "",
    "analysis": "The size-speed specimen only had one red zone look in Week 12's 23-yard dud against the Falcons -- one of the league's best tight end matchups. Fantasy managers can write off Week 12 to a total collapse of the Raiders offense. Derek Carr has completed 14 of the 19 passes he's thrown to Waller in the red zone for five touchdowns. Meanwhile, only seven tight ends have run more routes than Waller in 2020. Waller's touchdown potential will be as high as any tight end in the league in Week 13 against the Jets.\u00a0\n",
    "timestamp": "2020-11-30 05:38 PM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.5, 22.3, 1.9, 11.3, 13.3, 'BYE', 14.0, 5.3, 10.7, 5.2, 18.3, 4.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.3, 10.4, 10.8, 10.6, 14.0, 'BYE', 15.0, 15.5, 11.4, 9.7, 10.9, 8.6, 13.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.0, 5.4, 18.7, 2.8, 0.7, 'BYE', 0.0, 2.4, 1.2, 9.6, 5.8, 12.1, 5.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.8, 12.2, 24.1, 15.6, 14.0, 'BYE', 15.7, 14.9, 11.1, 17.3, 27.1, 19.8, 13.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3051876.png",
    "name": "Evan Engram",
    "depthchart": "Starter: TE-1",
    "team": "New York Giants",
    "projected": 13.1,
    "opponent": "Seattle Seahawks",
    "home_away": "at ",
    "opp_rank_Pos": 32,
    "team_rank_Neg": 28,
    "avg_fp2": 7.43,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 10.51,
    "fanduelSalary": "$4900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#0B2265",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(11, 34, 101, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png",
    "headlineNews": "Evan Engram had 107\u00a0air yards\u00a0against the Bengals, the most among tight ends in Week 12.\u00a0\n",
    "report": "",
    "analysis": "We've seen a marked change in how the Giants have used their athletic, play making tight end. Daniel Jones hit Engram on a deep ball early in Week 12's game against the Bengals -- Engram ended the game with six catches for 129 yards. Engram on the season has averaged a meager 6.4\u00a0air yards per target. That number has jumped to 10.4 air yards per target over New York's past two games. Whether that continues with Colt McCoy under center is anyone's guess.\u00a0\n",
    "timestamp": "2020-11-30 02:58 PM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.9, 9.5, 3.7, 6.5, 9.0, 4.0, 7.9, 9.5, 13.3, 2.5, 'BYE', 13.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.5, 12.7, 8.3, 15.6, 13.6, 15.7, 12.6, 13.2, 7.6, 16.1, 'BYE', 11.3, 13.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.5, 2.8, 3.8, 3.4, 3.2, 1.9, 3.2, 3.9, 2.8, 4.5, 'BYE', 1.7, 3.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.1, 15.3, 14.7, 14.4, 13.1, 12.4, 13.3, 14.3, 15.4, 13.6, 'BYE', 9.4, 14.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3043275.png",
    "name": "Austin Hooper",
    "depthchart": "Starter: TE-1",
    "team": "Cleveland Browns",
    "projected": 12.2,
    "opponent": "Tennessee Titans",
    "home_away": "at ",
    "opp_rank_Pos": 28,
    "team_rank_Neg": 30,
    "avg_fp2": 5.8,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 11.85,
    "fanduelSalary": "$3800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FF3C00",
    "tmColorDark": "#311D00",
    "tmColorLite_rgba": "rgba(255, 60, 0, 0.2)",
    "tmColorDark_rgba": "rgba(49, 29, 0, 0.2)",
    "tmTextLite": "#FF3C00",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
    "headlineNews": "Austin Hooper caught both of his targets for 13 yards and a touchdown in the Browns Week 12 win over the Jaguars.\n",
    "report": "",
    "analysis": "No one outside of Jarvis Landry (11 targets) saw more than three targets for the Browns this week so Hooper's quiet day isn't quite as bad as it looks on paper. The biggest concern for him going forward will be Harrison Bryant's involvement in the passing game. Bryant saw as many targets as Hooper versus the Jaguars. Hooper is a low-end TE1 in a solid matchup versus the Titans next week.\n",
    "timestamp": "2020-11-29 10:47 PM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.5, 3.2, 4.0, 11.9, 8.2, 7.7, 'DNP', 'DNP', 'BYE', 1.6, 4.8, 8.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.9, 8.9, 6.4, 5.3, 3.3, 3.6, 'DNP', 'DNP', 'BYE', 4.9, 6.2, 12.8, 12.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.9, 1.4, 1.1, 3.8, 0.9, 1.5, 'DNP', 'DNP', 'BYE', 4.5, 1.1, 1.9, 0.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.1, 11.6, 11.9, 13.6, 11.5, 11.3, 'DNP', 'DNP', 'BYE', 11.4, 11.9, 13.0, 13.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3046439.png",
    "name": "Hunter Henry",
    "depthchart": "Starter: TE-1",
    "team": "Los Angeles Chargers",
    "projected": 11.6,
    "opponent": "New England Patriots",
    "home_away": "",
    "opp_rank_Neu": 14,
    "team_rank_Pos": 2,
    "avg_fp2": 8.38,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 7.23,
    "fanduelSalary": "$4800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0080C6",
    "tmColorDark": "#002A5E",
    "tmColorLite_rgba": "rgba(0, 128, 198, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 94, 0.2)",
    "tmTextLite": "#0080C6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lac.png",
    "headlineNews": "Hunter Henry caught 7-of-10 targets for 67 yards in Los Angeles' Week 12 loss to the Bills.\n",
    "report": "",
    "analysis": "Henry has now seen at least seven targets and/or scored a touchdown in four consecutive games. His 10 targets not only tied Keenan Allen for second on the team but were encouraging considering Austin Ekeler returned for a team-high 31% target share. Henry will remain a weekly top-five option at his position moving forward if only for how shallow the tight end space is\u00a0weekly.\n",
    "timestamp": "2020-11-30 03:39 PM",
    "source": null,
    "week01": 9.8,
    "week02": 11.3,
    "week03": 7.5,
    "week04": 4.9,
    "week05": 10.3,
    "week06": "BYE",
    "week07": 3.8,
    "week08": 5.3,
    "week09": 5.3,
    "week10": 11.0,
    "week11": 12.8,
    "week12": 10.2,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.8, 11.3, 7.5, 4.9, 10.3, 'BYE', 3.8, 5.3, 5.3, 11.0, 12.8, 10.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.6, 15.6, 8.7, 10.1, 14.0, 'BYE', 19.6, 11.8, 11.1, 13.2, 10.6, 12.3, 11.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.8, 5.7, 3.3, 3.7, 3.9, 'BYE', 4.8, 6.7, 3.7, 4.2, 3.2, 3.8, 4.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 128, 198, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.7, 13.6, 14.6, 12.2, 13.4, 'BYE', 15.2, 16.9, 12.0, 14.8, 13.8, 12.6, 12.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4036133.png",
    "name": "T.J. Hockenson",
    "depthchart": "Starter: TE-1",
    "team": "Detroit Lions",
    "projected": 11.4,
    "opponent": "Chicago Bears",
    "home_away": "at ",
    "opp_rank_Neu": 11,
    "team_rank_Neu": 13,
    "avg_fp2": 9.77,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 12.22,
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
    "headlineNews": "T.J. Hockenson caught 5-of-8 targets for 89 yards in Detroit's Week 12 loss to the Texans.\n",
    "report": "",
    "analysis": "Hockenson was (finally) a concerted part of Detroit's gameplan, recording a 10-yard pickup on the team's opening drive and hauling in a 51-yard bomb from Matthew Stafford on a reverse flea-flicker play. His 89 receiving yards were also a new season-high. Hockenson has now seen 15 targets the past two games without either Kenny Golladay (hip) or D'Andre Swift (concussion) available, keeping Hock\u00a0locked in as a top-five tight end if only for his consistent onfield usage. Fantasy players have no choice but to start him against the Bears in Week 13 if both Golladay and Swift remain out.\n",
    "timestamp": "2020-11-26 10:13 PM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.1, 8.2, 7.3, 9.9, 'BYE', 8.7, 14.4, 10.0, 12.4, 2.3, 8.8, 11.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.8, 6.6, 7.9, 11.9, 'BYE', 10.2, 10.7, 7.3, 8.6, 12.0, 9.5, 13.3, 11.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.6, 0.0, 1.8, 0.0, 'BYE', 6.9, 5.8, 0.0, 5.5, 3.4, 1.4, 3.6, 4.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 118, 182, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [5.8, 11.6, 10.1, 7.6, 'BYE', 16.5, 14.5, 10.4, 13.5, 11.6, 10.4, 12.1, 13.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15835.png",
    "name": "Zach Ertz",
    "depthchart": "Starter: TE-1",
    "team": "Philadelphia Eagles",
    "projected": 9.6,
    "opponent": "Green Bay Packers",
    "home_away": "at ",
    "opp_rank_Neu": 15,
    "team_rank_Neg": 27,
    "avg_fp2": 6.3,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 7.34,
    "fanduelSalary": "$3900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#386168",
    "tmColorDark": "#004C54",
    "tmColorLite_rgba": "rgba(56, 97, 104, 0.2)",
    "tmColorDark_rgba": "rgba(0, 76, 84, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    "headlineNews": "Eagles coach Doug Pederson said they \"have to be smart\" using Zach Ertz coming off an ankle injury.\n",
    "report": "",
    "analysis": "The Eagles activated Ertz from injured reserve but is unlikely to re-enter the TE1 conversation. He's not a lock to play his usual workload with his injury\u00a0especially with Dallas Goedert playing way better. Ertz is nothing more than a no-floor TE2 in Week 13 and possibly beyond.\n",
    "timestamp": "2020-12-05 03:35 PM",
    "source": "Les Bowen on Twitter",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.3, 6.7, 10.5, 4.9, 1.1, 5.3, 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.7, 10.4, 11.4, 13.5, 10.7, 7.5, 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 9.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.8, 5.1, 3.2, 4.7, 3.8, 3.8, 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 1.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.3, 16.7, 13.8, 17.3, 17.6, 16.5, 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 18.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13232.png",
    "name": "Jimmy Graham",
    "depthchart": "Starter: TE-1",
    "team": "Chicago Bears",
    "projected": 9.4,
    "opponent": "Detroit Lions",
    "home_away": "",
    "opp_rank_Pos": 26,
    "team_rank_Neu": 23,
    "avg_fp2": 7.49,
    "opp_rank_allowed_fp2_Neu": 9,
    "opp_avg_allowed_fp2": 7.95,
    "fanduelSalary": "$3600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#c36835",
    "tmColorDark": "#0B162A",
    "tmColorLite_rgba": "rgba(195, 104, 53, 0.2)",
    "tmColorDark_rgba": "rgba(11, 22, 42, 0.2)",
    "tmTextLite": "#c36835",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png",
    "headlineNews": "Cole Kmet caught 1-of-3 targets for eight yards in the Bears' Week 12 loss to the Packers.\u00a0\n",
    "report": "",
    "analysis": "There seems to have been a changing of the proverbial guard at tight end for Chicago, as Kmet played 51 snaps to Jimmy Graham's 23 snaps. Importantly, Kmet ran 32 pass routes while Graham ran just 15 against Green Bay. Whether the Bears believe it's time to move on from Graham as the team's primary tight end or simply evaluate the rookie in the season's final month, it appears Kmet is going to be the preferred fantasy option going forward, barring injury. Neither Kmet nor Graham is a viable option in standard sized fantasy leagues.\u00a0\n",
    "timestamp": "2020-11-30 03:24 PM",
    "source": "Mike Clay on Twitter ",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.0, 2.3, 21.0, 5.3, 10.8, 5.9, 5.6, 2.3, 14.5, 0.0, 'BYE', 4.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.2, 13.4, 16.8, 7.7, 9.1, 5.5, 9.8, 10.7, 15.5, 15.3, 'BYE', 6.9, 9.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.2, 3.5, 1.3, 2.6, 1.8, 2.4, 1.3, 3.4, 3.1, 3.6, 'BYE', 2.6, 1.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  "rgba(195, 104, 53, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.2, 17.5, 14.7, 15.0, 13.8, 14.6, 13.5, 16.8, 17.2, 14.4, 'BYE', 14.5, 12.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116164.png",
    "name": "Mike Gesicki",
    "depthchart": "Starter: TE-1",
    "team": "Miami Dolphins",
    "projected": 9.0,
    "opponent": "Cincinnati Bengals",
    "home_away": "",
    "opp_rank_Neu": 22,
    "team_rank_Neg": 25,
    "avg_fp2": 7.08,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 12.14,
    "fanduelSalary": "$4200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#008E97",
    "tmColorDark": "#005778",
    "tmColorLite_rgba": "rgba(0, 142, 151, 0.2)",
    "tmColorDark_rgba": "rgba(0, 87, 120, 0.2)",
    "tmTextLite": "#f5821f",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/mia.png",
    "headlineNews": "Mike Gesicki caught 2-of-5 targets for 35 yards and a touchdown in Week 12 against the Jets.\n",
    "report": "",
    "analysis": "Gesicki scored his first touchdown since Week 3 on a throw from Ryan Fitzpatrick in the back of the end-zone. He had another one vultured by backup TE Adam Shaheen in the fourth quarter. Gesicki and the entire Miami offense played better with Fitzpatrick starting.\u00a0\u00a0Gesicki has\u00a0a favorable matchup with the Bengals secondary in Week 13.\n",
    "timestamp": "2020-11-29 10:23 PM",
    "source": null,
    "week01": 4.5,
    "week02": 23.0,
    "week03": 8.0,
    "week04": 2.0,
    "week05": 11.6,
    "week06": 0.0,
    "week07": "BYE",
    "week08": 1.3,
    "week09": 5.7,
    "week10": 5.0,
    "week11": 6.3,
    "week12": 10.5,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.5, 23.0, 8.0, 2.0, 11.6, 0.0, 'BYE', 1.3, 5.7, 5.0, 6.3, 10.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.1, 7.0, 11.1, 11.1, 5.1, 7.4, 'BYE', 6.5, 8.1, 3.5, 4.4, 8.1, 9.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 3.7, 1.1, 0.0, 0.0, 0.6, 'BYE', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 142, 151, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.1, 13.3, 12.4, 9.5, 12.3, 7.9, 'BYE', 9.6, 12.1, 9.0, 8.5, 11.0, 12.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15788.png",
    "name": "Tyler Eifert",
    "depthchart": "Starter: TE-1",
    "team": "Jacksonville Jaguars",
    "projected": 8.5,
    "opponent": "Minnesota Vikings",
    "home_away": "at ",
    "opp_rank_Pos": 25,
    "team_rank_Neu": 21,
    "avg_fp2": 4.34,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 9.61,
    "fanduelSalary": "$3000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#006778",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 103, 120, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#006778",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/jax.png",
    "headlineNews": "Tyler Eifert caught 3-of-4 targets for 16 yards and a touchdown in the Jaguars' Week 12 loss to the Browns.\n",
    "report": "",
    "analysis": "Eifert still ceded four targets to backup tight end James O'Shaughnessy and his yardage total of 16 is less than inspiring. He has seen at least four targets in six games this year but hasn't topped 50 yards once. Eifert is a touchdown-or-bust tight end with Mike Glennon as his quarterback. There are worse streaming options at the position but there are also undoubtedly better options.\u00a0\n",
    "timestamp": "2020-11-30 05:46 AM",
    "source": null,
    "week01": 1.3,
    "week02": 11.1,
    "week03": 2.1,
    "week04": 3.2,
    "week05": 3.1,
    "week06": 0.0,
    "week07": "DNP",
    "week08": "BYE",
    "week09": 6.8,
    "week10": 2.5,
    "week11": 4.2,
    "week12": 9.1,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.3, 11.1, 2.1, 3.2, 3.1, 0.0, 'DNP', 'BYE', 6.8, 2.5, 4.2, 9.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.3, 8.9, 10.5, 6.5, 11.4, 5.5, 'DNP', 'BYE', 7.2, 11.8, 11.6, 12.8, 8.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.8, 0.5, 3.1, 0.6, 1.6, 1.9, 'DNP', 'BYE', 0.0, 1.2, 1.1, 1.2, 1.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 103, 120, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.9, 12.7, 16.5, 13.9, 11.3, 13.0, 'DNP', 'BYE', 11.3, 16.8, 13.3, 13.8, 14.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3123050.png",
    "name": "Chris Herndon",
    "depthchart": "Starter: TE-1",
    "team": "New York Jets",
    "projected": 8.4,
    "opponent": "Las Vegas Raiders",
    "home_away": "",
    "opp_rank_Pos": 27,
    "team_rank_Neg": 32,
    "avg_fp2": 2.12,
    "opp_rank_allowed_fp2_Neu": 14,
    "opp_avg_allowed_fp2": 9.77,
    "fanduelSalary": "$2500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#125740",
    "tmColorDark": "#003f2d",
    "tmColorLite_rgba": "rgba(18, 87, 64, 0.2)",
    "tmColorDark_rgba": "rgba(0, 63, 45, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png",
    "headlineNews": "Chris Herndon wasn't targeted in the Jets' Week 6 loss to the Dolphins.\n",
    "report": "",
    "analysis": "Ryan Griffin caught 2-of-3 targets for 17 yards. Herndon has been a colossal 2020 bust after again being hyped all summer. He's not on the fantasy radar at the moment.\n",
    "timestamp": "2020-10-19 12:33 AM",
    "source": null,
    "week01": 4.7,
    "week02": 1.0,
    "week03": 3.6,
    "week04": 1.6,
    "week05": 3.4,
    "week06": 0.0,
    "week07": 0.0,
    "week08": -1.2,
    "week09": 0.0,
    "week10": "BYE",
    "week11": 10.2,
    "week12": 0.0,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.7, 1.0, 3.6, 1.6, 3.4, 0.0, 0.0, -1.2, 0.0, 'BYE', 10.2, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.8, 5.7, 4.4, 11.2, 5.5, 5.6, 6.7, 6.0, 4.4, 'BYE', 6.9, 4.7, 8.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.6, 1.3, 3.3, 0.4, 0.6, 12.1, 0.3, 0.3, 0.0, 'BYE', 0.0, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  "rgba(18, 87, 64, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.7, 9.7, 12.5, 6.2, 5.0, 16.9, 8.1, 8.4, 10.5, 'BYE', 9.8, 8.6, 7.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16974.png",
    "name": "Trey Burton",
    "depthchart": "Starter: TE-1",
    "team": "Indianapolis Colts",
    "projected": 8.2,
    "opponent": "Houston Texans",
    "home_away": "at ",
    "opp_rank_Neu": 23,
    "team_rank_Neu": 10,
    "avg_fp2": 7.56,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 8.53,
    "fanduelSalary": "$3500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#014683",
    "tmColorDark": "#002C5F",
    "tmColorLite_rgba": "rgba(1, 70, 131, 0.2)",
    "tmColorDark_rgba": "rgba(0, 44, 95, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png",
    "headlineNews": "Trey Burton caught 3-of-6 targets for 42 yards and a touchdown in the Colts' Week 12 loss to the Titans.\u00a0\n",
    "report": "",
    "analysis": "Burton continues to be a red zone favorite of Philip Rivers, catching a first half touchdown in the back of the end zone despite tight coverage. Leading the team's tight ends in targets for each of the past two weeks, Burton is nominally the preferred fantasy option among Indy tight ends going forward. His route running numbers have fluctuated throughout the season as one of fantasy's most perplexing players. Burton should be a decent streaming option next week against Houston.\u00a0\n",
    "timestamp": "2020-11-29 10:44 PM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 5.8, 19.9, 'BYE', 8.6, 1.1, 3.9, 9.5, 11.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 4.0, 5.5, 'BYE', 10.8, 5.3, 6.0, 5.3, 3.2, 8.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 0.9, 0.0, 'BYE', 0.0, 0.0, 0.0, 0.4, 0.7, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 11.4, 7.4, 'BYE', 9.8, 11.2, 10.5, 11.4, 11.1, 9.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15860.png",
    "name": "Jordan Reed",
    "depthchart": "Starter: TE-1",
    "team": "San Francisco 49ers",
    "projected": 8.0,
    "opponent": "Buffalo Bills",
    "home_away": "",
    "opp_rank_Neu": 18,
    "team_rank_Neu": 12,
    "avg_fp2": 6.38,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 12.05,
    "fanduelSalary": "$3200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "Jordan Reed ran 25 pass routes while Ross Dwelley ran 10 routes in Week 12 against the Rams.\u00a0\n",
    "report": "",
    "analysis": "Reed drew six targets, catching two for 18 yards. Dwelley caught one of two targets for three yards. Nick Mullens missed a wide-open Reed in the first half on what would have been a long gain down the middle of the field -- an errant throw that had Reed fuming on the sideline afterward. Reed is far and away the preferred fantasy option among Niners tight ends until George Kittle returns to the lineup.\u00a0\u00a0\n",
    "timestamp": "2020-11-30 05:02 PM",
    "source": null,
    "week01": 2.2,
    "week02": 20.5,
    "week03": 3.3,
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": "DNP",
    "week08": "DNP",
    "week09": 0.8,
    "week10": 8.7,
    "week11": "BYE",
    "week12": 2.8,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.2, 20.5, 3.3, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 0.8, 8.7, 'BYE', 2.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.0, 2.5, 7.9, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 12.9, 2.8, 'BYE', 12.3, 8.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.0, 2.4, 2.7, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 2.2, 5.1, 'BYE', 3.3, 2.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.3, 18.0, 16.5, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 17.0, 17.6, 'BYE', 16.8, 17.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2975674.png",
    "name": "Robert Tonyan",
    "depthchart": "Starter: TE-1",
    "team": "Green Bay Packers",
    "projected": 7.9,
    "opponent": "Philadelphia Eagles",
    "home_away": "",
    "opp_rank_Neu": 8,
    "team_rank_Pos": 5,
    "avg_fp2": 9.66,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 10.75,
    "fanduelSalary": "$3700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#d7a017",
    "tmColorDark": "#203731",
    "tmColorLite_rgba": "rgba(215, 160, 23, 0.2)",
    "tmColorDark_rgba": "rgba(32, 55, 49, 0.2)",
    "tmTextLite": "#d7a017",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png",
    "headlineNews": "Robert Tonyan caught all five of his targets for 67 yards and a touchdown in Week 12 against Chicago.\n",
    "report": "",
    "analysis": "The Chicago secondary let Tonyan get behind them for a 39-yard touchdown to give the Packers a three-score lead in the third quarter. With Aaron Rodgers spreading it around to six different receivers, he ended up leading the Packers in yards. Tonyan\u2019s five targets were behind only Davante Adams (9) and Allen Lazard (6). He\u2019s a TD-dependent TE1 for Week 13 against the Eagles.\n",
    "timestamp": "2020-12-01 10:12 PM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 9.5, 13.5, 30.8, 'BYE', 4.0, 4.2, 10.4, 1.0, 4.8, 12.9, 15.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.8, 5.3, 3.9, 11.7, 'BYE', 7.4, 9.0, 11.2, 9.6, 10.0, 5.9, 9.3, 7.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.7, 2.6, 'BYE', 4.7, 4.7, 2.2, 1.1, 0.1, 0.0, 2.9, 0.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.4, 9.5, 10.4, 11.7, 'BYE', 11.7, 11.0, 11.6, 8.6, 22.0, 18.2, 13.1, 16.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4036131.png",
    "name": "Noah Fant",
    "depthchart": "Starter: TE-1",
    "team": "Denver Broncos",
    "projected": 7.3,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Neu": 16,
    "team_rank_Neg": 26,
    "avg_fp2": 7.75,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 10.55,
    "fanduelSalary": "$4000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e17757",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(225, 119, 87, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#e17757",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/den.png",
    "headlineNews": "Noah Fant caught his lone target for 13 yards in the Broncos' Week 12 loss to the Saints.\u00a0\n",
    "report": "",
    "analysis": "It was Kendall Hinton's only completion of the game. We can't draw much from how Denver pass catcher fared in this one. Fant has seen a solid target share in Drew Lock starts this season. That should continue next week against the Chiefs, assuming Lock is activated off the reserve/COVID-19 list.\u00a0\n",
    "timestamp": "2020-11-30 01:24 AM",
    "source": null,
    "week01": 16.6,
    "week02": 15.7,
    "week03": 7.1,
    "week04": 6.0,
    "week05": "BYE",
    "week06": "DNP",
    "week07": 5.3,
    "week08": 8.2,
    "week09": 6.0,
    "week10": 3.3,
    "week11": 7.5,
    "week12": 1.8,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [16.6, 15.7, 7.1, 6.0, 'BYE', 'DNP', 5.3, 8.2, 6.0, 3.3, 7.5, 1.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.8, 7.2, 13.3, 8.7, 'BYE', 'DNP', 5.6, 11.7, 10.9, 7.2, 11.7, 7.3, 7.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.9, 3.7, 1.6, 'BYE', 'DNP', 1.6, 2.0, 0.0, 1.1, 1.3, 2.6, 0.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(225, 119, 87, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.8, 12.0, 13.8, 14.9, 'BYE', 'DNP', 13.1, 12.0, 13.5, 12.6, 12.3, 10.5, 8.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16732.png",
    "name": "Eric Ebron",
    "depthchart": "Starter: TE-1",
    "team": "Pittsburgh Steelers",
    "projected": 6.8,
    "opponent": "Washington Football Team",
    "home_away": "",
    "opp_rank_Neg": 2,
    "team_rank_Neu": 16,
    "avg_fp2": 7.66,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 10.54,
    "fanduelSalary": "$4400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/pit.png",
    "headlineNews": "Eric Ebron caught 7-of-11\u00a0targets for 54 yards in the Steelers' Week 12\u00a0win over the Ravens.\n",
    "report": "",
    "analysis": "Ebron was a go-to player for Roethlisberger in the redzone but failed to turn any of his condensed field receptions into scores. His production line certainly was not aided by Lions-level Ebron making a return in the form of drops, with the tight end accounting for at least two on the day. Still, this volume is difficult to come by at the tight end position in 2020 and could make Ebron a top 12 option against Washington in Week 13.\n",
    "timestamp": "2020-12-03 12:12 AM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.3, 5.8, 13.7, 'BYE', 4.8, 1.9, 8.0, 12.8, 9.7, 4.8, 11.6, 8.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.8, 8.9, 7.2, 'BYE', 13.4, 7.7, 9.6, 7.9, 3.9, 13.0, 7.4, 9.5, 6.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 2.4, 3.3, 'BYE', 2.1, 3.8, 2.7, 2.2, 2.5, 2.5, 2.8, 2.5, 2.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.5, 13.7, 13.9, 'BYE', 12.7, 13.8, 12.3, 12.8, 12.5, 13.0, 13.3, 13.1, 12.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3924365.png",
    "name": "Hayden Hurst",
    "depthchart": "Starter: TE-1",
    "team": "Atlanta Falcons",
    "projected": 6.7,
    "opponent": "New Orleans Saints",
    "home_away": "",
    "opp_rank_Neg": 5,
    "team_rank_Pos": 5,
    "avg_fp2": 7.67,
    "opp_rank_allowed_fp2_Neu": 15,
    "opp_avg_allowed_fp2": 10.14,
    "fanduelSalary": "$4000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/atl.png",
    "headlineNews": "Hayden Hurst caught 4-of-8 targets for 48 yards in the Falcons' Week 12 win over the Raiders.\n",
    "report": "",
    "analysis": "The eight targets were second on the team and matched Hurst's season high. Julio Jones (hamstring) missed this one, leaving Calvin Ridley and Hurst to pace the team in looks from Matt Ryan on a day he threw for just 185 yards. Hurst continues to run a whole lot of pass routes, but his production hasn't really been there. He's still a back-end TE1 for Week 13 against the Saints.\n",
    "timestamp": "2020-11-29 10:52 PM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.3, 15.7, 6.6, 7.1, 1.8, 13.7, 9.8, 7.9, 9.7, 'BYE', 0.0, 6.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.7, 6.3, 8.3, 9.5, 5.7, 5.1, 10.1, 14.9, 7.5, 'BYE', 6.8, 11.9, 6.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 8.8, 1.6, 0.2, 1.2, 0.4, 0.0, 1.5, 'BYE', 4.4, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.1, 7.1, 15.5, 9.5, 9.1, 7.0, 8.0, 9.7, 8.0, 'BYE', 10.6, 9.5, 9.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3125404.png",
    "name": "Jacob Hollister",
    "depthchart": "Starter: TE-1",
    "team": "Seattle Seahawks",
    "projected": 6.6,
    "opponent": "New York Giants",
    "home_away": "",
    "opp_rank_Neu": 19,
    "team_rank_Pos": 4,
    "avg_fp2": 2.63,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 8.35,
    "fanduelSalary": "$3000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#69BE28",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(105, 190, 40, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#69BE28",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
    "headlineNews": "Jacob Hollister led the Seahawks' tight ends in routes in the team's Week 12 win against the Eagles.\u00a0\n",
    "report": "",
    "analysis": "There was some question as to whether Hollister or Will Dissly would emerge as the team's primary pass catching tight end after Greg Olsen's potentially season ending foot injury. The answer was clear -- for at least one week -- against the Eagles, as Hollister ran 21 pass routes and Dissly ran 16.\u00a0Hollister caught 2-of-5 targets for 11 yards on a slow night for the Seahawks' passing attack. Dissly wasn't targeted. He'll once again be a fringe streaming play in Week 13 against the Giants.\u00a0\n",
    "timestamp": "2020-12-01 06:47 PM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 0.0, 'DNP', 0.0, 0.0, 'BYE', 3.7, 1.1, 8.5, 1.1, 2.4, 2.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 0.6, 'DNP', 1.6, 2.0, 'BYE', -0.2, 0.4, 2.0, 2.1, 1.4, 3.1, 6.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 1.8, 'DNP', 0.4, 0.0, 'BYE', 0.0, 0.0, 0.5, 0.0, 0.0, 0.5, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 8.0, 'DNP', 4.9, 9.1, 'BYE', 8.5, 7.1, 9.2, 6.7, 5.0, 7.2, 4.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4044452.png",
    "name": "Kaden Smith",
    "depthchart": "Backup: TE-2",
    "team": "New York Giants",
    "projected": 6.6,
    "opponent": "Seattle Seahawks",
    "home_away": "at ",
    "opp_rank_Pos": 32,
    "team_rank_Neg": 28,
    "avg_fp2": 1.57,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 10.51,
    "fanduelSalary": "$2500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#0B2265",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(11, 34, 101, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png",
    "headlineNews": "Kaden Smith caught 8-of-11 targets for 98 yards in the Giants' Week 17 loss to the Eagles.\n",
    "report": "",
    "analysis": "Claimed off waivers from the 49ers in September, Smith became an integral part of the offense the final month and a half with the injuries to Evan Engram and Rhett Ellison.  From Week 12 on, Smith posted a 30-267-3 line on 41 targets, averaging 6.8 looks per game in that span.  Smith was a sixth-round pick of the Niners back in April and stands 6'5/255.  He ran insanely slow with a 4.92 forty in the pre-draft process, but perhaps the Giants found a long-term No. 2 to Engram.\n",
    "timestamp": "2019-12-30 06:38 AM",
    "source": null,
    "week01": 2.7,
    "week02": 0.9,
    "week03": 1.8,
    "week04": 1.5,
    "week05": 1.2,
    "week06": 3.0,
    "week07": 0.0,
    "week08": 1.1,
    "week09": 1.3,
    "week10": 2.2,
    "week11": "BYE",
    "week12": "DNP",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.7, 0.9, 1.8, 1.5, 1.2, 3.0, 0.0, 1.1, 1.3, 2.2, 'BYE', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.4, 4.2, 3.5, 7.6, 5.3, 7.0, 6.0, 2.9, 0.9, 5.8, 'BYE', 'DNP', 6.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.0, 0.3, 1.6, 1.4, 1.5, 1.3, 0.0, 0.0, 0.0, 0.0, 'BYE', 'DNP', 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.6, 13.8, 11.2, 8.2, 11.0, 10.5, 10.7, 10.8, 2.6, 8.5, 'BYE', 'DNP', 5.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16813.png",
    "name": "Logan Thomas",
    "depthchart": "Starter: TE-1",
    "team": "Washington Football Team",
    "projected": 6.2,
    "opponent": "Pittsburgh Steelers",
    "home_away": "at ",
    "opp_rank_Neg": 1,
    "team_rank_Neg": 24,
    "avg_fp2": 6.86,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 5.52,
    "fanduelSalary": "$3400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#773141",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(119, 49, 65, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png",
    "headlineNews": "Logan Thomas caught 4-of-4 targets for 20 yards and one touchdown in the Football Team's Week 12 win over the Cowboys.\n",
    "report": "",
    "analysis": "Thomas found space in the end zone for his fourth touchdown of the year. He's maxed out as a high-end TE2 despite being top-five in routes run just about every week. The Washington offense runs through Terry McLaurin and their running backs right now. Thomas needs a touchdown to pay off as a streamer. That'll be a tough ask against the Steelers in Week 13.\n",
    "timestamp": "2020-11-27 01:39 AM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.7, 4.6, 5.1, 1.3, 0.9, 11.7, 14.0, 'BYE', 4.3, 8.6, 1.8, 11.42]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.5, 9.6, 12.7, 4.8, 2.4, 6.2, 7.0, 'BYE', 7.2, 9.3, 9.5, 8.4, 6.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.6, 2.4, 0.1, 0.0, 0.1, 0.1, 'BYE', 0.0, 0.9, 0.3, 0.5, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [3.6, 7.8, 7.7, 6.4, 4.5, 5.9, 5.7, 'BYE', 6.7, 5.9, 7.8, 7.5, 6.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4527.png",
    "name": "Jason Witten",
    "depthchart": "Backup: TE-2",
    "team": "Las Vegas Raiders",
    "projected": 6.0,
    "opponent": "New York Jets",
    "home_away": "at ",
    "opp_rank_Pos": 30,
    "team_rank_Neu": 19,
    "avg_fp2": 2.32,
    "opp_rank_allowed_fp2_Pos": 30,
    "opp_avg_allowed_fp2": 12.35,
    "fanduelSalary": "$2500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A5ACAF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lv.png",
    "headlineNews": "Raiders signed TE Jason Witten to a one-year contract worth up to $4.75 million.\n",
    "report": "",
    "analysis": "Witten spent 16 seasons with the Cowboys from 2003-2019. The most-recent version of the veteran TE wasn't all that great, as Witten set career-low marks in both yards per reception (8.4) and yards per target (6.4) in 2019. The fit with the Raiders is even more puzzling considering the presence of both Darren Waller and Foster Moreau. It's unlikely that Witten sees enough targets and snaps to work as a standalone fantasy option in 2020, but his presence undoubtedly lowers the ceiling of both Waller and Moreau.\n",
    "timestamp": "2020-03-18 12:06 AM",
    "source": "Adam Schefter on Twitter",
    "week01": 0.7,
    "week02": 0.8,
    "week03": 0.0,
    "week04": 8.8,
    "week05": 1.6,
    "week06": "BYE",
    "week07": 1.1,
    "week08": 3.1,
    "week09": 0.5,
    "week10": "DNP",
    "week11": 6.6,
    "week12": 0.0,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.7, 0.8, 0.0, 8.8, 1.6, 'BYE', 1.1, 3.1, 0.5, 'DNP', 6.6, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.8, 3.7, 0.4, 1.4, 1.8, 'BYE', 3.1, 4.5, 4.1, 'DNP', 3.6, 1.2, 6.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.0, 1.9, 2.2, 2.4, 2.4, 'BYE', 2.5, 0.8, 1.3, 'DNP', 2.1, 2.5, 1.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.2, 14.0, 14.0, 14.8, 13.7, 'BYE', 14.3, 13.2, 14.1, 'DNP', 13.2, 14.5, 12.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3121023.png",
    "name": "Dallas Goedert",
    "depthchart": "Backup: TE-2",
    "team": "Philadelphia Eagles",
    "projected": 5.8,
    "opponent": "Green Bay Packers",
    "home_away": "at ",
    "opp_rank_Neu": 15,
    "team_rank_Neg": 27,
    "avg_fp2": 9.54,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 7.34,
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
    "headlineNews": "Eagles coach Doug Pederson said they \"have to be smart\" using Zach Ertz coming off an ankle injury.\n",
    "report": "",
    "analysis": "The Eagles activated Ertz from injured reserve but is unlikely to re-enter the TE1 conversation. He's not a lock to play his usual workload with his injury\u00a0especially with Dallas Goedert playing way better. Ertz is nothing more than a no-floor TE2 in Week 13 and possibly beyond.\n",
    "timestamp": "2020-12-05 03:35 PM",
    "source": "Les Bowen on Twitter",
    "week01": 20.1,
    "week02": 5.0,
    "week03": 1.2,
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": "DNP",
    "week08": 2.0,
    "week09": "BYE",
    "week10": 5.3,
    "week11": 16.2,
    "week12": 17.0,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [20.1, 5.0, 1.2, 'DNP', 'DNP', 'DNP', 'DNP', 2.0, 'BYE', 5.3, 16.2, 17.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.9, 9.4, 8.8, 'DNP', 'DNP', 'DNP', 'DNP', 12.9, 'BYE', 6.9, 10.9, 12.6, 5.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.2, 1.5, 1.6, 'DNP', 'DNP', 'DNP', 'DNP', 3.0, 'BYE', 0.0, 1.4, 1.5, 3.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.6, 12.3, 12.7, 'DNP', 'DNP', 'DNP', 'DNP', 13.7, 'BYE', 10.8, 13.0, 12.8, 13.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4198676.png",
    "name": "Adam Shaheen",
    "depthchart": "Backup: TE-2",
    "team": "Miami Dolphins",
    "projected": 4.7,
    "opponent": "Cincinnati Bengals",
    "home_away": "",
    "opp_rank_Neu": 22,
    "team_rank_Neg": 25,
    "avg_fp2": 2.72,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 12.14,
    "fanduelSalary": "$2500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#008E97",
    "tmColorDark": "#005778",
    "tmColorLite_rgba": "rgba(0, 142, 151, 0.2)",
    "tmColorDark_rgba": "rgba(0, 87, 120, 0.2)",
    "tmTextLite": "#f5821f",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/mia.png",
    "headlineNews": "Dolphins TE\u00a0Adam Shaheen did not catch his only target in the Dolphins' Week 9 win against the Cardinals.\u00a0\n",
    "report": "",
    "analysis": "Signed to a two-year extension last month with his playing time and targets ticking up, Shaheen wasn't part of the team's offense in Week 9. He ran nine pass routes while Mike Gesicki ran 27 routes on his way to three catches for 42 yards. Shaheen should be on the waiver wire except in deep dynasty formats.\u00a0\n",
    "timestamp": "2020-11-10 05:48 PM",
    "source": null,
    "week01": "DNP",
    "week02": "DNP",
    "week03": 0.0,
    "week04": "DNP",
    "week05": "DNP",
    "week06": 12.6,
    "week07": "BYE",
    "week08": 0.0,
    "week09": 0.0,
    "week10": 2.4,
    "week11": 0.0,
    "week12": 7.2,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 0.0, 'DNP', 'DNP', 12.6, 'BYE', 0.0, 0.0, 2.4, 0.0, 7.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 4.0, 'DNP', 'DNP', 0.4, 'BYE', 0.6, 3.7, 0.6, 0.1, -0.4, 4.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 0.0, 'DNP', 'DNP', 0.0, 'BYE', 1.4, 1.0, 0.0, 0.0, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 142, 151, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 4.1, 'DNP', 'DNP', 5.0, 'BYE', 8.1, 8.5, 7.4, 6.3, 6.5, 6.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3128452.png",
    "name": "Jordan Akins",
    "depthchart": "Starter: TE-1",
    "team": "Houston Texans",
    "projected": 4.4,
    "opponent": "Indianapolis Colts",
    "home_away": "",
    "opp_rank_Neg": 6,
    "team_rank_Pos": 3,
    "avg_fp2": 5.61,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 6.91,
    "fanduelSalary": "$2900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#03202F",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(3, 32, 47, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/hou.png",
    "headlineNews": "The Athletic's Aaron Reiss expects Texans TE\u00a0Jordan Akins to get more snaps out of the slot down the stretch.\u00a0\n",
    "report": "",
    "analysis": "The Texans have to get creative in the passing game with Kenny Stills gone, Will Fuller suspended and Randall Cobb injured. They now have just Keke Coutee and fifth-round rookie Isaiah Coulter behind Brandin Cooks in the receiver corps. Akins, who ranks\u00a0eighth in yards per route run (1.76) amongst tight ends with at least 20 catches, has taken 23 percent of his snaps out of the slot this season compared to 34.6 in 2019. Getting Akins more routes and targets is a no-brainer for an offense that will have to rely much more on \"heavy\" sets for the final five games of 2020.\u00a0\n",
    "timestamp": "2020-12-01 10:29 PM",
    "source": "The Athletic ",
    "week01": 10.9,
    "week02": 9.0,
    "week03": 3.8,
    "week04": 6.1,
    "week05": "DNP",
    "week06": "DNP",
    "week07": "DNP",
    "week08": "BYE",
    "week09": 2.9,
    "week10": 1.0,
    "week11": 10.8,
    "week12": 0.4,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.9, 9.0, 3.8, 6.1, 'DNP', 'DNP', 'DNP', 'BYE', 2.9, 1.0, 10.8, 0.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.7, 4.8, 8.3, 8.3, 'DNP', 'DNP', 'DNP', 'BYE', 8.7, 4.6, 4.5, 8.4, 4.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 4.5, 1.1, 6.4, 'DNP', 'DNP', 'DNP', 'BYE', 0.7, 0.8, 0.0, 0.0, 1.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.7, 10.1, 9.1, 11.6, 'DNP', 'DNP', 'DNP', 'BYE', 7.9, 6.7, 5.8, 6.6, 7.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14054.png",
    "name": "Kyle Rudolph",
    "depthchart": "Starter: TE-1",
    "team": "Minnesota Vikings",
    "projected": 4.4,
    "opponent": "Jacksonville Jaguars",
    "home_away": "",
    "opp_rank_Pos": 29,
    "team_rank_Neu": 17,
    "avg_fp2": 4.67,
    "opp_rank_allowed_fp2_Pos": 24,
    "opp_avg_allowed_fp2": 11.32,
    "fanduelSalary": "$3400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e0aa19",
    "tmColorDark": "#300e5a",
    "tmColorLite_rgba": "rgba(224, 170, 25, 0.2)",
    "tmColorDark_rgba": "rgba(48, 14, 90, 0.2)",
    "tmTextLite": "#e0aa19",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/min.png",
    "headlineNews": "Irv Smith (groin) is out for Week 13 against the Jaguars.\u00a0\n",
    "report": "",
    "analysis": "Smith was never going to have a shot to suit up against Jacksonville after missing practice Wednesday and Thursday. Kyle Rudolph will again operate as the team's primary pass catching tight end. Rudolph has a 15 percent target share over the Vikings' past two games without Smith, making him a viable streaming option in 12 and 14-team leagues.\u00a0\n",
    "timestamp": "2020-12-04 06:53 PM",
    "source": "Chris Tomasson  on Twitter ",
    "week01": 3.8,
    "week02": 0.0,
    "week03": 8.1,
    "week04": 3.7,
    "week05": 1.5,
    "week06": 6.2,
    "week07": "BYE",
    "week08": 1.7,
    "week09": 5.5,
    "week10": 6.3,
    "week11": 4.3,
    "week12": 10.3,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.8, 0.0, 8.1, 3.7, 1.5, 6.2, 'BYE', 1.7, 5.5, 6.3, 4.3, 10.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.4, 4.0, 4.3, 10.7, 3.5, 3.5, 'BYE', 6.4, 6.9, 4.8, 8.4, 7.8, 4.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.5, 2.7, 1.6, 1.4, 1.8, 1.9, 'BYE', 1.0, 2.2, 2.0, 0.0, 1.7, 3.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  "rgba(224, 170, 25, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.8, 13.5, 12.4, 12.2, 13.2, 12.7, 'BYE', 12.8, 13.3, 12.0, 13.1, 12.6, 14.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2573401.png",
    "name": "Tyler Higbee",
    "depthchart": "Starter: TE-1",
    "team": "Los Angeles Rams",
    "projected": 4.3,
    "opponent": "Arizona Cardinals",
    "home_away": "at ",
    "opp_rank_Neu": 13,
    "team_rank_Neu": 11,
    "avg_fp2": 6.63,
    "opp_rank_allowed_fp2_Neu": 7,
    "opp_avg_allowed_fp2": 7.35,
    "fanduelSalary": "$3400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Tyler Higbee caught one pass for six yards in Los Angeles' Week 12 loss to San Francisco.\n",
    "report": "",
    "analysis": "It's the cherry on top of Higbee's horrendous season as he's been unusable in every game except for Los Angeles' cush matchup against the Eagles in Week 2 \u2014 the only game he's\u00a0scored a touchdown in all year. Higbee should have been dropped months ago in re-draft leagues.\n",
    "timestamp": "2020-11-30 03:59 PM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.5, 25.9, 7.0, 3.6, 2.2, 7.1, 'DNP', 2.4, 'BYE', 7.5, 4.0, 1.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.7, 6.5, 3.1, 8.1, 5.3, 4.9, 'DNP', 3.1, 'BYE', 6.8, 9.8, 4.9, 4.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.6, 9.8, 0.0, 0.8, 0.0, 0.0, 'DNP', 5.9, 'BYE', 2.2, 0.3, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.5, 15.5, 10.1, 9.3, 13.5, 10.0, 'DNP', 14.9, 'BYE', 9.3, 9.1, 11.9, 9.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4040774.png",
    "name": "Harrison Bryant",
    "depthchart": "Backup: TE-2",
    "team": "Cleveland Browns",
    "projected": 3.9,
    "opponent": "Tennessee Titans",
    "home_away": "at ",
    "opp_rank_Pos": 28,
    "team_rank_Neg": 30,
    "avg_fp2": 3.49,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 11.85,
    "fanduelSalary": "$2500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FF3C00",
    "tmColorDark": "#311D00",
    "tmColorLite_rgba": "rgba(255, 60, 0, 0.2)",
    "tmColorDark_rgba": "rgba(49, 29, 0, 0.2)",
    "tmTextLite": "#FF3C00",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
    "headlineNews": "Harrison Bryant wasn't targeted in the Browns' Week 10 win over the Texans.\u00a0\n",
    "report": "",
    "analysis": "The wind was one of the reasons the Browns attempted only 20 passes, but with Austin Hooper back from his appendectomy, Bryant won't see more than 2-3 weekly targets. He is off the TE2 radar until further notice.\u00a0\n",
    "timestamp": "2020-11-15 11:54 PM",
    "source": null,
    "week01": "DNP",
    "week02": 1.9,
    "week03": 6.8,
    "week04": 5.7,
    "week05": 0.0,
    "week06": 1.6,
    "week07": 19.6,
    "week08": 2.0,
    "week09": "BYE",
    "week10": 0.0,
    "week11": 0.0,
    "week12": -0.2,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 1.9, 6.8, 5.7, 0.0, 1.6, 19.6, 2.0, 'BYE', 0.0, 0.0, -0.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 2.0, 1.5, 1.8, 0.5, -0.1, 7.6, 12.8, 'BYE', 0.2, 2.0, 4.8, 3.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 0.0, 0.0, 0.0, 0.0, 0.0, 0.7, 0.0, 'BYE', 0.0, 0.0, 17.8, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 6.8, 7.7, 6.3, 5.3, 6.0, 5.7, 16.7, 'BYE', 13.1, 3.8, 20.5, 12.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15773.png",
    "name": "Darren Fells",
    "depthchart": "Backup: TE-2",
    "team": "Houston Texans",
    "projected": 3.8,
    "opponent": "Indianapolis Colts",
    "home_away": "",
    "opp_rank_Neg": 6,
    "team_rank_Pos": 3,
    "avg_fp2": 5.0,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 6.91,
    "fanduelSalary": "$2700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#03202F",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(3, 32, 47, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/hou.png",
    "headlineNews": "Darren Fells wasn't targeted in Houston's Week 12 win over the Lions.\n",
    "report": "",
    "analysis": "Jordan Akins meanwhile was targeted twice at/in the end zone but failed to come up with either. Fells has clearly become a non-factor the past two games, totaling two targets behind Akins (8) in that span. Fells can be dropped wherever stashed in fantasy.\n",
    "timestamp": "2020-11-26 10:45 PM",
    "source": null,
    "week01": 2.9,
    "week02": 9.3,
    "week03": 0.0,
    "week04": 3.1,
    "week05": 12.7,
    "week06": 17.5,
    "week07": 0.0,
    "week08": "BYE",
    "week09": 3.6,
    "week10": 2.0,
    "week11": 3.9,
    "week12": 0.0,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.9, 9.3, 0.0, 3.1, 12.7, 17.5, 0.0, 'BYE', 3.6, 2.0, 3.9, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.6, 1.2, 3.1, 3.0, 6.2, 3.3, 11.0, 'BYE', 3.0, -0.9, 1.2, 4.5, 3.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.1, 0.3, 0.1, 0.5, 1.3, 0.0, 1.3, 'BYE', 0.0, 0.3, 0.0, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.2, 9.8, 8.8, 9.6, 10.4, 9.1, 10.2, 'BYE', 9.1, 8.7, 8.1, 12.3, 9.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2970726.png",
    "name": "Maxx Williams",
    "depthchart": "Starter: TE-1",
    "team": "Arizona Cardinals",
    "projected": 3.6,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank_Neg": 3,
    "team_rank_Neu": 15,
    "avg_fp2": 2.56,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 9.52,
    "fanduelSalary": "$2500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#97233F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(151, 35, 63, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#97233F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
    "headlineNews": "Cardinals\u00a0activated TE\u00a0Maxx Williams (ankle) from injured reserve.\u00a0\n",
    "report": "",
    "analysis": "The blocker had been sidelined since late September. The formerly hyped prospect won't be catching any passes in an offense that rarely targets the seam.\u00a0\n",
    "timestamp": "2020-11-07 09:57 PM",
    "source": null,
    "week01": 0.0,
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": "DNP",
    "week08": "BYE",
    "week09": 6.9,
    "week10": 0.0,
    "week11": 3.9,
    "week12": 2.0,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 6.9, 0.0, 3.9, 2.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.6, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 0.3, 4.7, 2.4, 0.6, 3.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 0.4, 0.7, 0.1, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [6.1, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 6.1, 6.4, 5.0, 5.6, 6.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3122920.png",
    "name": "Ryan Izzo",
    "depthchart": "Starter: TE-1",
    "team": "New England Patriots",
    "projected": 3.6,
    "opponent": "Los Angeles Chargers",
    "home_away": "at ",
    "opp_rank_Neu": 10,
    "team_rank_Neg": 29,
    "avg_fp2": 2.12,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 11.87,
    "fanduelSalary": "$2500",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Hamstring",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#C60C30",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png",
    "headlineNews": "Ryan Izzo caught 1-of-2 targets for 25 yards in the Patriots' Week 1 win over the Dolphins.\n",
    "report": "",
    "analysis": "If you're looking for the Patriots' starting tight end, Izzo is your guy. Unfortunately, all that means is he'll be on the field as the primary run-blocking tight end. Izzo is not a recommended streamer for Week 2 even with Cam Newton looking healthy.\n",
    "timestamp": "2020-09-13 08:36 PM",
    "source": null,
    "week01": 3.0,
    "week02": 2.9,
    "week03": 0.0,
    "week04": 0.0,
    "week05": "BYE",
    "week06": 3.3,
    "week07": 1.3,
    "week08": 3.4,
    "week09": 0.0,
    "week10": 2.5,
    "week11": 6.9,
    "week12": 0.0,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.0, 2.9, 0.0, 0.0, 'BYE', 3.3, 1.3, 3.4, 0.0, 2.5, 6.9, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.0, 3.7, 8.5, 4.1, 'BYE', 1.4, 4.8, -2.2, 1.1, 0.1, 0.3, 3.1, 3.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.7, 0.0, 0.5, 0.9, 'BYE', 0.0, 0.6, 0.4, 0.5, 0.0, 0.0, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [6.4, 8.2, 4.0, 4.2, 'BYE', 3.4, 7.4, 4.1, 3.9, 5.4, 3.4, 4.1, 5.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3918639.png",
    "name": "Gerald Everett",
    "depthchart": "Backup: TE-2",
    "team": "Los Angeles Rams",
    "projected": 3.5,
    "opponent": "Arizona Cardinals",
    "home_away": "at ",
    "opp_rank_Neu": 13,
    "team_rank_Neu": 11,
    "avg_fp2": 4.91,
    "opp_rank_allowed_fp2_Neu": 7,
    "opp_avg_allowed_fp2": 7.35,
    "fanduelSalary": "$3200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Gerald Everett caught both of his targets for 16 yards in Los Angeles' Week 12 loss to the 49ers.\n",
    "report": "",
    "analysis": "Everett was a non-factor even with Tyler Higbee (1/6) banged up and coming in as a game-time decision. As long as both are available, neither are terrific options, as proven weekly. Sunday was also Everett's third consecutive game with less\u00a0than 30 yards receiving.\n",
    "timestamp": "2020-11-30 04:10 PM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.2, 0.0, 4.4, 5.7, 11.0, 4.2, 10.8, 5.7, 'BYE', 3.7, 4.7, 2.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.1, 4.0, -1.0, 4.7, 2.4, 3.5, 4.3, 1.2, 'BYE', 4.9, 6.2, 5.0, 3.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.0, 0.5, 0.6, 0.0, 0.0, 0.0, 'BYE', 4.8, 0.0, 1.4, 0.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [6.3, 8.9, 6.2, 6.2, 8.5, 8.2, 7.7, 7.7, 'BYE', 12.7, 8.5, 10.3, 8.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/12537.png",
    "name": "Jared Cook",
    "depthchart": "Starter: TE-1",
    "team": "New Orleans Saints",
    "projected": 3.5,
    "opponent": "Atlanta Falcons",
    "home_away": "at ",
    "opp_rank_Pos": 31,
    "team_rank_Neu": 20,
    "avg_fp2": 6.15,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 13.0,
    "fanduelSalary": "$3700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9b845c",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(155, 132, 92, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#9b845c",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
    "headlineNews": "Jared Cook caught neither of his two targets in the Saints' Week 12 win against the Broncos.\u00a0\n",
    "report": "",
    "analysis": "Cook's fantasy usefulness has been torpedoed in the Taysom Hill-led Saints offense. Cook has one reception on three targets in Hill's two starts for New Orleans. Fantasy players should look elsewhere for viable tight end options in Week 13, when the Saints take on the Falcons. Cook has no floor -- and certainly no ceiling -- for as long as Hill is the team's starter.\u00a0\n",
    "timestamp": "2020-11-30 01:12 AM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.5, 8.3, 3.1, 'DNP', 12.2, 'BYE', 10.7, 13.6, 2.0, 0.0, 1.1, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.3, 9.5, 9.1, 'DNP', 10.4, 'BYE', 13.2, 5.8, 7.4, 5.5, 5.1, 6.6, 3.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.0, 1.2, 1.4, 'DNP', 1.3, 'BYE', 1.6, 1.6, 1.7, 1.0, 0.6, 1.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(155, 132, 92, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.9, 13.3, 13.3, 'DNP', 14.5, 'BYE', 13.4, 12.4, 13.5, 13.0, 14.9, 12.4, 11.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3127292.png",
    "name": "Will Dissly",
    "depthchart": "Backup: TE-2",
    "team": "Seattle Seahawks",
    "projected": 3.4,
    "opponent": "New York Giants",
    "home_away": "",
    "opp_rank_Neu": 19,
    "team_rank_Pos": 4,
    "avg_fp2": 2.66,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 8.35,
    "fanduelSalary": "$3300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#69BE28",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(105, 190, 40, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#69BE28",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
    "headlineNews": "Jacob Hollister led the Seahawks' tight ends in routes in the team's Week 12 win against the Eagles.\u00a0\n",
    "report": "",
    "analysis": "There was some question as to whether Hollister or Will Dissly would emerge as the team's primary pass catching tight end after Greg Olsen's potentially season ending foot injury. The answer was clear -- for at least one week -- against the Eagles, as Hollister ran 21 pass routes and Dissly ran 16.\u00a0Hollister caught 2-of-5 targets for 11 yards on a slow night for the Seahawks' passing attack. Dissly wasn't targeted. He'll once again be a fringe streaming play in Week 13 against the Giants.\u00a0\n",
    "timestamp": "2020-12-01 06:47 PM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.8, 1.4, 1.5, 2.5, 8.4, 'BYE', 4.8, 2.2, 3.1, 2.1, 1.5, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.2, 2.8, 6.1, -0.9, 5.6, 'BYE', 1.5, 2.2, 3.4, 1.1, 3.9, 4.8, 3.4]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 3.7, 2.7, 0.0, 2.0, 'BYE', 1.8, 0.9, 0.0, 0.3, 0.0, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.1, 15.1, 16.7, 8.8, 16.0, 'BYE', 15.5, 15.5, 12.7, 14.2, 8.1, 8.8, 9.2]
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
    "opponent": "San Francisco 49ers",
    "home_away": "at ",
    "opp_rank_Neg": 4,
    "team_rank_Neu": 7,
    "avg_fp2": 2.83,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 6.15,
    "fanduelSalary": "$2900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#005596",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 85, 150, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
    "headlineNews": "Dawson Knox caught a two-yard touchdown in Buffalo's Week 12 win over the Chargers.\n",
    "report": "",
    "analysis": "Knox only saw one target, a two-yard touchdown reception\u00a0in the first half, despite Tyler Kroft getting\u00a0scratched. He also became the 12th different player to catch a touchdown pass for the Bills this season. Still, Knox can't be considered an option for any format in fantasy.\n",
    "timestamp": "2020-11-30 03:31 PM",
    "source": null,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.6, 2.3, 'DNP', 2.6, 2.0, 'DNP', 'DNP', 'DNP', 0.0, 2.6, 'BYE', 6.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.3, 5.7, 'DNP', 5.1, 5.4, 'DNP', 'DNP', 'DNP', 10.3, 3.1, 'BYE', 4.7, 3.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.1, 3.9, 'DNP', 2.6, 1.2, 'DNP', 'DNP', 'DNP', 0.7, 1.3, 'BYE', 1.6, 0.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [7.6, 11.2, 'DNP', 7.2, 9.3, 'DNP', 'DNP', 'DNP', 6.0, 4.8, 'BYE', 6.7, 7.7]
                    }
                    
                    ]
               }
            }];



$scope.positionDST = [{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/PIT.png",
    "name": "Pittsburgh Steelers",
    "depthchart": "",
    "team": "Pittsburgh Steelers",
    "projected": 8.5,
    "opponent": "Washington Football Team",
    "opp_rank_pts": 24,
    "opp_avg_pts": 21.91,
    "home_away": "",
    "team_rank_allowed_pts": 1,
    "team_avg_allowed_pts": 17.27,
    "team_ranked_takeaways": 21,
    "team_avg_takeaways": 1.18,
    "opp_ranked_giveaways": 27,
    "opp_avg_giveaways": 1.73,
    "fanduelSalary": "$4300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#000000",
    "tmTextLite": "#FFB612",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/pit.png",
    "headlineNews": "Steelers activated DE Stephon Tuitt from the reserve/COVID-19\u00a0list.\n",
    "report": "",
    "analysis": "Tuitt missed Week 12 in COVID protocols. His return upgrades the Steelers' pass rush, with\u00a0Tuitt posting\u00a0seven sacks in 10 games this season. Tuitt is also on pace for career highs in forced fumbles (2),\u00a0QB Hits (18), and TFLs (7).\n",
    "timestamp": "",
    "source": null,
    "avg_fp2": 10.18,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.0, 13.0, 7.0, 'BYE', 8.0, 18.0, 2.0, 12.0, 7.0, 12.0, 17.0, 8.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.9, 7.8, 8.4, 'BYE', 8.0, 7.8, 4.6, 6.1, 7.4, 7.0, 8.1, 5.4, 8.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.9, 1.7, 2.1, 'BYE', 2.8, 1.1, 1.9, 1.9, 1.9, 2.1, 2.3, 3.3, 2.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.7, 14.9, 14.7, 'BYE', 14.8, 14.9, 13.7, 15.0, 14.8, 14.7, 14.3, 14.6, 14.8]
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
    "opponent": "Jacksonville Jaguars",
    "opp_rank_pts": 28,
    "opp_avg_pts": 20.64,
    "home_away": "",
    "team_rank_allowed_pts": 26,
    "team_avg_allowed_pts": 27.73,
    "team_ranked_takeaways": 17,
    "team_avg_takeaways": 1.36,
    "opp_ranked_giveaways": 12,
    "opp_avg_giveaways": 1.18,
    "fanduelSalary": "$3500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#e0aa19",
    "tmColorDark": "#300e5a",
    "tmTextLite": "#e0aa19",
    "tmColorLite_rgba": "rgba(224, 170, 25, 0.2)",
    "tmColorDark_rgba": "rgba(48, 14, 90, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/min.png",
    "headlineNews": "Vikings placed CB\u00a0Holton Hill (foot) on injured reserve.\u00a0\n",
    "report": "",
    "analysis": "Battling foot issues for over a month, Hill has not played since Week 4, making one wonder why this move wasn't made sooner. It's just the latest development in the Vikings' cursed injury year in the secondary. Hill must now miss at least the next three games.\u00a0Cameron Dantzler (concussion), Mark Fields II (punctured lung) and Harrison Hand (hamstring) all had Week 9 injury issues, leaving Jeff Gladney, Kris Boyd and Chris Jones as the Vikes' current top three.\u00a0\n",
    "timestamp": "",
    "source": null,
    "avg_fp2": 4.0,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [-4.0, 3.0, 2.0, 5.0, 6.0, 2.0, 'BYE', 3.0, 9.0, 10.0, 4.0, 4.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.6, 5.0, 6.0, 6.4, 4.7, 5.6, 'BYE', 3.8, 6.7, 6.0, 7.0, 6.7, 7.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.4, 0.7, 0.4, 0.9, 1.3, 0.3, 'BYE', 0.4, 0.9, 1.0, 0.7, 0.8, 0.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  "rgba(224, 170, 25, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.9, 13.8, 14.1, 12.7, 14.0, 13.2, 'BYE', 13.0, 13.9, 13.5, 13.6, 13.4, 13.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/CHI.png",
    "name": "Chicago Bears",
    "depthchart": "",
    "team": "Chicago Bears",
    "projected": 7.1,
    "opponent": "Detroit Lions",
    "opp_rank_pts": 23,
    "opp_avg_pts": 22.91,
    "home_away": "",
    "team_rank_allowed_pts": 8,
    "team_avg_allowed_pts": 22.73,
    "team_ranked_takeaways": 8,
    "team_avg_takeaways": 1.55,
    "opp_ranked_giveaways": 5,
    "opp_avg_giveaways": 1.0,
    "fanduelSalary": "$3100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#c36835",
    "tmColorDark": "#0B162A",
    "tmTextLite": "#c36835",
    "tmColorLite_rgba": "rgba(195, 104, 53, 0.2)",
    "tmColorDark_rgba": "rgba(11, 22, 42, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png",
    "headlineNews": "Bears\u00a0DT Akiem Hicks (hamstring) is questionable for Week 13 against the Lions.\n",
    "report": "",
    "analysis": "Hicks' status is a significant one to monitor since Chicago's run defense allowed 4.1 yards per carry compared to just 2.9 on the ground when Hicks was off the field last year. With D'Andre Swift (concussion, questionable) limited even if he were to return, Hicks' potential absence would help Adrian Peterson tear through Chicago's front-seven.\n",
    "timestamp": "",
    "source": "Jeff Dickerson on Twitter",
    "avg_fp2": 5.55,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.0, 14.0, 4.0, 2.0, 6.0, 9.0, 11.0, 1.0, 3.0, 12.0, 'BYE', -4.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.1, 7.3, 6.1, 6.1, 7.9, 6.8, 5.3, 6.4, 4.1, 7.2, 'BYE', 4.9, 7.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.5, 3.8, 1.6, 1.7, 1.4, 2.4, 1.2, 0.6, 0.5, 0.6, 'BYE', 0.0, 0.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  "rgba(195, 104, 53, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.1, 14.4, 15.6, 14.5, 14.5, 14.4, 12.9, 12.8, 15.2, 12.1, 'BYE', 16.5, 12.1]
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
    "opponent": "New York Giants",
    "opp_rank_pts": 30,
    "opp_avg_pts": 19.45,
    "home_away": "",
    "team_rank_allowed_pts": 27,
    "team_avg_allowed_pts": 27.82,
    "team_ranked_takeaways": 12,
    "team_avg_takeaways": 1.45,
    "opp_ranked_giveaways": 18,
    "opp_avg_giveaways": 1.45,
    "fanduelSalary": "$3300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#69BE28",
    "tmColorDark": "#002244",
    "tmTextLite": "#69BE28",
    "tmColorLite_rgba": "rgba(105, 190, 40, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
    "headlineNews": "Seahawks DE\u00a0Carlos Dunlap (foot) will be a game-time decision for Week 13 against the Giants.\u00a0\n",
    "report": "",
    "analysis": "Dunlap emerged from Week 12's win against the Eagles with the foot injury.\u00a0Dunlap has proven a massive trade deadline addition for Seattle, notching 3.5 sacks in four games in a rejuvenated Seahawks defense. Seattle would still be a top defensive option in fantasy leagues this week if Dunlap is sidelined.\u00a0\n",
    "timestamp": "",
    "source": "Michael-Shawn Duggar on Twitter ",
    "avg_fp2": 5.36,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.0, 3.0, 11.0, 5.0, 7.0, 'BYE', 0.0, 7.0, 3.0, 5.0, 5.0, 9.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.7, 6.5, 6.8, 5.6, 6.4, 'BYE', 5.0, 7.0, 6.4, 6.0, 7.7, 6.3, 7.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.1, 1.7, 2.2, 1.2, 1.2, 'BYE', 0.6, 0.7, 0.0, 2.2, 0.0, 1.2, 1.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(105, 190, 40, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.4, 15.6, 15.8, 14.2, 13.9, 'BYE', 13.4, 14.3, 12.4, 13.7, 15.0, 14.6, 15.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/MIA.png",
    "name": "Miami Dolphins",
    "depthchart": "",
    "team": "Miami Dolphins",
    "projected": 7.0,
    "opponent": "Cincinnati Bengals",
    "opp_rank_pts": 26,
    "opp_avg_pts": 20.91,
    "home_away": "",
    "team_rank_allowed_pts": 2,
    "team_avg_allowed_pts": 18.64,
    "team_ranked_takeaways": 12,
    "team_avg_takeaways": 1.45,
    "opp_ranked_giveaways": 27,
    "opp_avg_giveaways": 1.73,
    "fanduelSalary": "$4400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#008E97",
    "tmColorDark": "#005778",
    "tmTextLite": "#f5821f",
    "tmColorLite_rgba": "rgba(0, 142, 151, 0.2)",
    "tmColorDark_rgba": "rgba(0, 87, 120, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/mia.png",
    "headlineNews": "Dolphins activated LB Kyle Van Noy from the reserve/COVID list.\n",
    "report": "",
    "analysis": "Van Noy was placed on the team's COVID list only 48 hours ago but will be removed in time to suit up for Sunday's game against the Chargers. He has notably\u00a0played the most snaps among all of Miami's linebackers this year, grading at Pro Football Focus as the Dolphins' second-best player at that position. Antonio Callaway was also promoted to the active roster ahead of Week 10.\n",
    "timestamp": "",
    "source": "Miami Dolphins on Twitter",
    "avg_fp2": 8.18,
    "week01": 2.0,
    "week02": 4.0,
    "week03": 12.0,
    "week04": 3.0,
    "week05": 12.0,
    "week06": 15.0,
    "week07": "BYE",
    "week08": 17.0,
    "week09": 2.0,
    "week10": 4.0,
    "week11": 5.0,
    "week12": 14.0,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.0, 4.0, 12.0, 3.0, 12.0, 15.0, 'BYE', 17.0, 2.0, 4.0, 5.0, 14.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.1, 7.4, 6.2, 4.1, 6.2, 7.0, 'BYE', 5.8, 5.8, 5.2, 6.1, 6.6, 7.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.1, 0.0, 2.9, 0.0, 0.7, 0.7, 'BYE', 0.0, 0.4, 0.3, 0.0, 0.2, 1.2]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 142, 151, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.8, 14.2, 10.5, 12.8, 13.5, 13.1, 'BYE', 12.6, 13.0, 11.3, 12.9, 13.1, 14.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/NYJ.png",
    "name": "New York Jets",
    "depthchart": "",
    "team": "New York Jets",
    "projected": 6.3,
    "opponent": "Las Vegas Raiders",
    "opp_rank_pts": 12,
    "opp_avg_pts": 26.55,
    "home_away": "",
    "team_rank_allowed_pts": 29,
    "team_avg_allowed_pts": 29.27,
    "team_ranked_takeaways": 8,
    "team_avg_takeaways": 1.55,
    "opp_ranked_giveaways": 30,
    "opp_avg_giveaways": 1.82,
    "fanduelSalary": "$2100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#125740",
    "tmColorDark": "#003f2d",
    "tmTextLite": "#FFFFFF",
    "tmColorLite_rgba": "rgba(18, 87, 64, 0.2)",
    "tmColorDark_rgba": "rgba(0, 63, 45, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png",
    "headlineNews": "Jets placed ILB\u00a0Blake Cashman on injured reserve with a hamstring injury, ending his season.\u00a0\n",
    "report": "",
    "analysis": "Since this is Cashman's second I.R. placement of 2020, he is ineligible for return. It is the third time in two seasons he has been stashed on the reserve list. The 24-year-old finishes 2020 having contributed just 48 snaps. The 2019 fifth-rounder will be on the spot for a 53-man roster spot next summer.\u00a0\n",
    "timestamp": "",
    "source": "Rich Cimini on Twitter ",
    "avg_fp2": 2.91,
    "week01": 3.0,
    "week02": 4.0,
    "week03": 0.0,
    "week04": 2.0,
    "week05": 2.0,
    "week06": 6.0,
    "week07": 5.0,
    "week08": -4.0,
    "week09": -1.0,
    "week10": "BYE",
    "week11": 6.0,
    "week12": 9.0,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.0, 4.0, 0.0, 2.0, 2.0, 6.0, 5.0, -4.0, -1.0, 'BYE', 6.0, 9.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.8, 5.1, 5.4, 6.3, 6.1, 4.2, 6.6, 4.9, 6.1, 'BYE', 5.2, 5.9, 6.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.5, 1.2, 0.6, 1.1, 1.0, 0.0, 0.2, 0.0, 1.7, 'BYE', 0.0, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  "rgba(18, 87, 64, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.6, 12.9, 11.9, 12.2, 12.8, 10.4, 11.1, 11.6, 12.5, 'BYE', 12.7, 10.1, 11.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/ATL.png",
    "name": "Atlanta Falcons",
    "depthchart": "",
    "team": "Atlanta Falcons",
    "projected": 6.2,
    "opponent": "New Orleans Saints",
    "opp_rank_pts": 4,
    "opp_avg_pts": 29.64,
    "home_away": "",
    "team_rank_allowed_pts": 18,
    "team_avg_allowed_pts": 25.55,
    "team_ranked_takeaways": 12,
    "team_avg_takeaways": 1.45,
    "opp_ranked_giveaways": 30,
    "opp_avg_giveaways": 1.82,
    "fanduelSalary": "$2400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#A71930",
    "tmColorDark": "#000000",
    "tmTextLite": "#A71930",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/atl.png",
    "headlineNews": "Falcons DE Dante Fowler (hamstring) is questionable for Week 12 against the Raiders.\n",
    "report": "",
    "analysis": "A few days removed from the COVID-19 list, Fowler went\u00a0from limited to did not practice on Friday. It's a worrisome downgrade for the Falcons' top edge rusher. The Falcons offense is deservedly getting the attention with injuries, but losing Fowler would be a troubling development with the efficient Raiders coming to Atlanta.\n",
    "timestamp": "",
    "source": null,
    "avg_fp2": 4.91,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [-1.0, 3.0, 5.0, 0.0, 0.0, 9.0, 2.0, 6.0, 3.0, 'BYE', 5.0, 22.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.0, 5.3, 5.9, 4.2, 5.2, 5.0, 5.4, 5.9, 6.0, 'BYE', 3.9, 5.2, 6.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.9, 0.0, 1.2, 1.3, 1.3, 0.5, 0.7, 1.1, 1.2, 'BYE', 1.1, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.1, 11.1, 11.7, 12.3, 11.9, 11.2, 12.1, 11.8, 12.5, 'BYE', 14.4, 12.5, 12.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/GB.png",
    "name": "Green Bay Packers",
    "depthchart": "",
    "team": "Green Bay Packers",
    "projected": 6.1,
    "opponent": "Philadelphia Eagles",
    "opp_rank_pts": 25,
    "opp_avg_pts": 21.55,
    "home_away": "",
    "team_rank_allowed_pts": 20,
    "team_avg_allowed_pts": 25.73,
    "team_ranked_takeaways": 27,
    "team_avg_takeaways": 0.82,
    "opp_ranked_giveaways": 3,
    "opp_avg_giveaways": 0.82,
    "fanduelSalary": "$3800",
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
    "avg_fp2": 4.45,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.0, 6.0, 3.0, 5.0, 'BYE', -1.0, 6.0, 0.0, 6.0, 6.0, 4.0, 9.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.6, 7.0, 4.5, 6.2, 'BYE', 6.2, 5.0, 7.3, 4.5, 7.8, 6.6, 7.7, 6.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.0, 1.1, 1.9, 0.8, 'BYE', 0.9, 4.8, 1.2, 0.9, 0.7, 1.2, 3.1, 0.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.2, 14.0, 14.1, 13.7, 'BYE', 14.1, 17.7, 14.1, 14.0, 14.8, 14.0, 15.4, 14.6]
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
    "opponent": "Denver Broncos",
    "opp_rank_pts": 31,
    "opp_avg_pts": 19.18,
    "home_away": "",
    "team_rank_allowed_pts": 6,
    "team_avg_allowed_pts": 21.09,
    "team_ranked_takeaways": 31,
    "team_avg_takeaways": 0.64,
    "opp_ranked_giveaways": 16,
    "opp_avg_giveaways": 1.36,
    "fanduelSalary": "$3700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmTextLite": "#FFB81C",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Chiefs DT Chris Jones (reserve/COVID-19) returned to practice.\n",
    "report": "",
    "analysis": "It means Jones\u00a0cleared protocols\u00a0after having close contact with a Chiefs staffer who tested positive.\u00a0Jones should play in Sunday's game with the Panthers.\u00a0\n",
    "timestamp": "",
    "source": "NFL Network",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.0, 5.0, 7.0, 14.0, -1.0, 5.0, 24.0, 9.0, 1.0, 'BYE', 1.0, 5.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.0, 5.0, 5.9, 4.6, 7.6, 4.1, 6.6, 8.1, 6.6, 'BYE', 6.0, 5.7, 6.1]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.0, 1.4, 1.0, 0.3, 1.5, 0.8, 0.0, 0.6, 1.4, 'BYE', 0.3, 0.2, 0.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.4, 13.8, 13.1, 13.9, 14.7, 13.2, 13.5, 14.1, 14.0, 'BYE', 13.1, 14.5, 14.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/IND.png",
    "name": "Indianapolis Colts",
    "depthchart": "",
    "team": "Indianapolis Colts",
    "projected": 6.0,
    "opponent": "Houston Texans",
    "opp_rank_pts": 17,
    "opp_avg_pts": 24.36,
    "home_away": "at ",
    "team_rank_allowed_pts": 9,
    "team_avg_allowed_pts": 22.82,
    "team_ranked_takeaways": 19,
    "team_avg_takeaways": 1.27,
    "opp_ranked_giveaways": 2,
    "opp_avg_giveaways": 0.73,
    "fanduelSalary": "$3000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#014683",
    "tmColorDark": "#002C5F",
    "tmTextLite": "#FFFFFF",
    "tmColorLite_rgba": "rgba(1, 70, 131, 0.2)",
    "tmColorDark_rgba": "rgba(0, 44, 95, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png",
    "headlineNews": "Colts LB Bobby Okereke (ankle) is out Week 13 against the Texans.\n",
    "report": "",
    "analysis": "Okereke missed Week 12 as well and remains week to week after going DNP-DNP-DNP in practice this week. He's been shaky in coverage but a volume tackler in the Colts' two-deep zone defense. The Colts are welcoming\u00a0back DT DeForest Buckner back to the lineup this week at least.\n",
    "timestamp": "",
    "source": null,
    "avg_fp2": 7.36,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.0, 19.0, 14.0, 7.0, 11.0, 6.0, 'BYE', 9.0, 4.0, 2.0, 8.0, -3.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.8, 6.8, 8.6, 5.9, 6.5, 8.2, 'BYE', 6.8, 6.9, 4.4, 6.3, 6.9, 6.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.4, 1.2, 0.2, 2.7, 0.1, 1.5, 'BYE', 1.0, 1.3, 1.3, 1.1, 1.4, 1.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.9, 12.2, 12.3, 14.1, 13.2, 12.9, 'BYE', 13.9, 12.7, 11.9, 12.3, 13.1, 12.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/NO.png",
    "name": "New Orleans Saints",
    "depthchart": "",
    "team": "New Orleans Saints",
    "projected": 5.8,
    "opponent": "Atlanta Falcons",
    "opp_rank_pts": 11,
    "opp_avg_pts": 26.82,
    "home_away": "at ",
    "team_rank_allowed_pts": 5,
    "team_avg_allowed_pts": 20.45,
    "team_ranked_takeaways": 27,
    "team_avg_takeaways": 0.82,
    "opp_ranked_giveaways": 5,
    "opp_avg_giveaways": 1.0,
    "fanduelSalary": "$3600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#9b845c",
    "tmColorDark": "#101820",
    "tmTextLite": "#9b845c",
    "tmColorLite_rgba": "rgba(155, 132, 92, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
    "headlineNews": "Saints DL Marcus Davenport (concussion) is out for Week 13 against Atlanta.\u00a0\n",
    "report": "",
    "analysis": "Davenport wasn't able to practice Thursday or Friday. Matt Ryan might have slightly more time to operate in the pocket this week with Davenport sidelined. Ryan was sacked six times when these teams faced off in Week 11.\u00a0\n",
    "timestamp": "",
    "source": "Katherine Terrell on Twitter ",
    "avg_fp2": 7.91,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.0, 4.0, -3.0, 4.0, 3.0, 'BYE', 1.0, 7.0, 16.0, 14.0, 16.0, 14.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.3, 4.7, 4.5, 5.3, 6.4, 'BYE', 4.9, 7.2, 5.4, 5.7, 6.1, 6.0, 5.8]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.5, 0.4, 1.0, 0.6, 0.4, 'BYE', 1.1, 0.4, 1.0, 0.2, 0.4, 2.7, 5.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(155, 132, 92, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.5, 11.4, 12.6, 12.8, 10.9, 'BYE', 12.1, 12.7, 13.2, 12.1, 12.1, 14.8, 16.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/LA.png",
    "name": "Los Angeles Rams",
    "depthchart": "",
    "team": "Los Angeles Rams",
    "projected": 5.7,
    "opponent": "Arizona Cardinals",
    "opp_rank_pts": 8,
    "opp_avg_pts": 27.64,
    "home_away": "at ",
    "team_rank_allowed_pts": 4,
    "team_avg_allowed_pts": 19.55,
    "team_ranked_takeaways": 5,
    "team_avg_takeaways": 1.64,
    "opp_ranked_giveaways": 13,
    "opp_avg_giveaways": 1.27,
    "fanduelSalary": "$3200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmTextLite": "#866D4B",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Rams placed LB Micah Kiser to injured reserve.\n",
    "report": "",
    "analysis": "Kiser will miss at least three games. It's a key loss to the Rams linebacker corps as Kiser was the team's leader in tackles. The Rams defense has played above expectations because their stars are playing like stars and they've found hidden gems like Kiser at all three levels. The Rams rank top-10 in many defensive categories.\n",
    "timestamp": "",
    "source": "Rams on Twitter",
    "avg_fp2": 7.18,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.0, 5.0, 4.0, 11.0, 12.0, 0.0, 12.0, 4.0, 'BYE', 13.0, 5.0, 9.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.5, 6.5, 6.4, 7.8, 8.4, 6.9, 6.4, 5.2, 'BYE', 6.4, 6.3, 7.5, 5.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.4, 0.4, 0.8, 1.7, 0.2, 0.6, 0.3, 0.9, 'BYE', 1.1, 1.5, 1.1, 1.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.2, 13.3, 14.8, 15.4, 14.4, 14.8, 14.0, 14.2, 'BYE', 13.7, 14.7, 14.6, 14.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/ARI.png",
    "name": "Arizona Cardinals",
    "depthchart": "",
    "team": "Arizona Cardinals",
    "projected": 5.6,
    "opponent": "Los Angeles Rams",
    "opp_rank_pts": 18,
    "opp_avg_pts": 23.91,
    "home_away": "",
    "team_rank_allowed_pts": 14,
    "team_avg_allowed_pts": 23.45,
    "team_ranked_takeaways": 21,
    "team_avg_takeaways": 1.18,
    "opp_ranked_giveaways": 27,
    "opp_avg_giveaways": 1.73,
    "fanduelSalary": "$2900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#97233F",
    "tmColorDark": "#000000",
    "tmTextLite": "#97233F",
    "tmColorLite_rgba": "rgba(151, 35, 63, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
    "headlineNews": "Cardinals activated S Deionte Thompson from the reserve/COVID-19 list.\n",
    "report": "",
    "analysis": "Thompson only missed one week of action while stuck on the team's COVID list. He's totaled 24 tackles on 42% of the Cardinals' defensive snaps this season.\n",
    "timestamp": "",
    "source": "Arizona Cardinals on Twitter",
    "avg_fp2": 5.45,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.0, 11.0, 4.0, 1.0, 7.0, 11.0, 7.0, 'BYE', 2.0, 3.0, 2.0, 8.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.0, 6.4, 6.8, 5.0, 7.1, 4.4, 4.6, 'BYE', 6.6, 6.3, 4.8, 3.9, 5.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.4, 1.7, 1.6, 1.1, 1.1, 1.0, 0.9, 'BYE', 0.6, 1.0, 1.5, 1.2, 0.4]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.3, 14.0, 13.2, 14.7, 12.8, 13.6, 13.3, 'BYE', 14.6, 13.5, 13.0, 14.3, 13.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/SF.png",
    "name": "San Francisco 49ers",
    "depthchart": "",
    "team": "San Francisco 49ers",
    "projected": 5.6,
    "opponent": "Buffalo Bills",
    "opp_rank_pts": 9,
    "opp_avg_pts": 27.18,
    "home_away": "",
    "team_rank_allowed_pts": 11,
    "team_avg_allowed_pts": 23.09,
    "team_ranked_takeaways": 5,
    "team_avg_takeaways": 1.64,
    "opp_ranked_giveaways": 18,
    "opp_avg_giveaways": 1.45,
    "fanduelSalary": "$2500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmTextLite": "#B3995D",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "49ers placed CBs\u00a0Jamar Taylor (knee) and Ken Webster (hamstring) on injured reserve.\u00a0\n",
    "report": "",
    "analysis": "Neither are impact players, but more I.R. placements is the last thing the 49ers' injury-decimated defense needs. Taylor had been operating as Niners' primary slot corner since Week 5. Elite coordinator Robert Saleh will continue to do all he can to duct tape and glue his defense.\u00a0\n",
    "timestamp": "",
    "source": "Can Inman on Twitter",
    "avg_fp2": 5.73,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.0, 5.0, 12.0, 6.0, -2.0, 5.0, 17.0, -2.0, 0.0, 7.0, 'BYE', 11.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.7, 6.3, 6.4, 7.7, 8.5, 6.6, 4.3, 5.0, 3.9, 3.9, 'BYE', 7.2, 5.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.9, 0.5, 1.2, 1.0, 0.8, 0.4, 0.0, 0.6, 0.1, 0.0, 'BYE', 0.2, 1.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  "rgba(179, 153, 93, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.8, 13.2, 13.4, 13.9, 13.7, 12.3, 14.3, 13.3, 13.6, 11.2, 'BYE', 12.7, 13.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/LV.png",
    "name": "Las Vegas Raiders",
    "depthchart": "",
    "team": "Las Vegas Raiders",
    "projected": 5.5,
    "opponent": "New York Jets",
    "opp_rank_pts": 32,
    "opp_avg_pts": 13.82,
    "home_away": "at ",
    "team_rank_allowed_pts": 28,
    "team_avg_allowed_pts": 29.0,
    "team_ranked_takeaways": 31,
    "team_avg_takeaways": 0.64,
    "opp_ranked_giveaways": 3,
    "opp_avg_giveaways": 0.82,
    "fanduelSalary": "$3400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmTextLite": "#A5ACAF",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lv.png",
    "headlineNews": "Raiders S Johnathan Abram (knee) is out for Week 13 against the Jets.\n",
    "report": "",
    "analysis": "Abram has been on the COVID-19 list and has playing with shoulder ailments this season. Add a knee injury to the list. Since being a first-round pick, Abram has been an offensive coordinator's dream as the hard-hitting safety has often been more concerned with making a big play than being sound in coverage. The Raiders will also be without Maliek Collins, but he's been pretty brutal on defense, too.\n",
    "timestamp": "",
    "source": null,
    "avg_fp2": 2.55,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 2.0, 0.0, 0.0, 4.0, 'BYE', -4.0, 9.0, 4.0, 16.0, -2.0, -1.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.7, 5.0, 3.2, 5.3, 5.2, 'BYE', 4.6, 5.7, 4.2, 5.0, 4.9, 4.0, 5.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 1.1, 0.9, 0.0, 0.2, 'BYE', 0.4, 0.0, 0.0, 0.0, 0.0, 0.0, 0.1]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.9, 11.3, 12.3, 11.4, 11.3, 'BYE', 10.3, 9.3, 10.8, 11.0, 11.2, 11.0, 11.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/HOU.png",
    "name": "Houston Texans",
    "depthchart": "",
    "team": "Houston Texans",
    "projected": 5.3,
    "opponent": "Indianapolis Colts",
    "opp_rank_pts": 10,
    "opp_avg_pts": 26.91,
    "home_away": "",
    "team_rank_allowed_pts": 24,
    "team_avg_allowed_pts": 27.0,
    "team_ranked_takeaways": 26,
    "team_avg_takeaways": 0.91,
    "opp_ranked_giveaways": 16,
    "opp_avg_giveaways": 1.36,
    "fanduelSalary": "$2800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#A71930",
    "tmColorDark": "#03202F",
    "tmTextLite": "#A71930",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(3, 32, 47, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/hou.png",
    "headlineNews": "NFL suspended Texans CB Bradley Roby six games for violating the league's PEDs policy.\n",
    "report": "",
    "analysis": "He joins teammate Will Fuller as Texans to be busted for PEDs and hit with six-game bans Monday. Roby will miss the remainder of the season and the first game of next year. Roby is the Texans' every-down No. 1 cover corner. He re-signed with Houston on a three-year, $31.5 million deal last offseason.\n",
    "timestamp": "",
    "source": null,
    "avg_fp2": 3.18,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 3.0, 1.0, 2.0, 9.0, 2.0, -4.0, 'BYE', 4.0, 5.0, 3.0, 10.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.7, 6.4, 5.3, 6.3, 5.8, 4.5, 4.6, 'BYE', 6.6, 5.4, 5.2, 5.2, 5.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.1, 0.0, 0.3, 0.0, 0.2, 0.0, 'BYE', 0.2, 0.0, 0.0, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.6, 13.3, 12.8, 13.3, 13.7, 12.8, 11.1, 'BYE', 13.1, 12.3, 12.9, 13.6, 12.8]
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
    "opponent": "Miami Dolphins",
    "opp_rank_pts": 14,
    "opp_avg_pts": 25.82,
    "home_away": "at ",
    "team_rank_allowed_pts": 22,
    "team_avg_allowed_pts": 26.27,
    "team_ranked_takeaways": 27,
    "team_avg_takeaways": 0.82,
    "opp_ranked_giveaways": 18,
    "opp_avg_giveaways": 1.45,
    "fanduelSalary": "$2300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#ea7330",
    "tmColorDark": "#000000",
    "tmTextLite": "#ea7330",
    "tmColorLite_rgba": "rgba(234, 115, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png",
    "headlineNews": "Bengals placed CB Tony Brown (hamstring) on injured reserve.\n",
    "report": "",
    "analysis": "The special teams standout will miss a minimum of three games. The Bengals promoted WR\u00a0Stanley Morgan\u00a0from the practice squad to replace Brown on the active roster.\u00a0\n",
    "timestamp": "",
    "source": null,
    "avg_fp2": 2.73,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.0, -2.0, 7.0, 5.0, 3.0, 2.0, -2.0, 4.0, 'BYE', -4.0, 5.0, 9.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.4, 7.1, 6.4, 6.4, 6.3, 5.5, 5.7, 5.6, 'BYE', 5.9, 6.7, 5.9, 5.2]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.1, 2.4, 1.2, 0.0, 0.5, 0.3, 1.4, 0.3, 'BYE', 0.9, 1.2, 0.5, 0.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.0, 10.4, 12.3, 14.3, 12.5, 13.1, 13.1, 11.7, 'BYE', 12.7, 13.2, 12.7, 12.8]
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
    "opponent": "New England Patriots",
    "opp_rank_pts": 27,
    "opp_avg_pts": 20.82,
    "home_away": "",
    "team_rank_allowed_pts": 25,
    "team_avg_allowed_pts": 27.27,
    "team_ranked_takeaways": 21,
    "team_avg_takeaways": 1.18,
    "opp_ranked_giveaways": 18,
    "opp_avg_giveaways": 1.45,
    "fanduelSalary": "$2600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#0080C6",
    "tmColorDark": "#002A5E",
    "tmTextLite": "#0080C6",
    "tmColorLite_rgba": "rgba(0, 128, 198, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 94, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lac.png",
    "headlineNews": "Chargers LB Denzel Perryman (back) is doubtful for Week 13 against the Patriots.\n",
    "report": "",
    "analysis": "Perryman has been one of the Chargers top run defenders and sure tacklers over the middle of the field. His loss could be felt with the Patriots' power rushing offense coming to Los Angeles on Sunday. Chargers CB Casey Hayward and DE Uchenna Nwosu are questionable after being limited in practice Friday.\n",
    "timestamp": "",
    "source": null,
    "avg_fp2": 3.82,
    "week01": 9.0,
    "week02": 5.0,
    "week03": 4.0,
    "week04": -2.0,
    "week05": 3.0,
    "week06": "BYE",
    "week07": 6.0,
    "week08": 3.0,
    "week09": 2.0,
    "week10": 1.0,
    "week11": 2.0,
    "week12": 9.0,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.0, 5.0, 4.0, -2.0, 3.0, 'BYE', 6.0, 3.0, 2.0, 1.0, 2.0, 9.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.3, 5.8, 6.1, 7.4, 5.2, 'BYE', 6.9, 6.8, 6.2, 5.3, 7.6, 4.6, 5.0]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.5, 0.4, 1.6, 1.2, 0.4, 'BYE', 1.6, 1.2, 0.7, 0.4, 1.2, 0.0, 1.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 128, 198, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.1, 11.8, 13.5, 13.0, 12.3, 'BYE', 12.5, 12.0, 12.3, 12.0, 12.8, 10.5, 13.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/JAX.png",
    "name": "Jacksonville Jaguars",
    "depthchart": "",
    "team": "Jacksonville Jaguars",
    "projected": 4.9,
    "opponent": "Minnesota Vikings",
    "opp_rank_pts": 12,
    "opp_avg_pts": 26.55,
    "home_away": "at ",
    "team_rank_allowed_pts": 30,
    "team_avg_allowed_pts": 29.55,
    "team_ranked_takeaways": 19,
    "team_avg_takeaways": 1.27,
    "opp_ranked_giveaways": 22,
    "opp_avg_giveaways": 1.55,
    "fanduelSalary": "$2000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#006778",
    "tmColorDark": "#101820",
    "tmTextLite": "#006778",
    "tmColorLite_rgba": "rgba(0, 103, 120, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/jax.png",
    "headlineNews": "Jaguars DT DaVon Hamilton (knee) is out for Week 13 against the Vikings.\n",
    "report": "",
    "analysis": "Third-round rookie Hamilton was carted off in Week 12 and didn't practice all week. He's week to week. It's poor timing with the tanking Jaguars facing Dalvin Cook on Sunday.\u00a0\n",
    "timestamp": "",
    "source": null,
    "avg_fp2": 3.0,
    "week01": 6.0,
    "week02": 0.0,
    "week03": 0.0,
    "week04": 2.0,
    "week05": 4.0,
    "week06": 3.0,
    "week07": -3.0,
    "week08": "BYE",
    "week09": 4.0,
    "week10": 11.0,
    "week11": 2.0,
    "week12": 4.0,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.0, 0.0, 0.0, 2.0, 4.0, 3.0, -3.0, 'BYE', 4.0, 11.0, 2.0, 4.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.8, 5.3, 7.0, 5.6, 6.1, 7.9, 3.6, 'BYE', 6.1, 4.1, 6.2, 5.5, 4.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.9, 0.0, 0.6, 1.2, 1.3, 0.4, 0.5, 'BYE', 0.3, 0.7, 1.2, 0.4, 0.5]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 103, 120, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.0, 12.8, 12.5, 12.3, 12.0, 11.9, 12.7, 'BYE', 11.7, 12.2, 11.6, 12.0, 12.1]
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
    "opponent": "Cleveland Browns",
    "opp_rank_pts": 18,
    "opp_avg_pts": 23.91,
    "home_away": "",
    "team_rank_allowed_pts": 21,
    "team_avg_allowed_pts": 25.91,
    "team_ranked_takeaways": 27,
    "team_avg_takeaways": 0.82,
    "opp_ranked_giveaways": 13,
    "opp_avg_giveaways": 1.27,
    "fanduelSalary": "$2900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#4495D1",
    "tmColorDark": "#002A5C",
    "tmTextLite": "#4495D1",
    "tmColorLite_rgba": "rgba(68, 149, 209, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 92, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png",
    "headlineNews": "Titans CB Adoree' Jackson (knee) is out for Week 12 against the Colts.\n",
    "report": "",
    "analysis": "Jackson hasn't played this season and didn't practice this week either. He's still week to week with his lingering knee injury, and the team obviously believes he has a chance to play as he hasn't been sent to the injured reserve again. The Titans defense has been exposed by quality offenses all season.\n",
    "timestamp": "",
    "source": null,
    "avg_fp2": 4.64,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.0, 5.0, 7.0, 'BYE', 8.0, 2.0, 6.0, -1.0, 8.0, 0.0, 3.0, 10.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.9, 7.2, 5.7, 'BYE', 6.1, 6.1, 5.7, 6.4, 6.4, 4.5, 5.3, 4.4, 4.9]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.9, 0.6, 1.3, 'BYE', 0.0, 1.6, 0.5, 0.3, 0.9, 0.2, 0.0, 0.0, 0.0]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.2, 12.9, 13.5, 'BYE', 13.7, 12.6, 13.3, 13.1, 13.6, 12.5, 13.3, 10.6, 13.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/WAS.png",
    "name": "Washington Football Team",
    "depthchart": "",
    "team": "Washington Football Team",
    "projected": 4.7,
    "opponent": "Pittsburgh Steelers",
    "opp_rank_pts": 7,
    "opp_avg_pts": 28.64,
    "home_away": "at ",
    "team_rank_allowed_pts": 7,
    "team_avg_allowed_pts": 22.09,
    "team_ranked_takeaways": 25,
    "team_avg_takeaways": 1.09,
    "opp_ranked_giveaways": 32,
    "opp_avg_giveaways": 1.91,
    "fanduelSalary": "$2700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#773141",
    "tmTextLite": "#FFB612",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(119, 49, 65, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png",
    "headlineNews": "ESPN's Adam Schefter reports Washington DE Ryan Kerrigan has requested a trade but Washington has told teams they won't be moving him.\u00a0\n",
    "report": "",
    "analysis": "Kerrigan has only played on more than half of Washington's defensive snaps twice this year and the team only listed him as a starter once. He has still managed to net four sacks despite the decrease in playing time. Kerrigan has taken a back seat to Chase Young and Montez Sweat but is still producing when given the chance. He will likely be a priority free agent signing by many teams looking to add a veteran pass rusher in the spring.\u00a0\n",
    "timestamp": "",
    "source": "Adam Schefter on Twitter",
    "avg_fp2": 6.64,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [13.0, 4.0, 1.0, 4.0, 2.0, 6.0, 17.0, 'BYE', 5.0, 0.0, 12.0, 9.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.8, 5.8, 6.7, 5.3, 6.5, 5.4, 5.5, 'BYE', 6.0, 5.1, 7.1, 4.9, 4.7]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.2, 1.1, 0.9, 0.4, 0.0, 1.2, 2.4, 'BYE', 1.4, 0.8, 1.3, 1.2, 1.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.6, 11.7, 11.7, 11.2, 12.6, 11.4, 11.7, 'BYE', 11.5, 10.8, 11.1, 11.4, 11.9]
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
    "opponent": "San Francisco 49ers",
    "opp_rank_pts": 20,
    "opp_avg_pts": 23.73,
    "home_away": "at ",
    "team_rank_allowed_pts": 19,
    "team_avg_allowed_pts": 25.64,
    "team_ranked_takeaways": 8,
    "team_avg_takeaways": 1.55,
    "opp_ranked_giveaways": 25,
    "opp_avg_giveaways": 1.64,
    "fanduelSalary": "$2700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#005596",
    "tmTextLite": "#FFFFFF",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 85, 150, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
    "headlineNews": "Bills designated\u00a0LB Matt Milano (chest) to return from injured reserve.\n",
    "report": "",
    "analysis": "Milano will return to practice this week. That gives him a chance to play Monday night after\u00a0spending\u00a0the last month on IR. Getting Milano back is a welcomed addition as the\u00a0Bills enter the stretch run. Buffalo also designated LB\u00a0Tyrel Dodson to return from IR and promoted WR Jake Kumerow from the practice squad.\n",
    "timestamp": "",
    "source": null,
    "avg_fp2": 5.27,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.0, 2.0, 5.0, 6.0, -4.0, 1.0, 14.0, 4.0, 12.0, 6.0, 'BYE', 6.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.4, 8.7, 7.4, 6.3, 4.9, 4.8, 6.5, 6.4, 5.8, 4.8, 'BYE', 3.8, 4.6]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.1, 1.2, 1.4, 0.0, 1.1, 0.7, 1.0, 0.0, 0.4, 0.0, 'BYE', 0.6, 0.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.5, 14.4, 15.2, 12.2, 13.8, 13.8, 14.1, 14.3, 13.2, 13.1, 'BYE', 13.5, 13.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/DET.png",
    "name": "Detroit Lions",
    "depthchart": "",
    "team": "Detroit Lions",
    "projected": 4.5,
    "opponent": "Chicago Bears",
    "opp_rank_pts": 29,
    "opp_avg_pts": 19.64,
    "home_away": "at ",
    "team_rank_allowed_pts": 31,
    "team_avg_allowed_pts": 29.82,
    "team_ranked_takeaways": 21,
    "team_avg_takeaways": 1.18,
    "opp_ranked_giveaways": 5,
    "opp_avg_giveaways": 1.0,
    "fanduelSalary": "$2500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#0076B6",
    "tmColorDark": "#000000",
    "tmTextLite": "#0076B6",
    "tmColorLite_rgba": "rgba(0, 118, 182, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/det.png",
    "headlineNews": "Lions CB Jeffrey Okudah (shoulder) is out for Week 13 against the Bears.\n",
    "report": "",
    "analysis": "Okudah has been dealing with various injuries throughout his rookie season and has been a relative disappointment as the Lions' No. 3\u00a0overall pick. Fortunately for Okudah, he's a 21-year-old rookie that should improve greatly with more reps. For Week 13, Allen Robinson and company will face a defense that's missing their top two corners in Okudah and Desmond Trufant (IR).\n",
    "timestamp": "",
    "source": null,
    "avg_fp2": 1.91,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.0, -3.0, 7.0, 0.0, 'BYE', 4.0, 4.0, -2.0, 0.0, 4.0, 6.0, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.7, 4.8, 4.3, 4.7, 'BYE', 6.9, 3.9, 6.2, 5.1, 5.7, 4.7, 4.7, 4.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.1, 0.3, 0.1, 0.1, 'BYE', 0.1, 0.0, 0.6, 0.4, 0.2, 0.0, 0.4, 0.3]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 118, 182, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.1, 12.6, 12.7, 12.8, 'BYE', 12.0, 11.3, 12.4, 12.6, 13.1, 12.7, 11.9, 13.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/NE.png",
    "name": "New England Patriots",
    "depthchart": "",
    "team": "New England Patriots",
    "projected": 4.5,
    "opponent": "Los Angeles Chargers",
    "opp_rank_pts": 15,
    "opp_avg_pts": 25.18,
    "home_away": "at ",
    "team_rank_allowed_pts": 12,
    "team_avg_allowed_pts": 23.18,
    "team_ranked_takeaways": 8,
    "team_avg_takeaways": 1.55,
    "opp_ranked_giveaways": 8,
    "opp_avg_giveaways": 1.09,
    "fanduelSalary": "$2400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#002244",
    "tmTextLite": "#C60C30",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png",
    "headlineNews": "Patriots CB\u00a0Stephon Gilmore (hand) was limited at Wednesday's practice.\u00a0\n",
    "report": "",
    "analysis": "Gilmore's hand issue is new. He missed three games this season with a knee injury, returning in Week 11 against Houston. Gilmore should be fine for this week's game against the Cardinals barring a setback in practice. Without Gilmore, Kyler Murray's matchup gets that much better.\u00a0\n",
    "timestamp": "",
    "source": "Mike Reiss on Twitter ",
    "avg_fp2": 4.82,
    "week01": 11.0,
    "week02": 0.0,
    "week03": 9.0,
    "week04": 4.0,
    "week05": "BYE",
    "week06": 9.0,
    "week07": 4.0,
    "week08": 3.0,
    "week09": 3.0,
    "week10": 5.0,
    "week11": 0.0,
    "week12": 5.0,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.0, 0.0, 9.0, 4.0, 'BYE', 9.0, 4.0, 3.0, 3.0, 5.0, 0.0, 5.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.2, 7.7, 6.5, 4.4, 'BYE', 8.3, 6.9, 7.1, 9.3, 6.2, 7.2, 6.4, 4.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.5, 2.3, 1.4, 0.9, 'BYE', 1.5, 2.7, 2.2, 2.7, 1.5, 1.8, 1.0, 1.6]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.9, 15.6, 11.5, 13.1, 'BYE', 14.5, 15.7, 14.8, 15.4, 13.4, 13.5, 13.2, 13.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/NYG.png",
    "name": "New York Giants",
    "depthchart": "",
    "team": "New York Giants",
    "projected": 4.3,
    "opponent": "Seattle Seahawks",
    "opp_rank_pts": 3,
    "opp_avg_pts": 30.82,
    "home_away": "at ",
    "team_rank_allowed_pts": 10,
    "team_avg_allowed_pts": 23.0,
    "team_ranked_takeaways": 5,
    "team_avg_takeaways": 1.64,
    "opp_ranked_giveaways": 13,
    "opp_avg_giveaways": 1.27,
    "fanduelSalary": "$2200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#A71930",
    "tmColorDark": "#0B2265",
    "tmTextLite": "#A71930",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(11, 34, 101, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png",
    "headlineNews": "Giants placed OLB\u00a0Kyler Fackrell on injured reserve with a calf injury.\u00a0\n",
    "report": "",
    "analysis": "Free agent addition\u00a0Fackrell has been an every-down player this season. He is now ineligible to return before Week 16.\u00a0Fackrell's absence will be a negative for the Giants' run defense as they try to win the horrid NFC East.\u00a0\n",
    "timestamp": "",
    "source": "Art Stapleton on Twitter ",
    "avg_fp2": 5.73,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.0, 9.0, -2.0, 5.0, 2.0, 12.0, 5.0, 4.0, 13.0, 4.0, 'BYE', 9.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.0, 4.7, 5.9, 5.4, 5.9, 6.9, 5.1, 7.0, 7.6, 5.4, 'BYE', 6.5, 4.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.1, 0.4, 1.0, 1.3, 0.0, 1.3, 1.0, 0.7, 1.3, 0.8, 'BYE', 1.1, 0.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.1, 14.0, 13.6, 13.4, 16.2, 13.5, 13.8, 13.9, 14.0, 13.6, 'BYE', 13.9, 13.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/DEN.png",
    "name": "Denver Broncos",
    "depthchart": "",
    "team": "Denver Broncos",
    "projected": 4.3,
    "opponent": "Kansas City Chiefs",
    "opp_rank_pts": 2,
    "opp_avg_pts": 31.64,
    "home_away": "at ",
    "team_rank_allowed_pts": 23,
    "team_avg_allowed_pts": 26.91,
    "team_ranked_takeaways": 2,
    "team_avg_takeaways": 2.0,
    "opp_ranked_giveaways": 25,
    "opp_avg_giveaways": 1.64,
    "fanduelSalary": "$1900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#e17757",
    "tmColorDark": "#002244",
    "tmTextLite": "#e17757",
    "tmColorLite_rgba": "rgba(225, 119, 87, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/den.png",
    "headlineNews": "Broncos placed CB Bryce Callahan (foot) on injured reserve.\n",
    "report": "",
    "analysis": "\"Foot injury\" and \"Bryce Callahan\" has almost become synonymous since he signed with Denver. He missed all of last season with foot complications after injuring it in his last season with the Bears. Callahan again went down in Week 12 and will miss at least the next three weeks.\n",
    "timestamp": "",
    "source": null,
    "avg_fp2": 4.73,
    "week01": 4.0,
    "week02": 5.0,
    "week03": 3.0,
    "week04": 6.0,
    "week05": "BYE",
    "week06": 12.0,
    "week07": 2.0,
    "week08": 5.0,
    "week09": 3.0,
    "week10": -4.0,
    "week11": 12.0,
    "week12": 4.0,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.0, 5.0, 3.0, 6.0, 'BYE', 12.0, 2.0, 5.0, 3.0, -4.0, 12.0, 4.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.6, 5.2, 6.5, 6.9, 'BYE', 5.0, 5.7, 5.2, 4.6, 5.1, 6.9, 4.9, 4.3]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.3, 1.5, 2.0, 1.4, 'BYE', 1.3, 1.3, 1.4, 1.0, 1.4, 1.3, 0.3, 0.9]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(225, 119, 87, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.0, 13.4, 13.2, 13.3, 'BYE', 12.7, 13.7, 13.6, 12.9, 12.8, 13.4, 13.6, 12.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/PHI.png",
    "name": "Philadelphia Eagles",
    "depthchart": "",
    "team": "Philadelphia Eagles",
    "projected": 3.5,
    "opponent": "Green Bay Packers",
    "opp_rank_pts": 1,
    "opp_avg_pts": 31.73,
    "home_away": "at ",
    "team_rank_allowed_pts": 16,
    "team_avg_allowed_pts": 25.18,
    "team_ranked_takeaways": 1,
    "team_avg_takeaways": 2.09,
    "opp_ranked_giveaways": 8,
    "opp_avg_giveaways": 1.09,
    "fanduelSalary": "$2300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#386168",
    "tmColorDark": "#004C54",
    "tmTextLite": "#FFFFFF",
    "tmColorLite_rgba": "rgba(56, 97, 104, 0.2)",
    "tmColorDark_rgba": "rgba(0, 76, 84, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    "headlineNews": "Eagles CB\u00a0Darius Slay (calf) is questionable for Week 13 against the\u00a0Packers.\n",
    "report": "",
    "analysis": "Slay, who's expected to shadow Davante Adams if healthy, being absent would be less than ideal for Philadelphia, even after his worst performance of the season opposite D.K. Metcalf. The Eagles\u00a0have\u00a0actually allowed the ninth-fewest fantasy points to opposing quarterbacks but Aaron Rodgers still projects as an elite QB1 whether Slay is active or not.\n",
    "timestamp": "",
    "source": "Mike Kaye on Twitter",
    "avg_fp2": 6.64,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.0, 1.0, 8.0, 12.0, -1.0, 14.0, 9.0, 14.0, 'BYE', 3.0, 8.0, 2.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.0, 7.2, 7.1, 6.1, 6.1, 6.4, 7.2, 7.8, 'BYE', 6.1, 7.8, 4.6, 3.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.9, 0.8, 3.4, 1.7, 2.2, 1.5, 2.1, 1.4, 'BYE', 2.3, 2.1, 1.5, 1.8]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.3, 12.9, 15.0, 13.7, 14.6, 14.2, 14.4, 14.7, 'BYE', 14.6, 14.5, 14.2, 13.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/CLE.png",
    "name": "Cleveland Browns",
    "depthchart": "",
    "team": "Cleveland Browns",
    "projected": 2.5,
    "opponent": "Tennessee Titans",
    "opp_rank_pts": 5,
    "opp_avg_pts": 29.45,
    "home_away": "at ",
    "team_rank_allowed_pts": 17,
    "team_avg_allowed_pts": 25.45,
    "team_ranked_takeaways": 17,
    "team_avg_takeaways": 1.36,
    "opp_ranked_giveaways": 8,
    "opp_avg_giveaways": 1.09,
    "fanduelSalary": "$2500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "tmColorLite": "#FF3C00",
    "tmColorDark": "#311D00",
    "tmTextLite": "#FF3C00",
    "tmColorLite_rgba": "rgba(255, 60, 0, 0.2)",
    "tmColorDark_rgba": "rgba(49, 29, 0, 0.2)",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
    "headlineNews": "Browns CB Denzel Ward (calf) won't play in Week 13 against the Titans.\n",
    "report": "",
    "analysis": "A pass funnel defense for most of 2020, Ward's continued absence doesn't do the Browns any favors in the week's highest total (53.5) opposite Tennessee. A.J. Brown,\u00a0Corey Davis, and Anthony Firkser (sans Jonnu Smith) are all\u00a0terrific options against Cleveland's thin secondary Sunday.\n",
    "timestamp": "",
    "source": "Scott Petrak on Twitter",
    "avg_fp2": 5.36,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [-2.0, 4.0, 14.0, 5.0, 7.0, 1.0, 7.0, 3.0, 'BYE', 6.0, 14.0, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.6, 6.5, 7.5, 4.4, 6.0, 5.1, 5.6, 7.5, 'BYE', 6.1, 7.3, 6.2, 2.5]
                    },
                    {
                        label: "68% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.3, 1.0, 1.1, 1.6, 1.4, 0.0, 0.9, 0.0, 'BYE', 0.9, 1.1, 1.4, 0.7]
                    },
                    {
                        label: "68% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.5, 11.8, 11.8, 12.7, 11.3, 13.6, 11.2, 10.3, 'BYE', 11.9, 10.4, 11.7, 11.0]
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