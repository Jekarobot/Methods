# 🧪 Methods

**Methods** — это учебный проект, демонстрирующий работу с различными методами JavaScript (массивы, объекты, HTTP-запросы, пользовательские функции). Проект предназначен для изучения и тестирования базовых и продвинутых возможностей языка.

---

## 🚀 Технологический стек

- **JavaScript (ES6+)** — основной язык
- **HTML5** — разметка
- **CSS3** — стилизация
- **Webpack** — сборка модулей
- **Babel** — транспиляция
- **Jest** — тестирование (через `__tests__`)

---

## 📦 Установка и запуск

1. **Клонируйте репозиторий:**
   ```bash
   git clone https://github.com/your-username/methods.git
   cd methods
   ```

2. **Установите зависимости:**
   ```bash
   npm install
   ```

3. **Запустите проект в режиме разработки:**
   ```bash
   npm start
   ```

4. **Соберите проект для продакшена:**
   ```bash
   npm run build
   ```

5. **Запустите тесты:**
   ```bash
   npm test
   ```

---

## 💻 Примеры использования

### Базовые методы (basic.js)
```javascript
import { sum, filterEven } from './js/basic';

console.log(sum(1, 2, 3)); // 6
console.log(filterEven([1, 2, 3, 4])); // [2, 4]
```

### HTTP-запросы (http.js)
```javascript
import { fetchData } from './js/http';

fetchData('https://api.example.com/data')
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

### Пользовательские методы (user.js)
```javascript
import { createUser, getUser } from './js/user';

const user = createUser({ name: 'Alice', age: 30 });
console.log(getUser(user.id)); // { id: 1, name: 'Alice', age: 30 }
```

---

## 📁 Структура проекта

```
methods/
├── babel.config.json          # Конфигурация Babel
├── package-lock.json          # Lock-файл зависимостей
├── package.json               # Метаданные и скрипты
├── webpack.config.js          # Конфигурация Webpack
├── src/
│   ├── css/
│   │   └── style.css          # Стили проекта
│   ├── index.html             # Главная HTML-страница
│   ├── index.js               # Точка входа (сборка)
│   └── js/
│       ├── __tests__/         # Тесты (Jest)
│       ├── app.js             # Основной модуль приложения
│       ├── basic.js           # Базовые методы
│       ├── http.js            # HTTP-методы
│       └── user.js            # Пользовательские методы
```

---

## 📄 Лицензия

Проект распространяется под лицензией **MIT**. Подробнее — в файле `LICENSE`.