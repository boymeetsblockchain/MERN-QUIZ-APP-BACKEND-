const Questions = require("../models/questionModel")
const Results = require("../models/resultModel")
const questions = require("../database/data")
const {answers} = require("../database/data")

const getQuestions =async(req,res)=>{
 
     try {
         const q = await Questions.find()
         res.json(q)
     } catch (error) {
       res.json({error})  
     }

}

const insertQuestions = async (req, res) => {
    try {
      await Questions.insertMany({questions: [questions], answers: [answers]});
      res.json({msg: "Data has been saved successfully"});
    } catch (error) {
      res.json({error});
    }
  };
  

const deleteQuestions =async(req,res)=>{
    try {
        await Questions.deleteMany()
        res.json({msg: "Data deleted successfully"});
    } catch (error) {
        res.json({error});
    }

}

const getResult =async(req,res)=>{
    try {
        const r = await Results.find()
        res.json(r)
    } catch (error) {
      res.json({error})  
    }

}

const storeResult =async(req,res)=>{
    try {
        const {username,result,attempts,points,achived}= req.body
        if(!username && !result){
          throw new Error("Data Not Provided...!")
        }
        Results.create({username,result,attempts,points,achived})
        res.json({msg: " Result Saved  successfully"});
    } catch (error) {
        res.json({error});
    }
}

const dropResult =async(req,res)=>{
    try {
        await Results.deleteMany()
        res.json({msg: "Result deleted successfully"});
    } catch (error) {
        res.json({error});
    }
    
}
module.exports ={
    getQuestions,
    insertQuestions,
    deleteQuestions,
    getResult,
    storeResult,
    dropResult
}