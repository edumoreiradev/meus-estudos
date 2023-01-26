# tags

method ( get or post)
post: criar algo como login 
<form action="" method=""></form>

# fieldset
disable: desabilita o envio do formulário

não precisa estar dentro do form 

legend: nome agrupamento
primeiro elemento dentro do fieldset

# label
associar e identificar entrada de dados

<label for="nome"></label>
<input id="nome" type="text">

# button 
disable: depois usar com Js
name: usado junto com value receber o valor de um botão
autofocus: usar em botã principal, da pra usar (enter)
form: atribuir botão ao form
<button type="submit" autofocus >Enviar</button>

# datalist 

não suporta botões nem checkeds nem urls

<datalist id="fruitsdata">
    <option>apple</option>
    <option>banana</option>
    <option>mango</option>
    <option>orange</option>
</datalist>

<input type="text" list="fruitsdata" placeholder="escolha uma fruta"/>

<datalist id="colorsdata">
    <option>#ff0000</option>
    <option>#00ff00</option>
</datalist>

<input type="color" list="colorsdata"/>