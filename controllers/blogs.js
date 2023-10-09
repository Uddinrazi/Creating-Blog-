const {Blogs} = require('../models/blogs')
const {Comments} = require('../models/blogs')

const getBlogData = async(req, res, next) => {
    try{
        const findData = await Blogs.findAll({})
        res.status(200).json({allData: findData})
    }
    catch(err){
        console.log(err)
    }
}

const postBlogsData = async(req, res, next) => {
    try{
        const blog_title = req.params.blog_title;
        const blog_author = req.params.blog_author
        const blog_content = req.params.blog_content
        console.log('line 19 printed')
        console.log(req.body)
        const data = await Blogs.create(req.body)
        res.status(201).json({blogDetails : data})
    
    }catch(err){
        console.log(err)
    }
}

    const deleteComment = async(req, res, next) => {       
        try{
        if(req.params.id === 'undefine'){
            console.log('ID IS MISSING')
            return res.status(400).json({err : 'ID IS NOT THERE'})
        }
        const bId = req.params.id;
        await Blogs.destroy({where: {id: bId}})
        res.sendStatus(200)
        }
        catch(err){
            console.log(err)
        }
    }

    const getComments = async(req, res, next) => {
        try{
            console.log(req.params.id)
            const findComments = await Comments.findByPk(req.params.id)
            res.status(200).json({allblogComments: findComments})
        }
        catch(err){
            console.log(err)
        }
    }
    
    const postComments = async(req, res, next) => {
        try{
            console.log('line 56')
            //const comments = req.params.comments
            console.log(req.body)
            const Cdata = await Comments.create(req.body)
            res.status(201).json({commentsSection: Cdata})
        }
        catch(err){
            console.log(err)
        }
    }



module.exports= {getBlogData, postBlogsData, deleteComment, postComments,getComments}