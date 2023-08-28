//ID为form_information_form_block的form表单中的input中的值发生变化（所有的ipput标签任意一个发生变化），则按照以下顺序组合生成文件名并填充到ID为file_name_combinations_generate_results的input标签中
//1.若ID为file_season或ID为file_sets_number或ID为file_set_name的input中，任意一个有值，则将ID为


/*
实时监听ID为file_name_resolution_split_result中的span标签中值的变化和ID为form_information_form_block的form表单中所有的input标签值的变化，只要任意一个值发生变化，则按照'file_chinese_name'+.+'file_english_name'+.+'S'+'file_season'+.+'E'+'file_sets_number'+.+'file_set_name'+.+'file_year'+.+'file_clip_version'+.+'file_resolution'+.+'file_resolution_format'+.+'file_source'+.+'file_video_coding'+.+'file_track'+.+'file_audio_coding'+.+'file_captioning_language'+.+'file_making_group'+.+'file_imdb_id'的规则组合生成新的文件名填充到ID为file_name_combinations_generate_results的input标签中；若form表单下部分input标签没有值，则对应的input值和其后面的“.”都移除掉；'S'和'E'只有在'file_season'和'file_sets_number'的时候显示

1.只将其中有值的标签拼接起来，没有值的标签直接跳过不参与拼接，无论有多少个有值的input标签，，只要filename_input_content的input标签中有值就要拼接
2.若file_season和file_sets_number均无值，则'S'+'file_season'+.+'E'+'file_sets_number'这一段不参与拼接






1.若若ID为file_season或ID为file_sets_number或ID为file_set_name的input中，任意一个有值,file_captioning_language无值，则按照'file_chinese_name'+.+'file_english_name'+.+'S'+'file_season'+.+'E'+'file_sets_number'+.+'file_set_name'+.+'file_year'+.+'file_clip_version'+.+'file_resolution'+.+'file_resolution_format'+.+'file_source'+.+'file_video_coding'+.+'file_track'+.+'file_audio_coding'+.+'file_making_group'+.+'file_imdb_id'拼接生成并填充

2.若若ID为file_season或ID为file_sets_number或ID为file_set_name的input中，任意一个有值,且file_captioning_language也有值，则按照'file_chinese_name'+.+'file_english_name'+.+'S'+'file_season'+.+'E'+'file_sets_number'+.+'file_set_name'+.+'file_year'+.+'file_clip_version'+.+'file_resolution'+.+'file_resolution_format'+.+'file_source'+.+'file_video_coding'+.+'file_track'+.+'file_audio_coding'+.+'file_captioning_language'+.+'file_making_group'+.+'file_imdb_id'拼接生成并填充

3.若ID为file_season或ID为file_sets_number或ID为file_set_name的input中均无值，且file_captioning_language也无值，则按照'file_chinese_name'+.+'file_english_name'+.+'file_year'+.+'file_clip_version'+.+'file_resolution'+.+'file_resolution_format'+.+'file_source'+.+'file_video_coding'+.+'file_track'+.+'file_audio_coding'+.+'file_making_group'+.+'file_imdb_id'拼接生成并填充

4.若ID为file_season或ID为file_sets_number或ID为file_set_name的input中，均无值，且file_captioning_language有值，则按照'file_chinese_name'+.+'file_english_name'+.+'file_year'+.+'file_clip_version'+.+'file_resolution'+.+'file_resolution_format'+.+'file_source'+.+'file_video_coding'+.+'file_track'+.+'file_audio_coding'+.+'file_captioning_language'+.+'file_making_group'+.+'file_imdb_id'拼接生成并填充

注意，在拼接的时候若ID为form_information_form_block的form表单下的input标签，则就不参与拼接了*/

/*$(document).ready(function() {
    // 选择要观察的目标节点
    const targetNode = document.getElementById('file_name_resolution_split_result');

    // 创建一个观察者实例
    const observer = new MutationObserver(function(mutationsList, observer) {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList' || mutation.type === 'characterData') {
                generateFileName(); // 调用生成文件名的函数
                break; // 一旦发生变化，调用一次后退出循环
            }
        }
    });

    // 配置观察选项
    const config = { childList: true, characterData: true, subtree: true };

    // 开始观察目标节点
    observer.observe(targetNode, config);

    // 监听 form 表单中所有 input 标签的值变化
    $("#form_information_form_block input").on('input', function() {
        generateFileName(); // 调用生成文件名的函数
    });

    // 监听 filename_input_content 输入框的值变化
    $("#filename_input_content").on('input', function() {
        generateFileName(); // 调用生成文件名的函数
    });

    // 生成文件名并填充到 input 标签中
    function generateFileName() {
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

        let generatedFileName = "";

        if ((fileSeason || fileSetsNumber || fileSetName) && !fileCaptioningLanguage) {
            generatedFileName = constructFileName([fileChineseName, fileEnglishName, "S" + fileSeason, "E" + fileSetsNumber, fileSetName, fileYear, fileClipVersion, fileResolution, fileResolutionFormat, fileSource, fileVideoCoding, fileTrack, fileAudioCoding, fileMakingGroup, fileImdbId]);
        } else if ((fileSeason || fileSetsNumber || fileSetName) && fileCaptioningLanguage) {
            generatedFileName = constructFileName([fileChineseName, fileEnglishName, "S" + fileSeason, "E" + fileSetsNumber, fileSetName, fileYear, fileClipVersion, fileResolution, fileResolutionFormat, fileSource, fileVideoCoding, fileTrack, fileAudioCoding, fileCaptioningLanguage, fileMakingGroup, fileImdbId]);
        } else if (!fileSeason && !fileSetsNumber && !fileSetName && !fileCaptioningLanguage) {
            generatedFileName = constructFileName([fileChineseName, fileEnglishName, fileYear, fileClipVersion, fileResolution, fileResolutionFormat, fileSource, fileVideoCoding, fileTrack, fileAudioCoding, fileMakingGroup, fileImdbId]);
        } else if (!fileSeason && !fileSetsNumber && !fileSetName && fileCaptioningLanguage) {
            generatedFileName = constructFileName([fileChineseName, fileEnglishName, fileYear, fileClipVersion, fileResolution, fileResolutionFormat, fileSource, fileVideoCoding, fileTrack, fileAudioCoding, fileCaptioningLanguage, fileMakingGroup, fileImdbId]);
        }

        // 填充生成的文件名到指定的 input 标签
        $("#file_name_combinations_generate_results").val(generatedFileName);
        console.log(generatedFileName);
    }

    // 构建文件名并排除没有值的部分
    function constructFileName(parts) {
        return parts.filter(part => part).join(".");
    }
});*/
