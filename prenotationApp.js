(function(){
    var app = angular.module("prenotationApp", []);

    app.controller('tableController', ['$scope' '$http', function($scope, $http){
        $scope.date={
            month="giugno",
            day="24",
            hour="20"
        }

        $scope.parameters={
            m=$scope.date.month,
            d=$scope.date.day,
            h=$scope.date.hour,
        }

        $scope.method = 'GET';
        $scope.url = "http://www.polisportivaquestoequello.it/searchAvailability.py";

        $scope.fields = {};

        $scope.update = function($scope, $http) {
             $http({method: $scope.method, url: $scope.url, params: $scope.parameters}).
                then(function(response) {
                  $scope.fields = response.fields;
                },
                function(response) {
                  //errore
              });

        }]);

        //L'ho messo in modo che venga eseguito solo una volta, la prima volta che questo codice viene eseguito
        //non so se funziona però
        if(fields===null || fields===undefined)
            $scope.update($scope, $http);

});
