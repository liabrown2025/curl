const https = require('https')
const { URL } = require('url')


 const myHeaders= {
	'User-Agent':	'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36',
    'Authorization': 'Bearer token123',
    'User-Agent':
	'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36',
	'loveagri':'you'
  }

const requestOptions = {
	method: 'GET',
	headers: myHeaders,
	redirect: 'follow',
	body:JSON.stringify({ key: 'value' });
}

/**
 * 兼容 Node.js 12 的 fetch 实现
 * @param {string} url - 请求地址
 * @param {object} options - 配置项（method, headers, body 等）
 * @returns {Promise<{ status: number, data: string }>}
 */
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

		// 错误处理
		req.on('error', (err) => reject(err))

		// 发送请求体（POST/PUT）
		if (body) {
			req.write(body)
		}

		req.end()
	})
}

fetch('https://test.dotohi.com/curl.html?loveagri=you', requestOptions)
	.then((response) => response.text())
	.then((result) => console.log(result))
	.catch((error) => console.log('error', error))

console.log('fetch done========================done')
