<template>
  <div id="app-container">
    <Sidebar @selectMenu="selectMenu"></Sidebar>
    <router-view id="router-container" />
  </div>
</template>

<script setup>
import Sidebar from "./layout/sidebar.vue";
import microApp, { getActiveApps } from "@micro-zoe/micro-app";
import { useRouter } from "vue-router";
const router = useRouter();
const selectMenu = (appName, path, hash) => {
  /**
   * 当子应用还未渲染，通过基座控制路由跳转，子应用在初始化时会自己根据url渲染对应的页面
   * 当子应用已经渲染，则直接控制子应用进行内部跳转
   *
   * getActiveApps: 用于获取正在运行的子应用
   */
  console.warn("appName", !getActiveApps().includes(appName), appName);
  if (!getActiveApps().includes(appName)) {
    // child-vite 和 child-react17子应用为hash路由，这里拼接一下hash值
    hash && (path += `/#${hash}`);
    // 主应用跳转
    console.info("path", path, appName);
    router.push(path);
  } else {
    let childPath = null;
    // child-vite 和 child-react17子应用是hash路由，hash值就是它的页面地址，这里单独处理
    if (hash) {
      childPath = hash;
    } else {
      // path的值形式如：/app-vue2/page2，这里/app-vue2是子应用的基础路由，/page2才是页面地址，所以我们需要将/app-vue2部分删除
      // 这里需要约定一个前缀。如下面正则的app-
      childPath = path.replace(/^\/app-[^/]+/, "");
      !childPath && (childPath = "/"); // 防止地址为空
    }
    console.info("appName", appName, childPath);
    // 主应用通过下发data数据控制子应用跳转
    microApp.setData(appName, { path: childPath });
  }
};
</script>
<style>
#app-container {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
}
#router-container {
  flex: 1;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
