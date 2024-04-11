import { envVariables } from "@/config/env-variables";
import { createClient } from "@supabase/supabase-js";

export async function uploadAvatar(image: File) {
	const { supabaseUrl, supabaseKey } = envVariables.supabase;
	const supabase = createClient(supabaseUrl, supabaseKey);
	const data = await supabase.storage.from("avatars").upload(`${image?.name}_${new Date().getTime()}`, image);
	const dataUrl = await supabase.storage.from("avatars").getPublicUrl(data?.data?.path!);
	console.log(data);

	return dataUrl?.data?.publicUrl;
}
