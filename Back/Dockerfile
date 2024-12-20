FROM php:8.1-apache
WORKDIR /var/www/html

RUN apt-get update && apt-get install -y unzip libpq-dev \
    && docker-php-ext-install pdo pdo_pgsql

COPY . .

RUN a2enmod rewrite
EXPOSE 80

CMD ["apache2-foreground"]
