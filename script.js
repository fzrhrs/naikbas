// ─── ROUTE DATA ────────────────────────────────────────────────
// Major transfer hubs - these are emphasized in route planning
const MAJOR_HUBS = {
  'KK Sentral': ['S01', 'S02', 'S03', 'S04', 'S05', 'S06', 'S07', 'S08'],
  'Terminal Menggatal': ['S03', 'S04']
};

const ROUTES = {
  S01: {
    name: 'S01', label: 'KK Sentral Loop', distance: '31.78 km',
    available: true,
    stops: [
      'KK Sentral','Jabatan Audit','Monocolo Boutique Hotel','Sawit Kinabalu',
      'Wisma Wanita','Taman Yakim Jaya','Basel Likas','SM Shan Tao',
      'OPP SDA Likas','Wisma Kosan','Likas Plaza','OPP Pintu Masjid Bandaraya',
      'Masjid Bandaraya','McD Anjung Selera','Anjung Selera','Menara Kinabalu',
      'Innoprise','KPKPS','UMS','1 Borneo','Kg. Delima','Alamesra I',
      'OPP 1 Borneo','Alamesra II','OPP KPKPS','OPP Innoprise',
      'Pintu Masjid Bandaraya','Shell Likas','Kg. Cendrakasih','Luyang Plaza',
      'Foh Sang','Bornion','Taman Layang-Layang','Zirafah','OPP Mahkamah',
      'OPP Jabatan Audit'
    ]
  },
  S02: {
    name: 'S02', label: 'KK Sentral Loop', distance: '32.88 km',
    available: false,
    availableFrom: 'July 2026',
    stops: [
      'KK Sentral','Jabatan Audit','Mahkamah Kota Kinabalu','Grace Chapel',
      'Foh Sang','E-West','Taman Kinabalu','City Mall','Bunga Raja',
      'Iramanis Commercial Centre','Metro Town','OPP BSA','Puh Toh Si',
      'Taman Cempaka','Likas Plaza','OPP Pintu Masjid Bandaraya','Masjid Bandaraya',
      'McD Anjung Selera','Anjung Selera','Menara Kinabalu','Innoprise','KPKPS',
      'UMS','1 Borneo','Kg. Delima','Alamesra I','OPP 1 Borneo','Alamesra II',
      'OPP KPKPS','OPP Innoprise','OPP Anjung Selera','Maksak','Tamu KPD',
      'Pelabuhan Lama','Mosque Valley','Holiday Inn'
    ]
  },
  S03: {
    name: 'S03', label: 'Terminal Menggatal Loop', distance: '38.34 km',
    available: false,
    availableFrom: 'July 2026',
    stops: [
      'Terminal Menggatal','SK Darau','Menggatal Plaza','Bigwheel-Sg. Darau',
      'SK Lok Yuk Inanam','EG Mall','OPP Kilang Papan Hiong Tiong',
      'Wisma Chu Tai Seng','FBN','Visa Light Industrial','Puh Toh Si',
      'Taman Cempaka','Plaza Juta','OPP Wisma Kosan','Chanyai Villa',
      'SDA Likas','OPP SM Shan Tao','Taman Winley Estate','Basel Likas',
      'Kian Kok','Taman Keramat I','Taman Keramat II','Sunny Garden',
      'OPP Jabatan Audit','KK Sentral','Chung Hwa KK','Wisma Budaya','DBKK',
      'SICC','Sabah Energy','Bulatan Istiadat','Taman Awam Teluk Likas',
      'Masjid Bandaraya','McD Anjung Selera','Masjid Bandaraya','Menara Kinabalu',
      'Innoprise','KPKPS','UMS','1 Borneo','Kg. Delima','KFC Sulaman',
      'Kingfisher Sulaman','1 Sulaman','Akademi Bomba','Kg. Delima','Eco Park',
      'Desa Kastam','UCA','Klinik Kesihatan Menggatal'
    ]
  },
  S04: {
    name: 'S04', label: 'Terminal Menggatal Loop', distance: '38.66 km',
    available: false,
    availableFrom: 'July 2026',
    stops: [
      'Terminal Menggatal','Wisma Chan Furniture','Pekan Menggatal',
      'OPP Klinik Kesihatan Menggatal','SPRIM','BCCIM Sepanggar Church',
      'UA Apartment 2','UCA1','Taman Rimbunan Hijau','Alamesra I',
      'OPP 1 Borneo','Alamesra II','OPP KPKPS','OPP Innoprise',
      'Menara Kinabalu','OPP Anjung Selera','Maksak','Tamu KPD',
      'Pelabuhan Lama','Mosque Valley','Holiday Inn','KK Sentral','Jabatan Audit',
      'Monocolo Boutique Hotel','Sawit Kinabalu','Wisma Wanita','Taman Yakim Jaya',
      'Basel Likas','SM Shan Tao','SDA Likas','Wisma Kosan','Shell Likas',
      'Khong Guan','Terminal Bas Bandaraya (Utara)','Inanam Business Centre',
      'Wisma Chu Tai Seng','Balai Polis Inanam','Hiong Tiong','EG Mall',
      'SK Lok Yuk Inanam','Kim Heng- Sg. Darau'
    ]
  },
  S05: {
    name: 'S05', label: 'KK Sentral Loop', distance: '17.84 km',
    available: true,
    stops: [
      'KK Sentral','Centre Point','Segama','Jesselton Mall',
      'Jesselton Point Ferry Terminal','Jesselton Quay','SICC',
      'Sabah Energy','Sabah Trade Centre','Kompleks Sukan Likas',
      'Stadium Hoki','KPJ','HQE 2','Damai Plaza','E-West','Taman Kinabalu',
      'Lido','Taman Fortuna','Vetro 11','HQE 1','Masjid Negeri','UTC',
      'Sacred Heart','Sadong Jaya'
    ]
  },
  S06: {
    name: 'S06', label: 'KK Sentral Loop', distance: '20.40 km',
    available: false,
    availableFrom: 'July 2026',
    stops: [
      'KK Sentral','Jabatan Audit','Karamunising Capital','Wisma Tun Fuad',
      'Wisma Hasil','Kereta Api Sembulan','Kolej Sabah','OPP HQE 1',
      'Muzium','Arkib Negeri Sabah','Luyang Plaza','Foh Sang','KPJ',
      'Dewan Damai','Tahung Shin','Stadium Hoki','Stadium Likas','Likas Square',
      'Tamu KPD','Pelabuhan Lama','Mosque Valley','Holiday Inn'
    ]
  },
  S07: {
    name: 'S07', label: 'KK Sentral Loop', distance: '20.00 km',
    available: false,
    availableFrom: 'July 2026',
    stops: [
      'KK Sentral','Sutera Avenue','Taman Sempelang','Aeropod','Taman Winly',
      'IPK Sabah','Pahlawan','Jejantas KKIA','KKIA','Millenium Centre',
      'Taman Olivia','OPP RTM','Kepayan Ridge','88 Market','Lido',
      'Taman Fortuna','Vetro 11','HQE 1','Masjid Negeri','UTC',
      'Sacred Heart','Sadong Jaya'
    ]
  },
  S08: {
    name: 'S08', label: 'KK Sentral Loop', distance: '20.00 km',
    available: false,
    availableFrom: 'July 2026',
    stops: [
      'KK Sentral','Jabatan Audit','Karamunising Capital','Wisma Tun Fuad',
      'Wisma Hasil','Kereta Api Sembulan','Kolej Sabah','OPP HQE 1',
      'Muzium','Arkib Negeri Sabah','Lido Avenue','Open University Malaysia',
      'RTM','Petronas Kg. Matambai','Kepayan Commercial Centre','KKIA',
      'Bengkel JKR','PERKESO','Sutera Harbour','Imago'
    ]
  }
};

