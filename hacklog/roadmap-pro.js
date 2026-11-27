/* Hack Log — Stage 2 (Intermediate) and Stage 3 (Professional).
   Same day format as roadmap.js. Stage 2–3 sessions often take more than one day;
   unfinished sessions simply move forward on the calendar. */
(function(){
const PS="https://portswigger.net/web-security/";
const SOL="প্রতিটা ল্যাবের নিচে অফিশিয়াল Solution আছে। আগে নিজে চেষ্টা করো, তারপর মিলিয়ে নাও।";
const R=window.ROADMAP;
R.forEach(p=>{p.s=1;});

R.push(
/* ===================== STAGE 2 · INTERMEDIATE ===================== */
{s:2,t:"নেটওয়ার্কিং গভীরে",k:"P8",d:"পেনটেস্টার আর SOC অ্যানালিস্ট দুজনেরই নেটওয়ার্ক ভালোভাবে জানা লাগে। এখানে প্যাকেট পর্যায় থেকে নেটওয়ার্ক বুঝবে।",days:[
{t:"TCP/IP আর subnetting",g:"ঠিকানা, রেঞ্জ আর রাউটিং",h:"২-৩ দিন",why:"একটা কোম্পানির নেটওয়ার্কে কোন মেশিন কোথায় আছে আর কে কার সাথে কথা বলতে পারে, এটা বুঝতে subnet আর রাউটিং জানা লাগে। ইন্টারভিউতে এই প্রশ্ন প্রায় সবসময় আসে।",
 tasks:[["Cloudflare: What is TCP/IP","https://www.cloudflare.com/learning/ddos/glossary/tcp-ip/","TCP আর IP কোন কাজ করে, আর কেন দুটো একসাথে লাগে।"],["Professor Messer-এর ফ্রি Network+ ভিডিও সিরিজ থেকে IP addressing আর subnetting অংশ","https://www.professormesser.com/","পুরো কোর্সটা ফ্রি, CompTIA Network+ সিলেবাস ধরে সাজানো।"],["নোটে নিজে হাতে ৫টা subnet হিসাব করো (যেমন /24, /26, /28)",null,"হাতে হিসাব করতে করতেই মাথায় বসে যায়।"]],
 terms:[["Subnet","একটা বড় নেটওয়ার্ককে ছোট ছোট ভাগে ভাগ করা।"],["CIDR","/24 এর মতো লেখার পদ্ধতি, যা বলে নেটওয়ার্কে কতগুলো ঠিকানা আছে।"],["Gateway","নিজের নেটওয়ার্ক থেকে বাইরে যাওয়ার দরজা।"],["TCP / UDP","TCP নিশ্চিত করে ডেটা পৌঁছেছে, UDP দ্রুত কিন্তু নিশ্চয়তা দেয় না।"]]},
{t:"Wireshark দিয়ে প্যাকেট পড়া",g:"নেটওয়ার্কের ভিতরে আসলে কী যাচ্ছে",h:"২ দিন",why:"Wireshark দিয়ে নেটওয়ার্কের প্রতিটা প্যাকেট দেখা যায়। আক্রমণ বিশ্লেষণ, সমস্যা খোঁজা, আর এনক্রিপশন কেন জরুরি তা নিজের চোখে দেখার সবচেয়ে ভালো উপায় এটা।",
 tasks:[["Wireshark ইনস্টল করে User's Guide-এর প্রথম অধ্যায়গুলো পড়ো","https://www.wireshark.org/docs/wsug_html_chunked/","ফিল্টার কীভাবে লেখে, এটা সবচেয়ে কাজের অংশ।"],["Wireshark-এর অফিশিয়াল sample captures থেকে HTTP আর DNS ফাইল খুলে বিশ্লেষণ করো","https://wiki.wireshark.org/SampleCaptures","নিজের নেটওয়ার্কে না, এই নমুনা ফাইলগুলোতে প্র্যাকটিস করো।"],["নোটে লিখো: HTTP আর HTTPS প্যাকেটে কী কী দেখা যায় আর কী দেখা যায় না",null,"এনক্রিপশন কী রক্ষা করে, সেটা পরিষ্কার হবে।"]],
 terms:[["Packet","নেটওয়ার্কে পাঠানো ডেটার ছোট টুকরো।"],["PCAP","ধরে রাখা নেটওয়ার্ক ট্রাফিকের ফাইল।"],["Display filter","Wireshark-এ নির্দিষ্ট প্যাকেট দেখানোর শর্ত।"]]},
{t:"কমন সার্ভিস আর প্রোটোকল",g:"SSH, SMB, FTP, DNS, SMTP, RDP",h:"২ দিন",why:"পেনটেস্টে নেটওয়ার্ক স্ক্যানের পর একগাদা খোলা সার্ভিস পাওয়া যায়। কোনটা কী কাজ করে, আর সাধারণত কোথায় ভুল কনফিগারেশন থাকে, সেটা জানা লাগে।",
 tasks:[["HackTricks-এর Network Services Pentesting অংশে প্রতিটা সার্ভিসের ভূমিকা পড়ো","https://book.hacktricks.wiki/","প্রতিটা সার্ভিস কী কাজ করে আর কমন ভুলগুলো কী, শুধু সেটুকু দেখো।"],["নোটে টেবিল বানাও: সার্ভিস, পোর্ট, কী কাজ করে, কমন ভুল কনফিগারেশন",null,"এই টেবিল পেনটেস্ট আর ইন্টারভিউ দুই জায়গাতেই কাজে লাগবে।"]],
 terms:[["SMB","Windows-এ ফাইল শেয়ার করার প্রোটোকল।"],["RDP","দূর থেকে Windows ডেস্কটপ চালানোর প্রোটোকল।"],["Misconfiguration","সফটওয়্যার ঠিক আছে, কিন্তু সেটিং ভুল।"]],fix:"অপ্রয়োজনীয় সার্ভিস বন্ধ রাখা, ডিফল্ট পাসওয়ার্ড বদলানো, আর সার্ভিসগুলো শুধু দরকারি নেটওয়ার্ক থেকে অ্যাক্সেসযোগ্য রাখা।"},
{t:"Firewall, VPN আর TLS",g:"নেটওয়ার্ক কীভাবে রক্ষা করা হয়",h:"১-২ দিন",why:"ডিফেন্স কীভাবে কাজ করে না জানলে আক্রমণের ঝুঁকিও ঠিকমতো বোঝা যায় না। প্রফেশনাল রিপোর্টে প্রতিটা সমস্যার সাথে সমাধানও লিখতে হয়।",
 tasks:[["Cloudflare: What is a firewall","https://www.cloudflare.com/learning/security/what-is-a-firewall/","firewall কী আটকায় আর কী আটকাতে পারে না।"],["Cloudflare: What is TLS","https://www.cloudflare.com/learning/ssl/transport-layer-security-tls/","HTTPS-এর পেছনের এনক্রিপশন কীভাবে কাজ করে।"],["Cloudflare: What is a VPN","https://www.cloudflare.com/learning/access-management/what-is-a-vpn/","কোম্পানিগুলো দূর থেকে কাজের জন্য কীভাবে VPN ব্যবহার করে।"]],
 terms:[["Firewall","নিয়ম মেনে নেটওয়ার্ক ট্রাফিক আসতে বা যেতে দেয়, অথবা আটকায়।"],["TLS","ইন্টারনেটে ডেটা এনক্রিপ্ট করার প্রোটোকল।"],["Defense in depth","একটার উপর ভরসা না করে কয়েক স্তরের সুরক্ষা রাখা।"]]}
]},

{s:2,t:"প্রোগ্রামিং আর অটোমেশন",k:"P9",d:"প্রফেশনালরা নিজের টুল নিজে লেখে। Python আর Bash দিয়ে বারবারের কাজ অটোমেট করা শিখবে।",days:[
{t:"Python দিয়ে HTTP",g:"requests লাইব্রেরি দিয়ে ওয়েবের সাথে কথা বলা",h:"২-৩ দিন",why:"Burp যে কাজ হাতে করায়, অনেক সময় সেটা স্ক্রিপ্টে করা দ্রুত হয়। নিজের ছোট টুল লিখতে পারা ইন্টারমিডিয়েট আর বিগিনারের বড় পার্থক্য।",
 tasks:[["Automate the Boring Stuff with Python-এর প্রথম অধ্যায়গুলো (বইটা অনলাইনে ফ্রি)","https://automatetheboringstuff.com/","ফাংশন, ফাইল পড়া-লেখা আর ওয়েব থেকে ডেটা নেওয়া পর্যন্ত।"],["requests লাইব্রেরির Quickstart পড়ো","https://requests.readthedocs.io/en/latest/user/quickstart/","GET, POST, header আর cookie কোড দিয়ে পাঠানো।"],["নিজের Juice Shop-এর একটা API থেকে পণ্যের তালিকা এনে প্রিন্ট করে এমন স্ক্রিপ্ট লিখো",null,"শুধু নিজের লোকাল Juice Shop-এ।"]],
 terms:[["Library","অন্যের লেখা কোড যা নিজের প্রোগ্রামে ব্যবহার করা যায়।"],["JSON","API-তে ডেটা আদান-প্রদানের সবচেয়ে কমন ফরম্যাট।"]]},
{t:"Bash স্ক্রিপ্টিং",g:"Linux-এ কাজ জোড়া লাগানো",h:"২ দিন",why:"Recon-এর মতো কাজে একাধিক টুলকে জোড়া লাগিয়ে একটা পাইপলাইন বানাতে Bash লাগে।",
 tasks:[["GNU Bash Manual-এর Shell Syntax আর Shell Commands অংশ","https://www.gnu.org/software/bash/manual/","ভেরিয়েবল, লুপ, if আর ফাংশন।"],["একটা স্ক্রিপ্ট লিখো যেটা একটা ফাইলের প্রতিটা ডোমেইনের পাশে তার IP প্রিন্ট করে",null,"আগের দিনের DNS জ্ঞান আর লুপ একসাথে।"]],
 terms:[["Shell script","কমান্ডের একটা তালিকা, যা একবারে চলে।"],["Pipeline","এক টুলের আউটপুট আরেক টুলে দিয়ে কাজের ধারা বানানো।"]]},
{t:"Git আর নিজের টুল পাবলিশ",g:"GitHub-এ পোর্টফোলিও তৈরি শুরু",h:"১-২ দিন",why:"নিয়োগকর্তারা দেখতে চায় তুমি নিজে কী বানাতে পারো। তোমার ছোট টুল আর নোট GitHub-এ থাকলে সেটাই পোর্টফোলিও।",
 tasks:[["Pro Git বইয়ের Getting Started আর Git Basics অধ্যায় (ফ্রি)","https://git-scm.com/book/en/v2","commit, branch আর push।"],["আগের দুই দিনের স্ক্রিপ্ট একটা পাবলিক রিপোতে README সহ রাখো",null,"README-তে লিখো টুলটা কী করে আর শুধু অনুমতি পাওয়া টার্গেটে ব্যবহারের জন্য।"]],
 terms:[["Repository","একটা প্রজেক্টের কোড আর তার ইতিহাস।"],["README","প্রজেক্ট কী আর কীভাবে চালাতে হয়, তার বিবরণ।"]]}
]},

{s:2,t:"ওয়েব: Practitioner লেভেল",k:"P10",d:"PortSwigger-এর Practitioner ল্যাবগুলো আসল bug bounty বাগের অনেক কাছাকাছি। প্রতিটা টপিকে ফিরে গিয়ে এবার Practitioner ল্যাব করবে। একেকটা টপিকে কয়েক দিন লাগতে পারে।",days:[
{t:"PortSwigger Learning Path ধরা",g:"নিজের দুর্বল জায়গা খুঁজে পরিকল্পনা",h:"১ দিন",why:"Practitioner ল্যাবে এলোমেলো না ঘুরে PortSwigger-এর নিজের সাজানো learning path মেনে চললে ফাঁক থাকে না।",
 tasks:[["PortSwigger Learning paths পেজ দেখো","https://portswigger.net/web-security/learning-paths","Server-side আর Client-side দুই পথই আছে।"],["Dashboard দেখে প্রতিটা টপিকে কতগুলো Practitioner ল্যাব বাকি, তার তালিকা নোটে করো","https://portswigger.net/web-security/dashboard","এই তালিকা ধরেই পরের দিনগুলো চলবে।"]],
 terms:[["Practitioner","PortSwigger-এর মাঝারি কঠিন ল্যাব লেভেল।"]]},
{t:"SQLi আর Command Injection: Practitioner",g:"ব্লাইন্ড আর আউট-অফ-ব্যান্ড ধরন",h:"৩-৪ দিন",why:"আসল সাইটে ইনজেকশন প্রায়ই সরাসরি দেখা যায় না। এখানে সেই কঠিন ধরনগুলো চিনতে শিখবে।",
 tasks:[["SQL injection-এর Practitioner ল্যাবগুলো",PS+"sql-injection",SOL],["OS command injection-এর Practitioner ল্যাবগুলো",PS+"os-command-injection",SOL]],
 terms:[["Out-of-band","ফল সরাসরি না এসে অন্য চ্যানেলে (যেমন DNS) আসা।"],["Time-based","রেসপন্স আসতে কত সময় লাগছে, সেটা দেখে সিদ্ধান্ত নেওয়া।"]],fix:"Parameterized query, ইনপুট allowlist, আর সার্ভারের বাইরের দিকের কানেকশন সীমিত রাখা।"},
{t:"XSS: Practitioner",g:"ফিল্টার আর CSP থাকলেও কীভাবে ঝুঁকি থাকে",h:"৩-৪ দিন",why:"আসল সাইটে কিছু না কিছু ফিল্টার থাকে। কোথায় ফিল্টার যথেষ্ট না, সেটা বুঝলে সঠিক সমাধানও বলতে পারবে।",
 tasks:[["Cross-site scripting-এর Practitioner ল্যাবগুলো",PS+"cross-site-scripting",SOL],["Content Security Policy অংশ পড়ো",PS+"cross-site-scripting/content-security-policy","CSP কী আটকায় আর কী আটকায় না।"]],
 terms:[["CSP","ব্রাউজারকে বলে কোন উৎসের স্ক্রিপ্ট চলতে পারবে।"],["Sanitization","ইনপুট থেকে বিপজ্জনক অংশ সরিয়ে ফেলা।"]],fix:"context অনুযায়ী আউটপুট encoding, কড়া CSP, আর পরীক্ষিত sanitizer লাইব্রেরি ব্যবহার।"},
{t:"Access control আর Auth: Practitioner",g:"আসল bug bounty-র সবচেয়ে বড় উৎস",h:"৩-৪ দিন",why:"IDOR আর লগইনের লজিক থেকেই bug bounty-তে সবচেয়ে বেশি রিপোর্ট আসে। এখানে গভীরভাবে করবে।",
 tasks:[["Access control-এর Practitioner ল্যাব",PS+"access-control",SOL],["Authentication-এর Practitioner ল্যাব",PS+"authentication",SOL],["OAuth আর JWT-এর Practitioner ল্যাব",PS+"oauth","JWT-এর জন্য: "+PS+"jwt"]],
 terms:[["Multi-step process","কয়েক ধাপের কাজ, যেখানে প্রতিটা ধাপে আলাদা চেক লাগে।"]],fix:"প্রতিটা ধাপে আর প্রতিটা রিকোয়েস্টে সার্ভারে অনুমতি যাচাই।"},
{t:"SSRF, XXE, Upload: Practitioner",g:"সার্ভারের দিকের গভীর সমস্যা",h:"৩ দিন",why:"এই দুর্বলতাগুলো থেকে প্রায়ই গুরুতর ফলাফল হয়, তাই ভালো পুরস্কারও থাকে।",
 tasks:[["SSRF-এর Practitioner ল্যাব",PS+"ssrf",SOL],["XXE-এর Practitioner ল্যাব",PS+"xxe",SOL],["File upload-এর Practitioner ল্যাব",PS+"file-upload",SOL]],
 terms:[["Blind SSRF","সার্ভার রিকোয়েস্ট পাঠায়, কিন্তু ফল তোমাকে দেখায় না।"]],fix:"allowlist, ভিতরের নেটওয়ার্ক আলাদা রাখা, আর ক্লাউড metadata সার্ভিসের সুরক্ষা চালু রাখা।"},
{t:"CSRF, CORS, Clickjacking",g:"ক্লায়েন্ট-সাইড ব্রাউজার নিয়ম",h:"২-৩ দিন",why:"ব্রাউজারের নিরাপত্তা নিয়মগুলো (same-origin policy) ঠিকমতো বুঝলে ক্লায়েন্ট-সাইডের পুরো একটা দুর্বলতার পরিবার বুঝে যাবে।",
 tasks:[["CSRF-এর Practitioner ল্যাব",PS+"csrf",SOL],["CORS-এর Practitioner ল্যাব",PS+"cors",SOL],["Clickjacking টপিক আর ল্যাব",PS+"clickjacking",SOL]],
 terms:[["Same-origin policy","এক সাইট আরেক সাইটের ডেটা পড়তে পারবে না, ব্রাউজারের এই মূল নিয়ম।"],["Clickjacking","অদৃশ্য ফ্রেমের নিচে ইউজারকে দিয়ে ক্লিক করানো।"]],fix:"CSRF token, SameSite cookie, কড়া CORS নীতি, আর X-Frame-Options বা CSP frame-ancestors।"},
{t:"Logic, Info disclosure, API: Practitioner",g:"চিন্তা দিয়ে বাগ খোঁজা",h:"৩ দিন",why:"টুল দিয়ে এগুলো পাওয়া যায় না, শুধু মাথা খাটিয়ে পাওয়া যায়। তাই bug bounty-তে প্রতিযোগিতা কম।",
 tasks:[["Business logic-এর Practitioner ল্যাব",PS+"logic-flaws",SOL],["Information disclosure-এর Practitioner ল্যাব",PS+"information-disclosure",SOL],["API testing-এর Practitioner ল্যাব",PS+"api-testing",SOL]],
 terms:[["Edge case","অস্বাভাবিক বা সীমার মান, যেমন ঋণাত্মক সংখ্যা বা খুব বড় ইনপুট।"]]},
{t:"Practitioner রিভিশন আর writeup",g:"শেখা জিনিস লিখে পাকা করা",h:"২ দিন",why:"নিজের ভাষায় writeup লিখলে বোঝা পাকা হয়, আর সেটা পোর্টফোলিওতেও যায়।",
 tasks:[["সবচেয়ে কঠিন লাগা ৩টা ল্যাবের writeup নিজের ব্লগ বা GitHub-এ লিখো",null,"PortSwigger-এর ল্যাব নিয়ে writeup লেখা যায়। লিখো কী ভেবেছিলে, কোথায় আটকেছিলে, আর কীভাবে ঠেকানো যায়।"],["নিজের cheat sheet আপডেট করো",null,"Stage 1-এর cheat sheet-এ Practitioner লেভেলের শিক্ষাগুলো যোগ করো।"]],
 terms:[["Writeup","কোনো চ্যালেঞ্জ বা ল্যাব কীভাবে সমাধান করলে তার লেখা বিবরণ।"]]}
]},

{s:2,t:"পেনটেস্ট মেথডলজি আর মেশিন",k:"P11",d:"শুধু ওয়েব না, পুরো একটা মেশিন বা নেটওয়ার্কের পেনটেস্ট। শুধু বৈধ প্র্যাকটিস প্ল্যাটফর্মের মেশিনে বা নিজের VM-এ।",days:[
{t:"পেনটেস্টের ধাপ",g:"প্রফেশনাল পেনটেস্ট কীভাবে সাজানো হয়",h:"১-২ দিন",why:"কোম্পানি পেনটেস্টারকে নিয়োগ দেয় একটা নির্দিষ্ট পদ্ধতিতে কাজের জন্য: চুক্তি, scope, টেস্ট আর রিপোর্ট। এই কাঠামো জানাই প্রফেশনাল হওয়ার শুরু।",
 tasks:[["PTES (Penetration Testing Execution Standard)-এর মূল ধাপগুলো পড়ো","http://www.pentest-standard.org/","Pre-engagement থেকে Reporting পর্যন্ত ৭টা ধাপ।"],["MITRE ATT&CK-এর ওয়েবসাইট ঘুরে দেখো","https://attack.mitre.org/","আক্রমণকারীরা কোন ধাপে কী কৌশল ব্যবহার করে, তার বিশ্বব্যাপী তালিকা। ডিফেন্ডার আর পেনটেস্টার দুজনেই এই ভাষায় কথা বলে।"],["নোটে লিখো: Rules of Engagement-এ কী কী থাকে",null,"কখন, কোথায়, কী করা যাবে আর কী যাবে না।"]],
 terms:[["Penetration test","অনুমতি নিয়ে, নির্দিষ্ট সময়ে, আক্রমণকারীর মতো করে সিস্টেম পরীক্ষা।"],["Rules of Engagement","পেনটেস্টে কী করা যাবে আর কী যাবে না, তার লিখিত চুক্তি।"],["MITRE ATT&CK","আক্রমণের কৌশলের স্ট্যান্ডার্ড তালিকা।"]]},
{t:"বৈধ প্র্যাকটিস প্ল্যাটফর্ম সেটআপ",g:"HTB Starting Point, TryHackMe, VulnHub",h:"১ দিন",why:"এই প্ল্যাটফর্মগুলো ইচ্ছা করে দুর্বল মেশিন দেয়, যেখানে আক্রমণ করা পুরোপুরি বৈধ। এগুলোর ফ্রি অংশ দিয়েই অনেক দূর যাওয়া যায়।",
 tasks:[["Hack The Box-এর Starting Point দেখো (প্রথম ধাপের মেশিনগুলো ফ্রি)","https://app.hackthebox.com/starting-point","প্রতিটা মেশিনের সাথে গাইডেড প্রশ্ন থাকে।"],["TryHackMe-তে ফ্রি অ্যাকাউন্ট খোলো","https://tryhackme.com/","অনেক রুম ফ্রি। পেইড রুম বাদ দিয়ে ফ্রিগুলো দিয়েই চলবে।"],["VulnHub দেখো, যেখান থেকে দুর্বল VM নামিয়ে নিজের পিসিতে চালানো যায়","https://www.vulnhub.com/","পুরোপুরি ফ্রি, ইন্টারনেট ছাড়াও প্র্যাকটিস করা যায়।"]],
 terms:[["Box / Machine","প্র্যাকটিসের জন্য বানানো দুর্বল একটা কম্পিউটার।"],["Retired machine","পুরনো মেশিন, যেগুলোর writeup প্রকাশ করা অনুমোদিত।"]]},
{t:"Enumeration-এর অভ্যাস",g:"সব তথ্য আগে জোগাড় করা",h:"৩-৪ দিন",why:"অভিজ্ঞ পেনটেস্টাররা বলে, কাজের ৮০% হলো ভালোভাবে তথ্য জোগাড় করা। এখানে তাড়াহুড়া করলে পরে আটকে যাবে।",
 tasks:[["HTB Starting Point-এর প্রথম স্তরের মেশিনগুলো করো","https://app.hackthebox.com/starting-point","প্রতিটা প্রশ্নের উত্তর নোটে লিখে রাখো।"],["প্রতিটা মেশিনের জন্য একই ফরম্যাটে নোট রাখো: খোলা পোর্ট, সার্ভিস, ভার্সন, যা পেলে",null,"এই অভ্যাসই পরে রিপোর্ট লেখা সহজ করবে।"]],
 terms:[["Enumeration","টার্গেট সম্পর্কে যত বেশি সম্ভব তথ্য খুঁজে বের করা।"],["Attack surface","যত জায়গা দিয়ে একটা সিস্টেমে ঢোকার চেষ্টা করা যায়।"]]},
{t:"Linux privilege escalation: ধারণা",g:"সাধারণ ইউজার থেকে বেশি ক্ষমতা কীভাবে চলে যায়",h:"৩-৪ দিন",why:"অনেক সময় প্রথমে কম ক্ষমতা নিয়ে ঢোকা যায়। তারপর সিস্টেমের ভুল কনফিগারেশন থেকে বেশি ক্ষমতা পাওয়া যায় কিনা, সেটা পরীক্ষা করা পেনটেস্টের একটা মূল অংশ।",
 tasks:[["HackTricks-এর Linux Privilege Escalation অধ্যায়ের চেকলিস্ট পড়ো","https://book.hacktricks.wiki/","কোন কোন জায়গায় ভুল কনফিগারেশন থাকে, তার তালিকা।"],["GTFOBins কী আর কেন কাজে লাগে, দেখো","https://gtfobins.github.io/","কোন সাধারণ প্রোগ্রাম ভুল পারমিশনে থাকলে ঝুঁকি তৈরি করে, তার রেফারেন্স।"],["HTB বা TryHackMe-র Linux privilege escalation-এর ফ্রি রুম বা মেশিনে প্র্যাকটিস করো",null,"Bandit-এ cron আর setuid নিয়ে যা দেখেছিলে, সেটা এখানে আরও গভীরে।"]],
 terms:[["SUID","Bandit-এ দেখা setuid পারমিশন।"],["Kernel exploit","অপারেটিং সিস্টেমের মূল অংশের বাগ। ঝুঁকিপূর্ণ, তাই পেনটেস্টে শেষ উপায়।"]],fix:"সিস্টেম আপডেট রাখা, least privilege, আর sudo ও SUID পারমিশন নিয়মিত অডিট করা।"},
{t:"Windows privilege escalation: ধারণা",g:"Windows-এ একই জিনিস",h:"৩ দিন",why:"কোম্পানির বেশিরভাগ কম্পিউটার Windows-এ চলে। তাই Windows-এর পারমিশন, সার্ভিস আর রেজিস্ট্রি বোঝা জরুরি।",
 tasks:[["HackTricks-এর Windows Local Privilege Escalation চেকলিস্ট পড়ো","https://book.hacktricks.wiki/","সার্ভিস, শিডিউলড টাস্ক আর পারমিশনের ভুলগুলো।"],["LOLBAS প্রজেক্ট দেখো","https://lolbas-project.github.io/","Windows-এর নিজস্ব কোন প্রোগ্রাম অপব্যবহার হতে পারে, তার রেফারেন্স। ডিফেন্ডাররাও এটা দিয়ে নজরদারি সাজায়।"],["TryHackMe বা HTB-র Windows privilege escalation-এর ফ্রি রুম বা মেশিন",null,"বৈধ প্ল্যাটফর্মে।"]],
 terms:[["Service account","কোনো সার্ভিস চালানোর জন্য বানানো অ্যাকাউন্ট।"],["Registry","Windows-এর সেটিং রাখার ডাটাবেস।"],["SYSTEM","Windows-এর সবচেয়ে বেশি ক্ষমতার অ্যাকাউন্ট।"]],fix:"সার্ভিসের পাথ আর পারমিশন ঠিক রাখা, অপ্রয়োজনীয় admin অধিকার সরানো, আর আপডেট দেওয়া।"},
{t:"Pivoting আর নেটওয়ার্ক ভিউ",g:"একটা মেশিন থেকে পুরো নেটওয়ার্ক বোঝা",h:"২ দিন",why:"কোম্পানির নেটওয়ার্কে একটা মেশিন থেকে আরেকটায় পৌঁছানো যায় কিনা, সেটা দেখা হয় network segmentation কতটা ভালো তা যাচাইয়ের জন্য।",
 tasks:[["HackTricks-এর Tunneling and Port Forwarding অংশের ধারণাগুলো পড়ো","https://book.hacktricks.wiki/","কেন এটা দরকার হয়, শুধু সেই ধারণা।"],["নোটে একটা নেটওয়ার্ক ডায়াগ্রাম আঁকো: DMZ, internal, আর কোন মেশিন কোথায়",null,"segmentation কেন জরুরি, ছবিতে পরিষ্কার হবে।"]],
 terms:[["Pivoting","একটা মেশিনকে সিঁড়ি বানিয়ে আরেক নেটওয়ার্কে পৌঁছানো।"],["Segmentation","নেটওয়ার্ককে আলাদা আলাদা অংশে ভাগ করে রাখা।"],["DMZ","বাইরের ইন্টারনেট আর ভিতরের নেটওয়ার্কের মাঝখানের অংশ।"]],fix:"নেটওয়ার্ক segmentation আর ভিতরের ট্রাফিকেও নজরদারি।"},
{t:"পেনটেস্ট রিপোর্ট লেখা",g:"ক্লায়েন্টের হাতে যাওয়ার মতো রিপোর্ট",h:"২-৩ দিন",why:"পেনটেস্টারের আসল ডেলিভারেবল হলো রিপোর্ট। টেকনিক্যাল টিম আর ম্যানেজমেন্ট দুজনেই যেন বোঝে, এমনভাবে লিখতে হয়।",
 tasks:[["বিভিন্ন কোম্পানির প্রকাশিত আসল পেনটেস্ট রিপোর্ট পড়ো","https://github.com/juliocesarfort/public-pentesting-reports","বিভিন্ন কোম্পানির প্রকাশিত আসল রিপোর্টের সংগ্রহ।"],["CVSS ক্যালকুলেটর দিয়ে নিজের ৩টা ফাইন্ডিংয়ের severity হিসাব করো","https://www.first.org/cvss/calculator/3.1","severity অনুমান না করে স্ট্যান্ডার্ড দিয়ে মাপা।"],["একটা পুরো মেশিনের রিপোর্ট লিখো: Executive summary, findings, risk, recommendations",null,"রিটায়ার্ড মেশিন বা নিজের VulnHub VM নিয়ে।"]],
 terms:[["Executive summary","ম্যানেজমেন্টের জন্য ১ পাতার সহজ সারাংশ।"],["CVSS","দুর্বলতার severity মাপার স্ট্যান্ডার্ড স্কোর।"],["Remediation","সমস্যা ঠিক করার পরামর্শ।"]]},
{t:"VulnHub পুরো মেশিন",g:"শুরু থেকে শেষ, নিজে নিজে",h:"৩-৫ দিন",why:"গাইড ছাড়া একটা পুরো মেশিন করা হলো Stage 2-এর ফাইনাল পরীক্ষা।",
 tasks:[["VulnHub থেকে \"easy\" ট্যাগওয়ালা একটা মেশিন নামিয়ে নিজের পিসিতে চালাও","https://www.vulnhub.com/","VM-টা host-only নেটওয়ার্কে রাখো, যাতে বাইরের নেটওয়ার্কের সাথে না মেশে।"],["গাইড না দেখে enumeration থেকে রিপোর্ট পর্যন্ত পুরোটা করো",null,"আটকে গেলে ২ ঘণ্টা নিজে চেষ্টা করো, তারপর writeup থেকে শুধু একটা hint নাও।"]],
 terms:[["Host-only network","শুধু তোমার পিসি আর VM-এর মধ্যে নেটওয়ার্ক, বাইরে যায় না।"]]}
]},

{s:2,t:"Windows আর Active Directory",k:"P12",d:"বড় কোম্পানির প্রায় সবাই Active Directory দিয়ে ইউজার আর কম্পিউটার পরিচালনা করে। ইন্টারনাল পেনটেস্টের বেশিরভাগ কাজ AD ঘিরে।",days:[
{t:"Active Directory কী",g:"ডোমেইন, ইউজার, গ্রুপ, পলিসি",h:"২ দিন",why:"AD না বুঝলে কোম্পানির ভিতরের নেটওয়ার্ক বোঝা অসম্ভব। পেনটেস্টার আর SOC অ্যানালিস্ট দুজনেরই এটা জানা লাগে।",
 tasks:[["Microsoft Learn: Active Directory Domain Services overview","https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/get-started/virtual-dc/active-directory-domain-services-overview","অফিশিয়াল ব্যাখ্যা: ডোমেইন, ট্রি, ফরেস্ট, OU।"],["নোটে ডায়াগ্রাম আঁকো: Domain Controller, ইউজার, কম্পিউটার, গ্রুপ",null,"কে কাকে নিয়ন্ত্রণ করে।"]],
 terms:[["Domain Controller","AD-র কেন্দ্রীয় সার্ভার, সব লগইন যাচাই করে।"],["Group Policy","একসাথে অনেক কম্পিউটারে নিয়ম চাপানোর ব্যবস্থা।"],["OU","Organizational Unit: ইউজার আর কম্পিউটার সাজিয়ে রাখার ফোল্ডার।"]]},
{t:"Kerberos আর NTLM",g:"Windows লগইন কীভাবে কাজ করে",h:"২-৩ দিন",why:"AD-র বেশিরভাগ পরিচিত দুর্বলতা এই দুই লগইন প্রোটোকলের ডিজাইন বা কনফিগারেশন থেকে আসে। কীভাবে কাজ করে না জানলে ঝুঁকিগুলো বোঝা যায় না।",
 tasks:[["Microsoft Learn-এ Kerberos authentication overview পড়ো","https://learn.microsoft.com/en-us/windows-server/security/kerberos/kerberos-authentication-overview","টিকেট কী, কে দেয়, কতক্ষণ থাকে।"],["নোটে Kerberos-এর ধাপগুলো নিজের ভাষায় ছবি এঁকে বোঝাও",null,"ইন্টারভিউতে এটা প্রায়ই জিজ্ঞেস করে।"]],
 terms:[["Kerberos","টিকেট-ভিত্তিক লগইন প্রোটোকল।"],["NTLM","পুরনো Windows লগইন প্রোটোকল।"],["Hash","পাসওয়ার্ডের এক দিকের ছাপ, যা সিস্টেম সংরক্ষণ করে।"]]},
{t:"নিজের AD ল্যাব",g:"নিজের পিসিতে ছোট একটা কোম্পানি",h:"৩-৪ দিন",why:"নিজে বানালে বুঝবে কোন সেটিং কোথায়, আর কোন ভুল সেটিং কী ঝুঁকি তৈরি করে। Microsoft ১৮০ দিনের জন্য Windows Server ফ্রিতে ট্রায়াল দেয়।",
 tasks:[["Microsoft Evaluation Center থেকে Windows Server-এর ফ্রি ট্রায়াল ISO নামাও","https://www.microsoft.com/en-us/evalcenter/","VirtualBox-এ একটা Domain Controller আর একটা Windows ক্লায়েন্ট বানাও।"],["কয়েকটা ইউজার, গ্রুপ আর একটা Group Policy বানাও",null,"admin হিসেবে কাজ করে দেখো সিস্টেমটা কীভাবে চলে।"],["পিসিতে ১৬ GB+ RAM থাকলে GOAD (Game of Active Directory) দেখো","https://github.com/Orange-Cyberdefense/GOAD","ইচ্ছা করে দুর্বল বানানো ফ্রি AD ল্যাব। RAM কম হলে বাদ দাও।"]],
 terms:[["Evaluation","নির্দিষ্ট সময়ের জন্য ফ্রি ট্রায়াল ভার্সন।"],["Lab","নিজের নিয়ন্ত্রণে থাকা প্র্যাকটিসের পরিবেশ।"]]},
{t:"AD-র কমন দুর্বলতা: ধারণা",g:"কোন ভুলগুলো সবচেয়ে বেশি পাওয়া যায়",h:"৩ দিন",why:"আসল ইন্টারনাল পেনটেস্টে প্রায় একই কয়েকটা কনফিগারেশন ভুল বারবার পাওয়া যায়। কোনগুলো আর কেন, সেটা জানা দরকার।",
 tasks:[["HackTricks-এর Active Directory Methodology অংশের সূচি আর ধারণাগুলো পড়ো","https://book.hacktricks.wiki/","প্রতিটা দুর্বলতার নাম আর কেন হয়, নোটে লিখো।"],["MITRE ATT&CK-এ Credential Access ট্যাকটিকের কৌশলগুলো দেখো","https://attack.mitre.org/tactics/TA0006/","প্রতিটা কৌশলের পেজে Mitigations আর Detection অংশও আছে।"]],
 terms:[["Credential","লগইনের প্রমাণ: পাসওয়ার্ড, হ্যাশ বা টিকেট।"],["Lateral movement","এক মেশিন থেকে আরেক মেশিনে যাওয়া।"]],fix:"শক্ত পাসওয়ার্ড নীতি, service account-এ লম্বা পাসওয়ার্ড, admin অধিকার সীমিত রাখা, আর tiered admin মডেল।"},
{t:"BloodHound দিয়ে AD ম্যাপ",g:"সম্পর্কের গ্রাফ দেখা",h:"২ দিন",why:"বড় AD-তে কোন ইউজার কোন পথে admin পর্যন্ত পৌঁছাতে পারে, সেটা হাতে বের করা অসম্ভব। BloodHound গ্রাফ বানিয়ে দেখায়, আর ডিফেন্ডাররাও এটা দিয়ে ঝুঁকি খোঁজে।",
 tasks:[["BloodHound Community Edition-এর ডকুমেন্টেশন পড়ো","https://bloodhound.specterops.io/","কী দেখায় আর কেন ডিফেন্ডাররাও এটা ব্যবহার করে।"],["নিজের AD ল্যাবে চালিয়ে দেখো কোন ইউজারের সবচেয়ে বেশি ক্ষমতা",null,"শুধু নিজের ল্যাবে।"]],
 terms:[["Attack path","কম ক্ষমতা থেকে বেশি ক্ষমতায় পৌঁছানোর সম্পর্কের পথ।"]]},
{t:"AD রিভিশন",g:"Stage 2-এর শেষ",h:"২ দিন",why:"Stage 2 শেষ। এখন তুমি একটা জুনিয়র পেনটেস্টারের মূল দক্ষতাগুলো ছুঁয়ে ফেলেছ।",
 tasks:[["TryHackMe বা HTB-তে Active Directory-র ফ্রি রুম বা মেশিন খুঁজে করো",null,"বৈধ প্ল্যাটফর্মে।"],["Stage 2-এর সব নোট গুছিয়ে একটা ডকুমেন্টে রাখো",null,"এটা পরে সার্টিফিকেশনের প্রস্তুতিতে কাজে লাগবে।"]],
 terms:[]}
]},

/* ===================== STAGE 3 · PROFESSIONAL ===================== */
{s:3,t:"অ্যাডভান্সড ওয়েব",k:"P13",d:"PortSwigger-এর সবচেয়ে কঠিন টপিক আর Expert ল্যাব। সিনিয়র অ্যাপসেক আর টপ bug bounty হান্টাররা এই লেভেলে কাজ করে।",days:[
{t:"HTTP Request Smuggling",g:"সার্ভারগুলোর মধ্যে বোঝাপড়ার ভুল",h:"৩-৪ দিন",why:"সামনের সার্ভার আর পেছনের সার্ভার একটা রিকোয়েস্ট কোথায় শেষ হলো সেটা ভিন্নভাবে বুঝলে গুরুতর সমস্যা হয়। এই গবেষণা থেকেই বহু বড় bug bounty এসেছে।",
 tasks:[["Request smuggling টপিক পড়ো",PS+"request-smuggling","প্রথমে ধারণাটা ভালোভাবে বোঝো, তারপর ল্যাব।"],["Practitioner ল্যাবগুলো",PS+"request-smuggling",SOL]],
 terms:[["Front-end / Back-end","সামনের সার্ভার (যেমন load balancer) আর আসল অ্যাপ সার্ভার।"],["Desync","দুই সার্ভারের রিকোয়েস্ট বোঝায় অমিল।"]],fix:"সামনে-পেছনে একই HTTP পার্সিং নিয়ম, HTTP/2 end-to-end, আর অস্পষ্ট রিকোয়েস্ট প্রত্যাখ্যান করা।"},
{t:"Web Cache Poisoning আর Deception",g:"ক্যাশের ভুল ব্যবহার",h:"৩ দিন",why:"দ্রুত করার জন্য সাইটগুলো পেজ ক্যাশ করে। ক্যাশ যদি ভুল জিনিস রেখে দেয়, তাহলে অনেক ইউজার একসাথে আক্রান্ত হতে পারে।",
 tasks:[["Web cache poisoning টপিক আর ল্যাব",PS+"web-cache-poisoning",SOL],["Web cache deception টপিক আর ল্যাব",PS+"web-cache-deception",SOL]],
 terms:[["Cache","একবার বানানো উত্তর জমিয়ে রেখে বারবার দেওয়া।"],["Cache key","ক্যাশ কোন রিকোয়েস্টকে একই ধরবে, সেই নিয়ম।"]],fix:"ক্যাশ key আর রেসপন্সে প্রভাব ফেলা ইনপুট মিলিয়ে রাখা, আর ব্যক্তিগত পেজ ক্যাশ না করা।"},
{t:"Race Conditions",g:"একসাথে অনেক রিকোয়েস্টের ফাঁক",h:"২-৩ দিন",why:"একই সময়ে অনেক রিকোয়েস্ট গেলে চেক আর কাজের মাঝের ছোট্ট ফাঁকে লজিক ভেঙে যেতে পারে, যেমন একটা কুপন বারবার ব্যবহার হয়ে যাওয়া।",
 tasks:[["Race conditions টপিক পড়ো আর ল্যাব করো",PS+"race-conditions",SOL]],
 terms:[["Race condition","কাজের ক্রম বা সময়ের উপর ফলাফল নির্ভর করা।"],["TOCTOU","চেক করার সময় আর ব্যবহারের সময়ের মাঝের ফাঁক।"]],fix:"ডাটাবেস লক বা atomic অপারেশন ব্যবহার করা।"},
{t:"Deserialization আর Prototype Pollution",g:"অবজেক্ট নিয়ে খেলার ঝুঁকি",h:"৩-৪ দিন",why:"অ্যাপ যখন ইউজারের দেওয়া ডেটা থেকে অবজেক্ট বানায়, তখন বিপজ্জনক অবজেক্ট ঢুকে যেতে পারে। Java, PHP আর JavaScript অ্যাপে এটা গুরুতর।",
 tasks:[["Insecure deserialization টপিক আর ল্যাব",PS+"deserialization",SOL],["Prototype pollution টপিক আর ল্যাব",PS+"prototype-pollution",SOL]],
 terms:[["Serialization","অবজেক্টকে পাঠানো বা রাখার মতো টেক্সট বা বাইটে রূপান্তর।"],["Prototype","JavaScript-এ সব অবজেক্টের পূর্বপুরুষ অবজেক্ট।"]],fix:"অবিশ্বস্ত ডেটা deserialize না করা, signature যাচাই, আর অবজেক্টে অনুমোদিত key-র তালিকা রাখা।"},
{t:"GraphQL আর WebSockets",g:"আধুনিক API",h:"২-৩ দিন",why:"নতুন অ্যাপগুলো প্রায়ই REST-এর বদলে GraphQL বা WebSockets ব্যবহার করে। এগুলোর নিজস্ব কিছু ঝুঁকি আছে।",
 tasks:[["GraphQL API vulnerabilities টপিক আর ল্যাব",PS+"graphql",SOL],["WebSockets টপিক আর ল্যাব",PS+"websockets",SOL],["OWASP API Security Top 10 পড়ো","https://owasp.org/API-Security/","API-র জন্য আলাদা Top 10 তালিকা।"]],
 terms:[["GraphQL","একটা endpoint দিয়ে ইচ্ছামতো ডেটা চাওয়ার API ভাষা।"],["Introspection","GraphQL-এর নিজের পুরো কাঠামো বলে দেওয়ার ফিচার।"],["WebSocket","ব্রাউজার আর সার্ভারের মধ্যে খোলা দুই দিকের কানেকশন।"]],fix:"প্রোডাকশনে introspection বন্ধ রাখা, query-র গভীরতা সীমিত করা, আর প্রতিটা অপারেশনে authorization।"},
{t:"Expert ল্যাব আর BSCP প্রস্তুতি",g:"PortSwigger-এর সর্বোচ্চ লেভেল",h:"এক সপ্তাহ+",why:"Burp Suite Certified Practitioner (BSCP) ওয়েব সিকিউরিটিতে খুব সম্মানিত সার্টিফিকেশন, আর খরচও কম। প্রস্তুতির সব উপকরণ ফ্রি।",
 tasks:[["BSCP সার্টিফিকেশন পেজ পড়ো","https://portswigger.net/web-security/certification","পরীক্ষা কেমন হয়, কী লাগে।"],["Mystery labs আর practice exam দিয়ে নিজেকে যাচাই করো","https://portswigger.net/web-security/certification","টপিকের নাম না জেনে ল্যাব করা, আসল পরীক্ষার মতো।"],["প্রতিটা টপিকে অন্তত একটা Expert ল্যাব চেষ্টা করো",PS+"all-labs",SOL]],
 terms:[["BSCP","Burp Suite Certified Practitioner, PortSwigger-এর সার্টিফিকেশন।"],["Expert","PortSwigger-এর সবচেয়ে কঠিন ল্যাব লেভেল।"]]},
{t:"Threat modeling",g:"বানানোর আগেই ঝুঁকি খোঁজা",h:"২ দিন",why:"প্রফেশনাল অ্যাপসেক ইঞ্জিনিয়াররা অ্যাপ বানানোর সময়ই ডেভেলপারদের সাথে বসে ঝুঁকি খোঁজে। এটা পেনটেস্টারকে সিনিয়র লেভেলে নিয়ে যায়।",
 tasks:[["OWASP Threat Modeling পেজ পড়ো","https://owasp.org/www-community/Threat_Modeling","STRIDE-এর মতো পদ্ধতি।"],["Juice Shop-এর জন্য একটা threat model বানাও: ডেটা কোথায় যায়, কোথায় ঝুঁকি",null,"ডায়াগ্রাম আর তালিকা।"]],
 terms:[["Threat modeling","সিস্টেম ডিজাইনের সময়েই সম্ভাব্য ঝুঁকি খুঁজে বের করা।"],["STRIDE","ঝুঁকির ৬টা ক্যাটাগরি: Spoofing, Tampering, Repudiation, Information disclosure, DoS, Elevation of privilege।"]]}
]},

{s:3,t:"ক্লাউড সিকিউরিটি",k:"P14",d:"এখনকার বেশিরভাগ কোম্পানি AWS, Azure বা GCP-তে চলে। ক্লাউডের ভুল কনফিগারেশন এখন ডেটা ফাঁসের সবচেয়ে বড় কারণগুলোর একটা।",days:[
{t:"ক্লাউড কীভাবে কাজ করে",g:"IAM, স্টোরেজ, shared responsibility",h:"২ দিন",why:"ক্লাউডে নিরাপত্তার কিছু অংশ প্রোভাইডারের দায়িত্ব, আর কিছু অংশ গ্রাহকের। এই ভাগটা না বুঝলে বেশিরভাগ ক্লাউড ঝুঁকি বোঝা যায় না।",
 tasks:[["AWS Shared Responsibility Model পড়ো","https://aws.amazon.com/compliance/shared-responsibility-model/","কোনটা AWS-এর দায়িত্ব, কোনটা তোমার।"],["AWS IAM-এর ডকুমেন্টেশনের Introduction পড়ো","https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html","ইউজার, রোল আর পলিসি।"]],
 terms:[["IAM","Identity and Access Management: কে কোন রিসোর্সে কী করতে পারবে।"],["S3 bucket","AWS-এর ফাইল রাখার জায়গা।"],["Shared responsibility","নিরাপত্তার দায়িত্ব প্রোভাইডার আর গ্রাহকের মধ্যে ভাগ।"]]},
{t:"flaws.cloud",g:"ফ্রি ক্লাউড চ্যালেঞ্জ",h:"৩ দিন",why:"flaws.cloud আর flaws2.cloud ইচ্ছা করে বানানো ফ্রি AWS চ্যালেঞ্জ। কোনো অ্যাকাউন্ট বা টাকা লাগে না, আর প্রতিটা লেভেলে কমন ক্লাউড ভুল শেখায়।",
 tasks:[["flaws.cloud শুরু করো","http://flaws.cloud/","প্রতিটা লেভেলের শেষে ব্যাখ্যা দেয় ভুলটা কী ছিল আর কীভাবে ঠিক করতে হয়।"],["flaws2.cloud-এ Attacker আর Defender দুই পথই করো","http://flaws2.cloud/","Defender পথে লগ দেখে আক্রমণ খুঁজতে শিখবে।"]],
 terms:[["Public bucket","যে স্টোরেজ ইন্টারনেটের যে কেউ পড়তে পারে।"],["Metadata service","ক্লাউড মেশিনের নিজের সম্পর্কে তথ্য দেওয়া ভিতরের সার্ভিস।"]],fix:"স্টোরেজ ডিফল্টভাবে প্রাইভেট রাখা, least privilege IAM, আর IMDSv2 চালু রাখা।"},
{t:"CloudGoat",g:"নিজের AWS-এ দুর্বল ল্যাব",h:"৩ দিন",why:"CloudGoat নিজের AWS অ্যাকাউন্টে ইচ্ছা করে দুর্বল পরিবেশ বানায়। এতে আসল ক্লাউড টুল দিয়ে প্র্যাকটিস করা যায়।",
 tasks:[["CloudGoat-এর README পড়ো","https://github.com/RhinoSecurityLabs/cloudgoat","কীভাবে চালায় আর কোন কোন সিনারিও আছে।"],["AWS Free Tier-এর শর্তগুলো ভালোভাবে পড়ো","https://aws.amazon.com/free/","AWS অ্যাকাউন্টে কার্ড লাগে। সাবধান না হলে বিল আসতে পারে। কাজ শেষে সব রিসোর্স মুছে ফেলবে, আর billing alert চালু রাখবে।"],["কার্ড না থাকলে বা ঝুঁকি নিতে না চাইলে flaws নিয়েই থাকো, আর CloudGoat-এর সিনারিওর writeup পড়ো",null,"টাকা ছাড়াও শেখা যায়।"]],
 terms:[["Billing alert","খরচ একটা সীমা ছাড়ালে ইমেইল পাঠানোর সেটিং।"]]},
{t:"Azure আর GCP পরিচিতি",g:"অন্য দুই বড় ক্লাউড",h:"২ দিন",why:"বড় কোম্পানিগুলো প্রায়ই একাধিক ক্লাউড ব্যবহার করে। Azure এসেছে AD থেকে, তাই P12-এর জ্ঞান এখানে কাজে লাগবে।",
 tasks:[["Microsoft Learn: Microsoft Entra ID কী","https://learn.microsoft.com/en-us/entra/fundamentals/whatis","ক্লাউডে AD-র সমতুল্য।"],["Google Cloud IAM overview","https://cloud.google.com/iam/docs/overview","GCP-তে অনুমতি কীভাবে কাজ করে।"]],
 terms:[["Entra ID","Microsoft-এর ক্লাউড পরিচয় ব্যবস্থা, আগে Azure AD নামে পরিচিত।"]]}
]},

{s:3,t:"মোবাইল অ্যাপ সিকিউরিটি",k:"P15",d:"ব্যাংক আর ফিনটেকের মতো জায়গায় মোবাইল অ্যাপ টেস্টিং একটা বড় চাকরির ক্ষেত্র। OWASP-এর ফ্রি গাইড ধরে শিখবে।",days:[
{t:"OWASP MASVS আর MASTG",g:"মোবাইল টেস্টিংয়ের স্ট্যান্ডার্ড",h:"২ দিন",why:"MASVS বলে একটা নিরাপদ অ্যাপের কী কী থাকা উচিত, আর MASTG বলে কীভাবে পরীক্ষা করতে হয়। প্রফেশনাল মোবাইল পেনটেস্ট এই দুইটা মেনেই হয়।",
 tasks:[["OWASP MASVS-এর ক্যাটাগরিগুলো পড়ো","https://mas.owasp.org/MASVS/","স্টোরেজ, ক্রিপ্টো, নেটওয়ার্ক, প্ল্যাটফর্ম ইত্যাদি।"],["OWASP MASTG-এর Android অংশের পরিচিতি পড়ো","https://mas.owasp.org/MASTG/","টেস্টিং কীভাবে সাজানো।"]],
 terms:[["APK","Android অ্যাপের ফাইল।"],["MASVS","মোবাইল অ্যাপ নিরাপত্তার স্ট্যান্ডার্ড।"]]},
{t:"Android ল্যাব",g:"নিজের পিসিতে এমুলেটর",h:"৩ দিন",why:"Android Studio-র এমুলেটরে অ্যাপ চালিয়ে পরীক্ষা করা যায়, আলাদা ফোন লাগে না।",
 tasks:[["Android Studio ইনস্টল করে একটা এমুলেটর চালাও","https://developer.android.com/studio","RAM বেশি লাগে। পিসি দুর্বল হলে ধীরে চলবে।"],["OWASP MAS Crackmes দিয়ে প্র্যাকটিস করো","https://mas.owasp.org/crackmes/","ইচ্ছা করে বানানো প্র্যাকটিস অ্যাপ।"]],
 terms:[["Emulator","পিসিতে চলা নকল ফোন।"],["Static analysis","অ্যাপ না চালিয়ে কোড পরীক্ষা।"],["Dynamic analysis","অ্যাপ চালিয়ে আচরণ দেখা।"]]},
{t:"মোবাইল থেকে API",g:"অ্যাপের পেছনের সার্ভার",h:"২ দিন",why:"বেশিরভাগ মোবাইল অ্যাপের গুরুতর বাগ আসলে তার পেছনের API-তে থাকে। ওয়েব জ্ঞান এখানে সরাসরি কাজে লাগে।",
 tasks:[["MASTG-এ Android নেটওয়ার্ক ট্রাফিক দেখার অংশ পড়ো","https://mas.owasp.org/MASTG/","এমুলেটরের ট্রাফিক Burp দিয়ে কীভাবে দেখা যায়।"],["Crackme অ্যাপের ট্রাফিক Burp দিয়ে দেখো",null,"শুধু প্র্যাকটিস অ্যাপে।"]],
 terms:[["Certificate pinning","অ্যাপ শুধু নির্দিষ্ট সার্টিফিকেট বিশ্বাস করে, যাতে মাঝখানে কেউ ট্রাফিক পড়তে না পারে।"]],fix:"API-তে সার্ভার-সাইড authorization, অ্যাপে কোনো গোপন key না রাখা, আর certificate pinning।"}
]},

{s:3,t:"কোড রিভিউ আর CVE",k:"P16",d:"সোর্স কোড পড়ে বাগ খোঁজা আর ওপেন সোর্সে আসল দুর্বলতা খুঁজে CVE পাওয়া প্রফেশনাল ক্যারিয়ারের সবচেয়ে শক্তিশালী প্রমাণগুলোর একটা।",days:[
{t:"Secure coding",g:"ডেভেলপাররা কীভাবে নিরাপদ কোড লেখে",h:"২ দিন",why:"অ্যাপসেক চাকরিতে কাজের বড় অংশই ডেভেলপারদের সমস্যা ঠিক করতে সাহায্য করা। তাই নিরাপদ কোড কেমন দেখতে, সেটা জানা লাগে।",
 tasks:[["OWASP Cheat Sheet Series থেকে Input Validation, Authentication আর SQL Injection Prevention পড়ো","https://cheatsheetseries.owasp.org/","প্রতিটা দুর্বলতার সঠিক সমাধান এক জায়গায়।"],["OWASP Code Review Guide-এর পরিচিতি পড়ো","https://owasp.org/www-project-code-review-guide/","কোড রিভিউ কীভাবে সাজাতে হয়।"]],
 terms:[["Secure coding","শুরু থেকেই নিরাপত্তা মাথায় রেখে কোড লেখা।"],["Code review","অন্যের কোড পড়ে সমস্যা খোঁজা।"]]},
{t:"Semgrep দিয়ে অটোমেটেড রিভিউ",g:"টুল দিয়ে কোডে প্যাটার্ন খোঁজা",h:"২ দিন",why:"বড় কোডবেস হাতে পড়া অসম্ভব। Semgrep-এর মতো টুল সন্দেহজনক প্যাটার্ন খুঁজে দেয়, তারপর মানুষ যাচাই করে।",
 tasks:[["Semgrep ডকুমেন্টেশনের Getting started","https://semgrep.dev/docs/","ইনস্টল আর প্রথম স্ক্যান।"],["Juice Shop-এর সোর্স কোডে Semgrep চালাও","https://github.com/juice-shop/juice-shop","যা পায়, Stage 1-এ খুঁজে পাওয়া বাগের সাথে মিলিয়ে দেখো।"]],
 terms:[["SAST","কোড না চালিয়ে বিশ্লেষণ করে বাগ খোঁজার টুল।"],["False positive","টুল যেটাকে বাগ বলছে কিন্তু আসলে বাগ না।"]]},
{t:"CVE কীভাবে কাজ করে",g:"দুর্বলতার বিশ্বব্যাপী তালিকা",h:"১-২ দিন",why:"প্রতিটা প্রকাশ্য দুর্বলতার একটা CVE নম্বর থাকে। নিজের নামে CVE থাকা ক্যারিয়ারে খুব শক্তিশালী প্রমাণ।",
 tasks:[["CVE.org-এ CVE প্রোগ্রাম কী, পড়ো","https://www.cve.org/","CVE কে দেয়, কীভাবে দেয়।"],["NVD-তে সাম্প্রতিক ৫টা CVE পড়ে বোঝো: কী সফটওয়্যার, কী দুর্বলতা, CVSS কত","https://nvd.nist.gov/","আর প্রতিটায় কী patch দেওয়া হলো।"],["GitHub Security Advisories দেখো","https://github.com/advisories","ওপেন সোর্স প্রজেক্টের দুর্বলতার তালিকা।"]],
 terms:[["CVE","Common Vulnerabilities and Exposures: প্রকাশ্য দুর্বলতার আইডি।"],["CNA","যে সংস্থা CVE নম্বর দিতে পারে।"],["Patch","দুর্বলতা ঠিক করার আপডেট।"]]},
{t:"Responsible disclosure",g:"ওপেন সোর্সে নিজে বাগ খোঁজা আর রিপোর্ট",h:"এক সপ্তাহ+",why:"ছোট ওপেন সোর্স প্রজেক্টের কোড পড়ে বাগ পেলে, তাদের security policy মেনে গোপনে জানালে, ঠিক হওয়ার পর CVE পাওয়া যেতে পারে।",
 tasks:[["তোমার পরিচিত ভাষার একটা ছোট ওপেন সোর্স ওয়েব প্রজেক্ট বেছে নিজের পিসিতে চালাও",null,"আগে দেখে নাও রিপোতে SECURITY.md বা security policy আছে কিনা।"],["কোড পড়ো, শুধু নিজের লোকাল কপিতে টেস্ট করো",null,"কারো লাইভ সাইটে না।"],["কিছু পেলে প্রজেক্টের security policy মেনে গোপনে রিপোর্ট করো","https://docs.github.com/en/code-security/security-advisories","GitHub-এর private vulnerability reporting ফিচার। পাবলিক issue-তে কখনো দুর্বলতার বিস্তারিত লিখবে না।"]],
 terms:[["Responsible disclosure","দুর্বলতা আগে গোপনে মালিককে জানানো, ঠিক হওয়ার পর প্রকাশ করা।"],["SECURITY.md","রিপোতে থাকা ফাইল, যেখানে লেখা থাকে কীভাবে দুর্বলতা রিপোর্ট করতে হয়।"]]}
]},

{s:3,t:"ডিফেন্স বোঝা (Blue Team)",k:"P17",d:"ভালো পেনটেস্টার জানে ডিফেন্ডার কী দেখে। আর অনেকের প্রথম চাকরিই হয় SOC অ্যানালিস্ট হিসেবে, তাই এই দক্ষতা সরাসরি চাকরির পথ খোলে।",days:[
{t:"SOC আর লগ",g:"কোম্পানি কীভাবে আক্রমণ ধরে",h:"২ দিন",why:"SOC (Security Operations Center) সারাক্ষণ লগ দেখে আক্রমণ খোঁজে। বাংলাদেশসহ সব জায়গায় এটাই সবচেয়ে বেশি এন্ট্রি-লেভেল সিকিউরিটি চাকরির জায়গা।",
 tasks:[["Security Onion-এর ডকুমেন্টেশনের পরিচিতি পড়ো","https://docs.securityonion.net/","একটা ফ্রি SOC প্ল্যাটফর্ম কী কী দেখায়।"],["Sigma rules প্রজেক্ট দেখো","https://github.com/SigmaHQ/sigma","আক্রমণ ধরার নিয়ম কীভাবে লেখা হয়।"]],
 terms:[["SOC","নিরাপত্তা পর্যবেক্ষণ কেন্দ্র।"],["SIEM","সব লগ এক জায়গায় এনে বিশ্লেষণ করার সিস্টেম।"],["Alert","সন্দেহজনক কিছু দেখলে সিস্টেম যে সতর্কতা দেয়।"]]},
{t:"ডিফেন্সিভ প্র্যাকটিস প্ল্যাটফর্ম",g:"আক্রমণের প্রমাণ খোঁজা",h:"৩-৪ দিন",why:"Blue team-এর প্ল্যাটফর্মে আসল আক্রমণের লগ আর ফাইল দেওয়া থাকে, যেখান থেকে কী হয়েছিল তা বের করতে হয়।",
 tasks:[["Blue Team Labs Online-এর ফ্রি চ্যালেঞ্জ","https://blueteamlabs.online/","লগ, PCAP আর ফাইল বিশ্লেষণ।"],["LetsDefend-এর ফ্রি অংশ","https://letsdefend.io/","SOC অ্যানালিস্টের মতো alert যাচাই করা।"]],
 terms:[["Incident response","আক্রমণ ধরা পড়ার পর কী করতে হবে, তার প্রক্রিয়া।"],["IOC","Indicator of Compromise: আক্রমণের চিহ্ন, যেমন সন্দেহজনক IP বা ফাইল।"]]},
{t:"Detection-এর চোখে আক্রমণ",g:"নিজের ল্যাবে লগ দেখা",h:"২-৩ দিন",why:"নিজের AD ল্যাবে কোনো কাজ করে দেখো সেটা Windows Event Log-এ কেমন দেখায়। এতে রিপোর্টে detection-এর পরামর্শও দিতে পারবে।",
 tasks:[["Microsoft Learn-এ Sysmon-এর পরিচিতি পড়ো","https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon","Windows-এ বিস্তারিত লগ রাখার ফ্রি টুল।"],["নিজের AD ল্যাবে Sysmon চালু করে লগইন, নতুন ইউজার বানানোর মতো কাজের লগ দেখো",null,"শুধু নিজের ল্যাবে।"]],
 terms:[["Event log","Windows-এ ঘটে যাওয়া ঘটনার রেকর্ড।"],["Detection engineering","আক্রমণ ধরার নিয়ম বানানো আর উন্নত করা।"]]},
{t:"Purple team চিন্তা",g:"আক্রমণ আর ডিফেন্স একসাথে",h:"১-২ দিন",why:"প্রফেশনাল লেভেলে রিপোর্টে শুধু বাগ না, কীভাবে ধরা যায় সেটাও লেখা হয়। একে purple teaming বলে।",
 tasks:[["MITRE ATT&CK-এ ৫টা কৌশলের পেজে Detection আর Mitigation অংশ পড়ো","https://attack.mitre.org/","প্রতিটার জন্য নোটে লিখো: কীভাবে ধরা যায়।"],["আগের একটা পেনটেস্ট রিপোর্টে প্রতিটা ফাইন্ডিংয়ের পাশে detection-এর পরামর্শ যোগ করো",null,"এতে রিপোর্ট অনেক বেশি পেশাদার হয়।"]],
 terms:[["Purple team","red (আক্রমণ) আর blue (ডিফেন্স) টিম একসাথে কাজ করা।"]]}
]},

{s:3,t:"AI আর LLM সিকিউরিটি",k:"P18",d:"নতুন আর দ্রুত বাড়তে থাকা ক্ষেত্র। ML-এর অভিজ্ঞতা থাকলে এখানে অন্যদের চেয়ে এগিয়ে থাকবে।",days:[
{t:"OWASP Top 10 for LLM",g:"AI অ্যাপের ঝুঁকি",h:"২ দিন",why:"কোম্পানিগুলো দ্রুত চ্যাটবট আর AI ফিচার যোগ করছে, আর সেগুলোর নিরাপত্তা জানা মানুষ খুব কম।",
 tasks:[["OWASP Top 10 for LLM Applications পড়ো","https://genai.owasp.org/llm-top-10/","prompt injection, ডেটা লিক আর অতিরিক্ত ক্ষমতার মতো ঝুঁকি।"],["PortSwigger-এর Web LLM attacks টপিক আর ল্যাব",PS+"llm-attacks",SOL]],
 terms:[["Prompt injection","ইনপুটের মাধ্যমে AI-কে তার নির্দেশনা ভুলিয়ে অন্য কাজ করানো।"],["LLM","Large Language Model, যেমন চ্যাটবটের পেছনের মডেল।"]],fix:"AI-কে কম ক্ষমতা দেওয়া, তার আউটপুট অবিশ্বস্ত ধরে নেওয়া, আর গুরুত্বপূর্ণ কাজে মানুষের অনুমোদন রাখা।"},
{t:"ML মডেলের নিরাপত্তা",g:"মডেল নিজেই যখন টার্গেট",h:"২ দিন",why:"adversarial example, ডেটা poisoning আর মডেল চুরি নিয়ে গবেষণা দ্রুত বাড়ছে। এটা গবেষণা আর চাকরি দুই দিকেই সুযোগ খোলে।",
 tasks:[["MITRE ATLAS ঘুরে দেখো","https://atlas.mitre.org/","AI সিস্টেমের বিরুদ্ধে আক্রমণের কৌশলের তালিকা, ATT&CK-এর মতো।"],["নোটে লিখো: তোমার নিজের একটা ML প্রজেক্টে কোন ঝুঁকি থাকতে পারে আর কীভাবে কমানো যায়",null,"নিজের কাজের সাথে মেলালে বোঝা গভীর হয়।"]],
 terms:[["Adversarial example","ইচ্ছা করে সামান্য বদলানো ইনপুট, যা মডেলকে ভুল উত্তর দেওয়ায়।"],["Data poisoning","ট্রেনিং ডেটায় ক্ষতিকর ডেটা মিশিয়ে দেওয়া।"]]}
]},

{s:3,t:"সার্টিফিকেশন আর ক্যারিয়ার",k:"P19",d:"দক্ষতা প্রমাণ আর চাকরি পাওয়া। এখানে ফ্রি অপশনগুলো আগে, আর পেইডগুলোর খরচ খোলাখুলি লেখা।",days:[
{t:"ফ্রি সার্টিফিকেশন",g:"টাকা ছাড়া প্রথম সার্টিফিকেট",h:"২-৩ সপ্তাহ",why:"ISC2 Certified in Cybersecurity (CC) এন্ট্রি-লেভেলের একটা সার্টিফিকেশন। ISC2 মাঝে মাঝে এর ট্রেনিং আর পরীক্ষা ফ্রিতে দেয়, আর এটা CV-তে ভালো একটা শুরু।",
 tasks:[["ISC2 CC পেজ পড়ো, এখন ফ্রি অফার চলছে কিনা দেখো","https://www.isc2.org/certifications/cc","অফারের শর্ত সময়ের সাথে বদলায়, তাই অফিশিয়াল পেজেই যাচাই করো।"],["Google Cybersecurity Certificate চালু থাকলে শেষ করো","https://www.coursera.org/professional-certificates/google-cybersecurity","Coursera-তে financial aid-এর জন্য আবেদন করা যায়।"]],
 terms:[["ISC2 CC","ISC2-এর এন্ট্রি-লেভেলের সাইবার সিকিউরিটি সার্টিফিকেশন।"]]},
{t:"পেইড সার্টিফিকেশনের পরিকল্পনা",g:"কোনটা কখন, কত খরচ",h:"১ দিন",why:"সব সার্টিফিকেশন সমান না। কোন চাকরির জন্য কোনটা কাজে লাগে, আর টাকা কীভাবে জমাবে, তার পরিকল্পনা দরকার।",
 tasks:[["CompTIA Security+ পেজ দেখো","https://www.comptia.org/certifications/security","Gulf আর সরকারি চাকরিতে খুব চাওয়া হয়।"],["BSCP পেজ আবার দেখো","https://portswigger.net/web-security/certification","ওয়েব আর অ্যাপসেকের জন্য সবচেয়ে কম খরচে সবচেয়ে বেশি মূল্য।"],["OffSec OSCP (PEN-200) পেজ দেখো","https://www.offsec.com/courses/pen-200/","পেনটেস্টিংয়ের সবচেয়ে পরিচিত সার্টিফিকেশন, তবে দামি। সাধারণত Stage 2-3 শেষ করে, চাকরি পাওয়ার পরে নেওয়া হয়।"],["নোটে নিজের ক্রম ঠিক করো (যেমন: CC → BSCP → Security+ বা OSCP)",null,"কোন চাকরি চাও তার উপর নির্ভর করে।"]],
 terms:[["OSCP","OffSec-এর হাতে-কলমে পেনটেস্টিং সার্টিফিকেশন।"],["Security+","CompTIA-র জনপ্রিয় সাধারণ সিকিউরিটি সার্টিফিকেশন।"]]},
{t:"পোর্টফোলিও",g:"যা করেছ তা দেখানো",h:"৩-৪ দিন",why:"সিকিউরিটিতে নিয়োগকর্তারা ডিগ্রির চেয়ে বেশি দেখে তুমি আসলে কী করেছ। writeup, টুল, CVE আর bug bounty-র রেকর্ড, এগুলোই তোমার প্রমাণ।",
 tasks:[["পোর্টফোলিও সাইটে একটা Security সেকশন রাখো: writeup, টুল, সার্টিফিকেশন",null,"GitHub Pages দিয়ে ফ্রিতে নিজের সাইট বানানো যায়।"],["অন্তত ৫টা ভালো writeup প্রকাশ করো (শুধু অনুমোদিত ল্যাব বা রিটায়ার্ড মেশিনের)",null,"প্রতিটায় শেষে \"কীভাবে ঠেকানো যায়\" অংশ রাখো।"],["HackerOne বা Bugcrowd প্রোফাইল পাবলিক করো, রিপোর্টগুলো যোগ হতে থাকবে",null,"অল্প হলেও আসল রেকর্ড অনেক কাজের।"]],
 terms:[["Portfolio","নিজের কাজের প্রমাণের সংগ্রহ।"]]},
{t:"কোন চাকরি, কোথায়",g:"নিজের পথ বেছে নেওয়া",h:"১-২ দিন",why:"সাইবার সিকিউরিটিতে অনেক রকম চাকরি আছে। তোমার ML আর ডেটার পটভূমি কোথায় সবচেয়ে কাজে লাগবে, সেটা ভেবে বেছে নাও।",
 tasks:[["নোটে তুলনা করো: SOC Analyst, Junior Pentester, AppSec Engineer, Cloud Security, AI Security",null,"প্রতিটার কাজ, দরকারি দক্ষতা আর প্রথম চাকরি পাওয়া কতটা সহজ।"],["LinkedIn-এ এই পদগুলোর ১০টা আসল চাকরির বিজ্ঞাপন পড়ে কমন দক্ষতাগুলো নোট করো","https://www.linkedin.com/jobs/","বাংলাদেশ, Gulf, সিঙ্গাপুর আর রিমোট আলাদা করে দেখো।"],["bdjobs-এ বাংলাদেশের সিকিউরিটি চাকরি দেখো","https://www.bdjobs.com/","ব্যাংক, টেলিকম আর ফিনটেক সবচেয়ে বেশি নিয়োগ দেয়।"]],
 terms:[["AppSec","Application Security: সফটওয়্যারের নিরাপত্তা নিশ্চিত করার কাজ।"]]},
{t:"CV আর ইন্টারভিউ",g:"চাকরির জন্য প্রস্তুতি",h:"৩-৪ দিন",why:"সিকিউরিটি ইন্টারভিউতে সাধারণত টেকনিক্যাল প্রশ্ন, হাতে-কলমে কাজ আর পরিস্থিতিভিত্তিক প্রশ্ন থাকে।",
 tasks:[["CV-তে আলাদা Security সেকশন: দক্ষতা, প্ল্যাটফর্ম র‍্যাংক, writeup লিংক, সার্টিফিকেশন",null,"\"PortSwigger-এর N টা ল্যাব\" বা \"HTB-তে N টা মেশিন\" এর মতো নির্দিষ্ট সংখ্যা দাও।"],["নিজের নোট থেকে ৩০টা কমন ইন্টারভিউ প্রশ্নের উত্তর নিজের ভাষায় লিখো",null,"যেমন: HTTPS কীভাবে কাজ করে, XSS আর CSRF-এর পার্থক্য, Kerberos কী।"],["একজন বন্ধুর সাথে mock ইন্টারভিউ দাও, বা নিজে রেকর্ড করে শোনো",null,"বুঝিয়ে বলতে পারাটাও একটা দক্ষতা।"]],
 terms:[]},
{t:"কমিউনিটি আর নিয়মিত শেখা",g:"সারাজীবন আপডেট থাকা",h:"চলমান",why:"এই ফিল্ড প্রতি মাসে বদলায়। প্রফেশনালরা নিয়মিত পড়ে, লেখে আর কমিউনিটির সাথে থাকে।",
 tasks:[["PortSwigger Research ব্লগ নিয়মিত পড়ো","https://portswigger.net/research","নতুন ধরনের ওয়েব দুর্বলতা প্রায়ই প্রথম এখানেই আসে।"],["সাপ্তাহিক রুটিন: ১টা writeup, ২-৩টা Hacktivity রিপোর্ট পড়া, নতুন ল্যাব",null,"অল্প অল্প কিন্তু নিয়মিত।"],["স্থানীয় বা অনলাইন CTF টিমে যোগ দাও",null,"টিমে খেললে দ্রুত শেখা যায়, আর নেটওয়ার্কও তৈরি হয়।"]],
 terms:[]}
]},

{s:3,t:"ক্যাপস্টোন",k:"P20",d:"সব কিছু একসাথে: একটা পুরো এনগেজমেন্ট, শুরু থেকে প্রফেশনাল রিপোর্ট পর্যন্ত। শুধু নিজের ল্যাবে।",days:[
{t:"নিজের কোম্পানি-ল্যাব",g:"ওয়েব + AD + ক্লাউড একসাথে",h:"এক সপ্তাহ",why:"আসল পেনটেস্টে সব কিছু মেশানো থাকে। নিজের ল্যাবে একটা ছোট কাল্পনিক কোম্পানি বানালে সব দক্ষতা একসাথে প্র্যাকটিস হয়।",
 tasks:[["নিজের ল্যাবে Juice Shop, AD ল্যাব আর একটা VulnHub মেশিন একই host-only নেটওয়ার্কে রাখো",null,"এটাই তোমার কাল্পনিক কোম্পানি।"],["নিজের জন্য Rules of Engagement আর scope লিখো",null,"আসল কাজের মতো।"]],
 terms:[["Engagement","একটা নির্দিষ্ট ক্লায়েন্টের জন্য পুরো পেনটেস্ট প্রজেক্ট।"]]},
{t:"পুরো এনগেজমেন্ট",g:"শুরু থেকে শেষ",h:"১-২ সপ্তাহ",why:"PTES-এর সব ধাপ নিজে করবে। এটা কোনো সার্টিফিকেশন পরীক্ষার মতোই।",
 tasks:[["Recon → enumeration → testing → findings, প্রতিটা ধাপের নোট রাখো",null,"P11-এর মেথডলজি মেনে।"],["প্রতিটা ফাইন্ডিংয়ে CVSS, প্রমাণ, ঠিক করার উপায় আর detection-এর পরামর্শ রাখো",null,"P17-এর purple team চিন্তা যোগ করো।"]],
 terms:[]},
{t:"ফাইনাল রিপোর্ট আর প্রকাশ",g:"পোর্টফোলিওর সেরা জিনিস",h:"৩-৪ দিন",why:"একটা পূর্ণাঙ্গ, প্রফেশনাল মানের নমুনা রিপোর্ট ইন্টারভিউতে দেখানোর মতো সবচেয়ে শক্তিশালী জিনিস।",
 tasks:[["Executive summary থেকে appendix পর্যন্ত পুরো রিপোর্ট লিখো",null,"P11-এর পাবলিক রিপোর্টগুলো মডেল হিসেবে ধরো।"],["রিপোর্টটা PDF করে পোর্টফোলিওতে রাখো, সাথে ল্যাবের বিবরণ",null,"পরিষ্কার লিখে দাও এটা নিজের বানানো ল্যাবে করা।"],["রোডম্যাপ শেষ! এখান থেকে নিয়মিত bug bounty, সার্টিফিকেশন আর চাকরির আবেদন চালিয়ে যাও",null,"শেখা কখনো শেষ হয় না, কিন্তু তুমি এখন প্রফেশনাল পথে।"]],
 terms:[]}
]}
);
})();
