'use strict';

/**
 * @ngdoc function
 * @name csetWebApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the csetWebApp
 */
angular.module('csetWebApp')
  .controller('ContactCtrl', function ($scope,$location,myData,dataLen,setName) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
//////////////////////////////////////////////////////////////////////////////
   $scope.username = setName.getterLen();
   console.log('this is ',$scope.username);
	  $scope.dataDetails =
  [
  {
    'category': 'Technologies and Connection Types',
     'questions':[
    {'questionText': 'Why is the sky blue?', 
	},
    {'questionText': 'Why is the meaning of life?', 
	},
    {'questionText': 'How many pennies are in $10.00?', 
	},
    {'questionText': 'What is the default program?', 
	}
  ]	
  },
  {
    'category': 'Delivery Channels',
     'questions':[
    {'questionText': 'Why is the sky blue?-2', 
	},
    {'questionText': 'Why is the meaning of life?--2', 
	},
    {'questionText': 'How many pennies are in $10.00?--2', 
	},
    {'questionText': 'What is the default program?--2', 
	}
  ]	
  },
  {
    'category': 'online.Mobile Products and Technology Services',
     'questions':[
    {'questionText': 'Why is the sky blue?-2', 
	},
    {'questionText': 'Why is the meaning of life?--2', 
	},
    {'questionText': 'How many pennies are in $10.00?--2', 
	},
    {'questionText': 'What is the default program?--2', 
	}
  ]	
  },
  {
    'category': 'Organization Characteristics',
     'questions':[
    {'questionText': 'Why is the sky blue?-2', 
	},
    {'questionText': 'Why is the meaning of life?--2', 
	},
    {'questionText': 'How many pennies are in $10.00?--2', 
	},
    {'questionText': 'What is the default program?--2', 
	}
  ]	
  },
  {
    'category': 'External Threats',
     'questions':[
    {'questionText': 'Why is the sky blue?-2', 
	},
    {'questionText': 'Why is the meaning of life?--2', 
	},
    {'questionText': 'How many pennies are in $10.00?--2', 
	},
    {'questionText': 'What is the default program?--2', 
	}
  ]	
  },
  ];
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
////////////////////////////////////////////////////////////////////////////	
	
	
	
	
	
	  $scope.items = [];
  $scope.selectedItem = { name: 'All',id:'1'};
  $scope.items = ['All', 'Answered', 'Un-answered'];
   $scope.someInitFunc = function () {
    return 'All';
  };
  $scope.update = function() {
	//alert(index);
	};
  
  $scope.questions = [
    {'questionText': 'Why is the sky blue?', 
	},
    {'questionText': 'Why is the meaning of life?', 
	},
    {'questionText': 'How many pennies are in $10.00?', 
	},
    {'questionText': 'What is the default program?', 
	}
  ];
  $scope.questions2 = [
    {'questionText': 'Why is the sky Abhinav?', 
	},
    {'questionText': 'Why is the meaning of Kumar ?', 
	},
    {'questionText': 'How many pennies are in Singh', 
	},
    {'questionText': 'What is the default program?', 
	}
  ];
  $scope.questions3 = [
    {'questionText': 'Why is the sky blue?', 
	},
    {'questionText': 'Why is the meaning of life?', 
	},
    {'questionText': 'How many pennies are in $10.00?', 
	},
    {'questionText': 'What is the default program?', 
	}
  ];
  $scope.questions4 = [
    {'questionText': 'Why is the sky Abhinav?', 
	},
    {'questionText': 'Why is the meaning of Kumar ?', 
	},
    {'questionText': 'How many pennies are in Singh', 
	},
    {'questionText': 'What is the default program?', 
	}
  ];
  $scope.questions5 = [
    {'questionText': 'Why is the sky Abhinav?', 
	},
    {'questionText': 'Why is the meaning of Kumar ?', 
	},
    {'questionText': 'How many pennies are in Singh', 
	},
    {'questionText': 'What is the default program?', 
	}
  ];
  $scope.answer = [
      {'answerText':'List', 'weightage': 1,isDefault:false},
      {'answerText':'Minimal', 'weightage': 2,isDefault:false},
      {'answerText':'Moderate', 'weightage': 3,isDefault:false},
	  {'answerText':'Significant', 'weightage': 4,isDefault:false},
	  {'answerText':'Most', 'weightage': 5,isDefault:false}
      ];
    $scope.sum = function(items, prop){
        return items.reduce( function(a, b){
            return a + b[prop];
        }, 0);
    };
	$scope.AverageRi=[];
	$scope.questionLength=[];
	//............................Technologies and Connection Types....................................
	$scope.services=[];
    $scope.technologiesQuestion=[];	
    $scope.logIt=function(answe,question){
			$scope.services.push(answe);
            $scope.technologiesQuestion.push(question);			
	};
     var len=$scope.questions.length;
	$scope.showResult=function(){
		if ($scope.services.length===0){
		   $scope.RiskScore ='0';
		  $scope.AverageRisk = parseInt($scope.RiskScore)/len;
		  }			
		else{
			$scope.RiskScore = $scope.sum($scope.services, 'weightage');
			$scope.AverageRisk = parseInt($scope.RiskScore)/len;
			}
			$scope.AverageRi.push($scope.AverageRisk);
	};
	//......................Delivery Channels............................................
	 $scope.services2=[];
	 var len2=$scope.questions2.length;
    $scope.logIt2=function(answe2){
		$scope.services2.push(answe2);  
	};
	$scope.showResult2=function(){
		if ($scope.services2.length===0){
		   $scope.RiskScore2 ='0';
		  $scope.AverageRisk2 = parseInt($scope.RiskScore2)/len2;
		  }			
		else{
			$scope.RiskScore2 = $scope.sum($scope.services2, 'weightage');
			$scope.AverageRisk2 = parseInt($scope.RiskScore2)/len2;
			}
			$scope.AverageRi.push($scope.AverageRisk2);
	};
	
	//............online.Mobile Products and Technology Services....................................
	 $scope.services3=[];
	 var len3=$scope.questions3.length;
    $scope.logIt3=function(answe3){
		$scope.services3.push(answe3);
	};
	$scope.showResult3=function(){
		if ($scope.services3.length===0){
		   $scope.RiskScore3 ='0';
		  $scope.AverageRisk3 = parseInt($scope.RiskScore3)/len3;
		  }			
		else{
			$scope.RiskScore3 = $scope.sum($scope.services3, 'weightage');
			$scope.AverageRisk3 = parseInt($scope.RiskScore3)/len3;
			}
			$scope.AverageRi.push($scope.AverageRisk3);
	};
	
	//..................Organization Characteristics...................................
	$scope.services4=[];
	 var len4=$scope.questions4.length;
    $scope.logIt4=function(answe4){
		$scope.services4.push(answe4);  
	};
	$scope.showResult4=function(){
		if ($scope.services4.length===0){
		   $scope.RiskScore4 ='0';
		  $scope.AverageRisk4 = parseInt($scope.RiskScore4)/len4;
		  }			
		else{
			$scope.RiskScore4 = $scope.sum($scope.services4, 'weightage');
			$scope.AverageRisk4 = parseInt($scope.RiskScore3)/len4;
			}
			$scope.AverageRi.push($scope.AverageRisk4);
	};
	
	//....................External Threats..................................
	$scope.services5=[];
	$scope.services6='';
	 var len5=$scope.questions5.length;
    $scope.logIt5=function(answe5){
		$scope.services5.push(answe5);
       $scope.services6=answe5;		   
	};
	$scope.showResult5=function(){
		if ($scope.services5.length===0){
		   $scope.RiskScore5 ='0';
		  $scope.AverageRisk5 = parseInt($scope.RiskScore5)/len5;
		  }			
		else{
			$scope.RiskScore5 = $scope.sum($scope.services5, 'weightage');
			$scope.AverageRisk5 = parseInt($scope.RiskScore5)/len5;
			}
			$scope.AverageRi.push($scope.AverageRisk5);
	};
	//......................................................
	$scope.click=function(){
		myData.setter($scope.AverageRi);
		$scope.questionLength.push($scope.questions.length);
		$scope.questionLength.push($scope.questions2.length);
		$scope.questionLength.push($scope.questions3.length);
		$scope.questionLength.push($scope.questions4.length);
		$scope.questionLength.push($scope.questions5.length);
		dataLen.setterLen($scope.questionLength);
		$location.path('/about'); 
	};
  });
