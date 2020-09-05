
function main() {

  document.getElementById("input").addEventListener("keydown", function (event) {
    console.log(event);
    event.preventDefault();
  });

  document.getElementById("boton").addEventListener("click", function (event) {
    console.log(event);
    event.preventDefault();
    event.stopPropagation();
  });


}

function mostrarConsola() {
  console.log('DIV click');
}

main();