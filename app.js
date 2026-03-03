const COUNTRIES = [
  {code:'AF',name:'Afghanistan',dial:'+93',flag:'🇦🇫'},
  {code:'AL',name:'Albania',dial:'+355',flag:'🇦🇱'},
  {code:'DZ',name:'Algeria',dial:'+213',flag:'🇩🇿'},
  {code:'AD',name:'Andorra',dial:'+376',flag:'🇦🇩'},
  {code:'AO',name:'Angola',dial:'+244',flag:'🇦🇴'},
  {code:'AR',name:'Argentina',dial:'+54',flag:'🇦🇷'},
  {code:'AM',name:'Armenia',dial:'+374',flag:'🇦🇲'},
  {code:'AU',name:'Australia',dial:'+61',flag:'🇦🇺'},
  {code:'AT',name:'Austria',dial:'+43',flag:'🇦🇹'},
  {code:'AZ',name:'Azerbaijan',dial:'+994',flag:'🇦🇿'},
  {code:'BS',name:'Bahamas',dial:'+1',flag:'🇧🇸'},
  {code:'BH',name:'Bahrain',dial:'+973',flag:'🇧🇭'},
  {code:'BD',name:'Bangladesh',dial:'+880',flag:'🇧🇩'},
  {code:'BY',name:'Belarus',dial:'+375',flag:'🇧🇾'},
  {code:'BE',name:'Belgium',dial:'+32',flag:'🇧🇪'},
  {code:'BZ',name:'Belize',dial:'+501',flag:'🇧🇿'},
  {code:'BJ',name:'Benin',dial:'+229',flag:'🇧🇯'},
  {code:'BT',name:'Bhutan',dial:'+975',flag:'🇧🇹'},
  {code:'BO',name:'Bolivia',dial:'+591',flag:'🇧🇴'},
  {code:'BA',name:'Bosnia and Herzegovina',dial:'+387',flag:'🇧🇦'},
  {code:'BW',name:'Botswana',dial:'+267',flag:'🇧🇼'},
  {code:'BR',name:'Brazil',dial:'+55',flag:'🇧🇷'},
  {code:'BN',name:'Brunei',dial:'+673',flag:'🇧🇳'},
  {code:'BG',name:'Bulgaria',dial:'+359',flag:'🇧🇬'},
  {code:'BF',name:'Burkina Faso',dial:'+226',flag:'🇧🇫'},
  {code:'BI',name:'Burundi',dial:'+257',flag:'🇧🇮'},
  {code:'KH',name:'Cambodia',dial:'+855',flag:'🇰🇭'},
  {code:'CM',name:'Cameroon',dial:'+237',flag:'🇨🇲'},
  {code:'CA',name:'Canada',dial:'+1',flag:'🇨🇦'},
  {code:'CV',name:'Cape Verde',dial:'+238',flag:'🇨🇻'},
  {code:'CF',name:'Central African Republic',dial:'+236',flag:'🇨🇫'},
  {code:'TD',name:'Chad',dial:'+235',flag:'🇹🇩'},
  {code:'CL',name:'Chile',dial:'+56',flag:'🇨🇱'},
  {code:'CN',name:'China',dial:'+86',flag:'🇨🇳'},
  {code:'CO',name:'Colombia',dial:'+57',flag:'🇨🇴'},
  {code:'KM',name:'Comoros',dial:'+269',flag:'🇰🇲'},
  {code:'CG',name:'Congo',dial:'+242',flag:'🇨🇬'},
  {code:'CR',name:'Costa Rica',dial:'+506',flag:'🇨🇷'},
  {code:'HR',name:'Croatia',dial:'+385',flag:'🇭🇷'},
  {code:'CU',name:'Cuba',dial:'+53',flag:'🇨🇺'},
  {code:'CY',name:'Cyprus',dial:'+357',flag:'🇨🇾'},
  {code:'CZ',name:'Czech Republic',dial:'+420',flag:'🇨🇿'},
  {code:'DK',name:'Denmark',dial:'+45',flag:'🇩🇰'},
  {code:'DJ',name:'Djibouti',dial:'+253',flag:'🇩🇯'},
  {code:'DO',name:'Dominican Republic',dial:'+1',flag:'🇩🇴'},
  {code:'EC',name:'Ecuador',dial:'+593',flag:'🇪🇨'},
  {code:'EG',name:'Egypt',dial:'+20',flag:'🇪🇬'},
  {code:'SV',name:'El Salvador',dial:'+503',flag:'🇸🇻'},
  {code:'GQ',name:'Equatorial Guinea',dial:'+240',flag:'🇬🇶'},
  {code:'ER',name:'Eritrea',dial:'+291',flag:'🇪🇷'},
  {code:'EE',name:'Estonia',dial:'+372',flag:'🇪🇪'},
  {code:'SZ',name:'Eswatini',dial:'+268',flag:'🇸🇿'},
  {code:'ET',name:'Ethiopia',dial:'+251',flag:'🇪🇹'},
  {code:'FJ',name:'Fiji',dial:'+679',flag:'🇫🇯'},
  {code:'FI',name:'Finland',dial:'+358',flag:'🇫🇮'},
  {code:'FR',name:'France',dial:'+33',flag:'🇫🇷'},
  {code:'GA',name:'Gabon',dial:'+241',flag:'🇬🇦'},
  {code:'GM',name:'Gambia',dial:'+220',flag:'🇬🇲'},
  {code:'GE',name:'Georgia',dial:'+995',flag:'🇬🇪'},
  {code:'DE',name:'Germany',dial:'+49',flag:'🇩🇪'},
  {code:'GH',name:'Ghana',dial:'+233',flag:'🇬🇭'},
  {code:'GR',name:'Greece',dial:'+30',flag:'🇬🇷'},
  {code:'GT',name:'Guatemala',dial:'+502',flag:'🇬🇹'},
  {code:'GN',name:'Guinea',dial:'+224',flag:'🇬🇳'},
  {code:'GW',name:'Guinea-Bissau',dial:'+245',flag:'🇬🇼'},
  {code:'GY',name:'Guyana',dial:'+592',flag:'🇬🇾'},
  {code:'HT',name:'Haiti',dial:'+509',flag:'🇭🇹'},
  {code:'HN',name:'Honduras',dial:'+504',flag:'🇭🇳'},
  {code:'HU',name:'Hungary',dial:'+36',flag:'🇭🇺'},
  {code:'IS',name:'Iceland',dial:'+354',flag:'🇮🇸'},
  {code:'IN',name:'India',dial:'+91',flag:'🇮🇳'},
  {code:'ID',name:'Indonesia',dial:'+62',flag:'🇮🇩'},
  {code:'IR',name:'Iran',dial:'+98',flag:'🇮🇷'},
  {code:'IQ',name:'Iraq',dial:'+964',flag:'🇮🇶'},
  {code:'IE',name:'Ireland',dial:'+353',flag:'🇮🇪'},
  {code:'IL',name:'Israel',dial:'+972',flag:'🇮🇱'},
  {code:'IT',name:'Italy',dial:'+39',flag:'🇮🇹'},
  {code:'JM',name:'Jamaica',dial:'+1',flag:'🇯🇲'},
  {code:'JP',name:'Japan',dial:'+81',flag:'🇯🇵'},
  {code:'JO',name:'Jordan',dial:'+962',flag:'🇯🇴'},
  {code:'KZ',name:'Kazakhstan',dial:'+7',flag:'🇰🇿'},
  {code:'KE',name:'Kenya',dial:'+254',flag:'🇰🇪'},
  {code:'KW',name:'Kuwait',dial:'+965',flag:'🇰🇼'},
  {code:'KG',name:'Kyrgyzstan',dial:'+996',flag:'🇰🇬'},
  {code:'LA',name:'Laos',dial:'+856',flag:'🇱🇦'},
  {code:'LV',name:'Latvia',dial:'+371',flag:'🇱🇻'},
  {code:'LB',name:'Lebanon',dial:'+961',flag:'🇱🇧'},
  {code:'LS',name:'Lesotho',dial:'+266',flag:'🇱🇸'},
  {code:'LR',name:'Liberia',dial:'+231',flag:'🇱🇷'},
  {code:'LY',name:'Libya',dial:'+218',flag:'🇱🇾'},
  {code:'LI',name:'Liechtenstein',dial:'+423',flag:'🇱🇮'},
  {code:'LT',name:'Lithuania',dial:'+370',flag:'🇱🇹'},
  {code:'LU',name:'Luxembourg',dial:'+352',flag:'🇱🇺'},
  {code:'MG',name:'Madagascar',dial:'+261',flag:'🇲🇬'},
  {code:'MW',name:'Malawi',dial:'+265',flag:'🇲🇼'},
  {code:'MY',name:'Malaysia',dial:'+60',flag:'🇲🇾'},
  {code:'MV',name:'Maldives',dial:'+960',flag:'🇲🇻'},
  {code:'ML',name:'Mali',dial:'+223',flag:'🇲🇱'},
  {code:'MT',name:'Malta',dial:'+356',flag:'🇲🇹'},
  {code:'MR',name:'Mauritania',dial:'+222',flag:'🇲🇷'},
  {code:'MU',name:'Mauritius',dial:'+230',flag:'🇲🇺'},
  {code:'MX',name:'Mexico',dial:'+52',flag:'🇲🇽'},
  {code:'MD',name:'Moldova',dial:'+373',flag:'🇲🇩'},
  {code:'MC',name:'Monaco',dial:'+377',flag:'🇲🇨'},
  {code:'MN',name:'Mongolia',dial:'+976',flag:'🇲🇳'},
  {code:'ME',name:'Montenegro',dial:'+382',flag:'🇲🇪'},
  {code:'MA',name:'Morocco',dial:'+212',flag:'🇲🇦'},
  {code:'MZ',name:'Mozambique',dial:'+258',flag:'🇲🇿'},
  {code:'MM',name:'Myanmar',dial:'+95',flag:'🇲🇲'},
  {code:'NA',name:'Namibia',dial:'+264',flag:'🇳🇦'},
  {code:'NP',name:'Nepal',dial:'+977',flag:'🇳🇵'},
  {code:'NL',name:'Netherlands',dial:'+31',flag:'🇳🇱'},
  {code:'NZ',name:'New Zealand',dial:'+64',flag:'🇳🇿'},
  {code:'NI',name:'Nicaragua',dial:'+505',flag:'🇳🇮'},
  {code:'NE',name:'Niger',dial:'+227',flag:'🇳🇪'},
  {code:'NG',name:'Nigeria',dial:'+234',flag:'🇳🇬'},
  {code:'KP',name:'North Korea',dial:'+850',flag:'🇰🇵'},
  {code:'MK',name:'North Macedonia',dial:'+389',flag:'🇲🇰'},
  {code:'NO',name:'Norway',dial:'+47',flag:'🇳🇴'},
  {code:'OM',name:'Oman',dial:'+968',flag:'🇴🇲'},
  {code:'PK',name:'Pakistan',dial:'+92',flag:'🇵🇰'},
  {code:'PS',name:'Palestine',dial:'+970',flag:'🇵🇸'},
  {code:'PA',name:'Panama',dial:'+507',flag:'🇵🇦'},
  {code:'PG',name:'Papua New Guinea',dial:'+675',flag:'🇵🇬'},
  {code:'PY',name:'Paraguay',dial:'+595',flag:'🇵🇾'},
  {code:'PE',name:'Peru',dial:'+51',flag:'🇵🇪'},
  {code:'PH',name:'Philippines',dial:'+63',flag:'🇵🇭'},
  {code:'PL',name:'Poland',dial:'+48',flag:'🇵🇱'},
  {code:'PT',name:'Portugal',dial:'+351',flag:'🇵🇹'},
  {code:'QA',name:'Qatar',dial:'+974',flag:'🇶🇦'},
  {code:'RO',name:'Romania',dial:'+40',flag:'🇷🇴'},
  {code:'RU',name:'Russia',dial:'+7',flag:'🇷🇺'},
  {code:'RW',name:'Rwanda',dial:'+250',flag:'🇷🇼'},
  {code:'SA',name:'Saudi Arabia',dial:'+966',flag:'🇸🇦'},
  {code:'SN',name:'Senegal',dial:'+221',flag:'🇸🇳'},
  {code:'RS',name:'Serbia',dial:'+381',flag:'🇷🇸'},
  {code:'SL',name:'Sierra Leone',dial:'+232',flag:'🇸🇱'},
  {code:'SG',name:'Singapore',dial:'+65',flag:'🇸🇬'},
  {code:'SK',name:'Slovakia',dial:'+421',flag:'🇸🇰'},
  {code:'SI',name:'Slovenia',dial:'+386',flag:'🇸🇮'},
  {code:'SO',name:'Somalia',dial:'+252',flag:'🇸🇴'},
  {code:'ZA',name:'South Africa',dial:'+27',flag:'🇿🇦'},
  {code:'KR',name:'South Korea',dial:'+82',flag:'🇰🇷'},
  {code:'SS',name:'South Sudan',dial:'+211',flag:'🇸🇸'},
  {code:'ES',name:'Spain',dial:'+34',flag:'🇪🇸'},
  {code:'LK',name:'Sri Lanka',dial:'+94',flag:'🇱🇰'},
  {code:'SD',name:'Sudan',dial:'+249',flag:'🇸🇩'},
  {code:'SR',name:'Suriname',dial:'+597',flag:'🇸🇷'},
  {code:'SE',name:'Sweden',dial:'+46',flag:'🇸🇪'},
  {code:'CH',name:'Switzerland',dial:'+41',flag:'🇨🇭'},
  {code:'SY',name:'Syria',dial:'+963',flag:'🇸🇾'},
  {code:'TW',name:'Taiwan',dial:'+886',flag:'🇹🇼'},
  {code:'TJ',name:'Tajikistan',dial:'+992',flag:'🇹🇯'},
  {code:'TZ',name:'Tanzania',dial:'+255',flag:'🇹🇿'},
  {code:'TH',name:'Thailand',dial:'+66',flag:'🇹🇭'},
  {code:'TG',name:'Togo',dial:'+228',flag:'🇹🇬'},
  {code:'TT',name:'Trinidad and Tobago',dial:'+1',flag:'🇹🇹'},
  {code:'TN',name:'Tunisia',dial:'+216',flag:'🇹🇳'},
  {code:'TR',name:'Turkey',dial:'+90',flag:'🇹🇷'},
  {code:'TM',name:'Turkmenistan',dial:'+993',flag:'🇹🇲'},
  {code:'UG',name:'Uganda',dial:'+256',flag:'🇺🇬'},
  {code:'UA',name:'Ukraine',dial:'+380',flag:'🇺🇦'},
  {code:'AE',name:'United Arab Emirates',dial:'+971',flag:'🇦🇪'},
  {code:'GB',name:'United Kingdom',dial:'+44',flag:'🇬🇧'},
  {code:'US',name:'United States',dial:'+1',flag:'🇺🇸'},
  {code:'UY',name:'Uruguay',dial:'+598',flag:'🇺🇾'},
  {code:'UZ',name:'Uzbekistan',dial:'+998',flag:'🇺🇿'},
  {code:'VE',name:'Venezuela',dial:'+58',flag:'🇻🇪'},
  {code:'VN',name:'Vietnam',dial:'+84',flag:'🇻🇳'},
  {code:'YE',name:'Yemen',dial:'+967',flag:'🇾🇪'},
  {code:'ZM',name:'Zambia',dial:'+260',flag:'🇿🇲'},
  {code:'ZW',name:'Zimbabwe',dial:'+263',flag:'🇿🇼'},
];

