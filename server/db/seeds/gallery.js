exports.seed = (knex) =>
  knex('gallery')
    .del()
    .then(() =>
      knex('gallery').insert([
        {
          id: 201,
          url: '/images/front-back-sides.jpg',
          title: 'Shot of front back and sides cut',
          description: 'A simple clean cut using scissors and clippers',
        },
        {
          id: 202,
          url: '/images/front-back-sides2.jpg',
          title: 'Shot of front back and sides cut2',
          description: 'A simple clean cut using scissors and clippers',
        },
        {
          id: 203,
          url: '/images/fade-with-beard.jpg',
          title: 'Shot of front back and sides cut3',
          description: 'A simple clean cut using scissors and clippers',
        },
        {
          id: 204,
          url: '/images/fade1.jpg',
          title: 'Shot of front back and sides cut4',
          description: 'A simple clean cut using scissors and clippers',
        },
      ])
    )
