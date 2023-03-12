 const getImg=(thumnail:string):string=>{
    return `${process.env.REACT_APP_API}/images/${thumnail}`
}
export default getImg