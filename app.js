const login    = document.getElementById("login");
const register = document.getElementById("register");
const recover  = document.getElementById("recover");
const home     = document.getElementById("home");
const states   = document.getElementById("states");

// ================================
// VIDEO DE FONDO LOGIN
// ================================

const bgVideo = document.getElementById("bgVideo");

function loadLoginVideo() {
  if (!bgVideo) return;
  if (bgVideo.src) return;

  bgVideo.src =
    "https://customer-cw0heb9gadqlxjsv.cloudflarestream.com/f456f64d303feeb7969b16dfa9c83ca4/manifest/video.m3u8";

  bgVideo.style.display = "block";
  bgVideo.play().catch(() => {});
}

function stopLoginVideo() {
  if (!bgVideo) return;

  bgVideo.pause();
  bgVideo.removeAttribute("src");
  bgVideo.load();
  bgVideo.style.display = "none";
}

// ================================
// NAVEGACIÓN LOGIN
// ================================

document.getElementById("goRegisterBtn").onclick = () => {
  login.classList.remove("active");
  register.classList.add("active");
  loadLoginVideo();
};

document.getElementById("goLoginBtn").onclick = () => {
  register.classList.remove("active");
  login.classList.add("active");
  loadLoginVideo();
};

document.getElementById("recoverBtn").onclick = () => {
  login.classList.remove("active");
  recover.classList.add("active");
  loadLoginVideo();
};

document.getElementById("cancelRecoverBtn").onclick = () => {
  recover.classList.remove("active");
  login.classList.add("active");
  loadLoginVideo();
};

// ================================
// LOGIN CORRECTO → HOME
// ================================

document.querySelector("#login .primary").onclick = () => {
  login.classList.remove("active");
  home.classList.add("active");
  stopLoginVideo();
};

// ================================
// LOGOUT → LOGIN
// ================================

document.querySelector(".logout-btn").onclick = () => {
  home.classList.remove("active");
  login.classList.add("active");
  loadLoginVideo();
};

// ================================
// HOME → STATES
// ================================

document.querySelector(".primary-card").onclick = () => {
  home.classList.remove("active");
  states.classList.add("active");
};

document.getElementById("backHomeFromStates").onclick = () => {
  states.classList.remove("active");
  home.classList.add("active");
};

// ================================
// INICIO AUTOMÁTICO
// ================================

if (login.classList.contains("active")) {
  loadLoginVideo();
}






















const aguascalientes = document.getElementById("aguascalientes");

// Desde Estados → Aguascalientes
document.querySelectorAll("#states .option-card").forEach(card=>{
  if(card.innerText === "Aguascalientes"){
    card.onclick = ()=>{
      document.getElementById("states").classList.remove("active");
      aguascalientes.classList.add("active");
    };
  }
});

// Volver a Estados
document.getElementById("backToStatesFromAgs").onclick = ()=>{
  aguascalientes.classList.remove("active");
  document.getElementById("states").classList.add("active");
};






















const bajaCalifornia = document.getElementById("bajaCalifornia");

// Desde Estados → Baja California
document.querySelectorAll("#states .option-card").forEach(card=>{
  if(card.innerText === "Baja California"){
    card.onclick = ()=>{
      document.getElementById("states").classList.remove("active");
      bajaCalifornia.classList.add("active");
    };
  }
});

// Volver a Estados
document.getElementById("backToStatesFromBC").onclick = ()=>{
  bajaCalifornia.classList.remove("active");
  document.getElementById("states").classList.add("active");
};


























// ===== BAJA CALIFORNIA SUR =====
const bajaCaliforniaSur = document.getElementById("bajaCaliforniaSur");

// Entrar a Baja California Sur
document.querySelectorAll("#states .option-card").forEach(card => {
  if (card.innerText.trim() === "Baja California Sur") {
    card.onclick = () => {
      states.classList.remove("active");
      bajaCaliforniaSur.classList.add("active");
    };
  }
});

