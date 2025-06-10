const nodemailer = require('nodemailer')

// 配置QQ邮箱SMTP服务
const transporter = nodemailer.createTransport({
    host: 'smtp.qq.com', // QQ邮箱的SMTP服务器地址
    port: 465, // QQ邮箱的SMTP服务器端口，SSL连接
    secure: true, // 使用SSL
    auth: {
        user: '3500037546@qq.com', // 你的QQ邮箱地址
        pass: '' // 你的QQ邮箱授权码，不是密码！
    }
})

// 邮件内容配置
const mailOptions = {
    from: '3500037546@qq.com', // 发件人信息
    to: 'lovefuhong@gmail.com', // 收件人邮箱，可以是多个，用逗号分隔
    subject: 'Node.js发送QQ邮件测试', // 邮件主题
    text: '这是一封使用Node.js通过QQ邮箱发送的测试邮件(纯文本)', // 纯文本内容
    html: '<b>这是一封使用Node.js通过QQ邮箱发送的测试邮件(HTML)</b>' // HTML内容
}

// 发送邮件
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log('发送失败:', error)
    }
    console.log('邮件已发送: %s', info.messageId)
    // 预览URL仅在Nodemailer使用Ethereal测试账户时可用
    if (info.accepted && info.accepted.length > 0) {
        console.log('收件人: %s', info.accepted.join(', '))
    }
    if (info.rejected && info.rejected.length > 0) {
        console.log('被拒绝的收件人: %s', info.rejected.join(', '))
    }
})
