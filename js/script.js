var App = angular.module('footballApp', ['tc.chartjs']);

App.controller('positionController', function($scope, $http) {

  //JSON data for position and players

/*********************** PASTE AFTER HERE ************************/

$scope.currentDate = {"currentDate": "Monday, 30 December 2019 01:35 PM (central time)"};
$scope.week = {"nflWeek": 17};

$scope.qbStartSit = {"one": "Jared Goff", "two": "Ryan Tannehill", "three": "Tom Brady", "four": "Matt Ryan", "five": "Carson Wentz", "six": "Robert Griffin", "seven": "Devlin Hodges", "eight": "Ryan Fitzpatrick", "nine": "Sean Mannion", "ten": "Sam Darnold"};
$scope.rbStartSit = {"one": "Alvin Kamara", "two": "Ezekiel Elliott", "three": "Nick Chubb", "four": "Marlon Mack", "five": "Aaron Jones", "six": "Patrick Laird", "seven": "Devonta Freeman", "eight": "Ryquell Armstead", "nine": "Gus Edwards", "ten": "Mike Boone"};
$scope.wrStartSit = {"one": "Julio Jones", "two": "Julian Edelman", "three": "Davante Adams", "four": "Robert Woods", "five": "A.J. Brown", "six": "DeVante Parker", "seven": "Robby Anderson", "eight": "Willie Snead", "nine": "Tyreek Hill", "ten": "Tyrell Williams"};
$scope.teStartSit = {"one": "George Kittle", "two": "Tyler Higbee", "three": "Austin Hooper", "four": "Darren Fells", "five": "Jonnu Smith", "six": "Daniel Brown", "seven": "Vance McDonald", "eight": "Jacob Hollister", "nine": "Mike Gesicki", "ten": "Hayden Hurst"};
$scope.dstStartSit = {"one": "Cleveland Browns", "two": "Dallas Cowboys", "three": "Buffalo Bills", "four": "Minnesota Vikings", "five": "Indianapolis Colts", "six": "Pittsburgh Steelers", "seven": "Seattle Seahawks", "eight": "Atlanta Falcons", "nine": "Los Angeles Chargers", "ten": "Carolina Panthers"};

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
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4038524.png",
    "name": "Gardner Minshew",
    "depthchart": "Starter: QB-1",
    "team": "Jacksonville Jaguars",
    "projected": 24.2,
    "opponent": "Indianapolis Colts",
    "home_away": "",
    "opp_rank_Neu": 22,
    "team_rank_Neu": 16,
    "avg_fp2": 16.44,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 18.82,
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
    "headlineNews": "Minshew Mania ends on high note",
    "report": "Minshew (shoulder) completed 27 of 39 pass attempts for 295 yards, three touchdowns and an interception in Sunday's 38-20 win over the Colts.",
    "analysis": "Minshew provided one of Week 17's biggest surprises when you consider he entered the game nursing an injured shoulder while also coming off of his worst performance of the season last week against Atlanta (13 of 31 for 181 yards). Filling in for the injured Nick Foles to begin the year, the 2019 sixth-round pick created a huge buzz with some strong fantasy performances coupled with his unorthodox sense of style, thus creating 'Minshew Mania.' The Jaguars signed Foles to a huge four-year, $88 million contract this past offseason, money that could dictate giving him another chance to start in 2020, but Minshew showed the team that he is a capable NFL quarterback (60.6 completion percentage, 3,271 passing yards, 21 touchdowns and six interceptions in 14 games), and he appears to have a higher fantasy ceiling due to his ability to chip in some rushing stats (344 rushing yards).",
    "timestamp": "2019-12-29 06:55 PM",
    "week01": "DNP",
    "week02": 16.12,
    "week03": 17.96,
    "week04": 16.72,
    "week05": 21.16,
    "week06": 5.62,
    "week07": 23.0,
    "week08": 23.96,
    "week09": 9.76,
    "week10": "BYE",
    "week11": "DNP",
    "week12": "DNP",
    "week13": "DNP",
    "week14": 13.58,
    "week15": 18.74,
    "week16": 14.84,
    "week17": ""
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
                         data: ['DNP', 16.12, 17.96, 16.72, 21.16, 5.62, 23.0, 23.96, 9.76, 'BYE', 'DNP', 'DNP', 'DNP', 13.58, 18.74, 14.84]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 15.4, 15.4, 9.3, 13.3, 19.5, 22.7, 13.5, 22.9, 'BYE', 'DNP', 'DNP', 'DNP', 17.5, 15.5, 18.7, 24.2]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 16.0, 14.5, 14.7, 14.4, 17.2, 8.8, 10.3, 8.2, 'BYE', 'DNP', 'DNP', 'DNP', 5.1, 5.7, 10.9, 13.6]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 103, 120, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 19.5, 16.0, 15.9, 16.4, 18.4, 24.7, 22.1, 28.1, 'BYE', 'DNP', 'DNP', 'DNP', 25.8, 25.7, 26.0, 22.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2577417.png",
    "name": "Dak Prescott",
    "depthchart": "Starter: QB-1",
    "team": "Dallas Cowboys",
    "projected": 22.8,
    "opponent": "Washington Redskins",
    "home_away": "",
    "opp_rank_Neu": 14,
    "team_rank_Pos": 2,
    "avg_fp2": 21.41,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 19.69,
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
    "headlineNews": "Big finish to campaign",
    "report": "Prescott completed 23 of 33 passes for 303 yards and four touchdowns in Sunday's 47-16 win over Washington.",
    "analysis": "Early in the game it appeared as though Prescott's sore shoulder was limiting his ability to attack downfield, but once he got loose he took the Washington secondary to the woodshed, finding Michael Gallup for three second-half TDs. Despite the QB's efforts, Dallas missed the playoffs, but he earned himself significantly more money in free agency -- assuming he doesn't get saddled with the franchise tag -- by finishing the season having completed 65.1 percent of his passes for 4,902 yards, a 30:11 TD:INT and 8.2 YPA. It seems highly unlikely that he'll be in another uniform in 2020, but whether Prescott is able to repeat his breakout performance could depend on the changes Dallas is expected to make to its coaching staff.",
    "timestamp": "2019-12-29 06:21 PM",
    "week01": 33.4,
    "week02": 28.66,
    "week03": 23.54,
    "week04": 8.62,
    "week05": 26.22,
    "week06": 18.18,
    "week07": 21.56,
    "week08": "BYE",
    "week09": 22.48,
    "week10": 26.88,
    "week11": 31.56,
    "week12": 7.88,
    "week13": 25.7,
    "week14": 17.46,
    "week15": 17.68,
    "week16": 11.3,
    "week17": ""
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
                         data: [33.4, 28.66, 23.54, 8.62, 26.22, 18.18, 21.56, 'BYE', 22.48, 26.88, 31.56, 7.88, 25.7, 17.46, 17.68, 11.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.3, 17.9, 24.1, 18.8, 17.5, 15.3, 19.1, 'BYE', 16.9, 15.6, 15.4, 16.9, 16.2, 17.5, 20.7, 17.6, 22.8]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [12.8, 10.9, 14.5, 16.1, 15.5, 9.5, 11.4, 'BYE', 10.8, 9.7, 16.4, 22.5, 15.0, 15.3, 14.6, 10.1, 18.9]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  "rgba(127, 150, 149, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [32.4, 31.4, 29.6, 24.3, 26.7, 20.8, 27.7, 'BYE', 29.3, 20.8, 29.3, 33.8, 33.5, 29.7, 24.9, 27.6, 36.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2573079.png",
    "name": "Carson Wentz",
    "depthchart": "Starter: QB-1",
    "team": "Philadelphia Eagles",
    "projected": 21.8,
    "opponent": "New York Giants",
    "home_away": "at ",
    "opp_rank_Pos": 26,
    "team_rank_Neu": 12,
    "avg_fp2": 17.99,
    "opp_rank_allowed_fp2_Pos": 30,
    "opp_avg_allowed_fp2": 21.6,
    "fanduelSalary": "$7700",
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
    "week17": ""
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
                         data: [25.02, 21.54, 21.66, 19.7, 12.06, 21.54, 7.84, 14.38, 15.06, 'BYE', 12.26, 10.94, 27.4, 19.9, 21.54, 18.96]
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
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2969939.png",
    "name": "Jameis Winston",
    "depthchart": "Starter: QB-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 21.5,
    "opponent": "Atlanta Falcons",
    "home_away": "",
    "opp_rank_Neu": 23,
    "team_rank_Pos": 1,
    "avg_fp2": 21.52,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 21.24,
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
    "headlineNews": "Future in Tampa uncertain",
    "report": "Coach Bruce Arians said Monday that a decision on Winston's status with the organization heading into the 2020 season will likely be made within the next couple of weeks, though the Buccaneers aren't expected to publicly announce their plans for the quarterback until March, Rick Stroud of the Tampa Bay Times reports.",
    "analysis": "After completing his first year on the job for Tampa Bay, Arians didn't exactly offer up a ringing endorsement for Winston, who became the first player in NFL history to throw for 30 touchdowns and 30 interceptions in a season. According to Stroud, Arians told the media that Winston is \"bright\" and \"hard working,\" but also noted the Buccaneers can also win with another quarterback. With Tampa Bay expected to make inking wideout Chris Godwin to an extension a priority this offseason, Winston -- if retained -- would be more logical choice for the Bucs' franchise tag rather than a candidate to re-sign on a long-term deal. If the organization determines Winston isn't the answer for 2020, expect the team to turn its attention to the trade market or free agency for a starting quarterback, and/or address the position with the No. 14 overall pick in April's draft.",
    "timestamp": "2019-12-30 10:38 AM",
    "week01": 10.06,
    "week02": 13.22,
    "week03": 26.5,
    "week04": 30.3,
    "week05": 17.46,
    "week06": 19.1,
    "week07": "BYE",
    "week08": 23.34,
    "week09": 20.2,
    "week10": 20.32,
    "week11": 18.82,
    "week12": 26.32,
    "week13": 10.72,
    "week14": 37.74,
    "week15": 33.72,
    "week16": 15.0,
    "week17": ""
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
                         data: [10.06, 13.22, 26.5, 30.3, 17.46, 19.1, 'BYE', 23.34, 20.2, 20.32, 18.82, 26.32, 10.72, 37.74, 33.72, 15.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [20.1, 18.6, 19.1, 12.8, 17.9, 18.9, 'BYE', 17.3, 24.5, 22.0, 19.5, 15.9, 20.5, 20.0, 15.5, 19.3, 21.5]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [13.4, 21.2, 15.6, 8.8, 12.5, 9.3, 'BYE', 6.7, 8.7, 9.8, 8.3, 15.9, 11.6, 8.6, 9.6, 10.3, 12.6]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(213, 10, 10, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [23.9, 31.3, 23.1, 21.5, 27.4, 30.4, 'BYE', 23.1, 24.1, 21.9, 17.8, 23.3, 19.6, 23.3, 22.8, 35.8, 29.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3139477.png",
    "name": "Patrick Mahomes",
    "depthchart": "Starter: QB-1",
    "team": "Kansas City Chiefs",
    "projected": 21.1,
    "opponent": "Los Angeles Chargers",
    "home_away": "",
    "opp_rank_Neg": 4,
    "team_rank_Pos": 4,
    "avg_fp2": 21.54,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 14.67,
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
    "week17": ""
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
                         data: [27.32, 31.62, 27.86, 18.0, 18.54, 19.82, 7.24, 'DNP', 'DNP', 29.84, 16.18, 'BYE', 19.5, 14.92, 23.7, 25.44]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [20.9, 21.0, 22.8, 27.2, 24.3, 25.3, 19.0, 'DNP', 'DNP', 22.9, 19.5, 'BYE', 21.0, 19.2, 21.3, 20.3, 21.1]
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
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2330.png",
    "name": "Tom Brady",
    "depthchart": "Starter: QB-1",
    "team": "New England Patriots",
    "projected": 20.7,
    "opponent": "Miami Dolphins",
    "home_away": "",
    "opp_rank_Pos": 28,
    "team_rank_Neu": 9,
    "avg_fp2": 17.04,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 22.67,
    "fanduelSalary": "$7600",
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
    "week17": ""
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
                         data: [25.64, 24.66, 20.14, 4.7, 24.92, 22.96, 12.96, 18.36, 14.1, 'BYE', 8.54, 11.3, 25.34, 11.76, 12.92, 17.24]
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
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14881.png",
    "name": "Russell Wilson",
    "depthchart": "Starter: QB-1",
    "team": "Seattle Seahawks",
    "projected": 19.8,
    "opponent": "San Francisco 49ers",
    "home_away": "",
    "opp_rank_Neg": 1,
    "team_rank_Neu": 11,
    "avg_fp2": 21.03,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 15.98,
    "fanduelSalary": "$14500",
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
    "week17": ""
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
                         data: [16.64, 24.2, 41.34, 14.3, 29.92, 28.9, 15.34, 15.68, 41.22, 17.58, 'BYE', 10.5, 17.9, 11.6, 19.34, 10.96]
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
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116188.png",
    "name": "David Blough",
    "depthchart": "Starter: QB-1",
    "team": "Detroit Lions",
    "projected": 18.1,
    "opponent": "Green Bay Packers",
    "home_away": "",
    "opp_rank_Neu": 18,
    "team_rank_Neu": 8,
    "avg_fp2": 11.87,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 14.41,
    "fanduelSalary": "$6600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0076B6",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(0, 118, 182, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#0076B6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/det.png",
    "headlineNews": "Can't get going against Packers",
    "report": "Blough completed 12 of 29 pass attempts for 122 yards and an interception in the team's Week 17 loss to the Lions. He added one reception for 19 yards and a touchdown.",
    "analysis": "Blough's most meaningful contribution to the game came halfway through the first quarter when he caught a 19-yard touchdown from Danny Amendola. Otherwise, he struggled to move the offense, completing only three passes of 10 yards or more. After turning in a surprising performance on Thanksgiving against the Bears, Blough completed only 72 of 136 pass attempts for 704 yards, four touchdowns and six interceptions across his last four games. Though he may have a future in the league as a backup, Blough is unlikely to retain the starting role in Detroit with Matthew Stafford (back/hip) slated to return in 2020.",
    "timestamp": "2019-12-29 05:04 PM",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "BYE",
    "week06": "DNP",
    "week07": "DNP",
    "week08": "DNP",
    "week09": "DNP",
    "week10": "DNP",
    "week11": "DNP",
    "week12": "DNP",
    "week13": 18.3,
    "week14": 10.2,
    "week15": 10.3,
    "week16": 8.68,
    "week17": ""
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
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 18.3, 10.2, 10.3, 8.68]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 12.9, 15.6, 13.6, 15.6, 18.1]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 11.9, 15.1, 15.7, 12.0, 12.3]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 118, 182, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 12.9, 15.8, 16.7, 13.3, 14.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3046779.png",
    "name": "Jared Goff",
    "depthchart": "Starter: QB-1",
    "team": "Los Angeles Rams",
    "projected": 17.3,
    "opponent": "Arizona Cardinals",
    "home_away": "",
    "opp_rank_Pos": 31,
    "team_rank_Pos": 5,
    "avg_fp2": 15.89,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 23.02,
    "fanduelSalary": "$7900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Three TD passes to wrap up 9-7 year",
    "report": "Goff completed 29 of 45 pass attempts for 319 yards and three touchdowns during Sunday's 31-24 win against the Cardinals.",
    "analysis": "The 2016 No. 1 overall draft choice struggled with giveaways as his 22:16 TD:INT paled in comparison to the 32:12 mark he established last season, but Goff still proved capable of exceeding 4,600 passing yards for a second consecutive campaign. Though sitting home during the postseason is undeniably a disappointing result for the reigning NFC champions, Los Angeles still managed to finish as a winning team for a third straight year, while Goff's record as a starter under coach Sean McVay grew to 35-16 in the wake of a miserable 0-7 rookie campaign under Jeff Fisher. With McVay still in place and a cast of explosive playmakers at his disposal, Goff seems poised for another solid year in 2020. The main concern is Los Angeles' offensive line; the Rams' front ranked second best in the NFL with just 1.4 sacks surrendered per game, but the contracts of starters Andrew Whitworth and Austin Blythe will expire over the upcoming offseason.",
    "timestamp": "2019-12-29 06:37 PM",
    "week01": 10.44,
    "week02": 19.12,
    "week03": 16.16,
    "week04": 23.68,
    "week05": 18.9,
    "week06": 1.12,
    "week07": 25.02,
    "week08": 22.88,
    "week09": "BYE",
    "week10": 5.72,
    "week11": 6.22,
    "week12": 6.38,
    "week13": 24.96,
    "week14": 18.12,
    "week15": 18.56,
    "week16": 21.12,
    "week17": ""
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
                         data: [10.44, 19.12, 16.16, 23.68, 18.9, 1.12, 25.02, 22.88, 'BYE', 5.72, 6.22, 6.38, 24.96, 18.12, 18.56, 21.12]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.5, 21.5, 10.6, 17.6, 20.5, 10.4, 21.8, 21.2, 'BYE', 15.8, 14.6, 10.4, 14.1, 12.9, 16.6, 7.2, 17.3]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [14.0, 14.4, 9.0, 14.6, 6.9, 7.9, 6.6, 15.4, 'BYE', 11.5, 0.5, 2.6, 10.6, 4.2, 5.5, 3.5, 20.4]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [23.8, 28.6, 32.4, 26.6, 19.5, 22.1, 23.8, 25.6, 'BYE', 18.4, 17.3, 16.6, 24.4, 22.1, 20.7, 19.5, 27.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/8439.png",
    "name": "Aaron Rodgers",
    "depthchart": "Starter: QB-1",
    "team": "Green Bay Packers",
    "projected": 17.2,
    "opponent": "Detroit Lions",
    "home_away": "at ",
    "opp_rank_Pos": 32,
    "team_rank_Neu": 19,
    "avg_fp2": 17.62,
    "opp_rank_allowed_fp2_Pos": 24,
    "opp_avg_allowed_fp2": 20.86,
    "fanduelSalary": "$8300",
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
    "week17": ""
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
                         data: [12.92, 14.36, 13.3, 26.48, 9.42, 19.32, 43.76, 27.1, 12.94, 10.02, 'BYE', 11.46, 28.12, 11.4, 14.42, 9.34]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [21.7, 21.8, 15.1, 18.7, 19.0, 21.3, 24.7, 19.0, 15.5, 22.1, 'BYE', 14.1, 23.0, 23.7, 21.9, 16.8, 17.2]
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
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3917792.png",
    "name": "Daniel Jones",
    "depthchart": "Starter: QB-1",
    "team": "New York Giants",
    "projected": 16.9,
    "opponent": "Philadelphia Eagles",
    "home_away": "",
    "opp_rank_Neu": 19,
    "team_rank_Neu": 18,
    "avg_fp2": 17.94,
    "opp_rank_allowed_fp2_Neu": 14,
    "opp_avg_allowed_fp2": 17.17,
    "fanduelSalary": "$7500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#0B2265",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(11, 34, 101, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png",
    "headlineNews": "Tops 300 yards in season finale",
    "report": "Jones completed 28 of 47 passes for 301 yards and a touchdown with one interception in Sunday's 34-17 loss to the Eagles.",
    "analysis": "He also gained 26 rushing yards on three carries but committed two more fumbles, losing one of them. Ball security was a major issue for the rookie -- he finished 2019 with 12 INTs and 11 lost fumbles in 13 games (12 starts) -- but otherwise Jones gave the Giants reason to believe they've found the long-term successor to Eli Manning, as he completed 61.9 percent of his passes for 3,027 yards and 24 touchdowns, albeit with a modest 6.6 YPA. With Saquon Barkley in the backfield, Jones doesn't need to carry the offense on his own, but if he can reduce his turnovers in 2020 he should have the receiving weapons around him to put together a strong fantasy campaign.",
    "timestamp": "2019-12-29 06:44 PM",
    "week01": "DNP",
    "week02": "DNP",
    "week03": 36.24,
    "week04": 14.3,
    "week05": 11.48,
    "week06": 8.24,
    "week07": 11.42,
    "week08": 28.18,
    "week09": 12.8,
    "week10": 32.32,
    "week11": "BYE",
    "week12": 14.7,
    "week13": 11.2,
    "week14": "DNP",
    "week15": "DNP",
    "week16": 35.28,
    "week17": ""
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
                         data: ['DNP', 'DNP', 36.24, 14.3, 11.48, 8.24, 11.42, 28.18, 12.8, 32.32, 'BYE', 14.7, 11.2, 'DNP', 'DNP', 35.28]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 12.9, 18.3, 17.4, 13.5, 13.1, 10.0, 17.3, 17.3, 'BYE', 14.7, 19.0, 'DNP', 'DNP', 19.0, 16.9]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 11.3, 16.7, 15.9, 13.6, 16.3, 10.1, 7.2, 7.4, 'BYE', 4.4, 6.6, 'DNP', 'DNP', 7.5, 0.0]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 13.6, 17.6, 17.4, 15.0, 17.6, 14.5, 23.8, 20.3, 'BYE', 16.8, 34.7, 'DNP', 'DNP', 16.2, 31.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3052587.png",
    "name": "Baker Mayfield",
    "depthchart": "Starter: QB-1",
    "team": "Cleveland Browns",
    "projected": 16.6,
    "opponent": "Cincinnati Bengals",
    "home_away": "at ",
    "opp_rank_Neu": 21,
    "team_rank_Neu": 23,
    "avg_fp2": 15.27,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 20.99,
    "fanduelSalary": "$7400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FF3C00",
    "tmColorDark": "#311D00",
    "tmColorLite_rgba": "rgba(255, 60, 0, 0.2)",
    "tmColorDark_rgba": "rgba(49, 29, 0, 0.2)",
    "tmTextLite": "#FF3C00",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
    "headlineNews": "Trio of picks in season-ending loss",
    "report": "Mayfield completed 12 of 27 passes for 279 yards with three touchdowns and three interceptions in the Browns' 33-23 loss to the Bengals on Sunday. He also fumbled once but recovered.",
    "analysis": "Mayfield's final line was essentially a microcosm of his season -- some eye-catching plays interspersed with plenty of mistakes and inefficiency. The second-year signal-caller's disappointing sophomore campaign ends with Mayfield throwing at least one interception in six consecutive games and completing less than 50.0 percent of his passes in two of his last four contests. Especially given Sunday's results, it increasingly appears Mayfield will be playing under a new head coach and offensive system in 2020, but he'll have plenty to work on himself this offseason after getting picked off 21 times in 2019.",
    "timestamp": "2019-12-29 01:50 PM",
    "week01": 12.4,
    "week02": 16.0,
    "week03": 10.7,
    "week04": 16.78,
    "week05": 0.0,
    "week06": 24.46,
    "week07": "BYE",
    "week08": 12.56,
    "week09": 17.12,
    "week10": 17.62,
    "week11": 21.82,
    "week12": 24.58,
    "week13": 9.04,
    "week14": 12.98,
    "week15": 17.98,
    "week16": 15.08,
    "week17": ""
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
                         data: [12.4, 16.0, 10.7, 16.78, 0.0, 24.46, 'BYE', 12.56, 17.12, 17.62, 21.82, 24.58, 9.04, 12.98, 17.98, 15.08]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [20.1, 12.7, 18.3, 16.1, 12.2, 15.6, 'BYE', 12.9, 17.5, 12.0, 19.8, 25.9, 19.5, 17.9, 16.9, 15.6, 16.6]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [11.8, 9.4, 11.8, 11.2, 8.1, 9.9, 'BYE', 4.1, 5.2, 13.6, 10.9, 14.4, 10.1, 19.9, 17.3, 10.4, 11.9]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [23.9, 21.6, 21.9, 19.5, 20.7, 20.2, 'BYE', 27.0, 20.7, 23.6, 21.1, 25.2, 26.7, 26.5, 25.5, 18.9, 22.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14876.png",
    "name": "Ryan Tannehill",
    "depthchart": "Starter: QB-1",
    "team": "Tennessee Titans",
    "projected": 16.6,
    "opponent": "Houston Texans",
    "home_away": "at ",
    "opp_rank_Pos": 30,
    "team_rank_Neu": 22,
    "avg_fp2": 19.3,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 21.47,
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
    "week17": ""
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
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 20.18, 19.42, 25.04, 18.94, 'BYE', 32.36, 13.78, 28.54, 25.16, 23.68]
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
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14012.png",
    "name": "Andy Dalton",
    "depthchart": "Starter: QB-1",
    "team": "Cincinnati Bengals",
    "projected": 16.3,
    "opponent": "Cleveland Browns",
    "home_away": "",
    "opp_rank_Neu": 9,
    "team_rank_Neu": 16,
    "avg_fp2": 16.46,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 18.95,
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
    "headlineNews": "Accounts for two TDs in victory",
    "report": "Dalton completed 16 of 28 pass attempts for 190 yards, one touchdown and one interception during Sunday's 33-23 win over the Browns. He also carried eight times for 10 yards and an additional touchdown.",
    "analysis": "Dalton completed just over half his passes against a tough Cleveland secondary and was limited to 6.8 yards per attempt. He completed a 15-yard touchdown pass to T.J. Uzomah in the first quarter and added a five-yard rushing score in the second. It was a rather fitting way to cap off the season for Dalton, who has been wildly inconsistent throughout and finishes with a 16:14 TD:INT in 13 games. He's under contract through the 2020 season, but the team seems likely to consider its options for upgrading the quarterback position in the offseason.",
    "timestamp": "2019-12-29 03:06 PM",
    "week01": 20.72,
    "week02": 19.64,
    "week03": 16.06,
    "week04": 4.64,
    "week05": 18.98,
    "week06": 14.6,
    "week07": 21.34,
    "week08": 17.66,
    "week09": "BYE",
    "week10": "DNP",
    "week11": "DNP",
    "week12": "DNP",
    "week13": 13.32,
    "week14": 10.58,
    "week15": 6.14,
    "week16": 33.84,
    "week17": ""
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
                         data: [20.72, 19.64, 16.06, 4.64, 18.98, 14.6, 21.34, 17.66, 'BYE', 'DNP', 'DNP', 'DNP', 13.32, 10.58, 6.14, 33.84]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.4, 12.6, 13.2, 17.1, 14.3, 14.6, 16.9, 12.3, 'BYE', 'DNP', 'DNP', 'DNP', 19.1, 13.5, 17.0, 18.1, 16.3]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [8.9, 11.3, 9.4, 12.3, 12.4, 11.7, 11.7, 11.8, 'BYE', 'DNP', 'DNP', 'DNP', 8.9, 13.6, 9.0, 13.8, 9.9]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [20.8, 19.5, 17.7, 20.5, 20.5, 18.8, 19.4, 17.8, 'BYE', 'DNP', 'DNP', 'DNP', 24.5, 19.6, 17.3, 23.1, 18.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/5529.png",
    "name": "Philip Rivers",
    "depthchart": "Starter: QB-1",
    "team": "Los Angeles Chargers",
    "projected": 15.8,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Neu": 8,
    "team_rank_Pos": 6,
    "avg_fp2": 15.98,
    "opp_rank_allowed_fp2_Neu": 15,
    "opp_avg_allowed_fp2": 17.24,
    "fanduelSalary": "$7400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0080C6",
    "tmColorDark": "#002A5E",
    "tmColorLite_rgba": "rgba(0, 128, 198, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 94, 0.2)",
    "tmTextLite": "#0080C6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lac.png",
    "headlineNews": "Tosses two touchdowns in finale",
    "report": "Rivers completed 31 of 46 passes for 281 yards, two touchdowns and two interceptions during Sunday's 31-21 loss to Kansas City. He added a five-yard run. After the game, Rivers said that he has no plans to retire, but he may play with another team in 2020, Daniel Popper of The Athletic reports.",
    "analysis": "The Chargers were down by two scores in the closing minutes of the fourth quarter when Rivers hooked up with Hunter Henry for an eight-yard touchdown pass to try to spark a rally. Expect plenty of conjecture in the coming months as to whether that will be Rivers' last touchdown as a Charger. If so, it was a rough season to close out his tenure for the veteran quarterback. He threw 20 picks for the third time in his career while his 23 touchdowns were his fewest since 2007, his second season as starter. As a team, the Chargers finished 5-11, tied for their second-worst finish since Rivers took over as a starter in 2006.",
    "timestamp": "2019-12-29 03:38 PM",
    "week01": 24.92,
    "week02": 11.92,
    "week03": 19.62,
    "week04": 20.4,
    "week05": 6.14,
    "week06": 16.8,
    "week07": 21.16,
    "week08": 11.04,
    "week09": 11.76,
    "week10": 13.28,
    "week11": 18.12,
    "week12": "BYE",
    "week13": 17.6,
    "week14": 24.56,
    "week15": 11.28,
    "week16": 11.16,
    "week17": ""
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
                         data: [24.92, 11.92, 19.62, 20.4, 6.14, 16.8, 21.16, 11.04, 11.76, 13.28, 18.12, 'BYE', 17.6, 24.56, 11.28, 11.16]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [19.0, 17.3, 19.7, 24.5, 18.2, 13.9, 13.9, 16.3, 15.8, 19.5, 20.6, 'BYE', 15.7, 12.1, 15.6, 26.2, 15.8]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [14.1, 15.9, 17.1, 15.0, 14.5, 12.0, 15.9, 16.3, 13.6, 14.4, 13.6, 'BYE', 14.5, 15.2, 15.6, 16.8, 16.6]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 128, 198, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.9, 26.6, 25.1, 27.4, 20.8, 26.3, 21.9, 22.1, 19.7, 25.4, 18.7, 'BYE', 18.6, 19.7, 20.8, 21.7, 23.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15168.png",
    "name": "Case Keenum",
    "depthchart": "Starter: QB-1",
    "team": "Washington Redskins",
    "projected": 15.7,
    "opponent": "Dallas Cowboys",
    "home_away": "at ",
    "opp_rank_Neu": 11,
    "team_rank_Neg": 32,
    "avg_fp2": 10.8,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 17.01,
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
    "headlineNews": "Modest numbers to close out season",
    "report": "Keenum completed 18 of 37 passes for 206 yards and a touchdown with one interception in Sunday's 47-16 loss to the Cowboys.",
    "analysis": "Getting his first start since Week 8 due to Dwayne Haskins' ankle injury, Keenum wasn't able to generate much offense against a desperate Dallas defense. The veteran QB finishes the year having completed a strong 64.8 percent of his passes (160-for-247), but his 11:5 TD:INT and 6.9 YPA over 10 games were less impressive. Those numbers should be good enough to land him a backup job as a free agent in the offseason, but Keenum is unlikely to return to Washington -- in addition to Haskins, the QB room could contain a returning Alex Smith (leg), and there's always the possibility a new head coach decides to bring in his own choice as a franchise QB with the second overall pick in next year's draft.",
    "timestamp": "2019-12-29 05:53 PM",
    "week01": 27.2,
    "week02": 16.74,
    "week03": 14.58,
    "week04": 0.48,
    "week05": "DNP",
    "week06": 15.64,
    "week07": 3.08,
    "week08": 3.2,
    "week09": "DNP",
    "week10": "BYE",
    "week11": "DNP",
    "week12": "DNP",
    "week13": "DNP",
    "week14": "DNP",
    "week15": "DNP",
    "week16": "DNP",
    "week17": ""
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
                         data: [27.2, 16.74, 14.58, 0.48, 'DNP', 15.64, 3.08, 3.2, 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.1, 15.4, 14.4, 17.5, 'DNP', 16.4, 9.7, 9.3, 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 15.7]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.5, 8.0, 11.1, 11.2, 'DNP', 5.8, 7.1, 6.2, 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 4.1]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.5, 19.3, 17.9, 20.1, 'DNP', 17.5, 23.2, 20.2, 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 31.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/8664.png",
    "name": "Ryan Fitzpatrick",
    "depthchart": "Starter: QB-1",
    "team": "Miami Dolphins",
    "projected": 15.1,
    "opponent": "New England Patriots",
    "home_away": "at ",
    "opp_rank_Neg": 2,
    "team_rank_Neu": 15,
    "avg_fp2": 16.58,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 11.71,
    "fanduelSalary": "$7400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#008E97",
    "tmColorDark": "#005778",
    "tmColorLite_rgba": "rgba(0, 142, 151, 0.2)",
    "tmColorDark_rgba": "rgba(0, 87, 120, 0.2)",
    "tmTextLite": "#f5821f",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/mia.png",
    "headlineNews": "Puts fitting cap on unlikely season",
    "report": "Fitzpatrick completed 28 of 41 passes for 320 yards with one touchdown and no interceptions in the Dolphins' 27-24 win over the Patriots on Sunday. He also rushed five times for 15 yards and another score and fumbled once but recovered.",
    "analysis": "Fitzpatrick saved his best of a highly improbable season for last, authoring his fourth 300-yard effort of the last seven games and one of the more unlikely regular-season upsets in recent memory in the process. Fitzpatrick capped off the game with a 13-play, 75-yard march that culminated in a five-yard touchdown pass to Mike Gesicki, which proved to be the game-winning score. Fitzpatrick undeniably injected life into the Dolphins' offense since reclaiming the starting job in Week 7, and he wrapped up the campaign with a 20:13 TD:INT and 3,529 passing yards over 15 contests, along with 243 rushing yards and another four scores on the ground. While the offseason and draft could certainly bring competition at the quarterback position, Fitzpatrick heads into the offseason with a seemingly secure grip on the starting job.",
    "timestamp": "2019-12-29 02:55 PM",
    "week01": 11.2,
    "week02": 1.16,
    "week03": "DNP",
    "week04": "DNP",
    "week05": "BYE",
    "week06": "DNP",
    "week07": 21.58,
    "week08": 13.3,
    "week09": 23.72,
    "week10": 14.06,
    "week11": 12.92,
    "week12": 25.06,
    "week13": 29.8,
    "week14": 15.3,
    "week15": 20.46,
    "week16": 32.66,
    "week17": ""
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
                         data: [11.2, 1.16, 'DNP', 'DNP', 'BYE', 'DNP', 21.58, 13.3, 23.72, 14.06, 12.92, 25.06, 29.8, 15.3, 20.46, 32.66]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.9, 12.3, 'DNP', 'DNP', 'BYE', 'DNP', 12.7, 12.3, 15.2, 14.2, 10.6, 16.3, 10.8, 11.7, 13.6, 16.1, 15.1]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.7, 4.3, 'DNP', 'DNP', 'BYE', 'DNP', 9.1, 8.2, 8.8, 12.0, 6.5, 9.2, 12.7, 13.6, 7.9, 12.0, 10.5]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 142, 151, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [34.3, 32.0, 'DNP', 'DNP', 'BYE', 'DNP', 20.1, 21.0, 22.0, 24.9, 18.7, 18.1, 18.8, 29.4, 21.4, 27.2, 24.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16760.png",
    "name": "Jimmy Garoppolo",
    "depthchart": "Starter: QB-1",
    "team": "San Francisco 49ers",
    "projected": 15.0,
    "opponent": "Seattle Seahawks",
    "home_away": "at ",
    "opp_rank_Pos": 27,
    "team_rank_Neu": 14,
    "avg_fp2": 16.84,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 18.28,
    "fanduelSalary": "$15000",
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
    "week17": ""
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
                         data: [13.44, 23.68, 11.38, 'BYE', 14.94, 13.12, 7.04, 14.0, 28.88, 13.02, 31.66, 18.22, 9.1, 29.06, 12.6, 12.42]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.3, 11.1, 19.6, 'BYE', 15.6, 11.0, 13.3, 15.0, 16.7, 18.6, 15.7, 16.1, 9.7, 21.0, 19.2, 15.0, 15.0]
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
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16810.png",
    "name": "A.J. McCarron",
    "depthchart": "Starter: QB-1",
    "team": "Houston Texans",
    "projected": 14.8,
    "opponent": "Tennessee Titans",
    "home_away": "",
    "opp_rank_Pos": 24,
    "team_rank_Neu": 10,
    "avg_fp2": 0.0,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 18.44,
    "fanduelSalary": "$6000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#03202F",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(3, 32, 47, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/hou.png",
    "headlineNews": "Lacks explosiveness in spot start",
    "report": "McCarron completed 21 of 36 passes for 225 yards and an interception in the team's Week 17 loss to the Titans. He added five rushes for 39 yards and a score.",
    "analysis": "McCarron led the team on an impressive opening drive that resulted in a touchdown, completing four of seven passes for 49 yards. However, he was able to orchestrate only one more scoring drive, capping a 16-play, 75-yard drive with a one-yard rushing touchdown late in the third quarter. McCarron is set to be a free agent at the conclusion of the season and should find a role as a backup, whether in Houston or elsewhere.",
    "timestamp": "2019-12-29 06:02 PM",
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
    "week17": ""
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
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 14.8]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 0.0]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 21.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/11237.png",
    "name": "Matt Ryan",
    "depthchart": "Starter: QB-1",
    "team": "Atlanta Falcons",
    "projected": 14.7,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "at ",
    "opp_rank_Pos": 29,
    "team_rank_Pos": 3,
    "avg_fp2": 19.2,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 21.03,
    "fanduelSalary": "$7800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/atl.png",
    "headlineNews": "Posts 6-2 record post-bye",
    "report": "Ryan completed 30 of 51 pass attempts for 313 yards and one touchdown during Sunday's 28-22 overtime win against Tampa Bay. He also lost one fumble on the afternoon.",
    "analysis": "The 2016 MVP was under siege once again Week 17, absorbing four-plus sacks for the sixth time this season. Ryan remained his typical poised self, however, leading Atlanta back from a 22-16 fourth-quarter deficit to reach a post-bye record of 6-2 and secure Dan Quinn as the head coach for the 2020 campaign. While he tallied 25 passing TDs and established a completion percentage over 66 percent for a second consecutive year, Ryan's 14 interceptions represented his highest total since 2015. Ball security has potential to improve with enhanced protection, but Atlanta may have to bolster its offensive line depth to accommodate said improvement for its franchise QB.",
    "timestamp": "2019-12-29 03:14 PM",
    "week01": 20.56,
    "week02": 22.1,
    "week03": 23.46,
    "week04": 15.68,
    "week05": 34.9,
    "week06": 30.94,
    "week07": 3.56,
    "week08": "DNP",
    "week09": "BYE",
    "week10": 15.58,
    "week11": 16.44,
    "week12": 8.64,
    "week13": 18.58,
    "week14": 21.32,
    "week15": 19.1,
    "week16": 17.96,
    "week17": ""
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
                         data: [20.56, 22.1, 23.46, 15.68, 34.9, 30.94, 3.56, 'DNP', 'BYE', 15.58, 16.44, 8.64, 18.58, 21.32, 19.1, 17.96]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.2, 22.1, 14.7, 20.9, 16.0, 17.7, 18.0, 'DNP', 'BYE', 12.6, 15.3, 22.0, 17.4, 16.6, 13.5, 18.8, 14.7]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [13.2, 17.8, 16.9, 17.5, 14.9, 15.4, 18.2, 'DNP', 'BYE', 11.3, 17.5, 14.9, 14.9, 16.5, 12.8, 14.1, 12.4]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [25.8, 24.6, 25.1, 21.0, 22.0, 32.7, 29.3, 'DNP', 'BYE', 23.8, 28.4, 28.4, 20.5, 22.1, 21.3, 20.6, 23.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3924327.png",
    "name": "Drew Lock",
    "depthchart": "Starter: QB-1",
    "team": "Denver Broncos",
    "projected": 14.7,
    "opponent": "Oakland Raiders",
    "home_away": "",
    "opp_rank_Pos": 25,
    "team_rank_Neg": 29,
    "avg_fp2": 14.76,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 21.35,
    "fanduelSalary": "$7100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e17757",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(225, 119, 87, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#e17757",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/den.png",
    "headlineNews": "OK in the finale",
    "report": "Lock completed 17 of 28 passes for 177 yards and a touchdown during Sunday's 16-15 win over the Raiders. He added 29 yards on six carries.",
    "analysis": "For the second week in a row, the opposing defense forced Lock to dink and dunk and, with little success running the ball, the Broncos offense was out of rhythm for much of the game. One of the few exceptions came just before half time when, following a fumble recovery by Trey Marshall, Lock completed a big third-down pass over the middle to DaeSean Hamilton, drew a pass interference call with Courtland Sutton and then dumped it off to Andrew Beck on the next play for a one-yard score. Lock was never really able to recapture the magic of his start against Houston, and he accounted for just two touchdowns in his final three games. He was held under 200 yards passing in three of five starts, all wins. Still, his 89.7 quarterback rating on the season was better than all three of the quarterbacks drafted ahead of him and behind only Gardner Minshew among rookies. The rookie was supposed to be a project, so a solid foundation has been set heading into 2020. Expect the Broncos to try to build around him with a more formidable WR2 and a new starter or two along the offensive line.",
    "timestamp": "2019-12-29 06:09 PM",
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
    "week13": 13.86,
    "week14": 24.86,
    "week15": 7.62,
    "week16": 12.68,
    "week17": ""
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
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 13.86, 24.86, 7.62, 12.68]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 11.4, 15.0, 18.2, 20.0, 14.7]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 10.8, 13.6, 14.2, 13.5, 14.1]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(225, 119, 87, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 12.4, 14.6, 17.0, 15.2, 16.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2580.png",
    "name": "Drew Brees",
    "depthchart": "Starter: QB-1",
    "team": "New Orleans Saints",
    "projected": 14.5,
    "opponent": "Carolina Panthers",
    "home_away": "at ",
    "opp_rank_Neu": 13,
    "team_rank_Neu": 7,
    "avg_fp2": 20.67,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 16.43,
    "fanduelSalary": "$8400",
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
    "week17": ""
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
                         data: [21.8, 0.52, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 25.92, 'BYE', 11.48, 21.12, 23.44, 11.26, 40.06, 28.28, 22.86]
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
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3115252.png",
    "name": "Will Grier",
    "depthchart": "Starter: QB-1",
    "team": "Carolina Panthers",
    "projected": 14.2,
    "opponent": "New Orleans Saints",
    "home_away": "",
    "opp_rank_Neu": 17,
    "team_rank_Neu": 21,
    "avg_fp2": 7.66,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 19.48,
    "fanduelSalary": "$6400",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Foot",
    "tmColorLite": "#0085CA",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 133, 202, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#0085CA",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/car.png",
    "headlineNews": "Getting MRI on foot",
    "report": "Grier (foot) is scheduled to undergo an MRI on Monday, Jourdan Rodrigue of The Athletic reports.",
    "analysis": "Offensive coordinator Scott Turner noted that Grier isn't believed to have fractured his left foot in Sunday's 42-10 loss to the Saints, but the rookie signal-caller will don a walking boot as a precaution for now. The MRI should provide clarity on the extent of his injury and allow the Panthers to put an estimated timeline on his return to activity. Grier started the final two games for the Panthers but looked far from NFL ready, completing 28 of 52 attempts (53.8 percent) for 228 yards, zero touchdowns and four interceptions.",
    "timestamp": "2019-12-30 08:50 AM",
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
    "week12": "DNP",
    "week13": "DNP",
    "week14": "DNP",
    "week15": "DNP",
    "week16": 7.66,
    "week17": ""
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
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 7.66]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 15.5, 14.2]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 13.7, 13.4]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 133, 202, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 14.8, 14.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2578570.png",
    "name": "Jacoby Brissett",
    "depthchart": "Starter: QB-1",
    "team": "Indianapolis Colts",
    "projected": 13.4,
    "opponent": "Jacksonville Jaguars",
    "home_away": "at ",
    "opp_rank_Neu": 20,
    "team_rank_Neg": 28,
    "avg_fp2": 15.79,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 19.18,
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
    "headlineNews": "Rough outing in loss",
    "report": "Brissett completed 12 of 25 pass attempts for 162 yards while also rushing four times for 17 yards in Sunday's 38-20 loss to the Jaguars.",
    "analysis": "Brissett's late-season slide hit rock bottom after the signal-caller fell below a 50 percent completion rate for the first time in a game this season. The 26-year-old was looking like an adequate replacement for Andrew Luck (retirement) after a strong first half of the season when he posted a 64.5 completion rate, 1,590 passing yards and a 14:3 TD:INT ratio through the first seven games of the campaign. The league must have figured him out in the second half of the campaign, however, as he struggled to the tune of a 56.9 completion percentage, 1,352 yards and a 4:3 TD:INT ratio over his final eight games. The Colts extended Brissett through the 2020 season, so he should get a chance to redeem himself if the team doesn't pursue another option this upcoming offseason.",
    "timestamp": "2019-12-29 07:10 PM",
    "week01": 16.5,
    "week02": 17.34,
    "week03": 20.8,
    "week04": 23.5,
    "week05": 11.94,
    "week06": "BYE",
    "week07": 27.64,
    "week08": 9.48,
    "week09": 2.76,
    "week10": "DNP",
    "week11": 16.12,
    "week12": 13.16,
    "week13": 14.66,
    "week14": 24.64,
    "week15": 7.3,
    "week16": 15.16,
    "week17": ""
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
                         data: [16.5, 17.34, 20.8, 23.5, 11.94, 'BYE', 27.64, 9.48, 2.76, 'DNP', 16.12, 13.16, 14.66, 24.64, 7.3, 15.16]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.1, 13.1, 21.8, 15.1, 12.6, 'BYE', 16.8, 11.5, 14.9, 'DNP', 13.8, 19.2, 17.7, 12.0, 14.9, 17.6, 13.4]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 12.9, 5.9, 8.6, 'BYE', 7.1, 10.3, 0.5, 'DNP', 5.0, 11.4, 13.2, 4.2, 7.3, 8.7, 10.4]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.8, 19.7, 20.8, 16.8, 24.5, 'BYE', 24.3, 18.5, 23.7, 'DNP', 19.7, 30.5, 22.5, 28.2, 22.7, 18.2, 16.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3039707.png",
    "name": "Mitchell Trubisky",
    "depthchart": "Starter: QB-1",
    "team": "Chicago Bears",
    "projected": 13.2,
    "opponent": "Minnesota Vikings",
    "home_away": "at ",
    "opp_rank_Neu": 16,
    "team_rank_Neg": 26,
    "avg_fp2": 14.75,
    "opp_rank_allowed_fp2_Neu": 9,
    "opp_avg_allowed_fp2": 15.55,
    "fanduelSalary": "$7400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#c36835",
    "tmColorDark": "#0B162A",
    "tmColorLite_rgba": "rgba(195, 104, 53, 0.2)",
    "tmColorDark_rgba": "rgba(11, 22, 42, 0.2)",
    "tmTextLite": "#c36835",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png",
    "headlineNews": "Fails to find end zone",
    "report": "Trubisky completed 26 of 37 passes for 207 yards in the Bears' 21-19 win over the Vikings in Week 17, and he ended the season with 3,318 yards, 17 touchdowns and 10 interceptions.",
    "analysis": "Trubisky failed to improve in his third pro season, and despite throwing significantly more passes than he did in 2018, his touchdown rate fell drastically. In addition, he threw for zero or one touchdown in more than half of his starts, and as he goes into the fourth year of his rookie contract in 2020, it'll be difficult to envision him as more than a QB2 in fantasy drafts.",
    "timestamp": "2019-12-29 01:38 PM",
    "week01": 9.22,
    "week02": 5.6,
    "week03": 20.44,
    "week04": -1.64,
    "week05": "DNP",
    "week06": "BYE",
    "week07": 22.04,
    "week08": 8.12,
    "week09": 6.5,
    "week10": 19.72,
    "week11": 11.0,
    "week12": 20.92,
    "week13": 24.92,
    "week14": 33.06,
    "week15": 18.26,
    "week16": 8.28,
    "week17": ""
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
                         data: [9.22, 5.6, 20.44, -1.64, 'DNP', 'BYE', 22.04, 8.12, 6.5, 19.72, 11.0, 20.92, 24.92, 33.06, 18.26, 8.28]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.8, 11.3, 13.8, 14.3, 'DNP', 'BYE', 9.1, 15.4, 13.4, 10.8, 11.5, 15.4, 11.7, 17.4, 13.0, 14.4, 13.2]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [9.6, 3.7, 8.7, 10.5, 'DNP', 'BYE', 0.0, 4.9, 2.9, 4.0, 1.0, 0.0, 11.2, 0.2, 7.4, 4.2, 8.6]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  "rgba(195, 104, 53, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.4, 27.2, 41.5, 17.2, 'DNP', 'BYE', 21.3, 16.2, 33.7, 26.2, 15.5, 35.6, 28.5, 15.5, 31.7, 34.5, 25.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16757.png",
    "name": "Derek Carr",
    "depthchart": "Starter: QB-1",
    "team": "Oakland Raiders",
    "projected": 12.1,
    "opponent": "Denver Broncos",
    "home_away": "at ",
    "opp_rank_Neg": 6,
    "team_rank_Neu": 13,
    "avg_fp2": 15.41,
    "opp_rank_allowed_fp2_Neu": 7,
    "opp_avg_allowed_fp2": 15.15,
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
    "headlineNews": "Comes up short in heartbreaker",
    "report": "Carr completed 29 of 46 passes for 391 yards and a touchdown during Sunday's 16-15 loss to the Broncos.",
    "analysis": "Carr put up a ton of yards on Denver's top-10 rated pass defense, but the Raiders struggled in the red zone early, having to settle for field-goal tries and getting stuffed at the goal line on a second-quarter possession. Carr finally linked up with Hunter Renfrow for a touchdown with seven seconds left, but the Raiders went for the win and the two-point pass was batted at the line by Shelby Harris.  There will be a lot of discussion heading into the offseason as to whether Carr is the future at quarterback for the soon-to-be Las Vegas Raiders. If not, he ended on a high note in 2019 with career highs in completion percentage, passing yards and quarterback rating.",
    "timestamp": "2019-12-29 05:00 PM",
    "week01": 14.56,
    "week02": 11.72,
    "week03": 16.68,
    "week04": 13.46,
    "week05": 7.96,
    "week06": "BYE",
    "week07": 16.72,
    "week08": 23.4,
    "week09": 17.96,
    "week10": 13.12,
    "week11": 20.78,
    "week12": 5.18,
    "week13": 11.58,
    "week14": 20.22,
    "week15": 15.88,
    "week16": 21.94,
    "week17": ""
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
                         data: [14.56, 11.72, 16.68, 13.46, 7.96, 'BYE', 16.72, 23.4, 17.96, 13.12, 20.78, 5.18, 11.58, 20.22, 15.88, 21.94]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.8, 12.6, 6.7, 17.9, 11.8, 'BYE', 12.0, 11.4, 21.1, 14.1, 22.3, 19.7, 17.2, 16.5, 17.7, 13.1, 12.1]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.4, 11.9, 8.5, 5.3, 11.0, 'BYE', 10.8, 13.5, 14.4, 10.6, 7.3, 12.4, 14.5, 9.0, 10.1, 8.4, 12.5]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.2, 25.6, 19.0, 16.5, 25.4, 'BYE', 20.6, 19.2, 24.4, 22.6, 23.2, 20.3, 20.1, 16.5, 19.2, 21.0, 18.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14875.png",
    "name": "Robert Griffin",
    "depthchart": "Starter: QB-1",
    "team": "Baltimore Ravens",
    "projected": 12.0,
    "opponent": "Pittsburgh Steelers",
    "home_away": "",
    "opp_rank_Neg": 5,
    "team_rank_Neg": 25,
    "avg_fp2": 1.69,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 14.43,
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
    "headlineNews": "Fails to impress against Steelers",
    "report": "Griffin completed 11 of 21 pass attempts for 96 yards and an interception Sunday against the Steelers. He also carried eight times for 50 yards in the 28-10 win.",
    "analysis": "Griffin struggled to connect with his receivers, completing just over half his passes while averaging 4.6 yards per attempt. He did his best Lamar Jackson impression as a runner, however, and gashed the Pittsburgh defense for 6.3 yards per carry. Griffin also took three sacks and turned the ball over once, so, despite the victory and flashy rushing stats, it wasn't exactly an ideal performance. The veteran will return to the bench during the postseason and should see the field again only in the event of a blowout or an injury to Jackson.",
    "timestamp": "2019-12-29 05:47 PM",
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
    "week17": ""
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
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 12.0]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 3.5]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  "rgba(158, 124, 12, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 18.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3918298.png",
    "name": "Josh Allen",
    "depthchart": "Starter: QB-1",
    "team": "Buffalo Bills",
    "projected": 11.0,
    "opponent": "New York Jets",
    "home_away": "",
    "opp_rank_Neu": 15,
    "team_rank_Neg": 27,
    "avg_fp2": 20.09,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 18.49,
    "fanduelSalary": "$7600",
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
    "week17": ""
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
                         data: [17.96, 22.22, 21.32, 11.72, 18.46, 'BYE', 21.28, 17.26, 17.6, 25.44, 33.84, 20.0, 23.54, 12.74, 17.36, 20.62]
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
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3912547.png",
    "name": "Sam Darnold",
    "depthchart": "Starter: QB-1",
    "team": "New York Jets",
    "projected": 9.0,
    "opponent": "Buffalo Bills",
    "home_away": "at ",
    "opp_rank_Neg": 3,
    "team_rank_Neg": 30,
    "avg_fp2": 16.45,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 13.7,
    "fanduelSalary": "$7200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#125740",
    "tmColorDark": "#003f2d",
    "tmColorLite_rgba": "rgba(18, 87, 64, 0.2)",
    "tmColorDark_rgba": "rgba(0, 63, 45, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png",
    "headlineNews": "Strong second half of second season",
    "report": "Darnold completed 23 of 36 passes for 199 yards, one touchdown and one interception in Sunday's 13-6 win over Buffalo. He also finished with minus-2 yards on three rushing attempts.",
    "analysis": "Darnold broke a 3-3 tie with a one-yard touchdown to Jamison Crowder early in the fourth quarter, bringing his season TD:INT to 19:13. The second-year quarterback also cleared the 3,000-yard mark, finishing with 3,024 passing yards despite missing three games due to mononucleosis. Darnold showed excellent progress in the second half of the season, leading the Jets to a 6-2 record down the stretch while compiling a 13:4 TD:INT over those final eight games. The third overall selection from the 2018 draft is locked in as the Jets' starting quarterback heading into next season, and his strong finish should give the team plenty of optimism.",
    "timestamp": "2019-12-29 02:51 PM",
    "week01": 15.0,
    "week02": "DNP",
    "week03": "DNP",
    "week04": "BYE",
    "week05": "DNP",
    "week06": 20.62,
    "week07": -2.66,
    "week08": 17.62,
    "week09": 13.5,
    "week10": 21.7,
    "week11": 26.42,
    "week12": 28.2,
    "week13": 10.46,
    "week14": 18.1,
    "week15": 18.82,
    "week16": 9.62,
    "week17": ""
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
                         data: [15.0, 'DNP', 'DNP', 'BYE', 'DNP', 20.62, -2.66, 17.62, 13.5, 21.7, 26.42, 28.2, 10.46, 18.1, 18.82, 9.62]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.4, 'DNP', 'DNP', 'BYE', 'DNP', 12.3, 10.8, 12.6, 19.5, 17.3, 12.6, 15.5, 16.2, 23.7, 14.4, 14.5, 9.0]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.9, 'DNP', 'DNP', 'BYE', 'DNP', 10.9, 16.5, 8.0, 8.7, 6.5, 10.5, 0.0, 0.0, 8.0, 10.2, 4.8, 12.7]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  "rgba(18, 87, 64, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [26.8, 'DNP', 'DNP', 'BYE', 'DNP', 27.4, 24.0, 23.6, 27.1, 21.7, 21.0, 31.7, 32.3, 24.9, 24.0, 25.7, 27.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2517017.png",
    "name": "Sean Mannion",
    "depthchart": "Starter: QB-1",
    "team": "Minnesota Vikings",
    "projected": 8.7,
    "opponent": "Chicago Bears",
    "home_away": "",
    "opp_rank_Neu": 12,
    "team_rank_Neu": 20,
    "avg_fp2": -0.25,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 15.44,
    "fanduelSalary": "$6000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e0aa19",
    "tmColorDark": "#300e5a",
    "tmColorLite_rgba": "rgba(224, 170, 25, 0.2)",
    "tmColorDark_rgba": "rgba(48, 14, 90, 0.2)",
    "tmTextLite": "#e0aa19",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/min.png",
    "headlineNews": "Fails to impress in spot start",
    "report": "Mannion completed 12 of 21 pass attempts for 126 yards and two interceptions during Sunday's 21-19 loss to the Bears.",
    "analysis": "Mannion started for Kirk Cousins, as he and many other regular starters watched from the sideline. Mannion completed just 57 percent of his passes, averaged 6.0 yards per attempt and turned the ball over twice, reminding everyone why he's never gotten an extended run as a starting quarterback in the NFL. Mannion will return to the bench for the postseason and could have the team considering its options behind Cousins.",
    "timestamp": "2019-12-29 03:13 PM",
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
    "week12": "BYE",
    "week13": "DNP",
    "week14": "DNP",
    "week15": "DNP",
    "week16": "DNP",
    "week17": ""
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
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 8.7]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 0.0]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  "rgba(224, 170, 25, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 2.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3917315.png",
    "name": "Kyler Murray",
    "depthchart": "Starter: QB-1",
    "team": "Arizona Cardinals",
    "projected": 4.1,
    "opponent": "Los Angeles Rams",
    "home_away": "at ",
    "opp_rank_Neu": 10,
    "team_rank_Neg": 24,
    "avg_fp2": 19.15,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 16.45,
    "fanduelSalary": "$7700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#97233F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(151, 35, 63, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#97233F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
    "headlineNews": "Able to return",
    "report": "Murray (arm) was able to return to Sunday's season finale against the Rams, Josh Weinfuss of ESPN reports.",
    "analysis": "Murray couldn't guide his team to a comeback after returning in the fourth quarter, but he raised his passing total for the game to 324 yards, giving the rookie first overall pick 3,721 passing yards for the season.",
    "timestamp": "2019-12-29 04:46 PM",
    "week01": 24.62,
    "week02": 18.36,
    "week03": 19.82,
    "week04": 17.34,
    "week05": 24.32,
    "week06": 28.8,
    "week07": 6.96,
    "week08": 10.1,
    "week09": 25.04,
    "week10": 27.76,
    "week11": 26.7,
    "week12": "BYE",
    "week13": 14.32,
    "week14": 12.96,
    "week15": 17.36,
    "week16": 12.72,
    "week17": ""
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
                         data: [24.62, 18.36, 19.82, 17.34, 24.32, 28.8, 6.96, 10.1, 25.04, 27.76, 26.7, 'BYE', 14.32, 12.96, 17.36, 12.72]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.6, 14.4, 14.2, 19.5, 17.1, 21.9, 16.1, 19.5, 11.8, 19.9, 10.8, 'BYE', 15.6, 19.3, 19.2, 21.1, 4.1]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [12.7, 15.6, 17.2, 16.3, 17.7, 19.1, 21.4, 11.0, 9.3, 2.5, 2.4, 'BYE', 4.7, 14.7, 19.0, 13.8, 1.5]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.9, 20.9, 19.0, 18.7, 18.9, 22.1, 28.6, 26.2, 21.8, 33.0, 31.8, 'BYE', 33.3, 33.6, 28.9, 32.6, 33.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3127051.png",
    "name": "Devlin Hodges",
    "depthchart": "Starter: QB-1",
    "team": "Pittsburgh Steelers",
    "projected": 3.3,
    "opponent": "Baltimore Ravens",
    "home_away": "at ",
    "opp_rank_Neu": 7,
    "team_rank_Neg": 31,
    "avg_fp2": 8.82,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 13.58,
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
    "headlineNews": "Makes minimal impact vs. Ravens",
    "report": "Hodges completed 9 of 25 pass attempts for 95 yards during Sunday's 28-10 loss to the Ravens.",
    "analysis": "Even while down a few starters, the Baltimore defense gave Hodges fits as he completed just 36 percent of his passes and averaged an anemic 3.8 yards per attempt. He managed to avoid throwing an interception, but he lost a fumble and missed numerous throws that could have kept drives alive. This lackluster effort caps an eventful rookie season for Hodges, who played in eight games as a result of injuries and poor play from Ben Roethlisberger and Mason Rudolph. Hodges completed 100 of 160 passes for 1,063 yards and his 5:8 TD:INT indicates he may not be the long-term answer under center, and he will likely be battling for a roster spot come training camp.",
    "timestamp": "2019-12-29 06:00 PM",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": 9.08,
    "week07": "BYE",
    "week08": "DNP",
    "week09": "DNP",
    "week10": "DNP",
    "week11": "DNP",
    "week12": "DNP",
    "week13": 11.68,
    "week14": 13.48,
    "week15": 8.48,
    "week16": 1.36,
    "week17": ""
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
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 9.08, 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 11.68, 13.48, 8.48, 1.36]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 12.2, 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 16.6, 18.4, 11.1, 11.2, 3.3]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 11.7, 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 11.1, 13.6, 10.8, 11.8, 0.0]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 13.0, 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 12.6, 14.8, 12.6, 12.8, 13.5]
                    }
                    
                    ]
               }
            }];




$scope.positionRB = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3051392.png",
    "name": "Ezekiel Elliott",
    "depthchart": "Starter: RB-1",
    "team": "Dallas Cowboys",
    "projected": 26.8,
    "opponent": "Washington Redskins",
    "home_away": "",
    "opp_rank_Pos": 29,
    "team_rank_Neu": 8,
    "avg_fp2": 17.25,
    "opp_rank_allowed_fp2_Pos": 30,
    "opp_avg_allowed_fp2": 25.6,
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
    "headlineNews": "Finds end zone twice in Week 17",
    "report": "Elliott carried the ball 18 times for 122 yards and a touchdown and caught three of five targets for two yards and a second score in Sunday's 47-16 win over Washington.",
    "analysis": "With the Cowboys' playoff hopes on the line, Elliott came through with another big performance, but it went for naught when the Eagles took care of business against the Giants. The fourth-year running back wraps up 2019 with 1,357 rushing yards and 12 TDs on the ground, as well as 54 catches on 71 targets for another 420 yards and two touchdowns. Dallas is likely to have a new head coach, and potentially a new offensive scheme, next season, but given the investments Jerry Jones has made both in Elliott and his offensive line, the RB will likely remain a major part of the Cowboys' attack.",
    "timestamp": "2019-12-29 06:14 PM",
    "week01": 12.8,
    "week02": 19.0,
    "week03": 14.9,
    "week04": 13.5,
    "week05": 16.1,
    "week06": 23.7,
    "week07": 23.7,
    "week08": "BYE",
    "week09": 13.9,
    "week10": 7.3,
    "week11": 18.3,
    "week12": 14.6,
    "week13": 17.2,
    "week14": 22.3,
    "week15": 29.5,
    "week16": 11.9,
    "week17": ""
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
                         data: [12.8, 19.0, 14.9, 13.5, 16.1, 23.7, 23.7, 'BYE', 13.9, 7.3, 18.3, 14.6, 17.2, 22.3, 29.5, 11.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [19.3, 16.8, 18.6, 11.0, 18.6, 15.2, 15.9, 'BYE', 18.0, 16.6, 21.0, 11.4, 17.8, 19.5, 20.9, 23.8, 26.8]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [9.9, 16.9, 18.5, 10.7, 10.9, 11.4, 12.6, 'BYE', 13.2, 14.5, 11.4, 3.9, 17.7, 7.6, 10.5, 8.9, 12.9]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  "rgba(127, 150, 149, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [30.4, 24.4, 27.5, 29.4, 33.1, 24.0, 39.9, 'BYE', 22.7, 20.2, 21.9, 21.1, 24.5, 25.9, 20.7, 26.8, 22.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3117251.png",
    "name": "Christian McCaffrey",
    "depthchart": "Starter: RB-1",
    "team": "Carolina Panthers",
    "projected": 22.9,
    "opponent": "New Orleans Saints",
    "home_away": "",
    "opp_rank_Neg": 5,
    "team_rank_Neu": 14,
    "avg_fp2": 26.13,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 15.26,
    "fanduelSalary": "$11000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0085CA",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 133, 202, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#0085CA",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/car.png",
    "headlineNews": "Scores 19th TD of 2019",
    "report": "McCaffrey ran for 26 yards and a touchdown on nine carries and caught seven of 10 targets for 72 receiving yards during Sunday's 42-10 loss to the Saints.",
    "analysis": "The third-year running back wrapped up an uber-prolific 2019 campaign as Carolina was drubbed by its division rival Week 17, collecting his 19th TD and reaching a nearly unfathomable threshold of 116 receptions on the year. While logging seven-plus catches for his seventh consecutive outing Sunday, McCaffrey tied Philadelphia's Zach Ertz (2018) and Jacksonville's Jimmy Smith (1999) for 18th all-time in single-season receptions. McCaffrey also became just the third individual in NFL history with both 1,000 rushing and 1,000 receiving yards in a single year, joining Marshall Faulk and Roger Craig as the only players to ever accomplish that feat. Heading into the fourth frame of his rookie contract in 2020, McCaffrey is expected to remain one of the most valuable stocks in fantasy as the centerpiece of a rebuilding Panthers offense.",
    "timestamp": "2019-12-29 01:44 PM",
    "week01": 37.9,
    "week02": 6.3,
    "week03": 26.3,
    "week04": 28.9,
    "week05": 44.7,
    "week06": 19.7,
    "week07": "BYE",
    "week08": 25.5,
    "week09": 34.1,
    "week10": 23.1,
    "week11": 24.6,
    "week12": 29.8,
    "week13": 13.7,
    "week14": 19.0,
    "week15": 33.5,
    "week16": 24.8,
    "week17": ""
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
                         data: [37.9, 6.3, 26.3, 28.9, 44.7, 19.7, 'BYE', 25.5, 34.1, 23.1, 24.6, 29.8, 13.7, 19.0, 33.5, 24.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.8, 20.0, 16.6, 17.6, 18.0, 14.2, 'BYE', 17.2, 13.2, 28.1, 19.0, 15.7, 18.8, 18.9, 23.2, 20.0, 22.9]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.8, 3.7, 3.9, 10.1, 3.7, 16.4, 'BYE', 1.2, 5.4, 25.9, 13.7, 3.1, 13.0, 6.6, 12.6, 12.7, 20.3]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 133, 202, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [34.0, 42.0, 21.7, 45.8, 34.6, 29.7, 'BYE', 37.0, 20.9, 38.6, 39.0, 29.2, 34.4, 26.5, 23.7, 42.4, 37.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3054850.png",
    "name": "Alvin Kamara",
    "depthchart": "Starter: RB-1",
    "team": "New Orleans Saints",
    "projected": 21.3,
    "opponent": "Carolina Panthers",
    "home_away": "at ",
    "opp_rank_Pos": 31,
    "team_rank_Neu": 17,
    "avg_fp2": 14.58,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 28.47,
    "fanduelSalary": "$7900",
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
    "week17": ""
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
                         data: [20.6, 6.5, 32.6, 10.4, 13.92, 10.1, 'DNP', 'DNP', 'BYE', 11.4, 17.2, 14.7, 10.4, 4.3, 11.4, 26.0]
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
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3042519.png",
    "name": "Aaron Jones",
    "depthchart": "Starter: RB-1",
    "team": "Green Bay Packers",
    "projected": 21.3,
    "opponent": "Detroit Lions",
    "home_away": "at ",
    "opp_rank_Neu": 21,
    "team_rank_Neu": 15,
    "avg_fp2": 18.33,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 24.83,
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
    "week17": ""
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
                         data: [4.4, 23.0, 14.8, 14.8, 45.7, 6.0, 16.3, 38.1, 3.4, 27.3, 'BYE', 3.8, 5.1, 28.2, 17.1, 27.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.7, 11.5, 11.4, 9.3, 13.3, 19.0, 12.9, 14.0, 15.6, 17.9, 'BYE', 12.1, 9.6, 10.7, 14.6, 12.6, 21.3]
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
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2977644.png",
    "name": "Todd Gurley",
    "depthchart": "Starter: RB-1",
    "team": "Los Angeles Rams",
    "projected": 19.0,
    "opponent": "Arizona Cardinals",
    "home_away": "",
    "opp_rank_Pos": 25,
    "team_rank_Neg": 24,
    "avg_fp2": 13.86,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 21.51,
    "fanduelSalary": "$7800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Posts 89 scrimmage yards",
    "report": "Gurley ran for 68 yards on 20 carries and hauled in both of his targets for 21 receiving yards during Sunday's 31-24 win against the Cardinals.",
    "analysis": "In comparison to Gurley's 2017 and 2018 seasons in which he averaged 1,962 scrimmage yards and 20 touchdowns per year, 2019 will go down in fantasy annals as a disappointing campaign for the two-time All-Pro. Though his usage rate was cut by 19.4 percent in relation to his 2018 workload, Gurley still compiled 1,064 scrimmage yards and 14 total touchdowns -- an output that would be considered a career year for many NFL running backs. Malcolm Brown's three-yard TD run during the second quarter Sunday came as an unwelcome surprise for those banking on Gurley for fantasy championships Week 17. Throughout the year, however, Gurley proved capable of playing through what was described during the 2019 offseason to be an \"arthritic component to his knee\" while also maintaining the majority of the RB workload over backfield mates Brown and Darrell Henderson (ankle).",
    "timestamp": "2019-12-29 05:54 PM",
    "week01": 10.6,
    "week02": 14.2,
    "week03": 4.3,
    "week04": 22.5,
    "week05": 17.2,
    "week06": "DNP",
    "week07": 11.9,
    "week08": 10.4,
    "week09": "BYE",
    "week10": 7.3,
    "week11": 18.8,
    "week12": 3.4,
    "week13": 18.0,
    "week14": 19.3,
    "week15": 19.3,
    "week16": 16.8,
    "week17": ""
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
                         data: [10.6, 14.2, 4.3, 22.5, 17.2, 'DNP', 11.9, 10.4, 'BYE', 7.3, 18.8, 3.4, 18.0, 19.3, 19.3, 16.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.2, 14.3, 12.4, 9.6, 15.6, 'DNP', 23.0, 12.8, 'BYE', 10.9, 14.6, 8.3, 12.4, 19.3, 13.5, 11.2, 19.0]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [20.1, 9.3, 10.6, 2.1, 2.1, 'DNP', 6.3, 10.0, 'BYE', 6.4, 7.7, 5.7, 6.0, 5.3, 8.6, 5.6, 12.7]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [36.0, 25.5, 25.9, 14.4, 25.2, 'DNP', 31.3, 28.5, 'BYE', 22.3, 18.2, 17.9, 18.5, 12.2, 18.7, 22.0, 23.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116385.png",
    "name": "Joe Mixon",
    "depthchart": "Starter: RB-1",
    "team": "Cincinnati Bengals",
    "projected": 17.6,
    "opponent": "Cleveland Browns",
    "home_away": "",
    "opp_rank_Pos": 30,
    "team_rank_Neg": 28,
    "avg_fp2": 11.86,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 22.98,
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
    "headlineNews": "Turns focus to extension talks",
    "report": "Mixon indicated Monday that he's hopeful to agree with the Bengals on a contract extension this offseason, Ben Baby of ESPN.com reports. \"I've always been all about the team. But if it comes to a point where I gotta think about me, that's just what's going to have to happen,\" Mixon said, when asked if he would skip offseason workouts if an extension isn't in place.",
    "analysis": "Though Mixon's efficiency as a ballcarrier dropped off in 2019, he still rumbled for 1,137 yards and five touchdowns on an acceptable 4.1 yards per tote while working behind a porous offensive line. The 23-year-old is on Cincinnati's books through 2020, but he's understandably seeking some longer-term job security on the heels of his second consecutive 1,000-plus-yard campaign. Mixon was at his best during the final quarter of the 2019 season, clearing 100 rushing yards on three of those four contests and chipping in nine receptions for 97 yards.",
    "timestamp": "2019-12-30 10:04 AM",
    "week01": 2.7,
    "week02": 4.2,
    "week03": 16.5,
    "week04": 8.3,
    "week05": 11.4,
    "week06": 4.9,
    "week07": 6.9,
    "week08": 15.7,
    "week09": "BYE",
    "week10": 16.1,
    "week11": 16.8,
    "week12": 7.9,
    "week13": 15.0,
    "week14": 26.1,
    "week15": 17.1,
    "week16": 8.3,
    "week17": ""
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
                         data: [2.7, 4.2, 16.5, 8.3, 11.4, 4.9, 6.9, 15.7, 'BYE', 16.1, 16.8, 7.9, 15.0, 26.1, 17.1, 8.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.0, 15.0, 9.7, 13.1, 13.3, 9.4, 12.4, 11.9, 'BYE', 13.5, 12.9, 11.4, 6.3, 12.2, 12.0, 18.5, 17.6]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [9.0, 4.6, 5.1, 7.1, 11.3, 13.9, 4.4, 2.7, 'BYE', 1.7, 5.8, 7.6, 5.4, 6.7, 6.3, 13.8, 6.8]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.6, 25.7, 29.9, 25.7, 27.0, 23.4, 12.1, 20.0, 'BYE', 16.4, 24.6, 15.9, 12.6, 13.0, 14.9, 30.9, 18.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2576434.png",
    "name": "Melvin Gordon",
    "depthchart": "Starter: RB-1",
    "team": "Los Angeles Chargers",
    "projected": 16.8,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Pos": 26,
    "team_rank_Neg": 27,
    "avg_fp2": 12.6,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 23.83,
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
    "headlineNews": "Racks up 122 yards, touchdown",
    "report": "Gordon ran for 46 yards and a touchdown on 14 carries and caught six of seven targets for 76 yards during Sunday's 31-21 loss to Kansas City.",
    "analysis": "Gordon briefly put the Chargers back on top early in the second half, dashing through the Chiefs' defense for a five-yard touchdown, his third in his last two games. The Wisconsin product finished 2019 on a high note as his 122 total yards were his second-most on the year. Gordon's season started with a holdout, and he was never really able to regain his form. His 75.7 total yards per game and 3.8 yards per carry were both his lowest totals since his rookie season while his three fumbles were his most since his rookie year.",
    "timestamp": "2019-12-29 03:14 PM",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": 5.8,
    "week06": 6.3,
    "week07": 7.9,
    "week08": 10.4,
    "week09": 24.4,
    "week10": 19.8,
    "week11": 10.5,
    "week12": "BYE",
    "week13": 12.0,
    "week14": 16.9,
    "week15": 4.9,
    "week16": 19.7,
    "week17": ""
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
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 5.8, 6.3, 7.9, 10.4, 24.4, 19.8, 10.5, 'BYE', 12.0, 16.9, 4.9, 19.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 11.4, 10.9, 9.8, 11.4, 9.3, 15.2, 11.4, 'BYE', 11.8, 10.8, 11.7, 13.1, 16.8]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 16.0, 13.0, 3.0, 3.1, 6.8, 4.7, 9.8, 'BYE', 5.7, 9.9, 8.1, 8.1, 11.8]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 128, 198, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 24.2, 28.4, 14.9, 17.8, 22.6, 30.1, 27.5, 'BYE', 14.1, 18.3, 23.2, 26.4, 23.5]
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
    "opponent": "Cincinnati Bengals",
    "home_away": "at ",
    "opp_rank_Pos": 32,
    "team_rank_Neu": 11,
    "avg_fp2": 15.5,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 24.01,
    "fanduelSalary": "$7900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FF3C00",
    "tmColorDark": "#311D00",
    "tmColorLite_rgba": "rgba(255, 60, 0, 0.2)",
    "tmColorDark_rgba": "rgba(49, 29, 0, 0.2)",
    "tmTextLite": "#FF3C00",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
    "headlineNews": "Ends season on down note",
    "report": "Chubb rushed for 41 yards on 13 carries and caught one of two targets for one yard in Sunday's 33-23 loss to the Bengals in Week 17.",
    "analysis": "The Browns played from behind for much of the game, but not so much that they should have abandoned Chubb. He finished with a season low in carries and yards while losing the NFL rushing title to Tennessee's Derrick Henry. In a disappointing season for the organization, Chubb was one of its few bright spots. Cleveland fired head coach Freddie Kitchens following the game, so there will be some changes to the team in 2020. Chubb, however, is expected to occupy the same role as the team's lead back.",
    "timestamp": "2019-12-30 04:33 AM",
    "week01": 10.0,
    "week02": 17.8,
    "week03": 15.1,
    "week04": 37.8,
    "week05": 10.4,
    "week06": 26.4,
    "week07": "BYE",
    "week08": 10.3,
    "week09": 11.1,
    "week10": 13.1,
    "week11": 9.2,
    "week12": 23.9,
    "week13": 8.4,
    "week14": 12.2,
    "week15": 22.3,
    "week16": 4.5,
    "week17": ""
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
                         data: [10.0, 17.8, 15.1, 37.8, 10.4, 26.4, 'BYE', 10.3, 11.1, 13.1, 9.2, 23.9, 8.4, 12.2, 22.3, 4.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.6, 20.2, 11.2, 16.0, 11.8, 13.6, 'BYE', 11.2, 15.6, 20.8, 19.3, 20.9, 13.4, 21.4, 15.5, 13.0, 16.0]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 4.2, 1.5, 4.0, 0.0, 0.3, 'BYE', 2.2, 1.0, 0.0, 2.5, 13.8, 4.8, 12.2, 12.7, 10.0, 14.0]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.0, 17.4, 15.8, 20.3, 28.2, 34.8, 'BYE', 21.4, 24.5, 23.9, 15.8, 27.2, 10.8, 25.4, 37.5, 19.6, 27.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3043078.png",
    "name": "Derrick Henry",
    "depthchart": "Starter: RB-1",
    "team": "Tennessee Titans",
    "projected": 15.5,
    "opponent": "Houston Texans",
    "home_away": "at ",
    "opp_rank_Neu": 20,
    "team_rank_Pos": 6,
    "avg_fp2": 17.6,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 23.1,
    "fanduelSalary": "$8800",
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
    "week17": ""
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
                         data: [28.4, 16.3, 11.1, 11.3, 13.8, 3.8, 17.3, 6.8, 23.4, 32.1, 'BYE', 28.0, 22.1, 23.4, 8.6, 'DNP']
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
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3052117.png",
    "name": "Phillip Lindsay",
    "depthchart": "Starter: RB-1",
    "team": "Denver Broncos",
    "projected": 15.5,
    "opponent": "Oakland Raiders",
    "home_away": "",
    "opp_rank_Neu": 9,
    "team_rank_Neu": 18,
    "avg_fp2": 11.66,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 22.13,
    "fanduelSalary": "$6600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e17757",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(225, 119, 87, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#e17757",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/den.png",
    "headlineNews": "Tops 1,000 yards on year",
    "report": "Lindsay ran for 53 yards on 18 carries during Sunday's 16-15 win over the Raiders.",
    "analysis": "Sunday's grinding performance put Lindsay at 1,011 rushing yards on the season, making him the first undrafted player to record back-to-back 1,000 yard seasons to start a career. The end result looks similar to his rookie campaign, but Lindsay's 4.5 yards per carry in 2019 was nearly a full yard less than his 2018 mark. He also had three 100-total-yard games in 2019 as compared to six in 2018 and scored three fewer touchdowns. A new scheme, a revolving door at quarterback and a makeshift right side of the offensive line certainly didn't help matters, but the Broncos need Lindsay to rebound and be a bigger-play threat in 2020.",
    "timestamp": "2019-12-29 05:31 PM",
    "week01": 8.6,
    "week02": 8.6,
    "week03": 27.0,
    "week04": 6.5,
    "week05": 22.7,
    "week06": 14.5,
    "week07": 3.7,
    "week08": 10.1,
    "week09": 15.2,
    "week10": "BYE",
    "week11": 8.5,
    "week12": 7.3,
    "week13": 7.7,
    "week14": 12.5,
    "week15": 3.2,
    "week16": 18.8,
    "week17": ""
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
                         data: [8.6, 8.6, 27.0, 6.5, 22.7, 14.5, 3.7, 10.1, 15.2, 'BYE', 8.5, 7.3, 7.7, 12.5, 3.2, 18.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.9, 14.1, 9.5, 14.3, 14.7, 15.0, 15.1, 14.3, 13.8, 'BYE', 11.5, 15.1, 16.4, 18.3, 11.0, 15.4, 15.5]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.5, 11.9, 7.2, 4.1, 3.3, 3.6, 4.3, 5.5, 7.2, 'BYE', 6.1, 11.2, 3.1, 5.7, 10.9, 6.1, 10.0]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(225, 119, 87, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [29.0, 18.1, 24.6, 18.7, 23.7, 12.5, 17.6, 15.1, 15.4, 'BYE', 25.0, 18.2, 25.9, 23.8, 25.0, 21.1, 12.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2576414.png",
    "name": "Raheem Mostert",
    "depthchart": "Starter: RB-1",
    "team": "San Francisco 49ers",
    "projected": 14.4,
    "opponent": "Seattle Seahawks",
    "home_away": "at ",
    "opp_rank_Pos": 24,
    "team_rank_Pos": 2,
    "avg_fp2": 9.23,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 21.36,
    "fanduelSalary": "$13000",
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
    "week17": ""
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
                         data: [4.5, 22.6, 5.9, 'BYE', 3.4, 1.3, 0.0, 'DNP', -0.2, 4.0, 3.7, 13.2, 22.4, 23.9, 10.4, 11.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.7, 2.1, 6.4, 'BYE', 4.9, 4.1, 4.6, 'DNP', 5.1, 3.3, 8.7, 5.7, 1.5, 3.3, 9.3, 12.2, 14.4]
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
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/17359.png",
    "name": "Damien Williams",
    "depthchart": "Starter: RB-1",
    "team": "Kansas City Chiefs",
    "projected": 14.0,
    "opponent": "Los Angeles Chargers",
    "home_away": "",
    "opp_rank_Neu": 16,
    "team_rank_Neu": 23,
    "avg_fp2": 9.6,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 22.66,
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
    "week17": ""
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
                         data: [15.5, 7.1, 'DNP', 'DNP', 5.3, 6.3, 1.6, 1.0, 19.8, 11.4, 11.3, 'BYE', 'DNP', 'DNP', 'DNP', 16.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.1, 8.5, 'DNP', 'DNP', 12.3, 11.5, 6.6, 9.9, 8.6, 7.7, 10.9, 'BYE', 'DNP', 'DNP', 'DNP', 12.6, 14.0]
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
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3068267.png",
    "name": "Austin Ekeler",
    "depthchart": "Backup: RB-2",
    "team": "Los Angeles Chargers",
    "projected": 14.0,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Pos": 26,
    "team_rank_Neg": 27,
    "avg_fp2": 16.64,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 23.83,
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
    "headlineNews": "Crosses 1,500 scrimmage yards",
    "report": "Ekeler carried the ball nine times for 46 yards and caught nine of 11 targets for 43 yards in Sunday's loss to the Chiefs,",
    "analysis": "While Ekeler was seven yards short of joining just a handful of running backs to record 1,000 receiving yards in a season, it was nevertheless a banner year for the third-year pro as he finished the 2019 campaign with 557 rushing yards, 993 receiving yards and 11 total touchdowns. The 24-year-old proved that he could be an every-down back in his short stint as the starter to open 2019 while Melvin Gordon was holding out, but it's unclear whether the Chargers will operate with that same mindset next season. At the very least, Ekeler figures to share time with another back, but whether he's the primary option or a dangerous No. 2 could be one of the biggest questions looming for the Chargers in 2020.",
    "timestamp": "2019-12-30 09:26 AM",
    "week01": 36.4,
    "week02": 20.3,
    "week03": 11.6,
    "week04": 26.7,
    "week05": 14.8,
    "week06": 4.3,
    "week07": 22.0,
    "week08": 9.2,
    "week09": 11.3,
    "week10": 11.8,
    "week11": 17.2,
    "week12": "BYE",
    "week13": 14.7,
    "week14": 29.3,
    "week15": 10.6,
    "week16": 9.4,
    "week17": ""
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
                         data: [36.4, 20.3, 11.6, 26.7, 14.8, 4.3, 22.0, 9.2, 11.3, 11.8, 17.2, 'BYE', 14.7, 29.3, 10.6, 9.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.4, 14.5, 18.1, 15.8, 21.3, 9.5, 9.7, 8.9, 8.1, 14.3, 7.3, 'BYE', 8.5, 11.8, 12.0, 8.6, 14.0]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.7, 5.6, 3.4, 0.0, 8.8, 7.5, 3.1, 0.0, 0.0, 2.6, 2.6, 'BYE', 1.6, 3.5, 4.9, 9.1, 0.0]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 128, 198, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.3, 45.0, 41.6, 36.2, 36.3, 25.5, 23.7, 26.1, 23.1, 22.5, 15.9, 'BYE', 26.6, 14.6, 29.9, 13.1, 33.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3139605.png",
    "name": "Marlon Mack",
    "depthchart": "Starter: RB-1",
    "team": "Indianapolis Colts",
    "projected": 13.2,
    "opponent": "Jacksonville Jaguars",
    "home_away": "at ",
    "opp_rank_Pos": 28,
    "team_rank_Pos": 4,
    "avg_fp2": 11.89,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 25.65,
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
    "headlineNews": "Finishes season on strong note",
    "report": "Mack rushed 15 times for 77 yards and two touchdowns in Sunday's 38-20 loss to Jacksonville.",
    "analysis": "Mack was the lone bright spot for the Colts from a fantasy perspective, providing the only two offensive touchdowns the team could muster against the Jaguars' defense. The 23-year-old was able to eclipse the 1,000-yard rushing mark for the first time in his career, proving that last year's modest breakout (908 yards and nine touchdowns over 12 games) was no fluke. He didn't provide much in terms of receiving (14 receptions for 82 yards ), ceding most of that work to Nyheim Hines. Mack is in line to remain Indianapolis' early down back next season -- although his $735,000 salary could create a potential holdout -- a situation that makes him an excellent fantasy option in non-PPR formats.",
    "timestamp": "2019-12-29 05:28 PM",
    "week01": 25.4,
    "week02": 7.3,
    "week03": 15.8,
    "week04": 3.9,
    "week05": 16.3,
    "week06": "BYE",
    "week07": 7.1,
    "week08": 15.5,
    "week09": 8.9,
    "week10": 8.7,
    "week11": 16.9,
    "week12": "DNP",
    "week13": "DNP",
    "week14": 9.8,
    "week15": 1.9,
    "week16": 17.1,
    "week17": ""
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
                         data: [25.4, 7.3, 15.8, 3.9, 16.3, 'BYE', 7.1, 15.5, 8.9, 8.7, 16.9, 'DNP', 'DNP', 9.8, 1.9, 17.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.3, 9.8, 13.0, 14.2, 15.0, 'BYE', 12.3, 7.9, 10.3, 11.6, 16.7, 'DNP', 'DNP', 7.3, 8.3, 17.1, 13.2]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.3, 1.4, 2.9, 8.9, 2.7, 'BYE', 0.4, 4.1, 3.6, 1.7, 5.0, 'DNP', 'DNP', 2.8, 4.7, 3.2, 1.7]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [23.9, 20.2, 13.5, 20.6, 20.0, 'BYE', 16.2, 16.3, 18.9, 20.1, 9.9, 'DNP', 'DNP', 16.1, 14.0, 10.8, 19.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3916925.png",
    "name": "Kerryon Johnson",
    "depthchart": "Starter: RB-1",
    "team": "Detroit Lions",
    "projected": 13.2,
    "opponent": "Green Bay Packers",
    "home_away": "",
    "opp_rank_Neu": 23,
    "team_rank_Neu": 22,
    "avg_fp2": 9.81,
    "opp_rank_allowed_fp2_Pos": 24,
    "opp_avg_allowed_fp2": 23.01,
    "fanduelSalary": "$4500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0076B6",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(0, 118, 182, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#0076B6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/det.png",
    "headlineNews": "Finds end zone in final contest",
    "report": "Johnson recorded 11 carries for 53 yards and a touchdown in the team's Week 17 loss to the Packers.",
    "analysis": "Johnson worked effectively in his second game back from injured reserve, ripping off long runs of 20 and 14 yards. He also punched in his third touchdown of the season, finding the end zone from one yard out late in the second quarter. Though his 2019 season was derailed by a knee injury, Johnson should serve as the Lions lead back in 2020 and will likely be touted as a top breakout candidate.",
    "timestamp": "2019-12-29 05:12 PM",
    "week01": 7.2,
    "week02": 15.8,
    "week03": 10.8,
    "week04": 14.7,
    "week05": "BYE",
    "week06": 13.1,
    "week07": 2.3,
    "week08": "DNP",
    "week09": "DNP",
    "week10": "DNP",
    "week11": "DNP",
    "week12": "DNP",
    "week13": "DNP",
    "week14": "DNP",
    "week15": "DNP",
    "week16": 4.8,
    "week17": ""
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
                         data: [7.2, 15.8, 10.8, 14.7, 'BYE', 13.1, 2.3, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 4.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.0, 18.1, 12.5, 8.9, 'BYE', 11.5, 11.5, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 10.2, 13.2]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [13.4, 3.8, 3.9, 3.2, 'BYE', 5.0, 6.2, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 0.0, 2.7]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 118, 182, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.1, 18.1, 18.0, 20.9, 'BYE', 18.2, 18.2, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 20.5, 27.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3929630.png",
    "name": "Saquon Barkley",
    "depthchart": "Starter: RB-1",
    "team": "New York Giants",
    "projected": 13.0,
    "opponent": "Philadelphia Eagles",
    "home_away": "",
    "opp_rank_Neg": 3,
    "team_rank_Neu": 20,
    "avg_fp2": 16.57,
    "opp_rank_allowed_fp2_Neu": 7,
    "opp_avg_allowed_fp2": 17.27,
    "fanduelSalary": "$9300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#0B2265",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(11, 34, 101, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png",
    "headlineNews": "Finds end zone in finale",
    "report": "Barkley carried the ball 17 times for 92 yards and a touchdown and caught three of four targets for 25 yards in Sunday's 34-17 loss to the Eagles.",
    "analysis": "Most of his production came on a 68-yard TD run late in the third quarter that proved to be the final points of the season for the Giants. Barkley had a strong finish to 2019, gaining 539 scrimmage yards and five touchdowns over the final three games, and on the season he amassed 1,003 rushing yards and six TDs on the ground while catching 52 of 73 targets for 438 yards and two more scores despite missing three games with an ankle injury. Assuming he can stay healthy next year, expect Barkley to put together numbers more like his dynamic rookie season, especially if Daniel Jones continues to develop and prevents defenses from being able to stack the box.",
    "timestamp": "2019-12-29 06:38 PM",
    "week01": 15.9,
    "week02": 21.0,
    "week03": 5.7,
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": 15.5,
    "week08": 24.3,
    "week09": 12.5,
    "week10": 5.6,
    "week11": "BYE",
    "week12": 7.0,
    "week13": 13.0,
    "week14": 8.2,
    "week15": 28.3,
    "week16": 41.9,
    "week17": ""
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
                         data: [15.9, 21.0, 5.7, 'DNP', 'DNP', 'DNP', 15.5, 24.3, 12.5, 5.6, 'BYE', 7.0, 13.0, 8.2, 28.3, 41.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [20.5, 18.0, 12.4, 'DNP', 'DNP', 'DNP', 13.5, 17.3, 16.3, 19.2, 'BYE', 14.7, 15.3, 17.8, 23.5, 27.6, 13.0]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.6, 5.6, 12.3, 'DNP', 'DNP', 'DNP', 12.6, 12.0, 13.2, 22.4, 'BYE', 13.9, 10.5, 4.7, 5.9, 2.9, 0.0]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [23.4, 28.9, 32.3, 'DNP', 'DNP', 'DNP', 29.7, 25.1, 27.8, 31.9, 'BYE', 24.4, 31.8, 16.2, 20.0, 28.7, 33.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15825.png",
    "name": "Le'Veon Bell",
    "depthchart": "Starter: RB-1",
    "team": "New York Jets",
    "projected": 12.3,
    "opponent": "Buffalo Bills",
    "home_away": "at ",
    "opp_rank_Neu": 12,
    "team_rank_Neg": 31,
    "avg_fp2": 12.27,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 20.7,
    "fanduelSalary": "$7100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#125740",
    "tmColorDark": "#003f2d",
    "tmColorLite_rgba": "rgba(18, 87, 64, 0.2)",
    "tmColorDark_rgba": "rgba(0, 63, 45, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png",
    "headlineNews": "Facing uncertain future with Jets",
    "report": "Coach Adam Gase declined to comment on whether he wants Bell back with the team for 2020, Rich Cimini of ESPN.com reports. \"[Bell]'s under contract for three years. You can ask Joe (Douglas),\" Gase said. \"You can ask Joe tomorrow...I'm not in charge of personnel.\"",
    "analysis": "Bell signed a four-year, $52.5 million contract with the Jets in March, two months before the team fired former general manager Mike Maccagnan. There have been reports ever since about Gase being annoyed by the contract, though he's repeatedly praised Bell for his professionalism and effort level. The 27-year-old finished 2019 with career-worst marks for yards per carry (3.2), rushing yards per game (52.6) and total yards per game (83.3), rarely finding room to run behind a putrid offensive line. Gase and general manager Joe Douglas may not be fans of the original signing, but that doesn't necessarily mean Bell will end up with a different team, as it won't be easy to work out a trade for a running back with a $13 million salary fully guaranteed (per overthecap.com) for 2020. The contract doesn't have any guarantees beyond next season.",
    "timestamp": "2019-12-30 08:28 AM",
    "week01": 20.2,
    "week02": 15.9,
    "week03": 8.3,
    "week04": "BYE",
    "week05": 12.3,
    "week06": 11.8,
    "week07": 8.1,
    "week08": 5.0,
    "week09": 16.1,
    "week10": 14.8,
    "week11": 16.2,
    "week12": 13.3,
    "week13": 8.7,
    "week14": "DNP",
    "week15": 9.8,
    "week16": 11.3,
    "week17": ""
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
                         data: [20.2, 15.9, 8.3, 'BYE', 12.3, 11.8, 8.1, 5.0, 16.1, 14.8, 16.2, 13.3, 8.7, 'DNP', 9.8, 11.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [20.5, 22.8, 12.7, 'BYE', 16.6, 21.0, 15.9, 13.7, 17.7, 17.3, 15.5, 18.8, 16.8, 'DNP', 15.6, 13.4, 12.3]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [11.6, 14.6, 5.8, 'BYE', 3.2, 10.9, 6.1, 15.2, 8.1, 10.6, 8.1, 11.0, 12.7, 'DNP', 9.5, 8.9, 6.3]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  "rgba(18, 87, 64, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [29.7, 38.2, 35.1, 'BYE', 23.2, 23.1, 20.5, 25.7, 24.5, 17.7, 18.7, 18.6, 17.0, 'DNP', 15.6, 17.0, 18.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/10452.png",
    "name": "Adrian Peterson",
    "depthchart": "Starter: RB-1",
    "team": "Washington Redskins",
    "projected": 12.3,
    "opponent": "Dallas Cowboys",
    "home_away": "at ",
    "opp_rank_Neu": 13,
    "team_rank_Neu": 21,
    "avg_fp2": 9.44,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 20.07,
    "fanduelSalary": "$6300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#773141",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(119, 49, 65, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png",
    "headlineNews": "Solid in season finale",
    "report": "Peterson carried the ball 13 times for 78 yards in Sunday's 47-16 loss to the Cowboys.",
    "analysis": "He also caught one of four targets for zero yards. Peterson showed he was still a capable lead back late in the season after Derrius Guice (knee) got hurt once again, amassing 355 rushing yards and four TDs over the last five games. The future Hall of Famer has one year left on his current contract with Washington that carries a reasonable $3 million cap hit, but whether Peterson returns to the club or has to look for a job elsewhere in the offseason will depend on who gets hired as the new head coach, as well as the health of both Guice and 2019 fourth-round pick Bryce Love (knee).",
    "timestamp": "2019-12-29 05:45 PM",
    "week01": "DNP",
    "week02": 10.2,
    "week03": 3.9,
    "week04": 2.8,
    "week05": 1.8,
    "week06": 14.6,
    "week07": 6.1,
    "week08": 11.3,
    "week09": 13.5,
    "week10": "BYE",
    "week11": 4.0,
    "week12": 5.4,
    "week13": 15.9,
    "week14": 13.6,
    "week15": 16.6,
    "week16": 12.5,
    "week17": ""
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
                         data: ['DNP', 10.2, 3.9, 2.8, 1.8, 14.6, 6.1, 11.3, 13.5, 'BYE', 4.0, 5.4, 15.9, 13.6, 16.6, 12.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 12.0, 8.3, 9.3, 9.2, 11.1, 8.8, 7.2, 11.6, 'BYE', 8.0, 8.7, 5.7, 3.4, 12.9, 10.0, 12.3]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 4.4, 5.6, 3.1, 9.4, 3.0, 5.6, 2.0, 5.5, 'BYE', 7.9, 2.4, 0.0, 0.9, 6.0, 6.0, 7.8]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 27.2, 20.4, 19.6, 25.9, 17.3, 30.2, 17.7, 13.9, 'BYE', 18.8, 7.3, 8.1, 12.3, 18.8, 17.5, 17.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4045163.png",
    "name": "Miles Sanders",
    "depthchart": "Starter: RB-1",
    "team": "Philadelphia Eagles",
    "projected": 11.7,
    "opponent": "New York Giants",
    "home_away": "at ",
    "opp_rank_Neu": 19,
    "team_rank_Neu": 12,
    "avg_fp2": 12.47,
    "opp_rank_allowed_fp2_Neu": 14,
    "opp_avg_allowed_fp2": 20.25,
    "fanduelSalary": "$7400",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Ankle",
    "tmColorLite": "#386168",
    "tmColorDark": "#004C54",
    "tmColorLite_rgba": "rgba(56, 97, 104, 0.2)",
    "tmColorDark_rgba": "rgba(0, 76, 84, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    "headlineNews": "Considered day-to-day",
    "report": "Sanders (ankle) is considered day-to-day, Adam Caplan of SiriusXM Radio reports.",
    "analysis": "Coach Doug Pederson didn't provide any details, but his brief comment suggests the running back at least avoided a high-ankle sprain, which would typically draw a more pessimistic assessment. Sanders initially tried to play through the injury in Sunday's 34-17 win over the Giants, eventually sitting out for the entire second half while Boston Scott took over as the lead back (and rumbled for 138 scrimmage yards and three TDs on 23 touches). It's a safe bet Sanders will land on the injury report ahead of Sunday's wild-card matchup with Seattle. Pederson did mention that Jordan Howard is likely to see more work come Sunday, Dave Zangaro of NBC Sports Philadelphia reports.",
    "timestamp": "2019-12-30 09:21 AM",
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
    "week17": ""
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
                         data: [3.2, 5.2, 11.6, 7.2, 8.4, 16.7, 4.7, 21.3, 8.8, 'BYE', 5.7, 10.1, 19.0, 8.9, 32.2, 24.1]
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
    "projected": 11.2,
    "opponent": "Miami Dolphins",
    "home_away": "",
    "opp_rank_Pos": 27,
    "team_rank_Neu": 19,
    "avg_fp2": 8.89,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 23.64,
    "fanduelSalary": "$6500",
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
    "week17": ""
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
                         data: [1.4, 12.5, 7.1, 6.3, 19.8, 12.3, 21.9, 7.4, 3.5, 'BYE', 5.4, 8.5, 4.5, 1.4, 10.8, 10.6]
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
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16777.png",
    "name": "Carlos Hyde",
    "depthchart": "Starter: RB-1",
    "team": "Houston Texans",
    "projected": 11.1,
    "opponent": "Tennessee Titans",
    "home_away": "",
    "opp_rank_Neu": 11,
    "team_rank_Neu": 10,
    "avg_fp2": 9.85,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 22.04,
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
    "headlineNews": "Scores lone offensive touchdown",
    "report": "Hyde ran for 27 yards and a touchdown on 17 carries and added a 10-yard catch during Saturday's 23-20 win over Tampa Bay.",
    "analysis": "Hyde helped give Houston a two-score lead midway through the second quarter, bouncing off of defenders for a tough one-yard touchdown run. From a yards-per-carry perspective, Saturday's matchup against a stout Buccaneers run defense was Hyde's worst game of the season, but he's otherwise been solid down the stretch with at least four yards per carry in six of his last eight games. He'll have an opportunity to rebound in the season finale against Tennessee next Sunday. The veteran back ran for 104 yards and a touchdown in the division matchup in Week 15.",
    "timestamp": "2019-12-21 02:22 PM",
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
    "week17": ""
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
                         data: ['DNP', 9.0, 7.9, 8.4, 12.0, 17.5, 3.5, 8.3, 14.0, 'BYE', 12.5, 6.7, 2.7, 8.8, 16.4, 10.2]
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
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2979843.png",
    "name": "Kenyan Drake",
    "depthchart": "Starter: RB-1",
    "team": "Arizona Cardinals",
    "projected": 10.6,
    "opponent": "Los Angeles Rams",
    "home_away": "at ",
    "opp_rank_Neu": 22,
    "team_rank_Neu": 9,
    "avg_fp2": 13.34,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 20.8,
    "fanduelSalary": "$7300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#97233F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(151, 35, 63, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#97233F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
    "headlineNews": "Late-season TD surge continues",
    "report": "Drake ran for 60 yards and a touchdown on 12 carries and caught three of four targets for 23 receiving yards during Sunday's 31-24 loss to the Rams.",
    "analysis": "The 25-year-old back concluded his late-season scoring surge during Arizona's 2019 finale, accounting for his seventh TD since Week 15 while also reaching 5.0 yards per carry for a third straight game. Drake relegated former Cardinals workhorse David Johnson to a bit role over the latter half of 2019, amassing 18.9 offensive touches per game to Johnson's stunningly low total of 3.3 touches per appearance between Weeks 9 and 17. While Johnson's contract extends through 2021, it seems extremely unlikely that the team would deploy him as the lead back next season given his disintegrating role over the past two months. Drake, meanwhile, will become an unrestricted free agent this offseason, but the Cardinals may very well look to secure his services long term as result of the back's prolific production during the late stages of an otherwise mediocre year for Arizona's offense.",
    "timestamp": "2019-12-29 07:30 PM",
    "week01": 3.7,
    "week02": 7.3,
    "week03": 6.7,
    "week04": 8.8,
    "week05": "DNP",
    "week06": 10.0,
    "week07": 7.3,
    "week08": "DNP",
    "week09": 26.2,
    "week10": 7.1,
    "week11": 11.0,
    "week12": "BYE",
    "week13": 6.1,
    "week14": 8.2,
    "week15": 39.1,
    "week16": 31.9,
    "week17": ""
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
                         data: [3.7, 7.3, 6.7, 8.8, 'DNP', 10.0, 7.3, 'DNP', 26.2, 7.1, 11.0, 'BYE', 6.1, 8.2, 39.1, 31.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.2, 7.2, 8.9, 11.4, 'DNP', 9.4, 11.3, 'DNP', 11.4, 4.5, 6.3, 'BYE', 17.5, 14.1, 14.6, 17.8, 10.6]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.9, 4.4, 4.6, 7.6, 'DNP', 0.7, 4.8, 'DNP', 8.1, 11.5, 0.0, 'BYE', 6.9, 5.5, 3.8, 2.0, 2.9]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.0, 18.1, 19.4, 17.9, 'DNP', 15.0, 16.5, 'DNP', 16.7, 28.2, 29.7, 'BYE', 19.7, 17.2, 14.7, 22.9, 43.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3051926.png",
    "name": "Gus Edwards",
    "depthchart": "Starter: RB-1",
    "team": "Baltimore Ravens",
    "projected": 10.3,
    "opponent": "Pittsburgh Steelers",
    "home_away": "",
    "opp_rank_Neu": 10,
    "team_rank_Pos": 1,
    "avg_fp2": 5.16,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 16.31,
    "fanduelSalary": "$6600",
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
    "week17": ""
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
                         data: [5.6, 1.1, 7.8, 4.1, 2.8, 3.4, 3.5, 'BYE', 8.7, 1.7, 17.2, 5.5, 2.7, 2.0, 3.5, 7.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.3, 5.3, 5.6, 4.8, 6.5, 10.6, 6.4, 'BYE', 5.1, 6.6, 3.7, 4.2, 5.6, 5.2, 6.4, 6.9, 10.3]
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
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16944.png",
    "name": "Devonta Freeman",
    "depthchart": "Starter: RB-1",
    "team": "Atlanta Falcons",
    "projected": 10.2,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "at ",
    "opp_rank_Neg": 1,
    "team_rank_Neg": 30,
    "avg_fp2": 12.29,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 13.97,
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
    "headlineNews": "Rushing inefficiency reduces value",
    "report": "Freeman ran for 58 yards on 18 carries and hauled in two of four targets for 15 receiving yards during Sunday's 28-22 overtime win against Tampa Bay.",
    "analysis": "Dating back to the start of the 2018 campaign, Freeman has produced nowhere near the rushing totals he established over his first three years as Atlanta's starting running back. In 16 appearances over the past two seasons, Freeman has averaged just 3.9 yards per carry with two total rushing scores, while his per-season averages between 2015 and 2017 were 4.4 yards per attempt and 9.7 rushing touchdowns per season. Though his rushing efficiency took a significant dip in 2019, Freeman's receiving output was the third greatest of his career (410 yards) and his four receiving scores established a new personal best. Under contract through 2022, Freeman remains the unquestioned No. 1 option in Atlanta's RB rotation heading into the offseason.",
    "timestamp": "2019-12-29 02:56 PM",
    "week01": 2.6,
    "week02": 7.9,
    "week03": 11.0,
    "week04": 14.0,
    "week05": 15.5,
    "week06": 25.3,
    "week07": 3.5,
    "week08": 12.2,
    "week09": "BYE",
    "week10": 6.3,
    "week11": "DNP",
    "week12": "DNP",
    "week13": 8.4,
    "week14": 17.4,
    "week15": 6.5,
    "week16": 29.2,
    "week17": ""
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
                         data: [2.6, 7.9, 11.0, 14.0, 15.5, 25.3, 3.5, 12.2, 'BYE', 6.3, 'DNP', 'DNP', 8.4, 17.4, 6.5, 29.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.7, 14.3, 12.7, 11.6, 13.4, 8.3, 11.4, 11.9, 'BYE', 14.3, 'DNP', 'DNP', 9.1, 17.8, 9.0, 15.1, 10.2]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.5, 1.4, 0.0, 4.4, 8.9, 13.4, 10.4, 5.9, 'BYE', 10.2, 'DNP', 'DNP', 8.1, 8.2, 8.5, 10.4, 2.5]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.3, 15.4, 22.4, 22.4, 18.3, 25.9, 25.2, 21.4, 'BYE', 21.0, 'DNP', 'DNP', 16.0, 23.8, 18.4, 22.6, 28.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15920.png",
    "name": "Latavius Murray",
    "depthchart": "Backup: RB-2",
    "team": "New Orleans Saints",
    "projected": 9.9,
    "opponent": "Carolina Panthers",
    "home_away": "at ",
    "opp_rank_Pos": 31,
    "team_rank_Neu": 17,
    "avg_fp2": 8.81,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 28.47,
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
    "week17": ""
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
                         data: [11.7, 2.8, 0.2, 2.5, 4.4, 9.4, 29.5, 32.2, 'BYE', 2.9, 4.2, 12.4, 0.2, 10.4, 5.9, 3.5]
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
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3059915.png",
    "name": "Kareem Hunt",
    "depthchart": "Backup: RB-2",
    "team": "Cleveland Browns",
    "projected": 9.7,
    "opponent": "Cincinnati Bengals",
    "home_away": "at ",
    "opp_rank_Pos": 32,
    "team_rank_Neu": 11,
    "avg_fp2": 11.0,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 24.01,
    "fanduelSalary": "$6100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FF3C00",
    "tmColorDark": "#311D00",
    "tmColorLite_rgba": "rgba(255, 60, 0, 0.2)",
    "tmColorDark_rgba": "rgba(49, 29, 0, 0.2)",
    "tmTextLite": "#FF3C00",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
    "headlineNews": "Season-low yardage in Week 17",
    "report": "Hunt gained four yards on three carries and caught three of four targets for 32 yards in Sunday's 33-23 loss to the Bengals.",
    "analysis": "The 36 combined yards from scrimmage were a season low for Hunt, who finishes the season with 179 rushing yards, 37 receptions, 285 receiving yards and three touchdowns over eight games. For the Browns, he worked hard and appeared to have learned from his off-field mistakes that led to an eight-game suspension to start the 2019 season. The NFL rushing leader in 2017 was used more as a receiving threat, which worked out well at times for the team. Hunt and Nick Chubb were a potent two-back duo that presented challenges for opposing defenses. Hunt can become a restricted free agent in the coming offseason, but the Ohio native has expressed interest in staying close to home, per Mary Kay Cabot of the Cleveland Plain Dealer. With the Browns in the market for a new head coach -- Freddie Kitchens was fired after the Week 17 loss -- there's no guarantee Hunt will be in the team's plans for 2020.",
    "timestamp": "2019-12-30 05:04 AM",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": "BYE",
    "week08": "DNP",
    "week09": "DNP",
    "week10": 10.9,
    "week11": 8.8,
    "week12": 11.6,
    "week13": 15.0,
    "week14": 13.8,
    "week15": 11.6,
    "week16": 5.3,
    "week17": ""
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
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 10.9, 8.8, 11.6, 15.0, 13.8, 11.6, 5.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 10.5, 9.4, 12.1, 9.2, 12.5, 8.6, 9.5, 9.7]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 0.0, 14.0, 2.7, 1.8, 5.1, 6.2, 8.2, 6.6]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 36.9, 36.7, 36.9, 21.9, 21.0, 25.5, 20.2, 16.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3912550.png",
    "name": "Ronald Jones",
    "depthchart": "Starter: RB-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 9.7,
    "opponent": "Atlanta Falcons",
    "home_away": "",
    "opp_rank_Neu": 15,
    "team_rank_Neg": 25,
    "avg_fp2": 9.35,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 19.03,
    "fanduelSalary": "$6200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#D50A0A",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(213, 10, 10, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#D50A0A",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Best game of season in finale",
    "report": "Jones rushed 11 times for 106 yards and secured both of his targets for 10 yards in the Buccaneers' 28-22 overtime loss to the Falcons on Sunday. He also committed two fumbles, losing one.",
    "analysis": "Jones' pair of fumbles were naturally a blemish, but he did help make up for it with a career-high rushing yardage total that was partly comprised of a 33-yard run. It was a positive finish to the season for Jones, who posted 183 total rushing yards over his last pair of games and was exponentially better than during an utterly forgettable 2018 rookie campaign. Head coach Bruce Arians never quite committed fully to either Jones or backfield mate Peyton Barber as a feature back this season, which makes Jones' final total of 724 rushing yards respectable given the circumstances.",
    "timestamp": "2019-12-29 02:30 PM",
    "week01": 9.8,
    "week02": 0.9,
    "week03": 12.6,
    "week04": 14.7,
    "week05": 6.6,
    "week06": 7.0,
    "week07": "BYE",
    "week08": 5.7,
    "week09": 15.2,
    "week10": 18.6,
    "week11": 2.4,
    "week12": 14.2,
    "week13": 0.8,
    "week14": 7.9,
    "week15": 5.4,
    "week16": 18.4,
    "week17": ""
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
                         data: [9.8, 0.9, 12.6, 14.7, 6.6, 7.0, 'BYE', 5.7, 15.2, 18.6, 2.4, 14.2, 0.8, 7.9, 5.4, 18.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.9, 7.3, 7.2, 6.0, 7.8, 15.1, 'BYE', 7.5, 6.7, 8.8, 12.2, 10.3, 15.1, 15.5, 8.1, 12.2, 9.7]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.0, 0.0, 0.0, 2.3, 'BYE', 0.0, 0.3, 2.4, 3.0, 4.1, 1.4, 0.0, 0.1, 0.0, 2.0]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(213, 10, 10, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [5.3, 7.9, 6.2, 6.1, 10.7, 11.0, 'BYE', 9.2, 11.2, 13.9, 11.0, 19.3, 11.7, 18.3, 11.2, 8.8, 22.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/12514.png",
    "name": "LeSean McCoy",
    "depthchart": "Backup: RB-2",
    "team": "Kansas City Chiefs",
    "projected": 8.9,
    "opponent": "Los Angeles Chargers",
    "home_away": "",
    "opp_rank_Neu": 16,
    "team_rank_Neu": 23,
    "avg_fp2": 7.9,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 22.66,
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
    "headlineNews": "Likely to rejoin backfield mix",
    "report": "McCoy will likely be active for Sunday's regular-season finale against the Chargers after the Chiefs placed Spencer Ware (shoulder) on injured reserve Wednesday, Herbie Teope of The Kansas City Star reports.",
    "analysis": "With Ware joining Darrel Williams (hamstring) on IR, the Chiefs are down to three healthy running backs in McCoy, Damien Williams and Darwin Thompson. Damien should continue to headline the Kansas City backfield for the foreseeable future after staging a successful return from a three-game absence due to a rib injury in last week's win over Chicago, leaving Thompson and McCoy to vie for change-of-pace work. McCoy  had been inactive in Week 16, but Thompson may have only gotten the nod ahead of him as the Chiefs' third back thanks to his special-teams contributions. With that in mind, it wouldn't be surprising if McCoy made the leap from a healthy scratch to the No. 2 back in Week 17, a role that could make him a decent punt-play option in DFS contests.",
    "timestamp": "2019-12-26 10:57 AM",
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
    "week17": ""
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
                         data: ['DNP', 3.8, 21.5, 15.9, 1.3, 5.4, 8.6, 6.3, 1.4, 'DNP', 13.7, 'BYE', 10.5, 4.8, 1.6, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 5.7, 6.8, 7.1, 7.2, 7.8, 4.0, 5.3, 7.1, 'DNP', 5.1, 'BYE', 5.8, 8.6, 8.5, 'DNP', 8.9]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 4.9, 0.0, 10.6, 13.0, 8.5, 2.5, 5.6, 3.8, 'DNP', 2.0, 'BYE', 3.8, 5.9, 7.3, 'DNP', 4.1]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 184, 28, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 13.4, 16.0, 20.0, 21.2, 16.9, 9.0, 11.0, 12.0, 'DNP', 10.7, 'BYE', 11.4, 18.4, 10.4, 'DNP', 10.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3916430.png",
    "name": "Nyheim Hines",
    "depthchart": "Backup: RB-2",
    "team": "Indianapolis Colts",
    "projected": 8.2,
    "opponent": "Jacksonville Jaguars",
    "home_away": "at ",
    "opp_rank_Pos": 28,
    "team_rank_Pos": 4,
    "avg_fp2": 5.92,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 25.65,
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
    "headlineNews": "Dominates on special teams",
    "report": "Hines had a four-yard run on his sole carry and added a two-yard catch during Sunday's 38-6 win over Carolina. He also compiled 195 yards and two touchdowns on three punt returns.",
    "analysis": "Hines extended the Colts' lead to two scores midway through the first quarter with an 84-yard touchdown on a punt return. He subsequently put the game away midway through the fourth quarter with a weaving 71-yard runback. They were the first two return touchdowns of Hines' career. The season ends next Sunday versus the Jaguars, against which Hines ran for 11 yards and a touchdown on three carries and gained 44 yards on a pair of kick returns back in Week 11.",
    "timestamp": "2019-12-22 02:50 PM",
    "week01": 3.7,
    "week02": 1.9,
    "week03": 4.4,
    "week04": 7.5,
    "week05": 6.5,
    "week06": "BYE",
    "week07": 2.1,
    "week08": 6.1,
    "week09": 3.3,
    "week10": 6.4,
    "week11": 11.0,
    "week12": 7.1,
    "week13": 11.0,
    "week14": 2.5,
    "week15": 2.2,
    "week16": 13.1,
    "week17": ""
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
                         data: [3.7, 1.9, 4.4, 7.5, 6.5, 'BYE', 2.1, 6.1, 3.3, 6.4, 11.0, 7.1, 11.0, 2.5, 2.2, 13.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.8, 6.8, 5.8, 8.7, 7.9, 'BYE', 6.4, 2.3, 6.9, 7.7, 11.7, 8.5, 6.4, 3.9, 7.1, 9.5, 8.2]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.1, 0.0, 0.0, 0.0, 4.9, 'BYE', 5.8, 2.7, 2.8, 3.0, 0.0, 0.4, 0.6, 0.0, 3.2, 6.3, 3.0]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.7, 17.1, 25.9, 17.5, 12.5, 'BYE', 8.3, 6.1, 5.2, 12.0, 12.5, 7.6, 7.1, 14.4, 11.4, 10.1, 22.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14198.png",
    "name": "Dion Lewis",
    "depthchart": "Backup: RB-2",
    "team": "Tennessee Titans",
    "projected": 8.2,
    "opponent": "Houston Texans",
    "home_away": "at ",
    "opp_rank_Neu": 20,
    "team_rank_Pos": 6,
    "avg_fp2": 3.79,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 23.1,
    "fanduelSalary": "$5400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#4495D1",
    "tmColorDark": "#002A5C",
    "tmColorLite_rgba": "rgba(68, 149, 209, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 92, 0.2)",
    "tmTextLite": "#4495D1",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ten.png",
    "headlineNews": "Quiet to conclude regular season",
    "report": "Lewis carried the ball once for seven yards in the team's Week 17 victory over Houston.",
    "analysis": "Lewis was on the field for only 11 snaps, and remained mostly uninvolved in the offense. After posting 917 total yards in his first year with the Titans, Lewis failed to gain any traction in 2019 and managed only 373 yards from scrimmage. While he signed a four-year deal to join Tennessee, the team has an out at the conclusion of the season that would result in only $1.1 million in dead cap. Given his minimal role, it wouldn't be a surprise to see the team opt to dump Lewis to avoid a $10.5 million hit for the remaining two years of his contract. Before his future is clarified, however, Lewis will try to help the Titans make a deep playoff push, beginning with a first-round matchup against New England.",
    "timestamp": "2019-12-30 10:52 AM",
    "week01": 2.8,
    "week02": 1.9,
    "week03": 2.5,
    "week04": 4.0,
    "week05": 4.0,
    "week06": 3.4,
    "week07": 0.2,
    "week08": 0.7,
    "week09": 5.8,
    "week10": "DNP",
    "week11": "BYE",
    "week12": 5.0,
    "week13": 1.4,
    "week14": 3.6,
    "week15": 8.6,
    "week16": 9.2,
    "week17": ""
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
                         data: [2.8, 1.9, 2.5, 4.0, 4.0, 3.4, 0.2, 0.7, 5.8, 'DNP', 'BYE', 5.0, 1.4, 3.6, 8.6, 9.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.9, 10.1, 7.3, 5.8, 6.7, 3.9, 6.4, 4.4, 6.0, 'DNP', 'BYE', 6.9, 1.6, 5.9, 7.7, 3.6, 8.2]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.2, 0.0, 0.0, 1.8, 0.4, 1.5, 2.6, 0.0, 0.0, 'DNP', 'BYE', 1.3, 0.7, 1.3, 1.5, 0.7, 1.2]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.9, 14.7, 7.6, 15.2, 5.1, 8.7, 11.7, 10.6, 8.4, 'DNP', 'BYE', 10.3, 4.1, 3.1, 2.9, 8.3, 8.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15966.png",
    "name": "Chris Thompson",
    "depthchart": "Backup: RB-2",
    "team": "Washington Redskins",
    "projected": 7.9,
    "opponent": "Dallas Cowboys",
    "home_away": "at ",
    "opp_rank_Neu": 13,
    "team_rank_Neu": 21,
    "avg_fp2": 7.1,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 20.07,
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
    "headlineNews": "Contributes 52 scrimmage yards",
    "report": "Thompson carried eight times for 34 yards and caught all four of his targets for 18 yards during Sunday's 41-35 loss to the Giants.",
    "analysis": "Thompson averaged a respectable 4.3 yards per carry on a season-high eight totes, but he was uncharacteristically quiet as a receiver despite the high-scoring nature of the game. Still, his 12 touches were also his high-water mark of the season, and he should remain involved next Sunday in the season finale against the Cowboys.",
    "timestamp": "2019-12-22 05:31 PM",
    "week01": 11.3,
    "week02": 7.6,
    "week03": 12.8,
    "week04": 8.0,
    "week05": 6.3,
    "week06": 3.0,
    "week07": "DNP",
    "week08": "DNP",
    "week09": "DNP",
    "week10": "BYE",
    "week11": "DNP",
    "week12": "DNP",
    "week13": 3.4,
    "week14": 7.8,
    "week15": 3.6,
    "week16": 7.2,
    "week17": ""
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
                         data: [11.3, 7.6, 12.8, 8.0, 6.3, 3.0, 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 3.4, 7.8, 3.6, 7.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.1, 6.6, 7.1, 8.5, 8.1, 11.5, 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 5.3, 2.0, 9.1, 8.7, 7.9]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 2.2, 4.3, 0.9, 7.5, 4.6, 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 2.0, 0.6, 4.9, 2.4, 3.2]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [19.2, 8.3, 16.4, 11.6, 17.0, 10.5, 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 13.7, 10.3, 9.4, 11.1, 11.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16913.png",
    "name": "James White",
    "depthchart": "Backup: RB-2",
    "team": "New England Patriots",
    "projected": 7.8,
    "opponent": "Miami Dolphins",
    "home_away": "",
    "opp_rank_Pos": 27,
    "team_rank_Neu": 19,
    "avg_fp2": 11.07,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 23.64,
    "fanduelSalary": "$6300",
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
    "week17": ""
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
                         data: [10.7, 10.4, 'DNP', 9.8, 10.2, 9.0, 9.4, 9.9, 15.4, 'BYE', 7.6, 0.4, 33.7, 9.9, 13.7, 4.9]
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
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3127211.png",
    "name": "Patrick Laird",
    "depthchart": "Starter: RB-1",
    "team": "Miami Dolphins",
    "projected": 7.6,
    "opponent": "New England Patriots",
    "home_away": "at ",
    "opp_rank_Neu": 7,
    "team_rank_Neg": 32,
    "avg_fp2": 3.41,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 13.18,
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
    "headlineNews": "Lukewarm finish to season",
    "report": "Laird carried the ball 11 times for 21 yards during Sunday's 27-24 win over the Patriots. He also secured four of five targets for 48 yards.",
    "analysis": "Laird once again did most of his damage through the air while struggling to produce on the ground in Sunday's season finale. The undrafted rookie out of California wraps up the 2019 season with 62 carries for 168 yards (2.7 YPC) and one touchdown. He also caught 24 of 30 targets for 204 yards. While it seems extremely unlikely that the Dolphins will deploy Laird as the lead back in 2020, the 24-year-old's solid performance down the stretch may very well secure him a rotational or depth role.",
    "timestamp": "2019-12-30 08:41 AM",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": 0.0,
    "week05": "BYE",
    "week06": "DNP",
    "week07": "DNP",
    "week08": "DNP",
    "week09": 0.0,
    "week10": 2.9,
    "week11": 8.8,
    "week12": 2.0,
    "week13": 14.8,
    "week14": 10.6,
    "week15": 6.4,
    "week16": 2.3,
    "week17": ""
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
                         data: ['DNP', 'DNP', 'DNP', 0.0, 'BYE', 'DNP', 'DNP', 'DNP', 0.0, 2.9, 8.8, 2.0, 14.8, 10.6, 6.4, 2.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 0.5, 'BYE', 'DNP', 'DNP', 'DNP', 0.9, 2.8, 3.3, 2.7, 3.4, 2.9, 10.2, 10.9, 7.6]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 1.0, 'BYE', 'DNP', 'DNP', 'DNP', 1.1, 2.5, 0.7, 1.3, 0.8, 0.0, 8.9, 3.9, 3.7]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 142, 151, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 1.6, 'BYE', 'DNP', 'DNP', 'DNP', 1.3, 2.8, 4.0, 7.5, 6.3, 22.6, 16.6, 14.3, 14.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15826.png",
    "name": "Giovani Bernard",
    "depthchart": "Backup: RB-2",
    "team": "Cincinnati Bengals",
    "projected": 7.5,
    "opponent": "Cleveland Browns",
    "home_away": "",
    "opp_rank_Pos": 30,
    "team_rank_Neg": 28,
    "avg_fp2": 3.53,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 22.98,
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
    "headlineNews": "Output defies snap share",
    "report": "Bernard had only two carries for three yards and two catches for 12 yards in Sunday's loss to the Dolphins despite getting 51 snaps on offense, good for a 57 percent share.",
    "analysis": "Joe Mixon came into the game dealing with the stomach flu, opening up the possibility that Bernard might get a little more work. While he was on the field more often, the Bengals still didn't turn to Bernard in any significant way. He heads into the season finale against Cleveland with exactly 400 scrimmage yards and zero touchdowns on the year, having not topping 46 yards in a game since Week 1.",
    "timestamp": "2019-12-24 09:20 AM",
    "week01": 7.3,
    "week02": 1.8,
    "week03": 2.2,
    "week04": 3.9,
    "week05": 4.1,
    "week06": 3.4,
    "week07": 1.4,
    "week08": 5.5,
    "week09": "BYE",
    "week10": -0.7,
    "week11": 5.1,
    "week12": 4.5,
    "week13": 1.7,
    "week14": 5.6,
    "week15": 4.7,
    "week16": 2.5,
    "week17": ""
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
                         data: [7.3, 1.8, 2.2, 3.9, 4.1, 3.4, 1.4, 5.5, 'BYE', -0.7, 5.1, 4.5, 1.7, 5.6, 4.7, 2.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.0, 10.4, 7.9, 7.6, 6.8, 6.1, 5.7, 7.9, 'BYE', 8.2, 7.7, 5.4, 3.5, 6.0, 6.4, 8.6, 7.5]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.5, 6.2, 10.8, 2.0, 0.0, 0.7, 2.9, 1.6, 'BYE', 1.2, 0.3, 2.3, 1.6, 1.1, 2.1, 0.0, 2.8]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.0, 18.6, 16.8, 23.9, 14.5, 7.5, 11.4, 7.2, 'BYE', 9.4, 5.7, 8.2, 6.1, 6.7, 7.7, 6.7, 8.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3139033.png",
    "name": "Mike Boone",
    "depthchart": "Starter: RB-1",
    "team": "Minnesota Vikings",
    "projected": 7.3,
    "opponent": "Chicago Bears",
    "home_away": "",
    "opp_rank_Neg": 6,
    "team_rank_Neu": 7,
    "avg_fp2": 1.7,
    "opp_rank_allowed_fp2_Neu": 15,
    "opp_avg_allowed_fp2": 20.53,
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
    "headlineNews": "Gashes Bears in finale",
    "report": "Boone carried 17 times for 148 yards and a touchdown Sunday against the Bears. He also caught two of three targets for 12 yards in the 21-19 loss.",
    "analysis": "Boone gashed a solid Chicago front for an impressive 8.7 yards per carry, thanks in large part to a career-long gain of 59 yards. He scored a one-yard rushing touchdown in the fourth quarter and rounded out his performance with a pair of catches as well. Boone disappointed many fantasy owners in last week's start against the Packers, but this performance was much more along the lines of what some thought he was capable of. With that said, the rookie back could head to the bench in the playoffs if Dalvin Cook (shoulder) and Alexander Mattison (ankle) return from their injuries.",
    "timestamp": "2019-12-29 01:38 PM",
    "week01": 0.0,
    "week02": "DNP",
    "week03": "DNP",
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
    "week14": "DNP",
    "week15": 17.6,
    "week16": 3.8,
    "week17": ""
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
                         data: [0.0, 'DNP', 'DNP', 0.0, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 17.6, 3.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.4, 'DNP', 'DNP', 1.7, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 0.7, 2.1, 7.3]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.3, 'DNP', 'DNP', 0.5, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 0.0, 0.0, 0.0]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  "rgba(224, 170, 25, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [1.7, 'DNP', 'DNP', 1.7, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 0.4, 0.5, 11.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2969962.png",
    "name": "Duke Johnson",
    "depthchart": "Backup: RB-2",
    "team": "Houston Texans",
    "projected": 7.3,
    "opponent": "Tennessee Titans",
    "home_away": "",
    "opp_rank_Neu": 11,
    "team_rank_Neu": 10,
    "avg_fp2": 7.85,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 22.04,
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
    "week17": ""
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
                         data: [11.0, 3.1, 3.4, 8.8, 7.2, 12.4, 6.6, 11.4, 16.6, 'BYE', 5.4, 3.5, 17.5, 7.5, 3.3, 0.1]
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
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3060022.png",
    "name": "Jordan Howard",
    "depthchart": "Reserve: RB-3",
    "team": "Philadelphia Eagles",
    "projected": 7.0,
    "opponent": "New York Giants",
    "home_away": "at ",
    "opp_rank_Neu": 19,
    "team_rank_Neu": 12,
    "avg_fp2": 11.82,
    "opp_rank_allowed_fp2_Neu": 14,
    "opp_avg_allowed_fp2": 20.25,
    "fanduelSalary": "$6900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#386168",
    "tmColorDark": "#004C54",
    "tmColorLite_rgba": "rgba(56, 97, 104, 0.2)",
    "tmColorDark_rgba": "rgba(0, 76, 84, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    "headlineNews": "Could have role in playoffs",
    "report": "Coach Doug Pederson expects Howard to have a role on offense in Sunday's playoff game against Seattle, Dave Zangaro of NBC Sports Philadelphia reports.",
    "analysis": "Howard returned from a six-game absence for Sunday's 34-17 win over the Giants, but he was limited to a single snap even though Miles Sanders was forced out early with an ankle injury. Boston Scott took advantage with a 19-54-3 rushing line and four catches for 84 yards on six targets, so he could serve as the lead back if Sanders isn't ready for the playoff game. Howard's involvement, or lack thereof, may largely depend on the health of Sanders' ankle.",
    "timestamp": "2019-12-30 09:30 AM",
    "week01": 6.5,
    "week02": 3.1,
    "week03": 9.7,
    "week04": 31.0,
    "week05": 12.2,
    "week06": 4.9,
    "week07": 6.6,
    "week08": 17.6,
    "week09": 14.8,
    "week10": "BYE",
    "week11": "DNP",
    "week12": "DNP",
    "week13": "DNP",
    "week14": "DNP",
    "week15": "DNP",
    "week16": "DNP",
    "week17": ""
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
                         data: [6.5, 3.1, 9.7, 31.0, 12.2, 4.9, 6.6, 17.6, 14.8, 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.5, 7.5, 5.2, 7.6, 11.2, 9.7, 14.8, 9.7, 10.0, 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 7.0]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [9.0, 2.5, 1.0, 0.0, 3.1, 1.8, 8.0, 3.5, 1.6, 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 10.9]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.2, 18.7, 7.1, 19.2, 13.3, 23.0, 15.9, 29.7, 13.9, 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 14.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2577654.png",
    "name": "DeAndre Washington",
    "depthchart": "Starter: RB-1",
    "team": "Oakland Raiders",
    "projected": 6.7,
    "opponent": "Denver Broncos",
    "home_away": "at ",
    "opp_rank_Neu": 18,
    "team_rank_Neu": 13,
    "avg_fp2": 5.78,
    "opp_rank_allowed_fp2_Neu": 9,
    "opp_avg_allowed_fp2": 17.96,
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
    "headlineNews": "Expected to fill in for Jacobs",
    "report": "Washington is expected to act as the Raiders' lead option out of the backfield Sunday against the Broncos with Josh Jacobs (shoulder/illness) listed as doubtful for the contest.",
    "analysis": "While Jacobs was sidelined for the second time in three games in the Raiders' 24-17 win over the Chargers in Week 16, Washington stepped into a featured role, logging a career-high 23 carries for 85 yards and a touchdown and adding two receptions for 21 yards. Jacobs is likely in line for another absence after failing to practice this week, setting the stage for Washington to once again pace the Oakland backfield while Jalen Richard looms as a change-of-pace alternative. Washington should dominate the carries if the contest is reasonably competitive, though he could lose out on work to Richard if the Raiders fall behind early and are forced into a pass-happy game script.",
    "timestamp": "2019-12-27 02:09 PM",
    "week01": 0.8,
    "week02": 4.5,
    "week03": 2.2,
    "week04": 3.6,
    "week05": 11.1,
    "week06": "BYE",
    "week07": 4.6,
    "week08": 3.2,
    "week09": 3.3,
    "week10": 2.9,
    "week11": 2.3,
    "week12": 2.4,
    "week13": 6.4,
    "week14": 18.6,
    "week15": 3.2,
    "week16": 17.6,
    "week17": ""
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
                         data: [0.8, 4.5, 2.2, 3.6, 11.1, 'BYE', 4.6, 3.2, 3.3, 2.9, 2.3, 2.4, 6.4, 18.6, 3.2, 17.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.0, 2.2, 5.8, 2.9, 4.0, 'BYE', 6.1, 2.9, 4.7, 4.7, 3.7, 8.0, 5.4, 4.5, 7.1, 6.9, 6.7]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 3.5, 0.0, 0.0, 0.0, 'BYE', 0.0, 0.7, 0.4, 0.7, 2.3, 2.5, 2.2, 0.0, 0.0, 0.5, 5.4]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [4.7, 8.4, 8.6, 4.1, 8.3, 'BYE', 12.5, 10.7, 8.8, 7.0, 4.7, 8.5, 4.8, 19.9, 20.7, 6.3, 20.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3916148.png",
    "name": "Tony Pollard",
    "depthchart": "Backup: RB-2",
    "team": "Dallas Cowboys",
    "projected": 6.2,
    "opponent": "Washington Redskins",
    "home_away": "",
    "opp_rank_Pos": 29,
    "team_rank_Neu": 8,
    "avg_fp2": 5.34,
    "opp_rank_allowed_fp2_Pos": 30,
    "opp_avg_allowed_fp2": 25.6,
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
    "headlineNews": "Loses crucial fumble",
    "report": "Pollard carried the ball twice for zero yards, returned two kicks for 41 yards and lost a fumble during Sunday's loss to the Eagles.",
    "analysis": "Pollard's fumble during the third quarter ended a 10-play drive for the Cowboys, and he didn't touch the ball again on offense. The 22-year-old had 12 rushes for 131 yards and one touchdown Week 15, illustrating his volatility as a low-volume fantasy option.",
    "timestamp": "2019-12-24 07:37 PM",
    "week01": 2.4,
    "week02": 3.0,
    "week03": 20.3,
    "week04": 0.0,
    "week05": 1.9,
    "week06": 1.3,
    "week07": 2.8,
    "week08": "BYE",
    "week09": 3.5,
    "week10": -0.4,
    "week11": 15.6,
    "week12": 4.3,
    "week13": 0.7,
    "week14": "DNP",
    "week15": 21.3,
    "week16": -2.0,
    "week17": ""
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
                         data: [2.4, 3.0, 20.3, 0.0, 1.9, 1.3, 2.8, 'BYE', 3.5, -0.4, 15.6, 4.3, 0.7, 'DNP', 21.3, -2.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.3, 5.4, 8.1, 6.0, 2.4, 4.3, 4.1, 'BYE', 3.6, 1.3, 1.3, 3.3, 4.0, 'DNP', 5.5, 6.4, 6.2]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.6, 3.4, 4.0, 5.5, 5.1, 4.2, 0.5, 'BYE', 1.3, 0.7, 0.0, 0.0, 1.1, 'DNP', 0.0, 0.0, 0.0]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  "rgba(127, 150, 149, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [5.2, 4.4, 5.7, 6.6, 6.2, 4.9, 4.1, 'BYE', 3.0, 5.0, 6.0, 6.4, 4.2, 'DNP', 4.1, 11.2, 29.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3051439.png",
    "name": "Boston Scott",
    "depthchart": "Backup: RB-2",
    "team": "Philadelphia Eagles",
    "projected": 6.1,
    "opponent": "New York Giants",
    "home_away": "at ",
    "opp_rank_Neu": 19,
    "team_rank_Neu": 12,
    "avg_fp2": 5.11,
    "opp_rank_allowed_fp2_Neu": 14,
    "opp_avg_allowed_fp2": 20.25,
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
    "week17": ""
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
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 3.0, 4.2, 4.6, 'DNP', 'BYE', 2.6, 0.0, 0.0, 21.8, 10.0, 4.9]
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
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2979477.png",
    "name": "Tevin Coleman",
    "depthchart": "Backup: RB-2",
    "team": "San Francisco 49ers",
    "projected": 6.0,
    "opponent": "Seattle Seahawks",
    "home_away": "at ",
    "opp_rank_Pos": 24,
    "team_rank_Pos": 2,
    "avg_fp2": 9.43,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 21.36,
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
    "headlineNews": "Just five touches in win",
    "report": "Coleman rushed five times for 33 yards in Saturday's 34-31 win over the Rams.",
    "analysis": "Coleman was limited to single-digit carries for the fourth straight week (4.3 carries over that span) and was held without a reception for the third game in a row. The 26-year-old still logged 24 snaps on offense (42 percent), so he should still be considered the \"1B\" behind Raheem Mostert (11 carries and 31 offensive snaps), but the latter has been the far more productive back in recent weeks. Coleman has been running better of late (8.1 yards per carry) after enduring a rough stretch in the middle of the season, but the limited usage keeps his fantasy stock low heading into a showdown against Seattle in Week 17 that will settle the NFC West standings.",
    "timestamp": "2019-12-22 02:42 PM",
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
    "week17": ""
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
                         data: [6.6, 'DNP', 'DNP', 'BYE', 15.7, 13.1, 7.1, 36.8, 4.6, 9.2, 7.7, 11.9, 2.0, 0.6, 4.0, 3.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.2, 'DNP', 'DNP', 'BYE', 3.0, 8.3, 8.8, 12.2, 15.8, 14.7, 15.3, 16.5, 14.2, 9.5, 4.5, 8.8, 6.0]
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
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15971.png",
    "name": "Rex Burkhead",
    "depthchart": "Reserve: RB-3",
    "team": "New England Patriots",
    "projected": 5.3,
    "opponent": "Miami Dolphins",
    "home_away": "",
    "opp_rank_Pos": 27,
    "team_rank_Neu": 19,
    "avg_fp2": 6.81,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 23.64,
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
    "headlineNews": "Logs six carries in Week 17",
    "report": "Burkhead carried six times for 48 yards and hauled in his only target for six yards in Sunday's 27-24 loss to the Dolphins.",
    "analysis": "Burkhead finishes the 2019 regular season with 65 carries for 302 yards and three TDs to go along with 27 catches (on 38 targets) for 279 yards in 13 games. Looking ahead to the postseason, the 29-year-old -- who is under contract with the Patriots through the 2020 season -- will continue to work in a complementary role behind lead back Sony Michel and pass-catching ace James White.",
    "timestamp": "2019-12-30 07:53 AM",
    "week01": 11.0,
    "week02": 7.8,
    "week03": 15.9,
    "week04": 1.2,
    "week05": "DNP",
    "week06": "DNP",
    "week07": "DNP",
    "week08": 1.8,
    "week09": 3.9,
    "week10": "BYE",
    "week11": 5.8,
    "week12": 2.7,
    "week13": 1.5,
    "week14": 1.5,
    "week15": 12.9,
    "week16": 15.7,
    "week17": ""
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
                         data: [11.0, 7.8, 15.9, 1.2, 'DNP', 'DNP', 'DNP', 1.8, 3.9, 'BYE', 5.8, 2.7, 1.5, 1.5, 12.9, 15.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.7, 10.3, 6.8, 5.3, 'DNP', 'DNP', 'DNP', 3.9, 2.8, 'BYE', 5.8, 5.1, 3.4, 4.7, 2.4, 3.1, 5.3]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.9, 4.3, 2.9, 11.0, 'DNP', 'DNP', 'DNP', 0.0, 0.3, 'BYE', 0.0, 1.6, 0.4, 1.2, 0.0, 0.0, 1.6]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [7.9, 22.9, 23.4, 18.8, 'DNP', 'DNP', 'DNP', 17.8, 16.9, 'BYE', 9.4, 7.0, 9.1, 5.5, 9.3, 11.6, 8.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3066158.png",
    "name": "Tarik Cohen",
    "depthchart": "Backup: RB-2",
    "team": "Chicago Bears",
    "projected": 5.2,
    "opponent": "Minnesota Vikings",
    "home_away": "at ",
    "opp_rank_Neu": 14,
    "team_rank_Neg": 29,
    "avg_fp2": 7.55,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 18.98,
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
    "headlineNews": "Targeted nine times",
    "report": "Cohen caught nine passes for 44 yards and rushed four times for 20 yards in the Bears' 21-19 win over the Vikings in Week 17, and he ended the campaign with 213 rushing yards, 456 receiving yards and three scores .",
    "analysis": "After posting over 1,150 yards and eight touchdowns in 2018, Cohen was a massive disappointment this season, as he barely managed three yards per carry and six yards per reception. Despite his lack of production, he actually saw an increase from the 91 targets he had last season, but aside from PPR leagues, he had very little fantasy value. Going into the last year of his rookie contract in 2020, he'll likely be considered as little more than a depth option at running back in fantasy drafts.",
    "timestamp": "2019-12-29 01:45 PM",
    "week01": 8.7,
    "week02": 3.5,
    "week03": 3.4,
    "week04": 8.8,
    "week05": 7.9,
    "week06": "BYE",
    "week07": 7.4,
    "week08": 6.1,
    "week09": 2.6,
    "week10": 11.7,
    "week11": 15.9,
    "week12": 8.9,
    "week13": 5.5,
    "week14": 6.1,
    "week15": 12.0,
    "week16": 4.8,
    "week17": ""
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
                         data: [8.7, 3.5, 3.4, 8.8, 7.9, 'BYE', 7.4, 6.1, 2.6, 11.7, 15.9, 8.9, 5.5, 6.1, 12.0, 4.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.7, 7.5, 6.5, 6.4, 5.2, 'BYE', 5.7, 6.4, 7.7, 10.3, 6.0, 4.7, 5.7, 6.4, 6.4, 8.2, 5.2]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.1, 3.5, 6.9, 2.7, 0.0, 'BYE', 1.5, 4.5, 1.9, 0.0, 2.0, 3.4, 5.4, 5.1, 6.6, 6.5, 4.8]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  "rgba(195, 104, 53, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.8, 21.7, 14.4, 9.0, 22.0, 'BYE', 9.2, 10.0, 16.8, 23.3, 7.4, 23.3, 19.9, 13.5, 12.8, 11.1, 8.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3122154.png",
    "name": "Khari Blasingame",
    "depthchart": "Reserve: RB-3",
    "team": "Tennessee Titans",
    "projected": 5.1,
    "opponent": "Houston Texans",
    "home_away": "at ",
    "opp_rank_Neu": 20,
    "team_rank_Pos": 6,
    "avg_fp2": 6.0,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 23.1,
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
    "headlineNews": "Impact in passing game",
    "report": "Blasingame did not record a carry but did haul in both of his targets for 47 yards in the Titans' Week 14 win over the Raiders.",
    "analysis": "Blasingame notably worked ahead of Dion Lewis, recording the first of his two receptions on the team's opening drive. While he didn't manage another reception until the third quarter, he broke off big gains of 24 and 23 yards respectively. Given the workhorse nature of Derrick Henry and the limited pass volume in the Titans' offense, Blasingame isn't likely to do anything more than further dent Dion Lewis' status on the depth chart.",
    "timestamp": "2019-12-08 09:22 PM",
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
    "week17": ""
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
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 5.1]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 2.4]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  "rgba(68, 149, 209, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 3.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3923397.png",
    "name": "Ryquell Armstead",
    "depthchart": "Starter: RB-1",
    "team": "Jacksonville Jaguars",
    "projected": 5.1,
    "opponent": "Indianapolis Colts",
    "home_away": "",
    "opp_rank_Neu": 8,
    "team_rank_Neu": 16,
    "avg_fp2": 1.81,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 17.59,
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
    "headlineNews": "Scores in spot start",
    "report": "Armstead rushed 10 times for 33 yards and caught five of nine targets for 67 yards and a touchdown in Sunday's 38-20 win over Indianapolis.",
    "analysis": "Armstead got the nod as starter filling in for the ill Leonard Fournette. The rookie fifth-round pick can't match Fournette's prowess on the ground, but he was able to provide a solid fantasy performance with his work in the passing game. Armstead had just 25 touches over the previous 15 games as a back, so there is nearly zero value to be had behind a workhorse like Fournette next season.",
    "timestamp": "2019-12-29 06:05 PM",
    "week01": 0.7,
    "week02": 0.0,
    "week03": 0.0,
    "week04": 11.4,
    "week05": 1.1,
    "week06": 0.1,
    "week07": 0.3,
    "week08": 0.7,
    "week09": 9.0,
    "week10": "BYE",
    "week11": 2.9,
    "week12": 0.0,
    "week13": 0.0,
    "week14": 0.7,
    "week15": 0.1,
    "week16": 0.2,
    "week17": ""
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
                         data: [0.7, 0.0, 0.0, 11.4, 1.1, 0.1, 0.3, 0.7, 9.0, 'BYE', 2.9, 0.0, 0.0, 0.7, 0.1, 0.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.3, 8.3, 2.3, 2.4, 5.1, 3.4, 5.0, 7.6, 2.1, 'BYE', 3.7, 2.0, 1.9, 2.2, 3.0, 2.2, 5.1]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.5, 3.5, 2.7, 1.1, 3.3, 3.6, 0.0, 0.0, 0.0, 'BYE', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 103, 120, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [5.7, 4.1, 3.1, 1.3, 4.0, 4.1, 2.8, 3.0, 2.8, 'BYE', 4.0, 2.7, 11.4, 3.9, 2.4, 2.0, 8.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4035538.png",
    "name": "David Montgomery",
    "depthchart": "Starter: RB-1",
    "team": "Chicago Bears",
    "projected": 5.0,
    "opponent": "Minnesota Vikings",
    "home_away": "at ",
    "opp_rank_Neu": 14,
    "team_rank_Neg": 29,
    "avg_fp2": 9.37,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 18.98,
    "fanduelSalary": "$6300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#c36835",
    "tmColorDark": "#0B162A",
    "tmColorLite_rgba": "rgba(195, 104, 53, 0.2)",
    "tmColorDark_rgba": "rgba(11, 22, 42, 0.2)",
    "tmTextLite": "#c36835",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png",
    "headlineNews": "Eclipses 100 yards",
    "report": "Montgomery rushed 23 times for 113 yards and a touchdown in the Bears' 21-19 win over the Vikings in Week 17, and he finished the season with 889 rushing yards, 185 receiving yards and six touchdowns .",
    "analysis": "Despite seeing over 250 touches in his rookie season, Montgomery struggled due to poor offensive line blocking and inconsistent usage that rarely allowed him to get into a rhythm. He typically showed excellent elusiveness, but he was usually met by multiple defenders after evading an initial tackler. He'll be entering the second year of his rookie deal in 2020, and he should be considered a top-24 running back in fantasy drafts;  however, if Chicago improves its blocking and playcalling, he'll definitely have potential for a breakout campaign.",
    "timestamp": "2019-12-29 01:39 PM",
    "week01": 5.0,
    "week02": 13.3,
    "week03": 9.6,
    "week04": 8.2,
    "week05": 10.1,
    "week06": "BYE",
    "week07": 0.9,
    "week08": 22.7,
    "week09": 21.1,
    "week10": 6.0,
    "week11": 5.5,
    "week12": 4.1,
    "week13": 15.7,
    "week14": 6.6,
    "week15": 5.4,
    "week16": 6.4,
    "week17": ""
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
                         data: [5.0, 13.3, 9.6, 8.2, 10.1, 'BYE', 0.9, 22.7, 21.1, 6.0, 5.5, 4.1, 15.7, 6.6, 5.4, 6.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.0, 2.4, 7.7, 10.0, 7.8, 'BYE', 9.7, 9.5, 12.5, 15.4, 12.6, 8.1, 7.4, 14.9, 10.0, 9.2, 5.0]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [10.3, 2.7, 12.3, 10.9, 11.4, 'BYE', 10.7, 0.0, 0.0, 0.8, 0.0, 4.3, 6.6, 11.0, 3.8, 0.0, 2.9]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  "rgba(195, 104, 53, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.1, 3.2, 12.9, 11.9, 12.2, 'BYE', 12.2, 10.3, 20.6, 21.0, 26.5, 13.1, 13.7, 24.8, 24.6, 24.2, 8.2]
                    }
                    
                    ]
               }
            }];




$scope.positionWR = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/12649.png",
    "name": "Julian Edelman",
    "depthchart": "Starter: WR-1",
    "team": "New England Patriots",
    "projected": 20.3,
    "opponent": "Miami Dolphins",
    "home_away": "",
    "opp_rank_Pos": 28,
    "team_rank_Neu": 9,
    "avg_fp2": 13.48,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 35.09,
    "fanduelSalary": "$7500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#C60C30",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png",
    "headlineNews": "Rough outing in Week 17 loss",
    "report": "Edelman (knee/shoulder) secured three of seven targets for 26 yards in the Patriots' 27-24 loss to the Dolphins on Sunday. He also committed a fumble, but it was recovered by the offense.",
    "analysis": "Edelman had another atypically unproductive day, giving him a pair of sub-30-yard tallies over his final three games of the regular season. The veteran did reach the 100-reception mark for the second time in his career with Sunday's production, while his 1,117 receiving yards were a career high. Edelman will look to step his production back up in next weekend's wild-card matchup against the Titans.",
    "timestamp": "2019-12-29 07:15 PM",
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
    "week17": ""
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
                         data: [13.38, 7.2, 15.7, 5.0, 21.0, 15.8, 10.2, 23.5, 11.9, 'BYE', 12.4, 13.3, 18.9, 20.3, 1.9, 11.7]
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
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2974858.png",
    "name": "Kenny Golladay",
    "depthchart": "Starter: WR-1",
    "team": "Detroit Lions",
    "projected": 19.1,
    "opponent": "Green Bay Packers",
    "home_away": "",
    "opp_rank_Neu": 18,
    "team_rank_Neu": 8,
    "avg_fp2": 13.79,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 24.81,
    "fanduelSalary": "$7400",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Concussion",
    "tmColorLite": "#0076B6",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(0, 118, 182, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#0076B6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/det.png",
    "headlineNews": "Concussion confirmed",
    "report": "Golladay won't return to Sunday's contest against the Packers due to a concussion.",
    "analysis": "With a diagnosis confirmed, Golladay's day and therefore campaign is in the books. He built upon his 2018 breakout this year, hauling in 65 of 116 passes for 1,190 yards and 11 touchdowns. He'll look to take an even bigger step forward next season with Matthew Stafford likely past the fractures in his back that kept him sidelined from Week 10 onward.",
    "timestamp": "2019-12-29 12:26 PM",
    "week01": 12.2,
    "week02": 21.7,
    "week03": 2.7,
    "week04": 21.2,
    "week05": "BYE",
    "week06": 14.6,
    "week07": 2.6,
    "week08": 25.3,
    "week09": 21.2,
    "week10": 13.2,
    "week11": 3.9,
    "week12": 8.1,
    "week13": 23.8,
    "week14": 14.8,
    "week15": 5.9,
    "week16": 15.6,
    "week17": ""
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
                         data: [12.2, 21.7, 2.7, 21.2, 'BYE', 14.6, 2.6, 25.3, 21.2, 13.2, 3.9, 8.1, 23.8, 14.8, 5.9, 15.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.7, 9.7, 15.0, 11.4, 'BYE', 10.7, 9.0, 11.0, 10.6, 13.7, 13.5, 9.5, 14.1, 10.1, 21.4, 9.1, 19.1]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 1.8, 8.8, 1.9, 'BYE', 0.0, 10.1, 0.0, 3.3, 1.2, 3.1, 1.3, 0.0, 7.3, 8.3, 9.1, 6.5]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 118, 182, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.8, 6.7, 24.4, 19.7, 'BYE', 24.2, 20.5, 19.1, 27.0, 17.9, 16.6, 19.1, 13.1, 22.3, 20.4, 26.3, 13.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4047646.png",
    "name": "A.J. Brown",
    "depthchart": "Starter: WR-1",
    "team": "Tennessee Titans",
    "projected": 16.7,
    "opponent": "Houston Texans",
    "home_away": "at ",
    "opp_rank_Pos": 30,
    "team_rank_Neu": 22,
    "avg_fp2": 11.38,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 28.77,
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
    "week17": ""
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
                         data: [11.5, 4.0, 0.9, 22.9, 3.7, 3.3, 9.2, 8.1, 10.1, 2.2, 'BYE', 21.5, 6.0, 31.1, 21.4, 14.8]
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
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16800.png",
    "name": "Davante Adams",
    "depthchart": "Starter: WR-1",
    "team": "Green Bay Packers",
    "projected": 15.6,
    "opponent": "Detroit Lions",
    "home_away": "at ",
    "opp_rank_Pos": 32,
    "team_rank_Neu": 19,
    "avg_fp2": 10.89,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 32.97,
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
    "week17": ""
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
                         data: [5.6, 14.1, 7.6, 23.0, 'DNP', 'DNP', 'DNP', 'DNP', 7.6, 15.3, 'BYE', 15.8, 21.4, 6.1, 19.8, 16.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.7, 12.6, 11.3, 9.1, 'DNP', 'DNP', 'DNP', 'DNP', 11.3, 14.5, 'BYE', 10.4, 12.5, 14.9, 16.8, 13.2, 15.6]
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
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13982.png",
    "name": "Julio Jones",
    "depthchart": "Starter: WR-1",
    "team": "Atlanta Falcons",
    "projected": 15.4,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "at ",
    "opp_rank_Pos": 29,
    "team_rank_Pos": 3,
    "avg_fp2": 15.24,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 36.43,
    "fanduelSalary": "$8500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/atl.png",
    "headlineNews": "Target monster again during finale",
    "report": "Jones reeled in seven of 13 targets for 78 receiving yards during Sunday's 28-22 overtime win against Tampa Bay.",
    "analysis": "Jones saw a steady increase to his already abundant usage rate with Calvin Ridley (abdomen) being forced to sit out Atlanta's final three regular-season outings of 2019, averaging an eye-popping 16 targets per game between Weeks 15 and 17 after managing 9.1 targets per game over his first 12 appearances. The 30-year-old wideout has been ridiculously productive since enduring an injury-plagued 2013 campaign, as he has amassed 103.8 receptions and 1,565 receiving yards per year en route to six consecutive Pro-Bowl nods between 2014 and 2019. Jones stands as the top wideout within Atlanta's ultra-talented collection of skill-position players, and his target share is expected to remain that of a No. 1 receiver in 2020, especially if former Pro Bowl tight end Austin Hooper moves on to a new team as result of his contract expiring.",
    "timestamp": "2019-12-29 02:32 PM",
    "week01": 12.1,
    "week02": 25.1,
    "week03": 22.8,
    "week04": 7.3,
    "week05": 5.7,
    "week06": 14.8,
    "week07": 12.3,
    "week08": 20.2,
    "week09": "BYE",
    "week10": 9.4,
    "week11": 11.7,
    "week12": 9.3,
    "week13": "DNP",
    "week14": 9.1,
    "week15": 31.9,
    "week16": 21.6,
    "week17": ""
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
                         data: [12.1, 25.1, 22.8, 7.3, 5.7, 14.8, 12.3, 20.2, 'BYE', 9.4, 11.7, 9.3, 'DNP', 9.1, 31.9, 21.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.2, 16.2, 13.7, 16.6, 16.3, 15.5, 20.3, 11.0, 'BYE', 18.5, 15.9, 19.4, 'DNP', 11.6, 12.3, 16.4, 15.4]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [9.2, 18.4, 12.7, 11.5, 15.3, 12.9, 15.1, 9.7, 'BYE', 12.2, 14.4, 13.7, 'DNP', 12.1, 6.6, 12.7, 12.4]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.2, 32.3, 24.7, 17.6, 23.7, 23.4, 22.6, 20.4, 'BYE', 21.5, 22.6, 22.2, 'DNP', 18.5, 21.2, 19.6, 18.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2976592.png",
    "name": "Sterling Shepard",
    "depthchart": "Starter: WR-1",
    "team": "New York Giants",
    "projected": 13.3,
    "opponent": "Philadelphia Eagles",
    "home_away": "",
    "opp_rank_Neu": 19,
    "team_rank_Neu": 18,
    "avg_fp2": 10.69,
    "opp_rank_allowed_fp2_Pos": 30,
    "opp_avg_allowed_fp2": 33.31,
    "fanduelSalary": "$6200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#0B2265",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(11, 34, 101, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png",
    "headlineNews": "Scores in impactful performance",
    "report": "Shepard caught all six of his targets for 76 yards and a touchdown during Sunday's 41-35 win over the Redskins.",
    "analysis": "Shepard displayed excellent chemistry with the returning Daniel Jones as he snared every ball that was thrown his way. He didn't make many big plays on the day, but his 23-yard touchdown in the first quarter was enough to propel him to a solid fantasy performance. Shepard, who has come alive over the last two weeks with 15 catches for 187 yards and a score, will look to finish strong next Sunday against the Eagles.",
    "timestamp": "2019-12-22 05:20 PM",
    "week01": 7.2,
    "week02": "DNP",
    "week03": 23.6,
    "week04": 13.4,
    "week05": 7.2,
    "week06": "DNP",
    "week07": "DNP",
    "week08": "DNP",
    "week09": "DNP",
    "week10": "DNP",
    "week11": "BYE",
    "week12": 6.2,
    "week13": 11.5,
    "week14": 5.6,
    "week15": 15.6,
    "week16": 16.6,
    "week17": ""
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
                         data: [7.2, 'DNP', 23.6, 13.4, 7.2, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 6.2, 11.5, 5.6, 15.6, 16.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.5, 'DNP', 8.2, 14.4, 10.1, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 5.3, 8.7, 5.9, 4.1, 3.0, 13.3]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.6, 'DNP', 3.9, 3.1, 4.5, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 5.9, 4.9, 3.7, 8.7, 3.8, 5.8]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.5, 'DNP', 20.9, 8.2, 8.5, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 9.9, 14.4, 10.1, 16.5, 15.4, 7.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2976316.png",
    "name": "Michael Thomas",
    "depthchart": "Starter: WR-1",
    "team": "New Orleans Saints",
    "projected": 13.2,
    "opponent": "Carolina Panthers",
    "home_away": "at ",
    "opp_rank_Neu": 13,
    "team_rank_Neu": 7,
    "avg_fp2": 19.63,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 30.7,
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
    "headlineNews": "Season-low stat line in blowout win",
    "report": "Thomas corralled four of nine targets for 37 yards in the Saints' 42-10 win over the Panthers on Sunday.",
    "analysis": "After battling a hand injury all week, Thomas suited up for the Saints' final regular-season matchup, though his performance was a let-down for fantasy owners. He produced his lowest receiving total of the season while snagging his fewest passes of the year in the blowout victory. Despite the poor Week 17 showing,  Thomas will carry a 149/1,725/9 line into the playoffs.",
    "timestamp": "2019-12-29 03:28 PM",
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
    "week17": ""
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
                         data: [17.3, 13.9, 13.9, 14.0, 35.7, 12.9, 17.6, 21.8, 'BYE', 21.7, 21.4, 21.1, 7.8, 24.9, 24.8, 25.6]
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
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2976212.png",
    "name": "Stefon Diggs",
    "depthchart": "Starter: WR-1",
    "team": "Minnesota Vikings",
    "projected": 13.0,
    "opponent": "Chicago Bears",
    "home_away": "",
    "opp_rank_Neu": 12,
    "team_rank_Neu": 20,
    "avg_fp2": 12.03,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 24.01,
    "fanduelSalary": "$7500",
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
    "week17": ""
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
                         data: [4.7, 9.4, 3.0, 12.3, 5.9, 40.0, 17.7, 15.8, 2.1, 6.4, 20.6, 'BYE', 7.2, 12.2, 10.0, 13.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.5, 5.4, 10.7, 7.0, 8.8, 6.1, 9.7, 10.6, 9.2, 9.7, 12.5, 'BYE', 14.7, 17.7, 15.0, 15.9, 13.0]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [9.1, 15.2, 8.6, 2.5, 2.2, 2.3, 5.7, 8.7, 3.0, 0.4, 4.7, 'BYE', 5.3, 2.5, 6.4, 5.3, 5.2]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  "rgba(224, 170, 25, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [22.8, 28.1, 20.6, 14.2, 13.7, 19.7, 15.9, 19.8, 21.0, 11.7, 11.8, 'BYE', 18.4, 16.2, 16.9, 16.3, 16.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2976499.png",
    "name": "Amari Cooper",
    "depthchart": "Starter: WR-1",
    "team": "Dallas Cowboys",
    "projected": 12.7,
    "opponent": "Washington Redskins",
    "home_away": "",
    "opp_rank_Neu": 14,
    "team_rank_Pos": 2,
    "avg_fp2": 13.01,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 27.65,
    "fanduelSalary": "$7500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#7F9695",
    "tmColorDark": "#041E42",
    "tmColorLite_rgba": "rgba(127, 150, 149, 0.2)",
    "tmColorDark_rgba": "rgba(4, 30, 66, 0.2)",
    "tmTextLite": "#7F9695",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
    "headlineNews": "Does little with big volume",
    "report": "Cooper caught four of 12 targets for 24 yards in Sunday's 17-9 loss to the Eagles.",
    "analysis": "Dak Prescott had little success trying to stretch the field, and as a result Cooper came away with his second straight poor performance. It's the first time this season he's failed to turn double-digit targets into at least eight catches or 85 yards, but the volume does offer hope for a rebound in Week 17's must-win game against Washington.",
    "timestamp": "2019-12-22 07:24 PM",
    "week01": 19.6,
    "week02": 12.4,
    "week03": 23.8,
    "week04": 7.3,
    "week05": 34.1,
    "week06": 0.8,
    "week07": 13.1,
    "week08": "BYE",
    "week09": 16.0,
    "week10": 26.2,
    "week11": 5.3,
    "week12": 0.0,
    "week13": 12.5,
    "week14": 17.3,
    "week15": 2.4,
    "week16": 4.4,
    "week17": ""
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
                         data: [19.6, 12.4, 23.8, 7.3, 34.1, 0.8, 13.1, 'BYE', 16.0, 26.2, 5.3, 0.0, 12.5, 17.3, 2.4, 4.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.8, 12.8, 10.9, 11.4, 11.7, 10.3, 17.9, 'BYE', 22.3, 14.3, 10.0, 10.7, 13.7, 12.0, 11.2, 10.6, 12.7]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.2, 4.5, 0.7, 11.0, 7.1, 6.1, 2.7, 'BYE', 1.6, 7.1, 6.5, 0.0, 5.4, 6.5, 7.7, 8.5, 10.1]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  "rgba(127, 150, 149, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [20.1, 12.2, 19.5, 24.1, 14.9, 11.8, 16.0, 'BYE', 9.6, 17.0, 26.6, 26.5, 14.8, 14.1, 22.5, 14.0, 17.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116406.png",
    "name": "Tyreek Hill",
    "depthchart": "Starter: WR-1",
    "team": "Kansas City Chiefs",
    "projected": 12.5,
    "opponent": "Los Angeles Chargers",
    "home_away": "",
    "opp_rank_Neg": 4,
    "team_rank_Pos": 4,
    "avg_fp2": 13.75,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 22.67,
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
    "week17": ""
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
                         data: [3.1, 'DNP', 'DNP', 'DNP', 'DNP', 22.5, 14.9, 11.1, 23.5, 27.5, 0.0, 'BYE', 7.6, 10.0, 21.3, 9.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.8, 'DNP', 'DNP', 'DNP', 'DNP', 12.2, 12.0, 17.4, 12.2, 17.7, 15.7, 'BYE', 12.2, 15.1, 16.1, 14.8, 12.5]
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
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3045144.png",
    "name": "Tyler Boyd",
    "depthchart": "Starter: WR-1",
    "team": "Cincinnati Bengals",
    "projected": 12.4,
    "opponent": "Cleveland Browns",
    "home_away": "",
    "opp_rank_Neu": 9,
    "team_rank_Neu": 16,
    "avg_fp2": 11.29,
    "opp_rank_allowed_fp2_Neu": 9,
    "opp_avg_allowed_fp2": 24.82,
    "fanduelSalary": "$6600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#ea7330",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(234, 115, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#ea7330",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png",
    "headlineNews": "Makes five catches vs. Browns",
    "report": "Boyd caught five of seven targets for 57 yards during Sunday's 33-23 win over the Browns.",
    "analysis": "Boyd led the team in targets and caught all but two balls thrown his way, but the talented Cleveland secondary held him to 11.8 yards per grab. The Bengals didn't lean on the passing game much as they led for most of the game, which limited his output in the season finale. This modest output gives Boyd his second consecutive 1,000-yard season, which is rather impressive given the state of the team's quarterback play this season. With A.J. Green (ankle) likely to move on this offseason, Boyd should be the top receiving option once again in 2020, and he could benefit if the team acquires a quarterback via the draft or free agency.",
    "timestamp": "2019-12-29 01:56 PM",
    "week01": 10.3,
    "week02": 17.2,
    "week03": 9.7,
    "week04": 4.8,
    "week05": 23.3,
    "week06": 2.5,
    "week07": 6.0,
    "week08": 9.8,
    "week09": "BYE",
    "week10": 9.2,
    "week11": 1.5,
    "week12": 16.6,
    "week13": 14.4,
    "week14": 10.7,
    "week15": 4.1,
    "week16": 29.3,
    "week17": ""
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
                         data: [10.3, 17.2, 9.7, 4.8, 23.3, 2.5, 6.0, 9.8, 'BYE', 9.2, 1.5, 16.6, 14.4, 10.7, 4.1, 29.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.5, 9.5, 10.5, 12.0, 10.6, 12.2, 9.8, 8.6, 'BYE', 16.0, 12.7, 12.1, 8.0, 10.9, 11.4, 12.1, 12.4]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.9, 2.7, 2.5, 3.5, 0.9, 3.9, 0.0, 0.0, 'BYE', 5.8, 1.4, 5.0, 4.3, 5.3, 7.9, 4.7, 2.2]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [16.1, 15.6, 11.0, 17.8, 9.8, 15.8, 27.3, 18.0, 'BYE', 12.0, 11.4, 10.2, 17.4, 15.3, 17.7, 19.2, 20.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3128429.png",
    "name": "Courtland Sutton",
    "depthchart": "Starter: WR-1",
    "team": "Denver Broncos",
    "projected": 12.0,
    "opponent": "Oakland Raiders",
    "home_away": "",
    "opp_rank_Pos": 25,
    "team_rank_Neg": 29,
    "avg_fp2": 11.95,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 29.51,
    "fanduelSalary": "$7100",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Head",
    "tmColorLite": "#e17757",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(225, 119, 87, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#e17757",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/den.png",
    "headlineNews": "Snags four passes in win",
    "report": "Sutton caught four of eight targets for 52 yards during Sunday's 16-15 win over the Raiders. He temporarily left the game with a head injury but returned, Brandon Krisztal of KOA Colorado reports.",
    "analysis": "The Broncos weren't doing much on offense early in the contest when Sutton skied for a 19-yard reception between two defenders in the second quarter, kick-starting a field-goal drive. Sutton ended 2019 with 72 catches for 1,112 yards and six touchdowns. His full value is not reflected in the numbers as he drew 13 defensive penalties this season, second-best in the league, but he slowed down the stretch as teams endeavored to take him away with Denver lacking other established weapons. He was held under 55 yards in four of his last six games and topped 100 yards only twice during the season. Expect him to make strides in 2020 with more of a rapport built with Drew Lock and a stronger WR2 high on Denver's shopping list.",
    "timestamp": "2019-12-29 05:46 PM",
    "week01": 15.5,
    "week02": 6.0,
    "week03": 11.2,
    "week04": 21.2,
    "week05": 17.2,
    "week06": 9.6,
    "week07": 11.7,
    "week08": 8.7,
    "week09": 14.8,
    "week10": "BYE",
    "week11": 16.32,
    "week12": 3.2,
    "week13": 21.4,
    "week14": 5.9,
    "week15": 9.9,
    "week16": 6.6,
    "week17": ""
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
                         data: [15.5, 6.0, 11.2, 21.2, 17.2, 9.6, 11.7, 8.7, 14.8, 'BYE', 16.32, 3.2, 21.4, 5.9, 9.9, 6.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.9, 6.1, 7.3, 6.9, 6.2, 10.0, 12.2, 14.9, 10.5, 'BYE', 14.9, 10.2, 4.1, 11.9, 15.1, 19.1, 12.0]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 1.3, 4.4, 5.2, 0.0, 3.6, 9.5, 13.7, 4.9, 'BYE', 8.5, 6.0, 1.7, 8.6, 0.0, 7.5, 4.6]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(225, 119, 87, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.6, 11.3, 8.2, 9.7, 17.3, 19.2, 20.9, 22.2, 16.7, 'BYE', 18.4, 16.3, 11.2, 19.0, 20.7, 20.4, 12.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3895856.png",
    "name": "Christian Kirk",
    "depthchart": "Starter: WR-1",
    "team": "Arizona Cardinals",
    "projected": 11.9,
    "opponent": "Los Angeles Rams",
    "home_away": "at ",
    "opp_rank_Neu": 10,
    "team_rank_Neg": 24,
    "avg_fp2": 10.34,
    "opp_rank_allowed_fp2_Neu": 14,
    "opp_avg_allowed_fp2": 26.27,
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
    "headlineNews": "Will avoid offseason surgery",
    "report": "Kirk admitted that the ankle injury he sustained Week 4 troubled him in the second half of the season, but the wideout said he won't require surgery during the offseason, Kyle Odegard of the Cardinals' official site reports. \"It's not a fun deal, but I didn't want to miss any more games,\" Kirk said, who sat out three contests before returning to action Week 8. \"If I can get out there and contribute and help the team, I'm going to do it. But to get to the offseason and get healthy and get [the ankle] 100 percent, I can't wait to get it right.\"",
    "analysis": "Kirk said the ankle in question was \"rolled up on\" several times after he returned from the three-game absence, but he still finished with 68 receptions for 709 yards and three touchdowns, falling just short of beating out Larry Fitzgerald (75-804-4) for top honors in all categories among Arizona receivers. He'll likely take the next few weeks off to get the ankle right but otherwise shouldn't face any restrictions during his offseason training.",
    "timestamp": "2019-12-30 10:59 AM",
    "week01": 8.4,
    "week02": 14.4,
    "week03": 10.9,
    "week04": 6.3,
    "week05": "DNP",
    "week06": "DNP",
    "week07": "DNP",
    "week08": 13.8,
    "week09": 2.6,
    "week10": 34.8,
    "week11": 7.2,
    "week12": "BYE",
    "week13": 3.8,
    "week14": 12.9,
    "week15": 8.1,
    "week16": 0.9,
    "week17": ""
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
                         data: [8.4, 14.4, 10.9, 6.3, 'DNP', 'DNP', 'DNP', 13.8, 2.6, 34.8, 7.2, 'BYE', 3.8, 12.9, 8.1, 0.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.5, 11.3, 8.7, 7.4, 'DNP', 'DNP', 'DNP', 9.6, 11.6, 19.0, 13.0, 'BYE', 11.7, 13.7, 13.0, 13.8, 11.9]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.6, 2.3, 1.7, 4.0, 'DNP', 'DNP', 'DNP', 3.3, 5.1, 7.5, 0.0, 'BYE', 4.1, 1.9, 0.7, 0.6, 0.0]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.9, 9.3, 13.7, 15.6, 'DNP', 'DNP', 'DNP', 16.1, 14.1, 16.2, 22.3, 'BYE', 9.7, 7.3, 13.7, 11.3, 19.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16733.png",
    "name": "Odell Beckham Jr.",
    "depthchart": "Starter: WR-1",
    "team": "Cleveland Browns",
    "projected": 11.9,
    "opponent": "Cincinnati Bengals",
    "home_away": "at ",
    "opp_rank_Neu": 21,
    "team_rank_Neu": 23,
    "avg_fp2": 9.91,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 25.98,
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
    "headlineNews": "Pushes through in finale",
    "report": "Beckham secured three of six targets for 81 yards and a touchdown in the Browns' 33-23 loss to the Bengals on Sunday.",
    "analysis": "For all the talk of Beckham wanting out of Cleveland and his apparent dissatisfaction with head coach Freddie Kitchens, he played hard in a game he had good reason to sit out. The Browns had nothing to play for Sunday and Beckham was dealing with both his chronic groin issue and food poisoning that even caused him to throw up on the sideline during the game, Nate Ulrich of the Akron Beacon Journal reports. However, he still put together a strong final line relative to opportunity that included the necessary yardage to put him over 1,000 for the season. Beckham now heads into an offseason of uncertainty, but given his immense physical talent and the fact it's common knowledge he played hurt throughout the year, the six-year veteran will undoubtedly be the subject of great interest to either what's likely to be a new coaching regime in Cleveland or to other teams around the league.",
    "timestamp": "2019-12-29 02:11 PM",
    "week01": 10.6,
    "week02": 25.1,
    "week03": 8.6,
    "week04": 3.0,
    "week05": 4.0,
    "week06": 13.1,
    "week07": "BYE",
    "week08": 7.7,
    "week09": 10.7,
    "week10": 8.2,
    "week11": 8.0,
    "week12": 17.4,
    "week13": 4.4,
    "week14": 4.9,
    "week15": 10.6,
    "week16": 12.4,
    "week17": ""
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
                         data: [10.6, 25.1, 8.6, 3.0, 4.0, 13.1, 'BYE', 7.7, 10.7, 8.2, 8.0, 17.4, 4.4, 4.9, 10.6, 12.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.4, 20.6, 14.5, 19.3, 15.5, 11.6, 'BYE', 14.1, 10.4, 14.7, 15.0, 20.8, 15.0, 15.1, 17.4, 12.8, 11.9]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.4, 22.4, 13.5, 8.8, 5.9, 13.4, 'BYE', 3.3, 6.2, 7.2, 7.2, 6.3, 4.2, 6.9, 11.9, 7.5, 7.2]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [24.5, 33.3, 19.8, 22.2, 25.3, 21.6, 'BYE', 34.2, 20.1, 14.2, 19.7, 18.1, 15.6, 18.9, 23.4, 17.3, 19.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4036348.png",
    "name": "Michael Gallup",
    "depthchart": "Backup: WR-2",
    "team": "Dallas Cowboys",
    "projected": 11.5,
    "opponent": "Washington Redskins",
    "home_away": "",
    "opp_rank_Neu": 14,
    "team_rank_Pos": 2,
    "avg_fp2": 11.49,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 27.65,
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
    "headlineNews": "Huge performance to close out year",
    "report": "Gallup caught five of seven targets for 98 yards and three touchdowns in Sunday's 47-16 win over Washington.",
    "analysis": "While the Cowboys still ended up missing the playoffs when the Eagles beat the Giants in Week 17, Gallup did everything he could to try and drag his team into the postseason, hauling in scores of four, 32 and 45 yards as Dallas pulled away in the second half. The second-year receiver finishes 2019 with 66 catches on 113 targets for 1,107 yards and six TDs, more than doubling his rookie production. With Amari Cooper's fate as a free agent still up in the air, Gallup could head into next season as the team's No. 1 WR, but regardless of his role he figures to be a key part of the Cowboys' aerial attack.",
    "timestamp": "2019-12-29 06:08 PM",
    "week01": 19.3,
    "week02": 9.8,
    "week03": "DNP",
    "week04": "DNP",
    "week05": 20.8,
    "week06": 6.8,
    "week07": 4.9,
    "week08": "BYE",
    "week09": 10.3,
    "week10": 15.6,
    "week11": 19.3,
    "week12": 7.5,
    "week13": 7.8,
    "week14": 13.9,
    "week15": 1.1,
    "week16": 12.3,
    "week17": ""
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
                         data: [19.3, 9.8, 'DNP', 'DNP', 20.8, 6.8, 4.9, 'BYE', 10.3, 15.6, 19.3, 7.5, 7.8, 13.9, 1.1, 12.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.3, 6.8, 'DNP', 'DNP', 5.3, 6.4, 13.7, 'BYE', 17.7, 7.8, 6.7, 6.7, 7.1, 7.3, 7.3, 8.9, 11.5]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.7, 6.9, 'DNP', 'DNP', 6.0, 6.4, 4.4, 'BYE', 2.9, 5.0, 8.4, 7.6, 1.1, 6.2, 5.8, 3.5, 8.5]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  "rgba(127, 150, 149, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.1, 17.3, 'DNP', 'DNP', 20.7, 17.3, 16.9, 'BYE', 19.0, 16.7, 14.2, 23.0, 21.0, 21.9, 15.6, 15.9, 25.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14924.png",
    "name": "T.Y. Hilton",
    "depthchart": "Starter: WR-1",
    "team": "Indianapolis Colts",
    "projected": 11.5,
    "opponent": "Jacksonville Jaguars",
    "home_away": "at ",
    "opp_rank_Neu": 20,
    "team_rank_Neg": 28,
    "avg_fp2": 10.43,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 26.07,
    "fanduelSalary": "$6500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#014683",
    "tmColorDark": "#002C5F",
    "tmColorLite_rgba": "rgba(1, 70, 131, 0.2)",
    "tmColorDark_rgba": "rgba(0, 44, 95, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png",
    "headlineNews": "Reveals severity of calf injury",
    "report": "Hilton revealed Monday that the tear in his calf was up to three centimeters wide, Joel A. Erickson of The Indianapolis Star reports.",
    "analysis": "Hilton said it was initially a two-centimeter tear but then became larger after he re-injured his calf during a Week 12 game against Houston. He eventually returned for Weeks 15-17, catching 10 passes for 123 yards on 16 targets over that stretch, with offensive snap shares of 52, 59 and 68 percent. The upward trend in playing time is a good sign for Hilton's offseason health, and he confirmed Monday that he won't need surgery, George Bremer of The Anderson Herald Bulletin reports. The 30-year-old wide receiver has one season remaining on a five-year, $65 million extension, with no guarantees for his $14.54 million base salary in 2020, per overthecap.com. The Colts likely intend to discuss a contract extension, but Hilton may be hesitant to make a long-term commitment to a franchise with uncertainty at quarterback.",
    "timestamp": "2019-12-30 09:13 AM",
    "week01": 24.7,
    "week02": 12.3,
    "week03": 16.5,
    "week04": "DNP",
    "week05": 5.7,
    "week06": "BYE",
    "week07": 16.4,
    "week08": 6.4,
    "week09": "DNP",
    "week10": "DNP",
    "week11": "DNP",
    "week12": 3.3,
    "week13": "DNP",
    "week14": "DNP",
    "week15": 4.5,
    "week16": 4.1,
    "week17": ""
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
                         data: [24.7, 12.3, 16.5, 'DNP', 5.7, 'BYE', 16.4, 6.4, 'DNP', 'DNP', 'DNP', 3.3, 'DNP', 'DNP', 4.5, 4.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.5, 12.2, 11.0, 'DNP', 10.8, 'BYE', 10.8, 14.3, 'DNP', 'DNP', 'DNP', 12.5, 'DNP', 'DNP', 11.8, 13.8, 11.5]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.3, 9.0, 5.9, 'DNP', 6.2, 'BYE', 5.9, 3.6, 'DNP', 'DNP', 'DNP', 12.4, 'DNP', 'DNP', 4.8, 4.1, 3.2]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.5, 23.8, 16.6, 'DNP', 23.4, 'BYE', 13.5, 12.2, 'DNP', 'DNP', 'DNP', 17.8, 'DNP', 'DNP', 12.4, 18.3, 14.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2577327.png",
    "name": "Tyler Lockett",
    "depthchart": "Starter: WR-1",
    "team": "Seattle Seahawks",
    "projected": 11.5,
    "opponent": "San Francisco 49ers",
    "home_away": "",
    "opp_rank_Neg": 1,
    "team_rank_Neu": 11,
    "avg_fp2": 12.01,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 25.49,
    "fanduelSalary": "$12000",
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
    "week17": ""
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
                         data: [10.9, 12.9, 26.9, 7.1, 12.3, 10.3, 14.3, 13.0, 33.7, 4.4, 'BYE', 4.3, 0.0, 6.3, 22.0, 1.7]
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
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16799.png",
    "name": "Allen Robinson",
    "depthchart": "Starter: WR-1",
    "team": "Chicago Bears",
    "projected": 10.9,
    "opponent": "Minnesota Vikings",
    "home_away": "at ",
    "opp_rank_Neu": 16,
    "team_rank_Neg": 26,
    "avg_fp2": 12.94,
    "opp_rank_allowed_fp2_Pos": 24,
    "opp_avg_allowed_fp2": 30.43,
    "fanduelSalary": "$7800",
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
    "report": "Robinson caught nine passes for 71 yards in the Bears' 21-19 win over the Vikings in Week 17, and he ended the season with 98 receptions for 1,047 yards and seven touchdowns.",
    "analysis": "In his second season following knee surgery, Robinson re-emerged as a fantasy force by posting his first 1,000-yard season since 2015 while posting his second-highest touchdown total of his six-year career. His season was even more impressive because he was often hindered by erratic quarterback play, but his elite ability at the catch point allowed him to consistently make plays even when he was tightly guarded and the football wasn't always on target. It'll be difficult to view him as anything other than a top-12 option at wide receiver in 2020 fantasy drafts.",
    "timestamp": "2019-12-29 01:50 PM",
    "week01": 13.7,
    "week02": 6.1,
    "week03": 9.0,
    "week04": 11.2,
    "week05": 25.2,
    "week06": "BYE",
    "week07": 19.7,
    "week08": 8.7,
    "week09": 1.1,
    "week10": 11.6,
    "week11": 3.5,
    "week12": 22.1,
    "week13": 18.6,
    "week14": 19.3,
    "week15": 16.0,
    "week16": 8.3,
    "week17": ""
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
                         data: [13.7, 6.1, 9.0, 11.2, 25.2, 'BYE', 19.7, 8.7, 1.1, 11.6, 3.5, 22.1, 18.6, 19.3, 16.0, 8.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.1, 15.0, 10.9, 9.7, 11.8, 'BYE', 7.1, 11.0, 11.7, 11.5, 7.6, 9.7, 10.1, 11.0, 13.5, 9.7, 10.9]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.5, 1.0, 8.5, 0.6, 6.5, 'BYE', 5.3, 2.0, 10.6, 5.3, 5.4, 4.3, 8.2, 4.8, 5.6, 11.4, 8.7]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  "rgba(195, 104, 53, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.0, 21.9, 20.1, 12.2, 14.3, 'BYE', 12.0, 20.8, 16.0, 15.5, 15.4, 15.2, 21.4, 12.3, 14.8, 16.8, 17.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15818.png",
    "name": "Keenan Allen",
    "depthchart": "Starter: WR-1",
    "team": "Los Angeles Chargers",
    "projected": 10.8,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Neu": 8,
    "team_rank_Pos": 6,
    "avg_fp2": 12.72,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 20.69,
    "fanduelSalary": "$6700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0080C6",
    "tmColorDark": "#002A5E",
    "tmColorLite_rgba": "rgba(0, 128, 198, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 94, 0.2)",
    "tmTextLite": "#0080C6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lac.png",
    "headlineNews": "Picks up 82 yards, score",
    "report": "Allen caught nine of 10 targets for 82 yards and a touchdown during Sunday's 31-21 loss to Kansas City.",
    "analysis": "Allen put the Chargers on the board early in the second quarter, skying for a Philip Rivers loft pass and tapping his toes down inbounds as he went to the ground. Despite a disappointing all-around season for Allen, he managed to snag at least five passes in seven consecutive games to close the season and set a new career high with 104 receptions on the campaign. He now heads into an intriguing offseason, as the Chargers get set to play in a new stadium in 2020, potentially without Rivers in tow.",
    "timestamp": "2019-12-29 02:56 PM",
    "week01": 22.3,
    "week02": 13.8,
    "week03": 37.1,
    "week04": 7.3,
    "week05": 3.8,
    "week06": 4.3,
    "week07": 8.1,
    "week08": 8.8,
    "week09": 5.5,
    "week10": 12.6,
    "week11": 17.1,
    "week12": "BYE",
    "week13": 15.8,
    "week14": 10.8,
    "week15": 14.4,
    "week16": 9.1,
    "week17": ""
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
                         data: [22.3, 13.8, 37.1, 7.3, 3.8, 4.3, 8.1, 8.8, 5.5, 12.6, 17.1, 'BYE', 15.8, 10.8, 14.4, 9.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.3, 15.5, 14.8, 12.7, 12.3, 11.7, 10.4, 10.8, 12.2, 17.6, 13.0, 'BYE', 15.6, 14.3, 12.7, 12.9, 10.8]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.1, 7.7, 8.2, 8.7, 8.0, 9.4, 3.7, 3.6, 2.8, 6.1, 4.3, 'BYE', 5.1, 7.2, 7.0, 10.7, 9.1]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 128, 198, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [23.8, 16.0, 21.1, 26.6, 25.5, 23.6, 15.8, 21.0, 12.6, 10.4, 19.9, 'BYE', 16.4, 23.0, 20.0, 18.2, 25.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3120348.png",
    "name": "JuJu Smith-Schuster",
    "depthchart": "Starter: WR-1",
    "team": "Pittsburgh Steelers",
    "projected": 10.6,
    "opponent": "Baltimore Ravens",
    "home_away": "at ",
    "opp_rank_Neu": 7,
    "team_rank_Neg": 31,
    "avg_fp2": 8.24,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 27.85,
    "fanduelSalary": "$5900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/pit.png",
    "headlineNews": "Makes two catches in loss to Ravens",
    "report": "Smith-Schuster caught two of six targets for six yards during Sunday's 28-10 loss to the Ravens.",
    "analysis": "Although Smith-Schuster finished second on the team in targets, he struggled to produce as Devlin Hodges turned in a putrid performance against the tough Baltimore defense. Smith-Schuster recorded one gain of 11 yards and lost five yards via a screen play on his other grab. This poor performance ends an extremely disappointing season for Smith-Schuster, who finishes with less than half his receiving yardage total from a year ago. Of course, injuries and poor quarterback play were huge factors in his 41-552-3 stat line, and he'll look to get back on track during the 2020 campaign.",
    "timestamp": "2019-12-29 06:09 PM",
    "week01": 10.8,
    "week02": 10.9,
    "week03": 15.6,
    "week04": 3.0,
    "week05": 15.0,
    "week06": 1.2,
    "week07": "BYE",
    "week08": 18.8,
    "week09": 3.1,
    "week10": 5.9,
    "week11": 3.1,
    "week12": "DNP",
    "week13": "DNP",
    "week14": "DNP",
    "week15": "DNP",
    "week16": 3.2,
    "week17": ""
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
                         data: [10.8, 10.9, 15.6, 3.0, 15.0, 1.2, 'BYE', 18.8, 3.1, 5.9, 3.1, 'DNP', 'DNP', 'DNP', 'DNP', 3.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.4, 14.0, 11.7, 15.9, 19.7, 10.9, 'BYE', 14.1, 13.2, 15.7, 11.8, 'DNP', 'DNP', 'DNP', 'DNP', 16.2, 10.6]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.0, 6.9, 4.5, 4.3, 5.3, 7.1, 'BYE', 0.1, 0.0, 2.9, 0.2, 'DNP', 'DNP', 'DNP', 'DNP', 5.9, 1.2]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.9, 22.4, 19.5, 27.6, 17.4, 13.6, 'BYE', 16.2, 23.7, 15.5, 8.5, 'DNP', 'DNP', 'DNP', 'DNP', 13.9, 17.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13295.png",
    "name": "Emmanuel Sanders",
    "depthchart": "Starter: WR-1",
    "team": "San Francisco 49ers",
    "projected": 10.4,
    "opponent": "Seattle Seahawks",
    "home_away": "at ",
    "opp_rank_Pos": 27,
    "team_rank_Neu": 14,
    "avg_fp2": 9.58,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 28.48,
    "fanduelSalary": "$10000",
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
    "week17": ""
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
                         data: [17.1, 23.3, 2.0, 'BYE', 1.4, 0.5, 8.5, 10.5, 20.7, 3.4, 4.8, 2.0, 6.1, 30.6, 1.9, 7.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.3, 10.0, 11.1, 'BYE', 10.8, 7.0, 6.9, 8.1, 13.5, 13.6, 10.9, 14.9, 8.1, 9.1, 6.4, 8.6, 10.4]
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
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3121427.png",
    "name": "Curtis Samuel",
    "depthchart": "Starter: WR-1",
    "team": "Carolina Panthers",
    "projected": 10.3,
    "opponent": "New Orleans Saints",
    "home_away": "",
    "opp_rank_Neu": 17,
    "team_rank_Neu": 21,
    "avg_fp2": 9.49,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 32.38,
    "fanduelSalary": "$6000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0085CA",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 133, 202, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#0085CA",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/car.png",
    "headlineNews": "Kept to 17 yards in loss",
    "report": "Samuel caught two of five passes for 17 yards during Sunday's 38-6 loss to the Colts. He added four yards on two carries.",
    "analysis": "It would be easy to blame Sunday's poor outing on rookie Will Grier's first career start, but Samuel has been held to under 40 yards receiving in six of his last seven games. Samuel might get some more attention in the season finale against the Saints depending on the health of lead receiver D.J. Moore, who left Sunday's game with a concussion. In Week 12's game against the Saints, Samuel caught just one pass for nine yards but added 40 yards on the ground. It will be up to Grier to help Samuel improve on those numbers.",
    "timestamp": "2019-12-22 03:24 PM",
    "week01": 4.7,
    "week02": 11.8,
    "week03": 13.8,
    "week04": 4.8,
    "week05": 5.9,
    "week06": 21.8,
    "week07": "BYE",
    "week08": 6.6,
    "week09": 14.9,
    "week10": 11.5,
    "week11": 4.5,
    "week12": 5.4,
    "week13": 14.5,
    "week14": 5.2,
    "week15": 13.9,
    "week16": 3.1,
    "week17": ""
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
                         data: [4.7, 11.8, 13.8, 4.8, 5.9, 21.8, 'BYE', 6.6, 14.9, 11.5, 4.5, 5.4, 14.5, 5.2, 13.9, 3.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.3, 7.1, 11.0, 11.2, 9.5, 11.1, 'BYE', 6.4, 8.6, 10.0, 12.1, 8.0, 9.1, 5.5, 10.5, 10.5, 10.3]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.2, 0.3, 4.0, 2.9, 3.5, 3.0, 'BYE', 0.0, 2.9, 8.8, 8.7, 0.9, 4.9, 2.1, 2.0, 5.4, 0.0]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 133, 202, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.1, 7.3, 9.5, 14.2, 10.1, 15.5, 'BYE', 13.7, 8.6, 16.0, 15.3, 13.7, 11.5, 9.8, 9.2, 14.1, 13.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4047839.png",
    "name": "N'Keal Harry",
    "depthchart": "Reserve: WR-3",
    "team": "New England Patriots",
    "projected": 10.2,
    "opponent": "Miami Dolphins",
    "home_away": "",
    "opp_rank_Pos": 28,
    "team_rank_Neu": 9,
    "avg_fp2": 4.68,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 35.09,
    "fanduelSalary": "$5400",
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
    "report": "Harry caught three of his seven targets for 29 yards and rushed for nine yards on one carry in Sunday's 27-24 loss to the Dolphins.",
    "analysis": "The No. 32 overall pick in the 2019 NFL Draft -- who began the season on IR with an ankle injury -- finishes his rookie campaign with 12 catches (on 24 targets) for 105 yards and two TDs in seven games. Heading into the playoffs, Harry will serve as the Patriots' No. 3 wide receiver behind Julian Edelman and Mohamed Sanu. Down the road, the 22-year-old should continue to grow into a larger role in the New England offense and with his 6-4, 225-pound frame, Harry has the potential to develop into a dangerous red-zone weapon for the team.",
    "timestamp": "2019-12-30 08:30 AM",
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
    "week12": 7.5,
    "week13": "DNP",
    "week14": "DNP",
    "week15": "DNP",
    "week16": 4.9,
    "week17": ""
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
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 7.5, 'DNP', 'DNP', 'DNP', 4.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 4.3, 'DNP', 'DNP', 'DNP', 5.7, 10.2]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 3.7, 'DNP', 'DNP', 'DNP', 3.8, 1.4]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 4.0, 'DNP', 'DNP', 'DNP', 4.2, 7.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3115394.png",
    "name": "D.J. Chark",
    "depthchart": "Starter: WR-1",
    "team": "Jacksonville Jaguars",
    "projected": 9.7,
    "opponent": "Indianapolis Colts",
    "home_away": "",
    "opp_rank_Neu": 22,
    "team_rank_Neu": 16,
    "avg_fp2": 13.14,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 29.97,
    "fanduelSalary": "$5900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#006778",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 103, 120, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#006778",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/jax.png",
    "headlineNews": "No injury designation for finale",
    "report": "Chark (ankle) doesn't carry an injury designation into Sunday's game against the Colts.",
    "analysis": "Chark didn't advance beyond limited participation in practice this week, but the Jaguars were apparently encouraged enough with how he looked to clear him for the finale. The second-year player will fill his usual role as Jacksonville's top target in an offense that could be missing multiple key skill-position players in Week 17. Quarterback Gardner Minshew (shoulder), running back Leonard Fournette (neck) and fellow wideout Dede Westbrook (neck/shoulder) are all listed as questionable.",
    "timestamp": "2019-12-27 12:17 PM",
    "week01": 22.6,
    "week02": 15.0,
    "week03": 15.6,
    "week04": 6.4,
    "week05": 32.4,
    "week06": 5.8,
    "week07": 8.8,
    "week08": 16.9,
    "week09": 5.2,
    "week10": "BYE",
    "week11": 26.4,
    "week12": 8.3,
    "week13": 5.7,
    "week14": 12.0,
    "week15": "DNP",
    "week16": 2.8,
    "week17": ""
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
                         data: [22.6, 15.0, 15.6, 6.4, 32.4, 5.8, 8.8, 16.9, 5.2, 'BYE', 26.4, 8.3, 5.7, 12.0, 'DNP', 2.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [0.5, 6.1, 5.0, 6.9, 7.3, 10.3, 10.2, 11.6, 12.9, 'BYE', 8.6, 14.7, 11.2, 10.5, 'DNP', 14.8, 9.7]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 5.8, 0.0, 3.5, 0.0, 0.0, 0.0, 0.0, 2.0, 'BYE', 0.0, 0.0, 8.5, 5.3, 'DNP', 1.8, 0.0]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 103, 120, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [6.4, 17.2, 14.4, 13.7, 11.0, 38.6, 33.3, 22.1, 23.2, 'BYE', 35.6, 17.5, 27.0, 29.6, 'DNP', 26.8, 27.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/5528.png",
    "name": "Larry Fitzgerald",
    "depthchart": "Backup: WR-2",
    "team": "Arizona Cardinals",
    "projected": 9.4,
    "opponent": "Los Angeles Rams",
    "home_away": "at ",
    "opp_rank_Neu": 10,
    "team_rank_Neg": 24,
    "avg_fp2": 8.89,
    "opp_rank_allowed_fp2_Neu": 14,
    "opp_avg_allowed_fp2": 26.27,
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
    "headlineNews": "Eclipses 70 catches, 800 yards",
    "report": "Fitzgerald secured four of seven targets for 45 receiving yards during Sunday's 31-24 loss to the Rams.",
    "analysis": "The 36-year-old Fitzgerald is perhaps Arizona's all-time face of the franchise, and deservedly so, with 17,073 receiving yards, 120 touchdowns, 11 Pro Bowl nominations and a Walter Payton Man of the Year Award to his name. Though his locker room influence is undeniable within the youthful Cardinals organization, Fitzgerald has seen his statistical production drop off over the past two seasons, averaging 72 catches, 769 receiving yards and five TDs between 2018 and 2019 after putting up 108 catches, 1,131 yards and seven TDs per year between 2015 and 2017. It remains undetermined as to whether Fitzgerald will return for a 17th NFL campaign, but if he does, the decorated veteran would likely serve as Arizona's No. 1 or 2 option at wide receiver in a second season under the Kliff Kingsbury-Kyler Murray regime.",
    "timestamp": "2019-12-29 08:27 PM",
    "week01": 21.3,
    "week02": 12.9,
    "week03": 12.1,
    "week04": 7.2,
    "week05": 8.8,
    "week06": 9.9,
    "week07": 1.7,
    "week08": 1.8,
    "week09": 5.8,
    "week10": 11.1,
    "week11": 10.2,
    "week12": "BYE",
    "week13": 8.6,
    "week14": 3.5,
    "week15": 5.7,
    "week16": 12.8,
    "week17": ""
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
                         data: [21.3, 12.9, 12.1, 7.2, 8.8, 9.9, 1.7, 1.8, 5.8, 11.1, 10.2, 'BYE', 8.6, 3.5, 5.7, 12.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.1, 14.5, 13.4, 9.2, 10.3, 18.3, 14.2, 12.6, 6.1, 14.5, 7.9, 'BYE', 9.9, 8.8, 8.4, 10.2, 9.4]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [11.7, 4.0, 10.1, 5.3, 12.5, 9.9, 8.5, 8.7, 3.3, 0.7, 2.8, 'BYE', 8.4, 7.6, 7.3, 5.8, 6.5]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.2, 14.0, 19.8, 20.9, 15.3, 18.1, 15.9, 14.7, 11.3, 17.5, 10.5, 'BYE', 15.1, 12.8, 12.0, 13.2, 12.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2576623.png",
    "name": "DeVante Parker",
    "depthchart": "Starter: WR-1",
    "team": "Miami Dolphins",
    "projected": 9.3,
    "opponent": "New England Patriots",
    "home_away": "at ",
    "opp_rank_Neg": 2,
    "team_rank_Neu": 15,
    "avg_fp2": 12.83,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 19.07,
    "fanduelSalary": "$6900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#008E97",
    "tmColorDark": "#005778",
    "tmColorLite_rgba": "rgba(0, 142, 151, 0.2)",
    "tmColorDark_rgba": "rgba(0, 87, 120, 0.2)",
    "tmTextLite": "#f5821f",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/mia.png",
    "headlineNews": "Excellent finish to season",
    "report": "Parker secured eight of 11 targets for 137 yards in the Dolphins' 27-24 win over the Patriots on Sunday.",
    "analysis": "Parker finished his career-best season in fitting fashion, leading the team in receptions, receiving yardage and targets while posting his second straight 100-yard effort in the process. Parker came alive over the last seven games of the campaign, a possible career-changing stretch for the previously disappointing 2015 first-round pick. Sunday's tally, which included key catches on the Dolphins' game-winning drive in the fourth quarter, pushed Parker's final 2019 line to 72-1,202-9, with all three components career bests.",
    "timestamp": "2019-12-29 03:07 PM",
    "week01": 9.0,
    "week02": 0.0,
    "week03": 7.1,
    "week04": 15.0,
    "week05": "BYE",
    "week06": 10.3,
    "week07": 14.0,
    "week08": 8.9,
    "week09": 13.7,
    "week10": 9.4,
    "week11": 17.0,
    "week12": 12.1,
    "week13": 31.4,
    "week14": 3.8,
    "week15": 21.2,
    "week16": 19.6,
    "week17": ""
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
                         data: [9.0, 0.0, 7.1, 15.0, 'BYE', 10.3, 14.0, 8.9, 13.7, 9.4, 17.0, 12.1, 31.4, 3.8, 21.2, 19.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.3, 7.3, 6.6, 5.1, 'BYE', 7.6, 5.2, 9.0, 10.5, 6.8, 7.7, 7.8, 6.1, 9.0, 8.7, 10.4, 9.3]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.3, 0.0, 0.5, 'BYE', 5.0, 0.4, 1.9, 1.9, 4.3, 1.9, 6.7, 5.4, 0.0, 0.0, 9.5, 0.0]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 142, 151, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [5.2, 14.1, 17.3, 11.2, 'BYE', 14.6, 12.5, 9.7, 12.3, 14.5, 11.9, 13.1, 15.8, 30.0, 14.7, 18.2, 20.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15880.png",
    "name": "Robert Woods",
    "depthchart": "Starter: WR-1",
    "team": "Los Angeles Rams",
    "projected": 9.1,
    "opponent": "Arizona Cardinals",
    "home_away": "",
    "opp_rank_Pos": 31,
    "team_rank_Pos": 5,
    "avg_fp2": 12.2,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 30.13,
    "fanduelSalary": "$7700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Finds end zone against Cards",
    "report": "Woods caught seven of his 12 targets for 67 yards and a touchdown and added a nine-yard rush during Sunday's 31-24 win over Arizona.",
    "analysis": "The solid Week 17 showing positioned Woods above 1,000 receiving yards for the second consecutive season, and he also finished with a career-high 90 receptions. However, the seven-year veteran only found the end zone twice all season, and those touchdowns didn't come until Weeks 14 and 17. Los Angeles has all four of its top receivers under contract for the 2020 campaign, so Woods should once again be heavily involved in the Rams' passing attack, and he's probably a candidate for statistical correction in the touchdown column.",
    "timestamp": "2019-12-30 11:06 AM",
    "week01": 12.6,
    "week02": 5.2,
    "week03": 7.3,
    "week04": 22.9,
    "week05": 7.3,
    "week06": 7.6,
    "week07": 11.1,
    "week08": 5.2,
    "week09": "BYE",
    "week10": 13.0,
    "week11": "DNP",
    "week12": 12.7,
    "week13": 23.7,
    "week14": 22.2,
    "week15": 3.7,
    "week16": 16.3,
    "week17": ""
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
                         data: [12.6, 5.2, 7.3, 22.9, 7.3, 7.6, 11.1, 5.2, 'BYE', 13.0, 'DNP', 12.7, 23.7, 22.2, 3.7, 16.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.9, 14.0, 8.3, 11.9, 14.4, 10.9, 9.0, 9.6, 'BYE', 12.1, 'DNP', 8.8, 11.4, 10.0, 11.5, 11.8, 9.1]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [7.4, 4.5, 6.0, 1.4, 5.3, 4.8, 6.0, 7.8, 'BYE', 3.0, 'DNP', 3.8, 7.9, 6.7, 6.8, 7.5, 3.5]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [14.8, 13.3, 11.2, 12.1, 16.4, 14.3, 16.5, 20.5, 'BYE', 20.3, 'DNP', 15.2, 13.3, 20.2, 13.2, 13.9, 21.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2574808.png",
    "name": "Robby Anderson",
    "depthchart": "Starter: WR-1",
    "team": "New York Jets",
    "projected": 9.1,
    "opponent": "Buffalo Bills",
    "home_away": "at ",
    "opp_rank_Neg": 3,
    "team_rank_Neg": 30,
    "avg_fp2": 8.86,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 23.13,
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
    "headlineNews": "Not interested in hometown discount",
    "report": "Anderson, a pending free agent, said he won't give the Jets a hometown discount, Manish Mehta of the New York Daily News reports. \"You got to talk to my agent,\" Anderson said. \"I don't think that makes sense.\"",
    "analysis": "The real question is whether he'll even listen to the team's offers. Anderson has played 62 of a possible 64 games since latching on with the Jets as an undrafted rookie in 2016, typically working as the first or second option in the passing game. His usage in terms of targets has been less consistent, and there were even rumors in October about the Jets trying to trade him. One of the thinnest players in the league, Anderson has never done much damage over the middle or after the catch, but he nonetheless profiles as one of the top WRs on the market this upcoming offseason, offering a strong combination of speed, footwork and ball skills. The 26-year-old should land a sizable contract that locks him in for a starting job, with high expectations in terms of target volume -- and fantasy volume -- depending on where he signs.",
    "timestamp": "2019-12-30 07:53 AM",
    "week01": 3.8,
    "week02": 10.1,
    "week03": 2.6,
    "week04": "BYE",
    "week05": 2.1,
    "week06": 21.0,
    "week07": 1.5,
    "week08": 6.3,
    "week09": 4.3,
    "week10": 1.6,
    "week11": 7.1,
    "week12": 16.6,
    "week13": 13.6,
    "week14": 21.5,
    "week15": 10.6,
    "week16": 10.2,
    "week17": ""
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
                         data: [3.8, 10.1, 2.6, 'BYE', 2.1, 21.0, 1.5, 6.3, 4.3, 1.6, 7.1, 16.6, 13.6, 21.5, 10.6, 10.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.6, 7.5, 9.5, 'BYE', 10.6, 6.9, 9.4, 9.7, 13.2, 13.0, 7.4, 8.8, 8.3, 16.3, 10.4, 12.7, 9.1]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [11.3, 4.7, 4.0, 'BYE', 3.3, 3.5, 9.2, 2.4, 6.3, 0.1, 4.1, 1.8, 1.0, 2.3, 5.2, 10.4, 5.2]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  "rgba(18, 87, 64, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.5, 22.5, 14.2, 'BYE', 20.5, 19.5, 24.4, 13.6, 14.4, 12.5, 16.1, 10.9, 18.4, 13.4, 12.3, 22.8, 9.6]
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
    "opponent": "Detroit Lions",
    "home_away": "at ",
    "opp_rank_Pos": 32,
    "team_rank_Neu": 19,
    "avg_fp2": 4.69,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 32.97,
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
    "week17": ""
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
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 5.7, 6.7, 'DNP', 'DNP', 'BYE', 'DNP', 17.8, 2.9, 2.4, 7.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 8.0, 3.1, 'DNP', 'DNP', 'BYE', 'DNP', 3.8, 8.5, 7.1, 7.8, 9.0]
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
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2587819.png",
    "name": "Tyrell Williams",
    "depthchart": "Starter: WR-1",
    "team": "Oakland Raiders",
    "projected": 8.9,
    "opponent": "Denver Broncos",
    "home_away": "at ",
    "opp_rank_Neg": 6,
    "team_rank_Neu": 13,
    "avg_fp2": 9.39,
    "opp_rank_allowed_fp2_Neu": 7,
    "opp_avg_allowed_fp2": 24.7,
    "fanduelSalary": "$5700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A5ACAF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/oak.png",
    "headlineNews": "Good to go Sunday",
    "report": "Williams (foot) doesn't carry an injury designation into Sunday's game against the Broncos after logging a limited practice Friday, Paul Gutierrez of ESPN.com reports.",
    "analysis": "Williams was added to the Raiders' Week 17 injury report after sitting out Thursday's practice, but his return to the field Friday sets the stage for him to suit up for the regular-season finale, a game that 7-8 Oakland needs to win in order to have any chance of making the playoffs. Though he hauled in all four of his targets for 82 yards in a Week 16 win over the Chargers, Williams has been a hit-or-miss fantasy option during the second half of the season after opening the campaign with touchdowns in each of his first five outings.",
    "timestamp": "2019-12-27 02:08 PM",
    "week01": 19.5,
    "week02": 13.1,
    "week03": 10.4,
    "week04": 11.1,
    "week05": "DNP",
    "week06": "BYE",
    "week07": "DNP",
    "week08": 16.6,
    "week09": 6.3,
    "week10": 4.0,
    "week11": 10.2,
    "week12": 2.8,
    "week13": 1.4,
    "week14": 5.0,
    "week15": 11.5,
    "week16": 10.2,
    "week17": ""
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
                         data: [19.5, 13.1, 10.4, 11.1, 'DNP', 'BYE', 'DNP', 16.6, 6.3, 4.0, 10.2, 2.8, 1.4, 5.0, 11.5, 10.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.9, 14.7, 6.7, 11.6, 'DNP', 'BYE', 'DNP', 13.9, 14.9, 7.4, 10.6, 13.0, 12.5, 12.8, 9.6, 8.9, 8.9]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 5.4, 5.5, 7.5, 'DNP', 'BYE', 'DNP', 5.7, 8.5, 3.4, 0.8, 4.5, 4.5, 3.1, 3.9, 3.6, 3.3]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [22.0, 18.2, 22.0, 15.0, 'DNP', 'BYE', 'DNP', 20.4, 14.4, 16.3, 13.3, 15.1, 13.3, 12.2, 8.2, 6.6, 11.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16790.png",
    "name": "Jarvis Landry",
    "depthchart": "Backup: WR-2",
    "team": "Cleveland Browns",
    "projected": 8.8,
    "opponent": "Cincinnati Bengals",
    "home_away": "at ",
    "opp_rank_Neu": 21,
    "team_rank_Neu": 23,
    "avg_fp2": 12.06,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 25.98,
    "fanduelSalary": "$6800",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Hip",
    "tmColorLite": "#FF3C00",
    "tmColorDark": "#311D00",
    "tmColorLite_rgba": "rgba(255, 60, 0, 0.2)",
    "tmColorDark_rgba": "rgba(49, 29, 0, 0.2)",
    "tmTextLite": "#FF3C00",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
    "headlineNews": "Contemplating hip surgery",
    "report": "Landry expects to make a decision on offseason hip surgery by Friday, with the procedure likely involving a rehab timeline of 6-to-8 months, Nate Ulrich of the Akron Beacon Journal reports.",
    "analysis": "The Browns' practice reports listed Landry with a hip injury throughout most of November and December, but he never actually missed a game en route to leading the team in targets, catches, receiving yards and receiving touchdowns. He acknowledged that surgery would wipe out his entire offseason, though he likely would be ready for Week 1 of 2020. Meanwhile, the Browns are searching for a new head coach after they fired Freddie Kitchens on Sunday.",
    "timestamp": "2019-12-30 09:56 AM",
    "week01": 9.7,
    "week02": 4.7,
    "week03": 7.7,
    "week04": 20.7,
    "week05": 9.5,
    "week06": 5.1,
    "week07": "BYE",
    "week08": 9.0,
    "week09": 14.1,
    "week10": 20.2,
    "week11": 12.3,
    "week12": 31.8,
    "week13": 10.6,
    "week14": 9.6,
    "week15": 5.04,
    "week16": 10.9,
    "week17": ""
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
                         data: [9.7, 4.7, 7.7, 20.7, 9.5, 5.1, 'BYE', 9.0, 14.1, 20.2, 12.3, 31.8, 10.6, 9.6, 5.04, 10.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.0, 11.8, 6.6, 11.2, 7.8, 6.8, 'BYE', 8.5, 6.0, 8.5, 9.0, 12.0, 11.0, 10.8, 10.7, 9.4, 8.8]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.7, 4.3, 9.4, 9.1, 2.6, 7.1, 'BYE', 5.5, 5.7, 8.7, 9.2, 3.3, 9.8, 5.3, 2.9, 9.3, 3.0]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.4, 20.0, 16.5, 17.2, 18.8, 16.7, 'BYE', 16.4, 12.6, 14.9, 17.8, 11.0, 16.5, 17.5, 13.6, 17.3, 20.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13217.png",
    "name": "Golden Tate",
    "depthchart": "Backup: WR-2",
    "team": "New York Giants",
    "projected": 8.5,
    "opponent": "Philadelphia Eagles",
    "home_away": "",
    "opp_rank_Neu": 19,
    "team_rank_Neu": 18,
    "avg_fp2": 11.24,
    "opp_rank_allowed_fp2_Pos": 30,
    "opp_avg_allowed_fp2": 33.31,
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
    "headlineNews": "Grabs TD in Week 17",
    "report": "Tate caught five of eight targets for 68 yards and a touchdown in Sunday's 34-17 loss to the Eagles.",
    "analysis": "The veteran receiver missed the first four games of 2019 due to a suspension, but once Tate got up to speed he proved to be a reliable option for rookie quarterback Daniel Jones, hauling in 46 of 79 targets for 663 yards and six TDs over his final 10 games. The 31-year-old receiver will probably return to the Giants next season given the $7.5 million dead cap hit the team would incur if he gets cut, and while there will be plenty of mouths to feed in the offense, Tate should produce solid numbers again -- especially if Jones takes a big step forward in his development.",
    "timestamp": "2019-12-29 06:50 PM",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": 2.8,
    "week06": 19.2,
    "week07": 11.0,
    "week08": 12.5,
    "week09": 8.8,
    "week10": 21.5,
    "week11": "BYE",
    "week12": 10.8,
    "week13": "DNP",
    "week14": 1.6,
    "week15": 11.6,
    "week16": 12.6,
    "week17": ""
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
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 2.8, 19.2, 11.0, 12.5, 8.8, 21.5, 'BYE', 10.8, 'DNP', 1.6, 11.6, 12.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 7.2, 9.0, 11.5, 12.4, 10.8, 11.5, 'BYE', 10.0, 'DNP', 9.1, 11.2, 7.6, 8.5]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 3.7, 5.1, 8.2, 12.1, 8.1, 8.1, 'BYE', 7.7, 'DNP', 7.9, 8.9, 6.5, 6.5]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 14.2, 20.5, 24.5, 18.7, 19.5, 16.3, 'BYE', 16.6, 'DNP', 19.2, 20.5, 15.4, 12.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14053.png",
    "name": "Randall Cobb",
    "depthchart": "Reserve: WR-3",
    "team": "Dallas Cowboys",
    "projected": 8.3,
    "opponent": "Washington Redskins",
    "home_away": "",
    "opp_rank_Neu": 14,
    "team_rank_Pos": 2,
    "avg_fp2": 8.34,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 27.65,
    "fanduelSalary": "$5200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#7F9695",
    "tmColorDark": "#041E42",
    "tmColorLite_rgba": "rgba(127, 150, 149, 0.2)",
    "tmColorDark_rgba": "rgba(4, 30, 66, 0.2)",
    "tmTextLite": "#7F9695",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
    "headlineNews": "Five catches in Sunday's loss",
    "report": "Cobb caught five of seven targets for 73 yards in Sunday's 17-9 loss to the Eagles.",
    "analysis": "It was a solid effort from the veteran slot receiver, as he tied Michael Gallup for the team lead in catches among WRs. Cobb's 747 receiving yards on the year mark his highest total since 2015, and he'll look to make one last impact in Week 17's must-win game against Washington.",
    "timestamp": "2019-12-22 07:30 PM",
    "week01": 14.9,
    "week02": 6.0,
    "week03": 3.3,
    "week04": 5.6,
    "week05": 6.8,
    "week06": "DNP",
    "week07": 3.9,
    "week08": "BYE",
    "week09": 4.5,
    "week10": 19.6,
    "week11": 19.5,
    "week12": 10.6,
    "week13": 6.8,
    "week14": 5.3,
    "week15": 0.2,
    "week16": 9.8,
    "week17": ""
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
                         data: [14.9, 6.0, 3.3, 5.6, 6.8, 'DNP', 3.9, 'BYE', 4.5, 19.6, 19.5, 10.6, 6.8, 5.3, 0.2, 9.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.0, 5.8, 7.6, 4.5, 5.9, 'DNP', 10.0, 'BYE', 14.4, 9.6, 5.8, 5.7, 7.0, 5.9, 6.8, 8.9, 8.3]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [8.2, 0.0, 2.5, 0.0, 7.4, 'DNP', 2.1, 'BYE', 0.0, 4.1, 1.5, 6.1, 7.4, 4.0, 4.1, 5.2, 3.9]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  "rgba(127, 150, 149, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.3, 26.5, 16.2, 9.9, 13.5, 'DNP', 11.1, 'BYE', 14.5, 12.1, 7.3, 16.0, 16.6, 9.9, 13.2, 10.2, 8.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/11674.png",
    "name": "Danny Amendola",
    "depthchart": "Backup: WR-2",
    "team": "Detroit Lions",
    "projected": 8.0,
    "opponent": "Green Bay Packers",
    "home_away": "",
    "opp_rank_Neu": 18,
    "team_rank_Neu": 8,
    "avg_fp2": 7.3,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 24.81,
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
    "headlineNews": "No. 2 receiver on quiet passing day",
    "report": "Amendola caught two of three targets for 21 receiving yards during Sunday's 27-17 loss to Denver.",
    "analysis": "A week after racking up eight catches for 102 yards on 13 targets against Tampa Bay, Amendola finished second among Detroit receivers in yardage against the Broncos. Unfortunately for those with vested interest in Amendola's fantasy stock, he was the second-leading receiver on an afternoon in which the Lions managed just 117 yards through the air. Amendola is still averaging eight targets per game over his past four outings in spite of his quiet afternoon Sunday, but he carries a 13-game scoring drought heading into a matchup against a Green Bay defense that enters Monday Night Football ranking No. 2 in the NFL with just 146 receptions allowed to opposing wideouts on the season.",
    "timestamp": "2019-12-22 07:49 PM",
    "week01": 19.9,
    "week02": 0.0,
    "week03": 5.7,
    "week04": "DNP",
    "week05": "BYE",
    "week06": 1.1,
    "week07": 14.5,
    "week08": 13.5,
    "week09": 4.4,
    "week10": 4.9,
    "week11": 6.7,
    "week12": 3.6,
    "week13": 4.7,
    "week14": 5.9,
    "week15": 14.2,
    "week16": 3.1,
    "week17": ""
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
                         data: [19.9, 0.0, 5.7, 'DNP', 'BYE', 1.1, 14.5, 13.5, 4.4, 4.9, 6.7, 3.6, 4.7, 5.9, 14.2, 3.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.7, 4.9, 6.6, 'DNP', 'BYE', 4.0, 3.4, 3.8, 4.7, 3.8, 4.1, 3.8, 3.4, 3.2, 10.4, 5.9, 8.0]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.9, 0.2, 3.3, 'DNP', 'BYE', 1.6, 1.7, 0.3, 4.2, 2.8, 2.8, 5.4, 3.8, 4.1, 4.5, 5.1, 5.7]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 118, 182, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.1, 22.1, 13.4, 'DNP', 'BYE', 16.6, 9.1, 8.3, 12.1, 11.0, 10.5, 11.4, 11.3, 9.0, 11.1, 11.0, 8.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3892889.png",
    "name": "Dede Westbrook",
    "depthchart": "Backup: WR-2",
    "team": "Jacksonville Jaguars",
    "projected": 8.0,
    "opponent": "Indianapolis Colts",
    "home_away": "",
    "opp_rank_Neu": 22,
    "team_rank_Neu": 16,
    "avg_fp2": 7.5,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 29.97,
    "fanduelSalary": "$5300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#006778",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 103, 120, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#006778",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/jax.png",
    "headlineNews": "Caps off season with score",
    "report": "Westbrook had seven catches (eight targets) for 72 yards and a touchdown in Sunday's 38-20 win over the Colts.",
    "analysis": "Westbrook paced all Jacksonville receivers in receptions and yardage Sunday after failing to eclipse 25 yards over his three previous contests. The 25-year-old took a back seat to sophomore sensation D.J. Chark, finishing the 2019 campaign with 66 catches, 660 yards and three touchdowns. Westbrook would be in line to start again next season if Jacksonville does not add to its receiver corps, but the team's inconsistent quarterback play limits his upside.",
    "timestamp": "2019-12-29 06:23 PM",
    "week01": 11.7,
    "week02": 0.8,
    "week03": 7.5,
    "week04": 9.1,
    "week05": 11.74,
    "week06": 6.8,
    "week07": 14.7,
    "week08": 0.0,
    "week09": "DNP",
    "week10": "BYE",
    "week11": 5.2,
    "week12": 10.9,
    "week13": 16.5,
    "week14": 5.5,
    "week15": 3.1,
    "week16": 1.5,
    "week17": ""
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
                         data: [11.7, 0.8, 7.5, 9.1, 11.74, 6.8, 14.7, 0.0, 'DNP', 'BYE', 5.2, 10.9, 16.5, 5.5, 3.1, 1.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.5, 13.7, 7.6, 8.7, 10.2, 6.8, 8.9, 12.6, 'DNP', 'BYE', 6.6, 6.3, 8.1, 8.4, 14.0, 9.8, 8.0]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.4, 5.0, 15.1, 8.6, 6.3, 2.5, 6.2, 0.2, 'DNP', 'BYE', 2.9, 6.3, 0.0, 11.0, 6.1, 5.7, 3.3]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 103, 120, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.4, 9.5, 17.3, 18.3, 15.6, 9.7, 10.5, 8.9, 'DNP', 'BYE', 18.4, 14.4, 11.3, 16.0, 15.2, 12.1, 9.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3931397.png",
    "name": "JJ Arcega-Whiteside",
    "depthchart": "Backup: WR-2",
    "team": "Philadelphia Eagles",
    "projected": 7.9,
    "opponent": "New York Giants",
    "home_away": "at ",
    "opp_rank_Pos": 26,
    "team_rank_Neu": 12,
    "avg_fp2": 1.86,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 32.74,
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
    "headlineNews": "",
    "report": "",
    "analysis": "",
    "timestamp": "",
    "week01": "DNP",
    "week02": "DNP",
    "week03": 1.5,
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": "DNP",
    "week08": "DNP",
    "week09": "DNP",
    "week10": "BYE",
    "week11": "DNP",
    "week12": "DNP",
    "week13": 8.0,
    "week14": 3.9,
    "week15": 0.0,
    "week16": 4.9,
    "week17": ""
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
                         data: ['DNP', 'DNP', 1.5, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 8.0, 3.9, 0.0, 4.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 6.6, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 3.1, 2.4, 2.2, 2.1, 7.9]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 4.2, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 0.0, 0.0, 0.0, 0.0, 1.7]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 5.0, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 7.2, 8.1, 4.7, 5.3, 7.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/17258.png",
    "name": "Willie Snead",
    "depthchart": "Starter: WR-1",
    "team": "Baltimore Ravens",
    "projected": 7.9,
    "opponent": "Pittsburgh Steelers",
    "home_away": "",
    "opp_rank_Neg": 5,
    "team_rank_Neg": 25,
    "avg_fp2": 5.06,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 25.25,
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
    "headlineNews": "Playing time, targets wane",
    "report": "Snead was held without a catch on his lone target Sunday against the Browns.",
    "analysis": "Snead played just 41 percent of the snaps Sunday and was not involved in the passing game while Marquise Brown and Seth Roberts played the most among the Baltimore wideouts. With some key starters sitting out in Week 17, Snead could be more featured in the offense than usual. He won't have the benefit of catching passes from Lamar Jackson, however, as Robert Griffin will be getting the start while Jackson is rested for the playoffs.",
    "timestamp": "2019-12-24 07:57 AM",
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
    "week17": ""
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
                         data: [11.1, 1.0, 6.2, 13.1, 7.1, 3.3, 0.2, 'BYE', 2.5, 2.2, 2.3, 14.4, 1.7, 8.8, 2.0, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.9, 11.8, 6.4, 8.5, 6.1, 7.7, 9.6, 'BYE', 5.9, 5.2, 5.6, 7.4, 4.9, 6.9, 9.3, 5.8, 7.9]
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
    "projected": 7.8,
    "opponent": "Los Angeles Chargers",
    "home_away": "",
    "opp_rank_Neg": 4,
    "team_rank_Pos": 4,
    "avg_fp2": 8.55,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 22.67,
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
    "headlineNews": "Just two catches on SNF",
    "report": "Watkins caught two passes (five targets) for 28 yards in Sunday's 26-3 win over the Bears.",
    "analysis": "The Chiefs were leaning heavily on a West Coast passing scheme, only attempting one pass of more than 20 yards. This led to Travis Kelce and Tyreek Hill -- who are superior route runners -- getting a lot more of Patrick Mahomes' attention as opposed to a pure deep threat like Watkins. The 26-year-old hasn't posted many big receiving lines since his monstrous 198-yard, three-touchdown performance back in Week 1, so he should be limited to deep-league value heading into a tough matchup against the Chargers on Sunday.",
    "timestamp": "2019-12-22 09:33 PM",
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
    "week17": ""
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
                         data: [42.3, 7.9, 8.9, 4.9, 0.0, 'DNP', 'DNP', 7.0, 9.8, 7.6, 3.6, 'BYE', 0.0, 7.0, 8.4, 3.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.1, 12.6, 12.3, 15.8, 10.2, 'DNP', 'DNP', 10.4, 7.8, 10.5, 6.4, 'BYE', 7.9, 6.3, 5.9, 4.6, 7.8]
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
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2576716.png",
    "name": "Jamison Crowder",
    "depthchart": "Backup: WR-2",
    "team": "New York Jets",
    "projected": 7.7,
    "opponent": "Buffalo Bills",
    "home_away": "at ",
    "opp_rank_Neg": 3,
    "team_rank_Neg": 30,
    "avg_fp2": 9.48,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 23.13,
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
    "headlineNews": "Scores six times in last nine games",
    "report": "Crowder caught eight of 10 targets for 66 yards and a touchdown in Sunday's 13-6 win over Buffalo.",
    "analysis": "Crowder scored the game's only touchdown from one yard out early in the fourth quarter. It was his sixth touchdown of the season, with all of that scoring coming in the final nine weeks. He dressed for all 16 games after signing a three-year deal with the Jets this past offseason, finishing with a career-high 78 catches despite missing starting quarterback Sam Darnold for three games. The slot receiver narrowly missed setting new personal bests in receiving yards (833) and touchdowns, as he had 847 yards and seven touchdowns with the Redskins back in 2016. If New York is able to upgrade on the outside in the offseason, that should open up even more room for Crowder to wreak havoc out of the slot.",
    "timestamp": "2019-12-29 03:05 PM",
    "week01": 17.3,
    "week02": 6.0,
    "week03": 3.5,
    "week04": "BYE",
    "week05": 2.0,
    "week06": 12.8,
    "week07": 4.6,
    "week08": 3.9,
    "week09": 18.3,
    "week10": 16.6,
    "week11": 16.1,
    "week12": 2.8,
    "week13": 1.8,
    "week14": 4.5,
    "week15": 24.0,
    "week16": 8.0,
    "week17": ""
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
                         data: [17.3, 6.0, 3.5, 'BYE', 2.0, 12.8, 4.6, 3.9, 18.3, 16.6, 16.1, 2.8, 1.8, 4.5, 24.0, 8.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.9, 7.9, 6.6, 'BYE', 5.9, 4.5, 5.1, 7.2, 7.5, 6.2, 4.6, 5.8, 4.0, 7.7, 9.2, 9.0, 7.7]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.9, 3.6, 5.2, 'BYE', 3.2, 0.0, 1.6, 3.8, 1.3, 1.4, 5.7, 5.4, 9.6, 4.1, 2.9, 4.7, 4.7]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  "rgba(18, 87, 64, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.6, 17.1, 9.5, 'BYE', 10.7, 9.7, 14.9, 12.1, 12.4, 12.2, 20.1, 11.6, 21.0, 10.4, 6.5, 20.0, 14.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3916945.png",
    "name": "Darius Slayton",
    "depthchart": "Reserve: WR-3",
    "team": "New York Giants",
    "projected": 7.7,
    "opponent": "Philadelphia Eagles",
    "home_away": "",
    "opp_rank_Neu": 19,
    "team_rank_Neu": 18,
    "avg_fp2": 10.71,
    "opp_rank_allowed_fp2_Pos": 30,
    "opp_avg_allowed_fp2": 33.31,
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
    "headlineNews": "Ready for Week 17",
    "report": "Slayton (knee) doesn't carry an injury designation and should be ready to handle a normal workload Sunday against the Eagles, Jordan Raanan of ESPN.com reports.",
    "analysis": "Slayton was limited to two targets while playing 29 percent of the offensive snaps in last week's 41-35 win over Washington, missing a large chunk of the game after he hurt his knee in the first half. He made sporadic appearances thereafter, and he was able to practice on a limited basis both Wednesday and Thursday. While it's possible the Giants monitor Slayton's workload, it sounds like he'll open the game with his usual spot in three-wide sets alongside Sterling Shepard and Golden Tate. The rookie enjoyed his best game of the season Week 14 at Philadelphia, catching five of eight targets for 154 yards and a pair of touchdowns.",
    "timestamp": "2019-12-27 10:12 AM",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": 2.3,
    "week05": 14.2,
    "week06": 4.7,
    "week07": 3.8,
    "week08": 18.0,
    "week09": 1.1,
    "week10": 29.34,
    "week11": "BYE",
    "week12": 8.7,
    "week13": 7.4,
    "week14": 29.9,
    "week15": 10.1,
    "week16": 0.0,
    "week17": ""
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
                         data: ['DNP', 'DNP', 'DNP', 2.3, 14.2, 4.7, 3.8, 18.0, 1.1, 29.34, 'BYE', 8.7, 7.4, 29.9, 10.1, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 8.3, 6.0, 7.3, 9.9, 9.6, 5.4, 10.4, 'BYE', 9.1, 12.5, 7.2, 11.1, 5.8, 7.7]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 5.3, 3.9, 7.1, 7.5, 7.1, 3.6, 2.2, 'BYE', 0.0, 0.0, 3.7, 0.0, 0.4, 0.0]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 6.0, 4.2, 8.6, 8.1, 7.9, 20.2, 17.7, 'BYE', 30.1, 23.5, 9.7, 42.2, 35.3, 44.1]
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
    "opponent": "Baltimore Ravens",
    "home_away": "at ",
    "opp_rank_Neu": 7,
    "team_rank_Neg": 31,
    "avg_fp2": 8.45,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 27.85,
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
    "headlineNews": "Four receptions in finale",
    "report": "Johnson caught four of seven targets for 54 yards in Sunday's 28-10 loss to the Ravens.",
    "analysis": "Although the rookie receiver failed to hit the century mark in a game, Johnson finished the 2019 season with a solid 59-680-5 line while playing in all 16 contests. With several players missing time due to injury Johnson led the team in catches and receiving touchdowns as well as targets (92). He also ran for 41 yards on four carries and led the league by averaging 12.4 yards per punt returns, including an 85-yard touchdown. Johnson has upside heading into the 2020 season, especially if Pittsburgh gets more consistent play at quarterback.",
    "timestamp": "2019-12-30 07:41 AM",
    "week01": "DNP",
    "week02": "DNP",
    "week03": 13.3,
    "week04": 14.7,
    "week05": 5.68,
    "week06": 2.4,
    "week07": "BYE",
    "week08": 16.9,
    "week09": 1.0,
    "week10": 8.4,
    "week11": 2.7,
    "week12": 4.4,
    "week13": 3.6,
    "week14": 22.6,
    "week15": 6.7,
    "week16": 18.1,
    "week17": ""
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
                         data: ['DNP', 'DNP', 13.3, 14.7, 5.68, 2.4, 'BYE', 16.9, 1.0, 8.4, 2.7, 4.4, 3.6, 22.6, 6.7, 18.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 4.1, 4.5, 5.6, 2.4, 'BYE', 8.3, 8.4, 7.2, 7.8, 12.4, 7.5, 14.6, 7.9, 11.1, 7.5]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 3.7, 4.4, 7.4, 7.3, 'BYE', 0.0, 0.5, 0.0, 0.0, 6.5, 0.0, 2.7, 0.0, 4.0, 3.3]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 4.2, 5.0, 8.3, 8.0, 'BYE', 13.3, 13.7, 9.9, 10.9, 16.4, 15.0, 10.9, 15.8, 8.4, 20.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2972460.png",
    "name": "Breshad Perriman",
    "depthchart": "Starter: WR-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 7.3,
    "opponent": "Atlanta Falcons",
    "home_away": "",
    "opp_rank_Neu": 23,
    "team_rank_Pos": 1,
    "avg_fp2": 7.55,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 28.52,
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
    "headlineNews": "Spectacular finish to season",
    "report": "Perriman secured five of eight targets 134 yards and a touchdown in the Buccaneers' 28-22 overtime loss to the Falcons on Sunday.",
    "analysis": "Perriman once again paced the team in receptions, receiving yards and targets, putting together his third consecutive 100-yard effort to close out the campaign. The previously underwhelming wideout earned high praise from coach Bruce Arians in his postgame press conference, Scott Smith of the team's official site reports, with the Buccaneers' head man stating that Perriman played like a No. 1 receiver down the stretch. The 26-year-old is slated to head into unrestricted free agency in March, but given his strong finish, the Buccaneers could certainly be interested in bringing him back into the fold.",
    "timestamp": "2019-12-29 02:41 PM",
    "week01": 2.0,
    "week02": 0.0,
    "week03": 2.4,
    "week04": 0.0,
    "week05": "DNP",
    "week06": "DNP",
    "week07": "BYE",
    "week08": 0.0,
    "week09": 12.2,
    "week10": 2.7,
    "week11": 2.5,
    "week12": 4.9,
    "week13": 11.2,
    "week14": 14.5,
    "week15": 32.1,
    "week16": 13.7,
    "week17": ""
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
                         data: [2.0, 0.0, 2.4, 0.0, 'DNP', 'DNP', 'BYE', 0.0, 12.2, 2.7, 2.5, 4.9, 11.2, 14.5, 32.1, 13.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.4, 4.6, 7.8, 1.9, 'DNP', 'DNP', 'BYE', 2.9, 6.4, 5.1, 3.3, 3.1, 5.0, 6.7, 6.9, 8.7, 7.3]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.2, 0.0, 1.1, 0.0, 'DNP', 'DNP', 'BYE', 1.2, 0.0, 1.5, 0.7, 3.0, 1.2, 0.7, 4.3, 9.5, 1.5]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(213, 10, 10, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.3, 10.3, 3.9, 12.8, 'DNP', 'DNP', 'BYE', 6.4, 6.8, 13.5, 10.2, 12.2, 10.4, 8.7, 10.7, 43.1, 34.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2977187.png",
    "name": "Cooper Kupp",
    "depthchart": "Reserve: WR-3",
    "team": "Los Angeles Rams",
    "projected": 7.0,
    "opponent": "Arizona Cardinals",
    "home_away": "",
    "opp_rank_Pos": 31,
    "team_rank_Pos": 5,
    "avg_fp2": 13.48,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 30.13,
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
    "headlineNews": "Scores TD for fifth straight game",
    "report": "Kupp corralled seven of 10 targets for 99 receiving yards and a touchdown during Sunday's 31-24 win against Arizona.",
    "analysis": "Those who stuck with Kupp through a third-quarter slump benefited during the fantasy postseason, as the 26-year-old wideout scored in five consecutive games Weeks 13 through 17 after averaging three catches for 29 yards per game with zero TDs between Weeks 10 and 12. The third-year man out of Eastern Washington rebounded spectacularly from a torn ACL that cost him half of the 2018 campaign, obliterating previous personal bests by compiling 94 receptions for 1,161 yards while also reaching the double-digit TD threshold for the first time in his professional career.  Kupp carries immense upside heading into the 2020 campaign after finishing just five targets behind Robert Woods for a team-high mark of 139.",
    "timestamp": "2019-12-29 06:07 PM",
    "week01": 8.1,
    "week02": 15.1,
    "week03": 27.7,
    "week04": 22.4,
    "week05": 22.2,
    "week06": 3.7,
    "week07": 8.0,
    "week08": 31.5,
    "week09": "BYE",
    "week10": 0.0,
    "week11": 6.8,
    "week12": 6.5,
    "week13": 15.5,
    "week14": 12.5,
    "week15": 11.1,
    "week16": 11.1,
    "week17": ""
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
                         data: [8.1, 15.1, 27.7, 22.4, 22.2, 3.7, 8.0, 31.5, 'BYE', 0.0, 6.8, 6.5, 15.5, 12.5, 11.1, 11.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.7, 11.0, 6.5, 8.8, 10.4, 9.3, 7.5, 8.5, 'BYE', 14.4, 12.8, 7.8, 11.0, 10.8, 11.6, 11.0, 7.0]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.2, 8.0, 4.6, 5.0, 9.0, 0.1, 4.6, 0.8, 'BYE', 0.0, 0.0, 1.1, 3.8, 1.9, 8.1, 1.8, 8.7]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [20.9, 14.4, 34.5, 22.2, 34.9, 26.2, 19.9, 11.9, 'BYE', 26.9, 17.2, 8.3, 14.9, 15.1, 24.5, 17.3, 20.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3915823.png",
    "name": "Keke Coutee",
    "depthchart": "Starter: WR-1",
    "team": "Houston Texans",
    "projected": 6.9,
    "opponent": "Tennessee Titans",
    "home_away": "",
    "opp_rank_Pos": 24,
    "team_rank_Neu": 10,
    "avg_fp2": 4.51,
    "opp_rank_allowed_fp2_Neu": 15,
    "opp_avg_allowed_fp2": 27.47,
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
    "headlineNews": "Out once more",
    "report": "Coutee (coach's decision) is inactive for Saturday's game against the Buccaneers.",
    "analysis": "With Will Fuller (hamstring) active, Coutee will be relegated to the bench for a second consecutive week as the Texans will have just four wide receivers -- DeAndre Hopkins, Fuller, Kenny Stills and DeAndre Carter -- available Saturday in a pivotal postseason-clinching chance against the Buccaneers.",
    "timestamp": "2019-12-21 08:35 AM",
    "week01": "DNP",
    "week02": 1.7,
    "week03": 0.0,
    "week04": 2.6,
    "week05": 8.7,
    "week06": 5.9,
    "week07": 10.4,
    "week08": "DNP",
    "week09": "DNP",
    "week10": "BYE",
    "week11": "DNP",
    "week12": "DNP",
    "week13": "DNP",
    "week14": "DNP",
    "week15": "DNP",
    "week16": "DNP",
    "week17": ""
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
                         data: ['DNP', 1.7, 0.0, 2.6, 8.7, 5.9, 10.4, 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 2.7, 3.2, 3.8, 5.4, 4.5, 5.5, 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 6.9]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 1.4, 1.0, 0.0, 0.0, 0.0, 0.0, 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 8.8]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 14.8, 18.8, 5.6, 6.3, 6.7, 19.0, 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 13.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3126486.png",
    "name": "Deebo Samuel",
    "depthchart": "Backup: WR-2",
    "team": "San Francisco 49ers",
    "projected": 6.9,
    "opponent": "Seattle Seahawks",
    "home_away": "at ",
    "opp_rank_Pos": 27,
    "team_rank_Neu": 14,
    "avg_fp2": 9.93,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 28.48,
    "fanduelSalary": "$10500",
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
    "week17": ""
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
                         data: [3.2, 17.9, 5.9, 'BYE', 0.8, 3.4, 'DNP', 12.3, 6.0, 15.2, 17.4, 12.0, 13.1, 13.4, 4.48, 13.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.5, 3.4, 11.9, 'BYE', 5.3, 6.8, 'DNP', 6.1, 6.1, 4.1, 7.1, 4.7, 9.0, 11.4, 7.7, 8.5, 6.9]
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
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/17051.png",
    "name": "Albert Wilson",
    "depthchart": "Backup: WR-2",
    "team": "Miami Dolphins",
    "projected": 6.9,
    "opponent": "New England Patriots",
    "home_away": "at ",
    "opp_rank_Neg": 2,
    "team_rank_Neu": 15,
    "avg_fp2": 4.89,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 19.07,
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
    "headlineNews": "Solid finish to season",
    "report": "Wilson caught five of eight targets for 59 yards during Sunday's 27-24 divisional win over the Patriots.",
    "analysis": "Wilson concludes the 2019 campaign with 43 catches on 62 targets for 351 yards and one touchdown across 13 contests. He also carried the ball five times for 45 yards. The 27-year-old came into the year working his way back from a torn labrum and fractured hip, and setbacks in his recovery plus additional minor injuries marred his effectiveness for much of the season. He did close out the year with some momentum, exceeding 55 yards with at least five catches in each of the final three contests. He's under contract with the Dolphins through 2020 and should benefit from a healthy offseason.",
    "timestamp": "2019-12-30 08:21 AM",
    "week01": 2.4,
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "BYE",
    "week06": 4.0,
    "week07": 2.7,
    "week08": "DNP",
    "week09": 0.8,
    "week10": 0.5,
    "week11": 4.1,
    "week12": 6.7,
    "week13": 8.8,
    "week14": 1.0,
    "week15": 8.4,
    "week16": 12.3,
    "week17": ""
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
                         data: [2.4, 'DNP', 'DNP', 'DNP', 'BYE', 4.0, 2.7, 'DNP', 0.8, 0.5, 4.1, 6.7, 8.8, 1.0, 8.4, 12.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.9, 'DNP', 'DNP', 'DNP', 'BYE', 4.3, 3.0, 'DNP', 6.0, 2.4, 2.7, 3.0, 1.7, 4.1, 5.1, 7.7, 6.9]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.4, 'DNP', 'DNP', 'DNP', 'BYE', 0.0, 0.7, 'DNP', 3.0, 1.7, 0.0, 0.7, 1.2, 1.2, 1.8, 1.8, 0.0]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 142, 151, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [37.5, 'DNP', 'DNP', 'DNP', 'BYE', 34.0, 14.5, 'DNP', 10.7, 11.7, 2.5, 7.0, 5.3, 9.5, 14.2, 8.1, 5.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3042373.png",
    "name": "Robert Davis",
    "depthchart": "Reserve: WR-3",
    "team": "Philadelphia Eagles",
    "projected": 6.8,
    "opponent": "New York Giants",
    "home_away": "at ",
    "opp_rank_Pos": 26,
    "team_rank_Neu": 12,
    "avg_fp2": 6.0,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 32.74,
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
    "week17": ""
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
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 6.8]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 4.0]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  "rgba(56, 97, 104, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 4.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3042778.png",
    "name": "Corey Davis",
    "depthchart": "Backup: WR-2",
    "team": "Tennessee Titans",
    "projected": 6.8,
    "opponent": "Houston Texans",
    "home_away": "at ",
    "opp_rank_Pos": 30,
    "team_rank_Neu": 22,
    "avg_fp2": 6.23,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 28.77,
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
    "week17": ""
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
                         data: [0.0, 5.3, 5.9, 17.6, 3.8, 5.1, 17.0, 1.9, 6.8, 'DNP', 'BYE', 3.9, 2.8, 4.4, 7.2, 5.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.0, 5.8, 3.1, 9.5, 7.3, 9.4, 6.0, 12.3, 5.9, 'DNP', 'BYE', 3.5, 8.7, 2.5, 4.3, 4.7, 6.8]
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
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3050487.png",
    "name": "Anthony Miller",
    "depthchart": "Backup: WR-2",
    "team": "Chicago Bears",
    "projected": 6.4,
    "opponent": "Minnesota Vikings",
    "home_away": "at ",
    "opp_rank_Neu": 16,
    "team_rank_Neg": 26,
    "avg_fp2": 6.7,
    "opp_rank_allowed_fp2_Pos": 24,
    "opp_avg_allowed_fp2": 30.43,
    "fanduelSalary": "$6700",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Shoulder",
    "tmColorLite": "#c36835",
    "tmColorDark": "#0B162A",
    "tmColorLite_rgba": "rgba(195, 104, 53, 0.2)",
    "tmColorDark_rgba": "rgba(11, 22, 42, 0.2)",
    "tmTextLite": "#c36835",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png",
    "headlineNews": "Not returning Sunday",
    "report": "Miller won't return to Sunday's game in Minnesota due to a left shoulder injury, Dan Wiederer of the Chicago Tribune reports.",
    "analysis": "Miller was injured while returning a kickoff, taking a hard hit in the process. With his second season officially over, he'll end the campaign with 52 catches (on 85 targets) for 656 yards and two touchdowns. Although his performance this season was disappointing, over the second half of the season he was a clear fantasy starter with the exception of his disappearing act Week 16. As he enters the third year of a four-year rookie contract, a strong case can be made for him to be drafted as a top-40 option at wide receiver.",
    "timestamp": "2019-12-29 11:35 AM",
    "week01": 0.0,
    "week02": 0.7,
    "week03": 2.0,
    "week04": 2.1,
    "week05": 7.2,
    "week06": "BYE",
    "week07": 6.8,
    "week08": 8.2,
    "week09": 0.0,
    "week10": 1.2,
    "week11": 8.4,
    "week12": 10.7,
    "week13": 18.5,
    "week14": 11.7,
    "week15": 22.3,
    "week16": 0.7,
    "week17": ""
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
                         data: [0.0, 0.7, 2.0, 2.1, 7.2, 'BYE', 6.8, 8.2, 0.0, 1.2, 8.4, 10.7, 18.5, 11.7, 22.3, 0.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.0, 5.5, 5.1, 4.1, 3.3, 'BYE', 2.2, 6.9, 5.7, 4.1, 3.0, 5.1, 6.0, 5.8, 5.6, 6.3, 6.4]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 1.9, 0.0, 0.0, 0.0, 'BYE', 1.0, 0.3, 6.1, 1.1, 2.2, 0.0, 0.0, 0.0, 0.0, 2.0, 0.5]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  "rgba(195, 104, 53, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.6, 12.2, 19.8, 9.4, 10.8, 'BYE', 8.1, 5.5, 7.8, 7.2, 8.6, 15.2, 8.6, 14.3, 11.7, 13.7, 17.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14918.png",
    "name": "Jarius Wright",
    "depthchart": "Backup: WR-2",
    "team": "Carolina Panthers",
    "projected": 6.4,
    "opponent": "New Orleans Saints",
    "home_away": "",
    "opp_rank_Neu": 17,
    "team_rank_Neu": 21,
    "avg_fp2": 2.73,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 32.38,
    "fanduelSalary": "$5200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0085CA",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 133, 202, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#0085CA",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/car.png",
    "headlineNews": "Makes one grab",
    "report": "Wright caught one of five targets for 19 yards in Sunday's 38-6 loss to the Colts.",
    "analysis": "Wright trailed only Christian McCaffrey for Carolina's team lead in targets, but once again could only put together a one-reception outing. Although that kind of performance has been the norm for him this season, if D.J. Moore (concussion) is unavailable Week 17 versus the Saints, then Wright could gain a little extra value to close the campaign.",
    "timestamp": "2019-12-23 10:11 AM",
    "week01": "DNP",
    "week02": 2.5,
    "week03": 4.8,
    "week04": 8.4,
    "week05": 1.1,
    "week06": 1.1,
    "week07": "BYE",
    "week08": 2.2,
    "week09": -0.7,
    "week10": 2.6,
    "week11": 2.4,
    "week12": 0.9,
    "week13": 4.9,
    "week14": 5.0,
    "week15": 1.4,
    "week16": 2.4,
    "week17": ""
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
                         data: ['DNP', 2.5, 4.8, 8.4, 1.1, 1.1, 'BYE', 2.2, -0.7, 2.6, 2.4, 0.9, 4.9, 5.0, 1.4, 2.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 4.1, 7.6, 6.8, 4.2, 5.1, 'BYE', 3.1, 3.4, 3.6, 4.7, 3.0, 3.2, 0.9, 5.5, 6.7, 6.4]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 0.5, 4.4, 2.4, 1.3, 3.1, 'BYE', 0.0, 1.8, 2.5, 2.1, 1.8, 0.0, 1.5, 2.0, 1.0, 0.0]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 133, 202, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 6.7, 11.3, 5.8, 7.2, 6.0, 'BYE', 13.4, 4.5, 5.3, 6.5, 9.1, 6.7, 5.8, 6.9, 4.7, 5.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3921958.png",
    "name": "Chris Conley",
    "depthchart": "Reserve: WR-3",
    "team": "Jacksonville Jaguars",
    "projected": 6.2,
    "opponent": "Indianapolis Colts",
    "home_away": "",
    "opp_rank_Neu": 22,
    "team_rank_Neu": 16,
    "avg_fp2": 8.51,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 29.97,
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
    "headlineNews": "Snags big pass in loss",
    "report": "Conley caught two of five passes for 56 yards and a touchdown during Sunday's 24-12 loss to Atlanta.",
    "analysis": "The Falcons controlled the tempo for much of the game, but Conley helped jumpstart a would-be comeback early in the fourth quarter, busting up the sideline for a 42-yard touchdown. It was his third touchdown in his last two games after just two scores in his first 13 contests of 2019. He'll look to keep his scoring streak alive in the finale against the Colts, against whom Conley tied a season-high with six receptions and gained 58 yards in Week 11, albeit with Nick Foles throwing the passes.",
    "timestamp": "2019-12-22 04:03 PM",
    "week01": 18.7,
    "week02": 9.3,
    "week03": 4.0,
    "week04": 2.2,
    "week05": 3.1,
    "week06": 0.0,
    "week07": 11.8,
    "week08": 18.3,
    "week09": 4.2,
    "week10": "BYE",
    "week11": 8.8,
    "week12": 6.9,
    "week13": 7.7,
    "week14": 1.2,
    "week15": 18.9,
    "week16": 12.6,
    "week17": ""
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
                         data: [18.7, 9.3, 4.0, 2.2, 3.1, 0.0, 11.8, 18.3, 4.2, 'BYE', 8.8, 6.9, 7.7, 1.2, 18.9, 12.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.7, 7.9, 2.7, 2.0, 3.1, 3.1, 3.6, 6.6, 6.7, 'BYE', 2.2, 4.0, 4.4, 3.1, 7.8, 5.6, 6.2]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 1.7, 0.7, 1.3, 0.0, 0.0, 2.2, 0.7, 0.0, 'BYE', 0.0, 4.7, 2.2, 2.7, 0.0, 8.5, 3.3]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 103, 120, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.2, 7.8, 8.0, 9.6, 10.7, 4.7, 9.6, 9.2, 8.5, 'BYE', 13.8, 13.9, 16.8, 8.8, 20.9, 20.8, 19.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3115913.png",
    "name": "Geronimo Allison",
    "depthchart": "Reserve: WR-3",
    "team": "Green Bay Packers",
    "projected": 6.1,
    "opponent": "Detroit Lions",
    "home_away": "at ",
    "opp_rank_Pos": 32,
    "team_rank_Neu": 19,
    "avg_fp2": 3.68,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 32.97,
    "fanduelSalary": "$4600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#d7a017",
    "tmColorDark": "#203731",
    "tmColorLite_rgba": "rgba(215, 160, 23, 0.2)",
    "tmColorDark_rgba": "rgba(32, 55, 49, 0.2)",
    "tmTextLite": "#d7a017",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png",
    "headlineNews": "Goes without catch in Week 16",
    "report": "Allison was targeted twice but did not catch a pass in Monday's victory over the Vikings.",
    "analysis": "Allison was on the field for 33 offensive plays, but he was held without a catch for the first time since Week 1. He finished with the third-most snaps among Packers wideouts for the second time in as many weeks, and with Allen Lazard coming on, he figures to stay in that spot. Packers receivers will face a Lions defense in Week 17 that has been beaten by opposing wideouts all season, but it's unlikely Allison will be involved enough to exploit the matchup.",
    "timestamp": "2019-12-24 10:34 AM",
    "week01": 0.0,
    "week02": 8.5,
    "week03": 0.4,
    "week04": 13.4,
    "week05": 3.8,
    "week06": 5.5,
    "week07": "DNP",
    "week08": 1.2,
    "week09": 3.1,
    "week10": 2.1,
    "week11": "BYE",
    "week12": 2.4,
    "week13": 3.0,
    "week14": 1.6,
    "week15": 2.9,
    "week16": 2.0,
    "week17": ""
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
                         data: [0.0, 8.5, 0.4, 13.4, 3.8, 5.5, 'DNP', 1.2, 3.1, 2.1, 'BYE', 2.4, 3.0, 1.6, 2.9, 2.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.0, 7.6, 2.9, 2.0, 6.1, 6.2, 'DNP', 4.7, 4.3, 5.2, 'BYE', 3.9, 5.3, 8.0, 6.7, 5.6, 6.1]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.4, 1.0, 0.0, 0.0, 0.3, 0.0, 'DNP', 0.0, 0.0, 0.0, 'BYE', 0.0, 0.0, 0.0, 0.5, 0.7, 0.0]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  "rgba(215, 160, 23, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.0, 15.9, 14.8, 12.7, 5.3, 8.1, 'DNP', 17.2, 6.7, 4.1, 'BYE', 11.7, 5.6, 5.2, 4.0, 5.6, 3.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3045523.png",
    "name": "Kendrick Bourne",
    "depthchart": "Reserve: WR-3",
    "team": "San Francisco 49ers",
    "projected": 5.9,
    "opponent": "Seattle Seahawks",
    "home_away": "at ",
    "opp_rank_Pos": 27,
    "team_rank_Neu": 14,
    "avg_fp2": 5.52,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 28.48,
    "fanduelSalary": "$7000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "Gains 29 yards in win",
    "report": "Bourne had two catches (three targets) for 29 yards in Saturday's 34-31 win over the Rams.",
    "analysis": "Bourne didn't have a strong fantasy day, but his 16-yard reception on a crucial third-and-16 on the game's final drive helped propel the 49ers to victory. The 24-year-old has taken a stranglehold of the third spot on the wide receiver depth chart, although that role in San Francisco's offense doesn't provide much in terms of volume. Bourne will need to find the end zone -- like he did against Seattle back in Week 10 -- in order to have fantasy value Sunday against the Seahawks.",
    "timestamp": "2019-12-22 03:33 PM",
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
    "week17": ""
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
                         data: ['DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 8.4, 'DNP', 'DNP', 'DNP', 'DNP', 3.7, 5.7, 15.3, 1.6, 3.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 2.9, 'DNP', 'DNP', 'DNP', 'DNP', 7.2, 4.5, 5.2, 4.6, 5.9, 5.9]
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
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2978109.png",
    "name": "Zach Pascal",
    "depthchart": "Backup: WR-2",
    "team": "Indianapolis Colts",
    "projected": 5.8,
    "opponent": "Jacksonville Jaguars",
    "home_away": "at ",
    "opp_rank_Neu": 20,
    "team_rank_Neg": 28,
    "avg_fp2": 7.53,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 26.07,
    "fanduelSalary": "$5800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#014683",
    "tmColorDark": "#002C5F",
    "tmColorLite_rgba": "rgba(1, 70, 131, 0.2)",
    "tmColorDark_rgba": "rgba(0, 44, 95, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png",
    "headlineNews": "Just one reception Sunday",
    "report": "Pascal had just one reception for six yards on three targets in Sunday's win over Carolina.",
    "analysis": "The Colts didn't throw many passes (Jacoby Brissett was just 14 of 27 for 119 yards passing) due to a large lead gained on special teams and via the run. Pascal still started and played on 50 of the offense's 64 snaps. He should get more work next week at Jacksonville.",
    "timestamp": "2019-12-23 03:08 PM",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": 9.2,
    "week05": "DNP",
    "week06": "BYE",
    "week07": 25.6,
    "week08": 1.1,
    "week09": 16.1,
    "week10": 3.6,
    "week11": 2.7,
    "week12": 0.0,
    "week13": 14.4,
    "week14": 17.9,
    "week15": 6.4,
    "week16": 1.1,
    "week17": ""
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
                         data: ['DNP', 'DNP', 'DNP', 9.2, 'DNP', 'BYE', 25.6, 1.1, 16.1, 3.6, 2.7, 0.0, 14.4, 17.9, 6.4, 1.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 1.5, 'DNP', 'BYE', 5.4, 6.8, 8.5, 13.2, 11.1, 7.8, 10.6, 12.3, 8.2, 8.2, 5.8]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 1.1, 'DNP', 'BYE', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 17.4, 'DNP', 'BYE', 12.7, 15.8, 17.9, 19.0, 12.9, 25.2, 27.6, 23.7, 19.1, 12.3, 9.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3126002.png",
    "name": "Christian Blake",
    "depthchart": "Backup: WR-2",
    "team": "Atlanta Falcons",
    "projected": 5.7,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "at ",
    "opp_rank_Pos": 29,
    "team_rank_Pos": 3,
    "avg_fp2": 1.82,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 36.43,
    "fanduelSalary": "$4600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/atl.png",
    "headlineNews": "Catchless in win",
    "report": "Blake was unable to bring in his only target of Sunday's 29-22 win over the 49ers.",
    "analysis": "Blake saw a whopping 18 total targets in Weeks 12 and 13, but has just one target in his last two games despite the absence of Calvin Ridley (abdomen). Though the Falcons are showing some life down the stretch, plugging the rookie into fantasy lineups does not seem to be worth the risk. Next up is a Sunday matchup against a middle-of-the-road Jaguars pass defense.",
    "timestamp": "2019-12-17 05:34 PM",
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
    "week13": 8.7,
    "week14": "DNP",
    "week15": "DNP",
    "week16": 0.0,
    "week17": ""
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
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 8.7, 'DNP', 'DNP', 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 3.1, 'DNP', 'DNP', 2.8, 5.7]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 2.8, 'DNP', 'DNP', 0.0, 0.0]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 3.4, 'DNP', 'DNP', 8.6, 12.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/combiner/i?img=/i/headshots/nophoto.png",
    "name": "Kelvin Harmon",
    "depthchart": "Backup: WR-2",
    "team": "Washington Redskins",
    "projected": 5.7,
    "opponent": "Dallas Cowboys",
    "home_away": "at ",
    "opp_rank_Neu": 11,
    "team_rank_Neg": 32,
    "avg_fp2": 3.14,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 24.17,
    "fanduelSalary": "$5200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#773141",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(119, 49, 65, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png",
    "headlineNews": "Delivers season-best yardage",
    "report": "Harmon caught five of six passes for 58 yards and completed his lone pass attempt for 11 yards during Sunday's 41-35 overtime loss to the Giants.",
    "analysis": "Harmon provided his most productive outing of the season as he finished second among Washington's wide receivers in offensive snaps, only one snap behind Terry McLaurin. The rookie sixth-round pick has enjoyed a strong second half of the season working as the team's No. 3 wide receiver, catching 19 passes for 257 yards in the last six games.",
    "timestamp": "2019-12-23 10:13 AM",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": 2.4,
    "week05": "DNP",
    "week06": "DNP",
    "week07": "DNP",
    "week08": "DNP",
    "week09": "DNP",
    "week10": "BYE",
    "week11": 7.8,
    "week12": "DNP",
    "week13": 6.6,
    "week14": 3.5,
    "week15": 3.2,
    "week16": 8.74,
    "week17": ""
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
                         data: ['DNP', 'DNP', 'DNP', 2.4, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 7.8, 'DNP', 6.6, 3.5, 3.2, 8.74]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 1.0, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 4.6, 'DNP', 3.5, 6.4, 6.7, 4.4, 5.7]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 1.7, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 0.7, 'DNP', 2.1, 4.6, 1.7, 3.1, 1.6]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 2.8, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 2.8, 'DNP', 8.3, 7.1, 7.2, 4.7, 7.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16460.png",
    "name": "Adam Thielen",
    "depthchart": "Backup: WR-2",
    "team": "Minnesota Vikings",
    "projected": 5.6,
    "opponent": "Chicago Bears",
    "home_away": "",
    "opp_rank_Neu": 12,
    "team_rank_Neu": 20,
    "avg_fp2": 9.97,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 24.01,
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
    "week17": ""
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
                         data: [11.8, 10.28, 19.1, 1.6, 28.5, 14.7, 9.0, 'DNP', 0.0, 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 4.5, 0.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.0, 9.7, 13.1, 10.6, 5.1, 9.5, 11.0, 'DNP', 11.5, 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 10.7, 12.1, 5.6]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.9, 5.6, 0.0, 0.0, 3.6, 13.1, 4.7, 'DNP', 5.1, 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 6.5, 2.1, 0.0]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  "rgba(224, 170, 25, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [17.2, 17.7, 19.7, 20.5, 22.0, 21.9, 18.1, 'DNP', 14.5, 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 15.1, 8.3, 11.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3135321.png",
    "name": "Hunter Renfrow",
    "depthchart": "Reserve: WR-3",
    "team": "Oakland Raiders",
    "projected": 5.6,
    "opponent": "Denver Broncos",
    "home_away": "at ",
    "opp_rank_Neg": 6,
    "team_rank_Neu": 13,
    "avg_fp2": 7.48,
    "opp_rank_allowed_fp2_Neu": 7,
    "opp_avg_allowed_fp2": 24.7,
    "fanduelSalary": "$6000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A5ACAF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/oak.png",
    "headlineNews": "Continues late-season emergence",
    "report": "Renfrow caught six of nine targets for 102 yards and a touchdown during Sunday's 16-15 loss to the Broncos.",
    "analysis": "With the Raiders shorthanded at receiver, Renfrow went off Sunday and nearly gave the Raiders a win in their final game representing Oakland. Down a score with only seconds remaining, the 5-foot-9 Renfrow high-pointed a 28-yard pass from Derek Carr and wrestled it away mid-air from Isaac Yiadom. He scored three plays later. The rookie receiver showed a lot of promise down the stretch with back-to-back games of over 100 yards and a touchdown to end the season, his only two 100-yard games of the campaign.",
    "timestamp": "2019-12-29 05:10 PM",
    "week01": 2.3,
    "week02": 5.0,
    "week03": 4.3,
    "week04": 2.8,
    "week05": 1.7,
    "week06": "BYE",
    "week07": 2.4,
    "week08": 16.8,
    "week09": 14.4,
    "week10": 6.2,
    "week11": 9.1,
    "week12": 4.6,
    "week13": "DNP",
    "week14": "DNP",
    "week15": "DNP",
    "week16": 20.2,
    "week17": ""
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
                         data: [2.3, 5.0, 4.3, 2.8, 1.7, 'BYE', 2.4, 16.8, 14.4, 6.2, 9.1, 4.6, 'DNP', 'DNP', 'DNP', 20.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.6, 7.9, 2.5, 4.8, 2.8, 'BYE', 3.3, 5.2, 9.1, 3.1, 3.5, 4.4, 'DNP', 'DNP', 'DNP', 1.1, 5.6]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.5, 2.9, 5.5, 3.5, 8.1, 'BYE', 5.1, 2.0, 0.0, 0.6, 2.9, 4.2, 'DNP', 'DNP', 'DNP', 2.5, 0.0]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [5.9, 4.6, 6.3, 4.0, 8.7, 'BYE', 5.8, 5.4, 13.1, 14.2, 12.6, 10.4, 'DNP', 'DNP', 'DNP', 5.2, 16.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3128724.png",
    "name": "Isaiah McKenzie",
    "depthchart": "Starter: WR-1",
    "team": "Buffalo Bills",
    "projected": 5.3,
    "opponent": "New York Jets",
    "home_away": "",
    "opp_rank_Neu": 15,
    "team_rank_Neg": 27,
    "avg_fp2": 3.22,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 31.22,
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
    "headlineNews": "Opportunity knocks",
    "report": "With John Brown and Cole Beasley inactive, McKenzie is in line for added action Sunday against the Jets.",
    "analysis": "With the Bills' playoff seeding set, the team rested several key players Sunday, which sets the stage for Buffalo's Week 17 wideout duties to be handled by McKenzie, Robert Foster and Duke Williams.",
    "timestamp": "2019-12-29 09:05 AM",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "BYE",
    "week07": "DNP",
    "week08": "DNP",
    "week09": "DNP",
    "week10": 2.9,
    "week11": 4.6,
    "week12": 1.8,
    "week13": 4.9,
    "week14": 4.0,
    "week15": 0.0,
    "week16": 2.1,
    "week17": ""
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
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 2.9, 4.6, 1.8, 4.9, 4.0, 0.0, 2.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 2.1, -0.1, 4.0, 5.1, 0.7, 3.7, 3.5, 5.3]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 0.0, 0.0, 0.0, 0.0, 0.6, 1.4, 1.4, 1.6]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 2.8, 3.0, 5.1, 3.5, 4.7, 5.3, 4.2, 4.9]
                    }
                    
                    ]
               }
            }];



$scope.positionTE = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4527.png",
    "name": "Jason Witten",
    "depthchart": "Starter: TE-1",
    "team": "Dallas Cowboys",
    "projected": 15.8,
    "opponent": "Washington Redskins",
    "home_away": "",
    "opp_rank_Neu": 14,
    "team_rank_Pos": 2,
    "avg_fp2": 6.93,
    "opp_rank_allowed_fp2_Pos": 30,
    "opp_avg_allowed_fp2": 11.75,
    "fanduelSalary": "$5600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#7F9695",
    "tmColorDark": "#041E42",
    "tmColorLite_rgba": "rgba(127, 150, 149, 0.2)",
    "tmColorDark_rgba": "rgba(4, 30, 66, 0.2)",
    "tmTextLite": "#7F9695",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
    "headlineNews": "Hauls in two passes",
    "report": "Witten caught two of three targets for 14 yards in Sunday's loss to the Eagles.",
    "analysis": "Witten had at least four catches in each of the previous three contests, but he was only a minor factor in Dallas' Week 16 offense. The veteran tight end has 59 catches for 505 yards and four touchdowns in 15 games.",
    "timestamp": "2019-12-24 08:01 PM",
    "week01": 9.0,
    "week02": 10.5,
    "week03": 6.9,
    "week04": 5.0,
    "week05": 4.4,
    "week06": 8.2,
    "week07": 5.3,
    "week08": "BYE",
    "week09": 9.8,
    "week10": 2.7,
    "week11": 5.8,
    "week12": 1.0,
    "week13": 15.2,
    "week14": 6.2,
    "week15": 11.6,
    "week16": 2.4,
    "week17": ""
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
                         data: [9.0, 10.5, 6.9, 5.0, 4.4, 8.2, 5.3, 'BYE', 9.8, 2.7, 5.8, 1.0, 15.2, 6.2, 11.6, 2.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.7, 7.8, 9.1, 11.8, 7.7, 9.2, 8.0, 'BYE', 6.1, 14.1, 9.7, 6.8, 3.4, 7.0, 6.8, 8.2, 15.8]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.7, 6.7, 7.9, 4.9, 5.6, 5.9, 5.8, 'BYE', 5.5, 5.4, 4.9, 4.6, 4.3, 5.0, 4.1, 6.0, 7.2]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  "rgba(127, 150, 149, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.7, 23.3, 18.7, 16.4, 11.2, 12.1, 9.7, 'BYE', 19.4, 9.0, 9.5, 10.4, 6.5, 9.3, 9.1, 10.6, 12.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3040151.png",
    "name": "George Kittle",
    "depthchart": "Starter: TE-1",
    "team": "San Francisco 49ers",
    "projected": 14.0,
    "opponent": "Seattle Seahawks",
    "home_away": "at ",
    "opp_rank_Pos": 27,
    "team_rank_Neu": 14,
    "avg_fp2": 12.86,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 12.08,
    "fanduelSalary": "$14500",
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
    "week17": ""
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
                         data: [9.4, 6.9, 8.7, 'BYE', 17.8, 14.3, 5.3, 11.6, 16.9, 'DNP', 'DNP', 21.9, 2.4, 15.7, 19.9, 16.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.8, 8.1, 13.3, 'BYE', 11.8, 10.0, 8.9, 9.5, 11.5, 'DNP', 'DNP', 13.1, 11.0, 13.2, 16.7, 8.9, 14.0]
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
    "projected": 13.9,
    "opponent": "Los Angeles Chargers",
    "home_away": "",
    "opp_rank_Neg": 4,
    "team_rank_Pos": 4,
    "avg_fp2": 13.52,
    "opp_rank_allowed_fp2_Neu": 7,
    "opp_avg_allowed_fp2": 7.79,
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
    "headlineNews": "Leads team in receiving",
    "report": "Kelce had eight receptions (nine targets) for 74 yards and a touchdown in Sunday's 26-3 win over Chicago.",
    "analysis": "Kelce had another strong night from a yards and receptions standpoint, but he was also able to find the end zone for the first time since Week 11. It was the star tight end's fifth touchdown reception of the year, and that may be the only criticism that can be made of yet another 1,000-plus yard season (his fourth in a row). The Chiefs can still play their way into a first-round bye with some help from the Patriots in Week 17, so the team figures to deploy Kelce and the rest of its starters until either a win or loss appears to be imminent against the Chargers on Sunday.",
    "timestamp": "2019-12-22 09:05 PM",
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
    "week17": ""
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
                         data: [10.3, 20.2, 12.4, 12.92, 9.0, 7.8, 7.4, 14.3, 9.7, 17.0, 18.7, 'BYE', 11.5, 14.5, 19.7, 17.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.6, 13.9, 10.7, 12.0, 15.7, 14.5, 12.8, 8.1, 7.0, 10.3, 11.8, 'BYE', 12.4, 10.2, 12.2, 12.6, 13.9]
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
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2576925.png",
    "name": "Darren Waller",
    "depthchart": "Starter: TE-1",
    "team": "Oakland Raiders",
    "projected": 12.9,
    "opponent": "Denver Broncos",
    "home_away": "at ",
    "opp_rank_Neg": 6,
    "team_rank_Neu": 13,
    "avg_fp2": 10.83,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 8.89,
    "fanduelSalary": "$6200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A5ACAF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/oak.png",
    "headlineNews": "Breaks free in Denver",
    "report": "Waller caught six of 10 targets for 107 yards during Sunday's 16-15 loss to Denver.",
    "analysis": "Waller did most of his damage late in the first quarter when, facing third and long, he snagged the tight-end screen and hustled upfield for a 75-yard gain, setting up a Raiders field goal. The fifth-year tight end enjoyed a breakout in Oakland this season, finishing the season with 90 catches for 1,145 yards -- amazing considering he had just 18 career catches for 178 yards entering 2019. He should be a cornerstone in Las Vegas, though fans will surely hope that he improves on 2019's meager three touchdowns.",
    "timestamp": "2019-12-29 05:20 PM",
    "week01": 10.5,
    "week02": 9.3,
    "week03": 20.6,
    "week04": 8.8,
    "week05": 5.9,
    "week06": "BYE",
    "week07": 28.1,
    "week08": 8.1,
    "week09": 6.2,
    "week10": 5.5,
    "week11": 10.1,
    "week12": 5.6,
    "week13": 13.5,
    "week14": 8.3,
    "week15": 16.2,
    "week16": 5.7,
    "week17": ""
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
                         data: [10.5, 9.3, 20.6, 8.8, 5.9, 'BYE', 28.1, 8.1, 6.2, 5.5, 10.1, 5.6, 13.5, 8.3, 16.2, 5.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.0, 7.6, 6.4, 14.1, 10.7, 'BYE', 9.6, 10.2, 14.9, 9.4, 22.3, 13.5, 10.3, 11.9, 8.2, 10.3, 12.9]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.5, 10.4, 8.6, 9.7, 8.4, 'BYE', 9.6, 11.1, 3.9, 0.6, 5.4, 5.0, 4.7, 4.1, 6.4, 0.4, 5.9]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [5.7, 11.1, 9.0, 11.1, 11.0, 'BYE', 10.9, 30.5, 19.9, 32.2, 13.4, 11.1, 15.7, 14.4, 16.8, 20.8, 17.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13232.png",
    "name": "Jimmy Graham",
    "depthchart": "Starter: TE-1",
    "team": "Green Bay Packers",
    "projected": 11.2,
    "opponent": "Detroit Lions",
    "home_away": "at ",
    "opp_rank_Pos": 32,
    "team_rank_Neu": 19,
    "avg_fp2": 4.99,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 8.92,
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
    "headlineNews": "One catch in win",
    "report": "Graham (wrist/groin) brought in his only target for 16 yards in the Packers' 23-10 win over the Vikings on Monday night.",
    "analysis": "Graham saw just a single target for the fourth time this season, which naturally kept his night decidedly modest from a fantasy perspective. The veteran tight end is on the downside of an impressive career, and he's been hampered by multiple injuries throughout the campaign. Graham will be little more than a speculative option for season-long championship games and DFS contests in Week 17's matchup versus the Lions.",
    "timestamp": "2019-12-23 08:52 PM",
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
    "week17": ""
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
                         data: [10.5, 0.0, 0.0, 15.1, 5.6, 2.7, 14.5, 3.5, 3.7, 6.9, 'BYE', 1.2, 2.1, 6.4, 0.5, 2.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.7, 7.9, 6.6, 5.8, 15.2, 10.7, 7.8, 9.4, 7.8, 7.0, 'BYE', 5.9, 6.3, 10.2, 10.7, 4.5, 11.2]
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
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3046439.png",
    "name": "Hunter Henry",
    "depthchart": "Starter: TE-1",
    "team": "Los Angeles Chargers",
    "projected": 10.8,
    "opponent": "Kansas City Chiefs",
    "home_away": "at ",
    "opp_rank_Neu": 8,
    "team_rank_Pos": 6,
    "avg_fp2": 10.0,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 9.83,
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
    "headlineNews": "Finds end zone in finale",
    "report": "Henry caught five of his six targets for 42 yards and a touchdown in Sunday's 31-21 loss to the Chiefs.",
    "analysis": "He finished the season with 55 receptions, 652 receiving yards and five touchdowns across 12 games. Henry easily set career highs in just about every major statistical category save for touchdown receptions, but a five-week stretch to end the season in which he posted just 16 catches, 165 receiving yards and two touchdowns puts a damper on what should have been a breakout year for the fourth-year tight end. While the Chargers have a number of important free agents to make decisions on, it seems entirely likely the team will either franchise tag or re-sign Henry to a lucrative extension in the offseason, as the 25-year-old is set to become an unrestricted free agent in March. A history of injuries ultimately could keep his price tag in check, as the 2016 second-round pick has never played a full 16-game season in the NFL, most recently suffering a knee fracture which kept him out four games in 2019.",
    "timestamp": "2019-12-30 07:07 AM",
    "week01": 8.0,
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": 26.0,
    "week07": 12.7,
    "week08": 6.7,
    "week09": 11.9,
    "week10": 11.0,
    "week11": 11.9,
    "week12": "BYE",
    "week13": 2.0,
    "week14": 10.9,
    "week15": 1.9,
    "week16": 7.0,
    "week17": ""
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
                         data: [8.0, 'DNP', 'DNP', 'DNP', 'DNP', 26.0, 12.7, 6.7, 11.9, 11.0, 11.9, 'BYE', 2.0, 10.9, 1.9, 7.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.2, 'DNP', 'DNP', 'DNP', 'DNP', 10.5, 14.9, 14.6, 14.5, 18.2, 15.1, 'BYE', 14.2, 14.3, 8.6, 19.2, 10.8]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.6, 'DNP', 'DNP', 'DNP', 'DNP', 0.0, 0.1, 0.0, 7.4, 4.8, 10.6, 'BYE', 6.1, 5.4, 4.5, 0.9, 3.3]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 128, 198, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.9, 'DNP', 'DNP', 'DNP', 'DNP', 12.4, 27.2, 25.0, 14.8, 12.3, 15.1, 'BYE', 16.8, 16.8, 10.2, 8.0, 22.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3043275.png",
    "name": "Austin Hooper",
    "depthchart": "Starter: TE-1",
    "team": "Atlanta Falcons",
    "projected": 9.5,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "at ",
    "opp_rank_Pos": 29,
    "team_rank_Pos": 3,
    "avg_fp2": 12.18,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 10.87,
    "fanduelSalary": "$6000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/atl.png",
    "headlineNews": "Waiting on extension offer",
    "report": "Hooper, who come become a free agent in March, said Monday that the Falcons have yet to engage him in talks about an extension, D. Orlando Ledbetter of The Atlanta Journal-Constitution reports. \"I'm not going to speak on that too much,\" Hooper said, when asked about his contract situation. \"It's a business. I'm open to coming back here. I don't know...I haven't received an offer yet. I'm going to let my representation and the representation for the Falcons handle that.\"",
    "analysis": "Despite missing three games due to a sprained MCL in his knee, Hooper turned in the best season of his four-year career in 2019, posting 75 receptions for 787 yards and six touchdowns. Atlanta was able to clear up some cap space over the weekend by restructuring the 2020 contracts of Matt Ryan and Grady Jarrett, so look for the team to apply some of those savings toward a new deal for Hooper.",
    "timestamp": "2019-12-30 10:20 AM",
    "week01": 12.2,
    "week02": 5.4,
    "week03": 21.6,
    "week04": 17.5,
    "week05": 10.6,
    "week06": 21.7,
    "week07": 12.6,
    "week08": 15.5,
    "week09": "BYE",
    "week10": 9.7,
    "week11": "DNP",
    "week12": "DNP",
    "week13": "DNP",
    "week14": 4.2,
    "week15": 3.5,
    "week16": 11.7,
    "week17": ""
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
                         data: [12.2, 5.4, 21.6, 17.5, 10.6, 21.7, 12.6, 15.5, 'BYE', 9.7, 'DNP', 'DNP', 'DNP', 4.2, 3.5, 11.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.2, 10.0, 7.0, 9.6, 7.3, 4.5, 15.6, 6.8, 'BYE', 11.8, 'DNP', 'DNP', 'DNP', 10.7, 9.8, 10.8, 9.5]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 4.8, 3.4, 1.3, 6.2, 7.2, 4.1, 10.9, 'BYE', 7.1, 'DNP', 'DNP', 'DNP', 3.9, 2.7, 0.0, 5.7]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.9, 15.7, 15.5, 13.6, 19.1, 18.1, 14.0, 22.4, 'BYE', 19.5, 'DNP', 'DNP', 'DNP', 17.6, 12.4, 12.8, 15.2]
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
    "opponent": "San Francisco 49ers",
    "home_away": "",
    "opp_rank_Neg": 1,
    "team_rank_Neu": 11,
    "avg_fp2": 6.89,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 7.78,
    "fanduelSalary": "$8000",
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
    "week17": ""
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
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 3.5, 2.8, 17.7, 16.2, 'BYE', 3.2, 7.4, 5.4, 3.8, 8.9]
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
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15788.png",
    "name": "Tyler Eifert",
    "depthchart": "Starter: TE-1",
    "team": "Cincinnati Bengals",
    "projected": 9.3,
    "opponent": "Cleveland Browns",
    "home_away": "",
    "opp_rank_Neu": 9,
    "team_rank_Neu": 16,
    "avg_fp2": 5.38,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 10.87,
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
    "headlineNews": "Miracle catch in OT loss",
    "report": "Eifert brought in four of eight targets for 57 yards and a game-tying touchdown in the Bengals' 38-35 overtime loss to the Dolphins on Sunday. He also caught a two-point conversion pass.",
    "analysis": "Long known for his nose for the end zone, Eifert came down with one of the bigger touchdown receptions of his career when he hauled in a desperation Andy Dalton heave into the end zone  as time expired in regulation to bring Cincinnati within two points. Prior to that, Eifert had secured an important two-point conversion catch following a Tyler Boyd three-yard touchdown grab, bringing the Bengals to within one possession. Another improbable feat Eifert has managed this season has been good health, as he's now tied a career high with 15 games played. Eifert will look to put together a positive finish to a strong season in Week 17 against the Browns.",
    "timestamp": "2019-12-22 03:39 PM",
    "week01": 5.2,
    "week02": 8.4,
    "week03": 2.3,
    "week04": 3.7,
    "week05": 2.4,
    "week06": 2.3,
    "week07": 2.0,
    "week08": 10.4,
    "week09": "BYE",
    "week10": 9.0,
    "week11": 3.6,
    "week12": 1.2,
    "week13": 1.7,
    "week14": 6.9,
    "week15": 5.9,
    "week16": 15.7,
    "week17": ""
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
                         data: [5.2, 8.4, 2.3, 3.7, 2.4, 2.3, 2.0, 10.4, 'BYE', 9.0, 3.6, 1.2, 1.7, 6.9, 5.9, 15.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.0, 8.2, 7.0, 12.2, 10.4, 7.1, 10.2, 9.2, 'BYE', 7.2, 6.9, 9.8, 5.5, 8.6, 9.5, 8.3, 9.3]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 9.2, 2.8, 0.9, 0.5, 0.0, 0.5, 1.4, 'BYE', 0.0, 0.0, 4.8, 1.2, 2.1, 3.2, 1.2, 3.3]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [15.2, 22.1, 12.4, 14.3, 13.1, 6.8, 13.3, 3.9, 'BYE', 7.2, 7.5, 12.5, 8.8, 8.6, 9.6, 11.2, 18.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2991767.png",
    "name": "Blake Jarwin",
    "depthchart": "Backup: TE-2",
    "team": "Dallas Cowboys",
    "projected": 9.3,
    "opponent": "Washington Redskins",
    "home_away": "",
    "opp_rank_Neu": 14,
    "team_rank_Pos": 2,
    "avg_fp2": 4.67,
    "opp_rank_allowed_fp2_Pos": 30,
    "opp_avg_allowed_fp2": 11.75,
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
    "headlineNews": "Secures lone target",
    "report": "Jarwin caught his only target for 14 yards during Sunday's loss to Philadelphia.",
    "analysis": "Jarwin played only 19 offensive snaps -- his second-lowest total of the season -- as the Cowboys struggled to score all game. The 25-year-old enters the final week of the regular season with 31 catches for 365 yards and three touchdowns.",
    "timestamp": "2019-12-24 08:11 PM",
    "week01": 11.4,
    "week02": 2.7,
    "week03": 0.8,
    "week04": 6.4,
    "week05": 0.0,
    "week06": 1.6,
    "week07": 6.6,
    "week08": "BYE",
    "week09": 10.7,
    "week10": 5.0,
    "week11": 4.8,
    "week12": 3.2,
    "week13": 1.9,
    "week14": 8.0,
    "week15": 5.0,
    "week16": 1.9,
    "week17": ""
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
                         data: [11.4, 2.7, 0.8, 6.4, 0.0, 1.6, 6.6, 'BYE', 10.7, 5.0, 4.8, 3.2, 1.9, 8.0, 5.0, 1.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.6, 5.5, 5.1, 4.3, 3.3, 4.1, 2.3, 'BYE', 2.9, -0.1, 4.2, 3.4, 2.9, 4.1, 4.1, 3.7, 9.3]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 'BYE', 0.0, 0.0, 0.1, 1.6, 0.0, 0.7, 0.9, 1.2, 0.0]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  "rgba(127, 150, 149, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [48.9, 33.3, 30.2, 11.5, 25.0, 5.1, 5.8, 'BYE', 8.4, 11.6, 11.6, 7.9, 9.5, 7.2, 10.9, 6.8, 18.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15773.png",
    "name": "Darren Fells",
    "depthchart": "Starter: TE-1",
    "team": "Houston Texans",
    "projected": 8.0,
    "opponent": "Tennessee Titans",
    "home_away": "",
    "opp_rank_Pos": 24,
    "team_rank_Neu": 10,
    "avg_fp2": 6.21,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 11.36,
    "fanduelSalary": "$4800",
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
    "week17": ""
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
                         data: [0.0, 1.4, 13.4, 1.7, 15.0, 9.9, 3.7, 20.8, 6.6, 'BYE', 2.3, 2.9, 9.3, 1.2, 0.7, 4.2]
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
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3043080.png",
    "name": "O.J. Howard",
    "depthchart": "Starter: TE-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 7.8,
    "opponent": "Atlanta Falcons",
    "home_away": "",
    "opp_rank_Neu": 23,
    "team_rank_Pos": 1,
    "avg_fp2": 5.15,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 10.17,
    "fanduelSalary": "$5500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#D50A0A",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(213, 10, 10, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#D50A0A",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Pedestrian season continues",
    "report": "Howard caught three of seven targets for 46 yards in Saturday's 23-20 loss to the Texans.",
    "analysis": "Howard failed to step up with the team missing its top two wide receivers -- Mike Evans and Chris Godwin -- to hamstring injuries. The 2017 first-rounder has been one of this season's biggest disappointments, topping 50 yards only three times all season while scoring just one touchdown. Howard will finish his season against the Falcons in Week 17.",
    "timestamp": "2019-12-21 02:12 PM",
    "week01": 3.2,
    "week02": 0.0,
    "week03": 8.1,
    "week04": 4.8,
    "week05": 1.5,
    "week06": 4.5,
    "week07": "BYE",
    "week08": "DNP",
    "week09": "DNP",
    "week10": 12.7,
    "week11": 0.0,
    "week12": 1.5,
    "week13": 8.6,
    "week14": 9.3,
    "week15": 6.6,
    "week16": 6.1,
    "week17": ""
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
                         data: [3.2, 0.0, 8.1, 4.8, 1.5, 4.5, 'BYE', 'DNP', 'DNP', 12.7, 0.0, 1.5, 8.6, 9.3, 6.6, 6.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.9, 5.6, 8.4, 4.2, 7.5, 12.7, 'BYE', 'DNP', 'DNP', 7.6, 6.3, 6.7, 9.0, 3.7, 1.6, 6.9, 7.8]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.3, 7.1, 0.0, 0.0, 0.0, 2.8, 'BYE', 'DNP', 'DNP', 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.9, 2.0]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(213, 10, 10, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.3, 14.8, 14.2, 29.0, 10.3, 9.4, 'BYE', 'DNP', 'DNP', 15.5, 13.8, 11.0, 10.6, 8.5, 13.1, 9.6, 8.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3121023.png",
    "name": "Dallas Goedert",
    "depthchart": "Starter: TE-1",
    "team": "Philadelphia Eagles",
    "projected": 7.6,
    "opponent": "New York Giants",
    "home_away": "at ",
    "opp_rank_Pos": 26,
    "team_rank_Neu": 12,
    "avg_fp2": 7.66,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 9.45,
    "fanduelSalary": "$6400",
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
    "week17": ""
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
                         data: [2.6, 'DNP', 0.0, 8.6, 1.6, 7.3, 12.9, 9.7, 5.9, 'BYE', 11.1, 4.7, 9.6, 5.6, 8.0, 19.6]
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
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14054.png",
    "name": "Kyle Rudolph",
    "depthchart": "Starter: TE-1",
    "team": "Minnesota Vikings",
    "projected": 7.6,
    "opponent": "Chicago Bears",
    "home_away": "",
    "opp_rank_Neu": 12,
    "team_rank_Neu": 20,
    "avg_fp2": 6.28,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 10.74,
    "fanduelSalary": "$4800",
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
    "week17": ""
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
                         data: [0.0, 2.4, 1.6, 1.7, 0.9, 5.1, 14.3, 3.2, 9.8, 17.4, 15.2, 'BYE', 13.0, 2.1, 6.3, 1.2]
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
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/5557.png",
    "name": "Ben Watson",
    "depthchart": "Backup: TE-2",
    "team": "New England Patriots",
    "projected": 7.5,
    "opponent": "Miami Dolphins",
    "home_away": "",
    "opp_rank_Pos": 28,
    "team_rank_Neu": 9,
    "avg_fp2": 2.7,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 9.99,
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
    "week17": ""
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
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 4.8, 'BYE', 6.7, 0.0, 2.8, 1.2, 0.0, 3.0]
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
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2566659.png",
    "name": "Seth DeValve",
    "depthchart": "Starter: TE-1",
    "team": "Jacksonville Jaguars",
    "projected": 7.1,
    "opponent": "Indianapolis Colts",
    "home_away": "",
    "opp_rank_Neu": 22,
    "team_rank_Neu": 16,
    "avg_fp2": 2.12,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 9.79,
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
    "headlineNews": "Delivers season-best yardage",
    "report": "DeValve caught three of six targets for 45 yards during Sunday's loss to the Falcons.",
    "analysis": "DeValve was much more involved in his second game back from the oblique injury, but the season-high six targets still didn't translate into significant yardage. The 26-year-old has 11 receptions for 136 yards in six starts for the Jaguars.",
    "timestamp": "2019-12-23 11:59 AM",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": 0.0,
    "week08": 1.6,
    "week09": 6.1,
    "week10": "BYE",
    "week11": "DNP",
    "week12": "DNP",
    "week13": "DNP",
    "week14": "DNP",
    "week15": 3.3,
    "week16": 6.0,
    "week17": ""
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
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 0.0, 1.6, 6.1, 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 3.3, 6.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 0.8, 1.4, 0.9, 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 1.1, 4.8, 7.1]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 0.0, 0.1, 1.0, 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 0.0, 1.6, 1.6]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 103, 120, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 5.5, 7.7, 6.4, 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 3.4, 3.7, 6.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2576179.png",
    "name": "Matt LaCosse",
    "depthchart": "Starter: TE-1",
    "team": "New England Patriots",
    "projected": 6.5,
    "opponent": "Miami Dolphins",
    "home_away": "",
    "opp_rank_Pos": 28,
    "team_rank_Neu": 9,
    "avg_fp2": 2.56,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 9.99,
    "fanduelSalary": "$4500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#C60C30",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png",
    "headlineNews": "Catches TD pass Saturday",
    "report": "LaCosse recorded 46 of a possible 73 snaps on offense in Saturday's 24-17 win over the Bills.",
    "analysis": "LaCosse saw just one target Saturday, but he made it count, turning it into an eight-yard TD. Meanwhile, fellow tight end Ben Watson was on the field for 31 snaps and caught all three of his targets for 15 yards. Neither New England tight end is a reliable fantasy option heading into Week 17.",
    "timestamp": "2019-12-22 10:58 AM",
    "week01": "DNP",
    "week02": 4.3,
    "week03": "DNP",
    "week04": 0.0,
    "week05": 2.7,
    "week06": 0.0,
    "week07": "DNP",
    "week08": "DNP",
    "week09": "DNP",
    "week10": "BYE",
    "week11": "DNP",
    "week12": 1.0,
    "week13": 2.9,
    "week14": 2.4,
    "week15": 3.7,
    "week16": 7.3,
    "week17": ""
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
                         data: ['DNP', 4.3, 'DNP', 0.0, 2.7, 0.0, 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 1.0, 2.9, 2.4, 3.7, 7.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 6.3, 'DNP', 0.7, 2.7, 1.6, 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 2.0, 3.5, 4.4, 2.1, 2.0, 6.5]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 0.0, 'DNP', 0.4, 0.0, 1.5, 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 0.0, 1.3, 0.0, 1.1, 0.0, 0.0]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(198, 12, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 9.3, 'DNP', 10.8, 8.2, 5.7, 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 9.0, 4.6, 10.7, 3.7, 1.3, 4.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116164.png",
    "name": "Mike Gesicki",
    "depthchart": "Starter: TE-1",
    "team": "Miami Dolphins",
    "projected": 6.1,
    "opponent": "New England Patriots",
    "home_away": "at ",
    "opp_rank_Neg": 2,
    "team_rank_Neu": 15,
    "avg_fp2": 6.61,
    "opp_rank_allowed_fp2_Neu": 9,
    "opp_avg_allowed_fp2": 8.57,
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
    "headlineNews": "Hauls in clutch TD in finale",
    "report": "Gesicki secured four of seven targets for 34 yards and one touchdown during Sunday's 27-24 win over the Patriots.",
    "analysis": "Gesicki was held in check for the majority of Sunday's upset win, but he showed up with just 24 seconds remaining in the fourth quarter by beating safety Patrick Chung to reel in a game-winning touchdown. After being held without a score in his rookie season, Gesicki caught 51 of 89 targets for 570 yards and five touchdowns across 16 games this year. The Dolphins will work to further develop the ultra-athletic Penn State product into a key part of their passing game in 2020.",
    "timestamp": "2019-12-30 08:51 AM",
    "week01": 4.1,
    "week02": 1.6,
    "week03": 2.4,
    "week04": 0.0,
    "week05": "BYE",
    "week06": 6.6,
    "week07": 6.1,
    "week08": 2.0,
    "week09": 12.5,
    "week10": 2.3,
    "week11": 3.8,
    "week12": 10.3,
    "week13": 16.4,
    "week14": 1.1,
    "week15": 6.7,
    "week16": 23.2,
    "week17": ""
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
                         data: [4.1, 1.6, 2.4, 0.0, 'BYE', 6.6, 6.1, 2.0, 12.5, 2.3, 3.8, 10.3, 16.4, 1.1, 6.7, 23.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.4, 3.0, 1.7, 7.2, 'BYE', 4.1, 0.4, 8.1, 1.1, 4.3, 3.6, 5.9, 3.5, 7.1, 2.8, 5.4, 6.1]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.0, 0.0, 'BYE', 0.0, 1.6, 0.5, 0.0, 0.0, 0.7, 1.1, 0.7, 7.8, 0.0, 0.0, 1.1]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 142, 151, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [3.6, 4.5, 3.2, 3.5, 'BYE', 7.2, 2.6, 3.5, 5.0, 6.1, 4.6, 3.6, 4.4, 21.3, 18.1, 11.3, 19.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2980073.png",
    "name": "Jeremy Sprinkle",
    "depthchart": "Starter: TE-1",
    "team": "Washington Redskins",
    "projected": 6.0,
    "opponent": "Dallas Cowboys",
    "home_away": "at ",
    "opp_rank_Neu": 11,
    "team_rank_Neg": 32,
    "avg_fp2": 2.65,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 11.02,
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
    "headlineNews": "Totals 14 yards",
    "report": "Sprinkle caught two of three targets for 14 yards during Sunday's 41-35 overtime loss to the Giants.",
    "analysis": "The 25-year-old once again worked as the team's No. 1 tight end Week 16, but it was Hale Hentges who had the touchdown reception Sunday. Sprinkle has 12 starts this season and 23 receptions for 223 yards and one touchdown.",
    "timestamp": "2019-12-23 10:25 AM",
    "week01": 1.3,
    "week02": 1.6,
    "week03": 2.9,
    "week04": 2.5,
    "week05": 2.7,
    "week06": 3.4,
    "week07": 2.3,
    "week08": 2.2,
    "week09": 2.1,
    "week10": "BYE",
    "week11": 8.6,
    "week12": 0.9,
    "week13": 4.6,
    "week14": 0.0,
    "week15": 2.3,
    "week16": 2.4,
    "week17": ""
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
                         data: [1.3, 1.6, 2.9, 2.5, 2.7, 3.4, 2.3, 2.2, 2.1, 'BYE', 8.6, 0.9, 4.6, 0.0, 2.3, 2.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [-0.4, 2.7, 2.0, 1.6, 3.6, 1.8, 2.7, 1.8, 0.9, 'BYE', 3.8, 3.4, 5.3, 9.1, 1.7, 2.3, 6.0]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 0.0, 0.0, 0.0, 1.7, 0.0, 0.0, 0.0, 'BYE', 0.9, 0.3, 0.0, 0.6, 0.0, 0.0, 0.0]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [6.3, 10.7, 7.2, 4.8, 10.6, 2.7, 9.8, 7.9, 11.5, 'BYE', 2.7, 6.4, 7.3, 6.2, 4.0, 3.5, 3.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3128452.png",
    "name": "Jordan Akins",
    "depthchart": "Backup: TE-2",
    "team": "Houston Texans",
    "projected": 5.8,
    "opponent": "Tennessee Titans",
    "home_away": "",
    "opp_rank_Pos": 24,
    "team_rank_Neu": 10,
    "avg_fp2": 4.26,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 11.36,
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
    "headlineNews": "Records five receptions",
    "report": "Akins hauled in five of seven targets for 54 yards in the team's Week 17 loss to the Titans.",
    "analysis": "Akins worked as the team's primary tight end and hauled in a season-best five receptions. With this performance, he closed the regular season with 36 receptions and 418 yards. Both represent significant improvements over his marks from his rookie season, and he could be in line to take another step forward as current top tight end Darren Fells is set to hit free agency. In the immediate future, Akins will look to help the team earn a first-round playoff win against Buffalo.",
    "timestamp": "2019-12-29 07:33 PM",
    "week01": 2.2,
    "week02": 3.5,
    "week03": 20.8,
    "week04": 3.6,
    "week05": 2.6,
    "week06": 5.4,
    "week07": 2.7,
    "week08": 2.1,
    "week09": 3.9,
    "week10": "BYE",
    "week11": 2.0,
    "week12": 4.1,
    "week13": 2.4,
    "week14": 6.9,
    "week15": 1.7,
    "week16": 0.0,
    "week17": ""
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
                         data: [2.2, 3.5, 20.8, 3.6, 2.6, 5.4, 2.7, 2.1, 3.9, 'BYE', 2.0, 4.1, 2.4, 6.9, 1.7, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.0, 3.1, 2.1, 2.1, 1.9, 3.8, 0.9, 3.4, 3.0, 'BYE', 4.5, 2.0, -0.9, 2.1, 4.5, 1.7, 5.8]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 0.0, 1.6, 0.0, 2.0, 0.0, 0.9, 0.1, 1.6, 'BYE', 1.5, 1.9, 3.6, 0.3, 2.4, 0.9, 0.9]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [4.8, 3.7, 3.2, 6.2, 4.1, 27.4, 6.4, 4.3, 3.5, 'BYE', 4.8, 3.0, 4.3, 4.0, 5.0, 4.6, 3.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3123076.png",
    "name": "David Njoku",
    "depthchart": "Starter: TE-1",
    "team": "Cleveland Browns",
    "projected": 5.7,
    "opponent": "Cincinnati Bengals",
    "home_away": "at ",
    "opp_rank_Neu": 21,
    "team_rank_Neu": 23,
    "avg_fp2": 4.2,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 9.58,
    "fanduelSalary": "$4500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FF3C00",
    "tmColorDark": "#311D00",
    "tmColorLite_rgba": "rgba(255, 60, 0, 0.2)",
    "tmColorDark_rgba": "rgba(49, 29, 0, 0.2)",
    "tmTextLite": "#FF3C00",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
    "headlineNews": "Back from doghouse",
    "report": "Njoku is listed as active Week 17 against Cincinnati.",
    "analysis": "Njoku is undoubtedly disappointed in how this season ended, as he rehabbed from a wrist injury for 11 weeks only to make a limited return Week 14 and end up a healthy scratch for the two games after that. He'll get a chance to end his season on a high note in the finale, though Njoku will be part of a position group that includes Demetrius Harris and Ricky Seals-Jones, the latter which overcame an illness to suit up this week.",
    "timestamp": "2019-12-29 08:39 AM",
    "week01": 11.7,
    "week02": 0.0,
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": "BYE",
    "week08": "DNP",
    "week09": "DNP",
    "week10": "DNP",
    "week11": "DNP",
    "week12": "DNP",
    "week13": "DNP",
    "week14": 0.9,
    "week15": "DNP",
    "week16": "DNP",
    "week17": ""
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
                         data: [11.7, 0.0, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 0.9, 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.1, 3.9, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 6.1, 'DNP', 'DNP', 5.7]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.6, 0.0, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 3.7, 'DNP', 'DNP', 0.0]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.6, 11.4, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 17.4, 'DNP', 'DNP', 7.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4044452.png",
    "name": "Kaden Smith",
    "depthchart": "Starter: TE-1",
    "team": "New York Giants",
    "projected": 5.6,
    "opponent": "Philadelphia Eagles",
    "home_away": "",
    "opp_rank_Neu": 19,
    "team_rank_Neu": 18,
    "avg_fp2": 7.75,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 6.99,
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
    "headlineNews": "Catches two TDs in OT win",
    "report": "Smith caught six of eight targets for 35 yards and two touchdowns during Sunday's 41-35 win over the Redskins.",
    "analysis": "Smith averaged just 5.8 yards per catch, but he did significant damage with his touches. The rookie scored a nine-yard touchdown in the third quarter before winning the game with a three-yard score in overtime. Smith has come on in the latter stages of the season and is now averaging 38 receiving yards per game with two touchdowns over the last four contests. He'll look to finish strong next Sunday against the Eagles.",
    "timestamp": "2019-12-22 03:39 PM",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": "DNP",
    "week08": "DNP",
    "week09": "DNP",
    "week10": 0.6,
    "week11": "BYE",
    "week12": 10.2,
    "week13": 10.0,
    "week14": 1.9,
    "week15": 5.3,
    "week16": "DNP",
    "week17": ""
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
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 0.6, 'BYE', 10.2, 10.0, 1.9, 5.3, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', -0.3, 'BYE', 4.4, 14.6, 10.3, 5.0, 'DNP', 5.6]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 2.4, 'BYE', 3.2, 5.5, 7.1, 6.4, 'DNP', 6.0]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 2.6, 'BYE', 3.7, 6.3, 7.7, 7.1, 'DNP', 10.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4036131.png",
    "name": "Noah Fant",
    "depthchart": "Starter: TE-1",
    "team": "Denver Broncos",
    "projected": 5.1,
    "opponent": "Oakland Raiders",
    "home_away": "",
    "opp_rank_Pos": 25,
    "team_rank_Neg": 29,
    "avg_fp2": 6.01,
    "opp_rank_allowed_fp2_Pos": 24,
    "opp_avg_allowed_fp2": 10.64,
    "fanduelSalary": "$5600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e17757",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(225, 119, 87, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#e17757",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/den.png",
    "headlineNews": "Held to 10 yards",
    "report": "Fant caught both of his targets for a total of 10 yards during Sunday's 27-17 win over Detriot.",
    "analysis": "Both of Fant's catches came within the first 20 minutes of the game. The dinged-up rookie played a relatively low percentage of snaps, 41 of 71, and was unable to get downfield with Detroit playing a lot of deep zone coverages. Fant has been reliant on the deep ball this season, as 52.8 percent of his 373 yards over the past seven games came on just four plays. If he's able to round back into shape in time for the season finale, he couldn't ask for a better matchup. The Raiders have surrendered more pass plays of at least 20 yards (68) and 40 yards (16) than any other team this season.",
    "timestamp": "2019-12-23 07:34 PM",
    "week01": 3.4,
    "week02": 5.3,
    "week03": 3.2,
    "week04": 10.1,
    "week05": 1.1,
    "week06": 2.6,
    "week07": 1.2,
    "week08": 5.1,
    "week09": 19.0,
    "week10": "BYE",
    "week11": 7.3,
    "week12": 2.9,
    "week13": 1.0,
    "week14": 19.3,
    "week15": 6.6,
    "week16": 2.0,
    "week17": ""
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
                         data: [3.4, 5.3, 3.2, 10.1, 1.1, 2.6, 1.2, 5.1, 19.0, 'BYE', 7.3, 2.9, 1.0, 19.3, 6.6, 2.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.5, 5.6, 0.5, 4.1, 2.9, 4.6, 8.9, 4.6, 3.5, 'BYE', 0.5, 3.0, 8.2, 2.6, 6.8, 3.9, 5.1]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.1, 5.3, 5.4, 4.7, 5.7, 5.2, 1.8, 0.0, 1.3, 'BYE', 0.0, 4.3, 0.0, 0.0, 0.0, 1.0, 0.0]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(225, 119, 87, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [5.5, 6.8, 6.5, 5.1, 6.2, 5.9, 10.6, 11.4, 8.4, 'BYE', 24.6, 9.3, 19.5, 12.0, 21.2, 24.4, 15.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/10475.png",
    "name": "Greg Olsen",
    "depthchart": "Starter: TE-1",
    "team": "Carolina Panthers",
    "projected": 5.1,
    "opponent": "New Orleans Saints",
    "home_away": "",
    "opp_rank_Neu": 17,
    "team_rank_Neu": 21,
    "avg_fp2": 7.35,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 9.29,
    "fanduelSalary": "$5200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0085CA",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 133, 202, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#0085CA",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/car.png",
    "headlineNews": "Expected to retire or join new team",
    "report": "Olsen doesn't anticipate playing another season for the Panthers, Joe Person of The Athletic reports. \"I just think sometimes the writing's on the wall,\" Olsen said. \"There hasn't been anything officially.\"",
    "analysis": "Olsen has one season remaining on his contract, but the Panthers will save $8.1 million against the 2020 salary cap if he's cut or traded. There's also some chance Olsen opts for retirement, as he'll turn 35 in March after battling foot injuries and a concussion over the past few years. For what it's worth, Panthers teammate Chris Hogan said his conversations with Olsen suggest the tight end wants to continue his NFL career. Regardless of how it happens, a departure from Carolina could free up the starting TE job for 23-year-old Ian Thomas, who has shown occasional flashes of pass-catching production but also has six drops and an average of just 9.0 yards per reception on 79 targets through two seasons.",
    "timestamp": "2019-12-30 06:57 AM",
    "week01": 5.6,
    "week02": 14.0,
    "week03": 22.5,
    "week04": 1.5,
    "week05": 0.0,
    "week06": 7.2,
    "week07": "BYE",
    "week08": 2.3,
    "week09": 5.5,
    "week10": 13.8,
    "week11": 8.2,
    "week12": 6.9,
    "week13": 3.7,
    "week14": "DNP",
    "week15": "DNP",
    "week16": 4.3,
    "week17": ""
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
                         data: [5.6, 14.0, 22.5, 1.5, 0.0, 7.2, 'BYE', 2.3, 5.5, 13.8, 8.2, 6.9, 3.7, 'DNP', 'DNP', 4.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.3, 12.3, 16.4, 10.0, 8.2, 16.2, 'BYE', 7.2, 7.2, 10.4, 9.6, 8.1, 7.1, 'DNP', 'DNP', 8.0, 5.1]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.5, 6.2, 7.6, 3.3, 2.9, 2.9, 'BYE', 1.2, 1.3, 5.5, 6.4, 3.6, 4.4, 'DNP', 'DNP', 5.8, 4.3]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 133, 202, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.5, 19.2, 16.0, 18.9, 9.7, 12.1, 'BYE', 11.6, 8.7, 11.8, 12.0, 9.2, 8.3, 'DNP', 'DNP', 10.1, 10.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/12537.png",
    "name": "Jared Cook",
    "depthchart": "Starter: TE-1",
    "team": "New Orleans Saints",
    "projected": 4.8,
    "opponent": "Carolina Panthers",
    "home_away": "at ",
    "opp_rank_Neu": 13,
    "team_rank_Neu": 7,
    "avg_fp2": 10.35,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 7.19,
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
    "week17": ""
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
                         data: [4.7, 3.5, 1.2, 3.6, 12.1, 11.2, 'DNP', 'DNP', 'BYE', 10.4, 10.3, 18.9, 10.0, 19.4, 7.4, 21.9]
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
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/17453.png",
    "name": "Cameron Brate",
    "depthchart": "Backup: TE-2",
    "team": "Tampa Bay Buccaneers",
    "projected": 4.7,
    "opponent": "Atlanta Falcons",
    "home_away": "",
    "opp_rank_Neu": 23,
    "team_rank_Pos": 1,
    "avg_fp2": 4.43,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 10.17,
    "fanduelSalary": "$4900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#D50A0A",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(213, 10, 10, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#D50A0A",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Pair of catches in loss",
    "report": "Brate secured two of five targets for 17 yards in the Buccaneers' 23-20 loss to the Texans on Saturday.",
    "analysis": "The expectation was that Brate and fellow tight end O.J. Howard would see an uptick in workload Saturday with both Mike Evans and Chris Godwin sidelined due to hamstring injuries. However, that didn't equate to any uptick in production for Brate, who actually generated his lowest production of the last three games. It's likely Godwin misses the Week 17 tilt against the Falcons, while Evans is already on injured reserve; therefore, the possibility for extra targets could be there for Brate once more in the regular-season finale.",
    "timestamp": "2019-12-22 09:21 PM",
    "week01": 1.8,
    "week02": 2.0,
    "week03": 1.7,
    "week04": 11.1,
    "week05": 1.6,
    "week06": 11.7,
    "week07": "BYE",
    "week08": 4.7,
    "week09": 0.0,
    "week10": 0.0,
    "week11": 12.3,
    "week12": 0.0,
    "week13": 1.0,
    "week14": 11.0,
    "week15": 4.8,
    "week16": 2.7,
    "week17": ""
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
                         data: [1.8, 2.0, 1.7, 11.1, 1.6, 11.7, 'BYE', 4.7, 0.0, 0.0, 12.3, 0.0, 1.0, 11.0, 4.8, 2.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.1, 1.2, 4.8, 1.4, 3.4, 6.3, 'BYE', 6.7, 9.0, 4.7, 3.0, 2.5, 5.5, 1.6, 1.6, 3.3, 4.7]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.7, 1.1, 2.2, 1.2, 1.4, 2.1, 'BYE', 3.1, 0.4, 0.0, 3.0, 0.0, 1.0, 0.2, 0.2, 0.8, 0.7]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(213, 10, 10, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [13.9, 10.9, 9.0, 13.0, 9.9, 13.7, 'BYE', 14.1, 10.0, 7.6, 8.7, 8.9, 8.0, 7.9, 9.3, 7.6, 8.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3054212.png",
    "name": "Jonnu Smith",
    "depthchart": "Starter: TE-1",
    "team": "Tennessee Titans",
    "projected": 4.7,
    "opponent": "Houston Texans",
    "home_away": "at ",
    "opp_rank_Pos": 30,
    "team_rank_Neu": 22,
    "avg_fp2": 5.77,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 10.61,
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
    "headlineNews": "Finds end zone on big play",
    "report": "Smith hauled in three of his four targets for 63 yards and a touchdown in the team's Week 16 loss to the Saints.",
    "analysis": "Smith accounted for nearly two-thirds of his production when he recorded a 41-yard touchdown on the team's opening possession.  On the scoring play, he caught a pass from Ryan Tannehill while flashing across the middle of the field about 12 yards from the line of scrimmage before turning upfield to find the end zone. Smith opened the Titans' following drive with a 15-yard reception, seemingly putting him in line for a massive performance. Though that didn't come to fruition, Smith has surpassed 60 yards in consecutive games and appears to be developing rapport with Tannehill. Smith will look to connect for another touchdown in the team's regular-season finale against the Texans in Week 17, a game the Titans have to win for a playoff spot.",
    "timestamp": "2019-12-22 02:31 PM",
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
    "week17": ""
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
                         data: [2.2, 0.0, 3.0, 1.0, 6.2, 1.3, 7.9, 16.8, 3.3, 5.0, 'BYE', 0.4, 1.0, 10.4, 14.2, 13.8]
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
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16504.png",
    "name": "Jack Doyle",
    "depthchart": "Starter: TE-1",
    "team": "Indianapolis Colts",
    "projected": 4.5,
    "opponent": "Jacksonville Jaguars",
    "home_away": "at ",
    "opp_rank_Neu": 20,
    "team_rank_Neg": 28,
    "avg_fp2": 5.95,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 10.18,
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
    "headlineNews": "Held to 17 yards in win",
    "report": "Doyle caught two of four passes for 17 yards during Sunday's 38-6 win over the Panthers.",
    "analysis": "Doyle's 17 yards were a season low. The veteran tight end has had a ho-hum season, managing just four games with at least 30 receiving yards. The Colts' pass offense has been on the decline over the past month and a half, having been held under 200 yards in four of the last six games. The season ends next Sunday against Jacksonville's middle-of-the-pack pass defense, but the Colts and Doyle have done little to inspire confidence that they'll be able to do much to capitalize on the matchup.",
    "timestamp": "2019-12-22 02:21 PM",
    "week01": 2.5,
    "week02": 3.1,
    "week03": 6.6,
    "week04": 10.2,
    "week05": 3.4,
    "week06": "BYE",
    "week07": 3.6,
    "week08": 8.1,
    "week09": 9.7,
    "week10": 11.9,
    "week11": 0.0,
    "week12": 4.3,
    "week13": 16.3,
    "week14": 3.7,
    "week15": 3.1,
    "week16": 2.7,
    "week17": ""
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
                         data: [2.5, 3.1, 6.6, 10.2, 3.4, 'BYE', 3.6, 8.1, 9.7, 11.9, 0.0, 4.3, 16.3, 3.7, 3.1, 2.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.6, 7.1, 5.2, 2.4, 5.8, 'BYE', 5.0, 4.9, 5.3, 10.0, 4.4, 3.1, 6.1, 8.8, 6.9, 8.0, 4.5]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 3.7, 0.0, 1.4, 5.1, 'BYE', 3.0, 2.6, 1.2, 3.7, 1.2, 4.1, 3.3, 4.7, 3.6, 3.0, 1.3]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.4, 13.0, 16.2, 9.8, 13.0, 'BYE', 13.4, 9.8, 7.4, 16.1, 10.9, 8.2, 9.4, 11.9, 10.3, 12.2, 10.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2573401.png",
    "name": "Tyler Higbee",
    "depthchart": "Starter: TE-1",
    "team": "Los Angeles Rams",
    "projected": 4.5,
    "opponent": "Arizona Cardinals",
    "home_away": "",
    "opp_rank_Pos": 31,
    "team_rank_Pos": 5,
    "avg_fp2": 7.68,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 15.84,
    "fanduelSalary": "$6900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Late-season dominance continues",
    "report": "Higbee caught eight of 12 targets for 84 yards and a touchdown during Sunday's 31-24 win over Arizona.",
    "analysis": "With Sunday's big performance, Higbee recorded an impressive 43 receptions for 522 yards and two touchdowns over the final five weeks of the season. It's impossible to imagine his role diminishing significantly to start the 2020 campaign, and the breakout stretch definitely legitimizes Los Angeles signing him to a four-year, $31.03 million contract in September. However, fellow tight end Gerald Everett still looms and has flashed big-play potential himself, so there's potential he could cut into some of Higbee's target share.",
    "timestamp": "2019-12-30 11:15 AM",
    "week01": 10.0,
    "week02": 3.1,
    "week03": "DNP",
    "week04": 6.1,
    "week05": 6.2,
    "week06": 4.0,
    "week07": 1.3,
    "week08": 1.3,
    "week09": "BYE",
    "week10": 3.7,
    "week11": 0.0,
    "week12": 4.5,
    "week13": 20.2,
    "week14": 15.1,
    "week15": 17.1,
    "week16": 14.9,
    "week17": ""
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
                         data: [10.0, 3.1, 'DNP', 6.1, 6.2, 4.0, 1.3, 1.3, 'BYE', 3.7, 0.0, 4.5, 20.2, 15.1, 17.1, 14.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.2, 2.8, 'DNP', 5.6, 3.1, -0.3, 2.2, 2.3, 'BYE', 1.6, 1.3, 0.9, 2.2, 9.8, 7.2, 1.6, 4.5]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.0, 2.5, 'DNP', 0.1, 0.3, 1.3, 1.4, 4.6, 'BYE', 0.0, 1.4, 0.2, 0.7, 0.0, 0.1, 0.0, 3.1]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [7.4, 10.0, 'DNP', 7.9, 4.0, 8.5, 9.8, 9.2, 'BYE', 7.1, 3.9, 2.1, 7.2, 5.8, 12.1, 19.1, 16.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2970262.png",
    "name": "J.P. Holtz",
    "depthchart": "Starter: TE-1",
    "team": "Chicago Bears",
    "projected": 4.0,
    "opponent": "Minnesota Vikings",
    "home_away": "at ",
    "opp_rank_Neu": 16,
    "team_rank_Neg": 26,
    "avg_fp2": 4.0,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 8.03,
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
    "headlineNews": "Fails to see target",
    "report": "Holtz wasn't targeted in the Bears' 21-19 win over the Vikings in Week 17, and he ended the campaign with seven catches for 91 yards in 13 games.",
    "analysis": "When the Bears suffered injuries to their top-three tight ends, Holtz was thrust into a prominent role down the stretch, but he averaged fewer than two receptions over six games. He'll be an exclusive rights free agent this off-season, and it's likely he'll look to compete for a backup role wherever he signs.",
    "timestamp": "2019-12-29 03:00 PM",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "BYE",
    "week07": "DNP",
    "week08": "DNP",
    "week09": "DNP",
    "week10": "DNP",
    "week11": "DNP",
    "week12": "DNP",
    "week13": "DNP",
    "week14": "DNP",
    "week15": "DNP",
    "week16": "DNP",
    "week17": ""
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
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 4.0]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 4.4]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  "rgba(195, 104, 53, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 4.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3126153.png",
    "name": "Maxx Williams",
    "depthchart": "Starter: TE-1",
    "team": "Arizona Cardinals",
    "projected": 3.9,
    "opponent": "Los Angeles Rams",
    "home_away": "at ",
    "opp_rank_Neu": 10,
    "team_rank_Neg": 24,
    "avg_fp2": 2.06,
    "opp_rank_allowed_fp2_Neu": 15,
    "opp_avg_allowed_fp2": 9.52,
    "fanduelSalary": "$4400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#97233F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(151, 35, 63, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#97233F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
    "headlineNews": "Hauls in two passes Sunday",
    "report": "Williams caught both of his targets for 36 yards during Sunday's 27-13 win at Seattle.",
    "analysis": "Aside from Kenyan Drake's 80-yard dash to the end zone in the first quarter, the Cardinals' longest play of Week 16 was Kyler Murray's connection with Williams for 28 yards. Otherwise, William's key contribution to the game was his third-quarter tackle of Seahawks safety Marquise Blair, who was attempting to house a blocked field goal but instead was stopped by the veteran tight end after a 46-yard return. Due to the early departure of Charles Clay with a knee injury, Williams enjoyed a 65 percent share of the offensive snaps Sunday, a workload he could maintain into Week 17.",
    "timestamp": "2019-12-23 01:50 PM",
    "week01": 2.0,
    "week02": 2.6,
    "week03": 0.0,
    "week04": 2.6,
    "week05": 1.2,
    "week06": 10.9,
    "week07": 1.0,
    "week08": 1.4,
    "week09": 1.7,
    "week10": 2.0,
    "week11": 0.0,
    "week12": "BYE",
    "week13": 0.0,
    "week14": 0.0,
    "week15": 0.9,
    "week16": "DNP",
    "week17": ""
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
                         data: [2.0, 2.6, 0.0, 2.6, 1.2, 10.9, 1.0, 1.4, 1.7, 2.0, 0.0, 'BYE', 0.0, 0.0, 0.9, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [-0.4, 4.0, 6.4, 1.5, 2.0, 3.1, 3.1, 3.2, 1.4, 7.5, -1.6, 'BYE', 0.7, 2.2, 1.0, 'DNP', 3.9]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.1, 3.7, 0.0, 0.0, 0.0, 1.9, 0.0, 0.9, 0.7, 2.6, 0.7, 'BYE', 1.0, 0.0, 0.0, 'DNP', 0.0]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [4.5, 6.8, 4.6, 5.8, 6.9, 9.7, 12.1, 5.7, 5.8, 10.7, 5.1, 'BYE', 3.8, 3.1, 3.5, 'DNP', 4.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2576804.png",
    "name": "Nick O'Leary",
    "depthchart": "Backup: TE-2",
    "team": "Jacksonville Jaguars",
    "projected": 3.8,
    "opponent": "Indianapolis Colts",
    "home_away": "",
    "opp_rank_Neu": 22,
    "team_rank_Neu": 16,
    "avg_fp2": 2.13,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 9.79,
    "fanduelSalary": "$4500",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Shoulder",
    "tmColorLite": "#006778",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 103, 120, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#006778",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/jax.png",
    "headlineNews": "Not playing Week 17",
    "report": "O'Leary (shoulder) is officially inactive for Sunday's game versus the Colts.",
    "analysis": "The 27-year-old was considered questionable due to the shoulder injury but won't suit up for the season finale. Ben Koyack lines up to serve as the Jaguars' No. 2 tight end, while O'Leary finishes the 2019 campaign with 13 receptions for 109 yards and one touchdown in 12 games between the Dolphins and Jaguars.",
    "timestamp": "2019-12-29 12:14 PM",
    "week01": 0.0,
    "week02": 1.1,
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": 0.0,
    "week08": "DNP",
    "week09": "DNP",
    "week10": "BYE",
    "week11": "DNP",
    "week12": 5.6,
    "week13": 1.1,
    "week14": 11.0,
    "week15": "DNP",
    "week16": 0.0,
    "week17": ""
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
                         data: [0.0, 1.1, 'DNP', 'DNP', 'DNP', 'DNP', 0.0, 'DNP', 'DNP', 'BYE', 'DNP', 5.6, 1.1, 11.0, 'DNP', 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.2, 0.1, 'DNP', 'DNP', 'DNP', 'DNP', 0.3, 'DNP', 'DNP', 'BYE', 'DNP', 2.9, 4.7, 3.1, 'DNP', 0.7, 3.8]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [0.9, 0.2, 'DNP', 'DNP', 'DNP', 'DNP', 0.0, 'DNP', 'DNP', 'BYE', 'DNP', 0.0, 1.3, 0.0, 'DNP', 0.0, 0.0]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 103, 120, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.5, 12.1, 'DNP', 'DNP', 'DNP', 'DNP', 9.6, 'DNP', 'DNP', 'BYE', 'DNP', 1.8, 6.9, 5.4, 'DNP', 4.8, 5.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16813.png",
    "name": "Logan Thomas",
    "depthchart": "Starter: TE-1",
    "team": "Detroit Lions",
    "projected": 3.8,
    "opponent": "Green Bay Packers",
    "home_away": "",
    "opp_rank_Neu": 18,
    "team_rank_Neu": 8,
    "avg_fp2": 1.95,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 10.09,
    "fanduelSalary": "$4500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0076B6",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(0, 118, 182, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#0076B6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/det.png",
    "headlineNews": "Fifth multi-catch game of season",
    "report": "Thomas caught two of three targets for 17 yards during Sunday's 27-17 loss to Denver.",
    "analysis": "Thomas has seen a handful of targets each of the past few games with David Blough at quarterback, but the thrower's limitations have significantly capped the upside of all players in this offense. While Thomas wasn't a huge fantasy threat anyway, there's even less of a reason to trust a Lions tight end in fantasy without Matthew Stafford (back) steering the ship.",
    "timestamp": "2019-12-23 07:44 PM",
    "week01": "DNP",
    "week02": 1.2,
    "week03": "DNP",
    "week04": "DNP",
    "week05": "BYE",
    "week06": "DNP",
    "week07": "DNP",
    "week08": "DNP",
    "week09": "DNP",
    "week10": "DNP",
    "week11": "DNP",
    "week12": 9.4,
    "week13": "DNP",
    "week14": 3.1,
    "week15": 0.0,
    "week16": 2.7,
    "week17": ""
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
                         data: ['DNP', 1.2, 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 9.4, 'DNP', 3.1, 0.0, 2.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 0.6, 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 2.5, 'DNP', 2.4, -0.4, 8.5, 3.8]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: ['DNP', 0.0, 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 0.4, 'DNP', 0.0, 0.0, 0.0, 0.0]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 118, 182, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: ['DNP', 8.0, 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 3.4, 'DNP', 8.2, 7.7, 4.5, 3.7]
                    }
                    
                    ]
               }
            }];



$scope.positionDST = [{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/BAL.png",
    "name": "Baltimore Ravens",
    "depthchart": "",
    "team": "Baltimore Ravens",
    "projected": 10.4,
    "opponent": "Pittsburgh Steelers",
    "opp_rank_pts": 26,
    "opp_avg_pts": 18.2,
    "home_away": "",
    "team_rank_allowed_pts": 3,
    "team_avg_allowed_pts": 17.73,
    "team_ranked_takeaways": 24,
    "team_avg_takeaways": 1.13,
    "opp_ranked_giveaways": 29,
    "opp_avg_giveaways": 1.87,
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
    "avg_fp2": 7.0,
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
    "week17": ""
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
                         data: [13.0, 4.0, 0.0, -1.0, 5.0, 5.0, 6.0, 'BYE', 7.0, 12.0, 15.0, 13.0, 7.0, 9.0, 7.0, 3.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.4, 10.6, 6.5, 8.9, 7.8, 8.6, 6.3, 'BYE', 5.9, 7.1, 7.1, 8.1, 8.7, 7.8, 9.6, 8.3, 10.4]
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
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/BUF.png",
    "name": "Buffalo Bills",
    "depthchart": "",
    "team": "Buffalo Bills",
    "projected": 9.8,
    "opponent": "New York Jets",
    "opp_rank_pts": 29,
    "opp_avg_pts": 16.87,
    "home_away": "",
    "team_rank_allowed_pts": 2,
    "team_avg_allowed_pts": 15.67,
    "team_ranked_takeaways": 20,
    "team_avg_takeaways": 1.27,
    "opp_ranked_giveaways": 9,
    "opp_avg_giveaways": 1.27,
    "fanduelSalary": "$4700",
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
    "avg_fp2": 8.27,
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
    "week17": ""
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
                         data: [10.0, 6.0, 13.0, 3.0, 11.0, 'BYE', 7.0, 4.0, 8.0, 5.0, 10.0, 13.0, 11.0, 3.0, 18.0, 2.0]
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
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/NE.png",
    "name": "New England Patriots",
    "depthchart": "",
    "team": "New England Patriots",
    "projected": 8.8,
    "opponent": "Miami Dolphins",
    "opp_rank_pts": 25,
    "opp_avg_pts": 18.33,
    "home_away": "",
    "team_rank_allowed_pts": 1,
    "team_avg_allowed_pts": 12.8,
    "team_ranked_takeaways": 20,
    "team_avg_takeaways": 1.27,
    "opp_ranked_giveaways": 13,
    "opp_avg_giveaways": 1.33,
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
    "avg_fp2": 11.6,
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
    "week17": ""
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
                         data: [10.0, 25.0, 14.0, 17.0, 14.0, 10.0, 25.0, 15.0, 1.0, 'BYE', 11.0, 6.0, 2.0, 5.0, 14.0, 5.0]
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
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/CHI.png",
    "name": "Chicago Bears",
    "depthchart": "",
    "team": "Chicago Bears",
    "projected": 8.7,
    "opponent": "Minnesota Vikings",
    "opp_rank_pts": 8,
    "opp_avg_pts": 25.73,
    "home_away": "at ",
    "team_rank_allowed_pts": 5,
    "team_avg_allowed_pts": 18.47,
    "team_ranked_takeaways": 14,
    "team_avg_takeaways": 1.33,
    "opp_ranked_giveaways": 29,
    "opp_avg_giveaways": 1.87,
    "fanduelSalary": "$3900",
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
    "avg_fp2": 6.13,
    "week01": 9.0,
    "week02": 5.0,
    "week03": 17.0,
    "week04": 17.0,
    "week05": 4.0,
    "week06": "BYE",
    "week07": 6.0,
    "week08": 4.0,
    "week09": 4.0,
    "week10": 8.0,
    "week11": 5.0,
    "week12": 4.0,
    "week13": 5.0,
    "week14": 2.0,
    "week15": 1.0,
    "week16": 1.0,
    "week17": ""
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
                         data: [9.0, 5.0, 17.0, 17.0, 4.0, 'BYE', 6.0, 4.0, 4.0, 8.0, 5.0, 4.0, 5.0, 2.0, 1.0, 1.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.8, 8.0, 7.0, 9.0, 8.9, 'BYE', 7.3, 7.7, 7.2, 8.9, 9.5, 9.5, 6.8, 7.7, 6.2, 8.1, 8.7]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.1, 7.5, 7.9, 5.6, 7.7, 'BYE', 6.6, 6.7, 5.0, 4.5, 4.9, 7.4, 5.4, 2.9, 5.2, 5.8, 4.6]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  "rgba(195, 104, 53, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.5, 23.4, 23.6, 13.7, 19.6, 'BYE', 19.0, 12.4, 12.2, 7.6, 8.4, 12.8, 7.8, 10.1, 9.1, 10.1, 9.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/MIN.png",
    "name": "Minnesota Vikings",
    "depthchart": "",
    "team": "Minnesota Vikings",
    "projected": 8.4,
    "opponent": "Chicago Bears",
    "opp_rank_pts": 29,
    "opp_avg_pts": 16.87,
    "home_away": "",
    "team_rank_allowed_pts": 7,
    "team_avg_allowed_pts": 18.93,
    "team_ranked_takeaways": 20,
    "team_avg_takeaways": 1.27,
    "opp_ranked_giveaways": 4,
    "opp_avg_giveaways": 0.93,
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
    "avg_fp2": 8.47,
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
    "week17": ""
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
                         data: [14.0, 6.0, 7.0, 5.0, 12.0, 9.0, 3.0, 12.0, 7.0, 3.0, 4.0, 'BYE', 2.0, 13.0, 21.0, 9.0]
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
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/NYJ.png",
    "name": "New York Jets",
    "depthchart": "",
    "team": "New York Jets",
    "projected": 8.4,
    "opponent": "Buffalo Bills",
    "opp_rank_pts": 21,
    "opp_avg_pts": 20.67,
    "home_away": "at ",
    "team_rank_allowed_pts": 19,
    "team_avg_allowed_pts": 23.4,
    "team_ranked_takeaways": 8,
    "team_avg_takeaways": 1.53,
    "opp_ranked_giveaways": 9,
    "opp_avg_giveaways": 1.27,
    "fanduelSalary": "$3200",
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
    "avg_fp2": 5.13,
    "week01": 12.0,
    "week02": 5.0,
    "week03": 2.0,
    "week04": "BYE",
    "week05": 3.0,
    "week06": 1.0,
    "week07": 1.0,
    "week08": 3.0,
    "week09": 6.0,
    "week10": 10.0,
    "week11": 9.0,
    "week12": 10.0,
    "week13": 2.0,
    "week14": 4.0,
    "week15": -3.0,
    "week16": 12.0,
    "week17": ""
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
                         data: [12.0, 5.0, 2.0, 'BYE', 3.0, 1.0, 1.0, 3.0, 6.0, 10.0, 9.0, 10.0, 2.0, 4.0, -3.0, 12.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.8, 7.8, 4.2, 'BYE', 5.5, 6.4, 4.8, 7.9, 6.2, 6.9, 7.7, 6.9, 7.6, 9.5, 4.7, 7.2, 8.4]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [6.6, 6.9, 0.0, 'BYE', 2.7, 0.0, 0.3, 2.7, 4.3, 4.8, 4.8, 3.2, 4.6, 3.1, 0.0, 3.5, 5.7]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  "rgba(18, 87, 64, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [10.4, 11.6, 7.4, 'BYE', 7.5, 6.4, 5.4, 9.1, 13.1, 8.0, 9.8, 6.6, 9.9, 14.2, 6.2, 7.7, 11.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/PIT.png",
    "name": "Pittsburgh Steelers",
    "depthchart": "",
    "team": "Pittsburgh Steelers",
    "projected": 8.3,
    "opponent": "Baltimore Ravens",
    "opp_rank_pts": 1,
    "opp_avg_pts": 33.07,
    "home_away": "at ",
    "team_rank_allowed_pts": 4,
    "team_avg_allowed_pts": 18.33,
    "team_ranked_takeaways": 2,
    "team_avg_takeaways": 2.4,
    "opp_ranked_giveaways": 9,
    "opp_avg_giveaways": 1.27,
    "fanduelSalary": "$3500",
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
    "avg_fp2": 10.2,
    "week01": 0.0,
    "week02": 7.0,
    "week03": 11.0,
    "week04": 19.0,
    "week05": 11.0,
    "week06": 8.0,
    "week07": "BYE",
    "week08": 13.0,
    "week09": 13.0,
    "week10": 16.0,
    "week11": 1.0,
    "week12": 12.0,
    "week13": 13.0,
    "week14": 18.0,
    "week15": 6.0,
    "week16": 5.0,
    "week17": ""
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
                         data: [0.0, 7.0, 11.0, 19.0, 11.0, 8.0, 'BYE', 13.0, 13.0, 16.0, 1.0, 12.0, 13.0, 18.0, 6.0, 5.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.4, 8.3, 6.3, 8.1, 5.8, 7.0, 'BYE', 9.6, 7.0, 6.7, 8.5, 8.3, 8.5, 8.1, 8.2, 9.5, 8.3]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.3, 5.5, 6.6, 5.6, 2.7, 1.9, 'BYE', 8.5, 4.9, 3.8, 6.0, 6.4, 5.7, 5.7, 3.3, 11.2, 3.3]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [6.5, 12.3, 12.4, 16.0, 9.1, 10.0, 'BYE', 11.7, 7.4, 8.8, 9.8, 14.4, 10.1, 10.1, 12.0, 13.8, 10.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/IND.png",
    "name": "Indianapolis Colts",
    "depthchart": "",
    "team": "Indianapolis Colts",
    "projected": 8.0,
    "opponent": "Jacksonville Jaguars",
    "opp_rank_pts": 27,
    "opp_avg_pts": 17.47,
    "home_away": "at ",
    "team_rank_allowed_pts": 16,
    "team_avg_allowed_pts": 22.47,
    "team_ranked_takeaways": 23,
    "team_avg_takeaways": 1.2,
    "opp_ranked_giveaways": 18,
    "opp_avg_giveaways": 1.47,
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
    "avg_fp2": 7.4,
    "week01": 5.0,
    "week02": 5.0,
    "week03": 2.0,
    "week04": 3.0,
    "week05": 10.0,
    "week06": "BYE",
    "week07": 9.0,
    "week08": 6.0,
    "week09": 8.0,
    "week10": 8.0,
    "week11": 8.0,
    "week12": 4.0,
    "week13": 9.0,
    "week14": 5.0,
    "week15": -1.0,
    "week16": 30.0,
    "week17": ""
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
                         data: [5.0, 5.0, 2.0, 3.0, 10.0, 'BYE', 9.0, 6.0, 8.0, 8.0, 8.0, 4.0, 9.0, 5.0, -1.0, 30.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.1, 5.9, 8.1, 7.3, 5.3, 'BYE', 6.5, 6.9, 6.2, 7.3, 7.6, 6.5, 7.9, 6.8, 5.9, 6.7, 8.0]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.5, 1.3, 4.6, 5.3, 0.0, 'BYE', 3.0, 5.0, 3.5, 0.6, 6.1, 2.9, 4.3, 1.7, 3.9, 5.7, 4.3]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  "rgba(1, 70, 131, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.6, 10.9, 9.4, 9.5, 4.6, 'BYE', 8.8, 8.7, 6.9, 11.0, 9.1, 9.4, 8.2, 10.0, 8.4, 7.2, 12.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/TEN.png",
    "name": "Tennessee Titans",
    "depthchart": "",
    "team": "Tennessee Titans",
    "projected": 7.9,
    "opponent": "Houston Texans",
    "opp_rank_pts": 10,
    "opp_avg_pts": 24.47,
    "home_away": "at ",
    "team_rank_allowed_pts": 13,
    "team_avg_allowed_pts": 21.13,
    "team_ranked_takeaways": 24,
    "team_avg_takeaways": 1.13,
    "opp_ranked_giveaways": 13,
    "opp_avg_giveaways": 1.33,
    "fanduelSalary": "$3800",
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
    "avg_fp2": 7.2,
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
    "week17": ""
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
                         data: [17.0, 8.0, 1.0, 11.0, 7.0, 4.0, 4.0, 11.0, 8.0, 7.0, 'BYE', 6.0, 16.0, 4.0, 5.0, -1.0]
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
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/HOU.png",
    "name": "Houston Texans",
    "depthchart": "",
    "team": "Houston Texans",
    "projected": 7.9,
    "opponent": "Tennessee Titans",
    "opp_rank_pts": 10,
    "opp_avg_pts": 24.47,
    "home_away": "",
    "team_rank_allowed_pts": 18,
    "team_avg_allowed_pts": 22.73,
    "team_ranked_takeaways": 8,
    "team_avg_takeaways": 1.53,
    "opp_ranked_giveaways": 18,
    "opp_avg_giveaways": 1.47,
    "fanduelSalary": "$4100",
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
    "avg_fp2": 5.73,
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
    "week17": ""
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
                         data: [2.0, 10.0, 5.0, 10.0, 3.0, 5.0, 2.0, 0.0, 18.0, 'BYE', -3.0, 2.0, 5.0, 1.0, 8.0, 18.0]
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
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/LA.png",
    "name": "Los Angeles Rams",
    "depthchart": "",
    "team": "Los Angeles Rams",
    "projected": 7.8,
    "opponent": "Arizona Cardinals",
    "opp_rank_pts": 16,
    "opp_avg_pts": 22.47,
    "home_away": "",
    "team_rank_allowed_pts": 17,
    "team_avg_allowed_pts": 22.6,
    "team_ranked_takeaways": 5,
    "team_avg_takeaways": 1.67,
    "opp_ranked_giveaways": 1,
    "opp_avg_giveaways": 0.67,
    "fanduelSalary": "$3800",
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
    "avg_fp2": 7.33,
    "week01": 9.0,
    "week02": 8.0,
    "week03": 9.0,
    "week04": 0.0,
    "week05": 2.0,
    "week06": 9.0,
    "week07": 15.0,
    "week08": 9.0,
    "week09": "BYE",
    "week10": 10.0,
    "week11": 9.0,
    "week12": -1.0,
    "week13": 12.0,
    "week14": 14.0,
    "week15": -4.0,
    "week16": 9.0,
    "week17": ""
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
                         data: [9.0, 8.0, 9.0, 0.0, 2.0, 9.0, 15.0, 9.0, 'BYE', 10.0, 9.0, -1.0, 12.0, 14.0, -4.0, 9.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.1, 5.5, 8.1, 7.8, 5.2, 6.9, 5.4, 9.3, 'BYE', 5.8, 9.1, 6.7, 7.6, 7.8, 6.6, 6.7, 7.8]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.8, 2.2, 3.2, 4.8, 3.8, 1.0, 4.1, 4.2, 'BYE', 4.3, 1.3, 0.0, 2.3, 4.3, 1.1, 5.7, 4.5]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(134, 109, 75, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.4, 13.6, 11.3, 10.8, 10.7, 14.8, 9.9, 9.7, 'BYE', 8.3, 7.4, 7.7, 6.9, 8.5, 12.1, 10.5, 10.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/PHI.png",
    "name": "Philadelphia Eagles",
    "depthchart": "",
    "team": "Philadelphia Eagles",
    "projected": 7.6,
    "opponent": "New York Giants",
    "opp_rank_pts": 19,
    "opp_avg_pts": 21.6,
    "home_away": "at ",
    "team_rank_allowed_pts": 15,
    "team_avg_allowed_pts": 22.07,
    "team_ranked_takeaways": 26,
    "team_avg_takeaways": 1.07,
    "opp_ranked_giveaways": 25,
    "opp_avg_giveaways": 1.67,
    "fanduelSalary": "$4500",
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
    "avg_fp2": 5.67,
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
    "week17": ""
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
                         data: [1.0, 7.0, 4.0, 5.0, 23.0, 1.0, 1.0, 12.0, 4.0, 'BYE', 2.0, 11.0, 1.0, 3.0, 2.0, 8.0]
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
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/KC.png",
    "name": "Kansas City Chiefs",
    "depthchart": "",
    "team": "Kansas City Chiefs",
    "projected": 7.5,
    "opponent": "Los Angeles Chargers",
    "opp_rank_pts": 21,
    "opp_avg_pts": 20.67,
    "home_away": "",
    "team_rank_allowed_pts": 6,
    "team_avg_allowed_pts": 18.67,
    "team_ranked_takeaways": 31,
    "team_avg_takeaways": 0.73,
    "opp_ranked_giveaways": 17,
    "opp_avg_giveaways": 1.4,
    "fanduelSalary": "$4300",
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
    "avg_fp2": 7.6,
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
    "week17": ""
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
                         data: [5.0, 11.0, 2.0, 6.0, 3.0, 5.0, 18.0, 5.0, 1.0, 2.0, 11.0, 'BYE', 14.0, 10.0, 11.0, 10.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.8, 6.1, 5.3, 5.9, 5.9, 6.7, 5.4, 5.6, 7.0, 6.2, 6.8, 'BYE', 7.5, 5.1, 7.1, 7.4, 7.5]
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
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/DEN.png",
    "name": "Denver Broncos",
    "depthchart": "",
    "team": "Denver Broncos",
    "projected": 7.5,
    "opponent": "Oakland Raiders",
    "opp_rank_pts": 24,
    "opp_avg_pts": 19.87,
    "home_away": "",
    "team_rank_allowed_pts": 8,
    "team_avg_allowed_pts": 19.27,
    "team_ranked_takeaways": 26,
    "team_avg_takeaways": 1.07,
    "opp_ranked_giveaways": 7,
    "opp_avg_giveaways": 1.13,
    "fanduelSalary": "$4600",
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
    "avg_fp2": 5.93,
    "week01": 0.0,
    "week02": 1.0,
    "week03": 0.0,
    "week04": 5.0,
    "week05": 10.0,
    "week06": 23.0,
    "week07": 0.0,
    "week08": 7.0,
    "week09": 3.0,
    "week10": "BYE",
    "week11": 9.0,
    "week12": 4.0,
    "week13": 8.0,
    "week14": 9.0,
    "week15": 5.0,
    "week16": 5.0,
    "week17": ""
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
                         data: [0.0, 1.0, 0.0, 5.0, 10.0, 23.0, 0.0, 7.0, 3.0, 'BYE', 9.0, 4.0, 8.0, 9.0, 5.0, 5.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.8, 8.7, 5.7, 6.6, 5.6, 7.1, 4.9, 5.7, 7.4, 'BYE', 6.3, 6.4, 7.2, 7.2, 5.5, 5.7, 7.5]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.3, 4.7, 5.1, 7.3, 2.0, 4.8, 6.1, 5.4, 6.2, 'BYE', 4.8, 6.6, 6.8, 6.5, 4.6, 5.1, 5.3]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  "rgba(225, 119, 87, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [9.2, 15.5, 11.6, 10.5, 8.6, 8.6, 11.3, 11.3, 11.1, 'BYE', 10.5, 9.8, 10.2, 9.0, 9.8, 10.2, 11.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/CIN.png",
    "name": "Cincinnati Bengals",
    "depthchart": "",
    "team": "Cincinnati Bengals",
    "projected": 7.4,
    "opponent": "Cleveland Browns",
    "opp_rank_pts": 20,
    "opp_avg_pts": 20.8,
    "home_away": "",
    "team_rank_allowed_pts": 25,
    "team_avg_allowed_pts": 26.47,
    "team_ranked_takeaways": 14,
    "team_avg_takeaways": 1.33,
    "opp_ranked_giveaways": 13,
    "opp_avg_giveaways": 1.33,
    "fanduelSalary": "$3300",
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
    "avg_fp2": 3.8,
    "week01": 6.0,
    "week02": -2.0,
    "week03": 5.0,
    "week04": 2.0,
    "week05": 1.0,
    "week06": 9.0,
    "week07": 2.0,
    "week08": 0.0,
    "week09": "BYE",
    "week10": -1.0,
    "week11": 8.0,
    "week12": 6.0,
    "week13": 13.0,
    "week14": 5.0,
    "week15": 3.0,
    "week16": 0.0,
    "week17": ""
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
                         data: [6.0, -2.0, 5.0, 2.0, 1.0, 9.0, 2.0, 0.0, 'BYE', -1.0, 8.0, 6.0, 13.0, 5.0, 3.0, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.3, 8.6, 5.0, 5.9, 7.5, 5.1, 6.1, 7.3, 'BYE', 5.4, 5.3, 5.9, 7.5, 6.7, 5.1, 7.6, 7.4]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.8, 6.8, 4.2, 6.2, 3.6, 0.1, 6.0, 1.8, 'BYE', 0.0, 1.4, 3.7, 5.4, 3.2, 5.3, 3.5, 4.1]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(234, 115, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [6.0, 13.3, 7.5, 12.9, 8.6, 9.7, 12.1, 11.2, 'BYE', 10.6, 5.7, 12.3, 15.3, 6.7, 9.1, 12.2, 7.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/JAX.png",
    "name": "Jacksonville Jaguars",
    "depthchart": "",
    "team": "Jacksonville Jaguars",
    "projected": 7.4,
    "opponent": "Indianapolis Colts",
    "opp_rank_pts": 18,
    "opp_avg_pts": 21.8,
    "home_away": "",
    "team_rank_allowed_pts": 22,
    "team_avg_allowed_pts": 25.13,
    "team_ranked_takeaways": 29,
    "team_avg_takeaways": 0.93,
    "opp_ranked_giveaways": 23,
    "opp_avg_giveaways": 1.53,
    "fanduelSalary": "$3400",
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
    "avg_fp2": 5.2,
    "week01": -4.0,
    "week02": 8.0,
    "week03": 13.0,
    "week04": 2.0,
    "week05": 4.0,
    "week06": 7.0,
    "week07": 11.0,
    "week08": 15.0,
    "week09": 5.0,
    "week10": "BYE",
    "week11": 4.0,
    "week12": 1.0,
    "week13": 5.0,
    "week14": -3.0,
    "week15": 5.0,
    "week16": 5.0,
    "week17": ""
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
                         data: [-4.0, 8.0, 13.0, 2.0, 4.0, 7.0, 11.0, 15.0, 5.0, 'BYE', 4.0, 1.0, 5.0, -3.0, 5.0, 5.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.3, 6.4, 6.2, 5.3, 6.1, 7.0, 6.5, 9.6, 5.5, 'BYE', 5.7, 5.9, 6.5, 7.5, 6.0, 5.6, 7.4]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.6, 0.9, 3.5, 0.7, 0.1, 0.6, 3.1, 3.5, 3.3, 'BYE', 4.3, 3.2, 2.3, 3.8, 1.6, 2.6, 3.1]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 103, 120, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.0, 8.4, 7.7, 8.5, 10.4, 11.6, 11.4, 14.5, 7.4, 'BYE', 7.8, 9.0, 6.9, 6.1, 8.9, 5.1, 6.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/NO.png",
    "name": "New Orleans Saints",
    "depthchart": "",
    "team": "New Orleans Saints",
    "projected": 7.1,
    "opponent": "Carolina Panthers",
    "opp_rank_pts": 17,
    "opp_avg_pts": 21.87,
    "home_away": "at ",
    "team_rank_allowed_pts": 14,
    "team_avg_allowed_pts": 21.67,
    "team_ranked_takeaways": 28,
    "team_avg_takeaways": 1.0,
    "opp_ranked_giveaways": 28,
    "opp_avg_giveaways": 1.8,
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
    "avg_fp2": 7.27,
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
    "week17": ""
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
                         data: [7.0, 5.0, 8.0, 11.0, 6.0, 11.0, 8.0, 8.0, 'BYE', 3.0, 11.0, 3.0, 16.0, 1.0, 5.0, 6.0]
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
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/GB.png",
    "name": "Green Bay Packers",
    "depthchart": "",
    "team": "Green Bay Packers",
    "projected": 7.1,
    "opponent": "Detroit Lions",
    "opp_rank_pts": 23,
    "opp_avg_pts": 20.6,
    "home_away": "at ",
    "team_rank_allowed_pts": 10,
    "team_avg_allowed_pts": 19.53,
    "team_ranked_takeaways": 31,
    "team_avg_takeaways": 0.73,
    "opp_ranked_giveaways": 4,
    "opp_avg_giveaways": 0.93,
    "fanduelSalary": "$4800",
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
    "avg_fp2": 7.07,
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
    "week17": ""
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
                         data: [14.0, 12.0, 13.0, -1.0, 9.0, 3.0, 2.0, 4.0, 2.0, 8.0, 'BYE', -1.0, 10.0, 7.0, 13.0, 11.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.8, 9.6, 6.9, 8.0, 5.5, 7.8, 7.3, 6.0, 7.3, 7.6, 'BYE', 5.5, 7.8, 8.3, 8.4, 5.6, 7.1]
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
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/DAL.png",
    "name": "Dallas Cowboys",
    "depthchart": "",
    "team": "Dallas Cowboys",
    "projected": 7.0,
    "opponent": "Washington Redskins",
    "opp_rank_pts": 31,
    "opp_avg_pts": 16.67,
    "home_away": "",
    "team_rank_allowed_pts": 11,
    "team_avg_allowed_pts": 20.33,
    "team_ranked_takeaways": 14,
    "team_avg_takeaways": 1.33,
    "opp_ranked_giveaways": 13,
    "opp_avg_giveaways": 1.33,
    "fanduelSalary": "$3600",
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
    "avg_fp2": 5.8,
    "week01": 6.0,
    "week02": 1.0,
    "week03": 11.0,
    "week04": 11.0,
    "week05": 1.0,
    "week06": 4.0,
    "week07": 15.0,
    "week08": "BYE",
    "week09": 12.0,
    "week10": 0.0,
    "week11": 3.0,
    "week12": 6.0,
    "week13": 4.0,
    "week14": 5.0,
    "week15": 6.0,
    "week16": 2.0,
    "week17": ""
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
                         data: [6.0, 1.0, 11.0, 11.0, 1.0, 4.0, 15.0, 'BYE', 12.0, 0.0, 3.0, 6.0, 4.0, 5.0, 6.0, 2.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.9, 5.8, 8.4, 4.9, 6.9, 7.1, 5.5, 'BYE', 6.4, 6.3, 6.7, 5.4, 5.8, 7.3, 6.0, 6.5, 7.0]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.4, 0.0, 7.8, 1.7, 2.9, 5.1, 4.1, 'BYE', 5.6, 3.4, 1.2, 3.1, 3.1, 5.0, 1.0, 4.0, 6.8]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  "rgba(127, 150, 149, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [7.5, 15.2, 12.4, 6.8, 8.3, 13.0, 11.6, 'BYE', 8.7, 6.9, 5.2, 11.0, 5.6, 9.4, 5.5, 6.1, 9.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/TB.png",
    "name": "Tampa Bay Buccaneers",
    "depthchart": "",
    "team": "Tampa Bay Buccaneers",
    "projected": 6.8,
    "opponent": "Atlanta Falcons",
    "opp_rank_pts": 14,
    "opp_avg_pts": 23.2,
    "home_away": "",
    "team_rank_allowed_pts": 31,
    "team_avg_allowed_pts": 27.93,
    "team_ranked_takeaways": 1,
    "team_avg_takeaways": 2.87,
    "opp_ranked_giveaways": 9,
    "opp_avg_giveaways": 1.27,
    "fanduelSalary": "$3500",
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
    "avg_fp2": 5.8,
    "week01": 6.0,
    "week02": 9.0,
    "week03": 8.0,
    "week04": 9.0,
    "week05": 1.0,
    "week06": 0.0,
    "week07": "BYE",
    "week08": 5.0,
    "week09": 1.0,
    "week10": 6.0,
    "week11": 0.0,
    "week12": 10.0,
    "week13": 17.0,
    "week14": -4.0,
    "week15": 9.0,
    "week16": 10.0,
    "week17": ""
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
                         data: [6.0, 9.0, 8.0, 9.0, 1.0, 0.0, 'BYE', 5.0, 1.0, 6.0, 0.0, 10.0, 17.0, -4.0, 9.0, 10.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.3, 8.2, 7.1, 7.5, 6.3, 6.3, 'BYE', 6.1, 5.8, 7.2, 6.0, 5.9, 7.6, 8.1, 6.5, 7.1, 6.8]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [5.3, 3.8, 7.2, 2.8, 0.1, 0.8, 'BYE', 0.2, 2.3, 0.3, 1.5, 0.0, 1.2, 4.2, 2.1, 1.6, 0.7]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(213, 10, 10, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [12.5, 16.2, 15.8, 9.2, 8.8, 13.4, 'BYE', 8.4, 5.5, 8.6, 6.3, 6.2, 6.8, 10.9, 8.2, 7.1, 8.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/SF.png",
    "name": "San Francisco 49ers",
    "depthchart": "",
    "team": "San Francisco 49ers",
    "projected": 6.7,
    "opponent": "Seattle Seahawks",
    "opp_rank_pts": 9,
    "opp_avg_pts": 25.6,
    "home_away": "at ",
    "team_rank_allowed_pts": 9,
    "team_avg_allowed_pts": 19.33,
    "team_ranked_takeaways": 3,
    "team_avg_takeaways": 1.87,
    "opp_ranked_giveaways": 31,
    "opp_avg_giveaways": 2.0,
    "fanduelSalary": "$4200",
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
    "avg_fp2": 8.73,
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
    "week17": ""
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
                         data: [15.0, 7.0, 7.0, 'BYE', 19.0, 10.0, 15.0, 17.0, 3.0, 13.0, 8.0, 11.0, 4.0, -2.0, 3.0, 1.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.8, 6.4, 7.2, 'BYE', 6.8, 7.5, 8.1, 7.9, 8.7, 7.9, 8.1, 5.6, 6.5, 6.0, 7.5, 9.2, 6.7]
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
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/CLE.png",
    "name": "Cleveland Browns",
    "depthchart": "",
    "team": "Cleveland Browns",
    "projected": 6.7,
    "opponent": "Cincinnati Bengals",
    "opp_rank_pts": 32,
    "opp_avg_pts": 15.67,
    "home_away": "at ",
    "team_rank_allowed_pts": 21,
    "team_avg_allowed_pts": 24.0,
    "team_ranked_takeaways": 7,
    "team_avg_takeaways": 1.6,
    "opp_ranked_giveaways": 18,
    "opp_avg_giveaways": 1.47,
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
    "avg_fp2": 5.67,
    "week01": 0.0,
    "week02": 13.0,
    "week03": 9.0,
    "week04": 10.0,
    "week05": 5.0,
    "week06": 4.0,
    "week07": "BYE",
    "week08": 5.0,
    "week09": 5.0,
    "week10": 2.0,
    "week11": 16.0,
    "week12": 8.0,
    "week13": 4.0,
    "week14": 5.0,
    "week15": -2.0,
    "week16": 1.0,
    "week17": ""
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
                         data: [0.0, 13.0, 9.0, 10.0, 5.0, 4.0, 'BYE', 5.0, 5.0, 2.0, 16.0, 8.0, 4.0, 5.0, -2.0, 1.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.9, 7.9, 7.1, 4.8, 5.8, 5.8, 'BYE', 4.8, 5.7, 6.2, 6.8, 8.2, 6.1, 7.9, 6.5, 4.6, 6.7]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.3, 3.7, 4.3, 0.1, 6.5, 4.2, 'BYE', 4.7, 4.1, 3.4, 4.3, 2.4, 4.5, 4.9, 3.8, 0.8, 4.1]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 60, 0, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [5.5, 13.5, 7.1, 14.4, 11.6, 6.9, 'BYE', 11.6, 10.8, 6.4, 10.1, 10.3, 15.3, 11.4, 8.5, 10.3, 8.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/CAR.png",
    "name": "Carolina Panthers",
    "depthchart": "",
    "team": "Carolina Panthers",
    "projected": 6.6,
    "opponent": "New Orleans Saints",
    "opp_rank_pts": 5,
    "opp_avg_pts": 27.2,
    "home_away": "",
    "team_rank_allowed_pts": 29,
    "team_avg_allowed_pts": 27.47,
    "team_ranked_takeaways": 4,
    "team_avg_takeaways": 1.73,
    "opp_ranked_giveaways": 3,
    "opp_avg_giveaways": 0.87,
    "fanduelSalary": "$3000",
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
    "avg_fp2": 5.93,
    "week01": 2.0,
    "week02": 5.0,
    "week03": 13.0,
    "week04": 14.0,
    "week05": 8.0,
    "week06": 19.0,
    "week07": "BYE",
    "week08": 3.0,
    "week09": 11.0,
    "week10": 2.0,
    "week11": 2.0,
    "week12": 3.0,
    "week13": 6.0,
    "week14": -3.0,
    "week15": 5.0,
    "week16": -1.0,
    "week17": ""
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
                         data: [2.0, 5.0, 13.0, 14.0, 8.0, 19.0, 'BYE', 3.0, 11.0, 2.0, 2.0, 3.0, 6.0, -3.0, 5.0, -1.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.8, 8.1, 6.6, 7.2, 7.5, 5.5, 'BYE', 7.9, 7.0, 5.5, 7.5, 5.1, 8.4, 6.3, 6.6, 5.8, 6.6]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [1.4, 3.9, 3.4, 4.3, 4.5, 5.5, 'BYE', 1.6, 5.3, 4.4, 0.7, 2.3, 7.4, 1.4, 0.8, 3.8, 0.0]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 133, 202, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.5, 7.8, 9.0, 10.3, 8.2, 8.8, 'BYE', 13.2, 9.6, 10.1, 8.5, 7.9, 14.0, 6.1, 11.6, 10.2, 10.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/ARI.png",
    "name": "Arizona Cardinals",
    "depthchart": "",
    "team": "Arizona Cardinals",
    "projected": 6.6,
    "opponent": "Los Angeles Rams",
    "opp_rank_pts": 12,
    "opp_avg_pts": 24.2,
    "home_away": "at ",
    "team_rank_allowed_pts": 28,
    "team_avg_allowed_pts": 27.07,
    "team_ranked_takeaways": 14,
    "team_avg_takeaways": 1.33,
    "opp_ranked_giveaways": 8,
    "opp_avg_giveaways": 1.2,
    "fanduelSalary": "$3400",
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
    "avg_fp2": 4.13,
    "week01": 5.0,
    "week02": 2.0,
    "week03": 0.0,
    "week04": 4.0,
    "week05": 1.0,
    "week06": 1.0,
    "week07": 14.0,
    "week08": 1.0,
    "week09": 0.0,
    "week10": 9.0,
    "week11": 2.0,
    "week12": "BYE",
    "week13": 0.0,
    "week14": 7.0,
    "week15": 5.0,
    "week16": 11.0,
    "week17": ""
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
                         data: [5.0, 2.0, 0.0, 4.0, 1.0, 1.0, 14.0, 1.0, 0.0, 9.0, 2.0, 'BYE', 0.0, 7.0, 5.0, 11.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.0, 6.8, 8.1, 6.1, 7.0, 6.9, 6.8, 5.6, 6.6, 5.9, 5.3, 'BYE', 7.4, 7.7, 6.9, 4.7, 6.6]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.1, 0.7, 3.1, 4.1, 1.6, 2.3, 5.0, 4.2, 3.6, 2.7, 0.0, 'BYE', 4.5, 5.8, 4.0, 1.6, 4.2]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(151, 35, 63, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.1, 11.4, 16.5, 11.2, 16.8, 9.8, 10.5, 9.0, 9.3, 16.0, 13.3, 'BYE', 11.3, 9.5, 8.8, 14.3, 10.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/OAK.png",
    "name": "Oakland Raiders",
    "depthchart": "",
    "team": "Oakland Raiders",
    "projected": 6.5,
    "opponent": "Denver Broncos",
    "opp_rank_pts": 28,
    "opp_avg_pts": 17.27,
    "home_away": "at ",
    "team_rank_allowed_pts": 27,
    "team_avg_allowed_pts": 26.87,
    "team_ranked_takeaways": 30,
    "team_avg_takeaways": 0.87,
    "opp_ranked_giveaways": 6,
    "opp_avg_giveaways": 1.0,
    "fanduelSalary": "$4300",
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
    "avg_fp2": 3.33,
    "week01": 4.0,
    "week02": 3.0,
    "week03": -1.0,
    "week04": 4.0,
    "week05": 8.0,
    "week06": "BYE",
    "week07": -3.0,
    "week08": 3.0,
    "week09": 6.0,
    "week10": 10.0,
    "week11": 13.0,
    "week12": 0.0,
    "week13": 0.0,
    "week14": -2.0,
    "week15": 3.0,
    "week16": 2.0,
    "week17": ""
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
                         data: [4.0, 3.0, -1.0, 4.0, 8.0, 'BYE', -3.0, 3.0, 6.0, 10.0, 13.0, 0.0, 0.0, -2.0, 3.0, 2.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.1, 5.5, 6.4, 4.1, 7.9, 'BYE', 4.8, 5.5, 5.6, 5.6, 6.8, 7.0, 5.7, 7.0, 6.6, 5.6, 6.5]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [2.8, 0.0, 4.5, 3.6, 5.2, 'BYE', 3.2, 0.0, 2.8, 2.0, 5.1, 5.6, 2.8, 1.7, 4.2, 3.5, 3.8]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(165, 172, 175, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [6.1, 9.6, 9.1, 8.1, 10.2, 'BYE', 7.5, 9.9, 7.6, 7.7, 9.4, 9.9, 6.5, 8.9, 8.7, 7.4, 8.2]
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
    "opp_rank_pts": 2,
    "opp_avg_pts": 30.27,
    "home_away": "",
    "team_rank_allowed_pts": 20,
    "team_avg_allowed_pts": 23.93,
    "team_ranked_takeaways": 10,
    "team_avg_takeaways": 1.47,
    "opp_ranked_giveaways": 18,
    "opp_avg_giveaways": 1.47,
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
    "avg_fp2": 6.87,
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
    "week17": ""
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
                         data: [12.0, 3.0, 1.0, 10.0, 3.0, 7.0, 1.0, 9.0, 3.0, 11.0, 'BYE', 19.0, 6.0, 5.0, 7.0, 6.0]
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
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/NYG.png",
    "name": "New York Giants",
    "depthchart": "",
    "team": "New York Giants",
    "projected": 6.5,
    "opponent": "Philadelphia Eagles",
    "opp_rank_pts": 13,
    "opp_avg_pts": 23.4,
    "home_away": "",
    "team_rank_allowed_pts": 30,
    "team_avg_allowed_pts": 27.8,
    "team_ranked_takeaways": 10,
    "team_avg_takeaways": 1.47,
    "opp_ranked_giveaways": 25,
    "opp_avg_giveaways": 1.67,
    "fanduelSalary": "$3300",
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
    "avg_fp2": 3.87,
    "week01": -4.0,
    "week02": 2.0,
    "week03": 7.0,
    "week04": 18.0,
    "week05": 5.0,
    "week06": 3.0,
    "week07": 2.0,
    "week08": 7.0,
    "week09": 0.0,
    "week10": 1.0,
    "week11": "BYE",
    "week12": 7.0,
    "week13": -1.0,
    "week14": 5.0,
    "week15": 7.0,
    "week16": -1.0,
    "week17": ""
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
                         data: [-4.0, 2.0, 7.0, 18.0, 5.0, 3.0, 2.0, 7.0, 0.0, 1.0, 'BYE', 7.0, -1.0, 5.0, 7.0, -1.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.9, 8.0, 6.4, 7.0, 6.9, 4.1, 6.8, 6.4, 6.7, 7.1, 'BYE', 7.2, 6.6, 7.6, 7.9, 8.1, 6.5]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.5, 2.0, 8.7, 2.0, 2.1, 2.5, 4.2, 3.2, 5.7, 3.5, 'BYE', 6.7, 4.7, 6.2, 3.1, 3.2, 3.1]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.7, 14.4, 12.7, 13.7, 10.9, 11.0, 9.5, 11.8, 12.0, 11.3, 'BYE', 14.5, 13.6, 11.0, 10.5, 9.6, 11.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/ATL.png",
    "name": "Atlanta Falcons",
    "depthchart": "",
    "team": "Atlanta Falcons",
    "projected": 6.4,
    "opponent": "Tampa Bay Buccaneers",
    "opp_rank_pts": 3,
    "opp_avg_pts": 29.13,
    "home_away": "at ",
    "team_rank_allowed_pts": 23,
    "team_avg_allowed_pts": 25.2,
    "team_ranked_takeaways": 10,
    "team_avg_takeaways": 1.47,
    "opp_ranked_giveaways": 18,
    "opp_avg_giveaways": 1.47,
    "fanduelSalary": "$4600",
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
    "avg_fp2": 4.8,
    "week01": 0.0,
    "week02": 10.0,
    "week03": 1.0,
    "week04": 0.0,
    "week05": -2.0,
    "week06": -1.0,
    "week07": -4.0,
    "week08": 2.0,
    "week09": "BYE",
    "week10": 10.0,
    "week11": 26.0,
    "week12": 2.0,
    "week13": 0.0,
    "week14": 14.0,
    "week15": 5.0,
    "week16": 9.0,
    "week17": ""
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
                         data: [0.0, 10.0, 1.0, 0.0, -2.0, -1.0, -4.0, 2.0, 'BYE', 10.0, 26.0, 2.0, 0.0, 14.0, 5.0, 9.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.7, 5.8, 5.6, 6.5, 7.6, 5.3, 6.5, 4.9, 'BYE', 5.6, 6.0, 5.3, 5.3, 6.7, 5.8, 6.7, 6.4]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.6, 0.2, 4.0, 3.8, 2.6, 1.7, 3.8, 0.1, 'BYE', 3.0, 2.6, 3.4, 3.2, 4.9, 2.4, 5.1, 1.5]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(167, 25, 48, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [7.5, 7.8, 16.7, 10.7, 9.1, 8.8, 7.4, 6.8, 'BYE', 9.4, 9.4, 4.9, 8.2, 7.0, 7.3, 11.2, 4.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/DET.png",
    "name": "Detroit Lions",
    "depthchart": "",
    "team": "Detroit Lions",
    "projected": 6.3,
    "opponent": "Green Bay Packers",
    "opp_rank_pts": 15,
    "opp_avg_pts": 23.07,
    "home_away": "",
    "team_rank_allowed_pts": 26,
    "team_avg_allowed_pts": 26.67,
    "team_ranked_takeaways": 5,
    "team_avg_takeaways": 1.67,
    "opp_ranked_giveaways": 25,
    "opp_avg_giveaways": 1.67,
    "fanduelSalary": "$3000",
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
    "avg_fp2": 4.6,
    "week01": 7.0,
    "week02": 9.0,
    "week03": 13.0,
    "week04": 5.0,
    "week05": "BYE",
    "week06": 7.0,
    "week07": -4.0,
    "week08": 5.0,
    "week09": 0.0,
    "week10": 6.0,
    "week11": -1.0,
    "week12": 8.0,
    "week13": 3.0,
    "week14": 2.0,
    "week15": 3.0,
    "week16": 6.0,
    "week17": ""
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
                         data: [7.0, 9.0, 13.0, 5.0, 'BYE', 7.0, -4.0, 5.0, 0.0, 6.0, -1.0, 8.0, 3.0, 2.0, 3.0, 6.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.6, 6.7, 5.6, 6.1, 'BYE', 6.1, 6.2, 7.4, 5.4, 6.8, 5.7, 6.8, 7.5, 6.1, 6.4, 5.8, 6.3]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.8, 1.4, 0.0, 0.0, 'BYE', 4.2, 4.8, 2.2, 4.0, 2.2, 2.0, 2.5, 2.8, 0.0, 1.3, 3.0, 1.4]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 118, 182, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [18.7, 8.2, 13.6, 9.8, 'BYE', 12.6, 14.2, 13.3, 10.6, 11.2, 7.5, 7.8, 9.3, 9.7, 7.0, 9.2, 8.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/WAS.png",
    "name": "Washington Redskins",
    "depthchart": "",
    "team": "Washington Redskins",
    "projected": 5.9,
    "opponent": "Dallas Cowboys",
    "opp_rank_pts": 7,
    "opp_avg_pts": 25.8,
    "home_away": "at ",
    "team_rank_allowed_pts": 24,
    "team_avg_allowed_pts": 25.87,
    "team_ranked_takeaways": 14,
    "team_avg_takeaways": 1.33,
    "opp_ranked_giveaways": 2,
    "opp_avg_giveaways": 0.8,
    "fanduelSalary": "$3100",
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
    "avg_fp2": 5.4,
    "week01": 0.0,
    "week02": 2.0,
    "week03": 5.0,
    "week04": 9.0,
    "week05": 5.0,
    "week06": 10.0,
    "week07": 8.0,
    "week08": 6.0,
    "week09": 2.0,
    "week10": "BYE",
    "week11": 5.0,
    "week12": 14.0,
    "week13": 11.0,
    "week14": 7.0,
    "week15": 0.0,
    "week16": -3.0,
    "week17": ""
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
                         data: [0.0, 2.0, 5.0, 9.0, 5.0, 10.0, 8.0, 6.0, 2.0, 'BYE', 5.0, 14.0, 11.0, 7.0, 0.0, -3.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.1, 5.7, 5.9, 4.9, 5.3, 6.3, 6.8, 4.7, 6.3, 'BYE', 6.8, 6.3, 6.0, 5.3, 7.0, 7.0, 5.9]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.2, 7.5, 4.0, 4.6, 0.2, 3.1, 3.9, 4.9, 5.1, 'BYE', 6.6, 4.0, 4.5, 3.6, 4.4, 4.9, 2.9]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  "rgba(255, 182, 18, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [6.4, 15.3, 13.8, 7.4, 11.5, 11.5, 7.3, 8.1, 10.2, 'BYE', 10.4, 6.9, 8.3, 8.4, 10.4, 8.7, 6.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/LAC.png",
    "name": "Los Angeles Chargers",
    "depthchart": "",
    "team": "Los Angeles Chargers",
    "projected": 5.4,
    "opponent": "Kansas City Chiefs",
    "opp_rank_pts": 4,
    "opp_avg_pts": 28.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 12,
    "team_avg_allowed_pts": 20.93,
    "team_ranked_takeaways": 13,
    "team_avg_takeaways": 1.4,
    "opp_ranked_giveaways": 24,
    "opp_avg_giveaways": 1.6,
    "fanduelSalary": "$3200",
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
    "avg_fp2": 5.27,
    "week01": 2.0,
    "week02": 8.0,
    "week03": 4.0,
    "week04": 11.0,
    "week05": 14.0,
    "week06": 2.0,
    "week07": 4.0,
    "week08": 9.0,
    "week09": 7.0,
    "week10": 4.0,
    "week11": 5.0,
    "week12": "BYE",
    "week13": 2.0,
    "week14": 6.0,
    "week15": -2.0,
    "week16": 3.0,
    "week17": ""
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
                         data: [2.0, 8.0, 4.0, 11.0, 14.0, 2.0, 4.0, 9.0, 7.0, 4.0, 5.0, 'BYE', 2.0, 6.0, -2.0, 3.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.2, 6.6, 6.8, 6.9, 6.8, 7.2, 6.8, 7.2, 5.9, 5.1, 7.2, 'BYE', 7.4, 8.2, 6.7, 7.7, 5.4]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [3.0, 0.7, 5.4, 5.0, 3.3, 6.6, 6.5, 4.5, 0.5, 0.0, 0.0, 'BYE', 5.2, 6.7, 0.7, 5.0, 1.9]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 128, 198, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [8.5, 8.1, 12.2, 13.4, 13.4, 12.2, 10.6, 12.0, 9.5, 12.3, 7.8, 'BYE', 9.4, 11.0, 7.4, 11.5, 7.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/MIA.png",
    "name": "Miami Dolphins",
    "depthchart": "",
    "team": "Miami Dolphins",
    "projected": 4.5,
    "opponent": "New England Patriots",
    "opp_rank_pts": 6,
    "opp_avg_pts": 26.27,
    "home_away": "at ",
    "team_rank_allowed_pts": 32,
    "team_avg_allowed_pts": 31.07,
    "team_ranked_takeaways": 14,
    "team_avg_takeaways": 1.33,
    "opp_ranked_giveaways": 31,
    "opp_avg_giveaways": 2.0,
    "fanduelSalary": "$3000",
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
    "avg_fp2": 2.8,
    "week01": -3.0,
    "week02": 3.0,
    "week03": 2.0,
    "week04": 0.0,
    "week05": "BYE",
    "week06": 1.0,
    "week07": 1.0,
    "week08": 4.0,
    "week09": 8.0,
    "week10": 11.0,
    "week11": 2.0,
    "week12": -1.0,
    "week13": 3.0,
    "week14": 3.0,
    "week15": 6.0,
    "week16": 2.0,
    "week17": ""
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
                         data: [-3.0, 3.0, 2.0, 0.0, 'BYE', 1.0, 1.0, 4.0, 8.0, 11.0, 2.0, -1.0, 3.0, 3.0, 6.0, 2.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.5, 4.8, 5.2, 5.6, 'BYE', 6.5, 6.1, 6.1, 7.6, 5.5, 6.6, 7.7, 6.7, 7.4, 7.5, 7.4, 4.5]
                    },
                    {
                        label: "95% Min",
                        borderDash: [2, 2],
						pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: false,
                        data: [4.9, 0.0, 0.0, 0.0, 'BYE', 1.8, 0.0, 1.4, 1.4, 0.7, 3.4, 1.2, 3.0, 1.9, 2.1, 3.1, 1.7]
                    },
                    {
                        label: "95% Max",
                        borderDash: [2, 2],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  "rgba(0, 142, 151, .15)",  //lite team color .15
                        borderColor: 'rgba(255, 255, 255, .0)',  //white line leave white .0
						pointStyle: 'line',
                        fill: '-1',
                        data: [11.1, 9.1, 15.2, 13.8, 'BYE', 7.7, 13.1, 11.4, 10.2, 7.1, 11.8, 8.0, 11.2, 7.6, 7.1, 5.5, 12.9]
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