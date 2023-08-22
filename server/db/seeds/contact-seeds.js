exports.seed = (knex) =>
  knex('contact')
    .del()
    .then(() =>
      knex('contact').insert([
        {
          id: 101,
          url: '',
        },
        {
          id: 102,
          name: 'Shaving and Beard Trim',
          price: 15,
          url: 'Complete beard trim and shaping',
        },
        {
          id: 103,
          url: 'Clippers on the back, sides, and top. Detailed around the edges, with the nape straight razor shaved.',
        },
        {
          id: 104,
          url: 'Add this onto your haircut for a razor fade',
        },
      ])
    )
