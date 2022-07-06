import {useParams} from 'react-router-dom'

function Post() {

  const params = useParams()

  return (
    <div>
      <h1>Post {params.slug}</h1>
      <p>Name: {params.name}</p>
    </div>
  )
}

export default Post
