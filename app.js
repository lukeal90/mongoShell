db = connect( 'mongodb://localhost/ecommerce' );

db.createCollection("productos");
db.createCollection("mensajes");
db.mensajes.insertMany([
    {usermail:"lucas@lucas.com.ar",fecha:ISODate(),mensaje:"Esto"},
    {usermail:"lucas@lucas.com.ar",fecha:ISODate(),mensaje:"Es"},
    {usermail:"lucas@lucas.com.ar",fecha:ISODate(),mensaje:"Un"},
    {usermail:"lucas@lucas.com.ar",fecha:ISODate(),mensaje:"Msj"},,
])

db.productos.insertMany([
    {nombre:"Zapatillas",precio:120,foto:"https://pics.freeicons.io/uploads/icons/png/9690872761656849811-512.png"},
    {nombre:"Botas",precio:580,foto:"https://pics.freeicons.io/uploads/icons/png/9690872761656849811-512.png"},
    {nombre:"Medias",precio:900,foto:"https://pics.freeicons.io/uploads/icons/png/9690872761656849811-512.png"},
    {nombre:"Alpargatas",precio:1280,foto:"https://pics.freeicons.io/uploads/icons/png/9690872761656849811-512.png"},
    {nombre:"Ojotas",precio:1700,foto:"https://pics.freeicons.io/uploads/icons/png/9690872761656849811-512.png"},
    {nombre:"Sandalias",precio:2300,foto:"https://pics.freeicons.io/uploads/icons/png/9690872761656849811-512.png"},
    {nombre:"Remera",precio:2860,foto:"https://pics.freeicons.io/uploads/icons/png/9690872761656849811-512.png"},
    {nombre:"Buzo",precio:3350,foto:"https://pics.freeicons.io/uploads/icons/png/9690872761656849811-512.png"},
    {nombre:"Pantalón",precio:4320,foto:"https://pics.freeicons.io/uploads/icons/png/9690872761656849811-512.png"},
    {nombre:"Cinturón",precio:4990,foto:"https://pics.freeicons.io/uploads/icons/png/9690872761656849811-512.png"},
])

print("Colección mensajes:\n")
printjson(db.mensajes.find());

print("\nColección productos:\n")
printjson(db.productos.find());

print(`Cantidad total de productos: ${db.productos.estimatedDocumentCount()}`);
print(`Cantidad total de mensajes: ${db.productos.estimatedDocumentCount()}`);

db.productos.insertOne({nombre:"Bermudas",precio:4120,foto:"https://pics.freeicons.io/uploads/icons/png/9690872761656849811-512.png"});

db.productos.find({"precio":{$lt:1000}},{"nombre":1});
db.productos.find({"precio":{$gte:1000,$lte:3000}},{"nombre":1});
db.productos.find({"precio":{$gt:3000}},{"nombre":1});
db.productos.find().skip(2).limit(1).sort({"precio": 1})

db.productos.updateMany({},{$set:{"stock":100}});
db.productos.updateMany({"precio":{$gt:4000}},{$set:{"stock":0}});
db.productos.deleteMany({"precio":{$lt:1000}});

db = connect( 'mongodb://localhost/admin' );

db.createUser(
    {
        user: "Lucas",
        pwd:"qwerty12345",
        roles:[
            {role:"read",db:"ecommerce"}
        ]
    }
);            