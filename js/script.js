var App = angular.module('footballApp', ['tc.chartjs']);

App.controller('positionController', function($scope, $http) {

  //JSON data for position and players

/*********************** PASTE AFTER HERE ************************/

$scope.currentDate = {"currentDate": "Wednesday, 18 December 2019 03:16 AM (central time)"};
$scope.week = {"nflWeek": 16};

$scope.qbStartSit = {"one": "Russell Wilson", "two": "Deshaun Watson", "three": "Jameis Winston", "four": "Philip Rivers", "five": "Drew Lock", "six": "Tom Brady", "seven": "Derek Carr", "eight": "Josh Allen", "nine": "Jared Goff", "ten": "Baker Mayfield"};
$scope.rbStartSit = {"one": "Marlon Mack", "two": "Joe Mixon", "three": "Saquon Barkley", "four": "Dalvin Cook", "five": "Devonta Freeman", "six": "Carlos Hyde", "seven": "Devin Singletary", "eight": "Derrick Henry", "nine": "James Conner", "ten": "Nick Chubb"};
$scope.wrStartSit = {"one": "DeAndre Hopkins", "two": "Courtland Sutton", "three": "Tyler Lockett", "four": "Terry McLaurin", "five": "Tyler Boyd", "six": "John Brown", "seven": "Tyrell Williams", "eight": "Robert Woods", "nine": "Julian Edelman", "ten": "Nelson Agholor"};
$scope.teStartSit = {"one": "Jacob Hollister", "two": "Darren Fells", "three": "Hunter Henry", "four": "Charles Clay", "five": "O.J. Howard", "six": "Matt LaCosse", "seven": "Tyler Higbee", "eight": "David Njoku", "nine": "Dawson Knox", "ten": "Darren Waller"};
$scope.dstStartSit = {"one": "Miami Dolphins", "two": "New York Giants", "three": "Pittsburgh Steelers", "four": "Detroit Lions", "five": "Cincinnati Bengals", "six": "Cleveland Browns", "seven": "Houston Texans", "eight": "Los Angeles Rams", "nine": "Philadelphia Eagles", "ten": "Chicago Bears"};

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
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3916387.png",
    "name": "Lamar Jackson",
    "depthchart": "Starter: QB-1",
    "team": "Baltimore Ravens",
    "projected": 28.4,
    "opponent": "Cleveland Browns",
    "home_away": "at ",
    "opp_rank_Neg": 6,
    "team_rank_Neg": 26,
    "avg_fp2": 28.04,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 18.18,
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
    "headlineNews": "Submits record-breaking performance",
    "report": "Jackson (quadriceps) completed 15 of 23 passes for 212 yards with five touchdowns and no interceptions in the Ravens' 42-21 win over the Jets on Thursday. He also rushed eight times for 86 yards -- breaking Michael Vick's single-season rushing record for a quarterback in the process -- and committed a fumble but recovered.",
    "analysis": "Jackson couldn't have drawn up a better script for his milestone night, as he also tied his career high with his five touchdown tosses in addition to surpassing Vick for the rushing mark. Just as impressive was the fact all five of Jackson's scoring throws went to different pass catchers -- Miles Boykin (five yards), Mark Andrews (one yard), Marquise Brown (24 yards), Seth Roberts (33 yards) and Mark Ingram (10 yards). Jackson has now thrown five touchdown passes on three separate occasions in what has been a stellar sophomore campaign, while his rushing tally Thursday pushed his season total to an eye-popping 1,103 yards on the ground. Jackson lines up for another start a week from Sunday in a Week 16 divisional matchup versus the Browns, but Ian Rapoport of NFL Network reported earlier Thursday that Robert Griffin III, who saw action late against the Jets, is expected to start Week 17 versus the Steelers if Baltimore has locked up its playoff seeding by that point.",
    "timestamp": "2019-12-12 08:51 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [33.56, 30.88, 21.28, 26.48, 14.44, 30.64, 23.32, 'BYE', 28.62, 33.42, 33.48, 36.26, 22.3, 20.8, 37.08]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.3, 24.6, 18.1, 23.7, 25.3, 21.9, 17.6, 'BYE', 21.5, 24.6, 20.6, 21.5, 20.4, 18.1, 26.0, 28.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3122840.png",
    "name": "Deshaun Watson",
    "depthchart": "Starter: QB-1",
    "team": "Houston Texans",
    "projected": 27.8,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "at ",
    "opp_rank_Pos": 30,
    "team_rank_Neu": 11,
    "avg_fp2": 23.17,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 21.81,
    "fanduelSalary": "$8600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#03202F",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(3, 32, 47, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/hou.png",
    "headlineNews": "Two touchdown passes in win",
    "report": "Watson completed 19 of 27 attempts for 243 yards with two touchdowns and two interceptions in the Texans' 24-21 win over the Titans on Sunday. He also rushed seven times for 32 yards and committed one fumble, which was recovered.",
    "analysis": "Despite the mistakes, Watson turned in an admirable performance in what was a critical late-season road divisional matchup. The third-year quarterback's two touchdown passes somewhat curiously went to Kenny Stills, who was back in the No. 3 receiver role with Will Fuller back from a hamstring injury. Watson has multiple scoring tosses in three of his last four games, the first time he's had such a stretch this season. He now has matched last season's 26:9 TD:INT and will look to keep the Texans marching toward a possible division title in a Week 16 interconference showdown with the Buccaneers on Saturday.",
    "timestamp": "2019-12-15 02:11 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [31.72, 12.86, 25.84, 11.6, 41.74, 33.4, 17.52, 27.76, 19.74, 'BYE', 4.96, 19.92, 28.36, 30.08, 18.92]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.7, 18.4, 19.8, 19.5, 20.2, 19.6, 21.1, 27.6, 21.8, 'BYE', 20.4, 21.2, 17.2, 15.7, 23.7, 27.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/5529.png",
    "name": "Philip Rivers",
    "depthchart": "Starter: QB-1",
    "team": "Los Angeles Chargers",
    "projected": 25.3,
    "opponent": "Oakland Raiders",
    "home_away": "",
    "opp_rank_Pos": 27,
    "team_rank_Pos": 5,
    "avg_fp2": 16.33,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 22.09,
    "fanduelSalary": "$7500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0080C6",
    "tmColorDark": "#002A5E",
    "tmColorLite_rgba": "rgba(0, 128, 198, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 94, 0.2)",
    "tmTextLite": "#0080C6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lac.png",
    "headlineNews": "Commits four turnovers",
    "report": "Rivers completed 28 of 39 pass attempts for 307 yards, one touchdown and three interceptions Sunday against the Vikings. He also lost a fumble.",
    "analysis": "Rivers threw an interception in the second quarter before losing a fumble -- which was returned for a touchdown -- on the very next drive. He also threw interceptions in his final two possessions of the game as his team suffered one of its worst defeats in recent memory. Rivers is among the league leaders in passing yards, but his 21:18 TD:INT leaves a lot to be desired. The veteran was coming off an excellent performance in his previous outing and will look to bounce back next Sunday against the Raiders.",
    "timestamp": "2019-12-15 07:38 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [24.92, 11.92, 19.62, 20.4, 6.14, 16.8, 21.16, 11.04, 11.76, 13.28, 18.12, 'BYE', 17.6, 24.56, 11.28]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [19.0, 17.3, 19.7, 24.5, 18.2, 13.9, 13.9, 16.3, 15.8, 19.5, 20.6, 'BYE', 15.7, 12.1, 15.6, 25.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3924327.png",
    "name": "Drew Lock",
    "depthchart": "Starter: QB-1",
    "team": "Denver Broncos",
    "projected": 22.1,
    "opponent": "Detroit Lions",
    "home_away": "",
    "opp_rank_Pos": 31,
    "team_rank_Neg": 30,
    "avg_fp2": 15.45,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 21.44,
    "fanduelSalary": "$7300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e17757",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(225, 119, 87, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#e17757",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/den.png",
    "headlineNews": "Struggles in homecoming",
    "report": "Lock completed 18 of 40 passes for 208 yards and an interception during Sunday's 23-3 loss in Kansas City. He added three yards on two carries.",
    "analysis": "Lock's return to Missouri wasn't particularly welcoming as snow covered the field and the Chiefs' pass rush routinely got to the rookie passer before he was able to find an open target. The Missouri product had a nice 43-yard pass to fellow rookie Noah Fant to convert a second-quarter fourth-and-short, but Denver's receivers were otherwise unable to get open downfield before Lock was swarmed. That pressure led to Lock throwing a very ill-advised cross-field interception in the red zone in the third quarter. Lock has been good for a boneheaded play or two in each of his first three starts, but he's also shown flashes of promise in each. He probably isn't worth placing on your radar yet, but he does get a much better matchup Sunday at home against the Lions.",
    "timestamp": "2019-12-15 04:32 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 13.86, 24.86, 7.62]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 11.4, 15.0, 18.2, 22.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14881.png",
    "name": "Russell Wilson",
    "depthchart": "Starter: QB-1",
    "team": "Seattle Seahawks",
    "projected": 21.9,
    "opponent": "Arizona Cardinals",
    "home_away": "",
    "opp_rank_Pos": 32,
    "team_rank_Neu": 10,
    "avg_fp2": 21.75,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 23.88,
    "fanduelSalary": "$8300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#69BE28",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(105, 190, 40, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#69BE28",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
    "headlineNews": "Back on track with win",
    "report": "Wilson completed 20 of 26 passes for 286 yards and two touchdowns in Sunday's 30-24 win over the Panthers.",
    "analysis": "After throwing an interception in four straight games and rounding out at 7.3 yards per attempt in that stretch, Wilson produced a clean performance against the Panthers, registering 11.0 YPA and completing 76.9 percent of his passes -- his highest marks since Week 5. Wilson rediscovered his chemistry with Tyler Lockett as well, connecting with the wideout eight times for 120 yards and a score, and he spread the ball out to seven other receivers. Fantasy owners should feel comfortable about deploying Wilson in Week 16 against the Cardinals, which allow a league-worst 294.2 passing yards per game.",
    "timestamp": "2019-12-15 01:19 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [16.64, 24.2, 41.34, 14.3, 29.92, 28.9, 15.34, 15.68, 41.22, 17.58, 'BYE', 10.5, 17.9, 11.6, 19.34]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [19.5, 20.1, 18.7, 25.8, 12.5, 20.9, 17.3, 27.5, 24.3, 19.0, 'BYE', 22.4, 20.1, 20.6, 19.5, 21.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3139477.png",
    "name": "Patrick Mahomes",
    "depthchart": "Starter: QB-1",
    "team": "Kansas City Chiefs",
    "projected": 20.5,
    "opponent": "Chicago Bears",
    "home_away": "at ",
    "opp_rank_Neu": 13,
    "team_rank_Pos": 3,
    "avg_fp2": 21.21,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 14.73,
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
    "headlineNews": "Unfazed by snowy conditions",
    "report": "Mahomes completed 27 of 34 passes for 340 yards, two touchdowns and an interception during Sunday's 23-3 win over Denver. He added 11 yards on three carries.",
    "analysis": "Sunday's conditions were wet and sloppy as snow moved through Arrowhead Stadium throughout the game. Coupled with a dinged-up hand, Mahomes could have been excused if he put together a clunker against the Broncos, but he put aside any such notions early with a 41-yard dart for a touchdown to Tyreek Hill to cap the Chiefs' opening drive. The junior passer routinely bought time during the game and found his weapons over the middle. He actually put together his second-best completion percentage of the season despite the muck. Next up is a Bears defense that entered the week eighth-best in the league in opponent passer rating at 86.1.",
    "timestamp": "2019-12-15 01:36 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [27.32, 31.62, 27.86, 18.0, 18.54, 19.82, 7.24, 'DNP', 'DNP', 29.84, 16.18, 'BYE', 19.5, 14.92, 23.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [20.9, 21.0, 22.8, 27.2, 24.3, 25.3, 19.0, 'DNP', 'DNP', 22.9, 19.5, 'BYE', 21.0, 19.2, 21.3, 20.5]
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
    "opponent": "Seattle Seahawks",
    "home_away": "at ",
    "opp_rank_Pos": 29,
    "team_rank_Neg": 24,
    "avg_fp2": 19.6,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 18.29,
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
    "headlineNews": "Tosses touchdown in win",
    "report": "Murray completed 19 of 25 passes for 219 yards, a touchdown and an interception in Sunday's 38-24 win over the Browns. He also rushed eight times for 56 yards.",
    "analysis": "Murray rebounded well from last week's three-interception outing, getting Arizona out to a 14-0 lead early on. Although he subsequently threw an interception, the rookie responded with a six-yard touchdown pass to cap his next drive. Murray's wheels were also on display Sunday as he ripped off a season-long 35-yard rush during the first half. Overall, it was a solid bounce-back effort, but Murray's final two matchups -- at the Seahawks and at the Rams -- could pose a challenge to close the campaign.",
    "timestamp": "2019-12-15 04:58 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [24.62, 18.36, 19.82, 17.34, 24.32, 28.8, 6.96, 10.1, 25.04, 27.76, 26.7, 'BYE', 14.32, 12.96, 17.36]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.6, 14.4, 14.2, 19.5, 17.1, 21.9, 16.1, 19.5, 11.8, 19.9, 10.8, 'BYE', 15.6, 19.3, 19.2, 20.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14880.png",
    "name": "Kirk Cousins",
    "depthchart": "Starter: QB-1",
    "team": "Minnesota Vikings",
    "projected": 19.9,
    "opponent": "Green Bay Packers",
    "home_away": "",
    "opp_rank_Neu": 22,
    "team_rank_Neu": 12,
    "avg_fp2": 17.46,
    "opp_rank_allowed_fp2_Neu": 7,
    "opp_avg_allowed_fp2": 14.88,
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
    "headlineNews": "Quiet in blowout victory",
    "report": "Cousins completed 19 of 25 pass attempts for 207 yards, one touchdown, and one interception Sunday against the Chargers, adding 14 rushing yards in the 39-10 victory.",
    "analysis": "Cousins completed 76 percent of his passes while his team's defense and rushing attack allowed him to take a risk-averse approach. He averaged 8.3 yards per attempt and threw a one-yard touchdown pass to Irv Smith on the opening possession, but the lopsided nature of the game limited the necessity to pass. Next Monday's game against the Packers should be much more competitive, and with Dalvin Cook (shoulder) potentially sidelined, Cousins could be asked to throw early and often.",
    "timestamp": "2019-12-15 07:49 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.32, 10.9, 12.56, 7.32, 20.54, 28.32, 29.18, 11.6, 21.3, 21.3, 22.86, 'BYE', 18.04, 13.58, 12.68]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [20.0, 16.9, 18.4, 13.1, 12.0, 12.2, 17.6, 18.2, 16.4, 19.8, 13.5, 'BYE', 13.5, 19.6, 15.1, 19.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2969939.png",
    "name": "Jameis Winston",
    "depthchart": "Starter: QB-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 19.8,
    "opponent": "Houston Texans",
    "home_away": "",
    "opp_rank_Pos": 28,
    "team_rank_Pos": 1,
    "avg_fp2": 21.99,
    "opp_rank_allowed_fp2_Pos": 30,
    "opp_avg_allowed_fp2": 21.93,
    "fanduelSalary": "$8400",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Thumb",
    "tmColorLite": "#D50A0A",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(213, 10, 10, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#D50A0A",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Limited by fractured thumb",
    "report": "Winston (thumb/knee) was a limited participant in Tuesday's practice, Carmen Vitali of the Buccaneers' official site reports.",
    "analysis": "Winston may be \"limited\" to open Week 16, but he appeared anything but in the Buccaneers' 38-17 victory over the Lions this past weekend. While playing without any significant protection on his fractured right thumb, Winston completed 28 of 42 attempts for a season-high 458 yards and four touchdowns, with his 221 first-quarter yards representing the most by any quarterback since 2004. Per Rick Stroud of the Tampa Bay Times, Winston didn't throw in the portion of Tuesday's practice open to the media, but signal-caller will likely resume doing so in the Buccaneers' final session of the week Thursday. Winston appears in little danger of missing Saturday's game against the Texans.",
    "timestamp": "2019-12-17 01:59 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.06, 13.22, 26.5, 30.3, 17.46, 19.1, 'BYE', 23.34, 20.2, 20.32, 18.82, 26.32, 10.72, 37.74, 33.72]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [20.1, 18.6, 19.1, 12.8, 17.9, 18.9, 'BYE', 17.3, 24.5, 22.0, 19.5, 15.9, 20.5, 20.0, 15.5, 19.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3917792.png",
    "name": "Daniel Jones",
    "depthchart": "Starter: QB-1",
    "team": "New York Giants",
    "projected": 19.2,
    "opponent": "Washington Redskins",
    "home_away": "at ",
    "opp_rank_Neu": 12,
    "team_rank_Neu": 20,
    "avg_fp2": 16.37,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 18.57,
    "fanduelSalary": "$7300",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Ankle",
    "tmColorLite": "#A71930",
    "tmColorDark": "#0B2265",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(11, 34, 101, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png",
    "headlineNews": "Eyeing Week 16 return",
    "report": "Coach Pat Shurmur stated Monday that the Giants will proceed with the expectation that Jones (ankle) will be ready to start Week 16 in Washington, but a decision on the rookie's status will be made based on how he progresses as the week rolls along, Ralph Vacchiano of SportsNet New York reports. \"We'll just have to see. We'll just push him along like we did last week. We started [last] week with the idea he might be ready to play. We'll do the same this week,\" Shurmur said.",
    "analysis": "In other words, the Giants aren't viewing Jones as a shutdown candidate, even with the team sitting at 3-11 and having little to gain by rushing the rookie first-round pick back into action. Jones never advanced beyond limited participation in practice last week before being ruled out two days ahead of Sunday's win over the Dolphins, so he'll probably need to put in a full workout or two during the current week for the Giants to sign off on his availability. Per Art Stapleton of The Bergen Record, Shurmur said Monday that it would be \"overthinking it a little bit\" for the Giants to give the third option on the depth chart, Alex Tanney, work under center for either of the final two games, so Eli Manning would be in position for a third straight start if Jones fails to gain clearance this week.",
    "timestamp": "2019-12-16 09:54 AM",
    "week01": -0.82,
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [-0.82, 'DNP', 36.24, 14.3, 11.48, 8.24, 11.42, 28.18, 12.8, 32.32, 'BYE', 14.7, 11.2, 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.2, 'DNP', 12.9, 18.3, 17.4, 13.5, 13.1, 10.0, 17.3, 17.3, 'BYE', 14.7, 19.0, 'DNP', 'DNP', 19.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14876.png",
    "name": "Ryan Tannehill",
    "depthchart": "Starter: QB-1",
    "team": "Tennessee Titans",
    "projected": 18.9,
    "opponent": "New Orleans Saints",
    "home_away": "",
    "opp_rank_Neu": 17,
    "team_rank_Neu": 21,
    "avg_fp2": 18.86,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 19.18,
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
    "headlineNews": "Second-half rally falls short",
    "report": "Tannehill completed 22 of 36 pass attempts for 279 yards, while throwing two touchdowns and one interception during Sunday's 24-21 loss to Houston. He also logged 10 yards and a rushing touchdown on three carries.",
    "analysis": "Tennessee fell into a 14-0 deficit before halftime, but Tannehill orchestrated a furious comeback for the Titans, leading back-to-back touchdown drives to open up the third quarter and knot the score up at 14-14. The ultimate 24-21 defeat is damaging to Tennesee's playoff hopes, but Tannehill continued to deliver for fantasy GMs by cashing in with multiple TDs for the eighth consecutive outing. By compiling 21 second-half points, Tennessee also tied the 1996-97 Packers for second all-time in NFL history with six consecutive outings of 20-plus second-half points. In addition to the proficient scoring production, Tannehill has accounted for 285.3 scrimmage yards per game across eight starts this season. His upside remains high for Week 16, taking on a New Orleans defense that ranks bottom 10 in the NFL with 1.8 passing TDs allowed per game.",
    "timestamp": "2019-12-15 02:23 PM",
    "week01": -0.2,
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": 5.36,
    "week07": 20.18,
    "week08": 19.42,
    "week09": 25.04,
    "week10": 18.94,
    "week11": "BYE",
    "week12": 32.36,
    "week13": 13.78,
    "week14": 28.54,
    "week15": 25.16,
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [-0.2, 'DNP', 'DNP', 'DNP', 'DNP', 5.36, 20.18, 19.42, 25.04, 18.94, 'BYE', 32.36, 13.78, 28.54, 25.16]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.8, 'DNP', 'DNP', 'DNP', 'DNP', 0.1, 12.2, 18.8, 11.7, 19.5, 'BYE', 14.7, 11.8, 15.7, 19.5, 18.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4038524.png",
    "name": "Gardner Minshew",
    "depthchart": "Starter: QB-1",
    "team": "Jacksonville Jaguars",
    "projected": 18.7,
    "opponent": "Atlanta Falcons",
    "home_away": "at ",
    "opp_rank_Neu": 23,
    "team_rank_Neu": 14,
    "avg_fp2": 16.58,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 21.69,
    "fanduelSalary": "$6800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#006778",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 103, 120, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#006778",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/jax.png",
    "headlineNews": "Leads comeback win in Oakland",
    "report": "Minshew completed 17 of 29 passes for 201 yards and two touchdowns in Sunday's 20-16 win over the Raiders. He also gained 27 rushing yards on five carries.",
    "analysis": "The Jaguars didn't score a TD through the first three quarters, but Minshew played hero by finding Chris Conley twice in the end zone over the final 5:15 to rally the club from a 16-6 deficit. While the rookie QB hasn't been particularly sharp since regaining the starting job, he does have a 3:0 TD:INT over the last two games. Minshew and the Jacksonville passing game get a favorable matchup in Week 16 on the road against the Falcons.",
    "timestamp": "2019-12-15 05:14 PM",
    "week01": 18.6,
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
    "week13": 13.68,
    "week14": 13.58,
    "week15": 18.74,
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [18.6, 16.12, 17.96, 16.72, 21.16, 5.62, 23.0, 23.96, 9.76, 'BYE', 'DNP', 'DNP', 13.68, 13.58, 18.74]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.6, 15.4, 15.4, 9.3, 13.3, 19.5, 22.7, 13.5, 22.9, 'BYE', 'DNP', 'DNP', 6.4, 17.5, 15.5, 18.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/11237.png",
    "name": "Matt Ryan",
    "depthchart": "Starter: QB-1",
    "team": "Atlanta Falcons",
    "projected": 18.4,
    "opponent": "Jacksonville Jaguars",
    "home_away": "",
    "opp_rank_Neu": 14,
    "team_rank_Pos": 4,
    "avg_fp2": 19.3,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 19.27,
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
    "headlineNews": "Tosses two TDs during Week 15 win",
    "report": "Ryan completed 25 of 39 pass attempts for 210 yards and two touchdowns during Sunday's 29-22 win against San Francisco. He also registered 27 rushing yards on five carries.",
    "analysis": "Taking on a San Francisco secondary that came into Week 15 without the services of both Richard Sherman (hamstring) and K'Waun Williams (concussion), the 2016 MVP posted another solid fantasy performance. Since being held to fewer than 185 passing yards in both his seventh and eighth outings of the year, Ryan has averaged 283.4 passing yards per game while notching a 7:3 TD:INT and leading his team to a 3-2 record. Week 16 presents a matchup against a Jacksonville defense that has surrendered 255-plus passing yards in four consecutive games while conceding a 7:0 TD:INT since Week 12.",
    "timestamp": "2019-12-15 05:34 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [20.56, 22.1, 23.46, 15.68, 34.9, 30.94, 3.56, 'DNP', 'BYE', 15.58, 16.44, 8.64, 18.58, 21.32, 19.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.2, 22.1, 14.7, 20.9, 16.0, 17.7, 18.0, 'DNP', 'BYE', 12.6, 15.3, 22.0, 17.4, 16.6, 13.5, 18.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2578570.png",
    "name": "Jacoby Brissett",
    "depthchart": "Starter: QB-1",
    "team": "Indianapolis Colts",
    "projected": 17.5,
    "opponent": "Carolina Panthers",
    "home_away": "",
    "opp_rank_Neu": 16,
    "team_rank_Neg": 27,
    "avg_fp2": 15.83,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 16.53,
    "fanduelSalary": "$7500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#014683",
    "tmColorDark": "#002C5F",
    "tmColorLite_rgba": "rgba(1, 70, 131, 0.2)",
    "tmColorDark_rgba": "rgba(0, 44, 95, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png",
    "headlineNews": "Rough game versus Saints",
    "report": "Brissett completed 18 of 34 passes for 165 yards in Monday night's 34-7 loss to the Saints.",
    "analysis": "Brissett endured a lackluster showing, not leading the Colts to any points until their final offensive drive of the game. The signal-caller's 4.9 yards per attempt marked a season low, and Brissett has now thrown for under 175 yards in three of his last five outings. He's also managed just four passing touchdowns versus three interceptions over that span, and although top wideout T.Y. Hilton was missing most of that time, Brissett's stock has taken a hit ahead of Week 16's matchup against the Panthers.",
    "timestamp": "2019-12-16 08:29 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [16.5, 17.34, 20.8, 23.5, 11.94, 'BYE', 27.64, 9.48, 2.76, 'DNP', 16.12, 13.16, 14.66, 24.64, 7.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.1, 13.1, 21.8, 15.1, 12.6, 'BYE', 16.8, 11.5, 14.9, 'DNP', 13.8, 19.2, 17.7, 12.0, 14.9, 17.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2577417.png",
    "name": "Dak Prescott",
    "depthchart": "Starter: QB-1",
    "team": "Dallas Cowboys",
    "projected": 16.6,
    "opponent": "Philadelphia Eagles",
    "home_away": "at ",
    "opp_rank_Neu": 18,
    "team_rank_Pos": 2,
    "avg_fp2": 22.13,
    "opp_rank_allowed_fp2_Neu": 14,
    "opp_avg_allowed_fp2": 17.59,
    "fanduelSalary": "$8000",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Finger",
    "tmColorLite": "#7F9695",
    "tmColorDark": "#041E42",
    "tmColorLite_rgba": "rgba(127, 150, 149, 0.2)",
    "tmColorDark_rgba": "rgba(4, 30, 66, 0.2)",
    "tmTextLite": "#7F9695",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
    "headlineNews": "Has 'little' finger injury",
    "report": "Coach Jason Garrett said Monday that Prescott is playing through \"a little injury to his (right) index finger,\" Todd Archer of ESPN.com reports.",
    "analysis": "During the Fox broadcast of Sunday's 44-21 smackdown of the Rams, analyst Troy Aikman said Prescott had a \"hairline fracture on the top of\" the finger in question. Aikman was referencing one of the injuries (also a sprained left hand) he sustained in a Week 14 loss at Chicago. According to Archer and Calvin Watkins of The Dallas Morning News, Prescott does not have a fracture. Instead, Prescott's right index finger was smashed against the Bears, and there's a lot of residual bleeding under the skin on the top of that finger. He had the tip of it taped this past Sunday, completing 15 of 23 passes for 212 yards, two touchdowns and no interceptions while incurring no sacks. The 23 attempts marked a season low as the backfield duo of Ezekiel Elliott and Tony Pollard compiled 36 combined carries, with Prescott adding seven himself.",
    "timestamp": "2019-12-16 04:09 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [33.4, 28.66, 23.54, 8.62, 26.22, 18.18, 21.56, 'BYE', 22.48, 26.88, 31.56, 7.88, 25.7, 17.46, 17.68]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.3, 17.9, 24.1, 18.8, 17.5, 15.3, 19.1, 'BYE', 16.9, 15.6, 15.4, 16.9, 16.2, 17.5, 20.7, 16.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116188.png",
    "name": "David Blough",
    "depthchart": "Starter: QB-1",
    "team": "Detroit Lions",
    "projected": 16.5,
    "opponent": "Denver Broncos",
    "home_away": "at ",
    "opp_rank_Neu": 10,
    "team_rank_Neu": 8,
    "avg_fp2": 12.93,
    "opp_rank_allowed_fp2_Neu": 9,
    "opp_avg_allowed_fp2": 15.61,
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
    "headlineNews": "Mistake-prone showing in defeat",
    "report": "Blough completed 24 of 43 passes for 260 yards with no touchdowns and two interceptions in the Lions 38-17 loss to the 49ers on Sunday. He also rushed five times for 19 yards and committed a fumble but managed to recover it.",
    "analysis": "The rookie did the best he could under the circumstances, as he was playing without Marvin Jones (IR, ankle) in the receiving corps and without the benefit of Bo Scarbrough (ribs) in the backfield to help keep the defense honest. Blough unsurprisingly relied heavily on Danny Amendola, with whom he connected on eight occasions for 102 yards. Blough's ability to produce fantasy-friendly production during what will be championship weekend in many leagues will be compromised by his unfriendly Week 16 road matchup versus the Broncos.",
    "timestamp": "2019-12-15 02:54 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 18.3, 10.2, 10.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 12.9, 15.6, 13.6, 16.5]
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
    "opponent": "Miami Dolphins",
    "home_away": "at ",
    "opp_rank_Pos": 24,
    "team_rank_Neu": 22,
    "avg_fp2": 14.88,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 21.87,
    "fanduelSalary": "$7100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#ea7330",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(234, 115, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#ea7330",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png",
    "headlineNews": "Throws four picks in loss",
    "report": "Dalton completed 17 of 31 passes for 151 yards, a touchdown and four interceptions during Sunday's 34-13 loss to the Patriots.",
    "analysis": "Dalton kept pace with the Patriots early in the first quarter, tossing a quick eight-yard strike to Cethan Carter to respond to New England's game-opening touchdown. Dalton then led a field-goal drive that gave Cincinnati a brief lead. It was downhill from there as he proceeded to throw three interceptions during his first four drives of the second half and four overall, including a grisly 64-yard pick six to Stephon Gilmore. The veteran passer has just two touchdowns and five interceptions in three-games since returning to the starting lineup. Next week's matchup against the Dolphins will have draft-position implications that may help determine the heir apparent to Dalton in Cincinnati.",
    "timestamp": "2019-12-15 03:34 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [20.72, 19.64, 16.06, 4.64, 18.98, 14.6, 21.34, 17.66, 'BYE', 'DNP', 'DNP', 'DNP', 13.32, 10.58, 6.14]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.4, 12.6, 13.2, 17.1, 14.3, 14.6, 16.9, 12.3, 'BYE', 'DNP', 'DNP', 'DNP', 19.1, 13.5, 17.0, 16.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3052587.png",
    "name": "Baker Mayfield",
    "depthchart": "Starter: QB-1",
    "team": "Cleveland Browns",
    "projected": 16.0,
    "opponent": "Baltimore Ravens",
    "home_away": "",
    "opp_rank_Neu": 7,
    "team_rank_Neu": 19,
    "avg_fp2": 15.29,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 13.47,
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
    "headlineNews": "Inconsistent against Arizona",
    "report": "Mayfield completed 30 of 43 passes for 247 yards, two touchdowns and an interception in Sunday's 38-24 loss to the Cardinals.",
    "analysis": "Mayfield started off well, marching the Browns into the red zone, but then overthrew Odell Beckham for an interception in the end zone to close Cleveland's first drive. From there, Mayfield continued his inconsistent play, though he at least tossed a couple touchdowns during the second half. Although both of those went to tight end Ricky Seals-Jones from within two yards, Mayfield salvaged some production in an otherwise uninspiring outing. Next up for the signal-caller is a home matchup against a Ravens defense that's significantly improved since surrendering Mayfield's season high of 342 passing yards in Week 4.",
    "timestamp": "2019-12-15 05:08 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.4, 16.0, 10.7, 16.78, 0.0, 24.46, 'BYE', 12.56, 17.12, 17.62, 21.82, 24.58, 9.04, 12.98, 17.98]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [20.1, 12.7, 18.3, 16.1, 12.2, 15.6, 'BYE', 12.9, 17.5, 12.0, 19.8, 25.9, 19.5, 17.9, 16.9, 16.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2573079.png",
    "name": "Carson Wentz",
    "depthchart": "Starter: QB-1",
    "team": "Philadelphia Eagles",
    "projected": 15.6,
    "opponent": "Dallas Cowboys",
    "home_away": "",
    "opp_rank_Neu": 8,
    "team_rank_Neu": 16,
    "avg_fp2": 17.92,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 16.87,
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
    "headlineNews": "More late-game heroics",
    "report": "Wentz completed 30 of 43 passes for 266 yards and three touchdowns in Sunday's 37-27 win over the Redskins. He added three carries for nine yards and fumbled three times, losing one.",
    "analysis": "Wentz's first touchdown came on a beautiful throw to running back Miles Sanders in the back corner of the end zone from 15 yards out, and his second was a two-yarder to a wide open Zach Ertz. The latter gave Philadelphia a 24-21 lead with 10 minutes to play, but Washington answered with a field goal before forcing a critical Wentz fumble on the ensuing possession. After the Redskins turned that fumble into another three points to take the lead, Wentz took over with under five minutes left and drove the offense down the field to win it, capping the drive with a four-yard touchdown to Greg Ward with 26 seconds remaining. Philadelphia's defense added a touchdown on the final play to round out the scoring. After a pair of narrow escapes against the NFC East's two bottom-dwellers, Wentz will lead the Eagles into a Week 16 home matchup against Dallas with the division lead on the line.",
    "timestamp": "2019-12-15 01:47 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [25.02, 21.54, 21.66, 19.7, 12.06, 21.54, 7.84, 14.38, 15.06, 'BYE', 12.26, 10.94, 27.4, 19.9, 21.54]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.3, 18.8, 15.9, 10.7, 18.6, 10.2, 15.9, 13.8, 14.1, 'BYE', 16.7, 21.0, 20.0, 17.9, 10.8, 15.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/8664.png",
    "name": "Ryan Fitzpatrick",
    "depthchart": "Starter: QB-1",
    "team": "Miami Dolphins",
    "projected": 15.5,
    "opponent": "Cincinnati Bengals",
    "home_away": "",
    "opp_rank_Neu": 15,
    "team_rank_Neu": 23,
    "avg_fp2": 15.35,
    "opp_rank_allowed_fp2_Pos": 24,
    "opp_avg_allowed_fp2": 20.16,
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
    "headlineNews": "Takes over team rushing lead",
    "report": "Fitzpatrick completed 23 of 41 passes for 279 yards and two touchdowns in Sunday's 36-20 loss to the Giants. He added four carries for 33 yards and lost a fumble.",
    "analysis": "Fitzpatrick heated up in the second quarter, capping a string of seven consecutive completions with a 20-yard touchdown to DeVante Parker to open the scoring. He cooled right back down after that, however, failing to notch another touchdown until he found Parker again for a 29-yard score with less than two minutes remaining in the game. The veteran quarterback also remarkably took over as Miami's leading rusher for the season with 219 yards, as he's done his fair share of scrambling while the Dolphins haven't been able to settle on a lead option at the running back position. Coach Brian Flores confirmed after the game that Fitzpatrick will remain the starter when the Dolphins host the Bengals in Week 16.",
    "timestamp": "2019-12-15 02:42 PM",
    "week01": 11.2,
    "week02": 1.16,
    "week03": 1.16,
    "week04": "DNP",
    "week05": "BYE",
    "week06": 9.78,
    "week07": 21.58,
    "week08": 13.3,
    "week09": 23.72,
    "week10": 14.06,
    "week11": 12.92,
    "week12": 25.06,
    "week13": 29.8,
    "week14": 15.3,
    "week15": 20.46,
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.2, 1.16, 1.16, 'DNP', 'BYE', 9.78, 21.58, 13.3, 23.72, 14.06, 12.92, 25.06, 29.8, 15.3, 20.46]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.9, 12.3, 3.7, 'DNP', 'BYE', 4.5, 12.7, 12.3, 15.2, 14.2, 10.6, 16.3, 10.8, 11.7, 13.6, 15.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2330.png",
    "name": "Tom Brady",
    "depthchart": "Starter: QB-1",
    "team": "New England Patriots",
    "projected": 15.4,
    "opponent": "Buffalo Bills",
    "home_away": "",
    "opp_rank_Neg": 3,
    "team_rank_Neu": 9,
    "avg_fp2": 17.02,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 13.45,
    "fanduelSalary": "$7400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#C60C30",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png",
    "headlineNews": "Tosses two touchdowns in win",
    "report": "Brady completed 15 of 29 passes for 128 yards and two touchdowns during Sunday's 34-13 win over the Bengals.",
    "analysis": "Much has been made this season about Brady's lack of trust in his receivers, but the veteran passer sure continues to have faith in running back James White, who took a flip out into the flat for a 23-yard touchdown to cap New England's opening drive. With a suffocating defensive performance and strong ground game, Brady didn't have to do much else down the stretch. A nice, efficient performance was a welcome sight, but Brady is still in the middle of arguably the biggest statistical rut of his career. He hasn't reached a 56 percent completion percentage in six of his last seven games, has been held under 200 yards in three of his last four games, and hasn't had a quarterback rating of 100 or above since Week 5. That streak may well extend Sunday against a Bills defense that held Brady to 150 yards, no touchdowns and a pick in Week 4.",
    "timestamp": "2019-12-15 02:37 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [25.64, 24.66, 20.14, 4.7, 24.92, 22.96, 12.96, 18.36, 14.1, 'BYE', 8.54, 11.3, 25.34, 11.76, 12.92]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.1, 28.2, 20.8, 16.9, 18.5, 18.4, 17.7, 20.8, 14.1, 'BYE', 14.7, 18.2, 17.0, 20.4, 24.0, 15.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2580.png",
    "name": "Drew Brees",
    "depthchart": "Starter: QB-1",
    "team": "New Orleans Saints",
    "projected": 15.4,
    "opponent": "Tennessee Titans",
    "home_away": "at ",
    "opp_rank_Pos": 25,
    "team_rank_Neu": 7,
    "avg_fp2": 20.43,
    "opp_rank_allowed_fp2_Neu": 15,
    "opp_avg_allowed_fp2": 17.77,
    "fanduelSalary": "$8200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9b845c",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(155, 132, 92, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#9b845c",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
    "headlineNews": "Makes history on MNF",
    "report": "Brees completed 29 of 30 pass attempts for 307 yards and four touchdowns in the Saints' 34-7 win over the Colts on Monday.",
    "analysis": "Brees became the all-time passing touchdowns leader Monday, finishing the day with 541 scores to his credit -- two more than previous record-holder Peyton Manning. The historic 540th touchdown came on a five-yard strike to tight end Josh Hill midway through the third quarter. Brees also set the mark for completion percentage in a single game (96.7) on a healthy 30 attempts, adding another impressive note to his already prolific resume. The 40-year-old quarterback continues to dazzle with his accuracy and decision-making, and he sports a robust 21:4 TD:INT with a 75.8 percent completion rate in 2019. He'll face a tough test in Week 16 as the Saints travel to Tennessee to take on an upstart Titans defense.",
    "timestamp": "2019-12-16 08:26 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [21.8, 0.52, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 25.92, 'BYE', 11.48, 21.12, 23.44, 11.26, 40.06, 28.28]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [20.3, 18.2, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 19.4, 'BYE', 21.4, 17.6, 21.9, 16.6, 17.3, 22.8, 15.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/8439.png",
    "name": "Aaron Rodgers",
    "depthchart": "Starter: QB-1",
    "team": "Green Bay Packers",
    "projected": 15.0,
    "opponent": "Minnesota Vikings",
    "home_away": "at ",
    "opp_rank_Neu": 20,
    "team_rank_Neu": 17,
    "avg_fp2": 18.22,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 15.99,
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
    "headlineNews": "Held in check vs. Bears",
    "report": "Rodgers completed 16 of 33 pass attempts for 203 yards and one touchdown Sunday against the Bears. He also gained 23 yards on three carries in the 21-13 win.",
    "analysis": "Rodgers struggled mightily as he completed less than half his passes and averaged 6.2 yards per attempt. He connected early and often with Davante Adams, striking gold on a 29-yard touchdown connection in the first quarter, but the veteran quarterback played the role of game manager for much of the afternoon. This poor effort comes on the heels of a similar performance last week, and Rodgers has now failed to top the 250-yard mark in six straight games. The Vikings have been vulnerable in the secondary of late, so Rodgers could have a chance to bounce back in next Monday's matchup.",
    "timestamp": "2019-12-15 04:00 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.92, 14.36, 13.3, 26.48, 9.42, 19.32, 43.76, 27.1, 12.94, 10.02, 'BYE', 11.46, 28.12, 11.4, 14.42]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [21.7, 21.8, 15.1, 18.7, 19.0, 21.3, 24.7, 19.0, 15.5, 22.1, 'BYE', 14.1, 23.0, 23.7, 21.9, 15.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3918298.png",
    "name": "Josh Allen",
    "depthchart": "Starter: QB-1",
    "team": "Buffalo Bills",
    "projected": 14.8,
    "opponent": "New England Patriots",
    "home_away": "at ",
    "opp_rank_Neg": 2,
    "team_rank_Neg": 28,
    "avg_fp2": 20.05,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 11.07,
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
    "headlineNews": "Accounts for two scores in victory",
    "report": "Allen completed 13 of 25 pass attempts for 139 yards, a touchdown and an interception while adding 28 yards and a rushing touchdown on seven carries in Sunday's 17-10 win over Pittsburgh.",
    "analysis": "It was a classic Allen game from start to finish as he flashed inaccuracies while also making plays when it mattered with both his arm and legs to lead the team to another win. From a fantasy perspective, the strong-armed quarterback doesn't put up gaudy enough passing numbers to warrant \"must-start\" status, and he usually needs to make some noise with his legs -- as he did with a rushing touchdown Sunday -- to post a big line. Allen may struggle to post a big fantasy game against the tough Patriots defense next week in a Saturday matchup.",
    "timestamp": "2019-12-15 09:49 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [17.96, 22.22, 21.32, 11.72, 18.46, 'BYE', 21.28, 17.26, 17.6, 25.44, 33.84, 20.0, 23.54, 12.74, 17.36]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.3, 23.5, 21.4, 21.9, 7.0, 'BYE', 19.1, 14.4, 17.2, 20.8, 13.0, 18.8, 13.7, 11.4, 20.9, 14.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16760.png",
    "name": "Jimmy Garoppolo",
    "depthchart": "Starter: QB-1",
    "team": "San Francisco 49ers",
    "projected": 14.5,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank_Neu": 9,
    "team_rank_Neu": 13,
    "avg_fp2": 17.15,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 16.74,
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
    "headlineNews": "Suffers second loss in three weeks",
    "report": "Garoppolo completed 22 of 34 pass attempts for 200 yards and one touchdown during Sunday's 29-22 loss to Atlanta. He also registered six rushing yards on two carries.",
    "analysis": "Garoppolo and the 49ers dropped a second game in three weeks, this time in an upset defeat to the Falcons. The 28-year-old quarterback has been contained to 200 or fewer passing yards in two of his past three outings, with the 49ers being held under 23 points during each of those instances. In Garoppolo's other 12 appearances thus far in 2019, San Francisco has been held under 23 points on just two occasions, and he is averaging 240 passing yards per game. Garoppolo is liable to piece together an impressive stat sheet any given Sunday, but his odds are less than favorable with a Week 16 matchup against the Rams' top-10 pass defense awaiting on the docket.",
    "timestamp": "2019-12-15 06:25 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [13.44, 23.68, 11.38, 'BYE', 14.94, 13.12, 7.04, 14.0, 28.88, 13.02, 31.66, 18.22, 9.1, 29.06, 12.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.3, 11.1, 19.6, 'BYE', 15.6, 11.0, 13.3, 15.0, 16.7, 18.6, 15.7, 16.1, 9.7, 21.0, 19.2, 14.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3039707.png",
    "name": "Mitchell Trubisky",
    "depthchart": "Starter: QB-1",
    "team": "Chicago Bears",
    "projected": 14.2,
    "opponent": "Kansas City Chiefs",
    "home_away": "",
    "opp_rank_Neu": 11,
    "team_rank_Neg": 25,
    "avg_fp2": 15.24,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 17.88,
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
    "headlineNews": "Highest yardage total of 2019",
    "report": "Trubisky completed 29 of 53 passes for 348 yards, one touchdown and two interceptions while adding 29 yards on four carries in Chicago's 21-13 loss to Green Bay on Sunday.",
    "analysis": "Trubisky got off to a slow start, but with the Bears falling behind by double digits early in the second half, he was forced to throw on nearly every down, which allowed him to pad his stats while leaning heavily upon Allen Robinson and Anthony Miller, who each went over 100 yards. Although he came into this contest fresh off a pair of consecutive 300-yard performances, he's been held to one or fewer touchdowns in 11 of 13 starts, and he'll be a risky fantasy option in Week 16 in a home meeting against the Chiefs.",
    "timestamp": "2019-12-15 01:59 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.22, 5.6, 20.44, -1.64, 'DNP', 'BYE', 22.04, 8.12, 6.5, 19.72, 11.0, 20.92, 24.92, 33.06, 18.26]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.8, 11.3, 13.8, 14.3, 'DNP', 'BYE', 9.1, 15.4, 13.4, 10.8, 11.5, 15.4, 11.7, 17.4, 13.0, 14.2]
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
    "opponent": "Indianapolis Colts",
    "home_away": "at ",
    "opp_rank_Neu": 21,
    "team_rank_Neu": 18,
    "avg_fp2": 13.0,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 19.61,
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
    "headlineNews": "Slated to make pro debut Week 16",
    "report": "Grier is expected to get his first NFL start Sunday at Indianapolis, Ian Rapoport of NFL Network reports.",
    "analysis": "He'll take over for a struggling Kyle Allen, who has quarterbacked the Panthers during their current six-game losing streak. According to Jourdan Rodrigue of The Athletic, Grier has yet to receive first-team reps in practice, so the 2019 third-round pick will be leading the offense for the first time when Carolina takes the practice field Wednesday.",
    "timestamp": "2019-12-16 11:28 AM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 14.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4040616.png",
    "name": "Dwayne Haskins",
    "depthchart": "Starter: QB-1",
    "team": "Washington Redskins",
    "projected": 13.7,
    "opponent": "New York Giants",
    "home_away": "",
    "opp_rank_Pos": 26,
    "team_rank_Neg": 32,
    "avg_fp2": 9.05,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 21.01,
    "fanduelSalary": "$7000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#773141",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(119, 49, 65, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png",
    "headlineNews": "Two TDs not enough in loss",
    "report": "Haskins completed 19 of 28 passes for 261 yards and two touchdowns in Sunday's 37-27 loss to the Eagles. He also rushed four times for 26 yards and lost a fumble.",
    "analysis": "Haskins linked up with Terry McLaurin for a 75-yard touchdown in the first quarter before adding a five-yard touchdown to Steven Sims in the second. This game was closer than the final score suggests, as Washington led 27-24 with under five minutes remaining. Haskins got his team across the 50 after Philadelphia took a 31-27 lead, but he fumbled on the final play of the game and it was returned for a touchdown. The rookie quarterback will be looking for redemption against the Giants in Week 16 after throwing three interceptions without a touchdown in his first taste of NFL action at Metlife Stadium back in Week 4.",
    "timestamp": "2019-12-15 02:06 PM",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": 3.58,
    "week05": "DNP",
    "week06": "DNP",
    "week07": "DNP",
    "week08": 0.32,
    "week09": 7.16,
    "week10": "BYE",
    "week11": 20.06,
    "week12": 6.04,
    "week13": 6.48,
    "week14": 9.7,
    "week15": 19.04,
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 3.58, 'DNP', 'DNP', 'DNP', 0.32, 7.16, 'BYE', 20.06, 6.04, 6.48, 9.7, 19.04]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 7.0, 'DNP', 'DNP', 'DNP', 1.9, 9.0, 'BYE', 15.9, 19.7, 13.0, 13.0, 10.9, 13.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3912547.png",
    "name": "Sam Darnold",
    "depthchart": "Starter: QB-1",
    "team": "New York Jets",
    "projected": 13.7,
    "opponent": "Pittsburgh Steelers",
    "home_away": "",
    "opp_rank_Neg": 5,
    "team_rank_Neg": 29,
    "avg_fp2": 17.07,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 14.78,
    "fanduelSalary": "$7400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#125740",
    "tmColorDark": "#003f2d",
    "tmColorLite_rgba": "rgba(18, 87, 64, 0.2)",
    "tmColorDark_rgba": "rgba(0, 63, 45, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png",
    "headlineNews": "Pair of TDs in defeat",
    "report": "Darnold completed 18 of 32 passes for 218 yards with two touchdowns and one interception in the Jets' 42-21 loss to the Ravens on Thursday. He also rushed once for 11 yards and lost a fumble.",
    "analysis": "Darnold put together a serviceable fantasy night while playing under less-than-ideal circumstances against an aggressive Ravens defense. The second-year quarterback's two turnovers certainly didn't help the Jets' cause in a game in which they already faced long odds, but from a fantasy perspective, Darnold's fourth multi-touchdown effort over the last five games certainly had to please managers who rostered him in their playoff contests. Darnold will look to continue putting together a strong finish to his sophomore campaign in a Week 16 battle against the Steelers a week from Sunday.",
    "timestamp": "2019-12-12 09:34 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [15.0, 'DNP', 'DNP', 'BYE', 'DNP', 20.62, -2.66, 17.62, 13.5, 21.7, 26.42, 28.2, 10.46, 18.1, 18.82]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.4, 'DNP', 'DNP', 'BYE', 'DNP', 12.3, 10.8, 12.6, 19.5, 17.3, 12.6, 15.5, 16.2, 23.7, 14.4, 13.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16757.png",
    "name": "Derek Carr",
    "depthchart": "Starter: QB-1",
    "team": "Oakland Raiders",
    "projected": 12.2,
    "opponent": "Los Angeles Chargers",
    "home_away": "at ",
    "opp_rank_Neg": 4,
    "team_rank_Neu": 15,
    "avg_fp2": 14.94,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 14.15,
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
    "headlineNews": "Goes cold in second half",
    "report": "Carr completed 22 of 36 passes for 267 yards and a touchdown in Sunday's 20-16 loss to the Jaguars.",
    "analysis": "The Raiders seemed to have things well in hand when they took a 16-3 lead into halftime, but Carr couldn't get anything going in the second half as the team ultimately lost its final game in Oakland. The passing yards were actually his highest total since Week 11, and Carr could struggle to be even that productive in next Sunday's road game against a Chargers' defense that held him to 218 yards and one TD in their prior meeting this season.",
    "timestamp": "2019-12-15 05:39 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.56, 11.72, 16.68, 13.46, 7.96, 'BYE', 16.72, 23.4, 17.96, 13.12, 20.78, 5.18, 11.58, 20.22, 15.88]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.8, 12.6, 6.7, 17.9, 11.8, 'BYE', 12.0, 11.4, 21.1, 14.1, 22.3, 19.7, 17.2, 16.5, 17.7, 12.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3127051.png",
    "name": "Devlin Hodges",
    "depthchart": "Starter: QB-1",
    "team": "Pittsburgh Steelers",
    "projected": 10.7,
    "opponent": "New York Jets",
    "home_away": "at ",
    "opp_rank_Neu": 19,
    "team_rank_Neg": 31,
    "avg_fp2": 10.31,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 19.06,
    "fanduelSalary": "$6900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/pit.png",
    "headlineNews": "Remains starter",
    "report": "Hodges will remain the Steelers' starting quarterback for Sunday's game against the Jets, Missi Matthews of Pittsburgh's official site",
    "analysis": "After re-evaluating the Steelers' quarterback situation following the Week 15 loss to the Bills, coach Mike Tomlin determined that Hodges was a better option than Mason Rudolph, who turned in a 12:9 TD:INT and averaged 6.2 yards per attempt over nine outings (eight starts) earlier this season. Hodges' 5:6 TD:INT through six games (four starts) is worse than Rudolph's, but the undrafted rookie out of Samford has generally been the more efficient passer (67.8 completion percentage, 7.5 YPA). In any case, expect the Steelers to rely heavily on their ground attack in Week 16, assuming Pittsburgh isn't forced to play from behind against the 5-9 Jets.",
    "timestamp": "2019-12-17 09:12 AM",
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
    "week12": 8.82,
    "week13": 11.68,
    "week14": 13.48,
    "week15": 8.48,
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 9.08, 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 8.82, 11.68, 13.48, 8.48]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 12.2, 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 4.5, 16.6, 18.4, 11.1, 10.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3046779.png",
    "name": "Jared Goff",
    "depthchart": "Starter: QB-1",
    "team": "Los Angeles Rams",
    "projected": 8.1,
    "opponent": "San Francisco 49ers",
    "home_away": "at ",
    "opp_rank_Neg": 1,
    "team_rank_Pos": 6,
    "avg_fp2": 15.52,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 15.61,
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
    "headlineNews": "Salvages day in garbage time",
    "report": "Goff completed 33 of 51 passes for 284 yards and two touchdowns with one interception in Sunday's 44-21 loss to the Cowboys.",
    "analysis": "The quarterback was frankly awful to begin the game, consistently under or overthrowing his targets as the Rams fell into a 28-7 hole heading into halftime, but Goff was able to pile up some yards and an extra TD in the fourth quarter when the game was out of reach. He also banged his thumb on a helmet in the second quarter and appeared to be in some pain, but he stayed in the game and the issue didn't seem to make his accuracy any worse. Goff has tossed multiple TDs in three straight games and now sits only four yards shy of his second straight 4,000-yard campaign, but with the team all but eliminated from the postseason with this loss, personal milestones and the chance to play spoiler are all he has to play for in next Saturday's road clash with the 49ers.",
    "timestamp": "2019-12-15 06:07 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.44, 19.12, 16.16, 23.68, 18.9, 1.12, 25.02, 22.88, 'BYE', 5.72, 6.22, 6.38, 24.96, 18.12, 18.56]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.5, 21.5, 10.6, 17.6, 20.5, 10.4, 21.8, 21.2, 'BYE', 15.8, 14.6, 10.4, 14.1, 12.9, 16.6, 8.1]
                    }
                    
                    ]
               }
            }];




$scope.positionRB = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3929630.png",
    "name": "Saquon Barkley",
    "depthchart": "Starter: RB-1",
    "team": "New York Giants",
    "projected": 26.8,
    "opponent": "Washington Redskins",
    "home_away": "at ",
    "opp_rank_Pos": 28,
    "team_rank_Neu": 22,
    "avg_fp2": 14.27,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 24.44,
    "fanduelSalary": "$8800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#0B2265",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(11, 34, 101, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png",
    "headlineNews": "Delivers best game of season",
    "report": "Barkley rushed 24 times for 112 yards and two touchdowns while adding four catches for 31 yards on five targets in Sunday's 36-20 win over the Dolphins.",
    "analysis": "Barkley doubled his season rushing touchdown total, converting from one yard out in the third quarter and adding a 10-yard score six seconds into the fourth. He also topped 100 yards on the ground for the first time since Week 2. Barkley hasn't lived up to his billing as an early first-round pick in most fantasy drafts, but all will be forgiven if he continues to shine when it matters most in the fantasy playoffs. He had a potential third rushing score vultured by Javorius Allen with the game out of hand late, but Barkley nonetheless delivered his best performance of the season. The second-year running back will look to build on this effort when the Giants visit Washington in Week 16.",
    "timestamp": "2019-12-15 01:19 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [15.9, 21.0, 5.7, 'DNP', 'DNP', 'DNP', 15.5, 24.3, 12.5, 5.6, 'BYE', 7.0, 13.0, 8.2, 28.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [20.5, 18.0, 12.4, 'DNP', 'DNP', 'DNP', 13.5, 17.3, 16.3, 19.2, 'BYE', 14.7, 15.3, 17.8, 23.5, 26.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3051392.png",
    "name": "Ezekiel Elliott",
    "depthchart": "Starter: RB-1",
    "team": "Dallas Cowboys",
    "projected": 23.5,
    "opponent": "Philadelphia Eagles",
    "home_away": "at ",
    "opp_rank_Neg": 3,
    "team_rank_Pos": 6,
    "avg_fp2": 17.63,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 17.8,
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
    "headlineNews": "Huge game against Rams",
    "report": "Elliott carried the ball 24 times for 117 yards and two touchdowns and caught three of four targets for 43 yards in Sunday's 44-21 win over the Rams.",
    "analysis": "That's now back-to-back two-TD performances for Elliott, while the 160 scrimmage yards were a season high as he came through in a big way for those with fantasy shares in him. The fourth-year RB will look to keep rolling next Sunday in Philadelphia with a chance to lock up the NFC East title against an Eagles defense he gashed for 111 rushing yards and a score in Week 7.",
    "timestamp": "2019-12-15 06:39 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.8, 19.0, 14.9, 13.5, 16.1, 23.7, 23.7, 'BYE', 13.9, 7.3, 18.3, 14.6, 17.2, 22.3, 29.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [19.3, 16.8, 18.6, 11.0, 18.6, 15.2, 15.9, 'BYE', 18.0, 16.6, 21.0, 11.4, 17.8, 19.5, 20.9, 23.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116385.png",
    "name": "Joe Mixon",
    "depthchart": "Starter: RB-1",
    "team": "Cincinnati Bengals",
    "projected": 21.0,
    "opponent": "Miami Dolphins",
    "home_away": "at ",
    "opp_rank_Pos": 31,
    "team_rank_Neg": 27,
    "avg_fp2": 12.11,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 24.56,
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
    "headlineNews": "Rumbles for 156 yards",
    "report": "Mixon ran for 136 yards on 25 carries and added 20 yards on three catches during Sunday's 34-13 loss to the Patriots.",
    "analysis": "The Bengals' continued struggles in the passing game have paid dividends for Mixon. The Oklahoma product now has an unreal 342 total yards over his past two games and has topped 100 total yards in four of his last six games. He's far and away the most valuable member of the Bengals from a fantasy perspective. Though attention will be turned to the 2020 draft during Sunday's matchup against Miami, Mixon should enjoy a solid matchup against the league's 23rd-ranked run defense that surrenders 4.6 yards per carry.",
    "timestamp": "2019-12-15 04:21 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.7, 4.2, 16.5, 8.3, 11.4, 4.9, 6.9, 15.7, 'BYE', 16.1, 16.8, 7.9, 15.0, 26.1, 17.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.0, 15.0, 9.7, 13.1, 13.3, 9.4, 12.4, 11.9, 'BYE', 13.5, 12.9, 11.4, 6.3, 12.2, 12.0, 21.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3117251.png",
    "name": "Christian McCaffrey",
    "depthchart": "Starter: RB-1",
    "team": "Carolina Panthers",
    "projected": 19.5,
    "opponent": "Indianapolis Colts",
    "home_away": "at ",
    "opp_rank_Neu": 9,
    "team_rank_Neu": 13,
    "avg_fp2": 26.22,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 16.99,
    "fanduelSalary": "$10800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0085CA",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 133, 202, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#0085CA",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/car.png",
    "headlineNews": "Scores twice in loss to Seahawks",
    "report": "McCaffrey carried 19 times for 87 yards and two touchdowns Sunday against the Seahawks. He also caught eight of 10 targets for 88 yards in the 30-24 loss.",
    "analysis": "McCaffrey averaged a healthy 4.6 yards per carry, scoring a one-yard touchdown in the second quarter and adding a 15-yarder in the fourth. He was also excellent as a pass-catcher with his team trailing all game, finishing second only to D.J. Moore in targets and receiving yards. McCaffrey has already surpassed 2,000 scrimmage yards ahead of next Sunday's game against the Colts, thanks in large part to his 726 receiving yards (on 82 receptions). He's averaging 5.0 yards per carry as well and should remain a top fantasy selection for the foreseeable future due to his massive usage and versatile skillset.",
    "timestamp": "2019-12-15 03:20 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [37.9, 6.3, 26.3, 28.9, 44.7, 19.7, 'BYE', 25.5, 34.1, 23.1, 24.6, 29.8, 13.7, 19.0, 33.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.8, 20.0, 16.6, 17.6, 18.0, 14.2, 'BYE', 17.2, 13.2, 28.1, 19.0, 15.7, 18.8, 18.9, 23.2, 19.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2979843.png",
    "name": "Kenyan Drake",
    "depthchart": "Starter: RB-1",
    "team": "Arizona Cardinals",
    "projected": 18.8,
    "opponent": "Seattle Seahawks",
    "home_away": "at ",
    "opp_rank_Neu": 15,
    "team_rank_Neu": 14,
    "avg_fp2": 11.79,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 20.52,
    "fanduelSalary": "$7100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#97233F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(151, 35, 63, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#97233F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
    "headlineNews": "Scores four times in win",
    "report": "Drake rushed 22 times for 137 yards and four touchdowns in Sunday's 38-24 win over the Browns. He also caught his only target for nine yards.",
    "analysis": "Drake dominated while earning his first win of this season. The tailback first took an option pitch from Kyler Murray five yards into the end zone, then converted one-yard plunges on his next two scores. His fourth TD came on an untouched 17-yard scamper, capping the best performance of his four-year career. With Drake serving as Arizona's bell cow, David Johnson was limited to just three carries on the day, further solidifying the pecking order in the Cardinals' backfield ahead of a Week 16 trip to play the Seahawks.",
    "timestamp": "2019-12-15 04:21 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.7, 7.3, 6.7, 8.8, 'DNP', 10.0, 7.3, 'DNP', 26.2, 7.1, 11.0, 'BYE', 6.1, 8.2, 39.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.2, 7.2, 8.9, 11.4, 'DNP', 9.4, 11.3, 'DNP', 11.4, 4.5, 6.3, 'BYE', 17.5, 14.1, 14.6, 18.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3919596.png",
    "name": "Chris Carson",
    "depthchart": "Starter: RB-1",
    "team": "Seattle Seahawks",
    "projected": 18.7,
    "opponent": "Arizona Cardinals",
    "home_away": "",
    "opp_rank_Pos": 25,
    "team_rank_Pos": 3,
    "avg_fp2": 14.84,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 21.96,
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
    "headlineNews": "Finds paydirt twice in win",
    "report": "Carson rushed 24 times for 133 yards and two touchdowns and caught one of two targets for four yards in Sunday's 30-24 win over the Panthers.",
    "analysis": "Carson returned to a bell-cow role with Rashaad Penny (knee) in injured reserve, and he busted out of the gate on the team's opening drive, carrying four times for 47 yards and a score. The third-year pro showcased his explosiveness as well, exceeding 10 yards on eight carries, including three times on the team's final drive to help ice the game. C.J. Prosise and Travis Homer combined for just seven carries, so Carson looks locked into a massive workload going forward. Carson will look to keep the engine roaring in Week 16 against the Cardinals, which have yielded 120.5 rushing yards per game -- 24th in the league.",
    "timestamp": "2019-12-15 01:24 PM",
    "week01": 21.1,
    "week02": 8.2,
    "week03": 3.6,
    "week04": 16.5,
    "week05": 18.8,
    "week06": 23.9,
    "week07": 8.9,
    "week08": 15.0,
    "week09": 12.3,
    "week10": 17.6,
    "week11": "BYE",
    "week12": 7.7,
    "week13": 17.4,
    "week14": 10.6,
    "week15": 26.2,
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [21.1, 8.2, 3.6, 16.5, 18.8, 23.9, 8.9, 15.0, 12.3, 17.6, 'BYE', 7.7, 17.4, 10.6, 26.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.2, 16.0, 17.3, 8.9, 11.2, 14.7, 10.4, 11.5, 11.9, 19.2, 'BYE', 17.5, 14.4, 11.4, 17.6, 18.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116593.png",
    "name": "Dalvin Cook",
    "depthchart": "Starter: RB-1",
    "team": "Minnesota Vikings",
    "projected": 18.7,
    "opponent": "Green Bay Packers",
    "home_away": "",
    "opp_rank_Pos": 24,
    "team_rank_Pos": 4,
    "avg_fp2": 18.99,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 23.76,
    "fanduelSalary": "$8500",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Shoulder",
    "tmColorLite": "#e0aa19",
    "tmColorDark": "#300e5a",
    "tmColorLite_rgba": "rgba(224, 170, 25, 0.2)",
    "tmColorDark_rgba": "rgba(48, 14, 90, 0.2)",
    "tmTextLite": "#e0aa19",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/min.png",
    "headlineNews": "Coach downplays injury",
    "report": "Coach Mike Zimmer said Cook \"feels good\" Monday and expressed optimism that the running back will be able to play through his right shoulder injury in the Vikings' Week 16 game against the Packers, Ian Rapoport of NFL Network reports.",
    "analysis": "Zimmer's comments about his players' injuries aren't always especially reliable, so the Vikings' practice reports this week will likely prove more telling with regard to Cook's status for the matchup between the NFC North's top two teams. Given that the division title is still up for grabs, it would be somewhat surprising if Cook ultimately was withheld from action against Green Bay if he's healthy enough to practice in at least a limited fashion this week. With Cook exiting early in the Week 15 win over the Chargers and backup Alexander Mattison (ankle) sitting out with an injury of his own, Mike Boone (13 carries for 56 yards and two touchdowns) finished the contest as Minnesota's top performer out of the backfield.",
    "timestamp": "2019-12-16 12:17 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [25.0, 26.6, 22.3, 16.0, 22.8, 12.4, 27.4, 25.6, 13.6, 27.8, 14.2, 'BYE', 11.9, 14.5, 5.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.4, 11.6, 11.5, 10.0, 13.0, 11.0, 11.0, 14.0, 16.6, 11.2, 16.7, 'BYE', 14.2, 16.2, 14.8, 18.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3139605.png",
    "name": "Marlon Mack",
    "depthchart": "Starter: RB-1",
    "team": "Indianapolis Colts",
    "projected": 17.6,
    "opponent": "Carolina Panthers",
    "home_away": "",
    "opp_rank_Pos": 30,
    "team_rank_Neu": 9,
    "avg_fp2": 11.46,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 27.32,
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
    "headlineNews": "Stymied in defeat",
    "report": "Mack rushed 11 times for 19 yards and was not targeted in Monday night's 34-7 loss to the Saints.",
    "analysis": "Mack could hardly find room to run against a swarming New Orleans front seven, and the Colts falling behind early prevented them from running more often. When they did manage to get in scoring position, it was Jordan Wilkins who was handed a one-yard touchdown out of Indy's backfield. Although his team has now been eliminated from playoff contention, Mack at least has a favorable matchup in Week 16 versus the Panthers, who've allowed the third-most rushing yards this season.",
    "timestamp": "2019-12-16 08:13 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [25.4, 7.3, 15.8, 3.9, 16.3, 'BYE', 7.1, 15.5, 8.9, 8.7, 16.9, 'DNP', 'DNP', 9.8, 1.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.3, 9.8, 13.0, 14.2, 15.0, 'BYE', 12.3, 7.9, 10.3, 11.6, 16.7, 'DNP', 'DNP', 7.3, 8.3, 17.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13981.png",
    "name": "Mark Ingram",
    "depthchart": "Starter: RB-1",
    "team": "Baltimore Ravens",
    "projected": 16.6,
    "opponent": "Cleveland Browns",
    "home_away": "at ",
    "opp_rank_Pos": 27,
    "team_rank_Pos": 1,
    "avg_fp2": 15.24,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 22.01,
    "fanduelSalary": "$7600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9E7C0C",
    "tmColorDark": "#241773",
    "tmColorLite_rgba": "rgba(158, 124, 12, 0.2)",
    "tmColorDark_rgba": "rgba(36, 23, 115, 0.2)",
    "tmTextLite": "#9E7C0C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png",
    "headlineNews": "Rock-solid complementary effort",
    "report": "Ingram rushed 13 times for 76 yards and a touchdown and brought in one of two targets for a 10-yard score in the Ravens' 42-21 win over the Jets on Thursday. He also logged a two-point conversion rush.",
    "analysis": "Ingram found himself in the end zone frequently Thursday, with his six-yard rush midway through the first quarter opening the scoring on the night for both teams. The veteran also notched Baltimore's final score of the night on a 10-yard reception on the fourth quarter, his fourth receiving touchdown of the season (all within the last five games). Ingram's rushing yardage tally Thursday against the Jets' typically stonewalling run defense was actually his best of any non-100-yard performance this season, and he'll look to build on that effort versus the Browns in a Week 16 divisional matchup a week from Sunday.",
    "timestamp": "2019-12-12 09:01 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [22.7, 8.7, 33.5, 7.6, 11.9, 14.4, 5.8, 'BYE', 13.4, 9.4, 22.0, 24.3, 7.2, 9.4, 23.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.6, 10.6, 7.4, 10.7, 11.7, 17.1, 12.0, 'BYE', 10.5, 12.4, 12.8, 8.1, 8.4, 12.3, 13.8, 16.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3052117.png",
    "name": "Phillip Lindsay",
    "depthchart": "Starter: RB-1",
    "team": "Denver Broncos",
    "projected": 15.0,
    "opponent": "Detroit Lions",
    "home_away": "",
    "opp_rank_Neu": 18,
    "team_rank_Neu": 18,
    "avg_fp2": 11.15,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 24.44,
    "fanduelSalary": "$6300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e17757",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(225, 119, 87, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#e17757",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/den.png",
    "headlineNews": "Has season-worst game",
    "report": "Lindsay ran for 32 yards on seven carries and did not haul in either of his targets during Sunday's 23-3 loss in Kansas City.",
    "analysis": "Sunday's 32 yards were a season low for Lindsay. There appeared to have been some attempted trickery early with Lindsay taking a direct snap and briefly looking to pass before pulling the ball down for a modest gain. There wasn't much excitement after that for Lindsay or Denver's offense as a whole.  Lindsay has been held under 70 total yards in four consecutive games, and it wouldn't be a surprise if Detroit makes it five on Sunday. The Lions have been vulnerable against the pass this season but have surrendered just 4.0 yards per opponent carry, seventh-best in the league.",
    "timestamp": "2019-12-15 04:45 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.6, 8.6, 27.0, 6.5, 22.7, 14.5, 3.7, 10.1, 15.2, 'BYE', 8.5, 7.3, 7.7, 12.5, 3.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.9, 14.1, 9.5, 14.3, 14.7, 15.0, 15.1, 14.3, 13.8, 'BYE', 11.5, 15.1, 16.4, 18.3, 11.0, 15.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16944.png",
    "name": "Devonta Freeman",
    "depthchart": "Starter: RB-1",
    "team": "Atlanta Falcons",
    "projected": 14.5,
    "opponent": "Jacksonville Jaguars",
    "home_away": "",
    "opp_rank_Pos": 29,
    "team_rank_Neg": 30,
    "avg_fp2": 10.88,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 24.47,
    "fanduelSalary": "$6200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/atl.png",
    "headlineNews": "Held in check by 49ers",
    "report": "Freeman logged 39 rushing yards on 12 carries and caught two of three targets for 16 receiving yards during Sunday's 29-22 win against San Francisco.",
    "analysis": "Fantasy GMs with vested interest in Freeman benefited from his Week 14 rushing touchdown and ability to make consistent contributions as a pass catcher, but neither category was present Week 15 against the 49ers. Freeman was held under 3.9 yards per carry for the fifth time in his past sixth appearances, while his two catches tied a season low. Though he has garnered double-digit carries in all but two appearances thus far in 2019, Freeman possesses just one rushing TD heading into a Week 16 matchup against the Jaguars' bottom-three rush defense.",
    "timestamp": "2019-12-15 07:47 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.6, 7.9, 11.0, 14.0, 15.5, 25.3, 3.5, 12.2, 'BYE', 6.3, 'DNP', 'DNP', 8.4, 17.4, 6.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.7, 14.3, 12.7, 11.6, 13.4, 8.3, 11.4, 11.9, 'BYE', 14.3, 'DNP', 'DNP', 9.1, 17.8, 9.0, 14.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3054850.png",
    "name": "Alvin Kamara",
    "depthchart": "Starter: RB-1",
    "team": "New Orleans Saints",
    "projected": 14.0,
    "opponent": "Tennessee Titans",
    "home_away": "at ",
    "opp_rank_Neu": 13,
    "team_rank_Neu": 16,
    "avg_fp2": 13.63,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 21.51,
    "fanduelSalary": "$7200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9b845c",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(155, 132, 92, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#9b845c",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
    "headlineNews": "Totals 89 yards in blowout victory",
    "report": "Kamara rushed 14 times for 66 yards and caught all five of his targets for 23 yards in the Saints' 34-7 win over the Colts on Monday.",
    "analysis": "It was another disappointing performance for Kamara, as he failed to cross the goal-line for the ninth consecutive game. His 73 receptions have boosted his value in PPR formats, though he still entered Week 15 as the overall RB17 in 2019. The usage has been there, as Kamara has seen nearly 19 total touches per game across his last five contests, but the production has been highly underwhelming for fantasy owners who spent a first-round pick on him. He'll try to rebound in a Week 16 showdown with the Titans.",
    "timestamp": "2019-12-16 08:34 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [20.6, 6.5, 32.6, 10.4, 13.92, 10.1, 'DNP', 'DNP', 'BYE', 11.4, 17.2, 14.7, 10.4, 4.3, 11.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [21.0, 20.6, 12.9, 13.3, 17.0, 12.2, 'DNP', 'DNP', 'BYE', 18.7, 13.2, 18.3, 21.1, 12.9, 17.3, 14.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/17359.png",
    "name": "Damien Williams",
    "depthchart": "Starter: RB-1",
    "team": "Kansas City Chiefs",
    "projected": 13.6,
    "opponent": "Chicago Bears",
    "home_away": "at ",
    "opp_rank_Neg": 6,
    "team_rank_Neg": 25,
    "avg_fp2": 8.81,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 20.71,
    "fanduelSalary": "$5600",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Ribs",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Inactive Sunday",
    "report": "Williams (rib/illness) is inactive for Sunday's home game against the Broncos, BJ Kissel of the Chiefs' official site reports.",
    "analysis": "With Williams inactive for the third straight game, the Chiefs will roll with a backfield committee of LeSean McCoy - who led the team with 11 carries for 39 yards last weekend against the Patriots -- Spencer Ware and Darwin Thompson. With a time-share in play, each back is in line to get some touches, but unless a hot hand emerges Sunday, neither of the trio possesses a bankable fantasy ceiling in Week 15 in wintry weather conditions in Kansas City.",
    "timestamp": "2019-12-15 08:34 AM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [15.5, 7.1, 'DNP', 'DNP', 5.3, 6.3, 1.6, 1.0, 19.8, 11.4, 11.3, 'BYE', 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.1, 8.5, 'DNP', 'DNP', 12.3, 11.5, 6.6, 9.9, 8.6, 7.7, 10.9, 'BYE', 'DNP', 'DNP', 'DNP', 13.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3060022.png",
    "name": "Jordan Howard",
    "depthchart": "Starter: RB-1",
    "team": "Philadelphia Eagles",
    "projected": 13.5,
    "opponent": "Dallas Cowboys",
    "home_away": "",
    "opp_rank_Neu": 12,
    "team_rank_Neu": 11,
    "avg_fp2": 11.82,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 19.43,
    "fanduelSalary": "$6900",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Shoulder",
    "tmColorLite": "#386168",
    "tmColorDark": "#004C54",
    "tmColorLite_rgba": "rgba(56, 97, 104, 0.2)",
    "tmColorDark_rgba": "rgba(0, 76, 84, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    "headlineNews": "Held out once again",
    "report": "Howard (shoulder) was ruled out ahead of Sunday's contest against the Redskins.",
    "analysis": "Howard initially earned a questionable designation following Friday's injury report, but head coach Doug Pederson was less than optimistic the 25-year-old would ultimately play, noting Howard had not yet been cleared for contact. As a result, the fourth-year running back will be held out for a fifth consecutive game, opening the door once again for Miles Sanders to handle the majority of the carries, while Boston Scott operates as the spellback and primary pass catcher out of the backfield.",
    "timestamp": "2019-12-14 09:34 AM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.5, 3.1, 9.7, 31.0, 12.2, 4.9, 6.6, 17.6, 14.8, 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.5, 7.5, 5.2, 7.6, 11.2, 9.7, 14.8, 9.7, 10.0, 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 13.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3128720.png",
    "name": "Nick Chubb",
    "depthchart": "Starter: RB-1",
    "team": "Cleveland Browns",
    "projected": 13.3,
    "opponent": "Baltimore Ravens",
    "home_away": "",
    "opp_rank_Neg": 5,
    "team_rank_Neu": 10,
    "avg_fp2": 16.29,
    "opp_rank_allowed_fp2_Neu": 7,
    "opp_avg_allowed_fp2": 17.65,
    "fanduelSalary": "$8000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FF3C00",
    "tmColorDark": "#311D00",
    "tmColorLite_rgba": "rgba(255, 60, 0, 0.2)",
    "tmColorDark_rgba": "rgba(49, 29, 0, 0.2)",
    "tmTextLite": "#FF3C00",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
    "headlineNews": "Nearly 150 scrimmage yards Sunday",
    "report": "Chubb rushed 17 times for 127 yards and a touchdown in Sunday's 38-24 loss to the Cardinals. He also caught all three of his targets for 21 yards.",
    "analysis": "Chubb was once again Cleveland's best offensive player, averaging a whopping 7.5 yards per carry. That figure was aided by Chubb's 33-yard touchdown run during the second quarter, giving the tailback eight rushing scores in consecutive seasons. Although backfield partner Kareem Hunt excelled through the air, catching eight passes for 62 yards, Chubb remains the Browns' workhorse on the ground. Sunday was the seventh time he's topped the 100-yard plateau this season and the third time he's done so in the last four weeks as he continues his quest toward the NFL rushing title.",
    "timestamp": "2019-12-15 04:29 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.0, 17.8, 15.1, 37.8, 10.4, 26.4, 'BYE', 10.3, 11.1, 13.1, 9.2, 23.9, 8.4, 12.2, 22.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.6, 20.2, 11.2, 16.0, 11.8, 13.6, 'BYE', 11.2, 15.6, 20.8, 19.3, 20.9, 13.4, 21.4, 15.5, 13.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4047365.png",
    "name": "Josh Jacobs",
    "depthchart": "Starter: RB-1",
    "team": "Oakland Raiders",
    "projected": 12.9,
    "opponent": "Los Angeles Chargers",
    "home_away": "at ",
    "opp_rank_Neu": 17,
    "team_rank_Neu": 12,
    "avg_fp2": 13.98,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 22.67,
    "fanduelSalary": "$7600",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Shoulder",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A5ACAF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/oak.png",
    "headlineNews": "Shoulder remains an issue",
    "report": "Coach Jon Gruden acknowledged Monday that Jacobs -- who has been dealing with a shoulder injury since Week 7 -- had a hard time taking off his shoulder pads after Sunday's 20-16 loss to the Jaguars.",
    "analysis": "Gruden praised the running back's toughness, while suggesting  that the status of Jacobs for the coming weeks will continue be in some question. That's not to say that the 6-8 Raiders are inclined to shut Jacobs down, but he'll need to be monitored closely during practice in the coming days to see if his shoulder rebounds well enough for him to play this coming weekend against the Chargers. For now, consider Jacobs -- who carried 24 times for 89 yards and caught two of three targets for 20 yards against Jacksonville -- questionable for Week 16 action.",
    "timestamp": "2019-12-16 02:43 PM",
    "week01": 23.8,
    "week02": 9.9,
    "week03": 4.4,
    "week04": 11.8,
    "week05": 27.8,
    "week06": "BYE",
    "week07": 14.9,
    "week08": 9.1,
    "week09": 24.0,
    "week10": 17.6,
    "week11": 12.1,
    "week12": 4.1,
    "week13": 10.4,
    "week14": "DNP",
    "week15": 11.9,
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [23.8, 9.9, 4.4, 11.8, 27.8, 'BYE', 14.9, 9.1, 24.0, 17.6, 12.1, 4.1, 10.4, 'DNP', 11.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.0, 15.5, 11.9, 12.0, 10.1, 'BYE', 10.2, 8.9, 16.6, 18.4, 16.7, 22.3, 14.5, 'DNP', 15.7, 12.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15825.png",
    "name": "Le'Veon Bell",
    "depthchart": "Starter: RB-1",
    "team": "New York Jets",
    "projected": 12.8,
    "opponent": "Pittsburgh Steelers",
    "home_away": "",
    "opp_rank_Neu": 11,
    "team_rank_Neg": 31,
    "avg_fp2": 12.35,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 16.48,
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
    "headlineNews": "Solid performance in loss",
    "report": "Bell (illness) rushed 21 times for 87 yards and brought in both his targets for one yard in the Jets' 42-21 loss to the Ravens on Thursday.",
    "analysis": "Bell enjoyed a solid return from a one-game absence due to illness against a typically stingy Ravens defense, notching a season high in rushing yards while tying his high-water mark in carries in 2019. The versatile back has endured a significantly underwhelming season overall and still doesn't have a run of longer than 19 yards, but he'll look to continue putting a strong cap on the campaign in a Week 16 matchup versus the Steelers a week from Sunday.",
    "timestamp": "2019-12-12 09:27 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [20.2, 15.9, 8.3, 'BYE', 12.3, 11.8, 8.1, 5.0, 16.1, 14.8, 16.2, 13.3, 8.7, 'DNP', 9.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [20.5, 22.8, 12.7, 'BYE', 16.6, 21.0, 15.9, 13.7, 17.7, 17.3, 15.5, 18.8, 16.8, 'DNP', 15.6, 12.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3127211.png",
    "name": "Patrick Laird",
    "depthchart": "Starter: RB-1",
    "team": "Miami Dolphins",
    "projected": 12.3,
    "opponent": "Cincinnati Bengals",
    "home_away": "",
    "opp_rank_Pos": 32,
    "team_rank_Neg": 32,
    "avg_fp2": 3.5,
    "opp_rank_allowed_fp2_Pos": 30,
    "opp_avg_allowed_fp2": 24.64,
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
    "headlineNews": "Lukewarm performance in loss",
    "report": "Laird rushed 12 times for 46 yards and caught two of five targets for eight yards in Sunday's 36-20 loss to the Giants.",
    "analysis": "Laird couldn't get much going in this one, as his most notable play resulted in a Giants safety after the 24-year-old running back was tackled in his own end zone. He operated in a near-even split with Myles Gaskin, who rushed nine times for 43 yards and added two catches for 29 yards. Expect the two running backs to remain in a timeshare against the generous Bengals run defense Week 16.",
    "timestamp": "2019-12-15 02:56 PM",
    "week01": "DNP",
    "week02": 0.0,
    "week03": 0.0,
    "week04": 0.0,
    "week05": "BYE",
    "week06": 0.0,
    "week07": 0.0,
    "week08": 0.0,
    "week09": 0.0,
    "week10": 2.9,
    "week11": 8.8,
    "week12": 2.0,
    "week13": 14.8,
    "week14": 10.6,
    "week15": 6.4,
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 0.0, 0.0, 0.0, 'BYE', 0.0, 0.0, 0.0, 0.0, 2.9, 8.8, 2.0, 14.8, 10.6, 6.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 0.6, 1.9, 0.5, 'BYE', 1.3, 2.9, 1.6, 0.9, 2.8, 3.3, 2.7, 3.4, 2.9, 10.2, 12.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3042519.png",
    "name": "Aaron Jones",
    "depthchart": "Starter: RB-1",
    "team": "Green Bay Packers",
    "projected": 12.3,
    "opponent": "Minnesota Vikings",
    "home_away": "at ",
    "opp_rank_Neu": 8,
    "team_rank_Neu": 17,
    "avg_fp2": 17.71,
    "opp_rank_allowed_fp2_Neu": 9,
    "opp_avg_allowed_fp2": 17.89,
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
    "headlineNews": "Scores two TDs vs. Bears",
    "report": "Jones carried 13 times for 51 yards and tallied two touchdowns during Sunday's 21-13 win over the Bears.",
    "analysis": "Jones was bottled up for the most part, averaging just 3.9 yards per carry against a stout Bears front. He also curiously wasn't targeted in the passing game but salvaged his day from a fantasy perspective with a pair of touchdown runs in the third quarter to break the game open. Although Jones' yardage totals have varied dramatically of late, he's supported his fantasy value with six touchdowns over his last four games to give him 15 for the season. He'll face another tough matchup next Monday against the Vikings, but his chances of getting into the end zone make him a worthy fantasy play.",
    "timestamp": "2019-12-15 03:36 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.4, 23.0, 14.8, 14.8, 45.7, 6.0, 16.3, 38.1, 3.4, 27.3, 'BYE', 3.8, 5.1, 28.2, 17.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.7, 11.5, 11.4, 9.3, 13.3, 19.0, 12.9, 14.0, 15.6, 17.9, 'BYE', 12.1, 9.6, 10.7, 14.6, 12.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3045147.png",
    "name": "James Conner",
    "depthchart": "Starter: RB-1",
    "team": "Pittsburgh Steelers",
    "projected": 12.2,
    "opponent": "New York Jets",
    "home_away": "at ",
    "opp_rank_Neg": 2,
    "team_rank_Neg": 26,
    "avg_fp2": 13.92,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 19.17,
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
    "headlineNews": "Resumes lead back role",
    "report": "Conner (shoulder) rushed eight times for 42 yards and caught four passes (five targets) for nine yards and a touchdown in Sunday's 17-10 loss to the Bills.",
    "analysis": "Eight rushes may suggest that the team was taking it easy on their lead back in his first week back in action, but those eight carries led the backfield by a decent margin (the next-highest total was two carries). The Steelers simply could not do much against Buffalo's tough defense, and this resulted in few opportunities for all of the team's skill players. Expect Conner to get more involved in an easier matchup against the Jets on Sunday.",
    "timestamp": "2019-12-15 09:16 PM",
    "week01": 8.5,
    "week02": 12.0,
    "week03": 5.7,
    "week04": 22.5,
    "week05": 11.5,
    "week06": 27.4,
    "week07": "BYE",
    "week08": 22.5,
    "week09": "DNP",
    "week10": "DNP",
    "week11": 2.1,
    "week12": "DNP",
    "week13": "DNP",
    "week14": "DNP",
    "week15": 13.1,
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.5, 12.0, 5.7, 22.5, 11.5, 27.4, 'BYE', 22.5, 'DNP', 'DNP', 2.1, 'DNP', 'DNP', 'DNP', 13.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.1, 12.6, 5.2, 13.1, 21.1, 9.9, 'BYE', 8.0, 'DNP', 'DNP', 16.4, 'DNP', 'DNP', 'DNP', 10.8, 12.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2576434.png",
    "name": "Melvin Gordon",
    "depthchart": "Starter: RB-1",
    "team": "Los Angeles Chargers",
    "projected": 11.8,
    "opponent": "Oakland Raiders",
    "home_away": "",
    "opp_rank_Neu": 14,
    "team_rank_Neu": 23,
    "avg_fp2": 11.89,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 21.64,
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
    "headlineNews": "Fumbles twice in blowout loss",
    "report": "Gordon carried seven times for 28 yards and caught five of seven targets for an additional 36 yards during Sunday's 39-10 loss to the Vikings. He also lost two fumbles.",
    "analysis": "Gordon's fumbles set up a pair of Minnesota scores as the Vikings built a large lead, and he appeared to be benched for a brief period of time after the second turnover. Furthermore, his workload was rather limited anyway because of the lopsided nature of the game, though he did set a new season high for receiving yards in a game. Gordon had recorded at least 80 scrimmage yards in each of the last five games and should fare better in next Sunday's home matchup against the Raiders.",
    "timestamp": "2019-12-15 06:55 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 5.8, 6.3, 7.9, 10.4, 24.4, 19.8, 10.5, 'BYE', 12.0, 16.9, 4.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 11.4, 10.9, 9.8, 11.4, 9.3, 15.2, 11.4, 'BYE', 11.8, 10.8, 11.7, 11.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4040761.png",
    "name": "Devin Singletary",
    "depthchart": "Starter: RB-1",
    "team": "Buffalo Bills",
    "projected": 11.7,
    "opponent": "New England Patriots",
    "home_away": "at ",
    "opp_rank_Neu": 7,
    "team_rank_Pos": 5,
    "avg_fp2": 11.76,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 13.74,
    "fanduelSalary": "$6400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#005596",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 85, 150, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
    "headlineNews": "Receives 21 carries",
    "report": "Singletary rushed 21 times for 87 yards and caught both of his targets for two yards in Sunday's 17-10 win over Pittsburgh.",
    "analysis": "Singletary led the Bills' backfield in carries by a decent margin for consecutive weeks, firmly cementing his starting role after playing under the shadow of veteran Frank Gore for the first half of the season. The rookie has displayed big-play ability all year, falling below a 4.0 yards per carry mark just once (Week 7 against Miami). Singletary will face a tough matchup against the Patriots' stout run defense next week, so his ceiling may be a bit lower than in recent weeks. It's worth noting the rookie fumbled twice in the contest -- equaling his previous total for the entire season -- and lost one of them.",
    "timestamp": "2019-12-15 09:05 PM",
    "week01": 12.3,
    "week02": 11.7,
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "BYE",
    "week07": 2.6,
    "week08": 12.9,
    "week09": 21.5,
    "week10": 6.5,
    "week11": 8.7,
    "week12": 11.9,
    "week13": 17.6,
    "week14": 15.8,
    "week15": 7.9,
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.3, 11.7, 'DNP', 'DNP', 'DNP', 'BYE', 2.6, 12.9, 21.5, 6.5, 8.7, 11.9, 17.6, 15.8, 7.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.8, 11.0, 'DNP', 'DNP', 'DNP', 'BYE', 5.5, 5.6, 7.7, 16.2, 10.2, 12.9, 11.2, 7.9, 7.0, 11.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3912550.png",
    "name": "Ronald Jones",
    "depthchart": "Starter: RB-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 11.4,
    "opponent": "Houston Texans",
    "home_away": "",
    "opp_rank_Neu": 20,
    "team_rank_Neg": 28,
    "avg_fp2": 8.7,
    "opp_rank_allowed_fp2_Pos": 24,
    "opp_avg_allowed_fp2": 23.49,
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
    "headlineNews": "Another quiet day in win",
    "report": "Jones rushed 11 times for 23 yards and brought in one of three targets for 26 yards in the Buccaneers' 38-17 win over the Lions on Sunday.",
    "analysis": "Jones showed off his playmaking ability on his one reception, but his work on the ground was once again significantly underwhelming. The second-year back has rushed for 36 yards or fewer in three straight games, and he's only eclipsed the 50-yard mark on the ground on five occasions this season. Jones and Peyton Barber also continue in a nearly even time split in the backfield, which leaves Tampa's ground game a virtual stay-away situation for fantasy title games in Week 16.",
    "timestamp": "2019-12-15 09:05 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.8, 0.9, 12.6, 14.7, 6.6, 7.0, 'BYE', 5.7, 15.2, 18.6, 2.4, 14.2, 0.8, 7.9, 5.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.9, 7.3, 7.2, 6.0, 7.8, 15.1, 'BYE', 7.5, 6.7, 8.8, 12.2, 10.3, 15.1, 15.5, 8.1, 11.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2977644.png",
    "name": "Todd Gurley",
    "depthchart": "Starter: RB-1",
    "team": "Los Angeles Rams",
    "projected": 11.4,
    "opponent": "San Francisco 49ers",
    "home_away": "at ",
    "opp_rank_Neu": 21,
    "team_rank_Neg": 24,
    "avg_fp2": 13.63,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 13.79,
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
    "headlineNews": "Two TDs in rough loss",
    "report": "Gurley carried the ball 11 times for 20 yards and a touchdown and caught three of seven targets for 18 yards and a second TD in Sunday's 44-21 loss to the Cowboys. He also ran for a two-point conversion.",
    "analysis": "The Rams' offensive line was overwhelmed for most of the game, leaving Gurley with little room to operate, but he still found the end zone in the second and fourth quarters to put together a strong performance at a crucial time for those with fantasy shares in him. The running back has scored four TDs in the last three games, but he remains 259 rushing yards away from his third straight 1,000-yard campaign, a milestone he'll try to reach over the final two games of 2019.",
    "timestamp": "2019-12-15 06:14 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.6, 14.2, 4.3, 22.5, 17.2, 'DNP', 11.9, 10.4, 'BYE', 7.3, 18.8, 3.4, 18.0, 19.3, 19.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.2, 14.3, 12.4, 9.6, 15.6, 'DNP', 23.0, 12.8, 'BYE', 10.9, 14.6, 8.3, 12.4, 19.3, 13.5, 11.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2576414.png",
    "name": "Raheem Mostert",
    "depthchart": "Starter: RB-1",
    "team": "San Francisco 49ers",
    "projected": 11.3,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank_Neu": 23,
    "team_rank_Pos": 2,
    "avg_fp2": 9.08,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 21.24,
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
    "headlineNews": "Spearheads backfield Week 15",
    "report": "Mostert ran for 54 yards and a touchdown on 14 carries while losing one fumble during Sunday's 29-22 loss to the Falcons. He also caught one of two targets for five receiving yards.",
    "analysis": "Given that San Francisco ranks second behind only Baltimore with 32.6 rush attempts per game, possessing the 49ers' top back on a fantasy roster can be extremely valuable. The challenge this season has come in identifying who coach Kyle Shanahan will deploy as the top option, but in Week 15 Mostert garnered more than 63 percent of the team's RB carries and tallied a rushing score for the second straight outing. He now has double-digit rush attempts in three consecutive appearances heading into a Week 16 matchup against a Rams defense that was torched by Dallas for 263 rush yards and three rushing TDs Sunday.",
    "timestamp": "2019-12-15 06:02 PM",
    "week01": 4.5,
    "week02": 22.6,
    "week03": 5.9,
    "week04": "BYE",
    "week05": 3.4,
    "week06": 1.3,
    "week07": 0.0,
    "week08": 12.0,
    "week09": -0.2,
    "week10": 4.0,
    "week11": 3.7,
    "week12": 13.2,
    "week13": 22.4,
    "week14": 23.9,
    "week15": 10.4,
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.5, 22.6, 5.9, 'BYE', 3.4, 1.3, 0.0, 12.0, -0.2, 4.0, 3.7, 13.2, 22.4, 23.9, 10.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.7, 2.1, 6.4, 'BYE', 4.9, 4.1, 4.6, 2.9, 5.1, 3.3, 8.7, 5.7, 1.5, 3.3, 9.3, 11.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3916925.png",
    "name": "Kerryon Johnson",
    "depthchart": "Starter: RB-1",
    "team": "Detroit Lions",
    "projected": 10.2,
    "opponent": "Denver Broncos",
    "home_away": "at ",
    "opp_rank_Neu": 19,
    "team_rank_Neu": 21,
    "avg_fp2": 10.65,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 18.51,
    "fanduelSalary": "$4500",
    "hasStatus": "Status",
    "healthOut": "Ir-r",
    "injury": "Knee - Meniscus",
    "tmColorLite": "#0076B6",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(0, 118, 182, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#0076B6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/det.png",
    "headlineNews": "Says he's setback-free",
    "report": "Johnson (knee) said Friday that he hasn't experienced any setbacks since undergoing surgery in November to repair a torn meniscus, Justin Rogers of The Detroit News reports.",
    "analysis": "The 3-9-1 Lions have little to play for at this stage, but that isn't stopping Johnson from working toward rejoining the 53-man roster as soon as Week 16 in Denver. Johnson, who resumed practicing Dec. 4, has drawn favorable reviews from coach Matt Patricia since returning to work, but the Lions will see how the second-year tailback looks next week before determining his availability for game action. If Johnson does play in either of the final two games, he'll likely be deployed as part of a timeshare with Bo Scarbrough, who has performed well as the Lions' lead option on the ground since joining the team four weeks ago, though we'll note Scarbrough is also working through an injury of his own this week.",
    "timestamp": "2019-12-13 02:49 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.2, 15.8, 10.8, 14.7, 'BYE', 13.1, 2.3, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.0, 18.1, 12.5, 8.9, 'BYE', 11.5, 11.5, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 10.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3059915.png",
    "name": "Kareem Hunt",
    "depthchart": "Backup: RB-2",
    "team": "Cleveland Browns",
    "projected": 10.2,
    "opponent": "Baltimore Ravens",
    "home_away": "",
    "opp_rank_Neg": 5,
    "team_rank_Neu": 10,
    "avg_fp2": 11.95,
    "opp_rank_allowed_fp2_Neu": 7,
    "opp_avg_allowed_fp2": 17.65,
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
    "headlineNews": "Impactful in passing game",
    "report": "Hunt rushed four times for 14 yards and caught eight of nine targets for 62 yards in Sunday's 38-24 loss to the Cardinals.",
    "analysis": "Hunt saw teammate Nick Chubb go for another 127 yards on the ground, but Hunt at least managed to make a significant impact through the air. In fact, he trailed only Odell Beckham in targets and tied for Cleveland's team high in receptions. Despite Chubb surging toward the league's rushing title, Hunt has now garnered double-digit touches in all six of his appearances this season, giving him decent value to close the campaign.",
    "timestamp": "2019-12-15 05:17 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 10.9, 8.8, 11.6, 15.0, 13.8, 11.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 10.5, 9.4, 12.1, 9.2, 12.5, 8.6, 10.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2577253.png",
    "name": "Javorius Allen",
    "depthchart": "Backup: RB-2",
    "team": "New York Giants",
    "projected": 10.2,
    "opponent": "Washington Redskins",
    "home_away": "at ",
    "opp_rank_Pos": 28,
    "team_rank_Neu": 22,
    "avg_fp2": 3.07,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 24.44,
    "fanduelSalary": "$4500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#0B2265",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(11, 34, 101, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png",
    "headlineNews": "First TD of season",
    "report": "Allen carried the ball eight times for 28 yards and one touchdown during Sunday's 36-20 win over the Dolphins.",
    "analysis": "Allen worked as the backup to Saquon Barkley with Wayne Gallman a healthy scratch. The 28-year-old took the field in the fourth quarter with the contest well out of hand, and he made the most of that opportunity to score the eighth rushing touchdown of his career. Across the previous seven contests, Allen had handled just one carry.",
    "timestamp": "2019-12-16 09:17 AM",
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
    "week13": 0.4,
    "week14": 0.0,
    "week15": 8.8,
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 0.4, 0.0, 8.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 5.0, 4.7, 8.2, 10.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3043078.png",
    "name": "Derrick Henry",
    "depthchart": "Starter: RB-1",
    "team": "Tennessee Titans",
    "projected": 9.9,
    "opponent": "New Orleans Saints",
    "home_away": "",
    "opp_rank_Neg": 4,
    "team_rank_Neu": 8,
    "avg_fp2": 17.6,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 15.52,
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
    "headlineNews": "First scoreless outing since Week 8",
    "report": "Henry ran for 86 yards on 21 carries and was targeted once during Sunday's 24-21 loss to the Texans.",
    "analysis": "The 247-pound bulldozer established a relatively efficient 4.1 yards-per-carry average Week 15 against divisional rival Houston, but his scoring rampage was put to an end by the Texans' No. 18 rush defense. Henry entered the contest with nine total touchdowns over his preceding five outings, but he was held out of the end zone Sunday despite garnering five red-zone carries. Given Henry's limited role in the passing game, a scoreless afternoon is especially detrimental to his fantasy upside. Tennessee's upcoming matchup against New Orleans is less than optimal for Henry's outlook, with the Saints having surrendered just five rushing TDs to opposing running backs all season.",
    "timestamp": "2019-12-15 01:59 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [28.4, 16.3, 11.1, 11.3, 13.8, 3.8, 17.3, 6.8, 23.4, 32.1, 'BYE', 28.0, 22.1, 23.4, 8.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.1, 18.7, 12.9, 11.5, 13.6, 8.3, 18.7, 9.1, 14.4, 12.0, 'BYE', 16.6, 7.7, 13.5, 20.2, 9.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15826.png",
    "name": "Giovani Bernard",
    "depthchart": "Backup: RB-2",
    "team": "Cincinnati Bengals",
    "projected": 9.9,
    "opponent": "Miami Dolphins",
    "home_away": "at ",
    "opp_rank_Pos": 31,
    "team_rank_Neg": 27,
    "avg_fp2": 3.61,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 24.56,
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
    "headlineNews": "Modest output in Week 15",
    "report": "Bernard had five carries for 27 yards and caught both his targets for 10 yards in Sunday's loss to the Patriots.",
    "analysis": "With Joe Mixon playing so well, the opportunities for Bernard to contribute have been few and far between. He still has not scored on the season, nor has he topped 31 rushing or 63 combined yards in any game this year.",
    "timestamp": "2019-12-17 10:08 AM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.3, 1.8, 2.2, 3.9, 4.1, 3.4, 1.4, 5.5, 'BYE', -0.7, 5.1, 4.5, 1.7, 5.6, 4.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.0, 10.4, 7.9, 7.6, 6.8, 6.1, 5.7, 7.9, 'BYE', 8.2, 7.7, 5.4, 3.5, 6.0, 6.4, 9.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3916430.png",
    "name": "Nyheim Hines",
    "depthchart": "Backup: RB-2",
    "team": "Indianapolis Colts",
    "projected": 9.6,
    "opponent": "Carolina Panthers",
    "home_away": "",
    "opp_rank_Pos": 30,
    "team_rank_Neu": 9,
    "avg_fp2": 5.41,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 27.32,
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
    "headlineNews": "Takes backseat in blowout loss",
    "report": "Hines rushed twice for 10 yards and caught both targets for two yards in Monday's 34-7 loss to the Saints.",
    "analysis": "This is the game script that should've benefited a back like Hines, as the Colts trailed by a hefty margin early and Jacoby Brissett threw 34 times. However, Marlon Mack commanded a bulk of the team's backfield reps, rushing 11 times for 19 yards. Hines is tough to depend on now that Mack's back, but he still has pass-catching upside with 40 receptions for 296 scoreless yards this year.",
    "timestamp": "2019-12-17 01:29 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.7, 1.9, 4.4, 7.5, 6.5, 'BYE', 2.1, 6.1, 3.3, 6.4, 11.0, 7.1, 11.0, 2.5, 2.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.8, 6.8, 5.8, 8.7, 7.9, 'BYE', 6.4, 2.3, 6.9, 7.7, 11.7, 8.5, 6.4, 3.9, 7.1, 9.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/10452.png",
    "name": "Adrian Peterson",
    "depthchart": "Starter: RB-1",
    "team": "Washington Redskins",
    "projected": 9.5,
    "opponent": "New York Giants",
    "home_away": "",
    "opp_rank_Neu": 22,
    "team_rank_Neu": 20,
    "avg_fp2": 9.21,
    "opp_rank_allowed_fp2_Neu": 15,
    "opp_avg_allowed_fp2": 20.29,
    "fanduelSalary": "$6500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#773141",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(119, 49, 65, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png",
    "headlineNews": "Ties Walter Payton's TD mark",
    "report": "Peterson rushed 16 times for 66 yards and a touchdown while catching all three of his targets for another 25 yards in Sunday's 37-27 loss to the Eagles.",
    "analysis": "Peterson worked as the lead back in this one, with Josh Ferguson siphoning off only three carries for nine yards. The future Hall of Famer tied Walter Payton for fourth all-time with his 110th career rushing touchdown, reversing field after his initial lane was blocked off to find the end zone from 10 yards out. With Derrius Guice (knee) on IR, Peterson should continue to carry the mail in a favorable Week 16 home matchup against the NFC East rival Giants.",
    "timestamp": "2019-12-15 01:28 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 10.2, 3.9, 2.8, 1.8, 14.6, 6.1, 11.3, 13.5, 'BYE', 4.0, 5.4, 15.9, 13.6, 16.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 12.0, 8.3, 9.3, 9.2, 11.1, 8.8, 7.2, 11.6, 'BYE', 8.0, 8.7, 5.7, 3.4, 12.9, 9.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15966.png",
    "name": "Chris Thompson",
    "depthchart": "Backup: RB-2",
    "team": "Washington Redskins",
    "projected": 9.4,
    "opponent": "New York Giants",
    "home_away": "",
    "opp_rank_Neu": 22,
    "team_rank_Neu": 20,
    "avg_fp2": 7.09,
    "opp_rank_allowed_fp2_Neu": 15,
    "opp_avg_allowed_fp2": 20.29,
    "fanduelSalary": "$5000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#773141",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(119, 49, 65, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png",
    "headlineNews": "Two receptions Sunday",
    "report": "Thompson recorded two receptions on three targets for 26 yards in Sunday's loss to the Eagles.",
    "analysis": "Thompson did not record a single carry. It's the second straight week the veteran back's only contributions have come in the passing game -- a trend which may continue as the season winds down, even with Derrius Guice (knee) on IR.",
    "timestamp": "2019-12-16 08:54 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.3, 7.6, 12.8, 8.0, 6.3, 3.0, 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 3.4, 7.8, 3.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.1, 6.6, 7.1, 8.5, 8.1, 11.5, 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 5.3, 2.0, 9.1, 9.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2972091.png",
    "name": "Jalen Richard",
    "depthchart": "Backup: RB-2",
    "team": "Oakland Raiders",
    "projected": 9.4,
    "opponent": "Los Angeles Chargers",
    "home_away": "at ",
    "opp_rank_Neu": 17,
    "team_rank_Neu": 12,
    "avg_fp2": 3.79,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 22.67,
    "fanduelSalary": "$5200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A5ACAF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/oak.png",
    "headlineNews": "Garners just three touches",
    "report": "Richard rushed once for 11 yards and caught two passes for 25 yards in Sunday's 20-16 loss to the Jaguars.",
    "analysis": "Richard enjoyed a slight increase in usage during Week 14's loss to the Titans since Josh Jacobs (shoulder) was out, generating 46 yards on nine touches. However, Jacobs played against the Jaguars and rushed 24 times for 89 yards, leaving Richard and DeAndre Washington with limited utility. Whether Jacobs is able to play in Week 16 against the Chargers remains to be seen, but if Jacobs sits, Richard is still likely the No. 2 backup behind Washington.",
    "timestamp": "2019-12-17 11:35 AM",
    "week01": 0.3,
    "week02": 1.5,
    "week03": 4.4,
    "week04": 2.3,
    "week05": 4.2,
    "week06": "BYE",
    "week07": 1.2,
    "week08": 3.7,
    "week09": 8.3,
    "week10": 6.3,
    "week11": 1.2,
    "week12": 8.1,
    "week13": 1.3,
    "week14": 5.6,
    "week15": 4.6,
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.3, 1.5, 4.4, 2.3, 4.2, 'BYE', 1.2, 3.7, 8.3, 6.3, 1.2, 8.1, 1.3, 5.6, 4.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.4, 4.0, 6.3, 4.4, 6.6, 'BYE', 4.3, 4.0, 6.0, 6.5, 6.5, 10.8, 7.3, 3.5, 5.2, 9.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116721.png",
    "name": "Jaylen Samuels",
    "depthchart": "Backup: RB-2",
    "team": "Pittsburgh Steelers",
    "projected": 9.1,
    "opponent": "New York Jets",
    "home_away": "at ",
    "opp_rank_Neg": 2,
    "team_rank_Neg": 26,
    "avg_fp2": 6.16,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 19.17,
    "fanduelSalary": "$5600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/pit.png",
    "headlineNews": "Non-factor vs. Bills",
    "report": "Samuels lost one yard on two carries and caught his only target for five yards in Sunday's 17-10 loss to the Bills.",
    "analysis": "On a night when the entire offense struggled, Samuels had the worst game of his short career. With James Conner back on the field, Samuels fantasy value may be limited to that of an occasional receiver out of the backfield. Pittsburgh heads to New York in Week 16 to face a Jets defense that is tough against the run but has given up the fifth-most receptions to opposing running backs. That bodes well for Samuels in PPR formats, but he is still a risky play in what may be the championship game for many fantasy owners.",
    "timestamp": "2019-12-16 07:43 AM",
    "week01": 1.1,
    "week02": 3.6,
    "week03": 0.0,
    "week04": 19.54,
    "week05": 1.96,
    "week06": "DNP",
    "week07": "BYE",
    "week08": "DNP",
    "week09": 12.8,
    "week10": 5.5,
    "week11": 13.0,
    "week12": 4.7,
    "week13": 6.4,
    "week14": 4.4,
    "week15": 0.9,
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.1, 3.6, 0.0, 19.54, 1.96, 'DNP', 'BYE', 'DNP', 12.8, 5.5, 13.0, 4.7, 6.4, 4.4, 0.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.1, 5.4, 3.8, 5.8, 13.2, 'DNP', 'BYE', 'DNP', 8.1, 11.3, 3.4, 10.5, 6.3, 8.8, 7.1, 9.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4035538.png",
    "name": "David Montgomery",
    "depthchart": "Starter: RB-1",
    "team": "Chicago Bears",
    "projected": 9.1,
    "opponent": "Kansas City Chiefs",
    "home_away": "",
    "opp_rank_Pos": 26,
    "team_rank_Neg": 29,
    "avg_fp2": 9.59,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 24.73,
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
    "headlineNews": "Unproductive on 15 touches",
    "report": "Montgomery rushed 14 times for 39 yards and caught one pass for 10 yards in the Bears' 21-13 loss to the Packers on Sunday.",
    "analysis": "Despite facing a Green Bay defense that struggled most of the year to stop the run, Montgomery was unable to break a run of longer than eight yards, and once the Bears fell behind by double digits early in the third quarter, he lost significant playing time to Tarik Cohen. After touching the ball at least 15 times in each of his last eight games while posting inconsistent production, he'll be a volume-based fantasy option in Week 16 at home against the Chiefs.",
    "timestamp": "2019-12-15 02:15 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.0, 13.3, 9.6, 8.2, 10.1, 'BYE', 0.9, 22.7, 21.1, 6.0, 5.5, 4.1, 15.7, 6.6, 5.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.0, 2.4, 7.7, 10.0, 7.8, 'BYE', 9.7, 9.5, 12.5, 15.4, 12.6, 8.1, 7.4, 14.9, 10.0, 9.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2979477.png",
    "name": "Tevin Coleman",
    "depthchart": "Backup: RB-2",
    "team": "San Francisco 49ers",
    "projected": 9.0,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank_Neu": 23,
    "team_rank_Pos": 2,
    "avg_fp2": 9.94,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 21.24,
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
    "headlineNews": "Four touches against former team",
    "report": "Coleman registered 40 rushing yards on four carries during Sunday's 29-22 loss to Atlanta.",
    "analysis": "So much for working in Coleman against his former team of four years, as the 26-year-old back was out-touched by both Raheem Mostert (15) and Matt Breida (six) during the 49ers' Week 15 defeat. On the bright side, among San Francisco's top three backs Coleman was the only one not to fumble Sunday, perhaps opening up an opportunity for him moving forward should the 49ers' coaching staff elect to prioritize ball security. Coleman has committed zero fumbles thus far in 2019, but he is averaging a meager 3.7 yards per carry heading into a Week 16 matchup against the Rams.",
    "timestamp": "2019-12-15 06:54 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.6, 'DNP', 'DNP', 'BYE', 15.7, 13.1, 7.1, 36.8, 4.6, 9.2, 7.7, 11.9, 2.0, 0.6, 4.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.2, 'DNP', 'DNP', 'BYE', 3.0, 8.3, 8.8, 12.2, 15.8, 14.7, 15.3, 16.5, 14.2, 9.5, 4.5, 9.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3115364.png",
    "name": "Leonard Fournette",
    "depthchart": "Starter: RB-1",
    "team": "Jacksonville Jaguars",
    "projected": 8.8,
    "opponent": "Atlanta Falcons",
    "home_away": "at ",
    "opp_rank_Neu": 16,
    "team_rank_Neu": 15,
    "avg_fp2": 14.96,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 19.51,
    "fanduelSalary": "$7500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#006778",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 103, 120, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#006778",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/jax.png",
    "headlineNews": "Fairly quiet in win",
    "report": "Fournette carried the ball 15 times for 42 yards and caught five of seven targets for 31 yards in Sunday's 20-16 win over the Raiders.",
    "analysis": "The running back continues to be heavily involved in the passing game, seeing at least six targets in seven straight games while compiling 651 scrimmage yards and two TDs over that stretch. Fournette also set a new career high of 1,081 rushing yards with this performance, and he'll have two more games to pad that total, including a Week 16 road clash with the Falcons.",
    "timestamp": "2019-12-15 05:19 PM",
    "week01": 9.4,
    "week02": 10.7,
    "week03": 12.2,
    "week04": 25.5,
    "week05": 21.7,
    "week06": 14.8,
    "week07": 15.5,
    "week08": 17.1,
    "week09": 9.7,
    "week10": "BYE",
    "week11": 9.2,
    "week12": 32.4,
    "week13": 13.6,
    "week14": 7.8,
    "week15": 9.8,
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.4, 10.7, 12.2, 25.5, 21.7, 14.8, 15.5, 17.1, 9.7, 'BYE', 9.2, 32.4, 13.6, 7.8, 9.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.8, 20.3, 9.3, 11.8, 13.6, 9.1, 15.3, 16.4, 10.4, 'BYE', 16.6, 13.3, 13.6, 11.9, 17.6, 8.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3066158.png",
    "name": "Tarik Cohen",
    "depthchart": "Backup: RB-2",
    "team": "Chicago Bears",
    "projected": 8.4,
    "opponent": "Kansas City Chiefs",
    "home_away": "",
    "opp_rank_Pos": 26,
    "team_rank_Neg": 29,
    "avg_fp2": 7.75,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 24.73,
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
    "headlineNews": "Targeted 10 times in loss",
    "report": "Cohen caught seven passes for 57 yards and rushed eight times for 28 yards in the Bears' 21-13 loss to the Packers on Sunday.",
    "analysis": "Once the Bears fell behind by double digits early in the second half, Cohen logged full-time duty when the offense was in hurry-up mode, which led to him seeing at least 10 targets for the second time this season. This was the third time all season that he surpassed 50 yards from scrimmage, and aside from leagues that award a point per reception, he'll be a risky fantasy option at home in Week 16 against the Chiefs.",
    "timestamp": "2019-12-15 02:24 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.7, 3.5, 3.4, 8.8, 7.9, 'BYE', 7.4, 6.1, 2.6, 11.7, 15.9, 8.9, 5.5, 6.1, 12.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.7, 7.5, 6.5, 6.4, 5.2, 'BYE', 5.7, 6.4, 7.7, 10.3, 6.0, 4.7, 5.7, 6.4, 6.4, 8.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3068267.png",
    "name": "Austin Ekeler",
    "depthchart": "Backup: RB-2",
    "team": "Los Angeles Chargers",
    "projected": 7.8,
    "opponent": "Oakland Raiders",
    "home_away": "",
    "opp_rank_Neu": 14,
    "team_rank_Neu": 23,
    "avg_fp2": 17.16,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 21.64,
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
    "headlineNews": "Totals 81 scrimmage yards",
    "report": "Ekeler carried seven times for 19 yards and caught five of seven targets for an additional 62 yards during Sunday's 39-10 loss to the Vikings.",
    "analysis": "Ekeler did next to nothing on the ground, but he came through with his usual impactful performance as a receiver. He tied for second on the team in receptions while finishing third in targets and receiving yards. Ekeler is now nearing 1,400 scrimmage yards for the season and continues to thrive despite playing behind Melvin Gordon. He should be expected to get double-digit touches next Sunday against the Raiders and will look to continue his efficiency against a vulnerable defense.",
    "timestamp": "2019-12-15 08:11 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [36.4, 20.3, 11.6, 26.7, 14.8, 4.3, 22.0, 9.2, 11.3, 11.8, 17.2, 'BYE', 14.7, 29.3, 10.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.4, 14.5, 18.1, 15.8, 21.3, 9.5, 9.7, 8.9, 8.1, 14.3, 7.3, 'BYE', 8.5, 11.8, 12.0, 7.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2508176.png",
    "name": "David Johnson",
    "depthchart": "Backup: RB-2",
    "team": "Arizona Cardinals",
    "projected": 7.6,
    "opponent": "Seattle Seahawks",
    "home_away": "at ",
    "opp_rank_Neu": 15,
    "team_rank_Neu": 14,
    "avg_fp2": 10.19,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 20.52,
    "fanduelSalary": "$5000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#97233F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(151, 35, 63, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#97233F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
    "headlineNews": "Notches just three carries Sunday",
    "report": "Johnson had three carries for six yards and returned one kickoff for 24 yards during Sunday's 38-24 win against the Browns.",
    "analysis": "Johnson's totes came on the Cardinals' first possession, a drive late in the second quarter, and then on the second-to-last play of the game as the offense was attempting to burn the clock. Meanwhile, Kenyan Drake again dominated touches out of the backfield, turning 23 carries and catches into 146 yards from scrimmage and four touchdowns on the ground. Their usage was reflected in their respective snap counts: Drake handled 46 of 61 on offense while Johnson got only 13. Such has been the trend since Johnson returned in Week 10 from a two-game absence, and his reduced role likely will extend through the season finale, barring an injury to Drake.",
    "timestamp": "2019-12-16 02:58 PM",
    "week01": 22.7,
    "week02": 7.9,
    "week03": 15.5,
    "week04": 17.9,
    "week05": 17.1,
    "week06": 25.2,
    "week07": 0.2,
    "week08": "DNP",
    "week09": "DNP",
    "week10": -0.5,
    "week11": 0.0,
    "week12": "BYE",
    "week13": 3.4,
    "week14": 12.3,
    "week15": 0.6,
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [22.7, 7.9, 15.5, 17.9, 17.1, 25.2, 0.2, 'DNP', 'DNP', -0.5, 0.0, 'BYE', 3.4, 12.3, 0.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.3, 14.9, 13.0, 12.0, 18.7, 15.2, 15.6, 'DNP', 'DNP', 10.8, 10.8, 'BYE', 12.1, 8.3, 8.8, 7.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3128721.png",
    "name": "Sony Michel",
    "depthchart": "Starter: RB-1",
    "team": "New England Patriots",
    "projected": 7.6,
    "opponent": "Buffalo Bills",
    "home_away": "",
    "opp_rank_Neu": 10,
    "team_rank_Neu": 19,
    "avg_fp2": 8.77,
    "opp_rank_allowed_fp2_Neu": 14,
    "opp_avg_allowed_fp2": 19.95,
    "fanduelSalary": "$6100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#C60C30",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png",
    "headlineNews": "Gains 103 yards in win",
    "report": "Michel ran for 89 yards on 19 carries and added a 14-yard catch during Sunday's 34-13 win over the Bengals. He fumbled during the contest, but the Patriots maintained possession.",
    "analysis": "After a miserable outing against the Chiefs, Michel responded with his third-highest yardage total of the season and second best yards-per carry average of the season. Last week's clunker against Kansas City aside, Michel seems to be finding his stride, with three games averaging at least four yards per carry in his last four contests after just three such performances in his first 10 games of 2019. With the passing game continuing to struggle, the Patriots' best path down the stretch would seem to be pounding the ball with Michel and playing great defense. Next up is a division matchup against the Bills, which held Michel to 63 yards on 17 carries in Week 4.",
    "timestamp": "2019-12-15 02:48 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.4, 12.5, 7.1, 6.3, 19.8, 12.3, 21.9, 7.4, 3.5, 'BYE', 5.4, 8.5, 4.5, 1.4, 10.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.9, 15.8, 11.6, 5.5, 8.2, 11.1, 7.9, 10.8, 6.5, 'BYE', 15.4, 12.4, 13.1, 10.4, 9.7, 7.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3060919.png",
    "name": "Wes Hills",
    "depthchart": "Backup: RB-2",
    "team": "Detroit Lions",
    "projected": 7.5,
    "opponent": "Denver Broncos",
    "home_away": "at ",
    "opp_rank_Neu": 19,
    "team_rank_Neu": 21,
    "avg_fp2": 15.2,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 18.51,
    "fanduelSalary": "$5600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0076B6",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(0, 118, 182, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#0076B6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/det.png",
    "headlineNews": "Scores pair of TDs in debut",
    "report": "Hills, promoted from the practice squad Saturday, rushed 10 times for 21 yards and two touchdowns and brought in both his targets for one yard in the Lions' 38-17 loss to the Buccaneers on Sunday.",
    "analysis": "With Bo Scarbrough (ribs) inactive, Hills ended up pacing the Lions' backfield in carries and rushing yards. Although that lead role didn't actually equate to any useful yardage from a fantasy perspective, the 24-year-old cashed in with a pair of one-yard scoring runs on which he showed off the power his 218-pound frame can produce in close quarters. If Scarbrough is ready to return for a Week 15 matchup against the Broncos, Sunday may have been Hills' proverbial moment in the sun for 2019, but it's also possible the Slippery Rock product continues to hold down a spot on the active roster for evaluation purposes over the final pair of games.",
    "timestamp": "2019-12-15 08:56 PM",
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
    "week13": "DNP",
    "week14": "DNP",
    "week15": 15.2,
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 15.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 1.2, 7.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3051902.png",
    "name": "Peyton Barber",
    "depthchart": "Backup: RB-2",
    "team": "Tampa Bay Buccaneers",
    "projected": 7.3,
    "opponent": "Houston Texans",
    "home_away": "",
    "opp_rank_Neu": 20,
    "team_rank_Neg": 28,
    "avg_fp2": 7.48,
    "opp_rank_allowed_fp2_Pos": 24,
    "opp_avg_allowed_fp2": 23.49,
    "fanduelSalary": "$5400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#D50A0A",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(213, 10, 10, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#D50A0A",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Another lackluster showing",
    "report": "Barber rushed 10 times for 17 yards and brought in both his targets for 23 yards in the Buccaneers' 38-17 win over the Lions on Sunday.",
    "analysis": "Barber saw one fewer carry than backfield mate Ronald Jones as their fantasy-averse time split in the ground game continued. The fourth-year back did have a modest role in the passing game again, giving him back-to-back multi-catch efforts for the first time all season. Given the Buccaneers' pass-heavy tendencies and the offensive line's inability to consistently open up holes for any of the team's backs, Barber remains a middling option heading into a Week 16 battle against the Texans.",
    "timestamp": "2019-12-15 09:12 PM",
    "week01": 5.5,
    "week02": 15.4,
    "week03": 6.5,
    "week04": 7.9,
    "week05": 9.6,
    "week06": 2.8,
    "week07": "BYE",
    "week08": 3.3,
    "week09": 1.5,
    "week10": 11.2,
    "week11": 8.1,
    "week12": 3.2,
    "week13": 18.4,
    "week14": 6.3,
    "week15": 5.0,
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.5, 15.4, 6.5, 7.9, 9.6, 2.8, 'BYE', 3.3, 1.5, 11.2, 8.1, 3.2, 18.4, 6.3, 5.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.2, 8.4, 8.0, 10.6, 7.9, 8.1, 'BYE', 8.2, 7.8, 4.8, 5.7, 5.3, 6.7, 7.4, 5.6, 7.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4045163.png",
    "name": "Miles Sanders",
    "depthchart": "Backup: RB-2",
    "team": "Philadelphia Eagles",
    "projected": 7.3,
    "opponent": "Dallas Cowboys",
    "home_away": "",
    "opp_rank_Neu": 12,
    "team_rank_Neu": 11,
    "avg_fp2": 11.64,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 19.43,
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
    "headlineNews": "Best game as a pro",
    "report": "Sanders rushed 19 times for 122 yards and a touchdown while catching all six of his targets for 50 yards and a touchdown in Sunday's 37-27 win over Washington.",
    "analysis": "Sanders found paydirt from one yard out in the second quarter for his second career rushing touchdown, then added the third receiving touchdown of his rookie season on a 15-yard catch in the back corner of the end zone in the third quarter. He later broke free for a 56-yard run, setting up Zach Ertz's go-ahead touchdown with 10 minutes to play. If Jordan Howard (shoulder) isn't ready to make his return in Week 16, Sanders should continue to serve in a high-volume role against Dallas in a game that will likely decide the NFC East champion.",
    "timestamp": "2019-12-15 01:50 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.2, 5.2, 11.6, 7.2, 8.4, 16.7, 4.7, 21.3, 8.8, 'BYE', 5.7, 10.1, 19.0, 8.9, 32.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.8, 8.2, 7.3, 10.4, 7.2, 4.0, 8.8, 6.4, 8.6, 'BYE', 6.2, 12.4, 10.0, 15.1, 15.7, 7.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/12514.png",
    "name": "LeSean McCoy",
    "depthchart": "Backup: RB-2",
    "team": "Kansas City Chiefs",
    "projected": 7.1,
    "opponent": "Chicago Bears",
    "home_away": "at ",
    "opp_rank_Neg": 6,
    "team_rank_Neg": 25,
    "avg_fp2": 7.9,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 20.71,
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
    "headlineNews": "Bottled up in the cold",
    "report": "McCoy ran for 16 yards on six carries during Sunday's 23-3 win over Denver.",
    "analysis": "Despite the blustery conditions and depleted Denver front seven, the Chiefs actually found more success through the air than on the ground Sunday. McCoy finished with fewer carries and yards than fellow backs Darwin Thompson and Spencer Ware. McCoy has now been limited to 29.7 total yards per game during Damien Williams' (ribs) three-game absence with just one touchdown. Regardless of Williams' health next week against the Bears, McCoy is a risky play given his recent decline in production and Chicago's ferocious front, one that surrenders just 3.7 yards per game -- good for third best in the league.",
    "timestamp": "2019-12-15 01:48 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 3.8, 21.5, 15.9, 1.3, 5.4, 8.6, 6.3, 1.4, 'DNP', 13.7, 'BYE', 10.5, 4.8, 1.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 5.7, 6.8, 7.1, 7.2, 7.8, 4.0, 5.3, 7.1, 'DNP', 5.1, 'BYE', 5.8, 8.6, 8.5, 7.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2577654.png",
    "name": "DeAndre Washington",
    "depthchart": "Reserve: RB-3",
    "team": "Oakland Raiders",
    "projected": 7.0,
    "opponent": "Los Angeles Chargers",
    "home_away": "at ",
    "opp_rank_Neu": 17,
    "team_rank_Neu": 12,
    "avg_fp2": 4.94,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 22.67,
    "fanduelSalary": "$5600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A5ACAF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/oak.png",
    "headlineNews": "Light workload with Jacobs back",
    "report": "Washington rushed six times for 16 yards and caught two of three targets for six yards in Sunday's 20-16 loss to the Jaguars.",
    "analysis": "Coming off a productive Week 14 where Washington posted 96 yards from scrimmage, six receptions and a score while Josh Jacobs (shoulder) was out, Washington resumed a depth role with Jacobs back in the fold Sunday. Jacobs was a bell cow, turning 26 touches into 109 yards while Washington and Jalen Richard were left with the scraps. Coach Jon Gruden said Jacobs' shoulder is still an issue, so Washington remains a serviceable handcuff for this Sunday's matchup against the Chargers, who have allowed 4.1 yards per carry this year.",
    "timestamp": "2019-12-17 11:32 AM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.8, 4.5, 2.2, 3.6, 11.1, 'BYE', 4.6, 3.2, 3.3, 2.9, 2.3, 2.4, 6.4, 18.6, 3.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.0, 2.2, 5.8, 2.9, 4.0, 'BYE', 6.1, 2.9, 4.7, 4.7, 3.7, 8.0, 5.4, 4.5, 7.1, 7.0]
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
    "opponent": "Cleveland Browns",
    "home_away": "at ",
    "opp_rank_Pos": 27,
    "team_rank_Pos": 1,
    "avg_fp2": 4.97,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 22.01,
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
    "headlineNews": "Rips off long run in win",
    "report": "Edwards had five carries for 35 yards in Thursday's 42-21 win over the Jets.",
    "analysis": "Baltimore turned to Edwards to close things out Thursday, giving him three carries in the second half. Edwards has been effective when given opportunities, averaging 5.2 yards per carry, but his workload has been inconsistent. He's only seen double-digit carries twice all season and both of those instances came during blowouts. Edwards also has little involvement in the passing game with just five targets, keeping his weekly floor fairly low. He and the Ravens will travel to Cleveland to take on the Browns in Week 16.",
    "timestamp": "2019-12-13 02:12 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.6, 1.1, 7.8, 4.1, 2.8, 3.4, 3.5, 'BYE', 8.7, 1.7, 17.2, 5.5, 2.7, 2.0, 3.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.3, 5.3, 5.6, 4.8, 6.5, 10.6, 6.4, 'BYE', 5.1, 6.6, 3.7, 4.2, 5.6, 5.2, 6.4, 6.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2980148.png",
    "name": "C.J. Prosise",
    "depthchart": "Backup: RB-2",
    "team": "Seattle Seahawks",
    "projected": 6.5,
    "opponent": "Arizona Cardinals",
    "home_away": "",
    "opp_rank_Pos": 25,
    "team_rank_Pos": 3,
    "avg_fp2": 2.8,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 21.96,
    "fanduelSalary": "$5100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#69BE28",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(105, 190, 40, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#69BE28",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
    "headlineNews": "Garners six touches",
    "report": "Prosise rushed five times for 15 yards and caught his only target for a 10-yard reception in Sunday's 30-24 win over the Panthers.",
    "analysis": "With Rashaad Penny (knee) out for the season, both Prosise and rookie Travis Homer were in line for an increased workload. However, behind bell-cow Chris Carson, that doesn't mean much. Carson logged 25 touches Sunday, while Prosise and Homer combined for eight.",
    "timestamp": "2019-12-16 08:23 AM",
    "week01": 0.0,
    "week02": 3.5,
    "week03": 6.8,
    "week04": 6.4,
    "week05": "DNP",
    "week06": 0.8,
    "week07": 1.7,
    "week08": "DNP",
    "week09": "DNP",
    "week10": "DNP",
    "week11": "BYE",
    "week12": "DNP",
    "week13": "DNP",
    "week14": 0.2,
    "week15": 3.0,
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 3.5, 6.8, 6.4, 'DNP', 0.8, 1.7, 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 0.2, 3.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.1, 5.8, 7.8, 3.4, 'DNP', 6.2, 2.9, 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 4.1, 7.7, 6.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16777.png",
    "name": "Carlos Hyde",
    "depthchart": "Starter: RB-1",
    "team": "Houston Texans",
    "projected": 6.3,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "at ",
    "opp_rank_Neg": 1,
    "team_rank_Neu": 7,
    "avg_fp2": 9.82,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 14.24,
    "fanduelSalary": "$6600",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Ankle",
    "tmColorLite": "#A71930",
    "tmColorDark": "#03202F",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(3, 32, 47, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/hou.png",
    "headlineNews": "Tending to ankle injury",
    "report": "The Texans listed Hyde as a limited participant in Tuesday's practice due to an ankle injury.",
    "analysis": "With a Saturday matchup with the Buccaneers on tap for Week 16, the Texans are facing a quicker turnaround than normal coming off Sunday's 24-21 win over the Titans. To that end, Houston may just be managing Hyde's load carefully in practice this week after he tied his season high with 26 carries in Tennessee. He'll likely be ready to handle a full slate of snaps once Saturday arrives.",
    "timestamp": "2019-12-17 01:47 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 9.0, 7.9, 8.4, 12.0, 17.5, 3.5, 8.3, 14.0, 'BYE', 12.5, 6.7, 2.7, 8.8, 16.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 7.0, 9.8, 4.9, 9.1, 10.0, 11.6, 13.9, 6.8, 'BYE', 11.5, 6.5, 8.0, 11.2, 15.9, 6.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3916148.png",
    "name": "Tony Pollard",
    "depthchart": "Backup: RB-2",
    "team": "Dallas Cowboys",
    "projected": 6.0,
    "opponent": "Philadelphia Eagles",
    "home_away": "at ",
    "opp_rank_Neg": 3,
    "team_rank_Pos": 6,
    "avg_fp2": 5.9,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 17.8,
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
    "headlineNews": "Surprising eruption for Dallas",
    "report": "Pollard carried the ball 12 times for 131 yards and a touchdown and caught both his targets for 12 yards in Sunday's 44-21 win over the Rams.",
    "analysis": "With Dallas leading 28-7 at halftime, Pollard saw increased opportunities in the second half and made the most of them, breaking off a 44-yard TD scamper in the fourth quarter for the Cowboys' final points. The rookie RB topped the century mark for the second time this season, and both times he's done it while Ezekiel Elliott was also compiling triple-digit rushing yards (the other game being Week 3's win over Miami). Pollard remains a risky fantasy option due to his usual low touch volume, but he remains a big-play threat for the Cowboys heading into next Sunday's crucial clash with the Eagles.",
    "timestamp": "2019-12-15 06:44 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.4, 3.0, 20.3, 0.0, 1.9, 1.3, 2.8, 'BYE', 3.5, -0.4, 15.6, 4.3, 0.7, 'DNP', 21.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.3, 5.4, 8.1, 6.0, 2.4, 4.3, 4.1, 'BYE', 3.6, 1.3, 1.3, 3.3, 4.0, 'DNP', 5.5, 6.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2969962.png",
    "name": "Duke Johnson",
    "depthchart": "Backup: RB-2",
    "team": "Houston Texans",
    "projected": 6.0,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "at ",
    "opp_rank_Neg": 1,
    "team_rank_Neu": 7,
    "avg_fp2": 8.41,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 14.24,
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
    "headlineNews": "Season-low yards in win",
    "report": "Johnson gained four yards on two carries and caught two of three targets for 19 yards in Sunday's 24-21 win over the Titans.",
    "analysis": "The combined 23 yards from scrimmage are a season low for Johnson, and the four touches his fewest since Week 3. He entered the game with 14 targets the previous two weeks, but this contest wasn't one in which his pass-catching skills were needed. Starting running back Carlos Hyde rushed for 104 yards on 26 carries, while quarterback Deshaun Watson attempted 27 passes, his second fewest this season. Things could be different for Johnson next week when the Texans face a Buccaneers defense that ranks first against the run but 30th against the pass.",
    "timestamp": "2019-12-16 05:55 AM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.0, 3.1, 3.4, 8.8, 7.2, 12.4, 6.6, 11.4, 16.6, 'BYE', 5.4, 3.5, 17.5, 7.5, 3.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.8, 13.8, 7.4, 5.3, 6.9, 7.6, 6.5, 8.6, 5.2, 'BYE', 6.7, 6.1, 7.5, 8.1, 11.1, 6.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3886818.png",
    "name": "Myles Gaskin",
    "depthchart": "Backup: RB-2",
    "team": "Miami Dolphins",
    "projected": 5.9,
    "opponent": "Cincinnati Bengals",
    "home_away": "",
    "opp_rank_Pos": 32,
    "team_rank_Neg": 32,
    "avg_fp2": 2.6,
    "opp_rank_allowed_fp2_Pos": 30,
    "opp_avg_allowed_fp2": 24.64,
    "fanduelSalary": "$5200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#008E97",
    "tmColorDark": "#005778",
    "tmColorLite_rgba": "rgba(0, 142, 151, 0.2)",
    "tmColorDark_rgba": "rgba(0, 87, 120, 0.2)",
    "tmTextLite": "#f5821f",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/mia.png",
    "headlineNews": "Productive in limited action",
    "report": "Gaskin carried the ball nine times for 43 yards and caught two of three targets for 29 yards during Sunday's 36-20 loss to the Giants.",
    "analysis": "Gaskin once again played second fiddle to Patrick Laird during Sunday's loss, but he notched season-high totals in terms of both rushing and receiving yards. The rookie seventh-round pick has steadily earned increased touches down the stretch, and he could realistically operate in a near-even timeshare with Laird against the Bengals in Week 16.",
    "timestamp": "2019-12-16 08:34 AM",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "BYE",
    "week06": "DNP",
    "week07": "DNP",
    "week08": "DNP",
    "week09": "DNP",
    "week10": 0.5,
    "week11": 0.0,
    "week12": 2.2,
    "week13": 3.1,
    "week14": 1.6,
    "week15": 8.2,
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 0.5, 0.0, 2.2, 3.1, 1.6, 8.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 3.0, 1.9, 0.5, 2.9, -0.5, 5.0, 5.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3125403.png",
    "name": "Brian Hill",
    "depthchart": "Backup: RB-2",
    "team": "Atlanta Falcons",
    "projected": 5.8,
    "opponent": "Jacksonville Jaguars",
    "home_away": "",
    "opp_rank_Pos": 29,
    "team_rank_Neg": 30,
    "avg_fp2": 5.35,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 24.47,
    "fanduelSalary": "$4900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/atl.png",
    "headlineNews": "Peels off 16-yard scamper",
    "report": "Hill gained 16 yards on his lone rush attempt during Sunday's 29-22 win over the 49ers.",
    "analysis": "Devonta Freeman dominated the workload by garnering 12 of Atlanta's 14 RB carries, but Hill made the most of his only offensive opportunity, tearing through the San Francisco defense for an explosive gain to help set up a field goal from Younghoe Koo late in the second quarter. Though Hill was able to accumulate 62 yards and a touchdown on nine carries in Week 14 against Carolina, he has managed just 53 scrimmage yards in his other two appearances since Freeman returned to the lineup Nov. 28 versus New Orleans. Hill is expected to again serve as a complementary option when the Falcons take on Jacksonville's bottom-five rush defense in Week 16.",
    "timestamp": "2019-12-16 09:42 PM",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": 0.0,
    "week05": 0.0,
    "week06": "DNP",
    "week07": 3.5,
    "week08": 8.9,
    "week09": "BYE",
    "week10": 13.6,
    "week11": 4.3,
    "week12": 4.2,
    "week13": 5.2,
    "week14": 12.2,
    "week15": 1.6,
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 0.0, 0.0, 'DNP', 3.5, 8.9, 'BYE', 13.6, 4.3, 4.2, 5.2, 12.2, 1.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 2.1, 1.8, 'DNP', -0.2, 1.7, 'BYE', 4.8, 14.9, 6.5, 3.8, 7.6, 3.4, 5.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2980453.png",
    "name": "Jamaal Williams",
    "depthchart": "Backup: RB-2",
    "team": "Green Bay Packers",
    "projected": 5.7,
    "opponent": "Minnesota Vikings",
    "home_away": "at ",
    "opp_rank_Neu": 8,
    "team_rank_Neu": 17,
    "avg_fp2": 9.28,
    "opp_rank_allowed_fp2_Neu": 9,
    "opp_avg_allowed_fp2": 17.89,
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
    "headlineNews": "Totals 33 yards in win",
    "report": "Williams carried eight times for 26 yards and caught his only target for a seven-yard gain during Sunday's 21-13 win over the Bears.",
    "analysis": "Williams did little with his opportunities, averaging just 3.3 yards per carry while making a minimal impact as a receiver. In all fairness, starter Aaron Jones didn't fare much better, though he scored a pair of touchdowns to salvage his own day from a fantasy perspective. Williams now has just 57 scrimmage yards combined over the last two games and seems unlikely to make a major impact in next Monday's matchup with the Vikings.",
    "timestamp": "2019-12-15 04:09 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.5, 11.6, 9.6, 0.5, 'DNP', 21.6, 11.1, 17.1, 13.9, 6.3, 'BYE', 11.5, 8.7, 2.4, 3.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.3, 3.9, 4.6, 3.9, 'DNP', 9.0, 5.7, 8.9, 9.0, 10.3, 'BYE', 8.6, 4.9, 7.1, 8.7, 5.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4048244.png",
    "name": "Alexander Mattison",
    "depthchart": "Backup: RB-2",
    "team": "Minnesota Vikings",
    "projected": 5.7,
    "opponent": "Green Bay Packers",
    "home_away": "",
    "opp_rank_Pos": 24,
    "team_rank_Pos": 4,
    "avg_fp2": 4.88,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 23.76,
    "fanduelSalary": "$5600",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Ankle",
    "tmColorLite": "#e0aa19",
    "tmColorDark": "#300e5a",
    "tmColorLite_rgba": "rgba(224, 170, 25, 0.2)",
    "tmColorDark_rgba": "rgba(48, 14, 90, 0.2)",
    "tmTextLite": "#e0aa19",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/min.png",
    "headlineNews": "Won't play Sunday",
    "report": "Mattison (ankle) has been ruled out for Sunday's game against the Chargers.",
    "analysis": "Unable to practice in any capacity this week, Mattison will be inactive for the first time in his young career. Mike Boone and/or Ameer Abdullah will handle backup work, with Dalvin Cook potentially getting even more touches than usual if the Vikings end up in a tight contest.",
    "timestamp": "2019-12-13 10:50 AM",
    "week01": 4.9,
    "week02": 2.5,
    "week03": 11.8,
    "week04": 1.8,
    "week05": 5.2,
    "week06": 4.3,
    "week07": 1.8,
    "week08": 7.4,
    "week09": 0.6,
    "week10": 5.9,
    "week11": 0.5,
    "week12": "BYE",
    "week13": 9.3,
    "week14": 7.4,
    "week15": "DNP",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.9, 2.5, 11.8, 1.8, 5.2, 4.3, 1.8, 7.4, 0.6, 5.9, 0.5, 'BYE', 9.3, 7.4, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.9, 4.4, 3.6, 4.6, 3.8, 3.5, 4.2, 4.8, 3.8, 2.3, 3.8, 'BYE', 1.9, 4.0, 'DNP', 5.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/8479.png",
    "name": "Frank Gore",
    "depthchart": "Backup: RB-2",
    "team": "Buffalo Bills",
    "projected": 5.7,
    "opponent": "New England Patriots",
    "home_away": "at ",
    "opp_rank_Neu": 7,
    "team_rank_Pos": 5,
    "avg_fp2": 5.91,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 13.74,
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
    "headlineNews": "Struggles despite increased touches",
    "report": "Gore rushed 10 times for 15 yards in Sundays 17-10 win over the Steelers.",
    "analysis": "Gore trailed starter Devin Singletary (21 carries) by a decent margin yet again, but the 10 carries were the highest total the veteran has received since Week 12. Still, it has become clear that Gore is the backup in this offense, giving him a low fantasy ceiling as the season comes to a close. A rough matchup against a staunch Patriots defense Saturday doesn't help his case.",
    "timestamp": "2019-12-15 10:22 PM",
    "week01": 2.0,
    "week02": 15.3,
    "week03": 15.9,
    "week04": 10.9,
    "week05": 7.9,
    "week06": "BYE",
    "week07": 7.1,
    "week08": 3.4,
    "week09": 1.5,
    "week10": 2.1,
    "week11": 5.0,
    "week12": 6.5,
    "week13": 3.0,
    "week14": 0.6,
    "week15": 1.5,
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.0, 15.3, 15.9, 10.9, 7.9, 'BYE', 7.1, 3.4, 1.5, 2.1, 5.0, 6.5, 3.0, 0.6, 1.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.4, 3.9, 11.7, 7.2, 6.5, 'BYE', 8.6, 11.3, 10.5, 4.6, 4.9, 5.2, 5.7, 3.6, 3.3, 5.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16913.png",
    "name": "James White",
    "depthchart": "Backup: RB-2",
    "team": "New England Patriots",
    "projected": 5.3,
    "opponent": "Buffalo Bills",
    "home_away": "",
    "opp_rank_Neu": 10,
    "team_rank_Neu": 19,
    "avg_fp2": 11.55,
    "opp_rank_allowed_fp2_Neu": 14,
    "opp_avg_allowed_fp2": 19.95,
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
    "headlineNews": "Nabs receiving touchdown",
    "report": "White caught three of four targets for 49 yards and a touchdown and added 13 yards on three carries during Sunday's 34-13 win over the Bengals.",
    "analysis": "White got New England on the board early in the first quarter, taking a quick screen for a 23-yard touchdown as he twisted and turned through Cincinnati's defense. White now has three receiving touchdowns in December after just two total touchdowns in his first 11 games and a general late-November lull in production. The storyline in New England has been that Tom Brady lacks trust in the majority of his potential targets. White and Julian Edelman may be the only exceptions, so it's reasonable to expect Brady to look the veteran back's way often down the stretch. Next up is a Buffalo defense that White nabbed eight passes for 57 yards against in Week 4.",
    "timestamp": "2019-12-15 03:02 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.7, 10.4, 'DNP', 9.8, 10.2, 9.0, 9.4, 9.9, 15.4, 'BYE', 7.6, 0.4, 33.7, 9.9, 13.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.5, 11.7, 'DNP', 5.4, 8.8, 8.1, 4.8, 4.8, 4.5, 'BYE', 9.1, 7.6, 6.8, 7.5, 6.1, 5.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15920.png",
    "name": "Latavius Murray",
    "depthchart": "Backup: RB-2",
    "team": "New Orleans Saints",
    "projected": 5.2,
    "opponent": "Tennessee Titans",
    "home_away": "at ",
    "opp_rank_Neu": 13,
    "team_rank_Neu": 16,
    "avg_fp2": 9.19,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 21.51,
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
    "headlineNews": "Logs 11 touches in MNF win",
    "report": "Murray rushed nine times for 29 yards, adding two receptions on three targets for 20 yards in the Saints' 34-7 win over the Colts on Monday.",
    "analysis": "Murray followed up last week's 94-yard effort with a moderate output in Monday's blowout win. Despite the huge lead New Orleans built up early, Murray saw just 11 total touches, ceding some cleanup work to Zach Line and Dwayne Washington. Murray's performances have been inconsistent when sharing the field with Alvin Kamara, a pattern that will likely continue unless Kamara gets sidelined.",
    "timestamp": "2019-12-16 08:50 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.7, 2.8, 0.2, 2.5, 4.4, 9.4, 29.5, 32.2, 'BYE', 2.9, 4.2, 12.4, 0.2, 10.4, 5.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.2, 7.3, 3.9, 5.2, 5.7, 4.8, 6.9, 5.7, 'BYE', 7.5, 2.6, 8.9, 8.3, 4.9, 6.3, 5.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2575965.png",
    "name": "Elijhaa Penny",
    "depthchart": "Reserve: RB-3",
    "team": "New York Giants",
    "projected": 5.1,
    "opponent": "Washington Redskins",
    "home_away": "at ",
    "opp_rank_Pos": 28,
    "team_rank_Neu": 22,
    "avg_fp2": 0.91,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 24.44,
    "fanduelSalary": "$4500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#0B2265",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(11, 34, 101, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png",
    "headlineNews": "Rushes twice in loss",
    "report": "Penny took two carries for two yards and couldn't haul in his only target during Sunday's 31-13 loss to the Packers.",
    "analysis": "Penny was deployed on two third downs and converted on one of them while being stuffed on the other. The 26-year-old isn't the concern of fantasy owners, but he's a worthy real-life value in short-yardage situations.",
    "timestamp": "2019-12-02 09:41 AM",
    "week01": 0.3,
    "week02": 0.0,
    "week03": 0.0,
    "week04": 1.2,
    "week05": 2.9,
    "week06": 1.1,
    "week07": 6.0,
    "week08": 0.3,
    "week09": 0.0,
    "week10": "DNP",
    "week11": "BYE",
    "week12": 0.0,
    "week13": 0.2,
    "week14": 0.0,
    "week15": -0.2,
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.3, 0.0, 0.0, 1.2, 2.9, 1.1, 6.0, 0.3, 0.0, 'DNP', 'BYE', 0.0, 0.2, 0.0, -0.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.4, 2.9, 1.4, 1.6, 2.2, 2.1, 1.6, 3.6, 2.2, 'DNP', 'BYE', 1.2, 2.6, 5.9, 3.0, 5.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3122672.png",
    "name": "Royce Freeman",
    "depthchart": "Backup: RB-2",
    "team": "Denver Broncos",
    "projected": 5.0,
    "opponent": "Detroit Lions",
    "home_away": "",
    "opp_rank_Neu": 18,
    "team_rank_Neu": 18,
    "avg_fp2": 7.79,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 24.44,
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
    "headlineNews": "Limited to 26 yards",
    "report": "Freeman ran for 12 yards on five carries and added 14 yards on four catches during Sunday's 23-3 loss in Kansas City.",
    "analysis": "Freeman, and the Denver ground game more generally, were extremely limited during Sunday's loss. Head coach Vic Fangio told reporters Monday that the poor production was the result of poor blocking, some missed opportunities by the backs, and the Broncos digging themselves into an early hole. It was more of the same for Freeman, who has been held under 30 yards in four of his last six contests. He scored just once during that span. He's a hard back on which to rely, but his receiving ability should be on full display Sunday against Detroit's 31st-ranked pass defense.",
    "timestamp": "2019-12-16 04:39 PM",
    "week01": 6.6,
    "week02": 12.7,
    "week03": 9.3,
    "week04": 7.0,
    "week05": 7.7,
    "week06": 10.1,
    "week07": 14.7,
    "week08": 11.0,
    "week09": 1.9,
    "week10": "BYE",
    "week11": 5.0,
    "week12": 3.9,
    "week13": 4.4,
    "week14": 10.2,
    "week15": 4.6,
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.6, 12.7, 9.3, 7.0, 7.7, 10.1, 14.7, 11.0, 1.9, 'BYE', 5.0, 3.9, 4.4, 10.2, 4.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.6, 4.0, 4.1, 5.0, 8.3, 5.5, 6.0, 5.8, 5.0, 'BYE', 5.3, 5.9, 6.6, 8.5, 5.1, 5.0]
                    }
                    
                    ]
               }
            }];




$scope.positionWR = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15795.png",
    "name": "DeAndre Hopkins",
    "depthchart": "Starter: WR-1",
    "team": "Houston Texans",
    "projected": 19.3,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "at ",
    "opp_rank_Pos": 30,
    "team_rank_Neu": 11,
    "avg_fp2": 15.2,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 37.95,
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
    "headlineNews": "Eclipses century mark in win",
    "report": "Hopkins brought in six of eight targets for 119 yards in the Texans' 24-21 win over the Titans on Sunday.",
    "analysis": "Hopkins paced the Texans in receptions, receiving yardage and targets on the afternoon, consistently beating the Titans' porous coverage. The multi-time Pro Bowler now has back-to-back 100-yard games for only the second time this season, and he's just one reception away from a second consecutive 100-catch campaign. Hopkins will be primed for another fruitful fantasy day on fantasy championship weekend for many leagues when he sees the Buccaneers' lackluster secondary in a Week 16 matchup Saturday.",
    "timestamp": "2019-12-15 02:18 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [27.1, 6.5, 9.7, 5.6, 12.3, 12.0, 21.1, 16.4, 15.4, 'BYE', 11.5, 24.4, 13.14, 22.7, 14.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.0, 12.3, 12.2, 13.9, 17.9, 13.3, 15.8, 15.3, 12.9, 'BYE', 13.1, 17.4, 14.0, 14.5, 11.2, 19.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3128429.png",
    "name": "Courtland Sutton",
    "depthchart": "Starter: WR-1",
    "team": "Denver Broncos",
    "projected": 18.8,
    "opponent": "Detroit Lions",
    "home_away": "",
    "opp_rank_Pos": 31,
    "team_rank_Neg": 30,
    "avg_fp2": 12.33,
    "opp_rank_allowed_fp2_Pos": 30,
    "opp_avg_allowed_fp2": 33.74,
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
    "headlineNews": "Comes alive in fourth quarter",
    "report": "Sutton caught four of 10 targets for 79 yards during Sunday's 23-3 loss in Kansas City.",
    "analysis": "Sutton was bottled up for the bulk of Sunday's outing before catching a quick screen pass and cutting upfield for a 33-yard gain with the Broncos at their own goal line. Sutton had a nice two-touchdown game in rookie Drew Lock's debut but has just nine catches for 113 yards in the two games since. Part of that can be attributed to defenses keying on him, though Sutton also had a drop or two Sunday. Look for him to get back on track down the stretch as Denver takes on the league's 31st and 28th-ranked pass defenses, respectively, in Detroit and Oakland to wind down the season.",
    "timestamp": "2019-12-15 04:58 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [15.5, 6.0, 11.2, 21.2, 17.2, 9.6, 11.7, 8.7, 14.8, 'BYE', 16.32, 3.2, 21.4, 5.9, 9.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.9, 6.1, 7.3, 6.9, 6.2, 10.0, 12.2, 14.9, 10.5, 'BYE', 14.9, 10.2, 4.1, 11.9, 15.1, 18.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2976316.png",
    "name": "Michael Thomas",
    "depthchart": "Starter: WR-1",
    "team": "New Orleans Saints",
    "projected": 17.0,
    "opponent": "Tennessee Titans",
    "home_away": "at ",
    "opp_rank_Pos": 25,
    "team_rank_Neu": 7,
    "avg_fp2": 19.2,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 27.44,
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
    "headlineNews": "Monster effort in blowout win",
    "report": "Thomas corralled all 12 of his targets for 128 yards and a touchdown in the Saints' 34-7 win over the Colts on Monday.",
    "analysis": "Thomas was superb Monday, bringing in every one of the team-leading 12 targets thrown his way. With the huge stat line, the fourth-year receiver adds to a career year in which he's already crushed his previous bests in receiving yards and receptions. Heading into Week 16, Thomas boasts totals of 133 receptions and 1,552 receiving yards. Both of those figures lead the NFL, and Thomas sits just 11 receptions away from breaking Marvin Harrison's single-season receptions record. He'll have a chance to make history when the Saints travel to Tennessee in Week 16.",
    "timestamp": "2019-12-16 08:20 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [17.3, 13.9, 13.9, 14.0, 35.7, 12.9, 17.6, 21.8, 'BYE', 21.7, 21.4, 21.1, 7.8, 24.9, 24.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.1, 13.1, 10.6, 15.2, 15.0, 12.7, 12.9, 14.8, 'BYE', 17.4, 23.6, 17.8, 15.7, 14.3, 19.5, 17.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3120348.png",
    "name": "JuJu Smith-Schuster",
    "depthchart": "Starter: WR-1",
    "team": "Pittsburgh Steelers",
    "projected": 16.7,
    "opponent": "New York Jets",
    "home_away": "at ",
    "opp_rank_Neu": 19,
    "team_rank_Neg": 31,
    "avg_fp2": 8.74,
    "opp_rank_allowed_fp2_Pos": 24,
    "opp_avg_allowed_fp2": 31.32,
    "fanduelSalary": "$6800",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Knee",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/pit.png",
    "headlineNews": "Status murky for Week 16",
    "report": "Coach Mike Tomlin indicated Tuesday that he currently views Smith-Schuster (knee) as questionable for this weekend's game against the Jets, Gerry Dulac of the Pittsburgh Post-Gazette reports.",
    "analysis": "Though Smith-Schuster hasn't played since Week 11 due to a concussion (which he's since recovered from) and a left knee injury, Tomlin's comments suggest that the wideout is viewed as day-to-day rather than week-to-week. Ultimately, a decision on Smith-Schuster's status for Sunday's game will come down to what he's able to do in the Steelers' practices Wednesday through Friday. Smith-Schuster began Week 15 prep as a full participant in practice, but the Steelers chose to scale back his workload the following two days after his knee didn't respond to the activity as hoped.",
    "timestamp": "2019-12-17 09:46 AM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.8, 10.9, 15.6, 3.0, 15.0, 1.2, 'BYE', 18.8, 3.1, 5.9, 3.1, 'DNP', 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.4, 14.0, 11.7, 15.9, 19.7, 10.9, 'BYE', 14.1, 13.2, 15.7, 11.8, 'DNP', 'DNP', 'DNP', 'DNP', 16.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2976212.png",
    "name": "Stefon Diggs",
    "depthchart": "Starter: WR-1",
    "team": "Minnesota Vikings",
    "projected": 15.9,
    "opponent": "Green Bay Packers",
    "home_away": "",
    "opp_rank_Neu": 22,
    "team_rank_Neu": 12,
    "avg_fp2": 11.95,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 25.55,
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
    "headlineNews": "Contributes 76 receiving yards",
    "report": "Diggs caught four of six targets for 76 yards and rushed once for four yards during Sunday's 39-10 win over the Chargers.",
    "analysis": "Diggs led the team in targets, averaging 19.0 yards per catch thanks largely to his long gain of 46 yards. He could have had an even better stat line had the game remained competitive, but five turnovers from the home team greatly affected the game flow. Still, Diggs went over the 1,000-yard mark for the season and should be busier in next Monday's pivotal game against the Packers.",
    "timestamp": "2019-12-15 07:21 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.7, 9.4, 3.0, 12.3, 5.9, 40.0, 17.7, 15.8, 2.1, 6.4, 20.6, 'BYE', 7.2, 12.2, 10.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.5, 5.4, 10.7, 7.0, 8.8, 6.1, 9.7, 10.6, 9.2, 9.7, 12.5, 'BYE', 14.7, 17.7, 15.0, 15.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13982.png",
    "name": "Julio Jones",
    "depthchart": "Starter: WR-1",
    "team": "Atlanta Falcons",
    "projected": 15.8,
    "opponent": "Jacksonville Jaguars",
    "home_away": "",
    "opp_rank_Neu": 14,
    "team_rank_Pos": 4,
    "avg_fp2": 14.75,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 25.81,
    "fanduelSalary": "$8000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/atl.png",
    "headlineNews": "Nabs last-second, game-winning TD",
    "report": "Jones corralled 13 of 20 targets for 134 yards and two touchdowns during Sunday's 29-22 win against San Francisco.",
    "analysis": "The 30-year-old Jones put on a stellar performance against his former offensive coordinator, hauling in a Matt Ryan TD pass with two seconds remaining in the fourth quarter to edge Atlanta past Kyle Shanahan's 49ers. Jones entered Week 15 in the midst of a nine-game scoring drought, but he tallied a TD in both the second and fourth quarters while more than quadrupling the yardage output of the Falcons' No. 2 receiver. His ceiling remains about as high as any receiver in fantasy heading into a Week 16 matchup against a Jaguars defense that has conceded 255-plus passing yards in four straight outings.",
    "timestamp": "2019-12-15 04:58 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.1, 25.1, 22.8, 7.3, 5.7, 14.8, 12.3, 20.2, 'BYE', 9.4, 11.7, 9.3, 'DNP', 9.1, 31.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.2, 16.2, 13.7, 16.6, 16.3, 15.5, 20.3, 11.0, 'BYE', 18.5, 15.9, 19.4, 'DNP', 11.6, 12.3, 15.8]
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
    "opponent": "Chicago Bears",
    "home_away": "at ",
    "opp_rank_Neu": 13,
    "team_rank_Pos": 3,
    "avg_fp2": 14.15,
    "opp_rank_allowed_fp2_Neu": 7,
    "opp_avg_allowed_fp2": 24.63,
    "fanduelSalary": "$8100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Strikes twice in snow game",
    "report": "Hill caught five of seven targets for 67 yards and two touchdowns during Sunday's 23-3 win over Denver. He added a one-yard run during the game.",
    "analysis": "The snowy conditions were much more conducive to the short passing game, but that's not what the Chiefs and Hill were thinking early during Sunday's contest. Hill and Patrick Mahomes capped Kansas City's opening drive off with a 41-yard strike on a deep out-breaking route, as Hill continued his streak of big plays against Denver. Hill came back around later for a lunging five-yard touchdown reception in the third quarter for his second multi-touchdown game of the season. Hill has recorded at least six touches in each of the last six games in which he has finished. Next up is a Bears defense that has been good at preventing the kind of big plays that Hill generates, surrendering just 36 passes of 20 or more yards through Week 14, seventh fewest in the league.",
    "timestamp": "2019-12-15 02:24 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.1, 'DNP', 'DNP', 'DNP', 'DNP', 22.5, 14.9, 11.1, 23.5, 27.5, 0.0, 'BYE', 7.6, 10.0, 21.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.8, 'DNP', 'DNP', 'DNP', 'DNP', 12.2, 12.0, 17.4, 12.2, 17.7, 15.7, 'BYE', 12.2, 15.1, 16.1, 15.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2577327.png",
    "name": "Tyler Lockett",
    "depthchart": "Starter: WR-1",
    "team": "Seattle Seahawks",
    "projected": 14.7,
    "opponent": "Arizona Cardinals",
    "home_away": "",
    "opp_rank_Pos": 32,
    "team_rank_Neu": 10,
    "avg_fp2": 12.74,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 31.78,
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
    "headlineNews": "Puts up boom performance",
    "report": "Lockett caught eight of nine targets for 120 yards and a touchdown in Sunday's 30-24 win over the Panthers.",
    "analysis": "Lockett was disappointing over the previous three games, totaling just five receptions for 81 yards. The fifth-year wideout admitted after the game that he's still feeling sick and is down 10 pounds, according to Joe Fann of NBC Sports Northwest, but Lockett looked as explosive as ever with his fourth 100-yard performance of the year while finding the end zone for the first time since Week 9. Lockett's boom-or-bust tag will continue to follow him, but fantasy owners should feel confident deploying him again Week 16 against the Cardinals, who have struggled to the tune of 294.2 passing yards allowed per game -- the worst in the league.",
    "timestamp": "2019-12-15 01:29 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.9, 12.9, 26.9, 7.1, 12.3, 10.3, 14.3, 13.0, 33.7, 4.4, 'BYE', 4.3, 0.0, 6.3, 22.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.2, 11.6, 8.8, 15.3, 11.0, 8.7, 12.6, 10.6, 15.6, 12.1, 'BYE', 8.9, 12.7, 9.9, 11.6, 14.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3115394.png",
    "name": "D.J. Chark",
    "depthchart": "Starter: WR-1",
    "team": "Jacksonville Jaguars",
    "projected": 14.3,
    "opponent": "Atlanta Falcons",
    "home_away": "at ",
    "opp_rank_Neu": 23,
    "team_rank_Neu": 14,
    "avg_fp2": 13.93,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 29.25,
    "fanduelSalary": "$6300",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Ankle",
    "tmColorLite": "#006778",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 103, 120, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#006778",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/jax.png",
    "headlineNews": "Returns to field Monday",
    "report": "Coach Doug Marrone said Chark (ankle) received clearance to do on-field work Monday, Michael DiRocco of ESPN.com reports.",
    "analysis": "After rolling his ankle during the Jags' Week 14 loss to the Chargers, Chark was unable to practice last week and didn't suit up this past Sunday at Oakland. Per Marrone, Chark's activity included running and cutting, adding that the development is \"great news\" for his odds to return Sunday in Atlanta. Consequently, Chark's practice reps will be something to watch as the week goes on.",
    "timestamp": "2019-12-16 11:21 AM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [22.6, 15.0, 15.6, 6.4, 32.4, 5.8, 8.8, 16.9, 5.2, 'BYE', 26.4, 8.3, 5.7, 12.0, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [0.5, 6.1, 5.0, 6.9, 7.3, 10.3, 10.2, 11.6, 12.9, 'BYE', 8.6, 14.7, 11.2, 10.5, 'DNP', 14.3]
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
    "opponent": "Minnesota Vikings",
    "home_away": "at ",
    "opp_rank_Neu": 20,
    "team_rank_Neu": 17,
    "avg_fp2": 10.48,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 30.74,
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
    "headlineNews": "Finds end zone vs. Bears",
    "report": "Adams caught seven of 13 targets for 103 yards and a touchdown during Sunday's 21-13 win over the Bears.",
    "analysis": "Adams received a whopping 39 percent of the team's targets on the day, topping the 100-yard mark for the fourth time this season. He also scored a 29-yard touchdown to get his team on the board in the first quarter, giving him four TDs in his last four games. Adams is thriving after a rough first half of the season and will look to take advantage of a vulnerable Vikings secondary next Monday.",
    "timestamp": "2019-12-15 03:26 PM",
    "week01": 5.6,
    "week02": 14.1,
    "week03": 7.6,
    "week04": 23.0,
    "week05": 0.0,
    "week06": 0.0,
    "week07": "DNP",
    "week08": 0.0,
    "week09": 7.6,
    "week10": 15.3,
    "week11": "BYE",
    "week12": 15.8,
    "week13": 21.4,
    "week14": 6.1,
    "week15": 19.8,
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.6, 14.1, 7.6, 23.0, 0.0, 0.0, 'DNP', 0.0, 7.6, 15.3, 'BYE', 15.8, 21.4, 6.1, 19.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.7, 12.6, 11.3, 9.1, 7.4, 13.2, 'DNP', 5.7, 11.3, 14.5, 'BYE', 10.4, 12.5, 14.9, 16.8, 14.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16733.png",
    "name": "Odell Beckham Jr.",
    "depthchart": "Starter: WR-1",
    "team": "Cleveland Browns",
    "projected": 13.9,
    "opponent": "Baltimore Ravens",
    "home_away": "",
    "opp_rank_Neu": 7,
    "team_rank_Neu": 19,
    "avg_fp2": 9.74,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 28.1,
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
    "headlineNews": "Wants to play final two weeks",
    "report": "Beckham may need surgery for a sports hernia after the season, but he hopes to play Week 16 against the Ravens and Week 17 against the Bengals, Mary Kay Cabot of the Cleveland Plain Dealer reports. \"It's a decision we'll find out when the time comes, but as long as 80 (Jarvis Landry) is on the field, as long as these boys are out here, I'm going to go out there and give my all,'' Beckham said. \"I love football way too much to think about sitting out and doing all of these things.\"",
    "analysis": "With the Browns eliminated from playoff contention after Sunday's 38-24 loss to Arizona, there might be some consideration given to shutting Beckham down for the year. His quote does leave the door open for that scenario, but it sounds like he prefers to play the final two games. Beckham caught eight passes for 66 yards on a season-high 13 targets in the Week 15 loss, with a dropped deep ball potentially costing him what could've been his first 100-yard game since Oct. 13.",
    "timestamp": "2019-12-16 06:41 AM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.6, 25.1, 8.6, 3.0, 4.0, 13.1, 'BYE', 7.7, 10.7, 8.2, 8.0, 17.4, 4.4, 4.9, 10.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.4, 20.6, 14.5, 19.3, 15.5, 11.6, 'BYE', 14.1, 10.4, 14.7, 15.0, 20.8, 15.0, 15.1, 17.4, 13.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15818.png",
    "name": "Keenan Allen",
    "depthchart": "Starter: WR-1",
    "team": "Los Angeles Chargers",
    "projected": 13.9,
    "opponent": "Oakland Raiders",
    "home_away": "",
    "opp_rank_Pos": 27,
    "team_rank_Pos": 5,
    "avg_fp2": 12.98,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 30.3,
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
    "headlineNews": "Makes nine catches vs. Vikings",
    "report": "Allen caught nine of 10 targets for 99 yards during Sunday's 39-10 loss to the Vikings.",
    "analysis": "Allen was targeted heavily with his team trailing throughout, and he finished with his best receiving output since Week 3 as a result. His long gain went for just 19 yards, but his heavy usage helped him to a solid day from a fantasy perspective. Allen's big game puts him over 1,000 yards for the season, and he should remain heavily involved during next Sunday's game against the Raiders.",
    "timestamp": "2019-12-15 07:03 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [22.3, 13.8, 37.1, 7.3, 3.8, 4.3, 8.1, 8.8, 5.5, 12.6, 17.1, 'BYE', 15.8, 10.8, 14.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.3, 15.5, 14.8, 12.7, 12.3, 11.7, 10.4, 10.8, 12.2, 17.6, 13.0, 'BYE', 15.6, 14.3, 12.7, 13.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3895856.png",
    "name": "Christian Kirk",
    "depthchart": "Starter: WR-1",
    "team": "Arizona Cardinals",
    "projected": 13.6,
    "opponent": "Seattle Seahawks",
    "home_away": "at ",
    "opp_rank_Pos": 29,
    "team_rank_Neg": 24,
    "avg_fp2": 11.2,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 29.25,
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
    "headlineNews": "Finishes with four grabs",
    "report": "Kirk caught four of five targets for 33 yards and rushed once for 28 yards in Sunday's 38-24 win over the Browns.",
    "analysis": "Kirk was pretty much held in check in the passing game, where he trailed Damiere Byrd and Larry Fitzgerald in yards, but he at least salvaged some production with a career-long rush. The second-year pro also caught at least four passes for the ninth time in 11 appearances this season. He was shaken up at one point during the game, but ended up finishing the contest. Kirk will aim for a better overall outing in Week 16 versus the Seahawks.",
    "timestamp": "2019-12-15 05:39 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.4, 14.4, 10.9, 6.3, 'DNP', 'DNP', 'DNP', 13.8, 2.6, 34.8, 7.2, 'BYE', 3.8, 12.9, 8.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.5, 11.3, 8.7, 7.4, 'DNP', 'DNP', 'DNP', 9.6, 11.6, 19.0, 13.0, 'BYE', 11.7, 13.7, 13.0, 13.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3045144.png",
    "name": "Tyler Boyd",
    "depthchart": "Starter: WR-1",
    "team": "Cincinnati Bengals",
    "projected": 13.5,
    "opponent": "Miami Dolphins",
    "home_away": "at ",
    "opp_rank_Pos": 24,
    "team_rank_Neu": 22,
    "avg_fp2": 10.01,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 34.04,
    "fanduelSalary": "$6300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#ea7330",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(234, 115, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#ea7330",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png",
    "headlineNews": "Limited to 26 yards",
    "report": "Boyd caught three of seven targets for 26 yards during Sunday's 34-13 loss to the Patriots.",
    "analysis": "Sunday snapped a nice little three-game run for Boyd during which he caught five passes per game, scored twice and averaged 80.7 total yards per contest. As the top receiver for a team that frequently plays from behind, Boyd is one of the few Bengals worth considering from a fantasy perspective. The Patriots possess one of the top pass defenses in the league, so Boyd can be forgiven for a bit of a clunker. Cincinnati plays a struggling Miami squad Week 16, making Boyd a solid-but-not-spectacular play.",
    "timestamp": "2019-12-15 03:51 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.3, 17.2, 9.7, 4.8, 23.3, 2.5, 6.0, 9.8, 'BYE', 9.2, 1.5, 16.6, 14.4, 10.7, 4.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.5, 9.5, 10.5, 12.0, 10.6, 12.2, 9.8, 8.6, 'BYE', 16.0, 12.7, 12.1, 8.0, 10.9, 11.4, 13.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14924.png",
    "name": "T.Y. Hilton",
    "depthchart": "Starter: WR-1",
    "team": "Indianapolis Colts",
    "projected": 13.0,
    "opponent": "Carolina Panthers",
    "home_away": "",
    "opp_rank_Neu": 16,
    "team_rank_Neg": 27,
    "avg_fp2": 11.22,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 32.31,
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
    "headlineNews": "Quiet in return",
    "report": "Hilton caught four of nine targets for 25 yards in Monday night's 34-7 loss to the Saints.",
    "analysis": "Hilton returned from a two-game absence to lead the Colts in targets, but actually produced next to nothing prior to Indianapolis' final offensive series. On that drive, though, the wideout surfaced for three catches, salvaging some yardage late. Hilton's calf injury seemed to limit his snap count over the course of Monday's game, so it may be worthwhile to continue to monitor his progress ahead of Week 16's matchup against the Panthers.",
    "timestamp": "2019-12-16 08:24 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [24.7, 12.3, 16.5, 'DNP', 5.7, 'BYE', 16.4, 6.4, 'DNP', 'DNP', 'DNP', 3.3, 'DNP', 'DNP', 4.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.5, 12.2, 11.0, 'DNP', 10.8, 'BYE', 10.8, 14.3, 'DNP', 'DNP', 'DNP', 12.5, 'DNP', 'DNP', 11.8, 13.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2574808.png",
    "name": "Robby Anderson",
    "depthchart": "Starter: WR-1",
    "team": "New York Jets",
    "projected": 12.5,
    "opponent": "Pittsburgh Steelers",
    "home_away": "",
    "opp_rank_Neg": 5,
    "team_rank_Neg": 29,
    "avg_fp2": 8.76,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 25.42,
    "fanduelSalary": "$6100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#125740",
    "tmColorDark": "#003f2d",
    "tmColorLite_rgba": "rgba(18, 87, 64, 0.2)",
    "tmColorDark_rgba": "rgba(0, 63, 45, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png",
    "headlineNews": "Another solid late-season effort",
    "report": "Anderson secured four of six targets for 66 yards and caught a two-point conversion pass in the Jets' 42-21 loss to the Ravens on Thursday.",
    "analysis": "Anderson was second only to Jamison Crowder in receptions and receiving yardage for the Jets on the night. Even though he failed to notch a touchdown grab for only the second time in the last five games, Anderson did find the end zone on a two-point conversion catch following a fourth-quarter Crowder scoring reception. Anderson will look to boost his numbers back  up across the board in a Week 16 battle against the Steelers a week from Sunday.",
    "timestamp": "2019-12-12 09:39 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.8, 10.1, 2.6, 'BYE', 2.1, 21.0, 1.5, 6.3, 4.3, 1.6, 7.1, 16.6, 13.6, 21.5, 10.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.6, 7.5, 9.5, 'BYE', 10.6, 6.9, 9.4, 9.7, 13.2, 13.0, 7.4, 8.8, 8.3, 16.3, 10.4, 12.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16460.png",
    "name": "Adam Thielen",
    "depthchart": "Backup: WR-2",
    "team": "Minnesota Vikings",
    "projected": 12.4,
    "opponent": "Green Bay Packers",
    "home_away": "",
    "opp_rank_Neu": 22,
    "team_rank_Neu": 12,
    "avg_fp2": 11.05,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 25.55,
    "fanduelSalary": "$7100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e0aa19",
    "tmColorDark": "#300e5a",
    "tmColorLite_rgba": "rgba(224, 170, 25, 0.2)",
    "tmColorDark_rgba": "rgba(48, 14, 90, 0.2)",
    "tmTextLite": "#e0aa19",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/min.png",
    "headlineNews": "Makes three catches in return",
    "report": "Thielen caught all three of his targets for 27 yards during Sunday's 39-10 win over the Chargers.",
    "analysis": "Thielen returned from a long injury absence and did little of note despite his team's dominance on the scoreboard. This was quite a letdown for fantasy owners who patiently awaited Thielen's return to the lineup, but the particular flow of this game likely played a big part in Thielen's tepid production. Barring a setback, he should assume a larger role in a more competitive game against the Packers next Monday.",
    "timestamp": "2019-12-15 07:13 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.8, 10.28, 19.1, 1.6, 28.5, 14.7, 9.0, 'DNP', 0.0, 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 4.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.0, 9.7, 13.1, 10.6, 5.1, 9.5, 11.0, 'DNP', 11.5, 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 10.7, 12.4]
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
    "opponent": "New Orleans Saints",
    "home_away": "",
    "opp_rank_Neu": 17,
    "team_rank_Neu": 21,
    "avg_fp2": 11.14,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 31.56,
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
    "headlineNews": "Erupts again Week 15",
    "report": "Brown hauled in eight of 13 targets for 114 yards and a touchdown during Sunday's 24-21 loss to the Texans.",
    "analysis": "The Ole Miss product is steadily evolving into an Offensive Rookie of the Year candidate as the season wears on, as he now has seven receiving scores and sits just 107 yards short of the 1,000-yard mark. Brown has been seemingly unstoppable over the past month, specifically, racking up an incredible 111.8 receiving yards per game with four total scores since the Titans' Week 11 bye. He remains a promising fantasy play Week 16, taking on a Saints defense that comes into Monday Night Football as a bottom-10 unit in terms of both receiving yards (2,327) and receiving TDs (16) allowed to opposing wideouts.",
    "timestamp": "2019-12-15 02:45 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.5, 4.0, 0.9, 22.9, 3.7, 3.3, 9.2, 8.1, 10.1, 2.2, 'BYE', 21.5, 6.0, 31.1, 21.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.2, 7.8, 4.8, 7.8, 7.8, 8.4, 5.7, 9.5, 10.2, 7.4, 'BYE', 8.3, 16.4, 6.1, 10.0, 12.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3915416.png",
    "name": "D.J. Moore",
    "depthchart": "Starter: WR-1",
    "team": "Carolina Panthers",
    "projected": 11.5,
    "opponent": "Indianapolis Colts",
    "home_away": "at ",
    "opp_rank_Neu": 21,
    "team_rank_Neu": 18,
    "avg_fp2": 13.31,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 31.31,
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
    "headlineNews": "Contributes 113 receiving yards",
    "report": "Moore caught eight of 12 targets for 113 yards during Sunday's 30-24 loss to the Seahawks.",
    "analysis": "Moore led the team in targets and receiving yards yet again while tying Christian McCaffrey in receptions. He broke off a long gain of 22 yards and was used consistently with Carolina playing from behind all game. Moore has now topped the 100-yard mark four times over the last seven contests and is averaging an impressive 101.6 yards per game during that span. He will look to continue his breakout season next Sunday against the Colts.",
    "timestamp": "2019-12-15 03:49 PM",
    "week01": 9.1,
    "week02": 13.4,
    "week03": 12.9,
    "week04": 5.9,
    "week05": 12.1,
    "week06": 12.1,
    "week07": "BYE",
    "week08": 6.3,
    "week09": 13.6,
    "week10": 16.5,
    "week11": 13.5,
    "week12": 28.4,
    "week13": 16.2,
    "week14": 10.1,
    "week15": 16.3,
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.1, 13.4, 12.9, 5.9, 12.1, 12.1, 'BYE', 6.3, 13.6, 16.5, 13.5, 28.4, 16.2, 10.1, 16.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.8, 11.0, 13.5, 13.1, 9.7, 16.9, 'BYE', 7.3, 10.7, 10.3, 15.6, 8.4, 10.4, 8.6, 11.1, 11.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3052876.png",
    "name": "Will Fuller",
    "depthchart": "Backup: WR-2",
    "team": "Houston Texans",
    "projected": 11.5,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "at ",
    "opp_rank_Pos": 30,
    "team_rank_Neu": 11,
    "avg_fp2": 10.74,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 37.95,
    "fanduelSalary": "$6100",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Hamstring",
    "tmColorLite": "#A71930",
    "tmColorDark": "#03202F",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(3, 32, 47, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/hou.png",
    "headlineNews": "Limited at Tuesday's practice",
    "report": "Fuller (hamstring) was a limited participant in Tuesday's practice.",
    "analysis": "Fuller returned from a one-game absence due to the hamstring injury in Sunday's win over the Titans, logging a 94 percent offensive snap share and finishing with five catches for 61 yards on seven targets. With no reports coming out of the contest indicating Fuller suffered a setback, his limitations to begin Week 16 may have only been maintenance-related. The wideout is tentatively expected to be ready to play Saturday in Tampa Bay.",
    "timestamp": "2019-12-17 01:41 PM",
    "week01": 7.9,
    "week02": 6.0,
    "week03": 7.6,
    "week04": 3.8,
    "week05": 46.7,
    "week06": 6.9,
    "week07": 1.1,
    "week08": "DNP",
    "week09": "DNP",
    "week10": "BYE",
    "week11": "DNP",
    "week12": 17.5,
    "week13": 1.3,
    "week14": "DNP",
    "week15": 8.6,
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.9, 6.0, 7.6, 3.8, 46.7, 6.9, 1.1, 'DNP', 'DNP', 'BYE', 'DNP', 17.5, 1.3, 'DNP', 8.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.8, 6.9, 5.6, 7.4, 9.4, 6.7, 10.0, 'DNP', 'DNP', 'BYE', 'DNP', 10.0, 5.4, 'DNP', 5.2, 11.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3932905.png",
    "name": "Diontae Johnson",
    "depthchart": "Backup: WR-2",
    "team": "Pittsburgh Steelers",
    "projected": 10.9,
    "opponent": "New York Jets",
    "home_away": "at ",
    "opp_rank_Neu": 19,
    "team_rank_Neg": 31,
    "avg_fp2": 7.76,
    "opp_rank_allowed_fp2_Pos": 24,
    "opp_avg_allowed_fp2": 31.32,
    "fanduelSalary": "$5700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/pit.png",
    "headlineNews": "Solid in defeat",
    "report": "Johnson caught five of seven targets for 62 yards in Sunday's 17-10 loss to the Bills.",
    "analysis": "Johnson had a solid performance given the matchup, but the red-zone struggles of the offense cost him a repeat touchdown performance. He was targeted in the end zone on a throw, but the pass was intercepted to snuff the scoring chance. The 23-year-old maintains deep-league value while Juju Smith-Schuster (knee) remains sidelined, which could happen again when the Steelers take on the Jets on Sunday.",
    "timestamp": "2019-12-15 10:29 PM",
    "week01": 4.0,
    "week02": 2.2,
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.0, 2.2, 13.3, 14.7, 5.68, 2.4, 'BYE', 16.9, 1.0, 8.4, 2.7, 4.4, 3.6, 22.6, 6.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.8, 3.9, 4.1, 4.5, 5.6, 2.4, 'BYE', 8.3, 8.4, 7.2, 7.8, 12.4, 7.5, 14.6, 7.9, 10.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2977187.png",
    "name": "Cooper Kupp",
    "depthchart": "Backup: WR-2",
    "team": "Los Angeles Rams",
    "projected": 10.8,
    "opponent": "San Francisco 49ers",
    "home_away": "at ",
    "opp_rank_Neg": 1,
    "team_rank_Pos": 6,
    "avg_fp2": 13.65,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 24.2,
    "fanduelSalary": "$7300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Grabs late TD in loss",
    "report": "Kupp caught all six of his targets for 41 yards and a touchdown in Sunday's 44-21 loss to the Cowboys.",
    "analysis": "The receiver salvaged his fantasy line with a fourth-quarter score after the game was far out of reach. Kupp has now hit pay dirt in three straight games, snagging all 16 of his targets for 151 yards over that stretch, and he'll try to continue his late-season surge next Saturday on the road against the 49ers.",
    "timestamp": "2019-12-15 06:22 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.1, 15.1, 27.7, 22.4, 22.2, 3.7, 8.0, 31.5, 'BYE', 0.0, 6.8, 6.5, 15.5, 12.5, 11.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.7, 11.0, 6.5, 8.8, 10.4, 9.3, 7.5, 8.5, 'BYE', 14.4, 12.8, 7.8, 11.0, 10.8, 11.6, 10.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2976499.png",
    "name": "Amari Cooper",
    "depthchart": "Starter: WR-1",
    "team": "Dallas Cowboys",
    "projected": 10.5,
    "opponent": "Philadelphia Eagles",
    "home_away": "at ",
    "opp_rank_Neu": 18,
    "team_rank_Pos": 2,
    "avg_fp2": 13.63,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 33.72,
    "fanduelSalary": "$7700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#7F9695",
    "tmColorDark": "#041E42",
    "tmColorLite_rgba": "rgba(127, 150, 149, 0.2)",
    "tmColorDark_rgba": "rgba(4, 30, 66, 0.2)",
    "tmTextLite": "#7F9695",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
    "headlineNews": "Quiet in big win over Rams",
    "report": "Cooper caught one of two targets for 19 yards in Sunday's 44-21 win over the Rams.",
    "analysis": "His day mirrored that of the Cowboys' entire wide-receiver group, as the team leaned heavily on a dominant running game to generate offense. Cooper, Michael Gallup and Randall Cobb combined to produce three catches for only 22 yards, and Tavon Austin surprisingly led the team's WRs thanks to one 59-yard TD catch. Cooper will look to rebound next Sunday with the NFC East title on the line in Philadelphia, facing an Eagles defense he posted a 5-106-0 line against in Week 7.",
    "timestamp": "2019-12-15 06:52 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [19.6, 12.4, 23.8, 7.3, 34.1, 0.8, 13.1, 'BYE', 16.0, 26.2, 5.3, 0.0, 12.5, 17.3, 2.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.8, 12.8, 10.9, 11.4, 11.7, 10.3, 17.9, 'BYE', 22.3, 14.3, 10.0, 10.7, 13.7, 12.0, 11.2, 10.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16790.png",
    "name": "Jarvis Landry",
    "depthchart": "Backup: WR-2",
    "team": "Cleveland Browns",
    "projected": 10.4,
    "opponent": "Baltimore Ravens",
    "home_away": "",
    "opp_rank_Neu": 7,
    "team_rank_Neu": 19,
    "avg_fp2": 12.15,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 28.1,
    "fanduelSalary": "$6900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FF3C00",
    "tmColorDark": "#311D00",
    "tmColorLite_rgba": "rgba(255, 60, 0, 0.2)",
    "tmColorDark_rgba": "rgba(49, 29, 0, 0.2)",
    "tmTextLite": "#FF3C00",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
    "headlineNews": "Downplays rift with coach",
    "report": "Landry said he would \"continue to be loyal\" to head coach Freddie Kitchens following an exchange of words the two had during Sunday's loss to the Cardinals, Marla Ridenour of the Akron Beacon Journal reports.",
    "analysis": "Landry and Kitchens had their exchange on the sidelines, and it continued when the wide receiver went to sit on the bench. \"Just because we had a difference today and it seemed like a difference today to everybody or to the world, it doesn't mean I don't have respect for him. I still have tremendous respect for him,\" Landry said. The coach downplayed the incident as well, noting that sometimes emotions get the best of an individual. Whatever the root cause of the confrontation, it was another case of a Browns player taking issue with the coach. Odell Beckham, David Njoku. Rashard Higgins and the departed Antonio Callaway have all had disagreements with Kitchens at some point this season.",
    "timestamp": "2019-12-17 04:24 AM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.7, 4.7, 7.7, 20.7, 9.5, 5.1, 'BYE', 9.0, 14.1, 20.2, 12.3, 31.8, 10.6, 9.6, 5.04]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.0, 11.8, 6.6, 11.2, 7.8, 6.8, 'BYE', 8.5, 6.0, 8.5, 9.0, 12.0, 11.0, 10.8, 10.7, 10.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15880.png",
    "name": "Robert Woods",
    "depthchart": "Starter: WR-1",
    "team": "Los Angeles Rams",
    "projected": 10.3,
    "opponent": "San Francisco 49ers",
    "home_away": "at ",
    "opp_rank_Neg": 1,
    "team_rank_Pos": 6,
    "avg_fp2": 11.88,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 24.2,
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
    "headlineNews": "Struggles despite high volume",
    "report": "Woods caught four of nine targets for 17 yards in Sunday's 44-21 loss to the Cowboys.",
    "analysis": "Jared Goff had accuracy issues for most of the game, and Woods  arguably suffered the most from his QB's scattershot efforts. On the bright side, the veteran receiver has seen at least nine targets in each of his last five games, but Sunday's output was a far cry from the eight grabs and 115 yards he averaged over the prior four contests. Woods will look to bounce back next Saturday in a road clash with the 49ers.",
    "timestamp": "2019-12-15 06:26 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.6, 5.2, 7.3, 22.9, 7.3, 7.6, 11.1, 5.2, 'BYE', 13.0, 'DNP', 12.7, 23.7, 22.2, 3.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.9, 14.0, 8.3, 11.9, 14.4, 10.9, 9.0, 9.6, 'BYE', 12.1, 'DNP', 8.8, 11.4, 10.0, 11.5, 10.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/5528.png",
    "name": "Larry Fitzgerald",
    "depthchart": "Backup: WR-2",
    "team": "Arizona Cardinals",
    "projected": 10.3,
    "opponent": "Seattle Seahawks",
    "home_away": "at ",
    "opp_rank_Pos": 29,
    "team_rank_Neg": 24,
    "avg_fp2": 8.61,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 29.25,
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
    "headlineNews": "Makes three grabs",
    "report": "Fitzgerald caught three of five targets for 42 yards in Sunday's 38-24 win over the Browns.",
    "analysis": "Fitzgerald trailed only Damiere Byrd for Arizona's team lead in receiving yards and targets but still produced pretty tame totals. Considering the veteran has topped 50 yards just six times so far, however, Fitzgerald's Sunday output was nothing new. Despite his relatively reduced impact, the future Hall of Famer figures to remain a main option for Kyler Murray in the Cardinals' final two games of the season, which come on the road against the Seahawks and Rams.",
    "timestamp": "2019-12-15 05:22 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [21.3, 12.9, 12.1, 7.2, 8.8, 9.9, 1.7, 1.8, 5.8, 11.1, 10.2, 'BYE', 8.6, 3.5, 5.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.1, 14.5, 13.4, 9.2, 10.3, 18.3, 14.2, 12.6, 6.1, 14.5, 7.9, 'BYE', 9.9, 8.8, 8.4, 10.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/12649.png",
    "name": "Julian Edelman",
    "depthchart": "Starter: WR-1",
    "team": "New England Patriots",
    "projected": 10.1,
    "opponent": "Buffalo Bills",
    "home_away": "",
    "opp_rank_Neg": 3,
    "team_rank_Neu": 9,
    "avg_fp2": 13.61,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 23.04,
    "fanduelSalary": "$7500",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Knee",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#C60C30",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png",
    "headlineNews": "Limited to begin Week 16 prep",
    "report": "Edelman (knee/shoulder) was listed as a limited participant in Tuesday's practice.",
    "analysis": "While it's normally a positive sign for any player to begin the week with some form of activity in practice, Edelman's limited work shouldn't be taken as evidence that he'll approach Saturday's game against the Bills at close to full strength. In the Patriots' 34-13 win over the Bengals this past weekend, Edelman was visibly hobbled as he moved about the field, finishing the day with two catches for nine yards on five targets while playing only 62 percent of New England's offensive snaps. Michael Giardi of NFL Network relayed Monday that Edelman had been playing through tendon damage in his left knee, an issue the wideout will attempt to manage for the final two regular-season contests and any playoff games that follow.",
    "timestamp": "2019-12-17 01:06 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [13.38, 7.2, 15.7, 5.0, 21.0, 15.8, 10.2, 23.5, 11.9, 'BYE', 12.4, 13.3, 18.9, 20.3, 1.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.4, 15.2, 9.5, 12.5, 11.8, 16.0, 15.0, 13.0, 12.1, 'BYE', 9.9, 9.0, 9.2, 10.3, 10.7, 10.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3892889.png",
    "name": "Dede Westbrook",
    "depthchart": "Backup: WR-2",
    "team": "Jacksonville Jaguars",
    "projected": 9.9,
    "opponent": "Atlanta Falcons",
    "home_away": "at ",
    "opp_rank_Neu": 23,
    "team_rank_Neu": 14,
    "avg_fp2": 7.96,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 29.25,
    "fanduelSalary": "$5700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#006778",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 103, 120, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#006778",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/jax.png",
    "headlineNews": "Struggles in comeback win",
    "report": "Westbrook caught two of four targets for 14 yards and added a seven-yard carry in Sunday's 20-16 win over the Raiders.",
    "analysis": "Even with DJ Chark Jr. (ankle) inactive, Westbrook still got his lowest target volume since Week 8 and did little with the balls that were sent his way. The third-year receiver will be a risky fantasy option next Sunday on the road against the Falcons, whether Chark returns to the lineup or not.",
    "timestamp": "2019-12-15 05:31 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.7, 0.8, 7.5, 9.1, 11.74, 6.8, 14.7, 0.0, 'DNP', 'BYE', 5.2, 10.9, 16.5, 5.5, 3.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.5, 13.7, 7.6, 8.7, 10.2, 6.8, 8.9, 12.6, 'DNP', 'BYE', 6.6, 6.3, 8.1, 8.4, 14.0, 9.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13295.png",
    "name": "Emmanuel Sanders",
    "depthchart": "Starter: WR-1",
    "team": "San Francisco 49ers",
    "projected": 9.8,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank_Neu": 9,
    "team_rank_Neu": 13,
    "avg_fp2": 9.71,
    "opp_rank_allowed_fp2_Neu": 14,
    "opp_avg_allowed_fp2": 26.34,
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
    "headlineNews": "Quiet receiving game",
    "report": "Sanders caught two passes (four targets) for nine yards in Sunday's 29-22 loss to Atlanta.",
    "analysis": "The 49ers had a clear scheme to use tight end George Kittle (17 targets) to attack Atlanta's defense, leaving all of the team's wideouts with poor fantasy lines. Sanders still led the group in targets (four), so he remains the lead dog amongst a group of youngsters, but fantasy owners have to be wary of a changing offensive game plan under coach Kyle Shanahan. The veteran wideout has put up some huge lines with his new team, but a lot of lackluster ones are scattered about as well. Sanders could be primed for a solid game Saturday against a Rams defense that was just torn apart by the Cowboys.",
    "timestamp": "2019-12-16 11:55 AM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [17.1, 23.3, 2.0, 'BYE', 1.4, 0.5, 8.5, 10.5, 20.7, 3.4, 4.8, 2.0, 6.1, 30.6, 1.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.3, 10.0, 11.1, 'BYE', 10.8, 7.0, 6.9, 8.1, 13.5, 13.6, 10.9, 14.9, 8.1, 9.1, 6.4, 9.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2576623.png",
    "name": "DeVante Parker",
    "depthchart": "Starter: WR-1",
    "team": "Miami Dolphins",
    "projected": 9.8,
    "opponent": "Cincinnati Bengals",
    "home_away": "",
    "opp_rank_Neu": 15,
    "team_rank_Neu": 23,
    "avg_fp2": 12.35,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 24.53,
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
    "headlineNews": "Fifth-year breakout continues",
    "report": "Parker caught four of seven targets for 72 yards and two touchdowns in Sunday's 36-20 loss to the Giants.",
    "analysis": "Parker scored from 20 yards out in the second quarter and added a 29-yard touchdown in garbage time. He exited last week's game early due to a concussion, but Parker now has 24 catches for 457 yards and four touchdowns in his last four full games. The 2015 first-rounder has eight receiving touchdowns this season, one shy of his total from his first four seasons combined. Parker will be an appealing Week 16 option in a battle of rebuilding teams against Cincinnati.",
    "timestamp": "2019-12-15 02:48 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.0, 0.0, 7.1, 15.0, 'BYE', 10.3, 14.0, 8.9, 13.7, 9.4, 17.0, 12.1, 31.4, 3.8, 21.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.3, 7.3, 6.6, 5.1, 'BYE', 7.6, 5.2, 9.0, 10.5, 6.8, 7.7, 7.8, 6.1, 9.0, 8.7, 9.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3121427.png",
    "name": "Curtis Samuel",
    "depthchart": "Backup: WR-2",
    "team": "Carolina Panthers",
    "projected": 9.4,
    "opponent": "Indianapolis Colts",
    "home_away": "at ",
    "opp_rank_Neu": 21,
    "team_rank_Neu": 18,
    "avg_fp2": 9.95,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 31.31,
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
    "headlineNews": "Finds end zone vs. Seahawks",
    "report": "Samuel caught five of eight targets for 31 yards and a touchdown Sunday against the Seahawks. He also carried four times for 23 yards in the 30-24 loss.",
    "analysis": "Samuel finished third on the team in targets, but his long gain went for just 12 yards as he finished averaging 6.2 yards per catch. He salvaged his day from a fantasy perspective with a five-yard touchdown catch in the fourth quarter and supplemented that production with a handful of carries as well. Although Samuel hasn't racked up massive yardage this season, his six total touchdowns have given him some fantasy appeal in favorable matchups. His next chance to contribute will come Sunday against the Colts.",
    "timestamp": "2019-12-15 04:20 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.7, 11.8, 13.8, 4.8, 5.9, 21.8, 'BYE', 6.6, 14.9, 11.5, 4.5, 5.4, 14.5, 5.2, 13.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.3, 7.1, 11.0, 11.2, 9.5, 11.1, 'BYE', 6.4, 8.6, 10.0, 12.1, 8.0, 9.1, 5.5, 10.5, 9.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16799.png",
    "name": "Allen Robinson",
    "depthchart": "Starter: WR-1",
    "team": "Chicago Bears",
    "projected": 9.4,
    "opponent": "Kansas City Chiefs",
    "home_away": "",
    "opp_rank_Neu": 11,
    "team_rank_Neg": 25,
    "avg_fp2": 13.27,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 21.04,
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
    "report": "Robinson caught seven passes for 125 yards in the Bears' 21-13 loss to the Packers on Sunday.",
    "analysis": "Robinson had just nine yards at halftime, but with Chicago falling behind by double digits early in the second half, he ended up with 14 targets, and the Packers were unable to slow him down as he posted at least 86 yards for the fourth time over his last six games. Although he'll face a Kansas City defense in Week 16 that has done well to limit opposing wide receivers this season, he'll continue to be a strong fantasy option to close out the season.",
    "timestamp": "2019-12-15 02:35 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [13.7, 6.1, 9.0, 11.2, 25.2, 'BYE', 19.7, 8.7, 1.1, 11.6, 3.5, 22.1, 18.6, 19.3, 16.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.1, 15.0, 10.9, 9.7, 11.8, 'BYE', 7.1, 11.0, 11.7, 11.5, 7.6, 9.7, 10.1, 11.0, 13.5, 9.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3057987.png",
    "name": "DaeSean Hamilton",
    "depthchart": "Backup: WR-2",
    "team": "Denver Broncos",
    "projected": 9.4,
    "opponent": "Detroit Lions",
    "home_away": "",
    "opp_rank_Pos": 31,
    "team_rank_Neg": 30,
    "avg_fp2": 1.8,
    "opp_rank_allowed_fp2_Pos": 30,
    "opp_avg_allowed_fp2": 33.74,
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
    "headlineNews": "Targeted nine times",
    "report": "Hamilton caught two of nine targets for 13 yards during Sunday's 23-3 loss in Kansas City.",
    "analysis": "Rookie Drew Lock looked Hamilton's way early and often Sunday with minimal results. Some of those miscues were poor passes by Lock, good plays by the Kansas City defense, and Hamilton definitely alligator-arming one or two in Sunday's snowy conditions. As the season winds down, it's been a disappointing sophomore season for Hamilton after the promise he showed to end his rookie campaign. If you're feeling optimistic, you can look at Lock's first three starts, see that Hamilton has been targeted 16 times and figure that with the season ending at home against Detroit and Oakland -- owners of the league's 31st- and 27th-ranked pass defenses, respectively -- Hamilton will have a shot to end 2019 on a high note.",
    "timestamp": "2019-12-16 05:07 PM",
    "week01": 1.5,
    "week02": 2.5,
    "week03": 0.0,
    "week04": 7.2,
    "week05": 0.0,
    "week06": 3.5,
    "week07": 1.4,
    "week08": 0.0,
    "week09": 0.0,
    "week10": "BYE",
    "week11": 0.0,
    "week12": 0.0,
    "week13": 2.2,
    "week14": 4.6,
    "week15": 2.3,
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.5, 2.5, 0.0, 7.2, 0.0, 3.5, 1.4, 0.0, 0.0, 'BYE', 0.0, 0.0, 2.2, 4.6, 2.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.6, 2.5, 4.4, 3.0, 2.9, 2.9, 4.7, 7.4, 4.3, 'BYE', 7.0, 1.9, -0.1, 5.0, 6.5, 9.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2576716.png",
    "name": "Jamison Crowder",
    "depthchart": "Backup: WR-2",
    "team": "New York Jets",
    "projected": 9.3,
    "opponent": "Pittsburgh Steelers",
    "home_away": "",
    "opp_rank_Neg": 5,
    "team_rank_Neg": 29,
    "avg_fp2": 9.59,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 25.42,
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
    "headlineNews": "Two-touchdown night in loss",
    "report": "Crowder secured six of 11 targets for 90 yards and two touchdowns in the Jets' 42-21 loss to the Ravens on Thursday.",
    "analysis": "Crowder paced the Jets in receptions, receiving yardage and touchdown catches, putting together a very timely fantasy-friendly performance after a disappointing three-game stretch during which he logged just seven receptions for 55 yards and no touchdowns. Crowder will look to continue his resurgence against the Steelers' tough secondary in a Week 16 matchup, a week from Sunday.",
    "timestamp": "2019-12-12 09:42 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [17.3, 6.0, 3.5, 'BYE', 2.0, 12.8, 4.6, 3.9, 18.3, 16.6, 16.1, 2.8, 1.8, 4.5, 24.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.9, 7.9, 6.6, 'BYE', 5.9, 4.5, 5.1, 7.2, 7.5, 6.2, 4.6, 5.8, 4.0, 7.7, 9.2, 9.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4241372.png",
    "name": "Marquise Brown",
    "depthchart": "Starter: WR-1",
    "team": "Baltimore Ravens",
    "projected": 9.2,
    "opponent": "Cleveland Browns",
    "home_away": "at ",
    "opp_rank_Neg": 6,
    "team_rank_Neg": 26,
    "avg_fp2": 9.98,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 26.19,
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
    "headlineNews": "Makes touchdown grab in win",
    "report": "Brown secured all four of his targets for 45 yards and a touchdown in the Ravens' 42-21 win over the Jets on Thursday.",
    "analysis": "Brown tied Mark Andrews for the team high in receptions and notched his first touchdown catch since Week 12 when he made a 24-yard scoring grab midway through the third quarter. The rookie hasn't been over the 100-yard mark since Week 1, but his game-breaking speed gives him plenty of upside any time he's on the field. Brown will look to boost his numbers in a Week 16 divisional matchup against the Browns.",
    "timestamp": "2019-12-12 09:21 PM",
    "week01": 28.7,
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [28.7, 12.6, 5.9, 4.2, 9.7, 'DNP', 'DNP', 'BYE', 6.3, 16.0, 3.3, 18.7, 0.6, 1.3, 12.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.6, 14.5, 10.2, 15.1, 9.6, 'DNP', 'DNP', 'BYE', 6.3, 9.6, 12.0, 9.5, 6.7, 10.0, 12.4, 9.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16016.png",
    "name": "Kenny Stills",
    "depthchart": "Reserve: WR-3",
    "team": "Houston Texans",
    "projected": 9.1,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "at ",
    "opp_rank_Pos": 30,
    "team_rank_Neu": 11,
    "avg_fp2": 7.34,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 37.95,
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
    "headlineNews": "Pair of touchdowns in win",
    "report": "Stills brought in all three of his targets for 35 yards and two touchdowns in the Texans' 24-21 win over the Titans on Sunday.",
    "analysis": "Stills bumped back down to the No. 3 receiver role with Will Fuller back from his hamstring injury, but he actually fared better than he had in several games as a starter this season. Stills notched scoring grabs of 12 and 16 yards in the first quarter, his third and fourth touchdowns of the campaign. Stills' target volume still remains very difficult to trust from week to week, especially as a third wideout, so despite Sunday's success and a favorable Week 16 matchup against the Buccaneers, he'll be difficult to trust on fantasy title game rosters in next Saturday's interconference battle.",
    "timestamp": "2019-12-15 08:31 PM",
    "week01": "DNP",
    "week02": 4.8,
    "week03": 10.9,
    "week04": 3.4,
    "week05": "DNP",
    "week06": "DNP",
    "week07": 12.5,
    "week08": 3.7,
    "week09": 7.2,
    "week10": "BYE",
    "week11": 4.7,
    "week12": 1.1,
    "week13": 13.6,
    "week14": 1.8,
    "week15": 17.0,
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 4.8, 10.9, 3.4, 'DNP', 'DNP', 12.5, 3.7, 7.2, 'BYE', 4.7, 1.1, 13.6, 1.8, 17.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 2.5, 3.1, 3.0, 'DNP', 'DNP', 5.4, 8.6, 6.1, 'BYE', 2.9, 7.6, 4.2, 5.4, 3.3, 9.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3045138.png",
    "name": "Mike Williams",
    "depthchart": "Backup: WR-2",
    "team": "Los Angeles Chargers",
    "projected": 8.9,
    "opponent": "Oakland Raiders",
    "home_away": "",
    "opp_rank_Pos": 27,
    "team_rank_Pos": 5,
    "avg_fp2": 9.65,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 30.3,
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
    "headlineNews": "Scores for second straight game",
    "report": "Williams caught four of nine targets for 71 yards and a touchdown during Sunday's 39-10 loss to the Vikings.",
    "analysis": "Williams finished second on the team behind only Keenan Allen in targets, receptions and receiving yardage. He gave his team its only lead of the game with a two-yard touchdown in the second quarter, giving him two in as many weeks after going the first 12 games without a score. Williams also broke off a gain of at least 35 yards for the seventh straight game and will look to continue his breakout season in a favorable matchup next Sunday against the Raiders.",
    "timestamp": "2019-12-15 08:02 PM",
    "week01": 3.9,
    "week02": 9.8,
    "week03": 6.0,
    "week04": "DNP",
    "week05": 10.4,
    "week06": 9.7,
    "week07": 6.7,
    "week08": 8.4,
    "week09": 12.8,
    "week10": 6.5,
    "week11": 8.6,
    "week12": "BYE",
    "week13": 14.2,
    "week14": 13.3,
    "week15": 15.1,
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.9, 9.8, 6.0, 'DNP', 10.4, 9.7, 6.7, 8.4, 12.8, 6.5, 8.6, 'BYE', 14.2, 13.3, 15.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.2, 9.4, 8.1, 'DNP', 5.5, 6.8, 6.1, 5.9, 6.4, 11.3, 6.7, 'BYE', 9.2, 8.4, 6.2, 8.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4036348.png",
    "name": "Michael Gallup",
    "depthchart": "Backup: WR-2",
    "team": "Dallas Cowboys",
    "projected": 8.9,
    "opponent": "Philadelphia Eagles",
    "home_away": "at ",
    "opp_rank_Neu": 18,
    "team_rank_Pos": 2,
    "avg_fp2": 11.43,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 33.72,
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
    "headlineNews": "Not needed against Rams",
    "report": "Gallup caught one of three targets for six yards in Sunday's 44-21 win over the Rams.",
    "analysis": "The Cowboys leaned heavily on their running game, as Ezekiel Elliott and Tony Pollard each ran for over 100 yards and combined for three TDs, so there wasn't a whole lot of production left over for the team's wide receivers. Gallup still is within striking distance of his first career 1,000-yard campaign, needing only 89 more yards, but he could have a tough time getting there Week 16 against an Eagles defense that held him to three catches for 34 yards in their previous meeting this season.",
    "timestamp": "2019-12-16 07:04 AM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [19.3, 9.8, 'DNP', 'DNP', 20.8, 6.8, 4.9, 'BYE', 10.3, 15.6, 19.3, 7.5, 7.8, 13.9, 1.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.3, 6.8, 'DNP', 'DNP', 5.3, 6.4, 13.7, 'BYE', 17.7, 7.8, 6.7, 6.7, 7.1, 7.3, 7.3, 8.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2971618.png",
    "name": "Nelson Agholor",
    "depthchart": "Starter: WR-1",
    "team": "Philadelphia Eagles",
    "projected": 8.9,
    "opponent": "Dallas Cowboys",
    "home_away": "",
    "opp_rank_Neu": 8,
    "team_rank_Neu": 16,
    "avg_fp2": 6.77,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 24.87,
    "fanduelSalary": "$5400",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Knee",
    "tmColorLite": "#386168",
    "tmColorDark": "#004C54",
    "tmColorLite_rgba": "rgba(56, 97, 104, 0.2)",
    "tmColorDark_rgba": "rgba(0, 76, 84, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    "headlineNews": "Downgraded to out",
    "report": "Agholor (knee) was downgraded to out ahead of Sunday's matchup against the Redskins.",
    "analysis": "Unable to practice all week, it always seemed unlikely Agholor would be able to suit up Sunday, and the Eagles thankfully ended the suspense early. With Alshon Jeffery (foot) also out, the trio of J.J. Arcega-Whiteside, Greg Ward and Robert Davis will be the only three active wide receivers on the roster, although both tight ends Zach Ertz and Dallas Goedert are expected to factor heavily in the team's passing attack.",
    "timestamp": "2019-12-14 09:40 AM",
    "week01": 2.1,
    "week02": 20.7,
    "week03": 19.0,
    "week04": 0.0,
    "week05": 2.5,
    "week06": 6.2,
    "week07": 3.4,
    "week08": 3.4,
    "week09": 3.6,
    "week10": "BYE",
    "week11": 6.0,
    "week12": "DNP",
    "week13": 7.6,
    "week14": "DNP",
    "week15": "DNP",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.1, 20.7, 19.0, 0.0, 2.5, 6.2, 3.4, 3.4, 3.6, 'BYE', 6.0, 'DNP', 7.6, 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.5, 2.7, 9.8, 4.8, 7.0, 2.8, 6.5, 4.6, 3.3, 'BYE', 6.3, 'DNP', 8.9, 'DNP', 'DNP', 8.9]
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
    "opponent": "Los Angeles Chargers",
    "home_away": "at ",
    "opp_rank_Neg": 4,
    "team_rank_Neu": 15,
    "avg_fp2": 9.32,
    "opp_rank_allowed_fp2_Neg": 3,
    "opp_avg_allowed_fp2": 21.91,
    "fanduelSalary": "$5600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A5ACAF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/oak.png",
    "headlineNews": "Finds end zone in loss",
    "report": "Williams caught two of three targets for 45 yards and a touchdown in Sunday's 20-16 loss to the Jaguars.",
    "analysis": "A battle with plantar fasciitis seems to be the cause of his recent swoon, but Williams still supplied the Raiders' only TD of the day on a 40-yard strike from Derek Carr in the first quarter -- the receiver's first trip to the end zone since Week 8. Williams has seen six targets or less in eight straight games, making him a risky fantasy option, but he'll try to finish the season on a high note beginning next Sunday in Atlanta.",
    "timestamp": "2019-12-15 05:56 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [19.5, 13.1, 10.4, 11.1, 'DNP', 'BYE', 'DNP', 16.6, 6.3, 4.0, 10.2, 2.8, 1.4, 5.0, 11.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.9, 14.7, 6.7, 11.6, 'DNP', 'BYE', 'DNP', 13.9, 14.9, 7.4, 10.6, 13.0, 12.5, 12.8, 9.6, 8.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3126486.png",
    "name": "Deebo Samuel",
    "depthchart": "Backup: WR-2",
    "team": "San Francisco 49ers",
    "projected": 8.6,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank_Neu": 9,
    "team_rank_Neu": 13,
    "avg_fp2": 9.62,
    "opp_rank_allowed_fp2_Neu": 14,
    "opp_avg_allowed_fp2": 26.34,
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
    "headlineNews": "Just two touches Sunday",
    "report": "Samuel had one catch (three targets) for 29 yards and one carry for eight yards in Sunday's 29-22 loss to the Falcons.",
    "analysis": "George Kittle (13 receptions for 134 yards) ate up nearly all of Jimmy Garoppolo's targets, leaving scraps for the wideout corps. While Samuel recorded just two touches, he was able to break off the biggest gain of any wideout on his 29-yard catch and run. The rookie reached 100 total yards in three of his five previous contests, so look for him to get more involved against a Rams team that can be beat through the air Saturday.",
    "timestamp": "2019-12-16 12:11 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.2, 17.9, 5.9, 'BYE', 0.8, 3.4, 'DNP', 12.3, 6.0, 15.2, 17.4, 12.0, 13.1, 13.4, 4.48]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.5, 3.4, 11.9, 'BYE', 5.3, 6.8, 'DNP', 6.1, 6.1, 4.1, 7.1, 4.7, 9.0, 11.4, 7.7, 8.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2972460.png",
    "name": "Breshad Perriman",
    "depthchart": "Starter: WR-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 8.5,
    "opponent": "Houston Texans",
    "home_away": "",
    "opp_rank_Pos": 28,
    "team_rank_Pos": 1,
    "avg_fp2": 7.04,
    "opp_rank_allowed_fp2_Neu": 18,
    "opp_avg_allowed_fp2": 28.67,
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
    "headlineNews": "Career day in win",
    "report": "Perriman secured five of six targets for 113 yards and three touchdowns in the Buccaneers' 38-17 win over the Lions on Sunday. He also rushed once for three yards.",
    "analysis": "Perriman's numbers are impressive under any circumstances, but given the Buccaneers lost both Chris Godwin and Scott Miller due to hamstring injuries Sunday and are already likely without Mike Evans the rest of the way for the same reason, they're particularly encouraging as well. The fifth-year speedster brought in scoring tosses of 34, 25 and 25 yards from Jameis Winston (thumb), giving him four of his five touchdowns on the season over his last two games. Perriman should be primed for every-snap volume in a Week 16 Saturday matchup versus the Texans, as Evans and Godwin are highly likely to miss that contest.",
    "timestamp": "2019-12-15 02:46 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.0, 0.0, 2.4, 0.0, 'DNP', 'DNP', 'BYE', 0.0, 12.2, 2.7, 2.5, 4.9, 11.2, 14.5, 32.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.4, 4.6, 7.8, 1.9, 'DNP', 'DNP', 'BYE', 2.9, 6.4, 5.1, 3.3, 3.1, 5.0, 6.7, 6.9, 8.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3917067.png",
    "name": "Bisi Johnson",
    "depthchart": "Reserve: WR-3",
    "team": "Minnesota Vikings",
    "projected": 8.5,
    "opponent": "Green Bay Packers",
    "home_away": "",
    "opp_rank_Neu": 22,
    "team_rank_Neu": 12,
    "avg_fp2": 5.23,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 25.55,
    "fanduelSalary": "$5200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e0aa19",
    "tmColorDark": "#300e5a",
    "tmColorLite_rgba": "rgba(224, 170, 25, 0.2)",
    "tmColorDark_rgba": "rgba(48, 14, 90, 0.2)",
    "tmTextLite": "#e0aa19",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/min.png",
    "headlineNews": "Suiting up Sunday",
    "report": "Johnson (quadriceps) is listed as active Sunday against the Chargers at L.A.",
    "analysis": "Listed as limited on the Vikings' final two Week 15 practice reports due to a quad injury, Johnson's availability was in question for this contest. While he's available to the offense, the return of Adam Thielen (hamstring) from a four-game absence likely won't afford Johnson many targets, especially with his health compromised.",
    "timestamp": "2019-12-15 11:41 AM",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": 12.0,
    "week08": 3.7,
    "week09": 6.9,
    "week10": 3.5,
    "week11": 6.5,
    "week12": "BYE",
    "week13": 0.6,
    "week14": 7.4,
    "week15": 3.0,
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 12.0, 3.7, 6.9, 3.5, 6.5, 'BYE', 0.6, 7.4, 3.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 4.8, 5.4, 2.8, 6.4, 6.2, 'BYE', 6.5, 10.0, 5.6, 8.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3121422.png",
    "name": "Terry McLaurin",
    "depthchart": "Starter: WR-1",
    "team": "Washington Redskins",
    "projected": 8.3,
    "opponent": "New York Giants",
    "home_away": "",
    "opp_rank_Pos": 26,
    "team_rank_Neg": 32,
    "avg_fp2": 11.6,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 33.04,
    "fanduelSalary": "$6500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#773141",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(119, 49, 65, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png",
    "headlineNews": "Torches Eagles again",
    "report": "McLaurin caught all five of his targets for 130 yards and a touchdown in Sunday's 37-27 loss to Philadelphia.",
    "analysis": "McLaurin got behind the defense for a 75-yard touchdown late in the first quarter. That was the outstanding rookie's seventh touchdown of the season, as McLaurin has demonstrated a tremendous combination of ball skills and speed. His 130 receiving yards set a new career high, surpassing the 125 yards McLaurin posted against these same Eagles back in Week 1. McLaurin will take a two-game touchdown streak into a Week 16 matchup against a vulnerable Giants secondary.",
    "timestamp": "2019-12-15 01:58 PM",
    "week01": 21.0,
    "week02": 14.7,
    "week03": 16.0,
    "week04": "DNP",
    "week05": 6.6,
    "week06": 24.0,
    "week07": 1.6,
    "week08": 5.9,
    "week09": 5.9,
    "week10": "BYE",
    "week11": 8.4,
    "week12": 9.7,
    "week13": 1.8,
    "week14": 13.7,
    "week15": 21.5,
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [21.0, 14.7, 16.0, 'DNP', 6.6, 24.0, 1.6, 5.9, 5.9, 'BYE', 8.4, 9.7, 1.8, 13.7, 21.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.5, 13.0, 11.2, 'DNP', 12.2, 13.7, 11.4, 8.7, 9.3, 'BYE', 13.8, 9.3, 9.6, 12.5, 9.0, 8.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2974858.png",
    "name": "Kenny Golladay",
    "depthchart": "Starter: WR-1",
    "team": "Detroit Lions",
    "projected": 8.1,
    "opponent": "Denver Broncos",
    "home_away": "at ",
    "opp_rank_Neu": 10,
    "team_rank_Neu": 8,
    "avg_fp2": 13.66,
    "opp_rank_allowed_fp2_Neu": 9,
    "opp_avg_allowed_fp2": 25.13,
    "fanduelSalary": "$7400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0076B6",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(0, 118, 182, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#0076B6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/det.png",
    "headlineNews": "Trio of grabs in loss",
    "report": "Golladay secured three of seven targets for 44 yards in the Lions' 38-17 loss to the Buccaneers on Sunday.",
    "analysis": "Golladay checked in third in receptions and receiving yards on the afternoon for the Lions, as the receiver was the subject of plenty of defensive attention with Marvin Jones (IR-ankle) out of action. Golladay certainly figures to have a difficult time maximizing his potential if he's forced to play with Blough as his quarterback over the final two games, which appears increasingly likely considering Matthew Stafford (back/hip) has yet to return to practice.",
    "timestamp": "2019-12-15 03:09 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.2, 21.7, 2.7, 21.2, 'BYE', 14.6, 2.6, 25.3, 21.2, 13.2, 3.9, 8.1, 23.8, 14.8, 5.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.7, 9.7, 15.0, 11.4, 'BYE', 10.7, 9.0, 11.0, 10.6, 13.7, 13.5, 9.5, 14.1, 10.1, 21.4, 8.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14053.png",
    "name": "Randall Cobb",
    "depthchart": "Reserve: WR-3",
    "team": "Dallas Cowboys",
    "projected": 8.0,
    "opponent": "Philadelphia Eagles",
    "home_away": "at ",
    "opp_rank_Neu": 18,
    "team_rank_Pos": 2,
    "avg_fp2": 8.23,
    "opp_rank_allowed_fp2_Pos": 29,
    "opp_avg_allowed_fp2": 33.72,
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
    "headlineNews": "Held to negative yards Sunday",
    "report": "Cobb caught one of two targets for minus-3 yards in Sunday's 44-21 win over the Rams.",
    "analysis": "The Cowboys leaned heavily on their running game, as Ezekiel Elliott and Tony Pollard each ran for over 100 yards and combined for three TDs, so there wasn't a whole lot of production left over for the team's wide receivers. Even so, Cobb's efforts were notably poor, and his two targets were a season low. He'll try to bounce back Week 16 against the Eagles, but he may not have much more success. Philly held him to two catches for 29 yards in their prior meeting this year.",
    "timestamp": "2019-12-16 07:08 AM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.9, 6.0, 3.3, 5.6, 6.8, 'DNP', 3.9, 'BYE', 4.5, 19.6, 19.5, 10.6, 6.8, 5.3, 0.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.0, 5.8, 7.6, 4.5, 5.9, 'DNP', 10.0, 'BYE', 14.4, 9.6, 5.8, 5.7, 7.0, 5.9, 6.8, 8.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2978109.png",
    "name": "Zach Pascal",
    "depthchart": "Backup: WR-2",
    "team": "Indianapolis Colts",
    "projected": 7.8,
    "opponent": "Carolina Panthers",
    "home_away": "",
    "opp_rank_Neu": 16,
    "team_rank_Neg": 27,
    "avg_fp2": 7.99,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 32.31,
    "fanduelSalary": "$6600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#014683",
    "tmColorDark": "#002C5F",
    "tmColorLite_rgba": "rgba(1, 70, 131, 0.2)",
    "tmColorDark_rgba": "rgba(0, 44, 95, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png",
    "headlineNews": "Makes four grabs",
    "report": "Pascal caught four of six targets for 44 yards in Monday night's 34-7 loss to the Saints.",
    "analysis": "Pascal led the Colts in catches and receiving yards despite top wideout T.Y. Hilton returning from injury to top the team in targets. Hilton didn't produce much at all prior to Indy's final offensive drive though, and it was Pascal who went for a team-long, 24-yard reception earlier. Even with Hilton back -- and especially if he's on a snap count -- Pascal should remain one of Jacoby Brissett's primary options going into the final two weeks of the season.",
    "timestamp": "2019-12-16 08:33 PM",
    "week01": 0.0,
    "week02": 0.0,
    "week03": 12.3,
    "week04": 9.2,
    "week05": 2.5,
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 0.0, 12.3, 9.2, 2.5, 'BYE', 25.6, 1.1, 16.1, 3.6, 2.7, 0.0, 14.4, 17.9, 6.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [-1.2, 1.5, 1.8, 1.5, 0.8, 'BYE', 5.4, 6.8, 8.5, 13.2, 11.1, 7.8, 10.6, 12.3, 8.2, 7.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3128390.png",
    "name": "Allen Lazard",
    "depthchart": "Backup: WR-2",
    "team": "Green Bay Packers",
    "projected": 7.7,
    "opponent": "Minnesota Vikings",
    "home_away": "at ",
    "opp_rank_Neu": 20,
    "team_rank_Neu": 17,
    "avg_fp2": 4.53,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 30.74,
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
    "headlineNews": "Works as clear No. 2 receiver",
    "report": "Lazard was targeted three times and caught two passes for 14 yards in Sunday's victory over the Bears.",
    "analysis": "It was another quiet day for Lazard, who finished with fewer than 30 total yards for the fourth time in five games. Despite the lack of production, Lazard has been the Packers' second-best option at wide receiver of late, and his snap count finally backed that up in Week 15 as he played the second-most snaps among Packers receivers -- 14 more than No. 3 WR Geronimo Allison -- for the first time since Davante Adams returned to action in Week 9. With little doubt about his standing heading into Week 16, Lazard will have at least some intrigue against a Vikings defense that has allowed opposing wideouts to pile up yards over the second half of the season.",
    "timestamp": "2019-12-16 08:23 AM",
    "week01": 0.0,
    "week02": 0.0,
    "week03": 0.0,
    "week04": 0.0,
    "week05": 0.0,
    "week06": 14.5,
    "week07": 5.7,
    "week08": 6.7,
    "week09": 5.9,
    "week10": 4.2,
    "week11": "BYE",
    "week12": 3.3,
    "week13": 17.8,
    "week14": 2.9,
    "week15": 2.4,
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 0.0, 0.0, 0.0, 0.0, 14.5, 5.7, 6.7, 5.9, 4.2, 'BYE', 3.3, 17.8, 2.9, 2.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.1, 5.7, 1.5, 0.3, 0.9, 1.6, 8.0, 3.1, 3.6, 4.3, 'BYE', 3.5, 3.8, 8.5, 7.1, 7.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3050487.png",
    "name": "Anthony Miller",
    "depthchart": "Backup: WR-2",
    "team": "Chicago Bears",
    "projected": 7.2,
    "opponent": "Kansas City Chiefs",
    "home_away": "",
    "opp_rank_Neu": 11,
    "team_rank_Neg": 25,
    "avg_fp2": 7.13,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 21.04,
    "fanduelSalary": "$6700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#c36835",
    "tmColorDark": "#0B162A",
    "tmColorLite_rgba": "rgba(195, 104, 53, 0.2)",
    "tmColorDark_rgba": "rgba(11, 22, 42, 0.2)",
    "tmTextLite": "#c36835",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png",
    "headlineNews": "Best performance of season",
    "report": "Miller caught nine passes for 118 yards and a touchdown in the Bears' 21-13 loss to the Packers on Sunday.",
    "analysis": "After a quiet first half, the Bears fell way behind on the scoreboard in the third quarter, and Miller ended up with a team-high 15 targets, leading to his second 100-yard performance and second touchdown of the season. He has now been targeted at least nine times in four of his last five games, and his current role in the offense will make him a strong fantasy option in a Week 16 home contest against the Chiefs. Taylor Gabriel -- who's missed the last three games with a concussion -- and his status merit continued watching from Miller owners, however.",
    "timestamp": "2019-12-15 02:43 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 0.7, 2.0, 2.1, 7.2, 'BYE', 6.8, 8.2, 0.0, 1.2, 8.4, 10.7, 18.5, 11.7, 22.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.0, 5.5, 5.1, 4.1, 3.3, 'BYE', 2.2, 6.9, 5.7, 4.1, 3.0, 5.1, 6.0, 5.8, 5.6, 7.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3122449.png",
    "name": "James Washington",
    "depthchart": "Reserve: WR-3",
    "team": "Pittsburgh Steelers",
    "projected": 7.0,
    "opponent": "New York Jets",
    "home_away": "at ",
    "opp_rank_Neu": 19,
    "team_rank_Neg": 31,
    "avg_fp2": 8.07,
    "opp_rank_allowed_fp2_Pos": 24,
    "opp_avg_allowed_fp2": 31.32,
    "fanduelSalary": "$6600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/pit.png",
    "headlineNews": "Leads team in receiving",
    "report": "Washington had five catches (11 targets) for 83 yards in Sunday's 17-10 loss to Buffalo.",
    "analysis": "Washington stepped up as the Steelers' top wideout again with Juju Smith-Schuster (knee) sidelined for another week. With the latter's status still up in the air for the final two weeks of the regular season, Washington and his 77.3 yard average over the past six weeks will continue to be a deep-league option and potential flex play in softer matchups. Next week's opponent, the New York Jets, may be one of those softer matchups with a middle-of-the-pack pass defense this season (239.9 passing yards allowed per game).",
    "timestamp": "2019-12-15 10:09 PM",
    "week01": 6.1,
    "week02": 3.3,
    "week03": 2.4,
    "week04": 0.0,
    "week05": 6.7,
    "week06": "DNP",
    "week07": "BYE",
    "week08": 2.6,
    "week09": 8.9,
    "week10": 16.0,
    "week11": 6.4,
    "week12": 17.3,
    "week13": 19.1,
    "week14": 5.3,
    "week15": 10.8,
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.1, 3.3, 2.4, 0.0, 6.7, 'DNP', 'BYE', 2.6, 8.9, 16.0, 6.4, 17.3, 19.1, 5.3, 10.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.4, 6.3, 4.5, 7.0, 7.0, 'DNP', 'BYE', 5.7, 4.2, 5.0, 1.6, 7.7, 4.2, 7.2, 8.7, 7.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/17051.png",
    "name": "Albert Wilson",
    "depthchart": "Backup: WR-2",
    "team": "Miami Dolphins",
    "projected": 6.5,
    "opponent": "Cincinnati Bengals",
    "home_away": "",
    "opp_rank_Neu": 15,
    "team_rank_Neu": 23,
    "avg_fp2": 4.22,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 24.53,
    "fanduelSalary": "$5400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#008E97",
    "tmColorDark": "#005778",
    "tmColorLite_rgba": "rgba(0, 142, 151, 0.2)",
    "tmColorDark_rgba": "rgba(0, 87, 120, 0.2)",
    "tmTextLite": "#f5821f",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/mia.png",
    "headlineNews": "Finally tops 50 yards",
    "report": "Wilson caught five of eight targets for 59 yards in Sunday's 36-20 loss to the Giants.",
    "analysis": "It's hard to trust any Dolphins player outside of DeVante Parker in fantasy. Parker had another two receiving scores, giving him eight this season to Wilson's one. Wilson set a new season high in receiving yards in this game, as he hadn't notched more than 33 in any previous 2019 contest.",
    "timestamp": "2019-12-15 02:58 PM",
    "week01": 2.4,
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "BYE",
    "week06": 4.0,
    "week07": 2.7,
    "week08": 7.0,
    "week09": 0.8,
    "week10": 0.5,
    "week11": 4.1,
    "week12": 6.7,
    "week13": 8.8,
    "week14": 1.0,
    "week15": 8.4,
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.4, 'DNP', 'DNP', 'DNP', 'BYE', 4.0, 2.7, 7.0, 0.8, 0.5, 4.1, 6.7, 8.8, 1.0, 8.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.9, 'DNP', 'DNP', 'DNP', 'BYE', 4.3, 3.0, 2.5, 6.0, 2.4, 2.7, 3.0, 1.7, 4.1, 5.1, 6.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16804.png",
    "name": "John Brown",
    "depthchart": "Starter: WR-1",
    "team": "Buffalo Bills",
    "projected": 6.4,
    "opponent": "New England Patriots",
    "home_away": "at ",
    "opp_rank_Neg": 2,
    "team_rank_Neg": 28,
    "avg_fp2": 12.27,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 18.4,
    "fanduelSalary": "$6600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#005596",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 85, 150, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
    "headlineNews": "Gains 99 yards in win",
    "report": "Brown had seven catches (10 targets) for 99 yards in Sunday's 17-10 victory over the Steelers.",
    "analysis": "Brown returned to looking like a WR1 following a couple weeks of mediocrity. The speedy wideout reached double-digit targets for the fifth time this season, making him Josh Allen's most-trusted receiving threat. Brown will carry a new career high of 1,007 receiving yards into Saturday's critical matchup against the Patriots.",
    "timestamp": "2019-12-15 09:33 PM",
    "week01": 21.8,
    "week02": 10.7,
    "week03": 7.5,
    "week04": 9.4,
    "week05": 10.0,
    "week06": "BYE",
    "week07": 16.8,
    "week08": 7.9,
    "week09": 9.6,
    "week10": 10.2,
    "week11": 30.2,
    "week12": 10.9,
    "week13": 9.22,
    "week14": 4.1,
    "week15": 13.4,
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [21.8, 10.7, 7.5, 9.4, 10.0, 'BYE', 16.8, 7.9, 9.6, 10.2, 30.2, 10.9, 9.22, 4.1, 13.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.9, 13.9, 12.6, 10.2, 9.6, 'BYE', 11.3, 7.9, 9.5, 9.2, 6.7, 10.8, 11.7, 6.8, 8.3, 6.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13217.png",
    "name": "Golden Tate",
    "depthchart": "Starter: WR-1",
    "team": "New York Giants",
    "projected": 6.4,
    "opponent": "Washington Redskins",
    "home_away": "at ",
    "opp_rank_Neu": 12,
    "team_rank_Neu": 20,
    "avg_fp2": 11.09,
    "opp_rank_allowed_fp2_Neu": 15,
    "opp_avg_allowed_fp2": 26.61,
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
    "headlineNews": "Makes most of lone catch",
    "report": "Tate caught one of three targets for a 51-yard touchdown in Sunday's 36-20 win over the Dolphins.",
    "analysis": "Tate made his lone catch count, tying the score at 7-7 just over a minute after Miami scored the game's first points in the second quarter. He's caught just one pass in each of the two games since Eli Manning was reinserted under center with Daniel Jones sidelined by an ankle injury, so Tate will be tough to trust despite a favorable matchup against the Redskins in Week 16 unless Jones makes his return.",
    "timestamp": "2019-12-15 02:10 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 2.8, 19.2, 11.0, 12.5, 8.8, 21.5, 'BYE', 10.8, 'DNP', 1.6, 11.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 7.2, 9.0, 11.5, 12.4, 10.8, 11.5, 'BYE', 10.0, 'DNP', 9.1, 11.2, 6.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3045523.png",
    "name": "Kendrick Bourne",
    "depthchart": "Reserve: WR-3",
    "team": "San Francisco 49ers",
    "projected": 6.2,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank_Neu": 9,
    "team_rank_Neu": 13,
    "avg_fp2": 5.64,
    "opp_rank_allowed_fp2_Neu": 14,
    "opp_avg_allowed_fp2": 26.34,
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
    "headlineNews": "Just 11 yards in loss",
    "report": "Bourne had one catch (two targets) for 11 yards in Sunday's 29-22 loss to Atlanta.",
    "analysis": "Bourne saw even fewer looks than usual and was unable to get in the end zone to supplement his fantasy value as in previous weeks. Duds like these are the risk with the 24-year-old as the fourth option in the passing game on a power-run offense. Bourne remains a deep-league option largely dependent on scoring heading into a Week 16 matchup with the Rams.",
    "timestamp": "2019-12-16 12:21 PM",
    "week01": 1.4,
    "week02": 0.9,
    "week03": 2.7,
    "week04": "BYE",
    "week05": 3.4,
    "week06": 1.6,
    "week07": 8.4,
    "week08": 1.7,
    "week09": 7.2,
    "week10": 14.2,
    "week11": 11.1,
    "week12": 3.7,
    "week13": 5.7,
    "week14": 15.3,
    "week15": 1.6,
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.4, 0.9, 2.7, 'BYE', 3.4, 1.6, 8.4, 1.7, 7.2, 14.2, 11.1, 3.7, 5.7, 15.3, 1.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.2, 2.9, 4.0, 'BYE', 5.0, 3.0, 2.9, 1.9, 4.2, 3.9, 3.1, 7.2, 4.5, 5.2, 4.6, 6.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3115378.png",
    "name": "Russell Gage",
    "depthchart": "Backup: WR-2",
    "team": "Atlanta Falcons",
    "projected": 6.2,
    "opponent": "Jacksonville Jaguars",
    "home_away": "",
    "opp_rank_Neu": 14,
    "team_rank_Pos": 4,
    "avg_fp2": 3.99,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 25.81,
    "fanduelSalary": "$5100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/atl.png",
    "headlineNews": "Tied for second in targets Week 15",
    "report": "Gage caught five of six targets for 27 receiving yards and ran for six yards on his lone rush attempt during Sunday's 29-22 win against the 49ers.",
    "analysis": "The LSU product has now been held to 50 combined scrimmage yards over the past two weeks, but it's encouraging that he's been a highly-involved contributor amidst the depleted Falcons' receiving corps. Gage has garnered six-plus targets over three of his past four appearances heading into a Week 16 matchup against a Jacksonville defense that Sunday allowed just one opposing player -- Oakland's Darren Waller -- to exceed 45 receiving yards.",
    "timestamp": "2019-12-15 08:14 PM",
    "week01": 1.7,
    "week02": 0.0,
    "week03": 0.0,
    "week04": 0.0,
    "week05": 1.7,
    "week06": 1.1,
    "week07": -0.2,
    "week08": 9.3,
    "week09": "BYE",
    "week10": 4.3,
    "week11": 4.2,
    "week12": 11.6,
    "week13": 13.7,
    "week14": 2.7,
    "week15": 5.8,
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.7, 0.0, 0.0, 0.0, 1.7, 1.1, -0.2, 9.3, 'BYE', 4.3, 4.2, 11.6, 13.7, 2.7, 5.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [-0.4, 2.6, 0.8, 2.2, 0.4, 1.6, 3.2, 2.2, 'BYE', 1.4, 2.5, 1.8, 1.3, 3.5, 3.9, 6.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14918.png",
    "name": "Jarius Wright",
    "depthchart": "Reserve: WR-3",
    "team": "Carolina Panthers",
    "projected": 6.2,
    "opponent": "Indianapolis Colts",
    "home_away": "at ",
    "opp_rank_Neu": 21,
    "team_rank_Neu": 18,
    "avg_fp2": 2.75,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 31.31,
    "fanduelSalary": "$4600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0085CA",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 133, 202, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#0085CA",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/car.png",
    "headlineNews": "Just one catch",
    "report": "Wright caught one of four targets for nine yards in Sunday's 30-24 loss to the Seahawks.",
    "analysis": "Wright broke his brief multi-catch streak as Carolina welcomed fellow wideout Chris Hogan back into the fold. That being said, it's not like Wright, who's caught only one pass in seven of 14 outings this season, endured a drastic drop in production Sunday. He'll remain a depth option for spare targets to close out the season.",
    "timestamp": "2019-12-16 07:00 AM",
    "week01": 1.9,
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.9, 2.5, 4.8, 8.4, 1.1, 1.1, 'BYE', 2.2, -0.7, 2.6, 2.4, 0.9, 4.9, 5.0, 1.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.5, 4.1, 7.6, 6.8, 4.2, 5.1, 'BYE', 3.1, 3.4, 3.6, 4.7, 3.0, 3.2, 0.9, 5.5, 6.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13216.png",
    "name": "Demaryius Thomas",
    "depthchart": "Reserve: WR-3",
    "team": "New York Jets",
    "projected": 6.0,
    "opponent": "Pittsburgh Steelers",
    "home_away": "",
    "opp_rank_Neg": 5,
    "team_rank_Neg": 29,
    "avg_fp2": 6.69,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 25.42,
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
    "headlineNews": "Sidelined Thursday",
    "report": "Thomas (hamstring) is inactive for Thursday's game against the Ravens.",
    "analysis": "With Thomas out, added snaps are available for Vyncint Smith, though he'd be a speculative fantasy play in Week 15. Robby Anderson and Jamison Crowder currently profile as the safest lineup options among the Jets' pass catchers.",
    "timestamp": "2019-12-12 03:53 PM",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "BYE",
    "week05": 6.7,
    "week06": 8.2,
    "week07": 5.7,
    "week08": 8.8,
    "week09": 2.9,
    "week10": 11.4,
    "week11": 6.4,
    "week12": 3.2,
    "week13": 3.8,
    "week14": 9.8,
    "week15": "DNP",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'BYE', 6.7, 8.2, 5.7, 8.8, 2.9, 11.4, 6.4, 3.2, 3.8, 9.8, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'BYE', 8.1, 6.4, 7.1, 9.1, 13.6, 8.0, 6.6, 6.8, 5.5, 11.6, 'DNP', 6.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3921958.png",
    "name": "Chris Conley",
    "depthchart": "Reserve: WR-3",
    "team": "Jacksonville Jaguars",
    "projected": 5.9,
    "opponent": "Atlanta Falcons",
    "home_away": "at ",
    "opp_rank_Neu": 23,
    "team_rank_Neu": 14,
    "avg_fp2": 8.22,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 29.25,
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
    "headlineNews": "Grabs two TDs to down Raiders",
    "report": "Conley caught four of eight targets for 49 yards and two touchdowns in Sunday's 20-16 win over the Raiders.",
    "analysis": "The Jaguars were down 16-6 in the fourth quarter when Gardner Minshew found Conley for a six-yard TD with 5:15 left on the clock, and then the duo connected again on a four-yard score inside the final minute. The fifth-year receiver doubled his touchdown total on the season with the performance, and if DJ Chark Jr.'s ankle injury keeps him sidelined another week, Conley could see more red-zone looks next Sunday in Atlanta.",
    "timestamp": "2019-12-15 05:24 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [18.7, 9.3, 4.0, 2.2, 3.1, 0.0, 11.8, 18.3, 4.2, 'BYE', 8.8, 6.9, 7.7, 1.2, 18.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.7, 7.9, 2.7, 2.0, 3.1, 3.1, 3.6, 6.6, 6.7, 'BYE', 2.2, 4.0, 4.4, 3.1, 7.8, 5.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3115928.png",
    "name": "Malik Turner",
    "depthchart": "Reserve: WR-3",
    "team": "Seattle Seahawks",
    "projected": 5.8,
    "opponent": "Arizona Cardinals",
    "home_away": "",
    "opp_rank_Pos": 32,
    "team_rank_Neu": 10,
    "avg_fp2": 2.51,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 31.78,
    "fanduelSalary": "$5100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#69BE28",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(105, 190, 40, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#69BE28",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
    "headlineNews": "Catches three passes",
    "report": "Turner hauled in all three targets for 26 yards in Sunday's 30-24 win over the Panthers.",
    "analysis": "Turner played 20 of a possible 67 defensive snaps (30 percent), coming in No 4 among receivers and well ahead of Jaron Brown (11) and David Moore (10). While he's earned the trust of Russell Wilson in some key situations this season, Turner's fantasy upside is limited, surpassing 35 yards just once over 14 games.",
    "timestamp": "2019-12-16 08:18 AM",
    "week01": 0.0,
    "week02": 6.9,
    "week03": 2.9,
    "week04": 0.0,
    "week05": 0.0,
    "week06": 0.0,
    "week07": 2.9,
    "week08": 2.6,
    "week09": 0.0,
    "week10": 4.5,
    "week11": "BYE",
    "week12": 9.8,
    "week13": 0.0,
    "week14": 1.5,
    "week15": 4.1,
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 6.9, 2.9, 0.0, 0.0, 0.0, 2.9, 2.6, 0.0, 4.5, 'BYE', 9.8, 0.0, 1.5, 4.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [-0.2, 2.1, 1.3, 2.7, 0.5, 0.8, 2.5, 2.6, 3.6, 1.5, 'BYE', 1.4, 1.1, 1.8, 2.9, 5.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2977800.png",
    "name": "Alex Erickson",
    "depthchart": "Reserve: WR-3",
    "team": "Cincinnati Bengals",
    "projected": 5.8,
    "opponent": "Miami Dolphins",
    "home_away": "at ",
    "opp_rank_Pos": 24,
    "team_rank_Neu": 22,
    "avg_fp2": 4.55,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 34.04,
    "fanduelSalary": "$5100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#ea7330",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(234, 115, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#ea7330",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png",
    "headlineNews": "Critical fumble",
    "report": "Erickson lost a fumble on a punt return right before halftime in Sunday's loss to the Pats.",
    "analysis": "Erickson's fumble helped the Pats regain the lead, one that they would not relinquish. It was an overall disappointing day for Erickson, whose offensive contributions amounted to one catch for six yards on five targets.",
    "timestamp": "2019-12-17 10:10 AM",
    "week01": 2.8,
    "week02": 1.9,
    "week03": 1.8,
    "week04": 0.0,
    "week05": 1.2,
    "week06": 8.4,
    "week07": 17.5,
    "week08": 12.7,
    "week09": "BYE",
    "week10": 1.3,
    "week11": 0.5,
    "week12": 5.3,
    "week13": 3.1,
    "week14": 8.04,
    "week15": -0.9,
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.8, 1.9, 1.8, 0.0, 1.2, 8.4, 17.5, 12.7, 'BYE', 1.3, 0.5, 5.3, 3.1, 8.04, -0.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.4, 1.5, 3.1, 1.7, 4.0, 1.1, 3.5, 2.8, 'BYE', 4.4, 2.9, 4.2, 0.4, 1.2, 2.7, 5.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3128451.png",
    "name": "Tre'Quan Smith",
    "depthchart": "Backup: WR-2",
    "team": "New Orleans Saints",
    "projected": 5.7,
    "opponent": "Tennessee Titans",
    "home_away": "at ",
    "opp_rank_Pos": 25,
    "team_rank_Neu": 7,
    "avg_fp2": 5.81,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 27.44,
    "fanduelSalary": "$4500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9b845c",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(155, 132, 92, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#9b845c",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
    "headlineNews": "Scores again in win",
    "report": "Smith caught his only target for a 21-yard touchdown in the Saints' 34-7 win over the Colts on Monday.",
    "analysis": "Smith scored his third touchdown in four games and has now crossed the goal line in back-to-back contests. Apparently fully recovered from an ankle injury that cost him five games earlier in the season, he's become a viable scoring option for Drew Brees in the receiving game late in the year. Despite the scores, Smith has totaled just six receptions for 77 yards on 10 targets in his last four games, making him difficult to trust for fantasy purposes.",
    "timestamp": "2019-12-17 02:46 AM",
    "week01": 9.6,
    "week02": 6.4,
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": "DNP",
    "week08": "DNP",
    "week09": "BYE",
    "week10": 1.8,
    "week11": 0.0,
    "week12": 7.8,
    "week13": 2.4,
    "week14": 9.9,
    "week15": 8.6,
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.6, 6.4, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 1.8, 0.0, 7.8, 2.4, 9.9, 8.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.4, 5.7, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 5.0, 9.9, 5.7, 3.7, 5.4, 9.7, 5.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/17258.png",
    "name": "Willie Snead",
    "depthchart": "Backup: WR-2",
    "team": "Baltimore Ravens",
    "projected": 5.7,
    "opponent": "Cleveland Browns",
    "home_away": "at ",
    "opp_rank_Neg": 6,
    "team_rank_Neg": 26,
    "avg_fp2": 5.42,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 26.19,
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
    "headlineNews": "Target volume dips",
    "report": "Snead caught his lone target for 15 yards in Thursday's 42-21 win over the Jets.",
    "analysis": "Snead's volume dropped off Thursday after he saw multiple targets in six straight games. That said, Snead hasn't had more than 20 receiving yards in any game since Week 5. With a small target share and a low average depth of target (9.1), Snead doesn't have much in the way of peripheral numbers to portend a major turnaround down the stretch.",
    "timestamp": "2019-12-13 01:57 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.1, 1.0, 6.2, 13.1, 7.1, 3.3, 0.2, 'BYE', 2.5, 2.2, 2.3, 14.4, 1.7, 8.8, 2.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.9, 11.8, 6.4, 8.5, 6.1, 7.7, 9.6, 'BYE', 5.9, 5.2, 5.6, 7.4, 4.9, 6.9, 9.3, 5.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/10453.png",
    "name": "Ted Ginn",
    "depthchart": "Reserve: WR-3",
    "team": "New Orleans Saints",
    "projected": 5.6,
    "opponent": "Tennessee Titans",
    "home_away": "at ",
    "opp_rank_Pos": 25,
    "team_rank_Neu": 7,
    "avg_fp2": 4.96,
    "opp_rank_allowed_fp2_Neu": 16,
    "opp_avg_allowed_fp2": 27.44,
    "fanduelSalary": "$5300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9b845c",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(155, 132, 92, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#9b845c",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
    "headlineNews": "Targeted just once in win",
    "report": "Ginn caught one pass for 13 yards in Monday night's 34-7 win over Indianapolis.",
    "analysis": "Ginn saw his lowest snap count of the season with just 19. After busting out for 101 receiving yards in Week 1, the 34-year-old has not topped 50 since.",
    "timestamp": "2019-12-17 01:17 PM",
    "week01": 13.6,
    "week02": 0.0,
    "week03": 2.5,
    "week04": 3.4,
    "week05": 10.6,
    "week06": 5.8,
    "week07": 5.8,
    "week08": 5.2,
    "week09": "BYE",
    "week10": 0.5,
    "week11": 8.4,
    "week12": 4.8,
    "week13": 0.0,
    "week14": 7.0,
    "week15": 1.8,
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [13.6, 0.0, 2.5, 3.4, 10.6, 5.8, 5.8, 5.2, 'BYE', 0.5, 8.4, 4.8, 0.0, 7.0, 1.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.2, 4.3, 4.2, 5.3, 8.0, 5.7, 4.7, 7.5, 'BYE', 7.2, 7.9, 4.7, 4.8, 4.2, 8.1, 5.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3115913.png",
    "name": "Geronimo Allison",
    "depthchart": "Reserve: WR-3",
    "team": "Green Bay Packers",
    "projected": 5.6,
    "opponent": "Minnesota Vikings",
    "home_away": "at ",
    "opp_rank_Neu": 20,
    "team_rank_Neu": 17,
    "avg_fp2": 3.8,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 30.74,
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
    "headlineNews": "Snap count slips in Week 15",
    "report": "Allison was targeted four times and caught two passes for 19 yards in Sunday's victory over the Bears.",
    "analysis": "Allison had more receptions and yards than he did Week 14, but he still hasn't topped 40 yards in a game since putting up a season-high 52 yards Week 4. He at least had been regularly seeing the second-most snaps among Packers receivers, but he didn't even do that Week 15, finishing third behind Davante Adams and Allen Lazard. He'll head into Week 16 as a third receiver averaging fewer than 20 yards per contest over the last 10 games, which certainly isn't appealing for fantasy purposes.",
    "timestamp": "2019-12-16 09:55 AM",
    "week01": 0.0,
    "week02": 8.5,
    "week03": 0.4,
    "week04": 13.4,
    "week05": 3.8,
    "week06": 5.5,
    "week07": 5.3,
    "week08": 1.2,
    "week09": 3.1,
    "week10": 2.1,
    "week11": "BYE",
    "week12": 2.4,
    "week13": 3.0,
    "week14": 1.6,
    "week15": 2.9,
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 8.5, 0.4, 13.4, 3.8, 5.5, 5.3, 1.2, 3.1, 2.1, 'BYE', 2.4, 3.0, 1.6, 2.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.0, 7.6, 2.9, 2.0, 6.1, 6.2, 5.9, 4.7, 4.3, 5.2, 'BYE', 3.9, 5.3, 8.0, 6.7, 5.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2971718.png",
    "name": "Marcus Johnson",
    "depthchart": "Reserve: WR-3",
    "team": "Indianapolis Colts",
    "projected": 5.4,
    "opponent": "Carolina Panthers",
    "home_away": "",
    "opp_rank_Neu": 16,
    "team_rank_Neg": 27,
    "avg_fp2": 8.4,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 32.31,
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
    "headlineNews": "Makes long catch",
    "report": "Johnson caught two of four targets for 37 yards in Monday night's 34-7 loss to the Saints.",
    "analysis": "Johnson came back to earth after exploding for 105 yards and a touchdown his last time out. Like Week 14, however, he again hauled in a 20-yard reception Monday, showing his big-play ability. With top wideout T.Y. Hilton back in the lineup, Johnson will have a smaller workload the final two weeks of the season, but he at least has done enough lately to remain in the mix.",
    "timestamp": "2019-12-16 08:50 PM",
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
    "week11": 11.8,
    "week12": 0.0,
    "week13": 7.5,
    "week14": 18.0,
    "week15": 4.7,
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 11.8, 0.0, 7.5, 18.0, 4.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 2.4, 4.5, 2.2, 3.7, 5.4, 5.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4047839.png",
    "name": "N'Keal Harry",
    "depthchart": "Reserve: WR-3",
    "team": "New England Patriots",
    "projected": 5.3,
    "opponent": "Buffalo Bills",
    "home_away": "",
    "opp_rank_Neg": 3,
    "team_rank_Neu": 9,
    "avg_fp2": 4.64,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 23.04,
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
    "headlineNews": "Catches TD pass in Week 15",
    "report": "Harry logged 38 of a possible 65 snaps on offense in Sunday's 34-13 win over the Bengals, Mike Reiss of ESPN.com reports, hauling in two of his four targets for 15 yards -- including a diving TD reception -- and gaining 22 rushing yards on two carries.",
    "analysis": "Though Harry was out-snapped by Mohamed Sanu (56) and a banged-up Julian Edelman (40), his workload saw a major uptick from Week 14, when he was on the field for just two snaps on offense. Looking ahead, it seems like the Patriots are inclined to get Harry more involved in their attack, and while that context may not always generate a high volume of touches, the 6-foot-4, 225-pounder has of late displayed flashes of his potential to develop into a solid red-zone weapon for the team.",
    "timestamp": "2019-12-16 07:19 AM",
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
    "week11": 3.3,
    "week12": 7.5,
    "week13": 0.0,
    "week14": 1.7,
    "week15": 10.7,
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 3.3, 7.5, 0.0, 1.7, 10.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 1.5, 4.3, 0.6, 2.0, 1.5, 5.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/11674.png",
    "name": "Danny Amendola",
    "depthchart": "Backup: WR-2",
    "team": "Detroit Lions",
    "projected": 5.3,
    "opponent": "Denver Broncos",
    "home_away": "at ",
    "opp_rank_Neu": 10,
    "team_rank_Neu": 8,
    "avg_fp2": 7.62,
    "opp_rank_allowed_fp2_Neu": 9,
    "opp_avg_allowed_fp2": 25.13,
    "fanduelSalary": "$6000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0076B6",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(0, 118, 182, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#0076B6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/det.png",
    "headlineNews": "Stellar day in loss",
    "report": "Amendola brought in eight of 13 targets for 102 yards in the Lions' 38-17 loss to the Buccaneers on Sunday.",
    "analysis": "With Marvin Jones (IR, ankle) and Marvin Hall (IR, foot) unavailable, Amendola took center stage with coverage tilting heavily toward Kenny Golladay. The veteran possession receiver narrowly missed a touchdown, but he still comfortably paced the team in receptions and receiving yards for the afternoon. Amendola also tied his season high in receptions while posting his third 100-yard effort of the campaign overall, and he could be primed for another heavy workload in a Week 16 interconference battle against the Broncos.",
    "timestamp": "2019-12-15 03:00 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [19.9, 0.0, 5.7, 'DNP', 'BYE', 1.1, 14.5, 13.5, 4.4, 4.9, 6.7, 3.6, 4.7, 5.9, 14.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.7, 4.9, 6.6, 'DNP', 'BYE', 4.0, 3.4, 3.8, 4.7, 3.8, 4.1, 3.8, 3.4, 3.2, 10.4, 5.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/17177.png",
    "name": "Allen Hurns",
    "depthchart": "Reserve: WR-3",
    "team": "Miami Dolphins",
    "projected": 5.2,
    "opponent": "Cincinnati Bengals",
    "home_away": "",
    "opp_rank_Neu": 15,
    "team_rank_Neu": 23,
    "avg_fp2": 4.81,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 24.53,
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
    "headlineNews": "Held to one catch",
    "report": "Hurns caught his only target for nine yards during Sunday's 36-20 loss to the Giants.",
    "analysis": "Hurns is operating behind DeVante Parker, Albert Wilson and Mike Gesicki in the pecking order of Miami's aerial attack, with running back Patrick Laird also demanding a larger target share. Without high enough upside to balance out his low floor, Hurns doesn't warrant fantasy consideration outside the deepest of leagues.",
    "timestamp": "2019-12-16 08:56 AM",
    "week01": 2.7,
    "week02": 1.8,
    "week03": 1.1,
    "week04": "DNP",
    "week05": "BYE",
    "week06": 2.6,
    "week07": 6.8,
    "week08": 7.7,
    "week09": 2.6,
    "week10": 4.2,
    "week11": 5.3,
    "week12": 12.2,
    "week13": 4.8,
    "week14": 9.3,
    "week15": 1.4,
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.7, 1.8, 1.1, 'DNP', 'BYE', 2.6, 6.8, 7.7, 2.6, 4.2, 5.3, 12.2, 4.8, 9.3, 1.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.1, 5.2, 2.0, 'DNP', 'BYE', 1.1, 1.7, 3.7, 4.7, 3.8, 5.2, 5.7, 2.8, 4.6, 4.5, 5.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3916945.png",
    "name": "Darius Slayton",
    "depthchart": "Backup: WR-2",
    "team": "New York Giants",
    "projected": 5.2,
    "opponent": "Washington Redskins",
    "home_away": "at ",
    "opp_rank_Neu": 12,
    "team_rank_Neu": 20,
    "avg_fp2": 11.6,
    "opp_rank_allowed_fp2_Neu": 15,
    "opp_avg_allowed_fp2": 26.61,
    "fanduelSalary": "$6000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#0B2265",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(11, 34, 101, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png",
    "headlineNews": "TDs keep coming",
    "report": "Slayton caught two of three targets for 31 yards and a touchdown in Sunday's 36-20 win over the Dolphins.",
    "analysis": "Slayton failed to notch his fourth multi-score effort of 2019, but the impressive rookie is up to eight touchdowns, seven of which have come in his past seven games played. His visit to the end zone in this one came from five yards out in the third quarter. Regardless of whether he's catching balls from Eli Manning for a third straight game or from Daniel Jones (ankle), Slayton will remain a threat to find the end zone in Washington in Week 16.",
    "timestamp": "2019-12-15 02:28 PM",
    "week01": "DNP",
    "week02": "DNP",
    "week03": 9.7,
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 9.7, 2.3, 14.2, 4.7, 3.8, 18.0, 1.1, 29.34, 'BYE', 8.7, 7.4, 29.9, 10.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 1.6, 8.3, 6.0, 7.3, 9.9, 9.6, 5.4, 10.4, 'BYE', 9.1, 12.5, 7.2, 11.1, 5.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15349.png",
    "name": "Cole Beasley",
    "depthchart": "Backup: WR-2",
    "team": "Buffalo Bills",
    "projected": 5.2,
    "opponent": "New England Patriots",
    "home_away": "at ",
    "opp_rank_Neg": 2,
    "team_rank_Neg": 28,
    "avg_fp2": 9.79,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 18.4,
    "fanduelSalary": "$5800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#005596",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 85, 150, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
    "headlineNews": "Limited to one catch",
    "report": "Beasley caught one of six targets for six yards in Sunday's 17-10 win over the Steelers.",
    "analysis": "After three straight weeks with a touchdown, Beasley struggled Sunday, finishing with a season-low one catch. The rest of the Bills' passing offense struggled as well against a tough Pittsburgh defense. Beasley will look to bounce back against the Patriots in Week 16.",
    "timestamp": "2019-12-16 04:39 PM",
    "week01": 6.5,
    "week02": 10.3,
    "week03": 10.8,
    "week04": 11.0,
    "week05": 3.6,
    "week06": "BYE",
    "week07": 9.1,
    "week08": 11.6,
    "week09": 8.3,
    "week10": 9.4,
    "week11": 5.8,
    "week12": 16.6,
    "week13": 20.0,
    "week14": 12.9,
    "week15": 1.1,
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.5, 10.3, 10.8, 11.0, 3.6, 'BYE', 9.1, 11.6, 8.3, 9.4, 5.8, 16.6, 20.0, 12.9, 1.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.6, 10.5, 8.2, 5.5, 6.2, 'BYE', 6.2, 4.4, 6.9, 6.4, 4.1, 7.0, 7.4, 3.9, 8.3, 5.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3042778.png",
    "name": "Corey Davis",
    "depthchart": "Backup: WR-2",
    "team": "Tennessee Titans",
    "projected": 5.1,
    "opponent": "New Orleans Saints",
    "home_away": "",
    "opp_rank_Neu": 17,
    "team_rank_Neu": 21,
    "avg_fp2": 6.28,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 31.56,
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
    "headlineNews": "Three catches during Week 15 loss",
    "report": "Davis corralled three of six targets for 57 receiving yards during Sunday's 24-21 loss to the Texans.",
    "analysis": "The 24-year-old wideout has now been held out of the end zone in each of his past six outings, and he is averaging fewer than 35 receiving yards per game since Week 8. Rookie A.J. Brown more than doubled Davis' target share Week 15, and he has garnered more targets than Davis in each of their past five mutual appearances. Davis is a risky proposition in the late stages of the fantasy season, even with a favorable Week 16 matchup forthcoming against the Saints' bottom-half pass defense.",
    "timestamp": "2019-12-15 03:25 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 5.3, 5.9, 17.6, 3.8, 5.1, 17.0, 1.9, 6.8, 'DNP', 'BYE', 3.9, 2.8, 4.4, 7.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.0, 5.8, 3.1, 9.5, 7.3, 9.4, 6.0, 12.3, 5.9, 'DNP', 'BYE', 3.5, 8.7, 2.5, 4.3, 5.1]
                    }
                    
                    ]
               }
            }];



$scope.positionTE = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3046439.png",
    "name": "Hunter Henry",
    "depthchart": "Starter: TE-1",
    "team": "Los Angeles Chargers",
    "projected": 19.1,
    "opponent": "Oakland Raiders",
    "home_away": "",
    "opp_rank_Pos": 27,
    "team_rank_Pos": 5,
    "avg_fp2": 10.3,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 10.84,
    "fanduelSalary": "$6100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0080C6",
    "tmColorDark": "#002A5E",
    "tmColorLite_rgba": "rgba(0, 128, 198, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 94, 0.2)",
    "tmTextLite": "#0080C6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lac.png",
    "headlineNews": "Target volume continues to drop",
    "report": "Henry caught both of his targets for 29 yards and also lost a fumble in the 39-10 loss Sunday to the Vikings.",
    "analysis": "Henry's disappearance over the last three weeks is a mystery that might never be solved. In a six-game stretch following his return from a tibia plateau fracture, Henry was arguably one of the most dynamic tight ends in the league, recording 35 receptions, 427 receiving yards and three touchdowns thanks to 49 targets --- second most on the team over that stretch behind usual stalwart Keenan Allen. In the team's three games following a Week 12 bye, though, Henry was been shockingly absent from the offense, shuffling together a 6-78-1 line behind a paltry nine targets. Part of the loss of production could be blamed on the opposition; both the Broncos in Week 13 and Vikings in Week 15 were aggressively attempting to limit Henry's opportunities, particularly as a safety valve against a heavy pass rush. Nonetheless, it's bizarre to see such a dramatic switch, with wide receiver Mike Williams essentially gobbling up the missing targets on deep pass attempts. It remains to be seen how Henry will finish out the season, as the Chargers could opt to start younger signal callers such as Tyrod Taylor or Easton Stick at quarterback after yet another alarmingly poor Sunday from franchise icon Philip Rivers.",
    "timestamp": "2019-12-17 07:09 AM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.0, 'DNP', 'DNP', 'DNP', 'DNP', 26.0, 12.7, 6.7, 11.9, 11.0, 11.9, 'BYE', 2.0, 10.9, 1.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.2, 'DNP', 'DNP', 'DNP', 'DNP', 10.5, 14.9, 14.6, 14.5, 18.2, 15.1, 'BYE', 14.2, 14.3, 8.6, 19.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15835.png",
    "name": "Zach Ertz",
    "depthchart": "Starter: TE-1",
    "team": "Philadelphia Eagles",
    "projected": 18.6,
    "opponent": "Dallas Cowboys",
    "home_away": "",
    "opp_rank_Neu": 8,
    "team_rank_Neu": 16,
    "avg_fp2": 11.91,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 10.06,
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
    "headlineNews": "Stays hot in important win",
    "report": "Ertz caught five of 10 targets for 61 yards and a touchdown in Sunday's 37-27 win over Washington.",
    "analysis": "Ertz was shaken up in the first half after taking a high hit that was flagged for a personal foul, but he stayed in the game and paced the Eagles in targets while tying Greg Ward for the team lead in receiving yards. His two-yard touchdown gave the Eagles a 24-21 lead with 9:59 to play. The star tight end is in the midst of a terrific stretch that's seen him total 47 catches for 464 yards and five touchdowns over the past six games. Ertz should stay busy in the critical Week 16 meeting with the Cowboys.",
    "timestamp": "2019-12-15 01:40 PM",
    "week01": 7.9,
    "week02": 13.2,
    "week03": 8.4,
    "week04": 10.0,
    "week05": 14.2,
    "week06": 5.4,
    "week07": 4.8,
    "week08": 3.0,
    "week09": 20.8,
    "week10": "BYE",
    "week11": 13.9,
    "week12": 21.1,
    "week13": 3.9,
    "week14": 25.6,
    "week15": 14.6,
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.9, 13.2, 8.4, 10.0, 14.2, 5.4, 4.8, 3.0, 20.8, 'BYE', 13.9, 21.1, 3.9, 25.6, 14.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.1, 7.5, 11.6, 9.1, 12.4, 4.3, 9.2, 5.0, 9.3, 'BYE', 11.1, 10.6, 9.1, 9.4, 9.2, 18.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116365.png",
    "name": "Mark Andrews",
    "depthchart": "Starter: TE-1",
    "team": "Baltimore Ravens",
    "projected": 12.9,
    "opponent": "Cleveland Browns",
    "home_away": "at ",
    "opp_rank_Neg": 6,
    "team_rank_Neg": 26,
    "avg_fp2": 10.78,
    "opp_rank_allowed_fp2_Neu": 17,
    "opp_avg_allowed_fp2": 9.53,
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
    "headlineNews": "Gets into end zone",
    "report": "Andrews (knee) secured four of seven targets for 52 yards and a touchdown in the Ravens' 42-21 win over the Jets on Thursday.",
    "analysis": "Andrews tied Marquise Brown for the team lead in receptions while checking in second to Seth Roberts in receiving yardage. The second-year tight end narrowly missed putting together a truly explosive performance when he and Lamar Jackson just failed to connect on a deep pass down the middle early in the fourth quarter, but it was still a fruitful fantasy night following his early exit from a Week 14 win over the Bills due to a knee injury. Andrews will look to put together an even stronger effort against the Browns in Week 16, a week from Sunday.",
    "timestamp": "2019-12-12 09:14 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [20.8, 21.2, 3.0, 11.1, 7.0, 10.9, 4.9, 'BYE', 3.1, 20.3, 15.5, 5.5, 12.5, 1.9, 13.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.9, 7.6, 10.9, 11.5, 11.8, 10.6, 11.8, 'BYE', 8.3, 8.3, 14.9, 10.1, 8.8, 5.9, 9.8, 12.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15847.png",
    "name": "Travis Kelce",
    "depthchart": "Starter: TE-1",
    "team": "Kansas City Chiefs",
    "projected": 12.7,
    "opponent": "Chicago Bears",
    "home_away": "at ",
    "opp_rank_Neu": 13,
    "team_rank_Pos": 3,
    "avg_fp2": 13.24,
    "opp_rank_allowed_fp2_Neu": 22,
    "opp_avg_allowed_fp2": 10.09,
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
    "headlineNews": "Racks up 142 yards in win",
    "report": "Kelce caught 11 of 13 targets for 142 yards during Sunday's 23-3 win over Denver.",
    "analysis": "Sunday's snow-covered field wasn't necessarily conducive to a prolific passing attack, but the Chiefs hummed for most of the game thanks in large part to Kelce's work. The veteran tight end consistently shook open over the middle of the field for a season-high 11 catches, 13 targets and 142 yards, the most meaningful of which was likely an 11-yard reception late in the first quarter that made Kelce the first tight end in NFL history to record four consecutive 1,000-yard seasons. Kelce has been the picture of consistency this season with at least five catches in 10 of 14 games. He'll be relied on Sunday against Chicago's 13th-ranked pass defense.",
    "timestamp": "2019-12-15 02:11 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.3, 20.2, 12.4, 12.92, 9.0, 7.8, 7.4, 14.3, 9.7, 17.0, 18.7, 'BYE', 11.5, 14.5, 19.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.6, 13.9, 10.7, 12.0, 15.7, 14.5, 12.8, 8.1, 7.0, 10.3, 11.8, 'BYE', 12.4, 10.2, 12.2, 12.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3043275.png",
    "name": "Austin Hooper",
    "depthchart": "Starter: TE-1",
    "team": "Atlanta Falcons",
    "projected": 11.0,
    "opponent": "Jacksonville Jaguars",
    "home_away": "",
    "opp_rank_Neu": 14,
    "team_rank_Pos": 4,
    "avg_fp2": 12.23,
    "opp_rank_allowed_fp2_Neu": 21,
    "opp_avg_allowed_fp2": 10.07,
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
    "headlineNews": "Slow production loiters post-injury",
    "report": "Hooper caught three of six targets for 20 receiving yards during Sunday's 29-22 win against San Francisco.",
    "analysis": "The 2018 Pro Bowl tight end found himself on pace for 100 receptions, 1,080 receiving yards and 11 touchdowns through the first 10 weeks of the season, but since suffering a sprained MCL against New Orleans on Nov. 10 he has compiled just five catches for 52 yards in appearances over the past two weeks. Though he is an electrifying receiving threat when healthy and did almost reel in a fourth-quarter touchdown grab, Hooper's limited production in his first two games back from injury devalue his outlook. Hooper will have a prime opportunity to rebound against Jacksonville in Week 16 as the Jaguars' defense has surrendered the third-most TE touchdowns thus far in 2019.",
    "timestamp": "2019-12-15 08:00 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.2, 5.4, 21.6, 17.5, 10.6, 21.7, 12.6, 15.5, 'BYE', 9.7, 'DNP', 'DNP', 'DNP', 4.2, 3.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.2, 10.0, 7.0, 9.6, 7.3, 4.5, 15.6, 6.8, 'BYE', 11.8, 'DNP', 'DNP', 'DNP', 10.7, 9.8, 11.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3121023.png",
    "name": "Dallas Goedert",
    "depthchart": "Backup: TE-2",
    "team": "Philadelphia Eagles",
    "projected": 10.5,
    "opponent": "Dallas Cowboys",
    "home_away": "",
    "opp_rank_Neu": 8,
    "team_rank_Neu": 16,
    "avg_fp2": 6.74,
    "opp_rank_allowed_fp2_Neu": 20,
    "opp_avg_allowed_fp2": 10.06,
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
    "headlineNews": "Five grabs in win",
    "report": "Goedert caught five of six targets for 55 yards in Sunday's 37-27 win over the Redskins.",
    "analysis": "Philadelphia's backup tight end continues to play a sizable role in the offense with all of the team's injuries at the wide receiver position. Goedert has now totaled at least three receptions in each of his past nine games, and this was his third time topping 50 yards in that stretch.",
    "timestamp": "2019-12-15 03:13 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.6, 'DNP', 0.0, 8.6, 1.6, 7.3, 12.9, 9.7, 5.9, 'BYE', 11.1, 4.7, 9.6, 5.6, 8.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.6, 'DNP', 5.9, 4.0, 4.1, 1.5, 4.3, 2.1, 3.6, 'BYE', 5.5, 5.5, 6.1, 4.5, 4.0, 10.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2576925.png",
    "name": "Darren Waller",
    "depthchart": "Starter: TE-1",
    "team": "Oakland Raiders",
    "projected": 10.1,
    "opponent": "Los Angeles Chargers",
    "home_away": "at ",
    "opp_rank_Neg": 4,
    "team_rank_Neu": 15,
    "avg_fp2": 11.19,
    "opp_rank_allowed_fp2_Neu": 7,
    "opp_avg_allowed_fp2": 7.79,
    "fanduelSalary": "$6500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A5ACAF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/oak.png",
    "headlineNews": "Strong effort in Oakland finale",
    "report": "Waller caught eight of 10 targets for 122 yards in Sunday's 20-16 loss to the Jaguars.",
    "analysis": "In the Raiders' final game in Oakland, the tight end led the team in catches, targets and yards, a fitting tribute to past franchise greats like Dave Casper and Todd Christensen. Waller topped 1,000 receiving yards on the season with his final grab, becoming only the second TE in the club's history to accomplish that feat -- Christensen did it three times between 1983 and 1986. Waller will take aim at Christensen's franchise record 1,247 yards over the final two games, including next Sunday's road clash with a Falcons defense that just saw George Kittle rack up 134 yards against it in Week 15.",
    "timestamp": "2019-12-15 05:51 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.5, 9.3, 20.6, 8.8, 5.9, 'BYE', 28.1, 8.1, 6.2, 5.5, 10.1, 5.6, 13.5, 8.3, 16.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.0, 7.6, 6.4, 14.1, 10.7, 'BYE', 9.6, 10.2, 14.9, 9.4, 22.3, 13.5, 10.3, 11.9, 8.2, 10.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3040151.png",
    "name": "George Kittle",
    "depthchart": "Starter: TE-1",
    "team": "San Francisco 49ers",
    "projected": 9.4,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank_Neu": 9,
    "team_rank_Neu": 13,
    "avg_fp2": 12.57,
    "opp_rank_allowed_fp2_Neu": 12,
    "opp_avg_allowed_fp2": 8.81,
    "fanduelSalary": "$7400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "Dominates target share Week 15",
    "report": "Kittle hauled in 13 of 17 targets for 134 receiving yards during Sunday's 29-22 loss to the Falcons.",
    "analysis": "After managing just eight catches for 84 yards in outings against Baltimore and New Orleans the past two weeks, Kittle commanded more than half of San Francisco's targets versus Atlanta and accounted for over 65 percent of the 49ers' receiving production. During his dominant Week 15 effort, Kittle also surpassed Mike Ditka for the most receiving yards by a tight end across his first three NFL seasons, per Nick Wagoner of ESPN.com. He remains an elite tight end play heading into a matchup against a Rams defense that surrendered six combined receptions, 76 yards and a touchdown to Dallas tight ends Sunday.",
    "timestamp": "2019-12-15 05:13 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.4, 6.9, 8.7, 'BYE', 17.8, 14.3, 5.3, 11.6, 16.9, 'DNP', 'DNP', 21.9, 2.4, 15.7, 19.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.8, 8.1, 13.3, 'BYE', 11.8, 10.0, 8.9, 9.5, 11.5, 'DNP', 'DNP', 13.1, 11.0, 13.2, 16.7, 9.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16813.png",
    "name": "Logan Thomas",
    "depthchart": "Starter: TE-1",
    "team": "Detroit Lions",
    "projected": 8.5,
    "opponent": "Denver Broncos",
    "home_away": "at ",
    "opp_rank_Neu": 10,
    "team_rank_Neu": 8,
    "avg_fp2": 1.9,
    "opp_rank_allowed_fp2_Neu": 15,
    "opp_avg_allowed_fp2": 9.21,
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
    "headlineNews": "No catches on four targets",
    "report": "Thomas failed to catch any of his four targets during Sunday's 38-17 loss to the Buccaneers.",
    "analysis": "Thomas shared starting honors with Jesse James and actually wound up as the position leader in offensive snaps by a slim margin. However, Thomas wasn't able to bring down any of the passes that were sent his way, and he consequently laid his sixth goose egg in 15 games. Despite the increase in playing time he's experiencing in T.J. Hockenson's (ankle) absence, it's not reasonable to expect a whole lot from the tight end as long as he's catching passes from a backup-caliber quarterback in David Blough.",
    "timestamp": "2019-12-16 11:30 AM",
    "week01": 0.0,
    "week02": 1.2,
    "week03": 2.0,
    "week04": 4.0,
    "week05": "BYE",
    "week06": 0.0,
    "week07": 0.0,
    "week08": 2.2,
    "week09": 1.8,
    "week10": 2.9,
    "week11": 0.0,
    "week12": 9.4,
    "week13": 0.0,
    "week14": 3.1,
    "week15": 0.0,
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 1.2, 2.0, 4.0, 'BYE', 0.0, 0.0, 2.2, 1.8, 2.9, 0.0, 9.4, 0.0, 3.1, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [0.8, 0.6, 0.8, -0.4, 'BYE', 2.5, 1.4, 0.8, 1.0, 0.2, 0.4, 2.5, 1.6, 2.4, -0.4, 8.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/10475.png",
    "name": "Greg Olsen",
    "depthchart": "Starter: TE-1",
    "team": "Carolina Panthers",
    "projected": 8.2,
    "opponent": "Indianapolis Colts",
    "home_away": "at ",
    "opp_rank_Neu": 21,
    "team_rank_Neu": 18,
    "avg_fp2": 7.6,
    "opp_rank_allowed_fp2_Neu": 19,
    "opp_avg_allowed_fp2": 9.96,
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
    "headlineNews": "Clears concussion protocol",
    "report": "Olsen said Monday that he cleared the NFL's concussion protocol, Steve Reed of the Associated Press reports.",
    "analysis": "Though he was able to practice on a limited basis last week, Olsen ultimately was inactive for a second straight game in Sunday's 30-24 loss to the Seahawks. His removal from the protocol implies that he received clearance from an independent neurologist at some point since Friday's practice, so he should be available next weekend in Indianapolis. Olsen's impending return to the lineup should result in a decreased role for Ian Thomas, who started at tight end the past two weeks.",
    "timestamp": "2019-12-16 10:05 AM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.6, 14.0, 22.5, 1.5, 0.0, 7.2, 'BYE', 2.3, 5.5, 13.8, 8.2, 6.9, 3.7, 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.3, 12.3, 16.4, 10.0, 8.2, 16.2, 'BYE', 7.2, 7.2, 10.4, 9.6, 8.1, 7.1, 'DNP', 'DNP', 8.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16504.png",
    "name": "Jack Doyle",
    "depthchart": "Starter: TE-1",
    "team": "Indianapolis Colts",
    "projected": 8.0,
    "opponent": "Carolina Panthers",
    "home_away": "",
    "opp_rank_Neu": 16,
    "team_rank_Neg": 27,
    "avg_fp2": 6.18,
    "opp_rank_allowed_fp2_Neg": 4,
    "opp_avg_allowed_fp2": 7.32,
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
    "headlineNews": "Catches two passes",
    "report": "Doyle caught two of five targets for 21 yards in Monday night's 34-7 loss to the Saints.",
    "analysis": "Doyle ranked third on the Colts in targets, but nobody on Indy's offense could produce much against a stingy Saints defense. The tight end has now caught just two passes in back-to-back games following his best outing of the season in Week 13.",
    "timestamp": "2019-12-16 08:46 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.5, 3.1, 6.6, 10.2, 3.4, 'BYE', 3.6, 8.1, 9.7, 11.9, 0.0, 4.3, 16.3, 3.7, 3.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.6, 7.1, 5.2, 2.4, 5.8, 'BYE', 5.0, 4.9, 5.3, 10.0, 4.4, 3.1, 6.1, 8.8, 6.9, 8.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/12537.png",
    "name": "Jared Cook",
    "depthchart": "Starter: TE-1",
    "team": "New Orleans Saints",
    "projected": 7.8,
    "opponent": "Tennessee Titans",
    "home_away": "at ",
    "opp_rank_Pos": 25,
    "team_rank_Neu": 7,
    "avg_fp2": 9.39,
    "opp_rank_allowed_fp2_Pos": 25,
    "opp_avg_allowed_fp2": 10.61,
    "fanduelSalary": "$6600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9b845c",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(155, 132, 92, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#9b845c",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
    "headlineNews": "Catches four passes in win",
    "report": "Cook brought in all four of his targets for 54 yards in the Saints' 34-7 win over the Colts on Monday.",
    "analysis": "Though he didn't reach the end zone, Cook produced a solid receiving line in Monday's demolition of the Colts. Cook has seen his receptions and receiving yards diminish significantly from his big 2018 campaign in Oakland, though he's already matched his season high in touchdowns (six) with two games left on the schedule -- including a Week 16 meeting with another of his former teams, the Titans.",
    "timestamp": "2019-12-16 08:54 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.7, 3.5, 1.2, 3.6, 12.1, 11.2, 'DNP', 'DNP', 'BYE', 10.4, 10.3, 18.9, 10.0, 19.4, 7.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.9, 7.2, 8.8, 3.4, 4.5, 4.3, 'DNP', 'DNP', 'BYE', 9.4, 4.4, 5.2, 7.4, 7.2, 9.6, 7.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15788.png",
    "name": "Tyler Eifert",
    "depthchart": "Starter: TE-1",
    "team": "Cincinnati Bengals",
    "projected": 7.6,
    "opponent": "Miami Dolphins",
    "home_away": "at ",
    "opp_rank_Pos": 24,
    "team_rank_Neu": 22,
    "avg_fp2": 4.64,
    "opp_rank_allowed_fp2_Neu": 10,
    "opp_avg_allowed_fp2": 8.75,
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
    "headlineNews": "Displays some aerial gymnastics",
    "report": "Eifert caught three of five targets for 44 yards during Sunday's 34-13 loss to New England.",
    "analysis": "Eifert made a pair of leaping catches during Sunday's blowout loss for gains of 19 and 24 yards. The veteran tight end has topped 40 yards in back-to-back games with Andy Dalton back under center, which doesn't sound like much until you realize that he had just one such performance during the season's first 12 games. Sunday brings a matchup against a struggling Miami defense in a game that will have major draft-day implications. Even with an uptick in production and a poor opponent, Eifert is a risky fantasy start in a lost season for the Bengals.",
    "timestamp": "2019-12-15 03:41 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.2, 8.4, 2.3, 3.7, 2.4, 2.3, 2.0, 10.4, 'BYE', 9.0, 3.6, 1.2, 1.7, 6.9, 5.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.0, 8.2, 7.0, 12.2, 10.4, 7.1, 10.2, 9.2, 'BYE', 7.2, 6.9, 9.8, 5.5, 8.6, 9.5, 7.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3043080.png",
    "name": "O.J. Howard",
    "depthchart": "Starter: TE-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 7.6,
    "opponent": "Houston Texans",
    "home_away": "",
    "opp_rank_Pos": 28,
    "team_rank_Pos": 1,
    "avg_fp2": 5.07,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 10.74,
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
    "headlineNews": "Solid effort in Week 15 win",
    "report": "Howard secured four of eight targets for 46 yards in the Buccaneers' 38-17 win over the Lions on Sunday.",
    "analysis": "Howard checked in second only to Chris Godwin (hamstring) and Breshad Perriman in receptions for the afternoon, and the third-year tight end actually paced the team in targets. Howard now has 13 receptions over his last three games, as he's enjoying a steady role that's now poised to grow further if Godwin is forced to miss the Week 16 game against the Texans.",
    "timestamp": "2019-12-15 09:16 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.2, 0.0, 8.1, 4.8, 1.5, 4.5, 'BYE', 'DNP', 'DNP', 12.7, 0.0, 1.5, 8.6, 9.3, 6.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.9, 5.6, 8.4, 4.2, 7.5, 12.7, 'BYE', 'DNP', 'DNP', 7.6, 6.3, 6.7, 9.0, 3.7, 1.6, 7.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14054.png",
    "name": "Kyle Rudolph",
    "depthchart": "Starter: TE-1",
    "team": "Minnesota Vikings",
    "projected": 7.2,
    "opponent": "Green Bay Packers",
    "home_away": "",
    "opp_rank_Neu": 22,
    "team_rank_Neu": 12,
    "avg_fp2": 6.64,
    "opp_rank_allowed_fp2_Pos": 26,
    "opp_avg_allowed_fp2": 10.72,
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
    "headlineNews": "Snags three passes",
    "report": "Rudolph caught all three of his targets for 48 yards during Sunday's 39-10 win over the Chargers.",
    "analysis": "Rudolph's big chunk play game early in the fourth quarter when, backed up in Vikings territory, Kirk Cousins uncorked a pass up the seam for Rudolph, who came down with the ball between two defenders. Sunday corrected course for Rudolph, who snapped a seven-game streak with at least three catches per game in Week 14. He's a steady option at tight end, but will have his hands full Monday against a Packers defense that held him to nine yards on three catches in Week 2.",
    "timestamp": "2019-12-17 04:44 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 2.4, 1.6, 1.7, 0.9, 5.1, 14.3, 3.2, 9.8, 17.4, 15.2, 'BYE', 13.0, 2.1, 6.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.6, 3.6, 9.0, 5.5, 4.1, 5.2, 7.8, 5.0, 4.5, 9.0, 5.2, 'BYE', 14.9, 12.7, 3.5, 7.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4527.png",
    "name": "Jason Witten",
    "depthchart": "Starter: TE-1",
    "team": "Dallas Cowboys",
    "projected": 7.0,
    "opponent": "Philadelphia Eagles",
    "home_away": "at ",
    "opp_rank_Neu": 18,
    "team_rank_Pos": 2,
    "avg_fp2": 7.26,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 7.19,
    "fanduelSalary": "$5800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#7F9695",
    "tmColorDark": "#041E42",
    "tmColorLite_rgba": "rgba(127, 150, 149, 0.2)",
    "tmColorDark_rgba": "rgba(4, 30, 66, 0.2)",
    "tmTextLite": "#7F9695",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
    "headlineNews": "Scores fourth TD of season",
    "report": "Witten caught four of five targets for 36 yards and a touchdown in Sunday's 44-21 win over the Rams.",
    "analysis": "The future Hall of Famer opened the scoring late in the first quarter with a 19-yard grab, but he wasn't much of a factor after that as the Cowboys leaned heavily on their running game. Witten now has four TDs on the year, including two in the last three games, but he hasn't topped 42 receiving yards since Week 9. He'll remain a low-ceiling fantasy option in Week 16 against the Eagles.",
    "timestamp": "2019-12-15 06:47 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.0, 10.5, 6.9, 5.0, 4.4, 8.2, 5.3, 'BYE', 9.8, 2.7, 5.8, 1.0, 15.2, 6.2, 11.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.7, 7.8, 9.1, 11.8, 7.7, 9.2, 8.0, 'BYE', 6.1, 14.1, 9.7, 6.8, 3.4, 7.0, 6.8, 7.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3125404.png",
    "name": "Jacob Hollister",
    "depthchart": "Starter: TE-1",
    "team": "Seattle Seahawks",
    "projected": 6.0,
    "opponent": "Arizona Cardinals",
    "home_away": "",
    "opp_rank_Pos": 32,
    "team_rank_Neu": 10,
    "avg_fp2": 6.67,
    "opp_rank_allowed_fp2_Pos": 32,
    "opp_avg_allowed_fp2": 16.34,
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
    "headlineNews": "Mild production against Carolina",
    "report": "Hollister hauled in all three of his targets for 23 yards in Sunday's 30-24 win over the Panthers.",
    "analysis": "After recording 12 receptions and three touchdowns between Weeks 9 and 10, Hollister has regressed, failing to exceed six catches or 44 yards in a game while staying out of the end zone in four straight games. The 26-year-old is a touchdown-dependant fantasy asset, but he's a solid option in Week 16 against the Cardinals, who allowed two scores to tight ends in Sunday's win over the Browns.",
    "timestamp": "2019-12-16 08:06 AM",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": 0.0,
    "week07": 3.5,
    "week08": 2.8,
    "week09": 17.7,
    "week10": 16.2,
    "week11": "BYE",
    "week12": 3.2,
    "week13": 7.4,
    "week14": 5.4,
    "week15": 3.8,
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 0.0, 3.5, 2.8, 17.7, 16.2, 'BYE', 3.2, 7.4, 5.4, 3.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 0.2, -0.2, 8.7, 1.9, 5.2, 'BYE', 6.3, 9.5, 6.3, 4.3, 6.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3054212.png",
    "name": "Jonnu Smith",
    "depthchart": "Starter: TE-1",
    "team": "Tennessee Titans",
    "projected": 5.7,
    "opponent": "New Orleans Saints",
    "home_away": "",
    "opp_rank_Neu": 17,
    "team_rank_Neu": 21,
    "avg_fp2": 5.19,
    "opp_rank_allowed_fp2_Neu": 11,
    "opp_avg_allowed_fp2": 8.79,
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
    "headlineNews": "Tears off 57-yard run",
    "report": "Smith caught all five of his targets for 60 yards and picked up 57 yards on his lone rush attempt during a 24-21 loss to Houston on Sunday.",
    "analysis": "Smith lined up behind Ryan Tannehill on the Titans' opening snap of the fourth quarter and peeled off a 57-yard gain on a toss play to the right, the longest run by a tight end in 43 years. Prior to Sunday there had only been three occasions all season in which a tight end had broken 20 miles per hour as a ball carrier, but Smith was able to achieve that feat two times Week 15 while gaining 17-plus yards on three of his six offensive touches. In Tennessee's upcoming Week 16 matchup against New Orleans, Smith will be in search of his second touchdown in three games, taking on a Saints defense that has surrendered just three TDs to opposing tight ends all season.",
    "timestamp": "2019-12-15 03:12 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.2, 0.0, 3.0, 1.0, 6.2, 1.3, 7.9, 16.8, 3.3, 5.0, 'BYE', 0.4, 1.0, 10.4, 14.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.4, 2.8, 0.5, 1.4, 0.5, -0.4, 1.3, 6.7, 3.6, 7.7, 'BYE', 5.6, 8.6, 4.5, 6.9, 5.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3940587.png",
    "name": "Jesper Horsted",
    "depthchart": "Starter: TE-1",
    "team": "Chicago Bears",
    "projected": 5.5,
    "opponent": "Kansas City Chiefs",
    "home_away": "",
    "opp_rank_Neu": 11,
    "team_rank_Neg": 25,
    "avg_fp2": 3.55,
    "opp_rank_allowed_fp2_Neu": 23,
    "opp_avg_allowed_fp2": 10.24,
    "fanduelSalary": "$4500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#c36835",
    "tmColorDark": "#0B162A",
    "tmColorLite_rgba": "rgba(195, 104, 53, 0.2)",
    "tmColorDark_rgba": "rgba(11, 22, 42, 0.2)",
    "tmTextLite": "#c36835",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png",
    "headlineNews": "Targeted three times",
    "report": "Horsted caught one pass for 18 yards in the Bears' 21-13 loss to the Packers on Sunday.",
    "analysis": "Even though the Bears were trailing by double digits for most of the second half, Horsted was targeted just three times on a day that Mitchell Trubisky threw the ball 53 times. He's averaging fewer than three targets per game, and he'll be a low-floor fantasy option at home in Week 16 against the Chiefs.",
    "timestamp": "2019-12-15 02:49 PM",
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
    "week12": 0.9,
    "week13": 8.3,
    "week14": 5.6,
    "week15": -0.6,
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 0.9, 8.3, 5.6, -0.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', -0.1, 0.2, 2.7, 5.5, 5.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13232.png",
    "name": "Jimmy Graham",
    "depthchart": "Starter: TE-1",
    "team": "Green Bay Packers",
    "projected": 5.3,
    "opponent": "Minnesota Vikings",
    "home_away": "at ",
    "opp_rank_Neu": 20,
    "team_rank_Neu": 17,
    "avg_fp2": 5.19,
    "opp_rank_allowed_fp2_Neu": 9,
    "opp_avg_allowed_fp2": 8.4,
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
    "headlineNews": "No yardage in Week 15",
    "report": "Graham was targeted four times and had one reception for zero yards in Sunday's victory over the Bears.",
    "analysis": "Graham has battled all of wrist, groin and calf injuries the last several weeks, and that has resulted in him playing well below 50 percent of the offensive snaps since the Packers' Week 11 bye. As a result, he was targeted only 12 times and tallied just six receptions for 72 yards -- with most of that coming Week 14 -- over the last four games. He'll be tough to trust in important Week 16 fantasy matchups facing a Vikings defense that shut him out entirely Week 2 and has ceded just one touchdown to opposing tight ends all season.",
    "timestamp": "2019-12-16 09:15 AM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.5, 0.0, 0.0, 15.1, 5.6, 2.7, 14.5, 3.5, 3.7, 6.9, 'BYE', 1.2, 2.1, 6.4, 0.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.7, 7.9, 6.6, 5.8, 15.2, 10.7, 7.8, 9.4, 7.8, 7.0, 'BYE', 5.9, 6.3, 10.2, 10.7, 5.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14085.png",
    "name": "Virgil Green",
    "depthchart": "Backup: TE-2",
    "team": "Los Angeles Chargers",
    "projected": 4.8,
    "opponent": "Oakland Raiders",
    "home_away": "",
    "opp_rank_Pos": 27,
    "team_rank_Pos": 5,
    "avg_fp2": 1.34,
    "opp_rank_allowed_fp2_Pos": 28,
    "opp_avg_allowed_fp2": 10.84,
    "fanduelSalary": "$4000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0080C6",
    "tmColorDark": "#002A5E",
    "tmColorLite_rgba": "rgba(0, 128, 198, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 94, 0.2)",
    "tmTextLite": "#0080C6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lac.png",
    "headlineNews": "First catch since Week 11",
    "report": "Green caught his only target for 14 yards in the 45-10 win Sunday over the Jaguars.",
    "analysis": "A three-score lead by the start of the second half allowed for the Chargers to feature their running game prominently, creating a couple of extra snaps for the run-blocking Green. The veteran tight end simply hasn't been a priority through the air, as Green is currently on pace to barely pass his 2014 numbers in which he caught just six passes and tallied 74 receiving yards despite playing close to 400 snaps with the Broncos.",
    "timestamp": "2019-12-10 07:21 AM",
    "week01": 0.9,
    "week02": 1.4,
    "week03": 0.0,
    "week04": "DNP",
    "week05": 1.0,
    "week06": 2.0,
    "week07": 1.4,
    "week08": 1.5,
    "week09": 0.0,
    "week10": 0.0,
    "week11": 1.3,
    "week12": "BYE",
    "week13": 0.0,
    "week14": 7.9,
    "week15": 0.0,
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.9, 1.4, 0.0, 'DNP', 1.0, 2.0, 1.4, 1.5, 0.0, 0.0, 1.3, 'BYE', 0.0, 7.9, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.5, 0.1, 2.4, 'DNP', 2.4, 2.3, 0.7, 0.2, 0.3, -0.3, 1.2, 'BYE', -0.8, 0.5, -2.2, 4.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14145.png",
    "name": "Charles Clay",
    "depthchart": "Starter: TE-1",
    "team": "Arizona Cardinals",
    "projected": 4.8,
    "opponent": "Seattle Seahawks",
    "home_away": "at ",
    "opp_rank_Pos": 29,
    "team_rank_Neg": 24,
    "avg_fp2": 2.61,
    "opp_rank_allowed_fp2_Pos": 31,
    "opp_avg_allowed_fp2": 12.29,
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
    "headlineNews": "Snags one pass Week 15",
    "report": "Clay caught one of two targets for 18 yards during Sunday's 38-24 win versus the Browns.",
    "analysis": "Clay's sole connection with Kyler Murray got the Cardinals on the doorstep of the end zone, which Kenyan Drake used to record his second of four touchdowns on the day from one yard out. On the team's next possession, Murray looked Clay's way again but instead threw the ball into the waiting arms of Cleveland linebacker Mack Wilson. For the season, coach Kliff Kingsbury continues to toggle between Clay and Maxx Williams at tight end, with the former getting 397 offensive snaps to the latter's 407 (of 928). The results have been modest, at best, for Clay: 17 receptions on 23 targets for 221 yards and one TD.",
    "timestamp": "2019-12-16 05:17 PM",
    "week01": 1.0,
    "week02": 1.1,
    "week03": 1.4,
    "week04": 0.8,
    "week05": 3.2,
    "week06": 1.8,
    "week07": 1.7,
    "week08": 10.3,
    "week09": 1.1,
    "week10": 1.0,
    "week11": 0.0,
    "week12": "BYE",
    "week13": 3.9,
    "week14": 7.0,
    "week15": 2.3,
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.0, 1.1, 1.4, 0.8, 3.2, 1.8, 1.7, 10.3, 1.1, 1.0, 0.0, 'BYE', 3.9, 7.0, 2.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.9, 1.1, 9.1, 3.6, 4.1, 4.5, 1.7, 0.8, 3.3, 5.7, 2.1, 'BYE', 1.9, 4.5, 7.2, 4.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2566659.png",
    "name": "Seth DeValve",
    "depthchart": "Starter: TE-1",
    "team": "Jacksonville Jaguars",
    "projected": 4.8,
    "opponent": "Atlanta Falcons",
    "home_away": "at ",
    "opp_rank_Neu": 23,
    "team_rank_Neu": 14,
    "avg_fp2": 1.64,
    "opp_rank_allowed_fp2_Pos": 24,
    "opp_avg_allowed_fp2": 10.46,
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
    "headlineNews": "Catches two passes in return",
    "report": "DeValve caught both targets for 23 yards during Sunday's 20-16 win over the Raiders.",
    "analysis": "DeValve missed the previous four games with an oblique injury, but he returned Week 15 and led the Jaguars' tight ends with 29 offensive snaps. The 26-year-old should work as the team's No. 1 tight end for the closing stretch of the season, assuming he stays healthy.",
    "timestamp": "2019-12-16 08:59 PM",
    "week01": "DNP",
    "week02": "DNP",
    "week03": 0.0,
    "week04": 0.0,
    "week05": 0.0,
    "week06": 2.1,
    "week07": 0.0,
    "week08": 1.6,
    "week09": 6.1,
    "week10": "BYE",
    "week11": "DNP",
    "week12": "DNP",
    "week13": "DNP",
    "week14": "DNP",
    "week15": 3.3,
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 0.0, 0.0, 0.0, 2.1, 0.0, 1.6, 6.1, 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 3.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', -0.0, 0.6, 0.6, 0.7, 0.8, 1.4, 0.9, 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 1.1, 4.8]
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
    "opponent": "New England Patriots",
    "home_away": "at ",
    "opp_rank_Neg": 2,
    "team_rank_Neg": 28,
    "avg_fp2": 4.42,
    "opp_rank_allowed_fp2_Neu": 13,
    "opp_avg_allowed_fp2": 8.91,
    "fanduelSalary": "$4800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#005596",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 85, 150, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
    "headlineNews": "Quiet once again",
    "report": "Knox caught his only target for 11 yards during Sunday's win over the Steelers.",
    "analysis": "Veteran Tyler Kroft had the big tight end catch, a go-ahead touchdown that in essence vaulted the Bills into the playoffs, while Knox's role was modest all evening. Knox was on the field for 48 percent of the offensive snaps (his lowest since Week 8) to Kroft's 29 percent, but the Bills and their up-and-down offense continue to spread it around too much for the rookie to offer any kind of consistent production.",
    "timestamp": "2019-12-16 08:40 AM",
    "week01": 0.6,
    "week02": 2.3,
    "week03": 15.1,
    "week04": 7.3,
    "week05": 2.2,
    "week06": "BYE",
    "week07": 3.2,
    "week08": 0.0,
    "week09": 2.4,
    "week10": 7.5,
    "week11": 10.2,
    "week12": 2.1,
    "week13": 3.2,
    "week14": 4.2,
    "week15": 1.6,
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.6, 2.3, 15.1, 7.3, 2.2, 'BYE', 3.2, 0.0, 2.4, 7.5, 10.2, 2.1, 3.2, 4.2, 1.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.9, 4.9, 1.5, 5.0, 9.5, 'BYE', 3.3, 5.9, 0.8, 8.3, 12.0, 5.6, -0.2, 0.3, 4.9, 4.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116164.png",
    "name": "Mike Gesicki",
    "depthchart": "Starter: TE-1",
    "team": "Miami Dolphins",
    "projected": 3.9,
    "opponent": "Cincinnati Bengals",
    "home_away": "",
    "opp_rank_Neu": 15,
    "team_rank_Neu": 23,
    "avg_fp2": 5.42,
    "opp_rank_allowed_fp2_Neu": 8,
    "opp_avg_allowed_fp2": 8.26,
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
    "headlineNews": "Four catches in loss",
    "report": "Gesicki caught four of eight targets for 47 yards in Sunday's 36-20 loss to the Giants.",
    "analysis": "Gesicki has cooled down after a two-game touchdown streak, totaling five catches for 53 yards in two games since. The second-year tight end has tantalizing physical gifts, but he's still trying to find consistency. Playing for a 3-11 Dolphins team doesn't help in that regard, though a prime matchup awaits Week 16 with the 1-13 Bengals coming to town.",
    "timestamp": "2019-12-15 03:01 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.1, 1.6, 2.4, 0.0, 'BYE', 6.6, 6.1, 2.0, 12.5, 2.3, 3.8, 10.3, 16.4, 1.1, 6.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.4, 3.0, 1.7, 7.2, 'BYE', 4.1, 0.4, 8.1, 1.1, 4.3, 3.6, 5.9, 3.5, 7.1, 2.8, 3.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15853.png",
    "name": "Vance McDonald",
    "depthchart": "Starter: TE-1",
    "team": "Pittsburgh Steelers",
    "projected": 3.8,
    "opponent": "New York Jets",
    "home_away": "at ",
    "opp_rank_Neu": 19,
    "team_rank_Neg": 31,
    "avg_fp2": 4.93,
    "opp_rank_allowed_fp2_Neg": 6,
    "opp_avg_allowed_fp2": 7.77,
    "fanduelSalary": "$5000",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Concussion",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/pit.png",
    "headlineNews": "Ruled out for Week 15",
    "report": "McDonald (concussion) didn't practice Friday and has been ruled out for Sunday's game against the Bills, Teresa Varley of the Steelers' official site reports.",
    "analysis": "The Steelers will be down two of their key pass catchers in Week 15 with McDonald slated to join wideout JuJu Smith-Schuster (knee) on the inactive list. Nick Vannett, who played 38 offensive snaps in relief of a concussed McDonald in the Week 14 win over Arizona, is the leading candidate to start at tight end against Buffalo.",
    "timestamp": "2019-12-13 11:56 AM",
    "week01": 5.0,
    "week02": 19.3,
    "week03": 1.5,
    "week04": "DNP",
    "week05": 4.9,
    "week06": 1.0,
    "week07": "BYE",
    "week08": 3.4,
    "week09": 11.5,
    "week10": 2.8,
    "week11": 4.8,
    "week12": 0.6,
    "week13": 3.6,
    "week14": 0.8,
    "week15": "DNP",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.0, 19.3, 1.5, 'DNP', 4.9, 1.0, 'BYE', 3.4, 11.5, 2.8, 4.8, 0.6, 3.6, 0.8, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.5, 4.3, 6.4, 'DNP', 4.9, 3.0, 'BYE', 5.1, 3.5, 7.1, 3.4, 9.2, 8.2, 11.4, 'DNP', 3.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2979590.png",
    "name": "Jesse James",
    "depthchart": "Backup: TE-2",
    "team": "Detroit Lions",
    "projected": 3.8,
    "opponent": "Denver Broncos",
    "home_away": "at ",
    "opp_rank_Neu": 10,
    "team_rank_Neu": 8,
    "avg_fp2": 1.36,
    "opp_rank_allowed_fp2_Neu": 15,
    "opp_avg_allowed_fp2": 9.21,
    "fanduelSalary": "$4600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0076B6",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(0, 118, 182, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#0076B6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/det.png",
    "headlineNews": "Five targets against Tampa Bay",
    "report": "James caught three of five targets for 31 yards during Sunday's 38-17 loss to Tampa Bay.",
    "analysis": "Both James and Logan Thomas opened the game in the starting lineup and both players commanded roughly two thirds of the available offensive snaps. While James was somehow the only one who made a dent in the stat sheet, Thomas was targeted four times and still has the higher upside of the two. However, it will continue to be difficult to have optimism for either as long as Matthew Stafford (back) remains out of commission.",
    "timestamp": "2019-12-16 11:23 AM",
    "week01": 2.0,
    "week02": 3.3,
    "week03": 1.8,
    "week04": 0.0,
    "week05": "BYE",
    "week06": 1.3,
    "week07": 1.2,
    "week08": 0.0,
    "week09": 0.8,
    "week10": 0.0,
    "week11": 0.0,
    "week12": 1.2,
    "week13": 0.0,
    "week14": 2.8,
    "week15": 4.6,
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.0, 3.3, 1.8, 0.0, 'BYE', 1.3, 1.2, 0.0, 0.8, 0.0, 0.0, 1.2, 0.0, 2.8, 4.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.1, 1.0, 1.6, 0.6, 'BYE', 2.4, 1.0, 1.2, 1.1, 0.3, 0.7, 1.5, 1.0, 3.0, 0.1, 3.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15773.png",
    "name": "Darren Fells",
    "depthchart": "Starter: TE-1",
    "team": "Houston Texans",
    "projected": 3.5,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "at ",
    "opp_rank_Pos": 30,
    "team_rank_Neu": 11,
    "avg_fp2": 6.35,
    "opp_rank_allowed_fp2_Pos": 30,
    "opp_avg_allowed_fp2": 11.34,
    "fanduelSalary": "$4500",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Hand",
    "tmColorLite": "#A71930",
    "tmColorDark": "#03202F",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(3, 32, 47, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/hou.png",
    "headlineNews": "Limited to begin Week 16",
    "report": "Fells was a limited participant in Tuesday's practice due to a hand injury.",
    "analysis": "Fells presumably sustained the injury in this past weekend's 24-21 win over the Titans, but it didn't stop him from playing 83 percent of the offensive snaps and contributing one catch for a two-yard gain on two targets. Expect Fells to ultimately gain clearance for the Texans' matchup Saturday with the Buccaneers.",
    "timestamp": "2019-12-17 01:51 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 1.4, 13.4, 1.7, 15.0, 9.9, 3.7, 20.8, 6.6, 'BYE', 2.3, 2.9, 9.3, 1.2, 0.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [-0.7, 1.7, 1.1, 3.0, 2.7, 4.5, 2.3, 5.5, 5.6, 'BYE', 7.2, 4.2, 2.8, 4.0, 5.7, 3.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4036131.png",
    "name": "Noah Fant",
    "depthchart": "Starter: TE-1",
    "team": "Denver Broncos",
    "projected": 3.4,
    "opponent": "Detroit Lions",
    "home_away": "",
    "opp_rank_Pos": 31,
    "team_rank_Neg": 30,
    "avg_fp2": 6.29,
    "opp_rank_allowed_fp2_Neu": 14,
    "opp_avg_allowed_fp2": 9.17,
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
    "headlineNews": "Makes big fourth-down conversion",
    "report": "Fant caught two of three targets for 56 yards during Sunday's 23-3 loss in Kansas City. He injured his right shoulder during the contest, but X-rays were negative and he \"should be fine,\" Nicki Jhabvala of The Athletic reports.",
    "analysis": "The Broncos were completely off-kilter on offense during the first half when, facing fourth and short, Fant blocked the edge and then released upfield for a 43-yard reception to set up Denver's lone score of the game. Fant hasn't always been consistent, but his big-play ability has been undeniable this season. His 15.7 yards per catch ranks best among tight ends in the league. He's now nursing foot, hip and shoulder injuries, but he remains an intriguing play down the stretch as the season's final two opponents, Detroit and Oakland, rank 32nd and 31st in the league, respectively, in passing plays of 20 or more yards surrendered this season.",
    "timestamp": "2019-12-15 04:40 PM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.4, 5.3, 3.2, 10.1, 1.1, 2.6, 1.2, 5.1, 19.0, 'BYE', 7.3, 2.9, 1.0, 19.3, 6.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.5, 5.6, 0.5, 4.1, 2.9, 4.6, 8.9, 4.6, 3.5, 'BYE', 0.5, 3.0, 8.2, 2.6, 6.8, 3.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2991767.png",
    "name": "Blake Jarwin",
    "depthchart": "Backup: TE-2",
    "team": "Dallas Cowboys",
    "projected": 3.4,
    "opponent": "Philadelphia Eagles",
    "home_away": "at ",
    "opp_rank_Neu": 18,
    "team_rank_Pos": 2,
    "avg_fp2": 4.86,
    "opp_rank_allowed_fp2_Neg": 2,
    "opp_avg_allowed_fp2": 7.19,
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
    "headlineNews": "Two catches Sunday",
    "report": "Jarwin caught two of three targets for 40 yards in Sunday's win over the Rams.",
    "analysis": "As has become common this season, Jason Witten saw more targets and catches than Jarwin, who gained more yards despite a lower volume, but the former was able to find the end zone Sunday. Jarwin's athleticism and big-play ability could make him a breakout star in 2020 if Witten retires again, but for now he'll have to be content with a secondary role in the Cowboys offense.",
    "timestamp": "2019-12-16 07:28 AM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.4, 2.7, 0.8, 6.4, 0.0, 1.6, 6.6, 'BYE', 10.7, 5.0, 4.8, 3.2, 1.9, 8.0, 5.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.6, 5.5, 5.1, 4.3, 3.3, 4.1, 2.3, 'BYE', 2.9, -0.1, 4.2, 3.4, 2.9, 4.1, 4.1, 3.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/5557.png",
    "name": "Ben Watson",
    "depthchart": "Backup: TE-2",
    "team": "New England Patriots",
    "projected": 3.4,
    "opponent": "Buffalo Bills",
    "home_away": "",
    "opp_rank_Neg": 3,
    "team_rank_Neu": 9,
    "avg_fp2": 2.66,
    "opp_rank_allowed_fp2_Neg": 5,
    "opp_avg_allowed_fp2": 7.46,
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
    "headlineNews": "Logs 34 snaps in Week 15",
    "report": "Watson, who was on the field for 34 of a possible 65 snaps on offense in Sunday's 34-13 win over the Bengals, was not targeted in the contest.",
    "analysis": "Meanwhile, Matt LaCosse logged 49 snaps, while catching all three of his targets for 22 yards. At some point, the Patriots could get their tight ends more involved in the passing attack, but that possibility is not something worth rolling the dice on at this stage of the fantasy season.",
    "timestamp": "2019-12-16 10:06 AM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 4.8, 'BYE', 6.7, 0.0, 2.8, 1.2, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 4.0, 'BYE', 4.6, 8.9, 7.4, 4.2, 2.3, 3.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3123076.png",
    "name": "David Njoku",
    "depthchart": "Starter: TE-1",
    "team": "Cleveland Browns",
    "projected": 3.3,
    "opponent": "Baltimore Ravens",
    "home_away": "",
    "opp_rank_Neu": 7,
    "team_rank_Neu": 19,
    "avg_fp2": 4.2,
    "opp_rank_allowed_fp2_Neg": 1,
    "opp_avg_allowed_fp2": 6.26,
    "fanduelSalary": "$5000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FF3C00",
    "tmColorDark": "#311D00",
    "tmColorLite_rgba": "rgba(255, 60, 0, 0.2)",
    "tmColorDark_rgba": "rgba(49, 29, 0, 0.2)",
    "tmTextLite": "#FF3C00",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
    "headlineNews": "Inactive Sunday",
    "report": "Njoku (coach's decision) is inactive for Sunday's game against the Cardinals.",
    "analysis": "Per Nate Ulrich of the Akron Beacon Journal, Njoku's deactivation Sunday is a coach's decision. In his absence, Demetrius Harris is slated to start at tight end for the Browns in Week 15.",
    "timestamp": "2019-12-15 11:43 AM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.7, 0.0, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 0.9, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.1, 3.9, 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 6.1, 'DNP', 3.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/17453.png",
    "name": "Cameron Brate",
    "depthchart": "Backup: TE-2",
    "team": "Tampa Bay Buccaneers",
    "projected": 3.2,
    "opponent": "Houston Texans",
    "home_away": "",
    "opp_rank_Pos": 28,
    "team_rank_Pos": 1,
    "avg_fp2": 4.55,
    "opp_rank_allowed_fp2_Pos": 27,
    "opp_avg_allowed_fp2": 10.74,
    "fanduelSalary": "$5000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#D50A0A",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(213, 10, 10, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#D50A0A",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Trio of grabs in win",
    "report": "Brate secured three of seven targets for 33 yards in the Buccaneers' 38-17 win over the Lions on Sunday.",
    "analysis": "The veteran tight end tied for second with Breshad Perriman for targets on the afternoon, and he was just one behind the pace set by position mate O.J. Howard in that category. Brate's target share was his second highest of the campaign as well, and he could be in for a solid workload again Week 16 against the Texans with both Mike Evans and Chris Godwin set to miss the contest due to their respective hamstring injuries.",
    "timestamp": "2019-12-16 11:50 AM",
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.8, 2.0, 1.7, 11.1, 1.6, 11.7, 'BYE', 4.7, 0.0, 0.0, 12.3, 0.0, 1.0, 11.0, 4.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.1, 1.2, 4.8, 1.4, 3.4, 6.3, 'BYE', 6.7, 9.0, 4.7, 3.0, 2.5, 5.5, 1.6, 1.6, 3.2]
                    }
                    
                    ]
               }
            }];



$scope.positionDST = [{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/PIT.png",
    "name": "Pittsburgh Steelers",
    "depthchart": "",
    "team": "Pittsburgh Steelers",
    "projected": 9.8,
    "opponent": "New York Jets",
    "opp_rank_pts": 28,
    "opp_avg_pts": 16.93,
    "home_away": "at ",
    "team_rank_allowed_pts": 5,
    "team_avg_allowed_pts": 18.5,
    "team_ranked_takeaways": 2,
    "team_avg_takeaways": 2.36,
    "opp_ranked_giveaways": 8,
    "opp_avg_giveaways": 1.14,
    "fanduelSalary": "$4900",
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
    "avg_fp2": 10.57,
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 7.0, 11.0, 19.0, 11.0, 8.0, 'BYE', 13.0, 13.0, 16.0, 1.0, 12.0, 13.0, 18.0, 6.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.4, 8.3, 6.3, 8.1, 5.8, 7.0, 'BYE', 9.6, 7.0, 6.7, 8.5, 8.3, 8.5, 8.1, 8.2, 9.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/SF.png",
    "name": "San Francisco 49ers",
    "depthchart": "",
    "team": "San Francisco 49ers",
    "projected": 9.3,
    "opponent": "Los Angeles Rams",
    "opp_rank_pts": 13,
    "opp_avg_pts": 23.71,
    "home_away": "",
    "team_rank_allowed_pts": 5,
    "team_avg_allowed_pts": 18.5,
    "team_ranked_takeaways": 3,
    "team_avg_takeaways": 1.86,
    "opp_ranked_giveaways": 8,
    "opp_avg_giveaways": 1.14,
    "fanduelSalary": "$4500",
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
    "avg_fp2": 9.29,
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [15.0, 7.0, 7.0, 'BYE', 19.0, 10.0, 15.0, 17.0, 3.0, 13.0, 8.0, 11.0, 4.0, -2.0, 3.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.8, 6.4, 7.2, 'BYE', 6.8, 7.5, 8.1, 7.9, 8.7, 7.9, 8.1, 5.6, 6.5, 6.0, 7.5, 9.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/NE.png",
    "name": "New England Patriots",
    "depthchart": "",
    "team": "New England Patriots",
    "projected": 9.0,
    "opponent": "Buffalo Bills",
    "opp_rank_pts": 21,
    "opp_avg_pts": 20.93,
    "home_away": "",
    "team_rank_allowed_pts": 1,
    "team_avg_allowed_pts": 12.5,
    "team_ranked_takeaways": 17,
    "team_avg_takeaways": 1.36,
    "opp_ranked_giveaways": 12,
    "opp_avg_giveaways": 1.36,
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
    "avg_fp2": 12.07,
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.0, 25.0, 14.0, 17.0, 14.0, 10.0, 25.0, 15.0, 1.0, 'BYE', 11.0, 6.0, 2.0, 5.0, 14.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.6, 9.0, 10.1, 6.7, 8.8, 7.1, 9.3, 9.5, 6.3, 'BYE', 8.3, 9.4, 7.0, 8.4, 8.3, 9.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/NYG.png",
    "name": "New York Giants",
    "depthchart": "",
    "team": "New York Giants",
    "projected": 8.6,
    "opponent": "Washington Redskins",
    "opp_rank_pts": 31,
    "opp_avg_pts": 15.36,
    "home_away": "at ",
    "team_rank_allowed_pts": 27,
    "team_avg_allowed_pts": 27.29,
    "team_ranked_takeaways": 8,
    "team_avg_takeaways": 1.57,
    "opp_ranked_giveaways": 15,
    "opp_avg_giveaways": 1.43,
    "fanduelSalary": "$3900",
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
    "avg_fp2": 4.21,
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [-4.0, 2.0, 7.0, 18.0, 5.0, 3.0, 2.0, 7.0, 0.0, 1.0, 'BYE', 7.0, -1.0, 5.0, 7.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.9, 8.0, 6.4, 7.0, 6.9, 4.1, 6.8, 6.4, 6.7, 7.1, 'BYE', 7.2, 6.6, 7.6, 7.9, 8.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/BAL.png",
    "name": "Baltimore Ravens",
    "depthchart": "",
    "team": "Baltimore Ravens",
    "projected": 8.5,
    "opponent": "Cleveland Browns",
    "opp_rank_pts": 20,
    "opp_avg_pts": 21.21,
    "home_away": "at ",
    "team_rank_allowed_pts": 3,
    "team_avg_allowed_pts": 17.93,
    "team_ranked_takeaways": 23,
    "team_avg_takeaways": 1.21,
    "opp_ranked_giveaways": 15,
    "opp_avg_giveaways": 1.43,
    "fanduelSalary": "$4500",
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
    "avg_fp2": 7.29,
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [13.0, 4.0, 0.0, -1.0, 5.0, 5.0, 6.0, 'BYE', 7.0, 12.0, 15.0, 13.0, 7.0, 9.0, 7.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.4, 10.6, 6.5, 8.9, 7.8, 8.6, 6.3, 'BYE', 5.9, 7.1, 7.1, 8.1, 8.7, 7.8, 9.6, 8.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/NYJ.png",
    "name": "New York Jets",
    "depthchart": "",
    "team": "New York Jets",
    "projected": 7.9,
    "opponent": "Pittsburgh Steelers",
    "opp_rank_pts": 25,
    "opp_avg_pts": 18.79,
    "home_away": "",
    "team_rank_allowed_pts": 21,
    "team_avg_allowed_pts": 24.36,
    "team_ranked_takeaways": 6,
    "team_avg_takeaways": 1.64,
    "opp_ranked_giveaways": 30,
    "opp_avg_giveaways": 2.0,
    "fanduelSalary": "$3600",
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
    "avg_fp2": 4.64,
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.0, 5.0, 2.0, 'BYE', 3.0, 1.0, 1.0, 3.0, 6.0, 10.0, 9.0, 10.0, 2.0, 4.0, -3.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.8, 7.8, 4.2, 'BYE', 5.5, 6.4, 4.8, 7.9, 6.2, 6.9, 7.7, 6.9, 7.6, 9.5, 4.7, 7.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/LAC.png",
    "name": "Los Angeles Chargers",
    "depthchart": "",
    "team": "Los Angeles Chargers",
    "projected": 7.8,
    "opponent": "Oakland Raiders",
    "opp_rank_pts": 24,
    "opp_avg_pts": 19.57,
    "home_away": "",
    "team_rank_allowed_pts": 13,
    "team_avg_allowed_pts": 20.71,
    "team_ranked_takeaways": 11,
    "team_avg_takeaways": 1.5,
    "opp_ranked_giveaways": 10,
    "opp_avg_giveaways": 1.21,
    "fanduelSalary": "$4000",
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
    "avg_fp2": 5.43,
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.0, 8.0, 4.0, 11.0, 14.0, 2.0, 4.0, 9.0, 7.0, 4.0, 5.0, 'BYE', 2.0, 6.0, -2.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.2, 6.6, 6.8, 6.9, 6.8, 7.2, 6.8, 7.2, 5.9, 5.1, 7.2, 'BYE', 7.4, 8.2, 6.7, 7.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/KC.png",
    "name": "Kansas City Chiefs",
    "depthchart": "",
    "team": "Kansas City Chiefs",
    "projected": 7.7,
    "opponent": "Chicago Bears",
    "opp_rank_pts": 26,
    "opp_avg_pts": 17.86,
    "home_away": "at ",
    "team_rank_allowed_pts": 8,
    "team_avg_allowed_pts": 19.79,
    "team_ranked_takeaways": 31,
    "team_avg_takeaways": 0.79,
    "opp_ranked_giveaways": 4,
    "opp_avg_giveaways": 1.0,
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
    "avg_fp2": 7.43,
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.0, 11.0, 2.0, 6.0, 3.0, 5.0, 18.0, 5.0, 1.0, 2.0, 11.0, 'BYE', 14.0, 10.0, 11.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.8, 6.1, 5.3, 5.9, 5.9, 6.7, 5.4, 5.6, 7.0, 6.2, 6.8, 'BYE', 7.5, 5.1, 7.1, 7.7]
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
    "opponent": "Green Bay Packers",
    "opp_rank_pts": 15,
    "opp_avg_pts": 23.07,
    "home_away": "",
    "team_rank_allowed_pts": 7,
    "team_avg_allowed_pts": 18.64,
    "team_ranked_takeaways": 25,
    "team_avg_takeaways": 1.14,
    "opp_ranked_giveaways": 24,
    "opp_avg_giveaways": 1.57,
    "fanduelSalary": "$4100",
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
    "avg_fp2": 8.43,
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.0, 6.0, 7.0, 5.0, 12.0, 9.0, 3.0, 12.0, 7.0, 3.0, 4.0, 'BYE', 2.0, 13.0, 21.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.9, 7.2, 8.3, 7.3, 6.8, 8.2, 6.4, 7.3, 6.1, 5.5, 8.0, 'BYE', 5.3, 7.7, 5.5, 7.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/SEA.png",
    "name": "Seattle Seahawks",
    "depthchart": "",
    "team": "Seattle Seahawks",
    "projected": 7.6,
    "opponent": "Arizona Cardinals",
    "opp_rank_pts": 17,
    "opp_avg_pts": 22.14,
    "home_away": "",
    "team_rank_allowed_pts": 20,
    "team_avg_allowed_pts": 23.71,
    "team_ranked_takeaways": 8,
    "team_avg_takeaways": 1.57,
    "opp_ranked_giveaways": 1,
    "opp_avg_giveaways": 0.71,
    "fanduelSalary": "$4400",
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
    "avg_fp2": 6.93,
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.0, 3.0, 1.0, 10.0, 3.0, 7.0, 1.0, 9.0, 3.0, 11.0, 'BYE', 19.0, 6.0, 5.0, 7.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.4, 7.6, 6.6, 6.2, 8.4, 7.4, 5.9, 5.9, 7.1, 7.1, 'BYE', 7.7, 6.9, 8.2, 7.9, 7.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/PHI.png",
    "name": "Philadelphia Eagles",
    "depthchart": "",
    "team": "Philadelphia Eagles",
    "projected": 7.5,
    "opponent": "Dallas Cowboys",
    "opp_rank_pts": 5,
    "opp_avg_pts": 27.0,
    "home_away": "",
    "team_rank_allowed_pts": 17,
    "team_avg_allowed_pts": 23.0,
    "team_ranked_takeaways": 27,
    "team_avg_takeaways": 1.07,
    "opp_ranked_giveaways": 2,
    "opp_avg_giveaways": 0.79,
    "fanduelSalary": "$4100",
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
    "avg_fp2": 5.5,
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.0, 7.0, 4.0, 5.0, 23.0, 1.0, 1.0, 12.0, 4.0, 'BYE', 2.0, 11.0, 1.0, 3.0, 2.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.8, 6.4, 7.2, 6.0, 8.6, 7.5, 5.5, 6.5, 8.9, 'BYE', 5.4, 7.0, 8.3, 9.7, 9.3, 7.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/IND.png",
    "name": "Indianapolis Colts",
    "depthchart": "",
    "team": "Indianapolis Colts",
    "projected": 7.4,
    "opponent": "Carolina Panthers",
    "opp_rank_pts": 16,
    "opp_avg_pts": 23.0,
    "home_away": "",
    "team_rank_allowed_pts": 19,
    "team_avg_allowed_pts": 23.64,
    "team_ranked_takeaways": 20,
    "team_avg_takeaways": 1.29,
    "opp_ranked_giveaways": 28,
    "opp_avg_giveaways": 1.93,
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
    "avg_fp2": 5.79,
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.0, 5.0, 2.0, 3.0, 10.0, 'BYE', 9.0, 6.0, 8.0, 8.0, 8.0, 4.0, 9.0, 5.0, -1.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.1, 5.9, 8.1, 7.3, 5.3, 'BYE', 6.5, 6.9, 6.2, 7.3, 7.6, 6.5, 7.9, 6.8, 5.9, 7.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/WAS.png",
    "name": "Washington Redskins",
    "depthchart": "",
    "team": "Washington Redskins",
    "projected": 7.4,
    "opponent": "New York Giants",
    "opp_rank_pts": 23,
    "opp_avg_pts": 20.21,
    "home_away": "",
    "team_rank_allowed_pts": 22,
    "team_avg_allowed_pts": 24.79,
    "team_ranked_takeaways": 13,
    "team_avg_takeaways": 1.43,
    "opp_ranked_giveaways": 26,
    "opp_avg_giveaways": 1.79,
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
    "avg_fp2": 6.0,
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 2.0, 5.0, 9.0, 5.0, 10.0, 8.0, 6.0, 2.0, 'BYE', 5.0, 14.0, 11.0, 7.0, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.1, 5.7, 5.9, 4.9, 5.3, 6.3, 6.8, 4.7, 6.3, 'BYE', 6.8, 6.3, 6.0, 5.3, 7.0, 7.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/CHI.png",
    "name": "Chicago Bears",
    "depthchart": "",
    "team": "Chicago Bears",
    "projected": 7.3,
    "opponent": "Kansas City Chiefs",
    "opp_rank_pts": 4,
    "opp_avg_pts": 28.14,
    "home_away": "",
    "team_rank_allowed_pts": 3,
    "team_avg_allowed_pts": 17.93,
    "team_ranked_takeaways": 13,
    "team_avg_takeaways": 1.43,
    "opp_ranked_giveaways": 25,
    "opp_avg_giveaways": 1.71,
    "fanduelSalary": "$3600",
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
    "avg_fp2": 6.5,
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.0, 5.0, 17.0, 17.0, 4.0, 'BYE', 6.0, 4.0, 4.0, 8.0, 5.0, 4.0, 5.0, 2.0, 1.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.8, 8.0, 7.0, 9.0, 8.9, 'BYE', 7.3, 7.7, 7.2, 8.9, 9.5, 9.5, 6.8, 7.7, 6.2, 7.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/DAL.png",
    "name": "Dallas Cowboys",
    "depthchart": "",
    "team": "Dallas Cowboys",
    "projected": 7.1,
    "opponent": "Philadelphia Eagles",
    "opp_rank_pts": 12,
    "opp_avg_pts": 23.86,
    "home_away": "at ",
    "team_rank_allowed_pts": 12,
    "team_avg_allowed_pts": 20.57,
    "team_ranked_takeaways": 13,
    "team_avg_takeaways": 1.43,
    "opp_ranked_giveaways": 26,
    "opp_avg_giveaways": 1.79,
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
    "avg_fp2": 6.07,
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.0, 1.0, 11.0, 11.0, 1.0, 4.0, 15.0, 'BYE', 12.0, 0.0, 3.0, 6.0, 4.0, 5.0, 6.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.9, 5.8, 8.4, 4.9, 6.9, 7.1, 5.5, 'BYE', 6.4, 6.3, 6.7, 5.4, 5.8, 7.3, 6.0, 7.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/CIN.png",
    "name": "Cincinnati Bengals",
    "depthchart": "",
    "team": "Cincinnati Bengals",
    "projected": 7.0,
    "opponent": "Miami Dolphins",
    "opp_rank_pts": 28,
    "opp_avg_pts": 16.93,
    "home_away": "at ",
    "team_rank_allowed_pts": 24,
    "team_avg_allowed_pts": 25.64,
    "team_ranked_takeaways": 13,
    "team_avg_takeaways": 1.43,
    "opp_ranked_giveaways": 15,
    "opp_avg_giveaways": 1.43,
    "fanduelSalary": "$3800",
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
    "avg_fp2": 4.07,
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.0, -2.0, 5.0, 2.0, 1.0, 9.0, 2.0, 0.0, 'BYE', -1.0, 8.0, 6.0, 13.0, 5.0, 3.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.3, 8.6, 5.0, 5.9, 7.5, 5.1, 6.1, 7.3, 'BYE', 5.4, 5.3, 5.9, 7.5, 6.7, 5.1, 7.0]
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
    "opp_rank_pts": 32,
    "opp_avg_pts": 14.29,
    "home_away": "",
    "team_rank_allowed_pts": 32,
    "team_avg_allowed_pts": 30.79,
    "team_ranked_takeaways": 20,
    "team_avg_takeaways": 1.29,
    "opp_ranked_giveaways": 15,
    "opp_avg_giveaways": 1.43,
    "fanduelSalary": "$4000",
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
    "avg_fp2": 2.86,
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [-3.0, 3.0, 2.0, 0.0, 'BYE', 1.0, 1.0, 4.0, 8.0, 11.0, 2.0, -1.0, 3.0, 3.0, 6.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.5, 4.8, 5.2, 5.6, 'BYE', 6.5, 6.1, 6.1, 7.6, 5.5, 6.6, 7.7, 6.7, 7.4, 7.5, 7.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/ATL.png",
    "name": "Atlanta Falcons",
    "depthchart": "",
    "team": "Atlanta Falcons",
    "projected": 6.9,
    "opponent": "Jacksonville Jaguars",
    "opp_rank_pts": 26,
    "opp_avg_pts": 17.86,
    "home_away": "",
    "team_rank_allowed_pts": 25,
    "team_avg_allowed_pts": 26.14,
    "team_ranked_takeaways": 17,
    "team_avg_takeaways": 1.36,
    "opp_ranked_giveaways": 12,
    "opp_avg_giveaways": 1.36,
    "fanduelSalary": "$4400",
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
    "avg_fp2": 4.5,
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 10.0, 1.0, 0.0, -2.0, -1.0, -4.0, 2.0, 'BYE', 10.0, 26.0, 2.0, 0.0, 14.0, 5.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.7, 5.8, 5.6, 6.5, 7.6, 5.3, 6.5, 4.9, 'BYE', 5.6, 6.0, 5.3, 5.3, 6.7, 5.8, 6.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/LA.png",
    "name": "Los Angeles Rams",
    "depthchart": "",
    "team": "Los Angeles Rams",
    "projected": 6.9,
    "opponent": "San Francisco 49ers",
    "opp_rank_pts": 2,
    "opp_avg_pts": 30.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 15,
    "team_avg_allowed_pts": 21.79,
    "team_ranked_takeaways": 5,
    "team_avg_takeaways": 1.71,
    "opp_ranked_giveaways": 21,
    "opp_avg_giveaways": 1.5,
    "fanduelSalary": "$3500",
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
    "avg_fp2": 7.21,
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.0, 8.0, 9.0, 0.0, 2.0, 9.0, 15.0, 9.0, 'BYE', 10.0, 9.0, -1.0, 12.0, 14.0, -4.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.1, 5.5, 8.1, 7.8, 5.2, 6.9, 5.4, 9.3, 'BYE', 5.8, 9.1, 6.7, 7.6, 7.8, 6.6, 6.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/CAR.png",
    "name": "Carolina Panthers",
    "depthchart": "",
    "team": "Carolina Panthers",
    "projected": 6.5,
    "opponent": "Indianapolis Colts",
    "opp_rank_pts": 18,
    "opp_avg_pts": 21.5,
    "home_away": "at ",
    "team_rank_allowed_pts": 28,
    "team_avg_allowed_pts": 27.57,
    "team_ranked_takeaways": 6,
    "team_avg_takeaways": 1.64,
    "opp_ranked_giveaways": 15,
    "opp_avg_giveaways": 1.43,
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
    "avg_fp2": 6.43,
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.0, 5.0, 13.0, 14.0, 8.0, 19.0, 'BYE', 3.0, 11.0, 2.0, 2.0, 3.0, 6.0, -3.0, 5.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.8, 8.1, 6.6, 7.2, 7.5, 5.5, 'BYE', 7.9, 7.0, 5.5, 7.5, 5.1, 8.4, 6.3, 6.6, 6.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/TB.png",
    "name": "Tampa Bay Buccaneers",
    "depthchart": "",
    "team": "Tampa Bay Buccaneers",
    "projected": 6.5,
    "opponent": "Houston Texans",
    "opp_rank_pts": 10,
    "opp_avg_pts": 24.57,
    "home_away": "",
    "team_rank_allowed_pts": 31,
    "team_avg_allowed_pts": 28.29,
    "team_ranked_takeaways": 1,
    "team_avg_takeaways": 2.71,
    "opp_ranked_giveaways": 6,
    "opp_avg_giveaways": 1.07,
    "fanduelSalary": "$3800",
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
    "avg_fp2": 5.5,
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.0, 9.0, 8.0, 9.0, 1.0, 0.0, 'BYE', 5.0, 1.0, 6.0, 0.0, 10.0, 17.0, -4.0, 9.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.3, 8.2, 7.1, 7.5, 6.3, 6.3, 'BYE', 6.1, 5.8, 7.2, 6.0, 5.9, 7.6, 8.1, 6.5, 6.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/BUF.png",
    "name": "Buffalo Bills",
    "depthchart": "",
    "team": "Buffalo Bills",
    "projected": 6.4,
    "opponent": "New England Patriots",
    "opp_rank_pts": 8,
    "opp_avg_pts": 26.43,
    "home_away": "at ",
    "team_rank_allowed_pts": 2,
    "team_avg_allowed_pts": 15.07,
    "team_ranked_takeaways": 20,
    "team_avg_takeaways": 1.29,
    "opp_ranked_giveaways": 31,
    "opp_avg_giveaways": 2.07,
    "fanduelSalary": "$4300",
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
    "avg_fp2": 8.71,
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.0, 6.0, 13.0, 3.0, 11.0, 'BYE', 7.0, 4.0, 8.0, 5.0, 10.0, 13.0, 11.0, 3.0, 18.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.4, 7.8, 6.6, 5.1, 7.8, 'BYE', 7.6, 8.5, 8.0, 7.8, 9.1, 7.6, 4.9, 7.5, 7.8, 6.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/DEN.png",
    "name": "Denver Broncos",
    "depthchart": "",
    "team": "Denver Broncos",
    "projected": 6.3,
    "opponent": "Detroit Lions",
    "opp_rank_pts": 19,
    "opp_avg_pts": 21.29,
    "home_away": "",
    "team_rank_allowed_pts": 9,
    "team_avg_allowed_pts": 19.86,
    "team_ranked_takeaways": 25,
    "team_avg_takeaways": 1.14,
    "opp_ranked_giveaways": 4,
    "opp_avg_giveaways": 1.0,
    "fanduelSalary": "$5000",
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
    "avg_fp2": 6.0,
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 1.0, 0.0, 5.0, 10.0, 23.0, 0.0, 7.0, 3.0, 'BYE', 9.0, 4.0, 8.0, 9.0, 5.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.8, 8.7, 5.7, 6.6, 5.6, 7.1, 4.9, 5.7, 7.4, 'BYE', 6.3, 6.4, 7.2, 7.2, 5.5, 6.3]
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
    "opponent": "Tennessee Titans",
    "opp_rank_pts": 11,
    "opp_avg_pts": 24.21,
    "home_away": "at ",
    "team_rank_allowed_pts": 14,
    "team_avg_allowed_pts": 21.21,
    "team_ranked_takeaways": 28,
    "team_avg_takeaways": 1.0,
    "opp_ranked_giveaways": 21,
    "opp_avg_giveaways": 1.5,
    "fanduelSalary": "$3800",
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
    "avg_fp2": 7.36,
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.0, 5.0, 8.0, 11.0, 6.0, 11.0, 8.0, 8.0, 'BYE', 3.0, 11.0, 3.0, 16.0, 1.0, 5.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.9, 7.0, 5.7, 5.6, 6.2, 7.1, 6.7, 6.7, 'BYE', 7.2, 6.4, 7.8, 6.0, 5.7, 6.2, 6.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/HOU.png",
    "name": "Houston Texans",
    "depthchart": "",
    "team": "Houston Texans",
    "projected": 6.2,
    "opponent": "Tampa Bay Buccaneers",
    "opp_rank_pts": 3,
    "opp_avg_pts": 29.79,
    "home_away": "at ",
    "team_rank_allowed_pts": 16,
    "team_avg_allowed_pts": 22.93,
    "team_ranked_takeaways": 11,
    "team_avg_takeaways": 1.5,
    "opp_ranked_giveaways": 15,
    "opp_avg_giveaways": 1.43,
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
    "avg_fp2": 4.86,
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.0, 10.0, 5.0, 10.0, 3.0, 5.0, 2.0, 0.0, 18.0, 'BYE', -3.0, 2.0, 5.0, 1.0, 8.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.6, 7.5, 4.5, 6.9, 7.4, 5.0, 4.1, 7.5, 6.0, 'BYE', 4.6, 6.6, 5.8, 8.2, 4.6, 6.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/TEN.png",
    "name": "Tennessee Titans",
    "depthchart": "",
    "team": "Tennessee Titans",
    "projected": 6.0,
    "opponent": "New Orleans Saints",
    "opp_rank_pts": 8,
    "opp_avg_pts": 26.43,
    "home_away": "",
    "team_rank_allowed_pts": 10,
    "team_avg_allowed_pts": 19.93,
    "team_ranked_takeaways": 23,
    "team_avg_takeaways": 1.21,
    "opp_ranked_giveaways": 3,
    "opp_avg_giveaways": 0.93,
    "fanduelSalary": "$3600",
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
    "avg_fp2": 7.79,
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [17.0, 8.0, 1.0, 11.0, 7.0, 4.0, 4.0, 11.0, 8.0, 7.0, 'BYE', 6.0, 16.0, 4.0, 5.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.0, 6.4, 7.0, 5.4, 8.5, 6.0, 7.0, 7.2, 7.4, 6.2, 'BYE', 7.1, 5.9, 6.9, 5.4, 6.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/GB.png",
    "name": "Green Bay Packers",
    "depthchart": "",
    "team": "Green Bay Packers",
    "projected": 5.7,
    "opponent": "Minnesota Vikings",
    "opp_rank_pts": 6,
    "opp_avg_pts": 26.86,
    "home_away": "at ",
    "team_rank_allowed_pts": 11,
    "team_avg_allowed_pts": 20.21,
    "team_ranked_takeaways": 32,
    "team_avg_takeaways": 0.71,
    "opp_ranked_giveaways": 28,
    "opp_avg_giveaways": 1.93,
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
    "avg_fp2": 6.79,
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.0, 12.0, 13.0, -1.0, 9.0, 3.0, 2.0, 4.0, 2.0, 8.0, 'BYE', -1.0, 10.0, 7.0, 13.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.8, 9.6, 6.9, 8.0, 5.5, 7.8, 7.3, 6.0, 7.3, 7.6, 'BYE', 5.5, 7.8, 8.3, 8.4, 5.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/DET.png",
    "name": "Detroit Lions",
    "depthchart": "",
    "team": "Detroit Lions",
    "projected": 5.7,
    "opponent": "Denver Broncos",
    "opp_rank_pts": 30,
    "opp_avg_pts": 16.57,
    "home_away": "at ",
    "team_rank_allowed_pts": 26,
    "team_avg_allowed_pts": 26.64,
    "team_ranked_takeaways": 4,
    "team_avg_takeaways": 1.79,
    "opp_ranked_giveaways": 6,
    "opp_avg_giveaways": 1.07,
    "fanduelSalary": "$4100",
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
    "avg_fp2": 4.5,
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.0, 9.0, 13.0, 5.0, 'BYE', 7.0, -4.0, 5.0, 0.0, 6.0, -1.0, 8.0, 3.0, 2.0, 3.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.6, 6.7, 5.6, 6.1, 'BYE', 6.1, 6.2, 7.4, 5.4, 6.8, 5.7, 6.8, 7.5, 6.1, 6.4, 5.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/ARI.png",
    "name": "Arizona Cardinals",
    "depthchart": "",
    "team": "Arizona Cardinals",
    "projected": 5.5,
    "opponent": "Seattle Seahawks",
    "opp_rank_pts": 7,
    "opp_avg_pts": 26.5,
    "home_away": "at ",
    "team_rank_allowed_pts": 30,
    "team_avg_allowed_pts": 28.07,
    "team_ranked_takeaways": 17,
    "team_avg_takeaways": 1.36,
    "opp_ranked_giveaways": 31,
    "opp_avg_giveaways": 2.07,
    "fanduelSalary": "$3200",
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
    "avg_fp2": 3.64,
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.0, 2.0, 0.0, 4.0, 1.0, 1.0, 14.0, 1.0, 0.0, 9.0, 2.0, 'BYE', 0.0, 7.0, 5.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.0, 6.8, 8.1, 6.1, 7.0, 6.9, 6.8, 5.6, 6.6, 5.9, 5.3, 'BYE', 7.4, 7.7, 6.9, 5.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/OAK.png",
    "name": "Oakland Raiders",
    "depthchart": "",
    "team": "Oakland Raiders",
    "projected": 5.3,
    "opponent": "Los Angeles Chargers",
    "opp_rank_pts": 21,
    "opp_avg_pts": 20.93,
    "home_away": "at ",
    "team_rank_allowed_pts": 28,
    "team_avg_allowed_pts": 27.57,
    "team_ranked_takeaways": 30,
    "team_avg_takeaways": 0.93,
    "opp_ranked_giveaways": 21,
    "opp_avg_giveaways": 1.5,
    "fanduelSalary": "$3700",
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
    "avg_fp2": 3.43,
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.0, 3.0, -1.0, 4.0, 8.0, 'BYE', -3.0, 3.0, 6.0, 10.0, 13.0, 0.0, 0.0, -2.0, 3.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.1, 5.5, 6.4, 4.1, 7.9, 'BYE', 4.8, 5.5, 5.6, 5.6, 6.8, 7.0, 5.7, 7.0, 6.6, 5.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/CLE.png",
    "name": "Cleveland Browns",
    "depthchart": "",
    "team": "Cleveland Browns",
    "projected": 5.0,
    "opponent": "Baltimore Ravens",
    "opp_rank_pts": 1,
    "opp_avg_pts": 33.21,
    "home_away": "",
    "team_rank_allowed_pts": 18,
    "team_avg_allowed_pts": 23.5,
    "team_ranked_takeaways": 8,
    "team_avg_takeaways": 1.57,
    "opp_ranked_giveaways": 10,
    "opp_avg_giveaways": 1.21,
    "fanduelSalary": "$3000",
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
    "avg_fp2": 6.0,
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 13.0, 9.0, 10.0, 5.0, 4.0, 'BYE', 5.0, 5.0, 2.0, 16.0, 8.0, 4.0, 5.0, -2.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.9, 7.9, 7.1, 4.8, 5.8, 5.8, 'BYE', 4.8, 5.7, 6.2, 6.8, 8.2, 6.1, 7.9, 6.5, 5.0]
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
    "opponent": "Atlanta Falcons",
    "opp_rank_pts": 14,
    "opp_avg_pts": 23.14,
    "home_away": "at ",
    "team_rank_allowed_pts": 23,
    "team_avg_allowed_pts": 25.21,
    "team_ranked_takeaways": 28,
    "team_avg_takeaways": 1.0,
    "opp_ranked_giveaways": 12,
    "opp_avg_giveaways": 1.36,
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
    "avg_fp2": 5.21,
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
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12', 'Week 13', 'Week 14', 'Week 15', 'Week 16'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [-4.0, 8.0, 13.0, 2.0, 4.0, 7.0, 11.0, 15.0, 5.0, 'BYE', 4.0, 1.0, 5.0, -3.0, 5.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.3, 6.4, 6.2, 5.3, 6.1, 7.0, 6.5, 9.6, 5.5, 'BYE', 5.7, 5.9, 6.5, 7.5, 6.0, 4.9]
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