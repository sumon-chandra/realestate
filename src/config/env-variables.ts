import { deepFreeze } from "@/utils/deep-freeze";

export const envVariables = {
	kinde: {
		clientId: process.env.KINDE_CLIENT_ID!,
		clientSecret: process.env.KINDE_CLIENT_SECRET!,
		issuerUrl: process.env.KINDE_ISSUER_URL!,
		siteUrl: process.env.KINDE_SITE_URL!,
		postLoginDirectedUrl: process.env.KINDE_POST_LOGIN_REDIRECT_URL!,
		postLogoutDirectedUrl: process.env.KINDE_POST_LOGOUT_REDIRECT_URL!,
	},
	supabase: {
		supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL!,
		supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
	},
};

// Freeze the envVariables object.
deepFreeze(envVariables);
