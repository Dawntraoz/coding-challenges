module.exports=o=>[...''+(o-=[...''+o].reverse().join``)].reduce((O,o)=>+o+(O|0))*(o<0?-1:1)