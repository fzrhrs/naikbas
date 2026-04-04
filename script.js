// ─── ROUTE DATA ────────────────────────────────────────────────
const ROUTES = {
  S01: {
    name: 'S01', label: 'KK Sentral ↔ UMS / Likas Loop', distance: '31.78 km',
    outbound: [
      'KK Sentral','Jabatan Audit','Monocolo Boutique Hotel','Sawit Kinabalu',
      'Wisma Wanita','Taman Yakim Jaya','Basel Likas','SM Shan Tao',
      'OPP SDA Likas','Wisma Kosan','Likas Plaza','OPP Pintu Masjid Bandaraya',
      'Masjid Bandaraya','McD Anjung Selera','Anjung Selera','Menara Kinabalu',
      'Innoprise','KPKPS','UMS'
    ],
    inbound: [
      'UMS','1 Borneo','Kg. Delima','Alamesra I','OPP 1 Borneo','Alamesra II',
      'OPP KPKPS','OPP Innoprise','Pintu Masjid Bandaraya','Shell Likas',
      'Kg. Cendrakasih','Luyang Plaza','Foh Sang','Bornion',
      'Taman Layang-Layang','Zirafah','OPP Mahkamah','OPP Jabatan Audit','KK Sentral'
    ]
  },
  S05: {
    name: 'S05', label: 'KK Sentral City Loop', distance: '17.84 km',
    outbound: [
      'KK Sentral','Centre Point','Segama','Jesselton Mall',
      'Jesselton Point Ferry Terminal','Jesselton Quay','SICC',
      'Sabah Energy','Sabah Trade Centre','Kompleks Sukan Likas',
      'Stadium Hoki','KPJ'
    ],
    inbound: [
      'KPJ','HQE 2','Damai Plaza','E-West','Taman Kinabalu','Lido',
      'Taman Fortuna','Vetro 11','HQE 1','Masjid Negeri','UTC',
      'Sacred Heart','Sadong Jaya','KK Sentral'
    ]
  }
};

// ─── STOP COORDINATES ──────────────────────────────────────────
// TODO: Fill in actual GPS coordinates for each stop
// Find coordinates: Right-click location in Google Maps → Copy coordinates
const STOPS_COORDS = {
  // S01 Stops - Add coordinates here
  'KK Sentral': { lat: 5.972100618028586, lng: 116.0687133858479 }, // Example coordinate
  'Jabatan Audit': { lat: 5.968869154088299, lng: 116.0775065662619 },
  'Monocolo Boutique Hotel': { lat: 5.968836524771663, lng: 116.08353137790478 },
  'Sawit Kinabalu': { lat: null, lng: null },
  'Wisma Wanita': { lat: 5.976398560768688, lng: 116.08642211173512 },
  'Taman Yakim Jaya': { lat: 5.976419159309796, lng: 116.09181348769796 },
  'Basel Likas': { lat: 5.992169617465085, lng: 116.10739000859061 },
  'SM Shan Tao': { lat: 5.983058693667095, lng: 116.10250977220899 },
  'OPP SDA Likas': { lat: null, lng: null },
  'Wisma Kosan': { lat: 5.991584858109174, lng: 116.10738166811211 },
  'Likas Plaza': { lat: 5.992215687668505, lng: 116.10971682578352 },
  'OPP Pintu Masjid Bandaraya': { lat: 5.995769917828411, lng: 116.109067073662 },
  'Masjid Bandaraya': { lat: 5.995769917828411, lng: 116.109067073662 },
  'McD Anjung Selera': { lat: 6.012372001780001, lng: 116.11421665669747 },
  'Anjung Selera': { lat: 6.012372001780001, lng: 116.11421665669747 },
  'Menara Kinabalu': { lat: 6.015861270825684, lng: 116.11236953303893 },
  'Innoprise': { lat: 6.017655009452172, lng: 116.11489887736218 },
  'KPKPS': { lat: 6.02953870393648, lng: 116.11762433002676 },
  'UMS': { lat: 6.031038205230814, lng: 116.1170368337269 },
  '1 Borneo': { lat: 6.035014165891865, lng: 116.12945488015463 },
  'Kg. Delima': { lat: 6.033701896178388, lng: 116.13805019694802 },
  'Alamesra I': { lat: 6.0324826468668595, lng: 116.13742344439802 },
  'OPP 1 Borneo': { lat: 6.035014165891865, lng: 116.12945488015463 },
  'Alamesra II': { lat: 6.0324826468668595, lng: 116.13742344439802 },
  'OPP KPKPS': { lat: 6.02953870393648, lng: 116.11762433002676 },
  'OPP Innoprise': { lat: 6.017655009452172, lng: 116.11489887736218 },
  'Pintu Masjid Bandaraya': { lat: 5.995769917828411, lng: 116.109067073662 },
  'Shell Likas': { lat: 5.993360966037889, lng: 116.11260285559365 },
  'Kg. Cendrakasih': { lat: 5.994023890507539, lng: 116.11350516642199 },
  'Luyang Plaza': { lat: 5.954901432512527, lng: 116.09279851653338 },
  'Foh Sang': { lat: 5.958061011672116, lng: 116.08842497605467 },
  'Bornion': { lat: 5.95771648646384, lng: 116.08725542393321 },
  'Taman Layang-Layang': { lat: 5.963541043319809, lng: 116.08406903133312 },
  'Zirafah': { lat: 5.959436193761689, lng: 116.08502224112608 },
  'OPP Mahkamah': { lat: 5.967609320044787, lng: 116.08096078345469 },
  'OPP Jabatan Audit': { lat: 5.968869154088299, lng: 116.0775065662619 },
  
  // S05 Stops - Add coordinates here
  'Centre Point': { lat: 5.978095321875731, lng: 116.07245403372626 },
  'Segama': { lat: 5.984292831053414, lng: 116.07462252208343 },
  'Jesselton Mall': { lat: 5.988991159024047, lng: 116.07911401414056 },
  'Jesselton Point Ferry Terminal': { lat: 5.993134817162215, lng: 116.07908481784048 },
  'Jesselton Quay': { lat: 5.991696406930685, lng: 116.08195137790494 },
  'SICC': { lat: 5.997240075634912, lng: 116.08514817181202 },
  'Sabah Energy': { lat: 5.996034526682337, lng: 116.09069616016914 },
  'Sabah Trade Centre': { lat: 5.9915190092940875, lng: 116.09178843796941 },
  'Kompleks Sukan Likas': { lat: 5.983319172200248, lng: 116.09299299749063 },
  'Stadium Hoki': { lat: 5.979456580516135, lng: 116.09500447605505 },
  'KPJ': { lat: 5.966853678956363, lng: 116.0944523932476 },
  'HQE 2': { lat: 5.9666899375903935, lng: 116.09462964482609 },
  'Damai Plaza': { lat: 5.961766981039785, lng: 116.08906279564073 },
  'E-West': { lat: 5.959551303086942, lng: 116.08980247420486 },
  'Taman Kinabalu': { lat: 5.955225855215593, lng: 116.09384751793196 },
  'Lido': { lat: 5.943677192545281, lng: 116.08239856437258 },
  'Taman Fortuna': { lat: 5.95087912579314, lng: 116.07820297378564 },
  'Vetro 11': { lat: 5.957421811921202, lng: 116.07550794721901 },
  'HQE 1': { lat: 5.956983286664032, lng: 116.07344674482584 },
  'Masjid Negeri': { lat: 5.960186881686585, lng: 116.06720833981922 },
  'UTC': { lat: 5.963293455721571, lng: 116.07001705276896 },
  'Sacred Heart': { lat: 5.964500321439558, lng: 116.07297239564078 },
  'Sadong Jaya': { lat: 5.968231251437555, lng: 116.07209414557116 }
};

