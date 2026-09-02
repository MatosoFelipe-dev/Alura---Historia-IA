const nomes = ["RMP", "FLH", "ANG", "PRT", "JJT","UYV", "KST"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes);
