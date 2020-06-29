(function(){

    angular.module('LunchCheckApp',[])
    .controller('LunchCheckController',LunchCheckController);

    LunchCheckController.$inject=['$scope'];
    function LunchCheckController($scope){
        $scope.testNumberOfItems= function(){
            $scope.items=0;

        }
    }
})();