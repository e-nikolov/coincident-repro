
console.log("main-passive.ts")

import { PyWorker, hooks } from '@pyscript/core'

let worker = PyWorker("worker-passive.py", { async: false, config: {} });

let js_func_calls = 0;
worker.sync.js_func = () => {
    js_func_calls++
    if (js_func_calls % 1000 == 0) {
        console.log(`js_func: ${js_func_calls}`);
    }
}

window.call_py_func = () => {
    console.log("call_py_func: 1");
    let promise = worker.sync.py_func();
    console.log("call_py_func: 2");
    return promise;
};

declare global {
    interface Worker {
        sync: any
    }

    interface Window {
        call_py_func: () => Promise<boolean>
    }
}
