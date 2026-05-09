import {Routes, Route} from 'react-router-dom';
import Home from '../layout/Home';
import Dashboard from '../pages/Dashboard';
import AddMedicine from '../pages/AddMedicine';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />}>
                <Route index element={<Dashboard />} />  
                <Route path="add-medicine" element={<AddMedicine />} /> 
            </Route>
        </Routes>
    )
}