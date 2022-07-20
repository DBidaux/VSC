//Count numbers and comparing them

function countBy (items, groupName) {
    let counts = [];
    for (let item of items) {
        let name = groupName(item);
        let known = counts.findIndex(c=>c.name == name);
        if (known == -1) {
            counts.push({name, count:1});
        } else {
            counts[known].count++;
        }
    }
    return counts;
}

//charScript definido en Script Data Set


function textScripts(text) {
    let scripts = countBy(text, char => {
        let script = charScript(char.codePointAt(0));
        return script ? script.name : "none";
    }).filter(({name}) => name != "none");
    
    let total = scripts.reduce((n, {count}) => n + count, 0);
    if (total == 0) return "No scripts found";

    return scripts.map(({name, count}) => {
        return `${Math.round(count * 100/total)}% ${name}`;
    }).join(", ");
}

console.log(textScripts('을 받을 권리를 가진다 . 교육은 최소한 초등 및 기초단계에서는 무상이어야 한다. 초등교육은 의무적이어야 한다"ladrido", 을 받을 권리를 가진다 . 교육은 최소한 초등 및 기초단계에서는 무상이어야 한다. 초등교육은 의무적이어야 한다"Для Сове́тского Сою́за война́ начала́сь 22 ию́ня 1941 го́да. За́ день до э́того, 21 ию́ня во всех шко́лах страны́ был пра́здник – после́дний шко́льный бал. Де́вушки и ю́ноши то́лько что зако́нчили шко́лу. Они́ танцева́ли, мечта́ли о бу́дущем и не зна́ли, что на"'));
console.log(countBy([1,2,3,4,5], n => n>=2));
console.log(countBy([1,2,3,4,5], n => n>2));

//Reconocer script textos

