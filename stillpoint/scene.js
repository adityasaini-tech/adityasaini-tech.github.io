/* Original, resolution-independent artwork and motion for Stillpoint. */
(() => {
const art=document.getElementById('sceneArt'),world=document.getElementById('world');
art.querySelector('svg').outerHTML=`<svg class="office-scene" viewBox="0 0 960 640" role="img" aria-label="An animated twilight office: Aarav works at a softly lit desk, while thoughts float around him and a soul glows at his forehead.">
<defs>
 <linearGradient id="room" x2=".8" y2="1"><stop stop-color="#242a4b"/><stop offset=".55" stop-color="#333453"/><stop offset="1" stop-color="#555065"/></linearGradient>
 <linearGradient id="sky" x2="0" y2="1"><stop stop-color="#414c7e"/><stop offset=".5" stop-color="#9b83ab"/><stop offset="1" stop-color="#f1b49f"/></linearGradient>
 <linearGradient id="floor" x2=".7" y2="1"><stop stop-color="#4b4662"/><stop offset="1" stop-color="#252c43"/></linearGradient>
 <linearGradient id="wood" x2="1" y2=".4"><stop stop-color="#b78e80"/><stop offset=".5" stop-color="#d5ad96"/><stop offset="1" stop-color="#997a7e"/></linearGradient>
 <linearGradient id="sweater" x2="1" y2="1"><stop stop-color="#9dabc4"/><stop offset=".45" stop-color="#6a809f"/><stop offset="1" stop-color="#465877"/></linearGradient>
 <linearGradient id="skin" x2="1" y2=".4"><stop stop-color="#ca927f"/><stop offset=".6" stop-color="#efbc9c"/><stop offset="1" stop-color="#ffd5b0"/></linearGradient>
 <linearGradient id="hair" x2="1" y2="1"><stop stop-color="#302d40"/><stop offset="1" stop-color="#54404a"/></linearGradient>
 <linearGradient id="screen" x2="0" y2="1"><stop stop-color="#242f4a"/><stop offset="1" stop-color="#1c243a"/></linearGradient>
 <linearGradient id="beam" x2="1" y2="1"><stop stop-color="#ffcda0" stop-opacity=".16"/><stop offset="1" stop-color="#ffcfb5" stop-opacity="0"/></linearGradient>
 <radialGradient id="soulLight"><stop stop-color="#fffce6"/><stop offset=".12" stop-color="#fff6cb"/><stop offset=".3" stop-color="#ffdd8b" stop-opacity=".6"/><stop offset="1" stop-color="#ffc273" stop-opacity="0"/></radialGradient>
 <radialGradient id="lampLight"><stop stop-color="#ffe1ab" stop-opacity=".3"/><stop offset="1" stop-color="#ffda9b" stop-opacity="0"/></radialGradient>
 <linearGradient id="leaf" x2="1" y2="1"><stop stop-color="#91b7ac"/><stop offset="1" stop-color="#456c71"/></linearGradient>
 <pattern id="grain" width="6" height="6" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r=".5" fill="#fff" opacity=".08"/><circle cx="4" cy="5" r=".5" fill="#000" opacity=".1"/></pattern>
 <pattern id="cityWindows" width="18" height="26" patternUnits="userSpaceOnUse"><rect x="6" y="7" width="4" height="7" rx="1" fill="#edb7a0" opacity=".4"/></pattern>
 <filter id="softGlow"><feGaussianBlur stdDeviation="4"/></filter>
 <filter id="groundShadow"><feGaussianBlur stdDeviation="10"/></filter>
 <clipPath id="windowClip"><rect x="65" y="68" width="350" height="325" rx="5"/></clipPath>
</defs>
<rect width="960" height="640" fill="url(#room)"/>
<path d="M0 480 960 432V640H0Z" fill="url(#floor)"/><path d="m0 480 960-48" stroke="#9e8ba0" opacity=".23"/>
<g opacity=".18" stroke="#b3a1ac"><path d="m35 640 290-174m-60 174 195-182m70 182 95-196m152 196-28-204"/><path d="m0 530 960-46M0 597l960-49"/></g>
<path d="M449 0v460" stroke="#9993b4" stroke-opacity=".12"/><path d="M452 0v459" stroke="#141c35" stroke-opacity=".3"/>
<rect x="47" y="51" width="384" height="358" rx="10" fill="#1f263f"/><rect x="55" y="58" width="368" height="343" rx="7" fill="#7b718e"/>
<g clip-path="url(#windowClip)"><rect x="65" y="68" width="350" height="325" fill="url(#sky)"/>
<g class="sky-clouds" fill="#ecd0d2" opacity=".15"><path d="M90 149q25-35 45-10 40-35 61 2 35-11 40 12H90Z"/><path d="M280 202q20-29 42-12 24-28 48 1 24-5 38 17H280Z"/></g>
<circle class="sun-disc" cx="322" cy="182" r="37" fill="#ffdac0"/><circle cx="322" cy="182" r="50" fill="#ffdabd" opacity=".08"/>
<path d="M60 362v-97h44v-27h47v125h19V249h35v-54h51v167h18V265h62v-45h37v141h50v56H60Z" fill="#555673"/>
<path d="M60 362v-97h44v-27h47v125h19V249h35v-54h51v167h18V265h62v-45h37v141h50v56H60Z" fill="url(#cityWindows)"/>
<path d="M65 391v-45h36v-37h65v82h29v-74h41v-36h40v110h22v-48h67v-30h60v78Z" fill="#393e5e"/><path d="M65 391v-45h36v-37h65v82h29v-74h41v-36h40v110h22v-48h67v-30h60v78Z" fill="url(#cityWindows)" opacity=".6"/>
<path d="M92 75v311" stroke="#fff" stroke-width="2" opacity=".06"/><path d="m65 70 198-2L65 266Zm350 19v80L205 393h-78Z" fill="#fff" opacity=".035"/>
</g>
<path d="M241 64v333M60 246h360" stroke="#363952" stroke-width="9"/><path d="M241 64v333M60 246h360" stroke="#a7a1b4" stroke-width="1" opacity=".35"/>
<path d="M43 401h392v13H43Z" fill="#71677e"/><path d="M43 414h392v7H43Z" fill="#252c45"/>
<path d="m66 393 350-2 480 216H139Z" fill="url(#beam)"/>
<rect x="727" y="90" width="112" height="137" rx="5" fill="#171f36" opacity=".6"/><rect x="733" y="95" width="100" height="125" rx="2" fill="#a996a5"/><rect x="740" y="102" width="86" height="111" fill="#d9c7bc"/><circle cx="784" cy="135" r="20" fill="#edc39c"/><path d="m744 198 27-48 30 47m-22 1 28-39 16 39" fill="#888a9a"/><path d="M744 201h78" stroke="#b2a1a3"/>
<g class="clock"><circle cx="589" cy="131" r="28" fill="#232b44" stroke="#7e7b96" stroke-width="2"/><circle cx="589" cy="131" r="24" fill="#42445f"/><path d="M589 111v4m20 16h-4m-16 20v-4m-20-16h4" stroke="#c9bdc8"/><path d="M589 131v-14m0 14 12 6" stroke="#d3c9d1" stroke-width="2" stroke-linecap="round"/><circle cx="589" cy="131" r="2" fill="#e5c5ad"/></g>
<path d="M744 285h151v8H744Z" fill="#68617a"/><path d="M751 293v13m136-13v13" stroke="#262b43" stroke-width="4"/><g transform="translate(761 255)"><path d="M0 0h11v29H0Z" fill="#9f8c9d"/><path d="M12-7h9v36h-9Z" fill="#b9a99d"/><path d="m24 0 10-3 8 28-10 3Z" fill="#7f9a9a"/></g><path d="M854 264h22l-3 20h-16Z" fill="#bfa595"/><path d="M865 264v-23m0 9q-20 0-14-12 17 0 14 12m0-2q1-19 13-17 6 15-13 17" fill="#7ea094" stroke="#7ea094"/>
<ellipse cx="544" cy="579" rx="205" ry="26" fill="#141d32" opacity=".5" filter="url(#groundShadow)"/>
<g class="chair"><path d="M478 485v69m-58 23 58-23 59 23m-59-23-19 36" stroke="#242d44" stroke-width="10" stroke-linecap="round"/><circle cx="420" cy="578" r="7" fill="#1b253a"/><circle cx="537" cy="578" r="7" fill="#1b253a"/><circle cx="458" cy="589" r="7" fill="#1b253a"/><path d="M404 348q-5-32 20-36h83q26 0 26 31l-5 129q-1 24-25 24h-72q-24-2-24-27Z" fill="#242e47"/><path d="M415 345q0-20 17-21h65q20 0 19 24l-4 119q0 15-17 16h-61q-17 0-16-18Z" fill="#3f4b66"/><path d="m426 335 5 135" stroke="#748197" opacity=".25" stroke-width="3"/></g>
<path d="M484 457q54-6 69 22l30 61-25 14-41-61-62 4Z" fill="#303c55"/><path d="M557 544q16 2 24-7l23 19q9 12-6 16l-43-2Z" fill="#1d283d"/><path d="M461 474q9 46 46 69l27-18-34-51" fill="#394760"/><path d="m508 540 23-15 26 26q8 10-8 16l-35 5-12-10Z" fill="#202b40"/>
<g id="person" class="person-new">
 <g class="body-breathe"><path d="M436 374q-1-62 39-79l45 7q33 12 41 70l-9 92q-51 19-112-1Z" fill="url(#sweater)"/><path d="M445 374v77m10-81-3 82" stroke="#c5d0df" opacity=".09" stroke-width="2"/><path d="m466 304 17 23q19 7 34-11l6-10" fill="none" stroke="#3e5472" stroke-width="7"/>
 <path d="M480 280v26q20 24 37 3l-3-33Z" fill="url(#skin)"/><path d="M481 280v12q19 14 33-2l-1-12Z" fill="#b47c71" opacity=".55"/>
 <g class="head"><path d="M472 228q-1-35 31-37 36 0 41 35l-1 23 10 13-10 5q-2 29-22 31-29 2-42-31Z" fill="url(#skin)"/><path d="M476 258q-14-5-14-24-10-8-4-24-3-22 19-29 15-13 29-3 27-8 39 15 14 8 6 26l-16 5-6-17q-16 17-46 12l-3 29Z" fill="url(#hair)"/><path d="M466 211q23-31 57-18" fill="none" stroke="#6c5059" stroke-width="3" opacity=".6"/><ellipse cx="478" cy="255" rx="8" ry="12" fill="#db9f87"/><path d="M476 250q9-4 6 8" fill="none" stroke="#b6786e" stroke-width="2"/>
 <path class="brow" d="m523 238 11 3" stroke="#79545a" stroke-width="3" stroke-linecap="round"/>
 <g class="eye"><ellipse cx="531" cy="249" rx="3" ry="3.6" fill="#4a3c48"/><circle cx="532" cy="248" r=".8" fill="#fbe4c5"/></g><path class="mouth" d="m528 279 9-2" fill="none" stroke="#a46864" stroke-width="2" stroke-linecap="round"/><path d="m535 254 1 12h5" stroke="#c18a76" stroke-width="1.5" fill="none"/>
 </g>
 <g class="typing-arm"><path d="M459 331q-20 4-21 29l7 47 60 24 9-22-45-26 3-34" fill="#8498b4"/><path d="m449 397 14-10" stroke="#506986" stroke-width="3"/><path d="m506 408 28 2q9 2 14 11l-5 8-33-1Z" fill="url(#skin)"/><path d="m530 417 15 4m-18 0 14 5" stroke="#bd8a79" stroke-width="1.2"/></g>
 <g class="typing-arm arm-two"><path d="M530 330q17 4 22 28l13 37 40 6-4 23-55-11-24-51" fill="#617b9d"/><path d="m602 401 25-1 21 12-3 12-44-1Z" fill="url(#skin)"/><path d="m622 407 20 6m-24-1 22 6" stroke="#b98377" stroke-width="1.2"/></g>
 </g>
</g>
<g class="desk"><path d="m313 425 403-28 105 52-414 36Z" fill="url(#wood)"/><path d="m407 485 414-36v14l-414 38Z" fill="#8b6d71"/><path d="m313 425 94 60v16l-94-62Z" fill="#866d72"/><path d="m342 449-9 149 14 1 16-137m419 1 8 124 13-1-1-125M438 499l-4 106 12 1 15-109" fill="#292e44"/><path d="m352 472 71 10" stroke="#d8b7a2" opacity=".2"/>
<path d="m573 425 113-9 35 12-116 11Z" fill="#343d56"/><path d="m582 427 104-8 24 8-103 9Z" fill="#66708a"/><g stroke="#9fa9b9" opacity=".5" stroke-width="1"><path d="m591 427 92-6m-81 10 92-7m-90-1 12 7m3-8 12 7m3-8 12 7m3-8 12 7m3-8 12 7"/></g>
<path d="m643 407 22-2 2-43-21 1Z" fill="#58617b"/><path d="m621 409 65-5 13 5-65 6Z" fill="#4b5570"/>
<path d="m604 279 145-11q9-1 8 9l-8 93q-1 7-8 8l-142 11q-9 0-8-8l6-92q1-9 7-10Z" fill="#18233b"/><path d="m605 286 143-11-7 94-143 11Z" fill="url(#screen)"/><path d="m606 287 139-10" stroke="#a3b1d2" opacity=".25"/>
<g transform="matrix(1,-.075,-.075,1,615,301)"><circle cx="0" cy="0" r="2" fill="#d1a1b1"/><circle cx="7" cy="0" r="2" fill="#d6bd9d"/><circle cx="14" cy="0" r="2" fill="#8fb4ac"/><rect x="0" y="11" width="110" height="2" rx="1" fill="#53647e"/><text x="0" y="26" fill="#b9c6d9" font-size="7" font-family="sans-serif" letter-spacing="1">A LITTLE PROGRESS</text><rect x="0" y="34" width="41" height="23" rx="2" fill="#3f4967"/><path d="m5 51 10-7 8 3 13-10" stroke="#b7a6cd" stroke-width="2" fill="none"/><rect x="49" y="35" width="50" height="3" rx="1" fill="#6c7893"/><rect x="49" y="43" width="35" height="3" rx="1" fill="#4d5b77"/><rect class="screen-progress" x="49" y="51" width="23" height="4" rx="2" fill="#94bdb2"/></g>
<ellipse cx="745" cy="431" rx="12" ry="7" transform="rotate(-10 745 431)" fill="#b4a7ad"/>
<path d="m391 443 47-4 31 12-49 5Z" fill="#d2c9c5"/><path d="m402 445 30-3m-19 6 29-3" stroke="#9a8d9e" stroke-width="1"/>
<ellipse cx="371" cy="429" rx="22" ry="8" fill="#c8ac9e"/><path d="M355 401h28l-2 24q-11 10-24 0Z" fill="#d6c3b7"/><ellipse cx="369" cy="401" rx="14" ry="5" fill="#b8a091"/><ellipse cx="369" cy="401" rx="10" ry="3" fill="#5c4142"/><path d="M383 407q20-1 0 13" stroke="#c3b0a6" stroke-width="5" fill="none"/>
<g class="coffee-steam" fill="none" stroke="#e8d5ca" stroke-width="2" opacity=".35"><path d="M364 389q-8-10 0-18t0-16"/><path d="M374 392q-8-9 0-15t0-12"/></g>
</g>
<g class="desk-lamp"><ellipse cx="799" cy="407" rx="26" ry="8" fill="#222c43"/><path d="M797 401v-61l-35-53" fill="none" stroke="#8d9ba9" stroke-width="6" stroke-linecap="round"/><circle cx="797" cy="340" r="5" fill="#bbc1c6"/><path d="m746 269 25-10 23 25-45 18Z" fill="#b1aaa8"/><path d="m747 298 48-17" stroke="#f8dcb0" stroke-width="4"/><ellipse cx="741" cy="362" rx="92" ry="86" fill="url(#lampLight)"/></g>
<g class="floor-plant"><path d="M868 518V378" fill="none" stroke="#607f80" stroke-width="5"/><g class="plant-leaves" fill="url(#leaf)"><path d="M868 432q-69-10-54-66 48 7 54 66Z"/><path d="M868 459q68-10 50-67-47 12-50 67Z"/><path d="M868 403q-28-48 5-76 35 44-5 76Z"/><path d="M866 490q-65-5-58-48 45-8 58 48Z"/><path d="M870 491q6-62 47-49 8 37-47 49Z"/></g><ellipse cx="869" cy="517" rx="39" ry="11" fill="#b59c95"/><path d="M831 516h76l-12 70q-28 13-52 0Z" fill="#8f7e81"/><path d="M841 525h4l7 55h-4Z" fill="#c2a39a" opacity=".3"/><ellipse cx="869" cy="518" rx="30" ry="6" fill="#55505a"/></g>
<g class="soul-beacon"><circle cx="538" cy="235" r="57" fill="url(#soulLight)"/><circle cx="538" cy="235" r="4" fill="#fffde6"/><circle class="beacon-ring" cx="538" cy="235" r="12" fill="none" stroke="#ffe3aa" stroke-width=".8"/><path d="M538 221v28m-14-14h28" stroke="#fff5d2" stroke-width=".6" opacity=".7"/></g>
<rect width="960" height="640" fill="url(#grain)" pointer-events="none"/>
</svg>`;
const inner=art.querySelector('.inner-universe');
inner.innerHTML=`<div class="nebula nebula-one"></div><div class="nebula nebula-two"></div><div class="light-column"></div><div class="sacred-orbit orbit-a"></div><div class="sacred-orbit orbit-b"></div><div class="sacred-orbit orbit-c"></div><div class="soul-system"><div class="soul-halo halo-outer"></div><div class="soul-halo halo-inner"></div><div class="soul-core"></div><div class="soul-cross"></div></div><div class="inner-copy"><span class="inner-kicker">THE SPACE WITHIN</span><span class="inner-caption">I am the one who chooses.</span><span class="inner-whisper">Still. Aware. Free to respond.</span></div>`;
const canvas=document.createElement('canvas');canvas.className='atmosphere';canvas.setAttribute('aria-hidden','true');art.append(canvas);
const ctx=canvas.getContext('2d');
let width=0,height=0,particles=[],bursts=[],frame=0,previous=0,phase='welcome',inward=false,calm=false,hidden=document.hidden;
const reduce=matchMedia('(prefers-reduced-motion: reduce)');
const rand=(a,b)=>a+Math.random()*(b-a);
function resize(){const r=art.getBoundingClientRect();width=r.width;height=r.height;const dpr=Math.min(devicePixelRatio||1,2);canvas.width=width*dpr;canvas.height=height*dpr;ctx?.setTransform(dpr,0,0,dpr,0,0);particles=Array.from({length:width<500?38:70},()=>({x:Math.random()*width,y:Math.random()*height,r:rand(.5,1.5),speed:rand(.04,.22),alpha:rand(.15,.6),offset:rand(0,6.3)}));draw(0);}
function draw(time){if(!ctx)return;ctx.clearRect(0,0,width,height);const t=time*.001;for(const p of particles){const a=p.alpha*(.65+.35*Math.sin(t+p.offset));ctx.fillStyle=inward?`rgba(244,219,191,${a})`:`rgba(255,223,193,${a*.45})`;ctx.beginPath();ctx.arc(p.x+Math.sin(t*.3+p.offset)*4,p.y,p.r,0,Math.PI*2);ctx.fill();if(!reduce.matches){p.y-=p.speed*(inward?1.8:1);if(p.y<0)p.y=height;}}
 for(const b of bursts){const life=1-b.age/b.life;ctx.fillStyle=`rgba(${b.colour},${life*.9})`;ctx.beginPath();ctx.arc(b.x,b.y,b.r*life,0,Math.PI*2);ctx.fill();b.x+=b.vx;b.y+=b.vy;b.vx*=.985;b.vy*=.985;b.age++;}bursts=bursts.filter(b=>b.age<b.life);
}
function animate(t){frame=0;if(hidden||reduce.matches)return;if(t-previous>30){draw(t);previous=t;}frame=requestAnimationFrame(animate);}
function start(){if(!frame&&!hidden&&!reduce.matches)frame=requestAnimationFrame(animate);else if(reduce.matches)draw(0);}
function burst(){if(reduce.matches||!ctx)return;const x=width*.5,y=height*.43;for(let i=0;i<46;i++){const a=Math.random()*Math.PI*2,s=rand(.5,2.2);bursts.push({x,y,vx:Math.cos(a)*s,vy:Math.sin(a)*s,r:rand(1,3),age:0,life:rand(45,85),colour:i%2?'255,221,154':'193,217,202'});}art.classList.remove('choice-bloom');void art.offsetWidth;art.classList.add('choice-bloom');}
function setStep(step,state){phase=step;inward=['pause','observe','steer'].includes(step);calm=['outcome','summary'].includes(step);world.dataset.phase=step;world.dataset.scene=state.scene;world.classList.toggle('resolved',calm);if(['welcome','moment'].includes(step)){bursts=[];art.classList.remove('choice-bloom');}const cue=document.getElementById('visualCue');if(cue)cue.textContent=inward?'INNER WORLD':calm?'A NEW DIRECTION':'OUTER WORLD';if(step==='outcome')burst();const copy=inner.querySelector('.inner-caption');copy.textContent=step==='pause'?'I am more than this moment.':step==='observe'?'A thought is something I can observe.':'I am the one who chooses.';}
const top=document.createElement('div');top.className='scene-mode';top.innerHTML='<span class="mode-dot"></span><span id="visualCue">OUTER WORLD</span><span class="mode-line"></span><span>✦</span>';art.append(top);
art.addEventListener('pointermove',e=>{if(reduce.matches||e.pointerType==='touch')return;const r=art.getBoundingClientRect();art.style.setProperty('--look-x',((e.clientX-r.left)/r.width-.5)*8+'px');art.style.setProperty('--look-y',((e.clientY-r.top)/r.height-.5)*5+'px');});art.addEventListener('pointerleave',()=>{art.style.setProperty('--look-x','0px');art.style.setProperty('--look-y','0px');});
new ResizeObserver(resize).observe(art);document.addEventListener('visibilitychange',()=>{hidden=document.hidden;if(hidden){cancelAnimationFrame(frame);frame=0;}else start();});reduce.addEventListener('change',()=>{cancelAnimationFrame(frame);frame=0;start()});
window.SceneFX={setStep,burst};resize();start();
})();