// Volver a Estados
document.getElementById("backToStatesFromBCS").onclick = () => {
  bajaCaliforniaSur.classList.remove("active");
  states.classList.add("active");
};



// ===== La Paz =====
const laPazZonas = document.getElementById("laPazZonas");

// Entrar a La Paz desde Baja California Sur
document
  .querySelectorAll("#bajaCaliforniaSur .option-card")
  .forEach(card => {
    if (card.innerText.trim() === "La Paz") {
      card.onclick = () => {
        bajaCaliforniaSur.classList.remove("active");
        laPazZonas.classList.add("active");
      };
    }
  });

// Volver de La Paz → Baja California Sur
document
  .getElementById("backToBCSFromLaPazZonas")
  .onclick = () => {
    laPazZonas.classList.remove("active");
    bajaCaliforniaSur.classList.add("active");
  };
  
  
  
  
  
  
  
  
  
  
// Entrar a La Paz (Ciudad) desde Zonas  
const laPazCiudadRutas = document.getElementById("laPazCiudadRutas");  
  
document.querySelectorAll("#laPazZonas .option-card").forEach(card => {
  if (card.innerText.trim() === "La Paz (Ciudad)") {
    card.onclick = () => {
      laPazZonas.classList.remove("active");
      laPazCiudadRutas.classList.add("active");
    };
  }
});

// Volver de La Paz (Ciudad) → laPazZonas
document.getElementById("backToLaPazZonasFromCiudad").onclick = () => {
  laPazCiudadRutas.classList.remove("active");
  laPazZonas.classList.add("active");
};  
  
  
  
  
  
// Entrar a Ruta: Malecón de La Paz  
// ================================
// REFERENCIAS
// ================================
const maleconLaPazRuta = document.getElementById("maleconLaPazRuta");

const malecon360  = document.getElementById("malecon360");
const videoSphere = document.getElementById("videoSphere");

const speedRange  = document.getElementById("speedRange");
const speedValue  = document.getElementById("speedValue");

const endRouteBtn   = document.getElementById("endRoute");
const stepsValue    = document.getElementById("stepsValue");
const distanceValue = document.getElementById("distanceValue");


let hls = null;
let videoReady = false;
let videoStarted = false;

let finishMap = null;
let finishRouteLine = null;

// ================================
// ENTRAR A RUTA: MALECÓN
// ================================

document.getElementById("goToMalecon").onclick = () => {
  laPazCiudadRutas.classList.remove("active");
  maleconLaPazRuta.classList.add("active");

  // reset
  videoReady = false;
  videoStarted = false;
  videoSphere.removeAttribute("src");

  initHLS();
  initMiniMap();
};



// ================================
// HLS INIT (AQUÍ ES DONDE DEBE IR)
// ================================

function initHLS() {
  if (!Hls.isSupported()) {
    console.error("HLS no soportado");
    return;
  }

  hls = new Hls({ lowLatencyMode: true });

  hls.loadSource(
    "https://customer-cw0heb9gadqlxjsv.cloudflarestream.com/8aa913ae75d3814cce9a27bd280d2c4a/manifest/video.m3u8"
  );

  hls.attachMedia(malecon360);

  malecon360.addEventListener("canplay", () => {
    videoReady = true;
    console.log("✅ Video listo (canplay)");
  }, { once: true });
  
  malecon360.addEventListener("ended", () => {
  console.log("🎬 Video terminado → finalizar ruta");
  goToRouteFinish();
}, { once: true });
}

// ================================
// CAMINADORA / VELOCIDAD (FIX)
// ================================

speedRange.addEventListener("input", async () => {
  const speed = Number(speedRange.value);
  speedValue.textContent = speed;

  if (!videoReady) return;

  if (speed === 0) {
    malecon360.pause();
    return;
  }

  if (!videoStarted) {
    try {
      await malecon360.play();
      videoSphere.setAttribute("src", "#malecon360");
      videoSphere.setAttribute("rotation", "0 -90 0");
      videoStarted = true;
    } catch (e) {
      console.error("No se pudo iniciar video", e);
      return;
    }
  }

  malecon360.playbackRate = speed / 3;
});


