// 文件名生成
/*
$(document).ready(function () {
    $("#filename_input_content, #form_information_form_block input").on('change', function () {
        var seasonVal = $("#file_season").val();
        var setsVal = $("#file_sets_number").val();
        var captioningVal = $("#file_captioning_language").val();

        var output = "";

        if (seasonVal || setsVal) {
            if (captioningVal) {
                output = $("#file_chinese_name").val() + "." +
                    $("#file_english_name").val() + "." +
                    seasonVal + "." +
                    setsVal + "." +
                    $("#file_set_name").val() + "." +
                    $("#file_audio_coding").val() + "." +
                    "[" + captioningVal + "]" + "." +
                    $("#file_making_group").val() + "." +
                    "[" + $("#file_imdb_id").val() + "]";
            } else {
                output = $("#file_chinese_name").val() + "." +
                    $("#file_english_name").val() + "." +
                    seasonVal + "." +
                    setsVal + "." +
                    $("#file_set_name").val() + "." +
                    $("#file_audio_coding").val() + "." +
                    $("#file_making_group").val() + "." +
                    "[" + $("#file_imdb_id").val() + "]";
            }
        } else {
            if (captioningVal) {
                output = $("#file_chinese_name").val() + "." +
                    $("#file_english_name").val() + "." +
                    "[" + captioningVal + "]" + "." +
                    $("#file_audio_coding").val() + "." +
                    $("#file_making_group").val() + "." +
                    "[" + $("#file_imdb_id").val() + "]";
            } else {
                output = $("#file_chinese_name").val() + "." +
                    $("#file_english_name").val() + "." +
                    $("#file_audio_coding").val() + "." +
                    $("#file_making_group").val() + "." +
                    "[" + $("#file_imdb_id").val() + "]";
            }
        }

        if (output.endsWith(".")) {
            output = output.substring(0, output.length - 1);
        }

        $("#file_name_combinations_generate_results").val(output);
    });
});
*/


/*
$(document).ready(function () {
    // 绑定输入框变化事件
    $("#filename_input_content, #form_information_form_block input").on("input", function () {
        var chinese_name = $("#file_chinese_name").val();
        var english_name = $("#file_english_name").val();
        var season = $("#file_season").val();
        var sets_number = $("#file_sets_number").val();
        var set_name = $("#file_set_name").val();
        var audio_coding = $("#file_audio_coding").val();
        var captioning_language = $("#file_captioning_language").val();
        var making_group = $("#file_making_group").val();
        var imdb_id = $("#file_imdb_id").val();
        var result = "";

        // 判断生成的文件名格式
        if (season != "" || sets_number != "") {
            if (captioning_language != "") {
                result = chinese_name + "." + english_name + "." + season + "." + sets_number + "." + set_name + "." + audio_coding + "." + captioning_language + "." + making_group + "." + imdb_id;
            } else {
                result = chinese_name + "." + english_name + "." + season + "." + sets_number + "." + set_name + "." + audio_coding + "." + making_group + "." + imdb_id;
            }
        } else {
            if (captioning_language != "") {
                result = chinese_name + "." + english_name + "." + captioning_language + "." + audio_coding + "." + making_group + "." + imdb_id;
            } else {
                result = chinese_name + "." + english_name + "." + audio_coding + "." + making_group + "." + imdb_id;
            }
        }

        // 去除末尾的"."
        if (result.charAt(result.length - 1) == ".") {
            result = result.substring(0, result.length - 1);
        }

        // 填充结果
        $("#file_name_combinations_generate_results").val(result);
    });
});*/


/*$(document).ready(function () {

    function generateFileName() {
        var fileName = '';
        var chineseName = $('#file_chinese_name').val();
        var englishName = $('#file_english_name').val();
        var season = $('#file_season').val();
        var setsNumber = $('#file_sets_number').val();
        var setName = $('#file_set_name').val();
        var audioCoding = $('#file_audio_coding').val();
        var captioningLanguage = $('#file_captioning_language').val();
        var makingGroup = $('#file_making_group').val();
        var imdbId = $('#file_imdb_id').val();

        if ((season != '' || setsNumber != '') && captioningLanguage != '') {
            fileName += chineseName + '.' + englishName + '.' + season + '.' + setsNumber + '.' + setName + '.' + audioCoding + '.' + '[' + captioningLanguage + ']' + '.' + makingGroup + '.' + '[' + imdbId + ']';
        } else if (season != '' || setsNumber != '') {
            fileName += chineseName + '.' + englishName + '.' + season + '.' + setsNumber + '.' + setName + '.' + audioCoding + '.' + makingGroup + '.' + '[' + imdbId + ']';
        } else if (captioningLanguage != '') {
            fileName += chineseName + '.' + englishName + '.' + '[' + captioningLanguage + ']' + '.' + audioCoding + '.' + makingGroup + '.' + '[' + imdbId + ']';
        } else {
            fileName += chineseName + '.' + englishName + '.' + audioCoding + '.' + makingGroup + '.' + '[' + imdbId + ']';
        }

        fileName = fileName.replace(/(\[\])|\(\)/g, '');

        fileName = fileName.replace(/\.$/, '');

        $('#file_name_combinations_generate_results').val(fileName);
    }

    $('#filename_input_content, #form_information_form_block input').on('input', function () {
        $('#file_name_resolution_split_result input').each(function () {
            if ($(this).val() != '') {
                $(this).attr('data-has-value', true);
            } else {
                $(this).attr('data-has-value', false);
            }
        });

        generateFileName();
    });

});*/


// 当表单发生变化时执行

$(document).ready(function () {

    $('#filename_input_content, #form_information_form_block input').on('change', function () {
        // 获取表单内容
        const chineseName = $('#file_chinese_name').val().trim();
        const englishName = $('#file_english_name').val().trim();
        const season = $('#file_season').val().trim();
        const setsNumber = $('#file_sets_number').val().trim();
        const setName = $('#file_set_name').val().trim();
        const audioCoding = $('#file_audio_coding').val().trim();
        const captioningLanguage = $('#file_captioning_language').val().trim();
        const makingGroup = $('#file_making_group').val().trim();
        const imdbID = $('#file_imdb_id').val().trim();

        // 根据要求拼接文件名
        let fileName = "";
        if (season !== "" || setsNumber !== "") {
            if (captioningLanguage !== "") {
                fileName = `${chineseName}.${englishName}.${season}.${setsNumber}.${setName}.${audioCoding}.${captioningLanguage}.${makingGroup}.${imdbID}`;
            } else {
                fileName = `${chineseName}.${englishName}.${season}.${setsNumber}.${setName}.${audioCoding}.${makingGroup}.${imdbID}`;
            }
        } else if (captioningLanguage !== "") {
            fileName = `${chineseName}.${englishName}.${captioningLanguage}.${audioCoding}.${makingGroup}.${imdbID}`;
        } else {
            fileName = `${chineseName}.${englishName}.${audioCoding}.${makingGroup}.${imdbID}`;
        }

        // 去除空值和末尾的"."
        fileName = fileName.split(".").filter(val => val !== "").join(".");

        // 填充结果到输入框中
        $('#file_name_combinations_generate_results').val(fileName);
    });

});
