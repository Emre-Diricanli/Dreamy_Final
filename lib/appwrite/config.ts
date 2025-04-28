export const appwriteConfig = {
    endpointUrl: process.env.NEXT_PUBLIC_DREAMY_APPWRITE_API_ENDPOINT! || 'https://cloud.appwrite.io/v1',
    projectId: process.env.NEXT_PUBLIC_DREAMY_APPWRITE_PROJECT_ID!,
    databaseId: process.env.NEXT_PUBLIC_DREAMY_APPWRITE_DATABASE_ID!,
    userCollectionId: process.env.NEXT_PUBLIC_DREAMY_APPWRITE_USERS_COLLECTION_ID!,
    dreamCollectionId: process.env.NEXT_PUBLIC_DREAMY_APPWRITE_DREAMS_COLLECTION_ID!,
    recurringElementsCollectionId: process.env.NEXT_PUBLIC_DREAMY_APPWRITE_RECURRING_ELEMENTS_COLLECTION_ID!,
    secretKey: process.env.NEXT_PUBLIC_DREAMY_APPWRITE_API_KEY!,

}