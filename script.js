let result = document.getElementById('result')
function appendToDisplay(value){
    result.value += value;
}
function clearFunction(){
    result.value=""
}
function delFunction(){
    result.value = result.value.toString().slice(0,-1)
}
document.addEventListener('keydown', function(event) {
    if (!event.key.match(/[0-9]/)) {
        alert('Only numbers are allowed');
    }
});
function calculateResult() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = 'Error';
    }
}