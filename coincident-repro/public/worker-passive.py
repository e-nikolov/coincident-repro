print("worker-passive.py")

# pyright: reportMissingImports=false
from polyscript import xworker


def py_func():
    return True


xworker.sync.py_func = py_func
