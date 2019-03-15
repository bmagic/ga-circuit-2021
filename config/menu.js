const menu = [
  { type: 'config', id: 'news' },
  { type: 'config', id: 'live' },
  { type: 'config', id: 'tickets' },
  { type: 'config', id: 'tournaments' },
  { type: 'config',
    id: 'info',
    children: [
      { type: 'config', id: 'infosGA' },
      { type: 'config', id: 'exhibitors' },
      { type: 'config', id: 'family' },
      { type: 'config', id: 'influencers' },
      { type: 'page', title: 'Une page', id: 1256, link: '/grand-poitiers' }
    ] },
  { type: 'config', id: 'partners' }
]

module.exports = menu
