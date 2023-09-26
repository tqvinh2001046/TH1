const getAboutPage = (req,res) =>{
    return res.render("home" , {data : { page : "about"}})
}
export default getAboutPage