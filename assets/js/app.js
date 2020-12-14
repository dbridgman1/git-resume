$(function() {
    
    function randomCatFact(){
        $.ajax ({
            url: "https://catfact.ninja/facts?limit=2",
            method: "GET"
        }).then(function(response){
            $('#catPic').html(`
            <div class="modal-content">
                <h4>Random Cat Fact</h4>
                <p>${response.data[0].fact}</p>
            </div>
            <div class="modal-footer">
                <a href="#!" class="modal-action modal-close btn green darken-1">Close</a>
            </div>
            `)
        })
    };

    function randomCatGif(){
        $.ajax ({
            url: "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cats&rating=pg",
            method: "GET" 
        }).then(function(response){
            $('#catGif').html(`
            <div class="modal-content">
                <h4>Random Cat Giphy</h4>
                <img src="${response.data.image_original_url}" alt="cat giphy">
            </div>
            <div class="modal-footer">
                <a href="#!" class="modal-action modal-close btn green darken-1">Close</a>
            </div>
            `)
        })
    };
    

    $('.sidenav').sidenav();
    $('#terms').modal();
    $('#privacy').modal();
    $('#catPic').modal({
        onOpenEnd: randomCatFact(),
        onOpenStart: randomCatFact()
    });
    $('#catGif').modal({
        onOpenStart: randomCatGif()
    });
});

