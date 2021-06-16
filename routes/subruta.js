const express = require('express');
const router = express.Router();

router.use(express.json({
    limit: '256mb'
}));


router.post("/test",(req,res)=>{
    console.log("post: ", req.body);
    res.sendStatus(200);
});

module.exports = router;
