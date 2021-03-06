//----------------------------------------------------------------------------------------------------------------------
// Angular app for the omega admin section.
//
// @module app.js
//----------------------------------------------------------------------------------------------------------------------

angular.module("omega.admin", ['ngResource', 'omega.admin.controllers'])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider)
    {
        //$locationProvider.html5Mode(true);
        $routeProvider
            .when('/', {templateUrl: partialUrl('index.html'),   controller: 'IndexCtrl'})
            .when('/:model', {templateUrl: partialUrl('model.html'),   controller: 'ModelCtrl'})
            .when('/:model/:instance', {templateUrl: partialUrl('instance.html'),   controller: 'InstanceCtrl'})
            .otherwise({redirectTo: '/'});
    }])
    .run(['$rootScope', '$http', function($rootScope, $http)
    {
        // Get our models
        $http.get(adminUrl('/models'))
            .success(function(data, status)
            {
                $rootScope.models = data;
            })
            .error(function(data, status)
            {
                console.error("Got an error getting models.", data, status);
                $rootScope.models = [];
            });

        // Url Building helpers
        $rootScope.partialUrl = function(partial)
        {
            return window.partialUrl(partial);
        }; // end partialUrl

        $rootScope.adminUrl = function(url)
        {
            return window.adminUrl(url);
        }; // end partialUrl
    }]);

//----------------------------------------------------------------------------------------------------------------------