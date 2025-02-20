import districts from "@/server/data/districts";

export default defineEventHandler((event) => {
    const regionId = Number(event.context.params?.regionId);
    return districts.filter((d) => d.region_id === regionId);
});
