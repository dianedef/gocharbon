import { quizData } from './quizData.js';

export const quizQuickData = {
  questions: [
    {
      id: 1,
      text: "Tu veux surtout quoi dans les 6 prochains mois ?",
      options: [
        { text: "Générer du cash rapidement", icon: "💸", points: { service: 3, livecommerce: 2, ecommerce: 1 }, prefill: { questionId: 9, optionIndex: 0 } },
        { text: "Construire un actif long terme", icon: "🏗️", points: { saas: 3, content: 1 }, prefill: { questionId: 9, optionIndex: 1 } },
        { text: "Monétiser mon expertise", icon: "🧠", points: { formation: 3, service: 2 }, prefill: { questionId: 9, optionIndex: 2 } },
        { text: "Créer une audience", icon: "📣", points: { content: 3, livecommerce: 1, formation: 1 }, prefill: { questionId: 9, optionIndex: 3 } },
      ],
    },
    {
      id: 2,
      text: "As-tu une passion ou un talent clair à monétiser ?",
      options: [
        { text: "Oui, créatif (musique, vidéo, écriture, design)", icon: "🎨", points: { content: 3, livecommerce: 1, formation: 1 }, prefill: { questionId: 16, optionIndex: 1 } },
        { text: "Oui, expertise métier/terrain", icon: "💼", points: { service: 3, formation: 2 }, prefill: { questionId: 17, optionIndex: 0 } },
        { text: "Oui, profil technique", icon: "💻", points: { saas: 3, service: 1 }, prefill: { questionId: 16, optionIndex: 2 } },
        { text: "Pas encore", icon: "🌱", points: { content: 2, livecommerce: 1, ecommerce: 1, service: 1 }, prefill: { questionId: 17, optionIndex: 3 } },
      ],
    },
    {
      id: 3,
      text: "Combien de temps as-tu par semaine ?",
      options: [
        { text: "5 à 8h", icon: "⏱️", points: { content: 2, formation: 1, service: 1 }, prefill: { questionId: 4, optionIndex: 0 } },
        { text: "10 à 15h", icon: "📅", points: { service: 2, content: 2, livecommerce: 1 }, prefill: { questionId: 4, optionIndex: 1 } },
        { text: "20 à 30h", icon: "🚀", points: { ecommerce: 2, service: 2, livecommerce: 1, saas: 1 }, prefill: { questionId: 4, optionIndex: 2 } },
        { text: "Temps plein", icon: "🔥", points: { saas: 3, ecommerce: 2 }, prefill: { questionId: 4, optionIndex: 3 } },
      ],
    },
    {
      id: 4,
      text: "Quel budget de départ peux-tu investir ?",
      options: [
        { text: "0 à 100€", icon: "🪙", points: { service: 2, content: 2, livecommerce: 2, formation: 1 }, prefill: { questionId: 3, optionIndex: 0 } },
        { text: "100 à 500€", icon: "💶", points: { service: 2, formation: 2, livecommerce: 1, ecommerce: 1 }, prefill: { questionId: 3, optionIndex: 1 } },
        { text: "500 à 2 000€", icon: "📈", points: { ecommerce: 3, saas: 1 }, prefill: { questionId: 3, optionIndex: 2 } },
        { text: "2 000€+", icon: "🏦", points: { saas: 2, ecommerce: 2 }, prefill: { questionId: 3, optionIndex: 3 } },
      ],
    },
    {
      id: 5,
      text: "Tu préfères quel mode de travail ?",
      options: [
        { text: "Clients en direct", icon: "🤝", points: { service: 3, livecommerce: 2, formation: 1 }, prefill: { questionId: 7, optionIndex: 1 } },
        { text: "Produit à scaler", icon: "🧱", points: { saas: 3, ecommerce: 2 }, prefill: { questionId: 7, optionIndex: 2 } },
        { text: "Audience + contenu", icon: "📱", points: { content: 3, livecommerce: 1, formation: 2 }, prefill: { questionId: 7, optionIndex: 3 } },
        { text: "Mix flexible", icon: "🧩", points: { service: 1, content: 1, ecommerce: 1, formation: 1, saas: 1 }, prefill: { questionId: 7, optionIndex: 0 } },
      ],
    },
    {
      id: 6,
      text: "Ton rapport au risque est plutôt...",
      options: [
        { text: "Prudent", icon: "🛡️", points: { service: 2, formation: 2 }, prefill: { questionId: 6, optionIndex: 0 } },
        { text: "Équilibré", icon: "⚖️", points: { ecommerce: 2, content: 2, livecommerce: 1, service: 1 }, prefill: { questionId: 6, optionIndex: 1 } },
        { text: "Offensif", icon: "⚡", points: { saas: 2, ecommerce: 2 }, prefill: { questionId: 6, optionIndex: 2 } },
        { text: "Agressif si gros potentiel", icon: "🎯", points: { saas: 3, ecommerce: 1 }, prefill: { questionId: 6, optionIndex: 3 } },
      ],
    },
    {
      id: 7,
      text: "Ton niveau de confort technique ?",
      options: [
        { text: "Faible", icon: "🙂", points: { service: 2, livecommerce: 2, formation: 2, content: 1 }, prefill: { questionId: 11, optionIndex: 0 } },
        { text: "No-code ok", icon: "🧰", points: { ecommerce: 2, content: 2, livecommerce: 1, service: 1 }, prefill: { questionId: 11, optionIndex: 1 } },
        { text: "Bon", icon: "🖥️", points: { saas: 3, service: 1 }, prefill: { questionId: 11, optionIndex: 2 } },
        { text: "Très élevé", icon: "🧬", points: { saas: 3, ecommerce: 1 }, prefill: { questionId: 11, optionIndex: 3 } },
      ],
    },
    {
      id: 8,
      text: "Quel type de revenu te motive le plus ?",
      options: [
        { text: "Prestations / missions", icon: "🧾", points: { service: 3, formation: 1 }, prefill: { questionId: 10, optionIndex: 0 } },
        { text: "Abonnements récurrents", icon: "🔁", points: { saas: 3, content: 1 }, prefill: { questionId: 10, optionIndex: 1 } },
        { text: "Ventes produits", icon: "🛒", points: { ecommerce: 3, livecommerce: 2, formation: 1 }, prefill: { questionId: 10, optionIndex: 2 } },
        { text: "Mix de revenus", icon: "🧩", points: { content: 2, formation: 2, livecommerce: 1, ecommerce: 1 }, prefill: { questionId: 10, optionIndex: 3 } },
      ],
    },
  ],
  results: quizData.results,
};
