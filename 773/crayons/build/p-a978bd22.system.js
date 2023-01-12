System.register(["./p-6fb516eb.system.js"],(function(e){"use strict";var t,a,i,n;return{setters:[function(e){t=e.b;a=e.a;i=e.c;n=e.d}],execute:function(){var r={lessThanXSeconds:{one:"ավելի քիչ քան 1 վայրկյան",other:"ավելի քիչ քան {{count}} վայրկյան"},xSeconds:{one:"1 վայրկյան",other:"{{count}} վայրկյան"},halfAMinute:"կես րոպե",lessThanXMinutes:{one:"ավելի քիչ քան 1 րոպե",other:"ավելի քիչ քան {{count}} րոպե"},xMinutes:{one:"1 րոպե",other:"{{count}} րոպե"},aboutXHours:{one:"մոտ 1 ժամ",other:"մոտ {{count}} ժամ"},xHours:{one:"1 ժամ",other:"{{count}} ժամ"},xDays:{one:"1 օր",other:"{{count}} օր"},aboutXWeeks:{one:"մոտ 1 շաբաթ",other:"մոտ {{count}} շաբաթ"},xWeeks:{one:"1 շաբաթ",other:"{{count}} շաբաթ"},aboutXMonths:{one:"մոտ 1 ամիս",other:"մոտ {{count}} ամիս"},xMonths:{one:"1 ամիս",other:"{{count}} ամիս"},aboutXYears:{one:"մոտ 1 տարի",other:"մոտ {{count}} տարի"},xYears:{one:"1 տարի",other:"{{count}} տարի"},overXYears:{one:"ավելի քան 1 տարի",other:"ավելի քան {{count}} տարի"},almostXYears:{one:"համարյա 1 տարի",other:"համարյա {{count}} տարի"}};function o(e,t,a){a=a||{};var i;if(typeof r[e]==="string"){i=r[e]}else if(t===1){i=r[e].one}else{i=r[e].other.replace("{{count}}",t)}if(a.addSuffix){if(a.comparison>0){return i+" հետո"}else{return i+" առաջ"}}return i}var d={full:"d MMMM, y, EEEE",long:"d MMMM, y",medium:"d MMM, y",short:"dd.MM.yyyy"};var u={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"};var s={full:"{{date}} 'ժ․'{{time}}",long:"{{date}} 'ժ․'{{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"};var m={date:t({formats:d,defaultWidth:"full"}),time:t({formats:u,defaultWidth:"full"}),dateTime:t({formats:s,defaultWidth:"full"})};var h={lastWeek:"'նախորդ' eeee p'֊ին'",yesterday:"'երեկ' p'֊ին'",today:"'այսօր' p'֊ին'",tomorrow:"'վաղը' p'֊ին'",nextWeek:"'հաջորդ' eeee p'֊ին'",other:"P"};function l(e,t,a,i){return h[e]}var f={narrow:["Ք","Մ"],abbreviated:["ՔԱ","ՄԹ"],wide:["Քրիստոսից առաջ","Մեր թվարկության"]};var v={narrow:["1","2","3","4"],abbreviated:["Ք1","Ք2","Ք3","Ք4"],wide:["1֊ին քառորդ","2֊րդ քառորդ","3֊րդ քառորդ","4֊րդ քառորդ"]};var c={narrow:["Հ","Փ","Մ","Ա","Մ","Հ","Հ","Օ","Ս","Հ","Ն","Դ"],abbreviated:["հուն","փետ","մար","ապր","մայ","հուն","հուլ","օգս","սեպ","հոկ","նոյ","դեկ"],wide:["հունվար","փետրվար","մարտ","ապրիլ","մայիս","հունիս","հուլիս","օգոստոս","սեպտեմբեր","հոկտեմբեր","նոյեմբեր","դեկտեմբեր"]};var g={narrow:["Կ","Ե","Ե","Չ","Հ","Ո","Շ"],short:["կր","եր","եք","չք","հգ","ուր","շբ"],abbreviated:["կիր","երկ","երք","չոր","հնգ","ուրբ","շաբ"],wide:["կիրակի","երկուշաբթի","երեքշաբթի","չորեքշաբթի","հինգշաբթի","ուրբաթ","շաբաթ"]};var b={narrow:{am:"a",pm:"p",midnight:"կեսգշ",noon:"կեսօր",morning:"առավոտ",afternoon:"ցերեկ",evening:"երեկո",night:"գիշեր"},abbreviated:{am:"AM",pm:"PM",midnight:"կեսգիշեր",noon:"կեսօր",morning:"առավոտ",afternoon:"ցերեկ",evening:"երեկո",night:"գիշեր"},wide:{am:"a.m.",pm:"p.m.",midnight:"կեսգիշեր",noon:"կեսօր",morning:"առավոտ",afternoon:"ցերեկ",evening:"երեկո",night:"գիշեր"}};var w={narrow:{am:"a",pm:"p",midnight:"կեսգշ",noon:"կեսօր",morning:"առավոտը",afternoon:"ցերեկը",evening:"երեկոյան",night:"գիշերը"},abbreviated:{am:"AM",pm:"PM",midnight:"կեսգիշերին",noon:"կեսօրին",morning:"առավոտը",afternoon:"ցերեկը",evening:"երեկոյան",night:"գիշերը"},wide:{am:"a.m.",pm:"p.m.",midnight:"կեսգիշերին",noon:"կեսօրին",morning:"առավոտը",afternoon:"ցերեկը",evening:"երեկոյան",night:"գիշերը"}};function p(e,t){var a=Number(e);var i=a%100;if(i<10){if(i%10===1){return a+"֊ին"}}return a+"֊րդ"}var y={ordinalNumber:p,era:a({values:f,defaultWidth:"wide"}),quarter:a({values:v,defaultWidth:"wide",argumentCallback:function e(t){return Number(t)-1}}),month:a({values:c,defaultWidth:"wide"}),day:a({values:g,defaultWidth:"wide"}),dayPeriod:a({values:b,defaultWidth:"wide",formattingValues:w,defaultFormattingWidth:"wide"})};var M=/^(\d+)((-|֊)?(ին|րդ))?/i;var W=/\d+/i;var P={narrow:/^(Ք|Մ)/i,abbreviated:/^(Ք\.?\s?Ա\.?|Մ\.?\s?Թ\.?\s?Ա\.?|Մ\.?\s?Թ\.?|Ք\.?\s?Հ\.?)/i,wide:/^(քրիստոսից առաջ|մեր թվարկությունից առաջ|մեր թվարկության|քրիստոսից հետո)/i};var x={any:[/^(ք|մ)/i]};var H={narrow:/^[1234]/i,abbreviated:/^ք[1234]/i,wide:/^[1234]((-|֊)?(ին|րդ)) քառորդ/i};var k={any:[/1/i,/2/i,/3/i,/4/i]};var X={narrow:/^[հփմաօսնդ]/i,abbreviated:/^(հուն|փետ|մար|ապր|մայ|հուն|հուլ|օգս|սեպ|հոկ|նոյ|դեկ)/i,wide:/^(հունվար|փետրվար|մարտ|ապրիլ|մայիս|հունիս|հուլիս|օգոստոս|սեպտեմբեր|հոկտեմբեր|նոյեմբեր|դեկտեմբեր)/i};var z={narrow:[/^հ/i,/^փ/i,/^մ/i,/^ա/i,/^մ/i,/^հ/i,/^հ/i,/^օ/i,/^ս/i,/^հ/i,/^ն/i,/^դ/i],any:[/^հու/i,/^փ/i,/^մար/i,/^ա/i,/^մայ/i,/^հուն/i,/^հուլ/i,/^օ/i,/^ս/i,/^հոկ/i,/^ն/i,/^դ/i]};var S={narrow:/^[եչհոշկ]/i,short:/^(կր|եր|եք|չք|հգ|ուր|շբ)/i,abbreviated:/^(կիր|երկ|երք|չոր|հնգ|ուրբ|շաբ)/i,wide:/^(կիրակի|երկուշաբթի|երեքշաբթի|չորեքշաբթի|հինգշաբթի|ուրբաթ|շաբաթ)/i};var C={narrow:[/^կ/i,/^ե/i,/^ե/i,/^չ/i,/^հ/i,/^(ո|Ո)/,/^շ/i],short:[/^կ/i,/^եր/i,/^եք/i,/^չ/i,/^հ/i,/^(ո|Ո)/,/^շ/i],abbreviated:[/^կ/i,/^երկ/i,/^երք/i,/^չ/i,/^հ/i,/^(ո|Ո)/,/^շ/i],wide:[/^կ/i,/^երկ/i,/^երե/i,/^չ/i,/^հ/i,/^(ո|Ո)/,/^շ/i]};var E={narrow:/^([ap]|կեսգշ|կեսօր|(առավոտը?|ցերեկը?|երեկո(յան)?|գիշերը?))/i,any:/^([ap]\.?\s?m\.?|կեսգիշեր(ին)?|կեսօր(ին)?|(առավոտը?|ցերեկը?|երեկո(յան)?|գիշերը?))/i};var N={any:{am:/^a/i,pm:/^p/i,midnight:/կեսգիշեր/i,noon:/կեսօր/i,morning:/առավոտ/i,afternoon:/ցերեկ/i,evening:/երեկո/i,night:/գիշեր/i}};var Y={ordinalNumber:i({matchPattern:M,parsePattern:W,valueCallback:function e(t){return parseInt(t,10)}}),era:n({matchPatterns:P,defaultMatchWidth:"wide",parsePatterns:x,defaultParseWidth:"any"}),quarter:n({matchPatterns:H,defaultMatchWidth:"wide",parsePatterns:k,defaultParseWidth:"any",valueCallback:function e(t){return t+1}}),month:n({matchPatterns:X,defaultMatchWidth:"wide",parsePatterns:z,defaultParseWidth:"any"}),day:n({matchPatterns:S,defaultMatchWidth:"wide",parsePatterns:C,defaultParseWidth:"any"}),dayPeriod:n({matchPatterns:E,defaultMatchWidth:"any",parsePatterns:N,defaultParseWidth:"any"})};var A=e("default",{code:"hy",formatDistance:o,formatLong:m,formatRelative:l,localize:y,match:Y,options:{weekStartsOn:1,firstWeekContainsDate:1}})}}}));