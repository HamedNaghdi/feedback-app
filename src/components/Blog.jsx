import {Navigate, useNavigate, Routes, Route} from 'react-router-dom'

function Blog() {

  const status = 200
  const navigate = useNavigate()

  const onClick = () => {
    console.log('Hello');
    navigate('/about')
  }

  if (status === 404){
    return <Navigate to="/notfound" />
  }

  return (
    <div>
      <h1>Blog</h1>
      <button onClick={onClick}>Click</button>
      <Routes>
        <Route path="/show" element={<h1>Hello world!</h1>}></Route>
      </Routes>
    </div>
  )
}

export default Blog
