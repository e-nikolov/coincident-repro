print("worker-demo.py")

# pyright: reportMissingImports=false
from polyscript import xworker


def py_func():
    return True


for i in range(100000):
    xworker.sync.js_func()