// ================================
// GAME LOGIC (PASOS + KM)
// ================================
let steps = 0;
let distance = 0; // km
let lastTime = null;
const STEP_KM = 0.00075; // Aproximadamente 1333 pasos por km
let elapsedSeconds = 0;


function gameLoop(timestamp) {
  if (!lastTime) lastTime = timestamp;
  const delta = (timestamp - lastTime) / 1000;
  lastTime = timestamp;

  const speed = parseFloat(speedRange.value);

  if (speed > 0 && videoStarted) {
    elapsedSeconds += delta;

    const kmThisFrame = (speed / 3600) * delta;
    distance += kmThisFrame;
    steps += kmThisFrame / STEP_KM;

    stepsValue.textContent = Math.floor(steps);
    distanceValue.textContent = distance.toFixed(2);
    updateMiniMap(distance);
  }



  requestAnimationFrame(gameLoop);
}

// Iniciar el loop del juego
requestAnimationFrame(gameLoop);


function updateMiniMap(distanceKm) {
  if (!leafletMap || !routeLine) return;

  const maxKm = 3; // longitud simulada del Malecón
  const progress = Math.min(distanceKm / maxKm, 1);

  const lat =
    MALECON_START[0] +
    (MALECON_END[0] - MALECON_START[0]) * progress;

  const lng =
    MALECON_START[1] +
    (MALECON_END[1] - MALECON_START[1]) * progress;

  routeLine.addLatLng([lat, lng]);
}

function formatTime(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60);
  return `${min}:${sec.toString().padStart(2, "0")}`;
}

// ================================
// COORDENADAS MALECÓN LA PAZ
// ================================
const MALECON_START = [24.15555, -110.3224];
const MALECON_END   = [24.1679, -110.3091];

// mini mapa
let leafletMap;
let routeLine;

const closeBtn = document.querySelector(".map-close");
if (closeBtn) {
  closeBtn.onclick = () => {
    miniMap.style.display = "none";
  };
}


function initMiniMap() {
  if (leafletMap) return;

  leafletMap = L.map("minileafletMap", {
    zoomControl: false,
    attributionControl: false,
    dragging: false,
    scrollWheelZoom: false,
    doubleClickZoom: false,
    boxZoom: false
  }).setView(MALECON_START, 16);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18
  }).addTo(leafletMap);

  routeLine = L.polyline([MALECON_START], {
    color: "#0ea5e9",
    weight: 4,
    lineCap: "round"
  }).addTo(leafletMap);

  setTimeout(() => {
  leafletMap.invalidateSize();
}, 200);
}

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

const miniMap = document.querySelector(".mini-map");

miniMap.addEventListener("touchstart", e => {
  isDragging = true;
  const touch = e.touches[0];
  offsetX = touch.clientX - miniMap.offsetLeft;
  offsetY = touch.clientY - miniMap.offsetTop;
});

miniMap.addEventListener("touchmove", e => {
  if (!isDragging) return;
  const touch = e.touches[0];
  miniMap.style.left = touch.clientX - offsetX + "px";
  miniMap.style.top = touch.clientY - offsetY + "px";
  miniMap.style.right = "auto";
});

miniMap.addEventListener("touchend", () => {
  isDragging = false;
});

 

// ================================
// Finalizar
// ================================

function goToRouteFinish() {
  // detener video
  malecon360.pause();

  // ocultar ruta
  maleconLaPazRuta.classList.remove("active");

  // llenar datos finales
  document.getElementById("finishSteps").innerText =
    Math.floor(steps);

  document.getElementById("finishDistance").innerText =
    distance.toFixed(2) + " km";

  document.getElementById("finishTime").innerText =
    formatTime(elapsedSeconds);

  // mostrar pantalla final
  const finishScreen = document.getElementById("routeFinish");
  finishScreen.classList.add("active");

  // 🔥 esperar a que el DOM sea visible
setTimeout(() => {
  renderFinishMap(distance);

  setTimeout(() => {
    if (finishMap) {
      finishMap.invalidateSize();
    }
  }, 200);

}, 300);
}


