import { prisma } from "./lib/prisma";

const main = async () => {
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
        include: {
            posts: true,
        },
    });
    console.log(allUsers);

    //? posting a new post for a specific user

    const newPost = await prisma.post.createMany({
        data: [
            {
                title: "Getting Started with Web Development",
                content:
                    "Web development can seem overwhelming at first, but mastering HTML, CSS, and JavaScript provides a strong foundation for building modern applications.",
                published: true,
                authorId: 1,
            },
            {
                title: "My Journey Learning Backend Development",
                content:
                    "After spending months on frontend technologies, I started learning Node.js, Express, and databases to understand how full-stack applications work.",
                published: true,
                authorId: 1,
            },
            {
                title: "Why Database Design Matters",
                content:
                    "A well-designed database improves performance, ensures data integrity, and makes applications easier to maintain as they grow.",
                published: true,
                authorId: 2,
            },
            {
                title: "Understanding SQL Joins",
                content:
                    "SQL joins allow data to be combined from multiple tables, making it possible to retrieve meaningful information from relational databases.",
                published: true,
                authorId: 2,
            },
            {
                title: "The Importance of Cybersecurity",
                content:
                    "Strong passwords, multi-factor authentication, and regular software updates are essential practices for protecting digital assets.",
                published: true,
                authorId: 3,
            },
            {
                title: "Privacy in the Digital Age",
                content:
                    "As more personal information is shared online, understanding privacy risks and data protection practices becomes increasingly important.",
                published: true,
                authorId: 3,
            },
            {
                title: "Exploring Artificial Intelligence",
                content:
                    "Artificial intelligence is transforming industries by enabling machines to learn patterns, make decisions, and automate complex tasks.",
                published: true,
                authorId: 4,
            },
            {
                title: "Machine Learning Basics",
                content:
                    "Machine learning focuses on training algorithms to identify patterns in data and make predictions without being explicitly programmed.",
                published: true,
                authorId: 4,
            },
            {
                title: "Tips for Becoming a Better Programmer",
                content:
                    "Consistent practice, building real-world projects, and reading other developers' code are effective ways to improve programming skills.",
                published: true,
                authorId: 5,
            },
            {
                title: "Version Control with Git",
                content:
                    "Git helps developers track changes, collaborate efficiently, and manage project history through branches and commits.",
                published: true,
                authorId: 5,
            },
            {
                title: "The Future of Cloud Computing",
                content:
                    "Cloud platforms provide scalable infrastructure and services that help organizations deploy applications faster and more reliably.",
                published: true,
                authorId: 6,
            },
            {
                title: "Introduction to DevOps",
                content:
                    "DevOps combines development and operations practices to improve software delivery, automation, and system reliability.",
                published: true,
                authorId: 6,
            },
            {
                title: "Building a Career in Technology",
                content:
                    "Success in technology comes from continuous learning, adaptability, and a willingness to solve challenging problems.",
                published: true,
                authorId: 7,
            },
            {
                title: "Why Soft Skills Matter for Developers",
                content:
                    "Communication, teamwork, and problem-solving are just as valuable as technical skills when working in professional software teams.",
                published: true,
                authorId: 7,
            },
        ],
    });
};

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.log(e);
        await prisma.$disconnect();
        process.exit(1);
    });
