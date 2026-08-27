const express = require('express');
const app = express();

//GET /rest/admin/pass
app.get('/rest/:id/:pw',function(req,res){
    console.log(req.params); // get에서만 사용가능 post 에서는 사용 불가
    // const id = req.params.id;
    const {id,pw} = req.params;
    res.json({'msg': '잘 받았음','params':{id,pw}}); //params : {id:id, pw:pw}
});

//GET /get_method?id=admin&pw=pass
app.get('/get_method',function(req,res){
    console.log(req.query);
    const {id,pw}  = req.params;
    res.send({id,pw});
})

//POST /login
// {id:"admin",pw:"pass"}
app.post('/post',function(req,res){})

// 위 URL 외의 것이 왔을때 처리

app.listen(80,()=>console.log('http://localhost'));