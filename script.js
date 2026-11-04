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
(function(){
  var h=document.querySelector('header'), nav=h&&h.querySelector('.nav'), links=nav&&nav.querySelector('.nav-links');
  if(!links) return;
  var btn=document.createElement('button');
  btn.type='button'; btn.className='menu-btn'; btn.setAttribute('aria-expanded','false'); btn.setAttribute('aria-controls','mnav');
  btn.innerHTML='<span></span><span></span><span></span>';
  var m=document.createElement('nav'); m.className='mnav'; m.id='mnav'; m.hidden=true; m.setAttribute('aria-label','Menu');
  var as=links.querySelectorAll('a'); for(var i=0;i<as.length;i++) m.appendChild(as[i].cloneNode(true));
  nav.appendChild(btn); h.appendChild(m);
  function label(){ btn.setAttribute('aria-label', document.body.className==='lang-en' ? 'Menu' : 'メニュー'); }
  function set(o){ m.hidden=!o; btn.setAttribute('aria-expanded',String(o)); if(o) h.classList.add('menu-open'); else h.classList.remove('menu-open'); }
  btn.addEventListener('click',function(){ set(m.hidden); });
  m.addEventListener('click',function(e){ if(e.target.closest('a')) set(false); });
  document.addEventListener('keydown',function(e){ if(e.key==='Escape') set(false); });
  window.addEventListener('resize',function(){ if(window.innerWidth>720) set(false); });
  label(); new MutationObserver(label).observe(document.body,{attributes:true,attributeFilter:['class']});
})();
