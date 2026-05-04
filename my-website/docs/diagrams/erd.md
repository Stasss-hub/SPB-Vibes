---
title: Модель данных
sidebar_position: 6
---

# Модель данных (ERD)

## Концептуальная модель

```plantuml
@startuml
!define table(x) entity x << (T,#FFAAAA) >>
table(users) {}
table(carts) {}
table(cart_items) {}
table(orders) {}
table(payments) {}
table(promo_codes) {}
table(order_status_history) {}
table(flight_search_tasks) {}

users ||--o{ carts
carts ||--|{ cart_items
carts ||--|| orders
orders ||--|{ payments
orders ||--|{ order_status_history
carts }o--|| promo_codes
users ||--o{ flight_search_tasks
@enduml