alert('ATTENTION : vous entrez dans une zone à risque!')

document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.carte'); // Sélectionne toutes les cartes
    const nextBtn = document.getElementById('btn-avancer');
    const prevBtn = document.getElementById('btn-retourner');
    let currentIndex = 0; // Indice de la carte actuellement affichée

    // Fonction pour afficher la carte suivante
    function showNextCard() {
        cards[currentIndex].classList.remove('selectionne'); // Cache la carte actuelle
        currentIndex = (currentIndex + 1) % cards.length; // Passe à la carte suivante, en bouclant
        cards[currentIndex].classList.add('selectionne'); // Affiche la carte suivante
    }

    // Fonction pour afficher la carte précédente
    function showPreviousCard() {
        cards[currentIndex].classList.remove('selectionne'); // Cache la carte actuelle
        currentIndex = (currentIndex - 1 + cards.length) % cards.length; // Passe à la carte précédente, en bouclant
        cards[currentIndex].classList.add('selectionne'); // Affiche la carte précédente
    }

    // Écouteurs d'événements pour les boutons "Avancer" et "Retourner"
    nextBtn.addEventListener('click', showNextCard);
    prevBtn.addEventListener('click', showPreviousCard);

    // Afficher la première carte au chargement de la page
    cards[currentIndex].classList.add('selectionne');
});