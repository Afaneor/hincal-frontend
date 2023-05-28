# Hincal - Handy investment calculation

## Клиентская часть решения задачи хакатона "Лидеры цифровой трансформации"
## Связанные репозитории
* [Серверная часть](https://github.com/Afaneor/hincal-backend)

## Сборка
Убедитесь, что у вас установлен node.js версии 16 или выше

Установка пакетного менеджера yarn
```shell
npm install --global yarn
```
Установка зависимостей
```shell
yarn install
```
Запуск проекта
```shell
yarn run dev
```

Сборка docker контейнера (ваш сервер, скорее всего не на ARM, поэтому явно указываем архитектуру)
```shell
docker build --platform linux/amd64 -t frontend .
```
