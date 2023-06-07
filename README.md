# Entregable 1 - Semanas 1 y 2

## How to start the app on a LOCAL ENV

Requirements
  - Pod de Kubernetes desplegando el contenedor ( carpeta kubert )
  - imagen

1) Set the api url on the file `src/lib/api/configuration`

```javascript
  export const ENDPOINT = process.env.NODE_ENV === "development"
    ? "http://127.0.0.1:3000/"          // url for LOCAL
    : "https://saaf.herokuapp.com/";    // url for BUILD
```

2) Run this command just the first time

```bash
  npm install
```

3) Start the application

```
  npm start
```


## How to build the app for a PRODUCTION ENV

1) Set the api url on the file `src/lib/api/configuration`

```javascript
  export const ENDPOINT = process.env.NODE_ENV === "development"
    ? "http://127.0.0.1:3000/"          // url for LOCAL
    : "https://saaf.herokuapp.com/";    // url for BUILD
```

2) Start the application

```
  npm run build
```

3) Copy the content of build folder on the S3 or server