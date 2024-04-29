"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserValidation } from "@/lib/validations/user";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useState } from "react";
import { UploadButton } from "@/utils/uploadthing";

interface Props {
	user?: {
		id: string;
		objectId: string;
		username: string;
		name: string;
		bio: string;
		image: string;
	};
}

const AccountProfile = ({ user }: Props) => {
	const [url, setUrl] = useState("");

	const form = useForm({
		resolver: zodResolver(UserValidation),
		defaultValues: {
			image_url: url || user?.image || "",
			phoneNumber: "",
			companyName: "",
			typeOfService: "",
			bio: "",
			experienceYears: 0,
			hourlyRate: 0,
		},
	});

	async function onSubmit(values: z.infer<typeof UserValidation>) {
		console.log(values);
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex flex-1 flex-col justify-start gap-6"
			>
				<FormField
					control={form.control}
					name="image_url"
					render={({ field }) => (
						<FormItem className="flex flex-col gap-3 w-full">
							<FormLabel>Profile Image</FormLabel>
							<FormControl>
								<div className="w-full h-full border">
									<UploadButton
										endpoint="media"
										onClientUploadComplete={(res) => {
											setUrl(res);
										}}
										onUploadError={(err: Error) => {
											console.log(
												`Uploadthing Error: ${err}`
											);

											alert(err.message);
										}}
									/>
								</div>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="phoneNumber"
					render={({ field }) => (
						<FormItem className="flex flex-col gap-3 w-full">
							<FormLabel>Contact Number</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="companyName"
					render={({ field }) => (
						<FormItem className="flex flex-col gap-3 w-full">
							<FormLabel>
								Company Name{" - "}
								<span className="text-dark-gray/70 font-light">
									{"(*Invidual: your name)"}
								</span>
							</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="typeOfService"
					render={({ field }) => (
						<FormItem className="flex flex-col gap-3 w-full">
							<FormLabel>
								Type of Service{" - "}
								<span className="text-dark-gray/70 font-light">{"(*Veterinary, Onboarder, etc.)"}</span>
							</FormLabel>
							<FormControl>
								<Input {...field} />
							<FormMessage />
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="bio"
					render={({ field }) => (
						<FormItem className="flex flex-col gap-3 w-full">
							<FormLabel>Bio</FormLabel>
							<FormControl>
								<Textarea {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button
					type="submit"
					className="bg-dark-gray hover:bg-dark-gray/80"
				>
					Continue
				</Button>
			</form>
		</Form>
	);
};

export default AccountProfile;