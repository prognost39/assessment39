/**
 * Created by shoaibk on 5/8/16.
 */

//Controllers
app.controller('homeController',['$scope','cityService',function ($scope,cityService) {

    $scope.city=cityService.city;
    $scope.days=cityService.days;
    $scope.day=cityService.day;
    $scope.$watch('city',function () {
        cityService.city=$scope.city;
    });

    $scope.$watch('days',function () {
        cityService.days=$scope.days;
    });

    $scope.$watch('day',function () {
        cityService.day=$scope.day;
    });

}]);

app.controller('forecastController',['$scope','$resource','cityService',function ($scope,$resource,cityService) {

    $scope.city=cityService.city;
    $scope.days=cityService.days;
    $scope.day=cityService.day;
    $scope.weatherAPI=$resource("http://api.openweathermap.org/data/2.5/forecast/daily",{
        callback: "JSON_CALLBACK"},{
        get:{
            method:"JSONP"
        }
    });
    $scope.weatherResult = $scope.weatherAPI.get(
        {
            q:$scope.city,
            units:'metric',
            cnt:$scope.day,
            APPID:'4368307ca81118f1e7f28256589c0e60'
        }
    );

    console.log($scope.weatherResult);


}]);
