module.exports=(a,b=+[...(a+'')].reverse().join(''),c=a-b,s=c>=0?1:-1)=>s*[...(c*s+'')].reduce((a,n)=>+a+ +n);