// Build flat stop index with aliases for fuzzy matching
const ALL_STOPS = [];
const ALIASES = {
  'kkia': 'KK Sentral', 'kk sentral': 'KK Sentral', 'sentral': 'KK Sentral',
  'jesselton point': 'Jesselton Point Ferry Terminal',
  'ferry terminal': 'Jesselton Point Ferry Terminal',
  'jesselton ferry': 'Jesselton Point Ferry Terminal',
  '1borneo': '1 Borneo', 'one borneo': '1 Borneo',
  'likas': 'Likas Plaza', 'likas plaza': 'Likas Plaza',
  'mcd': 'McD Anjung Selera', 'mcdonalds': 'McD Anjung Selera',
  'masjid': 'Masjid Bandaraya', 'bandaraya': 'Masjid Bandaraya',
  'ums': 'UMS', 'universiti malaysia sabah': 'UMS',
  'kpj': 'KPJ', 'kpj hospital': 'KPJ',
  'centre point': 'Centre Point', 'centerpoint': 'Centre Point',
  'utc': 'UTC', 'urban transformation centre': 'UTC',
  'sicc': 'SICC', 'kpkps': 'KPKPS', 'hqe 1': 'HQE 1', 'hqe 2': 'HQE 2',
  'alamesra': 'Alamesra I', 'stadium': 'Stadium Hoki',
  'kompleks sukan': 'Kompleks Sukan Likas', 'sports complex': 'Kompleks Sukan Likas',
  'menara kinabalu': 'Menara Kinabalu', 'innoprise': 'Innoprise',
  'segama': 'Segama', 'sadong jaya': 'Sadong Jaya',
};

Object.values(ROUTES).forEach(r => {
  [...r.outbound, ...r.inbound].forEach(s => {
    if (!ALL_STOPS.find(x => x.name === s)) ALL_STOPS.push({ name: s });
  });
});
const UNIQUE_STOPS = [...new Set(ALL_STOPS.map(s => s.name))].sort();

// ─── FUZZY MATCH ───────────────────────────────────────────────
function normalise(s) { return s.toLowerCase().replace(/[.\-]/g,'').trim(); }

function resolveStop(input) {
  const n = normalise(input);
  // exact alias
  if (ALIASES[n]) return ALIASES[n];
  // exact match
  const exact = UNIQUE_STOPS.find(s => normalise(s) === n);
  if (exact) return exact;
  // starts-with
  const starts = UNIQUE_STOPS.find(s => normalise(s).startsWith(n) || n.startsWith(normalise(s)));
  if (starts) return starts;
  // contains
  const contains = UNIQUE_STOPS.filter(s => normalise(s).includes(n) || n.includes(normalise(s)));
  if (contains.length === 1) return contains[0];
  if (contains.length > 1) return contains[0]; // best guess
  return null;
}

