import { Routes, Route } from 'react-router-dom';

import { SingIn } from '../pages/SingIn/index.jsx';
import { SingUp } from '../pages/SingUp/index.jsx';


export function AuthRoutes() {
    return(
        <Routes>
            <Route path='/' element={<SingIn />}/>
            <Route path='/register' element={<SingUp />}/>
        </Routes>
    );
}