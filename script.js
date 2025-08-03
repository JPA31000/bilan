// ===================================================================================
// DONNÉES PAR DÉFAUT
// Utilisées la 1ère fois ou si les données personnalisées sont absentes/effacées.
// ===================================================================================

const defaultEleves = [
  // Données initiales issues du fichier Mdp portail.pdf
  { prenom: 'ADAM', nom: 'AJENGUI', groupe: 1 }, { prenom: 'Arna', nom: 'Ali', groupe: 1 }, { prenom: 'Edith', nom: 'BORIN', groupe: 1 }, { prenom: 'Ibrahima', nom: 'Camara', groupe: 1 }, { prenom: 'flora', nom: 'chachuat', groupe: 1 }, { prenom: 'Bianca', nom: 'Ciulin', groupe: 1 }, { prenom: 'Aurelia', nom: 'Fontaine', groupe: 1 }, { prenom: 'WALID', nom: 'GUEMIMI AZZAB', groupe: 1 }, { prenom: 'Luis', nom: 'JIMENEZ', groupe: 1 }, { prenom: 'Debora', nom: 'Malunda', groupe: 1 }, { prenom: 'Téilo', nom: 'Mateo', groupe: 1 }, { prenom: 'Jeanael', nom: '', groupe: 1 }, { prenom: 'Peterson', nom: '', groupe: 2 }, { prenom: 'Kaina', nom: 'BEJI', groupe: 2 }, { prenom: 'Ortence', nom: 'DAOUDA', groupe: 2 }, { prenom: 'Ayoub', nom: 'MHAMDI', groupe: 2 }, { prenom: 'Baba', nom: 'Ndiaye', groupe: 2 }, { prenom: 'Nawel', nom: 'Qader', groupe: 2 }, { prenom: 'noémy', nom: 'rigouste', groupe: 2 }, { prenom: 'Emma', nom: 'ROCHE', groupe: 2 }, { prenom: 'Bena', nom: 'SAHIN', groupe: 2 }, { prenom: 'DIADIE', nom: 'WADE', groupe: 2 }, { prenom: 'ILYESS', nom: 'YAHOUI', groupe: 2 }, { prenom: 'Andréas', nom: 'ZINGILA', groupe: 2 }, { prenom: 'Sheryne', nom: 'Belaagradi', groupe: 3 }, { prenom: 'Kaiss', nom: 'Benziane', groupe: 3 }, { prenom: 'Dame', nom: 'FallSeye', groupe: 3 }, { prenom: 'lenny', nom: 'gimenez', groupe: 3 }, { prenom: 'nema', nom: 'khoya', groupe: 3 }, { prenom: 'llana', nom: 'Labaur', groupe: 3 }, { prenom: 'Jordan', nom: 'LAFFONT', groupe: 3 }, { prenom: 'Teiki', nom: 'Mabille', groupe: 3 }, { prenom: 'KENZA', nom: 'MAHBOUB', groupe: 3 }, { prenom: 'Yoni', nom: 'Moutonnet', groupe: 3 }, { prenom: 'Ethan', nom: 'Ousseni', groupe: 3 }, { prenom: 'mina', nom: 'sahin', groupe: 3 }, { prenom: 'Heather', nom: 'Talon', groupe: 3 }, { prenom: 'Tamirlan', nom: 'Tazabaev', groupe: 3 }, { prenom: 'Sami', nom: 'Tekin', groupe: 3 }
];

