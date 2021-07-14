var name3 = "";
var max_name_length1 = 14;
var name_gen_index = 0;
const generated_names = new Array();
var achar321 = "ÃÅÂA卂ﾑÄA丹a"
var bchar321 = "B乃ɮḄBb6及ɮ"
var cchar321 = "C匚८Ċc"
var dchar321 = "D刀ɖḊĐĐDd"
var echar321 = "E乇ɛЁɛ33e3"
var fchar321 = "F千ʄḞf"
var gchar321 = "GɢGɢg"
var hchar321 = "H卄ɦḦɥh"
var ichar321 = "IɨЇɨ1i"
var jchar321 = "JﾌʝJɟɾj"
var kchar321 = "KズкḲʞk"
var lchar321 = "LﾚʟḶlŁŁŁ"
var mchar321 = "M爪ʍṀɯm"
var nchar321 = "N几nṄ几Ṅии"
var ochar321 = "Oの๏Öoøø〇0ʘ"
var pchar321 = "P卩pṖ卩Ṗ"
var qchar321 = "QQqQ"
var rchar321 = "R尺ʀṚɹr"
var schar321 = "S丂ʂṠs"
var tchar321 = "TｲtṪʇ"
var uchar321 = "UひʊÜu"
var vchar321 = "VVvṾʌ"
var wchar321 = "W山wẄ"
var xchar321 = "X乂xẌ〆××メ乄父义"
var ychar321 = "Y人ʏŸʎy"
var zchar321 = "Z乙ʐŻz"
var spacechar321 = "īēū丶٭×・๛〆シ¤ヤ金帝乀乄一本ズ人ノ大き〆乁٪웃三؄乛įĠġ亞"
var spacechar432 = ["ī", "ē", "ū", "į", "į", "Ġ", "ġ", "Ġ", "ġ"]
var enclosingchar321 = ["《》", "『』", "【】", "亗亗", "彡彡", "《》", "「」", "〘〙", "ツツ", "卍卍", "؄؂", "亞亞"]
var startchar321 = ["pг๏", "lเttlє", "「M24」", "乃丹刀", "๏̯͡๏", "ʘ͜ʖʘ", "I乛AM", "「メ」", "「OP」"]
var startchar432 = ["٭", "彡", "只", "๛", "乛", "؄", "¤", "シ", "乄", "〆", "ツ", "。", "ヅ", "・", "亗", "彡", "・", "ノ", "丶", "×", "米", "々", "父", "多", "乂", "〆", "个"]


