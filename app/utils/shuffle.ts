export const shuffle = (array: any) => {
	let currentIndex = array.length,
		temporaryValue,
		randomIndex

	// Пока не дошли до конца массива - тасуем...
	while (0 !== currentIndex) {
		// берем оставшийся элемент
		randomIndex = Math.floor(Math.random() * currentIndex)
		currentIndex -= 1

		// Меняем местами его с текущим элементом
		temporaryValue = array[currentIndex]
		array[currentIndex] = array[randomIndex]
		array[randomIndex] = temporaryValue
	}

	return array
}
