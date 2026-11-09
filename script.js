const chapters = [
  {icon:'🌷',title:'A little hello',hint:'A warm beginning',text:'Hey, Kishmish! Today is all about celebrating you. I hope this tiny corner of the internet brings a smile to your face and reminds you how appreciated you are.'},
  {icon:'✨',title:'A rare kind of person',hint:'One of a kind',text:'Some people have a way of making conversations feel easy and moments feel brighter. You have that lovely quality. Never underestimate the good energy you bring into the lives around you.'},
  {icon:'💌',title:'A little thank you',hint:'For being you',text:'Thank you for being kind, genuine, and wonderfully yourself. The little things—your words, your time, and the simple moments—can mean more than you probably realise.'},
  {icon:'🦋',title:'Tiny moments',hint:'Big memories',text:'Not every special memory has to be a grand event. Sometimes it is just a conversation, a random laugh, or a moment that stays with us. Those little moments matter, and I treasure them.'},
  {icon:'🌸',title:'Your kind of magic',hint:'The lovely things',text:'I hope you never feel that you need to be anyone other than yourself. Your kindness, your individuality, and the way you see the world are worth celebrating.'},
  {icon:'☁️',title:'Wishes for you',hint:'A softer year ahead',text:'May the year ahead bring calm mornings, exciting opportunities, supportive people, new places to discover, and countless reasons to feel proud of yourself.'},
  {icon:'🎀',title:'A promise from this page',hint:'Keep this close',text:'Whenever you come across this little birthday page again, I hope it reminds you that you are appreciated. You deserve friendship that feels honest, safe, and full of encouragement.'},
  {icon:'🎂',title:'The birthday wish',hint:'The happiest chapter',text:'Happy Birthday, Pyari Kishmish! May your smile stay bright, your heart feel light, and your days be filled with the people and things that make you happy. Have the loveliest year.'}
];
const grid=document.getElementById('chapterGrid');
chapters.forEach((c,i)=>{const card=document.createElement('button');card.className='chapter-card';card.innerHTML=`<div class="chapter-num">CHAPTER ${String(i+1).padStart(2,'0')}</div><div class="chapter-icon">${c.icon}</div><div class="chapter-title">${c.title}</div><div class="chapter-hint">${c.hint}</div>`;card.addEventListener('click',()=>openChapter(i));grid.appendChild(card)});
let current=0;
const modal=document.getElementById('chapterModal');
function openChapter(i){current=i;const c=chapters[i];document.getElementById('modalNumber').textContent=`CHAPTER ${String(i+1).padStart(2,'0')}`;document.getElementById('modalEmoji').textContent=c.icon;document.getElementById('modalTitle').textContent=c.title;document.getElementById('modalText').textContent=c.text;document.getElementById('modalCount').textContent=`${String(i+1).padStart(2,'0')} / 08`;document.getElementById('nextChapter').textContent=i===7?'Back to the beginning ↺':'Next chapter →';modal.classList.add('open');modal.setAttribute('aria-hidden','false')}
function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true')}
document.getElementById('beginBtn').addEventListener('click',()=>document.getElementById('intro').scrollIntoView({behavior:'smooth'}));
document.getElementById('modalClose').addEventListener('click',closeModal);document.getElementById('modalBackdrop').addEventListener('click',closeModal);
document.getElementById('nextChapter').addEventListener('click',()=>{if(current===7){closeModal();document.getElementById('finale').scrollIntoView({behavior:'smooth'})}else openChapter(current+1)});
document.getElementById('replayBtn').addEventListener('click',()=>{document.getElementById('home').scrollIntoView({behavior:'smooth'});closeModal()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
// Gentle falling petals: decorative only, no audio or external assets required.
function petal(){const p=document.createElement('div');p.className='petal';p.textContent=['✿','❀','♡'][Math.floor(Math.random()*3)];p.style.left=Math.random()*100+'vw';p.style.fontSize=(10+Math.random()*13)+'px';p.style.animationDuration=(8+Math.random()*8)+'s';document.body.appendChild(p);setTimeout(()=>p.remove(),17000)}setInterval(petal,950);
// User-controlled birthday soundtrack. Browsers require a tap before audio can play.
const birthdaySong=document.getElementById('birthdaySong');
const soundBtn=document.getElementById('soundBtn');
const soundLabel=soundBtn.querySelector('span');
soundBtn.addEventListener('click',async()=>{
  if(birthdaySong.paused){
    try{await birthdaySong.play();soundLabel.textContent='pause Alfaaz';soundBtn.setAttribute('aria-label','Pause Alfaaz');}
    catch(error){soundLabel.textContent='tap to play';}
  }else{birthdaySong.pause();soundLabel.textContent='play Alfaaz';soundBtn.setAttribute('aria-label','Play Alfaaz');}
});
birthdaySong.addEventListener('ended',()=>{soundLabel.textContent='play Alfaaz';soundBtn.setAttribute('aria-label','Play Alfaaz');});
