export interface AttrakdiffData {
  wordPairs: Criteria[];
}

export interface Criteria {
  negativeWord: string;
  positiveWord: string;
  value?: number;
  first: string;
}

export function getAttrakdiffData(): AttrakdiffData {
  const wordPairs = [
    { first: '+', negativeWord: 'técnico', positiveWord: 'humana'},
    { first: '+', negativeWord: 'desgradável', positiveWord: 'agradável'},
    { first: '+', negativeWord: 'complicado', positiveWord: 'simples'},
    { first: '+', negativeWord: 'antiprofissional', positiveWord: 'profissional'},
    { first: '-', negativeWord: 'feia', positiveWord: 'atraente'},
    { first: '+', negativeWord: 'impraticável', positiveWord: 'prática'},
    { first: '+', negativeWord: 'brega', positiveWord: 'estilosa'},
    { first: '+', negativeWord: 'imprevisível', positiveWord: 'previsível'},
    { first: '-', negativeWord: 'alienante', positiveWord: 'integrador'},
    { first: '+', negativeWord: 'afasta as pessoas', positiveWord: 'aproxima as pessoas'},
    { first: '+', negativeWord: 'inapresentável', positiveWord: 'apresentável'},
    { first: '-', negativeWord: 'desinteressante', positiveWord: 'convidativo'},
    { first: '-', negativeWord: 'sem imaginação', positiveWord: 'criativa'},
    { first: '+', negativeWord: 'ruim', positiveWord: 'boa'},
    { first: '-', negativeWord: 'confuso', positiveWord: 'claramente estruturado'},
    { first: '+', negativeWord: 'conservadora', positiveWord: 'inovadora'},
    { first: '-', negativeWord: 'tediosa', positiveWord: 'cativante'},
    { first: '-', negativeWord: 'pouco exigente', positiveWord: 'desafiadora'},
    { first: '+', negativeWord: 'desencorajadora', positiveWord: 'motivadora'},
    { first: '+', negativeWord: 'comum', positiveWord: 'nova'},
  ];
  return {
    wordPairs
  };
}
