# Casos de pruebas automatizados


## Información sobre las pruebas:

Las pruebas automatizadas implementadas son las pruebas con id 2 y 4 del siguiente archivo: https://docs.google.com/spreadsheets/d/1THldIyBkLkNPiowI5KlkxHXDWhEEz9094cBU9fihxQg/edit#gid=812846169


## Prerrequisitos para correr las pruebas:
- Tener instalado node en la maquina (https://nodejs.org/es/)

## Como correr las pruebas:

1) Clonar este proyecto github en su maquina.
2) Instalar depencias (``` npm install ```)
3) Ingresar a la carpeta test.
4) Ejecutar el siguiente codigo para la primera prueba: ```node firstTest.js ```
5) Ejecutar el siguiente codigo para la segunda prueba: ```node secondTest.js```


## Tener en consideracion para la pruebas:
1) Las pruebas pasan cuando no aparece ningún error en la consola.
2) La **segunda prueba** tiene exito solo la primera vez que se ejecuta. Al ejecutarse por segunda vez la **prueba no pasa** debido a que el producto que se quiere agregar ya se ingresó al sistema al ejecutar por priemera vez la prueba (el sistema no permite ingresar un producto ya existente, este es un supuesta en la prueba).
