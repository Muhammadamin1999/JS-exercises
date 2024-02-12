const get_URL_Parameters = url => 
(url.match(/([^?=&]+)(=([^&]*))/g)|| []).reduce(
    (a,v) => ((a[v.slice(0,v.indexOf('='))] = v.slice(v.indexOf('=') + 1)),a), {}
);

console.log(get_URL_Parameters('https://url.com/page?names=Adam'))