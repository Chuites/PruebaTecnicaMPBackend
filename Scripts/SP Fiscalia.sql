-- Insertar fiscalía
CREATE PROCEDURE sp_insertar_fiscalia
    @nombre NVARCHAR(100)
AS
BEGIN
    INSERT INTO Fiscalias (nombre)
    VALUES (@nombre);
END;

-- Obtener todas las fiscalías
CREATE PROCEDURE sp_listar_fiscalias
AS
BEGIN
    SELECT * FROM Fiscalias;
END;
