# customer-center

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

> tab页实现基本原理
参照 components/index/index.vue

# 使用vuex保存所有打开的tab页 => navTabs
1、每个tab对应4个属性 exist，closeable，route，name
exist：该tab是否已经存在，用于之后针对一些特定页面做判断是否需要刷新数据（如详情页
closeable：该tab是否可以关闭
route：该tab页对应的路由
name：tab的title

# 使用vuex保存当前所选择的tab页 => activeTab
其存储的实际上是该tab页的路由地址

# 在最外层的组件中监听路由变化
1、当路由发生变化时，判断路由去往的路由地址是否已经存在与navTabs中；
2、如果已经存在则直接将该tab激活，并修改该tab页的exist属性为false，以便在该页面组件中进行判断；
3、如果不存在则向navTabs中添加该tab，并设置该tab为激活状态

p.s 在打开详情页面时由于使用了动态路由，所以其路由地址都不相同可以直接生成新tab页,
但是由于其路由引用的是同一组件所以会导致所有详情页面共享同一状态及数据。
为了解决该问题，使用vuex存储了每个详情页的数据，之后根据tab的exist状态及vuex中是否有该页面的数据而选择加载。
详细实现参照 FinancingCompanyDetail.vue
