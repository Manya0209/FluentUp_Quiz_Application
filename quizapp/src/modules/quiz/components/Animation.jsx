// import React, { useState, useEffect } from 'react';

// export const VocabularyWords = () => {
//   const [words, setWords] = useState([
//     { text: 'Marketing', x: 50, y: 50 },
//     { text: 'Management', x: 100, y: 200 },
//     { text: 'Finance', x: 200, y: 100 },
//     { text: 'Communication', x: 300, y: 250 },
//     { text: 'Leadership', x: 40, y: 150 },
//     { text: 'Reskilling', x: 250, y: 180 },
//     { text: 'Headhunter', x: 350, y: 80 },
//     { text: 'Negotiation', x: 80, y: 280 },
//     { text: 'Delegation', x: 80, y: 380 },
//     { text: 'Ethics ', x: 280, y: 380 },
//   ]);

//   useEffect(() => {
//     const animate = () => {
//       words.forEach((word, index) => {
//         word.x += Math.random() * 2 - 1;
//         word.y += Math.random() * 2 - 1;
//         if (word.x < 0) word.x = 0;
//       if (word.x > (0.4 * window.innerWidth)) word.x = 0.4 * window.innerWidth; // 40% of window width
//       if (word.y < 0) word.y = 0;
//       if (word.y > 0.9 * window.innerHeight) word.y = 0.9 * window.innerHeight; // 86vh height
//     });
//       setWords([...words]);
//       requestAnimationFrame(animate);
//     };
//     animate();
//   }, []);

//   function getRandomColor() {
//     const colors = ['#8B9467', '#FFC499', '#C9E4CA', '#F7D2C4', '#E5D8B6'];
//     return colors[Math.floor(Math.random() * colors.length)];
//   }

//   return (
//     <div
//       style={{
//         width: '40%',
//         height: '86 vh',
//       }}
//     >
//       {words.map((word, index) => (
//         <div
//           key={index}
//           style={{
//             position: 'absolute',
//             top: word.y,
//             left: word.x,
//             fontSize: '24px',
//             color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
//             padding: '10px',
//             borderRadius: '10px',
//             backgroundColor: getRandomColor(),
//             boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
//           }}
//         >
//           {word.text}
//         </div>
//       ))}
//     </div>
//   );
// };

// // export default VocabularyWords;

import React, { useState, useEffect } from 'react';

export const VocabularyWords = () => {
  const [words, setWords] = useState([
    { text: 'Marketing', opacity: 0, color: 'white', x: 100, y: 100 },
    { text: 'Management', opacity: 0, color: 'white', x: 200, y: 150 },
    { text: 'Finance', opacity: 0, color: 'white', x: 300, y: 200 },
    { text: 'Communication', opacity: 0, color: 'white', x: 250, y: 250 },
    { text: 'Leadership', opacity: 0, color: 'white', x: 50, y: 200 },
    { text: 'Reskilling', opacity: 0, color: 'white', x: -15, y: 120 },
    { text: 'Headhunter', opacity: 0, color: 'white', x: -50, y: 150 },
    { text: 'Negotiation', opacity: 0, color: 'white', x: 10, y: 250 },
    { text: 'Delegation', opacity: 0, color: 'white', x: 150, y: 230 },
    { text: 'Ethics ', opacity: 0, color: 'white', x: 180, y: 180 },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let index = 0;
    const animate = () => {
      if (index < words.length) {
        const currentWord = words[index];
        currentWord.opacity = 0;
        currentWord.color = 'white';
        setTimeout(() => {
          currentWord.opacity = Math.sin(Date.now() * 0.01) * 0.5 + 0.5;
          if (currentWord.opacity > 0.9) {
            currentWord.color = 'black';
          }
          setWords([...words]);
        }, 800);
        index++;
        requestAnimationFrame(animate);
      }
    };
    animate();
  }, [words]);

  return (
    <div
      style={{
        width: '40%',
        height: '86vh',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Person sitting at a desk image */}
      <img
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkfs0xM6RZCseQ8ZmSl5dVwjPOVSSGSA_CvQ&s'
        alt="Person sitting at a desk"
        style={{
          width: '200px',
          height: '250px',
          position: 'absolute',
          top: '79%',
          left: '80%',
          transform: 'translate(-50%, -50%)',
          mixBlendMode:'multiply',
        }}
      />

      {/* Vocabulary words fading in and out */}
      {words.map((word, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            top: word.y,
            left: word.x,
            fontSize: '24px',
            color: word.color,
            opacity: word.opacity,
            whiteSpace: 'nowrap',
          }}
        >
          {word.text}
        </div>
      ))}
    </div>
  );
};