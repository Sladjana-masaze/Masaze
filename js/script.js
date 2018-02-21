$(document).ready(function(){

        // -----------------ajax-------------------
    //create event listener
    document.getElementById("rel").addEventListener('click', loadRelax);
    document.getElementById("relM").addEventListener('click', loadRelax);

    function loadRelax() {

        //create XHR object
        var xhr = new XMLHttpRequest();

        //OPEN - type, url/file, async
        xhr.open('GET', 'masaze/relax.html', true);

        xhr.onload = function() {
            if(this.status == 200) {
                document.getElementById('ajaxx').innerHTML = this.responseText;
            }
        }

        //if has an error
        xhr.onerror = function() {
            // ovo za sad ovako, inace ne!!!!!!!!
            document.write('Nesto ne radi');
        }

        //sends request
        xhr.send();

        // menjam pozadinu
        $("body").css("background-image", "url('img/rel.jpg')");
    }


    // anticelulit.html
    document.getElementById("ant").addEventListener('click', loadAnticelulit);
    document.getElementById("antM").addEventListener('click', loadAnticelulit);    
    function loadAnticelulit() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'masaze/anticelulit.html', true);
        xhr.onload = function() {
            if(this.status == 200) {
                document.getElementById('ajaxx').innerHTML = this.responseText;
            }
        }
        xhr.onerror = function() {
            console.log('Nesto ne radi');
        }
        xhr.send();
        $("body").css("background-image", "url('img/anticelulit.jpg')");
    }

    // sportska.html
    document.getElementById("sport").addEventListener('click', loadSportska);
    document.getElementById("sportM").addEventListener('click', loadSportska);
    function loadSportska() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'masaze/sportska.html', true);
        xhr.onload = function() {
            if(this.status == 200) {
                document.getElementById('ajaxx').innerHTML = this.responseText;
            }
        }
        xhr.onerror = function() {
            console.log('Nesto ne radi');
        }
        xhr.send();
        $("body").css("background-image", "url('img/sportska.jpg')");
    }

    // stopala.html
    document.getElementById("stp").addEventListener('click', loadStopala);
    document.getElementById("stpM").addEventListener('click', loadStopala);
    function loadStopala() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'masaze/stopala.html', true);
        xhr.onload = function() {
            if(this.status == 200) {
                document.getElementById('ajaxx').innerHTML = this.responseText;
            }
        }
        xhr.onerror = function() {
            console.log('Nesto ne radi');
        }
        xhr.send();
        $("body").css("background-image", "url('img/foot.jpg')");
    }

    //lice.html
    document.getElementById("tret").addEventListener('click', loadLice);
    function loadLice() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'masaze/lice.html', true);
        xhr.onload = function() {
            if(this.status == 200) {
                document.getElementById('ajaxx').innerHTML = this.responseText;
            }
        }
        xhr.onerror = function() {
            console.log('Nesto ne radi');
        }
        xhr.send();
        $("body").css("background-image", "url('img/lice.jpg')");
    }
  
    // kontakt.html
    document.getElementById("kon").addEventListener('click', loadKontakt);
    function loadKontakt() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'kontakt.html', true);
        xhr.onload = function() {
            if(this.status == 200) {
                document.getElementById('ajaxx').innerHTML = this.responseText;
            }
        }
        xhr.onerror = function() {
            console.log('Nesto ne radi');
        }
        xhr.send();
        $("body").css("background-image", "url('img/111.jpg')");
    }
    
    
    // hamburger meni
    $('#hamburger').click(function(){
        $('#navigation').slideToggle(1500, function(){
            $(this).toggleClass('nav-expanded').css('display', '');
        });
    });

});