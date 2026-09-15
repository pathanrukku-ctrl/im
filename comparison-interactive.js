(() => {
  const base = {
    'Room Rent Limit': 'No room restriction',
    'Co-pay': 'No',
    'Pre/Post Hospitalisation': '60 and 90 days',
    'Consumables Cover': 'Optional rider',
    'Power Booster': '10% yearly up to 100%',
    'Restoration Benefit': '100%',
    'Day Care Procedure': 'All covered',
    'Sublimits': 'No sublimits',
    'Life Long Renewability': 'Yes',
    'Hospital Network': '10,000+',
    'Extra Features': 'Wellness benefits and online servicing',
    'Pre-existing Waiting': '3 years',
    'Deductible': 'Available',
    'Maternity': 'Covered (conditions apply)',
    'Road Ambulance': 'Up to sum insured',
    'OPD': 'Optional',
    'Initial Waiting': '30 days',
    'Preventive Checkup': 'Once a year',
    'Sum Insured (In Lacs)': '5L to 1Cr'
  };

  const insurerProfiles = [
    ['SBI General Insurance Co. Ltd.', ['Arogya Supreme Pro', 'Arogya Supreme Plus'], {'Room Rent Limit': 'Up to sum insured (with percentage limits)', 'Co-pay': 'NA', 'Hospital Network': '6,500+', 'Extra Features': 'Worldwide emergency cover, organ donor and robotic surgery', 'Maternity': 'Not covered', 'OPD': 'Not covered', 'Sum Insured (In Lacs)': '3L to 1Cr'}],
    ['Manipal Cigna Health Insurance Co. Ltd.', ['ProHealth Prime', 'ProHealth Select'], {'Room Rent Limit': 'No capping', 'Co-pay': 'NA', 'Power Booster': '25% to 200%', 'Restoration Benefit': 'Multiple restoration up to 100% of SI', 'Hospital Network': '8,000+', 'Extra Features': 'Worldwide emergency cover and wellness benefit', 'Maternity': 'Covered', 'OPD': 'Available', 'Sum Insured (In Lacs)': '5L to 1Cr'}],
    ['Star Health & Allied Insurance Co.Ltd.', ['Health Care Supreme', 'Star Comprehensive'], {'Room Rent Limit': 'No capping', 'Co-pay': 'No', 'Consumables Cover': 'Available', 'Restoration Benefit': '100%', 'Hospital Network': '14,000+', 'Extra Features': 'Flexible plan and home care', 'Pre-existing Waiting': '3 years', 'Maternity': 'Covered', 'OPD': 'Available', 'Sum Insured (In Lacs)': '5L to 1Cr'}],
    ['The New India Assurance', ['Mediclaim Policy', 'Asha Kiran'], {'Room Rent Limit': '1% of sum insured', 'Co-pay': '10%', 'Power Booster': 'Cumulative bonus', 'Restoration Benefit': 'Not available', 'Hospital Network': '7,000+', 'Extra Features': 'Public-sector insurer and family options', 'Maternity': 'Covered after waiting period', 'OPD': 'Not covered', 'Sum Insured (In Lacs)': '1L to 15L'}],
    ['Niva Bupa Health Insurance Co Ltd.', ['ReAssure 2.0', 'Health Companion'], {'Room Rent Limit': 'No capping', 'Co-pay': 'No', 'Power Booster': 'Booster+ up to 10x', 'Restoration Benefit': 'Unlimited', 'Hospital Network': '10,000+', 'Extra Features': 'Booster+ and lock the clock', 'Maternity': 'Optional', 'OPD': 'Optional', 'Sum Insured (In Lacs)': '5L to 1Cr'}],
    ['HDFC ERGO General Insurance', ['Optima Secure', 'my:health Suraksha'], {'Room Rent Limit': 'No capping', 'Co-pay': 'No', 'Power Booster': 'Plus benefit up to 100%', 'Restoration Benefit': 'Unlimited', 'Hospital Network': '13,000+', 'Extra Features': '4X coverage and protect benefit', 'Maternity': 'Optional', 'OPD': 'Optional', 'Sum Insured (In Lacs)': '5L to 2Cr'}],
    ['Tata AIG General Insurance', ['MediCare Premier', 'MediCare Select'], {'Room Rent Limit': 'No capping', 'Co-pay': 'Optional', 'Power Booster': '50% cumulative bonus', 'Restoration Benefit': 'Unlimited', 'Hospital Network': '12,000+', 'Extra Features': 'Global cover and consumables options', 'Maternity': 'Covered in selected plans', 'OPD': 'Optional', 'Sum Insured (In Lacs)': '5L to 1Cr'}],
    ['ICICI Lombard General Insurance Co. Ltd.', ['Complete Health Insurance', 'Elevate'], {'Room Rent Limit': 'Single private room', 'Co-pay': 'No', 'Power Booster': '10% yearly up to 100%', 'Restoration Benefit': 'Once per year', 'Hospital Network': '9,400+', 'Extra Features': 'Worldwide cover and wellness rewards', 'Maternity': 'Optional', 'OPD': 'Optional', 'Sum Insured (In Lacs)': '3L to 3Cr'}],
    ['Bajaj Allianz General Insurance', ['Health Guard Gold', 'Health Guard Platinum'], {'Room Rent Limit': 'Single private room', 'Co-pay': 'Zone based', 'Power Booster': '10% yearly', 'Restoration Benefit': 'Once per year', 'Hospital Network': '18,000+', 'Extra Features': 'High NCB and better benefits', 'Maternity': 'Covered', 'OPD': 'Optional', 'Sum Insured (In Lacs)': '3L to 1Cr'}],
    ['Reliance General Insurance', ['Health Infinity', 'Health Gain Plus'], {'Room Rent Limit': 'No room restriction', 'Co-pay': 'Optional 10%', 'Pre/Post Hospitalisation': '90 and 180 days', 'Power Booster': '10% cumulative bonus up to 50%', 'Restoration Benefit': 'Up to 100%', 'Hospital Network': '10,000+', 'Extra Features': 'Discounts and online benefits', 'Maternity': 'Covered (conditions apply)', 'OPD': 'Covered (limit applies)', 'Sum Insured (In Lacs)': '5L to 5Cr'}],
    ['Aditya Birla Health Insurance', ['Activ One NXT', 'Activ Fit'], {'Room Rent Limit': 'No room capping', 'Co-pay': 'No', 'Pre/Post Hospitalisation': '90 and 180 days', 'Power Booster': 'Super credit up to 500% of SI', 'Restoration Benefit': '100% reload', 'Hospital Network': '12,000+', 'Extra Features': 'Super reload without premium increase', 'Maternity': 'Not covered', 'OPD': 'Optional', 'Sum Insured (In Lacs)': '5L to 2Cr'}],
    ['ACKO General Insurance Limited', ['ACKO Health III (Platinum)'], {'Room Rent Limit': 'General ward / shared room / single AC room / up to SI', 'Co-pay': 'As per policy schedule', 'Pre/Post Hospitalisation': 'Pre: 30/60/90 days; post: 60/90/120/180 days', 'Consumables Cover': 'Covered as part of admissible hospitalization expenses', 'Power Booster': 'Inflation Protect, No Claim Bonus and Restore SI options', 'Restoration Benefit': 'Restore SI when exhausted; terms depend on schedule', 'Day Care Procedure': 'Covered up to sum insured', 'Sublimits': 'As per schedule; policy may apply specific sublimits', 'Life Long Renewability': 'Ordinarily renewable, subject to policy terms', 'Hospital Network': 'Network list available on ACKO website/app', 'Extra Features': 'Domiciliary treatment, organ donor, second opinion, emergency evacuation and worldwide inpatient option if opted', 'Pre-existing Waiting': 'As per schedule; PED exclusion applies until the stated waiting period expires', 'Deductible': 'Individual and floater deductible options; ₹0.5L to ₹25L range', 'Maternity': 'Subject to policy schedule and applicable terms', 'Road Ambulance': '₹1,000 to ₹10,000 or up to sum insured', 'OPD': 'Not covered under base plan unless an OPD add-on is opted', 'Initial Waiting': 'Not applicable for this Platinum wording', 'Preventive Checkup': 'Once a year / once in two years / once in three years, as selected', 'Sum Insured (In Lacs)': '₹3L, ₹5L, ₹10L, ₹15L, ₹20L, ₹25L, ₹50L, ₹1Cr, ₹1.5Cr, ₹2.5Cr, ₹5Cr, ₹10Cr, Unlimited'}],
    ['Galaxy Health Insurance Company Limited', ['Galaxy Marvel Neo Plan', 'Galaxy Marvel Prime Plan'], {'Room Rent Limit': 'Any room; room-rent modification option available', 'Co-pay': 'No co-payment; voluntary 10%/20%/30%/40%/50% option available', 'Pre/Post Hospitalisation': '90 days pre / 180 days post', 'Consumables Cover': 'Optional for Neo; inbuilt for Prime', 'Power Booster': 'No-claim bonus: 100% of SI for claim-free year; 25% of SI after a claim, once during policy period', 'Restoration Benefit': 'Unlimited automatic restoration for same or different disease', 'Day Care Procedure': 'All day-care procedures covered', 'Sublimits': 'Optional disease/treatment sub-limits available', 'Life Long Renewability': 'Not specified in the brochure', 'Hospital Network': 'Preferred partner network available; network count not specified', 'Extra Features': 'Domiciliary hospitalization, home care up to 10% of SI or ₹5L, organ transplant, AYUSH, modern treatment, bariatric surgery, newborn baby cover, ICU including digital ICU, nanotechnology, second opinion and premium waiver', 'Pre-existing Waiting': 'Neo: 3 years; Prime: 2 years', 'Deductible': 'Optional voluntary aggregate deductible from ₹10,000 to ₹10L', 'Maternity': 'Not specified in the brochure', 'Road Ambulance': 'Road ambulance up to SI; air ambulance up to 10% of SI', 'OPD': 'Optional plans available; up to ₹16,000 for listed plans', 'Initial Waiting': '30 days', 'Preventive Checkup': 'Optional health check-up up to ₹20,000 based on SI, every year', 'Sum Insured (In Lacs)': '₹5L, ₹7.5L, ₹10L, ₹15L, ₹20L, ₹25L, ₹1Cr, ₹2Cr'}]
  ].map(([company, products, overrides]) => ({company, products, fields: Object.assign({}, base, overrides)}));

  const fields = ['Product', 'Room Rent Limit', 'Co-pay', 'Pre/Post Hospitalisation', 'Consumables Cover', 'Power Booster', 'Restoration Benefit', 'Day Care Procedure', 'Sublimits', 'Life Long Renewability', 'Hospital Network', 'Extra Features', 'Pre-existing Waiting', 'Deductible', 'Maternity', 'Road Ambulance', 'OPD', 'Initial Waiting', 'Preventive Checkup', 'Sum Insured (In Lacs)'];
  const escapeHtml = value => String(value).replace(/[&<>"']/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
  const root = document.querySelector('.compare-body');
  if (!root) return;

  root.innerHTML = `<div class="comparison-mode-tabs" role="tablist" aria-label="Insurance type"><button class="comparison-mode-tab active" type="button" role="tab" aria-selected="true" data-mode="health">Health Insurance</button><button class="comparison-mode-tab" type="button" role="tab" aria-selected="false" data-mode="term">Term Insurance</button></div><div class="compare-toolbar"><div class="compare-toolbar-copy"><span class="eyebrow">SOURCE FIELD SET</span><h2>Build your own shortlist</h2><p>Select two insurers, choose a product, and scan every feature in one view.</p></div><div class="compare-actions"><label class="search-box"><span>Search insurers</span><input id="insurer-search" type="search" placeholder="Search by insurer"></label><label class="sort-box"><span>Sort by</span><select id="insurer-sort"><option value="default">Source order</option><option value="network">Hospital network</option><option value="name">Name</option></select></label><label class="switch"><input id="difference-toggle" type="checkbox"><span>Highlight differences</span></label></div></div><div class="insurer-picker" id="insurer-picker"></div><div class="comparison-summary" id="comparison-summary"></div><div class="table-wrap interactive-table"><table><thead id="comparison-head"></thead><tbody id="comparison-body"></tbody></table></div><p class="disclaimer">Source snapshot: Hercules Insurance comparison page, accessed September 2026. Values are indicative and may vary by product, policy version, geography, underwriting, and terms. Verify details with the insurer brochure before purchase.</p>`;

  const modeTabs = root.querySelector('.comparison-mode-tabs');
  const healthView = document.createElement('div');
  healthView.id = 'health-comparison-view';
  while (modeTabs.nextSibling) healthView.appendChild(modeTabs.nextSibling);
  root.appendChild(healthView);
  const termView = document.createElement('div');
  termView.id = 'term-comparison-view';
  termView.hidden = true;
  const orderedTermPlans = window.termComparisonData.plans.filter(plan => !['Bajaj Life', 'ACKO Life'].includes(plan.company)).sort((a, b) => Number(b.company === 'Tata AIA') - Number(a.company === 'Tata AIA'));
  const highlightTermValue = value => {
    const escapedValue = escapeHtml(value);
    const phrase = 'Payor Accelerator Benefit pays 50% of base sum assured on acceptance of terminal illness.';
    return escapedValue.replace(phrase, `<mark class="term-benefit-highlight">${phrase}</mark>`);
  };
  termView.innerHTML = `<div class="compare-toolbar-copy term-comparison-heading"><span class="eyebrow">TERM INSURANCE PLANS</span><h2>Compare term insurance plans</h2><p>Feature availability is subject to the selected variant, eligibility, underwriting, policy status, and policy terms.</p></div><div class="comparison-summary"><span><b>${orderedTermPlans.length}</b> plans compared</span><span>${window.termComparisonData.fields.length} brochure features</span></div><div class="table-wrap interactive-table term-table"><table><thead><tr><th>Feature</th>${orderedTermPlans.map(plan => `<th><strong>${escapeHtml(plan.company)}</strong><span class="term-product">${escapeHtml(plan.product)}</span></th>`).join('')}</tr></thead><tbody>${window.termComparisonData.fields.map(field => `<tr><th>${escapeHtml(field)}</th>${orderedTermPlans.map(plan => `<td>${highlightTermValue(plan.values[field])}</td>`).join('')}</tr>`).join('')}</tbody></table></div><p class="disclaimer">The above comparison is provided for informational purposes only. Please verify all details with the insurer’s official website, the policy brochure, and the policy’s terms & conditions.</p>`;
  root.appendChild(termView);

  const picker = root.querySelector('#insurer-picker');
  const selected = insurerProfiles.slice(0, 2).map(profile => ({profile, product: profile.products[0]}));
  const getProfile = company => insurerProfiles.find(profile => profile.company === company);
  const networkNumber = profile => Number((profile.fields['Hospital Network'].match(/[\d,]+/) || ['0'])[0].replace(',', ''));

  const renderPicker = () => {
    const query = root.querySelector('#insurer-search').value.toLowerCase();
    const sort = root.querySelector('#insurer-sort').value;
    let profiles = insurerProfiles.filter(profile => profile.company.toLowerCase().includes(query));
    if (sort === 'name') profiles = profiles.slice().sort((a, b) => a.company.localeCompare(b.company));
    if (sort === 'network') profiles = profiles.slice().sort((a, b) => networkNumber(b) - networkNumber(a));
    picker.innerHTML = profiles.map(profile => {
      const active = selected.some(item => item.profile.company === profile.company);
      return `<button class="insurer-chip${active ? ' selected' : ''}" data-company="${escapeHtml(profile.company)}" type="button"><span class="chip-check">${active ? '✓' : '+'}</span><span>${escapeHtml(profile.company)}</span></button>`;
    }).join('');
    picker.querySelectorAll('.insurer-chip').forEach(button => button.addEventListener('click', () => {
      const company = button.dataset.company;
      const index = selected.findIndex(item => item.profile.company === company);
      if (index >= 0) selected.splice(index, 1);
      else if (selected.length < 2) selected.push({profile: getProfile(company), product: getProfile(company).products[0]});
      renderPicker();
      renderComparison();
    }));
  };

  const renderComparison = () => {
    const head = root.querySelector('#comparison-head');
    const body = root.querySelector('#comparison-body');
    const summary = root.querySelector('#comparison-summary');
    head.innerHTML = `<tr><th>Attribute</th>${selected.map((item, index) => `<th><div class="selected-company"><span>Company ${index + 1}</span><button type="button" class="remove-company" data-index="${index}" aria-label="Remove ${escapeHtml(item.profile.company)}">×</button></div><strong>${escapeHtml(item.profile.company)}</strong><select class="product-select" data-index="${index}">${item.profile.products.map(product => `<option${product === item.product ? ' selected' : ''}>${escapeHtml(product)}</option>`).join('')}</select></th>`).join('')}${selected.length < 2 ? '<th class="empty-column">Add an insurer above</th>' : ''}</tr>`;
    body.innerHTML = fields.map(field => {
      const values = selected.map(item => field === 'Product' ? item.product : item.profile.fields[field]);
      const different = values.length > 1 && new Set(values).size > 1;
      return `<tr class="${different ? 'is-different' : ''}"><th>${escapeHtml(field)}</th>${values.map(value => `<td>${escapeHtml(value)}</td>`).join('')}${selected.length < 2 ? '<td class="empty-cell">-</td>' : ''}</tr>`;
    }).join('');
    summary.innerHTML = `<span><b>${selected.length}/2</b> insurers selected</span><span>${fields.length} source attributes</span><span>${insurerProfiles.reduce((total, profile) => total + profile.products.length, 0)} products in catalog</span>`;
    head.querySelectorAll('.remove-company').forEach(button => button.addEventListener('click', () => { selected.splice(Number(button.dataset.index), 1); renderPicker(); renderComparison(); }));
    head.querySelectorAll('.product-select').forEach(select => select.addEventListener('change', event => { selected[Number(event.target.dataset.index)].product = event.target.value; renderComparison(); }));
    root.querySelector('#difference-toggle').onchange = event => root.classList.toggle('show-differences', event.target.checked);
  };

  root.querySelector('#insurer-search').addEventListener('input', renderPicker);
  root.querySelector('#insurer-sort').addEventListener('change', renderPicker);
  modeTabs.querySelectorAll('.comparison-mode-tab').forEach(button => button.addEventListener('click', () => {
    const mode = button.dataset.mode;
    modeTabs.querySelectorAll('.comparison-mode-tab').forEach(tab => {
      const active = tab === button;
      tab.classList.toggle('active', active);
      tab.setAttribute('aria-selected', String(active));
    });
    healthView.hidden = mode !== 'health';
    termView.hidden = mode !== 'term';
  }));
  renderPicker();
  renderComparison();
})();
