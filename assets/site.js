// UNITED COMPANY GROUP — shared behaviour (index / 下層ページ共通)
(function(){
  // header solid on scroll
  var hd=document.getElementById('hd');
  if(hd){
    var onScroll=function(){hd.classList.toggle('solid',window.scrollY>60);};
    window.addEventListener('scroll',onScroll);onScroll();
  }
  // mobile nav
  var burger=document.getElementById('burger'),mnav=document.getElementById('mnav'),mclose=document.getElementById('mclose');
  if(burger&&mnav){
    burger.onclick=function(){mnav.classList.add('open');};
    if(mclose)mclose.onclick=function(){mnav.classList.remove('open');};
    mnav.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){mnav.classList.remove('open');});});
  }
  // hero slideshow (only when slides exist)
  var slides=[].slice.call(document.querySelectorAll('.slide'));
  var dots=[].slice.call(document.querySelectorAll('#dots i'));
  if(slides.length>1){
    var ci=0;
    var go=function(n){
      slides[ci].classList.remove('on'); if(dots[ci])dots[ci].classList.remove('on');
      ci=(n+slides.length)%slides.length;
      slides[ci].classList.add('on'); if(dots[ci])dots[ci].classList.add('on');
    };
    dots.forEach(function(d,i){d.onclick=function(){go(i);};});
    setInterval(function(){go(ci+1);},5000);
  }
  // scroll reveal
  var io=new IntersectionObserver(function(es){
    es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});
  },{threshold:.15});
  document.querySelectorAll('.rv').forEach(function(el){io.observe(el);});
})();
