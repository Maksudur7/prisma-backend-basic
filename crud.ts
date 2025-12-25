import { prisma } from "./lib/prisma";

async function run() {
    // const createUser = await prisma.user.create({
    //     data: {
    //         name: "John Doe",
    //         email: "John.Doe@example.com"
    //     }
    // })
    // console.log('created user :', createUser);

    // create post for user id = 1 

    // const createPost = await prisma.post.create({
    //     data: {
    //         title: "This is title",
    //         content: "This is content",
    //         authorId: 1
    //     }
    // })
    // console.log("createPost", createPost);

    // create profile

    // const createProfile = await prisma.profile.create({
    //     data: {
    //         bio: "This is bio",
    //         userId: 1
    //     }
    // })
    // console.log("createProfile", createProfile);

    // retrive all user 

    // const allUsers = await prisma.user.findMany({
    //     include: {
    //         posts: true,
    //         profile: true
    //     }
    // });
    // console.dir( allUsers, { depth: Infinity });

    // //update user data
    // const profileUpdate = await prisma.profile.update({
    //     where: {
    //         userId: 1
    //     },
    //     data: {
    //         bio: "Updated bio content",
    //         dateOfBirth: new Date("1990-01-01"),
    //     },
    //     select: {
    //         id: true,
    //         bio: true,
    //         user: {
    //             select:{
    //                 name: true,
    //                 email: true
    //             }
    //         },
    //     }

    // })
    // console.log("profileUpdate", profileUpdate);

    // delete post 
    // const getUserDataById = await prisma.user.findUnique({
    //     where: {
    //         id: 1
    //     },
    //     include: {
    //         posts: true,
    //         profile: true
    //     }
    // })
    // console.log(getUserDataById);

    // const deletUser = await prisma.user.delete({
    //     where: {
    //         id: 5
    //     }
    // })

    // console.log(deletUser);

    const upsertUser = await prisma.user.upsert({
        where: {
            email: 'John.Doe@example.com',
        },
        update: {
            name: 'Viola the Magnificent',
        },
        create: {
            email: 'viola@prisma.io',
            name: 'Viola the Magnificent',
        },
    })
    console.log('Upserted user:', upsertUser);

}
run()