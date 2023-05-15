System.register(["./index-dc611d24-4c9389ae.system.js"],(function(t){"use strict";var e,a,n,r;return{setters:[function(t){e=t.b;a=t.a;n=t.c;r=t.d}],execute:function(){var u={lessThanXSeconds:{one:{default:"1 ಸೆಕೆಂಡ್‌ಗಿಂತ ಕಡಿಮೆ",future:"1 ಸೆಕೆಂಡ್‌ಗಿಂತ ಕಡಿಮೆ",past:"1 ಸೆಕೆಂಡ್‌ಗಿಂತ ಕಡಿಮೆ"},other:{default:"{{count}} ಸೆಕೆಂಡ್‌ಗಿಂತ ಕಡಿಮೆ",future:"{{count}} ಸೆಕೆಂಡ್‌ಗಿಂತ ಕಡಿಮೆ",past:"{{count}} ಸೆಕೆಂಡ್‌ಗಿಂತ ಕಡಿಮೆ"}},xSeconds:{one:{default:"1 ಸೆಕೆಂಡ್",future:"1 ಸೆಕೆಂಡ್‌ನಲ್ಲಿ",past:"1 ಸೆಕೆಂಡ್ ಹಿಂದೆ"},other:{default:"{{count}} ಸೆಕೆಂಡುಗಳು",future:"{{count}} ಸೆಕೆಂಡ್‌ಗಳಲ್ಲಿ",past:"{{count}} ಸೆಕೆಂಡ್ ಹಿಂದೆ"}},halfAMinute:{other:{default:"ಅರ್ಧ ನಿಮಿಷ",future:"ಅರ್ಧ ನಿಮಿಷದಲ್ಲಿ",past:"ಅರ್ಧ ನಿಮಿಷದ ಹಿಂದೆ"}},lessThanXMinutes:{one:{default:"1 ನಿಮಿಷಕ್ಕಿಂತ ಕಡಿಮೆ",future:"1 ನಿಮಿಷಕ್ಕಿಂತ ಕಡಿಮೆ",past:"1 ನಿಮಿಷಕ್ಕಿಂತ ಕಡಿಮೆ"},other:{default:"{{count}} ನಿಮಿಷಕ್ಕಿಂತ ಕಡಿಮೆ",future:"{{count}} ನಿಮಿಷಕ್ಕಿಂತ ಕಡಿಮೆ",past:"{{count}} ನಿಮಿಷಕ್ಕಿಂತ ಕಡಿಮೆ"}},xMinutes:{one:{default:"1 ನಿಮಿಷ",future:"1 ನಿಮಿಷದಲ್ಲಿ",past:"1 ನಿಮಿಷದ ಹಿಂದೆ"},other:{default:"{{count}} ನಿಮಿಷಗಳು",future:"{{count}} ನಿಮಿಷಗಳಲ್ಲಿ",past:"{{count}} ನಿಮಿಷಗಳ ಹಿಂದೆ"}},aboutXHours:{one:{default:"ಸುಮಾರು 1 ಗಂಟೆ",future:"ಸುಮಾರು 1 ಗಂಟೆಯಲ್ಲಿ",past:"ಸುಮಾರು 1 ಗಂಟೆ ಹಿಂದೆ"},other:{default:"ಸುಮಾರು {{count}} ಗಂಟೆಗಳು",future:"ಸುಮಾರು {{count}} ಗಂಟೆಗಳಲ್ಲಿ",past:"ಸುಮಾರು {{count}} ಗಂಟೆಗಳ ಹಿಂದೆ"}},xHours:{one:{default:"1 ಗಂಟೆ",future:"1 ಗಂಟೆಯಲ್ಲಿ",past:"1 ಗಂಟೆ ಹಿಂದೆ"},other:{default:"{{count}} ಗಂಟೆಗಳು",future:"{{count}} ಗಂಟೆಗಳಲ್ಲಿ",past:"{{count}} ಗಂಟೆಗಳ ಹಿಂದೆ"}},xDays:{one:{default:"1 ದಿನ",future:"1 ದಿನದಲ್ಲಿ",past:"1 ದಿನದ ಹಿಂದೆ"},other:{default:"{{count}} ದಿನಗಳು",future:"{{count}} ದಿನಗಳಲ್ಲಿ",past:"{{count}} ದಿನಗಳ ಹಿಂದೆ"}},aboutXMonths:{one:{default:"ಸುಮಾರು 1 ತಿಂಗಳು",future:"ಸುಮಾರು 1 ತಿಂಗಳಲ್ಲಿ",past:"ಸುಮಾರು 1 ತಿಂಗಳ ಹಿಂದೆ"},other:{default:"ಸುಮಾರು {{count}} ತಿಂಗಳು",future:"ಸುಮಾರು {{count}} ತಿಂಗಳುಗಳಲ್ಲಿ",past:"ಸುಮಾರು {{count}} ತಿಂಗಳುಗಳ ಹಿಂದೆ"}},xMonths:{one:{default:"1 ತಿಂಗಳು",future:"1 ತಿಂಗಳಲ್ಲಿ",past:"1 ತಿಂಗಳ ಹಿಂದೆ"},other:{default:"{{count}} ತಿಂಗಳು",future:"{{count}} ತಿಂಗಳುಗಳಲ್ಲಿ",past:"{{count}} ತಿಂಗಳುಗಳ ಹಿಂದೆ"}},aboutXYears:{one:{default:"ಸುಮಾರು 1 ವರ್ಷ",future:"ಸುಮಾರು 1 ವರ್ಷದಲ್ಲಿ",past:"ಸುಮಾರು 1 ವರ್ಷದ ಹಿಂದೆ"},other:{default:"ಸುಮಾರು {{count}} ವರ್ಷಗಳು",future:"ಸುಮಾರು {{count}} ವರ್ಷಗಳಲ್ಲಿ",past:"ಸುಮಾರು {{count}} ವರ್ಷಗಳ ಹಿಂದೆ"}},xYears:{one:{default:"1 ವರ್ಷ",future:"1 ವರ್ಷದಲ್ಲಿ",past:"1 ವರ್ಷದ ಹಿಂದೆ"},other:{default:"{{count}} ವರ್ಷಗಳು",future:"{{count}} ವರ್ಷಗಳಲ್ಲಿ",past:"{{count}} ವರ್ಷಗಳ ಹಿಂದೆ"}},overXYears:{one:{default:"1 ವರ್ಷದ ಮೇಲೆ",future:"1 ವರ್ಷದ ಮೇಲೆ",past:"1 ವರ್ಷದ ಮೇಲೆ"},other:{default:"{{count}} ವರ್ಷಗಳ ಮೇಲೆ",future:"{{count}} ವರ್ಷಗಳ ಮೇಲೆ",past:"{{count}} ವರ್ಷಗಳ ಮೇಲೆ"}},almostXYears:{one:{default:"ಬಹುತೇಕ 1 ವರ್ಷದಲ್ಲಿ",future:"ಬಹುತೇಕ 1 ವರ್ಷದಲ್ಲಿ",past:"ಬಹುತೇಕ 1 ವರ್ಷದಲ್ಲಿ"},other:{default:"ಬಹುತೇಕ {{count}} ವರ್ಷಗಳಲ್ಲಿ",future:"ಬಹುತೇಕ {{count}} ವರ್ಷಗಳಲ್ಲಿ",past:"ಬಹುತೇಕ {{count}} ವರ್ಷಗಳಲ್ಲಿ"}}};function i(t,e){if(e.addSuffix){if(e.comparison>0){return t.future}else{return t.past}}return t["default"]}function o(t,e,a){a=a||{};var n;if(typeof u[t]==="string"){n=u[t]}else if(e===1){n=i(u[t].one,a)}else{n=i(u[t].other,a)}return n.replace("{{count}}",e)}var d={full:"EEEE, MMMM d, y",long:"MMMM d, y",medium:"MMM d, y",short:"d/M/yy"};var f={full:"hh:mm:ss a zzzz",long:"hh:mm:ss a z",medium:"hh:mm:ss a",short:"hh:mm a"};var s={full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"};var l={date:e({formats:d,defaultWidth:"full"}),time:e({formats:f,defaultWidth:"full"}),dateTime:e({formats:s,defaultWidth:"full"})};var h={lastWeek:"'ಕಳೆದ' eeee p 'ಕ್ಕೆ'",yesterday:"'ನಿನ್ನೆ' p 'ಕ್ಕೆ'",today:"'ಇಂದು' p 'ಕ್ಕೆ'",tomorrow:"'ನಾಳೆ' p 'ಕ್ಕೆ'",nextWeek:"eeee p 'ಕ್ಕೆ'",other:"P"};function c(t,e,a,n){return h[t]}var m={narrow:["ಕ್ರಿ.ಪೂ","ಕ್ರಿ.ಶ"],abbreviated:["ಕ್ರಿ.ಪೂ","ಕ್ರಿ.ಶ"],wide:["ಕ್ರಿಸ್ತ ಪೂರ್ವ","ಕ್ರಿಸ್ತ ಶಕ"]};var v={narrow:["1","2","3","4"],abbreviated:["ತ್ರೈ 1","ತ್ರೈ 2","ತ್ರೈ 3","ತ್ರೈ 4"],wide:["1ನೇ ತ್ರೈಮಾಸಿಕ","2ನೇ ತ್ರೈಮಾಸಿಕ","3ನೇ ತ್ರೈಮಾಸಿಕ","4ನೇ ತ್ರೈಮಾಸಿಕ"]};var p={narrow:["ಜ","ಫೆ","ಮಾ","ಏ","ಮೇ","ಜೂ","ಜು","ಆ","ಸೆ","ಅ","ನ","ಡಿ"],abbreviated:["ಜನ","ಫೆಬ್ರ","ಮಾರ್ಚ್","ಏಪ್ರಿ","ಮೇ","ಜೂನ್","ಜುಲೈ","ಆಗ","ಸೆಪ್ಟೆಂ","ಅಕ್ಟೋ","ನವೆಂ","ಡಿಸೆಂ"],wide:["ಜನವರಿ","ಫೆಬ್ರವರಿ","ಮಾರ್ಚ್","ಏಪ್ರಿಲ್","ಮೇ","ಜೂನ್","ಜುಲೈ","ಆಗಸ್ಟ್","ಸೆಪ್ಟೆಂಬರ್","ಅಕ್ಟೋಬರ್","ನವೆಂಬರ್","ಡಿಸೆಂಬರ್"]};var g={narrow:["ಭಾ","ಸೋ","ಮಂ","ಬು","ಗು","ಶು","ಶ"],short:["ಭಾನು","ಸೋಮ","ಮಂಗಳ","ಬುಧ","ಗುರು","ಶುಕ್ರ","ಶನಿ"],abbreviated:["ಭಾನು","ಸೋಮ","ಮಂಗಳ","ಬುಧ","ಗುರು","ಶುಕ್ರ","ಶನಿ"],wide:["ಭಾನುವಾರ","ಸೋಮವಾರ","ಮಂಗಳವಾರ","ಬುಧವಾರ","ಗುರುವಾರ","ಶುಕ್ರವಾರ","ಶನಿವಾರ"]};var w={narrow:{am:"ಪೂರ್ವಾಹ್ನ",pm:"ಅಪರಾಹ್ನ",midnight:"ಮಧ್ಯರಾತ್ರಿ",noon:"ಮಧ್ಯಾಹ್ನ",morning:"ಬೆಳಗ್ಗೆ",afternoon:"ಮಧ್ಯಾಹ್ನ",evening:"ಸಂಜೆ",night:"ರಾತ್ರಿ"},abbreviated:{am:"ಪೂರ್ವಾಹ್ನ",pm:"ಅಪರಾಹ್ನ",midnight:"ಮಧ್ಯರಾತ್ರಿ",noon:"ಮಧ್ಯಾನ್ಹ",morning:"ಬೆಳಗ್ಗೆ",afternoon:"ಮಧ್ಯಾನ್ಹ",evening:"ಸಂಜೆ",night:"ರಾತ್ರಿ"},wide:{am:"ಪೂರ್ವಾಹ್ನ",pm:"ಅಪರಾಹ್ನ",midnight:"ಮಧ್ಯರಾತ್ರಿ",noon:"ಮಧ್ಯಾನ್ಹ",morning:"ಬೆಳಗ್ಗೆ",afternoon:"ಮಧ್ಯಾನ್ಹ",evening:"ಸಂಜೆ",night:"ರಾತ್ರಿ"}};var b={narrow:{am:"ಪೂ",pm:"ಅ",midnight:"ಮಧ್ಯರಾತ್ರಿ",noon:"ಮಧ್ಯಾನ್ಹ",morning:"ಬೆಳಗ್ಗೆ",afternoon:"ಮಧ್ಯಾನ್ಹ",evening:"ಸಂಜೆ",night:"ರಾತ್ರಿ"},abbreviated:{am:"ಪೂರ್ವಾಹ್ನ",pm:"ಅಪರಾಹ್ನ",midnight:"ಮಧ್ಯ ರಾತ್ರಿ",noon:"ಮಧ್ಯಾನ್ಹ",morning:"ಬೆಳಗ್ಗೆ",afternoon:"ಮಧ್ಯಾನ್ಹ",evening:"ಸಂಜೆ",night:"ರಾತ್ರಿ"},wide:{am:"ಪೂರ್ವಾಹ್ನ",pm:"ಅಪರಾಹ್ನ",midnight:"ಮಧ್ಯ ರಾತ್ರಿ",noon:"ಮಧ್ಯಾನ್ಹ",morning:"ಬೆಳಗ್ಗೆ",afternoon:"ಮಧ್ಯಾನ್ಹ",evening:"ಸಂಜೆ",night:"ರಾತ್ರಿ"}};function y(t,e){var a=Number(t);return a+"ನೇ"}var M={ordinalNumber:y,era:a({values:m,defaultWidth:"wide"}),quarter:a({values:v,defaultWidth:"wide",argumentCallback:function t(e){return Number(e)-1}}),month:a({values:p,defaultWidth:"wide"}),day:a({values:g,defaultWidth:"wide"}),dayPeriod:a({values:w,defaultWidth:"wide",formattingValues:b,defaultFormattingWidth:"wide"})};var W=/^(\d+)(ನೇ|ನೆ)?/i;var P=/\d+/i;var x={narrow:/^(ಕ್ರಿ.ಪೂ|ಕ್ರಿ.ಶ)/i,abbreviated:/^(ಕ್ರಿ\.?\s?ಪೂ\.?|ಕ್ರಿ\.?\s?ಶ\.?|ಪ್ರ\.?\s?ಶ\.?)/i,wide:/^(ಕ್ರಿಸ್ತ ಪೂರ್ವ|ಕ್ರಿಸ್ತ ಶಕ|ಪ್ರಸಕ್ತ ಶಕ)/i};var k={any:[/^ಪೂ/i,/^(ಶ|ಪ್ರ)/i]};var X={narrow:/^[1234]/i,abbreviated:/^ತ್ರೈ[1234]|ತ್ರೈ [1234]| [1234]ತ್ರೈ/i,wide:/^[1234](ನೇ)? ತ್ರೈಮಾಸಿಕ/i};var z={any:[/1/i,/2/i,/3/i,/4/i]};var S={narrow:/^(ಜೂ|ಜು|ಜ|ಫೆ|ಮಾ|ಏ|ಮೇ|ಆ|ಸೆ|ಅ|ನ|ಡಿ)/i,abbreviated:/^(ಜನ|ಫೆಬ್ರ|ಮಾರ್ಚ್|ಏಪ್ರಿ|ಮೇ|ಜೂನ್|ಜುಲೈ|ಆಗ|ಸೆಪ್ಟೆಂ|ಅಕ್ಟೋ|ನವೆಂ|ಡಿಸೆಂ)/i,wide:/^(ಜನವರಿ|ಫೆಬ್ರವರಿ|ಮಾರ್ಚ್|ಏಪ್ರಿಲ್|ಮೇ|ಜೂನ್|ಜುಲೈ|ಆಗಸ್ಟ್|ಸೆಪ್ಟೆಂಬರ್|ಅಕ್ಟೋಬರ್|ನವೆಂಬರ್|ಡಿಸೆಂಬರ್)/i};var C={narrow:[/^ಜ$/i,/^ಫೆ/i,/^ಮಾ/i,/^ಏ/i,/^ಮೇ/i,/^ಜೂ/i,/^ಜು$/i,/^ಆ/i,/^ಸೆ/i,/^ಅ/i,/^ನ/i,/^ಡಿ/i],any:[/^ಜನ/i,/^ಫೆ/i,/^ಮಾ/i,/^ಏ/i,/^ಮೇ/i,/^ಜೂನ್/i,/^ಜುಲೈ/i,/^ಆ/i,/^ಸೆ/i,/^ಅ/i,/^ನ/i,/^ಡಿ/i]};var E={narrow:/^(ಭಾ|ಸೋ|ಮ|ಬು|ಗು|ಶು|ಶ)/i,short:/^(ಭಾನು|ಸೋಮ|ಮಂಗಳ|ಬುಧ|ಗುರು|ಶುಕ್ರ|ಶನಿ)/i,abbreviated:/^(ಭಾನು|ಸೋಮ|ಮಂಗಳ|ಬುಧ|ಗುರು|ಶುಕ್ರ|ಶನಿ)/i,wide:/^(ಭಾನುವಾರ|ಸೋಮವಾರ|ಮಂಗಳವಾರ|ಬುಧವಾರ|ಗುರುವಾರ|ಶುಕ್ರವಾರ|ಶನಿವಾರ)/i};var N={narrow:[/^ಭಾ/i,/^ಸೋ/i,/^ಮ/i,/^ಬು/i,/^ಗು/i,/^ಶು/i,/^ಶ/i],any:[/^ಭಾ/i,/^ಸೋ/i,/^ಮ/i,/^ಬು/i,/^ಗು/i,/^ಶು/i,/^ಶ/i]};var Y={narrow:/^(ಪೂ|ಅ|ಮಧ್ಯರಾತ್ರಿ|ಮಧ್ಯಾನ್ಹ|ಬೆಳಗ್ಗೆ|ಸಂಜೆ|ರಾತ್ರಿ)/i,any:/^(ಪೂರ್ವಾಹ್ನ|ಅಪರಾಹ್ನ|ಮಧ್ಯರಾತ್ರಿ|ಮಧ್ಯಾನ್ಹ|ಬೆಳಗ್ಗೆ|ಸಂಜೆ|ರಾತ್ರಿ)/i};var D={any:{am:/^ಪೂ/i,pm:/^ಅ/i,midnight:/ಮಧ್ಯರಾತ್ರಿ/i,noon:/ಮಧ್ಯಾನ್ಹ/i,morning:/ಬೆಳಗ್ಗೆ/i,afternoon:/ಮಧ್ಯಾನ್ಹ/i,evening:/ಸಂಜೆ/i,night:/ರಾತ್ರಿ/i}};var T={ordinalNumber:n({matchPattern:W,parsePattern:P,valueCallback:function t(e){return parseInt(e,10)}}),era:r({matchPatterns:x,defaultMatchWidth:"wide",parsePatterns:k,defaultParseWidth:"any"}),quarter:r({matchPatterns:X,defaultMatchWidth:"wide",parsePatterns:z,defaultParseWidth:"any",valueCallback:function t(e){return e+1}}),month:r({matchPatterns:S,defaultMatchWidth:"wide",parsePatterns:C,defaultParseWidth:"any"}),day:r({matchPatterns:E,defaultMatchWidth:"wide",parsePatterns:N,defaultParseWidth:"any"}),dayPeriod:r({matchPatterns:Y,defaultMatchWidth:"any",parsePatterns:D,defaultParseWidth:"any"})};var q=t("default",{code:"kn",formatDistance:o,formatLong:l,formatRelative:c,localize:M,match:T,options:{weekStartsOn:1,firstWeekContainsDate:1}})}}}));