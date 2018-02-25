import { getSign, getZodiac } from 'horoscope';

(function () {

    $('#dataNascimento').datepicker({
        startView: 2,
        maxViewMode: 2,
        language: "pt-BR",
        disableTouchKeyboard: true,
        immediateUpdates: true,
        autoclose: true,
        todayBtn: true,
    });

    $('#dataNascimento').on("changeDate", trigger);

    function getUrl() {
        var url = window.location.href.split('#')[0];
        return url;
    }

    function format(fmt, ...args) {
        return fmt
            .split("%%")
            .reduce((aggregate, chunk, i) =>
                aggregate + chunk + (args[i] || ""), "");
    }

    function trigger() {

        var horoscopo = {
            'tradicional': '',
            'chines': '',
            'nerd': '',
        };

        var date = $('#dataNascimento').datepicker('getDate');
        var year = year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();

        var tradicionalNpm = getSign({ month: month, day: day });
        var chinesNpm = getZodiac(year);

        switch (tradicionalNpm) {
            case 'Capricorn':
                horoscopo.tradicional = 'Capricórnio';
                horoscopo.nerd = 'Laboratório';
                break;
            case 'Aquarius':
                horoscopo.tradicional = 'Aquário';
                horoscopo.nerd = 'Mundo Melhor';
                break;
            case 'Pisces':
                horoscopo.tradicional = 'Peixes';
                horoscopo.nerd = 'Genialidade';
                break;
            case 'Aries':
                horoscopo.tradicional = 'Áries';
                horoscopo.nerd = 'Máquina do Tempo';
                break;
            case 'Taurus':
                horoscopo.tradicional = 'Touro';
                horoscopo.nerd = 'Serviço Secreto';
                break;
            case 'Gemini':
                horoscopo.tradicional = 'Gêmeos';
                horoscopo.nerd = 'Léguas';
                break;
            case 'Cancer':
                horoscopo.tradicional = 'Câncer';
                horoscopo.nerd = 'Magia';
                break;
            case 'Leo':
                horoscopo.tradicional = 'Leão';
                horoscopo.nerd = 'Grana Preta';
                break;
            case 'Virgo':
                horoscopo.tradicional = 'Virgem';
                horoscopo.nerd = 'Circuitos';
                break;
            case 'Libra':
                horoscopo.tradicional = 'Libra';
                horoscopo.nerd = 'Hiperespaço';
                break;
            case 'Scorpio':
                horoscopo.tradicional = 'Escorpião';
                horoscopo.nerd = 'Meia-morte';
                break;
            case 'Sagittarius':
                horoscopo.tradicional = 'Sagitário';
                horoscopo.nerd = 'Planetário';
                break;
        
            default:
                break;
        }

        switch (chinesNpm) {
            case 'Monkey':
                horoscopo.chines = 'Macaco';
                break;
            case 'Rooster':
                horoscopo.chines = 'Galo';
                break;
            case 'Dog':
                horoscopo.chines = 'Cão';
                break;
            case 'Pig':
                horoscopo.chines = 'Porco';
                break;
            case 'Rat':
                horoscopo.chines = 'Rato';
                break;
            case 'Ox':
                horoscopo.chines = 'Boi';
                break;
            case 'Tiger':
                horoscopo.chines = 'Tigre';
                break;
            case 'Rabbit':
                horoscopo.chines = 'Coelho';
                break;
            case 'Dragon':
                horoscopo.chines = 'Dragão';
                break;
            case 'Snake':
                horoscopo.chines = 'Serpente';
                break;
            case 'Horse':
                horoscopo.chines = 'Cavalo';
                break;
            case 'Goat':
                horoscopo.chines = 'Carneiro';
                break;
        
            default:
                break;
        }

        $('#data-escolhida').text(
            format("%%/%%/%%", day, month, year)
        );
        
        $('#signo-tradicional').text(horoscopo.tradicional);
        $('#signo-chines').text(horoscopo.chines);
        $('#signo-nerd').text(horoscopo.nerd);

        var url = getUrl();
        var description = format(
            "#HoroFinder - Sou %% no horóscopo tradicional, %% no horóscopo chinês e %% no horóscopo nerd. Descubra você também 😝",
            horoscopo.tradicional, horoscopo.chines, horoscopo.nerd
        );
        var buttonText = 'Compartilhar';
        var share = new ShareButton({
            url: url,
            title: 'HoroFinder',
            description: description,
            ui: {
                buttonText: buttonText,
            },
            networks: {
                pinterest: {
                    enabled: false,
                },
                reddit: {
                    enabled: false,
                },
                linkedin: {
                    enabled: false,
                },
                facebook: {
                    enabled: false,
                },
                googlePlus: {
                    enabled: false,
                },
                email: {
                    enabled: false,
                },
            }
        });

        share.open();

        $('.this-share-button').show();

        $('#botao-abre-modal').removeClass('d-none');

        $('#resultado-modal').modal('toggle');

    }

})();