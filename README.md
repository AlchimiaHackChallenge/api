# Initial API

## Estructura de Archivos

```text
.
├── README.md
├── config
│   ├── db.js
│   ├── index.js
│   └── server.js
├── index.js
├── package.json
└── src
    └── api
        └── index.js
```

## Actualizar Dependencia

```
npm-check-updates -u
```

## Verificar Dependencia

```
npm run check
```
## Ejecutar en modo DEBUG

```
DEBUG=express:* nodemon index.js
```