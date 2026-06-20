import {prisma} from './lib/prisma';

const main = async()=>{

    const user = await prisma.user.create({
        data : {
            name : 'Shakib Hossen',
            email : 'sakib@gmail.com'
        }
    })

    console.log('created user is : ',user);

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