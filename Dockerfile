FROM php:fpm-alpine3.20

RUN docker-php-ext-install pdo pdo_mysql \
&& docker-php-ext-enable pdo pdo_mysql