const SCREENS = {
  'dashboard':        'Dashboard',
  'employees':        'Empleats',
  'employee-detail':  'Marc Esteve · Fitxa',
  'expenses':         'Despeses',
  'validadors':       'Validadors',
  'rules':            'Regles de conveni',
  'calendar':         'Calendari laboral',
  'categories':       'Categories de despesa',
  'integracio':       'Integració RRHH',
  'ocr':              'OCR / Intel·ligència Artificial',
  'audit':            'Auditoria',
  'reports':          'Exportació',
};

function goTo(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const el = document.getElementById('screen-' + id);
  if (el) el.classList.add('active');

  document.querySelectorAll('.sb-item').forEach(item => {
    item.classList.toggle('active', item.dataset.screen === id);
  });

  const title = SCREENS[id] || id;
  document.getElementById('topbar-title').textContent = title;

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.querySelectorAll('.sb-item[data-screen]').forEach(item => {
  item.addEventListener('click', () => goTo(item.dataset.screen));
});
