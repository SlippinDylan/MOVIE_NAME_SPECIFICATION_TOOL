// // 将选项输入表单中的选项通过数组的方式存储并加载出来
// $(document).ready(function () {
//     // 电影剪辑版本
//     var filmClipVersionOption = ["DirectorsCut", "Unrated", "LIMITED", "Extended"];
//     // 电影分辨率
//     var filmResolutionOptions = ["240p", "360p", "480p", "576p", "720p", "1024p", "1050p", "1080p", "1200p", "1600p", "2160p", "2400p"];
//     // 电影分辨率格式
//     var filmResolutionFormatOptions = ["QVGA", "360p", "VGA", "PAL", "HD", "4kUHD", "WQUXGA", "8kUHD"];
//     // 电影来源
//     var filmSourceOption = ["WEB-DL", "WEBRip", "REMUX", "HDTV", "HR-HDTV", "HDRIP", "Blu-ray", "BRRip", "BDRIP", "HDDVD", "DVD", "DVDSCR", "DVDRIP", "CAM", "TS", "Other"];
//     // 电影视频编码
//     var filmVideoCodingOptions = ["H-264", "H-265", "HEVC", "IMAX"];
//     // 电影音频编码
//     var filmAudioCodingOptions = ["DD", "DD+", "Dolby-TrueHD", "Dolby-Atmos", "DTS", "DTS-HD", "DTS:X"];
//
//     //剪辑版本填充
//     $.each(filmClipVersionOption, function (index, value) {
//         $('#film_clip_version_option').append('<li><span>' + value + '</span></li>');
//     });
//     // 分辨率填充
//     $.each(filmResolutionOptions, function (index, value) {
//         $('#film_resolution_options').append('<li><span>' + value + '</span></li>');
//     });
//     // 分辨率格式填充
//     $.each(filmResolutionFormatOptions, function (index, value) {
//         $('#film_resolution_format_options').append('<li><span>' + value + '</span></li>');
//     });
//     // 来源填充
//     $.each(filmSourceOption, function (index, value) {
//         $('#film_source_option').append('<li><span>' + value + '</span></li>');
//     });
//     // 视频编码填充
//     $.each(filmVideoCodingOptions, function (index, value) {
//         $('#film_video_coding_options').append('<li><span>' + value + '</span></li>');
//     });
//     // 音频编码填充
//     $.each(filmAudioCodingOptions, function (index, value) {
//         $('#film_audio_coding_options').append('<li><span>' + value + '</span></li>');
//     });
// });
