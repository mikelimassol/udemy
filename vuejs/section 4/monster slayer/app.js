new Vue({
  el: "#app",
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    turns: []
  },
  methods: {
    startGame: function() {
      console.log("start game");
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.gameIsRunning = true;
      this.turns = [];
    },
    endGame: function() {
      console.log("end game");
      this.gameIsRunning = false;
    },
    attack: function() {
      console.log("Attack");
      damage = this.calculateHealth(3, 10);
      this.monsterHealth -= damage;

      this.turns.unshift({
        isPlayer: true,
        text: "player attacks with damage " + damage
      });

      if (this.determineWin()) {
        return;
      }

      this.monsterAttack();
    },
    specialAttack: function() {
      console.log("Special Attack");
      damage = this.calculateHealth(10, 17);
      this.monsterHealth -= damage;

      this.turns.unshift({
        isPlayer: true,
        text: "player attacks with damage " + damage
      });

      if (this.determineWin()) {
        return;
      }

      this.monsterAttack();
    },
    heal: function() {
      console.log("Heal");

      if (this.playerHealth < 90) {
        health = this.calculateHealth(3, 10);
        this.playerHealth += health;
      }

      this.turns.unshift({
        isPlayer: true,
        text: "player heals with health " + health
      });

      this.monsterAttack();
    },
    monsterAttack: function() {
      console.log("Attack");
      damage = this.calculateHealth(3, 17);
      this.playerHealth -= damage;

      this.turns.unshift({
        isPlayer: false,
        text: "monster attacks with damage " + damage
      });

      if (this.determineWin()) {
        return;
      }
    },
    calculateHealth: function(min, max) {
      //var max = 10;
      //var min = 3;
      //Math.random() // random between 0 to 0.999999
      //Math.random() * max // random between 0 to 9.99999
      //Math.floor(Math.random() * max) random between 0 to 9
      //Math.floor(Math.random() * max) + 1 random between 0 to 10
      //Math.max(Math.floor(Math.random() * max) + 1, min) we user Math.max so we can set a min so if the first param is lower that min(3) it will pick the min as the max number
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    determineWin: function() {
      if (this.playerHealth <= 0) {
        if (confirm("You lost. New Game")) {
          this.startGame();
        } else {
          this.endGame();
        }
        return true;
      } else if (this.monsterHealth <= 0) {
        if (confirm("You won. New Game")) {
          this.startGame();
        } else {
          this.endGame();
        }
        return true;
      }
      return false;
    }
  }
});
