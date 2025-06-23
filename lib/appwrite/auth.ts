"use server";

import { Account, Client } from "appwrite";
import { appwriteConfig } from "@/lib/appwrite/config";

/**
 * Creates an OAuth2 session with Google using Appwrite.
 * Redirects the user to the Appwrite OAuth2 consent screen.
 */
export async function loginWithGoogle() {
  const client = new Client()
    .setEndpoint(appwriteConfig.endpointUrl)
    .setProject(appwriteConfig.projectId);

  const account = new Account(client);

  try {
    // Redirect back to the root page after successful or failed login
    await account.createOAuth2Session("google", "/", "/");
  } catch (error) {
    console.error("Failed to sign in with Google", error);
    throw error;
  }
}
