app.controller('registerctrl',['$scope','$http',function($scope,$http){
$scope.signupbtn=function(){
	alert("All Fields Must Be Filled");
	$http({

	}).then(function successCallback(response) {
		      alert('sucess')
               //window.location.href='/login.html'

            }, function errorCallback(response) {
                callback(response.statusText);
    })
}
}])