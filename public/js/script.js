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

