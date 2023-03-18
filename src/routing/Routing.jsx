import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Home } from '../components/pages/Home';
import { Edit } from '../components/pages/Edit';
import { Tshirts } from '../components/pages/Tshirts';
import { Add } from '../components/pages/Add';
import { Nav } from '../components/layout/Nav';


export const Routing = () => {
    return (
        <BrowserRouter>
            {/* Header */}
            <Header/>
            <Nav/>
            {/* Content and routes */}
            <section id="content" className="content">
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/inicio' element={<Home />}></Route>
                    <Route path='/tshirts' element={<Tshirts />}></Route>
                    <Route path='/add-tshirt' element={<Add />}></Route>
                    <Route path='/edit/:id' element={<Edit/>}></Route>
                </Routes>
            </section>
        </BrowserRouter>
    )
}