// ─── STOP COORDINATES ──────────────────────────────────────────
// Complete list of all unique stops across all routes (S01-S08)
// Total: 155 unique stops
// TODO: Fill in null coordinates with actual GPS coordinates
// Find coordinates: Right-click location in Google Maps → Copy coordinates
// Format: { lat: 5.972100618028586, lng: 116.0687133858479 }
const STOPS_COORDS = {
  '1 Borneo': { lat: 6.035014165891865, lng: 116.12945488015463 },
  '1 Sulaman': { lat: null, lng: null },
  '88 Market': { lat: null, lng: null },
  'Aeropod': { lat: null, lng: null },
  'Akademi Bomba': { lat: null, lng: null },
  'Alamesra I': { lat: 6.0324826468668595, lng: 116.13742344439802 },
  'Alamesra II': { lat: 6.0324826468668595, lng: 116.13742344439802 },
  'Anjung Selera': { lat: 6.012372001780001, lng: 116.11421665669747 },
  'Arkib Negeri Sabah': { lat: null, lng: null },
  'BCCIM Sepanggar Church': { lat: null, lng: null },
  'Balai Polis Inanam': { lat: null, lng: null },
  'Basel Likas': { lat: 5.992169617465085, lng: 116.10739000859061 },
  'Bengkel JKR': { lat: null, lng: null },
  'Bigwheel-Sg. Darau': { lat: null, lng: null },
  'Bornion': { lat: 5.95771648646384, lng: 116.08725542393321 },
  'Bulatan Istiadat': { lat: null, lng: null },
  'Bunga Raja': { lat: null, lng: null },
  'Centre Point': { lat: 5.978095321875731, lng: 116.07245403372626 },
  'Chanyai Villa': { lat: null, lng: null },
  'Chung Hwa KK': { lat: null, lng: null },
  'City Mall': { lat: null, lng: null },
  'DBKK': { lat: null, lng: null },
  'Damai Plaza': { lat: 5.961766981039785, lng: 116.08906279564073 },
  'Desa Kastam': { lat: null, lng: null },
  'Dewan Damai': { lat: null, lng: null },
  'E-West': { lat: 5.959551303086942, lng: 116.08980247420486 },
  'EG Mall': { lat: null, lng: null },
  'Eco Park': { lat: null, lng: null },
  'FBN': { lat: null, lng: null },
  'Foh Sang': { lat: 5.958061011672116, lng: 116.08842497605467 },
  'Grace Chapel': { lat: null, lng: null },
  'HQE 1': { lat: 5.956983286664032, lng: 116.07344674482584 },
  'HQE 2': { lat: 5.9666899375903935, lng: 116.09462964482609 },
  'Hiong Tiong': { lat: null, lng: null },
  'Holiday Inn': { lat: null, lng: null },
  'IPK Sabah': { lat: null, lng: null },
  'Imago': { lat: null, lng: null },
  'Inanam Business Centre': { lat: null, lng: null },
  'Innoprise': { lat: 6.017655009452172, lng: 116.11489887736218 },
  'Iramanis Commercial Centre': { lat: null, lng: null },
  'Jabatan Audit': { lat: 5.968869154088299, lng: 116.0775065662619 },
  'Jejantas KKIA': { lat: null, lng: null },
  'Jesselton Mall': { lat: 5.988991159024047, lng: 116.07911401414056 },
  'Jesselton Point Ferry Terminal': { lat: 5.993134817162215, lng: 116.07908481784048 },
  'Jesselton Quay': { lat: 5.991696406930685, lng: 116.08195137790494 },
  'KFC Sulaman': { lat: null, lng: null },
  'KK Sentral': { lat: 5.972100618028586, lng: 116.0687133858479 },
  'KKIA': { lat: null, lng: null },
  'KPJ': { lat: 5.966853678956363, lng: 116.0944523932476 },
  'KPKPS': { lat: 6.02953870393648, lng: 116.11762433002676 },
  'Karamunising Capital': { lat: null, lng: null },
  'Kepayan Commercial Centre': { lat: null, lng: null },
  'Kepayan Ridge': { lat: null, lng: null },
  'Kereta Api Sembulan': { lat: null, lng: null },
  'Kg. Cendrakasih': { lat: 5.973675176159613, lng: 116.11204551784024 },
  'Kg. Delima': { lat: 6.033701896178388, lng: 116.13805019694802 },
  'Khong Guan': { lat: null, lng: null },
  'Kian Kok': { lat: null, lng: null },
  'Kim Heng- Sg. Darau': { lat: null, lng: null },
  'Kingfisher Sulaman': { lat: null, lng: null },
  'Klinik Kesihatan Menggatal': { lat: null, lng: null },
  'Kolej Sabah': { lat: null, lng: null },
  'Kompleks Sukan Likas': { lat: 5.983319172200248, lng: 116.09299299749063 },
  'Lido': { lat: 5.943677192545281, lng: 116.08239856437258 },
  'Lido Avenue': { lat: null, lng: null },
  'Likas Plaza': { lat: 5.992215687668505, lng: 116.10971682578352 },
  'Likas Square': { lat: null, lng: null },
  'Luyang Plaza': { lat: 5.954901432512527, lng: 116.09279851653338 },
  'Mahkamah Kota Kinabalu': { lat: null, lng: null },
  'Maksak': { lat: null, lng: null },
  'Masjid Bandaraya': { lat: 5.995769917828411, lng: 116.109067073662 },
  'Masjid Negeri': { lat: 5.960186881686585, lng: 116.06720833981922 },
  'McD Anjung Selera': { lat: 6.012372001780001, lng: 116.11421665669747 },
  'Menara Kinabalu': { lat: 6.015861270825684, lng: 116.11236953303893 },
  'Menggatal Plaza': { lat: null, lng: null },
  'Metro Town': { lat: null, lng: null },
  'Millenium Centre': { lat: null, lng: null },
  'Monocolo Boutique Hotel': { lat: 5.968836524771663, lng: 116.08353137790478 },
  'Mosque Valley': { lat: null, lng: null },
  'Muzium': { lat: null, lng: null },
  'OPP 1 Borneo': { lat: 6.035014165891865, lng: 116.12945488015463 },
  'OPP Anjung Selera': { lat: null, lng: null },
  'OPP BSA': { lat: null, lng: null },
  'OPP HQE 1': { lat: null, lng: null },
  'OPP Innoprise': { lat: 6.017655009452172, lng: 116.11489887736218 },
  'OPP Jabatan Audit': { lat: 5.968869154088299, lng: 116.0775065662619 },
  'OPP KPKPS': { lat: 6.02953870393648, lng: 116.11762433002676 },
  'OPP Kilang Papan Hiong Tiong': { lat: null, lng: null },
  'OPP Klinik Kesihatan Menggatal': { lat: null, lng: null },
  'OPP Mahkamah': { lat: 5.967609320044787, lng: 116.08096078345469 },
  'OPP Pintu Masjid Bandaraya': { lat: 5.995769917828411, lng: 116.109067073662 },
  'OPP RTM': { lat: null, lng: null },
  'OPP SDA Likas': { lat: null, lng: null },
  'OPP SM Shan Tao': { lat: null, lng: null },
  'OPP Wisma Kosan': { lat: null, lng: null },
  'Open University Malaysia': { lat: null, lng: null },
  'PERKESO': { lat: null, lng: null },
  'Pahlawan': { lat: null, lng: null },
  'Pekan Menggatal': { lat: null, lng: null },
  'Pelabuhan Lama': { lat: null, lng: null },
  'Petronas Kg. Matambai': { lat: null, lng: null },
  'Pintu Masjid Bandaraya': { lat: 5.995769917828411, lng: 116.109067073662 },
  'Plaza Juta': { lat: null, lng: null },
  'Puh Toh Si': { lat: null, lng: null },
  'RTM': { lat: null, lng: null },
  'SDA Likas': { lat: null, lng: null },
  'SICC': { lat: 5.997240075634912, lng: 116.08514817181202 },
  'SK Darau': { lat: null, lng: null },
  'SK Lok Yuk Inanam': { lat: null, lng: null },
  'SM Shan Tao': { lat: 5.983058693667095, lng: 116.10250977220899 },
  'SPRIM': { lat: null, lng: null },
  'Sabah Energy': { lat: 5.996034526682337, lng: 116.09069616016914 },
  'Sabah Trade Centre': { lat: 5.9915190092940875, lng: 116.09178843796941 },
  'Sacred Heart': { lat: 5.964500321439558, lng: 116.07297239564078 },
  'Sadong Jaya': { lat: 5.968231251437555, lng: 116.07209414557116 },
  'Sawit Kinabalu': { lat: null, lng: null },
  'Segama': { lat: 5.984292831053414, lng: 116.07462252208343 },
  'Shell Likas': { lat: 5.993360966037889, lng: 116.11260285559365 },
  'Stadium Hoki': { lat: 5.979456580516135, lng: 116.09500447605505 },
  'Stadium Likas': { lat: null, lng: null },
  'Sunny Garden': { lat: null, lng: null },
  'Sutera Avenue': { lat: null, lng: null },
  'Sutera Harbour': { lat: null, lng: null },
  'Tahung Shin': { lat: null, lng: null },
  'Taman Awam Teluk Likas': { lat: null, lng: null },
  'Taman Cempaka': { lat: null, lng: null },
  'Taman Fortuna': { lat: 5.95087912579314, lng: 116.07820297378564 },
  'Taman Keramat I': { lat: null, lng: null },
  'Taman Keramat II': { lat: null, lng: null },
  'Taman Kinabalu': { lat: 5.955225855215593, lng: 116.09384751793196 },
  'Taman Layang-Layang': { lat: 5.963541043319809, lng: 116.08406903133312 },
  'Taman Olivia': { lat: null, lng: null },
  'Taman Rimbunan Hijau': { lat: null, lng: null },
  'Taman Sempelang': { lat: null, lng: null },
  'Taman Winley Estate': { lat: null, lng: null },
  'Taman Winly': { lat: null, lng: null },
  'Taman Yakim Jaya': { lat: 5.976419159309796, lng: 116.09181348769796 },
  'Tamu KPD': { lat: null, lng: null },
  'Terminal Bas Bandaraya (Utara)': { lat: null, lng: null },
  'Terminal Menggatal': { lat: null, lng: null },
  'UA Apartment 2': { lat: null, lng: null },
  'UCA': { lat: null, lng: null },
  'UCA1': { lat: null, lng: null },
  'UMS': { lat: 6.031038205230814, lng: 116.1170368337269 },
  'UTC': { lat: 5.963293455721571, lng: 116.07001705276896 },
  'Vetro 11': { lat: 5.957421811921202, lng: 116.07550794721901 },
  'Visa Light Industrial': { lat: null, lng: null },
  'Wisma Budaya': { lat: null, lng: null },
  'Wisma Chan Furniture': { lat: null, lng: null },
  'Wisma Chu Tai Seng': { lat: null, lng: null },
  'Wisma Hasil': { lat: null, lng: null },
  'Wisma Kosan': { lat: 5.991584858109174, lng: 116.10738166811211 },
  'Wisma Tun Fuad': { lat: null, lng: null },
  'Wisma Wanita': { lat: 5.976398560768688, lng: 116.08642211173512 },
  'Zirafah': { lat: 5.959436193761689, lng: 116.08502224112608 }
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
  r.stops.forEach(s => {
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
    if (r.stops.includes(stopName)) meta.push({ route: code });
  });
  return meta;
}

