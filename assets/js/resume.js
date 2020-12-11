window.onload = function() {
alert("meow")
function resumeLoad() {
    var gitUser = "https://api.github.com/users/davidsaulrodriguez"
    $.ajax({
        url: gitUser,
        method: "GET"
    }).then(function(response){
        console.log(response)
    })
}
resumeLoad();

}