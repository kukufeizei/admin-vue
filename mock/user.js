const tokens = {
    admin: {
        token: 'admin-token'
    },
    editor: {
        token: 'editor-token'
    }
}
const passwords = {
    admin: {
        pwd: '111111'
    },
    editor: {
        pwd: '111111'
    }
}
export default{
    'post|/user/login':option=>{
        const {  username } = JSON.parse(option.body)
        const { password } = JSON.parse(option.body)
        const token = tokens[username]
        if (password != passwords[username]['pwd']) {
            return {
                code: 60204,
                message: '请输入正确的密码',
            }
        }
        if (!token) {
            return {
                code: 60204,
                message: 'Account and password are incorrect.'
            }
        }
        return{
            code: 20000,
            data:token
        }
    }
}