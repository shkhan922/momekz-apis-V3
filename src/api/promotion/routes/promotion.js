module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/promotions',
      handler: 'promotion.find',
      config: { policies: [] }
    },
    {
      method: 'GET',
      path: '/promotions/:id',
      handler: 'promotion.findOne',
      config: { policies: [] }
    },
    {
      method: 'POST',
      path: '/promotions',
      handler: 'promotion.create',
      config: { policies: [] }
    },
    {
      method: 'PUT',
      path: '/promotions/:id',
      handler: 'promotion.update',
      config: { policies: [] }
    },
    {
      method: 'DELETE',
      path: '/promotions/:id',
      handler: 'promotion.delete',
      config: { policies: [] }
    }
  ]
}