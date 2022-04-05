let counter = 0
let margin = 0
const left = () => {
	margin += 290
}
const right = () => {
	margin -= 290
}
export const act = () => {
	const cardsWrap = document.querySelector('.cards__wrap')
	if (counter == 0) return
	left()
	counter -= 1
	cardsWrap.style.cssText = `transform:translate(${margin}px)`
}
export const act2 = () => {
	const cardsWrap = document.querySelector('.cards__wrap')
	let len = cardsWrap.childNodes.length
	const items = 4
	if (counter == len - items) return
	right()
	counter += 1
	cardsWrap.style.cssText = `transform:translate(${margin}px)`
}