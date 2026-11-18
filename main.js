(function(){
  var yr=document.getElementById('yr');if(yr)yr.textContent=new Date().getFullYear();

  var r=document.getElementById('roles');
  if(r){
    var roles=['Python Developer','Founder of Black Bell AI','Economist','Brand Builder','Minecraft Creator'],n=0;
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){r.textContent=roles.join(', ')}
    else{setInterval(function(){n=(n+1)%roles.length;r.textContent=roles[n]},2400)}
  }

  var f=document.getElementById('contact-form');
  if(f){
    f.addEventListener('submit',function(e){
      e.preventDefault();
      var name=f.elements.name.value.trim(),mail=f.elements.email.value.trim(),
          subj=f.elements.subject.value.trim()||'Message from your portfolio',msg=f.elements.message.value.trim();
      var body='Name: '+name+'\nEmail: '+mail+'\n\n'+msg;
      window.location.href='mailto:rohaanhassan911@gmail.com?subject='+encodeURIComponent(subj)+'&body='+encodeURIComponent(body);
    });
  }
})();
