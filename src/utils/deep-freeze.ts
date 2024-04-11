export function deepFreeze(object: any) {
	const propNames = Reflect.ownKeys(object);
	propNames.forEach((value) => {
		if ((value && typeof value === "object") || typeof value === "function") {
			deepFreeze(value);
		}
	});
	return Object.freeze(object);
}
