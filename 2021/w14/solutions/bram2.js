module.exports=(i,p=a=>a.type=='Literal'?a.value:{subtract:p(a.left)-p(a.right),add:p(a.left)+p(a.right),multiply:p(a.left)*p(a.right),divide:p(a.left)/p(a.right)}[a.operator])=>p(i);