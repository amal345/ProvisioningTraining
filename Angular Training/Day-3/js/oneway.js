
// one way binding

let module=angular.module("oneway",[])

module.controller("emp",["$scope",($scope)=>
{
    $scope.x=100
    $scope.y=20;
    $scope. sum=()=>$scope.s=$scope.x+ $scope.y
}]);
// ==============================================================================

let app=angular.module("twoway",[])
app.controller("emptwoway",["$scope",($scope)=>{
    $scope.x=20;
    $scope.y=30;
    $scope.sum=()=>$scope.s=parseInt($scope.x)+parseInt($scope.y)
}])

let appshop=angular.module("shop",[])
appshop.controller("recipt",["$scope",($scope)=>{
    $scope.price=9000;
    $scope.qtty=1
    $scope.s=parseInt($scope.price)*parseInt($scope.qtty)
    $scope.total=()=>$scope.s=parseInt($scope.price)*parseInt($scope.qtty)
}])