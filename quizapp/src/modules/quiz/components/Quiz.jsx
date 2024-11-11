import React, { useState, useEffect } from 'react';
//import { apiClient } from '../../../shared/services/api-client.js';
import { Link } from 'react-router-dom';
import '../styles/Quiz.css'
import  antSynImage from '../images/ant-syn.png';
import errorIdentImage from '../images/error-identification.png';
import idiomsPhrases from '../images/idioms-phrases.png';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { IconButton } from '@mui/material';

export const Quiz = () => {
  const Section = ({ title, description, buttonText, align, image, link}) => {
    return (
      <div className={`section ${align}`}>
        {align === 'left' ? (
          <div className="content">
            <h2>{title}</h2>
            <p>{description}</p>
            <Link to={link}>
              <button>{buttonText}</button>
            </Link>
          </div>
        ) : (
          <div className="content">
            
            <h2>{title}</h2>
            <p>{description}</p>
            <Link to={link}>
              <button>{buttonText}</button>
            </Link>
          </div>
        )}
        <img src={image} alt={title} className={align === 'left' ? 'right-image' : 'left-image'} />
      </div>
    );
  };

  return (
    <section className="explore-quizzes">
      <h2>Explore Our Career Quizzes!</h2>
      <p>Take our quizzes to assess your language skills and get feedback to improve your vocabulary.</p>
      <Section
        title="Antonyms & Synonyms"
        description="Antonyms and synonyms are two sides of the same coin. In this quiz, you'll be challenged to think of both the opposite of a given word and a word that means the same thing."
        buttonText="Take Quiz"
        align="left"
        image={antSynImage}
        link= "/syn-ant"
      />
      <Section
        title="Error Identification"
        description="Grammar gurus, assemble! In this quiz, you'll be presented with sentences that contain errors in grammar, punctuation, or spelling. Can you spot the mistake and correct it?"
        buttonText="Take Quiz"
        align="right"
        image={errorIdentImage}
        link="/error-id"
      />
      <Section
        title="Idioms & Phrases"
        description="Idioms and phrases can be tricky to understand, but they add flavor to our language! In this quiz, you'll be given an idiom or phrase and asked to identify its meaning. Can you figure out what 'break a leg' really means?"
        buttonText="Take Quiz"
        align="left"
        image={idiomsPhrases}
        link="/idiom-phrases"
      />
    </section>
  );
};
