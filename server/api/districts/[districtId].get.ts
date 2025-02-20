import districts from "@/server/data/districts";

export default defineEventHandler((event) => {
    const districtId = Number(event.context.params?.districtId);
    return districts.find((d) => d.id === districtId) || { error: "District not found" };
});
