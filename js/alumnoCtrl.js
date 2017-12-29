app.controller('alumnoCtrl', ['$scope', '$routeParams', '$http',  function($scope, $routeParams, $http){

    $scope.setActive("mAlumnos");

    var codigo = $routeParams.codigo;

    $scope.actualizado =  false;
    $scope.alumno = {}

    $http.get('php/servicios/alumnos.getAlumno.php?c=' + codigo).then(function(response){

        if( response.data.err !== undefined ){
            window.location = "#!/alumnos";
            return;
        }

        $scope.alumno = response.data;
    })

    $scope.guardarAlumno = function(){

        $http.post('php/servicios/alumnos.guardar.php', $scope.alumno).then(function(response){
            console.log("response:", response);
            if (response.data.err === false){
                $scope.actualizado = true;
                setTimeout(function(){
                    $scope.actualizado = false;
                    //Cambios asincronos = Procedimientos a destiempo, es necesario hacer
                    $scope.$apply();
                }, 3500)
            }
        });

    }

}]);
