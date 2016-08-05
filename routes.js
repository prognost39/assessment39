/**
 * Created by shoaibk on 5/8/16.
 */

//Routes
app.config(function ($routeProvider) {
    $routeProvider
        .when('/',{
            templateUrl:'pages/home.html',
            controller:'homeController'
        })
        .when('/forecast',{
            templateUrl:'pages/forecast.html',
            controller:'forecastController'
        })

});