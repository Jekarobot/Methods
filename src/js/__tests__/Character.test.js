import { Character } from "../app";

const hero = new Character('Bob', 'Daemon');

test('levelUp should increase level', () => {
    hero.levelUp();
    expect(hero.level).toBe(2);
    expect(hero.health).toBe(100);
    expect(hero.attack).toBe(30);
    expect(hero.defense).toBe(30);
})

test('damage should decrease health', () => {
    hero.damage(10);
    expect(hero.health).toBe(93);
    hero.damage(50)
    expect(hero.health).toBe(58);
    hero.damage(300)
    expect(hero.health).toBe(0);
})