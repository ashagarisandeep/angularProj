app.controller("page1controller2",['$scope' ,'$http' ,'$state',function($scope,$http,$state){
	$scope.insidepage2 ="this is a page1.2 content"
//    $http.get('/scripts/controllers/objectrecord.json').then(function(response){
//     $scope.res=_.get(response,'data.res');
//     $scope.WhichItem = $stateparams.itemid

// })
	console.log($state.params)
   
}])