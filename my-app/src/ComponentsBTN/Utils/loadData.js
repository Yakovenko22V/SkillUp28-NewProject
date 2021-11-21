export const loadData = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(arrTask);
    }, 2000);
})

const arrTask = [
    {
      nameOfTask: 'Оплатить комунальные счета',
      idOfTask: 1,
      flagOfImportance: true,
      isTaskActive: true,
    },

    {
      nameOfTask: 'Сделать домашнее задание на курсы SkillUp',
      idOfTask: 2,
      flagOfImportance: true,
      isTaskActive: true,
    },

    {
      nameOfTask: 'Посмотреть новый фильм Marvel',
      idOfTask: 3,
      flagOfImportance: false,
      isTaskActive: false,
    },
  ]