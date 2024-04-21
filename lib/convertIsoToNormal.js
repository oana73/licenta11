export function convertIsoToNormal(isoDate) {
    const dateObject = new Date(isoDate)
    const year = dateObject.getFullYear()
    const mounth = String(dateObject.getMonth()+1).padStart(2,"0")//mounth is 0 based
    const day =String(dateObject.getDate()).padStart(2,"0")
  return `${year}-${mounth}-${day}`;
}
