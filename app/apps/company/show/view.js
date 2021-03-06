'use strict';

var Marionette = require('backbone.marionette');

// item
var View = Marionette.ItemView.extend({
  template: require('./templates/view.hbs'),

  templateHelpers: function(){
    return {
      data: this.options.data,
      company: this.options.data.company,
    }
  },

  events: {
    "click a.save-company": "saveCompany",
    "click a.show-detail": "showDetail",
  },

  saveCompany: function(e){
    e.preventDefault();
    $('#savedCompanies').append('<li><a href="#"><span>' + this.options.data.company.name + '</span></a></li>');
  },

  showDetail: function(e){
    e.preventDefault();
    $('tr[data-detail-id="' + $(e.target).closest('a').data('id') + '"]').toggle();
  },

  onShow: function(){
    this.showTrend();
    this.showEsg();
    this.showHighRisk();
    this.showHeatmap();
    $('#company-details').css('margin-top', $('#header-container').innerHeight() + parseFloat($('.navbar:first').outerHeight()));
  },

  showTrend: function(){

    var data = [{
        "date": "2015-07-27",
        "value": 13
    }, {
        "date": "2015-07-28",
        "value": 11
    }, {
        "date": "2015-07-29",
        "value": 15
    }, {
        "date": "2015-07-30",
        "value": 16
    }, {
        "date": "2015-07-31",
        "value": 18
    }, {
        "date": "2015-08-01",
        "value": 13
    }, {
        "date": "2015-08-02",
        "value": 22
    }, {
        "date": "2015-08-03",
        "value": 23
    }, {
        "date": "2015-08-04",
        "value": 20
    }, {
        "date": "2015-08-05",
        "value": 17
    }, {
        "date": "2015-08-06",
        "value": 16
    }, {
        "date": "2015-08-07",
        "value": 18
    }, {
        "date": "2015-08-08",
        "value": 21
    }, {
        "date": "2015-08-09",
        "value": 26
    }, {
        "date": "2015-08-10",
        "value": 24
    }, {
        "date": "2015-08-11",
        "value": 29
    }, {
        "date": "2015-08-12",
        "value": 32
    }, {
        "date": "2015-08-13",
        "value": 18
    }, {
        "date": "2015-08-14",
        "value": 24
    }, {
        "date": "2015-08-15",
        "value": 22
    }, {
        "date": "2015-08-16",
        "value": 18
    }, {
        "date": "2015-08-17",
        "value": 19
    }, {
        "date": "2015-08-18",
        "value": 14
    }, {
        "date": "2015-08-19",
        "value": 15
    }, {
        "date": "2015-08-20",
        "value": 12
    }, {
        "date": "2015-08-21",
        "value": 8
    }, {
        "date": "2015-08-22",
        "value": 9
    }, {
        "date": "2015-08-23",
        "value": 8
    }, {
        "date": "2015-08-24",
        "value": 7
    }, {
        "date": "2015-08-25",
        "value": 5
    }, {
        "date": "2015-08-26",
        "value": 11
    }, {
        "date": "2015-08-27",
        "value": 13
    }, {
        "date": "2015-08-28",
        "value": 18
    }, {
        "date": "2015-08-29",
        "value": 20
    }, {
        "date": "2015-08-30",
        "value": 29
    }, {
        "date": "2015-08-31",
        "value": 33
    }, {
        "date": "2015-09-01",
        "value": 42
    }, {
        "date": "2015-09-02",
        "value": 35
    }, {
        "date": "2015-09-03",
        "value": 31
    }, {
        "date": "2015-09-04",
        "value": 47
    }, {
        "date": "2015-09-05",
        "value": 52
    }, {
        "date": "2015-09-06",
        "value": 46
    }, {
        "date": "2015-09-07",
        "value": 41
    }, {
        "date": "2015-09-08",
        "value": 43
    }, {
        "date": "2015-09-09",
        "value": 40
    }, {
        "date": "2015-09-10",
        "value": 39
    }, {
        "date": "2015-09-11",
        "value": 34
    }, {
        "date": "2015-09-12",
        "value": 29
    }, {
        "date": "2015-09-13",
        "value": 34
    }, {
        "date": "2015-09-14",
        "value": 37
    }, {
        "date": "2015-09-15",
        "value": 42
    }, {
        "date": "2015-09-16",
        "value": 49
    }, {
        "date": "2015-09-17",
        "value": 46
    }, {
        "date": "2015-09-18",
        "value": 47
    }, {
        "date": "2015-09-19",
        "value": 55
    }, {
        "date": "2015-09-20",
        "value": 59
    }, {
        "date": "2015-09-21",
        "value": 58
    }, {
        "date": "2015-09-22",
        "value": 57
    }, {
        "date": "2015-09-23",
        "value": 61
    }, {
        "date": "2015-09-24",
        "value": 59
    }, {
        "date": "2015-09-25",
        "value": 67
    }, {
        "date": "2015-09-26",
        "value": 65
    }, {
        "date": "2015-09-27",
        "value": 61
    }, {
        "date": "2015-09-28",
        "value": 66
    }, {
        "date": "2015-09-29",
        "value": 69
    }, {
        "date": "2015-09-30",
        "value": 71
    }, {
        "date": "2015-10-01",
        "value": 67
    }, {
        "date": "2015-10-02",
        "value": 63
    }, {
        "date": "2015-10-03",
        "value": 46
    }, {
        "date": "2015-10-04",
        "value": 32
    }, {
        "date": "2015-10-05",
        "value": 21
    }, {
        "date": "2015-10-06",
        "value": 18
    }, {
        "date": "2015-10-07",
        "value": 21
    }, {
        "date": "2015-10-08",
        "value": 28
    }, {
        "date": "2015-10-09",
        "value": 27
    }, {
        "date": "2015-10-10",
        "value": 36
    }, {
        "date": "2015-10-11",
        "value": 33
    }, {
        "date": "2015-10-12",
        "value": 31
    }, {
        "date": "2015-10-13",
        "value": 30
    }, {
        "date": "2015-10-14",
        "value": 34
    }, {
        "date": "2015-10-15",
        "value": 38
    }, {
        "date": "2015-10-16",
        "value": 37
    }, {
        "date": "2015-10-17",
        "value": 44
    }, {
        "date": "2015-10-18",
        "value": 49
    }, {
        "date": "2015-10-19",
        "value": 53
    }, {
        "date": "2015-10-20",
        "value": 57
    }, {
        "date": "2015-10-21",
        "value": 60
    }, {
        "date": "2015-10-22",
        "value": 61
    }, {
        "date": "2015-10-23",
        "value": 69
    }, {
        "date": "2015-10-24",
        "value": 67
    }, {
        "date": "2015-10-25",
        "value": 72
    }, {
        "date": "2015-10-26",
        "value": 77
    }, {
        "date": "2015-10-27",
        "value": 75
    }, {
        "date": "2015-10-28",
        "value": 70
    }, {
        "date": "2015-10-29",
        "value": 72
    }, {
        "date": "2015-10-30",
        "value": 70
    }, {
        "date": "2015-10-31",
        "value": 72
    }, {
        "date": "2015-11-01",
        "value": 73
    }, {
        "date": "2015-11-02",
        "value": 67
    }, {
        "date": "2015-11-03",
        "value": 68
    }, {
        "date": "2015-11-04",
        "value": 65
    }, {
        "date": "2015-11-05",
        "value": 71
    }, {
        "date": "2015-11-06",
        "value": 75
    }, {
        "date": "2015-11-07",
        "value": 74
    }, {
        "date": "2015-11-08",
        "value": 71
    }, {
        "date": "2015-11-09",
        "value": 76
    }, {
        "date": "2015-11-10",
        "value": 77
    }, {
        "date": "2015-11-11",
        "value": 81
    }, {
        "date": "2015-11-12",
        "value": 83
    }, {
        "date": "2015-11-13",
        "value": 80
    }, {
        "date": "2015-11-14",
        "value": 81
    }, {
        "date": "2015-11-15",
        "value": 87
    }, {
        "date": "2015-11-16",
        "value": 82
    }, {
        "date": "2015-11-17",
        "value": 86
    }, {
        "date": "2015-11-18",
        "value": 80
    }, {
        "date": "2015-11-19",
        "value": 87
    }, {
        "date": "2015-11-20",
        "value": 83
    }, {
        "date": "2015-11-21",
        "value": 85
    }, {
        "date": "2015-11-22",
        "value": 84
    }, {
        "date": "2015-11-23",
        "value": 82
    }, {
        "date": "2015-11-24",
        "value": 73
    }, {
        "date": "2015-11-25",
        "value": 71
    }, {
        "date": "2015-11-26",
        "value": 75
    }, {
        "date": "2015-11-27",
        "value": 79
    }, {
        "date": "2015-11-28",
        "value": 70
    }, {
        "date": "2015-11-29",
        "value": 73
    }, {
        "date": "2015-11-30",
        "value": 61
    }, {
        "date": "2015-12-01",
        "value": 62
    }, {
        "date": "2015-12-02",
        "value": 66
    }, {
        "date": "2015-12-03",
        "value": 65
    }, {
        "date": "2015-12-04",
        "value": 73
    }, {
        "date": "2015-12-05",
        "value": 79
    }, {
        "date": "2015-12-06",
        "value": 78
    }, {
        "date": "2015-12-07",
        "value": 78
    }, {
        "date": "2015-12-08",
        "value": 78
    }, {
        "date": "2015-12-09",
        "value": 74
    }, {
        "date": "2015-12-10",
        "value": 73
    }, {
        "date": "2015-12-11",
        "value": 75
    }, {
        "date": "2015-12-12",
        "value": 70
    }, {
        "date": "2015-12-13",
        "value": 77
    }, {
        "date": "2015-12-14",
        "value": 67
    }, {
        "date": "2015-12-15",
        "value": 62
    }, {
        "date": "2015-12-16",
        "value": 64
    }, {
        "date": "2015-12-17",
        "value": 61
    }, {
        "date": "2015-12-18",
        "value": 59
    }, {
        "date": "2015-12-19",
        "value": 53
    }, {
        "date": "2015-12-20",
        "value": 54
    }, {
        "date": "2015-12-21",
        "value": 56
    }, {
        "date": "2015-12-22",
        "value": 59
    }, {
        "date": "2015-12-23",
        "value": 58
    }, {
        "date": "2015-12-24",
        "value": 55
    }, {
        "date": "2015-12-25",
        "value": 52
    }, {
        "date": "2015-12-26",
        "value": 54
    }, {
        "date": "2015-12-27",
        "value": 50
    }, {
        "date": "2015-12-28",
        "value": 50
    }, {
        "date": "2015-12-29",
        "value": 51
    }, {
        "date": "2015-12-30",
        "value": 52
    }, {
        "date": "2015-12-31",
        "value": 58
    }, {
        "date": "2016-01-01",
        "value": 60
    }, {
        "date": "2016-01-02",
        "value": 67
    }, {
        "date": "2016-01-03",
        "value": 64
    }, {
        "date": "2016-01-04",
        "value": 66
    }, {
        "date": "2016-01-05",
        "value": 60
    }, {
        "date": "2016-01-06",
        "value": 63
    }, {
        "date": "2016-01-07",
        "value": 61
    }, {
        "date": "2016-01-08",
        "value": 60
    }, {
        "date": "2016-01-09",
        "value": 65
    }, {
        "date": "2016-01-10",
        "value": 75
    }, {
        "date": "2016-01-11",
        "value": 77
    }, {
        "date": "2016-01-12",
        "value": 78
    }, {
        "date": "2016-01-13",
        "value": 70
    }, {
        "date": "2016-01-14",
        "value": 70
    }, {
        "date": "2016-01-15",
        "value": 73
    }, {
        "date": "2016-01-16",
        "value": 71
    }, {
        "date": "2016-01-17",
        "value": 74
    }, {
        "date": "2016-01-18",
        "value": 78
    }, {
        "date": "2016-01-19",
        "value": 85
    }, {
        "date": "2016-01-20",
        "value": 82
    }, {
        "date": "2016-01-21",
        "value": 83
    }, {
        "date": "2016-01-22",
        "value": 88
    }, {
        "date": "2016-01-23",
        "value": 85
    }, {
        "date": "2016-01-24",
        "value": 85
    }, {
        "date": "2016-01-25",
        "value": 80
    }, {
        "date": "2016-01-26",
        "value": 87
    }, {
        "date": "2016-01-27",
        "value": 84
    }, {
        "date": "2016-01-28",
        "value": 83
    }, {
        "date": "2016-01-29",
        "value": 84
    }, {
        "date": "2016-01-30",
        "value": 81
    }, {
        "date": "2016-02-01",
        "value": 62
    }];

    data = data.map(function(element){
      element.baseline = element.value * (Math.floor(Math.random() * 31) + 85) / 100;
      element.investor = element.value * (Math.floor(Math.random() * 11) + 55) / 100;
      element.corporate = element.value * (Math.floor(Math.random() * 61) + 15) / 100;
      return element;
    });

    var chart = AmCharts.makeChart("mytrend", {
        "type": "serial",
        "theme": "light",
        "marginRight": 40,
        "marginLeft": 40,
        "autoMarginOffset": 20,
        "mouseWheelZoomEnabled":true,
        "dataDateFormat": "YYYY-MM-DD",
        "valueAxes": [{
            "id": "v1",
            "axisAlpha": 0,
            "position": "left",
            "ignoreAxisWidth":true
        }],
        "balloon": {
            "borderThickness": 1,
            "shadowAlpha": 0
        },
        "graphs": [{
            "id": "g1",
            "balloon":{
              "drop":true,
              "adjustBorderColor":false,
              "color":"#ffffff"
            },
            "bullet": "round",
            "bulletBorderAlpha": 1,
            "bulletColor": "#FFFFFF",
            "bulletSize": 5,
            "hideBulletsCount": 50,
            "lineThickness": 2,
            "title": "Global Ranking",
            "useLineColorForBulletBorder": true,
            "valueField": "value",
            "balloonText": "<span style='font-size:18px;'>[[value]]</span>",
            "type": "smoothedLine"
        },{
          "id": "g2",
          "lineThickness": 2,
          "title": "Industry Avg",
          "useLineColorForBulletBorder": true,
          "valueField": "baseline",
          "balloonText": "<span style='font-size:18px;'>[[value]]</span>",
          "type": "smoothedLine"
        },{
          "id": "g3",
          "lineThickness": 2,
          "title": "Investor Ranking",
          "useLineColorForBulletBorder": true,
          "valueField": "investor",
          "balloonText": "<span style='font-size:18px;'>[[value]]</span>",
          "type": "smoothedLine",
          "hidden": true,
        },{
          "id": "g4",
          "lineThickness": 2,
          "title": "Corporate Ranking",
          "useLineColorForBulletBorder": true,
          "valueField": "corporate",
          "balloonText": "<span style='font-size:18px;'>[[value]]</span>",
          "type": "smoothedLine",
          "hidden": true,
        }],
        "chartScrollbar": {
            "graph": "g1",
            "oppositeAxis":false,
            "offset":30,
            "scrollbarHeight": 80,
            "backgroundAlpha": 0,
            "selectedBackgroundAlpha": 0.1,
            "selectedBackgroundColor": "#888888",
            "graphFillAlpha": 0,
            "graphLineAlpha": 0.5,
            "selectedGraphFillAlpha": 0,
            "selectedGraphLineAlpha": 1,
            "autoGridCount":true,
            "color":"#AAAAAA"
        },
        "chartCursor": {
            "pan": true,
            "valueLineEnabled": true,
            "valueLineBalloonEnabled": true,
            "cursorAlpha":1,
            "cursorColor":"#258cbb",
            "limitToGraph":"g1",
            "valueLineAlpha":0.2
        },
        /*
        "valueScrollbar":{
          "oppositeAxis":false,
          "offset":50,
          "scrollbarHeight":10
        },
        */
        "categoryField": "date",
        "categoryAxis": {
            "parseDates": true,
            "dashLength": 1,
            "minorGridEnabled": true
        },
        "export": {
            "enabled": true
        },
        "legend": {
            "equalWidths": true,
            "position": "top",
            "valueAlign": "left",
        },
        "dataProvider": data
    });

    chart.addListener("rendered", zoomChart);
    zoomChart();
    function zoomChart() {
        chart.zoomToIndexes(chart.dataProvider.length - 40, chart.dataProvider.length - 1);
    }
  },

  showHighRisk: function(){

  },

  showEsg: function(){
    var chart = AmCharts.makeChart("esg", {
    	"type": "serial",
      "theme": "light",
    	"categoryField": "type",
    	"rotate": true,
    	"startDuration": 1,
    	"categoryAxis": {
    		"gridPosition": "start",
    		"position": "left"
    	},
    	"trendLines": [],
    	"graphs": [
    		{
    			"balloonText": "My Ranking: [[value]]",
    			"fillAlphas": 0.8,
    			"id": "AmGraph-1",
    			"lineAlpha": 0.2,
    			"title": "Ranking",
    			"type": "column",
    			"valueField": "ranking",
    		},
    		{
    			"balloonText": "Industry Avg: [[value]]",
    			"fillAlphas": 0.8,
    			"id": "AmGraph-2",
    			"lineAlpha": 0.2,
    			"title": "Industry Avg",
    			"type": "column",
    			"valueField": "avg"
    		}
    	],
    	"guides": [],
    	"valueAxes": [
    		{
    			"id": "ValueAxis-1",
    			"position": "top",
    			"axisAlpha": 0
    		}
    	],
    	"allLabels": [],
    	"balloon": {},
    	"titles": [],
    	"dataProvider": [
    		{
    			"type": "Environmental",
    			"ranking": 23.5,
    			"avg": 18.1,
          "color": "#67b7dc"
    		},
    		{
    			"type": "Social",
    			"ranking": 26.2,
    			"avg": 22.8,
          "color": "#FF0000"
    		},
    		{
    			"type": "Governance",
    			"ranking": 29.5,
    			"avg": 25.1
    		}
    	],
        "export": {
        	"enabled": true
         }

    });
  },

  showHeatmap: function(){
    $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=world-population-density.json&callback=?', function (data) {

        // Add lower case codes to the data set for inclusion in the tooltip.pointFormat
        $.each(data, function () {
            this.flag = this.code.replace('UK', 'GB').toLowerCase();
        });

        // Initiate the chart
        $('#heatmap').highcharts('Map', {

            title: {
                text: null
            },

            legend: {
                title: {
                    text: 'Story Volume',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
                    }
                }
            },

            exporting: {
              enabled: false
            },

            mapNavigation: {
                enabled: true,
                buttonOptions: {
                    verticalAlign: 'bottom'
                }
            },

            tooltip: {
                backgroundColor: 'none',
                borderWidth: 0,
                shadow: false,
                useHTML: true,
                padding: 0,
                pointFormat: '<span class="f32"><span class="flag {point.flag}"></span></span>' +
                    ' {point.name}: <b>{point.value}</b>',
                positioner: function () {
                    return { x: 0, y: 250 };
                }
            },

            colorAxis: {
                min: 1,
                max: 100,
                type: 'logarithmic'
            },

            series : [{
                data : data,
                mapData: Highcharts.maps['custom/world'],
                joinBy: ['iso-a2', 'code'],
                name: 'Stories',
                states: {
                    hover: {
                        color: '#BADA55'
                    }
                }
            }]
        });
    });
  }

});

module.exports = View;
