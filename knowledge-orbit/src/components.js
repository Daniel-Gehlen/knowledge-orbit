export function createTopicCard(topic) {
  const card = document.createElement('div');
  card.className = 'topic-card';
  card.dataset.topicId = topic.id;

  const badge = document.createElement('span');
  badge.className = 'semester-badge';
  badge.textContent = `${topic.semester}º Semestre`;

  const title = document.createElement('h3');
  title.className = 'topic-title';
  title.textContent = topic.title;

  const resources = document.createElement('p');
  resources.className = 'resource-count';
  resources.textContent = `${topic.resources.length} materiais de estudo`;

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
  card.appendChild(resources);
  card.appendChild(practiceBtn);

  return card;
}

export function createResourceItem(resource, basePath) {
  const link = document.createElement('a');
  link.className = 'resource-item';
  link.href = `/content/${basePath}/${resource.file}`;
  link.target = '_blank';

  const icon = document.createElement('div');
  icon.className = 'resource-icon';
  icon.textContent = resource.type === 'pdf' ? 'PDF' : 'IMG';

  const name = document.createElement('span');
  name.textContent = resource.name;

  link.appendChild(icon);
  link.appendChild(name);

  return link;
}
