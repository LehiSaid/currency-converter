const convertButton = document.querySelector('.convert-button');
const currencySelect = document.querySelector('.currency-select');
const refreshButton = document.querySelector('.refresh-button');

// Objeto para armazenar as cotações da API
let cotacoes = {
    dolar: 0,
    euro: 0,
    libra: 0
};

// ========== NOVA FUNÇÃO: Buscar cotações da API ==========
const buscarCotacoes = async () => {
    try {
        const resposta = await fetch(
            'https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,GBP-BRL'
        );
        const dados = await resposta.json();

        cotacoes = {
            dolar: parseFloat(dados.USDBRL.bid),
            euro: parseFloat(dados.EURBRL.bid),
            libra: parseFloat(dados.GBPBRL.bid)
        };

        // ========== NOVO: Exibe a data/hora da atualização ==========
        const dataAtualizacao = dados.USDBRL.create_date;
        const updateTimeElement = document.querySelector('.update-time');
        
        // Formata a data para o padrão brasileiro
        const dataFormatada = new Date(dataAtualizacao).toLocaleString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
        
        updateTimeElement.innerHTML = `Cotações atualizadas em: ${dataFormatada}`;

        console.log('✅ Cotações atualizadas:', cotacoes);

    } catch (erro) {
        console.error('❌ Erro ao buscar cotações:', erro);
        alert('Não foi possível buscar as cotações. Verifique sua conexão.');
    }
};

// ========== FUNÇÃO CONVERTIDA PARA USAR COTAÇÕES DINÂMICAS ==========
function convertValues() {
    const inputCurrencyValue = document.querySelector('.input-currency').value;
    const currencyValueToConvert = document.querySelector('.currency-value-to-convert');
    const currencyValueConverted = document.querySelector('.currency-value');

    // Verifica se as cotações foram carregadas
    if (cotacoes.dolar === 0) {
        alert('Aguarde, carregando cotações...');
        return;
    }

    // Usa as cotações da API em vez de valores fixos
    if (currencySelect.value === "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputCurrencyValue / cotacoes.dolar);
    }

    if (currencySelect.value === "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrencyValue / cotacoes.euro);
    }

    if (currencySelect.value === "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP'
        }).format(inputCurrencyValue / cotacoes.libra);
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(inputCurrencyValue);
}

// ========== SUA FUNÇÃO ORIGINAL (sem alterações) ==========
function changeCurrency() {
    const currencyName = document.getElementById('currancy-name');
    const currencyImage = document.querySelector('.currency-img');

    if (currencySelect.value === "dolar") {
        currencyName.innerHTML = "Dólar americano";
        currencyImage.src = "./assets/estados-unidos.png";
    }
    if (currencySelect.value === "euro") {
        currencyName.innerHTML = "Euro";
        currencyImage.src = "./assets/euro.png";
    }
    if (currencySelect.value === "libra") {
        currencyName.innerHTML = "Libra esterlina";
        currencyImage.src = "./assets/libra.png";
    }

    convertValues();
}

// ========== EVENT LISTENERS ==========
currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);
refreshButton.addEventListener('click', buscarCotacoes);

// ========== INICIALIZAÇÃO: Busca cotações ao carregar a página ==========
buscarCotacoes();