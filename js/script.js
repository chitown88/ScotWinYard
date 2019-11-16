var App = angular.module('footballApp', ['tc.chartjs']);

App.controller('positionController', function($scope, $http) {

  //JSON data for position and players

/*********************** PASTE AFTER HERE ************************/

$scope.currentDate = {"currentDate": "Saturday, 16 November 2019 10:45 AM (central time)"};
$scope.week = {"nflWeek": 11};

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
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16757.png",
    "name": "Derek Carr",
    "depthchart": "Starter: QB-1",
    "team": "Oakland Raiders",
    "projected": 22.3,
    "opponent": "Cincinnati Bengals",
    "home_away": "",
    "opp_rank": 22,
    "team_rank": 15,
    "avg_fp2": 15.06,
    "opp_rank_allowed_fp2": 30,
    "opp_avg_allowed_fp2": 23.72,
    "fanduelSalary": "$7400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A5ACAF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/oak.png",
    "headlineNews": "Solid, mistake-free in win",
    "report": "Carr completed 21 of 31 passes for 218 yards with one touchdown and no interceptions in the Raiders' 26-24 win over the Chargers on Thursday. He also rushed once for four yards.",
    "analysis": "Carr did an exemplary job managing the game, and he recorded a touchdown pass for the fourth straight contest when he connected on a nine-yard toss to Alec Ingold as the first half wound down. He then helped lead a pivotal and game-winning 10-play, 75-yard drive late in the fourth quarter that culminated in an 18-yard Josh Jacobs touchdown run. Carr has three consecutive interception-free efforts, and he'll look to keep that streak alive in a Week 11 tilt against the Bengals a week from Sunday.",
    "timestamp": "2019-11-07 09:06 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.56, 11.72, 16.68, 13.46, 7.96, 'BYE', 16.72, 23.4, 17.96, 13.12]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.8, 12.6, 6.7, 17.9, 11.8, 'BYE', 12.0, 11.4, 21.1, 14.1, 22.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/5529.png",
    "name": "Philip Rivers",
    "depthchart": "Starter: QB-1",
    "team": "Los Angeles Chargers",
    "projected": 20.6,
    "opponent": "Kansas City Chiefs",
    "home_away": "",
    "opp_rank": 8,
    "team_rank": 8,
    "avg_fp2": 15.7,
    "opp_rank_allowed_fp2": 23,
    "opp_avg_allowed_fp2": 20.12,
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
    "headlineNews": "Mistake-filled effort in loss",
    "report": "Rivers completed 17 of 31 passes for 207 yards with two touchdowns and three interceptions in the Chargers' 26-24 loss to the Raiders on Thursday. He also lost a fumble.",
    "analysis": "Rivers' night was about as ugly as his line would imply, even as he had his positive moments. Two of those came on touchdown passes to Hunter Henry and Austin Ekeler in the second and fourth quarter, respectively. However, the lowlights were also in plentiful supply, beginning with a 56-yard pick-six by the Raiders' Erik Harris just past the midway point of the first quarter that extended Oakland's lead to 10-0 at the time. Rivers then failed to notch even a single completion after getting the ball back with 58 seconds and all three timeouts remaining, finishing the possession with an interception that sealed Los Angeles' fate. Rivers now has three multi-interception games this season, and Thursday's 54.8 completion percentage was a season low. He'll look to bounce back with a much more efficient performance in a Week 11 Monday night battle against the Chiefs on Nov. 18.",
    "timestamp": "2019-11-07 08:55 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [24.92, 11.92, 19.62, 20.4, 6.14, 16.8, 21.16, 11.04, 11.76, 13.28]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [19.0, 17.3, 19.7, 24.5, 18.2, 13.9, 13.9, 16.3, 15.8, 19.5, 20.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3916387.png",
    "name": "Lamar Jackson",
    "depthchart": "Starter: QB-1",
    "team": "Baltimore Ravens",
    "projected": 20.6,
    "opponent": "Houston Texans",
    "home_away": "",
    "opp_rank": 27,
    "team_rank": 20,
    "avg_fp2": 26.96,
    "opp_rank_allowed_fp2": 25,
    "opp_avg_allowed_fp2": 20.5,
    "fanduelSalary": "$8800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9E7C0C",
    "tmColorDark": "#241773",
    "tmColorLite_rgba": "rgba(158, 124, 12, 0.2)",
    "tmColorDark_rgba": "rgba(36, 23, 115, 0.2)",
    "tmTextLite": "#9E7C0C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png",
    "headlineNews": "Perfect in beatdown of Bengals",
    "report": "Jackson completed 15 of 17 passes for 223 yards and three touchdowns and added 65 yards and a touchdown on seven carries during Sunday's 49-13 win over Cincinnati.",
    "analysis": "The Ravens were already up 28-10 midway through the third quarter when Jackson, off of a zone read, twisted and turned up field for a 47-yard touchdown run. He capped off the very next drive with a 20-yard loft to rookie Marquise Brown for his third touchdown throw of the game and the Ravens pulled the dynamic sophomore for the remainder of the blowout. Jackson set a career high for completion percentage in a game in which he threw multiple passes, 88.2 percent, and boasted a perfect 158.3 quarterback rating for the second time this season. Though doubters continue to wait for Jackson to falter, he is humming in Greg Roman's perfectly-tailored offensive scheme. Next up is a Houston defense that has had trouble defending the pass this season.",
    "timestamp": "2019-11-10 01:51 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [33.56, 30.88, 21.28, 26.48, 14.44, 30.64, 23.32, 'BYE', 28.62, 33.42]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.3, 24.6, 18.1, 23.7, 25.3, 21.9, 17.6, 'BYE', 21.5, 24.6, 20.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3122840.png",
    "name": "Deshaun Watson",
    "depthchart": "Starter: QB-1",
    "team": "Houston Texans",
    "projected": 20.4,
    "opponent": "Baltimore Ravens",
    "home_away": "at ",
    "opp_rank": 20,
    "team_rank": 13,
    "avg_fp2": 24.69,
    "opp_rank_allowed_fp2": 10,
    "opp_avg_allowed_fp2": 15.17,
    "fanduelSalary": "$8200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#03202F",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(3, 32, 47, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/hou.png",
    "headlineNews": "Tosses two TDs in win",
    "report": "Watson completed 22 of 28 passes for 201 yards and two touchdowns in Sunday's 26-3 win over the Jaguars. He added 37 rushing yards on seven carries in the victory at Wembley Stadium.",
    "analysis": "Both of Watson's touchdowns were of the 1-yard variety -- he found Daniel Fells in the second quarter and DeAndre Hopkins in the fourth. The quarterback wasn't asked to do too much with his team leading throughout thanks to a dominant performance from the defense, which was likely for the best considering Watson was nursing an eye injury suffered in the latter stages of last week's win over Oakland. With a bye week coming up next, Watson should be all systems go by the time he takes the field again Week 11 in Baltimore.",
    "timestamp": "2019-11-03 10:07 AM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [31.72, 12.86, 25.84, 11.6, 41.74, 33.4, 17.52, 27.76, 19.74, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.7, 18.4, 19.8, 19.5, 20.2, 19.6, 21.1, 27.6, 21.8, 'BYE', 20.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3052587.png",
    "name": "Baker Mayfield",
    "depthchart": "Starter: QB-1",
    "team": "Cleveland Browns",
    "projected": 19.8,
    "opponent": "Pittsburgh Steelers",
    "home_away": "",
    "opp_rank": 12,
    "team_rank": 19,
    "avg_fp2": 14.18,
    "opp_rank_allowed_fp2": 8,
    "opp_avg_allowed_fp2": 15.03,
    "fanduelSalary": "$7100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FF3C00",
    "tmColorDark": "#311D00",
    "tmColorLite_rgba": "rgba(255, 60, 0, 0.2)",
    "tmColorDark_rgba": "rgba(49, 29, 0, 0.2)",
    "tmTextLite": "#FF3C00",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
    "headlineNews": "Three total touchdowns in win",
    "report": "Mayfield completed 17 of 32 passes for 193 yards with two touchdowns and no interceptions in the Browns' 21-7 win over the Steelers on Thursday. He also scored a one-yard touchdown on his only rush.",
    "analysis": "For the second time in four days and third straight game overall, Mayfield accomplished a feat that has usually proven elusive for him this season -- a mistake-free performance. The embattled second-year signal-caller wasn't exactly efficient through the air, but he was taken down only once by the typically ferocious Steelers pass rush and connected with Jarvis Landry and Stephen Carlson for one- and eight-yard touchdown passes, respectively. Mayfield also opened the scoring on the night with a one-yard touchdown sneak in the first quarter, only his second rushing score of the campaign. Mayfield now has back-to-back multi-touchdown efforts and will look to keep his solid play going in a favorable matchup against the Dolphins in Week 12, a week from Sunday.",
    "timestamp": "2019-11-14 09:05 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.4, 16.0, 10.7, 16.78, 0.0, 24.46, 'BYE', 12.56, 17.12, 17.62]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [20.1, 12.7, 18.3, 16.1, 12.2, 15.6, 'BYE', 12.9, 17.5, 12.0, 19.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2969939.png",
    "name": "Jameis Winston",
    "depthchart": "Starter: QB-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 19.5,
    "opponent": "New Orleans Saints",
    "home_away": "",
    "opp_rank": 10,
    "team_rank": 5,
    "avg_fp2": 20.06,
    "opp_rank_allowed_fp2": 19,
    "opp_avg_allowed_fp2": 19.07,
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
    "headlineNews": "Overcomes errors in Week 10 win",
    "report": "Winston completed 30 of 48 passes for 358 yards with a touchdown and two interceptions in the Buccaneers' 30-27 win over the Cardinals on Sunday. He also rushed three times for 40 yards and committed a fumble, but it was recovered by the offense.",
    "analysis": "Winston turned in what has become a signature performance for him, one featuring multiple sacks, multiple interceptions and plenty of passing yards. For a change, the Buccaneers were on the right side of the scoreboard by the final gun, as their beleaguered defense was able to come up with a stop on the Cardinals' last-gasp drive. Winston did suffer yet another interception off a deflection, but he also made a bad decision on his first one of the day. The pair of picks pushed Winston's season tally in that category to 14, and Sunday marked his fourth game this year with multiple interceptions. Winston also continued to demonstrate some atypical mobility, breaking free for his second run of at least 20 yards this season and finishing with his second-highest rushing yardage total of the campaign. The embattled 2015 first overall pick will look to clean up the mistakes when he faces an aggressive Saints defense Week 11.",
    "timestamp": "2019-11-10 02:19 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.06, 13.22, 26.5, 30.3, 17.46, 19.1, 'BYE', 23.34, 20.2, 20.32]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [20.1, 18.6, 19.1, 12.8, 17.9, 18.9, 'BYE', 17.3, 24.5, 22.0, 19.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3139477.png",
    "name": "Patrick Mahomes",
    "depthchart": "Starter: QB-1",
    "team": "Kansas City Chiefs",
    "projected": 19.5,
    "opponent": "Los Angeles Chargers",
    "home_away": "at ",
    "opp_rank": 5,
    "team_rank": 1,
    "avg_fp2": 22.53,
    "opp_rank_allowed_fp2": 6,
    "opp_avg_allowed_fp2": 14.21,
    "fanduelSalary": "$8700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Opens week with full practice",
    "report": "Mahomes (kneecap) was a full participant in Thursday's practice.",
    "analysis": "Mahomes was as productive as ever after returning from a two-game absence due to a dislocated right kneecap in last weekend's 35-32 loss to the Titans, completing 36 of 50 attempts for 446 yards and three touchdowns. Perhaps most encouragingly, Mahomes told Adam Teicher of ESPN.com that he felt great physically coming out of the contest, a sentiment supported by the quarterback's ability to take every rep during the first practice of Week 11. With the injury behind him, Mahomes will look to improve his case for repeating as NFL MVP and aim to keep the Chiefs atop the AFC West standings when he takes on the Chargers on Monday night in Mexico City.",
    "timestamp": "2019-11-14 03:03 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [27.32, 31.62, 27.86, 18.0, 18.54, 19.82, 7.24, 'DNP', 'DNP', 29.84]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [20.9, 21.0, 22.8, 27.2, 24.3, 25.3, 19.0, 'DNP', 'DNP', 22.9, 19.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2574630.png",
    "name": "Jeff Driskel",
    "depthchart": "Starter: QB-1",
    "team": "Detroit Lions",
    "projected": 17.8,
    "opponent": "Dallas Cowboys",
    "home_away": "",
    "opp_rank": 6,
    "team_rank": 4,
    "avg_fp2": 18.56,
    "opp_rank_allowed_fp2": 5,
    "opp_avg_allowed_fp2": 13.59,
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
    "headlineNews": "Garnering Week 11 start",
    "report": "Driskel is in line to make a second consecutive start Sunday against the Cowboys after coach Matt Patricia announced that Matt Stafford (back) has been ruled out for the contest, Tim Twentyman of the Lions' official site reports.",
    "analysis": "Stafford was unable to practice all week due to fractures in his back, making it not especially surprising that he'll miss another game. The Lions didn't hesitate to have Driskel air it out in their Week 10 loss to the Bears, but the signal-caller generally struggled to shepherd the offense, completing only 27 of 46 attempts for 269 yards (5.8 YPA), one touchdown and one interception while rushing five times for 37 yards. Driskel will get another tough assignment this weekend, taking on the Cowboys' seventh-ranked pass defense.",
    "timestamp": "2019-11-15 10:33 AM",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "BYE",
    "week06": "DNP",
    "week07": "DNP",
    "week08": "DNP",
    "week09": "DNP",
    "week10": 18.56,
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 18.56]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 'DNP', 'DNP', 11.3, 17.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2580.png",
    "name": "Drew Brees",
    "depthchart": "Starter: QB-1",
    "team": "New Orleans Saints",
    "projected": 17.6,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "at ",
    "opp_rank": 32,
    "team_rank": 9,
    "avg_fp2": 14.93,
    "opp_rank_allowed_fp2": 31,
    "opp_avg_allowed_fp2": 24.54,
    "fanduelSalary": "$8300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9b845c",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(155, 132, 92, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#9b845c",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
    "headlineNews": "Sacked six times in Week 10 loss",
    "report": "Brees completed 32 of 45 pass attempts for 287 yards, with zero touchdowns and zero interceptions during Sunday's 26-9 loss to the Falcons.",
    "analysis": "It's not often that a team is able to hold New Orleans' offense out of the end zone for an entire game, but that is exactly what Atlanta's defense achieved against Brees and the Saints' attack. Excluding the Week 2 loss to the Rams in which Brees was forced to exit with a thumb injury, Sunday's performance marks just the second time since Week 5 of last season that an opponent was capable of keeping the 12-time Pro Bowler without a touchdown throw. Brees has a strong chance of getting back on track in Week 11, with the Saints taking on a 32nd-ranked Tampa Bay pass defense that surrendered 324 passing yards and three touchdowns to Cardinals quarterback Kyler Murray on Sunday.",
    "timestamp": "2019-11-10 02:52 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [21.8, 0.52, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 25.92, 'BYE', 11.48]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [20.3, 18.2, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 19.4, 'BYE', 21.4, 17.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2573079.png",
    "name": "Carson Wentz",
    "depthchart": "Starter: QB-1",
    "team": "Philadelphia Eagles",
    "projected": 16.7,
    "opponent": "New England Patriots",
    "home_away": "",
    "opp_rank": 2,
    "team_rank": 21,
    "avg_fp2": 17.64,
    "opp_rank_allowed_fp2": 1,
    "opp_avg_allowed_fp2": 9.49,
    "fanduelSalary": "$7000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#386168",
    "tmColorDark": "#004C54",
    "tmColorLite_rgba": "rgba(56, 97, 104, 0.2)",
    "tmColorDark_rgba": "rgba(0, 76, 84, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    "headlineNews": "Held to 6.1 yards per attempt",
    "report": "Wentz completed 26 of 39 pass attempts for 239 yards and one touchdown during Sunday's 22-14 win over the Bears. He also carried four times for 15 yards.",
    "analysis": "While Wentz completed 67 percent of his passes, he was held mostly to short connections and finished averaging a lackluster 6.1 yards per attempt. He connected with Zach Ertz for a 25-yard touchdown in the second quarter, flashing a glimpse of the connection that made both players effective fantasy options in seasons past. Wentz also avoided throwing an interception for the second straight game, but after the bye week he'll face a tough matchup against the Patriots.",
    "timestamp": "2019-11-03 02:49 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [25.02, 21.54, 21.66, 19.7, 12.06, 21.54, 7.84, 14.38, 15.06, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.3, 18.8, 15.9, 10.7, 18.6, 10.2, 15.9, 13.8, 14.1, 'BYE', 16.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3115293.png",
    "name": "Kyle Allen",
    "depthchart": "Starter: QB-1",
    "team": "Carolina Panthers",
    "projected": 16.1,
    "opponent": "Atlanta Falcons",
    "home_away": "",
    "opp_rank": 25,
    "team_rank": 23,
    "avg_fp2": 12.9,
    "opp_rank_allowed_fp2": 28,
    "opp_avg_allowed_fp2": 22.91,
    "fanduelSalary": "$7200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0085CA",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 133, 202, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#0085CA",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/car.png",
    "headlineNews": "Sets career high in passing yards",
    "report": "Allen completed 28 of 43 pass attempts for 307 yards, one touchdown and one interception during Sunday's 24-16 loss to the Packers. He also rushed three times for 12 yards.",
    "analysis": "Although Allen averaged a pedestrian 7.1 yards per attempt, he set a new career high in passing yardage against a formidable Packers pass defense. He completed a two-yard touchdown pass to Curtis Samuel in the first quarter and had several other opportunities in the red zone, including some failed attempts in the final seconds that could've tied the game. Allen continues to grow into his role as a starter and will enjoy an excellent matchup next Sunday at home against the Falcons.",
    "timestamp": "2019-11-10 07:13 PM",
    "week01": "DNP",
    "week02": "DNP",
    "week03": 24.34,
    "week04": 3.28,
    "week05": 11.64,
    "week06": 17.38,
    "week07": "BYE",
    "week08": 3.32,
    "week09": 15.88,
    "week10": 14.48,
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 24.34, 3.28, 11.64, 17.38, 'BYE', 3.32, 15.88, 14.48]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 23.2, 14.9, 14.1, 17.7, 'BYE', 6.8, 14.7, 13.5, 16.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4040616.png",
    "name": "Dwayne Haskins",
    "depthchart": "Starter: QB-1",
    "team": "Washington Redskins",
    "projected": 15.9,
    "opponent": "New York Jets",
    "home_away": "",
    "opp_rank": 26,
    "team_rank": 31,
    "avg_fp2": 3.69,
    "opp_rank_allowed_fp2": 21,
    "opp_avg_allowed_fp2": 19.61,
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
    "headlineNews": "Named starter for rest of season",
    "report": "Coach Bill Callahan confirmed Monday that Haskins is slated to remain Washington's starting QB for the rest of the season, Kareem Copeland of The Washington Post reports.",
    "analysis": "Per Rhiannon Walker of The Athletic, Case Keenum will serve as Haskins' top backup, with Colt McCoy slotting in as the team's No. 3 signal-caller. With Washington 1-8, it makes sense for the team to see what the No. 15 overall pick in the 2019 NFL Draft can bring to the table over an extended period of playing time, beginning with a home matchup versus the 2-7 Jets on Sunday.",
    "timestamp": "2019-11-11 11:06 AM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 3.58, 'DNP', 'DNP', 'DNP', 0.32, 7.16, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 7.0, 'DNP', 'DNP', 'DNP', 1.9, 9.0, 'BYE', 15.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16760.png",
    "name": "Jimmy Garoppolo",
    "depthchart": "Starter: QB-1",
    "team": "San Francisco 49ers",
    "projected": 15.7,
    "opponent": "Arizona Cardinals",
    "home_away": "",
    "opp_rank": 31,
    "team_rank": 22,
    "avg_fp2": 15.5,
    "opp_rank_allowed_fp2": 32,
    "opp_avg_allowed_fp2": 24.72,
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
    "headlineNews": "Commits three turnovers",
    "report": "Garoppolo completed 24 of 46 passes for 248 yards, one touchdown and one interception in Monday night's 27-24 overtime loss to the Seahawks. He also was sacked five times and lost two fumbles.",
    "analysis": "Garoppolo led the Niners to points on both of their first two drives, capping the second with a 10-yard touchdown toss to Kendrick Bourne, but his performance wasn't very pretty afterward. Following a string of punts, he was sacked and stripped for a Seahawks touchdown prior to halftime, then was picked and lost another fumble on consecutive drives during the second half. Although Garoppolo's interception actually bounced off the hands of his intended target first, marking just one of multiple drops committed by Niners receivers, the quarterback was also fortunate Seattle dropped a couple would-be picks. After an underwhelming outing overall, Garoppolo will look to get back on track in Week 11 versus the Cardinals, who he lit up for four touchdowns in their earlier meeting this season.",
    "timestamp": "2019-11-11 09:30 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [13.44, 23.68, 11.38, 'BYE', 14.94, 13.12, 7.04, 14.0, 28.88, 13.02]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.3, 11.1, 19.6, 'BYE', 15.6, 11.0, 13.3, 15.0, 16.7, 18.6, 15.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2577417.png",
    "name": "Dak Prescott",
    "depthchart": "Starter: QB-1",
    "team": "Dallas Cowboys",
    "projected": 15.4,
    "opponent": "Detroit Lions",
    "home_away": "at ",
    "opp_rank": 28,
    "team_rank": 3,
    "avg_fp2": 23.28,
    "opp_rank_allowed_fp2": 27,
    "opp_avg_allowed_fp2": 21.17,
    "fanduelSalary": "$8100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#7F9695",
    "tmColorDark": "#041E42",
    "tmColorLite_rgba": "rgba(127, 150, 149, 0.2)",
    "tmColorDark_rgba": "rgba(4, 30, 66, 0.2)",
    "tmTextLite": "#7F9695",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
    "headlineNews": "Posts gaudy numbers in loss",
    "report": "Prescott completed 28 of 46 pass attempts for 397 yards, three touchdowns and an interception in Sunday's 28-24 loss to the Vikings.",
    "analysis": "Prescott was asked to carry the offense with Ezekiel Elliott getting stuffed with consistency by the Vikings' front. The 26-year-old was able to answer the bell, posting his third-highest yardage total of the season and throwing for three scores for the fourth time this year. Prescott was unable to clinch the victory for Dallas, but his performance was definitely worthy of a winning fantasy squad. We are used to seeing more \"game manager-esque\" stat lines from Dak, so we shouldn't expect near 400-yard performances on the regular. However, he does have a very soft matchup against the Lions (31st against the pass) on tap for Week 11.",
    "timestamp": "2019-11-10 10:18 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [33.4, 28.66, 23.54, 8.62, 26.22, 18.18, 21.56, 'BYE', 22.48, 26.88]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.3, 17.9, 24.1, 18.8, 17.5, 15.3, 19.1, 'BYE', 16.9, 15.6, 15.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/11237.png",
    "name": "Matt Ryan",
    "depthchart": "Starter: QB-1",
    "team": "Atlanta Falcons",
    "projected": 15.3,
    "opponent": "Carolina Panthers",
    "home_away": "at ",
    "opp_rank": 11,
    "team_rank": 2,
    "avg_fp2": 20.85,
    "opp_rank_allowed_fp2": 12,
    "opp_avg_allowed_fp2": 16.01,
    "fanduelSalary": "$7600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/atl.png",
    "headlineNews": "Ready to play",
    "report": "Ryan (ankle) has been cleared of an injury designation for Sunday's game at Carolina, D. Orlando Ledbetter of The Atlanta Journal-Constitution reports.",
    "analysis": "Ryan returned from a one-game absence due to an ankle sprain in last week's 26-9 win over New Orleans, completing 20 of 35 passes for 185 yards, two touchdowns and one interception. He was a limited practice participant throughout the current week, with his availability for Sunday never really in any doubt. Ryan will take on another tough pass defense, this time without the services of Austin Hooper (knee) and Devonta Freeman (foot). Of course, the Falcons still have legitimate pass-game weapons in Julio Jones and Calvin Ridley.",
    "timestamp": "2019-11-15 11:12 AM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [20.56, 22.1, 23.46, 15.68, 34.9, 30.94, 3.56, 'DNP', 'BYE', 15.58]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.2, 22.1, 14.7, 20.9, 16.0, 17.7, 18.0, 'DNP', 'BYE', 12.6, 15.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116407.png",
    "name": "Mason Rudolph",
    "depthchart": "Starter: QB-1",
    "team": "Pittsburgh Steelers",
    "projected": 14.8,
    "opponent": "Cleveland Browns",
    "home_away": "at ",
    "opp_rank": 7,
    "team_rank": 27,
    "avg_fp2": 13.64,
    "opp_rank_allowed_fp2": 22,
    "opp_avg_allowed_fp2": 19.94,
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
    "headlineNews": "May get fined for role in brawl",
    "report": "Rudolph could be subject to a fine for his role during the brawl that ensued late in the fourth quarter of the Steelers' 21-7 loss to the Browns on Thursday, Tom Pelissero of NFL Network reports.",
    "analysis": "The second-year signal-caller was the victim of the most flagrant conduct of the fight, as Browns defensive end Myles Garrett pulled Rudolph's helmet off the quarterback and then swung it at Rudolph's head. Garrett received an indefinite suspension for his actions, while Browns defensive tackle Larry Ogunjobi and Steelers center Maurkice Pouncey were handed one- and three-game suspensions, respectively. Though Rudolph avoided a suspension, the NFL will presumably review the video of the fight and determine whether the 24-year-old did anything to warrant a fine. In the meantime, Rudolph will look to move past an outing that was already an ugly one leading up to the fight. Rudolph finished the night with 23 completions on 44 attempts for 221 yards, a touchdown and a career-high four interceptions.",
    "timestamp": "2019-11-15 11:16 AM",
    "week01": "DNP",
    "week02": 12.18,
    "week03": 15.46,
    "week04": 16.86,
    "week05": 9.24,
    "week06": "DNP",
    "week07": "BYE",
    "week08": 17.04,
    "week09": 11.14,
    "week10": 13.58,
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 12.18, 15.46, 16.86, 9.24, 'DNP', 'BYE', 17.04, 11.14, 13.58]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 6.9, 12.8, 21.5, 18.9, 'DNP', 'BYE', 15.8, 16.8, 11.0, 14.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2574511.png",
    "name": "Brandon Allen",
    "depthchart": "Starter: QB-1",
    "team": "Denver Broncos",
    "projected": 14.8,
    "opponent": "Minnesota Vikings",
    "home_away": "at ",
    "opp_rank": 18,
    "team_rank": 28,
    "avg_fp2": 8.51,
    "opp_rank_allowed_fp2": 14,
    "opp_avg_allowed_fp2": 17.01,
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
    "headlineNews": "Keeping starting job",
    "report": "Coach Vic Fangio confirmed Monday that Allen would remain the Broncos' starting quarterback for the team's Week 11 game against the Vikings, Troy Renck of Denver 7 News reports.",
    "analysis": "While making his NFL debut in place of the injured Joe Flacco (neck) in Week 9, Allen proved to be a capable game manager, completing 12 of 20 attempts for 193 yards and two touchdowns en route to guiding the Broncos to a 24-19 win over the Browns. The serviceable outing was enough for Allen to keep the starting job out of the bye week, but he'll need to continue to perform well in his subsequent appearances to hold off rookie second-round pick Drew Lock (thumb). Lock, who has been on injured reserve all season, is slated to practice Tuesday and could be reinstated to the 53-man roster as soon as this weekend to serve as Allen's backup.",
    "timestamp": "2019-11-11 12:57 PM",
    "week01": 0.0,
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": "DNP",
    "week08": "DNP",
    "week09": 17.02,
    "week10": "BYE",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 17.02, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.7, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 9.4, 'BYE', 14.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2330.png",
    "name": "Tom Brady",
    "depthchart": "Starter: QB-1",
    "team": "New England Patriots",
    "projected": 14.7,
    "opponent": "Philadelphia Eagles",
    "home_away": "at ",
    "opp_rank": 18,
    "team_rank": 8,
    "avg_fp2": 18.72,
    "opp_rank_allowed_fp2": 18,
    "opp_avg_allowed_fp2": 18.04,
    "fanduelSalary": "$7800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#C60C30",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ne.png",
    "headlineNews": "Solid results in loss",
    "report": "Brady (shoulder) completed 30 of 46 pass attempts for 285 yards, a touchdown and an interception in Sunday's 37-20 loss to the Ravens.",
    "analysis": "Lamar Jackson and the Ravens' unconventional offense exposed what was the league's best defense Sunday, forcing Brady to play from behind and attempt a season-high 46 passes. The 42-year-old wonder wasn't able to connect down the field with much success (6.2 yards per attempt), but the volume led to 285 passing yards, his best mark since Week 6. The team may need to rely on Brady's arm following the upcoming bye week, as a four-game stretch against high-powered offenses will take place, starting with the Eagles in Week 11.",
    "timestamp": "2019-11-03 10:47 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [25.64, 24.66, 20.14, 4.7, 24.92, 22.96, 12.96, 18.36, 14.1, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.1, 28.2, 20.8, 16.9, 18.5, 18.4, 17.7, 20.8, 14.1, 'BYE', 14.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3046779.png",
    "name": "Jared Goff",
    "depthchart": "Starter: QB-1",
    "team": "Los Angeles Rams",
    "projected": 14.6,
    "opponent": "Chicago Bears",
    "home_away": "",
    "opp_rank": 15,
    "team_rank": 6,
    "avg_fp2": 15.89,
    "opp_rank_allowed_fp2": 7,
    "opp_avg_allowed_fp2": 15.01,
    "fanduelSalary": "$3",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Held in check by Steelers",
    "report": "Goff completed 22 of 41 passes for 243 yards and two interceptions in Sunday's 17-12 loss to the Steelers.",
    "analysis": "The Rams' offense struggled after center Brian Allen left in the second quarter with a knee injury, but Goff wasn't having much luck moving the ball even before that. It's the second time this season the fourth-year QB has been held without a touchdown and the third time he's thrown for less than 250 yards. Goff will face another tough test in Week 11 when the Rams host Khalil Mack and the Bears.",
    "timestamp": "2019-11-10 07:21 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.44, 19.12, 16.16, 23.68, 18.9, 1.12, 25.02, 22.88, 'BYE', 5.72]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.5, 21.5, 10.6, 17.6, 20.5, 10.4, 21.8, 21.2, 'BYE', 15.8, 14.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2578570.png",
    "name": "Jacoby Brissett",
    "depthchart": "Starter: QB-1",
    "team": "Indianapolis Colts",
    "projected": 13.8,
    "opponent": "Jacksonville Jaguars",
    "home_away": "",
    "opp_rank": 11,
    "team_rank": 25,
    "avg_fp2": 16.25,
    "opp_rank_allowed_fp2": 19,
    "opp_avg_allowed_fp2": 18.26,
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
    "headlineNews": "Will start against Jacksonville",
    "report": "Coach Frank Reich confirmed Brissett (knee) will start Sunday against Jacksonville, Mike Wells of ESPN.com reports.",
    "analysis": "Reich noted that Brissett made it through practice this week without any major issues, enabling the signal-caller to return after a one-game absence due to sprained MCL in his left knee. While Brissett will return under center, he'll be without top target T.Y. Hilton (calf), who has been ruled out another game.",
    "timestamp": "2019-11-15 10:40 AM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [16.5, 17.34, 20.8, 23.5, 11.94, 'BYE', 27.64, 9.48, 2.76, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.1, 13.1, 21.8, 15.1, 12.6, 'BYE', 16.8, 11.5, 14.9, 'DNP', 13.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14877.png",
    "name": "Nick Foles",
    "depthchart": "Starter: QB-1",
    "team": "Jacksonville Jaguars",
    "projected": 13.7,
    "opponent": "Indianapolis Colts",
    "home_away": "at ",
    "opp_rank": 9,
    "team_rank": 14,
    "avg_fp2": 7.0,
    "opp_rank_allowed_fp2": 13,
    "opp_avg_allowed_fp2": 16.04,
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
    "headlineNews": "Reinstated from IR",
    "report": "The Jaguars officially reinstated Foles (collarbone) from injured reserve Tuesday.",
    "analysis": "The transaction was merely a formality after coach Doug Marrone announced earlier in the day that Foles would take over as the Jaguars' starting quarterback coming out of the Week 10 bye. Now that he's back from IR, Foles can resume practicing with the team and prepare for the Nov. 17 start against the Colts in what will mark his first appearance since Week 1.",
    "timestamp": "2019-11-05 12:01 PM",
    "week01": 7.0,
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": "DNP",
    "week08": "DNP",
    "week09": "DNP",
    "week10": "BYE",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.0, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.0, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 13.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14880.png",
    "name": "Kirk Cousins",
    "depthchart": "Starter: QB-1",
    "team": "Minnesota Vikings",
    "projected": 13.5,
    "opponent": "Denver Broncos",
    "home_away": "",
    "opp_rank": 4,
    "team_rank": 17,
    "avg_fp2": 17.73,
    "opp_rank_allowed_fp2": 3,
    "opp_avg_allowed_fp2": 11.67,
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
    "headlineNews": "Throws for two scores in win",
    "report": "Cousins completed 23 of 32 pass attempts for 220 yards and a pair of touchdowns in Sunday's 28-24 win over the Cowboys.",
    "analysis": "Cousins was constantly under pressure by the Cowboys' fierce pass rush anytime he would drop back to pass, which is the main reason for a sub-par mark of 6.9 yards per attempt. The veteran signal-caller was able to take what the defense gave him, which were short dump-offs to Dalvin Cook (86 of Cousins' 220 passing yards came on screen or swing passes to his running back). Cousins has quashed media criticism by providing more wins for his club of late, but his last three fantasy performances have felt lackluster. We could be in store for more of the same in Week 11 against a Denver defense that can be attacked on the ground but can be tough on opposing quarterbacks.",
    "timestamp": "2019-11-10 10:11 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.32, 10.9, 12.56, 7.32, 20.54, 28.32, 29.18, 11.6, 21.3, 21.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [20.0, 16.9, 18.4, 13.1, 12.0, 12.2, 17.6, 18.2, 16.4, 19.8, 13.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3918298.png",
    "name": "Josh Allen",
    "depthchart": "Starter: QB-1",
    "team": "Buffalo Bills",
    "projected": 13.0,
    "opponent": "Miami Dolphins",
    "home_away": "at ",
    "opp_rank": 19,
    "team_rank": 24,
    "avg_fp2": 19.25,
    "opp_rank_allowed_fp2": 26,
    "opp_avg_allowed_fp2": 20.67,
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
    "headlineNews": "Scores two rushing TDs",
    "report": "Allen completed 22 of 41 pass attempts for 266 yards while rushing six times for 28 yards and two touchdowns during Sunday's 19-16 loss to the Browns.",
    "analysis": "Allen's struggles with his accuracy continued, as he completed just 54 percent of his attempts on the day. He still managed to set a new career high in passing yardage thanks to some big plays while scoring rushing touchdowns in the second and fourth quarters to keep his team in the game. Allen has now accounted for two total touchdowns in each of the last five games, and he's turned the ball over just twice in that span. He'll look to continue his recent success next Sunday against the Dolphins.",
    "timestamp": "2019-11-10 02:52 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [17.96, 22.22, 21.32, 11.72, 18.46, 'BYE', 21.28, 17.26, 17.6, 25.44]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.3, 23.5, 21.4, 21.9, 7.0, 'BYE', 19.1, 14.4, 17.2, 20.8, 13.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3912547.png",
    "name": "Sam Darnold",
    "depthchart": "Starter: QB-1",
    "team": "New York Jets",
    "projected": 12.6,
    "opponent": "Washington Redskins",
    "home_away": "at ",
    "opp_rank": 13,
    "team_rank": 32,
    "avg_fp2": 14.3,
    "opp_rank_allowed_fp2": 16,
    "opp_avg_allowed_fp2": 17.86,
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
    "headlineNews": "Turnover-free in win",
    "report": "Darnold completed 19 of 30 passes for 230 yards and a touchdown while adding 25 yards and another score on three rushing attempts in Sunday's 34-27 win over the Giants.",
    "analysis": "Darnold opened the scoring with a two-yard rushing touchdown, keeping the ball on an option play as the Jets unveiled a previously unused wrinkle to their offense. The second-year quarterback isn't much of a factor on the ground, but he could boost his fantasy value by calling his own number more often near the goal line, as this was only Darnold's second career rushing score. He added a 23-yard touchdown pass to Jamison Crowder later in the first quarter. Most importantly, Darnold finished without a turnover. With this much-needed clean performance under his belt following an eight-interception three-game stretch, Darnold's confidence should be climbing ahead of a Week 11 clash with Washington.",
    "timestamp": "2019-11-10 02:51 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [15.0, 'DNP', 'DNP', 'BYE', 'DNP', 20.62, -2.66, 17.62, 13.5, 21.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.4, 'DNP', 'DNP', 'BYE', 'DNP', 12.3, 10.8, 12.6, 19.5, 17.3, 12.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3039707.png",
    "name": "Mitchell Trubisky",
    "depthchart": "Starter: QB-1",
    "team": "Chicago Bears",
    "projected": 11.5,
    "opponent": "Los Angeles Rams",
    "home_away": "at ",
    "opp_rank": 17,
    "team_rank": 30,
    "avg_fp2": 11.25,
    "opp_rank_allowed_fp2": 11,
    "opp_avg_allowed_fp2": 15.77,
    "fanduelSalary": "$2",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#c36835",
    "tmColorDark": "#0B162A",
    "tmColorLite_rgba": "rgba(195, 104, 53, 0.2)",
    "tmColorDark_rgba": "rgba(11, 22, 42, 0.2)",
    "tmTextLite": "#c36835",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png",
    "headlineNews": "Three touchdowns Sunday",
    "report": "Trubisky completed 16 of 23 passes for 173 yards and three touchdowns in Chicago's 20-13 victory over the Lions on Sunday.",
    "analysis": "Trubisky had another slow start, as he was held to fewer than 35 yards until a couple minutes remained in the first half before turning things around. Even though his yardage total was low, he tied a season-high 7.5 yards per attempt while matching a season-best three touchdown passes. This was just the third time all season he's thrown a TD in a game, and he's only surpassed 231 yards on two occasions. As a result, he'll remain a low-floor weekly fantasy option.",
    "timestamp": "2019-11-10 02:23 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.22, 5.6, 20.44, -1.64, 'DNP', 'BYE', 22.04, 8.12, 6.5, 19.72]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.8, 11.3, 13.8, 14.3, 'DNP', 'BYE', 9.1, 15.4, 13.4, 10.8, 11.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3042876.png",
    "name": "Ryan Finley",
    "depthchart": "Starter: QB-1",
    "team": "Cincinnati Bengals",
    "projected": 11.2,
    "opponent": "Oakland Raiders",
    "home_away": "at ",
    "opp_rank": 30,
    "team_rank": 14,
    "avg_fp2": 9.88,
    "opp_rank_allowed_fp2": 29,
    "opp_avg_allowed_fp2": 23.12,
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
    "headlineNews": "Turns it over twice in debut",
    "report": "Finley completed 16 of 30 passes for 167 yards with a touchdown and an interception during Sunday's 49-13 loss to Baltimore. He added 22 yards on five carries and lost a fumble.",
    "analysis": "The stat line isn't particularly impressive and the scoreboard paints an ugly picture, but the rookie made some nice plays in his debut, particularly a well-placed six-yard loft to Tyler Eifert just before halftime for his first career touchdown. Cincinnati is speeding toward the top pick of the draft, so the Bengals figure to get a long look at what Finley offers on a depleted roster that is still without A.J. Green (ankle). Week 11 could be brighter, as the Bengals visit Oakland and a pass defense that ranks 29th in the league in opponent quarterback percentage (109.1).",
    "timestamp": "2019-11-10 04:27 PM",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": "DNP",
    "week08": "DNP",
    "week09": "BYE",
    "week10": 9.88,
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 9.88]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 15.0, 11.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3917315.png",
    "name": "Kyler Murray",
    "depthchart": "Starter: QB-1",
    "team": "Arizona Cardinals",
    "projected": 10.8,
    "opponent": "San Francisco 49ers",
    "home_away": "at ",
    "opp_rank": 1,
    "team_rank": 16,
    "avg_fp2": 20.31,
    "opp_rank_allowed_fp2": 2,
    "opp_avg_allowed_fp2": 10.59,
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
    "headlineNews": "Eclipses 300-yard mark in loss",
    "report": "Murray completed 27 of 44 passes for 324 yards with three touchdowns and one interception in the Cardinals' 30-27 loss to the Buccaneers on Sunday. He also rushed three times for 38 yards.",
    "analysis": "Murray put together the fourth 300-yard effort of his nascent career in the close loss, and he had the Cardinals in the game until the very last play, a last-gasp heave in which Arizona tried to argue for pass interference. Murray had his connection with Christian Kirk in top form, as he hit the second-year wideout for touchdown passes of 33, 69 and 15 yards during the contest. The 2019 first overall pick has multiple touchdown passes in back-to-back games after a five-game stretch where he failed to notch any scoring throws in four contests. Murray will look to continue his development in the fantasy-friendly air raid offense in a Week 11 rematch versus the 49ers.",
    "timestamp": "2019-11-10 02:11 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [24.62, 18.36, 19.82, 17.34, 24.32, 28.8, 6.96, 10.1, 25.04, 27.76]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.6, 14.4, 14.2, 19.5, 17.1, 21.9, 16.1, 19.5, 11.8, 19.9, 10.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/8664.png",
    "name": "Ryan Fitzpatrick",
    "depthchart": "Starter: QB-1",
    "team": "Miami Dolphins",
    "projected": 10.6,
    "opponent": "Buffalo Bills",
    "home_away": "",
    "opp_rank": 3,
    "team_rank": 29,
    "avg_fp2": 11.99,
    "opp_rank_allowed_fp2": 4,
    "opp_avg_allowed_fp2": 13.04,
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
    "headlineNews": "Will remain starting QB",
    "report": "Coach Brian Flores termed Fitzpatrick the Dolphins' starting quarterback for the \"foreseeable future,\" Barry Jackson of the Miami Herald reports.",
    "analysis": "Fitzpatrick was forced to the sideline for a spell Sunday at Indianapolis to be checked for a concussion, but his ability to return and lead the Dolphins to a second victory in a row more or less solidified his standing over second-year signal caller Josh Rosen. On the season, Fitzpatrick has completed 62 percent of his passes, averaged a modest 6.6 yards per attempt and posted an 8:8 TD:INT in eight appearances.",
    "timestamp": "2019-11-11 12:13 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.2, 1.16, 1.16, 'DNP', 'BYE', 9.78, 21.58, 13.3, 23.72, 14.06]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.9, 12.3, 3.7, 'DNP', 'BYE', 4.5, 12.7, 12.3, 15.2, 14.2, 10.6]
                    }
                    
                    ]
               }
            }];