/* ── custom phone prefix selector ── */
const phoneEl = document.getElementById('phone');


const phoneWrapper = document.createElement('div');
phoneWrapper.style.position = 'relative';
phoneEl.parentElement.insertBefore(phoneWrapper, phoneEl);
phoneWrapper.appendChild(phoneEl);
phoneEl.style.paddingLeft = '96px';

const prefixBtn = document.createElement('button');
prefixBtn.type = 'button';
prefixBtn.id = 'prefixBtn';
prefixBtn.innerHTML = `<span id="prefixFlag">🌐</span><span id="prefixDial"></span><span class="prefix-arrow">▾</span>`;
phoneWrapper.insertBefore(prefixBtn, phoneEl);

const prefixDropdown = document.createElement('div');
prefixDropdown.id = 'prefixDropdown';
prefixDropdown.innerHTML = `
  <div class="prefix-search-wrap">
    <input type="text" id="prefixSearch" placeholder="Search country or code…" autocomplete="off" />
  </div>
  <ul id="prefixList"></ul>
`;
phoneWrapper.appendChild(prefixDropdown);

let selectedCountry = COUNTRIES.find(c => c.code === 'US');

function renderPrefixList(filter = '') {
  const list = document.getElementById('prefixList');
  const items = filter
    ? COUNTRIES.filter(c =>
        c.name.toLowerCase().includes(filter.toLowerCase()) ||
        c.dial.includes(filter)
      )
    : COUNTRIES;
  list.innerHTML = items.map(c => `
    <li data-code="${c.code}" class="${selectedCountry.code === c.code ? 'active' : ''}">
      <span class="pl-flag">${c.flag}</span>
      <span class="pl-name">${c.name}</span>
      <span class="pl-dial">${c.dial}</span>
    </li>
  `).join('');
}