function fuzzySearch(input) {
  if (!input || input.length < 1) return [];
  const n = normalise(input);
  return UNIQUE_STOPS.filter(s => normalise(s).includes(n) || n.includes(normalise(s).substring(0,3))).slice(0, 8);
}

function getStopMeta(stopName) {
  const meta = [];
  Object.entries(ROUTES).forEach(([code, r]) => {
    if (r.outbound.includes(stopName)) meta.push({ route: code, dir: 'Outbound' });
    if (r.inbound.includes(stopName)) meta.push({ route: code, dir: 'Inbound' });
  });
  return meta;
}

// ─── ROUTE FINDER ─────────────────────────────────────────────
function findRoute(fromStop, toStop) {
  if (fromStop === toStop) return { type: 'same' };

  const results = [];

  // Check each route, each direction for DIRECT routes
  Object.entries(ROUTES).forEach(([code, r]) => {
    ['outbound','inbound'].forEach(dir => {
      const stops = r[dir];
      const fi = stops.indexOf(fromStop);
      const ti = stops.indexOf(toStop);
      if (fi !== -1 && ti !== -1 && fi < ti) {
        results.push({
          type: 'direct',
          route: code,
          direction: dir,
          stops: stops.slice(fi, ti + 1),
          numStops: ti - fi,
          boardAt: fromStop,
          alightAt: toStop
        });
      }
    });
  });

  if (results.length > 0) {
    results.sort((a,b) => a.numStops - b.numStops);
    return { type: 'found', options: results };
  }

  // Try SAME-ROUTE TRANSFERS (e.g., SICC to Damai Plaza via KPJ on S05)
  const sameRouteTransfers = [];
  Object.entries(ROUTES).forEach(([code, r]) => {
    ['outbound','inbound'].forEach(dirA => {
      ['outbound','inbound'].forEach(dirB => {
        if (dirA === dirB) return; // Skip same direction (already checked above)
        
        const stopsA = r[dirA];
        const stopsB = r[dirB];
        const fi = stopsA.indexOf(fromStop);
        const ti = stopsB.indexOf(toStop);
        
        if (fi !== -1 && ti !== -1) {
          // Find common stops between the two directions (potential transfer points)
          const commonStops = stopsA.filter(s => stopsB.includes(s));
          
          commonStops.forEach(transferStop => {
            const transferIdxA = stopsA.indexOf(transferStop);
            const transferIdxB = stopsB.indexOf(transferStop);
            
            // Check if we can reach transfer point from origin and destination from transfer point
            if (fi < transferIdxA && transferIdxB < ti) {
              sameRouteTransfers.push({
                type: 'transfer',
                sameRoute: true,
                leg1: { 
                  route: code, 
                  direction: dirA, 
                  stops: stopsA.slice(fi, transferIdxA + 1), 
                  boardAt: fromStop, 
                  alightAt: transferStop 
                },
                leg2: { 
                  route: code, 
                  direction: dirB, 
                  stops: stopsB.slice(transferIdxB, ti + 1), 
                  boardAt: transferStop, 
                  alightAt: toStop 
                },
                transferPoint: transferStop,
                totalStops: (transferIdxA - fi) + (ti - transferIdxB)
              });
            }
          });
        }
      });
    });
  });

  // Try MULTI-ROUTE TRANSFERS via any common stop
  const multiRouteTransfers = [];
  Object.entries(ROUTES).forEach(([codeA, rA]) => {
    ['outbound','inbound'].forEach(dirA => {
      const stopsA = rA[dirA];
      const fi = stopsA.indexOf(fromStop);
      if (fi === -1) return;
      
      Object.entries(ROUTES).forEach(([codeB, rB]) => {
        if (codeA === codeB) return; // Skip same route (handled above)
        
        ['outbound','inbound'].forEach(dirB => {
          const stopsB = rB[dirB];
          const ti = stopsB.indexOf(toStop);
          if (ti === -1) return;
          
          // Find all common stops between these two route segments
          const commonStops = stopsA.filter(s => stopsB.includes(s));
          
          commonStops.forEach(transferStop => {
            const transferIdxA = stopsA.indexOf(transferStop);
            const transferIdxB = stopsB.indexOf(transferStop);
            
            // Check if we can reach transfer point from origin and destination from transfer point
            if (fi < transferIdxA && transferIdxB < ti) {
              multiRouteTransfers.push({
                type: 'transfer',
                sameRoute: false,
                leg1: { 
                  route: codeA, 
                  direction: dirA, 
                  stops: stopsA.slice(fi, transferIdxA + 1), 
                  boardAt: fromStop, 
                  alightAt: transferStop 
                },
                leg2: { 
                  route: codeB, 
                  direction: dirB, 
                  stops: stopsB.slice(transferIdxB, ti + 1), 
                  boardAt: transferStop, 
                  alightAt: toStop 
                },
                transferPoint: transferStop,
                totalStops: (transferIdxA - fi) + (ti - transferIdxB)
              });
            }
          });
        });
      });
    });
  });

  // Combine all transfer options
  const allTransfers = [...sameRouteTransfers, ...multiRouteTransfers];
  
  if (allTransfers.length > 0) {
    // Sort by total stops (shortest journey first)
    allTransfers.sort((a,b) => a.totalStops - b.totalStops);
    return { type: 'found', options: allTransfers };
  }

  // Try 2-TRANSFER (3-leg) journeys for complex routes
  const twoTransferJourneys = [];
  Object.entries(ROUTES).forEach(([codeA, rA]) => {
    ['outbound','inbound'].forEach(dirA => {
      const stopsA = rA[dirA];
      const fi = stopsA.indexOf(fromStop);
      if (fi === -1) return;
      
      // Find all possible first transfer points
      Object.entries(ROUTES).forEach(([codeB, rB]) => {
        ['outbound','inbound'].forEach(dirB => {
          const stopsB = rB[dirB];
          const commonAB = stopsA.filter(s => stopsB.includes(s));
          
          commonAB.forEach(transfer1 => {
            const t1IdxA = stopsA.indexOf(transfer1);
            const t1IdxB = stopsB.indexOf(transfer1);
            if (fi >= t1IdxA) return; // Can't reach transfer1 from origin
            
            // Find second leg to final transfer point
            Object.entries(ROUTES).forEach(([codeC, rC]) => {
              ['outbound','inbound'].forEach(dirC => {
                const stopsC = rC[dirC];
                const ti = stopsC.indexOf(toStop);
                if (ti === -1) return;
                
                const commonBC = stopsB.filter(s => stopsC.includes(s));
                
                commonBC.forEach(transfer2 => {
                  const t2IdxB = stopsB.indexOf(transfer2);
                  const t2IdxC = stopsC.indexOf(transfer2);
                  if (t1IdxB >= t2IdxB || t2IdxC >= ti) return; // Invalid path
                  
                  twoTransferJourneys.push({
                    type: 'two_transfer',
                    leg1: {
                      route: codeA,
                      direction: dirA,
                      stops: stopsA.slice(fi, t1IdxA + 1),
                      boardAt: fromStop,
                      alightAt: transfer1
                    },
                    leg2: {
                      route: codeB,
                      direction: dirB,
                      stops: stopsB.slice(t1IdxB, t2IdxB + 1),
                      boardAt: transfer1,
                      alightAt: transfer2
                    },
                    leg3: {
                      route: codeC,
                      direction: dirC,
                      stops: stopsC.slice(t2IdxC, ti + 1),
                      boardAt: transfer2,
                      alightAt: toStop
                    },
                    transfer1: transfer1,
                    transfer2: transfer2,
                    totalStops: (t1IdxA - fi) + (t2IdxB - t1IdxB) + (ti - t2IdxC)
                  });
                });
              });
            });
          });
        });
      });
    });
  });

  if (twoTransferJourneys.length > 0) {
    twoTransferJourneys.sort((a,b) => a.totalStops - b.totalStops);
    return { type: 'found', options: twoTransferJourneys };
  }

  return { type: 'notfound' };
}

