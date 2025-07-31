-- Insertar fiscal
CREATE PROCEDURE sp_insertar_fiscal
    @nombre NVARCHAR(100),
    @correo NVARCHAR(150),
    @password_hash NVARCHAR(255),
    @rol NVARCHAR(50),
    @id_fiscalia INT
AS
BEGIN
    INSERT INTO Fiscales (nombre, correo, password_hash, rol, id_fiscalia)
    VALUES (@nombre, @correo, @password_hash, @rol, @id_fiscalia);
END;

-- Obtener fiscales por fiscalía
CREATE PROCEDURE sp_listar_fiscales_por_fiscalia
    @id_fiscalia INT
AS
BEGIN
    SELECT * FROM Fiscales WHERE id_fiscalia = @id_fiscalia;
END;
