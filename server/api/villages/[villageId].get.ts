import villages from "@/server/data/villages";

export default defineEventHandler((event) => {
    const villageId = Number(event.context.params?.villageId);
    return villages.find((v) => v.id === villageId);
});