function estimateDuration(numStops) {
  const mins = numStops * 3 + 5;
  const lo = Math.max(5, mins - 5), hi = mins + 5;
  return `${lo}–${hi} min`;
}

// ─── RENDER RESULT ─────────────────────────────────────────────
function renderResult(fromStop, toStop) {
  const result = findRoute(fromStop, toStop);
  const el = document.getElementById('result');

  if (result.type === 'same') {
    el.innerHTML = `<div class="not-found"><h3>Same stop!</h3><p>Your origin and destination are the same stop.</p></div>`;
    return;
  }

  if (result.type === 'notfound') {
    el.innerHTML = `
      <div class="not-found">
        <h3>⚠️ No direct Bas Pink route found</h3>
        <p>There is no Bas Pink (S01/S05) connection between <strong>${fromStop}</strong> and <strong>${toStop}</strong> at this time.</p>
        <p style="margin-top:6px">Both stops may be on the same route but require travelling in the wrong direction. Try swapping origin and destination, or transfer via KK Sentral.</p>
      </div>`;
    return;
  }

  const best = result.options[0];
  const isTransfer = best.type === 'transfer';
  const isTwoTransfer = best.type === 'two_transfer';
  const totalStops = (isTransfer || isTwoTransfer) ? best.totalStops : best.numStops;
  const duration = estimateDuration(totalStops);

  let stepsHTML = '';

  if (!isTransfer && !isTwoTransfer) {
    const dirLabel = best.direction === 'outbound' ? 'Outbound →' : 'Inbound ←';
    const intermediate = best.stops.slice(1, -1);
    stepsHTML = `
      <div class="step">
        <div class="step-dot dot-start">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="9" stroke-dasharray="2 2"/></svg>
        </div>
        <div class="step-content">
          <div class="step-title">Board at ${best.boardAt}</div>
          <div class="step-desc">Wait for Bas Pink <strong>${best.route}</strong> heading ${dirLabel}</div>
          <span class="step-tag tag-pink">${best.route}</span>
          <span class="step-tag tag-blue">${dirLabel}</span>
        </div>
      </div>
      ${intermediate.length > 0 ? `
      <div class="step">
        <div class="step-dot dot-bus">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="2" y="7" width="20" height="12" rx="2"/><path d="M6 7V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2"/><line x1="6" y1="13" x2="6" y2="13" stroke-width="3" stroke-linecap="round"/><line x1="18" y1="13" x2="18" y2="13" stroke-width="3" stroke-linecap="round"/><path d="M6 19v1m12-1v1"/></svg>
        </div>
        <div class="step-content">
          <div class="step-title">Ride ${best.numStops} stop${best.numStops>1?'s':''}</div>
          <div class="step-desc">Stay on the bus through ${intermediate.length} stop${intermediate.length>1?'s':''} until <strong>${best.alightAt}</strong></div>
          <div class="stops-strip">
            <div class="stops-strip-label">Stop sequence</div>
            <div class="stops-flow">
              ${best.stops.map((s,i) => `
                <span class="s-stop ${i===0?'s-board':i===best.stops.length-1?'s-alight':''}">${s}</span>
                ${i < best.stops.length-1 ? '<span class="s-arrow">›</span>' : ''}
              `).join('')}
            </div>
          </div>
        </div>
      </div>` : ''}
      <div class="step">
        <div class="step-dot dot-arrive">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        </div>
        <div class="step-content" style="padding-bottom:0">
          <div class="step-title">Alight at ${best.alightAt}</div>
          <div class="step-desc">You have arrived at your destination.</div>
          <span class="step-tag tag-green">✓ Arrived</span>
        </div>
      </div>`;
  } else if (isTwoTransfer) {
    const dir1 = best.leg1.direction === 'outbound' ? 'Outbound →' : 'Inbound ←';
    const dir2 = best.leg2.direction === 'outbound' ? 'Outbound →' : 'Inbound ←';
    const dir3 = best.leg3.direction === 'outbound' ? 'Outbound →' : 'Inbound ←';
    
    stepsHTML = `
      <div class="step">
        <div class="step-dot dot-start">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="9" stroke-dasharray="2 2"/></svg>
        </div>
        <div class="step-content">
          <div class="step-title">Board at ${best.leg1.boardAt}</div>
          <div class="step-desc">Take Bas Pink <strong>${best.leg1.route}</strong> ${dir1} towards ${best.transfer1}</div>
          <span class="step-tag tag-pink">${best.leg1.route}</span>
          <span class="step-tag tag-blue">${dir1}</span>
          <div class="stops-strip">
            <div class="stops-strip-label">Leg 1 stops (${best.leg1.stops.length - 1} stop${best.leg1.stops.length > 2 ? 's' : ''})</div>
            <div class="stops-flow">
              ${best.leg1.stops.map((s,i) => `
                <span class="s-stop ${i===0?'s-board':i===best.leg1.stops.length-1?'s-alight':''}">${s}</span>
                ${i < best.leg1.stops.length-1 ? '<span class="s-arrow">›</span>' : ''}
              `).join('')}
            </div>
          </div>
        </div>
      </div>
      <div class="step">
        <div class="step-dot dot-transfer">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>
        </div>
        <div class="step-content">
          <div class="step-title">Transfer #1 at ${best.transfer1}</div>
          <div class="step-desc">Alight and wait for Bas Pink <strong>${best.leg2.route}</strong> ${dir2}</div>
          <span class="step-tag tag-orange">Transfer 1 of 2</span>
        </div>
      </div>
      <div class="step">
        <div class="step-dot dot-bus">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="2" y="7" width="20" height="12" rx="2"/><path d="M6 7V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2"/><line x1="6" y1="13" x2="6" y2="13" stroke-width="3" stroke-linecap="round"/><line x1="18" y1="13" x2="18" y2="13" stroke-width="3" stroke-linecap="round"/><path d="M6 19v1m12-1v1"/></svg>
        </div>
        <div class="step-content">
          <div class="step-title">Board ${best.leg2.route} at ${best.transfer1}</div>
          <div class="step-desc">Ride towards ${best.transfer2}</div>
          <span class="step-tag tag-pink">${best.leg2.route}</span>
          <span class="step-tag tag-blue">${dir2}</span>
          <div class="stops-strip">
            <div class="stops-strip-label">Leg 2 stops (${best.leg2.stops.length - 1} stop${best.leg2.stops.length > 2 ? 's' : ''})</div>
            <div class="stops-flow">
              ${best.leg2.stops.map((s,i) => `
                <span class="s-stop ${i===0?'s-board':i===best.leg2.stops.length-1?'s-alight':''}">${s}</span>
                ${i < best.leg2.stops.length-1 ? '<span class="s-arrow">›</span>' : ''}
              `).join('')}
            </div>
          </div>
        </div>
      </div>
      <div class="step">
        <div class="step-dot dot-transfer">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>
        </div>
        <div class="step-content">
          <div class="step-title">Transfer #2 at ${best.transfer2}</div>
          <div class="step-desc">Alight and wait for Bas Pink <strong>${best.leg3.route}</strong> ${dir3}</div>
          <span class="step-tag tag-orange">Transfer 2 of 2</span>
        </div>
      </div>
      <div class="step">
        <div class="step-dot dot-bus">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="2" y="7" width="20" height="12" rx="2"/><path d="M6 7V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2"/><line x1="6" y1="13" x2="6" y2="13" stroke-width="3" stroke-linecap="round"/><line x1="18" y1="13" x2="18" y2="13" stroke-width="3" stroke-linecap="round"/><path d="M6 19v1m12-1v1"/></svg>
        </div>
        <div class="step-content">
          <div class="step-title">Board ${best.leg3.route} at ${best.transfer2}</div>
          <div class="step-desc">Final leg towards <strong>${best.leg3.alightAt}</strong></div>
          <span class="step-tag tag-pink">${best.leg3.route}</span>
          <span class="step-tag tag-blue">${dir3}</span>
          <div class="stops-strip">
            <div class="stops-strip-label">Leg 3 stops (${best.leg3.stops.length - 1} stop${best.leg3.stops.length > 2 ? 's' : ''})</div>
            <div class="stops-flow">
              ${best.leg3.stops.map((s,i) => `
                <span class="s-stop ${i===0?'s-board':i===best.leg3.stops.length-1?'s-alight':''}">${s}</span>
                ${i < best.leg3.stops.length-1 ? '<span class="s-arrow">›</span>' : ''}
              `).join('')}
            </div>
          </div>
        </div>
      </div>
      <div class="step">
        <div class="step-dot dot-arrive">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        </div>
        <div class="step-content" style="padding-bottom:0">
          <div class="step-title">Alight at ${best.leg3.alightAt}</div>
          <div class="step-desc">You have arrived at your destination.</div>
          <span class="step-tag tag-green">✓ Arrived</span>
        </div>
      </div>`;
  } else {
    const dir1 = best.leg1.direction === 'outbound' ? 'Outbound →' : 'Inbound ←';
    const dir2 = best.leg2.direction === 'outbound' ? 'Outbound →' : 'Inbound ←';
    const transferPoint = best.transferPoint || best.leg1.alightAt;
    const isSameRoute = best.sameRoute || best.leg1.route === best.leg2.route;
    const transferDesc = isSameRoute 
      ? `Stay at ${transferPoint} and wait for the same bus (${best.leg2.route}) going ${dir2}`
      : `Alight at ${transferPoint} and wait for Bas Pink <strong>${best.leg2.route}</strong> ${dir2}`;
    
    stepsHTML = `
      <div class="step">
        <div class="step-dot dot-start">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="9" stroke-dasharray="2 2"/></svg>
        </div>
        <div class="step-content">
          <div class="step-title">Board at ${best.leg1.boardAt}</div>
          <div class="step-desc">Take Bas Pink <strong>${best.leg1.route}</strong> ${dir1} towards ${transferPoint}</div>
          <span class="step-tag tag-pink">${best.leg1.route}</span>
          <span class="step-tag tag-blue">${dir1}</span>
          <div class="stops-strip">
            <div class="stops-strip-label">Leg 1 stops</div>
            <div class="stops-flow">
              ${best.leg1.stops.map((s,i) => `
                <span class="s-stop ${i===0?'s-board':i===best.leg1.stops.length-1?'s-alight':''}">${s}</span>
                ${i < best.leg1.stops.length-1 ? '<span class="s-arrow">›</span>' : ''}
              `).join('')}
            </div>
          </div>
        </div>
      </div>
      <div class="step">
        <div class="step-dot dot-transfer">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>
        </div>
        <div class="step-content">
          <div class="step-title">Transfer at ${transferPoint}</div>
          <div class="step-desc">${transferDesc}</div>
          <span class="step-tag tag-orange">${isSameRoute ? 'Same route transfer' : 'Transfer here'}</span>
        </div>
      </div>
      <div class="step">
        <div class="step-dot dot-bus">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="2" y="7" width="20" height="12" rx="2"/><path d="M6 7V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2"/><line x1="6" y1="13" x2="6" y2="13" stroke-width="3" stroke-linecap="round"/><line x1="18" y1="13" x2="18" y2="13" stroke-width="3" stroke-linecap="round"/><path d="M6 19v1m12-1v1"/></svg>
        </div>
        <div class="step-content">
          <div class="step-title">Board ${best.leg2.route} at ${transferPoint}</div>
          <div class="step-desc">Ride towards <strong>${best.leg2.alightAt}</strong></div>
          <span class="step-tag tag-pink">${best.leg2.route}</span>
          <span class="step-tag tag-blue">${dir2}</span>
          <div class="stops-strip">
            <div class="stops-strip-label">Leg 2 stops</div>
            <div class="stops-flow">
              ${best.leg2.stops.map((s,i) => `
                <span class="s-stop ${i===0?'s-board':i===best.leg2.stops.length-1?'s-alight':''}">${s}</span>
                ${i < best.leg2.stops.length-1 ? '<span class="s-arrow">›</span>' : ''}
              `).join('')}
            </div>
          </div>
        </div>
      </div>
      <div class="step">
        <div class="step-dot dot-arrive">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        </div>
        <div class="step-content" style="padding-bottom:0">
          <div class="step-title">Alight at ${best.leg2.alightAt}</div>
          <div class="step-desc">You have arrived at your destination.</div>
          <span class="step-tag tag-green">✓ Arrived</span>
        </div>
      </div>`;
  }

  const routeTag = isTwoTransfer ? `${best.leg1.route} + ${best.leg2.route} + ${best.leg3.route}` : isTransfer ? `${best.leg1.route} + ${best.leg2.route}` : best.route;
  const transferPoint = isTwoTransfer ? `${best.transfer1} & ${best.transfer2}` : isTransfer ? (best.transferPoint || best.leg1.alightAt) : null;
  const isSameRoute = isTransfer && (best.sameRoute || best.leg1.route === best.leg2.route);

  el.innerHTML = `
    <div class="result-card">
      <div class="result-header">
        <div>
          <div class="result-route-label">Bas Pink · ${routeTag}</div>
          <div class="result-route-text">${fromStop} → ${toStop}</div>
          <div class="result-summary">${isTwoTransfer ? `2 transfers at ${transferPoint} · ${totalStops} stops total` : isTransfer ? `Transfer at ${transferPoint} · ${totalStops} stops total` : `Direct · ${totalStops} stop${totalStops>1?'s':''}`}</div>
        </div>
        <div class="result-badges">
          <span class="rbadge rbadge-white">⏱ ${duration}</span>
          <span class="rbadge rbadge-green">FREE RM 0</span>
        </div>
      </div>
      <div class="result-body">
        <div class="steps">${stepsHTML}</div>
        <div class="fare-box">
          <div>
            <div class="fare-label">Bas Pink</div>
            <div class="fare-sub">Free for all</div>
          </div>
          <div style="text-align:right">
            <div class="fare-amount">RM 0</div>
            <div class="fare-sub">FREE</div>
          </div>
        </div>
        <div class="tips-box">
          <div class="tips-title">💡 Tips</div>
          <div class="tip-item">Buses run approximately every 20–30 minutes, 6AM to 10PM daily.</div>
          <div class="tip-item">Bas Pink is free — just board and show your MyKad or IC if asked.</div>
          ${isTwoTransfer ? `<div class="tip-item">This journey requires 2 transfers. Allow extra time for waiting between buses at ${best.transfer1} and ${best.transfer2}.</div>` : isTransfer ? `<div class="tip-item">${isSameRoute ? `When transferring at ${transferPoint}, stay at the same stop and wait for the bus going the opposite direction.` : `When transferring at ${transferPoint}, wait on the correct side for your next route.`}</div>` : ''}
          <div class="tip-item">Both S01 and S05 start and terminate at KK Sentral.</div>
        </div>
        <div class="disclaimer">Route data sourced from official Bas Pink Sabah route maps. Schedule and frequency may vary — always check at the bus stop for latest information.</div>
      </div>
    </div>`;
}

