---
title: API Reference
sidebar_position: 3
---

# API спецификация

SPB Vibes предоставляет REST API с авторизацией через JWT. Полная спецификация в формате OpenAPI 3.0 приведена в файле [`openapi.yaml`](../openapi.yaml).

## Ключевые эндпоинты

| Метод | Эндпоинт | Описание |
|-------|----------|----------|
| `POST` | `/users` | Регистрация |
| `POST` | `/auth/login` | Вход |
| `GET` | `/user/profile` | Профиль |
| `PATCH` | `/user/profile` | Обновление профиля |
| `POST` | `/flight-search-tasks` | Поиск авиабилетов |
| `GET` | `/flight-search-tasks/{task_id}` | Результаты поиска |
| `GET` | `/cart` | Корзина |
| `POST` | `/cart/items` | Добавить в корзину |
| `DELETE` | `/cart/items/{item_id}` | Удалить из корзины |
| `PUT` | `/cart/promo` | Применить промокод |
| `POST` | `/orders` | Создать заказ |
| `POST` | `/orders/{order_id}/payments` | Инициировать платёж |
| `GET` | `/orders/{order_id}` | Детали заказа |
| `GET` | `/orders` | Список заказов |

**Пример запроса поиска авиабилетов**

```bash
curl -X POST http://localhost:8000/api/flight-search-tasks \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{"origin":"LED","destination":"PEK","departure_date":"2026-05-15","trip_type":"one_way","passengers_adults":1}'