const uparImagem = () => {
    const fileInput = document.getElementById('fileInput');
    fileInput.click();

    fileInput.onchange = () => {
        const file = fileInput.files[0];

        const reader = new FileReader();

        reader.onload = (event) => {
            const imagem = document.getElementById('img');
            imagem.src = event.target.result;
        };

        reader.readAsDataURL(file);

    };
};

function handleChange(selectElement) {
    console.log("entrou no handle");
    selectElement.form.submit();
    updateIndex(selectElement);
}

function updateIndex(selectElement) {
    console.log("uuuuuuuuuuuu");
    const selectedIndex = selectElement.selectedIndex - 1;
    document.getElementById('selectedIndex').value = selectedIndex;
    const editForm = document.getElementById('editForm');
    
    console.log(editForm.action)
    editForm.action = '/editarSala/' + selectElement.value;
    console.log(editForm.action)
}

