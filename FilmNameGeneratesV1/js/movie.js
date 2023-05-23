$(document).ready(function () {
    $('#outpuButton').on('click', function () {
        // 使用jQuery选择器找到所有id为"generatemovietitle"的表单中非空的输入字段。
        var inputs = $('#generatemovietitle input').filter(function () {
            return $.trim(this.value).length > 0;
        });
        // 使用map()方法遍历这些输入字段，并为每个字段获取它的值。
        var inputValues = inputs.map(function () {
            var inputValue = $(this).val();
            // 如果当前字段的id属性为"productionTeam"并且它的值不为空，则将其值用方括号括起来。
            if (this.id === 'productionTeam' && inputValue.length > 0) {
                inputValue = '[' + inputValue + ']';
            }
            return inputValue;
            //使用join()方法将所有输入值合并到一个字符串中，其中用句点分隔，并将该字符串显示在id为"result"的元素中。
        }).get().join('.');
        $('#result').text(inputValues);
    });
    $('#copyButton').on('click', function () {
        var resultBox = $('#result')[0];
        // 使用document.createRange()方法创建一个新的Range对象。
        var range = document.createRange();
        // 使用该对象的selectNode()方法将id为"result"的元素选中。
        range.selectNode(resultBox);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        // 将选中的元素添加到用户的剪贴板中。
        document.execCommand('copy');
        // 移除选中的范围，并弹出一个警告框，告知用户已经复制到剪贴板。
        window.getSelection().removeAllRanges();
        alert('已复制到剪切板！');
    });


    
    //一键清空输入框
    $(document).ready(function () {
        $("#cleanButton").click(function () {
            $("#generatemovietitle input[type='text']").val("");
        });
    });
});
