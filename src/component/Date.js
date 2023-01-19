export const dateDiff = (date) => {
    let date1 = new Date().getDate();
    let date2 = (new Date().getMonth()) || 1;
    let date3 = new Date().getFullYear();
    let combine = new Date(`${date2}/${date1}/${date3}`)
    const final = new Date(date);
    const diffTime = Math.abs(final - combine);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays
}