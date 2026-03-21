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

  card.appendChild(badge);
  card.appendChild(title);
  card.appendChild(resources);

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
