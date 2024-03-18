import React from 'react'

const Menu = () => {
    const posts =[
        {
        id:1,
        title:"sopdfg  herwhgherg",
        desc: "loewfohorhwfgwerhfgb lorem23sxgvl the majoe of the life is the is the kidf e",
        img:"../src/img/technical.jpg"
      },
        {
        id:2,
        title:"sopdfg  herwhgherg",
        desc: "loewfohorhwfgwerhfgb the3 the important of the task is theat the peoplle people are are arew thare the where ",
        img:"../src/img/technical.jpg"
      },
        {
        id:3,
        title:"sopdfg  herwhgherg",
        desc: "loewfohorhwfgwerhfgb",
        img:"../src/img/technical.jpg"
      },
        {
        id:4,
        title:"sopdfg  herwhgherg",
        desc: "loewfohorhwfgwerhfgb",
        img:"../src/img/technical.jpg"
      },
        {
        id:5,
        title:"sopdfg  herwhgherg",
        desc: "loewfohorhwfgwerhfgb",
        img:"../src/img/technical.jpg"
      },
    ]
  return (
    <div className='menu'>
        <h1>Other posts you like </h1>

        {posts.map((post) => (
         <div className="post" key={post.id}>

            <img src={post.img} alt="" />
            <h2>{post.title}</h2>
            <button>Read More</button>
         </div>
        
        ))}
    
    </div>
  )
}

export default Menu