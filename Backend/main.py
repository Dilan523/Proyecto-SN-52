#Rutas rest del proyecto
#importación del objeto aplicación de FastAPI
from fastapi import FastAPI
from controllers.categoria_controller import router
#crear el objeto aplicación
app = FastAPI()
#endpoints de prueba 
app.include_router(router=router)