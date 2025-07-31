-- USER: sa
-- PASSWORD = '123Admin';

CREATE DATABASE PruebaTecnicaMP;

USE PruebaTecnicaMP;

-- Tabla de Fiscalías
CREATE TABLE Fiscalias (
    id INT PRIMARY KEY IDENTITY,
    nombre NVARCHAR(100) NOT NULL
);

-- Tabla de Fiscales
CREATE TABLE Fiscales (
    id INT PRIMARY KEY IDENTITY,
    nombre NVARCHAR(100) NOT NULL,
    correo NVARCHAR(150) NOT NULL UNIQUE,
    password_hash NVARCHAR(255) NOT NULL,
    rol NVARCHAR(50) NOT NULL,
    id_fiscalia INT NOT NULL,
    FOREIGN KEY (id_fiscalia) REFERENCES Fiscalias(id)
);

-- Tabla de Casos
CREATE TABLE Casos (
    id INT PRIMARY KEY IDENTITY,
    numero_caso NVARCHAR(50) NOT NULL UNIQUE,
    descripcion NVARCHAR(MAX),
    estado NVARCHAR(20) NOT NULL CHECK (estado IN ('pendiente', 'en_progreso', 'cerrado')),
    fecha_registro DATETIME NOT NULL DEFAULT GETDATE(),
    id_fiscal_actual INT,
    id_fiscalia INT NOT NULL,
    FOREIGN KEY (id_fiscal_actual) REFERENCES Fiscales(id),
    FOREIGN KEY (id_fiscalia) REFERENCES Fiscalias(id)
);

-- Tabla de Logs de intentos fallidos de reasignación
CREATE TABLE LogsIntentos (
    id INT PRIMARY KEY IDENTITY,
    id_caso INT NOT NULL,
    id_fiscal_origen INT NOT NULL,
    id_fiscal_destino INT NOT NULL,
    fecha DATETIME NOT NULL DEFAULT GETDATE(),
    motivo NVARCHAR(255),
    FOREIGN KEY (id_caso) REFERENCES Casos(id),
    FOREIGN KEY (id_fiscal_origen) REFERENCES Fiscales(id),
    FOREIGN KEY (id_fiscal_destino) REFERENCES Fiscales(id)
);
