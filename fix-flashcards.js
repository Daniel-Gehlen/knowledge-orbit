import fs from 'fs';
import path from 'path';

// Lista de arquivos de flashcards
const flashcardFiles = [
  'frameworks.js',
  'governanca-ti.js',
  'programacao-web.js',
  'seguranca-auditoria.js',
  'sistemas-operacionais.js'
];

// Função para corrigir flashcards
function fixFlashcards(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');

    // Substituir question por q e answer por a
    content = content.replace(/question:/g, 'q:');
    content = content.replace(/answer:/g, 'a:');

    fs.writeFileSync(filePath, content);
    console.log(`Corrigido: ${filePath}`);
  } catch (error) {
    console.error(`Erro ao corrigir ${filePath}:`, error.message);
  }
}

// Corrigir todos os arquivos
flashcardFiles.forEach(file => {
  const filePath = path.join('./src/data/flashcards', file);
  fixFlashcards(filePath);
});

console.log('Correção concluída!');
