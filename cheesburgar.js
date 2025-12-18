let pos = 0;

function slide(dir){
  const lang = document.documentElement.lang;
  const sliderId = lang === "ar" ? "slider-ar" : "slider-en";
  const slider = document.getElementById(sliderId);

  pos += dir * 236;

  const max = -(slider.scrollWidth - slider.parentElement.clientWidth);
  if(pos > 0) pos = max;
  if(pos < max) pos = 0;

  slider.style.transform = `translateX(${pos}px)`;