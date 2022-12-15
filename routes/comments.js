const express = require("express");
const post = require('../schemas/post')
const comments = require('../schemas/comment')
const router = express.Router()

// 댓글 작성
router.post("/comments/:post_id", async (req,res) => {
    const {post_id} = req.params
    const {comment_user,comment_content,comment_pw} = req.body
    const existpost = await post.find({post_id: post_id})

    if (!existpost.length){
        return res.status(400).json({errorMessage:"데이터 형식이 올바르지 않습니다."})
    }
    if (comment_content === undefined) {
        return res.status(400).json({errorMessage:"댓글 내용을 입력해 주세요."})
    }

    await comments.create({
        post_id:Number(post_id),
        comment_user:String(comment_user),
        comment_content:String(comment_content),
        comment_pw:Number(comment_pw)
    })
    res.status(200).json({messsage:"댓글을 생성하였습니다."})
})

// 특정 게시글의 댓글 보기
router.get('/comments/:post_id', async (req,res) => {
    const {post_id} = req.params

    const post_comment = await comments.find({post_id:post_id}).sort({comment_created_at: -1})

    res.status(200).json({success:post_comment})
})

// 모든 댓글 보기
router.get('/comments', async (req,res) => {
    const post_comments = await comments.find({}).sort({comment_created_at: -1})
    res.status(200).json({success:post_comments})
})

// 댓글 삭제
router.delete('/comments/:_id', async (req,res) => {
    const {_id} = req.params
    const {comment_pw} = req.body

    const checkid = await comments.find({_id:_id})
    const checkpw = checkid[0]['comment_pw']

    if (checkpw !== comment_pw) {
        return res.status(400).json({errorMessage:"비밀번호가 일치하지 않습니다."})
    }
    // if (!checkid.length){
    //     return res.status(400).json({errorMessage:"데이터 형식이 올바르지 않습니다."})
    // }

    await comments.deleteOne(
        {_id:_id}
    )


    res.status(200).json({success:"댓글을 삭제하였습니다."})
})


// 댓글 수정 기능
router.put('/comments/:_id', async (req,res) => {
    const {_id} = req.params
    const {comment_content,comment_pw} = req.body

    const checkid = await comments.find({_id:_id})
    const checkpw = checkid[0]['comment_pw']
    
    if (checkpw !== comment_pw) {
        return res.status(400).json({errorMessage:"비밀번호가 일치하지 않습니다."})
    }
    
    if (comment_content === undefined){
        return res.status(400).json({errorMessage:"수정할 내용을 입력해주세요."})
    }

    await comments.updateOne(
        {_id:_id},
        {$set: {comment_content: comment_content}}
    )

    res.status(200).json({success:"댓글을 수정하였습니다."})
})


module.exports = router;