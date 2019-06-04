export default(
    {
        path:'/mive',
        component:()=>import('@/views/Mive'),
        children:[
            {
                path:'city',
                component:()=>import('@/components/City')
            },
            {
                path:'comingplay',
                component:()=>import('@/components/comingPlay')
            },
            {
                path:'isplaying',
                component:()=>import('@/components/isPlaying')
            },
            {
                path:'search',
                component:()=>import('@/components/Search')
            },           
        ],
        redirect:'/mive/city'
   }
   
)