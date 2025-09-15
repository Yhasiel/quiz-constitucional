// =========================
//   Banco de preguntas
// =========================
const QUESTIONS = [
  {
    q: "¿Qué es el Derecho Constitucional?",
    choices: [
      "La rama del derecho público que estudia los principios y reglas de organización del Estado (Constitución), los derechos fundamentales y sus garantías.",
      "Una parte del derecho privado que regula las relaciones entre particulares.",
      "La disciplina que solo estudia la forma de gobierno y el proceso electoral.",
      "Un conjunto de opiniones doctrinarias sin fuerza normativa."
    ],
    a: 0,
    e: "Rama del derecho público: organización del Estado, separación de poderes, derechos fundamentales y sus garantías."
  },
  {
    q: "El principio de Supremacía constitucional implica que…",
    choices: [
      "La Constitución puede ser modificada por ley ordinaria si hay mayoría simple.",
      "La Constitución es la norma suprema y prevalece sobre cualquier otra del ordenamiento.",
      "Los tratados internacionales siempre están por encima de la Constitución.",
      "Los reglamentos ministeriales pueden interpretarla con fuerza vinculante general."
    ],
    a: 1,
    e: "Norma-normarum: toda norma inferior debe ser compatible con ella."
  },
  {
    q: "Principio de Unidad (interpretación constitucional):",
    choices: [
      "Cada artículo se interpreta de modo aislado, sin relación con el resto del texto.",
      "Se considera a la Constitución como un todo armónico y sistemático.",
      "Las cláusulas deben preferirse en sentido literal excluyendo principios.",
      "Obliga a preferir siempre la norma más nueva por encima de la Constitución."
    ],
    a: 1,
    e: "Unidad = lectura sistemática y coherente del texto."
  },
  {
    q: "Concordancia práctica significa que…",
    choices: [
      "Se inaplican derechos en tensión para favorecer el más importante.",
      "Se armonizan derechos y valores en conflicto sin sacrificar su contenido esencial.",
      "Se privilegia siempre la libertad de empresa sobre derechos sociales.",
      "Se interpretan únicamente reglas, no principios."
    ],
    a: 1,
    e: "Armonizar mandatos en tensión optimizando ambos."
  },
  {
    q: "Eficacia integradora busca…",
    choices: [
      "Mantener la unidad política y preferir soluciones que integren a la comunidad.",
      "Excluir a las minorías cuando dificultan la gobernabilidad.",
      "Dejar sin efecto principios para fortalecer al Ejecutivo.",
      "Otorgar prevalencia automática a tratados internacionales."
    ],
    a: 0,
    e: "Favorece interpretaciones que integren y pacifiquen el orden político y social."
  },
  {
    q: "Corrección funcional obliga a…",
    choices: [
      "Interpretar ampliando competencias más allá del texto para resolver casos difíciles.",
      "Respetar las competencias de cada órgano, sin restringir ni desvirtuar sus funciones constitucionales.",
      "Trasladar funciones del Congreso al Tribunal Constitucional.",
      "Subordinar el Poder Judicial al Ejecutivo en estados de emergencia."
    ],
    a: 1,
    e: "Cada poder actúa dentro de su ámbito: evita desbordes competenciales."
  },
  {
    q: "Fuerza normativa de la Constitución significa que…",
    choices: [
      "Es un texto meramente programático sin eficacia directa.",
      "Vincula a autoridades y particulares, con eficacia directa de sus disposiciones.",
      "Solo tiene valor simbólico para orientar políticas públicas.",
      "Requiere siempre una ley para poder aplicarse."
    ],
    a: 1,
    e: "Reglas y principios son obligatorios y operativos como parámetro de validez."
  },
  {
    q: "Según su materia o contenido, las normas constitucionales se clasifican en:",
    choices: [
      "Declarativas, iusfundamentales (derechos) y orgánicas.",
      "Programáticas, taxativas y reglamentarias.",
      "Sustantivas, procesales y adjetivas.",
      "Legales, reglamentarias y administrativas."
    ],
    a: 0,
    e: "Materia/contenido: declarativas (valores), iusfundamentales (derechos) y orgánicas (estructura estatal)."
  },
  {
    q: "Según su eficacia, una norma programática…",
    choices: [
      "Se aplica por sí misma sin requerir normas complementarias.",
      "Requiere la promulgación de una ley para posibilitar su cumplimiento efectivo.",
      "Es inconstitucional por falta de contenido.",
      "Solo tiene efectos en el ámbito internacional."
    ],
    a: 1,
    e: "Programática = necesita desarrollo legal; operativa/autoplicativa = eficacia directa."
  },
  {
    q: "¿Cuál es fuente formal DIRECTA del Derecho Constitucional?",
    choices: [
      "La doctrina constitucional.",
      "Los principios constitucionales.",
      "La legislación constitucional (Constitución, leyes constitucionales/constitucionalizadas).",
      "El derecho comparado."
    ],
    a: 2,
    e: "Directas: legislación, costumbre y jurisprudencia constitucional. Doctrina/principios/comparado: indirectas."
  },
  {
    q: "Neoconstitucionalismo: ¿cuál rasgo corresponde?",
    choices: [
      "Primacía de principios constitucionales, ponderación y control de constitucionalidad robusto.",
      "Supremacía de la ley sobre la Constitución.",
      "Interpretación solo literal y subsuntiva.",
      "Inexistencia del rol del juez constitucional."
    ],
    a: 0,
    e: "Constitución como norma-normarum; centralidad de principios y argumentación."
  },
  {
    q: "Perú: ¿qué enunciado sobre tratados es correcto?",
    choices: [
      "Los tratados no forman parte del derecho nacional.",
      "Los tratados celebrados por el Estado en vigor forman parte del derecho nacional (art. 55).",
      "Cualquier tratado puede reformar la Constitución sin procedimiento especial.",
      "Los tratados de DD.HH. carecen de valor interpretativo."
    ],
    a: 1,
    e: "Art. 55: forman parte del derecho nacional. Si afectan la Constitución, procedimiento de reforma (art. 57)."
  },
  {
    q: "Según el TC (Exp. 025-2005-PI/TC), los tratados internacionales de DD.HH.…",
    choices: [
      "Tienen rango meramente legal.",
      "Detentan rango constitucional y conforman el ordenamiento jurídico.",
      "Solo son guías no vinculantes.",
      "No pueden usarse en control de constitucionalidad."
    ],
    a: 1,
    e: "Además de integrar el ordenamiento, detentan rango constitucional."
  },
  {
    q: "Documento que prohibió detenciones sin orden judicial y consolidó el remedio frente a arrestos arbitrarios:",
    choices: [
      "Magna Carta (1215).",
      "Petition of Right (1628).",
      "Habeas Corpus Act (1679).",
      "Bill of Rights (1689)."
    ],
    a: 2,
    e: "El Habeas Corpus Act (1679) es el texto clave frente a detenciones arbitrarias."
  },
  {
    q: "Rasgo central de la Declaración de los Derechos del Hombre y del Ciudadano (1789):",
    choices: [
      "Consagración del derecho inviolable de propiedad y la libertad cuyos límites provienen de la ley.",
      "Establecimiento del control judicial de constitucionalidad.",
      "Reconocimiento del sufragio universal directo para todos.",
      "Consagración de derechos sociales justiciables."
    ],
    a: 0,
    e: "Define finalidad de la asociación política, libertad y sus límites en la ley; propiedad inviolable."
  },
  {
    q: "Constitución peruana que consagró Estado unitario, bicameralidad y reconocimiento expreso de derechos fundamentales:",
    choices: ["Constitución de 1823.","Constitución de 1828.","Constitución de 1856.","Constitución de 1933."],
    a: 1,
    e: "La de 1828: unitaria, bicameral y reconoce derechos de la persona."
  },
  {
    q: "Constitución de 1856 – rasgo curricularmente importante:",
    choices: [
      "Autorizó la censura previa a la prensa.",
      "Estableció la nulidad de la ley contraria a la Constitución (art. 10), antecedente del control de constitucionalidad.",
      "Suprimió el Congreso.",
      "Prohibió el comercio internacional."
    ],
    a: 1,
    e: "Art. 10: nulidad de ley inconstitucional → antecedente clave del control."
  },
  {
    q: "Constitución de 1933 – opción correcta:",
    choices: [
      "Siguió el modelo de su predecesora, introdujo instituciones que generaron conflictos Parlamento-Ejecutivo y estableció la obligatoriedad de la enseñanza primaria.",
      "Suprimió la enseñanza primaria obligatoria.",
      "Abolió el Parlamento.",
      "Creó la figura del Presidente vitalicio."
    ],
    a: 0,
    e: "Continuidad, tensiones institucionales y obligatoriedad de la primaria."
  },
  {
    q: "Razonabilidad (principio de interpretación) implica que…",
    choices: [
      "Las decisiones arbitrarias son válidas si tienen respaldo político.",
      "Se prohíben actuaciones arbitrarias; el ejercicio del poder debe tener una justificación constitucional suficiente.",
      "Toda restricción de derechos es válida por ser ‘necesaria’.",
      "Los jueces no pueden controlar la proporcionalidad de las medidas."
    ],
    a: 1,
    e: "Exige justificación suficiente y prohíbe la arbitrariedad."
  },
  {
    q: "¿Cuál NO es fuente formal directa del Derecho Constitucional?",
    choices: [
      "Jurisprudencia del Tribunal Constitucional.",
      "Costumbre constitucional.",
      "Doctrina constitucional.",
      "Legislación constitucional."
    ],
    a: 2,
    e: "La doctrina es fuente indirecta; directas: legislación, costumbre y jurisprudencia constitucional."
  }
];

