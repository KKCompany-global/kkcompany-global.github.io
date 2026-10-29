(function(){
  var body=document.body, btn=document.getElementById('langBtn');
  function set(lang){
    body.className='lang-'+lang;
    document.documentElement.lang=lang;
    btn.textContent = lang==='ja' ? 'English' : '日本語';
    try{localStorage.setItem('kk-lang',lang)}catch(e){}
  }
  var saved=null; try{saved=localStorage.getItem('kk-lang')}catch(e){}
  set(saved || ((navigator.language||'ja').toLowerCase().indexOf('ja')===0 ? 'ja' : 'en'));
  btn.addEventListener('click',function(){ set(body.className==='lang-ja'?'en':'ja') });
  document.getElementById('year').textContent=new Date().getFullYear();
})();
(function(){
  var b=document.body;
  function t(){ var v=b.getAttribute('data-title-'+(b.className==='lang-en'?'en':'ja')); if(v) document.title=v; }
  t(); new MutationObserver(t).observe(b,{attributes:true,attributeFilter:['class']});
})();