$scope.positionRB = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3051392.png",
    "name": "Ezekiel Elliott",
    "depthchart": "Starter: RB-1",
    "team": "Dallas Cowboys",
    "projected": 21.0,
    "opponent": "Detroit Lions",
    "home_away": "at ",
    "opp_rank": 26,
    "team_rank": 5,
    "avg_fp2": 16.1,
    "opp_rank_allowed_fp2": 31,
    "opp_avg_allowed_fp2": 26.92,
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
    "headlineNews": "Stuffed in loss",
    "report": "Elliott rushed 20 times for 47 yards and had two catches for 16 yards in Sunday's 28-24 loss to Minnesota.",
    "analysis": "The Vikings had a clear gameplan to not let Elliott beat them, and they executed it to perfection. It was a bit surprising that coach Jason Garrett did not find more creative ways to get his star back the ball in open space (just three targets). This was easily Elliott's worst fantasy performance this season, as he was at least able to hit pay dirt the three other occasions in which he did not rush for at least 100 yards. Zeke will have an excellent opportunity to bounce back in the Cowboys' next outing against a Lions defense that ranks 27th against the run.",
    "timestamp": "2019-11-10 09:34 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.8, 19.0, 14.9, 13.5, 16.1, 23.7, 23.7, 'BYE', 13.9, 7.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [19.3, 16.8, 18.6, 11.0, 18.6, 15.2, 15.9, 'BYE', 18.0, 16.6, 21.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3128720.png",
    "name": "Nick Chubb",
    "depthchart": "Starter: RB-1",
    "team": "Cleveland Browns",
    "projected": 19.3,
    "opponent": "Pittsburgh Steelers",
    "home_away": "",
    "opp_rank": 16,
    "team_rank": 13,
    "avg_fp2": 16.89,
    "opp_rank_allowed_fp2": 6,
    "opp_avg_allowed_fp2": 16.23,
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
    "headlineNews": "Massive workload in win",
    "report": "Chubb rushed 27 times for 92 yards in the Browns' 21-7 win over the Steelers on Thursday. He also failed to haul in his only target.",
    "analysis": "Any doubts about whether Kareem Hunt would eat into Chubb's lead-back workload were put to rest for at least one more game, as the latter logged a season-high workload. Chubb frequently found running room at a premium against a stingy Steelers front, but he did enough to help keep the chains moving and crossed the 90-yard threshold for the sixth time this season. While Hunt's role figures to continue expanding over the season's remaining games, Chubb will head into a highly favorable Week 12 matchup against the Dolphins a week from Sunday as the top backfield option for Cleveland.",
    "timestamp": "2019-11-14 09:11 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.0, 17.8, 15.1, 37.8, 10.4, 26.4, 'BYE', 10.3, 11.1, 13.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.6, 20.2, 11.2, 16.0, 11.8, 13.6, 'BYE', 11.2, 15.6, 20.8, 19.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3117251.png",
    "name": "Christian McCaffrey",
    "depthchart": "Starter: RB-1",
    "team": "Carolina Panthers",
    "projected": 19.0,
    "opponent": "Atlanta Falcons",
    "home_away": "",
    "opp_rank": 20,
    "team_rank": 7,
    "avg_fp2": 27.39,
    "opp_rank_allowed_fp2": 17,
    "opp_avg_allowed_fp2": 20.43,
    "fanduelSalary": "$10500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0085CA",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 133, 202, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#0085CA",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/car.png",
    "headlineNews": "Gets in full practice",
    "report": "McCaffrey (foot) practiced fully Thursday, Brendan Marks of The Charlotte Observer reports.",
    "analysis": "McCaffrey has had limitations on his practice reps for three consecutive weeks at this point, but they were lifted on each occasion. As a result, his foot issue won't impact his availability for the Panthers' Week 11 divisional matchup with the Falcons, who have conceded 124.9 yards from scrimmage per game and nine touchdowns to running backs in nine contests this season.",
    "timestamp": "2019-11-14 10:33 AM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [37.9, 6.3, 26.3, 28.9, 44.7, 19.7, 'BYE', 25.5, 34.1, 23.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.8, 20.0, 16.6, 17.6, 18.0, 14.2, 'BYE', 17.2, 13.2, 28.1, 19.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116593.png",
    "name": "Dalvin Cook",
    "depthchart": "Starter: RB-1",
    "team": "Minnesota Vikings",
    "projected": 16.7,
    "opponent": "Denver Broncos",
    "home_away": "",
    "opp_rank": 17,
    "team_rank": 3,
    "avg_fp2": 21.95,
    "opp_rank_allowed_fp2": 12,
    "opp_avg_allowed_fp2": 19.83,
    "fanduelSalary": "$8600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e0aa19",
    "tmColorDark": "#300e5a",
    "tmColorLite_rgba": "rgba(224, 170, 25, 0.2)",
    "tmColorDark_rgba": "rgba(48, 14, 90, 0.2)",
    "tmTextLite": "#e0aa19",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/min.png",
    "headlineNews": "Carries offense in big way",
    "report": "Cook rushed 26 times for 97 yards and a touchdown and caught seven passes for 86 receiving yards in Sunday's 28-24 win over the Cowboys.",
    "analysis": "Cook didn't have very many holes to run through against the Cowboys' front seven (3.7 yards per carry), but he was able to put up a huge fantasy line through sheer volume and a trip to the end zone (10th rushing touchdown of the season). The NFL's leading rusher also led his team in receiving, tying his season high of 86 receiving yards. Cook was the clear-cut winner in a star running back showdown with Ezekiel Elliott (63 total yards), and the former is making a strong case for fantasy MVP with 1,415 total yards from scrimmage and 10 touchdowns through 10 contests. Next week's opponent, the Denver Broncos, have a middle-of-the-pack run defense, so Cook should be near the top of the list of projected scores for Week 11.",
    "timestamp": "2019-11-10 09:14 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [25.0, 26.6, 22.3, 16.0, 22.8, 12.4, 27.4, 25.6, 13.6, 27.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.4, 11.6, 11.5, 10.0, 13.0, 11.0, 11.0, 14.0, 16.6, 11.2, 16.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3139605.png",
    "name": "Marlon Mack",
    "depthchart": "Starter: RB-1",
    "team": "Indianapolis Colts",
    "projected": 16.7,
    "opponent": "Jacksonville Jaguars",
    "home_away": "",
    "opp_rank": 22,
    "team_rank": 10,
    "avg_fp2": 12.1,
    "opp_rank_allowed_fp2": 13,
    "opp_avg_allowed_fp2": 19.86,
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
    "headlineNews": "Keeps seeing volume",
    "report": "Mack rushed the ball 19 times for 74 yards in the team's Week 10 loss to the Dolphins. He also added one reception for eight yards.",
    "analysis": "Mack once again dominated the Colts' backfield, with no other back accruing more than three carries. However, he wasn't particularly efficient -- he averaged only 3.9 yards per carry -- and failed to reach the end zone for the fifth time in his last six games. The team's struggle to move the ball effectively as well as Mack's lack of involvement in the passing game continue to limit his ability to turn in big performances. However, volume remains on his side, and that should remain the case as the team heads into its Week 11 contest against the Jaguars.",
    "timestamp": "2019-11-10 04:44 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [25.4, 7.3, 15.8, 3.9, 16.3, 'BYE', 7.1, 15.5, 8.9, 8.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.3, 9.8, 13.0, 14.2, 15.0, 'BYE', 12.3, 7.9, 10.3, 11.6, 16.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4047365.png",
    "name": "Josh Jacobs",
    "depthchart": "Starter: RB-1",
    "team": "Oakland Raiders",
    "projected": 16.7,
    "opponent": "Cincinnati Bengals",
    "home_away": "",
    "opp_rank": 32,
    "team_rank": 8,
    "avg_fp2": 15.92,
    "opp_rank_allowed_fp2": 30,
    "opp_avg_allowed_fp2": 26.33,
    "fanduelSalary": "$8000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A5ACAF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/oak.png",
    "headlineNews": "Cleared for Week 11 action",
    "report": "Jacobs (shoulder) doesn't carry an injury designation into Sunday's home game against Cincinnati.",
    "analysis": "Jacobs was listed as a limited practice participant all week as he continues to manage a shoulder issue, but he'll be out there Sunday. Assuming he endures no in-game setbacks, Jacobs will profile as a high-end fantasy option at running back in Week 11 while facing off against a toothless Cincinnati defense. To date, the 0-9 Bengals have allowed a league-high 173.0 yards per game on the ground.",
    "timestamp": "2019-11-15 01:28 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [23.8, 9.9, 4.4, 11.8, 27.8, 'BYE', 14.9, 9.1, 24.0, 17.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.0, 15.5, 11.9, 12.0, 10.1, 'BYE', 10.2, 8.9, 16.6, 18.4, 16.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3115364.png",
    "name": "Leonard Fournette",
    "depthchart": "Starter: RB-1",
    "team": "Jacksonville Jaguars",
    "projected": 16.6,
    "opponent": "Indianapolis Colts",
    "home_away": "at ",
    "opp_rank": 15,
    "team_rank": 10,
    "avg_fp2": 15.18,
    "opp_rank_allowed_fp2": 8,
    "opp_avg_allowed_fp2": 17.62,
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
    "headlineNews": "Season-low rushing total in London",
    "report": "Fournette rushed 11 times for 40 yards and caught five of six targets for 32 yards in Sunday's 26-3 loss to the Texans at Wembley Stadium.",
    "analysis": "Fournette was unable to build up much volume on the ground with his team trailing throughout, finishing with season lows in both carries and rushing yards. He tied for the team lead in receptions and has now amassed a new career high with 40 catches this season, but the lack of yardage certainly stings after five consecutive games with no fewer than 118 scrimmage yards. Fournette will get an opportunity to regroup during his team's Week 10 bye before traveling to Indianapolis in Week 11.",
    "timestamp": "2019-11-03 09:46 AM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.4, 10.7, 12.2, 25.5, 21.7, 14.8, 15.5, 17.1, 9.7, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.8, 20.3, 9.3, 11.8, 13.6, 9.1, 15.3, 16.4, 10.4, 'BYE', 16.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3045147.png",
    "name": "James Conner",
    "depthchart": "Starter: RB-1",
    "team": "Pittsburgh Steelers",
    "projected": 16.4,
    "opponent": "Cleveland Browns",
    "home_away": "at ",
    "opp_rank": 27,
    "team_rank": 27,
    "avg_fp2": 15.73,
    "opp_rank_allowed_fp2": 18,
    "opp_avg_allowed_fp2": 20.99,
    "fanduelSalary": "$7100",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Shoulder - AC Joint",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/pit.png",
    "headlineNews": "Struggles before exiting early",
    "report": "Conner ran for 10 yards on five carries and caught one of two targets for six yards Thursday in Pittsburgh's 21-7 loss to Cleveland before departing in the first half after aggravating a right shoulder injury.",
    "analysis": "Returning after missing the last two games with an AC joint sprain in his shoulder, Conner struggled to find room to run, with seven of his 10 yards coming on one carry. He re-injured the shoulder in the second quarter and was initially labeled questionable to return before being ruled out for the remainder of the contest. With 10 days before Pittsburgh's next outing Week 12 versus the Bengals, fantasy owners will need to take a wait-and-see approach with regard to Conner's availability for that matchup. Cincinnati has surrendered a league-high 173.0 yards per game on the ground to date.",
    "timestamp": "2019-11-14 09:39 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.5, 12.0, 5.7, 22.5, 11.5, 27.4, 'BYE', 22.5, 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.1, 12.6, 5.2, 13.1, 21.1, 9.9, 'BYE', 8.0, 'DNP', 'DNP', 16.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15825.png",
    "name": "Le'Veon Bell",
    "depthchart": "Starter: RB-1",
    "team": "New York Jets",
    "projected": 15.5,
    "opponent": "Washington Redskins",
    "home_away": "at ",
    "opp_rank": 28,
    "team_rank": 31,
    "avg_fp2": 12.5,
    "opp_rank_allowed_fp2": 26,
    "opp_avg_allowed_fp2": 24.29,
    "fanduelSalary": "$7400",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Ribs",
    "tmColorLite": "#125740",
    "tmColorDark": "#003f2d",
    "tmColorLite_rgba": "rgba(18, 87, 64, 0.2)",
    "tmColorDark_rgba": "rgba(0, 63, 45, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png",
    "headlineNews": "Listed as questionable for Week 11",
    "report": "Bell (ribs/knee/illness) is listed as questionable for Sunday's game against Washington, Manish Mehta of the New York Daily News reports.",
    "analysis": "The Jets' robust Week 11 injury report lists four players as out, one as doubtful and eight (including Bell) as questionable. Of that group, Bell -- who logged limited practices both Thursday and Friday -- is likely among the players who will suit up Sunday. Fortunately for those considering the Jets' top back in fantasy lineups this weekend, the team kicks off at 1 p.m. ET.",
    "timestamp": "2019-11-15 01:02 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [20.2, 15.9, 8.3, 'BYE', 12.3, 11.8, 8.1, 5.0, 16.1, 14.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [20.5, 22.8, 12.7, 'BYE', 16.6, 21.0, 15.9, 13.7, 17.7, 17.3, 15.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3128721.png",
    "name": "Sony Michel",
    "depthchart": "Starter: RB-1",
    "team": "New England Patriots",
    "projected": 15.4,
    "opponent": "Philadelphia Eagles",
    "home_away": "at ",
    "opp_rank": 5,
    "team_rank": 23,
    "avg_fp2": 10.24,
    "opp_rank_allowed_fp2": 7,
    "opp_avg_allowed_fp2": 17.5,
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
    "headlineNews": "Limited to five touches Sunday",
    "report": "Michel had four carries for 18 yards and caught one pass for 12 yards in Sunday's 37-20 loss to the Ravens.",
    "analysis": "The Patriots fell behind early and were constantly playing catch-up with the Ravens' offensive onslaught. This led to a pass-heavy gameplan that excluded the team's early down back. Michel averaged 17.5 carries over his previous eight contests, so this game certainly screams outlier. That said, New England had one of the easier schedules during the first half of the season, and it is about to take on four teams after the upcoming bye week that can put up points in bunches. Shootouts tend to favor the pass-catching James White more than Michel, but the latter should continue getting goal-line looks even if his carries take a slight hit in the near future.",
    "timestamp": "2019-11-03 11:00 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.4, 12.5, 7.1, 6.3, 19.8, 12.3, 21.9, 7.4, 3.5, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.9, 15.8, 11.6, 5.5, 8.2, 11.1, 7.9, 10.8, 6.5, 'BYE', 15.4]
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
    "home_away": "",
    "opp_rank": 24,
    "team_rank": 2,
    "avg_fp2": 13.3,
    "opp_rank_allowed_fp2": 20,
    "opp_avg_allowed_fp2": 21.73,
    "fanduelSalary": "$6700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "Returns to practice",
    "report": "Coleman (personal) was on the field for Friday's practice, Cam Inman of The San Jose Mercury News reports.",
    "analysis": "Coleman stepped away from the team Thursday to address a personal matter, but his return to work Friday along with the fact that he doesn't carry an injury designation into Sunday's game against the Cardinals erases any concern about his Week 11 availability. With Matt Breida (ankle) listed as doubtful and Raheem Mostert (knee) listed as questionable this weekend, Coleman appears well positioned to handle one of his heavier workloads of the season. Since maxing out at 20 carries in the rain-soaked Week 7 win over Washington, Coleman has averaged 10.7 totes across San Francisco's subsequent three contests.",
    "timestamp": "2019-11-15 02:07 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.6, 'DNP', 'DNP', 'BYE', 15.7, 13.1, 7.1, 36.8, 4.6, 9.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.2, 'DNP', 'DNP', 'BYE', 3.0, 8.3, 8.8, 12.2, 15.8, 14.7, 15.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3125403.png",
    "name": "Brian Hill",
    "depthchart": "Starter: RB-1",
    "team": "Atlanta Falcons",
    "projected": 14.9,
    "opponent": "Carolina Panthers",
    "home_away": "at ",
    "opp_rank": 29,
    "team_rank": 29,
    "avg_fp2": 5.2,
    "opp_rank_allowed_fp2": 29,
    "opp_avg_allowed_fp2": 25.58,
    "fanduelSalary": "$5900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/atl.png",
    "headlineNews": "Ready to replace Freeman",
    "report": "Hill will step in for Devonta Freeman (foot) in Sunday's game against the Panthers, D. Orlando Ledbetter of The Atlanta Journal-Constitution reports.",
    "analysis": "Freeman was officially ruled out Friday and is in danger of missing time beyond Week 11. Hill took over after the veteran's mid-game foot sprain last week against the Saints, ultimately picking up 60 yards on 20 carries and catching one of two targets for a 10-yard touchdown. According to McClure, coach Dan Quinn mentioned that Qadree Ollison also will have a Week 11 role, and Kenjon Barner could get some work on passing downs. Hill may not get three-down usage, but he's at least a clear favorite to lead the team in carries, facing a Panthers defense that's allowed 5.2 yards per carry (32nd) and 136.7 rushing yards per game (29th).",
    "timestamp": "2019-11-15 10:02 AM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 0.0, 0.0, 'DNP', 3.5, 8.9, 'BYE', 13.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 2.1, 1.8, 'DNP', -0.2, 1.7, 'BYE', 4.8, 14.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2977644.png",
    "name": "Todd Gurley",
    "depthchart": "Starter: RB-1",
    "team": "Los Angeles Rams",
    "projected": 14.6,
    "opponent": "Chicago Bears",
    "home_away": "",
    "opp_rank": 9,
    "team_rank": 20,
    "avg_fp2": 12.3,
    "opp_rank_allowed_fp2": 22,
    "opp_avg_allowed_fp2": 21.86,
    "fanduelSalary": "$3",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Low volume in Sunday's loss",
    "report": "Gurley carried the ball 12 times for 73 yards and failed to catch any of his four targets in Sunday's 17-12 loss to the Steelers.",
    "analysis": "While he had success when he did get the ball, Gurley once again had his workload limited, particularly in the second half after Rams center Brian Allen (knee) left the game. Meanwhile, Malcolm Brown and Darrell Henderson combined for nine carries, managing only 14 rushing yards between them. Gurley has yet to see 20 touches in a game this season, and that may not change next week when the Rams host a Bears squad trying to stay in the playoff picture.",
    "timestamp": "2019-11-10 07:25 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.6, 14.2, 4.3, 22.5, 17.2, 'DNP', 11.9, 10.4, 'BYE', 7.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.2, 14.3, 12.4, 9.6, 15.6, 'DNP', 23.0, 12.8, 'BYE', 10.9, 14.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3054850.png",
    "name": "Alvin Kamara",
    "depthchart": "Starter: RB-1",
    "team": "New Orleans Saints",
    "projected": 13.2,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "at ",
    "opp_rank": 1,
    "team_rank": 17,
    "avg_fp2": 15.07,
    "opp_rank_allowed_fp2": 3,
    "opp_avg_allowed_fp2": 13.07,
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
    "headlineNews": "Receiving output salvages day",
    "report": "Kamara ran for 24 yards on four carries and corralled eight of 10 targets for 50 receiving yards during Sunday's 26-9 loss to Atlanta.",
    "analysis": "The ground attack was practically nonexistent for New Orleans in Week 10, as Kamara and Latavius Murray combined for just 36 yards on nine attempts against a Falcons defense that had conceded more than 150 team rushing yards to Seattle during its last game Oct. 27. Kamara was able to compile double-digit targets for the second time this season, but the continued lack of rushing production is perplexing, as he has not exceeded 70 rushing yards since Week 1 and possesses just one score on the ground all year. Coming into his second game back from knee and ankle injuries that forced him to sit out Weeks 7 and 8, Kamara may once again find trouble getting much going as a rusher with the Saints facing off against a Tampa Bay defense that allowed just 37 combined rushing yards to Cardinals running backs Kenyan Drake and David Johnson on Sunday.",
    "timestamp": "2019-11-10 02:20 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [20.6, 6.5, 32.6, 10.4, 13.92, 10.1, 'DNP', 'DNP', 'BYE', 11.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [21.0, 20.6, 12.9, 13.3, 17.0, 12.2, 'DNP', 'DNP', 'BYE', 18.7, 13.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116385.png",
    "name": "Joe Mixon",
    "depthchart": "Starter: RB-1",
    "team": "Cincinnati Bengals",
    "projected": 12.9,
    "opponent": "Oakland Raiders",
    "home_away": "at ",
    "opp_rank": 10,
    "team_rank": 30,
    "avg_fp2": 9.63,
    "opp_rank_allowed_fp2": 21,
    "opp_avg_allowed_fp2": 21.77,
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
    "headlineNews": "Racks up 151 yards in loss",
    "report": "Mixon ran for 114 yards on 30 carries and added 37 yards on two catches during Sunday's 49-13 loss to Baltimore.",
    "analysis": "Mixon topped 100 total yards for just the second time this season while setting a career high with 32 touches. Expect the Bengals to keep feeding Mixon down the stretch of what appears to be a lost season. Rookie Ryan Finley figures to start the rest of the way, and a running back of Mixon's talents is a heck of a weapon as both a runner and security blanket in the passing game. Sunday brings a matchup against a Raiders defense that ranks seventh in the league in opponent yards per carry allowed (3.9), a total that actually eclipses Mixon's 3.3 yard-per-carry average this season.",
    "timestamp": "2019-11-10 04:56 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.7, 4.2, 16.5, 8.3, 11.4, 4.9, 6.9, 15.7, 'BYE', 16.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.0, 15.0, 9.7, 13.1, 13.3, 9.4, 12.4, 11.9, 'BYE', 13.5, 12.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13981.png",
    "name": "Mark Ingram",
    "depthchart": "Starter: RB-1",
    "team": "Baltimore Ravens",
    "projected": 12.8,
    "opponent": "Houston Texans",
    "home_away": "",
    "opp_rank": 3,
    "team_rank": 1,
    "avg_fp2": 14.16,
    "opp_rank_allowed_fp2": 9,
    "opp_avg_allowed_fp2": 19.63,
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
    "headlineNews": "Scores in blowout win",
    "report": "Ingram ran for 34 yards and a touchdown during Sunday's 49-13 win over Cincinnati.",
    "analysis": "Ingram barreled into the end zone for a one-yard score to cap off Baltimore's second drive of the game, his eighth of the season. The veteran back hasn't always been particularly efficient this season, but he's topped 70 total yards or scored in all but one game in 2019 and Sunday's blowout was the first time this season that Ingram didn't record at least 13 touches. He's a steady start week-to-week, but he will face off against a pretty stout Houston run defense next Sunday.",
    "timestamp": "2019-11-10 04:14 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [22.7, 8.7, 33.5, 7.6, 11.9, 14.4, 5.8, 'BYE', 13.4, 9.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.6, 10.6, 7.4, 10.7, 11.7, 17.1, 12.0, 'BYE', 10.5, 12.4, 12.8]
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
    "opponent": "Los Angeles Rams",
    "home_away": "at ",
    "opp_rank": 5,
    "team_rank": 28,
    "avg_fp2": 10.77,
    "opp_rank_allowed_fp2": 9,
    "opp_avg_allowed_fp2": 18.92,
    "fanduelSalary": "$2",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Ankle",
    "tmColorLite": "#c36835",
    "tmColorDark": "#0B162A",
    "tmColorLite_rgba": "rgba(195, 104, 53, 0.2)",
    "tmColorDark_rgba": "rgba(11, 22, 42, 0.2)",
    "tmTextLite": "#c36835",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png",
    "headlineNews": "Headed for game-time call",
    "report": "Montgomery (ankle) will be a game-time decision Sunday night against the Rams, Nathan Smith of the Bears' official site reports. \"It was good to get him back out there and just kind of see where he's at,\" coach Matt Nagy said after Friday's practice. \"He's gonna end up being a game-time decision for us.\"",
    "analysis": "Montgomery was held out of Thursday's practice after he injured his ankle Wednesday. The return to a limited session Friday sets him up as truly questionable, with Tarik Cohen and Ryan Nall the alternate options in Chicago's backfield. An 8:20 p.m. ET kickoff creates issues for fantasy managers, and there's no assurance of a full workload even if Montgomery ends up playing. It's a brutal matchup in any case, with the Rams limiting backs to 3.6 yards per carry (fourth-best) and allowing the 10th-fewest fantasy points to the position.",
    "timestamp": "2019-11-15 02:51 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.0, 13.3, 9.6, 8.2, 10.1, 'BYE', 0.9, 22.7, 21.1, 6.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.0, 2.4, 7.7, 10.0, 7.8, 'BYE', 9.7, 9.5, 12.5, 15.4, 12.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3912550.png",
    "name": "Ronald Jones",
    "depthchart": "Starter: RB-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 12.2,
    "opponent": "New Orleans Saints",
    "home_away": "",
    "opp_rank": 6,
    "team_rank": 19,
    "avg_fp2": 10.12,
    "opp_rank_allowed_fp2": 2,
    "opp_avg_allowed_fp2": 13.01,
    "fanduelSalary": "$6400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#D50A0A",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(213, 10, 10, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#D50A0A",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Heavy use as receiver",
    "report": "Jones rushed 11 times for 29 yards and a touchdown and secured all eight targets for 77 yards in the Buccaneers' 30-27 win over the Cardinals on Sunday. He also lost a fumble.",
    "analysis": "Jones' lost fumble didn't help his cause in his first official game as the starting running back, but he still put together a strong fantasy effort thanks to a seven-yard rushing touchdown in the first quarter and a team/career-high eight receptions. Jones ultimately logged the same number of carries as backfield mate Peyton Barber, however, so it appears Bruce Arians' definition of lead back is a bit more fluid than other coaches. Jones will look for more overall opportunities in a Week 11 matchup versus a tough Saints defense.",
    "timestamp": "2019-11-10 03:10 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.8, 0.9, 12.6, 14.7, 6.6, 7.0, 'BYE', 5.7, 15.2, 18.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.9, 7.3, 7.2, 6.0, 7.8, 15.1, 'BYE', 7.5, 6.7, 8.8, 12.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3916430.png",
    "name": "Nyheim Hines",
    "depthchart": "Backup: RB-2",
    "team": "Indianapolis Colts",
    "projected": 11.7,
    "opponent": "Jacksonville Jaguars",
    "home_away": "",
    "opp_rank": 22,
    "team_rank": 10,
    "avg_fp2": 4.66,
    "opp_rank_allowed_fp2": 13,
    "opp_avg_allowed_fp2": 19.86,
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
    "headlineNews": "Seven touches in Sunday's loss",
    "report": "Hines had three carries for 14 yards and four receptions for 30 yards on seven targets in Sunday's loss to Miami.",
    "analysis": "Hines saw an increase in targets with Brian Hoyer at quarterback as he didn't throw much down field. With Jordan Wilkins hurting his ankle in the game, Hines could see more snaps next week against Jacksonville, but he's still having a smaller secondary role behind starter Marlon Mack.",
    "timestamp": "2019-11-11 11:08 AM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.7, 1.9, 4.4, 7.5, 6.5, 'BYE', 2.1, 6.1, 3.3, 6.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.8, 6.8, 5.8, 8.7, 7.9, 'BYE', 6.4, 2.3, 6.9, 7.7, 11.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3052117.png",
    "name": "Phillip Lindsay",
    "depthchart": "Starter: RB-1",
    "team": "Denver Broncos",
    "projected": 11.5,
    "opponent": "Minnesota Vikings",
    "home_away": "at ",
    "opp_rank": 7,
    "team_rank": 16,
    "avg_fp2": 12.99,
    "opp_rank_allowed_fp2": 5,
    "opp_avg_allowed_fp2": 16.05,
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
    "headlineNews": "Seals win with TD",
    "report": "Lindsay carried the ball nine times for 92 yards and a touchdown in Sunday's 24-19 win over the Browns.",
    "analysis": "He was far more productive than Royce Freeman (14 scrimmage yards on six touches) in this one, and Lindsay's 30-yard TD scamper in the third quarter gave the Broncos just enough cushion to hang on for the win. It's his best rushing performance since Week 5, but Lindsay's snap share will remain limited as long as the wrist injury he's been playing through restricts his ability to pass protect. He'll get a bye week to heal up before Denver heads to Minnesota in Week 11.",
    "timestamp": "2019-11-03 06:56 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.6, 8.6, 27.0, 6.5, 22.7, 14.5, 3.7, 10.1, 15.2, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.9, 14.1, 9.5, 14.3, 14.7, 15.0, 15.1, 14.3, 13.8, 'BYE', 11.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16777.png",
    "name": "Carlos Hyde",
    "depthchart": "Starter: RB-1",
    "team": "Houston Texans",
    "projected": 11.5,
    "opponent": "Baltimore Ravens",
    "home_away": "at ",
    "opp_rank": 8,
    "team_rank": 5,
    "avg_fp2": 10.07,
    "opp_rank_allowed_fp2": 10,
    "opp_avg_allowed_fp2": 19.17,
    "fanduelSalary": "$6300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#03202F",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(3, 32, 47, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/hou.png",
    "headlineNews": "Season-best rushing total in London",
    "report": "Hyde rushed 19 times for 160 yards but wasn't targeted in the passing game and lost a fumble in Sunday's 26-3 win over the Jaguars in London.",
    "analysis": "Hyde could have had an even bigger day but watched Duke Johnson vulture a 1-yard touchdown in the third quarter. That was Johnson's first rushing score of the season, so it's hardly cause for concern, especially considering Hyde broke out for a season-high rushing total in this one, topping the 100-yard mark for just the second time in 2019. The 29-year-old running back will get to rest up during a Week 10 bye before returning stateside to face the Ravens in Week 11.",
    "timestamp": "2019-11-03 09:54 AM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 9.0, 7.9, 8.4, 12.0, 17.5, 3.5, 8.3, 14.0, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 7.0, 9.8, 4.9, 9.1, 10.0, 11.6, 13.9, 6.8, 'BYE', 11.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2576434.png",
    "name": "Melvin Gordon",
    "depthchart": "Starter: RB-1",
    "team": "Los Angeles Chargers",
    "projected": 11.4,
    "opponent": "Kansas City Chiefs",
    "home_away": "",
    "opp_rank": 31,
    "team_rank": 26,
    "avg_fp2": 12.43,
    "opp_rank_allowed_fp2": 32,
    "opp_avg_allowed_fp2": 27.23,
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
    "headlineNews": "Keeps building momentum in loss",
    "report": "Gordon rushed 22 times for 108 yards and a touchdown and secured his only target for 25 yards in the Chargers' 26-24 loss to the Raiders on Thursday.",
    "analysis": "Gordon led all rushers on the night in ground yards, as he continues to ascend back to the high bar he's previously set for himself. The fifth-year back now has three rushing scores over the last two games, and Thursday's 100-yard effort was the first of his truncated campaign. Gordon has also encouragingly logged at least 20 carries in back-to-back games just four days apart, and he'll look to come back even stronger after the extended layoff in a Week 11 Monday night showdown with the Chiefs on Nov. 18.",
    "timestamp": "2019-11-07 09:00 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 5.8, 6.3, 7.9, 10.4, 24.4, 19.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 11.4, 10.9, 9.8, 11.4, 9.3, 15.2, 11.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3060022.png",
    "name": "Jordan Howard",
    "depthchart": "Starter: RB-1",
    "team": "Philadelphia Eagles",
    "projected": 11.0,
    "opponent": "New England Patriots",
    "home_away": "",
    "opp_rank": 12,
    "team_rank": 12,
    "avg_fp2": 11.82,
    "opp_rank_allowed_fp2": 2,
    "opp_avg_allowed_fp2": 12.46,
    "fanduelSalary": "$6100",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Shoulder",
    "tmColorLite": "#386168",
    "tmColorDark": "#004C54",
    "tmColorLite_rgba": "rgba(56, 97, 104, 0.2)",
    "tmColorDark_rgba": "rgba(0, 76, 84, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    "headlineNews": "Questionable after limited practice",
    "report": "Howard (shoulder) is listed as questionable for Sunday's game against the Patriots after logging limited practice participation throughout the week.",
    "analysis": "Recovering from a stinger, Howard never made it back to full practice participation, with coach Doug Pederson noting Friday morning that the running back hadn't been cleared for contact. The signing of Jay Ajayi might be taken as an ominous sign, though it could also be related to Darren Sproles (hip) landing on injured reserve. Barring any additional updates, Howard should be treated as a game-time decision ahead of Sunday's 4:25 p.m. ET kickoff. Miles Sanders would handle the lead role in the event of a Howard absence, with Boston Scott and/or Ajayi filling in behind the rookie.",
    "timestamp": "2019-11-15 02:18 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.5, 3.1, 9.7, 31.0, 12.2, 4.9, 6.6, 17.6, 14.8, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.5, 7.5, 5.2, 7.6, 11.2, 9.7, 14.8, 9.7, 10.0, 'BYE', 11.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/17359.png",
    "name": "Damien Williams",
    "depthchart": "Starter: RB-1",
    "team": "Kansas City Chiefs",
    "projected": 10.9,
    "opponent": "Los Angeles Chargers",
    "home_away": "at ",
    "opp_rank": 19,
    "team_rank": 24,
    "avg_fp2": 8.5,
    "opp_rank_allowed_fp2": 25,
    "opp_avg_allowed_fp2": 23.46,
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
    "headlineNews": "Excused absence from practice",
    "report": "Williams (not injury-related) won't practice Friday, BJ Kissel of the Chiefs' official site reports",
    "analysis": "Per the report, the running back's Friday absence is an excused one, so at this stage it doesn't appear his availability for Monday night's game against the Chargers is in question. Saturday's final Week 11 injury report should confirm that notion, one way or the other.",
    "timestamp": "2019-11-15 10:01 AM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [15.5, 7.1, 'DNP', 'DNP', 5.3, 6.3, 1.6, 1.0, 19.8, 11.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.1, 8.5, 'DNP', 'DNP', 12.3, 11.5, 6.6, 9.9, 8.6, 7.7, 10.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2508176.png",
    "name": "David Johnson",
    "depthchart": "Starter: RB-1",
    "team": "Arizona Cardinals",
    "projected": 10.8,
    "opponent": "San Francisco 49ers",
    "home_away": "at ",
    "opp_rank": 18,
    "team_rank": 14,
    "avg_fp2": 13.25,
    "opp_rank_allowed_fp2": 4,
    "opp_avg_allowed_fp2": 14.31,
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
    "headlineNews": "Part of 'committee' with Drake",
    "report": "Coach Kliff Kingsbury said after Friday's practice that Johnson will be included in a \"committee\" at running back with Kenyan Drake during Sunday's game against the 49ers, Josh Weinfuss of ESPN.com reports.",
    "analysis": "The absence of Chase Edmonds (hamstring) at least spares Johnson and Drake of another potential threat, but both backs may struggle to deliver useful fantasy production while sharing work against a stout 49ers defense. Though Drake appeared to be working with the first-team offense in the portion of practice Friday that was open to the media, Kingsbury declined to name a starter and said both backs would have distinct packages in Sunday's game. If the workload distribution during last week's loss to the Buccaneers provides any indication of how things will shake out versus San Francisco, Drake -- who played 64 percent of the offensive snaps and totaled 16 touches -- would offer a higher floor than Johnson (43 percent, six touches).",
    "timestamp": "2019-11-15 01:36 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [22.7, 7.9, 15.5, 17.9, 17.1, 25.2, 0.2, 'DNP', 'DNP', -0.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.3, 14.9, 13.0, 12.0, 18.7, 15.2, 15.6, 'DNP', 'DNP', 10.8, 10.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4040761.png",
    "name": "Devin Singletary",
    "depthchart": "Starter: RB-1",
    "team": "Buffalo Bills",
    "projected": 10.2,
    "opponent": "Miami Dolphins",
    "home_away": "at ",
    "opp_rank": 30,
    "team_rank": 12,
    "avg_fp2": 11.25,
    "opp_rank_allowed_fp2": 27,
    "opp_avg_allowed_fp2": 24.49,
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
    "headlineNews": "Produces with limited usage",
    "report": "Singletary carried eight times for 42 yards and caught three passes for an additional eight yards during Sunday's 19-16 loss to the Browns.",
    "analysis": "Although Singletary gashed the Cleveland defense for 5.3 yards per carry, his team took an uncharacteristically pass-heavy approach, which limited his usage on the ground. He finished second on the team with seven targets, but he struggled to connect with Josh Allen on several occasions and finished with little to show for his efforts in that area. Singletary did significant damage on 23 touches in his previous outing and could rebound next Sunday in a favorable matchup with the Dolphins.",
    "timestamp": "2019-11-10 03:01 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.3, 11.7, 'DNP', 'DNP', 'DNP', 'BYE', 2.6, 12.9, 21.5, 6.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.8, 11.0, 'DNP', 'DNP', 'DNP', 'BYE', 5.5, 5.6, 7.7, 16.2, 10.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3059915.png",
    "name": "Kareem Hunt",
    "depthchart": "Backup: RB-2",
    "team": "Cleveland Browns",
    "projected": 9.4,
    "opponent": "Pittsburgh Steelers",
    "home_away": "",
    "opp_rank": 16,
    "team_rank": 13,
    "avg_fp2": 10.9,
    "opp_rank_allowed_fp2": 6,
    "opp_avg_allowed_fp2": 16.23,
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
    "headlineNews": "Heavy work as receiver in win",
    "report": "Hunt rushed six times for 12 yards and secured six of eight targets for 46 yards in the Browns' 21-7 win over the Steelers on Thursday.",
    "analysis": "Hunt was a distant second behind lead back Nick Chubb, who logged a season-high 27 carries. However, Hunt was a major part of the passing game for the second time in as many games since returning from his season-opening suspension, leading the Browns in receptions and checking in second only to Odell Beckham in receiving yardage. Head coach Freddie Kitchens appears set on sticking with Chubb as his clear-cut lead back for the moment, but Hunt should continue seeing his role in the offense expand with each successive game. His next opportunity to up his production will come in a favorable matchup against the Dolphins in Week 12, a week from Sunday.",
    "timestamp": "2019-11-14 09:17 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 10.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 10.5, 9.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3128774.png",
    "name": "Kalen Ballage",
    "depthchart": "Starter: RB-1",
    "team": "Miami Dolphins",
    "projected": 9.2,
    "opponent": "Buffalo Bills",
    "home_away": "",
    "opp_rank": 21,
    "team_rank": 32,
    "avg_fp2": 3.5,
    "opp_rank_allowed_fp2": 24,
    "opp_avg_allowed_fp2": 22.71,
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
    "headlineNews": "Will remain priority on ground",
    "report": "Coach Brian Flores said Wednesday that the Dolphins will continue to lean heavily on Ballage as their lead option out of the backfield, Barry Jackson of the Miami Herald reports. \"Kalen's done a good job at practice; it hasn't materialized in games,\" Flores said. \"We keep giving it to him, and I think it will turn. He's a good player. He's shown it in practice. We'll keep feeding him and I think he will break through at some point.\"",
    "analysis": "While Mark Walton missed the first of four games due to suspension in the Dolphins' win last week over the Colts, Ballage stepped in as the clear No. 1 back, playing 54 of 66 offensive snaps but gaining just 43 yards on 20 carries. Ballage's lack of productivity on the ground has been a recurring theme throughout the season, as his 2.1 yards-per-carry average ranks last among all backs with at least 10 totes. Fortunately for Ballage, none of the other three active backs on the roster -- Patrick Laird, Myles Gaskin and De'Lance Turner -- possess much in the way of pedigree or prior NFL experience, so he should remain relatively unchallenged for top duties until Walton is eligible to return to action Dec. 8 versus the Jets.",
    "timestamp": "2019-11-14 01:58 PM",
    "week01": 1.7,
    "week02": 1.7,
    "week03": 3.2,
    "week04": 0.7,
    "week05": "BYE",
    "week06": 6.7,
    "week07": 6.7,
    "week08": 2.4,
    "week09": 1.9,
    "week10": 6.5,
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.7, 1.7, 3.2, 0.7, 'BYE', 6.7, 6.7, 2.4, 1.9, 6.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.7, 1.4, 5.0, 3.2, 'BYE', 2.5, 3.8, 4.3, 3.0, 7.6, 9.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16913.png",
    "name": "James White",
    "depthchart": "Backup: RB-2",
    "team": "New England Patriots",
    "projected": 9.1,
    "opponent": "Philadelphia Eagles",
    "home_away": "at ",
    "opp_rank": 5,
    "team_rank": 23,
    "avg_fp2": 10.6,
    "opp_rank_allowed_fp2": 7,
    "opp_avg_allowed_fp2": 17.5,
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
    "headlineNews": "Scores rare rushing touchdown",
    "report": "White had nine carries for 38 yards and a touchdown, adding 46 more yards on two receptions (three targets) in Sunday's 37-20 loss to the Ravens.",
    "analysis": "White churned out a rare performance in which he had more of an impact on the ground than through the air. The 27-year-old picked a great time to score his first rushing touchdown of the season, as he was limited to a season-low three targets and two receptions. White popped up on the injury report Friday with a minor toe injury, but he didn't seem to be hampered by the issue. New England suffered its first loss of the season and was playing from behind for most of the contest, which is why its receiving back saw the most touches Sunday. The Patriots had one of the easier schedules over the first half of the season, leaning on its elite defense and ball-control style of offense. Things may change following the upcoming bye week with a slew of high-octane offenses on tap (at Eagles, vs. Cowboys, at Texans, vs. Chiefs). Those types of matchups bode well for White getting more involved in the gameplan.",
    "timestamp": "2019-11-03 10:41 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.7, 10.4, 'DNP', 9.8, 10.2, 9.0, 9.4, 9.9, 15.4, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.5, 11.7, 'DNP', 5.4, 8.8, 8.1, 4.8, 4.8, 4.5, 'BYE', 9.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2576414.png",
    "name": "Raheem Mostert",
    "depthchart": "Backup: RB-2",
    "team": "San Francisco 49ers",
    "projected": 8.7,
    "opponent": "Arizona Cardinals",
    "home_away": "",
    "opp_rank": 24,
    "team_rank": 2,
    "avg_fp2": 5.94,
    "opp_rank_allowed_fp2": 20,
    "opp_avg_allowed_fp2": 21.73,
    "fanduelSalary": "$4600",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Knee",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "Officially deemed questionable",
    "report": "Mostert (knee) is listed as questionable for Sunday's game against the Cardinals, Nick Wagoner of ESPN.com reports.",
    "analysis": "Mostert followed the same routine last week, logging limited practice participation before the 49ers listed him as questionable on their final injury report. He ended up playing in a 27-24 loss to Seattle, taking six carries for 28 yards and one reception for seven yards. With Matt Breida (ankle) listed as doubtful for Week 11, it appears Mostert will handle the No. 2 backfield role behind Tevin Coleman. All eyes will be on the 49ers' inactive list approximately 90 minutes before Sunday's 4:05 p.m. ET kickoff, with George Kittle (knee/ankle) also listed as doubtful and both Emmanuel Sanders (ribs) and Dante Pettis (groin) considered questionable. Any skill-position players that end up playing could see extra carries and/or targets, Mostert included.",
    "timestamp": "2019-11-15 01:52 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.5, 22.6, 5.9, 'BYE', 3.4, 1.3, 0.0, 12.0, -0.2, 4.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.7, 2.1, 6.4, 'BYE', 4.9, 4.1, 4.6, 2.9, 5.1, 3.3, 8.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3915411.png",
    "name": "Ty Johnson",
    "depthchart": "Starter: RB-1",
    "team": "Detroit Lions",
    "projected": 8.6,
    "opponent": "Dallas Cowboys",
    "home_away": "",
    "opp_rank": 14,
    "team_rank": 20,
    "avg_fp2": 3.07,
    "opp_rank_allowed_fp2": 23,
    "opp_avg_allowed_fp2": 22.09,
    "fanduelSalary": "$5400",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Concussion",
    "tmColorLite": "#0076B6",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(0, 118, 182, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#0076B6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/det.png",
    "headlineNews": "Questionable for Week 11",
    "report": "Johnson (concussion) is listed as questionable for Sunday's game against the Cowboys.",
    "analysis": "The rookie will still need to gain clearance from an independent neurologist before getting the green light to play this weekend, but he looks on track to return to action after a concussion knocked him out early in the Week 10 loss to the Bears. After opening the week as a non-participant in practice, Johnson advanced to limited work Thursday before taking full contact in Friday's session. If active, Johnson would likely share backfield snaps with J.D. McKissic and Paul Perkins.",
    "timestamp": "2019-11-15 01:09 PM",
    "week01": 0.6,
    "week02": 4.6,
    "week03": 1.0,
    "week04": 1.9,
    "week05": "BYE",
    "week06": 0.0,
    "week07": 7.7,
    "week08": 4.3,
    "week09": 5.1,
    "week10": 2.4,
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.6, 4.6, 1.0, 1.9, 'BYE', 0.0, 7.7, 4.3, 5.1, 2.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.4, 6.3, 4.5, 3.8, 'BYE', 2.9, 2.4, 10.7, 7.4, 10.9, 8.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/10452.png",
    "name": "Adrian Peterson",
    "depthchart": "Starter: RB-1",
    "team": "Washington Redskins",
    "projected": 8.0,
    "opponent": "New York Jets",
    "home_away": "",
    "opp_rank": 2,
    "team_rank": 25,
    "avg_fp2": 8.03,
    "opp_rank_allowed_fp2": 13,
    "opp_avg_allowed_fp2": 19.76,
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
    "headlineNews": "Avoids Week 11 designation",
    "report": "Peterson (toe) put in a full practice Friday.",
    "analysis": "Peterson's minor toe injury kept him from practicing Thursday and limited his participation Wednesday, but Washington never had much real concern about his status heading into Sunday's game against the Jets. He'll enter the weekend free of a designation and on track to handle a starting role, though Peterson may struggle to maintain the 20 touches per game he's averaged over the past four games. Washington reinstated Derrius Guice (knee) from injured reserve earlier this week, with interim coach Bill Callahan already pledging that the second-year back would occupy a change-of-pace role behind Peterson.",
    "timestamp": "2019-11-15 12:21 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 10.2, 3.9, 2.8, 1.8, 14.6, 6.1, 11.3, 13.5, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 12.0, 8.3, 9.3, 9.2, 11.1, 8.8, 7.2, 11.6, 'BYE', 8.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15826.png",
    "name": "Giovani Bernard",
    "depthchart": "Backup: RB-2",
    "team": "Cincinnati Bengals",
    "projected": 7.7,
    "opponent": "Oakland Raiders",
    "home_away": "at ",
    "opp_rank": 10,
    "team_rank": 30,
    "avg_fp2": 3.21,
    "opp_rank_allowed_fp2": 21,
    "opp_avg_allowed_fp2": 21.77,
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
    "headlineNews": "Not on injury report",
    "report": "Bernard (knee) isn't listed on Wednesday's injury report, Tyler Dragon of The Cincinnati Enquirer reports.",
    "analysis": "Bernard sprained his knee during Sunday's 49-13 loss to the Ravens, with the injury causing him to leave the field for a spell before he ultimately re-entered the game. The 27-year-old's absence from the injury report suggests he's moved past the issue, so expect Bernard to play his usual complementary role behind Joe Mixon in Week 11 against Oakland.",
    "timestamp": "2019-11-13 11:58 AM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.3, 1.8, 2.2, 3.9, 4.1, 3.4, 1.4, 5.5, 'BYE', -0.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.0, 10.4, 7.9, 7.6, 6.8, 6.1, 5.7, 7.9, 'BYE', 8.2, 7.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3068267.png",
    "name": "Austin Ekeler",
    "depthchart": "Backup: RB-2",
    "team": "Los Angeles Chargers",
    "projected": 7.3,
    "opponent": "Kansas City Chiefs",
    "home_away": "",
    "opp_rank": 31,
    "team_rank": 26,
    "avg_fp2": 16.84,
    "opp_rank_allowed_fp2": 32,
    "opp_avg_allowed_fp2": 27.23,
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
    "headlineNews": "Gets in end zone through air",
    "report": "Ekeler rushed just six times for 19 yards and secured both of his targets for 29 yards and a touchdown in the Chargers' 26-24 loss to the Raiders on Thursday.",
    "analysis": "As his final numbers indicate, Ekeler was held in check on the ground after a strong 12-carry, 70-yard performance versus the Packers just four days prior. However, the versatile back was able to notch a receiving touchdown for the third time in the last four games by snaring a fourth-quarter scoring toss from Philip Rivers, a catch that also helped him extend his season-long streak of multiple receptions to 10 contests. Ekeler will look to up his overall production when the Chargers face off with the Chiefs in a Monday night Week 11 AFC West showdown Nov. 18.",
    "timestamp": "2019-11-08 07:58 AM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [36.4, 20.3, 11.6, 26.7, 14.8, 4.3, 22.0, 9.2, 11.3, 11.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.4, 14.5, 18.1, 15.8, 21.3, 9.5, 9.7, 8.9, 8.1, 14.3, 7.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2969962.png",
    "name": "Duke Johnson",
    "depthchart": "Backup: RB-2",
    "team": "Houston Texans",
    "projected": 6.7,
    "opponent": "Baltimore Ravens",
    "home_away": "at ",
    "opp_rank": 8,
    "team_rank": 5,
    "avg_fp2": 8.94,
    "opp_rank_allowed_fp2": 10,
    "opp_avg_allowed_fp2": 19.17,
    "fanduelSalary": "$5900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#03202F",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(3, 32, 47, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/hou.png",
    "headlineNews": "Best game as a Texan",
    "report": "Johnson rushed seven times for 13 yards and a touchdown while catching all five of his targets for 68 yards in Sunday's 26-3 win over the Jaguars in London.",
    "analysis": "Johnson converted his first rushing touchdown in a Texans uniform from one yard out in the third quarter, but he was soundly outplayed on the ground by Carlos Hyde, who had 160 rushing yards to Johnson's 13. Where Duke really shines is catching the ball out of the backfield, and his five receptions and 68 receiving yards both marked season highs. Did the Texans finally discover how to get their offseason acquisition more involved in the offense, or will Johnson's production dry up when the team resumes play stateside? We won't find out until after Houston's Week 10 bye.",
    "timestamp": "2019-11-03 10:14 AM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.0, 3.1, 3.4, 8.8, 7.2, 12.4, 6.6, 11.4, 16.6, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.8, 13.8, 7.4, 5.3, 6.9, 7.6, 6.5, 8.6, 5.2, 'BYE', 6.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2972091.png",
    "name": "Jalen Richard",
    "depthchart": "Backup: RB-2",
    "team": "Oakland Raiders",
    "projected": 6.5,
    "opponent": "Cincinnati Bengals",
    "home_away": "",
    "opp_rank": 32,
    "team_rank": 8,
    "avg_fp2": 3.58,
    "opp_rank_allowed_fp2": 30,
    "opp_avg_allowed_fp2": 26.33,
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
    "headlineNews": "Leads team in receiving Thursday",
    "report": "Richard caught four passes on as many targets for 43 yards and ran twice for no gain in Thursday's 26-24 win over the Chargers.",
    "analysis": "Richard's 43 receiving yards led the Raiders, and the reserve running back also tallied a season-high four catches Thursday. He's now amassed 111 total yards over the past two weeks. Rookie Josh Jacobs continues to handle a bulk of the carries out of the backfield, but Richard is fulfilling his role as a pass-catching option and fellow backup DeAndre Washington still factors into the mix as well.",
    "timestamp": "2019-11-11 04:01 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.3, 1.5, 4.4, 2.3, 4.2, 'BYE', 1.2, 3.7, 8.3, 6.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.4, 4.0, 6.3, 4.4, 6.6, 'BYE', 4.3, 4.0, 6.0, 6.5, 6.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2572861.png",
    "name": "J.D. McKissic",
    "depthchart": "Backup: RB-2",
    "team": "Detroit Lions",
    "projected": 6.5,
    "opponent": "Dallas Cowboys",
    "home_away": "",
    "opp_rank": 14,
    "team_rank": 20,
    "avg_fp2": 5.39,
    "opp_rank_allowed_fp2": 23,
    "opp_avg_allowed_fp2": 22.09,
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
    "headlineNews": "Handles majority of snaps",
    "report": "McKissic rushed 10 times for 36 yards and added six catches for 19 yards on seven targets in Sunday's 20-13 loss to the Bears.",
    "analysis": "While McKissic underwhelmed from a yardage standpoint, his heavy involvement in the game plan was an encouraging sign and he ultimately logged 70 parent of the offensive snaps after Ty Johnson (concussion) left the game in the first quarter. The heavy playing time led to him being Detroit's busiest running back with 10 carries while Paul Perkins got seven and Ty Johnson got five, plus McKissic led the entire team in receptions. It's possible Johnson could make it back for Week 11 against Dallas, but McKissic seems like the Lions running back to own if Johnson is forced to miss time.",
    "timestamp": "2019-11-10 02:36 PM",
    "week01": "DNP",
    "week02": 0.2,
    "week03": 4.4,
    "week04": 4.6,
    "week05": "BYE",
    "week06": 2.1,
    "week07": 7.0,
    "week08": 1.6,
    "week09": 14.7,
    "week10": 8.5,
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 0.2, 4.4, 4.6, 'BYE', 2.1, 7.0, 1.6, 14.7, 8.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 5.2, 2.5, 2.0, 'BYE', 6.2, 5.9, 8.5, 5.2, 7.2, 6.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2979843.png",
    "name": "Kenyan Drake",
    "depthchart": "Backup: RB-2",
    "team": "Arizona Cardinals",
    "projected": 6.3,
    "opponent": "San Francisco 49ers",
    "home_away": "at ",
    "opp_rank": 18,
    "team_rank": 14,
    "avg_fp2": 9.64,
    "opp_rank_allowed_fp2": 4,
    "opp_avg_allowed_fp2": 14.31,
    "fanduelSalary": "$6300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#97233F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(151, 35, 63, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#97233F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
    "headlineNews": "Expected to share snaps",
    "report": "Coach Kliff Kingsbury said he will utilize a backfield committee in Sunday's game against the 49ers that includes packages for both Drake and David Johnson, Josh Weinfuss of ESPN.com reports.",
    "analysis": "Drake led the backfield in the Week 10 loss to Tampa Bay, playing 64 percent of the snaps and garnering 16 touches while Johnson was limited to 43 percent and six touches, fumbling on one of them. A report earlier Friday suggested Drake was getting most of the work with the first-team offense during practice, but Kingsbury downplayed any notion of Johnson having his role further reduced. Drake steamrolled this same Niners team for 162 scrimmage yards just a couple weeks ago, albeit with both Johnson and Chase Edmonds (hamstring) inactive due to injuries. Johnson is no longer listed on the injury report, though he didn't exactly look spry last week. In any case, Drake is shaping up as the better Week 11 fantasy play, even if a starter-level workload isn't assured.",
    "timestamp": "2019-11-15 12:12 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.7, 7.3, 6.7, 8.8, 'DNP', 10.0, 7.3, 'DNP', 26.2, 7.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.2, 7.2, 8.9, 11.4, 'DNP', 9.4, 11.3, 'DNP', 11.4, 4.5, 6.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4045163.png",
    "name": "Miles Sanders",
    "depthchart": "Backup: RB-2",
    "team": "Philadelphia Eagles",
    "projected": 6.2,
    "opponent": "New England Patriots",
    "home_away": "",
    "opp_rank": 12,
    "team_rank": 12,
    "avg_fp2": 9.68,
    "opp_rank_allowed_fp2": 2,
    "opp_avg_allowed_fp2": 12.46,
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
    "headlineNews": "Could lead backfield if Howard sits",
    "report": "Sanders may be in store for the lead role out of the Philadelphia backfield Sunday against the Patriots with Jordan Howard (shoulder) listed as questionable for the contest, Kevin Patra of NFL.com reports.",
    "analysis": "Though Howard was a limited participant in practice throughout the week, coach Doug Pederson noted prior to Friday's session that the Eagles' top ground option hasn't yet been cleared to resume taking contact. Given that Howard hasn't fully recovered from the stinger he suffered in the Week 9 win over the Bears, there's reason to believe he may be limited or withheld entirely from the matchup with New England. If that's the case, Sanders -- who has earned double-digit touches just once in the past four games -- could be thrust into a more prominent role, especially with scatback Darren Sproles (hip) getting shut down for the season. The Eagles plan to add Jay Ajayi to the roster to bolster the team's backfield depth, but Sanders would still be the odds-on favorite to headline a Howard-less backfield.",
    "timestamp": "2019-11-15 11:32 AM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.2, 5.2, 11.6, 7.2, 8.4, 16.7, 4.7, 21.3, 8.8, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.8, 8.2, 7.3, 10.4, 7.2, 4.0, 8.8, 6.4, 8.6, 'BYE', 6.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3066158.png",
    "name": "Tarik Cohen",
    "depthchart": "Backup: RB-2",
    "team": "Chicago Bears",
    "projected": 6.0,
    "opponent": "Los Angeles Rams",
    "home_away": "at ",
    "opp_rank": 5,
    "team_rank": 28,
    "avg_fp2": 6.68,
    "opp_rank_allowed_fp2": 9,
    "opp_avg_allowed_fp2": 18.92,
    "fanduelSalary": "$1",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#c36835",
    "tmColorDark": "#0B162A",
    "tmColorLite_rgba": "rgba(195, 104, 53, 0.2)",
    "tmColorDark_rgba": "rgba(11, 22, 42, 0.2)",
    "tmTextLite": "#c36835",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png",
    "headlineNews": "May benefit if Montgomery sits",
    "report": "Cohen could be in store for a heightened role out of the backfield Sunday against the Rams with starter David Montgomery (ankle) viewed as a game-time decision, Nathan Smith of the Bears' official site reports.",
    "analysis": "The 5-foot-6, 191-pound Cohen already sees a sizable role in the passing game (6.1 targets per game), but Montgomery's potential absence would create a major void on the ground. While third-string option Ryan Nall is a better fit to absorb most of Montgomery's work between the tackles, Cohen should nonetheless benefit from at least a slight uptick in carries in the event the rookie is sidelined. Cohen hasn't handled more than five carries in any game this season and is averaging 2.7 yards per tote, well below his career rate (4.1 YPC).",
    "timestamp": "2019-11-15 02:39 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.7, 3.5, 3.4, 8.8, 7.9, 'BYE', 7.4, 6.1, 2.6, 11.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.7, 7.5, 6.5, 6.4, 5.2, 'BYE', 5.7, 6.4, 7.7, 10.3, 6.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15971.png",
    "name": "Rex Burkhead",
    "depthchart": "Reserve: RB-3",
    "team": "New England Patriots",
    "projected": 5.8,
    "opponent": "Philadelphia Eagles",
    "home_away": "at ",
    "opp_rank": 5,
    "team_rank": 23,
    "avg_fp2": 6.93,
    "opp_rank_allowed_fp2": 7,
    "opp_avg_allowed_fp2": 17.5,
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
    "headlineNews": "Logs 24 snaps Sunday",
    "report": "Burkhead logged 24 of a possible 67 snaps on offense in Sunday's 37-20 loss to the Ravens, en route to carrying four times for 18 yards and catching one of his two targets for 16 yards.",
    "analysis": "James White led the team's running backs with 28 snaps, while the team's usual lead option Sony Michel logged just 15 snaps in a contest in which game flow worked against the Patriots pounding the ball via the ground. The team is on bye Week 10, with a Nov. 17 road game against the Eagles next up for New England. Burkhead, who has been managing a foot issue of late, should benefit from the time off, so we'll have to see if he's still on the team's injury report in advance of Week 11 action.",
    "timestamp": "2019-11-04 09:14 AM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.0, 7.8, 15.9, 1.2, 'DNP', 'DNP', 'DNP', 1.8, 3.9, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.7, 10.3, 6.8, 5.3, 'DNP', 'DNP', 'DNP', 3.9, 2.8, 'BYE', 5.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3051902.png",
    "name": "Peyton Barber",
    "depthchart": "Backup: RB-2",
    "team": "Tampa Bay Buccaneers",
    "projected": 5.7,
    "opponent": "New Orleans Saints",
    "home_away": "",
    "opp_rank": 6,
    "team_rank": 19,
    "avg_fp2": 7.08,
    "opp_rank_allowed_fp2": 2,
    "opp_avg_allowed_fp2": 13.01,
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
    "headlineNews": "Notches winning score",
    "report": "Barber rushed 11 times for 43 yards and a touchdown and secured his only target for four yards in the Buccaneers' 30-27 win over the Cardinals on Sunday.",
    "analysis": "After seeing Ronald Jones officially named the starting running back by coach Bruce Arians earlier in the week, Barber responded by recording a game-winning one-yard rushing touchdown with 1:43 remaining. Barber also ended up matching Jones in carries, as it appears that irrespective of depth chart slotting, Arians will continue to ride the hot hand week to week. Barber now has four rushing touchdowns on the season and will look to build on Sunday's effort versus the Saints in Week 11.",
    "timestamp": "2019-11-10 03:15 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.5, 15.4, 6.5, 7.9, 9.6, 2.8, 'BYE', 3.3, 1.5, 11.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.2, 8.4, 8.0, 10.6, 7.9, 8.1, 'BYE', 8.2, 7.8, 4.8, 5.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3122672.png",
    "name": "Royce Freeman",
    "depthchart": "Backup: RB-2",
    "team": "Denver Broncos",
    "projected": 5.3,
    "opponent": "Minnesota Vikings",
    "home_away": "at ",
    "opp_rank": 7,
    "team_rank": 16,
    "avg_fp2": 9.0,
    "opp_rank_allowed_fp2": 5,
    "opp_avg_allowed_fp2": 16.05,
    "fanduelSalary": "$5800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e17757",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(225, 119, 87, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#e17757",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/den.png",
    "headlineNews": "Quiet in win over Browns",
    "report": "Freeman carried the ball five times for 15 yards and caught his only target for minus-1 yard in Sunday's 24-19 win over the Browns.",
    "analysis": "The second-year RB mostly took a back seat to Phillip Lindsay in this one, as the latter's 30-yard TD run in the third quarter ended up being the winning score for Denver. The 14 scrimmage yards were Freeman's lowest output of the year -- he hadn't produced less than 45 coming into Sunday -- and with the team's bye on tap in Week 10, Freeman's role could be in flux coming out the other side if Lindsay's wrist injury heals enough to allow him to handle pass-protection duties again.",
    "timestamp": "2019-11-03 07:16 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.6, 12.7, 9.3, 7.0, 7.7, 10.1, 14.7, 11.0, 1.9, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.6, 4.0, 4.1, 5.0, 8.3, 5.5, 6.0, 5.8, 5.0, 'BYE', 5.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/12514.png",
    "name": "LeSean McCoy",
    "depthchart": "Backup: RB-2",
    "team": "Kansas City Chiefs",
    "projected": 5.1,
    "opponent": "Los Angeles Chargers",
    "home_away": "at ",
    "opp_rank": 19,
    "team_rank": 24,
    "avg_fp2": 8.03,
    "opp_rank_allowed_fp2": 25,
    "opp_avg_allowed_fp2": 23.46,
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
    "headlineNews": "Healthy scratch deemed maintenance",
    "report": "Coach Andy Reid suggested after Sunday's 35-32 loss to the Titans that McCoy was a healthy inactive for the contest for maintenance-related reasons, Adam Teicher of ESPN.com reports. \"LeSean's not getting any younger so it's important I manage him the right way as we go,\" Reid said.",
    "analysis": "Though Reid's comments offer hope that McCoy may have a role in the Chiefs' game plan again at some point in the second half of the season, it's worth noting that the veteran running back played a season-low six snaps a week earlier in the victory over Minnesota. Meanwhile, Damien Williams has fared well as the Chiefs' lead back, averaging 6.5 yards per carry on 31 attempts and catching all seven of his targets over the past two games. Williams' quality work of late probably lessens the possibility of McCoy re-emerging as a major factor for the Chiefs, but the 31-year-old could still have a shot at supplanting Darrel Williams and Darwin Thompson for the No. 2 role out of the backfield Week 11 versus the Chargers.",
    "timestamp": "2019-11-11 09:31 AM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 3.8, 21.5, 15.9, 1.3, 5.4, 8.6, 6.3, 1.4, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 5.7, 6.8, 7.1, 7.2, 7.8, 4.0, 5.3, 7.1, 'DNP', 5.1]
                    }
                    
                    ]
               }
            }];




