import { defineConfig } from 'umi';

export default defineConfig({
  title: 'Hello CNode',
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index/index' },
    { path: '/login', component: '@/pages/login/login' },
  ],
  // dynamicImport: {
  //   loading: '@/components/Loading'
  // },
});
