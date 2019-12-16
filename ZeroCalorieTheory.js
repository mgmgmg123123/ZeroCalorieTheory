var TheoryList = 
    [
        ['今日食べたものは揚げ物ですか？','高温で揚げるとカロリーが空中に逃げます。'],
        ['今日食べたものに野菜が含まれていますか？','野菜は食べても太りません。'],
        ['今日食べたものは冷たいですか？','冷たいものはそもそもゼロカロリーです。']
    ];

window.onload = function()
    {
        var question = document.getElementById("question");
        question.innerHTML = TheoryList[0][0];
    }

function yes() 
    {
        var No = getQuestionNo();
        var answer = document.getElementById("answer");
        answer.innerHTML = TheoryList[No -1][1];
        var isCalory = document.getElementById("isCalory");
        isCalory.innerText = "カロリーゼロです！！！"
    }

function no()
    {
        var No = getQuestionNo();
        var question = document.getElementById("question");
        if(TheoryList.length <= No)
        {
            var answer = document.getElementById("answer");
            answer.innerHTML = "今日食べたものはゼロカロリーではないです…。";
        }
        else
        {
            var questionNo = document.getElementById("questionNo");
            var innerQuestionNo = questionNo.innerText;
            No = No +1;
            questionNo.innerText　= innerQuestionNo.substr(0,4) + String(No);

            question.innerHTML = TheoryList[No - 1][0];
        }
    }

function getQuestionNo()
{
    var questionNo = document.getElementById("questionNo");
    var strNo = questionNo.innerText;
    strNo = strNo.replace('質問その', '' );
    var No = parseInt(strNo, 10);
    return No;
}

function doReload()
{ 
    window.location.reload();
}
