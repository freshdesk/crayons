System.register(["./index-dc611d24-4c9389ae.system.js"],(function(r){"use strict";var e,n,t,i;return{setters:[function(r){e=r.b;n=r.a;t=r.c;i=r.d}],execute:function(){var a={lessThanXSeconds:{one:"minna en 1 sekúnda",other:"minna en {{count}} sekúndur"},xSeconds:{one:"1 sekúnda",other:"{{count}} sekúndur"},halfAMinute:"hálf mínúta",lessThanXMinutes:{one:"minna en 1 mínúta",other:"minna en {{count}} mínútur"},xMinutes:{one:"1 mínúta",other:"{{count}} mínútur"},aboutXHours:{one:"u.þ.b. 1 klukkustund",other:"u.þ.b. {{count}} klukkustundir"},xHours:{one:"1 klukkustund",other:"{{count}} klukkustundir"},xDays:{one:"1 dagur",other:"{{count}} dagar"},aboutXWeeks:{one:"um viku",other:"um {{count}} vikur"},xWeeks:{one:"1 viku",other:"{{count}} vikur"},aboutXMonths:{one:"u.þ.b. 1 mánuður",other:"u.þ.b. {{count}} mánuðir"},xMonths:{one:"1 mánuður",other:"{{count}} mánuðir"},aboutXYears:{one:"u.þ.b. 1 ár",other:"u.þ.b. {{count}} ár"},xYears:{one:"1 ár",other:"{{count}} ár"},overXYears:{one:"meira en 1 ár",other:"meira en {{count}} ár"},almostXYears:{one:"næstum 1 ár",other:"næstum {{count}} ár"}};var u=function r(e,n,t){var i;var u=a[e];if(typeof u==="string"){i=u}else if(n===1){i=u.one}else{i=u.other.replace("{{count}}",n.toString())}if(t!==null&&t!==void 0&&t.addSuffix){if(t.comparison&&t.comparison>0){return"í "+i}else{return i+" síðan"}}return i};var d={full:"EEEE, do MMMM y",long:"do MMMM y",medium:"do MMM y",short:"d.MM.y"};var o={full:"'kl'. HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"};var m={full:"{{date}} 'kl.' {{time}}",long:"{{date}} 'kl.' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"};var s={date:e({formats:d,defaultWidth:"full"}),time:e({formats:o,defaultWidth:"full"}),dateTime:e({formats:m,defaultWidth:"full"})};var f={lastWeek:"'síðasta' dddd 'kl.' p",yesterday:"'í gær kl.' p",today:"'í dag kl.' p",tomorrow:"'á morgun kl.' p",nextWeek:"dddd 'kl.' p",other:"P"};var l=function r(e,n,t,i){return f[e]};var g={narrow:["f.Kr.","e.Kr."],abbreviated:["f.Kr.","e.Kr."],wide:["fyrir Krist","eftir Krist"]};var h={narrow:["1","2","3","4"],abbreviated:["1F","2F","3F","4F"],wide:["1. fjórðungur","2. fjórðungur","3. fjórðungur","4. fjórðungur"]};var v={narrow:["J","F","M","A","M","J","J","Á","S","Ó","N","D"],abbreviated:["jan.","feb.","mars","apríl","maí","júní","júlí","ágúst","sept.","okt.","nóv.","des."],wide:["janúar","febrúar","mars","apríl","maí","júní","júlí","ágúst","september","október","nóvember","desember"]};var c={narrow:["S","M","Þ","M","F","F","L"],short:["Su","Má","Þr","Mi","Fi","Fö","La"],abbreviated:["sun.","mán.","þri.","mið.","fim.","fös.","lau"],wide:["sunnudagur","mánudagur","þriðjudagur","miðvikudagur","fimmtudagur","föstudagur","laugardagur"]};var k={narrow:{am:"f",pm:"e",midnight:"miðnætti",noon:"hádegi",morning:"morgunn",afternoon:"síðdegi",evening:"kvöld",night:"nótt"},abbreviated:{am:"f.h.",pm:"e.h.",midnight:"miðnætti",noon:"hádegi",morning:"morgunn",afternoon:"síðdegi",evening:"kvöld",night:"nótt"},wide:{am:"fyrir hádegi",pm:"eftir hádegi",midnight:"miðnætti",noon:"hádegi",morning:"morgunn",afternoon:"síðdegi",evening:"kvöld",night:"nótt"}};var b={narrow:{am:"f",pm:"e",midnight:"á miðnætti",noon:"á hádegi",morning:"að morgni",afternoon:"síðdegis",evening:"um kvöld",night:"um nótt"},abbreviated:{am:"f.h.",pm:"e.h.",midnight:"á miðnætti",noon:"á hádegi",morning:"að morgni",afternoon:"síðdegis",evening:"um kvöld",night:"um nótt"},wide:{am:"fyrir hádegi",pm:"eftir hádegi",midnight:"á miðnætti",noon:"á hádegi",morning:"að morgni",afternoon:"síðdegis",evening:"um kvöld",night:"um nótt"}};var w=function r(e,n){var t=Number(e);return t+"."};var p={ordinalNumber:w,era:n({values:g,defaultWidth:"wide"}),quarter:n({values:h,defaultWidth:"wide",argumentCallback:function r(e){return e-1}}),month:n({values:v,defaultWidth:"wide"}),day:n({values:c,defaultWidth:"wide"}),dayPeriod:n({values:k,defaultWidth:"wide",formattingValues:b,defaultFormattingWidth:"wide"})};var y=/^(\d+)(\.)?/i;var M=/\d+(\.)?/i;var j={narrow:/^(f\.Kr\.|e\.Kr\.)/i,abbreviated:/^(f\.Kr\.|e\.Kr\.)/i,wide:/^(fyrir Krist|eftir Krist)/i};var W={any:[/^(f\.Kr\.)/i,/^(e\.Kr\.)/i]};var P={narrow:/^[1234]\.?/i,abbreviated:/^q[1234]\.?/i,wide:/^[1234]\.? fjórðungur/i};var K={any:[/1\.?/i,/2\.?/i,/3\.?/i,/4\.?/i]};var x={narrow:/^[jfmásónd]/i,abbreviated:/^(jan\.|feb\.|mars\.|apríl\.|maí|júní|júlí|águst|sep\.|oct\.|nov\.|dec\.)/i,wide:/^(januar|febrúar|mars|apríl|maí|júní|júlí|águst|september|október|nóvember|desember)/i};var F={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^á/i,/^s/i,/^ó/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^maí/i,/^jún/i,/^júl/i,/^áu/i,/^s/i,/^ó/i,/^n/i,/^d/i]};var H={narrow:/^[smtwf]/i,short:/^(su|má|þr|mi|fi|fö|la)/i,abbreviated:/^(sun|mán|þri|mið|fim|fös|lau)\.?/i,wide:/^(sunnudagur|mánudagur|þriðjudagur|miðvikudagur|fimmtudagur|föstudagur|laugardagur)/i};var S={narrow:[/^s/i,/^m/i,/^þ/i,/^m/i,/^f/i,/^f/i,/^l/i],any:[/^su/i,/^má/i,/^þr/i,/^mi/i,/^fi/i,/^fö/i,/^la/i]};var X={narrow:/^(f|e|síðdegis|(á|að|um) (morgni|kvöld|nótt|miðnætti))/i,any:/^(fyrir hádegi|eftir hádegi|[ef]\.?h\.?|síðdegis|morgunn|(á|að|um) (morgni|kvöld|nótt|miðnætti))/i};var z={any:{am:/^f/i,pm:/^e/i,midnight:/^mi/i,noon:/^há/i,morning:/morgunn/i,afternoon:/síðdegi/i,evening:/kvöld/i,night:/nótt/i}};var C={ordinalNumber:t({matchPattern:y,parsePattern:M,valueCallback:function r(e){return parseInt(e,10)}}),era:i({matchPatterns:j,defaultMatchWidth:"wide",parsePatterns:W,defaultParseWidth:"any"}),quarter:i({matchPatterns:P,defaultMatchWidth:"wide",parsePatterns:K,defaultParseWidth:"any",valueCallback:function r(e){return e+1}}),month:i({matchPatterns:x,defaultMatchWidth:"wide",parsePatterns:F,defaultParseWidth:"any"}),day:i({matchPatterns:H,defaultMatchWidth:"wide",parsePatterns:S,defaultParseWidth:"any"}),dayPeriod:i({matchPatterns:X,defaultMatchWidth:"any",parsePatterns:z,defaultParseWidth:"any"})};var D=r("default",{code:"is",formatDistance:u,formatLong:s,formatRelative:l,localize:p,match:C,options:{weekStartsOn:1,firstWeekContainsDate:4}})}}}));