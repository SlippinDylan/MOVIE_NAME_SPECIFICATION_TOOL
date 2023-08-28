// 文件原名输入后按照规则拆分拆分
//FileNameSplitting.js
$(document).ready(function () {
    $("#filename_input_content").on('input', function () {
        let filenameInputValue = $(this).val(); // 获取输入框的值
        let splitString = filenameInputValue.split(/[.\-_ ]/); // 按照 "-"、"_" 和空格进行拆分
        let stringSplitResult = "";
        for (let i = 0; i < splitString.length; i++) {
            stringSplitResult += "<span>" + splitString[i] + "</span>"; // 生成每个单词的 span 标签
        }
        $("#file_name_resolution_split_result").html(stringSplitResult); // 将结果填充到 span 标签内
        $("#file_name_resolution_split_result span").each(function () {
            let stringSplitResult = $(this).text();
            stringSplitResult = stringSplitResult.replace(/[.\-_ ]/g, ""); // 清除 "."、"-"、"_" 和空格
            if (stringSplitResult.length == 0) {
                $(this).remove(); // 清除字符串为空的 span 标签
            } else {
                $(this).text(stringSplitResult); // 更新 span 标签的文本内容
            }
        });
    });
});
