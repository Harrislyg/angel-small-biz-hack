class CurrencyFormatter {
  static formatCurrency(currency) {
    let originallyNegative = currency < 0
    currency = Math.abs(currency)

    let currencyString = Math.round(currency).toString()
    let chunksCount = Math.floor(currencyString.length / 3)
    let chunkBeginIndices = Array(chunksCount).fill().map((_, i) => currencyString.length - ((i + 1) * 3)).reverse()
    let chunks = chunkBeginIndices.map((index) => currencyString.substr(index, 3))
    if (chunkBeginIndices[0] !== 0) {
      chunks.unshift(currencyString.substr(0, chunkBeginIndices[0]))
    }

    let joined = chunks.join(",")
    if (originallyNegative) {
      joined = "-" + joined
    }
    return joined
  }
}

module.exports = CurrencyFormatter