endRouteBtn.addEventListener("click", () => {
  goToRouteFinish();
});


// ================================
// ICONOS DE MAPA
// ================================
const startIcon = L.divIcon({
  className: "start-pin",
  html: "🟢",
  iconSize: [24, 24],
  iconAnchor: [12, 12]
});

const endIcon = L.divIcon({
  className: "end-pin",
  html: "🔴",
  iconSize: [24, 24],
  iconAnchor: [12, 12]
});


function renderFinishMap(distanceKm) {

  const mapContainer = document.getElementById("leafletMap");
  if (!mapContainer) return;

  // 🔥 asegurar que el div tenga tamaño
  mapContainer.style.height = "220px";
  mapContainer.style.width = "100%";

  const maxKm = 3;
  const progress = Math.min(distanceKm / maxKm, 1);

  const lat =
    MALECON_START[0] +
    (MALECON_END[0] - MALECON_START[0]) * progress;

  const lng =
    MALECON_START[1] +
    (MALECON_END[1] - MALECON_START[1]) * progress;

  const endPoint = [lat, lng];

  // destruir mapa previo
  if (window.finishMap) {
    window.finishMap.remove();
    window.finishMap = null;
  }

  // 🔥 crear mapa SOLO cuando ya está visible
  window.finishMap = L.map("leafletMap", {
    zoomControl: false,
    attributionControl: false
  });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18
  }).addTo(window.finishMap);

  const line = L.polyline(
    [MALECON_START, endPoint],
    {
      color: "#0ea5e9",
      weight: 6,
      lineCap: "round"
    }
  ).addTo(window.finishMap);
  
  // 🟢 Pin inicio
  L.marker(MALECON_START, { icon: startIcon })
    .addTo(window.finishMap)
    .bindPopup("Inicio");

  // 🔴 Pin final
  L.marker(endPoint, { icon: endIcon })
    .addTo(window.finishMap)
    .bindPopup("Fin del recorrido");

  window.finishMap.fitBounds(line.getBounds(), {
    padding: [30, 30]
  });

  // 🔥 CLAVE ABSOLUTA
  setTimeout(() => {
    window.finishMap.invalidateSize();
  }, 100);
}








  
  
  
  
  
  
  
  
  // ===== Todos Santos =====
const todosSantosRutas = document.getElementById("todosSantosRutas");

// Entrar a todosSantosRutas
document
  .querySelectorAll("#laPazZonas .option-card")
  .forEach(card => {
    if (card.innerText.trim() === "Todos Santos") {
      card.onclick = () => {
        laPazZonas.classList.remove("active");
        todosSantosRutas.classList.add("active");
      };
    }
  });

// Volver de todosSantosRutas → laPazZonas
document
  .getElementById("backToLaPazZonasFromTodosSantos")
  .onclick = () => {
    todosSantosRutas.classList.remove("active");
    laPazZonas.classList.add("active");
  };



// ===== LOS CABOS =====
const losCabos = document.getElementById("losCabos");

// Entrar a Los Cabos desde Baja California Sur
document
  .querySelectorAll("#bajaCaliforniaSur .option-card")
  .forEach(card => {
    if (card.innerText.trim() === "Los Cabos") {
      card.onclick = () => {
        bajaCaliforniaSur.classList.remove("active");
        losCabos.classList.add("active");
      };
    }
  });

// Volver de Los Cabos → Baja California Sur
document
  .getElementById("backToBCSFromLosCabos")
  .onclick = () => {
    losCabos.classList.remove("active");
    bajaCaliforniaSur.classList.add("active");
  };
  
  
  
  // ===== CABO SAN LUCAS RUTAS =====
const caboSanLucasRutas = document.getElementById("caboSanLucasRutas");