// ─── SEARCH HANDLER ───────────────────────────────────────────
function searchRoute() {
  const originVal = document.getElementById('originInput').value.trim();
  const destVal = document.getElementById('destInput').value.trim();
  if (!originVal || !destVal) { alert('Please enter both origin and destination.'); return; }

  const fromStop = resolveStop(originVal);
  const toStop = resolveStop(destVal);

  if (!fromStop) {
    showNotFound(originVal, 'origin');
    return;
  }
  if (!toStop) {
    showNotFound(destVal, 'destination');
    return;
  }

  renderResult(fromStop, toStop);
}

function showNotFound(query, role) {
  const suggestions = fuzzySearch(query).slice(0, 5);
  document.getElementById('result').innerHTML = `
    <div class="not-found">
      <h3>Stop not found</h3>
      <p>"${query}" is not a Bas Pink stop. Did you mean one of these?</p>
      ${suggestions.length > 0 ? `
        <div class="suggestions">
          ${suggestions.map(s => `<span class="sug-chip" onclick="fillFrom('${s}','${role}')">${s}</span>`).join('')}
        </div>` : '<p style="margin-top:8px;font-size:12px">Tap a route card above to browse all stops.</p>'}
    </div>`;
}

function fillFrom(stop, role) {
  if (role === 'origin') document.getElementById('originInput').value = stop;
  else document.getElementById('destInput').value = stop;
  searchRoute();
}

