f=e=>e.value||require('ramda')[e.operator](f(e.left),f(e.right)),module.exports=f