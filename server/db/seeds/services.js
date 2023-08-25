exports.seed = (knex) =>
  knex('services')
    .del()
    .then(() =>
      knex('services').insert([
        {
          id: 101,
          name: 'Haircutting and Styling',
          price: 30,
          description: 'A simple clean cut using scissors and clippers',
        },
        {
          id: 102,
          name: 'Shaving and Beard Trim',
          price: 15,
          description: 'Complete beard trim and shaping',
        },
        {
          id: 103,
          name: 'Buzz Cut',
          price: 20,
          description:
            'Clippers on the back, sides, and top. Detailed around the edges, with the nape straight razor shaved.',
        },
        {
          id: 104,
          name: 'Additional Razor Services',
          price: 15,
          description: 'Add this onto your haircut for a razor fade',
        },
      ])
    )
