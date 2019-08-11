import CuiHello from './cui-hello'

const components = [
    CuiHello
  ]

const install = function(vue) {
    /* istanbul ignore if */
    if (install.installed) return;
    /*eslint-disable*/
    components.map((component) => {
      vue.component(component.name, component); //component.name 此处使用到组件vue文件中的 name 属性
    });
  };
  /* istanbul ignore if */
  if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  };
  
  export default {
    install,
    CuiHello
  }