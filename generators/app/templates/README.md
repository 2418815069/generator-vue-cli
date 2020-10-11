# <%= name %>
<%= name %>
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

## 登录测试帐号: xmcy 密码: 111111
  - 权限的说明，分5类权限，项目参与方、审定机构-管理、审定机构-业务、注册机构-- 管理、注册机构-业务
  - 后端映射关系为:
  - roleId 1  type 0  -> 项目参与 userType->1
  - roleId 5  type 2 -> 审定机构业务 userType->2
  - roleId 4  type 2 -> 审定机构管理 userType->3
  - roleId 3  type 1 -> 注册机构业务 userType->4
  - roleId 2  type 1 -> 注册机构管理 userType->5
## 系统角色  
  xmcy
zcjggl
zcjgyw
sdjggl
sdjgyw，密码均为111111
### 规范说明
1、不能去掉eslit检查
2、定义颜色和颜色相关的都需要引入src/css/color.styl文件下定义的颜色（为后续支持主题）
3、用flex布局，不要重复css，优先石油下global.styl定义的全局class

### 演示帐号说明
admin1代表项目参与方、 admin2审定机构、 admin3注册处 admin代表所有权限用户，用于开发用
