module.exports=(n,f=(i=>i*i>n||n%i&&f(i+1)))=>n<2||!f(2)?(n+15)**.5|0:n*n-17