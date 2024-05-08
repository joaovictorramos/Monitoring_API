## Configurando ambiente para NodeJs + Typescript

- Inicializando o projeto
```
    npm init -y
```

- Adicionando o Typescript
```
    npm install --save-dev typescript
    tsc --init
```

- Adicionando o Express
```
    npm install express
    npm install --save-dev @types/express
```

- Adicionando o Sequelize
```
    npm install sequelize
    npm install --save-dev sequelize-typescript
```

- Adicionando hot reload
```
    npm install --save-dev ts-node-dev
```

- Adicionando a dependência do banco de dados MySQL
```
    npm install mysql2
```

- Adicionando UUID
```
    npm install uuid
    npm install @types/uuid
```

## Executando o NodeJs

- Descomentar em **tsconfig.json** (se não estiver dessa forma, edite)
```
    "outDir": "./build",
```

- Executar o comando responsável por compilar o Typescript em Javascript
```
    npx tsc
```

- Adicionar em **package.json**
```
    "start": "tsc && node ./build/server.js"
```

- Inicializar com:
```
    npm start
```