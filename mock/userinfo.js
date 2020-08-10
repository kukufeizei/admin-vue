const data={
    admin:{
        token:'admin-token',
		roles: ['admin'],
        username:'admin',
        imgurl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591530122836&di=b7bd6587bd70954db2f6a5c7588ca5ba&imgtype=0&src=http%3A%2F%2Fimg.wxcha.com%2Ffile%2F201901%2F03%2Fc447d5e161.jpg%3Fdown'
    },
    edit:{
        token:'editor-token',
		roles: ['editor'],
        username:'editor',
        imgurl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1591530122808&di=40406c6d88125fe5caaa4379795caa25&imgtype=0&src=http%3A%2F%2Fimg.wxcha.com%2Ffile%2F201802%2F05%2Fccaedecda3.jpg%3Fdown'
    }
}

export default{
    'post|/user/info':option=>{
        let { token } = JSON.parse(option.body)
        if(token=='admin-token'){
            token = 'admin'
        }else{
            token = 'edit'
        }
        return{
            code: 20000,
            data:data[token]
        }
    }
}