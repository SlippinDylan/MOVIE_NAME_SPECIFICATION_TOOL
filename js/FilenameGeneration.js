// 电影文件名生成
// 当表单发生变化时执行

$(document).ready(function() {
    $("#form_information_form_block").on('input', 'input', function() {
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
            generatedFileName = fileChineseName + "." + fileEnglishName + ".S" + fileSeason + ".E" + fileSetsNumber + "." + fileSetName + "." + fileYear + "." + fileClipVersion + "." + fileResolution + "." + fileResolutionFormat + "." + fileSource + "." + fileVideoCoding + "." + fileTrack + "." + fileAudioCoding + "." + fileMakingGroup + "." + fileImdbId;
        } else if ((fileSeason || fileSetsNumber || fileSetName) && fileCaptioningLanguage) {
            generatedFileName = fileChineseName + "." + fileEnglishName + ".S" + fileSeason + ".E" + fileSetsNumber + "." + fileSetName + "." + fileYear + "." + fileClipVersion + "." + fileResolution + "." + fileResolutionFormat + "." + fileSource + "." + fileVideoCoding + "." + fileTrack + "." + fileAudioCoding + "." + fileCaptioningLanguage + "." + fileMakingGroup + "." + fileImdbId;
        } else if (!fileSeason && !fileSetsNumber && !fileSetName && !fileCaptioningLanguage) {
            generatedFileName = fileChineseName + "." + fileEnglishName + "." + fileYear + "." + fileClipVersion + "." + fileResolution + "." + fileResolutionFormat + "." + fileSource + "." + fileVideoCoding + "." + fileTrack + "." + fileAudioCoding + "." + fileMakingGroup + "." + fileImdbId;
        } else if (!fileSeason && !fileSetsNumber && !fileSetName && fileCaptioningLanguage) {
            generatedFileName = fileChineseName + "." + fileEnglishName + "." + fileYear + "." + fileClipVersion + "." + fileResolution + "." + fileResolutionFormat + "." + fileSource + "." + fileVideoCoding + "." + fileTrack + "." + fileAudioCoding + "." + fileCaptioningLanguage + "." + fileMakingGroup + "." + fileImdbId;
        }

        $("#file_name_combinations_generate_results").val(generatedFileName);
    });
});