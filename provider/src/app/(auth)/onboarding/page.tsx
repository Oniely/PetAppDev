import AccountProfile from "@/components/forms/AccountProfile";
import { currentUser } from "@clerk/nextjs/server";

const Onboarding = () => {
	/* const user = async () => await currentUser(); */

	return (
		<main className="mx-auto flex flex-col max-w-3xl px-10 py-20 w-full h-full self-start bg-low-orange/30">
			<h1 className="head-text">Onboarding</h1>
			<p className="-mt-8">Complete your profile now to continue</p>

			<section className="mt-9">
				<AccountProfile /* user={user!} */ />
			</section>
		</main>
	);
};

export default Onboarding;
