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
    description: 'Uma visión panorâmica da célula eucarionte animal com um corte transversal de 90 graus.',
    function: 'Unidade fundamental da vida animal, contendo organelas membronas e citoesqueleto complexo.',
    structure: 'Corte transversal exibindo citoplasma, núcleo central e organelas periféricas.',
    prompt: 'A high-detail 3D scientific visualization of an animal eukaryotic cell with a 90-degree cutaway, floating in 3D space. Perspective view from a 45-degree angle revealing the internal organization of all organelles. The cell is glowing with vibrant biological colors against a pure black background. Cinematic lighting, microscopic detail, 4k resolution.'
  },
  {
    id: 'nucleus',
    name: 'Núcleo Celular',
    scientificName: 'Nucleus',
    description: 'O centro de controle da célula, contendo a maior parte do material genético.',
    function: 'Regulação das atividades celulares e armazenamento da informação genética (DNA).',
    structure: 'Envoltório nuclear (carioteca) com poros, nucléolo denso e cromatina.',
    prompt: 'A detailed 3D render of the cell nucleus floating in 3D space. Perspective view from a 45-degree angle with a partial cutaway to reveal the internal nucleolus and dense chromatin fibers. Show the double membrane with clearly visible nuclear pores. Consistent holographic style, black background.'
  },
  {
    id: 'mitochondria',
    name: 'Mitocôndria',
    scientificName: 'Mitochondrion',
    description: 'A "usina de força" da célula.',
    function: 'Respiração celular e produção de ATP (energia).',
    structure: 'Membrana dupla, sendo a interna pregueada formando as cristas mitocondriais.',
    prompt: 'A high-detail 3D visualization of a mitochondrion floating in 3D space. Perspective view from a 45-degree angle with a longitudinal cutaway showing the intricate folding of the inner membrane (cristae). Glowing ATP particles flowing out from the internal space. Consistent holographic style, black background.'
  },
  {
    id: 'golgi',
    name: 'Complexo de Golgi',
    scientificName: 'Apparatus Golgiensis',
    description: 'Centro de processamento e empacotamento da célula.',
    function: 'Modificação, secreção e distribuição de proteínas e lipídios.',
    structure: 'Conjunto de sáculos achatados (dictiossomos) e vesículas brotando.',
    prompt: 'A 3D model of the Golgi apparatus floating in 3D space. Perspective view from a 45-degree angle with a cross-section showing the internal lumen of the stacked flattened sacs (cisternae). Transport vesicles actively budding off. Translucent biological textures, consistent holographic style, black background.'
  },
  {
    id: 'er-rough',
    name: 'Retículo Endoplasmático Rugoso',
    scientificName: 'Reticulum Endoplasmicum Granulosum',
    description: 'Rede de membranas cravejada de ribossomos.',
    function: 'Síntese de proteínas para exportação ou membranas.',
    structure: 'Cisternas membranosas com ribossomos aderidos à superfície externa.',
    prompt: 'A detailed 3D visualization of the Rough Endoplasmic Reticulum floating in 3D space. Perspective view from a 45-degree angle with a cutaway showing the internal space (lumen) and the attachment of ribosomes to the outer surface. Protein chains emerging from the ribosomes. Consistent holographic style, black background.'
  },
  {
    id: 'lysosome',
    name: 'Lisossomo',
    scientificName: 'Lysosoma',
    description: 'Vesículas contendo enzimas digestivas.',
    function: 'Digestão intracelular e reciclagem de componentes celulares (autofagia).',
    structure: 'Vesícula esférica delimitada por membrana simples contendo enzimas hidrolíticas.',
    prompt: 'A 3D render of a lysosome vesicle floating in 3D space. Perspective view from a 45-degree angle with a semi-transparent outer membrane revealing the internal digestive enzymes and partially digested cellular fragments. Consistent holographic style, black background.'
  },
  {
    id: 'centrioles',
    name: 'Centríolos',
    scientificName: 'Centriolum',
    description: 'Estruturas cilíndricas envolvidas na divisão celular.',
    function: 'Organização do fuso acromático durante a mitose e formação de cílios/flagelos.',
    structure: 'Pares de cilindros perpendiculares formados por nove trincas de microtúbulos.',
    prompt: 'A 3D model of a pair of centrioles floating in 3D space. Perspective view from a 45-degree angle showing the internal arrangement of the nine microtubule triplets forming the cylinder. Geometric biological structure, consistent holographic style, black background.'
  },
  {
    id: 'peroxisome',
    name: 'Peroxissomo',
    scientificName: 'Peroxisoma',
    description: 'Organelas esféricas envolvidas em reações de oxidação.',
    function: 'Desintoxicação celular e quebra de ácidos graxos, produzindo peróxido de hidrogênio.',
    structure: 'Vesícula com membrana simples, muitas vezes contendo um cristalóide de enzimas (catalase).',
    prompt: 'A 3D render of a peroxisome floating in 3D space. Perspective view from a 45-degree angle with a cutaway showing the internal crystalline core of enzymes. Semi-transparent membrane, consistent holographic style, black background.'
  },
  {
    id: 'cytoskeleton',
    name: 'Citoesqueleto',
    scientificName: 'Cytosceletus',
    description: 'Rede complexa de filamentos proteicos que atravessa o citoplasma.',
    function: 'Manutenção da forma celular, suporte mecânico e transporte intracelular.',
    structure: 'Composto por microtúbulos, microfilamentos de actina e filamentos intermediários.',
    prompt: 'A 3D visualization of the cellular cytoskeleton floating in 3D space. Perspective view from a 45-degree angle showing how the fibers interconnect and support the cell internal volume. A complex web of glowing protein fibers. Consistent holographic style, black background.'
  },
  {
    id: 'plasma-membrane',
    name: 'Membrana Plasmática',
    scientificName: 'Membrana Plasmatica',
    description: 'A barreira seletiva que envolve a célula.',
    function: 'Controle da entrada e saída de substâncias, proteção e reconhecimento celular.',
    structure: 'Bicamada fosfolipídica com proteínas integrais e periféricas, colesterol e carboidratos (modelo do mosaico fluido).',
    prompt: 'A high-detail 3D cross-section of the plasma membrane floating in 3D space. Perspective view from a 45-degree angle revealing the internal hydrophobic tails of the phospholipid bilayer and embedded protein channels. Fluid motion effect, consistent holographic style, black background.'
  },
  {
    id: 'er-smooth',
    name: 'Retículo Endoplasmático Liso',
    scientificName: 'Reticulum Endoplasmicum Glabrum',
    description: 'Rede de túbulos membranosos sem ribossomos aderidos.',
    function: 'Síntese de lipídios (como esteroides), metabolismo de carboidratos e desintoxicação.',
    structure: 'Sistema de túbulos ramificados e interconectados, com aparência lisa.',
    prompt: 'A 3D render of the Smooth Endoplasmic Reticulum floating in 3D space. Perspective view from a 45-degree angle with a cutaway showing the internal tubular structure and branching network. Translucent biological texture, consistent holographic style, black background.'
  },
  {
    id: 'ribosomes',
    name: 'Ribossomos',
    scientificName: 'Ribosoma',
    description: 'Pequenas estruturas granulares responsáveis pela síntese proteica.',
    function: 'Tradução do RNA mensageiro em cadeias polipeptídicas (proteínas).',
    structure: 'Composto por duas subunidades (maior e menor) formadas por RNA ribossômico e proteínas.',
    prompt: 'A detailed 3D model of a ribosome floating in 3D space. Perspective view from a 45-degree angle showing the interface and internal contact between the large and small subunits. mRNA passing through. Molecular biology style, consistent holographic style, black background.'
  },
  {
    id: 'nucleolus',
    name: 'Nucléolo',
    scientificName: 'Nucleolus',
    description: 'Região densa e não membranosa dentro do núcleo.',
    function: 'Local de síntese do RNA ribossômico (rRNA) e montagem das subunidades dos ribossomos.',
    structure: 'Aglomerado denso de RNA, proteínas e cromatina organizada em torno dos organizadores nucleolares.',
    prompt: 'A high-detail 3D render of a nucleolus inside the nucleus floating in 3D space. Perspective view from a 45-degree angle showing the internal dense structure with visible rRNA synthesis activity. Glowing spherical structure, consistent holographic style, black background.'
  },
  {
    id: 'microvilli',
    name: 'Microvilosidades',
    scientificName: 'Microvillus',
    description: 'Projeções digitiformes da membrana plasmática.',
    function: 'Aumento da área de superfície da célula para otimizar a absorção de nutrientes.',
    structure: 'Extensões citoplasmáticas em forma de dedo, sustentadas internamente por feixes de microfilamentos de actina.',
    prompt: 'A 3D close-up of cell microvilli floating in 3D space. Perspective view from a 45-degree angle with a cross-section showing the internal actin filament bundles that support the structure. Consistent holographic style, black background.'
  },
  {
    id: 'vesicle',
    name: 'Vesícula de Transporte',
    scientificName: 'Vesicula',
    description: 'Pequenas bolsas membranosas que transportam materiais.',
    function: 'Transporte de proteínas e lipídios entre organelas e para fora da célula.',
    structure: 'Esfera membranosa simples contendo carga biológica.',
    prompt: 'A 3D render of a transport vesicle floating in 3D space. Perspective view from a 45-degree angle with a semi-transparent membrane revealing the internal cargo molecules in transit. Consistent holographic style, black background.'
  },
  {
    id: 'cytosol',
    name: 'Citosol / Hialoplasma',
    scientificName: 'Cytosolum',
    description: 'A parte líquida do citoplasma onde as organelas estão imersas.',
    function: 'Local de muitas reações metabólicas e suporte para as organelas.',
    structure: 'Solução aquosa complexa contendo íons, moléculas pequenas e macromoléculas.',
    prompt: 'A 3D visualization of the cytosol floating in 3D space. Perspective view from a 45-degree angle showing the 3D distribution of suspended molecules and ions in a fluid environment. Translucent biological medium, consistent holographic style, black background.'
  },
  {
    id: 'chromatin',
    name: 'Cromatina',
    scientificName: 'Chromatinum',
    description: 'Complexo de DNA e proteínas encontrado no núcleo.',
    function: 'Compactação do DNA e regulação da expressão gênica.',
    structure: 'Fibras de DNA enroladas em proteínas histonas, formando nucleossomos.',
    prompt: 'A 3D model of chromatin fibers floating in 3D space. Perspective view from a 45-degree angle showing the detailed "beads on a string" arrangement of DNA wrapping around histones. Glowing DNA strands, consistent holographic style, black background.'
  },
  {
    id: 'gap-junction',
    name: 'Junção Comunicante',
    scientificName: 'Nexus',
    description: 'Canais que conectam o citoplasma de células vizinhas.',
    function: 'Permite a passagem direta de íons e pequenas moléculas entre células.',
    structure: 'Complexos proteicos chamados conexons que formam poros intercelulares.',
    prompt: 'A 3D visualization of a gap junction between two cell membranes floating in 3D space. Perspective view from a 45-degree angle with a cross-section through the membranes showing the internal channel of the connexons. Glowing biological textures, black background, scientific detail.'
  }
];