// Entrar a Cabo San Lucas
document
  .querySelectorAll("#losCabos .option-card")
  .forEach(card => {
    if (card.innerText.trim() === "Cabo San Lucas") {
      card.onclick = () => {
        losCabos.classList.remove("active");
        caboSanLucasRutas.classList.add("active");
      };
    }
  });

// Volver de Cabo San Lucas → Los Cabos
document
  .getElementById("backToLosCabosFromCSL")
  .onclick = () => {
    caboSanLucasRutas.classList.remove("active");
    losCabos.classList.add("active");
  };
  
  
  
  // ===== SAN JOSÉ DEL CABO RUTAS =====
const sanJoseDelCaboRutas = document.getElementById("sanJoseDelCaboRutas");

// Entrar a San José del Cabo
document
  .querySelectorAll("#losCabos .option-card")
  .forEach(card => {
    if (card.innerText.trim() === "San José del Cabo") {
      card.onclick = () => {
        losCabos.classList.remove("active");
        sanJoseDelCaboRutas.classList.add("active");
      };
    }
  });

// Volver de San José del Cabo → Los Cabos
document
  .getElementById("backToLosCabosFromSJC")
  .onclick = () => {
    sanJoseDelCaboRutas.classList.remove("active");
    losCabos.classList.add("active");
  };





















const campeche = document.getElementById("campeche");

// Desde Estados → Campeche
document.querySelectorAll("#states .option-card").forEach(card=>{
  if(card.innerText === "Campeche"){
    card.onclick = ()=>{
      document.getElementById("states").classList.remove("active");
      campeche.classList.add("active");
    };
  }
});

// Volver a Estados
document.getElementById("backToStatesFromCampeche").onclick = ()=>{
  campeche.classList.remove("active");
  document.getElementById("states").classList.add("active");
};





















const chiapas = document.getElementById("chiapas");

// Desde Estados → Chiapas
document.querySelectorAll("#states .option-card").forEach(card=>{
  if(card.innerText === "Chiapas"){
    card.onclick = ()=>{
      document.getElementById("states").classList.remove("active");
      chiapas.classList.add("active");
    };
  }
});

// Volver a Estados
document.getElementById("backToStatesFromChiapas").onclick = ()=>{
  chiapas.classList.remove("active");
  document.getElementById("states").classList.add("active");
};





















const chihuahua = document.getElementById("chihuahua");

// Desde Estados → Chihuahua
document.querySelectorAll("#states .option-card").forEach(card=>{
  if(card.innerText === "Chihuahua"){
    card.onclick = ()=>{
      document.getElementById("states").classList.remove("active");
      chihuahua.classList.add("active");
    };
  }
});

// Volver a Estados
document.getElementById("backToStatesFromChihuahua").onclick = ()=>{
  chihuahua.classList.remove("active");
  document.getElementById("states").classList.add("active");
};





















const cdmx = document.getElementById("cdmx");

// Desde Estados → CDMX
document.querySelectorAll("#states .option-card").forEach(card=>{
  if(card.innerText === "Ciudad de México"){
    card.onclick = ()=>{
      document.getElementById("states").classList.remove("active");
      cdmx.classList.add("active");
    };
  }
});

// Volver a Estados
document.getElementById("backToStatesFromCDMX").onclick = ()=>{
  cdmx.classList.remove("active");
  document.getElementById("states").classList.add("active");
};





















const coahuila = document.getElementById("coahuila");

// Desde Estados → Coahuila
document.querySelectorAll("#states .option-card").forEach(card=>{
  if(card.innerText === "Coahuila"){
    card.onclick = ()=>{
      document.getElementById("states").classList.remove("active");
      coahuila.classList.add("active");
    };
  }
});

// Volver a Estados
document.getElementById("backToStatesFromCoahuila").onclick = ()=>{
  coahuila.classList.remove("active");
  document.getElementById("states").classList.add("active");
};





















const colima = document.getElementById("colima");

// Desde Estados → Colima
document.querySelectorAll("#states .option-card").forEach(card=>{
  if(card.innerText === "Colima"){
    card.onclick = ()=>{
      document.getElementById("states").classList.remove("active");
      colima.classList.add("active");
    };
  }
});

