db.createCollection("users2");
//documento 1
db.users2.insertOne({
    nombre:"Daniel",
    apellido:"Zapata",
    correo:"daniel@example.com",
    ciudad:"Londres",
    pais:"Inglaterra",
    salario:2000,
    edad:23,
    altura:180,
    peso:120
});

//documento 2
db.users2.insertOne({
    nombre: "Javier",
    apellido: "Hernández",
    correo: "javier@example.com",
    ciudad: "Madrid",
    pais: "Francia",
    salario: 24000,
    edad: 32,
    altura: 180,
    peso: 75
});

//documento 3
db.users2.insertOne({
    nombre: "Ana",
    apellido: "Martínez",
    correo: "ana@example.com",
    ciudad: "Berlín",
    pais: "Alemania",
    salario: 200200,
    edad: 39,
    altura: 165,
    peso: 60
});

//documento 4
db.users2.insertOne({
    nombre: "Luca",
    apellido: "Rossi",
    correo: "luca@example.com",
    ciudad: "Toronto",
    pais: "Canada",
    salario: 287600,
    edad: 35,
    altura: 175,
    peso: 70
});

//documento 5
db.users2.insertOne({
    nombre: "Sofía",
    apellido: "García",
    correo: "sofia@example.com",
    ciudad: "Barcelona",
    pais: "España",
    salario: 2300,
    edad: 30,
    altura: 170,
    peso: 65
});

//documento 6
db.users2.insertOne({
    nombre: "Michael",
    apellido: "Johnson",
    correo: "michael@example.com",
    ciudad: "Nueva York",
    pais: "Estados Unidos",
    salario: 2800,
    edad: 33,
    altura: 185,
    peso: 80
});

//documento 7
db.users2.insertOne({
    nombre: "Marie",
    apellido: "Dupont",
    correo: "marie@example.com",
    ciudad: "París",
    pais: "Francia",
    salario: 3000,
    edad: 29,
    altura: 168,
    peso: 63
});

//documento 8
db.users2.insertOne({
    nombre: "William",
    apellido: "Smith",
    correo: "william@example.com",
    ciudad: "Londres",
    pais: "Reino Unido",
    salario: 2700,
    edad: 31,
    altura: 175,
    peso: 70
});

//documento 9
db.users2.insertOne({
    nombre: "Thomas",
    apellido: "Jansen",
    correo: "thomas@example.com",
    ciudad: "Ámsterdam",
    pais: "Países Bajos",
    salario: 2400,
    edad: 30,
    altura: 180,
    peso: 75
});

//documento 10
db.users2.insertOne({
    nombre: "Elena",
    apellido: "González",
    correo: "elena@example.com",
    ciudad: "Madrid",
    pais: "España",
    salario: 2600,
    edad: 33,
    altura: 170,
    peso: 68
});

//documento 11
db.users2.insertOne({
    nombre: "Camilo",
    apellido: "Pérez",
    correo: "cami@example.com",
    ciudad: "Medellín",
    pais: "Colombia",
    salario: 26009,
    edad: 33,
    altura: 170,
    peso: 68
});

//documento 12
db.users2.insertOne({
    nombre: "Daniela",
    apellido: "Marquez",
    correo: "dani@example.com",
    ciudad: "Roma",
    pais: "Italia",
    salario: 26009,
    edad: 20,
    altura: 170,
    peso: 68
});

//documento 13
db.users2.insertOne({
    nombre: "Yeison",
    apellido: "Jimenez",
    correo: "",
    ciudad: "Roma",
    pais: "Italia",
    salario: 26009,
    edad: 20,
    altura: 170,
    peso: 68
});

//documento 14
db.users2.insertOne({
    nombre: "Yeison",
    apellido: "Jimenez",
    correo: "",
    ciudad: "Río de Janeiro",
    pais: "Brasil",
    salario: 43092,
    edad: 30,
    altura: 160,
    peso: 145
});

//documento 15
db.users2.insertOne({
    nombre: "Daniel",
    apellido: "Trujillo",
    correo: "dan@gmail.com",
    ciudad: "Santiago de Chile",
    pais: "Chile",
    salario: 43092,
    edad: 20,
    altura: 160,
    peso: 145
});

//documento 16
db.users2.insertOne({
    nombre: "Mohamet",
    apellido: "Allut",
    correo: "moh@gmail.com",
    ciudad: "Nueva Delhi",
    pais: "India",    
    edad: 20,
    altura: 160,
    peso: 145
});

db.users2.find();

//1. Obtener todos los usuarios que sean mayores de 18 años.
db.users2.find({edad:{$gt:18}});