const defaultCriteres = [
  // Données initiales issues du fichier script.js
  { code: 'implication', label: 'Implication et attitude en classe', icon: 'fa-user-check', suggestions: [ 'Se montre souvent désintéressé(e) lors des activités de groupe.', 'A du mal à suivre l’ensemble des consignes proposées.', 'Intervient rarement et reste en retrait lors des explications.', 'Montre peu de curiosité pour les sujets abordés.', 'Peut être distrait(e) par des éléments extérieurs au cours.', 'Fixe parfois des objectifs sans les formaliser.', 'Commence les tâches sans toujours écouter les consignes.', 'Participe ponctuellement sans régularité notable.', 'Montre une attention variable selon les séances.', 'Suit globalement les consignes, avec quelques oublis.', 'Est attentif(ve) mais hésite avant de solliciter l’enseignant.', 'Demande parfois des clarifications de manière irrégulière.', 'Intervient avec pertinence mais de façon sporadique.', 'Participe activement dans certains travaux pratiques.', 'Propose des idées de manière régulière en groupe.', 'Prend des initiatives pour approfondir certaines notions.', 'Demande des retours pour améliorer son attitude en classe.', 'Affiche une attitude positive et motivée en continu.', 'Fait preuve d’initiative et engage des échanges constructifs.', 'Donne l’exemple par une implication soutenue et constante.' ], improvements: [ 'Essayez de vous impliquer davantage en posant une question par séance.', 'Poursuivez vos efforts et cherchez à participer plus régulièrement.', 'Continuez sur cette lancée et partagez vos idées avec confiance.', 'Maintenez cette attitude proactive et inspirez vos camarades.' ] },
  { code: 'technique', label: 'Compétences techniques / professionnelles', icon: 'fa-wrench', suggestions: [ 'Rencontre des difficultés à utiliser les outils de base.', 'Manque de précision dans l’exécution des tâches techniques.', 'A besoin d’un accompagnement fréquent pour réaliser les opérations.', 'Éprouve des hésitations dans l’application des procédures.', 'Respecte partiellement les normes de sécurité élémentaires.', 'Sait reproduire les gestes appris sans autonomie complète.', 'Montre une compréhension basique des outils professionnels.', 'Accomplit les tâches techniques avec guidance régulière.', 'Commence à respecter les règles de sécurité de manière sporadique.', 'Maîtrise les opérations élémentaires en situation guidée.', 'Prend en compte les consignes de sécurité avec régularité.', 'Montre une rigueur correcte dans le maniement des équipements.', 'Accomplit les travaux techniques de façon fiable et répétée.', 'Démontre une bonne compréhension des protocoles professionnels.', 'Exécute les tâches techniques avec précision et méthode.', 'Utilise efficacement les outils en respectant les normes.', 'Fait preuve d’autonomie et de soin dans le travail technique.', 'Anticipe les difficultés et ajuste sa méthode de travail.', 'Maîtrise les gestes professionnels complexes de façon constante.', 'Donne l’exemple en matière de qualité et de sécurité.' ], improvements: [ 'Pratiquez les gestes de base régulièrement pour gagner en confiance.', 'Consolidez vos acquis en vous exerçant sur des cas simples.', 'Défiez-vous sur des tâches plus complexes pour gagner en autonomie.', 'Continuez d’affiner vos compétences et partagez votre savoir-faire.' ] },
  { code: 'comprehension', label: 'Compréhension et acquisition des savoirs', icon: 'fa-brain', suggestions: [ 'N’arrive pas à restituer les notions de base en contexte.', 'Comprend des éléments isolés sans lien global.', 'Montre des difficultés à verbaliser sa compréhension.', 'A besoin d’exemples répétés pour assimiler pleinement.', 'Assimile partiellement certaines notions fondamentales.', 'Doit revoir régulièrement les notions traitées.', 'Comprend l’essentiel mais oublie parfois des détails clés.', 'Reformule les notions simples avec aide ponctuelle.', 'Établit un lien limité entre théorie et pratique.', 'Applique les savoirs de base en exercices guidés.', 'Intègre progressivement les concepts de manière autonome.', 'Pose des questions pertinentes pour clarifier sa compréhension.', 'Reformule les notions avec précision et en contexte adapté.', 'Applique de façon fiable les savoirs aux cas pratiques.', 'Fait preuve d’analyse et relie les notions entre elles.', 'Élargit sa compréhension à de nouvelles situations techniques.', 'Démontre une compréhension approfondie des principes clés.', 'Transfère ses connaissances à des cas pratiques variés.', 'Synthétise clairement les savoirs et maîtrise leur application.', 'Excelle dans l’acquisition et l’exploitation des savoirs.' ], improvements: [ 'Relisez vos notes après chaque cours pour renforcer votre compréhension.', 'Posez des questions dès que vous avez un doute pour clarifier les notions.', 'Enrichissez votre réflexion en reliant théorie et pratique.', 'Expliquez les concepts à un camarade pour consolider votre maîtrise.' ] },
  { code: 'travail', label: 'Travail personnel et régularité', icon: 'fa-clock', suggestions: [ 'Rend fréquemment les travaux hors délai sans explication.', 'Travaille de façon irrégulière selon la motivation du jour.', 'A du mal à organiser son planning personnel.', 'N’anticipe pas les étapes et termine souvent à la dernière minute.', 'Manque de suivi dans l’application des consignes de travail.', 'Répond aux exigences mais sans constance marquée.', 'Fournit un travail acceptable uniquement dans l’urgence.', 'Développe une routine de travail avec quelques oublis.', 'Gère son temps de façon moyenne, avec quelques retards.', 'Respecte globalement les échéances, parfois juste à temps.', 'Planifie les tâches simples sans demander d’aide.', 'Réalise un travail soigné lorsqu’il y consacre du temps.', 'Fournit régulièrement un travail complet et bien présenté.', 'Anticipe les demandes et propose des compléments d’analyse.', 'Organise efficacement son travail avec peu de rappels extérieurs.', 'Démontre une bonne autonomie dans la réalisation des tâches.', 'Adapte son rythme de travail en fonction des besoins du projet.', 'Travail approfondi et rendu systématiquement en avance.', 'Donne l’exemple par sa rigueur et sa régularité constantes.' ], improvements: [ 'Organisez une liste de tâches à accomplir chaque jour.', 'Fixez-vous des échéances claires pour chaque travail.', 'Planifiez vos sessions de travail en avance pour plus de régularité.', 'Maintenez cette rigueur et anticipez toujours vos besoins.' ] },
  { code: 'savoir_etre', label: 'Savoir-être professionnel', icon: 'fa-user-tie', suggestions: [ 'Manque ponctuel aux règles de base (ponctualité, tenue).', 'Comportement variable selon les situations.', 'A besoin de rappels pour respecter les consignes élémentaires.', 'Manque parfois de considération pour le matériel partagé.', 'Interagit de façon restreinte avec les camarades.', 'Globalement respectueux des règles, avec quelques oublis.', 'Attitude correcte mais sans initiative relationnelle.', 'Comportement coopératif dans certaines activités.', 'Civilité verbale présente mais plutôt discrète.', 'Sait écouter et respecter les avis des autres.', 'Participe de manière constructive aux échanges de groupe.', 'Communication claire et respectueuse la plupart du temps.', 'Gère les conflits simples avec calme et professionnalisme.', 'Respect constant du matériel et de l’environnement.', 'Propose spontanément son aide aux camarades en difficulté.', 'Attitude exemplaire de collaboration et de partage.', 'Crée un climat de confiance par son professionnalisme.', 'Donne l’exemple par sa ponctualité et son sérieux.' ], improvements: [ 'Rappelez-vous de respecter ponctualité et consignes à chaque séance.', 'Travaillez votre communication avec vos pairs pour un meilleur échange.', 'Proposez régulièrement votre aide pour renforcer votre esprit d’équipe.', 'Continuez d’incarner un savoir-être exemplaire pour vos camarades.' ] },
  { code: 'progression', label: 'Progression', icon: 'fa-chart-line', suggestions: [ 'N’a pas montré d’évolution notable depuis le début du semestre.', 'Progrès limités, à consolider régulièrement les fondamentaux.', 'Progression irrégulière et sujette à encadrement permanent.', 'Avance lentement avec recul sur certaines notions.', 'Progrès perceptibles mais sans suivi clair.', 'Évolution modérée, à renforcer par un travail ciblé.', 'Montre une amélioration progressive sur quelques points.', 'Progrès constants dans les tâches guidées.', 'Avance régulièrement sur les exercices pratiques.', 'S’adapte progressivement en autonomie.', 'Amélioration sensible dans la compréhension des méthodes.', 'Acquiert de nouvelles compétences à un rythme satisfaisant.', 'Progression régulière avec initiatives ponctuelles.', 'Évolution notable sur plusieurs critères.', 'S’inscrit dans une dynamique positive de progression.', 'Démontre une constance dans le développement de ses acquis.', 'Excelle dans sa progression et ses résultats sont en nette amélioration.', 'Affine sans cesse ses compétences et perfectionne son savoir.', 'Donne l’exemple par sa progression continue et motivée.' ], improvements: [ 'Identifiez un point clé à améliorer chaque semaine.', 'Fixez-vous de petits objectifs pour mesurer votre progression.', 'Célébrez vos progrès et définissez un nouveau défi.', 'Continuez à vous challenger pour maintenir votre évolution.' ] }
];