function setPrefix(countryCode) {
  const c = COUNTRIES.find(x => x.code === countryCode);
  if (!c) return;
  selectedCountry = c;
  document.getElementById('prefixFlag').textContent = c.flag;
  document.getElementById('prefixDial').textContent = c.dial;
}

prefixBtn.addEventListener('click', e => {
  e.stopPropagation();
  const opening = !prefixDropdown.classList.contains('open');
  prefixDropdown.classList.toggle('open', opening);
  if (opening) {
    renderPrefixList();
    setTimeout(() => document.getElementById('prefixSearch').focus(), 30);
  }
});

document.addEventListener('input', e => {
  if (e.target.id === 'prefixSearch') renderPrefixList(e.target.value);
});

prefixDropdown.addEventListener('click', e => {
  const li = e.target.closest('li[data-code]');
  if (li) {
    setPrefix(li.dataset.code);
    prefixDropdown.classList.remove('open');
    document.getElementById('prefixSearch').value = '';
    phoneEl.focus();
  }
});

document.addEventListener('click', e => {
  if (!phoneWrapper.contains(e.target)) {
    prefixDropdown.classList.remove('open');
  }
});

/* ── Auto-detect country via IP ────────── */
// fetch('https://ipapi.co/json/')
//   .then(r => r.json())
//   .then(data => {
//     setPrefix(data.country_code);
//     const sel = document.getElementById('country');
//     const match = Array.from(sel.options).find(o => o.value === data.country_name);
//     if (match) sel.value = match.value;
//   })
//   .catch(() => setPrefix('US'));