// ─── AUTOCOMPLETE ─────────────────────────────────────────────
function setupAC(inputId, acId) {
  const input = document.getElementById(inputId);
  const ac = document.getElementById(acId);
  let activeIdx = -1;

  input.addEventListener('input', () => {
    const matches = fuzzySearch(input.value);
    activeIdx = -1;
    if (matches.length === 0 || input.value.length < 2) { ac.classList.remove('open'); return; }
    ac.innerHTML = matches.map((s,i) => {
      const meta = getStopMeta(s);
      const tags = [...new Set(meta.map(m => m.route))].map(r => `<span class="autocomplete-route-tag">${r}</span>`).join('');
      return `<div class="autocomplete-item" data-val="${s}" onclick="selectAC('${s}','${inputId}','${acId}')">${tags} ${s}</div>`;
    }).join('');
    ac.classList.add('open');
  });

  input.addEventListener('keydown', e => {
    const items = ac.querySelectorAll('.autocomplete-item');
    if (e.key === 'ArrowDown') { activeIdx = Math.min(activeIdx+1, items.length-1); highlight(items, activeIdx); e.preventDefault(); }
    else if (e.key === 'ArrowUp') { activeIdx = Math.max(activeIdx-1, 0); highlight(items, activeIdx); e.preventDefault(); }
    else if (e.key === 'Enter') {
      if (activeIdx >= 0 && items[activeIdx]) { selectAC(items[activeIdx].dataset.val, inputId, acId); }
      else { ac.classList.remove('open'); if (inputId === 'destInput') searchRoute(); else document.getElementById('destInput').focus(); }
    }
    else if (e.key === 'Escape') { ac.classList.remove('open'); }
  });

  document.addEventListener('click', e => { if (!input.contains(e.target) && !ac.contains(e.target)) ac.classList.remove('open'); });
}

