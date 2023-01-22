export default function setSkill(person, num) {
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
  return null;
}
