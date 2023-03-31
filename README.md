# gnNews - gnStudio React.js developer challenge

## Przygotowanie środowiska

1. Sklonowanie repozytorium

```
git clone https://github.com/pawel975/gnNews.git
cd gnNews
```

2. Instalacja

```
npm install
```

3. Utworzenie plik .env

Aplikacja wykorzystuje publiczne API https://newsapi.org/ , które wymaga autentykacji kluczem. Należy utworzyć plik `.env` w katalogu głównym o następującej treści.

.env

```
VITE_NEWS_API_KEY="TUTAJ UMIEŚĆ KLUCZ"
```

Lub alternatywna wersja - podmienić `import.meta.env.VITE_NEWS_API_KEY}` na klucz API

src/components/MainContent/MainContent.tsx

```javascript
const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`)
```

4. Uruchomienie w trybie deweloperskim

```
npm run dev
```

5. Uruchomienie w trybie produkcyjnym

```
npm run build
```

6. Testowanie aplikacji

```
npm run test
```

PS: W razie potrzeby mogę wysłać swój klucz API do osoby sprawdzającej zadanie :smiley:
