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
      console.log(numberArray);
      var total=numberArray.length
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
    }
    console.log($scope.ans);
  }
  
  })();