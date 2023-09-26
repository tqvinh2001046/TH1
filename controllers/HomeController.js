import express from "express"

const getHomePage = (req,res) =>{
    return res.render("home",{data : {title : "HomePage" , page :"main"}})
}
export default getHomePage