// Volver a Estados
document.getElementById("backToStatesFromColima").onclick = ()=>{
  colima.classList.remove("active");
  document.getElementById("states").classList.add("active");
};





















const durango = document.getElementById("durango");

// Desde Estados → Durango
document.querySelectorAll("#states .option-card").forEach(card=>{
  if(card.innerText === "Durango"){
    card.onclick = ()=>{
      document.getElementById("states").classList.remove("active");
      durango.classList.add("active");
    };
  }
});

// Volver a Estados
document.getElementById("backToStatesFromDurango").onclick = ()=>{
  durango.classList.remove("active");
  document.getElementById("states").classList.add("active");
};





















const edomex = document.getElementById("edomex");

// Desde Estados → Estado de México
document.querySelectorAll("#states .option-card").forEach(card=>{
  if(card.innerText === "Estado de México"){
    card.onclick = ()=>{
      document.getElementById("states").classList.remove("active");
      edomex.classList.add("active");
    };
  }
});

// Volver a Estados
document.getElementById("backToStatesFromEdomex").onclick = ()=>{
  edomex.classList.remove("active");
  document.getElementById("states").classList.add("active");
};





















const guanajuato = document.getElementById("guanajuato");

// Desde Estados → Guanajuato
document.querySelectorAll("#states .option-card").forEach(card=>{
  if(card.innerText === "Guanajuato"){
    card.onclick = ()=>{
      document.getElementById("states").classList.remove("active");
      guanajuato.classList.add("active");
    };
  }
});

// Volver a Estados
document.getElementById("backToStatesFromGuanajuato").onclick = ()=>{
  guanajuato.classList.remove("active");
  document.getElementById("states").classList.add("active");
};






















const guerrero = document.getElementById("guerrero");

// Desde Estados → Guerrero
document.querySelectorAll("#states .option-card").forEach(card=>{
  if(card.innerText === "Guerrero"){
    card.onclick = ()=>{
      document.getElementById("states").classList.remove("active");
      guerrero.classList.add("active");
    };
  }
});

// Volver a Estados
document.getElementById("backToStatesFromGuerrero").onclick = ()=>{
  guerrero.classList.remove("active");
  document.getElementById("states").classList.add("active");
};





















const hidalgo = document.getElementById("hidalgo");

// Desde Estados → Hidalgo
document.querySelectorAll("#states .option-card").forEach(card=>{
  if(card.innerText === "Hidalgo"){
    card.onclick = ()=>{
      document.getElementById("states").classList.remove("active");
      hidalgo.classList.add("active");
    };
  }
});

// Volver a Estados
document.getElementById("backToStatesFromHidalgo").onclick = ()=>{
  hidalgo.classList.remove("active");
  document.getElementById("states").classList.add("active");
};





















const jalisco = document.getElementById("jalisco");

document.querySelectorAll("#states .option-card").forEach(card=>{
  if(card.innerText === "Jalisco"){
    card.onclick = ()=>{
      document.getElementById("states").classList.remove("active");
      jalisco.classList.add("active");
    };
  }
});

document.getElementById("backToStatesFromJalisco").onclick = ()=>{
  jalisco.classList.remove("active");
  document.getElementById("states").classList.add("active");
};





















const michoacan = document.getElementById("michoacan");

document.querySelectorAll("#states .option-card").forEach(card=>{
  if(card.innerText === "Michoacán"){
    card.onclick = ()=>{
      document.getElementById("states").classList.remove("active");
      michoacan.classList.add("active");
    };
  }
});

document.getElementById("backToStatesFromMichoacan").onclick = ()=>{
  michoacan.classList.remove("active");
  document.getElementById("states").classList.add("active");
};





















const morelos = document.getElementById("morelos");

document.querySelectorAll("#states .option-card").forEach(card=>{
  if(card.innerText === "Morelos"){
    card.onclick = ()=>{
      document.getElementById("states").classList.remove("active");
      morelos.classList.add("active");
    };
  }
});

