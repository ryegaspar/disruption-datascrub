const address = /\d{1,5}(?:\-?\d{0,3}\-?[ABCDE])?[ ]+(?:(?:[A-Z0-9\-\.]+[ ]+)*?)+(?:AVE|AVENUE|BLVD|BOULEVARD|BROADWAY|CENTER|CIR|CIRCLE|CMNS|CNTR|COMMON|COMMONS|COURT|CRES|CRESCENT|CREST|CROSSING|CRT|CT|CTR|CURVE|CV|DR|DRIVE|E|EAST|EXPRESSWAY|EXPWY|EXPY|HIGHWAY|HWY|LANE|LN|LOOP|MALL|N|NE|NORTH|NW|PASS|PASSAGE|PATH|PARK|PARKWAY|PIKE|PL|PLACE|PLAIN|PLAZA|PLZ|PLZA|PKWY|POINT|PT|ROAD|ROW|RD|S|SE|SOUTH|SQ|SQUARE|STREET|ST|SW|TER|TERR|TERRACE|THROUGHWAY|THRUWAY|TKPE|TPKE|TRL|TRAIL|TRACE|TRCE|TURNPIKE|VILLAGE|VIS|VISTA|VLG|W|WAY|WEST|WOODS|XING|(?:(?:INTERSTATE|ROUT|ROUTE|RT|RTE)\-?[ ]+\d{1,4}[A|B|C]?))\b/i
const address2 = /(?:(?:SUITE|STE|APARTMENT|APT|ROOM|RM|BUILDING|BLDG|BLD|UNIT|PO BOX|P\.O\.[ ]?BOX|#)\.?[ ][A-Z0-9]{1,5})|(?:#\d{1,5})/i
const middleInitial = /^([A-Z]{3,40})(?:\s+[A-Z]\.?\s+)([A-Z]{2,40})/i
const notANameCharacter = /[^A-Z\s\-]/i
const nameSuffix = /[ ]+(?:JR|JUNIOR|SR|SENIOR|III|II|IV|DDS|DMD|MSD|PC|MS)/i

export function padZero(n, characterWidth) {
	n = n + ''
	return new Array(characterWidth - n.length + 1).join('0') + n
}

export function reverseNameToStandard(unformattedName, disregardAddress) {
	unformattedName = unformattedName.map(i => i.toUpperCase())

	if (disregardAddress && (isAddress(unformattedName[0]) || isAddress2(unformattedName[0])))
		return null

	unformattedName = unformattedName[0].split(',').map(i => i.trim())

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
			value = getAddress2(item).replace(/[#][ ]?/, "STE ")
			break;
		}
	}

	return value
}

export function formatName(data) {
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