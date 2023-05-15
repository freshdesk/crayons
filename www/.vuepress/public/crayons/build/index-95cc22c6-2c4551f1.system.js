System.register(["./index-dc611d24-4c9389ae.system.js","./index-d2a6c100-e71a69ec.system.js","./_rollupPluginBabelHelpers-ef57da83-3e4652f5.system.js"],(function(e){"use strict";var t,a,i,n,r;return{setters:[function(e){t=e.b;a=e.a;i=e.c;n=e.d},function(e){r=e.i},function(){}],execute:function(){function s(e){return function(t,a){if(t===1){if(a.addSuffix){return e.one[0].replace("{{time}}",e.one[2])}else{return e.one[0].replace("{{time}}",e.one[1])}}else{var i=t%10===1&&t%100!==11;if(a.addSuffix){return e.other[0].replace("{{time}}",i?e.other[3]:e.other[4]).replace("{{count}}",t)}else{return e.other[0].replace("{{time}}",i?e.other[1]:e.other[2]).replace("{{count}}",t)}}}}var d={lessThanXSeconds:s({one:["mazāk par {{time}}","sekundi","sekundi"],other:["mazāk nekā {{count}} {{time}}","sekunde","sekundes","sekundes","sekundēm"]}),xSeconds:s({one:["1 {{time}}","sekunde","sekundes"],other:["{{count}} {{time}}","sekunde","sekundes","sekundes","sekundēm"]}),halfAMinute:function e(t,a){if(a.addSuffix){return"pusminūtes"}else{return"pusminūte"}},lessThanXMinutes:s({one:["mazāk par {{time}}","minūti","minūti"],other:["mazāk nekā {{count}} {{time}}","minūte","minūtes","minūtes","minūtēm"]}),xMinutes:s({one:["1 {{time}}","minūte","minūtes"],other:["{{count}} {{time}}","minūte","minūtes","minūtes","minūtēm"]}),aboutXHours:s({one:["apmēram 1 {{time}}","stunda","stundas"],other:["apmēram {{count}} {{time}}","stunda","stundas","stundas","stundām"]}),xHours:s({one:["1 {{time}}","stunda","stundas"],other:["{{count}} {{time}}","stunda","stundas","stundas","stundām"]}),xDays:s({one:["1 {{time}}","diena","dienas"],other:["{{count}} {{time}}","diena","dienas","dienas","dienām"]}),aboutXWeeks:s({one:["apmēram 1 {{time}}","nedēļa","nedēļas"],other:["apmēram {{count}} {{time}}","nedēļa","nedēļu","nedēļas","nedēļām"]}),xWeeks:s({one:["1 {{time}}","nedēļa","nedēļas"],other:["{{count}} {{time}}","nedēļa","nedēļu","nedēļas","nedēļām"]}),aboutXMonths:s({one:["apmēram 1 {{time}}","mēnesis","mēneša"],other:["apmēram {{count}} {{time}}","mēnesis","mēneši","mēneša","mēnešiem"]}),xMonths:s({one:["1 {{time}}","mēnesis","mēneša"],other:["{{count}} {{time}}","mēnesis","mēneši","mēneša","mēnešiem"]}),aboutXYears:s({one:["apmēram 1 {{time}}","gads","gada"],other:["apmēram {{count}} {{time}}","gads","gadi","gada","gadiem"]}),xYears:s({one:["1 {{time}}","gads","gada"],other:["{{count}} {{time}}","gads","gadi","gada","gadiem"]}),overXYears:s({one:["ilgāk par 1 {{time}}","gadu","gadu"],other:["vairāk nekā {{count}} {{time}}","gads","gadi","gada","gadiem"]}),almostXYears:s({one:["gandrīz 1 {{time}}","gads","gada"],other:["vairāk nekā {{count}} {{time}}","gads","gadi","gada","gadiem"]})};function m(e,t,a){a=a||{};var i=d[e](t,a);if(a.addSuffix){if(a.comparison>0){return"pēc "+i}else{return"pirms "+i}}return i}var o={full:"EEEE, y. 'gada' d. MMMM",long:"y. 'gada' d. MMMM",medium:"dd.MM.y.",short:"dd.MM.y."};var u={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"};var p={full:"{{date}} 'plkst.' {{time}}",long:"{{date}} 'plkst.' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"};var c={date:t({formats:o,defaultWidth:"full"}),time:t({formats:u,defaultWidth:"full"}),dateTime:t({formats:p,defaultWidth:"full"})};var l=["svētdienā","pirmdienā","otrdienā","trešdienā","ceturtdienā","piektdienā","sestdienā"];var v={lastWeek:function e(t,a,i){if(r(t,a,i)){return"eeee 'plkst.' p"}var n=l[t.getUTCDay()];return"'Pagājušā "+n+" plkst.' p"},yesterday:"'Vakar plkst.' p",today:"'Šodien plkst.' p",tomorrow:"'Rīt plkst.' p",nextWeek:function e(t,a,i){if(r(t,a,i)){return"eeee 'plkst.' p"}var n=l[t.getUTCDay()];return"'Nākamajā "+n+" plkst.' p"},other:"P"};function f(e,t,a,i){var n=v[e];if(typeof n==="function"){return n(t,a,i)}return n}var k={narrow:["p.m.ē","m.ē"],abbreviated:["p. m. ē.","m. ē."],wide:["pirms mūsu ēras","mūsu ērā"]};var h={narrow:["1","2","3","4"],abbreviated:["1. cet.","2. cet.","3. cet.","4. cet."],wide:["pirmais ceturksnis","otrais ceturksnis","trešais ceturksnis","ceturtais ceturksnis"]};var g={narrow:["1","2","3","4"],abbreviated:["1. cet.","2. cet.","3. cet.","4. cet."],wide:["pirmajā ceturksnī","otrajā ceturksnī","trešajā ceturksnī","ceturtajā ceturksnī"]};var b={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["janv.","febr.","marts","apr.","maijs","jūn.","jūl.","aug.","sept.","okt.","nov.","dec."],wide:["janvāris","februāris","marts","aprīlis","maijs","jūnijs","jūlijs","augusts","septembris","oktobris","novembris","decembris"]};var j={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["janv.","febr.","martā","apr.","maijs","jūn.","jūl.","aug.","sept.","okt.","nov.","dec."],wide:["janvārī","februārī","martā","aprīlī","maijā","jūnijā","jūlijā","augustā","septembrī","oktobrī","novembrī","decembrī"]};var w={narrow:["S","P","O","T","C","P","S"],short:["Sv","P","O","T","C","Pk","S"],abbreviated:["svētd.","pirmd.","otrd.","trešd.","ceturtd.","piektd.","sestd."],wide:["svētdiena","pirmdiena","otrdiena","trešdiena","ceturtdiena","piektdiena","sestdiena"]};var P={narrow:["S","P","O","T","C","P","S"],short:["Sv","P","O","T","C","Pk","S"],abbreviated:["svētd.","pirmd.","otrd.","trešd.","ceturtd.","piektd.","sestd."],wide:["svētdienā","pirmdienā","otrdienā","trešdienā","ceturtdienā","piektdienā","sestdienā"]};var y={narrow:{am:"am",pm:"pm",midnight:"pusn.",noon:"pusd.",morning:"rīts",afternoon:"diena",evening:"vakars",night:"nakts"},abbreviated:{am:"am",pm:"pm",midnight:"pusn.",noon:"pusd.",morning:"rīts",afternoon:"pēcpusd.",evening:"vakars",night:"nakts"},wide:{am:"am",pm:"pm",midnight:"pusnakts",noon:"pusdienlaiks",morning:"rīts",afternoon:"pēcpusdiena",evening:"vakars",night:"nakts"}};var W={narrow:{am:"am",pm:"pm",midnight:"pusn.",noon:"pusd.",morning:"rītā",afternoon:"dienā",evening:"vakarā",night:"naktī"},abbreviated:{am:"am",pm:"pm",midnight:"pusn.",noon:"pusd.",morning:"rītā",afternoon:"pēcpusd.",evening:"vakarā",night:"naktī"},wide:{am:"am",pm:"pm",midnight:"pusnaktī",noon:"pusdienlaikā",morning:"rītā",afternoon:"pēcpusdienā",evening:"vakarā",night:"naktī"}};function M(e,t){return e+"."}var S={ordinalNumber:M,era:a({values:k,defaultWidth:"wide"}),quarter:a({values:h,defaultWidth:"wide",formattingValues:g,defaultFormattingWidth:"wide",argumentCallback:function e(t){return Number(t)-1}}),month:a({values:b,defaultWidth:"wide",formattingValues:j,defaultFormattingWidth:"wide"}),day:a({values:w,defaultWidth:"wide",formattingValues:P,defaultFormattingWidth:"wide"}),dayPeriod:a({values:y,defaultWidth:"wide",formattingValues:W,defaultFormattingWidth:"wide"})};var x=/^(\d+)\./i;var z=/\d+/i;var H={narrow:/^(p\.m\.ē|m\.ē)/i,abbreviated:/^(p\. m\. ē\.|m\. ē\.)/i,wide:/^(pirms mūsu ēras|mūsu ērā)/i};var C={any:[/^p/i,/^m/i]};var T={narrow:/^[1234]/i,abbreviated:/^[1234](\. cet\.)/i,wide:/^(pirma(is|jā)|otra(is|jā)|treša(is|jā)|ceturta(is|jā)) ceturksn(is|ī)/i};var X={narrow:[/^1/i,/^2/i,/^3/i,/^4/i],abbreviated:[/^1/i,/^2/i,/^3/i,/^4/i],wide:[/^p/i,/^o/i,/^t/i,/^c/i]};var D={narrow:/^[jfmasond]/i,abbreviated:/^(janv\.|febr\.|marts|apr\.|maijs|jūn\.|jūl\.|aug\.|sept\.|okt\.|nov\.|dec\.)/i,wide:/^(janvār(is|ī)|februār(is|ī)|mart[sā]|aprīl(is|ī)|maij[sā]|jūnij[sā]|jūlij[sā]|august[sā]|septembr(is|ī)|oktobr(is|ī)|novembr(is|ī)|decembr(is|ī))/i};var O={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^mai/i,/^jūn/i,/^jūl/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]};var F={narrow:/^[spotc]/i,short:/^(sv|pi|o|t|c|pk|s)/i,abbreviated:/^(svētd\.|pirmd\.|otrd.\|trešd\.|ceturtd\.|piektd\.|sestd\.)/i,wide:/^(svētdien(a|ā)|pirmdien(a|ā)|otrdien(a|ā)|trešdien(a|ā)|ceturtdien(a|ā)|piektdien(a|ā)|sestdien(a|ā))/i};var J={narrow:[/^s/i,/^p/i,/^o/i,/^t/i,/^c/i,/^p/i,/^s/i],any:[/^sv/i,/^pi/i,/^o/i,/^t/i,/^c/i,/^p/i,/^se/i]};var N={narrow:/^(am|pm|pusn\.|pusd\.|rīt(s|ā)|dien(a|ā)|vakar(s|ā)|nakt(s|ī))/,abbreviated:/^(am|pm|pusn\.|pusd\.|rīt(s|ā)|pēcpusd\.|vakar(s|ā)|nakt(s|ī))/,wide:/^(am|pm|pusnakt(s|ī)|pusdienlaik(s|ā)|rīt(s|ā)|pēcpusdien(a|ā)|vakar(s|ā)|nakt(s|ī))/i};var A={any:{am:/^am/i,pm:/^pm/i,midnight:/^pusn/i,noon:/^pusd/i,morning:/^r/i,afternoon:/^(d|pēc)/i,evening:/^v/i,night:/^n/i}};var V={ordinalNumber:i({matchPattern:x,parsePattern:z,valueCallback:function e(t){return parseInt(t,10)}}),era:n({matchPatterns:H,defaultMatchWidth:"wide",parsePatterns:C,defaultParseWidth:"any"}),quarter:n({matchPatterns:T,defaultMatchWidth:"wide",parsePatterns:X,defaultParseWidth:"any",valueCallback:function e(t){return t+1}}),month:n({matchPatterns:D,defaultMatchWidth:"wide",parsePatterns:O,defaultParseWidth:"any"}),day:n({matchPatterns:F,defaultMatchWidth:"wide",parsePatterns:J,defaultParseWidth:"any"}),dayPeriod:n({matchPatterns:N,defaultMatchWidth:"any",parsePatterns:A,defaultParseWidth:"any"})};var E=e("default",{code:"lv",formatDistance:m,formatLong:c,formatRelative:f,localize:S,match:V,options:{weekStartsOn:1,firstWeekContainsDate:4}})}}}));