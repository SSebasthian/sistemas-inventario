<h1 align="center"> # InventarioSistemas </h1>

## Necesario para Angular
`npm install -g @angular/cli@18`<br>
`ng add @angular/material@18`<br>


## Necesario Firebase
<b>Se Crea Proyecto en Firebase con Authentication y Firestore Database</b><br>
`npm install firebase`<br>
`ng add @angular/fire`<br>
`npm install -g firebase-tools`<br>

(seleccionamos Authentication / firestore )<br>
(Seguimos los pasos para autenticarnos con la cuenta de Firebase)<br>
(Seleccionamos el correo con el que se registró Firebase)<br>
(Seleccionamos el proyecto creado con Firebase (sistemas-inventario))<br>

`firebase login`<br>

## Firebase DEPLOY
`firebase init` <br>
(Firestore: Configure security rules and indexes files for Firestore)  -- Crear Base de datos NoSQL<br>
(Hosting - Configure files for Firebase hosting and (optionally) set up GitHub Actiod deploys)<br>

(Use an existing project)<br>
(Seleccionamos nuestro proyecto (SISTEMAS-INVENTARIO))<br>
(What file should be used for Firestore Rules? (firestore.rules))<br>
(What file should be used for Firestore indexes? (firestore.indexes.json))<br>
(What do you want to use as your public directory? (public)) <br>
<b> quitamos public y colocamos la siguiente ruta</b><br><br>
<b>dist/sistemas-inventario/browser</b><br><br>
(Configure as a single-page app (rewrite all urls to /index.html)? (y/N)) yes<br>
(Set up automatic builds and deploys with GitHub? (y/N)) no<br>
<b>Firebase initialization complete!</b>

`ng build` <br>
`firebase deploy`<br>

<b>https://sistemas-inventario.web.app/ </b>

## Creación de Proyecto Angular
`ng new Sistemas-Inventario` (Se crea con CSS)<br>
`ng generate component pagina/autenticacion/acceso` (Acceso)<br>
`ng generate service arquitectura/servicio/autenticador` (Servicio para Autenticacion - Acceso)