// =========================
//   Render y lógica
// =========================
const $quiz   = document.getElementById("quiz");
const $score  = document.getElementById("score");
const $filter = document.getElementById("filterSel");

function render(){
  $quiz.innerHTML = "";
  QUESTIONS.forEach((it, i) => {
    const card = document.createElement("section");
    card.className = "card";
    card.dataset.index = i;

    const head = document.createElement("div");
    head.innerHTML = `<span class="qid">Pregunta ${i+1}</span>`;
    card.appendChild(head);

    const q = document.createElement("p");
    q.className = "qtxt";
    q.textContent = it.q;
    card.appendChild(q);

    const list = document.createElement("div");
    list.className = "options";

    it.choices.forEach((txt, k) => {
      const opt = document.createElement("label");
      opt.className = "opt";
      opt.innerHTML = `
        <input type="radio" name="q${i}" value="${k}">
        <div>${String.fromCharCode(97+k)}) ${txt}</div>
      `;
      list.appendChild(opt);
    });

    const exp = document.createElement("div");
    exp.className = "explain hidden";
    exp.innerHTML = `<div class="title"><strong>Explicación:</strong></div><div class="body"></div>`;

    card.appendChild(list);
    card.appendChild(exp);
    $quiz.appendChild(card);
  });
}

function grade(){
  let ok=0, bad=0, blank=0;
  document.querySelectorAll(".card").forEach(card=>{
    const i = +card.dataset.index;
    const chosen = card.querySelector('input[type="radio"]:checked');
    const opts = [...card.querySelectorAll(".opt")];
    opts.forEach(o=>o.classList.remove("correct","incorrect"));
    const explain = card.querySelector(".explain");
    explain.classList.add("hidden");

    if(!chosen){ blank++; return; }

    const sel = +chosen.value;
    if(sel === QUESTIONS[i].a){
      ok++;
      opts[sel].classList.add("correct");
      addTag(card, true);
    }else{
      bad++;
      opts[sel].classList.add("incorrect");
      opts[QUESTIONS[i].a].classList.add("correct");
      addTag(card, false);
      explain.classList.remove("hidden");
      explain.querySelector(".body").innerHTML =
        `La respuesta correcta es <strong>${letra(QUESTIONS[i].a)}</strong>. ${QUESTIONS[i].e}`;
    }
  });
  $score.textContent = `Puntaje: ${ok}/${QUESTIONS.length}  ·  Correctas: ${ok} | Incorrectas: ${bad} | En blanco: ${blank}`;
  applyFilter();
}

