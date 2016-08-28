class CurrencyFormatter {
  static formatCurrency(currency) {
    let currencyString = currency.toString()
    let chunksCount = Math.floor(currencyString.length / 3)
    let chunkBeginIndices = Array(chunksCount).fill().map((_, i) => currencyString.length - ((i + 1) * 3))
    let chunks = chunkBeginIndices.map((index) => currencyString.substr(index, 3))
    if (chunkBeginIndices[0] !== 0) {
      chunks.unshift(currencyString.substr(0, chunkBeginIndices[0]))
    }

    return chunks.join(",")
  }
}

module.exports = CurrencyFormatter
