# inputs
autocomplete="o tipo de input"

autofocus: automaticamente focado (1 por pagina)

minlength:" minino de valor" 
maxlength:" maxino de valor"

pattern: 

# input file
deve-se ter um form estrutura da seguinte maneira
<form action="" method="" enctyppe="multipart/form-data"> </form>

# checkbox

<label for="subscribe"> Rceber notificções</label>
<input type="checkbox" name="subscribe" id="subscribe" value="ok" checked>

names iguais pra marcar multiplos valores
mas com id de cada um diferente

# hidden
<input type="hidden" name="id" value="8">

# radio
uma unica opção de um grupo de opçoes

<fieldset>
<legend>Bora tomar um café?</legend>

<label for="yep">sim</label>
<input checked type="radio" id="yep" name="coffee" value="yes"/>

<label for="nono">não</label>
<input type="radio" id="nono" name="coffee" value="no"/>

</fieldset>

# textarea
rows: linhas
cols: colunas
maxlength
minlength
wrap: limites da caixa off: pra não quebrar a linha

<label for="mensagem">Mensagem</label>
<textarea id="mensagem"> </textarea>

# select

<label for="carselect">Qual o modelo do carro</label>
<select name="carmodel" id="carselect" multiple>
    <option value="">Selecione o modelo</option>
    <option value="fiat">Uno</option>
    <option value="audi">A3</option>
    <option value="bmw">X6</option>

</select>

# range
<input type="range" min="-10" max="10" step="5" />

# date
<input type="date"/>
<input type="time"/>