/* ── Updated setPrefix with Safety Checks ── */
function setPrefix(countryCode) {
  if (!countryCode) return;
  
  const c = COUNTRIES.find(x => x.code === countryCode.toUpperCase());
  if (!c) return;

  selectedCountry = c;
  
  const flagEl = document.getElementById('prefixFlag');
  const dialEl = document.getElementById('prefixDial');
  
  if (flagEl) flagEl.textContent = c.flag;
  if (dialEl) dialEl.textContent = c.dial;
  
  // Highlight the active item in the dropdown list if it's open
  document.querySelectorAll('#prefixList li').forEach(li => {
    li.classList.toggle('active', li.dataset.code === c.code);
  });
}

/* ── Auto-detect via your Server Proxy ── */
fetch('/api/locate')
  .then(r => {
    if (!r.ok) throw new Error('Server geo-proxy error');
    return r.json();
  })
  .then(data => {
    setPrefix(data.country_code);
    const sel = document.getElementById('country');
    if (sel && data.country_name) {
      const match = Array.from(sel.options).find(o => 
        o.value.toLowerCase() === data.country_name.toLowerCase() ||
        o.textContent.toLowerCase().includes(data.country_name.toLowerCase())
      );
      if (match) sel.value = match.value;
    }
  })
  .catch(err => {
    console.error('Detection failed:', err);
    setPrefix('US');
    const sel = document.getElementById('country');
    if (sel) sel.value = ''; // reset to blank/none
  });
  
