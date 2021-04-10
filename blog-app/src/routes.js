import showBlogs from './components/ShowBlogs';
import addBlog from './components/AddBlog';
import singleBlog from './components/SingleBlog';



export default[
    {
        path:'/',
        component:showBlogs
    },
    {
        path:'/add',
        component:addBlog
    },
    {
        path:'/blog/:id',
        component:singleBlog
    }
]