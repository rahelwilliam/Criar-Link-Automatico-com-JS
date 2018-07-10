# Criando links automaticamente com JS
Este projeto tem o intuito de auxiliar o desenvolvedor na criação automática de links da página, utilizando algum elemento / class / id específico da página e transformando o mesmo em link (`<a href`).

## O que é preciso para implementar?
Para implementar o código é necessário apenas os seguintes passos:

* Criar uma ou mais páginas em html (com conteúdos normais) 
* Dentro desta(s) pagina(s), criar o elemento / class / id que será transformado em link
* Chamar a biblioteca JQuery na(s) página(s): `<script type="text/javascript" src="http://code.jquery.com/jquery-1.5.js"></script>`
* Criar o arquivo JS com o código de transformação (ou adicionar o mesmo direto no html com os elementos que serão convertidos)

## Qual comando será usado do JS?
Os comandos usados para executar essa função serão o `.each`, `.text`, `.length` `.split` e `.append`.

## Função de Exemplo
Caso você já seja experiente e queira simplesmente utilizar a função sem seguir o passo a passo, poderá utilizar o script:

```
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
```

## O que eu posso criar com esse projeto
Conforme citado acima, este é um projeto para fazer a alteração de texto para link, dependendo da sua criatividade, é possível alterar texto específicos para botões, imagens ou substituir informações. Alguns sites precisam estar em constante atualização e muitas vezes é complicado entrar em página por página, talves seja possível usar este comando para alterar tais informações. Seja criativo =). 

Veja alguns exemplos que eu criei usando este projeto:

###### Links
Claro que não podia faltar os próprios links, que foi de onde tirei a ideia para iniciar o projeto, então converti algumas informações das minhas páginas em links, sempre que elas levassem a hashtg.

###### Criação de botões
Da mesma maneira que foi criado o link, substitui a variável pelo elemento button e criei botões em alguns elementos das páginas.

###### Span e demais elementos
Em alguns casos fiz alteração para um simples span, em outros formatei o texto adicionando 'bold', 'italic' e entre outras opções. 

*** 

// "author": "Rahel William"
// "co-author": "Douglas Volkart"
//  "license": "ISC"