# Parcial Integrador - Implantación de Sistemas

 Datos del estudiante
- **Nombre:** Milton Azareel Cuadra Mezquita  
- **Expediente:** 26114  
- **Código:** CM22i04001  



## Descripción
Proyecto desarrollado para el **Segundo Parcial de Implantación de Sistemas**.  
Implementa una **API en Node.js** conectada a **PostgreSQL** mediante **Docker Compose**, siguiendo las prácticas de contenedorización, persistencia de datos y despliegue modular solicitadas en el enunciado del examen.



## Requisitos previos
- Docker y Docker Compose instalados  
- Puerto **3000** libre  
- Conexión a internet para descargar las imágenes base  



## Estructura del proyecto

| Carpeta / Archivo | Descripción |
|--------------------|-------------|
| `server.js` | API principal en Node.js con endpoints `/`, `/health` y `/db-check`. |
| `Dockerfile` | Configuración del contenedor de la API con Node 18 Alpine. |
| `.env` | Variables de entorno (nombre del estudiante y datos de conexión a la base). |
| `docker-compose.yml` | Orquestación de servicios `api` y `db`. |
| `docs/evidencias/` | Carpeta con logs y comprobaciones del sistema (evidencias). |


## Endpoints disponibles

| Ruta | Descripción |
|------|--------------|
| `/` | Devuelve información del estudiante y mensaje de éxito. |
| `/health` | Verifica que la API esté corriendo. |
| `/db-check` | Comprueba la conexión con PostgreSQL. |


curl -s http://localhost:3000/db-check | jq .

## Levantar el proyecto

Ejecutar estos comandos en WSL dentro de la carpeta `parcial-docker-integrado`:

docker rm -f parcial-api parcial-db 2>/dev/null || true
docker compose up -d --build
docker compose ps


Verificar los endpoints:

curl -s http://localhost:3000/ | jq .
curl -s http://localhost:3000/health | jq .
curl -s http://localhost:3000/db-check | jq .


## Verificar persistencia de datos


docker restart parcial-db
sleep 3
docker exec -i parcial-db psql -U admin -d parcial_db -c "SELECT * FROM estudiantes;"


## Evidencias

Las pruebas y salidas generadas se encuentran en la carpeta:

docs/evidencias/


Incluyen:
- Logs de la API y la base de datos  
- Estado de los contenedores  
- Resultados de los endpoints `/`, `/health` y `/db-check`  
- Consulta SQL de verificación de persistencia  

## Comandos útiles

Construir y ejecutar:

docker compose up -d --build


Detener y limpiar:

docker compose down


Ver logs:

docker logs parcial-api
docker logs parcial-db


## Subir a repositorio GitHub

git init
git checkout -b main
git add .
git commit -m "feat(api): proyecto completo del Parcial Integrador"
git remote add origin git@github.com:Milthor21/parcial-docker-integrado.git
git branch -M main
git push -u origin main

Repositorio:  
https://github.com/Milthor21/parcial-docker-integrado



