
console.log("main-debug.ts")

import { PyWorker, hooks } from '@pyscript/core'

// let worker = PyWorker("worker-debug.py", { async: true, config: {} });
let worker = PyWorker("worker-debug.py", { async: false, config: {} });

let js_func_calls = 0;
worker.sync.js_func = () => {
    js_func_calls++
    if (js_func_calls % 1000 == 0) {
        console.log(`js_func: ${js_func_calls}`);
    }
}

worker.sync.js_on_worker_ready = () => {
    console.log("js_on_worker_ready");
    document.dispatchEvent(new CustomEvent("worker_ready", { detail: {} }));
}

document.addEventListener("worker_ready", (e) => {
    console.log("worker_ready event received");
    pingWorker(3000);
})

// periodically ping the worker to check if it is alive
function pingWorker(timeout: number = 3000) {
    withTimeout(worker.sync.py_func()).then(
        res => {
            if (res == true) {
                console.log("The worker is alive.");
            } else {
                console.error("The worker is not responding.");
            }
        }
    )

    setTimeout(pingWorker, timeout)
}

/*  HELPER FUNCTIONS */

/**

withTimeout: returns a promise that resolves to:
- the given promise's resolved value if it resolves within the given timeout
- the rejectValue otherwise
*/
export function withTimeout<T>(promise: Promise<T>, timeout: number = 3000, rejectValue: T | undefined = undefined): Promise<T | undefined> {
    return new Promise((resolve, reject) => {
        let t = setTimeout(() => {
            resolve(rejectValue)
        }, timeout);

        promise.then((r) => {
            clearTimeout(t);
            resolve(r);
        }).catch(reject);
    });
}

window.call_py_func = () => {
    console.log("call_py_func: 1");
    let promise = worker.sync.py_func();
    console.log("call_py_func: 2");
    return promise;
};

// https://github.com/pyodide/pyodide/issues/4006
// callSoon: calls the given callback as soon as possible
// setTimeout() has a minimum wait time of 4ms, which is too long for some use cases
export function callSoon(callback: () => void, delay: number = 0) {
    if (delay == undefined || isNaN(delay) || delay < 0) {
        delay = 0;
    }
    if (delay < 1) {
        let channel = new MessageChannel()
        channel.port1.onmessage = () => { callback() };
        channel.port2.postMessage('');
    } else {
        setTimeout(callback, delay);
    }
}

declare global {
    interface Worker {
        sync: any
    }

    interface Window {
        call_py_func: () => Promise<boolean>
    }
}
