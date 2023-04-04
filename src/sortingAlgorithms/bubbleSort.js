export function getBubbleSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    for (let i = 0; i < auxiliaryArray.length - 1; i++) {
    for (let j = 0; j < auxiliaryArray.length - i - 1; j++) {
    // Push the indices of the elements being compared for color change
    animations.push([j, j + 1]);
    // Push the same indices again to revert back to original color
    animations.push([j, j + 1]);
    if (auxiliaryArray[j] > auxiliaryArray[j + 1]) {
    // Swap the elements and push their indices and values for animation
    animations.push([j, auxiliaryArray[j + 1]]);
    animations.push([j + 1, auxiliaryArray[j]]);
    const temp = auxiliaryArray[j];
    auxiliaryArray[j] = auxiliaryArray[j + 1];
    auxiliaryArray[j + 1] = temp;
    } else {
    // If elements are not swapped, push their indices with -1 for no change in color
    animations.push([j, -1]);
    animations.push([j + 1, -1]);
    }
    }
    }
    return animations;
    }