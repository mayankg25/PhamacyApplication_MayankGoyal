import {Routes, Route} from 'react-router-dom';
import Home from '../layout/Home';
import Dashboard from '../pages/Dashboard';
import AddMedicine from '../pages/AddMedicine';
import EditMedicine from '../pages/EditMedicine';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />}>
                <Route index element={<Dashboard />} />  
                <Route path="add-medicine" element={<AddMedicine />} />
                <Route path="edit-medicine/:id" element={<EditMedicine />} /> 
            </Route>
        </Routes>
    )
}