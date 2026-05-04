title: Тестирование
sidebar_position: 8
---

# Тестирование

## Виды тестирования

| Вид | Инструменты | Описание |
|-----|-------------|----------|
| Unit-тесты | pytest (Python), Jest (JS) | Тестирование отдельных функций и классов |
| Интеграционные тесты | pytest + requests | Тестирование API, взаимодействие с БД и внешними сервисами |
| End-to-End | Playwright (для веба) / Flutter Driver (для моб.) | Сквозные сценарии пользователя |
| Нагрузочное тестирование | Locust | Проверка производительности под нагрузкой (до 1000 RPS) |
| Безопасность | OWASP ZAP | Поиск уязвимостей (CSRF, XSS, SQL injection) |

## Пример unit-теста (Python)

```python
def test_apply_promo_code():
    cart = Cart(subtotal=1000)
    promo = PromoCode(type="percentage", value=10)
    cart.apply_promo(promo)
    assert cart.discount == 100
    assert cart.total == 900