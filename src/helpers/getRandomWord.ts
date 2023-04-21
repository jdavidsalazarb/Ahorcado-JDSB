
const words:string[] = [

    'VIDEOJUEGO',
    'MUSICA',
    'TETRIS',
    'CEREZA',
    'AMAR',
    'ESTADIO',
    'FUTBOL'
];


export function getRandomWord() {
   
     const randomIndex = Math.floor(Math.random() * words.length);

     return words[randomIndex];

}