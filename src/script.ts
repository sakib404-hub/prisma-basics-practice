import {prisma} from './lib/prisma';

const main = async()=>{

    // const users = await prisma.user.createMany({
    //     data : [
    //         {
    //             name : 'Ariyan Ahmed Shakib',
    //             email : 'ariyran@gmail.com'
    //         },
    //         {
    //             name : 'Niloy Khan',
    //             email : 'niloy@gmail.com'
    //         },
    //         {
    //             name : 'Imran Bhuyan',
    //             email : 'imran@gmail.com'
    //         },
    //         {
    //             name : 'Foysal Ahmed',
    //             email : 'foysal@gmail.com'
    //         },
    //         {
    //             name : 'Sajid Mahmud',
    //             email : 'sajid@gmail.com'
    //         },
    //         {
    //             name : 'Moni',
    //             email : 'moni@gmail.com'
    //         }
    //     ]
    // })
     

    //? finding all the users including posts if they have any
    const allUsers = await prisma.user.findMany({
        include :{
            posts : true
        }
    })
    console.log(allUsers);

    //? posting a new post for a specific user

    const newPost = await prisma.post.createMany({
        data : [
            {
            title : 'My first post',
            content : 'This is my first post',
            published : true,
            authorId : 1
            },
            {
                title : 'My Second Post',
                content : 'This is my second post',
                published: true,
                authorId : 1
            }
        ]
    })
}

main()
    .then(async()=>{
        await prisma.$disconnect();
    })
    .catch(async(e)=>{
        console.log(e);
        await prisma.$disconnect();
        process.exit(1);
    })