/* ── DOM refs ──────────────────────────── */
const form         = document.getElementById('applicationForm');
const dropzone     = document.getElementById('dropzone');
const dropInner    = document.getElementById('dropzoneInner');
const dropPreview  = document.getElementById('dropzonePreview');
const fileInput    = document.getElementById('cvFile');
const fileNameEl   = document.getElementById('fileName');
const fileRemove   = document.getElementById('fileRemove');
const cvError      = document.getElementById('cvError');
const consentErr   = document.getElementById('consentError');
const submitBtn    = document.getElementById('submitBtn');
const successState = document.getElementById('successState');

let uploadedFile = null;

/* ── Drag & Drop ───────────────────────── */
['dragenter','dragover'].forEach(evt => {
  dropzone.addEventListener(evt, e => { e.preventDefault(); dropzone.classList.add('drag-over'); });
});
['dragleave','drop'].forEach(evt => {
  dropzone.addEventListener(evt, e => { e.preventDefault(); dropzone.classList.remove('drag-over'); });
});

dropzone.addEventListener('drop', e => { const f = e.dataTransfer.files[0]; if (f) handleFile(f); });
// dropzone.addEventListener('click', e => { if (e.target !== fileRemove) fileInput.click(); });
dropzone.addEventListener('click', e => {
  if (
    e.target === fileRemove ||
    dropPreview.style.display === 'flex' ||
    dropPreview.contains(e.target) ||
    e.target.tagName === 'LABEL' ||
    e.target.closest('label')
  ) return;
  fileInput.click();
});
fileInput.addEventListener('change', () => { if (fileInput.files[0]) handleFile(fileInput.files[0]); });
fileRemove.addEventListener('click', e => { e.stopPropagation(); clearFile(); });

