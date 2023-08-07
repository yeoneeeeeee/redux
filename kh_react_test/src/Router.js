// 전체 코드에도 있음

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

<Router>

    <div className='container'>

        <nav>

            <ul>

                <li>

                    <Link to="/">List</Link>

                </li>

                <li>

                    <Link to="/create">Add New Movie</Link>

                </li>

            </ul>

        </nav>

        <Routes>

            <Route path="/" element={<Home movies={movies} onDeleteMovie={handleDeleteMovie} />} />

            <Route path="/create" element={<CreateMovie newMovie={newMovie} onInputChange={handleInputChange} onAddMovie={handleAddMovie} />} />

        </Routes>

    </div>

</Router>