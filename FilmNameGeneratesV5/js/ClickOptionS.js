$(function() {
    // 剪辑版本
    $('#film_clip_version_option li span').on('click', function() {
        $('#film_cut_version').val($(this).text());
    });

    // 分辨率
    $('#film_resolution_options li span').on('click', function() {
        $('#film_file_resolution').val($(this).text());
    });

    // 分辨率格式
    $('#film_resolution_format_options li span').on('click', function() {
        $('#film_resolution_format').val($(this).text());
    });

    // 来源
    $('#film_source_option li span').on('click', function() {
        $('#film_file_source').val($(this).text());
    });

    // 视频编码
    $('#film_video_coding_options li span').on('click', function() {
        $('#film_file_video_coding').val($(this).text());
    });

    // 音频编码
    $('#film_audio_coding_options li span').on('click', function() {
        $('#film_file_audio_track').val($(this).text());
    });
});