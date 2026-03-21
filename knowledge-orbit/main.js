import './style.css'
import { topics } from './src/data/topics.js'
import { createTopicCard, createResourceItem } from './src/components.js'

const app = document.querySelector('#app')

// Create Header
const header = document.createElement('header')
header.className = 'title-section'
header.innerHTML = `
  <h1>KnowledgeOrbit</h1>
  <p class="subtitle">ADS Study Portal - Pratique seu conhecimento</p>
`
app.appendChild(header)

// Create Grid
const grid = document.createElement('div')
grid.className = 'topics-grid'
app.appendChild(grid)

// Create Sidebar/Detail View
const detailView = document.createElement('div')
detailView.className = 'detail-view'
document.body.appendChild(detailView)

// Render Topics
topics.forEach(topic => {
  const card = createTopicCard(topic)
  
  card.addEventListener('click', () => {
    showTopicDetail(topic)
  })
  
  grid.appendChild(card)
})

function showTopicDetail(topic) {
  detailView.innerHTML = `
    <button class="close-btn" style="background: none; border: 1px solid var(--glass-border); color: white; cursor: pointer; padding: 0.5rem 1rem; border-radius: 0.5rem; margin-bottom: 2rem;">Fechar</button>
    <h2 style="margin-bottom: 1rem;">${topic.title}</h2>
    <p style="color: var(--text-secondary); margin-bottom: 2rem;">Recursos disponíveis:</p>
    <div class="resource-list"></div>
  `
  
  const list = detailView.querySelector('.resource-list')
  
  if (topic.resources.length === 0) {
    list.innerHTML = `<p style="font-style: italic; color: var(--text-secondary);">Nenhum material anexado ainda.</p>`
  } else {
    topic.resources.forEach(res => {
      const item = createResourceItem(res, topic.path)
      list.appendChild(item)
    })
  }

  detailView.classList.add('active')
  
  detailView.querySelector('.close-btn').onclick = () => {
    detailView.classList.remove('active')
  }
}
