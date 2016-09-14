(function(){
    var app=angular.module("app", []);
    app.controller("myController", ["$scope", "$http", function($scope, $http){
        var parameters={
            date:$scope.inizioSoggiorno,
            span:$scope.periodo,
            locus:$scope.localita,
            mail:$scope.email,
            tel:$scope.telefono
        };
        $scope.sedie=0;
        $scope.lettini=0;
        $scope.cabinaDoccia=0;
        /*$scope.cercaSpiaggia = function(){
            $http.get("myApi.php", {params:parameters}).then(
                    function(response){
                        $scope.listaSpiagge(response);
                    },
                    function(error){
                        alert(error);
                    }
            );
        };
*/

        $scope.cercaSpiaggia = function(){//questa si dovrebbe chiamare listaSpiagge
            $scope.submittato=true;
            $scope.spiagge_list=[
                {
                    nome:"Prima",
                    img_link:"http://www.itineraridoc.it/wp-content/uploads/spiaggia_TRANI_AMMOUDA.jpg",
                    descrizione: "prima: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    disponibile:true,
                    costo:100
                },
                {
                    nome:"Seconda",
                    img_link:"http://www.calaginepro.com/wp-content/uploads/i-giardini-di-cala-ginepro-hotel-resort-orosei_gallery_spiaggia-13.jpg",
                    descrizione: "seconda: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    disponibile:false,
                    costo:200
                },
                {
                    nome:"Terza",
                    img_link:"http://www.spiaggesardegna.it/wp-content/uploads/2014/04/Spiaggia-del-principe.jpg",
                    descrizione: "terza: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    disponibile:true,
                    costo:300
                },
            ];
            var i=0;
            var j=0;
            var found=false;
            $scope.spiagge=[];
            $scope.cur_index=0;
            while($scope.spiagge_list[i]){
                if($scope.spiagge_list[i].disponibile){
                    if(!found){
                        found=true;
                        cur_index=i;
                    }
                    $scope.spiagge[j]=$scope.spiagge_list[i];
                    j++;
                }
                i++;
            }
            $scope.max_index=j;


    };

    }]);//chiuso controller
}) ();
