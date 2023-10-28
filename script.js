function numOfElements() {
    let elementArray = [].slice.call(document.getElementsByTagName('p'));
    let div1Text = document.getElementById("div1");
    div1Text.textContent = `There are ${elementArray.length} paragraph tags on this page.`;
}

function numOfIdElements1() {
    let elementArray = [].slice.call(document.getElementsByTagName('li'));
    let chickenLine1Elements = elementArray.filter(function (element) {
        return element.id === 'chickenLine1';
    });

    let div2Text = document.getElementById("div2");
    div2Text.textContent = `There are ${chickenLine1Elements.length} chickenLine1 elements on this page.`;
}

function numOfIdElements2(){
    let elementArray = [].slice.call(document.getElementsByTagName('p'));
    let chickenElements = elementArray.filter(function (element) {
        return element.id === 'chicken';
    });

    let div3Text = document.getElementById("div3");
    div3Text.textContent = `There are ${chickenElements.length} chicken elements on this page. The rest are fake chickens. (scary)`;
}