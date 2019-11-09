var App = angular.module('footballApp', ['tc.chartjs']);

App.controller('positionController', function($scope, $http) {

  //JSON data for position and players

/*********************** PASTE AFTER HERE ************************/

$scope.currentDate = {"currentDate": "Saturday, 09 November 2019 07:51 AM (central time)"};
$scope.week = {"nflWeek": 10};

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
    "projected": 25.7,
    "opponent": "Cincinnati Bengals",
    "home_away": "at ",
    "opp_rank": 22,
    "team_rank": 20,
    "avg_fp2": 26.15,
    "opp_rank_allowed_fp2": 28,
    "opp_avg_allowed_fp2": 22.42,
    "fanduelSalary": "$8600",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Illness",
    "tmColorLite": "#9E7C0C",
    "tmColorDark": "#241773",
    "tmColorLite_rgba": "rgba(158, 124, 12, 0.2)",
    "tmColorDark_rgba": "rgba(36, 23, 115, 0.2)",
    "tmTextLite": "#9E7C0C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/bal.png",
    "headlineNews": "Questionable for Sunday",
    "report": "Jackson (illness) is listed as questionable for Sunday's game at Cincinnati.",
    "analysis": "After sitting out Thursday's practice due to an illness, Jackson returned Friday as a full participant. \"He looked good,\" coach John Harbaugh told Clifton Brown of the Ravens' official site. Despite those facts, fantasy managers may want to keep an eye on Baltimore's inactive list, which will be released about 90 minutes before Sunday's 1:00 p.m. ET kickoff.",
    "timestamp": "2019-11-08 11:42 AM",
    "week01": 33.56,
    "week02": 30.88,
    "week03": 21.28,
    "week04": 26.48,
    "week05": 14.44,
    "week06": 30.64,
    "week07": 23.32,
    "week08": "BYE",
    "week09": 28.62,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [33.56, 30.88, 21.28, 26.48, 14.44, 30.64, 23.32, 'BYE', 28.62]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.3, 24.6, 18.1, 23.7, 25.3, 21.9, 17.6, 'BYE', 21.5, 25.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3139477.png",
    "name": "Patrick Mahomes",
    "depthchart": "Starter: QB-1",
    "team": "Kansas City Chiefs",
    "projected": 22.7,
    "opponent": "Tennessee Titans",
    "home_away": "at ",
    "opp_rank": 17,
    "team_rank": 2,
    "avg_fp2": 21.49,
    "opp_rank_allowed_fp2": 14,
    "opp_avg_allowed_fp2": 16.47,
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
    "headlineNews": "Doesn't expect to be limited",
    "report": "Mahomes (kneecap), who doesn't carry a Week 10 injury designation after practicing fully all week, feels like he won't be limited physically in his slated return to the lineup Sunday against the Titans, ESPN's Adam Teicher reports. \"That's what we tested out this week especially,\" Mahomes noted Friday. \"We put me on the run, and I threw it across my body and did all the stuff I've grown to do as I've been in the NFL and my whole career. I didn't have any pain. I was still able to do it. I wanted to make sure I was able to do that before I got back on that field.\"",
    "analysis": "Mahomes hasn't suited up up since dislocating his right kneecap  Oct. 17, but he's slated to start Sunday's contest, barring any unexpected setbacks, which will send Matt Moore -- who had been filling in at QB for the Chiefs -- back to a reserve role. Additionally, the return of Mahomes should boost the Week 10 (and beyond) fantasy prospects of key receiving weapons Travis Kelce, Tyreek Hill and Sammy Watkins.",
    "timestamp": "2019-11-08 02:24 PM",
    "week01": 27.32,
    "week02": 31.62,
    "week03": 27.86,
    "week04": 18.0,
    "week05": 18.54,
    "week06": 19.82,
    "week07": 7.24,
    "week08": "DNP",
    "week09": "DNP",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [27.32, 31.62, 27.86, 18.0, 18.54, 19.82, 7.24, 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [20.9, 21.0, 22.8, 27.2, 24.3, 25.3, 19.0, 'DNP', 'DNP', 22.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2580.png",
    "name": "Drew Brees",
    "depthchart": "Starter: QB-1",
    "team": "New Orleans Saints",
    "projected": 21.6,
    "opponent": "Atlanta Falcons",
    "home_away": "",
    "opp_rank": 23,
    "team_rank": 11,
    "avg_fp2": 16.08,
    "opp_rank_allowed_fp2": 30,
    "opp_avg_allowed_fp2": 24.02,
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
    "headlineNews": "Will continue to play with splint",
    "report": "Brees expects to wear a splint on his right thumb for the foreseeable future, Katherine Terrell of The Athletic reports.",
    "analysis": "After missing five games following surgery to repair a torn UCL in the thumb, Brees returned to action Week 8 against the Cardinals, putting up 373 yards, three touchdowns and one interception on 34-for-43 passing. He didn't suffer any residual effects or even swelling in the region following the contest, but he nonetheless will play with the splint moving forward. Brees practiced in full Wednesday, so he's set to tee off again Sunday against the Falcons' 23rd-ranked pass defense (261.1 yards per game).",
    "timestamp": "2019-11-06 03:05 PM",
    "week01": 21.8,
    "week02": 0.52,
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": "DNP",
    "week08": 25.92,
    "week09": "BYE",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [21.8, 0.52, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 25.92, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [20.3, 18.2, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 19.4, 'BYE', 21.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3918298.png",
    "name": "Josh Allen",
    "depthchart": "Starter: QB-1",
    "team": "Buffalo Bills",
    "projected": 21.5,
    "opponent": "Cleveland Browns",
    "home_away": "at ",
    "opp_rank": 6,
    "team_rank": 26,
    "avg_fp2": 18.48,
    "opp_rank_allowed_fp2": 20,
    "opp_avg_allowed_fp2": 19.25,
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
    "headlineNews": "Scores twice in Week 9 win",
    "report": "Allen completed 14 of his 20 pass attempts, accounting for 160 yards and one touchdown during Sunday's 24-9 win against the Redskins. He also carried the ball eight times for 12 yards and a touchdown while fumbling twice, though neither was recovered by Washington.",
    "analysis": "Sunday's performance marks the third time this year, and the seventh time since the start of last year, that Allen has tallied both a passing and rushing score in the same game. Allen's long-term success ultimately will be predicated on his ability to become more accurate as a thrower, making his Week 9 showing of zero turnovers and a 70 percent completion rate extremely encouraging. Upcoming in Week 10, Allen and the Buffalo passing attack will be facing off against a Browns defense that entered the weekend with just eight takeaways, the eighth-lowest total in the NFL.",
    "timestamp": "2019-11-03 01:25 PM",
    "week01": 17.96,
    "week02": 22.22,
    "week03": 21.32,
    "week04": 11.72,
    "week05": 18.46,
    "week06": "BYE",
    "week07": 21.28,
    "week08": 17.26,
    "week09": 17.6,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [17.96, 22.22, 21.32, 11.72, 18.46, 'BYE', 21.28, 17.26, 17.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.3, 23.5, 21.4, 21.9, 7.0, 'BYE', 19.1, 14.4, 17.2, 21.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/8439.png",
    "name": "Aaron Rodgers",
    "depthchart": "Starter: QB-1",
    "team": "Green Bay Packers",
    "projected": 21.2,
    "opponent": "Carolina Panthers",
    "home_away": "",
    "opp_rank": 9,
    "team_rank": 12,
    "avg_fp2": 19.96,
    "opp_rank_allowed_fp2": 15,
    "opp_avg_allowed_fp2": 16.76,
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
    "headlineNews": "Struggles against Chargers",
    "report": "Rodgers completed 23 of 35 passes for 161 yards and a touchdown in Sunday's 26-11 loss to the Chargers. He also ran in a two-point conversion.",
    "analysis": "His 4.6 YPA was his worst performance of the season, and Rodgers' yardage total was also his lowest of 2019. The Chargers dominated the game by keeping the Packers offense off the field with a strong running attack, and when Rodgers did get the ball, Nick Bosa and Melvin Ingram gave him little time to find a receiver. Rodgers will get a chance to rebound next week against a Carolina defense that just gave up over 300 passing yards to Ryan Tannehill.",
    "timestamp": "2019-11-03 06:00 PM",
    "week01": 12.92,
    "week02": 14.36,
    "week03": 13.3,
    "week04": 26.48,
    "week05": 9.42,
    "week06": 19.32,
    "week07": 43.76,
    "week08": 27.1,
    "week09": 12.94,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.92, 14.36, 13.3, 26.48, 9.42, 19.32, 43.76, 27.1, 12.94]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [21.7, 21.8, 15.1, 18.7, 19.0, 21.3, 24.7, 19.0, 15.5, 21.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14881.png",
    "name": "Russell Wilson",
    "depthchart": "Starter: QB-1",
    "team": "Seattle Seahawks",
    "projected": 20.5,
    "opponent": "San Francisco 49ers",
    "home_away": "at ",
    "opp_rank": 1,
    "team_rank": 9,
    "avg_fp2": 25.28,
    "opp_rank_allowed_fp2": 2,
    "opp_avg_allowed_fp2": 9.71,
    "fanduelSalary": "$0",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#69BE28",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(105, 190, 40, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#69BE28",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
    "headlineNews": "Spectacular in overtime win",
    "report": "Wilson completed 29 of 43 passes for 378 yards and five touchdowns in Sunday's 40-34 overtime win against the Buccaneers. He also rushed once for 21 yards.",
    "analysis": "The Buccaneers scored on their opening drive, so Wilson responded on his first offensive possession by completing his first five throws for 73 yards and a touchdown to Tyler Lockett, who ended up being his favorite target all afternoon. That was just the start of Wilson's career day, as he threw an additional touchdown to Lockett, one to D.K. Metcalf and two to Jacob Hollister, including the game-winner. This is the signature game an MVP candidate like Wilson needs, as he now has 22 touchdowns and just one interception through nine games. Wilson will look to take down the division-leading 49ers in Week 10.",
    "timestamp": "2019-11-03 04:51 PM",
    "week01": 16.64,
    "week02": 24.2,
    "week03": 41.34,
    "week04": 14.3,
    "week05": 29.92,
    "week06": 28.9,
    "week07": 15.34,
    "week08": 15.68,
    "week09": 41.22,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [16.64, 24.2, 41.34, 14.3, 29.92, 28.9, 15.34, 15.68, 41.22]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [19.5, 20.1, 18.7, 25.8, 12.5, 20.9, 17.3, 27.5, 24.3, 20.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2969939.png",
    "name": "Jameis Winston",
    "depthchart": "Starter: QB-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 20.1,
    "opponent": "Arizona Cardinals",
    "home_away": "",
    "opp_rank": 29,
    "team_rank": 7,
    "avg_fp2": 20.02,
    "opp_rank_allowed_fp2": 32,
    "opp_avg_allowed_fp2": 25.21,
    "fanduelSalary": "$7900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#D50A0A",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(213, 10, 10, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#D50A0A",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Big numbers in Week 9 loss",
    "report": "Winston completed 29 of 44 passes for 335 yards with two touchdowns and no interceptions in the Buccaneers' 40-34 overtime loss to the Seahawks on Sunday. He also rushed twice for eight yards and lost a fumble.",
    "analysis": "Winston managed to stay away from interceptions after throwing seven picks over the prior two games, but he lost the handle on a Mychal Kendricks sack early in the fourth quarter just inside Seattle territory. It was the embattled quarterback's eighth fumble of the season overall -- although he's only lost three of them -- and his 15th turnover of the campaign. Winston was otherwise excellent from a fantasy perspective, wracking up his third straight 300-yard performance and fifth overall in the last six games. He continued to demonstrate an elite level of chemistry with Mike Evans in particular, connecting with his No. 1 wideout on 12 occasions for 180 yards and one of his scores. Winston is providing fantasy managers with week-winning numbers, even as his team sinks further in the standings. He'll look to help generate a win alongside strong production against the Cardinals in Week 10.",
    "timestamp": "2019-11-03 06:57 PM",
    "week01": 10.06,
    "week02": 13.22,
    "week03": 26.5,
    "week04": 30.3,
    "week05": 17.46,
    "week06": 19.1,
    "week07": "BYE",
    "week08": 23.34,
    "week09": 20.2,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.06, 13.22, 26.5, 30.3, 17.46, 19.1, 'BYE', 23.34, 20.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [20.1, 18.6, 19.1, 12.8, 17.9, 18.9, 'BYE', 17.3, 24.5, 20.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14880.png",
    "name": "Kirk Cousins",
    "depthchart": "Starter: QB-1",
    "team": "Minnesota Vikings",
    "projected": 20.0,
    "opponent": "Dallas Cowboys",
    "home_away": "at ",
    "opp_rank": 7,
    "team_rank": 16,
    "avg_fp2": 17.34,
    "opp_rank_allowed_fp2": 5,
    "opp_avg_allowed_fp2": 12.63,
    "fanduelSalary": "$9400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#e0aa19",
    "tmColorDark": "#300e5a",
    "tmColorLite_rgba": "rgba(224, 170, 25, 0.2)",
    "tmColorDark_rgba": "rgba(48, 14, 90, 0.2)",
    "tmTextLite": "#e0aa19",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/min.png",
    "headlineNews": "Three-touchdown effort in loss",
    "report": "Cousins completed 19 of 38 passes for 220 yards with three touchdowns and no interceptions in the Vikings' 26-23 loss to the Chiefs on Sunday. He also rushed once for five yards.",
    "analysis": "Cousins dealt with the early exit of Adam Thielen (hamstring), who reinjured his leg in the first quarter and never returned. That may have helped lead to Cousins generating his second-lowest completion percentage of the season, but he still found a way to his fourth multi-touchdown effort in the last five games by notching scoring tosses to Bisi Johnson, Ameer Abdullah and Kyle Rudolph. Cousins now has three straight interception-free efforts, and he'll look to continue building momentum at the expense of the Cowboys in Week 10.",
    "timestamp": "2019-11-03 02:03 PM",
    "week01": 14.32,
    "week02": 10.9,
    "week03": 12.56,
    "week04": 7.32,
    "week05": 20.54,
    "week06": 28.32,
    "week07": 29.18,
    "week08": 11.6,
    "week09": 21.3,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.32, 10.9, 12.56, 7.32, 20.54, 28.32, 29.18, 11.6, 21.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [20.0, 16.9, 18.4, 13.1, 12.0, 12.2, 17.6, 18.2, 16.4, 20.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14876.png",
    "name": "Ryan Tannehill",
    "depthchart": "Starter: QB-1",
    "team": "Tennessee Titans",
    "projected": 19.7,
    "opponent": "Kansas City Chiefs",
    "home_away": "",
    "opp_rank": 11,
    "team_rank": 24,
    "avg_fp2": 13.96,
    "opp_rank_allowed_fp2": 23,
    "opp_avg_allowed_fp2": 20.26,
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
    "headlineNews": "Tops 300 passing yards",
    "report": "Tannehill completed 27 of 39 passes for 331 yards, one touchdown and two interceptions in Week 9 against Carolina. He also added four carries for 38 yards and another score.",
    "analysis": "Tannehill put up a big statistical performance, highlighted by his second 300-yard passing performance in his last three games. However, he also threw two interceptions, one of which led directly to a Carolina touchdown that put the Titans down 10-0. Still, Tannehill has offered a vertical element to the team's offense, illustrated by long receptions from A.J. Brown and Tajae Sharpe. That said, he should remain under center as the Titans head into their Week 10 matchup against the Chiefs.",
    "timestamp": "2019-11-03 07:51 PM",
    "week01": -0.2,
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": 5.36,
    "week07": 20.18,
    "week08": 19.42,
    "week09": 25.04,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [-0.2, 'DNP', 'DNP', 'DNP', 'DNP', 5.36, 20.18, 19.42, 25.04]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.8, 'DNP', 'DNP', 'DNP', 'DNP', 0.1, 12.2, 18.8, 11.7, 19.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/5529.png",
    "name": "Philip Rivers",
    "depthchart": "Starter: QB-1",
    "team": "Los Angeles Chargers",
    "projected": 19.4,
    "opponent": "Oakland Raiders",
    "home_away": "at ",
    "opp_rank": 32,
    "team_rank": 6,
    "avg_fp2": 15.97,
    "opp_rank_allowed_fp2": 31,
    "opp_avg_allowed_fp2": 24.35,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [24.92, 11.92, 19.62, 20.4, 6.14, 16.8, 21.16, 11.04, 11.76]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [19.0, 17.3, 19.7, 24.5, 18.2, 13.9, 13.9, 16.3, 15.8, 19.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16760.png",
    "name": "Jimmy Garoppolo",
    "depthchart": "Starter: QB-1",
    "team": "San Francisco 49ers",
    "projected": 18.8,
    "opponent": "Seattle Seahawks",
    "home_away": "",
    "opp_rank": 28,
    "team_rank": 22,
    "avg_fp2": 15.81,
    "opp_rank_allowed_fp2": 22,
    "opp_avg_allowed_fp2": 20.14,
    "fanduelSalary": "$0",
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
    "week09": 28.88,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [13.44, 23.68, 11.38, 'BYE', 14.94, 13.12, 7.04, 14.0, 28.88]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.3, 11.1, 19.6, 'BYE', 15.6, 11.0, 13.3, 15.0, 16.7, 18.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3917315.png",
    "name": "Kyler Murray",
    "depthchart": "Starter: QB-1",
    "team": "Arizona Cardinals",
    "projected": 18.4,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "at ",
    "opp_rank": 31,
    "team_rank": 19,
    "avg_fp2": 19.48,
    "opp_rank_allowed_fp2": 30,
    "opp_avg_allowed_fp2": 24.14,
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
    "week09": 25.04,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [24.62, 18.36, 19.82, 17.34, 24.32, 28.8, 6.96, 10.1, 25.04]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.6, 14.4, 14.2, 19.5, 17.1, 21.9, 16.1, 19.5, 11.8, 18.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3917792.png",
    "name": "Daniel Jones",
    "depthchart": "Starter: QB-1",
    "team": "New York Giants",
    "projected": 17.4,
    "opponent": "New York Jets",
    "home_away": "at ",
    "opp_rank": 24,
    "team_rank": 18,
    "avg_fp2": 15.23,
    "opp_rank_allowed_fp2": 17,
    "opp_avg_allowed_fp2": 18.02,
    "fanduelSalary": "$7400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#0B2265",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(11, 34, 101, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png",
    "headlineNews": "Two fumbles in defeat",
    "report": "Jones completed 26 of 41 passes for 210 yards, a touchdown and an interception in Monday night's 37-18 loss to the Cowboys. He also rushed six times for 54 yards and lost two fumbles.",
    "analysis": "Jones threw a one-yard touchdown to Cody Latimer to start the second quarter, but otherwise struggled to get the Giants in the end zone, as they kicked two field goals from within the 10-yard line in the first half. He also had a deep ball intercepted just prior to intermission, and coughed it up on New York's second series in the second half. Jones also ended the game with a fumble that was returned 63 yards for a touchdown, giving him a league-high eight lost fumbles. On the bright side, Jones actually led his team in rushing, posting a career-best total on the ground. He should find the going easier in Week 10 versus the Jets.",
    "timestamp": "2019-11-04 09:36 PM",
    "week01": -0.82,
    "week02": "DNP",
    "week03": 36.24,
    "week04": 14.3,
    "week05": 11.48,
    "week06": 8.24,
    "week07": 11.42,
    "week08": 28.18,
    "week09": 12.8,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [-0.82, 'DNP', 36.24, 14.3, 11.48, 8.24, 11.42, 28.18, 12.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.2, 'DNP', 12.9, 18.3, 17.4, 13.5, 13.1, 10.0, 17.3, 17.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3912547.png",
    "name": "Sam Darnold",
    "depthchart": "Starter: QB-1",
    "team": "New York Jets",
    "projected": 17.2,
    "opponent": "New York Giants",
    "home_away": "",
    "opp_rank": 25,
    "team_rank": 32,
    "avg_fp2": 12.82,
    "opp_rank_allowed_fp2": 24,
    "opp_avg_allowed_fp2": 20.39,
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
    "headlineNews": "Struggles continue in Miami",
    "report": "Darnold completed 27 of 39 passes for 260 yards, one touchdown and one interception in Sunday's 26-18 loss to the Dolphins. He added one yard on two rushing attempts.",
    "analysis": "Darnold came out of the gate hot and then fizzled out for a second straight week. He capped the opening drive with a 12-yard touchdown pass to Jamison Crowder and appeared to throw a two-yard touchdown to tight end Ryan Griffin late in the first half, but the play was controversially taken off the board on replay, and Darnold was picked off on the ensuing play. Darnold has been part of the problem in New York's 1-7 start, and his carelessness in the red zone has been particularly worrisome. However, you can't pin all of this team's struggles on the second-year quarterback, considering the offensive line is constantly allowing free rushers into the backfield. The bottom line from a fantasy perspective is that Darnold has a dreadful 3:8 touchdown to interception ratio over his last three games.",
    "timestamp": "2019-11-03 01:37 PM",
    "week01": 15.0,
    "week02": "DNP",
    "week03": "DNP",
    "week04": "BYE",
    "week05": "DNP",
    "week06": 20.62,
    "week07": -2.66,
    "week08": 17.62,
    "week09": 13.5,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [15.0, 'DNP', 'DNP', 'BYE', 'DNP', 20.62, -2.66, 17.62, 13.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.4, 'DNP', 'DNP', 'BYE', 'DNP', 12.3, 10.8, 12.6, 19.5, 17.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2578570.png",
    "name": "Jacoby Brissett",
    "depthchart": "Starter: QB-1",
    "team": "Indianapolis Colts",
    "projected": 16.5,
    "opponent": "Miami Dolphins",
    "home_away": "",
    "opp_rank": 20,
    "team_rank": 23,
    "avg_fp2": 16.25,
    "opp_rank_allowed_fp2": 27,
    "opp_avg_allowed_fp2": 22.11,
    "fanduelSalary": "$7600",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Knee - MCL",
    "tmColorLite": "#014683",
    "tmColorDark": "#002C5F",
    "tmColorLite_rgba": "rgba(1, 70, 131, 0.2)",
    "tmColorDark_rgba": "rgba(0, 44, 95, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png",
    "headlineNews": "Game-time call for Week 10",
    "report": "Brissett (knee) will be a game-time decision for Sunday's game against the Dolphins, Kevin Bowen of 1070 The Fan Indianapolis reports.",
    "analysis": "Brissett was limited in practice all three days this week, which is encouraging, but George Bremer of The Anderson Herald Bulletin relays that coach Frank Reich acknowledged Friday with regard to the QB's Week 10 status that \"we've got to make the right decision, for him and the team.\" If the Colts choose to play it safe with Brissett this weekend, Brian Hoyer would be in line to start at QB in Sunday's 4:05 p.m. ET contest.",
    "timestamp": "2019-11-08 10:51 AM",
    "week01": 16.5,
    "week02": 17.34,
    "week03": 20.8,
    "week04": 23.5,
    "week05": 11.94,
    "week06": "BYE",
    "week07": 27.64,
    "week08": 9.48,
    "week09": 2.76,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [16.5, 17.34, 20.8, 23.5, 11.94, 'BYE', 27.64, 9.48, 2.76]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.1, 13.1, 21.8, 15.1, 12.6, 'BYE', 16.8, 11.5, 14.9, 16.5]
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
    "opponent": "Minnesota Vikings",
    "home_away": "",
    "opp_rank": 8,
    "team_rank": 4,
    "avg_fp2": 22.83,
    "opp_rank_allowed_fp2": 10,
    "opp_avg_allowed_fp2": 15.92,
    "fanduelSalary": "$8300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#7F9695",
    "tmColorDark": "#041E42",
    "tmColorLite_rgba": "rgba(127, 150, 149, 0.2)",
    "tmColorDark_rgba": "rgba(4, 30, 66, 0.2)",
    "tmTextLite": "#7F9695",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
    "headlineNews": "Tosses three touchdowns in win",
    "report": "Prescott completed 22 of 35 passes for 257 yards, three touchdowns and an interception in Monday night's 37-18 win over the Giants. He also rushed three times for 12 yards.",
    "analysis": "Prescott got off to a poor start, throwing a pick on his very first pass, but would rally to put together an otherwise strong showing. His 42-yard touchdown to Blake Jarwin got the Cowboys going before halftime, and then his top two wideouts made similarly special plays in the second half. Michael Gallup acrobatically leapt into the end zone on a 15-yard reception to start the fourth quarter, before Amari Cooper raced 45 yards untouched to effectively close the game out on the next drive. Those scores gave Prescott his third outing with at least three touchdown tosses this season, putting him in a good place ahead of Week 10's visit from the Vikings.",
    "timestamp": "2019-11-04 09:16 PM",
    "week01": 33.4,
    "week02": 28.66,
    "week03": 23.54,
    "week04": 8.62,
    "week05": 26.22,
    "week06": 18.18,
    "week07": 21.56,
    "week08": "BYE",
    "week09": 22.48,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [33.4, 28.66, 23.54, 8.62, 26.22, 18.18, 21.56, 'BYE', 22.48]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.3, 17.9, 24.1, 18.8, 17.5, 15.3, 19.1, 'BYE', 16.9, 15.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/12483.png",
    "name": "Matthew Stafford",
    "depthchart": "Starter: QB-1",
    "team": "Detroit Lions",
    "projected": 15.1,
    "opponent": "Chicago Bears",
    "home_away": "at ",
    "opp_rank": 14,
    "team_rank": 3,
    "avg_fp2": 21.45,
    "opp_rank_allowed_fp2": 7,
    "opp_avg_allowed_fp2": 14.56,
    "fanduelSalary": "$7900",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Back",
    "tmColorLite": "#0076B6",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(0, 118, 182, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#0076B6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/det.png",
    "headlineNews": "Week 10 status in question",
    "report": "Stafford (hip/back) is listed as questionable for Sunday's game at Chicago.",
    "analysis": "Stafford is tending to injuries unrelated to the one he played through earlier this season and at times during the 2018 campaign. He was limited by the back and hip concerns in practice all week, but there doesn't appear to be much worry about his availability this weekend. Look for the Lions to solidify Stafford's status approximately 90 minutes before Sunday's 1:00 p.m. ET kickoff.",
    "timestamp": "2019-11-08 01:08 PM",
    "week01": 27.6,
    "week02": 17.1,
    "week03": 12.14,
    "week04": 23.44,
    "week05": "BYE",
    "week06": 11.5,
    "week07": 29.56,
    "week08": 24.38,
    "week09": 25.84,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [27.6, 17.1, 12.14, 23.44, 'BYE', 11.5, 29.56, 24.38, 25.84]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.8, 20.8, 19.6, 17.5, 'BYE', 17.6, 11.0, 21.9, 18.9, 15.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3042876.png",
    "name": "Ryan Finley",
    "depthchart": "Starter: QB-1",
    "team": "Cincinnati Bengals",
    "projected": 14.8,
    "opponent": "Baltimore Ravens",
    "home_away": "",
    "opp_rank": 26,
    "team_rank": 12,
    "avg_fp2": 13.0,
    "opp_rank_allowed_fp2": 9,
    "opp_avg_allowed_fp2": 15.84,
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
    "headlineNews": "Officially named starting QB",
    "report": "Finley was named the Bengals' starting quarterback Tuesday, Geoff Hobson of the team's official site reports.",
    "analysis": "With the move now official, Finley is taking over for long-time Bengal Andy Dalton. Finley will inherit a unit rife with injuries along the offensive line and no clear timetable for A.J. Green's (ankle) season debut. The Bengals currently are on bye, so Finley's first chance to direct the offense will be Sunday, Nov. 10 against the Ravens.",
    "timestamp": "2019-10-29 11:35 AM",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": "DNP",
    "week08": "DNP",
    "week09": "BYE",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 14.8]
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
    "opponent": "Pittsburgh Steelers",
    "home_away": "at ",
    "opp_rank": 10,
    "team_rank": 4,
    "avg_fp2": 17.17,
    "opp_rank_allowed_fp2": 12,
    "opp_avg_allowed_fp2": 16.18,
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
    "headlineNews": "Beats down Cincy",
    "report": "Goff completed 17 of 31 passes for 372 yards and two touchdowns during Sunday's 24-10 win over the Bengals.",
    "analysis": "Goff lost one of his favorite targets -- Brandin Cooks (concussion) -- early, but that didn't stop him from slicing up the Bengals with a big second quarter. First, dropping a 31-yard bucket-throw to Josh Reynolds for a touchdown and then just slinging it outside to Cooper Kupp off a flea flicker and letting his receiver do the rest for a 65-yard score. Goff isn't quite back to his 2018-self, and fumbles remain a problem, but he's played a cleaner brand of football over the past two weeks with five total touchdowns and no picks. That's been against two of the worst teams in the league, however, and he'll face a stiffer test after the Rams' bye against an improving Steelers defense.",
    "timestamp": "2019-10-27 03:19 PM",
    "week01": 10.44,
    "week02": 19.12,
    "week03": 16.16,
    "week04": 23.68,
    "week05": 18.9,
    "week06": 1.12,
    "week07": 25.02,
    "week08": 22.88,
    "week09": "BYE",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.44, 19.12, 16.16, 23.68, 18.9, 1.12, 25.02, 22.88, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.5, 21.5, 10.6, 17.6, 20.5, 10.4, 21.8, 21.2, 'BYE', 14.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3115293.png",
    "name": "Kyle Allen",
    "depthchart": "Starter: QB-1",
    "team": "Carolina Panthers",
    "projected": 14.4,
    "opponent": "Green Bay Packers",
    "home_away": "at ",
    "opp_rank": 21,
    "team_rank": 25,
    "avg_fp2": 12.64,
    "opp_rank_allowed_fp2": 8,
    "opp_avg_allowed_fp2": 15.16,
    "fanduelSalary": "$7000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0085CA",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 133, 202, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#0085CA",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/car.png",
    "headlineNews": "Likely starter moving forward",
    "report": "Allen is expected to serve as the Panthers' starting quarterback for at least the remainder of the regular season after the team placed Cam Newton (foot) on injured reserve Tuesday.",
    "analysis": "Allen has acquitted himself well in his first six starts this season, completing 60.7 percent of his passes for 6.8 yards per attempt to go with a 9:4 TD:INT. With Newton not progressing from his Lisfranc injury as quickly as hoped, the 5-3 Panthers will cast their lot with Allen as the team looks to stay in the thick of the playoff race. Newton is technically eligible for reinstatement from IR during the postseason, but if Allen continues to play well and guides the team to the playoffs, coach Ron Rivera would likely have a tough time justifying a quarterback change.",
    "timestamp": "2019-11-05 10:56 AM",
    "week01": "DNP",
    "week02": "DNP",
    "week03": 24.34,
    "week04": 3.28,
    "week05": 11.64,
    "week06": 17.38,
    "week07": "BYE",
    "week08": 3.32,
    "week09": 15.88,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 24.34, 3.28, 11.64, 17.38, 'BYE', 3.32, 15.88]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 23.2, 14.9, 14.1, 17.7, 'BYE', 6.8, 14.7, 14.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16757.png",
    "name": "Derek Carr",
    "depthchart": "Starter: QB-1",
    "team": "Oakland Raiders",
    "projected": 14.3,
    "opponent": "Los Angeles Chargers",
    "home_away": "",
    "opp_rank": 5,
    "team_rank": 15,
    "avg_fp2": 15.31,
    "opp_rank_allowed_fp2": 6,
    "opp_avg_allowed_fp2": 14.33,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.56, 11.72, 16.68, 13.46, 7.96, 'BYE', 16.72, 23.4, 17.96]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.8, 12.6, 6.7, 17.9, 11.8, 'BYE', 12.0, 11.4, 21.1, 14.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/8664.png",
    "name": "Ryan Fitzpatrick",
    "depthchart": "Starter: QB-1",
    "team": "Miami Dolphins",
    "projected": 14.0,
    "opponent": "Indianapolis Colts",
    "home_away": "at ",
    "opp_rank": 15,
    "team_rank": 29,
    "avg_fp2": 11.7,
    "opp_rank_allowed_fp2": 13,
    "opp_avg_allowed_fp2": 16.28,
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
    "headlineNews": "Three-TD quarter produces first W",
    "report": "Fitzpatrick completed 24 of 36 passes for 288 yards and three touchdowns in Sunday's 26-18 win over the Jets. He added two yards on five rushing attempts.",
    "analysis": "Fitzpatrick completed perhaps the easiest touchdown pass of his career from 12 yards out to a wide open Preston Williams in the second quarter. He added two more passing scores before halftime, finding DeVante Parker from 17 yards out and Williams again from five. The veteran quarterback was also brought down in the end zone for a safety in the final minute of the first half, but his play in the second quarter up until that point was enough to earn his team its first win of 2019. Not only was Fitzpatrick turnover-free, but his 288 passing yards marked a season high. This will likely go down as the high point of Fitzpatrick's 2019 campaign.",
    "timestamp": "2019-11-03 01:48 PM",
    "week01": 11.2,
    "week02": 1.16,
    "week03": 1.16,
    "week04": "DNP",
    "week05": "BYE",
    "week06": 9.78,
    "week07": 21.58,
    "week08": 13.3,
    "week09": 23.72,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.2, 1.16, 1.16, 'DNP', 'BYE', 9.78, 21.58, 13.3, 23.72]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.9, 12.3, 3.7, 'DNP', 'BYE', 4.5, 12.7, 12.3, 15.2, 14.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/11237.png",
    "name": "Matt Ryan",
    "depthchart": "Starter: QB-1",
    "team": "Atlanta Falcons",
    "projected": 12.3,
    "opponent": "New Orleans Saints",
    "home_away": "at ",
    "opp_rank": 12,
    "team_rank": 1,
    "avg_fp2": 21.6,
    "opp_rank_allowed_fp2": 20,
    "opp_avg_allowed_fp2": 19.5,
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
    "headlineNews": "Ready for Week 10 start",
    "report": "Ryan (ankle) has been cleared to return for Sunday's game in New Orleans, Vaughn McClure of ESPN.com reports.",
    "analysis": "Ryan came out of a Week 9 bye as a limited practice participant, but coach Dan Quinn said Friday that the quarterback has regained his mobility. Ryan will get the start again a surging New Orleans defense, though it's at least a good matchup in terms of volume, with the Falcons playing as heavy underdogs in a dome.",
    "timestamp": "2019-11-08 09:43 AM",
    "week01": 20.56,
    "week02": 22.1,
    "week03": 23.46,
    "week04": 15.68,
    "week05": 34.9,
    "week06": 30.94,
    "week07": 3.56,
    "week08": "DNP",
    "week09": "BYE",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [20.56, 22.1, 23.46, 15.68, 34.9, 30.94, 3.56, 'DNP', 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.2, 22.1, 14.7, 20.9, 16.0, 17.7, 18.0, 'DNP', 'BYE', 12.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3052587.png",
    "name": "Baker Mayfield",
    "depthchart": "Starter: QB-1",
    "team": "Cleveland Browns",
    "projected": 11.2,
    "opponent": "Buffalo Bills",
    "home_away": "",
    "opp_rank": 3,
    "team_rank": 17,
    "avg_fp2": 13.75,
    "opp_rank_allowed_fp2": 4,
    "opp_avg_allowed_fp2": 12.46,
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
    "headlineNews": "Falls short in Denver",
    "report": "Mayfield completed 27 of 42 passes for 273 yards and a touchdown in Sunday's 24-19 loss to the Broncos.",
    "analysis": "He avoided throwing an interception for the first time all season and posted his best yardage total since Week 4, but otherwise, it was another lackluster performance from Mayfield. The second-year QB will face a tough Bills secondary next week, making it unlikely he'll snap out of his sophomore slump any time soon.",
    "timestamp": "2019-11-03 06:34 PM",
    "week01": 12.4,
    "week02": 16.0,
    "week03": 10.7,
    "week04": 16.78,
    "week05": 0.0,
    "week06": 24.46,
    "week07": "BYE",
    "week08": 12.56,
    "week09": 17.12,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.4, 16.0, 10.7, 16.78, 0.0, 24.46, 'BYE', 12.56, 17.12]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [20.1, 12.7, 18.3, 16.1, 12.2, 15.6, 'BYE', 12.9, 17.5, 11.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3039707.png",
    "name": "Mitchell Trubisky",
    "depthchart": "Starter: QB-1",
    "team": "Chicago Bears",
    "projected": 10.9,
    "opponent": "Detroit Lions",
    "home_away": "",
    "opp_rank": 30,
    "team_rank": 30,
    "avg_fp2": 10.04,
    "opp_rank_allowed_fp2": 26,
    "opp_avg_allowed_fp2": 21.36,
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
    "headlineNews": "Retains starting role",
    "report": "Trubisky will continue as the Bears' starting quarterback, Jeff Dickerson of ESPN.com reports.",
    "analysis": "Coach Matt Nagy noted that many people are involved in the offensive struggles, not just Trubisky. However, after completing 67 percent of his passes with a 24:12 TD:INT in 2018, he's fallen to 63 percent and 5:3 in seven games this season, and his performance has been one of the main problems with the Bears' offensive performance. That said, with a 3-5 record and a playoff berth extremely unlikely, it may not make sense to make a move to Chase Daniel unless the organization was convinced they need to go in a different direction next year at quarterback. Trubisky's status likely will be a weekly topic of discussion for the rest of the season.",
    "timestamp": "2019-11-04 11:09 AM",
    "week01": 9.22,
    "week02": 5.6,
    "week03": 20.44,
    "week04": -1.64,
    "week05": "DNP",
    "week06": "BYE",
    "week07": 22.04,
    "week08": 8.12,
    "week09": 6.5,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.22, 5.6, 20.44, -1.64, 'DNP', 'BYE', 22.04, 8.12, 6.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.8, 11.3, 13.8, 14.3, 'DNP', 'BYE', 9.1, 15.4, 13.4, 10.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116407.png",
    "name": "Mason Rudolph",
    "depthchart": "Starter: QB-1",
    "team": "Pittsburgh Steelers",
    "projected": 9.7,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank": 18,
    "team_rank": 27,
    "avg_fp2": 13.65,
    "opp_rank_allowed_fp2": 12,
    "opp_avg_allowed_fp2": 16.04,
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
    "headlineNews": "Manages game in win over Colts",
    "report": "Rudolph completed 26 of 35 pass attempts for 191 yards, one touchdown and one interception during Sunday's 26-24 win over the Colts.",
    "analysis": "Rudolph was deployed quite conservatively again in this one, averaging 5.5 yards per attempt while directing 50 percent of his completions to running back Jaylen Samuels. James Washington was the only Pittsburgh wideout to top 16 receiving yards, while Juju Smith-Schuster and Diontae Johnson combined for just 19 yards on four catches. It's become clear Rudolph still lacks the consistency and confidence necessary to be an effective starting quarterback, but he's helped the team back to the .500 mark for the season. He should play the role of game manager -- albeit in a tougher matchup -- next Sunday at home against the Rams.",
    "timestamp": "2019-11-03 02:56 PM",
    "week01": "DNP",
    "week02": 12.18,
    "week03": 15.46,
    "week04": 16.86,
    "week05": 9.24,
    "week06": "DNP",
    "week07": "BYE",
    "week08": 17.04,
    "week09": 11.14,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 12.18, 15.46, 16.86, 9.24, 'DNP', 'BYE', 17.04, 11.14]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 6.9, 12.8, 21.5, 18.9, 'DNP', 'BYE', 15.8, 16.8, 9.7]
                    }
                    
                    ]
               }
            }];




$scope.positionRB = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3117251.png",
    "name": "Christian McCaffrey",
    "depthchart": "Starter: RB-1",
    "team": "Carolina Panthers",
    "projected": 23.7,
    "opponent": "Green Bay Packers",
    "home_away": "at ",
    "opp_rank": 24,
    "team_rank": 7,
    "avg_fp2": 27.93,
    "opp_rank_allowed_fp2": 28,
    "opp_avg_allowed_fp2": 24.97,
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
    "headlineNews": "Good to go",
    "report": "McCaffrey (knee) doesn't have a designation on the Panthers' final injury report for Sunday's game in Green Bay.",
    "analysis": "McCaffrey closed out the week with back-to-back limited practices, noting afterward that he's feeling great and will be ready for Sunday's game. With the Panthers clawing for a playoff spot, the star running back should see usual workload in game No. 9 of what's shaping up as a historically productive fantasy season. With 246.4 PPR points, McCaffrey is on pace to top LaDainian Tomlinson's record of 481.1 from 2006.",
    "timestamp": "2019-11-08 10:29 AM",
    "week01": 37.9,
    "week02": 6.3,
    "week03": 26.3,
    "week04": 28.9,
    "week05": 44.7,
    "week06": 19.7,
    "week07": "BYE",
    "week08": 25.5,
    "week09": 34.1,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [37.9, 6.3, 26.3, 28.9, 44.7, 19.7, 'BYE', 25.5, 34.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [18.8, 20.0, 16.6, 17.6, 18.0, 14.2, 'BYE', 17.2, 13.2, 23.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4047365.png",
    "name": "Josh Jacobs",
    "depthchart": "Starter: RB-1",
    "team": "Oakland Raiders",
    "projected": 20.1,
    "opponent": "Los Angeles Chargers",
    "home_away": "",
    "opp_rank": 20,
    "team_rank": 6,
    "avg_fp2": 15.71,
    "opp_rank_allowed_fp2": 25,
    "opp_avg_allowed_fp2": 23.09,
    "fanduelSalary": "$7700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A5ACAF",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(165, 172, 175, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A5ACAF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/oak.png",
    "headlineNews": "Over 100 total yards in win",
    "report": "Jacobs rushed 16 times for 71 yards and a touchdown and secured three of five targets for 30 yards in the Raiders' 26-24 win over the Chargers on Thursday.",
    "analysis": "Jacobs had just logged a career-high 28 carries against the Lions four days prior and is nearing the \"rookie wall\" portion of his first season, so it would have hardly been surprising to see him scuffle for yardage Thursday. However, Jacobs was as effective as usual, and he clinched the narrow victory via an 18-yard touchdown scamper with 1:02 remaining. Jacobs has now has three rushing scores over the last two games, and his 30 receiving yards Thursday were also a career high. He'll look to continue his strong rookie campaign against the vulnerable Bengals defense in Week 11 a week from Sunday.",
    "timestamp": "2019-11-07 09:12 PM",
    "week01": 23.8,
    "week02": 9.9,
    "week03": 4.4,
    "week04": 11.8,
    "week05": 27.8,
    "week06": "BYE",
    "week07": 14.9,
    "week08": 9.1,
    "week09": 24.0,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [23.8, 9.9, 4.4, 11.8, 27.8, 'BYE', 14.9, 9.1, 24.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.0, 15.5, 11.9, 12.0, 10.1, 'BYE', 10.2, 8.9, 16.6, 20.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3054850.png",
    "name": "Alvin Kamara",
    "depthchart": "Starter: RB-1",
    "team": "New Orleans Saints",
    "projected": 18.8,
    "opponent": "Atlanta Falcons",
    "home_away": "",
    "opp_rank": 21,
    "team_rank": 15,
    "avg_fp2": 15.69,
    "opp_rank_allowed_fp2": 17,
    "opp_avg_allowed_fp2": 21.2,
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
    "headlineNews": "Back to full health",
    "report": "Kamara (knee/ankle) practiced fully Thursday.",
    "analysis": "Shortly after Kamara told Amie Just of The New Orleans Times-Picayune that he's \"ready to play\" Sunday against the Falcons, the Saints revealed he upgraded from limited participation Wednesday to all activity one day later. With his knee and ankle injuries in the rearview mirror, Kamara can turn his focus to an Atlanta defense that has allowed 128.9 yards from scrimmage per game and nine touchdowns to running backs in eight contests this season.",
    "timestamp": "2019-11-07 02:17 PM",
    "week01": 20.6,
    "week02": 6.5,
    "week03": 32.6,
    "week04": 10.4,
    "week05": 13.92,
    "week06": 10.1,
    "week07": "DNP",
    "week08": "DNP",
    "week09": "BYE",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [20.6, 6.5, 32.6, 10.4, 13.92, 10.1, 'DNP', 'DNP', 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [21.0, 20.6, 12.9, 13.3, 17.0, 12.2, 'DNP', 'DNP', 'BYE', 18.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3929630.png",
    "name": "Saquon Barkley",
    "depthchart": "Starter: RB-1",
    "team": "New York Giants",
    "projected": 18.7,
    "opponent": "New York Jets",
    "home_away": "at ",
    "opp_rank": 6,
    "team_rank": 17,
    "avg_fp2": 15.82,
    "opp_rank_allowed_fp2": 20,
    "opp_avg_allowed_fp2": 21.4,
    "fanduelSalary": "$8600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#0B2265",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(11, 34, 101, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png",
    "headlineNews": "Held to one big play",
    "report": "Barkley rushed 14 times for 28 yards and caught six of eight targets for 67 yards in Monday night's 37-18 loss to the Cowboys.",
    "analysis": "Barkley was bottled up on the ground, where his longest rush of the night went for only eight yards. Nonetheless, he was able to explode for a 65-yard reception during the second half, somewhat salvaging a down performance. In fact, other than the Week 3 game in which he hurt his ankle and was forced to exit early, Monday marked Barkley's first contest this season with neither 100 scrimmage yards nor a touchdown. The superstar tailback will look to bounce back in Week 10, but his matchup against a Jets defense currently leading the league with only 3.1 yards allowed per rush may complicate matters.",
    "timestamp": "2019-11-04 08:43 PM",
    "week01": 15.9,
    "week02": 21.0,
    "week03": 5.7,
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": 15.5,
    "week08": 24.3,
    "week09": 12.5,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [15.9, 21.0, 5.7, 'DNP', 'DNP', 'DNP', 15.5, 24.3, 12.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [20.5, 18.0, 12.4, 'DNP', 'DNP', 'DNP', 13.5, 17.3, 16.3, 18.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3919596.png",
    "name": "Chris Carson",
    "depthchart": "Starter: RB-1",
    "team": "Seattle Seahawks",
    "projected": 18.4,
    "opponent": "San Francisco 49ers",
    "home_away": "at ",
    "opp_rank": 14,
    "team_rank": 8,
    "avg_fp2": 14.26,
    "opp_rank_allowed_fp2": 4,
    "opp_avg_allowed_fp2": 14.12,
    "fanduelSalary": "$0",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#69BE28",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(105, 190, 40, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#69BE28",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
    "headlineNews": "Compiles 133 yards",
    "report": "Carson rushed 16 times for 105 yards and caught both targets for 28 yards in Sunday's 40-34 overtime win against the Buccaneers.",
    "analysis": "The shootout game script didn't afford Carson a sixth-straight outing with 20-plus carries, but he made use of the limited reps. Carson was the first player to rush for over 100 yards against the Bucs this season, and he did it by averaging 6.6 YPC. His day was highlighted when he ripped off a 59-yard run, but he fumbled the ball and luckily it went out of bounds. Carson lost a fumble later in the contest as well, but the Seahawks never lost faith in the lead back by deploying Rashaad Penny for just four carries. Carson's fumbles are definitely concerning going forward, but his positive contributions in this win, fortunately, outweigh the whiffs. He'll look to keep it up in Week 10 against the 49ers.",
    "timestamp": "2019-11-03 04:57 PM",
    "week01": 21.1,
    "week02": 8.2,
    "week03": 3.6,
    "week04": 16.5,
    "week05": 18.8,
    "week06": 23.9,
    "week07": 8.9,
    "week08": 15.0,
    "week09": 12.3,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [21.1, 8.2, 3.6, 16.5, 18.8, 23.9, 8.9, 15.0, 12.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [17.2, 16.0, 17.3, 8.9, 11.2, 14.7, 10.4, 11.5, 11.9, 18.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3128720.png",
    "name": "Nick Chubb",
    "depthchart": "Starter: RB-1",
    "team": "Cleveland Browns",
    "projected": 17.9,
    "opponent": "Buffalo Bills",
    "home_away": "",
    "opp_rank": 19,
    "team_rank": 13,
    "avg_fp2": 17.36,
    "opp_rank_allowed_fp2": 23,
    "opp_avg_allowed_fp2": 22.55,
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
    "headlineNews": "So-so numbers in loss",
    "report": "Chubb carried the ball 20 times for 65 yards and caught four of five targets for 26 yards in Sunday's 24-19 loss to the Broncos.",
    "analysis": "While he's amassed at least 85 scrimmage yards in every game this season, Chubb had difficulty making an impact in this one -- his longest gain went for only 11 yards, and his 3.3 YPC was his worst performance of the year. The second-year RB will look to ramp things up at home next week, facing a Bills defense that just let Adrian Peterson top the century mark against it.",
    "timestamp": "2019-11-03 06:31 PM",
    "week01": 10.0,
    "week02": 17.8,
    "week03": 15.1,
    "week04": 37.8,
    "week05": 10.4,
    "week06": 26.4,
    "week07": "BYE",
    "week08": 10.3,
    "week09": 11.1,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.0, 17.8, 15.1, 37.8, 10.4, 26.4, 'BYE', 10.3, 11.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.6, 20.2, 11.2, 16.0, 11.8, 13.6, 'BYE', 11.2, 15.6, 17.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15825.png",
    "name": "Le'Veon Bell",
    "depthchart": "Starter: RB-1",
    "team": "New York Jets",
    "projected": 17.2,
    "opponent": "New York Giants",
    "home_away": "",
    "opp_rank": 25,
    "team_rank": 30,
    "avg_fp2": 12.21,
    "opp_rank_allowed_fp2": 21,
    "opp_avg_allowed_fp2": 21.68,
    "fanduelSalary": "$6900",
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
    "report": "Bell (knee/ankle) is listed as questionable for Sunday's game against the Giants after practicing in a limited fashion both Thursday and Friday, Rich Cimini of ESPN.com reports.",
    "analysis": "Bell kicked off the practice week with an absence Wednesday, but after logging back-to-back limited sessions, Cimini notes that the running back is expected to be a go for Sunday's 1:00 p.m. ET kickoff. If, however, Bell is limited at all this weekend, Bilal Powell and Ty Montgomery would be next up for touches out of the Jets' backfield, but at this stage it looks like Bell is going to tough it out Sunday.",
    "timestamp": "2019-11-08 01:27 PM",
    "week01": 20.2,
    "week02": 15.9,
    "week03": 8.3,
    "week04": "BYE",
    "week05": 12.3,
    "week06": 11.8,
    "week07": 8.1,
    "week08": 5.0,
    "week09": 16.1,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [20.2, 15.9, 8.3, 'BYE', 12.3, 11.8, 8.1, 5.0, 16.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [20.5, 22.8, 12.7, 'BYE', 16.6, 21.0, 15.9, 13.7, 17.7, 17.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3051392.png",
    "name": "Ezekiel Elliott",
    "depthchart": "Starter: RB-1",
    "team": "Dallas Cowboys",
    "projected": 16.4,
    "opponent": "Minnesota Vikings",
    "home_away": "",
    "opp_rank": 9,
    "team_rank": 4,
    "avg_fp2": 17.2,
    "opp_rank_allowed_fp2": 5,
    "opp_avg_allowed_fp2": 17.07,
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
    "headlineNews": "Tops century mark in win",
    "report": "Elliott rushed 23 times for 139 yards, but was not targeted in Monday night's 37-18 win over the Giants.",
    "analysis": "Elliott once again was a force on the ground, hitting the 100-yard mark for a third consecutive game. In fact, his output Monday set a new season high. Despite that production, Elliott didn't find the end zone for just the second time this season, and he wasn't targeted in the passing game for only the second time in his four-year career. Those factors prevented him from posting an even better performance, but Elliott still takes considerable momentum into Week 10's visit from the Vikings.",
    "timestamp": "2019-11-04 08:49 PM",
    "week01": 12.8,
    "week02": 19.0,
    "week03": 14.9,
    "week04": 13.5,
    "week05": 16.1,
    "week06": 23.7,
    "week07": 23.7,
    "week08": "BYE",
    "week09": 13.9,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.8, 19.0, 14.9, 13.5, 16.1, 23.7, 23.7, 'BYE', 13.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [19.3, 16.8, 18.6, 11.0, 18.6, 15.2, 15.9, 'BYE', 18.0, 16.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3042519.png",
    "name": "Aaron Jones",
    "depthchart": "Starter: RB-1",
    "team": "Green Bay Packers",
    "projected": 15.7,
    "opponent": "Carolina Panthers",
    "home_away": "",
    "opp_rank": 26,
    "team_rank": 22,
    "avg_fp2": 18.5,
    "opp_rank_allowed_fp2": 27,
    "opp_avg_allowed_fp2": 24.57,
    "fanduelSalary": "$7600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#d7a017",
    "tmColorDark": "#203731",
    "tmColorLite_rgba": "rgba(215, 160, 23, 0.2)",
    "tmColorDark_rgba": "rgba(32, 55, 49, 0.2)",
    "tmTextLite": "#d7a017",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png",
    "headlineNews": "Held in check by Chargers",
    "report": "Jones carried the ball eight times for 30 yards and caught one of four targets for minus-1 yard in Sunday's 26-11 loss to the Chargers.",
    "analysis": "The Packers' offense got shut out in the first half and didn't have much more success after halftime, and as a result, Jones wound up with arguably his worst performance of the season. He should find more running room in Week 10 against a Panthers defense that just surrendered two TDs, one rushing and one receiving, to Derrick Henry.",
    "timestamp": "2019-11-03 06:05 PM",
    "week01": 4.4,
    "week02": 23.0,
    "week03": 14.8,
    "week04": 14.8,
    "week05": 45.7,
    "week06": 6.0,
    "week07": 16.3,
    "week08": 38.1,
    "week09": 3.4,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.4, 23.0, 14.8, 14.8, 45.7, 6.0, 16.3, 38.1, 3.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.7, 11.5, 11.4, 9.3, 13.3, 19.0, 12.9, 14.0, 15.6, 15.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116385.png",
    "name": "Joe Mixon",
    "depthchart": "Starter: RB-1",
    "team": "Cincinnati Bengals",
    "projected": 15.1,
    "opponent": "Baltimore Ravens",
    "home_away": "",
    "opp_rank": 2,
    "team_rank": 32,
    "avg_fp2": 8.82,
    "opp_rank_allowed_fp2": 11,
    "opp_avg_allowed_fp2": 19.65,
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
    "headlineNews": "Scores Cincy's only touchdown",
    "report": "Mixon ran for 66 yards on 17 attempts and added 11 yards and a touchdown on four catches during Sunday' 24-10 loss to the Rams.",
    "analysis": "Mixon tied up the game midway through the second quarter, slipping out of the backfield on the rollout and connecting with Andy Dalton for a one-yard touchdown. It was Mixon's second receiving touchdown in as many weeks and third overall despite not recording a rushing touchdown this season. Mixon has been the bell-cow back for Cincinnati, including Sunday's season-high 21 touches. However, in averaging just 3.2 yards per carry and 5.8 yards per catch, Mixon is the equivalent to a \"volume scorer\" in the NBA. After the bye, he'll take on a Ravens defense that held him to 39 total yards in Week 6.",
    "timestamp": "2019-10-27 04:27 PM",
    "week01": 2.7,
    "week02": 4.2,
    "week03": 16.5,
    "week04": 8.3,
    "week05": 11.4,
    "week06": 4.9,
    "week07": 6.9,
    "week08": 15.7,
    "week09": "BYE",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.7, 4.2, 16.5, 8.3, 11.4, 4.9, 6.9, 15.7, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.0, 15.0, 9.7, 13.1, 13.3, 9.4, 12.4, 11.9, 'BYE', 15.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2576434.png",
    "name": "Melvin Gordon",
    "depthchart": "Starter: RB-1",
    "team": "Los Angeles Chargers",
    "projected": 14.6,
    "opponent": "Oakland Raiders",
    "home_away": "at ",
    "opp_rank": 7,
    "team_rank": 28,
    "avg_fp2": 10.96,
    "opp_rank_allowed_fp2": 15,
    "opp_avg_allowed_fp2": 20.54,
    "fanduelSalary": "$6600",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 5.8, 6.3, 7.9, 10.4, 24.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 11.4, 10.9, 9.8, 11.4, 9.3, 14.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13981.png",
    "name": "Mark Ingram",
    "depthchart": "Starter: RB-1",
    "team": "Baltimore Ravens",
    "projected": 14.6,
    "opponent": "Cincinnati Bengals",
    "home_away": "at ",
    "opp_rank": 32,
    "team_rank": 1,
    "avg_fp2": 14.75,
    "opp_rank_allowed_fp2": 32,
    "opp_avg_allowed_fp2": 28.09,
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
    "headlineNews": "Racks up 144 yards",
    "report": "Ingram rushed 15 times for 115 yards and added 29 receiving yards on two receptions (three targets) in Sunday's 37-20 win over the Patriots.",
    "analysis": "Ingram was able to break the century mark on the ground for the first time since Week 3 against the Chiefs, but this time it came against the Patriots' stout 3-4 defense that ranked fourth against the run (85.3 rushing yards allowed per game) heading into this primetime showdown. The 29-year-old wasn't being met by defenders until well after the line of scrimmage on most of his runs. The threat of Lamar Jackson's scrambles to the outside spread New England's front seven out more than it has been against other rushing attacks. This strong performance was a welcomed sight for Ingram's fantasy owners, as the power back had really cooled off after leading all fantasy backs in scoring through the first three weeks of the season. While Sunday's results surpassed pregame expectations, Ingram should carry lofty projections heading into a Week 9 contest against the Bengals' NFL-worst rushing defense.",
    "timestamp": "2019-11-03 09:28 PM",
    "week01": 22.7,
    "week02": 8.7,
    "week03": 33.5,
    "week04": 7.6,
    "week05": 11.9,
    "week06": 14.4,
    "week07": 5.8,
    "week08": "BYE",
    "week09": 13.4,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [22.7, 8.7, 33.5, 7.6, 11.9, 14.4, 5.8, 'BYE', 13.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.6, 10.6, 7.4, 10.7, 11.7, 17.1, 12.0, 'BYE', 10.5, 14.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2979477.png",
    "name": "Tevin Coleman",
    "depthchart": "Starter: RB-1",
    "team": "San Francisco 49ers",
    "projected": 14.4,
    "opponent": "Seattle Seahawks",
    "home_away": "",
    "opp_rank": 13,
    "team_rank": 2,
    "avg_fp2": 13.98,
    "opp_rank_allowed_fp2": 10,
    "opp_avg_allowed_fp2": 19.64,
    "fanduelSalary": "$0",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "Reinforcements set to return",
    "report": "Coleman and co-starter Matt Breida may benefit from the potential returns of three key pieces of the 49ers' blocking unit in Monday's game against the Seahawks, Matt Maiocco of NBC Sports Bay Area reports.",
    "analysis": "After multi-game absences, left tackle Joe Staley (lower leg), fullback Kyle Juszczyk (knee) and right tackle Mike McGlinchey (knee) all returned to practice Tuesday and have a shot at returning for an important divisional matchup on Monday Night Football. McGlinchey is the most questionable of the trio, as Staley and Juice both stated that they feel \"100 percent.\" Coleman has racked up 332 rushing yards and five total touchdowns in five games without arguably his three best blockers, so any combination of those players returning will be significant boost for one half of San Francisco's league-leading running-back tandem. Expect Coleman and Breida to continue to split touches against a Seattle defense that has been adequate against the run this season, allowing 102.7 rushing yards per game.",
    "timestamp": "2019-11-06 05:49 AM",
    "week01": 6.6,
    "week02": "DNP",
    "week03": "DNP",
    "week04": "BYE",
    "week05": 15.7,
    "week06": 13.1,
    "week07": 7.1,
    "week08": 36.8,
    "week09": 4.6,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.6, 'DNP', 'DNP', 'BYE', 15.7, 13.1, 7.1, 36.8, 4.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.2, 'DNP', 'DNP', 'BYE', 3.0, 8.3, 8.8, 12.2, 15.8, 14.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4035538.png",
    "name": "David Montgomery",
    "depthchart": "Starter: RB-1",
    "team": "Chicago Bears",
    "projected": 14.3,
    "opponent": "Detroit Lions",
    "home_away": "",
    "opp_rank": 27,
    "team_rank": 27,
    "avg_fp2": 11.36,
    "opp_rank_allowed_fp2": 31,
    "opp_avg_allowed_fp2": 28.07,
    "fanduelSalary": "$6400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#c36835",
    "tmColorDark": "#0B162A",
    "tmColorLite_rgba": "rgba(195, 104, 53, 0.2)",
    "tmColorDark_rgba": "rgba(11, 22, 42, 0.2)",
    "tmTextLite": "#c36835",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png",
    "headlineNews": "Finds end zone twice",
    "report": "Montgomery rushed 14 times for 40 yards and two touchdowns and caught three passes for 36 yards in Chicago's 22-14 loss to the Eagles on Sunday.",
    "analysis": "Montgomery had just a single yard at the half, but once the Bears were trailing by double digits, the offense started to move the ball better, and he was able to punch in two of his three goal-line carries in to help get Chicago back into the game. He was mostly shut down on the majority of his touches, but a 17-yard run and a 30-yard reception accounted for almost half of his scrimmage yards. For the first time this season, he's put together back-to-back useful fantasy performances, and his recent usage makes him a player can now be considered a RB2.",
    "timestamp": "2019-11-03 02:03 PM",
    "week01": 5.0,
    "week02": 13.3,
    "week03": 9.6,
    "week04": 8.2,
    "week05": 10.1,
    "week06": "BYE",
    "week07": 0.9,
    "week08": 22.7,
    "week09": 21.1,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.0, 13.3, 9.6, 8.2, 10.1, 'BYE', 0.9, 22.7, 21.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.0, 2.4, 7.7, 10.0, 7.8, 'BYE', 9.7, 9.5, 12.5, 14.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16944.png",
    "name": "Devonta Freeman",
    "depthchart": "Starter: RB-1",
    "team": "Atlanta Falcons",
    "projected": 14.1,
    "opponent": "New Orleans Saints",
    "home_away": "at ",
    "opp_rank": 3,
    "team_rank": 29,
    "avg_fp2": 11.5,
    "opp_rank_allowed_fp2": 2,
    "opp_avg_allowed_fp2": 12.0,
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
    "headlineNews": "Discussed before deadline",
    "report": "Freeman was heavily discussed in trade talks between the Falcons and Lions before Tuesday's deadline, Ian Rapoport of NFL Network reports.",
    "analysis": "Freeman is in the second season of a five-year, $41.25 million extension, playing for a team that has no realistic chance to make the playoffs. He's on pace for a 70-544-6 receiving line, but he already has fumbled three times (losing two) and is averaging a career-worst 3.4 yards per carry. It isn't entirely clear that Freeman has a future in Atlanta beyond 2019, though the failure to complete a trade might be taken as a hint in that direction. Either way, he should retain his lead role in the backfield when the Falcons come back from their Week 9 bye for a nightmarish Week 10 matchup in New Orleans.",
    "timestamp": "2019-10-30 09:09 AM",
    "week01": 2.6,
    "week02": 7.9,
    "week03": 11.0,
    "week04": 14.0,
    "week05": 15.5,
    "week06": 25.3,
    "week07": 3.5,
    "week08": 12.2,
    "week09": "BYE",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.6, 7.9, 11.0, 14.0, 15.5, 25.3, 3.5, 12.2, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.7, 14.3, 12.7, 11.6, 13.4, 8.3, 11.4, 11.9, 'BYE', 14.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4040761.png",
    "name": "Devin Singletary",
    "depthchart": "Starter: RB-1",
    "team": "Buffalo Bills",
    "projected": 14.1,
    "opponent": "Cleveland Browns",
    "home_away": "at ",
    "opp_rank": 30,
    "team_rank": 11,
    "avg_fp2": 12.2,
    "opp_rank_allowed_fp2": 22,
    "opp_avg_allowed_fp2": 22.54,
    "fanduelSalary": "$6700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#005596",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 85, 150, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
    "headlineNews": "Stays hot in win over Washington",
    "report": "Singletary ran for 95 yards and a touchdown on 20 carries, while hauling in three of four targets for 45 receiving yards during Sunday's 24-9 win against the Redskins.",
    "analysis": "After amassing 127 rushing yards and a touchdown through Buffalo's first two games of the year, Singletary was beleaguered by a hamstring injury and deemed unavailable to play between Weeks 3 and 6. Since returning Week 7 against Miami, the rookie third-round draft choice has resumed his strong debut campaign, averaging an impressive 4.7 yards per carry over the past three weeks while adding seven receptions for 75 yards. What is most encouraging in regards to his fantasy outlook is the massive uptick in workload, as Singletary's 20 rush attempts Sunday nearly tripled his previous season high of seven carries. Upcoming next is a matchup against a Cleveland defense that entered Week 9 ranking as a bottom-10 unit with more than 110 rushing yards surrendered per game to opposing running backs.",
    "timestamp": "2019-11-03 03:30 PM",
    "week01": 12.3,
    "week02": 11.7,
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "BYE",
    "week07": 2.6,
    "week08": 12.9,
    "week09": 21.5,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.3, 11.7, 'DNP', 'DNP', 'DNP', 'BYE', 2.6, 12.9, 21.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.8, 11.0, 'DNP', 'DNP', 'DNP', 'BYE', 5.5, 5.6, 7.7, 14.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3068267.png",
    "name": "Austin Ekeler",
    "depthchart": "Backup: RB-2",
    "team": "Los Angeles Chargers",
    "projected": 13.9,
    "opponent": "Oakland Raiders",
    "home_away": "at ",
    "opp_rank": 7,
    "team_rank": 28,
    "avg_fp2": 17.4,
    "opp_rank_allowed_fp2": 15,
    "opp_avg_allowed_fp2": 20.54,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [36.4, 20.3, 11.6, 26.7, 14.8, 4.3, 22.0, 9.2, 11.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.4, 14.5, 18.1, 15.8, 21.3, 9.5, 9.7, 8.9, 8.1, 13.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3043078.png",
    "name": "Derrick Henry",
    "depthchart": "Starter: RB-1",
    "team": "Tennessee Titans",
    "projected": 13.3,
    "opponent": "Kansas City Chiefs",
    "home_away": "",
    "opp_rank": 29,
    "team_rank": 18,
    "avg_fp2": 14.69,
    "opp_rank_allowed_fp2": 30,
    "opp_avg_allowed_fp2": 26.69,
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
    "headlineNews": "Rare receiving score",
    "report": "Henry carried the ball 13 times for 63 yards and a touchdown in Week 9 against the Panthers. He also added three receptions for 36 yards and another touchdown through the air.",
    "analysis": "Henry drew his lowest number of carries for the season, but that didn't stop him from producing. He struggled to break free from the Panthers' run defense in the first half -- his longest rush went for three yards -- but he managed a bit more production on the ground after halftime with an eight-yard rushing score and another scamper for 12 yards. More notably, Henry turned in a rare contribution in the passing game, hauling in a 23-yard screen pass for another touchdown. Though Tennessee's offense is far from spectacular, Henry will continue to play a major role in any success they experience.",
    "timestamp": "2019-11-03 05:59 PM",
    "week01": 28.4,
    "week02": 16.3,
    "week03": 11.1,
    "week04": 11.3,
    "week05": 13.8,
    "week06": 3.8,
    "week07": 17.3,
    "week08": 6.8,
    "week09": 23.4,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [28.4, 16.3, 11.1, 11.3, 13.8, 3.8, 17.3, 6.8, 23.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.1, 18.7, 12.9, 11.5, 13.6, 8.3, 18.7, 9.1, 14.4, 13.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116721.png",
    "name": "Jaylen Samuels",
    "depthchart": "Starter: RB-1",
    "team": "Pittsburgh Steelers",
    "projected": 12.2,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank": 14,
    "team_rank": 26,
    "avg_fp2": 6.5,
    "opp_rank_allowed_fp2": 14,
    "opp_avg_allowed_fp2": 20.15,
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
    "headlineNews": "Set for another leading role",
    "report": "Samuels and Trey Edmunds (ribs) will be the Steelers' primary running backs with James Conner (shoulder) and Benny Snell (knee) sidelined Sunday against the Rams, Teresa Varley of the team's official site reports.",
    "analysis": "Conner and Snell were unable to practice with their respective injuries, while Edmunds didn't take the field until Friday due to a rib issue. If the breakdown of backfield reps looks the same this weekend as it did Week 9 against the Colts, Samuels will lead the way again after turning 21 touches into 83 yards from scrimmage. Meanwhile, Edmunds notched 12 carries for 73 yards in the same contest.",
    "timestamp": "2019-11-08 12:28 PM",
    "week01": 1.1,
    "week02": 3.6,
    "week03": 0.0,
    "week04": 19.54,
    "week05": 1.96,
    "week06": "DNP",
    "week07": "BYE",
    "week08": "DNP",
    "week09": 12.8,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.1, 3.6, 0.0, 19.54, 1.96, 'DNP', 'BYE', 'DNP', 12.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.1, 5.4, 3.8, 5.8, 13.2, 'DNP', 'BYE', 'DNP', 8.1, 12.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3139605.png",
    "name": "Marlon Mack",
    "depthchart": "Starter: RB-1",
    "team": "Indianapolis Colts",
    "projected": 11.9,
    "opponent": "Miami Dolphins",
    "home_away": "",
    "opp_rank": 31,
    "team_rank": 9,
    "avg_fp2": 12.53,
    "opp_rank_allowed_fp2": 29,
    "opp_avg_allowed_fp2": 25.4,
    "fanduelSalary": "$7400",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#014683",
    "tmColorDark": "#002C5F",
    "tmColorLite_rgba": "rgba(1, 70, 131, 0.2)",
    "tmColorDark_rgba": "rgba(0, 44, 95, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ind.png",
    "headlineNews": "Carries ball 21 times",
    "report": "Mack rushed the ball 21 times for 89 yards in Week 9 against the Steelers.",
    "analysis": "Mack was limited to just eight touches in the first half, but returned to his workhorse role after halftime. His most explosive run came in the third quarter, when he broke off a 24-yard run behind his right tackle. While he remains uninvolved in the passing game, Mack has seen at least 18 carries in six of eight games this season -- including in each of his last four. Due to his lack of receptions, Mack is reliant on finding paydirt to turn in big fantasy performances. However, he is in line for a strong matchup against Miami in Week 10, particularly if the Colts are forced to turn to Brian Hoyer as their quarterback.",
    "timestamp": "2019-11-03 03:19 PM",
    "week01": 25.4,
    "week02": 7.3,
    "week03": 15.8,
    "week04": 3.9,
    "week05": 16.3,
    "week06": "BYE",
    "week07": 7.1,
    "week08": 15.5,
    "week09": 8.9,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [25.4, 7.3, 15.8, 3.9, 16.3, 'BYE', 7.1, 15.5, 8.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.3, 9.8, 13.0, 14.2, 15.0, 'BYE', 12.3, 7.9, 10.3, 11.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3066158.png",
    "name": "Tarik Cohen",
    "depthchart": "Backup: RB-2",
    "team": "Chicago Bears",
    "projected": 11.4,
    "opponent": "Detroit Lions",
    "home_away": "",
    "opp_rank": 27,
    "team_rank": 27,
    "avg_fp2": 6.05,
    "opp_rank_allowed_fp2": 31,
    "opp_avg_allowed_fp2": 28.07,
    "fanduelSalary": "$5000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#c36835",
    "tmColorDark": "#0B162A",
    "tmColorLite_rgba": "rgba(195, 104, 53, 0.2)",
    "tmColorDark_rgba": "rgba(11, 22, 42, 0.2)",
    "tmTextLite": "#c36835",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png",
    "headlineNews": "Receives four touches",
    "report": "Cohen rushed twice for seven yards and caught two passes for nine yards in Chicago's 22-14 loss to the Eagles on Sunday.",
    "analysis": "Cohen tied for the team lead with five targets, but even when he caught the football, he was tackled immediately. Despite his lack of involvement, he had a chance to score a touchdown on one of his rushing attempts, but he was ruled out of bounds just short of the goal line. He's averaging just 30 yards per game with only one touchdown, and his combination of a low floor and low ceiling makes him a difficult player to trust in fantasy lineups, though he has slightly elevated value in point-per-reception leagues.",
    "timestamp": "2019-11-03 02:22 PM",
    "week01": 8.7,
    "week02": 3.5,
    "week03": 3.4,
    "week04": 8.8,
    "week05": 7.9,
    "week06": "BYE",
    "week07": 7.4,
    "week08": 6.1,
    "week09": 2.6,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.7, 3.5, 3.4, 8.8, 7.9, 'BYE', 7.4, 6.1, 2.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.7, 7.5, 6.5, 6.4, 5.2, 'BYE', 5.7, 6.4, 7.7, 11.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3915411.png",
    "name": "Ty Johnson",
    "depthchart": "Starter: RB-1",
    "team": "Detroit Lions",
    "projected": 11.3,
    "opponent": "Chicago Bears",
    "home_away": "at ",
    "opp_rank": 8,
    "team_rank": 21,
    "avg_fp2": 3.15,
    "opp_rank_allowed_fp2": 24,
    "opp_avg_allowed_fp2": 22.94,
    "fanduelSalary": "$5900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0076B6",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(0, 118, 182, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#0076B6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/det.png",
    "headlineNews": "Underwhelming effort vs. Raiders",
    "report": "Johnson carried nine times for 29 yards and caught three passes for an additional seven yards during Sunday's 31-24 loss to the Raiders.",
    "analysis": "Johnson led the team in carries but came away with little, as he averaged 3.2 yards per rush. He also hauled in all three of his targets, but he fared even worse in terms of yards per reception. Meanwhile, J.D. McKissic piled up 72 scrimmage yards and a touchdown, so the balance of power in the Detroit backfield could shift again heading into next Sunday's game in Chicago.",
    "timestamp": "2019-11-03 05:58 PM",
    "week01": 0.6,
    "week02": 4.6,
    "week03": 1.0,
    "week04": 1.9,
    "week05": "BYE",
    "week06": 0.0,
    "week07": 7.7,
    "week08": 4.3,
    "week09": 5.1,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.6, 4.6, 1.0, 1.9, 'BYE', 0.0, 7.7, 4.3, 5.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.4, 6.3, 4.5, 3.8, 'BYE', 2.9, 2.4, 10.7, 7.4, 11.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2980453.png",
    "name": "Jamaal Williams",
    "depthchart": "Backup: RB-2",
    "team": "Green Bay Packers",
    "projected": 10.8,
    "opponent": "Carolina Panthers",
    "home_away": "",
    "opp_rank": 26,
    "team_rank": 22,
    "avg_fp2": 10.99,
    "opp_rank_allowed_fp2": 27,
    "opp_avg_allowed_fp2": 24.57,
    "fanduelSalary": "$5600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#d7a017",
    "tmColorDark": "#203731",
    "tmColorLite_rgba": "rgba(215, 160, 23, 0.2)",
    "tmColorDark_rgba": "rgba(32, 55, 49, 0.2)",
    "tmTextLite": "#d7a017",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png",
    "headlineNews": "Finds end zone in loss",
    "report": "Williams carried the ball twice for 10 yards and caught all six of his targets for 39 yards and a touchdown in Sunday's 26-11 loss to the Chargers.",
    "analysis": "His fourth-quarter score didn't affect the outcome, but it did extend Williams' streak of games with a receiving TD to four. His six targets were also a season high, in part due to the Packers' offensive line struggling to protect Aaron Rodgers and the QB needing to get rid of the ball quickly. Williams stands a good chance of being productive again next week against a Panthers defense that has been vulnerable to RBs, both on the ground and through the air, all year.",
    "timestamp": "2019-11-03 06:11 PM",
    "week01": 2.5,
    "week02": 11.6,
    "week03": 9.6,
    "week04": 0.5,
    "week05": "DNP",
    "week06": 21.6,
    "week07": 11.1,
    "week08": 17.1,
    "week09": 13.9,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.5, 11.6, 9.6, 0.5, 'DNP', 21.6, 11.1, 17.1, 13.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.3, 3.9, 4.6, 3.9, 'DNP', 9.0, 5.7, 8.9, 9.0, 10.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2508176.png",
    "name": "David Johnson",
    "depthchart": "Starter: RB-1",
    "team": "Arizona Cardinals",
    "projected": 10.2,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "at ",
    "opp_rank": 1,
    "team_rank": 14,
    "avg_fp2": 15.21,
    "opp_rank_allowed_fp2": 3,
    "opp_avg_allowed_fp2": 13.88,
    "fanduelSalary": "$6800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#97233F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(151, 35, 63, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#97233F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
    "headlineNews": "Geared up for return",
    "report": "Johnson (ankle) doesn't have an injury designation for Sunday's game in Tampa Bay, while fellow running back Chase Edmonds (hamstring) has been ruled out, Kyle Odegard of the Cardinals' official site reports.",
    "analysis": "The dread of a potential three-way split will have to wait at least one more week and probably longer, but Johnson does have Kenyan Drake competing for touches after the former Dolphin blew up for 162 scrimmage yards last Thursday against the 49ers. The matchup with Tampa's run-stuffing, pass-funnel defense represents another problem, though Johnson has the requisite athleticism and pass-catching ability to overcome both of these obstacles.",
    "timestamp": "2019-11-08 02:43 PM",
    "week01": 22.7,
    "week02": 7.9,
    "week03": 15.5,
    "week04": 17.9,
    "week05": 17.1,
    "week06": 25.2,
    "week07": 0.2,
    "week08": "DNP",
    "week09": "DNP",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [22.7, 7.9, 15.5, 17.9, 17.1, 25.2, 0.2, 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.3, 14.9, 13.0, 12.0, 18.7, 15.2, 15.6, 'DNP', 'DNP', 10.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116593.png",
    "name": "Dalvin Cook",
    "depthchart": "Starter: RB-1",
    "team": "Minnesota Vikings",
    "projected": 10.2,
    "opponent": "Dallas Cowboys",
    "home_away": "at ",
    "opp_rank": 11,
    "team_rank": 3,
    "avg_fp2": 21.3,
    "opp_rank_allowed_fp2": 16,
    "opp_avg_allowed_fp2": 20.64,
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
    "headlineNews": "Garners 116 total yards in loss",
    "report": "Cook rushed 21 times for 71 yards and brought in four of seven targets for 45 yards in the Vikings' 26-23 loss to the Chiefs on Sunday.",
    "analysis": "Cook came into the contest with sky-high expectations due to the favorable matchup against a suspect Kansas City run defense, but he was mostly contained throughout the contest. The star running back had a long run of 12 yards, and fell short of the 100-yard mark on the ground for the third time in the last four games. Cook did encouragingly continue with his solid passing game role, as his four catches tied for the team lead and pushed his reception total over the last two contests to nine overall. Cook will look to boost his production in a Week 10 battle against the Cowboys in a Sunday night battle.",
    "timestamp": "2019-11-03 02:10 PM",
    "week01": 25.0,
    "week02": 26.6,
    "week03": 22.3,
    "week04": 16.0,
    "week05": 22.8,
    "week06": 12.4,
    "week07": 27.4,
    "week08": 25.6,
    "week09": 13.6,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [25.0, 26.6, 22.3, 16.0, 22.8, 12.4, 27.4, 25.6, 13.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.4, 11.6, 11.5, 10.0, 13.0, 11.0, 11.0, 14.0, 16.6, 10.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2977644.png",
    "name": "Todd Gurley",
    "depthchart": "Starter: RB-1",
    "team": "Los Angeles Rams",
    "projected": 10.1,
    "opponent": "Pittsburgh Steelers",
    "home_away": "at ",
    "opp_rank": 16,
    "team_rank": 21,
    "avg_fp2": 13.01,
    "opp_rank_allowed_fp2": 6,
    "opp_avg_allowed_fp2": 17.18,
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
    "headlineNews": "Scores, gains 44 yards in win",
    "report": "Gurley ran for 44 yards and a touchdown on 10 carries during Sunday's 24-10 win over the Bengals.",
    "analysis": "Gurley made his presence felt on either side of halftime, first digging the Rams out of the shade of their own goalpost with a 20-yard bruising run before halftime and then capping off the Rams first drive of the second half with a three-yard run on a toss play. Though the stats don't show it, Sunday was actually Gurley's most efficient game since Week 1 -- the first time in that span in which he averaged at least four yards per carry. The Georgia product has not reached 75 total yards in a game since the opener, but he's scored in all but one game during that stretch. Gurley doesn't seem like he's going to manhandle defenses like he used to, but he retains good value by inevitably piling up red-zone touches and picking up a score. Gurley has a whopping 15 red-zone touches over his last two games.",
    "timestamp": "2019-10-27 03:45 PM",
    "week01": 10.6,
    "week02": 14.2,
    "week03": 4.3,
    "week04": 22.5,
    "week05": 17.2,
    "week06": "DNP",
    "week07": 11.9,
    "week08": 10.4,
    "week09": "BYE",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.6, 14.2, 4.3, 22.5, 17.2, 'DNP', 11.9, 10.4, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.2, 14.3, 12.4, 9.6, 15.6, 'DNP', 23.0, 12.8, 'BYE', 10.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3912550.png",
    "name": "Ronald Jones",
    "depthchart": "Starter: RB-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 9.3,
    "opponent": "Arizona Cardinals",
    "home_away": "",
    "opp_rank": 23,
    "team_rank": 19,
    "avg_fp2": 9.06,
    "opp_rank_allowed_fp2": 17,
    "opp_avg_allowed_fp2": 20.77,
    "fanduelSalary": "$6300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#D50A0A",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(213, 10, 10, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#D50A0A",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Named starting RB",
    "report": "Coach Bruce Arians said Jones is the Buccaneers' starting running back going forward, Jenna Laine of ESPN.com reports. \"He's been consistent [and] he's been more explosive,\" Arians said.",
    "analysis": "The news isn't surprising, as Jones has out-touched Peyton Barber, 32-15, over the last two weeks, but it's positive news for Jones' fantasy owners that the boss acknowledged his superior skill. Jones registered 67 rushing yards -- his second-highest total of the year -- and a touchdown in this past Sunday's overtime loss to the Seahawks. Barber still figures to get into the rotation, but Jones has a solid opportunity to live up to his starter's tag Sunday against the Cardinals, who have allowed 126.9 rushing yards per game, the ninth most in the league.",
    "timestamp": "2019-11-04 02:13 PM",
    "week01": 9.8,
    "week02": 0.9,
    "week03": 12.6,
    "week04": 14.7,
    "week05": 6.6,
    "week06": 7.0,
    "week07": "BYE",
    "week08": 5.7,
    "week09": 15.2,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.8, 0.9, 12.6, 14.7, 6.6, 7.0, 'BYE', 5.7, 15.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.9, 7.3, 7.2, 6.0, 7.8, 15.1, 'BYE', 7.5, 6.7, 9.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3059915.png",
    "name": "Kareem Hunt",
    "depthchart": "Backup: RB-2",
    "team": "Cleveland Browns",
    "projected": 9.2,
    "opponent": "Buffalo Bills",
    "home_away": "",
    "opp_rank": 19,
    "team_rank": 13,
    "avg_fp2": 19.75,
    "opp_rank_allowed_fp2": 23,
    "opp_avg_allowed_fp2": 22.55,
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
    "headlineNews": "Will have role against Bills",
    "report": "Coach Freddie Kitchens said Hunt (suspension) \"will definitely have a role\" in Sunday's game against the Bills, Mary Kay Cabot of The Cleveland Plain Dealer reports.",
    "analysis": "Hunt completed his eight-game suspension for violating the league's personal conduct policy, and he's fully recovered from sports hernia surgery. He hasn't been lifted to the 53-man roster yet, but the official move will come before Sunday. In this past Sunday's loss to the Broncos, lead back Nick Chubb was taken off the field multiple times, but Dontrell Hilliard wasn't successful with just eight yards on five carries. The Browns hope Hunt can add another dimension to the backfield and form a one-two punch with Chubb. While Chubb is locked into the No. 1 role for the foreseeable future, it wouldn't be surprising if the Browns afforded Hunt a handful of touches right away. Hunt's potential is evident, as he racked up 1,202 yards from scrimmage and 14 total touchdowns over 11 games with the Chiefs last year.",
    "timestamp": "2019-11-04 01:47 PM",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": "BYE",
    "week08": "DNP",
    "week09": "DNP",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 'DNP', 'DNP', 9.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15826.png",
    "name": "Giovani Bernard",
    "depthchart": "Backup: RB-2",
    "team": "Cincinnati Bengals",
    "projected": 9.1,
    "opponent": "Baltimore Ravens",
    "home_away": "",
    "opp_rank": 2,
    "team_rank": 32,
    "avg_fp2": 3.7,
    "opp_rank_allowed_fp2": 11,
    "opp_avg_allowed_fp2": 19.65,
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
    "headlineNews": "Some late production",
    "report": "Bernard had three carries for 31 yards and two catches for 14 more yards in Sunday's loss to the Rams.",
    "analysis": "Most of Bernard's production came on one longer run, and he was in the game frequently late as the Bengals tried to get one last score. He heads into the bye week with a meager 206 scrimmage yards and is still looking for his first score of the season.",
    "timestamp": "2019-10-29 01:55 PM",
    "week01": 7.3,
    "week02": 1.8,
    "week03": 2.2,
    "week04": 3.9,
    "week05": 4.1,
    "week06": 3.4,
    "week07": 1.4,
    "week08": 5.5,
    "week09": "BYE",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.3, 1.8, 2.2, 3.9, 4.1, 3.4, 1.4, 5.5, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.0, 10.4, 7.9, 7.6, 6.8, 6.1, 5.7, 7.9, 'BYE', 9.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3128774.png",
    "name": "Kalen Ballage",
    "depthchart": "Starter: RB-1",
    "team": "Miami Dolphins",
    "projected": 8.7,
    "opponent": "Indianapolis Colts",
    "home_away": "at ",
    "opp_rank": 18,
    "team_rank": 31,
    "avg_fp2": 3.12,
    "opp_rank_allowed_fp2": 8,
    "opp_avg_allowed_fp2": 18.59,
    "fanduelSalary": "$4600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#008E97",
    "tmColorDark": "#005778",
    "tmColorLite_rgba": "rgba(0, 142, 151, 0.2)",
    "tmColorDark_rgba": "rgba(0, 87, 120, 0.2)",
    "tmTextLite": "#f5821f",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/mia.png",
    "headlineNews": "Should see expanded role",
    "report": "Ballage figures to see an expanded role in Miami's offense in the coming weeks, with teammate Mark Walton slated to serve a four-game suspension.",
    "analysis": "With Walton unavailable, look for Ballage to head the Dolphins' rushing attack this Sunday against the Colts, with Patrick Laird and Myles Gaskin also candidates to see added opportunities in the coming weeks. While Ballage's team context isn't optimal and doesn't always lead to favorable game flows, he's an option for those looking to add running back depth, with injuries and bye weeks in mind.",
    "timestamp": "2019-11-04 02:13 PM",
    "week01": 1.7,
    "week02": 1.7,
    "week03": 3.2,
    "week04": 0.7,
    "week05": "BYE",
    "week06": 6.7,
    "week07": 6.7,
    "week08": 2.4,
    "week09": 1.9,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.7, 1.7, 3.2, 0.7, 'BYE', 6.7, 6.7, 2.4, 1.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.7, 1.4, 5.0, 3.2, 'BYE', 2.5, 3.8, 4.3, 3.0, 8.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3051926.png",
    "name": "Gus Edwards",
    "depthchart": "Backup: RB-2",
    "team": "Baltimore Ravens",
    "projected": 8.2,
    "opponent": "Cincinnati Bengals",
    "home_away": "at ",
    "opp_rank": 32,
    "team_rank": 1,
    "avg_fp2": 4.62,
    "opp_rank_allowed_fp2": 32,
    "opp_avg_allowed_fp2": 28.09,
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
    "headlineNews": "Vultures touchdown in win",
    "report": "Edwards had seven carries for 27 yards and a touchdown in Sunday's 37-20 win over the Patriots.",
    "analysis": "Mark Ingram (115 rushing yards) did most of the heavy lifting against a tough Patriots front seven, but it was Edwards who provided the lone rushing touchdown aside from Lamar Jackson's two scores. The 24-year-old is averaging 7.4 carries as a change-of-pace option behind Ingram, but he is rarely used in the passing game and Sunday's score was his first of the season. Edwards could see some extra work in a Week 10 matchup against the Bengals with blowout potential -- similar to the 14 carries he received in Week 1's drubbing of the Dolphins -- but fantasy owners shouldn't be relying on him outside of emergency situations.",
    "timestamp": "2019-11-03 11:05 PM",
    "week01": 5.6,
    "week02": 1.1,
    "week03": 7.8,
    "week04": 4.1,
    "week05": 2.8,
    "week06": 3.4,
    "week07": 3.5,
    "week08": "BYE",
    "week09": 8.7,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.6, 1.1, 7.8, 4.1, 2.8, 3.4, 3.5, 'BYE', 8.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.3, 5.3, 5.6, 4.8, 6.5, 10.6, 6.4, 'BYE', 5.1, 8.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/17359.png",
    "name": "Damien Williams",
    "depthchart": "Starter: RB-1",
    "team": "Kansas City Chiefs",
    "projected": 8.0,
    "opponent": "Tennessee Titans",
    "home_away": "at ",
    "opp_rank": 15,
    "team_rank": 24,
    "avg_fp2": 8.09,
    "opp_rank_allowed_fp2": 18,
    "opp_avg_allowed_fp2": 21.07,
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
    "headlineNews": "Breaks through in Week 9 win",
    "report": "Williams rushed 12 times for 125 yards and a touchdown and secured both his targets for three yards in the Chiefs' 26-23 win over the Vikings on Sunday.",
    "analysis": "Williams' made his fantasy day with a spectacular 91-yard scoring run midway through the third quarter that erased a 16-10 deficit. The veteran running back hadn't eclipsed 30 rushing yards in any game this season prior to Sunday, however, and he'd have barely accomplished the feat against the Vikings had it not been for his game-long scamper. Therefore, Williams will remain a speculative play going into a Week 10 battle against the Titans.",
    "timestamp": "2019-11-03 02:25 PM",
    "week01": 15.5,
    "week02": 7.1,
    "week03": "DNP",
    "week04": "DNP",
    "week05": 5.3,
    "week06": 6.3,
    "week07": 1.6,
    "week08": 1.0,
    "week09": 19.8,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [15.5, 7.1, 'DNP', 'DNP', 5.3, 6.3, 1.6, 1.0, 19.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.1, 8.5, 'DNP', 'DNP', 12.3, 11.5, 6.6, 9.9, 8.6, 8.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3916430.png",
    "name": "Nyheim Hines",
    "depthchart": "Backup: RB-2",
    "team": "Indianapolis Colts",
    "projected": 7.8,
    "opponent": "Miami Dolphins",
    "home_away": "",
    "opp_rank": 31,
    "team_rank": 9,
    "avg_fp2": 4.44,
    "opp_rank_allowed_fp2": 29,
    "opp_avg_allowed_fp2": 25.4,
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
    "headlineNews": "Just two touches Sunday",
    "report": "Hines had one carry for seven yards and one reception for 21 yards on three targets in Sunday's 26-24 loss at Pittsburgh.",
    "analysis": "Hines played on 20 of the offense's 70 snaps as he hasn't been a big part of the scheme the last three weeks (just five targets). He remains the top passing-down option at running back but isn't getting much playing time behind Marlon Mack.",
    "timestamp": "2019-11-04 12:29 PM",
    "week01": 3.7,
    "week02": 1.9,
    "week03": 4.4,
    "week04": 7.5,
    "week05": 6.5,
    "week06": "BYE",
    "week07": 2.1,
    "week08": 6.1,
    "week09": 3.3,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.7, 1.9, 4.4, 7.5, 6.5, 'BYE', 2.1, 6.1, 3.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.8, 6.8, 5.8, 8.7, 7.9, 'BYE', 6.4, 2.3, 6.9, 7.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2972091.png",
    "name": "Jalen Richard",
    "depthchart": "Backup: RB-2",
    "team": "Oakland Raiders",
    "projected": 7.6,
    "opponent": "Los Angeles Chargers",
    "home_away": "",
    "opp_rank": 20,
    "team_rank": 6,
    "avg_fp2": 3.24,
    "opp_rank_allowed_fp2": 25,
    "opp_avg_allowed_fp2": 23.09,
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
    "headlineNews": "Season high in receiving yards",
    "report": "Richard caught three of four targets for 56 yards and ran twice for 12 yards Sunday in the Raiders' 31-24 win over the Lions.",
    "analysis": "Lead back Josh Jacobs (28 carries, two targets) once again took on a heavy workload, but there was still enough room for Richard to play a third of the Raiders' offensive snaps as a change-of-pace back. Richard capitalized on the few touches he received, setting a new season high with 70 total yards. Jacobs is managing a shoulder injury heading into a Thursday night matchup with the Chargers in Week 10, but since he's still expected to play and take on a normal snap count, Richard probably won't be in store for an enhanced role.",
    "timestamp": "2019-11-05 12:19 PM",
    "week01": 0.3,
    "week02": 1.5,
    "week03": 4.4,
    "week04": 2.3,
    "week05": 4.2,
    "week06": "BYE",
    "week07": 1.2,
    "week08": 3.7,
    "week09": 8.3,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.3, 1.5, 4.4, 2.3, 4.2, 'BYE', 1.2, 3.7, 8.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.4, 4.0, 6.3, 4.4, 6.6, 'BYE', 4.3, 4.0, 6.0, 7.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15920.png",
    "name": "Latavius Murray",
    "depthchart": "Backup: RB-2",
    "team": "New Orleans Saints",
    "projected": 7.3,
    "opponent": "Atlanta Falcons",
    "home_away": "",
    "opp_rank": 21,
    "team_rank": 15,
    "avg_fp2": 11.59,
    "opp_rank_allowed_fp2": 17,
    "opp_avg_allowed_fp2": 21.2,
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
    "headlineNews": "Should stay involved",
    "report": "Coach Sean Payton hinted that Murray will retain a significant role even with Alvin Kamara now healthy, ESPN.com's Mike Triplett reports. \"Week 1 [of] Alvin coming back. We'll be smart,\" said Payton. \"And the good news is the way [Murray] played and the way Alvin's played, we feel like we're real good at that position.",
    "analysis": "Murray averaged just 4.8 carries and 1.4 targets per game through the first six weeks of the season, but he should see more work Sunday against Atlanta, with Kamara in his first game back from an ankle injury and the Saints heavily favored to win. Murray made an excellent case for continued involvement when Kamara missed Weeks 7 and 8, piling up 307 scrimmage yards and four touchdowns. Kamara said he doesn't mind sharing some more work with Murray moving forward.",
    "timestamp": "2019-11-08 02:27 PM",
    "week01": 11.7,
    "week02": 2.8,
    "week03": 0.2,
    "week04": 2.5,
    "week05": 4.4,
    "week06": 9.4,
    "week07": 29.5,
    "week08": 32.2,
    "week09": "BYE",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.7, 2.8, 0.2, 2.5, 4.4, 9.4, 29.5, 32.2, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.2, 7.3, 3.9, 5.2, 5.7, 4.8, 6.9, 5.7, 'BYE', 7.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2572861.png",
    "name": "J.D. McKissic",
    "depthchart": "Backup: RB-2",
    "team": "Detroit Lions",
    "projected": 7.3,
    "opponent": "Chicago Bears",
    "home_away": "at ",
    "opp_rank": 8,
    "team_rank": 21,
    "avg_fp2": 4.94,
    "opp_rank_allowed_fp2": 24,
    "opp_avg_allowed_fp2": 22.94,
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
    "headlineNews": "Leads backfield in scrimmage yards",
    "report": "McKissic carried four times for 32 yards while catching three of four targets for 40 yards and a touchdown during Sunday's 31-24 loss to the Raiders.",
    "analysis": "Although McKissic didn't get many opportunities on the ground, he led the team in rushing yards while averaging eight yards per carry. He also made an impact as a pass catcher, leading the backfield in receiving yardage thanks in part to a 26-yard touchdown reception late in the fourth quarter. McKissic certainly outperformed Ty Johnson in this one and could play a larger role in next Sunday's road matchup with the Bears.",
    "timestamp": "2019-11-03 05:51 PM",
    "week01": "DNP",
    "week02": 0.2,
    "week03": 4.4,
    "week04": 4.6,
    "week05": "BYE",
    "week06": 2.1,
    "week07": 7.0,
    "week08": 1.6,
    "week09": 14.7,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 0.2, 4.4, 4.6, 'BYE', 2.1, 7.0, 1.6, 14.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 5.2, 2.5, 2.0, 'BYE', 6.2, 5.9, 8.5, 5.2, 7.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3049916.png",
    "name": "Matt Breida",
    "depthchart": "Backup: RB-2",
    "team": "San Francisco 49ers",
    "projected": 7.3,
    "opponent": "Seattle Seahawks",
    "home_away": "",
    "opp_rank": 13,
    "team_rank": 2,
    "avg_fp2": 10.21,
    "opp_rank_allowed_fp2": 10,
    "opp_avg_allowed_fp2": 19.64,
    "fanduelSalary": "$6000",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Ankle",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "Gets in another limited practice",
    "report": "Breida (ankle) remained limited Friday at practice, Matt Maiocco of NBC Sports Bay Area reports.",
    "analysis": "Back-to-back limited practices would seemingly put Breida on track to play in Monday's divisional battle with the Seahawks. He has a well-established history of playing through injuries, often at a high level. The 49ers' already-potent rushing attack may get a nice boost this week, with LT Joe Staley (leg), RT Mike McGlinchey (knee) and FB Kyle Juszczyk (knee) all hoping to return from injuries.",
    "timestamp": "2019-11-08 03:08 PM",
    "week01": 3.7,
    "week02": 13.7,
    "week03": 9.8,
    "week04": "BYE",
    "week05": 26.4,
    "week06": 8.3,
    "week07": 4.1,
    "week08": 5.5,
    "week09": 10.2,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.7, 13.7, 9.8, 'BYE', 26.4, 8.3, 4.1, 5.5, 10.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.9, 7.9, 8.7, 'BYE', 5.7, 13.7, 10.0, 5.4, 7.7, 7.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14129.png",
    "name": "Bilal Powell",
    "depthchart": "Backup: RB-2",
    "team": "New York Jets",
    "projected": 6.3,
    "opponent": "New York Giants",
    "home_away": "",
    "opp_rank": 25,
    "team_rank": 30,
    "avg_fp2": 0.65,
    "opp_rank_allowed_fp2": 21,
    "opp_avg_allowed_fp2": 21.68,
    "fanduelSalary": "$4500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#125740",
    "tmColorDark": "#003f2d",
    "tmColorLite_rgba": "rgba(18, 87, 64, 0.2)",
    "tmColorDark_rgba": "rgba(0, 63, 45, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png",
    "headlineNews": "Eclipses Montgomery as No. 2 back",
    "report": "Powell rushed twice for 16 yards but wasn't targeted in the passing game in Sunday's 26-18 loss to the Dolphins.",
    "analysis": "Powell seems to have taken over the backup running back gig, as Ty Montgomery didn't touch the ball for the second straight game. The backup role doesn't come with much usage, however, as Powell hasn't recorded more than four touches in a game this season.",
    "timestamp": "2019-11-03 02:20 PM",
    "week01": "DNP",
    "week02": "DNP",
    "week03": 0.0,
    "week04": "BYE",
    "week05": 0.4,
    "week06": 0.5,
    "week07": 0.3,
    "week08": 1.1,
    "week09": 1.6,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 0.0, 'BYE', 0.4, 0.5, 0.3, 1.1, 1.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 1.9, 'BYE', 1.5, 4.7, 2.6, 3.9, 4.5, 6.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2577654.png",
    "name": "DeAndre Washington",
    "depthchart": "Reserve: RB-3",
    "team": "Oakland Raiders",
    "projected": 5.9,
    "opponent": "Los Angeles Chargers",
    "home_away": "",
    "opp_rank": 20,
    "team_rank": 6,
    "avg_fp2": 4.16,
    "opp_rank_allowed_fp2": 25,
    "opp_avg_allowed_fp2": 23.09,
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
    "headlineNews": "Totals 28 yards in win",
    "report": "Washington rushed three times for seven yards and brought in his only target for a 21-yard gain in Sunday's 31-24 win over Detroit.",
    "analysis": "All of Washington's touches came in the first half, and he played just seven total snaps on offense. His three carries were his fewest since Week 2. The 26-year-old will continue to fill in behind Josh Jacobs and Jalen Richard at home Week 10 against the Chargers.",
    "timestamp": "2019-11-05 02:36 PM",
    "week01": 0.8,
    "week02": 4.5,
    "week03": 2.2,
    "week04": 3.6,
    "week05": 11.1,
    "week06": "BYE",
    "week07": 4.6,
    "week08": 3.2,
    "week09": 3.3,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.8, 4.5, 2.2, 3.6, 11.1, 'BYE', 4.6, 3.2, 3.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.0, 2.2, 5.8, 2.9, 4.0, 'BYE', 6.1, 2.9, 4.7, 5.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3139925.png",
    "name": "Rashaad Penny",
    "depthchart": "Backup: RB-2",
    "team": "Seattle Seahawks",
    "projected": 5.8,
    "opponent": "San Francisco 49ers",
    "home_away": "at ",
    "opp_rank": 14,
    "team_rank": 8,
    "avg_fp2": 4.57,
    "opp_rank_allowed_fp2": 4,
    "opp_avg_allowed_fp2": 14.12,
    "fanduelSalary": "$5200",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#69BE28",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(105, 190, 40, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#69BE28",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
    "headlineNews": "Four carries in win",
    "report": "Penny rushed four times for 12 yards in Sunday's 40-34 overtime win against the Buccaneers.",
    "analysis": "Penny impressed last week as he managed 55 yards on just eight carries, but his role dried up in this outing. Despite Chris Carson fumbling twice, Penny barely got on the field, as he logged 11 of a possible 75 offensive snaps. Carson's fumbles are a concern, but he racked up 105 yards on 16 carries while catching both targets for 28 yards. His production seems to cancel out the costly turnovers at this point, but Penny remains a valuable handcuff in case Carson is injured.",
    "timestamp": "2019-11-04 07:44 AM",
    "week01": 1.8,
    "week02": 13.0,
    "week03": "DNP",
    "week04": "DNP",
    "week05": 5.9,
    "week06": "DNP",
    "week07": 0.0,
    "week08": 5.5,
    "week09": 1.2,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.8, 13.0, 'DNP', 'DNP', 5.9, 'DNP', 0.0, 5.5, 1.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.0, 5.5, 'DNP', 'DNP', 5.5, 'DNP', 3.8, 2.5, 4.6, 5.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3051902.png",
    "name": "Peyton Barber",
    "depthchart": "Backup: RB-2",
    "team": "Tampa Bay Buccaneers",
    "projected": 5.8,
    "opponent": "Arizona Cardinals",
    "home_away": "",
    "opp_rank": 23,
    "team_rank": 19,
    "avg_fp2": 6.56,
    "opp_rank_allowed_fp2": 17,
    "opp_avg_allowed_fp2": 20.77,
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
    "headlineNews": "Major downturn in involvement",
    "report": "Barber rushed just four times for 15 yards in the Buccaneers' 40-34 overtime loss to the Seahawks on Sunday.",
    "analysis": "Barber was a firm second fiddle to backfield mate Ronald Jones, seeing 14 fewer carries, the biggest gap in workload between the two this season. The 25-year-old has managed 32 yards or fewer on the ground in six consecutive games, and he's been under 50 in all but one contest this season. Consequently, regardless of how the workload is divided in Week 10 against the Cardinals, Barber's fantasy ceiling projects to continue capped in all formats.",
    "timestamp": "2019-11-03 08:58 PM",
    "week01": 5.5,
    "week02": 15.4,
    "week03": 6.5,
    "week04": 7.9,
    "week05": 9.6,
    "week06": 2.8,
    "week07": "BYE",
    "week08": 3.3,
    "week09": 1.5,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.5, 15.4, 6.5, 7.9, 9.6, 2.8, 'BYE', 3.3, 1.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.2, 8.4, 8.0, 10.6, 7.9, 8.1, 'BYE', 8.2, 7.8, 5.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/12514.png",
    "name": "LeSean McCoy",
    "depthchart": "Backup: RB-2",
    "team": "Kansas City Chiefs",
    "projected": 5.2,
    "opponent": "Tennessee Titans",
    "home_away": "at ",
    "opp_rank": 15,
    "team_rank": 24,
    "avg_fp2": 8.03,
    "opp_rank_allowed_fp2": 18,
    "opp_avg_allowed_fp2": 21.07,
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
    "headlineNews": "Minimal impact in Week 9",
    "report": "McCoy recorded just three rushes for nine yards and caught his lone target for no gain Sunday against the Vikings.",
    "analysis": "McCoy saw the field for just 10 percent of the Chiefs' offensive snaps Sunday, with no clear indication of exactly why that was the case. Coach Andy Reid may have decided to roll with the hot hand, which turned out to be Damien Williams against the Vikings. In any event, McCoy's volatility in terms of workload likely eliminates much of his fantasy value.",
    "timestamp": "2019-11-04 09:16 PM",
    "week01": "DNP",
    "week02": 3.8,
    "week03": 21.5,
    "week04": 15.9,
    "week05": 1.3,
    "week06": 5.4,
    "week07": 8.6,
    "week08": 6.3,
    "week09": 1.4,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 3.8, 21.5, 15.9, 1.3, 5.4, 8.6, 6.3, 1.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 5.7, 6.8, 7.1, 7.2, 7.8, 4.0, 5.3, 7.1, 5.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2970090.png",
    "name": "Trey Edmunds",
    "depthchart": "Backup: RB-2",
    "team": "Pittsburgh Steelers",
    "projected": 5.0,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank": 14,
    "team_rank": 26,
    "avg_fp2": 2.43,
    "opp_rank_allowed_fp2": 14,
    "opp_avg_allowed_fp2": 20.15,
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
    "headlineNews": "Cleared for Sunday",
    "report": "Edmunds (ribs) doesn't have a designation for Sunday's contest against the Rams, Teresa Varley of the Steelers' official site reports.",
    "analysis": "Edmunds followed up back-to-back absences Wednesday and Thursday with a full showing Friday, clearing him for game action. The Steelers will be without James Conner (shoulder) and Benny Snell (knee) this weekend, which will give Edmunds another opportunity to contribute while Jaylen Samuels handles most of the offensive snaps. During this past Sunday's win against the Colts, Edmunds had 12 carries for 73 yards while Samuels recorded 21 touches for 83 yards from scrimmage.",
    "timestamp": "2019-11-08 12:21 PM",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": 0.0,
    "week07": "BYE",
    "week08": 0.0,
    "week09": 7.3,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 0.0, 'BYE', 0.0, 7.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 1.8, 'BYE', 0.7, 1.1, 5.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14198.png",
    "name": "Dion Lewis",
    "depthchart": "Backup: RB-2",
    "team": "Tennessee Titans",
    "projected": 5.0,
    "opponent": "Kansas City Chiefs",
    "home_away": "",
    "opp_rank": 29,
    "team_rank": 18,
    "avg_fp2": 2.81,
    "opp_rank_allowed_fp2": 30,
    "opp_avg_allowed_fp2": 26.69,
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
    "headlineNews": "Posts 53 total yards",
    "report": "Lewis ran the ball four times for 20 yards against the Panthers in Week 9. He also added five receptions for 33 yards.",
    "analysis": "Lewis earned his highest touch total of the season and also surpassed 50 total yards for the first time. He broke free from the Panthers defense for a few big plays, most notably on a screen pass that he turned upfield for a 24-yard gain. However, he also lost a costly fumble early in the second quarter just as the Titans were entering Carolina territory. Derrick Henry remains the clear leader in the Titans' backfield, with Lewis showing little ability to make an impact through nine games this season.",
    "timestamp": "2019-11-03 09:58 PM",
    "week01": 2.8,
    "week02": 1.9,
    "week03": 2.5,
    "week04": 4.0,
    "week05": 4.0,
    "week06": 3.4,
    "week07": 0.2,
    "week08": 0.7,
    "week09": 5.8,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.8, 1.9, 2.5, 4.0, 4.0, 3.4, 0.2, 0.7, 5.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.9, 10.1, 7.3, 5.8, 6.7, 3.9, 6.4, 4.4, 6.0, 5.0]
                    }
                    
                    ]
               }
            }];




$scope.positionWR = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16737.png",
    "name": "Mike Evans",
    "depthchart": "Starter: WR-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 20.8,
    "opponent": "Arizona Cardinals",
    "home_away": "",
    "opp_rank": 29,
    "team_rank": 7,
    "avg_fp2": 19.15,
    "opp_rank_allowed_fp2": 23,
    "opp_avg_allowed_fp2": 30.87,
    "fanduelSalary": "$8600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#D50A0A",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(213, 10, 10, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#D50A0A",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/tb.png",
    "headlineNews": "Eye-popping line in Week 9 loss",
    "report": "Evans secured 12 of 16 targets for 180 yards and a touchdown in the Buccaneers' 40-34 overtime loss to the Seahawks on Sunday.",
    "analysis": "For the second straight game, Evans put up stellar fantasy numbers in a close Buccaneers loss. The standout receiver now has a 23-378-3 line over the last pair of games, and he's drawn a jaw-dropping 45 targets over the last three contests overall. Evans could have had an even bigger day, as he was the intended receiver on a pass that ended up in the hands of teammate Breshad Perriman in the end zone after it was deflected into the air. Given his elite production of late, Evans remains a very viable play in an upcoming Week 10 matchup against the fast-paced Cardinals.",
    "timestamp": "2019-11-03 07:06 PM",
    "week01": 3.8,
    "week02": 8.1,
    "week03": 41.0,
    "week04": 16.9,
    "week05": 0.0,
    "week06": 16.1,
    "week07": "BYE",
    "week08": 37.3,
    "week09": 30.0,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.8, 8.1, 41.0, 16.9, 0.0, 16.1, 'BYE', 37.3, 30.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.9, 11.2, 17.1, 12.0, 14.9, 10.8, 'BYE', 8.3, 17.6, 20.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13982.png",
    "name": "Julio Jones",
    "depthchart": "Starter: WR-1",
    "team": "Atlanta Falcons",
    "projected": 19.1,
    "opponent": "New Orleans Saints",
    "home_away": "at ",
    "opp_rank": 12,
    "team_rank": 1,
    "avg_fp2": 15.04,
    "opp_rank_allowed_fp2": 19,
    "opp_avg_allowed_fp2": 29.56,
    "fanduelSalary": "$7900",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/atl.png",
    "headlineNews": "Catching fire at midseason",
    "report": "Jones caught 10 of 12 targets for 152 receiving yards during Sunday's 27-20 loss to Seattle.",
    "analysis": "The two-time All-Pro fell into a brief lull with just seven combined catches for 94 yards between Weeks 4 and 5, but he has since averaged a Herculean eight catches and 117.7 yards per game against the Cardinals, Rams and Seahawks. While his catch and yardage totals are trending up, Jones is officially on a touchdown drought after scoring four times during Atlanta's first three games of 2019. He has now gone five straight games without getting into the end zone, harboring up nightmares for those who endured Jones' 12-game regular-season scoreless streak between 2017 and 2018. Upcoming next for Jones and the Falcons is a bye week, before returning to the field for a matchup against New Orleans' middling pass defense Nov. 10.",
    "timestamp": "2019-10-27 02:37 PM",
    "week01": 12.1,
    "week02": 25.1,
    "week03": 22.8,
    "week04": 7.3,
    "week05": 5.7,
    "week06": 14.8,
    "week07": 12.3,
    "week08": 20.2,
    "week09": "BYE",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.1, 25.1, 22.8, 7.3, 5.7, 14.8, 12.3, 20.2, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.2, 16.2, 13.7, 16.6, 16.3, 15.5, 20.3, 11.0, 'BYE', 19.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3895856.png",
    "name": "Christian Kirk",
    "depthchart": "Starter: WR-1",
    "team": "Arizona Cardinals",
    "projected": 18.6,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "at ",
    "opp_rank": 31,
    "team_rank": 19,
    "avg_fp2": 9.4,
    "opp_rank_allowed_fp2": 32,
    "opp_avg_allowed_fp2": 37.91,
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
    "headlineNews": "Has quiet Week 9 outing",
    "report": "Kirk corralled two of five targets for eight yards and posted an eight-yard carry during Thursday's 28-25 loss to the 49ers.",
    "analysis": "Kirk led all Cardinals wide receivers in both targets and offensive snaps (55 of 57), but the usage didn't translate to the box score. Granted, Kyler Murray attempted just 24 passes, and seven of Kirk's teammates also tallied at least one catch. Additionally, Kirk may have been impacted by playing two games in the span of five days after sitting out three weeks due to an ankle injury. In any case, he'll have plenty of time to rest up for the Cardinals' next contest on Sunday, Nov. 10 at Tampa Bay.",
    "timestamp": "2019-11-02 06:16 PM",
    "week01": 8.4,
    "week02": 14.4,
    "week03": 10.9,
    "week04": 6.3,
    "week05": "DNP",
    "week06": "DNP",
    "week07": "DNP",
    "week08": 13.8,
    "week09": 2.6,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.4, 14.4, 10.9, 6.3, 'DNP', 'DNP', 'DNP', 13.8, 2.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.5, 11.3, 8.7, 7.4, 'DNP', 'DNP', 'DNP', 9.6, 11.6, 18.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116406.png",
    "name": "Tyreek Hill",
    "depthchart": "Starter: WR-1",
    "team": "Kansas City Chiefs",
    "projected": 17.5,
    "opponent": "Tennessee Titans",
    "home_away": "at ",
    "opp_rank": 17,
    "team_rank": 2,
    "avg_fp2": 15.02,
    "opp_rank_allowed_fp2": 10,
    "opp_avg_allowed_fp2": 25.28,
    "fanduelSalary": "$8000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB81C",
    "tmColorDark": "#c9243f",
    "tmColorLite_rgba": "rgba(255, 184, 28, 0.2)",
    "tmColorDark_rgba": "rgba(201, 36, 63, 0.2)",
    "tmTextLite": "#FFB81C",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/kc.png",
    "headlineNews": "Eclipses century mark in win",
    "report": "Hill brought in six of eight targets for 140 yards and a touchdown in the Chiefs' 26-23 win over the Vikings on Sunday. He also rushed once for five yards.",
    "analysis": "Hill demonstrated he didn't necessarily need Patrick Mahomes under center to thrive, exploding for his first 100-yard effort of the season and notching a 41-yard catch in the process. The versatile speedster also opened the scoring with a 40-yard touchdown grab and now has four receiving scores since returning from his early-season collarbone injury. Hill should have Mahomes back under center Week 10 against the Titans, affording him a good opportunity to put together a second consecutive strong performance.",
    "timestamp": "2019-11-03 02:19 PM",
    "week01": 3.1,
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": 22.5,
    "week07": 14.9,
    "week08": 11.1,
    "week09": 23.5,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.1, 'DNP', 'DNP', 'DNP', 'DNP', 22.5, 14.9, 11.1, 23.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.8, 'DNP', 'DNP', 'DNP', 'DNP', 12.2, 12.0, 17.4, 12.2, 17.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15818.png",
    "name": "Keenan Allen",
    "depthchart": "Starter: WR-1",
    "team": "Los Angeles Chargers",
    "projected": 17.3,
    "opponent": "Oakland Raiders",
    "home_away": "at ",
    "opp_rank": 32,
    "team_rank": 6,
    "avg_fp2": 12.33,
    "opp_rank_allowed_fp2": 31,
    "opp_avg_allowed_fp2": 35.2,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [22.3, 13.8, 37.1, 7.3, 3.8, 4.3, 8.1, 8.8, 5.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.3, 15.5, 14.8, 12.7, 12.3, 11.7, 10.4, 10.8, 12.2, 17.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2976316.png",
    "name": "Michael Thomas",
    "depthchart": "Starter: WR-1",
    "team": "New Orleans Saints",
    "projected": 16.7,
    "opponent": "Atlanta Falcons",
    "home_away": "",
    "opp_rank": 23,
    "team_rank": 11,
    "avg_fp2": 18.39,
    "opp_rank_allowed_fp2": 29,
    "opp_avg_allowed_fp2": 35.04,
    "fanduelSalary": "$8700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#9b845c",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(155, 132, 92, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#9b845c",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/no.png",
    "headlineNews": "Reignites connection with Brees",
    "report": "Thomas secured all 11 of his targets for 112 yards and a touchdown in the Saints' 31-9 win over the Cardinals on Sunday. He also lost nine yards on his sole rush.",
    "analysis": "Thomas paced the Saints in receptions and receiving yards on the afternoon, as he helped make Drew Brees' return to action from a thumb injury a highly successful one. The star receiver now has eclipsed 100 yards receiving in three of the past four games, and his double-digit target streak stands at four contests. With Brees back in the fold and clearly back to full health, the 26-year-old's upside is through the roof moving forward.",
    "timestamp": "2019-10-27 02:05 PM",
    "week01": 17.3,
    "week02": 13.9,
    "week03": 13.9,
    "week04": 14.0,
    "week05": 35.7,
    "week06": 12.9,
    "week07": 17.6,
    "week08": 21.8,
    "week09": "BYE",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [17.3, 13.9, 13.9, 14.0, 35.7, 12.9, 17.6, 21.8, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.1, 13.1, 10.6, 15.2, 15.0, 12.7, 12.9, 14.8, 'BYE', 16.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3045144.png",
    "name": "Tyler Boyd",
    "depthchart": "Starter: WR-1",
    "team": "Cincinnati Bengals",
    "projected": 15.4,
    "opponent": "Baltimore Ravens",
    "home_away": "",
    "opp_rank": 26,
    "team_rank": 12,
    "avg_fp2": 10.45,
    "opp_rank_allowed_fp2": 22,
    "opp_avg_allowed_fp2": 30.61,
    "fanduelSalary": "$5700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#ea7330",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(234, 115, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#ea7330",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cin.png",
    "headlineNews": "Tallies 68 yards in loss",
    "report": "Boyd caught six of nine targets for 65 yards and added a three-yard run during Sunday's 24-10 loss to the Rams.",
    "analysis": "Boyd came up with some heroics late in the fourth quarter, with Cincinnati facing 4th-and-long and behind two scores. The Pitt product split between defenders and came up with the 18-yard grab to convert. The Bengals failed to convert on fourth down again later in the drive. With A.J. Green (ankle) on the sidelines thus far this season, Boyd has been fed at least six targets in every game and double-digit targets in five of eight contests. That hasn't translated to much on the stat sheet, as Boyd has topped 70 yards just twice and scored just once. Next up, after the bye, is a Ravens defense that held Boyd to a season-low 10 yards in Week 6.",
    "timestamp": "2019-10-27 04:19 PM",
    "week01": 10.3,
    "week02": 17.2,
    "week03": 9.7,
    "week04": 4.8,
    "week05": 23.3,
    "week06": 2.5,
    "week07": 6.0,
    "week08": 9.8,
    "week09": "BYE",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.3, 17.2, 9.7, 4.8, 23.3, 2.5, 6.0, 9.8, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.5, 9.5, 10.5, 12.0, 10.6, 12.2, 9.8, 8.6, 'BYE', 15.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3120348.png",
    "name": "JuJu Smith-Schuster",
    "depthchart": "Starter: WR-1",
    "team": "Pittsburgh Steelers",
    "projected": 15.0,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank": 18,
    "team_rank": 27,
    "avg_fp2": 9.8,
    "opp_rank_allowed_fp2": 11,
    "opp_avg_allowed_fp2": 26.55,
    "fanduelSalary": "$6800",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Foot",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/pit.png",
    "headlineNews": "Listed as questionable",
    "report": "Smith-Schuster was limited by a foot injury at Friday's practice and is listed as questionable for Sunday's game against the Rams, Brian Batko of the Pittsburgh Post-Gazette reports.",
    "analysis": "Smith-Schuster didn't make an appearance on the Week 10 injury report until Friday, so his status bears watching in advance of Sunday's 4:25 p.m. ET kickoff. If he's able to take the field, he'll be looking to take advantage of a Rams defense that's been tough on wide receivers, allowing 8.0 yards per target, six touchdowns and the 11th-fewest fantasy points.",
    "timestamp": "2019-11-08 12:05 PM",
    "week01": 10.8,
    "week02": 10.9,
    "week03": 15.6,
    "week04": 3.0,
    "week05": 15.0,
    "week06": 1.2,
    "week07": "BYE",
    "week08": 18.8,
    "week09": 3.1,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.8, 10.9, 15.6, 3.0, 15.0, 1.2, 'BYE', 18.8, 3.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.4, 14.0, 11.7, 15.9, 19.7, 10.9, 'BYE', 14.1, 13.2, 15.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/5528.png",
    "name": "Larry Fitzgerald",
    "depthchart": "Backup: WR-2",
    "team": "Arizona Cardinals",
    "projected": 14.9,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "at ",
    "opp_rank": 31,
    "team_rank": 19,
    "avg_fp2": 9.06,
    "opp_rank_allowed_fp2": 32,
    "opp_avg_allowed_fp2": 37.91,
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
    "week09": 5.8,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [21.3, 12.9, 12.1, 7.2, 8.8, 9.9, 1.7, 1.8, 5.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.1, 14.5, 13.4, 9.2, 10.3, 18.3, 14.2, 12.6, 6.1, 14.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2976499.png",
    "name": "Amari Cooper",
    "depthchart": "Starter: WR-1",
    "team": "Dallas Cowboys",
    "projected": 14.6,
    "opponent": "Minnesota Vikings",
    "home_away": "",
    "opp_rank": 8,
    "team_rank": 4,
    "avg_fp2": 15.89,
    "opp_rank_allowed_fp2": 20,
    "opp_avg_allowed_fp2": 30.06,
    "fanduelSalary": "$7800",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Knee",
    "tmColorLite": "#7F9695",
    "tmColorDark": "#041E42",
    "tmColorLite_rgba": "rgba(127, 150, 149, 0.2)",
    "tmColorDark_rgba": "rgba(4, 30, 66, 0.2)",
    "tmTextLite": "#7F9695",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
    "headlineNews": "Questionable, but should play",
    "report": "Cooper (knee) is listed as questionable for Sunday's game against the Vikings, with the expectation that he will play, Michael Gehlken of The Dallas Morning News reports.",
    "analysis": "Cooper and Cowboys owner Jerry Jones both were optimistic when discussing the situation, and Cooper managed a pair of limited practices Wednesday and Friday. The wide receiver played at a high level after he suffered the knee injury in Monday's win over the Giants, so he should be in line for his usual role Sunday against Minnesota. Still, fantasy managers may want to have a replacement ready in case Cooper unexpectedly ends up on the inactive list approximately 90 minutes before Sunday's 8:20 p.m. ET kickoff.",
    "timestamp": "2019-11-08 12:18 PM",
    "week01": 19.6,
    "week02": 12.4,
    "week03": 23.8,
    "week04": 7.3,
    "week05": 34.1,
    "week06": 0.8,
    "week07": 13.1,
    "week08": "BYE",
    "week09": 16.0,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [19.6, 12.4, 23.8, 7.3, 34.1, 0.8, 13.1, 'BYE', 16.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.8, 12.8, 10.9, 11.4, 11.7, 10.3, 17.9, 'BYE', 22.3, 14.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3050661.png",
    "name": "Chris Godwin",
    "depthchart": "Backup: WR-2",
    "team": "Tampa Bay Buccaneers",
    "projected": 14.0,
    "opponent": "Arizona Cardinals",
    "home_away": "",
    "opp_rank": 29,
    "team_rank": 7,
    "avg_fp2": 17.8,
    "opp_rank_allowed_fp2": 23,
    "opp_avg_allowed_fp2": 30.87,
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
    "headlineNews": "Tallies seven grabs in Week 9 loss",
    "report": "Godwin brought in seven of nine targets for 61 yards in the Buccaneers' 40-34 overtime loss to the Seahawks on Sunday.",
    "analysis": "Godwin saw teammate Mike Evans once again steal the spotlight, with the latter turning double-digit targets into double-digit receptions for the second straight week. Godwin did check in second in receptions, receiving yards and targets to Evans, but he was once again utilized in much closer proximity to the line of scrimmage on his way to 8.7 yards per grab. While his final line wasn't particularly remarkable, Godwin did see a good bump in production after mustering a more modest 4-43 line in Week 8 versus the Titans. He'll look to boost his numbers further versus the Cardinals in Week 10.",
    "timestamp": "2019-11-03 07:16 PM",
    "week01": 12.8,
    "week02": 22.1,
    "week03": 5.5,
    "week04": 35.2,
    "week05": 28.0,
    "week06": 20.1,
    "week07": "BYE",
    "week08": 8.3,
    "week09": 10.4,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.8, 22.1, 5.5, 35.2, 28.0, 20.1, 'BYE', 8.3, 10.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.4, 6.8, 13.7, 7.9, 8.1, 8.6, 'BYE', 10.4, 13.9, 14.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2974858.png",
    "name": "Kenny Golladay",
    "depthchart": "Starter: WR-1",
    "team": "Detroit Lions",
    "projected": 14.0,
    "opponent": "Chicago Bears",
    "home_away": "at ",
    "opp_rank": 14,
    "team_rank": 3,
    "avg_fp2": 15.19,
    "opp_rank_allowed_fp2": 2,
    "opp_avg_allowed_fp2": 21.16,
    "fanduelSalary": "$7700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0076B6",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(0, 118, 182, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#0076B6",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/det.png",
    "headlineNews": "Sets season high in yardage",
    "report": "Golladay caught four of seven targets for 132 yards and a touchdown during Sunday's 31-24 loss to the Raiders.",
    "analysis": "After getting off to a bit of a slow start, Golladay made his presence felt with a 59-yard touchdown catch in the first quarter. He made a couple of other big plays and finished averaging 33.0 yards per catch while setting a season high in yardage. Golladay has been excellent over the last four games, averaging 99.3 receiving yards per game while scoring three times in that span. He'll look to keep it up next Sunday against the Bears.",
    "timestamp": "2019-11-03 05:18 PM",
    "week01": 12.2,
    "week02": 21.7,
    "week03": 2.7,
    "week04": 21.2,
    "week05": "BYE",
    "week06": 14.6,
    "week07": 2.6,
    "week08": 25.3,
    "week09": 21.2,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.2, 21.7, 2.7, 21.2, 'BYE', 14.6, 2.6, 25.3, 21.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.7, 9.7, 15.0, 11.4, 'BYE', 10.7, 9.0, 11.0, 10.6, 14.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2977187.png",
    "name": "Cooper Kupp",
    "depthchart": "Backup: WR-2",
    "team": "Los Angeles Rams",
    "projected": 14.0,
    "opponent": "Pittsburgh Steelers",
    "home_away": "at ",
    "opp_rank": 10,
    "team_rank": 4,
    "avg_fp2": 17.34,
    "opp_rank_allowed_fp2": 18,
    "opp_avg_allowed_fp2": 29.7,
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
    "headlineNews": "Dashes for long score",
    "report": "Kupp caught seven of 10 targets for 220 yards and a touchdown during Sunday's 24-10 win over Cincinnati.",
    "analysis": "The 220 yards were a career-high for the prolific young receiver. His biggest splash was in the second quarter, when Jared Goff made a throw to the outside off a double-reverse flea flicker and Kupp did the rest, galloping toward the end zone for a 65-yard score. The Rams have a lot of weapons on offense even if Brandin Cooks (concussion) misses some time, but Kupp has been on a different level this season while leading the team in catches, targets, yards and touchdowns as Jared Goff's security blanket. He's had at least 10 targets in five of eight games this season. After beating up on the hapless Bengals, Kupp and the Rams get the Steelers after the bye.",
    "timestamp": "2019-10-27 03:26 PM",
    "week01": 8.1,
    "week02": 15.1,
    "week03": 27.7,
    "week04": 22.4,
    "week05": 22.2,
    "week06": 3.7,
    "week07": 8.0,
    "week08": 31.5,
    "week09": "BYE",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.1, 15.1, 27.7, 22.4, 22.2, 3.7, 8.0, 31.5, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.7, 11.0, 6.5, 8.8, 10.4, 9.3, 7.5, 8.5, 'BYE', 14.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16800.png",
    "name": "Davante Adams",
    "depthchart": "Starter: WR-1",
    "team": "Green Bay Packers",
    "projected": 13.7,
    "opponent": "Carolina Panthers",
    "home_away": "",
    "opp_rank": 9,
    "team_rank": 12,
    "avg_fp2": 7.24,
    "opp_rank_allowed_fp2": 24,
    "opp_avg_allowed_fp2": 31.01,
    "fanduelSalary": "$7800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#d7a017",
    "tmColorDark": "#203731",
    "tmColorLite_rgba": "rgba(215, 160, 23, 0.2)",
    "tmColorDark_rgba": "rgba(32, 55, 49, 0.2)",
    "tmTextLite": "#d7a017",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png",
    "headlineNews": "Ready to go Sunday",
    "report": "Adams (toe) doesn't have a designation for Sunday's contest versus the Panthers, Rob Demovsky of ESPN.com reports.",
    "analysis": "Adams followed an LP/LP/LP practice regimen for the second week in a row, but his toe injury won't follow him into the weekend this time around. He'll thus be able to take aim at a Carolina defense that has given up 180 receiving yards per game and six total touchdowns to wideouts in eight games this season.",
    "timestamp": "2019-11-08 01:20 PM",
    "week01": 5.6,
    "week02": 14.1,
    "week03": 7.6,
    "week04": 23.0,
    "week05": 0.0,
    "week06": 0.0,
    "week07": "DNP",
    "week08": 0.0,
    "week09": 7.6,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.6, 14.1, 7.6, 23.0, 0.0, 0.0, 'DNP', 0.0, 7.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.7, 12.6, 11.3, 9.1, 7.4, 13.2, 'DNP', 5.7, 11.3, 13.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2577327.png",
    "name": "Tyler Lockett",
    "depthchart": "Starter: WR-1",
    "team": "Seattle Seahawks",
    "projected": 13.3,
    "opponent": "San Francisco 49ers",
    "home_away": "at ",
    "opp_rank": 1,
    "team_rank": 9,
    "avg_fp2": 15.71,
    "opp_rank_allowed_fp2": 6,
    "opp_avg_allowed_fp2": 22.52,
    "fanduelSalary": "$0",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Hip",
    "tmColorLite": "#69BE28",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(105, 190, 40, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#69BE28",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
    "headlineNews": "Limited by hip issue",
    "report": "Lockett was limited at Friday's practice due to a hip injury, John Boyle of the Seahawks' official site reports.",
    "analysis": "Lockett is making a sudden appearance on the Seahawks' practice report, indicating he may have picked up the concern at Friday's session. No matter when his health became compromised, his status should be monitored closely to get a sense of his availability for Monday's game in San Francisco, which may coincide with Josh Gordon's (ankle) debut with the team.",
    "timestamp": "2019-11-08 04:28 PM",
    "week01": 10.9,
    "week02": 12.9,
    "week03": 26.9,
    "week04": 7.1,
    "week05": 12.3,
    "week06": 10.3,
    "week07": 14.3,
    "week08": 13.0,
    "week09": 33.7,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.9, 12.9, 26.9, 7.1, 12.3, 10.3, 14.3, 13.0, 33.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.2, 11.6, 8.8, 15.3, 11.0, 8.7, 12.6, 10.6, 15.6, 13.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13295.png",
    "name": "Emmanuel Sanders",
    "depthchart": "Starter: WR-1",
    "team": "San Francisco 49ers",
    "projected": 13.1,
    "opponent": "Seattle Seahawks",
    "home_away": "",
    "opp_rank": 28,
    "team_rank": 22,
    "avg_fp2": 10.77,
    "opp_rank_allowed_fp2": 19,
    "opp_avg_allowed_fp2": 29.9,
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
    "week09": 20.7,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [17.1, 23.3, 2.0, 'BYE', 1.4, 0.5, 8.5, 10.5, 20.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.3, 10.0, 11.1, 'BYE', 10.8, 7.0, 6.9, 8.1, 13.5, 13.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2574808.png",
    "name": "Robby Anderson",
    "depthchart": "Starter: WR-1",
    "team": "New York Jets",
    "projected": 13.1,
    "opponent": "New York Giants",
    "home_away": "",
    "opp_rank": 25,
    "team_rank": 32,
    "avg_fp2": 6.46,
    "opp_rank_allowed_fp2": 29,
    "opp_avg_allowed_fp2": 34.62,
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
    "headlineNews": "Limited involvement in Miami",
    "report": "Anderson caught two of four targets for 33 yards in Sunday's 26-18 loss to the Dolphins.",
    "analysis": "Quarterback Sam Darnold just missed connecting with Anderson on a pair of potential chunk plays, but the bottom line is that Anderson delivered a dud despite facing a putrid Dolphins team. New York now sports an identical 1-7 record to the Dolphins and has actually been worse offensively, so it's tough to trust anybody on that side of the ball for the Jets. It wouldn't be surprising to see Anderson break free for some big gains against a vulnerable Giants secondary in Week 10, but another poor performance like this one is just as likely.",
    "timestamp": "2019-11-03 01:31 PM",
    "week01": 3.8,
    "week02": 10.1,
    "week03": 2.6,
    "week04": "BYE",
    "week05": 2.1,
    "week06": 21.0,
    "week07": 1.5,
    "week08": 6.3,
    "week09": 4.3,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.8, 10.1, 2.6, 'BYE', 2.1, 21.0, 1.5, 6.3, 4.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.6, 7.5, 9.5, 'BYE', 10.6, 6.9, 9.4, 9.7, 13.2, 13.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16733.png",
    "name": "Odell Beckham Jr.",
    "depthchart": "Starter: WR-1",
    "team": "Cleveland Browns",
    "projected": 12.7,
    "opponent": "Buffalo Bills",
    "home_away": "",
    "opp_rank": 3,
    "team_rank": 17,
    "avg_fp2": 10.35,
    "opp_rank_allowed_fp2": 3,
    "opp_avg_allowed_fp2": 21.41,
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
    "headlineNews": "Leads team in receiving yards",
    "report": "Beckham caught five of six targets for a team-high 87 yards in Sunday's 24-19 loss to the Broncos.",
    "analysis": "After a quiet first half, Beckham may some big runs after the catch in the fourth quarter as the Browns tried to mount a comeback, but it was the target he didn't get that will linger -- on a fourth down in Denver territory, Beckham seemed to have Chris Harris beat down the sideline for what might have been the go-ahead TD, only for Baker Mayfield to instead try to squeeze the ball in to Jarvis Landry over the middle and have it fall incomplete. Through eight games, Beckham is on pace for his fifth career 1000-yard campaign, but his one touchdown is far below his usual production from his Giants days.",
    "timestamp": "2019-11-03 06:42 PM",
    "week01": 10.6,
    "week02": 25.1,
    "week03": 8.6,
    "week04": 3.0,
    "week05": 4.0,
    "week06": 13.1,
    "week07": "BYE",
    "week08": 7.7,
    "week09": 10.7,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.6, 25.1, 8.6, 3.0, 4.0, 13.1, 'BYE', 7.7, 10.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [16.4, 20.6, 14.5, 19.3, 15.5, 11.6, 'BYE', 14.1, 10.4, 12.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2978109.png",
    "name": "Zach Pascal",
    "depthchart": "Starter: WR-1",
    "team": "Indianapolis Colts",
    "projected": 12.7,
    "opponent": "Miami Dolphins",
    "home_away": "",
    "opp_rank": 20,
    "team_rank": 23,
    "avg_fp2": 8.35,
    "opp_rank_allowed_fp2": 25,
    "opp_avg_allowed_fp2": 32.29,
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
    "headlineNews": "Takes over as leading receiver",
    "report": "Pascal recorded five receptions on six targets for 76 yards and a touchdown in Week 9 against the Steelers.",
    "analysis": "Pascal entered the game among a committee of receivers that hoped to replace T.Y. Hilton's (calf) production. He did so successfully, leading the team in targets, receptions and yards. In the process, he showed rapport with both Jacoby Brissett (knee) and Brian Hoye in a performance highlighted by a 14-yard score late in the second quarter. However, he also connected for long receptions of 17, 18 and 19 yards to turn in his second-highest yardage total of the season. While Pascal has seen inconsistent volume throughout the campaign, he should be among the team's top receivers so long as Hilton remains sidelined.",
    "timestamp": "2019-11-03 05:23 PM",
    "week01": 0.0,
    "week02": 0.0,
    "week03": 12.3,
    "week04": 9.2,
    "week05": 2.5,
    "week06": "BYE",
    "week07": 25.6,
    "week08": 1.1,
    "week09": 16.1,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 0.0, 12.3, 9.2, 2.5, 'BYE', 25.6, 1.1, 16.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [-1.2, 1.5, 1.8, 1.5, 0.8, 'BYE', 5.4, 6.8, 8.5, 12.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16799.png",
    "name": "Allen Robinson",
    "depthchart": "Starter: WR-1",
    "team": "Chicago Bears",
    "projected": 12.2,
    "opponent": "Detroit Lions",
    "home_away": "",
    "opp_rank": 30,
    "team_rank": 30,
    "avg_fp2": 11.84,
    "opp_rank_allowed_fp2": 21,
    "opp_avg_allowed_fp2": 30.41,
    "fanduelSalary": "$7100",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#c36835",
    "tmColorDark": "#0B162A",
    "tmColorLite_rgba": "rgba(195, 104, 53, 0.2)",
    "tmColorDark_rgba": "rgba(11, 22, 42, 0.2)",
    "tmTextLite": "#c36835",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/chi.png",
    "headlineNews": "Worst performance of season",
    "report": "Robinson caught one pass for six yards in the Bears' 22-14 loss to the Eagles on Sunday.",
    "analysis": "Despite facing one of the weaker pass defenses in the league, Mitchell Trubisky threw for just 125 yards, which certainly limited any upside for Robinson. He had an opportunity for potential long touchdown after he ran past the cornererback, but Trubisky underthrew the pass, resulting in an incompletion. This was the first time he posted fewer than 60 yards since Week 2, and he still should be considered a solid weekly lineup option.",
    "timestamp": "2019-11-03 02:10 PM",
    "week01": 13.7,
    "week02": 6.1,
    "week03": 9.0,
    "week04": 11.2,
    "week05": 25.2,
    "week06": "BYE",
    "week07": 19.7,
    "week08": 8.7,
    "week09": 1.1,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [13.7, 6.1, 9.0, 11.2, 25.2, 'BYE', 19.7, 8.7, 1.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [12.1, 15.0, 10.9, 9.7, 11.8, 'BYE', 7.1, 11.0, 11.7, 12.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3921564.png",
    "name": "Auden Tate",
    "depthchart": "Backup: WR-2",
    "team": "Cincinnati Bengals",
    "projected": 11.7,
    "opponent": "Baltimore Ravens",
    "home_away": "",
    "opp_rank": 26,
    "team_rank": 12,
    "avg_fp2": 8.09,
    "opp_rank_allowed_fp2": 22,
    "opp_avg_allowed_fp2": 30.61,
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
    "headlineNews": "Makes highlight reel catch",
    "report": "Tate caught five of 13 targets for 65 yards during Sunday's 24-10 loss to the Rams.",
    "analysis": "With the Bengals down by two scores and facing 4th-and-10, Andy Dalton tossed it up for Tate, who hauled it in for a 27-yard conversion. The sophomore target continues to be a bright spot on a winless Bengals team with little for which to cheer. Tate has either scored or tallied at least 50 yards in six consecutive games, and, after the bye, gets a Ravens defense that surrendered a career-high 91 yards to him in Week 6, though it's worth noting A.J. Green (ankle) should be back at some point if he doesn't get traded.",
    "timestamp": "2019-10-27 04:05 PM",
    "week01": "DNP",
    "week02": 1.1,
    "week03": 9.8,
    "week04": 7.0,
    "week05": 10.1,
    "week06": 11.6,
    "week07": 8.0,
    "week08": 9.0,
    "week09": "BYE",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 1.1, 9.8, 7.0, 10.1, 11.6, 8.0, 9.0, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 2.8, 2.8, 5.6, 7.7, 6.9, 7.4, 6.1, 'BYE', 11.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13217.png",
    "name": "Golden Tate",
    "depthchart": "Starter: WR-1",
    "team": "New York Giants",
    "projected": 11.5,
    "opponent": "New York Jets",
    "home_away": "at ",
    "opp_rank": 24,
    "team_rank": 18,
    "avg_fp2": 10.86,
    "opp_rank_allowed_fp2": 26,
    "opp_avg_allowed_fp2": 33.05,
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
    "headlineNews": "Catches all his targets",
    "report": "Tate caught all six of his targets for 42 yards in Monday night's 37-18 loss to the Giants. He also rushed once for 16 yards.",
    "analysis": "Tate's performance included a highlight-reel, one-handed reception along the sideline to convert a third-and-14 early in the second quarter. In fact, besides a 65-yard catch-and-run by Saquon Barkley in the second half, Tate aforementioned circus grab of 17 yards marked New York's longest reception of the night. With rookie quarterback Daniel Jones underwhelming Monday, Tate was unable to post a fourth straight game with at least 80 yards. His impressive consistency when called upon, however, should keep him as one of Jones' favorite options in Week 10 versus the Jets, especially if Sterling Shepard (concussion) remains sidelined.",
    "timestamp": "2019-11-04 09:55 PM",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": 2.8,
    "week06": 19.2,
    "week07": 11.0,
    "week08": 12.5,
    "week09": 8.8,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 2.8, 19.2, 11.0, 12.5, 8.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 7.2, 9.0, 11.5, 12.4, 10.8, 11.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15880.png",
    "name": "Robert Woods",
    "depthchart": "Starter: WR-1",
    "team": "Los Angeles Rams",
    "projected": 11.1,
    "opponent": "Pittsburgh Steelers",
    "home_away": "at ",
    "opp_rank": 10,
    "team_rank": 4,
    "avg_fp2": 9.9,
    "opp_rank_allowed_fp2": 18,
    "opp_avg_allowed_fp2": 29.7,
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
    "headlineNews": "Quiet in Week 8 win",
    "report": "Woods caught both his targets for 31 yards and rushed four times for six yards during Sunday's 24-10 win over Cincinnati.",
    "analysis": "Woods was overshadowed by Cooper Kupp's seven-catch, 220-yard showing, and it was also No. 4 receiver Josh Reynolds who benefited most from Brandin Cooks exiting with a concussion. Reynolds turned his eight targets into three receptions, 73 yards and a touchdown. Woods has struggled to make a fantasy impact this year, as he's been held below 80 receiving yards in six of eight games and is still looking for his first touchdown.",
    "timestamp": "2019-10-28 11:54 AM",
    "week01": 12.6,
    "week02": 5.2,
    "week03": 7.3,
    "week04": 22.9,
    "week05": 7.3,
    "week06": 7.6,
    "week07": 11.1,
    "week08": 5.2,
    "week09": "BYE",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.6, 5.2, 7.3, 22.9, 7.3, 7.6, 11.1, 5.2, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.9, 14.0, 8.3, 11.9, 14.4, 10.9, 9.0, 9.6, 'BYE', 11.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3124537.png",
    "name": "KeeSean Johnson",
    "depthchart": "Reserve: WR-3",
    "team": "Arizona Cardinals",
    "projected": 10.8,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "at ",
    "opp_rank": 31,
    "team_rank": 19,
    "avg_fp2": 4.39,
    "opp_rank_allowed_fp2": 32,
    "opp_avg_allowed_fp2": 37.91,
    "fanduelSalary": "$4600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#97233F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(151, 35, 63, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#97233F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
    "headlineNews": "First career scoring grab",
    "report": "Johnson secured two of three targets for 22 yards and a touchdown in the Cardinals' 28-25 loss to the 49ers on Thursday.",
    "analysis": "A healthy inactive just four days prior in Week 8, Johnson made an impact Thursday with a nine-yard touchdown grab early in the third quarter. The rookie hasn't come close to matching his 5-46 line from Week 1 against the Lions, and despite logging his first career touchdown Thursday, his production will remain hard to trust in Week 10 against the Buccaneers.",
    "timestamp": "2019-10-31 10:06 PM",
    "week01": 7.1,
    "week02": 5.6,
    "week03": 2.8,
    "week04": 2.9,
    "week05": 4.0,
    "week06": 2.4,
    "week07": 1.1,
    "week08": "DNP",
    "week09": 9.2,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.1, 5.6, 2.8, 2.9, 4.0, 2.4, 1.1, 'DNP', 9.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [0.4, 3.1, 2.0, 2.0, 4.7, 9.2, 5.1, 'DNP', 0.6, 10.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3045138.png",
    "name": "Mike Williams",
    "depthchart": "Backup: WR-2",
    "team": "Los Angeles Chargers",
    "projected": 10.8,
    "opponent": "Oakland Raiders",
    "home_away": "at ",
    "opp_rank": 32,
    "team_rank": 6,
    "avg_fp2": 8.46,
    "opp_rank_allowed_fp2": 31,
    "opp_avg_allowed_fp2": 35.2,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.9, 9.8, 6.0, 'DNP', 10.4, 9.7, 6.7, 8.4, 12.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.2, 9.4, 8.1, 'DNP', 5.5, 6.8, 6.1, 5.9, 6.4, 10.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16725.png",
    "name": "Sammy Watkins",
    "depthchart": "Backup: WR-2",
    "team": "Kansas City Chiefs",
    "projected": 10.1,
    "opponent": "Tennessee Titans",
    "home_away": "at ",
    "opp_rank": 17,
    "team_rank": 2,
    "avg_fp2": 11.54,
    "opp_rank_allowed_fp2": 10,
    "opp_avg_allowed_fp2": 25.28,
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
    "headlineNews": "Solid catch total in win",
    "report": "Watkins secured seven of 10 targets for 63 yards in the Chiefs' 26-23 win over the Vikings on Sunday.",
    "analysis": "Watkins co-led the Chiefs in receptions alongside Travis Kelce while checking in behind only fellow wideout Tyreek Hill in receiving yardage. Watkins has 12 receptions over his two games since returning from injury, and Sunday's game marked his third with a double-digit target tally this season. Watkins will look to get back into the end zone for the first time since Week 1 when he faces the Titans on the road Week 10 with Patrick Mahomes (knee) likely back under center for Kansas City.",
    "timestamp": "2019-11-03 02:39 PM",
    "week01": 42.3,
    "week02": 7.9,
    "week03": 8.9,
    "week04": 4.9,
    "week05": 0.0,
    "week06": "DNP",
    "week07": "DNP",
    "week08": 7.0,
    "week09": 9.8,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [42.3, 7.9, 8.9, 4.9, 0.0, 'DNP', 'DNP', 7.0, 9.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.1, 12.6, 12.3, 15.8, 10.2, 'DNP', 'DNP', 10.4, 7.8, 10.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3916945.png",
    "name": "Darius Slayton",
    "depthchart": "Backup: WR-2",
    "team": "New York Giants",
    "projected": 9.9,
    "opponent": "New York Jets",
    "home_away": "at ",
    "opp_rank": 24,
    "team_rank": 18,
    "avg_fp2": 7.69,
    "opp_rank_allowed_fp2": 26,
    "opp_avg_allowed_fp2": 33.05,
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
    "headlineNews": "High snap count, minimal production",
    "report": "Slayton caught one of four targets for six yards in Monday's 37-18 loss to the Cowboys.",
    "analysis": "Slayton started the contest and played 67 of 72 offensive snaps (93 percent), but he saw his fewest receptions and yards of the season. This dud comes after the rookie fifth-round pick posted two touchdowns in Week 8 against the Lions. Slayton didn't draw much attention despite Daniel Jones heaving 41 passes, but he has a good chance to turn it around against the Jets' suspect secondary in Week 10.",
    "timestamp": "2019-11-05 01:07 PM",
    "week01": "DNP",
    "week02": "DNP",
    "week03": 9.7,
    "week04": 2.3,
    "week05": 14.2,
    "week06": 4.7,
    "week07": 3.8,
    "week08": 18.0,
    "week09": 1.1,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 9.7, 2.3, 14.2, 4.7, 3.8, 18.0, 1.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 1.6, 8.3, 6.0, 7.3, 9.9, 9.6, 5.4, 9.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3915416.png",
    "name": "D.J. Moore",
    "depthchart": "Starter: WR-1",
    "team": "Carolina Panthers",
    "projected": 9.8,
    "opponent": "Green Bay Packers",
    "home_away": "at ",
    "opp_rank": 21,
    "team_rank": 25,
    "avg_fp2": 10.68,
    "opp_rank_allowed_fp2": 8,
    "opp_avg_allowed_fp2": 24.56,
    "fanduelSalary": "$5800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#0085CA",
    "tmColorDark": "#101820",
    "tmColorLite_rgba": "rgba(0, 133, 202, 0.2)",
    "tmColorDark_rgba": "rgba(16, 24, 32, 0.2)",
    "tmTextLite": "#0085CA",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/car.png",
    "headlineNews": "Surpasses 100 receiving yards",
    "report": "Moore hauled in seven of his 10 targets for 101 yards in Week 9 against the Titans.",
    "analysis": "Moore took advantage of being targeted at least 10 times for the first time with Kyle Allen under center by turning in his first 100-yard receiving game of the season. He relied on four catches of more than 10 yards for the majority of his production, narrowly missing out on a touchdown on a 32 yard-reception when he was pushed out of bounds one yard shy of the end zone. While this was an encouraging performance from Moore, the Panthers will continue to rely on their defense and run game -- particularly Christian McCaffrey -- to win games, meaning Moore's target volume figures to remain volatile.",
    "timestamp": "2019-11-03 03:34 PM",
    "week01": 9.1,
    "week02": 13.4,
    "week03": 12.9,
    "week04": 5.9,
    "week05": 12.1,
    "week06": 12.1,
    "week07": "BYE",
    "week08": 6.3,
    "week09": 13.6,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.1, 13.4, 12.9, 5.9, 12.1, 12.1, 'BYE', 6.3, 13.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.8, 11.0, 13.5, 13.1, 9.7, 16.9, 'BYE', 7.3, 10.7, 9.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15072.png",
    "name": "Marvin Jones",
    "depthchart": "Backup: WR-2",
    "team": "Detroit Lions",
    "projected": 9.6,
    "opponent": "Chicago Bears",
    "home_away": "at ",
    "opp_rank": 14,
    "team_rank": 3,
    "avg_fp2": 13.86,
    "opp_rank_allowed_fp2": 2,
    "opp_avg_allowed_fp2": 21.16,
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
    "headlineNews": "Finds end zone in loss to Raiders",
    "report": "Jones caught eight of 10 targets for 126 yards and a touchdown during Sunday's 31-24 loss to the Raiders.",
    "analysis": "Jones led the team in targets while averaging a healthy 15.8 yards per catch. He broke off a season-long 47-yard gain to help him get there and added a two-yard touchdown reception to give him six scores through eight games in 2019. Jones is on pace for one of the best statistical seasons of his career and will look to keep it up next Sunday against the Bears.",
    "timestamp": "2019-11-03 05:29 PM",
    "week01": 8.0,
    "week02": 6.8,
    "week03": 19.1,
    "week04": 9.2,
    "week05": "BYE",
    "week06": 2.7,
    "week07": 38.3,
    "week08": 4.2,
    "week09": 22.6,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.0, 6.8, 19.1, 9.2, 'BYE', 2.7, 38.3, 4.2, 22.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.1, 7.1, 11.6, 6.6, 'BYE', 8.0, 7.2, 7.4, 7.0, 9.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2976212.png",
    "name": "Stefon Diggs",
    "depthchart": "Starter: WR-1",
    "team": "Minnesota Vikings",
    "projected": 9.4,
    "opponent": "Dallas Cowboys",
    "home_away": "at ",
    "opp_rank": 7,
    "team_rank": 16,
    "avg_fp2": 12.32,
    "opp_rank_allowed_fp2": 5,
    "opp_avg_allowed_fp2": 21.88,
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
    "headlineNews": "Shockingly shut down in loss",
    "report": "Diggs brought in just one of four targets for four yards in the Vikings' 26-23 loss to the Chiefs on Sunday.",
    "analysis": "Even with teammate Adam Thielen exiting the game in the first half after reinjuring his hamstring, Diggs was a complete non-factor in the contest. The speedy wideout was well contained by the Chiefs secondary all afternoon, and his receptions and receiving yardage were both season lows. Diggs had come into the contest with a three-game streak of 100-yard performances, so fantasy managers should expect a resurgence to some degree Week 10 versus the Cowboys.",
    "timestamp": "2019-11-03 02:50 PM",
    "week01": 4.7,
    "week02": 9.4,
    "week03": 3.0,
    "week04": 12.3,
    "week05": 5.9,
    "week06": 40.0,
    "week07": 17.7,
    "week08": 15.8,
    "week09": 2.1,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.7, 9.4, 3.0, 12.3, 5.9, 40.0, 17.7, 15.8, 2.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [13.5, 5.4, 10.7, 7.0, 8.8, 6.1, 9.7, 10.6, 9.2, 9.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3925357.png",
    "name": "Calvin Ridley",
    "depthchart": "Backup: WR-2",
    "team": "Atlanta Falcons",
    "projected": 9.4,
    "opponent": "New Orleans Saints",
    "home_away": "at ",
    "opp_rank": 12,
    "team_rank": 1,
    "avg_fp2": 10.85,
    "opp_rank_allowed_fp2": 19,
    "opp_avg_allowed_fp2": 29.56,
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
    "headlineNews": "Solid Week 8 despite injury scare",
    "report": "Ridley (head) had to be evaluated for a concussion midway through Sunday's 27-20 loss to Seattle, but he was able to reenter the game and accumulate four receptions for 70 yards on seven targets.",
    "analysis": "Ridley was coming off a disappointing four-catch, 30-yard outing in his prior showing, but he was able to produce two explosive plays of 19-plus yards Sunday, while also pitching in a successful two-point conversion during Atlanta's opening drive of the second half. His four touchdowns to the midway point of 2019 are impressive, but Ridley is averaging per-game outputs of fewer than 3.5 catches and 35 receiving yards in his four appearances without a touchdown this season. He may not need a score to provide another respectable fantasy output when the Falcons return to the field Nov. 10, facing a Saints defense that entered Week 8 as a bottom-eight unit in both receiving yards (1,252) and receiving touchdowns (nine) allowed to opposing wideouts.",
    "timestamp": "2019-10-27 04:24 PM",
    "week01": 14.4,
    "week02": 20.5,
    "week03": 1.1,
    "week04": 4.7,
    "week05": 17.3,
    "week06": 12.8,
    "week07": 5.0,
    "week08": 11.0,
    "week09": "BYE",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.4, 20.5, 1.1, 4.7, 17.3, 12.8, 5.0, 11.0, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.8, 12.9, 8.5, 9.7, 9.4, 10.7, 13.2, 8.4, 'BYE', 9.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14053.png",
    "name": "Randall Cobb",
    "depthchart": "Reserve: WR-3",
    "team": "Dallas Cowboys",
    "projected": 9.2,
    "opponent": "Minnesota Vikings",
    "home_away": "",
    "opp_rank": 8,
    "team_rank": 4,
    "avg_fp2": 6.43,
    "opp_rank_allowed_fp2": 20,
    "opp_avg_allowed_fp2": 30.06,
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
    "headlineNews": "Six catches in win",
    "report": "Cobb caught six of eight targets for 35 yards in Monday's win over the Giants.",
    "analysis": "He could have had an even bigger night from a fantasy perspective, but Cobb had what would have been his second TD of the season wiped out by a holding penalty. The veteran slot receiver has caught a modest 25 passes on 38 targets for 274 yards through seven games.",
    "timestamp": "2019-11-05 07:30 AM",
    "week01": 14.9,
    "week02": 6.0,
    "week03": 3.3,
    "week04": 5.6,
    "week05": 6.8,
    "week06": "DNP",
    "week07": 3.9,
    "week08": "BYE",
    "week09": 4.5,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.9, 6.0, 3.3, 5.6, 6.8, 'DNP', 3.9, 'BYE', 4.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.0, 5.8, 7.6, 4.5, 5.9, 'DNP', 10.0, 'BYE', 14.4, 9.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3121427.png",
    "name": "Curtis Samuel",
    "depthchart": "Backup: WR-2",
    "team": "Carolina Panthers",
    "projected": 9.2,
    "opponent": "Green Bay Packers",
    "home_away": "at ",
    "opp_rank": 21,
    "team_rank": 25,
    "avg_fp2": 10.54,
    "opp_rank_allowed_fp2": 8,
    "opp_avg_allowed_fp2": 24.56,
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
    "headlineNews": "Cleared for Sunday",
    "report": "Samuel (hamstring) doesn't have an injury designation for Sunday's game in Green Bay.",
    "analysis": "Held out of Wednesday's practice, Samuel returned Thursday and Friday as a full participant. He should be ready for his usual role Sunday against the Packers, facing a secondary that has a pair of starters -- Adrian Amos (hamstring) and Jaire Alexander (groin) -- listed as questionable.",
    "timestamp": "2019-11-08 02:32 PM",
    "week01": 4.7,
    "week02": 11.8,
    "week03": 13.8,
    "week04": 4.8,
    "week05": 5.9,
    "week06": 21.8,
    "week07": "BYE",
    "week08": 6.6,
    "week09": 14.9,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.7, 11.8, 13.8, 4.8, 5.9, 21.8, 'BYE', 6.6, 14.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.3, 7.1, 11.0, 11.2, 9.5, 11.1, 'BYE', 6.4, 8.6, 9.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16790.png",
    "name": "Jarvis Landry",
    "depthchart": "Backup: WR-2",
    "team": "Cleveland Browns",
    "projected": 9.1,
    "opponent": "Buffalo Bills",
    "home_away": "",
    "opp_rank": 3,
    "team_rank": 17,
    "avg_fp2": 10.06,
    "opp_rank_allowed_fp2": 3,
    "opp_avg_allowed_fp2": 21.41,
    "fanduelSalary": "$6000",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FF3C00",
    "tmColorDark": "#311D00",
    "tmColorLite_rgba": "rgba(255, 60, 0, 0.2)",
    "tmColorDark_rgba": "rgba(49, 29, 0, 0.2)",
    "tmTextLite": "#FF3C00",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
    "headlineNews": "Scores first TD in loss",
    "report": "Landry caught six of 13 targets for 51 yards and a touchdown in Sunday's 24-19 loss to the Broncos.",
    "analysis": "The catches and targets led the Browns on the afternoon, while Landry's fourth-quarter TD was his first trip to the end zone this season. It's the third time this season he's seen double-digit targets, and the veteran WR remains the receiver Baker Mayfield is the most comfortable throwing to -- Landry was the intended recipient of a fourth-down toss that proved to be the Browns' final offensive play of the game. Through eight games, he's on pace for his first 1,000-yard campaign since 2016.",
    "timestamp": "2019-11-03 06:46 PM",
    "week01": 9.7,
    "week02": 4.7,
    "week03": 7.7,
    "week04": 20.7,
    "week05": 9.5,
    "week06": 5.1,
    "week07": "BYE",
    "week08": 9.0,
    "week09": 14.1,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.7, 4.7, 7.7, 20.7, 9.5, 5.1, 'BYE', 9.0, 14.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.0, 11.8, 6.6, 11.2, 7.8, 6.8, 'BYE', 8.5, 6.0, 9.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4241372.png",
    "name": "Marquise Brown",
    "depthchart": "Starter: WR-1",
    "team": "Baltimore Ravens",
    "projected": 8.9,
    "opponent": "Cincinnati Bengals",
    "home_away": "at ",
    "opp_rank": 22,
    "team_rank": 20,
    "avg_fp2": 11.23,
    "opp_rank_allowed_fp2": 14,
    "opp_avg_allowed_fp2": 28.49,
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
    "headlineNews": "Listed as questionable, per usual",
    "report": "Brown (ankle/thigh) is listed as questionable for Sunday's game in Cincinnati, Jeff Zrebiec of The Athletic reports.",
    "analysis": "A Friday addition to the injury report might normally be concerning, but the Ravens have frequently limited Brown's end-of-week practice workload, and he's already played through a 'questionable' tag three times this season. Jamison Hensley of ESPN.com believes reserve wideout Chris Moore (thumb) is the only player on Baltimore's injury report in any real danger of missing Week 10. Even so, it wouldn't be bad idea to check back in Sunday morning when the Ravens release their inactive list for Sunday's 1:00 p.m. ET kickoff in Cincinnati.",
    "timestamp": "2019-11-08 11:45 AM",
    "week01": 28.7,
    "week02": 12.6,
    "week03": 5.9,
    "week04": 4.2,
    "week05": 9.7,
    "week06": "DNP",
    "week07": "DNP",
    "week08": "BYE",
    "week09": 6.3,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [28.7, 12.6, 5.9, 4.2, 9.7, 'DNP', 'DNP', 'BYE', 6.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.6, 14.5, 10.2, 15.1, 9.6, 'DNP', 'DNP', 'BYE', 6.3, 8.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13216.png",
    "name": "Demaryius Thomas",
    "depthchart": "Backup: WR-2",
    "team": "New York Jets",
    "projected": 8.2,
    "opponent": "New York Giants",
    "home_away": "",
    "opp_rank": 25,
    "team_rank": 32,
    "avg_fp2": 6.46,
    "opp_rank_allowed_fp2": 29,
    "opp_avg_allowed_fp2": 34.62,
    "fanduelSalary": "$4700",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Hamstring",
    "tmColorLite": "#125740",
    "tmColorDark": "#003f2d",
    "tmColorLite_rgba": "rgba(18, 87, 64, 0.2)",
    "tmColorDark_rgba": "rgba(0, 63, 45, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png",
    "headlineNews": "Listed as questionable this week",
    "report": "Thomas (hamstring) is listed as questionable for Sunday's game against the Giants after practicing in a limited fashion this week, Rich Cimini of ESPN.com reports.",
    "analysis": "Despite the questionable tag, we expect Thomas to be a go for Sunday's 1:00 ET kickoff. Given that he's been starting and logging regular snaps for the Jets, Thomas offers modest PPR utility these days. Six games into his 2019 season, the veteran wideout is averaging 3.2 catches for 38.7 yards, but has yet to find the end zone.",
    "timestamp": "2019-11-08 01:33 PM",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "BYE",
    "week05": 6.7,
    "week06": 8.2,
    "week07": 5.7,
    "week08": 8.8,
    "week09": 2.9,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'BYE', 6.7, 8.2, 5.7, 8.8, 2.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'BYE', 8.1, 6.4, 7.1, 9.1, 13.6, 8.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16804.png",
    "name": "John Brown",
    "depthchart": "Starter: WR-1",
    "team": "Buffalo Bills",
    "projected": 8.2,
    "opponent": "Cleveland Browns",
    "home_away": "at ",
    "opp_rank": 6,
    "team_rank": 26,
    "avg_fp2": 11.71,
    "opp_rank_allowed_fp2": 13,
    "opp_avg_allowed_fp2": 26.91,
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
    "headlineNews": "Game's leading receiver in Week 9",
    "report": "Brown corralled four of seven targets for 76 receiving yards during Sunday's 24-9 win against the Redskins.",
    "analysis": "The 29-year-old wideout has proven to be a high-floor fantasy option through the midway point of 2019, having accounted for at least five receptions or 50 receiving yards in each of his eight appearances thus far this season. While he is a low-risk play, Brown's upside is also slightly limited, as he has just two touchdowns and one performance of 100-plus yards on the year. He isn't expected to explode in Week 10, with the Bills taking on a Browns defense that entered Sunday as a top-10 unit against the pass with 222.1 yards allowed per game through the air.",
    "timestamp": "2019-11-03 02:57 PM",
    "week01": 21.8,
    "week02": 10.7,
    "week03": 7.5,
    "week04": 9.4,
    "week05": 10.0,
    "week06": "BYE",
    "week07": 16.8,
    "week08": 7.9,
    "week09": 9.6,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [21.8, 10.7, 7.5, 9.4, 10.0, 'BYE', 16.8, 7.9, 9.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.9, 13.9, 12.6, 10.2, 9.6, 'BYE', 11.3, 7.9, 9.5, 8.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2983209.png",
    "name": "Chester Rogers",
    "depthchart": "Backup: WR-2",
    "team": "Indianapolis Colts",
    "projected": 8.2,
    "opponent": "Miami Dolphins",
    "home_away": "",
    "opp_rank": 20,
    "team_rank": 23,
    "avg_fp2": 3.56,
    "opp_rank_allowed_fp2": 25,
    "opp_avg_allowed_fp2": 32.29,
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
    "headlineNews": "Three receptions, one TD Sunday",
    "report": "Rogers had three receptions for 22 yards, including a four-yard touchdown, on five targets in Sunday's 26-24 loss at Kansas City.",
    "analysis": "Rogers got the start again as the slot receiver in three-receiver sets and got his usual playing time (46 of the offense's 70 snaps) but saw a few more targets with T.Y. Hilton sidelined with a calf injury.",
    "timestamp": "2019-11-04 12:42 PM",
    "week01": 0.0,
    "week02": 3.9,
    "week03": 0.0,
    "week04": 12.3,
    "week05": 0.0,
    "week06": "BYE",
    "week07": 3.4,
    "week08": 1.2,
    "week09": 7.7,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 3.9, 0.0, 12.3, 0.0, 'BYE', 3.4, 1.2, 7.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.0, 2.1, 5.3, 0.7, 2.6, 'BYE', 2.6, 2.8, 5.5, 8.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2587819.png",
    "name": "Tyrell Williams",
    "depthchart": "Starter: WR-1",
    "team": "Oakland Raiders",
    "projected": 7.8,
    "opponent": "Los Angeles Chargers",
    "home_away": "",
    "opp_rank": 5,
    "team_rank": 15,
    "avg_fp2": 12.83,
    "opp_rank_allowed_fp2": 9,
    "opp_avg_allowed_fp2": 24.98,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [19.5, 13.1, 10.4, 11.1, 'DNP', 'BYE', 'DNP', 16.6, 6.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.9, 14.7, 6.7, 11.6, 'DNP', 'BYE', 'DNP', 13.9, 14.9, 7.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/10453.png",
    "name": "Ted Ginn",
    "depthchart": "Backup: WR-2",
    "team": "New Orleans Saints",
    "projected": 7.8,
    "opponent": "Atlanta Falcons",
    "home_away": "",
    "opp_rank": 23,
    "team_rank": 11,
    "avg_fp2": 5.86,
    "opp_rank_allowed_fp2": 29,
    "opp_avg_allowed_fp2": 35.04,
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
    "headlineNews": "Pair of catches in win",
    "report": "Ginn secured both of his targets for 42 yards in the Saints' 31-9 win over the Cardinals on Sunday.",
    "analysis": "Ginn played a minor role in Drew Brees' return to action, as Michael Thomas and Latavius Murray hauled in 20 of Drew Brees' 34 completions. Ginn will continue to play the big-play downfield role on the majority of weeks, with the occasional spike in receptions depending on matchup and game plan. Ginn will look to up his numbers Week 10 against the vulnerable Falcons secondary following a Week 9 bye.",
    "timestamp": "2019-10-27 03:06 PM",
    "week01": 13.6,
    "week02": 0.0,
    "week03": 2.5,
    "week04": 3.4,
    "week05": 10.6,
    "week06": 5.8,
    "week07": 5.8,
    "week08": 5.2,
    "week09": "BYE",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [13.6, 0.0, 2.5, 3.4, 10.6, 5.8, 5.8, 5.2, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.2, 4.3, 4.2, 5.3, 8.0, 5.7, 4.7, 7.5, 'BYE', 7.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4047646.png",
    "name": "A.J. Brown",
    "depthchart": "Starter: WR-1",
    "team": "Tennessee Titans",
    "projected": 7.6,
    "opponent": "Kansas City Chiefs",
    "home_away": "",
    "opp_rank": 11,
    "team_rank": 24,
    "avg_fp2": 8.19,
    "opp_rank_allowed_fp2": 7,
    "opp_avg_allowed_fp2": 22.92,
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
    "headlineNews": "Leads way in receiving yards",
    "report": "Brown caught four of his seven targets for 81 yards in Week 9 against the Panthers.",
    "analysis": "Brown led the team in both targets and receptions, the second time in the past three weeks he's shown strong rapport with Ryan Tannehill. Still, his effort was a contrast in both good and bad, as he showed the ability to work downfield on a 35-yard reception that was highly contested to begin the fourth quarter. On the other hand, he let a target slip through his hands for an interception that led directly to a Panthers touchdown early in the game. Overall, Brown now has at least seven targets in two of his last three games, far more consistent volume than he saw early in the season.",
    "timestamp": "2019-11-03 08:03 PM",
    "week01": 11.5,
    "week02": 4.0,
    "week03": 0.9,
    "week04": 22.9,
    "week05": 3.7,
    "week06": 3.3,
    "week07": 9.2,
    "week08": 8.1,
    "week09": 10.1,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.5, 4.0, 0.9, 22.9, 3.7, 3.3, 9.2, 8.1, 10.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.2, 7.8, 4.8, 7.8, 7.8, 8.4, 5.7, 9.5, 10.2, 7.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4036348.png",
    "name": "Michael Gallup",
    "depthchart": "Backup: WR-2",
    "team": "Dallas Cowboys",
    "projected": 7.4,
    "opponent": "Minnesota Vikings",
    "home_away": "",
    "opp_rank": 8,
    "team_rank": 4,
    "avg_fp2": 11.98,
    "opp_rank_allowed_fp2": 20,
    "opp_avg_allowed_fp2": 30.06,
    "fanduelSalary": "$6300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#7F9695",
    "tmColorDark": "#041E42",
    "tmColorLite_rgba": "rgba(127, 150, 149, 0.2)",
    "tmColorDark_rgba": "rgba(4, 30, 66, 0.2)",
    "tmTextLite": "#7F9695",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/dal.png",
    "headlineNews": "Scores in win",
    "report": "Gallup caught two of six targets for 33 yards and a touchdown in Monday night's 37-18 win over the Giants.",
    "analysis": "Gallup didn't have the biggest game, but still made a considerable impact with one of his touches. After making a first-down reception, Gallup actually galloped over a Giants defender and into  the end zone in acrobatic fashion, giving the Cowboys an eight-point lead to start the fourth quarter. In doing so, he scored for the second time this season, which helped compensate for his third straight game with under 50 receiving yards.",
    "timestamp": "2019-11-04 09:43 PM",
    "week01": 19.3,
    "week02": 9.8,
    "week03": "DNP",
    "week04": "DNP",
    "week05": 20.8,
    "week06": 6.8,
    "week07": 4.9,
    "week08": "BYE",
    "week09": 10.3,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [19.3, 9.8, 'DNP', 'DNP', 20.8, 6.8, 4.9, 'BYE', 10.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.3, 6.8, 'DNP', 'DNP', 5.3, 6.4, 13.7, 'BYE', 17.7, 7.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3932905.png",
    "name": "Diontae Johnson",
    "depthchart": "Backup: WR-2",
    "team": "Pittsburgh Steelers",
    "projected": 7.2,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank": 18,
    "team_rank": 27,
    "avg_fp2": 7.52,
    "opp_rank_allowed_fp2": 11,
    "opp_avg_allowed_fp2": 26.55,
    "fanduelSalary": "$4700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FFB612",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(255, 182, 18, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#FFB612",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/pit.png",
    "headlineNews": "Held in check",
    "report": "Johnson caught one of two targets for three yards in Sunday's 26-24 win over the Colts. He also ran once for two yards.",
    "analysis": "The downfield passing game was virtually non-existent for the Steelers, with quarterback Mason Rudolph averaging just 5.5 yards per attempt and targeting running back Jaylen Samuels as many times (13) as all other players combined. This was a disappointing effort for Johnson after catching five of seven targets for 84 yards and a touchdown in his previous game. Week 10 doesn't look to be any better for the rookie receiver, as opposing wideouts have not scored a touchdown against the Rams in the last three contests, or in six of eight games this season.",
    "timestamp": "2019-11-03 06:26 PM",
    "week01": 4.0,
    "week02": 2.2,
    "week03": 13.3,
    "week04": 14.7,
    "week05": 5.68,
    "week06": 2.4,
    "week07": "BYE",
    "week08": 16.9,
    "week09": 1.0,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.0, 2.2, 13.3, 14.7, 5.68, 2.4, 'BYE', 16.9, 1.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.8, 3.9, 4.1, 4.5, 5.6, 2.4, 'BYE', 8.3, 8.4, 7.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3051738.png",
    "name": "Marquez Valdes-Scantling",
    "depthchart": "Backup: WR-2",
    "team": "Green Bay Packers",
    "projected": 6.8,
    "opponent": "Carolina Panthers",
    "home_away": "",
    "opp_rank": 9,
    "team_rank": 12,
    "avg_fp2": 7.32,
    "opp_rank_allowed_fp2": 24,
    "opp_avg_allowed_fp2": 31.01,
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
    "headlineNews": "Cleared for Week 10",
    "report": "Valdes-Scantling (ankle/knee) doesn't have a designation for Sunday's game against the Panthers, Rob Demovsky of ESPN.com reports.",
    "analysis": "After kicking off the week with back-to-back limited practice sessions, Valdes-Scantling capped it off with a full showing. While his Week 10 opponent (the Panthers) have allowed wide receivers to post just 7.1 yards per target this season, the unit has otherwise yielded 180 receiving yards per game to the position, making Valdes-Scantling a decent enough play Sunday.",
    "timestamp": "2019-11-08 01:25 PM",
    "week01": 7.2,
    "week02": 3.4,
    "week03": 18.9,
    "week04": 6.2,
    "week05": 2.3,
    "week06": 6.7,
    "week07": 20.3,
    "week08": 0.9,
    "week09": 0.0,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.2, 3.4, 18.9, 6.2, 2.3, 6.7, 20.3, 0.9, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.0, 7.9, 5.0, 2.5, 8.1, 8.2, 10.8, 9.1, 5.0, 6.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15705.png",
    "name": "Josh Gordon",
    "depthchart": "Reserve: WR-3",
    "team": "Seattle Seahawks",
    "projected": 6.8,
    "opponent": "San Francisco 49ers",
    "home_away": "at ",
    "opp_rank": 1,
    "team_rank": 9,
    "avg_fp2": 7.47,
    "opp_rank_allowed_fp2": 6,
    "opp_avg_allowed_fp2": 22.52,
    "fanduelSalary": "$5300",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Ankle",
    "tmColorLite": "#69BE28",
    "tmColorDark": "#002244",
    "tmColorLite_rgba": "rgba(105, 190, 40, 0.2)",
    "tmColorDark_rgba": "rgba(0, 34, 68, 0.2)",
    "tmTextLite": "#69BE28",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sea.png",
    "headlineNews": "Limited again Friday",
    "report": "Gordon (ankle) was a limited practice participant Friday, John Boyle of the Seahawks' official site reports.",
    "analysis": "For the second straight session with his new squad, Gordon's reps were capped as he tends to an ankle injury. On Friday, both coach Pete Carroll and offensive coordinator Brian Schottenheimer touched on Gordon. While Carroll told KIRO Radio 97.3 that he's unsure whether the wide receiver will be available Monday in San Francisco, Schottenheimer noted Gordon is \"moving around really good out there,\" per Curtis Crabtree of Sports Radio 950 KJR Seattle. Gordon's activity level hasn't been enough to upgrade to full participation, but he seems to be trending toward his debut with the team, as long as Carroll and company are confident he's picked up the playbook.",
    "timestamp": "2019-11-08 04:37 PM",
    "week01": 14.8,
    "week02": 2.9,
    "week03": 11.4,
    "week04": 6.1,
    "week05": 8.4,
    "week06": 1.2,
    "week07": "DNP",
    "week08": "DNP",
    "week09": "DNP",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.8, 2.9, 11.4, 6.1, 8.4, 1.2, 'DNP', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.2, 8.9, 13.4, 7.3, 9.4, 12.0, 'DNP', 'DNP', 'DNP', 6.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3917067.png",
    "name": "Bisi Johnson",
    "depthchart": "Backup: WR-2",
    "team": "Minnesota Vikings",
    "projected": 6.7,
    "opponent": "Dallas Cowboys",
    "home_away": "at ",
    "opp_rank": 7,
    "team_rank": 16,
    "avg_fp2": 6.08,
    "opp_rank_allowed_fp2": 5,
    "opp_avg_allowed_fp2": 21.88,
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
    "headlineNews": "Set for key role again",
    "report": "Johnson's teammate Adam Thielen (hamstring) has been ruled out for Sunday's game in Dallas.",
    "analysis": "With Thielen either inactive or suffering an in-game injury the past three weeks, Johnson has played 71, 74 and 83 percent of snaps, catching seven of 12 targets for 71 yards and two touchdowns. The target volume hasn't been encouraging, but he at least figures to see a lot of playing time Sunday night in Dallas.",
    "timestamp": "2019-11-08 03:00 PM",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": 12.0,
    "week08": 3.7,
    "week09": 6.9,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 12.0, 3.7, 6.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 4.8, 5.4, 2.8, 6.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2576623.png",
    "name": "DeVante Parker",
    "depthchart": "Starter: WR-1",
    "team": "Miami Dolphins",
    "projected": 6.7,
    "opponent": "Indianapolis Colts",
    "home_away": "at ",
    "opp_rank": 15,
    "team_rank": 29,
    "avg_fp2": 9.75,
    "opp_rank_allowed_fp2": 12,
    "opp_avg_allowed_fp2": 26.61,
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
    "headlineNews": "Ties career-best TD total",
    "report": "Parker hauled in four of six targets for 57 yards and a touchdown in Sunday's 26-18 win over the Jets.",
    "analysis": "Parker's 17-yard touchdown in the second quarter was his fourth of the season, tying his career high set back in 2016. The 2015 first-rounder hasn't lived up to his lofty draft billing, but this subpar Miami team doesn't exactly have many alternatives to turn to on offense, so wide receivers Parker and Preston Williams -- who left in the fourth quarter due to a knee injury -- should continue to do most of the damage for the Dolphins. Up next for Parker is a Week 10 road clash with the Colts.",
    "timestamp": "2019-11-03 01:40 PM",
    "week01": 9.0,
    "week02": 0.0,
    "week03": 7.1,
    "week04": 15.0,
    "week05": "BYE",
    "week06": 10.3,
    "week07": 14.0,
    "week08": 8.9,
    "week09": 13.7,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.0, 0.0, 7.1, 15.0, 'BYE', 10.3, 14.0, 8.9, 13.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.3, 7.3, 6.6, 5.1, 'BYE', 7.6, 5.2, 9.0, 10.5, 6.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/17437.png",
    "name": "Taylor Gabriel",
    "depthchart": "Backup: WR-2",
    "team": "Chicago Bears",
    "projected": 5.9,
    "opponent": "Detroit Lions",
    "home_away": "",
    "opp_rank": 30,
    "team_rank": 30,
    "avg_fp2": 8.73,
    "opp_rank_allowed_fp2": 21,
    "opp_avg_allowed_fp2": 30.41,
    "fanduelSalary": "$5200",
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
    "report": "Gabriel caught three passes for 69 yards in the Bears' 22-14 loss to the Eagles on Sunday.",
    "analysis": "In a game that Mitchell Trubisky threw for just 125 yards, Gabriel was fortunate to come away with a respectable performance. On his 53-yard reception, the defense lost track of him, providing his quarterback with one of his easiest throws of the afternoon. He also helped to extend a drive with a critical catch on a third-down play. Although his targets are inconsistent on a week-to-week basis, he's posted at least 53 yards in three of his last four games, and he's emerging as a useful depth option on fantasy rosters.",
    "timestamp": "2019-11-03 02:29 PM",
    "week01": 3.4,
    "week02": 3.0,
    "week03": 29.2,
    "week04": "DNP",
    "week05": "DNP",
    "week06": "BYE",
    "week07": 1.1,
    "week08": 7.3,
    "week09": 8.4,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.4, 3.0, 29.2, 'DNP', 'DNP', 'BYE', 1.1, 7.3, 8.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.7, 7.3, 6.8, 'DNP', 'DNP', 'BYE', 3.7, 4.2, 7.6, 5.9]
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
    "opponent": "Baltimore Ravens",
    "home_away": "",
    "opp_rank": 26,
    "team_rank": 12,
    "avg_fp2": 5.79,
    "opp_rank_allowed_fp2": 22,
    "opp_avg_allowed_fp2": 30.61,
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
    "headlineNews": "Makes big catch in garbage time",
    "report": "Erickson caught six of seven targets for 97 yards during Sunday's 24-10 loss to the Rams.",
    "analysis": "Erickson was bottled up for much of the afternoon before slipping past the defense for a 52-yard reception during the final minute of the game. It was Erickson's second catch for at least 45 yards in as many games after no such receptions in his first three-plus seasons in the league. There's little to look forward to for the Bengals this season, but Erickson seems to be turning up the heat, averaging seven touches and 98.7 total yards in his last three games. Next up, after the bye, is a Baltimore defense that surrendered 64 total yards to Erickson in Week 6.",
    "timestamp": "2019-10-27 04:09 PM",
    "week01": 2.8,
    "week02": 1.9,
    "week03": 1.8,
    "week04": 0.0,
    "week05": 1.2,
    "week06": 8.4,
    "week07": 17.5,
    "week08": 12.7,
    "week09": "BYE",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.8, 1.9, 1.8, 0.0, 1.2, 8.4, 17.5, 12.7, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.4, 1.5, 3.1, 1.7, 4.0, 1.1, 3.5, 2.8, 'BYE', 5.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15349.png",
    "name": "Cole Beasley",
    "depthchart": "Backup: WR-2",
    "team": "Buffalo Bills",
    "projected": 5.8,
    "opponent": "Cleveland Browns",
    "home_away": "at ",
    "opp_rank": 6,
    "team_rank": 26,
    "avg_fp2": 8.9,
    "opp_rank_allowed_fp2": 13,
    "opp_avg_allowed_fp2": 26.91,
    "fanduelSalary": "$5500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#C60C30",
    "tmColorDark": "#005596",
    "tmColorLite_rgba": "rgba(198, 12, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 85, 150, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/buf.png",
    "headlineNews": "Another score",
    "report": "Beasley caught both of his targets for 13 yards during Sunday's 24-9 win over Washington.",
    "analysis": "The good news is that the little guy has now scored in three straight games. The flip side is that for some reason he only played  45 percent of the offensive snaps, an odd season low considering it was a close game for much of the afternoon and Beasley was unhurt. We'll chalk it up to the game plan for now,  though his playing time and his production outside the touchdown string merit watching. Beasley hasn't caught more than three balls in any of the last four games, and he's only eclipsed the 50-yard mark once all season.",
    "timestamp": "2019-11-04 11:53 AM",
    "week01": 6.5,
    "week02": 10.3,
    "week03": 10.8,
    "week04": 11.0,
    "week05": 3.6,
    "week06": "BYE",
    "week07": 9.1,
    "week08": 11.6,
    "week09": 8.3,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.5, 10.3, 10.8, 11.0, 3.6, 'BYE', 9.1, 11.6, 8.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.6, 10.5, 8.2, 5.5, 6.2, 'BYE', 6.2, 4.4, 6.9, 5.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2576716.png",
    "name": "Jamison Crowder",
    "depthchart": "Reserve: WR-3",
    "team": "New York Jets",
    "projected": 5.6,
    "opponent": "New York Giants",
    "home_away": "",
    "opp_rank": 25,
    "team_rank": 32,
    "avg_fp2": 8.55,
    "opp_rank_allowed_fp2": 29,
    "opp_avg_allowed_fp2": 34.62,
    "fanduelSalary": "$6500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#125740",
    "tmColorDark": "#003f2d",
    "tmColorLite_rgba": "rgba(18, 87, 64, 0.2)",
    "tmColorDark_rgba": "rgba(0, 63, 45, 0.2)",
    "tmTextLite": "#FFFFFF",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png",
    "headlineNews": "Leading receiver in Week 9 loss",
    "report": "Crowder caught eight of nine targets for 83 yards and a touchdown in Sunday's 26-18 loss to the Dolphins.",
    "analysis": "Crowder had largely laid dormant since Week 1, but he came alive in this favorable matchup against the winless Dolphins. He capped the opening drive with a 12-yard touchdown and eclipsed 80 yards for just the third time this season. With quarterback Sam Darnold struggling to push the ball downfield effectively, Crowder's poised for another productive effort underneath against the Giants in Week 10.",
    "timestamp": "2019-11-03 01:41 PM",
    "week01": 17.3,
    "week02": 6.0,
    "week03": 3.5,
    "week04": "BYE",
    "week05": 2.0,
    "week06": 12.8,
    "week07": 4.6,
    "week08": 3.9,
    "week09": 18.3,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [17.3, 6.0, 3.5, 'BYE', 2.0, 12.8, 4.6, 3.9, 18.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.9, 7.9, 6.6, 'BYE', 5.9, 4.5, 5.1, 7.2, 7.5, 5.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3128451.png",
    "name": "Tre'Quan Smith",
    "depthchart": "Reserve: WR-3",
    "team": "New Orleans Saints",
    "projected": 5.6,
    "opponent": "Atlanta Falcons",
    "home_away": "",
    "opp_rank": 23,
    "team_rank": 11,
    "avg_fp2": 8.0,
    "opp_rank_allowed_fp2": 29,
    "opp_avg_allowed_fp2": 35.04,
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
    "headlineNews": "Practices in full",
    "report": "Smith (ankle) was a full participant in Wednesday's practice, Luke Johnson of The New Orleans Times-Picayune reports.",
    "analysis": "Smith didn't practice in any capacity leading up to New Orleans' bye week, but he now appears back to full health. After a promising rookie season, Smith has had an injury-plagued 2019 campaign, appearing in just three contests while hauling in all five of his targets for 75 yards and one touchdown. The second-year pro will look to get on track against the Falcons' struggling defense in Week 10.",
    "timestamp": "2019-11-06 02:34 PM",
    "week01": 9.6,
    "week02": 6.4,
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": "DNP",
    "week07": "DNP",
    "week08": "DNP",
    "week09": "BYE",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.6, 6.4, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.4, 5.7, 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'DNP', 'BYE', 5.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3115913.png",
    "name": "Geronimo Allison",
    "depthchart": "Reserve: WR-3",
    "team": "Green Bay Packers",
    "projected": 5.4,
    "opponent": "Carolina Panthers",
    "home_away": "",
    "opp_rank": 9,
    "team_rank": 12,
    "avg_fp2": 4.58,
    "opp_rank_allowed_fp2": 24,
    "opp_avg_allowed_fp2": 31.01,
    "fanduelSalary": "$5300",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#d7a017",
    "tmColorDark": "#203731",
    "tmColorLite_rgba": "rgba(215, 160, 23, 0.2)",
    "tmColorDark_rgba": "rgba(32, 55, 49, 0.2)",
    "tmTextLite": "#d7a017",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png",
    "headlineNews": "Quiet in Week 10 loss",
    "report": "Allison caught two passes for 21 yards in Sunday's loss to the Chargers.",
    "analysis": "Allison's snap-count percentage increased for the third straight game despite the return of Davante Adams, but as has regularly been the case over the last month, he did little for those in both standard and PPR leagues. To be exact, over five games dating back to Oct. 6, Allison has been targeted 23 times, but accumulated just 12 receptions for 129 yards and no scores. While he is getting on the field, he isn't doing much when he's out there, and it's fair to consider him the fourth-best fantasy option among Packers receivers heading into Week 10, behind Adams, Marquez Valdes-Scantling and Allen Lazard.",
    "timestamp": "2019-11-04 08:27 AM",
    "week01": 0.0,
    "week02": 8.5,
    "week03": 0.4,
    "week04": 13.4,
    "week05": 3.8,
    "week06": 5.5,
    "week07": 5.3,
    "week08": 1.2,
    "week09": 3.1,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 8.5, 0.4, 13.4, 3.8, 5.5, 5.3, 1.2, 3.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.0, 7.6, 2.9, 2.0, 6.1, 6.2, 5.9, 4.7, 4.3, 5.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/17258.png",
    "name": "Willie Snead",
    "depthchart": "Backup: WR-2",
    "team": "Baltimore Ravens",
    "projected": 5.3,
    "opponent": "Cincinnati Bengals",
    "home_away": "at ",
    "opp_rank": 22,
    "team_rank": 20,
    "avg_fp2": 5.56,
    "opp_rank_allowed_fp2": 14,
    "opp_avg_allowed_fp2": 28.49,
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
    "headlineNews": "Snags both targets",
    "report": "Snead caught both of his targets for 15 yards Sunday against the Patriots.",
    "analysis": "Just days after receiving a contract extension, Snead made good on both of his chances against New England, including a crucial fourth-down conversion. The slot receiver sees an uneven target share, logging three games with five targets and five games with three targets or less. He hasn't scored a touchdown since Week 4 against the Browns and hasn't gone over 20 yards in any of the last three weeks. Snead draws a favorable matchup against the Bengals in Week 10, but it'd take a fantasy roster facing major bye-week attrition to put him on the radar as a possible starter.",
    "timestamp": "2019-11-05 09:55 AM",
    "week01": 11.1,
    "week02": 1.0,
    "week03": 6.2,
    "week04": 13.1,
    "week05": 7.1,
    "week06": 3.3,
    "week07": 0.2,
    "week08": "BYE",
    "week09": 2.5,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [11.1, 1.0, 6.2, 13.1, 7.1, 3.3, 0.2, 'BYE', 2.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.9, 11.8, 6.4, 8.5, 6.1, 7.7, 9.6, 'BYE', 5.9, 5.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3127306.png",
    "name": "Dante Pettis",
    "depthchart": "Reserve: WR-3",
    "team": "San Francisco 49ers",
    "projected": 5.1,
    "opponent": "Seattle Seahawks",
    "home_away": "",
    "opp_rank": 28,
    "team_rank": 22,
    "avg_fp2": 3.63,
    "opp_rank_allowed_fp2": 19,
    "opp_avg_allowed_fp2": 29.9,
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
    "week09": 8.6,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.2, 0.64, 10.0, 'BYE', 1.6, 6.0, 0.0, 1.0, 8.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [11.8, 5.3, 5.9, 'BYE', 9.4, 6.3, 6.4, 2.6, 6.8, 5.1]
                    }
                    
                    ]
               }
            }];



$scope.positionTE = [{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3046439.png",
    "name": "Hunter Henry",
    "depthchart": "Starter: TE-1",
    "team": "Los Angeles Chargers",
    "projected": 19.0,
    "opponent": "Oakland Raiders",
    "home_away": "at ",
    "opp_rank": 32,
    "team_rank": 6,
    "avg_fp2": 13.06,
    "opp_rank_allowed_fp2": 28,
    "opp_avg_allowed_fp2": 12.11,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [8.0, 'DNP', 'DNP', 'DNP', 'DNP', 26.0, 12.7, 6.7, 11.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [15.2, 'DNP', 'DNP', 'DNP', 'DNP', 10.5, 14.9, 14.6, 14.5, 19.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4527.png",
    "name": "Jason Witten",
    "depthchart": "Starter: TE-1",
    "team": "Dallas Cowboys",
    "projected": 13.8,
    "opponent": "Minnesota Vikings",
    "home_away": "",
    "opp_rank": 8,
    "team_rank": 4,
    "avg_fp2": 7.39,
    "opp_rank_allowed_fp2": 16,
    "opp_avg_allowed_fp2": 8.87,
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
    "headlineNews": "Makes eight catches",
    "report": "Witten caught eight of nine targets for 58 yards in Monday night's 37-18 win over the Giants.",
    "analysis": "Witten led the Cowboys in both receptions and targets from quarterback Dak Prescott. With that share of looks, he was able to post his best stat line of the season, even if he didn't score a touchdown. In Week 10, Witten will hope for a similarly strong showing against the Vikings, but their seventh-ranked pass defense could be tough to crack.",
    "timestamp": "2019-11-04 09:48 PM",
    "week01": 9.0,
    "week02": 10.5,
    "week03": 6.9,
    "week04": 5.0,
    "week05": 4.4,
    "week06": 8.2,
    "week07": 5.3,
    "week08": "BYE",
    "week09": 9.8,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.0, 10.5, 6.9, 5.0, 4.4, 8.2, 5.3, 'BYE', 9.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.7, 7.8, 9.1, 11.8, 7.7, 9.2, 8.0, 'BYE', 6.1, 13.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3043275.png",
    "name": "Austin Hooper",
    "depthchart": "Starter: TE-1",
    "team": "Atlanta Falcons",
    "projected": 13.2,
    "opponent": "New Orleans Saints",
    "home_away": "at ",
    "opp_rank": 12,
    "team_rank": 1,
    "avg_fp2": 14.64,
    "opp_rank_allowed_fp2": 9,
    "opp_avg_allowed_fp2": 7.79,
    "fanduelSalary": "$6600",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#A71930",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(167, 25, 48, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#A71930",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/atl.png",
    "headlineNews": "Scores in third straight game",
    "report": "Hooper hauled in six of seven targets for 65 receiving yards and one touchdown during Sunday's 27-20 loss to Seattle.",
    "analysis": "Hooper has been an absolute fantasy dynamo to the midway point of the 2019 campaign, establishing a pace through eight games that puts him on trajectory for a 100-catch, 1,100-yard and 10-touchdown season. Moreover, if Matt Ryan (ankle) is forced to miss a second consecutive start after the Week 9 bye, it doesn't appear that there will be a massive drop-off in statistical output, given Matt Schaub's 460-yard outing against the Seahawks. Hooper's next matchup comes Nov. 10, when the Falcons travel to take on a Saints defense that entered Week 8 allowing the 10th-fewest receiving yards to opposing tight ends, while surrendering only one touchdown to the position all season.",
    "timestamp": "2019-10-27 04:37 PM",
    "week01": 12.2,
    "week02": 5.4,
    "week03": 21.6,
    "week04": 17.5,
    "week05": 10.6,
    "week06": 21.7,
    "week07": 12.6,
    "week08": 15.5,
    "week09": "BYE",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.2, 5.4, 21.6, 17.5, 10.6, 21.7, 12.6, 15.5, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.2, 10.0, 7.0, 9.6, 7.3, 4.5, 15.6, 6.8, 'BYE', 13.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/10475.png",
    "name": "Greg Olsen",
    "depthchart": "Starter: TE-1",
    "team": "Carolina Panthers",
    "projected": 13.2,
    "opponent": "Green Bay Packers",
    "home_away": "at ",
    "opp_rank": 21,
    "team_rank": 25,
    "avg_fp2": 7.33,
    "opp_rank_allowed_fp2": 27,
    "opp_avg_allowed_fp2": 11.67,
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
    "headlineNews": "Catches three passes",
    "report": "Olsen caught three of five targets for 40 yards in Sunday's 30-20 win over the Titans.",
    "analysis": "Olsen's output included a catch of 23 yards, marking his longest gain since Week 2. However, it overall was another mediocre display from a fantasy perspective, as Olsen hasn't topped 55 yards or scored a touchdown since Week 3 -- the week Kyle Allen took over under center. In eight games, Olsen now sports 27 receptions on 45 targets for 331 yards and two scores.",
    "timestamp": "2019-11-04 06:48 AM",
    "week01": 5.6,
    "week02": 14.0,
    "week03": 22.5,
    "week04": 1.5,
    "week05": 0.0,
    "week06": 7.2,
    "week07": "BYE",
    "week08": 2.3,
    "week09": 5.5,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.6, 14.0, 22.5, 1.5, 0.0, 7.2, 'BYE', 2.3, 5.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.3, 12.3, 16.4, 10.0, 8.2, 16.2, 'BYE', 7.2, 7.2, 13.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3930086.png",
    "name": "Dawson Knox",
    "depthchart": "Starter: TE-1",
    "team": "Buffalo Bills",
    "projected": 12.2,
    "opponent": "Cleveland Browns",
    "home_away": "at ",
    "opp_rank": 6,
    "team_rank": 26,
    "avg_fp2": 4.14,
    "opp_rank_allowed_fp2": 23,
    "opp_avg_allowed_fp2": 10.84,
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
    "headlineNews": "Outsnaps Kroft",
    "report": "Knox caught both of his targets for 14 yards during Sunday's win over Washington.",
    "analysis": "Despite the lousy production, one takeaway is that the rookie saw 76 percent of the offensive snaps while Tyler Kroft -- supposedly the starter once he got back to full health and game speed -- only saw 26 percent of the action. Neither tight end did much, however,  and Knox has only caught four balls for 36 yards in total in the three games Kroft has played since returning from an ankle injury.",
    "timestamp": "2019-11-04 09:29 PM",
    "week01": 0.6,
    "week02": 2.3,
    "week03": 15.1,
    "week04": 7.3,
    "week05": 2.2,
    "week06": "BYE",
    "week07": 3.2,
    "week08": 0.0,
    "week09": 2.4,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.6, 2.3, 15.1, 7.3, 2.2, 'BYE', 3.2, 0.0, 2.4]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.9, 4.9, 1.5, 5.0, 9.5, 'BYE', 3.3, 5.9, 0.8, 12.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3040151.png",
    "name": "George Kittle",
    "depthchart": "Starter: TE-1",
    "team": "San Francisco 49ers",
    "projected": 11.1,
    "opponent": "Seattle Seahawks",
    "home_away": "",
    "opp_rank": 28,
    "team_rank": 22,
    "avg_fp2": 11.36,
    "opp_rank_allowed_fp2": 29,
    "opp_avg_allowed_fp2": 12.12,
    "fanduelSalary": "$0",
    "hasStatus": "Status",
    "healthQue": "Questionable",
    "injury": "Knee",
    "tmColorLite": "#B3995D",
    "tmColorDark": "#b8083e",
    "tmColorLite_rgba": "rgba(179, 153, 93, 0.2)",
    "tmColorDark_rgba": "rgba(184, 8, 62, 0.2)",
    "tmTextLite": "#B3995D",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/sf.png",
    "headlineNews": "Not seen at practice",
    "report": "Kittle (knee/ankle) isn't practicing Friday, Matt Barrows of The Athletic reports.",
    "analysis": "Kittle also was held out of practice Thursday, with coach Kyle Shanahan saying he expects the tight end to be a game-time decision for Monday's matchup with the Seahawks. A return to practice Saturday would be a step in the right direction, but a decision still isn't likely to come before Monday. Ross Dwelley would be the 49ers' best bet for tight-end targets if Kittle ends up inactive. On the other side of the game, Seattle's Jacob Hollister is coming off a six-target, two-TD performance in last week's 40-34 win over the Buccaneers.",
    "timestamp": "2019-11-08 12:44 PM",
    "week01": 9.4,
    "week02": 6.9,
    "week03": 8.7,
    "week04": "BYE",
    "week05": 17.8,
    "week06": 14.3,
    "week07": 5.3,
    "week08": 11.6,
    "week09": 16.9,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.4, 6.9, 8.7, 'BYE', 17.8, 14.3, 5.3, 11.6, 16.9]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [14.8, 8.1, 13.3, 'BYE', 11.8, 10.0, 8.9, 9.5, 11.5, 11.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/13232.png",
    "name": "Jimmy Graham",
    "depthchart": "Starter: TE-1",
    "team": "Green Bay Packers",
    "projected": 10.5,
    "opponent": "Carolina Panthers",
    "home_away": "",
    "opp_rank": 9,
    "team_rank": 12,
    "avg_fp2": 6.18,
    "opp_rank_allowed_fp2": 6,
    "opp_avg_allowed_fp2": 7.39,
    "fanduelSalary": "$5800",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#d7a017",
    "tmColorDark": "#203731",
    "tmColorLite_rgba": "rgba(215, 160, 23, 0.2)",
    "tmColorDark_rgba": "rgba(32, 55, 49, 0.2)",
    "tmTextLite": "#d7a017",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/gb.png",
    "headlineNews": "Four receptions in defeat",
    "report": "Graham caught four passes for 17 yards in Sunday's loss to the Chargers.",
    "analysis": "The four receptions are the second most Graham has totaled in a game this season, but the 17 yards also tied for his fewest since he was held catchless in both Weeks 2 and 3. Graham's production has been inconsistent all season, but with that being the case for many tight ends and him scoring three times -- as many or more than all but three other TEs -- he has done just enough to be considered as a standard-league starter at his position. That may not be the case in Week 10, however, as the Packers will face a Panthers defense that has routinely shut down opposing tight ends over its first eight games.",
    "timestamp": "2019-11-04 07:45 AM",
    "week01": 10.5,
    "week02": 0.0,
    "week03": 0.0,
    "week04": 15.1,
    "week05": 5.6,
    "week06": 2.7,
    "week07": 14.5,
    "week08": 3.5,
    "week09": 3.7,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.5, 0.0, 0.0, 15.1, 5.6, 2.7, 14.5, 3.5, 3.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.7, 7.9, 6.6, 5.8, 15.2, 10.7, 7.8, 9.4, 7.8, 10.5]
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
    "opp_rank": 17,
    "team_rank": 2,
    "avg_fp2": 11.56,
    "opp_rank_allowed_fp2": 19,
    "opp_avg_allowed_fp2": 9.87,
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
    "headlineNews": "Seven grabs in win",
    "report": "Kelce secured seven of nine targets for 62 yards in the Chiefs' 26-23 win over the Vikings on Sunday.",
    "analysis": "Kelce co-led the Chiefs in receptions while checking in just behind Sammy Watkins in receiving yardage. The veteran tight end was second on the team in targets as well, and he's logged at least eight looks in all but one game this season. With Patrick Mahomes (knee) looking ready for a Week 10 return, Kelce should be in position to continue his solid production versus the Titans in a road matchup.",
    "timestamp": "2019-11-03 02:34 PM",
    "week01": 10.3,
    "week02": 20.2,
    "week03": 12.4,
    "week04": 12.92,
    "week05": 9.0,
    "week06": 7.8,
    "week07": 7.4,
    "week08": 14.3,
    "week09": 9.7,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.3, 20.2, 12.4, 12.92, 9.0, 7.8, 7.4, 14.3, 9.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [10.6, 13.9, 10.7, 12.0, 15.7, 14.5, 12.8, 8.1, 7.0, 10.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16504.png",
    "name": "Jack Doyle",
    "depthchart": "Starter: TE-1",
    "team": "Indianapolis Colts",
    "projected": 10.3,
    "opponent": "Miami Dolphins",
    "home_away": "",
    "opp_rank": 20,
    "team_rank": 23,
    "avg_fp2": 5.9,
    "opp_rank_allowed_fp2": 15,
    "opp_avg_allowed_fp2": 8.2,
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
    "headlineNews": "Salvages performance with touchdown",
    "report": "Doyle tallied three receptions on four targets for 22 yards and a touchdown in Week 9 against the Steelers.",
    "analysis": "Heading into Week 9, there was optimism that Doyle would see an increased role in the Colts' offense with T.Y. Hilton (calf) sidelined. However, that didn't come to fruition, as he received only four targets -- fewer than his marks in both Week 7 and 8. His performance was salvaged only by an 11-yard touchdown early in the second quarter, and he has now surpassed five targets in a game only once this season. Even in the absence of Hilton, that doesn't appear likely to change.",
    "timestamp": "2019-11-03 05:43 PM",
    "week01": 2.5,
    "week02": 3.1,
    "week03": 6.6,
    "week04": 10.2,
    "week05": 3.4,
    "week06": "BYE",
    "week07": 3.6,
    "week08": 8.1,
    "week09": 9.7,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.5, 3.1, 6.6, 10.2, 3.4, 'BYE', 3.6, 8.1, 9.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [2.6, 7.1, 5.2, 2.4, 5.8, 'BYE', 5.0, 4.9, 5.3, 10.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/12537.png",
    "name": "Jared Cook",
    "depthchart": "Starter: TE-1",
    "team": "New Orleans Saints",
    "projected": 10.1,
    "opponent": "Atlanta Falcons",
    "home_away": "",
    "opp_rank": 23,
    "team_rank": 11,
    "avg_fp2": 6.05,
    "opp_rank_allowed_fp2": 21,
    "opp_avg_allowed_fp2": 10.0,
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
    "headlineNews": "No limitations in practice",
    "report": "Cook (ankle) was a full participant in Wednesday's practice, Luke Johnson of The New Orleans Times-Picayune reports.",
    "analysis": "Cook missed New Orleans' last two contests, but he appears to have managed a full recovery during the team's bye. The veteran tight end stands to reclaim his starting role Sunday versus the Falcons. Given that Cook has yet to surpass 50 receiving yards in a game this season and has only scored twice, he won't be easy to trust for fantasy purposes despite a favorable matchup.",
    "timestamp": "2019-11-06 02:39 PM",
    "week01": 4.7,
    "week02": 3.5,
    "week03": 1.2,
    "week04": 3.6,
    "week05": 12.1,
    "week06": 11.2,
    "week07": "DNP",
    "week08": "DNP",
    "week09": "BYE",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.7, 3.5, 1.2, 3.6, 12.1, 11.2, 'DNP', 'DNP', 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.9, 7.2, 8.8, 3.4, 4.5, 4.3, 'DNP', 'DNP', 'BYE', 10.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3918639.png",
    "name": "Gerald Everett",
    "depthchart": "Starter: TE-1",
    "team": "Los Angeles Rams",
    "projected": 8.9,
    "opponent": "Pittsburgh Steelers",
    "home_away": "at ",
    "opp_rank": 10,
    "team_rank": 4,
    "avg_fp2": 6.84,
    "opp_rank_allowed_fp2": 24,
    "opp_avg_allowed_fp2": 11.32,
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
    "headlineNews": "Kept in check by Bengals",
    "report": "Everett caught two of his three targets for just 15 yards during Sunday's 24-10 win over Cincinnati.",
    "analysis": "While the third-year tight end has been a little inconsistent the past five weeks, he's still totaled a respectable 20 receptions for 254 yards and two touchdowns. The next step for Everett is becoming a factor week in, week out. Being limited to 32 offensive snaps Sunday definitely contributed to his poor showing, but it was probably just a blip on the radar. Everett topped 50 snaps in five of the previous six games, after all.",
    "timestamp": "2019-10-28 02:55 PM",
    "week01": 1.2,
    "week02": 3.6,
    "week03": 2.5,
    "week04": 12.9,
    "week05": 17.1,
    "week06": 1.9,
    "week07": 13.0,
    "week08": 2.5,
    "week09": "BYE",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.2, 3.6, 2.5, 12.9, 17.1, 1.9, 13.0, 2.5, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.7, 2.0, 3.8, 3.7, 5.0, 3.1, 7.2, 9.4, 'BYE', 8.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116365.png",
    "name": "Mark Andrews",
    "depthchart": "Starter: TE-1",
    "team": "Baltimore Ravens",
    "projected": 8.5,
    "opponent": "Cincinnati Bengals",
    "home_away": "at ",
    "opp_rank": 22,
    "team_rank": 20,
    "avg_fp2": 10.25,
    "opp_rank_allowed_fp2": 5,
    "opp_avg_allowed_fp2": 6.24,
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
    "headlineNews": "Comes up big in small role",
    "report": "Andrews caught two of three targets for 21 yards Sunday against the Patriots.",
    "analysis": "This was Andrews' lowest snap count (24) and lowest snap percentage (34 percent) of any game this season. It's possible that this had to do with Baltimore's run-heavy game plan where the Ravens ran the ball 41 times while attempting just 23 passes. With Nick Boyle (59 snaps) and Hayden Hurst (29 snaps) regarded as better blockers, it's not entirely surprising that Andrews would take a back seat given that type of game script. He came up big when called upon, however, as his 18-yard reception over Terrance Brooks on third down midway through the third quarter helped set up a touchdown that put the Ravens up by two scores. Andrews figures to see a larger role Sunday against the Bengals in a game where Baltimore won't need to shy away from the Cincinnati secondary.",
    "timestamp": "2019-11-05 09:26 AM",
    "week01": 20.8,
    "week02": 21.2,
    "week03": 3.0,
    "week04": 11.1,
    "week05": 7.0,
    "week06": 10.9,
    "week07": 4.9,
    "week08": "BYE",
    "week09": 3.1,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [20.8, 21.2, 3.0, 11.1, 7.0, 10.9, 4.9, 'BYE', 3.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.9, 7.6, 10.9, 11.5, 11.8, 10.6, 11.8, 'BYE', 8.3, 8.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3054212.png",
    "name": "Jonnu Smith",
    "depthchart": "Starter: TE-1",
    "team": "Tennessee Titans",
    "projected": 8.5,
    "opponent": "Kansas City Chiefs",
    "home_away": "",
    "opp_rank": 11,
    "team_rank": 24,
    "avg_fp2": 4.63,
    "opp_rank_allowed_fp2": 18,
    "opp_avg_allowed_fp2": 9.78,
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
    "headlineNews": "Poised for another start",
    "report": "Smith's teammate Delanie Walker (ankle) has been ruled out for Sunday's game against the Chiefs.",
    "analysis": "Smith took advantage of the same situation with a 6-78-1 receiving line in a Week 8 win over Tampa Bay before dropping to 3-18-0 in last week's loss to the Panthers. His target volume has been encouraging, but Smith does lose some snaps and routes to Anthony Firkser, with the Titans still using a three-man rotation at tight end (MyCole Pruitt mostly gets blocking snaps).",
    "timestamp": "2019-11-08 01:45 PM",
    "week01": 2.2,
    "week02": 0.0,
    "week03": 3.0,
    "week04": 1.0,
    "week05": 6.2,
    "week06": 1.3,
    "week07": 7.9,
    "week08": 16.8,
    "week09": 3.3,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.2, 0.0, 3.0, 1.0, 6.2, 1.3, 7.9, 16.8, 3.3]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.4, 2.8, 0.5, 1.4, 0.5, -0.4, 1.3, 6.7, 3.6, 8.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14054.png",
    "name": "Kyle Rudolph",
    "depthchart": "Starter: TE-1",
    "team": "Minnesota Vikings",
    "projected": 8.3,
    "opponent": "Dallas Cowboys",
    "home_away": "at ",
    "opp_rank": 7,
    "team_rank": 16,
    "avg_fp2": 4.33,
    "opp_rank_allowed_fp2": 26,
    "opp_avg_allowed_fp2": 11.63,
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
    "headlineNews": "Scores TD Sunday",
    "report": "Rudolph had three receptions for 23 yards, including a three-yard touchdown, in Sunday's 26-23 loss at Kansas City.",
    "analysis": "Rudolph has scored a touchdown in two of his last three games, which also corresponds with Adam Thielen missing time with a hamstring injury. He has 11 receptions and 14 targets his last three games, compared to nine receptions and 11 targets over his first six games. Rudolph could continue to see an uptick in the passing game if Thielen remains out, but his fantasy value is still dependent on his red-zone usage.",
    "timestamp": "2019-11-04 12:19 PM",
    "week01": 0.0,
    "week02": 2.4,
    "week03": 1.6,
    "week04": 1.7,
    "week05": 0.9,
    "week06": 5.1,
    "week07": 14.3,
    "week08": 3.2,
    "week09": 9.8,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 2.4, 1.6, 1.7, 0.9, 5.1, 14.3, 3.2, 9.8]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.6, 3.6, 9.0, 5.5, 4.1, 5.2, 7.8, 5.0, 4.5, 8.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/2576925.png",
    "name": "Darren Waller",
    "depthchart": "Starter: TE-1",
    "team": "Oakland Raiders",
    "projected": 8.2,
    "opponent": "Los Angeles Chargers",
    "home_away": "",
    "opp_rank": 5,
    "team_rank": 15,
    "avg_fp2": 12.19,
    "opp_rank_allowed_fp2": 8,
    "opp_avg_allowed_fp2": 7.48,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.5, 9.3, 20.6, 8.8, 5.9, 'BYE', 28.1, 8.1, 6.2]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.0, 7.6, 6.4, 14.1, 10.7, 'BYE', 9.6, 10.2, 14.9, 8.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3126153.png",
    "name": "Maxx Williams",
    "depthchart": "Starter: TE-1",
    "team": "Arizona Cardinals",
    "projected": 8.1,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "at ",
    "opp_rank": 31,
    "team_rank": 19,
    "avg_fp2": 2.6,
    "opp_rank_allowed_fp2": 31,
    "opp_avg_allowed_fp2": 15.71,
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
    "headlineNews": "Notches one reception Week 9",
    "report": "Williams compiled one catch (on two targets) for 12 yards during Thursday's 28-25 loss to the 49ers.",
    "analysis": "Williams received both of his targets on the Cardinals' first drive of the game, and despite getting 42 of 57 offensive snaps to fellow tight end Charles Clay's 24, the former didn't make an impression the rest of the way. Aside from a touchdown in Week 6, Williams hasn't made much of an impact this season, topping out at 34 receiving yards during that same game. No matter, the aforementioned duo will continue to split the TE reps in some fashion on a weekly basis.",
    "timestamp": "2019-11-02 06:51 PM",
    "week01": 2.0,
    "week02": 2.6,
    "week03": 0.0,
    "week04": 2.6,
    "week05": 1.2,
    "week06": 10.9,
    "week07": 1.0,
    "week08": 1.4,
    "week09": 1.7,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.0, 2.6, 0.0, 2.6, 1.2, 10.9, 1.0, 1.4, 1.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [-0.4, 4.0, 6.4, 1.5, 2.0, 3.1, 3.1, 3.2, 1.4, 8.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15788.png",
    "name": "Tyler Eifert",
    "depthchart": "Starter: TE-1",
    "team": "Cincinnati Bengals",
    "projected": 7.4,
    "opponent": "Baltimore Ravens",
    "home_away": "",
    "opp_rank": 26,
    "team_rank": 12,
    "avg_fp2": 4.59,
    "opp_rank_allowed_fp2": 5,
    "opp_avg_allowed_fp2": 7.29,
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
    "headlineNews": "Stays put at trade deadline",
    "report": "Eifert ended up not getting dealt at Tuesday's NFL trade deadline.",
    "analysis": "There was a lot of speculation about Eifert being available and in demand, perhaps by the Patriots, but nothing came to fruition. He's coming off his most active game of the year, a six-catch, 74-yard effort against the Rams.",
    "timestamp": "2019-10-29 02:12 PM",
    "week01": 5.2,
    "week02": 8.4,
    "week03": 2.3,
    "week04": 3.7,
    "week05": 2.4,
    "week06": 2.3,
    "week07": 2.0,
    "week08": 10.4,
    "week09": "BYE",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.2, 8.4, 2.3, 3.7, 2.4, 2.3, 2.0, 10.4, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.0, 8.2, 7.0, 12.2, 10.4, 7.1, 10.2, 9.2, 'BYE', 7.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/15853.png",
    "name": "Vance McDonald",
    "depthchart": "Starter: TE-1",
    "team": "Pittsburgh Steelers",
    "projected": 7.4,
    "opponent": "Los Angeles Rams",
    "home_away": "",
    "opp_rank": 18,
    "team_rank": 27,
    "avg_fp2": 6.66,
    "opp_rank_allowed_fp2": 24,
    "opp_avg_allowed_fp2": 10.68,
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
    "headlineNews": "Finds end zone vs. Colts",
    "report": "McDonald caught five of seven targets for 30 yards and a touchdown during Sunday's 26-24 win over the Colts.",
    "analysis": "McDonald tied a season high with seven targets and posted his second-highest mark of the campaign with five receptions. He didn't generate many big plays, averaging just 6.0 yards per catch, but a third-quarter touchdown salvaged his day from a fantasy perspective. McDonald had totaled 24 receiving yards combined over his last two outings, so productivity should not be assumed during next Sunday's home matchup with the Rams.",
    "timestamp": "2019-11-03 03:27 PM",
    "week01": 5.0,
    "week02": 19.3,
    "week03": 1.5,
    "week04": "DNP",
    "week05": 4.9,
    "week06": 1.0,
    "week07": "BYE",
    "week08": 3.4,
    "week09": 11.5,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.0, 19.3, 1.5, 'DNP', 4.9, 1.0, 'BYE', 3.4, 11.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.5, 4.3, 6.4, 'DNP', 4.9, 3.0, 'BYE', 5.1, 3.5, 7.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3043080.png",
    "name": "O.J. Howard",
    "depthchart": "Starter: TE-1",
    "team": "Tampa Bay Buccaneers",
    "projected": 6.5,
    "opponent": "Arizona Cardinals",
    "home_away": "",
    "opp_rank": 29,
    "team_rank": 7,
    "avg_fp2": 3.68,
    "opp_rank_allowed_fp2": 32,
    "opp_avg_allowed_fp2": 18.16,
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
    "headlineNews": "Ready to play",
    "report": "Howard is cleared to play in Sunday's game against the Cardinals, Greg Auman of The Athletic reports.",
    "analysis": "Howard averaged three targets and 2.2 catches over the first six weeks of the season, before missing the past two games with a hamstring injury. The workload concerns are still present, but he has a nice setup for Week 10 efficiency against a Cardinals defense that's given up a league-high 810 yards and nine touchdowns to tight ends.",
    "timestamp": "2019-11-08 09:18 AM",
    "week01": 3.2,
    "week02": 0.0,
    "week03": 8.1,
    "week04": 4.8,
    "week05": 1.5,
    "week06": 4.5,
    "week07": "BYE",
    "week08": "DNP",
    "week09": "DNP",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [3.2, 0.0, 8.1, 4.8, 1.5, 4.5, 'BYE', 'DNP', 'DNP']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.9, 5.6, 8.4, 4.2, 7.5, 12.7, 'BYE', 'DNP', 'DNP', 6.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16732.png",
    "name": "Eric Ebron",
    "depthchart": "Backup: TE-2",
    "team": "Indianapolis Colts",
    "projected": 6.2,
    "opponent": "Miami Dolphins",
    "home_away": "",
    "opp_rank": 20,
    "team_rank": 23,
    "avg_fp2": 6.48,
    "opp_rank_allowed_fp2": 15,
    "opp_avg_allowed_fp2": 8.2,
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
    "headlineNews": "Just two receptions Sunday",
    "report": "Ebron had two receptions for 16 yards on two targets in Sunday's 26-24 loss at Pittsburgh.",
    "analysis": "Ebron played just 24 snaps on offense (compared to Jack Doyle's 54 snaps) as he didn't see a big increase in playing time despite the absence of T.Y. Hilton (calf). Ebron remains a red-zone target, but he's a boom-or-bust fantasy option due to few consistent targets.",
    "timestamp": "2019-11-04 12:37 PM",
    "week01": 1.3,
    "week02": 10.0,
    "week03": 6.2,
    "week04": 11.3,
    "week05": 1.3,
    "week06": "BYE",
    "week07": 15.0,
    "week08": 4.1,
    "week09": 2.6,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.3, 10.0, 6.2, 11.3, 1.3, 'BYE', 15.0, 4.1, 2.6]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.9, 3.3, 12.1, 7.0, 3.7, 'BYE', 3.9, 2.7, 4.8, 6.2]
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
    "opponent": "San Francisco 49ers",
    "home_away": "at ",
    "opp_rank": 1,
    "team_rank": 9,
    "avg_fp2": 6.0,
    "opp_rank_allowed_fp2": 1,
    "opp_avg_allowed_fp2": 4.12,
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
    "headlineNews": "Secures game-winning TD",
    "report": "Hollister caught four of six targets for 37 yards and two touchdowns in Sunday's 40-34 win over the Buccaneers.",
    "analysis": "Hollister hauled in a one-yard touchdown pass from Russell Wilson late in the second quarter, and he nearly scored again in the third quarter but was stopped at Tampa Bay's one-yard line. He was saving his second score for a heroic moment, however, as Hollister snagged a 10-yard pass from Russell Wilson in overtime for a touchdown and the win, lifting the Seahawks to 7-2 on the season. This success may be unsustainable in the long term, but Hollister does have fantasy value, albeit in a touchdown-dependent capacity. Hollister may end up passing Luke Willson in the tight-end pecking order in Week 10's matchup against the 49ers, but both players could see a decrease in potential once Josh Gordon is in the fold.",
    "timestamp": "2019-11-03 05:13 PM",
    "week01": "DNP",
    "week02": "DNP",
    "week03": "DNP",
    "week04": "DNP",
    "week05": "DNP",
    "week06": 0.0,
    "week07": 3.5,
    "week08": 2.8,
    "week09": 17.7,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 0.0, 3.5, 2.8, 17.7]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: ['DNP', 'DNP', 'DNP', 'DNP', 'DNP', 0.2, -0.2, 8.7, 1.9, 6.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/14145.png",
    "name": "Charles Clay",
    "depthchart": "Backup: TE-2",
    "team": "Arizona Cardinals",
    "projected": 5.8,
    "opponent": "Tampa Bay Buccaneers",
    "home_away": "at ",
    "opp_rank": 31,
    "team_rank": 19,
    "avg_fp2": 2.49,
    "opp_rank_allowed_fp2": 31,
    "opp_avg_allowed_fp2": 15.71,
    "fanduelSalary": "$4500",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#97233F",
    "tmColorDark": "#000000",
    "tmColorLite_rgba": "rgba(151, 35, 63, 0.2)",
    "tmColorDark_rgba": "rgba(0, 0, 0, 0.2)",
    "tmTextLite": "#97233F",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
    "headlineNews": "Hauls in one pass Thursday",
    "report": "Clay recorded one reception (on two targets) for six yards during Thursday's 28-25 defeat to the 49ers.",
    "analysis": "Coming off a season-best three catches for 88 yards Week 8 at New Orleans, Clay reverted back to his typical stat line, as he failed to reach double-digit receiving yards in five of the first six games of the year. He also ranked behind fellow tight end Maxx Williams in terms of offensive snap share, 42 versus 74 percent. Expect both players to continue splitting the workload at the position moving forward.",
    "timestamp": "2019-11-02 06:59 PM",
    "week01": 1.0,
    "week02": 1.1,
    "week03": 1.4,
    "week04": 0.8,
    "week05": 3.2,
    "week06": 1.8,
    "week07": 1.7,
    "week08": 10.3,
    "week09": 1.1,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.0, 1.1, 1.4, 0.8, 3.2, 1.8, 1.7, 10.3, 1.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.9, 1.1, 9.1, 3.6, 4.1, 4.5, 1.7, 0.8, 3.3, 5.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/3116164.png",
    "name": "Mike Gesicki",
    "depthchart": "Starter: TE-1",
    "team": "Miami Dolphins",
    "projected": 5.3,
    "opponent": "Indianapolis Colts",
    "home_away": "at ",
    "opp_rank": 15,
    "team_rank": 29,
    "avg_fp2": 4.41,
    "opp_rank_allowed_fp2": 25,
    "opp_avg_allowed_fp2": 11.5,
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
    "headlineNews": "Career game as team finally wins",
    "report": "Gesicki caught all six of his targets for 95 yards in Sunday's 26-18 win over the Jets.",
    "analysis": "Gesicki delivered career highs in both catches and yards. The 2018 second-rounder is still looking for his first career touchdown, but there's still untapped upside in Gesicki, whose tremendous physical traits made scouts take notice at the 2018 combine. If he can build on this performance and deliver a strong second half to his sophomore season, Gesicki would quickly turn into an intriguing sleeper ahead of the 2020 campaign, when Miami will hopefully have much more competent quarterback play.",
    "timestamp": "2019-11-03 01:49 PM",
    "week01": 4.1,
    "week02": 1.6,
    "week03": 2.4,
    "week04": 0.0,
    "week05": "BYE",
    "week06": 6.6,
    "week07": 6.1,
    "week08": 2.0,
    "week09": 12.5,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.1, 1.6, 2.4, 0.0, 'BYE', 6.6, 6.1, 2.0, 12.5]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.4, 3.0, 1.7, 7.2, 'BYE', 4.1, 0.4, 8.1, 1.1, 5.3]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/4036133.png",
    "name": "T.J. Hockenson",
    "depthchart": "Starter: TE-1",
    "team": "Detroit Lions",
    "projected": 4.9,
    "opponent": "Chicago Bears",
    "home_away": "at ",
    "opp_rank": 14,
    "team_rank": 3,
    "avg_fp2": 6.58,
    "opp_rank_allowed_fp2": 30,
    "opp_avg_allowed_fp2": 12.22,
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
    "headlineNews": "Avoids injury report",
    "report": "Hockenson (undisclosed) wasn't listed on the Lions' injury report Wednesday.",
    "analysis": "Hockenson was removed during the fourth quarter of this past Sunday's game at Oakland to be evaluated for a concussion. While Hockenson passed all neurological tests, coach Matt Patricia told Justin Rogers of The Detroit News afterward that the tight end had the breath taken out of him. The hit from Raiders safety Erik Harris was enough to keep Hockenson sidelined for the remainder of Sunday's game, but didn't result in any sort of designation on the Lions' initial Week 10 practice report. Hockenson thus can prepare in earnest for a Bears defense that has conceded 8.2 yards per target and 6.5 receptions per game to tight ends this season.",
    "timestamp": "2019-11-06 03:47 PM",
    "week01": 22.1,
    "week02": 1.2,
    "week03": 0.6,
    "week04": 10.2,
    "week05": "BYE",
    "week06": 4.1,
    "week07": 4.7,
    "week08": 2.6,
    "week09": 7.1,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [22.1, 1.2, 0.6, 10.2, 'BYE', 4.1, 4.7, 2.6, 7.1]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [3.4, 7.3, 5.2, 1.2, 'BYE', 3.4, 4.9, 5.5, 3.3, 4.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/16318.png",
    "name": "Demetrius Harris",
    "depthchart": "Starter: TE-1",
    "team": "Cleveland Browns",
    "projected": 3.8,
    "opponent": "Buffalo Bills",
    "home_away": "",
    "opp_rank": 3,
    "team_rank": 17,
    "avg_fp2": 3.05,
    "opp_rank_allowed_fp2": 2,
    "opp_avg_allowed_fp2": 5.31,
    "fanduelSalary": "$4700",
    "hasStatus": "Status",
    "healthHea": "Healthy",
    "injury": "",
    "tmColorLite": "#FF3C00",
    "tmColorDark": "#311D00",
    "tmColorLite_rgba": "rgba(255, 60, 0, 0.2)",
    "tmColorDark_rgba": "rgba(49, 29, 0, 0.2)",
    "tmTextLite": "#FF3C00",
    "logoUrl": "https://a.espncdn.com/i/teamlogos/nfl/500/cle.png",
    "headlineNews": "Moves up depth chart",
    "report": "Harris caught three of four targets for 25 yards in Sunday's 24-19 loss to the Broncos.",
    "analysis": "Harris became the Browns' lead tight end after Ricky Seals-Jones (knee) departed the game in the second quarter. Cleveland tight ends haven't been used very much since David Njoku (wrist) was sidelined Week 2. Seals-Jones had emerged as the leading target at tight end, but the Browns' passing attack flows primarily through the wideouts.",
    "timestamp": "2019-11-04 03:48 AM",
    "week01": 0.0,
    "week02": 0.9,
    "week03": 6.7,
    "week04": 0.0,
    "week05": 0.5,
    "week06": 2.0,
    "week07": "BYE",
    "week08": 10.3,
    "week09": 4.0,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 0.9, 6.7, 0.0, 0.5, 2.0, 'BYE', 10.3, 4.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.2, -0.2, 3.4, 3.3, 0.1, 5.5, 'BYE', -1.2, 1.8, 3.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://a.espncdn.com/i/headshots/nfl/players/full/17453.png",
    "name": "Cameron Brate",
    "depthchart": "Backup: TE-2",
    "team": "Tampa Bay Buccaneers",
    "projected": 3.4,
    "opponent": "Arizona Cardinals",
    "home_away": "",
    "opp_rank": 29,
    "team_rank": 7,
    "avg_fp2": 4.33,
    "opp_rank_allowed_fp2": 32,
    "opp_avg_allowed_fp2": 18.16,
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
    "headlineNews": "No targets in loss",
    "report": "Brate (ribs) wasn't targeted in the Buccaneers' 40-34 overtime loss to the Seahawks on Sunday.",
    "analysis": "Brate saw fellow tight ends Tanner Hudson and Antony Auclair rather surprisingly log two targets apiece while he was shut out altogether. There was no report prior to the game Brate would be under any sort of snap limit if he was active, and there were no immediate details available after the game with respect to Brate's lack of involvement. The veteran tight end will look to bounce back in Week 10 against the Cardinals.",
    "timestamp": "2019-11-03 10:12 PM",
    "week01": 1.8,
    "week02": 2.0,
    "week03": 1.7,
    "week04": 11.1,
    "week05": 1.6,
    "week06": 11.7,
    "week07": "BYE",
    "week08": 4.7,
    "week09": 0.0,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite dot team color 1 
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [1.8, 2.0, 1.7, 11.1, 1.6, 11.7, 'BYE', 4.7, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [1.1, 1.2, 4.8, 1.4, 3.4, 6.3, 'BYE', 6.7, 9.0, 3.4]
                    }
                    
                    ]
               }
            }];



$scope.positionDST = [{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/BUF.png",
    "name": "Buffalo Bills",
    "depthchart": "",
    "team": "Buffalo Bills",
    "projected": 8.6,
    "opponent": "Cleveland Browns",
    "opp_rank_pts": 25,
    "opp_avg_pts": 19.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 3,
    "team_avg_allowed_pts": 15.75,
    "team_ranked_takeaways": 8,
    "team_avg_takeaways": 1.62,
    "opp_ranked_giveaways": 9,
    "opp_avg_giveaways": 1.12,
    "fanduelSalary": "$4500",
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
    "avg_fp2": 7.75,
    "week01": 10.0,
    "week02": 6.0,
    "week03": 13.0,
    "week04": 3.0,
    "week05": 11.0,
    "week06": "BYE",
    "week07": 7.0,
    "week08": 4.0,
    "week09": 8.0,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1
                         backgroundColor:  "rgba(198, 12, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [10.0, 6.0, 13.0, 3.0, 11.0, 'BYE', 7.0, 4.0, 8.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 85, 150, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.4, 7.8, 6.6, 5.1, 7.8, 'BYE', 7.6, 8.5, 8.0, 8.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/CHI.png",
    "name": "Chicago Bears",
    "depthchart": "",
    "team": "Chicago Bears",
    "projected": 8.5,
    "opponent": "Detroit Lions",
    "opp_rank_pts": 13,
    "opp_avg_pts": 24.75,
    "home_away": "",
    "team_rank_allowed_pts": 4,
    "team_avg_allowed_pts": 17.75,
    "team_ranked_takeaways": 16,
    "team_avg_takeaways": 1.38,
    "opp_ranked_giveaways": 9,
    "opp_avg_giveaways": 1.12,
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
    "avg_fp2": 8.25,
    "week01": 9.0,
    "week02": 5.0,
    "week03": 17.0,
    "week04": 17.0,
    "week05": 4.0,
    "week06": "BYE",
    "week07": 6.0,
    "week08": 4.0,
    "week09": 4.0,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1
                         backgroundColor:  "rgba(195, 104, 53, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.0, 5.0, 17.0, 17.0, 4.0, 'BYE', 6.0, 4.0, 4.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 22, 42, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.8, 8.0, 7.0, 9.0, 8.9, 'BYE', 7.3, 7.7, 7.2, 8.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/GB.png",
    "name": "Green Bay Packers",
    "depthchart": "",
    "team": "Green Bay Packers",
    "projected": 8.1,
    "opponent": "Carolina Panthers",
    "opp_rank_pts": 10,
    "opp_avg_pts": 25.88,
    "home_away": "",
    "team_rank_allowed_pts": 11,
    "team_avg_allowed_pts": 21.0,
    "team_ranked_takeaways": 28,
    "team_avg_takeaways": 0.89,
    "opp_ranked_giveaways": 31,
    "opp_avg_giveaways": 2.5,
    "fanduelSalary": "$4000",
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
    "avg_fp2": 6.44,
    "week01": 14.0,
    "week02": 12.0,
    "week03": 13.0,
    "week04": -1.0,
    "week05": 9.0,
    "week06": 3.0,
    "week07": 2.0,
    "week08": 4.0,
    "week09": 2.0,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1
                         backgroundColor:  "rgba(215, 160, 23, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.0, 12.0, 13.0, -1.0, 9.0, 3.0, 2.0, 4.0, 2.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(32, 55, 49, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.8, 9.6, 6.9, 8.0, 5.5, 7.8, 7.3, 6.0, 7.3, 8.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/SF.png",
    "name": "San Francisco 49ers",
    "depthchart": "",
    "team": "San Francisco 49ers",
    "projected": 7.7,
    "opponent": "Seattle Seahawks",
    "opp_rank_pts": 7,
    "opp_avg_pts": 27.56,
    "home_away": "",
    "team_rank_allowed_pts": 2,
    "team_avg_allowed_pts": 12.75,
    "team_ranked_takeaways": 8,
    "team_avg_takeaways": 1.62,
    "opp_ranked_giveaways": 24,
    "opp_avg_giveaways": 1.67,
    "fanduelSalary": "$4300",
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
    "avg_fp2": 11.62,
    "week01": 15.0,
    "week02": 7.0,
    "week03": 7.0,
    "week04": "BYE",
    "week05": 19.0,
    "week06": 10.0,
    "week07": 15.0,
    "week08": 17.0,
    "week09": 3.0,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1
                         backgroundColor:  "rgba(179, 153, 93, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [15.0, 7.0, 7.0, 'BYE', 19.0, 10.0, 15.0, 17.0, 3.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(184, 8, 62, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.8, 6.4, 7.2, 'BYE', 6.8, 7.5, 8.1, 7.9, 8.7, 7.7]
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
    "opponent": "Atlanta Falcons",
    "opp_rank_pts": 21,
    "opp_avg_pts": 20.62,
    "home_away": "",
    "team_rank_allowed_pts": 9,
    "team_avg_allowed_pts": 18.75,
    "team_ranked_takeaways": 17,
    "team_avg_takeaways": 1.38,
    "opp_ranked_giveaways": 5,
    "opp_avg_giveaways": 1.0,
    "fanduelSalary": "$5000",
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
    "avg_fp2": 8.0,
    "week01": 7.0,
    "week02": 5.0,
    "week03": 8.0,
    "week04": 11.0,
    "week05": 6.0,
    "week06": 11.0,
    "week07": 8.0,
    "week08": 8.0,
    "week09": "BYE",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(155, 132, 92, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.0, 5.0, 8.0, 11.0, 6.0, 11.0, 8.0, 8.0, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.9, 7.0, 5.7, 5.6, 6.2, 7.1, 6.7, 6.7, 'BYE', 7.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/IND.png",
    "name": "Indianapolis Colts",
    "depthchart": "",
    "team": "Indianapolis Colts",
    "projected": 7.1,
    "opponent": "Miami Dolphins",
    "opp_rank_pts": 30,
    "opp_avg_pts": 12.88,
    "home_away": "",
    "team_rank_allowed_pts": 18,
    "team_avg_allowed_pts": 22.38,
    "team_ranked_takeaways": 25,
    "team_avg_takeaways": 1.0,
    "opp_ranked_giveaways": 4,
    "opp_avg_giveaways": 1.0,
    "fanduelSalary": "$4900",
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
    "avg_fp2": 6.0,
    "week01": 5.0,
    "week02": 5.0,
    "week03": 2.0,
    "week04": 3.0,
    "week05": 10.0,
    "week06": "BYE",
    "week07": 9.0,
    "week08": 6.0,
    "week09": 8.0,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1
                         backgroundColor:  "rgba(1, 70, 131, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.0, 5.0, 2.0, 3.0, 10.0, 'BYE', 9.0, 6.0, 8.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 44, 95, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.1, 5.9, 8.1, 7.3, 5.3, 'BYE', 6.5, 6.9, 6.2, 7.1]
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
    "opponent": "San Francisco 49ers",
    "opp_rank_pts": 3,
    "opp_avg_pts": 29.38,
    "home_away": "at ",
    "team_rank_allowed_pts": 20,
    "team_avg_allowed_pts": 24.11,
    "team_ranked_takeaways": 22,
    "team_avg_takeaways": 1.11,
    "opp_ranked_giveaways": 27,
    "opp_avg_giveaways": 1.88,
    "fanduelSalary": "$4100",
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
    "avg_fp2": 5.44,
    "week01": 12.0,
    "week02": 3.0,
    "week03": 1.0,
    "week04": 10.0,
    "week05": 3.0,
    "week06": 7.0,
    "week07": 1.0,
    "week08": 9.0,
    "week09": 3.0,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(105, 190, 40, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.0, 3.0, 1.0, 10.0, 3.0, 7.0, 1.0, 9.0, 3.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.4, 7.6, 6.6, 6.2, 8.4, 7.4, 5.9, 5.9, 7.1, 7.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/BAL.png",
    "name": "Baltimore Ravens",
    "depthchart": "",
    "team": "Baltimore Ravens",
    "projected": 7.0,
    "opponent": "Cincinnati Bengals",
    "opp_rank_pts": 29,
    "opp_avg_pts": 14.38,
    "home_away": "at ",
    "team_rank_allowed_pts": 15,
    "team_avg_allowed_pts": 21.25,
    "team_ranked_takeaways": 21,
    "team_avg_takeaways": 1.12,
    "opp_ranked_giveaways": 8,
    "opp_avg_giveaways": 1.12,
    "fanduelSalary": "$5000",
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
    "avg_fp2": 4.88,
    "week01": 13.0,
    "week02": 4.0,
    "week03": 0.0,
    "week04": -1.0,
    "week05": 5.0,
    "week06": 5.0,
    "week07": 6.0,
    "week08": "BYE",
    "week09": 7.0,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1
                         backgroundColor:  "rgba(158, 124, 12, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [13.0, 4.0, 0.0, -1.0, 5.0, 5.0, 6.0, 'BYE', 7.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(36, 23, 115, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [9.4, 10.6, 6.5, 8.9, 7.8, 8.6, 6.3, 'BYE', 5.9, 7.0]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/NYJ.png",
    "name": "New York Jets",
    "depthchart": "",
    "team": "New York Jets",
    "projected": 6.9,
    "opponent": "New York Giants",
    "opp_rank_pts": 22,
    "opp_avg_pts": 19.78,
    "home_away": "",
    "team_rank_allowed_pts": 25,
    "team_avg_allowed_pts": 26.38,
    "team_ranked_takeaways": 3,
    "team_avg_takeaways": 2.12,
    "opp_ranked_giveaways": 30,
    "opp_avg_giveaways": 2.22,
    "fanduelSalary": "$3900",
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
    "avg_fp2": 4.12,
    "week01": 12.0,
    "week02": 5.0,
    "week03": 2.0,
    "week04": "BYE",
    "week05": 3.0,
    "week06": 1.0,
    "week07": 1.0,
    "week08": 3.0,
    "week09": 6.0,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1
                         backgroundColor:  "rgba(18, 87, 64, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [12.0, 5.0, 2.0, 'BYE', 3.0, 1.0, 1.0, 3.0, 6.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 63, 45, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.8, 7.8, 4.2, 'BYE', 5.5, 6.4, 4.8, 7.9, 6.2, 6.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/DET.png",
    "name": "Detroit Lions",
    "depthchart": "",
    "team": "Detroit Lions",
    "projected": 6.7,
    "opponent": "Chicago Bears",
    "opp_rank_pts": 27,
    "opp_avg_pts": 17.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 27,
    "team_avg_allowed_pts": 27.12,
    "team_ranked_takeaways": 6,
    "team_avg_takeaways": 1.75,
    "opp_ranked_giveaways": 9,
    "opp_avg_giveaways": 1.12,
    "fanduelSalary": "$4400",
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
    "avg_fp2": 5.25,
    "week01": 7.0,
    "week02": 9.0,
    "week03": 13.0,
    "week04": 5.0,
    "week05": "BYE",
    "week06": 7.0,
    "week07": -4.0,
    "week08": 5.0,
    "week09": 0.0,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 118, 182, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [7.0, 9.0, 13.0, 5.0, 'BYE', 7.0, -4.0, 5.0, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.6, 6.7, 5.6, 6.1, 'BYE', 6.1, 6.2, 7.4, 5.4, 6.7]
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
    "opponent": "Buffalo Bills",
    "opp_rank_pts": 21,
    "opp_avg_pts": 20.0,
    "home_away": "",
    "team_rank_allowed_pts": 22,
    "team_avg_allowed_pts": 25.62,
    "team_ranked_takeaways": 3,
    "team_avg_takeaways": 2.12,
    "opp_ranked_giveaways": 13,
    "opp_avg_giveaways": 1.25,
    "fanduelSalary": "$3500",
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
    "avg_fp2": 6.38,
    "week01": 0.0,
    "week02": 13.0,
    "week03": 9.0,
    "week04": 10.0,
    "week05": 5.0,
    "week06": 4.0,
    "week07": "BYE",
    "week08": 5.0,
    "week09": 5.0,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 60, 0, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 13.0, 9.0, 10.0, 5.0, 4.0, 'BYE', 5.0, 5.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(49, 29, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.9, 7.9, 7.1, 4.8, 5.8, 5.8, 'BYE', 4.8, 5.7, 6.7]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/DAL.png",
    "name": "Dallas Cowboys",
    "depthchart": "",
    "team": "Dallas Cowboys",
    "projected": 6.6,
    "opponent": "Minnesota Vikings",
    "opp_rank_pts": 11,
    "opp_avg_pts": 25.78,
    "home_away": "",
    "team_rank_allowed_pts": 4,
    "team_avg_allowed_pts": 17.75,
    "team_ranked_takeaways": 5,
    "team_avg_takeaways": 2.0,
    "opp_ranked_giveaways": 24,
    "opp_avg_giveaways": 1.67,
    "fanduelSalary": "$3800",
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
    "avg_fp2": 7.62,
    "week01": 6.0,
    "week02": 1.0,
    "week03": 11.0,
    "week04": 11.0,
    "week05": 1.0,
    "week06": 4.0,
    "week07": 15.0,
    "week08": "BYE",
    "week09": 12.0,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1
                         backgroundColor:  "rgba(127, 150, 149, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.0, 1.0, 11.0, 11.0, 1.0, 4.0, 15.0, 'BYE', 12.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(4, 30, 66, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.9, 5.8, 8.4, 4.9, 6.9, 7.1, 5.5, 'BYE', 6.4, 6.6]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/NYG.png",
    "name": "New York Giants",
    "depthchart": "",
    "team": "New York Giants",
    "projected": 6.4,
    "opponent": "New York Jets",
    "opp_rank_pts": 32,
    "opp_avg_pts": 10.75,
    "home_away": "at ",
    "team_rank_allowed_pts": 29,
    "team_avg_allowed_pts": 28.11,
    "team_ranked_takeaways": 12,
    "team_avg_takeaways": 1.56,
    "opp_ranked_giveaways": 13,
    "opp_avg_giveaways": 1.25,
    "fanduelSalary": "$4500",
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
    "avg_fp2": 4.44,
    "week01": -4.0,
    "week02": 2.0,
    "week03": 7.0,
    "week04": 18.0,
    "week05": 5.0,
    "week06": 3.0,
    "week07": 2.0,
    "week08": 7.0,
    "week09": 0.0,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [-4.0, 2.0, 7.0, 18.0, 5.0, 3.0, 2.0, 7.0, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(11, 34, 101, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.9, 8.0, 6.4, 7.0, 6.9, 4.1, 6.8, 6.4, 6.7, 6.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/PIT.png",
    "name": "Pittsburgh Steelers",
    "depthchart": "",
    "team": "Pittsburgh Steelers",
    "projected": 6.4,
    "opponent": "Los Angeles Rams",
    "opp_rank_pts": 8,
    "opp_avg_pts": 26.75,
    "home_away": "",
    "team_rank_allowed_pts": 14,
    "team_avg_allowed_pts": 21.12,
    "team_ranked_takeaways": 2,
    "team_avg_takeaways": 2.25,
    "opp_ranked_giveaways": 16,
    "opp_avg_giveaways": 1.38,
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
    "avg_fp2": 10.25,
    "week01": 0.0,
    "week02": 7.0,
    "week03": 11.0,
    "week04": 19.0,
    "week05": 11.0,
    "week06": 8.0,
    "week07": "BYE",
    "week08": 13.0,
    "week09": 13.0,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 182, 18, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 7.0, 11.0, 19.0, 11.0, 8.0, 'BYE', 13.0, 13.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [4.4, 8.3, 6.3, 8.1, 5.8, 7.0, 'BYE', 9.6, 7.0, 6.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/KC.png",
    "name": "Kansas City Chiefs",
    "depthchart": "",
    "team": "Kansas City Chiefs",
    "projected": 6.4,
    "opponent": "Tennessee Titans",
    "opp_rank_pts": 26,
    "opp_avg_pts": 18.67,
    "home_away": "at ",
    "team_rank_allowed_pts": 17,
    "team_avg_allowed_pts": 21.89,
    "team_ranked_takeaways": 32,
    "team_avg_takeaways": 0.67,
    "opp_ranked_giveaways": 15,
    "opp_avg_giveaways": 1.33,
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
    "avg_fp2": 6.22,
    "week01": 5.0,
    "week02": 11.0,
    "week03": 2.0,
    "week04": 6.0,
    "week05": 3.0,
    "week06": 5.0,
    "week07": 18.0,
    "week08": 5.0,
    "week09": 1.0,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1
                         backgroundColor:  "rgba(255, 184, 28, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.0, 11.0, 2.0, 6.0, 3.0, 5.0, 18.0, 5.0, 1.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(201, 36, 63, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.8, 6.1, 5.3, 5.9, 5.9, 6.7, 5.4, 5.6, 7.0, 6.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/TB.png",
    "name": "Tampa Bay Buccaneers",
    "depthchart": "",
    "team": "Tampa Bay Buccaneers",
    "projected": 6.4,
    "opponent": "Arizona Cardinals",
    "opp_rank_pts": 19,
    "opp_avg_pts": 21.67,
    "home_away": "",
    "team_rank_allowed_pts": 30,
    "team_avg_allowed_pts": 31.25,
    "team_ranked_takeaways": 1,
    "team_avg_takeaways": 2.5,
    "opp_ranked_giveaways": 1,
    "opp_avg_giveaways": 0.22,
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
    "avg_fp2": 4.88,
    "week01": 6.0,
    "week02": 9.0,
    "week03": 8.0,
    "week04": 9.0,
    "week05": 1.0,
    "week06": 0.0,
    "week07": "BYE",
    "week08": 5.0,
    "week09": 1.0,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(213, 10, 10, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.0, 9.0, 8.0, 9.0, 1.0, 0.0, 'BYE', 5.0, 1.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.3, 8.2, 7.1, 7.5, 6.3, 6.3, 'BYE', 6.1, 5.8, 6.4]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/LA.png",
    "name": "Los Angeles Rams",
    "depthchart": "",
    "team": "Los Angeles Rams",
    "projected": 6.1,
    "opponent": "Pittsburgh Steelers",
    "opp_rank_pts": 18,
    "opp_avg_pts": 22.0,
    "home_away": "at ",
    "team_rank_allowed_pts": 15,
    "team_avg_allowed_pts": 21.62,
    "team_ranked_takeaways": 10,
    "team_avg_takeaways": 1.62,
    "opp_ranked_giveaways": 27,
    "opp_avg_giveaways": 1.88,
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
    "avg_fp2": 7.62,
    "week01": 9.0,
    "week02": 8.0,
    "week03": 9.0,
    "week04": 0.0,
    "week05": 2.0,
    "week06": 9.0,
    "week07": 15.0,
    "week08": 9.0,
    "week09": "BYE",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1
                         backgroundColor:  "rgba(134, 109, 75, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [9.0, 8.0, 9.0, 0.0, 2.0, 9.0, 15.0, 9.0, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 34, 68, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.1, 5.5, 8.1, 7.8, 5.2, 6.9, 5.4, 9.3, 'BYE', 6.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/MIN.png",
    "name": "Minnesota Vikings",
    "depthchart": "",
    "team": "Minnesota Vikings",
    "projected": 5.9,
    "opponent": "Dallas Cowboys",
    "opp_rank_pts": 5,
    "opp_avg_pts": 28.38,
    "home_away": "at ",
    "team_rank_allowed_pts": 6,
    "team_avg_allowed_pts": 17.78,
    "team_ranked_takeaways": 25,
    "team_avg_takeaways": 1.0,
    "opp_ranked_giveaways": 3,
    "opp_avg_giveaways": 0.88,
    "fanduelSalary": "$3600",
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
    "avg_fp2": 8.33,
    "week01": 14.0,
    "week02": 6.0,
    "week03": 7.0,
    "week04": 5.0,
    "week05": 12.0,
    "week06": 9.0,
    "week07": 3.0,
    "week08": 12.0,
    "week09": 7.0,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1
                         backgroundColor:  "rgba(224, 170, 25, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [14.0, 6.0, 7.0, 5.0, 12.0, 9.0, 3.0, 12.0, 7.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(48, 14, 90, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.9, 7.2, 8.3, 7.3, 6.8, 8.2, 6.4, 7.3, 6.1, 5.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/OAK.png",
    "name": "Oakland Raiders",
    "depthchart": "",
    "team": "Oakland Raiders",
    "projected": 5.9,
    "opponent": "Los Angeles Chargers",
    "opp_rank_pts": 23,
    "opp_avg_pts": 19.67,
    "home_away": "",
    "team_rank_allowed_pts": 26,
    "team_avg_allowed_pts": 27.0,
    "team_ranked_takeaways": 29,
    "team_avg_takeaways": 0.88,
    "opp_ranked_giveaways": 20,
    "opp_avg_giveaways": 1.44,
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
    "avg_fp2": 3.0,
    "week01": 4.0,
    "week02": 3.0,
    "week03": -1.0,
    "week04": 4.0,
    "week05": 8.0,
    "week06": "BYE",
    "week07": -3.0,
    "week08": 3.0,
    "week09": 6.0,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(165, 172, 175, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [4.0, 3.0, -1.0, 4.0, 8.0, 'BYE', -3.0, 3.0, 6.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [5.1, 5.5, 6.4, 4.1, 7.9, 'BYE', 4.8, 5.5, 5.6, 5.9]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/TEN.png",
    "name": "Tennessee Titans",
    "depthchart": "",
    "team": "Tennessee Titans",
    "projected": 5.8,
    "opponent": "Kansas City Chiefs",
    "opp_rank_pts": 6,
    "opp_avg_pts": 28.0,
    "home_away": "",
    "team_rank_allowed_pts": 8,
    "team_avg_allowed_pts": 18.33,
    "team_ranked_takeaways": 20,
    "team_avg_takeaways": 1.22,
    "opp_ranked_giveaways": 23,
    "opp_avg_giveaways": 1.56,
    "fanduelSalary": "$3400",
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
    "avg_fp2": 7.89,
    "week01": 17.0,
    "week02": 8.0,
    "week03": 1.0,
    "week04": 11.0,
    "week05": 7.0,
    "week06": 4.0,
    "week07": 4.0,
    "week08": 11.0,
    "week09": 8.0,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1
                         backgroundColor:  "rgba(68, 149, 209, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [17.0, 8.0, 1.0, 11.0, 7.0, 4.0, 4.0, 11.0, 8.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 92, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.0, 6.4, 7.0, 5.4, 8.5, 6.0, 7.0, 7.2, 7.4, 5.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/ARI.png",
    "name": "Arizona Cardinals",
    "depthchart": "",
    "team": "Arizona Cardinals",
    "projected": 5.8,
    "opponent": "Tampa Bay Buccaneers",
    "opp_rank_pts": 4,
    "opp_avg_pts": 28.88,
    "home_away": "at ",
    "team_rank_allowed_pts": 28,
    "team_avg_allowed_pts": 27.89,
    "team_ranked_takeaways": 25,
    "team_avg_takeaways": 1.0,
    "opp_ranked_giveaways": 16,
    "opp_avg_giveaways": 1.38,
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
    "avg_fp2": 3.11,
    "week01": 5.0,
    "week02": 2.0,
    "week03": 0.0,
    "week04": 4.0,
    "week05": 1.0,
    "week06": 1.0,
    "week07": 14.0,
    "week08": 1.0,
    "week09": 0.0,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(151, 35, 63, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [5.0, 2.0, 0.0, 4.0, 1.0, 1.0, 14.0, 1.0, 0.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [8.0, 6.8, 8.1, 6.1, 7.0, 6.9, 6.8, 5.6, 6.6, 5.8]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/CAR.png",
    "name": "Carolina Panthers",
    "depthchart": "",
    "team": "Carolina Panthers",
    "projected": 5.5,
    "opponent": "Green Bay Packers",
    "opp_rank_pts": 14,
    "opp_avg_pts": 24.33,
    "home_away": "at ",
    "team_rank_allowed_pts": 23,
    "team_avg_allowed_pts": 25.75,
    "team_ranked_takeaways": 14,
    "team_avg_takeaways": 1.5,
    "opp_ranked_giveaways": 20,
    "opp_avg_giveaways": 1.44,
    "fanduelSalary": "$3300",
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
    "avg_fp2": 9.38,
    "week01": 2.0,
    "week02": 5.0,
    "week03": 13.0,
    "week04": 14.0,
    "week05": 8.0,
    "week06": 19.0,
    "week07": "BYE",
    "week08": 3.0,
    "week09": 11.0,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 133, 202, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.0, 5.0, 13.0, 14.0, 8.0, 19.0, 'BYE', 3.0, 11.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(16, 24, 32, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.8, 8.1, 6.6, 7.2, 7.5, 5.5, 'BYE', 7.9, 7.0, 5.5]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/LAC.png",
    "name": "Los Angeles Chargers",
    "depthchart": "",
    "team": "Los Angeles Chargers",
    "projected": 5.2,
    "opponent": "Oakland Raiders",
    "opp_rank_pts": 16,
    "opp_avg_pts": 22.75,
    "home_away": "at ",
    "team_rank_allowed_pts": 9,
    "team_avg_allowed_pts": 18.67,
    "team_ranked_takeaways": 22,
    "team_avg_takeaways": 1.11,
    "opp_ranked_giveaways": 4,
    "opp_avg_giveaways": 1.0,
    "fanduelSalary": "$3700",
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
    "avg_fp2": 6.78,
    "week01": 2.0,
    "week02": 8.0,
    "week03": 4.0,
    "week04": 11.0,
    "week05": 14.0,
    "week06": 2.0,
    "week07": 4.0,
    "week08": 9.0,
    "week09": 7.0,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 128, 198, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [2.0, 8.0, 4.0, 11.0, 14.0, 2.0, 4.0, 9.0, 7.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 42, 94, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.2, 6.6, 6.8, 6.9, 6.8, 7.2, 6.8, 7.2, 5.9, 5.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/ATL.png",
    "name": "Atlanta Falcons",
    "depthchart": "",
    "team": "Atlanta Falcons",
    "projected": 5.2,
    "opponent": "New Orleans Saints",
    "opp_rank_pts": 15,
    "opp_avg_pts": 23.38,
    "home_away": "at ",
    "team_rank_allowed_pts": 31,
    "team_avg_allowed_pts": 31.38,
    "team_ranked_takeaways": 17,
    "team_avg_takeaways": 1.38,
    "opp_ranked_giveaways": 2,
    "opp_avg_giveaways": 0.5,
    "fanduelSalary": "$3000",
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
    "avg_fp2": 0.75,
    "week01": 0.0,
    "week02": 10.0,
    "week03": 1.0,
    "week04": 0.0,
    "week05": -2.0,
    "week06": -1.0,
    "week07": -4.0,
    "week08": 2.0,
    "week09": "BYE",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(167, 25, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [0.0, 10.0, 1.0, 0.0, -2.0, -1.0, -4.0, 2.0, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.7, 5.8, 5.6, 6.5, 7.6, 5.3, 6.5, 4.9, 'BYE', 5.2]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/MIA.png",
    "name": "Miami Dolphins",
    "depthchart": "",
    "team": "Miami Dolphins",
    "projected": 5.1,
    "opponent": "Indianapolis Colts",
    "opp_rank_pts": 17,
    "opp_avg_pts": 22.5,
    "home_away": "at ",
    "team_rank_allowed_pts": 32,
    "team_avg_allowed_pts": 31.75,
    "team_ranked_takeaways": 8,
    "team_avg_takeaways": 1.62,
    "opp_ranked_giveaways": 16,
    "opp_avg_giveaways": 1.38,
    "fanduelSalary": "$3300",
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
    "avg_fp2": 2.0,
    "week01": -3.0,
    "week02": 3.0,
    "week03": 2.0,
    "week04": 0.0,
    "week05": "BYE",
    "week06": 1.0,
    "week07": 1.0,
    "week08": 4.0,
    "week09": 8.0,
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1
                         backgroundColor:  "rgba(0, 142, 151, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [-3.0, 3.0, 2.0, 0.0, 'BYE', 1.0, 1.0, 4.0, 8.0]
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 87, 120, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [6.5, 4.8, 5.2, 5.6, 'BYE', 6.5, 6.1, 6.1, 7.6, 5.1]
                    }
                    
                    ]
               }
            },
{
    "imageUrl": "https://static.nfl.com/static/content/public/static/img/fantasy/transparent/200x200/CIN.png",
    "name": "Cincinnati Bengals",
    "depthchart": "",
    "team": "Cincinnati Bengals",
    "projected": 4.9,
    "opponent": "Baltimore Ravens",
    "opp_rank_pts": 1,
    "opp_avg_pts": 30.5,
    "home_away": "",
    "team_rank_allowed_pts": 23,
    "team_avg_allowed_pts": 26.25,
    "team_ranked_takeaways": 13,
    "team_avg_takeaways": 1.5,
    "opp_ranked_giveaways": 16,
    "opp_avg_giveaways": 1.38,
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
    "avg_fp2": 2.88,
    "week01": 6.0,
    "week02": -2.0,
    "week03": 5.0,
    "week04": 2.0,
    "week05": 1.0,
    "week06": 9.0,
    "week07": 2.0,
    "week08": 0.0,
    "week09": "BYE",
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
               labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10'],
               datasets: [
                       {
                         label: "Actual",
                         pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1
                         backgroundColor:  "rgba(234, 115, 48, 1)",  //lite team color 1 // dot color
                         borderColor: 'rgba(255, 255, 255, .65)',  //white line leave white .65
                         borderWidth: 2,
                         pointRadius: 5,
                         fill: false,
                         data: [6.0, -2.0, 5.0, 2.0, 1.0, 9.0, 2.0, 0.0, 'BYE']
                    },
                    {
                        label: "Projected",
                        borderDash: [5,5],
                        pointBorderColor: "rgba(0, 0, 0, 1)", //dark team color 1 
                        backgroundColor:  'rgba(255, 255, 255, .65)',  //white dot leave white .65
                        borderColor: 'rgba(255, 255, 255, .5)',  //white line leave white .5
                        pointRadius: 5,
                        fill: false,
                        data: [7.3, 8.6, 5.0, 5.9, 7.5, 5.1, 6.1, 7.3, 'BYE', 4.9]
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