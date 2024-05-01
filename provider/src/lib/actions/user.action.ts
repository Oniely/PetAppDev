"use server";

import { revalidatePath } from "next/cache";
import { Provider } from "../models/user.model";
import { connectDB } from "../mongoose";

export async function fetchUser(userId: string) {
  try {
    connectDB();

    return await Provider.findOne({ userId });
  } catch (error: any) {
    throw new Error(`Failed to fetch user: ${error.message}`);
  }
}

interface UserParams {
  userId: string;
  phoneNumber: string;
  companyName: string;
  typeOfProvider: string;
  bio: string;
  image_url: string;
  experienceYears: number;
  hourlyRate: number;
  onboarded: boolean;
  path: string;
}

export async function upsertUser({
  image_url,
  userId,
  phoneNumber,
  companyName,
  typeOfProvider,
  bio,
  experienceYears,
  hourlyRate,
  onboarded,
  path,
}: UserParams) {
  try {
    connectDB();

    await Provider.findOneAndUpdate(
      { userId },
      {
        image_url,
        phoneNumber,
        companyName,
        typeOfProvider,
        bio,
        experienceYears,
        hourlyRate,
        onboarded,
      },
      { upsert: true }
    );

    revalidatePath(path);
  } catch (error: any) {
    throw new Error(`Failed to insert/update user: ${error.message}`);
  }
};
