# Evidencias del Parcial Integrador - Implantación de Sistemas

## Estudiante
- **Nombre:** Milton Azareel Cuadra Mezquita  
- **Expediente:** 26114  
- **Código:** CM22i04001  

---

## Descripción
Este documento contiene las **evidencias generadas automáticamente** desde el entorno WSL con Docker Compose.  
Demuestran el correcto funcionamiento de la API Node.js conectada a PostgreSQL y la persistencia del volumen `db_data`.

---

## Contenido de la carpeta

| Archivo | Descripción |
|----------|--------------|
| **compose-ps.txt** | Estado de los contenedores (`api` y `db`) y sus puertos activos. |
| **api-logs.txt** | Logs de ejecución de la API con los mensajes del servidor. |
| **db-logs.txt** | Logs del contenedor de PostgreSQL, mostrando inicio y reinicio. |
| **root.json** | Resultado del endpoint `/` con los datos del estudiante. |
| **health.json** | Resultado del endpoint `/health`, confirmando que la API está activa. |
| **db-check.json** | Resultado del endpoint `/db-check`, indicando conexión exitosa (`"db": "ok"`). |
| **consulta-estudiantes.txt** | Resultado de la consulta SQL `SELECT * FROM estudiantes;`, confirmando persistencia. |

---

## Comandos utilizados

```bash
docker compose ps > docs/evidencias/compose-ps.txt
docker logs -n 200 parcial-api > docs/evidencias/api-logs.txt
docker logs -n 200 parcial-db > docs/evidencias/db-logs.txt

curl -s http://localhost:3000/ | jq . > docs/evidencias/root.json
curl -s http://localhost:3000/health | jq . > docs/evidencias/health.json
curl -s http://localhost:3000/db-check | jq . > docs/evidencias/db-check.json


docker exec -i parcial-db psql -U admin -d parcial_db -c "SELECT * FROM estudiantes;" > docs/evidencias/consulta-estudiantes.txt
## Persistencia

docker restart parcial-db
sleep 3
docker exec -i parcial-db psql -U admin -d parcial_db -c "SELECT * FROM estudiantes;"
