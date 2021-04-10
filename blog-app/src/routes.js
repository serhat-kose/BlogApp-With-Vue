import showBlogs from './components/ShowBlogs';
import addBlog from './components/AddBlog';



export default[
    {
        path:'/',
        component:showBlogs
    },
    {
        path:'/add',
        component:addBlog
    },
]