document.getElementById("backToStatesFromMorelos").onclick = ()=>{
  morelos.classList.remove("active");
  document.getElementById("states").classList.add("active");
};





















// Nayarit
const nayarit = document.getElementById("nayarit");

document.querySelectorAll("#states .option-card").forEach(card=>{
  if(card.innerText === "Nayarit"){
    card.onclick = ()=>{
      document.getElementById("states").classList.remove("active");
      nayarit.classList.add("active");
    };
  }
});

document.getElementById("backToStatesFromNayarit").onclick = ()=>{
  nayarit.classList.remove("active");
  document.getElementById("states").classList.add("active");
};





















// Nuevo León
const nuevoLeon = document.getElementById("nuevoLeon");

// Desde Estados → Nuevo León
document.querySelectorAll("#states .option-card").forEach(card=>{
  if(card.innerText === "Nuevo León"){
    card.onclick = ()=>{
      document.getElementById("states").classList.remove("active");
      nuevoLeon.classList.add("active");
    };
  }
});

// Volver a Estados
document.getElementById("backToStatesFromNuevoLeon").onclick = ()=>{
  nuevoLeon.classList.remove("active");
  document.getElementById("states").classList.add("active");
};





















// Oaxaca
const oaxaca = document.getElementById("oaxaca");

document.querySelectorAll("#states .option-card").forEach(card=>{
  if(card.innerText === "Oaxaca"){
    card.onclick = ()=>{
      document.getElementById("states").classList.remove("active");
      oaxaca.classList.add("active");
    };
  }
});

document.getElementById("backToStatesFromOaxaca").onclick = ()=>{
  oaxaca.classList.remove("active");
  document.getElementById("states").classList.add("active");
};





















// Puebla
const puebla = document.getElementById("puebla");

document.querySelectorAll("#states .option-card").forEach(card=>{
  if(card.innerText === "Puebla"){
    card.onclick = ()=>{
      document.getElementById("states").classList.remove("active");
      puebla.classList.add("active");
    };
  }
});

document.getElementById("backToStatesFromPuebla").onclick = ()=>{
  puebla.classList.remove("active");
  document.getElementById("states").classList.add("active");
};




// Queretaro
const queretaro = document.getElementById("queretaro");

// Desde Estados → Nuevo León
document.querySelectorAll("#states .option-card").forEach(card=>{
  if(card.innerText === "Querétaro"){
    card.onclick = ()=>{
      document.getElementById("states").classList.remove("active");
      queretaro.classList.add("active");
    };
  }
});

// Volver a Estados
document.getElementById("backToStatesFromQueretaro").onclick = ()=>{
  queretaro.classList.remove("active");
  document.getElementById("states").classList.add("active");
};






















// quintanaRoo
const quintanaRoo = document.getElementById("quintanaRoo");

document.querySelectorAll("#states .option-card").forEach(card=>{
  if(card.innerText === "Quintana Roo"){
    card.onclick = ()=>{
      document.getElementById("states").classList.remove("active");
      quintanaRoo.classList.add("active");
    };
  }
});

document.getElementById("backToStatesFromQuintanaRoo").onclick = ()=>{
  quintanaRoo.classList.remove("active");
  document.getElementById("states").classList.add("active");
};





















// sanLuisPotosi
const sanLuisPotosi = document.getElementById("sanLuisPotosi");

document.querySelectorAll("#states .option-card").forEach(card=>{
  if(card.innerText === "San Luis Potosí"){
    card.onclick = ()=>{
      document.getElementById("states").classList.remove("active");
      sanLuisPotosi.classList.add("active");
    };
  }
});

document.getElementById("backToStatesFromSLP").onclick = ()=>{
  sanLuisPotosi.classList.remove("active");
  document.getElementById("states").classList.add("active");
};





















const sinaloa = document.getElementById("sinaloa");

