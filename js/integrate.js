	function integrateit(){
	document.getElementById('diff').style.display = 'none';
	var strExpr = document.getElementById('eq').value;
	var lookfor = document.getElementById('variable').value;
	var x = nerdamer('integrate('+strExpr+', '+lookfor+')');
	document.getElementById('diff').innerHTML = x.toString();
	 easy();
}
	
	var strExpr = document.getElementById('eq').value;
	var lookfor = document.getElementById('variable').value;
	var x = nerdamer('integrate('+strExpr+', '+lookfor+')');
 
  const expr = document.getElementById('diff');
  //const diff = document.getElementById('diff')
  const pretty = document.getElementById('beauti')
  //const result = document.getElementById('result')
  let parenthesis = 'keep'
  let implicit = 'hide'

  // initialize with an example expression
  //expr.value = nerdamer('integrate('+strExpr+', '+lookfor+')');
  pretty.innerHTML = '$$' + math.parse(expr.innerText).toTex({parenthesis: parenthesis}) + '$$'
  //result.innerHTML = math.format(math.evaluate(expr.value))

  
	function easy() {
    let node = null

    try {
      // parse the expression
	  var x = nerdamer('integrate('+strExpr+', '+lookfor+')');
	  //alert(expr.value);
      node = math.parse(expr.innerText)

      // evaluate the result of the expression
      //result.innerHTML = math.format(node.compile().evaluate())
    }
    catch (err) {
      //result.innerHTML = '<span style="color: red;">' + err.toString() + '</span>'
    }

    try {
      // export the expression to LaTeX
      const latex = node ? node.toTex({parenthesis: parenthesis, implicit: implicit}) : ''
      console.log('LaTeX expression:', latex)

      // display and re-render the expression
      const elem = MathJax.Hub.getAllJax('pretty')[0]
      MathJax.Hub.Queue(['Text', elem, latex])
    }
    catch (err) {}
  }
