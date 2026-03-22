import './style.css'
import { topics } from './src/data/topics.js'
import { knowledge } from './src/data/knowledge.js'
import { flashcards } from './src/data/flashcards.js'
import { createTopicCard } from './src/components.js'
import { logger } from './src/utils/logger.js'

// Global Error Handling
window.onerror = (message, source, lineno, colno, error) => {
  logger.error('Global Error Captured:', { message, source, lineno, colno, error });
  return false;
};

window.onunhandledrejection = (event) => {
  logger.error('Unhandled Promise Rejection:', event.reason);
};

logger.info('KnowledgeOrbit initialized');

const app = document.querySelector('#app')

// Create Header
const header = document.createElement('header')
header.className = 'title-section'
header.innerHTML = `
  <h1>KnowledgeOrbit</h1>
  <p class="subtitle">ADS Knowledge Portal - Simples e Técnico</p>
`
app.appendChild(header)

// Create Grid
const grid = document.createElement('div')
grid.className = 'topics-grid'
app.appendChild(grid)

// Create Modal (Shared for Knowledge and Flashcards)
const modal = document.createElement('div')
modal.className = 'detail-view'
document.body.appendChild(modal)

// Render Topics
topics.forEach(topic => {
  const card = createTopicCard(topic)
  
  card.addEventListener('click', () => {
    showTopicDetail(topic)
  })
  
  grid.appendChild(card)
})

function showTopicDetail(topic) {
  const content = knowledge[topic.id] || { summary: "Resumo em desenvolvimento.", concepts: [] };
  
  modal.innerHTML = `
    <button class="close-btn" style="background: none; border: 1px solid var(--glass-border); color: white; cursor: pointer; padding: 0.5rem 1rem; border-radius: 0.5rem; margin-bottom: 2rem;">Fechar</button>
    <h2 style="margin-bottom: 1.5rem;">${topic.title}</h2>
    
    <div class="knowledge-section">
      <h3 style="color: var(--accent); margin-bottom: 0.5rem; font-size: 1.1rem;">Resumo de Conhecimento</h3>
      <p style="background: var(--glass-bg); padding: 1.25rem; border-radius: 1rem; line-height: 1.6; border-left: 4px solid var(--accent); font-size: 1.05rem;">${content.summary}</p>
      
      <h3 style="color: var(--accent); margin-top: 2rem; margin-bottom: 1rem; font-size: 1.1rem;">Conceitos Chave</h3>
      <div class="concepts-list">
        ${content.concepts.length > 0 ? content.concepts.map(c => `
          <div style="margin-bottom: 1rem; padding: 1rem; border: 1px solid var(--glass-border); border-radius: 0.75rem; background: rgba(255,255,255,0.02);">
            <strong style="display: block; color: var(--text-primary); margin-bottom: 0.25rem;">${c.term}</strong>
            <span style="color: var(--text-secondary); font-size: 0.95rem;">${c.definition}</span>
          </div>
        `).join('') : '<p style="font-style: italic; color: var(--text-secondary);">Conceitos sendo catalogados...</p>'}
      </div>
    </div>
  `

  modal.classList.add('active')
  modal.querySelector('.close-btn').onclick = () => modal.classList.remove('active');
}

// Flashcard Modal Logic
window.addEventListener('open-practice', (e) => {
  const topicId = e.detail;
  const cards = flashcards[topicId] || [];
  
  if (cards.length === 0) {
    alert('Modo prática não disponível para este tópico ainda.');
    return;
  }

  let index = 0;
  
  const renderPracticeCard = () => {
    modal.innerHTML = `
      <button class="close-btn" style="background: none; border: 1px solid var(--glass-border); color: white; cursor: pointer; padding: 0.5rem 1rem; border-radius: 0.5rem; margin-bottom: 2rem;">Sair</button>
      <h2 style="margin-bottom: 2rem;">Praticar: ${topics.find(t => t.id === topicId).title}</h2>
      
      <div id="flashcard" style="background: var(--bg-secondary); border: 2px solid var(--accent); padding: 3rem; border-radius: 1rem; text-align: center; cursor: pointer; min-height: 200px; display: flex; align-items: center; justify-content: center; font-size: 1.25rem; transition: transform 0.3s;">
        <p id="card-text">${cards[index].q}</p>
      </div>
      
      <div style="margin-top: 2rem; display: flex; justify-content: space-between;">
        <button id="prev-btn" style="background: var(--glass-bg); border: 1px solid var(--glass-border); color: white; padding: 0.5rem 1rem; border-radius: 0.5rem; cursor: pointer;">Anterior</button>
        <button id="next-btn" style="background: var(--accent); border: none; color: white; padding: 0.5rem 1rem; border-radius: 0.5rem; cursor: pointer;">Próximo</button>
      </div>
      <p style="margin-top: 1rem; text-align: center; color: var(--text-secondary);">${index + 1} / ${cards.length}</p>
    `
    
    const cardEl = modal.querySelector('#flashcard')
    const textEl = modal.querySelector('#card-text')
    let showingAnswer = false;

    cardEl.onclick = () => {
      showingAnswer = !showingAnswer;
      textEl.textContent = showingAnswer ? cards[index].a : cards[index].q;
      textEl.style.color = showingAnswer ? 'var(--accent)' : 'white';
      cardEl.style.transform = 'scale(1.02)';
      setTimeout(() => cardEl.style.transform = 'scale(1)', 200);
    }

    modal.querySelector('#next-btn').onclick = () => {
      index = (index + 1) % cards.length;
      renderPracticeCard();
    }
    
    modal.querySelector('#prev-btn').onclick = () => {
      index = (index - 1 + cards.length) % cards.length;
      renderPracticeCard();
    }
    
    modal.querySelector('.close-btn').onclick = () => modal.classList.remove('active');
  }

  renderPracticeCard();
  modal.classList.add('active')
});
