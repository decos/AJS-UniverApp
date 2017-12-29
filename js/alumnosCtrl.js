app.controller('alumnosCtrl', ['$scope', '$http', function($scope, $http){

    $scope.setActive("mAlumnos");

    $scope.alumnos = {};
    $scope.posicion = 5;

    $http.get('php/servicios/alumnos.listado.php').then(function(response){
        $scope.alumnos = response.data;
    })

    $scope.siguientes = function(){
        if( $scope.alumnos.length > $scope.posicion ){
            $scope.posicion += 5;
        }
    }

    $scope.anteriores = function(){
        if( $scope.posicion > 5 ){
            $scope.posicion -= 5;
        }
    }

}]);

//Filtro personalizado de telefono
app.filter('telefono' , function(){
    return function(numero){
        return numero.substring(0,4) + "-" + numero.substring(4);
    }
})
