var myHeaders = new Headers()
myHeaders.append('User-Agent', 'Apifox/1.0.0 (https://apifox.com)')
myHeaders.append('Accept', '*/*')
myHeaders.append('Host', '49.232.53.251')
myHeaders.append('loveagri', 'you')
myHeaders.append('Connection', 'keep-alive')

var requestOptions = {
	method: 'GET',
	headers: myHeaders,
	redirect: 'follow',
}

fetch('http://49.232.53.251/', requestOptions)
	.then((response) => response.text())
	.then((result) => console.log(result))
	.catch((error) => console.log('error', error))

console.log('fetch done====================111')
