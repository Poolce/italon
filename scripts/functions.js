var cur_program_id = 0;

function progs_right_swap() {
    progs = document.getElementsByClassName("program");
    var next_id
    document.getElementsByClassName("ps-nav-dot-active")[0].className = "ps-nav-dot";
    if (cur_program_id + 1 == progs.length)
        next_id = 0
    else
        next_id = cur_program_id + 1
    $(progs[cur_program_id]).fadeOut("slow");
    $(progs[next_id]).fadeIn("slow");
    cur_program_id = next_id
    document.getElementById("psnd-"+next_id).className = "ps-nav-dot ps-nav-dot-active"
}
function progs_left_swap() {
    progs = document.getElementsByClassName("program");
    var next_id;
    document.getElementsByClassName("ps-nav-dot-active")[0].className = "ps-nav-dot";
    if (cur_program_id - 1 == -1)
        next_id = progs.length-1
    else
        next_id = cur_program_id - 1
    $(progs[cur_program_id]).fadeOut("slow");
    $(progs[next_id]).fadeIn("slow");
    cur_program_id = next_id;
    document.getElementById("psnd-"+next_id).className = "ps-nav-dot ps-nav-dot-active";
}

function lockScroll(){
    $html = $('html'); 
    $body = $('body'); 
    var initWidth = $body.outerWidth();
    var initHeight = $body.outerHeight();

    var scrollPosition = [
        self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
        self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
    ];
    $html.data('scroll-position', scrollPosition);
    $html.data('previous-overflow', $html.css('overflow'));
    $html.css('overflow', 'hidden');
    window.scrollTo(scrollPosition[0], scrollPosition[1]);   

    var marginR = $body.outerWidth()-initWidth;
    var marginB = $body.outerHeight()-initHeight; 
    $body.css({'margin-right': marginR,'margin-bottom': marginB});
} 

function unlockScroll(){
    $html = $('html');
    $body = $('body');
    $html.css('overflow', $html.data('previous-overflow'));
    var scrollPosition = $html.data('scroll-position');
    window.scrollTo(scrollPosition[0], scrollPosition[1]);    

    $body.css({'margin-right': 0, 'margin-bottom': 0});
}