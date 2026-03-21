export function createTopicCard(topic) {
  const card = document.createElement('div');
  card.className = 'topic-card';
  card.dataset.topicId = topic.id;

  const badge = document.createElement('span');
  badge.className = 'semester-badge';
  badge.textContent = topic.module;

  const title = document.createElement('h3');
  title.className = 'topic-title';
  title.textContent = topic.title;

  const subtitle = document.createElement('p');
  subtitle.className = 'topic-subtitle';
  subtitle.textContent = "Conceitos Técnico-Simplificados";
  subtitle.style.fontSize = "0.85rem";
  subtitle.style.color = "var(--text-secondary)";

  const practiceBtn = document.createElement('button');
  practiceBtn.className = 'practice-btn';
  practiceBtn.textContent = 'Praticar';
  practiceBtn.style.cssText = 'margin-top: 1rem; background: var(--accent); border: none; color: white; padding: 0.5rem 1rem; border-radius: 0.5rem; cursor: pointer; width: 100%; font-weight: 600; transition: transform 0.2s;';
  practiceBtn.onclick = (e) => {
    e.stopPropagation();
    window.dispatchEvent(new CustomEvent('open-practice', { detail: topic.id }));
  };

  card.appendChild(badge);
  card.appendChild(title);
  card.appendChild(subtitle);
  card.appendChild(practiceBtn);

  return card;
}
