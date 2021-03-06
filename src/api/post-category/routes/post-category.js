module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/post-categories',
      handler: 'post-category.find',
      config: { policies: [] }
    },
    {
      method: 'GET',
      path: '/post-categories/:id',
      handler: 'post-category.findOne',
      config: { policies: [] }
    },
    {
      method: 'POST',
      path: '/post-categories',
      handler: 'post-category.create',
      config: { policies: [] }
    },
    {
      method: 'PUT',
      path: '/post-categories/:id',
      handler: 'post-category.update',
      config: { policies: [] }
    },
    {
      method: 'DELETE',
      path: '/post-categories/:id',
      handler: 'post-category.delete',
      config: { policies: [] }
    }
  ]
}