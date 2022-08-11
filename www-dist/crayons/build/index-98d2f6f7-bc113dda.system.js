System.register(["./index-dc611d24-4c9389ae.system.js","./index-d2a6c100-e71a69ec.system.js","./_rollupPluginBabelHelpers-ef57da83-3e4652f5.system.js"],(function(e){"use strict";var i,n,t,a,r;return{setters:[function(e){i=e.b;n=e.a;t=e.c;a=e.d},function(e){r=e.i},function(){}],execute:function(){function u(e,i){if(e.one!==undefined&&i===1){return e.one}var n=i%10;var t=i%100;if(n===1&&t!==11){return e.singularNominative.replace("{{count}}",i)}else if(n>=2&&n<=4&&(t<10||t>20)){return e.singularGenitive.replace("{{count}}",i)}else{return e.pluralGenitive.replace("{{count}}",i)}}function o(e){return function(i,n){if(n.addSuffix){if(n.comparison>0){if(e.future){return u(e.future,i)}else{return"через "+u(e.regular,i)}}else{if(e.past){return u(e.past,i)}else{return u(e.regular,i)+" назад"}}}else{return u(e.regular,i)}}}var l={lessThanXSeconds:o({regular:{one:"меньше секунды",singularNominative:"меньше {{count}} секунды",singularGenitive:"меньше {{count}} секунд",pluralGenitive:"меньше {{count}} секунд"},future:{one:"меньше, чем через секунду",singularNominative:"меньше, чем через {{count}} секунду",singularGenitive:"меньше, чем через {{count}} секунды",pluralGenitive:"меньше, чем через {{count}} секунд"}}),xSeconds:o({regular:{singularNominative:"{{count}} секунда",singularGenitive:"{{count}} секунды",pluralGenitive:"{{count}} секунд"},past:{singularNominative:"{{count}} секунду назад",singularGenitive:"{{count}} секунды назад",pluralGenitive:"{{count}} секунд назад"},future:{singularNominative:"через {{count}} секунду",singularGenitive:"через {{count}} секунды",pluralGenitive:"через {{count}} секунд"}}),halfAMinute:function e(i,n){if(n.addSuffix){if(n.comparison>0){return"через полминуты"}else{return"полминуты назад"}}return"полминуты"},lessThanXMinutes:o({regular:{one:"меньше минуты",singularNominative:"меньше {{count}} минуты",singularGenitive:"меньше {{count}} минут",pluralGenitive:"меньше {{count}} минут"},future:{one:"меньше, чем через минуту",singularNominative:"меньше, чем через {{count}} минуту",singularGenitive:"меньше, чем через {{count}} минуты",pluralGenitive:"меньше, чем через {{count}} минут"}}),xMinutes:o({regular:{singularNominative:"{{count}} минута",singularGenitive:"{{count}} минуты",pluralGenitive:"{{count}} минут"},past:{singularNominative:"{{count}} минуту назад",singularGenitive:"{{count}} минуты назад",pluralGenitive:"{{count}} минут назад"},future:{singularNominative:"через {{count}} минуту",singularGenitive:"через {{count}} минуты",pluralGenitive:"через {{count}} минут"}}),aboutXHours:o({regular:{singularNominative:"около {{count}} часа",singularGenitive:"около {{count}} часов",pluralGenitive:"около {{count}} часов"},future:{singularNominative:"приблизительно через {{count}} час",singularGenitive:"приблизительно через {{count}} часа",pluralGenitive:"приблизительно через {{count}} часов"}}),xHours:o({regular:{singularNominative:"{{count}} час",singularGenitive:"{{count}} часа",pluralGenitive:"{{count}} часов"}}),xDays:o({regular:{singularNominative:"{{count}} день",singularGenitive:"{{count}} дня",pluralGenitive:"{{count}} дней"}}),aboutXWeeks:o({regular:{singularNominative:"около {{count}} недели",singularGenitive:"около {{count}} недель",pluralGenitive:"около {{count}} недель"},future:{singularNominative:"приблизительно через {{count}} неделю",singularGenitive:"приблизительно через {{count}} недели",pluralGenitive:"приблизительно через {{count}} недель"}}),xWeeks:o({regular:{singularNominative:"{{count}} неделя",singularGenitive:"{{count}} недели",pluralGenitive:"{{count}} недель"}}),aboutXMonths:o({regular:{singularNominative:"около {{count}} месяца",singularGenitive:"около {{count}} месяцев",pluralGenitive:"около {{count}} месяцев"},future:{singularNominative:"приблизительно через {{count}} месяц",singularGenitive:"приблизительно через {{count}} месяца",pluralGenitive:"приблизительно через {{count}} месяцев"}}),xMonths:o({regular:{singularNominative:"{{count}} месяц",singularGenitive:"{{count}} месяца",pluralGenitive:"{{count}} месяцев"}}),aboutXYears:o({regular:{singularNominative:"около {{count}} года",singularGenitive:"около {{count}} лет",pluralGenitive:"около {{count}} лет"},future:{singularNominative:"приблизительно через {{count}} год",singularGenitive:"приблизительно через {{count}} года",pluralGenitive:"приблизительно через {{count}} лет"}}),xYears:o({regular:{singularNominative:"{{count}} год",singularGenitive:"{{count}} года",pluralGenitive:"{{count}} лет"}}),overXYears:o({regular:{singularNominative:"больше {{count}} года",singularGenitive:"больше {{count}} лет",pluralGenitive:"больше {{count}} лет"},future:{singularNominative:"больше, чем через {{count}} год",singularGenitive:"больше, чем через {{count}} года",pluralGenitive:"больше, чем через {{count}} лет"}}),almostXYears:o({regular:{singularNominative:"почти {{count}} год",singularGenitive:"почти {{count}} года",pluralGenitive:"почти {{count}} лет"},future:{singularNominative:"почти через {{count}} год",singularGenitive:"почти через {{count}} года",pluralGenitive:"почти через {{count}} лет"}})};function s(e,i,n){n=n||{};return l[e](i,n)}var c={full:"EEEE, d MMMM y 'г.'",long:"d MMMM y 'г.'",medium:"d MMM y 'г.'",short:"dd.MM.y"};var v={full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"};var d={any:"{{date}}, {{time}}"};var g={date:i({formats:c,defaultWidth:"full"}),time:i({formats:v,defaultWidth:"full"}),dateTime:i({formats:d,defaultWidth:"any"})};var m=["воскресенье","понедельник","вторник","среду","четверг","пятницу","субботу"];function f(e){var i=m[e];switch(e){case 0:return"'в прошлое "+i+" в' p";case 1:case 2:case 4:return"'в прошлый "+i+" в' p";case 3:case 5:case 6:return"'в прошлую "+i+" в' p"}}function p(e){var i=m[e];if(e===2){return"'во "+i+" в' p"}else{return"'в "+i+" в' p"}}function h(e){var i=m[e];switch(e){case 0:return"'в следующее "+i+" в' p";case 1:case 2:case 4:return"'в следующий "+i+" в' p";case 3:case 5:case 6:return"'в следующую "+i+" в' p"}}var G={lastWeek:function e(i,n,t){var a=i.getUTCDay();if(r(i,n,t)){return p(a)}else{return f(a)}},yesterday:"'вчера в' p",today:"'сегодня в' p",tomorrow:"'завтра в' p",nextWeek:function e(i,n,t){var a=i.getUTCDay();if(r(i,n,t)){return p(a)}else{return h(a)}},other:"P"};function w(e,i,n,t){var a=G[e];if(typeof a==="function"){return a(i,n,t)}return a}var b={narrow:["до н.э.","н.э."],abbreviated:["до н. э.","н. э."],wide:["до нашей эры","нашей эры"]};var y={narrow:["1","2","3","4"],abbreviated:["1-й кв.","2-й кв.","3-й кв.","4-й кв."],wide:["1-й квартал","2-й квартал","3-й квартал","4-й квартал"]};var N={narrow:["Я","Ф","М","А","М","И","И","А","С","О","Н","Д"],abbreviated:["янв.","фев.","март","апр.","май","июнь","июль","авг.","сент.","окт.","нояб.","дек."],wide:["январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь"]};var W={narrow:["Я","Ф","М","А","М","И","И","А","С","О","Н","Д"],abbreviated:["янв.","фев.","мар.","апр.","мая","июн.","июл.","авг.","сент.","окт.","нояб.","дек."],wide:["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"]};var M={narrow:["В","П","В","С","Ч","П","С"],short:["вс","пн","вт","ср","чт","пт","сб"],abbreviated:["вск","пнд","втр","срд","чтв","птн","суб"],wide:["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"]};var P={narrow:{am:"ДП",pm:"ПП",midnight:"полн.",noon:"полд.",morning:"утро",afternoon:"день",evening:"веч.",night:"ночь"},abbreviated:{am:"ДП",pm:"ПП",midnight:"полн.",noon:"полд.",morning:"утро",afternoon:"день",evening:"веч.",night:"ночь"},wide:{am:"ДП",pm:"ПП",midnight:"полночь",noon:"полдень",morning:"утро",afternoon:"день",evening:"вечер",night:"ночь"}};var x={narrow:{am:"ДП",pm:"ПП",midnight:"полн.",noon:"полд.",morning:"утра",afternoon:"дня",evening:"веч.",night:"ночи"},abbreviated:{am:"ДП",pm:"ПП",midnight:"полн.",noon:"полд.",morning:"утра",afternoon:"дня",evening:"веч.",night:"ночи"},wide:{am:"ДП",pm:"ПП",midnight:"полночь",noon:"полдень",morning:"утра",afternoon:"дня",evening:"вечера",night:"ночи"}};function k(e,i){var n=i||{};var t=String(n.unit);var a;if(t==="date"){a="-е"}else if(t==="week"||t==="minute"||t==="second"){a="-я"}else{a="-й"}return e+a}var X={ordinalNumber:k,era:n({values:b,defaultWidth:"wide"}),quarter:n({values:y,defaultWidth:"wide",argumentCallback:function e(i){return Number(i)-1}}),month:n({values:N,defaultWidth:"wide",formattingValues:W,defaultFormattingWidth:"wide"}),day:n({values:M,defaultWidth:"wide"}),dayPeriod:n({values:P,defaultWidth:"any",formattingValues:x,defaultFormattingWidth:"wide"})};var H=/^(\d+)(-?(е|я|й|ое|ье|ая|ья|ый|ой|ий|ый))?/i;var S=/\d+/i;var z={narrow:/^((до )?н\.?\s?э\.?)/i,abbreviated:/^((до )?н\.?\s?э\.?)/i,wide:/^(до нашей эры|нашей эры|наша эра)/i};var C={any:[/^д/i,/^н/i]};var D={narrow:/^[1234]/i,abbreviated:/^[1234](-?[ыои]?й?)? кв.?/i,wide:/^[1234](-?[ыои]?й?)? квартал/i};var T={any:[/1/i,/2/i,/3/i,/4/i]};var E={narrow:/^[яфмаисонд]/i,abbreviated:/^(янв|фев|март?|апр|ма[йя]|июн[ья]?|июл[ья]?|авг|сент?|окт|нояб?|дек)\.?/i,wide:/^(январ[ья]|феврал[ья]|марта?|апрел[ья]|ма[йя]|июн[ья]|июл[ья]|августа?|сентябр[ья]|октябр[ья]|октябр[ья]|ноябр[ья]|декабр[ья])/i};var Y={narrow:[/^я/i,/^ф/i,/^м/i,/^а/i,/^м/i,/^и/i,/^и/i,/^а/i,/^с/i,/^о/i,/^н/i,/^я/i],any:[/^я/i,/^ф/i,/^мар/i,/^ап/i,/^ма[йя]/i,/^июн/i,/^июл/i,/^ав/i,/^с/i,/^о/i,/^н/i,/^д/i]};var j={narrow:/^[впсч]/i,short:/^(вс|во|пн|по|вт|ср|чт|че|пт|пя|сб|су)\.?/i,abbreviated:/^(вск|вос|пнд|пон|втр|вто|срд|сре|чтв|чет|птн|пят|суб).?/i,wide:/^(воскресень[ея]|понедельника?|вторника?|сред[аы]|четверга?|пятниц[аы]|суббот[аы])/i};var q={narrow:[/^в/i,/^п/i,/^в/i,/^с/i,/^ч/i,/^п/i,/^с/i],any:[/^в[ос]/i,/^п[он]/i,/^в/i,/^ср/i,/^ч/i,/^п[ят]/i,/^с[уб]/i]};var F={narrow:/^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,abbreviated:/^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,wide:/^([дп]п|полночь|полдень|утр[оа]|день|дня|вечера?|ноч[ьи])/i};var U={any:{am:/^дп/i,pm:/^пп/i,midnight:/^полн/i,noon:/^полд/i,morning:/^у/i,afternoon:/^д[ен]/i,evening:/^в/i,night:/^н/i}};var V={ordinalNumber:t({matchPattern:H,parsePattern:S,valueCallback:function e(i){return parseInt(i,10)}}),era:a({matchPatterns:z,defaultMatchWidth:"wide",parsePatterns:C,defaultParseWidth:"any"}),quarter:a({matchPatterns:D,defaultMatchWidth:"wide",parsePatterns:T,defaultParseWidth:"any",valueCallback:function e(i){return i+1}}),month:a({matchPatterns:E,defaultMatchWidth:"wide",parsePatterns:Y,defaultParseWidth:"any"}),day:a({matchPatterns:j,defaultMatchWidth:"wide",parsePatterns:q,defaultParseWidth:"any"}),dayPeriod:a({matchPatterns:F,defaultMatchWidth:"wide",parsePatterns:U,defaultParseWidth:"any"})};var A=e("default",{code:"ru",formatDistance:s,formatLong:g,formatRelative:w,localize:X,match:V,options:{weekStartsOn:1,firstWeekContainsDate:1}})}}}));