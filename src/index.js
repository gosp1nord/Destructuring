export default function getSkill(person) {
  const res = person.special.map((item) => {
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
  });
  return res;
}
