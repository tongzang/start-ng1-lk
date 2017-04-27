appmod.controller('TestController', function ($scope, $service) {
    $scope.text = $service.testFunction();
})