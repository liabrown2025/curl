var myHeaders = new Headers()
myHeaders.append('User-Agent', 'Apifox/1.0.0 (https://apifox.com)')
myHeaders.append('Accept', '*/*')
myHeaders.append('Host', 'test.dotohi.com')
myHeaders.append('loveagri', 'you')
myHeaders.append('Connection', 'keep-alive')

var requestOptions = {
	method: 'GET',
	headers: myHeaders,
	redirect: 'follow',
}

fetch('https://test.dotohi.com/', requestOptions)
	.then((response) => response.text())
	.then((result) => console.log(result))
	.catch((error) => console.log('error', error))

console.log('fetch done========================done')
