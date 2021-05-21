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

CREATE TABLE IF NOT EXISTS documentos(
	documento VARCHAR(30) NOT NULL UNIQUE PRIMARY KEY
);

CREATE TABLE IF NOT EXISTS personas (
	tipo_doc VARCHAR(30) NOT NULL,
	numero_doc VARCHAR(15) NOT NULL,
	nombre VARCHAR(20) NOT NULL,
	apellido VARCHAR(20) NOT NULL,
	FOREIGN KEY (tipo_doc) REFERENCES documentos(documento),
	PRIMARY KEY (tipo_doc, numero_doc)
);

CREATE TABLE IF NOT EXISTS telefonos (
	numero_tel VARCHAR(11) NOT NULL UNIQUE,
	tipo_doc VARCHAR(30) NOT NULL,
	numero_doc VARCHAR(15) NOT NULL,
	FOREIGN KEY (tipo_doc, numero_doc) REFERENCES personas(tipo_doc, numero_doc),
	PRIMARY KEY (numero_tel, tipo_doc, numero_doc)
);

CREATE TABLE IF NOT EXISTS roles (
	nombre_rol VARCHAR(45) UNIQUE NOT NULL PRIMARY KEY
);

CREATE TABLE IF NOT EXISTS sucursales (
	id_sucursal INTEGER NOT NULL AUTO_INCREMENT,
	direccion VARCHAR(50) NOT NULL UNIQUE,
	mesas INTEGER NOT NULL,
	mesas_disponibles INTEGER NOT NULL,
	PRIMARY KEY (id_sucursal, direccion)
);

CREATE TABLE IF NOT EXISTS empleados (
	tipo_doc VARCHAR(30) NOT NULL UNIQUE,
	numero_doc VARCHAR(15) NOT NULL UNIQUE,
	nombre_rol VARCHAR(45) NOT NULL,
	sueldo DECIMAL(8,2) NOT NULL,
	id_sucursal INTEGER,
	direccion VARCHAR(50),
	psw TEXT NOT NULL COMMENT 'password',
	FOREIGN KEY (tipo_doc, numero_doc) REFERENCES personas(tipo_doc, numero_doc),
	FOREIGN KEY (id_sucursal, direccion) REFERENCES sucursales(id_sucursal, direccion),
	PRIMARY KEY (tipo_doc, numero_doc, nombre_rol)
);

CREATE TABLE IF NOT EXISTS reservas (
	id_reserva INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
	numero_doc VARCHAR(15) NOT NULL, 
	tipo_doc VARCHAR(30) NOT NULL, 
	id_sucursal INTEGER NOT NULL,
	direccion VARCHAR(50) NOT NULL,
	fecha DATETIME NOT NULL,
	mesa_reserva INTEGER,
	FOREIGN KEY (tipo_doc, numero_doc) REFERENCES personas(tipo_doc, numero_doc),
	FOREIGN KEY (id_sucursal, direccion) REFERENCES sucursales(id_sucursal, direccion)
);

CREATE TABLE IF NOT EXISTS pedido (
	id_plato INTEGER NOT null,
	id_reservas INTEGER NOT null,
	costo DECIMAL(8,2), 
	fecha_pago DATETIME NOT NULL,
	FOREIGN KEY (id_reservas) REFERENCES reservas(id_reserva),
	FOREIGN KEY (id_plato) REFERENCES platos(id_plato),
	PRIMARY KEY (id_plato, id_reservas)
);