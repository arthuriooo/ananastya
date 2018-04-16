$( document ).ready(function() {
    
    var eyes = '';
    var name = '';
    var height = '';
    var dish = '';
    var kids = '';
    var film = '';
    var hair = '';
    var fruit = '';
    var country = '';
    var number = '';
    var answers = 0;
    var mes = '';
    var email = '';
    
    $('#startQ').click(function(){
        $('#startQ').css('display','none');
        $('#q1').css('display','block');
    });
    
    $('#brown').click(function(){
        $('#q1').css('display','none');
        $('#q2').css('display','block');
        eyes='brown';
    });
    
    $('#green').click(function(){
        $('#q1').css('display','none');
        $('#q2').css('display','block');
        eyes='green';
        answers++;
    });
    
    $('#chameleon').click(function(){
        $('#q1').css('display','none');
        $('#q2').css('display','block');
        eyes='chameleon';
    });
    
    $('#alex').click(function(){
        $('#q2').css('display','none');
        $('#q3').css('display','block');
        name='alex';
    });
    
    $('#andrew').click(function(){
        $('#q2').css('display','none');
        $('#q3').css('display','block');
        name='andrew';
    });
    
    $('#alexy').click(function(){
        $('#q2').css('display','none');
        $('#q3').css('display','block');
        name='alexy';
        answers++;
    });
    
    $('#rost178').click(function(){
        $('#q3').css('display','none');
        $('#q4').css('display','block');
        height='178';
    });
    
    $('#rost180').click(function(){
        $('#q3').css('display','none');
        $('#q4').css('display','block');
        height='180';
        answers++;
    });
    
    $('#rost182').click(function(){
        $('#q3').css('display','none');
        $('#q4').css('display','block');
        height='182';
    });
    
    $('#tosts').click(function(){
        $('#q4').css('display','none');
        $('#q5').css('display','block');
        dish='tosts';
    });
    
    $('#sea').click(function(){
        $('#q4').css('display','none');
        $('#q5').css('display','block');
        dish='sea';
        answers++;
    });
    
    $('#shaurma').click(function(){
        $('#q4').css('display','none');
        $('#q5').css('display','block');
        dish='shaurma';
    });
    
    $('#one').click(function(){
        $('#q5').css('display','none');
        $('#q6').css('display','block');
        kids='one';
    });
    
    $('#two').click(function(){
        $('#q5').css('display','none');
        $('#q6').css('display','block');
        kids='two';
        answers++;
    });
    
    $('#zero').click(function(){
        $('#q5').css('display','none');
        $('#q6').css('display','block');
        kids='zero';
    });
    
    $('#criminal').click(function(){
        $('#q6').css('display','none');
        $('#q7').css('display','block');
        film='criminal';
        answers++;
    });
    
    $('#pimp').click(function(){
        $('#q6').css('display','none');
        $('#q7').css('display','block');
        film='pimp';
    });
    
    $('#beforeimet').click(function(){
        $('#q6').css('display','none');
        $('#q7').css('display','block');
        film='beforeimet';
    });
    
    $('#yeah').click(function(){
        $('#q7').css('display','none');
        $('#q8').css('display','block');
        hair='business';
    });
    
    $('#nope').click(function(){
        $('#q7').css('display','none');
        $('#q8').css('display','block');
        hair='love';
        answers++;
    });
    
    $('#siriously').click(function(){
        $('#q7').css('display','none');
        $('#q8').css('display','block');
        hair='tattoo';
    });
    
    $('#banana').click(function(){
        $('#q8').css('display','none');
        $('#q9').css('display','block');
        fruit='banana';
        answers++;
    });
    
    $('#mmm').click(function(){
        $('#q8').css('display','none');
        $('#q9').css('display','block');
        fruit='mmm';
    });
    
    $('#avokado').click(function(){
        $('#q8').css('display','none');
        $('#q9').css('display','block');
        fruit='avokado';
    });
    
    $('#russia').click(function(){
        $('#q9').css('display','none');
        $('#q10').css('display','block');
        country='russia';
    });
    
    $('#usa').click(function(){
        $('#q9').css('display','none');
        $('#q10').css('display','block');
        country='usa';
        answers++;
    });
    
    $('#italy').click(function(){
        $('#q9').css('display','none');
        $('#q10').css('display','block');
        country='italy';
    });
    
    $('#six').click(function(){
        $('#q10').css('display','none');
        $('#result').css('display','block');
        number='69';
    });
    
    $('#kush').click(function(){
        $('#q10').css('display','none');
        $('#result').css('display','block');
        number='420';
    });
    
    $('#twelve').click(function(){
        $('#q10').css('display','none');
        $('#result').css('display','block');
        number='12';
        answers++;
    });
    
    email = eyes+' '+name+' '+dish+' '+height+' '+kids+' '+film+' '+country+' '+number+' '+fruit+' '+hair;
    
    $('#check').click(function(){
        if (answers <= 4) {
            mes = 'ПЛОХО!! '+answers+' правильных ответов из 10! Я недоволен и обижен! Расскажи о результате Королю!';
        }
        else if (answers > 4 && answers <= 7) {
            mes = 'Нормально, но я ожидал от тебя большего! '+answers+' правильных ответов из 10. Я знаю, ты способна на большее. Расскажи о результате Королю!';
        }
        else if (answers > 7 && answers < 10) {
            mes = 'Молодчииинка!!! Обожаю тебя! Ты правильно ответила на '+answers+' вопросов из 10! Это хороший результат и мне очень приятно, что ты знаешь обо мне так много!! Так держать! Расскажи о результате Королю)';
        }
        else if (answers==10) {
            mes = 'ВОУ '+ answers+' правильных ответов из 10!!! ТЫ ПРОСТО СУПЕР!! Как тебе это удалось?? ОБОЖАЮ ТЕБЯ!! Если бы ты прошла тест при мне, расцеловал бы (смущенный смайлик) Если ты все же дошла до 10 и сейчас читаешь это, то расскажи Королю о результате! Порадуй его!!))';
        }
        else {mes = 'Что то пошло не так! Расскажи об этом Королю!'}
        
        $('#resultText').html(mes);
        
        emailjs.send("gmail", "...", {"email":email,"eyes":eyes,"name":name,"dish":dish,"height":height,"kids":kids,"film":film,"country":country,"number":number,"fruit":fruit,"hair":hair,"answers":answers});
    })
    
    
    
});