function handleFile(file) {
  const allowed = ['application/pdf','application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
  if (!allowed.includes(file.type)) { alert('Please upload a PDF or Word document.'); return; }
  if (file.size > 5 * 1024 * 1024) { alert('File too large. Max 5 MB.'); return; }
  uploadedFile = file;
  fileNameEl.textContent = file.name;
  dropInner.style.display = 'none';
  dropPreview.style.display = 'flex';
  dropzone.classList.remove('invalid');
  cvError.classList.remove('show');
}

function clearFile() {
  uploadedFile = null;
  fileInput.value = '';
  dropInner.style.display = 'flex';
  dropPreview.style.display = 'none';
}

function getGroup(el) { return el.closest('.field-group'); }

/* ── Form Submit ───────────────────────── */
form.addEventListener('submit', async e => {
  e.preventDefault();
  let ok = true;

  form.querySelectorAll('[required]').forEach(el => {
    if (el.type === 'checkbox') return;
    if (!el.value.trim()) { getGroup(el)?.classList.add('invalid'); ok = false; }
    else getGroup(el)?.classList.remove('invalid');
  });

  const emailEl = document.getElementById('email');
  if (emailEl.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailEl.value)) {
    getGroup(emailEl).classList.add('invalid'); ok = false;
  }

  if (!uploadedFile) {
    dropzone.classList.add('invalid'); cvError.classList.add('show'); ok = false;
  }

  const consent = document.getElementById('consent');
  if (!consent.checked) { consentErr.classList.add('show'); ok = false; }
  else consentErr.classList.remove('show');

  if (!ok) {
    form.querySelector('.field-group.invalid, .dropzone.invalid')
      ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }

  submitBtn.disabled = true;
  submitBtn.querySelector('.btn-text').textContent = 'Submitting…';
  submitBtn.querySelector('.btn-icon').style.display = 'none';
  submitBtn.querySelector('.btn-loader').style.display = 'inline';

  const data = new FormData(form);
  if (uploadedFile) data.set('cvFile', uploadedFile, uploadedFile.name);
  data.set('phone', selectedCountry.dial + ' ' + phoneEl.value.trim());

  try {
    const res = await fetch('/submit', { method: 'POST', body: data });
    const json = await res.json();
    if (json.success) {
      form.style.display = 'none';
      successState.style.display = 'block';
      successState.scrollIntoView({ behavior: 'smooth' });
    } else {
      alert('Something went wrong: ' + (json.error || 'Unknown error'));
      resetButton();
    }
  } catch (err) {
    alert('Network error. Please try again.');
    resetButton();
  }
});

function resetButton() {
  submitBtn.disabled = false;
  submitBtn.querySelector('.btn-text').textContent = 'Submit Application';
  submitBtn.querySelector('.btn-icon').style.display = 'inline';
  submitBtn.querySelector('.btn-loader').style.display = 'none';
}

form.querySelectorAll('input, select, textarea').forEach(el => {
  el.addEventListener('blur', () => {
    if (el.hasAttribute('required') && !el.value.trim()) getGroup(el)?.classList.add('invalid');
    else getGroup(el)?.classList.remove('invalid');
  });
});