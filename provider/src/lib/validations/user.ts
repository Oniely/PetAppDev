import { z } from "zod";

export const UserValidation = z.object({
    image_url: z.string().url().min(1),
    phoneNumber: z.string().min(11),
    companyName: z.string().min(1),
    typeOfService: z.string().min(1),
    bio: z.string().min(2).max(1000),
    experienceYears: z.number(),
    hourlyRate: z.number(),
})