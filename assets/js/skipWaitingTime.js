async function skipWaitingTime() {
    const API_KEY = 'Bot A9PSNejjby7Q6s9jAllKpDNAornMw1HZteYCj43EUvAcpvAlwnbwDd8QOQJxSxnw';
    const API_URL = 'https://api.wolvesville.com/';
    const ENDPOINT = 'clans/f4696878-f10a-4b02-bcaa-7ed461d83270/quests/active/skipWaitingTime';

    const headers = new Headers({
        Authorization: API_KEY,
        Accept: 'application/json',
        'Content-Type': 'application/json',
    });

    try {
        const response = await fetch(`${API_URL}${ENDPOINT}`, {
            method: 'POST',
            headers,
        });

        const result = await response.json();

        if (response.status < 200 || response.status >= 300) {
            let customMessage = 'Nenhuma missão ativa ou tempo já skipado.'; // Mensagem padrão

            // Mensagens personalizadas baseadas no conteúdo da resposta
            if (result.message === 'No active quest or already claimed time') {
                customMessage = 'Nenhuma missão ativa ou tempo já skipado.';
            }

            throw new Error(`${customMessage}`);
        }

        console.log(result);
        alert('Tempo de espera pulado com sucesso!');
    } catch (error) {
        console.error(error.message);
        alert(`${error.message}`);
    }
}