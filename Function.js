
var todo =[];
var done =[];

var div1 = document.getElementById(undone)
var div2 = document.getElementById(done)
var check = document.getElementsByName(check)

function add(){
todo.push(document.getElementById(myInput).textContent)
todo.forEach(element => {
    document.write(<tr><td><input type="checkbox" name="check" value="ok"></input> <label>todo.element</label></td></tr>)
    
});
}
function Check(){


}

