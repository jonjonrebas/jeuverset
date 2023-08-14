const mixedVersePartsContainer = document.getElementById('mixed-verse-parts');
const userVersePartsContainer = document.getElementById('verse-parts');
const levelElement = document.getElementById('level');
const nextVerseButton = document.getElementById('next-verse');
const resetVerseButton = document.getElementById('reset-verse');
const timerElement = document.getElementById('time');
const levels = [

 
  // Niveau 1
  [
    { parts: ["Car Dieu a tant aimé le monde,", "qu'il a donné son Fils unique,", "afin que quiconque croit en lui ","ne périsse point,","mais qu'il ait la vie éternelle."], reference: "Jean 3:16" },
    { parts: ["Je puis tout par celui", "qui me fortifie."], reference: "Philippiens 4:13" },
    { parts: ["L'Éternel est mon berger:", "je ne manquerai de rien."], reference: "Psaumes 23:1" },
  ],
  // Niveau 2
  [
    { parts: ["La crainte de l'Éternel", "est le commencement", "de la sagesse."], reference: "Proverbes 9:10" },
    { parts: ["Car mes pensées ne sont pas", "vos pensées,", "Et vos voies ne sont pas", "mes voies, dit l'Éternel."], reference: "Ésaïe 55:8" },
    { parts: ["L'herbe sèche,", "la fleur tombe,", "Mais la parole", "de notre Dieu subsiste éternellement."], reference: "Ésaïe 40:8" },
  ],
  // Niveau 3
  [
    { parts: ["Ainsi, en toutes choses,", "faites aux autres", "ce que vous voudriez", "qu'ils vous fassent,"], reference: "Matthieu 7:12" },
    { parts: ["Car c'est par la grâce", "que vous êtes sauvés,", "par le moyen de la foi.", "Et cela ne vient pas de vous,", "c'est le don de Dieu."], reference: "Éphésiens 2:8" },
    { parts: ["Ne crains rien, car je suis avec toi;", "Ne promène pas des regards inquiets,", "car je suis ton Dieu;", "Je te fortifie, je viens à ton secours,"], reference: "Ésaïe 41:10" },
  ],
  // Niveau 4
[
    { parts: ["Faites toutes choses", "sans murmures", "ni hésitations,"], reference: "Philippiens 2:14" },
    { parts: ["Mais recherchez premièrement", "le royaume et", "la justice de Dieu;", "et toutes ces choses", "vous seront données par-dessus."], reference: "Matthieu 6:33" },
    { parts: ["C'est pourquoi,", "quiconque se rendra humble", "comme ce petit enfant", "sera le plus grand", "dans le royaume des cieux."], reference: "Matthieu 18:4" },
  ],
  
  // Niveau 5
  [
    { parts: ["Si quelqu'un est en Christ,", "il est une nouvelle créature.", "Les choses anciennes", "sont passées;", "voici,", "toutes choses", "sont devenues nouvelles."], reference: "2 Corinthiens 5:17" },
    { parts: ["Mais à tous ceux qui l'ont reçue,", "à ceux qui croient", "en son nom,", "elle a donné", "le pouvoir", "de devenir enfants de Dieu,"], reference: "Jean 1:12" },
    { parts: ["L'Éternel est mon rocher,", "ma forteresse,", "mon libérateur.", "Mon Dieu,", "mon rocher,", "où je trouve un abri.", "Mon bouclier,", "la force qui me sauve,", "ma haute retraite!"], reference: "Psaumes 18:2" },
  ],
  
  // Niveau 6
  [
    { parts: ["Car j'ai l'assurance que ni la mort,", "ni la vie,", "ni les anges,", "ni les dominations,", "ni les choses présentes,", "ni les choses à venir,", "ni les puissances,"], reference: "Romains 8:38" },
    { parts: ["Jésus lui dit:", "Je suis le chemin,", "la vérité,", "et la vie.", "Nul ne vient au Père", "que par moi."], reference: "Jean 14:6" },
    { parts: ["Que la grâce du Seigneur Jésus-Christ,", "l'amour de Dieu,", "et la communion du Saint-Esprit", "soient avec vous tous!"], reference: "2 Corinthiens 13:13" },
  ],
  // Niveau 7
    [
    { parts: ["Ne vous conformez pas", "au siècle présent,", "mais soyez transformés", "par le renouvellement", "de l'intelligence,"], reference: "Romains 12:2" },
    { parts: ["Je t'exhorte donc,", "moi, le prisonnier", "dans le Seigneur,", "à marcher d'une manière digne", "de la vocation qui vous a été adressée,"], reference: "Éphésiens 4:1" },
    { parts: ["Si nous confessons nos péchés,", "il est fidèle et juste", "pour nous les pardonner,", "et pour nous purifier", "de toute iniquité."], reference: "1 Jean 1:9" },
    ],  

  // Niveau 8
  [
    { parts: ["L'Éternel ouvrira", "pour toi son bon", "trésor,", "le ciel,", "pour envoyer", "à ton pays la pluie en son temps"], reference: "Deutéronome 28:12" },
    { parts: ["Tout ce que vous demanderez", "avec foi par la prière,", "vous le recevrez."], reference: "Matthieu 21:22" },
    { parts: ["Car je connais", "les projets que j'ai", "formés sur vous,", "dit l'Éternel,", "projets de paix et non", "de malheur,", "afin de vous donner", "un avenir et de l'espérance."], reference: "Jérémie 29:11" },
  ],
  // Niveau 9
  [
    { parts: ["Approchons-nous donc", "avec assurance", "du trône de la grâce,", "afin d'obtenir miséricorde", "et de trouver grâce,", "pour être secourus", "dans nos besoins."], reference: "Hébreux 4:16" },
    { parts: ["Or, sans la foi,", "il est impossible", "de lui être agréable;", "car il faut que celui", "qui s'approche de Dieu", "croie que Dieu existe,", "et qu'il est le rémunérateur", "de ceux qui le cherchent."], reference: "Hébreux 11:6" },
    { parts: ["Mais toi, quand tu pries,", "entre dans ta chambre,", "ferme ta porte,", "et prie ton Père", "qui est là dans le lieu secret;", "et ton Père,", "qui voit dans le secret,", "te le rendra."], reference: "Matthieu 6:6" },
  ],
  // Niveau 10
  [
    { parts: ["Car il est écrit:", "Je suis vivant,", "dit le Seigneur,", "tout genou fléchira devant moi,", "et toute langue donnera louange à Dieu."], reference: "Romains 14:11" },
    { parts: ["Ainsi donc,", "comme vous avez reçu", "le Seigneur Jésus-Christ,", "marchez en lui,"], reference: "Colossiens 2:6" },
    { parts: ["Si quelqu'un d'entre vous", "manque de sagesse,", "qu'il la demande à Dieu,", "qui donne à tous", "simplement et sans reproche,", "et elle lui sera donnée."], reference: "Jacques 1:5" },
  ],
  // Niveau 11
  [
    { parts: ["Mets en l'Éternel", "ta confiance,", "et il te soutiendra;", "Il s'occupera de toi,", "et tu auras la paix."], reference: "Psaumes 55:23" },
    { parts: ["Car, si vous pardonnez aux hommes", "leurs offenses,", "votre Père céleste vous pardonnera aussi;"], reference: "Matthieu 6:14" },
    { parts: ["L'Éternel combattra", "pour vous;", "et vous,", "vous garderez le silence."], reference: "Exode 14:14" },
  ],
  // Niveau 12
  [
    { parts: ["Le secours est dans", "le nom de l'Éternel,", "Qui a fait", "les cieux et la terre."], reference: "Psaumes 124:8" },
    { parts: ["L'Éternel est mon aide,", "Je ne craindrai rien;", "Que peut me faire", "un homme?"], reference: "Psaumes 118:6" },
    { parts: ["Car là où", "est ton trésor,", "là aussi sera", "ton cœur."], reference: "Matthieu 6:21" },
  ],
  // Niveau 13
  [
    { parts: ["Quand je marche", "dans la vallée", "de l'ombre de la mort,", "Je ne crains aucun mal,", "car tu es avec moi:", "Ta houlette et ton bâton", "me rassurent."], reference: "Psaumes 23:4" },
    { parts: ["Car les gages du péché,", "c'est la mort;", "mais le don gratuit", "de Dieu,", "c'est la vie éternelle", "en Jésus-Christ", "notre Seigneur."], reference: "Romains 6:23" },
    { parts: ["Nul n'a de plus grand amour", "que celui qui donne", "sa vie pour ses amis."], reference: "Jean 15:13" },
  ],
  // Niveau 14
  [
    { parts: ["Heureux ceux qui sont purs", "de cœur,", "car ils verront Dieu."], reference: "Matthieu 5:8" },
    { parts: ["C'est pourquoi je vous le dis:", "Tout ce que vous demanderez", "en priant,", "croyez que vous", "l'avez reçu,", "et vous le verrez s'accomplir."], reference: "Marc 11:24" },
    { parts: ["Tout m'est permis,", "mais tout", "n'est pas utile;", "tout m'est permis,", "mais je ne me", "laisserai asservir", "par quoi que ce soit."], reference: "1 Corinthiens 6:12" },
  ],
  // Niveau 15
  [
    { parts: ["Voici, je me tiens", "à la porte,", "et je frappe.", "Si quelqu'un entend ma voix", "et ouvre la porte,", "j'entrerai chez lui,", "je souperai avec lui,", "et lui avec moi."], reference: "Apocalypse 3:20" },
    { parts: ["Nous sommes donc ambassadeurs", "pour Christ,", "Dieu exhortant par nous;", "nous vous en supplions", "pour Christ:", "Soyez réconciliés", "avec Dieu!"], reference: "2 Corinthiens 5:20" },
    { parts: ["Je peux tout", "par celui qui me fortifie."], reference: "Philippiens 4:13" },
  ],
  // Niveau 16
  [
    { parts: ["Le fruit de l'Esprit,", "c'est l'amour,", "la joie,", "la paix,", "la patience,", "la bonté,", "la bienveillance,", "la foi,", "la douceur,", "la maîtrise de soi."], reference: "Galates 5:22-23" },
    { parts: ["Je vous laisse la paix,", "je vous donne", "ma paix.", "Je ne vous donne pas", "comme le monde", "donne.", "Que votre cœur", "ne se trouble", "point,", "et ne s'alarme point."], reference: "Jean 14:27" },
    { parts: ["Car Dieu ne nous a pas", "donné un esprit", "de timidité,", "mais de force,", "d'amour", "et de sagesse."], reference: "2 Timothée 1:7" },
  ]
];

