const address = /\d{1,5}[ ](?:[A-Z0-9.-]+[ ]?(?!SUITE|STE|APARTMENT|APT|ROOM|RM|BUILDING|BLDG|BLD|UNIT|PO|P.O.|#)){1,3}(?:AVENUE|AVE|LANE|LN|ROAD|RD|BOULEVARD|BLDVD|DRIVE|DR|STREET|ST|WOODS|LOOP)?\.?(?:[ ](?:NORTH|SOUTH|EAST|WEST|N|E|W|S[^TU]))?/i
const address2 = /(?:SUITE|STE|APARTMENT|APT|ROOM|RM|BUILDING|BLDG|BLD|UNIT|PO|P.O.|#)\.?[ ]?[A-Z0-9]{1,4}/i
const middleInitial = /^([A-Z]{3,40})(?:\s+[A-Z]\.?\s+)([A-Z]{2,40})/i
const notANameCharacter = /[^A-Z\s\-]/i
const nameSuffix = /[ ]+(?:JR|JUNIOR|SR|SENIOR|III|II|IV|DDS|DMD|MSD|PC|MS)/i
const hash = /[#][ ]?/

export function reverseNameToStandard(unformattedName, disregardAddress) {
	unformattedName = unformattedName.map(i => i.toUpperCase())

	if (disregardAddress && (isAddress(unformattedName[0]) || isAddress2(unformattedName[0])))
		return null

	unformattedName = unformattedName[0].split(',')
	let name = unformattedName.slice(1)
	name.push(unformattedName[0])

	return name.join(" ").trim()
}

export function concatenate(data, disregardAddress) {
	const computed = makeArray(data).map(i => i.trim()).join(" ").trim().toUpperCase()

	if (disregardAddress && (isAddress(computed) || isAddress2(computed))) {
		return null
	}

	return computed
}

export function evaluateIndividual(data, disregardAddress) {
	data = makeArray(data)
	let value = null

	for (let item of data) {
		const i = item.trim().toUpperCase()
		if (disregardAddress) {
			if (i && !isAddress(i) && !(isAddress2(i))) {
				value = i
				break;
			}
		} else {
			if (i) {
				value = i
				break;
			}
		}
	}

	return value
}

export function getAddressFromArray(data, isAddressParam) {
	let value = null

	for (let item of data) {
		item = item.trim().toUpperCase()

		if (isAddressParam && isAddress(item)) {
			value = getAddress(item)
			break;
		}

		if (!isAddressParam && isAddress2(item)) {
			value = getAddress2(item).replace(hash, "STE ")
			break;
		}
	}

	return value
}

export function formatName(data) {
	console.log('to format name')
	return data.trim()
		.toUpperCase()
		.replace(middleInitial, "$1 $2")
		.replace(notANameCharacter, '')
		.replace(nameSuffix, '')
}

export function isAddress(data) {
	// https://regex101.com/r/zIHzWW/3
	const matches = data.match(address)

	return matches && matches.length > 0;
}

export function isAddress2(data) {
	const matches = data.match(address2)

	return matches && matches.length > 0
}

function getAddress(data) {
	return data.match(address)[0]
}

function getAddress2(data) {
	return data.match(address2)[0]
}

function makeArray(data) {
	return (Array.isArray(data) ? data : [data])
}