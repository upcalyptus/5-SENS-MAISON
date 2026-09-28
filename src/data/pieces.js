// Le plan de la maison : chaque page est une pièce. Une pièce n'ouvre que lorsque son contenu est réel.
export const pieces = [
  { n: '00', href: '/', titre: 'Le Seuil', note: "L'idée, en deux minutes", img: '/assets/hero-poster.webp', ouverte: true },
  { n: '01', href: '/label', titre: 'Le Label', note: 'Ce qu\'il distingue, et pourquoi il est rare', img: '/assets/plaque-situation.webp', ouverte: true },
  { n: '02', href: '/cinq-sens', titre: 'Les cinq sens', note: 'Ce que nous évaluons, sens par sens', img: '/assets/img-odorat.webp', ouverte: true },
  { n: '03', href: '/methode', titre: 'La Méthode', note: 'Quarante-huit heures, heure par heure', img: '/assets/img-methode.webp', ouverte: true },
  { n: '04', href: '/independance', titre: 'La Charte', note: 'Ce que l\'on ne peut pas acheter', img: '/assets/img-vue.webp', ouverte: true },
  { n: '05', href: '/rendez-vous', titre: 'Le Rendez-vous', note: 'Trente minutes avec Nina Vienney', img: '/assets/nina-portrait.webp', ouverte: true },
  { n: '06', href: '/comite', titre: 'Le Comité', note: 'Ceux qui évaluent', img: '/assets/img-ouie.webp', ouverte: false },
  { n: '07', href: '/maisons', titre: 'Les Maisons', note: 'Le palmarès', img: '/assets/img-lobby.webp', ouverte: false },
  { n: '08', href: '/journal', titre: 'Le Journal', note: 'Lumière, silence, parfums, tables', img: '/assets/img-gout.webp', ouverte: false },
  { n: '09', href: '/presse', titre: 'La Presse', note: 'Ce que l\'on dit de 5 Sens', img: '/assets/img-toucher.webp', ouverte: false }
];
export const ouvertes = pieces.filter(p => p.ouverte);
export const suivante = (href) => { const i = ouvertes.findIndex(p => p.href === href); return ouvertes[(i + 1) % ouvertes.length]; };
