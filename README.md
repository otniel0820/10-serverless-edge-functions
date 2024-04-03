# Webhook desplegado con un EDGE Function en Netlify

1. Crear una cuenta de usuario en [Netlify](https://www.netlify.com/) si aún no la tiene.

2. Para correr el proyecto en desarrollo usar el comando 
```
npm run netlify:dev
```
3. Para hacer el deploy de la edge function y que funcione con un link de netlify debes ejecutar el siguiente comando
```
netlify deploy --prod
```

4. Elegir la opcion de crear un nuevo proyecto o usar uno si ya tienen uno creado

5. Colocar el nombre al proyecto

6. Una vez desplegado deben ir a netlify y subir las variables de entorno de su proyecto