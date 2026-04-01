export interface Organelle {
  id: string;
  name: string;
  scientificName: string;
  description: string;
  function: string;
  structure: string;
  prompt: string;
}

export const ORGANELLES: Organelle[] = [
  {
    id: 'cell-overview',
    name: 'Célula Animal (Visão Geral)',
    scientificName: 'Eukaryota Animalia',
    description: 'Uma visão panorâmica da célula eucarionte animal com um corte transversal de 90 graus.',
    function: 'Unidade fundamental da vida animal, contendo organelas membranosas e citoesqueleto complexo.',
    structure: 'Corte transversal exibindo citoplasma, núcleo central e organelas periféricas.',
    prompt: 'A high-detail 3D scientific illustration of an animal eukaryotic cell with a 90-degree cutaway revealing the interior. Show the nucleus, mitochondria, endoplasmic reticulum, and golgi apparatus. Black background, cinematic lighting, microscopic style, vibrant biological colors, 4k resolution.'
  },
  {
    id: 'nucleus',
    name: 'Núcleo Celular',
    scientificName: 'Nucleus',
    description: 'O centro de controle da célula, contendo a maior parte do material genético.',
    function: 'Regulação das atividades celulares e armazenamento da informação genética (DNA).',
    structure: 'Envoltório nuclear (carioteca) com poros, nucléolo denso e cromatina.',
    prompt: 'A detailed 3D render of a cell nucleus. Show the double membrane with nuclear pores, the dense nucleolus inside, and chromatin fibers. Black background, glowing DNA elements, scientific visualization, high contrast.'
  },
  {
    id: 'mitochondria',
    name: 'Mitocôndria',
    scientificName: 'Mitochondrion',
    description: 'A "usina de força" da célula.',
    function: 'Respiração celular e produção de ATP (energia).',
    structure: 'Membrana dupla, sendo a interna pregueada formando as cristas mitocondriais.',
    prompt: 'A 3D close-up of a mitochondrion with a section cut to show the internal cristae and matrix. Biological energy factory, glowing ATP particles, black background, high detail, scientific accuracy.'
  },
  {
    id: 'golgi',
    name: 'Complexo de Golgi',
    scientificName: 'Apparatus Golgiensis',
    description: 'Centro de processamento e empacotamento da célula.',
    function: 'Modificação, secreção e distribuição de proteínas e lipídios.',
    structure: 'Conjunto de sáculos achatados (dictiossomos) e vesículas brotando.',
    prompt: '3D model of the Golgi apparatus. Stacked flattened sacs (cisternae) with transport vesicles budding off. Black background, translucent biological textures, scientific illustration.'
  },
  {
    id: 'er-rough',
    name: 'Retículo Endoplasmático Rugoso',
    scientificName: 'Reticulum Endoplasmicum Granulosum',
    description: 'Rede de membranas cravejada de ribossomos.',
    function: 'Síntese de proteínas para exportação ou membranas.',
    structure: 'Cisternas membranosas com ribossomos aderidos à superfície externa.',
    prompt: '3D visualization of Rough Endoplasmic Reticulum. Membranous network covered with tiny granular ribosomes. Black background, high detail, biological rendering.'
  },
  {
    id: 'lysosome',
    name: 'Lisossomo',
    scientificName: 'Lysosoma',
    description: 'Vesículas contendo enzimas digestivas.',
    function: 'Digestão intracelular e reciclagem de componentes celulares (autofagia).',
    structure: 'Vesícula esférica delimitada por membrana simples contendo enzimas hidrolíticas.',
    prompt: '3D render of a lysosome vesicle. Spherical shape, semi-transparent membrane showing internal digestive enzymes. Black background, glowing biological effect.'
  },
  {
    id: 'centrioles',
    name: 'Centríolos',
    scientificName: 'Centriolum',
    description: 'Estruturas cilíndricas envolvidas na divisão celular.',
    function: 'Organização do fuso acromático durante a mitose e formação de cílios/flagelos.',
    structure: 'Pares de cilindros perpendiculares formados por nove trincas de microtúbulos.',
    prompt: '3D model of a pair of centrioles. Two perpendicular cylinders made of microtubule triplets. Geometric biological structure, black background, scientific precision.'
  },
  {
    id: 'peroxisome',
    name: 'Peroxissomo',
    scientificName: 'Peroxisoma',
    description: 'Organelas esféricas envolvidas em reações de oxidação.',
    function: 'Desintoxicação celular e quebra de ácidos graxos, produzindo peróxido de hidrogênio.',
    structure: 'Vesícula com membrana simples, muitas vezes contendo um cristalóide de enzimas (catalase).',
    prompt: '3D render of a peroxisome. Spherical vesicle with a crystalline core of enzymes. Semi-transparent membrane, black background, scientific visualization.'
  },
  {
    id: 'cytoskeleton',
    name: 'Citoesqueleto',
    scientificName: 'Cytosceletus',
    description: 'Rede complexa de filamentos proteicos que atravessa o citoplasma.',
    function: 'Manutenção da forma celular, suporte mecânico e transporte intracelular.',
    structure: 'Composto por microtúbulos, microfilamentos de actina e filamentos intermediários.',
    prompt: '3D visualization of the cellular cytoskeleton. A complex web of glowing protein fibers (microtubules and filaments) inside a cell. Black background, abstract biological structure, high detail.'
  },
  {
    id: 'plasma-membrane',
    name: 'Membrana Plasmática',
    scientificName: 'Membrana Plasmatica',
    description: 'A barreira seletiva que envolve a célula.',
    function: 'Controle da entrada e saída de substâncias, proteção e reconhecimento celular.',
    structure: 'Bicamada fosfolipídica com proteínas integrais e periféricas, colesterol e carboidratos (modelo do mosaico fluido).',
    prompt: 'A 3D cross-section of a cell membrane. Show the phospholipid bilayer with embedded proteins and cholesterol molecules. Fluid mosaic model, glowing biological textures, black background, scientific detail.'
  },
  {
    id: 'er-smooth',
    name: 'Retículo Endoplasmático Liso',
    scientificName: 'Reticulum Endoplasmicum Glabrum',
    description: 'Rede de túbulos membranosos sem ribossomos aderidos.',
    function: 'Síntese de lipídios (como esteroides), metabolismo de carboidratos e desintoxicação.',
    structure: 'Sistema de túbulos ramificados e interconectados, com aparência lisa.',
    prompt: '3D render of Smooth Endoplasmic Reticulum. A network of smooth, branching membranous tubules. Translucent biological texture, black background, high detail, scientific visualization.'
  },
  {
    id: 'ribosomes',
    name: 'Ribossomos',
    scientificName: 'Ribosoma',
    description: 'Pequenas estruturas granulares responsáveis pela síntese proteica.',
    function: 'Tradução do RNA mensageiro em cadeias polipeptídicas (proteínas).',
    structure: 'Composto por duas subunidades (maior e menor) formadas por RNA ribossômico e proteínas.',
    prompt: '3D model of a ribosome showing the large and small subunits joined together. Molecular biology style, glowing protein synthesis visualization, black background, high detail.'
  },
  {
    id: 'nucleolus',
    name: 'Nucléolo',
    scientificName: 'Nucleolus',
    description: 'Região densa e não membranosa dentro do núcleo.',
    function: 'Local de síntese do RNA ribossômico (rRNA) e montagem das subunidades dos ribossomos.',
    structure: 'Aglomerado denso de RNA, proteínas e cromatina organizada em torno dos organizadores nucleolares.',
    prompt: 'A high-detail 3D render of a nucleolus inside a nucleus. Dense, glowing spherical structure with granular and fibrillar components. Black background, cinematic biological lighting.'
  },
  {
    id: 'microvilli',
    name: 'Microvilosidades',
    scientificName: 'Microvillus',
    description: 'Projeções digitiformes da membrana plasmática.',
    function: 'Aumento da área de superfície da célula para otimizar a absorção de nutrientes.',
    structure: 'Extensões citoplasmáticas em forma de dedo, sustentadas internamente por feixes de microfilamentos de actina.',
    prompt: '3D close-up of cell microvilli. Finger-like projections on the cell surface, showing the internal actin filament support. Black background, microscopic biological style, high detail.'
  }
];
