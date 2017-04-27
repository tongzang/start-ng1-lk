appmod.factory('$service', function ($q, $http) {
    var srvObj = {
        testFunction: function () {
            return "Hello World";
        }
    }
    return srvObj;
})