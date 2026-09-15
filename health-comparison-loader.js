(() => {
  const allowedCompanies = new Set([
    'HDFC ERGO',
    'ICICI Lombard',
    'Care Health Insurance',
    'Aditya Birla Health Insurance',
    'Niva Bupa'
  ]);
  const fieldOrder = [
    'Room Rent Limit',
    'Co-Pay',
    'Pre/Post Hospitalisation',
    'Consumables Cover',
    'Power Booster',
    'Restoration Benefit',
    'Day Care procedure',
    'Sublimits',
    'Life Long Renewability',
    'Hospital Network',
    'Extra Features',
    'Pre-existing Waiting',
    'Deductible',
    'Maternity',
    'Road Ambulance',
    'OPD',
    'Initial Waiting',
    'Preventive Checkup',
    'Sum Insured (In Lacs)',
    'Ayush Coverage'
  ];
  const escapeHtml = value => String(value ?? '-').replace(/[&<>"']/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
  const parseJsonBlocks = text => {
    const blocks = [];
    let start = -1;
    let depth = 0;
    let inString = false;
    let escaped = false;
    for (let index = 0; index < text.length; index += 1) {
      const character = text[index];
      if (inString) {
        if (escaped) escaped = false;
        else if (character === '\\') escaped = true;
        else if (character === '"') inString = false;
        continue;
      }
      if (character === '"') {
        inString = true;
        continue;
      }
      if (character === '{') {
        if (depth === 0) start = index;
        depth += 1;
      } else if (character === '}') {
        depth -= 1;
        if (depth === 0 && start >= 0) {
          blocks.push(JSON.parse(text.slice(start, index + 1)));
          start = -1;
        }
      }
    }
    return blocks.flatMap(block => Array.isArray(block.documents) ? block.documents : [block]);
  };
  const normalizePlan = document => {
    const company = document.Company || document.company;
    const product = document.plan_name;
    const fields = document.data_points || Object.fromEntries(Object.entries(document).filter(([key]) => !['Company', 'company', 'plan_name'].includes(key)));
    return {
      company,
      product,
      fields
    };
  };
  const renderHealthComparison = plans => {
    const root = document.querySelector('#health-comparison-view');
    if (!root) return;
    const fields = fieldOrder.filter(field => plans.some(plan => Object.prototype.hasOwnProperty.call(plan.fields, field)));
    root.innerHTML = `<div class="compare-toolbar-copy term-comparison-heading"><span class="eyebrow">HEALTH INSURANCE PLANS</span><h2>Compare health insurance plans</h2><p>Only the plans and datapoints supplied in the embedded health comparison data are shown. Verify current policy wording, eligibility, exclusions, and add-on terms before purchase.</p></div><div class="comparison-summary"><span><b>${plans.length}</b> plans compared</span><span>${fields.length} source features</span><span>Five selected insurers</span></div><div class="table-wrap interactive-table term-table health-source-table"><table><thead><tr><th>Feature</th>${plans.map(plan => `<th><strong>${escapeHtml(plan.company)}</strong><span class="term-product">${escapeHtml(plan.product)}</span></th>`).join('')}</tr></thead><tbody><tr><th>Plan</th>${plans.map(plan => `<td>${escapeHtml(plan.product)}</td>`).join('')}</tr>${fields.map(field => `<tr><th>${escapeHtml(field)}</th>${plans.map(plan => `<td>${escapeHtml(plan.fields[field])}</td>`).join('')}</tr>`).join('')}</tbody></table></div><p class="disclaimer">The above comparison is provided for informational purposes only. Please verify all details with the insurer’s official website, the policy brochure, and the policy’s terms & conditions..</p>`;
  };
  const renderHealthPicker = plans => {
    const root = document.querySelector('#health-comparison-view');
    if (!root) return;
    const companies = [...new Set(plans.map(plan => plan.company))];
    const plansByCompany = company => plans.filter(plan => plan.company === company);
    const companyOptions = selected => companies.map(company => `<option value="${escapeHtml(company)}"${company === selected ? ' selected' : ''}>${escapeHtml(company)}</option>`).join('');
    const planOptions = company => plansByCompany(company).map(plan => `<option value="${escapeHtml(plan.product)}">${escapeHtml(plan.product)}</option>`).join('');
    root.innerHTML = `<div class="compare-toolbar-copy term-comparison-heading"><span class="eyebrow">HEALTH INSURANCE PLANS</span><h2>Compare health insurance plans</h2><p>Select two company-and-plan combinations to see only the features you want to compare.</p></div><div class="health-selection-panel"><div class="health-selection-slot"><span class="health-selection-label">Company + Plan 1</span><label>Insurer<select class="health-company-select" data-slot="0">${companyOptions(companies[0])}</select></label><label>Plan<select class="health-plan-select" data-slot="0">${planOptions(companies[0])}</select></label></div><div class="health-selection-slot"><span class="health-selection-label">Company + Plan 2</span><label>Insurer<select class="health-company-select" data-slot="1">${companyOptions(companies[1] || companies[0])}</select></label><label>Plan<select class="health-plan-select" data-slot="1">${planOptions(companies[1] || companies[0])}</select></label></div><button class="btn btn-primary health-compare-button" type="button">Compare selected plans</button><p class="health-selection-message" role="alert"></p></div><div class="health-comparison-result" hidden></div>`;
    const companySelects = [...root.querySelectorAll('.health-company-select')];
    const planSelects = [...root.querySelectorAll('.health-plan-select')];
    const message = root.querySelector('.health-selection-message');
    const result = root.querySelector('.health-comparison-result');
    const renderResult = selectedPlans => {
      const fields = fieldOrder.filter(field => selectedPlans.some(plan => Object.prototype.hasOwnProperty.call(plan.fields, field)));
      result.innerHTML = `<div class="comparison-summary"><span><b>2</b> plans selected</span><span>${fields.length} source features</span></div><div class="table-wrap interactive-table term-table health-source-table"><table><thead><tr><th>Feature</th>${selectedPlans.map(plan => `<th><strong>${escapeHtml(plan.company)}</strong><span class="term-product">${escapeHtml(plan.product)}</span></th>`).join('')}</tr></thead><tbody><tr><th>Plan</th>${selectedPlans.map(plan => `<td>${escapeHtml(plan.product)}</td>`).join('')}</tr>${fields.map(field => `<tr><th>${escapeHtml(field)}</th>${selectedPlans.map(plan => `<td>${escapeHtml(plan.fields[field])}</td>`).join('')}</tr>`).join('')}</tbody></table></div><p class="disclaimer">The above comparison is provided for informational purposes only. Please verify all details with the insurer’s official website, the policy brochure, and the policy’s terms & conditions..</p>`;
      result.hidden = false;
    };
    companySelects.forEach((select, index) => select.addEventListener('change', event => {
      planSelects[index].innerHTML = planOptions(event.target.value);
      result.hidden = true;
      message.textContent = '';
    }));
    root.querySelector('.health-compare-button').addEventListener('click', () => {
      const selectedPlans = planSelects.map(select => plans.find(plan => plan.company === companySelects[Number(select.dataset.slot)].value && plan.product === select.value));
      if (!selectedPlans[0] || !selectedPlans[1]) {
        message.textContent = 'Select one plan from each company.';
        return;
      }
      message.textContent = '';
      renderResult(selectedPlans);
    });
  };
  try {
    const source = typeof window.healthInsuranceSource === 'string' ? window.healthInsuranceSource : window.healthInsuranceSource?.value;
    if (!source) throw new Error('Embedded health comparison data is unavailable.');
    renderHealthPicker(parseJsonBlocks(source).map(normalizePlan).filter(plan => allowedCompanies.has(plan.company)));
  } catch (error) {
    const root = document.querySelector('#health-comparison-view');
    if (root) root.innerHTML = `<div class="comparison-empty"><h3>Health comparison data could not be loaded</h3><p>${escapeHtml(error.message)}</p></div>`;
  }
})();
