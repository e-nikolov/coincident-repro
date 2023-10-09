print("main.py")

# pyright: reportMissingImports=false
from polyscript import xworker


def py_func():
    print("py_func")

    return True


xworker.sync.py_func = py_func

xworker.sync.js_on_worker_ready()

xworker.sync.js_func()


for i in range(100000):
    xworker.sync.js_func()
