const memory = {
    url: 'https://rickandmortyapi.com/api/character',
    data: [],
    previous: null,
    next: null
};

function getData(url) {
    return fetch(url)
    .then(r => r.json())
    .then(r => r);
}

function refreshMemory(r) {
    memory.previous = r.info.prev;
    memory.next = r.info.next;
    memory.data = r.results;
}

function showData(data) {
    const firstEl = data[0];
    const filteredTitles = filterKeysByType(firstEl, 'string');

    const tr = createTitleRow(filteredTitles);
    $('#titles').html(tr);

    const tableRow = createTableRow(data, filteredTitles);
    $('#data').html(tableRow);
}

function getObjectKeys(obj) {
    return Object.keys(obj);
}

function filterKeysByType(obj, type) {
    const titles = getObjectKeys(obj);
    console.log({titles})
    return titles.filter(key => {
        if (typeof obj[key] === type) {
            return key
        }
    })
}

function createTitleRow(stringArray) {
    const tr = createElem('tr');
    console.log({stringArray})
    $(tr).html(stringArray.reduce((str, t) => str += `<th>${t}</th>`, ''));
    return tr;
}

function createTableRow(data, titles) {
    return data.reduce((str, char) => {
        const columns = titles.reduce((res, key) => res += `<td>${checkIfImg(char[key])}</td>`, '');
        return str += `<tr>${columns}</tr>`;
    }, '')
}

function checkIfImg(str) {
    if (str.endsWith('.jpeg')) {
        return `<img src='${str}' />`;
    }
    return str;
}

function createElem(e) {
    return document.createElement(e);
}

($ => {
    const loadBtn = $('#loadBtn');
    const previous = $('#previous');
    const next = $('#next');

    loadBtn.click(e => memory.url && getData(memory.url)
        .then(refreshMemory)
        .then(r => showData(memory.data))
    );
    previous.click(e => memory.previous && getData(memory.previous)
        .then(refreshMemory)
        .then(r => showData(memory.data))
    );
    next.click(e => memory.next && getData(memory.next)
        .then(refreshMemory)
        .then(r => showData(memory.data))
    );
})($);