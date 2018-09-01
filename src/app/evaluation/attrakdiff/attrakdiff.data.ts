export interface AttrakdiffData {
  wordPairs: Criteria[];
}

export interface Criteria {
  word1: string;
  word2: string;
  value?: number;
}

export function getAttrakdiffData(): AttrakdiffData {
  const wordPairs = [
    { word1: 'técnico', word2: 'humana'},
    { word1: 'complicado', word2: 'simples'},
    { word1: 'impraticável', word2: 'prática'},
    { word1: 'imprevisível', word2: 'previsível'},
    { word1: 'confuso', word2: 'claramente estruturado'},
    { word1: 'afasta as pessoas', word2: 'aproxima as pessoas'},
    { word1: 'antiprofissional', word2: 'profissional'},
    { word1: 'brega', word2: 'estilosa'},
    { word1: 'alienante', word2: 'integrador'},
    { word1: 'inapresentável', word2: 'apresentável'},
    { word1: 'conservadora', word2: 'inovadora'},
    { word1: 'sem imaginação', word2: 'criativa'},
    { word1: 'tediosa', word2: 'cativante'},
    { word1: 'pouco exigente', word2: 'desafiadora'},
    { word1: 'comum', word2: 'nova'},
    { word1: 'desgradável', word2: 'agradável'},
    { word1: 'feia', word2: 'atraente'},
    { word1: 'ruim', word2: 'boa'},
    { word1: 'desinteressante', word2: 'convidativo'},
    { word1: 'desencorajadora', word2: 'motivadora'},
  ];
  return {
    wordPairs
  };
}
