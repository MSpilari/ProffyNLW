import React from 'react'
import { Route } from 'react-router-dom'

import Landing from './pages/Landing'
import StudyPage from './pages/StudyPage'
import ClassesPage from './pages/ClassesPage'

const Routes = () => {
    return(
        <>
            <Route path='/' exact component={ Landing }/>
            <Route path='/study' component={ StudyPage } />
            <Route path='/give-classes' component={ ClassesPage} />
        </>
    )
}

export default Routes
