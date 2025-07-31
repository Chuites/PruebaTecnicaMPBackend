# Backend - Gestión de Casos (Ministerio Público de Guatemala)

Este proyecto es la API RESTful desarrollada con Node.js y Express que permite la gestión y seguimiento de casos para el Ministerio Público. Utiliza SQL Server como base de datos y procedimientos almacenados para todas las operaciones.

## 📦 Tecnologías

- Node.js + Express
- SQL Server (con procedimientos almacenados)
- MSSQL (driver para Node.js)
- Dotenv
- Docker (para despliegue)
- Postman (para pruebas)

## 📁 Estructura

/controllers # Lógica de cada entidad

/routes # Definición de endpoints

/services # Acceso a procedimientos almacenados

/db # Configuración de conexión

index.js # Punto de entrada

.env # Variables de entorno


## ⚙️ Configuración

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/Chuites/PruebaTecnicaMPBackend.git
   cd PruebaTecnicaMPBackend

    Instalar dependencias:

npm install

Configurar .env:

DB_USER=usuario_sql

DB_PASSWORD=clave_sql

DB_SERVER=localhost

DB_DATABASE=nombre_bd

DB_PORT=1433

PORT=3000


Ejecutar el servidor:

    node index.js

🧪 Endpoints disponibles

    /api/casos - Crear, listar, cambiar estado, reasignar casos

    /api/fiscales - Crear, listar fiscales por fiscalía

    /api/fiscalias - Crear y listar fiscalías

    /api/logs - Obtener intentos fallidos de reasignación

    /api/fiscales/login - Autenticación por correo y contraseña

🐳 Docker

Archivo Dockerfile disponible para contenerizar el servicio.
