let i = 0;
let j = i.toString();
let idb = 'id' + j;
let idr = j;
let id_array = [];
let rm_array = [];

function addList() {
    let list = [];
    let j = i.toString();
    let idb = 'id' + j;
    let idr = j;
    let input = document.createElement('input');
    input.setAttribute('class', 'detail');
    input.setAttribute('id', idb);
    input.setAttribute('placeholder', `${i+1}] Enter your aim`);
    document.body.appendChild(input);
    let main_idb = document.getElementById(idb);
    id_array.push(main_idb);
    let remove = document.createElement('button');
    remove.textContent = '-';
    remove.setAttribute('class', 'remBtn');
    remove.setAttribute('onclick', 'remove(this.id)');
    remove.setAttribute('id', idr);

    document.body.appendChild(remove);
    let main_idr = document.getElementById(idr);
    rm_array.push(main_idr);
    //document.body.appendChild(document.createElement('br'));
    i++;
    console.log(id_array);

}

function remove(no) {

    console.log(no)
    let reminput = id_array[no];
    let rembtn = rm_array[no];
    reminput.style.display = "none";
    rembtn.style.display = "none";

}