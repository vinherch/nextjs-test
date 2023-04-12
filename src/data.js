const getCards = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res([
        {
          id: 1,
          title: "Card One",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat temporibus minima quibusdam accusamus ex cum beatae rerum voluptate dignissimos debitis.",
        },
        {
          id: 2,
          title: "Card Two",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat temporibus minima quibusdam accusamus ex cum beatae rerum voluptate dignissimos debitis.",
        },
        {
          id: 3,
          title: "Card Three",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat temporibus minima quibusdam accusamus ex cum beatae rerum voluptate dignissimos debitis.",
        },
      ]);
    }, 500);
  });
};

export const getProjects = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res([
        {
          id: 1,
          title: "Project One",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat temporibus minima quibusdam accusamus ex cum beatae rerum voluptate dignissimos debitis.",
        },
        {
          id: 2,
          title: "Project Two",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat temporibus minima quibusdam accusamus ex cum beatae rerum voluptate dignissimos debitis.",
        },
        {
          id: 3,
          title: "Project Three",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat temporibus minima quibusdam accusamus ex cum beatae rerum voluptate dignissimos debitis.",
        },
      ]);
    }, 500);
  });
};

export default getCards;
