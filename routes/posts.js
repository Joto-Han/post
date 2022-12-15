const express = require('express')
const post = require('../schemas/post')
const router = express.Router()
// const the_time = require('date-utils')
// the_time()
// const newDate = new Date()
// const time = newDate.toFormat('yyyy-mm-dd hh24:mi:ss')

// 1. 게시글전체보기에서 async랑 await을 빼면 왜 실행이 안되는 것인가?
// 2. 게시글 저장할때 시간이 왜 저장되지 않는 것인가?

// 게시글 전체 보기
router.get('/post', async (req,res) => {
    const all_post = await post.find({}).sort({post_created_at: -1})
    res.status(200).json({all_post})
})
// .sort() 괄호안에 1을 넣으면 오름차순 -1을 넣으면 내림차순

// 특정 게시글 보기
router.get('/post/:post_id', async (req,res) => {
    const {post_id} = req.params

    let a = null
    let posts = await post.find()
    for(const post of posts){
        if(Number(post_id) === post.post_id)
        a = post
    }

    if (a === null) {
        return res.status(400).json({errormessage:"해당 게시글은 없는 게시글입니다."})
    }

    res.status(200).json({success:a})
})


// 게시글 저장 기능
router.post('/post/:post_id', async (req,res) => {
    const {post_id} = req.params
    
    const {post_name,post_content,post_user,post_pw} = req.body

    const existpost = await post.find({post_id: post_id})
    if (existpost.length) {
        return res.status(400).json({errormessage:'이미 중복된 게시물 번호입니다.'})
    }
    
    await post.create({
        post_id:Number(post_id),
        post_name:String(post_name),
        post_content:String(post_content),
        post_pw:Number(post_pw),
        post_user:String(post_user)
    })
    res.json({result:"게시글 저장 성공"})
})

// 게시글 수정기능
router.put('/post/:post_id', async (req,res) => {
    const {post_id} = req.params
    const {post_name,post_content,post_pw} = req.body

    const checkid = await post.find({post_id: Number(post_id)})
    // 객체를 배열에다가 전부 다 담아서 가져옴.

    // const checkid = await post.findOne({post_id: Number(post_id)})
    // 조건을 걸어서 하나의 객체만 가지고옴 이건 배열이 아님.

    const checkpw = checkid[0]['post_pw'] // 배열에서 원소를 꺼내올때 쓰기.
    // const checkpw = checkid.post_pw // 이것도 가능
    // 방금은 배열에서 꺼내왔죠. 지금은 ? 
    // 객체에서 꺼내오는 문법. 그러면 어떻게 해야하나?
    // 객체로 어떻게 바꿀까?
    // 두가지 방법이있당
    // {} < 객체 
    // [] < 배열 
    // [{첫번째객체}{두번째객체}{세번째객체}...]

    if (checkid.length){
        if(checkpw === post_pw) {
            await post.updateOne(
                {post_id: post_id},
                {$set: {post_name:post_name, post_content:post_content}}
            )
        } else {
            return res.status(444).json({errormessage:"비밀번호가 일치하지 않습니다."})
        }
    }
    res.status(200).json({success:"수정완료"})
})


// 게시글 삭제 기능
router.delete('/post/:post_id', async (req,res) => {
    const {post_id} = req.params
    const {post_pw} = req.body

    const checkid = await post.find({post_id: Number(post_id)})
    const checkpw = checkid[0]['post_pw']

    if (checkid.length) {
        if (checkpw === post_pw) {
            await post.deleteOne(
                {post_id:post_id}
            )
        } else {
            return res.status(444).json({errormessage:"비밀번호가 일치하지 않습니다."})
        }
    }
    res.status(200).json({success:"삭제완료"})
})

module.exports = router;