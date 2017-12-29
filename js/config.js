app.config( function($routeProvider){

    $routeProvider
        .when('/', {
            templateUrl: 'parciales/home.html',
            controller: 'inicioCtrl'
        })
        .when('/alumnos', {
            templateUrl: 'parciales/alumnos.html',
            controller: 'alumnosCtrl'
        })
        .when('/alumno/:codigo', {
            templateUrl: 'parciales/alumno.html',
            controller: 'alumnoCtrl'
        })
        .when('/profesores', {
            templateUrl: 'parciales/profesores.html',
            controller: 'profesoresCtrl'
        })
        .otherwise({
            redirectTo: '/'
        })
})
