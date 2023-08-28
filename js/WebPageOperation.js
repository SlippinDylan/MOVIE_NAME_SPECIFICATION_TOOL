//网页按钮操作
$(document).ready(function () {
    /*复制span标签的值*/
    $("#file_name_resolution_split_result").on("click", "span", function() {
        let value = $(this).text();
        let $temp = $("<input>");
        $("body").append($temp);
        $temp.val(value).select();
        document.execCommand("copy");
        $temp.remove();
        // alert("复制成功！");
    });


    // 点击copy_action_button按钮
    $("#copy_action_button").on('click', function() {
        // 获取file_name_combinations_generate_results输入框的值
        let fileName = $("#result_output_area input").val();

        // 创建一个临时textarea元素
        let tempTextarea = $("<textarea>");
        $("body").append(tempTextarea);

        // 将文件名值设置为临时textarea的值
        tempTextarea.val(fileName).select();

        // 执行复制操作
        document.execCommand('copy');

        // 移除临时textarea元素
        tempTextarea.remove();

        // 提示复制成功
        alert("文件名已复制到剪贴板");
    });


    /*全局清空按钮*/
    $(".clear_operation_button").on("click", function() {
        $("#filename_input_content").val("");
        $("#file_name_combinations_generate_results").val("");
        $("#file_chinese_name").val("");
        $("#file_english_name").val("");
        $("#file_season").val("");
        $("#file_sets_number").val("");
        $("#file_set_name").val("");
        $("#file_year").val("");
        $("#file_clip_version").val("");
        $("#file_resolution").val("");
        $("#file_resolution_format").val("");
        $("#file_source").val("");
        $("#file_video_coding").val("");
        $("#file_track").val("");
        $("#file_audio_coding").val("");
        $("#file_captioning_language").val("");
        $("#file_making_group").val("");
        $("#file_imdb_id").val("");
        $("#file_name_resolution_split_result").empty();
    });

});