// ===================================================================================
// LOGIQUE DE GESTION DES DONNÉES (localStorage)
// ===================================================================================

function loadData(key, defaultValue) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : defaultValue;
  } catch (error) {
    console.error("Erreur lors du chargement des données depuis localStorage:", error);
    return defaultValue;
  }
}

function saveData(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error("Erreur lors de la sauvegarde des données dans localStorage:", error);
    alert("Impossible de sauvegarder les données. Le stockage local est peut-être plein ou indisponible.");
  }
}

// Chargement des données au démarrage de l'application
let eleves = loadData('mesEleves', defaultEleves);
let criteres = loadData('mesCriteres', defaultCriteres);

// ===================================================================================
// FONCTIONS DE GESTION DES FENÊTRES MODALES
// ===================================================================================

const modalOverlay = document.getElementById('management-modal-overlay');
const groupPanel = document.getElementById('group-management-panel');
const criteriaPanel = document.getElementById('criteria-management-panel');

function closeAllModals() {
  modalOverlay.style.display = 'none';
}

function openGroupManagement() {
  const editor = document.getElementById('group-editor');
  editor.innerHTML = '';
  eleves.forEach((eleve, index) => {
    const row = document.createElement('div');
    row.className = 'student-row';
    row.innerHTML = `<span class="student-name">${eleve.prenom} ${eleve.nom}</span><label>Groupe :</label><input type="number" value="${eleve.groupe}" data-index="${index}" style="width: 60px;">`;
    editor.appendChild(row);
  });
  groupPanel.style.display = 'block';
  criteriaPanel.style.display = 'none';
  modalOverlay.style.display = 'flex';
}

