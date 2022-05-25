
let text_output_field = document.getElementById('text_output_field');

    document.getElementById('our_participant_name_input_box').
    addEventListener('change', function(e)
    {
    let participant_name_input_box_id = e.target.id; 
    let button_field_id = 'our_participant';
    let participant_tag = document.getElementById(participant_name_input_box_id)
    let button_field_tag = document.getElementById(button_field_id); 
    button_field_tag.innerHTML += `<button onclick="add_record('text_output_field', '${participant_tag.value}')" class="${button_field_id + '_button'}">${participant_tag.value}</button>`;
    clear_text_input(participant_tag);
});

    document.getElementById('their_participant_name_input_box').
    addEventListener('change', function(e)
    {
      
    let participant_name_input_box_id = e.target.id; 
    let button_field_id = 'their_participant';
    let participant_tag = document.getElementById(participant_name_input_box_id)
    let button_field_tag = document.getElementById(button_field_id); 
    button_field_tag.innerHTML += `<button onclick="add_record('text_output_field', '${participant_tag.value}')" class="${button_field_id + '_button'}">${participant_tag.value}</button>`;
    clear_text_input(participant_tag);
});


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

  let record_count = 0;

  function add_record(record_field_id, name) {
    record_count++;
      let record_tag = document.getElementById(record_field_id);
      const current_date = new Date();
    //   record_tag.innerHTML = `<p><span>[09:27:05] </span>conversation daialog<span> name</span></p>` + record_tag.innerHTML;
      record_tag.innerHTML += `<p id="record_${record_count}"><span class="time" id="record_time_${record_count}">
      [${current_date.getHours()}:${current_date.getMinutes()}:${current_date.getSeconds()}] 
      </span>conversation daialog<span class="participant_name ${name}"> ${name}</span></p>`;

      text_output_field.scrollTo(0, text_output_field.scrollHeight);
    
  }

  function change_sub(record_field_id){
      let record_tag = document.getElementById(record_field_id);
    //   record_tag.innerHTML = `<p>------another topic-------</p>` + record_tag.innerHTML ;
      record_tag.innerHTML += `<p class="anoter_topic_line">------another topic-------</p>`; 
      text_output_field.scrollTo(0, text_output_field.scrollHeight);

  }