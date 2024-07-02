# Se inicia con una imagen base de Ubuntu
FROM ubuntu

# Se actualizan los paquetes del sistema
RUN apt-get update && apt-get upgrade -y

# Se instala NGINX
RUN apt-get install nginx -y

# Se copia el archivo index.html personalizado
COPY index.html /var/www/html/index.html

# Se copia el archivo CSS personalizado
COPY index.css /var/www/html/index.css

# Se expone el puerto 80
EXPOSE 80

# Se inicia el servicio NGINX
CMD ["nginx", "-g", "daemon off;"]
