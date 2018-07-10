$(function() {
    $('code').each(function(index) { // percorremos todos os elementos que forem 'code' ou outro elemento indicado
        var verificaTexto = $(this).text(); // obtemos todo texto deste elemento
        var buscarTexto = verificaTexto.split('#'); // quebramos o texto obtido, separando as partes sempre que tiver '#' e transformamos o texto em um array de strings
        
        // caso o array tenha mais de uma posição, quer dizer que tinhamos o separador '#' no texto original, então criamos o link dinamicamente
        if (buscarTexto.length > 1) { 
            // criamos uma variável chamada "link" definindo os valores que ela deverá levar para criar o "<a href" desejado
            var link = '<a href="http://google.com.br/' + buscarTexto[1] + '" target="_blank">Clique aqui e acesse a Hashtag' + ' ' + '#' + buscarTexto[1] + '</a>';
            
            $(this).text(''); // zeramos o texto do elemento original (buscado anteriormente), 'code' em nosso caso
            $(this).append(link); // adicionamos a variável 'link' que criamos, dentro do elemento 'code'.
        }

    });
})