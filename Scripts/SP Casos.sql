-- Insertar caso
CREATE PROCEDURE sp_insertar_caso
    @numero_caso NVARCHAR(50),
    @descripcion NVARCHAR(MAX),
    @estado NVARCHAR(20),
    @id_fiscal_actual INT,
    @id_fiscalia INT
AS
BEGIN
    INSERT INTO Casos (numero_caso, descripcion, estado, id_fiscal_actual, id_fiscalia)
    VALUES (@numero_caso, @descripcion, @estado, @id_fiscal_actual, @id_fiscalia);
END;

-- Cambiar estado del caso
CREATE PROCEDURE sp_actualizar_estado_caso
    @id INT,
    @nuevo_estado NVARCHAR(20)
AS
BEGIN
    UPDATE Casos SET estado = @nuevo_estado WHERE id = @id;
END;

-- Reasignar fiscal (control de lógica será en el backend)
CREATE PROCEDURE sp_reasignar_fiscal
    @id INT,
    @nuevo_fiscal INT
AS
BEGIN
    UPDATE Casos SET id_fiscal_actual = @nuevo_fiscal WHERE id = @id;
END;


CREATE OR ALTER PROCEDURE sp_listar_casos
AS
BEGIN
  SELECT
    c.id,
    c.numero_caso,
    c.estado,
    c.fecha_registro,
    c.id_fiscal_actual,
    f.nombre AS nombre_fiscal,
    c.id_fiscalia,
    fi.nombre AS nombre_fiscalia
  FROM Casos c
  LEFT JOIN Fiscales f ON c.id_fiscal_actual = f.id
  LEFT JOIN Fiscalias fi ON c.id_fiscalia = fi.id;
END;

