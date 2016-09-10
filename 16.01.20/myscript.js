(function(){
    alert("Funziona! YAY!")
    var app=angular.module("myapp", []);

    app.controller('tripController',['$scope', '$http', function($scope, $http){
        $scope.dati = {
            partenza:"stazione1",
            arrivo:"stazione2"
        };
        $scope.livello = 0.75;
        $scope.impostato = false;
        $scope.foo = function(){
            /*$http.get("http://www.dolomitisuperski.it/services/percorso.php", {params:$scope.dati}).then(

                function(return){
                    //mostraPercorso(return);
                },
                function(){
                    //mostraErrore();
                }

            );*/
            var data = [
        		{
        	        "partenza": "Seggiovia 1 (valle)",
        	        "arrivo": "Seggiovia 1 (monte)",
        	        "tipo_percorso": "Tipo 1",
        	        "tempo_percorrenza": 10,
        	        "distanza": 1000
        	    },
        	    {
        	        "partenza": "Seggiovia 1 (valle)",
        	        "arrivo": "Seggiovia 1 (monte)",
        	        "tipo_percorso": "Tipo 2",
        	        "tempo_percorrenza": 100,
        	        "distanza": 2000
        	    },
        	    {
        	        "partenza": "Seggiovia 1 (valle)",
        	        "arrivo": "Seggiovia 1 (monte)",
        	        "tipo_percorso": "Tipo 3",
        	        "tempo_percorrenza": 1000,
        	        "distanza": 3000
        	    }
        	];
            mostraPercorso(data);
        };

        function mostraErrore (){
            alert("Errore");
        }

        function mostraPercorso(data){

            $scope.impostato = true;

            $scope.percorsi = data;
        }


    }]);
}) ();