// ─── ROUTE FINDER ─────────────────────────────────────────────
function findRoute(fromStop, toStop) {
  if (fromStop === toStop) return { type: 'same' };

  const results = [];

  // Check each route for DIRECT routes (circular loop)
  Object.entries(ROUTES).forEach(([code, r]) => {
    const stops = r.stops;
    const fi = stops.indexOf(fromStop);
    const ti = stops.indexOf(toStop);
    
    if (fi !== -1 && ti !== -1) {
      // Calculate distance going forward around the loop
      let numStops, routeStops;
      if (fi < ti) {
        // Direct forward path
        numStops = ti - fi;
        routeStops = stops.slice(fi, ti + 1);
      } else {
        // Wrap around the loop (go past the end and back to start)
        numStops = (stops.length - fi) + ti;
        routeStops = [...stops.slice(fi), stops[0], ...stops.slice(1, ti + 1)];
      }
      
      // Check if route passes through major hubs and split into segments
      const majorHubsPassed = [];
      for (const [hubName, hubRoutes] of Object.entries(MAJOR_HUBS)) {
        if (hubRoutes.includes(code) && routeStops.includes(hubName) && 
            hubName !== fromStop && hubName !== toStop) {
          majorHubsPassed.push(hubName);
        }
      }
      
      // If passing through major hubs, create segmented journey
      if (majorHubsPassed.length > 0) {
        const segments = [];
        let currentStart = 0;
        
        majorHubsPassed.forEach(hubName => {
          const hubIdx = routeStops.indexOf(hubName);
          if (hubIdx > currentStart) {
            segments.push({
              from: routeStops[currentStart],
              to: hubName,
              stops: routeStops.slice(currentStart, hubIdx + 1),
              numStops: hubIdx - currentStart
            });
            currentStart = hubIdx;
          }
        });
        
        // Add final segment from last hub to destination
        if (currentStart < routeStops.length - 1) {
          segments.push({
            from: routeStops[currentStart],
            to: toStop,
            stops: routeStops.slice(currentStart),
            numStops: routeStops.length - 1 - currentStart
          });
        }
        
        results.push({
          type: 'direct_segmented',
          route: code,
          stops: routeStops,
          numStops: numStops,
          boardAt: fromStop,
          alightAt: toStop,
          segments: segments,
          available: r.available,
          availableFrom: r.availableFrom
        });
      } else {
        // No major hubs, regular direct route
        results.push({
          type: 'direct',
          route: code,
          stops: routeStops,
          numStops: numStops,
          boardAt: fromStop,
          alightAt: toStop,
          available: r.available,
          availableFrom: r.availableFrom
        });
      }
    }
  });

  // Try MULTI-ROUTE TRANSFERS via common stops
  const multiRouteTransfers = [];
  Object.entries(ROUTES).forEach(([codeA, rA]) => {
    const stopsA = rA.stops;
    const fi = stopsA.indexOf(fromStop);
    if (fi === -1) return;
    
    Object.entries(ROUTES).forEach(([codeB, rB]) => {
      if (codeA === codeB) return;
      
      const stopsB = rB.stops;
      const ti = stopsB.indexOf(toStop);
      if (ti === -1) return;
      
      // Find common stops between routes
      const commonStops = stopsA.filter(s => stopsB.includes(s));
      
      commonStops.forEach(transferStop => {
        const t1Idx = stopsA.indexOf(transferStop);
        const t2Idx = stopsB.indexOf(transferStop);
        
        // Calculate leg 1 stops (circular)
        let leg1Stops, leg1NumStops;
        if (fi < t1Idx) {
          leg1NumStops = t1Idx - fi;
          leg1Stops = stopsA.slice(fi, t1Idx + 1);
        } else if (fi > t1Idx) {
          leg1NumStops = (stopsA.length - fi) + t1Idx;
          leg1Stops = [...stopsA.slice(fi), stopsA[0], ...stopsA.slice(1, t1Idx + 1)];
        } else {
          return; // Same stop
        }
        
        // Calculate leg 2 stops (circular)
        let leg2Stops, leg2NumStops;
        if (t2Idx < ti) {
          leg2NumStops = ti - t2Idx;
          leg2Stops = stopsB.slice(t2Idx, ti + 1);
        } else if (t2Idx > ti) {
          leg2NumStops = (stopsB.length - t2Idx) + ti;
          leg2Stops = [...stopsB.slice(t2Idx), stopsB[0], ...stopsB.slice(1, ti + 1)];
        } else {
          return; // Same stop
        }
        
        // Check if either route is unavailable
        const isUnavailable = !rA.available || !rB.available;
        const unavailableRoutes = [];
        if (!rA.available) unavailableRoutes.push({ route: codeA, availableFrom: rA.availableFrom });
        if (!rB.available) unavailableRoutes.push({ route: codeB, availableFrom: rB.availableFrom });
        
        multiRouteTransfers.push({
          type: 'transfer',
          leg1: { 
            route: codeA, 
            stops: leg1Stops, 
            boardAt: fromStop, 
            alightAt: transferStop 
          },
          leg2: { 
            route: codeB, 
            stops: leg2Stops, 
            boardAt: transferStop, 
            alightAt: toStop 
          },
          transferPoint: transferStop,
          totalStops: leg1NumStops + leg2NumStops,
          available: !isUnavailable,
          unavailableRoutes: unavailableRoutes
        });
      });
    });
  });
  
  // Combine direct routes and transfers, then sort by total stops
  const allOptions = [
    ...results.map(r => ({ ...r, totalStops: r.numStops })),
    ...multiRouteTransfers
  ];
  
  if (allOptions.length > 0) {
    allOptions.sort((a,b) => a.totalStops - b.totalStops);
    return { type: 'found', options: allOptions };
  }

  return { type: 'not_found' };
}

