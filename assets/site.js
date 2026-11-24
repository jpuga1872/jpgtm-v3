(function(){
var btn=document.querySelector('.menu-btn'),nav=document.getElementById('navlinks');
if(btn&&nav){btn.addEventListener('click',function(){var o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o?'true':'false');});}
if(!('IntersectionObserver' in window)) return;
if(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
var els=document.querySelectorAll('.rv,.rvg'); if(!els.length) return;
document.documentElement.classList.add('js-rv');
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:0.08,rootMargin:'0px 0px -6% 0px'});
els.forEach(function(el){io.observe(el);});
function sweep(){els.forEach(function(el){if(!el.classList.contains('in')&&el.getBoundingClientRect().top<window.innerHeight*0.94){el.classList.add('in');}});}
window.addEventListener('scroll',sweep,{passive:true});window.addEventListener('resize',sweep);
setTimeout(sweep,600);setTimeout(sweep,2000);
})();
