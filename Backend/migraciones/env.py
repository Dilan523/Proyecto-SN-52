from logging.config import fileConfig
from sqlalchemy import create_engine, pool
from alembic import context
import sys
import os

# Agrega el directorio raíz del proyecto al path
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

# Importa el Base y tus modelos
from db import Base, SQLALCHEMY_DATABASE_URL
from models import Categoria, Noticia , Imagen, Usuario, Rol

# Configuración de Alembic
config = context.config

# Logging
if config.config_file_name is not None:
    fileConfig(config.config_file_name)

# MetaData para autogenerar migraciones
target_metadata = Base.metadata

# URL de conexión (directa desde tu proyecto)
SQLALCHEMY_DATABASE_URL = "mysql+pymysql://root:admin@localhost:3315/sn-52-3147234"

def run_migrations_offline() -> None:
    """Ejecuta migraciones en modo offline."""
    url = SQLALCHEMY_DATABASE_URL
    context.configure(
        url=url,
        target_metadata=target_metadata,
        literal_binds=True,
        dialect_opts={"paramstyle": "named"},
    )

    with context.begin_transaction():
        context.run_migrations()


def run_migrations_online() -> None:
    """Ejecuta migraciones en modo online."""
    connectable = create_engine(SQLALCHEMY_DATABASE_URL, poolclass=pool.NullPool)

    with connectable.connect() as connection:
        context.configure(
            connection=connection,
            target_metadata=target_metadata,
        )

        with context.begin_transaction():
            context.run_migrations()


if context.is_offline_mode():
    run_migrations_offline()
else:
    run_migrations_online()