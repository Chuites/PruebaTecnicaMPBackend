CREATE PROCEDURE sp_insertar_log_intento
    @id_caso INT,
    @id_fiscal_origen INT,
    @id_fiscal_destino INT,
    @motivo NVARCHAR(255)
AS
BEGIN
    INSERT INTO LogsIntentos (id_caso, id_fiscal_origen, id_fiscal_destino, motivo)
    VALUES (@id_caso, @id_fiscal_origen, @id_fiscal_destino, @motivo);
END;


CREATE OR ALTER PROCEDURE sp_listar_intentos_fallidos
AS
BEGIN
  SELECT
    l.id,
    l.id_caso,
    ISNULL(c.numero_caso, 'Caso eliminado') AS numero_caso,
    l.id_fiscal_origen,
    fo.nombre AS nombre_origen,
    l.id_fiscal_destino,
    fd.nombre AS nombre_destino,
    l.motivo,
    l.fecha
  FROM LogsIntentos l
  LEFT JOIN Casos c ON l.id_caso = c.id
  LEFT JOIN Fiscales fo ON l.id_fiscal_origen = fo.id
  LEFT JOIN Fiscales fd ON l.id_fiscal_destino = fd.id;
END;
