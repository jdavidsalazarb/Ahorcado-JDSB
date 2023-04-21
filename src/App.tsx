import { useEffect, useState } from 'react';
import './App.css';
import {HangImage} from './components/HangImage';
import {letters} from './helpers/letters';
import { getRandomWord } from './helpers/getRandomWord';
function App() {


const [word, setWord] = useState( getRandomWord() );

const [hiddenWord, setHiddenWord] = useState('_ '.repeat(word.length));

const [attempts, setAttempts] = useState(0);

const [lose, setLose] = useState(false);

const [won, setWon] = useState(false);



// Determinar si la persona perdió

useEffect(  () => {

    if(attempts >= 9){

      setLose(true);

    }


}, [attempts]);

// Determinar si la persona ganó
 

useEffect( () => {

  const hiddenWordCurrent = hiddenWord.split(' ').join('');

  if(hiddenWordCurrent === word){
    
   setWon(true);

  }


}, [hiddenWord] );


const resetGame = () => {

   const newWord = getRandomWord();

   setWord(newWord);
   setAttempts(0);
   setHiddenWord('_ '.repeat(newWord.length));
   setLose(false);
   setWon(false);

}


const checkLetter = (letter:string) => {

            if ( lose || won) return;
            
            if(!word.includes(letter)){

              setAttempts( Math.min( attempts + 1,9));

              return;
            }
     
      
const hiddenWordArray = hiddenWord.split(' ');
 

       for (let i= 0; i < word.length; i++){
      
          if(word[i] === letter) {
        
             hiddenWordArray[i] = letter;
              

          }
            

       }     
    
   setHiddenWord(hiddenWordArray.join(' '));

}

 return  (

 <div className="App">
    

   {/* Imagen del juego */}

    <HangImage imageNumber={attempts}/>

    {/* Palabra oculta */}

    <h3>{hiddenWord}</h3>

    {/* Contador de intentos */}

    <h3>Intentos: {attempts}</h3>


    {/* Mensaje perdio */}
    

    { (lose) 
    
    ? <h3>Perdió {word}</h3>
    
    : ''

    }

    {/* Mensaje Ganó */}
     {
     
     (won) 
     
     ? <h3>Felicidades, ganó</h3>
     
     : ''
     }
    
    
    {/* Botones de intentos */}
    
    {
   
     letters.map( ( letter ) => (

       <button 
       
       onClick={ () => checkLetter(letter)}
       
       key={ letter }>
      

        { letter }

        </button>

     ))
       

    }

    {/* Boton reiniciar juego */}
     <br /> <br />
    <button  
    onClick={ resetGame }
    
    >¿Reiniciar juego?</button>
 

 </div>

 )

};

export default App;
