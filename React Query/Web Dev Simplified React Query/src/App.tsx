import { useQuery, useMutation, useQueryClient} from '@tanstack/react-query'


const POSTS = [
  {id: 1, title: 'post1'},
  {id: 2, title: 'post2'},
  {id: 3, title: 'post3'},
  {id: 4, title: 'post4'}
]

function App() {
  const queryClient = useQueryClient()

  // const postQuery = useQuery({
  //   queryKey: ['posts'],
  //   queryFn: () => wait(100).then(() => [...POSTS])
  // })

  const newPostMutation = useMutation({
    mutationFn: (title) => {
      return wait(100).then(() => POSTS.push({id: crypto.randomUUID(), title}))
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['posts'])
    }
  })



  // /posts --> ['posts']
  // /post/1 --> ['posts', post.id]
  // /posts?authorId=1 --> ['posts', {authorId: 1}]
  // /posts/2/comments --> ['posts', post.id, comments ]

  const postQuery = useQuery({
    queryKey: ['posts'],
    queryFn: (obj) => wait(100).then(() => 
    {
      console.log(obj)
      return [...POSTS]
    }
    )
  })


  
  if(postQuery.isLoading) return <h1>Loading...</h1>
  if(postQuery.isError) 
    return 
  <pre>{JSON.stringify(postQuery.error)}</pre>


  return (
    <>
    {postQuery.data?.map(post => (
      <h1 key={post.id}>{post.title}</h1>
    ))}
    <button  onClick={() => {newPostMutation.mutate('NEW POST')}}>Add new</button>
    </>
  )
}

function wait(duration:number) {
  return new Promise(resolve => setTimeout(resolve, duration))
}
export default App
