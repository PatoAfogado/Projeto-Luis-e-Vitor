class Loader {
    constructor(url, form, dadosPessoa) {
        this.form = form;
        this.dadosPessoa = dadosPessoa;
        this.request(url);
    }

    request(url) {
        axios.get(url)
        .then(response => {
            this.form.innerHTML = response.data;
            this.carregaDadosPessoa();
        })
        .catch(error => {
            console.error(error)
        });
    };

    carregaDadosPessoa () {
        this.form.querySelector('#nome').value = this.dadosPessoa.nome
        this.form.querySelector('#sobrenome').value = this.dadosPessoa.sobrenome
        this.form.querySelector('#email').value = this.dadosPessoa.email
    };
}

class Action {
    constructor (button) {
        this.button = button;
        this.form = document.querySelector('.form');
        this.execute();
    };

    execute () {
        if (this.button.value === 'Continuar') {
            this.form.addEventListener('submit', e => {
                this.loadNewContatos(e);
            });
            return;
        };

        this.form.addEventListener('submit', e => {
            this.enviaFormulario(e);
        });

    };

    handleSubmit (e) {
        e.preventDefault();
    };

    loadNewContatos (e) {
        this.handleSubmit(e);

        const [nome, sobrenome, email] = [
            this.form.querySelector('#nome').value,
            this.form.querySelector('#sobrenome').value,
            this.form.querySelector('#email').value
        ];
        const dadosPessoa = new Pessoa(nome, sobrenome, email);
        const loader = new Loader('contato2.html', this.form, dadosPessoa);
    };

    enviaFormulario(e) {
        this.handleSubmit(e);

        try {
            const assunto = this.form.querySelector('#assunto').value;
            const mensagem = this.form.querySelector('#mensagem').value;

            alert(`Formulario enviado: \nAssunto: ${assunto}` +
                  `\nMensagem: ${mensagem}`);
            this.form.submit();
        
        } catch (error) {
            console.error(error)
        };
    };

};


class Pessoa {
    constructor(nome, sobrenome, email) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
    };

};

document.addEventListener('click', e => {
    
    if (e.target.value === 'Continuar') { 
        const actContinuar = new Action(e.target);
        return;
    };
    if (e.target.value === 'Enviar formul??rio') {
        const actEnviaForm = new Action(e.target);
        return;
    };
});

