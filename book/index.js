const fse = require('fs-extra')
const exec = require('child_process').exec
const Promise = require('bluebird')
const loadDir = require('./loadDir.js')
const httpStatus = loadDir('httpStatus')

const log = console.log
const dir = './book'
const baseUrl = 'https://api.pictureair.com/ai/'
const language = process.env.LG || 'zh-CN'
log(language)

async function main() {
	try {
		await init()
		await mainFiles()
		await serviceGenerator()
		await build()
	} catch (err) {
		log(err)
	}
}
main()

//0、生成gitbook文件夹
function init() {
	return new Promise((resolve, reject) => {
		exec(`gitbook init ${dir}`, (error, stdout, stderr) => {
			if (error) {
				reject(error)
			} else {
				log('1、生成gitbook文件夹成功')
				resolve(0)
			}
		})
	})
}

//1、主要文件
async function mainFiles() {
	let body = 'pictureAir\n'
	let readmeTmp = ''
	for (let service in httpStatus) {
		body += `* [${service}](${service}/README.md)\n`
		readmeTmp += `* [${service}](${service}/README.md)\n`
		if (service == 'common') {
			continue
		}
		let item = httpStatus[service]
		for (let fun in httpStatus[service]) {
			readmeTmp += `  * [${fun}](${service}/${fun}/README.md)\n`
		}
	}
	// log(readmeTmp)
	const p1 = fse.writeFile(dir + '/README.md', body)
	const p2 = fse.writeFile(dir + '/SUMMARY.md', readmeTmp)
	await Promise.all([p1, p2])
	log('2、生成主要文件')
}

async function serviceGenerator() {
	log('3、生成模块')
	for (let service in httpStatus) {
		if (service == 'common') {
			await commonGenerator(service)
		} else {
			await writeService(service)
			await filesGenerator(service)
		}

	}
}

async function commonGenerator(service) {
	log('生成通用模块')
	let title = `# ${service}\n---\n`
	let allApiName = ''
	const obj = {
		system: 1,
		service: 1,
		tips: 1
	}
	for (let fun in httpStatus[service]) {
		if (obj[fun]) {
			allApiName += `* ${fun} :`
			allApiName += `
|code|des|
| ------------- |:-------------:|
`
			let item = httpStatus[service][fun]
			for (let code in item) {
				allApiName += `| ${code} | ${JSON.stringify(item[code]['en-US'])} | \n`
			}
		} else {
			allApiName += `* ${fun} :`
			allApiName += `
\`\`\`
${JSON.stringify(httpStatus[service][fun], null, 4)}
\`\`\`
`
		}

	}
	let readme = title + allApiName
	await fse.outputFile(`${dir}/${service}/README.md`, readme, 'utf-8')
}

async function writeService(service) {
	let title = `# ${service}\n---\n`
	let allApiName = ''
	for (let fun in httpStatus[service]) {
		allApiName += `* [${fun}](${fun})\n`
	}
	let readme = title + allApiName
	await fse.outputFile(`${dir}/${service}/README.md`, readme, 'utf-8')
}

async function filesGenerator(service) {
	log(`生成 ${service} 下具体文件`)
	const promises = []
	for (let fun in httpStatus[service]) {
		promises.push(await writeSingle(fun, service))
	}
	await Promise.all(promises)
}

async function writeSingle(fun, service) {
	// let title = `# ${fun}\n---\n`
	let body = ''
	let item = httpStatus[service][fun]
	body += `

${fun}
---

\`\`\`
Url : ${baseUrl + service + '/' + fun }
Method : ${item.method} 
desc : ${item.desc}
\`\`\`
`
	if (Object.keys(item.headers)[0]) {
		body += `
* head:

|name|required|type|des|
| ------------- |:-------------:|:-------------:|:---------------------------------------:|
`
		for (let header in item.headers) {
			body += `| ${header} | ${item.headers[header][0] ? 'yes':'no'} | ${item.headers[header][1]} | ${item.headers[header][2]} | \n`
		}
	}

	if (Object.keys(item.params)[0]) {
		body += `
* Request:

|name|required|type|des|default|
| ------------- |:-------------:|:-------------:|:---------------------------------------:|:-------------:|
`
		for (let param in item.params) {
			body += `| ${param} | ${item.params[param][0] ? 'yes':'no'} | ${item.params[param][1]} | ${item.params[param][2]} | ${item.params[param][3] ? item.params[param][3]:'-'} |\n`
		}
	}
	let obj = {result: item.response}
	res = item.response ? Object.assign({}, httpStatus.common.success, obj) : httpStatus.common.success

	body += `
* Response result:
\`\`\`
${JSON.stringify(res, null, 4)}
\`\`\`
`
	if (item.resDesc && Object.keys(item.resDesc)[0]) {
		body += `
* Response des:

|response key|type|des|
| ------------- |:-------------:|:-------------:|
`
		for (let key in item.resDesc) {
			body += `| ${key} | ${item.resDesc[key][0]} |${item.resDesc[key][1]} |\n`
		}
	}

	return fse.outputFile(`${dir}/${service}/${fun}/README.md`, body, 'utf-8')
}

function build() {
	return new Promise((resolve, reject) => {
		exec(`gitbook build ${dir}`, (error, stdout, stderr) => {
			if (error) {
				reject(error)
			} else {
				log('done')
				resolve(0)
			}
		})
	})
}