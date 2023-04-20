import { Regalos } from "../../App";

export const transformEntries = (entries: Record<string, FormDataEntryValue>): Omit<Regalos, "id"> => {
    const name = entries.regalo.toString().trim();
    const count = Number(entries.count);
    const imagen = entries.imagen.toString();
    const to = entries.to.toString();
    const price = Number(entries.price);

    return { count, imagen, name, price, to }
} 