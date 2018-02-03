class DateConverter{
    constructor(){
        throw new Error('Esta classe não pode ser instanciada');
    }

    static paraTexto(data){
        let dia = data.getDate();
        let mes = data.getMonth() + 1;   
        let ano = data.getFullYear();

        return `${dia}/${mes}/${ano}`;
    }

    static paraData(texto){
        if(/^\d{4}-\d{2}-\d{2}$/.test(texto)){
            throw new Error('Data deve estar no formato aaaa-mm-dd');
        }

        let data = new Date(...
            texto
            .split('-')
            .map((item, indice) => item - indice % 2));

        return data;
    }
}