// Desde Estados → sinaloa
document.querySelectorAll("#states .option-card").forEach(card=>{
  if(card.innerText === "Sinaloa"){
    card.onclick = ()=>{
      document.getElementById("states").classList.remove("active");
      sinaloa.classList.add("active");
    };
  }
});

// Volver a Estados
document.getElementById("backToStatesFromSinaloa").onclick = ()=>{
  sinaloa.classList.remove("active");
  document.getElementById("states").classList.add("active");
};





















const sonora = document.getElementById("sonora");

// Desde Estados → Sonora
document.querySelectorAll("#states .option-card").forEach(card=>{
  if(card.innerText === "Sonora"){
    card.onclick = ()=>{
      document.getElementById("states").classList.remove("active");
      sonora.classList.add("active");
    };
  }
});

// Volver a Estados
document.getElementById("backToStatesFromSonora").onclick = ()=>{
  sonora.classList.remove("active");
  document.getElementById("states").classList.add("active");
};





















const tabasco = document.getElementById("tabasco");

// Desde Estados → tabasco
document.querySelectorAll("#states .option-card").forEach(card=>{
  if(card.innerText === "Tabasco"){
    card.onclick = ()=>{
      document.getElementById("states").classList.remove("active");
      tabasco.classList.add("active");
    };
  }
});

// Volver a Estados
document.getElementById("backToStatesFromTabasco").onclick = ()=>{
  tabasco.classList.remove("active");
  document.getElementById("states").classList.add("active");
};





















const tamaulipas = document.getElementById("tamaulipas");

// Desde Estados → tamaulipas
document.querySelectorAll("#states .option-card").forEach(card=>{
  if(card.innerText === "Tamaulipas"){
    card.onclick = ()=>{
      document.getElementById("states").classList.remove("active");
      tamaulipas.classList.add("active");
    };
  }
});

// Volver a Estados
document.getElementById("backToStatesFromTamaulipas").onclick = ()=>{
  tamaulipas.classList.remove("active");
  document.getElementById("states").classList.add("active");
};





















const tlaxcala = document.getElementById("tlaxcala");

// Desde Estados → 
document.querySelectorAll("#states .option-card").forEach(card=>{
  if(card.innerText === "Tlaxcala"){
    card.onclick = ()=>{
      document.getElementById("states").classList.remove("active");
      tlaxcala.classList.add("active");
    };
  }
});

// Volver a Estados
document.getElementById("backToStatesFromTlaxcala").onclick = ()=>{
  tlaxcala.classList.remove("active");
  document.getElementById("states").classList.add("active");
};





















const veracruz = document.getElementById("veracruz");

// Desde Estados → 
document.querySelectorAll("#states .option-card").forEach(card=>{
  if(card.innerText === "Veracruz"){
    card.onclick = ()=>{
      document.getElementById("states").classList.remove("active");
      veracruz.classList.add("active");
    };
  }
});

// Volver a Estados
document.getElementById("backToStatesFromVeracruz").onclick = ()=>{
  veracruz.classList.remove("active");
  document.getElementById("states").classList.add("active");
};





















const yucatan = document.getElementById("yucatan");

// Desde Estados →
document.querySelectorAll("#states .option-card").forEach(card=>{
  if(card.innerText === "Yucatán"){
    card.onclick = ()=>{
      document.getElementById("states").classList.remove("active");
      yucatan.classList.add("active");
    };
  }
});

// Volver a Estados
document.getElementById("backToStatesFromYucatan").onclick = ()=>{
  yucatan.classList.remove("active");
  document.getElementById("states").classList.add("active");
};





















const zacatecas = document.getElementById("zacatecas");

// Desde Estados →  
document.querySelectorAll("#states .option-card").forEach(card=>{
  if(card.innerText === "Zacatecas"){
    card.onclick = ()=>{
      document.getElementById("states").classList.remove("active");
      zacatecas.classList.add("active");
    };
  }
});

// Volver a Estados
document.getElementById("backToStatesFromZacatecas").onclick = ()=>{
  zacatecas.classList.remove("active");
  document.getElementById("states").classList.add("active");
};