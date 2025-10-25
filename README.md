# Parcial Integrador - Implantación de Sistemas

## Datos del estudiante
- **Nombre:** Milton Azareel Cuadra Mezquita  
- **Expediente:** 26114  
- **Código:** CM22i04001  

## Descripción
Proyecto desarrollado para el Segundo Parcial de Implantación de Sistemas.  
Implementa una API en Node.js conectada a PostgreSQL mediante Docker Compose.

## Endpoints
| Ruta | Descripción |
|------|--------------|
| `/` | Devuelve información del estudiante |
| `/health` | Estado del contenedor |
| `/db-check` | Verifica conexión con PostgreSQL |

## Comandos básicos
docker compose up -d --build
curl -s http://localhost:3000/

curl -s http://localhost:3000/db-check

docker compose down

## Levantar el proyeco
 docker rm -f parcial-api parcial-db 2>/dev/null || true
docker compose up -d --build
docker compose ps
curl -s http://localhost:3000/ | jq .
curl -s http://localhost:3000/health | jq .
curl -s http://localhost:3000/db-check | jq .

## Subir a repo

git init
git checkout -b main
git add .
git commit -m "feat(api): proyecto completo del Parcial Integrador"
git remote add origin git@github.com:Milthor21/parcial-docker-integrado.git
git branch -M main
git push -u origin main
