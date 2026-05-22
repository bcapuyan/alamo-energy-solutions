/* ============================================================
   Alamo Energy Solutions — Bilingual Chatbot Widget
   Friendly & casual tone | English + Spanish
   ============================================================ */
(function () {
  'use strict';

  /* ── Content ─────────────────────────────────────────────── */
  var C = {
    en: {
      header: 'Alamo Energy',
      subhead: 'Usually replies in seconds ⚡',
      placeholder: 'Ask me anything…',
      otherLang: 'Español',
      welcome: "Hey there! 👋 I'm your Alamo Energy assistant. I can help with questions about solar panels, battery backup, packages, financing, and more. What can I help you with today?",
      quickReplies: [
        { label: '⚡ Packages & Pricing', key: 'packages' },
        { label: '💰 Financing Options',  key: 'financing' },
        { label: '🏠 Free Roof Offer',    key: 'freeroof' },
        { label: '☀️ Solar Panels',       key: 'solar' },
        { label: '🔋 Battery Backup',     key: 'battery' },
        { label: '🏙️ Service Area',       key: 'area' },
        { label: '🚀 Get Started',        key: 'getstarted' },
        { label: '💬 Talk to Someone',    key: 'contact' }
      ],
      responses: {
        packages: "We've got a few options depending on your home's needs:\n\n**Essential Backup** — Covers key circuits like lights, fridge, and phones. Great starting point.\n\n**Whole-Home Backup** — Keeps everything running during an outage, including HVAC.\n\n**Solar + Battery Combo** — Our most popular option. Generate your own power AND have backup storage.\n\nWant me to help figure out which one fits your home? 😊",
        financing: "Great news — we work with multiple lenders to make going solar as easy as possible. 💸\n\nMost of our customers pay **$0 down**, and monthly payments often come out to less than what they were paying CPS Energy. We also help you take advantage of the **federal 30% tax credit** (ITC).\n\nWant me to connect you with someone who can give you actual numbers for your home?",
        freeroof: "Yep, it's real! 🎉 When you bundle **solar panels + battery backup**, we'll throw in a **brand-new roof at no extra cost**. We're GAF Certified, so you know it's quality work.\n\nThis deal is limited, so if you've been thinking about a new roof anyway — this is a perfect time. Want more details?",
        solar: "Solar panels in San Antonio are a no-brainer given how much sun we get! ☀️ We install panels from top-tier brands and custom-size every system based on your actual energy usage — no guessing.\n\nWe also pair solar with battery storage so you stay powered even when the grid goes down. Want to know what size system your home might need?",
        battery: "Battery backup is kind of our specialty. 🔋 We install **Tesla Powerwall**, **Franklin WH**, **SolarEdge**, and **Enphase** — all top-tier brands with great warranties.\n\nDuring an outage, your battery kicks in automatically — no interruption, no fumbling with generators. Perfect for San Antonio storms and ERCOT grid issues.\n\nWant to know which battery is the best fit for your setup?",
        area: "We serve **San Antonio and the surrounding areas** in South Central Texas. 📍 If you're nearby and not sure if we cover your neighborhood, just reach out and we'll confirm!\n\n📧 hello@alamoenergysolutions.com",
        getstarted: "Awesome, let's do it! 🚀 The easiest way to get started is to fill out our quick sizing form — it takes about 2 minutes and helps us give you real numbers for your home.\n\n👉 [Size Your System](book-online.html)\n\nOr I can grab your info and have someone from the team reach out to you directly!",
        contact: "Happy to connect you with the team! 😊\n\n📧 **Email:** hello@alamoenergysolutions.com\n📍 **Location:** San Antonio, Texas\n\nYou can also use the form on our [Get Started page](book-online.html) and someone will follow up quickly.\n\nWant me to grab your contact info so we can reach out to you?",
        tax: "The **Federal Solar Tax Credit (ITC)** lets you deduct **30% of your total system cost** from your federal taxes. That's a huge savings! 💰\n\nFor example, on a $25,000 system, that's $7,500 back. We'll help walk you through how to claim it. Want more details on financing options that factor this in?",
        cps: "Great question! CPS Energy offers a **battery incentive program** for San Antonio homeowners. 🏠 By enrolling, your battery helps stabilize the grid during peak hours (3–7pm in summer), and you earn credits on your bill.\n\nIt's basically getting paid to have a battery backup. We handle the enrollment process for you!",
        installation: "Our install process is pretty smooth! 🛠️ Here's how it works:\n\n1️⃣ **System sizing** — We review your usage and goals\n2️⃣ **Choose your package** — We match you with the right solution\n3️⃣ **Permits & approval** — We handle all the paperwork\n4️⃣ **Installation day** — Our crew gets it done, usually in 1–2 days\n5️⃣ **Go live!** — Your system is activated and you're good to go\n\nTypical timeline from signing to live system is 4–8 weeks. Want to get the ball rolling?",
        'default': "Good question! I might not have the exact answer for that, but our team definitely does. 😊\n\nYou can reach us at **hello@alamoenergysolutions.com** or use our [Get Started form](book-online.html) and someone will follow up with you soon.\n\nIs there anything else I can help with?"
      },
      keywords: {
        packages:      ['package', 'packages', 'pricing', 'price', 'cost', 'how much', 'plans', 'options', 'tier', 'essential', 'whole home', 'whole-home'],
        financing:     ['financ', 'loan', 'payment', 'monthly', 'zero down', 'credit', 'lend', 'afford', 'pay', 'borrow', 'interest', 'rate'],
        freeroof:      ['free roof', 'roof', 'roofing', 'gaf', 'new roof', 'shingles'],
        solar:         ['solar', 'panel', 'panels', 'photovoltaic', 'pv', 'sun', 'sunlight', 'generate', 'generation'],
        battery:       ['battery', 'batteries', 'backup', 'powerwall', 'franklin', 'enphase', 'storage', 'outage', 'blackout', 'generator', 'ercot', 'grid'],
        area:          ['area', 'service area', 'location', 'san antonio', 'where', 'cover', 'neighborhood', 'zip', 'city'],
        getstarted:    ['get started', 'start', 'begin', 'sign up', 'signup', 'book', 'schedule', 'appointment', 'consult', 'quote', 'estimate'],
        contact:       ['contact', 'talk', 'call', 'phone', 'email', 'reach', 'human', 'person', 'agent', 'representative', 'rep', 'speak'],
        tax:           ['tax', 'itc', 'federal', 'deduct', 'credit', 'incentive', 'rebate', '30%'],
        cps:           ['cps', 'cps energy', 'utility', 'credit', 'peak', 'demand', 'enroll', 'program'],
        installation:  ['install', 'installation', 'how long', 'timeline', 'process', 'permit', 'crew', 'when', 'time']
      },
      lead: {
        offerFollowUp: "Want someone from the Alamo Energy team to follow up with you? Just takes a second! 😊",
        askName:  "Awesome! What's your name?",
        askEmail: "Got it, {name}! What's the best email to reach you?",
        askPhone: "And a phone number? (totally optional — skip if you prefer email only)",
        askNote:  "Anything specific you'd like us know or look into for you?",
        confirm:  "You're all set, {name}! 🎉 Someone from the team will reach out to you at {email} soon. Thanks for reaching out!",
        skipPhone: "No problem! We'll use your email.",
        noThanks: "No worries at all! You can always reach us at hello@alamoenergysolutions.com whenever you're ready. 😊",
        yesWords: ['yes', 'yeah', 'yep', 'sure', 'ok', 'okay', 'sounds good', 'please', 'yup', 'definitely', 'of course', 'absolutely'],
        noWords:  ['no', 'nope', 'not now', 'later', 'no thanks', 'nah', 'pass', 'skip', "don't", 'no thank']
      }
    },

    es: {
      header: 'Alamo Energy',
      subhead: 'Respondemos en segundos ⚡',
      placeholder: 'Escribe tu pregunta…',
      otherLang: 'English',
      welcome: "¡Hola! 👋 Soy tu asistente de Alamo Energy. Puedo ayudarte con preguntas sobre paneles solares, baterías de respaldo, paquetes, financiamiento y más. ¿En qué te puedo ayudar hoy?",
      quickReplies: [
        { label: '⚡ Paquetes y Precios',   key: 'packages' },
        { label: '💰 Opciones de Pago',     key: 'financing' },
        { label: '🏠 Techo Gratis',         key: 'freeroof' },
        { label: '☀️ Paneles Solares',      key: 'solar' },
        { label: '🔋 Batería de Respaldo',  key: 'battery' },
        { label: '🏙️ Área de Servicio',    key: 'area' },
        { label: '🚀 Comenzar',             key: 'getstarted' },
        { label: '💬 Hablar con Alguien',   key: 'contact' }
      ],
      responses: {
        packages: "Tenemos varias opciones según las necesidades de tu hogar:\n\n**Respaldo Esencial** — Cubre circuitos clave como luces, refrigerador y teléfonos. Ideal para empezar.\n\n**Respaldo Total del Hogar** — Mantiene todo funcionando durante un corte, incluyendo el aire acondicionado.\n\n**Solar + Batería** — Nuestra opción más popular. ¡Genera tu propia energía Y ten almacenamiento de respaldo!\n\n¿Quieres que te ayude a encontrar el paquete ideal para tu hogar? 😊",
        financing: "¡Buenas noticias! Trabajamos con múltiples financieras para que pasarte a solar sea lo más fácil posible. 💸\n\nLa mayoría de nuestros clientes pagan **$0 de entrada**, y los pagos mensuales suelen salir menos de lo que pagaban a CPS Energy. Tambiìn te ayudamos con el **crédito fiscal federal del 30%** (ITC).\n\n¿Quieres que te conectemos con alguien que te dé números reales para tu hogar?",
        freeroof: "¡Sí, es verdad! 🎉 Cuando combinas **paneles solares + batería de respaldo**, te incluimos un **techo nuevo sin costo adicional**. Somos Certificados GAF, así que puedes confiar en la calidad.\n\nEsta oferta es por tiempo limitado. Si de todos modos estabas pensando en un techo nuevo — ¡este es el momento perfecto! ¿Quieres más detalles?",
        solar: "¡Los paneles solares en San Antonio son una excelente idea con todo el sol que tenemos! ☀️ Instalamos paneles de marcas de primera y diseñamos cada sistema según tu consumo real de energía, sin suposiciones.\n\nTambiìn combinamos solar con almacenamiento de batería para que sigas con electricidad aunque la red falle. ¿Quieres saber qué tamaño de sistema necesita tu hogar?",
        battery: "Las baterías de respaldo son nuestra especialidad. 🔋 Instalamos **Tesla Powerwall**, **Franklin WH**, **SolarEdge** y **Enphase** — todas marcas de primera con excelentes garantías.\n\nDurante un apagón, tu batería se activa automáticamente, sin interrupciones ni necesidad de generadores. Perfecta para tormentas en San Antonio y problemas con la red de ERCOT.\n\n¿Quieres saber cuál batería es la más adecuada para tu situación?",
        area: "Atendemos **San Antonio y las áreas circundantes** en el centro-sur de Texas. 📍 Si no estás seguro si cubrimos tu colonia, ¡contáctanos y confirmamos!\n\n📧 hello@alamoenergysolutions.com",
        getstarted: "¡Genial, empecemos! 🚀 La forma más fácil es llenar nuestro formulario rápido de cálculo de sistema — toma unos 2 minutos y nos ayuda a darte números reales para tu hogar.\n\n👉 [Calcular Mi Sistema](book-online.html)\n\n¡O puedo tomar tu información para que alguien del equipo te contacte directamente!",
        contact: "¡Con gusto te conecto con el equipo! 😊\n\n📧 **Correo:** hello@alamoenergysolutions.com\n📍 **Ubicación:** San Antonio, Texas\n\nTambién puedes usar el formulario en nuestra [página de inicio](book-online.html) y alguien te responderá pronto.\n\n¿Quieres que tome tus datos para que te contactemos?",
        tax: "El **Crédito Fiscal Federal Solar (ITC)** te permite deducir el **30% del costo total del sistema** de tus impuestos federales. ¡Es un ahorro enorme! 💰\n\nPor ejemplo, en un sistema de $25,000, eso es $7,500 de regreso. Te ayudamos a gestionar todo. ¿Quieres más detalles sobre opciones de financiamiento?",
        cps: "¡Buena pregunta! CPS Energy ofrece un **programa de incentivos para baterías** en San Antonio. 🏠 Al inscribirte, tu batería ayuda a estabilizar la red en horas pico (3–7pm en verano) y ganas créditos en tu factura.\n\nEs básicamente que te paguen por tener una batería de respaldo. ¡Nosotros manejamos todo el proceso de inscripción!",
        installation: "¡Nuestro proceso de instalación es bastante sencillo! 🛠️ Así funciona:\n\n1️⃣ **Diseño del sistema** — Revisamos tu consumo y objetivos\n2️⃣ **Elige tu paquete** — Te emparejamos con la solución correcta\n3️⃣ **Permisos y aprobación** — Nosotros manejamos el papeleo\n4️⃣ **Día de instalación** — Nuestro equipo lo hace en 1–2 días\n5️⃣ **¡En marcha!** — Tu sistema se activa y listo\n\nEl tiempo típico desde la firma hasta el sistema en funcionamiento es de 4–8 semanas. ¿Quieres dar el primer paso?",
        'default': "¡Buena pregunta! Puede que no tenga la respuesta exacta, pero nuestro equipo definitivamente sí. 😊\n\nPuedes escribirnos a **hello@alamoenergysolutions.com** o usar nuestro [formulario de inicio](book-online.html) y alguien te responderá pronto.\n\n¿Hay algo más en lo que pueda ayudarte?"
      },
      keywords: {
        packages:      ['paquete', 'paquetes', 'precio', 'precios', 'costo', 'cuánto', 'cuanto', 'plan', 'planes', 'opcion', 'opción', 'opciones', 'esencial', 'completo'],
        financing:     ['financ', 'prestamo', 'préstamo', 'pago', 'mensual', 'sin enganche', 'crédito', 'credito', 'pagar', 'interés', 'interes'],
        freeroof:      ['techo gratis', 'techo', 'tejado', 'gaf', 'nuevo techo', 'tejas'],
        solar:         ['solar', 'panel', 'paneles', 'fotovoltaico', 'sol', 'luz solar', 'generacion', 'generación'],
        battery:       ['batería', 'bateria', 'baterias', 'baterías', 'respaldo', 'powerwall', 'franklin', 'enphase', 'almacenamiento', 'apagón', 'apagon', 'corte', 'generador', 'ercot'],
        area:          ['área', 'area', 'servicio', 'ubicacion', 'ubicación', 'san antonio', 'dónde', 'donde', 'colonia', 'zip', 'ciudad'],
        getstarted:    ['empezar', 'comenzar', 'inicio', 'cita', 'consulta', 'cotizacion', 'cotización', 'presupuesto', 'inscribir', 'agendar'],
        contact:       ['contacto', 'contactar', 'llamar', 'teléfono', 'telefono', 'correo', 'hablar', 'persona', 'agente', 'representante'],
        tax:           ['impuesto', 'impuestos', 'itc', 'federal', 'deducir', 'credito', 'crédito', 'incentivo', 'reembolso', '30%'],
        cps:           ['cps', 'cps energy', 'utilidad', 'crédito', 'credito', 'pico', 'demanda', 'programa'],
        installation:  ['instalar', 'instalación', 'instalacion', 'cuánto tiempo', 'proceso', 'permiso', 'equipo', 'cuándo', 'cuando', 'tiempo']
      },
      lead: {
        offerFollowUp: "¿Quieres que alguien del equipo de Alamo Energy te contacte? ¡Solo toma un momento! 😊",
        askName:  "¡Genial! ¿Cuál es tu nombre?",
        askEmail: "¡Perfecto, {name}! ¿Cuál es tu correo electrónico?",
        askPhone: "¿Y un número de teléfono? (opcional — puedes saltarte esta parte si prefieres solo correo)",
        askNote:  "¿Hay algo específico que quieras que revisemos o que debamos saber?",
        confirm:  "¡Todo listo, {name}! 🎉 Alguien del equipo te contactará en {email} pronto. ¡Gracias!",
        skipPhone: "¡Sin problema! Usaremos tu correo.",
        noThanks: "¡Sin problema! Siempre puedes escribirnos a hello@alamoenergysolutions.com cuando estés listo. 😊",
        yesWords: ['sí', 'si', 'sip', 'claro', 'ok', 'está bien', 'por favor', 'dale', 'ándale', 'andale', 'bueno', 'claro que sí', 'definitivamente'],
        noWords:  ['no', 'nope', 'ahorita no', 'después', 'despues', 'no gracias', 'paso', 'omitir', 'saltar']
      }
    }
  };

  /* ── State ────────────────────────────────────────────────── */
  var lang = (navigator.language || 'en').toLowerCase().startsWith('es') ? 'es' : 'en';
  var isOpen = false;
  var leadStep = null; // null | 'awaiting' | 'name' | 'email' | 'phone' | 'note'
  var leadData = {};
  var msgQueue = [];
  var typing = false;

  /* ── Helpers ──────────────────────────────────────────────── */
  function t() { return C[lang]; }

  function renderMd(text) {
    return text
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$1" target="_blank">$1</a>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, function(m, label, href) {
        return '<a href="' + href + '">' + label + '</a>';
      })
      .replace(/\n/g, '<br>');
  }

  // Fix markdown links properly
  function parseText(text) {
    // Bold
    var out = text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    // Links [label](url)
    out = out.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
    // Line breaks
    out = out.replace(/\n/g, '<br>');
    return out;
  }

  function matchKey(input) {
    var lower = input.toLowerCase();
    var keys = t().keywords;
    for (var key in keys) {
      var words = keys[key];
      for (var i = 0; i < words.length; i++) {
        if (lower.indexOf(words[i]) !== -1) return key;
      }
    }
    return 'default';
  }

  function isYes(input) {
    var lower = input.toLowerCase().trim();
    var yesWords = t().lead.yesWords;
    for (var i = 0; i < yesWords.length; i++) {
      if (lower === yesWords[i] || lower.indexOf(yesWords[i]) === 0) return true;
    }
    return false;
  }

  function isNo(input) {
    var lower = input.toLowerCase().trim();
    var noWords = t().lead.noWords;
    for (var i = 0; i < noWords.length; i++) {
      if (lower === noWords[i] || lower.indexOf(noWords[i]) === 0) return true;
    }
    return false;
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  /* ── DOM refs ─────────────────────────────────────────────── */
  var $win, $msgs, $input, $sendBtn, $fab, $qr;

  /* ── CSS Injection ────────────────────────────────────────── */
  function injectCSS() {
    var style = document.createElement('style');
    style.textContent = [
      '#ae-fab{position:fixed;bottom:24px;right:24px;z-index:9998;width:60px;height:60px;border-radius:50%;background:#c8a96e;border:none;cursor:pointer;box-shadow:0 4px 20px rgba(0,0,0,.25);display:flex;align-items:center;justify-content:center;transition:transform .2s,box-shadow .2s;}',
      '#ae-fab:hover{transform:scale(1.08);box-shadow:0 6px 24px rgba(0,0,0,.3);}',
      '#ae-fab svg{pointer-events:none;}',
      '#ae-fab .ae-badge{position:absolute;top:4px;right:4px;width:12px;height:12px;background:#e74c3c;border-radius:50%;border:2px solid #fff;}',
      '#ae-win{position:fixed;bottom:96px;right:24px;z-index:9999;width:360px;max-width:calc(100vw - 32px);height:520px;max-height:calc(100vh - 120px);background:#fff;border-radius:16px;box-shadow:0 8px 40px rgba(0,0,0,.18);display:flex;flex-direction:column;overflow:hidden;transform:scale(.92) translateY(16px);opacity:0;pointer-events:none;transition:transform .25s cubic-bezier(.34,1.56,.64,1),opacity .2s;}',
      '#ae-win.ae-open{transform:scale(1) translateY(0);opacity:1;pointer-events:all;}',
      '#ae-header{background:#1a2535;color:#f5f0e8;padding:14px 16px;display:flex;align-items:center;gap:12px;flex-shrink:0;}',
      '#ae-header .ae-avatar{width:38px;height:38px;background:#c8a96e;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;}',
      '#ae-header .ae-title{flex:1;}',
      '#ae-header .ae-title strong{display:block;font-size:14px;line-height:1.2;}',
      '#ae-header .ae-title span{font-size:11px;opacity:.7;}',
      '#ae-header .ae-controls{display:flex;gap:6px;}',
      '#ae-lang-btn,#ae-close-btn{background:rgba(255,255,255,.12);border:none;color:#f5f0e8;border-radius:8px;cursor:pointer;font-size:11px;padding:4px 8px;transition:background .15s;}',
      '#ae-lang-btn:hover,#ae-close-btn:hover{background:rgba(255,255,255,.22);}',
      '#ae-close-btn{font-size:16px;padding:2px 8px;}',
      '#ae-msgs{flex:1;overflow-y:auto;padding:14px 14px 6px;display:flex;flex-direction:column;gap:10px;scroll-behavior:smooth;}',
      '#ae-msgs::-webkit-scrollbar{width:4px;}',
      '#ae-msgs::-webkit-scrollbar-thumb{background:#ddd;border-radius:4px;}',
      '.ae-msg{max-width:82%;line-height:1.5;font-size:13.5px;padding:10px 13px;border-radius:14px;word-break:break-word;}',
      '.ae-msg a{color:#c8a96e;}',
      '.ae-bot{background:#f0f0f0;color:#1a2535;border-bottom-left-radius:4px;align-self:flex-start;}',
      '.ae-user{background:#1a2535;color:#f5f0e8;border-bottom-right-radius:4px;align-self:flex-end;}',
      '.ae-typing{display:flex;gap:5px;padding:12px 14px;align-items:center;}',
      '.ae-typing span{width:8px;height:8px;background:#aaa;border-radius:50%;animation:ae-bounce 1.2s infinite;}',
      '.ae-typing span:nth-child(2){animation-delay:.2s;}',
      '.ae-typing span:nth-child(3){animation-delay:.4s;}',
      '@keyframes ae-bounce{0%,80%,100%{transform:translateY(0)}40%{transform:translateY(-7px)}}',
      '#ae-qr{padding:8px 14px 10px;display:flex;flex-wrap:wrap;gap:6px;flex-shrink:0;border-top:1px solid #f0f0f0;}',
      '.ae-chip{background:#f5f0e8;border:1px solid #e0d8cc;border-radius:20px;padding:5px 12px;font-size:12px;cursor:pointer;color:#1a2535;transition:background .15s,border-color .15s;white-space:nowrap;}',
      '.ae-chip:hover{background:#e8dfc8;border-color:#c8a96e;}',
      '#ae-input-row{display:flex;gap:8px;padding:10px 12px 12px;border-top:1px solid #f0f0f0;flex-shrink:0;}',
      '#ae-input{flex:1;border:1.5px solid #e0d8cc;border-radius:24px;padding:8px 14px;font-size:13.5px;outline:none;font-family:inherit;transition:border-color .15s;}',
      '#ae-input:focus{border-color:#c8a96e;}',
      '#ae-send{background:#c8a96e;border:none;border-radius:50%;width:38px;height:38px;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background .15s;}',
      '#ae-send:hover{background:#b8945a;}',
      '#ae-send svg{pointer-events:none;}'
    ].join('');
    document.head.appendChild(style);
  }

  /* ── Build DOM ────────────────────────────────────────────── */
  function buildDOM() {
    // FAB button
    var fab = document.createElement('button');
    fab.id = 'ae-fab';
    fab.setAttribute('aria-label', 'Open chat');
    fab.innerHTML = '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg><span class="ae-badge"></span>';
    fab.addEventListener('click', toggleChat);

    // Chat window
    var win = document.createElement('div');
    win.id = 'ae-win';
    win.setAttribute('role', 'dialog');
    win.setAttribute('aria-label', 'Chat with Alamo Energy');
    win.innerHTML = [
      '<div id="ae-header">',
        '<div class="ae-avatar">⚡</div>',
        '<div class="ae-title"><strong id="ae-title-text"></strong><span id="ae-subhead-text"></span></div>',
        '<div class="ae-controls">',
          '<button id="ae-lang-btn" title="Switch language"></button>',
          '<button id="ae-close-btn" title="Close">✕</button>',
        '</div>',
      '</div>',
      '<div id="ae-msgs" aria-live="polite"></div>',
      '<div id="ae-qr"></div>',
      '<div id="ae-input-row">',
        '<input id="ae-input" type="text" autocomplete="off" />',
        '<button id="ae-send" aria-label="Send">',
          '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>',
        '</button>',
      '</div>'
    ].join('');

    document.body.appendChild(fab);
    document.body.appendChild(win);

    $fab    = fab;
    $win    = win;
    $msgs   = document.getElementById('ae-msgs');
    $input  = document.getElementById('ae-input');
    $sendBtn= document.getElementById('ae-send');
    $qr     = document.getElementById('ae-qr');

    document.getElementById('ae-close-btn').addEventListener('click', toggleChat);
    document.getElementById('ae-lang-btn').addEventListener('click', switchLang);
    $sendBtn.addEventListener('click', sendInput);
    $input.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') sendInput();
    });

    updateTexts();
  }

  function updateTexts() {
    var l = t();
    document.getElementById('ae-title-text').textContent = l.header;
    document.getElementById('ae-subhead-text').textContent = l.subhead;
    document.getElementById('ae-lang-btn').textContent = l.otherLang;
    $input.placeholder = l.placeholder;
  }

  /* ── Toggle ───────────────────────────────────────────────── */
  function toggleChat() {
    isOpen = !isOpen;
    if (isOpen) {
      $win.classList.add('ae-open');
      $fab.querySelector('.ae-badge').style.display = 'none';
      if ($msgs.children.length === 0) startChat();
      else setTimeout(function() { $input.focus(); }, 260);
    } else {
      $win.classList.remove('ae-open');
    }
  }

  function switchLang() {
    lang = lang === 'en' ? 'es' : 'en';
    updateTexts();
    resetChat();
  }

  function resetChat() {
    $msgs.innerHTML = '';
    $qr.innerHTML = '';
    leadStep = null;
    leadData = {};
    msgQueue = [];
    typing = false;
    startChat();
  }

  /* ── Chat flow ────────────────────────────────────────────── */
  function startChat() {
    addBotMsg(t().welcome, 0);
    setTimeout(renderQR, 700);
  }

  function addBotMsg(text, delay) {
    if (delay === undefined) delay = 600;
    msgQueue.push({ text: text, delay: delay });
    if (!typing) processQueue();
  }

  function processQueue() {
    if (msgQueue.length === 0) { typing = false; return; }
    typing = true;
    var item = msgQueue.shift();
    var dot = showTyping();
    var wait = Math.max(item.delay, Math.min(item.text.length * 18, 1800));
    setTimeout(function() {
      removeTyping(dot);
      var msg = document.createElement('div');
      msg.className = 'ae-msg ae-bot';
      msg.innerHTML = parseText(item.text);
      $msgs.appendChild(msg);
      scrollBottom();
      processQueue();
    }, wait);
  }

  function addUserMsg(text) {
    var msg = document.createElement('div');
    msg.className = 'ae-msg ae-user';
    msg.textContent = text;
    $msgs.appendChild(msg);
    scrollBottom();
  }

  function showTyping() {
    var dot = document.createElement('div');
    dot.className = 'ae-msg ae-bot ae-typing';
    dot.innerHTML = '<span></span><span></span><span></span>';
    $msgs.appendChild(dot);
    scrollBottom();
    return dot;
  }

  function removeTyping(dot) {
    if (dot && dot.parentNode) dot.parentNode.removeChild(dot);
  }

  function scrollBottom() {
    $msgs.scrollTop = $msgs.scrollHeight;
  }

  function renderQR() {
    $qr.innerHTML = '';
    if (leadStep) return;
    var qrs = t().quickReplies;
    for (var i = 0; i < qrs.length; i++) {
      (function(qr) {
        var chip = document.createElement('button');
        chip.className = 'ae-chip';
        chip.textContent = qr.label;
        chip.addEventListener('click', function() {
          addUserMsg(qr.label);
          $qr.innerHTML = '';
          respond(qr.key);
        });
        $qr.appendChild(chip);
      })(qrs[i]);
    }
  }

  function respond(key) {
    var resp = t().responses[key] || t().responses['default'];
    addBotMsg(resp);
    // After certain responses, offer lead capture
    if (key === 'contact' || key === 'getstarted' || key === 'packages' || key === 'financing') {
      setTimeout(function() {
        offerLead();
      }, (resp.length * 18) + 800);
    } else {
      setTimeout(renderQR, (resp.length * 18) + 800);
    }
  }

  function offerLead() {
    if (leadStep) return;
    leadStep = 'awaiting';
    addBotMsg(t().lead.offerFollowUp, 400);
  }

  /* ── Input handling ───────────────────────────────────────── */
  function sendInput() {
    var val = $input.value.trim();
    if (!val) return;
    $input.value = '';
    addUserMsg(val);
    $qr.innerHTML = '';

    if (leadStep) {
      handleLead(val);
    } else {
      handleInput(val);
    }
  }

  function handleInput(val) {
    var key = matchKey(val);
    respond(key);
  }

  function handleLead(val) {
    var ld = t().lead;

    if (leadStep === 'awaiting') {
      if (isYes(val)) {
        leadStep = 'name';
        addBotMsg(ld.askName, 400);
      } else if (isNo(val)) {
        leadStep = null;
        addBotMsg(ld.noThanks, 400);
        setTimeout(renderQR, 1600);
      } else {
        // Treat as yes if they typed something that isn't clearly no
        leadStep = 'name';
        addBotMsg(ld.askName, 400);
      }
      return;
    }

    if (leadStep === 'name') {
      leadData.name = val;
      leadStep = 'email';
      var msg = ld.askEmail.replace('{name}', val);
      addBotMsg(msg, 400);
      return;
    }

    if (leadStep === 'email') {
      if (!isValidEmail(val)) {
        addBotMsg(lang === 'en' ? "Hmm, that doesn't look like a valid email. Can you double-check? 😊" : "Hmm, eso no parece un correo válido. ¿Puedes verificarlo? 😊", 300);
        return;
      }
      leadData.email = val;
      leadStep = 'phone';
      addBotMsg(ld.askPhone, 400);
      return;
    }

    if (leadStep === 'phone') {
      if (!isNo(val) && val.length > 3) {
        leadData.phone = val;
      } else {
        addBotMsg(ld.skipPhone, 200);
      }
      leadStep = 'note';
      addBotMsg(ld.askNote, 500);
      return;
    }

    if (leadStep === 'note') {
      if (!isNo(val)) leadData.note = val;
      leadStep = null;
      var confirm = ld.confirm
        .replace('{name}', leadData.name || '')
        .replace('{email}', leadData.email || '');
      addBotMsg(confirm, 400);
      submitLead();
      setTimeout(renderQR, 2400);
      return;
    }
  }

  /* ── Lead submission ──────────────────────────────────────── */
  function submitLead() {
    // POST to Formspree (update endpoint as needed)
    var endpoint = 'https://formspree.io/f/xpwzknbw';
    var payload = {
      name: leadData.name || '',
      email: leadData.email || '',
      phone: leadData.phone || '',
      note: leadData.note || '',
      source: 'Chatbot Widget',
      language: lang
    };
    try {
      fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(payload)
      }).catch(function() {});
    } catch(e) {}
    // Reset lead data
    leadData = {};
  }

  /* ── Init ─────────────────────────────────────────────────── */
  function init() {
    if (document.getElementById('ae-fab')) return; // already loaded
    injectCSS();
    buildDOM();
    // Show badge after 3s to draw attention
    setTimeout(function() {
      if (!isOpen && $fab) {
        var badge = $fab.querySelector('.ae-badge');
        if (badge) badge.style.display = 'block';
      }
    }, 3000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