function saveGroupsAndReload() {
  document.querySelectorAll('#group-editor input[data-index]').forEach(input => {
    eleves[input.dataset.index].groupe = parseInt(input.value, 10) || 1;
  });
  saveData('mesEleves', eleves);
  alert('Groupes sauvegardés ! La page va se rafraîchir.');
  location.reload();
}

function openCriteriaManagement() {
  const editor = document.getElementById('criteria-editor');
  editor.innerHTML = '';
  criteres.forEach((critere, index) => {
    const row = document.createElement('div');
    row.className = 'criterion-row';
    row.innerHTML = `<div class="criterion-label"><strong>${critere.label}</strong><p>Suggestions d'appréciations (une par ligne) :</p><textarea data-index="${index}" data-type="suggestions">${critere.suggestions.join('\n')}</textarea><p>Conseils pour progresser (une par ligne) :</p><textarea data-index="${index}" data-type="improvements">${critere.improvements.join('\n')}</textarea></div>`;
    editor.appendChild(row);
  });
  criteriaPanel.style.display = 'block';
  groupPanel.style.display = 'none';
  modalOverlay.style.display = 'flex';
}

function saveCriteriaAndReload() {
  document.querySelectorAll('#criteria-editor textarea[data-index]').forEach(textarea => {
    const { index, type } = textarea.dataset;
    criteres[index][type] = textarea.value.split('\n').map(line => line.trim()).filter(line => line);
  });
  saveData('mesCriteres', criteres);
  alert('Appréciations sauvegardées ! La page va se rafraîchir.');
  location.reload();
}

// ===================================================================================
// LOGIQUE PRINCIPALE DE L'APPLICATION
// ===================================================================================

