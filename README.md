# API PERSONAS

Ejemplo de implementación utilizando AWS, Lambdas, Serverless, Api Gateway, DynamoDB y Express. 

## Instalación

***Requiere configuración de credenciales AWS.**

Instalar paquetes npm.

```bash
npm install
```

Despliegue

```bash
sls deploy
```

## Uso

***Se ha modificado el valor ID, de numérico a cadena.**

###### Listar

```bash
#GET
https://8nw88155ik.execute-api.us-east-2.amazonaws.com/dev
```

###### Buscar por ID

```bash
#GET
https://8nw88155ik.execute-api.us-east-2.amazonaws.com/dev/avwZZvkkEE7S6obdfajwz8
```

###### Crear 

```bash
#POST
https://8nw88155ik.execute-api.us-east-2.amazonaws.com/dev
```

```javascript
//BODY EJEMPLO
{
    "ano_nacimiento": "19 BBY",
    "color_ojos": "Blue",
    "peliculas": [
        "https://swapi.py4e.com/api/films/1/"
    ],
    "genero": "Male",
    "color_cabellor": "Blond",
    "altura": "172",
    "mundo_natal": "https://swapi.py4e.com/api/planets/1/",
    "masa": "77",
    "nombre": "Luke Skywalker",
    "color_piel": "Fair",
    "especies": [
        "https://swapi.py4e.com/api/species/1/"
    ],
    "naves_estelares": [
        "https://swapi.py4e.com/api/starships/12/"
    ],
    "url": "https://swapi.py4e.com/api/people/1/",
    "vehiculos": [
        "https://swapi.py4e.com/api/vehicles/14/"
    ]
}
```



## Author
Edgar Medina




