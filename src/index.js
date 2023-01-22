
const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
    },
  ],
};

export default function getSkill(person, num) {
  for (let i = 0; i < person.special.length; i += 1) {
    if (person.special[i].id === num) {
      const {
        id,
        name,
        icon,
        description = 'Описание недоступно',
      } = person.special[i];
      return {
        id,
        name,
        icon,
        description,
      };
    }
  }
  return {};
}

// работает, но выдает целый массив такого же размера, как исходный, заполняя undefined
function getSkillForMap(person, num) {
  const res = person.special.map((item) => {
    if (item.id === num) {
      const {
        id,
        name,
        icon,
        description = 'Описание недоступно',
      } = item;
      return {
        id,
        name,
        icon,
        description,
      };
    }
  })
  return res
}