$scope.positionWR = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2976316.png",
    "name": "Michael Thomas",
    "depthchart": "Starter: WR-1",
    "team": "New Orleans Saints",
    "projected": 23.6,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "at ",
    "opp_rank": 32,
    "team_rank": 9,
    "avg_fp2": 18.76,
    "opp_rank_allowed_fp2": 32,
    "opp_avg_allowed_fp2": 40.27,
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
    "headlineNews": "Another monster output in Week 10",
    "report": "Thomas corralled 13 of 14 targets for 152 receiving yards during Sunday's 26-9 loss to the Falcons.",
    "analysis": "The 26-year-old wideout has been one of the league's most consistently-dominant fantasy assets through 10 weeks of the 2019 season, racking up at least five catches in every single game and eclipsing 85 receiving yards in eight of nine. Thomas' hefty workload indicates that he will continue to be a force down the stretch, as he has now averaged 12.2 targets per game since Week 5, with no fewer than seven balls thrown his way in any contest this year. Week 11 presents an extremely favorable matchup for Thomas, as he will be facing a Buccaneers defense that allowed Arizona's top pass catcher, Christian Kirk, to amass 138 receiving yards and three touchdowns Sunday.",
    "timestamp": "2019-11-10 02:34 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [17.3, 13.9, 13.9, 14.0, 35.7, 12.9, 17.6, 21.8, 'BYE', 21.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.1, 13.1, 10.6, 15.2, 15.0, 12.7, 12.9, 14.8, 'BYE', 17.4, 23.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13982.png",
    "name": "Julio Jones",
    "depthchart": "Starter: WR-1",
    "team": "Atlanta Falcons",
    "projected": 15.9,
    "opponent": "Carolina Panthers",
    "home_away": "at ",
    "opp_rank": 11,
    "team_rank": 2,
    "avg_fp2": 14.41,
    "opp_rank_allowed_fp2": 23,
    "opp_avg_allowed_fp2": 30.33,
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
    "headlineNews": "Team's top receiver in upset win",
    "report": "Jones caught three of nine targets and compiled 79 receiving yards during Sunday's 26-9 win against the Saints.",
    "analysis": "Game script did not facilitate a statistically-prolific fantasy day for any Falcons pass catcher, as Atlanta obtained a two-possession lead within the first 10 seconds of the fourth quarter and ran on nine of the offense's remaining 17 plays. Austin Hooper (knee) and Brian Hill each tallied a touchdown catch, but aside from Jones there was not a single Falcon who exceeded 30 receiving yards on the afternoon. Upcoming in Week 11 is the second of five consecutive matchups against NFC South opponents, as Jones and the Atlanta receiving corps face off against Carolina's top-10 pass defense.",
    "timestamp": "2019-11-10 01:32 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.1, 25.1, 22.8, 7.3, 5.7, 14.8, 12.3, 20.2, 'BYE', 9.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.2, 16.2, 13.7, 16.6, 16.3, 15.5, 20.3, 11.0, 'BYE', 18.5, 15.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116406.png",
    "name": "Tyreek Hill",
    "depthchart": "Starter: WR-1",
    "team": "Kansas City Chiefs",
    "projected": 15.7,
    "opponent": "Los Angeles Chargers",
    "home_away": "at ",
    "opp_rank": 5,
    "team_rank": 1,
    "avg_fp2": 17.1,
    "opp_rank_allowed_fp2": 8,
    "opp_avg_allowed_fp2": 23.65,
    "fanduelSalary": "$8300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Speeds past Titans in loss",
    "report": "Hill caught 11 of 19 targets for 157 yards and a touchdown during Sunday's 35-32 loss to the Titans. He added a three-yard run during the contest.",
    "analysis": "Hill snapped the tie midway through the third quarter, outrunning his defender in order to get under Patrick Mahomes' 11-yard touchdown loft. Hill no doubt benefited from Mahomes' return from a knee injury -- his 19 targets setting a career high --  but he also did pretty well with Matt Moore in Week 9 and, with Sunday's effort, was able to top 120 yards in back-to-back games for the first time in his career. Hill has reached at least 70 yards in every game that he has completed this season and has five touchdowns in six games. He'll look to keep it going next Monday night against a Chargers defense that has been exposed against the pass this season.",
    "timestamp": "2019-11-10 02:52 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.1, 'DNP', 'DNP', 'DNP', 'DNP', 22.5, 14.9, 11.1, 23.5, 27.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.8, 'DNP', 'DNP', 'DNP', 'DNP', 12.2, 12.0, 17.4, 12.2, 17.7, 15.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3915416.png",
    "name": "D.J. Moore",
    "depthchart": "Starter: WR-1",
    "team": "Carolina Panthers",
    "projected": 15.6,
    "opponent": "Atlanta Falcons",
    "home_away": "",
    "opp_rank": 25,
    "team_rank": 23,
    "avg_fp2": 11.32,
    "opp_rank_allowed_fp2": 28,
    "opp_avg_allowed_fp2": 33.81,
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
    "headlineNews": "Second consecutive 100-yard game",
    "report": "Moore caught nine of 11 targets for 120 yards during Sunday's 24-16 loss to the Packers.",
    "analysis": "Moore led the team in targets, catches and yards as he accounted for nearly half of the team's receiving yardage. The output was a season high for Moore, who finished with his first 100-yard game of the campaign last week. Moore is clearly developing a strong rapport with Kyle Allen and will look to build on his recent dominance next Sunday against the Falcons.",
    "timestamp": "2019-11-10 07:25 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.1, 13.4, 12.9, 5.9, 12.1, 12.1, 'BYE', 6.3, 13.6, 16.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.8, 11.0, 13.5, 13.1, 9.7, 16.9, 'BYE', 7.3, 10.7, 10.3, 15.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16733.png",
    "name": "Odell Beckham Jr.",
    "depthchart": "Starter: WR-1",
    "team": "Cleveland Browns",
    "projected": 15.0,
    "opponent": "Pittsburgh Steelers",
    "home_away": "",
    "opp_rank": 12,
    "team_rank": 19,
    "avg_fp2": 10.11,
    "opp_rank_allowed_fp2": 16,
    "opp_avg_allowed_fp2": 28.55,
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
    "headlineNews": "Four-catch night in win",
    "report": "Beckham hauled in four of 10 targets for 60 yards in the Browns' 21-7 win over the Steelers on Thursday.",
    "analysis": "Beckham led the Browns in receiving yardage on the night with his relatively modest tally. The star wideout's catch total was actually his lowest since a disastrous loss to the 49ers in Week 5, and his yardage tally ranked as his second highest over the last four contests. Beckham continues to fall well below preseason expectations, but a combination of erratic play from quarterback Baker Mayfield and questionable offensive schemes has had a significant part to play in his struggles. Beckham will look to capitalize on a favorable matchup against the Dolphins in Week 12, a week from Sunday.",
    "timestamp": "2019-11-14 09:23 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.6, 25.1, 8.6, 3.0, 4.0, 13.1, 'BYE', 7.7, 10.7, 8.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.4, 20.6, 14.5, 19.3, 15.5, 11.6, 'BYE', 14.1, 10.4, 14.7, 15.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3128429.png",
    "name": "Courtland Sutton",
    "depthchart": "Starter: WR-1",
    "team": "Denver Broncos",
    "projected": 14.9,
    "opponent": "Minnesota Vikings",
    "home_away": "at ",
    "opp_rank": 18,
    "team_rank": 28,
    "avg_fp2": 12.88,
    "opp_rank_allowed_fp2": 26,
    "opp_avg_allowed_fp2": 33.26,
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
    "headlineNews": "Spectacular TD grab in win",
    "report": "Sutton caught five of eight targets for 56 yards and a touchdown in Sunday's 24-19 win over the Browns. He also carried the ball once for seven yards.",
    "analysis": "The second-year receiver opened the scoring in the first quarter with a fantastic 21-yard reception, leaping high over tight coverage from Denzel Ward to haul in Brandon Allen's first career TD pass. Sutton has now recorded at least 70 yards or a touchdown in seven straight games and in eight of nine this season, seeing between six and nine targets in every contest. However, his streak of remarkably steady fantasy production will be paused as the Broncos get their bye in Week 10.",
    "timestamp": "2019-11-03 07:01 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [15.5, 6.0, 11.2, 21.2, 17.2, 9.6, 11.7, 8.7, 14.8, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.9, 6.1, 7.3, 6.9, 6.2, 10.0, 12.2, 14.9, 10.5, 'BYE', 14.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3121422.png",
    "name": "Terry McLaurin",
    "depthchart": "Starter: WR-1",
    "team": "Washington Redskins",
    "projected": 13.8,
    "opponent": "New York Jets",
    "home_away": "",
    "opp_rank": 26,
    "team_rank": 31,
    "avg_fp2": 11.96,
    "opp_rank_allowed_fp2": 31,
    "opp_avg_allowed_fp2": 35.54,
    "fanduelSalary": "$5500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#773141",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(119, 49, 65, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png",
    "headlineNews": "Another quiet outing in Week 9 loss",
    "report": "McLaurin hauled in four of six targets and accounted for 39 receiving yards during Sunday's 24-9 loss to the Bills.",
    "analysis": "The rookie wideout accounted for at least 51 receiving yards in each of his first five appearances of the year while scoring five times. However, over the past three weeks against San Francisco, Minnesota and Buffalo, he's managed only three catches per game for an average output of 29.7 yards. Washington's offense has been stuck in the mud, and McLaurin's production has been stifled as a result, with the Redskins now having gone 13 consecutive quarters without reaching the end zone. Following the Week 10 bye, McLaurin and the Washington offense will return to the field against a Jets defense that has given up 26-plus points in five of it past six appearances.",
    "timestamp": "2019-11-03 01:42 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [21.0, 14.7, 16.0, 'DNP', 6.6, 24.0, 1.6, 5.9, 5.9, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.5, 13.0, 11.2, 'DNP', 12.2, 13.7, 11.4, 8.7, 9.3, 'BYE', 13.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2974858.png",
    "name": "Kenny Golladay",
    "depthchart": "Starter: WR-1",
    "team": "Detroit Lions",
    "projected": 13.5,
    "opponent": "Dallas Cowboys",
    "home_away": "",
    "opp_rank": 6,
    "team_rank": 4,
    "avg_fp2": 14.97,
    "opp_rank_allowed_fp2": 2,
    "opp_avg_allowed_fp2": 20.71,
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
    "headlineNews": "Avoids dud with long TD",
    "report": "Golladay caught three of nine targets for 57 yards and a touchdown in Sunday's 20-13 loss to the Bears.",
    "analysis": "Fill-in quarterback Jeff Driskel wasn't exactly efficient when targeting Golladay, but the wide receiver was able to salvage his day with a 47-yard touchdown catch in the fourth quarter. While Golladay's value will take a hit if Matt Stafford (back) continues to sit out, he's too talented to bench and now has eight touchdowns in nine games this season.",
    "timestamp": "2019-11-10 02:25 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.2, 21.7, 2.7, 21.2, 'BYE', 14.6, 2.6, 25.3, 21.2, 13.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.7, 9.7, 15.0, 11.4, 'BYE', 10.7, 9.0, 11.0, 10.6, 13.7, 13.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15795.png",
    "name": "DeAndre Hopkins",
    "depthchart": "Starter: WR-1",
    "team": "Houston Texans",
    "projected": 13.1,
    "opponent": "Baltimore Ravens",
    "home_away": "at ",
    "opp_rank": 20,
    "team_rank": 13,
    "avg_fp2": 14.01,
    "opp_rank_allowed_fp2": 19,
    "opp_avg_allowed_fp2": 29.1,
    "fanduelSalary": "$8300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#03202F",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(3, 32, 47, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/hou.png",
    "headlineNews": "Eight catches, TD in London",
    "report": "Hopkins caught eight of 11 targets for 48 yards and a touchdown in Sunday's 26-3 win over the Jaguars in London. He also rushed once for six yards.",
    "analysis": "Hopkins' one-yard touchdown in the fourth quarter completed the scoring and erased any doubt about this one. The star wide receiver has caught at least eight balls in each of his past four games, totaling 37 receptions over that span. His yardage output wasn't impressive in this one, but Hopkins made up for that by scoring his fourth touchdown of the season. The buy-low window on Hopkins was open during his five-game touchdown drought, but it has long since slammed shut heading into Houston's Week 10 bye.",
    "timestamp": "2019-11-03 09:38 AM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [27.1, 6.5, 9.7, 5.6, 12.3, 12.0, 21.1, 16.4, 15.4, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.0, 12.3, 12.2, 13.9, 17.9, 13.3, 15.8, 15.3, 12.9, 'BYE', 13.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3895856.png",
    "name": "Christian Kirk",
    "depthchart": "Starter: WR-1",
    "team": "Arizona Cardinals",
    "projected": 13.0,
    "opponent": "San Francisco 49ers",
    "home_away": "at ",
    "opp_rank": 1,
    "team_rank": 16,
    "avg_fp2": 13.03,
    "opp_rank_allowed_fp2": 5,
    "opp_avg_allowed_fp2": 22.31,
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
    "headlineNews": "Snaps touchdown drought in loss",
    "report": "Kirk secured six of 10 targets for 138 yards and three touchdowns in the Cardinals' 30-27 loss to the Buccaneers on Sunday.",
    "analysis": "Kirk put a touchdown drought that dated back to Week 11 of last season to rest in spectacular fashion, scoring from 33, 69 and 15 yards out in the second, third and fourth quarters, respectively. The final touchdown gave the Cardinals a 27-23 lead midway through the fourth quarter, but Jameis Winston ultimately would lead a six-play, 92-yard game-winning drive for the Buccaneers. Kirk's receiving yardage total also was a career high and served as the second 100-yard game of his career overall. He's curiously alternated single- and double-digit targets across his seven games this year, so he'll look to garner double-digit looks in back-to-back contests for the first time in 2019 when he faces the 49ers in Week 11.",
    "timestamp": "2019-11-10 02:28 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.4, 14.4, 10.9, 6.3, 'DNP', 'DNP', 'DNP', 13.8, 2.6, 34.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.5, 11.3, 8.7, 7.4, 'DNP', 'DNP', 'DNP', 9.6, 11.6, 19.0, 13.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15818.png",
    "name": "Keenan Allen",
    "depthchart": "Starter: WR-1",
    "team": "Los Angeles Chargers",
    "projected": 13.0,
    "opponent": "Kansas City Chiefs",
    "home_away": "",
    "opp_rank": 8,
    "team_rank": 8,
    "avg_fp2": 12.36,
    "opp_rank_allowed_fp2": 6,
    "opp_avg_allowed_fp2": 22.55,
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
    "headlineNews": "Paces pass catchers in loss",
    "report": "Allen secured eight of 11 targets for 68 yards in the Chargers' 26-24 loss to the Raiders on Thursday. He also rushed once for 18 yards.",
    "analysis": "Allen paced the Chargers in receptions, receiving yards and targets on the night, while also logging double-digit looks for the third time in the last four games. Allen's catch and yardage tallies were both his highest since a season-best 13-reception, 183-yard explosion versus the Texans in Week 3, and he'll look to build on Thursday's numbers versus the Chiefs in a Week 11 Monday night showdown on Nov. 18.",
    "timestamp": "2019-11-07 09:16 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [22.3, 13.8, 37.1, 7.3, 3.8, 4.3, 8.1, 8.8, 5.5, 12.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.3, 15.5, 14.8, 12.7, 12.3, 11.7, 10.4, 10.8, 12.2, 17.6, 13.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2977187.png",
    "name": "Cooper Kupp",
    "depthchart": "Backup: WR-2",
    "team": "Los Angeles Rams",
    "projected": 12.8,
    "opponent": "Chicago Bears",
    "home_away": "",
    "opp_rank": 15,
    "team_rank": 6,
    "avg_fp2": 15.41,
    "opp_rank_allowed_fp2": 4,
    "opp_avg_allowed_fp2": 21.96,
    "fanduelSalary": "$4",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Free of injury designation",
    "report": "Kupp (illness) doesn't have an injury designation for Sunday's game against the Bears.",
    "analysis": "Kupp missed Friday's practice with a stomach bug, but he apparently isn't in any danger of missing the game. He'll face a tough Chicago defense after last week's zero-catch debacle in Pittsburgh.",
    "timestamp": "2019-11-15 03:08 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.1, 15.1, 27.7, 22.4, 22.2, 3.7, 8.0, 31.5, 'BYE', 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.7, 11.0, 6.5, 8.8, 10.4, 9.3, 7.5, 8.5, 'BYE', 14.4, 12.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3045144.png",
    "name": "Tyler Boyd",
    "depthchart": "Starter: WR-1",
    "team": "Cincinnati Bengals",
    "projected": 12.7,
    "opponent": "Oakland Raiders",
    "home_away": "at ",
    "opp_rank": 30,
    "team_rank": 14,
    "avg_fp2": 10.31,
    "opp_rank_allowed_fp2": 27,
    "opp_avg_allowed_fp2": 33.41,
    "fanduelSalary": "$5900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#ea7330",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(234, 115, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#ea7330",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png",
    "headlineNews": "Hauls in six passes in loss",
    "report": "Boyd caught six of eight targets for 62 total yards during Sunday's 49-13 loss to Baltimore.",
    "analysis": "The Bengals offense was quiet for the most part in Ryan Finley's debut, but Boyd did manage to reel in a nice 24-yard pass over the middle early in the second half. The Bengals have played an ugly brand of football this season, but Boyd has still kept value by hauling in at least five passes in seven of nine games, though he has just one touchdown on the season. That share may slip when and if A.J. Green (ankle) returns, but that timetable remains unclear after Green's setback this week. Next up is a Raiders defense that has been porous against the pass this season.",
    "timestamp": "2019-11-10 04:35 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.3, 17.2, 9.7, 4.8, 23.3, 2.5, 6.0, 9.8, 'BYE', 9.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.5, 9.5, 10.5, 12.0, 10.6, 12.2, 9.8, 8.6, 'BYE', 16.0, 12.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2976212.png",
    "name": "Stefon Diggs",
    "depthchart": "Starter: WR-1",
    "team": "Minnesota Vikings",
    "projected": 12.5,
    "opponent": "Denver Broncos",
    "home_away": "",
    "opp_rank": 4,
    "team_rank": 17,
    "avg_fp2": 11.73,
    "opp_rank_allowed_fp2": 4,
    "opp_avg_allowed_fp2": 21.43,
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
    "headlineNews": "Another quiet game",
    "report": "Diggs had three catches (six targets) for 49 yards in Sunday's 28-24 win over the Cowboys.",
    "analysis": "The Vikings featured a run-heavy gameplan against the Cowboys' tough pass D, which led to low usage for Diggs and the receiving options not named Dalvin Cook. The 25-year-old has really struggled over his last two contests (four catches for 53 yards combined), so the absence of Adam Thielen (hamstring) is likely leading to more attention being paid to the side of the field Diggs lines up on. The Vikings may stick to a run-first scheme next week against a Broncos defense that has been far more susceptible to opposing rushing attacks, so it could be another low-usage outing for Diggs, especially if Thielen is unable to return to action.",
    "timestamp": "2019-11-10 10:03 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.7, 9.4, 3.0, 12.3, 5.9, 40.0, 17.7, 15.8, 2.1, 6.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.5, 5.4, 10.7, 7.0, 8.8, 6.1, 9.7, 10.6, 9.2, 9.7, 12.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3121427.png",
    "name": "Curtis Samuel",
    "depthchart": "Backup: WR-2",
    "team": "Carolina Panthers",
    "projected": 12.1,
    "opponent": "Atlanta Falcons",
    "home_away": "",
    "opp_rank": 25,
    "team_rank": 23,
    "avg_fp2": 10.64,
    "opp_rank_allowed_fp2": 28,
    "opp_avg_allowed_fp2": 33.81,
    "fanduelSalary": "$6300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0085CA",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 133, 202, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#0085CA",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/car.png",
    "headlineNews": "Hauls in touchdown",
    "report": "Samuel caught four of eight targets for 35 yards and a touchdown in Sunday's 24-16 loss to the Packers.",
    "analysis": "Samuel opened the scoring with a two-yard touchdown midway through the first quarter, now giving him four end-zone trips over his last four games. The wideout also has posted two of his three best yardage totals of the campaign over that same span, boosting his value at an important time in the season. Next up for Samuel is a home date against the Falcons, whose defense has widely underwhelmed despite playing surprisingly well Week 10 versus the Saints.",
    "timestamp": "2019-11-11 03:38 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.7, 11.8, 13.8, 4.8, 5.9, 21.8, 'BYE', 6.6, 14.9, 11.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.3, 7.1, 11.0, 11.2, 9.5, 11.1, 'BYE', 6.4, 8.6, 10.0, 12.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4241372.png",
    "name": "Marquise Brown",
    "depthchart": "Starter: WR-1",
    "team": "Baltimore Ravens",
    "projected": 12.0,
    "opponent": "Houston Texans",
    "home_away": "",
    "opp_rank": 27,
    "team_rank": 20,
    "avg_fp2": 11.91,
    "opp_rank_allowed_fp2": 28,
    "opp_avg_allowed_fp2": 34.31,
    "fanduelSalary": "$5600",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Ankle",
    "tmColorLite": "#9E7C0C",
    "tmColorDark": "#241773",
    "tmColorLite_rgba": "rgba(158, 124, 12, 0.2)",
    "tmColorDark_rgba": "rgba(36, 23, 115, 0.2)",
    "tmTextLite": "#9E7C0C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png",
    "headlineNews": "Questionable after return to practice",
    "report": "Brown (ankle) is listed as questionable for Sunday's game against the Texans after returning to a limited participation in practice Friday.",
    "analysis": "Brown was held out of Thursday's practice, but his Week 11 outlook brightened when he was able to return to the field Friday. Those hoping to use the rookie in fantasy lineups this weekend will learn of his status before the first wave of kickoffs Sunday, with Baltimore hosting Houston at 1 p.m. ET.",
    "timestamp": "2019-11-15 01:46 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [28.7, 12.6, 5.9, 4.2, 9.7, 'DNP', 'DNP', 'BYE', 6.3, 16.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.6, 14.5, 10.2, 15.1, 9.6, 'DNP', 'DNP', 'BYE', 6.3, 9.6, 12.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3050661.png",
    "name": "Chris Godwin",
    "depthchart": "Starter: WR-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 11.8,
    "opponent": "New Orleans Saints",
    "home_away": "",
    "opp_rank": 10,
    "team_rank": 5,
    "avg_fp2": 16.98,
    "opp_rank_allowed_fp2": 17,
    "opp_avg_allowed_fp2": 28.77,
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
    "headlineNews": "Solid six-catch effort",
    "report": "Godwin brought in six of 12 targets for 74 yards in the Buccaneers' 30-27 win over the Cardinals on Sunday.",
    "analysis": "Godwin certainly had plenty of opportunity for a bigger game, as he paced the team in targets with what was his second-highest number of looks this season. However, the third-year wideout was only able to come up with half of them, much of it based on Jameis Winston's inaccuracy, which led to an interception on one of those misfires involving Godwin. The Penn State product has followed up a three-game streak of 100-yard efforts with three consecutive games under that threshold, so he'll look to reverse his current pattern against the Saints in Week 11.",
    "timestamp": "2019-11-10 02:58 PM",
    "week01": 12.8,
    "week02": 22.1,
    "week03": 5.5,
    "week04": 35.2,
    "week05": 28.0,
    "week06": 20.1,
    "week07": "BYE",
    "week08": 8.3,
    "week09": 10.4,
    "week10": 10.4,
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.8, 22.1, 5.5, 35.2, 28.0, 20.1, 'BYE', 8.3, 10.4, 10.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.4, 6.8, 13.7, 7.9, 8.1, 8.6, 'BYE', 10.4, 13.9, 14.1, 11.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3120348.png",
    "name": "JuJu Smith-Schuster",
    "depthchart": "Starter: WR-1",
    "team": "Pittsburgh Steelers",
    "projected": 11.8,
    "opponent": "Cleveland Browns",
    "home_away": "at ",
    "opp_rank": 7,
    "team_rank": 27,
    "avg_fp2": 9.37,
    "opp_rank_allowed_fp2": 11,
    "opp_avg_allowed_fp2": 26.83,
    "fanduelSalary": "$6500",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Concussion",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/pit.png",
    "headlineNews": "Out with concussion",
    "report": "Smith-Schuster won't return to Thursday's game at Cleveland after suffering a concussion, Brian Batko of the Pittsburgh Post-Gazette reports.",
    "analysis": "Smith-Schuster was victim to a scary hit to the head over the middle of the field during the first half and initially remained face down on the field, but he was eventually helped off and went straight to the locker room. It's proving to be a disastrous night for the Steelers, with RB James Conner (shoulder) also leaving the game while the team faces a 14-0 first-half deficit. Smith-Schuster caught two of four targets for 21 yards before leaving the game. James Washington, Johnny Holton and Tevin Jones could see increased snaps at wide receiver as a result of the injury.",
    "timestamp": "2019-11-14 06:48 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.8, 10.9, 15.6, 3.0, 15.0, 1.2, 'BYE', 18.8, 3.1, 5.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.4, 14.0, 11.7, 15.9, 19.7, 10.9, 'BYE', 14.1, 13.2, 15.7, 11.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16737.png",
    "name": "Mike Evans",
    "depthchart": "Backup: WR-2",
    "team": "Tampa Bay Buccaneers",
    "projected": 11.5,
    "opponent": "New Orleans Saints",
    "home_away": "",
    "opp_rank": 10,
    "team_rank": 5,
    "avg_fp2": 18.16,
    "opp_rank_allowed_fp2": 17,
    "opp_avg_allowed_fp2": 28.77,
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
    "headlineNews": "Gets matchup upgrade",
    "report": "Evans has an improved Week 11 outlook with Saints cornerback Marshon Lattimore (hamstring) ruled out for Sunday's game, Carmen Vitali of the Buccaneers' official website reports.",
    "analysis": "It's been an interesting one-on-one matchup since Lattimore entered the league in 2017, with each bout producing a decisive winner. Evans roasted the Saints for 233 yards on just 13 targets in two games last season, but he then put up a goose egg in a Week 5 loss this year. The matchup is really only relevant for daily fantasy, considering Evans is on pace for a 96-1,643-12 receiving line. He's a solid WR1 in any season-long league, entering Sunday with four straight games with more than 80 yards.",
    "timestamp": "2019-11-15 02:43 PM",
    "week01": 3.8,
    "week02": 8.1,
    "week03": 41.0,
    "week04": 16.9,
    "week05": 0.0,
    "week06": 16.1,
    "week07": "BYE",
    "week08": 37.3,
    "week09": 30.0,
    "week10": 10.2,
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.8, 8.1, 41.0, 16.9, 0.0, 16.1, 'BYE', 37.3, 30.0, 10.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.9, 11.2, 17.1, 12.0, 14.9, 10.8, 'BYE', 8.3, 17.6, 21.2, 11.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3925357.png",
    "name": "Calvin Ridley",
    "depthchart": "Backup: WR-2",
    "team": "Atlanta Falcons",
    "projected": 11.1,
    "opponent": "Carolina Panthers",
    "home_away": "at ",
    "opp_rank": 11,
    "team_rank": 2,
    "avg_fp2": 10.33,
    "opp_rank_allowed_fp2": 23,
    "opp_avg_allowed_fp2": 30.33,
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
    "headlineNews": "Peels off long run in Week 10 win",
    "report": "Ridley caught three of five targets for 28 receiving yards and picked up 19 rushing yards on his lone carry during Sunday's 26-9 win against the Saints.",
    "analysis": "There are Sundays when Ridley booms, as well as Sundays when Ridley busts. Week 10 was an instance of the latter, as Ridley was held under 35 receiving yards with zero touchdowns for the fourth time over his past seven outings. Though he has been inconsistent for stretches of the season thus far, there is reason to believe he will soon see an increase in workload as result of Mohamed Sanu's trade to New England, as well as Austin Hooper's potential absence due to a knee injury suffered Sunday. Despite the probable uptick in volume, Atlanta's upcoming opponent does not present a scenario for Ridley to be re-inserted into lineups with absolute confidence, as the Falcons will be facing off against Carolina's top-10 pass defense in Week 11.",
    "timestamp": "2019-11-10 04:49 PM",
    "week01": 14.4,
    "week02": 20.5,
    "week03": 1.1,
    "week04": 4.7,
    "week05": 17.3,
    "week06": 12.8,
    "week07": 5.0,
    "week08": 11.0,
    "week09": "BYE",
    "week10": 6.2,
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.4, 20.5, 1.1, 4.7, 17.3, 12.8, 5.0, 11.0, 'BYE', 6.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.8, 12.9, 8.5, 9.7, 9.4, 10.7, 13.2, 8.4, 'BYE', 9.4, 11.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2978109.png",
    "name": "Zach Pascal",
    "depthchart": "Starter: WR-1",
    "team": "Indianapolis Colts",
    "projected": 11.1,
    "opponent": "Jacksonville Jaguars",
    "home_away": "",
    "opp_rank": 11,
    "team_rank": 25,
    "avg_fp2": 7.82,
    "opp_rank_allowed_fp2": 14,
    "opp_avg_allowed_fp2": 27.64,
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
    "headlineNews": "Fails to build on breakout",
    "report": "Pascal hauled in two of seven targets for 26 yards in the team's Week 10 loss to the Dolphins.",
    "analysis": "Pascal was the victim of a poor performance by Brian Hoyer, as he finished tied for second on the team with seven targets. He also accounted for the team's longest play from scrimmage, coming on a 23-yard reception during the team's first drive of the game. If T.Y. Hilton (calf) remains out and Jacoby Brissett (knee) is able to return, Pascal could be in a good position to bounce back in Week 11 against the Jaguars.",
    "timestamp": "2019-11-10 07:00 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 0.0, 12.3, 9.2, 2.5, 'BYE', 25.6, 1.1, 16.1, 3.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [-1.2, 1.5, 1.8, 1.5, 0.8, 'BYE', 5.4, 6.8, 8.5, 13.2, 11.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13295.png",
    "name": "Emmanuel Sanders",
    "depthchart": "Starter: WR-1",
    "team": "San Francisco 49ers",
    "projected": 10.9,
    "opponent": "Arizona Cardinals",
    "home_away": "",
    "opp_rank": 31,
    "team_rank": 22,
    "avg_fp2": 10.03,
    "opp_rank_allowed_fp2": 24,
    "opp_avg_allowed_fp2": 30.54,
    "fanduelSalary": "$6900",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Ribs",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "Hoping to play",
    "report": "Sanders (ribs) said he will try to play in Sunday's game against the Cardinals, Matt Barrows of The Athletic reports.",
    "analysis": "Sanders is listed as questionable after failing to practice in any capacity Wednesday through Friday, though he reportedly increased his activity level in individual workouts as the week moved along. This sounds like a matter of pain tolerance, with the wide receiver potentially determining his Week 11 availability after a pregame workout in the lead up to Sunday's 4:05 p.m. ET kickoff. Deebo Samuel and Kendrick Bourne are the top candidates to see extra targets in the event of a Sanders absence, with Dante Pettis (groin), Marquise Goodwin and Richie James also in the mix. Things could get a bit tricky relying on the inactive list, as the 49ers have five players listed as \"out\" or \"doubtful\" and another five listed as \"questionable.\" Each team gets seven inactive slots, so the Niners may not have enough space to cover all their players that aren't healthy enough to play.",
    "timestamp": "2019-11-15 03:01 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [17.1, 23.3, 2.0, 'BYE', 1.4, 0.5, 8.5, 10.5, 20.7, 3.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.3, 10.0, 11.1, 'BYE', 10.8, 7.0, 6.9, 8.1, 13.5, 13.6, 10.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2587819.png",
    "name": "Tyrell Williams",
    "depthchart": "Starter: WR-1",
    "team": "Oakland Raiders",
    "projected": 10.6,
    "opponent": "Cincinnati Bengals",
    "home_away": "",
    "opp_rank": 22,
    "team_rank": 15,
    "avg_fp2": 11.57,
    "opp_rank_allowed_fp2": 13,
    "opp_avg_allowed_fp2": 27.35,
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
    "headlineNews": "Nondescript line in win",
    "report": "Williams secured three of five targets for 25 yards in the Raiders' 26-24 win over the Chargers on Thursday.",
    "analysis": "Williams' long reception went for a modest 12 yards, even as he tied with several players for the team lead in targets. The 27-year-old speedster opened the season with touchdown receptions in each of the first five games he suited up for, but he's now been kept out of the end zone in consecutive contests. Williams does have at least three grabs in each game this season, but he'll look to bounce back from Thursday's season-low yardage tally against the Bengals in a Week 11 matchup a week from Sunday.",
    "timestamp": "2019-11-07 09:40 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [19.5, 13.1, 10.4, 11.1, 'DNP', 'BYE', 'DNP', 16.6, 6.3, 4.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.9, 14.7, 6.7, 11.6, 'DNP', 'BYE', 'DNP', 13.9, 14.9, 7.4, 10.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2976499.png",
    "name": "Amari Cooper",
    "depthchart": "Starter: WR-1",
    "team": "Dallas Cowboys",
    "projected": 10.0,
    "opponent": "Detroit Lions",
    "home_away": "at ",
    "opp_rank": 28,
    "team_rank": 3,
    "avg_fp2": 17.03,
    "opp_rank_allowed_fp2": 21,
    "opp_avg_allowed_fp2": 29.77,
    "fanduelSalary": "$8100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#7F9695",
    "tmColorDark": "#041E42",
    "tmColorLite_rgba": "rgba(127, 150, 149, 0.2)",
    "tmColorDark_rgba": "rgba(4, 30, 66, 0.2)",
    "tmTextLite": "#7F9695",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
    "headlineNews": "Cleared for Sunday",
    "report": "Cooper (knee/ankle) doesn't have an injury designation for Sunday's game in Detroit, Michael Gehlken of The Dallas Morning News reports.",
    "analysis": "A thigh bruise in Week 6 forced Cooper out of a loss to the Jets after just three snaps, but he's otherwise been able to play at a high level while battling a variety of physical issues. His presence at practice Thursday and Friday suggests he'll be fine to handle his usual workload come Sunday, potentially drawing a shadow matchup with Lions cornerback Darius Slay.",
    "timestamp": "2019-11-15 01:18 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [19.6, 12.4, 23.8, 7.3, 34.1, 0.8, 13.1, 'BYE', 16.0, 26.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.8, 12.8, 10.9, 11.4, 11.7, 10.3, 17.9, 'BYE', 22.3, 14.3, 10.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3128451.png",
    "name": "Tre'Quan Smith",
    "depthchart": "Backup: WR-2",
    "team": "New Orleans Saints",
    "projected": 9.9,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "at ",
    "opp_rank": 32,
    "team_rank": 9,
    "avg_fp2": 5.93,
    "opp_rank_allowed_fp2": 32,
    "opp_avg_allowed_fp2": 40.27,
    "fanduelSalary": "$4900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9b845c",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(155, 132, 92, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#9b845c",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
    "headlineNews": "Held to just one catch",
    "report": "Smith caught one of two targets for 13 receiving yards during Sunday's 26-9 loss to the Falcons.",
    "analysis": "In his return from a three-game, injury-induced absence, Smith's disappointing 2019 campaign continued as the Saints were held without a passing touchdown for the third time this season. If a second wide receiver has not emerged in the Saints' passing attack yet this season, one has to wonder if it will ever happen. Outside of Michael Thomas' performance, Sunday's showing was one of the weakest of the year for the New Orleans' receiving corps, as all other Saints wide receivers besides Thomas combined for two catches and 16 yards. Week 11 provides a glimpse of hope for either Smith or Ted Ginn Jr. to be viable as a bye-week fill in, with New Orleans going up against Tampa Bay's bottom-ranked pass defense.",
    "timestamp": "2019-11-10 03:31 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.6, 6.4, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 1.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.4, 5.7, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 5.0, 9.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/12649.png",
    "name": "Julian Edelman",
    "depthchart": "Starter: WR-1",
    "team": "New England Patriots",
    "projected": 9.9,
    "opponent": "Philadelphia Eagles",
    "home_away": "at ",
    "opp_rank": 18,
    "team_rank": 8,
    "avg_fp2": 13.74,
    "opp_rank_allowed_fp2": 27,
    "opp_avg_allowed_fp2": 33.09,
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
    "headlineNews": "Monster PPR effort",
    "report": "Edelman (chest/shoulder) caught 10 passes (11 targets) for 89 yards in Sunday's 37-20 loss to the Ravens.",
    "analysis": "Edelman did cough up a costly fumble, but it was a small price to pay for those in PPR formats who benefited from a season-high 10 receptions. The 33-year-old was dealing with a couple of minor injuries, but he didn't seem to be hampered by either issue and was on the field for his usual share of snaps. The Patriots' upcoming bye week will help Edelman get closer to full strength before a Week 11 matchup against a soft Philadelphia pass defense (256.1 passing yards allowed per game).",
    "timestamp": "2019-11-03 09:45 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [13.38, 7.2, 15.7, 5.0, 21.0, 15.8, 10.2, 23.5, 11.9, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.4, 15.2, 9.5, 12.5, 11.8, 16.0, 15.0, 13.0, 12.1, 'BYE', 9.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15880.png",
    "name": "Robert Woods",
    "depthchart": "Starter: WR-1",
    "team": "Los Angeles Rams",
    "projected": 9.5,
    "opponent": "Chicago Bears",
    "home_away": "",
    "opp_rank": 15,
    "team_rank": 6,
    "avg_fp2": 10.24,
    "opp_rank_allowed_fp2": 4,
    "opp_avg_allowed_fp2": 21.96,
    "fanduelSalary": "$2",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Just misses century mark",
    "report": "Woods caught seven of 11 targets for 95 yards in Sunday's 17-12 loss to the Steelers.",
    "analysis": "With Brandin Cooks (concussion) out and Cooper Kupp effectively neutralized by the Pittsburgh secondary, Woods was Jared Goff's most reliable remaining option, and he led the Rams in receiving yards. It's only the third time this season he's seen double-digit targets, and after catching 11 TD passes over the prior two campaigns Woods has yet to haul one in this year, although he does have a rushing touchdown. He'll have a hard time snapping that drought in Week 11 against a stingy and desperate Bears secondary.",
    "timestamp": "2019-11-10 07:30 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.6, 5.2, 7.3, 22.9, 7.3, 7.6, 11.1, 5.2, 'BYE', 13.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.9, 14.0, 8.3, 11.9, 14.4, 10.9, 9.0, 9.6, 'BYE', 12.1, 9.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3921564.png",
    "name": "Auden Tate",
    "depthchart": "Backup: WR-2",
    "team": "Cincinnati Bengals",
    "projected": 9.3,
    "opponent": "Oakland Raiders",
    "home_away": "at ",
    "opp_rank": 30,
    "team_rank": 14,
    "avg_fp2": 7.71,
    "opp_rank_allowed_fp2": 27,
    "opp_avg_allowed_fp2": 33.41,
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
    "headlineNews": "Brings in three receptions in loss",
    "report": "Tate caught three of six targets for 36 yards during Sunday's 49-13 loss to Baltimore.",
    "analysis": "Sunday's loss was the first time in over a month that Tate was held to under 60 yards. The dynamic sophomore has been targeted at least six times in seven consecutive games and boasts big-play potential, but with Andy Dalton and now rookie Ryan Finley throwing him the ball, he's mostly been held in check this season. Sunday brings a matchup against a weak Raiders pass defense and more conjecture about when A.J. Green (ankle) will return to the field after unsuccessful workouts earlier this week.",
    "timestamp": "2019-11-10 04:43 PM",
    "week01": "DNP",
    "week02": 1.1,
    "week03": 9.8,
    "week04": 7.0,
    "week05": 10.1,
    "week06": 11.6,
    "week07": 8.0,
    "week08": 9.0,
    "week09": "BYE",
    "week10": 5.1,
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 1.1, 9.8, 7.0, 10.1, 11.6, 8.0, 9.0, 'BYE', 5.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 2.8, 2.8, 5.6, 7.7, 6.9, 7.4, 6.1, 'BYE', 11.4, 9.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15072.png",
    "name": "Marvin Jones",
    "depthchart": "Backup: WR-2",
    "team": "Detroit Lions",
    "projected": 9.3,
    "opponent": "Dallas Cowboys",
    "home_away": "",
    "opp_rank": 6,
    "team_rank": 4,
    "avg_fp2": 13.46,
    "opp_rank_allowed_fp2": 2,
    "opp_avg_allowed_fp2": 20.71,
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
    "headlineNews": "Not impacted by Stafford's absence",
    "report": "Jones caught five of six targets for a team-high 77 yards in Sunday's 20-13 loss to the Bears.",
    "analysis": "It was encouraging to see Jones post a typical stat line with Jeff Driskel filling in for Matthew Stafford (back) under center. While Jones' ceiling is certainly lower sans Stafford, he should remain a viable fantasy option against the Cowboys in Week 11 regardless of whether the Lions' starting quarterback makes his return.",
    "timestamp": "2019-11-10 02:38 PM",
    "week01": 8.0,
    "week02": 6.8,
    "week03": 19.1,
    "week04": 9.2,
    "week05": "BYE",
    "week06": 2.7,
    "week07": 38.3,
    "week08": 4.2,
    "week09": 22.6,
    "week10": 10.2,
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.0, 6.8, 19.1, 9.2, 'BYE', 2.7, 38.3, 4.2, 22.6, 10.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.1, 7.1, 11.6, 6.6, 'BYE', 8.0, 7.2, 7.4, 7.0, 9.4, 9.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16790.png",
    "name": "Jarvis Landry",
    "depthchart": "Backup: WR-2",
    "team": "Cleveland Browns",
    "projected": 9.0,
    "opponent": "Pittsburgh Steelers",
    "home_away": "",
    "opp_rank": 12,
    "team_rank": 19,
    "avg_fp2": 11.19,
    "opp_rank_allowed_fp2": 16,
    "opp_avg_allowed_fp2": 28.55,
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
    "headlineNews": "Keeps TD streak going in win",
    "report": "Landry secured four of seven targets for 43 yards and a touchdown in the Browns' 21-7 win over the Steelers on Thursday.",
    "analysis": "The highlight of Landry's night was a one-yard touchdown reception in the second quarter on a play where he was schemed wide open in the left side of the end zone. The veteran wideout has now logged a receiving score in three consecutive games, although Thursday saw the streak of double-digit target tallies he'd forged over the same span come to an end. Landry will look to boost his overall numbers when he faces some of his old Dolphins teammates in a Week 12 matchup, a week from this coming Sunday.",
    "timestamp": "2019-11-14 09:28 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.7, 4.7, 7.7, 20.7, 9.5, 5.1, 'BYE', 9.0, 14.1, 20.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.0, 11.8, 6.6, 11.2, 7.8, 6.8, 'BYE', 8.5, 6.0, 8.5, 9.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3115365.png",
    "name": "Trey Quinn",
    "depthchart": "Backup: WR-2",
    "team": "Washington Redskins",
    "projected": 8.7,
    "opponent": "New York Jets",
    "home_away": "",
    "opp_rank": 26,
    "team_rank": 31,
    "avg_fp2": 3.84,
    "opp_rank_allowed_fp2": 31,
    "opp_avg_allowed_fp2": 35.54,
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
    "headlineNews": "Limited to one reception",
    "report": "Quinn caught one of three targets for nine yards in Sunday's 24-9 loss to Buffalo.",
    "analysis": "Quinn played 61 percent of the offensive snaps, his largest share since Bill Callahan took over as interim head coach. The slot receiver is averaging 1.5 catches for 15.5 yards on 3.3 targets in four games under Callahan, compared to 3.6 catches for 25.4 yards on 5.6 targets in five weeks with Jay Gruden as head coach. Washington is on bye Week 10, followed by a Week 11 home game against the Jets.",
    "timestamp": "2019-11-04 02:04 PM",
    "week01": 11.3,
    "week02": 5.6,
    "week03": 5.5,
    "week04": 2.0,
    "week05": 1.0,
    "week06": 1.8,
    "week07": 4.0,
    "week08": 2.0,
    "week09": 1.4,
    "week10": "BYE",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.3, 5.6, 5.5, 2.0, 1.0, 1.8, 4.0, 2.0, 1.4, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.7, 7.9, 6.5, 6.8, 6.0, 5.3, 2.4, 4.0, 4.2, 'BYE', 8.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3115394.png",
    "name": "D.J. Chark",
    "depthchart": "Starter: WR-1",
    "team": "Jacksonville Jaguars",
    "projected": 8.6,
    "opponent": "Indianapolis Colts",
    "home_away": "at ",
    "opp_rank": 9,
    "team_rank": 14,
    "avg_fp2": 14.3,
    "opp_rank_allowed_fp2": 10,
    "opp_avg_allowed_fp2": 25.5,
    "fanduelSalary": "$6000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#006778",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 103, 120, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#006778",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/jax.png",
    "headlineNews": "First time under 40 yards in 2019",
    "report": "Chark caught four of nine targets for 32 yards in Sunday's 26-3 loss to the Texans in London.",
    "analysis": "Chark finished with a season-low receiving yardage total, as the entire Jaguars offense was stuck in low gear throughout. This was just a small bump in the road for Chark's second-year breakout campaign. It's unclear at this point whether he'll be catching passes from Gardner Minshew or Nick Foles after Jacksonville's Week 10 bye, but you should continue to deploy Chark as you normally would either way.",
    "timestamp": "2019-11-03 10:19 AM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [22.6, 15.0, 15.6, 6.4, 32.4, 5.8, 8.8, 16.9, 5.2, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [0.5, 6.1, 5.0, 6.9, 7.3, 10.3, 10.2, 11.6, 12.9, 'BYE', 8.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/10453.png",
    "name": "Ted Ginn",
    "depthchart": "Reserve: WR-3",
    "team": "New Orleans Saints",
    "projected": 7.9,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "at ",
    "opp_rank": 32,
    "team_rank": 9,
    "avg_fp2": 5.27,
    "opp_rank_allowed_fp2": 32,
    "opp_avg_allowed_fp2": 40.27,
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
    "headlineNews": "Held without a catch in loss",
    "report": "Ginn recorded one carry for five yards, while failing to bring in any of his three targets in the Saints' 26-9 loss to the Falcons on Sunday.",
    "analysis": "For the second time this season, Ginn posted a donut in the receiving column. He's now gone for under 20 yards receiving in four games this year, accounting for just one score and failing to muster even 50 yards since Week 1's 101-yard outburst. Ginn's value is tied to his deep-ball prowess, though the Saints' gameplan has largely leaned on the running and short-passing game, limiting the speedy receiver's upside.",
    "timestamp": "2019-11-10 02:53 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [13.6, 0.0, 2.5, 3.4, 10.6, 5.8, 5.8, 5.2, 'BYE', 0.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.2, 4.3, 4.2, 5.3, 8.0, 5.7, 4.7, 7.5, 'BYE', 7.2, 7.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/5528.png",
    "name": "Larry Fitzgerald",
    "depthchart": "Backup: WR-2",
    "team": "Arizona Cardinals",
    "projected": 7.9,
    "opponent": "San Francisco 49ers",
    "home_away": "at ",
    "opp_rank": 1,
    "team_rank": 16,
    "avg_fp2": 9.26,
    "opp_rank_allowed_fp2": 5,
    "opp_avg_allowed_fp2": 22.31,
    "fanduelSalary": "$5400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#97233F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(151, 35, 63, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#97233F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
    "headlineNews": "Racks up catches in loss",
    "report": "Fitzgerald secured all eight targets for 71 yards in the Cardinals' 30-27 loss to the Buccaneers on Sunday.",
    "analysis": "Fitzgerald paced the Cardinals in receptions and checked in second to Christian Kirk in both receiving yardage and targets. The ageless veteran's yardage total was his third highest of the season, and it was Fitzgerald's most productive effort overall since Week 2. The 36-year-old's surge certainly was a welcome sight for fantasy owners, but it did come with the caveat of having occurred versus one of the worst secondaries in the league. Fitzgerald will look to replicate his efforts against the much tougher 49ers secondary Week 11.",
    "timestamp": "2019-11-10 02:40 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [21.3, 12.9, 12.1, 7.2, 8.8, 9.9, 1.7, 1.8, 5.8, 11.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.1, 14.5, 13.4, 9.2, 10.3, 18.3, 14.2, 12.6, 6.1, 14.5, 7.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3932905.png",
    "name": "Diontae Johnson",
    "depthchart": "Backup: WR-2",
    "team": "Pittsburgh Steelers",
    "projected": 7.8,
    "opponent": "Cleveland Browns",
    "home_away": "at ",
    "opp_rank": 7,
    "team_rank": 27,
    "avg_fp2": 7.62,
    "opp_rank_allowed_fp2": 11,
    "opp_avg_allowed_fp2": 26.83,
    "fanduelSalary": "$5200",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Concussion",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/pit.png",
    "headlineNews": "Enters concussion protocol",
    "report": "Johnson was diagnosed with a concussion after exiting Thursday's 21-7 loss to the Browns following a helmet-to-helmet hit from Cleveland safety Damarious Randall, Adam Schefter of ESPN reports.",
    "analysis": "Pittsburgh ended up losing both of their top two receivers to concussions in the contest, as JuJu Smith-Schuster exited in the first half with the head injury before Johnson followed him to the locker room in the third quarter. Johnson's concussion may have been the more significant of the two, as Schefter notes the rookie was bleeding from his ear after being hit by Randall. Johnson will need to clear the NFL's five-step protocol before he's able to play again, but the fact that Pittsburgh's next game won't come until Nov. 24 in Cincinnati should aid his efforts.",
    "timestamp": "2019-11-15 01:28 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.0, 2.2, 13.3, 14.7, 5.68, 2.4, 'BYE', 16.9, 1.0, 8.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.8, 3.9, 4.1, 4.5, 5.6, 2.4, 'BYE', 8.3, 8.4, 7.2, 7.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2576623.png",
    "name": "DeVante Parker",
    "depthchart": "Starter: WR-1",
    "team": "Miami Dolphins",
    "projected": 7.7,
    "opponent": "Buffalo Bills",
    "home_away": "",
    "opp_rank": 3,
    "team_rank": 29,
    "avg_fp2": 9.71,
    "opp_rank_allowed_fp2": 7,
    "opp_avg_allowed_fp2": 22.99,
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
    "headlineNews": "Paces Dolphins with 10 targets",
    "report": "Parker converted five of his 10 targets into receptions for 69 yards in the team's Week 10 victory over the Colts.",
    "analysis": "Parker continued his emergence as the team's alpha receiver, with no other Dolphin topping six targets. In addition to the volume, Parker provided some threat down the field by hauling in two passes for 20 or more yards and surpassing 10 yards on four of his five receptions. Though he has yet to reach the century mark, Parker now has four consecutive games with more than 50 receiving yards. However, he'll be put to the test in the team's Week 11 matchup against the Bills, as he is likely to be shadowed by Tre'Davious White.",
    "timestamp": "2019-11-10 05:07 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.0, 0.0, 7.1, 15.0, 'BYE', 10.3, 14.0, 8.9, 13.7, 9.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.3, 7.3, 6.6, 5.1, 'BYE', 7.6, 5.2, 9.0, 10.5, 6.8, 7.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16799.png",
    "name": "Allen Robinson",
    "depthchart": "Starter: WR-1",
    "team": "Chicago Bears",
    "projected": 7.6,
    "opponent": "Los Angeles Rams",
    "home_away": "at ",
    "opp_rank": 17,
    "team_rank": 30,
    "avg_fp2": 11.81,
    "opp_rank_allowed_fp2": 12,
    "opp_avg_allowed_fp2": 26.97,
    "fanduelSalary": "$3",
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
    "report": "Robinson caught six passes for 86 yards in the Bears' 20-13 win over the Lions on Sunday.",
    "analysis": "Robinson was targeted on nine of Mitchell Trubisky's 23 passes, and though many of them were off target, he continued to use his amazing athleticism to make difficult contested catches. Robinson could've had a bigger day, but a fantastic defensive play by a defender knocked the ball free on what would have been a reception of over 20 yards, and he also drew a long pass interference penalty. Over his last seven games, he's failed to reach 60 yards on just one occasion and continues to be a steady source of fantasy production.",
    "timestamp": "2019-11-10 02:32 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [13.7, 6.1, 9.0, 11.2, 25.2, 'BYE', 19.7, 8.7, 1.1, 11.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.1, 15.0, 10.9, 9.7, 11.8, 'BYE', 7.1, 11.0, 11.7, 11.5, 7.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2574808.png",
    "name": "Robby Anderson",
    "depthchart": "Starter: WR-1",
    "team": "New York Jets",
    "projected": 7.4,
    "opponent": "Washington Redskins",
    "home_away": "at ",
    "opp_rank": 13,
    "team_rank": 32,
    "avg_fp2": 5.92,
    "opp_rank_allowed_fp2": 16,
    "opp_avg_allowed_fp2": 29.09,
    "fanduelSalary": "$5400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#125740",
    "tmColorDark": "#003f2d",
    "tmColorLite_rgba": "rgba(18, 87, 64, 0.2)",
    "tmColorDark_rgba": "rgba(0, 63, 45, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png",
    "headlineNews": "Cleared to play Sunday",
    "report": "Anderson (shoulder/back) doesn't carry an injury designation into Sunday's game against Washington after practicing fully Friday, Manish Mehta of the New York Daily News reports.",
    "analysis": "While Anderson's playing status is no longer in doubt, his Week 11 fantasy utility is debatable. The speedy wideout maintains a degree of big-play upside, but he's been a hit-or-miss option of late and is coming off a quiet effort in the Week 10 win over the Giants. In that contest, he caught just one of his three targets for 11 yards, despite playing 54 of the Jets' 65 offensive snaps.",
    "timestamp": "2019-11-15 01:07 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.8, 10.1, 2.6, 'BYE', 2.1, 21.0, 1.5, 6.3, 4.3, 1.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.6, 7.5, 9.5, 'BYE', 10.6, 6.9, 9.4, 9.7, 13.2, 13.0, 7.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3126486.png",
    "name": "Deebo Samuel",
    "depthchart": "Backup: WR-2",
    "team": "San Francisco 49ers",
    "projected": 7.1,
    "opponent": "Arizona Cardinals",
    "home_away": "",
    "opp_rank": 31,
    "team_rank": 22,
    "avg_fp2": 8.09,
    "opp_rank_allowed_fp2": 24,
    "opp_avg_allowed_fp2": 30.54,
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
    "headlineNews": "Tops century mark in loss",
    "report": "Samuel caught eight of 11 targets for 112 yards in Monday night's 27-24 overtime loss to the Seahawks.",
    "analysis": "Samuel's career-best outing saw him pick up the slack after fellow wideout Emmanuel Sanders was forced to exit due to a rib injury. With Pro Bowl tight end George Kittle (knee/ankle) sidelined as well, Samuel led San Francisco in all major receiving categories, adding a game-long gain of 30 yards for good measure. The rookie second-rounder would figure to remain a focal point should Sanders and Kittle remain out in Week 11 versus the Cardinals, but their availability will need to be tracked in advance of kickoff in order to form a clearer outlook.",
    "timestamp": "2019-11-11 09:23 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.2, 17.9, 5.9, 'BYE', 0.8, 3.4, 'DNP', 12.3, 6.0, 15.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.5, 3.4, 11.9, 'BYE', 5.3, 6.8, 'DNP', 6.1, 6.1, 4.1, 7.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3057987.png",
    "name": "DaeSean Hamilton",
    "depthchart": "Backup: WR-2",
    "team": "Denver Broncos",
    "projected": 7.0,
    "opponent": "Minnesota Vikings",
    "home_away": "at ",
    "opp_rank": 18,
    "team_rank": 28,
    "avg_fp2": 1.79,
    "opp_rank_allowed_fp2": 26,
    "opp_avg_allowed_fp2": 33.26,
    "fanduelSalary": "$5300",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Knee",
    "tmColorLite": "#e17757",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(225, 119, 87, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#e17757",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/den.png",
    "headlineNews": "Listed as questionable",
    "report": "Hamilton (knee) is listed as questionable for Sunday's game against the Vikings, Nicki Jhabvala of The Athletic reports.",
    "analysis": "With Bryce Callahan known to be out with a foot injury, Hamilton is just one of three Denver players whose Week 11 status is uncertain. The wideout was at least optimistic about his status when asked about the matter Friday, telling Zac Stevens of TheDNVR.com he would be good to go for the weekend after tweaking his knee in Thursday's practice. In any event, the second-year player is a speculative fantasy option, given that he's been limited to 11 catches (on 23 targets) for 106 yards in nine games to date this season.",
    "timestamp": "2019-11-15 12:45 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.5, 2.5, 0.0, 7.2, 0.0, 3.5, 1.4, 0.0, 0.0, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.6, 2.5, 4.4, 3.0, 2.9, 2.9, 4.7, 7.4, 4.3, 'BYE', 7.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16804.png",
    "name": "John Brown",
    "depthchart": "Starter: WR-1",
    "team": "Buffalo Bills",
    "projected": 6.7,
    "opponent": "Miami Dolphins",
    "home_away": "at ",
    "opp_rank": 19,
    "team_rank": 24,
    "avg_fp2": 11.54,
    "opp_rank_allowed_fp2": 20,
    "opp_avg_allowed_fp2": 29.56,
    "fanduelSalary": "$5900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#005596",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 85, 150, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
    "headlineNews": "Records 77 receiving yards",
    "report": "Brown caught five of 11 targets for 77 yards during Sunday's 19-16 loss to the Browns.",
    "analysis": "Brown, who tied his season high of 11 targets, also led the team in catches and receiving yards. Although he has just one touchdown since Week 1, he's been quite consistent and now has at least 75 receiving yards in four of the last five games. Brown's weekly ceiling isn't the highest, but he continues to see plenty of opportunities and is quietly on pace for over 1,200 yards this season. He'll look to keep it up in next Sunday's favorable matchup against the Dolphins.",
    "timestamp": "2019-11-10 03:14 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [21.8, 10.7, 7.5, 9.4, 10.0, 'BYE', 16.8, 7.9, 9.6, 10.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.9, 13.9, 12.6, 10.2, 9.6, 'BYE', 11.3, 7.9, 9.5, 9.2, 6.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3045138.png",
    "name": "Mike Williams",
    "depthchart": "Backup: WR-2",
    "team": "Los Angeles Chargers",
    "projected": 6.7,
    "opponent": "Kansas City Chiefs",
    "home_away": "",
    "opp_rank": 8,
    "team_rank": 8,
    "avg_fp2": 8.24,
    "opp_rank_allowed_fp2": 6,
    "opp_avg_allowed_fp2": 22.55,
    "fanduelSalary": "$5800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0080C6",
    "tmColorDark": "#002A5E",
    "tmColorLite_rgba": "rgba(0, 128, 198, 0.2)",
    "tmColorDark_rgba": "rgba(0, 42, 94, 0.2)",
    "tmTextLite": "#0080C6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lac.png",
    "headlineNews": "Kept to two catches in loss",
    "report": "Williams secured two of three targets for 55 yards in the Chargers' 26-24 loss to the Raiders on Thursday.",
    "analysis": "The majority of Williams' production came on a game-long 45-yard grab, but he was otherwise held in check by an aggressive Raiders defense. Williams had put together a season-high 111-yard performance in Week 9 versus the Packers, so the upside is certainly there for the 2017 first-round pick. However, Williams continues to see a relatively modest target share most weeks (six or fewer looks in four straight games), but he'll look to garner more opportunities versus the Chiefs in a Week 11 Monday night AFC West battle on Nov. 18.",
    "timestamp": "2019-11-07 09:20 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.9, 9.8, 6.0, 'DNP', 10.4, 9.7, 6.7, 8.4, 12.8, 6.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.2, 9.4, 8.1, 'DNP', 5.5, 6.8, 6.1, 5.9, 6.4, 11.3, 6.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4036348.png",
    "name": "Michael Gallup",
    "depthchart": "Backup: WR-2",
    "team": "Dallas Cowboys",
    "projected": 6.7,
    "opponent": "Detroit Lions",
    "home_away": "at ",
    "opp_rank": 28,
    "team_rank": 3,
    "avg_fp2": 12.5,
    "opp_rank_allowed_fp2": 21,
    "opp_avg_allowed_fp2": 29.77,
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
    "headlineNews": "Finds end zone",
    "report": "Gallup caught four passes (10 targets) for 76 yards and a touchdown in Sunday's 28-24 loss to Minnesota.",
    "analysis": "All three of the Cowboys' top receivers went off in this contest, but their collective efforts fell just short in an exciting primetime matchup. Gallup's 10 targets were good for second among all of Dak Prescott's receiving options. The second-year wideout has looked good in the No. 2 spot on the depth chart behind Amari Cooper, and he has shown the ability to produce big performances in games where Prescott is asked to shoulder more of the offensive workload. Gallup is worthy of flex consideration in a plus matchup against the Lions next Sunday.",
    "timestamp": "2019-11-11 12:03 AM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [19.3, 9.8, 'DNP', 'DNP', 20.8, 6.8, 4.9, 'BYE', 10.3, 15.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.3, 6.8, 'DNP', 'DNP', 5.3, 6.4, 13.7, 'BYE', 17.7, 7.8, 6.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3892889.png",
    "name": "Dede Westbrook",
    "depthchart": "Backup: WR-2",
    "team": "Jacksonville Jaguars",
    "projected": 6.6,
    "opponent": "Indianapolis Colts",
    "home_away": "at ",
    "opp_rank": 9,
    "team_rank": 14,
    "avg_fp2": 7.79,
    "opp_rank_allowed_fp2": 10,
    "opp_avg_allowed_fp2": 25.5,
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
    "headlineNews": "Returns to full practice",
    "report": "Westbrook (neck/shoulder) practiced fully Wednesday.",
    "analysis": "Westbrook is now poised to see his first game action since Week 8, and in his looming return to the lineup he'll be catching passes from Nick Foles, who's back from a collarbone injury and now slated to reclaim the Jaguars' starting quarterback job. It remains to be seen how well Westbrook and Foles click, but as long as he can stay healthy, the wideout should draw enough targets Sunday against the Colts to re-enter the fantasy radar in Week 11, at least in PPR formats.",
    "timestamp": "2019-11-13 01:58 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.7, 0.8, 7.5, 9.1, 11.74, 6.8, 14.7, 0.0, 'DNP', 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.5, 13.7, 7.6, 8.7, 10.2, 6.8, 8.9, 12.6, 'DNP', 'BYE', 6.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13216.png",
    "name": "Demaryius Thomas",
    "depthchart": "Backup: WR-2",
    "team": "New York Jets",
    "projected": 6.6,
    "opponent": "Washington Redskins",
    "home_away": "at ",
    "opp_rank": 13,
    "team_rank": 32,
    "avg_fp2": 7.28,
    "opp_rank_allowed_fp2": 16,
    "opp_avg_allowed_fp2": 29.09,
    "fanduelSalary": "$5200",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Knee",
    "tmColorLite": "#125740",
    "tmColorDark": "#003f2d",
    "tmColorLite_rgba": "rgba(18, 87, 64, 0.2)",
    "tmColorDark_rgba": "rgba(0, 63, 45, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png",
    "headlineNews": "Listed as questionable",
    "report": "Thomas (knee/hamstring) is listed as questionable for Sunday's game against Washington after practicing in a limited fashion this week, Ralph Vacchiano of SportsNet New York reports.",
    "analysis": "Of the eight players the Jets list as questionable for Week 11, Thomas seems among those most likely to play, given that he practiced all week. Assuming he's good to go Sunday, the veteran wideout brings some PPR utility to the table since he's been starting and logging regular snaps for the Jets. Thomas turned in one of his better outings of the season in last week's 34-27 win over the Giants, grabbing six balls for 84 yards.",
    "timestamp": "2019-11-15 01:16 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'BYE', 6.7, 8.2, 5.7, 8.8, 2.9, 11.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'BYE', 8.1, 6.4, 7.1, 9.1, 13.6, 8.0, 6.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16725.png",
    "name": "Sammy Watkins",
    "depthchart": "Backup: WR-2",
    "team": "Kansas City Chiefs",
    "projected": 6.4,
    "opponent": "Los Angeles Chargers",
    "home_away": "at ",
    "opp_rank": 5,
    "team_rank": 1,
    "avg_fp2": 11.05,
    "opp_rank_allowed_fp2": 8,
    "opp_avg_allowed_fp2": 23.65,
    "fanduelSalary": "$6100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Bottled up by Titans",
    "report": "Watkins caught five of nine targets for 39 yards and added 12 yards on two carries during Sunday's 35-32 loss to the Titans.",
    "analysis": "Watkins' 7.8 yards per reception represented his most modest output of the season and he's averaging just 10.1 yards per catch with no touchdowns since Week 1's dominant performance. Any receiver who is averaging 9.3 targets per game in a prolific offense like Watkins is warrants consideration each and every week, but -- until he shows that he's more than an underneath target in this iteration of the Andy Reid attack -- fans might want to curb their expectations. A favorable matchup is on deck for next Monday night against a struggling Chargers squad.",
    "timestamp": "2019-11-10 03:03 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [42.3, 7.9, 8.9, 4.9, 0.0, 'DNP', 'DNP', 7.0, 9.8, 7.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.1, 12.6, 12.3, 15.8, 10.2, 'DNP', 'DNP', 10.4, 7.8, 10.5, 6.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2971618.png",
    "name": "Nelson Agholor",
    "depthchart": "Starter: WR-1",
    "team": "Philadelphia Eagles",
    "projected": 6.3,
    "opponent": "New England Patriots",
    "home_away": "",
    "opp_rank": 2,
    "team_rank": 21,
    "avg_fp2": 6.77,
    "opp_rank_allowed_fp2": 1,
    "opp_avg_allowed_fp2": 18.04,
    "fanduelSalary": "$4800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#386168",
    "tmColorDark": "#004C54",
    "tmColorLite_rgba": "rgba(56, 97, 104, 0.2)",
    "tmColorDark_rgba": "rgba(0, 76, 84, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    "headlineNews": "Catches three of eight targets",
    "report": "Agholor caught three of eight targets for 21 yards during Sunday's 22-14 win over the Bears.",
    "analysis": "Agholor tied for second on the team in targets, but he hauled in just 38 percent of the balls thrown his way. Although he got into the game with a 12-yard catch in the second quarter, he did little of note the rest of the way and finished with lackluster numbers overall. With just 52 combined receiving yards over his last three outings, Agholor seems unlikely to make much of an impact against the Patriots after the bye week.",
    "timestamp": "2019-11-03 02:37 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.1, 20.7, 19.0, 0.0, 2.5, 6.2, 3.4, 3.4, 3.6, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.5, 2.7, 9.8, 4.8, 7.0, 2.8, 6.5, 4.6, 3.3, 'BYE', 6.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2983209.png",
    "name": "Chester Rogers",
    "depthchart": "Backup: WR-2",
    "team": "Indianapolis Colts",
    "projected": 6.2,
    "opponent": "Jacksonville Jaguars",
    "home_away": "",
    "opp_rank": 11,
    "team_rank": 25,
    "avg_fp2": 3.62,
    "opp_rank_allowed_fp2": 14,
    "opp_avg_allowed_fp2": 27.64,
    "fanduelSalary": "$5200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#014683",
    "tmColorDark": "#002C5F",
    "tmColorLite_rgba": "rgba(1, 70, 131, 0.2)",
    "tmColorDark_rgba": "rgba(0, 44, 95, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png",
    "headlineNews": "Just two receptions Sunday",
    "report": "Rogers had two receptions for 31 yards on four targets in Sunday's loss to Miami.",
    "analysis": "Rogers started again as the slot receiver but played fewer snaps (32) on offense than backup Marcus Johnson (55). Rogers continues to have a steady role in the offense but doesn't have much upside given Indy's limited passing attack. He did have a strong game on special teams, where he had three punt returns for an average of 12.7 yards.",
    "timestamp": "2019-11-11 11:17 AM",
    "week01": 0.0,
    "week02": 3.9,
    "week03": 0.0,
    "week04": 12.3,
    "week05": 0.0,
    "week06": "BYE",
    "week07": 3.4,
    "week08": 1.2,
    "week09": 7.7,
    "week10": 4.1,
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 3.9, 0.0, 12.3, 0.0, 'BYE', 3.4, 1.2, 7.7, 4.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.0, 2.1, 5.3, 0.7, 2.6, 'BYE', 2.6, 2.8, 5.5, 8.8, 6.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3917067.png",
    "name": "Bisi Johnson",
    "depthchart": "Backup: WR-2",
    "team": "Minnesota Vikings",
    "projected": 6.2,
    "opponent": "Denver Broncos",
    "home_away": "",
    "opp_rank": 4,
    "team_rank": 17,
    "avg_fp2": 5.71,
    "opp_rank_allowed_fp2": 4,
    "opp_avg_allowed_fp2": 21.43,
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
    "headlineNews": "Just two receptions Sunday",
    "report": "Johnson started opposite Stefon Diggs at receiver and had two receptions for 25 yards on four targets in Sunday's win at Dallas.",
    "analysis": "Minnesota's run-heavy approach limited the passes to wide receivers as just 11 of 30 targets went to wideouts. Johnson could remain the No. 2 receiver if Adam Thielen (hamstring) remains out next week against Denver.",
    "timestamp": "2019-11-11 10:51 AM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 12.0, 3.7, 6.9, 3.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 4.8, 5.4, 2.8, 6.4, 6.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14053.png",
    "name": "Randall Cobb",
    "depthchart": "Reserve: WR-3",
    "team": "Dallas Cowboys",
    "projected": 5.8,
    "opponent": "Detroit Lions",
    "home_away": "at ",
    "opp_rank": 28,
    "team_rank": 3,
    "avg_fp2": 8.07,
    "opp_rank_allowed_fp2": 21,
    "opp_avg_allowed_fp2": 29.77,
    "fanduelSalary": "$5400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#7F9695",
    "tmColorDark": "#041E42",
    "tmColorLite_rgba": "rgba(127, 150, 149, 0.2)",
    "tmColorDark_rgba": "rgba(4, 30, 66, 0.2)",
    "tmTextLite": "#7F9695",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
    "headlineNews": "Best game of season",
    "report": "Cobb caught six passes on eight targets for 106 yards and a touchdown in Sunday's 28-24 loss to Minnesota.",
    "analysis": "Dak Prescott had to air it out for 397 yards on a night where Ezekiel Elliott got shut down (20 carries for 47 yards). The altered gameplan allowed Cobb to get heavily involved and break the century mark for the first time this season. Dallas' slot man has now received eight targets in consecutive weeks, although the eight this week ranked third among Cowboys wideouts behind Amari Cooper (14) and Michael Gallup (10). Next week's opponent, the Detroit Lions, rank at the bottom of the league both against the run and pass, so the Cowboys are likely to get Zeke going first before turning to the air attack in a soft matchup, making Cobb a risky play outside of deeper formats.",
    "timestamp": "2019-11-11 12:21 AM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.9, 6.0, 3.3, 5.6, 6.8, 'DNP', 3.9, 'BYE', 4.5, 19.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.0, 5.8, 7.6, 4.5, 5.9, 'DNP', 10.0, 'BYE', 14.4, 9.6, 5.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/17258.png",
    "name": "Willie Snead",
    "depthchart": "Backup: WR-2",
    "team": "Baltimore Ravens",
    "projected": 5.6,
    "opponent": "Houston Texans",
    "home_away": "",
    "opp_rank": 27,
    "team_rank": 20,
    "avg_fp2": 5.19,
    "opp_rank_allowed_fp2": 28,
    "opp_avg_allowed_fp2": 34.31,
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
    "headlineNews": "Snags two passes",
    "report": "Snead caught two of three targets for 12 yards in Sunday's 49-13 win over the Bengals.",
    "analysis": "Snead played a season-low 22 offensive snaps, which could simply be a result of the blowout nature of this contest. There weren't many opportunities for Snead to make an impact, either, as Lamar Jackson and Robert Griffin combined for 22 passing attempts. Still, this is becoming a theme for Snead, as he hasn't surpassed four receptions or 61 yards in a game this year.",
    "timestamp": "2019-11-12 01:11 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.1, 1.0, 6.2, 13.1, 7.1, 3.3, 0.2, 'BYE', 2.5, 2.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.9, 11.8, 6.4, 8.5, 6.1, 7.7, 9.6, 'BYE', 5.9, 5.2, 5.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/17177.png",
    "name": "Allen Hurns",
    "depthchart": "Backup: WR-2",
    "team": "Miami Dolphins",
    "projected": 5.2,
    "opponent": "Buffalo Bills",
    "home_away": "",
    "opp_rank": 3,
    "team_rank": 29,
    "avg_fp2": 3.69,
    "opp_rank_allowed_fp2": 7,
    "opp_avg_allowed_fp2": 22.99,
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
    "headlineNews": "Hauls in two passes",
    "report": "Hurns caught two of four targets for 32 yards during Sunday's 16-12 win over the Colts.",
    "analysis": "Hurns saw his highest target share of the season Sunday, but he didn't manage to convert that opportunity into notable fantasy production. With Preston Williams (knee) on injured reserve, it remains possible that Hurns could carve out an expanded role on offense going forward, but outside of deep fantasy formats he doesn't warrant much consideration.",
    "timestamp": "2019-11-11 09:50 AM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.7, 1.8, 1.1, 'DNP', 'BYE', 2.6, 6.8, 7.7, 2.6, 4.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.1, 5.2, 2.0, 'DNP', 'BYE', 1.1, 1.7, 3.7, 4.7, 3.8, 5.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3052876.png",
    "name": "Will Fuller",
    "depthchart": "Backup: WR-2",
    "team": "Houston Texans",
    "projected": 5.1,
    "opponent": "Baltimore Ravens",
    "home_away": "at ",
    "opp_rank": 20,
    "team_rank": 13,
    "avg_fp2": 11.43,
    "opp_rank_allowed_fp2": 19,
    "opp_avg_allowed_fp2": 29.1,
    "fanduelSalary": "$6300",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Hamstring",
    "tmColorLite": "#A71930",
    "tmColorDark": "#03202F",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(3, 32, 47, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/hou.png",
    "headlineNews": "Listed as questionable for Week 11",
    "report": "Fuller (hamstring) is listed as questionable for Sunday's game against the Ravens, Aaron Wilson of the Houston Chronicle reports.",
    "analysis": "Despite the fact that the wideout practiced in a limited fashion all week, Wilson suggests that Fuller -- who last saw game action in Week 7 --isn't a lock to play Sunday. For now, Fuller can be viewed as a game-time decision in advance of the 1 p.m. ET kickoff. If Fuller ends up out or limited for the contest, added Week 11 opportunities opposite DeAndre Hopkins would be available for Kenny Stills, as well as DeAndre Carter and possibly even Keke Coutee.",
    "timestamp": "2019-11-15 01:58 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.9, 6.0, 7.6, 3.8, 46.7, 6.9, 1.1, 'DNP', 'DNP', 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.8, 6.9, 5.6, 7.4, 9.4, 6.7, 10.0, 'DNP', 'DNP', 'BYE', 5.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14922.png",
    "name": "Mohamed Sanu",
    "depthchart": "Backup: WR-2",
    "team": "New England Patriots",
    "projected": 5.0,
    "opponent": "Philadelphia Eagles",
    "home_away": "at ",
    "opp_rank": 18,
    "team_rank": 8,
    "avg_fp2": 8.5,
    "opp_rank_allowed_fp2": 27,
    "opp_avg_allowed_fp2": 33.09,
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
    "headlineNews": "Breaks out with new club",
    "report": "Sanu had 10 catches (14 targets) for 81 yards and a touchdown in Sunday's 37-20 loss to the Ravens.",
    "analysis": "Sanu was a non-factor in his New England debut last week, but he was elevated to Tom Brady's top target after getting a full week of practice in with his new team. Julian Edelman (who also had 10 catches Sunday) is a more consistent receiving option, but there really isn't much competition for targets behind he and James White, so Sanu should carve out a significant role in a potent offense. The veteran wideout will have even more time to develop chemistry with his new teammates on the upcoming bye week before facing a weak Eagles secondary in Week 11.",
    "timestamp": "2019-11-03 10:24 PM",
    "week01": 8.2,
    "week02": 3.6,
    "week03": 10.7,
    "week04": 13.6,
    "week05": 12.8,
    "week06": 4.4,
    "week07": 0.8,
    "week08": 3.3,
    "week09": 19.1,
    "week10": "BYE",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.2, 3.6, 10.7, 13.6, 12.8, 4.4, 0.8, 3.3, 19.1, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.8, 6.2, 4.5, 5.7, 4.9, 5.4, 8.3, 7.5, 3.4, 'BYE', 5.0]
                    }
                    
                    ]
               }
            }];



