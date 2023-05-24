/**
 * Приводим к строке со знаком рубля
 */
export const useMoneyFormat = () => {
  return (number?: number) => {
    if (!number) return 'н/д'
    return new Intl.NumberFormat('ru-Ru', {
      style: 'currency',
      currency: 'RUB',
    }).format(number)
  }
}
