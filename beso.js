const user = args[0];
const touser = args[1];
const roll = Math.floor(Math.random() * 4);

const mensajes = [
  `${user} mensaje 1 ${touser}`,
  `${user} mensaje 2 ${touser}`,
  `${user} mensaje 3 ${touser}`,
  `${user} mensaje 4 ${touser}`
];

mensajes[roll];
