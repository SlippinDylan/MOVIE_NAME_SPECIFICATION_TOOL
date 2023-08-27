// 快捷输入模块加载填充
// ShortcutEntry.js
//剪辑版本加载出来，根据json文件
$(document).ready(function() {
    // 获取JSON数据
    $.getJSON('json/options.json', function(data) {
        let fileYear = data.fileYear;
        let fileClipVersions = data.fileClipVersions;
        let fileResolutionArray = data.fileResolutionArray;
        let fileResolutionFormat = data.fileResolutionFormat;
        let fileSource = data.fileSource;
        let fileVideoEncoding = data.fileVideoEncoding;
        let fileAudioEncoding = data.fileAudioEncoding;
        let fileEntryTrack = data.fileEntryTrack;

        // 生成版本号的<li>标签
        let $ulFileYear = $('#shortcut_input_file_year');
        $.each(fileYear, function(index, version) {
            let $li = $('<li>').text(version);
            $ulFileYear.append($li);
        });

        // 生成版本号的<li>标签
        let $ulClipVersions = $('#shortcut_input_clip_version');
        $.each(fileClipVersions, function(index, version) {
            let $li = $('<li>').text(version);
            $ulClipVersions.append($li);
        });

        // 生成分辨率的<li>标签
        let $ulResolutions = $('#shortcut_entry_resolution');
        $.each(fileResolutionArray, function(index, resolution) {
            let $li = $('<li>').text(resolution);
            $ulResolutions.append($li);
        });

        // 生成分辨率格式的<li>标签
        let $ulResolutionFormat = $('#shortcut_entry_resolution_format');
        $.each(fileResolutionFormat, function(index, resolution) {
            let $li = $('<li>').text(resolution);
            $ulResolutionFormat.append($li);
        });

        // 生成来源的<li>标签
        let $ulSource = $('#shortcut_entry_source');
        $.each(fileSource, function(index, resolution) {
            let $li = $('<li>').text(resolution);
            $ulSource.append($li);
        });

        // 生成视频编码的<li>标签
        let $ulVideoEncoding = $('#shortcut_entry_video_encoding');
        $.each(fileVideoEncoding, function(index, resolution) {
            let $li = $('<li>').text(resolution);
            $ulVideoEncoding.append($li);
        });

        // 生成音轨的<li>标签
        let $ulEntryTrack = $('#shortcut_entry_audio_encoding');
        $.each(fileAudioEncoding, function(index, resolution) {
            let $li = $('<li>').text(resolution);
            $ulEntryTrack.append($li);
        });

        // 生成音频格式的<li>标签
        let $ulAudioEncoding = $('#shortcut_entry_track');
        $.each(fileEntryTrack, function(index, resolution) {
            let $li = $('<li>').text(resolution);
            $ulAudioEncoding.append($li);
        });
    });
});

// 点击快捷输入块中的值，填充到表单中
$(document).ready(function() {
    // 剪辑版本  点击填充
    $('#shortcut_input_clip_version').on('click', 'li', function() {
        var clickedValue = $(this).text();
        $('#file_clip_version').val(clickedValue);
    });

    // 分辨率  点击填充
    $('#shortcut_entry_resolution').on('click', 'li', function() {
        var clickedValue = $(this).text();
        $('#file_resolution').val(clickedValue);
    });

    // 分辨率格式  点击填充
    $('#shortcut_entry_resolution_format').on('click', 'li', function() {
        var clickedValue = $(this).text();
        $('#file_resolution_format').val(clickedValue);
    });

    // 来源  点击填充
    $('#shortcut_entry_source').on('click', 'li', function() {
        var clickedValue = $(this).text();
        $('#file_source').val(clickedValue);
    });

    // 视频编码  点击填充
    $('#shortcut_entry_video_encoding').on('click', 'li', function() {
        var clickedValue = $(this).text();
        $('#file_video_coding').val(clickedValue);
    });

    // 音轨  点击填充
    $('#shortcut_entry_track').on('click', 'li', function() {
        var clickedValue = $(this).text();
        $('#file_track').val(clickedValue);
    });

    // 音频格式  点击填充
    $('#shortcut_entry_audio_encoding').on('click', 'li', function() {
        var clickedValue = $(this).text();
        $('#file_audio_coding').val(clickedValue);
    });
});
