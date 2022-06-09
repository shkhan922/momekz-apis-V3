module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/collections',
      handler: 'collection.find',
      config: { policies: [] }
    },
    {
      method: 'GET',
      path: '/collections/:id',
      handler: 'collection.findOne',
      config: { policies: [] }
    },
    {
      method: 'POST',
      path: '/collections',
      handler: 'collection.create',
      config: { policies: [] }
    },
    {
      method: 'PUT',
      path: '/collections/:id',
      handler: 'collection.update',
      config: { policies: [] }
    },
    {
      method: 'DELETE',
      path: '/collections/:id',
      handler: 'collection.delete',
      config: { policies: [] }
    }
  ]
}