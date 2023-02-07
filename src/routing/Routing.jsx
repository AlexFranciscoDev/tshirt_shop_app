import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import { Home } from '../components/pages/Home';
import { Tshirts } from '../components/pages/Tshirts';

export const Routing = () => {
    return (
        <BrowserRouter>
            {/* Header */}
            {/* Content and routes */}
            <section id="content" className="content">
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/inicio' element={<Home />}></Route>
                    <Route path='/tshirts' element={<Tshirts />}></Route>
                </Routes>
            </section>
        </BrowserRouter>
    )
}