import{P as _,__tla as __tla_0}from"./core-88f0cf62.js";Promise.all([(()=>{try{return __tla_0}catch{}})()]).then(async()=>{console.log("main-debug.ts");let o=_("worker-debug.py",{async:!1,config:{}}),r=0;o.sync.js_func=()=>{r++,r%1e3==0&&console.log(`js_func: ${r}`)};o.sync.js_on_worker_ready=()=>{console.log("js_on_worker_ready"),document.dispatchEvent(new CustomEvent("worker_ready",{detail:{}}))};document.addEventListener("worker_ready",e=>{console.log("worker_ready event received"),t(3e3)});function t(e=3e3){a(o.sync.py_func()).then(n=>{n==!0?console.log("The worker is alive."):console.error("The worker is not responding.")}),setTimeout(t,e)}function a(e,n=3e3,s=void 0){return new Promise((c,l)=>{let i=setTimeout(()=>{c(s)},n);e.then(u=>{clearTimeout(i),c(u)}).catch(l)})}window.call_py_func=()=>{console.log("call_py_func: 1");let e=o.sync.py_func();return console.log("call_py_func: 2"),e}});