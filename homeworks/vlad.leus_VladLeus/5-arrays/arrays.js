/* Task 1 - Christmas Tree */

function makeTree(height) {
    let tree = [];
    let width = height * 2 - 1;
    let treeTemp = [width];
    const midIndex = parseInt(((width) / 2), 10);
    let rightIndex = midIndex;
    let leftIndex = midIndex;

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (i === height - 1) {
                treeTemp[j] = '*';
            } else if ((j >= leftIndex && j <= rightIndex) || j === midIndex) {
                treeTemp[j] = '*';
            } else {
                treeTemp[j] = ' ';
            }
        }
        leftIndex--;
        rightIndex++;
        tree.push(treeTemp);
        treeTemp = [width];
    }
    return tree;
}

function drawTree(tree) {
    let str = '';
    for (let i = 0; i < tree.length; i++) {
        let treeTemp = tree[i];
        for (let j = 0; j < tree[i].length; j++) {
            str += treeTemp[j].toString();
        }
        console.log(str);
        str = '';
    }
}

let treeHeight = 15;
let christmasTree = makeTree(treeHeight);
drawTree(christmasTree);

/* Task 2 - array to string array */

function arrayToStringArray(array) {
    let str = '';
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let tempArray = array[i];
        for (let j = 0; j < tempArray.length; j++) {
            if (tempArray[j] < 5) {
                tempArray[j] = ' ';
                str += tempArray[j];
            } else if (tempArray[j] > 5) {
                tempArray[j] = '*';
                str += tempArray[j];
            }
        }
        result.push(str);
        str = '';
    }
    return result;
}

let myArray = [
    [1, 4, 2, 4, 4, 2, 4, 3, 2, 6, 2, 4, 2, 4, 3, 1, 2, 4, 3],
    [1, 1, 3, 1, 1, 3, 3, 1, 6, 6, 8, 3, 3, 3, 3, 1, 4, 1, 2],
    [1, 2, 1, 4, 1, 1, 4, 7, 8, 8, 7, 7, 1, 1, 4, 3, 1, 1, 2],
    [3, 2, 3, 3, 4, 2, 7, 8, 6, 8, 6, 7, 8, 1, 2, 3, 3, 3, 4],
    [4, 1, 3, 3, 2, 8, 7, 8, 6, 7, 6, 7, 6, 7, 2, 4, 3, 2, 2],
    [3, 1, 2, 1, 7, 7, 8, 8, 8, 7, 6, 8, 8, 6, 8, 4, 1, 3, 2],
    [2, 1, 1, 7, 6, 7, 7, 8, 7, 6, 8, 6, 6, 6, 6, 8, 4, 4, 3],
    [4, 1, 6, 7, 8, 7, 8, 8, 6, 6, 7, 7, 6, 6, 6, 7, 6, 1, 2],
    [1, 6, 6, 6, 6, 8, 8, 7, 6, 6, 7, 8, 7, 8, 8, 7, 6, 7, 1],
    [8, 6, 8, 6, 6, 7, 7, 6, 6, 7, 8, 7, 6, 6, 6, 6, 7, 8, 7],
];
/* let result = arrayToStringArray(myArray);
for (let i = 0; i < result.length; i++) {
    console.log(result[i]);
} */

/* Task 3 - Pretty Christmas Tree */

function makeFancyTree(height) {
    let fancyTree = [];
    let width = height * 2 - 1;
    let treeTemp = [width];
    const midIndex = parseInt(((width) / 2), 10);
    let rightIndex = midIndex;
    let leftIndex = midIndex;

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (i === height - 1) {
                treeTemp[j] = '*';
            } else if ((j >= leftIndex && j <= rightIndex) || j === midIndex) {
                treeTemp[j] = '*';
            } else {
                treeTemp[j] = ' ';
            }
            if (i % 2 !== 0) {
                treeTemp[leftIndex] = '@';
                treeTemp[rightIndex] = '@';
            }
        }
        leftIndex--;
        rightIndex++;
        fancyTree.push(treeTemp);
        treeTemp = [width];
    }
    return fancyTree;
}

/* let prettyTreeHeight = 15;
let prettyChristmasTree = makeFancyTree(prettyTreeHeight);
drawTree(prettyChristmasTree); */