//根据源文件名拆分后的结果填充表单   SourceFileNameSplitFill.js
$(document).ready(function() {
    // 获取JSON数据
    $.getJSON('json/options.json', function(data) {
        //年份
        let fileYearArray=data.fileYear;
        //剪辑版本
        let arrayFileClipVersions = data.fileClipVersions;
        //分辨率
        let fileResolutionArray = data.fileResolutionArray;
        //分辨率格式
        let fileResolutionFormatArray = data.fileResolutionFormat;
        // 来源
        let fileSourceArray = data.fileSource;
        //视频编码
        let fileVideoEncodingArray = data.fileVideoEncoding;
        //音频格式
        let fileAudioEncodingArray = data.fileAudioEncoding;
        //音轨
        let fileEntryTrack = data.fileEntryTrack;

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

            // 判断分辨率格式
            for (let i = 0; i < fileResolutionFormatArray.length; i++) {
                if (str.indexOf(fileResolutionFormatArray[i]) >= 0) {
                    $("#file_resolution_format").val(fileResolutionFormatArray[i]); // 将分辨率格式填充到表单中
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
            for (let i = 0; i < fileVideoEncodingArray.length; i++) {
                if (str.indexOf(fileVideoEncodingArray[i]) >= 0) {
                    $("#file_video_coding").val(fileVideoEncodingArray[i]); // 将视频编码填充到表单中
                    break;
                }
            }

            // 判断音轨
            for (let i = 0; i < fileEntryTrack.length; i++) {
                if (str.indexOf(fileEntryTrack[i]) >= 0) {
                    $("#file_track").val(fileEntryTrack[i]); // 将音轨填充到表单中
                    break;
                }
            }

            // 判断音频格式
            for (let i = 0; i < fileAudioEncodingArray.length; i++) {
                if (str.indexOf(fileAudioEncodingArray[i]) >= 0) {
                    $("#file_audio_coding").val(fileAudioEncodingArray[i]); // 将音频格式填充到表单中
                    break;
                }
            }
        }

        // 监听file_name_resolution_split_result(文件名拆分后的结果)下的span标签
        let observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                if (mutation.type === "childList" && mutation.target.id === "file_name_resolution_split_result") {
                    $("#file_year").val(""); //清空年份
                    $("#file_clip_version").val(""); //清空剪辑版本
                    $("#file_resolution").val(""); //清空分辨率
                    $("file_resolution_format").val("");
                    $("file_source").val("");
                    $("file_video_coding").val("");
                    $("file_audio_coding").val("");
                    let content = $(mutation.target).text();
                    matchString(content); //重新填充数据
                }
            });
        });

        let target = document.getElementById("file_name_resolution_split_result");
        let config = { childList: true };
        observer.observe(target, config);
    });
});