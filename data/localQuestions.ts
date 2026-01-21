import { CategoryId, Question } from '../types';

export const LOCAL_QUESTIONS: Question[] = [
  // --- PREVIA / FIESTA (NUEVAS PREGUNTAS) ---
  {
    questionText: "¿Qué ingrediente NO lleva un Long Island Iced Tea?",
    options: ["Tequila", "Ron", "Whisky", "Vodka"],
    correctAnswerIndex: 2,
    explanation: "El Long Island es una bomba que lleva vodka, tequila, ron blanco, ginebra y triple seco, pero NO whisky.",
    category: CategoryId.ENTERTAINMENT,
    difficulty: "hard"
  },
  {
    questionText: "¿Quién colabora con Bizarrap en la Session #52 ('Quédate')?",
    options: ["Quevedo", "C. Tangana", "Mora", "Bad Bunny"],
    correctAnswerIndex: 0,
    explanation: "Quevedo. ¡Quédate, que las noches sin ti duelen!",
    category: CategoryId.ENTERTAINMENT,
    difficulty: "easy"
  },
  {
    questionText: "¿De qué país es originario el Jägermeister?",
    options: ["Suecia", "Rusia", "Alemania", "Austria"],
    correctAnswerIndex: 2,
    explanation: "Es un licor de hierbas alemán. Cuidado con los ciervos.",
    category: CategoryId.GEOGRAPHY,
    difficulty: "medium"
  },
  {
    questionText: "En la canción de Karol G, ¿qué es 'La Tusa'?",
    options: ["Una fiesta", "Una borrachera", "Un desamor/tristeza", "Un coche caro"],
    correctAnswerIndex: 2,
    explanation: "En Colombia, la 'tusa' es el despecho o tristeza por una ruptura amorosa.",
    category: CategoryId.ENTERTAINMENT,
    difficulty: "easy"
  },
  {
    questionText: "¿Qué bebida energética lleva el famoso 'Jaggerbomb'?",
    options: ["Monster", "Red Bull", "Burn", "Rockstar"],
    correctAnswerIndex: 1,
    explanation: "Jägermeister con Red Bull. Alas y resaca garantizadas.",
    category: CategoryId.ENTERTAINMENT,
    difficulty: "easy"
  },
  {
    questionText: "¿Qué famosa frase dijo Messi en el Mundial 2022?",
    options: ["Vamos Argentina", "Siuuuu", "Andá pa' allá, bobo", "No fue penal"],
    correctAnswerIndex: 2,
    explanation: "¿Qué mirás, bobo? Andá pa' allá, bobo.",
    category: CategoryId.SPORTS,
    difficulty: "easy"
  },
  {
    questionText: "¿Cuál es la medida estándar de un 'chupito' en España?",
    options: ["1 cl", "3-4 cl", "10 cl", "50 ml"],
    correctAnswerIndex: 1,
    explanation: "Suele rondar los 3 o 4 centilitros (aprox 1 onza).",
    category: CategoryId.SCIENCE,
    difficulty: "medium"
  },
  {
    questionText: "¿Quién es la reina del 'Motomami'?",
    options: ["Nathy Peluso", "Rosalía", "Bad Gyal", "Tokischa"],
    correctAnswerIndex: 1,
    explanation: "Rosalía, chica, ¿qué dices?",
    category: CategoryId.ENTERTAINMENT,
    difficulty: "easy"
  },
  {
    questionText: "¿Qué red social popularizó los bailes de 15 segundos?",
    options: ["Instagram", "Vine", "TikTok", "Snapchat"],
    correctAnswerIndex: 2,
    explanation: "TikTok cambió el juego.",
    category: CategoryId.ENTERTAINMENT,
    difficulty: "easy"
  },
  {
    questionText: "¿De qué está hecho el Vodka principalmente?",
    options: ["Uva", "Cebada", "Patata o grano", "Caña de azúcar"],
    correctAnswerIndex: 2,
    explanation: "Tradicionalmente de patata o granos fermentados.",
    category: CategoryId.SCIENCE,
    difficulty: "medium"
  },
  {
    questionText: "¿Cómo se llama el 'shippeo' entre Aitana y Sebastián Yatra?",
    options: ["Aitatra", "Sebaitana", "Yatraina", "No tienen nombre"],
    correctAnswerIndex: 1,
    explanation: "Los fans suelen llamarlos algo así, aunque ellos dirían que 'son amigos'.",
    category: CategoryId.ENTERTAINMENT,
    difficulty: "medium"
  },
  {
    questionText: "¿Qué significa 'GPI' en chat?",
    options: ["Guapa Pero Inteligente", "Gracias Por Invitar", "Gran Partido Internacional", "Gente Para Ir"],
    correctAnswerIndex: 1,
    explanation: "Gracias Por Invitar (normalmente sarcástico cuando no te invitan).",
    category: CategoryId.ENTERTAINMENT,
    difficulty: "medium"
  },
  {
    questionText: "¿Qué fruta lleva una Piña Colada además de coco?",
    options: ["Fresa", "Piña", "Melón", "Mango"],
    correctAnswerIndex: 1,
    explanation: "Piña. El nombre te daba una pista...",
    category: CategoryId.ENTERTAINMENT,
    difficulty: "easy"
  },
  {
    questionText: "¿Qué 'reality' consiste en poner los cuernos en una villa de lujo?",
    options: ["Supervivientes", "La Isla de las Tentaciones", "Gran Hermano", "Maestros de la Costura"],
    correctAnswerIndex: 1,
    explanation: "La Isla de las Tentaciones. ¡Estefaníaaaa!",
    category: CategoryId.ENTERTAINMENT,
    difficulty: "easy"
  },
  {
    questionText: "¿Cuál es el nombre real de Ibai Llanos?",
    options: ["Ibai Llanos", "Iván Llanos", "Iker Llanos", "Ignacio Llanos"],
    correctAnswerIndex: 0,
    explanation: "Se llama Ibai. No tiene truco.",
    category: CategoryId.ENTERTAINMENT,
    difficulty: "medium"
  },
  {
    questionText: "¿Qué alcohol es la base del Mojito?",
    options: ["Ginebra", "Vodka", "Ron Blanco", "Tequila"],
    correctAnswerIndex: 2,
    explanation: "Ron blanco, hierbabuena, lima, azúcar y soda.",
    category: CategoryId.ENTERTAINMENT,
    difficulty: "easy"
  },

  // --- CULTURA GENERAL (ORIGINALES) ---
  {
    questionText: "¿De qué país es originario el queso brie?",
    options: ["Francia", "Italia", "Suiza", "Bélgica"],
    correctAnswerIndex: 0,
    explanation: "El queso brie es originario de la región de Brie, en Francia.",
    category: CategoryId.GEOGRAPHY,
    difficulty: "easy"
  },
  {
    questionText: "¿Quién mandó construir el parque de El Capricho de Madrid?",
    options: ["La Reina Isabel II", "La Duquesa de Alba", "La Duquesa de Osuna", "Carlos III"],
    correctAnswerIndex: 2,
    explanation: "Fue mandado construir por la Duquesa de Osuna.",
    category: CategoryId.HISTORY,
    difficulty: "hard"
  },
  {
    questionText: "¿Cuál es la moneda de México?",
    options: ["Dólar", "Peso mexicano", "Sol", "Bolívar"],
    correctAnswerIndex: 1,
    explanation: "La moneda oficial es el peso mexicano.",
    category: CategoryId.GEOGRAPHY,
    difficulty: "easy"
  },
  {
    questionText: "¿En qué año se fundó Heinz?",
    options: ["1869", "1900", "1950", "1820"],
    correctAnswerIndex: 0,
    explanation: "La compañía H.J. Heinz fue fundada en 1869.",
    category: CategoryId.HISTORY,
    difficulty: "hard"
  },
  {
    questionText: "¿De qué colores es la bandera de Japón?",
    options: ["Azul y blanca", "Roja y amarilla", "Blanca y roja", "Verde y blanca"],
    correctAnswerIndex: 2,
    explanation: "Blanca con un círculo rojo (el sol) en el centro.",
    category: CategoryId.GEOGRAPHY,
    difficulty: "easy"
  },
  {
    questionText: "¿Qué cuatro ingredientes se necesitan para preparar un Cosmopolitan?",
    options: ["Vodka, ginebra, limón, azúcar", "Zumo de lima, vodka, zumo de arándanos, cointreau", "Ron, menta, lima, soda", "Whisky, vermú, amargo, cereza"],
    correctAnswerIndex: 1,
    explanation: "Zumo de lima, vodka, zumo de arándanos y cointreau.",
    category: CategoryId.ENTERTAINMENT,
    difficulty: "medium"
  },
  {
    questionText: "¿En qué ciudad se celebró la primera Semana de la Moda?",
    options: ["París", "Milán", "Londres", "Nueva York"],
    correctAnswerIndex: 3,
    explanation: "En Nueva York, en el año 1943.",
    category: CategoryId.ENTERTAINMENT,
    difficulty: "hard"
  },
  {
    questionText: "¿Qué fruto seco lleva en su interior un Ferrero Rocher?",
    options: ["Almendra", "Nuez", "Avellana", "Cacahuete"],
    correctAnswerIndex: 2,
    explanation: "Una avellana entera.",
    category: CategoryId.ENTERTAINMENT,
    difficulty: "easy"
  },
  {
    questionText: "¿En qué año murió David Delfín?",
    options: ["2015", "2017", "2019", "2021"],
    correctAnswerIndex: 1,
    explanation: "Falleció en 2017.",
    category: CategoryId.ENTERTAINMENT,
    difficulty: "medium"
  },
  {
    questionText: "¿Cuántas válvulas tiene un corazón humano?",
    options: ["Dos", "Tres", "Cuatro", "Cinco"],
    correctAnswerIndex: 2,
    explanation: "Cuatro: mitral, tricúspide, aórtica y pulmonar.",
    category: CategoryId.SCIENCE,
    difficulty: "medium"
  },
  {
    questionText: "¿Cuál era el apellido de la reina Isabel II de Inglaterra?",
    options: ["Tudor", "Windsor", "Stuart", "Mountbatten"],
    correctAnswerIndex: 1,
    explanation: "Su apellido era Windsor.",
    category: CategoryId.HISTORY,
    difficulty: "medium"
  },
  {
    questionText: "¿Cómo se llama de verdad la Venecia Mexicana?",
    options: ["Cancún", "Xochimilco", "Acapulco", "Guadalajara"],
    correctAnswerIndex: 1,
    explanation: "Xochimilco.",
    category: CategoryId.GEOGRAPHY,
    difficulty: "medium"
  },
  {
    questionText: "¿Qué día es la fiesta de la hispanidad?",
    options: ["12 de octubre", "6 de diciembre", "2 de mayo", "25 de julio"],
    correctAnswerIndex: 0,
    explanation: "El 12 de octubre.",
    category: CategoryId.HISTORY,
    difficulty: "easy"
  },
  {
    questionText: "¿Cómo se llamaba el marido de Frida Kahlo?",
    options: ["Diego Rivera", "David Siqueiros", "José Clemente", "Rufino Tamayo"],
    correctAnswerIndex: 0,
    explanation: "Diego Rivera.",
    category: CategoryId.ART,
    difficulty: "medium"
  },
  {
    questionText: "¿Quién inventó la bombilla?",
    options: ["Tesla", "Edison", "Bell", "Newton"],
    correctAnswerIndex: 1,
    explanation: "Thomas Edison.",
    category: CategoryId.SCIENCE,
    difficulty: "easy"
  },
  {
    questionText: "En relación a su tamaño, ¿cuál es el músculo más potente del cuerpo humano?",
    options: ["Cuádriceps", "Lengua", "Masetero", "Glúteo"],
    correctAnswerIndex: 2,
    explanation: "El masetero.",
    category: CategoryId.SCIENCE,
    difficulty: "hard"
  },
  {
    questionText: "¿Cómo se llama el pan con chorizo típico de Asturias?",
    options: ["Hornazo", "Bollo preñao", "Empanada", "Torta"],
    correctAnswerIndex: 1,
    explanation: "Bollo preñao.",
    category: CategoryId.GEOGRAPHY,
    difficulty: "medium"
  },
  {
    questionText: "¿Quién escribió 'Cumbres borrascosas'?",
    options: ["Jane Austen", "Emily Brontë", "Charlotte Brontë", "Virginia Woolf"],
    correctAnswerIndex: 1,
    explanation: "Emily Brontë.",
    category: CategoryId.ART,
    difficulty: "medium"
  },
  {
    questionText: "¿El título del primer libro de Jane Austen?",
    options: ["Orgullo y prejuicio", "Sentido y sensibilidad", "Emma", "Persuasión"],
    correctAnswerIndex: 1,
    explanation: "Sentido y sensibilidad.",
    category: CategoryId.ART,
    difficulty: "hard"
  },
  {
    questionText: "¿En qué año se creó Google Images?",
    options: ["1998", "2001", "2005", "2010"],
    correctAnswerIndex: 1,
    explanation: "En julio de 2001, inspirado por el vestido de JLo.",
    category: CategoryId.SCIENCE,
    difficulty: "hard"
  },
  {
    questionText: "¿Cuántos elementos forman la Tabla Periódica?",
    options: ["100", "118", "125", "92"],
    correctAnswerIndex: 1,
    explanation: "118 elementos.",
    category: CategoryId.SCIENCE,
    difficulty: "hard"
  },
  {
    questionText: "En una cerveza ¿qué significa el acrónimo IPA?",
    options: ["International Pale Ale", "Indian Pale Ale", "Imperial Premium Ale", "Irish Pale Ale"],
    correctAnswerIndex: 1,
    explanation: "Indian Pale Ale.",
    category: CategoryId.ENTERTAINMENT,
    difficulty: "medium"
  },
  {
    questionText: "¿Quién pintó la Mona Lisa?",
    options: ["Miguel Ángel", "Rafael", "Da Vinci", "Donatello"],
    correctAnswerIndex: 2,
    explanation: "Leonardo da Vinci.",
    category: CategoryId.ART,
    difficulty: "easy"
  },
  {
    questionText: "¿Qué fruta tiene como nombre científico Mangifera indica?",
    options: ["Manzana", "Mango", "Melón", "Mandarina"],
    correctAnswerIndex: 1,
    explanation: "Mango.",
    category: CategoryId.SCIENCE,
    difficulty: "hard"
  },
  {
    questionText: "¿Qué elemento de la tabla periódica tiene como símbolo He?",
    options: ["Hierro", "Hidrógeno", "Helio", "Hafnio"],
    correctAnswerIndex: 2,
    explanation: "Helio.",
    category: CategoryId.SCIENCE,
    difficulty: "easy"
  },
  {
    questionText: "¿En qué año nació Salvador Dalí?",
    options: ["1904", "1890", "1920", "1910"],
    correctAnswerIndex: 0,
    explanation: "1904.",
    category: CategoryId.ART,
    difficulty: "hard"
  },
  {
    questionText: "¿Qué planeta es el que se encuentra más cerca del Sol?",
    options: ["Venus", "Tierra", "Marte", "Mercurio"],
    correctAnswerIndex: 3,
    explanation: "Mercurio.",
    category: CategoryId.SCIENCE,
    difficulty: "easy"
  },
  {
    questionText: "¿Dónde nació Joan Didion?",
    options: ["Nueva York", "Sacramento", "Los Ángeles", "Chicago"],
    correctAnswerIndex: 1,
    explanation: "Sacramento.",
    category: CategoryId.ART,
    difficulty: "hard"
  },
  {
    questionText: "¿Qué significan las siglas LGBTI?",
    options: ["Libertad...", "Lesbianas, gays, bisexuales, transexuales e intersexuales", "Liga...", "Ley..."],
    correctAnswerIndex: 1,
    explanation: "Lesbianas, gays, bisexuales, transexuales e intersexuales.",
    category: CategoryId.ENTERTAINMENT,
    difficulty: "easy"
  },
  {
    questionText: "¿Cómo se llaman las dos casas internacionales de ‘tiktokers’ más conocidas?",
    options: ["Big Brother & Fame", "Hype House & Sway House", "TikTok Villa & Creator", "Alpha & Beta"],
    correctAnswerIndex: 1,
    explanation: "Hype House y Sway House.",
    category: CategoryId.ENTERTAINMENT,
    difficulty: "hard"
  },
  {
    questionText: "¿A cuántos kilómetros equivale una milla?",
    options: ["1.5 km", "1.6 km", "2.0 km", "1.8 km"],
    correctAnswerIndex: 1,
    explanation: "1.6 km.",
    category: CategoryId.SCIENCE,
    difficulty: "medium"
  },
  {
    questionText: "¿En qué provincia de España se encuentra el parque temático PortAventura?",
    options: ["Barcelona", "Tarragona", "Girona", "Lleida"],
    correctAnswerIndex: 1,
    explanation: "Tarragona.",
    category: CategoryId.GEOGRAPHY,
    difficulty: "easy"
  },
  {
    questionText: "¿Quién es el líder espiritual del Tíbet?",
    options: ["Buda", "Dalai Lama", "Gandhi", "Confucio"],
    correctAnswerIndex: 1,
    explanation: "El Dalai Lama.",
    category: CategoryId.HISTORY,
    difficulty: "easy"
  },
  {
    questionText: "¿A qué mes pertenece el signo de Sagitario?",
    options: ["Agosto", "Octubre", "Diciembre", "Febrero"],
    correctAnswerIndex: 2,
    explanation: "Diciembre.",
    category: CategoryId.ENTERTAINMENT,
    difficulty: "easy"
  },
  {
    questionText: "‘La Luna vino a la fragua’. Así arranca un poema de…",
    options: ["Machado", "Lorca", "Alberti", "Hernández"],
    correctAnswerIndex: 1,
    explanation: "Federico García Lorca.",
    category: CategoryId.ART,
    difficulty: "medium"
  },
  {
    questionText: "¿De qué país es la autora de ‘365 DNI’?",
    options: ["EEUU", "Polonia", "Rusia", "Alemania"],
    correctAnswerIndex: 1,
    explanation: "Polonia.",
    category: CategoryId.ART,
    difficulty: "hard"
  },
  {
    questionText: "¿De dónde es originario el mojito?",
    options: ["México", "Cuba", "Puerto Rico", "Brasil"],
    correctAnswerIndex: 1,
    explanation: "Cuba.",
    category: CategoryId.ENTERTAINMENT,
    difficulty: "easy"
  },
  {
    questionText: "¿Cuáles son los tres signos de agua del zodiaco?",
    options: ["Aries, Leo, Sagitario", "Géminis, Libra, Acuario", "Tauro, Virgo, Capricornio", "Cáncer, Escorpio y Piscis"],
    correctAnswerIndex: 3,
    explanation: "Cáncer, Escorpio y Piscis.",
    category: CategoryId.ENTERTAINMENT,
    difficulty: "medium"
  },
  {
    questionText: "¿Qué supermodelo nació en Streatham, Londres?",
    options: ["Kate Moss", "Naomi Campbell", "Cara Delevingne", "Twiggy"],
    correctAnswerIndex: 1,
    explanation: "Naomi Campbell.",
    category: CategoryId.ENTERTAINMENT,
    difficulty: "hard"
  },
  {
    questionText: "¿Cuántos lados tiene un heptadecágono?",
    options: ["7", "17", "27", "10"],
    correctAnswerIndex: 1,
    explanation: "Diecisiete.",
    category: CategoryId.SCIENCE,
    difficulty: "hard"
  },
  {
    questionText: "¿Cuál es la línea más larga del metro de Madrid?",
    options: ["Línea 1", "Línea 6", "Línea 10", "Línea 12"],
    correctAnswerIndex: 3,
    explanation: "La línea 12 (41 km).",
    category: CategoryId.GEOGRAPHY,
    difficulty: "hard"
  },
  {
    questionText: "¿Qué signo del zodiaco es alguien que ha nacido el 24 de agosto?",
    options: ["Leo", "Virgo", "Libra", "Escorpio"],
    correctAnswerIndex: 1,
    explanation: "Virgo.",
    category: CategoryId.ENTERTAINMENT,
    difficulty: "medium"
  },
  {
    questionText: "¿Para qué sirve el botón C de una calculadora?",
    options: ["Calcular", "Copiar", "Clear (Borrar)", "Corregir"],
    correctAnswerIndex: 2,
    explanation: "Clear (Borrar todas las entradas).",
    category: CategoryId.SCIENCE,
    difficulty: "easy"
  },
  {
    questionText: "¿De dónde sale el aceite de oliva?",
    options: ["Girasol", "Aceitunas", "Maíz", "Soja"],
    correctAnswerIndex: 1,
    explanation: "De las aceitunas.",
    category: CategoryId.SCIENCE,
    difficulty: "easy"
  },
  {
    questionText: "¿Dónde nació la pizza?",
    options: ["Roma", "Florencia", "Nápoles", "Milán"],
    correctAnswerIndex: 2,
    explanation: "Nápoles.",
    category: CategoryId.GEOGRAPHY,
    difficulty: "easy"
  },
  {
    questionText: "¿Cuántas estrellas Michelin tiene Dabiz Muñoz?",
    options: ["Una", "Dos", "Tres", "Cuatro"],
    correctAnswerIndex: 2,
    explanation: "Tres.",
    category: CategoryId.ENTERTAINMENT,
    difficulty: "medium"
  },
  {
    questionText: "¿Quién pintó Las meninas?",
    options: ["Goya", "Velázquez", "El Greco", "Murillo"],
    correctAnswerIndex: 1,
    explanation: "Velázquez.",
    category: CategoryId.ART,
    difficulty: "easy"
  },
  {
    questionText: "¿En qué año arrancó la revolución francesa?",
    options: ["1789", "1492", "1917", "1812"],
    correctAnswerIndex: 0,
    explanation: "1789.",
    category: CategoryId.HISTORY,
    difficulty: "medium"
  },
  {
    questionText: "¿Qué Papa murió en diciembre de 2022?",
    options: ["Juan Pablo II", "Benedicto XVI", "Francisco", "Juan Pablo I"],
    correctAnswerIndex: 1,
    explanation: "Benedicto XVI.",
    category: CategoryId.HISTORY,
    difficulty: "medium"
  },
  {
    questionText: "¿Cuál es la capital de Kenia?",
    options: ["Lagos", "Nairobi", "El Cairo", "Mombasa"],
    correctAnswerIndex: 1,
    explanation: "Nairobi.",
    category: CategoryId.GEOGRAPHY,
    difficulty: "medium"
  },
  {
    questionText: "¿Dónde nació Cervantes?",
    options: ["Madrid", "Toledo", "Alcalá de Henares", "Sevilla"],
    correctAnswerIndex: 2,
    explanation: "Alcalá de Henares.",
    category: CategoryId.ART,
    difficulty: "easy"
  },
  {
    questionText: "¿Cuántos colores tiene el cubo Rubik?",
    options: ["4", "6", "8", "9"],
    correctAnswerIndex: 1,
    explanation: "Seis: Rojo, verde, blanco, naranja, amarillo, azul.",
    category: CategoryId.ENTERTAINMENT,
    difficulty: "medium"
  },
  {
    questionText: "¿Dónde se encuentra Santa María del Naranco?",
    options: ["Gijón", "Oviedo", "Santander", "León"],
    correctAnswerIndex: 1,
    explanation: "Oviedo.",
    category: CategoryId.ART,
    difficulty: "medium"
  },
  {
    questionText: "¿Qué es un palíndromo?",
    options: ["Un verso", "Palabra que se lee igual al revés", "Figura retórica", "Un tipo de rima"],
    correctAnswerIndex: 1,
    explanation: "Palabra que se lee igual por la derecha que por la izquierda.",
    category: CategoryId.ART,
    difficulty: "medium"
  },
  {
    questionText: "¿Quién escribió ‘Matilda’?",
    options: ["Rowling", "Roald Dahl", "Blyton", "Carroll"],
    correctAnswerIndex: 1,
    explanation: "Roald Dahl.",
    category: CategoryId.ART,
    difficulty: "easy"
  },
  {
    questionText: "¿En qué museo están Las Meninas?",
    options: ["Reina Sofía", "Thyssen", "Prado", "Louvre"],
    correctAnswerIndex: 2,
    explanation: "En el Prado.",
    category: CategoryId.ART,
    difficulty: "easy"
  },
  {
    questionText: "¿Cuál es el actual Rey de Reino Unido?",
    options: ["Guillermo", "Carlos III", "Enrique", "Jorge"],
    correctAnswerIndex: 1,
    explanation: "Carlos de Inglaterra (Carlos III).",
    category: CategoryId.HISTORY,
    difficulty: "easy"
  },
  {
    questionText: "¿Dónde está el David de Miguel Ángel?",
    options: ["Roma", "Venecia", "Florencia", "Milán"],
    correctAnswerIndex: 2,
    explanation: "Florencia, Italia.",
    category: CategoryId.ART,
    difficulty: "medium"
  },
  {
    questionText: "¿Cristóbal Balenciaga era español o francés?",
    options: ["Francés", "Español", "Italiano", "Belga"],
    correctAnswerIndex: 1,
    explanation: "Español.",
    category: CategoryId.ART,
    difficulty: "easy"
  },
  {
    questionText: "¿Cuál es el origen de los gofres?",
    options: ["Bélgica", "Francia", "Estados Unidos", "Alemania"],
    correctAnswerIndex: 2,
    explanation: "Estados Unidos (según la fuente, aunque popularmente se asocian a Bélgica).",
    category: CategoryId.ENTERTAINMENT,
    difficulty: "hard"
  },
  {
    questionText: "¿A qué país pertenece la Isla de Pascua?",
    options: ["Perú", "Chile", "Ecuador", "Argentina"],
    correctAnswerIndex: 1,
    explanation: "Chile.",
    category: CategoryId.GEOGRAPHY,
    difficulty: "medium"
  },
  {
    questionText: "¿Cómo se llamaba el submarino que explotó visitando el Titanic?",
    options: ["Nautilus", "Titan", "Atlantis", "Poseidón"],
    correctAnswerIndex: 1,
    explanation: "Titan.",
    category: CategoryId.ENTERTAINMENT,
    difficulty: "easy"
  },
  {
    questionText: "¿Quién es la líder de la formación política Sumar?",
    options: ["Irene Montero", "Yolanda Díaz", "Ada Colau", "Mónica García"],
    correctAnswerIndex: 1,
    explanation: "Yolanda Díaz.",
    category: CategoryId.HISTORY,
    difficulty: "easy"
  },
  {
    questionText: "¿Dónde nació la Coca Cola?",
    options: ["Nueva York", "Chicago", "Atlanta", "Dallas"],
    correctAnswerIndex: 2,
    explanation: "En Atlanta.",
    category: CategoryId.ENTERTAINMENT,
    difficulty: "medium"
  },

  // --- MÚSICA Y VARIOS ---
  {
    questionText: "¿En qué año murió Michael Jackson?",
    options: ["2008", "2009", "2010", "2011"],
    correctAnswerIndex: 1,
    explanation: "2009.",
    category: CategoryId.ENTERTAINMENT,
    difficulty: "easy"
  },
  {
    questionText: "¿Cuál es el verdadero nombre de Bad Bunny?",
    options: ["Benito Antonio Martínez Ocasio", "Juan Carlos Ozuna", "Ramón Luis Ayala", "José Álvaro Osorio"],
    correctAnswerIndex: 0,
    explanation: "Benito Antonio Martínez Ocasio.",
    category: CategoryId.ENTERTAINMENT,
    difficulty: "medium"
  },
  {
    questionText: "¿Quién es el máximo goleador de la historia del fútbol?",
    options: ["Pelé", "Cristiano Ronaldo", "Messi", "Romario"],
    correctAnswerIndex: 1,
    explanation: "Cristiano Ronaldo.",
    category: CategoryId.SPORTS,
    difficulty: "medium"
  },
  {
    questionText: "¿Cuántos huesos tiene el ser humano?",
    options: ["150", "206", "300", "250"],
    correctAnswerIndex: 1,
    explanation: "206.",
    category: CategoryId.SCIENCE,
    difficulty: "easy"
  }
];