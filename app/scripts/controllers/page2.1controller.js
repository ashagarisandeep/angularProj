app.controller("miniProjectCtrl1",['$scope','$http' ,function($scope,$http){
   $http.get('/scripts/controllers/objectrecord.json').then(function(response){
    $scope.res=_.get(response,'data.res');
    console.log($scope.res)
   })
}])