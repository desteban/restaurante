CREATE TABLE IF NOT EXISTS categorias(
	nom_categoria VARCHAR(20) NOT NULL PRIMARY KEY UNIQUE
);

CREATE TABLE IF NOT EXISTS platos(
	id_plato INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
	nom_plato VARCHAR(30) UNIQUE NOT NULL,
	src TEXT NOT NULL,
	costo DECIMAL(8,2) NOT NULL,
	descripcion TEXT NOT NULL,
	visible BOOL NOT NULL DEFAULT TRUE
);

CREATE TABLE IF NOT EXISTS platos_categoria(
	id_plato INTEGER NOT NULL,
	nom_categoria VARCHAR(20) NOT NULL,
	FOREIGN KEY (id_plato) REFERENCES platos(id_plato),
	FOREIGN KEY (nom_categoria) REFERENCES categorias(nom_categoria),
	PRIMARY KEY (id_plato, nom_categoria)
);

CREATE TABLE IF NOT EXISTS personas (
	email VARCHAR(50) NOT NULL PRIMARY KEY UNIQUE NOT NULL,
	nombre VARCHAR(20) NOT NULL,
	apellido VARCHAR(20) NOT NULL
);

CREATE TABLE IF NOT EXISTS telefonos (
	numero_tel VARCHAR(11) NOT NULL UNIQUE,
	email VARCHAR(50) NOT NULL,
	FOREIGN KEY (email) REFERENCES personas(email),
	PRIMARY KEY (numero_tel, email)
);

CREATE TABLE IF NOT EXISTS sucursales (
	id_sucursal INTEGER NOT NULL AUTO_INCREMENT,
	direccion VARCHAR(50) NOT NULL UNIQUE,
	PRIMARY KEY (id_sucursal)
);

CREATE TABLE IF NOT EXISTS mesas (
	id_mesa INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
	id_sucursal INTEGER NOT NULL,
	cantidad_sillas INTEGER NOT NULL,
	cantidad_mesa INTEGER NOT NULL,
	cantidad_disponible INTEGER NOT NULL,
	FOREIGN KEY (id_sucursal) REFERENCES sucursales(id_sucursal)
);

CREATE TABLE IF NOT EXISTS reservas (
	id_reservas INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
	email VARCHAR(50) NOT NULL,
	id_mesa INTEGER NOT NULL,
	fecha DATETIME NOT NULL,
	costo DECIMAL(10,2),
	fecha_pago DATETIME,
	FOREIGN KEY (id_mesa) REFERENCES mesas(id_mesa),
	FOREIGN KEY(email) REFERENCES personas(email)
);

CREATE TABLE IF NOT EXISTS pedidos (
	id_pedido INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
	id_reserva INTEGER NOT NULL,
	id_plato INTEGER NOT NULL,		
	FOREIGN KEY(id_reserva) REFERENCES reservas(id_reservas),
	FOREIGN KEY(id_plato) REFERENCES platos(id_plato)
);

DELIMITER \\
CREATE TRIGGER `validar_costo`
AFTER INSERT ON `pedidos`
	FOR EACH ROW BEGIN
	
	/*obtener el costo de los platos*/
	SET @costototal = (SELECT SUM(platos.costo)
	FROM pedidos
	INNER JOIN platos ON pedidos.id_plato = platos.id_plato
	WHERE pedidos.id_reserva = 1);
	
	/*actualizar el costo de las reservas*/
	UPDATE reservas SET costo=@costototal WHERE reservas.id_reservas = new.id_reserva;
	
END\\
DELIMITER ;