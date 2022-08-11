System.register(["./index-dc611d24-4c9389ae.system.js"],(function(t){"use strict";var e,a,n,r;return{setters:[function(t){e=t.b;a=t.a;n=t.c;r=t.d}],execute:function(){var i={lessThanXSeconds:{past:"{{count}} წამზე ნაკლები ხნის წინ",present:"{{count}} წამზე ნაკლები",future:"{{count}} წამზე ნაკლებში"},xSeconds:{past:"{{count}} წამის წინ",present:"{{count}} წამი",future:"{{count}} წამში"},halfAMinute:{past:"ნახევარი წუთის წინ",present:"ნახევარი წუთი",future:"ნახევარი წუთში"},lessThanXMinutes:{past:"{{count}} წუთზე ნაკლები ხნის წინ",present:"{{count}} წუთზე ნაკლები",future:"{{count}} წუთზე ნაკლებში"},xMinutes:{past:"{{count}} წუთის წინ",present:"{{count}} წუთი",future:"{{count}} წუთში"},aboutXHours:{past:"დაახლოებით {{count}} საათის წინ",present:"დაახლოებით {{count}} საათი",future:"დაახლოებით {{count}} საათში"},xHours:{past:"{{count}} საათის წინ",present:"{{count}} საათი",future:"{{count}} საათში"},xDays:{past:"{{count}} დღის წინ",present:"{{count}} დღე",future:"{{count}} დღეში"},aboutXWeeks:{past:"დაახლოებით {{count}} კვირას წინ",present:"დაახლოებით {{count}} კვირა",future:"დაახლოებით {{count}} კვირაში"},xWeeks:{past:"{{count}} კვირას კვირა",present:"{{count}} კვირა",future:"{{count}} კვირაში"},aboutXMonths:{past:"დაახლოებით {{count}} თვის წინ",present:"დაახლოებით {{count}} თვე",future:"დაახლოებით {{count}} თვეში"},xMonths:{past:"{{count}} თვის წინ",present:"{{count}} თვე",future:"{{count}} თვეში"},aboutXYears:{past:"დაახლოებით {{count}} წლის წინ",present:"დაახლოებით {{count}} წელი",future:"დაახლოებით {{count}} წელში"},xYears:{past:"{{count}} წლის წინ",present:"{{count}} წელი",future:"{{count}} წელში"},overXYears:{past:"{{count}} წელზე მეტი ხნის წინ",present:"{{count}} წელზე მეტი",future:"{{count}} წელზე მეტი ხნის შემდეგ"},almostXYears:{past:"თითქმის {{count}} წლის წინ",present:"თითქმის {{count}} წელი",future:"თითქმის {{count}} წელში"}};function u(t,e,a){a=a||{};var n;if(typeof i[t]==="string"){n=i[t]}else if(a.addSuffix&&a.comparison>0){n=i[t].future.replace("{{count}}",e)}else if(a.addSuffix&&a.comparison<=0){n=i[t].past.replace("{{count}}",e)}else{n=i[t].present.replace("{{count}}",e)}return n}var o={full:"EEEE, do MMMM, y",long:"do, MMMM, y",medium:"d, MMM, y",short:"dd/MM/yyyy"};var s={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"};var d={full:"{{date}} {{time}}'-ზე'",long:"{{date}} {{time}}'-ზე'",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"};var c={date:e({formats:o,defaultWidth:"full"}),time:e({formats:s,defaultWidth:"full"}),dateTime:e({formats:d,defaultWidth:"full"})};var m={lastWeek:"'წინა' eeee p'-ზე'",yesterday:"'გუშინ' p'-ზე'",today:"'დღეს' p'-ზე'",tomorrow:"'ხვალ' p'-ზე'",nextWeek:"'შემდეგი' eeee p'-ზე'",other:"P"};function f(t,e,a,n){return m[t]}var l={narrow:["ჩ.წ-მდე","ჩ.წ"],abbreviated:["ჩვ.წ-მდე","ჩვ.წ"],wide:["ჩვენს წელთაღრიცხვამდე","ჩვენი წელთაღრიცხვით"]};var p={narrow:["1","2","3","4"],abbreviated:["1-ლი კვ","2-ე კვ","3-ე კვ","4-ე კვ"],wide:["1-ლი კვარტალი","2-ე კვარტალი","3-ე კვარტალი","4-ე კვარტალი"]};var h={narrow:["ია","თე","მა","აპ","მს","ვნ","ვლ","აგ","სე","ოქ","ნო","დე"],abbreviated:["იან","თებ","მარ","აპრ","მაი","ივნ","ივლ","აგვ","სექ","ოქტ","ნოე","დეკ"],wide:["იანვარი","თებერვალი","მარტი","აპრილი","მაისი","ივნისი","ივლისი","აგვისტო","სექტემბერი","ოქტომბერი","ნოემბერი","დეკემბერი"]};var v={narrow:["კვ","ორ","სა","ოთ","ხუ","პა","შა"],short:["კვი","ორშ","სამ","ოთხ","ხუთ","პარ","შაბ"],abbreviated:["კვი","ორშ","სამ","ოთხ","ხუთ","პარ","შაბ"],wide:["კვირა","ორშაბათი","სამშაბათი","ოთხშაბათი","ხუთშაბათი","პარასკევი","შაბათი"]};var g={narrow:{am:"a",pm:"p",midnight:"შუაღამე",noon:"შუადღე",morning:"დილა",afternoon:"საღამო",evening:"საღამო",night:"ღამე"},abbreviated:{am:"AM",pm:"PM",midnight:"შუაღამე",noon:"შუადღე",morning:"დილა",afternoon:"საღამო",evening:"საღამო",night:"ღამე"},wide:{am:"a.m.",pm:"p.m.",midnight:"შუაღამე",noon:"შუადღე",morning:"დილა",afternoon:"საღამო",evening:"საღამო",night:"ღამე"}};var y={narrow:{am:"a",pm:"p",midnight:"შუაღამით",noon:"შუადღისას",morning:"დილით",afternoon:"ნაშუადღევს",evening:"საღამოს",night:"ღამით"},abbreviated:{am:"AM",pm:"PM",midnight:"შუაღამით",noon:"შუადღისას",morning:"დილით",afternoon:"ნაშუადღევს",evening:"საღამოს",night:"ღამით"},wide:{am:"a.m.",pm:"p.m.",midnight:"შუაღამით",noon:"შუადღისას",morning:"დილით",afternoon:"ნაშუადღევს",evening:"საღამოს",night:"ღამით"}};function w(t,e){var a=Number(t);if(a===1){return a+"-ლი"}return a+"-ე"}var b={ordinalNumber:w,era:a({values:l,defaultWidth:"wide"}),quarter:a({values:p,defaultWidth:"wide",argumentCallback:function t(e){return Number(e)-1}}),month:a({values:h,defaultWidth:"wide"}),day:a({values:v,defaultWidth:"wide"}),dayPeriod:a({values:g,defaultWidth:"wide",formattingValues:y,defaultFormattingWidth:"wide"})};var M=/^(\d+)(-ლი|-ე)?/i;var W=/\d+/i;var P={narrow:/^(ჩვ?\.წ)/i,abbreviated:/^(ჩვ?\.წ)/i,wide:/^(ჩვენს წელთაღრიცხვამდე|ქრისტეშობამდე|ჩვენი წელთაღრიცხვით|ქრისტეშობიდან)/i};var x={any:[/^(ჩვენს წელთაღრიცხვამდე|ქრისტეშობამდე)/i,/^(ჩვენი წელთაღრიცხვით|ქრისტეშობიდან)/i]};var k={narrow:/^[1234]/i,abbreviated:/^[1234]-(ლი|ე)? კვ/i,wide:/^[1234]-(ლი|ე)? კვარტალი/i};var X={any:[/1/i,/2/i,/3/i,/4/i]};var z={any:/^(ია|თე|მა|აპ|მს|ვნ|ვლ|აგ|სე|ოქ|ნო|დე)/i};var S={any:[/^ია/i,/^თ/i,/^მარ/i,/^აპ/i,/^მაი/i,/^ი?ვნ/i,/^ი?ვლ/i,/^აგ/i,/^ს/i,/^ო/i,/^ნ/i,/^დ/i]};var C={narrow:/^(კვ|ორ|სა|ოთ|ხუ|პა|შა)/i,short:/^(კვი|ორშ|სამ|ოთხ|ხუთ|პარ|შაბ)/i,long:/^(კვირა|ორშაბათი|სამშაბათი|ოთხშაბათი|ხუთშაბათი|პარასკევი|შაბათი)/i};var E={any:[/^კვ/i,/^ორ/i,/^სა/i,/^ოთ/i,/^ხუ/i,/^პა/i,/^შა/i]};var N={any:/^([ap]\.?\s?m\.?|შუაღ|დილ)/i};var Y={any:{am:/^a/i,pm:/^p/i,midnight:/^შუაღ/i,noon:/^შუადღ/i,morning:/^დილ/i,afternoon:/ნაშუადღევს/i,evening:/საღამო/i,night:/ღამ/i}};var A={ordinalNumber:n({matchPattern:M,parsePattern:W,valueCallback:function t(e){return parseInt(e,10)}}),era:r({matchPatterns:P,defaultMatchWidth:"wide",parsePatterns:x,defaultParseWidth:"any"}),quarter:r({matchPatterns:k,defaultMatchWidth:"wide",parsePatterns:X,defaultParseWidth:"any",valueCallback:function t(e){return e+1}}),month:r({matchPatterns:z,defaultMatchWidth:"wide",parsePatterns:S,defaultParseWidth:"any"}),day:r({matchPatterns:C,defaultMatchWidth:"wide",parsePatterns:E,defaultParseWidth:"any"}),dayPeriod:r({matchPatterns:N,defaultMatchWidth:"any",parsePatterns:Y,defaultParseWidth:"any"})};var D=t("default",{code:"ka",formatDistance:u,formatLong:c,formatRelative:f,localize:b,match:A,options:{weekStartsOn:1,firstWeekContainsDate:1}})}}}));