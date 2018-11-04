
function countBs(word) {
    let count = 0;
    for (i = 0; i <= word.length; i++) {
        if (word[i] == "B") {
            count++;
        }
    }
    console.log(count);
};

countBs("BBB");

function countChar(word, char) {
    let count = 0;
    for (i = 0; i <= word.length; i++) {
        if (word[i] == char) {
            count++;
        }
    }
    console.log(count)
};

countChar("ABCDDDDDD", "D");