function Randomizee(name) {
    if (name.includes('a')) {
        var charr = achar321[Math.floor(Math.random() * achar321.length)];
        name = name.replace(/a/g, charr)
    }
    if (name.includes('b')) {
        var charr = bchar321[Math.floor(Math.random() * bchar321.length)];
        name = name.replace(/b/g, charr)
    }
    if (name.includes('c')) {
        var charr = cchar321[Math.floor(Math.random() * cchar321.length)];
        name = name.replace(/c/g, charr)
    }
    if (name.includes('d')) {
        var charr = dchar321[Math.floor(Math.random() * dchar321.length)];
        name = name.replace(/d/g, charr)
    }
    if (name.includes('e')) {
        var charr = echar321[Math.floor(Math.random() * echar321.length)];
        name = name.replace(/e/g, charr)
    }
    if (name.includes('f')) {
        var charr = fchar321[Math.floor(Math.random() * fchar321.length)];
        name = name.replace(/f/g, charr)
    }
    if (name.includes('g')) {
        var charr = gchar321[Math.floor(Math.random() * gchar321.length)];
        name = name.replace(/g/g, charr)
    }
    if (name.includes('h')) {
        var charr = hchar321[Math.floor(Math.random() * hchar321.length)];
        name = name.replace(/h/g, charr)
    }
    if (name.includes('i')) {
        var charr = ichar321[Math.floor(Math.random() * ichar321.length)];
        name = name.replace(/i/g, charr)
    }
    if (name.includes('j')) {
        var charr = jchar321[Math.floor(Math.random() * jchar321.length)];
        name = name.replace(/j/g, charr)
    }
    if (name.includes('k')) {
        var charr = kchar321[Math.floor(Math.random() * kchar321.length)];
        name = name.replace(/k/g, charr)
    }
    if (name.includes('l')) {
        var charr = lchar321[Math.floor(Math.random() * lchar321.length)];
        name = name.replace(/l/g, charr)
    }
    if (name.includes('m')) {
        var charr = mchar321[Math.floor(Math.random() * mchar321.length)];
        name = name.replace(/m/g, charr)
    }
    if (name.includes('n')) {
        var charr = nchar321[Math.floor(Math.random() * nchar321.length)];
        name = name.replace(/n/g, charr)
    }
    if (name.includes('o')) {
        var charr = ochar321[Math.floor(Math.random() * ochar321.length)];
        name = name.replace(/o/g, charr)
    }
    if (name.includes('p')) {
        var charr = pchar321[Math.floor(Math.random() * pchar321.length)];
        name = name.replace(/p/g, charr)
    }
    if (name.includes('q')) {
        var charr = qchar321[Math.floor(Math.random() * qchar321.length)];
        name = name.replace(/q/g, charr)
    }
    if (name.includes('r')) {
        var charr = rchar321[Math.floor(Math.random() * rchar321.length)];
        name = name.replace(/r/g, charr)
    }
    if (name.includes('s')) {
        var charr = schar321[Math.floor(Math.random() * schar321.length)];
        name = name.replace(/s/g, charr)
    }
    if (name.includes('t')) {
        var charr = tchar321[Math.floor(Math.random() * tchar321.length)];
        name = name.replace(/t/g, charr)
    }
    if (name.includes('u')) {
        var charr = uchar321[Math.floor(Math.random() * uchar321.length)];
        name = name.replace(/u/g, charr)
    }
    if (name.includes('v')) {
        var charr = vchar321[Math.floor(Math.random() * vchar321.length)];
        name = name.replace(/v/g, charr)
    }
    if (name.includes('w')) {
        var charr = wchar321[Math.floor(Math.random() * wchar321.length)];
        name = name.replace(/w/g, charr)
    }
    if (name.includes('x')) {
        var charr = xchar321[Math.floor(Math.random() * xchar321.length)];
        name = name.replace(/x/g, charr)
    }
    if (name.includes('y')) {
        var charr = ychar321[Math.floor(Math.random() * ychar321.length)];
        name = name.replace(/y/g, charr)
    }
    if (name.includes('z')) {
        var charr = zchar321[Math.floor(Math.random() * zchar321.length)];
        name = name.replace(/z/g, charr)
    }
    name3 = name.toString();
    if (name.includes(' ')) {
        var charr = spacechar321[Math.floor(Math.random() * spacechar321.length)];
        name = name.replace(/ /g, charr)
    }
    var name2 = name.toString();
    if (name2.length < max_name_length1 - 1) {
        if (name2.length <= max_name_length1 - 7 && randomm() == 1) {
            var startt = startchar321[Math.floor(Math.random() * startchar321.length)].toString();
            var spacee = spacechar321[Math.floor(Math.random() * spacechar321.length)].toString();
            name = startt.concat(spacee, name)
        } else if (name2.length > max_name_length1 - 7 && randomm() == 1 && randomm() == 0) {
            var startt = startchar432[Math.floor(Math.random() * startchar432.length)].toString();
            var spacee = spacechar432[Math.floor(Math.random() * spacechar432.length)].toString();
            name = startt.concat(spacee, name)
        } else if (name3.length <= 7 && randomm() == 1) {
            name = name3.replace(/ /g, "");
            var name2 = "";
            for (var i = 0; i < name.length; i++) {
                var spacee = spacechar432[Math.floor(Math.random() * spacechar432.length)].toString();
                name2 = name2.concat(spacee, name.charAt(i))
            }
            name = name2
        } else {
            var enclose = enclosingchar321[Math.floor(Math.random() * enclosingchar321.length)].toString();
            var startt = enclose.charAt(0);
            var endd = enclose.charAt(1);
            name = startt.concat(name, endd)
        }
    }
    return name
}

function randomm() {
    return Math.floor(Math.random() * 2)
}

export { Randomizee }