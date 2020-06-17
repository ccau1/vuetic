export default {
  model: 'Categories',
  documents: [
    {
      _id: '5ed9bad5ae2241cb83247ce1',
      name: 'Investment',
      // Parent ID
      parent: '5ed9bce0e6c956f419388319',
      // Ancestor IDs
      ancestors: ['5ed9bd0027d2abeb5acff5e6'],
      // User ID
      createdBy: ['5ed9ae7c39adbc6c1440d031'],
    },
    {
      _id: '5ed9bba4b9edaaf937e05092',
      name: 'Work',
      parent: '5ed9bd679760c56d33e178a7',
      ancestors: ['5ed9bd74c2ba4b7bdd542b2d'],
      createdBy: ['5ed9aed2a797732be6f6b103'],
    },
    {
      _id: '5ed9bc142d6df243321d7798',
      name: 'Health',
      parent: '5ed9bdc8105552c1b918a8ee',
      ancestors: ['5ed9bdd140fd81275a674ae1'],
      createdBy: ['5ed9aed8074f80fc81603def'],
    },
  ],
};
