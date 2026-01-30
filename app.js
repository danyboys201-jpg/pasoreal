// ================================
// VARIABLES GLOBALES (ORIGINALES)
// ================================
const login    = document.getElementById("login");
const register = document.getElementById("register");
const recover  = document.getElementById("recover");
const home     = document.getElementById("home");
const states   = document.getElementById("states");

// ================================
// VIDEO DE FONDO LOGIN (ORIGINAL)
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
// NAVEGACIÓN LOGIN (ORIGINAL)
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
// LOGIN CORRECTO → HOME (ORIGINAL)
// ================================
document.querySelector("#login .primary").onclick = () => {
  login.classList.remove("active");
  home.classList.add("active");
  stopLoginVideo();
};

// ================================
// LOGOUT → LOGIN (ORIGINAL)
// ================================
document.querySelector(".logout-btn").onclick = () => {
  home.classList.remove("active");
  login.classList.add("active");
  loadLoginVideo();
};

// ================================
// HOME → STATES (ORIGINAL)
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
// INICIO AUTOMÁTICO (ORIGINAL)
// ================================
if (login.classList.contains("active")) {
  loadLoginVideo();
}

// ================================
// SISTEMA DE NAVEGACIÓN PARA ESTADOS (OPTIMIZADO)
// ================================
const estadosMap = {
  "Aguascalientes": { id: "aguascalientes", back: "backToStatesFromAgs" },
  "Baja California": { id: "bajaCalifornia", back: "backToStatesFromBC" },
  "Baja California Sur": { id: "bajaCaliforniaSur", back: "backToStatesFromBCS" },
  "Campeche": { id: "campeche", back: "backToStatesFromCampeche" },
  "Chiapas": { id: "chiapas", back: "backToStatesFromChiapas" },
  "Chihuahua": { id: "chihuahua", back: "backToStatesFromChihuahua" },
  "Ciudad de México": { id: "cdmx", back: "backToStatesFromCDMX" },
  "Coahuila": { id: "coahuila", back: "backToStatesFromCoahuila" },
  "Colima": { id: "colima", back: "backToStatesFromColima" },
  "Durango": { id: "durango", back: "backToStatesFromDurango" },
  "Estado de México": { id: "edomex", back: "backToStatesFromEdomex" },
  "Guanajuato": { id: "guanajuato", back: "backToStatesFromGuanajuato" },
  "Guerrero": { id: "guerrero", back: "backToStatesFromGuerrero" },
  "Hidalgo": { id: "hidalgo", back: "backToStatesFromHidalgo" },
  "Jalisco": { id: "jalisco", back: "backToStatesFromJalisco" },
  "Michoacán": { id: "michoacan", back: "backToStatesFromMichoacan" },
  "Morelos": { id: "morelos", back: "backToStatesFromMorelos" },
  "Nayarit": { id: "nayarit", back: "backToStatesFromNayarit" },
  "Nuevo León": { id: "nuevoLeon", back: "backToStatesFromNuevoLeon" },
  "Oaxaca": { id: "oaxaca", back: "backToStatesFromOaxaca" },
  "Puebla": { id: "puebla", back: "backToStatesFromPuebla" },
  "Querétaro": { id: "queretaro", back: "backToStatesFromQueretaro" },
  "Quintana Roo": { id: "quintanaRoo", back: "backToStatesFromQuintanaRoo" },
  "San Luis Potosí": { id: "sanLuisPotosi", back: "backToStatesFromSLP" },
  "Sinaloa": { id: "sinaloa", back: "backToStatesFromSinaloa" },
  "Sonora": { id: "sonora", back: "backToStatesFromSonora" },
  "Tabasco": { id: "tabasco", back: "backToStatesFromTabasco" },
  "Tamaulipas": { id: "tamaulipas", back: "backToStatesFromTamaulipas" },
  "Tlaxcala": { id: "tlaxcala", back: "backToStatesFromTlaxcala" },
  "Veracruz": { id: "veracruz", back: "backToStatesFromVeracruz" },
  "Yucatán": { id: "yucatan", back: "backToStatesFromYucatan" },
  "Zacatecas": { id: "zacatecas", back: "backToStatesFromZacatecas" }
};

// Configurar navegación para todos los estados
Object.entries(estadosMap).forEach(([estadoNombre, config]) => {
  // Buscar el card correspondiente en la pantalla de estados
  document.querySelectorAll("#states .option-card").forEach(card => {
    if (card.innerText.trim() === estadoNombre) {
      card.onclick = () => {
        states.classList.remove("active");
        document.getElementById(config.id).classList.add("active");
      };
    }
  });

  // Configurar botón de volver
  const backBtn = document.getElementById(config.back);
  if (backBtn) {
    backBtn.onclick = () => {
      document.getElementById(config.id).classList.remove("active");
      states.classList.add("active");
    };
  }
});

// ================================
// BAJA CALIFORNIA SUR (ORIGINAL - NO TOCAR)
// ================================
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
  
// ================================
// RUTA MALECÓN (ORIGINAL - NO TOCAR)
// ================================
// REFERENCIAS
const maleconLaPazRuta = document.getElementById("maleconLaPazRuta");
const malecon360  = document.getElementById("malecon360");
const videoSphere = document.getElementById("videoSphere");
const speedRange  = document.getElementById("speedRange");
const speedValue  = document.getElementById("speedValue");
const endRouteBtn = document.getElementById("endRoute");
const stepsValue    = document.getElementById("stepsValue");
const distanceValue = document.getElementById("distanceValue");

let hls = null;
let videoReady = false;
let videoStarted = false;

let finishMap = null;
let finishRouteLine = null;

// Entrar a Ruta: Malecón
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
// HLS INIT (ORIGINAL)
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
// CAMINADORA / VELOCIDAD (ORIGINAL)
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
// GAME LOGIC (ORIGINAL)
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

// ================================
// COORDENADAS MALECÓN LA PAZ (ORIGINAL)
// ================================
const MALECON_START = [24.15555, -110.3224];
const MALECON_END   = [24.1679, -110.3091];

// mini mapa
let leafletMap;
let routeLine;

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

// ================================
// ARRASTRAR MINIMAPA (ORIGINAL)
// ================================
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

const closeBtn = document.querySelector(".map-close");
if (closeBtn) {
  closeBtn.onclick = () => {
    miniMap.style.display = "none";
  };
}

// ================================
// FINALIZAR RUTA (ORIGINAL)
// ================================
function formatTime(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60);
  return `${min}:${sec.toString().padStart(2, "0")}`;
}

// Iconos de mapa (ORIGINAL)
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

// ================================
// NAVEGACIÓN RUTA FINALIZADA (ORIGINAL)
// ================================
document.getElementById("backToRoutes").onclick = () => {
  const finishScreen = document.getElementById("routeFinish");
  finishScreen.classList.remove("active");
  laPazCiudadRutas.classList.add("active");
};

document.getElementById("repeatRoute").onclick = () => {
  const finishScreen = document.getElementById("routeFinish");
  finishScreen.classList.remove("active");
  
  // Reiniciar variables de la ruta
  steps = 0;
  distance = 0;
  elapsedSeconds = 0;
  videoReady = false;
  videoStarted = false;
  
  // Ir a la pantalla de la ruta
  maleconLaPazRuta.classList.add("active");
  
  // Reiniciar el video
  setTimeout(() => {
    initHLS();
    initMiniMap();
  }, 100);
};