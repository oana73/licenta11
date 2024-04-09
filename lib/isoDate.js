export function isoDate(normalDate){
    const dateObject = new Date(normalDate)
    const isoFormatDate = dateObject.toISOString()
    return isoFormatDate;
}