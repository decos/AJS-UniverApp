# ng-route

    Recursos:
        - https://code.angularjs.org/1.6.1/

1. Crear un nuevo directorio en el proyecto llamado `parciales`
    - Crear un nuevo archivo llamado `menu.html`
    - Añadir el codigo del menu en el fichero creado

2. Crear una variable llamada `menuSuperior` en el fichero `app.js`

3. Llamar este bloque de codigo en la vista principal utilizando `ng-include`

4. Añadir el controlador `mainCtrl` al `body`

5. Añadir los siguientes ficheros al directorio `parciales`
    - home.html, alumnos.html, profesores.html

6. Descargar los siguientes archivos y colocarlos en `js/lib`
    - angular-route.min.js
    - angular-route.min.js.map

7. Añadir al modulo lo siguiente para poder utilizar `ngRoute`:
    - ['ngRoute']

8. Crear el archivo `config.js` en el directorio `js`
    - Se encargara de la navegacion o de los elementos que acabamos de crear

9. Incluir el archivo de configuracion en la pagina principal
    - `<script src="js/config.js"></script>`

10. Añadir la directiva `ng-view` al `div`

# Agregando Controladores desde el archivo de configuración

1. Crear el fichero `alumnosCtrl.js` en el directorio `js`

2. Crear el fichero `profesoresCtrl.js` en el directorio `js`

3. Crear el fichero `inicioCtrl.js` en el directorio `js`

4. Añadir los controladores en el archivo de configuracion `config.js`

5. Añadir la funcion `setActive` en el controlador principal
    - Añadir la directiva `ng-class` en el menu

6. Añadir los controladores a la vista principal
    - <script src="js/alumnosCtrl.js"></script>
    - <script src="js/profesoresCtrl.js"></script>
    - <script src="js/inicioCtrl.js"></script>

# Preparando nuestra base de datos

    Recursos:
        - http://localhost:8080/phpmyadmin/index.php

1. Descargar la base de datos de la seccion `universidad_db`

2. Crear la base de datos y ejecutar el sql en la base de datos creada.

# Creando nuestra primera tabla dinámica y filtro personalizado

1. Descargar el proyecto de la seccion y copiar los siguientes directorios y ficheros en nuestro proyecto:
    - Directorio `php`
    - Fichero `phpinfo.php`

2. Modificar la conexion a la base de datos en el fichero `class.Database.php`

3. Listar alumnos de la base de datos y asignarlo a la variable `alumnos`

4. Añadir filtro `telefono` al fichero `alumnosCtrl.js`

# Tabla dinamica parte 2

1. Colocar el limite de registros en `5` por pagina

2. Crear dos botones `Anteriores` y `Siguientes`

3. Crear la funcionn `siguientes` en el fichero `alumnosCtrl.js`

4. Utilizar la funcion creada en la vista de `alumnos` (Siguientes) utilizando la directiva `ng-click`

5. Crear la funcionn `anteriores` en el fichero `alumnosCtrl.js`

6. Utilizar la funcion creada en la vista de `alumnos` (Anteriores) utilizando la directiva `ng-click`

# RouteParams - Parametros de Ruta

1. Descargar el archivo de la sesion y pegarlo en el directorio `php > servicios`

2. Añadir una nueva columna a la tabla alumnos `Ver`

3. Añadir una nueva nueva ruta `/alumno` al archivo de configuracion `config.js`

4. Especificar un parametro a la nueva ruta creada en el archivo de configuracion `config.js` y en la vista `alumnos.html`

5. Crear el controlador `alumnoCtrl`

6. Aplicar la clase `$routeParams` para el obtener el codigo del alumno en el nuevo controlador

7. Llamar al fichero php `alumnos.getAlumno.php` y pasarle el codigo  del alumno para obtener sus datos.

8. Utilizar los datos del alumno en la vista `alumno` para codear el formulario

# UI-Mask: Mascaras para tus campos de texto

1. Descargar la libreria adjunta en la seccion y pegarla en el directorio `js > lib`

2. Utilizar la liberia en el formulario `alumno`

3. Crear la variable `telefonoMask` en el script principal, asignarle un valor y añadir la directiva en la vista `ui-mask`

# Haciendo Posteo de información - Guardar datos vía Ajax

1. Descargar el archivo de la sesion y pegarlo en el directorio `php > servicios`

2. Añadir la directiva `ng-submit` al formulario del `alumno`

3. Añadir el atributo `required` a todos los campos que se deban llenar obligatoriamente

4. Codear la funcion `guardarAlumno` la cual realizara una actualizacion del alumno previamente elegido

5. El mensaje `Registro Actualizado` debe aparecer al actualizar el alumno

6. Añadir un `setTimeout` para que desaparesca el mensaje a los 3 segundos y medio

~~~
  Cambios asincronos = Procedimientos a destiempo, es necesario hacer
      - $scope.$apply();
~~~

# Insertar Datos

1. Descargar el archivo de la sesion y pegarlo en el directorio `php > servicios`

2. Colocar el boton de `Insertar` en la vista `alumnos`

3. Codear la logica del boton en el controlador  `alumno`

4. Añadir la directiva `ng-hide` en la vista `alumno` para ocultar la entrada `codigo`

5. Modificar la funcion `guardarAlumno` en el controlador `alumno`