let currentLevel = 0;
let currentVerseIndex = 0;
let score = 0; // Variable pour suivre le score
let startTime; // Variable pour suivre le temps de début


function resetVerse() {
    currentVerseIndex = 0; // Réinitialiser l'index du verset
    displayVerse(); // Afficher à nouveau le verset actuel
  }
  
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Échange les éléments
    }
    return array;
  }
  function displayVerse() {
    mixedVersePartsContainer.innerHTML = '';
    userVersePartsContainer.innerHTML = '';
    const verse = levels[currentLevel][currentVerseIndex];
    startTime = new Date(); // Marquer le temps de début
    if (verse) {
      mixedVersePartsContainer.innerHTML = '';
      userVersePartsContainer.innerHTML = ''; // Réinitialiser le conteneur de l'utilisateur
  
      // Ajouter la référence
      const referenceElement = document.createElement('div');
      referenceElement.textContent = verse.reference;
      referenceElement.className = 'verse-reference'; // Ajouter une classe pour le style
      mixedVersePartsContainer.appendChild(referenceElement);
  
      // Mélanger les parties du verset
      const shuffledParts = shuffle([...verse.parts]);
      shuffledParts.forEach((part, index) => {
        const partElement = document.createElement('div');
        partElement.className = 'verse-part';
        partElement.textContent = part;
        partElement.draggable = true;
        partElement.dataset.originalIndex = verse.parts.indexOf(part);
        mixedVersePartsContainer.appendChild(partElement);
  
        partElement.addEventListener('dragstart', (event) => {
          const index = Array.from(mixedVersePartsContainer.children).indexOf(event.target);
          event.dataTransfer.setData('text/plain', index);
          const clone = event.target.cloneNode(true); // Cloner l'élément
          userVersePartsContainer.appendChild(clone); // Ajouter le clone à userVersePartsContainer
          mixedVersePartsContainer.removeChild(event.target); // Supprimer l'original immédiatement
        });
  
        // Ajout des événements tactiles pour le mobile
        partElement.addEventListener('touchstart', (event) => {
          const index = Array.from(mixedVersePartsContainer.children).indexOf(event.target);
          const clone = event.target.cloneNode(true); // Cloner l'élément
          userVersePartsContainer.appendChild(clone); // Ajouter le clone à userVersePartsContainer
          mixedVersePartsContainer.removeChild(event.target); // Supprimer l'original immédiatement
        });
      });
  
        resetVerseButton.addEventListener('click', resetVerse);
        // Ajout de la fonctionnalité pour réorganiser dans le conteneur "mixedVersePartsContainer"
        
        mixedVersePartsContainer.addEventListener('dragover', (event) => {
            event.preventDefault();
        });

        userVersePartsContainer.addEventListener('dragover', (event) => {
            event.preventDefault();
        });

        userVersePartsContainer.addEventListener('drop', (event) => {
            event.preventDefault();
            const draggedIndex = event.dataTransfer.getData('text/plain');
            const draggedElement = userVersePartsContainer.lastChild; // Utiliser le dernier enfant (le clone)
            userVersePartsContainer.insertBefore(draggedElement, event.target.closest('.verse-part'));
        });

        // Ajout de la fonctionnalité pour réorganiser dans le conteneur "userVersePartsContainer"
        userVersePartsContainer.addEventListener('dragstart', (event) => {
            const index = Array.from(userVersePartsContainer.children).indexOf(event.target);
            event.dataTransfer.setData('text/plain', index);
        });

        userVersePartsContainer.addEventListener('drop', (event) => {
            event.preventDefault();
            const draggedIndex = event.dataTransfer.getData('text/plain');
            const draggedElement = userVersePartsContainer.children[draggedIndex];
            userVersePartsContainer.insertBefore(draggedElement, event.target.closest('.verse-part'));
        });
    }

    levelElement.textContent = "Niveau " + (currentLevel + 1);
    if (!verse) {
        currentLevel += 1;
        currentVerseIndex = 0;
        if (levels[currentLevel]) {
            displayVerse();
        } else {
            alert('Bravo ! Vous avez terminé le jeu.');
        }
    }
}
let currentTouchElement = null;
let currentTouchStartY = 0;

