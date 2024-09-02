TypesScript
Inicializar proyecto:
```bash
npm init -y
```

Instalacion de dependencias:    
```bash
npm install -D typescript @types/node ts-node nodemon rimraf
```

Creación del directorio src y archivo app.ts:
```bash
mkdir src
touch src/app.ts
```

Configuracion de TypeScript

```bash
npx tsc --init --outDir dist/ --rootDir src
```

Creación del archivo nodemon.json:
```bash
touch nodemon.json
```
y en ella insertar el siguiente código:
```json
{
    "watch": ["src"],
    "ext": ".ts,.js",
    "ignore": [],
    "exec": "npx ts-node ./src/app.ts"
}
```

Crear el script en el package.json:
```json
"scripts": {
    "dev": "nodemon",
    "build": "rimraf ./dist & tsc",
    "start": "npm run build & node dist/app.js"
},
```