function highlight(items, idx) { items.forEach((el,i) => el.classList.toggle('active', i===idx)); }

function selectAC(val, inputId, acId) {
  document.getElementById(inputId).value = val;
  document.getElementById(acId).classList.remove('open');
  if (inputId === 'destInput') searchRoute();
  else document.getElementById('destInput').focus();
}

setupAC('originInput', 'originAC');
setupAC('destInput', 'destAC');

// ─── HELPERS ──────────────────────────────────────────────────
function swapLocations() {
  const o = document.getElementById('originInput'), d = document.getElementById('destInput');
  [o.value, d.value] = [d.value, o.value];
}

function quickFill(from, to) {
  document.getElementById('originInput').value = from;
  document.getElementById('destInput').value = to;
  searchRoute();
}

// ─── MODAL ─────────────────────────────────────────────────────
function showModal(code) {
  const r = ROUTES[code];
  document.getElementById('modalTitle').textContent = `${code} — ${r.label}`;
  document.getElementById('modalMeta').textContent = `${r.distance} · Free · ~6AM–10PM · Every 20–30 min`;
  document.getElementById('modalBody').innerHTML = `
    <div class="modal-dir-label">→ Outbound stops (${r.outbound.length} stops)</div>
    <div class="stops-list">${r.outbound.map((s,i) =>
      `<div class="s-row"><div class="s-dot ${i===0||i===r.outbound.length-1?'terminal':''}"></div><div class="s-name">${s}</div></div>`
    ).join('')}</div>
    <div class="modal-dir-label">← Inbound stops (${r.inbound.length} stops)</div>
    <div class="stops-list">${r.inbound.map((s,i) =>
      `<div class="s-row"><div class="s-dot ${i===0||i===r.inbound.length-1?'terminal':''}"></div><div class="s-name">${s}</div></div>`
    ).join('')}</div>`;
  document.getElementById('stopsModal').classList.add('open');
}

