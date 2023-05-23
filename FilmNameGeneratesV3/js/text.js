// // 获取按钮和表单中的输入框元素
// const copyButton = document.getElementById("copydownbutton");
// const chineseNameInput = document.getElementById("moviechinesename");
// const englishNameInput = document.getElementById("movieenglishname");
// const yearInput = document.getElementById("filmyear");
// const chineseSubtitleInput = document.getElementById("moviesubtitlesinchinese");
// const englishSubtitleInput = document.getElementById("moviesubtitleenglishname");
// const subtitleYearInput = document.getElementById("moviesubtitleyear");

// // 绑定按钮的点击事件处理函数
// // copyButton.addEventListener("click", function () {
// //     // 将表单中的输入框内容复制到字幕表单对应的输入框中
// //     chineseSubtitleInput.value = chineseNameInput.value;
// //     englishSubtitleInput.value = englishNameInput.value;
// //     subtitleYearInput.value = yearInput.value;
// // });


// $('#copyButton').on('click', function () {
//     chineseSubtitleInput.value = chineseNameInput.value;
//     englishSubtitleInput.value = englishNameInput.value;
//     subtitleYearInput.value = yearInput.value;
// });

$(document).ready(function() {
    $('#copydownbutton').click(function() {
        // 获取源表单元素
        var sourceForm = $('form[name="movieinformation"]');
        var sourceChineseInput = sourceForm.find('#moviechinesename');
        var sourceEnglishInput = sourceForm.find('#movieenglishname');
        var sourceYearInput = sourceForm.find('#filmyear');
        
        // 获取目标表单元素
        var targetForm = $('form[name="moviesubtitleinformation"]');
        var targetChineseInput = targetForm.find('#moviesubtitlesinchinese');
        var targetEnglishInput = targetForm.find('#moviesubtitleenglishname');
        var targetYearInput = targetForm.find('#moviesubtitleyear');
        
        // 复制表单元素内容
        targetChineseInput.val(sourceChineseInput.val());
        targetEnglishInput.val(sourceEnglishInput.val());
        targetYearInput.val(sourceYearInput.val());
    });
});
