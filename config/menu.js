const menu = [
  { type: 'config', id: 'news' },
  { type: 'config', id: 'live' },
  { type: 'config', id: 'tickets' },
  { type: 'config', id: 'tournaments' },
  { type: 'config',
    id: 'info',
    children: [
      { type: 'config', id: 'exhibitors' }
    ] },
  { type: 'config', id: 'partners' }
]

module.exports = menu
