import { prisma } from "@/lib";
import { AuthPayloadType, UpdateProfilePayloadType } from "@/types";

export const findByEmail = async (email: string) => {
    const user = await prisma.user.findUnique({
        where: { email },
    });

    return user;
};

export const createUser = async (payload: AuthPayloadType) => {
    const { email, fullName, avatar } = payload;

    const newUser = await prisma.user.create({
        data: {
            email,
            fullName,
            avatar,
        },
    });

    return newUser;
};

export const updateUser = async (payload: UpdateProfilePayloadType) => {
    const { id, fullName, avatar } = payload;

    const updatedUser = await prisma.user.update({
        data: {
            fullName,
            avatar,
        },
        where: { id },
    });

    return updatedUser;
};
