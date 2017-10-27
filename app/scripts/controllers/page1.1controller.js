app.controller("page1controller1",['$scope' ,'$http' ,'$state',function($scope,$http,$state){
   $http.get('/scripts/controllers/objectrecord.json').then(function(response){
    $scope.res=_.get(response,'data.res');
})

    $scope.list=function(id,name){
    	$state.go('page1.2',{
    		itemid: id,
    		itemname: name
    	})
    }
   
}])