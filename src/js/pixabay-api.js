export function getImage(query) {
    const BASE_URL = 'https://pixabay.com/api/';
    const params = new URLSearchParams({
        key: "43019401-f5c2e47f71ae24a21d64a01c2",
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    })
    const url = `${BASE_URL}?${params}`;

    return fetch(url).then(res => res.json());
}
