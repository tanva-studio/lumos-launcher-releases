(()=>{'use strict';const $=id=>document.getElementById(id),api=window.lumos;let state=null,refreshing=false;const titles={home:'หน้าแรก',files:'ไฟล์เกม',activity:'บันทึกการทำงาน',settings:'การตั้งค่า'};
const nav=document.querySelector('.navigation nav');
const tabs=[...nav.querySelectorAll('.nav-item')];
const pageNames=Object.keys(titles);
function alignTab(){
 const tab=nav.querySelector('[aria-current="page"]');
 if(!tab)return;
 const box=tab.getBoundingClientRect();
 if(!box.width)return;
 nav.style.setProperty('--tab-x',(box.left-nav.getBoundingClientRect().left)+'px');
 nav.style.setProperty('--tab-width',String(box.width));
 nav.classList.add('has-indicator');
}
if(window.ResizeObserver){
 const observer=new ResizeObserver(alignTab);
 observer.observe(nav);tabs.forEach(tab=>observer.observe(tab));
}
window.addEventListener('resize',alignTab);
document.fonts?.ready.then(alignTab);
function page(id){
 if(!titles[id])return;
 const previous=document.body.dataset.page;
 document.body.dataset.page=id;
 document.body.dataset.direction=pageNames.indexOf(previous)>pageNames.indexOf(id)?'back':'forward';
 for(const name of pageNames)$('page-'+name).hidden=name!==id;
 for(const tab of tabs){
  const active=tab.dataset.page===id;
  tab.classList.toggle('active',active);
  if(active)tab.setAttribute('aria-current','page');else tab.removeAttribute('aria-current');
 }
 if(previous!==id)document.querySelector('main').scrollTop=0;
 $('page-title').textContent=titles[id];$('notice').hidden=true;alignTab();if(id==='settings')showCurrentSection();
}
function moveToSection(section){
 if(!section)return;
 section.focus({preventScroll:true});
 const reduced=window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
 section.scrollIntoView?.({block:'start',behavior:reduced?'instant':'smooth'});
}
document.querySelectorAll('.nav-item[data-page]').forEach(b=>b.addEventListener('click',()=>page(b.dataset.page)));document.querySelector('.brand').addEventListener('click',e=>{e.preventDefault();page('home');});
const settingsLinks=[...document.querySelectorAll('.settings-index a')];
const mainPane=document.querySelector('main');
let settingsFrame;
function showCurrentSection(){
 settingsFrame=0;
 if(document.body.dataset.page!=='settings')return;
 const top=mainPane.getBoundingClientRect().top+32;
 let current=settingsLinks[0];
 for(const link of settingsLinks){
  if($(link.hash.slice(1)).getBoundingClientRect().top<=top)current=link;
 }
 if(mainPane.scrollTop>0&&mainPane.scrollTop+mainPane.clientHeight>=mainPane.scrollHeight-2)current=settingsLinks.at(-1);
 for(const link of settingsLinks){
  if(link===current)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');
 }
}
mainPane.addEventListener('scroll',()=>{
 if(!settingsFrame&&document.body.dataset.page==='settings')settingsFrame=requestAnimationFrame(showCurrentSection);
},{passive:true});
document.querySelector('.settings-index').addEventListener('click',event=>{
 const link=event.target.closest('a');
 if(!link)return;
 event.preventDefault();
 const section=document.getElementById(link.hash.slice(1));
 moveToSection(section);
});
function notice(message){$('notice-text').textContent=message;$('notice').hidden=false;}
async function action(fn){try{const result=await fn();if(!result.ok){notice(result.error);return false;}$('notice').hidden=true;return true;}catch{notice('ติดต่อ Launcher ไม่ได้ กรุณาปิดแล้วเปิดโปรแกรมใหม่');return false;}}
function render(s){state=s;$('launcher-version').textContent=s.version||'';document.body.dataset.session=s.monitoring||s.runtimeUpdating?'active':'idle';renderServices(s);document.getElementById('settings-server-address').textContent=s.serverAddress;document.getElementById('workspace-subtitle').textContent=s.mode==='localhost'?'Lumos Project SRP · ในเครื่อง':'Lumos Project SRP';document.getElementById('connection-hint').textContent=s.launcherAdmissionRequired?'เข้าเกมแต่ละครั้งต้องเริ่มจาก Launcher':s.passwordConfigured===false?'เชื่อมต่อโดยไม่ใช้รหัสผ่าน':'รหัสผ่านถูกส่งให้อัตโนมัติเมื่อเชื่อมต่อ';const locked=s.busy||s.monitoring||s.updates?.busy;const online=s.server.online;const version=s.runtimeVersion||'ไม่พบไฟล์';$('runtime-version').textContent=version;$('files-version').textContent=version;$('server-address').textContent=s.serverAddress;$('server-status').textContent=!s.server.checked?'กำลังตรวจเซิร์ฟเวอร์':online?'เซิร์ฟเวอร์ออนไลน์':'ติดต่อเซิร์ฟเวอร์ไม่ได้';$('status-light').className='status-light '+(s.server.checked?(online?'online':'offline'):'');$('server-latency').textContent=online?s.server.latency+' ms':'ยังไม่เชื่อมต่อ';
for(const e of document.querySelectorAll('.game-path'))e.textContent=s.gameRoot||'ยังไม่ได้เลือกโฟลเดอร์เกม';$('home-path').textContent=s.gameRoot||'ผู้เล่นต้องมี Hogwarts Legacy ติดตั้งไว้แล้ว';$('readiness').textContent=s.gameRunning?'เกมกำลังทำงาน':s.monitoring||s.runtimeUpdating?(s.launchProgress?.label||'กำลังเปิดเกม'):s.verifiedAt?'ตรวจไฟล์แล้ว พร้อมเริ่มต้น':s.gameRoot?'พบโฟลเดอร์เกม พร้อมตรวจไฟล์':'เลือกโฟลเดอร์เกมเพื่อเริ่มต้น';$('play-label').textContent=s.gameRunning?'กำลังเล่น':s.monitoring?'กำลังเปิดเกม':s.busy?'กำลังเตรียม':s.gameRoot?'เข้าเกม':'เลือกโฟลเดอร์เกม';
const hasFolder=Boolean(s.gameRoot);document.querySelector('.launch-info .choose-game').hidden=!hasFolder;$('play-icon').setAttribute('href',hasFolder?'#i-play':'#i-files');$('readiness-icon').setAttribute('href',s.verifiedAt?'#i-check':'#i-files');$('home-path').title=s.gameRoot||'';$('play').disabled=locked;for(const b of document.querySelectorAll('.choose-game'))b.disabled=locked;$('verify').disabled=locked||!s.gameRoot;
$('verified-time').textContent=s.verifiedAt?'ตรวจไฟล์ล่าสุด '+new Date(s.verifiedAt).toLocaleString(window.lumosI18n?.locale()||'en-GB'):'ยังไม่ได้ตรวจไฟล์ในครั้งนี้';$('work-dot').className='work-dot '+(locked?'busy':'');const last=s.logs.at(-1);$('work-status').textContent=s.progress?.label||s.launchProgress?.label||last?.message||'พร้อมเริ่มต้น';$('work-progress').hidden=!s.progress;$('work-count').textContent=s.progress?s.progress.done+' / '+s.progress.total:'';if(s.progress)$('work-progress').value=s.progress.total?Math.round(s.progress.done/s.progress.total*100):0;
if(window.lumosFeatures)window.lumosFeatures.render(s);else {const log=$('activity-log');log.replaceChildren();if(!s.logs.length){const li=document.createElement('li');li.className='empty-log';li.textContent='ยังไม่มีรายการในครั้งนี้';log.append(li);}else for(const item of [...s.logs].reverse()){const li=document.createElement('li'),time=document.createElement('time'),message=document.createElement('span');time.dateTime=item.time;time.textContent=new Date(item.time).toLocaleTimeString(window.lumosI18n?.locale()||'en-GB',{hour:'2-digit',minute:'2-digit',second:'2-digit'});message.textContent=item.message;li.append(time,message);log.append(li);}}}

function renderServices(s){
 const l=s.launchProgress;
 const showGameProgress=!!(l&&!s.runtimeUpdating&&!s.gameRunning);
 document.querySelector('.portal-progress').hidden=!showGameProgress;
 $('portal-phase').textContent=showGameProgress?l.label:'';
 if(showGameProgress&&Number.isFinite(l.percent))$('portal-bar').value=l.percent;
 else $('portal-bar').removeAttribute('value');
 $('session-actions').hidden=!s.monitoring;for(const id of ['stop-game','restart-game'])$(id).disabled=!!(s.busy||s.updates?.busy||l?.phase==='installing');$('play').hidden=!!(s.monitoring||s.runtimeUpdating);for(const button of document.querySelectorAll('.runtime-update'))button.disabled=!!(s.busy||s.monitoring||s.updates?.busy);$('quit-launcher').textContent=s.monitoring?'ออกจากเกมและ Lumos':'ออกจาก Lumos';
 $('server-players').textContent=s.server?.online&&Number.isSafeInteger(s.server.players)?s.server.players+(Number.isSafeInteger(s.server.maxPlayers)?' / '+s.server.maxPlayers:''):'—';
 $('launch-percent').textContent=Number.isFinite(l?.percent)?l.percent+'%':'';$('launch-detail').textContent=l?.detail||'';$('show-runtime-updater').hidden=!l?.nativeWindowHidden;
$('launch-loading').hidden=!l;$('launch-phase').textContent=l?.label||'';if(Number.isFinite(l?.percent))$('launch-bar').value=l.percent;else $('launch-bar').removeAttribute('value');
 const mic=$('microphone-device');if(!mic.disabled){const selected=s.voice?.selectedDevice||'';if(selected&&![...mic.options].some(o=>o.value===selected))mic.add(new Option('อุปกรณ์ที่บันทึกไว้ — กดโหลดรายชื่อ',selected));mic.value=selected;}
 const versions=[s.updates?.availableVersion&&'Lumos Launcher '+s.updates.availableVersion,s.runtimeUpdateVersion&&'ArcaneMP '+s.runtimeUpdateVersion].filter(Boolean);
 $('new-release').hidden=versions.length===0;
 const releaseLabel=versions.join(' · ');
 if($('new-release-versions').textContent!==releaseLabel)$('new-release-versions').textContent=releaseLabel;
 const runtimeCheck=s.runtimeCheck;
 const thai=window.lumosI18n?.language==='th';
 const runtimeLabel=runtimeCheck?.phase==='checking'?(s.launchProgress?.label||(thai?'กำลังตรวจอัปเดต':'Checking for updates…')):runtimeCheck?.phase==='error'?runtimeCheck.message:runtimeCheck?.phase==='done'?(thai?'ตรวจแล้ว':'Checked'):'';
 $('runtime-check-status').textContent=['ArcaneMP',s.runtimeVersion,runtimeLabel].filter(Boolean).join(' · ');
 const u=s.updates;$('update-status').textContent=u?.message||'ยังไม่พร้อมตรวจอัปเดต';$('update-channel').textContent='ช่องทางอัปเดต: '+(u?.channel==='preview'?'Preview':'Stable');
 $('update-now').disabled=!u||!!(s.busy||s.monitoring||s.runtimeUpdating||u.busy);
 $('update-notes').textContent=u?.notes||'';const progress=$('update-progress');progress.hidden=u?.phase!=='downloading';if(u?.total)progress.value=Math.min(100,100*u.done/u.total);else progress.removeAttribute('value');
 $('voice-status').textContent=s.voice?.bridgeError?'ช่องรับเสียงไม่พร้อม กรุณาปิด Launcher อื่นแล้วเปิดใหม่':'ประมวลผลเสียงผ่านเซิร์ฟเวอร์ SRP';
 $('discord-status').textContent=s.discord?.message||'ยังไม่ได้ตั้งค่า Discord';
}

$('microphone-refresh').addEventListener('click',async()=>{const button=$('microphone-refresh');button.disabled=true;$('microphone-message').textContent='กำลังขอสิทธิ์และโหลดไมโครโฟน…';try{const r=await api.voiceDevices();if(!r.ok)throw Error(r.error);const select=$('microphone-device');select.replaceChildren(new Option('ค่าเริ่มต้นของ Windows',''));for(const d of r.data.devices)if(d.id!=='default')select.add(new Option(d.label,d.id));select.value=r.data.selected;if(select.selectedIndex<0&&r.data.selected){select.add(new Option('อุปกรณ์เดิมไม่พร้อม กรุณาเลือกใหม่',r.data.selected));select.value=r.data.selected;}$('microphone-message').textContent='เลือกรายการเพื่อบันทึก ใช้กับการพูดครั้งถัดไป';}catch(e){$('microphone-message').textContent=e.message||'โหลดไมโครโฟนไม่สำเร็จ กรุณาลองใหม่';}finally{button.disabled=false;}});
$('microphone-device').addEventListener('change',async()=>{const select=$('microphone-device');select.disabled=true;try{const r=await api.voiceSelect(select.value);if(!r.ok)throw Error(r.error);$('microphone-message').textContent='บันทึกไมโครโฟนแล้ว ใช้กับการพูดครั้งถัดไป';}catch(e){$('microphone-message').textContent=e.message||'บันทึกไม่ได้ กรุณาลองใหม่';}finally{select.disabled=false;}});
$('new-release-open').addEventListener('click',()=>{
 page('settings');moveToSection($('settings-updates'));$('update-now').focus({preventScroll:true});
});
$('update-now').addEventListener('click',async()=>{const button=$('update-now');button.disabled=true;try{await action(api.updateNow);}finally{if(state)renderServices(state);}});

const agreement = $('entry-agreement');
const consent = $('accept-agreement');
const agreementKey = 'lumos-player-agreement-v1';
consent.checked = localStorage.getItem(agreementKey) === 'accepted';
agreement.open = !consent.checked;
consent.addEventListener('change', () => {
 if (consent.checked) localStorage.setItem(agreementKey, 'accepted');
 else localStorage.removeItem(agreementKey);
});
function launchWithAgreement(start) {
 if (consent.checked) return action(start);
 agreement.open = true;
 consent.focus();
}
for(const b of document.querySelectorAll('.choose-game'))b.addEventListener('click',()=>action(api.chooseGame));$('verify').addEventListener('click',()=>action(api.verify));$('play').addEventListener('click',async()=>{if(!state?.gameRoot){await action(api.chooseGame);return;}await launchWithAgreement(api.play);});$('refresh').addEventListener('click',async()=>{if(refreshing)return;refreshing=true;$('refresh').disabled=true;try{await action(api.refresh);}finally{refreshing=false;$('refresh').disabled=false;}});
for(const button of document.querySelectorAll('.runtime-update'))button.addEventListener('click',()=>{page('settings');moveToSection($('settings-updates'));$('update-now').click();});
$('stop-game').addEventListener('click',()=>action(api.stopGame));$('restart-game').addEventListener('click',()=>launchWithAgreement(api.restartGame));$('show-runtime-updater').addEventListener('click',()=>action(api.showRuntimeUpdater));$('quit-launcher').addEventListener('click',()=>action(api.quit));window.addEventListener('lumos-language-change',()=>{if(state)render(state);});document.body.dataset.page='home';
for(const name of ['minimize','maximize','close'])$(name).addEventListener('click',()=>action(api[name]));$('dismiss-notice').addEventListener('click',()=>{$('notice').hidden=true;});api.onState(render);api.state().then(r=>{if(r.ok){if(!state)render(r.data);}else notice(r.error);}).catch(()=>notice('เริ่ม Launcher ไม่สำเร็จ กรุณาเปิดใหม่'));
})();
