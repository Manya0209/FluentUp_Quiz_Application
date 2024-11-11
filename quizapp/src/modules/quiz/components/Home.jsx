import React from 'react'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';
import { VocabularyWords } from "../components/Animation";
import '../styles/home.css';
import { useState } from 'react';
import { Icon } from '@mui/material';
import { Star, School, TrendingUp } from '@mui/icons-material';

export const Home = () => {
  // const QuizCard = ({ title, description, bgColor }) => {
  //   return (
  //     <div style={{ padding: '20px', border: '1px solid #DEB69C', borderRadius: '10px', marginBottom: '20px', backgroundColor: bgColor }}>
  //       <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: '#F0C8A3' }}>{title}</h4>
  //       <p style={{ fontSize: '16px', color: '#666' }}>{description}</p>
  //       <Button variant="contained" style={{ backgroundColor: '#9C9797', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
  //         Take Quiz
  //       </Button>
  //     </div>
  //   );
  // };

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    { question: "What types of quizzes are available?", answer: "We offer quizzes on antonyms & synonyms, error identification, and idioms & phrases." },
    { question: "How can I track my progress?", answer: "You can view your quiz history and performance in your profile." },
    { question: "Is there a limit to the number of quizzes I can take?", answer: "No, you can take as many quizzes as you like!" },
    { question: "How do I reset my password?", answer: "You can reset your password by clicking on 'Forgot Password' on the login page." },
    { question: "Can I access quizzes on mobile?", answer: "Yes, our quizzes are mobile-friendly and can be accessed on any device." },
    { question: "Who can I contact for support?", answer: "For support, please reach out to our team via the 'Contact Us' page." }
  ];

  return (
    <div style={{marginTop:'62px'}}>
      <header style={{ padding: '20px', backgroundColor: '#CD9692', height: '86vh', width: '97%' }}>

        <h1 style={{
          marginTop: 0,
          marginLeft:'30px',
          fontSize: '76px',
          fontWeight: 'bold',
          color: '#fff',
          display: 'flex', flexWrap:'wrap', width: '50%'
        }}>Welcome to <span style={{color: '#F0C8A3'}}>FluentUp</span></h1>
        <div>
  <p style={{ fontSize: '25px', marginLeft: '100px', color: '#333333', display: 'flex', flexWrap: 'wrap', width: '20%', marginTop:'-25px'}}>Advance your Vocabulary</p>
  <p style={{ fontSize: '20px', color: 'white', marginTop:'-25px', marginLeft: '50px' }}>Explore Our Career Quizzes!</p>
</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Button
            variant="contained"
            style={{
              backgroundColor: '#9C9797',
              color: '#fff',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginLeft:'100px',
              marginTop:'30px',
              ':hover': {
                backgroundColor: '#B8796D',
              },
            }}
          >
            <Link to= "register" style={{color: '#fff', textDecoration:'none'}}>Free SignUp</Link>
            </Button>
          <div style={{ width: '40%', height: '86vh', backgroundColor: '#CD9692',  position:'absolute', top:'98px', left: 'calc(100% - 45%)'  }}>
            {/* Animation will go here */}
            <VocabularyWords/>
          </div>
        </div>  
      </header>

      {/* <section style={{ padding: '20px' }}>
        <h2 style={{ fontSize: '36px', fontWeight: 'bold', color: '#9C9797' }}>Explore Our Career Quizzes!</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <QuizCard title="Easy Level" description="Test your knowledge of basic vocabulary words" bgColor="#E0F2F1" />
          <QuizCard title="Advance Level" description="Challenge your skills with advanced vocabulary words" bgColor="#FEF0F3" />
        </div>
      </section> */}

      <section style={{ padding: '20px' }}>
  <h2 style={{ fontSize: '36px', fontWeight: 'bold', color: '#9C9797' }}>Unlock the Power of FluentUp!</h2>
  <p style={{ fontSize: '18px', color: '#CD9692' }}>Discover the benefits of using FluentUp to improve your language skills:</p>

  <div style={{ display: 'flex', justifyContent: 'pace-between', flexWrap: 'nowrap' }}>
    <div class="card" style={{ width: '30%', marginRight: '20px', backgroundColor: '#FEF7E5', padding: '20px', borderRadius: '10px', border: '1px solid #F0C8A3' }}>
      <h4 style={{ fontSize: '20px', fontWeight: 'bold', color: '#DEB69C' }}>Easy Level Quizzes</h4>
      <p style={{ fontSize: '16px', color: '#CD9692' }}>Improve your vocabulary skills with our easy level quizzes, perfect for beginners or those looking to refresh their language skills.</p>
      
    </div>

    <div class="card" style={{ width: '30%', marginRight: '20px', backgroundColor: '#FEF7E5', padding: '20px', borderRadius: '10px', border: '1px solid #F0C8A3' }}>
      <h4 style={{ fontSize: '20px', fontWeight: 'bold', color: '#DEB69C' }}>Advance Level Quizzes</h4>
      <p style={{ fontSize: '16px', color: '#CD9692' }}>Challenge your language skills with our advance level quizzes, ideal for those looking to improve their language skills for career advancement.</p>
      
    </div>

    <div class="card" style={{ width: '30%', backgroundColor: '#FEF7E5', padding: '20px', borderRadius: '10px', border: '1px solid #F0C8A3' }}>
      <h4 style={{ fontSize: '20px', fontWeight: 'bold', color: '#DEB69C' }}>Detailed Feedback</h4>
      <p style={{ fontSize: '16px', color: '#CD9692' }}>Get detailed feedback on your quiz performance, including marks and reasons for correct and incorrect answers.</p>
      
    </div>
    </div>
  <Button variant="contained"  className="start-improving-button" style={{ backgroundColor:'#CD9692', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', top: '20px', left:'490px', width:'30', marginBottom: '40px' }}>
        <Link to="quiz" style={{color: '#fff', textDecoration:'none'}}>Start Improving</Link>
  </Button>
    </section>

    <section style={{ padding: '40px', textAlign: 'center' }}>
  <h2 style={{ fontSize: '28px', color: '#DEB69C', marginBottom: '20px' }}>Why Choose FluentUp?</h2>
  <div style={{ display: 'flex', justifyContent: 'space-around', margin: '0 auto', width: '80%' }}>
    <div style={{ width: '30%' }}>
      <Icon style={{ fontSize: '80px', color: '#9C9797', marginBottom: '10px' }}><Star /></Icon>
      <h3 style={{ fontSize: '22px', color: '#CD9692' }}>Engaging Quizzes</h3>
      <p style={{ color: '#777' }}>Challenge yourself with fun and educational quizzes that boost your language skills.</p>
    </div>
    <div style={{ width: '40%' }}>
      <Icon style={{ fontSize: '80px', color: '#9C9797', marginBottom: '10px' }}><School /></Icon>
      <h3 style={{ fontSize: '22px', color: '#CD9692' }}>Skill-Building Exercises</h3>
      <p style={{ color: '#777' }}>Enhance your language proficiency through targeted exercises designed to build essential skills.</p>
    </div>
    <div style={{ width: '30%' }}>
      <Icon style={{ fontSize: '80px', color: '#9C9797', marginBottom: '10px' }}><TrendingUp /></Icon>
      <h3 style={{ fontSize: '22px', color: '#CD9692' }}>Track Your Progress</h3>
      <p style={{ color: '#777' }}>View your quiz history and track your progress over time.</p>
    </div>
  </div>
</section>

    <section className="faq-section">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        {faqItems.map((item, index) => (
          <div key={index} className="faq-item">
            <div 
              className="faq-question"
              onClick={() => toggleAnswer(index)}
            >
              {item.question}
              <span className="faq-plus-sign">{openIndex === index ? '-' : '+'}</span>
            </div>
            <div 
              className={`faq-answer ${openIndex === index ? 'show' : ''}`}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </section>   

    </div>  
);
};