/*年份变化
剪辑版本变化
分辨率变化
分辨率格式变化
来源变化
视频编码变化
音频编码变化*/


/*
let yearVariation = false;
let clipVersionChange = false;
let resolutionChange = false;
let resolutionFormatChange = false;
let sourceChange = false;
let videoCodingChange = false;
let audioCodingChange = false;


yearVariation = true;
clipVersionChange = true;
resolutionChange = true;
resolutionFormatChange = true;
sourceChange = true;
videoCodingChange = true;
audioCodingChange = true;
*/


/*
$(function () {
    // 黑豹.black.2018.1080p.HD.HDRIP.HEVC.DTS.mp4
    // 将需要匹配的年份和分辨率存入数组
    // 年份数组
    let fileYearArray = ["1980", "1981", "1982", "1983", "1984", "1985", "1986", "1987", "1988", "1989", "1990", "1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"];
    // 剪辑版本数组
    let arrayFileClipVersions = ["DirectorsCut", "Unrated", "LIMITED", "Extended"];
    // 分辨率数组
    let fileResolutionArray = ["240p", "360p", "480p", "576p", "720p", "1024p", "1050p", "1080p", "1200p", "1600p", "2160p", "2400p"];
    // 分辨率格式数组
    let fileResolutionFormatArray = ["QVGA", "360p", "VGA", "PAL", "HD", "4kUHD", "WQUXGA", "8kUHD"];
    // 来源数组
    let fileSourceArray = ["WEB-DL", "WEBRip", "REMUX", "HDTV", "HR-HDTV", "HDRIP", "Blu-ray", "BRRip", "BDRIP", "HDDVD", "DVD", "DVDSCR", "DVDRIP", "CAM", "TS", "Other"];
    // 视频编码数组
    let fileVideoEncodingArray = ["H264", "H265", "HEVC", "IMAX"];
    // 音频编码数组
    let fileAudioEncodingArray = ["DD", "DD+", "Dolby-TrueHD", "Dolby-Atmos", "DTS", "DTS-HD", "DTS:X"];



    function matchString(str) {
        // 判断字符串中是否包含数组中的元素
        // 判断年份
        for (let i = 0; i < fileYearArray.length; i++) {
            if (str.indexOf(fileYearArray[i]) >= 0) {
                $("#file_year").val(fileYearArray[i]); // 将年份填充到表单中
                break;
            }
        }

        for (let i = 0; i < fileYearArray.length && !yearFound; i++) {
            if (str.indexOf(fileYearArray[i]) >= 0) {
                $("#file_year").val(fileYearArray[i]);
                yearFound = true;
            }
        }

        // 判断剪辑版本
        for (let j = 0; j < arrayFileClipVersions.length; j++) {
            if (str.indexOf(arrayFileClipVersions[j]) >= 0) {
                $("#file_clip_version").val(arrayFileClipVersions[j]); // 将剪辑版本填充到表单中
                break;
            }
        }

        //判断分辨率
        for (let k = 0; k < fileResolutionArray.length; k++) {
            if (str.indexOf(fileResolutionArray[k]) >= 0) {
                $("#file_resolution").val(fileResolutionArray[k]); // 将分辨率填充到表单中
                break;
            }
        }

        // 判断分辨率格式
        for (let l = 0; l < fileResolutionFormatArray.length; l++) {
            if (str.indexOf(fileResolutionFormatArray[l]) >= 0) {
                $("#file_resolution_format").val(fileResolutionFormatArray[l]); // 将分辨率格式填充到表单中
                break;
            }
        }

        // 判断来源
        for (let i = 0; i < fileSourceArray.length; i++) {
            if (str.indexOf(fileSourceArray[i]) >= 0) {
                $("#file_source").val(fileSourceArray[i]); // 将分辨率格式填充到表单中
                break;
            }
        }

        // 判断视频编码
        for (let n = 0; n < fileVideoEncodingArray.length; n++) {
            if (str.indexOf(fileVideoEncodingArray[n]) >= 0) {
                $("#file_video_coding").val(fileVideoEncodingArray[n]); // 将视频编码填充到表单中
                break;
            }
        }
        // 判断音频编码
        for (let o = 0; o < fileAudioEncodingArray.length; o++) {
            if (str.indexOf(fileAudioEncodingArray[o]) >= 0) {
                $("#file_audio_coding").val(fileAudioEncodingArray[o]); // 将音频编码填充到表单中
                break;
            }
        }
    }

    // 监听file_name_resolution_split_result下的span标签
    $("#file_name_resolution_split_result").on("DOMSubtreeModified", "span", function () {
        let content = $(this).text();
        matchString(content); // 调用matchString函数进行字符串匹配
    });
});*/


