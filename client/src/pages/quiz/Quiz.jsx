import { SectionWrapper } from '@/assets/styles/HomeLayout'
import QuizBody from '@/components/QuizComponents/QuizBody'
import QuizSummary from '@/components/QuizComponents/QuizSummary'
import React from 'react'

function Quiz() {
    return (
        <>
            <SectionWrapper>

                <div className='grid sm:grid-cols-12'>
                    <div className='min-h-40 col-span-2 bg-slate-600 ' >

                    </div>
                    <div className='min-h-40 col-span-7 '>

                        {/* <QuizSummary
                            SummaryTitle={'What is my Attachment Style?'}
                            SummarySubtitle={'Secure, anxious, avoidant, and disorganized—which one are you?'}
                            ShortDescription={'This short free 15-question quiz measures feelings associated with the four main attachment styles—secure, anxious, avoidant, and disorganized. This quiz is not a formal medical or diagnostic test and should not be interpreted as clinical or medical advice.'}
                            ContentTitle={'The Four Attachment Styles '}
                            ContentSubtitle={'Early attachment styles may not be exactly the same as those in adult relationships, but they can be a good predictor of adult behavior patterns.'}
                        />
                        <QuizBody
                            question={question}
                            handleAnswer={handleAnswer}
                            selectedAnswer={selectedAnswer}
                            disableSelection={disableSelection}
                        /> */}

                    </div>
                    <div className='min-h-40 col-span-3 bg-teal-400'> Right</div>

                </div>
            </SectionWrapper>

        </>
    )
}

export default Quiz
