const messages = [
  "Situación / Conjugación de Verga",

  "Exclamación / ¡¡¡VERGACION!!!",

  "Tristeza / ¡Qué buena verga!",

  "Grandeza/fuera de serie/grandioso / Vergatario",

  " Negación con ira / Ni de verga",

  "Negación Irónica / Verga si",

  "Confesión de amor / Verga, como te quiero mi amor",

  "Cobro de mora / Me pagais mi verga",

  "Sorpresa repentina / ¡¡¡A la verga!!!",

  "Verguenza, timidez, pena / Me da verga",

  "Inicio de oración / ¿Sabeis una verga?",

  "Casi, casi / De verguita",

  "Inicio de Riña / ¿qué es la verga chico?",

  "Dar una dirección / ¿veis esa verga de alla? bueno, al lado.",

  "Golpe fuerte / A buen vergajazo",

  "Tener problemas / ¡Que buen verguero!",

  "Algo extraño / Que verga tan rara",

  "Saludo Maracucho / ¡Epa! ¿Como está la verga?",

  "Irse a las manos / Se formó el verguero",

  "En estado de ebriedad / Echo verga",

  "Pedir opinión / ¿Cómo te pareció la verga?",

  "Pedir algo / Pásame esa verga",

  "Inicio de Tempestad / Lo que viene es verga",

  "Desespero / Veerga, Nojoda",

  "Despedida / me voy pa la verga",
];

const funnyCommit = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(`\x1b[34m${message}\x1b[89m`);
};

module.exports = {
  funnyCommit,
};
