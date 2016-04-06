# Portal 2D

## Description
A JavaScript 2D version of Portal.

![Game In Action]()

### How to play

Visit [this link]() to play the game.

Use the left and right arrow keys to move left and right. The up arrow key will make the player jump. Use the A key to shoot left, the W key to shoot up, the D key to shoot right, and the X key to shoot down. The shift key will change the color of the portal to be created (either orange or blue).

Falling into the lava will result in the players death, and the level is automatically restarted. To win the level, the player must get to the brown door.

### Features

* **Levels of increasing difficulty:** Puzzles get harder with each level.
* **Track number of attempts:** The game will track how many times you've attempted each level within each game. Total number of attempts are stored in `sessionStorage` and the total number of attempts for each game played in that session are displayed at the end of each game.

### Tools

* Javascript
* Lodash
* HTML 5 Canvas
* Mocha / Chai


### The Team

#### Greg Armstrong

<img src="https://avatars2.githubusercontent.com/u/13356027?v=3&s=400" alt="Greg Armstrong" width=150>

[Github](https://github.com/GregoryArmstrong) // [Email]()

#### Beth Secor

<img src="https://avatars2.githubusercontent.com/u/11467561?v=3&s=460" alt="Beth Secor" width=150>

[Blog](http://bethsecor.github.io/) // [Github](https://github.com/bethsecor) // [Email](mailto:elizabeth.a.secor@gmail.com)

---
### To run locally:

```
npm install
```

To fire up a development server:

```
npm start
```

Once the server is running, you can visit:

* `http://localhost:8080/webpack-dev-server/` to run your application.
* `http://localhost:8080/webpack-dev-server/test.html` to run your test suite in the browser.

To build the static files:

```js
npm run build
```


To run tests in Node:

```js
npm test
```