document.addEventListener('DOMContentLoaded', () => {
  // Affichage de la date
  document.getElementById('date').textContent = new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' });

    // ### DÉBUT DE LA CORRECTION ###
  // Génération du sélecteur d'élèves (maintenant pliable)
  const studentSelector = document.getElementById('student-selector');
  studentSelector.innerHTML = '<label>Élèves</label>';
  const groupedEleves = eleves.reduce((acc, e, i) => { (acc[e.groupe] = acc[e.groupe] || []).push({ ...e, index: i }); return acc; }, {});
  
  Object.keys(groupedEleves).sort((a,b) => a-b).forEach(groupe => {
    const groupContainer = document.createElement('div');
    groupContainer.className = 'student-group';
    groupContainer.classList.add('collapsed'); // <-- LIGNE AJOUTÉE POUR PLIER PAR DÉFAUT

    // Création de l'en-tête cliquable avec icône
    const groupHeader = document.createElement('h4');
    groupHeader.className = 'group-header';
    groupHeader.innerHTML = `Groupe ${groupe} <i class="fas fa-chevron-down toggle-icon"></i>`;
    
    // Création du conteneur pour la liste des élèves
    const studentList = document.createElement('div');
    studentList.className = 'student-list';

    groupedEleves[groupe].forEach(e => {
      const checkboxWrapper = document.createElement('div');
      checkboxWrapper.className = 'student-checkbox';
      checkboxWrapper.innerHTML = `<label><input type="checkbox" name="eleve" value="${e.index}"> ${e.prenom} ${e.nom}</label>`;
      studentList.appendChild(checkboxWrapper);
    });

    groupContainer.appendChild(groupHeader);
    groupContainer.appendChild(studentList);
    studentSelector.appendChild(groupContainer);
  });

  // Ajout de l'événement pour plier/déplier les groupes
  studentSelector.addEventListener('click', (event) => {
    const header = event.target.closest('.group-header');
    if (!header) return; // Si le clic n'est pas sur un en-tête, on ne fait rien

    const groupContainer = header.parentElement;
    if (groupContainer) {
      groupContainer.classList.toggle('collapsed');
    }
  });
  // ### FIN DE LA CORRECTION ###


  // Génération des cartes d’appréciation
  const appContainer = document.getElementById('appreciations');
  appContainer.innerHTML = '';
  criteres.forEach(c => {
    const card = document.createElement('div');
    card.className = 'app-card';
    card.innerHTML = `<div class="icon"><i class="fas ${c.icon}"></i></div><div class="content"><h3>${c.label}</h3><select id="${c.code}"><option value="">— Sélectionnez —</option>${c.suggestions.map(s => `<option>${s}</option>`).join('')}</select></div>`;
    appContainer.appendChild(card);
  });

  // Logique du bouton "Pour progresser"
  document.getElementById('progresser').addEventListener('click', () => {
    const divImp = document.getElementById('improvements');
    divImp.innerHTML = '<h2>Pour progresser</h2><ul></ul>';
    const ul = divImp.querySelector('ul');
    criteres.forEach(c => {
      const sel = document.getElementById(c.code);
      const idx = sel.selectedIndex - 1;
      if (idx >= 0 && c.improvements.length > 0) {
        const levelCount = c.improvements.length;
        const suggestionCount = c.suggestions.length;
        const niveau = Math.min(levelCount - 1, Math.floor((idx / suggestionCount) * levelCount));
        const li = document.createElement('li');
        li.innerHTML = `<label><input type="checkbox" checked> ${c.improvements[niveau]}</label>`;
        ul.appendChild(li);
      }
    });
    if (!ul.hasChildNodes()) {
      divImp.innerHTML = '<h2>Pour progresser</h2><p>Veuillez sélectionner au moins une appréciation.</p>';
    }
  });

  // Logique de l'export PDF
  document.getElementById('export-pdf').addEventListener('click', () => {
    const selectedIndexes = Array.from(document.querySelectorAll('input[name="eleve"]:checked')).map(cb => cb.value);
    if (selectedIndexes.length === 0) {
      alert("Veuillez sélectionner au moins un élève.");
      return;
    }
    
    let appreciationsHTML = '<ul>';
    let hasAppreciations = false;
    criteres.forEach(c => {
        const select = document.getElementById(c.code);
        if (select.value) {
            hasAppreciations = true;
            appreciationsHTML += `<li><strong>${select.previousElementSibling.textContent}:</strong> ${select.value}</li>`;
        }
    });
    appreciationsHTML += '</ul>';
    if (!hasAppreciations) appreciationsHTML = "<p>Aucune appréciation sélectionnée.</p>";

    let improvementsHTML = '';
    const checkedImprovements = document.querySelectorAll('#improvements input[type="checkbox"]:checked');
    if (checkedImprovements.length > 0) {
        improvementsHTML = '<h2>Pour progresser</h2><ul>';
        checkedImprovements.forEach(checkbox => {
            improvementsHTML += `<li>${checkbox.parentElement.textContent.trim()}</li>`;
        });
        improvementsHTML += '</ul>';
    }

    selectedIndexes.forEach(index => {
      const eleve = eleves[index];
      const pdfContent = `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 800px; margin: auto;">
          <header style="text-align: center; border-bottom: 1px solid #ccc; padding-bottom: 15px;">
            <h1>Appréciations en enseignement professionnel</h1>
            <p style="font-style: italic; color: #555; margin-top: 5px; margin-bottom: 10px;">appréciation relative à l’enseignement professionnel « Étude et économie de la construction », bilan établi à l’issue de chaque période. »</p>
            <p>${new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <h2 style="margin-top: 20px;">Élève : ${eleve.prenom} ${eleve.nom}</h2>
          </header>
          <section style="margin-top: 30px;"><h3 style="margin-bottom: 10px;">Appréciations générales :</h3><div style="line-height:1.6;">${appreciationsHTML}</div></section>
          <section style="margin-top: 30px;">${improvementsHTML}</section>
          <footer style="margin-top: 60px; display: flex; gap: 40px; border-top: 1px solid #ccc; padding-top: 20px; page-break-inside: avoid;">
            <div style="flex: 1;"><label style="font-weight: bold; display: block; margin-bottom: 50px;">Signature des parents</label></div>
            <div style="flex: 1;"><label style="font-weight: bold; display: block; margin-bottom: 50px;">Signature de l’enseignant</label></div>
          </footer>
        </div>`;
      const filename = `Appreciation_${eleve.prenom}_${eleve.nom}.pdf`.replace(/ /g, '_');
      html2pdf().set({ margin: [0.5, 0.4, 0.5, 0.4], filename, jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' } }).from(pdfContent).save();
    });
  });
});