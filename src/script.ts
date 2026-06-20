import {prisma} from './lib/prisma';

const main = async()=>{

    const users = await prisma.user.createMany({
        data : [
            {
                name : 'Ariyan Ahmed Shakib',
                email : 'ariyran@gmail.com'
            },
            {
                name : 'Niloy Khan',
                email : 'niloy@gmail.com'
            },
            {
                name : 'Imran Bhuyan',
                email : 'imran@gmail.com'
            },
            {
                name : 'Foysal Ahmed',
                email : 'foysal@gmail.com'
            },
            {
                name : 'Sajid Mahmud',
                email : 'sajid@gmail.com'
            },
            {
                name : 'Moni',
                email : 'moni@gmail.com'
            }
        ]
    })

    console.log('created users are : ',users);

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