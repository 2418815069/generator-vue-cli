export default {
  name: "main",
  path: "/main",
  redirect: "/main/project-list",
  meta: {
    name: "碳汇项目"
  },
  component: () => import("@/pages/manage/main/index.vue"),
  children: [{
      name: "project-list",
      path: "project-list",
      redirect: "project-list/list-view",
      meta: {
        name: "项目列表",
        icon: 'list', // 图标名称
      },
      component: () => import("@/pages/manage/project-list/index.vue"),
      children: [{
          name: "list-view",
          path: "list-view",
          icon: 'list', // 图标名称
          meta: {
            name: "项目列表",
            isMenus: true,
            userType: [1, 2, 3, 4, 5]
          },
          component: () => import("@/pages/manage/project-list/list-view.vue")
        },
        {
          name: "list-detail",
          path: ":id",
          meta: {
            name: "项目详情"
          },
          component: () =>
            import("@/pages/manage/project-detail/list-detail.vue")
        }
      ]
    },
    {
      name: "all-query",
      path: "all-query",
      icon: 'query',
      redirect: "all-query/query-view",
      meta: {
        name: "综合查询",
        isMenus: true,
        userType: [5]
      },
      component: () => import("@/pages/manage/all-query/index.vue"),
      children: [{
          meta: {
            name: "综合查询"
          },
          name: "query-view",
          path: "query-view",
          component: () => import("@/pages/manage/all-query/query-view.vue")
        },
        {
          name: "query-detail",
          path: ":id",
          component: () =>
            import("@/pages/manage/project-detail/list-detail.vue")
        }
      ]
    },
    {
      name: "ccer-manage",
      path: "ccer-manage",
      icon: 'ccer',
      redirect: "ccer-manage/ccer-list",
      meta: {
        name: "审定与核证机构管理",
        isMenus: true,
        userType: [5]
      },
      component: () => import("@/pages/manage/ccer-manage/index.vue"),
      children: [{
          name: "ccer-list",
          path: "ccer-list",
          meta: {
            name: "审定与核证机构管理",
            isMenus: true,
            userType: [5]
          },
          component: () => import("@/pages/manage/ccer-manage/ccer-list.vue")
        },
        {
          name: "ccer-add",
          path: "ccer-add",
          meta: {
            name: "新建"
          },
          component: () =>
            import("@/pages/manage/ccer-manage/ccer-add.vue")
        },
        {
          name: "ccer-detail",
          path: ":id",
          meta: {
            name: "详情"
          },
          component: () =>
            import("@/pages/manage/ccer-manage/ccer-detail.vue")
        }
      ]
    },
    {
      name: "user-manage",
      path: "user-manage",
      icon: 'user',
      meta: {
        name: "用户管理",
        isMenus: true,
        userType: [3, 5]
      },
      component: () => import("@/pages/manage/user-manage/index.vue")
    },
    {
      name: "project-register",
      path: "project-register",
      icon: 'register',
      meta: {
        name: "项目注册",
        isMenus: true,
        userType: [1]
      },
      component: () => import("@/pages/manage/project-register/index.vue")
    },
    {
      name: "statistics-analysis",
      path: "statistics-analysis",
      icon: 'analysis',
      meta: {
        name: "统计分析",
        isMenus: true,
        userType: [5]
      },
      component: () => import("@/pages/manage/statistics-analysis/index.vue")
    },
    {
      name: "reduce-manange",
      path: "reduce-manange",
      redirect: "reduce-manange/reduce-view",
      meta: {
        name: "减排量管理",
        isMenus: true,
        userType: [5]
      },
      component: () => import("@/pages/manage/reduce-manange/index.vue"),
      children: [{
          meta: {
            name: "减排量管理"
          },
          name: "reduce-view",
          path: "reduce-view",
          component: () =>
            import("@/pages/manage/reduce-manange/reduce-view.vue")
        },
        {
          name: "reduce-detail",
          path: ":id",
          component: () =>
            import("@/pages/manage/project-detail/list-detail.vue")
        }
      ]
    },
    {
      name: "issue-manage",
      path: "issue-manage",
      icon: 'issue',
      meta: {
        name: "已签发减排量",
        isMenus: true,
        userType: [1]
      },
      component: () => import("@/pages/manage/issue-manage/index.vue")
    },
    {
      name: "user-manage",
      path: "user-manage",
      meta: {
        name: "关于我们"
      },
      component: () => import("@/pages/manage/user-manage/index.vue")
    },
    {
      name: "detail",
      path: "detail",
      meta: {
        name: "详情"
      },
      component: () => import("@/pages/manage/project-list/index.vue")
    }
  ]
};