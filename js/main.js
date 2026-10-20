(function(){
  var btns=document.querySelectorAll(".tabs button"),items=document.querySelectorAll("#list li");
  btns.forEach(function(b){b.addEventListener("click",function(){
    btns.forEach(function(x){x.setAttribute("aria-pressed",x===b)});
    items.forEach(function(li){li.hidden=b.dataset.f!=="all"&&li.dataset.t!==b.dataset.f});
  })});
  document.getElementById("f").addEventListener("submit",function(e){
    e.preventDefault(); /* TODO: send to email or backend here */ document.getElementById("ok").style.display="block";this.reset();
  });
})();