// 下面的代码改为，只要ID为"file_name_resolution_split_result"下面的span标签发生变化，就清空ID为"file_year"、"file_clip_version"和"file_resolution"，并重新走一遍判断并重新填充数据
//
// $(function () {
//     // 年份数组
//     let fileYearArray = ["1980", "1981", "1982"];
//     // 剪辑版本数组
//     let arrayFileClipVersions = ["DirectorsCut", "Unrated", "LIMITED"];
//     // 分辨率数组
//     let fileResolutionArray = ["240p", "360p", "480p"];
//     function matchString(str) {
//         // 判断字符串中是否包含数组中的元素
//         // 判断年份
//         for (let i = 0; i < fileYearArray.length; i++) {
//             if (str.indexOf(fileYearArray[i]) >= 0) {
//                 $("#file_year").val(fileYearArray[i]); // 将年份填充到表单中
//                 break;
//             }
//         }
//         // 判断剪辑版本
//         for (let i = 0; i < arrayFileClipVersions.length; i++) {
//             if (str.indexOf(arrayFileClipVersions[i]) >= 0) {
//                 $("#file_clip_version").val(arrayFileClipVersions[i]); // 将剪辑版本填充到表单中
//                 break;
//             }
//         }
//         //判断分辨率
//         for (let i = 0; i < fileResolutionArray.length; i++) {
//             if (str.indexOf(fileResolutionArray[i]) >= 0) {
//                 $("#file_resolution").val(fileResolutionArray[i]); // 将分辨率填充到表单中
//                 break;
//             }
//         }
//     // 监听file_name_resolution_split_result下的span标签
//     $("#file_name_resolution_split_result").on("DOMSubtreeModified", "span", function () {
//         let content = $(this).text();
//         matchString(content);
//     });
// });


$(function () {
    // 年份数组
    let fileYearArray = ["1980", "1981", "1982"];
    // 剪辑版本数组
    let arrayFileClipVersions = ["DirectorsCut", "Unrated", "LIMITED"];
    // 分辨率数组
    let fileResolutionArray = ["240p", "360p", "480p"];

    function matchString(str) {
        // 判断字符串中是否包含数组中的元素
        // 判断年份
        for (let i = 0; i < fileYearArray.length; i++) {
            if (str.indexOf(fileYearArray[i]) >= 0) {
                $("#file_year").val(fileYearArray[i]); // 将年份填充到表单中
                break;
            }
        }
        // 判断剪辑版本
        for (let i = 0; i < arrayFileClipVersions.length; i++) {
            if (str.indexOf(arrayFileClipVersions[i]) >= 0) {
                $("#file_clip_version").val(arrayFileClipVersions[i]); // 将剪辑版本填充到表单中
                break;
            }
        }
        //判断分辨率
        for (let i = 0; i < fileResolutionArray.length; i++) {
            if (str.indexOf(fileResolutionArray[i]) >= 0) {
                $("#file_resolution").val(fileResolutionArray[i]); // 将分辨率填充到表单中
                break;
            }
        }
    }

    // 监听file_name_resolution_split_result下的span标签
    /*let observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if (mutation.type === "childList" && mutation.target.id === "file_name_resolution_split_result") {
                $("#file_year").val(""); //清空年份
                $("#file_clip_version").val(""); //清空剪辑版本
                $("#file_resolution").val(""); //清空分辨率
                let content = $(mutation.target).text();
                matchString(content); //重新填充数据
            }
        });
    });

    let target = document.getElementById("file_name_resolution_split_result");
    let config = { childList: true };
    observer.observe(target, config);*/
});
