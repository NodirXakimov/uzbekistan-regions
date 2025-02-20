import villages from "@/server/data/villages";

export default defineEventHandler((event) => {
    const districtId = Number(event.context.params?.districtId);
    return villages.filter((v) => v.district_id === districtId);
});
