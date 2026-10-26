const toggle=document.querySelector('#menuToggle'),nav=document.querySelector('#mainNav');
toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'×':'☰';});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.textContent='☰';}));
document.querySelector('#year').textContent=new Date().getFullYear();
document.querySelectorAll('.choose').forEach(b=>b.addEventListener('click',()=>{document.querySelector('#service').value=b.dataset.service;document.querySelector('#solicitud').scrollIntoView({behavior:'smooth'});}));
const form=document.querySelector('#requestForm'),result=document.querySelector('#formResult'),out=document.querySelector('#requestOutput'),status=document.querySelector('#copyStatus');
form.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form);out.value=['✦ SOLICITUD PARA NEXUS DEV ✦','Nombre/usuario: '+d.get('name').trim(),'Servicio: '+d.get('service'),'Plataforma: '+(d.get('platform').trim()||'No especificada'),'','MI IDEA:',d.get('details').trim()].join('\n');result.hidden=false;result.scrollIntoView({behavior:'smooth',block:'nearest'});});
document.querySelector('#copyRequest').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(out.value);status.textContent='¡Copiado! Ya puedes pegarlo en Discord.';}catch{out.focus();out.select();status.textContent='Selecciona el texto y cópialo manualmente.';}});
