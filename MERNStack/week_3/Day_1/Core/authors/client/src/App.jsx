import {Routes , Route , Navigate} from 'react-router-dom'
import Navbar from './components/navbar'
import AllAuthors from './pages/AllAuthors'
import CreateAuthor from './pages/CreateAuthor'
import EditAuthor from './pages/EditAuthor'


function App() {

  return (
    <>
    <Navbar/>
  <Routes>
  <Route path='/' element={<Navigate to={'/authors'} />} />
  <Route path='/authors' element={<AllAuthors/>} />
  <Route path='/authors/new' element={<CreateAuthor/>} />
  <Route path='/authors/:id/edit' element={<EditAuthor/>} />
  </Routes>
    </>
  )
}

export default App