// Helper function to calculate circular distance
function getCircularStops(stops, fromIdx, toIdx) {
  if (fromIdx < toIdx) {
    return {
      numStops: toIdx - fromIdx,
      routeStops: stops.slice(fromIdx, toIdx + 1)
    };
  } else {
    return {
      numStops: (stops.length - fromIdx) + toIdx,
      routeStops: [...stops.slice(fromIdx), stops[0], ...stops.slice(1, toIdx + 1)]
    };
  }
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
  const isSegmented = best.type === 'direct_segmented';
  const totalStops = (isTransfer || isTwoTransfer) ? best.totalStops : best.numStops;
  const duration = estimateDuration(totalStops);

  // Check if route is unavailable
  const isUnavailable = best.available === false;
  let unavailableBanner = '';
  
  if (isUnavailable) {
    if (best.unavailableRoutes && best.unavailableRoutes.length > 0) {
      // Transfer route with unavailable legs
      const routeList = best.unavailableRoutes.map(r => r.route).join(', ');
      const availableFrom = best.unavailableRoutes[0].availableFrom;
      unavailableBanner = `
        <div style="margin-bottom:1rem;padding:12px;background:#fff3e0;border:1px solid #ffe0b2;border-radius:8px;text-align:center;">
          <p style="font-size:13px;color:#e65c00;margin:0;font-weight:600;">
            🚧 This journey uses unavailable route(s): <strong>${routeList}</strong>
          </p>
          <p style="font-size:11px;color:#e65c00;margin:4px 0 0 0;">
            These routes will be available starting <strong>${availableFrom}</strong>. Currently, only S01 and S05 are operational.
          </p>
        </div>`;
    } else {
      // Direct route unavailable
      unavailableBanner = `
        <div style="margin-bottom:1rem;padding:12px;background:#fff3e0;border:1px solid #ffe0b2;border-radius:8px;text-align:center;">
          <p style="font-size:13px;color:#e65c00;margin:0;font-weight:600;">
            🚧 This route (${best.route}) will be available starting <strong>${best.availableFrom}</strong>
          </p>
          <p style="font-size:11px;color:#e65c00;margin:4px 0 0 0;">
            Currently, only S01 and S05 routes are operational.
          </p>
        </div>`;
    }
  }

  let stepsHTML = '';

  if (isSegmented) {
    // Render segmented journey (same route, split at major hubs)
    stepsHTML = `
      <div class="step">
        <div class="step-dot dot-start">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="9" stroke-dasharray="2 2"/></svg>
        </div>
        <div class="step-content">
          <div class="step-title">Board at ${best.boardAt}</div>
          <div class="step-desc">Wait for Bas Pink <strong>${best.route}</strong></div>
          <span class="step-tag tag-pink">${best.route}</span>
        </div>
      </div>`;
    
    // Render each segment
    best.segments.forEach((segment, idx) => {
      const isLastSegment = idx === best.segments.length - 1;
      stepsHTML += `
      <div class="step">
        <div class="step-dot dot-bus">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="2" y="7" width="20" height="12" rx="2"/><path d="M6 7V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2"/><line x1="6" y1="13" x2="6" y2="13" stroke-width="3" stroke-linecap="round"/><line x1="18" y1="13" x2="18" y2="13" stroke-width="3" stroke-linecap="round"/><path d="M6 19v1m12-1v1"/></svg>
        </div>
        <div class="step-content">
          <div class="step-title">${segment.from} → ${segment.to}</div>
          <div class="step-desc">Stay on <strong>${best.route}</strong> for ${segment.numStops} stop${segment.numStops>1?'s':''}</div>
          <span class="step-tag tag-blue">${segment.numStops} stop${segment.numStops>1?'s':''}</span>
          ${!isLastSegment ? '<span class="step-tag tag-orange">🏢 Major Hub</span>' : ''}
          <div class="stops-strip">
            <div class="stops-strip-label">Stop sequence</div>
            <div class="stops-flow">
              ${segment.stops.map((s,i) => {
                const isHub = !isLastSegment && i === segment.stops.length - 1;
                const cssClass = i===0 ? 's-board' : isHub ? 's-hub' : i===segment.stops.length-1 ? 's-alight' : '';
                return `
                  <span class="s-stop ${cssClass}">${s}${isHub ? ' 🏢' : ''}</span>
                  ${i < segment.stops.length-1 ? '<span class="s-arrow">›</span>' : ''}
                `;
              }).join('')}
            </div>
          </div>
        </div>
      </div>`;
    });
    
    stepsHTML += `
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
  } else if (!isTransfer && !isTwoTransfer) {
    const intermediate = best.stops.slice(1, -1);
    
    stepsHTML = `
      <div class="step">
        <div class="step-dot dot-start">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="9" stroke-dasharray="2 2"/></svg>
        </div>
        <div class="step-content">
          <div class="step-title">Board at ${best.boardAt}</div>
          <div class="step-desc">Wait for Bas Pink <strong>${best.route}</strong></div>
          <span class="step-tag tag-pink">${best.route}</span>
        </div>
      </div>
      ${intermediate.length > 0 ? `
      <div class="step">
        <div class="step-dot dot-bus">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="2" y="7" width="20" height="12" rx="2"/><path d="M6 7V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2"/><line x1="6" y1="13" x2="6" y2="13" stroke-width="3" stroke-linecap="round"/><line x1="18" y1="13" x2="18" y2="13" stroke-width="3" stroke-linecap="round"/><path d="M6 19v1m12-1v1"/></svg>
        </div>
        <div class="step-content">
          <div class="step-title">Ride ${best.numStops} stop${best.numStops>1?'s':''}</div>
          <div class="step-desc">Stay on the bus until <strong>${best.alightAt}</strong></div>
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
    
    stepsHTML = `
      <div class="step">
        <div class="step-dot dot-start">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="9" stroke-dasharray="2 2"/></svg>
        </div>
        <div class="step-content">
          <div class="step-title">Board at ${best.leg1.boardAt}</div>
          <div class="step-desc">Take Bas Pink <strong>${best.leg1.route}</strong> towards ${best.transfer1}</div>
          <span class="step-tag tag-pink">${best.leg1.route}</span>
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
          <div class="step-desc">Alight and wait for Bas Pink <strong>${best.leg2.route}</strong></div>
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
          <div class="step-desc">Alight and wait for Bas Pink <strong>${best.leg3.route}</strong></div>
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
    const transferPoint = best.transferPoint || best.leg1.alightAt;
    const isSameRoute = best.sameRoute || best.leg1.route === best.leg2.route;
    const transferDesc = isSameRoute 
      ? `Stay at ${transferPoint} and wait for the same bus (${best.leg2.route})`
      : `Alight at ${transferPoint} and wait for Bas Pink <strong>${best.leg2.route}</strong>`;
    
    stepsHTML = `
      <div class="step">
        <div class="step-dot dot-start">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="9" stroke-dasharray="2 2"/></svg>
        </div>
        <div class="step-content">
          <div class="step-title">Board at ${best.leg1.boardAt}</div>
          <div class="step-desc">Take Bas Pink <strong>${best.leg1.route}</strong> towards ${transferPoint}</div>
          <span class="step-tag tag-pink">${best.leg1.route}</span>
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
        ${unavailableBanner}
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
  
  // Check if this stop exists in unavailable routes
  const upcomingRoutes = [];
  Object.entries(ROUTES).forEach(([code, r]) => {
    if (!r.available) {
      if (r.stops.some(s => normalise(s) === normalise(query))) {
        upcomingRoutes.push({ code, availableFrom: r.availableFrom });
      }
    }
  });
  
  let upcomingMessage = '';
  if (upcomingRoutes.length > 0) {
    const routeCodes = upcomingRoutes.map(r => r.code).join(', ');
    const availableFrom = upcomingRoutes[0].availableFrom;
    upcomingMessage = `
      <div style="margin-top:1rem;padding:12px;background:#e8f8ef;border:1px solid #b8e8cc;border-radius:8px;">
        <p style="font-size:12px;color:#0a6630;margin:0;line-height:1.5;">
          <strong>🚧 Good news!</strong> "${query}" will be available on route${upcomingRoutes.length > 1 ? 's' : ''} <strong>${routeCodes}</strong> starting <strong>${availableFrom}</strong>.
        </p>
      </div>`;
  }
  
  document.getElementById('result').innerHTML = `
    <div class="not-found">
      <h3>Stop not found</h3>
      <p>"${query}" is not currently available on active routes (S01 & S05). Did you mean one of these?</p>
      ${suggestions.length > 0 ? `
        <div class="suggestions">
          ${suggestions.map(s => `<span class="sug-chip" onclick="fillFrom('${s}','${role}')">${s}</span>`).join('')}
        </div>` : '<p style="margin-top:8px;font-size:12px">Tap a route card above to browse all stops.</p>'}
      ${upcomingMessage}
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
  document.getElementById('modalMeta').textContent = r.available
    ? `${r.distance} · Free · ~6AM–10PM · Every 20–30 min`
    : `${r.distance} · Coming ${r.availableFrom}`;
  
  // Build route stops display (circular loop)
  const stopsHTML = `
    <div class="modal-dir-label">🔄 Loop stops (${r.stops.length} stops)</div>
    <div class="stops-list">${r.stops.map((s,i) =>
      `<div class="s-row"><div class="s-dot ${i===0?'terminal':''}"></div><div class="s-name">${s}</div></div>`
    ).join('')}</div>`;

  // Add coming soon banner for unavailable routes
  const comingSoonBanner = !r.available ? `
    <div style="margin-bottom:1rem;padding:12px;background:#fff3e0;border:1px solid #ffe0b2;border-radius:8px;text-align:center;">
      <p style="font-size:13px;color:#e65c00;margin:0;font-weight:600;">
        🚧 This route will be available starting <strong>${r.availableFrom}</strong>
      </p>
      <p style="font-size:11px;color:#e65c00;margin:4px 0 0 0;">
        Currently, only S01 and S05 routes are operational.
      </p>
    </div>` : '';
  
  document.getElementById('modalBody').innerHTML = comingSoonBanner + stopsHTML;
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
