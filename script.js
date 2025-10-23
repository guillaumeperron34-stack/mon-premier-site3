// Sélectionne le bouton
// Sélectionne le bouton
const boutonTheme = document.getElementById('theme-toggle');

// Vérifie s'il y a un thème enregistré dans localStorage
const themeSauvegarde = localStorage.getItem('theme');

// Si "sombre" est enregistré, on applique la classe correspondante
if (themeSauvegarde === 'sombre') {
  document.body.classList.add('sombre');
  boutonTheme.textContent = '☀️ Mode clair';
}

// Quand on clique sur le bouton
boutonTheme.addEventListener('click', () => {
  document.body.classList.toggle('sombre');

  // Vérifie le mode actif
  const modeActuel = document.body.classList.contains('sombre') ? 'sombre' : 'clair';

  // Sauvegarde le mode choisi
  localStorage.setItem('theme', modeActuel);

  // Met à jour le texte du bouton
  if (modeActuel === 'sombre') {
    boutonTheme.textContent = '☀️ Mode clair';
  } else {
    boutonTheme.textContent = '🌙 Mode sombre';
  }
});
