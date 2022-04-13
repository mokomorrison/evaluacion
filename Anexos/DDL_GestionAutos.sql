-- public.tbl_color definition

-- Drop table

-- DROP TABLE public.tbl_color;

CREATE TABLE public.tbl_color (
	id serial4 NOT NULL,
	descripcion varchar(100) NOT NULL,
	fecha_creacion timestamp NOT NULL,
	CONSTRAINT tbl_color_descripcion_key UNIQUE (descripcion),
	CONSTRAINT tbl_color_pkey PRIMARY KEY (id)
);

-- Permissions

ALTER TABLE public.tbl_color OWNER TO postgres;
GRANT ALL ON TABLE public.tbl_color TO postgres;


-- public.tbl_marca definition

-- Drop table

-- DROP TABLE public.tbl_marca;

CREATE TABLE public.tbl_marca (
	id serial4 NOT NULL,
	descripcion varchar(100) NOT NULL,
	fecha_creacion timestamp NOT NULL,
	CONSTRAINT tbl_marca_descripcion_key UNIQUE (descripcion),
	CONSTRAINT tbl_marca_pkey PRIMARY KEY (id)
);

-- Permissions

ALTER TABLE public.tbl_marca OWNER TO postgres;
GRANT ALL ON TABLE public.tbl_marca TO postgres;


-- public.tbl_propietario definition

-- Drop table

-- DROP TABLE public.tbl_propietario;

CREATE TABLE public.tbl_propietario (
	id serial4 NOT NULL,
	nombre varchar(100) NOT NULL,
	apellidos varchar(100) NOT NULL,
	identificacion varchar(18) NOT NULL,
	fecha_nacimiento date NOT NULL,
	direccion varchar(255) NOT NULL,
	telefono varchar(11) NOT NULL,
	email varchar(100) NOT NULL,
	fecha_creacion timestamp NOT NULL,
	CONSTRAINT tbl_propietario_pkey PRIMARY KEY (id)
);

-- Permissions

ALTER TABLE public.tbl_propietario OWNER TO postgres;
GRANT ALL ON TABLE public.tbl_propietario TO postgres;


-- public.tbl_tipo_vehiculo definition

-- Drop table

-- DROP TABLE public.tbl_tipo_vehiculo;

CREATE TABLE public.tbl_tipo_vehiculo (
	id serial4 NOT NULL,
	descripcion varchar(100) NOT NULL,
	fecha_creacion timestamp NOT NULL,
	CONSTRAINT tbl_tipo_vehiculo_descripcion_key UNIQUE (descripcion),
	CONSTRAINT tbl_tipo_vehiculo_pkey PRIMARY KEY (id)
);

-- Permissions

ALTER TABLE public.tbl_tipo_vehiculo OWNER TO postgres;
GRANT ALL ON TABLE public.tbl_tipo_vehiculo TO postgres;


-- public.tbl_linea definition

-- Drop table

-- DROP TABLE public.tbl_linea;

CREATE TABLE public.tbl_linea (
	id serial4 NOT NULL,
	descripcion varchar(100) NOT NULL,
	marca_id int4 NOT NULL,
	fecha_creacion timestamp NOT NULL,
	CONSTRAINT tbl_linea_descripcion_key UNIQUE (descripcion),
	CONSTRAINT tbl_linea_pkey PRIMARY KEY (id),
	CONSTRAINT tbl_linea_marca_id_fkey FOREIGN KEY (marca_id) REFERENCES public.tbl_marca(id)
);

-- Permissions

ALTER TABLE public.tbl_linea OWNER TO postgres;
GRANT ALL ON TABLE public.tbl_linea TO postgres;


-- public.tbl_vehiculo definition

-- Drop table

-- DROP TABLE public.tbl_vehiculo;

CREATE TABLE public.tbl_vehiculo (
	id int4 NOT NULL DEFAULT nextval('tbl_auto_id_seq'::regclass),
	placa varchar(7) NOT NULL,
	vin varchar(100) NOT NULL,
	linea_id int4 NOT NULL,
	cilindrada varchar(4) NOT NULL,
	color_id int4 NOT NULL,
	chasis varchar(100) NOT NULL,
	fecha_creacion timestamp NOT NULL,
	tipo_vehiculo_id int4 NOT NULL,
	CONSTRAINT tbl_auto_chasis_key UNIQUE (chasis),
	CONSTRAINT tbl_auto_pkey PRIMARY KEY (id),
	CONSTRAINT tbl_auto_placa_key UNIQUE (placa),
	CONSTRAINT tbl_auto_vin_key UNIQUE (vin),
	CONSTRAINT tbl_auto_color_id_fkey FOREIGN KEY (color_id) REFERENCES public.tbl_color(id),
	CONSTRAINT tbl_auto_linea_id_fkey FOREIGN KEY (linea_id) REFERENCES public.tbl_linea(id),
	CONSTRAINT tbl_auto_tipo_vehiculo_id_key FOREIGN KEY (tipo_vehiculo_id) REFERENCES public.tbl_tipo_vehiculo(id)
);

-- Permissions

ALTER TABLE public.tbl_vehiculo OWNER TO postgres;
GRANT ALL ON TABLE public.tbl_vehiculo TO postgres;


-- public.tbl_vehiculo_propietario definition

-- Drop table

-- DROP TABLE public.tbl_vehiculo_propietario;

CREATE TABLE public.tbl_vehiculo_propietario (
	vehiculo_id int4 NOT NULL,
	propietario_id int4 NOT NULL,
	fecha_creacion timestamp NOT NULL,
	CONSTRAINT tbl_vehiculo_propietario_pkey PRIMARY KEY (vehiculo_id, propietario_id),
	CONSTRAINT tbl_vehiculo_propietario_propietario_id_fkey FOREIGN KEY (propietario_id) REFERENCES public.tbl_propietario(id),
	CONSTRAINT tbl_vehiculo_propietario_vehiculo_id_fkey FOREIGN KEY (vehiculo_id) REFERENCES public.tbl_vehiculo(id)
);

-- Permissions

ALTER TABLE public.tbl_vehiculo_propietario OWNER TO postgres;
GRANT ALL ON TABLE public.tbl_vehiculo_propietario TO postgres;