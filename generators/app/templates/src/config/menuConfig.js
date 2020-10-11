const menuList = [{
    title: '项目注册',
    path: '/main/project-register',
    icon: 'project'
  }, {
    title: '项目列表', // 菜单标题名称
    path: '/main/project-list', // 对应的path
    icon: 'list', // 图标名称
    isPublic: true, // 公开的
  },
  {
    title: '综合查询',
    path: '/main/all-query',
    icon: 'query',
  },
  {
    title: '统计分析',
    path: '/main/statistics-analysis',
    icon: 'analysis'
  },
  {
    title: '减排量管理',
    path: '/main/reduce-manange',
    icon: 'safety',
  },
  {
    title: '审定与核证机构管理',
    path: '/main/ccer-manage',
    icon: 'ccer',
  },
  {
    title: '用户管理',
    path: '/main/user-manage',
    icon: 'user',
  },
  {
    title: '已签发减排量',
    path: '/main/issue-manage',
    icon: 'issue',
  },
]

export default menuList