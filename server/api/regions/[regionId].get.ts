import regions from "@/server/data/regions";

export default defineEventHandler((event) => {
    const regionId = Number(event.context.params?.regionId);
    return regions.find((r) => r.id === regionId) || { error: "Region not found" };
});