$scope.positionTE = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2576925.png",
    "name": "Darren Waller",
    "depthchart": "Starter: TE-1",
    "team": "Oakland Raiders",
    "projected": 22.3,
    "opponent": "Cincinnati Bengals",
    "home_away": "",
    "opp_rank": 22,
    "team_rank": 15,
    "avg_fp2": 11.44,
    "opp_rank_allowed_fp2": 15,
    "opp_avg_allowed_fp2": 9.22,
    "fanduelSalary": "$6700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A5ACAF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/oak.png",
    "headlineNews": "Modest production yet again",
    "report": "Waller secured three of five targets for 40 yards in the Raiders' 26-24 win over the Chargers on Thursday.",
    "analysis": "Waller checked in tied for second in receptions and was third in receiving yards for the Raiders on the night, but it was still a disappointing performance when measured against the standard Waller set earlier in the season. After notching at least 63 receiving yards in four of the first six games of the season, Waller hasn't cleared three catches or 52 receiving yards in any of his last three games. He figures to remain one of Derek Carr's top targets, however, and he'll look to bounce back against the vulnerable Bengals defense in a Week 11 matchup a week from Sunday.",
    "timestamp": "2019-11-07 09:35 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.5, 9.3, 20.6, 8.8, 5.9, 'BYE', 28.1, 8.1, 6.2, 5.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.0, 7.6, 6.4, 14.1, 10.7, 'BYE', 9.6, 10.2, 14.9, 9.4, 22.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3046439.png",
    "name": "Hunter Henry",
    "depthchart": "Starter: TE-1",
    "team": "Los Angeles Chargers",
    "projected": 15.1,
    "opponent": "Kansas City Chiefs",
    "home_away": "",
    "opp_rank": 8,
    "team_rank": 8,
    "avg_fp2": 12.72,
    "opp_rank_allowed_fp2": 16,
    "opp_avg_allowed_fp2": 9.3,
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
    "headlineNews": "Gets into end zone during loss",
    "report": "Henry secured four of seven targets for 30 yards and a touchdown in the Chargers' 26-24 loss to the Raiders on Thursday.",
    "analysis": "The highlight of Henry's night came on a two-yard touchdown reception with 8:24 remaining in the second quarter. Otherwise, the third-year tight end was kept quiet, and he was unable to come up with his only target on the Chargers' last-gasp drive in the fourth quarter. Henry had been trending upward in recent games, posting at least 84 receiving yards in three of the four contests prior to Thursday. However, his yardage tally against the Raiders qualified as a season low, so he'll look to bounce back against the Chiefs in a Week 11 Monday night divisional matchup Nov. 18.",
    "timestamp": "2019-11-07 09:26 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.0, 'DNP', 'DNP', 'DNP', 'DNP', 26.0, 12.7, 6.7, 11.9, 11.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.2, 'DNP', 'DNP', 'DNP', 'DNP', 10.5, 14.9, 14.6, 14.5, 18.2, 15.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116365.png",
    "name": "Mark Andrews",
    "depthchart": "Starter: TE-1",
    "team": "Baltimore Ravens",
    "projected": 14.9,
    "opponent": "Houston Texans",
    "home_away": "",
    "opp_rank": 27,
    "team_rank": 20,
    "avg_fp2": 11.37,
    "opp_rank_allowed_fp2": 10,
    "opp_avg_allowed_fp2": 7.53,
    "fanduelSalary": "$6900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9E7C0C",
    "tmColorDark": "#241773",
    "tmColorLite_rgba": "rgba(158, 124, 12, 0.2)",
    "tmColorDark_rgba": "rgba(36, 23, 115, 0.2)",
    "tmTextLite": "#9E7C0C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png",
    "headlineNews": "Strikes twice in beatdown",
    "report": "Andrews caught six of eight targets for 53 yards and two touchdowns during Sunday's 49-13 win over the Bengals.",
    "analysis": "Andrews capped off the Ravens' opening drive with a two-yard touchdown reception in the flat and then followed up with a 17-yard touchdown up the seam two drives later. The touchdowns snapped a four-game scoreless streak for Andrews, who started the season with three touchdowns in his first four games. Sunday was just the second time in Andrews' last seven games in which he topped 50 yards, as he's struggled with putting together consistent production after a strong start to the season. The Ravens offense, with so many heavy sets and running options, is a tough one to predict, but a favorable matchup does await Sunday against a Houston defense that has been exposed against the pass this season.",
    "timestamp": "2019-11-10 03:42 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [20.8, 21.2, 3.0, 11.1, 7.0, 10.9, 4.9, 'BYE', 3.1, 20.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.9, 7.6, 10.9, 11.5, 11.8, 10.6, 11.8, 'BYE', 8.3, 8.3, 14.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3930086.png",
    "name": "Dawson Knox",
    "depthchart": "Starter: TE-1",
    "team": "Buffalo Bills",
    "projected": 12.0,
    "opponent": "Miami Dolphins",
    "home_away": "at ",
    "opp_rank": 19,
    "team_rank": 24,
    "avg_fp2": 4.51,
    "opp_rank_allowed_fp2": 17,
    "opp_avg_allowed_fp2": 9.51,
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
    "headlineNews": "No injury tag for Week 11",
    "report": "Knox (knee) practiced fully Friday and doesn't carry an injury designation into Sunday's game against the Dolphins.",
    "analysis": "As expected, the issue turned out to be a minor one for the rookie, and he should be full-go for this week's contest as the Bills try to maintain the top wild-card spot in the playoff chase. While a finally healthy Tyler Kroft may take away some of Knox's targets, it didn't play out that way last week when Knox posted season highs in receptions (four) and targets (six). Until Kroft starts getting more involved, Knox can be considered the team's top fantasy tight end, albeit in an inconsistent passing offense.",
    "timestamp": "2019-11-15 11:16 AM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.6, 2.3, 15.1, 7.3, 2.2, 'BYE', 3.2, 0.0, 2.4, 7.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.9, 4.9, 1.5, 5.0, 9.5, 'BYE', 3.3, 5.9, 0.8, 8.3, 12.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15847.png",
    "name": "Travis Kelce",
    "depthchart": "Starter: TE-1",
    "team": "Kansas City Chiefs",
    "projected": 11.8,
    "opponent": "Los Angeles Chargers",
    "home_away": "at ",
    "opp_rank": 5,
    "team_rank": 1,
    "avg_fp2": 12.1,
    "opp_rank_allowed_fp2": 4,
    "opp_avg_allowed_fp2": 7.28,
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
    "headlineNews": "Nabs seven passes in loss",
    "report": "Kelce caught all seven of his targets for 75 yards and a touchdown during Sunday's 35-32 loss to the Titans.",
    "analysis": "Kelce helped cap off Patrick Mahomes' first drive since exiting Week 7 with a knee injury, taking the shovel pass underneath for a three-yard touchdown. Having Mahomes back obviously benefits the Chiefs' attack, but Kelce's consistency didn't really suffer in his absence. The former Bearcat has been targeted at least six times in every game this season and has been held under 60 yards just twice in 10 games. He remains arguably the most consistent tight end in the game. Next up is a Monday night matchup against a limping Chargers squad.",
    "timestamp": "2019-11-10 03:21 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.3, 20.2, 12.4, 12.92, 9.0, 7.8, 7.4, 14.3, 9.7, 17.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.6, 13.9, 10.7, 12.0, 15.7, 14.5, 12.8, 8.1, 7.0, 10.3, 11.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15835.png",
    "name": "Zach Ertz",
    "depthchart": "Starter: TE-1",
    "team": "Philadelphia Eagles",
    "projected": 11.1,
    "opponent": "New England Patriots",
    "home_away": "",
    "opp_rank": 2,
    "team_rank": 21,
    "avg_fp2": 9.74,
    "opp_rank_allowed_fp2": 3,
    "opp_avg_allowed_fp2": 5.98,
    "fanduelSalary": "$6200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#386168",
    "tmColorDark": "#004C54",
    "tmColorLite_rgba": "rgba(56, 97, 104, 0.2)",
    "tmColorDark_rgba": "rgba(0, 76, 84, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    "headlineNews": "Torches Bears for 103 yards",
    "report": "Ertz caught nine of 11 targets for 103 yards and a touchdown during Sunday's 22-14 win over the Bears.",
    "analysis": "Ertz led the team in targets and was the only Eagles player with more than 39 receiving yards. He caught a beautiful 25-yard touchdown pass in the second quarter, doubling his season output in that category. This was Ertz's first 100-yard game since Week 16 of last season, giving fantasy owners a glimpse of the tight end they expected on draft day. Coming off his best game of the season, Ertz will turn his attention to a Week 11 home matchup with the Patriots following Philadelphia's bye.",
    "timestamp": "2019-11-03 01:58 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.9, 13.2, 8.4, 10.0, 14.2, 5.4, 4.8, 3.0, 20.8, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.1, 7.5, 11.6, 9.1, 12.4, 4.3, 9.2, 5.0, 9.3, 'BYE', 11.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3921690.png",
    "name": "Josh Oliver",
    "depthchart": "Starter: TE-1",
    "team": "Jacksonville Jaguars",
    "projected": 10.7,
    "opponent": "Indianapolis Colts",
    "home_away": "at ",
    "opp_rank": 9,
    "team_rank": 14,
    "avg_fp2": 1.0,
    "opp_rank_allowed_fp2": 23,
    "opp_avg_allowed_fp2": 10.48,
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
    "headlineNews": "Grabs one pass",
    "report": "Oliver caught one of two targets for four yards in Sunday's loss to the Texans.",
    "analysis": "The rookie third-round pick played only four fewer snaps than starter Seth DeValve, but the latter had four catches on five targets for 41 yards. Oliver has caught two of four targets for 10 yards in his first three games and remains off the fantasy radar until he becomes more involved in the passing game.",
    "timestamp": "2019-11-04 10:01 AM",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": "DNP",
    "week08": 1.1,
    "week09": 0.9,
    "week10": "BYE",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 1.1, 0.9, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 2.9, 3.4, 'BYE', 10.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4527.png",
    "name": "Jason Witten",
    "depthchart": "Starter: TE-1",
    "team": "Dallas Cowboys",
    "projected": 9.7,
    "opponent": "Detroit Lions",
    "home_away": "at ",
    "opp_rank": 28,
    "team_rank": 3,
    "avg_fp2": 6.87,
    "opp_rank_allowed_fp2": 21,
    "opp_avg_allowed_fp2": 10.05,
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
    "headlineNews": "Quiet in loss to Vikings",
    "report": "Witten caught two of five targets for 17 yards in Sunday's loss to the Vikings.",
    "analysis": "While Dak Prescott has a huge game, throwing for nearly 400 yards, little of that action went to the Cowboys' tight ends. Witten hasn't scored a TD since Week 2 and hasn't reached 60 receiving yards in a game all year, making him nothing more than a desperation bye-week fantasy option.",
    "timestamp": "2019-11-12 12:25 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.0, 10.5, 6.9, 5.0, 4.4, 8.2, 5.3, 'BYE', 9.8, 2.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.7, 7.8, 9.1, 11.8, 7.7, 9.2, 8.0, 'BYE', 6.1, 14.1, 9.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/10475.png",
    "name": "Greg Olsen",
    "depthchart": "Starter: TE-1",
    "team": "Carolina Panthers",
    "projected": 9.6,
    "opponent": "Atlanta Falcons",
    "home_away": "",
    "opp_rank": 25,
    "team_rank": 23,
    "avg_fp2": 8.04,
    "opp_rank_allowed_fp2": 20,
    "opp_avg_allowed_fp2": 10.04,
    "fanduelSalary": "$5100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0085CA",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 133, 202, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#0085CA",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/car.png",
    "headlineNews": "Records 98 receiving yards",
    "report": "Olsen caught eight of 10 targets for 98 yards during Sunday's 24-16 loss to the Packers.",
    "analysis": "Olsen drew double-digit targets for the first time this season and hauled in 80 percent of his looks as he finished behind only D.J. Moore in receiving yards. It was a welcome sight for Olsen's fantasy owners, considering he'd topped 50 receiving yards just once over the last five games. The veteran clearly still has the potential to excel in good matchups and will look to do just that next Sunday at home against the Falcons.",
    "timestamp": "2019-11-10 10:27 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.6, 14.0, 22.5, 1.5, 0.0, 7.2, 'BYE', 2.3, 5.5, 13.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.3, 12.3, 16.4, 10.0, 8.2, 16.2, 'BYE', 7.2, 7.2, 10.4, 9.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3843945.png",
    "name": "Foster Moreau",
    "depthchart": "Backup: TE-2",
    "team": "Oakland Raiders",
    "projected": 9.6,
    "opponent": "Cincinnati Bengals",
    "home_away": "",
    "opp_rank": 22,
    "team_rank": 15,
    "avg_fp2": 4.27,
    "opp_rank_allowed_fp2": 15,
    "opp_avg_allowed_fp2": 9.22,
    "fanduelSalary": "$4600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A5ACAF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/oak.png",
    "headlineNews": "Catches TD in win",
    "report": "Moreau caught one of his two targets for a three-yard touchdown in Sunday's 31-24 win over the Lions.",
    "analysis": "Moreau saw a deep target in the first quarter but couldn't reel it in. He wouldn't see the ball again until the second play of the fourth quarter when his catch in the end zone gave the Raiders a 24-17 lead. The rookie has managed just 14 catches on the season, but three have been scores. He has seen more than three targets just once this season yet will look to break that trend Week 10 against the Chargers.",
    "timestamp": "2019-11-05 02:29 PM",
    "week01": 3.0,
    "week02": 0.0,
    "week03": 0.6,
    "week04": 10.5,
    "week05": 6.6,
    "week06": "BYE",
    "week07": 9.4,
    "week08": 1.5,
    "week09": 6.8,
    "week10": 0.0,
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.0, 0.0, 0.6, 10.5, 6.6, 'BYE', 9.4, 1.5, 6.8, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [0.0, 2.6, 0.5, 2.5, 2.7, 'BYE', 4.3, 4.8, 4.5, 0.4, 9.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16732.png",
    "name": "Eric Ebron",
    "depthchart": "Starter: TE-1",
    "team": "Indianapolis Colts",
    "projected": 9.2,
    "opponent": "Jacksonville Jaguars",
    "home_away": "",
    "opp_rank": 11,
    "team_rank": 25,
    "avg_fp2": 6.66,
    "opp_rank_allowed_fp2": 17,
    "opp_avg_allowed_fp2": 9.76,
    "fanduelSalary": "$5200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#014683",
    "tmColorDark": "#002C5F",
    "tmColorLite_rgba": "rgba(1, 70, 131, 0.2)",
    "tmColorDark_rgba": "rgba(0, 44, 95, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png",
    "headlineNews": "Squanders 12 targets",
    "report": "Ebron hauled in five of his 12 targets for 56 yards in the team's Week 10 loss to the Dolphins.",
    "analysis": "Ebron led the team in targets, yards and receptions, with the highlight of his performance coming on a 23-yard catch late in the fourth quarter that gave the Colts the chance to take the lead. However, he also failed to get on the same page with Brian Hoyer for much of the day, averaging just over 4.5 yards per target while failing to convert half of his targets into receptions. Given that Ebron had not topped five targets in a game prior to his Week 10 performance, it's unlikely that he will have a better chance to produce this season.",
    "timestamp": "2019-11-10 05:24 PM",
    "week01": 1.3,
    "week02": 10.0,
    "week03": 6.2,
    "week04": 11.3,
    "week05": 1.3,
    "week06": "BYE",
    "week07": 15.0,
    "week08": 4.1,
    "week09": 2.6,
    "week10": 8.1,
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.3, 10.0, 6.2, 11.3, 1.3, 'BYE', 15.0, 4.1, 2.6, 8.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.9, 3.3, 12.1, 7.0, 3.7, 'BYE', 3.9, 2.7, 4.8, 7.0, 9.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3918639.png",
    "name": "Gerald Everett",
    "depthchart": "Starter: TE-1",
    "team": "Los Angeles Rams",
    "projected": 9.0,
    "opponent": "Chicago Bears",
    "home_away": "",
    "opp_rank": 15,
    "team_rank": 6,
    "avg_fp2": 7.28,
    "opp_rank_allowed_fp2": 27,
    "opp_avg_allowed_fp2": 11.88,
    "fanduelSalary": "$1",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Wrist",
    "tmColorLite": "#866D4B",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(134, 109, 75, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#866D4B",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/lar.png",
    "headlineNews": "Officially listed as questionable",
    "report": "Everett (wrist) is listed as questionable for Sunday's game against the Bears.",
    "analysis": "Everett was a limited practice participant throughout the week, with coach Sean McVay saying he expects the tight end to play. Position mates Tyler Higbee (knee) and Johnny Mundt (groin) also are listed as questionable, potentially creating a scenario where Everett takes on some extra snaps. Fantasy managers will want to check back in when the Rams release their inactive list approximately 90 minutes before Sunday's 8:20 p.m. ET kickoff.",
    "timestamp": "2019-11-15 03:11 PM",
    "week01": 1.2,
    "week02": 3.6,
    "week03": 2.5,
    "week04": 12.9,
    "week05": 17.1,
    "week06": 1.9,
    "week07": 13.0,
    "week08": 2.5,
    "week09": "BYE",
    "week10": 10.8,
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.2, 3.6, 2.5, 12.9, 17.1, 1.9, 13.0, 2.5, 'BYE', 10.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.7, 2.0, 3.8, 3.7, 5.0, 3.1, 7.2, 9.4, 'BYE', 9.0, 9.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4036133.png",
    "name": "T.J. Hockenson",
    "depthchart": "Starter: TE-1",
    "team": "Detroit Lions",
    "projected": 8.3,
    "opponent": "Dallas Cowboys",
    "home_away": "",
    "opp_rank": 6,
    "team_rank": 4,
    "avg_fp2": 6.53,
    "opp_rank_allowed_fp2": 30,
    "opp_avg_allowed_fp2": 12.27,
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
    "headlineNews": "Another three-catch outing",
    "report": "Hockenson caught three of six targets for 47 yards in Sunday's 20-13 loss to Chicago.",
    "analysis": "Hockenson didn't see a significant difference in his involvement with Jeff Driskel filling in for Matthew Stafford (back) under center. The rookie tight end has caught at least three passes in six of his first nine games. He'll face the Cowboys at home in Week 11.",
    "timestamp": "2019-11-10 02:43 PM",
    "week01": 22.1,
    "week02": 1.2,
    "week03": 0.6,
    "week04": 10.2,
    "week05": "BYE",
    "week06": 4.1,
    "week07": 4.7,
    "week08": 2.6,
    "week09": 7.1,
    "week10": 6.2,
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [22.1, 1.2, 0.6, 10.2, 'BYE', 4.1, 4.7, 2.6, 7.1, 6.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.4, 7.3, 5.2, 1.2, 'BYE', 3.4, 4.9, 5.5, 3.3, 4.9, 8.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15773.png",
    "name": "Darren Fells",
    "depthchart": "Starter: TE-1",
    "team": "Houston Texans",
    "projected": 7.2,
    "opponent": "Baltimore Ravens",
    "home_away": "at ",
    "opp_rank": 20,
    "team_rank": 13,
    "avg_fp2": 8.06,
    "opp_rank_allowed_fp2": 10,
    "opp_avg_allowed_fp2": 7.57,
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
    "headlineNews": "Scores again",
    "report": "Fells caught one of three targets for one yard and a touchdown in Sunday's 26-3 win over the Jaguars.",
    "analysis": "Fells found the end zone for the third time in the last two games and has a team-high six touchdowns, which is also an NFL-high figure among tight ends. He's been a major surprise in the Texans' offense with career highs in catches (24), targets (31) and touchdowns (six).",
    "timestamp": "2019-11-03 05:11 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 1.4, 13.4, 1.7, 15.0, 9.9, 3.7, 20.8, 6.6, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [-0.7, 1.7, 1.1, 3.0, 2.7, 4.5, 2.3, 5.5, 5.6, 'BYE', 7.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15788.png",
    "name": "Tyler Eifert",
    "depthchart": "Starter: TE-1",
    "team": "Cincinnati Bengals",
    "projected": 6.9,
    "opponent": "Oakland Raiders",
    "home_away": "at ",
    "opp_rank": 30,
    "team_rank": 14,
    "avg_fp2": 5.08,
    "opp_rank_allowed_fp2": 29,
    "opp_avg_allowed_fp2": 11.99,
    "fanduelSalary": "$5000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#ea7330",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(234, 115, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#ea7330",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png",
    "headlineNews": "Snaps scoreless streak",
    "report": "Eifert caught two of four targets for 20 yards and a touchdown during Sunday's 49-13 loss to Baltimore.",
    "analysis": "With the Bengals down by multiple scores just before halftime, rookie Ryan Finley floated a six-yard pass near the front pylon and into the arms of Eifert for the quarterback's first career touchdown. The score was Eifert's first since Week 2 in a season that has gotten away from the Bengals under first-year head coach Zac Taylor. With the top overall pick of the 2020 draft within sight, the Bengals figure to roll with Finley down the stretch and a big, reliable tight end like Eifert figures to be the kind of security blanket on which the rookie can rely. Next up is a resurgent Raiders team that has struggled in pass defense this season.",
    "timestamp": "2019-11-10 04:48 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.2, 8.4, 2.3, 3.7, 2.4, 2.3, 2.0, 10.4, 'BYE', 9.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.0, 8.2, 7.0, 12.2, 10.4, 7.1, 10.2, 9.2, 'BYE', 7.2, 6.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3043080.png",
    "name": "O.J. Howard",
    "depthchart": "Starter: TE-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 6.3,
    "opponent": "New Orleans Saints",
    "home_away": "",
    "opp_rank": 10,
    "team_rank": 5,
    "avg_fp2": 4.97,
    "opp_rank_allowed_fp2": 12,
    "opp_avg_allowed_fp2": 8.0,
    "fanduelSalary": "$5300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#D50A0A",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(213, 10, 10, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#D50A0A",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Gets into end zone Week 10",
    "report": "Howard brought in four of seven targets for 47 yards and a touchdown in the Buccaneers' 30-27 win over the Cardinals on Sunday.",
    "analysis": "The high-upside but frequently underwhelming tight end enjoyed one of his better performances of the season, scoring his first touchdown of the campaign and also recording a 26-yard grab that served as his second longest of the campaign. Howard's seven targets marked a new high-water mark for him in 2019 as well, and perhaps this performance will serve as a launching pad for better production down the stretch. Howard will look to build on Sunday's effort versus the Saints in a Week 11 NFC South battle.",
    "timestamp": "2019-11-10 11:13 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.2, 0.0, 8.1, 4.8, 1.5, 4.5, 'BYE', 'DNP', 'DNP', 12.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.9, 5.6, 8.4, 4.2, 7.5, 12.7, 'BYE', 'DNP', 'DNP', 7.6, 6.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3121023.png",
    "name": "Dallas Goedert",
    "depthchart": "Backup: TE-2",
    "team": "Philadelphia Eagles",
    "projected": 5.5,
    "opponent": "New England Patriots",
    "home_away": "",
    "opp_rank": 2,
    "team_rank": 21,
    "avg_fp2": 6.08,
    "opp_rank_allowed_fp2": 3,
    "opp_avg_allowed_fp2": 5.98,
    "fanduelSalary": "$5000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#386168",
    "tmColorDark": "#004C54",
    "tmColorLite_rgba": "rgba(56, 97, 104, 0.2)",
    "tmColorDark_rgba": "rgba(0, 76, 84, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/phi.png",
    "headlineNews": "Makes four catches in win",
    "report": "Goedert caught four of his five targets for 39 yards in Sunday's 22-14 win over the Bears.",
    "analysis": "Goedert was the team's second-leading receiver on the day, but unfortunately for him, it came behind a 100-yard bounce-back effort from Zach Ertz. The 24-year-old played all 70 snaps on offense, however, boding well for his continual viability as a fantasy starter in a barren tight-end landscape. With DeSean Jackson looking at an extended absence due to a recurrence of his abdominal injury, the Eagles likely will keep relying on two-tight-end sets after their Week 10 bye, so Goedert still should see consistent chances to produce.",
    "timestamp": "2019-11-04 07:52 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.6, 'DNP', 0.0, 8.6, 1.6, 7.3, 12.9, 9.7, 5.9, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.6, 'DNP', 5.9, 4.0, 4.1, 1.5, 4.3, 2.1, 3.6, 'BYE', 5.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14054.png",
    "name": "Kyle Rudolph",
    "depthchart": "Starter: TE-1",
    "team": "Minnesota Vikings",
    "projected": 5.2,
    "opponent": "Denver Broncos",
    "home_away": "",
    "opp_rank": 4,
    "team_rank": 17,
    "avg_fp2": 5.64,
    "opp_rank_allowed_fp2": 13,
    "opp_avg_allowed_fp2": 7.89,
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
    "headlineNews": "Two short scores Sunday",
    "report": "Rudolph had four catches (five targets) for 14 yards and two touchdowns in Sunday's 28-24 win over the Cowboys.",
    "analysis": "Rudolph was in vintage form Sunday, finding the end zone twice and for his third and fourth touchdowns in the last four contests. The 30-year-old didn't do much in terms of yardage, and he's only topped 20 receiving yards three times despite starting all 10 of the Vikings' contests this year. Rudolph is strictly a touchdown-dependent option, but given the shallowness of the fantasy position and his recent nose for the end zone, fantasy owners hurting for a tight-end option could do worse heading into Week 11's matchup against the Broncos.",
    "timestamp": "2019-11-10 10:27 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 2.4, 1.6, 1.7, 0.9, 5.1, 14.3, 3.2, 9.8, 17.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.6, 3.6, 9.0, 5.5, 4.1, 5.2, 7.8, 5.0, 4.5, 9.0, 5.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16318.png",
    "name": "Demetrius Harris",
    "depthchart": "Starter: TE-1",
    "team": "Cleveland Browns",
    "projected": 4.6,
    "opponent": "Pittsburgh Steelers",
    "home_away": "",
    "opp_rank": 12,
    "team_rank": 19,
    "avg_fp2": 3.13,
    "opp_rank_allowed_fp2": 26,
    "opp_avg_allowed_fp2": 11.83,
    "fanduelSalary": "$4800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FF3C00",
    "tmColorDark": "#311D00",
    "tmColorLite_rgba": "rgba(255, 60, 0, 0.2)",
    "tmColorDark_rgba": "rgba(49, 29, 0, 0.2)",
    "tmTextLite": "#FF3C00",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
    "headlineNews": "Only TE involved as receiver in win",
    "report": "Harris caught both of his targets for 28 yards in Sunday's 19-16 win over the Bills in Week 10.",
    "analysis": "The Browns remain depleted at tight end. David Njoku (wrist) is on injured reserve until Week 12 at the earliest, while Ricky Seals-Jones (knee) was inactive and Pharaoh Brown was just getting over a concussion. Those two targets to Harris were the only balls thrown toward Cleveland tight ends during the win, but they were a normal workload for him -- he's seen multiple targets in three straight games, but no more than four.",
    "timestamp": "2019-11-11 04:52 AM",
    "week01": 0.0,
    "week02": 0.9,
    "week03": 6.7,
    "week04": 0.0,
    "week05": 0.5,
    "week06": 2.0,
    "week07": "BYE",
    "week08": 10.3,
    "week09": 4.0,
    "week10": 3.8,
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 0.9, 6.7, 0.0, 0.5, 2.0, 'BYE', 10.3, 4.0, 3.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.2, -0.2, 3.4, 3.3, 0.1, 5.5, 'BYE', -1.2, 1.8, 4.5, 4.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/5557.png",
    "name": "Ben Watson",
    "depthchart": "Starter: TE-1",
    "team": "New England Patriots",
    "projected": 4.6,
    "opponent": "Philadelphia Eagles",
    "home_away": "at ",
    "opp_rank": 18,
    "team_rank": 8,
    "avg_fp2": 3.95,
    "opp_rank_allowed_fp2": 7,
    "opp_avg_allowed_fp2": 7.39,
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
    "headlineNews": "Catches four passes in Week 9",
    "report": "Watson was on the field for all 67 of the Patriots' snaps on offense in Sunday's 37-20 loss to the Ravens, en route to hauling in four of his five targets for 28 yards.",
    "analysis": "Once the Patriots return from their Week 10 bye, Watson will continue to profile as the team's top pass-catching tight end, but it's a role that has so far yielded modest production, helpful only in deeper PPR formats.",
    "timestamp": "2019-11-04 09:41 AM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 4.8, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 4.0, 'BYE', 4.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3128452.png",
    "name": "Jordan Akins",
    "depthchart": "Backup: TE-2",
    "team": "Houston Texans",
    "projected": 4.5,
    "opponent": "Baltimore Ravens",
    "home_away": "at ",
    "opp_rank": 20,
    "team_rank": 13,
    "avg_fp2": 5.2,
    "opp_rank_allowed_fp2": 10,
    "opp_avg_allowed_fp2": 7.57,
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
    "headlineNews": "Sets career marks",
    "report": "Akins caught all three of his targets for 24 yards in Sunday's 26-3 win over the Jaguars.",
    "analysis": "Akins now has new career highs in receptions (20),  targets (28) yards, receiving yards (248) and touchdowns (two), with at least seven more games to build on those numbers.  Unfortunately, this usage has led to only two touchdowns, both scored in a Week 3 win over the Chargers. While both Texans tight ends are getting more opportunities relative to last season, Akins clearly sits behind Darren Fells in terms of touchdowns and red-zone targets.",
    "timestamp": "2019-11-03 05:26 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.2, 3.5, 20.8, 3.6, 2.6, 5.4, 2.7, 2.1, 3.9, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.0, 3.1, 2.1, 2.1, 1.9, 3.8, 0.9, 3.4, 3.0, 'BYE', 4.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16504.png",
    "name": "Jack Doyle",
    "depthchart": "Backup: TE-2",
    "team": "Indianapolis Colts",
    "projected": 4.4,
    "opponent": "Jacksonville Jaguars",
    "home_away": "",
    "opp_rank": 11,
    "team_rank": 25,
    "avg_fp2": 6.57,
    "opp_rank_allowed_fp2": 17,
    "opp_avg_allowed_fp2": 9.76,
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
    "headlineNews": "Cleared to play this week",
    "report": "Doyle (shoulder) doesn't have an injury designation for Sunday's game against the Jaguars after practicing fully Friday.",
    "analysis": "With both T.Y. Hilton (calf) and Parris Campbell (hand) still out and Devin Funchess (collarbone) not ready to come off injured reserve, Doyle and fellow tight end Eric Ebron should log a solid share of snaps/targets in Week 11. In last week's loss to the Dolphins, Ebron hauled in five of his 12 targets for 56 yards, while Doyle caught three of his four targets for 44 yards and a score. This Sunday, the duo will be catching passes from Jacoby Brissett, who's back from a one-game absence caused by a knee issue.",
    "timestamp": "2019-11-15 12:35 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.5, 3.1, 6.6, 10.2, 3.4, 'BYE', 3.6, 8.1, 9.7, 11.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.6, 7.1, 5.2, 2.4, 5.8, 'BYE', 5.0, 4.9, 5.3, 10.0, 4.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/12537.png",
    "name": "Jared Cook",
    "depthchart": "Starter: TE-1",
    "team": "New Orleans Saints",
    "projected": 4.4,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "at ",
    "opp_rank": 32,
    "team_rank": 9,
    "avg_fp2": 6.67,
    "opp_rank_allowed_fp2": 31,
    "opp_avg_allowed_fp2": 14.3,
    "fanduelSalary": "$6000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9b845c",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(155, 132, 92, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#9b845c",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
    "headlineNews": "Targeted 10 times in Week 10 loss",
    "report": "Cook recorded six catches for 74 receiving yards on 10 targets during Sunday's 26-9 loss to the Falcons.",
    "analysis": "Returning from an ankle injury that withheld him from New Orleans' games against Chicago and Arizona prior to the Week 9 bye, Cook resumed his recent streak of fantasy utility. Since averaging a meager two catches and 22.5 receiving yards per game between Weeks 1 and 4, Cook has logged more than four receptions and 50 receiving yards per game over his past three games, with both of his touchdown scores on the year coming during that span. Upcoming next, the veteran Cook will be facing off against a Buccaneers defense that entered the weekend ranking as a bottom-five unit in receptions (56), receiving yards (675) and touchdowns (six) allowed to opposing tight ends.",
    "timestamp": "2019-11-10 03:21 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.7, 3.5, 1.2, 3.6, 12.1, 11.2, 'DNP', 'DNP', 'BYE', 10.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.9, 7.2, 8.8, 3.4, 4.5, 4.3, 'DNP', 'DNP', 'BYE', 9.4, 4.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3120303.png",
    "name": "Ross Dwelley",
    "depthchart": "Starter: TE-1",
    "team": "San Francisco 49ers",
    "projected": 4.3,
    "opponent": "Arizona Cardinals",
    "home_away": "",
    "opp_rank": 31,
    "team_rank": 22,
    "avg_fp2": 1.27,
    "opp_rank_allowed_fp2": 32,
    "opp_avg_allowed_fp2": 17.61,
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
    "headlineNews": "Likely to replace Kittle again",
    "report": "Dwelley could be in line for significant snaps in Sunday's game against the Cardinals with George Kittle (knee/ankle) listed as doubtful for the contest.",
    "analysis": "Dwelley filled in for Kittle in Monday's 27-24 loss to Seattle, catching three of seven targets for 24 yards while playing 92 percent of the offensive snaps. The Niners could give some of that playing time to Garrett Celek or Levine Toilolo in Week 11, but Dwelley remains the better bet to draw targets.",
    "timestamp": "2019-11-15 03:41 PM",
    "week01": 0.0,
    "week02": 0.0,
    "week03": "DNP",
    "week04": "BYE",
    "week05": 0.7,
    "week06": 0.0,
    "week07": 0.7,
    "week08": 0.0,
    "week09": 4.9,
    "week10": 3.9,
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 0.0, 'DNP', 'BYE', 0.7, 0.0, 0.7, 0.0, 4.9, 3.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.9, -0.1, 'DNP', 'BYE', -0.5, -0.2, -0.8, 1.5, 0.7, 1.4, 4.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2991767.png",
    "name": "Blake Jarwin",
    "depthchart": "Backup: TE-2",
    "team": "Dallas Cowboys",
    "projected": 4.2,
    "opponent": "Detroit Lions",
    "home_away": "at ",
    "opp_rank": 28,
    "team_rank": 3,
    "avg_fp2": 5.02,
    "opp_rank_allowed_fp2": 21,
    "opp_avg_allowed_fp2": 10.05,
    "fanduelSalary": "$4500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#7F9695",
    "tmColorDark": "#041E42",
    "tmColorLite_rgba": "rgba(127, 150, 149, 0.2)",
    "tmColorDark_rgba": "rgba(4, 30, 66, 0.2)",
    "tmTextLite": "#7F9695",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
    "headlineNews": "Low volume in Sunday's loss",
    "report": "Jarwin caught three of four targets for 35 yards in Sunday's loss to the Vikings.",
    "analysis": "The catches and targets both tied his season highs, and Jarwin's fantasy value remains tied to whether he can find the end zone or not in any given week. Over the last four games, he's seen 10 targets to Jason Witten's 25, and it would likely take a Witten injury to put Jarwin on the radar in most leagues.",
    "timestamp": "2019-11-12 12:29 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.4, 2.7, 0.8, 6.4, 0.0, 1.6, 6.6, 'BYE', 10.7, 5.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.6, 5.5, 5.1, 4.3, 3.3, 4.1, 2.3, 'BYE', 2.9, -0.1, 4.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3051806.png",
    "name": "Ricky Seals-Jones",
    "depthchart": "Backup: TE-2",
    "team": "Cleveland Browns",
    "projected": 4.0,
    "opponent": "Pittsburgh Steelers",
    "home_away": "",
    "opp_rank": 12,
    "team_rank": 19,
    "avg_fp2": 5.33,
    "opp_rank_allowed_fp2": 26,
    "opp_avg_allowed_fp2": 11.83,
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
    "headlineNews": "Plays 11 snaps in win",
    "report": "Seals-Jones wasn't targeted in Thursday's 21-7 win over Pittsburgh.",
    "analysis": "Seals-Jones returned to action after missing one game with a knee injury. He played only 11 snaps, his fewest since Week 3.",
    "timestamp": "2019-11-15 04:39 AM",
    "week01": "DNP",
    "week02": "DNP",
    "week03": 1.9,
    "week04": 15.7,
    "week05": 0.0,
    "week06": 12.2,
    "week07": "BYE",
    "week08": 0.0,
    "week09": 2.2,
    "week10": "DNP",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 1.9, 15.7, 0.0, 12.2, 'BYE', 0.0, 2.2, 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 2.3, 2.2, 0.9, 5.1, 'BYE', 3.2, 6.7, 'DNP', 4.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2980073.png",
    "name": "Jeremy Sprinkle",
    "depthchart": "Starter: TE-1",
    "team": "Washington Redskins",
    "projected": 3.8,
    "opponent": "New York Jets",
    "home_away": "",
    "opp_rank": 26,
    "team_rank": 31,
    "avg_fp2": 2.33,
    "opp_rank_allowed_fp2": 6,
    "opp_avg_allowed_fp2": 7.35,
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
    "headlineNews": "Held to 16 yards",
    "report": "Sprinkle caught his lone target for a 16-yard gain in Sunday's 24-9 loss to Buffalo.",
    "analysis": "Sprinkle has an odd knack for doing just enough to show up in the box score, with either one or two receptions in every game this season. He played at least three-quarters of the offensive snaps each of the past four weeks with Vernon Davis (concussion) inactive, but it hasn't made much of a difference in terms of pass-catching volume. It isn't clear if/when Davis will return, so Sprinkle may keep his role after a Week 10 bye.",
    "timestamp": "2019-11-04 02:23 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.3, 1.6, 2.9, 2.5, 2.7, 3.4, 2.3, 2.2, 2.1, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [-0.4, 2.7, 2.0, 1.6, 3.6, 1.8, 2.7, 1.8, 0.9, 'BYE', 3.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2579846.png",
    "name": "Ben Koyack",
    "depthchart": "Backup: TE-2",
    "team": "Jacksonville Jaguars",
    "projected": 3.8,
    "opponent": "Indianapolis Colts",
    "home_away": "at ",
    "opp_rank": 9,
    "team_rank": 14,
    "avg_fp2": 0.0,
    "opp_rank_allowed_fp2": 23,
    "opp_avg_allowed_fp2": 10.48,
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
    "headlineNews": "Back in Jacksonville",
    "report": "Koyack signed with the Jaguars on Wednesday, John Reid of The Florida Times-Union reports.",
    "analysis": "The Jaguars picked Koyack in the seventh round of the 2015 NFL Draft, and they're the only team he's played for despite being cut multiple times. He's back with the team, though, and he'll serve as depth since James O'Shaughnessy was ruled out for the season with a torn ACL. Koyack serves mainly as a run-blocker, as he has just 24 receptions for 199 yards and a touchdown in 37 career games.",
    "timestamp": "2019-10-09 01:45 PM",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": "DNP",
    "week08": "DNP",
    "week09": 0.0,
    "week10": "BYE",
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 0.0, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', -0.2, 'BYE', 3.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2574591.png",
    "name": "Nick Boyle",
    "depthchart": "Backup: TE-2",
    "team": "Baltimore Ravens",
    "projected": 3.8,
    "opponent": "Houston Texans",
    "home_away": "",
    "opp_rank": 27,
    "team_rank": 20,
    "avg_fp2": 4.61,
    "opp_rank_allowed_fp2": 10,
    "opp_avg_allowed_fp2": 7.53,
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
    "headlineNews": "Goes off for 78 yards",
    "report": "Boyle caught all four of his targets for 78 total yards during Sunday's 49-13 win over the Bengals.",
    "analysis": "It doesn't look like a lot, but Sunday's 78 yards set a new career high, while his nine catches over his past two games also mark a career best for a two-game stretch. Boyle has always been known as more of a blocker and underneath target than dynamic downfield pass-catcher, but -- with the Ravens using heavy sets to keep opponents guessing between the run and the pass -- Boyle is seeing opportunities like never before. He has already set a career high in receiving yards for a season and takes on a ho-hum Houston pass defense Sunday.",
    "timestamp": "2019-11-10 03:51 PM",
    "week01": 4.1,
    "week02": 1.9,
    "week03": 7.8,
    "week04": 1.4,
    "week05": 0.0,
    "week06": 2.8,
    "week07": 2.5,
    "week08": "BYE",
    "week09": 11.2,
    "week10": 9.8,
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.1, 1.9, 7.8, 1.4, 0.0, 2.8, 2.5, 'BYE', 11.2, 9.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [-0.3, 1.6, 1.6, 2.0, 3.8, 1.4, 3.4, 'BYE', 0.8, -0.1, 3.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116164.png",
    "name": "Mike Gesicki",
    "depthchart": "Starter: TE-1",
    "team": "Miami Dolphins",
    "projected": 3.6,
    "opponent": "Buffalo Bills",
    "home_away": "",
    "opp_rank": 3,
    "team_rank": 29,
    "avg_fp2": 4.18,
    "opp_rank_allowed_fp2": 1,
    "opp_avg_allowed_fp2": 5.14,
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
    "headlineNews": "Takes step back",
    "report": "Gesicki hauled in three of his six targets for 28 yards in the team's Week 10 win over the Colts.",
    "analysis": "Gesicki finished second on the team with six targets but failed to work downfield. His longest reception went for just 12 yards, but his performance was undone by a lost fumble on the team's opening drive. He was also responsible for one of Ryan Fitzpatrick's interceptions when he allowed Darius Leonard to wrestle the ball out of his hands. Gesicki's role in the Dolphins' offense appears set, though his ability to turn that into production remains unsteady.",
    "timestamp": "2019-11-10 07:18 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.1, 1.6, 2.4, 0.0, 'BYE', 6.6, 6.1, 2.0, 12.5, 2.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.4, 3.0, 1.7, 7.2, 'BYE', 4.1, 0.4, 8.1, 1.1, 4.3, 3.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2582410.png",
    "name": "Tyler Kroft",
    "depthchart": "Backup: TE-2",
    "team": "Buffalo Bills",
    "projected": 3.5,
    "opponent": "Miami Dolphins",
    "home_away": "at ",
    "opp_rank": 19,
    "team_rank": 24,
    "avg_fp2": 0.84,
    "opp_rank_allowed_fp2": 17,
    "opp_avg_allowed_fp2": 9.51,
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
    "headlineNews": "Shut out of passing game",
    "report": "Kroft was not targeted in Sunday's loss to the Browns, though he was on the field for 43 percent of the offensive snaps.",
    "analysis": "Kroft appears to finally be over his foot and ankle issues, yet that doesn't mean he's fantasy worthy, as he's taken a back seat to rookie Dawson Knox, who seems to be a more athletic receiver than Kroft and has been working with the offense for months while the free-agent signee was rehabilitating moderately severe injuries. Knox saw 58 percent of the offensive snaps Sunday and caught four balls for 55 yards on six targets. Kroft can't really be considered the starter at this stage any longer.",
    "timestamp": "2019-11-11 11:54 AM",
    "week01": "DNP",
    "week02": 0.0,
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "BYE",
    "week07": 0.0,
    "week08": 4.2,
    "week09": 0.0,
    "week10": 0.0,
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 0.0, 'DNP', 'DNP', 'DNP', 'BYE', 0.0, 4.2, 0.0, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 2.2, 'DNP', 'DNP', 'DNP', 'BYE', 0.6, 2.6, 2.6, 1.4, 3.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15853.png",
    "name": "Vance McDonald",
    "depthchart": "Starter: TE-1",
    "team": "Pittsburgh Steelers",
    "projected": 3.4,
    "opponent": "Cleveland Browns",
    "home_away": "at ",
    "opp_rank": 7,
    "team_rank": 27,
    "avg_fp2": 6.17,
    "opp_rank_allowed_fp2": 22,
    "opp_avg_allowed_fp2": 10.47,
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
    "headlineNews": "Three receptions in loss",
    "report": "McDonald caught three passes for 33 yards in Pittsburgh's 21-7 loss to Cleveland on Thursday night.",
    "analysis": "McDonald saw a team-high seven targets, but was unable to do much with them on a night the entire Pittsburgh offense struggled. Injuries to JuJu Smith-Schuster (concussion), Diontae Johnson (concussion) and James Conner (shoulder) -- all forced out of action and unable to return -- could dictate that McDonald has a significant role in the offense in Week 12 against the Bengals. Still, the tight end has scored just one touchdown in the last seven games and has yet to exceed 40 receiving yards in a game this season.",
    "timestamp": "2019-11-14 09:58 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.0, 19.3, 1.5, 'DNP', 4.9, 1.0, 'BYE', 3.4, 11.5, 2.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.5, 4.3, 6.4, 'DNP', 4.9, 3.0, 'BYE', 5.1, 3.5, 7.1, 3.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/17453.png",
    "name": "Cameron Brate",
    "depthchart": "Backup: TE-2",
    "team": "Tampa Bay Buccaneers",
    "projected": 3.0,
    "opponent": "New Orleans Saints",
    "home_away": "",
    "opp_rank": 10,
    "team_rank": 5,
    "avg_fp2": 3.84,
    "opp_rank_allowed_fp2": 12,
    "opp_avg_allowed_fp2": 8.0,
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
    "headlineNews": "Targetless in win",
    "report": "Brate was not targeted during Sunday's 30-27 win over Arizona.",
    "analysis": "Brate has not been targeted in his last two games, during which he has logged only 11 and 15 offensive snaps, his two lowest totals of the season. Brate has not been utilized to the same extent as seasons past under new head coach Bruce Arians and he appears to be trending downward. Next up is a matchup against a Saints squad that held him to one 11-yard catch in Week 5.",
    "timestamp": "2019-11-12 08:46 PM",
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.8, 2.0, 1.7, 11.1, 1.6, 11.7, 'BYE', 4.7, 0.0, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.1, 1.2, 4.8, 1.4, 3.4, 6.3, 'BYE', 6.7, 9.0, 4.7, 3.0]
                    }
                    
                    ]
               }
            }];



$scope.positionDST = [{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/CHI.png",
    "name": "Chicago Bears",
    "depthchart": "",
    "team": "Chicago Bears",
    "projected": 9.5,
    "opponent": "Los Angeles Rams",
    "opp_rank_pts": 10,
    "opp_avg_pts": 25.11,
    "home_away": "at ",
    "team_rank_allowed_pts": 4,
    "team_avg_allowed_pts": 17.22,
    "team_ranked_takeaways": 22,
    "team_avg_takeaways": 1.22,
    "opp_ranked_giveaways": 15,
    "opp_avg_giveaways": 1.33,
    "fanduelSalary": "$4200",
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
    "avg_fp2": 8.22,
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.0, 5.0, 17.0, 17.0, 4.0, 'BYE', 6.0, 4.0, 4.0, 8.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.8, 8.0, 7.0, 9.0, 8.9, 'BYE', 7.3, 7.7, 7.2, 8.9, 9.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/LA.png",
    "name": "Los Angeles Rams",
    "depthchart": "",
    "team": "Los Angeles Rams",
    "projected": 9.1,
    "opponent": "Chicago Bears",
    "opp_rank_pts": 27,
    "opp_avg_pts": 17.33,
    "home_away": "",
    "team_rank_allowed_pts": 16,
    "team_avg_allowed_pts": 21.11,
    "team_ranked_takeaways": 4,
    "team_avg_takeaways": 2.0,
    "opp_ranked_giveaways": 7,
    "opp_avg_giveaways": 1.11,
    "fanduelSalary": "$4600",
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
    "avg_fp2": 7.89,
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.0, 8.0, 9.0, 0.0, 2.0, 9.0, 15.0, 9.0, 'BYE', 10.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.1, 5.5, 8.1, 7.8, 5.2, 6.9, 5.4, 9.3, 'BYE', 5.8, 9.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/BUF.png",
    "name": "Buffalo Bills",
    "depthchart": "",
    "team": "Buffalo Bills",
    "projected": 9.1,
    "opponent": "Miami Dolphins",
    "opp_rank_pts": 31,
    "opp_avg_pts": 13.22,
    "home_away": "at ",
    "team_rank_allowed_pts": 3,
    "team_avg_allowed_pts": 16.11,
    "team_ranked_takeaways": 12,
    "team_avg_takeaways": 1.44,
    "opp_ranked_giveaways": 15,
    "opp_avg_giveaways": 1.33,
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
    "avg_fp2": 7.44,
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.0, 6.0, 13.0, 3.0, 11.0, 'BYE', 7.0, 4.0, 8.0, 5.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.4, 7.8, 6.6, 5.1, 7.8, 'BYE', 7.6, 8.5, 8.0, 7.8, 9.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/PIT.png",
    "name": "Pittsburgh Steelers",
    "depthchart": "",
    "team": "Pittsburgh Steelers",
    "projected": 8.5,
    "opponent": "Cleveland Browns",
    "opp_rank_pts": 26,
    "opp_avg_pts": 19.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 11,
    "team_avg_allowed_pts": 20.11,
    "team_ranked_takeaways": 2,
    "team_avg_takeaways": 2.11,
    "opp_ranked_giveaways": 5,
    "opp_avg_giveaways": 1.0,
    "fanduelSalary": "$4100",
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
    "avg_fp2": 10.89,
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 7.0, 11.0, 19.0, 11.0, 8.0, 'BYE', 13.0, 13.0, 16.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.4, 8.3, 6.3, 8.1, 5.8, 7.0, 'BYE', 9.6, 7.0, 6.7, 8.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/NE.png",
    "name": "New England Patriots",
    "depthchart": "",
    "team": "New England Patriots",
    "projected": 8.3,
    "opponent": "Philadelphia Eagles",
    "opp_rank_pts": 12,
    "opp_avg_pts": 24.89,
    "home_away": "at ",
    "team_rank_allowed_pts": 1,
    "team_avg_allowed_pts": 10.22,
    "team_ranked_takeaways": 12,
    "team_avg_takeaways": 1.56,
    "opp_ranked_giveaways": 29,
    "opp_avg_giveaways": 1.89,
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
    "avg_fp2": 14.56,
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.0, 25.0, 14.0, 17.0, 14.0, 10.0, 25.0, 15.0, 1.0, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.6, 9.0, 10.1, 6.7, 8.8, 7.1, 9.3, 9.5, 6.3, 'BYE', 8.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/SF.png",
    "name": "San Francisco 49ers",
    "depthchart": "",
    "team": "San Francisco 49ers",
    "projected": 8.1,
    "opponent": "Arizona Cardinals",
    "opp_rank_pts": 16,
    "opp_avg_pts": 22.2,
    "home_away": "",
    "team_rank_allowed_pts": 2,
    "team_avg_allowed_pts": 14.33,
    "team_ranked_takeaways": 5,
    "team_avg_takeaways": 1.89,
    "opp_ranked_giveaways": 1,
    "opp_avg_giveaways": 0.5,
    "fanduelSalary": "$4900",
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
    "avg_fp2": 11.78,
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [15.0, 7.0, 7.0, 'BYE', 19.0, 10.0, 15.0, 17.0, 3.0, 13.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.8, 6.4, 7.2, 'BYE', 6.8, 7.5, 8.1, 7.9, 8.7, 7.9, 8.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/MIN.png",
    "name": "Minnesota Vikings",
    "depthchart": "",
    "team": "Minnesota Vikings",
    "projected": 8.0,
    "opponent": "Denver Broncos",
    "opp_rank_pts": 28,
    "opp_avg_pts": 16.56,
    "home_away": "",
    "team_rank_allowed_pts": 6,
    "team_avg_allowed_pts": 18.4,
    "team_ranked_takeaways": 27,
    "team_avg_takeaways": 0.9,
    "opp_ranked_giveaways": 7,
    "opp_avg_giveaways": 1.11,
    "fanduelSalary": "$4700",
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
    "avg_fp2": 7.8,
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.0, 6.0, 7.0, 5.0, 12.0, 9.0, 3.0, 12.0, 7.0, 3.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.9, 7.2, 8.3, 7.3, 6.8, 8.2, 6.4, 7.3, 6.1, 5.5, 8.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/NYJ.png",
    "name": "New York Jets",
    "depthchart": "",
    "team": "New York Jets",
    "projected": 7.7,
    "opponent": "Washington Redskins",
    "opp_rank_pts": 31,
    "opp_avg_pts": 12.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 25,
    "team_avg_allowed_pts": 26.44,
    "team_ranked_takeaways": 2,
    "team_avg_takeaways": 2.11,
    "opp_ranked_giveaways": 20,
    "opp_avg_giveaways": 1.44,
    "fanduelSalary": "$4500",
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
    "avg_fp2": 4.78,
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.0, 5.0, 2.0, 'BYE', 3.0, 1.0, 1.0, 3.0, 6.0, 10.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.8, 7.8, 4.2, 'BYE', 5.5, 6.4, 4.8, 7.9, 6.2, 6.9, 7.7]
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
    "opp_rank_pts": 24,
    "opp_avg_pts": 19.56,
    "home_away": "",
    "team_rank_allowed_pts": 17,
    "team_avg_allowed_pts": 21.67,
    "team_ranked_takeaways": 16,
    "team_avg_takeaways": 1.33,
    "opp_ranked_giveaways": 24,
    "opp_avg_giveaways": 1.67,
    "fanduelSalary": "$4400",
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
    "avg_fp2": 6.22,
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.0, 5.0, 2.0, 3.0, 10.0, 'BYE', 9.0, 6.0, 8.0, 8.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.1, 5.9, 8.1, 7.3, 5.3, 'BYE', 6.5, 6.9, 6.2, 7.3, 7.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/CAR.png",
    "name": "Carolina Panthers",
    "depthchart": "",
    "team": "Carolina Panthers",
    "projected": 7.5,
    "opponent": "Atlanta Falcons",
    "opp_rank_pts": 20,
    "opp_avg_pts": 21.22,
    "home_away": "",
    "team_rank_allowed_pts": 23,
    "team_avg_allowed_pts": 25.56,
    "team_ranked_takeaways": 12,
    "team_avg_takeaways": 1.44,
    "opp_ranked_giveaways": 4,
    "opp_avg_giveaways": 0.89,
    "fanduelSalary": "$3700",
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
    "avg_fp2": 8.56,
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.0, 5.0, 13.0, 14.0, 8.0, 19.0, 'BYE', 3.0, 11.0, 2.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.8, 8.1, 6.6, 7.2, 7.5, 5.5, 'BYE', 7.9, 7.0, 5.5, 7.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/LAC.png",
    "name": "Los Angeles Chargers",
    "depthchart": "",
    "team": "Los Angeles Chargers",
    "projected": 7.2,
    "opponent": "Kansas City Chiefs",
    "opp_rank_pts": 5,
    "opp_avg_pts": 28.4,
    "home_away": "",
    "team_rank_allowed_pts": 8,
    "team_avg_allowed_pts": 19.4,
    "team_ranked_takeaways": 20,
    "team_avg_takeaways": 1.3,
    "opp_ranked_giveaways": 23,
    "opp_avg_giveaways": 1.5,
    "fanduelSalary": "$3100",
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
    "avg_fp2": 6.5,
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.0, 8.0, 4.0, 11.0, 14.0, 2.0, 4.0, 9.0, 7.0, 4.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.2, 6.6, 6.8, 6.9, 6.8, 7.2, 6.8, 7.2, 5.9, 5.1, 7.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/BAL.png",
    "name": "Baltimore Ravens",
    "depthchart": "",
    "team": "Baltimore Ravens",
    "projected": 7.1,
    "opponent": "Houston Texans",
    "opp_rank_pts": 8,
    "opp_avg_pts": 26.78,
    "home_away": "",
    "team_rank_allowed_pts": 12,
    "team_avg_allowed_pts": 20.33,
    "team_ranked_takeaways": 16,
    "team_avg_takeaways": 1.33,
    "opp_ranked_giveaways": 7,
    "opp_avg_giveaways": 1.11,
    "fanduelSalary": "$4300",
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
    "avg_fp2": 5.67,
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [13.0, 4.0, 0.0, -1.0, 5.0, 5.0, 6.0, 'BYE', 7.0, 12.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.4, 10.6, 6.5, 8.9, 7.8, 8.6, 6.3, 'BYE', 5.9, 7.1, 7.1]
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
    "opp_rank_pts": 18,
    "opp_avg_pts": 21.44,
    "home_away": "",
    "team_rank_allowed_pts": 22,
    "team_avg_allowed_pts": 24.56,
    "team_ranked_takeaways": 5,
    "team_avg_takeaways": 1.89,
    "opp_ranked_giveaways": 30,
    "opp_avg_giveaways": 2.22,
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
    "avg_fp2": 5.89,
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 13.0, 9.0, 10.0, 5.0, 4.0, 'BYE', 5.0, 5.0, 2.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.9, 7.9, 7.1, 4.8, 5.8, 5.8, 'BYE', 4.8, 5.7, 6.2, 6.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/WAS.png",
    "name": "Washington Redskins",
    "depthchart": "",
    "team": "Washington Redskins",
    "projected": 6.8,
    "opponent": "New York Jets",
    "opp_rank_pts": 30,
    "opp_avg_pts": 13.33,
    "home_away": "",
    "team_rank_allowed_pts": 21,
    "team_avg_allowed_pts": 24.33,
    "team_ranked_takeaways": 19,
    "team_avg_takeaways": 1.33,
    "opp_ranked_giveaways": 7,
    "opp_avg_giveaways": 1.11,
    "fanduelSalary": "$4000",
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
    "avg_fp2": 5.22,
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 2.0, 5.0, 9.0, 5.0, 10.0, 8.0, 6.0, 2.0, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(119, 49, 65, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.1, 5.7, 5.9, 4.9, 5.3, 6.3, 6.8, 4.7, 6.3, 'BYE', 6.8]
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
    "opponent": "Los Angeles Chargers",
    "opp_rank_pts": 23,
    "opp_avg_pts": 20.1,
    "home_away": "at ",
    "team_rank_allowed_pts": 19,
    "team_avg_allowed_pts": 23.2,
    "team_ranked_takeaways": 32,
    "team_avg_takeaways": 0.7,
    "opp_ranked_giveaways": 13,
    "opp_avg_giveaways": 1.3,
    "fanduelSalary": "$3600",
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
    "avg_fp2": 5.8,
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.0, 11.0, 2.0, 6.0, 3.0, 5.0, 18.0, 5.0, 1.0, 2.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.8, 6.1, 5.3, 5.9, 5.9, 6.7, 5.4, 5.6, 7.0, 6.2, 6.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/OAK.png",
    "name": "Oakland Raiders",
    "depthchart": "",
    "team": "Oakland Raiders",
    "projected": 6.8,
    "opponent": "Cincinnati Bengals",
    "opp_rank_pts": 29,
    "opp_avg_pts": 14.22,
    "home_away": "",
    "team_rank_allowed_pts": 26,
    "team_avg_allowed_pts": 26.67,
    "team_ranked_takeaways": 29,
    "team_avg_takeaways": 0.78,
    "opp_ranked_giveaways": 15,
    "opp_avg_giveaways": 1.33,
    "fanduelSalary": "$5000",
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
    "avg_fp2": 3.78,
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.0, 3.0, -1.0, 4.0, 8.0, 'BYE', -3.0, 3.0, 6.0, 10.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.1, 5.5, 6.4, 4.1, 7.9, 'BYE', 4.8, 5.5, 5.6, 5.6, 6.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/DAL.png",
    "name": "Dallas Cowboys",
    "depthchart": "",
    "team": "Dallas Cowboys",
    "projected": 6.7,
    "opponent": "Detroit Lions",
    "opp_rank_pts": 14,
    "opp_avg_pts": 23.44,
    "home_away": "at ",
    "team_rank_allowed_pts": 7,
    "team_avg_allowed_pts": 18.89,
    "team_ranked_takeaways": 5,
    "team_avg_takeaways": 1.89,
    "opp_ranked_giveaways": 5,
    "opp_avg_giveaways": 1.0,
    "fanduelSalary": "$4100",
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
    "avg_fp2": 6.78,
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.0, 1.0, 11.0, 11.0, 1.0, 4.0, 15.0, 'BYE', 12.0, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.9, 5.8, 8.4, 4.9, 6.9, 7.1, 5.5, 'BYE', 6.4, 6.3, 6.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/MIA.png",
    "name": "Miami Dolphins",
    "depthchart": "",
    "team": "Miami Dolphins",
    "projected": 6.6,
    "opponent": "Buffalo Bills",
    "opp_rank_pts": 24,
    "opp_avg_pts": 19.56,
    "home_away": "",
    "team_rank_allowed_pts": 31,
    "team_avg_allowed_pts": 29.56,
    "team_ranked_takeaways": 10,
    "team_avg_takeaways": 1.56,
    "opp_ranked_giveaways": 7,
    "opp_avg_giveaways": 1.11,
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
    "avg_fp2": 3.0,
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [-3.0, 3.0, 2.0, 0.0, 'BYE', 1.0, 1.0, 4.0, 8.0, 11.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.5, 4.8, 5.2, 5.6, 'BYE', 6.5, 6.1, 6.1, 7.6, 5.5, 6.6]
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
    "opponent": "Tampa Bay Buccaneers",
    "opp_rank_pts": 3,
    "opp_avg_pts": 29.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 9,
    "team_avg_allowed_pts": 19.56,
    "team_ranked_takeaways": 22,
    "team_avg_takeaways": 1.22,
    "opp_ranked_giveaways": 21,
    "opp_avg_giveaways": 1.44,
    "fanduelSalary": "$4800",
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
    "avg_fp2": 7.44,
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.0, 5.0, 8.0, 11.0, 6.0, 11.0, 8.0, 8.0, 'BYE', 3.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.9, 7.0, 5.7, 5.6, 6.2, 7.1, 6.7, 6.7, 'BYE', 7.2, 6.4]
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
    "opponent": "Minnesota Vikings",
    "opp_rank_pts": 9,
    "opp_avg_pts": 26.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 7,
    "team_avg_allowed_pts": 18.22,
    "team_ranked_takeaways": 30,
    "team_avg_takeaways": 0.78,
    "opp_ranked_giveaways": 24,
    "opp_avg_giveaways": 1.6,
    "fanduelSalary": "$3700",
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
    "avg_fp2": 5.44,
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(225, 119, 87, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 1.0, 0.0, 5.0, 10.0, 23.0, 0.0, 7.0, 3.0, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.8, 8.7, 5.7, 6.6, 5.6, 7.1, 4.9, 5.7, 7.4, 'BYE', 6.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/TB.png",
    "name": "Tampa Bay Buccaneers",
    "depthchart": "",
    "team": "Tampa Bay Buccaneers",
    "projected": 6.0,
    "opponent": "New Orleans Saints",
    "opp_rank_pts": 17,
    "opp_avg_pts": 21.78,
    "home_away": "",
    "team_rank_allowed_pts": 32,
    "team_avg_allowed_pts": 30.78,
    "team_ranked_takeaways": 1,
    "team_avg_takeaways": 2.56,
    "opp_ranked_giveaways": 2,
    "opp_avg_giveaways": 0.56,
    "fanduelSalary": "$3300",
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
    "avg_fp2": 5.0,
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.0, 9.0, 8.0, 9.0, 1.0, 0.0, 'BYE', 5.0, 1.0, 6.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.3, 8.2, 7.1, 7.5, 6.3, 6.3, 'BYE', 6.1, 5.8, 7.2, 6.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/ATL.png",
    "name": "Atlanta Falcons",
    "depthchart": "",
    "team": "Atlanta Falcons",
    "projected": 6.0,
    "opponent": "Carolina Panthers",
    "opp_rank_pts": 12,
    "opp_avg_pts": 24.78,
    "home_away": "at ",
    "team_rank_allowed_pts": 30,
    "team_avg_allowed_pts": 28.89,
    "team_ranked_takeaways": 16,
    "team_avg_takeaways": 1.33,
    "opp_ranked_giveaways": 31,
    "opp_avg_giveaways": 2.33,
    "fanduelSalary": "$3500",
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
    "avg_fp2": 1.78,
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 10.0, 1.0, 0.0, -2.0, -1.0, -4.0, 2.0, 'BYE', 10.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.7, 5.8, 5.6, 6.5, 7.6, 5.3, 6.5, 4.9, 'BYE', 5.6, 6.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/JAX.png",
    "name": "Jacksonville Jaguars",
    "depthchart": "",
    "team": "Jacksonville Jaguars",
    "projected": 5.7,
    "opponent": "Indianapolis Colts",
    "opp_rank_pts": 19,
    "opp_avg_pts": 21.33,
    "home_away": "at ",
    "team_rank_allowed_pts": 11,
    "team_avg_allowed_pts": 21.0,
    "team_ranked_takeaways": 30,
    "team_avg_takeaways": 0.78,
    "opp_ranked_giveaways": 15,
    "opp_avg_giveaways": 1.33,
    "fanduelSalary": "$3800",
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
    "avg_fp2": 6.78,
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 103, 120, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [-4.0, 8.0, 13.0, 2.0, 4.0, 7.0, 11.0, 15.0, 5.0, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.3, 6.4, 6.2, 5.3, 6.1, 7.0, 6.5, 9.6, 5.5, 'BYE', 5.7]
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
    "opponent": "Dallas Cowboys",
    "opp_rank_pts": 6,
    "opp_avg_pts": 27.89,
    "home_away": "",
    "team_rank_allowed_pts": 24,
    "team_avg_allowed_pts": 26.33,
    "team_ranked_takeaways": 8,
    "team_avg_takeaways": 1.67,
    "opp_ranked_giveaways": 3,
    "opp_avg_giveaways": 0.78,
    "fanduelSalary": "$3600",
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
    "avg_fp2": 5.33,
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.0, 9.0, 13.0, 5.0, 'BYE', 7.0, -4.0, 5.0, 0.0, 6.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.6, 6.7, 5.6, 6.1, 'BYE', 6.1, 6.2, 7.4, 5.4, 6.8, 5.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/PHI.png",
    "name": "Philadelphia Eagles",
    "depthchart": "",
    "team": "Philadelphia Eagles",
    "projected": 5.4,
    "opponent": "New England Patriots",
    "opp_rank_pts": 2,
    "opp_avg_pts": 29.78,
    "home_away": "",
    "team_rank_allowed_pts": 19,
    "team_avg_allowed_pts": 23.0,
    "team_ranked_takeaways": 22,
    "team_avg_takeaways": 1.11,
    "opp_ranked_giveaways": 32,
    "opp_avg_giveaways": 2.56,
    "fanduelSalary": "$3200",
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
    "avg_fp2": 6.44,
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1
                         backgroundColor:  "rgba(56, 97, 104, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.0, 7.0, 4.0, 5.0, 23.0, 1.0, 1.0, 12.0, 4.0, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 76, 84, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.8, 6.4, 7.2, 6.0, 8.6, 7.5, 5.5, 6.5, 8.9, 'BYE', 5.4]
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
    "opponent": "Oakland Raiders",
    "opp_rank_pts": 15,
    "opp_avg_pts": 23.11,
    "home_away": "at ",
    "team_rank_allowed_pts": 29,
    "team_avg_allowed_pts": 28.78,
    "team_ranked_takeaways": 12,
    "team_avg_takeaways": 1.44,
    "opp_ranked_giveaways": 12,
    "opp_avg_giveaways": 1.22,
    "fanduelSalary": "$3000",
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
    "avg_fp2": 2.44,
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.0, -2.0, 5.0, 2.0, 1.0, 9.0, 2.0, 0.0, 'BYE', -1.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.3, 8.6, 5.0, 5.9, 7.5, 5.1, 6.1, 7.3, 'BYE', 5.4, 5.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/ARI.png",
    "name": "Arizona Cardinals",
    "depthchart": "",
    "team": "Arizona Cardinals",
    "projected": 5.3,
    "opponent": "San Francisco 49ers",
    "opp_rank_pts": 4,
    "opp_avg_pts": 28.78,
    "home_away": "at ",
    "team_rank_allowed_pts": 27,
    "team_avg_allowed_pts": 28.1,
    "team_ranked_takeaways": 26,
    "team_avg_takeaways": 1.1,
    "opp_ranked_giveaways": 28,
    "opp_avg_giveaways": 2.0,
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
    "avg_fp2": 3.7,
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.0, 2.0, 0.0, 4.0, 1.0, 1.0, 14.0, 1.0, 0.0, 9.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.0, 6.8, 8.1, 6.1, 7.0, 6.9, 6.8, 5.6, 6.6, 5.9, 5.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/HOU.png",
    "name": "Houston Texans",
    "depthchart": "",
    "team": "Houston Texans",
    "projected": 4.6,
    "opponent": "Baltimore Ravens",
    "opp_rank_pts": 1,
    "opp_avg_pts": 32.56,
    "home_away": "at ",
    "team_rank_allowed_pts": 11,
    "team_avg_allowed_pts": 21.0,
    "team_ranked_takeaways": 7,
    "team_avg_takeaways": 1.67,
    "opp_ranked_giveaways": 15,
    "opp_avg_giveaways": 1.33,
    "fanduelSalary": "$3500",
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
    "avg_fp2": 6.11,
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
    "week11": "",
    "week12": "",
    "week13": "",
    "week14": "",
    "week15": "",
    "week16": "",
    "week17": ""
,

            data : {
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.0, 10.0, 5.0, 10.0, 3.0, 5.0, 2.0, 0.0, 18.0, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(3, 32, 47, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.6, 7.5, 4.5, 6.9, 7.4, 5.0, 4.1, 7.5, 6.0, 'BYE', 4.6]
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