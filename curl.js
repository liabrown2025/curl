const https = require('https')
const { URL } = require('url')


const postData = JSON.stringify({
  name: 'John',
  age: 30
});

const myHeaders = {
	'User-Agent':
		'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36',
	'loveagri': 'you',
	'Content-Type': 'application/json',
    'Content-Length': postData.length, // 必须手动设置 Content-Length
    'Authorization': 'Bearer your_token_here' // 可选：认证头
}

const requestOptions = {
	method: 'POST',
	headers: myHeaders,
	redirect: 'follow',
	body: postData,
}

function fetch(url, options = {}) {
	return new Promise((resolve, reject) => {
		const { method = 'GET', headers = {}, body } = options

		// 解析 URL（兼容处理 query 参数）
		const parsedUrl = new URL(url)
		const reqOptions = {
			hostname: parsedUrl.hostname,
			port: parsedUrl.port || 443,
			path: parsedUrl.pathname + parsedUrl.search,
			method,
			headers,
		}

		// 发起请求
		const req = https.request(reqOptions, (res) => {
			let data = ''
			res.on('data', (chunk) => (data += chunk))
			res.on('end', () => {
				resolve({
					status: res.statusCode,
					data,
					headers: res.headers,
				})
			})
		})

		if (body) {
			req.write(body);
		}

		// 错误处理
		req.on('error', (err) => reject(err))

		req.end()
	})
}

fetch('https://test.dotohi.com/curl.html?loveagri=you', requestOptions)
	.then((response) => response.data)
	.then((result) => console.log(JSON.parse(result)))
	.catch((error) => console.log('error', error))

console.log('fetch done========================done')