function addTag(card, isOk){
  let tag = card.querySelector(".tag");
  if(!tag){
    tag = document.createElement("span");
    tag.className = "tag";
    card.querySelector(".qid").appendChild(tag);
  }
  tag.textContent = isOk ? "✔ correcta" : "✘ incorrecta";
  tag.className = "tag " + (isOk ? "ok" : "bad");
}

function applyFilter(){
  const mode = $filter.value;
  document.querySelectorAll(".card").forEach(card=>{
    const tag = card.querySelector(".tag");
    if(mode==="all"){ card.classList.remove("hidden"); return; }
    if(!tag){ card.classList.toggle("hidden", mode!=="onlyBlank"); return; }
    const isOk = tag.classList.contains("ok");
    if(mode==="onlyOk")  card.classList.toggle("hidden", !isOk);
    if(mode==="onlyBad") card.classList.toggle("hidden",  isOk);
    if(mode==="onlyBlank") card.classList.add("hidden");
  });
}

function resetAll(){
  document.querySelectorAll('input[type="radio"]').forEach(i=>i.checked=false);
  document.querySelectorAll(".opt").forEach(o=>o.classList.remove("correct","incorrect"));
  document.querySelectorAll(".explain").forEach(e=>e.classList.add("hidden"));
  document.querySelectorAll(".tag").forEach(t=>t.remove());
  $filter.value="all";
  $score.textContent = `Puntaje: 0/${QUESTIONS.length}`;
  applyFilter();
}

function letra(i){ return String.fromCharCode(97+i); }

// boot
render();
document.getElementById("grade").addEventListener("click", grade);
document.getElementById("reset").addEventListener("click", resetAll);
$filter.addEventListener("change", applyFilter);
