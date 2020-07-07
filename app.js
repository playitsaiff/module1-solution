(function () {
  'use strict';
  
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);
  
  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.numbers = "";
    $scope.ans="";
    console.log($scope.numbers);
    let numOr0=n=>isNaN(n)?0:n;
    $scope.checkIfTooMuch=function(){
      var numberArray=$scope.numbers.split(',');
      var total=numberArray.reduce((a,b)=>numOr0(parseInt(a))+numOr0(parseInt(b)));
      console.log(total);
      if($scope.numbers===""){
        $scope.ans= "Please enter data first";
      }
      
      else if(total<=3){
        $scope.ans= "Enjoy!";
      }

      else{
          $scope.ans= "Too much!";
      }
      console.log("here it runs");
    }
    console.log($scope.ans);
  }
  
  })();