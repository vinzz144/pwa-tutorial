if('serviceWorker' in navigator){
    console.log('can');
    navigator.serviceWorker.register('/js/sw.js')
    .then((reg)=>console.log('registered', reg))
    .catch((err)=> console.log('rejected', err));
}
else{
    console.log('cannot');
}