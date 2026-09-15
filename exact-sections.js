const currentPath = location.pathname.toLowerCase();
if (currentPath.includes('compare')) {
  const comparisonStyles = document.createElement('link');
  comparisonStyles.rel = 'stylesheet';
  comparisonStyles.href = 'comparison-overrides.css';
  document.head.appendChild(comparisonStyles);
  document.querySelector('.page-hero > p:last-child')?.replaceChildren(document.createTextNode('Compare verified product highlights where official insurer information is available. For current premiums and eligibility, request a personalised quote.'));
  document.querySelector('.disclaimer')?.remove();
  const table = document.querySelector('.table-wrap');
  const title = document.querySelector('#table-title');
  const note = document.querySelector('#table-note');
  const verifiedComparisons = {
    term: {
      title: 'Term Insurance Plans',
      note: 'Term premiums and benefits depend on age, health, income, cover amount, and underwriting. Get a current quote from our advisors.',
      rows: []
    },
    health: {
      title: 'Verified Health Insurance Highlights',
      note: 'Highlights checked against current insurer product pages. Benefits, eligibility, exclusions, and availability remain subject to policy wording.',
      rows: [
        ['HDFC ERGO', 'Optima Secure', '4X coverage at no additional cost', '16,000+ cashless healthcare network', 'Procedure and disposable cost coverage'],
        ['ICICI Lombard', 'Health AdvantEdge', 'Pre/post hospitalisation: 60 / 180 days', '13,000+ network hospitals', '24x7 customer support'],
        ['Aditya Birla Health', 'Activ One MAX / NXT', 'HealthReturns up to 100% of premium', '16,500 cashless hospitals', 'No capping and reload benefits']
      ]
    },
    travel: {
      title: 'Verified Travel Insurance Highlights',
      note: 'Highlights checked against current insurer product pages. Coverage, limits, destinations, and exclusions remain subject to policy wording.',
      rows: [
        ['HDFC ERGO', 'Travel Insurance / Explorer', '175+ countries', '24x7 global assistance', 'Medical, baggage, passport, delay, and cancellation cover'],
        ['Digit', 'International Travel Insurance: Smart / Smart 360', '150+ countries and islands', '24x7 travel assistance', 'Medical, baggage, passport, trip cancellation, and flight delay cover'],
        ['ICICI Lombard', 'TripSecure+', 'Up to $5,000,000 sum insured', '24x7 global support', 'Medical, baggage, passport, trip disruption, and add-on covers']
      ]
    }
  };
  const renderVerifiedComparison = type => {
    const data = verifiedComparisons[type];
    if (!data || !title || !note || !table) return;
    title.textContent = data.title;
    note.textContent = data.note;
    if (!data.rows.length) {
      table.innerHTML = '<div class="comparison-empty"><h3>Current term plan details require a personalised quote</h3><p>Term insurance pricing and eligibility depend on personal underwriting factors. Our advisors will compare current insurer documents for your profile.</p><a class="btn btn-primary" href="contact.html">Get Personalised Advice</a></div>';
      return;
    }
    table.innerHTML = `<table><thead><tr><th>Provider</th><th>Product</th><th>Verified detail</th><th>Support / network</th><th>Highlights</th><th></th></tr></thead><tbody>${data.rows.map(row => `<tr><td><b>${row[0]}</b></td><td>${row[1]}</td><td>${row[2]}</td><td>${row[3]}</td><td>${row[4]}</td><td><a href="contact.html">Get Quote</a></td></tr>`).join('')}</tbody></table>`;
  };
  renderVerifiedComparison('term');
  const tabGroup = document.querySelector('.tabs');
  if (tabGroup) {
    const cleanTabGroup = tabGroup.cloneNode(true);
    tabGroup.replaceWith(cleanTabGroup);
    cleanTabGroup.querySelectorAll('.tab').forEach(tab => tab.addEventListener('click', () => renderVerifiedComparison(tab.dataset.type)));
  }
}
const logoStyles = document.createElement('link');
logoStyles.rel = 'stylesheet';
logoStyles.href = 'logo-overrides.css';
document.head.appendChild(logoStyles);
document.querySelectorAll('.brand, .footer-brand').forEach(brand => {
  brand.innerHTML = '<img src="logo.svg" alt="Insurance Mentors">';
});
const removedInsurerNames = /\b(LIC|Kotak Life|SBI(?: Life)?)\b/g;
const textWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
const textNodes = [];
while (textWalker.nextNode()) textNodes.push(textWalker.currentNode);
textNodes.forEach(node => { node.nodeValue = node.nodeValue.replace(removedInsurerNames, ''); });
document.querySelectorAll('.reasons p').forEach(node => { if (node.textContent.includes('HDFC') || node.textContent.trim().startsWith(',')) node.textContent = 'We compare leading insurance providers to help you choose with confidence.'; });
const adviceLink = document.querySelector('.nav-cta');
if (adviceLink) {
  adviceLink.href = 'https://wa.me/918125252378?text=Hi%20Team%2C%20looking%20for%20insurance%20advice%20';
  adviceLink.target = '_blank';
  adviceLink.rel = 'noopener';
}
if (currentPath.endsWith('index.html') || currentPath.endsWith('/')) {
  document.querySelector('.hero')?.insertAdjacentHTML('beforeend', '<div class="hero-offers"><div class="hero-offer"><strong>Term Insurance</strong><span>From ₹500/mo</span></div><div class="hero-offer"><strong>Health Insurance</strong><span>Family Floater</span></div><div class="hero-offer"><strong>Travel Insurance</strong><span>Worldwide Cover</span></div></div>');
  const homeStats = document.querySelectorAll('.stats b');
  if (homeStats[0]) homeStats[0].innerHTML = '1100+<small>Families Protected</small>';
  if (homeStats[2]) homeStats[2].innerHTML = 'Since 2019';
  document.querySelector('.trust small')?.replaceChildren(document.createTextNode('Trusted by 1100+ families'));
  const founderSection = document.querySelector('.story');
  founderSection?.querySelector('.eyebrow')?.replaceChildren(document.createTextNode('OUR FOUNDER’S MISSION'));
  founderSection?.querySelector('blockquote')?.replaceChildren(document.createTextNode('Our mission is to help protect 1 lakh+ families with the right health and term insurance. We provide clear, honest guidance so you understand every plan and benefit. We help you choose coverage that protects the people you love.'));
  founderSection?.querySelector('b')?.replaceChildren(document.createTextNode('Ravi'));
  founderSection?.querySelector('small')?.replaceChildren(document.createTextNode('Founder and Health Insurance Specialist'));
}
if (currentPath.includes('about')) {
  const main = document.querySelector('main');
  if (main) {
    main.innerHTML = `<section class="page-hero"><p class="eyebrow">OUR STORY</p><h1>We’re Your<br><em>Insurance Mentors</em></h1><p>We started with a simple belief: every family deserves clear, honest guidance when it comes to health and term insurance.</p></section><section class="section about-stats about-source-stats"><div class="about-stat"><strong>1100+</strong><span>Families Protected</span></div><div class="about-stat"><strong>2019</strong><span>Started Independently</span></div><div class="about-stat"><strong>Health</strong><span>Our Core Focus</span></div><div class="about-stat"><strong>100%</strong><span>Personal Guidance</span></div></section><section class="section about-copy"><p class="eyebrow">WHO WE ARE</p><h2>Advice that puts people first</h2><p>InsuranceMentors.in is built around practical, personal guidance. We help families understand their health and term insurance options, compare what matters, and choose protection that fits their real needs.</p><p>We work independently and explain insurance in plain language. Our goal is not to push a policy; it is to help you make a decision you can feel confident about.</p></section><section class="section timeline"><p class="eyebrow">OUR JOURNEY</p><h2>Growing with the families we protect</h2><article><b>2019</b><h3>Working Independently</h3><p>Started working independently with a focus on Health and Term Insurance.</p></article><article><b>2020</b><h3>Growing Partnerships</h3><p>Built partnerships to compare more plans and serve families better.</p></article><article><b>2021</b><h3>100+ Families</h3><p>Helped more than 100 families find suitable insurance protection.</p></article><article><b>2023</b><h3>300+ Families</h3><p>Continued growing through personal referrals and thoughtful advice.</p></article><article><b>2025</b><h3>500+ Families</h3><p>Reached 500+ families protected through personal guidance and trusted referrals.</p></article><article><b>2026</b><h3>1100+ and Counting</h3><p>InsuranceMentors.in launched and crossed 1,100 protected families, with the same personal approach.</p></article></section><section class="section values"><p class="eyebrow">WHAT WE BELIEVE</p><h2>Our Core Values</h2><div class="cards"><article><h3>Health First</h3><p>We begin with your family’s health needs, priorities, and budget before discussing a plan.</p></article><article><h3>Honest Comparisons</h3><p>We explain the differences clearly, including limits and exclusions, so you can choose with confidence.</p></article><article><h3>Support That Stays</h3><p>Our guidance does not end when you choose a policy. We remain available when questions arise.</p></article></div></section><section class="section advisors"><p class="eyebrow">THE PEOPLE BEHIND INSURANCEMENTORS</p><h2>Meet Your Advisors</h2><p>Personal guidance from a team focused on helping families make better insurance decisions.</p><div class="advisor-grid"><article class="advisor-card"><div class="advisor-avatar">RK</div><h3>Ravi</h3><p>Founder and Health Insurance Specialist</p></article><article class="advisor-card"><div class="advisor-avatar">AS</div><h3>Abhi</h3><p>Health Advisor</p></article></div></section><section class="cta"><h2>Ready to find your<br><em>right cover?</em></h2><p>Talk to our advisors for clear, personal guidance on health and term insurance.</p><a class="btn" href="contact.html">Get Free Consultation</a></section>`;
  }
}
if (currentPath.includes('contact')) {
  document.querySelector('#contact-form button[type="submit"]')?.replaceChildren(document.createTextNode('Send Enquiry'));
}
