import { topics } from './src/data/topics.js';
import { knowledge } from './src/data/knowledge.js';
import { flashcards } from './src/data/flashcards.js';

console.log('Total de tópicos:', topics.length);
console.log('Total de knowledge:', Object.keys(knowledge).length);
console.log('Total de flashcards:', Object.keys(flashcards).length);

const missingKnowledge = topics.filter(topic => !knowledge[topic.id]);
console.log('\nTópicos sem knowledge:', missingKnowledge.map(t => t.id));

const missingFlashcards = topics.filter(topic => !flashcards[topic.id] || flashcards[topic.id].length === 0);
console.log('\nTópicos sem flashcards:', missingFlashcards.map(t => t.id));

// Verificar estrutura dos flashcards
Object.entries(flashcards).forEach(([topicId, cards]) => {
  if (!Array.isArray(cards)) {
    console.log(`Flashcards para ${topicId} não é um array`);
    return;
  }
  cards.forEach((card, index) => {
    if (!card.q || !card.a) {
      console.log(`Flashcard inválido em ${topicId}[${index}]:`, card);
    }
  });
});
