angular.module('JobApp', []);

angular.module('JobApp')
	.controller('homeController', ['$scope', "$http", function($scope, $http, homeController){

		$scope.createApp = function(){
			$http.post("/api/applicants", $scope.newApp)
				.then(function(returnData) {
					$scope.applicants = $scope.applicants || []
					$scope.applicants.push(returnData.data)
					$scope.newApp = {}
				})
			// $http.get("/api/applicants")
			// .then(function(returnData) {
			// 	console.log("Get : ", returnData)
			// 	$scope.applicants = returnData.data
			// })	
		};

	}]);

angular.module('JobApp')
	.controller('applicantController', ['$scope', "$http", function($scope, $http, applicantController){
			
		$http.get("/api/applicants")
			.then(function(returnData) {
				console.log("Get : ", returnData)
				$scope.applicants = returnData.data
			})	

	}]);