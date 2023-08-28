exports.seed = (knex) =>
  knex('contact')
    .del()
    .then(() =>
      knex('contact').insert([
        {
          id: 301,
          number: '021033761',
          email: 'rishithebarber1@gmail.com',
          instagram: '@rishithebarber',
          address: '18 Sylvan Crescent, Te Atatu South, Auckland',
        },
      ])
    )
