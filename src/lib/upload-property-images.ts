import { envVariables } from "@/config/env-variables";
import { createClient } from "@supabase/supabase-js";

export async function uploadPropertyImages(files: File[]) {
	const { supabaseKey, supabaseUrl } = envVariables.supabase;
	const supabase = createClient(supabaseUrl, supabaseKey);
	try {
		if (!files) {
			console.log("No files found");
			return;
		}

		const data = await Promise.all(
			files?.map((file) => supabase.storage.from("property-images").upload(`${file?.name}_${new Date().getTime()}`, file))
		);

		const urls = data.map((image) => {
			const url = supabase.storage.from("property-images").getPublicUrl(image?.data?.path ?? "").data?.publicUrl;
			return url;
		});

		return urls;
	} catch (error) {
		console.log("Failed to upload images! ", error);
	}
}
