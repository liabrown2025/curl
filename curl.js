const myHeaders = new fetch.Headers()
myHeaders.append(
	'User-Agent',
	'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36'
)
myHeaders.append('Accept', '*/*')
myHeaders.append('Connection', 'keep-alive')
myHeaders.append('loveagri', 'you')

const requestOptions = {
	method: 'GET',
	headers: myHeaders,
	redirect: 'follow',
}

fetch('https://test.dotohi.com/curl.html?loveagri=you', requestOptions)
	.then((response) => response.text())
	.then((result) => console.log(result))
	.catch((error) => console.log('error', error))

console.log('fetch done========================done')
