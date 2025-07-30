1. Клонуйте репозиторій
  git clone https://github.com/SerhiiVynnyk/unique_playlist_cypress.git
2. Встановіть залежності:
  npm install
3. Запуск тестів
  Візуальний режим (Headed):
    npm test
  Headless:
    npx cypress run
4. Автотести знаходяться в папці e2e/uniqe_playlist.cy
5. Логіка прописана в папці pages, так як використовував паттерн Page Object Model 
6. В папці helpers знаходяться файли actions та assertions з кастомними діями та перевірками
