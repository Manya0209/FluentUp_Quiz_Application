import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../../modules/quiz/components/Home'
import { LeaderBoard } from '../../modules/quiz/components/LeaderBoard'
import { Quiz } from '../../modules/quiz/components/Quiz'
import { Register } from '../../modules/user/components/Register'
import { Login } from '../../modules/user/components/Login'
import { SynAnt } from '../../modules/quiz/components/SynAnt'
import { ErrorId } from '../../modules/quiz/components/ErrorId'
import { IdiomPhrases } from '../../modules/quiz/components/IdiomPhrases'

export const Major = () => {
  return (
    <div >
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="quiz" element={<Quiz/>}/>
            {/* <Route path="leaderboard" element={<LeaderBoard/>}/> */}
            <Route path="register" element={<Register/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="syn-ant" element={<SynAnt/>}/>
            <Route path= "error-id" element= {<ErrorId/>}/>
            <Route path= "idiom-phrases" element= {<IdiomPhrases/>}/>
        </Routes>
    </div>
  )
}
