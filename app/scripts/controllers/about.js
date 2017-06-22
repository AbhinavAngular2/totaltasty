'use strict';

/**
 * @ngdoc function
 * @name csetWebApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the csetWebApp
 */
angular.module('csetWebApp')
  .controller('AboutCtrl', function ($scope,$location,stateStore,myData,dataLen) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	$scope.data=['user1','user2','user3'];
	$scope.user1Click=function(index){
		$scope.index=index;
		stateStore.setData($scope.index);
		//console.log($scope.index);
		$location.path('/registration'); 
	};
//.................................................................	

$scope.chartConfig = {
        options: {
             chart: {
            type: 'column',
			 options3d: {
                enabled: true,
                alpha: 2,
                beta: 2,
                depth: 70
            }
        },
        title: {
            text: 'Monthly Average Rainfall'
        },
        subtitle: {
            text: 'Source: WorldClimate.com'
        },
		plotOptions: {
            column: {
                depth: 25
            }
        },
        xAxis: {
            categories: [
                '1. Technologies and Connection Types',
                '2. Delivery Channels',
                '3. online.Mobile Products and Technology Services',
                '4. Organization Characteristics',
                '5. External Threats'
                
            ],
        },
        yAxis: {
			labels: {
                enabled: true
            },
             max:5,
             min: 0,
			 minorGridLineWidth: 0,
			// gridLineWidth: 0,
			 plotBands: [{ // Poor
                from: 0.0,
                to: 1.49,
                color: 'red',
                label: {
					x: -45,
                    text: 'Least',
                    style: {
                        color: 'green'
                    }
                }
            }, { // Below Average
                from:1.50,
                to: 2.49,
                color: 'green',
                label: {
					x: -45,
                // align: 'left',             
               // border:'1px solid red',
                    text: 'Minimal',
                    style: {
                        color: '#000000'
                    }
                }
            }, { // Average
                from:2.50,
                to: 3.49,
                color: 'pink',
                label: {
					x: -60,
                    text: 'Moderate',
                    style: {
                        color: '#000000'
                    }
                }
            }, { // Good
                from:3.50,
                to: 4.49,
                color: 'gray',
                label: {
					x: -60,
                    text: 'Significant',
                    style: {
                        color: '#000000'
                    }
                }
            },
			{ // Good
                from:4.50,
                to: 8,
                color: 'yellow',
                label: {
					x: -45,
                    text: 'Most',
                    style: {
                        color: '#000000'
                    }
                }
            }
			]
        },
		tooltip: {
			valueDecimals: 3,
            formatter: function() {return ' ' +
                'Risk Score: ' + this.point.Risk + '<br />' +
                'No. of Question: ' + this.point.Question + '<br />';
           
            }
        }
        },
        series: [{
            data: [{
                y: 3,
                Risk: 1,
                Question: 1,
            }, {
                y: 5,
                Risk: 2,
                Question: 1,
            }, {
                y: 7,
                Risk: 3,
                Question: 1,
            }]
        }],
    };
	 var riskScore = myData.getter();
	 var question =dataLen.getterLen();
	 $scope.chartConfig.series[0]=  {
          data:[{
			  y:riskScore[0],
                Risk:riskScore[0],
                Question:question[0],
		  },{
			  y:riskScore[1],
                Risk:riskScore[1],
                Question:question[1],
		  },{
			  y:riskScore[2],
                Risk:riskScore[2],
                Question:question[2],
		  }],
            };
  });
