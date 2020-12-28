# Basketball Hall of Fame

npm run start - uvek se mora refresovati
npm run dev - pokrece nodemon

node-sass -o public/css public/css --w

licence

grunt dev za pokretanje svega

Basketball Hall of Fame is an Express JS app that is using JSON object instead of database. This project is using [npm](https://www.npmjs.com/) and grunt [grunt](https://gruntjs.com/) task runner, together with Express Handlebars [Express Handlebars](https://www.npmjs.com/package/express-handlebars) templates and sass [sass](https://sass-lang.com/) compiler.

## Getting Started

Project consists out of `src/` directory with `json/`, `public/`, `routes/` and `views/` folders. `json/` directory holds an JSON object which serves as a database. `public/` folder consists out of `css/` folder where there is `sass/` folder that is compiling styling to `src/public/css/style.css`, and `images/` directory that holds images. In `routes/` folder all routes for app can be found, while `views/` folder contains all templates that app is rendering.

## Installation

```bash
npm install
```

## Developement

Starting the task and compiling SASS. Server that hosts app is `http://localhost:3000`:

```bash
grunt dev
```

Starts Nodemon:

```bash
npm run dev
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
