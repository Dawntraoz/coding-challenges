module.exports=v=>v.replace(/^.|[A-Z][^a-z`']+/g,x=>x.toLowerCase()).replace(/[^a-z`']+./ig,x=>x.slice(-1).toUpperCase())