function closeModal() { document.getElementById('stopsModal').classList.remove('open'); }
document.getElementById('stopsModal').addEventListener('click', e => { if (e.target === document.getElementById('stopsModal')) closeModal(); });

document.getElementById('originInput').addEventListener('keydown', e => { if (e.key === 'Enter' && !document.getElementById('originAC').classList.contains('open')) document.getElementById('destInput').focus(); });

// ─── GEOLOCATION ───────────────────────────────────────────────
// Calculate distance between two GPS coordinates using Haversine formula
function getDistance(lat1, lng1, lat2, lng2) {
  const R = 6371; // Earth's radius in kilometers
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLng/2) * Math.sin(dLng/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c; // Distance in km
}

// Find nearest stops to user's location
function findNearestStops(userLat, userLng, limit = 5) {
  const distances = [];
  
  for (const [stopName, coords] of Object.entries(STOPS_COORDS)) {
    // Skip stops without coordinates
    if (!coords.lat || !coords.lng) continue;
    
    const distance = getDistance(userLat, userLng, coords.lat, coords.lng);
    distances.push({ stopName, distance, coords });
  }
  
  // Sort by distance and return top N
  distances.sort((a, b) => a.distance - b.distance);
  return distances.slice(0, limit);
}

// Get user's location and show nearest stops
function useMyLocation(targetField) {
  if (!navigator.geolocation) {
    alert('Geolocation is not supported by your browser');
    return;
  }
  
  // Show loading state
  const button = document.getElementById(targetField === 'origin' ? 'locationBtnOrigin' : 'locationBtnDest');
  const originalText = button.innerHTML;
  button.innerHTML = '📍 Getting location...';
  button.disabled = true;
  
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      const nearest = findNearestStops(latitude, longitude, 5);
      
      // Reset button
      button.innerHTML = originalText;
      button.disabled = false;
      
      if (nearest.length === 0) {
        alert('No stops with coordinates found. Please add stop coordinates first.');
        return;
      }
      
      // Show nearest stops in a simple list
      const stopsList = nearest.map((s, i) => 
        `${i + 1}. ${s.stopName} (${s.distance.toFixed(2)} km away)`
      ).join('\n');
      
      const selected = prompt(
        `Nearest stops to your location:\n\n${stopsList}\n\nEnter the number of the stop you want to select (1-${nearest.length}):`,
        '1'
      );
      
      if (selected) {
        const index = parseInt(selected) - 1;
        if (index >= 0 && index < nearest.length) {
          const stopName = nearest[index].stopName;
          const inputField = document.getElementById(targetField === 'origin' ? 'originInput' : 'destInput');
          inputField.value = stopName;
          
          // Trigger search if both fields are filled
          const originVal = document.getElementById('originInput').value;
          const destVal = document.getElementById('destInput').value;
          if (originVal && destVal) {
            searchRoute();
          }
        }
      }
    },
    (error) => {
      button.innerHTML = originalText;
      button.disabled = false;
      
      let message = 'Unable to get your location. ';
      if (error.code === error.PERMISSION_DENIED) {
        message += 'Please allow location access in your browser settings.';
      } else if (error.code === error.POSITION_UNAVAILABLE) {
        message += 'Location information is unavailable.';
      } else if (error.code === error.TIMEOUT) {
        message += 'Location request timed out.';
      }
      alert(message);
    },
    {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0
    }
  );
}
