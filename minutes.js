function add_participant(participant){
    const our_button = "our";
    const their_button = "their";

    if (our_button == participant){

    }else if(their_button == participant){

    }
}

function clear_text_input(input_tag){
    input_tag.value = '';
}

function a() {
    console.log('a\nb\nc\n')

}

function init() {

    document.getElementById("our_participant_name_input_box")
    .addEventListener("change", function(){


    })
}

function down(fileName, text) {
    const blob = new Blob(['abcd\negfh'], { type: 'text/plain' });
    const aTag = document.createElement('a');
    aTag.href = URL.createObjectURL(blob);
    aTag.target = '_blank';
    aTag.download = fileName;
    aTag.click();
    URL.revokeObjectURL(aTag.href);
  }

  function add_record() {

    
  }