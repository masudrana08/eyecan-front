 const getImg=(thumnail:String):String=>{
    return `${process.env.REACT_APP_API}/images/${thumnail}`
}
export default getImg