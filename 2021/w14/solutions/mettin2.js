module.exports=i=r=>r.type=='Literal'?r.value:eval(i(r.left)+({add:'+',subtract:'-',divide:'/'}[r.operator]||'*')+' '+i(r.right))