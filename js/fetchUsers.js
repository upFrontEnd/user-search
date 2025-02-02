export async function getUsers() {
  try {
    const res = await fetch("https://randomuser.me/api/?nat=fr&results=50");
    if (!res.ok) throw new Error("Erreur lors de la récupération des données");

    const { results } = await res.json();
    return orderList(results);
  } catch (error) {
    console.error(error);
    return [];
  }
}

function orderList(data) {
  return data.sort((a, b) => a.name.last.localeCompare(b.name.last));
}
