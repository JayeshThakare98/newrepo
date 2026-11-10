(() => {
  const cfg = window.WEDDING_CONFIG;
  const copy = {
    en: {
      brand:"Jayesh & Yojana", navInvite:"Invitation", navFamily:"Families", navContacts:"Contacts", navEvents:"Celebrations",
      invocation:"॥ Shree Ganeshaya Namah ॥", blessing:"With the blessings of our families", openPrompt:"A joyful celebration awaits", openButton:"Open the invitation", skip:"Skip to invitation",
      inviteEyebrow:"A royal Indo-Marathi celebration", inviteTitle:"Together with our families", marathiInvite:"A warm invitation", inviteCopy:"With joy in our hearts, we invite you to join us as Jayesh and Yojana begin a new chapter together.", dateLabel:"Date", timeLabel:"Muhurat", countdownTitle:"Counting down to our wedding", countDaysLabel:"Days", countHoursLabel:"Hours", countMinutesLabel:"Minutes", countSecondsLabel:"Seconds", countdownComplete:"The wedding celebration is here!", calendar:"Add to calendar", share:"Share on WhatsApp", patrika:"Download Patrika", editNote:"Event details are as provided. Mehendi and wedding durations are estimated for the calendar.",
      familyEyebrow:"Two families, one celebration", familyTitle:"Our Families", groomFamily:"Jayesh Family", brideFamily:"Yojana's family", contactEyebrow:"We are happy to help", contactTitle:"Contact Our Hosts", contactAction:"MESSAGE ON WHATSAPP ↗", eventsEyebrow:"Auspicious moments", eventsTitle:"Wedding Celebrations", eventsNote:"Event details are as provided. Mehendi and wedding durations are estimated for the calendar download.", closingEyebrow:"Your presence is our blessing", closingTitle:"We look forward to celebrating with you", closingNames:"Jayesh & Yojana, with our families", closingBlessing:"Mahadev Prasanna", footer:"Made with love for our wedding celebration", unknownEvent:"Ceremony details to be confirmed", calendarMissing:"Add the confirmed wedding date and time in js/config.js before creating a calendar event.",
      shareText:"You are warmly invited to celebrate the wedding of Jayesh and Yojana. We look forward to sharing this special day with you!", musicOn:"Pause wedding music", musicOff:"Play wedding music", opened:"Invitation opened"
    },
    mr: {
      brand:"जयेश आणि योजना", navInvite:"निमंत्रण", navFamily:"परिवार", navContacts:"संपर्क", navEvents:"सोहळे",
      invocation:"॥ श्री गणेशाय नमः ॥", blessing:"आमच्या कुटुंबीयांच्या आशीर्वादाने", openPrompt:"आनंदाचा मंगल सोहळा आपली वाट पाहत आहे", openButton:"निमंत्रण उघडा", skip:"निमंत्रणाकडे जा",
      inviteEyebrow:"राजेशाही मराठी विवाह सोहळा", inviteTitle:"आमच्या परिवारांसह", marathiInvite:"सस्नेह निमंत्रण", inviteCopy:"जयेश आणि योजना यांच्या नव्या जीवनप्रवासाच्या मंगल सोहळ्यास आपण उपस्थित राहून शुभाशीर्वाद द्यावेत, ही प्रेमळ विनंती.", dateLabel:"तारीख", timeLabel:"मुहूर्त", countdownTitle:"विवाह सोहळ्याची उलटगणती", countDaysLabel:"दिवस", countHoursLabel:"तास", countMinutesLabel:"मिनिटे", countSecondsLabel:"सेकंद", countdownComplete:"विवाह सोहळा आज आहे!", calendar:"दिनदर्शिकेत जोडा", share:"व्हॉट्सॲपवर निमंत्रण पाठवा", patrika:"पत्रिका डाउनलोड करा", editNote:"कार्यक्रमांचे तपशील दिल्याप्रमाणे आहेत. दिनदर्शिकेसाठी मेहंदी आणि विवाहाचा कालावधी अंदाजे ठेवला आहे.",
      familyEyebrow:"दोन परिवार, एक मंगल सोहळा", familyTitle:"आमचे परिवार", groomFamily:"जयेशचे कुटुंब", brideFamily:"योजना यांचा परिवार", contactEyebrow:"आम्ही मदतीसाठी उपलब्ध आहोत", contactTitle:"आमच्या यजमानांशी संपर्क साधा", contactAction:"व्हॉट्सॲपवर संदेश पाठवा ↗", eventsEyebrow:"मंगल क्षण", eventsTitle:"विवाह सोहळे", eventsNote:"कार्यक्रमांचे तपशील दिल्याप्रमाणे आहेत. दिनदर्शिकेसाठी मेहंदी आणि विवाहाचा कालावधी अंदाजे ठेवला आहे.", closingEyebrow:"आपली उपस्थिती हाच आशीर्वाद", closingTitle:"आपल्यासोबत आनंद साजरा करण्यास उत्सुक", closingNames:"जयेश आणि योजना, परिवारासह", closingBlessing:"महादेव प्रसन्न", footer:"आमच्या विवाह सोहळ्यासाठी प्रेमाने बनवले", unknownEvent:"कार्यक्रमाचा तपशील निश्चित करायचा आहे", calendarMissing:"दिनदर्शिकेतील कार्यक्रम तयार करण्यासाठी js/config.js मध्ये विवाहाची निश्चित तारीख आणि वेळ भरा.",
      shareText:"जयेश आणि योजना यांच्या विवाह सोहळ्यास आपण सस्नेह आमंत्रित आहात. या मंगल क्षणी आपणासोबत आनंद साजरा करण्यास आम्ही उत्सुक आहोत.", musicOn:"विवाह संगीत थांबवा", musicOff:"विवाह संगीत सुरू करा", opened:"निमंत्रण उघडले"
    }
  };
  let lang = "en", opened = false, musicPlaying = false;
  const $ = (s) => document.querySelector(s);
  const weddingMusic = $("#weddingMusic");
  weddingMusic.volume = 0.55;
  const t = (key) => copy[lang][key] || copy.en[key] || key;
  function setLanguage(next) {
    lang = next; document.documentElement.lang = next === "mr" ? "mr" : "en";
    document.querySelectorAll("[data-i18n]").forEach(el => { const key=el.dataset.i18n; if(copy[lang][key]) el.textContent=copy[lang][key]; });
    $("#languageToggle").textContent = next === "en" ? "मराठी" : "English";
    renderEvents(); renderWeddingDate(); renderCountdown(); setMusicButton();
  }
  function renderWeddingDate() {
    if (!cfg.weddingDate || !cfg.muhurat) return;
    const date = new Date(`${cfg.weddingDate}T00:00:00+05:30`);
    const dateText = new Intl.DateTimeFormat(lang === "mr" ? "mr-IN" : "en-IN", {day:"numeric",month:"long",year:"numeric",timeZone:cfg.timezone}).format(date);
    const timeDate = new Date(`2000-01-01T${cfg.muhurat}:00+05:30`);
    const timeText = formatTime(cfg.muhurat);
    $("#weddingDateText").textContent = dateText;
    $("#muhuratText").textContent = timeText;
    $("#letterDate").textContent = `${lang === "mr" ? "विवाहाची तारीख" : "Wedding date"} · ${dateText}`;
    $("#groomName").textContent = lang === "mr" ? cfg.couple.groomMr : cfg.couple.groom;
    $("#brideName").textContent = lang === "mr" ? cfg.couple.brideMr : cfg.couple.bride;
    $("#groomNameInvite").textContent = lang === "mr" ? cfg.couple.groomMr : cfg.couple.groom;
    $("#brideNameInvite").textContent = lang === "mr" ? cfg.couple.brideMr : cfg.couple.bride;
    $("#footerCouple").textContent = lang === "mr" ? `${cfg.couple.groomMr} आणि ${cfg.couple.brideMr}` : `${cfg.couple.groom} & ${cfg.couple.bride}`;
    document.title = lang === "mr" ? "जयेश आणि योजना — विवाह निमंत्रण" : "Jayesh & Yojana | Wedding Invitation";
    renderFamilies(); renderContacts();
  }
  function renderCountdown() {
    if (!cfg.weddingDate || !cfg.muhurat) return;
    const target = new Date(`${cfg.weddingDate}T${cfg.muhurat}:00+05:30`).getTime();
    let remaining = Math.max(0, target - Date.now());
    const day = 86400000, hour = 3600000, minute = 60000;
    const days = Math.floor(remaining / day); remaining %= day;
    const hours = Math.floor(remaining / hour); remaining %= hour;
    const minutes = Math.floor(remaining / minute); const seconds = Math.floor((remaining % minute) / 1000);
    $("#countDays").textContent = String(days).padStart(2, "0");
    $("#countHours").textContent = String(hours).padStart(2, "0");
    $("#countMinutes").textContent = String(minutes).padStart(2, "0");
    $("#countSeconds").textContent = String(seconds).padStart(2, "0");
    $("#countdownTitle").textContent = target <= Date.now() ? t("countdownComplete") : t("countdownTitle");
  }
  function formatDate(dateValue) {
    const date=new Date(`${dateValue}T00:00:00+05:30`);
    return new Intl.DateTimeFormat(lang === "mr" ? "mr-IN" : "en-IN", {weekday:"long",day:"numeric",month:"long",year:"numeric",timeZone:cfg.timezone}).format(date);
  }
  function formatTime(timeValue) {
    if(!timeValue) return "";
    const date=new Date(`2000-01-01T${timeValue}:00+05:30`);
    if(lang === "mr") return new Intl.DateTimeFormat("mr-IN", {hour:"2-digit",minute:"2-digit",hour12:false,timeZone:cfg.timezone}).format(date);
    let text=new Intl.DateTimeFormat("en-IN", {hour:"numeric",minute:"2-digit",hour12:true,timeZone:cfg.timezone}).format(date);
    if(lang === "en") text=text.replace(/\b(am|pm)\b/i,marker=>marker.toUpperCase());
    return text;
  }
  function renderFamilies() {
    const f=cfg.families;
    $("#groomParents").textContent=lang === "mr" ? f.groomDescriptionMr : f.groomDescription;
    $("#brideParents").textContent=lang === "mr" ? f.brideDescriptionMr : f.brideDescription;
  }
  function renderContacts() {
    const box=$("#contactList"); box.replaceChildren();
    cfg.contacts.forEach(contact=>{
      const a=document.createElement("a"); a.className="contact-card"; a.href=`https://wa.me/${contact.phone.replace(/\D/g,"")}`; a.target="_blank"; a.rel="noopener";
      const name=document.createElement("strong"); name.textContent=lang === "mr" ? contact.nameMr : contact.name;
      const phone=document.createElement("span"); phone.textContent=contact.phone.replace(/(\+\d{2})(\d{5})(\d{5})/,"$1 $2 $3");
      const action=document.createElement("small"); action.textContent=t("contactAction"); a.append(name,phone,action); box.append(a);
    });
  }
  function renderEvents() {
    const box = $("#eventList"); box.replaceChildren();
    cfg.events.forEach((event, i) => {
      const card = document.createElement("article"); card.className="event-card";
      const num=document.createElement("span"); num.className="event-number"; num.textContent=String(i+1).padStart(2,"0");
      const info=document.createElement("div");
      const title=document.createElement("h3"); title.textContent=event[lang] || t("unknownEvent");
      const detail=document.createElement("p");
      const times=event.endTime ? `${formatTime(event.time)} - ${formatTime(event.endTime)}` : `${formatTime(event.time)}${event.timeNote ? ` ${lang === "mr" ? event.timeNoteMr : event.timeNote}` : ""}`;
      detail.textContent=`${formatDate(event.date)} · ${times}`;
      const venue=document.createElement("p"); venue.className="event-venue"; venue.textContent=lang === "mr" ? event.venueMr : event.venue;
      info.append(title,detail,venue); card.append(num,info); box.append(card);
    });
  }
  function openInvitation() {
    if(opened) return; opened=true; $("#envelopeScene").classList.add("opened"); $("#openButton").disabled=true;
    launchPetals(50); setTimeout(()=>$("#invitation").scrollIntoView({behavior:"smooth"}),900);
  }
  function launchPetals(count=8) {
    const root=$("#petals"); const colors=["#e6a928","#d56b72","#f0c05a","#aa304b","#e58b49"];
    for(let i=0;i<count;i++) { const p=document.createElement("i"); p.className="petal"; p.style.left=Math.random()*100+"vw"; p.style.background=colors[Math.floor(Math.random()*colors.length)]; p.style.animationDuration=(5+Math.random()*7)+"s"; p.style.animationDelay=(Math.random()*1.8)+"s"; p.style.setProperty("--drift",(Math.random()*140-70)+"px"); root.append(p); setTimeout(()=>p.remove(),15000); }
  }
  function buildCalendar() {
    const stamp=d=>d.toISOString().replace(/[-:]/g,"").replace(/\.\d{3}/,"");
    const esc=s=>String(s||"").replace(/\\/g,"\\\\").replace(/,/g,"\\,").replace(/;/g,"\\;").replace(/\n/g,"\\n");
    const events=cfg.events.filter(event=>event.date&&event.time);
    if(!events.length) { alert(t("calendarMissing")); return; }
    const lines=["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//Royal Indo-Marathi Invitation//EN","CALSCALE:GREGORIAN","METHOD:PUBLISH"];
    events.forEach((event,index)=>{
      const start=new Date(`${event.date}T${event.time}:00+05:30`);
      const end=event.endTime ? new Date(`${event.date}T${event.endTime}:00+05:30`) : new Date(start.getTime()+(event.durationMinutes||120)*60000);
      lines.push("BEGIN:VEVENT",`UID:${event.id||index}-${cfg.weddingDate}@royal-indo-marathi`, `DTSTAMP:${stamp(new Date())}`,`DTSTART:${stamp(start)}`,`DTEND:${stamp(end)}`,`SUMMARY:${esc(event[lang])}`,`LOCATION:${esc(event.venue)}`,`DESCRIPTION:${esc(event.venue)}`,"END:VEVENT");
    });
    lines.push("END:VCALENDAR");
    const blob=new Blob([lines.join("\r\n")],{type:"text/calendar;charset=utf-8"}); const a=document.createElement("a"); a.href=URL.createObjectURL(blob); a.download="jayesh-yojana-wedding.ics"; a.click(); setTimeout(()=>URL.revokeObjectURL(a.href),1000);
  }
  function setMusicButton() {
    const btn=$("#musicToggle"); btn.textContent=musicPlaying?"Ⅱ":"♫"; btn.setAttribute("aria-label",musicPlaying?t("musicOn"):t("musicOff"));
  }
  async function startMusic() {
    try { await weddingMusic.play(); musicPlaying=true; }
    catch { musicPlaying=false; }
    setMusicButton();
  }
  function toggleMusic() {
    if(musicPlaying) { weddingMusic.pause(); musicPlaying=false; setMusicButton(); }
    else startMusic();
  }
  weddingMusic.addEventListener("play",()=>{ musicPlaying=true; setMusicButton(); });
  weddingMusic.addEventListener("pause",()=>{ musicPlaying=false; setMusicButton(); });
  $("#languageToggle").addEventListener("click",()=>setLanguage(lang === "en" ? "mr" : "en"));
  $("#openInvitation").addEventListener("click",openInvitation); $("#openButton").addEventListener("click",openInvitation);
  $("#calendarButton").addEventListener("click",buildCalendar); $("#musicToggle").addEventListener("click",toggleMusic);
  $("#shareButton").addEventListener("click",()=>{
    const share=`${t("shareText")} ${location.href}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(share)}`,"_blank","noopener");
  });
  // A quiet, lightweight petal drift; no controls intercept page interaction.
  if(!matchMedia("(prefers-reduced-motion: reduce)").matches) setInterval(()=>launchPetals(1),Math.max(1800,60000/(cfg.petalsPerMinute||16)));
  setLanguage("en");
  renderCountdown(); setInterval(renderCountdown, 1000);
  // Try the supplied wedding song; browsers may block autoplay until a guest interacts.
  startMusic();
})();
