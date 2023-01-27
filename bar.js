import { draw } from "./radar.js";

draw([0]);

// Initialize the echarts instance based on the prepared dom
var myChart = echarts.init(document.getElementById('main1'));

// Specify the configuration items and data for the chart
var option = {
  title: {
        text: "The Students' sum score of Skills",
        right: "center",
        top: "top",
        textStyle: {
          fontSize: 12
        }
  },
  dataset: {
    source: [
      ['sum', 'alias'],
      [67, 'Soup'],
      [75, 'vq'],
      [84, 'jjettas'],
      [45, 'SunnyStockholm'],
      [77, 'Yami'],
      [33, 'pringles'],
      [81, 'Oseram'],
      [60, 'Rizzlord'],
      [46, 'Koronesuki'],
      [64, 'Daybeha'],
      [92, 'Pasta'],
      [66, 'PogChamp'],
      [76, 'Ropianos'],
      [57, 'Horse123'],
      [80, 'Rebin'],
      [88, 'monoid'],
      [49, 'Ishi'],
      [56, 'xXVisWizXx'],
      [72, 'Aloy'],
      [67, 'Turb0clutcharen'],
      [57, 'kanelbullar13'],
      [49, 'Skvarre'],
      [72, 'Pål'],
      [63, 'Modi'],
      [54, 'Bluebell'],
      [80, 'Noggin_bops'],
      [80, 'Lumos'],
      [67, 'Santa86'],
      [53, 'mercury'],
      [40, 'DonkeyKong1'],
      [65, 'ardillito28'],
      [64, 'rabbit99'],
      [63, 'unpwu'],
      [78, 'PetrifiedDropbear69'],
      [72, 'ChaCharizard'],
      [67, 'HalfCrimp'],
      [77, 'coldfooter'],
      [49, 'Ramennoodle'],
      [78, 'Rufstufsan'],
      [88, 'C3I2'],
      [75, 'Bempis2'],
    ]
  },
  grid: { top: '5%',
        left: '6%',
        right: '5%',
        bottom: '0%',
        containLabel: true },
  tooltip: {
        trigger: 'axis',
        axisPointer: {           
            type: 'line'        
        }
    },
  xAxis: { name: 'sum' },
  yAxis: { name: 'alias', type: 'category', axisLabel: {
        interval: 0,
        silent: false
      }},
  series: [
    {
      name: 'sum',
      type: 'bar',
      encode: {
        // Map the "sum" column to X axis.
        x: 'sum',
        // Map the "alias" column to Y axis
        y: 'alias'
      },
      label: {
        // Options: 'left', 'right', 'top', 'bottom', 'inside', 'insideTop', 'insideLeft', 'insideRight', 'insideBottom', 'insideTopLeft', 'insideTopRight', 'insideBottomLeft', 'insideBottomRight'
        position: 'right',
        distance: 10,
        show: true
      },
      barCategoryGap: '40%'
    }
  ]
};

// Display the chart using the configuration items and data just specified.
myChart.setOption(option);


var interests = {Soup: "Illustration, Video Games, 3D modelling/printing",
                 vq: "Sports (especially KENDO), Data analysis, Digital painting",
                 jjettas: "Sports (pro/college), Statistics, Entrepreneurship",
                 SunnyStockholm: "Football. Skiing, My family, Trying new things, Being challenged",
                 Yami: "Drawing, Reading, Series/movies, Cooking and baking for my friends",
                 pringles: "Basketball, Series/movies",
                 Oseram: "Software engineer, Ukulele, Traveling, Hiking. Movies, Cooking and making cocktails, Sailing",
                 Rizzlord: "High frequency crypto trading, Business, Basketball, Snowboarding, Guitar, Tiktok. Party",
                 Koronesuki: "Learning Japanese, Culture, Food, Anime, Vtubers, Training, Jogging, Strength training, Flexibility, Video Games, Computer graphics, Drawing",
                 Daybeha: "Code, Sports",
                 Pasta: "Visual computing, Computer Science, Bouldering, Hiking, Football, Skiing",
                 PogChamp: "Video Games, Reading, Movies, Bass guitar",
                 Ropianos: "Climbing/Bouldering, Learning languages, Programming, Board games, Video Games",
                 Horse123: "Video Games, Bartending",
                 Rebin: "Movies (old film-noir movies), Video games, Reading sci-fi cyberpunk",
                 monoid: "Programming language theory, 3d rendering, Piano, Building code editor in Rust and wasm",
                 Ishi: "Computer science, Reading, Fiction, Fantasy, Technology, Personal electronics, Transportation, Scuba diving, Traveling, Photography, Japan",
                 xXVisWizXx: "Video Games nerd, Video Games podcast, Conceptual games, Game jams, Trekking, Climbing mountains, Travelling, Guitar",
                 Aloy: "Drawing, Painting, Realism, Video Games, Sports",
                 Turb0clutcharen: "Graphic design, Geography, History, Technology, Play counter strike, Edit wikipedia articles",
                 kanelbullar13: "Inline skating outside (especially along a river or around a lake), Visiting art museums",
                 Skvarre: "Play in a band, Cooking, Video Games, Drinking beer",
                 Pål: "Coding (visual or auditory elements), Music producer, Audio engineer",
                 Modi: "Working out",
                 Bluebell: "Programming, Web programming, Design, Frontend programming, Dancing, Knitting, Photography",
                 Noggin_bops: "Real-time computer graphics, Game development, Maintainer for an open source project, Video Games, Sewing, Making perfume",
                 Lumos: "Working out, Movies, Reading, Chess, Music, Entrepreneurship",
                 Santa86: "Painting, Sports activities, Design",
                 mercury: "Sports, Handball, Dancing, Meet up with friends, Series/movies, Politics, Society, Science, Climate change, Biodiversity, Sustainability",
                 DonkeyKong1: "Photography, Knitting, Pottery",
                 ardillito28: "Working out, Meet up with friends, Play instruments (bass, guitar, piano and drums)",
                 rabbit99: "NA",
                 unpwu: "Chess, Table tennis, Cycling, Sports",
                 PetrifiedDropbear69: "Reading, Series, Video Games, Bouldering",
                 ChaCharizard: "Horseriding, Pokémon (the games and the card collection)",
                 HalfCrimp: "Climbing, Photography, Video Games, Dogs",
                 coldfooter: "Two children (9 and 6), Reading, Learning, Music, Coding, Generative art, Surfing",
                 Ramennoodle: "Being outdoors, Exploring new places, Working out, Cooking, Electric vehicles",
                 Rufstufsan: "Video Games, I like to be creative and productive",
                 C3I2: "Competetive wargamer", 
                 Bempis2: "Music, Singing in a choir, Drawing, Video games"};

// Here you can exec any function under handler,
// OR
// _
myChart.on('click', 'series', (e) => {
    console.log(e.name)
    console.log("Alias " + e.name + " has this interests: " + interests[e.name] + ".");
    document.getElementById("main2").innerHTML = e.name + "'s interests are: " + "<br />" + interests[e.name] + ".";
    draw([4, 4, 5, 7, 7, 4, 5, 5, 6, 8, 7, 5]);
 });
