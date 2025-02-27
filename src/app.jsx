
import { BrowserRouter, Routes, Route } from 'react-router';
import Layout from './layouts/Layout';
import LayoutChat from './layouts/LayoutChat';
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<Layout />} />
                <Route path="/chat/*" element={<LayoutChat />} />
                <Route path='*' element={<h1>Not Found</h1>} />
            </Routes>
        </BrowserRouter>
    )



}
export default App;