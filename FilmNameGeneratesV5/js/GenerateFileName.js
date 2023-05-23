// 电影名生成方法

function toolForGeneratingMovieNames() {
    const selectors = [
        '#chinese_name_film',
        '#english_name_film',
        '#film_year',
        '#film_cut_version',
        '#film_file_resolution',
        '#film_resolution_format',
        '#film_file_source',
        '#film_file_video_coding',
        '#film_file_audio_track',
        '#film_file_production_group',
        '#film_imbd_id',
    ];

    const values = selectors.map(selector => $(selector).val());

    const filmTitleResult = values.filter(value => value != '').join('.') + (values[10] != '' ? `[${values[10]}]` : '');

    return filmTitleResult;
}

/*function toolForGeneratingMovieNames() {
    // 电影中文名变量
    var filmChineseNameVariable = $("#chinese_name_film").val();
    // 电影英文名变量
    var filmEnglishNameVariable = $("#english_name_film").val();
    // 电影年份变量
    var filmYearVariable = $("#film_year").val();
    // 电影剪辑版本变量
    var filmClipVersionVariable = $("#film_cut_version").val();
    // 电影分辨率变量
    var filmResolutionVariable = $("#film_file_resolution").val();
    // 电影分辨率格式变量
    var filmResolutionFormatVariable = $("#film_resolution_format").val();
    // 电影文件来源变量
    var filmSourceVariable = $("#film_file_source").val();
    // 电影视频编码变量
    var filmVideoEncodingVariable = $("#film_file_video_coding").val();
    // 电影音频编码变量
    var filmAudioEncodingVariable = $("#film_file_audio_track").val();
    // 电影制作组变量
    var filmProductionGroupVariables = $("#film_file_production_group").val();
    // 电影Imbd id变量
    var filmImdbIdVariable = $("#film_imbd_id").val();

    var filmTitleResult = "";
    // 电影中文名
    if (filmChineseNameVariable != "") {
        filmTitleResult += filmChineseNameVariable + ".";
    }
    // 电影英文名
    if (filmEnglishNameVariable != "") {
        filmTitleResult += filmEnglishNameVariable + ".";
    }
    // 电影年份
    if (filmYearVariable != "") {
        filmTitleResult += filmYearVariable + ".";
    }
    // 电影剪辑版本
    if (filmClipVersionVariable != "") {
        filmTitleResult += filmClipVersionVariable + ".";
    }
    // 电影分辨率
    if (filmResolutionVariable != "") {
        filmTitleResult += filmResolutionVariable + ".";
    }
    // 电影分辨率格式
    if (filmResolutionFormatVariable != "") {
        filmTitleResult += filmResolutionFormatVariable + ".";
    }
    // 电影文件来源
    if (filmSourceVariable != "") {
        filmTitleResult += filmSourceVariable + ".";
    }
    // 电影视频编码
    if (filmVideoEncodingVariable != "") {
        filmTitleResult += filmVideoEncodingVariable + ".";
    }
    // 电影音频编码
    if (filmAudioEncodingVariable != "") {
        filmTitleResult += filmAudioEncodingVariable + ".";
    }
    // 电影制作组
    if (filmProductionGroupVariables != "") {
        filmTitleResult += filmProductionGroupVariables + ".";
    }
    // 电影IMBD ID
    if (filmImdbIdVariable != "") {
        filmTitleResult += "[" + filmImdbIdVariable + "]";
    }
    // 去除最后一个"."
    filmTitleResult = filmTitleResult.slice(0, -1);
    //返回结果
    return filmTitleResult;
}*/

// 电影名复制方法

function filmNameResultCopy(text) {
    // 创建一个临时输入框
    var tempInput = $('<input>');
    // 将输入框放在页面中但隐藏起来
    $('body').append(tempInput);
    tempInput.val(text).select();
    // 执行浏览器自带的复制操作
    document.execCommand('copy');
    // 移除临时输入框
    tempInput.remove();
}



$(document).ready(function () {
    //生成并复制按钮
    $("#movie_name_generation_and_copy").click(function () {
        // 电影名结果显示
        $("#result_partial_block").text(toolForGeneratingMovieNames());
        // 复制到剪切板上
        filmNameResultCopy(toolForGeneratingMovieNames());
    });
    // 生成按钮
    $("#movie_name_generation").click(function () {
        // 电影名结果显示
        $("#result_partial_block").text(toolForGeneratingMovieNames());
    });

    // 复制按钮
    $("#movie_name_copy").click(function () {
        $("#result_partial_block").text(toolForGeneratingMovieNames());
    });

    //清空按钮
    $("#movie_name_generation_form_empty").click(function () {
        $("#chinese_name_film, #english_name_film, #film_year, #film_cut_version, #film_file_resolution, #film_resolution_format, #film_file_source, #film_file_video_coding, #film_file_audio_track, #film_file_production_group, #film_imbd_id").val("");
        $("#result_partial_block").text("");
    });
});