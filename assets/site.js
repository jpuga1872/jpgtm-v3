/* Contact form: sends through Web3Forms without leaving the page.
   Paste your access key from https://web3forms.com between the quotes below. */
var JP_FORM_KEY='YOUR_WEB3FORMS_ACCESS_KEY';
(function(){
var forms=document.querySelectorAll('form[data-form]');
Array.prototype.forEach.call(forms,function(f){
f.addEventListener('submit',function(e){
e.preventDefault();
var st=f.querySelector('.form-status'),btn=f.querySelector('button[type=submit]');
var data={};new FormData(f).forEach(function(v,k){data[k]=v;});
if(data.botcheck){return;} delete data.botcheck;
if(JP_FORM_KEY.indexOf('YOUR_')===0){
window.location.href='mailto:javierpuga@outlook.com?subject='+encodeURIComponent(data.subject||'')+'&body='+encodeURIComponent((data.message||'')+'\n\n'+(data.name||'')+'\n'+(data.company||'')+'\n'+(data.email||''));
return;}
data.access_key=JP_FORM_KEY;
btn.disabled=true;st.className='form-status';st.textContent=f.getAttribute('data-sending');
fetch('https://api.web3forms.com/submit',{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify(data)})
.then(function(r){return r.status===200;})
.then(function(ok){if(ok){f.reset();st.className='form-status ok';st.textContent=f.getAttribute('data-ok');}else{st.className='form-status err';st.textContent=f.getAttribute('data-err');}})
.catch(function(){st.className='form-status err';st.textContent=f.getAttribute('data-err');})
.then(function(){btn.disabled=false;});
});});
})();
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
