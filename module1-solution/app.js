(function(){


angular.module('LunchCheck',[])
.controller('LunchCheckController',['$scope',lunch]);

function lunch($scope){
	$scope.itemList="";
	$scope.message="";

	$scope.checkList=function(){
		var list=$scope.itemList.split(",");
		if (list.length>3){
			$scope.message="Too much!";
		}
		else if($scope.itemList=="" || $scope.itemList==" "){
			$scope.message="Please enter data first";
		}
		else {
			$scope.message="Enjoy!";
		}
	}
}


})();