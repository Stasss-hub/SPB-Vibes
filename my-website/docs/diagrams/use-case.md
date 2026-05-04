---
title: Use Case диаграмма
sidebar_position: 4
---

# Use Case диаграмма

```plantuml
@startuml
left to right direction

actor "Турист" as Tourist
actor "Администратор" as Admin

rectangle "SPB Vibes" {
  usecase "Забронировать отель" as UC1
  usecase "Купить билет в музей" as UC2
  usecase "Купить авиабилет" as UC8
  usecase "Купить ЖД билет" as UC9
  usecase "Купить билет на мероприятие" as UC10
  usecase "Оплатить заказ" as UC3
  usecase "Управлять каталогом услуг" as UC4
  usecase "Применить промокод" as UC5
  usecase "Отказ в оплате" as UC6
  usecase "Отменить оплату" as UC7
}

Tourist --> UC1
Tourist --> UC2
Tourist --> UC8
Tourist --> UC9
Tourist --> UC10
Tourist --> UC5
Tourist --> UC7
Admin --> UC4

UC1 ..> UC3 : <<include>>
UC2 ..> UC3 : <<include>>
UC8 ..> UC3 : <<include>>
UC9 ..> UC3 : <<include>>
UC10 ..> UC3 : <<include>>
UC3 <.. UC5 : <<extend>>
UC3 <.. UC6 : <<extend>>
UC3 <.. UC7 : <<extend>>
@enduml