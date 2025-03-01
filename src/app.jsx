import { BrowserRouter, Routes, Route } from 'react-router';
import Layout from './layouts/Layout';
import LayoutChat from './layouts/LayoutChat';
import Toast from './components/Notifications-Toast/Toast';
import GlobalProvider from './context/Context';
function App() {
    return (
        <BrowserRouter>
            <GlobalProvider>
            <Toast arrayToast={[{type:"check",message:"Coneccion realizada con exito"},{type:"info",message:"Coneccion realizada con exito"}]} type="check" message="Coneccion realizada con exito" />
            <Routes>
                <Route index path="/" element={<Layout />} />
                <Route path="/chat/*" element={<LayoutChat />} />
                <Route path='*' element={<h1>Not Found</h1>} />
            </Routes>
            </GlobalProvider>
        </BrowserRouter>
    )



}
export default App;