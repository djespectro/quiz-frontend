FROM nginx:latest

COPY nginx.conf /etc/nginx/nginx.conf

COPY ./dist/quiz /usr/share/nginx/html

EXPOSE 80