// 电影文件名生成
//FilenameGeneration.js
// 当表单发生变化时执行

$(document).ready(function() {

    // 监听解析结果区域的变化
    const targetNode = document.getElementById('file_name_resolution_split_result');
    const observer = new MutationObserver(function(mutationsList, observer) {
        for (let mutation of mutationsList) {
            if (mutation.type === 'characterData') {
                generateFileName();
                break;
            }
        }
    });
    const config = { characterData: true, subtree: true };
    observer.observe(targetNode, config);

    // 监听 form 表单中所有 input 标签的值变化
    $("#form_information_form_block input").on('input', function() {
        generateFileName();
    });

    // 监听快捷方式下的 li 标签点击事件
    $(".shortcut_block li").on('click', function() {
        generateFileName();
    });

    // 监听源文件名输入框变化
    $("#filename_input_content").on('input', function() {
        generateFileName();
    });

    // 生成文件名并填充到 input 标签中
    function generateFileName() {
        let parts = [];

        // 获取各个输入字段的值
        let fileChineseName = $("#file_chinese_name").val();
        let fileEnglishName = $("#file_english_name").val();
        let fileSeason = $("#file_season").val();
        let fileSetsNumber = $("#file_sets_number").val();
        let fileSetName = $("#file_set_name").val();
        let fileYear = $("#file_year").val();
        let fileClipVersion = $("#file_clip_version").val();
        let fileResolution = $("#file_resolution").val();
        let fileResolutionFormat = $("#file_resolution_format").val();
        let fileSource = $("#file_source").val();
        let fileVideoCoding = $("#file_video_coding").val();
        let fileTrack = $("#file_track").val();
        let fileAudioCoding = $("#file_audio_coding").val();
        let fileCaptioningLanguage = $("#file_captioning_language").val();
        let fileMakingGroup = $("#file_making_group").val();
        let fileImdbId = $("#file_imdb_id").val();

        // 根据规则生成文件名
        if (fileChineseName) parts.push(fileChineseName);
        if (fileEnglishName) parts.push(fileEnglishName);
        if (fileSeason && fileSetsNumber) {
            parts.push("S" + fileSeason + "E" + fileSetsNumber);
        }
        if (fileSetName) parts.push(fileSetName);
        if (fileYear) parts.push(fileYear);
        if (fileClipVersion) parts.push(fileClipVersion);
        if (fileResolution) parts.push(fileResolution);
        if (fileResolutionFormat) parts.push(fileResolutionFormat);
        if (fileSource) parts.push(fileSource);
        if (fileVideoCoding) parts.push(fileVideoCoding);
        if (fileTrack) parts.push(fileTrack);
        if (fileAudioCoding) parts.push(fileAudioCoding);
        if (fileCaptioningLanguage) parts.push(fileCaptioningLanguage);
        if (fileMakingGroup) parts.push(fileMakingGroup);
        if (fileImdbId) parts.push(fileImdbId);

        // 生成文件名并填充到指定的 input 标签
        let generatedFileName = parts.join(".");

        // 移除没有值的 input 标签
        $("#file_name_combinations_generate_results").val(generatedFileName.replace(/\.\.+/g, '.'));
        console.log(generatedFileName);
    }
});

/*$(document).ready(function() {

    // 监听解析结果区域的变化
    const targetNode = document.getElementById('file_name_resolution_split_result');
    const observer = new MutationObserver(function(mutationsList, observer) {
        for (let mutation of mutationsList) {
            if (mutation.type === 'characterData') {
                generateFileName();
                break;
            }
        }
    });
    const config = { characterData: true, subtree: true };
    observer.observe(targetNode, config);

    // 监听 form 表单中所有 input 标签的值变化
    $("#form_information_form_block input").on('input', function() {
        generateFileName();
    });

    // 监听快捷方式下的 li 标签点击事件
    $(".shortcut_block li").on('click', function() {
        generateFileName();
    });

    // 监听源文件名输入框变化
    $("#filename_input_content").on('input', function() {
        generateFileName();
    });

    // 生成文件名并填充到 input 标签中
    function generateFileName() {
        let parts = [];

        // 获取各个输入字段的值
        // ...

        // 根据规则生成文件名
        // ...

        // 生成文件名并填充到指定的 input 标签
        // ...

        // 移除没有值的 input 标签
        // ...
    }
});*/



/*form_information_form_block下的input标签发生有三种方式，一种是人工手动输入后发生变化，第二是点击shortcut_block下面的li标签后根据其他js函数填充到对应的input输入框下，第三是根据filename_input_content输入的文件名后自动解析拆分后填充到input输入框下，这三种情况下都要做到监控并生成新的文件名*/
