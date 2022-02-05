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
    memory.data = r.results
    console.log(memory)
}

function showData(data) {
    const firstEl = data[0];
    const titles = Object.keys(firstEl).filter(key => {
        if (typeof firstEl[key] === 'string') {
            return key
        }
    });
    const tr = createElem('tr');
    $(tr).html(titles.reduce((str, t) => str += `<th>${t}</th>`, ''));
    $('#titles').append(tr);

    

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
    previous.click(e => memory.previous && getData(memory.previous).then(refreshMemory));
    next.click(e => memory.next && getData(memory.next).then(refreshMemory));
})($);