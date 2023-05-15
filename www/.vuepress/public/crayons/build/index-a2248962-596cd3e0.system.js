System.register(["./index-dc611d24-4c9389ae.system.js"],(function(e){"use strict";var n,t,o,r;return{setters:[function(e){n=e.b;t=e.a;o=e.c;r=e.d}],execute:function(){var i={lessThanXSeconds:{standalone:{one:"manner wéi eng Sekonn",other:"manner wéi {{count}} Sekonnen"},withPreposition:{one:"manner wéi enger Sekonn",other:"manner wéi {{count}} Sekonnen"}},xSeconds:{standalone:{one:"eng Sekonn",other:"{{count}} Sekonnen"},withPreposition:{one:"enger Sekonn",other:"{{count}} Sekonnen"}},halfAMinute:{standalone:"eng hallef Minutt",withPreposition:"enger hallwer Minutt"},lessThanXMinutes:{standalone:{one:"manner wéi eng Minutt",other:"manner wéi {{count}} Minutten"},withPreposition:{one:"manner wéi enger Minutt",other:"manner wéi {{count}} Minutten"}},xMinutes:{standalone:{one:"eng Minutt",other:"{{count}} Minutten"},withPreposition:{one:"enger Minutt",other:"{{count}} Minutten"}},aboutXHours:{standalone:{one:"ongeféier eng Stonn",other:"ongeféier {{count}} Stonnen"},withPreposition:{one:"ongeféier enger Stonn",other:"ongeféier {{count}} Stonnen"}},xHours:{standalone:{one:"eng Stonn",other:"{{count}} Stonnen"},withPreposition:{one:"enger Stonn",other:"{{count}} Stonnen"}},xDays:{standalone:{one:"een Dag",other:"{{count}} Deeg"},withPreposition:{one:"engem Dag",other:"{{count}} Deeg"}},aboutXWeeks:{standalone:{one:"ongeféier eng Woch",other:"ongeféier {{count}} Wochen"},withPreposition:{one:"ongeféier enger Woche",other:"ongeféier {{count}} Wochen"}},xWeeks:{standalone:{one:"eng Woch",other:"{{count}} Wochen"},withPreposition:{one:"enger Woch",other:"{{count}} Wochen"}},aboutXMonths:{standalone:{one:"ongeféier ee Mount",other:"ongeféier {{count}} Méint"},withPreposition:{one:"ongeféier engem Mount",other:"ongeféier {{count}} Méint"}},xMonths:{standalone:{one:"ee Mount",other:"{{count}} Méint"},withPreposition:{one:"engem Mount",other:"{{count}} Méint"}},aboutXYears:{standalone:{one:"ongeféier ee Joer",other:"ongeféier {{count}} Joer"},withPreposition:{one:"ongeféier engem Joer",other:"ongeféier {{count}} Joer"}},xYears:{standalone:{one:"ee Joer",other:"{{count}} Joer"},withPreposition:{one:"engem Joer",other:"{{count}} Joer"}},overXYears:{standalone:{one:"méi wéi ee Joer",other:"méi wéi {{count}} Joer"},withPreposition:{one:"méi wéi engem Joer",other:"méi wéi {{count}} Joer"}},almostXYears:{standalone:{one:"bal ee Joer",other:"bal {{count}} Joer"},withPreposition:{one:"bal engem Joer",other:"bal {{count}} Joer"}}};var a=["d","h","n","t","z"];var s=["a,","e","i","o","u"];var u=[0,1,2,3,8,9];var m=[40,50,60,70];function d(e){var n=e.charAt(0).toLowerCase();if(s.indexOf(n)!=-1||a.indexOf(n)!=-1){return true}var t=e.split(" ")[0];var o=parseInt(t);if(!isNaN(o)&&u.indexOf(o%10)!=-1&&m.indexOf(parseInt(t.substring(0,2)))==-1){return true}return false}function h(e,n,t){t=t||{};var o=t.addSuffix?i[e].withPreposition:i[e].standalone;var r;if(typeof o==="string"){r=o}else if(n===1){r=o.one}else{r=o.other.replace("{{count}}",n)}if(t.addSuffix){if(t.comparison>0){return"a"+(d(r)?"n":"")+" "+r}else{return"viru"+(d(r)?"n":"")+" "+r}}return r}var g={full:"EEEE, do MMMM y",long:"do MMMM y",medium:"do MMM y",short:"dd.MM.yy"};var l={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"};var c={full:"{{date}} 'um' {{time}}",long:"{{date}} 'um' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"};var f={date:n({formats:g,defaultWidth:"full"}),time:n({formats:l,defaultWidth:"full"}),dateTime:n({formats:c,defaultWidth:"full"})};var v={lastWeek:function e(n){var t=n.getUTCDay();var o="'läschte";if(t===2||t===4){o+="n"}o+="' eeee 'um' p";return o},yesterday:"'gëschter um' p",today:"'haut um' p",tomorrow:"'moien um' p",nextWeek:"eeee 'um' p",other:"P"};function w(e,n,t,o){var r=v[e];if(typeof r==="function"){return r(n)}return r}var M={narrow:["v.Chr.","n.Chr."],abbreviated:["v.Chr.","n.Chr."],wide:["viru Christus","no Christus"]};var b={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. Quartal","2. Quartal","3. Quartal","4. Quartal"]};var p={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mäe","Abr","Mee","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],wide:["Januar","Februar","Mäerz","Abrëll","Mee","Juni","Juli","August","September","Oktober","November","Dezember"]};var P={narrow:["S","M","D","M","D","F","S"],short:["So","Mé","Dë","Më","Do","Fr","Sa"],abbreviated:["So.","Mé.","Dë.","Më.","Do.","Fr.","Sa."],wide:["Sonndeg","Méindeg","Dënschdeg","Mëttwoch","Donneschdeg","Freideg","Samschdeg"]};var S={narrow:{am:"mo.",pm:"nomë.",midnight:"Mëtternuecht",noon:"Mëtteg",morning:"Moien",afternoon:"Nomëtteg",evening:"Owend",night:"Nuecht"},abbreviated:{am:"moies",pm:"nomëttes",midnight:"Mëtternuecht",noon:"Mëtteg",morning:"Moien",afternoon:"Nomëtteg",evening:"Owend",night:"Nuecht"},wide:{am:"moies",pm:"nomëttes",midnight:"Mëtternuecht",noon:"Mëtteg",morning:"Moien",afternoon:"Nomëtteg",evening:"Owend",night:"Nuecht"}};var W={narrow:{am:"mo.",pm:"nom.",midnight:"Mëtternuecht",noon:"mëttes",morning:"moies",afternoon:"nomëttes",evening:"owes",night:"nuets"},abbreviated:{am:"moies",pm:"nomëttes",midnight:"Mëtternuecht",noon:"mëttes",morning:"moies",afternoon:"nomëttes",evening:"owes",night:"nuets"},wide:{am:"moies",pm:"nomëttes",midnight:"Mëtternuecht",noon:"mëttes",morning:"moies",afternoon:"nomëttes",evening:"owes",night:"nuets"}};function y(e,n){var t=Number(e);return t+"."}var J={ordinalNumber:y,era:t({values:M,defaultWidth:"wide"}),quarter:t({values:b,defaultWidth:"wide",argumentCallback:function e(n){return Number(n)-1}}),month:t({values:p,defaultWidth:"wide"}),day:t({values:P,defaultWidth:"wide"}),dayPeriod:t({values:S,defaultWidth:"wide",formattingValues:W,defaultFormattingWidth:"wide"})};var k=/^(\d+)(\.)?/i;var D=/\d+/i;var C={narrow:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,abbreviated:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,wide:/^(viru Christus|virun eiser Zäitrechnung|no Christus|eiser Zäitrechnung)/i};var x={any:[/^v/i,/^n/i]};var N={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? Quartal/i};var j={any:[/1/i,/2/i,/3/i,/4/i]};var z={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mäe|abr|mee|jun|jul|aug|sep|okt|nov|dez)/i,wide:/^(januar|februar|mäerz|abrëll|mee|juni|juli|august|september|oktober|november|dezember)/i};var O={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mä/i,/^ab/i,/^me/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]};var H={narrow:/^[smdf]/i,short:/^(so|mé|dë|më|do|fr|sa)/i,abbreviated:/^(son?|méi?|dën?|mët?|don?|fre?|sam?)\.?/i,wide:/^(sonndeg|méindeg|dënschdeg|mëttwoch|donneschdeg|freideg|samschdeg)/i};var Q={any:[/^so/i,/^mé/i,/^dë/i,/^më/i,/^do/i,/^f/i,/^sa/i]};var A={narrow:/^(mo\.?|nomë\.?|Mëtternuecht|mëttes|moies|nomëttes|owes|nuets)/i,abbreviated:/^(moi\.?|nomët\.?|Mëtternuecht|mëttes|moies|nomëttes|owes|nuets)/i,wide:/^(moies|nomëttes|Mëtternuecht|mëttes|moies|nomëttes|owes|nuets)/i};var F={any:{am:/^m/i,pm:/^n/i,midnight:/^Mëtter/i,noon:/^mëttes/i,morning:/moies/i,afternoon:/nomëttes/i,evening:/owes/i,night:/nuets/i}};var X={ordinalNumber:o({matchPattern:k,parsePattern:D,valueCallback:function e(n){return parseInt(n,10)}}),era:r({matchPatterns:C,defaultMatchWidth:"wide",parsePatterns:x,defaultParseWidth:"any"}),quarter:r({matchPatterns:N,defaultMatchWidth:"wide",parsePatterns:j,defaultParseWidth:"any",valueCallback:function e(n){return n+1}}),month:r({matchPatterns:z,defaultMatchWidth:"wide",parsePatterns:O,defaultParseWidth:"any"}),day:r({matchPatterns:H,defaultMatchWidth:"wide",parsePatterns:Q,defaultParseWidth:"any"}),dayPeriod:r({matchPatterns:A,defaultMatchWidth:"wide",parsePatterns:F,defaultParseWidth:"any"})};var E=e("default",{code:"lb",formatDistance:h,formatLong:f,formatRelative:w,localize:J,match:X,options:{weekStartsOn:1,firstWeekContainsDate:4}})}}}));