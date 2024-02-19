class Character {
    constructor (name, type) {
      this.name = name
      this.type = type
      this.health = 100
      this.level = 1
      this.attack = 25
      this.defense = 25
    }

    levelUp() {
        if (this.health > 0) {
            this.level += 1;
            this.attack *= 1.2;
            this.defense *= 1.2;
            this.health = 100;
        }
    }

    damage(points) {
        if (this.health > 0) {
          this.health -= points * (1 - this.defense / 100);
          if (this.health < 0) {
            this.health = 0;
          }
        }
    }
}

export { Character }
    