export default {
  model: 'Posts',
  documents: [
    {
      _id: '5ed9bb119710f4b62a6f8bb6',
      slug: 'beautiful-slug',
      title: {
        en: 'Beautiful Title',
        'zh-hk': 'Beautiful Title HK',
        'zh-cn': 'Beautiful Title CN',
      },
      content: {
        en: 'Beautiful Content',
        'zh-hk': 'Beautiful Content HK',
        'zh-cn': 'Beautiful Content CN',
      },
      //Category IDs
      categories: ['5ed9bad5ae2241cb83247ce1'],
      isArchived: true,
      //User ID
      createdBy: '5ed9ae7c39adbc6c1440d031',
    },
    {
      _id: '5ed9bb673e1c0da09c771bea',
      slug: 'perfect-slug',
      title: {
        en: 'Perfect Title',
        'zh-hk': 'Perfect Title HK',
        'zh-cn': 'Perfect Title CN',
      },
      content: {
        en: 'Perfect Content',
        'zh-hk': 'Perfect Content HK',
        'zh-cn': 'Perfect Content CN',
      },
      categories: ['5ed9bba4b9edaaf937e05092'],
      isArchived: true,
      createdBy: '5ed9aed2a797732be6f6b103',
    },
    {
      _id: '5ed9bbee8a59cc36a65abc1c',
      slug: 'awesome-slug',
      title: {
        en: 'Awesome Title',
        'zh-hk': 'Awesome Title HK',
        'zh-cn': 'Awesome Title CN',
      },
      content: {
        en: 'Awesome Content',
        'zh-hk': 'Awesome Content HK',
        'zh-cn': 'Awesome Content CN',
      },
      categories: ['5ed9bc142d6df243321d7798'],
      isArchived: true,
      createdBy: '5ed9aed8074f80fc81603def',
    },
  ],
};
