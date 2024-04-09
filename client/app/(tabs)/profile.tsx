import { useAuth } from "@clerk/clerk-expo";
import { Link, Redirect } from "expo-router";
import { useEffect } from "react";
import { View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
	const { isSignedIn, signOut } = useAuth();

	return (
		<SafeAreaView className="flex-1 px-4 pt-6">
			<Text>Profile</Text>
      {isSignedIn && (
        <Link href={"/(auth)/login"} asChild>
          <Pressable onPress={() => signOut()} className="border p-3">
            <Text className="text-center">Logout</Text>
          </Pressable>
        </Link>
      )}
		</SafeAreaView>
	);
};

export default Profile;
