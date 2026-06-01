export const ENTRADA_CATEGORIAS = [
  "Dízimo",
  "Oferta",
  "Campanha",
  "Evento",
  "Doação",
  "Venda",
  "Outros",
] as const;

export const SAIDA_CATEGORIAS = [
  "Aluguel",
  "Água",
  "Energia",
  "Internet",
  "Eventos",
  "Compras",
  "Manutenção",
  "Salários",
  "Outros",
] as const;

export const PAYMENT_METHODS = [
  { value: "pix", label: "PIX" },
  { value: "cartao", label: "Cartão" },
  { value: "dinheiro", label: "Dinheiro" },
  { value: "boleto", label: "Boleto" },
  { value: "transferencia", label: "Transferência" },
] as const;

export type PaymentMethod = (typeof PAYMENT_METHODS)[number]["value"];
export type TransactionType = "entrada" | "saida";

export const formatBRL = (n: number) =>
  n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export const formatDate = (iso: string) => {
  if (!iso) return "";
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y}`;
};