userVersePartsContainer.addEventListener('touchstart', (event) => {
  currentTouchElement = event.target;
  currentTouchStartY = event.touches[0].clientY;
});

userVersePartsContainer.addEventListener('touchmove', (event) => {
  if (currentTouchElement) {
    event.preventDefault();
    const touchY = event.touches[0].clientY;
    const movementY = touchY - currentTouchStartY;
    currentTouchElement.style.transform = `translateY(${movementY}px)`;
  }
});

userVersePartsContainer.addEventListener('touchend', (event) => {
  if (currentTouchElement) {
    const touchY = event.changedTouches[0].clientY;
    const targetElement = document.elementFromPoint(event.changedTouches[0].clientX, touchY);
    const targetIndex = Array.from(userVersePartsContainer.children).indexOf(targetElement.closest('.verse-part'));

    currentTouchElement.style.transform = ''; // Réinitialiser la transformation
    userVersePartsContainer.insertBefore(currentTouchElement, userVersePartsContainer.children[targetIndex]);
    currentTouchElement = null;
    currentTouchStartY = 0;
  }
});

nextVerseButton.addEventListener('click', () => {
    const userParts = Array.from(userVersePartsContainer.querySelectorAll('.verse-part')); // Utiliser userVersePartsContainer
    const isCorrect = userParts.every((partElement, index) => partElement.dataset.originalIndex == index);

    if (isCorrect) {
        const endTime = new Date();
        const timeTaken = (endTime - startTime) / 1000; // Calculer le temps en secondes
        const points = Math.max(10 - timeTaken, 1); // Attribuer des points (vous pouvez ajuster la formule)
        score += points;
        document.getElementById('score-value').textContent = score.toFixed(0); // Mettre à jour l'affichage du score

        currentVerseIndex += 1;
        displayVerse();
    } else {
        alert('Veuillez essayer à nouveau.');
    }
});

// Gérer le chronomètre
let timeRemaining = 120; // en secondes
const timerInterval = setInterval(() => {
    timeRemaining -= 1;
    timerElement.textContent = timeRemaining;
    if (timeRemaining <= 0) {
        clearInterval(timerInterval);
        alert('Le temps est écoulé !');
    }
}, 1000);





// Afficher le premier verset
displayVerse();
resetVerseButton.addEventListener('click', resetVerse);