//2. Obtener todos los usuarios que sean de Londres o de París.
db.users2.find({ciudad:{$in:["Londres","Paris"]}});

//3. Obtener a todos los usuarios que ganen más de $2000 al mes y tengan menos de 30 años.
db.users2.find({$and:[{salario:{$gt:2000}},{edad:{$lt:30}}]});  

// 4. Obtener a todos los usuarios que sean de España y ganen más de $3000 al mes. 
db.users2.find({
    $and:[
        {pais:{$eq:"España"}},
        {salario:{$gt:3000}}
    ]
});

//5. Obtener todos los usuarios que tengan entre 25 y 35 años.
db.users2.find({
    $and:[
        {edad:{$gte:25}},
        {edad:{$lte:35}}
    ]
});

//6. Obtener a todos los usuarios que no sean de Estados Unidos.
db.users2.find({
    pais:{
        $ne:"Estados Unidos"
    }
});

//7. Obtener a todos los usuarios que sean de Londres y que ganen más de $2500 o que tengan más de 30 años.

db.users2.find({
    $and:[
        {ciudad:{$eq:"Londres"}},
        {
            $or:[
                {salario:{$gt:2500}},
                {edad:{$gt:30}}
            ]
        }
    ]
});

//8. Obtener a todos los usuarios que sean de Australia y tengan un peso mayor a 140 libras.

db.users2.find({
    $and:[
        {pais:{$eq:"Australia"}},
        {peso:{$gt:140}}
    ]
});

//9. Obtener a todos los usuarios que no sean de Londres ni de París.
db.users2.find({
    $and:[
        {ciudad:{$ne:"Londres"}},
        {ciudad:{$ne:"París"}}
    ]
});

//10. Obtener a todos los usuarios que ganen menos de $2000 al mes o que tengan más de 40 años.
db.users2.find({
    $or:[
        {salario:{$lt:2500}},
        {edad:{$gt:40}}
    ]
});

//11. Obtener a todos los usuarios que sean de Canadá y ganen más de $4000 al mes o que tengan una altura mayor a 180 cm.

db.users2.find({
    $and:[
        {pais:{$eq:"Canada"}},
        {$or:[
            {salario:{$gt:4000}},
            {altura:{$gt:180}}
        ]}
    ]
});

//12. Obtener todos los usuarios que sean de Italia y tengan entre 20 y 30 años.
db.users2.find({
    $and:[
        {pais:{$eq:"Italia"}},
        {edad:{$in:[20,30]}}
    ]
});

//13. Obtener todos los usuarios que no tengan un correo electrónico registrado.
// db.users2.find({
//     correo:{$exists:false}
// });
db.users2.find({
    correo:{$eq:""}
});

//14. Obtener todos los usuarios que sean de Francia y que su salario esté entre $3000 y $5000 al mes.
db.users2.find({
    $and:[
        {pais:{$eq:"Francia"}},
        {salario:{$in:[3000,5000]}}
    ]
});

//15. Obtener todos los usuarios que sean de Brasil y que tengan un peso menor a 120 libras o más de 140 libras.
db.users2.find({
    $and:[
        {pais:{$eq:"Brasil"}},
        {$or:[
            {peso:{$lt:120}},
            {peso:{$gt:140}}
        ]}
    ]
});

//16. Obtener a todos los usuarios que sean de Argentina o de Chile y que tengan una edad menor a 25 años.
db.users2.find({
    $and:[
        {edad:{$lt:25}},
        {$or:[
            {pais:{$eq:"Argentina"}},
            {pais:{$eq:"Chile"}}
        ]}
    ]
});

//17. Obtener a todos los usuarios que no sean de España ni de México y que ganen menos de $3000 al mes.
db.users2.find({
    $and:[
        {salario:{$lt:3000}},
        {pais:{$nin:["España", "México"]}}
    ]
});

//18. Obtener todos los usuarios que sean de Alemania y que tengan un salario menor a $4000 o una edad mayor a 35 años.

db.users2.find({
    $and:[
        {pais:{$eq:"Alemania"}},
        {$or:[
            {salario:{$lt:4000}},
            {edad:{$gt:35}}
        ]}
    ]
});

//19. Obtener todos los usuarios que no sean de Colombia y que su altura sea menor a 170 cm.
db.users2.find({
    $and:[
        {altura:{$lt:170}},
        {pais:{$ne:"Colombia"}}
    ]
});

//20. Obtener todos los usuarios que sean de India y que no tengan un salario registrado.
db.users2.find({
    $and:[
        {pais:{$eq:"India"}},
        {salario:{$exists:false}}
    ]
});